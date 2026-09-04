import type { ReactNode } from 'react';

interface Props {
  index: string;
  code: string;
  title: ReactNode;
  lede: ReactNode;
  accent?: 'cyan' | 'amber' | 'red';
  children?: ReactNode;
}

const accentClass = { cyan: '', amber: 'index-label--amber', red: 'index-label--red' } as const;
const bracket = { cyan: '', amber: 'brackets--amber', red: 'brackets--red' } as const;

export function Hero({ index, code, title, lede, accent = 'cyan', children }: Props) {
  return (
    <section className={`panel brackets ${bracket[accent]} scanlines mb-8 p-6 sm:p-8 lg:p-10`}>
      <div className={`index-label ${accentClass[accent]}`}>
        {index} <span aria-hidden="true">//</span> {code}
      </div>
      <h1 className="mt-2 text-4xl text-primary sm:text-5xl lg:text-6xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">{lede}</p>
      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}
