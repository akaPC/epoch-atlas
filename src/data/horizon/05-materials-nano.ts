import type { HorizonField, Source } from '../schema';

/* ------------------------------------------------------------------ */
/* Shared citations                                                    */
/* ------------------------------------------------------------------ */

const GNOME: Source = {
  author: 'Merchant, A., Batzner, S., Schoenholz, S. S., Aykol, M., Cheon, G. and Cubuk, E. D.',
  title: 'Scaling deep learning for materials discovery',
  publisher: 'Nature',
  year: 2023,
  url: 'https://www.nature.com/articles/s41586-023-06735-9',
};
const ALAB: Source = {
  author: 'Szymanski, N. J. et al.',
  title: 'An autonomous laboratory for the accelerated synthesis of novel materials',
  publisher: 'Nature',
  year: 2023,
  url: 'https://www.nature.com/articles/s41586-023-06734-w',
};
const LEEMAN: Source = {
  author: 'Leeman, J., Liu, Y., Stiles, J., Lee, S. B., Bhatt, P., Schoop, L. M. and Palgrave, R. G.',
  title: 'Challenges in high-throughput inorganic materials prediction and autonomous synthesis',
  publisher: 'PRX Energy',
  year: 2024,
};
const CHEETHAM: Source = {
  author: 'Cheetham, A. K. and Seshadri, R.',
  title: 'Artificial Intelligence Driving Materials Discovery? Perspective on the Article: Scaling Deep Learning for Materials Discovery',
  publisher: 'Chemistry of Materials',
  year: 2024,
};
const MATTERGEN: Source = {
  author: 'Zeni, C. et al.',
  title: 'A generative model for inorganic materials design',
  publisher: 'Nature',
  year: 2025,
};
const ABOLHASANI: Source = {
  author: 'Abolhasani, M. and Kumacheva, E.',
  title: 'The rise of self-driving labs in chemistry and materials science',
  publisher: 'Nature Synthesis',
  year: 2023,
};
const BURGER: Source = {
  author: 'Burger, B. et al.',
  title: 'A mobile robotic chemist',
  publisher: 'Nature',
  year: 2020,
};
const GRAPHENE: Source = {
  author: 'Lee, C., Wei, X., Kysar, J. W. and Hone, J.',
  title: 'Measurement of the Elastic Properties and Intrinsic Strength of Monolayer Graphene',
  publisher: 'Science',
  year: 2008,
  url: 'https://www.science.org/doi/10.1126/science.1157996',
};
const CNT80: Source = {
  author: 'Bai, Y. et al.',
  title: 'Carbon nanotube bundles with tensile strength over 80 GPa',
  publisher: 'Nature Nanotechnology',
  year: 2018,
};
const IIJIMA: Source = {
  author: 'Iijima, S.',
  title: 'Helical microtubules of graphitic carbon',
  publisher: 'Nature',
  year: 1991,
};
const FRENKEL: Source = {
  author: 'Frenkel, J.',
  title: 'Zur Theorie der Elastizitaetsgrenze und der Festigkeit kristallinischer Koerper',
  publisher: 'Zeitschrift fuer Physik',
  year: 1926,
};
const GRIFFITH: Source = {
  author: 'Griffith, A. A.',
  title: 'The Phenomena of Rupture and Flow in Solids',
  publisher: 'Philosophical Transactions of the Royal Society A',
  year: 1921,
};
const KELLY: Source = {
  author: 'Kelly, A. and Macmillan, N. H.',
  title: 'Strong Solids',
  publisher: 'Oxford University Press',
  year: 1986,
};
const ZHU: Source = {
  author: 'Zhu, T. and Li, J.',
  title: 'Ultra-strength materials',
  publisher: 'Progress in Materials Science',
  year: 2010,
};
const ENGINES: Source = {
  author: 'Drexler, K. E.',
  title: 'Engines of Creation: The Coming Era of Nanotechnology',
  publisher: 'Anchor Press/Doubleday',
  year: 1986,
};
const NANOSYSTEMS: Source = {
  author: 'Drexler, K. E.',
  title: 'Nanosystems: Molecular Machinery, Manufacturing, and Computation',
  publisher: 'Wiley',
  year: 1992,
};
const SMALLEY: Source = {
  author: 'Smalley, R. E.',
  title: 'Of Chemistry, Love and Nanobots',
  publisher: 'Scientific American',
  year: 2001,
};
const BAUM: Source = {
  author: 'Baum, R.',
  title: 'Nanotechnology: Drexler and Smalley make the case for and against molecular assemblers',
  publisher: 'Chemical and Engineering News',
  year: 2003,
};
const FEYNMAN: Source = {
  author: 'Feynman, R. P.',
  title: "There's Plenty of Room at the Bottom",
  publisher: 'Engineering and Science (California Institute of Technology)',
  year: 1960,
};
const ROTHEMUND: Source = {
  author: 'Rothemund, P. W. K.',
  title: 'Folding DNA to create nanoscale shapes and patterns',
  publisher: 'Nature',
  year: 2006,
};
const WHITESIDES: Source = {
  author: 'Whitesides, G. M. and Grzybowski, B.',
  title: 'Self-Assembly at All Scales',
  publisher: 'Science',
  year: 2002,
};
const HOPFIELD: Source = {
  author: 'Hopfield, J. J.',
  title: 'Kinetic Proofreading: A New Mechanism for Reducing Errors in Biosynthetic Processes Requiring High Specificity',
  publisher: 'Proceedings of the National Academy of Sciences',
  year: 1974,
};
const ASHBY: Source = {
  author: 'Ashby, M. F.',
  title: 'Materials Selection in Mechanical Design',
  publisher: 'Butterworth-Heinemann',
  year: 2011,
};
const ASHBY_ENV: Source = {
  author: 'Ashby, M. F.',
  title: 'Materials and the Environment: Eco-informed Material Choice',
  publisher: 'Butterworth-Heinemann',
  year: 2012,
};
const H3S: Source = {
  author: 'Drozdov, A. P., Eremets, M. I., Troyan, I. A., Ksenofontov, V. and Shylin, S. I.',
  title: 'Conventional superconductivity at 203 kelvin at high pressures in the sulfur hydride system',
  publisher: 'Nature',
  year: 2015,
  url: 'https://www.nature.com/articles/nature14964',
};
const LAH10: Source = {
  author: 'Somayazulu, M. et al.',
  title: 'Evidence for Superconductivity above 260 K in Lanthanum Superhydride at Megabar Pressures',
  publisher: 'Physical Review Letters',
  year: 2019,
};
const PICKARD: Source = {
  author: 'Pickard, C. J., Errea, I. and Eremets, M. I.',
  title: 'Superconducting Hydrides Under Pressure',
  publisher: 'Annual Review of Condensed Matter Physics',
  year: 2020,
};
const BCS: Source = {
  author: 'Bardeen, J., Cooper, L. N. and Schrieffer, J. R.',
  title: 'Theory of Superconductivity',
  publisher: 'Physical Review',
  year: 1957,
};
const MCMILLAN: Source = {
  author: 'McMillan, W. L.',
  title: 'Transition Temperature of Strong-Coupled Superconductors',
  publisher: 'Physical Review',
  year: 1968,
};
const LK99: Source = {
  author: 'Garisto, D.',
  title: "LK-99 isn't a superconductor: how sleuths solved the mystery",
  publisher: 'Nature',
  year: 2023,
};
const JANEK2023: Source = {
  author: 'Janek, J. and Zeier, W. G.',
  title: 'Challenges in speeding up solid-state battery development',
  publisher: 'Nature Energy',
  year: 2023,
};
const JANEK2016: Source = {
  author: 'Janek, J. and Zeier, W. G.',
  title: 'A solid future for battery development',
  publisher: 'Nature Energy',
  year: 2016,
};
const IEA_EV: Source = {
  author: 'International Energy Agency',
  title: 'Global EV Outlook 2025',
  publisher: 'IEA',
  year: 2025,
  url: 'https://www.iea.org/reports/global-ev-outlook-2025',
};
const NREL: Source = {
  author: 'National Renewable Energy Laboratory',
  title: 'Best Research-Cell Efficiency Chart',
  publisher: 'NREL',
  year: 2025,
  url: 'https://www.nrel.gov/pv/cell-efficiency',
};
const DEBROY: Source = {
  author: 'DebRoy, T. et al.',
  title: 'Additive manufacturing of metallic components: Process, structure and properties',
  publisher: 'Progress in Materials Science',
  year: 2018,
};
const FRAZIER: Source = {
  author: 'Frazier, W. E.',
  title: 'Metal Additive Manufacturing: A Review',
  publisher: 'Journal of Materials Engineering and Performance',
  year: 2014,
};
const ELLINGHAM: Source = {
  author: 'Ellingham, H. J. T.',
  title: 'Reducibility of oxides and sulphides in metallurgical processes',
  publisher: 'Journal of the Society of Chemical Industry',
  year: 1944,
};
const ALLWOOD: Source = {
  author: 'Allwood, J. M. and Cullen, J. M.',
  title: 'Sustainable Materials: With Both Eyes Open',
  publisher: 'UIT Cambridge',
  year: 2012,
};
const GUTOWSKI: Source = {
  author: 'Gutowski, T. G., Sahni, S., Allwood, J. M., Ashby, M. F. and Worrell, E.',
  title: 'The energy required to produce materials: constraints on energy-intensity improvements, parameters of demand',
  publisher: 'Philosophical Transactions of the Royal Society A',
  year: 2013,
};
const UNEP: Source = {
  author: 'Graedel, T. E. et al., UNEP International Resource Panel',
  title: 'Recycling Rates of Metals: A Status Report',
  publisher: 'United Nations Environment Programme',
  year: 2011,
};
const DOE_CM: Source = {
  author: 'U.S. Department of Energy',
  title: 'Critical Materials Assessment',
  publisher: 'U.S. Department of Energy',
  year: 2023,
};
const MGI: Source = {
  author: 'National Science and Technology Council',
  title: 'Materials Genome Initiative Strategic Plan',
  publisher: 'Executive Office of the President of the United States',
  year: 2021,
};
const NGUYEN: Source = {
  author: 'Nguyen, P. Q., Courchesne, N. M. D., Duraj-Thatte, A., Praveschotinunt, P. and Joshi, N. S.',
  title: 'Engineered Living Materials: Prospects and Challenges for Using Biological Systems to Direct the Assembly of Smart Materials',
  publisher: 'Advanced Materials',
  year: 2018,
};
const WEGST: Source = {
  author: 'Wegst, U. G. K., Bai, H., Saiz, E., Tomsia, A. P. and Ritchie, R. O.',
  title: 'Bioinspired structural materials',
  publisher: 'Nature Materials',
  year: 2015,
};
const PENDRY: Source = {
  author: 'Pendry, J. B.',
  title: 'Negative Refraction Makes a Perfect Lens',
  publisher: 'Physical Review Letters',
  year: 2000,
};

/* ------------------------------------------------------------------ */
/* Field                                                               */
/* ------------------------------------------------------------------ */

export const field: HorizonField = {
  id: 'materials-nano',
  index: 5,
  name: 'Materials and Nanotechnology',
  code: 'MATERIALS',
  summary: `Materials science in September 2026 is a field where the search has become cheap and the making has not. Graph neural networks trained on density functional theory data (GNoME, 2023) proposed about 2.2 million crystal structures and predicted about 381,000 of them to be stable, roughly a tenfold expansion of the known set, while autonomous laboratories such as Berkeley's A-Lab showed that a robot could plan and run solid-state syntheses without a human in the loop. Both results drew sharp critiques: many predicted compounds are disordered variants of known ones, and independent analysis argued that several A-Lab products were misidentified. Meanwhile the economically important materials problems remain problems of kinetics, defects, cost and qualification. Solid-state batteries have reached pilot lines but not volume production. Perovskite-silicon tandem cells exceed 34 percent certified efficiency but must still prove 25-year durability. Room-temperature superconductivity exists only above about 150 GPa, and the LK-99 episode of 2023 showed how quickly claims can outrun evidence. Metal additive manufacturing is a mature niche. Atomically precise manufacturing remains where the Drexler and Smalley exchange left it: DNA origami and synthetic molecular machines are real, general-purpose assemblers are not.`,
  indexDefinition: `The index measures how close routinely deployable materials capability sits to physical envelopes, averaged across five axes: structural efficiency (specific strength and toughness relative to ideal strengths, read against the Ashby property charts), functional performance (superconducting transition temperature at usable pressure, electrochemical energy density, photonic and thermal control relative to theoretical bounds), time from prediction to qualified deployment, manufacturing precision (feature size and defect rate relative to atomic placement), and circularity (energy of production relative to the Gibbs free energy minimum, and closed-loop recovery). Zero is Oldowan flint. One hundred is the plausible ceiling: bulk materials near ideal strength, atomically precise fabrication at industrial rates, refining near the thermodynamic minimum, and superconductivity resolved at whatever ceiling physics allows.`,
  physicalLimits: [
    {
      name: 'Ideal strength ceiling',
      description: `Frenkel's 1926 estimate puts the theoretical shear strength of a perfect crystal near G/10 and the tensile strength near E/10, where E is Young's modulus. For graphene (E about 1 TPa) the measured intrinsic strength is about 130 GPa (Lee et al. 2008), close to that bound; for steel (E about 200 GPa) the ideal is about 20 GPa, against 2 to 5 GPa for wires. Bulk materials fall short because a macroscopic volume always contains flaws, and Griffith's criterion makes strength scale with the inverse square root of flaw size. Nanotube bundles reach 80 GPa at centimetre length; spun fibres stay in the low gigapascal range. The ceiling is the bond; the practical limit is the flaw distribution.`,
      sources: [FRENKEL, GRAPHENE, GRIFFITH, CNT80, KELLY],
    },
    {
      name: 'Thermodynamics of self-assembly and error rates',
      description: `Any assembly step that must choose the right component or site against wrong ones does so with an error probability of order exp(-dG/kT), where dG is the free-energy difference between right and wrong outcomes and kT is about 4.1e-21 J (2.5 kJ/mol) at 300 K. A discrimination of 10 kT gives roughly one error in 20,000; reaching one in a million needs about 14 kT per step, or kinetic proofreading, which buys accuracy by spending free energy and time (Hopfield 1974). Biology pays this cost continuously. Any atomically precise manufacturing scheme faces the same arithmetic: error rate, speed and energy per operation trade against one another, and no design escapes the trade.`,
      sources: [HOPFIELD, WHITESIDES, NANOSYSTEMS, SMALLEY],
    },
    {
      name: 'Diffusion and kinetics',
      description: `Solids change by atoms moving, and atoms move slowly. Diffusion coefficients in solids at processing temperatures range from about 1e-12 to below 1e-20 m2/s, so the time to homogenize or transform a length L scales as L squared over D: microseconds for nanometres, hours for millimetres, geological time for metres at room temperature. Nucleation, sintering, crystal growth, precipitation and creep all carry activation energies that set minimum times at any temperature. Prediction can be instantaneous; a material still has to be made, and made in tonnes, which is why scale-up takes years even when discovery takes days. Faster search does not change the Arrhenius factor.`,
      sources: [JANEK2023, DEBROY, ASHBY],
    },
    {
      name: 'Constraints on superconductivity',
      description: `BCS theory ties the transition temperature to a characteristic phonon frequency times exp(-1/lambda) for weak coupling, and the McMillan and Allen-Dynes formulas extend this to strong coupling. High Tc by this mechanism wants light atoms, stiff bonds and strong electron-phonon coupling, which is why hydrogen-rich compounds under 150 to 200 GPa hold the record: H3S at 203 K (Drozdov et al. 2015) and LaH10 near 250 to 260 K. No theorem forbids an ambient-pressure room-temperature superconductor, and the cuprates and other unconventional families are not bound by the phonon formula, but any candidate must be stable at one atmosphere, and every ambient room-temperature claim to date, LK-99 included, has failed replication.`,
      sources: [BCS, MCMILLAN, H3S, LAH10, PICKARD, LK99],
    },
    {
      name: 'Energy cost of refining',
      description: `Turning ore into metal costs at least the Gibbs free energy of reduction, mapped by Ellingham in 1944: about 6.6 MJ per kg of iron from hematite, about 19 MJ per kg of titanium from rutile, about 29 MJ per kg of aluminium from alumina. Industrial practice sits at roughly two to three times these floors for iron and aluminium and five or more for titanium. Recycling avoids reduction but not separation, which has its own entropic minimum that rises with the dilution of the target element in the scrap stream. These numbers, not the cleverness of the search that found the alloy, set the energy budget of a materials economy.`,
      sources: [ELLINGHAM, GUTOWSKI, ALLWOOD, ASHBY_ENV],
    },
  ],
  projections: [
    /* ---------------------------------------------------------------- */
    /* 2026-2030                                                        */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'materials-nano',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Screening gets cheap, making stays slow; the products of 2030 were designed before 2025',
      narrative: `In the baseline branch the years to 2030 look like an extension of 2023 to 2026. Machine-learned interatomic potentials and generative crystal models make screening nearly free: a group with a modest cluster can rank tens of thousands of candidate compositions in a week, where a decade earlier that took a national facility. GNoME's 381,000 predicted stable structures and the successors that followed it remain mostly unsynthesized, because the rate-limiting step is not prediction but making a phase-pure sample, characterizing it, and finding a reason anyone would pay for it. Self-driving laboratories spread from perhaps a dozen serious installations to several dozen, each running hundreds of samples a week in narrow chemistries (oxide powders, thin films, polymer formulations, electrolytes). Their published hit rates improve as the community absorbs the critiques of the A-Lab work, in particular the need for rigorous phase identification rather than automated Rietveld fitting alone.

On the ground, the materials in products shipping in 2030 were selected before 2025. Solid-state lithium batteries reach pilot lines in Japan, Korea, China and the United States at scales well under 1 GWh per year, with sulfide electrolytes and lithium-metal anodes limited by dendrite growth and stack-pressure requirements; conventional lithium-ion, now manufactured at several terawatt-hours per year of global capacity, keeps improving at a few percent a year. Perovskite-silicon tandems, certified above 34 percent in the laboratory, enter niche modules while the field waits for 25-year durability data. Carbon nanotube fibres remain in the low gigapascal range at yarn scale, far below the 80 GPa measured on centimetre bundles. Metal additive manufacturing grows steadily in aerospace and medical implants. Hydride superconductors stay above 100 GPa, and no ambient-pressure room-temperature claim survives replication.`,
      dependencies: ['solid-state-battery-progress', 'alphafold-2', 'lithium-ion-battery', 'bessemer-steel', 'iron-smelting', 'oldowan-tools'],
      uncertainties: [
        'The true fraction of GNoME-class predictions that are genuinely new, synthesizable and useful is unknown, and could be under one percent.',
        'Solid-state battery pilot lines may stall on cost and yield rather than on chemistry, which would delay the branch rather than change it.',
        'A replicated ambient-pressure superconductor above 77 K would move the field onto the accelerated branch within a year, whatever AI does.',
      ],
      indicators: [
        'Count of independently replicated, structurally verified compounds first proposed by a machine-learning model rather than by a human.',
        'Announced versus achieved solid-state cell output in gigawatt-hours per year, reported by the manufacturers rather than by press releases.',
        'Number of self-driving laboratories publishing closed-loop campaigns with raw diffraction data attached.',
        'Certified efficiency and field degradation rates of perovskite-silicon tandem modules, as distinct from small cells.',
      ],
      confidence: 'high',
      confidenceJustification: 'The window is short and dominated by capital already committed. The chemistry of the bottlenecks (dendrites, interfacial resistance, phase purity) is well understood, and there is no plausible route for AI to bypass synthesis and qualification in four years.',
      sources: [GNOME, ALAB, LEEMAN, JANEK2023, NREL],
    },
    {
      fieldId: 'materials-nano',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Agentic research tools enter materials labs; first end-to-end automated discoveries land',
      narrative: `In the accelerated branch the late 2020s bring language-model agents into the materials workflow rather than only into screening. Systems that read the literature, propose synthesis routes, drive robotic platforms and interpret diffraction and spectroscopy data become standard at leading laboratories by 2028. The difference from the baseline is integration, not new physics: a campaign that took a graduate student three years (define target, find precursor route, optimize, characterize, publish) compresses to months for well-behaved chemistries such as oxide ceramics, metal-organic frameworks, polymer electrolytes and thin-film coatings. Several hundred self-driving laboratories operate worldwide by 2030, and the first commercial materials whose composition was chosen by a closed loop (a catalyst formulation, an electrolyte additive, an optical coating) reach market, though each still passes through conventional scale-up.

What does not compress is the physical chain after discovery. A new cathode chemistry still needs a pilot line, a qualification cycle of two to four years for automotive use, and a supply chain for its precursors. Solid-state batteries reach low-volume production in premium vehicles by 2029 to 2030 in this branch, with cell energy densities in the 400 Wh/kg class but at costs well above incumbent lithium-ion. Metal additive manufacturing benefits directly from AI process control, since the defect physics of laser powder-bed fusion (keyholing, lack of fusion, residual stress) is exactly the kind of high-dimensional sensor problem that learned models handle well, and part qualification for flight-critical hardware accelerates. Superconductivity work becomes systematic: automated searches over ternary and quaternary hydrides find phases with lower stabilization pressures, but nothing at ambient. The LK-99 lesson holds; extraordinary claims wait for independent samples.`,
      dependencies: ['agentic-coding-tools', 'solid-state-battery-progress', '3d-printing', 'alphafold-2', 'integrated-circuit', 'bessemer-steel'],
      uncertainties: [
        'Whether agentic systems can interpret ambiguous characterization data (mixed phases, amorphous fractions) as reliably as an expert is unresolved and determines the hit rate of closed loops.',
        'Commercial secrecy may hide the first AI-chosen materials, making the branch hard to distinguish from the baseline in public data until 2030.',
        'Solid-state battery costs could remain two to three times lithium-ion at the end of the window, confining them to niches.',
      ],
      indicators: [
        'Published closed-loop campaigns in which the target, route and interpretation were all machine-generated and the product was independently verified.',
        'Time from first synthesis report to first qualified commercial use for a coating, catalyst or electrolyte discovered after 2026.',
        'Regulatory or standards-body acceptance of in-process sensor data as part of additive manufacturing part qualification.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The tools exist in 2026 and the direction is clear, but the pace at which laboratories integrate them and the yield of closed loops are both uncertain by a factor of two or more. Physical bottlenecks after discovery are well characterized and bound the upside.',
      sources: [ABOLHASANI, ALAB, MATTERGEN, DEBROY],
    },
    {
      fieldId: 'materials-nano',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI near 2029; materials labs become the first test of whether ideas or atoms bind',
      narrative: `In the discontinuous branch general-purpose AI systems reach roughly human-level research competence around 2029, and materials science is an early test of what that changes. By 2030 the leading laboratories run continuous automated research: models generate hypotheses, design experiments, operate the robotic hardware, read the results and revise. The number of candidate materials with a plausible synthesis route grows by orders of magnitude within a year. Yet the picture on the ground in 2030 differs only modestly from the other branches, and this is the central lesson of the field: the products, plants and supply chains of 2030 were fixed years earlier. Ideas can be produced at electronic speed; a sintering run still takes hours, a crystal growth run days, a corrosion test months, and a fatigue qualification years.

The visible differences by 2030 are in throughput and in what counts as a result. Automated platforms in the best-funded laboratories process thousands of samples per day. Analytical bottlenecks (electron microscopy, synchrotron beamtime) become the scarce resource and are scheduled by the same systems. Phase identification errors of the kind that dogged early autonomous laboratories fall sharply, because the models are better at diffraction analysis than the fitting software was. The first materials designed end-to-end by AI systems enter pilot production in electrolytes, catalysts and coatings. In superconductivity, the models produce a systematic map of hydride and non-hydride candidates with computed stabilization pressures; whether an ambient-pressure high-Tc phase appears on that map is not yet known in 2030. Structural materials, batteries at volume and semiconductor-grade purity remain where physical plants put them. The branch's real divergence begins after 2030.`,
      dependencies: ['agentic-coding-tools', 'solid-state-battery-progress', 'alphafold-2', 'transistor', 'iron-smelting', 'oldowan-tools'],
      uncertainties: [
        'The arrival of AGI-class systems by 2029 is itself the largest uncertainty; the materials consequences follow from it rather than adding to it.',
        'Analytical instrument capacity, not compute, may cap the throughput of automated research, and instrument build times are measured in years.',
        'Whether the first-principles accuracy of current density functional methods is sufficient for the systems to trust their own predictions across the periodic table is an open question.',
        'A materials result of major economic consequence within this window would require a discovery in a class with an existing manufacturing route, which limits the candidates.',
      ],
      indicators: [
        'Samples per day processed by the largest automated materials platforms, and the fraction of published results that came from them.',
        'Waiting time for electron microscopy and synchrotron beamtime at national facilities, as a measure of the analytical bottleneck.',
        'Appearance of materials patents whose inventors of record are institutions rather than named chemists.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Conditional on the branch premise, the near-term materials picture is well constrained by physical lead times, so the on-the-ground description is fairly robust. The premise itself carries the uncertainty, and the branch is the least probable of the three.',
      sources: [GNOME, ALAB, ABOLHASANI, BURGER],
    },
    /* ---------------------------------------------------------------- */
    /* 2030-2040                                                        */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'materials-nano',
      window: '2030-2040',
      branch: 'slow',
      headline: 'Autonomous labs become infrastructure; discovery-to-deployment falls toward a decade',
      narrative: `The baseline branch reaches human-level AI only near the end of this window (about 2038), so the 2030s are the decade in which the tools of the late 2020s become ordinary. Every serious materials department and corporate laboratory runs closed-loop synthesis; the interesting question is no longer whether a machine can find a new compound but whether the compound can be made in tonnes. The historical discovery-to-deployment interval for a structural or functional material, typically 15 to 25 years from first report to first significant product (lithium cobalt oxide 1980 to 1991, blue gallium nitride LEDs 1993 to about 2000, carbon fibre roughly 1960 to 1980), falls toward 8 to 12 years for classes where the failure modes are well characterized and the manufacturing route is a variant of an existing one.

Batteries illustrate the pattern. Solid-state cells move from premium vehicles into mainstream models by the late 2030s, driven less by novel chemistry than by manufacturing learning curves; sodium-ion and lithium iron phosphate variants take the low-cost end. Recycling becomes a materials problem in its own right as the first terawatt-hour-scale wave of lithium-ion packs reaches end of life; hydrometallurgical recovery of lithium, nickel and cobalt above 90 percent becomes standard in the major markets. Perovskite tandems enter volume production once the durability question is answered by fielded data. Nanotube and graphene-reinforced composites reach engineering fibres in the 5 to 10 GPa range, a real gain over the roughly 7 GPa of the best carbon fibre grades but still far below the 80 GPa bundle-scale result and the 130 GPa intrinsic graphene figure. Metal additive manufacturing is qualified for a wide range of flight-critical and pressure-retaining parts. Hydride superconductors remain a high-pressure laboratory subject; the search for ambient-pressure phases proceeds without a decisive result.`,
      dependencies: ['solid-state-battery-progress', 'perovskite-tandem-solar', '3d-printing', 'lithium-ion-battery', 'bakelite', 'bessemer-steel'],
      uncertainties: [
        'Whether AI-designed alloys can be qualified for structural aerospace use within the window depends on certification bodies accepting computed evidence, which they have historically resisted.',
        'Sodium-ion and other cheap chemistries may take enough of the market to slow solid-state scale-up by starving it of volume.',
        'A high-pressure hydride phase that is quench-recoverable to ambient pressure would change the superconductivity picture without any new theory.',
      ],
      indicators: [
        'Number of materials first reported after 2025 that are in qualified commercial use by 2040, and the median interval.',
        'Gigawatt-hours of solid-state cells shipped per year and the cost per kilowatt-hour relative to lithium-ion.',
        'Engineering-scale (metre-length, continuous) tensile strength of the best commercial nanotube or graphene fibre.',
        'Fraction of end-of-life lithium-ion mass entering formal recycling in the three largest markets.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The mechanisms (learning curves, recycling volumes, qualification cycles) are well understood and the branch assumes no discontinuity, so the shape is credible. Specific numbers for fibre strength and solid-state market share could be off by a factor of two.',
      sources: [JANEK2023, IEA_EV, CNT80, UNEP, DEBROY],
    },
    {
      fieldId: 'materials-nano',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'Automated research from 2032 makes discovery a design service; plants still take years',
      narrative: `With AGI-class systems arriving around 2032 and superintelligence by about 2040, the accelerated branch spends this decade learning what superhuman research does and does not do for materials. Its effect on the discovery step is decisive: by the mid 2030s a firm can specify a target property set (ionic conductivity, thermal expansion, optical bandgap, cost per kilogram) and receive within weeks a ranked list of candidates with computed stability, a synthesis route validated on a robotic platform, and an honest estimate of scale-up risk. Materials design becomes a service resembling contract semiconductor design. Discovery-to-deployment for well-behaved classes (electrolytes, catalysts, coatings, photonic structures, thermoelectrics, non-safety-critical alloys) falls to three to five years, dominated by pilot plants and customer qualification rather than by research.

The classes that do not compress are those where failure is slow or catastrophic. Aerospace alloys, nuclear structural materials, biomedical implants and grid-scale storage all require long-duration testing that no model replaces, although models shorten it by directing testing at the predicted weak points and by making digital qualification credible enough that regulators in the late 2030s accept computed evidence for part of the case. Structural fibre performance moves into the 10 to 20 GPa range at engineering scale as defect control in nanotube spinning becomes an optimization problem the systems solve. Superconductivity research produces a nearly exhaustive map of the accessible chemical space by 2040; in this branch the most likely outcome is one or more ambient-pressure phases with transition temperatures above 77 K found during the decade, still costly and mechanically difficult, with the room-temperature question open. Atomically precise manufacturing gains its first serious engineering programmes, building on DNA origami and scanning-probe positional chemistry, and the Drexler versus Smalley question moves from argument to experiment.`,
      dependencies: ['agentic-coding-tools', 'solid-state-battery-progress', 'alphafold-2', '3d-printing', 'integrated-circuit', 'periodic-table'],
      uncertainties: [
        'Whether an ambient-pressure superconductor above 77 K exists at all is a question of physics, not of research capacity, and the branch may search the whole space and find nothing.',
        'Regulators may not accept computed qualification evidence within the window, which would hold deployment times near the baseline for safety-critical classes.',
        'The economics of a materials design service depend on intellectual property regimes that could either reward or suppress open disclosure.',
      ],
      indicators: [
        'Existence of commercial services that return a validated synthesis route for a specified property set, and their turnaround time.',
        'First certification of a structural part whose material was designed and partly qualified by computation.',
        'Peer-reviewed demonstrations of positional assembly with measured per-step error rates below one in ten thousand.',
        'Replicated superconducting transition above 77 K at ambient pressure in a material first reported after 2026.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch premise (AGI about 2032) is plausible but far from certain, and the response of qualification institutions to computed evidence is a social variable with no precedent. The physical bounds on what can compress are well founded; the timing is not.',
      sources: [MATTERGEN, PICKARD, ROTHEMUND, BAUM, JANEK2023],
    },
    {
      fieldId: 'materials-nano',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superhuman R&D from 2031; the bottleneck moves to kilns, reactors and regulators',
      narrative: `In the discontinuous branch superintelligent systems direct materials research from the early 2030s. The decade's story is the collision between design capacity that is effectively unbounded and a physical world that is not. By 2033 the models have mapped the thermodynamically stable inorganic space to the limits of first-principles accuracy, proposed synthesis routes for most of it, and identified which targets matter economically. The constraint is then manufacturing: the number of furnaces, reactors, deposition tools and analytical instruments, the hours each run takes, and the years a plant takes to build. Materials research becomes a scheduling problem over scarce physical capacity, and the systems respond by designing experiments that extract maximum information per sample and by designing plants that are faster to build.

Concretely, the branch sees new material classes reach production on timelines of two to four years from concept, which is close to the floor set by pilot-plant construction and customer qualification. Solid-state and beyond-lithium chemistries arrive with manufacturing routes designed alongside the chemistry. Fibres in the 20 to 40 GPa range are demonstrated at lengths useful for engineering, several times the strength of carbon fibre, by controlling defect populations in nanotube growth with in-line characterization. The superconductivity question is settled in one direction or the other by about 2040: either ambient-pressure phases with high transition temperatures are found and their route to wire is being engineered, or a credible theoretical and experimental case is made that the strong-coupling hydride regime cannot be stabilized at one atmosphere, which would itself be a major result. Atomically precise manufacturing receives the first programmes with the resources to answer the question properly, targeting positional assembly with error rates below one in a million per operation. Regulators and qualification bodies, not laboratories, become the pacing institutions, and the branch is defined by how fast they adapt.`,
      dependencies: ['agentic-coding-tools', 'solid-state-battery-progress', 'alphafold-2', 'integrated-circuit', 'transistor', 'bessemer-steel'],
      uncertainties: [
        'Whether superintelligent systems can be trusted to operate physical plants without human sign-off is a governance question that could add years to every deployment.',
        'First-principles methods have systematic errors of tens of meV per atom; a map of the stable space is only as good as the functional it was computed with.',
        'The capital required to rebuild manufacturing on two-to-four-year cycles may not be available even if the designs are.',
      ],
      indicators: [
        'Median time from first synthesis to commercial shipment for materials reported after 2031.',
        'Number of new pilot plants commissioned per year for materials that did not exist in 2030.',
        'A published, replicated answer to the ambient-pressure superconductivity question in either direction.',
        'Demonstrated positional assembly error rates and the throughput at which they were achieved.',
      ],
      confidence: 'low',
      confidenceJustification: 'Everything in this window depends on the branch premise of superintelligence by 2031, which the ensemble treats as the least likely path. Conditional on it, the physical constraints described are firm, but the institutional response is unknowable.',
      sources: [GNOME, PICKARD, NANOSYSTEMS, SMALLEY, DEBROY],
    },
    /* ---------------------------------------------------------------- */
    /* 2040-2060                                                        */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'materials-nano',
      window: '2040-2060',
      branch: 'slow',
      headline: 'Between AGI and ASI: two decades of closing loops and shortening chains',
      narrative: `The baseline branch enters this window with human-level AI newly arrived and ends it at the threshold of superintelligence (about 2058), so the 2040s and 2050s look like the accelerated branch's 2030s spread over twenty years. Discovery is fully automated and cheap; the world's laboratories propose more new materials per year than the previous century produced, and the economy absorbs a small fraction of them. The field's centre of gravity moves from finding materials to the harder problems of making them cheaply, recycling them fully and qualifying them quickly.

Circularity becomes the dominant materials story. Recovery rates for the major metals, historically below 50 percent for many elements even in rich countries, rise above 90 percent for lithium, cobalt, nickel, copper and aluminium in the major markets, driven by design for disassembly, automated sorting and the fact that primary production is energy-intensive against a decarbonizing grid. Primary production still dominates by mass because demand keeps growing, and the theoretical minimum energy of reduction (about 6.6 MJ/kg for iron from hematite, about 29 MJ/kg for aluminium from alumina) remains a floor that industrial practice approaches only within a factor of two.

Structural materials improve steadily rather than dramatically. Nanotube and graphene composites reach 10 to 20 GPa at engineering scale and enter aerospace and pressure-vessel applications; steels and aluminium alloys, designed by automated search over composition and thermomechanical processing, gain 20 to 30 percent in specific strength at constant toughness. Metal additive manufacturing becomes a mainstream route rather than a niche. In superconductivity this branch most plausibly finds ambient-pressure phases above liquid-nitrogen temperature at some point in the window, with early cable and magnet applications by the 2050s; room-temperature operation at ambient pressure remains unproven. Atomically precise manufacturing is an active research field with positional assembly of small structures demonstrated but no industrial process.`,
      dependencies: ['solid-state-battery-progress', '3d-printing', 'lithium-ion-battery', 'bakelite', 'bessemer-steel', 'copper-smelting'],
      uncertainties: [
        'Recovery rates above 90 percent require collection systems that many jurisdictions have never built, and policy rather than technology may be the limit.',
        'Elemental supply constraints for cobalt, rare earths or lithium could redirect the field toward substitution rather than performance.',
        'The superconductivity outcome is a physics question and could resolve in either direction, or not at all, within the window.',
      ],
      indicators: [
        'End-of-life recovery rates for lithium, cobalt, nickel, copper and aluminium reported by the major economies.',
        'Ratio of industrial energy per tonne to the Gibbs minimum for iron and aluminium.',
        'Engineering-scale tensile strength of the best commercial carbon nanomaterial fibre.',
        'Share of structural metal parts in aerospace produced by additive routes.',
      ],
      confidence: 'low',
      confidenceJustification: 'Twenty to thirty years out, the direction is defensible from mechanisms already visible, but the magnitudes rely on learning-curve extrapolations that have historically surprised in both directions. The branch assumes AGI late in the window, which is itself uncertain.',
      sources: [UNEP, GUTOWSKI, ALLWOOD, CNT80, ASHBY_ENV],
    },
    {
      fieldId: 'materials-nano',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'Two decades of superintelligent design: materials made to purpose, still made in plants',
      narrative: `With superintelligence from about 2040, the accelerated branch spends this window with a research capability that exceeds any human institution and a manufacturing base that is still recognizably industrial. The materials in use by 2060 are largely designed rather than discovered: a component is specified by its function and its material is generated, along with its process route, for that function. The gap between engineering performance and physical limits closes substantially. Engineering fibres reach 30 to 50 GPa, a third or more of the ideal strength of the carbon-carbon bond, as defect populations in nanotube and graphene assemblies are controlled to the level that the thermodynamics of growth allows. Alloys designed atom by atom for their processing route approach the E/10 ceiling in thin sections and about a quarter of it in bulk, limited by the statistics of flaws that Griffith described in 1921.

Manufacturing changes more slowly than design because it is bound by diffusion, heat transfer and capital. Solid-state diffusion coefficients of 1e-12 to 1e-16 m2/s at processing temperatures mean that homogenizing a centimetre of alloy still takes hours to days; sintering, crystal growth and deposition retain their physical timescales. What superintelligence changes is the number of steps, the yield and the plant design cycle, so that a new plant is designed in months and its process is right the first time. Refining energy falls toward 1.5 times the Gibbs minimum for the major metals as electrochemical routes replace carbothermic ones. Ambient-pressure superconductors, if found in the 2030s, reach cable and magnet production by the 2050s, changing grid and fusion engineering. Atomically precise manufacturing produces its first industrial output in the 2050s in this branch: not universal assemblers but specialized positional-assembly lines making catalysts, sensors and electronic structures at rates useful for high-value products, with error rates governed by the free-energy differences of the placement steps.`,
      dependencies: ['solid-state-battery-progress', 'alphafold-2', '3d-printing', 'integrated-circuit', 'bessemer-steel', 'bronze-metallurgy'],
      uncertainties: [
        'The fraction of engineering applications that can use fibres in the tens of gigapascals is limited by joining, matrix and fatigue behaviour, which may lag fibre strength by decades.',
        'Whether positional assembly reaches industrially useful throughput depends on parallelization that has not been demonstrated at any scale.',
        'The rate at which the installed manufacturing base can be replaced is a capital question that superintelligence does not directly answer.',
        'If no ambient-pressure superconductor exists, a large part of the functional-materials upside in this window disappears.',
      ],
      indicators: [
        'Engineering-scale fibre strength and the strength of composites made from those fibres in qualified parts.',
        'Number of plants whose process ran to specification on first commissioning, as a measure of design-to-plant fidelity.',
        'Throughput in structures per hour of the largest positional-assembly line and its measured error rate.',
        'Industrial energy per tonne of aluminium and iron relative to the thermodynamic minimum.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a conditional projection two to three decades out on a branch that assumes superintelligence by 2040. The physical limits cited are robust; the pace at which a physical economy converges toward them is not.',
      sources: [GRAPHENE, GRIFFITH, ZHU, NANOSYSTEMS, GUTOWSKI],
    },
    {
      fieldId: 'materials-nano',
      window: '2040-2060',
      branch: 'fast',
      headline: 'The atomically precise manufacturing question is answered; plants, not ideas, set the pace',
      narrative: `In the discontinuous branch the 2040s are the decade in which the Drexler and Smalley debate is settled by experiment rather than argument. Superintelligent systems have been directing the programme since the early 2030s, and by the mid 2040s the answer is known: positional chemistry at the level of individual reactive sites is achievable in constrained environments (tip-based mechanosynthesis on rigid surfaces, enzyme-like catalytic scaffolds built from designed proteins and nucleic acids), with error rates set by the free-energy discrimination of each step and by thermal noise, and it is not achievable in the general form of a free-floating universal assembler. Smalley's fat-fingers and sticky-fingers objections turn out to be real constraints that shape what can be built, and Drexler's insistence that stiff structures and controlled environments evade them turns out to be right within those constraints. The result is a new manufacturing tier for high-value nanostructures, not a replacement for metallurgy.

Bulk materials remain a story of plants. Even with perfect design, iron and aluminium come out of ores by moving electrons and heat through tonnes of solid, and the branch's materials economy in 2060 is still dominated by mass-produced metals, ceramics and polymers, now made close to the thermodynamic minimum energy and recycled at rates above 95 percent for the major elements. Engineering fibres near 50 GPa and bulk alloys at a third of ideal strength are in service. Superconductors at ambient pressure and high temperature, if physics permitted them, were found in the 2030s and are in wide use by 2050, at which point the field's index is set by how close the transition temperature sits to whatever ceiling the electron-phonon or unconventional pairing mechanisms allow. The pacing constraints are kinetics, capital and qualification, and the branch's remaining uncertainty is not what can be made but how fast the physical economy can be rebuilt around it.`,
      dependencies: ['agentic-coding-tools', 'alphafold-2', 'integrated-circuit', 'transistor', 'electron-microscope', 'bessemer-steel'],
      uncertainties: [
        'The projection assumes the answer to the assembler question is the constrained one; a demonstration of general mechanosynthesis in solution would change every subsequent window.',
        'Governance of a capability that can build arbitrary nanostructures may restrict deployment far more than physics does.',
        'The energy and capital needed to rebuild bulk production near the thermodynamic minimum within twenty years may not be available.',
      ],
      indicators: [
        'Published per-step error rates and throughput for positional assembly in constrained environments.',
        'Existence of any replicated mechanosynthesis outside a rigid or scaffolded environment.',
        'Share of primary metal production using electrochemical rather than carbothermic reduction.',
        'Fraction of major-element supply from secondary sources in the largest economies.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window compounds the least probable branch premise with a physics question that the 2026 literature has not settled. The description of the constrained-assembly outcome follows the arguments of both sides of the 2003 debate, but the outcome itself is a forecast, not a derivation.',
      sources: [SMALLEY, NANOSYSTEMS, BAUM, HOPFIELD, FEYNMAN],
    },
    /* ---------------------------------------------------------------- */
    /* 2060-2090                                                        */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'materials-nano',
      window: '2060-2090',
      branch: 'slow',
      headline: 'Superintelligence from about 2058: the baseline branch enters its own acceleration',
      narrative: `The baseline branch crosses into superintelligence near the start of this window, and the 2060s to 2080s replay, with a lag of about two decades, the trajectory the accelerated branch followed from 2040. Materials design becomes fully purpose-driven; the engineering-to-ideal gap closes for fibres and thin sections; refining approaches the thermodynamic minimum; the atomically precise manufacturing question is resolved, most likely in the constrained-positional-assembly form, by the 2070s. What the baseline branch has that the faster branches lacked is time: its manufacturing base, its recycling loops and its qualification institutions had thirty years to modernize with merely human-level tools before superhuman design arrived, so the transition is less turbulent and the rebuilding of the physical economy proceeds from a better-prepared base.

By 2090 the on-the-ground picture is one of very high material efficiency rather than of exotic materials. Structural components are lighter by a factor of two to three than their 2026 equivalents at equal function, mostly through fibre composites in the 30 to 50 GPa range and through designed alloys, and they are made to be taken apart. Batteries and other electrochemical storage sit within 20 to 30 percent of the theoretical energy density of their chemistries; further gains come from changing chemistries rather than from better engineering of the old ones. Ambient-pressure superconductors above liquid-nitrogen temperature are in grid and magnet use, with the room-temperature question either answered or bounded by theory. Metal, ceramic and polymer production for the major materials runs within 1.3 to 1.5 times the Gibbs free energy of reduction, and closed-loop recovery for the elements that matter exceeds 95 percent. The residual distance to the index ceiling is in bulk ideal strength, which flaw statistics keep out of reach, and in the rate and generality of atomically precise fabrication, which remains a high-value niche.`,
      dependencies: ['solid-state-battery-progress', 'alphafold-2', 'lithium-ion-battery', 'bakelite', 'bessemer-steel', 'iron-smelting'],
      uncertainties: [
        'The assumption that a slower transition is a smoother one is a historical analogy, not a law, and the arrival of superintelligence could be disruptive regardless of preparation.',
        'Factor-of-two mass reductions require redesign of entire product categories, which may proceed much more slowly than material availability.',
        'Elemental abundance may bind before performance does for several functional materials.',
      ],
      indicators: [
        'Mass per unit function of major structural products (vehicles, buildings, aircraft) relative to 2026 baselines.',
        'Energy per tonne for primary iron and aluminium as a multiple of the Gibbs minimum.',
        'Industrial deployment of positional assembly measured in output value per year.',
      ],
      confidence: 'low',
      confidenceJustification: 'At forty to sixty years out, only the physical limits are firm. The narrative is a structured extrapolation of the accelerated branch with a lag, and the confidence is correspondingly low.',
      sources: [ASHBY, GUTOWSKI, GRAPHENE, ALLWOOD],
    },
    {
      fieldId: 'materials-nano',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'A mature designed-materials economy: limits now set by flaw statistics and free energy',
      narrative: `By 2060 the accelerated branch has had twenty years of superintelligent design and roughly a decade of specialized atomically precise manufacturing, and the 2060 to 2090 window is when the physical economy catches up. The story is diffusion in the economic sense: the materials capability of 2060 is applied to every product category, every plant is rebuilt or replaced, and the aggregate efficiency of the materials economy improves by amounts that no single discovery could produce. Primary metal production falls as a share of supply because closed loops finally close; the energy embodied in a tonne of the major metals approaches within 20 to 30 percent of the thermodynamic floor, and the remaining gap is heat loss and the entropy of separating mixed scrap.

The materials themselves reach the practical limits described by the physical constraints. Engineering fibres sit at 40 to 60 GPa, within a factor of two to three of the intrinsic strength of graphene, and further gains are bounded by the fraction of load-bearing bonds and by the equilibrium defect density at growth temperature. Bulk structural metals and ceramics reach a quarter to a third of E/10 in service, and the remaining factor is Griffith statistics: a large volume contains a large flaw. Positional assembly lines produce electronic, catalytic and biomedical structures with atomic precision at economically significant rates; the process is slow per unit but parallel, and error rates are set by placement free-energy differences of several tens of kT. Living and self-repairing materials, grown rather than manufactured, take over applications where slow fabrication is acceptable and self-maintenance is valuable, such as infrastructure coatings and long-duration structures. Superconductivity has whatever ceiling physics allows, and the engineering question has become mechanical (wire ductility, current density, cost) rather than scientific. The index in this window measures distance to hard limits, not to the next discovery.`,
      dependencies: ['alphafold-2', '3d-printing', 'integrated-circuit', 'nylon', 'bessemer-steel', 'bronze-metallurgy'],
      uncertainties: [
        'Living materials depend on biological containment and control regimes that may restrict their use to a few applications.',
        'The entropy of separation from mixed scrap could keep secondary supply more energy-intensive than this projection assumes for elements used in dilute form.',
        'The parallelization of positional assembly to economically significant rates is the least demonstrated step in the chain.',
      ],
      indicators: [
        'Secondary share of supply for the twenty most used elements.',
        'Fibre and composite strength in service versus the graphene intrinsic value.',
        'Output value per year of atomically precise manufacturing, and the number of product classes it serves.',
        'Deployed area of engineered living materials in infrastructure.',
      ],
      confidence: 'low',
      confidenceJustification: 'The window is far enough out that only the physical bounds carry weight. The narrative describes convergence toward them, which is the natural expectation on this branch, but the timing within the window is unconstrained.',
      sources: [GRIFFITH, KELLY, NGUYEN, WEGST, HOPFIELD],
    },
    {
      fieldId: 'materials-nano',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Thirty years past the answer: a materials economy at its physical envelope',
      narrative: `In the discontinuous branch the questions that occupied the field in 2026 have all been answered by 2060, and the window from 2060 to 2090 is defined by what remains when only physics binds. Structural materials sit as close to ideal strength as flaw statistics permit: fibres within a factor of two of the graphene ceiling, bulk sections at a third of E/10 with designed flaw populations that make failure predictable rather than statistical. Materials are grown, assembled or printed for each application, and most mass flows are closed: primary extraction continues only for elements whose demand outruns the stock in use, and it runs near the Gibbs minimum with electrochemical reduction powered by an abundant grid. Positional assembly, established in the 2040s in constrained forms, is a mature industry producing computational, catalytic and medical structures whose complexity exceeds that of any biological system, at rates that grow with the number of parallel lines rather than with the speed of any one.

The interesting constraints are no longer in discovery or manufacturing. They are the rate at which a planet's worth of infrastructure can be rebuilt, the availability of specific elements, the qualification of materials for applications where failure is unacceptable and testing time is irreducible, and the governance of a manufacturing capability that can in principle make almost anything. The on-the-ground signature is not exotic; it is that things are lighter, last longer, repair themselves and are dismantled at end of life into pure streams. The superconductor question, settled in the 2030s, leaves a grid and a transport system built around whatever transition temperature and current density the found materials support. The index sits in the high range, and its remaining distance to 100 is the part of the envelope that thermodynamics, flaw statistics and elemental abundance reserve for no one.`,
      dependencies: ['agentic-coding-tools', 'alphafold-2', 'integrated-circuit', 'transistor', 'bessemer-steel', 'copper-smelting'],
      uncertainties: [
        'A civilization with this manufacturing capability may direct it toward goals (space structures, computation) that change the demand side beyond anything this field-level view captures.',
        'The projection assumes governance permits broad deployment of positional assembly, which is not guaranteed.',
        'Elemental abundance on Earth may bind hard enough that off-planet sourcing becomes a materials question within the window.',
      ],
      indicators: [
        'Fraction of major-element supply that is secondary rather than primary.',
        'Bulk material strength in service relative to E/10 for the major structural classes.',
        'Whether positional assembly output is growing with parallel line count, as a test of the scaling assumption.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the far end of the least probable branch. The description is bounded by physics on one side and by the branch premise on the other, and almost nothing in between can be assigned a meaningful probability.',
      sources: [ZHU, GUTOWSKI, NANOSYSTEMS, ASHBY_ENV],
    },
    /* ---------------------------------------------------------------- */
    /* 2090-2126                                                        */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'materials-nano',
      window: '2090-2126',
      branch: 'slow',
      headline: 'The baseline branch converges: by 2126 only physics separates the branches',
      narrative: `A century from 2026 the baseline branch has had nearly seventy years of superintelligent design, and its materials economy has converged toward the same envelope the faster branches reached earlier. The differences that remain between branches by 2126 are historical rather than technical: which institutions were rebuilt when, how much of the old infrastructure was replaced rather than retrofitted, and how the transition was governed. In materials terms the picture is the same one described for the accelerated branch after 2060, arriving later and with less turbulence. Engineering fibres approach the graphene ceiling within a factor of two; bulk materials approach a third of ideal strength with designed flaw populations; refining and separation run near the thermodynamic floor; recovery of the elements that matter is nearly complete; positional assembly is a mature specialized industry.

What the long baseline path preserves is a materials culture that developed continuously from the Oldowan flake to the designed composite, without the discontinuity of the fast branch, and this shows in the way the capability is used. Materials are chosen for longevity and repairability first, and the century-long lifetime of a structure is a design target rather than an accident. The last increments of the index are the hardest: the ideal strength of a bulk solid is not reachable because thermal fluctuations and the entropy of vacancies guarantee flaws, positional assembly has an error floor set by kT, and the energy of separating mixed elements has an entropic minimum that no process avoids. The branch ends the century at roughly the same place the others do, and the residual to 100 is the same for all three: the portion of the Ashby envelope that physics keeps empty.`,
      dependencies: ['solid-state-battery-progress', 'lithium-ion-battery', 'bakelite', 'bessemer-steel', 'iron-smelting', 'oldowan-tools'],
      uncertainties: [
        'Convergence between branches assumes no branch suffers a collapse or a governance failure that halts materials deployment, which cannot be assumed over a century.',
        'The claim that the residual to the ceiling is purely physical assumes the physical limits listed are complete; an unknown limit or an unknown loophole would change the number.',
        'Demand-side changes over a century (population, space activity, computation) could dominate any supply-side projection.',
      ],
      indicators: [
        'Whether the three branches have converged in measured material efficiency by the 2090s, as this projection predicts.',
        'Bulk and fibre strengths in service relative to their theoretical ceilings.',
        'Energy per tonne of separated element from mixed scrap relative to the entropic minimum.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, this is a statement about physical envelopes and the expectation of convergence, not a forecast of events. It is offered as a reasoned bound rather than a prediction.',
      sources: [ASHBY, FRENKEL, HOPFIELD, ELLINGHAM],
    },
    {
      fieldId: 'materials-nano',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'At the envelope: what a mature materials civilization cannot do',
      narrative: `The accelerated branch spends its final window in a state that can be described by the limits it has reached rather than by the technologies it uses. By 2126 structural, functional and biological materials are designed and produced at or near the bounds set by ideal strength, flaw statistics, free-energy discrimination, diffusion kinetics and elemental abundance, and the field's effort is concentrated on the residual: pushing bulk strength a few percent closer to E/10 by controlling flaw populations statistically, lowering positional assembly error rates by increasing the free-energy discrimination of each placement at the cost of speed, and finding chemistries for storage and superconductivity that sit closer to whatever theoretical ceiling applies. Progress is measured in single-digit percentages of the index and takes decades.

The practical world this produces is one of extreme material efficiency. Structures are a fraction of the mass of their 2026 equivalents, last for centuries with self-repair, and are dismantled into elemental streams at end of life. Elemental scarcity, not manufacturing capability, governs what is built: elements whose stocks are limited are reserved for applications where no substitute exists, and substitution is itself a design problem the systems solve. Living materials handle applications where growth is cheaper than fabrication. Atomically precise manufacturing, in its constrained positional form, builds the computational and medical substrate of the civilization. What the field cannot do is as well defined as what it can: it cannot build a bulk solid at ideal strength, cannot assemble without an error floor, cannot separate elements without paying the entropy of mixing, cannot exceed the transition temperature that pairing physics allows, and cannot move matter through solids faster than diffusion permits. The century closes with those limits as the only remaining frontier.`,
      dependencies: ['alphafold-2', 'integrated-circuit', 'nylon', 'bessemer-steel', 'iron-smelting', 'bronze-metallurgy'],
      uncertainties: [
        'The list of limits is the 2026 list; a century of superintelligent research may find that some are looser (or tighter) than stated.',
        'Whether elemental scarcity binds depends on off-planet sourcing, which lies outside this field.',
        'The social choice to prioritize longevity and repairability over throughput is assumed, not derived.',
      ],
      indicators: [
        'Rate of change of the capability index per decade, which this projection predicts to be small.',
        'Fraction of engineering effort directed at flaw-population control and error-rate reduction rather than at new compositions.',
        'Existence of any replicated result that exceeds a limit listed in this entry.',
      ],
      confidence: 'low',
      confidenceJustification: 'This projection is a description of a physical envelope, and its only substantive claim is that the branch reaches it within the century. That claim is plausible on the branch premise but is not testable for decades.',
      sources: [ASHBY, GRIFFITH, HOPFIELD, BCS, ELLINGHAM],
    },
    {
      fieldId: 'materials-nano',
      window: '2090-2126',
      branch: 'fast',
      headline: 'Ninety years past the discontinuity: the envelope filled, and what physics keeps',
      narrative: `In the discontinuous branch the century's final window is almost indistinguishable in materials terms from the accelerated branch's, because both have reached the same physical envelope; the difference is that the fast branch has been there for sixty years. What that extra time buys is not a higher ceiling but a more complete exploration of the space beneath it. Every stable inorganic compound and a vast fraction of the organic and biological materials space have been characterized, made where useful, and catalogued with their process routes; the concept of a materials discovery in the 2026 sense has no meaning. What continues is materials engineering against hard constraints and the application of that engineering to whatever the civilization is building, which by this window may include large space structures, planetary-scale infrastructure and computational substrates whose scale sets the demand for specific elements.

The limits are the same ones this field's entry lists in 2026, and the way they bind is instructive. The ideal strength of a bulk solid remains unreachable because a macroscopic volume at any finite temperature contains flaws; the practical ceiling is about a third of E/10 in bulk and within a factor of two of the bond strength in fibres. Positional assembly has an error floor set by the free-energy discrimination of each step against kT and by the trade between speed and accuracy, so precision manufacturing remains slower per unit than bulk processing and is used where precision earns its cost. Separation and refining run near the Gibbs floor plus the entropy of mixing. Superconductivity is at whatever ceiling the pairing physics permits, established in the 2030s. The index by 2126 sits in the 80s, and the gap to 100 is not a forecasting uncertainty but a statement about the universe: the part of the material property space that thermodynamics and statistics reserve, and that no intelligence, however capable, fills.`,
      dependencies: ['agentic-coding-tools', 'alphafold-2', 'transistor', 'bessemer-steel', 'iron-smelting', 'oldowan-tools'],
      uncertainties: [
        'The premise that the envelope is fixed by known physics could fail if a century of superintelligent research finds a loophole in flaw statistics or in error-rate thermodynamics.',
        'Demand at planetary or larger scale could make elemental abundance the binding limit far more sharply than the index captures.',
        'Nothing in this window is forecastable in the ordinary sense; the description is a bound.',
      ],
      indicators: [
        'Any replicated bulk material above a third of E/10 in service, which would show the flaw-statistics ceiling is softer than stated.',
        'Any demonstrated assembly process with error rates below the free-energy bound for its measured energy per step.',
        'Whether the fast and accelerated branches are distinguishable in materials metrics by 2100.',
      ],
      confidence: 'low',
      confidenceJustification: 'The furthest window on the least probable branch. Its content is the physical envelope itself, and the confidence attaches to the limits, not to the path.',
      sources: [FRENKEL, GRAPHENE, HOPFIELD, GUTOWSKI, MCMILLAN],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 12, low: 11, high: 13 },
      { year: 2030, value: 13, low: 12, high: 14 },
      { year: 2040, value: 17, low: 14, high: 21 },
      { year: 2060, value: 25, low: 18, high: 34 },
      { year: 2090, value: 45, low: 28, high: 62 },
      { year: 2126, value: 66, low: 40, high: 80 },
    ],
    moderate: [
      { year: 2026, value: 12, low: 11, high: 13 },
      { year: 2030, value: 13, low: 12, high: 15 },
      { year: 2040, value: 22, low: 16, high: 30 },
      { year: 2060, value: 42, low: 26, high: 58 },
      { year: 2090, value: 66, low: 42, high: 80 },
      { year: 2126, value: 78, low: 52, high: 88 },
    ],
    fast: [
      { year: 2026, value: 12, low: 11, high: 13 },
      { year: 2030, value: 13, low: 12, high: 16 },
      { year: 2040, value: 28, low: 18, high: 42 },
      { year: 2060, value: 58, low: 34, high: 76 },
      { year: 2090, value: 76, low: 48, high: 88 },
      { year: 2126, value: 84, low: 55, high: 92 },
    ],
  },
  sources: [GNOME, ALAB, LEEMAN, CHEETHAM, GRAPHENE, ENGINES, SMALLEY, ASHBY, H3S, JANEK2023, DOE_CM, MGI, IIJIMA, PENDRY, FRAZIER, JANEK2016],
  lastReviewed: '2026-09-04',
};
