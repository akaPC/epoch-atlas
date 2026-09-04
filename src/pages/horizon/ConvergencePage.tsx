import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('HORIZON // CONVERGENCE', 'Convergence');
  return (
    <>
      <SectionHeader as="h1" index="03" code="CONVERGENCE" title="Convergence" accent="red" subtitle="Where fields collide, and the decade each collision is expected under each scenario." />
    </>
  );
}
