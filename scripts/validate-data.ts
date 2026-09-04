/**
 * Build-time validation. Fails the build on any invalid record and writes
 * src/data/generated/stats.json for the home page.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  EpochSchema,
  TechEventSchema,
  ForecastModelSchema,
  HorizonFieldSchema,
  ConvergenceSchema,
  TakeoffScenarioSchema,
  LeadingIndicatorSchema,
  DefinitionSchema,
  sourceKey,
  type Source,
} from '../src/data/schema';
import {
  epochs,
  events,
  forecastModels,
  horizonFields,
  convergences,
  takeoffScenarios,
  leadingIndicators,
  definitions,
} from '../src/data/index';

let failures = 0;
function check<T>(label: string, schema: { safeParse: (v: unknown) => { success: boolean; error?: { issues: { path: (string | number)[]; message: string }[] } } }, items: T[], idOf: (t: T) => string) {
  for (const item of items) {
    const r = schema.safeParse(item);
    if (!r.success) {
      failures++;
      console.error(`[invalid ${label}] ${idOf(item)}`);
      for (const issue of r.error?.issues ?? []) console.error(`   ${issue.path.join('.')}: ${issue.message}`);
    }
  }
  console.log(`validated ${items.length} ${label}`);
}

check('epochs', EpochSchema, epochs, (e) => e.id);
check('events', TechEventSchema, events, (e) => e.id);
check('forecast models', ForecastModelSchema, forecastModels, (m) => m.id);
check('takeoff scenarios', TakeoffScenarioSchema, takeoffScenarios, (s) => s.id);
check('leading indicators', LeadingIndicatorSchema, leadingIndicators, (s) => s.id);
check('definitions', DefinitionSchema, definitions, (s) => s.id);
check('horizon fields', HorizonFieldSchema, horizonFields, (f) => f.id);
check('convergences', ConvergenceSchema, convergences, (c) => c.id);

const allSources: Source[] = [
  ...epochs.flatMap((e) => e.sources),
  ...events.flatMap((e) => e.sources),
  ...forecastModels.flatMap((m) => m.sources),
  ...takeoffScenarios.flatMap((s) => s.sources),
  ...leadingIndicators.flatMap((s) => s.sources),
  ...definitions.flatMap((s) => s.sources),
  ...horizonFields.flatMap((f) => [...f.sources, ...f.physicalLimits.flatMap((p) => p.sources), ...f.projections.flatMap((p) => p.sources)]),
  ...convergences.flatMap((c) => c.sources),
];
const distinct = new Set(allSources.map(sourceKey));

const stats = {
  epochs: epochs.length,
  events: events.length,
  forecastModels: forecastModels.length,
  projections: horizonFields.reduce((n, f) => n + f.projections.length, 0),
  sources: distinct.size,
  fields: horizonFields.length,
};
const out = resolve(process.cwd(), 'src/data/generated');
mkdirSync(out, { recursive: true });
writeFileSync(resolve(out, 'stats.json'), JSON.stringify(stats, null, 2) + '\n');
console.log('stats', stats);

if (failures > 0) {
  console.error(`${failures} invalid record(s)`);
  process.exit(1);
}
