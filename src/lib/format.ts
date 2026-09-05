import { ATLAS_PRESENT_YEAR, NEVER_YEAR, type Precision } from '@/data/schema';

/** Human readable year: "3.3 Mya", "12,000 BCE", "1947". */
export function formatYear(year: number): string {
  if (year <= -1_000_000) return `${(-year / 1_000_000).toFixed(year % 100_000 === 0 ? 1 : 2)} Mya`;
  if (year <= -100_000) return `${Math.round(-year / 1000)} kya`;
  if (year < 0) return `${(-year).toLocaleString('en-US')} BCE`;
  if (year < 1000) return `${year} CE`;
  return String(year);
}

/** Years before the atlas present (September 2026). Never below 1 so log scales work. */
export function yearsBeforePresent(year: number): number {
  return Math.max(1, ATLAS_PRESENT_YEAR - year + 0.5);
}

export const PRECISION_LABELS: Record<Precision, string> = {
  exact: 'Exact date',
  year: 'To the year',
  decade: 'To the decade',
  century: 'To the century',
  millennium: 'To the millennium',
  estimated: 'Estimated',
};

export function formatArrivalYear(y: number): string {
  if (y >= NEVER_YEAR) return `beyond ${NEVER_YEAR} or never`;
  return String(Math.round(y));
}

export function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

export function formatInterval(years: number): string {
  if (years >= 1_000_000) return `${(years / 1_000_000).toFixed(2)} million years`;
  if (years >= 10_000) return `${Math.round(years / 1000).toLocaleString('en-US')} thousand years`;
  if (years >= 100) return `${Math.round(years).toLocaleString('en-US')} years`;
  if (years >= 10) return `${years.toFixed(0)} years`;
  if (years >= 1) return `${years.toFixed(1)} years`;
  return `${Math.max(1, Math.round(years * 12))} months`;
}
