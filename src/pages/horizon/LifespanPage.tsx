import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { HorizonNav } from '@/components/HorizonNav';
import { Stat } from '@/components/Stat';
import { useFocusLabel } from '@/app/state/FocusContext';
import { useScenario } from '@/app/state/ScenarioContext';
import { horizonFields, convergences } from '@/data';
import { SCENARIOS, SCENARIO_LABELS, WINDOWS, WINDOW_BOUNDS, type Scenario } from '@/data/schema';

/**
 * Longevity branches: expected age at death for someone alive in 2026, by takeoff scenario.
 * Baseline follows current period life tables (about 80 in high-income countries) plus the historical
 * trend of roughly 2 years per decade. Accelerated adds healthspan gains from the biotech field's moderate
 * branch. Discontinuous assumes the fast branch's mid-century interventions reach most people alive then.
 * These are the same assumptions used in the Biotechnology and Longevity field; nothing here is medical advice.
 */
const LONGEVITY: Record<Scenario, { label: string; expectancy: (birthYear: number) => number; note: string }> = {
  slow: {
    label: 'Baseline longevity',
    expectancy: (b) => 80 + Math.max(0, (b - 1950) / 10) * 2,
    note: 'Current life tables plus about two years per decade of birth cohort, the twentieth-century trend continued.',
  },
  moderate: {
    label: 'Accelerated longevity',
    expectancy: (b) => 88 + Math.max(0, (b - 1950) / 10) * 3,
    note: 'Adds healthspan gains from the biotech field accelerated branch: aging interventions with real effect sizes reaching people in the 2040s.',
  },
  fast: {
    label: 'Discontinuous longevity',
    expectancy: (b) => 100 + Math.max(0, (b - 1940) / 10) * 5,
    note: 'Assumes the fast branch: superhuman biomedical research from the early 2030s and broad access to mid-century interventions. Bounded by biology and by trial and manufacturing clocks, not by discovery.',
  },
};

export default function LifespanPage() {
  const { scenario } = useScenario();
  useFocusLabel('03 // YOU IN 2076', 'You in 2076');
  const [birthYear, setBirthYear] = useState(1990);
  const [branch, setBranch] = useState<Scenario>(scenario);
  const model = LONGEVITY[branch];
  const expectancy = model.expectancy(birthYear);
  const deathYear = Math.round(birthYear + expectancy);
  const ageIn2076 = 2076 - birthYear;
  const meta = SCENARIO_LABELS[scenario];

  const reachable = useMemo(
    () =>
      WINDOWS.map((w) => {
        const [start, end] = WINDOW_BOUNDS[w];
        const status = deathYear >= end ? 'full' : deathYear >= start ? 'partial' : 'beyond';
        const items = horizonFields
          .map((f) => ({ field: f, p: f.projections.find((x) => x.window === w && x.branch === scenario) }))
          .filter((x) => x.p);
        return { w, start, end, status, items };
      }),
    [deathYear, scenario],
  );

  const conv = [...convergences].sort((a, b) => a.decade[scenario] - b.decade[scenario]);

  return (
    <>
      <HorizonNav />
      <SectionHeader
        as="h1"
        index="03"
        code="YOU IN 2076"
        title="Which projected changes fall inside a plausible lifespan"
        accent="red"
        subtitle="Enter a birth year. The panel estimates a plausible lifespan under each longevity branch and marks which projection windows, under the currently selected takeoff scenario, you would live to see. Everything runs in your browser and nothing is stored."
      />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <form className="panel brackets brackets--red p-4" onSubmit={(e) => e.preventDefault()} data-testid="lifespan-form">
          <label htmlFor="birth-year" className="index-label index-label--red block">BIRTH YEAR</label>
          <input
            id="birth-year"
            type="number"
            min={1920}
            max={2026}
            value={birthYear}
            onChange={(e) => setBirthYear(Math.max(1920, Math.min(2026, Number(e.target.value) || 1990)))}
            className="field-input mt-2 w-full text-lg"
            data-testid="birth-year"
          />
          <div className="index-label mt-4 mb-2">LONGEVITY BRANCH</div>
          <div className="flex flex-col gap-1" role="group" aria-label="Longevity branch">
            {SCENARIOS.map((s) => (
              <button key={s} type="button" className={`btn btn--${SCENARIO_LABELS[s].accent} text-left`} aria-pressed={branch === s} onClick={() => setBranch(s)}>
                {LONGEVITY[s].label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-secondary">{model.note}</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Stat label="PLAUSIBLE AGE" value={Math.round(expectancy)} note="years, this branch" accent={SCENARIO_LABELS[branch].accent} />
            <Stat label="HORIZON YEAR" value={deathYear} note="birth year plus plausible age" accent={SCENARIO_LABELS[branch].accent} />
            <Stat label="AGE IN 2076" value={ageIn2076 > 0 ? ageIn2076 : 0} note={ageIn2076 <= Math.round(expectancy) ? 'within plausible lifespan' : 'beyond plausible lifespan'} />
            <Stat label="PROJECTION SCENARIO" value={meta.branch} note="set in the status bar" accent={meta.accent} />
          </div>
        </form>

        <div className="space-y-3" data-testid="lifespan-windows">
          {reachable.map(({ w, start, end, status, items }) => (
            <section key={w} className={`panel brackets p-4 ${status === 'beyond' ? 'opacity-60' : ''}`} data-status={status}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="index-label">{w.replace('-', ' TO ')}</div>
                <div className={`font-mono text-[0.66rem] tracking-[0.12em] ${status === 'full' ? 'text-cyan' : status === 'partial' ? 'text-amber' : 'text-red'}`}>
                  {status === 'full' ? `WITHIN LIFESPAN (AGE ${start - birthYear} TO ${end - birthYear})` : status === 'partial' ? `PARTLY WITHIN LIFESPAN (TO ${deathYear})` : 'BEYOND PLAUSIBLE LIFESPAN'}
                </div>
              </div>
              <ul className="mt-2 grid gap-1 md:grid-cols-2">
                {items.map(({ field, p }) => (
                  <li key={field.id} className="text-sm">
                    <Link to={`/horizon/fields/${field.id}?window=${w}`} className="text-secondary hover:text-primary">
                      <span className="font-mono text-[0.6rem] tracking-[0.1em] text-red">{field.code}</span> {p!.headline}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="panel brackets brackets--red p-4">
            <div className="index-label index-label--red mb-2">CONVERGENCES YOU WOULD SEE UNDER THE {meta.branch.toUpperCase()} BRANCH</div>
            <ul className="space-y-1 text-sm">
              {conv.map((c) => {
                const seen = c.decade[scenario] + 9 <= deathYear;
                return (
                  <li key={c.id} className={seen ? 'text-primary' : 'text-secondary line-through'}>
                    <span className="font-mono text-[0.62rem] text-secondary">{c.decade[scenario]}s</span> {c.name}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
