# Architecture

## Stack

- Vite 6, React 18, TypeScript (strict, `noUncheckedIndexedAccess`).
- Tailwind CSS 3.4 on a custom token layer (`src/styles/tokens.css`), no component library.
- D3 7 for the master timeline, dependency graph, acceleration chart, ensemble chart, model ranges and fan charts. No chart wrapper library.
- Zod schemas for every record type. MDX (via `@mdx-js/rollup`) for long-form prose.
- MiniSearch for client-side full-text search, indexed at build time.
- Vitest for unit and quality-gate tests. Playwright for end-to-end and accessibility (axe-core). Lighthouse CI.
- `vite-plugin-pwa` for offline caching. Self-hosted fonts via `@fontsource/*`.
- Static output deployed to GitHub Pages by GitHub Actions. No backend, no database, no API keys.

## Folder layout

```
src/
  app/            App shell: router, layout (rail, status bar), global state (scenario, focus, search)
  components/     Hand-built UI: cards, headers, chips, meta rows, charts/
  content/        MDX prose (methodology, about)
  data/
    schema.ts     Zod contract for all record types, domain and scenario constants, forbidden patterns
    epochs/       13 epoch files, each exporting { epoch, events }
    forecasts/    models, takeoff scenarios, definitions, leading indicators
    horizon/      14 field files, each exporting { field }, plus convergences
    generated/    stats.json written by the validator (build input for the home page)
    index.ts      Aggregator that normalizes and re-exports everything
  lib/            Pure helpers: formatting, record lookups and graph traversal, ensemble math, sources, search
  pages/          Route components for the three movements and the reference pages
  styles/         Tokens and global CSS
scripts/          Build-time validation, search-index build, per-file authoring checkers
tests/unit        Schema and quality-gate tests
tests/e2e         Route smoke, feature, and axe tests
tests/screenshots Screenshot and icon generation
docs/             Architecture, methodology, decisions, citation gaps, event id registry, screenshots
```

## Data flow

1. Content authors write typed records in `src/data/**`. Each file is checked while authoring with `scripts/check-epoch.ts`, `scripts/check-field.ts` or `scripts/check-forecasts.ts`.
2. `src/data/index.ts` aggregates the files and applies schema defaults.
3. `npm run validate` (`scripts/validate-data.ts`) parses every record with its Zod schema, fails the build on any invalid record, and writes `src/data/generated/stats.json`. `scripts/build-search-index.ts` then writes `public/search-index.json`.
4. Vite builds the app. Route modules are lazy-loaded so the home page does not ship the data bundle. The data bundle is one chunk shared by the Record, Threshold and Horizon routes.
5. Pages read from `src/data` through `src/lib/*` helpers. The ensemble is computed in the browser from model percentiles and the user's weights. The scenario selector lives in React context and is mirrored to `localStorage`.
6. The service worker precaches every asset including the search index, so the atlas works offline after first load.

## Build pipeline (CI)

On every push to `main`: `npm ci`, install Chromium, `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`, `npm run e2e` (against `vite preview`), `lhci autorun`, upload `dist/` as a Pages artifact, deploy. `dist/404.html` is a copy of `index.html` so deep links resolve on GitHub Pages.

## Design system

Tokens in `src/styles/tokens.css` and mapped in `tailwind.config.ts`. Backgrounds `#05070a`, `#0a0e14`, `#10161f`, `#161e2a`. Text `#e6edf3`, `#9aa7b4`, `#5c6875`. Accents: cyan `#22d3ee` (Record, interactive, primary data), amber `#f5b625` (Threshold, warnings, uncertainty), red `#ff4d4f` (Horizon high-risk, critical). Hairlines at `rgba(34,211,238,0.08)`. Corner brackets on cards, scanlines on hero panels, monospaced index labels on section headers. Barlow Condensed for display, IBM Plex Sans for body, JetBrains Mono for data. `prefers-reduced-motion` is respected globally.
