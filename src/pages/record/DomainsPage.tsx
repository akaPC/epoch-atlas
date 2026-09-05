import { Link, useParams } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { RecordNav } from '@/components/RecordNav';
import { EventCard } from '@/components/EventCard';
import { useFocusLabel } from '@/app/state/FocusContext';
import { DOMAINS, DOMAIN_LABELS, type Domain } from '@/data/schema';
import { epochsSorted, eventsForDomain, eventsSorted, epochAccent } from '@/lib/record';
import { pad2 } from '@/lib/format';

const DOMAIN_NOTES: Record<Domain, string> = {
  energy: 'How much useful work a society can command, from fire and muscle to fission and photovoltaics.',
  materials: 'What can be made, and at what strength, purity and cost: stone, bronze, iron, steel, polymers, semiconductors.',
  information: 'How knowledge is recorded, copied, stored and retrieved: pigment, tokens, script, print, bits.',
  computation: 'Machines that carry out procedures: gears, relays, valves, transistors, and now learned functions.',
  'biology-medicine': 'Understanding and intervening in living systems, from domestication to gene editing.',
  transportation: 'Moving people and goods: wheels, sails, rails, engines, wings and rockets.',
  agriculture: 'Turning sunlight and soil into food at scale, and the surplus that funds everything else.',
  'weapons-security': 'The offence-defence balance and the technologies that decide it.',
  communication: 'Sending signals across distance: writing, telegraph, radio, networks.',
  space: 'Leaving the planet and looking back at it, and looking out.',
  manufacturing: 'How things are made in quantity: workshops, factories, assembly lines, additive processes, robots.',
};

export default function DomainsPage() {
  const { domain } = useParams();
  const active = (DOMAINS as readonly string[]).includes(domain ?? '') ? (domain as Domain) : null;
  useFocusLabel(active ? `01 // LENS // ${DOMAIN_LABELS[active].toUpperCase()}` : '01 // DOMAIN LENSES', active ? DOMAIN_LABELS[active] : 'Domain lenses');
  const list = active ? eventsForDomain(active) : [];

  return (
    <>
      <RecordNav />
      <SectionHeader
        as="h1"
        index="01"
        code="DOMAIN LENSES"
        title={active ? DOMAIN_LABELS[active] : 'Eleven lenses on one record'}
        subtitle={active ? DOMAIN_NOTES[active] : 'Every event carries one or more domains. Pick a lens to read the record through it, with the distribution of events across epochs.'}
      />
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Domain lens">
        {DOMAINS.map((d) => (
          <Link key={d} to={`/record/domains/${d}`} className="chip" aria-current={active === d ? 'page' : undefined} aria-pressed={active === d} data-testid={`lens-${d}`}>
            {DOMAIN_LABELS[d]} <span className="text-cyan">{eventsForDomain(d).length}</span>
          </Link>
        ))}
      </div>

      {active ? (
        <>
          <section className="panel brackets mb-6 p-4">
            <div className="index-label mb-3">DISTRIBUTION ACROSS EPOCHS</div>
            <div className="grid grid-cols-13 gap-1" style={{ gridTemplateColumns: 'repeat(13, minmax(0, 1fr))' }}>
              {epochsSorted.map((ep) => {
                const n = list.filter((e) => e.epochId === ep.id).length;
                const max = Math.max(1, ...epochsSorted.map((x) => list.filter((e) => e.epochId === x.id).length));
                return (
                  <Link key={ep.id} to={`/record/epochs/${ep.id}`} className="group flex flex-col items-center gap-1" title={`${ep.name}: ${n} events`}>
                    <div className="flex h-24 w-full items-end">
                      <div className="w-full" style={{ height: `${(n / max) * 100}%`, background: epochAccent(ep.index), minHeight: n ? 3 : 0 }} />
                    </div>
                    <span className="font-mono text-[0.6rem] text-secondary group-hover:text-primary">{pad2(ep.index)}</span>
                    <span className="font-mono text-[0.6rem] text-cyan">{n}</span>
                  </Link>
                );
              })}
            </div>
          </section>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {list.map((e) => (
              <EventCard key={e.id} event={e} showEpoch />
            ))}
          </div>
        </>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {DOMAINS.map((d) => {
            const n = eventsForDomain(d).length;
            const top = eventsForDomain(d).sort((a, b) => b.significance - a.significance)[0];
            return (
              <Link key={d} to={`/record/domains/${d}`} className="panel brackets block p-4 hover:bg-hover">
                <div className="flex items-center justify-between">
                  <span className="index-label">{DOMAIN_LABELS[d].toUpperCase()}</span>
                  <span className="font-mono text-[0.62rem] text-secondary">{n} OF {eventsSorted.length}</span>
                </div>
                <p className="mt-2 text-sm text-secondary">{DOMAIN_NOTES[d]}</p>
                {top && (
                  <div className="mt-3 font-mono text-[0.62rem] tracking-[0.1em] text-secondary">
                    HIGHEST SIGNIFICANCE <span className="text-primary">{top.title}</span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
