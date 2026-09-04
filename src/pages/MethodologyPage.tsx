import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('ATLAS // METHODOLOGY', 'Methodology');
  return (
    <>
      <SectionHeader as="h1" index="//" code="METHODOLOGY" title="Methodology" accent="cyan" subtitle="How the forecasts are built, where they fail, and a standing invitation to disagree." />
    </>
  );
}
