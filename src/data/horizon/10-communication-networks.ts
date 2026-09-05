import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'communication-networks',
  index: 10,
  name: 'Communication and Networks',
  code: 'NETWORKS',
  summary: `Communication is the field in which physical limits sit closest to everyday practice and in which the traffic is changing fastest. In September 2026 about 5.5 billion people use the internet, 5G carries a growing majority of mobile traffic while 6G remains a standards process, and coherent optics running at 800 gigabits to 1.6 terabits per second per wavelength push installed fibre toward the nonlinear Shannon limit, so new capacity increasingly comes from more fibres, more bands and multicore cable rather than from cleverer modulation. Low Earth orbit constellations, led by Starlink with several million subscribers, have made satellite broadband ordinary and begun direct-to-phone service. Submarine cables, about 1.4 million kilometres of them, carry nearly all intercontinental traffic and became objects of geopolitical concern after cuts in the Red Sea and the Baltic. The largest structural change is in who communicates: automated agents and model inference generate a rising share of requests, synthetic media is indistinguishable from recorded media, and provenance standards such as C2PA and post-quantum cryptography are the early responses. Quantum key distribution runs on trusted-node backbones and a few satellites; a quantum internet with working repeaters does not yet exist. The speed of light, fibre nonlinearity, atmospheric absorption and energy per bit set the ceilings.`,
  indexDefinition: `The index measures how far human and machine communication has moved toward its plausible physical ceiling, blending six components: delivered capacity per user relative to the Shannon and nonlinear fibre limits of installed plant, latency relative to the speed-of-light floor, energy per bit relative to practical device floors (Landauer's limit lies far below all of them), coverage of people and places including beyond Earth, the reach of quantum networks bounded by no-cloning and the Holevo bound, and the verifiability of the information environment. A score of 100 means every person and machine on Earth and across the inner Solar System served near channel limits at light-speed latency, with universal provenance and a global quantum internet. September 2026 sits at 25.`,
  physicalLimits: [
    {
      name: 'Shannon capacity and the nonlinear Shannon limit of optical fibre',
      description: `Shannon proved in 1948 that a channel of bandwidth B with signal-to-noise ratio S/N can carry at most B log2(1 + S/N) bits per second without error, and no coding scheme can exceed that figure. In optical fibre the bound is tighter than the linear formula suggests: raising launch power to improve the signal-to-noise ratio also raises the Kerr nonlinearity, which distorts the signal, so capacity per polarization and spatial mode peaks at an optimum power and then falls. Essiambre and colleagues estimated this nonlinear Shannon limit at on the order of 10 bits per second per hertz for links of several hundred kilometres, falling with distance, and commercial systems in 2026 operate within about a factor of two of it. Further growth requires more bands, more fibres or more spatial modes, not better modulation.`,
      sources: [
        { author: 'Claude E. Shannon', title: 'A Mathematical Theory of Communication', publisher: 'Bell System Technical Journal', year: 1948, url: 'https://doi.org/10.1002/j.1538-7305.1948.tb01338.x' },
        { author: 'Rene-Jean Essiambre, Gerhard Kramer, Peter J. Winzer, Gerard J. Foschini and Bernhard Goebel', title: 'Capacity Limits of Optical Fiber Networks', publisher: 'Journal of Lightwave Technology', year: 2010, url: 'https://doi.org/10.1109/JLT.2009.2039464' },
      ],
    },
    {
      name: 'Spectrum scarcity and atmospheric absorption',
      description: `Radio spectrum below about 6 gigahertz propagates through walls and over kilometres but totals only a few gigahertz shared among every user, which is why cellular capacity has grown mainly by reusing frequencies in smaller cells rather than by finding new spectrum. Above 30 gigahertz bandwidth is plentiful but physics intervenes: free-space path loss for a fixed antenna size rises with the square of frequency, oxygen absorbs about 15 decibels per kilometre near 60 gigahertz, water vapour absorbs strongly near 183 gigahertz and across much of the terahertz range, and rain and foliage add losses that grow with frequency. Terahertz links therefore serve tens to hundreds of metres, not cities. Every wide-area wireless projection in this field lives below about 30 gigahertz; the higher bands serve short hops and backhaul.`,
      sources: [
        { author: 'International Telecommunication Union', title: 'Recommendation ITU-R P.676-13: Attenuation by atmospheric gases and related effects', publisher: 'ITU-R', year: 2022 },
        { author: 'Theodore S. Rappaport et al.', title: 'Wireless Communications and Applications Above 100 GHz: Opportunities and Challenges for 6G and Beyond', publisher: 'IEEE Access', year: 2019 },
      ],
    },
    {
      name: 'Speed of light latency',
      description: `No signal travels faster than light in vacuum, 299,792 kilometres per second. The antipode of any point on Earth is about 20,000 kilometres away along a great circle, so the minimum round trip is about 133 milliseconds in vacuum or free space, and about 200 milliseconds in silica fibre, whose refractive index near 1.47 slows light to about 204,000 kilometres per second. Hollow core fibre, which guides light in air, recovers most of that difference, and real internet paths add routing detours and queueing on top of both figures. Beyond Earth the floor becomes minutes and hours: about 1.3 seconds one way to the Moon, 3 to 22 minutes to Mars depending on orbital position, and over 4 hours to Neptune. Interactive protocols fail at these delays, which is why interplanetary networking uses store-and-forward, delay-tolerant architectures.`,
      sources: [
        { author: 'Ilker Nadi Bozkurt et al.', title: 'Why Is the Internet so Slow?!', publisher: 'Passive and Active Measurement Conference', year: 2017 },
        { author: 'Vinton Cerf et al.', title: 'RFC 4838: Delay-Tolerant Networking Architecture', publisher: 'Internet Engineering Task Force', year: 2007, url: 'https://www.rfc-editor.org/rfc/rfc4838' },
      ],
    },
    {
      name: 'Energy per bit and the Landauer floor',
      description: `Landauer showed in 1961 that erasing one bit of information must dissipate at least kT ln 2 of heat, about 2.9 times 10 to the minus 21 joules at room temperature. Communication does not strictly need to erase bits and could in principle approach that floor, but practical systems are nowhere near it. An 800 gigabit per second pluggable optical transceiver uses on the order of 10 to 20 picojoules per bit, whole datacenter fabrics run near a nanojoule per bit, and a mobile network measured end to end (radio sites, backhaul and core) used on the order of 0.1 kilowatt hours per gigabyte around 2020, roughly 40 microjoules per bit. These figures sit between ten to the ninth and ten to the sixteenth times the Landauer value. Practical floors are set by laser thresholds, detector sensitivity, amplifier noise and silicon switching energy, and they, not Landauer, bound the projections.`,
      sources: [
        { author: 'Rolf Landauer', title: 'Irreversibility and Heat Generation in the Computing Process', publisher: 'IBM Journal of Research and Development', year: 1961 },
        { author: 'International Energy Agency', title: 'Data Centres and Data Transmission Networks', publisher: 'IEA', year: 2023 },
      ],
    },
    {
      name: 'No-cloning theorem and the Holevo bound',
      description: `A quantum state cannot be copied, as Wootters and Zurek showed in 1982, so a quantum signal cannot be amplified the way classical optical signals are every 80 kilometres or so. Photon loss in fibre therefore limits direct quantum key distribution to a few hundred kilometres, and extending it requires quantum repeaters built from entanglement swapping and quantum memories, proposed by Briegel and colleagues in 1998 and still at the laboratory stage in 2026. Holevo proved in 1973 that n qubits can convey at most n classical bits, so quantum links do not carry more classical data than classical ones. Their value is security guaranteed by physics, distributed entanglement for quantum computing and sensing, and precise timing. Both results bound every quantum network projection in this field.`,
      sources: [
        { author: 'William K. Wootters and Wojciech H. Zurek', title: 'A single quantum cannot be cloned', publisher: 'Nature', year: 1982 },
        { author: 'Alexander S. Holevo', title: 'Bounds for the quantity of information transmitted by a quantum communication channel', publisher: 'Problems of Information Transmission', year: 1973 },
        { author: 'Hans-J. Briegel, Wolfgang Dur, J. Ignacio Cirac and Peter Zoller', title: 'Quantum Repeaters: The Role of Imperfect Local Operations in Quantum Communication', publisher: 'Physical Review Letters', year: 1998 },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ */
    /* 2026-2030                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'communication-networks',
      window: '2026-2030',
      branch: 'slow',
      headline: '5G Advanced, LEO broadband and rising agent traffic on networks built for video',
      narrative: `Through 2030 the Baseline network evolves on the cycles that were already set in 2024 and 2025. Mobile operators deploy 5G Advanced (3GPP Releases 18 and 19) on existing sites, and 5G becomes the majority of mobile subscriptions worldwide before 2030; the Ericsson Mobility Report projects on the order of six billion 5G subscriptions by then. 6G remains a standards process: the ITU-R IMT-2030 framework sets the targets, 3GPP starts specification work in Releases 20 and 21, and no commercial 6G network carries traffic in this window. In fixed networks, 800 gigabit and 1.6 terabit per second coherent transceivers become routine on long-haul routes, and operators light additional bands in installed fibre because C-band spectral efficiency is within about a factor of two of the nonlinear Shannon limit described by Essiambre and colleagues. New capacity comes from more fibre pairs and from multicore fibre in submarine systems rather than from cleverer modulation. Low Earth orbit broadband matures: Starlink, which reported more than five million subscribers in 2025, is joined by Amazon's Kuiper system and by Chinese constellations, and direct-to-device satellite service grows from text messaging, which launched commercially in the United States in 2025, toward low-rate data on unmodified phones. The traffic mix changes more than the pipes do. Automated agents, model inference calls and machine retrieval rise from a large minority of web requests toward a plurality in some measurements, while human video still dominates bytes. Subsea cable incidents in the Baltic, the Red Sea and the Taiwan Strait push governments to fund repair ships and redundant routes. Content provenance under C2PA ships in more cameras and platforms, and the EU AI Act's transparency duties take effect in August 2026, but coverage of synthetic media is partial and credentials are easily stripped. Quantum key distribution stays a niche for governments and banks; post-quantum cryptography from NIST's 2024 standards is the mainstream response to the quantum threat.`,
      dependencies: ['state-of-the-field-2026', 'falcon-9-dragon', 'iphone', 'wifi', 'tcp-ip', 'fiber-optics'],
      uncertainties: [
        'Direct-to-device satellite data rates depend on spectrum sharing agreements with terrestrial operators and could stay at messaging level through 2030.',
        'The share of web traffic generated by agents is measured inconsistently across providers and may be over or under stated by a factor of two.',
        'Trade restrictions on network equipment could slow 5G Advanced and fibre roll-out in several large markets.',
      ],
      indicators: [
        'Whether 5G subscriptions pass half of all mobile subscriptions before 2029 in the Ericsson Mobility Report.',
        'Announced submarine cable systems with more than 16 fibre pairs or multicore fibre entering service.',
        'The share of major platforms shipping C2PA credentials by default on captured and generated media.',
        'Direct-to-device satellite services offering data above one megabit per second to unmodified phones.',
      ],
      confidence: 'high',
      confidenceJustification: 'Most 2030 outcomes are fixed by standards already frozen, constellations already launching and cables already contracted. The main open variable is the composition of traffic, which affects how networks are run rather than what is built.',
      sources: [
        { author: 'Ericsson', title: 'Ericsson Mobility Report, June 2025', publisher: 'Ericsson', year: 2025 },
        { author: 'International Telecommunication Union', title: 'Recommendation ITU-R M.2160-0: Framework and overall objectives of the future development of IMT for 2030 and beyond', publisher: 'ITU-R', year: 2023 },
        { author: 'Rene-Jean Essiambre, Gerhard Kramer, Peter J. Winzer, Gerard J. Foschini and Bernhard Goebel', title: 'Capacity Limits of Optical Fiber Networks', publisher: 'Journal of Lightwave Technology', year: 2010, url: 'https://doi.org/10.1109/JLT.2009.2039464' },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Agent traffic arrives early and networks are retuned for machine principals',
      narrative: `In the Accelerated branch the hardware installed by 2030 is nearly identical to the Baseline: the same 5G Advanced upgrades, the same 1.6 terabit coherent transceivers, the same constellations limited by launch cadence. What differs is who uses the network and how it is run. Models capable of long multi-step work spread from 2027, and by 2030 requests generated by software agents (retrieval, tool calls, agent-to-agent negotiation, continuous monitoring) exceed human-initiated requests on most large platforms, even though video from humans still dominates bytes. Operators respond by retuning rather than rebuilding: traffic engineering, radio scheduling and fault management move to learned controllers, and a large share of network operations centre work is automated by the end of the window. Hyperscalers, whose training campuses have grown to several gigawatts, become the largest buyers of long-haul fibre and new submarine capacity, and they deploy hollow core fibre on latency-sensitive routes between campuses because light in air travels nearly 50 percent faster than in silica glass. Protocol work accelerates: the IETF and industry groups draft identity, authorization and payment conventions for agents acting on behalf of people, and content provenance moves from optional to default on the largest platforms as synthetic media becomes the majority of new images and a growing share of text. Real-time speech translation in earbuds and calls is ordinary by 2028 and quietly changes who can work with whom. AI-assisted design shows up in photonics first, where inverse-designed components and co-packaged optics cut the energy per bit inside datacenters by perhaps half. None of this alters the physical build-out: fibre still takes years to trench and satellites years to launch. By late 2030, with AGI about two years away, networks are being redesigned for machine principals while their pipes remain the ones planned in 2024.`,
      dependencies: ['agentic-coding-tools', 'hyperscale-ai-datacenters', 'chatgpt', 'transformer-paper', 'fiber-optics', 'shannon-information-theory'],
      uncertainties: [
        'Agent identity and authorization standards could fragment across vendors, delaying the shift to machine principals by several years.',
        'Hollow core fibre manufacturing volume and splice reliability are unproven at national scale.',
        'Platforms may resist provenance by default because it reduces engagement or exposes their own generated content.',
      ],
      indicators: [
        'Agent-originated requests exceeding human requests in the traffic reports of at least two major content delivery networks.',
        'Hollow core fibre deployed on more than 1,000 route kilometres by a hyperscaler or carrier.',
        'An IETF standards-track document for agent authorization or identity reaching last call.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The physical network is well constrained by projects already under way, but the timing of agent traffic dominance and the maturity of agent protocols depend on model capability gains that the branch anchor implies without dating precisely.',
      sources: [
        { author: 'Imperva', title: '2024 Imperva Bad Bot Report', publisher: 'Imperva (Thales)', year: 2024 },
        { author: 'Francesco Poletti', title: 'Nested antiresonant nodeless hollow core fiber', publisher: 'Optics Express', year: 2014 },
        { author: 'Coalition for Content Provenance and Authenticity', title: 'C2PA Technical Specification, version 2.1', publisher: 'C2PA', year: 2024 },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI in 2029: datacenter interconnect and provenance outrank consumer access',
      narrative: `The Discontinuous branch reaches AGI around 2029, and in this window the network sector feels it in two places: the links between compute campuses and the information environment. Frontier developers plan training across several sites because no single grid connection can supply ten gigawatts, so they buy or build dedicated fibre routes carrying petabits per second between regions, using every band of installed fibre plus new multicore cable. Latency binds them: light in silica fibre covers about 200 kilometres per millisecond, so campuses more than a few hundred kilometres apart cannot train synchronously, and hollow core fibre, which recovers most of the vacuum speed, is laid on the routes that matter. Consumer access barely changes: 5G Advanced rolls out on schedule, 6G is not yet standardized, and LEO constellations grow only as fast as rockets fly, so the ordinary household connection of 2030 looks like the Baseline. The information environment changes faster. By 2029 synthetic text, audio and video are indistinguishable from recorded media at any price point, and the response is structural rather than forensic: signed provenance from capture devices, cryptographic proof of personhood for accounts, and channels that admit only verified humans or verified agents. Agent traffic becomes the majority of requests on major platforms by 2030, and early AGI-class systems begin drafting protocol specifications, network designs and spectrum plans faster than standards bodies can review them, which raises the question of whether those bodies remain on the critical path. Governments treat submarine cables, landing stations and satellite ground segments as strategic infrastructure, and controls on network equipment tighten. Post-quantum cryptography is deployed urgently, because AGI-assisted cryptanalysis of classical schemes is a live concern even before large quantum computers exist. The speed of light, fibre trenching and launch cadence remain the binding clocks.`,
      dependencies: ['state-of-the-field-2026', 'hyperscale-ai-datacenters', 'agentic-coding-tools', 'transformer-paper', 'fiber-optics', 'shannon-information-theory'],
      uncertainties: [
        'Multi-site synchronous training may be avoided by algorithmic changes, removing the need for petabit interconnect between regions.',
        'Proof-of-personhood systems raise privacy objections and may be blocked in some jurisdictions.',
        'Whether AGI-class systems are trusted to draft standards depends on institutional choices that cannot be forecast from capability alone.',
      ],
      indicators: [
        'Dedicated inter-campus fibre systems above one petabit per second announced by a frontier developer.',
        'A major platform requiring verified provenance or proof of personhood for all new accounts.',
        'Post-quantum key exchange used in more than half of measured TLS connections.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The physical response is constrained by known lead times and the branch anchor is close, so the shape of the window is fairly clear. The uncertainty is in how quickly institutions adopt structural authentication.',
      sources: [
        { author: 'Sumanth Dathathri et al.', title: 'Scalable watermarking for identifying large language model outputs', publisher: 'Nature', year: 2024 },
        { author: 'National Institute of Standards and Technology', title: 'FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard', publisher: 'NIST', year: 2024 },
        { author: 'Ilker Nadi Bozkurt et al.', title: 'Why Is the Internet so Slow?!', publisher: 'Passive and Active Measurement Conference', year: 2017 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2030-2040                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'communication-networks',
      window: '2030-2040',
      branch: 'slow',
      headline: '6G, multicore cables and a machine-majority internet on standards timetables',
      narrative: `The Baseline's 2030s are a decade of standards cycles landing on schedule. 6G launches commercially between 2030 and 2032 on 3GPP Release 21, mainly in the 7 to 15 gigahertz range and the existing mid bands; sub-terahertz links above 100 gigahertz serve fixed wireless and short indoor hops, because oxygen and water vapour absorption, together with free-space loss rising with the square of frequency, keep them within a few hundred metres. Integrated sensing, cell-free massive MIMO and native support for satellite access are the main new capabilities. Fixed networks get past the nonlinear Shannon limit of single-mode fibre in the only way physics allows, by adding spatial paths: submarine cables with 16 to 24 fibre pairs and multicore fibre become standard, and total transoceanic capacity grows several fold. Hollow core fibre spreads from finance and datacenter routes into national backbones. Low Earth orbit constellations reach tens of thousands of satellites, with laser crosslinks forming a second global backbone; direct-to-device service reaches broadband rates on ordinary phones, and by 2040 almost every inhabited place has usable connectivity, closing the gap that left about a third of humanity offline in 2024. Traffic composition shifts decisively: agent requests exceed human requests before 2035, and bandwidth to people plateaus as models render content locally from compact descriptions rather than streaming it. Quantum networks grow from metropolitan testbeds into the first repeater-based links over several hundred kilometres late in the decade, mostly for government key distribution; post-quantum cryptography protects everything else. Provenance credentials cover most media on major platforms, but the open web remains largely unverifiable. Speech neuroprostheses reach a few thousand patients at conversational rates. Cislunar networking uses delay-tolerant protocols routinely. AGI arrives near 2038, too late to change what this decade built.`,
      dependencies: ['state-of-the-field-2026', 'falcon-9-booster-landing', 'iphone', 'world-wide-web', 'fiber-optics', 'marconi-wireless'],
      uncertainties: [
        '6G may launch with few new capabilities beyond 5G Advanced if operators cannot justify the capital, as happened with parts of the 5G cycle.',
        'Quantum repeater demonstrations could slip into the 2040s if memory coherence times and photon conversion efficiency improve slowly.',
        'The share of traffic that is machine-generated depends on agent economics that are not yet settled.',
        'Constellation growth could be capped by debris and spectrum coordination well below the numbers filed with regulators.',
      ],
      indicators: [
        'Commercial 6G service in at least three countries by 2033.',
        'Multicore fibre in a transoceanic cable carrying commercial traffic.',
        'A quantum repeater link exceeding 500 kilometres with entanglement rates useful for key distribution.',
        'ITU reports of internet use above 90 percent of the world population.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Standards timetables and fibre physics are well understood, but the pace of constellation growth, quantum repeaters and agent traffic each have wide ranges within the window.',
      sources: [
        { author: 'International Telecommunication Union', title: 'Recommendation ITU-R M.2160-0: Framework and overall objectives of the future development of IMT for 2030 and beyond', publisher: 'ITU-R', year: 2023 },
        { author: 'D. J. Richardson, J. M. Fini and L. E. Nelson', title: 'Space-division multiplexing in optical fibres', publisher: 'Nature Photonics', year: 2013 },
        { author: 'International Telecommunication Union', title: 'Measuring digital development: Facts and Figures 2024', publisher: 'ITU', year: 2024 },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'Automated engineering redesigns protocols and photonics while pipes lag behind',
      narrative: `AGI arrives around 2032 in the Accelerated branch and ASI near 2040, so this window shows what automated engineering does to a sector whose assets are buried, launched or licensed. Design accelerates first. Inverse-designed photonics, learned equalizers that operate closer to the nonlinear Shannon limit, and co-packaged optics arrive two to three years earlier than in the Baseline, and energy per bit inside datacenters falls by roughly an order of magnitude by 2040. Protocols change faster than hardware: automated systems produce congestion control, routing and transport designs verified against formal models, and agent-to-agent communication moves to compact, negotiated encodings that use a channel far more efficiently than human-readable formats. By 2035 machine-originated traffic dominates both requests and bytes, and networks are planned around agent workloads with human access as a small, latency-sensitive slice. 6G deployment runs faster than the Baseline because spectrum coordination, site planning and radio operation are automated, but towers, fibre and satellites still take the same years to build; heavy-lift launch pushes LEO constellations past 50,000 satellites by 2040. Quantum networking advances: repeater-based entanglement distribution over a thousand kilometres is demonstrated in the late 2030s with model-designed memories and error correction, and national quantum backbones begin construction. The information environment is transformed. Most content is generated, most reading is done by models, and human communication is increasingly mediated by personal agents that translate, summarize and negotiate. Trust rests on signed provenance, proof of personhood and reputation systems for agents. Brain interfaces gain higher channel counts and decoders designed by models, and a few thousand users communicate by thought at speeds above ordinary speech. Cislunar and Mars relay networks run delay-tolerant protocols with automated scheduling. The physical layer approaches but does not reach its limits; the traffic on it has already become mostly machine.`,
      dependencies: ['agentic-coding-tools', 'starship-flights', 'transformer-paper', 'world-wide-web', 'fiber-optics', 'shannon-information-theory'],
      uncertainties: [
        'Automated protocol design must pass through standards bodies and vendor implementation, which could hold deployment to human timescales.',
        'Learned agent encodings may be resisted by regulators who require inspectable communication between systems.',
        'Brain interface adoption is bounded by surgical capacity and trial timelines regardless of decoder quality.',
      ],
      indicators: [
        'Datacenter transceiver energy below two picojoules per bit in volume shipment.',
        'A transport or routing protocol designed primarily by automated systems adopted as an IETF standard.',
        'Repeater-based entanglement distribution demonstrated beyond 1,000 kilometres.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The mechanism, automated design outrunning physical build-out, is well grounded, and the branch anchor dates it. The magnitudes for energy per bit and quantum repeaters are extrapolations with wide ranges.',
      sources: [
        { author: 'Peter J. Winzer and David T. Neilson', title: 'From Scaling Disparities to Integrated Parallelism: A Decathlon for a Decade', publisher: 'Journal of Lightwave Technology', year: 2017 },
        { author: 'Stephanie Wehner, David Elkouss and Ronald Hanson', title: 'Quantum internet: A vision for the road ahead', publisher: 'Science', year: 2018, url: 'https://doi.org/10.1126/science.aam9288' },
        { author: 'Francis R. Willett et al.', title: 'A high-performance speech neuroprosthesis', publisher: 'Nature', year: 2023 },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superintelligence at the limits of code, held by glass, air, trenches and attention',
      narrative: `In the Discontinuous branch superintelligent systems exist from about 2031, and the decade is defined by what they can and cannot change. What they can change is everything encoded in software or in chip and photonic design: within a few years there are protocol stacks, coding schemes and components that operate within a few percent of the Shannon and nonlinear fibre limits, network control that is fully automated, and agent communication in dense learned encodings that humans cannot read directly. What they cannot change is the speed of light, the loss of glass, the absorption of the atmosphere, and the rate at which trenches are dug and rockets launched. Global fibre capacity grows several fold through spatial multiplexing and hollow core deployment, LEO constellations grow as fast as heavy launch permits, and 6G arrives roughly on the Baseline timetable because spectrum is allocated by treaty. The information environment changes most. Almost all content is machine-generated and machine-consumed; the fraction of network traffic that ever reaches a human falls to a few percent. Human attention, at a few tens of bits per second of language, is the scarcest resource in the system, and superhuman persuasion makes provenance, identity and consent the central questions of communication policy. Verified-human channels, signed capture and regulated intermediaries become mandatory in many jurisdictions. Quantum networks are built for a specific reason: authentication and key distribution that no classical computation can forge, with the no-cloning theorem as the guarantee, and continental repeater networks are under construction by the late 2030s. Brain interfaces improve quickly in design but slowly in deployment, because implantation and clinical trials run on human timescales. Interplanetary links carry robotic operations on the Moon and Mars over delay-tolerant networks. The deepest uncertainty is governance: who may communicate with the superintelligent systems, over which channels, and whether any human institution still sits on the path.`,
      dependencies: ['state-of-the-field-2026', 'quantum-error-correction', 'transformer-paper', 'social-networks', 'fiber-optics', 'shannon-information-theory'],
      uncertainties: [
        'Whether humans retain any inspectable view of machine-to-machine communication is a governance choice with no precedent.',
        'Mandatory verified-human channels may be adopted unevenly, leaving large populations in unverifiable information environments.',
        'Quantum repeater construction depends on cryogenic and photonic manufacturing that the branch may or may not accelerate.',
      ],
      indicators: [
        'Regulation in a major jurisdiction requiring machine-readable disclosure of agent-to-agent communication.',
        'Human-facing traffic falling below ten percent of bytes on major networks.',
        'A national quantum backbone with repeaters carrying authenticated traffic for critical infrastructure.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch rests on a discontinuity whose effect on communication has no precedent. Only the physical limits and construction lead times are firm anchors.',
      sources: [
        { author: 'Christophe Coupe, Yoon Mi Oh, Dan Dediu and Francois Pellegrino', title: 'Different languages, similar encoding efficiency: Comparable information rates across the human communicative niche', publisher: 'Science Advances', year: 2019 },
        { author: 'Stephanie Wehner, David Elkouss and Ronald Hanson', title: 'Quantum internet: A vision for the road ahead', publisher: 'Science', year: 2018, url: 'https://doi.org/10.1126/science.aam9288' },
        { author: 'William K. Wootters and Wojciech H. Zurek', title: 'A single quantum cannot be cloned', publisher: 'Nature', year: 1982 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2040-2060                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'communication-networks',
      window: '2040-2060',
      branch: 'slow',
      headline: 'Terrestrial networks approach their ceilings and the quantum internet goes continental',
      narrative: `With AGI arriving near 2038, the Baseline enters this window with automated engineering available and ASI still two decades away. Terrestrial networks approach their physical ceilings. Spatial multiplexing (multicore and few-mode fibre, and simply more fibres) becomes the routine answer to the nonlinear Shannon limit, so cost per bit keeps falling while spectral efficiency per mode stays near its bound. Hollow core fibre takes the long-haul routes in most regions, bringing round-trip latency to the antipode close to the vacuum figure of about 133 milliseconds rather than the roughly 200 milliseconds of glass. The generation after 6G arrives in the 2040s with terahertz links for indoor and short-range use, joint sensing, and full integration of terrestrial, aerial and satellite layers; long-range wireless stays in the bands below 30 gigahertz that the atmosphere allows. Coverage is universal in the sense that any person or device anywhere on Earth can reach the network at rates limited by cost, not physics. Energy per bit in transport falls by a further factor of ten through integrated photonics, remaining many orders of magnitude above the Landauer floor. The quantum internet becomes continental: repeater chains distribute entanglement across thousands of kilometres, satellites link continents, and the applications are authentication, secure timing, distributed sensing and linking quantum computers rather than mass-market use. Communication is almost entirely mediated by models: translation is invisible, agents speak to agents in learned codes, and human-to-human channels are a curated minority with strong provenance. Brain interfaces reach tens of thousands of users for medical need and a small elective market; brain-to-brain communication is demonstrated at useful bit rates but remains rare. The Solar System network expands with relay constellations at the Moon and Mars, and delay-tolerant networking handles the minutes of light time. ASI arrives around 2058 into a network already near its limits on Earth.`,
      dependencies: ['quantum-error-correction', 'starship-flights', 'transformer-paper', 'fiber-optics', 'shannon-information-theory', 'electric-telegraph'],
      uncertainties: [
        'Hollow core fibre may remain confined to premium routes if its cost per kilometre stays well above silica.',
        'Continental quantum networks could stall if no application beyond key distribution justifies the cost.',
        'The scale of the Mars relay network depends on crewed and robotic programmes outside this field.',
      ],
      indicators: [
        'Median round-trip latency between major exchanges on different continents within 20 percent of the vacuum floor.',
        'Entanglement distribution across more than 3,000 kilometres over fibre with repeaters.',
        'Brain-computer interface users above 50,000 worldwide.',
      ],
      confidence: 'low',
      confidenceJustification: 'The direction follows from limits and learning curves, but the mix of fibre types, the pace of quantum networking and the reach of brain interfaces in 2060 depend on cost outcomes that cannot be known before the 2040s.',
      sources: [
        { author: 'Rene-Jean Essiambre, Gerhard Kramer, Peter J. Winzer, Gerard J. Foschini and Bernhard Goebel', title: 'Capacity Limits of Optical Fiber Networks', publisher: 'Journal of Lightwave Technology', year: 2010, url: 'https://doi.org/10.1109/JLT.2009.2039464' },
        { author: 'Vinton Cerf et al.', title: 'RFC 4838: Delay-Tolerant Networking Architecture', publisher: 'Internet Engineering Task Force', year: 2007, url: 'https://www.rfc-editor.org/rfc/rfc4838' },
        { author: 'Yu-Ao Chen et al.', title: 'An integrated space-to-ground quantum communication network over 4,600 kilometres', publisher: 'Nature', year: 2021 },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'ASI-designed networks built by robots: Earth at its limits, the Solar System wired',
      narrative: `ASI arrives around 2040 in the Accelerated branch, and in this window design capability meets a construction industry that can finally keep up. Robotic trenching, automated cable ships, and factories producing multicore and hollow core fibre in volume rebuild terrestrial and submarine networks within two decades, so by 2060 the Earth's fibre plant operates near the nonlinear Shannon limit per mode with as many spatial modes as demand justifies. Latency is at the light-speed floor on every major route. Wireless access uses the whole allowable spectrum, with terahertz for short range and bands below 30 gigahertz for range, and LEO constellations of over 100,000 satellites with laser crosslinks form a second backbone that carries a large fraction of intercontinental traffic. Energy per bit falls to within a few orders of magnitude of practical device floors, still far above Landauer's limit. The quantum internet spans continents and is linked by satellite, with entanglement distribution treated as a utility for authentication, distributed quantum computation and sensor networks; the Holevo bound and the no-cloning theorem shape what it can carry, so it complements rather than replaces classical channels. The most important change is in who communicates. Machine-to-machine traffic is the overwhelming majority, and the human share of the information environment is deliberately protected by verified-human channels, provenance as a legal default and personal agents that filter on the person's behalf. Brain-computer interfaces, with ASI-designed devices and less invasive implantation, reach millions of users by 2060, and direct brain-to-brain exchange at rates above speech is available though not widespread. The Solar System network includes permanent relays at Mars and in the asteroid belt, with optical links at gigabits per second and delay-tolerant protocols that schedule around conjunctions. The unresolved questions are political: control of the channels, privacy under near-total observability, and the standing of humans in a machine-majority network.`,
      dependencies: ['humanoid-robotics-revival', 'starship-flights', 'quantum-error-correction', 'fiber-optics', 'shannon-information-theory', 'laser'],
      uncertainties: [
        'Robotic construction of submarine and terrestrial plant may face permitting and landing-rights barriers that keep humans on the critical path.',
        'Constellations above 100,000 satellites depend on debris management regimes not yet agreed.',
        'Mass adoption of brain interfaces depends on safety records over decades and on public trust.',
      ],
      indicators: [
        'Time from order to service for a transoceanic cable below eighteen months.',
        'Intercontinental traffic share carried by satellite crosslinks above 20 percent.',
        'Brain-computer interface users above one million worldwide.',
      ],
      confidence: 'low',
      confidenceJustification: 'Physics permits this trajectory and the branch anchor implies the design capability, but robotic construction, debris governance and brain interface adoption are speculative in timing.',
      sources: [
        { author: 'Stephanie Wehner, David Elkouss and Ronald Hanson', title: 'Quantum internet: A vision for the road ahead', publisher: 'Science', year: 2018, url: 'https://doi.org/10.1126/science.aam9288' },
        { author: 'Scott Burleigh, Kevin Fall and Edward J. Birrane', title: 'RFC 9171: Bundle Protocol Version 7', publisher: 'Internet Engineering Task Force', year: 2022, url: 'https://www.rfc-editor.org/rfc/rfc9171' },
        { author: 'Linxing Jiang et al.', title: 'BrainNet: A Multi-Person Brain-to-Brain Interface for Direct Collaboration Between Brains', publisher: 'Scientific Reports', year: 2019 },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2040-2060',
      branch: 'fast',
      headline: 'Deployment, consent and the Solar System: capacity stops being the question',
      narrative: `In the Discontinuous branch the 2040s open with superintelligence a decade old and networks whose designs have been at physical limits for years. The window is about deployment, consent and expansion beyond Earth. On Earth the rebuild of the physical plant completes: fibre operating at the nonlinear Shannon limit per mode with massive spatial multiplexing, hollow core on every route where latency matters, wireless using the full atmospheric windows, and constellations limited by orbital slots and debris management rather than by launch. Capacity per person is effectively unlimited relative to what any human can attend to, and the index measures the machine economy more than the human one. Energy per bit is at practical floors for photonic and electronic devices. The quantum network is global and routine, used to authenticate every critical channel between institutions and between intelligent systems, because it provides the only guarantees that superhuman classical computation cannot circumvent. The human information environment is a governed space: what reaches a person, from whom, with what provenance and through which agent is regulated in most jurisdictions, and the main political struggles concern the terms of that governance and the privacy of thought as brain interfaces spread. Brain-computer interfaces reach tens of millions of users, with non-invasive and minimally invasive designs, and brain-mediated communication becomes a real, if minority, mode of human exchange. The Solar System network is the growth frontier: optical relays at the Moon, Mars, the asteroid belt and the outer planets, delay-tolerant protocols carrying autonomous operations, and light time of minutes to hours as the binding limit that no technology removes. Serious engineering studies of interstellar probe communication begin. What remains uncertain is not what is possible but what is chosen: how much of human communication people allow to be mediated, and whether channels between superintelligent systems remain observable.`,
      dependencies: ['state-of-the-field-2026', 'starship-flights', 'quantum-error-correction', 'fiber-optics', 'shannon-information-theory', 'sputnik'],
      uncertainties: [
        'Societies may cap or reject brain interfaces for communication on privacy grounds regardless of safety.',
        'The observability of channels between superintelligent systems may be lost early and never recovered.',
        'Outer-planet relay infrastructure depends on space programmes whose priorities this field does not set.',
      ],
      indicators: [
        'Legislation in major jurisdictions establishing a right to verified-human communication channels.',
        'Optical relays operating beyond Mars with data rates above one gigabit per second.',
        'Brain-computer interface users above ten million worldwide.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the far tail of the fast branch. The limits are firm and the anchors imply the capability, but the outcomes are governed by consent and by space programmes with no precedent at this scale.',
      sources: [
        { author: 'Vinton Cerf et al.', title: 'RFC 4838: Delay-Tolerant Networking Architecture', publisher: 'Internet Engineering Task Force', year: 2007, url: 'https://www.rfc-editor.org/rfc/rfc4838' },
        { author: 'Alexander S. Holevo', title: 'Bounds for the quantity of information transmitted by a quantum communication channel', publisher: 'Problems of Information Transmission', year: 1973 },
        { author: 'Christophe Coupe, Yoon Mi Oh, Dan Dediu and Francois Pellegrino', title: 'Different languages, similar encoding efficiency: Comparable information rates across the human communicative niche', publisher: 'Science Advances', year: 2019 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2060-2090                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'communication-networks',
      window: '2060-2090',
      branch: 'slow',
      headline: 'After ASI, the Baseline closes the gap to physical limits and moves growth off Earth',
      narrative: `ASI arrives around 2058 in the Baseline, so this window is the Baseline's version of what the faster branches did earlier: applying superhuman design to a network already near its terrestrial limits. Fibre, wireless and satellite systems are rebuilt over the 2060s and 2070s to operate at their Shannon and nonlinear bounds with spatial multiplexing scaled to demand, hollow core latency at the light-speed floor, and energy per bit near practical device floors. The quantum internet becomes global and routine. What changes is the purpose of the network more than its performance. Machine-to-machine traffic is almost all of the flow, and it grows with the size of the machine economy rather than with population. Human communication is a small, protected fraction with verified provenance, personal agents as intermediaries, and brain interfaces as a common option for those who want them; brain-to-brain communication at rates above speech is available and used by a minority. The information environment has stabilized into governed channels rather than an open commons, and the history of the 2030s and 2040s, when synthetic content overwhelmed unverified media, is treated as a settled lesson. Growth in physical capacity after 2070 goes mostly off Earth: cislunar networks at terabits per second, Mars networks at gigabits per second, and relays through the inner Solar System operating on delay-tolerant protocols, with light time (minutes to Mars, hours to the outer planets) as the fixed cost of every exchange. By 2090 the Baseline network resembles the faster branches' 2060 state. The reasoning is that the physical limits were within a factor of a few of practice by 2040, and three decades of institutions moving at their own pace is enough to close the gap; what no branch can compress is distance.`,
      dependencies: ['quantum-error-correction', 'starship-flights', 'transformer-paper', 'fiber-optics', 'shannon-information-theory', 'electric-telegraph'],
      uncertainties: [
        'The Baseline assumes ASI is deployed under stable institutions; disruption would either accelerate or fragment the network.',
        'The size of the machine economy, which drives capacity, is not constrained by any model.',
        'Off-planet growth depends on settlement decisions that lie outside this field.',
      ],
      indicators: [
        'Human-originated traffic below five percent of bytes on major networks.',
        'Entanglement distribution available as a commercial service between continents.',
        'Sustained Mars-to-Earth links above one gigabit per second.',
      ],
      confidence: 'low',
      confidenceJustification: 'Beyond 2060 the projection relies on physical limits and scenario anchors rather than on any current project. The direction is defensible; the magnitudes are not.',
      sources: [
        { author: 'Claude E. Shannon', title: 'A Mathematical Theory of Communication', publisher: 'Bell System Technical Journal', year: 1948, url: 'https://doi.org/10.1002/j.1538-7305.1948.tb01338.x' },
        { author: 'Scott Burleigh, Kevin Fall and Edward J. Birrane', title: 'RFC 9171: Bundle Protocol Version 7', publisher: 'Internet Engineering Task Force', year: 2022, url: 'https://www.rfc-editor.org/rfc/rfc9171' },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'A ceiling on Earth, a Solar System network, and the first interstellar links',
      narrative: `Two decades after ASI, the Accelerated branch's terrestrial network is at its ceiling, and the index moves on off-planet reach and on the quality of the information environment rather than on raw capacity. On Earth, capacity is provisioned to match a machine economy several times the size of 2060's, using spatial multiplexing and additional fibre rather than any new physics; wireless and satellite layers are fully merged; latency is at the light-speed floor; energy per bit sits near the practical floors of photonic devices. The quantum internet is a utility, and its role is defined by the Holevo bound and the no-cloning theorem: it carries keys, entanglement and quantum states for computation and sensing, while classical channels carry almost everything else. The human share of communication is stable and protected. Personal agents mediate nearly all human exchange with the outside world, translation and summarization are invisible, provenance is universal, and a mature body of law governs what may be presented to a person and by whom. Brain-computer interfaces are widespread, and brain-mediated communication, including direct exchange between people, is one ordinary mode among several, with privacy of thought a constitutional question in many jurisdictions. Beyond Earth, the Solar System network is extensive: optical relays and delay-tolerant routing serve Mars settlements, asteroid operations and outer-planet science with the highest bandwidths that power and aperture allow, and light time remains the one unremovable limit, so distant operations are autonomous by design. The first dedicated interstellar communication experiments, aimed at probes launched toward nearby stars, test links at bits per second across light-years. The index reaches the high seventies by 2090; the remainder reflects capacity a civilization may choose not to build and the unbridgeable cost of distance.`,
      dependencies: ['starship-flights', 'quantum-error-correction', 'transformer-paper', 'laser', 'shannon-information-theory', 'marconi-wireless'],
      uncertainties: [
        'Interstellar probe programmes may not be launched at all, removing the interstellar component of this window.',
        'Privacy of thought could be settled in ways that sharply restrict brain-mediated communication.',
        'Demand from the machine economy might grow far faster than assumed and force a larger terrestrial build than described.',
      ],
      indicators: [
        'Optical link budgets demonstrated for a probe beyond 1,000 astronomical units.',
        'Constitutional or statutory protection of neural data in at least five major jurisdictions.',
        'Terrestrial capacity growth below the growth of the machine economy for a decade, indicating saturation.',
      ],
      confidence: 'low',
      confidenceJustification: 'Everything in this window sits several technology generations past current projects. The limits from physics and distance are the only firm bounds.',
      sources: [
        { author: 'Stephanie Wehner, David Elkouss and Ronald Hanson', title: 'Quantum internet: A vision for the road ahead', publisher: 'Science', year: 2018, url: 'https://doi.org/10.1126/science.aam9288' },
        { author: 'Vinton Cerf et al.', title: 'RFC 4838: Delay-Tolerant Networking Architecture', publisher: 'Internet Engineering Task Force', year: 2007, url: 'https://www.rfc-editor.org/rfc/rfc4838' },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Light speed, energy per bit and consent: the three limits that remain',
      narrative: `In the Discontinuous branch the terrestrial network reached its physical ceiling in the 2050s, and this window is about what a superintelligent civilization does with communication once capacity is not a constraint. Three things bind: the speed of light, the energy per bit of physical devices (near their practical floors and many orders of magnitude above Landauer's limit), and consent. The last dominates. The human information environment is a designed space in which people choose, through law and personal agents, how much of their communication is mediated, which channels are verified-human, and whether their thoughts are private, and societies differ sharply in the choices they make. Brain interfaces are common and brain-to-brain exchange is a normal mode for those who want it; the bandwidth of human communication is finally limited by cognition rather than by the channel. Machine-to-machine communication is the bulk of all information flow, largely in learned encodings, and the question of whether humans can audit the channels between superintelligent systems is a live one, answered in most places by quantum-authenticated logging and designed transparency rather than by direct reading. Growth in physical capacity happens beyond Earth. The Solar System network is dense in the inner system, with permanent relay infrastructure at every settled body, and extends to the outer planets; the first interstellar probes carry optical transmitters, and receivers on Earth and in space are built to hear them at bits per second. Interplanetary latency, minutes to hours, shapes a civilization that is increasingly local in its decision making and connected only through slow exchange of state. The index sits in the mid eighties by 2090: terrestrial systems at limits, off-planet systems expanding, and the remainder representing distance, which no technology closes.`,
      dependencies: ['state-of-the-field-2026', 'starship-flights', 'quantum-error-correction', 'laser', 'shannon-information-theory', 'einstein-1905'],
      uncertainties: [
        'How much a superintelligent civilization wants to communicate, and with whom, is not a physics question and cannot be forecast.',
        'Designed transparency for machine channels may fail, leaving human oversight nominal.',
        'Interstellar probe communication at bits per second may be judged not worth the aperture and power required.',
      ],
      indicators: [
        'Receivers built specifically for interstellar probe downlinks.',
        'Adoption of brain-mediated communication above ten percent of the population in any country.',
        'Audited machine-to-machine channels covering all critical infrastructure in a major jurisdiction.',
      ],
      confidence: 'low',
      confidenceJustification: 'This projection is bounded by physical limits and the scenario anchor and has no empirical basis beyond them. It describes a plausible ceiling, not a forecast of what will be chosen.',
      sources: [
        { author: 'Rolf Landauer', title: 'Irreversibility and Heat Generation in the Computing Process', publisher: 'IBM Journal of Research and Development', year: 1961 },
        { author: 'Vinton Cerf et al.', title: 'RFC 4838: Delay-Tolerant Networking Architecture', publisher: 'Internet Engineering Task Force', year: 2007, url: 'https://www.rfc-editor.org/rfc/rfc4838' },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2090-2126                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'communication-networks',
      window: '2090-2126',
      branch: 'slow',
      headline: 'A century on: every terrestrial channel near its bound, distance the only frontier',
      narrative: `By the last window the Baseline has had roughly three decades of superintelligent engineering, and its network converges on the state the other branches reached earlier. Every terrestrial channel operates near its Shannon bound: fibre at the nonlinear limit per spatial mode with as many modes as demand justifies, wireless using every atmospheric window, satellites merged into the ground network, latency at the light-speed floor, and energy per bit near device floors. The quantum internet is global and unremarkable. The human information environment is governed and stable, with verified provenance, agent mediation and brain interfaces as ordinary options, and the volume of human communication has plateaued with population and attention. Machine-to-machine traffic grows with the machine economy, on Earth and increasingly beyond it, and the Solar System network is the main site of physical expansion, with relays at every settled body and delay-tolerant protocols carrying autonomous operations across light-hours. Interstellar communication is an experimental practice: probes launched in the 2070s and 2080s are heard at bits per second, and the physics of aperture, power and distance sets what can ever be exchanged. The reasoning for this convergence is that the physical limits (Shannon, the nonlinear fibre limit, atmospheric absorption, light speed, no-cloning and Holevo) were all within reach of practice by 2060, and a century is long enough for slow institutions to close the gap. What remains open is not capability but composition: how much of the communicating civilization is human, how much of what humans exchange is mediated, and where in the Solar System it lives. The index reads in the mid seventies by 2126, with the gap to the ceiling representing distance and choice rather than technology.`,
      dependencies: ['quantum-error-correction', 'starship-flights', 'fiber-optics', 'shannon-information-theory', 'electric-telegraph', 'alphabet'],
      uncertainties: [
        'Institutional stability over a century is unknowable and the Baseline assumes continuity.',
        'Population and the size of the machine economy after 2090 dominate the capacity figures.',
        'Interstellar probes may not have been launched, in which case this component is absent.',
      ],
      indicators: [
        'Terrestrial capacity growth below one percent a year for a decade.',
        'Interstellar probe downlinks received at any data rate.',
        'Off-planet traffic exceeding ten percent of total machine communication.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the physical limits are trustworthy. The projection describes convergence on those limits rather than events.',
      sources: [
        { author: 'Claude E. Shannon', title: 'A Mathematical Theory of Communication', publisher: 'Bell System Technical Journal', year: 1948, url: 'https://doi.org/10.1002/j.1538-7305.1948.tb01338.x' },
        { author: 'Rene-Jean Essiambre, Gerhard Kramer, Peter J. Winzer, Gerard J. Foschini and Bernhard Goebel', title: 'Capacity Limits of Optical Fiber Networks', publisher: 'Journal of Lightwave Technology', year: 2010, url: 'https://doi.org/10.1109/JLT.2009.2039464' },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'Settled on Earth, expanding across the Solar System, listening between stars',
      narrative: `The Accelerated branch reaches 2090 with a network at its terrestrial ceiling and a Solar System network under construction, and the final window is about scale beyond Earth and about the settled shape of human communication. On Earth nothing improves in physics; capacity tracks the machine economy through more fibre, more spatial modes and more satellites, and the interesting engineering is in efficiency near the practical floors of energy per bit. The human information environment is a mature institution: people communicate through agents, verify sources by default, use brain interfaces as commonly as earlier generations used phones, and treat privacy of thought and verified-human channels as rights. Direct brain-to-brain communication is ordinary for those who choose it. Beyond Earth, the network extends across the Solar System with high-power optical relays, autonomous scheduling around light time, and delay-tolerant routing as the standard architecture; Mars and the Moon have networks comparable to Earth's in per-capita capacity, and the outer planets are served by relays. Interstellar communication with probes becomes routine engineering at bits to kilobits per second, and the design of receivers for signals from other stars is a serious scientific programme rather than a speculation. The index approaches the high eighties by 2126, with the remainder reflecting the fixed costs of distance and the possibility that a civilization declines to build all it could. The reasoning rests on fixed points: Shannon and the nonlinear fibre limit, which cap what a channel carries; atmospheric absorption, which fixes the usable spectrum; the speed of light, which fixes latency; energy per bit, which fixes the cost; and the no-cloning theorem and the Holevo bound, which fix what quantum links can do. Everything else is the choice of a civilization this atlas cannot forecast.`,
      dependencies: ['starship-flights', 'quantum-error-correction', 'laser', 'shannon-information-theory', 'marconi-wireless', 'alphabet'],
      uncertainties: [
        'Settlement of Mars and the outer Solar System at the assumed scale is speculative and may not be pursued.',
        'The balance between human and machine communication could shift in either direction over a generation.',
        'Interstellar receivers may be built and hear nothing, or not be built at all.',
      ],
      indicators: [
        'Per-capita network capacity on Mars within a factor of two of Earth.',
        'Interstellar probe links sustained above one kilobit per second.',
        'Brain interface use above half of adults in any large country.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a limit-bounded description, not a forecast. The physical fixed points are secure; the social and settlement choices are not.',
      sources: [
        { author: 'Alexander S. Holevo', title: 'Bounds for the quantity of information transmitted by a quantum communication channel', publisher: 'Problems of Information Transmission', year: 1973 },
        { author: 'Scott Burleigh, Kevin Fall and Edward J. Birrane', title: 'RFC 9171: Bundle Protocol Version 7', publisher: 'Internet Engineering Task Force', year: 2022, url: 'https://www.rfc-editor.org/rfc/rfc9171' },
      ],
    },
    {
      fieldId: 'communication-networks',
      window: '2090-2126',
      branch: 'fast',
      headline: 'Communication in a machine-majority civilization: limits known, choices not',
      narrative: `In the Discontinuous branch the network on Earth has been at its limits for half a century, and the final window is dominated by communication beyond Earth and by the question of what communication is for in a civilization that is mostly machine. Terrestrial systems are maintained at their physical ceilings by automated industry and replaced on cycles set by material aging. The human information environment is settled law: mediated, verified, private where people want it, and preserved as a distinct space within a machine-majority network. Brain interfaces are common, brain-to-brain communication is ordinary, and the bandwidth of human exchange is bounded by cognition rather than by any channel. Machine communication dominates every measure, in learned codes, across a Solar System network dense enough that the inner planets function as one delayed system and the outer planets as autonomous outposts. Interstellar links to probes, and to any settlements the branch may have begun, are the frontier, and the physics is unforgiving: received power falls with the square of distance, so links across light-years carry bits per second even with large apertures, and every exchange takes years. The index reaches about 90 by 2126 on this branch. The remaining margin is not technological. It represents the speed of light, which no branch overcomes; the energy per bit of physical devices, which stays far above Landauer's floor; and the choices of a civilization about how much it wishes to communicate, with whom, and how much of its own inner life it makes legible. The reasoning chain is the same one that runs through this field from 1948 onward: Shannon fixed what a channel can carry, physics fixed the channels, and everything since has been the closing of a gap. This atlas can state the limits with confidence and the choices not at all.`,
      dependencies: ['state-of-the-field-2026', 'starship-flights', 'quantum-error-correction', 'shannon-information-theory', 'einstein-1905', 'alphabet'],
      uncertainties: [
        'The composition of the civilization, human and machine, is the dominant unknown and is not a physics question.',
        'Interstellar settlement at any scale has no demonstrated basis.',
        'Legibility of machine communication to humans may be abandoned entirely or preserved by design; either is consistent with the limits.',
      ],
      indicators: [
        'Machine-to-machine traffic above 99 percent of all bytes.',
        'Interstellar links operating to more than one target star.',
        'Terrestrial network replacement cycles driven by material aging alone, with no design change for a decade.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window describes a civilization at physical ceilings; the figures are limit-derived and the choices behind them are unforecastable.',
      sources: [
        { author: 'Claude E. Shannon', title: 'A Mathematical Theory of Communication', publisher: 'Bell System Technical Journal', year: 1948, url: 'https://doi.org/10.1002/j.1538-7305.1948.tb01338.x' },
        { author: 'Rolf Landauer', title: 'Irreversibility and Heat Generation in the Computing Process', publisher: 'IBM Journal of Research and Development', year: 1961 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 25, low: 24, high: 26 },
      { year: 2030, value: 29, low: 27, high: 31 },
      { year: 2040, value: 38, low: 33, high: 43 },
      { year: 2060, value: 52, low: 42, high: 60 },
      { year: 2090, value: 66, low: 52, high: 76 },
      { year: 2126, value: 76, low: 58, high: 86 },
    ],
    moderate: [
      { year: 2026, value: 25, low: 24, high: 26 },
      { year: 2030, value: 29, low: 27, high: 32 },
      { year: 2040, value: 44, low: 36, high: 52 },
      { year: 2060, value: 62, low: 48, high: 72 },
      { year: 2090, value: 78, low: 60, high: 88 },
      { year: 2126, value: 88, low: 68, high: 95 },
    ],
    fast: [
      { year: 2026, value: 25, low: 24, high: 26 },
      { year: 2030, value: 30, low: 27, high: 33 },
      { year: 2040, value: 50, low: 38, high: 60 },
      { year: 2060, value: 70, low: 52, high: 82 },
      { year: 2090, value: 84, low: 64, high: 93 },
      { year: 2126, value: 90, low: 70, high: 97 },
    ],
  },
  sources: [
    { author: 'Claude E. Shannon', title: 'A Mathematical Theory of Communication', publisher: 'Bell System Technical Journal', year: 1948, url: 'https://doi.org/10.1002/j.1538-7305.1948.tb01338.x' },
    { author: 'Rene-Jean Essiambre, Gerhard Kramer, Peter J. Winzer, Gerard J. Foschini and Bernhard Goebel', title: 'Capacity Limits of Optical Fiber Networks', publisher: 'Journal of Lightwave Technology', year: 2010, url: 'https://doi.org/10.1109/JLT.2009.2039464' },
    { author: 'International Telecommunication Union', title: 'Measuring digital development: Facts and Figures 2024', publisher: 'ITU', year: 2024 },
    { author: 'Ericsson', title: 'Ericsson Mobility Report, June 2025', publisher: 'Ericsson', year: 2025 },
    { author: 'Stephanie Wehner, David Elkouss and Ronald Hanson', title: 'Quantum internet: A vision for the road ahead', publisher: 'Science', year: 2018, url: 'https://doi.org/10.1126/science.aam9288' },
    { author: 'Vinton Cerf et al.', title: 'RFC 4838: Delay-Tolerant Networking Architecture', publisher: 'Internet Engineering Task Force', year: 2007, url: 'https://www.rfc-editor.org/rfc/rfc4838' },
    { author: 'Coalition for Content Provenance and Authenticity', title: 'C2PA Technical Specification, version 2.1', publisher: 'C2PA', year: 2024 },
    { author: 'International Telecommunication Union', title: 'Recommendation ITU-R M.2160-0: Framework and overall objectives of the future development of IMT for 2030 and beyond', publisher: 'ITU-R', year: 2023 },
  ],
  lastReviewed: '2026-09-04',
};
