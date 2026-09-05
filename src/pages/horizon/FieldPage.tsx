import { useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { HorizonNav } from '@/components/HorizonNav';
import { SourceList } from '@/components/SourceList';
import { Bullets, MetaRow, Prose } from '@/components/Meta';
import { FanChart } from '@/components/charts/FanChart';
import { useFocusLabel } from '@/app/state/FocusContext';
import { useScenario } from '@/app/state/ScenarioContext';
import { horizonFields } from '@/data';
import { SCENARIO_LABELS, WINDOWS, type Window } from '@/data/schema';
import { eventById } from '@/lib/record';
import { pad2 } from '@/lib/format';
import NotFound from '@/pages/NotFound';

const fields = [...horizonFields].sort((a, b) => a.index - b.index);
const confClass = { high: 'text-cyan', medium: 'text-amber', low: 'text-red' } as const;

export default function FieldPage() {
  const { fieldId = '' } = useParams();
  const [params, setParams] = useSearchParams();
  const field = fields.find((f) => f.id === fieldId);
  const { scenario, setScenario } = useScenario();
  const meta = SCENARIO_LABELS[scenario];
  const urlWindow = (WINDOWS as readonly string[]).includes(params.get('window') ?? '') ? (params.get('window') as Window) : null;
  const [picked, setPicked] = useState<Window | null>(null);
  const window: Window = picked ?? urlWindow ?? '2030-2040';
  useFocusLabel(field ? `03 // ${field.code} // ${window} // ${meta.branch.toUpperCase()}` : '03 // FIELD', field?.name);
  const projection = useMemo(() => field?.projections.find((p) => p.window === window && p.branch === scenario), [field, window, scenario]);
  if (!field) return <NotFound />;
  const prev = fields.find((f) => f.index === field.index - 1);
  const next = fields.find((f) => f.index === field.index + 1);

  return (
    <>
      <HorizonNav />
      <SectionHeader
        as="h1"
        index={pad2(field.index)}
        code={field.code}
        title={field.name}
        accent="red"
        subtitle={field.summary}
        actions={
          <>
            {prev && (
              <Link to={`/horizon/fields/${prev.id}`} className="btn btn--red">
                {pad2(prev.index)} {prev.code}
              </Link>
            )}
            {next && (
              <Link to={`/horizon/fields/${next.id}`} className="btn btn--red">
                {pad2(next.index)} {next.code}
              </Link>
            )}
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="panel brackets brackets--red p-3 sm:p-4" data-testid="fan-chart">
          <div className="index-label index-label--red mb-1">CAPABILITY INDEX <span aria-hidden="true">//</span> 2026 TO 2126 <span aria-hidden="true">//</span> THREE BRANCHES WITH CONFIDENCE BANDS</div>
          <FanChart data={field.capabilityIndex} active={scenario} onActivate={setScenario} label={field.name} />
        </div>
        <div className="panel brackets p-4">
          <div className="index-label mb-2">WHAT THE INDEX MEASURES</div>
          <Prose text={field.indexDefinition} className="text-sm" />
          <div className="index-label mt-4 mb-2">PHYSICAL LIMITS THAT BOUND THIS FIELD</div>
          <ul className="space-y-2">
            {field.physicalLimits.map((l) => (
              <li key={l.name}>
                <details className="group">
                  <summary className="cursor-pointer list-none text-sm text-primary">
                    <span className="mr-2 font-mono text-[0.62rem] text-amber" aria-hidden="true">LIMIT</span>
                    {l.name}
                  </summary>
                  <p className="mt-1 text-xs text-secondary">{l.description}</p>
                  <div className="mt-1">
                    <SourceList sources={l.sources} compact />
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-8">
        <div className="mb-3 flex flex-wrap items-center gap-2" role="tablist" aria-label="Projection window">
          <span className="mr-1 font-mono text-[0.62rem] tracking-[0.12em] text-secondary">WINDOW</span>
          {WINDOWS.map((w) => (
            <button
              key={w}
              type="button"
              role="tab"
              aria-selected={w === window}
              className={`btn btn--red ${w === window ? 'btn--active' : ''}`}
              data-testid={`window-${w}`}
              onClick={() => {
                setPicked(w);
                setParams({ window: w }, { replace: true });
              }}
            >
              {w.replace('-', ' to ')}
            </button>
          ))}
        </div>

        {projection && (
          <article className={`panel brackets brackets--${meta.accent} p-5`} data-testid="projection" data-branch={projection.branch} data-window={projection.window}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className={`index-label index-label--${meta.accent}`}>
                {projection.window} <span aria-hidden="true">//</span> {meta.branch.toUpperCase()} BRANCH <span aria-hidden="true">//</span> {meta.name.toUpperCase()}
              </div>
              <div className="font-mono text-[0.66rem] tracking-[0.12em] text-secondary">
                CONFIDENCE <span className={confClass[projection.confidence]}>{projection.confidence.toUpperCase()}</span>
              </div>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl" data-testid="projection-headline">{projection.headline}</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <div>
                <div className="index-label mb-1">ON THE GROUND</div>
                <Prose text={projection.narrative} />
                <div className="index-label mt-5 mb-1">CONFIDENCE JUSTIFICATION</div>
                <p className="text-sm text-secondary">{projection.confidenceJustification}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="index-label index-label--amber mb-1">KEY UNCERTAINTIES</div>
                  <Bullets items={projection.uncertainties} accent="amber" />
                </div>
                <div>
                  <div className="index-label mb-1">LEADING INDICATORS TO WATCH</div>
                  <Bullets items={projection.indicators} />
                </div>
                <div>
                  <div className="index-label index-label--red mb-1">DEPENDENCY CHAIN INTO THE RECORD</div>
                  <ol className="space-y-1">
                    {projection.dependencies.map((d, i) => {
                      const ev = eventById.get(d);
                      return (
                        <li key={d} className="flex gap-2 text-sm">
                          <span className="font-mono text-[0.62rem] text-secondary">{pad2(i + 1)}</span>
                          {ev ? (
                            <Link to={`/record/events/${ev.id}`} className="text-primary hover:text-cyan">
                              {ev.title} <span className="font-mono text-[0.6rem] text-cyan">{ev.date.display}</span>
                            </Link>
                          ) : (
                            <span className="text-secondary">{d}</span>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </div>
                <div>
                  <div className="index-label mb-1">SOURCES</div>
                  <SourceList sources={projection.sources} compact />
                </div>
              </div>
            </div>
          </article>
        )}

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {(['slow', 'moderate', 'fast'] as const).map((s) => {
            const p = field.projections.find((x) => x.window === window && x.branch === s);
            const m = SCENARIO_LABELS[s];
            if (!p) return null;
            return (
              <button key={s} type="button" className={`panel brackets brackets--${m.accent} p-3 text-left transition-colors hover:bg-hover ${s === scenario ? 'bg-raised' : ''}`} aria-pressed={s === scenario} onClick={() => setScenario(s)}>
                <div className={`index-label index-label--${m.accent}`}>{m.branch.toUpperCase()}</div>
                <div className="mt-1 text-sm text-primary">{p.headline}</div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-8 panel brackets p-4">
        <div className="index-label mb-2">FIELD SOURCES</div>
        <SourceList sources={field.sources} compact />
        <div className="mt-3">
          <MetaRow lastReviewed={field.lastReviewed} />
        </div>
      </section>
    </>
  );
}
