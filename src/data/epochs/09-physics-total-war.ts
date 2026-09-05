import type { Epoch, TechEventInput } from '../schema';

export const epoch: Epoch = {
  id: 'physics-total-war',
  index: 9,
  name: 'The age of physics and total war',
  code: 'PHYSICS',
  startYear: 1914,
  endYear: 1945,
  span: '1914 to 1945',
  thesis: `Between the guns of August 1914 and the bombs of August 1945, the relationship between the state, the laboratory and the factory was rewritten. Two world wars, separated by a depression, turned scientific research from a gentleman's pursuit into a strategic resource that governments funded, organized and classified. The physics of the previous epoch (Maxwell's fields, Planck's quanta, Rutherford's nucleus) matured into a working quantum mechanics between 1925 and 1927, and within fifteen years that theory had explained the chemical bond, the electron microscope, the semiconductor and the splitting of the uranium nucleus.

The war-driven organizations were the epoch's most consequential invention. The British radar chain, Bletchley Park, Peenemünde, the Manhattan Project and the American Office of Scientific Research and Development each brought thousands of scientists, engineers and industrial managers under one command with a single goal and nearly unlimited money. They produced radar, the jet engine, the ballistic missile, penicillin at industrial scale, the first electronic computers and the atomic bomb in a span of six years. Just as important, they produced a template: mission-directed, multi-disciplinary, state-funded research that the following epoch would make permanent. The price was total war, in which the distinction between soldier and civilian dissolved and industrial capacity itself became the target.`,
  enablingConditions: [
    'Quantum mechanics, completed between 1925 and 1927, gave physicists and chemists a predictive theory of atoms, molecules and solids for the first time.',
    'The second industrial revolution had left behind electrical grids, chemical industries, machine tool capacity and a large population of trained engineers that could be redirected to war production.',
    'Total mobilization allowed governments to spend on research at a scale no private firm or university could match, and to compel cooperation between rivals.',
    'The thermionic valve, matured by the radio industry, made it possible to amplify, switch and count electrical signals at speeds no mechanical device could reach.',
    'Refugee scientists driven out of Germany, Austria, Italy and Hungary after 1933 carried the best European physics and mathematics to Britain and the United States.',
  ],
  constraintsRemoved: [
    'Detection at a distance: radar and sonar let humans see through darkness, cloud and water by listening to reflected waves.',
    'The limit of mechanical calculation: electronic switching removed the speed ceiling imposed by moving parts, opening the way to programmable computers.',
    'Bacterial infection as a routine cause of death: penicillin and its industrial production made most common infections survivable.',
    'The energy density of chemical fuels: nuclear fission released a million times more energy per kilogram than any combustion reaction.',
    'The reciprocating engine as the ceiling of aircraft speed: the gas turbine removed the propeller limit and, with the rocket, made supersonic and eventually orbital flight conceivable.',
  ],
  secondOrderConsequences: [
    'Science became a matter of national security. Secrecy, security clearances and classified journals appeared where open publication had been the norm.',
    'The state became the largest patron of research in every industrial country, and the postwar university was reshaped around federal contracts.',
    'A weapon capable of destroying cities in a single blow changed the logic of war between great powers from conquest to deterrence.',
    'Civilian technologies (television, plastics, antibiotics, jet aircraft) were pulled forward by a decade or more by wartime spending, then released into postwar consumer markets.',
    'The mathematical idea of computation, born in logic, became a physical machine, and with it the notion that information itself could be engineered.',
  ],
  transition: `The organizations built for war did not disband in 1945. Vannevar Bush's report Science, The Endless Frontier argued that the state should fund basic research permanently, and within a decade the Office of Naval Research, the National Science Foundation and the Atomic Energy Commission had made that policy. The Manhattan Project's laboratories became national laboratories. Bell Laboratories, enriched by radar contracts and staffed with physicists who had learned solid-state theory from wartime crystal detector work, produced the transistor in December 1947. Claude Shannon, who had spent the war on fire control and cryptography, published the mathematical theory of communication in 1948. John von Neumann's report on the EDVAC, written for the ENIAC team in 1945, defined the stored-program computer that every later machine would follow. The German rocket team surrendered to the Americans and the Soviets captured the rest of Peenemünde's production base; both went on to build the missiles that carried the first satellites. The next epoch inherited the tools, the people and the money, and turned them toward the atom, the transistor and space.`,
  humanExperience: `For a person born around 1900, this epoch was lived as a sequence of shocks. The war of 1914 conscripted the young men of every belligerent country into a battlefield governed by machine guns, artillery, poison gas and, eventually, tanks and aircraft. About ten million soldiers died, and the influenza of 1918 killed tens of millions more. Those who survived came home to cities being wired for electricity, to radio broadcasting (from 1920 in the United States and 1922 in Britain), to cinemas, telephones and automobiles that had been luxuries in their childhood.

The 1920s made some of the new physics visible in daily life: X-ray machines in hospitals, insulin injections that pulled diabetic children back from starvation, cheap aspirin, the first refrigerators. The Depression after 1929 then removed the incomes that had paid for these things and drove a quarter of the workforce in some countries into unemployment.

The second war was total in a way the first had not been. Civilians in London, Hamburg, Warsaw, Chongqing, Tokyo and Dresden were bombed from the air; whole populations were rationed, conscripted into factories and, in occupied Europe, deported and murdered on an industrial scale. Women entered heavy industry in numbers that would have been unthinkable a generation earlier. A wounded soldier in 1944 had a reasonable chance of surviving a wound that would have killed him in 1918, because of blood transfusion, sulfa drugs and, from 1943, penicillin.

What people knew also changed. Radio put the voices of leaders and the sound of bombing into the kitchen. Newsreels showed the liberation of the camps. And in August 1945 the newspapers reported that a single bomb had destroyed a city, and that the sun's own fire had been brought to earth. A person who had watched the first aeroplanes in 1909 could, in 1945, read about jet fighters, rockets that reached the edge of space, and an electronic brain in Philadelphia that did arithmetic a thousand times faster than any human.`,
  minEvents: 18,
  sources: [
    { author: 'Richard Rhodes', title: 'The Making of the Atomic Bomb', publisher: 'Simon and Schuster', year: 1986 },
    { author: 'Vannevar Bush', title: 'Science, The Endless Frontier', publisher: 'United States Government Printing Office', year: 1945, url: 'https://www.nsf.gov/od/lpa/nsf50/vbush1945.htm' },
    { author: 'Paul Kennedy', title: 'Engineers of Victory: The Problem Solvers Who Turned the Tide in the Second World War', publisher: 'Random House', year: 2013 },
    { author: 'David Edgerton', title: 'The Shock of the Old: Technology and Global History since 1900', publisher: 'Profile Books', year: 2006 },
    { author: 'Thomas P. Hughes', title: 'American Genesis: A Century of Invention and Technological Enthusiasm, 1870-1970', publisher: 'Viking', year: 1989 },
  ],
  lastReviewed: '2026-09-04',
};

export const events: TechEventInput[] = [
  {
    id: 'tank',
    epochId: 'physics-total-war',
    date: { year: 1916, month: 9, day: 15, precision: 'exact', display: '15 September 1916 (first combat use at Flers-Courcelette)' },
    location: 'Lincoln, Britain, and the Somme, France',
    title: 'The tank enters combat',
    summary: 'British Mark I tanks, tracked and armoured gun carriages built to cross trenches and wire, went into action on the Somme on 15 September 1916, restoring mechanical movement to a battlefield frozen by machine guns.',
    explanation: `On the morning of 15 September 1916, during the Battle of Flers-Courcelette on the Somme, forty-nine British Mark I tanks were allotted to the attack. Roughly thirty-two reached their start lines, fewer than twenty crossed into action, and a handful drove through the German trenches; one advanced up the main street of Flers with infantry cheering behind it. The debut was clumsy and the machines were unreliable, but it was the first use in combat of a tracked, armoured, self-propelled gun carriage, and the German command took note.

The tank answered a specific problem. By the end of 1914 the Western Front had congealed into trench lines protected by barbed wire and interlocking machine guns. Infantry attacks failed with enormous casualties. Artillery could cut wire and collapse trenches, but it churned the ground into mud that horses and wheeled vehicles could not cross. Several people converged on the same answer: combine the caterpillar track of the American Holt agricultural tractor with armour plate, an internal combustion engine and naval guns. Lieutenant Colonel Ernest Swinton pressed the idea on the War Office; Winston Churchill, at the Admiralty, funded a Landships Committee in February 1915; and William Tritton and Walter Wilson of William Foster and Company in Lincoln built the prototypes. Little Willie ran in September 1915, and the rhomboid Mother followed in January 1916 and became the Mark I. The word tank was a cover name chosen so that the hulls could be shipped as water carriers.

Early tanks moved at walking pace, broke down constantly, and filled with petrol fumes and carbon monoxide. Crews of eight worked in near darkness in temperatures above 40 degrees. Yet at Cambrai in November 1917 more than four hundred tanks broke a section of the Hindenburg Line in hours, and at Amiens on 8 August 1918 tanks, aircraft, artillery and infantry working together produced what Ludendorff called the black day of the German army. France fielded the small Renault FT, the first tank with a fully rotating turret and a rear engine, the layout that has defined the type ever since.

The tank mattered less for what it did in 1916 than for what it revealed: engine power, armour and tracks could return movement to a battlefield that firepower had locked. Between the wars, J. F. C. Fuller, Basil Liddell Hart, Heinz Guderian and Mikhail Tukhachevsky argued over how to use it, and the mechanized combined-arms doctrine that emerged decided the campaigns of 1939 to 1945 from France to Kursk. The evidence rests on war diaries and Landships Committee records, surviving vehicles at the Tank Museum in Bovington, and the German general staff's own assessment of Amiens.`,
    mechanism: `The Mark I was a riveted box of armour plate 6 to 12 millimetres thick, enough to stop rifle and machine-gun bullets but not artillery, carried on a pair of unsprung caterpillar tracks that ran around the full rhomboid outline of the hull so that the vehicle could climb a parapet and bridge a trench about three metres wide. A six-cylinder Daimler-Foster petrol engine of 105 horsepower drove the tracks through a two-speed gearbox and secondary gears on each side; steering required gearsmen to change the speed of one track relative to the other, with a trailing pair of wheels at the rear for gentle turns. Male tanks carried two 6-pounder naval guns in side sponsons, female tanks carried machine guns. Maximum speed was about six kilometres per hour, and range on the internal petrol tanks was roughly forty kilometres.`,
    prerequisites: ['benz-daimler-automobile', 'otto-cycle-engine', 'bessemer-steel', 'ford-assembly-line'],
    consequences: ['synthetic-rubber'],
    figures: [
      { name: 'Ernest Swinton', role: 'Advocate and organizer of the British tank programme' },
      { name: 'William Tritton', role: 'Designer at William Foster and Company' },
      { name: 'Walter Wilson', role: 'Engineer, designed the rhomboid track layout' },
      { name: 'Winston Churchill', role: 'Funded the Landships Committee as First Lord of the Admiralty' },
    ],
    significance: 7,
    significanceJustification: 'The tank reintroduced mobility to industrial warfare and became the core of the armoured doctrine that decided the land campaigns of the Second World War. Its direct civilian legacy is small, but its effect on the shape of twentieth-century conflict was large.',
    domains: ['weapons-security', 'transportation'],
    sources: [
      { author: 'David Fletcher', title: 'The British Tanks 1915-19', publisher: 'Crowood Press', year: 2001 },
      { author: 'J. P. Harris', title: 'Men, Ideas and Tanks: British Military Thought and Armoured Forces, 1903-1939', publisher: 'Manchester University Press', year: 1995 },
      { author: 'Patrick Wright', title: 'Tank: The Progress of a Monstrous War Machine', publisher: 'Faber and Faber', year: 2000 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'sonar',
    epochId: 'physics-total-war',
    date: { year: 1917, precision: 'year', display: '1917 to 1918 (Langevin ultrasonic echo ranging; British ASDIC trials)' },
    location: 'Toulon, France, and Parkeston Quay, Britain',
    title: 'Ultrasonic echo ranging (sonar)',
    summary: 'Paul Langevin used piezoelectric quartz transducers and valve amplifiers to send ultrasonic pulses through seawater and detect their echoes, obtaining the first echo from a submarine in 1918 and founding active sonar.',
    explanation: `The unrestricted submarine campaign of 1917 nearly starved Britain. In April of that year U-boats sank more than 800,000 tons of Allied shipping, and no reliable means existed to locate a submerged boat. Hydrophones could hear a submarine's propellers but could not fix its position, and a boat lying silent was invisible. The Allied response was a crash research programme in acoustics, coordinated between France, Britain and, after April 1917, the United States.

The decisive work was done by Paul Langevin at Toulon. Constantin Chilowsky, a Russian engineer living in Switzerland, had proposed in 1915 that high-frequency sound could be beamed through water and its echo used to detect obstacles, and Langevin took up the idea. His early transducers, using electrostatic plates, were too weak. In 1917 he turned to the piezoelectric effect that Pierre and Jacques Curie had discovered in 1880: a thin slab of quartz, cut in the right orientation, changes shape when a voltage is applied and generates a voltage when squeezed. Langevin sandwiched quartz between steel plates to make a robust resonator at about 40 kilohertz, drove it with the triode valve amplifiers that the radio industry had just made available, and used the same element to receive. In early 1917 he detected echoes from the seabed and from a steel plate, and in 1918 he obtained an echo from a submerged submarine at a range of about 1,500 metres.

Britain's Anti-Submarine Division ran a parallel effort at Parkeston Quay under Robert Boyle, who learned of Langevin's quartz work through the Allied exchange and built a sea-going set in 1918. The British called their equipment ASDIC; the American term sonar came later. The war ended before echo ranging saw combat, but the Royal Navy fitted ASDIC to destroyers through the 1920s and 1930s, and by 1939 it was standard. Its existence encouraged the belief that the submarine had been mastered, a belief the Battle of the Atlantic corrected at great cost before radar, high-frequency direction finding, code-breaking and long-range aircraft closed the gap.

Sonar's importance goes beyond warfare. It was the first practical use of piezoelectric transducers and the first working echo-ranging system of any kind, a decade before radar. The same principle of timed reflected pulses underlies depth sounding, fish finding, oil exploration, non-destructive testing of metals and medical ultrasound. The evidence is unusually good: Langevin's French patents of 1916 to 1918, British Admiralty records, and the postwar accounts by both Langevin and Boyle agree on the sequence.`,
    mechanism: `A quartz crystal cut so that its faces lie perpendicular to an electrical axis expands or contracts by a few millionths of its thickness when a voltage is applied across it. Langevin glued mosaics of such quartz slices between two steel plates, forming a sandwich whose mechanical resonance lay near 40 kilohertz, above human hearing. A valve oscillator drove the sandwich at resonance so that its face pushed against the water and radiated a narrow beam of ultrasound. After a short pulse, the same crystal was switched to a valve amplifier; sound returning from a target compressed the quartz and produced a small voltage that the amplifier raised to an audible or visible signal. Range was calculated from the elapsed time and the known speed of sound in seawater, about 1,500 metres per second, and bearing from the direction in which the transducer was trained.`,
    prerequisites: ['marconi-wireless', 'hertz-radio-waves'],
    consequences: ['radar'],
    figures: [
      { name: 'Paul Langevin', role: 'Physicist, built the first ultrasonic echo-ranging transducers' },
      { name: 'Constantin Chilowsky', role: 'Proposed ultrasonic detection of submarines in 1915' },
      { name: 'Robert Boyle', role: 'Led the British ASDIC programme' },
    ],
    significance: 7,
    significanceJustification: 'Sonar was the first echo-ranging technology and the first practical application of piezoelectricity, and it established the pulse-and-echo method that radar and medical ultrasound later followed. It shaped naval warfare for the rest of the century.',
    domains: ['weapons-security', 'information'],
    sources: [
      { author: 'Willem Hackmann', title: 'Seek and Strike: Sonar, Anti-Submarine Warfare and the Royal Navy 1914-54', publisher: 'Her Majesty\'s Stationery Office', year: 1984 },
      { author: 'Frederick V. Hunt', title: 'Electroacoustics: The Analysis of Transduction, and Its Historical Background', publisher: 'Harvard University Press', year: 1954 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'aircraft-carrier',
    epochId: 'physics-total-war',
    date: { year: 1918, precision: 'year', display: '1918 (HMS Argus, first flush-deck carrier) to 1922 (Hosho, first purpose-built carrier commissioned)' },
    location: 'Britain, Japan and the United States',
    title: 'The aircraft carrier',
    summary: 'HMS Argus, completed in September 1918 with a full-length flat deck, was the first ship on which wheeled aircraft could both take off and land; Japan commissioned the first purpose-built carrier, Hosho, in December 1922.',
    explanation: `The aircraft carrier married two technologies that had matured within a decade of each other, the steel steam-turbine warship and the aeroplane, and it did so under wartime pressure. Eugene Ely had flown a Curtiss biplane off a platform on the cruiser USS Birmingham in November 1910 and landed on USS Pennsylvania two months later, but those were stunts. The Royal Navy, fighting a war against Zeppelins and a German fleet that would not come out, needed aircraft at sea. It converted the cruiser Furious in 1917 with a flying-off deck forward; Squadron Commander Edwin Dunning made the first landing on a moving ship on 2 August 1917 and was killed attempting a third five days later, which showed that a partial deck was not enough.

The answer was Argus, a liner hull bought on the stocks and completed in September 1918 with an unobstructed flat deck 168 metres long, the funnels ducted aft, and a hangar below. She was the first ship on which wheeled aircraft could take off and land routinely. The war ended before she could launch the planned torpedo strike on the German fleet at Wilhelmshaven, but the idea had been proved. Japan, which had British advisers, laid down Hosho as a carrier from the keel and commissioned her in December 1922, the first purpose-built carrier in service. The United States converted the collier Jupiter into USS Langley the same year.

The Washington Naval Treaty of 1922 accidentally accelerated the type by allowing the conversion of battlecruiser hulls that would otherwise have been scrapped, producing the large, fast Lexington, Saratoga, Akagi and Kaga. Through the 1930s carriers were treated as scouts and auxiliaries to the battle line. The Fleet Air Arm's attack on Taranto on 11 November 1940 with twenty-one biplanes, the Japanese strike on Pearl Harbor on 7 December 1941 with six carriers, and the Battle of Midway in June 1942, in which the opposing fleets never saw each other, ended that assumption. From 1942 the carrier was the capital ship, and it remains so.

The carrier's significance is partly military and partly organizational. It required the integration of ship, aircraft, radio, radar, fuel handling and hundreds of trained specialists into a single system, an early example of the systems engineering that this epoch made routine. The evidence, from Admiralty records, treaty texts and ship histories, is uncontested.`,
    mechanism: `A carrier is a floating airfield whose deck is long enough for aircraft to reach flying speed while the ship steams into the wind, adding thirty knots or more of airflow. Landing aircraft catch a transverse arresting wire with a tail hook, and the wire's braking gear absorbs the aircraft's energy within a few dozen metres. Aircraft are struck below by lift to a hangar deck for maintenance and fuelling, and the island superstructure, offset to starboard on later designs, carries the bridge, funnel and flight control. The ship's own systems include aviation fuel stowage isolated from the hull, ordnance magazines, and from the late 1930s radar and radio for controlling aircraft beyond the horizon. The combination allows a fleet to strike targets hundreds of kilometres away, well beyond the range of any gun.`,
    prerequisites: ['wright-flyer', 'bessemer-steel', 'marconi-wireless'],
    consequences: ['radar'],
    figures: [
      { name: 'Edwin Dunning', role: 'First pilot to land on a moving ship, 1917' },
      { name: 'Murray Sueter', role: 'Royal Naval Air Service, early advocate of carriers' },
      { name: 'William Moffett', role: 'Chief of the United States Bureau of Aeronautics, built American naval aviation' },
    ],
    significance: 7,
    significanceJustification: 'The carrier replaced the battleship as the decisive naval weapon within a generation and extended the reach of sea power by hundreds of kilometres. It is also an early case of a warship designed as an integrated system of vessel, aircraft and electronics.',
    domains: ['weapons-security', 'transportation'],
    sources: [
      { author: 'Norman Friedman', title: 'British Carrier Aviation: The Evolution of the Ships and Their Aircraft', publisher: 'Naval Institute Press', year: 1988 },
      { author: 'Mark R. Peattie', title: 'Sunburst: The Rise of Japanese Naval Air Power, 1909-1941', publisher: 'Naval Institute Press', year: 2001 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'insulin',
    epochId: 'physics-total-war',
    date: { year: 1922, month: 1, day: 23, precision: 'exact', display: '23 January 1922 (first successful clinical injection, Toronto)' },
    location: 'Toronto, Canada',
    title: 'Insulin isolated and used to treat diabetes',
    summary: 'Frederick Banting, Charles Best, James Collip and J. J. R. Macleod extracted insulin from animal pancreas and on 23 January 1922 gave a purified dose to Leonard Thompson, a dying fourteen-year-old, converting type 1 diabetes from a death sentence into a manageable condition.',
    explanation: `Before 1922, a child diagnosed with what is now called type 1 diabetes could expect to live a year or two. The only treatment was near-starvation, which delayed the coma but left patients skeletal. It had been known since Oskar Minkowski and Joseph von Mering removed a dog's pancreas in 1889 that the organ controlled blood sugar, and since the 1900s that the islets of Langerhans were the likely source of the missing substance. Many investigators tried to extract it; all failed, because the pancreas also makes digestive enzymes that destroy the hormone as soon as the tissue is ground up.

Frederick Banting, a surgeon with no research experience, proposed in 1920 to tie off the pancreatic duct so that the enzyme-producing tissue would atrophy while the islets survived. J. J. R. Macleod, professor of physiology at the University of Toronto, gave him a laboratory, ten dogs and a student assistant, Charles Best, in May 1921. By the summer their extracts lowered blood sugar in depancreatized dogs. The decisive advance came from the biochemist James Collip, who in December 1921 and January 1922 found that fractional precipitation with alcohol separated the active substance from most of the toxic impurities. On 11 January 1922 a crude extract was injected into Leonard Thompson, aged fourteen, with little effect and an abscess; on 23 January, Collip's purified extract dropped his blood sugar to normal and cleared the sugar and ketones from his urine. He lived another thirteen years.

The University of Toronto patented the process and licensed it without royalty. Eli Lilly and Company in Indianapolis solved the problem of production at scale within months, using cattle and pig pancreases from slaughterhouses, and by the end of 1923 insulin was available across North America and Europe. Banting and Macleod received the Nobel Prize in 1923 and, in a famous act of resentment and fairness, shared their money with Best and Collip respectively.

Insulin was the first hormone used as a therapeutic drug at scale and the first case of a university discovery converted into a mass-produced pharmaceutical within a year. The Lilly scale-up became the model for the industrial production of penicillin two decades later. In 1978 Genentech made human insulin in bacteria by recombinant DNA, and in 1982 it became the first genetically engineered drug approved for sale. Michael Bliss's reconstruction from the laboratory notebooks settled most of the priority disputes; the credit is now generally shared among the four.`,
    mechanism: `Insulin is a small protein of fifty-one amino acids secreted by the beta cells of the pancreatic islets. It binds to receptors on muscle, fat and liver cells and signals them to take up glucose from the blood and store it as glycogen or fat; without it, glucose accumulates while cells starve and the body burns fat, producing the acidic ketones that cause diabetic coma. The Toronto method minced fresh animal pancreas in acidified alcohol, which inactivated the protein-digesting enzymes, then filtered the solution and added further alcohol in stages so that insulin precipitated at one concentration while most other proteins did not. The dried precipitate was redissolved in water and injected under the skin. Later refinements added zinc and protamine to slow absorption and extend the action of each dose.`,
    prerequisites: ['lister-antisepsis', 'anesthesia', 'harvey-circulation'],
    consequences: ['penicillin', 'recombinant-dna', 'glp-1-agonists'],
    figures: [
      { name: 'Frederick Banting', role: 'Surgeon who initiated the project' },
      { name: 'Charles Best', role: 'Student assistant, ran the dog experiments' },
      { name: 'James Collip', role: 'Biochemist who purified the extract' },
      { name: 'J. J. R. Macleod', role: 'Professor of physiology who directed the laboratory' },
    ],
    significance: 8,
    significanceJustification: 'Insulin turned a fatal disease into a chronic one for tens of millions of people and established the pattern by which a laboratory discovery becomes a mass-produced drug. It was also the first product of recombinant DNA technology to reach patients.',
    domains: ['biology-medicine', 'manufacturing'],
    sources: [
      { author: 'Michael Bliss', title: 'The Discovery of Insulin', publisher: 'University of Chicago Press', year: 1982 },
      { author: 'F. G. Banting, C. H. Best, J. B. Collip, W. R. Campbell and A. A. Fletcher', title: 'Pancreatic extracts in the treatment of diabetes mellitus', publisher: 'Canadian Medical Association Journal', year: 1922 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'quantum-mechanics',
    epochId: 'physics-total-war',
    date: { year: 1925, precision: 'year', display: '1925 to 1927 (Heisenberg, Schrödinger, Born, Dirac, Pauli)' },
    location: 'Göttingen and Munich, Germany; Zurich, Switzerland; Copenhagen, Denmark; Cambridge, Britain',
    title: 'Quantum mechanics completed',
    summary: 'Between Heisenberg\'s matrix mechanics in 1925 and the uncertainty principle in 1927, a handful of physicists built a complete, predictive theory of atoms and molecules that explained chemistry, radiation and the solid state.',
    explanation: `By 1924 the old quantum theory of Planck, Einstein and Bohr was a collection of rules that worked for hydrogen and failed for nearly everything else. Within about thirty months it was replaced by a mathematically complete theory. In the summer of 1925, Werner Heisenberg, recovering from hay fever on Heligoland, abandoned the attempt to describe electron orbits and built a scheme using only observable quantities, the frequencies and intensities of spectral lines. Max Born recognized that Heisenberg's arrays were matrices, and with Pascual Jordan he wrote the theory out in that form by November. Paul Dirac in Cambridge reformulated it in a more general algebra within weeks.

In January 1926 Erwin Schrödinger in Zurich, following Louis de Broglie's 1924 suggestion that electrons behave as waves, published a wave equation whose standing-wave solutions reproduced the hydrogen spectrum exactly. He showed within months that his wave mechanics and Heisenberg's matrix mechanics were the same theory in different clothes. Born, in June 1926, proposed that the square of Schrödinger's wave function gives the probability of finding the particle, an interpretation that made the theory statistical at its root. Wolfgang Pauli's exclusion principle (1925) and the discovery of electron spin by Uhlenbeck and Goudsmit explained the periodic table. Heisenberg's uncertainty relation of March 1927 and Bohr's complementarity, argued out at the Solvay conference that October, gave the theory its interpretation, over Einstein's objections. Dirac's relativistic equation of 1928 completed the structure and predicted antimatter.

The practical consequences arrived with remarkable speed. Walter Heitler and Fritz London explained the covalent bond in 1927, founding quantum chemistry. Felix Bloch's 1928 theory of electrons in crystals, and Alan Wilson's 1931 band theory, explained why some solids conduct and others insulate, the basis of the semiconductor and the transistor. Quantum tunnelling explained radioactive alpha decay (Gamow, 1928). The de Broglie wavelength of electrons made the electron microscope conceivable. Nuclear physics, which led to fission, was built on the same foundations.

This event sits in the atlas because it is the intellectual hinge of the epoch. Almost every physical technology of the following century, from lasers and transistors to nuclear reactors and magnetic resonance imaging, rests on it. The primary sources are the papers themselves, in Zeitschrift für Physik and Annalen der Physik, and the historical reconstruction by Max Jammer and others is detailed and largely uncontested, though the interpretation of the theory remains argued to this day.`,
    mechanism: `Quantum mechanics replaces the classical description of a particle by a position and velocity with a wave function, a complex-valued function of position whose evolution in time is governed by Schrödinger's linear equation. Physical quantities such as energy and momentum correspond to operators acting on that function, and the possible outcomes of a measurement are the operator's eigenvalues, which for bound systems are discrete: this is why atoms have sharp spectral lines and stable ground states. The wave function's squared magnitude gives the probability of each outcome. Because position and momentum operators do not commute, no state can have both sharply defined, which is the uncertainty principle. Identical particles obey symmetry rules that, for electrons, forbid two from sharing the same state, and this exclusion principle determines the structure of atoms, the chemical bond and the conductivity of solids.`,
    prerequisites: ['planck-quantum', 'einstein-1905', 'rutherford-atom', 'maxwell-equations'],
    consequences: ['electron-microscope', 'nuclear-fission', 'transistor', 'laser', 'mri-scanner'],
    figures: [
      { name: 'Werner Heisenberg', role: 'Matrix mechanics (1925) and the uncertainty principle (1927)' },
      { name: 'Erwin Schrödinger', role: 'Wave mechanics (1926)' },
      { name: 'Max Born', role: 'Matrix formulation and the probability interpretation' },
      { name: 'Paul Dirac', role: 'General formulation and the relativistic electron equation' },
      { name: 'Wolfgang Pauli', role: 'Exclusion principle' },
      { name: 'Niels Bohr', role: 'Complementarity and the Copenhagen interpretation' },
    ],
    significance: 10,
    significanceJustification: 'Quantum mechanics is the most successful physical theory ever constructed and the foundation of the semiconductor, the laser, nuclear energy and modern chemistry. No other intellectual event of the epoch has a comparable technological reach.',
    domains: ['energy', 'materials', 'information'],
    sources: [
      { author: 'Werner Heisenberg', title: 'Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen', publisher: 'Zeitschrift für Physik', year: 1925, url: 'https://doi.org/10.1007/BF01328377' },
      { author: 'Erwin Schrödinger', title: 'Quantisierung als Eigenwertproblem (Erste Mitteilung)', publisher: 'Annalen der Physik', year: 1926, url: 'https://doi.org/10.1002/andp.19263840404' },
      { author: 'Max Jammer', title: 'The Conceptual Development of Quantum Mechanics', publisher: 'McGraw-Hill', year: 1966 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'goddard-liquid-rocket',
    epochId: 'physics-total-war',
    date: { year: 1926, month: 3, day: 16, precision: 'exact', display: '16 March 1926 (first liquid-fuelled rocket flight, Auburn, Massachusetts)' },
    location: 'Auburn, Massachusetts, United States',
    title: "Goddard's liquid-fuelled rocket",
    summary: 'Robert Goddard launched the first rocket propelled by liquid fuel and liquid oxygen from a farm in Auburn, Massachusetts, on 16 March 1926; the flight lasted 2.5 seconds and reached 12.5 metres, but it proved the propulsion principle of every later space launcher.',
    explanation: `On 16 March 1926, in a snow-covered field on his aunt's farm at Auburn, Massachusetts, Robert Goddard lit a rocket fuelled by gasoline and liquid oxygen. It rose for two and a half seconds, reached an altitude of about 12.5 metres, and landed 56 metres away in a cabbage patch. The flight was witnessed by his wife Esther, who filmed it, and by two colleagues from Clark University. It was the first flight of a liquid-propellant rocket.

Goddard, a physics professor at Clark, had been thinking about rockets since adolescence. In 1914 he patented the multi-stage rocket and the liquid-propellant rocket, and during the First World War he developed a tube-launched solid rocket for the Army that became the ancestor of the bazooka. His 1919 Smithsonian monograph, A Method of Reaching Extreme Altitudes, was mostly a sober calculation of the performance of solid rockets for upper-atmosphere research. Its final pages, however, computed the mass needed to send a payload to the Moon, and the New York Times ridiculed him for supposedly not knowing that a rocket needs air to push against. The paper's insult made Goddard secretive for the rest of his life, and that secrecy limited his influence on others.

The reason for liquid propellants was energy. Black powder and the smokeless powders of the day gave exhaust velocities of perhaps 1,000 metres per second; gasoline burned with liquid oxygen could give more than 2,500, and liquid flow could be throttled and stopped. The difficulty was engineering: pumping or pressurizing two fluids, one of them at minus 183 degrees, into a combustion chamber that would not melt. Goddard solved these problems piece by piece through the 1920s and 1930s, first at Auburn and then, with Guggenheim money arranged by Charles Lindbergh, at Roswell, New Mexico. There he flew rockets with gyroscopic stabilization, movable exhaust vanes, turbopumps and regenerative cooling. One reached 2.7 kilometres in 1937.

Goddard's direct influence on the German programme is contested. Hermann Oberth's 1923 book, written independently, was the German rocketeers' text, and Wernher von Braun's team worked out most of their solutions themselves. But Goddard's patents covered nearly every feature of the V-2, and the United States government settled with his estate for one million dollars in 1960. The primary evidence is Goddard's own notebooks and films, now at Clark University, and the Smithsonian's publication record. His 1926 flight was the first demonstration that the physics of reaching space could be engineered, if not yet the engineering itself.`,
    mechanism: `Goddard's 1926 rocket was about three metres tall. The combustion chamber and nozzle were at the top, with the fuel tanks hung below so that the thrust pulled the tanks rather than pushing them, an arrangement he soon abandoned. Gasoline and liquid oxygen were forced into the chamber by pressure from an oxygen gas cylinder, ignited by a black-powder charge, and burned to produce hot gas that expanded through a convergent-divergent nozzle. Newton's third law supplies the thrust: momentum carried away by the exhaust is balanced by momentum imparted to the rocket, independent of any surrounding air. Later Goddard rockets added gyroscopes that moved vanes in the exhaust stream for steering, pumps driven by a small turbine, and cooling by circulating fuel through a jacket around the chamber before injection, all features that later launch vehicles retained.`,
    prerequisites: ['chinese-gunpowder', 'newton-principia', 'otto-cycle-engine'],
    consequences: ['v2-rocket', 'sputnik', 'apollo-11'],
    figures: [
      { name: 'Robert H. Goddard', role: 'Designer and builder of the first liquid-fuelled rocket' },
      { name: 'Esther Goddard', role: 'Recorded the flights and preserved the archive' },
      { name: 'Charles Lindbergh', role: 'Arranged Guggenheim funding for the Roswell work' },
    ],
    significance: 7,
    significanceJustification: 'The liquid rocket is the propulsion technology of every satellite launcher and crewed spacecraft. Goddard proved it could fly and worked out most of its subsystems, though his secrecy meant much of the work was redone by others.',
    domains: ['space', 'transportation'],
    sources: [
      { author: 'Robert H. Goddard', title: 'A Method of Reaching Extreme Altitudes', publisher: 'Smithsonian Miscellaneous Collections', year: 1919 },
      { author: 'Milton Lehman', title: 'This High Man: The Life of Robert H. Goddard', publisher: 'Farrar, Straus and Company', year: 1963 },
      { author: 'Frank H. Winter', title: 'Rockets into Space', publisher: 'Harvard University Press', year: 1990 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'electronic-television',
    epochId: 'physics-total-war',
    date: { year: 1927, month: 9, day: 7, precision: 'exact', display: '7 September 1927 (Farnsworth transmits first all-electronic image); BBC regular service November 1936' },
    location: 'San Francisco, United States; Camden, New Jersey, United States; London, Britain',
    title: 'All-electronic television',
    summary: 'Philo Farnsworth transmitted the first all-electronic television image, a straight line, in San Francisco on 7 September 1927; with Vladimir Zworykin\'s camera tubes at RCA and the BBC\'s 1936 service, cathode-ray television replaced mechanical scanning.',
    explanation: `Television as an idea was older than the electronics that finally made it work. From the 1880s inventors proposed scanning an image line by line and sending the brightness values down a wire. John Logie Baird in London and Charles Jenkins in the United States built working systems in the mid-1920s using spinning perforated discs, which could deliver perhaps thirty lines of resolution and a flickering image the size of a postage stamp. The mechanical approach could not scale: the disc had to spin faster and larger for each additional line.

Philo Farnsworth, a farm boy from Utah who had sketched an electronic scanner for his high school chemistry teacher in 1922, replaced the disc with electrons. On 7 September 1927, in a loft at 202 Green Street in San Francisco, his image dissector camera tube transmitted a picture of a straight line, painted on a glass slide, to a receiving cathode-ray tube in the next room. When the slide was turned, the line on the screen turned too. He filed his key patent in January 1927 and it issued in 1930. His backers were a pair of San Francisco bankers; his laboratory was tiny.

At the same time Vladimir Zworykin, a Russian emigré who had studied under Boris Rosing in St Petersburg, was pursuing an electronic camera at Westinghouse and then, from 1930, at RCA under David Sarnoff. His iconoscope, demonstrated in 1933, stored charge on a mosaic of photosensitive cells between scans and was far more sensitive than Farnsworth's dissector. RCA spent millions and fought Farnsworth in the patent courts; in 1935 the Patent Office upheld Farnsworth's priority on electronic scanning, and RCA eventually paid him royalties, the first time it had licensed rather than bought a technology.

Britain got there first as a public service. In November 1936 the BBC began regular broadcasts from Alexandra Palace, initially alternating Baird's mechanical system with the Marconi-EMI electronic system of 405 lines; within three months Baird's was dropped. Germany televised the 1936 Olympics. RCA demonstrated television at the 1939 New York World's Fair. Then the war stopped everything, and turned the television engineers to radar, where their cathode-ray displays and wide-band video amplifiers proved to be exactly the tools needed.

Television resumed after 1945 and within a decade became the most widespread electronic device in the world. Its technical descendants are the CCD image sensor and every display that scans an image electronically. The historical record is clear on the technology and unusually well documented on the disputes, because the patent litigation preserved testimony from all parties.`,
    mechanism: `An electronic television system scans a scene and reconstructs it with beams of electrons at both ends. In Farnsworth's image dissector, a lens focused the scene onto a photocathode that emitted electrons in proportion to local brightness; magnetic coils swept the resulting electron image across a small aperture so that a single detector read out the brightness of each point in turn, line by line, about thirty complete frames per second. Zworykin's iconoscope instead stored the photoelectric charge on a mosaic of tiny cells and read it out with a scanning electron beam, accumulating light for a whole frame and so gaining sensitivity. The signal, with synchronizing pulses, modulated a radio carrier. At the receiver a cathode-ray tube swept its beam in the same pattern, the beam's intensity following the signal, and the phosphor screen glowed to reproduce the picture.`,
    prerequisites: ['hertz-radio-waves', 'marconi-wireless', 'x-rays'],
    consequences: ['radar', 'ccd-sensor'],
    figures: [
      { name: 'Philo Farnsworth', role: 'Inventor of the image dissector and first all-electronic television' },
      { name: 'Vladimir Zworykin', role: 'Inventor of the iconoscope camera tube at RCA' },
      { name: 'Isaac Shoenberg', role: 'Led the Marconi-EMI team that built the BBC 405-line system' },
      { name: 'David Sarnoff', role: 'RCA president who financed and promoted television' },
    ],
    significance: 8,
    significanceJustification: 'Television became the dominant medium of the second half of the century and reshaped politics, advertising and leisure. Its cathode-ray and video-amplifier technology also fed directly into radar and the displays of early computers.',
    domains: ['communication', 'information'],
    sources: [
      { author: 'Albert Abramson', title: 'The History of Television, 1880 to 1941', publisher: 'McFarland', year: 1987 },
      { author: 'Evan I. Schwartz', title: 'The Last Lone Inventor: A Tale of Genius, Deceit, and the Birth of Television', publisher: 'HarperCollins', year: 2002 },
      { author: 'Philo T. Farnsworth', title: 'Television System, United States Patent 1,773,980', publisher: 'United States Patent Office', year: 1930 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'penicillin',
    epochId: 'physics-total-war',
    date: { year: 1928, precision: 'year', display: '1928 (Fleming\'s observation) to 1943 (mass production); Oxford clinical trial 1941' },
    location: 'London and Oxford, Britain; Peoria, Illinois, United States',
    title: 'Penicillin: discovery and industrial production',
    summary: 'Alexander Fleming noticed in 1928 that a Penicillium mould killed staphylococci; Howard Florey, Ernst Chain and Norman Heatley isolated the substance at Oxford in 1940, proved it in patients in 1941, and an Anglo-American programme produced it by the ton in 1943 to 1945.',
    explanation: `The story has two halves, a decade apart, and the second is the one that mattered. In early September 1928 Alexander Fleming, returning to his laboratory at St Mary's Hospital in London from holiday, noticed that a culture plate of Staphylococcus had been contaminated by a mould, and that the bacteria near the mould had dissolved. He identified the mould as a Penicillium, showed that the broth it grew in killed a range of bacteria without harming white blood cells, and named the active substance penicillin. His 1929 paper suggested it might be useful as an antiseptic. But the substance was unstable, he could not concentrate it, and he turned to other work.

In 1938 Ernst Chain, a refugee biochemist at the Sir William Dunn School of Pathology in Oxford, came across Fleming's paper while surveying antibacterial substances. With Howard Florey, the school's Australian professor, and the biochemist Norman Heatley, he set out to purify penicillin. Heatley's back-extraction method, moving the substance between ether and water at controlled pH, and his freeze-drying gave a brown powder that, in May 1940, protected mice from lethal streptococcal infection. The team published in The Lancet in August 1940. Growing the mould in every bedpan, biscuit tin and bath they could find, they treated the first patient, a policeman named Albert Alexander, in February 1941. He improved dramatically, the supply ran out, and he died; but five further patients recovered, and the case was made.

Britain in 1941 had no spare industrial capacity, so Florey and Heatley flew to the United States. At the Department of Agriculture's Northern Regional Research Laboratory in Peoria, Illinois, researchers found that corn steep liquor increased yields tenfold, that deep submerged fermentation in aerated tanks worked far better than surface culture, and, from a mouldy cantaloupe in a Peoria market, a strain of Penicillium chrysogenum that produced far more penicillin. Pfizer, Merck, Squibb and others, coordinated by the War Production Board, built fermentation plants. Production went from a few hundred million units in 1942 to more than six trillion units a month by mid-1945, enough for every Allied casualty of the Normandy campaign.

Penicillin was the first antibiotic and the first drug produced by industrial microbiology at scale. Death rates from pneumonia, wound infection, syphilis and childbed fever fell within a few years. Deep-tank fermentation became the platform for streptomycin, the tetracyclines, and eventually for recombinant proteins. Fleming, Florey and Chain shared the 1945 Nobel Prize; Heatley was overlooked until Oxford gave him an honorary doctorate in 1990. The evidence is abundant and includes the Oxford laboratory notebooks, the Lancet papers and the Peoria records.`,
    mechanism: `Penicillin is a small molecule built around a strained four-membered beta-lactam ring. Bacteria maintain their shape with a wall of peptidoglycan, and the final step in building that wall is a cross-linking reaction catalysed by enzymes called transpeptidases. Penicillin resembles the natural substrate of those enzymes, binds to them and, because of the ring strain, reacts irreversibly, so the enzyme is permanently blocked. Growing bacteria continue to enlarge without completing their wall and burst under their own internal pressure. Animal cells have no such wall, which is why the drug is so selective. Industrial production grows Penicillium chrysogenum in deep, stirred, aerated tanks of corn steep liquor and lactose for several days, then extracts the acidic penicillin from the filtered broth into a solvent and back into a buffered aqueous phase, and finally crystallizes it as a sodium or potassium salt.`,
    prerequisites: ['germ-theory-pasteur', 'koch-postulates', 'lister-antisepsis', 'insulin'],
    consequences: ['polio-vaccine', 'recombinant-dna'],
    figures: [
      { name: 'Alexander Fleming', role: 'Observed and named penicillin, 1928' },
      { name: 'Howard Florey', role: 'Led the Oxford programme and the transfer to American industry' },
      { name: 'Ernst Chain', role: 'Biochemist who initiated the Oxford work' },
      { name: 'Norman Heatley', role: 'Devised the extraction and culture methods' },
      { name: 'Andrew Moyer', role: 'Peoria researcher who introduced corn steep liquor' },
    ],
    significance: 9,
    significanceJustification: 'Penicillin opened the antibiotic era and cut deaths from bacterial infection more sharply than any other medical technology. The industrial fermentation built to make it became the foundation of the pharmaceutical and biotechnology industries.',
    domains: ['biology-medicine', 'manufacturing'],
    sources: [
      { author: 'Alexander Fleming', title: 'On the antibacterial action of cultures of a Penicillium, with special reference to their use in the isolation of B. influenzae', publisher: 'British Journal of Experimental Pathology', year: 1929 },
      { author: 'E. Chain, H. W. Florey, A. D. Gardner, N. G. Heatley, M. A. Jennings, J. Orr-Ewing and A. G. Sanders', title: 'Penicillin as a chemotherapeutic agent', publisher: 'The Lancet', year: 1940, url: 'https://doi.org/10.1016/S0140-6736(01)08728-1' },
      { author: 'Eric Lax', title: "The Mold in Dr. Florey's Coat: The Story of the Penicillin Miracle", publisher: 'Henry Holt', year: 2004 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'electron-microscope',
    epochId: 'physics-total-war',
    date: { year: 1931, precision: 'year', display: '1931 (first two-stage electron microscope, Berlin) to 1933 (resolution exceeds the light microscope)' },
    location: 'Berlin, Germany',
    title: 'The electron microscope',
    summary: 'Ernst Ruska and Max Knoll built the first electron microscope at the Technische Hochschule in Berlin in 1931 and by 1933 had passed the resolution limit of light, opening the world of viruses, cell organelles and crystal defects to direct observation.',
    explanation: `Ernst Abbe had shown in 1873 that a microscope cannot resolve details much smaller than half the wavelength of the light it uses, about 200 nanometres for visible light. For sixty years that was the wall. Bacteria could be seen; viruses, the internal structure of cells, and the arrangement of atoms in materials could not. Louis de Broglie's 1924 proposal that electrons have a wavelength, confirmed by electron diffraction experiments in 1927, offered a way through: an electron accelerated by 50,000 volts has a wavelength about a hundred thousand times shorter than visible light.

The instrument was built in the high-voltage laboratory of the Technische Hochschule in Berlin, where Max Knoll led a group studying cathode-ray oscillographs. Hans Busch had shown in 1926 that a short magnetic coil acts on an electron beam as a convex lens acts on light. Ernst Ruska, a doctoral student, tested Busch's theory in 1929 and then, with Knoll, assembled two such lenses in series. In April 1931 they obtained a magnified image of a metal grid at seventeen times, then four hundred times: the first electron microscope, though it could not yet beat a good light microscope. Ruska improved the lenses, and in 1933 his instrument reached twelve thousand times magnification with resolution better than light could achieve. In parallel Reinhold Rüdenberg of Siemens filed patents in 1931 that provoked a long priority dispute.

Turning a laboratory device into a tool took most of the decade. Specimens had to be thin enough for electrons to pass through and were destroyed by the beam and the vacuum; biological material in particular seemed hopeless. Bodo von Borries and Ruska, at Siemens from 1937, built the first commercial instrument in 1939, and Helmut Ruska, Ernst's brother, a physician, produced the first images of bacteriophages and viruses the same year. In North America, James Hillier and Albert Prebus built a working instrument at Toronto in 1938, and RCA began production in 1940. Support films, shadow casting with evaporated metal, and, after the war, ultramicrotomy and fixation methods made cells visible in detail.

The electron microscope opened two fields. In biology it revealed the mitochondrion, the endoplasmic reticulum, the ribosome and the structure of viruses, and it settled the question of what a virus was. In materials science it showed dislocations in metals directly (Hirsch and colleagues, Cambridge, 1956), confirming the theory of plastic deformation. The scanning electron microscope, developed by Manfred von Ardenne in 1937 and made practical at Cambridge in the 1950s and 1960s, became the standard inspection tool of semiconductor manufacturing. Ruska received the Nobel Prize in Physics in 1986, fifty-five years after his first instrument, shared with the inventors of the scanning tunnelling microscope. The primary sources are the Knoll and Ruska papers in Zeitschrift für Physik and Ruska's own detailed account in his Nobel lecture.`,
    mechanism: `A transmission electron microscope is a light microscope with electrons in place of photons and magnetic coils in place of glass. A heated tungsten filament emits electrons that are accelerated through a high voltage, typically 50 to 100 kilovolts in early instruments, giving them a wavelength of a few picometres. A condenser coil focuses the beam onto a very thin specimen in vacuum; electrons that pass through are scattered by the specimen's atoms in proportion to their density and thickness. An objective coil, whose magnetic field bends electron paths much as a convex lens bends light, forms a magnified image that a projector coil enlarges further onto a fluorescent screen or photographic plate. Resolution is limited not by wavelength but by the aberrations of magnetic lenses, which is why early instruments reached nanometres rather than picometres.`,
    prerequisites: ['microscope', 'quantum-mechanics', 'x-rays'],
    consequences: ['integrated-circuit', 'dna-double-helix'],
    figures: [
      { name: 'Ernst Ruska', role: 'Built the first electron microscope and its successors' },
      { name: 'Max Knoll', role: 'Led the Berlin laboratory and co-built the first instrument' },
      { name: 'Bodo von Borries', role: 'Co-developed the Siemens commercial instrument' },
      { name: 'Helmut Ruska', role: 'First images of viruses and bacteriophages, 1939' },
    ],
    significance: 8,
    significanceJustification: 'By breaking the resolution limit of light, the electron microscope made viruses, cell organelles and crystal defects directly visible, founding cell biology and modern materials science and becoming the inspection tool of the semiconductor industry.',
    domains: ['biology-medicine', 'materials', 'information'],
    sources: [
      { author: 'Max Knoll and Ernst Ruska', title: 'Das Elektronenmikroskop', publisher: 'Zeitschrift für Physik', year: 1932, url: 'https://doi.org/10.1007/BF01342199' },
      { author: 'Ernst Ruska', title: 'The development of the electron microscope and of electron microscopy (Nobel Lecture)', publisher: 'Nobel Foundation', year: 1986, url: 'https://www.nobelprize.org/prizes/physics/1986/ruska/lecture/' },
      { author: 'Lin Qing', title: 'Zur Frühgeschichte des Elektronenmikroskops', publisher: 'GNT-Verlag', year: 1995 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'nylon',
    epochId: 'physics-total-war',
    date: { year: 1935, month: 2, day: 28, precision: 'exact', display: '28 February 1935 (nylon 6,6 first made at DuPont); announced October 1938; stockings on sale May 1940' },
    location: 'Wilmington, Delaware, United States',
    title: 'Nylon, the first fully synthetic fibre',
    summary: 'Wallace Carothers\' group at DuPont made polyamide 6,6 on 28 February 1935, the first synthetic fibre spun from a polymer designed on paper; nylon stockings went on sale in May 1940 and the fibre went to war in parachutes and tyre cord.',
    explanation: `In 1928 DuPont hired Wallace Carothers, a Harvard organic chemist, to run a fundamental research group with no immediate product in mind. The company had grown rich on explosives and had bought its way into dyes, paints and cellophane; it now wanted to understand polymers. At the time the nature of polymers was itself disputed. Hermann Staudinger in Germany argued that rubber, cellulose and proteins were true giant molecules held together by ordinary covalent bonds, while many chemists still believed they were loose aggregates of small molecules. Carothers set out to settle the question by building polymers deliberately from small molecules of known structure, using reactions whose mechanism was understood.

His group made polyesters by condensing diacids with diols and showed in 1930 that the products could be drawn into fibres, confirming Staudinger. The same year Arnold Collins in the group polymerized chloroprene, giving the synthetic rubber neoprene. But the polyesters melted too easily and dissolved in dry-cleaning solvents. Carothers turned to polyamides, in which the chains are held together by hydrogen bonds like those in silk, and on 28 February 1935 Gerard Berchet made polyamide 6,6 from hexamethylenediamine and adipic acid. Drawn from the melt, it formed a fibre that was strong, elastic, and impervious to solvents and moths, and had a melting point of about 265 degrees.

DuPont then spent three years and 27 million dollars turning a test-tube product into a fibre industry: routes to the two monomers from coal tar and, later, benzene; melt-spinning equipment; and cold drawing, which aligned the chains and quadrupled the strength. Carothers, who suffered from depression, took his own life in April 1937, before the announcement. The company unveiled nylon at the New York World's Fair site in October 1938 and put nylon stockings on national sale on 15 May 1940; four million pairs sold in four days. In 1942 the entire output was diverted to parachutes, glider tow ropes, tyre cord and flak vests.

Nylon's significance is threefold. It was the first commercial product of deliberately designed polymer chemistry, and it proved Staudinger's macromolecular hypothesis in the most practical way possible. It established the pattern of industrial research in which a company funds fundamental science and captures the applications. And it began the replacement of natural fibres, rubber and metals by synthetic materials that continued through polyester, polyethylene and the engineering plastics. The evidence is DuPont's own records, extensively used by historians, and Carothers' papers in the Journal of the American Chemical Society.`,
    mechanism: `Nylon 6,6 is a polyamide made by condensing two six-carbon molecules, hexamethylenediamine and adipic acid, which are first combined into a salt so that the two are present in exactly equal amounts. Heating the salt under pressure drives off water as each amine group reacts with a carboxylic acid group to form an amide link, and the chains grow to thousands of repeat units. The molten polymer is pumped through a spinneret, a plate of fine holes, and the filaments solidify in air. Cold drawing then stretches the filaments to about four times their length, sliding the chains into parallel alignment where hydrogen bonds between the amide groups of neighbouring chains lock them together. That crystalline order gives the fibre its high strength and elasticity, and the absence of reactive side groups gives its resistance to solvents and rot.`,
    prerequisites: ['bakelite', 'haber-bosch', 'periodic-table'],
    consequences: ['synthetic-rubber'],
    figures: [
      { name: 'Wallace Carothers', role: 'Led the DuPont polymer research group' },
      { name: 'Julian Hill', role: 'Discovered cold drawing of polyester fibres, 1930' },
      { name: 'Gerard Berchet', role: 'First synthesized polyamide 6,6' },
      { name: 'Elmer Bolton', role: 'DuPont research director who pushed nylon to production' },
    ],
    significance: 7,
    significanceJustification: 'Nylon was the first synthetic fibre and the first product of designed polymer chemistry, opening the age of plastics and synthetic textiles. It also demonstrated that corporate fundamental research could pay off, a lesson the following decades absorbed.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Matthew E. Hermes', title: 'Enough for One Lifetime: Wallace Carothers, Inventor of Nylon', publisher: 'American Chemical Society and Chemical Heritage Foundation', year: 1996 },
      { author: 'Wallace H. Carothers and Julian W. Hill', title: 'Studies of polymerization and ring formation. XV. Artificial fibers from synthetic linear condensation superpolymers', publisher: 'Journal of the American Chemical Society', year: 1932 },
      { author: 'David A. Hounshell and John Kenly Smith', title: 'Science and Corporate Strategy: Du Pont R and D, 1902-1980', publisher: 'Cambridge University Press', year: 1988 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'radar',
    epochId: 'physics-total-war',
    date: { year: 1935, month: 2, day: 26, precision: 'exact', display: '26 February 1935 (Daventry demonstration); Chain Home operational 1938 to 1939; cavity magnetron February 1940' },
    location: 'Daventry and Bawdsey, Britain; Birmingham, Britain',
    title: 'Radar and the cavity magnetron',
    summary: 'Robert Watson-Watt and Arnold Wilkins showed on 26 February 1935 that a bomber could be detected by reflected radio waves; the Chain Home network that followed won the Battle of Britain, and the 1940 cavity magnetron made microwave radar small enough to fit in aircraft and ships.',
    explanation: `In January 1935 the British Air Ministry asked Robert Watson-Watt of the Radio Research Station at Slough whether a radio death ray could disable aircraft. His assistant Arnold Wilkins calculated that it could not, but that an aircraft would reflect enough of a powerful radio signal to be detected at a distance. On 26 February 1935, near Daventry, a Heyford bomber flying through the beam of the BBC's shortwave transmitter produced a clear signal on a receiver in a van eight miles away. Within weeks the Ministry funded a research station, first at Orfordness and then at Bawdsey Manor on the Suffolk coast.

The idea of detecting objects by radio echoes was not new. Christian Hülsmeyer had patented a ship-detecting apparatus in 1904, and by the mid-1930s Germany, the United States, France, the Soviet Union, Italy, the Netherlands and Japan all had programmes. Britain's distinction was to build a working system fastest and to integrate it with a command organization. By September 1939 the Chain Home stations, tall steel towers transmitting pulses at wavelengths of about ten metres, covered the eastern and southern coasts, and their reports flowed through filter rooms to Fighter Command's operations rooms, where controllers directed squadrons by radio. In the summer of 1940 this system allowed a numerically inferior fighter force to meet German raids where they came, instead of patrolling blind, and it was decisive in the Battle of Britain.

Chain Home's long wavelengths meant coarse resolution and huge antennas. The step change came from the University of Birmingham, where John Randall and Harry Boot built the first cavity magnetron on 21 February 1940. It generated ten kilowatts at a wavelength of ten centimetres, a thousand times the power of any previous source at that wavelength, from a device that fitted in the hand. Centimetric radar could be carried in an aircraft to find surfaced submarines and to map cities at night, or in a ship to direct gunfire. In September 1940 the Tizard Mission carried a magnetron to the United States, where the MIT Radiation Laboratory grew to four thousand staff and produced more than a hundred radar systems.

Radar's postwar consequences are as large as its wartime ones. Microwave engineering, pulse circuits and cathode-ray displays fed directly into electronic computers; the search for better crystal detectors for microwave receivers trained the solid-state physicists who built the transistor; microwave spectroscopy led to the maser and laser; and the principle of timed radio pulses underlies air traffic control, weather radar, satellite navigation and the microwave oven. The documentary record, including the Bawdsey files and the Radiation Laboratory's 28-volume technical series, is exhaustive.`,
    mechanism: `A radar transmitter sends a brief, powerful pulse of radio energy from a directional antenna, then listens with a sensitive receiver. Any object whose size is comparable to or larger than the wavelength scatters some of that energy back, and the round-trip delay, at the speed of light, gives the range: a target 150 kilometres away returns its echo after one millisecond. Direction comes from the antenna's orientation or, in Chain Home, from comparing signals on crossed antennas. The echo is displayed on a cathode-ray tube as a blip on a time base. The cavity magnetron generates microwaves by spinning a cloud of electrons around a central cathode in a strong magnetic field past a ring of resonant cavities cut into a copper block; the electrons bunch and give up energy to the cavities' oscillating fields, producing kilowatts of power at centimetre wavelengths from a compact device.`,
    prerequisites: ['hertz-radio-waves', 'marconi-wireless', 'maxwell-equations', 'sonar', 'electronic-television'],
    consequences: ['eniac', 'transistor', 'laser', 'gps'],
    figures: [
      { name: 'Robert Watson-Watt', role: 'Led the British radar programme from 1935' },
      { name: 'Arnold Wilkins', role: 'Calculated aircraft detection and ran the Daventry experiment' },
      { name: 'John Randall', role: 'Co-inventor of the cavity magnetron' },
      { name: 'Harry Boot', role: 'Co-inventor of the cavity magnetron' },
      { name: 'Henry Tizard', role: 'Chaired the committee that backed radar and led the 1940 mission to America' },
    ],
    significance: 9,
    significanceJustification: 'Radar decided the Battle of Britain and the Battle of the Atlantic, and its electronics became the seedbed of the computer, the transistor and microwave communications. It is arguably the technology with the broadest postwar civilian descent of any wartime programme.',
    domains: ['information', 'weapons-security', 'communication'],
    sources: [
      { author: 'Robert Buderi', title: 'The Invention That Changed the World: How a Small Group of Radar Pioneers Won the Second World War and Launched a Technological Revolution', publisher: 'Simon and Schuster', year: 1996 },
      { author: 'Louis Brown', title: 'A Radar History of World War II: Technical and Military Imperatives', publisher: 'Institute of Physics Publishing', year: 1999 },
      { author: 'David Zimmerman', title: 'Britain\'s Shield: Radar and the Defeat of the Luftwaffe', publisher: 'Sutton Publishing', year: 2001 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'turing-1936',
    epochId: 'physics-total-war',
    date: { year: 1936, precision: 'year', display: '1936 (received 28 May 1936; published in two parts, November 1936 and 1937)' },
    location: 'Cambridge, Britain',
    title: "Turing's 'On Computable Numbers'",
    summary: 'Alan Turing defined computation in terms of an abstract machine reading and writing symbols on a tape, showed that a single universal machine could imitate any other, and proved that some well-posed mathematical questions cannot be decided by any mechanical procedure.',
    explanation: `In 1928 David Hilbert had posed the Entscheidungsproblem: is there a mechanical procedure that, given any statement in formal logic, decides whether it is provable? Kurt Gödel's 1931 incompleteness theorems had already shown that any consistent formal system rich enough for arithmetic contains true statements it cannot prove, but the decision problem remained open, in part because no one had a precise definition of a mechanical procedure. Alan Turing, a 23-year-old fellow of King's College, Cambridge, supplied one. His paper, received by the London Mathematical Society on 28 May 1936, imagines a machine with a finite number of internal states, a tape divided into squares that can hold a symbol, and a head that reads one square at a time, writes, and moves left or right according to a fixed table of rules. Anything that a human clerk following instructions could calculate, Turing argued, such a machine could calculate.

Three results followed. First, computable numbers, those whose decimal expansions such a machine can write out, are countable, so most real numbers are not computable. Second, there exists a universal machine that, given a description of any other machine on its tape, will do exactly what that machine would do: one machine, suitably programmed, is equivalent to all of them. Third, no machine can decide in general whether a given machine will ever halt, and from this the Entscheidungsproblem has no solution. Alonzo Church at Princeton had reached the same negative answer a few months earlier using his lambda calculus; Turing added an appendix showing the two definitions equivalent, and spent 1936 to 1938 at Princeton completing a doctorate under Church.

The paper was read by few people at the time. Its importance lies in the idea of the universal machine, which is the theoretical description of the stored-program computer: hardware that is fixed and general, with behaviour determined entirely by the symbols loaded into its memory. John von Neumann, who knew Turing at Princeton, read the paper and, according to Stanley Frankel, urged it on colleagues as the fundamental document. Von Neumann's 1945 report on the EDVAC, which set the architecture of every subsequent computer, follows its logic. Turing himself designed the Automatic Computing Engine for the National Physical Laboratory in 1945 with explicit reference to universality.

The paper also founded a branch of mathematics. Computability theory, the theory of what can and cannot be calculated, and later complexity theory, the theory of what can be calculated efficiently, both grow from it. The halting problem is the ancestor of every undecidability result in computer science. The text is unambiguous and its influence on von Neumann is well attested, though the degree to which ENIAC's designers knew of it is debated.`,
    mechanism: `A Turing machine consists of an unbounded tape of cells, each blank or holding one symbol from a finite alphabet; a head positioned over one cell; a finite set of internal states; and a table of rules. Each rule says: in state q, reading symbol s, write symbol s', move the head one cell left or right, and enter state q'. Starting from an initial state with the input written on the tape, the machine applies one rule per step until it reaches a halting state or runs forever. The universal machine is a particular such table which, given on its tape an encoding of any other machine's rule table followed by that machine's input, simulates it step by step. Because the encoding is just symbols on the tape, programs and data are the same kind of thing, which is the principle of stored-program computing.`,
    prerequisites: ['babbage-analytical-engine', 'ada-lovelace-notes', 'al-khwarizmi-algebra'],
    consequences: ['enigma-break', 'von-neumann-architecture', 'eniac'],
    figures: [
      { name: 'Alan Turing', role: 'Author' },
      { name: 'Alonzo Church', role: 'Independent lambda calculus result; Turing\'s doctoral supervisor' },
      { name: 'Max Newman', role: 'Cambridge lecturer whose course posed the problem and who forwarded the paper' },
      { name: 'David Hilbert', role: 'Posed the Entscheidungsproblem' },
    ],
    significance: 10,
    significanceJustification: 'The paper defines what a computer is and proves the limits of what any computer can do. The universal machine is the theoretical basis of every general-purpose computer built since.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Alan M. Turing', title: 'On Computable Numbers, with an Application to the Entscheidungsproblem', publisher: 'Proceedings of the London Mathematical Society', year: 1937, url: 'https://doi.org/10.1112/plms/s2-42.1.230' },
      { author: 'Andrew Hodges', title: 'Alan Turing: The Enigma', publisher: 'Burnett Books and Simon and Schuster', year: 1983 },
      { author: 'Charles Petzold', title: "The Annotated Turing: A Guided Tour through Alan Turing's Historic Paper on Computability and the Turing Machine", publisher: 'Wiley', year: 2008 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'shannon-thesis-1937',
    epochId: 'physics-total-war',
    date: { year: 1937, precision: 'year', display: '1937 (MIT master\'s thesis); published in Transactions of the AIEE, 1938' },
    location: 'Cambridge, Massachusetts, United States',
    title: "Shannon's 'A Symbolic Analysis of Relay and Switching Circuits'",
    summary: 'In his 1937 MIT master\'s thesis Claude Shannon showed that networks of switches obey Boolean algebra, so that any logical or arithmetic function can be designed, simplified and analysed as an algebraic expression, the foundation of digital circuit design.',
    explanation: `Claude Shannon arrived at MIT in 1936, aged twenty, with degrees in electrical engineering and mathematics from Michigan, and took a job tending Vannevar Bush's differential analyser. The analyser was an analogue machine of shafts and wheels, but its control circuits were built from electromechanical relays, the same switches that routed calls in telephone exchanges. Relay circuits at the time were designed by intuition and trial. Shannon noticed that a switch is either open or closed, that switches in series behave like a logical AND and switches in parallel like a logical OR, and that the algebra George Boole had published in 1854 for reasoning about true and false statements described such circuits exactly.

His thesis, A Symbolic Analysis of Relay and Switching Circuits, completed in 1937 and published in the Transactions of the American Institute of Electrical Engineers in 1938, works this out systematically. Any circuit of switches corresponds to a Boolean expression; the expression can be manipulated by algebraic rules to find a simpler circuit that does the same thing; and, in the other direction, any function that can be written in Boolean terms can be built from switches. He gave worked examples: a selective circuit, a lock with a combination, and a circuit that adds binary numbers. The last example, a relay adder, is the template of the arithmetic unit of every digital computer.

The thesis is often called the most important master's thesis of the century, a judgment first made by Howard Gardner and widely repeated. The claim is defensible on grounds of consequence rather than difficulty. Before Shannon, the design of switching circuits was a craft; after, it was a branch of applied mathematics, and engineers could reason about circuits with thousands of elements. Victor Shestakov in Moscow reached similar conclusions independently around 1935, but did not publish until 1941, and Shannon's paper was the one the world read. Konrad Zuse in Berlin also worked out a switching calculus for his own machines without knowing either.

Shannon's thesis arrived at exactly the moment when relay computers were being built: George Stibitz's Complex Number Calculator at Bell Laboratories in 1939, Howard Aiken's Harvard Mark I in 1944. When vacuum tubes and then transistors replaced relays, the algebra carried over unchanged; a logic gate is a switch by another name. Every integrated circuit is designed as a Boolean expression realized in silicon. Shannon went on to found information theory in 1948, but the thesis is the more direct ancestor of the digital computer. The document itself is available from MIT, and its reception is traced in the standard biographies.`,
    mechanism: `Shannon's method assigns each switch a variable that is 0 when the switch is closed and 1 when it is open (he used the hindrance convention; modern practice reverses it). Two switches in series present a hindrance equal to the Boolean sum of their variables, since the path is blocked if either is open; two in parallel present the product, since the path is blocked only if both are open. Any network therefore reduces to an expression in Boolean algebra, and the theorems of that algebra, such as De Morgan's laws and the distributive laws, become rules for rewiring circuits without changing their behaviour. Designing a circuit runs the other way: write the truth table of the desired function, express it as a Boolean formula, simplify, and translate each term back into switches. Relays, whose contacts are switches operated by electromagnets, allow the output of one circuit to control another, so the method extends to sequential and arithmetic circuits.`,
    prerequisites: ['electric-telegraph', 'telephone', 'leibniz-stepped-reckoner'],
    consequences: ['shannon-information-theory', 'von-neumann-architecture', 'integrated-circuit'],
    figures: [
      { name: 'Claude Shannon', role: 'Author' },
      { name: 'Vannevar Bush', role: 'Thesis supervisor and builder of the differential analyser' },
      { name: 'George Boole', role: 'Originator of the algebra of logic, 1854' },
    ],
    significance: 9,
    significanceJustification: 'The thesis turned digital circuit design from a craft into mathematics and provided the method by which every subsequent computer, relay, tube or transistor, has been designed. Its reach extends to every logic gate in every chip.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Claude E. Shannon', title: 'A Symbolic Analysis of Relay and Switching Circuits', publisher: 'Transactions of the American Institute of Electrical Engineers', year: 1938, url: 'https://doi.org/10.1109/T-AIEE.1938.5057767' },
      { author: 'Jimmy Soni and Rob Goodman', title: 'A Mind at Play: How Claude Shannon Invented the Information Age', publisher: 'Simon and Schuster', year: 2017 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'jet-engine',
    epochId: 'physics-total-war',
    date: { year: 1937, month: 4, day: 12, precision: 'exact', display: '12 April 1937 (Whittle\'s first turbojet run); 27 August 1939 (first jet flight, Heinkel He 178)' },
    location: 'Rugby, Britain, and Rostock, Germany',
    title: 'The turbojet engine',
    summary: 'Frank Whittle ran the first turbojet on a test bench at Rugby on 12 April 1937, and Hans von Ohain\'s independently designed engine powered the first jet aircraft, the Heinkel He 178, on 27 August 1939; the gas turbine removed the speed ceiling of the propeller.',
    explanation: `By the mid-1930s aircraft designers could see a wall approaching. A propeller loses efficiency as its tips near the speed of sound, and piston engines were growing heavier and more complex for every increment of power. Frank Whittle, a Royal Air Force cadet and then a junior officer, argued in a 1928 thesis that flight at high altitude and high speed needed a different engine, and in January 1930 he patented a gas turbine that would drive a compressor and expel the hot exhaust as a jet. The Air Ministry saw no merit in it, and Whittle let the patent lapse in 1935 for want of five pounds. With two ex-RAF officers and a small investment he formed Power Jets Ltd in 1936, and on 12 April 1937 the first engine, built by British Thomson-Houston at Rugby, ran on a test bench, accelerating uncontrollably to Whittle's alarm.

In Germany Hans von Ohain, a physics doctoral student at Göttingen, had patented a similar engine in 1935 without knowledge of Whittle. Ernst Heinkel hired him in 1936, and his HeS 3B engine flew in the He 178 on 27 August 1939, five days before the invasion of Poland, with Erich Warsitz at the controls. Britain's Gloster E.28/39 flew with a Whittle engine on 15 May 1941. Both governments then took the technology into the mainstream: the Messerschmitt Me 262 entered service in 1944 with Junkers axial-flow engines, and the Gloster Meteor with Rolls-Royce engines the same year. Whittle's design was handed to General Electric in 1941, and America's first jet, the Bell XP-59A, flew in October 1942.

The technical difficulty was not the principle but the materials. A turbine spinning at ten thousand revolutions per minute in gas at 800 degrees creeps and cracks; Whittle's engines were made possible by the nickel-chromium alloy Nimonic, developed by Mond Nickel, and German engines suffered from their lack of such alloys. Compressor efficiency, combustion stability and fuel control each required years of work.

Whittle and von Ohain, who met after the war and became friends, are jointly credited, and the historical record supports that. Their invention had almost no effect on the war's outcome, but a very large effect afterward. Within a decade the jet had displaced the piston engine in military aviation, and the de Havilland Comet of 1952 and Boeing 707 of 1958 brought it to airlines. The gas turbine also went to sea, into power stations, and into the helicopter as the turboshaft. Long-distance air travel at jet speed became, with the shipping container, the physical basis of a globalized economy, and the navigation needs of jet airliners were a major driver of satellite positioning.`,
    mechanism: `A turbojet is a continuous-flow heat engine. Air enters the intake and is compressed several-fold by a rotating compressor, centrifugal in Whittle's and von Ohain's engines and axial in most later designs. Fuel is sprayed into the compressed air in combustion chambers and burns continuously, raising the gas temperature to several hundred degrees and its volume greatly. The hot gas expands through a turbine, which extracts just enough energy to drive the compressor through a connecting shaft, and the remainder accelerates through a nozzle to leave the engine at high velocity. Thrust is the rate at which the engine adds momentum to the airflow. Because there are no reciprocating parts and the cycle is continuous, power scales with airflow rather than engine mass, and the engine works better, not worse, at high altitude and speed.`,
    prerequisites: ['otto-cycle-engine', 'wright-flyer', 'aeolipile', 'bessemer-steel'],
    consequences: ['gps'],
    figures: [
      { name: 'Frank Whittle', role: 'Patented the turbojet in 1930 and ran the first engine in 1937' },
      { name: 'Hans von Ohain', role: 'Independently designed the engine that made the first jet flight' },
      { name: 'Erich Warsitz', role: 'Pilot of the first jet flight' },
      { name: 'Ernst Heinkel', role: 'Financed von Ohain and built the He 178' },
    ],
    significance: 8,
    significanceJustification: 'The turbojet made high-speed and, later, mass long-distance flight possible and displaced the piston engine within a decade of the war. Its economic effect, through air travel and freight, was global.',
    domains: ['transportation', 'energy'],
    sources: [
      { author: 'Frank Whittle', title: 'Jet: The Story of a Pioneer', publisher: 'Frederick Muller', year: 1953 },
      { author: 'Edward W. Constant II', title: 'The Origins of the Turbojet Revolution', publisher: 'Johns Hopkins University Press', year: 1980 },
      { author: 'John Golley', title: 'Whittle: The True Story', publisher: 'Airlife', year: 1987 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'nuclear-fission',
    epochId: 'physics-total-war',
    date: { year: 1938, month: 12, day: 17, precision: 'exact', display: '17 December 1938 (Hahn and Strassmann\'s decisive experiment); interpreted by Meitner and Frisch, January 1939' },
    location: 'Berlin-Dahlem, Germany, and Kungälv, Sweden',
    title: 'Discovery of nuclear fission',
    summary: 'Otto Hahn and Fritz Strassmann found in December 1938 that uranium bombarded with neutrons produced barium; Lise Meitner and Otto Frisch explained in January 1939 that the nucleus had split in two, releasing about 200 million electron volts, and named the process fission.',
    explanation: `The chain of events began with Enrico Fermi's discovery in 1934 that slow neutrons induced radioactivity in almost every element, and his claim to have made elements heavier than uranium by neutron capture. Chemists in Berlin, Paris and Rome spent four years trying to identify these transuranic products, and the results were confusing: too many activities, with half-lives that did not fit. Ida Noddack suggested in 1934 that the uranium nucleus might be breaking into large fragments, but no one took the suggestion seriously, because the physics of the time held that a nucleus could lose only small pieces.

At the Kaiser Wilhelm Institute for Chemistry in Berlin-Dahlem, Otto Hahn and Lise Meitner had worked together for thirty years. Meitner, an Austrian of Jewish descent, lost her protection when Germany annexed Austria in March 1938 and fled to Sweden in July. Hahn continued with the analytical chemist Fritz Strassmann. In November they found products that behaved chemically like radium, and Meitner, by letter, pressed them to check. In an experiment concluded on 17 December 1938 they used fractional crystallization to show that the substance was not radium at all but barium, element 56, roughly half the mass of uranium. Hahn wrote to Meitner on 19 December, saying that as chemists they had to report barium but that as nuclear physicists they could not explain it. The paper went to Naturwissenschaften on 22 December and appeared on 6 January 1939.

Meitner received the letter at Kungälv, near Gothenburg, where she was spending Christmas with her nephew Otto Frisch, a physicist at Bohr's institute in Copenhagen. Walking in the snow, they worked out the answer using Bohr's picture of the nucleus as a liquid drop: a uranium nucleus, set wobbling by an absorbed neutron, could stretch and divide into two smaller drops, which would fly apart under their mutual electrical repulsion. From the known masses they calculated that the fragments would carry about 200 million electron volts, and that the mass lost, about a fifth of a proton mass, matched that energy through Einstein's relation. Frisch borrowed the word fission from cell biology. Their note appeared in Nature on 11 February 1939; Frisch confirmed the energetic fragments in Copenhagen in January.

Within weeks Frédéric Joliot in Paris and Fermi and Leo Szilard in New York showed that each fission released two or three further neutrons, making a chain reaction possible in principle. The paper had been published openly, and by the summer of 1939 physicists in Germany, Britain, France, the United States and the Soviet Union were all considering bombs. Hahn alone received the 1944 Nobel Prize in Chemistry; Meitner's exclusion is generally regarded as an injustice, though the primary papers make the division of labour clear.`,
    mechanism: `A uranium-235 nucleus contains 92 protons and 143 neutrons held together by the strong nuclear force against the electrical repulsion of the protons. When it absorbs a neutron, the excitation energy makes the nucleus oscillate like a liquid drop. If the deformation passes a critical point, the two lobes are far enough apart that electrical repulsion exceeds the short-range nuclear attraction, and the drop splits into two fragments, typically of masses near 95 and 140, such as barium and krypton. The fragments repel each other and fly apart with a combined kinetic energy of about 170 million electron volts; gamma rays, beta decays and two or three free neutrons carry the remainder of the roughly 200 million electron volts released. The energy comes from the difference in binding energy per nucleon between uranium and the fragments, which is expressed as a loss of mass through the relation between mass and energy.`,
    prerequisites: ['rutherford-atom', 'einstein-1905', 'quantum-mechanics', 'x-rays'],
    consequences: ['manhattan-project', 'hydrogen-bomb', 'nuclear-power'],
    figures: [
      { name: 'Otto Hahn', role: 'Radiochemist who identified barium among the products' },
      { name: 'Fritz Strassmann', role: 'Analytical chemist who performed the separations' },
      { name: 'Lise Meitner', role: 'Physicist who explained the result and calculated the energy' },
      { name: 'Otto Frisch', role: 'Co-author of the explanation; confirmed the fragments experimentally' },
    ],
    significance: 10,
    significanceJustification: 'Fission gave humanity access to nuclear energy, both as a weapon that reshaped international politics and as a power source. Few discoveries have so directly determined the course of the following century.',
    domains: ['energy', 'weapons-security'],
    sources: [
      { author: 'Otto Hahn and Fritz Strassmann', title: 'Über den Nachweis und das Verhalten der bei der Bestrahlung des Urans mittels Neutronen entstehenden Erdalkalimetalle', publisher: 'Die Naturwissenschaften', year: 1939, url: 'https://doi.org/10.1007/BF01488241' },
      { author: 'Lise Meitner and Otto R. Frisch', title: 'Disintegration of Uranium by Neutrons: a New Type of Nuclear Reaction', publisher: 'Nature', year: 1939, url: 'https://doi.org/10.1038/143239a0' },
      { author: 'Ruth Lewin Sime', title: 'Lise Meitner: A Life in Physics', publisher: 'University of California Press', year: 1996 },
      { author: 'Richard Rhodes', title: 'The Making of the Atomic Bomb', publisher: 'Simon and Schuster', year: 1986 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'helicopter',
    epochId: 'physics-total-war',
    date: { year: 1939, month: 9, day: 14, precision: 'exact', display: '14 September 1939 (Sikorsky VS-300 first tethered flight); Focke-Wulf Fw 61 flew 26 June 1936' },
    location: 'Stratford, Connecticut, United States, and Bremen, Germany',
    title: 'The practical helicopter',
    summary: 'Igor Sikorsky\'s VS-300 flew at Stratford, Connecticut, on 14 September 1939 with a single main rotor and a tail rotor, the configuration that became standard; Heinrich Focke\'s twin-rotor Fw 61 had flown in 1936 as the first fully controllable helicopter.',
    explanation: `The helicopter is the oldest idea in aviation and the last to work. Chinese bamboo tops spun into the air by a string were known in the fourth century; Leonardo sketched an aerial screw around 1480; and from the 1900s inventors in France, Russia and elsewhere lifted machines off the ground for seconds at a time. Paul Cornu hovered in 1907, and Igor Sikorsky himself built two failed helicopters in Kiev in 1909 and 1910 before turning to fixed-wing aircraft. The problem was not lift but control. A single lifting rotor produces a torque that spins the fuselage the other way; a rotor moving forward has one blade advancing into the airflow and one retreating, so lift is uneven and the machine rolls; and no one knew how to make the aircraft go where the pilot wanted.

The pieces came together between the wars. Juan de la Cierva's autogiro, first flown in Spain in 1923, used a freely turning rotor for lift and a propeller for thrust, and its flapping hinges, which let each blade rise and fall as it advanced and retreated, solved the roll problem. Autogiros were built in some numbers and taught engineers rotor aerodynamics. Louis Breguet and René Dorand flew a coaxial helicopter in France in 1935 that set speed and endurance records. Heinrich Focke in Germany, using Cierva rotor technology, built the Fw 61 with two rotors side by side on outriggers; it flew on 26 June 1936, set records in 1937, and was flown indoors in the Deutschlandhalle by Hanna Reitsch in 1938. It is generally regarded as the first fully practical helicopter.

Sikorsky, by then running his own division of United Aircraft in Connecticut, returned to the problem in 1938 and chose a different arrangement: one main rotor for lift, with cyclic and collective pitch control, and a small vertical rotor at the tail to cancel torque and give yaw control. The VS-300 made its first tethered flight on 14 September 1939 with Sikorsky at the controls, and its first free flight on 13 May 1940. Early versions had auxiliary horizontal rotors, but by 1941 the machine had the pure single-rotor configuration. The Army ordered the R-4, the first production helicopter, in 1942, and a few flew rescue missions in Burma and Alaska in 1944 and 1945.

The helicopter's significance is that it made flight without a runway routine, and with it medical evacuation, air-sea rescue, offshore work and police and news operations. The turboshaft engine in the 1950s and the Korean and Vietnam wars made it a mass technology. In the Apollo programme, helicopters recovered every crew from the sea and served as training aircraft for lunar landing. The history is well documented from the manufacturers' records and Sikorsky's own account, though which machine counts as the first helicopter depends on the criteria applied.`,
    mechanism: `A helicopter's main rotor is a set of rotating wings. Collective pitch changes the angle of all blades together, controlling total lift and hence climb and descent. Cyclic pitch changes each blade's angle as it moves around the circle, increasing lift on one side of the disc and decreasing it on the other, so that the disc tilts and the aircraft moves in that direction. Flapping and lead-lag hinges at the blade roots let each blade rise, fall and swing slightly so that the uneven lift between advancing and retreating blades does not roll the machine. The engine's torque, which would spin the fuselage opposite to the rotor, is balanced in Sikorsky's arrangement by a small tail rotor whose pitch the pilot controls with pedals, giving control in yaw. In hover the rotor accelerates a column of air downward with a momentum flux equal to the aircraft's weight.`,
    prerequisites: ['wright-flyer', 'otto-cycle-engine', 'bessemer-steel'],
    consequences: ['apollo-11'],
    figures: [
      { name: 'Igor Sikorsky', role: 'Designed and flew the VS-300 and the first production helicopter' },
      { name: 'Heinrich Focke', role: 'Designed the Fw 61, the first fully controllable helicopter' },
      { name: 'Juan de la Cierva', role: 'Invented the autogiro and the flapping rotor hinge' },
      { name: 'Hanna Reitsch', role: 'Test pilot who demonstrated the Fw 61' },
    ],
    significance: 6,
    significanceJustification: 'The helicopter made flight independent of runways and created rescue, medical, offshore and military roles that no other aircraft can fill. Its direct technological descent is narrower than the jet or the rocket, which limits its rank.',
    domains: ['transportation'],
    sources: [
      { author: 'Igor I. Sikorsky', title: 'The Story of the Winged-S: An Autobiography', publisher: 'Dodd, Mead and Company', year: 1938 },
      { author: 'J. Gordon Leishman', title: 'Principles of Helicopter Aerodynamics', publisher: 'Cambridge University Press', year: 2000 },
      { author: 'Jay P. Spenser', title: 'Whirlybirds: A History of the U.S. Helicopter Pioneers', publisher: 'University of Washington Press', year: 1998 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'enigma-break',
    epochId: 'physics-total-war',
    date: { year: 1940, precision: 'year', display: '1932 (Rejewski\'s reconstruction of Enigma) to 1940 (Bletchley Park bombe operational, March 1940)' },
    location: 'Warsaw, Poland, and Bletchley Park, Britain',
    title: 'Breaking Enigma: Polish and British cryptanalysis',
    summary: 'Marian Rejewski reconstructed the German military Enigma cipher machine by pure mathematics in 1932, and after Poland shared its work in July 1939, Alan Turing and Gordon Welchman built the electromechanical bombe that let Bletchley Park read German traffic through most of the war.',
    explanation: `The Enigma was a commercial cipher machine, marketed from 1923, that the German armed forces adopted with modifications from 1926. Each key press sent current through a plugboard, three rotors that stepped like an odometer, and a reflector, and lit a substituted letter; the rotors' motion meant the substitution changed with every letter. The number of possible settings was of the order of 10 to the 23rd power, and cryptographers in France and Britain regarded it as unbreakable by the methods of the day. The Polish Cipher Bureau, facing Germany across a short border, could not afford that view. In 1929 it recruited mathematics students at Poznań, and in late 1932 one of them, Marian Rejewski, using permutation group theory and a few pages of German keying documents bought by French intelligence from a spy, reconstructed the internal wiring of the rotors without ever seeing a military machine.

With Jerzy Różycki and Henryk Zygalski, Rejewski then devised methods for finding the daily settings, exploiting the Germans' practice of enciphering the message key twice. By 1938 they had built the bomba, an electromechanical device that tested rotor positions automatically, and perforated sheets for catalogue searches. When the Germans added two more rotors in December 1938 the Poles' resources were overwhelmed, and on 25 July 1939, five weeks before the invasion, they gave the French and British everything: the wiring, the methods, and a working reconstructed Enigma each.

At Bletchley Park, the Government Code and Cypher School's wartime home, Alan Turing redesigned the Polish approach around a different weakness, the crib: a probable piece of plaintext, such as a weather report or a stereotyped salutation, at a known position. Turing's bombe, engineered by Harold Keen at the British Tabulating Machine Company, ran through rotor settings at high speed and stopped when a setting was consistent with the crib. Gordon Welchman's diagonal board, added in the summer of 1940, exploited the plugboard's reciprocity and made the machine many times more powerful. The first bombe ran in March 1940 and the improved model in August; by 1945 more than two hundred were in use in Britain and the United States. Naval Enigma, with its additional rotors and indicator system, required captured material and Turing's statistical method of Banburismus, and was read from mid-1941, lost through most of 1942, and regained in December 1942.

The intelligence, codenamed Ultra, is generally judged to have shortened the European war, most clearly in the Atlantic and in North Africa. The wider consequence was institutional and intellectual: Bletchley Park was the first large organization devoted to mechanized information processing, and its people (Turing, Welchman, Newman, Flowers, Good, Michie) went on to found British computing. The record was secret until the 1970s; since then the Polish and British accounts, and the released archives, agree on the sequence.`,
    mechanism: `The bombe attacked the Enigma by contradiction. Given a crib, the cryptanalyst drew a menu, a graph of letter pairings between plaintext and ciphertext at known positions. The bombe contained thirty-six sets of three rotors, each set wired as an Enigma without plugboard, connected according to the menu, and it stepped all of them together through the 17,576 rotor positions in about twenty minutes. At each position, a test voltage was applied on one hypothesized plugboard connection; if that hypothesis was wrong, the current spread through the menu's loops to every other letter, contradicting itself, and the machine moved on. A position at which the current did not spread was a candidate, and the bombe stopped for it to be checked by hand. The diagonal board added wires that enforced the fact that if A was plugged to B, then B was plugged to A, which greatly increased the chance of contradictions and so of eliminating wrong positions.`,
    prerequisites: ['turing-1936', 'marconi-wireless', 'electric-telegraph'],
    consequences: ['colossus', 'von-neumann-architecture'],
    figures: [
      { name: 'Marian Rejewski', role: 'Reconstructed the Enigma wiring by mathematics, 1932' },
      { name: 'Jerzy Różycki', role: 'Polish cryptanalyst, co-developer of the methods' },
      { name: 'Henryk Zygalski', role: 'Polish cryptanalyst, devised the perforated sheets' },
      { name: 'Alan Turing', role: 'Designed the crib-based bombe and Banburismus' },
      { name: 'Gordon Welchman', role: 'Invented the diagonal board and organized Hut 6' },
      { name: 'Harold Keen', role: 'Engineered the bombe at the British Tabulating Machine Company' },
    ],
    significance: 8,
    significanceJustification: 'The breaking of Enigma is among the best documented cases of intelligence changing the course of a war, and Bletchley Park was the first industrial-scale information-processing organization. Its staff founded British computing after 1945.',
    domains: ['information', 'weapons-security', 'computation'],
    sources: [
      { author: 'Marian Rejewski', title: 'How Polish Mathematicians Deciphered the Enigma', publisher: 'Annals of the History of Computing', year: 1981, url: 'https://doi.org/10.1109/MAHC.1981.10033' },
      { author: 'Gordon Welchman', title: 'The Hut Six Story: Breaking the Enigma Codes', publisher: 'McGraw-Hill', year: 1982 },
      { author: 'Andrew Hodges', title: 'Alan Turing: The Enigma', publisher: 'Burnett Books and Simon and Schuster', year: 1983 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'zuse-z3',
    epochId: 'physics-total-war',
    date: { year: 1941, month: 5, day: 12, precision: 'exact', display: '12 May 1941 (Z3 demonstrated in Berlin)' },
    location: 'Berlin, Germany',
    title: "Zuse's Z3, the first working programmable computer",
    summary: 'Konrad Zuse demonstrated the Z3 in Berlin on 12 May 1941: a program-controlled, binary, floating-point calculator built from 2,600 telephone relays, the first fully automatic programmable computer to work, built in isolation and destroyed in an air raid in 1943.',
    explanation: `Konrad Zuse was a civil engineer at the Henschel aircraft works in Berlin who, bored by the repetitive stress calculations of his job, resigned in 1935 to build a machine that would do them. He worked in his parents' living room with borrowed money and the help of friends, and he knew nothing of Babbage, of Turing, or of the American relay projects. His first machine, the Z1 of 1938, was entirely mechanical, with thousands of sliding metal plates cut by hand, and it never worked reliably. The Z2 of 1940 used telephone relays for the arithmetic unit and proved the approach. The Z3, completed in the spring of 1941 and demonstrated to scientists of the German Aeronautical Research Institute on 12 May 1941, was the first programmable, fully automatic digital computer that actually worked.

Several of Zuse's choices were ahead of their time. The machine was binary throughout, at a time when every other project used decimal. It used floating-point arithmetic, with a 14-bit mantissa, a 7-bit exponent and a sign, and handled overflow and undefined results with special values, an arrangement that reappeared in the IEEE standard forty years later. The program was read from punched 35-millimetre cinema film, and the arithmetic unit executed addition, subtraction, multiplication, division and square root. Zuse had also worked out, independently of Shannon, a switching algebra based on propositional logic for designing the relay circuits. The Z3 lacked one thing: conditional branching, so it could not choose between paths on the basis of a result. Raúl Rojas showed in 1998 that it was nonetheless universal in Turing's sense, in a contrived way, by running the whole program as a loop.

The Z3 was used for a few calculations of wing flutter and was never put to serious work. It was destroyed in an Allied bombing raid in December 1943, and a reconstruction built by Zuse in the 1960s is in the Deutsches Museum. The Z4, a larger machine finished in 1945, survived the war in a Bavarian barn, was leased to ETH Zurich in 1950, and was for a time the only working computer in continental Europe. There Heinz Rutishauser used it while developing his ideas on automatic programming, an early step toward compilers; Zuse's own Plankalkül of 1945, the first high-level programming language design, remained unpublished for decades.

The Z3's historical importance is real but bounded. It demonstrated that a general program-controlled calculator could be built cheaply from ordinary telephone components, and its architecture was in several respects better than that of its larger and better-funded contemporaries. But it was built in isolation, in a country cut off from the international community, and it had little influence on the machines that came after. The evidence is Zuse's patents and notebooks, the Rojas analyses, and the working reconstruction.`,
    mechanism: `The Z3 was built from about 2,600 electromagnetic relays, 1,400 of them in the memory, and it ran at a clock rate of about five hertz. Numbers were held in binary floating-point form, each in 22 relays: a sign, a seven-bit exponent and a fourteen-bit mantissa with the leading one implied. The memory held sixty-four such numbers. The program, a sequence of eight-bit instructions, was punched into a strip of film and read by a mechanical reader, one instruction per cycle; instructions loaded a number from a memory cell into one of two arithmetic registers, stored a register to memory, read a number from the keyboard, displayed a result on lamps, or performed one of the five arithmetic operations. Multiplication took about three seconds through repeated shifting and adding. A relay is a switch closed by an electromagnet, so the whole machine was a Boolean network in which each relay represented one bit.`,
    prerequisites: ['jacquard-loom', 'electric-telegraph', 'telephone'],
    consequences: ['fortran'],
    figures: [
      { name: 'Konrad Zuse', role: 'Designer and builder' },
      { name: 'Helmut Schreyer', role: 'Friend and collaborator who proposed vacuum tubes and helped build the Z3' },
      { name: 'Heinz Rutishauser', role: 'Used the Z4 at ETH Zurich to develop automatic programming' },
    ],
    significance: 7,
    significanceJustification: 'The Z3 was the first working programmable computer and pioneered binary floating-point arithmetic, but its isolation limited its influence on later machines. It ranks as a proof of possibility rather than a root of the computing tree.',
    domains: ['computation'],
    sources: [
      { author: 'Raúl Rojas', title: "Konrad Zuse's Legacy: The Architecture of the Z1 and Z3", publisher: 'IEEE Annals of the History of Computing', year: 1997, url: 'https://doi.org/10.1109/85.586067' },
      { author: 'Konrad Zuse', title: 'The Computer, My Life', publisher: 'Springer', year: 1993 },
      { author: 'Raúl Rojas', title: 'How to Make Zuse\'s Z3 a Universal Computer', publisher: 'IEEE Annals of the History of Computing', year: 1998 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'v2-rocket',
    epochId: 'physics-total-war',
    date: { year: 1942, month: 10, day: 3, precision: 'exact', display: '3 October 1942 (first successful A4 flight, Peenemünde); first combat use 8 September 1944' },
    location: 'Peenemünde, Germany',
    title: 'The V-2 ballistic missile',
    summary: 'The A4 rocket, later called the V-2, flew successfully from Peenemünde on 3 October 1942, reaching 85 kilometres altitude; it was the first large liquid-fuelled guided rocket and the first human artefact to reach the edge of space, and its designers and hardware seeded the American and Soviet space programmes.',
    explanation: `The German army began funding rocketry in 1932 because the Treaty of Versailles restricted artillery but said nothing about rockets. Walter Dornberger, an artillery officer, recruited a twenty-year-old student, Wernher von Braun, from the amateur Verein für Raumschiffahrt, whose members had been inspired by Hermann Oberth's 1923 book on spaceflight. Work moved in 1937 to a purpose-built centre at Peenemünde on the Baltic coast, which at its peak employed several thousand engineers and became the largest research establishment in Europe. After the failures of the A1 and A2 and the partial success of the A3 in 1937, the team designed the A4: a rocket 14 metres tall, weighing 12.5 tonnes at launch, burning ethanol and liquid oxygen to produce 25 tonnes of thrust for about a minute, and carrying a one-tonne warhead to a range of 320 kilometres.

The first two launches in 1942 failed. On 3 October 1942 the third A4 flew for 296 kilometres, reached 85 kilometres in altitude, and landed within four kilometres of its aim point. Dornberger told his staff that day that the spaceship had been born. Hitler, who had been indifferent, ordered mass production in 1943. After the Royal Air Force bombed Peenemünde in August 1943, production moved to the Mittelwerk, an underground factory in the Harz mountains, where prisoners from the Dora concentration camp built about 6,000 rockets under conditions that killed an estimated 20,000 of them, more than the rocket killed in use.

The first operational launches were on 8 September 1944, against Paris and London. About 3,000 were fired at Britain, Belgium and France, killing roughly 9,000 people, mostly in London and Antwerp. There was no defence: the missile arrived at four times the speed of sound without warning. As a weapon it was a failure by cost, absorbing resources comparable to the Manhattan Project for an effect a single bomber raid could exceed. As engineering it was a leap: the first large rocket with turbopumps, regenerative cooling, gyroscopic inertial guidance, graphite jet vanes and a radio-cutoff velocity control.

The consequences arrived after the war. Von Braun and about 120 of his colleagues surrendered to the Americans and were taken to the United States under Operation Paperclip, with a hundred rockets; the Soviets took the Mittelwerk and many production engineers. Captured V-2s were fired from White Sands from 1946 and carried the first scientific instruments and cameras above the atmosphere. The Soviet R-1 was a copy, and Sergei Korolev's R-7, which launched Sputnik in 1957, and von Braun's Redstone and Saturn rockets, which launched the first American satellite and the Apollo missions, descended directly from it. Michael Neufeld's history, based on the German archives, is the standard account and gives full weight to the forced labour.`,
    mechanism: `The A4 burned a 75 percent ethanol and water mixture with liquid oxygen. A turbine driven by steam, generated by decomposing hydrogen peroxide with a permanganate catalyst, ran two pumps that forced the propellants into the combustion chamber at about 125 kilograms per second. The fuel first circulated through a double wall around the chamber and nozzle to keep the steel from melting, then entered through eighteen injector cups. The chamber produced about 25 tonnes of thrust at a pressure of 15 atmospheres. Two gyroscopes sensed pitch and yaw and drove graphite vanes in the exhaust and aerodynamic rudders on the fins to keep the rocket on a programmed tilt; an accelerometer or radio beam cut the engine when the velocity for the target range was reached. The rocket then coasted on a ballistic arc to a peak of around 90 kilometres and fell at about 1,000 metres per second.`,
    prerequisites: ['goddard-liquid-rocket', 'chinese-gunpowder', 'newton-principia', 'haber-bosch'],
    consequences: ['sputnik', 'vostok-gagarin', 'apollo-11', 'hydrogen-bomb'],
    figures: [
      { name: 'Wernher von Braun', role: 'Technical director at Peenemünde' },
      { name: 'Walter Dornberger', role: 'Army commander of the rocket programme' },
      { name: 'Walter Thiel', role: 'Designed the combustion chamber; killed in the 1943 raid' },
      { name: 'Hermann Oberth', role: 'Theorist whose 1923 book inspired the German rocket movement' },
    ],
    significance: 9,
    significanceJustification: 'The V-2 was the first large guided rocket and the first object to reach space, and every early satellite launcher and ballistic missile of both superpowers descended from it. Its military value was small, but its technological consequences were the space age and the intercontinental missile.',
    domains: ['space', 'weapons-security', 'transportation'],
    sources: [
      { author: 'Michael J. Neufeld', title: 'The Rocket and the Reich: Peenemünde and the Coming of the Ballistic Missile Era', publisher: 'Free Press', year: 1995 },
      { author: 'Walter Dornberger', title: 'V-2', publisher: 'Viking Press', year: 1954 },
      { author: 'Michael J. Neufeld', title: 'Von Braun: Dreamer of Space, Engineer of War', publisher: 'Alfred A. Knopf', year: 2007 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'synthetic-rubber',
    epochId: 'physics-total-war',
    date: { year: 1942, precision: 'year', display: '1942 to 1945 (United States Synthetic Rubber Program); Buna S 1929, neoprene 1931' },
    location: 'Schkopau and Leverkusen, Germany; Akron, Ohio, United States',
    title: 'Synthetic rubber at industrial scale',
    summary: 'German chemists made the styrene-butadiene rubber Buna S in 1929 and DuPont made neoprene in 1931; after Japan seized the Asian plantations in 1942, an American crash programme built fifty-one plants and by 1945 was producing 800,000 tonnes a year of a material that a few years earlier had barely existed.',
    explanation: `Natural rubber, tapped from Hevea trees, was by the 1930s indispensable and geographically concentrated: more than ninety percent came from British Malaya, the Dutch East Indies and Indochina. Motor vehicles, aircraft, and every army's trucks and tanks ran on it, and industry used it in hoses, seals, belts and cable insulation. Chemists had known since 1860 that rubber was a polymer of isoprene and had made poor synthetic versions since 1909; Germany, blockaded in the First World War, produced a few thousand tonnes of a brittle methyl rubber. The synthetic problem was to find a polymer with rubber's combination of elasticity and toughness, and a process cheap enough to compete with a tree.

Two solutions appeared around 1930. At IG Farben's Leverkusen laboratories, Walter Bock and Eduard Tschunkur discovered in 1929 that copolymerizing butadiene with about a quarter styrene in a water emulsion gave a rubber, Buna S, that outperformed natural rubber in tyre wear when reinforced with carbon black. Germany, planning for another blockade, built plants at Schkopau in 1937 and later at Hüls and Auschwitz, the last built and run with slave labour; German output reached about 100,000 tonnes a year. At DuPont, Arnold Collins in Wallace Carothers' group polymerized chloroprene in 1930, and the product, sold as neoprene from 1931, was resistant to oil and heat. Both were expensive, and American tyre makers stayed with natural rubber.

Then, in the first months of 1942, Japan took every source of natural rubber in Asia. The United States had a year's stockpile and a war to fight in which each Sherman tank used half a tonne of rubber and each heavy bomber nearly a tonne. The Baruch committee of August 1942 recommended a government programme, and the Rubber Reserve Company, the four tyre companies and the oil and chemical firms were compelled to pool patents and know-how. The chosen product, GR-S, was a version of Buna S, with the butadiene made from petroleum and, at first, from grain alcohol. Fifty-one plants were built with public money in under two years, and production rose from 2,000 tonnes in 1942 to about 800,000 in 1945, more than the whole world's prewar synthetic capacity many times over. A parallel research programme spread across universities and companies improved the polymer and, through work on cold polymerization, produced a better rubber by 1948.

Synthetic rubber was, with penicillin and the atomic bomb, one of the three great crash programmes of the American war. Its legacy is a petrochemical industry that makes most of the world's rubber, the polymer science that produced later elastomers and plastics, and the polybutadiene binders that hold together solid rocket propellants, including those of the Space Shuttle boosters. The programme's records are extensively documented in Herbert and Bisio's history and Peter Morris's study of the research effort.`,
    mechanism: `Styrene-butadiene rubber is made by emulsion polymerization. Butadiene, a gas made by dehydrogenating butane from petroleum or by cracking ethanol, and styrene, a liquid made from benzene and ethylene, are dispersed in water with soap, which forms microscopic droplets. A water-soluble initiator such as potassium persulfate generates free radicals that enter the droplets and add monomer molecules one after another into chains tens of thousands of units long; the process is stopped at about three-quarters conversion by adding a radical scavenger. The resulting latex is coagulated with salt and acid, washed and dried into crumb. Because butadiene contributes double bonds along the chain, the rubber can be vulcanized with sulfur, which cross-links the chains into an elastic network, and carbon black added during compounding reinforces it against wear. The chains are coiled at rest and straighten under load, which is the origin of rubber elasticity.`,
    prerequisites: ['bakelite', 'nylon', 'haber-bosch', 'tank', 'benz-daimler-automobile'],
    consequences: ['space-shuttle', 'containerization'],
    figures: [
      { name: 'Walter Bock', role: 'Co-discoverer of Buna S at IG Farben' },
      { name: 'Eduard Tschunkur', role: 'Co-discoverer of Buna S at IG Farben' },
      { name: 'Arnold Collins', role: 'Made neoprene at DuPont, 1930' },
      { name: 'Bernard Baruch', role: 'Chaired the 1942 committee that shaped the American programme' },
    ],
    significance: 6,
    significanceJustification: 'Synthetic rubber removed a strategic dependence on tropical plantations and became the origin of the petrochemical polymer industry. It was essential to the Allied war effort but its scientific novelty was modest, which keeps its rank moderate.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Vernon Herbert and Attilio Bisio', title: 'Synthetic Rubber: A Project That Had to Succeed', publisher: 'Greenwood Press', year: 1985 },
      { author: 'Peter J. T. Morris', title: 'The American Synthetic Rubber Research Program', publisher: 'University of Pennsylvania Press', year: 1989 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'colossus',
    epochId: 'physics-total-war',
    date: { year: 1944, month: 2, day: 5, precision: 'exact', display: '5 February 1944 (Colossus Mark 1 operational at Bletchley Park); Mark 2 from 1 June 1944' },
    location: 'Dollis Hill and Bletchley Park, Britain',
    title: 'Colossus, the first electronic digital computer',
    summary: 'Tommy Flowers of the Post Office Research Station built Colossus, a machine of 1,500 and later 2,400 vacuum tubes, to break the German Lorenz teleprinter cipher; operational from February 1944, it was the first large-scale electronic digital computing machine, kept secret until the 1970s.',
    explanation: `Enigma was the German field cipher. For communications between Berlin and army group headquarters, the high command used a different system: teleprinter links enciphered by the Lorenz SZ40 and SZ42 machines, which Bletchley Park called Tunny. Lorenz added a pseudo-random key stream, generated by twelve wheels, to the five-bit teleprinter code of each character. In August 1941 an operator sent the same long message twice with the same settings, and the cryptanalyst John Tiltman recovered both texts and the key. From that, over four months and without ever seeing the machine, the young mathematician Bill Tutte deduced the entire logical structure of the Lorenz. His statistical method for finding the wheel settings worked but required counting coincidences across millions of character positions, far beyond hand computation.

Max Newman, the Cambridge topologist who had taught Turing, proposed a machine. The first, Heath Robinson, built in 1943, read two paper tapes optically and counted with electronic circuits, but keeping the tapes in step at high speed was unreliable. Tommy Flowers, an engineer at the Post Office Research Station at Dollis Hill who had spent the 1930s building electronic telephone switching, argued that the key stream should be generated electronically inside the machine, so that only the message tape needed to be read. Bletchley Park was sceptical that a machine with 1,500 vacuum tubes would run for an hour without failure; Flowers knew from telephone practice that tubes rarely failed if never switched off. He built the machine largely on his own authority in eleven months. Colossus Mark 1 was delivered to Bletchley Park in January 1944 and broke its first message on 5 February. Mark 2, with 2,400 tubes and five parallel processors, was working on 1 June 1944, in time to confirm that the Germans expected the Normandy landings elsewhere. Ten were built.

Colossus was not a stored-program computer; it was configured by switches and plugboards for each task. But it was digital, electronic and programmable within its domain, it processed 5,000 characters a second, and it performed Boolean and counting operations that could be reconfigured for a range of statistical attacks. It preceded ENIAC by nearly two years. Because Britain kept the machines secret, dismantling most and hiding the rest until the 1970s, it had no public influence, and histories of computing written before 1975 do not mention it.

Its real influence ran through people. Newman took what he had learned to Manchester, where in 1948 his department built the first stored-program computer. Turing, who knew Colossus well, designed the ACE. Flowers himself went back to telephone exchanges. The full story emerged only with the release of the official history in 2000 and the reconstruction of a working Colossus at Bletchley Park, completed by Tony Sale's team in 2007.`,
    mechanism: `The enciphered message was punched as five-bit characters on a loop of paper tape that ran continuously past photoelectric readers at 5,000 characters per second, with sprocket holes providing the clock. Inside the machine, rings of thyratron tubes simulated the Lorenz wheels and generated the hypothesized key stream in step with the tape. For each character, electronic circuits combined the tape bits and the generated key bits according to a Boolean function set on a plugboard, typically the exclusive OR of two channels with the corresponding key bits, and a decade counter built from vacuum tubes tallied the number of characters for which the result was zero. After each pass of the tape the machine advanced the wheel settings, and a relay-driven typewriter printed any count that exceeded a preset threshold. The setting with the highest count was the most likely wheel position, which the cryptanalysts then refined by hand.`,
    prerequisites: ['enigma-break', 'marconi-wireless', 'electronic-television', 'turing-1936'],
    consequences: ['von-neumann-architecture'],
    figures: [
      { name: 'Tommy Flowers', role: 'Designed and built Colossus' },
      { name: 'Max Newman', role: 'Led the Bletchley Park section that specified the machine' },
      { name: 'Bill Tutte', role: 'Deduced the Lorenz structure and devised the statistical attack' },
      { name: 'John Tiltman', role: 'Recovered the first Lorenz key by hand, 1941' },
    ],
    significance: 8,
    significanceJustification: 'Colossus was the first large electronic digital computing machine and proved that thousands of vacuum tubes could work reliably together, two years before ENIAC. Secrecy erased its public influence, so its rank reflects priority and the Manchester and ACE lineages it fed.',
    domains: ['computation', 'information', 'weapons-security'],
    sources: [
      { author: 'B. Jack Copeland (editor)', title: "Colossus: The Secrets of Bletchley Park's Codebreaking Computers", publisher: 'Oxford University Press', year: 2006 },
      { author: 'Thomas H. Flowers', title: 'The Design of Colossus', publisher: 'Annals of the History of Computing', year: 1983, url: 'https://doi.org/10.1109/MAHC.1983.10079' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'manhattan-project',
    epochId: 'physics-total-war',
    date: { year: 1945, month: 7, day: 16, precision: 'exact', display: '16 July 1945 (Trinity test); project 1942 to 1945; Hiroshima 6 August and Nagasaki 9 August 1945' },
    location: 'Los Alamos, New Mexico; Oak Ridge, Tennessee; Hanford, Washington, United States',
    title: 'The Manhattan Project and the atomic bomb',
    summary: 'A three-year, two-billion-dollar programme employing 130,000 people built the plants that separated uranium-235 and bred plutonium, and the laboratory that designed the bombs; the Trinity test on 16 July 1945 and the destruction of Hiroshima and Nagasaki three weeks later ended the war and began the nuclear age.',
    explanation: `The discovery of fission in 1939 raised at once the possibility of a bomb, and refugee physicists were the first to push for one, fearing Germany would get there first. Leo Szilard drafted the letter that Einstein signed to Roosevelt in August 1939. The decisive analysis came from Britain: in March 1940 Otto Frisch and Rudolf Peierls calculated that a few kilograms of pure uranium-235 would suffice, and the MAUD committee report of July 1941 concluded that a bomb was feasible within the war. The United States, which had been moving slowly, committed itself in late 1941, and in 1942 the effort was handed to the Army Corps of Engineers under Brigadier General Leslie Groves, who had just built the Pentagon. Enrico Fermi's team achieved the first controlled chain reaction under the stands of the University of Chicago's football stadium on 2 December 1942.

Groves built three secret cities. At Oak Ridge, Tennessee, three separate methods (electromagnetic separation in calutrons, gaseous diffusion through porous barriers, and thermal diffusion) enriched uranium-235 from its natural 0.7 percent. The K-25 diffusion plant was the largest building in the world. At Hanford, Washington, three reactors bred plutonium-239 from uranium-238, and chemical plants separated it. At Los Alamos, New Mexico, a laboratory directed by J. Robert Oppenheimer designed the weapons. The whole enterprise drew on the electrical grid of the Tennessee Valley Authority and the Grand Coulee Dam, on the chemical industry's DuPont, on Union Carbide, and on the physics of every Allied country; British and Canadian scientists worked at Los Alamos, and the Soviet Union learned much of the project through espionage.

The uranium gun bomb was simple enough not to need a test. Plutonium, however, contained an isotope that fissioned spontaneously, so a gun would predetonate; the solution, worked out in 1944 and 1945 under great strain, was to compress a subcritical sphere with a precisely shaped implosion of high explosive. That design was tested at Trinity, in the New Mexico desert, at 5:29 in the morning of 16 July 1945, with a yield of about 21 kilotons of TNT. On 6 August the uranium bomb destroyed Hiroshima, and on 9 August the plutonium bomb destroyed Nagasaki, killing between them well over a hundred thousand people by the end of 1945. Japan surrendered on 15 August.

The project cost about two billion dollars of the time and employed 130,000 people, nearly all of whom did not know what they were building. Its consequences are the subject of a vast literature: the arms race and the doctrine of deterrence, civil nuclear power, the national laboratory system, the alliance between physics and the state, and the moral debate over the bombings, in which the participants themselves divided. The documentary record, including the Smyth report released in August 1945 and the declassified archives, is enormous.`,
    mechanism: `A fission bomb assembles a supercritical mass of fissile material faster than the chain reaction can blow it apart. In the uranium design, a gun fired a sub-critical ring of uranium-235 down a barrel into a sub-critical target, forming a critical mass in about a millisecond. In the plutonium design, thirty-two shaped charges of fast and slow explosives, arranged as lenses, converted an outward-burning detonation into a spherical shock wave that compressed a solid plutonium core to about twice its normal density in a few microseconds; the greater density made the same mass supercritical. A neutron initiator at the centre started the reaction at the moment of maximum compression. Each fission released two or three neutrons, doubling the reaction roughly every ten nanoseconds, so that about eighty generations consumed a kilogram of material and released energy equivalent to some twenty thousand tonnes of TNT before the core disassembled.`,
    prerequisites: ['nuclear-fission', 'einstein-1905', 'electric-grid', 'haber-bosch'],
    consequences: ['hydrogen-bomb', 'nuclear-power', 'von-neumann-architecture'],
    figures: [
      { name: 'J. Robert Oppenheimer', role: 'Director of the Los Alamos laboratory' },
      { name: 'Leslie Groves', role: 'Army commander of the project' },
      { name: 'Enrico Fermi', role: 'Achieved the first controlled chain reaction, 1942' },
      { name: 'Leo Szilard', role: 'Conceived the chain reaction and initiated the Einstein letter' },
      { name: 'Rudolf Peierls', role: 'Co-author of the 1940 memorandum establishing feasibility' },
    ],
    significance: 10,
    significanceJustification: 'The atomic bomb ended the Second World War, structured international politics for the rest of the century, and created the model of state-directed big science. No single project of the epoch had larger consequences.',
    domains: ['weapons-security', 'energy'],
    sources: [
      { author: 'Richard Rhodes', title: 'The Making of the Atomic Bomb', publisher: 'Simon and Schuster', year: 1986 },
      { author: 'Henry DeWolf Smyth', title: 'Atomic Energy for Military Purposes: The Official Report on the Development of the Atomic Bomb under the Auspices of the United States Government, 1940-1945', publisher: 'Princeton University Press', year: 1945 },
      { author: 'Lillian Hoddeson, Paul W. Henriksen, Roger A. Meade and Catherine Westfall', title: 'Critical Assembly: A Technical History of Los Alamos during the Oppenheimer Years, 1943-1945', publisher: 'Cambridge University Press', year: 1993 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'eniac',
    epochId: 'physics-total-war',
    date: { year: 1945, precision: 'year', display: '1945 (completed; first calculations December 1945); publicly unveiled 15 February 1946' },
    location: 'Philadelphia, Pennsylvania, United States',
    title: 'ENIAC, the first general-purpose electronic computer',
    summary: 'The Electronic Numerical Integrator and Computer, built by J. Presper Eckert and John Mauchly at the University of Pennsylvania for the Army, was completed in late 1945, ran its first calculations for the hydrogen bomb in December, and was unveiled to the public on 15 February 1946.',
    explanation: `The Army's Ballistic Research Laboratory at Aberdeen, Maryland, needed firing tables for every combination of gun, shell and conditions, each table requiring thousands of trajectories, each trajectory a day's work for a human computer with a desk calculator. The Moore School of Electrical Engineering at the University of Pennsylvania ran a differential analyser for the Laboratory, and in 1942 a physicist teaching there, John Mauchly, wrote a memorandum proposing an electronic calculator using vacuum tubes that could do a trajectory in seconds. Herman Goldstine, the Army's liaison officer, took it up, and in June 1943 the Army signed a contract. J. Presper Eckert, a 24-year-old engineer, was chief designer.

ENIAC was finished in the autumn of 1945, too late for the war, and cost about 500,000 dollars. It filled a room 15 metres by 9, weighed 27 tonnes, and contained 17,468 vacuum tubes, 7,200 diodes, 70,000 resistors and 10,000 capacitors, consuming 150 kilowatts. It performed 5,000 additions or 357 multiplications per second, about a thousand times faster than any electromechanical machine. Its first production run, in December 1945, was not a firing table but a calculation for Edward Teller's hydrogen bomb, brought from Los Alamos by Stanley Frankel and Nicholas Metropolis and requiring a million punched cards. The public demonstration on 15 February 1946 computed a shell trajectory in less time than the shell took to fly, and the newspapers announced an electronic brain.

The machine's weakness was programming. ENIAC was configured by plugging cables and setting switches on its units, so that a new problem took days to set up. Even before it was finished, the team, joined by John von Neumann in 1944, was designing its successor, the EDVAC, with instructions stored in the same memory as data. Von Neumann's First Draft of a Report on the EDVAC, circulated in June 1945, described that architecture and, because it bore his name alone, gave rise to a dispute with Eckert and Mauchly that ended their collaboration. In 1948 ENIAC itself was converted to run from a stored table of instructions, in a scheme devised with von Neumann's team and Adele Goldstine, becoming a slow stored-program machine.

ENIAC's six original programmers, Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, Fran Bilas and Ruth Lichterman, worked out how to set up problems on the machine and were not publicly credited for decades. The machine ran at Aberdeen until October 1955. Eckert and Mauchly founded the first commercial computer company and built the UNIVAC; the Moore School lectures of 1946 spread the design to Britain and elsewhere. Whether ENIAC was the first computer depends on definitions, since Colossus was electronic earlier and the Z3 was programmable earlier, but it was the first electronic machine that was general-purpose, and it is the direct ancestor of the commercial computer industry. The technical record is exhaustively documented, most recently by Haigh, Priestley and Rope.`,
    mechanism: `ENIAC computed in decimal with vacuum tubes. Its twenty accumulators each held a ten-digit signed number in ring counters, ten tubes per digit, in which one tube conducting at a time represented the digit; adding a number meant sending a train of pulses that advanced the rings, with carries propagated electronically. A central clock issued 100,000 pulses a second and every unit worked in step with it. Multiplication, division and square root had dedicated units; a function table unit held constants set on rows of switches; and punched-card equipment handled input and output. A program was a wiring: the outputs of one unit were cabled to the inputs of the next, and a master programmer unit counted loops and directed branches, so that the machine's data flow was the program itself. Because units could run simultaneously, ENIAC was in effect a parallel data-flow machine, which its stored-program successors abandoned in favour of simplicity.`,
    prerequisites: ['babbage-analytical-engine', 'shannon-thesis-1937', 'radar', 'turing-1936'],
    consequences: ['von-neumann-architecture', 'hydrogen-bomb', 'fortran'],
    figures: [
      { name: 'J. Presper Eckert', role: 'Chief engineer' },
      { name: 'John Mauchly', role: 'Proposed the machine and led the project' },
      { name: 'Herman Goldstine', role: 'Army liaison who secured the contract' },
      { name: 'John von Neumann', role: 'Consultant; author of the EDVAC report' },
      { name: 'Betty Snyder Holberton', role: 'One of the six original programmers' },
    ],
    significance: 9,
    significanceJustification: 'ENIAC was the first general-purpose electronic computer, a thousand times faster than anything before it, and the machine from which the stored-program design and the commercial computer industry emerged. Its unveiling in 1946 made computing a public fact.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Thomas Haigh, Mark Priestley and Crispin Rope', title: 'ENIAC in Action: Making and Remaking the Modern Computer', publisher: 'MIT Press', year: 2016 },
      { author: 'Herman H. Goldstine', title: 'The Computer from Pascal to von Neumann', publisher: 'Princeton University Press', year: 1972 },
      { author: 'Scott McCartney', title: "ENIAC: The Triumphs and Tragedies of the World's First Computer", publisher: 'Walker and Company', year: 1999 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
];
