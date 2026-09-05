import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'energy',
  index: 2,
  name: 'Energy',
  code: 'ENERGY',
  summary: `Energy is the substrate every other field draws on, and in September 2026 it is in the middle of its fastest structural change since the adoption of oil. The world still takes roughly four fifths of its primary energy (about 620 exajoules a year by the most recent full-year statistics) from coal, oil and gas, but almost all of the growth at the margin is electric and most of that is solar. Photovoltaic additions passed 500 gigawatts a year in 2024, stationary battery installations reached the order of 170 gigawatt hours a year, and module and cell prices fell by more than half in three years, making solar with storage the cheapest new electricity across most of the inhabited world. Nuclear is reviving in policy, licences, restarts and hyperscaler contracts, but outside China adds little capacity before 2030. Fusion crossed scientific ignition at the National Ignition Facility in 2022 and private ventures are commissioning first devices, yet no fusion machine has delivered net electricity. The new demand driver is computation: datacenters used about 1.5 percent of world electricity in 2024 and are the fastest growing load in several grids. The binding constraints have shifted from generation cost to interconnection, transmission, firm capacity, permitting and minerals.`,
  indexDefinition: `The index measures how far the human energy system has moved toward its plausible physical ceiling, blending five components: usable energy per person at low marginal cost, conversion efficiency relative to the thermodynamic limits of each source (Carnot, Shockley-Queisser, Betz, Lawson), storage density relative to chemistry ceilings, the ability to move power across continents with small losses, and carbon intensity approaching zero. A score of 100 means a civilization drawing a few hundred terawatts continuously (ten to twenty times the 2026 rate, still under a thousandth of the sunlight the Earth intercepts) from fusion and multijunction solar operating close to their limits, with storage near the lithium-air and lithium-sulfur ceilings and superconducting or HVDC transmission at planetary scale. September 2026 sits near 12.`,
  physicalLimits: [
    {
      name: 'Carnot limit',
      description: `No heat engine operating between a hot reservoir at temperature T_hot and a cold reservoir at T_cold can convert more than the fraction 1 minus T_cold divided by T_hot of the heat into work. For a combined cycle gas turbine with a 1,600 kelvin firing temperature and a 300 kelvin sink the ceiling is about 81 percent; real plants reach about 64 percent. Light water reactors, limited to about 600 kelvin steam, cannot exceed roughly 50 percent and achieve 33 to 37 percent. The limit shapes every thermal option in this field: fission, fusion (whose blankets are thermal), geothermal (whose low temperatures cap efficiency near 10 to 20 percent) and concentrated solar. Only direct conversion (photovoltaics, fuel cells, aneutronic fusion concepts) sidesteps it.`,
      sources: [
        { author: 'Sadi Carnot', title: 'Reflexions sur la puissance motrice du feu', publisher: 'Bachelier', year: 1824 },
        { author: 'Yunus A. Cengel and Michael A. Boles', title: 'Thermodynamics: An Engineering Approach', publisher: 'McGraw-Hill', year: 2014 },
      ],
    },
    {
      name: 'Shockley-Queisser limit',
      description: `Detailed balance sets the maximum efficiency of a single junction solar cell under unconcentrated sunlight at about 33.7 percent, reached at a band gap near 1.34 electron volts; silicon, at 1.12 electron volts, tops out near 29.4 percent and the best laboratory silicon cells are at about 27 percent. Stacking junctions with different band gaps raises the ceiling to roughly 45 percent for two junctions, about 51 percent for three, and about 68 percent for an infinite stack without concentration (86.8 percent under maximum concentration). Perovskite on silicon tandems, certified above 34 percent in 2024 and 2025, are the practical route to the two junction ceiling; every projection here assumes module efficiencies stay below these numbers.`,
      sources: [
        { author: 'William Shockley and Hans J. Queisser', title: 'Detailed Balance Limit of Efficiency of p-n Junction Solar Cells', publisher: 'Journal of Applied Physics', year: 1961 },
        { author: 'Martin A. Green et al.', title: 'Solar cell efficiency tables (Version 65)', publisher: 'Progress in Photovoltaics', year: 2025 },
      ],
    },
    {
      name: 'Betz limit',
      description: `A wind turbine extracts energy by slowing the air that passes through its rotor, and if it stopped the air completely no more air could flow through. Betz showed in 1920 that the optimum is to slow the flow to one third of its upstream speed, capturing at most 16/27, or 59.3 percent, of the kinetic energy in the swept area. Modern three-blade rotors reach power coefficients near 0.50, so roughly 85 percent of the theoretical ceiling is already taken. Remaining gains in wind come from taller towers reaching faster winds, larger swept areas, lower capital cost and offshore siting, not from rotor physics. The limit also bounds airborne and vertical axis concepts.`,
      sources: [
        { author: 'Albert Betz', title: 'Das Maximum der theoretisch moglichen Ausnutzung des Windes durch Windmotoren', publisher: 'Zeitschrift fur das gesamte Turbinenwesen', year: 1920 },
        { author: 'Tony Burton, Nick Jenkins, David Sharpe and Ervin Bossanyi', title: 'Wind Energy Handbook', publisher: 'Wiley', year: 2011 },
      ],
    },
    {
      name: 'Lawson criterion and fusion triple product',
      description: `A fusion plasma produces net power only when the product of density, temperature and energy confinement time exceeds a threshold that depends on the fuel. For deuterium-tritium the triple product must reach roughly 3 times 10 to the 21 keV seconds per cubic meter at temperatures of 10 to 20 keV (over 100 million kelvin), and the energy released per reaction is fixed at 17.6 MeV, so fuel consumption and neutron loads are set by physics rather than design. Magnetic devices approach the threshold with long confinement at low density; inertial devices with enormous density for nanoseconds. The National Ignition Facility met the ignition condition in December 2022; no device has yet exceeded engineering breakeven, where electricity out exceeds electricity in.`,
      sources: [
        { author: 'John D. Lawson', title: 'Some Criteria for a Power Producing Thermonuclear Reactor', publisher: 'Proceedings of the Physical Society B', year: 1957 },
        { author: 'H. Abu-Shawareb et al. (Indirect Drive ICF Collaboration)', title: 'Achievement of Target Gain Larger than Unity in an Inertial Fusion Experiment', publisher: 'Physical Review Letters', year: 2024 },
      ],
    },
    {
      name: 'Battery energy density ceilings',
      description: `Chemistry fixes the maximum energy a storage reaction can hold. Commercial lithium-ion cells with graphite anodes and nickel-rich cathodes reach about 250 to 300 watt hours per kilogram; lithium iron phosphate about 160 to 200; sodium-ion about 150 to 175. Lithium metal anodes with solid electrolytes can plausibly reach 400 to 500. The theoretical specific energy of lithium-sulfur is about 2,500 watt hours per kilogram and of lithium-air about 3,500 (excluding the mass of oxygen), against roughly 12,000 for gasoline, though practical cells realize a fraction of the theoretical figure once electrolyte, current collectors and packaging are included. These ceilings bound electric aviation, shipping and seasonal storage, and explain why hydrogen and synthetic fuels persist in the projections.`,
      sources: [
        { author: 'Peter G. Bruce, Stefan A. Freunberger, Laurence J. Hardwick and Jean-Marie Tarascon', title: 'Li-O2 and Li-S batteries with high energy storage', publisher: 'Nature Materials', year: 2012 },
        { author: 'Jurgen Janek and Wolfgang G. Zeier', title: 'A solid future for battery development', publisher: 'Nature Energy', year: 2016 },
      ],
    },
    {
      name: 'Solar constant, land and material flows',
      description: `The Sun delivers about 1,361 watts per square meter at the top of the atmosphere, about 173,000 terawatts across the Earth's disk, against a human primary energy rate near 20 terawatts. Averaged over day, night and weather, a good site receives 200 to 250 watts per square meter, so a 100 terawatt solar civilization at 25 percent conversion would need on the order of two million square kilometers of collector, a fifth of the Sahara. The constraint is therefore not the energy budget but the material throughput: glass, silicon, aluminum, copper, steel and the mining rates behind them, plus transmission from sunny land to demand. Waste heat from even 200 terawatts remains under 0.001 of absorbed sunlight, well below the climate forcing of accumulated carbon dioxide.`,
      sources: [
        { author: 'David J. C. MacKay', title: 'Sustainable Energy: Without the Hot Air', publisher: 'UIT Cambridge', year: 2009 },
        { author: 'Carlos de Castro, Margarita Mediavilla, Luis Javier Miguel and Fernando Frechoso', title: 'Global solar electric potential: A review of their technical and sustainable limits', publisher: 'Renewable and Sustainable Energy Reviews', year: 2013 },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ */
    /* 2026-2030                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'energy',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Solar and batteries carry the transition while nuclear and fusion remain on paper',
      narrative: `Through 2030 the energy system changes on learning curves that were already visible in 2024 and 2025. Solar additions, above 500 gigawatts a year in 2024, keep growing toward roughly 700 to 900 gigawatts a year by 2030, concentrated in China, India, the United States, the Middle East and Southeast Asia. Crystalline silicon modules at 22 to 24 percent efficiency stay dominant; perovskite on silicon tandems ship from pilot lines at premium prices while makers work through outdoor durability, and their share of global output stays in the low single digits. Lithium iron phosphate cells settle below 60 dollars per kilowatt hour at the factory gate in China, making four hour storage cheaper than new gas peakers in most markets; sodium-ion cells enter stationary and small vehicle niches. Wind grows more slowly, held by permitting, offshore cost overruns and turbine reliability. On the grid the story is congestion: interconnection queues in the United States and Europe run to several years, gas turbine order books are full, and utilities lean on demand response and batteries to cover datacenter load, which the IEA projects near 945 terawatt hours worldwide by 2030 from about 415 in 2024. Nuclear adds capacity mainly in China, which has about 30 reactors under construction; in the West the window brings restarts (Palisades, the Crane plant), life extensions, and the first small modular reactor construction sites in Ontario, Wyoming and Texas, but no new Western SMR generates commercially before the end of 2030. In fusion, the private tokamak SPARC attempts its first plasma and a scientific gain above one, NIF pushes yields above its 2022 record, and ITER pursues a 2034 start of research operation. Fossil fuels still supply about three quarters of primary energy in 2030, with global carbon dioxide emissions near their plateau. For households in Australia, Germany, California and Texas, rooftop solar with a home battery and an electric car is ordinary; electricity prices are set increasingly by transmission and firming, not fuel.`,
      dependencies: ['hyperscale-ai-datacenters', 'perovskite-tandem-solar', 'lithium-ion-battery', 'silicon-solar-cell', 'electric-grid', 'faraday-induction'],
      uncertainties: [
        'Trade barriers on Chinese modules and cells could raise costs outside China by 30 to 60 percent and slow deployment in the United States and Europe.',
        'Perovskite tandem field durability is not yet proven over 25 years, so their commercial share by 2030 could be near zero or several percent.',
        'Datacenter load growth could undershoot IEA projections if model efficiency gains outpace demand, or overshoot if agentic workloads scale faster than expected.',
      ],
      indicators: [
        'Annual global solar installations reported by Ember, the IEA and BloombergNEF, and whether they pass 700 gigawatts by 2028.',
        'Whether SPARC reports a plasma gain above one before the end of 2028.',
        'Factory gate prices of lithium iron phosphate cells in China and the first sodium-ion cells below 50 dollars per kilowatt hour.',
        'Construction progress and cost reports for the Darlington BWRX-300 and Natrium projects.',
      ],
      confidence: 'high',
      confidenceJustification: 'Most 2030 outcomes are set by projects already under construction and learning curves that have held for four decades. The main risk to this projection is policy shock rather than technology.',
      sources: [
        { author: 'International Energy Agency', title: 'World Energy Outlook 2024', publisher: 'IEA', year: 2024, url: 'https://www.iea.org/reports/world-energy-outlook-2024' },
        { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
        { author: 'Ember', title: 'Global Electricity Review 2025', publisher: 'Ember', year: 2025 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'The same hardware, pulled harder: compute demand and AI-assisted engineering',
      narrative: `In the Accelerated branch the physical energy system of 2030 looks much like the Baseline: solar adds 700 to 1,000 gigawatts a year, lithium iron phosphate dominates storage, wind grows modestly and Western SMRs are still under construction. Two things differ. First, demand from computation is higher and more concentrated. Frontier training runs move from hundreds of megawatts to campuses planned at one to five gigawatts each, and the hyperscalers become the largest buyers of firm power in the world, signing nuclear restart and life extension contracts, gas turbine supply agreements and long duration storage offtakes. Grid operators in Texas, Virginia, Ireland and parts of China ration interconnection, and behind-the-meter gas generation returns in volume, so emissions from electricity in the United States flatten rather than fall. Second, AI systems become useful engineering tools before they are researchers. Automated surrogate modelling shortens the design loop for turbine blades, cell chemistries and reactor components; large language models draft permit applications and interconnection studies; and reinforcement learning controllers run tokamak plasmas and grid dispatch. None of this changes what is built by 2030, but it lowers soft costs and shortens studies that used to take years. Perovskite tandem lines benefit most, because accelerated aging models help makers reach 25 year warranties faster; their share of modules is still small but growing quickly at the end of the window. Fusion sees a flood of private capital after SPARC's first results, with two or three ventures announcing pilot plant sites. By late 2030 the first models that a plurality of researchers call AGI are two years away, and the energy industry has begun to plan for a decade of demand growth it had not expected in 2024. Household experience is little changed from the Baseline except for higher retail tariffs in datacenter regions.`,
      dependencies: ['hyperscale-ai-datacenters', 'agentic-coding-tools', 'perovskite-tandem-solar', 'lithium-ion-battery', 'nuclear-power', 'electric-grid'],
      uncertainties: [
        'How much of planned multi-gigawatt datacenter capacity is actually built by 2030 depends on chip supply and on whether training compute keeps scaling.',
        'Regulators may block behind-the-meter gas or force datacenters to pay for transmission, changing which regions win the build-out.',
        'The productivity gain from AI design tools in heavy engineering is not yet measured and could be small before 2030.',
      ],
      indicators: [
        'Aggregate announced datacenter capacity with signed power supply agreements above one gigawatt per site.',
        'Whether hyperscaler power purchase agreements for restarted or uprated nuclear plants exceed five gigawatts.',
        'Adoption of learned controllers in commercial grid dispatch and in at least one operating tokamak.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The physical build-out is well constrained but the compute demand curve and the timing of useful AI engineering tools are not. The window ends before the branch anchors diverge sharply.',
      sources: [
        { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
        { author: 'Lazard', title: 'Levelized Cost of Energy+ (LCOE+) 2024', publisher: 'Lazard', year: 2024 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2026-2030',
      branch: 'fast',
      headline: 'Compute becomes the binding load and energy becomes the binding constraint on compute',
      narrative: `The Discontinuous branch reaches AGI around 2029, and in this window energy is the sector that notices first. Frontier laboratories and their backers plan compute clusters at five to ten gigawatts, with several sites in the United States, the Gulf and China. That is the scale of a large nuclear fleet, and none of it can be built on the normal grid timetable, so 2027 to 2030 sees a scramble for firm power: every reactor restart, uprate and life extension that can be approved is approved; gas turbines are contracted years out; and solar plus multi-hour battery campuses are laid out in Texas, Nevada, Arizona and the Arabian Peninsula because they are the only thing that can be built in under two years at gigawatt scale. Regional electricity demand growth returns to rates last seen in the 1960s, tariffs rise for other consumers, and legislatures argue about who pays for transmission. The hardware being installed is nevertheless the same as in the other branches: silicon modules, lithium iron phosphate cells, combined cycle gas and light water reactors. Perovskite tandems, SMRs and fusion are not fast enough to matter before 2030 whatever the models say. What changes late in the window is the direction of research. From 2029 the first AGI-class systems are put to work on reactor design, magnet engineering, electrolyte discovery and plasma control, and they produce designs faster than any regulator, fab or supply chain can consume. Fusion ventures with pilot plant plans find their engineering critical paths reduced but their permitting and construction paths unchanged. By the end of 2030 the world energy system is a few percent larger and slightly dirtier than the Baseline, and the largest energy story is that the future of computation will be decided by who can build power plants.`,
      dependencies: ['hyperscale-ai-datacenters', 'state-of-the-field-2026', 'nuclear-power', 'lithium-ion-battery', 'electric-grid', 'watt-separate-condenser'],
      uncertainties: [
        'Whether AGI-scale compute build-out proceeds at multi-gigawatt scale depends on capital availability and on export controls on chips.',
        'Public resistance to tariff increases and to gas plants near datacenters could delay projects or force relocation abroad.',
        'The first AGI systems may be more useful for software than for physical engineering, reducing their near-term effect on energy R&D.',
      ],
      indicators: [
        'Announced compute campuses above five gigawatts with financed power supply.',
        'Year on year electricity demand growth above four percent in the United States or above eight percent in the Gulf states.',
        'Regulatory approvals for reactor uprates and restarts issued in under twelve months.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The branch anchor is close enough that the physical response is constrained by known lead times. The uncertainty lies in how much compute is actually demanded and whether the political system tolerates the load.',
      sources: [
        { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
        { author: 'US Department of Energy', title: 'Pathways to Commercial Liftoff: Advanced Nuclear', publisher: 'US Department of Energy', year: 2024 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2030-2040                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'energy',
      window: '2030-2040',
      branch: 'slow',
      headline: 'Solar passes a terawatt a year, tandems go mainstream, first fusion pilot plants',
      narrative: `The 2030s in the Baseline are the decade in which electricity overtakes combustion as the main carrier of new energy use. Solar installations pass one terawatt a year around 2033 and cumulative capacity reaches roughly eight to ten terawatts by 2040, supplying about a quarter of world electricity. Perovskite on silicon tandem modules, at 28 to 32 percent efficiency, take the majority of the premium market by the late 2030s once 25 year field data exists, while single junction silicon remains cheapest per watt. Stationary storage becomes a commodity: lithium iron phosphate and sodium-ion cells at 30 to 40 dollars per kilowatt hour make eight to twelve hours of storage routine, and iron-air, thermal and pumped hydro provide multi-day capacity in a few grids. Solid state cells reach premium electric cars mid-decade at 400 watt hours per kilogram, and electric vehicles pass half of new car sales globally. Nuclear grows slowly: the first Western SMRs enter service in the early 2030s, at costs well above the vendors' promises, and orders follow only where governments carry the risk; China and Russia dominate exports. Fusion advances in steps. SPARC's results, ITER's start of research operation around 2034, and improved stellarators settle the physics questions; two or three private pilot plants attempt net electricity in the late 2030s, and at least one probably succeeds for hours at a time, but none sells power at a competitive price by 2040. Enhanced geothermal grows from tens of megawatts to several gigawatts in the western United States. HVDC corridors link the Sahara to Europe and India, and the North Sea becomes a meshed offshore grid. Datacenters approach 2,000 terawatt hours a year. Fossil fuels fall to about 60 to 65 percent of primary energy by 2040 and global emissions decline about two percent a year. AGI arrives near the end of the window, too late to change what was built.`,
      dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'solid-state-battery-progress', 'nuclear-power', 'silicon-solar-cell', 'electric-grid'],
      uncertainties: [
        'Solar deployment could saturate earlier if curtailment and negative prices erode returns before transmission catches up.',
        'Western SMR costs after the first units could fall on a learning curve or stay flat, as large reactors did in the United States and France.',
        'Fusion pilot plants could slip into the 2040s if tritium breeding, materials or magnet reliability prove harder than expected.',
        'Grid inertia and protection in inverter-dominated systems may cause outages that slow the pace of adding variable generation.',
      ],
      indicators: [
        'Whether annual solar installations exceed one terawatt before 2035.',
        'Cost per kilowatt of the second and third BWRX-300 or Natrium units compared with the first.',
        'A fusion device sustaining engineering gain above one for more than one hour.',
        'Share of grids operating above 90 percent instantaneous inverter-based generation without synchronous condensers.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Learning curves for solar and batteries are well established, but nuclear and fusion outcomes in this window depend on first-of-a-kind projects with poor cost track records.',
      sources: [
        { author: 'Rupert Way, Matthew C. Ives, Penny Mealy and J. Doyne Farmer', title: 'Empirically grounded technology forecasts and the energy transition', publisher: 'Joule', year: 2022 },
        { author: 'International Energy Agency', title: 'World Energy Outlook 2024', publisher: 'IEA', year: 2024, url: 'https://www.iea.org/reports/world-energy-outlook-2024' },
        { author: 'A. J. Creely et al.', title: 'Overview of the SPARC tokamak', publisher: 'Journal of Plasma Physics', year: 2020 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'Automated research compounds: materials, plasmas and permits move faster than plants',
      narrative: `AGI arrives near 2032 in the Accelerated branch, and the second half of the decade shows what automated research does to a physical industry. The first effects are in materials. Closed loop laboratories, directed by models and staffed by robots, screen perovskite compositions, encapsulants, solid electrolytes and structural alloys thousands of times faster than human groups, and the practical results arrive between 2034 and 2038: tandem modules with certified 30 year stability at 32 to 35 percent efficiency, lithium metal solid state cells near 500 watt hours per kilogram in mass production, sodium-ion cells at 200 watt hours per kilogram, and radiation tolerant steels and tungsten alloys for fusion blankets. The second effect is in control. Learned controllers run every new tokamak and stellarator, extending pulse lengths and suppressing disruptions, and one or two private pilot plants reach net electricity by 2037 to 2039 with higher probability than in the Baseline. The third effect is administrative: environmental reviews, interconnection studies and reactor licensing move from years to months as regulators adopt model-assisted review, which does more for deployment than any single technology. What does not accelerate is construction. Concrete cures, transformers take eighteen months, copper and polysilicon mines take a decade, and skilled crews are scarce, so cumulative solar in 2040 is perhaps ten to twelve terawatts instead of eight to ten, fission grows by a few tens of gigawatts more, and fusion is still pre-commercial. Datacenter demand reaches two to three thousand terawatt hours a year and drives most new firm capacity. Electricity approaches 35 percent of final energy by 2040, fossil fuels near 55 to 60 percent of primary energy. By 2040 the field is planning for ASI-directed engineering while still pouring foundations by hand.`,
      dependencies: ['agentic-coding-tools', 'alphafold-2', 'nif-fusion-ignition', 'perovskite-tandem-solar', 'solid-state-battery-progress', 'electric-grid'],
      uncertainties: [
        'Whether closed loop materials discovery transfers to manufacturable products on a five year horizon is unproven outside a few pharmaceutical and catalyst cases.',
        'Regulators may not accept model-assisted review, keeping permitting on human timescales.',
        'Compute demand could grow faster than any firm supply and cause an extended period of fossil-fired datacenter power.',
      ],
      indicators: [
        'Time from laboratory record to commercial product for a new solar or battery material falling below four years.',
        'Median nuclear construction licence review time in the United States, Canada or the United Kingdom falling below eighteen months.',
        'Sustained fusion plasmas above ten minutes at ignition-relevant triple product in a private device.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The mechanism of automated research is plausible and partially demonstrated, but its effect on physical throughput in a single decade is bounded by construction lead times, which are well understood.',
      sources: [
        { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
        { author: 'Jurgen Janek and Wolfgang G. Zeier', title: 'A solid future for battery development', publisher: 'Nature Energy', year: 2016 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superhuman design meets physical clocks: first fusion electricity, energy as the AI bottleneck',
      narrative: `In the Discontinuous branch superintelligent systems direct energy research from 2031, and the decade is defined by the gap between design speed and build speed. Designs improve almost immediately: by 2033 there are fully specified fusion pilot plants, high temperature superconducting transmission systems, tandem module lines with 35 percent efficiency and solid state cell factories that would each have taken human teams a decade. Building them still takes the time it takes. Fusion is the clearest case. A model-designed compact tokamak or pulsed device can be validated in simulation in weeks, but its magnets, vacuum vessel and tritium plant must be fabricated and licensed, so the first net-electric fusion plants run around 2035 to 2037 and the first plants with utility power purchase agreements come online near 2039. Solar is the fastest lever because its factories are already at terawatt scale: annual installations reach 1.5 to 2 terawatts by the late 2030s, with tandem modules dominant, and giant desert campuses in the Gulf, Australia, the Atacama and the American Southwest supply compute clusters of ten to thirty gigawatts each. Stationary storage exceeds a terawatt hour a year of installation. Demand is the defining pressure: the models that redesigned the energy system also consume it, and global datacenter load climbs toward three to five thousand terawatt hours a year by 2040, so fossil generation rises in the early 2030s before renewables and the first fusion plants pull it back down. Superconducting cables carry power into dense compute campuses, and the first continental scale HVDC systems tie deserts to cities. Materials remain the constraint: polysilicon, silver, copper, lithium and helium supply chains are expanded by robotic mining and refining that ASI designs but that still take years to commission. By 2040 primary energy is 20 to 30 percent above 2026, electricity's share of final energy approaches 40 percent, and the fossil share is near 50 percent.`,
      dependencies: ['state-of-the-field-2026', 'hyperscale-ai-datacenters', 'nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-fission', 'einstein-1905'],
      uncertainties: [
        'Whether a superintelligence can shorten fusion engineering paths that depend on neutron irradiation data that takes years to collect.',
        'The scale of compute demand in this branch is unknown; the projection assumes it is bounded by power supply rather than by capital.',
        'Governments may nationalize or ration energy for compute, changing who builds and who benefits.',
        'Rapid material demand could collide with mining lead times and produce a price spike that slows all deployment.',
      ],
      indicators: [
        'A fusion device delivering net electricity to a grid or to a load for more than 24 hours.',
        'Annual solar installations above 1.5 terawatts.',
        'Compute campuses drawing more than ten gigawatts from dedicated generation.',
        'Superconducting transmission lines in commercial service above one gigawatt.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch depends on a discontinuity in research capability whose effect on physical engineering has no precedent. Lead times for fabrication and licensing are the only firm anchors.',
      sources: [
        { author: 'H. Abu-Shawareb et al. (Indirect Drive ICF Collaboration)', title: 'Achievement of Target Gain Larger than Unity in an Inertial Fusion Experiment', publisher: 'Physical Review Letters', year: 2024 },
        { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2040-2060                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'energy',
      window: '2040-2060',
      branch: 'slow',
      headline: 'Solar becomes the largest primary source and fusion enters commercial service',
      narrative: `In the Baseline, AGI arrives around 2038 and its effects on energy accumulate through this window rather than transforming it. Solar is the largest single source of primary energy by the late 2040s, with 20 to 30 terawatts installed by 2060 and modules at 35 to 40 percent from three junction perovskite and silicon stacks approaching the tandem limits. Wind and hydro persist where resources are good, and the Betz limit means wind's contribution grows with towers and sites rather than physics. Electricity supplies over half of final energy by 2060. Storage layers by duration: solid state and sodium cells for hours, iron-air and thermal for days, hydrogen and synthetic fuels for seasons, aviation and shipping. Fission is a steady 600 to 800 gigawatts worldwide, dominated by Chinese and Russian designs and a smaller Western SMR fleet whose costs finally fell after the tenth unit. Fusion becomes commercial in the 2040s: the pilot plants of the late 2030s lead to first-of-a-kind commercial tokamaks and pulsed devices, expensive at first, then cheaper as AGI-assisted engineering and robotic fabrication compress the cost curve; by 2060 fusion supplies a few percent of world electricity, mostly to industry and compute near the plants. Enhanced and superhot rock geothermal reaches tens of gigawatts as drilling automation matures. HVDC and the first long superconducting links form continental grids with intercontinental interconnectors under the Mediterranean, Bering Strait and Indian Ocean. Fossil fuels fall below 40 percent of primary energy by 2060, with remaining use in petrochemicals, aviation and legacy heating. Net removal of carbon dioxide begins at scale using surplus daytime solar. Space solar is demonstrated with multi-megawatt beams but does not compete with ground solar. Primary energy is roughly 40 percent above 2026, per capita energy rises in the developing world, and by 2060 the arrival of ASI is close but its energy demands are met from a system already built for abundance.`,
      dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-power', 'silicon-solar-cell', 'nuclear-fission', 'faraday-induction'],
      uncertainties: [
        'Fusion cost after the first commercial units could remain above fission and solar with storage, leaving it a niche source.',
        'Material constraints on silver, indium, tellurium or lithium could slow multi-terawatt solar and force substitutions.',
        'The Baseline assumes institutions continue to permit and finance transmission; prolonged political failure would keep grids fragmented.',
      ],
      indicators: [
        'Fusion levelized cost of electricity for the fifth commercial unit relative to new fission.',
        'Share of world electricity from solar passing 40 percent.',
        'Commercial operation of an intercontinental HVDC or superconducting interconnector above five gigawatts.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The direction of travel follows from learning curves and physics limits already visible, but the mix between fission, fusion and storage in 2060 depends on cost outcomes that cannot be known before the 2040s.',
      sources: [
        { author: 'International Energy Agency', title: 'Net Zero by 2050: A Roadmap for the Global Energy Sector', publisher: 'IEA', year: 2021 },
        { author: 'Nestor A. Sepulveda, Jesse D. Jenkins, Fernando J. de Sisternes and Richard K. Lester', title: 'The Role of Firm Low-Carbon Electricity Resources in Deep Decarbonization of Power Generation', publisher: 'Joule', year: 2018 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'ASI-directed engineering and robotic construction double the energy system',
      narrative: `ASI arrives around 2040 in the Accelerated branch, and this window is when design speed finally meets a construction industry able to keep up. The enabler is not energy technology but manufacturing: by the mid 2040s robotic construction crews, automated factories for modules, cells, magnets and reactor vessels, and model-managed supply chains cut the lead time for a gigawatt of firm capacity from a decade to two or three years. Fusion scales on that basis. Compact tokamaks and pulsed devices designed in the late 2030s are built in series from the mid 2040s, first for compute campuses and industrial heat, then for grids; by 2060 fusion provides on the order of 10 to 15 percent of world electricity, and its cost is set by fabrication and tritium handling rather than physics. Solar is still the volume source: cumulative capacity reaches 30 to 40 terawatts, with modules near 40 percent from three and four junction stacks and thin, light formats that cover roofs, roads and floating arrays; the first gigawatt-scale space solar station beams power to a receiving array in the 2050s, mostly to prove the supply chain. Storage approaches chemistry ceilings, with lithium-sulfur and early lithium-air cells above 800 watt hours per kilogram enabling regional electric aviation. Transmission is superconducting in dense corridors and HVDC elsewhere, and grids are dispatched by models that see every device. Primary energy roughly doubles from 2026, with electricity above 70 percent of final energy and fossil fuels under 20 percent, mostly as feedstock. Carbon removal runs at several gigatons a year on surplus power. Energy costs fall to one to two cents per kilowatt hour in the best regions, and for most people the cost of energy stops being a visible household expense. The system still runs on physical clocks, but the clocks are now measured in years, not decades.`,
      dependencies: ['humanoid-robotics-revival', 'nif-fusion-ignition', 'perovskite-tandem-solar', 'solid-state-battery-progress', 'nuclear-fission', 'watt-separate-condenser'],
      uncertainties: [
        'Robotic construction of nuclear-grade facilities may face licensing and quality assurance barriers that keep human inspection on the critical path.',
        'Energy demand from ASI-scale computation could absorb most new capacity, delaying benefits to households.',
        'Space solar may remain uncompetitive with ground solar plus storage regardless of launch cost.',
        'Tritium supply for a large deuterium-tritium fusion fleet depends on breeding ratios not yet demonstrated.',
      ],
      indicators: [
        'Lead time from order to commercial operation for a fusion or fission plant below three years.',
        'Fusion share of electricity above five percent in any major grid.',
        'Commercial lithium-sulfur or lithium-air cells above 700 watt hours per kilogram with more than 1,000 cycles.',
      ],
      confidence: 'low',
      confidenceJustification: 'The physics permits this trajectory, and the branch anchor implies design capability far beyond present, but the projection depends on robotic construction and licensing reforms whose timing is speculative.',
      sources: [
        { author: 'Peter G. Bruce, Stefan A. Freunberger, Laurence J. Hardwick and Jean-Marie Tarascon', title: 'Li-O2 and Li-S batteries with high energy storage', publisher: 'Nature Materials', year: 2012 },
        { author: 'John C. Mankins', title: 'SPS-ALPHA: The First Practical Solar Power Satellite via Arbitrarily Large Phased Array', publisher: 'NASA Innovative Advanced Concepts', year: 2012 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2040-2060',
      branch: 'fast',
      headline: 'A civilization building toward a hundred terawatts, limited by mines, land and heat',
      narrative: `In the Discontinuous branch the 2040s open with superintelligence a decade old and an energy industry that has spent ten years converting its designs into factories. The constraint shifts from what can be designed to what the planet can supply. Solar dominates by volume because its material inputs (glass, silicon, aluminum) are abundant: installations run at three to five terawatts a year through the 2040s and cumulative capacity passes 60 terawatts by 2060, with four junction modules near 45 percent, close to the practical tandem ceiling, covering deserts, rooftops, reservoirs and coastal shelves. Fusion scales in parallel as robotic factories produce compact plants in series; by 2060 fusion supplies perhaps a quarter of electricity, and aneutronic and direct conversion variants that sidestep the Carnot limit are in pilot service. Fission is maintained but not expanded much, since fusion and solar undercut it. Storage sits near chemistry limits, with lithium-air and lithium-sulfur cells at 1,000 watt hours per kilogram in aircraft and ships and vast sodium and iron based stationary fleets; hydrogen serves as feedstock. Continental superconducting grids and the first space solar constellations of tens of gigawatts round out supply. Primary energy reaches three to four times the 2026 rate, on the order of 60 to 80 terawatts, a large share consumed by computation and by automated industry. That is still less than a thousandth of the solar flux the Earth intercepts, and waste heat is a small forcing, but land use becomes a visible political issue: a solar civilization of this scale needs a million square kilometers of collectors, and its mines and refineries, however automated, run at rates that strain ecosystems and permits. Fossil fuels are below ten percent of primary energy and net carbon removal is running at ten gigatons a year. Household energy is effectively free at the margin; the price of energy is now a price of land, materials and political consent.`,
      dependencies: ['state-of-the-field-2026', 'nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-fission', 'einstein-1905', 'controlled-fire'],
      uncertainties: [
        'Whether societies permit the land and mining footprint implied by this scale, or instead cap growth well below the physical ceiling.',
        'The share of energy consumed by machine intelligence versus by people is a governance choice not a technical outcome.',
        'Aneutronic fusion may remain out of reach if proton-boron confinement proves harder than deuterium-tritium by the expected margin.',
      ],
      indicators: [
        'Annual solar installations above three terawatts.',
        'World primary energy growth above four percent a year sustained for five years.',
        'A fusion plant with direct conversion delivering electricity above 60 percent of fusion power.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the far tail of the fast branch. The physics allows it, and the anchors imply the design capability, but throughput on this scale requires social permission and material flows with no historical precedent.',
      sources: [
        { author: 'David J. C. MacKay', title: 'Sustainable Energy: Without the Hot Air', publisher: 'UIT Cambridge', year: 2009 },
        { author: 'Vaclav Smil', title: 'Energy and Civilization: A History', publisher: 'MIT Press', year: 2017 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2060-2090                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'energy',
      window: '2060-2090',
      branch: 'slow',
      headline: 'Fusion and solar abundance after ASI, with deployment still measured in decades',
      narrative: `ASI arrives around 2058 in the Baseline, so this window is the Baseline's version of what the faster branches experienced earlier: superhuman design ability applied to a mature, largely decarbonized energy system. The starting point is solid. In 2060 electricity supplies more than half of final energy, solar provides the largest share, fusion is commercial but small, and fossil fuels are below 40 percent of primary energy and falling. What ASI adds is compression of the remaining cost curves. Fusion plants designed with full understanding of plasma turbulence and materials aging, built by robotic factories, become the firm source of choice through the 2070s, replacing fission at end of life and displacing the last gas. Solar modules approach the multijunction limits at 45 percent and are made from abundant elements only. Storage reaches chemistry ceilings, and the long duration problem is solved by a mix of fusion, hydrogen and continental interconnection. Electricity approaches 80 percent of final energy by 2090; fossil fuels serve mostly as chemical feedstock. Primary energy is about twice the 2026 rate, with the increase going to a much larger global middle class, to computation, to desalination and to carbon removal, which by the 2080s has begun to lower atmospheric concentrations. Space solar is deployed at tens of gigawatts for polar and lunar operations more than for terrestrial grids. Deployment remains the slow variable: even with abundant designs, the Baseline's institutions build transmission, plants and mines on timetables set by permits, capital and labour, and the world in 2090 has a clean and cheap energy system that a 2026 planner would recognize, not a transformed one. Energy is around one percent of household spending in rich countries and no longer a limiting input to most industries.`,
      dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-power', 'electric-grid', 'watt-separate-condenser', 'controlled-fire'],
      uncertainties: [
        'The Baseline assumes ASI is deployed under stable institutions; the alternative is either faster deployment or a disrupted system.',
        'Whether fusion or solar plus storage wins the firm power market in the 2070s is unknowable and changes land use dramatically.',
        'Population and demand trajectories after 2060 are highly uncertain and dominate the primary energy figure.',
      ],
      indicators: [
        'Fusion share of world electricity passing 20 percent.',
        'Fossil fuel share of primary energy falling below 20 percent.',
        'Atmospheric carbon dioxide concentration declining year on year.',
      ],
      confidence: 'low',
      confidenceJustification: 'Beyond 2060 the projection relies on extrapolation of physical limits and on scenario anchors rather than on any current project. The direction is defensible; the magnitudes are not.',
      sources: [
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2022: Mitigation of Climate Change. Working Group III Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2022 },
        { author: 'Steven J. Davis et al.', title: 'Net-zero emissions energy systems', publisher: 'Science', year: 2018 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'Toward a hundred terawatts: planetary grids, orbital solar and the land question',
      narrative: `Two decades after ASI, the Accelerated branch's energy system grows into the scale that the fast branch reached earlier. Primary energy rises from about twice the 2026 rate in 2060 to three to five times by 2090, in the range of 60 to 100 terawatts, almost all of it electric. Solar remains the volume source at 60 to 100 terawatts of installed capacity, with modules at the practical multijunction ceiling and manufactured from silicon, aluminum, glass and abundant substitutes for silver and indium. Fusion provides most firm power, with compact plants built in series and sited near demand; direct conversion and aneutronic variants raise plant efficiency above the Carnot limit of thermal cycles. Fission persists mainly in isotope production and legacy fleets. Storage sits at chemistry limits; the seasonal problem is handled by planetary interconnection rather than by batteries, with superconducting and HVDC links spanning oceans so that daylight on one hemisphere powers night on the other. Space solar becomes significant in this window: with orbital manufacturing, constellations of hundreds of gigawatts beam power to receiving arrays in regions with poor ground resource, and orbital industry runs on its own solar supply. The dominant question is no longer supply but footprint. Collectors, mines, refineries, and receiving arrays at this scale occupy a few percent of land in the sunniest regions, and every society holds an argument about how much of its territory should be an energy system. Carbon removal draws several terawatts continuously, and atmospheric concentrations fall toward 400 parts per million by 2090. Energy is free at the margin for people; it is scarce only for the largest computational and industrial users, whose demands are rationed by policy. The field is about 70 percent of its plausible ceiling.`,
      dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'falcon-9-booster-landing', 'nuclear-fission', 'einstein-1905', 'controlled-fire'],
      uncertainties: [
        'Land and ocean use at this scale may be politically capped well below the technical potential.',
        'The relative economics of space solar and ground solar with intercontinental transmission are unresolved.',
        'Growth in demand from machine intelligence could be far above or below the assumed multiple of 2026 primary energy.',
      ],
      indicators: [
        'Space solar delivering more than 100 gigawatts to terrestrial receivers.',
        'Intercontinental interconnection capacity above one terawatt.',
        'World primary energy above 60 terawatts.',
      ],
      confidence: 'low',
      confidenceJustification: 'Everything in this window sits two or three technology generations past current projects. Limits from physics and land are the only firm bounds.',
      sources: [
        { author: 'John C. Mankins', title: 'SPS-ALPHA: The First Practical Solar Power Satellite via Arbitrarily Large Phased Array', publisher: 'NASA Innovative Advanced Concepts', year: 2012 },
        { author: 'Carlos de Castro, Margarita Mediavilla, Luis Javier Miguel and Fernando Frechoso', title: 'Global solar electric potential: A review of their technical and sustainable limits', publisher: 'Renewable and Sustainable Energy Reviews', year: 2013 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Near the terrestrial ceiling: energy limited by heat, land and consent, not technology',
      narrative: `By 2060 the Discontinuous branch already draws 60 to 80 terawatts; in this window the question is how far a superintelligent civilization chooses to go on one planet. Technology is no longer limiting: solar at multijunction limits, fusion in mass production with direct conversion, storage at chemistry ceilings and superconducting planetary grids are all mature by the 2060s. The binding constraints are physical and political. Land: a terrestrial energy system of several hundred terawatts from solar would cover several million square kilometers; fusion needs less land but more cooling water and industrial siting. Heat: at a few hundred terawatts, waste heat is still under a thousandth of absorbed sunlight and is a small climate forcing, but local heat islands around compute and industrial centers become an engineering problem in their own right. Consent: societies that have decarbonized and drawn down carbon dioxide have little appetite for converting more land to collectors, and much of the growth after 2070 goes into orbit, where solar power satellites and lunar manufacturing supply expanding orbital industry and beam a share to Earth. Terrestrial primary energy plateaus around 100 to 150 terawatts by 2090 by choice, while off-planet energy use grows faster and may exceed it by the end of the window. Fission is retired except for specialty isotopes. Fossil carbon is a chemical feedstock only, and atmospheric concentrations are returned toward pre-industrial levels by large scale removal. For people, energy is invisible and unmetered, as water is in rich countries today; the bulk of supply serves machine intelligence, automated industry, desalination, climate management and space activity. The field reaches roughly 70 to 75 percent of its plausible ceiling on Earth, with the remainder of the index representing capacity that this branch may build beyond Earth or decline to build at all.`,
      dependencies: ['starship-flights', 'nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-fission', 'einstein-1905', 'controlled-fire'],
      uncertainties: [
        'Whether terrestrial energy growth is capped by choice at 100 terawatts or continues toward several hundred is a governance outcome.',
        'Orbital energy infrastructure at this scale depends on space manufacturing capability not yet demonstrated at any scale.',
        'Local waste heat management for compute centers of hundreds of gigawatts is an unsolved engineering problem.',
      ],
      indicators: [
        'Terrestrial primary energy growth slowing below one percent a year while orbital energy use grows above ten percent.',
        'Fossil carbon extraction for energy falling to zero.',
        'Orbital solar and lunar generation exceeding ten terawatts.',
      ],
      confidence: 'low',
      confidenceJustification: 'This projection is bounded by physical limits and by the scenario anchor but has no empirical basis beyond them. It describes a plausible ceiling, not a forecast of what will be chosen.',
      sources: [
        { author: 'Nikolai S. Kardashev', title: 'Transmission of Information by Extraterrestrial Civilizations', publisher: 'Soviet Astronomy', year: 1964 },
        { author: 'David J. C. MacKay', title: 'Sustainable Energy: Without the Hot Air', publisher: 'UIT Cambridge', year: 2009 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2090-2126                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'energy',
      window: '2090-2126',
      branch: 'slow',
      headline: 'A century after the transition: mature abundance approaching physical limits',
      narrative: `By the last window of the atlas, the Baseline has had roughly thirty years of ASI-assisted engineering and a century of learning curves, and the energy system converges toward what the other branches reached earlier. Fusion and solar supply nearly all energy. Solar modules operate at multijunction ceilings and are made of abundant elements; fusion plants, thermal and direct conversion, are commodities built by automated factories. Storage is at chemistry ceilings and planetary interconnection carries daylight across hemispheres. Primary energy is three to four times the 2026 rate by 2126, about 60 to 80 terawatts, with most of the growth after 2090 serving computation, climate management, desalination and off-planet activity; per capita human energy use has plateaued in rich and formerly poor countries alike. Fossil carbon is used only as feedstock, and atmospheric carbon dioxide has been drawn back toward 350 parts per million. Space solar supplies orbital and lunar industry and a modest terrestrial share. The remaining gap to the index ceiling is not technical: it represents terrestrial capacity that could be built but is held back by land use decisions, and off-planet capacity that the Baseline builds slowly. Energy in 2126 is a utility like air, priced by land and materials, regulated for heat and ecology rather than for scarcity. The reasoning chain is simple: the physical limits (Shockley-Queisser, Lawson, Carnot, Betz, battery chemistry) were all within a factor of two of practice by 2060, and a century is long enough for even slow institutions to close that gap. What remains uncertain is the size of the civilization drawing on the system and how much of it lives on Earth.`,
      dependencies: ['nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-fission', 'electric-grid', 'watt-separate-condenser', 'controlled-fire'],
      uncertainties: [
        'Whether human population and per capita demand rise or fall after 2090 dominates the primary energy figure.',
        'Institutional stability over a century is unknowable and the Baseline assumes continuity.',
        'New physics (for example practical aneutronic fusion at small scale) could change the mix but not the ceiling.',
      ],
      indicators: [
        'Fossil fuel share of primary energy below five percent.',
        'Global average module efficiency above 40 percent.',
        'Off-planet energy generation above one terawatt.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the physical limits are trustworthy. The projection describes convergence on those limits rather than events.',
      sources: [
        { author: 'Vaclav Smil', title: 'Energy and Civilization: A History', publisher: 'MIT Press', year: 2017 },
        { author: 'William Shockley and Hans J. Queisser', title: 'Detailed Balance Limit of Efficiency of p-n Junction Solar Cells', publisher: 'Journal of Applied Physics', year: 1961 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'A planetary and orbital energy system near its ceiling, with growth moving off Earth',
      narrative: `The Accelerated branch reaches 2090 at three to five times the 2026 primary energy rate, and the final window is about where the growth goes. On Earth, the system is at physical limits: multijunction solar near 45 percent on abundant materials, fusion plants with direct conversion built in series, storage at the lithium-air and lithium-sulfur ceilings, planetary superconducting interconnection, and a fully electric final energy mix. Terrestrial energy use levels off around 100 terawatts by the 2100s, not because more cannot be built but because land, water and heat management set a political ceiling that societies enforce after a century of climate repair. Growth after that is orbital and lunar. Space solar constellations, built from lunar and asteroid material by automated industry, supply an off-planet energy economy that by 2126 rivals the terrestrial one in scale and beams a fraction to receiving arrays on Earth. Fission survives as a specialty for isotopes and for deep space. Carbon dioxide has been drawn down to pre-industrial levels and the climate management system draws a few terawatts continuously. Energy is unmetered for people; demand from machine intelligence and industry is allocated by policy rather than price. The index approaches 85 to 90 by 2126, with the remaining margin representing capacity a planet-bound system chooses not to build. The reasoning here rests on three fixed points: the solar flux, which is enormous relative to any plausible demand; the tandem and fusion limits, which cap conversion efficiency; and the land and heat budgets, which cap terrestrial throughput. Everything else, especially how much of the civilization lives and computes off Earth, is a choice this atlas cannot forecast.`,
      dependencies: ['starship-flights', 'nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-fission', 'einstein-1905', 'controlled-fire'],
      uncertainties: [
        'Orbital and lunar industry at this scale is speculative and may not be pursued at all.',
        'Terrestrial ceilings may be set far lower than 100 terawatts if ecological limits bind earlier than assumed.',
        'The growth in off-planet energy use depends on the size and location of the future civilization, which no model constrains.',
      ],
      indicators: [
        'Terrestrial primary energy stable near 100 terawatts for a decade.',
        'Off-planet energy generation exceeding terrestrial.',
        'Atmospheric carbon dioxide at or below 300 parts per million.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a limit-bounded description, not a forecast. The physical fixed points are secure; the social choices are not.',
      sources: [
        { author: 'Nikolai S. Kardashev', title: 'Transmission of Information by Extraterrestrial Civilizations', publisher: 'Soviet Astronomy', year: 1964 },
        { author: 'John C. Mankins', title: 'SPS-ALPHA: The First Practical Solar Power Satellite via Arbitrarily Large Phased Array', publisher: 'NASA Innovative Advanced Concepts', year: 2012 },
      ],
    },
    {
      fieldId: 'energy',
      window: '2090-2126',
      branch: 'fast',
      headline: 'Energy beyond Earth: terrestrial plateau, orbital growth, and a Kardashev question',
      narrative: `In the Discontinuous branch the terrestrial energy system reached its chosen plateau in the 2080s, and the century's final decades are dominated by energy use beyond Earth. Terrestrial supply stays around 100 to 150 terawatts, entirely from solar at multijunction limits and fusion with direct conversion, on planetary superconducting grids; fossil carbon is a chemical feedstock and atmospheric composition is managed. The stock of collectors and plants is replaced by automated industry on cycles set by material aging rather than by design improvement, since the designs sit at physical limits. Growth continues in orbit and on the Moon, where solar power satellites, lunar surface arrays and fusion plants built from local material supply an industrial and computational economy that by 2126 may consume several times the terrestrial rate. A small fraction is beamed to Earth. On the Kardashev scale, which measures log of power in a logarithmic step of ten to the tenth watts, a civilization at 200 terawatts sits near 0.83 and at one petawatt near 0.9, so even this branch remains below Type I at the end of the atlas, because the solar flux on Earth (about 173,000 terawatts) is a resource no sane planet-bound civilization captures more than a fraction of. The index reads near 90 for this branch by 2126: solar, fusion and storage at their limits, transmission planetary, and terrestrial throughput a deliberate fraction of what land and heat would allow. The reasoning is that after 2060 there is nothing in the physics to improve; only the scale, location and purpose of energy use change, and those are set by a civilization whose composition, in people and machine intelligence, this atlas does not attempt to forecast. Human daily life is unaffected by energy scarcity of any kind; the constraints people feel are ecological, political and about what the energy is for.`,
      dependencies: ['starship-flights', 'nif-fusion-ignition', 'perovskite-tandem-solar', 'nuclear-fission', 'einstein-1905', 'controlled-fire'],
      uncertainties: [
        'How much energy a superintelligent civilization wants, and where, is the dominant unknown and is not a physics question.',
        'Off-planet industrial capacity at the assumed scale has no demonstrated basis and could be far slower to build.',
        'Terrestrial plateaus could be higher or lower depending on ecological and political limits set decades earlier.',
      ],
      indicators: [
        'Off-planet energy generation above ten terawatts.',
        'Terrestrial energy use flat or declining while total civilization energy grows.',
        'Direct conversion fusion plants as the majority of firm terrestrial supply.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window describes a civilization at physical ceilings; the numbers are limit-derived and the choices behind them are unforecastable.',
      sources: [
        { author: 'Nikolai S. Kardashev', title: 'Transmission of Information by Extraterrestrial Civilizations', publisher: 'Soviet Astronomy', year: 1964 },
        { author: 'John D. Lawson', title: 'Some Criteria for a Power Producing Thermonuclear Reactor', publisher: 'Proceedings of the Physical Society B', year: 1957 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 12, low: 11, high: 13 },
      { year: 2030, value: 14, low: 13, high: 15 },
      { year: 2040, value: 19, low: 16, high: 22 },
      { year: 2060, value: 30, low: 24, high: 38 },
      { year: 2090, value: 46, low: 34, high: 60 },
      { year: 2126, value: 60, low: 42, high: 78 },
    ],
    moderate: [
      { year: 2026, value: 12, low: 11, high: 13 },
      { year: 2030, value: 14, low: 13, high: 16 },
      { year: 2040, value: 22, low: 18, high: 27 },
      { year: 2060, value: 42, low: 30, high: 54 },
      { year: 2090, value: 68, low: 48, high: 82 },
      { year: 2126, value: 86, low: 60, high: 95 },
    ],
    fast: [
      { year: 2026, value: 12, low: 11, high: 13 },
      { year: 2030, value: 15, low: 13, high: 17 },
      { year: 2040, value: 27, low: 20, high: 35 },
      { year: 2060, value: 52, low: 35, high: 68 },
      { year: 2090, value: 74, low: 52, high: 90 },
      { year: 2126, value: 90, low: 65, high: 98 },
    ],
  },
  sources: [
    { author: 'International Energy Agency', title: 'World Energy Outlook 2024', publisher: 'IEA', year: 2024, url: 'https://www.iea.org/reports/world-energy-outlook-2024' },
    { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
    { author: 'Ember', title: 'Global Electricity Review 2025', publisher: 'Ember', year: 2025 },
    { author: 'Energy Institute', title: 'Statistical Review of World Energy 2025', publisher: 'Energy Institute', year: 2025 },
    { author: 'National Renewable Energy Laboratory', title: 'Best Research-Cell Efficiency Chart', publisher: 'NREL', year: 2025, url: 'https://www.nrel.gov/pv/cell-efficiency.html' },
    { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2022: Mitigation of Climate Change. Working Group III Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2022 },
    { author: 'Vaclav Smil', title: 'Energy and Civilization: A History', publisher: 'MIT Press', year: 2017 },
    { author: 'Rupert Way, Matthew C. Ives, Penny Mealy and J. Doyne Farmer', title: 'Empirically grounded technology forecasts and the energy transition', publisher: 'Joule', year: 2022 },
  ],
  lastReviewed: '2026-09-04',
};
