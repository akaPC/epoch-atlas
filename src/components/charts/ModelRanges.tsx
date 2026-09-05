import { useMemo } from 'react';
import { scaleLinear } from 'd3';
import type { ForecastModel, Percentiles } from '@/data/schema';
import { NEVER_YEAR } from '@/data/schema';
import { useSize } from '@/lib/useSize';

const X0 = 2025, X1 = 2130;
const ROW = 26;
const M = { top: 8, right: 16, bottom: 28, left: 170 };

interface Row {
  id: string;
  label: string;
  p: Percentiles;
  weight: number;
  ensemble?: boolean;
}

export function ModelRanges({ models, weights, ensemble, kind }: { models: ForecastModel[]; weights: Record<string, number>; ensemble: Percentiles; kind: 'agi' | 'asi' }) {
  const [ref, size] = useSize<HTMLDivElement>();
  const width = Math.max(320, size.width);
  const innerW = width - M.left - M.right;
  const rows: Row[] = useMemo(() => {
    const total = models.reduce((n, m) => n + (weights[m.id] ?? 0), 0) || 1;
    return [
      { id: 'ensemble', label: 'ENSEMBLE', p: ensemble, weight: 1, ensemble: true },
      ...models.map((m) => ({ id: m.id, label: m.shortName.toUpperCase(), p: m[kind], weight: (weights[m.id] ?? 0) / total })),
    ];
  }, [models, weights, ensemble, kind]);
  const height = M.top + rows.length * ROW + M.bottom;
  const x = useMemo(() => scaleLinear().domain([X0, X1]).range([0, innerW]).clamp(true), [innerW]);
  const color = kind === 'agi' ? '#f5b625' : '#ff4d4f';

  return (
    <div ref={ref} className="w-full">
      <svg width={width} height={height} role="img" aria-label={`Per-model ${kind.toUpperCase()} arrival percentiles`} className="block">
        <g transform={`translate(${M.left},${M.top})`}>
          {[2030, 2050, 2075, 2100, 2125].map((t) => (
            <g key={t} transform={`translate(${x(t)},0)`}>
              <line y2={rows.length * ROW} stroke="#22d3ee" strokeOpacity={0.1} />
              <text y={rows.length * ROW + 14} textAnchor="middle" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace">
                {t === 2125 ? 'NEVER' : t}
              </text>
            </g>
          ))}
          {rows.map((r, i) => {
            const cy = i * ROW + ROW / 2;
            const c = r.ensemble ? '#22d3ee' : color;
            const p95 = r.p.p95 >= NEVER_YEAR ? X1 : r.p.p95;
            return (
              <g key={r.id} transform={`translate(0,${cy})`}>
                <text x={-8} dy={3} textAnchor="end" fill={r.ensemble ? '#22d3ee' : '#9aa7b4'} fontSize={9} fontFamily="JetBrains Mono, monospace" letterSpacing="0.08em">
                  {r.label}
                </text>
                {!r.ensemble && <text x={-M.left + 4} dy={3} fill="#5c6875" fontSize={8} fontFamily="JetBrains Mono, monospace" aria-hidden="true">{Math.round(r.weight * 100)}%</text>}
                <line x1={x(r.p.p5)} x2={x(p95)} stroke={c} strokeOpacity={0.35} strokeWidth={2} />
                <rect x={x(r.p.p25)} width={Math.max(1, x(r.p.p75) - x(r.p.p25))} y={-5} height={10} fill={c} fillOpacity={r.ensemble ? 0.6 : 0.35} />
                <line x1={x(r.p.p50)} x2={x(r.p.p50)} y1={-8} y2={8} stroke={c} strokeWidth={2} />
                {r.p.p95 >= NEVER_YEAR && <text x={x(X1) + 3} dy={3} fill={c} fontSize={9} fontFamily="JetBrains Mono, monospace">+</text>}
                <title>{`${r.label}: p5 ${Math.round(r.p.p5)}, p25 ${Math.round(r.p.p25)}, p50 ${Math.round(r.p.p50)}, p75 ${Math.round(r.p.p75)}, p95 ${r.p.p95 >= NEVER_YEAR ? 'beyond 2200 or never' : Math.round(r.p.p95)}`}</title>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
