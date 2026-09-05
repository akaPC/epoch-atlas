import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { Stat } from '@/components/Stat';
import { useFocusLabel } from '@/app/state/FocusContext';
import { collectCitations } from '@/lib/sources';

export default function SourcesPage() {
  useFocusLabel('ATLAS // SOURCES', 'Sources');
  const citations = useMemo(() => collectCitations(), []);
  const [filter, setFilter] = useState('');
  const [letter, setLetter] = useState<string>('');
  const letters = useMemo(() => Array.from(new Set(citations.map((c) => c.source.author[0]?.toUpperCase() ?? '#'))).sort(), [citations]);
  const shown = citations.filter((c) => {
    if (letter && (c.source.author[0]?.toUpperCase() ?? '#') !== letter) return false;
    if (!filter) return true;
    const q = filter.toLowerCase();
    return `${c.source.author} ${c.source.title} ${c.source.publisher} ${c.source.year}`.toLowerCase().includes(q);
  });
  const withUrl = citations.filter((c) => c.source.url).length;
  const totalRefs = citations.reduce((n, c) => n + c.citedBy.length, 0);

  return (
    <>
      <SectionHeader as="h1" index="//" code="SOURCES" title="Every citation in the atlas" subtitle="Deduplicated by author, title and year, sorted by author, with back-links to every record that cites it. The atlas prefers primary literature, standard references and major institutional publications, and never invents a citation; records with weak or missing sources are listed in the repository's citation gaps file." />
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="DISTINCT SOURCES" value={citations.length} />
        <Stat label="CITATIONS" value={totalRefs} note="record to source links" />
        <Stat label="WITH LINK" value={withUrl} note="DOI or stable URL" accent="amber" />
        <Stat label="SHOWN" value={shown.length} accent="red" />
      </div>
      <div className="panel brackets mb-4 p-4">
        <label htmlFor="source-filter" className="index-label block pb-2">FILTER</label>
        <input id="source-filter" type="search" value={filter} onChange={(e) => setFilter(e.target.value)} className="field-input w-full" autoComplete="off" data-testid="source-filter" />
        <div className="mt-3 flex flex-wrap gap-1" role="group" aria-label="Filter by first letter">
          <button type="button" className="chip" aria-pressed={letter === ''} onClick={() => setLetter('')}>
            All
          </button>
          {letters.map((l) => (
            <button key={l} type="button" className="chip" aria-pressed={letter === l} onClick={() => setLetter(l)}>
              {l}
            </button>
          ))}
        </div>
      </div>
      <ol className="space-y-2" data-testid="source-list">
        {shown.map((c, i) => (
          <li key={c.key} className="panel brackets p-3" data-testid="source-item">
            <div className="flex gap-3">
              <span className="font-mono text-[0.66rem] text-cyan">{String(i + 1).padStart(3, '0')}</span>
              <div className="min-w-0 flex-1">
                <div className="text-sm text-primary">
                  {c.source.author}. <span className="italic">{c.source.title}</span>. {c.source.publisher}, {c.source.year}.
                  {c.source.url && (
                    <>
                      {' '}
                      <a href={c.source.url} className="text-cyan underline underline-offset-2" target="_blank" rel="noreferrer noopener">
                        link
                      </a>
                    </>
                  )}
                </div>
                <details className="mt-1">
                  <summary className="cursor-pointer list-none font-mono text-[0.62rem] tracking-[0.12em] text-secondary">
                    CITED BY {c.citedBy.length} RECORD{c.citedBy.length === 1 ? '' : 'S'}
                  </summary>
                  <ul className="mt-1 flex flex-wrap gap-1">
                    {c.citedBy.map((b) => (
                      <li key={b.route + b.label}>
                        <Link to={b.route} className="chip">
                          {b.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
