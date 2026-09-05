import { Link, useParams } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { RecordNav } from '@/components/RecordNav';
import { EventCard } from '@/components/EventCard';
import { SourceList } from '@/components/SourceList';
import { Bullets, MetaRow, Prose } from '@/components/Meta';
import { useFocusLabel } from '@/app/state/FocusContext';
import { epochById, epochsSorted, eventsForEpoch, epochAccent } from '@/lib/record';
import { pad2 } from '@/lib/format';
import NotFound from '@/pages/NotFound';

export default function EpochPage() {
  const { epochId = '' } = useParams();
  const epoch = epochById.get(epochId);
  useFocusLabel(epoch ? `${pad2(epoch.index)} // ${epoch.code}` : 'RECORD // EPOCH', epoch?.name);
  if (!epoch) return <NotFound />;
  const evs = eventsForEpoch(epoch.id);
  const prev = epochsSorted.find((e) => e.index === epoch.index - 1);
  const next = epochsSorted.find((e) => e.index === epoch.index + 1);
  const accent = epochAccent(epoch.index);

  return (
    <>
      <RecordNav />
      <SectionHeader
        as="h1"
        index={pad2(epoch.index)}
        code={epoch.code}
        title={epoch.name}
        subtitle={<span className="font-mono text-[0.72rem] tracking-[0.12em] text-secondary">{epoch.span.toUpperCase()} <span aria-hidden="true">//</span> {evs.length} EVENTS</span>}
        actions={
          <>
            {prev && (
              <Link to={`/record/epochs/${prev.id}`} className="btn">
                {pad2(prev.index)} {prev.code}
              </Link>
            )}
            {next && (
              <Link to={`/record/epochs/${next.id}`} className="btn">
                {pad2(next.index)} {next.code}
              </Link>
            )}
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <section className="panel brackets scanlines p-5" style={{ borderColor: `${accent}55` }}>
            <div className="index-label" style={{ color: accent }}>THESIS</div>
            <Prose text={epoch.thesis} className="mt-2" />
          </section>

          <section className="mt-6">
            <div className="index-label mb-3">DEFINING EVENTS <span aria-hidden="true">//</span> {evs.length}</div>
            <div className="grid gap-3 md:grid-cols-2">
              {evs.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </section>

          <section className="mt-8 panel brackets p-5" data-testid="human-experience">
            <div className="index-label">WHAT CHANGED FOR A HUMAN BEING LIVING THROUGH IT</div>
            <Prose text={epoch.humanExperience} className="mt-2" />
          </section>

          <section className="mt-6 panel brackets p-5">
            <div className="index-label">TRANSITION {next ? `TO ${pad2(next.index)} // ${next.code}` : '// OPEN'}</div>
            <Prose text={epoch.transition} className="mt-2" />
          </section>
        </div>

        <aside className="space-y-4">
          <div className="panel brackets p-4">
            <div className="index-label mb-2">ENABLING CONDITIONS</div>
            <Bullets items={epoch.enablingConditions} />
          </div>
          <div className="panel brackets p-4">
            <div className="index-label mb-2">CONSTRAINTS REMOVED</div>
            <Bullets items={epoch.constraintsRemoved} accent="amber" />
          </div>
          <div className="panel brackets p-4">
            <div className="index-label mb-2">SECOND-ORDER CONSEQUENCES</div>
            <Bullets items={epoch.secondOrderConsequences} accent="red" />
          </div>
          <div className="panel brackets p-4">
            <div className="index-label mb-2">SOURCES</div>
            <SourceList sources={epoch.sources} compact />
            <div className="mt-3">
              <MetaRow lastReviewed={epoch.lastReviewed} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
