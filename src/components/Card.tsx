import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  accent?: 'cyan' | 'amber' | 'red';
  to?: string;
  className?: string;
  label?: string;
  testId?: string;
}

const bracket = { cyan: '', amber: 'brackets--amber', red: 'brackets--red' } as const;

export function Card({ children, accent = 'cyan', to, className = '', label, testId }: Props) {
  const base = `panel brackets ${bracket[accent]} block p-4 transition-colors duration-150 ease-console ${className}`;
  const inner = (
    <>
      {label && <div className={`index-label mb-2 ${accent === 'amber' ? 'index-label--amber' : accent === 'red' ? 'index-label--red' : ''}`}>{label}</div>}
      {children}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={`${base} hover:bg-hover`} data-testid={testId}>
        {inner}
      </Link>
    );
  }
  return (
    <div className={base} data-testid={testId}>
      {inner}
    </div>
  );
}
