interface Props {
  label: string;
  value: string | number;
  note?: string;
  accent?: 'cyan' | 'amber' | 'red';
}

const accentText = { cyan: 'text-cyan', amber: 'text-amber', red: 'text-red' } as const;

export function Stat({ label, value, note, accent = 'cyan' }: Props) {
  return (
    <div className="panel-raised p-3">
      <div className="font-mono text-[0.62rem] tracking-[0.14em] text-secondary">{label}</div>
      <div className={`mt-1 font-display text-3xl leading-none ${accentText[accent]}`}>{value}</div>
      {note && <div className="mt-1 text-xs text-secondary">{note}</div>}
    </div>
  );
}
