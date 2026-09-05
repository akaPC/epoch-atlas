import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { select, drag } from 'd3';
import type { Domain, Epoch, TechEvent } from '@/data/schema';
import { DOMAINS, DOMAIN_LABELS } from '@/data/schema';
import { useSize } from '@/lib/useSize';
import { formatYear } from '@/lib/format';
import { epochAccent } from '@/lib/record';
import { useFocus } from '@/app/state/FocusContext';
import { makeTimeScale, TICK_YEARS, SPLIT_YEAR } from './timeScale';

interface Props {
  epochs: Epoch[];
  events: TechEvent[];
}

const HEIGHT = 300;
const MARGIN = { top: 26, right: 12, bottom: 44, left: 12 };
const LANES = 7;

/** Assign lanes greedily so nearby markers do not overlap. */
function assignLanes(items: { x: number; r: number }[]): number[] {
  const laneEnds: number[] = Array(LANES).fill(-Infinity);
  return items.map((it) => {
    let lane = laneEnds.findIndex((end) => it.x - it.r > end + 2);
    if (lane === -1) {
      lane = laneEnds.indexOf(Math.min(...laneEnds));
    }
    laneEnds[lane] = it.x + it.r;
    return lane;
  });
}

export function Timeline({ epochs, events }: Props) {
  const [ref, size] = useSize<HTMLDivElement>();
  const navigate = useNavigate();
  const { setFocus } = useFocus();
  const [activeDomains, setActiveDomains] = useState<Set<Domain>>(new Set());
  const [hover, setHover] = useState<TechEvent | null>(null);
  const [scrubYear, setScrubYear] = useState<number | null>(null);
  const scrubRef = useRef<SVGGElement>(null);
  const overlayRef = useRef<SVGRectElement>(null);

  const width = Math.max(320, size.width);
  const innerW = width - MARGIN.left - MARGIN.right;
  const scale = useMemo(() => makeTimeScale(innerW), [innerW]);

  const filtered = useMemo(
    () => (activeDomains.size === 0 ? events : events.filter((e) => e.domains.some((d) => activeDomains.has(d)))),
    [events, activeDomains],
  );

  const markers = useMemo(() => {
    const sorted = [...filtered].sort((a, b) => a.date.year - b.date.year);
    const base = sorted.map((e) => ({ e, x: scale.x(e.date.year), r: 2 + e.significance * 0.55 }));
    const lanes = assignLanes(base);
    const laneH = (HEIGHT - MARGIN.top - MARGIN.bottom - 30) / LANES;
    return base.map((b, i) => ({ ...b, y: MARGIN.top + 30 + (lanes[i] ?? 0) * laneH + laneH / 2 }));
  }, [filtered, scale]);

  const epochAt = useCallback(
    (year: number) => epochs.find((ep) => year >= ep.startYear && year <= ep.endYear) ?? null,
    [epochs],
  );

  // Scrubber: direct DOM updates for 60fps; React state only on end.
  useEffect(() => {
    const overlay = overlayRef.current;
    const g = scrubRef.current;
    if (!overlay || !g) return;
    const sel = select(g);
    const line = sel.select<SVGLineElement>('line');
    const label = sel.select<SVGTextElement>('text');
    const update = (px: number) => {
      const clamped = Math.max(0, Math.min(innerW, px));
      const year = scale.invert(clamped);
      line.attr('x1', clamped).attr('x2', clamped);
      label.attr('x', clamped < innerW - 140 ? clamped + 6 : clamped - 6).attr('text-anchor', clamped < innerW - 140 ? 'start' : 'end').text(formatYear(Math.round(year)));
      sel.style('display', null);
      const ep = epochAt(year);
      setFocus(ep ? `${String(ep.index).padStart(2, '0')} // ${ep.code} // ${formatYear(Math.round(year))}` : `RECORD // ${formatYear(Math.round(year))}`);
      return year;
    };
    const d = drag<SVGRectElement, unknown>()
      .on('start drag', (ev) => update(ev.x))
      .on('end', (ev) => setScrubYear(update(ev.x)));
    select(overlay).call(d);
    const onMove = (ev: MouseEvent) => {
      const rect = overlay.getBoundingClientRect();
      update(ev.clientX - rect.left);
    };
    overlay.addEventListener('mousemove', onMove);
    return () => {
      overlay.removeEventListener('mousemove', onMove);
      select(overlay).on('.drag', null);
    };
  }, [innerW, scale, epochAt, setFocus]);

  const toggleDomain = (d: Domain) =>
    setActiveDomains((prev) => {
      const next = new Set(prev);
      if (next.has(d)) next.delete(d);
      else next.add(d);
      return next;
    });

  const scrubEpoch = scrubYear !== null ? epochAt(scrubYear) : null;

  return (
    <div className="panel brackets p-3 sm:p-4" data-testid="timeline">
      <div className="mb-3 flex flex-wrap items-center gap-1" role="group" aria-label="Filter by domain">
        <span className="mr-2 font-mono text-[0.62rem] tracking-[0.14em] text-secondary">LENS</span>
        {DOMAINS.map((d) => (
          <button key={d} type="button" className="chip" aria-pressed={activeDomains.has(d)} onClick={() => toggleDomain(d)}>
            {DOMAIN_LABELS[d]}
          </button>
        ))}
        {activeDomains.size > 0 && (
          <button type="button" className="chip" onClick={() => setActiveDomains(new Set())}>
            Clear
          </button>
        )}
      </div>
      <div ref={ref} className="w-full">
        <svg
          width={width}
          height={HEIGHT}
          role="img"
          aria-label={`Master timeline of ${filtered.length} events across ${epochs.length} epochs. Logarithmic before ${SPLIT_YEAR}, linear after.`}
          className="block select-none"
        >
          <g transform={`translate(${MARGIN.left},0)`}>
            {epochs.map((ep) => {
              const x0 = scale.x(ep.startYear);
              const x1 = scale.x(ep.endYear);
              return (
                <g key={ep.id}>
                  <rect x={x0} y={MARGIN.top} width={Math.max(1, x1 - x0)} height={HEIGHT - MARGIN.top - MARGIN.bottom} fill={epochAccent(ep.index)} fillOpacity={0.06} stroke={epochAccent(ep.index)} strokeOpacity={0.25} />
                  {x1 - x0 > 26 && (
                    <text x={x0 + 4} y={MARGIN.top + 12} fill={epochAccent(ep.index)} fontSize={9} fontFamily="JetBrains Mono, monospace" letterSpacing="0.1em">
                      {String(ep.index).padStart(2, '0')}
                    </text>
                  )}
                </g>
              );
            })}
            <line x1={scale.splitX} x2={scale.splitX} y1={MARGIN.top} y2={HEIGHT - MARGIN.bottom} stroke="#f5b625" strokeOpacity={0.5} strokeDasharray="3 3" />
            <text x={scale.splitX} y={MARGIN.top - 8} textAnchor="middle" fill="#f5b625" fontSize={9} fontFamily="JetBrains Mono, monospace" letterSpacing="0.1em">
              LOG | LINEAR
            </text>
            {TICK_YEARS.map((t) => (
              <g key={t} transform={`translate(${scale.x(t)},${HEIGHT - MARGIN.bottom})`}>
                <line y2={6} stroke="#9aa7b4" strokeOpacity={0.6} />
                <text y={18} textAnchor="middle" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace">
                  {formatYear(t)}
                </text>
              </g>
            ))}
            {markers.map(({ e, x, y, r }) => (
              <circle
                key={e.id}
                cx={x}
                cy={y}
                r={r}
                fill={epochAccent(epochs.find((ep) => ep.id === e.epochId)?.index ?? 1)}
                fillOpacity={hover && hover.id !== e.id ? 0.35 : 0.85}
                stroke="#05070a"
                strokeWidth={1}
                className="cursor-pointer"
                onMouseEnter={() => setHover(e)}
                onMouseLeave={() => setHover(null)}
                onClick={() => navigate(`/record/events/${e.id}`)}
                tabIndex={0}
                role="link"
                aria-label={`${e.title}, ${e.date.display}, significance ${e.significance}`}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter' || ev.key === ' ') navigate(`/record/events/${e.id}`);
                }}
                onFocus={() => setHover(e)}
                onBlur={() => setHover(null)}
              />
            ))}
            <g ref={scrubRef} style={{ display: 'none' }} pointerEvents="none">
              <line y1={MARGIN.top} y2={HEIGHT - MARGIN.bottom} stroke="#22d3ee" strokeWidth={1} />
              <text y={MARGIN.top + 22} fill="#22d3ee" fontSize={10} fontFamily="JetBrains Mono, monospace" letterSpacing="0.08em" />
            </g>
            <rect ref={overlayRef} x={0} y={MARGIN.top} width={innerW} height={HEIGHT - MARGIN.top - MARGIN.bottom} fill="transparent" style={{ cursor: 'col-resize' }} pointerEvents="all" aria-hidden="true" />
            {markers.map(({ e, x, y, r }) => (
              <circle key={`hit-${e.id}`} cx={x} cy={y} r={r + 3} fill="transparent" className="cursor-pointer" onMouseEnter={() => setHover(e)} onMouseLeave={() => setHover(null)} onClick={() => navigate(`/record/events/${e.id}`)} aria-hidden="true" />
            ))}
          </g>
        </svg>
      </div>
      <div className="mt-2 flex min-h-[3.2rem] flex-wrap items-center justify-between gap-2 border-t border-hairline pt-2 font-mono text-[0.68rem] tracking-[0.1em] text-secondary" aria-live="polite">
        {hover ? (
          <span>
            <span className="text-cyan">{hover.date.display}</span> <span className="text-primary">{hover.title}</span> <span>SIG {hover.significance}</span>
          </span>
        ) : scrubEpoch ? (
          <span>
            SCRUB <span className="text-cyan">{formatYear(Math.round(scrubYear ?? 0))}</span> <span className="text-primary">{scrubEpoch.name}</span>
          </span>
        ) : (
          <span>HOVER A MARKER OR DRAG ACROSS THE BAND. MARKER SIZE = SIGNIFICANCE.</span>
        )}
        <span>{filtered.length} EVENTS</span>
      </div>
    </div>
  );
}
