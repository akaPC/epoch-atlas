import { useSearchParams } from 'react-router-dom';
import { SectionHeader } from '@/components/SectionHeader';
import { RecordNav } from '@/components/RecordNav';
import { DependencyGraph } from '@/components/charts/DependencyGraph';
import { useFocusLabel } from '@/app/state/FocusContext';
import { epochsSorted, eventsSorted } from '@/lib/record';

export default function GraphPage() {
  useFocusLabel('01 // DEPENDENCY GRAPH', 'Dependency graph');
  const [params] = useSearchParams();
  const initial = params.get('select') ?? undefined;
  const edges = eventsSorted.reduce((n, e) => n + e.prerequisites.length, 0);
  const roots = eventsSorted.filter((e) => e.prerequisites.length === 0).length;
  return (
    <>
      <RecordNav />
      <SectionHeader
        as="h1"
        index="01"
        code="DEPENDENCY GRAPH"
        title="How events enabled one another"
        subtitle={`Every prerequisite link in the atlas drawn as an edge: ${edges} edges across ${eventsSorted.length} events, with ${roots} roots that depend on nothing earlier in the record. Nodes are pinned horizontally to the hybrid time scale, so the graph reads left to right from the Lomekwian flakes to the present.`}
      />
      <DependencyGraph epochs={epochsSorted} events={eventsSorted} initialSelected={initial} />
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="panel brackets p-4">
          <div className="index-label mb-2">READING THE GRAPH</div>
          <p className="text-sm text-secondary">
            Node size is significance. Node colour runs from cyan in the deep past through amber to red in the present, the same gradient the three movements use. Edges point from prerequisite to dependent. A selected node lights its full ancestry in amber and its full descendancy in red.
          </p>
        </div>
        <div className="panel brackets p-4">
          <div className="index-label mb-2">WHAT COUNTS AS A DEPENDENCY</div>
          <p className="text-sm text-secondary">
            A prerequisite is an earlier event without which the later one could not have happened in the form it did: a physical input, a technique, a body of knowledge, or an institution. Links of loose inspiration are excluded. Where the record is contested, the event page says so and the link carries that caveat.
          </p>
        </div>
        <div className="panel brackets p-4">
          <div className="index-label mb-2">LIMITS OF THE VIEW</div>
          <p className="text-sm text-secondary">
            The graph is a curated subset of history, not a census. Missing edges usually mean the atlas has not yet recorded the intermediate event rather than that none existed. The dependency counts are therefore lower bounds.
          </p>
        </div>
      </section>
    </>
  );
}
