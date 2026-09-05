import { epochs, events, forecastModels, takeoffScenarios, leadingIndicators, definitions, horizonFields, convergences } from '@/data';
import { sourceKey, type Source } from '@/data/schema';

export interface Citation {
  key: string;
  source: Source;
  citedBy: { label: string; route: string }[];
}

export function collectCitations(): Citation[] {
  const map = new Map<string, Citation>();
  const add = (s: Source, label: string, route: string) => {
    const key = sourceKey(s);
    let c = map.get(key);
    if (!c) {
      c = { key, source: s, citedBy: [] };
      map.set(key, c);
    } else if (!c.source.url && s.url) {
      c.source = s;
    }
    if (!c.citedBy.some((b) => b.route === route)) c.citedBy.push({ label, route });
  };
  for (const e of epochs) e.sources.forEach((s) => add(s, `Epoch: ${e.name}`, `/record/epochs/${e.id}`));
  for (const e of events) e.sources.forEach((s) => add(s, e.title, `/record/events/${e.id}`));
  for (const m of forecastModels) m.sources.forEach((s) => add(s, `Model: ${m.name}`, `/threshold#model-${m.id}`));
  for (const t of takeoffScenarios) t.sources.forEach((s) => add(s, `Takeoff: ${t.name}`, '/threshold#takeoff'));
  for (const i of leadingIndicators) i.sources.forEach((s) => add(s, `Indicator: ${i.name}`, '/threshold#indicators'));
  for (const d of definitions) d.sources.forEach((s) => add(s, `Definition: ${d.term}`, '/threshold#definitions'));
  for (const f of horizonFields) {
    f.sources.forEach((s) => add(s, `Field: ${f.name}`, `/horizon/fields/${f.id}`));
    f.physicalLimits.forEach((l) => l.sources.forEach((s) => add(s, `Limit: ${l.name} (${f.name})`, `/horizon/fields/${f.id}`)));
    f.projections.forEach((p) => p.sources.forEach((s) => add(s, `${f.name} ${p.window} ${p.branch}`, `/horizon/fields/${f.id}?window=${p.window}`)));
  }
  for (const c of convergences) c.sources.forEach((s) => add(s, `Convergence: ${c.name}`, `/horizon/convergence#${c.id}`));
  return Array.from(map.values()).sort((a, b) => a.source.author.localeCompare(b.source.author) || a.source.year - b.source.year);
}
