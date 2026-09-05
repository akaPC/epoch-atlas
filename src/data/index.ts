/**
 * Aggregated atlas data. Every record here is validated at build time by
 * scripts/validate-data.ts and by the Vitest quality gates.
 */
import { TechEventSchema, type Epoch, type TechEvent, type TechEventInput } from './schema';
import * as e01 from './epochs/01-paleolithic';
import * as e02 from './epochs/02-neolithic';
import * as e03 from './epochs/03-bronze-age';
import * as e04 from './epochs/04-iron-age-classical';
import * as e05 from './epochs/05-medieval';
import * as e06 from './epochs/06-print-scientific';
import * as e07 from './epochs/07-industrial-first';
import * as e08 from './epochs/08-industrial-second';
import * as e09 from './epochs/09-physics-total-war';
import * as e10 from './epochs/10-atomic-space';
import * as e11 from './epochs/11-microprocessor-pc';
import * as e12 from './epochs/12-networked-world';
import * as e13 from './epochs/13-intelligence-era';
import { forecastModels } from './forecasts/models';
import { takeoffScenarios } from './forecasts/takeoff';
import { leadingIndicators } from './forecasts/indicators';
import { definitions } from './forecasts/definitions';
import { field as h01 } from './horizon/01-compute-ai';
import { field as h02 } from './horizon/02-energy';
import { field as h03 } from './horizon/03-biotech-longevity';
import { field as h04 } from './horizon/04-medicine-neurotech';
import { field as h05 } from './horizon/05-materials-nano';
import { field as h06 } from './horizon/06-space-launch';
import { field as h07 } from './horizon/07-robotics-manufacturing';
import { field as h08 } from './horizon/08-transportation';
import { field as h09 } from './horizon/09-agriculture-food';
import { field as h10 } from './horizon/10-communication-networks';
import { field as h11 } from './horizon/11-climate-engineering';
import { field as h12 } from './horizon/12-quantum';
import { field as h13 } from './horizon/13-weapons-security';
import { field as h14 } from './horizon/14-governance-economy';
import { convergences } from './horizon/convergences';

const epochModules = [e01, e02, e03, e04, e05, e06, e07, e08, e09, e10, e11, e12, e13];

export const epochs: Epoch[] = epochModules.map((m) => m.epoch);

/** Apply schema defaults (for example `verification`) so consumers see the full shape. */
function normalize(input: TechEventInput): TechEvent {
  const r = TechEventSchema.safeParse(input);
  return r.success ? r.data : ({ ...input, verification: input.verification ?? 'established' } as TechEvent);
}

export const events: TechEvent[] = epochModules.flatMap((m) => m.events.map(normalize));

export { forecastModels, takeoffScenarios, leadingIndicators, definitions, convergences };
export const horizonFields = [h01, h02, h03, h04, h05, h06, h07, h08, h09, h10, h11, h12, h13, h14];
