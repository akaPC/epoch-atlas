import type { Convergence } from '../schema';

export const convergences: Convergence[] = [
  {
    id: 'ai-biotech',
    name: 'AI plus biotechnology',
    fieldIds: ['compute-ai', 'biotech-longevity', 'medicine-neurotech'],
    description:
      'Machine learning systems that design proteins, predict drug behaviour and run automated laboratories collide with gene editing and cell therapy platforms that can act on the designs. The convergence turns biology from an observational science with long trial cycles into an engineering discipline with a design loop.',
    mechanism:
      'Structure prediction (AlphaFold and successors) and generative protein design supply candidates; automated wet labs and organoid screens test them at scale; base and prime editing and lipid nanoparticle delivery put validated edits into patients. The rate-limiting step moves from discovery to clinical validation and manufacturing, which AI compresses less. Convergence is dated to the decade in which AI-designed therapeutics become a routine fraction of approvals rather than exceptional cases.',
    decade: { slow: 2040, moderate: 2030, fast: 2030 },
    dependencies: ['alphafold-2', 'casgevy-crispr-therapy', 'crispr-discovery', 'transformer-paper', 'human-genome-completion', 'dna-double-helix'],
    sources: [
      { author: 'Jumper, J. et al.', title: 'Highly accurate protein structure prediction with AlphaFold', publisher: 'Nature', year: 2021, url: 'https://doi.org/10.1038/s41586-021-03819-2' },
      { author: 'Watson, J. L. et al.', title: 'De novo design of protein structure and function with RFdiffusion', publisher: 'Nature', year: 2023, url: 'https://doi.org/10.1038/s41586-023-06415-8' },
      { author: 'Anzalone, A. V. et al.', title: 'Search-and-replace genome editing without double-strand breaks or donor DNA', publisher: 'Nature', year: 2019, url: 'https://doi.org/10.1038/s41586-019-1711-4' },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'fusion-desalination',
    name: 'Fusion and cheap firm power plus desalination',
    fieldIds: ['energy', 'climate-engineering', 'agriculture-food'],
    description:
      'Desalination and water transport are energy problems: the thermodynamic minimum for seawater desalination is about 1 kWh per cubic metre and practical reverse osmosis uses 3 to 4. When firm electricity from fusion, advanced fission or solar plus storage falls below a few cents per kWh, fresh water becomes a manufactured commodity at continental scale, reshaping agriculture in arid regions.',
    mechanism:
      'Cheap firm power lowers the cost of reverse osmosis, brine handling and pumping over elevation. Fusion pilot plants (if they succeed in the 2030s) and gigawatt-scale solar with long-duration storage both qualify; the convergence does not require fusion specifically. Coupled with autonomous farming and engineered crops, this enables irrigation of land that is currently marginal. The binding constraints are capital, brine disposal ecology and water rights.',
    decade: { slow: 2060, moderate: 2050, fast: 2040 },
    dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-power', 'silicon-solar-cell', 'irrigation'],
    sources: [
      { author: 'Elimelech, M. and Phillip, W. A.', title: 'The Future of Seawater Desalination: Energy, Technology, and the Environment', publisher: 'Science', year: 2011, url: 'https://doi.org/10.1126/science.1200488' },
      { author: 'International Energy Agency', title: 'World Energy Outlook 2024', publisher: 'IEA', year: 2024, url: 'https://www.iea.org/reports/world-energy-outlook-2024' },
      { author: 'Abu-Shawareb, H. et al.', title: 'Achievement of Target Gain Larger than Unity in an Inertial Fusion Experiment', publisher: 'Physical Review Letters', year: 2024, url: 'https://doi.org/10.1103/PhysRevLett.132.065102' },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'robotics-space',
    name: 'Robotics plus space',
    fieldIds: ['robotics-manufacturing', 'space-launch', 'materials-nano'],
    description:
      'General-purpose robots that can build, repair and manufacture without human presence remove the largest cost of off-Earth activity: keeping people alive there. Combined with cheap heavy launch, robotic construction of lunar and orbital infrastructure becomes an industrial project rather than a series of expeditions.',
    mechanism:
      'Robot foundation models trained on Earth transfer to teleoperated then autonomous work in orbit and on the Moon, where light-speed delay (1.3 seconds to the Moon, minutes to Mars) forces autonomy. Starship-class launch supplies mass at a few hundred dollars per kilogram. In-situ resource use (regolith sintering, oxygen extraction) closes the loop. Convergence is dated to the decade in which a robotic facility off Earth expands its own capacity without a crewed mission.',
    decade: { slow: 2060, moderate: 2050, fast: 2040 },
    dependencies: ['humanoid-robotics-revival', 'starship-flights', 'falcon-9-booster-landing', 'apollo-11', 'transformer-paper'],
    sources: [
      { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Origins, Worlds, and Life: A Decadal Strategy for Planetary Science and Astrobiology 2023-2032', publisher: 'National Academies Press', year: 2022, url: 'https://doi.org/10.17226/26522' },
      { author: 'Jones, H. W.', title: 'The Recent Large Reduction in Space Launch Cost', publisher: '48th International Conference on Environmental Systems', year: 2018 },
      { author: 'Open X-Embodiment Collaboration', title: 'Open X-Embodiment: Robotic Learning Datasets and RT-X Models', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2310.08864' },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'ai-materials-energy',
    name: 'AI-driven materials discovery plus energy storage',
    fieldIds: ['materials-nano', 'energy', 'transportation'],
    description:
      'Autonomous laboratories guided by machine learning shorten the discovery-to-qualification cycle for battery electrolytes, cathodes, catalysts and photovoltaic absorbers. Where each new battery chemistry once took a decade or more from paper to product, the loop compresses toward years, which changes the trajectory of storage cost and therefore of transport and the grid.',
    mechanism:
      'Graph networks and generative models propose candidate compounds; robotic synthesis and characterization test hundreds per day; results feed back into the model. The compression applies to discovery and screening; scale-up, cell manufacturing and safety qualification remain slow. Convergence is dated to the decade in which a commercially deployed storage chemistry traces its origin to an AI-led discovery loop.',
    decade: { slow: 2040, moderate: 2040, fast: 2030 },
    dependencies: ['solid-state-battery-progress', 'lithium-ion-battery', 'alexnet', 'volta-battery', 'perovskite-tandem-solar'],
    sources: [
      { author: 'Merchant, A. et al.', title: 'Scaling deep learning for materials discovery', publisher: 'Nature', year: 2023, url: 'https://doi.org/10.1038/s41586-023-06735-9' },
      { author: 'Szymanski, N. J. et al.', title: 'An autonomous laboratory for the accelerated synthesis of novel materials', publisher: 'Nature', year: 2023, url: 'https://doi.org/10.1038/s41586-023-06734-w' },
      { author: 'Janek, J. and Zeier, W. G.', title: 'A solid future for battery development', publisher: 'Nature Energy', year: 2016, url: 'https://doi.org/10.1038/nenergy.2016.141' },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'quantum-chemistry-ai',
    name: 'Fault-tolerant quantum simulation plus AI chemistry',
    fieldIds: ['quantum', 'materials-nano', 'biotech-longevity'],
    description:
      'Quantum computers with enough logical qubits to simulate strongly correlated molecules (nitrogenase, high-temperature superconductors, catalysts) supply ground truth that classical methods approximate poorly. Machine learning models trained on that data extend it to the broader chemical space. The convergence is a chemistry engine that neither technology provides alone.',
    mechanism:
      'Resource estimates for simulating FeMoco and similar systems require on the order of a million physical qubits at current error rates, or far fewer with better codes. Once available, quantum outputs become training and calibration data for classical models, which do the bulk of screening. Convergence is dated to the decade in which a quantum-derived result changes an industrial process.',
    decade: { slow: 2050, moderate: 2040, fast: 2040 },
    dependencies: ['quantum-error-correction', 'alphafold-2', 'transistor', 'planck-quantum', 'haber-bosch'],
    sources: [
      { author: 'Reiher, M. et al.', title: 'Elucidating reaction mechanisms on quantum computers', publisher: 'Proceedings of the National Academy of Sciences', year: 2017, url: 'https://doi.org/10.1073/pnas.1619152114' },
      { author: 'Google Quantum AI and Collaborators', title: 'Quantum error correction below the surface code threshold', publisher: 'Nature', year: 2024, url: 'https://doi.org/10.1038/s41586-024-08449-y' },
      { author: 'Preskill, J.', title: 'Quantum Computing in the NISQ era and beyond', publisher: 'Quantum', year: 2018, url: 'https://doi.org/10.22331/q-2018-08-06-79' },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'agents-networks-governance',
    name: 'AI agents plus networks plus institutions',
    fieldIds: ['compute-ai', 'communication-networks', 'governance-economy'],
    description:
      'When most network traffic is agents negotiating with agents, and firms and agencies run on those agents, the institutions that govern commerce, law and public administration have to change shape. Contract, liability, identity and audit all assume a human at each end.',
    mechanism:
      'Agent-to-agent protocols, provenance standards and machine-readable law emerge first as private infrastructure, then as regulation. Institutions that adopt AI decision support become faster than those that do not, creating pressure to converge. The convergence is dated to the decade in which a major jurisdiction recognizes AI agents as parties in routine transactions with defined liability.',
    decade: { slow: 2050, moderate: 2040, fast: 2030 },
    dependencies: ['agentic-coding-tools', 'chatgpt', 'world-wide-web', 'tcp-ip', 'cuneiform'],
    sources: [
      { author: 'Sastry, G. et al.', title: 'Computing Power and the Governance of Artificial Intelligence', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2402.08797' },
      { author: 'Dafoe, A.', title: 'AI Governance: A Research Agenda', publisher: 'Centre for the Governance of AI, University of Oxford', year: 2018 },
      { author: 'European Parliament and Council', title: 'Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)', publisher: 'Official Journal of the European Union', year: 2024, url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'neurotech-networks',
    name: 'Brain-computer interfaces plus networks',
    fieldIds: ['medicine-neurotech', 'communication-networks', 'compute-ai'],
    description:
      'High-bandwidth implanted and non-invasive interfaces, first for paralysis and speech restoration, meet networks and AI decoders that turn neural signals into text, speech and control. The long-horizon question is whether mediated brain-to-brain or brain-to-AI communication exceeds the bandwidth of speech and typing for healthy users.',
    mechanism:
      'Speech neuroprostheses already decode at tens of words per minute with implanted arrays; decoders improve with model scale; interface channel counts rise with thin-film electrodes. Thermal limits in neural tissue and surgical risk bound the invasive path; signal-to-noise bounds the non-invasive path. Convergence is dated to the decade in which a BCI channel exceeds typing bandwidth for a non-medical user population.',
    decade: { slow: 2070, moderate: 2050, fast: 2040 },
    dependencies: ['glp-1-agonists', 'transformer-paper', 'mri-scanner', 'transistor', 'telephone'],
    sources: [
      { author: 'Willett, F. R. et al.', title: 'A high-performance speech neuroprosthesis', publisher: 'Nature', year: 2023, url: 'https://doi.org/10.1038/s41586-023-06377-x' },
      { author: 'Musk, E. and Neuralink', title: 'An Integrated Brain-Machine Interface Platform With Thousands of Channels', publisher: 'Journal of Medical Internet Research', year: 2019, url: 'https://doi.org/10.2196/16194' },
      { author: 'Marblestone, A. H. et al.', title: 'Physical principles for scalable neural recording', publisher: 'Frontiers in Computational Neuroscience', year: 2013, url: 'https://doi.org/10.3389/fncom.2013.00137' },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'autonomy-security',
    name: 'Autonomous systems plus AI cyber plus security',
    fieldIds: ['weapons-security', 'robotics-manufacturing', 'compute-ai'],
    description:
      'Cheap autonomous platforms, AI-driven vulnerability discovery and AI-enabled command systems collide in the security domain. The offence-defence balance in the air, at sea, in networks and in space becomes a function of software and manufacturing throughput rather than of platform cost.',
    mechanism:
      'Mass-produced drones with onboard autonomy, automated cyber tooling and decision-support systems that compress the observe-orient-decide-act loop are each visible in 2026. Convergence is dated to the decade in which major militaries field integrated autonomous formations, and in which AI-discovered vulnerabilities and AI-generated patches dominate the cyber balance. This atlas records capability and risk, not advocacy.',
    decade: { slow: 2040, moderate: 2030, fast: 2030 },
    dependencies: ['compute-export-controls', 'humanoid-robotics-revival', 'alexnet', 'gps', 'radar', 'chinese-gunpowder'],
    sources: [
      { author: 'Scharre, P.', title: 'Four Battlegrounds: Power in the Age of Artificial Intelligence', publisher: 'W. W. Norton', year: 2023 },
      { author: 'Stockholm International Peace Research Institute', title: 'SIPRI Yearbook 2025: Armaments, Disarmament and International Security', publisher: 'Oxford University Press', year: 2025 },
      { author: 'United States Department of Defense', title: 'DoD Directive 3000.09: Autonomy in Weapon Systems', publisher: 'US Department of Defense', year: 2023 },
    ],
    lastReviewed: '2026-09-04',
  },
  {
    id: 'ai-climate',
    name: 'AI plus energy plus carbon removal',
    fieldIds: ['climate-engineering', 'energy', 'compute-ai'],
    description:
      'Carbon removal at gigatonne scale is limited by energy cost and by the engineering of sorbents, minerals and reactors. AI-driven materials discovery and cheap clean energy together lower the cost of direct air capture and enhanced weathering, while AI climate models sharpen the attribution and monitoring that any removal or radiation-management scheme requires.',
    mechanism:
      'Sorbent and catalyst discovery loops, process optimization and grid integration cut removal costs from several hundred dollars per tonne toward the energy floor. Monitoring satellites and learned climate emulators provide verification. Convergence is dated to the decade in which engineered removal exceeds one gigatonne per year.',
    decade: { slow: 2060, moderate: 2050, fast: 2040 },
    dependencies: ['perovskite-tandem-solar', 'hyperscale-ai-datacenters', 'haber-bosch', 'electric-grid', 'controlled-fire'],
    sources: [
      { author: 'Smith, S. M. et al.', title: 'The State of Carbon Dioxide Removal 2024, 2nd Edition', publisher: 'University of Oxford', year: 2024, url: 'https://www.stateofcdr.org' },
      { author: 'Keith, D. W. et al.', title: 'A Process for Capturing CO2 from the Atmosphere', publisher: 'Joule', year: 2018, url: 'https://doi.org/10.1016/j.joule.2018.05.006' },
      { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Negative Emissions Technologies and Reliable Sequestration: A Research Agenda', publisher: 'National Academies Press', year: 2019, url: 'https://doi.org/10.17226/25259' },
    ],
    lastReviewed: '2026-09-04',
  },
];
