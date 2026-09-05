import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { HorizonNav } from '@/components/HorizonNav';
import { SourceList } from '@/components/SourceList';
import { MetaRow, Prose } from '@/components/Meta';
import { useFocusLabel } from '@/app/state/FocusContext';
import { useScenario } from '@/app/state/ScenarioContext';
import { convergences, horizonFields } from '@/data';
import { SCENARIOS, SCENARIO_LABELS } from '@/data/schema';
import { eventById } from '@/lib/record';
import { pad2 } from '@/lib/format';

const fieldName = (id: string) => horizonFields.find((f) => f.id === id)?.name ?? id;
const DECADES = [2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100, 2110, 2120];

export default function ConvergencePage() {
  const { scenario, setScenario } = useScenario();
  const meta = SCENARIO_LABELS[scenario];
  useFocusLabel(`03 // CONVERGENCE // ${meta.branch.toUpperCase()}`, 'Convergence');
  const sorted = [...convergences].sort((a, b) => a.decade[scenario] - b.decade[scenario]);

  return (
    <>
      <HorizonNav />
      <SectionHeader
        as="h1"
        index="03"
        code="CONVERGENCE"
        title="Where fields collide"
        accent="red"
        subtitle="Some of the largest changes in the century come from two or three fields reaching maturity at the same time. Each convergence names the fields, the mechanism, the decade it is expected under each takeoff scenario, and the chain of present-day events it depends on."
        actions={
          <div className="flex gap-1" role="group" aria-label="Scenario">
            {SCENARIOS.map((s) => (
              <button key={s} type="button" className={`btn btn--${SCENARIO_LABELS[s].accent}`} aria-pressed={s === scenario} onClick={() => setScenario(s)}>
                {s}
              </button>
            ))}
          </div>
        }
      />

      <div className="panel brackets brackets--red mb-6 overflow-x-auto p-4" data-testid="convergence-grid">
        <div className="index-label index-label--red mb-3">EXPECTED DECADE BY SCENARIO</div>
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="font-mono text-[0.62rem] tracking-[0.12em] text-secondary">
              <th className="py-1 pr-3 text-left font-normal">CONVERGENCE</th>
              {DECADES.map((d) => (
                <th key={d} className="py-1 text-center font-normal">{d}s</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((c) => (
              <tr key={c.id} className="border-t border-hairline">
                <td className="py-2 pr-3 text-primary">
                  <a href={`#${c.id}`} className="hover:text-cyan">{c.name}</a>
                </td>
                {DECADES.map((d) => (
                  <td key={d} className="py-2 text-center">
                    <span className="inline-flex gap-0.5">
                      {SCENARIOS.map((s) =>
                        c.decade[s] === d ? (
                          <span key={s} className={`inline-block h-3 w-3 ${s === scenario ? 'ring-1 ring-primary' : ''}`} style={{ background: SCENARIO_LABELS[s].accent === 'cyan' ? '#22d3ee' : SCENARIO_LABELS[s].accent === 'amber' ? '#f5b625' : '#ff4d4f' }} title={`${SCENARIO_LABELS[s].name}: ${d}s`} />
                        ) : null,
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-2 flex gap-4 font-mono text-[0.62rem] tracking-[0.12em] text-secondary">
          <span><span className="inline-block h-2 w-2 bg-cyan" /> SLOW</span>
          <span><span className="inline-block h-2 w-2 bg-amber" /> MODERATE</span>
          <span><span className="inline-block h-2 w-2 bg-red" /> FAST</span>
        </div>
      </div>

      <div className="space-y-4">
        {sorted.map((c, i) => (
          <article key={c.id} id={c.id} className="panel brackets brackets--red scroll-mt-16 p-5" data-testid="convergence">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="index-label index-label--red">{pad2(i + 1)} <span aria-hidden="true">//</span> {c.fieldIds.map((f) => fieldName(f).toUpperCase()).join(' + ')}</div>
              <div className={`font-mono text-[0.7rem] tracking-[0.12em] text-${meta.accent}`} data-testid="convergence-decade">
                {meta.branch.toUpperCase()}: {c.decade[scenario]}s
              </div>
            </div>
            <h2 className="mt-1 text-2xl">{c.name}</h2>
            <div className="mt-3 grid gap-5 lg:grid-cols-2">
              <div>
                <Prose text={c.description} className="text-sm" />
                <div className="index-label mt-4 mb-1">MECHANISM</div>
                <Prose text={c.mechanism} className="text-sm" />
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {SCENARIOS.map((s) => (
                    <div key={s} className="panel-raised p-2 text-center">
                      <div className="font-mono text-[0.6rem] tracking-[0.12em] text-secondary">{SCENARIO_LABELS[s].branch.toUpperCase()}</div>
                      <div className={`font-display text-2xl text-${SCENARIO_LABELS[s].accent}`}>{c.decade[s]}s</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="index-label mb-1">FIELDS</div>
                  <div className="flex flex-wrap gap-1">
                    {c.fieldIds.map((f) => (
                      <Link key={f} to={`/horizon/fields/${f}`} className="chip">
                        {fieldName(f)}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="index-label mb-1">DEPENDS ON</div>
                  <ul className="space-y-1 text-sm">
                    {c.dependencies.map((d) => {
                      const ev = eventById.get(d);
                      return (
                        <li key={d}>
                          {ev ? (
                            <Link to={`/record/events/${ev.id}`} className="text-primary hover:text-cyan">
                              {ev.title} <span className="font-mono text-[0.6rem] text-cyan">{ev.date.display}</span>
                            </Link>
                          ) : (
                            d
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <SourceList sources={c.sources} compact />
                <MetaRow lastReviewed={c.lastReviewed} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
