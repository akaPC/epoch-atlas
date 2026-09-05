import { Link, useParams } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { RecordNav } from '@/components/RecordNav';
import { SourceList } from '@/components/SourceList';
import { DomainChip } from '@/components/DomainChip';
import { MetaRow, Prose } from '@/components/Meta';
import { useFocusLabel } from '@/app/state/FocusContext';
import { eventById, epochById, dependents, projectionsDependingOn, chainToPast } from '@/lib/record';
import { PRECISION_LABELS, pad2 } from '@/lib/format';
import { SCENARIO_LABELS } from '@/data/schema';
import NotFound from '@/pages/NotFound';

function EventLink({ id }: { id: string }) {
  const ev = eventById.get(id);
  if (!ev) return <span className="text-secondary">{id}</span>;
  return (
    <Link to={`/record/events/${ev.id}`} className="group flex items-baseline gap-3 border-b border-hairline py-2 last:border-0">
      <span className="font-mono text-[0.66rem] tracking-[0.1em] text-cyan">{ev.date.display}</span>
      <span className="text-sm text-primary group-hover:text-cyan">{ev.title}</span>
    </Link>
  );
}

export default function EventPage() {
  const { eventId = '' } = useParams();
  const event = eventById.get(eventId);
  const epoch = event ? epochById.get(event.epochId) : undefined;
  useFocusLabel(epoch ? `${pad2(epoch.index)} // ${epoch.code} // ${event?.date.display.toUpperCase()}` : 'RECORD // EVENT', event?.title);
  if (!event || !epoch) return <NotFound />;

  const enabledBy = event.prerequisites;
  const enables = Array.from(new Set([...event.consequences, ...dependents(event.id).map((d) => d.id)]));
  const projections = projectionsDependingOn(event.id);
  const chain = chainToPast(event.id);

  return (
    <>
      <RecordNav />
      <SectionHeader
        as="h1"
        index={pad2(epoch.index)}
        code={epoch.code}
        title={event.title}
        subtitle={
          <span className="font-mono text-[0.72rem] tracking-[0.12em] text-secondary">
            <span className="text-cyan">{event.date.display.toUpperCase()}</span> <span aria-hidden="true">//</span> {PRECISION_LABELS[event.date.precision].toUpperCase()} <span aria-hidden="true">//</span> {event.location.toUpperCase()}
          </span>
        }
        actions={
          <Link to={`/record/epochs/${epoch.id}`} className="btn">
            Epoch {pad2(epoch.index)}
          </Link>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {event.domains.map((d) => (
              <DomainChip key={d} domain={d} />
            ))}
            <span className="chip" aria-label={`Significance ${event.significance} of 10`}>
              SIG <span className="text-amber">{event.significance}</span>/10
            </span>
          </div>
          <p className="mb-6 text-lg text-secondary">{event.summary}</p>

          <section className="panel brackets p-5" data-testid="event-explanation">
            <div className="index-label">EXPLANATION</div>
            <Prose text={event.explanation} className="mt-2" />
          </section>

          <section className="mt-6 panel brackets brackets--amber p-5">
            <div className="index-label index-label--amber">MECHANISM <span aria-hidden="true">//</span> HOW IT ACTUALLY WORKED</div>
            <Prose text={event.mechanism} className="mt-2" />
          </section>

          <section className="mt-6 panel brackets p-5">
            <div className="index-label">SIGNIFICANCE <span aria-hidden="true">//</span> {event.significance} OF 10</div>
            <div className="mt-3 flex gap-1" aria-hidden="true">
              {Array.from({ length: 10 }, (_, i) => (
                <span key={i} className={`h-2 flex-1 ${i < event.significance ? 'bg-amber' : 'bg-raised'}`} />
              ))}
            </div>
            <Prose text={event.significanceJustification} className="mt-3 text-sm" />
          </section>

          {projections.length > 0 && (
            <section className="mt-6 panel brackets brackets--red p-5">
              <div className="index-label index-label--red">CARRIED FORWARD <span aria-hidden="true">//</span> HORIZON PROJECTIONS THAT DEPEND ON THIS EVENT</div>
              <ul className="mt-3 space-y-1">
                {projections.slice(0, 12).map(({ field, projection }) => (
                  <li key={`${field.id}-${projection.window}-${projection.branch}`}>
                    <Link to={`/horizon/fields/${field.id}?window=${projection.window}`} className="group flex flex-wrap items-baseline gap-2 text-sm">
                      <span className="font-mono text-[0.66rem] tracking-[0.1em] text-red">{projection.window} <span aria-hidden="true">//</span> {SCENARIO_LABELS[projection.branch].branch.toUpperCase()}</span>
                      <span className="text-primary group-hover:text-red">{field.name}: {projection.headline}</span>
                    </Link>
                  </li>
                ))}
                {projections.length > 12 && <li className="font-mono text-[0.66rem] text-secondary">AND {projections.length - 12} MORE</li>}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-4">
          <div className="panel brackets p-4" data-testid="prerequisites">
            <div className="index-label mb-1">PREREQUISITES <span aria-hidden="true">//</span> {enabledBy.length}</div>
            {enabledBy.length ? enabledBy.map((id) => <EventLink key={id} id={id} />) : <p className="text-sm text-secondary">No earlier event in the atlas. This is a root of the dependency graph.</p>}
          </div>
          <div className="panel brackets p-4" data-testid="consequences">
            <div className="index-label mb-1">CONSEQUENCES <span aria-hidden="true">//</span> {enables.length}</div>
            {enables.length ? enables.map((id) => <EventLink key={id} id={id} />) : <p className="text-sm text-secondary">No later event in the atlas yet depends on this one. It is a frontier of the record.</p>}
          </div>
          <div className="panel brackets p-4">
            <div className="index-label mb-2">KEY FIGURES</div>
            <ul className="space-y-2 text-sm">
              {event.figures.map((f) => (
                <li key={f.name}>
                  <div className="text-primary">{f.name}</div>
                  <div className="text-xs text-secondary">{f.role}</div>
                </li>
              ))}
            </ul>
          </div>
          {chain.length > 2 && (
            <div className="panel brackets p-4">
              <div className="index-label mb-2">CHAIN TO THE DEEP PAST <span aria-hidden="true">//</span> {chain.length} STEPS</div>
              <ol className="space-y-1 text-xs">
                {chain.map((c, i) => (
                  <li key={c.id} className="flex gap-2">
                    <span className="font-mono text-[0.62rem] text-secondary">{pad2(i + 1)}</span>
                    <Link to={`/record/events/${c.id}`} className="text-secondary hover:text-cyan">
                      {c.title} <span className="font-mono text-[0.6rem] text-cyan">{c.date.display}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div className="panel brackets p-4">
            <div className="index-label mb-2">SOURCES</div>
            <SourceList sources={event.sources} compact />
            <div className="mt-3">
              <MetaRow lastReviewed={event.lastReviewed} confidence={event.confidence} verification={event.verification} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
