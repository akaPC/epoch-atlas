import { epochs, events, horizonFields } from '@/data';
import type { Domain, Epoch, TechEvent, Projection, HorizonField } from '@/data/schema';

export const epochsSorted: Epoch[] = [...epochs].sort((a, b) => a.index - b.index);
export const eventsSorted: TechEvent[] = [...events].sort((a, b) => a.date.year - b.date.year || a.title.localeCompare(b.title));
export const eventById: Map<string, TechEvent> = new Map(events.map((e) => [e.id, e]));
export const epochById: Map<string, Epoch> = new Map(epochs.map((e) => [e.id, e]));

export function eventsForEpoch(epochId: string): TechEvent[] {
  return eventsSorted.filter((e) => e.epochId === epochId);
}

export function eventsForDomain(domain: Domain): TechEvent[] {
  return eventsSorted.filter((e) => e.domains.includes(domain));
}

/** Events that list the given event as a prerequisite (derived, in case a record omitted the consequence). */
export function dependents(eventId: string): TechEvent[] {
  return eventsSorted.filter((e) => e.prerequisites.includes(eventId));
}

export function ancestors(eventId: string): Set<string> {
  const out = new Set<string>();
  const stack = [eventId];
  while (stack.length) {
    const id = stack.pop()!;
    const ev = eventById.get(id);
    if (!ev) continue;
    for (const p of ev.prerequisites) if (!out.has(p)) { out.add(p); stack.push(p); }
  }
  return out;
}

export function descendants(eventId: string): Set<string> {
  const out = new Set<string>();
  const stack = [eventId];
  while (stack.length) {
    const id = stack.pop()!;
    const ev = eventById.get(id);
    if (!ev) continue;
    const next = new Set([...ev.consequences, ...dependents(id).map((d) => d.id)]);
    for (const c of next) if (!out.has(c)) { out.add(c); stack.push(c); }
  }
  return out;
}

/** Projections across all fields that depend on this event. */
export function projectionsDependingOn(eventId: string): { field: HorizonField; projection: Projection }[] {
  const out: { field: HorizonField; projection: Projection }[] = [];
  for (const field of horizonFields)
    for (const projection of field.projections)
      if (projection.dependencies.includes(eventId)) out.push({ field, projection });
  return out;
}

/** Follow the chain of first prerequisites back to the deep past. */
export function chainToPast(eventId: string, max = 40): TechEvent[] {
  const out: TechEvent[] = [];
  const seen = new Set<string>();
  let cur = eventById.get(eventId);
  while (cur && !seen.has(cur.id) && out.length < max) {
    out.push(cur);
    seen.add(cur.id);
    const next = cur.prerequisites
      .map((p) => eventById.get(p))
      .filter((e): e is TechEvent => Boolean(e))
      .sort((a, b) => b.date.year - a.date.year)[0];
    cur = next;
  }
  return out;
}

export function epochAccent(index: number): string {
  // Cyan for deep past through amber into red for the present, matching the three movements.
  const t = (index - 1) / 12;
  if (t < 0.5) return mix('#22d3ee', '#f5b625', t * 2);
  return mix('#f5b625', '#ff4d4f', (t - 0.5) * 2);
}

function mix(a: string, b: string, t: number): string {
  const pa = hex(a), pb = hex(b);
  const c = pa.map((v, i) => Math.round(v + (pb[i]! - v) * t));
  return `#${c.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}
function hex(h: string): number[] {
  return [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
}
