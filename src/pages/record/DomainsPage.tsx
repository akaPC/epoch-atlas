import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';

export default function Page() {
  useFocusLabel('RECORD // DOMAIN LENSES', 'Domain lenses');
  return (
    <>
      <SectionHeader as="h1" index="01" code="DOMAINS" title="Domain lenses" accent="cyan" subtitle="Eleven lenses on the same record: energy, materials, information, computation and more." />
    </>
  );
}
