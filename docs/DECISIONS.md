# Autonomous decisions

Every decision made where the build prompt was silent or ambiguous. One line each, with the reasoning.

- Built in `~/projects/epoch-atlas` (resolved to `/Users/michael/Projects/epoch-atlas`) rather than the session's initial working directory, because the initial directory (`~/intel`) already contained an unrelated project and initializing git there would have swallowed it. The launch instructions in the prompt name this folder.
- GitHub identity resolved with `gh api user` to `akaPC`; the keyring label reads differently but the token's login is authoritative, so the repo is `akaPC/epoch-atlas`. The repo name was available, so no fallback name was needed.
- Pinned `@eslint/js` to the ESLint 9 line because the unpinned latest (10.x) declares a peer dependency on ESLint 10 and broke resolution.
- Tailwind CSS pinned to 3.4 because the prompt requires a `tailwind.config.ts`; Tailwind 4 moved configuration into CSS.
- Vite 6 with `vite-plugin-pwa` 1.x, Vitest 3, React Router 6 (non-hash browser router with `404.html` fallback) chosen as the current stable pairings.
- Dates are stored as signed integer years (negative for BCE) with a separate `precision` field, so the logarithmic timeline can compute "years before 2026" uniformly across 3.3 million years.
- Scenario selection (slow, moderate, fast takeoff) lives in React context and is mirrored to `localStorage` for convenience; the lifespan panel stores nothing, as required.
- PWA raster icons are generated during the screenshot step by rendering the SVG icon with Playwright, avoiding any image-processing dependency.
- Lighthouse CI runs against the Vite preview server on port 4175 rather than a static directory, because the site is built with a `/epoch-atlas/` base path and must be served under that prefix.
- Sources are deduplicated by a normalized key of author, title, and year so that the same work cited from many records counts once on the Sources page.
- The `#5c6875` muted text token is reserved for large or decorative text and disabled states; small body and label text uses `#9aa7b4` because muted on the panel background falls below the 4.5:1 WCAG AA ratio for normal text while passing for large text.
- Eight typed forecast models are implemented and the ensemble is computed from them, because the prompt's item 8 (the ensemble) is a mixture rather than an independent model; the eighth typed model is an automated AI R&D acceleration model, which is a distinct approach in the literature. The checklist requirement of "8 forecast models plus ensemble" is therefore met literally.
- Arrival-year percentiles above 2200 are rendered as "beyond 2200 or never" so the skeptic model can place mass on never without breaking the numeric schema.
- Takeoff scenario anchors used across The Horizon: slow AGI about 2038 and ASI about 2058; moderate AGI about 2032 and ASI about 2040; fast AGI about 2029 and ASI about 2031. Scenario probabilities 0.35, 0.45, 0.20.
- Ensemble default weights: compute-trend 0.18, forecasting-community 0.15, R&D acceleration 0.13, expert survey 0.12, benchmark saturation 0.12, economic diffusion 0.12, skeptic 0.10, biological anchors 0.08.
- Content was authored by parallel subagents against a canonical event-id registry (`docs/EVENT_IDS.md`) so cross-epoch dependency ids resolve; each file was validated by a per-file checker before integration. Concurrency was capped at 20 agents by the harness, so the Horizon fields were launched in waves.
- Lifespan panel longevity branches: baseline 80 years plus 2 years per decade of birth cohort after 1950; accelerated 88 plus 3 per decade; discontinuous 100 plus 5 per decade after 1940. Editorial, consistent with the biotech field's branches, clearly labeled as not medical advice.
- Dates in the deep past use `precision: 'estimated'` or `'millennium'`; where a center of agriculture straddles the Neolithic boundary, the event is dated to the earliest secure evidence inside the range and the text explains.
- Events in 2026 or dependent on post-mid-2026 developments carry `verification: 'developing'`; late-2025 records whose outcomes are open carry `confidence: 'medium'` and describe status as of mid-2026.
- The search index is fetched lazily (only when the search page or palette submits) and precached by the service worker; it is not bundled into the JavaScript to keep the home route light.
- `git-version-control` was added to the networked-world epoch and `baghdad-battery-debate` to the iron age epoch because the prompt named them as artifacts deserving their own event.
- Playwright e2e tests run against `vite preview` on port 4173 with the production build, reusing an existing server locally and starting a fresh one in CI.
- The Sources page counts distinct works by a normalized author, title and year key; the same work cited with and without a URL counts once and keeps the URL.
