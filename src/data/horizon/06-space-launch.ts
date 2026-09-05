import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'space-launch',
  index: 6,
  name: 'Space and Launch',
  code: 'SPACE',
  summary: `Space and launch in September 2026 is defined by one company's cadence and everyone else's response to it. Falcon 9 flew roughly 165 times in 2025, more than every other launcher combined, with individual boosters approaching thirty flights and a list price near 70 million dollars for about 17 tonnes to low Earth orbit, on the order of 4,000 dollars per kilogram. Starship completed eleven integrated test flights through 2025, caught its booster three times, and entered 2026 with a Version 3 vehicle whose propellant transfer demonstration gates both the Artemis lunar lander and any Mars plan. Blue Origin's New Glenn reached orbit in January 2025 and landed its booster on its second flight. China has fielded more than a dozen new launch vehicles, several with reusable first stages in test, and holds to a crewed lunar landing before 2030. Starlink exceeds eight thousand satellites, tracked objects exceed forty thousand, and debris governance lags. Artemis II, the crewed lunar flyby, was manifested for early 2026, with the landing officially in 2027 and independently expected later. Costs are falling, congestion is rising, and the rocket equation has not moved.`,
  indexDefinition: `The index blends six components: cost per kilogram to low Earth orbit on a logarithmic scale against the propellant and amortization floor, annual mass to orbit, permanence of human presence beyond low Earth orbit, the fraction of in-space mass sourced off Earth, achievable specific impulse and delta-v beyond chemical propulsion, and observational reach for exoplanets. A score of 100 means launch at a small multiple of propellant cost, millions of tonnes to orbit a year, self-sustaining populations on the Moon and Mars, most in-space mass mined and made off Earth, probes at several percent of light speed, and spectroscopy of Earth-sized planets around hundreds of stars. September 2026 sits near 9.`,
  physicalLimits: [
    {
      name: 'Tsiolkovsky rocket equation and specific impulse ceilings',
      description: `A rocket's change in velocity equals its exhaust velocity times the natural logarithm of its initial to final mass ratio. Low Earth orbit takes about 9.3 to 9.5 kilometers per second including losses. Chemical exhaust velocity is capped by propellant energy: hydrogen and oxygen give about 450 to 465 seconds of specific impulse in vacuum (4.4 to 4.5 kilometers per second), methane and oxygen 350 to 380, kerosene 300 to 350, solids under 300. With hydrolox the mass ratio for orbit is about 8, so structure plus payload cannot exceed roughly 12 percent of liftoff mass; with kerosene it is 4 to 6 percent. Staging is the only escape. Nuclear thermal engines tested in the 1960s reached about 850 seconds; electric thrusters reach 1,500 to 10,000 seconds at newtons of thrust.`,
      sources: [
        { author: 'Konstantin E. Tsiolkovsky', title: 'Issledovanie mirovykh prostranstv reaktivnymi priborami (The Exploration of Cosmic Space by Means of Reaction Devices)', publisher: 'Nauchnoe Obozrenie', year: 1903 },
        { author: 'George P. Sutton and Oscar Biblarz', title: 'Rocket Propulsion Elements, 9th edition', publisher: 'Wiley', year: 2017 },
      ],
    },
    {
      name: 'Launch cost floor from propellant and hardware amortization',
      description: `A fully reusable launcher still burns propellant, wears hardware, and pays for pads, range, insurance and labor. Falcon 9 propellant costs a few hundred thousand dollars per flight against a price near 70 million; Starship carries about 4,600 tonnes of methane and oxygen, roughly one million dollars at industrial prices, for 100 to 150 tonnes to orbit, a propellant floor near 10 dollars per kilogram. Aircraft sell transport at three to five times fuel cost after a century of optimization, so a mature floor of 30 to 100 dollars per kilogram is defensible and anything below 10 is not. Jones documented the fall from about 50,000 dollars per kilogram (Shuttle, 2018 dollars) to under 3,000 with Falcon 9; the remaining two orders of magnitude are the story of the next fifty years.`,
      sources: [
        { author: 'Harry W. Jones', title: 'The Recent Large Reduction in Space Launch Cost', publisher: '48th International Conference on Environmental Systems', year: 2018 },
        { author: 'George P. Sutton and Oscar Biblarz', title: 'Rocket Propulsion Elements, 9th edition', publisher: 'Wiley', year: 2017 },
      ],
    },
    {
      name: 'Kessler syndrome and orbital carrying capacity',
      description: `Kessler and Cour-Palais showed in 1978 that above a critical density of objects in a shell of low Earth orbit, collisions generate fragments faster than atmospheric drag removes them, so debris grows even with no further launches. Relative velocities near 10 kilometers per second mean a one centimeter fragment carries the energy of a hand grenade. The 2007 Fengyun-1C test and the 2009 Iridium-Cosmos collision each added thousands of tracked fragments that persist for decades. By 2025 catalogues held about 40,000 tracked objects, models estimated over one million fragments above one centimeter, and active satellites exceeded 12,000. Shells below 600 kilometers self-clean within years; shells at 800 to 1,000 kilometers do not on any human timescale. Every constellation projection here is bounded by the shell densities this dynamic permits.`,
      sources: [
        { author: 'Donald J. Kessler and Burton G. Cour-Palais', title: 'Collision Frequency of Artificial Satellites: The Creation of a Debris Belt', publisher: 'Journal of Geophysical Research', year: 1978 },
        { author: 'ESA Space Debris Office', title: 'ESA Space Environment Report 2025', publisher: 'European Space Agency', year: 2025 },
      ],
    },
    {
      name: 'Radiation and microgravity biology',
      description: `Beyond the magnetosphere, galactic cosmic rays deliver about 0.5 to 1 millisievert per day; the Mars Science Laboratory measured 1.84 millisieverts per day in cruise, so a Mars round trip with a surface stay accumulates roughly one sievert, near or above agency career limits and enough to raise lifetime cancer mortality by several percent, with wide uncertainty on heavy ion effects. Shielding against iron nuclei takes meters of regolith or water, not centimeters of aluminum. Microgravity costs bone mass at 1 to 1.5 percent per month in weight bearing sites, shifts fluids, degrades vision in some crew, and alters gene expression, as the NASA Twins Study documented over 340 days. Rotation for artificial gravity is physically simple and operationally untested. These constraints make robots, not people, the default for most off-Earth work in every branch.`,
      sources: [
        { author: 'C. Zeitlin et al.', title: 'Measurements of Energetic Particle Radiation in Transit to Mars on the Mars Science Laboratory', publisher: 'Science', year: 2013 },
        { author: 'Francis A. Cucinotta and Marco Durante', title: 'Cancer risk from exposure to galactic cosmic rays: implications for space exploration by human beings', publisher: 'The Lancet Oncology', year: 2006 },
        { author: 'Francine E. Garrett-Bakelman et al.', title: 'The NASA Twins Study: A multidimensional analysis of a year-long human spaceflight', publisher: 'Science', year: 2019 },
      ],
    },
    {
      name: 'Speed of light and the energy cost of interstellar flight',
      description: `Nothing carrying information or mass exceeds 299,792 kilometers per second. Proxima Centauri is 4.24 light years away, so a probe at 20 percent of light speed takes 21 years to arrive and its data 4.2 years to return; a Mars conversation has a 6 to 44 minute round trip no technology shortens. Kinetic energy at 20 percent of light speed is 1.8 times 10 to the 15 joules per kilogram, which is why the rocket equation rules out fuel-carrying interstellar ships and why Forward in 1984 and Lubin in 2016 proposed leaving the engine at home: a laser array of order 100 gigawatts pushing gram-scale sails. Even that needs phased arrays kilometers across, sails surviving thousands of g, and decades of capital. Crewed interstellar flight lies outside every branch of this atlas.`,
      sources: [
        { author: 'Philip Lubin', title: 'A Roadmap to Interstellar Flight', publisher: 'Journal of the British Interplanetary Society', year: 2016, url: 'https://arxiv.org/abs/1604.01356' },
        { author: 'Robert L. Forward', title: 'Roundtrip Interstellar Travel Using Laser-Pushed Lightsails', publisher: 'Journal of Spacecraft and Rockets', year: 1984 },
        { author: 'Albert Einstein', title: 'Zur Elektrodynamik bewegter Korper', publisher: 'Annalen der Physik', year: 1905 },
      ],
    },
  ],
  projections: [
    {
      fieldId: 'space-launch',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Falcon 9 carries the decade while Starship matures and Artemis slips',
      narrative: `Through 2030 the industry follows the curves already visible in 2025 and 2026. Falcon 9 flies 150 to 200 times a year, its third-party price barely moves because no competitor forces it to, and Starlink passes 12,000 satellites while Amazon's Kuiper and China's Guowang and Qianfan constellations reach the low thousands each. Starship becomes an operational vehicle in this window: it deploys full-size Starlink satellites, demonstrates ship to ship propellant transfer, and recovers boosters routinely, but full and rapid reuse of the upper stage takes more iterations than planned, so by 2030 SpaceX's internal cost may be under 1,000 dollars per kilogram while the price others pay stays in the range of 1,500 to 3,000. New Glenn settles at a handful of flights a year; Vulcan, Ariane 6 and H3 serve institutional customers at 10,000 dollars per kilogram or more. China recovers a reusable first stage before 2028 and test flies the Long March 10 and Mengzhou capsule for its lunar program.

Artemis II flies as a lunar flyby; Artemis III does not land before 2028, and the first Starship lunar landing is uncrewed. A Chinese crewed landing attempt by 2030 is close to a coin flip. No human goes beyond lunar distance. Mars sees Tianwen-3 launch toward sample return around 2028, while NASA's own sample return remains restructured and unfunded at scale. Uncrewed Starship attempts at Mars are possible in the 2028 window but not the 2026 one. Tracked objects climb toward 50,000 and active satellites toward 25,000; the first commercial debris removal missions fly, but no binding international rule on constellation shell densities exists. The Roman Space Telescope launches by 2027, PLATO and Ariel by the end of the window, and JWST continues to produce contested atmosphere detections rather than a biosignature. No nuclear propulsion system flies. The capability index moves from 9 to about 11.`,
      dependencies: ['starship-flights', 'falcon-9-booster-landing', 'falcon-9-dragon', 'space-shuttle', 'v2-rocket', 'chinese-gunpowder'],
      uncertainties: [
        'Whether Starship demonstrates orbital propellant transfer and routine upper stage recovery before 2028 determines the lunar lander schedule and the price curve for everyone else.',
        'Artemis III may be restructured into a lunar orbit or shorter surface mission if the lander or suits are not ready, which would change what counts as the first landing.',
        'A single large collision in a crowded shell could shift the regulatory environment for constellations within months.',
      ],
      indicators: [
        'Starship flights per year and the fraction that recover the upper stage, published in the FAA licensing record and SpaceX flight logs.',
        'Published prices for rideshare and dedicated launches on Falcon 9 and Starship, which reveal whether cost reductions are being passed on.',
        'The dates of the first Long March 10 test flights and any Chinese first stage recovery, which set the pace of the competing lunar program.',
        'Annual growth in the tracked object catalogue reported by ESA and the US Space Force.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The vehicles, manifests and budgets that shape this window already exist and most schedule risk is one-directional (later). The main open questions are Starship reuse timing and the Artemis III configuration, which are visible in public records within a year or two.',
      sources: [
        { author: 'US Government Accountability Office', title: 'NASA Artemis Programs: Crewed Moon Landing Faces Multiple Challenges', publisher: 'GAO-24-106256', year: 2023, url: 'https://www.gao.gov/products/gao-24-106256' },
        { author: 'Harry W. Jones', title: 'The Recent Large Reduction in Space Launch Cost', publisher: '48th International Conference on Environmental Systems', year: 2018 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'AI-assisted engineering trims iteration time but hardware sets the 2030 picture',
      narrative: `In the Accelerated branch AGI arrives around 2032, so this window differs from the Baseline mostly at the margin: engineering teams already use AI systems for anomaly resolution, simulation and manufacturing planning, and by 2029 those tools shorten design and test cycles by months rather than years. The physical picture is set by hardware that is already built or in production. Falcon 9 remains the highest cadence launcher through 2028; Starship reaches routine orbital operations by 2027, demonstrates propellant transfer in 2027 or 2028, and by 2030 flies several dozen times a year with upper stage recovery becoming reliable in the last year of the window. Starship's own launch price to external customers falls toward 1,000 to 1,500 dollars per kilogram by 2030 as SpaceX starts to price against the growing Chinese reusable fleet, whose first successful booster recovery comes by 2027.

Artemis II flies as a flyby. Artemis III lands no earlier than 2028 and there is a real chance the Chinese crewed landing precedes it by months. Mass to orbit worldwide passes 10,000 tonnes a year by 2030, dominated by constellations that now exceed 30,000 active satellites. The constraint that AI does not relieve is the physical build of pads, tank farms, engines and satellites; supply chain scaling still takes the years it took in the 2010s. A small fission surface power unit is under construction for a lunar demonstration near 2030 but has not launched. Debris removal moves from demonstration toward a paid service as insurers begin to price shell density. The Roman telescope operates from 2027 and ground-based extremely large telescopes take first light near the end of the window. The index reaches about 11 to 12; the divergence from the Baseline branch is visible only in design cycle times and a slightly faster Starship ramp.`,
      dependencies: ['starship-flights', 'agentic-coding-tools', 'falcon-9-booster-landing', 'space-shuttle', 'v2-rocket'],
      uncertainties: [
        'How much AI design tools actually shorten hardware qualification cycles is unmeasured; a plausible range is zero to thirty percent by 2030.',
        'The Chinese reusable programs could recover a booster in 2026 or slip to 2029, moving the competitive pressure on price by years.',
        'Regulatory reviews of launch cadence and environmental impact at Boca Chica and Cape Canaveral could cap Starship flights below plan.',
      ],
      indicators: [
        'Time from a Starship flight anomaly to the next flight, which measures how quickly investigation and redesign cycles are closing.',
        'Announced Starship price per kilogram to commercial customers and whether Chinese providers publish competing rideshare rates.',
        'Number of active satellites reported by tracking catalogues and the frequency of collision avoidance maneuvers per satellite.',
      ],
      confidence: 'medium',
      confidenceJustification: 'This window is dominated by hardware already under construction, so the projection largely extends known schedules. The moderate-branch premium is small and uncertain, which is why the two nearest branches remain close.',
      sources: [
        { author: 'US Government Accountability Office', title: 'NASA Artemis Programs: Crewed Moon Landing Faces Multiple Challenges', publisher: 'GAO-24-106256', year: 2023, url: 'https://www.gao.gov/products/gao-24-106256' },
        { author: 'ESA Space Debris Office', title: 'ESA Space Environment Report 2025', publisher: 'European Space Agency', year: 2025 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI by 2029 changes designs faster than it changes what is on the pad',
      narrative: `In the Discontinuous branch systems at or above human level in engineering arrive around 2029, which leaves at most eighteen months of this window for them to act, and rockets do not respond on that timescale. What changes first is the intellectual side of the field: trajectory design, structural optimization, engine combustion modelling, failure investigation and manufacturing scheduling become far cheaper and faster from 2028 onward. By 2030 several engine and vehicle programs report design cycles measured in weeks. What does not change is the pace of tooling, qualification firing, launch pad construction and range approvals, which were set by decisions made in 2024 to 2027. The observable difference from the other branches by the end of 2030 is therefore modest: Starship flies perhaps fifty to eighty times in 2030 rather than thirty to fifty, the upper stage is recovered reliably a year earlier, and propellant transfer is demonstrated in 2027.

Artemis II flies as a flyby and Artemis III lands no earlier than 2028; the schedule is set by Starship lander readiness and suit qualification, both physical, and the Chinese landing sits in the same 2029 to 2030 band. Constellations grow toward 35,000 active satellites. The first autonomous robotic systems capable of open-ended construction work are demonstrated on Earth, but none is on the Moon. Launch price to external customers falls toward 1,000 dollars per kilogram by 2030, close to the moderate branch, because the driver is SpaceX's own hardware ramp rather than its design capacity. Nuclear propulsion, lunar resource extraction and Mars remain paper studies, although those studies are now being produced by systems that can rerun the entire trade space overnight. The index ends the window near 12: the same hardware, better understood.`,
      dependencies: ['starship-flights', 'agentic-coding-tools', 'humanoid-robotics-revival', 'falcon-9-booster-landing', 'v2-rocket'],
      uncertainties: [
        'If AGI arrives in 2028 rather than 2029, the design acceleration would show up one Starship block earlier and slightly widen the gap with the other branches.',
        'Governments may restrict export or use of frontier AI in launch and defense-adjacent engineering, which would blunt the effect in this window.',
        'Whether AI-driven anomaly investigation actually shortens FAA mishap closures is untested.',
      ],
      indicators: [
        'Time between vehicle design freeze and first flight for any new stage or engine announced after 2027.',
        'Starship annual flight count and upper stage recovery rate compared with the 2025 baseline of eleven cumulative flights.',
        'Public demonstrations of autonomous robots performing unstructured assembly tasks, the precursor to off-Earth construction.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The hardware in this window is largely fixed by existing manifests regardless of the AI branch. The uncertainty lies in whether a late-window AGI perceptibly changes cadence, and the honest answer is that any effect before 2030 is small.',
      sources: [
        { author: 'Harry W. Jones', title: 'The Recent Large Reduction in Space Launch Cost', publisher: '48th International Conference on Environmental Systems', year: 2018 },
        { author: 'George P. Sutton and Oscar Biblarz', title: 'Rocket Propulsion Elements, 9th edition', publisher: 'Wiley', year: 2017 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2030-2040',
      branch: 'slow',
      headline: 'Starship-class launch at under 1,000 dollars per kilogram, a lunar camp, no crew on Mars',
      narrative: `The 2030s in the Baseline branch are the decade fully reusable heavy lift becomes normal. Starship and at least one Chinese equivalent fly hundreds of times a year combined, and a second Western entrant (Blue Origin's larger vehicles or a European or Japanese follow-on) reaches orbit with reuse. Commercial price to low Earth orbit falls to 300 to 800 dollars per kilogram by 2040; mass to orbit passes 20,000 tonnes a year, most of it constellation replacement and propellant. Constellations reach 60,000 to 100,000 active satellites, and at least one collision producing thousands of fragments occurs in a shell above 700 kilometers. Active debris removal becomes a regulated service, and the first binding shell density rules are negotiated after the collision rather than before it. The ISS is deorbited around 2031 and two or three commercial stations host crews of four to eight.

On the Moon, Artemis and the Chinese program each sustain intermittent crewed presence: crews of four for weeks to a few months at south pole sites, a fission surface power unit of tens of kilowatts, and pilot plants extracting oxygen from regolith and water from ice at kilogram per day scale. Nobody lives there year round. Mars receives uncrewed Starship cargo landings in one or two windows after 2031; a crewed landing is planned for the 2039 window and, on the pattern of every previous crewed program, slips into the 2040s. Nuclear thermal propulsion may fly a single demonstration; nuclear electric propulsion stays at the tens of kilowatts. Ground-based extremely large telescopes and JWST produce the first robust atmospheric spectra of temperate rocky planets around M dwarfs, and the Habitable Worlds Observatory is in development for a 2040s launch. Space solar power remains at demonstration scale because launch cost has not yet made it competitive with terrestrial solar and storage. AGI near 2038 arrives too late in the window to reshape hardware. The index rises to about 15.`,
      dependencies: ['starship-flights', 'jwst', 'gps', 'apollo-11', 'nuclear-power', 'v2-rocket'],
      uncertainties: [
        'A serious Starship failure with crew aboard, or a Kessler-scale collision, could each delay this whole picture by several years.',
        'The crewed Mars date depends on whether an agency or company accepts roughly one sievert of crew exposure without a solution to heavy ion shielding.',
        'Whether a second reusable heavy lifter appears outside SpaceX and China determines whether prices fall through competition or stay administered.',
        'Constellation shell density rules may be agreed early and cap satellite numbers well below 100,000.',
      ],
      indicators: [
        'Commercial price per kilogram to low Earth orbit reported in contract awards and rideshare price lists.',
        'Cumulative crew-days on the lunar surface per year, the cleanest measure of whether presence is intermittent or continuous.',
        'Tonnes of propellant produced from lunar or Martian resources, which will be zero until the first pilot plant runs.',
        'Number of fragmentation events per year in shells above 700 kilometers.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Launch cost and constellation trends are well established and the lunar programs are funded, so the direction is clear. Dates for Mars and nuclear propulsion carry the usual multi-year slips, and the debris trajectory has a fat tail.',
      sources: [
        { author: 'NASA', title: "NASA's Moon to Mars Architecture Definition Document (ESDMD-001)", publisher: 'NASA', year: 2024 },
        { author: 'Donald J. Kessler, Nicholas L. Johnson, J.-C. Liou and Mark Matney', title: 'The Kessler Syndrome: Implications to Future Space Operations', publisher: 'Advances in the Astronautical Sciences (AAS 10-016)', year: 2010 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'Automated engineering and robots build a permanent lunar outpost; Mars crews prepare',
      narrative: `With AGI around 2032 and superhuman systems by 2040, the Accelerated branch spends the second half of the 2030s with engineering capacity that exceeds any previous program, while hardware, cadence and physiology still set the pace. Launch cost is the first thing to move: designs iterate in weeks, factories are laid out by optimization systems, and by 2040 fully reusable vehicles from three or four providers deliver to low Earth orbit at 150 to 400 dollars per kilogram, with mass to orbit near 50,000 tonnes a year. Autonomous robots capable of unstructured work on Earth by the mid 2030s are adapted for lunar construction in the late 2030s; they excavate, sinter regolith and deploy power systems between crew visits. By 2040 a permanent outpost hosts ten to twenty people continuously, powered by a fission reactor of hundreds of kilowatts, and a propellant plant produces tonnes of oxygen a year from regolith.

Orbital refuelling is routine, with propellant depots in low Earth orbit and near the Moon. A nuclear electric or nuclear thermal stage flies operationally by 2040, driven as much by defense interest as by exploration. Mars receives uncrewed cargo in the 2033, 2035 and 2037 windows; a crewed landing is planned for 2039 or 2041 and, with automated systems handling the design and rehearsal load, the 2041 window is a realistic first attempt. Constellations pass 100,000 satellites, and regulation arrives earlier than in the Baseline branch because operators can model the debris environment continuously and insurers act on it. Astronomy benefits fastest: cheap launch mass lets the Habitable Worlds Observatory move up to a late 2030s launch and enables the first free-flying starshade tests. Space solar power reaches a 10 megawatt class demonstration in orbit but is not yet cheaper than terrestrial solar. The index reaches about 18.`,
      dependencies: ['starship-flights', 'humanoid-robotics-revival', 'jwst', 'nuclear-power', 'apollo-11', 'v2-rocket'],
      uncertainties: [
        'Whether autonomous construction robots reach reliability suitable for the Moon by the late 2030s is the hinge for permanent presence.',
        'The Mars crewed date remains bound by radiation exposure and life support reliability, which faster design does not fully address.',
        'Nuclear propulsion depends on fuel supply chains and launch safety approval that no amount of engineering speed shortcuts.',
      ],
      indicators: [
        'Number of people continuously present on the lunar surface, and the fraction of surface construction performed without crew.',
        'Mass of propellant transferred in orbit per year, which reveals whether depots are operational.',
        'Whether the Habitable Worlds Observatory or a starshade mission is confirmed for launch before 2040.',
        'First flight of a fission-powered propulsion stage, whichever agency or company flies it.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch assumes automated engineering from the mid 2030s, whose effect on hardware timelines is unmeasured. Launch cost direction is robust; the outpost population and Mars date could each slip a decade.',
      sources: [
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Space Nuclear Propulsion for Human Mars Exploration', publisher: 'The National Academies Press', year: 2021 },
        { author: 'Ian A. Crawford', title: 'Lunar resources: A review', publisher: 'Progress in Physical Geography', year: 2015 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superhuman design and robotics push launch toward its floor and put crews on Mars',
      narrative: `In the Discontinuous branch superhuman systems exist from 2031 and advanced robotics follows within a few years, so most of this decade unfolds with design, planning and operations capacity far beyond what any human organization could field. The consequences are bounded by three things: the rocket equation, which fixes what any chemical vehicle can lift; the time it takes to build factories, pads and reactors; and human biology. Within those bounds the decade is dramatic. Reusable vehicles from several providers fly more than a thousand times a year combined by 2040, and price to low Earth orbit falls to 50 to 150 dollars per kilogram, within an order of magnitude of the propellant floor. Mass to orbit reaches hundreds of thousands of tonnes a year. Autonomous robots are the primary lunar workforce from the mid 2030s: they build landing pads, regolith-shielded habitats and a megawatt-class fission power plant, and by 2040 a lunar base supports fifty to one hundred people with propellant production at hundreds of tonnes a year.

Mars gets cargo in every window from 2031. A crewed landing in the 2035 or 2037 window is plausible because rehearsal, contingency planning and hardware verification are no longer schedule drivers, though crews still accept roughly one sievert of exposure. A nuclear electric tug of megawatt class operates between Earth and lunar orbit, and the first asteroid retrieval mission returns hundreds of tonnes of material to cislunar space for processing trials. Constellations approach 150,000 satellites under continuous automated traffic management; regulation is written by systems that can simulate every shell. Astronomy fields large in-space assembled telescopes before 2040, and a gigawatt-class laser array for beamed propulsion is under construction. Space solar power reaches 100 megawatt scale. The index reaches about 22, with the wide band reflecting that physical build times, not intelligence, set the pace.`,
      dependencies: ['starship-flights', 'humanoid-robotics-revival', 'agentic-coding-tools', 'nuclear-power', 'apollo-11', 'v2-rocket'],
      uncertainties: [
        'Whether societies permit superhuman systems to direct heavy industry and nuclear systems in space is a governance question, not a technical one.',
        'Factory and pad construction on Earth still takes years, and the branch could be delayed by permitting, labor and materials even with perfect planning.',
        'The Mars crewed date in this branch depends on accepting radiation risk that agencies have historically refused.',
        'A debris cascade triggered by rapid constellation growth could impose a multi-year pause on launches to affected shells.',
      ],
      indicators: [
        'Worldwide launch count and mass to orbit, which should depart sharply from the 2025 baseline of a few thousand tonnes.',
        'Fraction of lunar surface construction performed by autonomous robots, reported by agencies and operators.',
        'Confirmed Mars crewed launch date and the radiation exposure limits adopted for the crew.',
        'Power output of any beamed propulsion or space solar power array under construction.',
      ],
      confidence: 'low',
      confidenceJustification: 'This branch depends on superhuman systems arriving by 2031 and on their being allowed to run heavy industry, both far outside the historical record. The physical bounds are firm; the human and institutional responses are not.',
      sources: [
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Space Nuclear Propulsion for Human Mars Exploration', publisher: 'The National Academies Press', year: 2021 },
        { author: 'Martin Elvis', title: 'How many ore-bearing asteroids?', publisher: 'Planetary and Space Science', year: 2014 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2040-2060',
      branch: 'slow',
      headline: 'Crews reach Mars, lunar industry at pilot scale, the biosignature search begins',
      narrative: `The Baseline branch has AGI from about 2038 and ASI near 2058, so this window is the first in which human-level automated engineering shapes hardware from the start, though on a slow-takeoff diffusion pattern. Launch settles at 100 to 300 dollars per kilogram by 2060 from several providers on three continents, with mass to orbit near 200,000 tonnes a year. The lunar outpost becomes a settlement of a few hundred people, most of them rotating on tours of six to twelve months because bone loss and radiation still forbid indefinite stays. Regolith mining produces thousands of tonnes a year of oxygen, metals and construction material, and lunar propellant supplies most cislunar transport. The first crewed Mars landing occurs in the 2040s, followed by a base that grows to dozens of people by 2060, resupplied every window and dependent on Earth for electronics, pharmaceuticals and most manufactured goods.

Nuclear electric propulsion of megawatt class becomes the standard for cargo beyond the Moon, cutting Mars transit times to four to five months and enabling the first crewed missions to near-Earth asteroids. Asteroid material is returned in tens of tonnes for processing experiments, not yet as an industry. Space solar power finds its first commercial niche powering lunar and orbital facilities rather than Earth. The Habitable Worlds Observatory launches in the 2040s and by 2060 has taken spectra of twenty to forty Earth-sized planets in habitable zones; at least one shows an ambiguous biosignature that a second-generation observatory is designed to test. Orbital population stabilizes near the shell capacities negotiated after the 2030s collisions, with continuous debris removal as a public service. A solar sail precursor mission passes 200 astronomical units, and a kilowatt to megawatt laser sail test bed accelerates gram-scale sails in Earth orbit. The index reaches about 22.`,
      dependencies: ['starship-flights', 'jwst', 'kepler-exoplanets', 'hubble-telescope', 'apollo-11', 'sputnik'],
      uncertainties: [
        'Whether a crewed Mars program survives the first serious accident is a political question that has historically added a decade to schedules.',
        'Lunar resource economics may not close at these launch prices, leaving industry at pilot scale into the 2060s.',
        'The biosignature search could return a clear negative for all nearby targets, which would redirect astronomy budgets.',
      ],
      indicators: [
        'Number of people on Mars and the fraction of their consumables produced locally.',
        'Annual tonnes of lunar-derived propellant sold to non-government customers.',
        'Count of Earth-sized habitable zone planets with published atmospheric spectra.',
        'Operational nuclear electric stages in service and their power ratings.',
      ],
      confidence: 'low',
      confidenceJustification: 'Twenty to thirty year projections of crewed programs have historically missed by a decade or more in either direction on timing, though not on direction. The physical and cost bounds are firm; the settlement sizes are educated guesses.',
      sources: [
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Pathways to Discovery in Astronomy and Astrophysics for the 2020s', publisher: 'The National Academies Press', year: 2021 },
        { author: 'Robert Zubrin', title: 'The Case for Mars: The Plan to Settle the Red Planet and Why We Must', publisher: 'Free Press', year: 1996 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'Off-Earth industry grows under superhuman management; launch nears its cost floor',
      narrative: `With ASI from about 2040, the Accelerated branch spends this window with design and operations capability that is effectively unlimited relative to the problems, so the pace is set by the physical growth rate of industry: how fast robots can build the machines that build more machines, and how fast mass can be moved. Launch cost reaches 30 to 80 dollars per kilogram by 2060, within a few multiples of the propellant floor, because vehicles now approach aircraft-style utilization. Mass to orbit exceeds one million tonnes a year. The lunar settlement grows to a few thousand people supported by a robotic workforce many times larger; regolith processing yields hundreds of thousands of tonnes a year of oxygen, silicon, iron and aluminum, and most cislunar infrastructure is built from lunar material. Asteroid mining becomes an industry: several near-Earth bodies are processed in place for volatiles and metals, with millions of tonnes of raw material moved by nuclear electric tugs.

Mars has a base of several hundred people by 2060, still dependent on Earth for complex goods but producing its own propellant, food and building material. Transit is five months by nuclear electric ship, and crews rotate to manage lifetime dose. Space solar power delivers tens of gigawatts to Earth by 2060 through rectennas licensed in the 2040s, now economic because both launch and lunar-sourced material are cheap. Beamed propulsion arrays reach 1 to 10 gigawatts, accelerating gram-scale probes to a few percent of light speed for fast flybys of outer planets and a mission toward the solar gravitational lens at 550 astronomical units. Second-generation space telescopes assembled in orbit by robots characterize hundreds of Earth-sized planets and resolve the biosignature question for the nearest few dozen. Orbital traffic near Earth is fully automated. The index reaches about 30, held there by biology and by the decades it takes to grow industry even at superhuman efficiency.`,
      dependencies: ['starship-flights', 'humanoid-robotics-revival', 'kepler-exoplanets', 'nuclear-power', 'apollo-11', 'v2-rocket'],
      uncertainties: [
        'The doubling time of robotic off-Earth industry is the key unknown; a doubling of two years versus five separates a mature industry from a pilot one by 2060.',
        'Asteroid mining could be displaced by lunar sources or by terrestrial substitution, leaving it small.',
        'Space solar power to Earth depends on land, spectrum and safety approvals that societies may withhold regardless of cost.',
      ],
      indicators: [
        'Fraction of in-space mass sourced from off-Earth materials, published by operators and agencies.',
        'Launch price per kilogram relative to the propellant floor, which should approach a small multiple.',
        'Gigawatts of beamed power delivered to Earth from orbit.',
        'Highest speed achieved by any artificial object relative to the Sun.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch assumes superhuman systems running a growing off-Earth economy, which has no precedent to calibrate against. The physical ceilings are respected but the growth rate within them is guessed within roughly a factor of three.',
      sources: [
        { author: 'Philip Lubin', title: 'A Roadmap to Interstellar Flight', publisher: 'Journal of the British Interplanetary Society', year: 2016, url: 'https://arxiv.org/abs/1604.01356' },
        { author: 'NASA Office of Technology, Policy, and Strategy', title: 'Space-Based Solar Power', publisher: 'NASA', year: 2024 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2040-2060',
      branch: 'fast',
      headline: 'A solar system economy takes shape; the first interstellar probes may launch',
      narrative: `The Discontinuous branch enters this window with nearly three decades of superhuman systems and advanced robotics behind it, so off-Earth industry is self-expanding: lunar and asteroid facilities build most of their own successors, and the binding limits are energy, materials and the years each doubling takes. Launch from Earth costs 20 to 50 dollars per kilogram, close to the practical floor, and matters less because most in-space mass no longer comes from Earth. Lunar population reaches the low tens of thousands, Mars the low thousands, each with robotic workforces orders of magnitude larger. Rotating habitats in cislunar space provide artificial gravity for long-duration crews, the first serious test of the concept. Asteroid processing moves tens of millions of tonnes a year; space solar power supplies hundreds of gigawatts to Earth if Earth chooses to accept it, and far more to in-space industry.

Propulsion diversifies: megawatt to gigawatt nuclear electric ships make Mars a three month trip, and beamed power arrays of 10 to 100 gigawatts accelerate gram-scale probes to 10 to 20 percent of light speed. The first interstellar flyby probes toward Alpha Centauri launch in the 2050s, with arrival in the late 2070s and data in the 2080s, entirely bound by light speed. Large space telescopes assembled from lunar material characterize thousands of exoplanets and image the nearest Earth-sized worlds at several pixels across. Human biology remains the ceiling on human presence: even with the best shielding, most people who go to space return, and off-Earth population is measured in tens of thousands rather than millions. Governance is contested, since the Outer Space Treaty was written for a world of two states and no industry; some form of resource rights regime is settled in this window, by agreement or by precedent. The index reaches about 40, with a band that reflects the difference between fast and very fast industrial doubling.`,
      dependencies: ['starship-flights', 'humanoid-robotics-revival', 'kepler-exoplanets', 'nuclear-power', 'apollo-11', 'sputnik'],
      uncertainties: [
        'A self-expanding off-Earth industry with doublings of one to two years is theoretically possible but has never been demonstrated even on Earth.',
        'Whether the interstellar array is built in this window depends on a capital decision of order 100 billion dollars that no one is obliged to make.',
        'A breakdown of governance over space resources or a conflict between major powers could halt expansion for a decade.',
        'Human interest in living off Earth, rather than working there in rotation, is unknown and could be small.',
      ],
      indicators: [
        'Doubling time of off-Earth industrial mass, the single most informative number in this branch.',
        'Whether a beamed propulsion array above 10 gigawatts is funded and where it is sited.',
        'Off-Earth population and the fraction born there, which will be near zero until the biology is solved.',
        'Ratification of any successor or amendment to the 1967 Outer Space Treaty covering resource rights.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the most speculative projection in the field. The physical limits (rocket equation, light speed, radiation) are respected, but the size of the economy inside them rests on assumptions about self-replicating industry with no empirical base.',
      sources: [
        { author: 'Philip Lubin', title: 'A Roadmap to Interstellar Flight', publisher: 'Journal of the British Interplanetary Society', year: 2016, url: 'https://arxiv.org/abs/1604.01356' },
        { author: 'Kevin L. G. Parkin', title: 'The Breakthrough Starshot system model', publisher: 'Acta Astronautica', year: 2018 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2060-2090',
      branch: 'slow',
      headline: 'Superintelligence arrives late; Mars becomes a town and cislunar industry pays its way',
      narrative: `The Baseline branch reaches ASI near 2058, so this window is when the slow branch begins to look like the accelerated branch did twenty years earlier, with the important difference that the institutions absorbing the change are older and more cautious. Launch from Earth costs 30 to 100 dollars per kilogram and is a minor part of the space economy; most mass in cislunar space is lunar in origin. The lunar settlement reaches a few thousand people, many on multi-year stays in shielded habitats, and lunar industry is profitable, supplying propellant, structures and solar power hardware to orbit. Mars grows into a town of a few thousand by 2090, with the first children born there in the 2070s or 2080s and the medical consequences of development in 0.38 g becoming a research field in its own right. Nuclear electric propulsion is universal beyond the Moon and nuclear thermal is used for fast crew transits.

Asteroid mining supplies volatiles and platinum group metals to in-space industry and a trickle to Earth. Space solar power delivers tens of gigawatts to Earth. Beamed propulsion arrays of gigawatt class launch a sequence of fast probes: to the solar gravitational lens, to the interstellar medium at 1,000 astronomical units, and by the 2080s the first gram-scale interstellar probe toward Alpha Centauri at 10 to 20 percent of light speed, arriving after 2100. Telescopes have characterized hundreds of Earth-sized planets and either found a convincing biosignature or set strong limits on life within 50 light years. Orbital debris is managed by continuous removal and by the shift of large infrastructure to higher, stable orbits. Human biology, not technology, remains the reason most people who work in space return to Earth, and off-Earth population stays below 20,000. The index reaches about 32.`,
      dependencies: ['starship-flights', 'kepler-exoplanets', 'nuclear-power', 'apollo-11', 'vostok-gagarin', 'v2-rocket'],
      uncertainties: [
        'Whether developmental biology permits healthy childhood on Mars or the Moon is unknown and may force a return-to-Earth policy for families.',
        'The late arrival of superintelligence could either accelerate this picture sharply or be slowed by decades of governance built in the interim.',
        'Space solar power to Earth remains contingent on terrestrial energy prices that may make it unnecessary.',
      ],
      indicators: [
        'Births off Earth and health outcomes of children raised in partial gravity.',
        'Whether an interstellar probe program passes from study to construction.',
        'Fraction of cislunar mass sourced from the Moon versus Earth.',
      ],
      confidence: 'low',
      confidenceJustification: 'Forty to sixty years out, only the physical bounds and the broad direction are defensible. Settlement sizes and dates are order-of-magnitude estimates conditioned on a slow-takeoff pattern that itself has wide uncertainty.',
      sources: [
        { author: 'Robert L. Forward', title: 'Roundtrip Interstellar Travel Using Laser-Pushed Lightsails', publisher: 'Journal of Spacecraft and Rockets', year: 1984 },
        { author: 'Francis A. Cucinotta and Marco Durante', title: 'Cancer risk from exposure to galactic cosmic rays: implications for space exploration by human beings', publisher: 'The Lancet Oncology', year: 2006 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'An interplanetary economy, tens of thousands off Earth, probes bound for other stars',
      narrative: `The Accelerated branch enters this window with two decades of superhuman-managed industry behind it, so by 2090 the space economy is large in absolute terms even if small next to Earth's. Launch from Earth is at its floor, 20 to 50 dollars per kilogram, and is mostly for people and high-value goods; bulk mass is lunar or asteroidal. Off-Earth population reaches the tens of thousands, spread across lunar settlements, a Mars colony of several thousand with local manufacturing of most goods, and rotating habitats in cislunar and Mars orbit that solve the gravity problem for long stays. Radiation is managed by mass shielding of meters of regolith or water, which cheap in-space material makes affordable. Nuclear propulsion has reached gigawatt class; crews travel to Mars in two to three months and to the main asteroid belt and Jupiter system in under a year. Robotic outposts operate on Ceres, Europa and Titan, and sample return from Europa's ocean or Enceladus's plumes has decided whether the solar system holds a second origin of life.

Space solar power supplies a meaningful fraction of Earth's electricity where politics allows. Beamed propulsion arrays of 100 gigawatts exist and have launched flotillas of gram-scale probes toward Alpha Centauri, with the first arriving in the 2080s and returning images of Proxima b at a few pixels resolution about four years later; larger, slower probes carrying real instruments follow. Telescopes characterize thousands of exoplanets in detail. Governance has settled into a regime of registered claims and shared traffic management, imperfect but functional, after the disputes of the 2040s and 2050s. What has not changed: no human has left the solar system or will in this window, communication with Mars still lags by minutes, and every kilogram moved between planets still obeys the rocket equation, which is why beamed and nuclear propulsion, not chemical, carry the load. The index reaches about 44.`,
      dependencies: ['starship-flights', 'humanoid-robotics-revival', 'kepler-exoplanets', 'nuclear-power', 'apollo-11', 'sputnik'],
      uncertainties: [
        'Whether people in large numbers choose to live off Earth rather than work there in rotation is a social unknown that bounds population regardless of technology.',
        'Interstellar probe survival at 20 percent of light speed through the interstellar medium is unproven; dust impacts may destroy a large fraction.',
        'The outer solar system life question could be settled negatively early, redirecting the exploration program toward exoplanets.',
      ],
      indicators: [
        'Off-Earth population and the number living in rotating artificial gravity habitats.',
        'Number of interstellar probes launched and the fraction still transmitting after a decade.',
        'Return of a confirmed sample from an ocean world and its biological result.',
        'Gigawatts of nuclear electric propulsion in service.',
      ],
      confidence: 'low',
      confidenceJustification: 'The physical constraints are firm and the scale of the economy is an extrapolation of a growth process with no precedent. The specific dates for interstellar arrival follow from light speed once launch dates are assumed, but those launch dates are guesses.',
      sources: [
        { author: 'Philip Lubin', title: 'A Roadmap to Interstellar Flight', publisher: 'Journal of the British Interplanetary Society', year: 2016, url: 'https://arxiv.org/abs/1604.01356' },
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Origins, Worlds, and Life: A Decadal Strategy for Planetary Science and Astrobiology 2023-2032', publisher: 'The National Academies Press', year: 2022 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Solar system industry at scale, first data from another star, biology still binds',
      narrative: `In the Discontinuous branch the solar system is industrialized by 2090 in the sense that mass, energy and manufacturing off Earth exceed several percent of Earth's own, produced almost entirely by autonomous systems. Launch from Earth is a small business at its cost floor; the main flows of mass are between the Moon, near-Earth asteroids, the main belt and cislunar factories. Energy comes from solar collectors built from lunar and asteroidal material at terawatt scale in space, of which Earth accepts whatever fraction its politics allows. Propulsion is nuclear and beamed, at gigawatts, with crewed transit to Mars in weeks and robotic transit to the outer planets in months. Human population off Earth reaches the hundreds of thousands in rotating habitats with full gravity and thick shielding, so that radiation and microgravity no longer force return; the open questions are developmental biology and whether people want to be there. Mars has cities in the tens of thousands.

Interstellar probes launched in the 2050s reach Alpha Centauri in the late 2070s and their data arrives in the early 2080s: the first close images of planets around another star. Follow-on probes of kilogram to tonne class, pushed by arrays of terawatt power, are en route at 10 to 30 percent of light speed to several stars within 20 light years, with arrivals in the 2100s to 2160s. Exoplanet science has moved from detection to comparative planetology across thousands of worlds, and the biosignature question has been answered for every Earth-sized planet within 30 light years, one way or the other. Governance is the field's least predictable dimension: a superintelligent-managed economy across the solar system requires arrangements that no existing treaty imagined. Physics still says what it said in 1903 and 1905: every ship is a rocket, and nothing outruns light. The index reaches about 56, the highest of any branch in this window, with the ceiling defined by the biology of people and the years each industrial doubling takes.`,
      dependencies: ['starship-flights', 'humanoid-robotics-revival', 'kepler-exoplanets', 'nuclear-power', 'sputnik', 'v2-rocket'],
      uncertainties: [
        'A solar system economy at this scale assumes sustained exponential growth of autonomous industry for fifty years, which could saturate on energy, materials or purpose long before.',
        'Whether humans in the hundreds of thousands live off Earth depends on developmental biology results not yet obtained and on preferences not yet formed.',
        'Interstellar probe survival through the interstellar medium at these speeds is unproven.',
        'Governance failure, conflict or a deliberate decision to limit off-Earth expansion could freeze this picture at any point.',
      ],
      indicators: [
        'Ratio of off-Earth industrial output to Earth industrial output.',
        'Reception of any data from a probe beyond one light year.',
        'Off-Earth births and long-term health outcomes.',
        'Total power of beamed propulsion arrays in operation.',
      ],
      confidence: 'low',
      confidenceJustification: 'This projection is the upper envelope of what physics permits under the most aggressive branch. Its value is to mark the ceiling, not to predict; each quantity could be an order of magnitude smaller without violating any assumption of the branch.',
      sources: [
        { author: 'Kevin L. G. Parkin', title: 'The Breakthrough Starshot system model', publisher: 'Acta Astronautica', year: 2018 },
        { author: 'Martin Elvis', title: 'How many ore-bearing asteroids?', publisher: 'Planetary and Space Science', year: 2014 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2090-2126',
      branch: 'slow',
      headline: 'A mature cislunar and Mars economy, and the first interstellar data around 2120',
      narrative: `By 2126 the Baseline branch has had seven decades of superintelligence and reaches roughly where the accelerated branch stood forty years earlier. Launch from Earth is at its floor and is a modest passenger and specialty cargo business; the space economy is built from off-Earth material and runs on off-Earth power. Off-Earth population is in the tens of thousands, most in rotating habitats and shielded lunar and Martian settlements; Mars has a self-sustaining city in the sense that it could survive a decade without resupply, though it does not choose to. The developmental biology question has been answered one way or the other by three generations of data. Nuclear and beamed propulsion carry all interplanetary traffic; robotic outposts exist at every major body from Mercury to Neptune, and the ocean worlds have been sampled. Space solar power supplies Earth at whatever scale terrestrial energy economics justify, which may be small.

The interstellar probe launched around 2085 to 2090 at 10 to 20 percent of light speed arrives at Alpha Centauri between 2110 and 2130 and returns data a little over four years after arrival; if the earlier date holds, humanity has close images of another star's planets by the mid 2120s. Follow-on probes are en route to several nearby stars. Exoplanet characterization has extended to the thousands and the nearest habitable candidates are known in detail. What remains fixed: no human has traveled beyond Mars orbit for other than short expeditions, crewed interstellar flight is unfunded and unnecessary given robotic capability, and every constraint listed in the physical limits above still binds. The Kessler risk has been resolved by relocation of infrastructure and continuous removal, and near-Earth space is regulated as a commons. The index reaches about 42, with a wide band because a century of institutional choices, not physics, separates the low and high ends.`,
      dependencies: ['jwst', 'kepler-exoplanets', 'nuclear-power', 'sputnik', 'v2-rocket', 'chinese-gunpowder'],
      uncertainties: [
        'A century of institutional choices could hold off-Earth population at hundreds or raise it to millions with the same physics.',
        'The interstellar probe date could slip decades if the capital is never allocated; the physics of arrival is certain only once launched.',
        'Whether cheap terrestrial energy makes space solar power irrelevant is a terrestrial, not a space, question.',
      ],
      indicators: [
        'Existence and launch date of a funded interstellar probe program.',
        'Off-Earth population and the number of settlements able to sustain themselves without resupply for years.',
        'Number of nearby Earth-sized planets with resolved surface or atmospheric maps.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the physical ceilings are solid. The projection states what the rocket equation, light speed and biology permit under a slow-takeoff history and is an order-of-magnitude sketch, not a forecast.',
      sources: [
        { author: 'Philip Lubin', title: 'A Roadmap to Interstellar Flight', publisher: 'Journal of the British Interplanetary Society', year: 2016, url: 'https://arxiv.org/abs/1604.01356' },
        { author: 'Konstantin E. Tsiolkovsky', title: 'Issledovanie mirovykh prostranstv reaktivnymi priborami (The Exploration of Cosmic Space by Means of Reaction Devices)', publisher: 'Nauchnoe Obozrenie', year: 1903 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'Hundreds of thousands off Earth, probes at several stars, and the same physics',
      narrative: `In the Accelerated branch the space economy of 2126 is a mature extension of what existed in 2090, grown by decades of compounding rather than by any new physics. Off-Earth population is in the hundreds of thousands, concentrated in rotating habitats near Earth and Mars and in shielded surface settlements; several generations have been born off Earth and the medical record on partial gravity development is long enough to set policy. Mars is a network of cities producing most of what it uses, and the asteroid belt is worked by autonomous industry at a scale that dwarfs any terrestrial mining sector. Energy in space is measured in tens of terawatts from solar collectors of lunar material; Earth imports a fraction as beamed power if it wishes. Propulsion is nuclear and beamed, with crewed travel anywhere in the inner solar system in weeks and robotic access to the Kuiper belt within a few years of flight.

Data from the Alpha Centauri flotilla launched in the 2060s arrived in the 2080s and 2090s; heavier probes reach Barnard's Star, Sirius, Epsilon Eridani and Tau Ceti between the 2100s and 2126, so by the end of the window humanity holds close-range data on planets at five or six stars and has either found or excluded life at the nearest habitable candidates. Telescope arrays built from off-Earth material image continents on planets tens of light years away. Crewed interstellar flight is studied as a century-scale project of generation ships or beamed craft, and no branch of this atlas assumes it launches before 2126: the energy of a tonne at 10 percent of light speed is that of a large city's annual electricity, and there is no urgency that robots do not serve. Near-Earth space is a regulated commons; the Kessler dynamic is managed by removal and by moving mass to stable orbits. The index reaches about 56, with the remaining distance to 100 defined by the limits of human biology and by light speed rather than by any technology still to be invented.`,
      dependencies: ['jwst', 'kepler-exoplanets', 'nuclear-power', 'apollo-11', 'sputnik', 'v2-rocket'],
      uncertainties: [
        'Sustained compounding of off-Earth industry for eighty years could saturate on demand rather than physics, leaving the economy far smaller than this.',
        'Whether people choose to live off Earth in large numbers is the least predictable variable, and the technology to allow it does not guarantee it.',
        'Interstellar probe attrition from the interstellar medium may limit data to a few stars.',
        'Governance failure or a decision by superintelligent institutions to limit expansion could hold any of these numbers flat for decades.',
      ],
      indicators: [
        'Number of stars from which close-range probe data has been received.',
        'Off-Earth population and generations born there.',
        'Whether any crewed interstellar program has passed from study to hardware.',
      ],
      confidence: 'low',
      confidenceJustification: 'At a century, the value of the projection is in the ceilings it respects rather than the numbers it offers. Every figure here is an extrapolation of a compounding process whose rate is unknown within a factor of ten.',
      sources: [
        { author: 'Robert L. Forward', title: 'Roundtrip Interstellar Travel Using Laser-Pushed Lightsails', publisher: 'Journal of Spacecraft and Rockets', year: 1984 },
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Pathways to Discovery in Astronomy and Astrophysics for the 2020s', publisher: 'The National Academies Press', year: 2021 },
      ],
    },
    {
      fieldId: 'space-launch',
      window: '2090-2126',
      branch: 'fast',
      headline: 'The solar system as a working economy, and a robotic reach of a few dozen light years',
      narrative: `The Discontinuous branch by 2126 approaches the practical ceiling this atlas defines for the field, and the reason it does not reach it is instructive. Everything that engineering can do has been done: launch from Earth is at the propellant floor; off-Earth industry exceeds Earth's in mass and energy throughput; the Moon, Mars, the asteroids and the moons of the giant planets host autonomous industry and, where people wish, settlements in full-gravity habitats with shielding measured in meters. Off-Earth population may be in the millions or may be in the hundreds of thousands, and the difference is preference, not capability. Energy is collected at hundreds of terawatts in space, and the main constraint on further growth is that there is little in the inner solar system left to want. Interstellar probes of kilogram to tonne class have reached or are approaching every star within about 20 light years, with data from the nearest dozen already returned; probes toward stars 30 to 50 light years away are en route with arrivals in the 2200s.

What still binds is exactly what bound in 2026. Every vehicle is a rocket or a sail and obeys the rocket equation, so the mass moved between stars is grams to tonnes, not people. Light speed makes the solar system a place of minute-to-hour conversations and the stars a place of decade-long monologues. Human biology, even with a century of medicine, keeps people fragile against radiation and slow to adapt to gravity, so most of the work is done by machines and most of the people are near Earth. Kessler dynamics are managed and the treaty regime has been rewritten twice. The index reaches about 68; the band's low end reflects a world that chose to expand modestly, and the high end a world that used most of what physics allows. The remaining thirty points are crewed interstellar flight and a self-sustaining human presence around another star, which this atlas places beyond 2126 in every branch.`,
      dependencies: ['jwst', 'kepler-exoplanets', 'nuclear-power', 'apollo-11', 'v2-rocket', 'chinese-gunpowder'],
      uncertainties: [
        'A civilization run largely by superintelligent systems may decide not to expand at all, or to expand in ways this index does not measure.',
        'Whether human presence off Earth is large or small is a matter of preference that technology does not settle.',
        'Interstellar probe reach depends on attrition rates in the interstellar medium that will only be known after the first arrivals.',
      ],
      indicators: [
        'Number of stars within 20 light years with returned close-range probe data.',
        'Ratio of off-Earth to Earth energy throughput.',
        'Off-Earth population and the existence of any self-sustaining settlement beyond Mars.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the field ceiling projection and is not a forecast. It states what remains physically bound after a century of the most aggressive branch, and the honest uncertainty on every number is an order of magnitude or more.',
      sources: [
        { author: 'Philip Lubin', title: 'A Roadmap to Interstellar Flight', publisher: 'Journal of the British Interplanetary Society', year: 2016, url: 'https://arxiv.org/abs/1604.01356' },
        { author: 'Albert Einstein', title: 'Zur Elektrodynamik bewegter Korper', publisher: 'Annalen der Physik', year: 1905 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 9, low: 8, high: 10 },
      { year: 2030, value: 11, low: 10, high: 12 },
      { year: 2040, value: 15, low: 13, high: 18 },
      { year: 2060, value: 22, low: 17, high: 28 },
      { year: 2090, value: 32, low: 22, high: 42 },
      { year: 2126, value: 42, low: 28, high: 56 },
    ],
    moderate: [
      { year: 2026, value: 9, low: 8, high: 10 },
      { year: 2030, value: 11, low: 10, high: 13 },
      { year: 2040, value: 18, low: 15, high: 22 },
      { year: 2060, value: 30, low: 23, high: 38 },
      { year: 2090, value: 44, low: 32, high: 56 },
      { year: 2126, value: 56, low: 40, high: 70 },
    ],
    fast: [
      { year: 2026, value: 9, low: 8, high: 10 },
      { year: 2030, value: 12, low: 10, high: 14 },
      { year: 2040, value: 22, low: 17, high: 28 },
      { year: 2060, value: 40, low: 28, high: 52 },
      { year: 2090, value: 56, low: 40, high: 72 },
      { year: 2126, value: 68, low: 48, high: 84 },
    ],
  },
  sources: [
    { author: 'George P. Sutton and Oscar Biblarz', title: 'Rocket Propulsion Elements, 9th edition', publisher: 'Wiley', year: 2017 },
    { author: 'Harry W. Jones', title: 'The Recent Large Reduction in Space Launch Cost', publisher: '48th International Conference on Environmental Systems', year: 2018 },
    { author: 'Donald J. Kessler and Burton G. Cour-Palais', title: 'Collision Frequency of Artificial Satellites: The Creation of a Debris Belt', publisher: 'Journal of Geophysical Research', year: 1978 },
    { author: 'Philip Lubin', title: 'A Roadmap to Interstellar Flight', publisher: 'Journal of the British Interplanetary Society', year: 2016, url: 'https://arxiv.org/abs/1604.01356' },
    { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Pathways to Discovery in Astronomy and Astrophysics for the 2020s', publisher: 'The National Academies Press', year: 2021 },
    { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Space Nuclear Propulsion for Human Mars Exploration', publisher: 'The National Academies Press', year: 2021 },
    { author: 'ESA Space Debris Office', title: 'ESA Space Environment Report 2025', publisher: 'European Space Agency', year: 2025 },
    { author: 'US Government Accountability Office', title: 'NASA Artemis Programs: Crewed Moon Landing Faces Multiple Challenges', publisher: 'GAO-24-106256', year: 2023, url: 'https://www.gao.gov/products/gao-24-106256' },
  ],
  lastReviewed: '2026-09-04',
};
