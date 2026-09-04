import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('RECORD // ACCELERATION', 'Acceleration');
  return (
    <>
      <SectionHeader as="h1" index="01" code="ACCELERATION" title="Acceleration" accent="cyan" subtitle="The interval between high-significance events, computed from the atlas itself." />
    </>
  );
}
