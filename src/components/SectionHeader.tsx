import type { ReactNode } from 'react';

interface Props {
  index: string;
  code: string;
  title: ReactNode;
  accent?: 'cyan' | 'amber' | 'red';
  subtitle?: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  actions?: ReactNode;
}

const accentClass = { cyan: '', amber: 'index-label--amber', red: 'index-label--red' } as const;

export function SectionHeader({ index, code, title, accent = 'cyan', subtitle, as = 'h2', actions }: Props) {
  const Tag = as;
  const size = as === 'h1' ? 'text-4xl sm:text-5xl lg:text-6xl' : as === 'h2' ? 'text-2xl sm:text-3xl' : 'text-xl';
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-4">
      <div>
        <div className={`index-label ${accentClass[accent]}`}>
          {index} <span aria-hidden="true">//</span> {code}
        </div>
        <Tag className={`mt-1 ${size} text-primary`}>{title}</Tag>
        {subtitle && <p className="mt-2 max-w-3xl text-sm text-secondary sm:text-base">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}
