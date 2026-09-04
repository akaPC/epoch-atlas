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
