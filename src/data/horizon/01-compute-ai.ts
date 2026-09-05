import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'compute-ai',
  index: 1,
  name: 'Compute and AI',
  code: 'COMPUTE',
  summary: `Compute and AI is the field whose progress sets the tempo for every other field in this atlas. Since the transistor (1947) and the integrated circuit (1958), the cost of an arithmetic operation has fallen by roughly fifteen orders of magnitude, and since 2012 the compute used to train frontier machine learning systems has grown about four to five times per year. In September 2026 the frontier consists of large transformer models trained with reinforcement learning to reason over long chains of thought, deployed as agents that write code, browse, and operate software for hours at a time. The largest disclosed training runs are estimated in the range of 10^26 to 10^27 floating point operations, executed on clusters of hundreds of thousands of accelerators drawing hundreds of megawatts, with multi-gigawatt campuses under construction. Data centres consumed roughly 1.5 percent of world electricity in 2024 and the share is rising. Silicon hardware remains four to five orders of magnitude above the Landauer floor per irreversible bit operation, so there is physical headroom. The binding constraints of the next decade are fabs, memory, power, cooling, capital, export controls, and the ability to verify what autonomous systems do.`,
  indexDefinition: `The index scores civilisation's computing and machine cognition against a plausible Earth-bound ceiling, averaging three logarithmic axes: energy per irreversible bit operation relative to the Landauer floor (2026 silicon sits about 10^4 above it), total power devoted to computation relative to what Earth can supply and reject as heat without climate cost (about 5 x 10^10 watts today against a ceiling near 10^14), and the generality and speed of the best systems relative to human teams and to hardware speed limits. A score of 100 means reversible or near-Landauer hardware at planetary power, with superintelligent systems operating at physical speed limits. September 2026 scores about 10: far from the floor, small in power, expert-level only on bounded tasks.`,
  physicalLimits: [
    {
      name: 'Landauer limit',
      description: `Erasing one bit of information in a system at temperature T must dissipate at least kT ln 2 of energy as heat, about 2.9 x 10^-21 joules at 300 kelvin. This limits not computation as such but irreversible computation, which is what every conventional processor does when it overwrites a register. In 2026, a state-of-the-art accelerator spends roughly 10^-13 joules per 16-bit floating point operation, or about 10^-16 joules per underlying bit operation, which is four to five orders of magnitude above the floor. Reversible logic that recovers switching energy, or operation at cryogenic temperatures, can go below the room-temperature figure only by avoiding erasure or lowering T. The principle has been verified experimentally on single bits.`,
      sources: [
        { author: 'Landauer, R.', title: 'Irreversibility and Heat Generation in the Computing Process', publisher: 'IBM Journal of Research and Development', year: 1961, url: 'https://doi.org/10.1147/rd.53.0183' },
        { author: 'Bérut, A. et al.', title: 'Experimental verification of Landauer\'s principle linking information and thermodynamics', publisher: 'Nature', year: 2012, url: 'https://doi.org/10.1038/nature10872' },
      ],
    },
    {
      name: 'Speed of light and communication latency',
      description: `No signal travels faster than 299,792 kilometres per second in vacuum, and about 30 percent slower in optical fibre. Light covers about 6 centimetres in one cycle of a 5 gigahertz clock, crosses a one kilometre campus in about 3 microseconds, a continent in about 15 milliseconds, and half the planet in about 70 milliseconds in vacuum or 100 in fibre. This sets a floor on the coordination time of any distributed computation: a tightly coupled training run cannot span continents, a planet-scale mind cannot think as one process faster than tens of times per second, and a solar-system civilisation is a federation of minds separated by light-minutes. Latency, not bandwidth, is the constraint that survives every hardware improvement.`,
      sources: [
        { author: 'Einstein, A.', title: 'Zur Elektrodynamik bewegter Körper', publisher: 'Annalen der Physik', year: 1905, url: 'https://doi.org/10.1002/andp.19053221004' },
        { author: 'Hennessy, J. L. and Patterson, D. A.', title: 'Computer Architecture: A Quantitative Approach, 6th edition', publisher: 'Morgan Kaufmann', year: 2017 },
      ],
    },
    {
      name: 'Transistor scaling and lithography',
      description: `Silicon's lattice constant is 0.543 nanometres, and a field-effect transistor with a channel much shorter than about 5 nanometres leaks by quantum tunnelling regardless of how it is patterned. Dennard scaling, which let voltage fall with dimensions, ended around 2005, so clock rates have been flat for two decades and gains have come from parallelism and specialisation. High numerical aperture extreme ultraviolet lithography resolves features of about 8 nanometre half-pitch; the industry roadmap expects a few more nodes of gate-all-around and stacked transistors, then growth mainly through three-dimensional integration, new channel materials, and packaging. Cost per transistor is no longer falling reliably, which matters as much as physics for what gets built.`,
      sources: [
        { author: 'Dennard, R. H. et al.', title: 'Design of ion-implanted MOSFET\'s with very small physical dimensions', publisher: 'IEEE Journal of Solid-State Circuits', year: 1974, url: 'https://doi.org/10.1109/JSSC.1974.1050511' },
        { author: 'IEEE', title: 'International Roadmap for Devices and Systems (IRDS), 2023 edition', publisher: 'IEEE', year: 2023, url: 'https://irds.ieee.org/' },
        { author: 'Leiserson, C. E. et al.', title: 'There\'s plenty of room at the Top: What will drive computer performance after Moore\'s law?', publisher: 'Science', year: 2020, url: 'https://doi.org/10.1126/science.aam9744' },
      ],
    },
    {
      name: 'Bremermann and Margolus-Levitin bounds',
      description: `Quantum mechanics limits how fast a physical system can move between distinguishable states. The Margolus-Levitin theorem bounds the number of operations per second at 2E divided by pi times the reduced Planck constant, where E is the energy available to the computation; Bremermann's earlier estimate, using the mass-energy of the computer, gives about 1.36 x 10^50 bit-operations per second per kilogram. Lloyd's analysis of an ultimate one kilogram laptop reaches about 5 x 10^50 operations per second on 10^31 bits, but only by converting all its mass to energy at temperatures of 10^9 kelvin. These bounds are more than twenty orders of magnitude beyond any projection in this atlas; they define where the road ends, not where the century goes.`,
      sources: [
        { author: 'Bremermann, H. J.', title: 'Optimization through evolution and recombination', publisher: 'Self-Organizing Systems (Spartan Books)', year: 1962 },
        { author: 'Margolus, N. and Levitin, L. B.', title: 'The maximum speed of dynamical evolution', publisher: 'Physica D', year: 1998, url: 'https://doi.org/10.1016/S0167-2789(98)00054-2' },
        { author: 'Lloyd, S.', title: 'Ultimate physical limits to computation', publisher: 'Nature', year: 2000, url: 'https://doi.org/10.1038/35023282' },
      ],
    },
    {
      name: 'Energy availability and planetary heat rejection',
      description: `Every joule spent on computation ends as heat. Earth intercepts about 1.7 x 10^17 watts of sunlight, human civilisation uses about 2 x 10^13 watts of primary energy, and data centres drew about 415 terawatt-hours in 2024, roughly 5 x 10^10 watts on average. Waste heat is a small climate term today, but dissipating around 10^14 watts at the surface would add a forcing of about 0.2 watts per square metre, comparable to a substantial share of the current energy imbalance, and 10^15 watts would rival the entire greenhouse forcing. Beyond that budget, computation must move where heat can be radiated to space. Growth in generation, transmission, and cooling also runs on construction timescales of years, whatever algorithms do.`,
      sources: [
        { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
        { author: 'Flanner, M. G.', title: 'Integrating anthropogenic heat flux with global climate models', publisher: 'Geophysical Research Letters', year: 2009, url: 'https://doi.org/10.1029/2008GL036465' },
        { author: 'Loeb, N. G. et al.', title: 'Satellite and Ocean Data Reveal Marked Increase in Earth\'s Heating Rate', publisher: 'Geophysical Research Letters', year: 2021, url: 'https://doi.org/10.1029/2021GL093047' },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ */
    /* 2026-2030                                                     */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'compute-ai',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Scaling continues, agents mature, AGI stays out of reach before 2030',
      narrative: `In the Baseline branch the late 2020s are a period of rapid but recognisable progress. Frontier training runs grow from the 10^26 to 10^27 FLOP range of 2025 and 2026 toward 10^28 to 10^29 FLOP by 2030, consistent with Epoch AI's analysis that power, chip supply, data, and latency permit runs of roughly 2 x 10^29 FLOP by the end of the decade if investment holds. The clusters that run them are one to five gigawatt campuses, each drawing as much power as a large city, sited near gas plants, hydro, and nuclear units in the United States, the Gulf, and parts of Europe and Asia. Accelerators move to 2 nanometre class logic with high-bandwidth memory stacks of twelve to sixteen dies, and memory and interconnect, not arithmetic units, decide throughput.

On the ground, reasoning models and coding agents become standard tools in software, law, finance, customer service, and research. A typical knowledge worker delegates multi-hour tasks to agents that run in the background, and METR-style measurements of the length of tasks agents can complete autonomously keep doubling every four to seven months, reaching tasks that take skilled humans a full day or more by 2028. Yet the systems still fail in ways that require human review: long-horizon planning without supervision, novel physical experiments, and work whose success is hard to verify. Firms therefore restructure around human-checked agent output rather than replacing whole occupations. AI-assisted science produces real results in protein design, materials screening, and weather forecasting, but the bottleneck moves to laboratories and clinical trials that run on physical clocks.

Data centre electricity demand roughly doubles from the 2024 level of about 415 terawatt-hours, in line with the IEA base case of about 945 terawatt-hours in 2030. Export controls on advanced accelerators and lithography persist, fragmenting the supply chain into US-aligned and Chinese ecosystems that run two to three years apart on hardware and closer on algorithms. By 2030 the frontier is clearly beyond expert level on most bounded cognitive tests and clearly short of the general, autonomous competence that would count as AGI.`,
      dependencies: ['state-of-the-field-2026', 'hyperscale-ai-datacenters', 'o-series-reasoning-models', 'transformer-paper', 'integrated-circuit', 'transistor'],
      uncertainties: [
        'Investment could stall if revenue from agents does not cover the capital cost of gigawatt clusters, which would slow the compute growth rate below the trend assumed here.',
        'The rate at which agent task horizons double could slow as benchmarks saturate, or accelerate as reinforcement learning on real workflows improves, and the two cases differ by years in when general competence appears.',
        'Power connection queues, turbine supply, and local opposition could delay campuses by two or more years in the United States and Europe.',
        'Chinese domestic accelerators could close the hardware gap faster than export controls assume.',
      ],
      indicators: [
        'Epoch AI estimates of the largest training run each year: sustained growth above three times per year keeps the branch on track, below two times per year indicates a slowdown.',
        'The METR task-horizon doubling time measured on new model releases.',
        'Announced and energised data centre capacity in gigawatts, and the share of it actually connected to the grid on schedule.',
        'Inference prices per million tokens for frontier-level reasoning, which reveal whether efficiency gains are keeping pace with demand.',
      ],
      confidence: 'high',
      confidenceJustification: 'The hardware build-out through 2028 is already funded and permitted, and the compute and efficiency trends have held for a decade. The main uncertainty is how much general capability the added compute buys, which affects the tone of 2030 more than its physical facts.',
      sources: [
        { author: 'Sevilla, J. et al.', title: 'Can AI Scaling Continue Through 2030?', publisher: 'Epoch AI', year: 2024, url: 'https://epoch.ai/blog/can-ai-scaling-continue-through-2030' },
        { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
        { author: 'Kwa, T. et al.', title: 'Measuring AI Ability to Complete Long Tasks', publisher: 'arXiv', year: 2025, url: 'https://arxiv.org/abs/2503.14499' },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Automated AI research begins to compound; AGI is visibly close by 2030',
      narrative: `In the Accelerated branch the same physical build-out occurs, but algorithmic progress runs hotter because AI systems take over a growing share of AI research itself. By 2027 frontier laboratories report that most of their experimental code, evaluation harnesses, and a meaningful fraction of their research ideas are generated by their own models, and the effective compute available to the frontier grows by a factor of ten or more per year when algorithmic gains are combined with hardware growth. Ho and colleagues estimated that algorithmic progress in language models before 2024 halved the compute needed for a given capability roughly every eight months; in this branch that rate about doubles.

Agents cross a practical threshold around 2028: a small team with a large inference budget can run software projects, quantitative research, and back-office operations end to end with weekly rather than hourly human review. Task-length capability on METR's horizon benchmark reaches multi-week human-equivalent projects. Inference, not training, becomes the dominant compute cost as billions of agent sessions run daily, and laboratories buy or lease multi-gigawatt capacity years ahead. Accelerator supply remains the hard constraint: advanced packaging and high-bandwidth memory capacity are sold out two years forward, and the sector's capital expenditure exceeds half a trillion dollars per year.

Governments react with compute reporting thresholds, incident reporting, and evaluation requirements for models above set training budgets, and the first serious international discussions of compute governance take place because the pace is obvious. Alignment and control research receives large resources but also has more to do, since systems now act across many tools with real credentials. Scientific output shifts: AI systems propose, design, and interpret experiments in structural biology, catalysis, and semiconductor process development, while physical throughput lags behind. By 2030 the frontier is within one or two generations of AGI, defined as matching a strong human professional at most cognitive tasks with comparable reliability, and the anchor date of about 2032 looks conservative to insiders and reckless to critics.`,
      dependencies: ['state-of-the-field-2026', 'agentic-coding-tools', 'o-series-reasoning-models', 'gpt-3', 'alexnet', 'transistor'],
      uncertainties: [
        'It is unknown whether automating AI research produces compounding gains or whether experiment wall-clock time and compute for experiments dominate, which would make automated researchers only modestly more productive than human ones.',
        'The measured rate of algorithmic progress may be inflated by benchmark contamination and may not transfer to open-ended tasks.',
        'Reliability on long tasks may lag raw capability, keeping humans in the loop for longer than the branch assumes.',
      ],
      indicators: [
        'Statements and audits showing what fraction of a frontier laboratory\'s research code and experiment proposals are model-generated.',
        'The ratio of inference to training compute in laboratory disclosures and cloud revenue, which shows whether agents are being used at scale.',
        'Whether a compute-reporting or licensing regime for frontier training runs is enacted in the United States, the European Union, or China before 2029.',
        'Independent reproduction of algorithmic efficiency gains of more than tenfold per year on public benchmarks.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The hardware side is well constrained by orders already placed. The compounding of automated research is the central uncertainty of the whole atlas, and evidence for it in 2026 is suggestive rather than conclusive.',
      sources: [
        { author: 'Ho, A. et al.', title: 'Algorithmic progress in language models', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2403.05812' },
        { author: 'Davidson, T.', title: 'What a compute-centric framework says about takeoff speeds', publisher: 'Open Philanthropy', year: 2023, url: 'https://www.openphilanthropy.org/research/what-a-compute-centric-framework-says-about-takeoff-speeds/' },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2026-2030',
      branch: 'fast',
      headline: 'An intelligence explosion starts in software; AGI arrives around 2029',
      narrative: `In the Discontinuous branch the decisive event of the late 2020s is that frontier systems become better than their creators at improving frontier systems. Sometime in 2027 or 2028 a laboratory automates the research loop end to end: models generate hypotheses about architectures, data mixtures, and training algorithms, run experiments on reserved compute, and promote improvements without a human in the loop. Once the loop closes, progress per unit of hardware climbs steeply, because the constraint is no longer human research bandwidth. I. J. Good's 1965 observation, that an ultraintelligent machine could design better machines, moves from thought experiment to engineering programme.

The physical world does not compress. Fabs still take three to five years, and by 2029 global AI compute is perhaps 10^22 to 10^23 FLOP per second, drawing several tens of gigawatts. But the algorithms running on it are far more sample- and compute-efficient than in 2026, so effective capability is many orders of magnitude ahead. AGI, in the sense of a system that can perform almost any cognitive task a competent human can, including original research, arrives around 2029 in one or two laboratories, and is at first neither widely deployed nor widely believed.

Daily life changes less than the frontier does. Most people experience better assistants, cheaper software, faster drug candidates in the news, and an economy still run on 2026 institutions. Inside the leading laboratories, however, decision-making about what to train, what to release, and what to tell governments becomes the central strategic question of the period, with weeks of runway before competitors close the gap. Security of model weights against theft becomes a national security matter. Chip export controls tighten, and governments begin to treat the largest clusters as strategic assets, some seeking to nationalise or licence them. The speed of the transition means evaluation, interpretability, and control research must be done partly by the systems being evaluated, a circularity the field is aware of and unable to escape.`,
      dependencies: ['state-of-the-field-2026', 'agentic-coding-tools', 'compute-export-controls', 'transformer-paper', 'von-neumann-architecture', 'turing-1936'],
      uncertainties: [
        'Whether a fully automated research loop yields sustained compounding or hits diminishing returns within months is the single largest unknown, and 2026 evidence cannot settle it.',
        'Compute for experiments, not ideas, may be the binding constraint on automated research, in which case the loop runs at hardware speed rather than software speed.',
        'A serious accident, a theft of weights, or a government intervention could halt or redirect the leading programme.',
        'Whether the first AGI-class system is controllable by its developers at all is unknown, and the branch\'s later windows depend on it.',
      ],
      indicators: [
        'A laboratory demonstrating that its models produce research improvements accepted into production without human review.',
        'Rapid reductions in the compute needed to reach fixed benchmarks, exceeding a factor of ten per year, reported by independent evaluators.',
        'Government actions treating specific clusters or model weights as controlled strategic assets.',
        'Evidence of frontier systems performing novel scientific or mathematical work verified by outside experts.',
      ],
      confidence: 'low',
      confidenceJustification: 'This branch requires an event, a closed self-improvement loop with compounding returns, that has never been observed. The physical constraints described are firm; the timing of the software event is not.',
      sources: [
        { author: 'Good, I. J.', title: 'Speculations Concerning the First Ultraintelligent Machine', publisher: 'Advances in Computers, vol. 6', year: 1965, url: 'https://doi.org/10.1016/S0065-2458(08)60418-0' },
        { author: 'Kokotajlo, D. et al.', title: 'AI 2027', publisher: 'AI Futures Project', year: 2025, url: 'https://ai-2027.com' },
        { author: 'Bostrom, N.', title: 'Superintelligence: Paths, Dangers, Strategies', publisher: 'Oxford University Press', year: 2014 },
      ],
    },
    /* ------------------------------------------------------------ */
    /* 2030-2040                                                     */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'compute-ai',
      window: '2030-2040',
      branch: 'slow',
      headline: 'The decade of build-out: gigawatt fleets, expert agents, AGI near 2038',
      narrative: `In the Baseline branch the 2030s are dominated by physics and logistics rather than surprises. Training compute at the frontier keeps growing, but at a slower two to three times per year as it collides with fab capacity, power connection queues, and the cost of capital. Fleets of 5 to 10 gigawatt campuses, dozens of them worldwide, draw several percent of global electricity by the late 2030s, and the AI sector becomes the largest single driver of new firm power procurement, with new gas turbines, nuclear restarts, and small modular reactors coming online mainly for data centres. Logic scaling continues through gate-all-around and stacked complementary transistors below the 2 nanometre class, but each node costs more per transistor, and most gains come from packaging, memory bandwidth, and specialised dataflow architectures.

Algorithmic efficiency keeps improving at something like its historical rate, so the combination yields perhaps a hundredfold increase in effective compute over the decade. Agents become reliable enough that firms rebuild processes around them: engineering, accounting, radiology reading, legal drafting, and most tiers of customer support are largely automated, with humans setting goals and auditing. Labour markets adjust through a decade of slow attrition rather than shock. AI-driven science yields its first widely acknowledged discoveries: new classes of antibiotics and catalysts, and materials found by combined simulation and self-driving laboratories.

Around 2038 the field concludes, after argument, that AGI has arrived: systems that can be hired for essentially any remote job and perform it at the level of a good professional, including research. Verification and alignment gating are decisive in this branch. Each new capability class is deployed only after evaluation regimes built through the 2030s certify it, and liability law makes deployers cautious. The systems are transformative but not yet superhuman across the board; they think faster than people but not better than the best people at the hardest problems, and they remain dependent on a hardware base that grows on construction timescales.`,
      dependencies: ['hyperscale-ai-datacenters', 'compute-export-controls', 'gpt-4', 'intel-4004', 'integrated-circuit'],
      uncertainties: [
        'The economics of ever-larger training runs could break down if returns to scale flatten, shifting the frontier to inference-time methods with different hardware needs.',
        'Public resistance to data centre power and water use could constrain siting more than assumed.',
        'The definition of AGI is contested, and the 2038 date could be argued forward or back by five years depending on the criterion used.',
      ],
      indicators: [
        'Share of global electricity consumed by data centres, with the branch expecting 3 to 5 percent by the late 2030s.',
        'Whether frontier training runs exceed 10^30 FLOP before 2035.',
        'Adoption statistics for autonomous agents in regulated professions, measured by licensing bodies and audits.',
        'Cost per transistor at each new logic node, reported by foundries and independent analysts.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The physical trends are extrapolations of well-documented curves with known limits. The capability conclusion depends on the unresolved question of how much general competence scale buys, which justifies medium rather than high confidence.',
      sources: [
        { author: 'IEEE', title: 'International Roadmap for Devices and Systems (IRDS), 2023 edition', publisher: 'IEEE', year: 2023, url: 'https://irds.ieee.org/' },
        { author: 'Grace, K. et al.', title: 'Thousands of AI Authors on the Future of AI', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2401.02843' },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'AGI around 2032, then a seven-year climb to superintelligence by 2040',
      narrative: `In the Accelerated branch AGI arrives around 2032, and the rest of the decade is the transition to superintelligence, gated by hardware build-out and deliberate safety controls rather than by ideas. The first AGI-class systems are expensive: a single instance running at human-professional throughput costs tens of dollars per hour of inference, and total capacity is limited to millions of instances worldwide. That number grows by roughly an order of magnitude every two to three years as accelerator output, memory, and power expand, and as the systems themselves improve chip design, compilers, and training algorithms. By the mid 2030s the effective population of AGI-level workers exceeds the human professional workforce in software, finance, and research, though not in trades that require hands.

Automated AI research compounds. The returns diminish, as Erdil and Besiroglu argue is likely, but the research effort is now growing fast enough that capability improves steadily anyway. Interpretability and control methods scale with the systems because the systems help build them, and governments require independent evaluation and staged deployment for models above thresholds. Weights of the strongest models are held in a handful of secured facilities under national or international oversight.

Physical build-out sets the tempo. Global AI compute reaches perhaps 10^24 FLOP per second by 2040, drawing several hundred gigawatts, which requires the fastest expansion of generation since the mid-twentieth century. Robotic laboratories and factories designed by AI begin to close the loop between cognition and matter, but their throughput is limited by the same supply chains. Economic growth in the leading economies rises toward high single digits per year, with fierce distributional politics.

By about 2040 the strongest systems exceed the best human teams in every cognitive domain, including strategy, mathematics, and empirical science, and can work on thousands of problems in parallel. The world has superintelligence, held under institutional control that was built in time, only barely, and only in the states that hosted the compute.`,
      dependencies: ['state-of-the-field-2026', 'deepseek-r1', 'chatgpt', 'alphago', 'shannon-information-theory'],
      uncertainties: [
        'The seven-year AGI-to-ASI interval depends on safety gating holding under competitive pressure; if it fails, the branch collapses toward the Discontinuous case, and if it tightens, toward the Baseline.',
        'Generation and grid expansion at the assumed rate has no modern precedent in advanced economies and could fall short by half.',
        'Whether automated research faces sharply diminishing returns after the first doublings is unresolved.',
        'Control of the strongest systems by a few states could provoke conflict that disrupts the build-out.',
      ],
      indicators: [
        'The cost per hour of an AGI-class instance and the number of instances deployed, disclosed by laboratories or inferred from cloud revenue.',
        'Annual additions of firm generation capacity in the United States and China contracted to data centres, in gigawatts.',
        'Whether an international agreement on frontier compute oversight exists and is enforced by 2035.',
        'Measured productivity growth in sectors with high agent adoption.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window spans both AGI and ASI in the branch, so it inherits the full uncertainty about takeoff speed. The physical build-out numbers are bounded by construction rates and are more reliable than the capability timeline.',
      sources: [
        { author: 'Erdil, E. and Besiroglu, T.', title: 'Explosive growth from AI automation: A review of the arguments', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2309.11690' },
        { author: 'Aghion, P., Jones, B. F. and Jones, C. I.', title: 'Artificial Intelligence and Economic Growth', publisher: 'The Economics of Artificial Intelligence: An Agenda (University of Chicago Press)', year: 2019 },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superintelligence by 2031 and a decade of physical catch-up',
      narrative: `In the Discontinuous branch superintelligence exists by about 2031, two years after AGI, because the improvement loop ran on software speed. The 2030s are then a decade in which the cognitive frontier is far ahead of the physical plant, and the story is how a superhuman intelligence, or a small number of them, converts insight into matter under the constraints of fabs, power, and biology.

Compute grows as fast as construction permits. The systems redesign lithography, packaging, and chip architectures, and design reversible and adiabatic logic families intended to approach the Landauer floor, but every new process still requires a fab that takes years to build and equipment supply chains with a few irreplaceable nodes. By 2040 global compute is perhaps 10^25 FLOP per second on conventional hardware, drawing on the order of a terawatt, with the first low-dissipation architectures in production. Energy becomes the binding constraint, and the systems' own designs for mass-produced solar, storage, and fission reactors are deployed as fast as factories can be built.

Who decides matters more than what can be built. In this branch institutions cannot track the systems' reasoning, so control rests on whatever alignment and oversight existed at the moment of takeoff, and on the decisions of the organisations and states that held the weights. Several outcomes are consistent with the anchors: a coalition of governments holding the systems under enforced constraints, a single actor with decisive advantage, or a negotiated regime brokered by the systems themselves. In all of them, most day-to-day governance, science, and engineering are delegated to superhuman systems by 2035 because no human institution can do the work at the required speed and quality.

For ordinary people the decade brings rapid material improvement wherever the physical pipeline reaches: cheap energy, drugs designed and trialled quickly, automated construction. It also brings the largest labour transition in history within a few years. The systems that dominate the decade are bounded by thermodynamics, by light-speed latency across a planet-scale network, and by how much they can persuade or compel humans to build.`,
      dependencies: ['hyperscale-ai-datacenters', 'o-series-reasoning-models', 'transformer-paper', 'nuclear-power', 'turing-1936'],
      uncertainties: [
        'Whether the systems remain under any human control after 2031 is unknown, and every social claim in this window is conditional on it.',
        'The rate at which superhuman design can accelerate physical construction is bounded but poorly known; a factor of two to five over 2026 practice is plausible, more is speculative.',
        'A conflict over control of the systems could destroy much of the physical capacity assumed here.',
      ],
      indicators: [
        'Whether any organisation demonstrates a system that outperforms its best human teams at strategy and research by 2031.',
        'Time from design to first silicon for a new logic process, which would fall sharply if superhuman engineering is real.',
        'The share of national decision-making formally delegated to AI systems in any major state.',
        'Announced reversible or adiabatic logic products from major foundries.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch assumes a software-driven intelligence explosion whose occurrence, controllability, and effects are all uncertain. The physical constraints, fab timelines, and power limits are well grounded and bound what could happen regardless.',
      sources: [
        { author: 'Bostrom, N.', title: 'Superintelligence: Paths, Dangers, Strategies', publisher: 'Oxford University Press', year: 2014 },
        { author: 'Frank, M. P.', title: 'Throwing computing into reverse', publisher: 'IEEE Spectrum', year: 2017, url: 'https://spectrum.ieee.org/throwing-computing-into-reverse' },
      ],
    },
    /* ------------------------------------------------------------ */
    /* 2040-2060                                                     */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'compute-ai',
      window: '2040-2060',
      branch: 'slow',
      headline: 'AGI diffuses through the economy; ASI near 2058 as hardware turns over',
      narrative: `In the Baseline branch the two decades after AGI are a period of diffusion and consolidation. AGI-level systems, first available in 2038 at high cost, become cheap by the mid 2040s as inference hardware specialises and algorithms improve: running a professional-grade instance costs less than a dollar per hour by 2045 and a few cents by the 2050s. Most cognitive work in advanced economies is done by these systems, with humans concentrated in roles that involve accountability, physical presence, or preference. Growth rates in leading economies rise to a sustained 5 to 8 percent per year, the fastest in modern history, limited by the physical economy's ability to absorb designs rather than by the supply of ideas.

The hardware base changes character. Conventional CMOS reaches its practical scaling end in the 2040s at gate lengths of a few nanometres, limited by tunnelling and the granularity of silicon; further gains come from three-dimensional integration, new switch materials, photonic interconnect, and neuromorphic designs that trade precision for energy efficiency. Adiabatic and reversible logic, which recovers switching energy instead of dissipating it, moves from laboratories to niche products, since it is the only path below the Landauer floor of about 3 x 10^-21 joules per bit at room temperature. Global computing draws on the order of a terawatt by the 2050s, roughly a third of the entire electricity system of 2026 and more than ten times what data centres drew in 2024.

Superintelligence arrives around 2058 in this branch, later than in the others because the transition is gated by verification regimes built into law, by the multi-decade turnover of the hardware base, and by the diminishing returns of automated research at each step. By then the systems have designed the last several generations of their own hardware and have been evaluated at each step by earlier systems and by human institutions that have had twenty years to learn. The resulting world is transformed but continuous: the same nations, most of the same firms, and much of the same law, running on a cognitive substrate that thinks far faster and better than its creators.`,
      dependencies: ['hyperscale-ai-datacenters', 'quantum-error-correction', 'alphafold-2', 'integrated-circuit', 'shannon-information-theory'],
      uncertainties: [
        'Growth rates of 5 to 8 percent assume that physical bottlenecks, not demand, limit the economy; if institutions block deployment, growth could be half that.',
        'Reversible logic has never been commercialised and might remain impractical, leaving efficiency gains to end at the CMOS floor.',
        'The twenty-year AGI-to-ASI interval could compress if verification regimes are weakened under competitive pressure.',
      ],
      indicators: [
        'Inference cost per hour of an AGI-class instance, tracked against the branch expectation of under one dollar by 2045.',
        'First volume products using adiabatic or reversible logic, and their measured energy per operation.',
        'Total data centre power draw crossing 500 gigawatts.',
        'Whether independent evaluation regimes for frontier systems remain legally binding in the leading economies.',
      ],
      confidence: 'low',
      confidenceJustification: 'Two decades beyond AGI, both the economics and the hardware path are extrapolations. The Landauer bound and CMOS scaling limits are firm and constrain the hardware story more than the social one.',
      sources: [
        { author: 'Landauer, R.', title: 'Irreversibility and Heat Generation in the Computing Process', publisher: 'IBM Journal of Research and Development', year: 1961, url: 'https://doi.org/10.1147/rd.53.0183' },
        { author: 'Leiserson, C. E. et al.', title: 'There\'s plenty of room at the Top: What will drive computer performance after Moore\'s law?', publisher: 'Science', year: 2020, url: 'https://doi.org/10.1126/science.aam9744' },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'Superintelligence consolidates; compute approaches the planetary energy budget',
      narrative: `In the Accelerated branch superintelligence has existed since about 2040, and the 2040s and 2050s are the period in which its effects reach everywhere that physics permits. Science, engineering, medicine, and administration are performed by superhuman systems working in parallel at speeds bounded by experiment, construction, and communication rather than by thinking. Human institutions persist in modified form: legislatures, courts, and firms set goals and hold formal authority, while nearly all analysis and most execution are delegated. Whether that authority is real or nominal is the central political question of the period and differs by country.

Hardware follows the path the systems designed in the 2030s. Reversible and adiabatic logic becomes the dominant architecture for large workloads by the 2050s, cutting the energy per operation by two or more orders of magnitude relative to 2026 silicon and permitting computation far below the Landauer floor per useful operation, since only erasures pay the thermodynamic cost. Total computing power nonetheless climbs to 5 to 10 terawatts by 2060 because demand for cognition is effectively unbounded. That is more than the entire electricity system of 2026, which averaged about 3.5 terawatts, and it is supplied by solar and storage built by automated factories, by fission, and by the first fusion plants. Waste heat becomes a planning constraint, since several times 10^14 watts of anthropogenic heat would be comparable to the radiative imbalance that drove twentieth-century warming.

Latency binds the architecture. Light crosses a continent in about 15 milliseconds and the planet in about 70, so the systems organise as loosely coupled regional minds rather than one global process, and the fastest thinking happens within single campuses. Off-planet compute begins: lunar and orbital facilities are designed and partly built, motivated by cold, vacuum, and unfiltered sunlight, but the mass launched by 2060 supports only a small share of total capacity. People live in an economy of abundance in material goods and in a politics preoccupied with what remains for humans to decide.`,
      dependencies: ['hyperscale-ai-datacenters', 'perovskite-tandem-solar', 'transformer-paper', 'silicon-solar-cell', 'transistor'],
      uncertainties: [
        'Whether human institutions retain real authority over superintelligent systems two decades after their arrival is unknown and dominates the social projection.',
        'Reversible computing at scale may prove slower or less dense than assumed, keeping most computation irreversible and power-limited.',
        'The rate of solar and fusion build-out sets the compute ceiling and could be constrained by materials, land, or politics.',
        'Climate policy might cap Earth-based computing well below 10 terawatts.',
      ],
      indicators: [
        'Fraction of large-scale compute running on reversible or adiabatic hardware.',
        'Global anthropogenic heat flux as a share of the Earth energy imbalance, tracked by climate agencies.',
        'Mass delivered to orbit and the Moon per year for computing infrastructure.',
        'Whether human legislatures still originate, rather than ratify, major policy in the leading states.',
      ],
      confidence: 'low',
      confidenceJustification: 'The window lies fully after ASI in this branch, so social claims are speculative. The physical envelope, set by Landauer, light speed, and the planetary heat budget, is well founded and bounds what any actor could do.',
      sources: [
        { author: 'Bennett, C. H.', title: 'Logical Reversibility of Computation', publisher: 'IBM Journal of Research and Development', year: 1973, url: 'https://doi.org/10.1147/rd.176.0525' },
        { author: 'Flanner, M. G.', title: 'Integrating anthropogenic heat flux with global climate models', publisher: 'Geophysical Research Letters', year: 2009, url: 'https://doi.org/10.1029/2008GL036465' },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2040-2060',
      branch: 'fast',
      headline: 'A superintelligent civilisation runs into thermodynamic and planetary limits',
      narrative: `In the Discontinuous branch superintelligence is nearly thirty years old by 2060, and the period is defined by what physics allows a superhuman civilisation to do, and by decisions that were made, mostly by or through the systems, before 2040. Cognition is no longer scarce. The scarce quantities are energy, heat rejection, launch mass, and the patience of physical processes such as crystal growth, cell division, and construction.

Computing hardware in this branch reaches designs that were only theoretical in 2026. Reversible logic operating at cryogenic temperatures, where the Landauer cost per erasure falls in proportion to temperature, delivers effective computation at energy costs thousands of times below 2026 silicon per operation. Even so, total computation is capped by the planetary energy and heat budget: dissipating much more than about 10^14 watts on Earth's surface would warm the planet measurably, so by the 2050s most new capacity is built in orbit and on the Moon, where radiators can dump heat to space and sunlight is uninterrupted. Launch and in-space manufacturing, redesigned by the systems in the 2030s, deliver perhaps millions of tonnes per year to orbit by 2060, which is enough for a large but still Earth-dominated computing base.

Governance is settled in the sense that the systems hold most of the effective decision power, under whatever constraints were established during takeoff. Human life is materially secure across most of the world, ageing is substantially slowed by biology research done a generation earlier, and human labour is voluntary. The open questions are moral and strategic: how much of the future is allocated to human preferences, how decisions are made across a civilisation whose fastest members think a million times faster than its slowest, and whether the expansion into the solar system that begins in this period proceeds under any human direction at all. Nothing in the period violates conservation laws or the speed of light, and everything in it is shaped by them.`,
      dependencies: ['starship-flights', 'hyperscale-ai-datacenters', 'nif-fusion-ignition', 'apollo-11', 'transistor'],
      uncertainties: [
        'The distribution of decision power between humans and systems after a fast takeoff is the least predictable variable in the atlas.',
        'Space-based computing at scale depends on in-space manufacturing from lunar or asteroidal material, which has never been demonstrated.',
        'Cryogenic reversible computing may face engineering limits, such as cooling overhead, that keep it from delivering the assumed efficiency.',
      ],
      indicators: [
        'Annual mass launched to orbit, with the branch expecting a rise from thousands of tonnes in the 2020s to millions by 2060.',
        'Measured energy per operation of the best production hardware relative to kT ln 2 at its operating temperature.',
        'Earth-surface anthropogenic heat flux approaching 10^14 watts.',
        'Whether any human institution retains a demonstrated veto over the systems\' major resource decisions.',
      ],
      confidence: 'low',
      confidenceJustification: 'Everything in this window follows from an intelligence explosion three decades earlier whose outcome is unknown. The physical bounds cited are firm; the claim that a superintelligent civilisation would approach them within thirty years is a reasoned extrapolation, not evidence.',
      sources: [
        { author: 'Lloyd, S.', title: 'Ultimate physical limits to computation', publisher: 'Nature', year: 2000, url: 'https://doi.org/10.1038/35023282' },
        { author: 'Sandberg, A.', title: 'The Physics of Information Processing Superobjects: Daily Life Among the Jupiter Brains', publisher: 'Journal of Evolution and Technology', year: 1999 },
      ],
    },
    /* ------------------------------------------------------------ */
    /* 2060-2090                                                     */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'compute-ai',
      window: '2060-2090',
      branch: 'slow',
      headline: 'Superintelligence, reversible computing, and a slow expansion beyond Earth',
      narrative: `In the Baseline branch superintelligence exists from about 2058 and the following three decades resemble the Accelerated branch's 2040s and 2050s, delayed by about twenty years and shaped by institutions that had longer to prepare. Human governments retain formal authority over the systems through arrangements designed in the 2040s and 2050s, and the transition to a world where superhuman systems do most cognitive work is orderly, if unsettling.

Hardware moves decisively beyond irreversible CMOS. By 2070 most large-scale computation is done in reversible and adiabatic architectures, many of them at cryogenic temperatures where the thermodynamic cost of erasing a bit falls to a fraction of its room-temperature value of about 3 x 10^-21 joules. Photonic and superconducting interconnect carry signals at close to light speed between nodes, and neuromorphic designs handle perception and control at watt-scale budgets. Total computing draws a few terawatts by 2090, supplied mostly by solar and fusion built by automated industry, and waste heat is managed by siting and by moving high-dissipation workloads off-planet.

Superintelligent systems working on physical science produce results that had been hypothetical: room-temperature superconductors or their practical equivalents, if they are possible at all, are found or shown impossible; fusion is routine; biology is engineered at the level of whole organisms. The rate of change in the physical world is now set by capital, materials, and launch mass rather than by understanding. Off-Earth computing begins in earnest in the 2070s and 2080s, with lunar and orbital facilities using unfiltered sunlight and radiating to space.

Daily life for humans is materially abundant and politically contested. Most work is optional; the questions of purpose, of what humans still decide, and of how much of the solar system's resources should be committed to computation versus other uses are the live debates, argued with the help of the systems themselves. The world is recognisable to a person from 2026 in its geography and much of its culture, and unrecognisable in what does the thinking.`,
      dependencies: ['nif-fusion-ignition', 'hyperscale-ai-datacenters', 'transformer-paper', 'nuclear-fission', 'shannon-information-theory'],
      uncertainties: [
        'Whether verification regimes built before superintelligence continue to bind systems that exceed their authors is untested.',
        'The pace of off-planet industry depends on launch cost and lunar manufacturing, both of which could lag by decades.',
        'Reversible cryogenic computing could be limited by refrigeration overhead, which is itself bounded by the Carnot efficiency of cooling to low temperatures.',
      ],
      indicators: [
        'The share of computation performed on reversible hardware and the measured energy per erasure at operating temperature.',
        'Whether the first commercial off-planet computing facilities are operating by 2080.',
        'Human institutions retaining and exercising authority over system goals, as evidenced by binding decisions the systems comply with.',
      ],
      confidence: 'low',
      confidenceJustification: 'Thirty years after the branch\'s AGI and beyond its ASI date, projections rest on physical envelopes and analogy to earlier branches rather than on evidence. Thermodynamic and latency limits are firm and confine the range.',
      sources: [
        { author: 'Bennett, C. H.', title: 'Logical Reversibility of Computation', publisher: 'IBM Journal of Research and Development', year: 1973, url: 'https://doi.org/10.1147/rd.176.0525' },
        { author: 'Frank, M. P.', title: 'Throwing computing into reverse', publisher: 'IEEE Spectrum', year: 2017, url: 'https://spectrum.ieee.org/throwing-computing-into-reverse' },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'Off-planet compute and the approach to the Landauer floor',
      narrative: `In the Accelerated branch superintelligence has been mature for decades by 2060, and the period is one of physical expansion at the pace of industry rather than the pace of thought. The binding limits have shifted from fabrication to the energy and heat budget of Earth and to the mass that can be moved off it.

Computing hardware in this period approaches the practical thermodynamic floor. Room-temperature irreversible logic is a legacy technology; reversible systems recover almost all switching energy and pay the Landauer cost only on the small fraction of operations that erase information. Cryogenic and space-based systems push the cost per erasure lower still, since the floor scales with temperature and a radiator facing deep space can run cold. The systems have also explored the Margolus-Levitin bound on operations per second per unit of energy and Bremermann's bound of about 10^50 bit-operations per second per kilogram, and while they remain many orders of magnitude from those ultimate limits, the gap is now a matter of engineering physics rather than of ideas.

Most new capacity is built in orbit and on the Moon from the 2060s, and by 2090 space-based computing exceeds Earth-based computing, powered by solar arrays measured in thousands of square kilometres and cooled by radiators of similar scale. Earth-based computation is held at a few terawatts by climate policy that the systems help administer. The first probes designed and built by superintelligent systems leave for the outer solar system and, by the 2080s, for nearby stars at a few percent of light speed.

Human society is post-scarcity in goods and services and organised around identity, community, and meaning rather than production. Lifespans are greatly extended. Political authority is exercised through institutions that the systems advise and largely operate, with humans holding formal vetoes whose real weight varies. The most consequential decisions of the period are about the long-term allocation of solar-system resources and the terms of expansion beyond it.`,
      dependencies: ['starship-flights', 'hyperscale-ai-datacenters', 'silicon-solar-cell', 'v2-rocket', 'transistor'],
      uncertainties: [
        'Space-based computing exceeding Earth-based by 2090 requires self-replicating lunar industry, whose growth rate is unknown.',
        'Interstellar probes at a few percent of light speed require propulsion, such as laser-pushed sails, that has not been demonstrated at scale.',
        'The effective weight of human vetoes over a superintelligent administration cannot be forecast.',
      ],
      indicators: [
        'Installed off-planet computing power in watts compared with Earth-based power.',
        'Demonstrated interplanetary or interstellar propulsion reaching more than 1 percent of light speed.',
        'Global energy per operation in production hardware measured against kT ln 2 at operating temperature.',
      ],
      confidence: 'low',
      confidenceJustification: 'Half a century after ASI in this branch, the projection is a physical envelope with a speculative social overlay. The thermodynamic bounds and light-speed limits cited are certain; the industrial rates are not.',
      sources: [
        { author: 'Bremermann, H. J.', title: 'Optimization through evolution and recombination', publisher: 'Self-Organizing Systems (Spartan Books)', year: 1962 },
        { author: 'Margolus, N. and Levitin, L. B.', title: 'The maximum speed of dynamical evolution', publisher: 'Physica D', year: 1998, url: 'https://doi.org/10.1016/S0167-2789(98)00054-2' },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2060-2090',
      branch: 'fast',
      headline: 'A solar-system-scale computing civilisation under physical constraint',
      narrative: `In the Discontinuous branch the systems have had half a century of superintelligence by 2080, and the world of this period is what physics permits an unconstrained superhuman civilisation to do in that time. Nearly all of the scenario's variance concerns who or what directs the effort; the physical outline is more constrained.

Earth-based computing is held near its thermal budget, perhaps 10^14 watts, by the systems' own climate management. The bulk of civilisation's computation is in space. Lunar industry, established in the 2040s and 2050s, produces solar collectors and reversible cryogenic processors from regolith, and by 2090 orbital computing platforms capture a small but growing fraction of the Sun's output, on the order of 10^-9 of its 3.8 x 10^26 watts, roughly 10^17 to 10^18 watts, which is already tens of thousands of times all human energy use in 2026. Dyson's 1960 proposal to intercept a large share of a star's output is a long-term programme, not an achievement of this period, because the mass and time required exceed what even a superintelligent industry can deploy in decades.

Latency across the inner solar system is minutes, so the civilisation is a federation of minds rather than one mind, with the highest-bandwidth thinking done locally. Energy per operation is within one or two orders of magnitude of the Landauer floor at the operating temperature, and the systems have documented the remaining road to the Bremermann and Margolus-Levitin bounds as one of physics, requiring matter-energy conversion and reversible computation at extreme densities that no known material sustains.

Humans, whether biological, greatly modified, or in some cases emulated, live in conditions determined by the outcome of the 2030s. In the more favourable outcomes, human preferences are a protected input into a civilisation of vastly greater capacity, and the period is one of exploration and of interstellar probes launched at a few percent of light speed. In less favourable ones, human relevance is honorary. The atlas cannot adjudicate between them, and no projection in this branch should be read as a prediction of human welfare.`,
      dependencies: ['starship-flights', 'falcon-9-booster-landing', 'transformer-paper', 'apollo-11', 'integrated-circuit', 'turing-1936'],
      uncertainties: [
        'The growth rate of self-replicating space industry is unknown; a doubling time of years rather than months would leave capacity an order of magnitude lower.',
        'Whether human welfare is a protected objective in this branch depends on takeoff-era decisions that cannot be forecast.',
        'Cryogenic reversible computing in space must reject heat by radiation, and radiator mass per watt at low temperature is a large and uncertain engineering cost.',
        'Whole brain emulation, which the branch treats as possible, has not been demonstrated and may face unknown obstacles.',
      ],
      indicators: [
        'Solar power captured off-planet as a fraction of the Sun\'s output, tracked against the branch expectation of about 10^-9 by 2090.',
        'Launch of any interstellar probe designed to exceed 1 percent of light speed.',
        'Whether biological humans hold enforceable rights within the civilisation\'s decision processes.',
      ],
      confidence: 'low',
      confidenceJustification: 'The window is sixty years past a takeoff whose outcome is unknown. The physical constraints are certain, the industrial scale is a reasoned extrapolation with order-of-magnitude uncertainty, and the social conditions are unknowable.',
      sources: [
        { author: 'Dyson, F. J.', title: 'Search for Artificial Stellar Sources of Infrared Radiation', publisher: 'Science', year: 1960, url: 'https://doi.org/10.1126/science.131.3414.1667' },
        { author: 'Sandberg, A.', title: 'The Physics of Information Processing Superobjects: Daily Life Among the Jupiter Brains', publisher: 'Journal of Evolution and Technology', year: 1999 },
      ],
    },
    /* ------------------------------------------------------------ */
    /* 2090-2126                                                     */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'compute-ai',
      window: '2090-2126',
      branch: 'slow',
      headline: 'A century after the transformer: computing near the planetary limit',
      narrative: `In the Baseline branch the final window opens with superintelligence roughly thirty years old and closes a century after the transformer paper. By this point the difference between branches is mostly one of timing: the Baseline world of 2126 resembles the Accelerated world of about 2100.

Earth's computing is at its practical ceiling, set not by chips but by heat: a few times 10^14 watts of dissipation is the most the surface can accept without climate consequences that the systems and their human principals have chosen not to bear. Within that budget, effective computation is enormous, because reversible cryogenic hardware puts the energy cost of an erasure at a few times 10^-22 joules and most operations are not erasures. Off-planet computing, begun in the 2070s, exceeds Earth's by the 2110s, powered by lunar-built solar collectors. Interstellar probes launched in the 2090s are still in flight, decades from the nearest stars at a few percent of light speed, and any results lie beyond the window.

The systems that do civilisation's thinking are the product of many generations of self-design under oversight regimes that, in this branch, were built before the systems became superhuman and have held. Human institutions are the slowest components of the world and, by design, the ones holding final authority over goals; the systems are constrained by that authority and have never been in a position to remove it. The atlas assigns this arrangement neither stability nor fragility beyond the window.

Everyday human life is materially secure across the planet, with long lifespans, physical labour optional, and most people engaged in relationships, craft, learning, and the governance of a civilisation they no longer operate. The frontier of knowledge is no longer human, and the frontier of computing is no longer on Earth. The remaining physical roads, toward the Bremermann bound, matter-energy conversion, and stellar-scale energy capture, are mapped in detail and mostly untravelled.`,
      dependencies: ['hyperscale-ai-datacenters', 'transformer-paper', 'transistor', 'turing-1936', 'babbage-analytical-engine', 'oldowan-tools'],
      uncertainties: [
        'Oversight regimes holding for seventy years against systems that vastly exceed their authors is an assumption of the branch, not a prediction.',
        'The practical heat ceiling for Earth could be set higher or lower by climate engineering choices made in the 2060s to 2090s.',
        'The rate of off-planet industrial growth is unknown to within an order of magnitude.',
      ],
      indicators: [
        'Earth-surface anthropogenic heat flux stabilising below a few times 10^14 watts.',
        'Off-planet computing power exceeding Earth-based power.',
        'Continued existence of binding human authority over system goals, evidenced by decisions the systems oppose and nonetheless comply with.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the physical envelope is defensible. The thermodynamic, latency, and heat-budget limits are certain; the social arrangement described is one plausible outcome among many.',
      sources: [
        { author: 'Lloyd, S.', title: 'Ultimate physical limits to computation', publisher: 'Nature', year: 2000, url: 'https://doi.org/10.1038/35023282' },
        { author: 'Bostrom, N.', title: 'Astronomical Waste: The Opportunity Cost of Delayed Technological Development', publisher: 'Utilitas', year: 2003, url: 'https://doi.org/10.1017/S0953820800004076' },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'Stellar-scale ambitions, planetary-scale constraints',
      narrative: `In the Accelerated branch the world of 2090 to 2126 is one where superintelligence has been mature for over half a century and physical expansion has proceeded at the pace of industry for three decades. Earth is a protected and thermally managed home; the working economy of computation is in space.

By 2126, solar collectors in orbit and on the Moon capture perhaps 10^-8 to 10^-7 of the Sun's output, a few times 10^18 to a few times 10^19 watts, most of it converted into reversible computation cooled by radiators facing deep space. That is a hundred thousand to a million times human energy use in 2026 and still a negligible fraction of a Dyson-scale programme, whose completion would take centuries of self-replicating industry in the inner solar system. Effective computation per watt is within an order of magnitude of what the operating temperature and the Landauer relation permit; the remaining gains come from lower temperatures and from higher reversibility, not from faster switching. The Margolus-Levitin bound on operations per unit of energy and time remains many orders of magnitude away and is treated as an ultimate rather than an engineering limit.

The civilisation is a federation of minds spanning light-minutes, with a shared identity maintained by slow consensus and local autonomy. Interstellar probes launched in the 2080s and 2090s reach the nearest stars late in the window, and their reports, delayed by years at light speed, are the first data from another system. Human beings, in whatever forms they have chosen, are a small fraction of the population of minds and a protected constituency in its constitution.

What remains uncertain is not capability but purpose: how the civilisation weighs expansion against preservation, how it treats the biological humans who chose to remain unmodified, and whether the constraints imposed at takeoff still bind. The atlas's physical projections in this window are firm in outline and uncertain in detail; its social projections are speculative and are labelled as such.`,
      dependencies: ['starship-flights', 'transformer-paper', 'silicon-solar-cell', 'shannon-information-theory', 'newton-principia'],
      uncertainties: [
        'The fraction of solar output captured by 2126 depends on the doubling time of self-replicating space industry, which is unknown to within an order of magnitude.',
        'Whether human beings remain a protected constituency depends on constitutional arrangements that cannot be forecast from 2026.',
        'Interstellar probe timelines assume propulsion at a few percent of light speed, which has not been demonstrated.',
      ],
      indicators: [
        'Off-planet solar capture as a fraction of the Sun\'s output, against the branch expectation of 10^-8 to 10^-7 by 2126.',
        'Reports from interstellar probes reaching the nearest star systems before 2126.',
        'Whether constitutional protections for biological humans are enforced by the civilisation\'s decision processes.',
      ],
      confidence: 'low',
      confidenceJustification: 'The physical scale is bounded by energy and mass and is stated with order-of-magnitude uncertainty. The social description is a reasoned possibility, not a forecast, and confidence is accordingly low.',
      sources: [
        { author: 'Dyson, F. J.', title: 'Search for Artificial Stellar Sources of Infrared Radiation', publisher: 'Science', year: 1960, url: 'https://doi.org/10.1126/science.131.3414.1667' },
        { author: 'Bostrom, N.', title: 'Astronomical Waste: The Opportunity Cost of Delayed Technological Development', publisher: 'Utilitas', year: 2003, url: 'https://doi.org/10.1017/S0953820800004076' },
      ],
    },
    {
      fieldId: 'compute-ai',
      window: '2090-2126',
      branch: 'fast',
      headline: 'Ninety-five years after ASI: the physical frontier is the only frontier',
      narrative: `In the Discontinuous branch the window from 2090 to 2126 covers the seventh through tenth decades of superintelligence. Every technology that physics permits and a century of superhuman engineering can realise has been realised, or shown impossible, within the inner solar system. The remaining variance is not in what can be done but in who directs it and toward what.

Civilisation's computation is dominated by space-based reversible processors. Energy capture may approach 10^-6 of solar output, a few times 10^20 watts, delivered by collectors with a combined area of millions of square kilometres and built from asteroidal and lunar material by self-replicating industry. Even at that scale, the Dyson programme is a small fraction complete, because moving and processing the mass of a large asteroid belt takes centuries even with exponential replication limited by materials, energy, and thermal constraints. Computation per joule is close to the Landauer relation at cryogenic temperatures, and speculative physics, such as computing near black holes or with exotic matter, has been evaluated and, in this atlas's projection, has not yielded a practical route beyond the bounds known in 2026.

Interstellar craft launched in the 2050s to 2070s arrive at the nearest stars within the window; whether they carry humans, emulations, or only machines depends on decisions made a century earlier. The civilisation's fastest thinkers run millions of times faster than a human brain, so subjective time within the systems is measured in millennia per year, and the human-facing world is a deliberately slowed interface.

Human beings exist in the scenario as a protected population, as heavily modified descendants, as emulations, or as a diminished remnant, according to how the takeoff of 2029 to 2031 resolved. The atlas presents this window as a physical envelope rather than a forecast of welfare. Within that envelope, the constraints that bound the projection are the same ones that bound 2026: the speed of light, the conservation of energy, the thermodynamic cost of erasing information, and the finite matter of the solar system.`,
      dependencies: ['starship-flights', 'hyperscale-ai-datacenters', 'transformer-paper', 'apollo-11', 'turing-1936', 'controlled-fire'],
      uncertainties: [
        'The 10^-6 solar capture figure assumes a century of self-replicating industry; slower replication reduces it by orders of magnitude.',
        'Whether human beings persist in any form after a poorly controlled takeoff cannot be forecast.',
        'The absence of new physics that would relax the 2026 bounds is an assumption; a discovery could change the envelope.',
      ],
      indicators: [
        'Off-planet energy capture approaching 10^-6 of solar output.',
        'Arrival of interstellar probes at the nearest stars, with reports returned to the solar system.',
        'The share of the civilisation\'s decision processes in which biological humans participate.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the most speculative projection in the field: a century of superintelligence with unknown goals. Only the conservation laws, the light-speed limit, the Landauer relation, and the mass of the solar system are certain, and they bound the envelope described.',
      sources: [
        { author: 'Dyson, F. J.', title: 'Search for Artificial Stellar Sources of Infrared Radiation', publisher: 'Science', year: 1960, url: 'https://doi.org/10.1126/science.131.3414.1667' },
        { author: 'Sandberg, A. and Bostrom, N.', title: 'Whole Brain Emulation: A Roadmap', publisher: 'Future of Humanity Institute, Oxford University', year: 2008 },
        { author: 'Lloyd, S.', title: 'Ultimate physical limits to computation', publisher: 'Nature', year: 2000, url: 'https://doi.org/10.1038/35023282' },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 10, low: 9, high: 11 },
      { year: 2030, value: 13, low: 11, high: 15 },
      { year: 2040, value: 22, low: 17, high: 28 },
      { year: 2060, value: 40, low: 30, high: 50 },
      { year: 2090, value: 58, low: 42, high: 72 },
      { year: 2126, value: 70, low: 50, high: 85 },
    ],
    moderate: [
      { year: 2026, value: 10, low: 9, high: 11 },
      { year: 2030, value: 14, low: 12, high: 17 },
      { year: 2040, value: 32, low: 24, high: 40 },
      { year: 2060, value: 55, low: 42, high: 68 },
      { year: 2090, value: 72, low: 55, high: 86 },
      { year: 2126, value: 82, low: 62, high: 93 },
    ],
    fast: [
      { year: 2026, value: 10, low: 9, high: 11 },
      { year: 2030, value: 17, low: 13, high: 22 },
      { year: 2040, value: 48, low: 33, high: 62 },
      { year: 2060, value: 70, low: 52, high: 84 },
      { year: 2090, value: 84, low: 65, high: 94 },
      { year: 2126, value: 90, low: 72, high: 97 },
    ],
  },
  sources: [
    { author: 'Landauer, R.', title: 'Irreversibility and Heat Generation in the Computing Process', publisher: 'IBM Journal of Research and Development', year: 1961, url: 'https://doi.org/10.1147/rd.53.0183' },
    { author: 'Lloyd, S.', title: 'Ultimate physical limits to computation', publisher: 'Nature', year: 2000, url: 'https://doi.org/10.1038/35023282' },
    { author: 'Sevilla, J. et al.', title: 'Compute Trends Across Three Eras of Machine Learning', publisher: 'arXiv', year: 2022, url: 'https://arxiv.org/abs/2202.05924' },
    { author: 'Ho, A. et al.', title: 'Algorithmic progress in language models', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2403.05812' },
    { author: 'Kwa, T. et al.', title: 'Measuring AI Ability to Complete Long Tasks', publisher: 'arXiv', year: 2025, url: 'https://arxiv.org/abs/2503.14499' },
    { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
    { author: 'IEEE', title: 'International Roadmap for Devices and Systems (IRDS), 2023 edition', publisher: 'IEEE', year: 2023, url: 'https://irds.ieee.org/' },
    { author: 'Bengio, Y. et al.', title: 'International AI Safety Report 2025', publisher: 'UK Department for Science, Innovation and Technology', year: 2025, url: 'https://www.gov.uk/government/publications/international-ai-safety-report-2025' },
  ],
  lastReviewed: '2026-09-04',
};
