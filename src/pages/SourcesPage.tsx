import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('ATLAS // SOURCES', 'Sources');
  return (
    <>
      <SectionHeader as="h1" index="//" code="SOURCES" title="Sources" accent="cyan" subtitle="Every citation in the atlas, deduplicated, with back-links to the records that cite it." />
    </>
  );
}
