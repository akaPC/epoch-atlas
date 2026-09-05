import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { RecordNav } from '@/components/RecordNav';
import { Timeline } from '@/components/charts/Timeline';
import { useFocusLabel } from '@/app/state/FocusContext';
import { epochsSorted, eventsSorted, eventsForEpoch, epochAccent } from '@/lib/record';
import { Stat } from '@/components/Stat';

export default function RecordIndex() {
  useFocusLabel('01 // THE RECORD', 'The Record');
  const sig8 = eventsSorted.filter((e) => e.significance >= 8).length;
  return (
    <>
      <Hero
        index="01"
        code="THE RECORD"
        title="Every epoch of human technique, 3.3 million years to September 2026"
        lede="Thirteen epochs, each with a thesis, the conditions that enabled it, the constraints it removed, and the events that defined it. Every event carries its mechanism, prerequisites, consequences, key figures, a justified significance score and sources, so the atlas can trace how a flaked cobble became a transformer."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="EPOCHS" value={epochsSorted.length} />
          <Stat label="EVENTS" value={eventsSorted.length} />
          <Stat label="SIGNIFICANCE 8+" value={sig8} />
          <Stat label="SPAN" value="3.3 MYA" note="to September 2026" />
        </div>
      </Hero>
      <RecordNav />
      <Timeline epochs={epochsSorted} events={eventsSorted} />

      <section className="mt-8">
        <div className="index-label mb-3">EPOCHS <span aria-hidden="true">//</span> 01 TO 13</div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {epochsSorted.map((ep) => {
            const n = eventsForEpoch(ep.id).length;
            return (
              <Link
                key={ep.id}
                to={`/record/epochs/${ep.id}`}
                className="panel brackets block p-4 transition-colors duration-150 ease-console hover:bg-hover"
                data-testid="epoch-card"
              >
                <div className="flex items-center justify-between">
                  <span className="index-label" style={{ color: epochAccent(ep.index) }}>
                    {String(ep.index).padStart(2, '0')} <span aria-hidden="true">//</span> {ep.code}
                  </span>
                  <span className="font-mono text-[0.62rem] tracking-[0.12em] text-secondary">{n} EVENTS</span>
                </div>
                <h2 className="mt-2 text-2xl leading-tight">{ep.name}</h2>
                <div className="mt-1 font-mono text-[0.66rem] tracking-[0.12em] text-secondary">{ep.span}</div>
                <p className="mt-3 line-clamp-4 text-sm text-secondary">{ep.thesis}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
