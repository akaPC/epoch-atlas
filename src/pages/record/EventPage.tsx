import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('RECORD // EVENT', 'Event');
  return (
    <>
      <SectionHeader as="h1" index="01" code="EVENT" title="Event" accent="cyan" subtitle="Explanation, mechanism, prerequisites, consequences, figures, significance and sources." />
    </>
  );
}
