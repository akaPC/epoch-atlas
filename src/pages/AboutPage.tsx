import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { Stat } from '@/components/Stat';
import { useFocusLabel } from '@/app/state/FocusContext';
import About from '@/content/about.mdx';
import stats from '@/data/generated/stats.json';

export default function AboutPage() {
  useFocusLabel('ATLAS // ABOUT', 'About');
  return (
    <>
      <SectionHeader as="h1" index="//" code="ABOUT" title="About Epoch Atlas" subtitle="What it is, how it is built, and how to contribute." />
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="EVENTS" value={stats.events} />
        <Stat label="PROJECTIONS" value={stats.projections} accent="red" />
        <Stat label="DISTINCT SOURCES" value={stats.sources} accent="amber" />
        <Stat label="BUILD" value={__BUILD_HASH__} note={__BUILD_TIME__.slice(0, 10)} />
      </div>
      <article className="panel brackets p-5 sm:p-8">
        <div className="prose-atlas">
          <About />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href="https://github.com/akaPC/epoch-atlas" className="btn" target="_blank" rel="noreferrer noopener">
            Repository
          </a>
          <Link to="/methodology" className="btn">
            Methodology
          </Link>
          <Link to="/sources" className="btn">
            Sources
          </Link>
        </div>
      </article>
    </>
  );
}
