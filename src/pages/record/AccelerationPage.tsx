import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { RecordNav } from '@/components/RecordNav';
import { Stat } from '@/components/Stat';
import { AccelerationChart, computeIntervals } from '@/components/charts/AccelerationChart';
import { useFocusLabel } from '@/app/state/FocusContext';
import { eventsSorted, epochsSorted } from '@/lib/record';
import { formatInterval, formatYear, pad2 } from '@/lib/format';

function median(xs: number[]): number {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid]! : (s[mid - 1]! + s[mid]!) / 2;
}

export default function AccelerationPage() {
  useFocusLabel('01 // ACCELERATION', 'Acceleration');
  const [threshold, setThreshold] = useState(8);
  const points = useMemo(() => computeIntervals(eventsSorted, threshold), [threshold]);

  const bands = useMemo(() => {
    const cut = [
      { label: 'Before 10,000 BCE', test: (y: number) => y < -10000 },
      { label: '10,000 BCE to 500 CE', test: (y: number) => y >= -10000 && y < 500 },
      { label: '500 to 1760', test: (y: number) => y >= 500 && y < 1760 },
      { label: '1760 to 1914', test: (y: number) => y >= 1760 && y < 1914 },
      { label: '1914 to 1971', test: (y: number) => y >= 1914 && y < 1971 },
      { label: '1971 to 2012', test: (y: number) => y >= 1971 && y < 2012 },
      { label: '2012 to 2026', test: (y: number) => y >= 2012 },
    ];
    return cut.map((c) => {
      const ps = points.filter((p) => c.test(p.year));
      return { label: c.label, n: ps.length, median: median(ps.map((p) => p.interval)) };
    });
  }, [points]);

  const perEpoch = useMemo(
    () =>
      epochsSorted.map((ep) => {
        const n = eventsSorted.filter((e) => e.epochId === ep.id && e.significance >= threshold).length;
        const span = ep.endYear - ep.startYear;
        return { ep, n, span, rate: n / Math.max(1, span) };
      }),
    [threshold],
  );

  const last = points[points.length - 1];
  const first = points[0];

  return (
    <>
      <RecordNav />
      <SectionHeader
        as="h1"
        index="01"
        code="ACCELERATION"
        title="The innovation cycle compresses"
        subtitle="Computed from the atlas itself: take every event at or above a significance threshold, sort by date, and measure the gap to the previous one. On a log-log view the gaps fall by roughly an order of magnitude every few epochs. This is the empirical basis for the compression argument that The Threshold builds on, and it carries the same selection biases as the record."
        actions={
          <div className="flex items-center gap-2" role="group" aria-label="Significance threshold">
            <span className="font-mono text-[0.62rem] tracking-[0.12em] text-secondary">THRESHOLD</span>
            {[7, 8, 9, 10].map((t) => (
              <button key={t} type="button" className="btn" aria-pressed={threshold === t} onClick={() => setThreshold(t)}>
                {t}+
              </button>
            ))}
          </div>
        }
      />

      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label={`EVENTS AT ${threshold}+`} value={points.length + 1} />
        <Stat label="FIRST GAP" value={first ? formatInterval(first.interval) : '0'} note={first ? `${first.from.title} to ${first.to.title}` : ''} />
        <Stat label="LATEST GAP" value={last ? formatInterval(last.interval) : '0'} note={last ? `${last.from.title} to ${last.to.title}` : ''} accent="amber" />
        <Stat label="COMPRESSION" value={first && last ? `${Math.round(Math.log10(first.interval / last.interval))} OOM` : '0'} note="orders of magnitude, first gap to latest gap" accent="red" />
      </div>

      <div className="panel brackets p-3 sm:p-4" data-testid="acceleration-chart">
        <AccelerationChart points={points} />
      </div>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="panel brackets p-4">
          <div className="index-label mb-3">MEDIAN GAP BY PERIOD</div>
          <table className="w-full text-sm">
            <thead>
              <tr className="font-mono text-[0.62rem] tracking-[0.12em] text-secondary">
                <th className="py-1 text-left font-normal">PERIOD</th>
                <th className="py-1 text-right font-normal">GAPS</th>
                <th className="py-1 text-right font-normal">MEDIAN GAP</th>
              </tr>
            </thead>
            <tbody>
              {bands.map((b) => (
                <tr key={b.label} className="border-t border-hairline">
                  <td className="py-1.5 text-primary">{b.label}</td>
                  <td className="py-1.5 text-right font-mono text-secondary">{b.n}</td>
                  <td className="py-1.5 text-right font-mono text-amber">{b.n ? formatInterval(b.median) : 'none'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="panel brackets p-4">
          <div className="index-label mb-3">HIGH-SIGNIFICANCE EVENTS PER EPOCH</div>
          <ul className="space-y-1.5 text-sm">
            {perEpoch.map(({ ep, n, span }) => (
              <li key={ep.id} className="flex items-center gap-3">
                <Link to={`/record/epochs/${ep.id}`} className="w-40 shrink-0 truncate font-mono text-[0.66rem] tracking-[0.1em] text-secondary hover:text-cyan">
                  {pad2(ep.index)} {ep.code}
                </Link>
                <span className="h-2 bg-cyan" style={{ width: `${Math.min(100, (n / Math.max(1, ...perEpoch.map((p) => p.n))) * 100)}%` }} aria-hidden="true" />
                <span className="font-mono text-[0.66rem] text-primary">{n}</span>
                <span className="font-mono text-[0.62rem] text-secondary">in {formatInterval(span)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6 panel brackets brackets--amber p-5">
        <div className="index-label index-label--amber">CAVEATS</div>
        <ul className="mt-2 space-y-2 text-sm text-secondary">
          <li>Recency bias: recent events are better documented and more finely divided, which shortens recent gaps by construction. The threshold control lets you test how much the pattern depends on the cutoff.</li>
          <li>Significance scores are editorial judgments with written justifications, not measurements. They are consistent within the atlas but not calibrated against any external scale.</li>
          <li>Dates for the deep past carry precision flags of century, millennium or estimated; a gap of {formatInterval(700000)} between {formatYear(-3300000)} and {formatYear(-2600000)} is itself uncertain by hundreds of thousands of years.</li>
          <li>Even with those corrections, the compression across the last three centuries is robust to every threshold, and it is the pattern every forecast model in The Threshold has to explain or explain away.</li>
        </ul>
      </section>
    </>
  );
}
