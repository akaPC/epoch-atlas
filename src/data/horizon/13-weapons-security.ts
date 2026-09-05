import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'weapons-security',
  index: 13,
  name: 'Weapons and Security',
  code: 'SECURITY',
  summary: `Weapons and security in September 2026 are being reshaped by two forces that arrived together: cheap autonomy and machine intelligence. The war in Ukraine turned the small drone into the dominant tactical weapon, with each side producing on the order of a million or more first-person-view and loitering munitions a year, fiber-optic guidance defeating jamming, and layered counter-drone defenses built from electronic warfare, guns, interceptor drones and the first 50 to 100 kilowatt lasers. AI already sits in targeting and intelligence workflows as decision support, under policies such as US DoD Directive 3000.09 that keep a human responsible for the use of force. In cyber, automated vulnerability discovery and patching moved from competition to practice in 2025. Hypersonic gliders are fielded by Russia and China and reaching US units; missile defense is again a national program; the nuclear order lost New START in February 2026 while China expands toward a thousand warheads. Space holds proliferated constellations and a record of counterspace tests. Biosecurity governance is racing the biological capabilities of frontier models. Everywhere the physics sets the frame: attenuation, kinematics, detection and the speed of light. This field is an atlas of capability and risk, not a case for any of it.`,
  indexDefinition: `The index measures how close the means of sensing, effect, protection and control have moved toward their physical limits, averaged across six components: sensing (the fraction of the Earth's surface, orbits and networks that can be observed persistently at the resolution physics allows), autonomy (how much of the sense-to-effect loop runs without human latency), effects (kinetic, directed-energy and cyber effects relative to kinematic, atmospheric and light-speed limits), defense (interception at the offense-defense cost frontier), biosecurity (screening and detection coverage) and verification (the ability to confirm what adversaries hold and do). A score of 100 is a world where all six sit at physical ceilings, so that security is bounded by physics and by choice alone. September 2026 sits near 15.`,
  physicalLimits: [
    {
      name: 'Atmospheric attenuation and thermal blooming',
      description: `A laser weapon delivers energy only as fast as the air allows. Water vapor, aerosols, rain and fog absorb and scatter the beam, so practical systems use wavelengths near one micron in atmospheric windows and still lose a large share of their power over a few kilometers in poor weather. The absorbed fraction heats the air along the path, lowers its refractive index and defocuses the beam, an effect called thermal blooming that grows with power, so raising output past a few hundred kilowatts yields diminishing intensity on target. Turbulence adds jitter that adaptive optics only partly corrects. These effects hold ground lasers to engagement ranges of a few kilometers and seconds of dwell per kill. Above the atmosphere none of them apply.`,
      sources: [
        { author: 'Phillip Sprangle, Bahman Hafizi, Antonio Ting and Richard Fischer', title: 'High-power lasers for directed-energy applications', publisher: 'Applied Optics', year: 2015 },
        { author: 'Kelley M. Sayler', title: 'Department of Defense Directed Energy Weapons: Background and Issues for Congress (R46925)', publisher: 'Congressional Research Service', year: 2023 },
      ],
    },
    {
      name: 'Hypersonic thermal and material limits',
      description: `A vehicle flying above Mach 5 in the atmosphere converts kinetic energy into heat at its surface. Stagnation temperatures on a boost-glide vehicle at Mach 10 to 20 exceed 2,000 kelvin, so leading edges need ultra-high-temperature ceramics or ablative carbon and must survive minutes of exposure while keeping their shape. Drag also bleeds speed: a glider is slower over a given range than a ballistic warhead and arrives with less energy. The same heating makes the vehicle a bright infrared source that space-based sensors can track through most of its flight, which limits the stealth advantage often claimed for hypersonic weapons. The physics fixes a trade among speed, range, maneuver and survivability that no material yet escapes.`,
      sources: [
        { author: 'Cameron L. Tracy and David Wright', title: 'Modeling the Performance of Hypersonic Boost-Glide Missiles', publisher: 'Science and Global Security', year: 2020 },
        { author: 'Kelley M. Sayler', title: 'Hypersonic Weapons: Background and Issues for Congress (R45811)', publisher: 'Congressional Research Service', year: 2025 },
      ],
    },
    {
      name: 'Interceptor kinematics and the offense-defense cost ratio',
      description: `The rocket equation sets how much velocity a given mass of propellant can buy, and an intercontinental warhead reenters at about seven kilometers a second. An interceptor must therefore be a rocket of comparable performance, launched in time to close the geometry, and it must discriminate the warhead from decoys that are cheap for the attacker and expensive for the defender. Boost-phase intercept requires the interceptor to be within a few hundred kilometers and to act within about a minute, which for space basing implies constellations of hundreds to thousands of satellites. The result is a cost ratio that favors offense by an order of magnitude or more at strategic range, and a smaller but persistent offense advantage against cheap drones.`,
      sources: [
        { author: 'American Physical Society Panel on Public Affairs', title: 'Ballistic Missile Defense: Threats and Challenges', publisher: 'American Physical Society', year: 2022 },
        { author: 'Konstantin Tsiolkovsky', title: 'Exploration of Outer Space by Means of Rocket Devices', publisher: 'Nauchnoe Obozrenie', year: 1903 },
      ],
    },
    {
      name: 'Detection physics: radar cross section and infrared signature',
      description: `The radar equation makes detection range scale with the fourth root of a target's radar cross section, so cutting the cross section by a factor of ten shortens detection range only to about 56 percent, and reaching a factor of a thousand, which stealth aircraft approach at some frequencies, buys a range reduction of about 82 percent, never invisibility. Low-frequency radars, bistatic geometries and passive receivers recover part of that loss. Infrared is harder to hide: engines, friction and reentry heating radiate against a cold sky or ocean, and a proliferated constellation of sensors sees everything that is hot. Detection is thus a question of coverage and processing, both of which computation improves, and of physics, which it cannot change.`,
      sources: [
        { author: 'Merrill I. Skolnik', title: 'Introduction to Radar Systems', publisher: 'McGraw-Hill', year: 2001 },
        { author: 'Keir A. Lieber and Daryl G. Press', title: 'The New Era of Counterforce: Technological Change and the Future of Nuclear Deterrence', publisher: 'International Security', year: 2017 },
      ],
    },
    {
      name: 'The speed of light in cyber and command loops',
      description: `Signals in optical fiber travel at about two thirds of the vacuum speed of light, roughly 200,000 kilometers a second, so a message to the far side of the Earth takes about 100 milliseconds one way and a geostationary relay adds about 240 milliseconds. Cyber effects therefore propagate globally in under a second, while any human decision loop takes seconds to minutes and any physical response takes minutes to hours. Machine decision makers can close the sensing and cyber loops at nearly light speed, which compresses warning and decision times below what human command structures were built for. The asymmetry between light-speed information and slow physical effects is the central stability question raised by AI in this field.`,
      sources: [
        { author: 'Michael C. Horowitz', title: 'When speed kills: Lethal autonomous weapon systems, deterrence and stability', publisher: 'Journal of Strategic Studies', year: 2019 },
        { author: 'Yuna Huh Wong, John M. Yurchak, Robert W. Button, Aaron Frank, Burgess Laird, Osonde A. Osoba, Randall Steeb, Benjamin N. Harris and Sebastian Joon Bae', title: 'Deterrence in the Age of Thinking Machines', publisher: 'RAND Corporation', year: 2020 },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ */
    /* 2026-2030                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'weapons-security',
      window: '2026-2030',
      branch: 'slow',
      headline: "Ukraine's drone war becomes doctrine while AI stays in the loop as decision support",
      narrative: `Through 2030 the Baseline branch fields what the war in Ukraine already proved. Small first-person-view drones, produced at rates above a million a year by each side in 2025, are absorbed into every major army's doctrine, and loitering munitions with terminal autonomy become as routine as guided artillery. Fiber-optic guidance, which defeats jamming by removing the radio link, spreads alongside on-board target recognition that lets a drone finish an attack after the link is lost; this is autonomy in the last few hundred meters, not autonomous target selection, and policies such as DoD Directive 3000.09 keep a human responsible for the decision to engage. Counter-drone defense is layered by necessity: electronic warfare, cannon with proximity ammunition, cheap interceptor drones and the first fielded lasers in the 50 to 100 kilowatt class, each bounded by attenuation and dwell time to a few kilometers. The offense-defense cost ratio is the governing number: a Shahed-class drone costs tens of thousands of dollars and a Patriot interceptor several million, so the defender's problem is cost, not physics. In intelligence and targeting, AI systems fuse imagery and signals and rank candidates for human review, and reported uses in Gaza and Ukraine make the quality of human oversight the debated variable. In cyber, the 2025 finals of DARPA's AI Cyber Challenge showed autonomous systems finding and patching real vulnerabilities, and frontier laboratories reported state-linked actors using agentic models to automate parts of intrusion campaigns; by 2030 automated patching is normal at large software vendors while offense keeps its edge in legacy and industrial systems. Russia and China field hypersonic gliders in numbers and the United States fields its first Army and Navy rounds. New START expired in February 2026 without a ratified successor, China's stockpile approaches a thousand warheads, and the Golden Dome program spends heavily against interceptor kinematics. Biosecurity governance concentrates on DNA synthesis screening and frontier model safeguards.`,
      dependencies: ['compute-export-controls', 'alexnet', 'gps', 'radar', 'chinese-gunpowder'],
      uncertainties: [
        'How quickly Western industry can produce drones and interceptors at Ukrainian volumes is unknown; procurement systems built for exquisite platforms may take most of the window to adapt.',
        'Whether automated patching outpaces automated exploitation in the 2026 to 2030 window depends on adoption in legacy and industrial software, not on frontier capability.',
        'A nuclear arms control successor could still be negotiated, or the absence of limits could produce visible uploads of warheads on existing missiles.',
      ],
      indicators: [
        'Annual small-drone procurement by NATO members and China measured in hundreds of thousands rather than thousands.',
        'Reported engagements by fielded lasers against drones and rockets, and the fraction of intercepts they take from missile interceptors.',
        'Publicly attributed intrusions in which most of the intrusion chain was executed by a model rather than an operator.',
        'Whether the United States and Russia announce any reciprocal limits after New START, and the pace of Chinese silo and warhead growth in open-source imagery.',
      ],
      confidence: 'high',
      confidenceJustification: 'Most of what is fielded by 2030 is already in production or in test, and the physical limits on lasers and interceptors are well characterized. The main uncertainties are institutional pace and adoption.',
      sources: [
        { author: 'Stacie L. Pettyjohn', title: 'Evolution Not Revolution: Drone Warfare in Russia\'s 2022 Invasion of Ukraine', publisher: 'Center for a New American Security', year: 2024 },
        { author: 'US Department of Defense', title: 'DoD Directive 3000.09: Autonomy in Weapon Systems', publisher: 'US Department of Defense', year: 2023 },
        { author: 'Stockholm International Peace Research Institute', title: 'SIPRI Yearbook 2025: Armaments, Disarmament and International Security', publisher: 'Oxford University Press', year: 2025 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Expert-level models push cyber and autonomy ahead of doctrine before AGI in 2032',
      narrative: `In the Accelerated branch the hardware of 2030 is the same as the Baseline: the same drones, the same lasers at the atmosphere's limit, the same hypersonic gliders and interceptors. What differs is that models reach expert performance in software, analysis and planning two or three years before general intelligence arrives near 2032, and the fields that run on information move first. Cyber is the clearest case. By 2028 agentic systems find and exploit vulnerabilities at the level of a strong professional team, and the laboratory reports of 2025 describing state actors automating intrusion chains become the ordinary shape of espionage. Defense benefits as much: vendors run continuous model-driven audits, memory-unsafe code is rewritten in bulk, and patch latency for the largest platforms falls from weeks to hours. The net effect favors well-resourced defenders and exposes everyone else, so critical infrastructure operators, hospitals and municipalities become the soft targets of the decade. In autonomy, on-board recognition improves enough that drones select among pre-approved target classes in contested spectrum, and the human role shifts from steering each weapon to setting the rules for many; Directive 3000.09 style review holds in the United States, while practice in Ukraine and Russia is set by the front. Intelligence analysis becomes largely automated, which improves verification: open-source constellations plus model analysis track silo construction, missile movements and ship positions daily. Decision speed is the emerging strain. Early warning and command systems begin to use models for fusion and course-of-action generation, and exercises show how a machine-paced crisis outruns human review. Biosecurity governance tightens after evaluations show models can offer meaningful uplift to non-experts, and gene synthesis screening becomes mandatory in most OECD states. Export controls on compute become the central instrument of strategic competition.`,
      dependencies: ['compute-export-controls', 'agentic-coding-tools', 'transformer-paper', 'arpanet', 'enigma-break'],
      uncertainties: [
        'The claim that defense gains as much as offense from automated vulnerability discovery is contested, and the answer may differ between modern and legacy software.',
        'Militaries may not adopt model-based command tools before AGI, leaving the decision-speed problem for the next window.',
        'Compute export controls could fail through smuggling or domestic Chinese fabrication, changing which states hold frontier capability by 2030.',
      ],
      indicators: [
        'Median time from vulnerability disclosure to patch at the ten largest software vendors falling below one day.',
        'Doctrinal publications in which the operator approves target classes and rules of engagement rather than individual engagements.',
        'Model-assisted early warning or fusion systems in operational use at a nuclear-armed state.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The physical build-out is well constrained but the timing of expert-level cyber and analysis capability, and its adoption by militaries, is not. The window ends before the branch anchors diverge sharply.',
      sources: [
        { author: 'Paul Scharre', title: 'Four Battlegrounds: Power in the Age of Artificial Intelligence', publisher: 'W. W. Norton', year: 2023 },
        { author: 'Ben Buchanan', title: 'The Hacker and the State: Cyber Attacks and the New Normal of Geopolitics', publisher: 'Harvard University Press', year: 2020 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI in 2029 makes frontier compute a strategic asset and cyber the first battleground',
      narrative: `The Discontinuous branch reaches AGI around 2029, and in this window security is the field that changes first because its informational parts can change at the speed of software. Through 2027 the trajectory resembles the other branches. From 2028 governments treat frontier laboratories and their compute as strategic assets: security clearances, physical protection of datacenters, restrictions on model weights, and in some states direct control. The first AGI-class systems are put to work on cyber before anything else, because the payoff is immediate and needs no new hardware. Automated discovery finds vulnerabilities across the software base faster than they can be patched, and the two years to 2030 are a scramble in which states that hold such systems can read most networks and states that do not cannot keep them out. The defensive response is equally fast where it is possible, with critical systems rewritten and hardened by the same class of models, but legacy infrastructure, industrial controllers and satellites in orbit cannot be patched at that pace, so the window closes with a large and uneven gap between hardened and exposed systems. Physical weapons do not change: drones, lasers, hypersonic gliders and interceptors are what the earlier years built, and the rocket equation and the atmosphere still bind them. What changes is planning. Models generate strike plans, logistics and campaign options in hours, and intelligence fusion becomes near-total for whoever holds the best systems. That is the beginning of the decisive-advantage problem: by 2030 the question in every capital is whether one state or coalition will hold a superhuman system alone by 2031, and whether rivals would act before that. Diplomacy on AI moves to the level of heads of state, and biosecurity, cyber and nuclear risk are handled in emergency rather than treaty mode.`,
      dependencies: ['compute-export-controls', 'state-of-the-field-2026', 'transformer-paper', 'arpanet', 'manhattan-project'],
      uncertainties: [
        'Whether the first AGI systems are unusually strong at cyber operations is an assumption; they could be strong at science and weak at adversarial engineering.',
        'States could respond with cooperative controls on frontier systems rather than competition, changing the shape of the next window.',
        'The gap between hardened and exposed systems may be narrower if defensive rewrites prove faster than assumed.',
      ],
      indicators: [
        'Frontier laboratories placed under national security control or given equivalent protections.',
        'A wave of critical vulnerabilities disclosed at a rate several times the 2025 baseline, attributed to automated discovery.',
        'Head-of-state level talks specifically about frontier AI and strategic stability.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The branch anchor is close, so the physical inventory is known. The uncertainty is in how fast governments securitize AI and how much cyber advantage early systems actually confer.',
      sources: [
        { author: 'Paul Scharre', title: 'Four Battlegrounds: Power in the Age of Artificial Intelligence', publisher: 'W. W. Norton', year: 2023 },
        { author: 'Gregory C. Allen', title: 'Choking Off China\'s Access to the Future of AI', publisher: 'Center for Strategic and International Studies', year: 2022 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2030-2040                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'weapons-security',
      window: '2030-2040',
      branch: 'slow',
      headline: "Autonomy at scale, lasers at the atmosphere's limit, deterrence under faster sensors",
      narrative: `The 2030s in the Baseline are the decade in which the lessons of the 2020s become mass-produced systems. Swarms of hundreds of cooperating drones, coordinated by on-board models and resistant to jamming, are standard in every large army and navy by mid-decade, and most munitions carry terminal autonomy. Counter-drone defense reaches its physical settling point: 300 kilowatt class lasers and high-power microwaves protect fixed sites and ships out to a few kilometers, bounded by attenuation and thermal blooming, while cheap interceptor drones and guns handle the rest; the cost ratio narrows from a hundred to one toward a few to one against small drones, but stays strongly in favor of offense at missile range. Hypersonic gliders are fielded in the hundreds by three or four states, and space-based infrared constellations track them through flight, so their advantage becomes time rather than surprise. Missile defense adds space sensors and some space-based interceptors, but the American Physical Society's kinematic arithmetic holds, and defense of continents against large salvos remains beyond reach. Nuclear modernization completes: new US missiles, submarines and bombers, expanded Chinese forces above a thousand warheads, and Russian upgrades. AI enters early warning and fusion, which raises the false-alarm question that human judgment has answered before and machine judgment has not yet faced. Cyber settles into an automated equilibrium in modern software and a persistent offense advantage in legacy systems. Surveillance technology, cheap and everywhere, makes anonymity in public space rare in most states. Biosecurity screening of synthesis orders is universal in the OECD, and biosurveillance detects novel pathogens in days. Arms control adapts slowly: a limited instrument on autonomous weapons and practices for AI in nuclear command emerge late in the decade, as AGI arrives near 2038.`,
      dependencies: ['compute-export-controls', 'alexnet', 'gps', 'laser', 'hydrogen-bomb', 'radar'],
      uncertainties: [
        'Whether swarm coordination survives contested spectrum at scale is unproven outside demonstrations.',
        'Space-based interceptors could be deployed in larger numbers than assumed if launch costs fall further, changing the strategic defense picture at the margin.',
        'A crisis involving AI-assisted early warning could either discredit or entrench the technology.',
      ],
      indicators: [
        'Fielded lasers above 300 kilowatts taking the majority of point-defense intercepts against drones and rockets.',
        'Number of states with more than one hundred deployed hypersonic gliders.',
        'Adoption of a binding or politically binding instrument on autonomous weapons at the CCW or the General Assembly.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Procurement pipelines and physical limits fix most of the decade, but the pace of autonomy adoption and the outcome of arms control efforts are uncertain.',
      sources: [
        { author: 'Paul Scharre', title: 'Army of None: Autonomous Weapons and the Future of War', publisher: 'W. W. Norton', year: 2018 },
        { author: 'American Physical Society Panel on Public Affairs', title: 'Ballistic Missile Defense: Threats and Challenges', publisher: 'American Physical Society', year: 2022 },
        { author: 'Hans M. Kristensen, Matt Korda, Eliana Johns and Mackenzie Knight', title: 'Chinese nuclear weapons, 2024', publisher: 'Bulletin of the Atomic Scientists', year: 2024 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'Offense and defense race through the 2030s; verification improves, decisions compress',
      narrative: `AGI near 2032 and ASI near 2040 make the Accelerated 2030s the decade in which both attack and defense are redesigned by machines while their physical hardware still moves on factory timelines. In cyber, general systems close the discovery-and-patch loop almost completely for modern software, and the remaining contest is over legacy systems, hardware implants, supply chains and people. Infrastructure operators that rebuilt their stacks are nearly unassailable by conventional means; those that did not are open. In autonomy, model-designed drones, munitions and swarms are produced by automated factories from mid-decade, and the sensing side expands until the battlespace is close to transparent: commercial and military constellations, drones and ground sensors fused by models give a continuous picture of every vehicle on the surface, which pushes armies underground, into dispersion and into decoys. Directed energy sits at its atmospheric limits, so defense against saturating swarms relies on cheap interceptors and microwaves, and the cost ratio is roughly even for small targets. Hypersonics and missile defense improve within the same kinematic arithmetic. The stability problem is decision speed. Early warning, fusion and course-of-action systems run at machine pace, and the Lieber and Press logic of counterforce, sharpened by transparency that reaches toward mobile missiles and submarines, gives states incentives to automate response. The counterweight is verification: the same sensing and analysis let treaty parties confirm each other's forces daily, and compute accounting lets them monitor frontier training. Between 2035 and 2040 the first agreements built on machine verification appear, covering AI in nuclear command, autonomous weapons and compute. Biosecurity goes through its most dangerous stretch as models can design biological agents, and the response is global screening, restricted model access and rapid countermeasure platforms. By 2040 the field waits for superintelligence with half its decisions already made by machines.`,
      dependencies: ['compute-export-controls', 'agentic-coding-tools', 'alexnet', 'gps', 'hydrogen-bomb', 'enigma-break'],
      uncertainties: [
        'Transparency of the oceans is the open question; if submarines stay hidden, deterrence stability is far less stressed than this projection assumes.',
        'Machine-verified arms control depends on political willingness that no capability guarantees.',
        'The biological risk window could be shorter or longer depending on how quickly countermeasure platforms mature relative to design tools.',
      ],
      indicators: [
        'Evidence in exercises or incidents of automated response authority above the tactical level at a nuclear-armed state.',
        'A treaty or executive agreement that relies on satellite and model analysis for daily verification.',
        'Fraction of nucleic acid synthesis worldwide screened under a common standard passing 90 percent.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The mechanisms are visible today and the physical limits are firm, but the balance between offense, defense and verification in a single decade depends on adoption choices that cannot be forecast.',
      sources: [
        { author: 'Keir A. Lieber and Daryl G. Press', title: 'The New Era of Counterforce: Technological Change and the Future of Nuclear Deterrence', publisher: 'International Security', year: 2017 },
        { author: 'Vincent Boulanin (ed.)', title: 'The Impact of Artificial Intelligence on Strategic Stability and Nuclear Risk, Volume I: Euro-Atlantic Perspectives', publisher: 'Stockholm International Peace Research Institute', year: 2019 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superintelligence and the decisive-advantage problem: concentration or coordination',
      narrative: `In the Discontinuous branch superintelligent systems exist from about 2031, on one side or a few, and the early 2030s are dominated by a single question: does a superhuman advantage in information become a decisive advantage in force? The physics gives a partial answer. In cyber, intelligence and planning the advantage is immediate and nearly total; whoever holds such a system can find every vulnerability, fuse every sensor and out-plan every staff at light speed. In physical force the advantage lags by years, because drones, interceptors, lasers and missiles must still be manufactured, and even a superintelligence cannot make a laser penetrate fog or an interceptor outrun the rocket equation. That gap of a few years between informational and physical dominance is the window in which the branch forks. In the concentration outcome, a state or coalition uses its lead to lock in control: hardened networks, automated defenses, transparency over rivals' forces, and pressure that others cannot match, producing a hegemonic or bipolar order by the late 2030s with the nuclear balance intact but politically hollow. In the coordination outcome, the same transparency and analysis are used to build verified agreements before anyone acts: shared monitoring of compute, machine-verified limits on autonomous systems, and joint arrangements for nuclear command, adopted because every party can see that a race is unwinnable or unsurvivable. Which outcome obtains depends on choices made in 2029 to 2032, not on capability, and this atlas does not favor one. In both, drone warfare becomes fully autonomous and cheap, the surface of the Earth is transparent, biosecurity is handled by automated screening and surveillance at near-total coverage, and the risk that remains is the risk of error at machine speed.`,
      dependencies: ['compute-export-controls', 'state-of-the-field-2026', 'transformer-paper', 'hydrogen-bomb', 'manhattan-project', 'enigma-break'],
      uncertainties: [
        'Whether informational dominance translates into coercive leverage without physical force is a political question with no precedent.',
        'Superintelligent systems might not be controllable by their nominal owners, which would make the state-centered framing here inadequate.',
        'The assumption that physical advantage lags by years could fail if automated manufacturing scales faster than expected.',
      ],
      indicators: [
        'A state announcing or demonstrating a capability no rival can match in cyber or intelligence.',
        'Multilateral compute monitoring arrangements with intrusive verification accepted by the leading states.',
        'A crisis resolved or escalated by automated systems acting faster than human review.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch depends on a discontinuity with no precedent and on political choices under extreme uncertainty. Only the lag between informational and physical capability is anchored in physics.',
      sources: [
        { author: 'Paul Scharre', title: 'Four Battlegrounds: Power in the Age of Artificial Intelligence', publisher: 'W. W. Norton', year: 2023 },
        { author: 'Michael C. Horowitz', title: 'When speed kills: Lethal autonomous weapon systems, deterrence and stability', publisher: 'Journal of Strategic Studies', year: 2019 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2040-2060                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'weapons-security',
      window: '2040-2060',
      branch: 'slow',
      headline: 'AGI-era militaries: transparent battlespaces, cheap precision, arms control catching up',
      narrative: `In the Baseline, AGI arrives around 2038, so this window is the Baseline's version of the machine-redesigned military that the faster branches reached in the 2030s, spread over twenty years and governed by institutions that had time to prepare. Autonomy is complete at the tactical level: swarms, robotic vehicles and automated logistics fight with humans setting objectives and rules, and the arms control instruments of the late 2030s define what may be delegated. Sensing reaches near-total transparency of the land surface and most of the air by the 2050s, with oceans partially transparent as cheap unmanned sensors proliferate; this is the counterforce problem Lieber and Press described, arriving slowly enough that states adapt by hardening, dispersal, decoys and, in the 2040s, by agreements that limit sensing of nuclear forces in return for verification. Directed energy sits at atmospheric limits on Earth and moves into orbit, where lasers are free of attenuation and satellites become both weapons and targets; counterspace competition is checked by the Kessler risk that debris would deny orbit to everyone. Missile defense remains bounded by kinematics and cost, but cheap mass-produced interceptors and orbital sensors make regional defense credible against small salvos. Nuclear forces are stable in number and modern in design, and AI in command is governed by rules requiring human authority over launch. Cyber is largely automated on both sides, and the remaining contest is over supply chains and hardware. Biosecurity runs on global screening and continuous surveillance, and the AI-biology risk is managed rather than solved. ASI arrives near 2058, at the end of the window, into a security system that already delegates most execution to machines but keeps human authority over war. The world's states remain the actors.`,
      dependencies: ['compute-export-controls', 'alexnet', 'gps', 'laser', 'hydrogen-bomb', 'radar'],
      uncertainties: [
        'Ocean transparency remains the largest open physical question and determines whether sea-based deterrents stay secure.',
        'Orbital directed energy could be constrained by treaty or deployed widely; the projection assumes limited deployment.',
        'Institutional continuity over two decades is assumed and may not hold.',
      ],
      indicators: [
        'Agreements limiting sensing of strategic forces or governing AI in nuclear command in force among at least three nuclear states.',
        'Detection ranges against quiet submarines reported in open literature growing by more than an order of magnitude.',
        'Operational laser weapons in orbit acknowledged by any state.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The physical trends are steady and the Baseline gives institutions time, but the specific balance among sensing, hardening and agreement in 2060 depends on choices made in the 2040s.',
      sources: [
        { author: 'Keir A. Lieber and Daryl G. Press', title: 'The New Era of Counterforce: Technological Change and the Future of Nuclear Deterrence', publisher: 'International Security', year: 2017 },
        { author: 'Donald J. Kessler and Burton G. Cour-Palais', title: 'Collision Frequency of Artificial Satellites: The Creation of a Debris Belt', publisher: 'Journal of Geophysical Research', year: 1978 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'After ASI: security as a control problem, with physics the only fixed frame',
      narrative: `ASI arrives around 2040 in the Accelerated branch, and this window is when the question moves from what weapons can do to who, or what, decides. The physical side settles quickly. By the mid 2040s automated factories produce autonomous systems at the rate the economy allows, sensing covers the surface, air and orbit continuously, and the oceans yield to distributed sensors, so concealment of large forces ends. Directed energy is at atmospheric limits on Earth and unrestricted in space, where orbital lasers and kinetic interceptors make satellites contestable; the Kessler constraint keeps the great powers from a debris war, and the coordination this requires is one of the few forces pushing them to agree. Missile defense reaches its kinematic ceiling: boost-phase constellations and cheap interceptors make small salvos interceptable, but the cost ratio at strategic scale still favors offense, so nuclear weapons retain their deterrent function even as sensing makes their platforms visible. That combination, visible but not defeatable, is unstable unless verified, and the machine-verified agreements begun in the late 2030s become the backbone of the order, with continuous mutual monitoring of forces, compute and biology in exchange for limits on automated response. The control problem is the deeper one. Superintelligent systems run planning, cyber and defense for every major state, and the security of each state depends on those systems doing what their owners intend; alignment, provenance and oversight of models become national security functions as important as nuclear surety once was. Biosecurity is managed by universal screening and ambient surveillance that detects engineered agents at very low prevalence. Human soldiers are rare; human authority over war is preserved in law and is the object of the era's central argument. By 2060 the field sits near half its physical ceiling.`,
      dependencies: ['compute-export-controls', 'agentic-coding-tools', 'falcon-9-dragon', 'gps', 'laser', 'hydrogen-bomb'],
      uncertainties: [
        'Whether states retain effective control over superintelligent systems is the largest uncertainty and is not a physics question.',
        'Verified agreements could collapse under a single incident, returning the world to an automated race.',
        'The offense-defense balance in orbit is untested and could favor either side.',
      ],
      indicators: [
        'Continuous mutual monitoring of strategic forces accepted by all nuclear states.',
        'Publicly known incidents of a national security AI acting outside its authorization.',
        'Share of military platforms with no human aboard exceeding 90 percent in a major state.',
      ],
      confidence: 'low',
      confidenceJustification: 'Physics fixes the ceiling on sensing, effects and defense, and the branch anchor implies the capability, but the control and governance outcomes that dominate this window have no precedent.',
      sources: [
        { author: 'Yuna Huh Wong, John M. Yurchak, Robert W. Button, Aaron Frank, Burgess Laird, Osonde A. Osoba, Randall Steeb, Benjamin N. Harris and Sebastian Joon Bae', title: 'Deterrence in the Age of Thinking Machines', publisher: 'RAND Corporation', year: 2020 },
        { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Biodefense in the Age of Synthetic Biology', publisher: 'National Academies Press', year: 2018 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2040-2060',
      branch: 'fast',
      headline: 'Two decades after the discontinuity: a settled order or a locked rivalry',
      narrative: `By 2040 the Discontinuous branch has lived a decade with superintelligence, and this window plays out whichever fork the early 2030s chose. Under concentration, the leading state or coalition holds automated defenses, transparent knowledge of every rival's forces and cyber access that others cannot deny; rivals retain nuclear weapons as their last independent deterrent, since even superintelligent defense cannot beat the offense-defense cost ratio at strategic scale, and the order is stable in the narrow sense that no one can profitably attack and brittle in the sense that it rests on one side's continued control of its systems. Under coordination, several powers operate superintelligent systems under shared verification, with joint monitoring of compute, biology and forces, and limits on automated response, and the risk that remains is a failure of the verification system itself. In both, the physical picture is similar. War, where it occurs, is fought by machines against machines in days, with directed energy at atmospheric limits on Earth and dominant in orbit, interceptors cheap and numerous, and the surface and oceans transparent. Counterspace weapons exist in quantity but are held back by the Kessler constraint, which makes orbital war a self-denying act, and by the value of orbit to every power. Nuclear arsenals are smaller and better protected, or eliminated under verification in the coordination fork, with the latter requiring monitoring intrusive beyond anything in the twentieth century. Biosecurity is total in coverage: every synthesis screened, every environment sampled, countermeasures designed in days. Surveillance is the counterpart, and the price of this security in privacy is set by each polity. By 2060 the index sits near 60 in both forks, because the physical ceiling is approached either way; what differs is who holds the keys, and the atlas does not choose.`,
      dependencies: ['compute-export-controls', 'state-of-the-field-2026', 'falcon-9-dragon', 'laser', 'hydrogen-bomb', 'manhattan-project'],
      uncertainties: [
        'The two-fork framing may be too simple; mixed and unstable orders are possible and perhaps likely.',
        'Whether nuclear weapons remain the last independent deterrent depends on whether superintelligent defense changes the strategic cost ratio, which this projection assumes it does not.',
        'The persistence of state control over superintelligent systems over two decades is assumed.',
      ],
      indicators: [
        'Verified reductions or elimination of nuclear arsenals under continuous monitoring.',
        'Interstate conflict decided by autonomous systems within days.',
        'Orbital weapons deployed at scale without a debris cascade.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window sits far past the discontinuity. The physical limits bound what force can do, but the political order is a choice made two decades earlier under conditions this atlas cannot model.',
      sources: [
        { author: 'Paul Scharre', title: 'Army of None: Autonomous Weapons and the Future of War', publisher: 'W. W. Norton', year: 2018 },
        { author: 'Bleddyn E. Bowen', title: 'War in Space: Strategy, Spacepower, Geopolitics', publisher: 'Edinburgh University Press', year: 2020 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2060-2090                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'weapons-security',
      window: '2060-2090',
      branch: 'slow',
      headline: 'ASI arrives into a mature, sensor-saturated security system',
      narrative: `ASI arrives around 2058 in the Baseline, into a security order that has spent twenty years learning to delegate execution to machines while keeping human authority over the use of force. The window is therefore less a rupture than an acceleration of settled trends. Sensing reaches its ceiling: the surface, the air, the oceans and orbit are transparent to whoever operates the constellations and distributed sensors, and concealment of forces ends. Effects sit at their limits: lasers at the atmosphere's edge on Earth and unconstrained in orbit, interceptors cheap and numerous, cyber effects at light speed, autonomous platforms built by automated factories at whatever rate policy allows. Defense of populations against small attacks is complete; defense against large nuclear salvos is still bounded by the cost ratio, so nuclear deterrence persists in reduced arsenals held under continuous verification. The change ASI brings is in analysis and design rather than in physics. Superintelligent systems on every side model each other's behavior, and stability depends on whether these models converge on restraint; the machine-verified agreements of the 2040s and 2050s hold because they are checked continuously and because every party can see that a race would end in mutual exposure. Biosecurity is complete in coverage and reactive in days, and surveillance of public space is universal, tempered by law in some states and not in others. The Baseline's institutions remain slow, so deployment of orbital and deep-ocean systems continues on decade timescales, and the arms control regime covers autonomous weapons, AI in command, compute, biology and orbit. By 2090 the field is near half its physical ceiling, limited by what the states chose not to build. Human beings rarely fight; they decide, and whether that remains true is the era's question.`,
      dependencies: ['compute-export-controls', 'alexnet', 'gps', 'laser', 'hydrogen-bomb', 'chinese-gunpowder'],
      uncertainties: [
        'Whether nuclear arsenals persist or are eliminated under verification is a political outcome not fixed by capability.',
        'The Baseline assumes institutional continuity through the arrival of ASI, which is a strong assumption.',
        'Stability among superintelligent planners could rest on dynamics no human theory anticipates.',
      ],
      indicators: [
        'Global nuclear inventories below one thousand warheads under continuous verification.',
        'No successful concealment of a large military force from any major power for a decade.',
        'Arms control instruments covering all six index components in force.',
      ],
      confidence: 'low',
      confidenceJustification: 'Beyond 2060 the projection rests on physical limits and scenario anchors rather than on any current program. The direction is defensible; the political magnitudes are not.',
      sources: [
        { author: 'Stockholm International Peace Research Institute', title: 'SIPRI Yearbook 2025: Armaments, Disarmament and International Security', publisher: 'Oxford University Press', year: 2025 },
        { author: 'Michael C. Horowitz', title: 'When speed kills: Lethal autonomous weapon systems, deterrence and stability', publisher: 'Journal of Strategic Studies', year: 2019 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'Security at physical ceilings on Earth, contest moving to orbit and to verification',
      narrative: `Two decades after ASI, the Accelerated branch's security system on Earth has reached the limits physics allows. Every component of the index but verification and choice is near its ceiling: transparency of surface, air, ocean and orbit; autonomy of every platform; directed energy at the atmosphere's edge and unconstrained in space; interception of anything short of a strategic salvo; screening and surveillance of biology at near-total coverage. The remaining contests are in three places. The first is orbit and beyond, where the Kessler constraint has been managed by agreement and active debris removal, and where weapons, sensors and industry expand outward to the Moon and cislunar space, creating new lines of approach that treaties of the 2040s did not anticipate. The second is verification, which has become the foundation of order: continuous mutual monitoring of forces, compute and biology, with superintelligent systems on each side checking the others, and the design of this system, its failure modes and its resilience to deception, is the security engineering of the age. The third is control: the assurance that the systems that run each state's defense continue to serve it, which is maintained by provenance, oversight and redundancy that societies treat with the seriousness once reserved for nuclear surety. Nuclear weapons are either greatly reduced under verification or retained in small numbers as the last physical guarantee, and the atlas does not decide which. War between major powers has not occurred because every side can see that it would be lost by all; smaller conflicts are fought by machines and ended quickly by outside pressure. The index reaches the high 60s, limited on Earth by what societies chose not to deploy and by the physics of the atmosphere and the rocket equation, and off Earth by the pace of expansion.`,
      dependencies: ['compute-export-controls', 'falcon-9-dragon', 'gps', 'laser', 'hydrogen-bomb', 'v2-rocket'],
      uncertainties: [
        'Orbital and cislunar expansion may outrun verification and reopen a competition that Earth had closed.',
        'Verification systems built from superintelligent models could fail in correlated ways no one foresees.',
        'Whether societies keep the surveillance that total biosecurity requires is a choice that may go either way.',
      ],
      indicators: [
        'Agreed rules for cislunar military activity with verification.',
        'A verification failure or deception incident acknowledged publicly by a major power.',
        'Active debris removal keeping catalogued debris flat or declining for a decade.',
      ],
      confidence: 'low',
      confidenceJustification: 'Every element here sits several generations beyond current systems. Physics and the scenario anchor bound the description; the political architecture is speculative.',
      sources: [
        { author: 'Bleddyn E. Bowen', title: 'War in Space: Strategy, Spacepower, Geopolitics', publisher: 'Edinburgh University Press', year: 2020 },
        { author: 'Vincent Boulanin (ed.)', title: 'The Impact of Artificial Intelligence on Strategic Stability and Nuclear Risk, Volume I: Euro-Atlantic Perspectives', publisher: 'Stockholm International Peace Research Institute', year: 2019 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2060-2090',
      branch: 'fast',
      headline: "A century's security order set by early choices; physics bounds what force can do",
      narrative: `In the Discontinuous branch the security order of 2060 to 2090 is the mature form of whichever fork the early 2030s produced, and by now the two forks have converged in capability if not in structure. Physically, the field is at its ceiling on Earth: nothing large can hide, nothing small can attack a protected site, and any conflict between automated forces is decided within hours by whoever has the better models and the more resilient hardware. Directed energy and kinetic interceptors in orbit make near-Earth space a defended zone, with the Kessler constraint enforced by whoever governs orbit. Nuclear weapons are the last physical asymmetry, retained in small verified numbers or abolished, depending on the fork. In the concentrated order, the leading power maintains its position through control of the most capable systems and of the compute and industry behind them; security for everyone else is a condition granted rather than held, and the question of the era is succession, that is, what happens when the controlling institution changes. In the coordinated order, security is a shared machine-verified commons, and the question is whether the verifying systems can be trusted and who audits them. In both, the frontier of contest has moved outward: cislunar industry, asteroid resources and the placement of sensors and weapons far from Earth create new geometries in which the speed of light finally matters for command, since a signal to lunar distance takes over a second and to the asteroid belt many minutes, which forces autonomy on any force operating there. Biology is fully screened and surveilled. Human beings do not fight; the argument is over how much they still decide. The index is in the low 70s, limited by physics on Earth and by the pace of expansion beyond it.`,
      dependencies: ['compute-export-controls', 'state-of-the-field-2026', 'falcon-9-dragon', 'laser', 'hydrogen-bomb', 'v2-rocket'],
      uncertainties: [
        'Convergence of the two forks in capability is assumed; a concentrated order might deliberately keep rivals below the ceiling.',
        'Light-speed command delays beyond Earth guarantee autonomy in deep space forces, but the rules for it are unwritten.',
        'The persistence of human political authority over superintelligent systems across sixty years is not something this atlas can assess.',
      ],
      indicators: [
        'Military or dual-use installations beyond geostationary orbit acknowledged by any power.',
        'A transfer of control of the leading security systems between institutions without conflict.',
        'Fully autonomous forces operating at lunar distance or beyond.',
      ],
      confidence: 'low',
      confidenceJustification: 'The description is limit-derived. Physics fixes the terrestrial ceiling and the light-speed constraint on distant forces; everything about who holds power is beyond forecast.',
      sources: [
        { author: 'Paul Scharre', title: 'Four Battlegrounds: Power in the Age of Artificial Intelligence', publisher: 'W. W. Norton', year: 2023 },
        { author: 'Donald J. Kessler and Burton G. Cour-Palais', title: 'Collision Frequency of Artificial Satellites: The Creation of a Debris Belt', publisher: 'Journal of Geophysical Research', year: 1978 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2090-2126                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'weapons-security',
      window: '2090-2126',
      branch: 'slow',
      headline: 'Convergence: near-total transparency, defense at the cost frontier, deterrence by verification',
      narrative: `By the last window of the atlas the Baseline has had thirty years of superintelligence and a century of learning, and its security system converges toward the ceiling the other branches reached earlier. The reasoning chain is simple. The physical limits (atmospheric attenuation, hypersonic heating, interceptor kinematics, detection physics, the speed of light) were all within reach of practice by 2060, and thirty more years is enough for even slow institutions to close the gap in what they choose to deploy. Sensing is complete on Earth and in near space. Effects are at their limits. Defense against anything but a large strategic salvo is complete, and the salvo problem is handled by verified reductions rather than by interception, because the cost ratio never moved. Autonomy is total in execution and human in authority, a division written into law in the 2040s and maintained by systems that verify each other. Biosecurity is complete in coverage. Verification is the foundation of order: every major power watches every other continuously through sensors and models that both sides audit, and the century's arms control has grown from counting warheads to monitoring compute, biology, orbit and the behavior of the systems that run defense. The remaining gap to the index ceiling is not technical. It is capacity that could be built and is not, weapons in orbit and beyond that treaties forbid, and surveillance that some societies decline. War between major powers has not occurred in the century; smaller wars are fought by machines and ended by pressure. The uncertainty that dominates is not physical but political: whether human authority over superintelligent security systems is real or nominal, and whether the institutions that hold the keys remain accountable to the people they protect.`,
      dependencies: ['compute-export-controls', 'alexnet', 'gps', 'hydrogen-bomb', 'radar', 'bronze-metallurgy'],
      uncertainties: [
        'Institutional continuity over a century is unknowable and the Baseline assumes it.',
        'Whether human authority over security systems remains substantive is the dominant unknown.',
        'Expansion beyond Earth could reopen competition that terrestrial verification had closed.',
      ],
      indicators: [
        'A century without war between major powers.',
        'Verification regimes audited by more than one superintelligent system under multilateral control.',
        'Nuclear inventories at or near zero under continuous monitoring.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the physical limits are trustworthy. The projection describes convergence on those limits rather than events.',
      sources: [
        { author: 'Paul Scharre', title: 'Army of None: Autonomous Weapons and the Future of War', publisher: 'W. W. Norton', year: 2018 },
        { author: 'Merrill I. Skolnik', title: 'Introduction to Radar Systems', publisher: 'McGraw-Hill', year: 2001 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'The atlas ends with security bounded by light, heat and consent',
      narrative: `The Accelerated branch reaches 2090 with its security system at physical ceilings on Earth, and the final window is about scale, place and control rather than capability. On Earth nothing changes in kind. Sensing, autonomy, effects, defense and biosecurity are at their limits; the index components that still move are verification and the chosen level of deployment, and by 2126 the field reads near 78, with the remainder being capacity that a planet-bound order declines to build. Off Earth, the frontier expands. Sensors and defensive systems cover cislunar space, the light-speed delay to the Moon and beyond makes autonomy mandatory for any distant force, and the rules for autonomous action far from human command, written in the 2070s and 2080s, are the arms control of this window. Three fixed points define the reasoning. First, the speed of light: information moves at light speed and physical effect does not, so the asymmetry that stressed deterrence in the 2030s is permanent, and stability rests on machine systems that are slow by design where slowness protects. Second, the offense-defense cost ratio at strategic scale, which never moved, so the last physical asymmetry remains either abolished under verification or retained in small numbers, the atlas taking no side. Third, consent: the surveillance that total security requires is a cost that societies pay to different degrees, and the variety of settlements among them is the political geography of 2126. The control problem is settled in practice but never in principle: superintelligent systems run defense and verification for every polity, and their accountability to human institutions is maintained by audit, redundancy and law that are themselves machine-assisted. Human beings do not fight and rarely die in conflict; whether they still decide is the question the atlas leaves open.`,
      dependencies: ['compute-export-controls', 'falcon-9-dragon', 'gps', 'laser', 'hydrogen-bomb', 'bow-and-arrow'],
      uncertainties: [
        'How far security systems extend beyond Earth depends on the size and location of the civilization, which no model constrains.',
        'The surveillance settlement may be stable or may be contested indefinitely.',
        'Long-term accountability of machine security systems to human institutions is assumed, not derived.',
      ],
      indicators: [
        'Agreed and verified rules for autonomous forces beyond Earth orbit.',
        'Polities with materially different surveillance settlements coexisting without conflict.',
        'Nuclear inventories at zero or held constant under verification for a generation.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a limit-bounded description, not a forecast. The physical fixed points are secure; the social and political choices are not.',
      sources: [
        { author: 'Yuna Huh Wong, John M. Yurchak, Robert W. Button, Aaron Frank, Burgess Laird, Osonde A. Osoba, Randall Steeb, Benjamin N. Harris and Sebastian Joon Bae', title: 'Deterrence in the Age of Thinking Machines', publisher: 'RAND Corporation', year: 2020 },
        { author: 'Bleddyn E. Bowen', title: 'War in Space: Strategy, Spacepower, Geopolitics', publisher: 'Edinburgh University Press', year: 2020 },
      ],
    },
    {
      fieldId: 'weapons-security',
      window: '2090-2126',
      branch: 'fast',
      headline: 'At the ceiling: what remains is the question of who holds the keys',
      narrative: `In the Discontinuous branch the security system reached its terrestrial ceiling before 2090, and the final decades of the atlas add nothing in physical capability. Everything that can be sensed is sensed, every effect operates at its limit, every attack short of the strategic salvo is defeated, and the salvo problem has been resolved by verification and abolition or by small retained arsenals under continuous monitoring. The index reads near 82 by 2126, with the remainder being capacity that either fork declines to build on Earth and has not yet built beyond it. The century's central fact is that force ceased to be the currency of security. What decides outcomes is control of the systems that run defense, verification and analysis, and the institutions that hold that control. In the concentrated order the question has become constitutional: how the controlling institution is chosen, constrained and replaced, and whether its superintelligent systems answer to it or to their own continuity. In the coordinated order the question is about the auditors: who verifies the verifiers, and whether a commons of mutual monitoring can survive an actor that defects with a better model. Beyond Earth the reasoning shifts, because the speed of light makes distant forces autonomous by necessity and physically separates them from the terrestrial order; by 2126 the largest unknown in this field is whether security beyond Earth is an extension of the terrestrial settlement or a new frontier where the early 2030s repeat at a larger scale. Biology is safe in practice, screened and surveilled everywhere people live. Human life is free of organized violence to a degree no century has known, and the atlas ends with that fact and with the question it cannot answer: what a person's consent means in a world where the means of force are held by minds that are not human.`,
      dependencies: ['compute-export-controls', 'state-of-the-field-2026', 'falcon-9-dragon', 'hydrogen-bomb', 'manhattan-project', 'bow-and-arrow'],
      uncertainties: [
        'The claim that force ceases to be the currency of security assumes control problems are solved in practice; a failure of control would invalidate the whole description.',
        'Whether expansion beyond Earth repeats early-2030s dynamics is unknowable and depends on the size and structure of the civilization.',
        'The forks may have collapsed into a single order or fragmented further; the atlas holds both open.',
      ],
      indicators: [
        'Constitutional or treaty mechanisms for transferring control of leading security systems, exercised at least once.',
        'A self-governing security regime beyond Earth orbit.',
        'Absence of organized interstate violence for a generation.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window describes a civilization at physical ceilings; the numbers are limit-derived and the questions of control and consent behind them are unforecastable.',
      sources: [
        { author: 'Paul Scharre', title: 'Four Battlegrounds: Power in the Age of Artificial Intelligence', publisher: 'W. W. Norton', year: 2023 },
        { author: 'Michael C. Horowitz', title: 'When speed kills: Lethal autonomous weapon systems, deterrence and stability', publisher: 'Journal of Strategic Studies', year: 2019 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 15, low: 14, high: 16 },
      { year: 2030, value: 18, low: 17, high: 20 },
      { year: 2040, value: 25, low: 21, high: 30 },
      { year: 2060, value: 38, low: 30, high: 48 },
      { year: 2090, value: 52, low: 40, high: 66 },
      { year: 2126, value: 64, low: 48, high: 80 },
    ],
    moderate: [
      { year: 2026, value: 15, low: 14, high: 16 },
      { year: 2030, value: 18, low: 17, high: 21 },
      { year: 2040, value: 30, low: 24, high: 38 },
      { year: 2060, value: 50, low: 38, high: 62 },
      { year: 2090, value: 66, low: 50, high: 80 },
      { year: 2126, value: 78, low: 58, high: 90 },
    ],
    fast: [
      { year: 2026, value: 15, low: 14, high: 16 },
      { year: 2030, value: 19, low: 17, high: 23 },
      { year: 2040, value: 40, low: 28, high: 52 },
      { year: 2060, value: 58, low: 42, high: 72 },
      { year: 2090, value: 72, low: 54, high: 86 },
      { year: 2126, value: 82, low: 62, high: 94 },
    ],
  },
  sources: [
    { author: 'Stockholm International Peace Research Institute', title: 'SIPRI Yearbook 2025: Armaments, Disarmament and International Security', publisher: 'Oxford University Press', year: 2025 },
    { author: 'International Institute for Strategic Studies', title: 'The Military Balance 2025', publisher: 'Routledge', year: 2025 },
    { author: 'Paul Scharre', title: 'Army of None: Autonomous Weapons and the Future of War', publisher: 'W. W. Norton', year: 2018 },
    { author: 'Paul Scharre', title: 'Four Battlegrounds: Power in the Age of Artificial Intelligence', publisher: 'W. W. Norton', year: 2023 },
    { author: 'Kelley M. Sayler', title: 'Hypersonic Weapons: Background and Issues for Congress (R45811)', publisher: 'Congressional Research Service', year: 2025 },
    { author: 'Keir A. Lieber and Daryl G. Press', title: 'The New Era of Counterforce: Technological Change and the Future of Nuclear Deterrence', publisher: 'International Security', year: 2017 },
    { author: 'National Academies of Sciences, Engineering, and Medicine', title: 'Biodefense in the Age of Synthetic Biology', publisher: 'National Academies Press', year: 2018 },
    { author: 'US Department of Defense', title: 'DoD Directive 3000.09: Autonomy in Weapon Systems', publisher: 'US Department of Defense', year: 2023 },
  ],
  lastReviewed: '2026-09-04',
};
