import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Stat } from '@/components/Stat';
import { HorizonNav } from '@/components/HorizonNav';
import { useFocusLabel } from '@/app/state/FocusContext';
import { useScenario } from '@/app/state/ScenarioContext';
import { horizonFields, takeoffScenarios } from '@/data';
import { SCENARIO_LABELS, WINDOWS } from '@/data/schema';
import { pad2 } from '@/lib/format';

const fields = [...horizonFields].sort((a, b) => a.index - b.index);

export default function HorizonIndex() {
  const { scenario } = useScenario();
  const meta = SCENARIO_LABELS[scenario];
  useFocusLabel(`03 // THE HORIZON // ${meta.branch.toUpperCase()}`, 'The Horizon');
  const takeoff = takeoffScenarios.find((s) => s.id === scenario);
  const total = fields.reduce((n, f) => n + f.projections.length, 0);

  return (
    <>
      <Hero
        index="03"
        code="THE HORIZON"
        title="Fourteen fields, five windows, three branches, 2026 to 2126"
        accent="red"
        lede="Each field is projected across five windows. Each window has three branches pinned to the takeoff scenarios from The Threshold. Every branch entry carries a headline capability, a narrative of what it looks like on the ground, a dependency chain back into The Record, the key uncertainties, the indicators to watch, and a confidence rating. Physical limits are cited where they bound a projection."
      >
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat label="FIELDS" value={fields.length} accent="red" />
          <Stat label="PROJECTIONS" value={total} note={`${WINDOWS.length} windows x 3 branches`} accent="red" />
          <Stat label="ACTIVE BRANCH" value={meta.branch} note={`${meta.name}, ${takeoff ? Math.round(takeoff.probability * 100) : 0}% probability`} accent={meta.accent} />
          <Stat label="AGI / ASI ANCHOR" value={scenario === 'slow' ? '2038 / 2058' : scenario === 'moderate' ? '2032 / 2040' : '2029 / 2031'} note="ensemble median under this branch" accent={meta.accent} />
        </div>
      </Hero>
      <HorizonNav />
      <div className="mb-6 panel brackets brackets--red p-4 text-sm text-secondary">
        The scenario selector in the status bar sets the branch shown on every field page. It is currently <span className={`font-mono text-[0.72rem] tracking-[0.12em] text-${meta.accent}`}>{meta.name.toUpperCase()}</span>. {takeoff?.summary}
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {fields.map((f) => {
          const now = f.projections.find((p) => p.window === '2030-2040' && p.branch === scenario);
          const end = f.capabilityIndex[scenario][f.capabilityIndex[scenario].length - 1];
          return (
            <Link key={f.id} to={`/horizon/fields/${f.id}`} className="panel brackets brackets--red block p-4 transition-colors duration-150 ease-console hover:bg-hover" data-testid="field-card">
              <div className="flex items-center justify-between">
                <span className="index-label index-label--red">{pad2(f.index)} <span aria-hidden="true">//</span> {f.code}</span>
                <span className="font-mono text-[0.62rem] tracking-[0.1em] text-secondary">2126 INDEX <span className={`text-${meta.accent}`}>{end?.value ?? 0}</span></span>
              </div>
              <h2 className="mt-2 text-2xl leading-tight">{f.name}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-secondary">{f.summary}</p>
              {now && (
                <div className="mt-3 border-t border-hairline pt-2">
                  <div className="font-mono text-[0.62rem] tracking-[0.12em] text-secondary">2030 TO 2040 <span aria-hidden="true">//</span> {meta.branch.toUpperCase()}</div>
                  <div className="text-sm text-primary">{now.headline}</div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
