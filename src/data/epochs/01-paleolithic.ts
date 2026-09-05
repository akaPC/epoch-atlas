import type { Epoch, TechEventInput } from '../schema';

export const epoch: Epoch = {
  id: 'paleolithic',
  index: 1,
  name: 'Paleolithic and the birth of technique',
  code: 'PALEOLITHIC',
  startYear: -3300000,
  endYear: -12000,
  span: '3.3 Mya to 12,000 BCE',
  thesis: `The Paleolithic is the longest epoch in this atlas by three orders of magnitude, and almost everything that later technology takes for granted was invented in it. Its central story is the emergence of technique itself: the habit of shaping the environment with deliberate, transmitted procedures rather than with the body alone. The first flaked stones at Lomekwi and Gona show hominins learning that a rock can be made into a cutting edge. The hand axe shows a mental template being imposed on a material. Fire shows an external energy source being captured, and with it cooking, warmth, light and a longer working day. Prepared cores, hafting and adhesives show multi-step manufacturing, where an intermediate product is made in order to make something else. Ochre, beads and cave paintings show information being stored outside any single brain, which is the precondition for cumulative culture. By the end of the epoch, humans had projectile weapons, tailored clothing, fired ceramics, artificial light and a domesticated partner species. The rate of change was extremely slow by later standards, often a million years between recognizable steps, but the direction was consistent. Each technique lowered the cost of the next, and the population of minds able to hold and improve on techniques grew as a direct result.`,
  enablingConditions: [
    'Bipedal hominins with freed hands, precision grips and enlarging brains could manipulate objects and learn by watching others.',
    'East African rift landscapes offered abundant fine-grained volcanic rock and quartzite for flaking, together with carcasses from a rich savanna fauna.',
    'Repeated Pleistocene glacial cycles pushed populations into new environments, rewarding behavioral flexibility over anatomical specialization.',
    'Long juvenile periods and stable social groups allowed skills to be transmitted across generations rather than rediscovered by each individual.',
    'The evolution of fully modern language, probably within the last few hundred thousand years, allowed techniques to be described and not merely demonstrated.',
  ],
  constraintsRemoved: [
    'Hominins were no longer limited to the cutting and crushing power of their own teeth and hands when processing food.',
    'Cooking with fire freed the gut from having to digest raw plant matter and raw meat, releasing energy that could support a larger brain.',
    'Fire, clothing and shelter decoupled survival from ambient temperature, opening cold latitudes and highlands to settlement.',
    'Projectile weapons removed the need to close to arm\'s length with dangerous prey or rivals.',
    'External symbols removed the limit that individual memory placed on how much knowledge a group could carry.',
  ],
  secondOrderConsequences: [
    'Food sharing around hearths and the division of labor between hunting and gathering became the basis of human social organization.',
    'Humans expanded out of Africa across Eurasia, into Australia by about 65,000 years ago and into the Americas by the end of the epoch.',
    'Megafauna extinctions on several continents followed the arrival of humans armed with projectile weapons and fire.',
    'A cumulative cultural tradition emerged in which techniques could improve across generations, making later revolutions possible.',
    'Regional styles of tools, ornament and art appeared, the first archaeological trace of distinct cultural identities.',
  ],
  transition: `The Paleolithic ended not because its techniques failed but because the climate changed and the techniques were ready. As the last glacial period gave way to the warmer, wetter and, crucially, more stable Holocene after about 11,700 years ago, wild cereal stands in the Fertile Crescent, wild rice along the Yangtze and wild squash in Mesoamerica became dense enough to be worth staying near. Groups that already possessed grinding stones, storage pits, sickle blades, fired clay, sewn clothing, hunting dogs and the habit of marking places with symbols had every tool needed to begin cultivating rather than merely harvesting. Epipaleolithic cultures such as the Natufians of the Levant built permanent villages on wild resources before any plant was domesticated. Agriculture, when it came, was less an invention than a slow intensification of practices already in place, made possible by a climate that would finally stay put long enough for planted fields to be reliable.`,
  humanExperience: `For a person living in the Lower Paleolithic, technique was almost invisible as a category. A Homo erectus individual made a hand axe the way a bird builds a nest, by a mixture of instinct, imitation and long practice, and probably had no word for it. Life was short, mobile and dominated by finding food and avoiding predators. The tools mattered enormously even so: a sharp flake meant a carcass could be butchered before the hyenas arrived, and a hearth meant a night not spent in a tree.

By the Middle Paleolithic the texture of experience had changed. Fire was a fixture of camp life. Meals were cooked, which meant they were softer, safer and shared around a common hearth, and the hearth became the place where the group talked, planned and taught. Hides were scraped and worn. A hunter carried a spear tipped with a stone point fixed with heated adhesive, a tool that took days to make and represented a plan extending well beyond the next meal.

In the Upper Paleolithic, a person lived inside a world thick with meaning. They wore beads that signalled who they were, painted animals in deep caves by lamplight, sewed fitted clothing for arctic winters with bone needles, and hunted with bows, spear throwers and dogs. Grandparents survived long enough to teach grandchildren. Someone from this time would have recognized much in a modern campsite: the fire, the cooking, the sewn clothes, the dog, the stories. The distance between them and us is far smaller than the distance between them and the first tool maker at Lomekwi.`,
  minEvents: 12,
  sources: [
    { author: 'Richard G. Klein', title: 'The Human Career: Human Biological and Cultural Origins, 3rd edition', publisher: 'University of Chicago Press', year: 2009 },
    { author: 'Sally McBrearty and Alison S. Brooks', title: 'The revolution that wasn\'t: a new interpretation of the origin of modern human behavior', publisher: 'Journal of Human Evolution', year: 2000 },
    { author: 'Stanley H. Ambrose', title: 'Paleolithic technology and human evolution', publisher: 'Science', year: 2001, url: 'https://doi.org/10.1126/science.1059487' },
    { author: 'Richard Wrangham', title: 'Catching Fire: How Cooking Made Us Human', publisher: 'Basic Books', year: 2009 },
    { author: 'Sonia Harmand and others', title: '3.3-million-year-old stone tools from Lomekwi 3, West Turkana, Kenya', publisher: 'Nature', year: 2015, url: 'https://doi.org/10.1038/nature14464' },
  ],
  lastReviewed: '2026-09-04',
};

export const events: TechEventInput[] = [
  {
    id: 'lomekwian-tools',
    epochId: 'paleolithic',
    date: { year: -3300000, precision: 'estimated', display: 'c. 3.3 million years ago' },
    location: 'Lomekwi 3, West Turkana, Kenya',
    title: 'Lomekwian stone tools, the oldest known flaked artifacts',
    summary: 'Large cores, flakes and anvils excavated at Lomekwi 3 on the western shore of Lake Turkana push deliberate stone flaking back to 3.3 million years ago, roughly 700,000 years before the genus Homo appears in the fossil record.',
    explanation: `In 2011 a team led by Sonia Harmand and Jason Lewis, working with the West Turkana Archaeological Project, took a wrong turn on their way to a fossil site and found stone artifacts eroding from a hillside at a locality later named Lomekwi 3. Excavation between 2011 and 2014 recovered 149 stone pieces, including cores from which flakes had been struck, the flakes themselves, hammerstones and anvils with battering damage. The sediments were dated by paleomagnetism and by correlation to dated volcanic tuffs to about 3.3 million years ago. That is about 700,000 years older than the earliest Oldowan tools then known and older than any fossil assigned to Homo. The most likely makers are Kenyanthropus platyops, whose fossils come from nearby deposits of the same age, or a species of Australopithecus.

The Lomekwian tools are large and crude by later standards. Cores weigh up to 15 kilograms. Many flakes were struck by holding the core in both hands and hitting it against an anvil, or by setting the core on an anvil and striking it with a heavy hammerstone, rather than by the freehand hammer-and-core technique that characterizes the Oldowan. Even so, the flake scars, striking platforms and bulbs of percussion show that force was applied deliberately and repeatedly to detach sharp pieces. Some flakes were refitted to their cores, demonstrating that the knapping happened on the spot.

Why the makers wanted sharp flakes is not settled. Cut-marked bones from Dikika in Ethiopia, dated to about 3.4 million years ago and attributed to Australopithecus afarensis, have been read as evidence of butchery with stone, although that reading is disputed and some authors argue the marks were made by trampling. Lomekwi 3 itself preserves no cut-marked bone. The tools may have been used to pound plant foods or nuts, to open bones for marrow, or for tasks that leave no trace.

The significance of Lomekwi is twofold. It shows that stone tool making began before the expansion of the brain that defines Homo, so tools may have been a cause of that expansion rather than a product of it. It also shows a technology that persisted for at least several hundred thousand years without becoming the Oldowan, which argues that the Oldowan was a later refinement rather than a sudden beginning.

The finds have been challenged. A 2023 analysis argued that some artifacts could have moved from their original position, and the assignment to a particular hominin species remains inference rather than evidence. Most researchers accept that the artifacts are deliberately flaked and that the dating is sound, but the picture rests on a single locality, which is why the confidence here is medium.`,
    mechanism: `Flaking works because fine-grained rock such as basalt or phonolite fractures conchoidally: a sharp blow near the edge of a block sends a cone of force through the stone and detaches a thin, sharp-edged flake. At Lomekwi the knappers used two methods rarely seen later. In passive hammer or bipolar technique the core was rested on a stone anvil and struck from above, so that flakes detached from both the top and the bottom. In the anvil technique the core itself was swung against a fixed anvil. Both methods sacrifice control for force and suit heavy cores held with two hands. The resulting flakes have the same fracture features as later tools: a striking platform, a bulb of percussion and a keen edge that can cut hide or plant fiber until it dulls.`,
    prerequisites: [],
    consequences: ['oldowan-tools'],
    figures: [
      { name: 'Kenyanthropus platyops or Australopithecus', role: 'Probable makers, inferred from fossils of the same age in the West Turkana deposits' },
      { name: 'Sonia Harmand', role: 'Co-director of the West Turkana Archaeological Project, led the Lomekwi 3 excavation and description' },
      { name: 'Jason E. Lewis', role: 'Co-director of the West Turkana Archaeological Project' },
    ],
    significance: 9,
    significanceJustification: 'Lomekwi is the earliest known instance of a hominin deliberately manufacturing an object, the root of the entire tree of technique. Its importance is tempered only by reliance on one site and by uncertainty about who made the tools and what they were for.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Sonia Harmand and others', title: '3.3-million-year-old stone tools from Lomekwi 3, West Turkana, Kenya', publisher: 'Nature', year: 2015, url: 'https://doi.org/10.1038/nature14464' },
      { author: 'Shannon P. McPherron and others', title: 'Evidence for stone-tool-assisted consumption of animal tissues before 3.39 million years ago at Dikika, Ethiopia', publisher: 'Nature', year: 2010, url: 'https://doi.org/10.1038/nature09248' },
      { author: 'Jason E. Lewis and Sonia Harmand', title: 'An earlier origin for stone tool making: implications for cognitive evolution and the transition to Homo', publisher: 'Philosophical Transactions of the Royal Society B', year: 2016, url: 'https://doi.org/10.1098/rstb.2015.0233' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'oldowan-tools',
    epochId: 'paleolithic',
    date: { year: -2600000, precision: 'estimated', display: 'c. 2.6 million years ago' },
    location: 'Gona and Ledi-Geraru, Afar, Ethiopia',
    title: 'Oldowan flaked stone tools',
    summary: 'The Oldowan industry of sharp flakes struck freehand from cobble cores appears in Ethiopia by 2.6 million years ago and spread across Africa and into Eurasia, becoming the first widespread and long-lived technology.',
    explanation: `The Oldowan is named for Olduvai Gorge in Tanzania, where Louis and Mary Leakey excavated simple flaked cobbles from deposits about 1.8 million years old and Mary Leakey published the defining description in 1971. Older examples were later found in the Afar region of Ethiopia. Sileshi Semaw and colleagues reported tools from Gona dated to between 2.6 and 2.5 million years ago in 1997, and in 2019 a team led by David Braun described artifacts from Bokol Dora at Ledi-Geraru dated to about 2.58 million years ago, found close to the oldest known Homo jaw. In 2023 Thomas Plummer and colleagues published Oldowan tools from Nyayanga in Kenya dated to between 3.0 and 2.6 million years ago, alongside Paranthropus teeth and butchered hippopotamus bones, which extends the industry's age and complicates the question of who made it.

The tools themselves are unpretentious. A knapper selected a rounded river cobble of lava or quartz, held it in one hand and struck it near the edge with a hammerstone held in the other. Each blow removed a flake with a razor edge. The scarred core, a so-called chopper, was once thought to be the intended tool, but experiments and use-wear studies show that the flakes were the main product. A flake a few centimeters long can slice through hide, disarticulate a joint and strip meat from bone, tasks a hominin could not do with its teeth.

Cut marks and hammerstone fractures on animal bones at Gona, Kanjera, Olduvai and Nyayanga show that meat and marrow were central to the tools' use. Access to fat and protein from large animals, probably by scavenging as well as hunting, is widely thought to have supported the larger brains and smaller guts of early Homo. Some tools were also used on plants, and Nyayanga preserves evidence of tuber processing.

The Oldowan's most striking property is its stability. The same basic method was used for a million years and was carried by Homo erectus to Dmanisi in Georgia by 1.8 million years ago and to China and Java soon after. This suggests a tradition transmitted by imitation rather than by teaching in language, since it changed so little over so long.

Compared with Lomekwi, the Oldowan shows better control: knappers chose good raw material, exploited the geometry of the core to strike again and again from the same platform, and sometimes carried stone several kilometers to where it was needed. That planning, and the freehand technique itself, are the true innovations.`,
    mechanism: `Oldowan flaking is freehand hard-hammer percussion. The knapper holds a cobble in one hand and a spherical hammerstone in the other and strikes the cobble's surface at an angle of roughly 60 to 80 degrees to the edge, a few millimeters in from a point where the surface meets an acute edge. The blow produces a Hertzian cone that propagates through the rock and detaches a flake with a bulb of percussion below the platform. The knapper then turns the core to use the fresh scar as the platform for the next removal, so that flakes come off in sequence. Fine-grained lavas, quartzite and chert fracture predictably; coarse rock does not, so raw material selection matters. Flakes are used unmodified or lightly retouched. The core is discarded when its angles become too obtuse to strike.`,
    prerequisites: ['lomekwian-tools'],
    consequences: ['acheulean-hand-axe', 'controlled-fire'],
    figures: [
      { name: 'Early Homo and possibly Paranthropus', role: 'Makers, inferred from fossils found with the tools at Ledi-Geraru, Olduvai and Nyayanga' },
      { name: 'Mary Leakey', role: 'Defined the Oldowan industry in her 1971 monograph on Olduvai Gorge Beds I and II' },
      { name: 'Sileshi Semaw', role: 'Led the Gona excavations that established the 2.6 million year date' },
      { name: 'Thomas W. Plummer', role: 'Led the Nyayanga project that extended the Oldowan back toward 3 million years' },
    ],
    significance: 10,
    significanceJustification: 'The Oldowan is the first technology to spread across continents and to persist for a million years, and it gave early Homo reliable access to meat and marrow. It is the baseline against which every later manufacturing technique is measured.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Sileshi Semaw and others', title: '2.5-million-year-old stone tools from Gona, Ethiopia', publisher: 'Nature', year: 1997, url: 'https://doi.org/10.1038/385333a0' },
      { author: 'David R. Braun and others', title: 'Earliest known Oldowan artifacts at >2.58 Ma from Ledi-Geraru, Ethiopia, highlight early technological diversity', publisher: 'Proceedings of the National Academy of Sciences', year: 2019, url: 'https://doi.org/10.1073/pnas.1820177116' },
      { author: 'Thomas W. Plummer and others', title: 'Expanded geographic distribution and dietary strategies of the earliest Oldowan hominins and Paranthropus', publisher: 'Science', year: 2023, url: 'https://doi.org/10.1126/science.abo7452' },
      { author: 'Mary D. Leakey', title: 'Olduvai Gorge, Volume 3: Excavations in Beds I and II, 1960-1963', publisher: 'Cambridge University Press', year: 1971 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'acheulean-hand-axe',
    epochId: 'paleolithic',
    date: { year: -1760000, precision: 'estimated', display: 'c. 1.76 million years ago' },
    location: 'Kokiselei 4, West Turkana, Kenya',
    title: 'Acheulean hand axe and the imposition of form',
    summary: 'Bifacially flaked hand axes and cleavers, shaped to a symmetrical teardrop template, appear in Kenya by 1.76 million years ago and remain the signature tool of Homo erectus across Africa and Eurasia for over a million years.',
    explanation: `The hand axe is the first artifact whose maker clearly had a shape in mind before starting work. Where an Oldowan knapper struck flakes until the core was exhausted, an Acheulean knapper took a large cobble or a big flake and worked both faces, removing material around the whole perimeter to produce a pointed, symmetrical, roughly almond-shaped tool with a continuous cutting edge. The industry is named for Saint-Acheul in northern France, where such tools were recognized in the nineteenth century. John Frere had described similar objects from Hoxne in England in 1797, correctly guessing that they belonged to a time before the use of metals, and Jacques Boucher de Perthes argued in the 1840s that they came from the same gravels as extinct animals, one of the first demonstrations of human antiquity.

The oldest securely dated Acheulean comes from Kokiselei 4 on the west side of Lake Turkana, where Christopher Lepre and colleagues used magnetostratigraphy to date hand axes and picks to about 1.76 million years ago, and from Konso in Ethiopia, where Yonas Beyene and colleagues documented a 1.75 million year old assemblage and traced its refinement over the following million years. Homo erectus, which appears in East Africa at about the same time, is the presumed maker. The technology reached India by 1.5 million years ago and Europe somewhat later, but was absent from much of East Asia, a pattern known as the Movius Line that may reflect the availability of bamboo or of suitable stone.

Hand axes were general-purpose tools. Use-wear and residue studies show butchery, woodworking and hide-scraping. Their long, straight edges make them efficient for disarticulating a large carcass, and their weight suits heavy chopping. Some archaeologists argue that the emphasis on symmetry exceeds functional need and reflects a social or aesthetic signal, but this is debated.

The Acheulean lasted about 1.5 million years, longer than any other technological tradition. Early hand axes are thick and irregular; by 500,000 years ago at sites such as Boxgrove in England, knappers were thinning tools with soft hammers of bone or antler and producing exquisitely regular forms. The persistence of a shared template across continents and thousands of generations shows that a mental model of a finished object could be transmitted reliably, which some cognitive scientists take as evidence for teaching and for the hierarchical planning abilities that underlie language.`,
    mechanism: `A hand axe begins as a large flake or cobble, ideally of fine-grained lava, quartzite or flint. The knapper first roughs out the shape by hard-hammer percussion, removing large flakes alternately from each face so that the edge zigzags along a plane through the middle of the piece. Each removal creates a platform for the next on the opposite face. The knapper then thins and regularizes the tool with lighter blows, in later Acheulean often with a soft hammer of antler, bone or wood, which produces flatter, more invasive flakes and a straighter edge. Throughout, the knapper must plan several removals ahead, since a blow struck in the wrong place can snap the piece or destroy the symmetry. The finished tool has a continuous bifacial edge, a pointed or rounded tip and a butt that fits the palm.`,
    prerequisites: ['oldowan-tools'],
    consequences: ['levallois-technique', 'schoningen-spears', 'composite-tools'],
    figures: [
      { name: 'Homo erectus', role: 'Maker of the Acheulean across Africa, western Asia and India, with Homo heidelbergensis continuing the tradition in Europe' },
      { name: 'John Frere', role: 'First described hand axes from Hoxne in 1797 and recognized their great antiquity' },
      { name: 'Christopher J. Lepre', role: 'Led the dating of the Kokiselei 4 assemblage to 1.76 million years' },
      { name: 'Yonas Beyene', role: 'Documented the origin and refinement of the Acheulean at Konso, Ethiopia' },
    ],
    significance: 9,
    significanceJustification: 'The hand axe is the first artifact made to a template, demonstrating hierarchical planning and reliable transmission of a mental design across continents and a million years. It is the technological signature of the first hominin to leave Africa.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Christopher J. Lepre and others', title: 'An earlier origin for the Acheulian', publisher: 'Nature', year: 2011, url: 'https://doi.org/10.1038/nature10372' },
      { author: 'Yonas Beyene and others', title: 'The characteristics and chronology of the earliest Acheulean at Konso, Ethiopia', publisher: 'Proceedings of the National Academy of Sciences', year: 2013, url: 'https://doi.org/10.1073/pnas.1221285110' },
      { author: 'John Frere', title: 'Account of flint weapons discovered at Hoxne in Suffolk', publisher: 'Archaeologia', year: 1800 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'controlled-fire',
    epochId: 'paleolithic',
    date: { year: -1000000, precision: 'estimated', display: 'c. 1 million years ago' },
    location: 'Wonderwerk Cave, Northern Cape, South Africa',
    title: 'Controlled use of fire',
    summary: 'Burned bone and plant ash deep inside Wonderwerk Cave show hominins tending fire by about one million years ago; habitual fire use with built hearths is secure across Africa, the Levant and Europe by roughly 400,000 years ago.',
    explanation: `Fire is the first energy source hominins captured from outside their own bodies, and it changed almost everything about how they lived. The difficulty for archaeology is that fire leaves ambiguous traces. Natural bush fires burn bones and reddened sediment as readily as hearths do, so a claim for controlled fire has to show combustion in a place where wildfire could not reach, repeated over time, with the residues in their original position.

The strongest early case is Wonderwerk Cave in South Africa. In 2012 Francesco Berna, Michael Chazan and colleagues reported ashed plant remains and burned bone fragments, identified by microscopic and infrared analysis, in Acheulean deposits about 30 meters inside the cave and dated to about one million years ago. Wildfire does not penetrate that far, and the material had not been washed in. Earlier claims from Koobi Fora and Chesowanja in Kenya at about 1.5 million years ago rest on reddened sediment patches and are less secure. At Gesher Benot Ya'aqov in Israel, Naama Goren-Inbar and colleagues found clusters of burned flint and seeds indicating hearths at about 790,000 years ago.

Even accepting these sites, fire use seems to have been opportunistic for a long time. Wil Roebroeks and Paola Villa surveyed the European record in 2011 and found no convincing evidence of habitual fire before about 400,000 years ago, despite hominins living in cold latitudes well before that. After 400,000 years ago, hearths become common: at Qesem Cave in Israel a central hearth was used repeatedly, and at Middle Paleolithic sites throughout Eurasia Neanderthals built fires routinely. Whether they could make fire at will or only maintain it from natural sources is debated; evidence of pyrite and flint strike-a-lights appears in the late Middle Paleolithic.

The importance of fire rests on several effects. Cooking gelatinizes starch and denatures protein, making food easier to chew and digest and killing parasites. Richard Wrangham has argued that this energy gain explains the large brains, small teeth and short guts of Homo erectus, which would place cooking near 1.8 million years ago, earlier than the archaeological evidence supports. Fire also gives warmth, light after dark, protection from predators and a way to harden wooden spear tips, to prepare adhesives and eventually to fire clay and smelt metal. Socially, the hearth extends the useful day and gathers the group into a single place for talk, and it may have been where language was exercised most intensively.`,
    mechanism: `A fire needs fuel, oxygen and a source of ignition above the fuel's kindling temperature. Early hominins most likely captured fire from lightning strikes or volcanic sources and kept it alive by feeding it, since embers can be carried in a container of bark or dung and rekindled by blowing. Making fire from scratch requires either friction, as with a drill spun against a wooden hearth board to generate hot dust that is coaxed into tinder, or percussion, in which a lump of iron pyrite struck with flint throws sparks onto tinder fungus or dry plant fiber. Cooking works because heat above about 60 degrees Celsius breaks down collagen in meat and above about 65 degrees causes starch granules to swell and rupture, both of which raise the fraction of energy the gut can extract.`,
    prerequisites: ['oldowan-tools'],
    consequences: ['composite-tools', 'clothing', 'early-ceramics', 'oil-lamp', 'dog-domestication', 'pottery', 'copper-smelting'],
    figures: [
      { name: 'Homo erectus and Homo heidelbergensis', role: 'Presumed first users; Neanderthals and Homo sapiens made fire habitual' },
      { name: 'Francesco Berna and Michael Chazan', role: 'Established the one million year old fire evidence at Wonderwerk Cave' },
      { name: 'Naama Goren-Inbar', role: 'Documented hearths at Gesher Benot Ya\'aqov, Israel, at about 790,000 years' },
      { name: 'Richard Wrangham', role: 'Proposed the cooking hypothesis linking fire to the evolution of Homo erectus' },
    ],
    significance: 10,
    significanceJustification: 'Fire is the first external energy source under hominin control and the precondition for cooking, cold-climate settlement, adhesives, ceramics and metallurgy. Few technologies have a longer list of descendants.',
    domains: ['energy', 'materials'],
    sources: [
      { author: 'Francesco Berna and others', title: 'Microstratigraphic evidence of in situ fire in the Acheulean strata of Wonderwerk Cave, Northern Cape province, South Africa', publisher: 'Proceedings of the National Academy of Sciences', year: 2012, url: 'https://doi.org/10.1073/pnas.1117620109' },
      { author: 'Naama Goren-Inbar and others', title: 'Evidence of hominin control of fire at Gesher Benot Ya\'aqov, Israel', publisher: 'Science', year: 2004, url: 'https://doi.org/10.1126/science.1098734' },
      { author: 'Wil Roebroeks and Paola Villa', title: 'On the earliest evidence for habitual use of fire in Europe', publisher: 'Proceedings of the National Academy of Sciences', year: 2011, url: 'https://doi.org/10.1073/pnas.1018116108' },
      { author: 'Richard Wrangham', title: 'Catching Fire: How Cooking Made Us Human', publisher: 'Basic Books', year: 2009 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'levallois-technique',
    epochId: 'paleolithic',
    date: { year: -320000, precision: 'estimated', display: 'c. 320,000 years ago' },
    location: 'Nor Geghi 1, Armenia, and the Kapthurin Formation, Kenya',
    title: 'Levallois prepared-core technique',
    summary: 'Knappers began shaping a core so that a single final blow would detach a flake of predetermined size and form, a multi-stage method that appears in Africa and western Eurasia by about 300,000 years ago and defines the Middle Paleolithic.',
    explanation: `The Levallois technique, named for the Paris suburb of Levallois-Perret where such flakes were first recognized in the nineteenth century, is the clearest early example of manufacturing in stages. Instead of striking flakes and choosing the useful ones, the knapper invested effort in preparing a core so that the shape of the flake to come was fixed in advance. The core was first trimmed around its edge to create a striking platform, then flaked across one face to produce a domed surface with a particular pattern of ridges. A final blow, delivered at a prepared point, ran across that surface and removed a flake whose outline and thickness had been predetermined by the preparation. The result could be a broad oval flake, a long blade or a triangular point, depending on how the surface had been arranged.

The technique was long thought to have originated in Europe with Neanderthals, but it is now clear that it emerged in Africa within the late Acheulean. In the Kapthurin Formation near Lake Baringo in Kenya, Christian Tryon, Sally McBrearty and Pierre-Jean Texier documented Levallois cores in deposits between about 285,000 and 500,000 years old, alongside hand axes. At Nor Geghi 1 in Armenia, Daniel Adler and colleagues found Levallois and biface technologies together in a layer between two volcanic flows dated to 335,000 and 325,000 years ago, showing that the two methods coexisted and that Levallois did not arrive in Eurasia with a new population but was invented in place from the Acheulean. At Jebel Irhoud in Morocco, Levallois tools accompany the oldest known Homo sapiens fossils at about 315,000 years ago.

The significance of the method lies in what it demands of the mind. Every flake removed during preparation is a means, not an end, and its value depends on a plan several steps ahead. Experimental knappers find that Levallois takes months to learn. Cognitive archaeologists have compared its hierarchical structure to the syntax of language, and its appearance around 300,000 years ago coincides with the emergence of both Homo sapiens and the Neanderthals, both of which used it. The flakes it produces are also economical: a prepared core yields sharp, standardized pieces with a high ratio of cutting edge to stone, which suits mobile groups carrying limited raw material. Levallois points, with a thick base and a sharp tip, are the natural candidate for the first hafted spearheads, and the technique therefore feeds directly into the composite tools of the Middle Paleolithic.`,
    mechanism: `A Levallois core is worked as two hierarchically distinct surfaces meeting at a plane. The lower surface is flaked to create a platform ring around the edge; the upper surface is shaped by removals struck from that ring, which converge to produce a low dome with a central mass of stone. The volume of that mass, together with the pattern of ridges left by the preparatory flakes, determines what the final removal will look like, because a fracture follows ridges. The knapper then prepares a faceted platform at one end and strikes it at a low angle with a hard hammer. The detached flake carries the domed surface as its dorsal face and is thin, sharp all around, and predictable. A core may be re-prepared and struck several times before it becomes too small.`,
    prerequisites: ['acheulean-hand-axe'],
    consequences: ['composite-tools', 'clothing'],
    figures: [
      { name: 'Late Homo erectus, Homo heidelbergensis, early Homo sapiens and Neanderthals', role: 'Makers, with the method invented in Africa and independently adopted across western Eurasia' },
      { name: 'Christian A. Tryon and Sally McBrearty', role: 'Documented the Acheulean origin of Levallois in the Kapthurin Formation, Kenya' },
      { name: 'Daniel S. Adler', role: 'Led the Nor Geghi 1 study showing Levallois and biface technologies coexisting in Armenia' },
      { name: 'Eric Boëda', role: 'Formalized the volumetric concept of the Levallois core in the 1990s' },
    ],
    significance: 7,
    significanceJustification: 'Levallois is the first technology in which intermediate products are made in order to make a final product, the essence of manufacturing. It marks the cognitive threshold that both Neanderthals and modern humans crossed.',
    domains: ['manufacturing', 'materials'],
    sources: [
      { author: 'Daniel S. Adler and others', title: 'Early Levallois technology and the Lower to Middle Paleolithic transition in the Southern Caucasus', publisher: 'Science', year: 2014, url: 'https://doi.org/10.1126/science.1256484' },
      { author: 'Christian A. Tryon, Sally McBrearty and Pierre-Jean Texier', title: 'Levallois lithic technology from the Kapthurin Formation, Kenya: Acheulian origin and Middle Stone Age diversity', publisher: 'African Archaeological Review', year: 2005 },
      { author: 'Jean-Jacques Hublin and others', title: 'New fossils from Jebel Irhoud, Morocco and the pan-African origin of Homo sapiens', publisher: 'Nature', year: 2017, url: 'https://doi.org/10.1038/nature22336' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'schoningen-spears',
    epochId: 'paleolithic',
    date: { year: -300000, precision: 'estimated', display: 'c. 300,000 years ago' },
    location: 'Schöningen, Lower Saxony, Germany',
    title: 'Schöningen wooden spears',
    summary: 'A set of complete wooden throwing spears preserved beside butchered horse carcasses at a lignite mine in Germany, the oldest known complete hunting weapons, shows that hominins were planned big-game hunters long before Homo sapiens.',
    explanation: `Wood almost never survives from the Paleolithic, so the vast majority of tools from the period, which were surely made of wood, plant fiber and hide, are invisible. Schöningen is the great exception. Between 1994 and 1998 Hartmut Thieme, excavating ahead of an open-cast lignite mine, uncovered a former lakeshore where waterlogged, oxygen-poor sediments had preserved organic material intact. Along with the bones of at least twenty butchered horses and thousands of flint tools he found a series of wooden spears, eventually ten or more, made from slender spruce and pine trunks. The best preserved are about two meters long, worked to a point at the thicker base end and with the center of mass in the front third, the same balance as a modern javelin. Also present were a double-pointed throwing stick and wooden tools of uncertain use.

Thieme published the finds in Nature in 1997 with an age of about 400,000 years. Later dating of the sequence placed the spear horizon at about 300,000 years, and a 2025 study using amino acid racemization on snail shells argued for about 200,000 years, which would make the makers early Neanderthals rather than Homo heidelbergensis. The exact age remains open, but the spears are older than any comparable weapon by a wide margin. A single spear tip from Clacton-on-Sea in England, found in 1911, is about 400,000 years old, and a fragment from Lehringen in Germany, about 120,000 years old, was found lodged between the ribs of a straight-tusked elephant.

The spears overturned a picture in which pre-modern hominins were marginal scavengers. Making one required selecting a young tree of the right species, felling it with stone tools, stripping and seasoning it, and shaving the point with the tip offset from the softer pith. Throwing experiments with replicas by trained athletes have shown reliable accuracy and lethal penetration at 15 to 20 meters. The horse bones show repeated, organized kills at the lakeshore, implying cooperation and shared spoils.

Schöningen therefore documents three things at once: sophisticated woodworking, planned cooperative hunting of large and dangerous animals, and the transmission of a weapon design that recurs across a dozen objects. It is also a reminder of how much of Paleolithic technology is missing from the record. The site continues to yield finds, including a 2023 report of more than 700 wooden objects from the same deposits.`,
    mechanism: `A Schöningen spear was made from a spruce or pine sapling about 30 years old, chosen for a straight, knot-free trunk. The maker removed the bark and branches with flint flakes and scrapers, and shaped the tip at the base of the trunk, where the wood is densest, keeping the point off-center so that it avoided the weak pith. The shaft was smoothed along its length and tapered toward the tail, placing the center of gravity about a third of the way from the tip, which stabilizes the spear in flight and keeps it nose-heavy on impact. Thrown overhand, a two-meter spear of this design reaches roughly 20 meters with enough energy to penetrate a horse's chest. The point could be fire-hardened, though there is no direct evidence of that at Schöningen.`,
    prerequisites: ['acheulean-hand-axe'],
    consequences: ['composite-tools', 'bow-and-arrow'],
    figures: [
      { name: 'Homo heidelbergensis or early Neanderthals', role: 'Makers, depending on which dating of the spear horizon is accepted' },
      { name: 'Hartmut Thieme', role: 'Excavated the spears between 1994 and 1998 and published them in 1997' },
      { name: 'Nicholas J. Conard', role: 'Directs the ongoing Schöningen research program' },
    ],
    significance: 7,
    significanceJustification: 'The spears are the oldest complete weapons known and the best evidence that organized big-game hunting predates Homo sapiens by hundreds of thousands of years. They also demonstrate advanced woodworking that is otherwise invisible in the record.',
    domains: ['weapons-security', 'materials'],
    sources: [
      { author: 'Hartmut Thieme', title: 'Lower Palaeolithic hunting spears from Germany', publisher: 'Nature', year: 1997, url: 'https://doi.org/10.1038/385807a0' },
      { author: 'Daniel Richter and Matthias Krbetschek', title: 'The age of the Lower Paleolithic occupation at Schöningen', publisher: 'Journal of Human Evolution', year: 2015, url: 'https://doi.org/10.1016/j.jhevol.2015.06.003' },
      { author: 'Annemieke Milks, David Parker and Matt Pope', title: 'External ballistics of Pleistocene hand-thrown spears: experimental performance data and implications for human evolution', publisher: 'Scientific Reports', year: 2019, url: 'https://doi.org/10.1038/s41598-018-37904-w' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'composite-tools',
    epochId: 'paleolithic',
    date: { year: -200000, precision: 'estimated', display: 'c. 200,000 years ago' },
    location: 'Campitello Quarry, Tuscany, Italy, with earlier claims from Kathu Pan, South Africa',
    title: 'Hafting and adhesives: the composite tool',
    summary: 'Stone points and blades were fixed to wooden handles and shafts with birch tar, plant gum and ochre-loaded compound adhesives, combining several materials into one tool and making stone-tipped spears, knives and scrapers possible.',
    explanation: `A composite tool joins parts made of different materials so that each does what it does best: stone for the edge, wood for reach and leverage, sinew or adhesive for the join. The idea sounds simple, but it requires the maker to hold in mind a finished object that none of its parts resembles, and to produce and process a binding material that is itself a manufactured product. Its appearance marks the transition from tools to technology in the modern sense.

The oldest direct evidence is at Campitello Quarry in Tuscany, where two flint flakes still coated with birch bark tar were found in sediments of the penultimate glaciation, more than 200,000 years old, and described by Paul Peter Anthony Mazza and colleagues in 2006. Birch tar does not occur naturally; it is produced by heating bark in a low-oxygen environment. Similar tar-hafted tools from Königsaue in Germany, about 80,000 years old, and from Zandmotor on the Dutch coast, about 50,000 years old, show that Neanderthals made and used it routinely. In South Africa, Jayne Wilkins and colleagues argued in 2012 that stone points from Kathu Pan 1, dated to about 500,000 years ago, show tip damage and base modification consistent with use as spear tips, which would push hafting back much further, though this interpretation is contested because the site has no preserved organic residue. Ochre-bearing residues on Middle Stone Age points from Sibudu Cave in KwaZulu-Natal, about 70,000 years old, were studied by Lyn Wadley, who showed by experiment that the ochre was a deliberate additive that made plant gum adhesive stronger and less brittle, a recipe requiring the maker to adjust proportions and heat with care.

Hafting transformed what a stone tool could do. A hafted point turns a wooden spear into a far more lethal weapon that opens a wound and stays in it. A hafted knife can be gripped hard and driven with the whole arm. A hafted scraper can be pushed across a hide for hours without cutting the hand. Because the stone part could be replaced when it broke, the durable handle became a long-term possession and the stone a consumable, which changed how raw material was managed. Small, standardized points and blades, which dominate the Middle and Upper Paleolithic, only make sense as components of composite tools.

Adhesive technology is also the first chemistry. Producing birch tar requires controlling temperature within a narrow band; producing compound adhesives requires understanding how ingredients interact. Both were transmitted across generations and both were practiced by Neanderthals as well as by Homo sapiens, which argues that the cognitive foundations of technology were shared across the later members of the genus.`,
    mechanism: `A hafted tool has three parts: a stone insert, a wooden or bone haft, and a binding. The haft is notched or split to receive the insert, and the insert is often thinned or notched at its base to sit securely. Birch tar is made by heating rolls of birch bark at roughly 350 degrees Celsius with limited oxygen, for example under a covering of embers and ash, so that the bark exudes a black, sticky pitch rather than burning; the pitch is applied warm and hardens as it cools. Compound adhesives use plant gum from Acacia or similar trees mixed with powdered ochre and sometimes beeswax or fat; the ochre acts as a filler that raises the gum's strength and resists cracking when dry. Sinew or plant fiber lashing is wound over the join and shrinks as it dries. The finished join transmits force from the haft to the edge without slipping.`,
    prerequisites: ['acheulean-hand-axe', 'controlled-fire', 'levallois-technique', 'schoningen-spears'],
    consequences: ['bow-and-arrow', 'sewing-needle', 'plough'],
    figures: [
      { name: 'Neanderthals and Middle Stone Age Homo sapiens', role: 'Makers of the earliest securely documented hafted tools and adhesives' },
      { name: 'Paul Peter Anthony Mazza', role: 'Described the tar-hafted flakes from Campitello Quarry' },
      { name: 'Lyn Wadley', role: 'Demonstrated by experiment the compound ochre and gum adhesives of Sibudu Cave' },
      { name: 'Jayne Wilkins', role: 'Argued for hafted spear points at Kathu Pan 1 at about 500,000 years' },
    ],
    significance: 8,
    significanceJustification: 'Hafting is the origin of the multi-material tool and of the replaceable part, and adhesive production is the first controlled chemical process. Nearly every later hand tool and weapon descends from it.',
    domains: ['materials', 'manufacturing', 'weapons-security'],
    sources: [
      { author: 'Paul Peter Anthony Mazza and others', title: 'A new Palaeolithic discovery: tar-hafted stone tools in a European Mid-Pleistocene bone-bearing bed', publisher: 'Journal of Archaeological Science', year: 2006, url: 'https://doi.org/10.1016/j.jas.2006.01.006' },
      { author: 'Jayne Wilkins and others', title: 'Evidence for early hafted hunting technology', publisher: 'Science', year: 2012, url: 'https://doi.org/10.1126/science.1227608' },
      { author: 'Lyn Wadley, Tamaryn Hodgskiss and Michael Grant', title: 'Implications for complex cognition from the hafting of tools with compound adhesives in the Middle Stone Age, South Africa', publisher: 'Proceedings of the National Academy of Sciences', year: 2009, url: 'https://doi.org/10.1073/pnas.0900957106' },
      { author: 'Lawrence Barham', title: 'From Hand to Handle: The First Industrial Revolution', publisher: 'Oxford University Press', year: 2013 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'clothing',
    epochId: 'paleolithic',
    date: { year: -120000, precision: 'estimated', display: 'c. 120,000 years ago' },
    location: 'Contrebandiers Cave, Atlantic coast of Morocco',
    title: 'Clothing from worked animal hides',
    summary: 'Bone tools for scraping and softening skins, together with carnivore bones bearing skinning marks, show hides being prepared as clothing by about 120,000 years ago, in step with genetic estimates for when clothing lice diverged from head lice.',
    explanation: `Clothing leaves almost no direct trace. Skins, furs and plant fiber decay within centuries, so the history of dress has to be reconstructed from the tools used to make it, from the marks those tools left on bone, and from an unexpected source: the parasites that live in it. The human clothing louse is a subspecies of the head louse that is adapted to living in fabric rather than hair. In 2011 Melissa Toups, David Reed and colleagues used molecular clock methods to estimate that the two lineages diverged between about 83,000 and 170,000 years ago, with a central estimate near 170,000 years, which gives a rough date for when humans began wearing clothing regularly enough for a parasite to specialize on it.

Archaeology now supports that range. At Contrebandiers Cave on the Moroccan coast, Emily Hallett and colleagues reported in 2021 a set of 62 bone tools from layers between 120,000 and 90,000 years old, including broad, smoothed spatulate tools of a kind used historically to scrape and soften hides. In the same layers, bones of sand fox, golden jackal and wildcat bore cut marks concentrated at the paws and around the face, a pattern produced when a carcass is skinned for its pelt rather than butchered for meat. Together they are the earliest coherent evidence of fur working. Older but less specific evidence includes scrapers at many Middle Pleistocene sites and the cold-climate occupations of Neanderthals in Europe, who could hardly have survived glacial winters without covering.

Ian Gilligan has argued that clothing has two stages. Simple clothing, a cloak or wrap of loose hide, gives enough insulation for mild cold and requires only scrapers to prepare the skin. Complex clothing, fitted garments with sleeves and legs and multiple layers, is needed for the wind chill of open tundra and requires cutting hides to shape and joining them with awls, thread and eventually eyed needles. The first stage was probably achieved by several hominin species; the second appears with Homo sapiens in the Upper Paleolithic and made possible the settlement of Siberia and the crossing into the Americas.

Clothing altered the relation between body and climate. With fire it allowed a tropical primate to live above the Arctic Circle. It also became a medium of display: pelts, colors and ornaments sewn to garments carried social information, and the beads found at sites such as Blombos and Skhul were probably worn on clothing. In this sense dress is one of the earliest technologies of communication as well as of survival.`,
    mechanism: `Preparing a hide begins with skinning, in which cuts are made around the paws and muzzle and the pelt is peeled from the carcass with the fur intact. The inner surface is then scraped with a stone or bone scraper to remove fat, flesh and membrane, and the hide is dried under tension. Untreated hide dries stiff, so it is softened by working it repeatedly over a bone or wooden edge, by rubbing in fat or brain tissue, or by smoking, all of which are forms of tanning that prevent the collagen fibers from bonding rigidly and slow decay. A simple garment is worn as a wrap or tied with sinew; a fitted garment is cut to pattern, pierced along the edges with an awl and sewn with sinew thread. Fur turned inward traps a layer of still air that provides most of the insulation.`,
    prerequisites: ['controlled-fire', 'levallois-technique'],
    consequences: ['sewing-needle', 'weaving-loom'],
    figures: [
      { name: 'Homo sapiens and Neanderthals', role: 'Both species prepared hides; fitted clothing is attributed to Upper Paleolithic Homo sapiens' },
      { name: 'Emily Y. Hallett', role: 'Led the study of hide-working bone tools and skinned carnivore bones at Contrebandiers Cave' },
      { name: 'David L. Reed', role: 'Co-led the louse molecular clock study that dated the origin of clothing' },
      { name: 'Ian Gilligan', role: 'Developed the thermal model distinguishing simple and complex clothing' },
    ],
    significance: 8,
    significanceJustification: 'Clothing decoupled human survival from climate and, with fire, made the settlement of the entire planet possible. It also became one of the first media of social signalling.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Emily Y. Hallett and others', title: 'A worked bone assemblage from 120,000-90,000 year old deposits at Contrebandiers Cave, Atlantic Coast, Morocco', publisher: 'iScience', year: 2021, url: 'https://doi.org/10.1016/j.isci.2021.102988' },
      { author: 'Melissa A. Toups, Andrew Kitchen, Jessica E. Light and David L. Reed', title: 'Origin of clothing lice indicates early clothing use by anatomically modern humans in Africa', publisher: 'Molecular Biology and Evolution', year: 2011, url: 'https://doi.org/10.1093/molbev/msq234' },
      { author: 'Ian Gilligan', title: 'The prehistoric development of clothing: archaeological implications of a thermal model', publisher: 'Journal of Archaeological Method and Theory', year: 2010, url: 'https://doi.org/10.1007/s10816-010-9076-x' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'ochre-symbolic-behavior',
    epochId: 'paleolithic',
    date: { year: -100000, precision: 'estimated', display: 'c. 100,000 years ago' },
    location: 'Blombos Cave, Western Cape, South Africa',
    title: 'Ochre processing, engraving and the first symbolic artifacts',
    summary: 'At Blombos Cave, ochre-processing kits in abalone shells at 100,000 years and engraved ochre slabs and shell beads at 75,000 years show pigment being made and marks being used to carry meaning, the earliest secure evidence of symbolic behavior.',
    explanation: `Ochre is iron-rich earth that ranges from yellow through red to purple and can be ground into a pigment. Hominins collected it very early: pieces with grinding facets occur at Olorgesailie in Kenya and in the Kapthurin Formation by about 300,000 years ago, and at Pinnacle Point in South Africa by 160,000 years ago. What ochre was for is debated, since it has practical uses in adhesives, hide preservation and sun protection as well as in coloring bodies and objects. The site that settles the question of symbolism is Blombos Cave, on the southern coast of South Africa, excavated by Christopher Henshilwood since 1991.

In a layer dated to about 100,000 years ago, Henshilwood's team found two abalone shells containing a red, ochre-rich compound, together with the grindstones, hammerstones and bone used to make it and traces of charcoal and crushed bone in the mixture. This is a toolkit for producing and storing paint, and it shows a multi-ingredient recipe being followed. In layers dated to about 75,000 years ago, the team found more than a dozen ochre slabs whose ground surfaces had been engraved with deliberate cross-hatched patterns, the best known of which is a lattice bounded by parallel lines. The same layers held more than 60 shells of the sea snail Nassarius kraussianus, each perforated and showing wear from being strung, and some with ochre traces. Similar beads of about the same age are known from Skhul in Israel, Grotte des Pigeons in Morocco and Sibudu in South Africa.

A bead is a strong signal of symbolism because it has no use except to be seen. It tells others something about the wearer, which requires that both parties share a convention about what it means. The engraved patterns show the same thing in a different form: a design made deliberately, repeated on several pieces, and recognizable across time. These finds pushed evidence of symbolic behavior back by about 40,000 years and undermined the older view that a sudden cognitive revolution occurred in Europe around 40,000 years ago. Sally McBrearty and Alison Brooks had argued in 2000 that modern behavior assembled gradually in Africa; Blombos was the decisive support.

The technological importance is that meaning had begun to be stored in objects. Once a pattern or an ornament can carry information, that information can outlive a conversation and be read by strangers. Ochre pigment, beads and engraving are the first steps on a road that leads through cave painting and notation to writing.`,
    mechanism: `Ochre is prepared by rubbing a lump against a coarse stone such as quartzite until fine powder accumulates, or by crushing it with a hammerstone. At Blombos the powder was mixed in an abalone shell with a liquid, probably water, and with charcoal, ground bone and a fatty binder, then stirred to make a paint that would adhere to skin or hide. The iron oxide hematite gives red; heating yellow goethite converts it to red hematite, a transformation known to later Paleolithic painters. Engraving is done by drawing a sharp stone point across a smoothed ochre surface with steady pressure, producing V-shaped grooves; the Blombos lattices were made with repeated strokes in a consistent direction. Beads were made by piercing a shell wall with a pointed tool and stringing the shells on sinew or fiber, where they polished one another as they rubbed.`,
    prerequisites: ['controlled-fire', 'composite-tools'],
    consequences: ['cave-art-information-storage', 'proto-writing-tokens'],
    figures: [
      { name: 'Middle Stone Age Homo sapiens', role: 'Makers of the Blombos ochre kits, engravings and beads' },
      { name: 'Christopher S. Henshilwood', role: 'Directed the Blombos Cave excavations and published the engraved ochre, beads and paint-making kits' },
      { name: 'Francesco d\'Errico', role: 'Led the analysis of the Blombos engravings and beads that established their deliberate and symbolic character' },
    ],
    significance: 9,
    significanceJustification: 'Blombos is the earliest secure evidence that humans stored meaning in objects, the foundation of all later information technology. It reset the timeline for modern cognition by tens of thousands of years.',
    domains: ['information', 'communication', 'materials'],
    sources: [
      { author: 'Christopher S. Henshilwood and others', title: 'Emergence of modern human behavior: Middle Stone Age engravings from South Africa', publisher: 'Science', year: 2002, url: 'https://doi.org/10.1126/science.1067575' },
      { author: 'Christopher S. Henshilwood and others', title: 'A 100,000-year-old ochre-processing workshop at Blombos Cave, South Africa', publisher: 'Science', year: 2011, url: 'https://doi.org/10.1126/science.1211535' },
      { author: 'Christopher S. Henshilwood, Francesco d\'Errico, Marian Vanhaeren, Karen van Niekerk and Zenobia Jacobs', title: 'Middle Stone Age shell beads from South Africa', publisher: 'Science', year: 2004, url: 'https://doi.org/10.1126/science.1095905' },
      { author: 'Alison S. Brooks and others', title: 'Long-distance stone transport and pigment use in the earliest Middle Stone Age', publisher: 'Science', year: 2018, url: 'https://doi.org/10.1126/science.aao2646' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'bow-and-arrow',
    epochId: 'paleolithic',
    date: { year: -62000, precision: 'estimated', display: 'c. 64,000 years ago' },
    location: 'Sibudu Cave, KwaZulu-Natal, South Africa',
    title: 'Bow and arrow',
    summary: 'Small stone points with impact fractures and hafting residues at Sibudu Cave suggest arrows by about 64,000 years ago; secure bone arrowheads from Sri Lanka at 48,000 years and tiny points from Grotte Mandrin in France at 54,000 years confirm the bow as a Paleolithic invention.',
    explanation: `The bow stores muscular energy in bent wood and releases it in a fraction of a second, sending a light projectile faster and farther than any arm can throw. It is the first machine in the strict sense, a device that transforms a slow input into a fast output, and it changed hunting, warfare and the balance between humans and other animals wherever it arrived. Bows themselves, made of wood and sinew, rarely survive; the oldest complete examples, from Holmegaard in Denmark, are only about 9,000 years old. Its earlier history is read from the arrowheads.

The earliest proposed evidence comes from Sibudu Cave in South Africa. In 2010 Marlize Lombard and Laurel Phillipson examined small quartz backed pieces from layers dated to about 64,000 years ago. The pieces carried impact fractures at the tip, traces of adhesive and ochre on the blunted back, and wear patterns consistent with having been mounted on a light shaft and fired at speed. They argued that the combination points to arrows rather than to hand-thrown spears, since thrown spears use larger points. The inference is indirect, and some archaeologists prefer to attribute these microliths to spear-thrower darts, so the date carries medium confidence.

The evidence firms up later. At Fa-Hien Lena cave in Sri Lanka, Michelle Langley and colleagues described in 2020 a set of bone points with fracture and wear patterns matching arrowheads, dated to about 48,000 years ago, the oldest outside Africa. At Grotte Mandrin in the Rhône valley, Laure Metz, Ludovic Slimak and colleagues reported in 2023 hundreds of minute flint points, some under a centimeter across, from a 54,000-year-old layer attributed to the earliest Homo sapiens in Europe; experiments showed such tiny points could only be delivered effectively by a bow. By the later Upper Paleolithic, arrowheads are common across Eurasia and Africa.

Why the bow mattered is clear from its effects. An archer can kill from 30 meters or more, can carry dozens of shots, and can hunt small and fast game, birds and fish that a spear cannot reach. This broadened diets and reduced the risk of hunting. The bow also raised the lethality of conflict between groups. Some researchers link the bow's spread to the demographic success of Homo sapiens relative to Neanderthals, who used thrusting and throwing spears but, on current evidence, never adopted the bow. The technology combines several earlier ones: a hafted microlithic point, adhesives, worked wood, and processed sinew or fiber cordage, and it could not exist without them.`,
    mechanism: `A self bow is a stave of springy wood, such as yew, elm or hazel, tapered from the handle to the tips so that it bends evenly. The string, of sinew, gut or twisted plant fiber, is shorter than the stave, so the bow is held under tension when strung. Drawing the string bends the limbs and stores energy in the compressed belly and stretched back of the wood. On release the limbs straighten in a few milliseconds and transfer most of that energy to the arrow, which leaves at 40 to 60 meters per second, several times the speed of a thrown spear. The arrow is a straight, light shaft with a small stone or bone point at the front and feathers at the rear that spin and stabilize it. Because the point is small, the arrow penetrates deeply for its weight.`,
    prerequisites: ['schoningen-spears', 'composite-tools'],
    consequences: ['dog-domestication', 'crossbow'],
    figures: [
      { name: 'Middle Stone Age and Upper Paleolithic Homo sapiens', role: 'Makers and users; no evidence yet of Neanderthal archery' },
      { name: 'Marlize Lombard', role: 'Identified the Sibudu Cave microliths as probable arrowheads' },
      { name: 'Michelle C. Langley', role: 'Led the study of bone arrowheads from Fa-Hien Lena, Sri Lanka' },
      { name: 'Laure Metz and Ludovic Slimak', role: 'Documented the 54,000-year-old miniature points at Grotte Mandrin, France' },
    ],
    significance: 8,
    significanceJustification: 'The bow is the first device to store and release energy mechanically, and it dominated hunting and warfare for 60,000 years until firearms. It widened the human diet and may have shaped the outcome between modern humans and Neanderthals.',
    domains: ['weapons-security', 'energy'],
    sources: [
      { author: 'Marlize Lombard and Laurel Phillipson', title: 'Indications of bow and stone-tipped arrow use 64,000 years ago in KwaZulu-Natal, South Africa', publisher: 'Antiquity', year: 2010, url: 'https://doi.org/10.1017/S0003598X00066989' },
      { author: 'Michelle C. Langley and others', title: 'Bows and arrows and complex symbolic displays 48,000 years ago in the South Asian tropics', publisher: 'Science Advances', year: 2020, url: 'https://doi.org/10.1126/sciadv.aba3831' },
      { author: 'Laure Metz and others', title: 'Bow-and-arrow, technology of the first modern humans in Europe 54,000 years ago at Mandrin, France', publisher: 'Science Advances', year: 2023, url: 'https://doi.org/10.1126/sciadv.add4675' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'cave-art-information-storage',
    epochId: 'paleolithic',
    date: { year: -49000, precision: 'estimated', display: 'c. 51,000 years ago' },
    location: 'Leang Karampuang, Maros-Pangkep karst, Sulawesi, Indonesia',
    title: 'Cave painting as external information storage',
    summary: 'Figurative paintings of animals and human figures on cave walls in Sulawesi, dated by uranium-series to at least 51,200 years ago, with the great European caves following from about 40,000 years, mark the point at which humans began recording scenes and stories on durable surfaces.',
    explanation: `For most of the twentieth century the story of art began in Europe. Altamira in Spain, recognized in 1879, Lascaux in France, discovered in 1940, and Chauvet, found in 1994 and dated to about 36,000 years ago, seemed to show a creative explosion among the first modern humans on the continent. That picture changed with uranium-thorium dating of calcite crusts that form over paintings. In 2012 Alistair Pike and colleagues showed that a red disk at El Castillo in Spain was at least 40,800 years old, and in 2014 Maxime Aubert and colleagues reported hand stencils and an animal painting in Sulawesi of similar age. In 2021 the Sulawesi team described a warty pig painted at Leang Tedongnge at least 45,500 years ago, and in 2024 Adhi Agus Oktaviana, Aubert and colleagues used a refined laser-ablation dating method at Leang Karampuang to date a scene of three human-like figures and a pig to at least 51,200 years ago, the oldest known figurative art and the oldest known narrative composition.

These dates show that painting was practiced by Homo sapiens before or during the dispersal into Southeast Asia and Australia, and that the European caves are a regional expression of a much older tradition rather than its origin. A few claims go further: engraved and painted marks at three Spanish caves dated to before 64,000 years ago have been attributed to Neanderthals, though the dating is disputed.

What makes cave art a technology rather than only an aesthetic act is its function as storage. A painting fixes an image on a surface where it can be seen by people who were not present when it was made, including people not yet born. The Sulawesi scenes appear to show interactions between humans and animals, that is, events or stories. European caves record the animals of the Ice Age steppe with anatomical precision, sometimes with seasonal features such as antlers or coat, and often accompanied by sequences of dots and lines. Bennett Bacon and colleagues argued in 2023 that some of these marks form a notation recording the months in which animals mate or give birth, a claim that remains contested but illustrates the direction of the evidence.

Deep caves were also chosen deliberately. Reaching the painted chambers at Lascaux or Chauvet meant travelling hundreds of meters underground by lamplight, and the acoustics of some painted chambers are unusual, suggesting that the images were part of performances. Whatever their exact use, cave paintings, portable engravings and beads together show a species that had begun to keep its knowledge outside its heads. Everything from tally sticks to writing to computers extends that move.`,
    mechanism: `Paleolithic painters used mineral pigments, mainly red and yellow ochre, black manganese oxide and charcoal, ground on stone palettes and mixed with water, saliva, fat or plant juices to make a paste. Pigment was applied with fingers, pads of moss or fur, chewed twig brushes, or by spraying from the mouth or through a tube to produce hand stencils and soft gradations. Outlines were sometimes engraved into the rock first with a flint point. Painters exploited natural bulges and cracks in the wall to give animals volume. The pigment binds to the limestone as the water evaporates and is protected when a thin film of calcite grows over it, which is what allows uranium-series dating: uranium in percolating water is trapped in the calcite, and its decay to thorium gives a minimum age for the painting beneath.`,
    prerequisites: ['ochre-symbolic-behavior', 'controlled-fire'],
    consequences: ['oil-lamp', 'proto-writing-tokens', 'hieroglyphs'],
    figures: [
      { name: 'Upper Paleolithic Homo sapiens', role: 'Painters in Sulawesi, Europe and elsewhere; a Neanderthal contribution is claimed but disputed' },
      { name: 'Maxime Aubert', role: 'Led the uranium-series dating of the Sulawesi cave paintings' },
      { name: 'Adhi Agus Oktaviana', role: 'First author of the 2024 study dating the Leang Karampuang scene to 51,200 years' },
      { name: 'Alistair W. G. Pike', role: 'Led the 2012 uranium-series dating of Spanish cave art' },
      { name: 'Jean Clottes', role: 'Directed the study of Chauvet Cave' },
    ],
    significance: 9,
    significanceJustification: 'Cave art is the earliest durable external record of scenes and ideas, the ancestor of every information storage technology. Its rediscovered antiquity in Asia rewrote the geography of human creativity.',
    domains: ['information', 'communication'],
    sources: [
      { author: 'Adhi Agus Oktaviana and others', title: 'Narrative cave art in Indonesia by 51,200 years ago', publisher: 'Nature', year: 2024, url: 'https://doi.org/10.1038/s41586-024-07541-7' },
      { author: 'Adam Brumm and others', title: 'Oldest cave art found in Sulawesi', publisher: 'Science Advances', year: 2021, url: 'https://doi.org/10.1126/sciadv.abd4648' },
      { author: 'Alistair W. G. Pike and others', title: 'U-series dating of Paleolithic art in 11 caves in Spain', publisher: 'Science', year: 2012, url: 'https://doi.org/10.1126/science.1219957' },
      { author: 'Jean Clottes', title: 'Chauvet Cave: The Art of Earliest Times', publisher: 'University of Utah Press', year: 2003 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'sewing-needle',
    epochId: 'paleolithic',
    date: { year: -38000, precision: 'estimated', display: 'c. 40,000 years ago' },
    location: 'Denisova Cave, Altai, Siberia, and northern China',
    title: 'Eyed sewing needle',
    summary: 'Slender bone needles with a drilled eye appear in Siberia and northern China by about 40,000 years ago and across Eurasia soon after, making tailored, layered clothing possible and opening the Arctic to settlement.',
    explanation: `An eyed needle is a small object with a large consequence. Before it, hides could be joined by punching holes with an awl and threading sinew through them by hand, a slow process that produces loose seams. With a needle, the thread follows the point through the hide in one motion, seams can be tight and fine, and a garment can be built from many shaped pieces with fur turned inward and layers on top of one another. That is the difference between a cloak and a parka, and it is what allowed Homo sapiens to live through winters on the mammoth steppe of Siberia and to reach the Americas.

Bone awls and pointed tools are known from Middle Stone Age Africa and from Neanderthal sites, but true needles with an eye are, on present evidence, a Homo sapiens invention of the Upper Paleolithic. The earliest candidates come from Denisova Cave in the Altai, where a 7-centimeter bird-bone needle was found in 2016 in a layer that excavators date to about 50,000 years ago, although the layer's integrity and the needle's association with it have been questioned. Needles from Xiaogushan and Shuidonggou in northern China date between about 40,000 and 30,000 years ago. In Europe they appear in the Aurignacian and become common in the Solutrean and Magdalenian, where finely made needles with eyes under a millimeter across are found in quantity, together with the grooved bone and antler blanks and flint borers used to make them. Francesco d'Errico and colleagues reviewed the whole record in 2018 and traced the technology from Siberia and China westward into Europe and eastward into North America.

The needle's timing matches the peopling of the cold north. Sites such as Yana in Arctic Siberia, occupied about 32,000 years ago, and the Sunghir burials near Moscow, about 34,000 years old, where thousands of ivory beads were found in rows that had been sewn onto now-vanished hooded clothing, show fully tailored garments. Ian Gilligan has argued that the fluctuating cold of the last glacial period, and particularly the extreme conditions of the Last Glacial Maximum, drove the adoption of complex clothing and with it the needle.

Beyond clothing, sewing enabled tents of stitched hide, skin boats, bags and containers, and decorated garments that carried social information. The needle is also a landmark in fine manufacturing: making one demands cutting a sliver of bone, grinding it round and smooth, and drilling a hole a millimeter across without splitting the shaft, tasks requiring small, specialized tools and steady practice.`,
    mechanism: `A Paleolithic needle starts as a sliver of bone, ivory or antler cut from a long bone by scoring two parallel grooves with a burin and snapping out the strip between them. The strip is shaved and then ground on sandstone until round and tapered, and polished. The eye is made by scraping a shallow depression on each side near the blunt end and then rotating a fine flint point in the depression until the two sides meet, or by gouging from one side. Thread was made from sinew split into fine strands and twisted, or from plant fiber. In use, the point pierces the hide and pulls the thread through in a single motion, and stitches can be locked by looping. Needles break easily and were made in numbers, which is why so many survive.`,
    prerequisites: ['clothing', 'composite-tools'],
    consequences: ['weaving-loom'],
    figures: [
      { name: 'Upper Paleolithic Homo sapiens', role: 'Makers of eyed needles across Eurasia' },
      { name: 'Francesco d\'Errico', role: 'Led the 2018 synthesis tracing the origin and spread of sewing technology across Eurasia and North America' },
      { name: 'Ian Gilligan', role: 'Linked the eyed needle to the thermal demands of complex clothing during the last glaciation' },
    ],
    significance: 7,
    significanceJustification: 'The eyed needle turned hides into fitted, layered clothing and opened the Arctic and the Americas to human settlement. It is a small tool with a continental consequence.',
    domains: ['manufacturing', 'materials'],
    sources: [
      { author: 'Francesco d\'Errico, Luc Doyon, Shuangquan Zhang, Malvina Baumann, Martina Lázničková-Galetová, Xing Gao, Fuyou Chen and Yue Zhang', title: 'The origin and evolution of sewing technologies in Eurasia and North America', publisher: 'Journal of Human Evolution', year: 2018, url: 'https://doi.org/10.1016/j.jhevol.2018.10.004' },
      { author: 'Ian Gilligan', title: 'Climate, Clothing, and Agriculture in Prehistory: Linking Evidence, Causes, and Effects', publisher: 'Cambridge University Press', year: 2019 },
      { author: 'Ian Gilligan', title: 'The prehistoric development of clothing: archaeological implications of a thermal model', publisher: 'Journal of Archaeological Method and Theory', year: 2010, url: 'https://doi.org/10.1007/s10816-010-9076-x' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'early-ceramics',
    epochId: 'paleolithic',
    date: { year: -27000, precision: 'estimated', display: 'c. 29,000 years ago' },
    location: 'Dolní Věstonice and Pavlov, Moravia, Czech Republic',
    title: 'Fired clay: the first ceramics',
    summary: 'Gravettian hunters in Moravia fired thousands of clay figurines and pellets in hearths and kilns about 29,000 to 25,000 years ago, the first deliberate transformation of a material by heat; fired clay cooking vessels followed in East Asia by about 20,000 years ago.',
    explanation: `Ceramics are the first synthetic material. Clay is soft and plastic when wet and crumbles when dry, but heated above about 500 degrees Celsius it changes irreversibly into a hard, water-resistant substance that no longer occurs in nature. Discovering that transformation and learning to control it was a step into chemistry, and it happened not in the service of pots but of images.

The earliest fired clay objects come from a cluster of Gravettian sites in Moravia, chiefly Dolní Věstonice and Pavlov, excavated from the 1920s onward. The sites have yielded more than 10,000 fragments of fired loess-based clay, including the famous Venus of Dolní Věstonice, a female figurine about 11 centimeters tall, and figurines of mammoth, bear, lion, rhinoceros and other animals, together with thousands of small pellets, some bearing fingerprints. They date to between about 29,000 and 25,000 years ago. In 1989 Pamela Vandiver, Olga Soffer, Bohuslav Klíma and Jiří Svoboda examined the pieces with modern ceramic science and found that they had been fired at between 500 and 800 degrees Celsius, in structures at the site that were probably simple kilns, and that many had fractured by thermal shock. They argued that the objects were deliberately made wet and fired hot so that they would explode, perhaps as part of a ritual, though this interpretation is debated. What is not debated is that the makers understood the recipe: they mixed loess with water, shaped it, dried it and fired it, and did so on a large scale.

Fired clay for containers came later and in a different region. At Xianrendong Cave in Jiangxi, China, Xiaohong Wu and colleagues reported in 2012 pottery sherds from layers dated by radiocarbon to about 20,000 to 19,000 years ago, the oldest known vessels, made by hunter-gatherers at the height of the last glaciation. Pottery of comparable age is known from Yuchanyan in Hunan, and slightly younger pottery from the Russian Far East and from Japan, where the Jōmon tradition began about 16,500 years ago. These pots were used for cooking, probably for rendering fat and boiling fish and plant foods. They show that ceramics were invented by foragers long before farming, contradicting the older assumption that pottery and agriculture arrived together.

The technological legacy runs in two directions. Fired clay vessels allowed foods to be boiled, stored and fermented, which later underpinned sedentary life. And the experience of controlling high temperature in a kiln is the direct ancestor of firing bricks, glazing, glassmaking and, most consequentially, smelting metal from ore.`,
    mechanism: `Clay consists of tiny platelets of hydrated aluminum silicate minerals that slide over one another when wet, which is why it can be shaped. Drying removes the free water and leaves the object fragile. When the clay is heated past about 450 to 600 degrees Celsius, chemically bound water is driven out of the mineral lattice and the platelets begin to bond at their contact points, a change that cannot be reversed by adding water. At Dolní Věstonice the loess used contained little true clay and much silt, so it was fired at relatively low temperature in hearths or shallow pit kilns. Vessels at Xianrendong were coarse, thick-walled and tempered with sand, built by hand and fired in open fires at similar temperatures. Higher temperatures, above 900 degrees, cause partial melting and produce the denser wares of the Neolithic.`,
    prerequisites: ['controlled-fire', 'ochre-symbolic-behavior'],
    consequences: ['pottery', 'mud-brick', 'copper-smelting'],
    figures: [
      { name: 'Gravettian Homo sapiens of Moravia', role: 'Makers of the earliest fired clay figurines' },
      { name: 'Karel Absolon', role: 'Excavated Dolní Věstonice in the 1920s and recovered the Venus figurine' },
      { name: 'Pamela B. Vandiver and Olga Soffer', role: 'Applied ceramic science to the Moravian figurines and established firing conditions' },
      { name: 'Xiaohong Wu', role: 'Led the dating of the Xianrendong pottery to 20,000 years' },
    ],
    significance: 8,
    significanceJustification: 'Fired clay is the first synthetic material and the first controlled high-temperature process, ancestor of pottery, brick, glass and metallurgy. Its invention by hunter-gatherers separates ceramics from the origin of farming.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Pamela B. Vandiver, Olga Soffer, Bohuslav Klíma and Jiří Svoboda', title: 'The origins of ceramic technology at Dolní Věstonice, Czechoslovakia', publisher: 'Science', year: 1989, url: 'https://doi.org/10.1126/science.246.4933.1002' },
      { author: 'Xiaohong Wu and others', title: 'Early pottery at 20,000 years ago in Xianrendong Cave, China', publisher: 'Science', year: 2012, url: 'https://doi.org/10.1126/science.1218643' },
      { author: 'Jiří Svoboda (editor)', title: 'Pavlov I Southeast: A Window into the Gravettian Lifestyles', publisher: 'Academy of Sciences of the Czech Republic, Institute of Archaeology at Brno', year: 2005 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'oil-lamp',
    epochId: 'paleolithic',
    date: { year: -15000, precision: 'estimated', display: 'c. 15,000 BCE' },
    location: 'Lascaux and the Dordogne caves, southwestern France',
    title: 'Stone oil lamp: portable artificial light',
    summary: 'Shallow stone lamps burning animal fat with a wick of juniper or moss, found in numbers at Lascaux and other Magdalenian sites, gave Paleolithic people portable, controllable light and made the deep painted caves reachable.',
    explanation: `Fire gives light, but a hearth is fixed, smoky and heavy on fuel. A lamp separates light from heat, makes it portable, and lets a small quantity of fat burn for hours. It is the first lighting technology and the ancestor of every lamp until the electric bulb.

The evidence comes almost entirely from the caves of southwestern France and northern Spain. Sophie de Beaune catalogued the known Paleolithic lamps in 1987 and found several hundred objects, most from Magdalenian sites between about 17,000 and 12,000 years ago. The best known is a red sandstone lamp from Lascaux, about 22 centimeters long, carefully shaped with a handle and a shallow bowl, found on the floor of the Shaft below a painting of a bison and a bird-headed man. Its bowl held blackened residue that was identified as burned juniper, the remains of a wick. Other lamps are unworked limestone slabs with a natural hollow, and some show heat-reddened stone and soot around the depression. Chemical analysis of residues from several lamps identified animal fat, probably from deer, horse or bovid, sometimes with plant matter as a wick.

The dating of the invention is uncertain. A few candidate lamps have been reported from Aurignacian and Gravettian layers, which would place the technology 35,000 or more years ago, and torches, which leave charcoal smears on cave walls, were certainly used from the beginning of cave painting. But the great majority of unambiguous lamps are Magdalenian, and it is in this period that they become standardized objects, made in series from selected stone. This entry is dated to the Magdalenian for that reason, with medium confidence about when the first lamp was made.

Lamps matter for what they allowed. Lascaux is decorated over more than 200 meters of passage, some of it well beyond daylight, and the paintings could not have been made or seen without portable light. Experiments by Ma Ángeles Medina-Alcaide and colleagues in 2021 compared replica lamps, torches and fixed hearths in a cave and found that a fat lamp burns for over an hour with a small, steady, low-smoke flame, ideal for close work such as painting or engraving, while torches give brighter but briefer light for moving through passages. The two were used in combination.

More broadly, the lamp extended the working day and the usable space of the human world into darkness. In cold-climate winters with long nights, sewing, tool making and story telling by lamplight were possible in tents and huts. The same design, a fat reservoir and a wick, was later made in fired clay across the Near East and became one of the commonest artifacts of antiquity.`,
    mechanism: `A fat lamp works by capillary action. The wick, a twist of juniper bark, moss, lichen or plant fiber, lies in the bowl with one end resting against the rim. Heat from the flame melts the fat around the base of the wick; liquid fat rises through the wick's fibers and vaporizes at the tip, where it burns. The fat does not burn directly, which is why the flame is small and stable and the reservoir lasts for an hour or more. Animal fat, especially rendered marrow or suet, has a high energy density and melts at a temperature the flame easily maintains. The stone bowl must be shallow enough to expose the wick and thick enough not to crack from heat; sandstone and limestone were both used. Soot and reddening on surviving lamps record where the flame sat.`,
    prerequisites: ['controlled-fire', 'cave-art-information-storage'],
    consequences: ['pottery', 'glass'],
    figures: [
      { name: 'Magdalenian Homo sapiens', role: 'Makers of the standardized stone lamps of southwestern France' },
      { name: 'Sophie A. de Beaune', role: 'Catalogued and classified the Paleolithic lamps of Europe' },
      { name: 'Ma Ángeles Medina-Alcaide', role: 'Led the 2021 experimental study of Paleolithic lighting systems in caves' },
    ],
    significance: 6,
    significanceJustification: 'The lamp is the first technology to separate light from heat and make it portable, extending human activity into night and darkness. It made the painted caves possible and its design persisted essentially unchanged for 15,000 years.',
    domains: ['energy'],
    sources: [
      { author: 'Sophie A. de Beaune', title: 'Palaeolithic lamps and their specialization: a hypothesis', publisher: 'Current Anthropology', year: 1987, url: 'https://doi.org/10.1086/203570' },
      { author: 'Sophie A. de Beaune and Randall White', title: 'Ice Age lamps', publisher: 'Scientific American', year: 1993 },
      { author: 'Ma Ángeles Medina-Alcaide and others', title: 'The conquest of the dark spaces: an experimental approach to lighting systems in Paleolithic caves', publisher: 'PLOS ONE', year: 2021, url: 'https://doi.org/10.1371/journal.pone.0250497' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'dog-domestication',
    epochId: 'paleolithic',
    date: { year: -13000, precision: 'estimated', display: 'c. 15,000 years ago (c. 13,000 BCE)' },
    location: 'Bonn-Oberkassel, Germany, with the ancestral population somewhere in Eurasia',
    title: 'Domestication of the dog',
    summary: 'Wolves became dogs among Ice Age hunter-gatherers in Eurasia; the earliest unambiguous dog, buried with two people at Bonn-Oberkassel about 14,200 years ago, and ancient genomes place the split from wolves between 40,000 and 15,000 years ago, before any plant or other animal was domesticated.',
    explanation: `The dog is the only animal domesticated before agriculture and the first species whose biology humans deliberately, if unknowingly, reshaped. The process began with wolves. Some population of gray wolves in Eurasia came to live alongside human hunting groups, perhaps drawn by carcass waste at camps, and over generations the tamest animals bred among themselves and diverged from wild wolves in behavior, then in skull shape, tooth size and coat.

The clearest early dog is from Bonn-Oberkassel near Bonn in Germany, where quarry workers in 1914 found a double human burial with the remains of a canid. Reanalysis by Luc Janssens and colleagues in 2018 dated the grave to about 14,200 years ago and showed that the animal was a juvenile dog that had survived several bouts of canine distemper, which is fatal without intensive care, meaning that the people who buried it had nursed it for weeks. It is both the oldest undisputed dog and the oldest evidence of a bond that went beyond utility. Dog remains of similar age are known from Israel, where a puppy was buried with a person at Ein Mallaha about 12,000 years ago, and from Siberia and the Near East.

Older claims are harder to judge. Skulls from Goyet in Belgium at about 36,000 years and Razboinichya in the Altai at about 33,000 years have been described as early dogs on the basis of short snouts and broad palates, but other researchers see them as variant wolves, and the genomic evidence does not clearly support a lineage that old. Ancient DNA studies led by Laurent Frantz, Anders Bergström, Greger Larson and colleagues indicate that all modern dogs descend from a single now-extinct wolf population, that the dog lineage had separated from wolves by about 15,000 years ago and possibly by 40,000, and that dogs had already split into several regional lineages by 11,000 years ago, which implies that domestication happened well before that. Where it happened is unresolved; Siberia, East Asia and Europe have all been proposed.

The consequences were practical and profound. Dogs track by scent, hold prey at bay, warn of danger, pull loads and clean camps, all of which improved the return on hunting and the safety of sleeping in the open. Angela Perri and colleagues have shown that dogs accompanied the first people into the Americas. The relationship also established a template: a wild species brought into the human group, bred for useful traits and remade by selection. Sheep, goats, cattle and pigs would follow the same road within a few thousand years, and the dog was the proof that it could be walked.`,
    mechanism: `Domestication is selection applied to behavior. Wolves that tolerated human proximity gained access to food waste around camps; those that showed aggression were killed or driven off. Because tameness in canids is heritable and is linked developmentally to changes in adrenal function, the same selection also produced, as a by-product, shorter muzzles, smaller teeth, floppy ears, curled tails and coat variation, the suite seen in Belyaev's twentieth-century fox breeding experiment. Once tame animals bred mainly with one another, the population diverged genetically from wild wolves. Genomic studies detect this as a set of dog-specific variants in genes affecting starch digestion, brain development and behavior. Humans then bred from the individuals that were most useful in hunting, guarding or hauling, and later isolated regional populations into the ancestors of breeds.`,
    prerequisites: ['controlled-fire', 'bow-and-arrow'],
    consequences: ['animal-domestication', 'fertile-crescent-agriculture'],
    figures: [
      { name: 'Late Upper Paleolithic Homo sapiens of Eurasia', role: 'The hunter-gatherer groups among whom wolves became dogs' },
      { name: 'Luc A. A. Janssens', role: 'Led the 2018 reanalysis of the Bonn-Oberkassel dog' },
      { name: 'Greger Larson', role: 'Leads ancient-genome research on the origin of dogs' },
      { name: 'Angela R. Perri', role: 'Established the joint dispersal of dogs and people into the Americas' },
    ],
    significance: 8,
    significanceJustification: 'The dog was the first domesticated species and the first partner in human labor, and it proved the method later applied to livestock and crops. It also marks the first deliberate shaping of another organism, the root of applied biology.',
    domains: ['biology-medicine', 'agriculture'],
    sources: [
      { author: 'Luc Janssens and others', title: 'A new look at an old dog: Bonn-Oberkassel reconsidered', publisher: 'Journal of Archaeological Science', year: 2018, url: 'https://doi.org/10.1016/j.jas.2018.01.004' },
      { author: 'Anders Bergström and others', title: 'Origins and genetic legacy of prehistoric dogs', publisher: 'Science', year: 2020, url: 'https://doi.org/10.1126/science.aba9572' },
      { author: 'Angela R. Perri and others', title: 'Dog domestication and the dual dispersal of people and dogs into the Americas', publisher: 'Proceedings of the National Academy of Sciences', year: 2021, url: 'https://doi.org/10.1073/pnas.2010083118' },
      { author: 'Laurent A. F. Frantz and others', title: 'Genomic and archaeological evidence suggest a dual origin of domestic dogs', publisher: 'Science', year: 2016, url: 'https://doi.org/10.1126/science.aaf3161' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
];
