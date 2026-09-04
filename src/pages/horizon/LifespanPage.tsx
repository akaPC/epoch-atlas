import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('HORIZON // LIFESPAN', 'You in 2076');
  return (
    <>
      <SectionHeader as="h1" index="03" code="LIFESPAN" title="You in 2076" accent="red" subtitle="Enter a birth year and see which projected changes fall inside a plausible lifespan." />
    </>
  );
}
