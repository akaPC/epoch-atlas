import type { Epoch, TechEventInput } from '../schema';

export const epoch: Epoch = {
  id: 'microprocessor-pc',
  index: 11,
  name: 'The microprocessor and personal computing era',
  code: 'MICROPROCESSOR',
  startYear: 1971,
  endYear: 1995,
  span: '1971 to 1995',
  thesis: `Between 1971 and 1995 the computer stopped being an institution and became an object. The microprocessor put a complete central processing unit on one chip, and within a decade hobbyists, then small firms, then IBM had wrapped it in a keyboard and a screen and sold it to individuals. The spreadsheet gave the machine a reason to sit on a desk; the graphical interface gave anyone a way to drive it. In parallel, the networking ideas of the previous epoch matured into Ethernet, TCP/IP and finally the World Wide Web, so that by the end of the period the personal computer was not only a calculator and a typewriter but a window onto everything other people had published.

The same twenty-five years transformed biology and medicine. Recombinant DNA made genes into components that could be cut, moved and manufactured; PCR made any fragment of DNA copyable at will; the automated sequencer turned reading genomes from a craft into an industry; CT and MRI let physicians see inside a living body without opening it. Beyond Earth, the Shuttle, GPS, Voyager and Hubble extended human instruments to orbit and past the planets. The epoch's signature is convergence: cheap logic, cheap storage and reliable networks made every other field faster, and the personal computer became the general instrument through which the change was felt.`,
  enablingConditions: [
    'The integrated circuit and Moore\'s law had, by 1971, made it economical to place an entire processor on a single silicon die, so that computing power fell in price by roughly half every eighteen months to two years for the whole period.',
    'ARPANET, packet switching and Unix supplied a working base of protocols, software and trained engineers on which local networks, internetworking and the Web could be built.',
    'The Watson-Crick model, restriction enzymes and plasmid biology gave molecular biologists a toolkit that could be recombined into genetic engineering as soon as someone thought to try.',
    'Cold War and space-race budgets had funded satellites, rockets, solid-state electronics and precision timekeeping, which were then redirected into GPS, the Shuttle, Voyager and Hubble.',
    'A large cohort of hobbyists, university students and small entrepreneurs, especially in California and around Boston, had the skills and cultural appetite to treat computers as personal tools rather than corporate assets.',
  ],
  constraintsRemoved: [
    'Computing no longer required a building, a staff and a capital budget; a machine of useful power could be bought by an individual and operated without training in a shared room.',
    'Networks no longer needed a single owner or a single vendor: Ethernet let any machine join a local network, and TCP/IP let any network join any other.',
    'Genes could be isolated, copied and expressed in other organisms, removing the need to purify scarce proteins such as insulin from animal tissue.',
    'The interior of the living body could be imaged in three dimensions without exploratory surgery.',
    'Position on the Earth\'s surface could be fixed to a few metres anywhere, at any time, by a receiver with no moving parts and no trained navigator.',
    'Publishing to a global audience no longer required a printing press, a broadcaster or a publisher; a text file on a networked computer was enough.',
  ],
  secondOrderConsequences: [
    'Software became an industry in its own right, separable from hardware, with its own economics of near-zero marginal cost, network effects and platform lock-in.',
    'Work moved onto screens: the spreadsheet, the word processor and email reorganised offices, and clerical roles that had existed since the nineteenth century began to disappear.',
    'The commercial biotechnology sector emerged, with venture-funded firms such as Genentech and Amgen turning academic techniques into patented products and drugs.',
    'Open collaboration over networks (the Internet Engineering Task Force, Usenet, free software and Linux) established a new way of producing complex technical artefacts outside any single firm.',
    'Governments began to treat information infrastructure as strategic, funding the NSFNET backbone and the Human Genome Project and deregulating telecommunications.',
    'The consumer electronics supply chain shifted decisively to East Asia, where Japanese and then Korean and Taiwanese firms mastered memory, displays, batteries and optical media.',
  ],
  transition: `By 1995 the ingredients for the networked world were all present but not yet joined. Windows 95 shipped with a TCP/IP stack and a browser, Netscape had shown that a company could be built on the Web, and the NSFNET backbone had been handed over to commercial carriers in April of that year. The personal computer, until then mostly a standalone appliance, became primarily a terminal onto a global network. The consequences arrived quickly: Amazon and eBay demonstrated online commerce, Google turned the Web's link structure into a search engine, and the dot-com boom poured capital into infrastructure that outlasted the crash. In biology, the automated sequencer and PCR that this epoch produced were about to be scaled into factories, and the Human Genome Project would finish ahead of schedule. Digital cellular telephony was spreading, and the lithium-ion battery would make a pocket computer feasible. The next epoch is the one in which those pieces (Web, search, mobile, genomics) were assembled into everyday life.`,
  humanExperience: `A person born in 1950 entered this period in their twenties having never touched a computer and left it, at forty-five, quite possibly with one on their desk, one in their car's engine bay and another in a telephone in their pocket. The change was felt first at work. In 1975 an office ran on typewriters, carbon paper, adding machines and filing cabinets; a financial model was a sheet of paper that took an afternoon to recompute. By 1985 the same office had a few IBM PCs running Lotus 1-2-3 and WordPerfect, and the person who knew how to use them had become indispensable. By 1995 there was a machine on nearly every desk, an email address on every business card, and a dawning awareness of something called the Web.

At home the change came through toys and hobbies before it came through necessity. A teenager in 1978 might save for an Apple II or a Commodore and learn BASIC from a magazine; the same teenager in 1990 might be running a bulletin board over a modem. Music moved from vinyl to compact disc and became, without most people noticing, digital. The mobile phone was a brick carried by executives in 1985 and a small grey rectangle carried by plumbers in 1995.

Medicine changed too, less visibly. A headache or a bad back could now be investigated with a CT or MRI scan instead of exploratory surgery. Insulin came from bacteria rather than pigs. A newborn's genetic disorder could be diagnosed from a few cells. Parents were told about a Human Genome Project and were unsure what it would mean.

What most people did not feel yet was connection. The networks existed, but for most of the period they belonged to universities, the military and corporations. The sense that a personal machine was a door onto everyone else arrived only in the last two or three years of the epoch, and it arrived suddenly.`,
  minEvents: 22,
  sources: [
    { author: 'Paul E. Ceruzzi', title: 'A History of Modern Computing', publisher: 'MIT Press', year: 2003 },
    { author: 'Martin Campbell-Kelly and William Aspray', title: 'Computer: A History of the Information Machine', publisher: 'Basic Books', year: 1996 },
    { author: 'Janet Abbate', title: 'Inventing the Internet', publisher: 'MIT Press', year: 1999 },
    { author: 'Michael A. Hiltzik', title: 'Dealers of Lightning: Xerox PARC and the Dawn of the Computer Age', publisher: 'HarperBusiness', year: 1999 },
    { author: 'Paul Freiberger and Michael Swaine', title: 'Fire in the Valley: The Making of the Personal Computer', publisher: 'Osborne/McGraw-Hill', year: 1984 },
    { author: 'Sally Smith Hughes', title: 'Genentech: The Beginnings of Biotech', publisher: 'University of Chicago Press', year: 2011 },
  ],
  lastReviewed: '2026-09-04',
};

export const events: TechEventInput[] = [
  {
    id: 'ct-scanner',
    epochId: 'microprocessor-pc',
    date: { year: 1971, month: 10, day: 1, precision: 'exact', display: '1 October 1971' },
    location: 'Atkinson Morley Hospital, Wimbledon, London, England',
    title: 'The CT scanner',
    summary: 'Godfrey Hounsfield at EMI built the first computed tomography scanner, which reconstructed cross-sectional images of the living brain from hundreds of X-ray measurements, and the first patient was scanned in London on 1 October 1971.',
    explanation: `On 1 October 1971 a woman with a suspected brain tumour lay with her head inside a water-filled rubber cap in a machine at Atkinson Morley Hospital in south London. Over about five minutes an X-ray tube and a detector rotated in small steps around her skull, taking readings, and a computer at EMI's laboratories later turned those readings into an eighty-by-eighty pixel picture of a slice through her brain. The tumour was visible. It was the first clinical computed tomography scan, and it changed diagnostic medicine more than anything since Roentgen's discovery of X-rays in 1895.

The physics had been available for a long time. A conventional radiograph projects the whole thickness of the body onto one plane, so soft tissues of similar density overlap and vanish; the brain, enclosed in bone, was almost invisible. The mathematician Johann Radon had shown in 1917 that a function could be reconstructed from its line integrals, and the physicist Allan Cormack at Tufts had published the radiological application in 1963 and 1964 with almost no response. What was missing was cheap computation. Godfrey Hounsfield, an engineer at EMI who had led the design of the company's transistorised computer, realised around 1967 that a computer could combine many low-dose projections into a map of absorption, and that this map would show differences of a fraction of a percent that film could never register.

EMI, flush with Beatles revenue and interested in medical electronics, funded a prototype; the British Department of Health contributed as well. Hounsfield tested the concept with a lathe bed, a gamma source and nine days per scan, then with an X-ray source and preserved human brains. The first production EMI Scanner was installed in 1972, and the results, published in the British Journal of Radiology in 1973, were received with something close to disbelief by neuroradiologists.

The consequences were immediate and large. Whole-body scanners followed in 1975, scan times fell from minutes to seconds, and by the 1980s CT was routine in every well-equipped hospital. Exploratory surgery for head injury and stroke became rare. Hounsfield and Cormack shared the 1979 Nobel Prize in Physiology or Medicine, an unusual award for two men neither of whom held a medical degree, and Hounsfield's name survives in the Hounsfield unit, the scale of X-ray attenuation used on every scanner. CT also established the template for computational imaging generally: the idea that the instrument's output is data and the image is a reconstruction. That principle was extended within two years to magnetic resonance.`,
    mechanism: `A narrow X-ray beam passes through the body to a scintillation detector; the detector records how much of the beam was absorbed along that line. The source and detector are then translated across the body and rotated by one degree, and the process repeats, giving for the original EMI scanner 160 readings at each of 180 angles. Each reading is a line integral of the tissue's attenuation coefficient. A computer solves the resulting system of equations (originally by iterative algebraic reconstruction, later by filtered back-projection using the Radon transform) to recover the attenuation at every point in the slice. The values are mapped to grey levels, with water at zero and bone around plus one thousand on the Hounsfield scale. Because the method compares many overlapping measurements, it can distinguish tissues whose densities differ by less than one percent, far beyond the sensitivity of film.`,
    prerequisites: ['x-rays', 'integrated-circuit', 'von-neumann-architecture'],
    consequences: ['mri-scanner'],
    figures: [
      { name: 'Godfrey Hounsfield', role: 'Inventor, EMI Central Research Laboratories' },
      { name: 'Allan Cormack', role: 'Physicist who developed the reconstruction theory' },
      { name: 'James Ambrose', role: 'Radiologist who performed the first clinical scans' },
    ],
    significance: 8,
    significanceJustification: 'CT made the interior of the living body visible in cross section for the first time and established computational reconstruction as the basis of all later medical imaging. It reshaped neurology, oncology and emergency medicine within a decade.',
    domains: ['biology-medicine', 'computation'],
    sources: [
      { author: 'G. N. Hounsfield', title: 'Computerized transverse axial scanning (tomography): Part 1. Description of system', publisher: 'British Journal of Radiology', year: 1973, url: 'https://doi.org/10.1259/0007-1285-46-552-1016' },
      { author: 'A. M. Cormack', title: 'Representation of a Function by Its Line Integrals, with Some Radiological Applications', publisher: 'Journal of Applied Physics', year: 1963, url: 'https://doi.org/10.1063/1.1729798' },
      { author: 'Godfrey N. Hounsfield', title: 'Computed Medical Imaging (Nobel Lecture)', publisher: 'Nobel Foundation', year: 1979, url: 'https://www.nobelprize.org/prizes/medicine/1979/hounsfield/lecture/' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'mri-scanner',
    epochId: 'microprocessor-pc',
    date: { year: 1973, month: 3, day: 16, precision: 'exact', display: '16 March 1973 (Lauterbur paper); clinical scanners c. 1980' },
    location: 'Stony Brook, New York, United States and Nottingham, England',
    title: 'Magnetic resonance imaging',
    summary: 'Paul Lauterbur showed in 1973 that magnetic field gradients could turn nuclear magnetic resonance into an imaging method, Peter Mansfield supplied the mathematics and fast acquisition, and the first clinical whole-body scanners appeared around 1980.',
    explanation: `Nuclear magnetic resonance had been a chemist's tool since the 1940s: place a sample in a strong magnetic field, excite it with radio waves, and the hydrogen nuclei answer at a frequency that depends on the field strength and their chemical surroundings. In 1971 Raymond Damadian at Downstate Medical Center in Brooklyn reported in Science that the NMR relaxation times of rat tumours differed from those of normal tissue, and proposed that NMR could detect cancer. What he did not have was a way to make a picture.

Paul Lauterbur, a chemist at Stony Brook, found the way in September 1971 and published it in Nature on 16 March 1973. If the magnetic field is made to vary slightly across the sample, the resonance frequency becomes a label for position. By applying gradients in several directions and combining the resulting one-dimensional profiles, he reconstructed an image of two capillary tubes of water, using the same back-projection ideas that Hounsfield had used for CT. Lauterbur called the technique zeugmatography; the name did not survive, but the method did.

At Nottingham, Peter Mansfield had independently been thinking about using gradients to resolve structure in solids. He developed the mathematical framework that treated the gradient-encoded signal as a spatial Fourier transform, showed how to select a single slice, and in 1977 proposed echo-planar imaging, which acquires an entire image from one excitation and eventually made functional MRI possible. Mansfield's group produced the first image of a human finger in 1977 and of a human abdomen in 1978; Damadian's company FONAR produced a whole-body scan the same year. Commercial systems from EMI, Picker, Siemens, Philips and General Electric followed between 1980 and 1984, and the word nuclear was quietly dropped from the name to reassure patients.

MRI's advantage over CT is soft-tissue contrast: it distinguishes grey from white matter, cartilage from ligament, and tumour from oedema, with no ionising radiation. It became the reference method for the brain, spine and joints. Its costs were real: superconducting magnets cooled by liquid helium, siting requirements and long scan times. The industrial demand for superconducting niobium-titanium wire created by tens of thousands of scanners is the same supply chain later drawn on by particle accelerators.

Lauterbur and Mansfield shared the 2003 Nobel Prize in Physiology or Medicine. Damadian, who held the first patent on NMR cancer detection and had built the first whole-body machine, was excluded and protested in full-page newspaper advertisements. Historians generally credit him with the medical vision and Lauterbur and Mansfield with the imaging method; the dispute remains a live example of how priority is assigned in a field with many contributors.`,
    mechanism: `Hydrogen nuclei are tiny magnets. In a strong static field (typically 1.5 tesla, from a superconducting coil) they align and precess at the Larmor frequency, about 64 megahertz at that field strength. A brief radio-frequency pulse at that frequency tips them out of alignment; as they relax back they emit a radio signal whose decay depends on the tissue (the T1 and T2 relaxation times). To locate the signal, gradient coils superimpose small linear variations on the static field, so that frequency encodes position along one axis and the phase accumulated during a timed gradient pulse encodes another; a third gradient applied during excitation selects a slice. The received signals fill a matrix in spatial-frequency space, and a two-dimensional Fourier transform converts them into an image. Different pulse sequences weight the image toward T1, T2 or proton density, giving contrast between soft tissues that X-rays cannot separate.`,
    prerequisites: ['ct-scanner', 'integrated-circuit', 'planck-quantum'],
    consequences: ['lhc-higgs'],
    figures: [
      { name: 'Paul Lauterbur', role: 'Chemist who devised gradient-based NMR imaging' },
      { name: 'Peter Mansfield', role: 'Physicist who developed slice selection and echo-planar imaging' },
      { name: 'Raymond Damadian', role: 'Physician who proposed NMR for cancer detection and built the first whole-body scanner' },
    ],
    significance: 8,
    significanceJustification: 'MRI became the definitive way to image soft tissue and the nervous system without radiation, and functional MRI later opened the living brain to study. Its scale also industrialised superconducting magnet manufacture.',
    domains: ['biology-medicine', 'computation'],
    sources: [
      { author: 'P. C. Lauterbur', title: 'Image Formation by Induced Local Interactions: Examples Employing Nuclear Magnetic Resonance', publisher: 'Nature', year: 1973, url: 'https://doi.org/10.1038/242190a0' },
      { author: 'R. Damadian', title: 'Tumor Detection by Nuclear Magnetic Resonance', publisher: 'Science', year: 1971, url: 'https://doi.org/10.1126/science.171.3976.1151' },
      { author: 'P. Mansfield and P. K. Grannell', title: 'NMR diffraction in solids?', publisher: 'Journal of Physics C: Solid State Physics', year: 1973, url: 'https://doi.org/10.1088/0022-3719/6/22/007' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'ethernet',
    epochId: 'microprocessor-pc',
    date: { year: 1973, month: 5, day: 22, precision: 'exact', display: '22 May 1973' },
    location: 'Xerox Palo Alto Research Center, Palo Alto, California, United States',
    title: 'Ethernet',
    summary: 'Robert Metcalfe\'s memo of 22 May 1973 described a local network in which computers shared a single coaxial cable by listening before transmitting and backing off after collisions; Ethernet became the universal wiring of local computing.',
    explanation: `In the spring of 1973 Xerox PARC had a problem of its own making. It was building dozens of Alto personal computers and had just designed the world's first laser printer, which could produce a page a second. Connecting the Altos to that printer, and to each other, needed a network far faster than the telephone-line links of ARPANET and cheap enough to reach every office. Robert Metcalfe, a recent MIT graduate who had written his doctoral thesis on packet networks, was given the job.

Metcalfe's starting point was ALOHAnet, the University of Hawaii's radio network, in which stations simply transmitted whenever they had a packet and retransmitted if no acknowledgement arrived. He had analysed its performance in his thesis and knew it wasted most of its capacity. In a memo dated 22 May 1973 he proposed a wired version with two improvements: a station would listen to the cable before sending, and if it detected another transmission colliding with its own it would stop and wait a random interval that doubled after each collision. He called the shared cable the Ether, after the nineteenth-century medium once thought to carry light, and the network Ethernet.

With David Boggs, a radio amateur and engineer, Metcalfe had a working system by November 1973, running at 2.94 megabits per second over thick coaxial cable strung through PARC's ceilings. Their 1976 paper in Communications of the ACM laid out the design with the clarity of a textbook. Chuck Thacker and Butler Lampson, designers of the Alto, were co-inventors on the patent granted in 1977.

What made Ethernet matter beyond PARC was Metcalfe's decision to make it a standard rather than a product. He left Xerox in 1979 to found 3Com, and persuaded Digital Equipment, Intel and Xerox to publish a joint 10 megabit specification in 1980, which the IEEE adopted as 802.3 in 1983. Any manufacturer could build compatible equipment. Rival token-ring and token-bus systems, backed by IBM and General Motors, were technically respectable but proprietary in practice and lost the market during the 1980s.

Ethernet's importance is not that its original mechanism survived; twisted-pair wiring and switches replaced the shared cable in the 1990s and collisions became rare. It is that Ethernet framed the idea of a local area network that any device could join, and provided the physical substrate onto which TCP/IP, file servers, and eventually the Web were laid. Metcalfe's law, the observation that a network's value grows with the square of its users, began as a 3Com sales argument for Ethernet cards.`,
    mechanism: `Every station is attached by a transceiver to a single coaxial cable, which behaves as a shared broadcast medium. To send, a station first checks whether the cable is idle (carrier sense). If so, it transmits a frame containing destination and source addresses, a type field, data and a cyclic redundancy check, while continuing to monitor the cable. If the signal it reads differs from the one it is sending, a collision has occurred; the station sends a brief jam signal so that all parties notice, then waits a random number of slot times chosen from a range that doubles with each successive collision (binary exponential backoff) before trying again. Because all stations receive every frame, each interface compares the destination address with its own and discards frames meant for others. This scheme, carrier sense multiple access with collision detection, needs no central controller and degrades gracefully under load.`,
    prerequisites: ['packet-switching', 'arpanet', 'integrated-circuit'],
    consequences: ['tcp-ip', 'wifi', 'aws-cloud-computing'],
    figures: [
      { name: 'Robert Metcalfe', role: 'Inventor and later founder of 3Com' },
      { name: 'David Boggs', role: 'Co-designer and builder of the first Ethernet' },
    ],
    significance: 8,
    significanceJustification: 'Ethernet became the physical layer of nearly every office, campus and data centre network and defined the open standard model that let networking equipment become a commodity. Wi-Fi is its wireless descendant.',
    domains: ['communication', 'computation', 'information'],
    sources: [
      { author: 'Robert M. Metcalfe and David R. Boggs', title: 'Ethernet: Distributed Packet Switching for Local Computer Networks', publisher: 'Communications of the ACM', year: 1976, url: 'https://doi.org/10.1145/360248.360253' },
      { author: 'Michael A. Hiltzik', title: 'Dealers of Lightning: Xerox PARC and the Dawn of the Computer Age', publisher: 'HarperBusiness', year: 1999 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'xerox-parc-gui',
    epochId: 'microprocessor-pc',
    date: { year: 1973, month: 3, precision: 'year', display: '1973 (Alto), 1981 (Star)' },
    location: 'Xerox Palo Alto Research Center, Palo Alto, California, United States',
    title: 'The Xerox Alto and the graphical user interface',
    summary: 'The Alto, first running at Xerox PARC in 1973, combined a bitmapped display, a mouse, overlapping windows and a network into the first personal computer with a graphical interface; the Xerox Star of 1981 turned it into a commercial product.',
    explanation: `The Xerox Alto was the first machine to look like the computers everyone now uses. It was built at the Palo Alto Research Center by Chuck Thacker, Butler Lampson, Ed McCreight and colleagues, and its first unit ran in March 1973 (the first image it displayed, by Alto lore, was the Cookie Monster). It had a portrait-format bitmapped display of 606 by 808 pixels in which every dot on the screen corresponded to a bit in memory, a three-button mouse, a keyboard, a hard disk, and an Ethernet connection. It was not sold; about two thousand were built for use inside Xerox and at a few universities.

The bitmapped display was the decisive choice. Earlier terminals showed fixed character cells; the Alto could show anything, which meant proportional fonts, diagrams, multiple typefaces, and images. On that canvas PARC's researchers invented most of the graphical user interface. Alan Kay's Learning Research Group built Smalltalk, with overlapping windows, pop-up menus, icons and the model-view-controller pattern. Larry Tesler and Tim Mott developed the Gypsy editor with modeless editing and cut-and-paste. Charles Simonyi's Bravo was the first what-you-see-is-what-you-get word processor, and its documents printed on the laser printer PARC had built. Doug Engelbart's NLS at SRI had shown the mouse and hypertext in 1968; the Alto fused those ideas with personal ownership of the machine.

Xerox commercialised the work as the 8010 Star, launched in April 1981. The Star introduced the desktop metaphor in its mature form: a document icon that you opened by selecting it, a folder, a printer, a wastebasket, and a set of consistent commands on a keyboard. It was a beautiful system and a commercial failure, priced at around sixteen thousand dollars per workstation plus servers, aimed at office managers who did not know they needed it, and sold by a company organised around copiers.

The ideas escaped. Steve Jobs and a group of Apple engineers saw Smalltalk demonstrated on the Alto in December 1979 in exchange for Xerox's right to buy Apple stock; the Lisa and Macintosh followed. Tesler, Simonyi and other PARC alumni went to Apple and Microsoft. The graphical interface became the interface of the personal computer, then of the Web, then of the phone. Xerox's failure to profit from its own laboratory became the standard case study in corporate research management, though the laser printer alone repaid PARC many times over.`,
    mechanism: `The Alto's screen is a raster display refreshed from a region of main memory, so that changing a bit in memory changes a dot on the screen; a microcoded processor shares its cycles between the display, the disk, the Ethernet and user programs. A hardware operation called BitBlt (bit block transfer) copies and combines rectangular regions of pixels at high speed, which is what makes windows that can be moved, overlapped and redrawn feasible. The mouse reports relative motion; the software tracks a cursor and maps its position to objects drawn on screen. An event loop waits for keyboard and mouse input and dispatches it to whichever window is active. The desktop metaphor layers icons, menus and direct manipulation over this substrate, so that a user acts on visible objects rather than typing commands.`,
    prerequisites: ['integrated-circuit', 'von-neumann-architecture', 'electronic-television'],
    consequences: ['macintosh', 'windows-95', 'world-wide-web'],
    figures: [
      { name: 'Chuck Thacker', role: 'Principal hardware designer of the Alto' },
      { name: 'Butler Lampson', role: 'Architect of the Alto and its software' },
      { name: 'Alan Kay', role: 'Leader of the Smalltalk group and originator of the overlapping-window interface' },
      { name: 'Larry Tesler', role: 'Developer of modeless editing and cut-and-paste' },
    ],
    significance: 9,
    significanceJustification: 'Almost every element of how people interact with computers, from windows and icons to the mouse and WYSIWYG editing, was assembled at PARC on the Alto. Its direct descendants are the Macintosh, Windows and every smartphone interface.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'C. P. Thacker, E. M. McCreight, B. W. Lampson, R. F. Sproull and D. R. Boggs', title: 'Alto: A Personal Computer', publisher: 'Xerox Palo Alto Research Center, Technical Report CSL-79-11', year: 1979 },
      { author: 'Michael A. Hiltzik', title: 'Dealers of Lightning: Xerox PARC and the Dawn of the Computer Age', publisher: 'HarperBusiness', year: 1999 },
      { author: 'Jeff Johnson, Teresa L. Roberts, William Verplank, David C. Smith, Charles H. Irby, Marian Beard and Kevin Mackey', title: 'The Xerox Star: A Retrospective', publisher: 'IEEE Computer', year: 1989, url: 'https://doi.org/10.1109/2.35211' },
      { author: 'Douglas K. Smith and Robert C. Alexander', title: 'Fumbling the Future: How Xerox Invented, Then Ignored, the First Personal Computer', publisher: 'William Morrow', year: 1988 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'recombinant-dna',
    epochId: 'microprocessor-pc',
    date: { year: 1973, month: 11, precision: 'year', display: 'November 1973' },
    location: 'Stanford University and University of California, San Francisco, United States',
    title: 'Recombinant DNA',
    summary: 'Stanley Cohen and Herbert Boyer joined DNA from two sources into a plasmid and showed that bacteria would replicate it, creating genetic engineering as a practical technique and the foundation of the biotechnology industry.',
    explanation: `In November 1973 the Proceedings of the National Academy of Sciences published a paper by Stanley Cohen, Annie Chang, Herbert Boyer and Robert Helling with the unassuming title Construction of Biologically Functional Bacterial Plasmids In Vitro. It reported that DNA from two different plasmids had been cut with an enzyme, joined, inserted into Escherichia coli, and that the bacteria had copied the hybrid and expressed both of its antibiotic-resistance genes. A follow-up in 1974 put a gene from a toad into a bacterium. Genes had become movable parts.

The work joined two lines of research. Boyer's laboratory at UCSF worked on restriction enzymes, proteins bacteria use to cut foreign DNA at specific sequences; his enzyme EcoRI left short single-stranded overhangs, so that any two fragments cut by it had complementary sticky ends and would pair. Cohen at Stanford studied plasmids, the small circular DNA molecules that bacteria pass among themselves, and had developed a way to make E. coli take them up from solution. The two met at a conference in Hawaii in November 1972 and, over corned beef sandwiches near Waikiki, sketched the experiment. Paul Berg at Stanford had made the first recombinant molecule in a test tube in 1972 but had stopped short of putting it into a living cell out of caution about a virus component.

That caution became a public issue. Scientists led by Berg called for a voluntary moratorium in 1974, and in February 1975 about 140 researchers met at Asilomar in California and drew up containment guidelines that the National Institutes of Health adopted in 1976. Asilomar is still cited as the model of scientists regulating their own field before harm occurs, and also criticised for excluding the public from the decision.

Commercial consequences followed with unusual speed. Boyer and the venture capitalist Robert Swanson founded Genentech in 1976; in 1977 the firm made bacteria produce the human hormone somatostatin, and in 1978 human insulin, which Eli Lilly brought to market in 1982 as Humulin, the first recombinant drug. Stanford's patent on the Cohen-Boyer method, licensed cheaply and widely, earned the two universities over 250 million dollars and set the pattern for university technology transfer. Amgen, Biogen and Chiron followed. Within a decade recombinant proteins included growth hormone, interferon, erythropoietin and the hepatitis B vaccine.

Recombinant DNA also transformed basic research: any gene could be cloned, sequenced and expressed, which made the sequencing methods of 1977, the polymerase chain reaction of the 1980s and the Human Genome Project all possible.`,
    mechanism: `A restriction enzyme such as EcoRI recognises a specific six-base sequence in DNA and cuts both strands in a staggered fashion, leaving four-base single-stranded overhangs. Because every fragment cut by the same enzyme carries the same complementary overhang, a fragment of foreign DNA and an opened plasmid will anneal end to end when mixed; DNA ligase then seals the backbone into a continuous circle. The recombinant plasmid is introduced into bacteria that have been made permeable by treatment with calcium chloride and a brief heat shock. Only a few cells take up a plasmid, so the plasmid carries an antibiotic-resistance gene and the culture is grown on antibiotic medium; only transformed cells survive. Each colony is then a clone containing millions of copies of the inserted gene, and if the insert sits downstream of a bacterial promoter the cell will also transcribe and translate it into protein.`,
    prerequisites: ['dna-double-helix', 'germ-theory-pasteur'],
    consequences: ['pcr', 'automated-dna-sequencer', 'human-genome-project-launch', 'crispr-discovery', 'mrna-vaccines'],
    figures: [
      { name: 'Stanley N. Cohen', role: 'Stanford geneticist, plasmid biology' },
      { name: 'Herbert W. Boyer', role: 'UCSF biochemist, restriction enzymes; co-founder of Genentech' },
      { name: 'Paul Berg', role: 'Made the first recombinant DNA molecule and organised the Asilomar conference' },
    ],
    significance: 9,
    significanceJustification: 'Recombinant DNA converted molecular biology from an observational into a constructive science and founded the biotechnology industry. Every recombinant drug, genetically modified crop and genome project depends on it.',
    domains: ['biology-medicine', 'agriculture', 'manufacturing'],
    sources: [
      { author: 'Stanley N. Cohen, Annie C. Y. Chang, Herbert W. Boyer and Robert B. Helling', title: 'Construction of Biologically Functional Bacterial Plasmids In Vitro', publisher: 'Proceedings of the National Academy of Sciences', year: 1973, url: 'https://doi.org/10.1073/pnas.70.11.3240' },
      { author: 'Paul Berg, David Baltimore, Sydney Brenner, Richard O. Roblin and Maxine F. Singer', title: 'Summary Statement of the Asilomar Conference on Recombinant DNA Molecules', publisher: 'Proceedings of the National Academy of Sciences', year: 1975, url: 'https://doi.org/10.1073/pnas.72.6.1981' },
      { author: 'Sally Smith Hughes', title: 'Genentech: The Beginnings of Biotech', publisher: 'University of Chicago Press', year: 2011 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'tcp-ip',
    epochId: 'microprocessor-pc',
    date: { year: 1974, month: 5, precision: 'year', display: 'May 1974 paper; ARPANET cutover 1 January 1983' },
    location: 'Stanford University, California and DARPA, Arlington, Virginia, United States',
    title: 'TCP/IP and internetworking',
    summary: 'Vinton Cerf and Robert Kahn published the design of a protocol for connecting dissimilar packet networks in May 1974; refined into TCP and IP and made mandatory on ARPANET on 1 January 1983, it is the common language of the Internet.',
    explanation: `ARPANET worked, but it was one network with one kind of switch and one owner. By 1973 DARPA was also funding a packet radio network for mobile use and a packet satellite network across the Atlantic, and Robert Kahn, who had moved from BBN to DARPA, wanted them to talk to one another. He asked Vinton Cerf, then at Stanford, to help. Their paper, A Protocol for Packet Network Intercommunication, appeared in IEEE Transactions on Communications in May 1974 and described a gateway that would sit between networks and a host-to-host protocol that would work across all of them.

The design rested on a few principles that became the Internet's constitution. No network would be required to change internally; the gateway would wrap packets in a common envelope. Packets could be lost, duplicated or reordered, and it was the endpoints' job to recover, not the network's. There was no central control. The idea that intelligence lives at the edge, later called the end-to-end argument, came from Cerf's experience at UCLA with the Network Working Group and from the French CYCLADES network of Louis Pouzin, which had already used unreliable datagrams and which Cerf acknowledged.

In 1978 the single protocol was split in two: the Internet Protocol, which merely addresses and routes datagrams, and the Transmission Control Protocol, which provides reliable ordered delivery above it. The split was argued for by Danny Cohen and others who wanted to carry voice, for which retransmission is worse than loss. The 32-bit address, four groups of numbers, was chosen when a few hundred hosts existed and has proved both durable and constraining.

The Department of Defense adopted TCP/IP as a standard in 1980 and DARPA required every ARPANET host to switch on 1 January 1983, a flag day organised by Jon Postel and Dan Lynch with buttons reading I Survived the TCP/IP Transition. In the same year the military portion split off as MILNET, and the Berkeley Unix release 4.2BSD shipped with a free TCP/IP implementation, which is how the protocol spread to universities and then to workstation vendors. The NSFNET backbone of 1986 adopted it, and the competing international standard, the OSI protocol suite, lost through being slower to arrive and harder to implement.

TCP/IP is the reason the Internet is one thing rather than many. Every later network technology, from Ethernet to Wi-Fi to cellular data, has been made to carry IP packets, and every application from email to the Web to streaming video is written to the sockets that TCP presents.`,
    mechanism: `Data from an application is divided into segments. TCP prefixes each with a header containing source and destination ports, a sequence number counting bytes, an acknowledgement number, a window size and a checksum. IP wraps the segment in a datagram carrying source and destination 32-bit addresses and a time-to-live counter, and hands it to whatever link layer is present. Routers examine only the IP header, look up the destination in a forwarding table, decrement the time-to-live and pass the datagram on, with no memory of it afterwards. At the receiver, TCP reassembles segments in sequence order, acknowledges what has arrived, and the sender retransmits anything unacknowledged after a timeout. The window limits how much unacknowledged data may be in flight, and since 1988 senders shrink it on loss and grow it slowly, which is how the network avoids congestion collapse without any central coordinator.`,
    prerequisites: ['arpanet', 'packet-switching', 'ethernet', 'unix'],
    consequences: ['world-wide-web', 'linux', 'mosaic-netscape', 'google-search', 'aws-cloud-computing'],
    figures: [
      { name: 'Vinton Cerf', role: 'Co-designer of TCP/IP' },
      { name: 'Robert Kahn', role: 'Co-designer of TCP/IP, DARPA program manager' },
      { name: 'Jon Postel', role: 'Editor of the RFC series and administrator of Internet numbers' },
      { name: 'Louis Pouzin', role: 'Designer of CYCLADES, source of the datagram idea' },
    ],
    significance: 10,
    significanceJustification: 'TCP/IP is the shared protocol that turned many separate networks into a single Internet, and its design choices (dumb network, smart edges, no central authority) shaped everything built on top of it. It is one of the few technical standards of civilisational scale.',
    domains: ['communication', 'information', 'computation'],
    sources: [
      { author: 'Vinton G. Cerf and Robert E. Kahn', title: 'A Protocol for Packet Network Intercommunication', publisher: 'IEEE Transactions on Communications', year: 1974, url: 'https://doi.org/10.1109/TCOM.1974.1092259' },
      { author: 'Janet Abbate', title: 'Inventing the Internet', publisher: 'MIT Press', year: 1999 },
      { author: 'Barry M. Leiner, Vinton G. Cerf, David D. Clark, Robert E. Kahn, Leonard Kleinrock, Daniel C. Lynch, Jon Postel, Larry G. Roberts and Stephen Wolff', title: 'A Brief History of the Internet', publisher: 'ACM SIGCOMM Computer Communication Review', year: 2009, url: 'https://doi.org/10.1145/1629607.1629613' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'altair-8800',
    epochId: 'microprocessor-pc',
    date: { year: 1975, month: 1, precision: 'year', display: 'January 1975' },
    location: 'MITS, Albuquerque, New Mexico, United States',
    title: 'The Altair 8800',
    summary: 'The MITS Altair 8800, announced on the January 1975 cover of Popular Electronics as a 397 dollar kit built around the Intel 8080, was the first microcomputer to sell in quantity and the machine on which Microsoft and the hobbyist industry began.',
    explanation: `The January 1975 issue of Popular Electronics carried a photograph of a blue and grey metal box with a row of toggle switches and lights, under the headline Project Breakthrough! World's First Minicomputer Kit to Rival Commercial Models. The machine was the Altair 8800, sold by Micro Instrumentation and Telemetry Systems of Albuquerque, a small firm run by Ed Roberts that had made calculator kits until Texas Instruments crushed that market. Roberts bet the company on a computer kit at 397 dollars, hoping to sell a few hundred. Orders arrived in thousands within weeks, and MITS spent most of 1975 trying to ship them.

The Altair was built around Intel's 8080 microprocessor, an 8-bit chip released in 1974 that Roberts bought in volume at 75 dollars each instead of the 360 dollar list price. As delivered it had 256 bytes of memory, no keyboard, no screen and no storage. A program was entered in binary through the front-panel switches, and its output was a pattern of lights. It was nonetheless a real general-purpose computer that an individual could own, and that was enough. Roberts's key design decision was an open bus (later standardised as S-100) into which expansion cards could be plugged, which let other companies sell memory, serial ports, and eventually disk controllers, and created an industry of add-ons around a machine that was itself barely usable.

Two readers of the magazine in Cambridge, Massachusetts, Paul Allen and Bill Gates, saw the cover and telephoned Roberts to say they had a BASIC interpreter for the machine. They did not, but they wrote one in about eight weeks on a Harvard PDP-10 running an 8080 simulator, and Allen flew to Albuquerque with a paper tape that ran the first time it was loaded. Altair BASIC became the first product of Micro-Soft, founded in April 1975. The Homebrew Computer Club, which met for the first time in March 1975 in a Menlo Park garage to look at an Altair, became the meeting place where Steve Wozniak showed the Apple I a year later. Gates's Open Letter to Hobbyists of February 1976, complaining that most users of his BASIC had copied it rather than paid, marks the beginning of the argument over software as property.

The Altair itself was superseded within two years by the IMSAI, the Apple II, the Commodore PET and the Tandy TRS-80, and MITS was sold in 1977. Its significance is as a proof of demand. Intel had thought of the microprocessor as a component for terminals and controllers; the Altair showed that there were tens of thousands of people who wanted a computer for its own sake, and that they would pay for one before anyone had worked out what it was for.`,
    mechanism: `The Altair is a minimal von Neumann machine. The Intel 8080 executes instructions fetched from memory over a 16-bit address bus and an 8-bit data bus at 2 megahertz, with seven 8-bit registers and a stack pointer. The processor, memory and input-output cards plug into a passive backplane of 100-pin connectors carrying the buses, power and control signals, so any card that follows the electrical convention can be added. To load a program, the operator uses the front-panel switches to set an address, then sets eight data switches to the byte and presses Deposit, one byte at a time; a bootstrap loader entered this way can then read a longer program from paper tape through a serial card. Lights display the address and data lines directly. Later additions, a serial terminal, a cassette interface and floppy disks, replaced the panel for ordinary use.`,
    prerequisites: ['intel-4004', 'integrated-circuit', 'von-neumann-architecture'],
    consequences: ['apple-ii', 'ibm-pc', 'visicalc', 'windows-95'],
    figures: [
      { name: 'Ed Roberts', role: 'Founder of MITS and designer of the Altair' },
      { name: 'Paul Allen', role: 'Co-author of Altair BASIC, co-founder of Microsoft' },
      { name: 'Bill Gates', role: 'Co-author of Altair BASIC, co-founder of Microsoft' },
    ],
    significance: 7,
    significanceJustification: 'The Altair demonstrated that a mass market for personal computers existed before the machines were useful, and launched both the hobbyist industry and Microsoft. Its open bus set the pattern of expandable personal hardware.',
    domains: ['computation'],
    sources: [
      { author: 'H. Edward Roberts and William Yates', title: 'Altair 8800 Minicomputer, Part 1', publisher: 'Popular Electronics', year: 1975 },
      { author: 'Paul Freiberger and Michael Swaine', title: 'Fire in the Valley: The Making of the Personal Computer', publisher: 'Osborne/McGraw-Hill', year: 1984 },
      { author: 'Paul E. Ceruzzi', title: 'A History of Modern Computing', publisher: 'MIT Press', year: 2003 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'apple-ii',
    epochId: 'microprocessor-pc',
    date: { year: 1977, month: 6, precision: 'year', display: 'June 1977 (shown April 1977)' },
    location: 'Cupertino, California, United States',
    title: 'The Apple II',
    summary: 'Steve Wozniak\'s Apple II, shown in April 1977 and shipped that June, was the first complete, mass-produced personal computer with colour graphics and an open expansion architecture; it sold for sixteen years and made Apple a major company.',
    explanation: `The Apple II was unveiled at the West Coast Computer Faire in San Francisco in April 1977 and began shipping in June. Where the Altair was a box of switches, the Apple II was a finished appliance: a moulded beige plastic case with a built-in keyboard, a power supply that did not need a fan, colour graphics that plugged into a home television, a cassette port for storage, BASIC in read-only memory so the machine was usable the moment it was switched on, and eight expansion slots. It cost 1,298 dollars with four kilobytes of memory. The same year brought the Commodore PET and the Tandy TRS-80, together dubbed the 1977 Trinity, but the Apple II outlasted both.

Nearly all of it was the work of one engineer, Steve Wozniak. He had designed the Apple I in 1976 as a single board for the Homebrew Computer Club, and Steve Jobs had persuaded him to sell it. For the Apple II Wozniak built the video, memory and processor logic around the MOS Technology 6502, a 25 dollar chip, using the fewest components he could manage. His colour graphics exploited a quirk of the American NTSC television standard so that a cheap circuit could produce colour by timing alone. His floppy disk controller of 1978, which used a handful of chips and clever software where competitors used dozens of chips, made the Disk II drive both cheap and fast and turned the machine from a toy into a business tool. Jobs contributed the case, the marketing, and the insistence on a finished product; Mike Markkula, a retired Intel executive, contributed 250,000 dollars and a business plan.

The Apple II's importance rests on what other people did with it. The open slots and documented ROM meant that third parties could sell cards for printers, modems, 80-column text and extra memory, and could write software without Apple's permission. VisiCalc, the first spreadsheet, appeared on the Apple II in 1979 and is often credited with selling more Apple IIs than any of Apple's own efforts; the machine went into small businesses because of one program. Education adopted it wholesale after Apple's discounted programme for schools, so that a generation of American children learned computing on Apple IIs running Oregon Trail and Logo.

Apple went public in December 1980 in the largest offering since Ford. The Apple II family (II Plus, IIe, IIc, IIGS) was produced until 1993, selling around five or six million units, and it financed the Lisa and the Macintosh. Its lesson, an integrated consumer product on an open platform, was one Apple itself would later abandon and then partially rediscover.`,
    mechanism: `The MOS 6502 processor runs at about one megahertz, sharing its memory bus with the video circuitry: the processor uses the bus during one half of each cycle and the video system reads the frame from memory during the other half, so no separate video memory or contention logic is needed. Text and graphics are stored as bytes in main memory; a character generator ROM turns text bytes into dot patterns, and in high-resolution mode each bit maps to a pixel. Colour is produced by outputting pixel patterns at specific phases relative to the NTSC colour subcarrier, so that a television decodes certain bit patterns as green, violet, orange or blue. Eight peripheral slots expose the buses directly, with a small area of memory and ROM space reserved for each so a card can carry its own firmware. The Disk II controller uses a tiny ROM state machine and software timing loops to encode and decode the disk bit stream.`,
    prerequisites: ['altair-8800', 'integrated-circuit', 'electronic-television'],
    consequences: ['visicalc', 'ibm-pc', 'macintosh'],
    figures: [
      { name: 'Steve Wozniak', role: 'Designer of the Apple II hardware and firmware' },
      { name: 'Steve Jobs', role: 'Co-founder of Apple, product and marketing lead' },
      { name: 'Mike Markkula', role: 'Investor and first business planner of Apple' },
    ],
    significance: 8,
    significanceJustification: 'The Apple II was the first personal computer that a non-technical person could buy, plug in and use, and its open expansion model created the independent software and peripheral industries. It made Apple, and it carried VisiCalc into offices.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Stephen Wozniak', title: 'System Description: The Apple-II', publisher: 'Byte', year: 1977 },
      { author: 'Steve Wozniak with Gina Smith', title: 'iWoz: Computer Geek to Cult Icon', publisher: 'W. W. Norton', year: 2006 },
      { author: 'Michael Moritz', title: 'The Little Kingdom: The Private Story of Apple Computer', publisher: 'William Morrow', year: 1984 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'voyager-probes',
    epochId: 'microprocessor-pc',
    date: { year: 1977, month: 9, day: 5, precision: 'exact', display: '5 September 1977 (Voyager 1 launch; Voyager 2 launched 20 August 1977)' },
    location: 'Cape Canaveral, Florida, United States; Jet Propulsion Laboratory, Pasadena, California',
    title: 'The Voyager probes',
    summary: 'Voyager 1 and 2, launched in August and September 1977, used a rare planetary alignment and gravity assists to tour Jupiter, Saturn, Uranus and Neptune, returned the first close images of the outer solar system and became the first human objects in interstellar space.',
    explanation: `In 1965 a graduate student at the Jet Propulsion Laboratory, Gary Flandro, noticed that in the late 1970s Jupiter, Saturn, Uranus and Neptune would be arranged so that a single spacecraft could visit all four, using each planet's gravity to bend its path and accelerate it toward the next, an alignment that recurs every 175 years. NASA's Grand Tour proposal was cancelled for cost in 1971, and what survived was a more modest pair of Mariner-class spacecraft approved for Jupiter and Saturn only, renamed Voyager in 1977. Engineers quietly designed them to last long enough for the rest of the tour should funding follow.

Voyager 2 launched on 20 August 1977 and Voyager 1, on a faster trajectory, on 5 September, both on Titan-Centaur rockets from Cape Canaveral. Each weighed about 825 kilograms, carried a 3.7 metre dish antenna, three radioisotope thermoelectric generators fuelled with plutonium-238, and instruments including vidicon cameras, spectrometers, magnetometers and plasma detectors. Three onboard computers of a few kilobytes each, with software that has been rewritten from Earth several times, control the craft.

The science return dwarfed expectations. At Jupiter in 1979 the probes found active volcanoes on Io, the first seen beyond Earth, a thin ring, and the cracked ice surface of Europa that later made it a candidate for a subsurface ocean. At Saturn in 1980 and 1981 they resolved the rings into thousands of ringlets, discovered shepherd moons, and Voyager 1 was diverted to fly past Titan, sacrificing the outer planets for a look at that moon's thick nitrogen atmosphere. Voyager 2 went on alone to Uranus in January 1986, five days before the Challenger accident, and to Neptune in August 1989, where it found winds of 2,000 kilometres per hour and geysers on Triton. These remain the only close encounters with the two ice giants.

Both spacecraft continue to operate, communicating with the Deep Space Network at a signal power at Earth of well under a billionth of a billionth of a watt. Voyager 1 crossed the heliopause into interstellar space in August 2012 and Voyager 2 in November 2018. Each carries a gold-plated copper record, curated by a committee chaired by Carl Sagan, with sounds, images and greetings in 55 languages. Voyager 1's Pale Blue Dot photograph of Earth, taken in February 1990 at Sagan's urging, is among the most reproduced images of the space age. The declining output of the generators is expected to end science operations in the late 2020s.`,
    mechanism: `A gravity assist exchanges momentum between a spacecraft and a planet. Approaching from behind in the planet's orbital direction, the craft falls into the planet's gravity well and climbs out again with the same speed relative to the planet, but because the planet is itself moving, the craft's velocity relative to the Sun is increased by up to twice the planet's orbital speed, and its direction is bent toward the next target. Voyager 2 gained about 16 kilometres per second at Jupiter this way. Power comes from three radioisotope thermoelectric generators, in which the heat of decaying plutonium-238 drives silicon-germanium thermocouples; output has fallen from 470 watts at launch to about 220 watts. Data are sent on an X-band carrier at 8.4 gigahertz through a 3.7 metre dish and received by 70 metre antennas, with convolutional and Reed-Solomon coding that lets the link operate at signal levels far below the receiver's noise.`,
    prerequisites: ['apollo-11', 'sputnik', 'v2-rocket', 'integrated-circuit'],
    consequences: ['hubble-telescope', 'kepler-exoplanets', 'jwst'],
    figures: [
      { name: 'Gary Flandro', role: 'Identified the Grand Tour alignment' },
      { name: 'Edward Stone', role: 'Voyager project scientist from 1972 to 2022' },
      { name: 'Carl Sagan', role: 'Chaired the Golden Record committee' },
    ],
    significance: 7,
    significanceJustification: 'Voyager produced the first and, for Uranus and Neptune, the only close observations of the outer planets, and showed that spacecraft designed for years could operate for decades. It set expectations for what robotic exploration could return per dollar.',
    domains: ['space', 'information'],
    sources: [
      { author: 'E. C. Stone and A. L. Lane', title: 'Voyager 1 Encounter with the Jovian System', publisher: 'Science', year: 1979, url: 'https://doi.org/10.1126/science.204.4396.945' },
      { author: 'Jim Bell', title: 'The Interstellar Age: Inside the Forty-Year Voyager Mission', publisher: 'Dutton', year: 2015 },
      { author: 'E. C. Stone, A. C. Cummings, F. B. McDonald, B. C. Heikkila, N. Lal and W. R. Webber', title: 'Voyager 1 Observes Low-Energy Galactic Cosmic Rays in a Region Depleted of Heliospheric Ions', publisher: 'Science', year: 2013, url: 'https://doi.org/10.1126/science.1236408' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'gps',
    epochId: 'microprocessor-pc',
    date: { year: 1978, month: 2, day: 22, precision: 'exact', display: '22 February 1978 (first Navstar launch); full operational capability 1995' },
    location: 'Vandenberg Air Force Base, California, United States',
    title: 'The Global Positioning System',
    summary: 'The first Navstar GPS satellite was launched on 22 February 1978, beginning a constellation that by 1995 let any receiver fix its position and time anywhere on Earth from the timing of signals broadcast by atomic clocks in orbit.',
    explanation: `The Global Positioning System began as a military programme to let bombers, ships, submarines and soldiers know where they were, and became, within thirty years, a utility as ordinary as electricity. Its intellectual roots were in the tracking of Sputnik: in 1957 physicists at the Johns Hopkins Applied Physics Laboratory realised that the Doppler shift of a satellite's signal gave its orbit, and inverted the idea to give a receiver its own position. The resulting Transit system served the Navy's Polaris submarines from 1964, but needed hours between fixes. The Naval Research Laboratory's Timation satellites of 1967 onward tested precise clocks in orbit, and the Air Force's Project 621B developed the spread-spectrum signal design.

In 1973 the Pentagon merged these programmes under Air Force Colonel Bradford Parkinson, whose team met over Labor Day weekend at the Pentagon and defined a system of 24 satellites in six orbital planes at about 20,200 kilometres, each carrying atomic clocks and broadcasting coded signals on two frequencies. The first Block I satellite, Navstar 1, was launched on 22 February 1978 from Vandenberg on an Atlas rocket. Ten more Block I satellites followed by 1985, enough to test the concept a few hours a day. Roger Easton at NRL, Ivan Getting at Aerospace Corporation and Parkinson are usually named as the system's principal originators; Gladys West's geodetic modelling at the Naval Surface Warfare Center underpinned the Earth model.

Civilian access was a matter of policy. After Soviet fighters shot down Korean Air Lines Flight 007 in 1983, which had strayed off course, President Reagan announced that GPS would be available to civilian aircraft. The Block II constellation was launched from 1989, the first Gulf War of 1991 demonstrated the system's military value with receivers hastily bought from commercial suppliers, and full operational capability with 24 satellites was declared in July 1995. Civilian signals were deliberately degraded by Selective Availability until President Clinton switched it off in May 2000, at which point accuracy improved overnight from about 100 metres to about 10.

Beyond navigation, GPS became the world's clock. Its timing signals synchronise cellular networks, power grids and financial exchanges. Its receivers shrank from rack-mounted units to a chip costing a dollar, and by 2010 were in every smartphone, which is what made mapping, ride hailing and location-based services possible. Russia's GLONASS, Europe's Galileo and China's BeiDou followed the same design. Relativity is not an academic footnote here: the satellite clocks are set to run slow by 38 microseconds per day before launch to compensate for the combined effects of their speed and altitude, and without the correction positions would drift by kilometres within a day.`,
    mechanism: `Each satellite carries rubidium and caesium atomic clocks and continuously broadcasts, on a 1575.42 megahertz carrier, a pseudorandom code unique to it together with a navigation message giving its own orbit and clock corrections. A receiver generates the same code locally and slides it in time until it correlates with the received signal; the shift gives the signal's travel time, and multiplying by the speed of light gives a pseudorange. Because the receiver's own clock is cheap and inaccurate, that range contains a common unknown offset. With four satellites in view, the receiver solves four equations for four unknowns: latitude, longitude, altitude and clock error, which is why every GPS receiver is also an accurate clock. Corrections are applied for ionospheric delay (using two frequencies or a model), for satellite clock drift, and for general and special relativity, which together would otherwise cause an error of about ten kilometres per day.`,
    prerequisites: ['sputnik', 'integrated-circuit', 'einstein-1905', 'radar'],
    consequences: ['smartphone-universal-computer', 'iphone', 'falcon-9-booster-landing', 'tesla-model-s'],
    figures: [
      { name: 'Bradford Parkinson', role: 'Air Force programme director who led the system design' },
      { name: 'Roger Easton', role: 'Naval Research Laboratory, Timation and space-based clocks' },
      { name: 'Ivan Getting', role: 'Aerospace Corporation president, early advocate' },
      { name: 'Gladys West', role: 'Mathematician who modelled the Earth geoid used by the system' },
    ],
    significance: 9,
    significanceJustification: 'GPS made position and precise time a free global utility, the basis of modern logistics, mapping, agriculture, aviation and every location-aware phone application. It is also the timing backbone of telecommunications and power grids.',
    domains: ['transportation', 'space', 'information', 'weapons-security'],
    sources: [
      { author: 'Bradford W. Parkinson and James J. Spilker Jr. (editors)', title: 'Global Positioning System: Theory and Applications', publisher: 'American Institute of Aeronautics and Astronautics', year: 1996 },
      { author: 'National Research Council', title: 'The Global Positioning System: A Shared National Asset', publisher: 'National Academy Press', year: 1995 },
      { author: 'Bradford W. Parkinson', title: 'Origins, Evolution, and Future of Satellite Navigation', publisher: 'Journal of Guidance, Control, and Dynamics', year: 1997 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'visicalc',
    epochId: 'microprocessor-pc',
    date: { year: 1979, month: 10, precision: 'year', display: 'October 1979' },
    location: 'Cambridge, Massachusetts, United States',
    title: 'VisiCalc, the first spreadsheet',
    summary: 'Dan Bricklin and Bob Frankston\'s VisiCalc, released for the Apple II in October 1979, was the first electronic spreadsheet and the first application that by itself justified buying a personal computer.',
    explanation: `In the spring of 1978 Dan Bricklin, a former Digital Equipment programmer studying for an MBA at Harvard Business School, watched a professor work through a financial case on the blackboard and erase and recompute a column every time an assumption changed. He imagined a screen on which the numbers would recompute themselves: a word processor for figures, with a calculator and a grid of cells that referred to one another. Over the following year he and Bob Frankston, a friend from MIT, wrote it for the Apple II, Frankston coding at night on a time-shared minicomputer to save money. Their company was Software Arts; the publisher, Dan Fylstra's Personal Software, named the product VisiCalc, for visible calculator. It went on sale in October 1979 at 100 dollars.

The idea was not entirely without precedent. Richard Mattessich had described computerised spreadsheets for accounting in 1961, and LANPAR, a timesharing system from 1969, had forward-referencing cells. What VisiCalc added was immediacy and ownership: the model was on your own machine, you saw the whole grid, you typed a formula in a cell and watched the dependent cells change. The cell-reference notation, A1 and B2, the slash commands, the replicate function and the distinction between relative and absolute references all originated in VisiCalc and survive in Excel.

The commercial effect was described at the time as a killer application, a phrase coined for it. Accountants and managers who had no interest in computing bought an Apple II because it ran VisiCalc, and stores reported customers asking for the software first and the computer second. Roughly 700,000 copies were sold in six years. It did for Apple what Lotus 1-2-3, written by former VisiCalc marketer Mitch Kapor and released in January 1983, then did for the IBM PC: Lotus exploited the PC's larger memory and added charts and a database, and quickly displaced VisiCalc, whose two companies were by then suing each other. Lotus bought Software Arts in 1985 and discontinued the product. Microsoft Excel, first for the Macintosh in 1985 and Windows in 1987, took the market in turn.

The spreadsheet's deeper effect was on how organisations reasoned. Financial modelling had been the preserve of a few analysts with mainframe time; after VisiCalc anyone could build a model, and the what-if question became the standard form of business argument. Leveraged buyouts, corporate budgeting, and much of modern finance run on spreadsheets, as do a great many errors. Bricklin and Frankston did not patent the idea; software patents were then thought unobtainable, and their lawyers advised against trying.`,
    mechanism: `The screen shows a window onto a grid of cells addressed by column letter and row number. Each cell holds either a label, a number, or a formula written in terms of other cells and arithmetic operators and functions such as SUM and AVERAGE. When a cell changes, the program recalculates the sheet, in the original version by sweeping row by row or column by column (the user chose which) rather than by dependency analysis, so that a formula referring to a cell not yet recomputed could display a stale value for one pass. Formulas are stored in a compact tokenised form and the grid is a sparse structure in the Apple II's 32 kilobytes of memory. Commands are invoked by typing a slash followed by a letter, and the replicate command copies a formula to a range while adjusting relative references, which is what makes building a large model quick.`,
    prerequisites: ['apple-ii', 'altair-8800', 'fortran'],
    consequences: ['ibm-pc', 'windows-95', 'macintosh'],
    figures: [
      { name: 'Dan Bricklin', role: 'Conceived and designed VisiCalc' },
      { name: 'Bob Frankston', role: 'Wrote the VisiCalc program' },
      { name: 'Dan Fylstra', role: 'Publisher, Personal Software' },
    ],
    significance: 7,
    significanceJustification: 'VisiCalc established the spreadsheet, still the most widely used tool for quantitative reasoning in business, and proved that a single application could sell a computer. It is the origin of the concept of the killer app.',
    domains: ['information', 'computation'],
    sources: [
      { author: 'Dan Bricklin', title: 'Bricklin on Technology', publisher: 'Wiley', year: 2009 },
      { author: 'Martin Campbell-Kelly', title: 'From Airline Reservations to Sonic the Hedgehog: A History of the Software Industry', publisher: 'MIT Press', year: 2003 },
      { author: 'Dan Bricklin', title: 'VisiCalc: Information from its creators, Dan Bricklin and Bob Frankston', publisher: 'bricklin.com', year: 1999, url: 'http://www.bricklin.com/visicalc.htm' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'space-shuttle',
    epochId: 'microprocessor-pc',
    date: { year: 1981, month: 4, day: 12, precision: 'exact', display: '12 April 1981' },
    location: 'Kennedy Space Center, Florida, United States',
    title: 'The Space Shuttle',
    summary: 'Columbia lifted off on 12 April 1981 as the first reusable, winged, crewed orbital vehicle; over 135 flights the Shuttle launched Hubble and built the International Space Station, but never delivered the low cost or safety promised, and two of its five orbiters were lost with all crew.',
    explanation: `On 12 April 1981, twenty years to the day after Gagarin's flight, the orbiter Columbia lifted off from Kennedy Space Center with John Young and Robert Crippen aboard, orbited the Earth 36 times and landed on the dry lake bed at Edwards Air Force Base. It was the first time a new crewed spacecraft had flown with people on its maiden launch, and the first time a spacecraft had returned from orbit to land on a runway.

The Shuttle was conceived in the aftermath of Apollo, when NASA sought a programme that would keep it in business and promised to make spaceflight routine. The plan of 1969 was for a fully reusable two-stage vehicle serving a space station; the Nixon administration approved in January 1972 a cheaper compromise. The winged orbiter would be reused, its three main engines fed by a disposable external tank, with two solid rocket boosters recovered from the sea. The Air Force required a large payload bay and cross-range for polar missions, which set the size. NASA argued that flying fifty times a year would cut costs to a fraction of expendable rockets; the actual rate never exceeded nine flights a year and the cost per flight, fully accounted, was around 1.5 billion dollars.

Technically the vehicle was extraordinary. The main engines were the first large staged-combustion hydrogen engines, running at chamber pressures far above any predecessor. The thermal protection was some 24,000 individually shaped silica tiles and reinforced carbon-carbon leading edges. The flight computers, five redundant IBM units, flew the vehicle through a re-entry that no human could control by hand. Five orbiters were built: Columbia, Challenger, Discovery, Atlantis and Endeavour.

Two were destroyed. Challenger broke up 73 seconds after launch on 28 January 1986 when an O-ring seal in a solid booster failed in cold weather; the Rogers Commission found that the risk was known and normalised. Columbia broke up on re-entry on 1 February 2003 after foam from the external tank had punched a hole in a wing at launch. Fourteen astronauts died. The accident investigations became foundational texts in the study of organisational failure.

Between the accidents the Shuttle did things nothing else could. It launched and, five times, serviced the Hubble Space Telescope, deployed the Galileo, Magellan and Ulysses probes, flew Spacelab, and carried most of the modules of the International Space Station. The programme ended with Atlantis in July 2011 after 135 missions. Its long shadow is on the private launch industry that followed: SpaceX's design philosophy of cheap expendable rockets, then vertical booster recovery, was a deliberate reaction to what the Shuttle had promised and failed to deliver.`,
    mechanism: `At launch the three RS-25 main engines, burning liquid hydrogen and oxygen from the external tank, ignite and are checked for six seconds before the two solid rocket boosters fire; together they produce about 30 meganewtons of thrust. The boosters burn out at two minutes and parachute into the Atlantic for recovery. The main engines shut down at about eight and a half minutes, the tank is jettisoned to burn up over the ocean, and small orbital manoeuvring engines complete insertion. In orbit the payload bay doors open to expose radiators. For return, the orbiter fires the manoeuvring engines against its direction of travel, turns nose-forward and enters the atmosphere at 40 degrees pitch, so the tiled underside takes the heat while a series of banked S-turns bleeds off speed; the computers fly the hypersonic phase. The vehicle then glides unpowered, at a descent angle seven times steeper than an airliner, to a single landing attempt.`,
    prerequisites: ['apollo-11', 'v2-rocket', 'jet-engine', 'integrated-circuit'],
    consequences: ['hubble-telescope', 'falcon-9-dragon', 'starship-flights'],
    figures: [
      { name: 'John Young', role: 'Commander of the first Shuttle flight' },
      { name: 'Robert Crippen', role: 'Pilot of the first Shuttle flight' },
      { name: 'Maxime Faget', role: 'NASA engineer who led the orbiter concept design' },
    ],
    significance: 7,
    significanceJustification: 'The Shuttle was the first reusable orbital vehicle and the workhorse that built the space station and launched Hubble, while its costs and two fatal accidents reshaped how governments and companies think about human spaceflight. Its failures motivated the commercial launch industry.',
    domains: ['space', 'transportation'],
    sources: [
      { author: 'T. A. Heppenheimer', title: 'The Space Shuttle Decision: NASA\'s Search for a Reusable Space Vehicle', publisher: 'NASA History Office, SP-4221', year: 1999 },
      { author: 'Dennis R. Jenkins', title: 'Space Shuttle: The History of the National Space Transportation System', publisher: 'Dennis R. Jenkins', year: 2001 },
      { author: 'Presidential Commission on the Space Shuttle Challenger Accident', title: 'Report of the Presidential Commission on the Space Shuttle Challenger Accident', publisher: 'United States Government Printing Office', year: 1986 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'ibm-pc',
    epochId: 'microprocessor-pc',
    date: { year: 1981, month: 8, day: 12, precision: 'exact', display: '12 August 1981' },
    location: 'IBM Entry Systems Division, Boca Raton, Florida, United States',
    title: 'The IBM Personal Computer',
    summary: 'IBM announced the Model 5150 Personal Computer on 12 August 1981, built from off-the-shelf parts with an Intel 8088 and Microsoft\'s DOS; its open architecture made the PC the industry standard and handed control of that standard to Intel and Microsoft.',
    explanation: `By 1980 IBM, the largest computer company in the world, had watched Apple, Tandy and Commodore sell hundreds of thousands of small machines and worried that its customers were buying them. Its normal development process took four or five years. Instead, a group in Boca Raton under Bill Lowe and then Don Estridge was given a year and freedom from corporate rules. Project Chess bought its parts from outside: an Intel 8088 processor, a 16-bit chip with an 8-bit bus chosen because it was cheap and available, memory and disk drives from suppliers, a monitor from IBM Japan, and an operating system from Microsoft, a small company in Bellevue, Washington.

The operating system story has become legend. IBM first approached Digital Research, whose CP/M was the standard for 8-bit business machines; the negotiations stalled, and Microsoft, which had agreed to supply BASIC, offered to provide an operating system as well. Microsoft bought a CP/M work-alike called 86-DOS from Seattle Computer Products for a total of about 75,000 dollars, adapted it, and licensed it to IBM as PC-DOS while keeping the right to sell it to others as MS-DOS. That clause, agreed by IBM because it saw the money in hardware, decided the fortunes of both companies.

The IBM PC was announced on 12 August 1981 at the Waldorf-Astoria in New York, at 1,565 dollars for a base model with 16 kilobytes of memory and no disk drives. It was not technically advanced, but it carried the name IBM, which meant corporate purchasing departments could buy it, and it was open: the technical reference manual published the full circuit schematics and the BIOS source code, and the expansion bus was documented so that anyone could build cards. Within two years the PC held a quarter of the market. Lotus 1-2-3 gave it a spreadsheet, and dBase and WordPerfect followed.

Openness cut both ways. Compaq shipped a legally reverse-engineered compatible in 1983, Phoenix Technologies sold a clean-room BIOS to all comers in 1984, and by 1986 there were more clones than IBMs. IBM's attempt to regain control with the proprietary PS/2 and OS/2 in 1987 failed; the market followed Intel's processors and Microsoft's software wherever the cheapest box could be found. IBM sold its PC business to Lenovo in 2005.

The IBM PC therefore created something that had not existed before: a hardware standard owned by no one, on which a global industry of components, assemblers and software could compete. That standard, the x86 PC, is still the architecture of most desktop and laptop computers and most servers in the world's data centres.`,
    mechanism: `The Intel 8088 processor runs at 4.77 megahertz with a 16-bit internal architecture, a 20-bit address space of one megabyte and an 8-bit external data bus. The motherboard holds the processor, an optional 8087 floating-point coprocessor, up to 64 kilobytes of memory, a ROM containing the Basic Input/Output System and Cassette BASIC, and five expansion slots on an 8-bit bus. The BIOS provides low-level routines for keyboard, display, disk and serial ports, which the operating system calls through software interrupts; this layering is what let DOS and applications run on clones with different hardware. Display, disk controllers and printer ports are all expansion cards, so a buyer chose between a monochrome text adapter and a colour graphics adapter. PC-DOS loads from a floppy disk, offers a command line, and hands the whole machine to one program at a time.`,
    prerequisites: ['altair-8800', 'apple-ii', 'visicalc', 'intel-4004'],
    consequences: ['windows-95', 'linux', 'macintosh', 'e-commerce-amazon'],
    figures: [
      { name: 'Don Estridge', role: 'Led the IBM PC development team' },
      { name: 'Bill Lowe', role: 'Proposed and launched the project at IBM' },
      { name: 'Bill Gates', role: 'Microsoft, supplier of PC-DOS and BASIC' },
    ],
    significance: 9,
    significanceJustification: 'The IBM PC legitimised personal computers for business and, through its open design, created the x86 standard that still underlies most computing. It made Intel and Microsoft the dominant firms of the following two decades.',
    domains: ['computation', 'information', 'manufacturing'],
    sources: [
      { author: 'James Chposky and Ted Leonsis', title: 'Blue Magic: The People, Power and Politics Behind the IBM Personal Computer', publisher: 'Facts on File', year: 1988 },
      { author: 'Paul Carroll', title: 'Big Blues: The Unmaking of IBM', publisher: 'Crown', year: 1993 },
      { author: 'Martin Campbell-Kelly and William Aspray', title: 'Computer: A History of the Information Machine', publisher: 'Basic Books', year: 1996 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'compact-disc',
    epochId: 'microprocessor-pc',
    date: { year: 1982, month: 10, day: 1, precision: 'exact', display: '1 October 1982' },
    location: 'Tokyo, Japan (Sony) and Eindhoven, Netherlands (Philips)',
    title: 'The compact disc',
    summary: 'The compact disc, developed jointly by Philips and Sony and launched in Japan on 1 October 1982, stored an hour of music as digital data read by a laser, and its CD-ROM variant became the first mass distribution medium for software.',
    explanation: `The compact disc was the first digital medium most people ever held. On 1 October 1982 Sony put the CDP-101 player on sale in Japan alongside about fifty titles from CBS/Sony, the first pressed being Billy Joel's 52nd Street. Philips launched in Europe a month later and the format reached the United States in March 1983. Within six years CD sales in the United States overtook vinyl, and by the mid 1990s the disc had also become the standard way to ship computer software and reference works.

Philips had been developing a video disc read by laser since the late 1960s, released as LaserVision in 1978, and its audio engineers proposed a smaller disc for sound in 1974. At the same time Sony had built digital audio recorders using pulse-code modulation and shown a prototype optical digital audio disc in 1976. Rather than fight a format war of the kind then raging between VHS and Betamax, the two companies formed a joint task force in 1979, with Kees Schouhamer Immink and Toshitada Doi among the lead engineers, and by June 1980 had agreed the Red Book standard. Sony insisted on 16-bit samples rather than Philips's 14; the sampling rate of 44.1 kilohertz came from the video recorders then used to master digital audio. The diameter of 120 millimetres and the playing time of 74 minutes are the subject of a story, that Sony's Norio Ohga demanded room for Beethoven's Ninth Symphony, which is true in spirit but was also convenient to Philips's factory tooling.

The disc's engineering was ahead of its market. Reading a track 0.5 micrometres wide from a disc spinning at several hundred revolutions per minute required a semiconductor laser, a precision servo and cross-interleaved Reed-Solomon error correction able to reconstruct data across a 2.5 millimetre scratch. The laser diodes came from Sharp and the mass production of the pickup drove down the cost of optical components generally. Philips and Sony licensed the format to all manufacturers on equal terms, which is why players from every company played every disc.

CD-ROM, standardised in 1985 with the Yellow Book, stored 650 megabytes when a hard disk held 20, and by 1990 was carrying encyclopaedias, software libraries and, from 1993, games such as Myst that used the space for images and video. Windows 95 shipped on CD-ROM. The recordable CD-R of 1988 and the MP3 encoder of the early 1990s together let listeners copy discs to computers, which in turn made file sharing and then the iPod possible, and undermined the format's own business. Audio CD sales peaked in 2000; the disc's real legacy is the optical storage industry, DVD and Blu-ray, and the habit of thinking of music as a file.`,
    mechanism: `Sound is sampled 44,100 times per second in each of two channels and each sample quantised to 16 bits. The bit stream is interleaved and protected by two layers of Reed-Solomon code, then converted by eight-to-fourteen modulation into a channel code whose runs of identical bits are between three and eleven long, which suits the optical system. The data are pressed as a spiral track of pits about 0.5 micrometres wide and 0.1 micrometres deep in polycarbonate, coated with reflective aluminium and lacquer, running from the centre outward for about five kilometres. A 780 nanometre infrared laser diode is focused through the disc's clear substrate onto the pits; the pit depth is a quarter wavelength in polycarbonate, so light reflected from a pit interferes destructively with light from the surrounding land, and a photodiode sees transitions at pit edges as ones. Servo loops keep the beam focused and on track at constant linear velocity.`,
    prerequisites: ['laser', 'shannon-information-theory', 'integrated-circuit'],
    consequences: ['ipod', 'windows-95'],
    figures: [
      { name: 'Kees Schouhamer Immink', role: 'Philips engineer who designed the channel coding' },
      { name: 'Toshitada Doi', role: 'Sony engineer leading digital audio development' },
      { name: 'Norio Ohga', role: 'Sony executive who championed the format' },
    ],
    significance: 6,
    significanceJustification: 'The compact disc brought digital storage and error-corrected optical reading into every home and established the cross-licensed format model that later governed DVD. As CD-ROM it was the first medium capable of distributing large software and reference works.',
    domains: ['information', 'materials'],
    sources: [
      { author: 'Kees A. Schouhamer Immink', title: 'The Compact Disc Story', publisher: 'Journal of the Audio Engineering Society', year: 1998 },
      { author: 'Ken C. Pohlmann', title: 'The Compact Disc Handbook', publisher: 'A-R Editions', year: 1992 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'cell-phone',
    epochId: 'microprocessor-pc',
    date: { year: 1983, month: 10, precision: 'year', display: '1983 (commercial service); first handheld call 3 April 1973' },
    location: 'Chicago, Illinois and New York City, United States',
    title: 'The cellular telephone',
    summary: 'Martin Cooper of Motorola made the first call from a handheld cellular phone in New York on 3 April 1973; commercial cellular service and the Motorola DynaTAC 8000X arrived in the United States in 1983, beginning the mobile revolution.',
    explanation: `On 3 April 1973 Martin Cooper, a Motorola engineer, stood on Sixth Avenue in Manhattan and telephoned Joel Engel, his rival at Bell Labs, from a prototype handset weighing over a kilogram. It was the first public call from a handheld cellular telephone. Ten years passed before anyone could buy one. The Federal Communications Commission approved Motorola's DynaTAC 8000X on 21 September 1983, and on 13 October 1983 Ameritech opened the first commercial American cellular network in Chicago. The phone cost 3,995 dollars, offered thirty minutes of talk time for ten hours of charging, and had a waiting list.

The cellular idea itself came from Bell Labs. Mobile radiotelephones had existed since 1946, but each city had one high-power transmitter and a few dozen channels, so that waiting lists ran to years. In a 1947 memorandum Douglas Ring and Rae Young proposed dividing a city into small cells, each with a low-power base station, reusing the same frequencies in cells far enough apart not to interfere, and handing a call from cell to cell as the user moved. The concept needed computers cheap enough to track every call and switch it between cells, which is why it waited until the 1970s. Bell Labs' Advanced Mobile Phone Service, described in a 1979 issue of the Bell System Technical Journal by Engel, Richard Frenkiel and others, was trialled in Chicago in 1978 with car phones. Motorola, which feared being shut out if AT&T controlled the market, pushed the FCC to license two carriers in each market and built the handheld to prove that the phone need not live in a car.

Adoption was faster than anyone had forecast. AT&T's consultants had estimated a market of 900,000 American subscribers by 2000; there were over 100 million. Nordic countries had launched NMT, the first fully automatic international system, in 1981, and their lead in the analogue generation carried Nokia and Ericsson into dominance of the digital second generation. GSM, agreed in Europe in 1987 and launched in Finland in 1991, moved the network to digital signalling, added the SIM card and the text message, and became the world standard outside the Americas and Japan. By 1995 there were about 90 million subscribers worldwide; by 2002 mobile subscriptions outnumbered fixed lines.

The cellular phone's deepest effect was in places that had never had wired telephones. Sub-Saharan Africa and South Asia leapt directly to mobile, and the phone became the platform for payments, market information and identity. The handset's demand for small, light, long-lived batteries drove the commercialisation of lithium-ion cells, and its convergence with the personal computer produced the smartphone.`,
    mechanism: `A service area is divided into cells, each served by a base station with a low-power transceiver; in the first analogue systems the cell radius was a few kilometres. The available channels are divided into sets, and each set is reused in cells sufficiently far apart that co-channel interference is acceptable, so a city with a few hundred channels can serve many thousands of simultaneous calls. When a handset is switched on it listens for the strongest control channel and registers with the mobile switching centre, which records its location. A call is assigned a voice channel pair; as the user moves, the base stations measure signal strength and the switching centre orders a handoff, instructing the handset to retune to a channel in the next cell in a fraction of a second. The switching centre connects the call to the fixed telephone network and tracks the subscriber for billing.`,
    prerequisites: ['telephone', 'marconi-wireless', 'transistor', 'integrated-circuit'],
    consequences: ['lithium-ion-battery', 'iphone', 'smartphone-universal-computer', 'bluetooth'],
    figures: [
      { name: 'Martin Cooper', role: 'Motorola engineer who led the DynaTAC handset' },
      { name: 'Joel Engel', role: 'Bell Labs, AMPS system design' },
      { name: 'Richard Frenkiel', role: 'Bell Labs, cellular system architecture' },
    ],
    significance: 9,
    significanceJustification: 'The cellular phone made person-to-person communication independent of place and became the most widely owned electronic device in history. It created the demand and the industrial base for the smartphone.',
    domains: ['communication', 'information'],
    sources: [
      { author: 'Martin Cooper', title: 'Cutting the Cord: The Cell Phone Has Transformed Humanity', publisher: 'RosettaBooks', year: 2020 },
      { author: 'Martin Cooper, Richard W. Dronsuth, Albert J. Mikulski, Charles N. Lynk Jr., James J. Mikulski, John F. Mitchell, Roy A. Richardson and John H. Sangster', title: 'Radio telephone system, United States Patent 3,906,166', publisher: 'United States Patent and Trademark Office', year: 1975 },
      { author: 'W. R. Young', title: 'Advanced Mobile Phone Service: Introduction, Background, and Objectives', publisher: 'Bell System Technical Journal', year: 1979 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'pcr',
    epochId: 'microprocessor-pc',
    date: { year: 1983, month: 4, precision: 'year', display: '1983 (conceived); published 1985' },
    location: 'Cetus Corporation, Emeryville, California, United States',
    title: 'The polymerase chain reaction',
    summary: 'Kary Mullis at Cetus conceived the polymerase chain reaction in 1983; by 1985 the technique could copy a chosen stretch of DNA a millionfold in a few hours, and with a heat-stable polymerase from 1988 it became the basic operation of molecular biology, forensics and diagnostics.',
    explanation: `The polymerase chain reaction is a way of making unlimited copies of a chosen piece of DNA from a tiny starting sample. Kary Mullis, a chemist synthesising short DNA strands at the biotechnology company Cetus, said the idea came to him on a night drive to Mendocino in April 1983: if two short primers were made to bind on opposite strands flanking a target, a polymerase would extend each toward the other, and repeating the cycle would double the target each time. Thirty cycles would give a billionfold amplification.

Turning the sketch into a method took two years and several colleagues, and the distribution of credit remains contested. Mullis's first experiments in late 1983 were inconclusive. Cetus assigned a team, and it was Randall Saiki, Stephen Scharf, Fred Faloona, Henry Erlich and Norman Arnheim who produced the first working protocol, applied it to diagnosing sickle-cell anaemia from the beta-globin gene, and published in Science in December 1985. Mullis and Faloona's methods paper followed in 1987. The early procedure was laborious: the polymerase from E. coli was destroyed by the heat needed to separate the strands, so fresh enzyme had to be added every cycle by hand. The decisive improvement, published by Saiki and colleagues in 1988, was to use the polymerase of Thermus aquaticus, a bacterium isolated from a Yellowstone hot spring by Thomas Brock in 1969, which survives boiling. With Taq polymerase the reaction could be run unattended in a programmable heating block, and Cetus and Perkin-Elmer sold the first thermal cyclers that year.

Mullis received the 1993 Nobel Prize in Chemistry alone and a 10,000 dollar bonus from Cetus, which sold the patents to Hoffmann-La Roche in 1991 for 300 million dollars. Cetus scientists and the historian Paul Rabinow have argued that PCR was a collective achievement; a court case brought by DuPont, which claimed that the principle had been anticipated by Har Gobind Khorana's laboratory in 1971, failed in 1991.

The technique's applications are hard to overstate. It let forensic scientists type DNA from a single hair, made prenatal and infectious-disease diagnosis routine, allowed ancient DNA to be recovered from bones, and underlies the reverse-transcription tests used to detect viruses, including the tests on which the response to COVID-19 depended. In research it replaced cloning for most purposes, making sequencing, mutagenesis and genotyping fast enough to attempt on the scale of whole genomes. Quantitative PCR, which measures the amount of a sequence in real time, and digital PCR followed. Almost every experiment in modern molecular biology contains a PCR step somewhere.`,
    mechanism: `A reaction tube contains the DNA template, two synthetic primers of about twenty bases complementary to the sequences flanking the target on opposite strands, the four nucleotide building blocks, a heat-stable DNA polymerase and magnesium buffer. The mixture is heated to about 95 degrees Celsius to separate the double helix into single strands, cooled to about 55 degrees so that primers anneal to their complementary sites, and warmed to 72 degrees, the optimum for Taq polymerase, which extends each primer by adding nucleotides in the direction of the other primer. After one cycle there are two copies of the region; after the second cycle, products bounded by the primers at both ends appear, and from then on those defined fragments double each cycle. Thirty cycles in a thermal cycler take about two hours and yield roughly a billion copies, enough to see as a band on a gel or to sequence.`,
    prerequisites: ['recombinant-dna', 'dna-double-helix'],
    consequences: ['human-genome-project-launch', 'human-genome-completion', 'crispr-discovery', 'mrna-vaccines'],
    figures: [
      { name: 'Kary Mullis', role: 'Conceived PCR; Nobel Prize in Chemistry 1993' },
      { name: 'Randall Saiki', role: 'Cetus scientist who developed the working protocol and Taq PCR' },
      { name: 'Henry Erlich', role: 'Led the Cetus PCR group' },
    ],
    significance: 9,
    significanceJustification: 'PCR made DNA copyable on demand and is the operation on which genomics, forensics, molecular diagnostics and much of modern biology are built. Its reach extends from paternity tests to pandemic surveillance.',
    domains: ['biology-medicine', 'information'],
    sources: [
      { author: 'Randall K. Saiki, Stephen Scharf, Fred Faloona, Kary B. Mullis, Glenn T. Horn, Henry A. Erlich and Norman Arnheim', title: 'Enzymatic Amplification of beta-Globin Genomic Sequences and Restriction Site Analysis for Diagnosis of Sickle Cell Anemia', publisher: 'Science', year: 1985, url: 'https://doi.org/10.1126/science.2999980' },
      { author: 'Randall K. Saiki, David H. Gelfand, Susanne Stoffel, Stephen J. Scharf, Russell Higuchi, Glenn T. Horn, Kary B. Mullis and Henry A. Erlich', title: 'Primer-directed enzymatic amplification of DNA with a thermostable DNA polymerase', publisher: 'Science', year: 1988, url: 'https://doi.org/10.1126/science.2448875' },
      { author: 'Paul Rabinow', title: 'Making PCR: A Story of Biotechnology', publisher: 'University of Chicago Press', year: 1996 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'macintosh',
    epochId: 'microprocessor-pc',
    date: { year: 1984, month: 1, day: 24, precision: 'exact', display: '24 January 1984' },
    location: 'Cupertino, California, United States',
    title: 'The Apple Macintosh',
    summary: 'Apple introduced the Macintosh on 24 January 1984, the first mass-market computer with a graphical interface and mouse, at 2,495 dollars; it brought the ideas of Xerox PARC to ordinary buyers and set the form of personal computing for the following decades.',
    explanation: `The Macintosh was introduced by Steve Jobs at Apple's annual shareholder meeting in Cupertino on 24 January 1984, two days after a television advertisement directed by Ridley Scott, shown during the Super Bowl, had promised that 1984 would not be like 1984. Jobs pulled the machine from a bag, a beige box with a nine-inch black and white screen, a keyboard and a mouse, and let it introduce itself in a synthesised voice. It cost 2,495 dollars.

The project had begun in 1979 under Jef Raskin as an idea for an inexpensive appliance computer named after his favourite apple. Jobs took it over in 1981 after being pushed off the Lisa project, Apple's expensive first graphical machine, and turned it into a cheaper vehicle for the interface Apple had seen at Xerox PARC in 1979 and had been reworking ever since. The team of about a hundred, including Burrell Smith on hardware, Andy Hertzfeld and Bill Atkinson on software and Susan Kare on icons and fonts, worked under a pirate flag in a building apart from the rest of Apple. Atkinson's QuickDraw graphics library and his invention of regions made overlapping windows fast on a 68000 processor with 128 kilobytes of memory; the menu bar, pull-down menus, the Finder and the trash can were refined into the form that Windows and every later interface would copy.

The first machine was underpowered: too little memory, one floppy drive, no hard disk and, at launch, only MacWrite and MacPaint to run. Sales fell sharply after the first months, and Jobs was removed from operating responsibility in 1985 and left the company. What saved the Macintosh was desktop publishing. Apple's LaserWriter of 1985, with Adobe's PostScript language, and Aldus PageMaker let a small office produce typeset pages for a fraction of the previous cost; the Macintosh II of 1987 added colour and expansion slots, and the platform found a durable home in publishing, design, education and music.

Microsoft, which had written applications for the Macintosh before its launch, shipped Windows 1.0 in 1985, and Apple's 1988 lawsuit claiming that Windows copied the Macintosh look and feel failed in 1994, the courts holding that Apple had licensed the elements and could not own the desktop metaphor. That decision, and the cheapness of PC clones, gave Windows the mass market, while the Macintosh survived as a minority platform until Jobs's return in 1997 and the iMac of 1998. The Macintosh's lasting contribution is that it made the graphical interface the expected way to use a computer; within a decade of its launch, command lines were for specialists.`,
    mechanism: `A Motorola 68000 processor at 7.8 megahertz drives a 512 by 342 pixel bitmapped display from a frame buffer in main memory, sharing the memory bus with the video circuit. The operating system's Toolbox, held in 64 kilobytes of ROM, provides window, menu, dialog, font and event managers that applications call, so every program shares one look and behaviour. QuickDraw draws text and shapes into windows and uses regions, compact descriptions of arbitrary pixel areas, to clip drawing to the visible parts of overlapping windows and to redraw only what changes. A single-button mouse reports motion through an optical encoder; the system polls it and the keyboard into an event queue that the running application drains, dispatching clicks to menus, window controls or content. A 400 kilobyte 3.5 inch floppy drive with a variable-speed motor holds the system and applications.`,
    prerequisites: ['xerox-parc-gui', 'apple-ii', 'ibm-pc', 'visicalc'],
    consequences: ['windows-95', 'iphone', 'mosaic-netscape'],
    figures: [
      { name: 'Steve Jobs', role: 'Led the Macintosh project from 1981' },
      { name: 'Jef Raskin', role: 'Originated the Macintosh project' },
      { name: 'Bill Atkinson', role: 'Author of QuickDraw and MacPaint' },
      { name: 'Andy Hertzfeld', role: 'Principal system software designer' },
      { name: 'Susan Kare', role: 'Designer of icons and fonts' },
    ],
    significance: 8,
    significanceJustification: 'The Macintosh made the graphical user interface a consumer product and fixed the conventions (menu bar, desktop, drag and drop) that Windows and later systems adopted. It also created desktop publishing.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Andy Hertzfeld', title: 'Revolution in the Valley: The Insanely Great Story of How the Mac Was Made', publisher: "O'Reilly Media", year: 2004 },
      { author: 'Steven Levy', title: 'Insanely Great: The Life and Times of Macintosh, the Computer That Changed Everything', publisher: 'Viking', year: 1994 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'automated-dna-sequencer',
    epochId: 'microprocessor-pc',
    date: { year: 1986, month: 6, precision: 'year', display: '1986 (Nature paper June 1986; ABI 370A instrument)' },
    location: 'California Institute of Technology, Pasadena and Applied Biosystems, Foster City, California, United States',
    title: 'The automated DNA sequencer',
    summary: 'Leroy Hood\'s laboratory at Caltech replaced radioactive labels with four fluorescent dyes read by a laser, and Applied Biosystems turned the method into the ABI 370A in 1986, the first automated DNA sequencer and the instrument that made genome projects feasible.',
    explanation: `In 1977 Frederick Sanger in Cambridge had published the chain-termination method of reading DNA, and Walter Gilbert and Allan Maxam at Harvard a chemical alternative. Both were slow, manual and dependent on radioactive phosphorus. A skilled technician could read a few hundred bases a day from an X-ray film of a gel, and the ambition of reading a whole human genome, three billion bases, was plainly beyond hand labour. Leroy Hood at the California Institute of Technology had already automated the synthesis of proteins and DNA and set out to automate their reading.

The method was worked out by Lloyd Smith, a postdoctoral chemist in Hood's laboratory, with Michael and Tim Hunkapiller, Charles Connell and others, and published in Nature in June 1986. Sanger's reaction produces a ladder of DNA fragments, each ending at a particular base; Smith attached a different fluorescent dye to the primer for each of the four bases, so that all four reactions could be combined in one lane of a gel and read by a laser as the fragments passed a detector in order of length. A computer recorded the sequence of colours as the sequence of bases. Hood, who had been refused development funding by the National Institutes of Health, licensed the design to Applied Biosystems, a company founded in 1981 to commercialise his protein sequencer; ABI's 370A shipped in 1986 and Hood's group and ABI published on it in 1987.

The first instruments read about a dozen samples of a few hundred bases each per run and were expensive, but they replaced film, autoradiography and manual reading with a data file, and their output improved steadily. Craig Venter at the NIH was an early user and in 1991 used ABI machines to sequence expressed gene fragments at a rate that alarmed the Human Genome Project's planners. Dye-terminator chemistry, in which the dye is attached to the terminating nucleotide rather than the primer, simplified the reaction, and the replacement of slab gels by arrays of capillaries in the ABI 3700 of 1998 raised throughput enough for Celera to sequence the human genome in about a year. Most of the public Human Genome Project's finished sequence was also produced on ABI capillary machines.

The automated sequencer therefore did for reading DNA what the microprocessor had done for computation: it made a quantity that had been measured in bases per person per day into one measured in megabases per machine per day, falling in cost by orders of magnitude. Hood's laboratory went on to found the field of systems biology, and the next generation of sequencers after 2005 (Illumina and others) changed the chemistry again, but the four-colour fluorescent readout remains the basis of Sanger sequencing used today for verifying every clone and diagnostic sample.`,
    mechanism: `Sanger sequencing copies a single-stranded template with DNA polymerase from a primer, in a mixture containing normal nucleotides and a small proportion of dideoxynucleotides that lack the hydroxyl group needed to extend the chain; wherever one is incorporated the copy stops. The result is a population of fragments of every possible length, each ending at a known base. In the automated version each of the four terminating bases carries a dye fluorescing at a different wavelength, and all four reactions run in one lane. Electrophoresis through a polyacrylamide gel (later a capillary) separates the fragments by length, shorter ones travelling faster. Near the bottom of the gel an argon laser excites the dyes as each fragment band passes, and photomultipliers behind four filters record which colour flashed. Software plots the four channels against time, calls each peak as A, C, G or T, and writes out the sequence with quality scores.`,
    prerequisites: ['recombinant-dna', 'laser', 'dna-double-helix', 'integrated-circuit'],
    consequences: ['human-genome-project-launch', 'human-genome-completion', 'alphafold-2'],
    figures: [
      { name: 'Leroy Hood', role: 'Caltech biologist who led the automation of sequencing' },
      { name: 'Lloyd M. Smith', role: 'Developed the four-colour fluorescent method' },
      { name: 'Michael Hunkapiller', role: 'Instrument developer at Caltech and later president of Applied Biosystems' },
    ],
    significance: 8,
    significanceJustification: 'Automated fluorescent sequencing turned DNA reading into an industrial process and made the Human Genome Project possible. Every genome sequenced before 2005 was read this way.',
    domains: ['biology-medicine', 'information', 'manufacturing'],
    sources: [
      { author: 'Lloyd M. Smith, Jane Z. Sanders, Robert J. Kaiser, Peter Hughes, Chris Dodd, Charles R. Connell, Cheryl Heiner, Stephen B. H. Kent and Leroy E. Hood', title: 'Fluorescence detection in automated DNA sequence analysis', publisher: 'Nature', year: 1986, url: 'https://doi.org/10.1038/321674a0' },
      { author: 'F. Sanger, S. Nicklen and A. R. Coulson', title: 'DNA sequencing with chain-terminating inhibitors', publisher: 'Proceedings of the National Academy of Sciences', year: 1977, url: 'https://doi.org/10.1073/pnas.74.12.5463' },
      { author: 'Leroy Hood and Lee Rowen', title: 'The Human Genome Project: big science transforms biology and medicine', publisher: 'Genome Medicine', year: 2013, url: 'https://doi.org/10.1186/gm483' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'world-wide-web',
    epochId: 'microprocessor-pc',
    date: { year: 1989, month: 3, precision: 'year', display: 'March 1989 proposal; first site December 1990; public release August 1991' },
    location: 'CERN, Geneva, Switzerland',
    title: 'The World Wide Web',
    summary: 'Tim Berners-Lee proposed a hypertext system for CERN in March 1989, wrote the first browser, server and web page by the end of 1990, and released the software freely in 1991; the Web became the interface through which most people use the Internet.',
    explanation: `In March 1989 Tim Berners-Lee, an English physicist and programmer working as a contractor at CERN, the European particle physics laboratory outside Geneva, submitted a document to his manager Mike Sendall titled Information Management: A Proposal. It described the difficulty of finding anything in a laboratory of thousands of transient scientists with incompatible computers, and proposed a distributed hypertext system in which any document could link to any other. Sendall wrote on the cover, vague but exciting, and let him try. Berners-Lee bought a NeXT workstation, and by Christmas 1990, with Robert Cailliau as advocate and collaborator, had written a browser-editor called WorldWideWeb, a server, and the first web page at info.cern.ch, describing the project itself.

The Web joined three things that already existed. Hypertext, the linking of documents, had been imagined by Vannevar Bush in 1945 and named by Ted Nelson in 1965, and demonstrated by Douglas Engelbart in 1968; hypertext products like HyperCard existed but linked only within one machine. The Internet, running TCP/IP, connected machines worldwide, and services such as FTP, Gopher and WAIS already served documents over it. Berners-Lee's contributions were the Uniform Resource Locator, a single address form for anything on any server; HTTP, a trivially simple request-response protocol; and HTML, a small markup language borrowed from the SGML dialect used at CERN for documentation. A link could point anywhere and could fail without breaking anything, which purists considered a defect and turned out to be the reason the system could grow without coordination.

The software was posted to the alt.hypertext newsgroup in August 1991, and a line-mode browser that ran on any terminal let people outside CERN try it. Growth was slow until graphical browsers appeared: ViolaWWW, Erwise, and then Mosaic from the National Center for Supercomputing Applications in 1993, which added inline images and ran on Windows. In April 1993 CERN placed the Web software in the public domain, a decision urged by Berners-Lee because the University of Minnesota had begun charging for Gopher and its use collapsed. By the end of 1993 there were about 500 web servers; by the end of 1994, about 10,000, and the Web accounted for most Internet traffic.

Berners-Lee left CERN in 1994 to found the World Wide Web Consortium at MIT, keeping the standards open and vendor-neutral through the browser wars. The Web's consequences fill the following epochs: search engines, online commerce, encyclopaedias written by their readers, social networks, and the reorganisation of news, advertising, retail, government and scholarship around a medium in which publishing costs nothing. Its design choices, openness, decentralisation and tolerance of broken links, are why it displaced every proprietary online service of the time.`,
    mechanism: `A web page is a text file marked up in HTML, in which tags label headings, paragraphs and, crucially, anchors: an anchor wraps a piece of text with a hypertext reference containing a URL. A URL names a scheme (http), a host, and a path on that host. When a user selects a link, the browser resolves the host name through the Domain Name System, opens a TCP connection to port 80, and sends a one-line request, GET followed by the path. The server finds the file, or runs a program to generate it, and returns a status line, headers giving the content type, and the body. The browser parses the HTML, renders it, fetches any referenced images with further requests, and displays anchors as clickable links. Because the protocol is stateless and links are one-way, servers need no knowledge of who links to them, and any machine can add pages without permission from anyone.`,
    prerequisites: ['tcp-ip', 'arpanet', 'xerox-parc-gui', 'unix'],
    consequences: ['mosaic-netscape', 'google-search', 'wikipedia', 'e-commerce-amazon', 'social-networks'],
    figures: [
      { name: 'Tim Berners-Lee', role: 'Inventor of the Web' },
      { name: 'Robert Cailliau', role: 'Collaborator and advocate at CERN' },
      { name: 'Nicola Pellow', role: 'Wrote the line-mode browser' },
    ],
    significance: 10,
    significanceJustification: 'The Web is the medium through which most of humanity now reads, shops, learns and argues, and it turned the Internet from a research tool into public infrastructure. It is among the largest changes in the distribution of information since printing.',
    domains: ['information', 'communication', 'computation'],
    sources: [
      { author: 'Tim Berners-Lee', title: 'Information Management: A Proposal', publisher: 'CERN', year: 1989, url: 'https://www.w3.org/History/1989/proposal.html' },
      { author: 'Tim Berners-Lee, Robert Cailliau, Jean-Francois Groff and Bernd Pollermann', title: 'World-Wide Web: The Information Universe', publisher: 'Electronic Networking: Research, Applications and Policy', year: 1992 },
      { author: 'Tim Berners-Lee with Mark Fischetti', title: 'Weaving the Web: The Original Design and Ultimate Destiny of the World Wide Web', publisher: 'HarperSanFrancisco', year: 1999 },
      { author: 'James Gillies and Robert Cailliau', title: 'How the Web Was Born: The Story of the World Wide Web', publisher: 'Oxford University Press', year: 2000 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'hubble-telescope',
    epochId: 'microprocessor-pc',
    date: { year: 1990, month: 4, day: 24, precision: 'exact', display: '24 April 1990' },
    location: 'Low Earth orbit, launched from Kennedy Space Center, Florida, United States',
    title: 'The Hubble Space Telescope',
    summary: 'The Hubble Space Telescope was launched by the Shuttle Discovery on 24 April 1990; after its flawed mirror was corrected in 1993 it became the most productive telescope in history, measuring the age of the universe and revealing its accelerating expansion.',
    explanation: `The astronomer Lyman Spitzer argued in 1946 that a telescope above the atmosphere would see with a sharpness and at wavelengths that no ground instrument could match. It took forty-four years. The Large Space Telescope was approved by Congress in 1977 as a joint project of NASA and the European Space Agency, was named for Edwin Hubble in 1983, and was delayed by the Challenger accident. On 24 April 1990 the Shuttle Discovery carried it to a 540 kilometre orbit. It is a 2.4 metre Ritchey-Chretien reflector the size of a bus, with cameras and spectrographs covering ultraviolet, visible and near-infrared light, and it was designed from the start to be serviced by astronauts.

Within weeks it was clear that something was wrong. Stars were surrounded by haloes; the images were barely better than from the ground. The primary mirror had been ground to the wrong shape, too flat at the edge by about two micrometres, because a test instrument at Perkin-Elmer had been assembled with a spacer out of position, and because the discrepancy with other tests had been dismissed. An investigation under Lew Allen reported the failure in November 1990. The telescope became a national joke, and the repair a test of NASA's competence after Challenger.

The fix was elegant. Because the error was precisely known, it could be cancelled by corrective optics of the opposite error. In December 1993 the crew of Endeavour, over five spacewalks, installed COSTAR, a set of small mirrors that fed corrected light to the existing instruments, and a new wide-field camera with the correction built in. The first images in January 1994 were what had been promised. Four more servicing missions, the last in 2009, replaced instruments, gyroscopes and batteries, so that the telescope in its third decade was far more capable than at launch.

Hubble's scientific output is unmatched by any single instrument: over 20,000 papers by the mid 2020s. The Key Project measured the Hubble constant, and hence the age of the universe, to ten percent, settling a decades-long argument at about 13.8 billion years. Its observations of distant supernovae, with ground-based surveys, established in 1998 that the expansion of the universe is accelerating, the discovery of dark energy. The Hubble Deep Field of 1995, a ten-day stare at an apparently empty patch of sky, showed thousands of galaxies reaching back most of the way to the beginning. It imaged the impact of comet Shoemaker-Levy 9 on Jupiter, protoplanetary discs, the atmospheres of exoplanets, and gave the public the images that defined the cosmos for a generation. Its successor, the James Webb Space Telescope, was designed around the questions Hubble raised.`,
    mechanism: `Light enters an aperture door and falls on the 2.4 metre primary mirror, a hyperbolic figure of ultra-low-expansion glass, which reflects it to a secondary mirror and back through a hole in the primary to a focal plane shared by several instruments. Above the atmosphere there is no turbulence, so the image sharpness is set by diffraction alone, about 0.05 arcseconds. Pointing is held to a few thousandths of an arcsecond by reaction wheels and fine guidance sensors that lock onto guide stars; there are no thrusters, since propellant would contaminate the optics. Cameras use charge-coupled devices cooled to reduce noise; long exposures are built from many orbits. Power comes from solar arrays and batteries, since the telescope spends about a third of each 96-minute orbit in the Earth's shadow. Data are relayed through tracking satellites to the Space Telescope Science Institute in Baltimore, which schedules observations and archives every image publicly.`,
    prerequisites: ['space-shuttle', 'ccd-sensor', 'galileo-telescope', 'voyager-probes'],
    consequences: ['jwst', 'kepler-exoplanets'],
    figures: [
      { name: 'Lyman Spitzer', role: 'Proposed the space telescope in 1946 and championed it for decades' },
      { name: 'Nancy Grace Roman', role: 'NASA chief of astronomy who built the programme' },
      { name: 'Story Musgrave', role: 'Led the spacewalks of the first servicing mission' },
    ],
    significance: 8,
    significanceJustification: 'Hubble fixed the age and expansion history of the universe, helped discover dark energy, and became the most scientifically productive telescope ever built. Its repair in orbit demonstrated what serviced spacecraft could do.',
    domains: ['space', 'information'],
    sources: [
      { author: 'Robert W. Smith', title: 'The Space Telescope: A Study of NASA, Science, Technology, and Politics', publisher: 'Cambridge University Press', year: 1989 },
      { author: 'Lew Allen et al.', title: 'The Hubble Space Telescope Optical Systems Failure Report', publisher: 'NASA Technical Memorandum 103443', year: 1990 },
      { author: 'Wendy L. Freedman et al.', title: 'Final Results from the Hubble Space Telescope Key Project to Measure the Hubble Constant', publisher: 'The Astrophysical Journal', year: 2001, url: 'https://doi.org/10.1086/320638' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'human-genome-project-launch',
    epochId: 'microprocessor-pc',
    date: { year: 1990, month: 10, day: 1, precision: 'exact', display: '1 October 1990' },
    location: 'National Institutes of Health, Bethesda, Maryland and Department of Energy, Washington, United States',
    title: 'Launch of the Human Genome Project',
    summary: 'The Human Genome Project formally began on 1 October 1990 as a fifteen-year, three billion dollar effort by the United States, joined by Britain, France, Germany, Japan and China, to map and sequence all three billion bases of human DNA.',
    explanation: `The Human Genome Project began officially on 1 October 1990, when the United States Department of Energy and National Institutes of Health started a joint programme, budgeted at three billion dollars over fifteen years, to map every human gene and read the entire sequence of the human genome. It was the first large-scale, government-funded project in biology on the model of particle physics or spaceflight, and the argument over whether biology should work that way was as important as the science.

The proposal came from several directions at once. Robert Sinsheimer at the University of California, Santa Cruz, held a workshop on sequencing the genome in 1985. Charles DeLisi at the Department of Energy, whose laboratories had studied radiation-induced mutation since the Manhattan Project and had computing and instrument-building traditions, pushed the idea in 1986 and won the first appropriation in 1987. Renato Dulbecco argued in Science in 1986 that cancer research needed the whole sequence. Many biologists were hostile: they feared that a sequencing factory would drain funds from investigator-led research and produce a list of bases nobody could interpret. A National Research Council committee chaired by Bruce Alberts reported in 1988 that the project was worth doing if it began with genetic and physical maps, developed technology first, sequenced model organisms in parallel, and was run by the NIH; that report became the plan. James Watson agreed to lead the NIH's genome office in 1988 and secured the money, insisting that three percent, later five, be spent on the ethical, legal and social implications.

The five-year plan published in 1990 set goals for genetic maps, physical maps, sequencing technology and the genomes of bacteria, yeast, the nematode worm, the fruit fly and the mouse. The Wellcome Trust in Britain funded the Sanger Centre in 1993, and centres in France, Germany, Japan and China joined; the Bermuda Principles of 1996 required all sequence data to be released publicly within twenty-four hours. Watson resigned in 1992 in a dispute over NIH patenting of gene fragments and was succeeded by Francis Collins.

The project was overtaken in 1998 by Craig Venter's Celera Genomics, which announced it would sequence the genome privately in three years by whole-genome shotgun methods on new capillary sequencers. The public project accelerated in response, and both announced draft sequences together at the White House in June 2000. The finished sequence was published in April 2003, two years early and under budget. The project's legacy is not only the sequence but the infrastructure: public databases, the sequencing centres, the falling cost curve, and the norm that genomic data are a shared resource.`,
    mechanism: `The project proceeded in layers. Genetic maps placed thousands of variable markers along each chromosome by tracking their inheritance in families, giving a coordinate system. Physical maps broke the genome into overlapping cloned fragments, first in yeast artificial chromosomes and later in bacterial artificial chromosomes of about 150,000 bases, ordered by shared markers and restriction fingerprints into contiguous tiling paths. Each clone was then fragmented, subcloned, and sequenced by the Sanger method on automated fluorescent sequencers many times over, and software assembled the overlapping reads into the clone's sequence, which was placed on the map. Finishing closed gaps and resolved ambiguities. Because every base was read several times from known clones, the result was ordered and anchored, which whole-genome shotgun assembly, sequencing random fragments of the entire genome and assembling by computer, could not guarantee alone.`,
    prerequisites: ['recombinant-dna', 'automated-dna-sequencer', 'pcr', 'dna-double-helix'],
    consequences: ['human-genome-completion', 'crispr-discovery', 'alphafold-2'],
    figures: [
      { name: 'James D. Watson', role: 'First director of the NIH genome programme' },
      { name: 'Charles DeLisi', role: 'Department of Energy official who initiated the project' },
      { name: 'Francis Collins', role: 'Director of the NIH genome institute from 1993' },
      { name: 'John Sulston', role: 'Director of the Sanger Centre' },
    ],
    significance: 8,
    significanceJustification: 'The project made the human genome a public reference, drove sequencing costs down by orders of magnitude, and set the norms of open data in biology. It is the foundation of genomic medicine and of the biotechnology that followed.',
    domains: ['biology-medicine', 'information'],
    sources: [
      { author: 'National Research Council', title: 'Mapping and Sequencing the Human Genome', publisher: 'National Academy Press', year: 1988 },
      { author: 'U.S. Department of Health and Human Services and U.S. Department of Energy', title: 'Understanding Our Genetic Inheritance: The U.S. Human Genome Project, The First Five Years FY 1991-1995', publisher: 'National Institutes of Health and Department of Energy', year: 1990 },
      { author: 'James D. Watson', title: 'The Human Genome Project: Past, Present, and Future', publisher: 'Science', year: 1990, url: 'https://doi.org/10.1126/science.2181665' },
      { author: 'Robert Cook-Deegan', title: 'The Gene Wars: Science, Politics, and the Human Genome', publisher: 'W. W. Norton', year: 1994 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'linux',
    epochId: 'microprocessor-pc',
    date: { year: 1991, month: 8, day: 25, precision: 'exact', display: '25 August 1991 (announcement); version 0.01 released 17 September 1991' },
    location: 'University of Helsinki, Helsinki, Finland',
    title: 'Linux',
    summary: 'Linus Torvalds, a 21-year-old student in Helsinki, announced on 25 August 1991 a free Unix-like kernel for the 386 PC; combined with the GNU tools and developed openly over the Internet, Linux became the operating system of servers, phones and supercomputers.',
    explanation: `On 25 August 1991 a message appeared on the Usenet group comp.os.minix from a University of Helsinki student named Linus Torvalds, announcing that he was writing a free operating system for 386 PCs, just a hobby, won't be big and professional like gnu, and asking what features people wanted. Version 0.01 was posted to an FTP server on 17 September. It was a kernel only: it could run a shell and the GNU C compiler, and nothing else. Within a few months hundreds of programmers were sending patches, and by version 1.0 in March 1994 Linux was a complete, stable Unix-like system that ran on ordinary personal computers and cost nothing.

Torvalds had bought a 386 PC in January 1991 and used it with Minix, a small teaching Unix written by Andrew Tanenbaum in Amsterdam, whose licence forbade much modification and whose author declined to make it a production system. Torvalds wrote a terminal emulator to dial into the university, added a disk driver and a file system, and found he had the beginnings of a kernel. Around it he assembled the tools that Richard Stallman's GNU project had been writing since 1984 with the explicit aim of a free Unix: the compiler, the C library, the shell and the utilities. GNU lacked only a working kernel; Torvalds supplied one, and adopted the GNU General Public License in 1992, which required anyone distributing modified versions to publish their source. Tanenbaum's public argument with Torvalds in January 1992 that a monolithic kernel was obsolete is remembered mainly because the monolithic kernel won.

What was new was not the software but the way it was built. Torvalds released early and often, accepted contributions from anyone on the strength of their code, and coordinated thousands of contributors by email, a method Eric Raymond described in 1997 as the bazaar. The Internet, TCP/IP and Usenet were the precondition: a student in Finland could recruit developers in California and Australia at no cost. Distributions such as Slackware, Debian and Red Hat packaged the kernel with GNU and other software from 1993, and the Apache web server of 1995, itself free, gave Linux its first large role.

By the late 1990s Linux ran a large share of the Web's servers, and in the 2000s it became the operating system of nearly every supercomputer, of Google's and Amazon's data centres, of Android phones from 2008, and of most embedded devices. It made the free software idea, which Stallman had framed as an ethical position, into the practical basis of the computing industry, and it demonstrated that a decentralised volunteer project could produce and maintain one of the most complex artefacts ever built.`,
    mechanism: `Linux is a monolithic kernel: a single program running in the processor's privileged mode that manages memory, schedules processes, handles interrupts and provides device drivers and file systems, all in one address space. User programs run unprivileged and request services through system calls that follow the Unix and POSIX conventions, so software written for Unix compiles and runs. The kernel uses the 386's paging hardware to give each process its own virtual memory and to protect processes from one another. Device drivers, file systems and network protocols are written to internal interfaces and can be compiled in or, since 1995, loaded as modules. Development is distributed: contributors send patches to subsystem maintainers who forward them to Torvalds, and since 2005 the Git version control system he wrote for the purpose tracks the entire history, allowing thousands of developers to work in parallel.`,
    prerequisites: ['unix', 'ibm-pc', 'tcp-ip', 'intel-4004'],
    consequences: ['aws-cloud-computing', 'git-version-control', 'hyperscale-ai-datacenters', 'smartphone-universal-computer'],
    figures: [
      { name: 'Linus Torvalds', role: 'Creator and maintainer of the Linux kernel' },
      { name: 'Richard Stallman', role: 'Founder of the GNU project and author of the GPL' },
      { name: 'Andrew Tanenbaum', role: 'Author of Minix, the starting point' },
    ],
    significance: 9,
    significanceJustification: 'Linux is the operating system beneath the Internet, cloud computing, Android and scientific computing, and its development model established open source as the way most infrastructure software is built. It is arguably the largest collaborative engineering project in history.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Linus Torvalds and David Diamond', title: 'Just for Fun: The Story of an Accidental Revolutionary', publisher: 'HarperBusiness', year: 2001 },
      { author: 'Glyn Moody', title: 'Rebel Code: Linux and the Open Source Revolution', publisher: 'Perseus', year: 2001 },
      { author: 'Eric S. Raymond', title: 'The Cathedral and the Bazaar', publisher: "O'Reilly Media", year: 1999 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'lithium-ion-battery',
    epochId: 'microprocessor-pc',
    date: { year: 1991, precision: 'year', display: '1991 (Sony commercialisation)' },
    location: 'Sony Corporation, Japan; earlier work at Exxon, Oxford and Asahi Kasei',
    title: 'The lithium-ion battery',
    summary: 'Sony sold the first commercial lithium-ion cell in 1991, combining Goodenough\'s cobalt oxide cathode with Yoshino\'s carbon anode; rechargeable, light and energy-dense, it powered the portable electronics, phones and later the electric cars of the following decades.',
    explanation: `The lithium-ion battery reached the market in 1991, when Sony, needing a better battery for its camcorders and portable telephones, began selling a rechargeable cell that stored two or three times the energy per kilogram of the nickel-cadmium cells it replaced, did not lose capacity if recharged when partly full, and held its charge on the shelf. Within a decade it was in every laptop and mobile phone, and within two it had made the electric car practical. The 2019 Nobel Prize in Chemistry recognised three of the people who made it possible.

Lithium is the lightest metal and the most electropositive, which makes it the ideal negative electrode in principle and a fire hazard in practice. Stanley Whittingham, working at Exxon during the oil crisis of the 1970s, showed that lithium ions could be slipped between the layers of titanium disulphide and pulled out again, a process called intercalation, giving a rechargeable cell of about two volts. It used a lithium metal anode, which grew dendrites on cycling and short-circuited, and Exxon abandoned it. John Goodenough at Oxford reasoned in 1980 that a metal oxide would hold lithium at a higher potential than a sulphide, and with Koichi Mizushima showed that lithium cobalt oxide gave about four volts. In Japan Akira Yoshino at Asahi Kasei replaced the lithium metal anode in 1985 with a carbon material into which lithium ions could also intercalate, so that no metallic lithium was ever present, and demonstrated by dropping iron weights onto cells that they did not catch fire. Sony, under Yoshio Nishi, engineered Yoshino's design with a coke anode into a manufacturable cylindrical cell and launched it in 1991; Asahi Kasei and Toshiba followed in 1992.

The cell's success was cumulative. Graphite anodes replaced coke in the mid 1990s, raising capacity, and cathodes were diversified into manganese, nickel and iron phosphate chemistries. Energy density roughly tripled between 1991 and 2020 while the price per kilowatt-hour fell by about 97 percent, a learning curve comparable to that of solar cells. Japanese firms dominated manufacture through the 1990s; Korean and then Chinese firms took most of the market after 2010 as production moved to vehicle scale.

The battery's consequences run through consumer electronics, the smartphone, which could not exist without it, and transport: Tesla's Roadster of 2008 used thousands of laptop cells, and by the 2020s electric vehicles were the largest use of lithium-ion cells. Grid storage followed, changing what intermittent solar and wind could do. Its costs are the mining of lithium, cobalt and nickel, occasional thermal-runaway fires, and a recycling problem not yet solved at scale.`,
    mechanism: `A cell has a positive electrode of lithium cobalt oxide (or a related layered oxide) coated on aluminium foil, a negative electrode of graphite coated on copper foil, a porous polymer separator between them, and an organic electrolyte of a lithium salt in carbonate solvents. On charging, an external voltage drives lithium ions out of the oxide lattice, through the electrolyte, and into the spaces between graphite layers, while electrons travel through the external circuit; on discharge the ions and electrons return, releasing about 3.7 volts. Neither electrode is consumed or restructured: ions simply shuttle between two host lattices, which is why the cell can be cycled hundreds or thousands of times. A thin solid-electrolyte interphase forms on the graphite during the first charge and prevents further reaction with the electrolyte. A protection circuit prevents overcharge, over-discharge and overheating, which can otherwise trigger thermal runaway.`,
    prerequisites: ['volta-battery', 'cell-phone', 'periodic-table'],
    consequences: ['iphone', 'ipod', 'tesla-model-s', 'solid-state-battery-progress'],
    figures: [
      { name: 'M. Stanley Whittingham', role: 'Demonstrated lithium intercalation cells at Exxon' },
      { name: 'John B. Goodenough', role: 'Identified the lithium cobalt oxide cathode' },
      { name: 'Akira Yoshino', role: 'Designed the carbon-anode cell at Asahi Kasei' },
      { name: 'Yoshio Nishi', role: 'Led commercialisation at Sony' },
    ],
    significance: 9,
    significanceJustification: 'The lithium-ion battery is the enabling component of portable electronics, the smartphone and the electric vehicle, and is becoming the main means of storing renewable electricity. Few single components have had as wide a downstream effect.',
    domains: ['energy', 'materials', 'transportation'],
    sources: [
      { author: 'M. S. Whittingham', title: 'Electrical Energy Storage and Intercalation Chemistry', publisher: 'Science', year: 1976, url: 'https://doi.org/10.1126/science.192.4244.1126' },
      { author: 'K. Mizushima, P. C. Jones, P. J. Wiseman and J. B. Goodenough', title: 'LixCoO2 (0 < x < 1): A new cathode material for batteries of high energy density', publisher: 'Materials Research Bulletin', year: 1980, url: 'https://doi.org/10.1016/0025-5408(80)90012-4' },
      { author: 'Akira Yoshino', title: 'The Birth of the Lithium-Ion Battery', publisher: 'Angewandte Chemie International Edition', year: 2012, url: 'https://doi.org/10.1002/anie.201105006' },
      { author: 'Royal Swedish Academy of Sciences', title: 'Scientific Background on the Nobel Prize in Chemistry 2019: Lithium-Ion Batteries', publisher: 'Royal Swedish Academy of Sciences', year: 2019 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'mosaic-netscape',
    epochId: 'microprocessor-pc',
    date: { year: 1993, month: 4, precision: 'year', display: '1993 (NCSA Mosaic); Netscape Navigator December 1994' },
    location: 'National Center for Supercomputing Applications, Urbana-Champaign, Illinois and Mountain View, California, United States',
    title: 'Mosaic and Netscape',
    summary: 'NCSA Mosaic, written by Marc Andreessen and Eric Bina and released in 1993, was the first widely used graphical web browser with inline images; its authors\' Netscape Navigator of 1994 carried the Web to the public and set off the dot-com boom.',
    explanation: `The Web had existed for two years before most people could see it. Its early browsers ran on NeXT machines or in text on terminals, and the Web was one Internet service among several, smaller than Gopher. That changed with Mosaic, written at the National Center for Supercomputing Applications at the University of Illinois by Marc Andreessen, an undergraduate working for a few dollars an hour, and Eric Bina, a staff programmer. The first version for Unix workstations was released in early 1993, with Windows and Macintosh versions by the autumn. Mosaic was easy to install, showed images inline on the page rather than in separate windows, had a point-and-click interface with a back button and a history, and was free for non-commercial use. Downloads ran to a million within a year, and traffic on the Web grew by a factor of several thousand.

Andreessen graduated, moved to California, and in April 1994 founded Mosaic Communications with Jim Clark, the founder of Silicon Graphics, who provided the capital and the ambition. They hired most of the original NCSA team, wrote a new browser from scratch to avoid the university's licence, and in December 1994 released Netscape Navigator 1.0, renamed after the university objected. Navigator was faster, loaded pages progressively, and added the Secure Sockets Layer, the encryption that made sending a credit card number over the Web acceptable and that survives as TLS. It took about three quarters of the browser market within months. Netscape's initial public offering on 9 August 1995, in which shares priced at 28 dollars closed at 58 and the sixteen-month-old company was valued at nearly three billion dollars, is the conventional start of the dot-com boom.

The browser also became a platform. Netscape introduced JavaScript in 1995, written by Brendan Eich in ten days, cookies, frames and plug-ins, and argued that the browser plus the Web could replace the operating system as the thing developers wrote for. Microsoft, which had ignored the Internet until 1995, licensed the Mosaic code from Spyglass, shipped Internet Explorer with Windows 95, and gave it away; the browser war that followed ended with Netscape's decline, its acquisition by AOL in 1998, the release of its code as Mozilla, and the antitrust case against Microsoft. Firefox, descended from that code, and the open-source lineage of Chrome mean that Mosaic's descendants still render most of the Web.

Mosaic's real achievement was social. It made the Web self-evident: anyone who saw a page with pictures and clicked a link understood at once what the thing was for. Newspapers, companies and governments started building sites in 1994 because their staff had seen Mosaic.`,
    mechanism: `The browser opens a TCP connection to the server named in a URL, sends an HTTP GET request, and receives an HTML document. A parser turns the tags into a tree of elements, a layout engine assigns each a position and size from its type, the window width and font metrics, and the result is painted to the screen. Mosaic's inline image tag, IMG, made the browser issue further requests for each picture and reserve space for it in the flow of text, so a page arrived as one composed document. Netscape rendered incrementally, showing text as it streamed in and filling in images afterwards, so pages felt fast over modems. Navigator added a scripting interpreter that could modify the document tree in response to events, a cookie store that returned a small token to the server with each request to track sessions, and an SSL layer that negotiated a session key by public-key cryptography and encrypted the traffic.`,
    prerequisites: ['world-wide-web', 'macintosh', 'tcp-ip', 'xerox-parc-gui'],
    consequences: ['google-search', 'e-commerce-amazon', 'wikipedia', 'windows-95'],
    figures: [
      { name: 'Marc Andreessen', role: 'Co-author of Mosaic, co-founder of Netscape' },
      { name: 'Eric Bina', role: 'Co-author of Mosaic' },
      { name: 'Jim Clark', role: 'Co-founder and financier of Netscape' },
      { name: 'Brendan Eich', role: 'Creator of JavaScript at Netscape' },
    ],
    significance: 8,
    significanceJustification: 'Mosaic and Navigator turned the Web from a physicists\' tool into a mass medium in under two years, and introduced the encryption, scripting and cookies that made online commerce and applications possible. Netscape\'s IPO launched the Internet economy.',
    domains: ['information', 'communication', 'computation'],
    sources: [
      { author: 'Marc Andreessen and Eric Bina', title: 'NCSA Mosaic: A Global Hypermedia System', publisher: 'Internet Research', year: 1994 },
      { author: 'Jim Clark with Owen Edwards', title: 'Netscape Time: The Making of the Billion-Dollar Start-Up That Took On Microsoft', publisher: "St. Martin's Press", year: 1999 },
      { author: 'Michael A. Cusumano and David B. Yoffie', title: 'Competing on Internet Time: Lessons from Netscape and Its Battle with Microsoft', publisher: 'Free Press', year: 1998 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'windows-95',
    epochId: 'microprocessor-pc',
    date: { year: 1995, month: 8, day: 24, precision: 'exact', display: '24 August 1995' },
    location: 'Microsoft Corporation, Redmond, Washington, United States',
    title: 'Windows 95',
    summary: 'Microsoft released Windows 95 on 24 August 1995 with the largest software launch ever staged; it merged DOS and Windows into a single 32-bit graphical system with the Start menu, plug-and-play hardware and built-in TCP/IP, and put a graphical PC connected to the Internet in most offices and homes.',
    explanation: `Windows 95 went on sale at midnight on 24 August 1995, with queues outside shops, the Empire State Building lit in Microsoft's colours, a 300 million dollar campaign built on the Rolling Stones' Start Me Up, and Jay Leno hosting the launch in Redmond. Seven million copies sold in the first five weeks. The spectacle was disproportionate to the software, which was a long-overdue modernisation of a product Microsoft had been selling since 1985, but the launch marked the moment when the personal computer became an ordinary household possession and when Microsoft's dominance of it was complete.

Windows had begun as a graphical shell running on top of MS-DOS, and Windows 3.0 of 1990 and 3.1 of 1992 had sold in tens of millions but remained a 16-bit environment with the memory limits and instability of its DOS foundation. Under David Cutler Microsoft had built Windows NT, a new 32-bit operating system released in 1993, but it needed more memory than consumers had. Windows 95, developed as Chicago under Brad Silverberg, was the consumer bridge: a 32-bit kernel with preemptive multitasking and protected memory for new applications, while still able to run DOS and 16-bit Windows software, all on a machine with four megabytes. It introduced the Start button and taskbar, long file names, the Explorer, the Recycle Bin (after Apple's trash can), and Plug and Play, which detected and configured expansion cards that had previously required setting jumpers by hand.

Two networking decisions mattered most. Windows 95 shipped with a TCP/IP stack and a dial-up connection tool, so that any PC could join the Internet with a modem and an account. And the Plus! pack, and later the base system, included Internet Explorer, licensed from Spyglass's Mosaic code. Bill Gates's memo of May 1995, The Internet Tidal Wave, had reoriented the company toward the Web within months; the browser bundling that followed led directly to United States v. Microsoft, in which the government argued in 1998 that Microsoft had used its operating-system monopoly to crush Netscape. The court found in 1999 that Microsoft held monopoly power and had abused it; the remedy was reduced on appeal.

Windows 95 was replaced by Windows 98 and then, in 2001, by Windows XP, which brought the NT kernel to consumers. Its interface, however, persisted: the Start menu and taskbar survived every redesign, and the assumption that a computer is a graphical desktop with a network connection was set for the next generation. By the end of 1995 roughly 90 percent of personal computers ran a Microsoft operating system, the Web was reaching the public, and the pieces of the networked world were in place.`,
    mechanism: `Windows 95 boots through a real-mode DOS stage that loads a 32-bit virtual machine manager, which then takes over the processor in protected mode. The manager runs each 32-bit application in its own address space with preemptive scheduling, while 16-bit Windows programs share a single cooperative address space for compatibility and DOS programs run in emulated virtual 8086 sessions. Device access goes through 32-bit virtual device drivers that replace real-mode DOS drivers; the Plug and Play subsystem enumerates buses at boot, reads identifiers from hardware, assigns interrupts and memory ranges and loads matching drivers, storing the configuration in the Registry. The 32-bit file system supports long names on FAT disks by storing extra directory entries. The shell, Explorer, presents files, the desktop and the Start menu as one namespace of folders, and the Winsock library exposes the TCP/IP stack to any application through the Berkeley sockets interface.`,
    prerequisites: ['ibm-pc', 'macintosh', 'xerox-parc-gui', 'mosaic-netscape', 'compact-disc'],
    consequences: ['e-commerce-amazon', 'google-search', 'wifi'],
    figures: [
      { name: 'Bill Gates', role: 'Chief executive of Microsoft' },
      { name: 'Brad Silverberg', role: 'Led the Windows 95 project' },
      { name: 'David Cutler', role: 'Architect of Windows NT, the eventual replacement kernel' },
    ],
    significance: 7,
    significanceJustification: 'Windows 95 standardised the graphical, networked personal computer for the mass market and, by bundling TCP/IP and a browser, connected hundreds of millions of people to the Internet. Its dominance also produced the defining antitrust case of the software era.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Adrian King', title: 'Inside Windows 95', publisher: 'Microsoft Press', year: 1994 },
      { author: 'United States District Court for the District of Columbia', title: 'United States v. Microsoft Corporation: Findings of Fact', publisher: 'United States Department of Justice', year: 1999, url: 'https://www.justice.gov/atr/us-v-microsoft-courts-findings-fact' },
      { author: 'Martin Campbell-Kelly', title: 'From Airline Reservations to Sonic the Hedgehog: A History of the Software Industry', publisher: 'MIT Press', year: 2003 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
];
