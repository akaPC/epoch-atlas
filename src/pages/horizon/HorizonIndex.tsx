import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('HORIZON // 2026 TO 2126', 'The Horizon');
  return (
    <>
      <SectionHeader as="h1" index="03" code="HORIZON" title="The Horizon" accent="red" subtitle="Fourteen fields projected across five windows and three branches to 2126." />
    </>
  );
}
