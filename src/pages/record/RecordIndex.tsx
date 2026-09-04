import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('RECORD // TIMELINE', 'The Record');
  return (
    <>
      <SectionHeader as="h1" index="01" code="RECORD" title="The Record" accent="cyan" subtitle="Thirteen epochs of human technique, from the first flaked stone to the intelligence era." />
    </>
  );
}
