import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('THRESHOLD // FORECAST', 'The Threshold');
  return (
    <>
      <SectionHeader as="h1" index="02" code="THRESHOLD" title="The Threshold" accent="amber" subtitle="Eight forecast models, an editable ensemble, three takeoff scenarios and the indicators that would move them." />
    </>
  );
}
