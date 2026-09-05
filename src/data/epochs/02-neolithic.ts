import type { Epoch, TechEventInput } from '../schema';

export const epoch: Epoch = {
  id: 'neolithic',
  index: 2,
  name: 'Neolithic revolution',
  code: 'NEOLITHIC',
  startYear: -12000,
  endYear: -3500,
  span: '12,000 to 3500 BCE',
  thesis: `The Neolithic is the epoch in which humans stopped moving to food and started making food come to them. Between roughly 12,000 and 3500 BCE, in at least six regions that had no contact with one another, foragers began to plant, tend, select and store the plants they had previously gathered, and in Eurasia and the Andes they took herd animals under their control as well. The change was slow and rarely deliberate: it took two to three thousand years for wild cereals in the Fertile Crescent to become morphologically domestic, and the people who began the process could not have imagined its end. Yet the consequences were total. Farming allowed, and then required, permanent settlement. Settlement made heavy and durable things worthwhile: mud-brick houses, kilns, looms, granaries, stone monuments. Stored surplus made larger populations possible and made property, inheritance and inequality thinkable. By the end of the epoch the toolkit of settled life was complete in western Asia: irrigated fields, the ox-drawn ard, the wheel, smelted copper and the clay accounting tokens from which writing would shortly grow. The Neolithic did not make people healthier or freer. It made them numerous, rooted and accumulative, and it set the terms on which every later technological epoch was built.`,
  enablingConditions: [
    'The end of the last glacial period and the stabilizing of the Holocene climate after about 9600 BCE gave farmers predictable seasons for the first time in a hundred thousand years.',
    'Dense stands of wild cereals and pulses in the Fertile Crescent, wild rice and millets in China, and wild squash, teosinte and tubers in the Americas offered plants whose seeds could be stored for months.',
    'Late Paleolithic foragers already possessed grinding stones, sickle blades, storage pits, fire, ceramics and the dog, so the physical toolkit of early farming preceded farming itself.',
    'Rising population densities in resource-rich zones, especially the Levant, made the returns to intensifying plant care higher than the returns to walking further.',
    'Behaviorally modern humans could transmit cumulative practical knowledge across generations, so that small improvements in seed selection, planting and storage compounded over centuries.',
  ],
  constraintsRemoved: [
    'Food supply was no longer limited to what could be gathered within a day of a camp, because cultivated fields concentrated calories in a fixed place.',
    'Possessions were no longer limited to what could be carried, so heavy, fragile and slowly built things became worthwhile.',
    'Group size was no longer capped by the carrying capacity of a foraging range, allowing villages of hundreds and then thousands.',
    'Mechanical work was no longer limited to human muscle once cattle were harnessed to the ard, the sledge and eventually the wheeled cart.',
    'Memory was no longer the only store of economic information once clay tokens and marks began to record quantities outside the head.',
  ],
  secondOrderConsequences: [
    'Population grew several fold, producing the Neolithic Demographic Transition, while individual health declined through shorter stature, dental disease and new zoonotic infections from close contact with livestock.',
    'Land, herds and stored grain became heritable property, which created durable inequality between households and the first institutions for defending and adjudicating claims.',
    'Sedentary life and surplus supported specialists: potters, weavers, smiths, builders and ritual leaders whose work did not directly produce food.',
    'Farming populations expanded demographically and geographically, carrying crops, livestock, languages and genes across Europe, Africa and Asia and displacing or absorbing forager populations.',
    'Managing water, land and surplus at village scale generated the administrative problems that accounting, measurement and eventually writing were invented to solve.',
  ],
  transition: `The Neolithic ended not when farming stopped spreading but when its administrative and metallurgical byproducts crossed a threshold. In southern Mesopotamia the combination of irrigation on the alluvium, the ox-drawn ard and wheeled transport produced surpluses large enough to feed cities. Uruk grew past the point where face-to-face memory could track who owed what to the temple, and the clay tokens and sealed bullae of the late fifth and fourth millennia were pressed into tablets and then incised into cuneiform signs. At the same time smiths who had been reducing copper ores in kilns for more than a millennium discovered that alloying copper with arsenic and then tin gave a harder, more castable metal. Bronze tools, wheeled vehicles, sailing boats and writing together define the Bronze Age, but all four were assembled from pieces the Neolithic had already made. The transition is a matter of scale and combination rather than invention.`,
  humanExperience: `For a person born into a Neolithic village the most obvious fact of life was the house. Where your ancestors had slept under skins in a different place each season, you were raised inside mud walls that your family had built and would repair, on the same spot where earlier generations had lived and were sometimes buried under the floor. Your world was smaller and more crowded. You knew every person in a settlement of a few hundred, and most of them were kin. Your work was seasonal and repetitive: breaking ground, sowing, weeding, harvesting with a flint sickle, threshing, grinding grain on a saddle quern for several hours every day, carrying water, minding sheep and goats. Studies of Neolithic skeletons show worn knees and toes from kneeling at the quern, tooth decay from a starchy diet, and shorter stature than the foragers who came before.

You ate more predictably and less variously. A bad harvest was now a catastrophe rather than a reason to move on, and everyone understood that the granary was the difference between surviving winter and not. Illnesses that had never troubled small mobile bands, passed from cattle, pigs and stored grain and its rodents, became familiar. But you also owned things: pots, woven cloth, polished stone axes, ornaments, perhaps a share in a herd. Your status depended on what your household controlled, and your children would inherit it. You lived among monuments, painted walls and shrines that told you where you belonged. The horizon of your life was narrower than a forager's, but it was also deeper, tied to a particular place and a story about it that stretched back further than anyone could remember.`,
  minEvents: 14,
  sources: [
    { author: 'Graeme Barker', title: 'The Agricultural Revolution in Prehistory: Why Did Foragers Become Farmers?', publisher: 'Oxford University Press', year: 2006 },
    { author: 'Peter Bellwood', title: 'First Farmers: The Origins of Agricultural Societies', publisher: 'Blackwell', year: 2005 },
    { author: 'V. Gordon Childe', title: 'Man Makes Himself', publisher: 'Watts and Co.', year: 1936 },
    { author: 'Jean-Pierre Bocquet-Appel', title: 'When the World\'s Population Took Off: The Springboard of the Neolithic Demographic Transition', publisher: 'Science', year: 2011, url: 'https://doi.org/10.1126/science.1208880' },
    { author: 'Greger Larson and others', title: 'Current perspectives and the future of domestication studies', publisher: 'Proceedings of the National Academy of Sciences', year: 2014, url: 'https://doi.org/10.1073/pnas.1323964111' },
    { author: 'James C. Scott', title: 'Against the Grain: A Deep History of the Earliest States', publisher: 'Yale University Press', year: 2017 },
  ],
  lastReviewed: '2026-09-04',
};

export const events: TechEventInput[] = [
  {
    id: 'gobekli-tepe',
    epochId: 'neolithic',
    date: { year: -9500, precision: 'century', display: 'c. 9500 BCE' },
    location: 'Göbekli Tepe, Şanlıurfa province, southeastern Turkey',
    title: 'Göbekli Tepe: monumental stone enclosures built by foragers',
    summary: 'Hunter-gatherers on a limestone ridge in southeastern Anatolia quarried, carved and raised T-shaped limestone pillars weighing up to ten tons into circular enclosures, more than a millennium before farming villages existed nearby.',
    explanation: `Göbekli Tepe sits on a ridge overlooking the Harran plain. From 1995 until his death in 2014 Klaus Schmidt of the German Archaeological Institute excavated a series of circular and oval enclosures, each ringed by T-shaped limestone pillars up to 5.5 meters tall, with two larger pillars standing at the centre. The pillars are carved in relief with foxes, boars, snakes, scorpions, cranes, aurochs and, on the central pillars, arms, hands and belts that make it clear the T shape represents a stylized human body. Radiocarbon dates on organic material in the wall plaster and fill place the earliest enclosures in the second half of the tenth millennium BCE, within the Pre-Pottery Neolithic A, and show that building continued into the ninth millennium.

What makes the site extraordinary is who built it. The surrounding region was inhabited by hunter-gatherers. The bone assemblage is dominated by wild gazelle, aurochs and boar; the plant remains are wild cereals and almonds; there are no domesticated animals or morphologically domestic crops in the earliest levels. Yet the builders quarried monoliths from bedrock with flint tools, moved them several hundred meters, dressed them, and raised them into sockets. Schmidt estimated that the largest pillars required several hundred people to move. The site therefore overturned the older assumption that monumental architecture required a farming surplus and an elite to command it.

Schmidt's own interpretation went further. He argued that Göbekli Tepe was a regional sanctuary, that feasting to attract the labour force required large quantities of wild grain, and that the effort of provisioning gatherings might have been one of the pressures that pushed local communities toward cultivation. Genetic studies have located the wild progenitor of domestic einkorn wheat in the nearby Karacadağ hills. That causal link remains a hypothesis rather than a finding. Later work by the current excavation team, led by Lee Clare, has found cisterns, domestic-looking buildings and evidence of year-round occupation, suggesting that the site was a settlement with monumental buildings rather than a temple visited by pilgrims. The discovery of the closely related and partly earlier site of Karahan Tepe, and of a dozen other sites with T-pillars across the Şanlıurfa region, shows that Göbekli Tepe was one expression of a widespread regional tradition rather than an isolated marvel.

For the history of technology the site matters on three counts. It shows that the organisation of hundreds of people around a shared building project, the planning of a construction sequence, and the craft of quarrying and shaping large stone were all available to foragers at the very threshold of the Holocene. It provides the earliest secure evidence of load-bearing monumental stonework anywhere. And it documents an intensity of symbolic and ritual investment that, whatever its exact relationship to farming, shaped the world in which the first Levantine and Anatolian farmers lived.`,
    mechanism: `The pillars were cut from the limestone bedrock plateau beside the enclosures. Workers pecked channels around a planned block with flint picks and hammerstones, undercut it, and levered it free, a process that left several unfinished pillars in the quarry, including one 7 meters long. The blocks were probably dragged on timber sleds or rollers with ropes of plant fibre, then tipped into sockets cut into the floor and packed with rubble. Relief carving was done by grinding away the background around the animal figures with stone abraders. The enclosure walls were dry-stone masonry with the pillars set into them at intervals, and at least some enclosures were later deliberately filled with debris, which is why they survived so well. There is no evidence for metal tools, draught animals or the wheel; the work was accomplished with stone, fibre, timber and organised human muscle.`,
    prerequisites: ['composite-tools', 'cave-art-information-storage', 'ochre-symbolic-behavior'],
    consequences: ['megalithic-construction', 'fertile-crescent-agriculture'],
    figures: [
      { name: 'Pre-Pottery Neolithic communities of the Şanlıurfa region', role: 'Quarried, carved and raised the pillars' },
      { name: 'Klaus Schmidt', role: 'Directed excavation from 1995 to 2014 and established the site\'s date and character' },
      { name: 'Lee Clare', role: 'Current excavation director whose team documented domestic occupation and water management at the site' },
    ],
    significance: 7,
    significanceJustification: 'Göbekli Tepe is the earliest known monumental architecture and demonstrates that large-scale cooperative construction preceded farming rather than following it. Its influence on the origin of agriculture is debated, but its demonstration of forager organisational capacity is not.',
    domains: ['materials', 'information'],
    sources: [
      { author: 'Klaus Schmidt', title: 'Göbekli Tepe, the Stone Age Sanctuaries: New results of ongoing excavations with a special focus on sculptures and high reliefs', publisher: 'Documenta Praehistorica', year: 2010, url: 'https://doi.org/10.4312/dp.37.21' },
      { author: 'Oliver Dietrich, Manfred Heun, Jens Notroff, Klaus Schmidt and Martin Zarnkow', title: 'The role of cult and feasting in the emergence of Neolithic communities: New evidence from Göbekli Tepe, south-eastern Turkey', publisher: 'Antiquity', year: 2012, url: 'https://doi.org/10.1017/S0003598X00047840' },
      { author: 'Klaus Schmidt', title: 'Göbekli Tepe: A Stone Age Sanctuary in South-Eastern Anatolia', publisher: 'ex oriente', year: 2012 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'fertile-crescent-agriculture',
    epochId: 'neolithic',
    date: { year: -9000, precision: 'millennium', display: 'c. 9500 to 8500 BCE' },
    location: 'The Levant, northern Syria, southeastern Anatolia and the Zagros foothills',
    title: 'Cereal and pulse domestication in the Fertile Crescent',
    summary: 'Communities across the Fertile Crescent moved from harvesting wild einkorn, emmer, barley, lentil, pea and chickpea to sowing and selecting them, producing the first domesticated crops and the founder package of Western Eurasian farming.',
    explanation: `The Fertile Crescent is the arc of hill country running from the southern Levant north through Syria and southeastern Turkey and southeast along the Zagros mountains. In the terminal Pleistocene its oak and pistachio woodlands supported dense stands of wild wheat, barley and legumes, and the Natufian foragers who lived there from about 12,500 BCE built stone-founded houses, ground grain on querns and harvested it with flint sickle blades set in bone hafts. When the Younger Dryas cold snap (roughly 10,800 to 9600 BCE) reduced wild stands, some communities appear to have responded by tending them. Charred rye and wheat from Abu Hureyra on the Euphrates have been argued to show cultivation as early as 11,000 BCE, though that claim remains contested.

The secure evidence begins in the Pre-Pottery Neolithic A, after 9600 BCE. At sites such as Netiv Hagdud and Gilgal in the Jordan valley, Tell Aswad near Damascus, Jerf el Ahmar and Mureybet on the Euphrates and Çayönü in Anatolia, people were sowing wild-type cereals in quantity, storing them in purpose-built granaries and living year round in villages of dozens of houses. Domestication in the botanical sense, meaning a plant that depends on humans to reproduce, is visible in the seed itself. A wild cereal ear shatters when ripe so that grains scatter; a mutant with a tough rachis holds its grains until harvested. Sickle harvesting unconsciously favours the tough-rachis mutant, and the proportion of non-shattering spikelet bases in archaeological assemblages rises slowly from a few percent around 9500 BCE to a majority by about 8500 to 8000 BCE. Grains also became larger. George Willcox, Dorian Fuller and Melinda Zeder have shown from this trend that domestication was a protracted process spanning two thousand years and occurring in parallel at several places across the arc rather than at one core.

The founder package, eight species identified by Daniel Zohary, consisted of einkorn and emmer wheat, barley, lentil, pea, chickpea, bitter vetch and flax. Genetic work traces domestic einkorn to wild populations in the Karacadağ mountains and emmer to the same region, while barley shows multiple origins including the southern Levant. Sheep, goats, cattle and pigs were domesticated in the same region in the same centuries, giving the Near East a uniquely complete package of grain, pulse, fibre and livestock.

The consequences were self-reinforcing. Cultivated fields tied people to a place, larger stores permitted larger villages, and larger villages needed more fields. By 7000 BCE Pre-Pottery Neolithic B settlements such as 'Ain Ghazal and Çatalhöyük held thousands of people. From about 6500 BCE the package spread westward into Greece and the Balkans and eastward toward the Indus, carried mainly by migrating farmers whose genetic signature can be traced across Europe. Nearly every later Eurasian technology in this atlas, from pottery to writing to the plough, was developed by communities living on this agricultural base.`,
    mechanism: `Early cultivation required no new tools, only new behaviour. Farmers cleared a patch by burning or with polished stone axes, broke the soil with digging sticks or stone-bladed hoes, and broadcast seed that had been kept back from the previous harvest. Harvesting with a sickle rather than beating grain into a basket selected for ears that held their seed. Storing seed and resowing it the next year fixed that selection, because only harvested seed was replanted. Over centuries this raised the frequency of tough-rachis, large-grained and uniformly germinating variants until the crop population could no longer reproduce without human help. Legumes were similarly selected for pods that did not burst and seeds that lacked dormancy. Grain was stored in raised mud granaries and processed on saddle querns, and the resulting flour was cooked as flatbread or porridge.`,
    prerequisites: ['composite-tools', 'controlled-fire', 'gobekli-tepe'],
    consequences: ['animal-domestication', 'mud-brick', 'pottery', 'irrigation', 'plough', 'proto-writing-tokens'],
    figures: [
      { name: 'Pre-Pottery Neolithic communities of the Levant and upper Euphrates', role: 'Cultivated and selected the founder crops' },
      { name: 'Daniel Zohary and Maria Hopf', role: 'Identified the founder crop package and its wild progenitors' },
      { name: 'George Willcox, Dorian Fuller and Melinda Zeder', role: 'Established the protracted, multi-centred model of domestication from archaeobotanical evidence' },
    ],
    significance: 10,
    significanceJustification: 'This is the origin of the crop package on which Western Eurasian, North African and eventually much of world agriculture was built, and the earliest well-documented transition from foraging to farming anywhere. Almost every subsequent technology in the Old World rests on the surplus it created.',
    domains: ['agriculture', 'biology-medicine'],
    sources: [
      { author: 'Melinda A. Zeder', title: 'The Origins of Agriculture in the Near East', publisher: 'Current Anthropology', year: 2011, url: 'https://doi.org/10.1086/659307' },
      { author: 'Dorian Q. Fuller, George Willcox and Robin G. Allaby', title: 'Cultivation and domestication had multiple origins: arguments against the core area hypothesis for the origins of agriculture in the Near East', publisher: 'World Archaeology', year: 2011, url: 'https://doi.org/10.1080/00438243.2011.624747' },
      { author: 'Daniel Zohary, Maria Hopf and Ehud Weiss', title: 'Domestication of Plants in the Old World', publisher: 'Oxford University Press', year: 2012 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'animal-domestication',
    epochId: 'neolithic',
    date: { year: -8500, precision: 'millennium', display: 'c. 8500 BCE' },
    location: 'Zagros and Taurus mountains, upper Euphrates and central Anatolia',
    title: 'Domestication of sheep, goat, cattle and pig',
    summary: 'Within a thousand years of the first crops, communities in the northern Fertile Crescent brought goats, sheep, pigs and cattle under human control, creating the livestock that would supply meat, milk, wool, hides, dung and traction to Eurasian farming.',
    explanation: `The dog had been a human companion since the Paleolithic, but it was a hunting partner rather than a food source. The four livestock species that transformed Old World economies were all domesticated in the northern Fertile Crescent in the centuries around 8500 BCE. Goats appear first, in the Zagros: at Ganj Dareh in western Iran, Melinda Zeder showed from the sex and age profile of the bones that people were culling young males and keeping females to breed by about 8000 BCE, a herd-management pattern impossible for hunters. Sheep were domesticated slightly later in the Taurus foothills and eastern Anatolia. Cattle, descended from the enormous and dangerous aurochs, were domesticated in the upper Euphrates region around Çayönü and Dja'de around 8500 BCE; ancient DNA suggests the domestic lineage passed through a remarkably small founder population, perhaps as few as eighty females. Pigs were domesticated in southeastern Anatolia at about the same time, and separately in China.

The evidence for domestication comes from several converging lines. Culling profiles reveal management. Reduction in body size is visible in bone measurements, although it lags the behavioural change. Animals appear outside their wild range, as when goats reach Cyprus by 8500 BCE, having necessarily been carried there in boats. Ancient and modern DNA identify wild progenitor populations and show that domestic goats, for instance, drew on several wild lineages across the region. Jean-Denis Vigne and Zeder have argued from this that animal domestication was, like plant domestication, a dispersed and gradual process in which hunting shaded into protective management and then into breeding.

The immediate reward was reliable meat without the risk of the hunt. The larger prize, which Andrew Sherratt in 1981 called the secondary products revolution, came later: milk, wool and animal traction. Lipid residues on pottery show that milk was being processed in northwestern Anatolia by the seventh millennium BCE, well before adult lactase persistence was common, which implies fermentation into yogurt or cheese. Wool sheep, whose fleece could be shorn rather than plucked, were bred by the fourth millennium. Cattle were harnessed to the ard and sledge by the same period, multiplying the area a household could cultivate.

The costs were considerable. Living with livestock brought a series of new diseases to humans, including measles and tuberculosis lineages, and animal dung and stored grain attracted vermin. Herds also became the first major form of mobile wealth, easily counted, raided and inherited, and pastoral specialisation gave rise to a distinct way of life on the steppes and deserts beyond the farmed zone. Together with crops, livestock formed the package that farming migrants carried into Europe, the Indian subcontinent and North Africa over the following millennia.`,
    mechanism: `Domestication worked by controlling reproduction. Herders confined animals, often in pens attached to houses or in caves, and chose which would breed. Young males, surplus to breeding needs, were slaughtered early for meat, while females were retained for their offspring and, later, their milk. Over generations this selected for animals that tolerated confinement and human handling, reached maturity quickly and were smaller and less aggressive than their wild ancestors; horn shape, coat colour and, in sheep, fleece type changed as a side effect. Feeding animals on stubble, fallow and crop waste integrated them into the arable cycle, and their dung returned fertility to the fields. Cattle traction depended on castrating bulls to produce docile oxen and on yokes fixed to the horns or withers.`,
    prerequisites: ['dog-domestication', 'fertile-crescent-agriculture'],
    consequences: ['plough', 'weaving-loom', 'wheel', 'chariot', 'three-field-rotation'],
    figures: [
      { name: 'Early Neolithic herders of the Zagros, Taurus and upper Euphrates', role: 'Managed and bred the first goat, sheep, cattle and pig herds' },
      { name: 'Melinda A. Zeder', role: 'Demonstrated herd management from culling profiles at Ganj Dareh' },
      { name: 'Jean-Denis Vigne', role: 'Established the early transport of livestock to Cyprus and the gradual model of domestication' },
    ],
    significance: 9,
    significanceJustification: 'Livestock supplied Eurasian societies with protein, fibre, fertiliser and, crucially, muscle power beyond the human body. The traction, wool and dairy economies that followed were as consequential as crop farming itself.',
    domains: ['agriculture', 'biology-medicine', 'energy'],
    sources: [
      { author: 'Melinda A. Zeder', title: 'Domestication and early agriculture in the Mediterranean Basin: Origins, diffusion, and impact', publisher: 'Proceedings of the National Academy of Sciences', year: 2008, url: 'https://doi.org/10.1073/pnas.0801317105' },
      { author: 'Jean-Denis Vigne', title: 'The origins of animal domestication and husbandry: A major change in the history of humanity and the biosphere', publisher: 'Comptes Rendus Biologies', year: 2011, url: 'https://doi.org/10.1016/j.crvi.2010.12.009' },
      { author: 'Greger Larson and others', title: 'Current perspectives and the future of domestication studies', publisher: 'Proceedings of the National Academy of Sciences', year: 2014, url: 'https://doi.org/10.1073/pnas.1323964111' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'mud-brick',
    epochId: 'neolithic',
    date: { year: -9000, precision: 'millennium', display: 'c. 9000 BCE' },
    location: 'Jericho and the Jordan valley, spreading across the Levant and Anatolia',
    title: 'Mud brick and the permanent village',
    summary: 'Early Neolithic builders in the Jordan valley shaped river mud, chaff and water into sun-dried bricks, giving settled communities a cheap, repairable and endlessly available material for houses, walls and towers.',
    explanation: `The house is the first machine of settled life, and the Neolithic house was made of earth. Natufian foragers of the Levant had built round huts with stone footings and brushwood superstructures. In the Pre-Pottery Neolithic A, from about 9500 BCE, villagers in the Jordan valley began forming mud into loaf-shaped and then plano-convex bricks, drying them in the sun and laying them in mud mortar. At Netiv Hagdud and Gilgal the bricks are hand-shaped and hog-backed with finger impressions on the top for keying the mortar. At Jericho, where Kathleen Kenyon dug through the great tell between 1952 and 1958, the PPNA settlement of round mud-brick houses was enclosed by a stone wall over three meters thick and a solid stone tower 8.5 meters high with an internal staircase, dated to about 8300 BCE. Whether the wall was for defence, for flood protection or, as Ofer Bar-Yosef argued, for controlling mudflows, it is the earliest known public work in masonry.

By the Pre-Pottery Neolithic B, after 8500 BCE, rectangular multi-roomed houses of mud brick on stone foundations had become standard across the Levant and Anatolia. Floors were plastered with lime, which required burning limestone at around 900 degrees Celsius and was itself an energy-intensive pyrotechnology; walls were plastered and often painted red. Houses were rebuilt on the collapsed remains of their predecessors, and over centuries this produced the tells, the artificial mounds that mark Near Eastern sites to this day. The moulded brick, formed in a wooden frame to a standard size, appears by the seventh millennium in Mesopotamia and made walls straighter and construction faster.

Mud brick suited farming communities precisely. The raw materials, clay-rich soil, water and straw from the threshing floor, were at hand in every alluvial valley, and no specialist was needed. Walls were thick and slow to heat, keeping interiors cool in summer and warm in winter. Damage was easily repaired with more of the same. The main weakness, erosion by rain, was managed with plaster, overhanging roofs and continual maintenance, so that a house was a living thing that its inhabitants renewed each year.

The technology spread with farming and was independently arrived at wherever people settled in dry alluvial land: the earliest adobe in the Americas appears in coastal Peru by the third millennium BCE, and rammed earth was used in Neolithic China. In Mesopotamia mud brick remained the material of temples, palaces and city walls into the Islamic period, and fired brick, which required kilns and fuel, was reserved for facings, drains and the foundations of monumental buildings. The Neolithic house set the pattern of courtyard, storeroom and hearth that organised domestic life for the next nine thousand years.`,
    mechanism: `Builders dug clay-rich alluvium, mixed it with water and chopped straw or chaff, and trod it to a stiff paste. The straw reduced shrinkage cracking as the brick dried and added tensile strength. Early bricks were shaped by hand; later ones were pressed into a rectangular wooden mould, struck level and turned out to dry in the sun for several days, then stacked. Walls were laid in courses on stone foundations that kept rising damp from softening the base, bonded with mud mortar of the same composition, and finished inside and out with mud or lime plaster. Roofs were flat, made of timber beams covered with reeds, brushwood and a thick layer of mud, and were renewed annually. The whole structure could be demolished and its material reused as the core of the next house.`,
    prerequisites: ['fertile-crescent-agriculture', 'controlled-fire'],
    consequences: ['catalhoyuk', 'irrigation', 'indus-sanitation'],
    figures: [
      { name: 'Pre-Pottery Neolithic A villagers of the Jordan valley', role: 'Made the earliest known mud bricks and the Jericho tower' },
      { name: 'Kathleen Kenyon', role: 'Excavated the PPNA wall and tower of Jericho and established their date' },
      { name: 'Ofer Bar-Yosef', role: 'Reinterpreted the Jericho wall as flood and mudflow protection' },
    ],
    significance: 7,
    significanceJustification: 'Mud brick was the material of the first permanent architecture and remained the dominant building material of the Near East for nine millennia. Without a cheap, universally available building material, the village and later the city could not have grown as they did.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Kathleen M. Kenyon', title: 'Digging Up Jericho', publisher: 'Ernest Benn', year: 1957 },
      { author: 'Ofer Bar-Yosef', title: 'The Walls of Jericho: An Alternative Interpretation', publisher: 'Current Anthropology', year: 1986, url: 'https://doi.org/10.1086/203413' },
      { author: 'Ian Kuijt and Nigel Goring-Morris', title: 'Foraging, Farming, and Social Complexity in the Pre-Pottery Neolithic of the Southern Levant: A Review and Synthesis', publisher: 'Journal of World Prehistory', year: 2002, url: 'https://doi.org/10.1023/A:1022973114090' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'dugout-canoe',
    epochId: 'neolithic',
    date: { year: -8000, precision: 'century', display: 'c. 8000 BCE' },
    location: 'Pesse, Drenthe, Netherlands, with later examples in Nigeria, Italy and France',
    title: 'The dugout canoe',
    summary: 'The Pesse canoe, a pine log hollowed with fire and stone adze around 8000 BCE, is the oldest surviving boat; dugouts of the early Holocene gave lakeside and riverine communities their first purpose-built watercraft.',
    explanation: `People had crossed water long before the Holocene: the settlement of Australia by 50,000 years ago and of Cyprus by 9000 BCE required sea crossings, presumably on rafts or skin boats that have not survived. The dugout canoe is the first watercraft for which we have the object itself. In 1955 workmen building a motorway near Pesse in the Dutch province of Drenthe pulled a hollowed Scots pine log about three meters long and 44 centimeters wide from a peat bog. Radiocarbon dates place it between about 8040 and 7510 BCE, in the early Mesolithic. Its function was doubted for years, but a replica built and paddled in 2001 showed that it floats and handles as a one-person canoe in still water, and its shape and tool marks are consistent with later, unambiguous dugouts.

The Pesse boat is not alone. The Dufuna canoe from northeastern Nigeria, an 8.4 meter mahogany dugout found in 1987, dates to around 6000 BCE and is the oldest boat in Africa. At La Marmotta, a Neolithic lakeside village submerged in Lake Bracciano north of Rome, five oak, alder, poplar and beech dugouts of the sixth millennium BCE have been recovered, the largest more than ten meters long, with fittings that suggest outriggers or the pairing of hulls. Dozens of Mesolithic and Neolithic dugouts are known from northern Europe, including a series from Denmark associated with paddles and fish weirs. The technique was evidently widespread by the seventh millennium and was independently used wherever large straight trees grew beside water.

The canoe mattered because water was the cheapest transport surface available to a Neolithic community. A person can paddle several times the load they can carry on land and can move it across a lake or down a river without a road. Fishing from a boat with nets and lines reached waters inaccessible from shore. The spread of farming around the Mediterranean, which reached Italy, southern France and Iberia between 6000 and 5500 BCE, was too fast and too discontinuous to have proceeded overland, and La Marmotta shows that its carriers had seaworthy dugouts. The colonisation of Mediterranean islands and the transport of livestock to Cyprus and Crete require boats capable of carrying animals. In the Americas, where no draught animals were available, the dugout remained the principal cargo vehicle into the modern era.

The dugout also embodies a technique, hollowing a solid with fire and edged tools, that anticipates later carpentry, and it is the ancestor of the expanded and planked hulls from which the sailing ships of the Bronze Age developed.`,
    mechanism: `A builder chose a straight trunk, felled it with a polished stone axe, and removed the bark. The top was flattened and the interior hollowed by lighting controlled fires along the length of the log, scraping away the charred wood with stone adzes and shells, and repeating the cycle; clay packed on the areas that were to remain unburnt protected the sides and ends. Fire made the work far faster than cutting alone and hardened the surface. The hull was thinned to a few centimeters, the bow and stern shaped for cutting and shedding water, and the interior sometimes smoothed with sandstone. In Neolithic examples, transverse ribs were left standing inside the hull for stiffness and holes bored near the gunwale allowed lashing of outriggers or a second hull. The boat was propelled with a single-bladed paddle.`,
    prerequisites: ['composite-tools', 'controlled-fire'],
    consequences: ['sailing-ship'],
    figures: [
      { name: 'Early Mesolithic community at Pesse', role: 'Made the oldest surviving boat' },
      { name: 'Neolithic villagers of La Marmotta', role: 'Built the large Mediterranean dugouts that show early seafaring' },
      { name: 'Seán McGrail', role: 'Maritime archaeologist who synthesised the evidence for early watercraft worldwide' },
    ],
    significance: 6,
    significanceJustification: 'Boats moved people, crops and livestock across seas and along rivers when no other bulk transport existed, and the dugout is the earliest surviving example. It is a step in the lineage that leads to the sailing ship, but the technique was simple and widely reinvented.',
    domains: ['transportation'],
    sources: [
      { author: 'Seán McGrail', title: 'Boats of the World: From the Stone Age to Medieval Times', publisher: 'Oxford University Press', year: 2001 },
      { author: 'Juan F. Gibaja and others', title: 'The first Neolithic boats in the Mediterranean: The settlement of La Marmotta (Anguillara Sabazia, Lazio, Italy)', publisher: 'PLOS ONE', year: 2024, url: 'https://doi.org/10.1371/journal.pone.0299765' },
      { author: 'Peter Breunig', title: 'The 8000-year-old dugout canoe from Dufuna (NE Nigeria)', publisher: 'Aspects of African Archaeology, University of Zimbabwe Publications', year: 1996 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'proto-writing-tokens',
    epochId: 'neolithic',
    date: { year: -7500, precision: 'millennium', display: 'c. 7500 BCE' },
    location: 'Northern Syria, the Zagros and later Mesopotamia',
    title: 'Clay accounting tokens',
    summary: 'Small geometric clay tokens found at early farming sites from about 7500 BCE appear to have counted goods such as grain and animals; by the fourth millennium they were sealed in clay envelopes and impressed on their surfaces, a step toward the first writing.',
    explanation: `Excavators of Neolithic villages across the Near East have long turned up small fired-clay objects: spheres, cones, discs, cylinders, tetrahedrons, sometimes incised or punched, typically one to three centimeters across. They appear at Tell Mureybet and Tell Aswad in Syria and at Ganj Dareh and Tepe Asiab in the Zagros in levels of the eighth millennium BCE, that is, in the same centuries as the first cultivated cereals and managed herds. They occur in their thousands across the region and persist, with growing variety of shape, for five thousand years.

The interpretation of these objects is chiefly the work of Denise Schmandt-Besserat, who catalogued more than eight thousand of them from 116 sites. She argued that each shape stood for a unit of a commodity: a cone for a small measure of grain, a sphere for a larger one, a cylinder for an animal, and so on, and that the tokens were a physical accounting system for a society that had for the first time acquired surpluses to count, store and exchange. Her evidence is strongest at the end of the sequence. At Uruk, Susa and other sites of the later fourth millennium, tokens were enclosed in hollow clay balls, the bullae, whose outer surface was impressed with the tokens inside and marked with cylinder seals. The bulla thus recorded a transaction in a form that could be verified by breaking it open. The next step was to dispense with the tokens and simply impress their shapes on a flat clay tablet; and many of the earliest numerical and commodity signs of the proto-cuneiform tablets from Uruk IV, around 3300 BCE, do resemble token shapes.

The argument is contested. Critics, including Paul Zimansky and Hans Nissen's team, have pointed out that the earliest Neolithic tokens are simple shapes that could have served as game pieces, sling stones, beads or counters of various sorts; that the link between specific Neolithic shapes and specific fourth-millennium signs is uncertain; and that proto-cuneiform sign repertoire, with several hundred signs for goods, offices and places, cannot be derived from a few dozen token types. What is generally accepted is narrower: tokens were used for counting in Mesopotamia from the fifth millennium at least, bullae and impressed tablets are the direct antecedents of numerical notation, and the whole system arose to manage the redistribution of agricultural surplus by temple institutions.

Even in this narrower form the tokens mark something new. They store information about quantities outside the human memory, in a form that can be moved, sealed and audited by a third party. That is the foundational property of every later information technology from cuneiform to the ledger to the database, and it emerged not from the desire to record speech but from the need to keep track of grain.`,
    mechanism: `A token was a lump of clay pinched or rolled into a standard shape and sometimes fired, so that shape encoded category and count was given by the number of tokens. To record a transfer, an accountant assembled the tokens corresponding to the goods, enclosed them in a hollow ball of clay, pressed each token into the still-soft surface so that the contents could be read without opening it, and rolled a cylinder seal across the ball to identify the responsible official. Impressed tablets kept the surface marks and dropped the enclosed tokens, and reed styluses were used to make the round and wedge-shaped impressions that became the numerical signs of proto-cuneiform. The system depended on clay, which was cheap, mouldable and, once dried or fired, durable.`,
    prerequisites: ['cave-art-information-storage', 'fertile-crescent-agriculture'],
    consequences: ['cuneiform', 'standardized-weights', 'mesopotamian-mathematics'],
    figures: [
      { name: 'Neolithic and Chalcolithic communities of Syria, Iran and Mesopotamia', role: 'Made and used the tokens' },
      { name: 'Denise Schmandt-Besserat', role: 'Catalogued the tokens and proposed their role as the origin of writing' },
      { name: 'Hans J. Nissen, Peter Damerow and Robert K. Englund', role: 'Analysed the Uruk archaic texts and the bookkeeping system behind them' },
    ],
    significance: 8,
    significanceJustification: 'Tokens and bullae are the first system for storing quantitative information outside the mind and the direct ancestor of Mesopotamian numeracy and writing. The strength of the Neolithic end of the chain is debated, which limits confidence but not the importance of the fourth-millennium evidence.',
    domains: ['information', 'communication'],
    sources: [
      { author: 'Denise Schmandt-Besserat', title: 'Before Writing, Volume I: From Counting to Cuneiform', publisher: 'University of Texas Press', year: 1992 },
      { author: 'Paul Zimansky', title: 'Review of Before Writing by Denise Schmandt-Besserat', publisher: 'Journal of Field Archaeology', year: 1993, url: 'https://doi.org/10.2307/530112' },
      { author: 'Hans J. Nissen, Peter Damerow and Robert K. Englund', title: 'Archaic Bookkeeping: Early Writing and Techniques of Economic Administration in the Ancient Near East', publisher: 'University of Chicago Press', year: 1993 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'catalhoyuk',
    epochId: 'neolithic',
    date: { year: -7100, precision: 'century', display: 'c. 7100 BCE' },
    location: 'Çatalhöyük, Konya plain, central Anatolia',
    title: 'Çatalhöyük: a town of several thousand farmers',
    summary: 'On the Konya plain a settlement of tightly packed mud-brick houses entered through the roof held perhaps five thousand people for over a thousand years, preserving painted walls, textiles, obsidian tools and one of the richest records of Neolithic domestic life.',
    explanation: `Çatalhöyük is a double mound on the Konya plain, occupied on its eastern mound from about 7100 to 5950 BCE. James Mellaart excavated it between 1961 and 1965 and made it famous for its wall paintings, plastered bull skulls and figurines; Ian Hodder led a second, far more detailed project from 1993 to 2017. The site covers thirteen hectares and, at its height around 6500 BCE, held between three and eight thousand people, making it among the largest settlements of its age anywhere.

Its plan is unlike a later town. There were no streets. Rectangular mud-brick houses were built wall to wall and entered by ladder through a hole in the roof that also served as the smoke vent for the hearth beneath. Movement across the settlement was over the rooftops. Each house held a main room with a raised platform, an oven and a storage room, and the dead, up to sixty in a single building, were buried beneath the floors. Houses were rebuilt on the same footprint repeatedly, and some, which Hodder calls history houses, accumulated unusual numbers of burials, bull horns set in the walls and repainted plaster. The paintings include geometric designs, hunting scenes with wild bulls and a much-discussed image that may be a plan of the settlement beneath an erupting volcano.

The economy rested on emmer, einkorn, bread wheat, barley, peas and lentils, grown on soils that recent geoarchaeology suggests lay some kilometers from the site, and on domestic sheep and goats, supplemented by wild cattle, boar, birds and fish from the surrounding marsh. Cattle were domesticated only late in the sequence. The inhabitants worked obsidian from Cappadocia, 150 kilometers away, in quantity, and traded it; they polished stone, carved wooden vessels, made baskets and mats, wove textiles of flax and wool and, from about 7000 BCE, made pottery. Beads of native copper and traces of lead show the earliest metal use in Anatolia. Lime plaster, renewed on the walls several times a year, was manufactured in large quantities.

Hodder's team found little evidence of social hierarchy. Houses vary only modestly in size and contents, there are no public buildings, storage was within the household, and diet and health were similar across the population. Çatalhöyük thus documents an alternative path from Jericho's wall and tower: a large aggregate society held together by shared ritual practice and household autonomy rather than by central authority. Later in its life the settlement loosened, houses grew larger and more independent, and by the early sixth millennium it had dispersed into smaller villages. The site is a UNESCO World Heritage Site and the best preserved window onto how Neolithic people actually lived.`,
    mechanism: `Houses were built of sun-dried mud bricks laid in mud mortar on foundations of earlier walls, with timber posts supporting a flat roof of beams, reeds and mud. Because houses abutted one another, walls were shared and structurally interdependent, and the roof platform of the whole settlement functioned as its public space. Interiors were coated with fine white lime plaster, obtained by burning marl or limestone in fires and slaking it, and repeatedly refreshed, so that a single wall can preserve a hundred layers. Ovens set beneath the roof entry vented smoke upward. Storage bins held grain and the dead were placed in pits cut through platform floors and resealed with plaster, integrating memory, house and household.`,
    prerequisites: ['mud-brick', 'fertile-crescent-agriculture', 'animal-domestication', 'ochre-symbolic-behavior'],
    consequences: ['pottery', 'weaving-loom', 'copper-smelting'],
    figures: [
      { name: 'The Neolithic community of Çatalhöyük', role: 'Built and lived in the settlement for over a millennium' },
      { name: 'James Mellaart', role: 'Discovered and first excavated the site, 1961 to 1965' },
      { name: 'Ian Hodder', role: 'Directed the Çatalhöyük Research Project, 1993 to 2017, and established its social interpretation' },
    ],
    significance: 6,
    significanceJustification: 'Çatalhöyük is the largest and best-studied early Neolithic settlement and shows that thousands of farmers could live together without streets, elites or public buildings. It is a benchmark for what settled life meant before cities.',
    domains: ['materials', 'agriculture'],
    sources: [
      { author: 'Ian Hodder', title: 'The Leopard\'s Tale: Revealing the Mysteries of Çatalhöyük', publisher: 'Thames and Hudson', year: 2006 },
      { author: 'James Mellaart', title: 'Çatal Hüyük: A Neolithic Town in Anatolia', publisher: 'Thames and Hudson', year: 1967 },
      { author: 'Ian Hodder', title: 'Çatalhöyük: The Leopard Changes Its Spots. A Summary of Recent Work', publisher: 'Anatolian Studies', year: 2014, url: 'https://doi.org/10.1017/S0066154614000027' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'pottery',
    epochId: 'neolithic',
    date: { year: -7000, precision: 'millennium', display: 'c. 7000 BCE' },
    location: 'Northern Syria, Anatolia and Mesopotamia, with independent Neolithic traditions in China, Africa and the Americas',
    title: 'Pottery becomes a household technology',
    summary: 'Ceramic vessels, known from foragers in East Asia since the Ice Age, became a universal household technology of farming villages after about 7000 BCE, enabling storage, boiling, fermentation and the first mass-produced artefact.',
    explanation: `Fired clay vessels are far older than farming. Hunter-gatherers in southern China, Japan and the Russian Far East were making pots by 18,000 to 14,000 BCE, and Saharan foragers made them by 9000 BCE. But in those societies pottery was rare and specialised. What changed in the Neolithic is that pottery became abundant, standardised and indispensable, the first artefact produced in industrial quantities by ordinary households.

In the Near East, the sequence is clear because the first two thousand years of farming, the Pre-Pottery Neolithic, were aceramic; people cooked in pits, stored grain in mud bins and used containers of stone, plaster, basketry and skin. The earliest pottery appears in northern Syria and southeastern Anatolia at sites such as Tell Sabi Abyad, Tell Halula and Mezraa Teleilat around 7000 BCE, in the form of small, thin-walled, mineral-tempered vessels that Olivier Nieuwenhuyse and colleagues have shown were technically accomplished from the start rather than crude. Within a few centuries pottery was everywhere in the region. The Hassuna, Samarra and Halaf cultures of Mesopotamia in the seventh and sixth millennia BCE developed elaborately painted wares, updraught kilns and, at Yarim Tepe, what may be the first potters' workshops. In China, the Peiligang and Cishan cultures of the seventh millennium produced abundant cooking and storage vessels alongside millet farming, and Yangshao painted pottery followed from about 5000 BCE. In Europe the Linear Pottery culture that carried farming across the loess lands after 5500 BCE is named for its ceramics.

Pottery reshaped diet. A pot can be set on a fire, which makes boiling routine; boiling releases starch from grain, detoxifies many plants, softens meat and bone, and produces gruels that can be fed to infants, which may have shortened birth intervals. Lipid residue analysis shows that Anatolian vessels of the seventh millennium held dairy fat, so pots were used for processing milk into storable forms. Sealed jars kept grain from rodents and damp, held water and oil, and allowed the fermentation of beer and wine, both attested chemically by the sixth millennium in Iran and the Caucasus.

Pottery also transformed archaeology and, in a sense, information. Fired clay survives almost indefinitely, its style changes fast, and it is found in enormous quantities, which is why ceramic sequences underpin prehistoric chronology. For the potters themselves, the control of temper, forming and firing temperature was the first systematic pyrotechnology of materials, and the kiln that fired painted Halaf bowls at 1000 degrees Celsius was the same device in which copper ore could be reduced. Pottery is thus a prerequisite for metallurgy as well as for cooking.`,
    mechanism: `Potters dug clay, weathered it, and removed stones, then added temper (sand, crushed shell, grit or chopped plant fibre) to reduce shrinkage and prevent cracking during drying and firing. Vessels were built by pinching, by coiling ropes of clay and smoothing the joins, or by pressing slabs into moulds; the fast potter's wheel did not appear until the fourth millennium. After drying to a leather-hard state the pot was burnished with a pebble or coated with a slip and painted with iron or manganese pigments. Firing in an open bonfire reached 600 to 800 degrees Celsius; enclosed kilns with a separate firebox and perforated floor, known from Mesopotamia by the sixth millennium, reached 1000 degrees and gave the controlled atmosphere needed for reliable colours and harder, less porous ware.`,
    prerequisites: ['early-ceramics', 'controlled-fire', 'fertile-crescent-agriculture', 'yangtze-yellow-river-agriculture'],
    consequences: ['copper-smelting', 'glass', 'standardized-weights'],
    figures: [
      { name: 'Late Neolithic potters of northern Syria and Mesopotamia', role: 'Established the Near Eastern ceramic tradition' },
      { name: 'Olivier Nieuwenhuyse, Peter Akkermans and Johannes van der Plicht', role: 'Established the date and technical quality of the earliest Syrian pottery at Tell Sabi Abyad' },
      { name: 'Prudence M. Rice', role: 'Synthesised the theories and evidence for the origins of pottery' },
    ],
    significance: 8,
    significanceJustification: 'Pottery gave settled societies storage, boiling and fermentation, and its kilns were the pyrotechnological base for metallurgy. It is the most abundant artefact in the archaeological record and the earliest mass-produced good.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Olivier P. Nieuwenhuyse, Peter M. M. G. Akkermans and Johannes van der Plicht', title: 'Not so coarse, nor always plain: the earliest pottery of Syria', publisher: 'Antiquity', year: 2010, url: 'https://doi.org/10.1017/S0003598X0006622X' },
      { author: 'Prudence M. Rice', title: 'On the Origins of Pottery', publisher: 'Journal of Archaeological Method and Theory', year: 1999, url: 'https://doi.org/10.1023/A:1021947001268' },
      { author: 'Peter M. M. G. Akkermans and Glenn M. Schwartz', title: 'The Archaeology of Syria: From Complex Hunter-Gatherers to Early Urban Societies (c. 16,000-300 BC)', publisher: 'Cambridge University Press', year: 2003 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'yangtze-yellow-river-agriculture',
    epochId: 'neolithic',
    date: { year: -7000, precision: 'millennium', display: 'c. 8000 to 6000 BCE' },
    location: 'Lower Yangtze valley and the Yellow River basin, China',
    title: 'Rice and millet domestication in China',
    summary: 'Communities in the lower Yangtze cultivated rice and communities in the Yellow River basin cultivated broomcorn and foxtail millet from around 8000 BCE, establishing the two crops on which East Asian civilisation was built.',
    explanation: `China was the site of two separate domestication processes running in parallel, one in the warm wetlands of the lower Yangtze and one on the loess and river terraces of the north. Rice, Oryza sativa, was taken from wild stands in the Yangtze basin. At Shangshan in Zhejiang, occupied from about 9000 BCE, rice husks were used as pottery temper and phytoliths show the beginnings of selection. At Kuahuqiao, around 6000 BCE, and Tianluoshan, around 5000 BCE, Dorian Fuller and Ling Qin measured the proportion of non-shattering spikelet bases in the rice remains and found it rising from about a quarter to a majority over the sixth and fifth millennia, the same slow morphological trajectory seen in Fertile Crescent wheat. Paddy fields with bunds and irrigation channels are known from Tianluoshan and Caoxieshan by about 4500 BCE, and by the Liangzhu period after 3300 BCE rice supported large stratified societies with walled towns and hydraulic works.

In the north the crops were millets, small drought-tolerant grains suited to the dry loess. Broomcorn millet (Panicum miliaceum) and foxtail millet (Setaria italica) appear as carbonised grains at Cishan in Hebei and Xinglonggou in Inner Mongolia in contexts dated to roughly 6500 to 6000 BCE, with claims from Cishan storage pits going back to 8000 BCE that rest on phytoliths and are debated. Zhao Zhijun's systematic flotation programme across northern China has documented the spread of millet farming through the Peiligang, Cishan and Houli cultures of the seventh millennium and its consolidation in the painted-pottery Yangshao villages of the fifth and fourth millennia. Pigs were domesticated independently in China from local wild boar, probably by 7000 BCE, and the dog was already present; cattle, sheep and goats arrived later from the west. Soybean was cultivated in the north by the third millennium.

The two Chinese systems were technologically distinctive. Rice farming demanded water management on a scale not needed for wheat, and the paddy became a landscape engineered for a single crop. Millet farming supported dense villages such as Jiangzhai and Banpo, laid out around central plazas, with subterranean houses, communal storage and kilns for the fine painted pottery that spread across the Yellow River basin. Both systems produced large sedentary populations, and the demographic expansion of rice and millet farmers south and east is one of the mechanisms proposed for the spread of Sino-Tibetan, Austronesian and Austroasiatic languages, as well as of the Austronesian voyaging cultures that carried rice, pigs and chickens into island Southeast Asia and the Pacific.

The Chinese evidence is important beyond China. It demonstrates that domestication was not a single idea transmitted from one origin but a response to Holocene conditions that arose wherever suitable plants and settled foragers coincided. Rice is now the staple of more than half the world's population.`,
    mechanism: `Yangtze foragers harvested wild rice from seasonally flooded margins, then began to sow it in cleared marsh plots. Harvesting by uprooting or sickle, and resowing harvested seed, selected over centuries for non-shattering panicles, larger grains and reduced dormancy. Bunded paddies controlled water depth to suppress weeds and supply nutrients, and transplanting seedlings, attested later, extended the growing season. In the north, millet was sown broadcast on loess fields cleared by burning and tilled with stone spades; its short season and deep roots suited the semi-arid climate. Grain was stored in deep pits, dehusked with stone pestles and querns and cooked as porridge in ceramic pots, which appear in China earlier than anywhere else and were integral to the diet from the start.`,
    prerequisites: ['early-ceramics', 'composite-tools', 'controlled-fire'],
    consequences: ['pottery', 'irrigation', 'green-revolution'],
    figures: [
      { name: 'Shangshan, Kuahuqiao and Peiligang communities', role: 'Cultivated and selected early rice and millet' },
      { name: 'Zhao Zhijun', role: 'Established the archaeobotanical record of Chinese agricultural origins through systematic flotation' },
      { name: 'Dorian Q. Fuller and Ling Qin', role: 'Demonstrated the protracted domestication of rice from spikelet base evidence' },
    ],
    significance: 10,
    significanceJustification: 'Rice and millet farming created the demographic and economic base of East Asian civilisation, and rice today feeds more people than any other crop. The independent Chinese trajectory is also the strongest evidence that agriculture was a convergent, not a diffused, human invention.',
    domains: ['agriculture', 'biology-medicine'],
    sources: [
      { author: 'Zhijun Zhao', title: 'New Archaeobotanic Data for the Study of the Origins of Agriculture in China', publisher: 'Current Anthropology', year: 2011, url: 'https://doi.org/10.1086/659308' },
      { author: 'Dorian Q. Fuller and others', title: 'The Domestication Process and Domestication Rate in Rice: Spikelet Bases from the Lower Yangtze', publisher: 'Science', year: 2009, url: 'https://doi.org/10.1126/science.1166605' },
      { author: 'Li Liu and Xingcan Chen', title: 'The Archaeology of China: From the Late Paleolithic to the Early Bronze Age', publisher: 'Cambridge University Press', year: 2012 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'mesoamerican-agriculture',
    epochId: 'neolithic',
    date: { year: -7000, precision: 'millennium', display: 'c. 8000 to 6500 BCE' },
    location: 'Balsas river valley and Oaxaca highlands, Mexico',
    title: 'Squash, maize and beans in Mesoamerica',
    summary: 'Foragers in southern Mexico domesticated squash by about 8000 BCE and turned the grass teosinte into maize by roughly 7000 BCE, beginning the crop complex that would feed the Olmec, Maya and Aztec worlds and much of the modern one.',
    explanation: `Mesoamerican agriculture began without villages. The mobile foragers of the Mexican highlands and tropical lowlands cultivated plants for thousands of years before they settled, a sequence that reverses the Near Eastern one and shows that sedentism and farming are separable.

The earliest secure domesticate is squash. At Guilá Naquitz cave in Oaxaca, excavated by Kent Flannery, seeds and peduncles of Cucurbita pepo dated directly by accelerator radiocarbon to about 8000 BCE are larger and thicker-stemmed than wild gourds, which Bruce Smith took as evidence of domestication. Bottle gourd, used for containers, is present at the same site. Maize came next and is the more remarkable transformation. Its wild ancestor is teosinte, a branching grass of the Balsas river basin whose tiny hard-cased kernels look nothing like a corn cob; John Doebley's genetic work showed that a handful of regulatory genes, notably tb1 and tga1, account for the difference, and that all domestic maize descends from a single domestication of the Balsas subspecies. At Xihuatoxtla rockshelter in Guerrero, Dolores Piperno and colleagues recovered maize starch grains and phytoliths from grinding stones dated to about 6700 BCE, and cobs from Guilá Naquitz dated to about 4300 BCE are the earliest macrofossils, only a few centimeters long with two rows of kernels. Maize was carried south into Panama and the Andes by 5000 BCE, but it did not become the dominant staple in Mesoamerica until the second millennium BCE, when larger, more productive varieties supported the first permanent villages and, soon after, the Olmec centres.

Common beans (Phaseolus vulgaris) were domesticated in Mesoamerica and separately in the Andes, appearing in Mexican caves by about 2000 BCE though earlier cultivation is likely. Chili peppers, avocados, amaranth and cotton complete the complex. Planted together, in the milpa system, maize, beans and squash are agronomically and nutritionally complementary: beans climb the maize stalks and fix nitrogen, squash shades the soil, and beans supply the lysine maize lacks. Nixtamalisation, cooking maize in an alkaline solution of lime or wood ash, releases niacin and improves protein quality and is attested from the second millennium BCE.

Mesoamerica had no large domesticable animals except the dog and, later, the turkey, so it developed an agriculture without traction, dairy or wool, in which human labour, terracing and eventually raised fields and canal irrigation substituted for the ox and the plough. The consequences were world-historical. Maize became, after the sixteenth century, one of the three crops that feed humanity, and its productivity underpinned population growth in Africa, southern Europe and China as much as in the Americas.`,
    mechanism: `Domestication of maize turned a branching grass with many small ears into a single-stalked plant with a few large ones. Mutations in the tb1 gene suppressed side branching so that energy went into fewer, larger ears; mutations in tga1 freed the kernel from the hard fruitcase that encloses teosinte seeds, making it edible without extensive processing; and selection for non-shattering ears meant that kernels stayed on the cob until harvest. Because maize is wind-pollinated and cannot disperse its seed without help, it became wholly dependent on planting. Farmers cleared plots by slash and burn, planted maize, beans and squash together with a digging stick, and processed the grain on a stone metate with a mano. The whole system needed no animal, no plough and no metal.`,
    prerequisites: ['composite-tools', 'controlled-fire'],
    consequences: ['irrigation', 'green-revolution'],
    figures: [
      { name: 'Archaic foragers of the Balsas valley and Oaxaca', role: 'Domesticated squash, maize and beans' },
      { name: 'Kent V. Flannery and Bruce D. Smith', role: 'Excavated Guilá Naquitz and dated the earliest domesticated squash' },
      { name: 'Dolores R. Piperno and John Doebley', role: 'Established the age of early maize and its single origin from Balsas teosinte' },
    ],
    significance: 9,
    significanceJustification: 'Maize is the highest-yielding cereal in the world and the product of one of the most dramatic transformations any domesticated plant underwent. The Mesoamerican complex fed the New World civilisations and, after 1492, much of the Old World.',
    domains: ['agriculture', 'biology-medicine'],
    sources: [
      { author: 'Dolores R. Piperno, Anthony J. Ranere, Irene Holst, Jose Iriarte and Ruth Dickau', title: 'Starch grain and phytolith evidence for early ninth millennium B.P. maize from the Central Balsas River Valley, Mexico', publisher: 'Proceedings of the National Academy of Sciences', year: 2009, url: 'https://doi.org/10.1073/pnas.0812525106' },
      { author: 'Yoshihiro Matsuoka and others', title: 'A single domestication for maize shown by multilocus microsatellite genotyping', publisher: 'Proceedings of the National Academy of Sciences', year: 2002, url: 'https://doi.org/10.1073/pnas.052125199' },
      { author: 'Bruce D. Smith', title: 'The Initial Domestication of Cucurbita pepo in the Americas 10,000 Years Ago', publisher: 'Science', year: 1997, url: 'https://doi.org/10.1126/science.276.5314.932' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'andean-agriculture',
    epochId: 'neolithic',
    date: { year: -7000, precision: 'estimated', display: 'c. 8000 to 5000 BCE' },
    location: 'Northern Peruvian Andes and the Titicaca basin',
    title: 'Potato, quinoa and camelids in the Andes',
    summary: 'Andean communities domesticated squash, peanut and cotton on the western slopes by 7000 BCE, the potato and quinoa in the high altiplano, and llamas and alpacas from wild guanaco and vicuña, creating the only New World economy with domesticated herd animals.',
    explanation: `The Andes are the most vertical of the world's agricultural heartlands, and their domesticates are sorted by altitude. On the warm western slopes of northern Peru, Tom Dillehay's excavations in the Ñanchoc valley recovered squash (Cucurbita moschata) dated to about 8000 BCE, peanut to about 6500 BCE and cotton to about 4000 BCE, from house floors and garden plots served by small irrigation furrows. These are among the earliest cultivated plants anywhere in the Americas, and their wild ancestors do not grow locally, so the plants had already been moved and cultivated elsewhere before arriving.

Higher up, the tuber crops that define Andean food were domesticated on the altiplano around Lake Titicaca, between 3500 and 4000 meters, where frost and thin air exclude most cereals. Genetic work by David Spooner and colleagues traces all cultivated potato to a single domestication from the wild Solanum brevicaule complex in southern Peru. The archaeological record for the potato is thin because tubers rarely survive, but starch residues on tools from Jiskairumoko near Titicaca show potato processing by about 3400 BCE, and cultivated forms were probably established well before. Quinoa, a chenopod grown for its protein-rich seed, was domesticated in the same region; seeds with the thinned seed coat characteristic of the domestic plant occur by about 3000 BCE, with cultivation plausibly earlier. Oca, ulluco, maca and the lupin tarwi round out a high-altitude crop complex adapted to cold, and the Andean practice of freeze-drying potatoes into chuño turned a perishable tuber into a store that lasted years.

The Andes also produced the only domesticated herd animals of the Americas. The llama descends from the guanaco and the alpaca from the vicuña. Jane Wheeler's analysis of camelid bones from Telarmachay rockshelter in the Junín puna shows a shift from hunting to herding between about 4000 and 3500 BCE, marked by rising proportions of newborn deaths in the assemblage, a signature of animals penned in unsanitary corrals. Llamas carried loads of up to thirty kilograms across the mountain trails and provided dung for fuel and fertiliser; alpacas provided fine wool, which fed a textile tradition that became the most technically elaborate in the ancient world.

Andean farming thus arose from several distinct processes rather than one, on the coast, the slopes and the altiplano, and it culminated in the third millennium BCE in the monumental centres of the Norte Chico such as Caral, where irrigated cotton, squash and beans, exchanged for anchovies from the coast, supported the earliest large-scale architecture in the Americas. The potato, carried to Europe after 1570, became a staple that fed the growth of northern European populations.`,
    mechanism: `Potato domestication selected tubers with lower levels of the bitter and toxic glycoalkaloids of wild Solanum, and larger size; because potatoes are propagated by replanting tubers rather than seed, a favoured clone could be fixed immediately, which makes potato landraces exceptionally diverse. Quinoa was selected for a thin seed coat with less saponin, non-shattering seed heads and larger seeds. Camelid herding relied on corralling animals, controlling breeding and culling, and on the alpaca's naturally fine fleece being enhanced by selection. Altiplano farmers built raised fields (waru waru) whose surrounding channels stored daytime heat and protected crops from frost, and terraces on the slopes. Chuño was made by exposing potatoes to night frost, trampling out the water, and drying them in the sun.`,
    prerequisites: ['composite-tools', 'controlled-fire'],
    consequences: ['irrigation', 'green-revolution'],
    figures: [
      { name: 'Ñanchoc valley and Titicaca basin communities', role: 'Domesticated Andean crops and camelids' },
      { name: 'Tom D. Dillehay', role: 'Excavated the early cultivated squash, peanut and cotton of the Ñanchoc valley' },
      { name: 'David M. Spooner and Jane C. Wheeler', role: 'Established the single origin of the potato and the herding transition of camelids' },
    ],
    significance: 8,
    significanceJustification: 'The Andes contributed the potato, one of the four crops that feed the modern world, and the only domesticated pack animal and wool producer in the Americas. The high-altitude crop complex is a distinctive solution to farming where cereals cannot grow.',
    domains: ['agriculture', 'biology-medicine'],
    sources: [
      { author: 'Tom D. Dillehay, Jack Rossen, Thomas C. Andres and David E. Williams', title: 'Preceramic Adoption of Peanut, Squash, and Cotton in Northern Peru', publisher: 'Science', year: 2007, url: 'https://doi.org/10.1126/science.1141395' },
      { author: 'David M. Spooner, Karen McLean, Gavin Ramsay, Robbie Waugh and Glenn J. Bryan', title: 'A single domestication for potato based on multilocus amplified fragment length polymorphism genotyping', publisher: 'Proceedings of the National Academy of Sciences', year: 2005, url: 'https://doi.org/10.1073/pnas.0507400102' },
      { author: 'Jane C. Wheeler', title: 'Evolution and present situation of the South American Camelidae', publisher: 'Biological Journal of the Linnean Society', year: 1995 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'new-guinea-agriculture',
    epochId: 'neolithic',
    date: { year: -7000, precision: 'estimated', display: 'c. 8000 to 5000 BCE' },
    location: 'Kuk Swamp, Wahgi valley, Highlands of Papua New Guinea',
    title: 'Taro and banana cultivation at Kuk Swamp',
    summary: 'In the New Guinea highlands, wetland margins at Kuk Swamp were being planted with taro and bananas by about 8000 BCE and drained with mounds and ditches by 5000 BCE, an independent agricultural origin based on vegetatively propagated plants rather than seed crops.',
    explanation: `New Guinea is the least expected of the world's agricultural origins. Its highland valleys, at 1500 to 2000 meters, were populated by people with no cereals, no domesticable herd animals, no pottery until much later and no contact with the Asian mainland's Neolithic. Yet they invented farming. The evidence comes from Kuk Swamp in the upper Wahgi valley, investigated by Jack Golson from 1972 and by Tim Denham from 1998, and inscribed as a World Heritage Site in 2008.

Kuk preserves, under later drainage systems and tea plantations, a sequence of buried land surfaces. The earliest, Phase 1, dated to about 8000 BCE, is a palaeosurface with pits, stake holes and runnels on the wetland margin that Denham interprets as the planting and tending of plants on the swamp edge. Phase 2, from about 5000 to 4400 BCE, is unambiguous: rows of regularly spaced circular mounds of turned soil, about a meter across, built to lift plants above the waterlogged ground, the same technique highland gardeners use today for taro and sweet potato. Phase 3, from about 2000 BCE, adds networks of drainage ditches. The plants are identified by microfossils. Starch grains of taro (Colocasia esculenta) occur on stone tools from Phase 1, and banana phytoliths (Musa, the Eumusa section from which edible bananas derive) rise sharply in Phase 2 to frequencies that imply deliberate cultivation. Yams, sugar cane and Australimusa bananas were probably also grown.

These are not seed crops. Taro is propagated from corms, bananas from suckers, yams from tubers, so domestication proceeded by selecting and replanting the best clones rather than by the slow shift in seed morphology seen in cereals. The archaeological signature is therefore landscape modification rather than changed grains, which is why Kuk's significance took decades to be accepted. The New Guinea evidence has since been reinforced by genetics: cultivated banana carries a large contribution from New Guinea wild populations, and taro shows a distinct Melanesian lineage.

New Guinea highland agriculture never generated cities, metals or writing. It supported dense village populations, elaborate exchange systems and, after the arrival of the pig from Southeast Asia in the last three millennia, a political economy of feasting. But its independent status matters for the argument of this epoch. Farming was invented at least six times, by people with entirely different plants, and in New Guinea it was invented without any of the accompaniments, from sedentism to ceramics, that once seemed inseparable from it. The bananas that spread across the Pacific and into Africa and, much later, into the global trade in fruit are descended in part from the plants tended on the Kuk margin.`,
    mechanism: `Highland gardeners planted taro corms and banana suckers in the wet, fertile soil of the swamp margin, where the water table kept the plants supplied but drowned their roots if it rose. Mounding solved the problem: soil was dug from between planting stations and heaped into circular or elongated mounds, raising the root zone into aerated soil while the surrounding hollows drained water away. Later, ditches cut across the swamp and linked to natural channels drew the water table down across whole gardens. Digging was done with wooden spades and digging sticks; forest was cleared by ring-barking and burning. Because the crops are vegetatively propagated, the largest and best-tasting individuals were replanted directly, fixing their traits in the next generation without the delay of seed selection.`,
    prerequisites: ['composite-tools', 'controlled-fire'],
    consequences: ['irrigation', 'green-revolution'],
    figures: [
      { name: 'Highland communities of the Wahgi valley', role: 'Planted, mounded and drained the Kuk wetland' },
      { name: 'Jack Golson', role: 'Discovered and first excavated the Kuk drainage sequence' },
      { name: 'Tim Denham', role: 'Established the early phases and their plant evidence through microfossil analysis' },
    ],
    significance: 6,
    significanceJustification: 'Kuk is the securest evidence for an independent agricultural origin outside Eurasia and the Americas, and it contributed banana and taro to the world. Its direct technological descendants are few, but its demonstration that farming arose repeatedly is central to understanding the epoch.',
    domains: ['agriculture'],
    sources: [
      { author: 'Tim P. Denham and others', title: 'Origins of Agriculture at Kuk Swamp in the Highlands of New Guinea', publisher: 'Science', year: 2003, url: 'https://doi.org/10.1126/science.1085255' },
      { author: 'Jack Golson, Tim Denham, Philip Hughes, Pamela Swadling and John Muke (editors)', title: 'Ten Thousand Years of Cultivation at Kuk Swamp in the Highlands of Papua New Guinea', publisher: 'ANU Press', year: 2017, url: 'https://doi.org/10.22459/TA46.07.2017' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'african-agriculture',
    epochId: 'neolithic',
    date: { year: -3500, precision: 'millennium', display: 'c. 3500 BCE, on a base of cattle herding from c. 7500 BCE' },
    location: 'Sahara and Nile valley for cattle; eastern Sudan, the Sahel and West Africa for sorghum, pearl millet and yams',
    title: 'Cattle herding and the domestication of sorghum, pearl millet and yams in Africa',
    summary: 'Africa took an unusual path: Saharan foragers herded cattle from about 7500 BCE, long before any African crop was domesticated, and sorghum in eastern Sudan shows domestication traits only in the fourth millennium BCE, with pearl millet in the Sahel and yams in West Africa following later.',
    explanation: `In most of the world plants were domesticated before animals. In Africa south of the Mediterranean the order was reversed. Fiona Marshall and Elisabeth Hildebrand summarised the pattern as cattle before crops. At Nabta Playa and Bir Kiseiba in the Egyptian Western Desert, Fred Wendorf and Romuald Schild found cattle bones in campsites of the early Holocene wet phase, from about 7500 BCE, at a time when the Sahara was a grassland of lakes and the animals could not have survived without people leading them to water. Whether these earliest cattle were domestic is debated, and genetic evidence indicates that African cattle descend mainly from Near Eastern stock introduced by about 6000 BCE, with possible local contribution. What is not debated is that by the sixth millennium BCE cattle pastoralism, with sheep and goats added from the Near East, was the dominant way of life across the Sahara, recorded in thousands of rock paintings, in cattle burials at Nabta Playa and in the stone alignments there that may track the summer solstice.

Wild grains were harvested intensively throughout this period. Nabta Playa's foragers collected sorghum, millets and other grasses by 8000 BCE, and grinding stones are ubiquitous, but the plants remained morphologically wild. The turn to domestication came as the Sahara dried after 5000 BCE and pastoralists moved south into the Sahel and the Nile valley. The earliest secure evidence of an African cereal in transition is sorghum from the Butana Group site KG23 near Kassala in eastern Sudan, where Frank Winchell, Dorian Fuller and colleagues identified impressions in pottery showing a rising proportion of non-shattering spikelet bases across the fourth millennium BCE. That places the beginning of sorghum domestication at about 3500 BCE, the end of this epoch, which is why the event is dated here; fully domestic sorghum appears only by the second millennium. Pearl millet was domesticated in the western Sahel; the earliest domestic grains, from the Tilemsi valley in Mali, date to about 2500 BCE. African rice, cowpea, fonio, watermelon and, in Ethiopia, teff and enset were domesticated later still. Yams (Dioscorea) of the West African forest margin were surely cultivated early, but tubers leave few traces and the date of their domestication is unknown.

The African sequence is important for two reasons. It shows that mobile pastoralism can be a stable economy for thousands of years without arable farming, and that the crops of sub-Saharan Africa, which are today staples for hundreds of millions, were domesticated by African communities from African grasses rather than being introduced. The ecological logic is distinctive too: sorghum and pearl millet tolerate heat, drought and poor soil that would kill wheat, which is why the Near Eastern package stopped at the Sahara's edge and the Nile valley, and why an independent African agriculture had to arise.`,
    mechanism: `Saharan herding worked by moving cattle between seasonal pastures and water, digging wells in playa basins during the dry season and using milk and blood as well as meat. Cereal domestication followed the same selective logic as elsewhere: harvesting sorghum panicles with a knife or by hand and resowing the retained seed favoured plants whose grains did not shatter and were larger, with the change visible in spikelet bases preserved as impressions in pottery temper. Pearl millet, sown on sandy Sahelian soils at the start of the short rains, was selected for large non-shedding grains. Yams were propagated by replanting the top of the tuber, so cultivation selected clones directly and needed no seed change at all. Grain was pounded in wooden mortars and ground on stone querns and cooked as porridge.`,
    prerequisites: ['animal-domestication', 'composite-tools', 'early-ceramics'],
    consequences: ['green-revolution'],
    figures: [
      { name: 'Saharan pastoralists of Nabta Playa and the Butana Group of eastern Sudan', role: 'Herded early cattle and began the domestication of sorghum' },
      { name: 'Fred Wendorf and Romuald Schild', role: 'Excavated Nabta Playa and established early Saharan cattle herding' },
      { name: 'Frank Winchell, Dorian Q. Fuller and colleagues', role: 'Identified fourth millennium BCE sorghum domestication traits from pottery impressions' },
    ],
    significance: 7,
    significanceJustification: 'African communities independently domesticated the drought-tolerant cereals that feed the Sahel and much of the continent today, and pioneered a pastoral economy without crops. The dating of the earliest cattle is contested, and crop domestication largely postdates this epoch, which limits confidence.',
    domains: ['agriculture', 'biology-medicine'],
    sources: [
      { author: 'Frank Winchell, Chris J. Stevens, Charlene Murphy, Louis Champion and Dorian Q. Fuller', title: 'Evidence for Sorghum Domestication in Fourth Millennium BC Eastern Sudan: Spikelet Morphology from Ceramic Impressions of the Butana Group', publisher: 'Current Anthropology', year: 2017 },
      { author: 'Fiona Marshall and Elisabeth Hildebrand', title: 'Cattle Before Crops: The Beginnings of Food Production in Africa', publisher: 'Journal of World Prehistory', year: 2002, url: 'https://doi.org/10.1023/A:1019954903395' },
      { author: 'Fred Wendorf and Romuald Schild', title: 'Nabta Playa and Its Role in Northeastern African Prehistory', publisher: 'Journal of Anthropological Archaeology', year: 1998, url: 'https://doi.org/10.1006/jaar.1997.0319' },
      { author: 'Katie Manning, Ruth Pelling, Tom Higham, Jean-Luc Schwenniger and Dorian Q. Fuller', title: '4500-year old domesticated pearl millet (Pennisetum glaucum) from the Tilemsi Valley, Mali: new insights into an alternative cereal domestication pathway', publisher: 'Journal of Archaeological Science', year: 2011, url: 'https://doi.org/10.1016/j.jas.2010.09.007' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'irrigation',
    epochId: 'neolithic',
    date: { year: -6000, precision: 'millennium', display: 'c. 6000 BCE' },
    location: 'Choga Mami and the Samarran sites of central Mesopotamia',
    title: 'Canal irrigation',
    summary: 'Samarran farmers on the dry margin of the Mesopotamian plain dug channels to lead river water onto their fields around 6000 BCE, the first step toward the irrigated alluvial agriculture that would feed the first cities.',
    explanation: `Rain-fed farming works where at least 200 to 250 millimeters of rain fall in the growing season. The hill country of the Fertile Crescent receives that; the great alluvial plain of the Tigris and Euphrates does not. Yet that plain, with its deep silts and permanent rivers, became the most productive farmland of the ancient world. The technology that made this possible was irrigation, and its earliest secure evidence lies exactly where the rain-fed zone gives out.

Choga Mami, near Mandali on the Iraqi side of the Zagros foothills, was excavated by Joan and David Oates in 1967 and 1968. It belongs to the Samarra culture of the late seventh and early sixth millennium BCE. Beside the settlement the excavators traced a series of small water channels, one of them running for over a kilometer, that had been cut and recut over generations to bring water from the Gangir river across the fan on which the site stands. Hans Helbaek's analysis of the charred plant remains showed six-row barley, bread wheat and flax in quantities and states, notably large flax seeds, that in his judgement could not have been grown there without watering. At Tell es-Sawwan, another Samarran site on the Tigris north of Baghdad, the same crops occur, and by the Ubaid period, from about 5500 BCE, farming villages had spread down the whole length of southern Mesopotamia, a region with almost no rain, which is possible only with irrigation. Independent irrigation systems appear at roughly the same time at Ñanchoc in Peru, where Dillehay traced small furrows dated to about 4500 BCE, and rather later on the Nile, in the Indus valley and in the Chinese rice paddies.

Irrigation was as much an institution as a technique. Channels had to be dug, cleaned of silt each year and defended, and water had to be shared among fields that lay at different points along the flow. The Mesopotamian tradition that the gods created humans to dig canals reflects a society organised around this labour. Irrigated land could yield several times what rain-fed land did, and grain could be grown on the same field every year, so that a household could feed itself from a small plot and the remainder could support people who did not farm. Karl Wittfogel's argument that despotic states arose to manage hydraulic works has not survived scrutiny: early irrigation in Mesopotamia was small in scale and locally managed, and the state came later. But the temple economies of Uruk and the city-states of Sumer were unimaginable without it.

The long-term price was salinisation. Irrigation water carries dissolved salts that remain in the soil as it evaporates, and without drainage the water table rises and brings more. Thorkild Jacobsen and Robert Adams argued that southern Mesopotamian wheat yields collapsed in the late third millennium for this reason, the first documented case of a technology undermining its own foundation.`,
    mechanism: `An irrigation canal takes water from a river or wadi at a point upstream of the fields, where the river's bed lies above the level of the land to be watered, and carries it along a gentle gradient so that it flows by gravity. At Choga Mami the channels were a meter or two wide, cut into the alluvial fan with wooden digging tools and baskets to carry spoil. Smaller distributaries branched from the main channel, and water was let into fields by breaching and re-closing earthen bunds. Fields were levelled so that water spread evenly and were flooded before sowing and at intervals during growth. Silt carried by the water renewed fertility but also clogged the channels, which had to be dredged each season. Later Mesopotamian systems added weirs, regulators and, with the shaduf after 3000 BCE, mechanical lifting.`,
    prerequisites: ['fertile-crescent-agriculture', 'mud-brick', 'animal-domestication'],
    consequences: ['mesopotamian-mathematics', 'indus-sanitation', 'roman-aqueducts', 'cuneiform'],
    figures: [
      { name: 'Samarran farming communities of central Mesopotamia', role: 'Dug the earliest known irrigation channels' },
      { name: 'Joan Oates and David Oates', role: 'Excavated Choga Mami and identified its canals' },
      { name: 'Hans Helbaek', role: 'Demonstrated from plant remains that the Choga Mami crops were irrigated' },
    ],
    significance: 9,
    significanceJustification: 'Irrigation opened the alluvial plains to farming and produced the surpluses on which cities, states and writing were built. It is the first technology to make agriculture independent of rainfall and the first whose management shaped political institutions.',
    domains: ['agriculture', 'energy'],
    sources: [
      { author: 'Hans Helbaek', title: 'Samarran Irrigation Agriculture at Choga Mami in Iraq', publisher: 'Iraq', year: 1972, url: 'https://doi.org/10.2307/4199929' },
      { author: 'Joan Oates and David Oates', title: 'Early irrigation agriculture in Mesopotamia', publisher: 'Problems in Economic and Social Archaeology, Duckworth', year: 1976 },
      { author: 'Tony J. Wilkinson', title: 'Archaeological Landscapes of the Near East', publisher: 'University of Arizona Press', year: 2003 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'weaving-loom',
    epochId: 'neolithic',
    date: { year: -6500, precision: 'millennium', display: 'c. 6500 BCE' },
    location: 'Anatolia and the Levant, with later evidence across Neolithic Europe and Egypt',
    title: 'Spun thread and the weaving loom',
    summary: 'By the seventh millennium BCE Neolithic communities were spinning flax and wool into thread and weaving it on tensioned looms into cloth, replacing skins and twined fabrics with a material that could be produced in bulk and shaped freely.',
    explanation: `Twisted cord and twined fabrics are Paleolithic. What the Neolithic added was the loom: a frame that holds one set of threads under tension so that another can be passed through them quickly, turning a slow hand craft into something a household could do for hours a day. The change depended on two farming products, flax, which was among the founder crops of the Fertile Crescent, and wool, which became available once sheep were bred for fleece.

The earliest preserved textiles come from unusually dry or waterlogged sites. At Nahal Hemar cave in the Judaean desert, Tamar Schick recovered linen fabrics of about 6500 BCE, mostly twined and knotted, in which the flax had been retted, spun and worked with great skill but without a loom. At Çatalhöyük, textiles preserved by charring in burials of about 6500 to 6000 BCE are true woven cloth, in plain weave, and recent fibre analysis indicates that they are bast fibre from oak, not flax, a reminder that early weavers used what grew locally. Clay loom weights, which hold the warp threads taut on a vertical warp-weighted loom, appear in Anatolian and southeastern European settlements by 6000 BCE and become abundant in the Linear Pottery and subsequent cultures of Europe, where their distribution in burned houses reveals the position of the loom itself. Spindle whorls, the small perforated discs that give momentum to a hand spindle, occur in the same contexts. The horizontal ground loom, staked out on the earth, is depicted on a Badarian bowl from Egypt of about 4400 BCE and was used for the fine linen of the Pharaohs. Cotton cloth was being woven independently in the Indus valley by about 4000 BCE and in coastal Peru by 3000 BCE.

Cloth changed clothing and much else. Woven fabric could be made to any size from a renewable crop or from animals that also gave meat and milk; it could be dyed, patterned and cut; it was lighter and cooler than hide. Sails, sacks, tents, bandages, wicks, nets and wrappings for the dead all depended on it. Spinning was probably the most time-consuming task in every Neolithic and later household, and in most cultures it was women's work, which shaped the division of labour for millennia. In the Bronze Age, when wool became the main fibre, textiles were the principal manufactured export of Mesopotamia and Crete, the first industrial commodity in the sense of a standardised product made in large workshops for trade.`,
    mechanism: `Fibre had first to be prepared: flax stems were retted in water to rot the soft tissue, then broken, scutched and combed to free the bast fibres; wool was plucked or shorn, washed and teased. Spinning drew out a bundle of fibres and twisted them into a continuous thread, using a spindle, a stick weighted with a whorl, that was set spinning and dropped so its momentum inserted twist. Weaving interlaced two thread systems at right angles. On a warp-weighted loom the warp threads hung from a horizontal beam and were tensioned by clay weights, with alternate threads tied to a heddle rod so that lifting the rod opened a shed through which the weft could be passed in one movement, then beaten up with a wooden sword. On a ground loom the warp was stretched between two beams pegged to the earth.`,
    prerequisites: ['sewing-needle', 'clothing', 'fertile-crescent-agriculture', 'animal-domestication'],
    consequences: ['sailing-ship', 'horizontal-loom', 'spinning-jenny', 'jacquard-loom'],
    figures: [
      { name: 'Neolithic households of Anatolia and the Levant', role: 'Spun and wove the earliest preserved textiles' },
      { name: 'Tamar Schick', role: 'Analysed the Nahal Hemar cave fabrics' },
      { name: 'Elizabeth Wayland Barber', role: 'Synthesised the archaeological evidence for prehistoric textile technology' },
    ],
    significance: 8,
    significanceJustification: 'Textiles became the largest manufacturing activity of every pre-industrial society and the loom the machine on which the Industrial Revolution would later be built. The Neolithic is when cloth production moved from craft to household industry.',
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Elizabeth J. W. Barber', title: 'Prehistoric Textiles: The Development of Cloth in the Neolithic and Bronze Ages with Special Reference to the Aegean', publisher: 'Princeton University Press', year: 1991 },
      { author: 'Tamar Schick', title: 'Cordage, Basketry and Fabrics', publisher: 'Atiqot, Israel Antiquities Authority', year: 1988 },
      { author: 'Irene Good', title: 'Archaeological Textiles: A Review of Current Research', publisher: 'Annual Review of Anthropology', year: 2001, url: 'https://doi.org/10.1146/annurev.anthro.30.1.209' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'copper-smelting',
    epochId: 'neolithic',
    date: { year: -5000, precision: 'century', display: 'c. 5000 BCE' },
    location: 'Belovode and Pločnik, Serbia, and Tal-i Iblis, Iran',
    title: 'Copper smelting',
    summary: 'After two millennia of hammering native copper into beads and pins, communities in the Balkans and Iran learned around 5000 BCE to extract copper from its ores by heating them with charcoal, the founding act of metallurgy.',
    explanation: `Copper occurs in nature as a metal, in small nuggets and sheets, and Neolithic people treated it as a bright, malleable stone. Beads and pins of hammered native copper appear at Çayönü in Anatolia by 8000 BCE and at Çatalhöyük by 7000 BCE, and green copper minerals such as malachite were ground for pigment and made into beads even earlier. None of that is metallurgy. Smelting, the chemical reduction of an ore to metal, requires a different insight: that a green stone heated with charcoal in a reducing fire will give up red metal.

For decades the earliest evidence was believed to be a piece of slag from Çatalhöyük dated to about 6500 BCE. In 2017 Miljana Radivojević and colleagues re-examined it and showed that it was not smelting slag but the accidental product of a house fire that had burned a deposit of malachite beads. The earliest secure evidence now comes from the Vinča culture of the central Balkans. At Belovode in eastern Serbia, Radivojević's team excavated copper slag, malachite fragments and copper minerals in a context dated to about 5000 BCE, and chemical analysis showed that the slag was produced by smelting at over 1000 degrees Celsius. At the neighbouring site of Pločnik, cast copper hammer-axes and chisels of the fifth millennium have been recovered in quantity, and there is an early tin-bronze foil dated to about 4650 BCE that predates Near Eastern bronze by more than a millennium and remains an isolated puzzle. Parallel and possibly earlier developments occurred in Iran: at Tal-i Iblis, in Kerman, crucible fragments with copper residues date to the late sixth or early fifth millennium BCE, and Anatolian sites of the same age show copper working of increasing sophistication. Whether smelting was invented once and spread or several times independently is not settled.

The Balkan evidence overturned an older narrative in which metallurgy diffused from a Near Eastern core; the Vinča smiths were at least as early. In the fifth millennium copper axes, adzes and ornaments became prestige goods across southeastern Europe, and the cemetery of Varna on the Bulgarian Black Sea coast, around 4500 BCE, contains the earliest large assemblage of gold objects in the world alongside heavy copper tools, a display of concentrated wealth that marks the arrival of visible social hierarchy.

Copper itself is soft, and a smelted copper axe is not much better than a polished stone one. Its importance was that it could be melted, cast to shape and recast when broken, and that the process could be scaled up by working more ore. The techniques of ore recognition, charcoal reduction, crucible melting and casting were exactly those that, with the addition of arsenic and tin, produced bronze after 3500 BCE and that, with hotter furnaces, would later smelt iron. Every metal technology descends from the fifth-millennium furnace.`,
    mechanism: `Smelting copper carbonate ores such as malachite involves two reactions. Heat drives off carbon dioxide and water to leave copper oxide; carbon monoxide from burning charcoal then strips oxygen from the oxide, leaving metal. Both require a reducing atmosphere, meaning a fire starved of air so that carbon monoxide rather than carbon dioxide dominates, and a temperature above the melting point of copper, 1085 degrees Celsius. Early smiths achieved this by packing crushed ore and charcoal into a small pit or a clay crucible, covering it, and blowing through reed tuyeres to raise the temperature. Copper collected as prills and small ingots at the bottom, which were remelted in crucibles and poured into open stone or clay moulds. The remaining slag, silicate waste that trapped some copper, is what archaeologists find.`,
    prerequisites: ['pottery', 'controlled-fire', 'catalhoyuk'],
    consequences: ['bronze-metallurgy', 'iron-smelting', 'standardized-weights'],
    figures: [
      { name: 'Vinča culture communities of Belovode and Pločnik', role: 'Produced the earliest securely dated smelted copper' },
      { name: 'Miljana Radivojević', role: 'Established the Belovode evidence and disproved the Çatalhöyük slag' },
      { name: 'Benjamin W. Roberts, Christopher P. Thornton and Vincent C. Pigott', role: 'Synthesised the evidence for the origins of Eurasian metallurgy' },
    ],
    significance: 9,
    significanceJustification: 'Smelting is the beginning of all metallurgy and the first chemical transformation of a raw material by humans. Copper was too soft to change much on its own, but the furnace, crucible and mould it required were the direct basis of bronze and iron.',
    domains: ['materials', 'energy', 'manufacturing'],
    sources: [
      { author: 'Miljana Radivojević, Thilo Rehren, Ernst Pernicka, Dušan Šljivar, Michael Brauns and Dušan Borić', title: 'On the origins of extractive metallurgy: new evidence from Europe', publisher: 'Journal of Archaeological Science', year: 2010, url: 'https://doi.org/10.1016/j.jas.2010.06.012' },
      { author: 'Benjamin W. Roberts, Christopher P. Thornton and Vincent C. Pigott', title: 'Development of metallurgy in Eurasia', publisher: 'Antiquity', year: 2009, url: 'https://doi.org/10.1017/S0003598X00099312' },
      { author: 'Miljana Radivojević, Thilo Rehren, Shahina Farid, Ernst Pernicka and Duygu Camurcuoğlu', title: 'Repealing the Çatalhöyük extractive metallurgy: The green, the fire and the slag', publisher: 'Journal of Archaeological Science', year: 2017, url: 'https://doi.org/10.1016/j.jas.2017.07.001' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'megalithic-construction',
    epochId: 'neolithic',
    date: { year: -4700, precision: 'century', display: 'c. 4700 BCE' },
    location: 'Brittany and the Atlantic coast of Europe, spreading to Iberia, Britain, Ireland and Scandinavia',
    title: 'Megalithic tombs and standing stones',
    summary: 'From about 4700 BCE farming communities of Atlantic Europe raised standing stones and built chambered tombs of multi-ton slabs, beginning a tradition of monumental stone building that lasted two thousand years and culminated at Stonehenge.',
    explanation: `The word megalith means simply a large stone, and the phenomenon it names is a set of monuments built by Neolithic Europeans from unworked or roughly shaped stones weighing from one to several hundred tons: menhirs standing singly or in rows, dolmens of a capstone on uprights, and passage graves in which a corridor of orthostats leads to a chamber under a mound or cairn. About 35,000 survive, from Sweden to Malta. They were long thought to be a single tradition diffused from the eastern Mediterranean; radiocarbon dating in the 1960s showed that the earliest were in the west, and a Bayesian analysis of more than two thousand dates by Bettina Schulz Paulsson in 2019 placed the origin in northwestern France in the second half of the fifth millennium BCE, with spread by sea along the Atlantic facade and into the Mediterranean over the following centuries.

The earliest monuments are in Brittany. The Grand Menhir Brisé at Locmariaquer, now in four pieces, was a single shaped granite pillar over 20 meters long and around 280 tons, erected around 4700 BCE and toppled a few centuries later; its fragments were reused as capstones in the passage graves of Gavrinis and the Table des Marchands. The cairn of Barnenez, with eleven passage graves under a single mound, dates to about 4500 BCE. In the following millennium the tradition produced the alignments of Carnac, the passage tombs of Ireland's Boyne valley, Newgrange, Knowth and Dowth, about 3200 BCE, the tombs and houses of Orkney, and the temples of Malta. Stonehenge lies after this epoch: its earthwork dates to about 3000 BCE and the sarsen circle to about 2500 BCE, but it belongs to the same tradition, and its bluestones, brought from Wales, and its sarsens from the Marlborough Downs show the scale of effort megalith builders could organise.

The technology is simple in principle and formidable in practice. Stones were split from outcrops or gathered as glacial erratics, moved on sledges over timber rails or rollers with ropes hauled by many people or oxen, and raised by tipping into a pit against a ramp. Passage graves were roofed by corbelling or capstones and buried under stone or earth. Many monuments incorporate astronomical alignments, most famously Newgrange's roof box, through which the rising midwinter sun illuminates the chamber, and Stonehenge's solstitial axis; whether these express a calendar or a cosmology is debated, but they show a sustained observation of the sky.

The megaliths matter as evidence of social organisation. Building Newgrange required about 200,000 tons of material and the labour of a large population over decades. Such projects reveal communities capable of planning, feeding a workforce and sustaining an intention across generations, and monuments that held the ancestral dead fixed claims to land in the earliest agricultural landscapes of Europe.`,
    mechanism: `Builders selected stones with natural planes of weakness and split them with wooden wedges driven into cracks and swollen with water, or by heating and quenching. The stone was levered onto a timber sledge and dragged along a track of greased timber rails or over rollers by teams pulling ropes of lime bast or leather; experiments show that forty people can move a ten-ton stone this way. To raise a standing stone a pit was dug with one vertical face, the stone was slid so that its base dropped in, and the top was hauled upright with ropes and levered up with timber A-frames and shear legs, then packed with stones. Capstones were raised on ramps of earth or on timber cribbing built up layer by layer. Passage grave chambers were sometimes corbelled with overlapping flat slabs to form a beehive vault.`,
    prerequisites: ['gobekli-tepe', 'fertile-crescent-agriculture', 'animal-domestication', 'composite-tools'],
    consequences: ['nebra-sky-disc', 'egyptian-astronomy-calendar'],
    figures: [
      { name: 'Neolithic farming communities of Brittany and the Atlantic facade', role: 'Built the earliest megalithic monuments' },
      { name: 'Bettina Schulz Paulsson', role: 'Established the chronology and maritime diffusion of European megaliths' },
      { name: 'Chris Scarre and Mike Parker Pearson', role: 'Led modern investigation of the Breton monuments and Stonehenge respectively' },
    ],
    significance: 6,
    significanceJustification: 'The megaliths are the largest engineering works of the European Neolithic and the first sustained programme of monumental architecture in the west, demonstrating the capacity to mobilise labour and encode astronomical knowledge in structure. Their technical descendants are few, but their social meaning is large.',
    domains: ['materials', 'information'],
    sources: [
      { author: 'Bettina Schulz Paulsson', title: 'Radiocarbon dates and Bayesian modeling support maritime diffusion model for megaliths in Europe', publisher: 'Proceedings of the National Academy of Sciences', year: 2019, url: 'https://doi.org/10.1073/pnas.1813268116' },
      { author: 'Chris Scarre', title: 'Landscapes of Neolithic Brittany', publisher: 'Oxford University Press', year: 2011 },
      { author: 'Mike Parker Pearson', title: 'Stonehenge: Exploring the Greatest Stone Age Mystery', publisher: 'Simon and Schuster', year: 2012 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'plough',
    epochId: 'neolithic',
    date: { year: -4000, precision: 'estimated', display: 'c. 4000 to 3600 BCE' },
    location: 'Mesopotamia and central Europe, with ard marks preserved in Poland, Denmark and Britain',
    title: 'The ox-drawn ard',
    summary: 'Sometime in the fifth or early fourth millennium BCE farmers yoked cattle to a wooden scratch plough, the ard, replacing the hoe and multiplying the area a household could sow; the earliest preserved furrows date to about 3600 BCE.',
    explanation: `For the first five thousand years of farming, fields were prepared by hand, with digging sticks, stone-bladed hoes and wooden spades. A family could work only as much land as its own arms could break each season. The ard changed the arithmetic by putting the strength of an ox into tillage. It is a simple implement, a forked branch or joined pieces of timber with a share that scratches a shallow furrow, and it does not turn the soil as the later mouldboard plough does; but drawn by a pair of oxen it can till in a day what would take a hoe a week.

Dating its origin is difficult because ards were wooden and rarely survive. The evidence is indirect. Andrew Sherratt, who in 1981 grouped the ard with the cart, the wool sheep and dairying as the secondary products revolution, placed all of them in the fourth millennium BCE in the Near East, spreading to Europe soon after. Later work has pushed some elements earlier. The most direct evidence is criss-cross ard marks preserved as dark lines in the subsoil beneath burial mounds, where the ancient ground surface was sealed. At Sarnowo in Poland such marks under a Funnel Beaker long barrow date to about 3600 BCE; similar furrows underlie mounds in Denmark, the Netherlands and Britain, including the South Street long barrow near Avebury, from the mid fourth millennium. In Mesopotamia the ard appears as a pictographic sign in the earliest Uruk tablets around 3200 BCE and in Egypt on predynastic objects, and it must have been in use somewhat earlier. Pathologies on the foot bones of cattle from fourth millennium sites in Europe and the Near East, indicating heavy draught work, and a rising proportion of castrated males, point in the same direction. Some scholars argue for cattle traction already in the fifth millennium on the evidence of these bones, and the date given here reflects the earliest secure evidence within this epoch, with the recognition that the implement is probably older.

The consequences unfolded over centuries. Households with oxen could cultivate more land than they could hoe, and land rather than labour became the scarce resource, which favoured those who owned draught animals and could pass them on. Larger fields required different layouts: long strips suited to turning a team, which reshaped landscapes across Europe and Asia. Ploughing also allowed cultivation of heavier and drier soils and of the vast loess and steppe margins beyond river valleys. In Mesopotamia the seeder plough of the third millennium, with a funnel that dropped seed into the furrow, integrated sowing with tillage. The ard was the ancestor of the heavy mouldboard plough that transformed northern European agriculture in the Middle Ages, and the association of ploughing with male labour and hoeing with female labour, noted across many societies, may date from its introduction.`,
    mechanism: `An ard consists of a beam, to which the draught animals are yoked, and a sole or share, a pointed piece of hardened wood or, later, stone or metal, set at an angle so that when dragged it cuts a shallow V-shaped groove. A handle at the rear lets the ploughman press the share into the soil and steer. The implement does not invert the soil; it loosens a strip, and fields were cross-ploughed at right angles to break the ground thoroughly, which is why preserved ard marks form a lattice. A pair of oxen, castrated bulls chosen for docility and strength, was harnessed by a yoke lashed to the horns or resting on the neck in front of the withers, and pulled the beam by a rope or pole. Seed was then broadcast by hand and covered by a second pass or by harrowing with brushwood.`,
    prerequisites: ['animal-domestication', 'fertile-crescent-agriculture', 'composite-tools'],
    consequences: ['wheel', 'heavy-plough', 'three-field-rotation'],
    figures: [
      { name: 'Late Neolithic farmers of Mesopotamia and the Funnel Beaker culture', role: 'Adopted ox traction and left the earliest ard evidence' },
      { name: 'Andrew Sherratt', role: 'Formulated the secondary products revolution model placing the ard in context' },
      { name: 'Haskel J. Greenfield', role: 'Reassessed the zooarchaeological evidence for early animal traction' },
    ],
    significance: 8,
    significanceJustification: 'The ard was the first application of animal power to production and multiplied the land a farming household could work, reshaping land tenure, landscapes and the sexual division of labour. Its date is uncertain, but its importance is not.',
    domains: ['agriculture', 'energy'],
    sources: [
      { author: 'Andrew Sherratt', title: 'Plough and pastoralism: aspects of the secondary products revolution', publisher: 'Pattern of the Past: Studies in Honour of David Clarke, Cambridge University Press', year: 1981 },
      { author: 'Haskel J. Greenfield', title: 'The Secondary Products Revolution: the past, the present and the future', publisher: 'World Archaeology', year: 2010, url: 'https://doi.org/10.1080/00438241003672971' },
      { author: 'Amy Bogaard', title: 'Neolithic Farming in Central Europe: An Archaeobotanical Study of Crop Husbandry Practices', publisher: 'Routledge', year: 2004 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'wheel',
    epochId: 'neolithic',
    date: { year: -3500, precision: 'century', display: 'c. 3500 BCE' },
    location: 'Mesopotamia, the Carpathian basin and the north European plain, nearly simultaneously',
    title: 'The wheel and the wheeled vehicle',
    summary: 'Within a few centuries around 3500 BCE, wheeled carts appear in Mesopotamian pictographs, on a pot from Bronocice in Poland and in graves across the Eurasian steppe, turning the rotation of a solid disc on an axle into the first land vehicle.',
    explanation: `The wheel is often called humanity's greatest invention, and it was a late one. Rotary motion had been used for millennia in the drill, the spindle and, from the early fourth millennium, the potter's wheel, but the wheeled vehicle required a combination of things: a disc strong enough to bear a load, an axle and bearing that let it turn with little friction, a body to sit on it, a domesticated animal to pull it and roads or open terrain flat enough to use it. All of these came together in the late fourth millennium BCE, and the evidence appears so nearly simultaneously across a wide area that the place of origin cannot be fixed.

The earliest pieces of evidence cluster between about 3600 and 3300 BCE. A clay pot from Bronocice in southern Poland, of the Funnel Beaker culture, is incised with a schematic four-wheeled wagon and dated by associated bone to about 3500 BCE. Small clay models of wagons and wheels come from Late Copper Age graves in the Carpathian basin, notably at Budakalász near Budapest, of the Baden culture around 3300 BCE. In Mesopotamia the archaic Uruk tablets of about 3300 to 3100 BCE include a pictograph of a sledge on wheels. From the Maikop culture of the North Caucasus and the Yamnaya culture of the Pontic steppe come actual wagons buried with their owners, from about 3300 BCE. The oldest surviving wheel, from the Ljubljana Marshes in Slovenia, is a two-plank ash disc with an oak axle dated to about 3150 BCE, slightly after this epoch ends. Jan Albert Bakker and colleagues, reviewing this evidence in 1999, concluded that the wheeled vehicle spread across Europe and the Near East within a few centuries of its invention, wherever it arose.

David Anthony has argued that the wheeled wagon transformed steppe life. It let herders carry water, food and tents deep into the grasslands and stay with their animals far from rivers, making possible the mobile pastoralism of the Yamnaya and, through their expansion, the spread of Indo-European languages across Eurasia. The word for wheel is reconstructable in Proto-Indo-European, which is itself evidence of the vehicle's age. In farming regions the ox cart carried harvest, manure, timber and building stone, and the first heavy loads were moved by rotation rather than dragging.

The wheel was not universal. In the Americas, where wheeled toys are known from Mesoamerica but there were no draught animals, and in Africa south of the Sahara, the wheel was not used for transport until the modern era, and in the Middle East it was largely abandoned for the camel in the first millennium CE. It was an invention for a world with oxen and roads. Its further history, from the spoked wheel and the chariot of about 2000 BCE to the water wheel and the gear train, is the history of rotary machinery.`,
    mechanism: `The earliest wheels were solid discs, either a single cross-section of a large trunk, which splits easily along the grain, or, more commonly, three planks joined edge to edge with dowels and cross-battens so that the grain ran across the wheel for strength. The wheel was pierced at the centre for the axle. In one arrangement the wheels were fixed to a rotating axle that turned in wooden brackets under the body; in the other the axle was fixed and the wheels turned on its ends, held on by pins, which gave more freedom and allowed the wheels to turn at different speeds on a corner. Lubrication with animal fat reduced friction at the bearing. A pole extended forward to a yoke on the necks of a pair of oxen, which pulled and, by leaning into the yoke, braked the vehicle.`,
    prerequisites: ['animal-domestication', 'plough', 'composite-tools', 'pottery'],
    consequences: ['chariot', 'water-wheel', 'canals'],
    figures: [
      { name: 'Funnel Beaker, Baden, Uruk and Yamnaya communities', role: 'Produced the earliest evidence of wheeled vehicles across Eurasia' },
      { name: 'Jan Albert Bakker, Janusz Kruk, Albert Lanting and Sarunas Milisauskas', role: 'Established the chronology of the earliest wheeled vehicles' },
      { name: 'David W. Anthony', role: 'Linked the wagon to steppe pastoralism and Indo-European expansion' },
    ],
    significance: 9,
    significanceJustification: 'The wheeled vehicle was the first land transport technology and the origin of rotary machinery, and its adoption reshaped the steppe, the farm and the city. It ranks below fire and agriculture only because large parts of the world flourished without it.',
    domains: ['transportation', 'manufacturing'],
    sources: [
      { author: 'Jan Albert Bakker, Janusz Kruk, Albert E. Lanting and Sarunas Milisauskas', title: 'The earliest evidence of wheeled vehicles in Europe and the Near East', publisher: 'Antiquity', year: 1999, url: 'https://doi.org/10.1017/S0003598X00065352' },
      { author: 'David W. Anthony', title: 'The Horse, the Wheel, and Language: How Bronze-Age Riders from the Eurasian Steppes Shaped the Modern World', publisher: 'Princeton University Press', year: 2007 },
      { author: 'Richard W. Bulliet', title: 'The Wheel: Inventions and Reinventions', publisher: 'Columbia University Press', year: 2016 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
];
