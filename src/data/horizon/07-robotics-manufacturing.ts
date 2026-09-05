import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'robotics-manufacturing',
  index: 7,
  name: 'Robotics and Manufacturing',
  code: 'ROBOTICS',
  summary: `Robotics and manufacturing is where the intelligence era meets the physical world, and in September 2026 it is split between a mature industrial core and an unproven frontier. The core is large and growing steadily: the International Federation of Robotics counted about 540,000 industrial robot installations in 2024, more than half of them in China, taking the world operating stock past 4.5 million; Amazon alone operates more than a million mobile and manipulation robots; and a small number of plants (Fanuc's Oshino plant is the standard example) have run lights-out for two decades. The frontier is robot learning. Since 2023, vision-language-action models trained on internet text plus a few million robot trajectories (RT-2, Open X-Embodiment, pi0, Gemini Robotics, Helix, GR00T) have made general manipulation look learnable, and capital followed: Figure, Physical Intelligence, Apptronik, Agility, 1X, Unitree, UBTech, Agibot and Tesla are all shipping or piloting humanoids. The deployed humanoid fleet is still counted in thousands, most of them Chinese units in laboratories, showrooms and pilots. Hardware is the slow variable: cells at 250 to 300 watt hours per kilogram give a humanoid two to four hours of work, and no robot hand has human-level touch.`,
  indexDefinition: `The index blends five components: manipulation generality (the share of human manual tasks a robot can do at human speed and reliability without task-specific engineering), deployment (the automated share of physical labor hours across factories, logistics, construction and services), hardware relative to physical limits (actuator efficiency and power density against muscle, onboard energy against fat and fuel, tactile sensing against the human hand), manufacturing autonomy (how far production systems can build and repair their own successors), and assembly precision, from millimeters toward atoms. A score of 100 means physical production that is essentially fully automated: self-expanding factories with doubling times of months, dexterity beyond human across all tasks, and routine atomically precise manufacturing. September 2026 sits near 8.`,
  physicalLimits: [
    {
      name: 'Actuator power density, efficiency and heat versus muscle',
      description: `Skeletal muscle delivers peak stresses near 0.35 megapascals, strains of 20 to 40 percent, peak power of roughly 100 to 300 watts per kilogram and chemical to mechanical efficiency of about 20 to 25 percent, and it does this while being compliant, self-repairing and fuelled from fat. Electromagnetic motors already beat muscle on peak power density (several hundred to over a thousand watts per kilogram for the bare motor), but a complete joint module with reducer, bearings, drive electronics and structure lands at 50 to 200 watts per kilogram continuous, and continuous torque is capped by winding temperature: heat scales with current squared while holding a load produces no mechanical work at all, so a standing robot burns energy that an animal spends nearly nothing on. Gearboxes lose 10 to 30 percent, and cyclic loading fatigues steels and composites within millions of cycles. No engineered actuator yet matches muscle on the combination of efficiency across speeds, compliance, self-repair and energy source.`,
      sources: [
        { author: 'John D. W. Madden', title: 'Mobile Robots: Motor Challenges and Materials Solutions', publisher: 'Science', year: 2007 },
        { author: 'Ian W. Hunter and Serge Lafontaine', title: 'A comparison of muscle with artificial actuators', publisher: 'Technical Digest, IEEE Solid-State Sensor and Actuator Workshop', year: 1992 },
        { author: 'Patrick M. Wensing, Albert Wang, Sangok Seok, David Otten, Jeffrey Lang and Sangbae Kim', title: 'Proprioceptive Actuator Design in the MIT Cheetah: Impact Mitigation and High-Bandwidth Physical Interaction for Dynamic Legged Robots', publisher: 'IEEE Transactions on Robotics', year: 2017 },
      ],
    },
    {
      name: 'Onboard energy density',
      description: `Commercial lithium-ion cells hold 250 to 300 watt hours per kilogram, and a finished pack with cooling, casing and electronics about 150 to 200. Body fat stores about 37 megajoules per kilogram, roughly 10,000 watt hours, and hydrocarbon fuels about 12,000. Even after muscle's 20 to 25 percent conversion, an animal carries on the order of 2,500 mechanical watt hours per kilogram of fuel against about 200 for a battery driving an 80 percent efficient motor: a gap of more than ten times. A 2 kilowatt hour humanoid pack weighing 10 to 15 kilograms therefore gives two to four hours of real work at 500 to 1,000 watts, which is why every deployment plan in this field includes swap stations, tethers or shift scheduling. Solid state lithium metal cells may plausibly reach 400 to 500 watt hours per kilogram; lithium-sulfur and lithium-air have theoretical ceilings near 2,500 and 3,500, and practical cells realize a fraction of that.`,
      sources: [
        { author: 'Peter G. Bruce, Stefan A. Freunberger, Laurence J. Hardwick and Jean-Marie Tarascon', title: 'Li-O2 and Li-S batteries with high energy storage', publisher: 'Nature Materials', year: 2012 },
        { author: 'Jurgen Janek and Wolfgang G. Zeier', title: 'A solid future for battery development', publisher: 'Nature Energy', year: 2016 },
      ],
    },
    {
      name: 'Moravec paradox and the sensorimotor gap',
      description: `Moravec observed in 1988 that the abstract reasoning humans find hardest is computationally cheap, while the perception and manipulation a toddler does effortlessly encode a billion years of evolved sensorimotor competence and consume most of the cortex. The practical consequence for robot learning is a data gap. Language models trained on trillions of tokens; the largest open robot manipulation dataset in 2023 (Open X-Embodiment) contained about a million episodes across 22 robot types, and every new trajectory costs wall-clock time on a physical machine that wears out. Simulation helps for rigid bodies but reproduces cloth, liquids, friction and contact only approximately. The gap is not a law of physics, but it means manipulation competence has been bought with orders of magnitude less experience than language competence, and the projections here assume it closes at the rate of data and simulation fidelity, not the rate of compute alone.`,
      sources: [
        { author: 'Hans Moravec', title: 'Mind Children: The Future of Robot and Human Intelligence', publisher: 'Harvard University Press', year: 1988 },
        { author: 'Open X-Embodiment Collaboration', title: 'Open X-Embodiment: Robotic Learning Datasets and RT-X Models', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2310.08864' },
      ],
    },
    {
      name: 'Tactile sensing versus the human hand',
      description: `The glabrous skin of one human hand carries roughly 17,000 mechanoreceptive units, with fingertip densities above 200 units per square centimeter, sensitive to features of tens of micrometers and vibrations up to about a kilohertz, and it repairs itself. Robot touch in 2026 comes either from camera-based elastomer sensors (GelSight and its descendants), which give fine spatial maps at 30 to 60 frames per second through a thick gel that wears and tears, or from sparse arrays of pressure taxels numbering in the tens to hundreds per hand. The binding limits are durability against millions of contacts, abrasion, heat and chemicals; the wiring and bandwidth of dense arrays across a compliant surface; and the absence of self-repair. Manipulation of soft, slippery or deformable objects depends on this channel, so humanoid capability in homes and hospitals is bounded by hand sensing more than by arm strength.`,
      sources: [
        { author: 'Roland S. Johansson and Ake B. Vallbo', title: 'Tactile sensibility in the human hand: relative and absolute densities of four types of mechanoreceptive units in glabrous skin', publisher: 'Journal of Physiology', year: 1979 },
        { author: 'Ravinder S. Dahiya, Giorgio Metta, Maurizio Valle and Giulio Sandini', title: 'Tactile Sensing: From Humans to Humanoids', publisher: 'IEEE Transactions on Robotics', year: 2010 },
        { author: 'Wenzhen Yuan, Siyuan Dong and Edward H. Adelson', title: 'GelSight: High-Resolution Robot Tactile Sensors for Estimating Geometry and Force', publisher: 'Sensors', year: 2017 },
      ],
    },
    {
      name: 'Thermodynamic and kinetic costs of assembly at small scales',
      description: `Thermal energy at room temperature is about 4 times 10 to the minus 21 joules (26 millielectronvolts), far below the 3 to 5 electronvolts of a covalent bond, so atomically precise structures are stable once built; the cost is in building them. A positioning tool must be stiff enough that thermal vibration stays below the target precision, every placement dissipates on the order of an electronvolt, and errors must be caught: Hopfield showed that each factor of improvement in accuracy in biological synthesis is paid for with free energy in proofreading, and a ribosome manages about 20 residues per second at an error rate near one in ten thousand. A kilogram of product holds roughly 5 times 10 to the 25 atoms, so macroscale atomically precise manufacturing needs on the order of a trillion tools working in parallel for a year, with error correction at every level of convergent assembly. This is why the atlas treats molecular manufacturing as a long-horizon question, not a near-term one.`,
      sources: [
        { author: 'K. Eric Drexler', title: 'Nanosystems: Molecular Machinery, Manufacturing, and Computation', publisher: 'Wiley', year: 1992 },
        { author: 'John J. Hopfield', title: 'Kinetic Proofreading: A New Mechanism for Reducing Errors in Biosynthetic Processes Requiring High Specificity', publisher: 'Proceedings of the National Academy of Sciences', year: 1974 },
        { author: 'Rob Phillips, Jane Kondev, Julie Theriot and Hernan Garcia', title: 'Physical Biology of the Cell', publisher: 'Garland Science', year: 2012 },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ */
    /* 2026-2030                                                       */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'robotics-manufacturing',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Humanoid pilots stay pilots; arms, cobots and warehouse fleets do the real work',
      narrative: `In the baseline branch the next four years look like an extrapolation of the last ten with better software. Industrial installations continue at 550,000 to 650,000 a year, China taking more than half and pushing its robot density well past 500 per 10,000 manufacturing workers, with the world operating stock reaching roughly 6 million by 2030. Collaborative arms and autonomous mobile robots are the growth categories, because they slot into existing buildings without redesign. Warehouse automation deepens: Amazon, Ocado, Symbotic and the Chinese platforms field fleets of mobile robots numbering in the millions, and piece-picking arms with camera-based tactile sensing clear a rising share of standard totes.

Humanoids remain a story of pilots. Cumulative worldwide shipments reach the low tens of thousands by 2030, most of them Chinese units priced from about 16,000 dollars upward that go to universities, showrooms and entertainment, with a few thousand working shifts in logistics and automotive plants at 30 to 60 percent of human pace. Vision-language-action models raise success rates on structured benchmark tasks year after year, but the distribution shift problem persists: a policy that reaches 95 percent on a known workcell still fails unpredictably in a novel kitchen, and the data needed to fix that is collected one trajectory at a time. Battery physics keeps shifts short, so every deployment pairs robots with swap stations. Tesla's Optimus works in Tesla's own plants rather than on the open market.

Additive manufacturing grows at a steady 15 to 20 percent a year on aerospace, medical and tooling parts; construction robotics stays with printed foundations, layout marking and bricklaying demonstrations. Labor effects are within noise at the national level, with localized displacement in warehousing offset by hiring elsewhere. The capability index moves from 8 to about 10.`,
      dependencies: ['humanoid-robotics-revival', 'transformer-paper', 'alexnet', 'lithium-ion-battery', 'ford-assembly-line', 'jacquard-loom'],
      uncertainties: [
        'Whether the recent surge in humanoid funding survives a period without commercially convincing deployments.',
        'How much of the Chinese installation total reflects durable demand rather than subsidized overcapacity.',
        'Whether tactile sensors durable enough for millions of contacts arrive in this window.',
      ],
      indicators: [
        'IFR annual installation counts staying above 550,000 signal a healthy industrial core regardless of humanoid progress.',
        'Published deployment data from humanoid pilots (uptime, tasks per hour, interventions per hour) rather than demonstration video.',
        'Prices for capable humanoids falling below about 50,000 dollars without corresponding drops in reliability.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The industrial figures rest on two decades of consistent IFR statistics and the window is short. The humanoid count is the uncertain part, with a factor of three plausible in either direction.',
      sources: [
        { author: 'International Federation of Robotics', title: 'World Robotics 2024: Industrial Robots', publisher: 'IFR Statistical Department', year: 2024 },
        { author: 'Anthony Brohan et al.', title: 'RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2307.15818' },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Robot models reach reliable narrow deployment; humanoids ship in the tens of thousands',
      narrative: `In the accelerated branch the frontier models that matter most for robotics are not the robot models but the coding and reasoning models feeding them. Agentic coding systems that in 2026 could already run multi-hour engineering tasks compress the loop of building simulators, generating training curricula, writing controllers and diagnosing failures, so that robot learning groups that once iterated monthly iterate daily. By 2028 vision-language-action models trained on tens of millions of real trajectories plus far larger simulated corpora pass 95 percent success on the structured tasks that make up most logistics and light assembly work, and more importantly recover gracefully from the remaining failures rather than freezing. That is the threshold at which a robot on a shift needs one remote supervisor per twenty machines rather than one per two.

Humanoid and wheeled-base mobile manipulator shipments climb from a few thousand in 2026 to the tens of thousands per year by 2030, a cumulative fleet on the order of 100,000, with Chinese manufacturers holding most unit volume and American firms holding the highest-value integration contracts. Unit costs fall toward 30,000 to 50,000 dollars for capable machines. Batteries do not change: shifts are still two to four hours between swaps, so the productivity gain comes from 20 hour utilization rather than from speed. Design for robotic assembly starts appearing in product specifications the way design for manufacture did in the 1980s.

Industrial arms grow as in the baseline, but the composition shifts toward machines with learned rather than programmed behavior. Warehouse picking employment in the United States and Europe flattens for the first time. By 2030 the frontier AI systems are two years from the branch's AGI anchor, and what they are visibly doing in robotics is design work: hands, actuators and sensors iterated by systems that read every paper in the field. The index reaches about 11.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', 'transformer-paper', 'alexnet', 'intel-4004', 'ford-assembly-line'],
      uncertainties: [
        'Whether simulation fidelity for contact-rich tasks improves fast enough to substitute for real trajectories.',
        'Whether harmonic drives, rare earth magnets and precision bearings can be supplied at ten times 2025 volume by 2030.',
        'How quickly customers accept remote-supervised fleets in mixed human workplaces after the first serious injury.',
      ],
      indicators: [
        'Publicly reported supervisor-to-robot ratios in commercial deployments rising above one to ten.',
        'Humanoid manufacturers announcing factory capacity above 10,000 units a year with named component suppliers.',
        'Robot policy benchmarks reporting success on held-out task families, not only on tasks seen in training.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The software trajectory follows the observed 2023 to 2026 improvement rate in vision-language-action models. The unit counts depend on supply chains that have never operated at this scale, so the range is wide.',
      sources: [
        { author: 'Kevin Black et al.', title: 'pi0: A Vision-Language-Action Flow Model for General Robot Control', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2410.24164' },
        { author: 'Gemini Robotics Team', title: 'Gemini Robotics: Bringing AI into the Physical World', publisher: 'arXiv', year: 2025, url: 'https://arxiv.org/abs/2503.20020' },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI in 2029 arrives before the robots do; the bottleneck flips from software to hardware',
      narrative: `In the discontinuous branch the decisive events of this window happen in datacenters, not on factory floors. Automated AI research through 2027 and 2028 brings systems to the branch's AGI anchor in 2029, and robot learning, which had been a separate discipline with its own data problems, becomes a subproblem those systems attack directly: they write the simulators, design the curricula, run the real-world data collection fleets and fold the results back. Manipulation policies exceed human reliability on structured tasks by 2029 and handle most novel household tasks at human level by 2030. Moravec's paradox is not repealed, but the data gap that expressed it is closed by machines that can generate and evaluate experience at scale.

What does not change is the physical stock. A humanoid still needs roughly 30 motors, reducers, a battery pack and a frame, and the factories that make those components take two to three years to plan, permit and build. Rare earth magnets, harmonic drives and precision bearings are the visible chokepoints. So by the end of 2030 the deployed fleet of general-purpose robots is perhaps 100,000 to 200,000 units, only modestly above the accelerated branch, while order books and announced factory capacity run an order of magnitude higher. The visible difference from the other branches in 2030 is capital commitment: several firms break ground on plants designed for a million units a year, designed with heavy input from AI systems, and designed from the start to be staffed by the robots they produce.

Industrial arms, warehouse fleets and additive manufacturing follow the accelerated path. Labor markets barely register the change yet; what registers is expectation, as bond markets, unions and legislatures begin pricing a decade in which physical work becomes automatable. The index stands near 12, and the gap to the other branches is mostly latent.`,
      dependencies: ['agentic-coding-tools', 'humanoid-robotics-revival', 'o-series-reasoning-models', 'transformer-paper', 'integrated-circuit', 'arkwright-factory-system'],
      uncertainties: [
        'Whether the software timeline of this branch holds; if AGI slips past 2030 this window collapses into the accelerated branch.',
        'Whether component supply chains can be expanded in parallel with, rather than after, the software breakthrough.',
        'How governments respond to announced million-unit robot plants: subsidy, moratorium or export control.',
      ],
      indicators: [
        'Robot policies demonstrating human-level success on tasks in homes they have never seen, verified by third parties.',
        'Groundbreaking on robot factories with announced capacity above 100,000 units a year.',
        'AI systems credited as primary designers of new actuator or hand architectures in published work.',
      ],
      confidence: 'low',
      confidenceJustification: 'This branch depends on an AGI arrival date that most forecasts in the atlas place later. Conditional on that arrival, the hardware lag described here is well grounded in factory construction times.',
      sources: [
        { author: 'NVIDIA', title: 'GR00T N1: An Open Foundation Model for Generalist Humanoid Robots', publisher: 'arXiv', year: 2025, url: 'https://arxiv.org/abs/2503.14734' },
        { author: 'Hans Moravec', title: 'Mind Children: The Future of Robot and Human Intelligence', publisher: 'Harvard University Press', year: 1988 },
      ],
    },
    /* ------------------------------------------------------------ */
    /* 2030-2040                                                       */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'robotics-manufacturing',
      window: '2030-2040',
      branch: 'slow',
      headline: 'Humanoids find niches, lights-out spreads by design, general manipulation stays hard',
      narrative: `The baseline 2030s are the decade in which humanoids become an ordinary industrial product without becoming a general one. Cumulative shipments reach a few million by 2040, doing tote handling, machine tending, hospital logistics, security patrol and, in Japan and Korea especially, the physical side of elder care logistics. Each niche is won by narrowing the task until a learned policy hits 99 percent, then engineering the surroundings for the remaining percent. Unstructured environments remain out of reach: success on genuinely novel manipulation sits at 70 to 85 percent through the decade, good enough for supervised work and not for an unattended home. Solid state cells at 400 to 500 watt hours per kilogram late in the window stretch shifts to five or six hours; nothing changes the ten times gap to fat.

The industrial core does more of the work. The world operating stock of industrial robots reaches 9 to 11 million, and the more important change is architectural: new electronics, battery and machining plants are designed for robotic assembly from the product drawing onward, so lights-out operation becomes standard for those categories rather than a showcase. Additive manufacturing takes a meaningful share of aerospace and medical parts by value and becomes the default for tooling. Construction automation arrives mostly as factory prefabrication of wall and floor modules, with site robots limited to layout, drilling and printing.

Labor effects stay at the pace economists measured for 1990 to 2020, on the order of a few tenths of a percentage point of employment per additional robot per thousand workers, and are masked in the rich world by shrinking working-age populations. AGI at the branch anchor of 2038 begins to change robot software at the very end of the window, but its effects belong to the next one. The index reaches about 16.`,
      dependencies: ['humanoid-robotics-revival', 'solid-state-battery-progress', '3d-printing', 'transformer-paper', 'containerization', 'ford-assembly-line'],
      uncertainties: [
        'Whether niche humanoid deployments generate enough data to lift general manipulation faster than assumed here.',
        'Whether demographic decline in East Asia and Europe pulls robot adoption forward regardless of capability.',
        'How much lights-out design spreads beyond electronics and machining into food, textiles and assembly of soft goods.',
      ],
      indicators: [
        'Third-party measurements of humanoid success on held-out household tasks crossing 95 percent would mean this branch is too slow.',
        'The share of new factories announced with lights-out operation as a design goal.',
        'Robot density in China and Korea versus manufacturing employment in those countries.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The industrial extrapolation is well grounded, and the humanoid niche pattern mirrors how every previous robot category was adopted. The main risk is that learning progress is faster than the baseline assumes.',
      sources: [
        { author: 'International Federation of Robotics', title: 'World Robotics 2024: Industrial Robots', publisher: 'IFR Statistical Department', year: 2024 },
        { author: 'Daron Acemoglu and Pascual Restrepo', title: 'Robots and Jobs: Evidence from US Labor Markets', publisher: 'Journal of Political Economy', year: 2020 },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'Robot learning solves general manipulation; factories, batteries and permits set the pace',
      narrative: `The accelerated branch reaches its AGI anchor in 2032, and within two or three years general manipulation is, for practical purposes, solved: a robot delivered to a new site learns its tasks from demonstration and instruction in a day and performs them at human reliability, including recovery from the unexpected. From that point the field's pace is set by hardware and construction, and the closest precedent is the electric vehicle: world sales went from a few thousand in 2010 to about 14 million in 2023, and robot production follows a similar curve, from roughly 100,000 general-purpose units in 2030 to several million a year by 2040 and a cumulative fleet of 10 to 20 million. Against 3.5 billion human workers that is under one percent of headcount, but at 20 hours a day and rising skill it is a larger share of physical output, concentrated in logistics, manufacturing, agriculture and construction.

Hardware improves without transcending its limits. Solid state cells at 400 to 500 watt hours per kilogram give six to eight hour shifts. Tactile skins built on the camera-elastomer principle survive millions of contacts. Actuator modules designed with AI assistance approach 300 watts per kilogram continuous, with heat rather than magnets as the limit. Factories for robots are staffed largely by robots by the late 2030s, cutting the build time of a new line from years to months, though the plants themselves still take years to permit. Construction crews of mobile manipulators frame, sheathe and finish buildings in jurisdictions that allow it.

The labor effect is now measurable: warehouse and assembly employment falls 20 to 30 percent in leading economies, offset partly by reshoring as labor cost stops being a reason to produce abroad. The branch's ASI anchor of 2040 arrives at the end of the window, with an industrial base already largely automated for it to work with. The index reaches about 22.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', 'transformer-paper', 'lithium-ion-battery', 'ford-assembly-line', 'arkwright-factory-system'],
      uncertainties: [
        'Whether production can follow the electric vehicle curve given that a robot has roughly ten times as many precision actuators as a car has motors.',
        'Whether tactile durability and hand dexterity keep pace with policy capability or become the new bottleneck.',
        'How much deployment is slowed by liability law, labor politics and permitting for automated sites.',
      ],
      indicators: [
        'Annual general-purpose robot production passing one million units.',
        'Onboarding time for a new task at a new site falling below one day in commercial deployments.',
        'Manufacturing plants announced in high-wage countries citing robot labor cost as the reason.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The software side follows the branch anchors by construction. The deployment curve borrows from electric vehicles and solar, which are the best available precedents for a manufactured good scaling thirty-fold in a decade, but robots are more complex than either.',
      sources: [
        { author: 'International Energy Agency', title: 'Global EV Outlook 2024', publisher: 'IEA', year: 2024 },
        { author: 'Open X-Embodiment Collaboration', title: 'Open X-Embodiment: Robotic Learning Datasets and RT-X Models', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2310.08864' },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superhuman designers meet human-speed construction; build-out curves begin to bend',
      narrative: `The discontinuous branch passes its ASI anchor in 2031, and from then on the design side of robotics is no longer a human activity. Actuators, hands, sensors, control stacks and whole factories are redesigned in weeks by systems that hold the entire literature and can run millions of simulated trials. What those systems cannot do is compress the physical world: a new actuator still needs a magnet supply, a machining line and a qualification cycle, and a plant still needs land, power, permits and concrete that cures at its own pace. The first half of the decade is therefore dominated by build-out, with humanity's construction and mining capacity as the rate limit.

The distinctive feature of this branch is that the limit then starts to move. By the mid 2030s robot factories are built and staffed by robots, and the fraction of a new plant's labor that requires humans falls toward zero, so the doubling time of production capacity shortens from the electric vehicle precedent of two to three years toward twelve to eighteen months. By 2040 the general-purpose robot fleet plausibly stands at 50 to 200 million, drawing on the order of 50 gigawatts of average power, a few percent of world electricity. New actuator classes designed under superhuman guidance, including electrostatic and fluidic artificial muscles, approach muscle's efficiency and compliance by the late 2030s, though batteries remain ten times short of fat.

Constraints are now explicitly material and political. Copper, rare earths and specialty steel supply expand only as fast as mines and refineries can be built; several countries restrict or tax robot deployment; and allocation of the new capacity becomes the central economic question. Molecular manufacturing programs begin in earnest under ASI direction, but the atlas places their macroscale products after 2040. The index reaches about 32.`,
      dependencies: ['agentic-coding-tools', 'humanoid-robotics-revival', 'hyperscale-ai-datacenters', 'transformer-paper', 'integrated-circuit', 'ford-assembly-line'],
      uncertainties: [
        'Whether robot-built factories genuinely shorten doubling times or merely shift the bottleneck to mining, energy and permits.',
        'Whether social and political resistance caps deployment well below what supply chains could deliver.',
        'Whether novel actuators designed by AI systems clear the qualification and fatigue testing that any load-bearing component needs.',
      ],
      indicators: [
        'Measured time from groundbreaking to first output for robot factories falling below one year.',
        'The human share of labor hours inside robot factories reported below ten percent.',
        'Announced mine and refinery expansions for copper and rare earths keyed explicitly to robot demand.',
      ],
      confidence: 'low',
      confidenceJustification: 'Everything here is conditional on ASI in 2031, which the atlas ensemble treats as a low-probability branch. Given that premise, the build-out reasoning rests on well-documented construction and supply chain lead times.',
      sources: [
        { author: 'Vaclav Smil', title: 'Making the Modern World: Materials and Dematerialization', publisher: 'Wiley', year: 2014 },
        { author: 'John D. W. Madden', title: 'Mobile Robots: Motor Challenges and Materials Solutions', publisher: 'Science', year: 2007 },
      ],
    },
    /* ------------------------------------------------------------ */
    /* 2040-2060                                                       */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'robotics-manufacturing',
      window: '2040-2060',
      branch: 'slow',
      headline: 'AGI in 2038 finally cracks manipulation; deployment follows a twenty-year S-curve',
      narrative: `In the baseline branch this is the window in which robotics catches up with what the other branches did a decade or two earlier. AGI-level systems from 2038 close the sensorimotor data gap in the early 2040s by generating and evaluating experience at scale, and by the mid 2040s a delivered robot learns a new site in a day. Deployment then follows the same S-curve the accelerated branch traced in the 2030s, but against a larger and older industrial base: general-purpose robots reach tens of millions in the late 2040s and a few hundred million by 2060, with production capacity doubling every two to three years as factories are progressively staffed by their own output.

Hardware progress is steady rather than dramatic. Batteries stabilize near 500 watt hours per kilogram at the cell, so shifts of eight to ten hours become normal and swap infrastructure becomes as ordinary as charging. Actuators designed with AI assistance reach muscle's efficiency at variable load by the 2050s, and durable tactile skins with human-scale receptor density are standard on commercial hands. Lights-out production is the default for discrete manufacturing, and site construction is largely robotic in permissive jurisdictions. Additive processes are one tool among many, used where geometry justifies them.

The labor transition is real but cushioned by demographics: working-age populations in Japan, Korea, China and most of Europe shrink through this window, so robots fill vacancies as much as they displace workers, and the political response focuses on distribution rather than on prohibition. Molecular manufacturing remains a research field. ASI at the branch anchor of 2058 arrives into a world whose physical production is already mostly automated at the macroscale, which is the substrate the next window builds on. The index reaches about 30.`,
      dependencies: ['humanoid-robotics-revival', 'transformer-paper', 'lithium-ion-battery', 'containerization', 'ford-assembly-line', 'arkwright-factory-system'],
      uncertainties: [
        'Whether AGI arriving in 2038 closes the manipulation gap within a few years or whether physical data collection still takes a decade.',
        'Whether shrinking workforces in rich countries keep the politics of automation calm as assumed here.',
        'Whether the capital cost of re-tooling a mature industrial base slows adoption relative to greenfield build-out elsewhere.',
      ],
      indicators: [
        'Onboarding time for new robot tasks falling below one day in commercial settings during the early 2040s.',
        'General-purpose robot fleet size passing ten million.',
        'Working-age population trends in the largest manufacturing economies versus robot adoption rates.',
      ],
      confidence: 'low',
      confidenceJustification: 'Two decades out, the shape of the curve is more defensible than its timing. The physical limits on batteries and actuators are well established; the adoption rate depends on economics and politics that could move it by a decade.',
      sources: [
        { author: 'McKinsey Global Institute', title: 'A Future That Works: Automation, Employment, and Productivity', publisher: 'McKinsey Global Institute', year: 2017 },
        { author: 'David H. Autor', title: 'Why Are There Still So Many Jobs? The History and Future of Workplace Automation', publisher: 'Journal of Economic Perspectives', year: 2015 },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'Large-scale physical automation: robots outnumber workers in factories and logistics',
      narrative: `With the accelerated branch's ASI anchor at 2040, this window is the one in which physical automation goes from significant to dominant. The general-purpose robot fleet grows from 10 to 20 million in 2040 to hundreds of millions by 2050 and on the order of a billion by 2060, drawing several hundred gigawatts of average power. Robots outnumber human workers in manufacturing and logistics in the leading economies before 2050. The mechanism is the self-expanding factory: fully automated plants whose output includes the machines, tooling and construction robots for the next plant, with capacity doubling every one to two years, bounded by mining, energy, land and permits rather than by labor.

Hardware finally approaches its physical limits on several axes. Actuator modules designed by superhuman systems match muscle on efficiency and compliance and exceed it on power density, though self-repair is approximated by modular replacement rather than achieved. Tactile skins exceed the human fingertip in spatial resolution and match it in bandwidth. Batteries plateau in the 500 to 700 watt hour per kilogram range as lithium-sulfur chemistries mature, still well short of fat, so fleets are designed around swap and tether. Construction is robotic from excavation to finish where regulation permits, and housing cost in those places converges toward material and land cost. Additive, subtractive and assembly processes are chosen by AI planners per part.

Molecular manufacturing moves from research to early engineering: scanning-probe mechanosynthesis of small covalent structures and DNA-origami-directed assembly of functional materials are demonstrated, and nanoscale-engineered materials enter production, but a macroscale atomically precise product is not yet made. The labor share of physical work falls below ten percent of employment in rich countries; the distribution of the output becomes the defining political question, treated in the governance field. The index reaches about 45.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', '3d-printing', 'lithium-ion-battery', 'ford-assembly-line', 'arkwright-factory-system'],
      uncertainties: [
        'Whether mining and refining can expand fast enough to feed factory doubling times of one to two years.',
        'Whether a billion robots by 2060 is politically permitted, or capped by law well below what is technically feasible.',
        'Whether the error-correction problem in molecular assembly yields to engineering within this window.',
      ],
      indicators: [
        'First fully automated plant documented as having built the majority of its successor plant.',
        'Copper and rare earth production growth rates exceeding their long-run historical trends by a factor of two or more.',
        'Peer-reviewed demonstrations of positionally controlled covalent synthesis beyond single-atom experiments.',
      ],
      confidence: 'low',
      confidenceJustification: 'The direction is well supported by the branch anchors and by the physical limits. The magnitudes, particularly the fleet size and doubling time, could differ by a factor of three depending on material supply and political choices.',
      sources: [
        { author: 'Robert A. Freitas Jr. and Ralph C. Merkle', title: 'Kinematic Self-Replicating Machines', publisher: 'Landes Bioscience', year: 2004 },
        { author: 'Vaclav Smil', title: 'Making the Modern World: Materials and Dematerialization', publisher: 'Wiley', year: 2014 },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2040-2060',
      branch: 'fast',
      headline: 'Robots build robots at scale; industrial doubling times fall toward months',
      narrative: `In the discontinuous branch superhuman systems have been directing physical engineering for a decade when this window opens, and the fleet already numbers in the hundreds of millions. The 2040s are the decade of the self-expanding industrial base. Doubling times for production capacity fall from about a year toward six months as robots handle every step from ore to finished machine, and the fleet passes a billion units before 2050. What bounds it is not labor or design but throughput of matter and energy: world steel output was about 1.9 billion tonnes and copper about 25 million tonnes a year in the 2020s, and multiplying those by ten means opening mines, smelters and power plants on a scale that takes years per site even with robotic crews, plus heat rejection, water and ecological constraints, plus permits and political consent that no amount of intelligence can compel.

Hardware exceeds muscle on every metric except self-repair by the mid 2040s, and by the 2050s modular self-maintenance approximates that too. Batteries remain the exception, plateauing near chemistry ceilings well below fat, which keeps tethered and swap-based designs in use. Molecular manufacturing is the frontier that opens: positional assembly with error correction is demonstrated in the 2040s, nanofactory-style convergent assembly yields the first macroscale atomically precise products in the 2050s, and materials engineered at the atomic level (diamondoid structural elements, engineered catalysts, dense energy storage approaching the limits noted in the energy field) enter production late in the window.

Human physical labor becomes optional in most of the world during the 2040s. The political settlement around ownership of the industrial base, the pace of resource extraction and off-world expansion (treated in the space field) determines how much of the technical capacity is actually used. The index reaches about 62.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', '3d-printing', 'integrated-circuit', 'arkwright-factory-system', 'oldowan-tools'],
      uncertainties: [
        'Whether material and energy throughput can grow tenfold in two decades even with fully robotic construction and mining.',
        'Whether political limits on extraction and ecological protection cap the build-out at a fraction of technical capacity.',
        'Whether macroscale atomically precise manufacturing proves feasible on this timescale or hits unforeseen error-rate barriers.',
      ],
      indicators: [
        'Documented capacity doubling times for automated industrial complexes below one year.',
        'Primary metal production growth exceeding ten percent a year for several consecutive years.',
        'Independent verification of a macroscale object assembled with atomic precision throughout.',
      ],
      confidence: 'low',
      confidenceJustification: 'Conditional on the branch premise, the reasoning follows from build-out physics and the self-replication literature, but the premise is the least likely in the ensemble and the material constraints could easily bind harder than assumed.',
      sources: [
        { author: 'K. Eric Drexler', title: 'Nanosystems: Molecular Machinery, Manufacturing, and Computation', publisher: 'Wiley', year: 1992 },
        { author: 'Robert A. Freitas Jr. and William P. Gilbreath (editors)', title: 'Advanced Automation for Space Missions', publisher: 'NASA Conference Publication 2255', year: 1982 },
      ],
    },
    /* ------------------------------------------------------------ */
    /* 2060-2090                                                       */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'robotics-manufacturing',
      window: '2060-2090',
      branch: 'slow',
      headline: 'ASI in 2058 meets a mature robot economy; the frontier moves to scale and precision',
      narrative: `The baseline branch enters this window with a few hundred million general-purpose robots, lights-out manufacturing as the norm, and superhuman systems newly available from 2058. The pattern that follows resembles what the accelerated branch experienced in the 2040s, compressed somewhat by the head start on hardware. Self-expanding factories become the organizing principle of heavy industry in the 2060s, with capacity doubling times falling toward a year and the fleet passing a billion units in the 2070s. Actuators and sensors reach their physical ceilings: muscle-equivalent efficiency and compliance, tactile resolution beyond the human hand, and modular self-maintenance in place of biological self-repair. Batteries sit at chemistry limits far below fat, and the field has long since stopped treating that as a problem to solve rather than a constraint to design around.

Molecular manufacturing is the new frontier. Superhuman research programs from the 2060s demonstrate error-corrected positional assembly and, by the 2080s, the first macroscale atomically precise products, arriving in this branch roughly thirty years after they arrive in the discontinuous one. The binding limits are those described in the field's physical limits section: thermal noise, the free energy cost of proofreading, and the sheer number of operations needed per kilogram, all of which set the throughput and energy cost of nanofactories rather than forbidding them.

Human physical labor becomes a choice rather than a necessity across most of the world in the 2060s, later in regions that industrialized late, and the material intensity of the economy is set by resource, ecological and political limits rather than by manufacturing capacity. By 2090 the branch's index is about 48, with the wide range reflecting how much of the technical capacity societies choose to build.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', 'ford-assembly-line', 'arkwright-factory-system', 'jacquard-loom', 'oldowan-tools'],
      uncertainties: [
        'Whether superhuman systems arriving in 2058 close the molecular manufacturing gap in decades or find it harder than the discontinuous branch assumes.',
        'How much industrial expansion societies permit once the human labor rationale for it has disappeared.',
        'Whether ecological limits on extraction, water and heat rejection bind before the technical limits do.',
      ],
      indicators: [
        'Automated industrial complexes documented as building their own successors without human labor.',
        'Error-corrected positional assembly published for structures larger than a few thousand atoms.',
        'The share of global material throughput governed by explicit political caps rather than by cost.',
      ],
      confidence: 'low',
      confidenceJustification: 'At thirty to sixty years out only the ordering of milestones and the physical limits are defensible. Dates within the window mark an ordering of milestones, not predictions.',
      sources: [
        { author: 'K. Eric Drexler', title: 'Nanosystems: Molecular Machinery, Manufacturing, and Computation', publisher: 'Wiley', year: 1992 },
        { author: 'John von Neumann (edited by Arthur W. Burks)', title: 'Theory of Self-Reproducing Automata', publisher: 'University of Illinois Press', year: 1966 },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'Self-expanding industry and the first atomically precise products',
      narrative: `In the accelerated branch the macroscale problem is finished by 2060: about a billion general-purpose robots, factories that build factories, and hardware at its physical limits on efficiency, sensing and power density, with onboard energy the one axis still an order of magnitude short of biology. The window's work is at two scales the previous decades could not reach.

At the small scale, molecular manufacturing matures. The demonstrations of the 2050s become engineering in the 2060s: positional assembly with error correction at every level of a convergent hierarchy, throughput limited by the electronvolt-per-operation energy cost and the trillion-tool parallelism that a kilogram per year per nanofactory implies. First macroscale atomically precise products appear in the 2060s or 2070s: structural materials near theoretical strength, catalysts and membranes designed atom by atom, and storage and computing elements at the limits noted in the materials and compute fields. The cost of most manufactured goods falls toward the cost of energy and feedstock, and the distinction between manufacturing and chemistry blurs.

At the large scale, the industrial base is ten to a hundred times its 2026 size by material throughput, which is possible only because the energy field's projections provide hundreds of terawatts and because closed-loop recycling replaces most primary extraction. Constraints are heat rejection, water, land, ecological protection and political consent, all of which are decided rather than discovered. Off-world industry, covered in the space field, absorbs a growing fraction of expansion precisely because those constraints are looser there.

Human involvement in physical production is by choice and mostly for the pleasure of making things. The index reaches about 66 by 2090, with the range reflecting how much of the technical ceiling societies elect to occupy.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', '3d-printing', 'arkwright-factory-system', 'jacquard-loom', 'oldowan-tools'],
      uncertainties: [
        'Whether atomically precise manufacturing of macroscale objects is achievable at useful throughput, or remains limited to small high-value components.',
        'How the energy and heat budget of a hundredfold larger industrial base is reconciled with climate and ecological limits.',
        'Whether ownership of self-expanding industry concentrates or distributes, which determines how much gets built.',
      ],
      indicators: [
        'Independent verification of a macroscale atomically precise product in commercial use.',
        'Global material throughput trends decoupling from primary extraction through closed-loop recycling.',
        'The fraction of industrial expansion located off Earth.',
      ],
      confidence: 'low',
      confidenceJustification: 'The sequence follows from the branch anchors and the physical limits, but every date carries a decade or more of uncertainty and the political choices that dominate this window are not forecastable.',
      sources: [
        { author: 'K. Eric Drexler', title: 'Nanosystems: Molecular Machinery, Manufacturing, and Computation', publisher: 'Wiley', year: 1992 },
        { author: 'Robert A. Freitas Jr. and Ralph C. Merkle', title: 'Kinematic Self-Replicating Machines', publisher: 'Landes Bioscience', year: 2004 },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Manufactured goods approach post-scarcity, bounded by atoms, joules and consent',
      narrative: `In the discontinuous branch the technical problems of manufacturing are solved by 2060: billions of robots, industrial doubling times of months where permitted, hardware at every physical ceiling except battery chemistry, and atomically precise manufacturing already producing macroscale goods. What remains for this window is the question of what a civilization with unlimited manufacturing capacity chooses to make, and the answer is set entirely by constraints outside the field.

The first constraint is matter. Closed-loop recycling and atomically precise disassembly mean that most goods are made from what previous goods were made from, and primary extraction on Earth falls even as output rises; the space field describes the off-world sources that supply net growth. The second is energy and heat: manufacturing at this scale draws a large fraction of the hundreds of terawatts the energy field projects, and every joule ends as waste heat that must be rejected without warming the planet, which caps terrestrial industry at a level that is decided by climate models rather than by engineering. The third is consent: political choices about ecological protection, about how much of the Earth's surface is given over to industry, and about who owns self-expanding capital are the actual determinants of the index in this branch, and the range on the capability points is wide for that reason.

Within those bounds, robotics and manufacturing cease to be a distinct field. Production is a utility, like water, whose cost is dominated by energy and feedstock, and whose design is done by systems that have exceeded human capability for decades. Human beings make things for the same reasons they play music. The remaining technical frontier is self-repair and biological-grade integration: machines that heal like tissue rather than by module swap, and manufacturing that runs at ambient temperature in water like a cell. The index stands near 80 by 2090.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', 'haber-bosch', 'arkwright-factory-system', 'jacquard-loom', 'oldowan-tools'],
      uncertainties: [
        'Whether terrestrial heat rejection and ecological limits cap manufacturing well below technical capacity.',
        'Whether ownership of unlimited manufacturing capacity is broadly distributed or narrowly held.',
        'Whether self-repairing, biologically integrated machines prove achievable or remain a distinct category from engineered ones.',
      ],
      indicators: [
        'Primary terrestrial extraction of major metals declining while manufactured output rises.',
        'Explicit planetary heat budgets appearing in industrial policy.',
        'Demonstrations of engineered systems that repair structural damage without module replacement.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the least likely branch of the ensemble at its most speculative horizon. The physical constraints named are firm; nothing else here is more than an ordering of plausible developments.',
      sources: [
        { author: 'K. Eric Drexler', title: 'Nanosystems: Molecular Machinery, Manufacturing, and Computation', publisher: 'Wiley', year: 1992 },
        { author: 'Vaclav Smil', title: 'Making the Modern World: Materials and Dematerialization', publisher: 'Wiley', year: 2014 },
      ],
    },
    /* ------------------------------------------------------------ */
    /* 2090-2126                                                       */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'robotics-manufacturing',
      window: '2090-2126',
      branch: 'slow',
      headline: 'Convergence: the baseline reaches the accelerated branch of the 2070s by the 2120s',
      narrative: `By the end of the century the baseline branch has had superhuman systems for over three decades, and the distinction between it and the faster branches is one of timing rather than kind. Macroscale production has been fully automated for a generation; self-expanding industrial complexes operate on Earth and, as the space field describes, beyond it; and atomically precise manufacturing, first demonstrated at macroscale in the 2080s, matures through the 2090s into a general capability. The last technical frontiers are the ones the other branches reached earlier: self-repair without module replacement, machines that run ambient wet chemistry like cells, and integration of engineered and biological systems that the biotech and materials fields describe.

What remains uncertain is not capability but choice. The physical limits catalogued for this field, actuator efficiency, onboard energy, tactile density, thermal noise and the free energy cost of error correction, are all reached or designed around by 2100. The limits that bind are planetary: the heat rejection budget of a civilization using hundreds of terawatts, the share of land and ocean left to ecosystems, the recycling rate of matter, and political decisions about ownership and about how much to build. A society that chooses a modest material footprint sits near the low end of the range; one that expands off-world sits near the high end, and the atlas cannot distinguish between them a century ahead.

The index reaches about 62 by 2126, with a range from 40 to 80 that is deliberately wide. The value states that the baseline branch, given a further thirty-five years, arrives roughly where the accelerated branch stood in the 2070s, having spent longer at each stage and having made the transition with less disruption to human institutions along the way.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', 'ford-assembly-line', 'arkwright-factory-system', 'jacquard-loom', 'oldowan-tools'],
      uncertainties: [
        'Whether a civilization with superhuman systems for decades still resembles the one that makes the choices assumed here.',
        'Whether the material footprint of the economy is chosen to grow, hold or shrink once manufacturing capacity is no longer a constraint.',
        'Whether unforeseen limits on atomically precise manufacturing keep it confined to specialized products.',
      ],
      indicators: [
        'Atomically precise manufacturing reported as a routine industrial process rather than a laboratory achievement.',
        'Planetary heat and material budgets treated as the primary constraint in industrial planning.',
        'The proportion of new industrial capacity built off Earth.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the physical limits and the claim of convergence across branches are defensible. The numbers are an ordering, not a forecast.',
      sources: [
        { author: 'John von Neumann (edited by Arthur W. Burks)', title: 'Theory of Self-Reproducing Automata', publisher: 'University of Illinois Press', year: 1966 },
        { author: 'Hans Moravec', title: 'Mind Children: The Future of Robot and Human Intelligence', publisher: 'Harvard University Press', year: 1988 },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'Manufacturing at the limits of chemistry; the frontier moves off Earth',
      narrative: `In the accelerated branch the century closes with manufacturing as a mature utility. Atomically precise production, achieved at macroscale in the 2060s or 2070s, is routine by 2100 for any product whose value justifies the energy cost, and conventional bulk processes persist for the rest because moving an atom at a time is never the cheapest way to make a brick. The general-purpose robot fleet is measured in billions and is no longer counted separately from the rest of the built environment, in the way that electric motors stopped being counted in the twentieth century. Hardware sits at its physical ceilings: actuators at muscle-equivalent efficiency and beyond, sensing past biological density, self-maintenance through both modular replacement and, from the 2090s, engineered self-repair that borrows from biology.

Terrestrial industry is bounded by the planetary budgets the other branches also meet: heat rejection, ecological land share, closed-loop recycling rates and political consent. Net expansion therefore moves off Earth, where the space field projects the industrial base growing on material from the Moon and asteroids and energy unconstrained by a planet's heat balance. Manufacturing on Earth stabilizes at a scale set by choice and by climate, with a material throughput that may be a hundred times that of 2026 or a tenth of it depending on decisions the atlas cannot forecast.

The last open technical question is the one this field started with in the twentieth century: whether machines can match the combination of efficiency, self-repair, ambient operation and energy density that biology achieves, or whether the two remain complementary. By 2100 the accelerated branch has answered most of it, with engineered systems exceeding biology on power and precision and approaching it on integration. The index reaches about 78 by 2126.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', '3d-printing', 'arkwright-factory-system', 'jacquard-loom', 'oldowan-tools'],
      uncertainties: [
        'Whether off-world industry absorbs expansion as assumed or terrestrial limits are simply accepted as caps.',
        'Whether engineered self-repair reaches biological performance or remains a partial approximation.',
        'How much of the technical ceiling a civilization chooses to occupy once material scarcity has ended.',
      ],
      indicators: [
        'Off-world material throughput exceeding terrestrial primary extraction.',
        'Engineered self-repair demonstrated in load-bearing structures under continuous service.',
        'Terrestrial manufacturing throughput stabilizing under explicit planetary budgets.',
      ],
      confidence: 'low',
      confidenceJustification: 'Everything here beyond the physical limits is speculative. The value of the projection is in naming the constraints that will still apply, not in the dates.',
      sources: [
        { author: 'K. Eric Drexler', title: 'Nanosystems: Molecular Machinery, Manufacturing, and Computation', publisher: 'Wiley', year: 1992 },
        { author: 'Robert A. Freitas Jr. and William P. Gilbreath (editors)', title: 'Advanced Automation for Space Missions', publisher: 'NASA Conference Publication 2255', year: 1982 },
      ],
    },
    {
      fieldId: 'robotics-manufacturing',
      window: '2090-2126',
      branch: 'fast',
      headline: 'A century in: physical production is solved, and its limits are planetary and chosen',
      narrative: `In the discontinuous branch the century ends nearly seventy years after manufacturing became a solved technical problem, and the field as the atlas defines it has been at its ceiling for decades. The index of 88 by 2126 rather than 100 reflects two things. The first is the residual physical limits that no design escapes: onboard chemical energy storage remains far below fat, so mobile machines in this branch are fuelled, tethered, swapped or built around ambient power rather than around batteries; the free energy cost of error correction and the electronvolt-per-operation cost of assembly set a floor on the energy price of atomically precise goods; and heat rejection bounds how much of that can happen on Earth. The second is the wide range in what a civilization with superhuman systems for nearly a century chooses to build, which the atlas cannot forecast and does not pretend to.

Robotics has dissolved into infrastructure. Machines that repair themselves like tissue, that run wet chemistry at ambient temperature like cells, and that integrate with biological systems have existed since the 2070s, and the distinction between manufactured and grown is mostly historical. The self-expanding industrial base is concentrated off Earth, where the space field places the bulk of the material and energy budget, and terrestrial industry has settled at whatever level the planetary heat and ecological budgets and the political settlement permit.

What this window offers the reader is not a prediction but a statement of the boundary. Every physical limit named in this field is either reached or designed around. The remaining variables, the size of the material footprint, the location of industry and the ownership of capital, are choices, and a reference work written in 2026 can identify them as choices without knowing how they will be made. The range from 65 to 97 on the index is the honest expression of that.`,
      dependencies: ['humanoid-robotics-revival', 'agentic-coding-tools', 'haber-bosch', 'arkwright-factory-system', 'jacquard-loom', 'oldowan-tools'],
      uncertainties: [
        'Whether the political settlement around ownership of self-expanding industry persists or is renegotiated repeatedly.',
        'Whether terrestrial industry is kept small by choice or expanded to the limit of heat rejection.',
        'Whether limits not anticipated in 2026 constrain manufacturing at the molecular scale.',
      ],
      indicators: [
        'The fraction of the industrial base located off Earth.',
        'Terrestrial waste heat as a share of the planetary budget appearing in industrial policy.',
        'Grown and manufactured goods becoming indistinguishable in industrial classification.',
      ],
      confidence: 'low',
      confidenceJustification: 'The least likely branch at the furthest horizon. The physical limits are the only firm content; the rest states what the boundaries would be, not what happens within them.',
      sources: [
        { author: 'K. Eric Drexler', title: 'Nanosystems: Molecular Machinery, Manufacturing, and Computation', publisher: 'Wiley', year: 1992 },
        { author: 'John von Neumann (edited by Arthur W. Burks)', title: 'Theory of Self-Reproducing Automata', publisher: 'University of Illinois Press', year: 1966 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 8, low: 7, high: 9 },
      { year: 2030, value: 10, low: 9, high: 11 },
      { year: 2040, value: 16, low: 13, high: 20 },
      { year: 2060, value: 30, low: 22, high: 40 },
      { year: 2090, value: 48, low: 32, high: 64 },
      { year: 2126, value: 62, low: 40, high: 80 },
    ],
    moderate: [
      { year: 2026, value: 8, low: 7, high: 9 },
      { year: 2030, value: 11, low: 10, high: 13 },
      { year: 2040, value: 22, low: 17, high: 28 },
      { year: 2060, value: 45, low: 32, high: 58 },
      { year: 2090, value: 66, low: 46, high: 82 },
      { year: 2126, value: 78, low: 55, high: 92 },
    ],
    fast: [
      { year: 2026, value: 8, low: 7, high: 9 },
      { year: 2030, value: 12, low: 10, high: 15 },
      { year: 2040, value: 32, low: 22, high: 45 },
      { year: 2060, value: 62, low: 42, high: 80 },
      { year: 2090, value: 80, low: 58, high: 94 },
      { year: 2126, value: 88, low: 65, high: 97 },
    ],
  },
  sources: [
    { author: 'International Federation of Robotics', title: 'World Robotics 2024: Industrial Robots', publisher: 'IFR Statistical Department', year: 2024 },
    { author: 'Hans Moravec', title: 'Mind Children: The Future of Robot and Human Intelligence', publisher: 'Harvard University Press', year: 1988 },
    { author: 'John D. W. Madden', title: 'Mobile Robots: Motor Challenges and Materials Solutions', publisher: 'Science', year: 2007 },
    { author: 'Anthony Brohan et al.', title: 'RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2307.15818' },
    { author: 'Open X-Embodiment Collaboration', title: 'Open X-Embodiment: Robotic Learning Datasets and RT-X Models', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2310.08864' },
    { author: 'Kevin Black et al.', title: 'pi0: A Vision-Language-Action Flow Model for General Robot Control', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2410.24164' },
    { author: 'Moo Jin Kim et al.', title: 'OpenVLA: An Open-Source Vision-Language-Action Model', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2406.09246' },
    { author: 'K. Eric Drexler', title: 'Nanosystems: Molecular Machinery, Manufacturing, and Computation', publisher: 'Wiley', year: 1992 },
  ],
  lastReviewed: '2026-09-04',
};
