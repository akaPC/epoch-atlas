import type { Confidence } from '@/data/schema';

const conf: Record<Confidence, string> = { high: 'text-cyan', medium: 'text-amber', low: 'text-red' };

export function MetaRow({
  lastReviewed,
  confidence,
  verification,
}: {
  lastReviewed: string;
  confidence?: Confidence;
  verification?: 'established' | 'developing';
}) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.66rem] tracking-[0.12em] text-secondary">
      <span>
        REVIEWED <span className="text-primary">{lastReviewed}</span>
      </span>
      {confidence && (
        <span>
          CONFIDENCE <span className={conf[confidence]}>{confidence.toUpperCase()}</span>
        </span>
      )}
      {verification === 'developing' && (
        <span className="text-amber" title="Record still forming as of September 2026">
          VERIFICATION: DEVELOPING
        </span>
      )}
    </div>
  );
}

export function Prose({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`prose-atlas ${className}`}>
      {text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i}>{p}</p>
        ))}
    </div>
  );
}

export function Bullets({ items, accent = 'cyan' }: { items: string[]; accent?: 'cyan' | 'amber' | 'red' }) {
  const color = { cyan: 'text-cyan', amber: 'text-amber', red: 'text-red' }[accent];
  return (
    <ul className="space-y-2 text-sm text-secondary">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className={`mt-[3px] font-mono text-[0.65rem] ${color}`}>{String(i + 1).padStart(2, '0')}</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
