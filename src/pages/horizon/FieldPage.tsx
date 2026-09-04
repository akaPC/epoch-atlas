import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('HORIZON // FIELD', 'Field');
  return (
    <>
      <SectionHeader as="h1" index="03" code="FIELD" title="Field" accent="red" subtitle="Projections, fan chart, physical limits and dependency chains for one field." />
    </>
  );
}
