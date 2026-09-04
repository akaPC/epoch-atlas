import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('RECORD // EPOCH', 'Epoch');
  return (
    <>
      <SectionHeader as="h1" index="01" code="EPOCH" title="Epoch" accent="cyan" subtitle="Thesis, enabling conditions, defining events and what changed for a person living through it." />
    </>
  );
}
