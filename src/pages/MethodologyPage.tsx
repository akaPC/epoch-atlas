import { SectionHeader } from '@/components/SectionHeader';
import { useFocusLabel } from '@/app/state/FocusContext';
import Methodology from '@/content/methodology.mdx';

export default function MethodologyPage() {
  useFocusLabel('ATLAS // METHODOLOGY', 'Methodology');
  return (
    <>
      <SectionHeader as="h1" index="//" code="METHODOLOGY" title="How the atlas is built, and where it fails" subtitle="The forecasting approach, its known failure modes, the historical track record of forecasting, and a standing invitation to disagree." />
      <article className="panel brackets p-5 sm:p-8" data-testid="methodology">
        <div className="prose-atlas">
          <Methodology />
        </div>
      </article>
    </>
  );
}
