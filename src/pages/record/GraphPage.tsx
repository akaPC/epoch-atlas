import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('RECORD // DEPENDENCY GRAPH', 'Dependency graph');
  return (
    <>
      <SectionHeader as="h1" index="01" code="GRAPH" title="Dependency graph" accent="cyan" subtitle="How events enabled one another across three million years." />
    </>
  );
}
