import { useMemo } from 'react';
import { scaleLinear, line as d3line, area as d3area } from 'd3';
import type { ForecastModel, Percentiles } from '@/data/schema';
import { useSize } from '@/lib/useSize';
import { mixtureCdf } from '@/lib/ensemble';

const HEIGHT = 300;
const M = { top: 20, right: 16, bottom: 36, left: 44 };
const X0 = 2025, X1 = 2110;

interface Props {
  models: ForecastModel[];
  weights: Record<string, number>;
  agi: Percentiles;
  asi: Percentiles;
}

export function EnsembleChart({ models, weights, agi, asi }: Props) {
  const [ref, size] = useSize<HTMLDivElement>();
  const width = Math.max(320, size.width);
  const innerW = width - M.left - M.right;
  const innerH = HEIGHT - M.top - M.bottom;
  const x = useMemo(() => scaleLinear().domain([X0, X1]).range([0, innerW]), [innerW]);
  const y = useMemo(() => scaleLinear().domain([0, 1]).range([innerH, 0]), [innerH]);

  const series = useMemo(() => {
    const years: number[] = [];
    for (let yr = X0; yr <= X1; yr += 0.5) years.push(yr);
    const build = (key: 'agi' | 'asi') => {
      const cdf = mixtureCdf(models, weights, key);
      return years.map((yr) => ({ yr, p: cdf(yr) }));
    };
    return { agi: build('agi'), asi: build('asi') };
  }, [models, weights]);

  const lineGen = d3line<{ yr: number; p: number }>().x((d) => x(d.yr)).y((d) => y(d.p));
  const areaGen = d3area<{ yr: number; p: number }>().x((d) => x(d.yr)).y0(innerH).y1((d) => y(d.p));

  const band = (p: Percentiles, color: string, label: string) => (
    <g>
      <rect x={x(Math.min(X1, p.p5))} width={Math.max(0, x(Math.min(X1, p.p95)) - x(Math.min(X1, p.p5)))} y={0} height={innerH} fill={color} fillOpacity={0.05} />
      <rect x={x(Math.min(X1, p.p25))} width={Math.max(0, x(Math.min(X1, p.p75)) - x(Math.min(X1, p.p25)))} y={0} height={innerH} fill={color} fillOpacity={0.1} />
      <line x1={x(Math.min(X1, p.p50))} x2={x(Math.min(X1, p.p50))} y1={0} y2={innerH} stroke={color} strokeDasharray="4 3" />
      <text x={x(Math.min(X1, p.p50)) + 4} y={12} fill={color} fontSize={9} fontFamily="JetBrains Mono, monospace" letterSpacing="0.1em">
        {label} {Math.round(p.p50)}
      </text>
    </g>
  );

  return (
    <div ref={ref} className="w-full">
      <svg width={width} height={HEIGHT} role="img" aria-label="Cumulative probability of AGI and ASI arrival by year under the weighted ensemble" className="block">
        <g transform={`translate(${M.left},${M.top})`}>
          {[0.25, 0.5, 0.75, 1].map((t) => (
            <g key={t} transform={`translate(0,${y(t)})`}>
              <line x2={innerW} stroke="#22d3ee" strokeOpacity={0.1} />
              <text x={-8} dy={3} textAnchor="end" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace">
                {Math.round(t * 100)}%
              </text>
            </g>
          ))}
          {[2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100].map((t) => (
            <g key={t} transform={`translate(${x(t)},${innerH})`}>
              <line y2={5} stroke="#9aa7b4" strokeOpacity={0.6} />
              <text y={16} textAnchor="middle" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace">
                {t}
              </text>
            </g>
          ))}
          {band(agi, '#f5b625', 'AGI')}
          {band(asi, '#ff4d4f', 'ASI')}
          <path d={areaGen(series.agi) ?? ''} fill="#f5b625" fillOpacity={0.08} />
          <path d={lineGen(series.agi) ?? ''} fill="none" stroke="#f5b625" strokeWidth={1.75} />
          <path d={lineGen(series.asi) ?? ''} fill="none" stroke="#ff4d4f" strokeWidth={1.75} />
          <text x={innerW} y={innerH + 30} textAnchor="end" fill="#9aa7b4" fontSize={9} fontFamily="JetBrains Mono, monospace" letterSpacing="0.1em">
            CUMULATIVE PROBABILITY OF ARRIVAL BY YEAR. BANDS: P5 TO P95 (LIGHT), P25 TO P75 (DARK), MEDIAN (DASHED).
          </text>
        </g>
      </svg>
    </div>
  );
}
