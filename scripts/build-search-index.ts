/**
 * Build the client-side search index (MiniSearch) into public/search-index.json.
 * Runs as part of `npm run validate` before every build.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import MiniSearch from 'minisearch';
import { epochs, events, forecastModels, horizonFields, definitions, leadingIndicators, convergences } from '../src/data/index';
import { SCENARIO_LABELS } from '../src/data/schema';

export interface SearchDoc {
  id: string;
  kind: 'event' | 'epoch' | 'model' | 'projection' | 'definition' | 'indicator' | 'convergence' | 'field';
  title: string;
  subtitle: string;
  body: string;
  route: string;
  tags: string;
}

export const SEARCH_FIELDS = ['title', 'subtitle', 'body', 'tags'];
export const STORE_FIELDS = ['kind', 'title', 'subtitle', 'route'];

export function buildDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  for (const e of epochs)
    docs.push({ id: `epoch:${e.id}`, kind: 'epoch', title: e.name, subtitle: e.span, body: `${e.thesis} ${e.humanExperience}`, route: `/record/epochs/${e.id}`, tags: e.code });
  for (const e of events)
    docs.push({ id: `event:${e.id}`, kind: 'event', title: e.title, subtitle: `${e.date.display}, ${e.location}`, body: `${e.summary} ${e.explanation} ${e.mechanism} ${e.figures.map((f) => f.name).join(' ')}`, route: `/record/events/${e.id}`, tags: [...e.domains, e.epochId].join(' ') });
  for (const m of forecastModels)
    docs.push({ id: `model:${m.id}`, kind: 'model', title: m.name, subtitle: `Forecast model ${m.index}: AGI median ${Math.round(m.agi.p50)}`, body: `${m.summary} ${m.approach} ${m.reasoning} ${m.critique}`, route: `/threshold#model-${m.id}`, tags: 'forecast agi asi' });
  for (const d of definitions)
    docs.push({ id: `definition:${d.id}`, kind: 'definition', title: d.term, subtitle: d.shortDefinition, body: `${d.definition} ${d.steelman} ${d.contrast}`, route: `/threshold#definitions`, tags: 'definition' });
  for (const i of leadingIndicators)
    docs.push({ id: `indicator:${i.id}`, kind: 'indicator', title: i.name, subtitle: `Leading indicator, pushes ${i.direction}`, body: `${i.description} ${i.whyItMatters} ${i.status}`, route: `/threshold#indicators`, tags: 'indicator' });
  for (const f of horizonFields) {
    docs.push({ id: `field:${f.id}`, kind: 'field', title: f.name, subtitle: 'Horizon field', body: `${f.summary} ${f.indexDefinition} ${f.physicalLimits.map((l) => `${l.name} ${l.description}`).join(' ')}`, route: `/horizon/fields/${f.id}`, tags: f.code });
    for (const p of f.projections)
      docs.push({ id: `projection:${f.id}:${p.window}:${p.branch}`, kind: 'projection', title: `${f.name}: ${p.headline}`, subtitle: `${p.window}, ${SCENARIO_LABELS[p.branch].branch} branch (${SCENARIO_LABELS[p.branch].name})`, body: `${p.narrative} ${p.uncertainties.join(' ')} ${p.indicators.join(' ')}`, route: `/horizon/fields/${f.id}?window=${p.window}`, tags: `${f.code} ${p.branch} ${p.window}` });
  }
  for (const c of convergences)
    docs.push({ id: `convergence:${c.id}`, kind: 'convergence', title: c.name, subtitle: `Convergence, ${c.decade.moderate}s under moderate takeoff`, body: `${c.description} ${c.mechanism}`, route: `/horizon/convergence#${c.id}`, tags: c.fieldIds.join(' ') });
  return docs;
}

export function makeMiniSearch() {
  return new MiniSearch<SearchDoc>({
    fields: SEARCH_FIELDS,
    storeFields: STORE_FIELDS,
    searchOptions: { boost: { title: 4, subtitle: 2, tags: 2 }, fuzzy: 0.2, prefix: true },
  });
}

if (process.argv[1] && /build-search-index/.test(process.argv[1])) {
  const docs = buildDocs();
  const ms = makeMiniSearch();
  ms.addAll(docs);
  const out = resolve(process.cwd(), 'public');
  mkdirSync(out, { recursive: true });
  writeFileSync(resolve(out, 'search-index.json'), JSON.stringify(ms.toJSON()));
  console.log(`search index: ${docs.length} documents`);
}
