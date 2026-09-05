import { useMemo } from 'react';
import { scaleLinear, line as d3line, area as d3area, curveMonotoneX } from 'd3';
import type { CapabilityPoint, Scenario } from '@/data/schema';
import { SCENARIOS, SCENARIO_LABELS } from '@/data/schema';
import { useSize } from '@/lib/useSize';

const HEIGHT = 300;
const M = { top: 16, right: 16, bottom: 36, left: 40 };
const COLORS: Record<Scenario, string> = { slow: '#22d3ee', moderate: '#f5b625', fast: '#ff4d4f' };

interface Props {
  data: Record<Scenario, CapabilityPoint[]>;
  active: Scenario;
  onActivate?: (s: Scenario) => void;
  label: string;
}

export function FanChart({ data, active, onActivate, label }: Props) {
  const [ref, size] = useSize<HTMLDivElement>();
  const width = Math.max(320, size.width);
  const innerW = width - M.left - M.right;
  const innerH = HEIGHT - M.top - M.bottom;
  const x = useMemo(() => scaleLinear().domain([2026, 2126]).range([0, innerW]), [innerW]);
  const y = useMemo(() => scaleLinear().domain([0, 100]).range([innerH, 0]), [innerH]);
  const lineGen = d3line<CapabilityPoint>().x((d) => x(d.year)).y((d) => y(d.value)).curve(curveMonotoneX);
  const areaGen = d3area<CapabilityPoint>().x((d) => x(d.year)).y0((d) => y(d.low)).y1((d) => y(d.high)).curve(curveMonotoneX);
  const order = [...SCENARIOS].sort((a) => (a === active ? 1 : -1));

  return (
    <div ref={ref} className="w-full">
      <svg width={width} height={HEIGHT} role="img" aria-label={`${label} capability index 2026 to 2126 under slow, moderate and fast takeoff, with confidence bands`} className="block">
        <g transform={`translate(${M.left},${M.top})`}>
          {[0, 25, 50, 75, 100].map((t) => (
            <g key={t} transform={`translate(0,${y(t)})`}>
              <line x2={innerW} stroke="#22d3ee" strokeOpacity={0.1} />
              <text x={-8} dy={3} textAnchor="end" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace">
                {t}
              </text>
            </g>
          ))}
          {[2026, 2030, 2040, 2060, 2090, 2126].map((t) => (
            <g key={t} transform={`translate(${x(t)},${innerH})`}>
              <line y2={5} stroke="#9aa7b4" strokeOpacity={0.6} />
              <text y={16} textAnchor="middle" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace">
                {t}
              </text>
            </g>
          ))}
          {order.map((s) => (
            <g key={s} opacity={s === active ? 1 : 0.35} style={{ transition: 'opacity 200ms' }}>
              <path d={areaGen(data[s]) ?? ''} fill={COLORS[s]} fillOpacity={s === active ? 0.16 : 0.06} />
              <path d={lineGen(data[s]) ?? ''} fill="none" stroke={COLORS[s]} strokeWidth={s === active ? 2.25 : 1.25} />
              {data[s].map((p) => (
                <circle key={p.year} cx={x(p.year)} cy={y(p.value)} r={s === active ? 3.5 : 2} fill={COLORS[s]}>
                  <title>{`${SCENARIO_LABELS[s].name} ${p.year}: ${p.value} (band ${p.low} to ${p.high})`}</title>
                </circle>
              ))}
            </g>
          ))}
        </g>
      </svg>
      <div className="mt-1 flex flex-wrap gap-2" role="group" aria-label="Branch">
        {SCENARIOS.map((s) => (
          <button key={s} type="button" className={`chip`} aria-pressed={s === active} onClick={() => onActivate?.(s)} style={{ borderColor: s === active ? COLORS[s] : undefined, color: s === active ? COLORS[s] : undefined }}>
            {SCENARIO_LABELS[s].branch} ({SCENARIO_LABELS[s].name})
          </button>
        ))}
      </div>
    </div>
  );
}
