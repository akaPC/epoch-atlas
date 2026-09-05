import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'climate-engineering',
  index: 11,
  name: 'Climate Engineering',
  code: 'CLIMATE',
  summary: `Climate engineering is the set of technologies that act on the planet's energy and carbon balance directly, rather than by avoiding emissions. In September 2026 it is small relative to the problem it addresses. Fossil carbon dioxide emissions run near 37 to 38 billion tonnes a year, the atmospheric concentration is about 425 to 430 parts per million, and 2024 was the first calendar year to average more than 1.5 degrees Celsius above the 1850 to 1900 baseline, with the long term mean near 1.3 to 1.4 degrees. Deliberate removal is roughly 2 billion tonnes a year, almost all of it afforestation and soil carbon; engineered removal (direct air capture, enhanced rock weathering, bioenergy with capture, biochar) delivers on the order of a million tonnes a year, well under a hundredth of a percent of gross emissions. Point source capture stores about 50 million tonnes a year. Solar radiation modification has been simulated extensively and tested outdoors almost not at all: a few small balloon releases and one halted marine cloud brightening trial define the practical record. Weather modification remains cloud seeding with modest measured effects. The field's near future is set by cost curves, verification, energy supply and legitimacy more than by physics.`,
  indexDefinition: `The index measures humanity's capacity to steer Earth's radiative and carbon balance on purpose, combining five components: verified net removal of carbon dioxide as a fraction of the scale needed to lower concentrations (tens of billions of tonnes a year), removal cost relative to the thermodynamic floor of separation, the ability to measure and attribute fluxes and forcing within a few percent, the ability to adjust radiative forcing under legitimate governance without termination risk, and the ability to protect populations from committed sea level rise and heat. A score of 100 means a civilization that can set global mean temperature and atmospheric composition on a chosen trajectory within measurement error, limited only by carbon cycle and ocean timescales. September 2026 sits near 5.`,
  physicalLimits: [
    {
      name: 'Thermodynamic minimum for separating carbon dioxide from air',
      description: `Concentrating a gas from 420 parts per million to a pure stream costs at least the free energy of unmixing, about 19 to 21 kilojoules per mole of carbon dioxide at ambient temperature, or roughly 0.45 gigajoules per tonne. Real separation systems run five to ten times above the floor because sorbents must be heated or flushed, air must be moved, and captured gas must be compressed: Keith and colleagues' 2018 solvent design used about 8.8 gigajoules of natural gas per tonne, and House and colleagues argued that practical systems will rarely fall below 2 to 5 gigajoules per tonne. At 5 gigajoules per tonne, removing 10 billion tonnes a year needs 50 exajoules, about 8 percent of 2026 world primary energy. This floor bounds every direct air capture cost estimate in the projections below.`,
      sources: [
        { author: 'Kurt Zenz House, Antonio C. Baclig, Manya Ranjan, Ernst A. van Nierop, Jennifer Wilcox and Howard J. Herzog', title: 'Economic and energetic analysis of capturing CO2 from ambient air', publisher: 'Proceedings of the National Academy of Sciences', year: 2011 },
        { author: 'David W. Keith, Geoffrey Holmes, David St. Angelo and Kenton Heidel', title: 'A Process for Capturing CO2 from the Atmosphere', publisher: 'Joule', year: 2018 },
      ],
    },
    {
      name: 'Radiative forcing physics and the sulfate aerosol dose response',
      description: `Doubling carbon dioxide adds about 3.9 watts per square meter of forcing, and the anthropogenic total in 2019 was near 2.7 watts per square meter. Stratospheric sulfate reflects sunlight: the 1991 Pinatubo eruption placed roughly 15 to 20 million tonnes of sulfur dioxide in the stratosphere, produced a peak forcing near minus 3 to minus 4 watts per square meter, and cooled the surface about 0.4 to 0.5 degrees for about a year. The response is sublinear, because sustained injection grows particles that scatter less per unit mass and fall faster; Niemeier and Timmreck found that offsetting the forcing of a quadrupling of carbon dioxide would need tens of millions of tonnes of sulfur a year. Aerosols cannot reverse ocean acidification, they change precipitation patterns, and the cooling ends within a few years of stopping, which is the termination risk.`,
      sources: [
        { author: 'Paul J. Crutzen', title: 'Albedo Enhancement by Stratospheric Sulfur Injections: A Contribution to Resolve a Policy Dilemma?', publisher: 'Climatic Change', year: 2006 },
        { author: 'Ulrike Niemeier and Claudia Timmreck', title: 'What is the limit of climate engineering by stratospheric injection of SO2?', publisher: 'Atmospheric Chemistry and Physics', year: 2015 },
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2021: The Physical Science Basis. Working Group I Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2021 },
      ],
    },
    {
      name: 'Ocean carbonate chemistry, mixing timescales and the residence time of carbon dioxide',
      description: `The ocean holds about 38,000 billion tonnes of carbon against about 880 in the atmosphere and absorbs roughly a quarter of annual emissions, but the surface mixed layer equilibrates with the air in about a year while the deep ocean turns over on a timescale of centuries to a millennium. Two consequences bind this field. First, about a fifth of any pulse of fossil carbon dioxide remains in the atmosphere after a thousand years, so warming is effectively irreversible without removal, and when removal lowers the atmospheric concentration the ocean and land outgas part of what they took up, so roughly half of gross removal reappears over decades. Second, ocean alkalinity enhancement only stores carbon if treated water stays at the surface long enough to absorb it and does not trigger precipitation of carbonate, which limits addition rates and makes verification hard. Ocean heat uptake also means sea level keeps rising for centuries after temperature is stabilized.`,
      sources: [
        { author: 'David Archer et al.', title: 'Atmospheric Lifetime of Fossil Fuel Carbon Dioxide', publisher: 'Annual Review of Earth and Planetary Sciences', year: 2009 },
        { author: 'Phil Renforth and Gideon Henderson', title: 'Assessing ocean alkalinity for carbon sequestration', publisher: 'Reviews of Geophysics', year: 2017 },
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2021: The Physical Science Basis. Working Group I Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2021 },
      ],
    },
    {
      name: 'Land, biomass and rock limits on biological and mineral removal',
      description: `Bioenergy with carbon capture removes on the order of one tonne of carbon dioxide per 0.05 to 0.1 hectare of productive land a year, so 10 billion tonnes a year would need roughly 400 to 700 million hectares, a quarter to a half of world cropland; the National Academies put the sustainable potential near 3.5 to 5 billion tonnes a year and the IPCC flags land, water and biodiversity conflicts above a few billion. Enhanced rock weathering needs two to four tonnes of crushed basalt per tonne of carbon dioxide, and Beerling and colleagues estimated 0.5 to 2 billion tonnes a year on croplands at 80 to 180 dollars per tonne, bounded by quarrying, grinding energy and spreading logistics; 10 billion tonnes a year would require rock flows comparable to all global aggregate mining. These caps force any gigatonne program onto a portfolio, with direct air capture and ocean methods taking the balance.`,
      sources: [
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Negative Emissions Technologies and Reliable Sequestration: A Research Agenda', publisher: 'The National Academies Press', year: 2019 },
        { author: 'David J. Beerling et al.', title: 'Potential for large-scale CO2 removal via enhanced rock weathering with croplands', publisher: 'Nature', year: 2020 },
        { author: 'Pete Smith et al.', title: 'Biophysical and economic limits to negative CO2 emissions', publisher: 'Nature Climate Change', year: 2016 },
      ],
    },
    {
      name: 'Water and energy cost of desalination',
      description: `Separating fresh water from seawater has a thermodynamic minimum of about 0.76 kilowatt hours per cubic meter at vanishing recovery and about 1.06 kilowatt hours per cubic meter at the 50 percent recovery of a real plant. Modern reverse osmosis trains use about 2 kilowatt hours per cubic meter for the membrane stage and 3 to 4 for the whole plant including pretreatment and pumping, so the technology already sits within a factor of three or four of its floor and further gains are small. Global capacity is about 100 million cubic meters a day, consuming roughly 130 terawatt hours a year; tenfold expansion to replace failing aquifers and glacier-fed rivers would draw about 4 percent of 2026 world electricity and produce brine flows that must be diluted or mined. This bounds adaptation engineering in dry regions.`,
      sources: [
        { author: 'Menachem Elimelech and William A. Phillip', title: 'The Future of Seawater Desalination: Energy, Technology, and the Environment', publisher: 'Science', year: 2011 },
        { author: 'Edward Jones, Manzoor Qadir, Michelle T. H. van Vliet, Vladimir Smakhtin and Seong-mu Kang', title: 'The state of desalination and brine production: A global outlook', publisher: 'Science of the Total Environment', year: 2019 },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ */
    /* 2026-2030                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'climate-engineering',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Engineered removal reaches the low millions of tonnes; SRM stays in the laboratory',
      narrative: `Through 2030 the Baseline branch is a story of demonstration plants, verification standards and prices an order of magnitude above what buyers will pay at scale. Engineered removal grows from about a million tonnes a year toward perhaps 5 to 15 million tonnes a year by 2030, dominated by bioenergy with carbon capture at ethanol and pulp plants, biochar, and the first audited tonnes from enhanced rock weathering on croplands. Direct air capture remains the most expensive route. The largest operating plants in 2026 are in the tens of thousands of tonnes a year and deliver well below nameplate, and the first plant designed at the 500,000 tonne scale, in Texas, is the test of whether solvent systems can approach the 100 to 250 dollars per tonne that Keith and colleagues estimated in 2018. Energy is the anchor: even at five times the roughly 0.45 gigajoules per tonne thermodynamic floor, a million tonnes a year needs about 2.3 petajoules, and real plants use two to four times that. Point source capture and storage expands from about 50 million tonnes a year toward 100 million as the Northern Lights hub in Norway, Gulf Coast hubs and Chinese cement and coal projects ramp, still under 0.3 percent of gross emissions. Governance matures faster than hardware: the European Union's certification framework for removals, Article 6.4 methodologies and corporate advance purchases (Microsoft and the Frontier buyers' coalition are the largest) set accounting rules later decades will use. Solar radiation modification stays confined to modelling, a handful of small outdoor aerosol and cloud brightening experiments (several stopped by local objection) and national research programs of tens of millions of dollars. Global emissions plateau near 40 billion tonnes of carbon dioxide a year, and the long term mean warming reaches 1.5 degrees around the end of the window. The ordinary experience of the field is heat action plans, a desalination boom in the Gulf and the Mediterranean, and satellite methane alerts that operators are not yet obliged to act on.`,
      dependencies: ['perovskite-tandem-solar', 'hyperscale-ai-datacenters', 'electric-grid', 'haber-bosch', 'watt-separate-condenser'],
      uncertainties: [
        'Delivered direct air capture cost from the first large solvent plant could land anywhere between 300 and 1,000 dollars per tonne, which decides whether the industry attracts a second wave of capital before 2030.',
        'Policy support in the United States and Europe for removal credits and storage permits could be cut or expanded by a single legislative cycle.',
        'Whether enhanced rock weathering tonnes survive independent verification of dissolution rates is unresolved.',
      ],
      indicators: [
        'Audited engineered removal delivered per year, as reported by the State of Carbon Dioxide Removal series and registry data, passing 5 million tonnes.',
        'Reported all-in cost per tonne from the first 500,000 tonne direct air capture plant after a year of operation.',
        'Operating point source capture capacity passing 80 million tonnes a year.',
        'Any government authorizing a stratospheric aerosol experiment above one tonne of material.',
      ],
      confidence: 'high',
      confidenceJustification: 'Plants that will operate in 2030 are already permitted or under construction, and the volumes involved are small enough that policy shocks change the growth rate but not the order of magnitude.',
      sources: [
        { author: 'Stephen M. Smith et al.', title: 'The State of Carbon Dioxide Removal, 2nd Edition', publisher: 'The State of Carbon Dioxide Removal', year: 2024, url: 'https://www.stateofcdr.org' },
        { author: 'David W. Keith, Geoffrey Holmes, David St. Angelo and Kenton Heidel', title: 'A Process for Capturing CO2 from the Atmosphere', publisher: 'Joule', year: 2018 },
        { author: 'International Energy Agency', title: 'Direct Air Capture: A key technology for net zero', publisher: 'IEA', year: 2022 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'The same plants, better instruments: AI enters sorbent design, monitoring and permits',
      narrative: `In the Accelerated branch the hardware of 2030 is the same as in the Baseline: a few hundred thousand tonnes of direct air capture capacity, a growing set of bioenergy and rock weathering projects, and about 100 million tonnes a year of point source storage. What changes is the instrument layer around it. Machine-learned weather and climate emulators, which matched physics-based forecasts in 2023 and became operational at national centers by 2025, are extended into ensemble climate projection and event attribution, and by 2028 a heat wave or flood can be attributed to warming with quantified confidence within days rather than months. Satellite methane detection, already automated, becomes a compliance tool as the first regulators require operators to respond to orbital plume alerts. On the removal side, closed loop laboratories run by models screen amine and metal organic framework sorbents for lower regeneration temperatures, and the first candidates with swing energies near 3 gigajoules per tonne, about six times the thermodynamic floor, are reported by 2029, though no plant using them runs before 2031. Models also draft the geological storage permits and monitoring plans that took two years per well in the mid 2020s, and permit throughput in the United States and Europe roughly doubles. Solar radiation modification does not move toward deployment, but the quality of the debate changes: higher resolution Earth system emulators produce regional precipitation and monsoon responses to stratospheric injection at a fidelity the 2021 National Academies report asked for, and the first internationally coordinated assessment of those results is commissioned. Emissions and temperature match the Baseline, near 40 billion tonnes a year and a long term mean of 1.5 degrees by 2030, with slightly more emissions from gas-fired compute in the United States. The field ends the window with better maps of the problem and the same tools for solving it.`,
      dependencies: ['hyperscale-ai-datacenters', 'agentic-coding-tools', 'alexnet', 'sputnik', 'electric-grid'],
      uncertainties: [
        'Emulator-based attribution may not be accepted by courts, insurers and treaty bodies, in which case its practical effect before 2030 is small.',
        'Laboratory sorbent gains often fail on cycling stability and humidity, so a reported regeneration energy is not a plant result.',
        'Regulators may not allow model-drafted storage permits to shorten review.',
      ],
      indicators: [
        'An operational climate service issuing event attribution within one week using learned emulators.',
        'A peer reviewed sorbent with demonstrated regeneration energy under 3.5 gigajoules per tonne over 1,000 cycles.',
        'Median time to a Class VI storage well permit in the United States falling below one year.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The physical plants are well constrained, but the speed at which learned models change monitoring, permitting and sorbent discovery is only partly demonstrated and the window ends before the branch anchor.',
      sources: [
        { author: 'Remi Lam et al.', title: 'Learning skillful medium-range global weather forecasting', publisher: 'Science', year: 2023 },
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Reflecting Sunlight: Recommendations for Solar Geoengineering Research and Research Governance', publisher: 'The National Academies Press', year: 2021 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI arrives in 2029 into a field still measured in demonstration plants',
      narrative: `The Discontinuous branch reaches AGI around 2029, and in this window the effect on climate engineering is felt first through energy demand and only at the very end through design. Compute campuses of five to ten gigawatts are powered in the near term by whatever can be built fastest, which in the United States and the Gulf means gas turbines alongside solar and storage, and the branch adds on the order of a few hundred million tonnes of carbon dioxide a year to the Baseline by 2030, a small increment against 40 billion but a visible one. Removal hardware is unchanged: engineered removal reaches 10 to 20 million tonnes a year, point source storage near 100 million, direct air capture still in the hundreds of thousands. From 2029 the first AGI-class systems are put to work on the field's design problems and produce, within months, integrated plans for solar-powered direct air capture with mineralization in basalt, optimized rock weathering supply chains, and stratospheric aerosol delivery aircraft, with cost estimates that are credible but untested. None of it is built by 2030; the plans wait on capital, quarries, wells and permits. The larger near-term change is epistemic. Systems that can run the full climate response to any intervention, including regional impacts, drought risk and termination pathways, make the solar radiation modification debate concrete: several governments commission national assessments, and the first serious proposals for a capped, multilateral stratospheric program appear in policy circles, opposed by an equally serious moratorium movement. Warming in 2030 matches the other branches at a long term mean of 1.5 degrees. The field ends the window with its first credible engineering roadmap to gigatonne removal and no additional capacity to show for it.`,
      dependencies: ['state-of-the-field-2026', 'hyperscale-ai-datacenters', 'perovskite-tandem-solar', 'nuclear-power', 'haber-bosch'],
      uncertainties: [
        'The emissions increment from compute could be larger if gas dominates the build-out, or near zero if hyperscalers meet their clean power commitments.',
        'AGI-class design output may be more useful for software than for chemical plants and mines, delaying any effect on removal.',
        'The credibility that superhuman assessment lends to SRM proposals could as easily strengthen a moratorium as a program.',
      ],
      indicators: [
        'Year on year growth in US and Gulf electricity emissions attributable to datacenters.',
        'A published, fully costed gigatonne removal plan from an AI system that independent engineers cannot find major errors in.',
        'National governments commissioning formal solar radiation modification assessments.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Nothing physical can change by 2030 on this branch, which is well constrained; the uncertainty is in how compute demand and early AGI outputs alter emissions and debate.',
      sources: [
        { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Reflecting Sunlight: Recommendations for Solar Geoengineering Research and Research Governance', publisher: 'The National Academies Press', year: 2021 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2030-2040                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'climate-engineering',
      window: '2030-2040',
      branch: 'slow',
      headline: 'Removal reaches a few hundred million tonnes a year as the 1.5 degree budget is spent',
      narrative: `In the Baseline the 2030s are the decade in which removal becomes an industry without becoming a solution. Learning curves that were steep for solar are shallower here, because half the cost of direct air capture is energy and steel rather than a mass-produced component, so delivered direct air capture falls from roughly 500 to 800 dollars per tonne in 2030 to 250 to 400 by 2040, helped by surplus daytime solar at 1 to 2 cents per kilowatt hour in desert regions. Bioenergy with capture at pulp, ethanol and waste plants, biochar and enhanced rock weathering are cheaper, at 100 to 200 dollars per tonne, and take most of the volume. Engineered removal reaches 200 to 500 million tonnes a year by 2040, on top of 2 to 3 billion tonnes of afforestation and soil carbon, while point source capture stores 300 to 600 million tonnes a year, mostly at cement, steel, gas processing and hydrogen plants. Emissions decline about one to two percent a year from the early 2030s as cheap solar and electric vehicles spread, reaching roughly 30 to 33 billion tonnes in 2040, so the cumulative remaining budget for 1.5 degrees is exhausted around 2030 and the long term mean passes 1.6 degrees by 2040. Solar radiation modification stays undeployed: research programs run stratospheric platform tests with inert material, an intergovernmental assessment of risks and governance is published, and the termination shock literature drives proposals for a moratorium that most states endorse and a few decline to sign. Marine cloud brightening runs regional trials over coral reefs with measurable local cooling. Adaptation engineering absorbs more capital than removal: desalination doubles toward 200 million cubic meters a day, surge barriers are built or extended around Venice, New York, Jakarta and the Dutch delta, and national heat early warning systems become routine. AGI arrives near 2038, too late to change this window.`,
      dependencies: ['perovskite-tandem-solar', 'silicon-solar-cell', 'sputnik', 'electric-grid', 'haber-bosch', 'watt-separate-condenser'],
      uncertainties: [
        'Direct air capture may not reach 400 dollars per tonne by 2040 if sorbent lifetimes and plant utilization stay below design, or could fall faster if electrochemical routes work.',
        'Biomass supply for bioenergy with capture could be capped by food and biodiversity conflicts well below the figure assumed here.',
        'A single extreme season could break the political consensus against solar radiation modification and produce a unilateral program.',
      ],
      indicators: [
        'Audited engineered removal passing 100 million tonnes a year before 2036.',
        'Contracted direct air capture prices for delivery in the late 2030s falling below 400 dollars per tonne.',
        'Any state or coalition announcing a stratospheric aerosol deployment rather than a research program.',
        'Global desalination capacity passing 150 million cubic meters a day.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Cost declines follow from energy prices and known process engineering, but the volume of removal depends on policy support and biomass limits that are not settled, and the temperature path depends on emission cuts outside this field.',
      sources: [
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2022: Mitigation of Climate Change. Working Group III Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2022 },
        { author: 'Sabine Fuss et al.', title: 'Negative emissions, Part 2: Costs, potentials and side effects', publisher: 'Environmental Research Letters', year: 2018 },
        { author: 'Andy Parker and Peter J. Irvine', title: 'The Risk of Termination Shock From Solar Geoengineering', publisher: "Earth's Future", year: 2018 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'AGI-era process engineering halves removal costs and gigatonne plans get financed',
      narrative: `AGI arrives near 2032 in the Accelerated branch, and the second half of the decade shows what automated research does to a process industry whose cost is dominated by energy and materials. The first gains are in sorbents and cycles. Closed loop laboratories deliver capture materials with regeneration energies near 2 to 3 gigajoules per tonne, four to six times the thermodynamic floor, and electrochemical swing processes that run directly on intermittent solar without a steam loop; combined with power at 1 to 2 cents per kilowatt hour on desert campuses, delivered direct air capture falls to 150 to 250 dollars per tonne by 2040. The second gain is in verification: model-driven monitoring of soil, river and ocean chemistry cuts the cost of proving that a tonne from rock weathering or alkalinity addition was actually removed from thousands of dollars per site to hundreds, and buyers accept ocean and weathering credits at scale. The third is administrative, as storage permits, environmental reviews and cross-border credit accounting move to months. Engineered removal reaches 0.5 to 1 billion tonnes a year by 2040 and point source capture near 800 million, with the first multi-gigatonne programs financed by governments that treat removal as infrastructure. Emissions fall two to three percent a year as AI-managed grids absorb cheap solar and reach about 26 to 29 billion tonnes in 2040, and the long term mean warming is near 1.6 degrees. Solar radiation modification moves from research to decision preparation. Learned Earth system models resolve regional precipitation responses well enough that assessments carry quantified regional risk, aircraft capable of stratospheric delivery are demonstrated with inert payloads, and a standing international body is created to govern any deployment. No injection occurs. The atlas treats the 2040s as the decade the decision is taken.`,
      dependencies: ['agentic-coding-tools', 'alphafold-2', 'perovskite-tandem-solar', 'alexnet', 'electric-grid', 'haber-bosch'],
      uncertainties: [
        'Sorbent and electrochemical gains may not transfer from laboratory to plants at the assumed pace; five year lags are typical.',
        'Governments may decline to finance removal as infrastructure, leaving the industry dependent on voluntary buyers.',
        'An international governance body for solar radiation modification may fail to form, leaving deployment decisions to individual states.',
      ],
      indicators: [
        'A direct air capture plant delivering tonnes at under 250 dollars all-in by 2038.',
        'Verified ocean or weathering removal credits above 50 million tonnes a year accepted under a compliance scheme.',
        'A treaty body or UN process with a mandate over solar radiation modification deployment.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The branch anchor implies the design capability, and the energy prices that dominate removal cost are well projected; the pace of plant construction and the formation of governance are the open questions.',
      sources: [
        { author: 'Klaus S. Lackner and Habib Azarabadi', title: 'Buying Down the Cost of Direct Air Capture', publisher: 'Industrial and Engineering Chemistry Research', year: 2021 },
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Reflecting Sunlight: Recommendations for Solar Geoengineering Research and Research Governance', publisher: 'The National Academies Press', year: 2021 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superhuman planning, cheap solar, and the first gigatonne-a-year removal build-out',
      narrative: `In the Discontinuous branch superintelligence directs the field from 2031, and the decade is defined by the gap between what can be designed and what can be quarried, drilled and permitted. Designs arrive first: by 2033 there are complete specifications for modular direct air capture running on desert solar at 2 gigajoules per tonne, for mineralization in basalt formations that lock carbon as carbonate within years, for ocean alkalinity programs with sensor networks dense enough to verify uptake, and for rock weathering supply chains that use mine tailings already at the surface. Building them takes the time it takes. Solar is the fastest lever, with installations at 1.5 to 2 terawatts a year late in the decade, so power is not the constraint; the constraints are crushed rock (a gigatonne of removal by weathering needs two to four gigatonnes of basalt, the output of a mining sector built from scratch), injection wells (a gigatonne of supercritical carbon dioxide is a fluid volume about a third of world oil production), and the consent of the countries whose deserts, coasts and aquifers are used. Engineered removal reaches 1 to 2 billion tonnes a year by 2040, spread across weathering, bioenergy with capture, direct air capture with mineralization and early ocean alkalinity work, with point source capture above a gigatonne. Emissions rise slightly in the early 2030s under compute demand and then fall fast as ASI-designed grids and industrial processes are deployed, reaching about 24 to 27 billion tonnes in 2040; warming is near 1.6 degrees. Solar radiation modification becomes an active political question because the models are now trusted: a full-Earth digital twin can state the regional consequences of a 0.2 degree stratospheric program to a precision no human assessment reached. At least one coalition proposes a capped program tied to a removal ramp, and the termination risk argument, that any program must be backed by removal capacity able to replace it, becomes the central design constraint. No large injection occurs before 2040.`,
      dependencies: ['state-of-the-field-2026', 'perovskite-tandem-solar', 'hyperscale-ai-datacenters', 'nuclear-power', 'haber-bosch', 'controlled-fire'],
      uncertainties: [
        'Whether a superintelligence can shorten the lead time of mines, wells and pipelines that depend on physical construction and local consent.',
        'Ocean alkalinity verification at scale has never been demonstrated and may fail on secondary precipitation or on mixing.',
        'A trusted digital twin could produce either a legitimate multilateral program or a unilateral one; the political outcome is not a physics question.',
      ],
      indicators: [
        'Engineered removal above one billion tonnes a year by 2038.',
        'Basalt quarrying for weathering above one billion tonnes a year.',
        'A full-Earth model whose regional precipitation forecasts under aerosol forcing are validated against volcanic and trial data within stated error.',
        'A formal multilateral proposal for a capped stratospheric program with a removal backstop.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch depends on a discontinuity in design capability with no precedent, and the physical build rates assumed here are at the edge of what mining and drilling sectors have ever achieved.',
      sources: [
        { author: 'David J. Beerling et al.', title: 'Potential for large-scale CO2 removal via enhanced rock weathering with croplands', publisher: 'Nature', year: 2020 },
        { author: 'Phil Renforth and Gideon Henderson', title: 'Assessing ocean alkalinity for carbon sequestration', publisher: 'Reviews of Geophysics', year: 2017 },
        { author: 'Andy Parker and Peter J. Irvine', title: 'The Risk of Termination Shock From Solar Geoengineering', publisher: "Earth's Future", year: 2018 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2040-2060                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'climate-engineering',
      window: '2040-2060',
      branch: 'slow',
      headline: 'Toward net zero by 2060 with a few gigatonnes of removal; warming heads for a 2.1 to 2.4 peak',
      narrative: `In the Baseline, AGI from about 2038 accelerates a field that has already found its cost floor, and the window is one of scaling rather than invention. Engineered removal grows from about half a billion tonnes a year in 2040 to 3 to 5 billion by 2060, with bioenergy with capture and rock weathering near their sustainable caps of a few billion tonnes each and direct air capture, now at 100 to 200 dollars per tonne on surplus solar and the first fusion heat, supplying the rest. Point source capture approaches 2 billion tonnes a year at cement, steel and chemical plants that cannot electrify. Gross emissions fall to roughly 10 to 15 billion tonnes by 2060, so net emissions approach zero at the end of the window but do not cross it. The temperature arithmetic follows from the transient response of about 0.45 degrees per thousand billion tonnes: cumulative emissions of roughly 900 billion tonnes between 2026 and 2060, plus the unmasking of cooling sulfate pollution as coal and shipping clean up, put the long term mean near 1.9 to 2.0 degrees in 2060 and on course for a peak of about 2.1 to 2.4 degrees in the 2070s. Solar radiation modification remains researched, not deployed, through the 2040s under the moratorium of the 2030s; by the 2050s, with warming near 2 degrees and removal visibly scaling, the debate turns to whether a small program should shave the peak, and this branch has not resolved it by 2060. Adaptation engineering is the larger industry: desalination passes 400 million cubic meters a day, coastal barriers protect most rich-country deltas and few poor ones, and managed retreat begins in low islands and parts of Bangladesh and the Nile delta. Sea level, rising about 5 millimeters a year, is the change no removal reverses on any human timescale. AI climate models forecast regional change a decade out with useful skill, which mostly improves adaptation planning.`,
      dependencies: ['perovskite-tandem-solar', 'nif-fusion-ignition', 'nuclear-power', 'electric-grid', 'haber-bosch', 'watt-separate-condenser'],
      uncertainties: [
        'Climate sensitivity in the upper half of the assessed range would put the Baseline peak nearer 2.6 degrees and change the SRM calculus.',
        'Bioenergy and weathering caps may bind below the assumed few billion tonnes each, pushing more volume to costlier direct air capture.',
        'Institutional continuity over twenty years is assumed; a prolonged breakdown in carbon accounting or storage liability would slow the ramp.',
      ],
      indicators: [
        'Engineered removal passing 2 billion tonnes a year before 2052.',
        'Global net emissions falling below 5 billion tonnes a year.',
        'Long term mean warming crossing 2.0 degrees, and in which year.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The temperature path follows from well constrained cumulative emission physics, and removal costs by this window are near their energy floors; the open variables are policy support and biomass limits.',
      sources: [
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2021: The Physical Science Basis. Working Group I Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2021 },
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Negative Emissions Technologies and Reliable Sequestration: A Research Agenda', publisher: 'The National Academies Press', year: 2019 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'Net negative near 2060, ten gigatonnes a year of removal, and a live SRM decision',
      narrative: `ASI arrives near 2040 in the Accelerated branch, and this window is the one in which removal reaches the scale of the problem and radiation management is decided rather than debated. Robotic construction and model-managed supply chains, matured in the 2040s, take the lead time of a million-tonne removal module from years to months, and engineered removal grows from about a billion tonnes a year in 2040 to 8 to 12 billion by 2060: 2 to 3 from bioenergy with capture, 1 to 2 from rock weathering, 1 to 3 from ocean alkalinity once its verification networks are trusted, and the balance from direct air capture with mineralization at 80 to 150 dollars per tonne on solar and fusion campuses in the Gulf, Australia, the Atacama and the American Southwest. Gross emissions fall to about 5 billion tonnes by 2060, so the world turns net negative around 2058 to 2062. Cumulative emissions of roughly 800 billion tonnes since 2026 plus aerosol unmasking give a long term mean near 1.8 to 2.0 degrees, which is the peak on this branch. Solar radiation modification becomes a live decision in the mid 2040s, when models trusted by every party show that a stratospheric program of a few million tonnes of sulfur a year would hold the peak 0.2 to 0.3 degrees lower and quantify who would get less rain. The atlas does not forecast the outcome; it records the two branches. In one, an international body authorizes a capped, time-limited program in the late 2040s, explicitly bound to the removal ramp so that the cooling can be replaced rather than stopped, and it is wound down from the late 2050s as concentrations begin to fall. In the other, the moratorium holds and the peak is taken in full. Either way the termination risk argument is the central design constraint: no program is permitted without removal capacity able to substitute for it within a decade. Methane removal, using catalytic surfaces and enhanced atmospheric oxidation studied since the 2020s, reaches tens of millions of tonnes a year and measurably shortens the peak.`,
      dependencies: ['humanoid-robotics-revival', 'perovskite-tandem-solar', 'nif-fusion-ignition', 'sputnik', 'haber-bosch', 'electric-grid'],
      uncertainties: [
        'Ocean alkalinity at billions of tonnes a year has no precedent; mixing and secondary precipitation could cap it far lower.',
        'Whether a stratospheric program is authorized is a political outcome that the branch anchor does not determine.',
        'Robotic construction of injection wells and pipelines may face the same local consent limits as human construction.',
        'Methane removal at scale relies on catalytic chemistry that is unproven outside the laboratory in 2026.',
      ],
      indicators: [
        'Engineered removal passing 5 billion tonnes a year before 2055.',
        'Verified ocean alkalinity removal above 500 million tonnes a year.',
        'A binding international decision, either way, on stratospheric aerosol deployment.',
        'Atmospheric carbon dioxide concentration reaching its maximum and beginning to fall.',
      ],
      confidence: 'low',
      confidenceJustification: 'The physics permits this and the branch anchor implies the design and construction capability, but the volumes depend on ocean and weathering methods that are unproven at scale and on a governance decision that cannot be forecast.',
      sources: [
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2022: Mitigation of Climate Change. Working Group III Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2022 },
        { author: 'Robert B. Jackson et al.', title: 'Atmospheric methane removal: a research agenda', publisher: 'Philosophical Transactions of the Royal Society A', year: 2021 },
        { author: 'Paul J. Crutzen', title: 'Albedo Enhancement by Stratospheric Sulfur Injections: A Contribution to Resolve a Policy Dilemma?', publisher: 'Climatic Change', year: 2006 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2040-2060',
      branch: 'fast',
      headline: 'Twenty gigatonnes a year by 2060, bound by rock, wells, ocean chemistry and consent',
      narrative: `The Discontinuous branch enters the 2040s with superintelligence a decade old and the removal industry's designs complete; the window is about throughput and its limits. Primary energy on this branch heads toward 60 to 80 terawatts by 2060, so devoting 100 exajoules a year to removal, about 4 to 5 percent of supply, is affordable, and at 4 gigajoules per tonne that is 25 billion tonnes of direct air capture capacity. The binding constraints are elsewhere. Rock weathering saturates near 2 to 4 billion tonnes a year because basalt quarrying and spreading at that rate already rivals global aggregate production. Bioenergy with capture is held to 3 to 5 billion by land and food. Ocean alkalinity, deployed from ship fleets and coastal outfalls under continuous sensor verification, reaches several billion tonnes but is paced by how fast treated water can absorb carbon dioxide before it leaves the mixed layer and by the risk of carbonate precipitation. Direct air capture with mineralization takes the balance and is limited by drilling: injecting 10 billion tonnes a year of supercritical carbon dioxide is a fluid volume comparable to twice world oil production at its peak, in basalt and saline formations that must be characterized, permitted and monitored one at a time. Engineered removal reaches 15 to 25 billion tonnes a year by 2060, gross emissions fall to about 2 billion, and the world is net negative from around 2048. Warming peaks near 1.8 to 1.9 degrees around 2050 and is falling slowly by 2060, slowly because the ocean and land outgas part of what is removed, so roughly half of gross removal reappears over decades. Solar radiation modification on this branch is decided in the 2040s under stronger pressure, since the tools are trusted and the removal backstop exists; a capped stratospheric program to trim the peak is more likely than not, run by a multilateral body, and is being wound down by the late 2050s as concentrations fall. Legitimacy is the recurring failure mode: the countries hosting quarries, wells and alkalinity outfalls extract terms, and several programs stall on consent rather than engineering.`,
      dependencies: ['state-of-the-field-2026', 'perovskite-tandem-solar', 'nif-fusion-ignition', 'nuclear-power', 'haber-bosch', 'controlled-fire'],
      uncertainties: [
        'Whether societies permit the mining, drilling and ocean footprint implied by 20 billion tonnes a year, or cap it well below.',
        'Carbon cycle rebound could be at the high end of estimates, halving the temperature effect of gross removal.',
        'A stratospheric program could fail politically even with a removal backstop, or could be extended past its cap once societies rely on it.',
      ],
      indicators: [
        'Engineered removal above 10 billion tonnes a year.',
        'Global net emissions negative for three consecutive years.',
        'Annual carbon dioxide injection above 5 billion tonnes with monitored storage.',
        'Atmospheric concentration falling by more than 1 part per million a year.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the far tail of the fast branch; the numbers are derived from energy budgets and per-route physical caps rather than from any project, and the political and ocean constraints are the least forecastable parts.',
      sources: [
        { author: 'David Archer et al.', title: 'Atmospheric Lifetime of Fossil Fuel Carbon Dioxide', publisher: 'Annual Review of Earth and Planetary Sciences', year: 2009 },
        { author: 'Pete Smith et al.', title: 'Biophysical and economic limits to negative CO2 emissions', publisher: 'Nature Climate Change', year: 2016 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2060-2090                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'climate-engineering',
      window: '2060-2090',
      branch: 'slow',
      headline: 'Net negative after 2075: the Baseline peaks near 2.2 degrees and begins a slow descent',
      narrative: `ASI arrives around 2058 in the Baseline, so this window is the Baseline's version of what faster branches saw in the 2040s: superhuman design applied to a removal industry that already works. The starting point is a world at net emissions of a few billion tonnes, engineered removal near 4 billion tonnes a year, and warming near 2.0 degrees and still rising. Through the 2060s robotic construction, cheap fusion heat and superhuman process design push removal cost toward 50 to 100 dollars per tonne and volume to 8 to 12 billion tonnes a year by 2090, with ocean alkalinity finally verified and deployed at scale in the 2070s. Gross emissions reach a floor of 2 to 3 billion tonnes from aviation, agriculture and legacy industry that removal covers. The world turns net negative around 2075, and warming peaks near 2.1 to 2.3 degrees in the 2070s before falling to about 2.0 by 2090; the descent is slow because the carbon cycle returns part of what is removed and because the deep ocean, still warming, holds surface temperature up. Solar radiation modification on this branch stays undeployed through the 2040s and is then decided in the 2060s, when the peak is near and removal is visibly ramping; the atlas treats a small, capped, temporary program in the 2070s as plausible but not the base case. Adaptation dominates the lived experience: sea level is about 0.4 to 0.5 meters above 2000 and rising 6 to 8 millimeters a year, so barriers, elevated infrastructure and retreat from the lowest deltas continue; desalination near a billion cubic meters a day draws about 4 percent of a much larger electricity supply; cooling is universal in inhabited hot regions. Attribution and forecasting are solved problems, with regional climate forecast a decade ahead within stated error. By 2090 the Baseline has a working planetary carbon management system that reached its scale a generation later than the other branches, and roughly a third of the index.`,
      dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-power', 'electric-grid', 'haber-bosch', 'controlled-fire'],
      uncertainties: [
        'The Baseline assumes stable institutions through 2090; disruption would either delay the ramp or replace it with unilateral programs.',
        'Carbon cycle rebound and deep ocean heat release could keep temperature near the peak for decades longer than modelled.',
        'Ice sheet instability at 2.2 degrees could commit sea level rise that no removal reverses, changing adaptation priorities entirely.',
      ],
      indicators: [
        'Global net emissions negative for three consecutive years, and in which year.',
        'Long term mean warming falling for a decade.',
        'Removal cost at or below 100 dollars per tonne across the portfolio.',
      ],
      confidence: 'low',
      confidenceJustification: 'Beyond 2060 the projection rests on cumulative emission physics and scenario anchors rather than on any current project; the direction is defensible and the magnitudes are not.',
      sources: [
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2021: The Physical Science Basis. Working Group I Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2021 },
        { author: 'David Archer et al.', title: 'Atmospheric Lifetime of Fossil Fuel Carbon Dioxide', publisher: 'Annual Review of Earth and Planetary Sciences', year: 2009 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'Managed descent: fifteen gigatonnes a year, SRM wound down, concentrations falling',
      narrative: `Two decades after ASI, the Accelerated branch runs a planetary carbon management system as a utility. Engineered removal rises from about 10 billion tonnes a year in 2060 to 15 to 20 billion by 2090, drawing 60 to 100 exajoules a year from an energy system three to five times the 2026 size, and the portfolio is stable: bioenergy with capture and rock weathering at their caps, ocean alkalinity at several billion tonnes under continuous verification, and direct air capture with mineralization taking half the total at 40 to 80 dollars per tonne. Gross emissions are a residual of 1 to 2 billion tonnes. Cumulative net removal over the window is about 350 to 450 billion tonnes, which after carbon cycle rebound lowers the concentration from a peak near 470 parts per million in the 2050s to roughly 430 by 2090 and the long term mean from a peak near 1.9 to 2.0 degrees to about 1.7. If a capped stratospheric program was authorized in the 2040s, it is wound down between the late 2050s and the 2070s along a schedule set by the removal ramp, so that no year sees a forcing change faster than the natural variability the models can distinguish; termination shock is avoided by design rather than by luck. Methane removal at hundreds of millions of tonnes a year shortens the tail of warming more cheaply per degree than carbon dioxide removal. The ocean is the pacing item: sea level is 0.4 to 0.5 meters above 2000 and still rising at 4 to 6 millimeters a year from deep ocean heat and ice sheets, and no removal changes that before 2126. Adaptation engineering therefore continues, with desalination near a billion cubic meters a day and coastal protection standard in every delta that can pay. Disputes are about allocation: which countries host wells and outfalls, who pays for removal of historical emissions, and how much of the drawdown to purchase per decade. The field reaches about half of its index, with the remaining distance being the ocean's clock.`,
      dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'humanoid-robotics-revival', 'sputnik', 'haber-bosch', 'controlled-fire'],
      uncertainties: [
        'Whether a removal rate of 15 to 20 billion tonnes a year is politically sustained for thirty years, given that its benefits are slow and diffuse.',
        'Ocean alkalinity side effects on ecosystems at scale are unknown and could force a halt.',
        'Ice sheet response to a 2 degree peak could be larger than assessed, committing several meters of sea level rise over centuries.',
      ],
      indicators: [
        'Atmospheric carbon dioxide falling by more than 1 part per million a year for a decade.',
        'Any stratospheric program fully wound down without a measurable warming step.',
        'Global engineered removal above 15 billion tonnes a year.',
      ],
      confidence: 'low',
      confidenceJustification: 'The arithmetic of cumulative removal and carbon cycle rebound is robust, but the volumes, the governance path and the ocean and ice response are all beyond the reach of current evidence.',
      sources: [
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2021: The Physical Science Basis. Working Group I Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2021 },
        { author: 'Robert B. Jackson et al.', title: 'Atmospheric methane removal: a research agenda', publisher: 'Philosophical Transactions of the Royal Society A', year: 2021 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Drawdown at the carbon cycle speed limit; the ocean sets the pace',
      narrative: `By 2060 the Discontinuous branch removes 15 to 25 billion tonnes a year and has been net negative for a decade; in this window the question is how fast a superintelligent civilization can lower the concentration, and the answer is set by the ocean, not by engineering. Removal capacity grows to 25 to 35 billion tonnes a year by the 2070s and then plateaus by choice, because the marginal tonne is fighting the carbon cycle: as the atmosphere falls below the level the surface ocean and land equilibrated to, they release carbon back, so effective drawdown is roughly half to two thirds of gross removal and the ratio worsens as concentrations fall. Cumulative gross removal over the window near a trillion tonnes lowers the concentration from a peak near 460 parts per million around 2050 to roughly 390 by 2090 and the long term mean from about 1.85 degrees to 1.4 to 1.5. Any stratospheric program from the 2040s is fully wound down by the 2060s, and the branch's remaining forcing control is through methane removal and aerosol management. Energy is not a constraint, since removal draws 100 to 150 exajoules from a system of a hundred terawatts or more, and cost is at 30 to 60 dollars per tonne. The remaining limits are physical and social. Storage is monitored across tens of thousands of injection sites and the first questions about the long term integrity of basalt and saline formations at this cumulative scale are answered by measurement. Sea level, about 0.4 meters above 2000, continues to rise at 3 to 5 millimeters a year from deep ocean heat, and the ice sheets' response to a 1.9 degree peak is the largest remaining unknown; adaptation engineering is complete in rich coastal regions and a chosen retreat elsewhere. Politically the field settles into a planetary utility with a mandate to return the concentration toward a chosen target, most often argued as 350 parts per million, over a century. Roughly two thirds of the index is reached, with the balance being time.`,
      dependencies: ['state-of-the-field-2026', 'nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-power', 'haber-bosch', 'controlled-fire'],
      uncertainties: [
        'Carbon cycle rebound could be stronger than modelled, so that gross removal of a trillion tonnes lowers the concentration far less than assumed.',
        'The chosen concentration target is a political decision and could be set higher, leaving the branch at a plateau near 1.5 degrees.',
        'Storage integrity across tens of thousands of sites over centuries has no empirical basis.',
      ],
      indicators: [
        'Atmospheric carbon dioxide below 400 parts per million.',
        'Long term mean warming below 1.5 degrees.',
        'Gross removal rate plateauing while net drawdown continues.',
      ],
      confidence: 'low',
      confidenceJustification: 'This projection is bounded by carbon cycle physics and the branch anchor but has no empirical basis beyond them; it describes a plausible ceiling on the rate of repair, not a forecast of what will be chosen.',
      sources: [
        { author: 'David Archer et al.', title: 'Atmospheric Lifetime of Fossil Fuel Carbon Dioxide', publisher: 'Annual Review of Earth and Planetary Sciences', year: 2009 },
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2021: The Physical Science Basis. Working Group I Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2021 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2090-2126                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'climate-engineering',
      window: '2090-2126',
      branch: 'slow',
      headline: 'A century of repair begins: concentrations toward 450 ppm and warming near 2.0 degrees',
      narrative: `By the last window of the atlas the Baseline has had roughly thirty years of ASI-assisted engineering and its removal system converges on what the other branches built earlier. Engineered removal runs at 12 to 18 billion tonnes a year, at cost near 40 to 80 dollars per tonne on fusion and multijunction solar, across a portfolio fixed by the physical caps described in this field's limits: a few billion each from biomass and rock, several from the ocean, the rest from direct air capture with mineralization. Cumulative net removal from 2075 to 2126 is about 500 to 700 billion tonnes, which after rebound brings the concentration from a peak near 500 parts per million in the 2070s to about 450 by 2126 and the long term mean from a peak near 2.2 degrees to roughly 1.9 to 2.0. The world has had a planetary carbon utility for half a century, and its debates are about targets and pace rather than method. Solar radiation modification on this branch was either never deployed or used briefly around the peak, and by 2126 it is a retired option, kept in reserve against ice sheet surprises. Adaptation is the largest permanent cost: sea level is 0.6 to 0.8 meters above 2000 and rising, so the Baseline's coastal cities are behind barriers, several low island states exist only as legal entities, and river deltas in poor regions have been partly abandoned. Desalination and cooling are universal utilities. The reasoning chain is simple: the physical limits (the separation floor, the ocean's mixing time, the land and rock caps, the residence time of carbon dioxide) were all within a factor of two of practice by 2090, and a century is long enough for slow institutions to reach them. What no branch can shorten is the ocean's memory, and the Baseline, having emitted the most, will spend the longest paying it down. The index reaches about half.`,
      dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-power', 'electric-grid', 'haber-bosch', 'controlled-fire'],
      uncertainties: [
        'Population, demand and institutional stability over a century are unknowable and the Baseline assumes continuity.',
        'Ice sheet thresholds crossed at a 2.2 degree peak could dominate the century regardless of removal.',
        'Public willingness to fund removal of historical carbon for fifty years without visible reward is untested.',
      ],
      indicators: [
        'Atmospheric carbon dioxide below 460 parts per million.',
        'Long term mean warming below 2.0 degrees and falling.',
        'Removal cost across the portfolio below 60 dollars per tonne.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the physical limits are trustworthy; the projection describes convergence on those limits rather than events.',
      sources: [
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2021: The Physical Science Basis. Working Group I Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2021 },
        { author: 'Kurt Zenz House, Antonio C. Baclig, Manya Ranjan, Ernst A. van Nierop, Jennifer Wilcox and Howard J. Herzog', title: 'Economic and energetic analysis of capturing CO2 from ambient air', publisher: 'Proceedings of the National Academy of Sciences', year: 2011 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'Toward 1.5 degrees again: a carbon utility at steady state and a managed ocean',
      narrative: `The Accelerated branch enters 2090 at about 1.7 degrees and 430 parts per million with a removal system of 15 to 20 billion tonnes a year, and the final window is a steady state with a target. Gross removal holds near 20 billion tonnes a year for most of the window, then tapers, because the marginal benefit falls as the ocean and land return carbon and because the society running it chooses a target near 400 parts per million rather than pre-industrial. Cumulative net removal over the window is about 600 to 700 billion tonnes, taking the concentration to roughly 400 by 2126 and the long term mean to about 1.5 to 1.6 degrees. Cost is near 30 to 50 dollars per tonne, set by the separation floor times a practical multiple, by rock and well logistics, and by monitoring of a hundred thousand storage sites. The other levers are minor but active: methane is held near pre-industrial concentrations by removal, and stratospheric aerosols are not used, though a capacity to deploy them within a year is maintained by treaty as insurance against an ice sheet collapse. Weather modification has become regional water management, with cloud seeding, evaporation control and reservoir operation directed by forecasts that see a season ahead. The ocean remains the slow variable. Its surface has cooled with the air, but the deep ocean is still warming from the twentieth and twenty-first centuries, sea level is 0.6 to 0.7 meters above 2000 and rising at 3 to 4 millimeters a year, and the coastal engineering built in the 2050s is being raised and extended. The index approaches 70 by 2126, the remaining margin being capacity that a stable civilization declines to build and time that no engineering compresses. The reasoning rests on three fixed points: the separation floor, which caps cost; the per-route caps from land, rock and ocean chemistry, which set the portfolio; and the ocean's mixing and heat uptake timescales, which set the pace. Everything else, especially the target, is a choice this atlas cannot forecast.`,
      dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'sputnik', 'haber-bosch', 'electric-grid', 'controlled-fire'],
      uncertainties: [
        'The chosen concentration target and the willingness to pay for it over decades are political outcomes.',
        'Storage integrity over a century at this cumulative scale has no empirical basis.',
        'Ice sheet dynamics could force either faster drawdown or a return to aerosol management.',
      ],
      indicators: [
        'Atmospheric carbon dioxide at or below 400 parts per million.',
        'Long term mean warming at or below 1.6 degrees.',
        'Gross removal tapering while concentration continues to fall.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a limit-bounded description, not a forecast. The physical fixed points are secure; the social choices are not.',
      sources: [
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2021: The Physical Science Basis. Working Group I Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2021 },
        { author: 'Phil Renforth and Gideon Henderson', title: 'Assessing ocean alkalinity for carbon sequestration', publisher: 'Reviews of Geophysics', year: 2017 },
      ],
    },
    {
      fieldId: 'climate-engineering',
      window: '2090-2126',
      branch: 'fast',
      headline: 'Below 1.5 and heading for 350 ppm: a planet under deliberate management',
      narrative: `In the Discontinuous branch the concentration passed below 400 parts per million around 2090 and the final window is about the last stretch of repair and the beginning of maintenance. Gross removal continues at 20 to 30 billion tonnes a year through the 2100s and then falls as the target is approached, with cumulative net removal over the window near 700 to 900 billion tonnes taking the concentration to roughly 350 to 370 parts per million by 2126 and the long term mean to about 1.1 to 1.3 degrees. Below that, the carbon cycle's rebound makes each tonne less effective, and the civilization decides, in an argument that runs for decades, whether to spend energy and rock on the remaining 70 parts per million to pre-industrial or to hold a warm but stable climate. Cost is near the practical floor, 20 to 40 dollars per tonne, and energy for removal is a few percent of a supply well above a hundred terawatts. The field's tools are otherwise complete: methane and nitrous oxide are managed at chosen concentrations, regional weather is steered within the limits of chaos by forecasts that see a season ahead, and a stratospheric capability is maintained but unused. The remaining problems are inheritance. Sea level is 0.5 to 0.6 meters above 2000 and still rising, because the deep ocean releases heat for centuries and because the ice sheets' response to the 2050 peak is still unfolding; the branch has the engineering to protect any coastline it chooses and spends the century deciding which. Storage integrity across a cumulative two trillion tonnes of injected and mineralized carbon is monitored continuously and, on the evidence so far, holds. The index reads near 80 by 2126: separation near its thermodynamic floor, every removal route at its physical cap or deliberately below it, forcing under measurement and control, and the balance of the index representing ocean and ice timescales that no intelligence shortens. The atlas does not forecast the target that will be chosen; it records that on this branch, and only this branch, the choice is fully available before 2126.`,
      dependencies: ['state-of-the-field-2026', 'nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-power', 'haber-bosch', 'controlled-fire'],
      uncertainties: [
        'How much repair a superintelligent civilization wants, and how fast, is the dominant unknown and is not a physics question.',
        'Carbon cycle rebound at low concentrations could make the last 50 parts per million far costlier than the first 100.',
        'Ice sheet commitment from the 2050 peak could dominate coastal outcomes regardless of atmospheric repair.',
      ],
      indicators: [
        'Atmospheric carbon dioxide below 370 parts per million.',
        'Long term mean warming below 1.3 degrees.',
        'Gross removal falling year on year while concentration still declines.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window describes a civilization at the physical limits of the field; the numbers are limit-derived and the choices behind them are unforecastable.',
      sources: [
        { author: 'David Archer et al.', title: 'Atmospheric Lifetime of Fossil Fuel Carbon Dioxide', publisher: 'Annual Review of Earth and Planetary Sciences', year: 2009 },
        { author: 'Paul J. Crutzen', title: 'Albedo Enhancement by Stratospheric Sulfur Injections: A Contribution to Resolve a Policy Dilemma?', publisher: 'Climatic Change', year: 2006 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 5, low: 4, high: 6 },
      { year: 2030, value: 6, low: 5, high: 7 },
      { year: 2040, value: 9, low: 7, high: 12 },
      { year: 2060, value: 17, low: 11, high: 24 },
      { year: 2090, value: 32, low: 20, high: 45 },
      { year: 2126, value: 48, low: 28, high: 66 },
    ],
    moderate: [
      { year: 2026, value: 5, low: 4, high: 6 },
      { year: 2030, value: 6, low: 5, high: 8 },
      { year: 2040, value: 12, low: 9, high: 16 },
      { year: 2060, value: 27, low: 18, high: 38 },
      { year: 2090, value: 50, low: 32, high: 66 },
      { year: 2126, value: 68, low: 45, high: 84 },
    ],
    fast: [
      { year: 2026, value: 5, low: 4, high: 6 },
      { year: 2030, value: 7, low: 5, high: 9 },
      { year: 2040, value: 16, low: 10, high: 24 },
      { year: 2060, value: 38, low: 24, high: 54 },
      { year: 2090, value: 64, low: 42, high: 80 },
      { year: 2126, value: 80, low: 55, high: 92 },
    ],
  },
  sources: [
    { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2021: The Physical Science Basis. Working Group I Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2021 },
    { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2022: Mitigation of Climate Change. Working Group III Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2022 },
    { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Negative Emissions Technologies and Reliable Sequestration: A Research Agenda', publisher: 'The National Academies Press', year: 2019 },
    { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Reflecting Sunlight: Recommendations for Solar Geoengineering Research and Research Governance', publisher: 'The National Academies Press', year: 2021 },
    { author: 'Stephen M. Smith et al.', title: 'The State of Carbon Dioxide Removal, 2nd Edition', publisher: 'The State of Carbon Dioxide Removal', year: 2024, url: 'https://www.stateofcdr.org' },
    { author: 'David W. Keith, Geoffrey Holmes, David St. Angelo and Kenton Heidel', title: 'A Process for Capturing CO2 from the Atmosphere', publisher: 'Joule', year: 2018 },
    { author: 'Pierre Friedlingstein et al.', title: 'Global Carbon Budget 2024', publisher: 'Earth System Science Data', year: 2025 },
    { author: 'International Energy Agency', title: 'Direct Air Capture: A key technology for net zero', publisher: 'IEA', year: 2022 },
  ],
  lastReviewed: '2026-09-04',
};
