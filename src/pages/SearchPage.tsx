import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('ATLAS // SEARCH', 'Search');
  return (
    <>
      <SectionHeader as="h1" index="//" code="SEARCH" title="Search" accent="cyan" subtitle="Full-text search across events, epochs, forecast models and projections." />
    </>
  );
}
