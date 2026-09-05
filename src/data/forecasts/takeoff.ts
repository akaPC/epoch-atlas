import type { TakeoffScenario } from '../schema';

/**
 * Three takeoff scenarios. The Horizon branches are pinned to these:
 * slow = Baseline branch, moderate = Accelerated branch, fast = Discontinuous branch.
 * Anchor years used across The Horizon (ensemble medians conditioned on each scenario):
 *   slow:     AGI about 2038, ASI about 2058
 *   moderate: AGI about 2032, ASI about 2040
 *   fast:     AGI about 2029, ASI about 2031
 */
export const takeoffScenarios: TakeoffScenario[] = [
  {
    id: 'slow',
    name: 'Slow takeoff',
    branchLabel: 'Baseline',
    yearsAgiToAsi: { p25: 12, p50: 20, p75: 35 },
    probability: 0.35,
    summary:
      'AGI arrives, but the path from human-level systems to systems that decisively exceed the best human teams across all cognitive domains takes decades, gated by hardware, energy, verification and institutions.',
    narrative: `In the slow scenario the arrival of AGI is real but undramatic. Systems that can do most cognitive work at human level diffuse the way electricity did: over decades, unevenly, and with the largest gains appearing in productivity statistics only after organizations reshape themselves around the new input. Automated AI research helps, but it is bottlenecked by the same things that bottleneck human research: experiments take wall-clock time, frontier training runs are capital projects measured in gigawatts and years, and the physical world (chips, fabs, power plants, permits) does not compress on a software schedule.

Alignment and verification impose a tax that grows with capability. Deploying a system that can act autonomously in high-stakes settings requires evaluations, audits and liability regimes that take years to build, and each capability step re-opens them. Geopolitical coordination on compute and export controls slows the fastest actors without stopping the slowest. Recursive self-improvement produces steady rather than explosive gains because each generation of improvement is smaller in relative terms as the easy algorithmic wins are exhausted and the remaining gains require new hardware.

The result is a world that looks, decade by decade, like a very strong version of the 1990s to 2020s: dramatic in retrospect, incremental in the moment. ASI, defined as systems that outperform the best human teams across every domain including strategy and science, arrives roughly a generation after AGI. Institutions have time to adapt, which is the scenario's greatest strength, and complacency is its greatest risk.`,
    mechanisms: [
      {
        name: 'Hardware and energy bottlenecks',
        description:
          'Frontier training and inference are constrained by fab capacity, high-bandwidth memory, power and cooling. Each order of magnitude of compute requires physical build-out on multi-year timelines, so algorithmic progress cannot be converted into capability faster than the physical plant grows.',
      },
      {
        name: 'Diminishing returns on automated research',
        description:
          'AI systems accelerate research but the marginal value of an additional automated researcher falls as experiments, data collection and real-world validation dominate the critical path.',
      },
      {
        name: 'Alignment and verification tax',
        description:
          'Every increase in autonomy requires proportionally more evaluation, red-teaming and interpretability work before deployment in consequential settings, and society demands that assurance.',
      },
      {
        name: 'Institutional and regulatory drag',
        description:
          'Licensing, liability, procurement, labor agreements and professional standards adapt slowly, so capability outruns deployment by years.',
      },
      {
        name: 'Geopolitical coordination',
        description:
          'Export controls, compute reporting and international agreements shape and slow the diffusion of frontier capability.',
      },
    ],
    sources: [
      {
        author: 'Christiano, P.',
        title: 'Takeoff speeds',
        publisher: 'AI Alignment Forum',
        year: 2018,
        url: 'https://www.alignmentforum.org/posts/AfGILX9HtMTSHnJ3H/takeoff-speeds',
      },
      {
        author: 'Davidson, T.',
        title: 'What a compute-centric framework says about takeoff speeds',
        publisher: 'Open Philanthropy',
        year: 2023,
        url: 'https://www.openphilanthropy.org/research/what-a-compute-centric-framework-says-about-takeoff-speeds/',
      },
      {
        author: 'Erdil, E. and Besiroglu, T.',
        title: 'Explosive growth from AI automation: A review of the arguments',
        publisher: 'arXiv',
        year: 2023,
        url: 'https://arxiv.org/abs/2309.11690',
      },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'moderate',
    name: 'Moderate takeoff',
    branchLabel: 'Accelerated',
    yearsAgiToAsi: { p25: 4, p50: 7, p75: 12 },
    probability: 0.45,
    summary:
      'AGI to ASI in roughly a decade. Automated AI research compounds meaningfully, but hardware build-out and safety gating keep the transition on a timescale institutions can partly track.',
    narrative: `The moderate scenario is the ensemble's central case. AGI-level systems appear in the early 2030s and are immediately put to work on the thing they are best positioned to improve: AI research itself. Algorithmic efficiency gains, which historically halved the compute needed for a given capability roughly every year, speed up as thousands of automated researchers run experiments in parallel. But the compounding is bounded. Large training runs still take months. Chips still come from a handful of fabs. Power still comes from grids that take years to expand. So progress runs several times faster than the 2020s rather than hundreds of times faster.

Over roughly seven years, capability climbs from human-level to clearly superhuman in science, engineering and strategy. Society notices. Governments condition deployment on evaluations and, in the leading jurisdictions, on compute reporting. Labs adopt staged release. Some of the safety tax is paid willingly because the systems themselves help pay it: interpretability and verification tools improve alongside capability. Economic effects become visible in the mid-2030s as whole categories of knowledge work reorganize, and physical-world effects follow as robotics catches up in the late 2030s.

This scenario is uncomfortable because it is fast enough to strain institutions but slow enough that many actors believe they can keep up. It is the branch on which most of The Horizon's accelerated projections rest.`,
    mechanisms: [
      {
        name: 'Automated AI research',
        description:
          'AGI-level systems run most of the experimental loop for the next generation, raising the pace of algorithmic progress by a factor of several while remaining gated by training run duration.',
      },
      {
        name: 'Hardware build-out on a compressed but physical schedule',
        description:
          'Compute grows through multi-gigawatt campuses, advanced packaging and new fabs, roughly doubling effective capacity every year or so rather than every few months.',
      },
      {
        name: 'Partially automated alignment work',
        description:
          'AI-assisted interpretability, evaluations and formal verification reduce but do not eliminate the safety tax, allowing staged deployment.',
      },
      {
        name: 'Competitive pressure with coordination',
        description:
          'A small number of frontier actors race under export controls and reporting requirements, which slows the fastest actor modestly and channels rather than halts the transition.',
      },
    ],
    sources: [
      {
        author: 'Davidson, T.',
        title: 'What a compute-centric framework says about takeoff speeds',
        publisher: 'Open Philanthropy',
        year: 2023,
        url: 'https://www.openphilanthropy.org/research/what-a-compute-centric-framework-says-about-takeoff-speeds/',
      },
      {
        author: 'Ho, A. et al.',
        title: 'Algorithmic progress in language models',
        publisher: 'arXiv',
        year: 2024,
        url: 'https://arxiv.org/abs/2403.05812',
      },
      {
        author: 'Sevilla, J. et al.',
        title: 'Compute Trends Across Three Eras of Machine Learning',
        publisher: 'International Joint Conference on Neural Networks (IJCNN)',
        year: 2022,
        url: 'https://arxiv.org/abs/2202.05924',
      },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'fast',
    name: 'Fast takeoff',
    branchLabel: 'Discontinuous',
    yearsAgiToAsi: { p25: 0.5, p50: 1.5, p75: 3 },
    probability: 0.2,
    summary:
      'An intelligence explosion. Once systems can fully automate AI research, capability compounds within months, outrunning hardware constraints through algorithmic gains and outrunning institutions entirely.',
    narrative: `The fast scenario is the one Good, Vinge and Kurzweil described and that a significant minority of researchers still consider plausible. Its engine is a software-only feedback loop. If an AGI-level system can do the work of the best AI researchers, and if the frontier at that moment still contains large algorithmic inefficiencies, then the system can improve its successor faster than humans could, and the successor can do the same. Hardware need not grow: the loop harvests efficiency from existing compute, the way a decade of algorithmic progress in the 2010s and 2020s reduced the compute needed for a fixed capability by orders of magnitude.

Under this scenario the gap between AGI and ASI is measured in months to a few years. Institutions cannot track it. Evaluations lag the systems they are meant to evaluate. Whether the outcome is good or catastrophic depends almost entirely on what the leading developers did before the loop closed: how well their systems were aligned, how carefully access was controlled, and whether the loop was run inside a secure facility or leaked.

The Horizon's discontinuous branches assume this loop closes around the end of the 2020s and that the world after it is shaped primarily by decisions made by, or delegated to, superhuman systems. The physical world still imposes limits: fabs, power plants and biology change on their own clocks, and even a superintelligence must respect thermodynamics. But the direction and rate of change across every field become functions of a single variable, which is what makes the branch discontinuous.`,
    mechanisms: [
      {
        name: 'Recursive self-improvement',
        description:
          'AI systems improve the algorithms, data pipelines and training procedures of their successors with minimal human input, compounding on a timescale of weeks.',
      },
      {
        name: 'Large software overhang',
        description:
          'Existing compute is used far below its theoretical capability; the loop harvests that inefficiency without waiting for hardware.',
      },
      {
        name: 'Institutional lag',
        description:
          'Evaluations, regulation and coordination operate on quarterly to annual cycles and cannot keep pace, so the transition is governed by pre-existing decisions rather than responsive ones.',
      },
      {
        name: 'Concentration of capability',
        description:
          'The first actor to close the loop gains a compounding advantage, which makes security, access control and alignment before the loop closes decisive.',
      },
    ],
    sources: [
      {
        author: 'Good, I. J.',
        title: 'Speculations Concerning the First Ultraintelligent Machine',
        publisher: 'Advances in Computers, vol. 6',
        year: 1965,
        url: 'https://doi.org/10.1016/S0065-2458(08)60418-0',
      },
      {
        author: 'Vinge, V.',
        title: 'The Coming Technological Singularity: How to Survive in the Post-Human Era',
        publisher: 'NASA Lewis Research Center, Vision-21 Symposium',
        year: 1993,
      },
      {
        author: 'Bostrom, N.',
        title: 'Superintelligence: Paths, Dangers, Strategies',
        publisher: 'Oxford University Press',
        year: 2014,
      },
      {
        author: 'Kokotajlo, D. et al.',
        title: 'AI 2027',
        publisher: 'AI Futures Project',
        year: 2025,
        url: 'https://ai-2027.com/',
      },
    ],
    lastReviewed: '2026-09-04',
  },
];
