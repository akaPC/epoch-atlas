import { scaleLog, scaleLinear } from 'd3';
import { ATLAS_PRESENT_YEAR } from '@/data/schema';
import { yearsBeforePresent } from '@/lib/format';

/** Year where the timeline switches from logarithmic (deep past) to linear (recent). */
export const SPLIT_YEAR = 2011;
export const START_YEAR = -3300000;

/**
 * Hybrid time scale: logarithmic in years-before-present on the left portion,
 * linear in calendar years on the right portion.
 */
export function makeTimeScale(width: number, splitFraction = 0.74) {
  const splitX = width * splitFraction;
  const logScale = scaleLog()
    .domain([yearsBeforePresent(SPLIT_YEAR), yearsBeforePresent(START_YEAR)])
    .range([splitX, 0]);
  const linScale = scaleLinear().domain([SPLIT_YEAR, ATLAS_PRESENT_YEAR + 0.75]).range([splitX, width]);

  const x = (year: number): number => (year < SPLIT_YEAR ? logScale(yearsBeforePresent(year)) : linScale(year));
  const invert = (px: number): number => {
    if (px < splitX) return ATLAS_PRESENT_YEAR + 0.5 - logScale.invert(px);
    return linScale.invert(px);
  };
  return { x, invert, splitX };
}

/** Tick years that read well on the hybrid scale. */
export const TICK_YEARS = [
  -3000000, -1000000, -300000, -100000, -30000, -10000, -3000, -1000, 0, 1000, 1500, 1800, 1900, 1950, 2000, 2011, 2015, 2020, 2026,
];
