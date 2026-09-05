import MiniSearch, { type SearchResult } from 'minisearch';

export interface SearchHit extends SearchResult {
  kind: string;
  title: string;
  subtitle: string;
  route: string;
}

let cached: Promise<MiniSearch> | null = null;

/** Load the prebuilt index (built by scripts/build-search-index.ts) once per session. */
export function loadSearchIndex(): Promise<MiniSearch> {
  if (!cached) {
    cached = fetch(`${import.meta.env.BASE_URL}search-index.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`search index ${r.status}`);
        return r.text();
      })
      .then((json) =>
        MiniSearch.loadJSON(json, {
          fields: ['title', 'subtitle', 'body', 'tags'],
          storeFields: ['kind', 'title', 'subtitle', 'route'],
          searchOptions: { boost: { title: 4, subtitle: 2, tags: 2 }, fuzzy: 0.2, prefix: true },
        }),
      );
  }
  return cached;
}

export function runSearch(ms: MiniSearch, query: string, limit = 40): SearchHit[] {
  if (!query.trim()) return [];
  return ms.search(query).slice(0, limit) as SearchHit[];
}
