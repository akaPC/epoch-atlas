import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Stat } from '@/components/Stat';
import { SectionHeader } from '@/components/SectionHeader';
import { SourceList } from '@/components/SourceList';
import { Bullets, MetaRow, Prose } from '@/components/Meta';
import { EnsembleChart } from '@/components/charts/EnsembleChart';
import { ModelRanges } from '@/components/charts/ModelRanges';
import { WeightPanel } from './WeightPanel';
import { useFocusLabel } from '@/app/state/FocusContext';
import { useScenario } from '@/app/state/ScenarioContext';
import { forecastModels, takeoffScenarios, leadingIndicators, definitions } from '@/data';
import { SCENARIO_LABELS, type Scenario } from '@/data/schema';
import { defaultWeights, mixturePercentiles } from '@/lib/ensemble';
import { formatArrivalYear, pad2 } from '@/lib/format';

const models = [...forecastModels].sort((a, b) => a.index - b.index);
const scenarioOrder: Scenario[] = ['slow', 'moderate', 'fast'];
const dirClass = { earlier: 'text-red', later: 'text-cyan', mixed: 'text-amber', unchanged: 'text-secondary' } as const;

export default function Threshold() {
  useFocusLabel('02 // THE THRESHOLD', 'The Threshold');
  const [weights, setWeights] = useState<Record<string, number>>(() => defaultWeights(models));
  const { scenario, setScenario } = useScenario();
  const agi = useMemo(() => mixturePercentiles(models, weights, 'agi'), [weights]);
  const asi = useMemo(() => mixturePercentiles(models, weights, 'asi'), [weights]);
  const onChange = useCallback((id: string, v: number) => setWeights((w) => ({ ...w, [id]: v })), []);
  const onReset = useCallback(() => setWeights(defaultWeights(models)), []);
  const sorted = [...takeoffScenarios].sort((a, b) => scenarioOrder.indexOf(a.id) - scenarioOrder.indexOf(b.id));

  return (
    <>
      <Hero
        index="02"
        code="THE THRESHOLD"
        title="When does artificial general intelligence arrive, and what follows"
        accent="amber"
        lede="Eight forecast models, each with its assumptions, inputs, output distribution and a written critique, combined into an ensemble whose weights you can change. The disagreement between models is the finding, not noise to be averaged away. Three takeoff scenarios carry the result into The Horizon."
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat label="AGI MEDIAN" value={formatArrivalYear(agi.p50)} note={`IQR ${formatArrivalYear(agi.p25)} to ${formatArrivalYear(agi.p75)}`} accent="amber" />
          <Stat label="ASI MEDIAN" value={formatArrivalYear(asi.p50)} note={`IQR ${formatArrivalYear(asi.p25)} to ${formatArrivalYear(asi.p75)}`} accent="red" />
          <Stat label="AGI P5 TO P95" value={`${formatArrivalYear(agi.p5)} to ${formatArrivalYear(agi.p95)}`} accent="amber" />
          <Stat label="MODELS" value={models.length} note="plus the ensemble" />
        </div>
      </Hero>

      <nav aria-label="Threshold sections" className="mb-6 flex flex-wrap gap-2">
        {[
          ['#ensemble', 'Ensemble'],
          ['#definitions', 'Definitions'],
          ['#models', 'Models'],
          ['#takeoff', 'Takeoff'],
          ['#indicators', 'Leading indicators'],
        ].map(([href, label]) => (
          <a key={href} href={href} className="btn">
            {label}
          </a>
        ))}
      </nav>

      <section id="ensemble" className="scroll-mt-16">
        <SectionHeader index="02.1" code="ENSEMBLE" title="Weighted mixture of eight models" accent="amber" subtitle="Each model contributes a piecewise-linear distribution reconstructed from its five percentiles. The ensemble is the weighted mixture. Medians and interquartile ranges below update live." />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="panel brackets brackets--amber p-3 sm:p-4" data-testid="ensemble-chart">
              <div className="mb-2 flex flex-wrap gap-4 font-mono text-[0.68rem] tracking-[0.12em]">
                <span className="text-amber" data-testid="agi-median">AGI MEDIAN {formatArrivalYear(agi.p50)}</span>
                <span className="text-red" data-testid="asi-median">ASI MEDIAN {formatArrivalYear(asi.p50)}</span>
                <span className="text-secondary">AGI IQR {formatArrivalYear(agi.p25)} TO {formatArrivalYear(agi.p75)}</span>
                <span className="text-secondary">ASI IQR {formatArrivalYear(asi.p25)} TO {formatArrivalYear(asi.p75)}</span>
              </div>
              <EnsembleChart models={models} weights={weights} agi={agi} asi={asi} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="panel brackets brackets--amber p-3">
                <div className="index-label index-label--amber mb-1">AGI ARRIVAL BY MODEL</div>
                <ModelRanges models={models} weights={weights} ensemble={agi} kind="agi" />
              </div>
              <div className="panel brackets brackets--red p-3">
                <div className="index-label index-label--red mb-1">ASI ARRIVAL BY MODEL</div>
                <ModelRanges models={models} weights={weights} ensemble={asi} kind="asi" />
              </div>
            </div>
          </div>
          <WeightPanel models={models} weights={weights} onChange={onChange} onReset={onReset} />
        </div>
        <div className="mt-4 panel brackets p-4 text-sm text-secondary">
          <div className="index-label mb-2">HOW TO READ THE DISAGREEMENT</div>
          <p>
            The compute-trend, benchmark-saturation, forecasting-community and R&amp;D-acceleration models cluster around the early 2030s. Biological anchors and the expert surveys sit a decade later. The economic-diffusion model defines AGI by economic replacement rather than capability and lands in the 2040s. The skeptic model puts substantial mass beyond 2100 and some on never. No weighting makes those views agree; the ensemble only says where the mass sits under a stated weighting. Change the weights to see how much of the answer is the weighting.
          </p>
        </div>
      </section>

      <section id="definitions" className="mt-12 scroll-mt-16">
        <SectionHeader index="02.2" code="DEFINITIONS" title="Terms, with the strongest case for each" accent="amber" subtitle="Three competing operational definitions of AGI are kept apart on purpose. Much of the timeline disagreement is definitional." />
        <div className="grid gap-3 md:grid-cols-2">
          {definitions.map((d, i) => (
            <details key={d.id} className="panel brackets group p-4" data-testid="definition">
              <summary className="cursor-pointer list-none">
                <div className="index-label index-label--amber">{pad2(i + 1)} <span aria-hidden="true">//</span> TERM</div>
                <h3 className="mt-1 text-xl">{d.term}</h3>
                <p className="mt-1 text-sm text-secondary">{d.shortDefinition}</p>
                <span className="mt-2 inline-block font-mono text-[0.62rem] tracking-[0.12em] text-cyan group-open:hidden">EXPAND</span>
              </summary>
              <div className="mt-3 space-y-3 border-t border-hairline pt-3">
                <div>
                  <div className="index-label mb-1">DEFINITION</div>
                  <Prose text={d.definition} className="text-sm" />
                </div>
                <div>
                  <div className="index-label index-label--amber mb-1">STEELMAN</div>
                  <Prose text={d.steelman} className="text-sm" />
                </div>
                <div>
                  <div className="index-label index-label--red mb-1">CONTRAST</div>
                  <Prose text={d.contrast} className="text-sm" />
                </div>
                <SourceList sources={d.sources} compact />
                <MetaRow lastReviewed={d.lastReviewed} />
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="models" className="mt-12 scroll-mt-16">
        <SectionHeader index="02.3" code="FORECAST MODELS" title="Eight ways to estimate the same thing" accent="amber" subtitle="Each model is typed data: assumptions, inputs, percentiles for AGI and ASI, the argument for the distribution, and a fair critique of its weaknesses." />
        <div className="space-y-4">
          {models.map((m) => (
            <article key={m.id} className="panel brackets brackets--amber p-5" id={`model-${m.id}`} data-testid="forecast-model">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="index-label index-label--amber">{pad2(m.index)} <span aria-hidden="true">//</span> {m.shortName.toUpperCase()}</div>
                  <h3 className="mt-1 text-2xl">{m.name}</h3>
                  <p className="mt-1 max-w-3xl text-sm text-secondary">{m.summary}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Stat label="AGI P50" value={formatArrivalYear(m.agi.p50)} note={`${formatArrivalYear(m.agi.p25)} to ${formatArrivalYear(m.agi.p75)}`} accent="amber" />
                  <Stat label="ASI P50" value={formatArrivalYear(m.asi.p50)} note={`${formatArrivalYear(m.asi.p25)} to ${formatArrivalYear(m.asi.p75)}`} accent="red" />
                </div>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="font-mono text-[0.62rem] tracking-[0.12em] text-secondary">
                      <th className="py-1 text-left font-normal">PERCENTILE</th>
                      {(['p5', 'p25', 'p50', 'p75', 'p95'] as const).map((k) => (
                        <th key={k} className="py-1 text-right font-normal">{k.toUpperCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="font-mono text-[0.72rem]">
                    <tr className="border-t border-hairline">
                      <td className="py-1 text-amber">AGI</td>
                      {(['p5', 'p25', 'p50', 'p75', 'p95'] as const).map((k) => (
                        <td key={k} className="py-1 text-right text-primary">{formatArrivalYear(m.agi[k])}</td>
                      ))}
                    </tr>
                    <tr className="border-t border-hairline">
                      <td className="py-1 text-red">ASI</td>
                      {(['p5', 'p25', 'p50', 'p75', 'p95'] as const).map((k) => (
                        <td key={k} className="py-1 text-right text-primary">{formatArrivalYear(m.asi[k])}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <details className="mt-4 group">
                <summary className="cursor-pointer list-none font-mono text-[0.66rem] tracking-[0.12em] text-cyan">
                  <span className="group-open:hidden">EXPAND APPROACH, ASSUMPTIONS, INPUTS, REASONING, CRITIQUE, SOURCES</span>
                  <span className="hidden group-open:inline">COLLAPSE</span>
                </summary>
                <div className="mt-4 grid gap-5 lg:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <div className="index-label mb-1">APPROACH</div>
                      <Prose text={m.approach} className="text-sm" />
                    </div>
                    <div>
                      <div className="index-label mb-1">ASSUMPTIONS</div>
                      <Bullets items={m.assumptions} />
                    </div>
                    <div>
                      <div className="index-label mb-1">INPUTS</div>
                      <table className="w-full text-sm">
                        <tbody>
                          {m.inputs.map((inp) => (
                            <tr key={inp.label} className="border-t border-hairline align-top">
                              <td className="py-1.5 pr-3 text-secondary">{inp.label}</td>
                              <td className="py-1.5 font-mono text-[0.72rem] text-primary">
                                {inp.value}
                                {inp.note && <div className="font-body text-xs text-secondary">{inp.note}</div>}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="index-label index-label--amber mb-1">REASONING</div>
                      <Prose text={m.reasoning} className="text-sm" />
                    </div>
                    <div>
                      <div className="index-label index-label--red mb-1">CRITIQUE</div>
                      <Prose text={m.critique} className="text-sm" />
                    </div>
                    <div>
                      <div className="index-label mb-1">SOURCES</div>
                      <SourceList sources={m.sources} compact />
                    </div>
                    <MetaRow lastReviewed={m.lastReviewed} confidence={m.confidence} />
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="takeoff" className="mt-12 scroll-mt-16">
        <SectionHeader index="02.4" code="TAKEOFF" title="From AGI to ASI: three scenarios" accent="amber" subtitle="The years between AGI and ASI, the mechanisms that set the pace, and the probability the ensemble assigns to each. The scenario you select here becomes the branch shown across The Horizon." />
        <div className="grid gap-4 lg:grid-cols-3">
          {sorted.map((s) => {
            const meta = SCENARIO_LABELS[s.id];
            const active = scenario === s.id;
            return (
              <article key={s.id} className={`panel brackets brackets--${meta.accent} p-5 ${active ? 'bg-raised' : ''}`} data-testid={`takeoff-${s.id}`}>
                <div className={`index-label index-label--${meta.accent}`}>{meta.branch.toUpperCase()} BRANCH</div>
                <h3 className="mt-1 text-2xl">{s.name}</h3>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Stat label="AGI TO ASI (P50)" value={`${s.yearsAgiToAsi.p50} y`} note={`p25 ${s.yearsAgiToAsi.p25} to p75 ${s.yearsAgiToAsi.p75} years`} accent={meta.accent} />
                  <Stat label="PROBABILITY" value={`${Math.round(s.probability * 100)}%`} accent={meta.accent} />
                </div>
                <p className="mt-3 text-sm text-secondary">{s.summary}</p>
                <details className="mt-3 group">
                  <summary className="cursor-pointer list-none font-mono text-[0.66rem] tracking-[0.12em] text-cyan">
                    <span className="group-open:hidden">EXPAND NARRATIVE AND MECHANISMS</span>
                    <span className="hidden group-open:inline">COLLAPSE</span>
                  </summary>
                  <Prose text={s.narrative} className="mt-3 text-sm" />
                  <ul className="mt-3 space-y-2 text-sm">
                    {s.mechanisms.map((mech) => (
                      <li key={mech.name}>
                        <div className="text-primary">{mech.name}</div>
                        <div className="text-xs text-secondary">{mech.description}</div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <SourceList sources={s.sources} compact />
                  </div>
                </details>
                <div className="mt-4 flex gap-2">
                  <button type="button" className={`btn btn--${meta.accent}`} aria-pressed={active} onClick={() => setScenario(s.id)}>
                    {active ? 'Selected' : 'Select scenario'}
                  </button>
                  <Link to="/horizon" className="btn">
                    Open Horizon
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="indicators" className="mt-12 scroll-mt-16">
        <SectionHeader index="02.5" code="LEADING INDICATORS" title="What would change this estimate" accent="amber" subtitle="Observable signals, each with its status as of September 2026 and the direction it currently pushes the estimate." />
        <div className="space-y-3">
          {leadingIndicators.map((ind, i) => (
            <details key={ind.id} className="panel brackets group p-4" data-testid="indicator">
              <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="index-label">{pad2(i + 1)}</span>
                <span className="text-lg font-semibold text-primary">{ind.name}</span>
                <span className={`font-mono text-[0.66rem] tracking-[0.12em] ${dirClass[ind.direction]}`}>PUSHES {ind.direction.toUpperCase()}</span>
                <span className="font-mono text-[0.62rem] tracking-[0.1em] text-secondary">AS OF {ind.asOf}</span>
              </summary>
              <div className="mt-3 grid gap-4 border-t border-hairline pt-3 md:grid-cols-3">
                <div>
                  <div className="index-label mb-1">WHAT TO OBSERVE</div>
                  <p className="text-sm text-secondary">{ind.description}</p>
                </div>
                <div>
                  <div className="index-label index-label--amber mb-1">WHY IT MATTERS</div>
                  <p className="text-sm text-secondary">{ind.whyItMatters}</p>
                </div>
                <div>
                  <div className="index-label index-label--red mb-1">STATUS, SEPTEMBER 2026</div>
                  <p className="text-sm text-secondary">{ind.status}</p>
                </div>
              </div>
              <div className="mt-3">
                <SourceList sources={ind.sources} compact />
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
