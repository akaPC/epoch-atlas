import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'transportation',
  index: 8,
  name: 'Transportation',
  code: 'TRANSPORT',
  summary: `Transportation takes roughly a quarter of the world's final energy, more than 90 percent of it as petroleum, and moves about 12 billion tonnes of seaborne cargo and four billion airline passengers a year. In September 2026 it is electrifying from the bottom up and automating from the top down. Electric cars were more than a fifth of new sales worldwide in 2024, about 17 million vehicles and close to half of sales in China, and 2025 sales passed 20 million as lithium iron phosphate cells fell toward 60 dollars per kilowatt hour; buses, two wheelers and Chinese heavy trucks follow the same curve. Driverless taxis carry paying passengers in about a dozen metropolitan areas in the United States and China, with fleets of hundreds to low thousands per operator and crash data showing fewer injury collisions than human drivers. Aviation and shipping have barely moved: sustainable aviation fuel is under one percent of jet fuel, and methanol and ammonia fuelled ships are a few dozen hulls in a fleet of about 100,000. High speed rail keeps growing in China and stalls elsewhere. eVTOL aircraft are certified in China and await Western certification. Hyperloop remains a test track.`,
  indexDefinition: `The index measures how close the movement of people and goods sits to its plausible physical and safety ceiling, blending five components: door to door speed relative to the limits set by drag, acceleration comfort and sonic boom; energy per passenger kilometer and per tonne kilometer relative to the rolling and aerodynamic minima; fatality rate per billion kilometers relative to a floor near zero; the share of vehicle movement that needs no human operator; and carbon intensity approaching zero. A score of 100 means fully automated, near zero fatality, zero carbon mobility close to the drag and comfort limits on land, sea and in the air, with intercontinental travel in a few hours. September 2026 sits near 18.`,
  physicalLimits: [
    {
      name: 'Energy density of fuels versus batteries',
      description: `Kerosene stores about 43 megajoules per kilogram, close to 12 kilowatt hours, and is consumed in flight. The best commercial lithium ion cells hold 0.25 to 0.3 kilowatt hours per kilogram, packs about 0.2, and the mass stays aboard. Even with a turbofan near 40 percent efficient against a motor and battery chain near 85 percent, jet fuel delivers roughly twenty times the useful work per kilogram. Analyses put 400 to 800 watt hours per kilogram as the threshold for useful regional electric aircraft and rule out battery long haul flight, since lithium sulfur and lithium air top out near 2,500 and 3,500 watt hours per kilogram in theory and far less in cells. Ships face the same arithmetic, which is why ammonia, methanol and hydrogen persist in every projection here.`,
      sources: [
        { author: 'Andreas W. Schafer et al.', title: 'Technological, economic and environmental prospects of all-electric aircraft', publisher: 'Nature Energy', year: 2019 },
        { author: 'Venkatasubramanian Viswanathan et al.', title: 'The challenges and opportunities of battery-powered flight', publisher: 'Nature', year: 2022 },
      ],
    },
    {
      name: 'Drag, the cube law and rolling resistance',
      description: `Aerodynamic drag grows with the square of speed and the power to overcome it with the cube, so a car that needs 10 kilowatts at 100 kilometers per hour needs about 80 at 200. Rolling resistance on steel wheels is about 0.1 to 0.2 percent of vehicle weight, on rubber tyres about 1 percent; a ship's equivalent is skin friction and wave making that rise steeply above hull speed. These laws set the energy per passenger kilometer of every mode and can only be met with streamlining, lower mass, evacuated tubes (which trade drag for pumping and safety costs) or lower speed. They are why high speed rail plateaus near 350 kilometers per hour and airliners have cruised near Mach 0.85 since the 1960s.`,
      sources: [
        { author: 'David J. C. MacKay', title: 'Sustainable Energy: Without the Hot Air', publisher: 'UIT Cambridge', year: 2009 },
        { author: 'John D. Anderson', title: 'Fundamentals of Aerodynamics', publisher: 'McGraw-Hill', year: 2010 },
      ],
    },
    {
      name: 'Human tolerance for acceleration and the geometry of speed',
      description: `Standing or unbelted passengers tolerate about 0.1 to 0.15 g of lateral or longitudinal acceleration before discomfort, seated and belted passengers about 0.3 g sustained, and ride comfort standards follow. The consequences compound with speed: a train at 400 kilometers per hour needs curve radii of 7 kilometers or more, and a vehicle accelerating at 0.15 g takes over two minutes and about 7 kilometers to reach 1,000 kilometers per hour, so short routes gain nothing from high top speeds. Trained people tolerate 3 to 4 g briefly, which suborbital passenger concepts require; the general public does not. Access, security and terminal time dominate journeys under about 1,000 kilometers, which is why the projections here spend more on automation and cost than on raw speed.`,
      sources: [
        { author: 'European Committee for Standardization', title: 'EN 12299: Railway applications. Ride comfort for passengers. Measurement and evaluation', publisher: 'CEN', year: 2009 },
        { author: 'National Aeronautics and Space Administration', title: 'Human Integration Design Handbook (NASA/SP-2010-3407)', publisher: 'NASA', year: 2010 },
      ],
    },
    {
      name: 'Sonic boom and hypersonic heating',
      description: `An aircraft above Mach 1 drags a shock cone whose ground overpressure for a Concorde sized airliner was about 100 pascals, loud enough that civil supersonic flight over land has been banned in the United States since 1973. Shaped fuselages can lower the perceived level by 20 to 30 decibels, as NASA's X-59 tests, but the boom cannot be eliminated, and drag at Mach 2 keeps fuel per seat two to three times that of a subsonic jet. Beyond about Mach 5 the stagnation temperature, roughly 1,300 kelvin at Mach 5 and above 3,000 kelvin at Mach 10, exceeds the limits of nickel superalloys and demands ceramics, ablators or active cooling that must survive a 30 year service life. Hypersonic passenger travel is therefore far harder than the supersonic travel that already failed commercially.`,
      sources: [
        { author: 'Richard Seebass and Albert R. George', title: 'Sonic-Boom Minimization', publisher: 'Journal of the Acoustical Society of America', year: 1972 },
        { author: 'John D. Anderson', title: 'Hypersonic and High-Temperature Gas Dynamics', publisher: 'AIAA', year: 2006 },
      ],
    },
    {
      name: 'Statistical validation of autonomy',
      description: `Human drivers in the United States produce about one fatal crash per 100 million miles. Kalra and Paddock calculated that showing with 95 percent confidence that an automated system merely matches that rate needs about 275 million miles without a fatality, and that demonstrating a 20 percent improvement with 95 percent confidence and 80 percent power needs nearly 9 billion miles. Large fleets can gather billions of miles, and injury crashes, being far more frequent, can be estimated sooner, but the rare tail of fatal events is validated only by scale and time. This bounds how fast any branch can move from tens of cities to universal driverless service, and applies with more force in aviation, where catastrophic failures must be rarer than one in a billion flight hours.`,
      sources: [
        { author: 'Nidhi Kalra and Susan M. Paddock', title: 'Driving to Safety: How Many Miles of Driving Would It Take to Demonstrate Autonomous Vehicle Reliability?', publisher: 'RAND Corporation', year: 2016, url: 'https://www.rand.org/pubs/research_reports/RR1478.html' },
        { author: 'Kristofer D. Kusano et al.', title: 'Comparison of Waymo Rider-Only Crash Data to Human Benchmarks at 7.1 Million Miles', publisher: 'Traffic Injury Prevention', year: 2024 },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ */
    /* 2026-2030                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'transportation',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Electrification on its cost curve, robotaxis in a few dozen cities, aviation waits',
      narrative: `Through 2030 the Baseline runs on the cost curves and regulatory clocks already visible in 2025. Electric cars rise from about a quarter of world new car sales in 2025 toward 40 to 45 percent by 2030, with China above 70 percent, Europe near half and the United States nearer 20 percent after the loss of federal purchase credits. Lithium iron phosphate packs below 70 dollars per kilowatt hour make a 400 kilometer car cheaper to own than a petrol one almost everywhere, and Chinese makers ship cars that accept charging near one megawatt, taking a 10 to 80 percent charge in under ten minutes where the grid can deliver it. Electric heavy trucks, already above a fifth of new sales in China, spread to ports, mines and regional haulage elsewhere as megawatt charging standards mature. Driverless taxis expand from the dozen or so American and Chinese metropolitan areas served in 2025 to perhaps 30 to 50 by 2030, with the largest fleets in the low tens of thousands of vehicles: ordinary in Phoenix, San Francisco, Los Angeles, Wuhan and Shenzhen, absent in most of the world. Driver-out trucking runs hub to hub on Sun Belt interstates, a few hundred trucks at a time. High speed rail keeps its Chinese pace, passing 50,000 kilometers and heading toward 60,000, while the United States gains one true high speed line, Las Vegas to the Los Angeles basin, near the end of the window. Aviation changes least: sustainable aviation fuel reaches perhaps 2 to 4 percent of jet fuel by 2030 as European mandates bite and American incentives fade, no hydrogen or battery airliner carries fare paying passengers, and supersonic remains a demonstrator programme. Shipping orders dual fuel methanol and ammonia hulls but burns fuel oil in over 95 percent of tonne miles; rotor and wing sails reach a few hundred ships. eVTOL air taxis carry passengers in the Gulf and China at prices near helicopter charter. Delivery drones make tens of millions of flights a year in a handful of cities and rural networks and remain a rounding error in parcel volume.`,
      dependencies: ['solid-state-battery-progress', 'tesla-model-s', 'gps', 'lithium-ion-battery', 'benz-daimler-automobile', 'wheel'],
      uncertainties: [
        'Tariffs on Chinese vehicles and cells could hold electric car shares in the United States and Europe well below the global average through 2030.',
        'A single high profile fatal crash involving a driverless vehicle could produce moratoria that remove cities from service for years.',
        'Sustainable aviation fuel supply depends on feedstock and refinery investment decisions that have repeatedly slipped.',
      ],
      indicators: [
        'Global electric car sales reported in the IEA Global EV Outlook and whether they exceed 30 million a year by 2028.',
        'Weekly paid driverless rides across all operators, and whether the total passes five million by 2028.',
        'Sustainable aviation fuel production above three million tonnes a year, roughly one percent of jet fuel.',
        'Delivered dual fuel ship tonnage as a share of the world fleet reported by DNV.',
      ],
      confidence: 'high',
      confidenceJustification: 'Vehicle sales, chargers and ship orders through 2030 are largely set by factories, orderbooks and mandates already in place. The main risk is trade and safety policy rather than technology.',
      sources: [
        { author: 'International Energy Agency', title: 'Global EV Outlook 2025', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/global-ev-outlook-2025' },
        { author: 'DNV', title: 'Maritime Forecast to 2050', publisher: 'DNV', year: 2024 },
        { author: 'International Civil Aviation Organization', title: 'Report on the Feasibility of a Long-Term Aspirational Goal for International Civil Aviation CO2 Emission Reductions', publisher: 'ICAO', year: 2022 },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Learned driving policies spread autonomy faster than the fleet can change',
      narrative: `In the Accelerated branch the vehicles on the road in 2030 are the same as in the Baseline: 40 to 45 percent of new cars electric, lithium iron phosphate dominant, megawatt charging in China, one new American high speed line. What differs is software. End to end driving policies trained on billions of fleet video hours, descended from the same transformer architectures that produced the language models, replace hand written planners between 2026 and 2028, and the cost of opening a new city falls from years of mapping and tuning to months of validation. Driverless service reaches perhaps 80 to 120 metropolitan areas by 2030 across the United States, China, the Gulf, Japan and Singapore, with Europe slower under its type approval rules. In the cities served, driverless rides pass 10 percent of ride hail trips, and personal cars from several makers offer eyes off highway driving on mapped motorways. Driver-out trucking expands to a few thousand tractors on fixed corridors. Automated engineering shows up before automated vehicles do: surrogate models cut aerodynamic and structural iteration on new airframes and hulls from months to days, model driven search narrows electrolyte and cathode candidates, and language models draft the certification paperwork that consumes years of an aircraft programme. None of this changes what flies or sails by 2030, because a clean sheet airliner takes a decade and a ship three years from order. Air traffic control trials learned sequencing tools; ports automate more cranes and yard vehicles. Delivery drones and sidewalk robots handle a noticeable share of food delivery in a few Chinese and American cities. By late 2030 the industry expects general autonomy within the decade and starts designing vehicles without steering wheels, but the fleet, which turns over every 15 to 20 years, still looks like 2025.`,
      dependencies: ['agentic-coding-tools', 'transformer-paper', 'alexnet', 'tesla-model-s', 'gps', 'benz-daimler-automobile'],
      uncertainties: [
        'Whether learned end to end policies can be validated to the standard regulators demand, or whether their failures prove too opaque to license at scale.',
        'The productivity gain from model assisted aircraft and ship design is not yet measured and may be small before 2030.',
        'Labour and municipal opposition to driverless expansion could slow city counts regardless of technical readiness.',
      ],
      indicators: [
        'Number of metropolitan areas with fully driverless paid service, and whether it passes 60 by 2029.',
        'Time from announcement to public driverless launch in a new city falling below twelve months.',
        'At least one certification authority accepting model generated compliance documentation for an aircraft or vessel.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The physical fleet is well constrained through 2030, but the pace of software driven expansion depends on validation methods and regulatory acceptance that are not yet settled.',
      sources: [
        { author: 'Nidhi Kalra and Susan M. Paddock', title: 'Driving to Safety: How Many Miles of Driving Would It Take to Demonstrate Autonomous Vehicle Reliability?', publisher: 'RAND Corporation', year: 2016, url: 'https://www.rand.org/pubs/research_reports/RR1478.html' },
        { author: 'International Energy Agency', title: 'Global EV Outlook 2025', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/global-ev-outlook-2025' },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2026-2030',
      branch: 'fast',
      headline: 'Autonomy becomes a solved problem before regulators, fleets or the public are ready',
      narrative: `The Discontinuous branch reaches AGI around 2029, and in transportation the first effect is that driving stops being a research problem. From 2027 learned driving policies exceed human crash rates across every road type on which they are permitted, and by 2029 the operators' problem is not capability but consent: which cities, states and countries will license them, on what evidence, and how fast. The fleets themselves are still small, because vehicles are built in factories that retool over years, so by 2030 driverless services cover perhaps 150 metropolitan areas and carry a few percent of urban trips worldwide, concentrated in the United States, China and the Gulf. Personal cars with steering wheels still sell in the hundreds of millions. Freight moves faster: driver-out trucking spreads to most American and Chinese interstate corridors, ports and warehouses fill with legged and wheeled robots from the revived humanoid programmes, and route planning, load matching and customs paperwork are handled end to end by agents, cutting logistics costs visibly by 2030. Electrification proceeds on the Baseline curve since it is limited by factories and grids, not intelligence. In 2029 and 2030 the first AGI class systems are turned on aircraft, ship and rail design, and produce complete airframes with truss braced wings and open rotors, low boom supersonic configurations, ammonia engines and maglev guideways faster than any certification authority can review them; none of these leaves the design stage before 2031. The visible political story of the window is labour. Roughly 100 million people worldwide drive for a living, and the branch's first strikes, city bans and driverless moratoria appear in 2029 and 2030, along with the first jurisdictions to move the other way and restrict human driving on selected roads.`,
      dependencies: ['state-of-the-field-2026', 'humanoid-robotics-revival', 'transformer-paper', 'tesla-model-s', 'gps', 'ford-assembly-line'],
      uncertainties: [
        'AGI class systems may prove far more useful for software and paperwork than for physical driving, keeping road autonomy on the Baseline path.',
        'Political reaction to job losses among drivers could take the form of national bans lasting years rather than local moratoria.',
        'Whether crash data at superhuman rates is accepted quickly depends on regulators adopting statistical rather than case by case approval.',
      ],
      indicators: [
        'Any national regulator approving driverless operation on all public roads without geographic restriction.',
        'Robotaxi share of urban passenger trips above five percent in any large city.',
        'First jurisdiction restricting human driving on a public road on safety grounds.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The branch anchor is close enough that fleet size and factory capacity constrain what can change by 2030. The uncertainty is political and regulatory rather than technical.',
      sources: [
        { author: 'Kristofer D. Kusano et al.', title: 'Comparison of Waymo Rider-Only Crash Data to Human Benchmarks at 7.1 Million Miles', publisher: 'Traffic Injury Prevention', year: 2024 },
        { author: 'Daniel J. Fagnant and Kara Kockelman', title: 'Preparing a nation for autonomous vehicles: opportunities, barriers and policy recommendations', publisher: 'Transportation Research Part A: Policy and Practice', year: 2015 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2030-2040                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'transportation',
      window: '2030-2040',
      branch: 'slow',
      headline: 'Electric majority on the road, driverless in hundreds of cities, clean fuel ships',
      narrative: `The 2030s in the Baseline are the decade the car fleet turns over. Electric cars pass two thirds of world new sales by 2040 and about 40 percent of the cars on the road, with solid state cells near 400 watt hours per kilogram in premium models from mid decade and sodium ion in cheap ones; oil demand from road transport falls every year from about 2030. Electric trucks take most new urban and regional haulage and, with megawatt charging along motorways, a growing share of long haul in China, Europe and the United States. Driverless taxis reach several hundred cities and a few percent of urban passenger kilometers in China and the United States by 2040, priced below private car ownership per kilometer in the densest markets; personal cars offer eyes off driving on motorways and supervised driving elsewhere. Driver-out trucking is routine on fixed corridors in the United States, China and Australia. Road deaths, about 1.2 million a year worldwide in the 2020s, begin to fall in the regions with the most automation. High speed rail reaches about 70,000 kilometers in China by 2035; Japan's superconducting maglev opens between Tokyo and Nagoya in the second half of the decade if its revised schedule holds; India, Morocco, Saudi Arabia and Spain extend networks; American and British projects deliver fragments. Aviation moves at certification speed. Sustainable aviation fuel reaches 8 to 15 percent of jet fuel by 2040, short of the mandates; 9 to 30 seat electric and hybrid aircraft enter service on routes under 400 kilometers; a hydrogen fuel cell regional demonstrator flies but no hydrogen airliner is certified; a supersonic airliner enters service on overwater routes in the mid 2030s only if it is financed, and low boom overland rules follow NASA's X-59 data late in the decade. Shipping prices carbon under the IMO framework from 2028, and by 2040 ammonia and methanol supply perhaps 15 to 25 percent of deep sea fuel energy, with wind assist on thousands of hulls. eVTOL networks operate in a few dozen cities at a few thousand aircraft worldwide. No hyperloop carries passengers. AGI arrives near 2038, too late to change what was built.`,
      dependencies: ['solid-state-battery-progress', 'tesla-model-s', 'lithium-ion-battery', 'jet-engine', 'containerization', 'stephenson-rocket'],
      uncertainties: [
        'Driverless expansion could stall well below hundreds of cities if per vehicle costs and remote assistance staffing do not fall as expected.',
        'The IMO carbon pricing framework could be delayed again or weakened, leaving clean shipping fuels uneconomic through 2040.',
        'Supersonic airliner programmes have repeatedly failed on financing and may not enter service at all.',
        'Grid capacity for megawatt truck charging along motorways may lag demand by years.',
      ],
      indicators: [
        'Electric share of world new car sales passing 50 percent before 2034.',
        'Driverless vehicle kilometers exceeding one percent of urban passenger kilometers in the United States or China.',
        'Ammonia or methanol above five percent of marine fuel energy in the deep sea fleet.',
        'Type certification of a battery or hybrid electric aircraft with more than nine seats.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Road electrification follows established learning curves and fleet turnover arithmetic, but autonomy, clean aviation fuel and marine fuel outcomes depend on regulatory and financing decisions still open in 2026.',
      sources: [
        { author: 'International Energy Agency', title: 'Global EV Outlook 2025', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/global-ev-outlook-2025' },
        { author: 'International Maritime Organization', title: '2023 IMO Strategy on Reduction of GHG Emissions from Ships', publisher: 'IMO', year: 2023 },
        { author: 'Todd Litman', title: 'Autonomous Vehicle Implementation Predictions: Implications for Transport Planning', publisher: 'Victoria Transport Policy Institute', year: 2024 },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'General autonomy meets decadal fleets: design accelerates, replacement does not',
      narrative: `AGI arrives near 2032 in the Accelerated branch, and by the middle of the decade driving is general: the same learned policies handle any road, weather and country, and the remaining questions are validation statistics and consent. Fleets in service accumulate several billion driverless kilometers a year by 2035, enough to estimate fatality rates directly rather than by proxy, and the evidence is strong enough that China and most American states license driverless operation without geographic limits by the late 2030s, followed by the Gulf, Japan, Australia and parts of Europe. Driverless services carry 10 to 20 percent of urban passenger kilometers in the countries that permit them by 2040, most new cars sold there are driverless capable, and private car ownership starts to decline in dense cities as a subscription costs less than a parking space. Long haul trucks in the United States and China are driver optional for most new sales by 2040, and ports, warehouses and rail yards are largely unstaffed. Automated engineering compresses design more than deployment. A clean sheet narrowbody with a truss braced wing and open rotor engines, about 20 to 25 percent more efficient, is designed in three years instead of eight and enters service around 2039; a hydrogen fuel cell regional airliner is certified in the late 2030s; 19 to 50 seat battery aircraft with solid state cells near 500 watt hours per kilogram serve routes to 600 kilometers. Ammonia engines become the default deep sea order by 2035 and coastal cargo goes autonomous, following the Norwegian precedent, with several hundred crewless vessels by 2040. Rail costs fall modestly as tunnelling and signalling automate, and China opens its first 600 kilometer per hour maglev line. eVTOL and drones are routine in a few hundred cities. Still, in 2040 most of the world's 1.7 billion cars and 100,000 ships were built before 2030, aviation fuel is at best 15 to 20 percent sustainable, and ASI arrives into a system whose hardware is a decade behind its software.`,
      dependencies: ['agentic-coding-tools', 'humanoid-robotics-revival', 'transformer-paper', 'tesla-model-s', 'jet-engine', 'ford-assembly-line'],
      uncertainties: [
        'National licensing of unrestricted driverless operation could take a decade longer than assumed if regulators demand fatality data at the billions of miles Kalra and Paddock describe.',
        'Faster design does not shorten flight test and certification, which may keep new airliner types on the Baseline schedule.',
        'Ownership decline in cities could be offset by induced travel from cheap driverless kilometers, raising congestion instead of reducing it.',
      ],
      indicators: [
        'Cumulative driverless kilometers passing ten billion with a fatality rate below the human benchmark at 95 percent confidence.',
        'First unrestricted national driverless licence.',
        'Time from programme launch to type certification of a new airliner below five years.',
        'Ammonia fuelled ships above 20 percent of the deep sea orderbook.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The branch anchor implies general autonomy is technically available by mid decade, and fleet turnover and certification lead times are well understood. The deployment pace depends on licensing choices that are hard to predict.',
      sources: [
        { author: 'Nidhi Kalra and Susan M. Paddock', title: 'Driving to Safety: How Many Miles of Driving Would It Take to Demonstrate Autonomous Vehicle Reliability?', publisher: 'RAND Corporation', year: 2016, url: 'https://www.rand.org/pubs/research_reports/RR1478.html' },
        { author: 'Andreas W. Schafer et al.', title: 'Technological, economic and environmental prospects of all-electric aircraft', publisher: 'Nature Energy', year: 2019 },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superhuman design against physical clocks: fleets, certification and consent bind',
      narrative: `In the Discontinuous branch superintelligent systems direct vehicle design from 2031, and the decade shows what that does and does not change. Driving is superhuman everywhere the policies are allowed to run; billions of driverless kilometers a year by 2033 settle the safety statistics, and the fatality rate in fully driverless traffic falls by more than 90 percent. Deployment is then a factory and politics problem. Robotic vehicle plants designed and run by the same systems retool in two to three years rather than five, and driverless capable electric cars become the cheapest vehicles ever built by the mid 2030s; even so, replacing 1.5 billion cars takes the decade and more, and in 2040 perhaps 40 percent of the world's cars are driverless capable, with human driving restricted on major roads in a growing set of countries and defended as a right in others. Freight is automated first because it needs no consent from passengers: trucks, ports, warehouses, rail yards and coastal ships run without crews across most of the developed world by 2040, and logistics cost per tonne kilometer roughly halves. Aviation exposes the physical clocks. Complete airliner designs exist in 2032; flight test, certification and the ramp of a new production line still take five to seven years, so the first ASI designed narrowbodies fly in revenue service near 2038, the first low boom supersonic airliner near 2039, hydrogen regional aircraft mid decade, and hypersonic passenger vehicles remain test articles because thermal protection life and boom acceptance cannot be shortened by intelligence alone. Shipping orders nuclear powered merchant vessels with factory built microreactors late in the decade after a decade of licensing work. Maglev and vacuum tube corridors are evaluated honestly for the first time, and most lose to conventional maglev on cost. Starship class vehicles fly cargo point to point on a few military routes. The branch's binding constraint by 2040 is consent: how many drivers, seafarers and pilots a society is willing to displace in a decade, and how much human control it wants to keep.`,
      dependencies: ['state-of-the-field-2026', 'humanoid-robotics-revival', 'starship-flights', 'tesla-model-s', 'jet-engine', 'wright-flyer'],
      uncertainties: [
        'Whether superintelligent design can shorten certification campaigns that rest on physical test hours and regulator judgement.',
        'The speed of factory retooling and material supply for a full fleet replacement has no precedent and may be slower than assumed.',
        'Societies may impose deliberate limits on automation of transport labour that hold deployment far below technical capacity.',
        'Nuclear merchant shipping depends on port state acceptance that may never arrive.',
      ],
      indicators: [
        'Global road deaths falling below 800,000 a year.',
        'A new airliner type certified within four years of programme launch.',
        'Crewless deep sea voyages exceeding ten percent of tonne miles on any major trade lane.',
        'First licensed nuclear powered merchant vessel entering a commercial port.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch depends on a discontinuity in design capability with no precedent in physical engineering. Fleet turnover, certification and political consent are the only firm anchors.',
      sources: [
        { author: 'Nidhi Kalra and Susan M. Paddock', title: 'Driving to Safety: How Many Miles of Driving Would It Take to Demonstrate Autonomous Vehicle Reliability?', publisher: 'RAND Corporation', year: 2016, url: 'https://www.rand.org/pubs/research_reports/RR1478.html' },
        { author: 'Richard Seebass and Albert R. George', title: 'Sonic-Boom Minimization', publisher: 'Journal of the Acoustical Society of America', year: 1972 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2040-2060                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'transportation',
      window: '2040-2060',
      branch: 'slow',
      headline: 'Driverless majority, near total road electrification, first clean long haul flight',
      narrative: `In the Baseline, AGI arrives around 2038 and its effects on transportation accumulate through this window rather than transforming it. Road transport is essentially electric by 2060, with the last combustion cars aging out in poor countries, and lithium sulfur and early lithium air cells above 700 watt hours per kilogram appear in the 2050s. Driverless vehicles carry most urban passenger kilometers in China, the United States, the Gulf and much of Europe by the 2050s, private car ownership in cities falls by a third to a half, and road deaths drop by 70 to 90 percent in the regions where human driving is rare, from about 1.2 million a year worldwide toward a few hundred thousand, most of them in places that automated late. Freight is automated end to end in rich countries; drones and sidewalk robots handle a large share of small parcels. Aviation finally changes. Sustainable and synthetic kerosene, made from cheap surplus solar power and captured carbon, pass half of jet fuel by 2060; hydrogen fuel cell aircraft serve regional and short haul routes from the 2040s; battery aircraft with 500 to 700 watt hour per kilogram cells reach 1,000 kilometer routes; and a low boom supersonic airliner flies overland routes under rules adopted in the 2040s, at fares that keep it a small niche because its fuel per seat remains two to three times that of a subsonic jet. Hypersonic vehicles stay military and experimental. Shipping runs on ammonia, methanol and wind assist for most tonnage by 2060, with crewless operation common, and a handful of nuclear powered merchant vessels demonstrate the option under strict port regimes. High speed rail approaches 100,000 kilometers worldwide, with a few 600 kilometer per hour maglev corridors in China and Japan; hyperloop has no passenger line. eVTOL networks are ordinary in dozens of cities and rare elsewhere. Cities reclaim parking for housing and greenery. ASI arrives near 2058 into a system that has already used a generation of AGI assisted engineering.`,
      dependencies: ['solid-state-battery-progress', 'tesla-model-s', 'lithium-ion-battery', 'jet-engine', 'wright-flyer', 'benz-daimler-automobile'],
      uncertainties: [
        'Synthetic kerosene at scale depends on electricity near two cents per kilowatt hour, which the energy field may not deliver by 2050.',
        'Driverless dominance could lag by a decade in Europe and the developing world under different liability and labour regimes.',
        'Nuclear merchant shipping may remain confined to a few flag states.',
      ],
      indicators: [
        'Sustainable and synthetic kerosene above 25 percent of jet fuel by 2050.',
        'Global road deaths below 600,000 a year.',
        'First hydrogen fuel cell airliner with more than 50 seats in scheduled service.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The direction follows from cost curves and fleet arithmetic already visible, but the mix of hydrogen, synthetic fuel and batteries in aviation and shipping depends on energy prices that cannot be known before the 2040s.',
      sources: [
        { author: 'International Council on Clean Transportation', title: 'Vision 2050: Aligning aviation with the Paris Agreement', publisher: 'ICCT', year: 2022 },
        { author: 'Venkatasubramanian Viswanathan et al.', title: 'The challenges and opportunities of battery-powered flight', publisher: 'Nature', year: 2022 },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'Robotic fleets and cheap energy remake mobility; speed limits stay physical',
      narrative: `ASI arrives around 2040 in the Accelerated branch, and this window is when design speed meets a manufacturing base that can keep up. Robotic factories and construction crews from the robotics field build vehicles, guideways, ports and airports on schedules of years rather than decades, and energy from solar and fusion falls toward one to two cents per kilowatt hour, which makes synthetic fuels and hydrogen cheap. By 2050 human driving on public roads is restricted to designated areas in most developed countries and road deaths in those countries approach the floor set by pedestrians, weather and mechanical failure, a few per million people a year. Cars are mostly shared, small and cheap; the vehicle fleet shrinks while passenger kilometers rise, and street space in cities is rebuilt for people, freight robots and eVTOL pads. Aviation is redesigned twice in the window: ASI designed airframes with blended wings and open rotors cut energy per seat by 30 to 40 percent from 2026 types, synthetic kerosene and hydrogen supply most of the fuel by 2060, and lithium sulfur cells near 800 watt hours per kilogram push battery aircraft to 1,500 kilometer routes. Low boom supersonic flight over land is routine on premium routes by the 2050s, and a hypersonic passenger demonstrator with active cooling flies, though no scheduled service exists because the airframe life and fare economics are not solved. Shipping is crewless and mostly ammonia, hydrogen and wind assisted, with a growing nuclear fleet of factory built microreactor ships serving the longest routes. Maglev corridors at 600 kilometers per hour link a dozen megacity pairs in China, Japan and Europe, built by automated tunnelling; evacuated tube systems get a genuine engineering evaluation and are built on one or two corridors where tunnelling is cheap, still bound by the 0.15 g comfort limit that makes them pointless under 500 kilometers. Suborbital rockets carry cargo and a small premium passenger trade at 3 g, limited by who can tolerate it. The Marchetti travel time budget of about an hour a day holds, so cities spread along the fast corridors rather than dissolving.`,
      dependencies: ['humanoid-robotics-revival', 'starship-flights', 'solid-state-battery-progress', 'jet-engine', 'wright-flyer', 'stephenson-rocket'],
      uncertainties: [
        'Restrictions on human driving depend on political consent that could be withheld for decades in countries that value driving as a freedom.',
        'Evacuated tube systems may never pass a rigorous safety case for depressurisation and evacuation.',
        'The scale of suborbital passenger travel depends on medical screening and public risk tolerance for rocket flight.',
        'Induced demand from cheap automated travel could raise total energy use and congestion despite efficiency gains.',
      ],
      indicators: [
        'Road deaths below five per million people a year in any large country.',
        'Airliner energy per seat kilometer falling 30 percent from 2026 types across a major fleet.',
        'Any evacuated tube passenger line in revenue service with a certified safety case.',
        'Scheduled suborbital passenger service on any route.',
      ],
      confidence: 'low',
      confidenceJustification: 'The physics permits this trajectory and the anchor implies design capability far beyond present, but the projection depends on robotic construction, licensing reform and consent whose timing is speculative.',
      sources: [
        { author: 'Cesare Marchetti', title: 'Anthropological Invariants in Travel Behavior', publisher: 'Technological Forecasting and Social Change', year: 1994 },
        { author: 'Andreas Schafer and David G. Victor', title: 'The future mobility of the world population', publisher: 'Transportation Research Part A: Policy and Practice', year: 2000 },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2040-2060',
      branch: 'fast',
      headline: 'A fully automated mobility system near the drag and comfort limits, bounded by consent',
      narrative: `The Discontinuous branch enters the 2040s with superintelligence a decade old and the vehicle fleet already half replaced. By 2050 essentially all vehicle movement on land, sea and in the air in developed countries is automated; human driving survives as a recreation on private tracks and in countries that chose to keep it. Road deaths fall to the floor of a few per million people a year wherever automation is complete. The fleet is small, shared and cheap, built by robotic plants from designs that sit at the rolling and drag minima, and energy for transport is a small fraction of a civilization drawing several times the 2026 rate. What the window reveals is that the ceiling on transportation is not intelligence but physics and people. Ground speed stays near 350 to 600 kilometers per hour because the cube law and curve radii make faster travel expensive and no faster door to door under about 1,000 kilometers; evacuated tubes are built where tunnelling is nearly free, and even there the 0.15 g comfort limit fixes their acceleration. Aviation reaches the subsonic efficiency limit with blended wing bodies and open rotors in the 2040s, runs on synthetic kerosene, hydrogen and lithium air cells above 1,000 watt hours per kilogram, and offers low boom supersonic flight overland at fares near subsonic ones on premium routes. Hypersonic and suborbital passenger travel exist by 2060 on a few intercontinental routes at 3 g and hour long flight times, used by a small share of travellers who pass the medical screening and accept the risk. Shipping is crewless and nuclear or ammonia powered, with hulls at the wave making limit. Cities are rebuilt around the absence of parking and the presence of drones, eVTOL and robots, and the Marchetti hour still governs how far people spread. The remaining political questions are how much automation people want to see, how much human control they insist on keeping, and whether travel itself declines as telepresence improves.`,
      dependencies: ['state-of-the-field-2026', 'starship-flights', 'humanoid-robotics-revival', 'jet-engine', 'wright-flyer', 'sailing-ship'],
      uncertainties: [
        'Whether societies permit near total removal of human control in transport, or cap automation well below what is technically available.',
        'Demand for physical travel could fall sharply with immersive telepresence, changing what the system is for.',
        'Hypersonic airframe life and cost may keep passenger service to a few demonstration routes indefinitely.',
      ],
      indicators: [
        'Human driven vehicle kilometers below ten percent of the total in any large country.',
        'Any scheduled hypersonic or suborbital passenger route operating for more than two years without a fatal accident.',
        'Global passenger kilometers per person flat or falling while telepresence use rises.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the far tail of the fast branch. Physics bounds the speeds and energies, and the anchor implies the capability, but the pace of fleet replacement and public consent have no precedent.',
      sources: [
        { author: 'John D. Anderson', title: 'Hypersonic and High-Temperature Gas Dynamics', publisher: 'AIAA', year: 2006 },
        { author: 'Cesare Marchetti', title: 'Anthropological Invariants in Travel Behavior', publisher: 'Technological Forecasting and Social Change', year: 1994 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2060-2090                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'transportation',
      window: '2060-2090',
      branch: 'slow',
      headline: 'After ASI, the Baseline converges on automated, decarbonized mobility at its own pace',
      narrative: `ASI arrives around 2058 in the Baseline, so this window is the Baseline's version of what the faster branches experienced two decades earlier: superhuman design applied to a system that is already mostly electric and largely automated. The starting point in 2060 is a road fleet that is electric and majority driverless in rich countries, aviation about half on clean fuels, and shipping mostly on ammonia and methanol. Superintelligent engineering compresses what remains. Airframes reach the subsonic efficiency limit by the 2070s, synthetic fuel and hydrogen displace fossil kerosene entirely, and lithium air cells push battery aircraft to 2,000 kilometers. Low boom supersonic flight becomes a normal premium product. Human driving on public roads is restricted in most countries by the 2070s, though the Baseline's institutions do it by referendum and legislation, a decade or two behind the technology, and road deaths worldwide fall below 100,000 a year by 2090. Nuclear merchant shipping grows once ASI designed reactors and port protocols earn acceptance, and the deep sea fleet is crewless. Maglev corridors spread in Asia and Europe; evacuated tubes are built on a handful of routes and remain a curiosity. Suborbital passenger travel exists on a few routes for the fit and wealthy. Cities have converted most parking to other uses and freight moves by robot and drone. The Marchetti budget of about an hour a day of travel holds, so the effect of cheap fast mobility is to enlarge the metropolitan regions around fast corridors rather than to change how much time people spend moving. The reasoning chain is simple: physical limits on speed and energy were within a factor of two of practice by 2060, and thirty years of ASI assisted engineering is enough for even slow institutions to close most of the gap on the axes of automation, safety and carbon, while speed stays bounded by drag, comfort and boom.`,
      dependencies: ['solid-state-battery-progress', 'tesla-model-s', 'jet-engine', 'wright-flyer', 'benz-daimler-automobile', 'stephenson-rocket'],
      uncertainties: [
        'The Baseline assumes ASI is deployed under stable institutions; disruption could either speed automation or halt it.',
        'Whether restrictions on human driving are adopted broadly is a cultural question that may be answered differently across regions.',
        'Demand for travel after 2060 depends on population, telepresence and settlement patterns that no model constrains.',
      ],
      indicators: [
        'Fossil kerosene below ten percent of jet fuel.',
        'Global road deaths below 100,000 a year.',
        'Nuclear powered vessels above five percent of deep sea tonnage.',
      ],
      confidence: 'low',
      confidenceJustification: 'Beyond 2060 the projection relies on physical limits and scenario anchors rather than on any current programme. The direction is defensible; the magnitudes are not.',
      sources: [
        { author: 'Andreas Schafer and David G. Victor', title: 'The future mobility of the world population', publisher: 'Transportation Research Part A: Policy and Practice', year: 2000 },
        { author: 'David J. C. MacKay', title: 'Sustainable Energy: Without the Hot Air', publisher: 'UIT Cambridge', year: 2009 },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'Mobility at the physical ceiling on Earth; the questions become what travel is for',
      narrative: `Two decades after ASI, the Accelerated branch has a transport system with little technical headroom left. Road vehicles sit at the rolling and drag minima and are entirely automated; the fatality floor of a few per million a year is reached in every country that permits full automation, and most do. Airliners operate at the subsonic efficiency limit on synthetic fuel, hydrogen and lithium air cells; supersonic overland flight is routine; hypersonic and suborbital services connect a few dozen city pairs in one to two hours at 3 g, used by a few percent of long haul travellers. Ships are crewless, nuclear or ammonia powered, and sail at speeds chosen for energy rather than schedule. Maglev and a few evacuated tube corridors carry intercity traffic at 500 to 1,000 kilometers per hour where the geography rewards it, always bounded by the comfort limit on acceleration and the radii it demands. Drones and robots handle nearly all local freight. The index for this branch approaches 65 to 70 by 2090, and the remaining gap is not engineering. Three things define the window. First, demand: with travel cheap, fast and safe, the Marchetti hour still limits time spent moving, but the distance covered in that hour rises, and metropolitan regions merge along fast corridors into continental scale urban systems. Second, energy: transportation draws a small and falling share of a civilization using several times the 2026 rate, so the environmental argument shifts to land, noise and the wildlife effects of drones and eVTOL. Third, choice: some societies keep human driving, sailing and flying as protected activities, and the branch's most contested transport politics are about preserving human control rather than achieving automation. Off Earth, the same automated logistics extend to orbital and lunar transport, which the space field describes. Transportation has become a utility, priced by land, noise and time rather than by fuel or labour.`,
      dependencies: ['humanoid-robotics-revival', 'starship-flights', 'jet-engine', 'wright-flyer', 'stephenson-rocket', 'sailing-ship'],
      uncertainties: [
        'Whether continental urban systems along fast corridors form depends on settlement preferences that a century of history does not settle.',
        'Hypersonic and suborbital traffic could stay a curiosity if boom, medical screening and risk keep demand small.',
        'Protected human control may cover a large share of vehicle movement in some countries.',
      ],
      indicators: [
        'Scheduled hypersonic or suborbital services connecting more than ten city pairs.',
        'Transport share of final energy below ten percent.',
        'Continental maglev networks above 20,000 kilometers.',
      ],
      confidence: 'low',
      confidenceJustification: 'Everything in this window sits two or three technology generations beyond current programmes. Physical limits on speed, energy and comfort are the only firm bounds.',
      sources: [
        { author: 'Cesare Marchetti', title: 'Anthropological Invariants in Travel Behavior', publisher: 'Technological Forecasting and Social Change', year: 1994 },
        { author: 'Jesse H. Ausubel, Cesare Marchetti and Perrin Meyer', title: 'Toward green mobility: the evolution of transport', publisher: 'European Review', year: 1998 },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Terrestrial mobility at its limits; growth moves off planet and into telepresence',
      narrative: `By 2060 the Discontinuous branch already has automated, decarbonized transport near the physical limits on Earth, and this window is about what a superintelligent civilization does with a solved problem. On the ground nothing important improves: vehicles are at the drag and rolling minima, automation is total where permitted, fatalities are at the floor, and maglev and evacuated tube corridors run at the comfort limit. In the air, airliners sit at the subsonic efficiency limit and supersonic overland flight is ordinary; hypersonic and suborbital services connect the major intercontinental pairs in one to two hours for those who can tolerate 3 g, and the airframe life and cooling problems that limited them in the 2040s are engineered away. The physics still holds: the boom is shaped, not removed, and cruise energy per seat at Mach 2 remains a multiple of subsonic, so most travellers still choose subsonic aircraft, and hypersonic remains a few percent of long haul trips. Ships are crewless, nuclear or ammonia powered, and freight volumes shift as automated industry relocates production toward energy and materials rather than toward labour. The two real changes are elsewhere. Physical travel demand plateaus and in some places declines as immersive telepresence substitutes for business and some social trips, so the Marchetti hour is spent in fewer, longer journeys. And transport extends off Earth: the launch and space field describe the orbital and lunar logistics, but by 2090 the same automated scheduling and vehicle design that run terrestrial freight run traffic between Earth, orbit and the Moon, and point to point suborbital cargo is an ordinary part of the freight network. The index reads roughly 74 for this branch by 2090: the terrestrial system is at its ceiling on every axis except speed, and speed is capped by physics and human physiology rather than by anything a superintelligence can change.`,
      dependencies: ['state-of-the-field-2026', 'starship-flights', 'jet-engine', 'wright-flyer', 'stephenson-rocket', 'sailing-ship'],
      uncertainties: [
        'How much physical travel people want in a world of near perfect telepresence is unknowable and dominates the demand picture.',
        'Whether human physiology limits on acceleration are ever relaxed by medical means is speculative and excluded from the projection.',
        'Off planet transport at meaningful scale depends on space industry that may develop far more slowly.',
      ],
      indicators: [
        'Global passenger kilometers per person declining for a decade while telepresence hours rise.',
        'Hypersonic and suborbital share of long haul trips above five percent.',
        'Regular cargo traffic between Earth and lunar surface facilities.',
      ],
      confidence: 'low',
      confidenceJustification: 'This projection is bounded by physics and the scenario anchor and has no empirical basis beyond them. It describes a plausible ceiling, not a forecast of what will be chosen.',
      sources: [
        { author: 'John D. Anderson', title: 'Hypersonic and High-Temperature Gas Dynamics', publisher: 'AIAA', year: 2006 },
        { author: 'Cesare Marchetti', title: 'Anthropological Invariants in Travel Behavior', publisher: 'Technological Forecasting and Social Change', year: 1994 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2090-2126                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'transportation',
      window: '2090-2126',
      branch: 'slow',
      headline: 'A century on: the Baseline reaches automated, clean mobility near the physical limits',
      narrative: `In the last window of the atlas the Baseline has had about seventy years of AGI assisted and thirty of ASI assisted engineering, and its transport system converges on what the other branches reached decades earlier. Every mode is automated where societies permit it, which by 2126 is nearly everywhere for freight and most places for passengers, with human driving, sailing and flying kept as licensed pastimes. Fatalities sit at the floor set by pedestrians, weather and mechanical failure, tens of thousands a year worldwide against 1.2 million in the 2020s. Carbon intensity is zero: road and rail are electric, aviation runs on synthetic kerosene, hydrogen and lithium air batteries at chemistry limits, and shipping on ammonia and nuclear power. Speeds are near the physical ceilings and no higher: rail and maglev at 400 to 600 kilometers per hour, a few evacuated tube corridors approaching 1,000, subsonic airliners at the efficiency limit, supersonic overland at premium fares, hypersonic and suborbital on a small number of intercontinental routes for a small share of travellers. The gap to the index ceiling is not technical. It represents human control kept by choice, speed capacity not built because the Marchetti hour and the comfort limit make it worthless for most journeys, and travel demand that plateaued as telepresence matured and population growth ended. Cities have absorbed their former parking and roads into housing and green space, and metropolitan regions stretch along fast corridors. Transport in 2126 is a utility as unremarkable as water in a rich country of 2026, priced by land, noise and time. The reasoning chain rests on three fixed points: drag and rolling resistance set energy per kilometer, human physiology sets acceleration and hence useful speed, and fleet replacement takes decades even when designs are perfect; a century is long enough for slow institutions to reach the first two limits and finish the third.`,
      dependencies: ['solid-state-battery-progress', 'jet-engine', 'wright-flyer', 'benz-daimler-automobile', 'stephenson-rocket', 'wheel'],
      uncertainties: [
        'Institutional stability over a century is unknowable and the Baseline assumes continuity.',
        'Whether human population and per capita travel rise or fall after 2090 dominates the demand figure.',
        'Medical or physiological changes that raise human acceleration tolerance would change the speed ceiling and are excluded here.',
      ],
      indicators: [
        'Human operated vehicle kilometers below five percent of the world total.',
        'Global transport fatalities below 50,000 a year.',
        'Fossil fuel use in transport at zero.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the physical limits are trustworthy. The projection describes convergence on those limits rather than events.',
      sources: [
        { author: 'Andreas Schafer and David G. Victor', title: 'The future mobility of the world population', publisher: 'Transportation Research Part A: Policy and Practice', year: 2000 },
        { author: 'Vaclav Smil', title: 'Prime Movers of Globalization: The History and Impact of Diesel Engines and Gas Turbines', publisher: 'MIT Press', year: 2010 },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'Mobility as infrastructure: near the ceiling on Earth, extending to orbit',
      narrative: `The Accelerated branch reaches 2090 with transport at the physical ceiling on Earth, and the final window is about the shape of demand and the extension of the system beyond the planet. Terrestrial hardware is replaced on cycles set by wear rather than improvement, because designs sit at the drag, rolling and efficiency limits and cannot usefully change. Automation is complete in freight and nearly complete in passenger travel; protected human driving and flying persist as regulated activities, on the model of horse riding a century earlier. Fatalities are at the floor, carbon at zero, and the energy used by transport is a small fraction of a civilization drawing several times the 2026 rate. Speed has stopped rising: the cube law, the comfort limit and the boom fix rail near 600 kilometers per hour, tubes near 1,000, subsonic flight near Mach 0.85 and supersonic near Mach 2, with hypersonic and suborbital serving those who accept 3 g on a few dozen intercontinental pairs. What changes is where and why people move. Physical travel per person is flat or falling as telepresence takes most business and much social travel, and the Marchetti hour is spent on fewer, longer, more deliberate journeys; metropolitan regions along fast corridors have merged into continental urban systems with countryside between. Off Earth, the launch and space fields describe growing orbital and lunar activity, and the transport system extends to it: automated scheduling, vehicle design and logistics treat orbit as another network node, point to point suborbital cargo is routine, and by 2126 a meaningful share of the machinery this field describes operates above the atmosphere. The index for this branch approaches 80 by 2126. The remainder is speed capacity not built because physics and physiology make it worthless, and human control kept because people want it. Transportation has become a background condition of civilization, like the road network or the postal system once were, and the atlas can say little about its use beyond that people still travel about an hour a day.`,
      dependencies: ['starship-flights', 'humanoid-robotics-revival', 'jet-engine', 'wright-flyer', 'stephenson-rocket', 'sailing-ship'],
      uncertainties: [
        'Orbital and lunar transport at meaningful scale is speculative and may not be pursued at all.',
        'The balance between physical travel and telepresence is a cultural outcome that no model constrains.',
        'Continental urban systems may fragment or consolidate depending on governance choices decades earlier.',
      ],
      indicators: [
        'Physical travel per person flat or declining for two decades.',
        'Cargo mass moved between Earth and orbit exceeding one million tonnes a year.',
        'Human operated share of vehicle kilometers stable at a protected minimum rather than falling further.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a limit bounded description, not a forecast. The physical fixed points are secure; the social choices are not.',
      sources: [
        { author: 'Cesare Marchetti', title: 'Anthropological Invariants in Travel Behavior', publisher: 'Technological Forecasting and Social Change', year: 1994 },
        { author: 'Jesse H. Ausubel, Cesare Marchetti and Perrin Meyer', title: 'Toward green mobility: the evolution of transport', publisher: 'European Review', year: 1998 },
      ],
    },
    {
      fieldId: 'transportation',
      window: '2090-2126',
      branch: 'fast',
      headline: 'Movement solved, travel chosen: the ceiling is physiology, physics and preference',
      narrative: `In the Discontinuous branch terrestrial transport reached its ceiling in the 2060s, and the century's last decades show what stays fixed when intelligence is unlimited. Energy per kilometer is at the drag and rolling minima for every mode and cannot fall further without lower speed. Acceleration is capped by human physiology at about 0.15 g for comfort and 3 g for the fit, so ground speed stays near 600 kilometers per hour on maglev and 1,000 in the few evacuated tubes, and intercontinental travel takes one to two hours by hypersonic or suborbital vehicle for those who accept the load, ten to fifteen by subsonic aircraft for everyone else. The sonic boom is shaped to a thump but never removed. Automation is total; fatalities are at the floor; carbon is zero. Nothing in the projections after 2090 is technological, because there is nothing left in the physics to improve for a passenger made of flesh. What the window describes instead are choices. Demand for physical travel falls as telepresence and, later, the machine intelligence that does most of the civilization's work have no need to move bodies; people travel for pleasure, family and presence, roughly an hour a day as they always have, in fewer and longer trips. Some societies keep human driving, sailing and flying alive as protected culture; others let them lapse. Most freight on Earth moves for machines rather than people, between automated mines, factories and energy systems, and the largest growth in tonne kilometers is between Earth, orbit and the Moon, where the space field describes the industrial economy that this branch builds. The index reaches roughly 86 by 2126: automation, safety, carbon and energy at their ceilings, speed at the human limit, and the remaining margin representing capacity that a civilization of this kind may decline to use. The atlas records the limits with confidence and the choices with none; a superintelligent civilization's transport system is bounded by the same drag equation and the same fragile passenger as the first railway.`,
      dependencies: ['state-of-the-field-2026', 'starship-flights', 'jet-engine', 'wright-flyer', 'stephenson-rocket', 'wheel'],
      uncertainties: [
        'How much a civilization of people and machine intelligence wants to move bodies at all is the dominant unknown and is not a physics question.',
        'Off planet freight at the assumed scale has no demonstrated basis and could be far smaller.',
        'Deliberate limits on automation could hold the terrestrial system below its ceiling for cultural reasons.',
      ],
      indicators: [
        'Tonne kilometers between Earth and off planet facilities exceeding terrestrial air freight.',
        'Physical passenger travel per person declining while reported wellbeing from travel rises.',
        'Human operated vehicle share stable as a protected cultural minimum.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window describes a system at physical and physiological ceilings; the numbers are limit derived and the choices behind them are unforecastable.',
      sources: [
        { author: 'Cesare Marchetti', title: 'Anthropological Invariants in Travel Behavior', publisher: 'Technological Forecasting and Social Change', year: 1994 },
        { author: 'National Aeronautics and Space Administration', title: 'Human Integration Design Handbook (NASA/SP-2010-3407)', publisher: 'NASA', year: 2010 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 18, low: 17, high: 19 },
      { year: 2030, value: 20, low: 19, high: 21 },
      { year: 2040, value: 26, low: 23, high: 29 },
      { year: 2060, value: 38, low: 31, high: 45 },
      { year: 2090, value: 52, low: 40, high: 62 },
      { year: 2126, value: 64, low: 48, high: 76 },
    ],
    moderate: [
      { year: 2026, value: 18, low: 17, high: 19 },
      { year: 2030, value: 21, low: 19, high: 23 },
      { year: 2040, value: 30, low: 25, high: 36 },
      { year: 2060, value: 48, low: 36, high: 58 },
      { year: 2090, value: 66, low: 50, high: 78 },
      { year: 2126, value: 80, low: 60, high: 90 },
    ],
    fast: [
      { year: 2026, value: 18, low: 17, high: 19 },
      { year: 2030, value: 22, low: 19, high: 25 },
      { year: 2040, value: 35, low: 27, high: 44 },
      { year: 2060, value: 58, low: 42, high: 70 },
      { year: 2090, value: 74, low: 56, high: 86 },
      { year: 2126, value: 86, low: 64, high: 94 },
    ],
  },
  sources: [
    { author: 'International Energy Agency', title: 'Global EV Outlook 2025', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/global-ev-outlook-2025' },
    { author: 'Nidhi Kalra and Susan M. Paddock', title: 'Driving to Safety: How Many Miles of Driving Would It Take to Demonstrate Autonomous Vehicle Reliability?', publisher: 'RAND Corporation', year: 2016, url: 'https://www.rand.org/pubs/research_reports/RR1478.html' },
    { author: 'Kristofer D. Kusano et al.', title: 'Comparison of Waymo Rider-Only Crash Data to Human Benchmarks at 7.1 Million Miles', publisher: 'Traffic Injury Prevention', year: 2024 },
    { author: 'Andreas W. Schafer et al.', title: 'Technological, economic and environmental prospects of all-electric aircraft', publisher: 'Nature Energy', year: 2019 },
    { author: 'International Council on Clean Transportation', title: 'Vision 2050: Aligning aviation with the Paris Agreement', publisher: 'ICCT', year: 2022 },
    { author: 'International Maritime Organization', title: '2023 IMO Strategy on Reduction of GHG Emissions from Ships', publisher: 'IMO', year: 2023 },
    { author: 'David J. C. MacKay', title: 'Sustainable Energy: Without the Hot Air', publisher: 'UIT Cambridge', year: 2009 },
    { author: 'Cesare Marchetti', title: 'Anthropological Invariants in Travel Behavior', publisher: 'Technological Forecasting and Social Change', year: 1994 },
  ],
  lastReviewed: '2026-09-04',
};
