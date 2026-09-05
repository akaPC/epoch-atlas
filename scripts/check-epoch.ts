/**
 * Validate a single epoch data file during authoring.
 * Usage: npx tsx scripts/check-epoch.ts src/data/epochs/01-paleolithic.ts
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { EpochSchema, TechEventSchema, FORBIDDEN_PATTERNS, wordCount, type TechEventInput, type Epoch } from '../src/data/schema';

const file = process.argv[2];
if (!file) {
  console.error('usage: tsx scripts/check-epoch.ts <file>');
  process.exit(2);
}

const registry = new Set<string>();
const registryText = readFileSync(resolve(process.cwd(), 'docs/EVENT_IDS.md'), 'utf8');
for (const line of registryText.split('\n')) {
  if (line.startsWith('#') || line.startsWith('Epoch ids') || line.startsWith('`') || !line.trim()) continue;
  for (const id of line.split(',').map((s) => s.trim()).filter(Boolean)) registry.add(id);
}

const mod = (await import(pathToFileURL(resolve(process.cwd(), file)).href)) as { epoch: Epoch; events: TechEventInput[] };
const problems: string[] = [];

const ep = EpochSchema.safeParse(mod.epoch);
if (!ep.success) for (const i of ep.error.issues) problems.push(`epoch ${i.path.join('.')}: ${i.message}`);

const ids = new Set<string>(mod.events.map((e) => e.id));
const seenIds = new Set<string>();
for (const ev of mod.events) {
  const r = TechEventSchema.safeParse(ev);
  if (!r.success) for (const i of r.error.issues) problems.push(`${ev.id ?? '?'} ${i.path.join('.')}: ${i.message}`);
  if (seenIds.has(ev.id)) problems.push(`${ev.id}: duplicate id`);
  seenIds.add(ev.id);
  if (ev.epochId !== mod.epoch.id) problems.push(`${ev.id}: epochId ${ev.epochId} does not match ${mod.epoch.id}`);
  const wc = wordCount(ev.explanation ?? '');
  if (wc < 300 || wc > 600) problems.push(`${ev.id}: explanation is ${wc} words (need 300 to 600)`);
  if ((ev.sources ?? []).length < 2) problems.push(`${ev.id}: needs at least 2 sources`);
  if (ev.date && (ev.date.year < mod.epoch.startYear || ev.date.year > mod.epoch.endYear)) problems.push(`${ev.id}: year ${ev.date.year} outside epoch range ${mod.epoch.startYear}..${mod.epoch.endYear}`);
  for (const p of ev.prerequisites ?? []) if (!registry.has(p) && !ids.has(p)) problems.push(`${ev.id}: prerequisite "${p}" not in registry or this file`);
  for (const c of ev.consequences ?? []) if (!registry.has(c) && !ids.has(c)) problems.push(`${ev.id}: consequence "${c}" not in registry or this file`);
}
for (const ev of mod.events) {
  for (const c of ev.consequences ?? []) if (!registry.has(c) && !ids.has(c)) problems.push(`${ev.id}: consequence "${c}" unresolved`);
}

const text = readFileSync(resolve(process.cwd(), file), 'utf8');
for (const { label, pattern } of FORBIDDEN_PATTERNS) {
  const lines = text.split('\n');
  lines.forEach((l, i) => {
    if (pattern.test(l)) problems.push(`forbidden string "${label}" at line ${i + 1}`);
  });
}

const required = [...registryText.split(`\n## ${String(mod.epoch.index).padStart(2, '0')} ${mod.epoch.id}`)[1]?.split('\n## ')[0]?.split('\n').slice(1).join(',').split(',').map((s) => s.trim()).filter(Boolean) ?? []];
for (const id of required) if (!ids.has(id)) problems.push(`missing required event id: ${id}`);
if (mod.events.length < mod.epoch.minEvents) problems.push(`only ${mod.events.length} events, minimum is ${mod.epoch.minEvents}`);

if (problems.length) {
  console.error(`${problems.length} problem(s) in ${file}:`);
  for (const p of problems) console.error(' - ' + p);
  process.exit(1);
}
console.log(`${file}: ${mod.events.length} events OK (${required.length} required present)`);
