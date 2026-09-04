# Contributing

Epoch Atlas is a reference work. Contributions are welcome when they improve accuracy, add well-sourced records, or fix defects.

## Ground rules

- Every fact-bearing record carries at least two sources. Prefer primary literature, standard references and major institutional publications. Do not invent citations.
- No em dashes anywhere in UI copy or content. Use periods, commas, colons or parentheses.
- No placeholder text. The quality gates reject "TODO", "lorem", "placeholder", "coming soon" and "TBD".
- Ids are kebab-case and stable. Renaming an id requires updating every `prerequisites`, `consequences` and `dependencies` reference to it.

## Adding an event

1. Open the epoch file in `src/data/epochs/`.
2. Add a `TechEventInput` record with a unique id, a date with a `precision` flag, a 300 to 600 word explanation, the mechanism, prerequisites and consequences by id, figures, a significance score with justification, domains and sources.
3. Run `npm run test` and `npm run validate`. The gates check word counts, id resolution, forbidden strings and schema shape.

## Adding a projection

1. Open the field file in `src/data/horizon/`.
2. Every field needs all five windows and all three branches. Add or edit the `Projection` record with a headline, a 200 to 400 word narrative, dependencies by event id, uncertainties, indicators and a confidence rating with justification.
3. Run the gates.

## Pull requests

Use Conventional Commits. Keep pull requests focused. CI runs lint, typecheck, unit tests, build, end-to-end tests and Lighthouse; all must pass.
