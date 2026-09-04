import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Card } from '@/components/Card';
import { Stat } from '@/components/Stat';
import { useFocusLabel } from '@/app/state/FocusContext';
import stats from '@/data/generated/stats.json';

export default function Home() {
  useFocusLabel('ATLAS // OVERVIEW');
  return (
    <>
      <Hero
        index="00"
        code="ATLAS"
        title="Human technological advancement, in three movements"
        lede="Epoch Atlas is a reference work built like an operations console. The Record traces every major technological epoch from the first stone tools to September 2026. The Threshold forecasts when artificial general intelligence and superintelligence arrive, with the disagreement left visible. The Horizon projects fourteen fields across the next hundred years, branched by how fast the transition runs."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="EPOCHS" value={stats.epochs} />
          <Stat label="EVENTS" value={stats.events} />
          <Stat label="FORECAST MODELS" value={stats.forecastModels} accent="amber" />
          <Stat label="PROJECTIONS" value={stats.projections} accent="red" />
        </div>
      </Hero>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card to="/record" label="01 // THE RECORD" testId="home-record">
          <h2 className="text-2xl">The Record</h2>
          <p className="mt-2 text-sm text-secondary">
            Thirteen epochs, from the Lomekwian flakes to the intelligence era. Every event carries its mechanism, its
            prerequisites, its consequences, and its sources, so the atlas can draw the dependency chain from a
            chopper to a chip.
          </p>
          <div className="mt-4 font-mono text-[0.65rem] tracking-[0.14em] text-cyan">3.3 MYA TO SEPTEMBER 2026</div>
        </Card>
        <Card to="/threshold" label="02 // THE THRESHOLD" accent="amber" testId="home-threshold">
          <h2 className="text-2xl">The Threshold</h2>
          <p className="mt-2 text-sm text-secondary">
            Eight forecast models for AGI and ASI arrival, an ensemble with editable weights, three takeoff scenarios,
            and the leading indicators that would move the estimate. Analysis, not manifesto.
          </p>
          <div className="mt-4 font-mono text-[0.65rem] tracking-[0.14em] text-amber">MEDIANS, QUARTILES, DISSENT</div>
        </Card>
        <Card to="/horizon" label="03 // THE HORIZON" accent="red" testId="home-horizon">
          <h2 className="text-2xl">The Horizon</h2>
          <p className="mt-2 text-sm text-secondary">
            Fourteen fields, five windows, three branches. Each projection respects the physical limits that bound it
            and traces its dependencies back into The Record.
          </p>
          <div className="mt-4 font-mono text-[0.65rem] tracking-[0.14em] text-red">2026 TO 2126</div>
        </Card>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <Card label="HOW TO READ THIS">
          <ul className="list-square space-y-2 pl-4 text-sm text-secondary">
            <li>
              Every record shows a review date and, where it applies, a confidence rating. Dates carry a precision
              flag: exact, year, decade, century, millennium or estimated.
            </li>
            <li>
              The scenario selector in the status bar (slow, moderate, fast takeoff) reflows every Horizon projection
              globally. It defaults to moderate.
            </li>
            <li>
              Press Cmd or Ctrl plus K anywhere to search across events, epochs, forecast models and projections.
            </li>
            <li>
              The <Link to="/sources" className="text-cyan underline underline-offset-2">Sources</Link> page lists
              every citation with back-links to the records that use it.
            </li>
          </ul>
        </Card>
        <Card label="INTEGRITY">
          <p className="text-sm text-secondary">
            The build fails if any record is malformed, if any epoch falls below its minimum event count, if any
            dependency id does not resolve, if any projection window or branch is empty, or if any string contains a
            forbidden placeholder. Read the{' '}
            <Link to="/methodology" className="text-cyan underline underline-offset-2">
              Methodology
            </Link>{' '}
            for the forecasting approach and its known failure modes, and disagree freely.
          </p>
        </Card>
      </section>
    </>
  );
}
