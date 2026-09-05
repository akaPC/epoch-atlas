import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forceSimulation, forceLink, forceManyBody, forceX, forceY, forceCollide, select, zoom, zoomIdentity, type SimulationNodeDatum, type SimulationLinkDatum } from 'd3';
import type { Epoch, TechEvent } from '@/data/schema';
import { useSize } from '@/lib/useSize';
import { ancestors, descendants, epochAccent } from '@/lib/record';
import { makeTimeScale } from './timeScale';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface Node extends SimulationNodeDatum {
  id: string;
  event: TechEvent;
  r: number;
  color: string;
}
interface Link extends SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
}

const HEIGHT = 620;

export function DependencyGraph({ epochs, events, initialSelected }: { epochs: Epoch[]; events: TechEvent[]; initialSelected?: string }) {
  const [ref, size] = useSize<HTMLDivElement>();
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<string | null>(initialSelected ?? null);
  const width = Math.max(320, size.width);
  const epochIndex = useMemo(() => new Map(epochs.map((e) => [e.id, e.index])), [epochs]);

  const { nodes, links } = useMemo(() => {
    const ids = new Set(events.map((e) => e.id));
    const nodes: Node[] = events.map((e) => ({ id: e.id, event: e, r: 2.5 + e.significance * 0.7, color: epochAccent(epochIndex.get(e.epochId) ?? 1) }));
    const seen = new Set<string>();
    const links: Link[] = [];
    for (const e of events)
      for (const p of e.prerequisites) {
        const key = `${p}->${e.id}`;
        if (ids.has(p) && !seen.has(key)) {
          seen.add(key);
          links.push({ source: p, target: e.id });
        }
      }
    return { nodes, links };
  }, [events, epochIndex]);

  const highlight = useMemo(() => {
    if (!selected) return null;
    return { up: ancestors(selected), down: descendants(selected) };
  }, [selected]);

  // Simulation and rendering are handled by D3 directly for performance.
  useEffect(() => {
    const svg = svgRef.current;
    const g = gRef.current;
    if (!svg || !g || width === 0) return;
    const scale = makeTimeScale(width - 40);
    const sel = select(g);
    sel.selectAll('*').remove();

    const simNodes: Node[] = nodes.map((n) => ({
      ...n,
      x: 20 + scale.x(n.event.date.year),
      y: HEIGHT / 2 + (Math.random() - 0.5) * 200,
    }));
    const simLinks: Link[] = links.map((l) => ({ source: l.source, target: l.target }));
    const nodeById = new Map(simNodes.map((n) => [n.id, n]));
    const linkSel = sel.append('g').attr('stroke', '#22d3ee').attr('stroke-opacity', 0.18).selectAll('line').data(simLinks).join('line').attr('stroke-width', 1);
    const nodeSel = sel
      .append('g')
      .selectAll('circle')
      .data(simNodes)
      .join('circle')
      .attr('r', (d) => d.r)
      .attr('fill', (d) => d.color)
      .attr('stroke', '#05070a')
      .attr('stroke-width', 1)
      .attr('tabindex', 0)
      .attr('role', 'button')
      .attr('aria-label', (d) => `${d.event.title}, ${d.event.date.display}`)
      .style('cursor', 'pointer')
      .on('click', (_ev, d) => setSelected((cur) => (cur === d.id ? null : d.id)))
      .on('dblclick', (_ev, d) => navigate(`/record/events/${d.id}`))
      .on('keydown', (ev: KeyboardEvent, d) => {
        if (ev.key === 'Enter') setSelected((cur) => (cur === d.id ? null : d.id));
      });
    nodeSel.append('title').text((d) => `${d.event.title} (${d.event.date.display})`);
    const labelSel = sel
      .append('g')
      .selectAll('text')
      .data(simNodes.filter((n) => n.event.significance >= 9))
      .join('text')
      .text((d) => d.event.title.length > 28 ? d.event.title.slice(0, 27) + '.' : d.event.title)
      .attr('font-size', 9)
      .attr('font-family', 'JetBrains Mono, monospace')
      .attr('fill', '#9aa7b4')
      .attr('pointer-events', 'none');

    const sim = forceSimulation<Node>(simNodes)
      .force('link', forceLink<Node, Link>(simLinks).id((d) => d.id).distance(28).strength(0.35))
      .force('charge', forceManyBody().strength(-38))
      .force('x', forceX<Node>((d) => 20 + scale.x(d.event.date.year)).strength(0.9))
      .force('y', forceY(HEIGHT / 2).strength(0.05))
      .force('collide', forceCollide<Node>((d) => d.r + 2))
      .alphaDecay(reduced ? 0.2 : 0.035);

    const tick = () => {
      linkSel
        .attr('x1', (d) => (d.source as Node).x ?? 0)
        .attr('y1', (d) => (d.source as Node).y ?? 0)
        .attr('x2', (d) => (d.target as Node).x ?? 0)
        .attr('y2', (d) => (d.target as Node).y ?? 0);
      nodeSel.attr('cx', (d) => d.x ?? 0).attr('cy', (d) => Math.max(10, Math.min(HEIGHT - 10, d.y ?? 0)));
      labelSel.attr('x', (d) => (d.x ?? 0) + d.r + 2).attr('y', (d) => Math.max(10, Math.min(HEIGHT - 10, d.y ?? 0)) + 3);
    };
    sim.on('tick', tick);
    if (reduced) {
      sim.stop();
      for (let i = 0; i < 200; i++) sim.tick();
      tick();
    }

    const z = zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 6])
      .on('zoom', (ev) => sel.attr('transform', ev.transform.toString()));
    select(svg).call(z).call(z.transform, zoomIdentity);

    (svg as unknown as { __nodes?: Map<string, Node> }).__nodes = nodeById;
    return () => {
      sim.stop();
      select(svg).on('.zoom', null);
    };
  }, [nodes, links, width, navigate, reduced]);

  // Apply highlight styling without re-running the simulation.
  useEffect(() => {
    const g = gRef.current;
    if (!g) return;
    const sel = select(g);
    sel.selectAll<SVGCircleElement, Node>('circle').attr('fill-opacity', (d) => {
      if (!highlight || !selected) return 0.9;
      if (d.id === selected) return 1;
      return highlight.up.has(d.id) || highlight.down.has(d.id) ? 1 : 0.12;
    }).attr('stroke', (d) => (d.id === selected ? '#e6edf3' : '#05070a')).attr('stroke-width', (d) => (d.id === selected ? 2 : 1));
    sel.selectAll<SVGLineElement, Link>('line').attr('stroke', (d) => {
      if (!highlight || !selected) return '#22d3ee';
      const s = (d.source as Node).id, t = (d.target as Node).id;
      const inUp = (highlight.up.has(s) || s === selected) && (highlight.up.has(t) || t === selected);
      const inDown = (highlight.down.has(s) || s === selected) && (highlight.down.has(t) || t === selected);
      return inUp ? '#f5b625' : inDown ? '#ff4d4f' : '#22d3ee';
    }).attr('stroke-opacity', (d) => {
      if (!highlight || !selected) return 0.18;
      const s = (d.source as Node).id, t = (d.target as Node).id;
      const inUp = (highlight.up.has(s) || s === selected) && (highlight.up.has(t) || t === selected);
      const inDown = (highlight.down.has(s) || s === selected) && (highlight.down.has(t) || t === selected);
      return inUp || inDown ? 0.9 : 0.05;
    });
  }, [highlight, selected]);

  const selectedEvent = selected ? events.find((e) => e.id === selected) : undefined;

  return (
    <div className="panel brackets p-3 sm:p-4" data-testid="dependency-graph">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[0.66rem] tracking-[0.12em] text-secondary">
        <span>
          CLICK A NODE TO HIGHLIGHT <span className="text-amber">ANCESTORS</span> AND <span className="text-red">DESCENDANTS</span>. DOUBLE-CLICK TO OPEN. SCROLL TO ZOOM. X POSITION FOLLOWS THE HYBRID TIME SCALE.
        </span>
        <span>
          {nodes.length} NODES <span aria-hidden="true">//</span> {links.length} EDGES
        </span>
      </div>
      <div ref={ref} className="w-full overflow-hidden">
        <svg ref={svgRef} width={width} height={HEIGHT} role="img" aria-label="Force-directed dependency graph of technological events" className="block">
          <g ref={gRef} />
        </svg>
      </div>
      <div className="mt-2 min-h-[2.4rem] border-t border-hairline pt-2 text-sm" aria-live="polite">
        {selectedEvent ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.66rem] tracking-[0.1em] text-cyan">{selectedEvent.date.display}</span>
            <span className="text-primary">{selectedEvent.title}</span>
            <span className="font-mono text-[0.66rem] text-secondary">
              <span className="text-amber">{highlight?.up.size ?? 0}</span> ANCESTORS <span className="text-red">{highlight?.down.size ?? 0}</span> DESCENDANTS
            </span>
            <button type="button" className="btn" onClick={() => navigate(`/record/events/${selectedEvent.id}`)}>
              Open record
            </button>
            <button type="button" className="btn" onClick={() => setSelected(null)}>
              Clear
            </button>
          </div>
        ) : (
          <span className="font-mono text-[0.66rem] tracking-[0.1em] text-secondary">NO NODE SELECTED</span>
        )}
      </div>
    </div>
  );
}
