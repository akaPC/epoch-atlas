import { useMemo } from 'react';
import { scaleLog, line as d3line } from 'd3';
import type { TechEvent } from '@/data/schema';
import { useSize } from '@/lib/useSize';
import { formatYear, formatInterval } from '@/lib/format';
import { makeTimeScale, TICK_YEARS } from './timeScale';

const HEIGHT = 320;
const M = { top: 20, right: 16, bottom: 44, left: 64 };

export interface IntervalPoint {
  year: number;
  interval: number;
  from: TechEvent;
  to: TechEvent;
}

export function computeIntervals(events: TechEvent[], minSignificance: number): IntervalPoint[] {
  const s = events.filter((e) => e.significance >= minSignificance).sort((a, b) => a.date.year - b.date.year);
  const out: IntervalPoint[] = [];
  for (let i = 1; i < s.length; i++) {
    const from = s[i - 1]!, to = s[i]!;
    const interval = Math.max(0.083, to.date.year - from.date.year);
    out.push({ year: to.date.year, interval, from, to });
  }
  return out;
}

export function AccelerationChart({ points }: { points: IntervalPoint[] }) {
  const [ref, size] = useSize<HTMLDivElement>();
  const width = Math.max(320, size.width);
  const innerW = width - M.left - M.right;
  const innerH = HEIGHT - M.top - M.bottom;
  const x = useMemo(() => makeTimeScale(innerW), [innerW]);
  const y = useMemo(() => scaleLog().domain([0.05, 2_000_000]).range([innerH, 0]).clamp(true), [innerH]);
  const path = useMemo(() => {
    const l = d3line<IntervalPoint>().x((d) => x.x(d.year)).y((d) => y(d.interval));
    return l(points) ?? '';
  }, [points, x, y]);
  const yTicks = [0.1, 1, 10, 100, 1000, 10000, 100000, 1000000];

  return (
    <div ref={ref} className="w-full">
      <svg width={width} height={HEIGHT} role="img" aria-label="Interval between high-significance events over time, both axes logarithmic" className="block">
        <g transform={`translate(${M.left},${M.top})`}>
          {yTicks.map((t) => (
            <g key={t} transform={`translate(0,${y(t)})`}>
              <line x2={innerW} stroke="#22d3ee" strokeOpacity={0.1} />
              <text x={-8} dy={3} textAnchor="end" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace">
                {t >= 1 ? `${t.toLocaleString('en-US')} y` : `${Math.round(t * 12)} mo`}
              </text>
            </g>
          ))}
          {TICK_YEARS.filter((_, i) => i % 2 === 0).map((t) => (
            <g key={t} transform={`translate(${x.x(t)},${innerH})`}>
              <line y2={5} stroke="#9aa7b4" strokeOpacity={0.6} />
              <text y={16} textAnchor="middle" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace">
                {formatYear(t)}
              </text>
            </g>
          ))}
          <path d={path} fill="none" stroke="#22d3ee" strokeWidth={1.25} strokeOpacity={0.8} />
          {points.map((p) => (
            <circle key={`${p.from.id}-${p.to.id}`} cx={x.x(p.year)} cy={y(p.interval)} r={3} fill="#f5b625">
              <title>
                {`${p.from.title} to ${p.to.title}: ${formatInterval(p.interval)}`}
              </title>
            </circle>
          ))}
          <text x={innerW} y={-6} textAnchor="end" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace" letterSpacing="0.1em">
            Y: GAP TO PREVIOUS HIGH-SIGNIFICANCE EVENT (LOG)
          </text>
        </g>
      </svg>
    </div>
  );
}
