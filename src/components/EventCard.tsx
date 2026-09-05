import { Link } from 'react-router-dom';
import type { TechEvent } from '@/data/schema';
import { DomainChip } from './DomainChip';

export function EventCard({ event, showEpoch = false }: { event: TechEvent; showEpoch?: boolean }) {
  return (
    <Link
      to={`/record/events/${event.id}`}
      className="panel brackets block p-4 transition-colors duration-150 ease-console hover:bg-hover"
      data-testid="event-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="font-mono text-[0.68rem] tracking-[0.12em] text-cyan">{event.date.display}</div>
        <div className="flex items-center gap-1 font-mono text-[0.62rem] tracking-[0.1em] text-secondary" title="Significance">
          SIG
          <span className="text-amber">{event.significance}</span>
        </div>
      </div>
      <h3 className="mt-1 text-xl leading-tight text-primary">{event.title}</h3>
      {showEpoch && <div className="mt-1 font-mono text-[0.62rem] tracking-[0.12em] text-secondary">{event.epochId.toUpperCase()}</div>}
      <p className="mt-2 text-sm text-secondary">{event.summary}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {event.domains.map((d) => (
          <DomainChip key={d} domain={d} link={false} />
        ))}
      </div>
    </Link>
  );
}
