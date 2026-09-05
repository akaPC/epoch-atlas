import type { Source } from '@/data/schema';

export function SourceList({ sources, compact = false }: { sources: Source[]; compact?: boolean }) {
  if (sources.length === 0) {
    return <p className="font-mono text-[0.7rem] tracking-[0.1em] text-amber">NO SOURCES RECORDED. LISTED IN docs/CITATION_GAPS.md.</p>;
  }
  return (
    <ol className={`space-y-2 ${compact ? 'text-xs' : 'text-sm'} text-secondary`}>
      {sources.map((s, i) => (
        <li key={`${s.title}-${i}`} className="flex gap-3">
          <span className="font-mono text-[0.68rem] text-cyan">{String(i + 1).padStart(2, '0')}</span>
          <span>
            {s.author}. <span className="text-primary">{s.title}</span>. {s.publisher}, {s.year}.
            {s.url && (
              <>
                {' '}
                <a href={s.url} className="text-cyan underline underline-offset-2" target="_blank" rel="noreferrer noopener">
                  link
                </a>
              </>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
