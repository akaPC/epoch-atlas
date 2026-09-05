import type { ForecastModel } from '@/data/schema';

interface Props {
  models: ForecastModel[];
  weights: Record<string, number>;
  onChange: (id: string, value: number) => void;
  onReset: () => void;
}

export function WeightPanel({ models, weights, onChange, onReset }: Props) {
  const total = models.reduce((n, m) => n + (weights[m.id] ?? 0), 0) || 1;
  return (
    <div className="panel brackets brackets--amber p-4" data-testid="weight-panel">
      <div className="mb-3 flex items-center justify-between">
        <div className="index-label index-label--amber">ENSEMBLE WEIGHTS <span aria-hidden="true">//</span> DRAG TO RE-WEIGHT</div>
        <button type="button" className="btn" onClick={onReset} data-testid="weights-reset">
          Reset
        </button>
      </div>
      <ul className="space-y-2">
        {models.map((m) => {
          const w = weights[m.id] ?? 0;
          return (
            <li key={m.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <label htmlFor={`w-${m.id}`} className="min-w-0">
                <span className="block truncate font-mono text-[0.66rem] tracking-[0.1em] text-secondary">
                  {String(m.index).padStart(2, '0')} {m.shortName.toUpperCase()}
                </span>
                <input
                  id={`w-${m.id}`}
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={Math.round(w * 100)}
                  onChange={(e) => onChange(m.id, Number(e.target.value) / 100)}
                  className="mt-1 w-full"
                  data-testid={`weight-${m.id}`}
                  aria-valuetext={`${Math.round((w / total) * 100)} percent of ensemble`}
                />
              </label>
              <span className="w-12 text-right font-mono text-[0.7rem] text-amber" data-testid={`weight-pct-${m.id}`}>
                {Math.round((w / total) * 100)}%
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs text-secondary">Weights are normalized to sum to 100 percent. The chart, medians and interquartile ranges re-render as you drag. Nothing is stored.</p>
    </div>
  );
}
