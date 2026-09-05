import { Link } from 'react-router-dom';
import { DOMAIN_LABELS, type Domain } from '@/data/schema';

export function DomainChip({ domain, link = true }: { domain: Domain; link?: boolean }) {
  const label = DOMAIN_LABELS[domain];
  if (!link) return <span className="chip">{label}</span>;
  return (
    <Link to={`/record/domains/${domain}`} className="chip">
      {label}
    </Link>
  );
}
