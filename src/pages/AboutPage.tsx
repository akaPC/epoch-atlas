import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('ATLAS // ABOUT', 'About');
  return (
    <>
      <SectionHeader as="h1" index="//" code="ABOUT" title="About" accent="cyan" subtitle="What Epoch Atlas is, how it is built, and how to contribute." />
    </>
  );
}
