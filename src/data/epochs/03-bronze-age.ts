import type { Epoch, TechEventInput } from '../schema';

export const epoch: Epoch = {
  id: 'bronze-age',
  index: 3,
  name: 'Bronze Age and the first states',
  code: 'BRONZE AGE',
  startYear: -3500,
  endYear: -1200,
  span: '3500 to 1200 BCE',
  thesis: `Between about 3500 and 1200 BCE, the surplus that farming had made possible was gathered into cities, temples and palaces, and those institutions invented the instruments of administration: writing, arithmetic, standard measures, law and the calendar. The defining material was bronze, an alloy that required tin from hundreds or thousands of kilometres away, so the age of bronze was also the age of long-distance trade, sailing ships, and the merchants and kings who controlled them. Knowledge accumulated in a new way. Once accounts, star observations, remedies and legal rulings could be written down, they outlived the person who first made them and could be checked, copied and improved. The result was a set of interdependent states, from the Indus to the Aegean, that exchanged metals, glass, horses, chariots and scripts, and whose scribes produced mathematics, medicine and astronomy that later civilisations built on directly. The same interdependence made the system fragile. When tin routes, grain shipments and palace bureaucracies failed together around 1200 BCE, most of the eastern Mediterranean states fell within a generation. What survived the collapse, the alphabet, sexagesimal arithmetic, the 365-day year, sailing and the memory of written law, became the foundations of the classical world.`,
  enablingConditions: [
    `Irrigation agriculture on the Nile, Euphrates, Tigris and Indus flood plains produced grain surpluses large and predictable enough to feed full-time specialists: scribes, smiths, priests, potters and soldiers.`,
    `Copper smelting, established in the fifth and fourth millennia BCE, provided the furnace, crucible and mould technology that bronze alloying extended.`,
    `Clay tokens and seals had already trained administrators to represent goods with symbols, so writing emerged as an extension of accounting rather than a leap into the unknown.`,
    `River and coastal geography with predictable winds and currents made the sail an obvious tool and connected cities into trade networks.`,
    `Dense urban populations created problems of drainage, ration distribution and dispute resolution that rewarded standardised solutions.`,
  ],
  constraintsRemoved: [
    `Memory ceased to be the only store of knowledge: accounts, laws, observations and recipes could persist unchanged across generations and be audited.`,
    `Tools and weapons were no longer limited to stone, bone and soft copper; bronze gave hard, castable, repairable and recyclable edges and fittings.`,
    `Transport of bulk goods was no longer bounded by what animals could carry overland; sail moved tonnes of copper, timber and grain across seas.`,
    `Speed on land jumped from walking pace to a galloping horse team, making rapid communication and mobile warfare possible.`,
    `Trade between strangers became possible without personal trust because weights, prices and written contracts provided shared standards.`,
  ],
  secondOrderConsequences: [
    `Dependence on distant tin and copper concentrated wealth and power in whoever controlled trade routes, producing the first territorial states and empires.`,
    `Literacy created a scribal class and the school, and with them the first accumulation of abstract knowledge for its own sake: mathematics beyond surveying, astronomy beyond the calendar.`,
    `Bronze weaponry and the chariot made warfare capital-intensive, producing aristocracies of warrior charioteers and an arms trade between palaces.`,
    `Standardised value and written law allowed debt, interest and contracts, and with them chronic debt bondage that kings periodically cancelled by decree.`,
    `The tightly coupled network of palace economies meant that a shock in one place propagated, so the whole eastern Mediterranean system could collapse together.`,
  ],
  transition: `Within roughly fifty years around 1200 BCE, the Hittite empire vanished, the Mycenaean palaces burned, Ugarit was destroyed and never rebuilt, Egypt fought off sea-borne invaders and lost its Levantine holdings, and Babylonia and Assyria contracted. Explanations for this Late Bronze Age collapse invoke drought (supported by pollen and isotope evidence), earthquakes, the migrations of the groups Egyptian texts call the Sea Peoples, internal revolt against palace elites, the breakdown of the tin trade, and the vulnerability of chariot armies to new infantry tactics. Most scholars now favour a systems collapse: several stresses striking a network too interdependent to absorb them. What followed looked like decline, with writing lost in Greece for four centuries and long-distance trade shrinking, but it also broke the palace monopolies. Iron, harder to work but available almost everywhere, replaced scarce bronze; the alphabet spread through Phoenician traders freed from palace scribal traditions; small city-states and kingdoms, rather than a few great powers, experimented with coinage, law and citizen armies. The Iron Age and the classical world grew out of the wreckage.`,
  humanExperience: `For most people the Bronze Age meant living, for the first time in human history, under a state. A farmer in Sumer or Egypt no longer worked only for family and village; part of the harvest went to a temple or palace whose scribes recorded the amount on clay, and whose officials could summon labour for canals, walls or pyramids. Rations of barley and beer, measured in standard bowls, were the wage for that labour. The city itself was new: mud-brick houses packed along narrow streets, tens of thousands of strangers, smoke from kilns and furnaces, markets where a merchant weighed silver on a balance, and monumental temples visible from the fields.

Everyday tools changed more slowly than the grand narrative suggests. Stone sickles and flint blades remained common for centuries because bronze was expensive; a bronze axe or razor was a mark of status. Most people never learned to write and never needed to, but they lived with the consequences of writing: contracts they could not read, debts recorded against them, a census that counted them. Legal codes promised the weak protection from the strong and fixed the price of a surgeon's fee or an ox's hire.

Health was mixed. Cities brought infection, and skeletons show hard labour, dental disease and short lives. Yet Indus residents bathed daily beside running drains, Egyptian physicians set fractures and dressed wounds with honey, and the calendar told farmers when the flood would come. The horizon widened: a villager might see a chariot, a ship from a coast a thousand kilometres away, a glass bead the colour of lapis lazuli, or an inscription in a foreign script. And when the palaces fell around 1200 BCE, that villager's descendants found themselves in a smaller, poorer and in some ways freer world.`,
  minEvents: 12,
  sources: [
    { author: 'Marc Van De Mieroop', title: 'A History of the Ancient Near East, ca. 3000-323 BC', publisher: 'Blackwell', year: 2004 },
    { author: 'Eric H. Cline', title: '1177 B.C.: The Year Civilization Collapsed', publisher: 'Princeton University Press', year: 2014 },
    { author: 'Kristian Kristiansen and Thomas B. Larsson', title: 'The Rise of Bronze Age Society: Travels, Transmissions and Transformations', publisher: 'Cambridge University Press', year: 2005 },
    { author: 'Barry J. Kemp', title: 'Ancient Egypt: Anatomy of a Civilization', publisher: 'Routledge', year: 1989 },
    { author: 'Jonathan Mark Kenoyer', title: 'Ancient Cities of the Indus Valley Civilization', publisher: 'Oxford University Press', year: 1998 },
  ],
  lastReviewed: '2026-09-04',
};

export const events: TechEventInput[] = [
  {
    id: 'bronze-metallurgy',
    epochId: 'bronze-age',
    date: { year: -3300, precision: 'century', display: 'c. 3300 BCE' },
    location: 'Mesopotamia and Anatolia, with a contested earlier horizon in the Balkans',
    title: 'Tin bronze metallurgy',
    summary: `Smiths learned to alloy copper with about one part in ten of tin, producing a metal hard enough for reliable tools and weapons and creating a demand for tin that stretched trade routes across Eurasia.`,
    explanation: `Bronze is copper hardened with a second metal, usually tin at roughly one part in ten. Copper alone had been smelted since the fifth millennium BCE, but it was soft, cast poorly and would not hold an edge. Early smiths found that some copper ores, those naturally rich in arsenic, produced a harder and more castable metal, and arsenical copper dominated the fourth millennium. Deliberate tin bronze appears in the Near East around 3300 BCE and becomes common in Mesopotamia and Anatolia during the third millennium. A tin bronze foil from Plocnik in Serbia, dated to around 4650 BCE, has been argued to show an even earlier and separate experiment with tin-bearing ores, though whether it represents a sustained tradition remains disputed.

Tin bronze pours into moulds cleanly, resists corrosion, and can be hammered to a hard cutting edge, which made it the first material good enough for tools, weapons and fittings at scale. The catch was supply. Copper was widely available, but tin was rare, with major Bronze Age sources in Afghanistan, Anatolia, Iberia, Cornwall and the Erzgebirge. Making bronze in Mesopotamia therefore required trade routes stretching hundreds or thousands of kilometres. The Old Assyrian merchant archives from Kultepe, around 1900 BCE, record donkey caravans carrying tin from the east into Anatolia in exchange for silver, and the Uluburun shipwreck off Turkey, around 1320 BCE, carried about ten tonnes of copper ingots and a tonne of tin.

The effects were political as much as technical. Because tin had to be imported and copper smelted in bulk, bronze concentrated in the hands of those who could organise long-distance exchange: temples, palaces and kings. Bronze weapons and armour gave those elites a military advantage that helped states form and expand. Bronze also created a recyclable store of value; scrap hoards buried across Europe show metal being treated as wealth and possibly as a medium of exchange.

The evidence includes excavated furnaces, crucibles and moulds, lead-isotope and trace-element analysis that ties finished objects to ore sources, and the textual record of tin prices and shipments. The dependence on fragile tin routes is one reason the Late Bronze Age collapse hit metal supply so hard and pushed smiths toward iron, which was more difficult to work but available almost everywhere.`,
    mechanism: `Copper ore, often malachite or roasted chalcopyrite, was reduced in a charcoal-fired furnace at about 1100 degrees Celsius, with air forced in by blowpipes or bellows so that carbon monoxide stripped oxygen from the ore. The resulting copper was refined and then alloyed with tin, either by co-smelting copper and cassiterite ores or by adding metallic tin to molten copper. Around ten percent tin lowers the melting point, makes the melt flow freely into stone, clay or lost-wax moulds, and produces a metal roughly twice as hard as pure copper once cold-hammered. Higher tin content made harder but more brittle metal, so smiths adjusted ratios for mirrors, bells, blades or axes, and annealed work-hardened pieces to restore ductility.`,
    prerequisites: ['copper-smelting', 'controlled-fire'],
    consequences: ['chariot', 'standardized-weights', 'glass', 'nebra-sky-disc', 'iron-smelting'],
    figures: [
      { name: 'Old Assyrian merchants of Kultepe', role: 'Documented the tin trade in their archives' },
      { name: 'Miljana Radivojevic', role: 'Archaeometallurgist who analysed the earliest tin bronzes' },
    ],
    significance: 9,
    significanceJustification: `Bronze gave humanity its first hard, castable metal and defined an entire era of tools, weapons and trade. Its dependence on rare tin shaped the political economy of the first states and the fragility that ended them.`,
    domains: ['materials', 'manufacturing', 'weapons-security'],
    sources: [
      { author: 'Miljana Radivojevic, Thilo Rehren, Julka Kuzmanovic-Cvetkovic, Marija Jovanovic and J. Peter Northover', title: 'Tainted ores and the rise of tin bronzes in Eurasia, c. 6500 years ago', publisher: 'Antiquity', year: 2013, url: 'https://doi.org/10.1017/S0003598X0004984X' },
      { author: 'R. F. Tylecote', title: 'A History of Metallurgy', publisher: 'Institute of Materials', year: 1992 },
      { author: 'Kristian Kristiansen and Thomas B. Larsson', title: 'The Rise of Bronze Age Society: Travels, Transmissions and Transformations', publisher: 'Cambridge University Press', year: 2005 },
      { author: 'Cemal Pulak', title: 'The Uluburun Shipwreck: An Overview', publisher: 'International Journal of Nautical Archaeology', year: 1998 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'cuneiform',
    epochId: 'bronze-age',
    date: { year: -3200, precision: 'century', display: 'c. 3200 BCE' },
    location: 'Uruk, southern Mesopotamia (Iraq)',
    title: 'Cuneiform writing',
    summary: `Temple administrators at Uruk began pressing signs into clay tablets to record deliveries and rations, creating the first writing system and a script that would serve a dozen languages for three thousand years.`,
    explanation: `The oldest known writing system emerged in the city of Uruk in southern Mesopotamia around 3200 BCE. Roughly five thousand clay tablets from the Eanna precinct of Uruk, scratched with a reed stylus, record deliveries of barley, beer, textiles and livestock, along with the names and titles of the officials responsible. They were not literature or letters. They were accounts, produced by an administration managing thousands of dependent workers and the rations that fed them.

The system did not appear from nothing. For several thousand years, Near Eastern communities had used small clay tokens in geometric shapes to count goods. By the late fourth millennium, tokens were sealed inside hollow clay balls, and their shapes were impressed on the outside to show the contents. Denise Schmandt-Besserat argued that flat tablets bearing only the impressions, and then incised pictures alongside numerical marks, grew directly from this practice. The earliest tablets are indeed dominated by numbers and commodities, and the sign for sheep, a circle with a cross, matches an earlier token shape.

Over the following centuries the pictorial signs became abstract wedge patterns, since a reed pressed into wet clay makes a wedge more naturally than a curve. More importantly, scribes began to use signs for their sound values as well as their meanings, the rebus principle, which allowed personal names, grammatical endings and eventually whole sentences to be written. By 2600 BCE cuneiform could record Sumerian speech fully; it was later adapted for Akkadian, Elamite, Hittite, Hurrian and Ugaritic, and remained in use until the first century CE.

Writing changed what a society could do. Accounts could be audited across years; contracts and laws could be fixed; astronomical observations could be accumulated beyond one lifetime; and stories such as Gilgamesh could be preserved word for word. It also created the scribe, a specialist whose training in the edubba, the tablet house, was a route into state service. Literacy was rare, but the texts it produced ran the palace and temple economies.

The evidence is unusually good because clay survives. Hundreds of thousands of tablets have been recovered, and the archaic Uruk corpus has been edited and analysed sign by sign, showing how numerical systems, sign lists and administrative formats developed. The decipherment of cuneiform in the nineteenth century, using the trilingual Behistun inscription, allowed this record to be read.`,
    mechanism: `A scribe took a lump of cleaned clay, formed it into a flat or pillow-shaped tablet, and pressed a reed stylus with a triangular tip into the surface while it was still damp. Each press left a wedge (Latin cuneus, hence cuneiform), and combinations of vertical, horizontal and oblique wedges formed several hundred signs. Numbers used separate sexagesimal and decimal systems depending on what was being counted. Signs could stand for a word (logogram), a syllable (phonogram) or a category marker (determinative) that was not pronounced. Finished tablets were sun-dried, and archive tablets that were later caught in a fire were baked hard, which is why so many survive. Tablets could be authenticated with cylinder seals rolled across the clay as a signature.`,
    prerequisites: ['proto-writing-tokens', 'pottery'],
    consequences: ['mesopotamian-mathematics', 'standardized-weights', 'alphabet'],
    figures: [
      { name: 'Uruk temple administrators', role: 'First users' },
      { name: 'Denise Schmandt-Besserat', role: 'Established the token origin theory' },
      { name: 'Hans Nissen, Peter Damerow and Robert Englund', role: 'Edited and interpreted the archaic Uruk corpus' },
    ],
    significance: 10,
    significanceJustification: `Writing is the technology that made every later technology cumulative. Cuneiform was the first system able to record language fully, and it carried the administration, law, literature and science of the Near East for three millennia.`,
    domains: ['information', 'communication'],
    sources: [
      { author: 'Denise Schmandt-Besserat', title: 'Before Writing, Volume 1: From Counting to Cuneiform', publisher: 'University of Texas Press', year: 1992 },
      { author: 'Hans J. Nissen, Peter Damerow and Robert K. Englund', title: 'Archaic Bookkeeping: Early Writing and Techniques of Economic Administration in the Ancient Near East', publisher: 'University of Chicago Press', year: 1993 },
      { author: 'Christopher Woods (editor)', title: 'Visible Language: Inventions of Writing in the Ancient Middle East and Beyond', publisher: 'Oriental Institute of the University of Chicago', year: 2010 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'hieroglyphs',
    epochId: 'bronze-age',
    date: { year: -3200, precision: 'century', display: 'c. 3200 BCE' },
    location: 'Abydos, Upper Egypt',
    title: 'Egyptian hieroglyphic writing',
    summary: `Bone labels and inked jars from a royal tomb at Abydos show Egyptians writing with phonetic signs around 3200 BCE, the start of a script that lasted until 394 CE and gave rise to the alphabet.`,
    explanation: `Egyptian hieroglyphic writing appears at almost the same moment as cuneiform, around 3250 to 3200 BCE, and the relationship between the two is still debated. The earliest examples come from tomb U-j at Abydos in Upper Egypt, excavated by Gunter Dreyer in the 1980s and 1990s. The tomb, belonging to a ruler of the late Predynastic period, contained about 160 small bone and ivory labels, once attached to grave goods, bearing short groups of signs that record quantities, place names and institutions. Ink inscriptions on pottery jars in the same tomb name estates or delivery sources.

Some of these labels use signs for their sound values rather than their pictorial meaning, which means the phonetic principle, the key step from picture to script, was present from the beginning in Egypt. Within a few centuries, by the reign of Narmer and the First Dynasty around 3100 BCE, hieroglyphs were being used on ceremonial palettes, seals and royal monuments to name kings and record events. By the Old Kingdom, around 2600 BCE, the system was complete: several hundred signs combining single-consonant phonograms, multi-consonant signs, logograms and determinatives, with vowels left unwritten.

Because monumental hieroglyphs were slow to carve, scribes developed a cursive form, hieratic, written with a rush brush and ink on papyrus, ostraca and wood. Hieratic was the everyday script of accounts, letters, medical treatises and mathematical exercises. Later, in the first millennium BCE, an even more abbreviated demotic script followed. Hieroglyphs remained the sacred script of temples until the last known inscription at Philae in 394 CE.

Whether Egypt borrowed the idea of writing from Mesopotamia or invented it independently is unresolved. The Abydos labels are as early as any Uruk tablet, the sign repertoire is entirely Egyptian, and the underlying principles differ, which favours independent invention or at most the diffusion of a vague idea that marks could stand for speech. The state that unified the Nile Valley around 3100 BCE used writing to tax, to record the annual flood height, to label goods and to fix the names of kings for eternity.

The evidence comprises the Abydos labels and jar inscriptions, radiocarbon dated to roughly 3320 to 3150 BCE, the early dynastic palettes and labels, and the vast later corpus that Jean-Francois Champollion deciphered in 1822 using the Rosetta Stone.`,
    mechanism: `Hieroglyphs mix three sign types. Phonograms represent one, two or three consonants (the sign of a mouth stands for r); logograms stand for whole words; and determinatives, placed at the end of a word, indicate its semantic class without being pronounced. Vowels are omitted, so the reader supplies them from context. Signs face the direction from which the text is read and could be arranged in rows or columns, grouped into tidy squares. Monumental texts were carved in raised or sunk relief and then painted. For daily use, scribes wrote hieratic with a reed brush dipped in carbon black or red ochre ink on papyrus, a writing surface made by pressing crossed strips of the pith of the papyrus plant into sheets and joining them into rolls.`,
    prerequisites: ['pottery', 'cave-art-information-storage'],
    consequences: ['egyptian-astronomy-calendar', 'alphabet', 'egyptian-medical-papyri'],
    figures: [
      { name: 'Gunter Dreyer', role: 'Excavated tomb U-j at Abydos and published the earliest labels' },
      { name: 'Jean-Francois Champollion', role: 'Deciphered hieroglyphs in 1822' },
    ],
    significance: 9,
    significanceJustification: `Hieroglyphs were one of the two earliest full writing systems and the direct ancestor of the alphabet. Through hieratic they carried Egyptian medicine, mathematics and administration for three thousand years.`,
    domains: ['information', 'communication'],
    sources: [
      { author: 'Gunter Dreyer', title: 'Umm el-Qaab I: Das pradynastische Konigsgrab U-j und seine fruhen Schriftzeugnisse', publisher: 'Philipp von Zabern', year: 1998 },
      { author: 'Christopher Woods (editor)', title: 'Visible Language: Inventions of Writing in the Ancient Middle East and Beyond', publisher: 'Oriental Institute of the University of Chicago', year: 2010 },
      { author: 'Andrew Robinson', title: 'The Story of Writing: Alphabets, Hieroglyphs and Pictograms', publisher: 'Thames and Hudson', year: 1995 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'sailing-ship',
    epochId: 'bronze-age',
    date: { year: -3100, precision: 'century', display: 'c. 3100 BCE' },
    location: 'Nile Valley, Egypt',
    title: 'The sailing ship',
    summary: `Egyptian boats carrying a square sail are depicted by about 3100 BCE, and within a few centuries sea-going sailing ships were moving cedar, copper and grain across the eastern Mediterranean and Red Sea.`,
    explanation: `The earliest secure evidence for a sail is Egyptian. A painted jar of the Naqada II period, roughly 3300 to 3100 BCE, shows a boat with a square sail on a mast set well forward, and by the Old Kingdom, after 2600 BCE, tomb reliefs and models depict wooden river ships with a tall bipod mast, a square sail and steering oars. Rock art and clay models from Mesopotamia and the Gulf suggest sails there too, and Egyptian texts of the mid third millennium record ships bringing cedar from Byblos on the Lebanese coast and voyages down the Red Sea to the land of Punt.

The Nile made the sail obvious. The river flows north and the prevailing wind blows south, so a boat could drift downstream with the current and sail upstream with the wind. The Egyptian hieroglyph for travelling south shows a boat with a sail; the sign for travelling north shows a boat without one. Once the principle was understood on the river, it was applied to the sea. Sea-going hulls needed to be stronger, and Egyptian shipwrights built them from short planks of cedar or acacia joined edge to edge with mortise and tenon joints and lashed with rope, with a hogging truss, a tensioned rope running from bow to stern, to keep the hull from sagging in waves.

The consequences ran through the whole Bronze Age economy. Sail-driven ships moved bulk cargoes at a cost per tonne that no donkey caravan could match. Cedar for temples and coffins, copper from Cyprus, tin from far to the east, wine, oil, grain and glass ingots all travelled by sea. The Uluburun wreck, sunk off southern Turkey around 1320 BCE, carried goods from at least seven cultures. Minoan Crete and later the Mycenaeans built maritime networks across the Aegean, and Phoenician sailors of the first millennium carried the alphabet with them.

The evidence includes the Naqada depictions, the full-size funerary ship of Khufu buried beside the Great Pyramid around 2560 BCE, which is 43 metres long and shows the joinery in detail, the Old Kingdom reliefs at Saqqara and in the temple of Sahure, the Punt reliefs of Hatshepsut at Deir el-Bahari from around 1470 BCE, and the excavated Uluburun and Cape Gelidonya wrecks. Square sails could only run before the wind or slightly across it; sailing against it awaited the lateen rig and, much later, the caravel.`,
    mechanism: `A Bronze Age sail was a rectangle of linen or woven reed matting hung from a horizontal yard on a mast stepped in the hull. Lines from the yard ends, the braces, let the crew swing it to catch wind from astern or the quarter, and lines from the lower corners, the sheets, controlled its set. With the wind behind, the sail pushed the hull forward; with the wind on the beam it could still drive the ship, provided the hull shape resisted sideways drift. Steering used one or more large oars at the stern. Early Egyptian hulls lacked a keel, so a rope truss stiffened them at sea. Oars remained essential for calm water, manoeuvring in harbour and heading into the wind.`,
    prerequisites: ['weaving-loom', 'copper-smelting'],
    consequences: ['glass', 'alphabet', 'library-of-alexandria', 'caravel-navigation'],
    figures: [
      { name: 'Egyptian shipwrights of the Old Kingdom', role: 'Built the first documented sea-going sailing ships' },
      { name: 'Lionel Casson', role: 'Historian who synthesised the evidence for ancient seafaring' },
    ],
    significance: 9,
    significanceJustification: `The sail was the first use of a natural energy source other than muscle for transport, and it made bulk trade across water economical. Every later maritime economy, from Phoenicia to the age of exploration, descends from it.`,
    domains: ['transportation', 'energy'],
    sources: [
      { author: 'Lionel Casson', title: 'Ships and Seamanship in the Ancient World', publisher: 'Princeton University Press', year: 1971 },
      { author: 'Shelley Wachsmann', title: 'Seagoing Ships and Seamanship in the Bronze Age Levant', publisher: 'Texas A&M University Press', year: 1998 },
      { author: 'Cheryl A. Ward', title: 'Sacred and Secular: Ancient Egyptian Ships and Boats', publisher: 'University of Pennsylvania Museum', year: 2000 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'potters-wheel',
    epochId: 'bronze-age',
    date: { year: -3100, precision: 'century', display: 'c. 3100 BCE' },
    location: 'Southern Mesopotamia (Uruk) and the Levant',
    title: 'The fast potter’s wheel',
    summary: `A heavy spinning disc that stored enough momentum for a potter to throw a vessel in minutes turned pottery into a specialist urban craft and was the first machine to exploit rotational inertia.`,
    explanation: `The potter's wheel is the first machine that used stored rotational energy to shape a material. Its history is harder to pin down than it looks, because a rotating platform can be used in several ways. Neolithic potters had long turned pots on mats or shallow dishes; by the fifth millennium in Mesopotamia they used a slow turntable, or tournette, rotated by hand between shaping strokes. The true fast wheel, a heavy disc spun to speed and kept turning by its own momentum while the potter lifts a vessel from a centred lump of clay, appears with the growth of the first cities. Wheel-fashioned pottery is widespread in Uruk-period Mesopotamia in the late fourth millennium, and the analyses of Valentine Roux and colleagues show that wheel techniques spread piecemeal, with true throwing on the fast wheel becoming general in the southern Levant only during the third millennium.

What drove it was demand. Uruk administrators handing out rations to thousands of labourers needed vast numbers of standard bowls, and the crude, mass-produced bevelled-rim bowls of the period are found by the hundreds of thousands. Throwing on a fast wheel let a skilled potter make a vessel in a minute or two rather than building it up by coil and hand, and it produced thinner, more even walls that fired reliably. Pottery became a specialist urban craft carried out in workshops with kilns rather than a household task, one of the earliest examples of full-time craft specialisation.

The wheel also mattered as a mechanism. A heavy stone or clay flywheel on a pivot, needing a bearing that ran true with little friction, embodied engineering knowledge that later fed into vehicle wheels, drills and lathes. Some scholars think the potter's wheel and the cart wheel emerged from the same pool of woodworking and bearing skills in the fourth millennium, though the direction of influence is unknown.

The evidence is indirect but strong: rotational striations and rilling on vessel interiors, the uniformity of vessel walls, the alignment of clay particles visible under a microscope, and a small number of surviving wheel heads, including stone discs from Ur and pivoted wheels from the Levant. A pictorial record of a potter seated at a wheel appears in Egyptian tombs of the Old Kingdom, and the Egyptian god Khnum was shown forming humans on a potter's wheel.`,
    mechanism: `A fast wheel consists of a heavy disc of fired clay, stone or wood mounted on a vertical axle that turns in a socketed bearing, often lubricated with water or fat. The potter, or an assistant, spins the disc by hand or with a stick, and its mass keeps it turning for long enough to shape a pot. A ball of wedged clay is thrown onto the centre, pressed until it runs true, opened with the thumbs, and drawn upward between the fingers into a wall while the rotation keeps the form symmetrical. The finished pot is cut free with a string. Later wheels added a second, larger disc below, kicked with the foot, so the potter's hands stayed free throughout.`,
    prerequisites: ['pottery', 'wheel'],
    consequences: ['glass', 'water-wheel'],
    figures: [
      { name: 'Uruk-period workshop potters', role: 'Earliest large-scale users' },
      { name: 'Valentine Roux', role: 'Archaeologist who established methods for identifying wheel-fashioning techniques' },
    ],
    significance: 6,
    significanceJustification: `The fast wheel created the first mass-production craft and the first flywheel, a mechanism that reappears in every later rotating machine. Its exact origin is uncertain but its role in urban specialisation is clear.`,
    domains: ['manufacturing', 'materials'],
    sources: [
      { author: 'Valentine Roux and Marie-Agnes Courty', title: 'Identification of Wheel-fashioning Methods: Technological Analysis of 4th-3rd Millennium BC Oriental Ceramics', publisher: 'Journal of Archaeological Science', year: 1998, url: 'https://doi.org/10.1006/jasc.1997.0219' },
      { author: 'Valentine Roux and Pierre de Miroschedji', title: 'Revisiting the History of the Potter’s Wheel in the Southern Levant', publisher: 'Levant', year: 2009 },
      { author: 'Prudence M. Rice', title: 'Pottery Analysis: A Sourcebook', publisher: 'University of Chicago Press', year: 1987 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'standardized-weights',
    epochId: 'bronze-age',
    date: { year: -2600, precision: 'century', display: 'c. 2600 BCE' },
    location: 'Indus cities (Harappa, Mohenjo-daro) and Sumerian Mesopotamia',
    title: 'Standardized weights and measures',
    summary: `Precisely cut stone weights on the shekel and mina system in Mesopotamia and a binary system in the Indus made value measurable and comparable across cities, the precondition for markets and money.`,
    explanation: `A standardised weight is an agreement made solid: everyone who trades with it accepts that a particular lump of stone means a particular amount of value. Such systems appear in the middle of the third millennium in two places at once. In Mesopotamia, the Sumerian system of the shekel (about 8.4 grams), the mina of 60 shekels and the talent of 60 minas was in use by the Early Dynastic period, around 2600 BCE, and remained the basis of Near Eastern metrology for two thousand years. In the Indus civilisation, precisely cut cubes of banded chert from Harappa and Mohenjo-daro follow a binary progression (1, 2, 4, 8, 16, 32, 64) from a base unit of about 0.87 grams, then a decimal progression for larger values. Indus weights are so consistent that measured examples cluster within a few percent across cities hundreds of kilometres apart.

Weights answered a specific problem. Once metal, especially silver and copper, became the medium in which prices, wages, fines and rents were expressed, people needed to measure it precisely and repeatably. In Mesopotamia, silver was weighed out by the shekel to pay for barley, land or a slave, and interest was calculated in shekels per mina. The Code of Hammurabi fixes prices and penalties in weighed silver, and merchants' letters from Kultepe complain about weight standards that differed between cities. Balance pans and weights are found in graves, and cheating with light weights was a stock complaint of prophets and rulers.

The wider effect was to make value portable and comparable. Recent metrological work by Nicola Ialongo, Lorenz Rahmstorf and others shows that weight units across Western Eurasia, from the Indus to Britain, converged during the Bronze Age through repeated exchange, without any central authority imposing them. That convergence is one of the clearest archaeological signatures of a market network. Weights also fed mathematics: the sexagesimal arithmetic of Mesopotamian scribes grew partly from working with fractions of the mina.

The evidence includes thousands of surviving weights, often marked with their value, balance beams and pans, and cuneiform records of transactions and standard-setting decrees such as the claim in the prologue of the laws of Ur-Nammu to have established fair weights. Indus weights are interpreted without texts, since the Indus script is unread, but their distribution in gateways and market areas suggests state control of trade and possibly taxation.`,
    mechanism: `Weighing used an equal-arm balance: a beam, usually of wood or bronze, suspended at its centre with a pan hung from each end. The object to be valued went in one pan and standard weights in the other until the beam hung level. Precision depended on the symmetry of the beam, the friction of its pivot and the accuracy of the weights. Weights were made from dense, hard stones such as haematite or chert that resist wear, shaped into cubes, spheres, ducks or barrels, and ground to mass by trial against a master set. Systems were built so that units nested, sixty shekels in a mina in Mesopotamia and binary doublings in the Indus, which let a small set of weights cover any quantity by combination.`,
    prerequisites: ['cuneiform', 'bronze-metallurgy'],
    consequences: ['mesopotamian-mathematics', 'coinage'],
    figures: [
      { name: 'Ur-Nammu of Ur', role: 'Claimed to have standardised weights and measures around 2100 BCE' },
      { name: 'Lorenz Rahmstorf', role: 'Archaeologist of Bronze Age weighing systems' },
    ],
    significance: 8,
    significanceJustification: `Standard weights made price, wage and debt quantifiable and allowed trade between strangers across a continent. Coinage, accounting and quantitative law all rest on them.`,
    domains: ['information'],
    sources: [
      { author: 'Nicola Ialongo, Raphael Hermann and Lorenz Rahmstorf', title: 'Bronze Age weight systems as a measure of market integration in Western Eurasia', publisher: 'Proceedings of the National Academy of Sciences', year: 2021, url: 'https://doi.org/10.1073/pnas.2105873118' },
      { author: 'Lorenz Rahmstorf', title: 'The concept of weighing during the Bronze Age in the Aegean, the Near East and Europe (in The Archaeology of Measurement, edited by Iain Morley and Colin Renfrew)', publisher: 'Cambridge University Press', year: 2010 },
      { author: 'Jonathan Mark Kenoyer', title: 'Ancient Cities of the Indus Valley Civilization', publisher: 'Oxford University Press', year: 1998 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'indus-sanitation',
    epochId: 'bronze-age',
    date: { year: -2500, precision: 'century', display: 'c. 2500 BCE' },
    location: 'Mohenjo-daro, Sindh (Pakistan)',
    title: 'Indus urban sanitation',
    summary: `Mohenjo-daro gave ordinary houses bathing platforms, latrines and covered brick street drains fed by hundreds of wells, a level of urban sanitation unmatched until Roman times.`,
    explanation: `Mohenjo-daro, on the Indus in what is now Sindh, Pakistan, was a city of perhaps 40,000 people at its height around 2500 BCE. It is the earliest city anywhere known to have provided drainage and water supply for ordinary houses rather than only for temples or palaces. Excavations from the 1920s onward, and the later architectural surveys of Michael Jansen, revealed a system that no other Bronze Age city matched and few cities matched before the nineteenth century.

Almost every house had a bathing platform, a small floor of fitted fired bricks with a slight slope, from which water ran through a drain in the wall into a covered channel in the street. Many houses had a latrine, sometimes a seat over a chute that emptied into a soak pit or into the street drain. The street drains were built of fired brick, mortared with gypsum, covered with brick slabs or stone, and provided with inspection openings and settling pits where solids could be removed. Larger drains, tall enough to walk through, ran under main streets. The slopes were graded so that waste moved by gravity toward the river or open ground beyond the city.

Water came from wells lined with wedge-shaped fired bricks; around 700 have been identified at Mohenjo-daro, roughly one for every three houses, an extraordinary density. The Great Bath, a watertight tank 12 metres by 7 metres lined with brick and sealed with bitumen, sat on the citadel mound and is thought to have served ritual bathing.

The motives were probably layered. The Indus cities were built on flood plains, and drainage protected foundations. Cleanliness clearly carried cultural weight, judging from the prominence of the Great Bath and the ubiquity of household bathing platforms. Whether the builders understood a link between waste and disease is unknown, but the system would have reduced exposure to water-borne pathogens whatever its purpose.

Because the Indus script is undeciphered and the cities show no obvious palaces or royal tombs, we do not know who organised this infrastructure. Its uniformity, along with standardised brick proportions of roughly 1 to 2 to 4 and standardised weights, points to strong civic coordination. When the Indus cities declined after about 1900 BCE, the tradition of urban sanitation largely lapsed in South Asia and was not matched until Roman engineering in the Mediterranean.

The evidence is the excavated architecture itself, published by John Marshall in 1931 and re-examined in detail by Jansen and later teams, along with comparative surveys of Harappa, Dholavira and Lothal, which show similar features.`,
    mechanism: `The drains worked by gravity and careful brick construction. Fired bricks, far more water-resistant than mud brick, were laid in gypsum or mud mortar to form U-shaped channels with a smooth floor graded to a consistent fall. Covers of brick or stone kept out debris and smell while inspection gaps allowed cleaning. Where a house drain met a street drain, or where the gradient changed, a brick sump caught sediment so that only liquid flowed on. Vertical terracotta pipes carried water from upper floors, and latrine chutes discharged either into the drain or into a soak pit that let liquids percolate into the ground. Wells were built of tapered bricks that locked into a self-supporting cylinder able to resist the pressure of the surrounding soil.`,
    prerequisites: ['mud-brick', 'irrigation'],
    consequences: ['roman-aqueducts'],
    figures: [
      { name: 'John Marshall', role: 'Directed the first excavations and published the site in 1931' },
      { name: 'Michael Jansen', role: 'Architectural historian who documented the water and drainage system' },
    ],
    significance: 7,
    significanceJustification: `It is the first known city-wide public health infrastructure, showing what civic coordination could achieve in the Bronze Age. Its lapse after the Indus decline shows how easily such knowledge could be lost.`,
    domains: ['biology-medicine', 'materials'],
    sources: [
      { author: 'Michael Jansen', title: 'Water supply and sewage disposal at Mohenjo-Daro', publisher: 'World Archaeology', year: 1989, url: 'https://doi.org/10.1080/00438243.1989.9980103' },
      { author: 'Jonathan Mark Kenoyer', title: 'Ancient Cities of the Indus Valley Civilization', publisher: 'Oxford University Press', year: 1998 },
      { author: 'Gregory L. Possehl', title: 'The Indus Civilization: A Contemporary Perspective', publisher: 'AltaMira Press', year: 2002 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'egyptian-astronomy-calendar',
    epochId: 'bronze-age',
    date: { year: -2700, precision: 'estimated', display: 'c. 3rd millennium BCE' },
    location: 'Nile Valley, Egypt',
    title: 'Egyptian astronomy and the 365-day calendar',
    summary: `Egypt created a 365-day civil calendar of twelve thirty-day months plus five extra days, tied to the heliacal rising of Sirius and the Nile flood, and divided day and night into twelve hours each.`,
    explanation: `Egypt produced the first calendar that ran on arithmetic rather than on watching the sky each month. The civil calendar had twelve months of thirty days plus five added days, 365 days in all, with no leap year. It was in place by the Old Kingdom and probably earlier; dates by regnal year, month and day appear in Fourth Dynasty records around 2600 BCE, and some scholars place its creation as early as 2800 BCE, though no document records the moment of adoption.

The calendar began from an observation. Each year in early summer, Sirius, the brightest star, reappeared in the dawn sky after about seventy days of invisibility, and its heliacal rising coincided closely with the start of the Nile flood, the event on which Egyptian agriculture depended. The year was divided into three seasons, inundation, emergence and harvest, that tracked the river. But because the civil year was a quarter day short of the solar year, the calendar drifted by one day every four years and made a full circuit against the seasons in about 1460 years. The Egyptians knew this and lived with it, running a parallel lunar calendar for religious festivals. The drift is what makes the civil calendar so useful to modern historians: when a text records the rising of Sirius on a particular civil date, the astronomical date can be calculated.

Alongside the calendar, Egyptians divided the night into hours using the decans, thirty-six stars or star groups that rose at roughly ten-day intervals through the year. Tables of decans, the diagonal star clocks painted inside coffin lids from around 2100 BCE, let a priest tell the hour from which decan was rising. Daylight hours were measured with shadow clocks, and by the New Kingdom with water clocks, the earliest surviving example from the reign of Amenhotep III around 1380 BCE. The division of day and night into twelve hours each is Egyptian, and it survives in every clock face.

The unvarying 365-day year was later adopted by Greek astronomers, including Ptolemy, as the standard for calculating planetary positions, precisely because it had no irregular months, and Copernicus was still using it in the sixteenth century. The reform of Julius Caesar in 46 BCE took the Egyptian year and added the leap day on the advice of the Alexandrian astronomer Sosigenes.

The evidence comes from dated administrative and monumental texts, the coffin lid star tables, the astronomical ceilings of tombs such as that of Senenmut, the water clock from Karnak, and the mathematical reconstruction of the Sothic cycle first proposed in the nineteenth century, on which much Egyptian chronology depends and which remains debated in detail.`,
    mechanism: `The civil year was simply counted: twelve months of thirty days, grouped into three seasons of four months, followed by five epagomenal days treated as the birthdays of gods. Days were numbered within the month, and the year by the reign of the king. Priests tracked Sirius by watching the eastern horizon just before sunrise to spot its first reappearance. Night hours were read from star tables: each column listed the decans rising through one ten-day period, and the observer found the hour by the decan crossing a fixed line. Shadow clocks used a horizontal bar with a raised crosspiece; the length of the shadow along a graduated scale gave the hour. Water clocks were stone bowls with a small outlet hole, marked inside with scales for different months, since night length varied through the year.`,
    prerequisites: ['hieroglyphs', 'irrigation', 'megalithic-construction'],
    consequences: ['ptolemaic-astronomy', 'copernican-heliocentrism', 'mechanical-clock'],
    figures: [
      { name: 'Egyptian temple astronomer-priests', role: 'Observed Sirius and maintained the star tables' },
      { name: 'Richard A. Parker', role: 'Egyptologist who reconstructed the calendars' },
      { name: 'Otto Neugebauer', role: 'Historian of ancient astronomy who edited the astronomical texts' },
    ],
    significance: 8,
    significanceJustification: `The 365-day year, the 24-hour day and the decan star clocks are Egyptian inventions still embedded in timekeeping. The civil calendar served astronomers as a computational standard for over three thousand years.`,
    domains: ['space', 'information', 'computation'],
    sources: [
      { author: 'Richard A. Parker', title: 'The Calendars of Ancient Egypt', publisher: 'University of Chicago Press', year: 1950 },
      { author: 'Otto Neugebauer and Richard A. Parker', title: 'Egyptian Astronomical Texts, Volume 1: The Early Decans', publisher: 'Brown University Press', year: 1960 },
      { author: 'Marshall Clagett', title: 'Ancient Egyptian Science, Volume 2: Calendars, Clocks, and Astronomy', publisher: 'American Philosophical Society', year: 1995 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'mesopotamian-mathematics',
    epochId: 'bronze-age',
    date: { year: -1900, precision: 'century', display: 'c. 1900 to 1600 BCE' },
    location: 'Nippur, Larsa, Sippar and other Old Babylonian cities (Iraq)',
    title: 'Old Babylonian mathematics',
    summary: `Scribal schools using sexagesimal place-value notation solved quadratic problems, computed square roots to six places and tabulated reciprocals, a body of mathematics unmatched for over a thousand years.`,
    explanation: `Between about 1900 and 1600 BCE, scribal schools in the cities of Babylonia produced the most sophisticated mathematics that would exist anywhere for over a thousand years. The foundation had been laid earlier. Bureaucrats of the Ur III state around 2050 BCE were already using a sexagesimal place-value notation, in which the same wedge signs could mean 1, 60 or 3600 according to position, a system that made multiplication and division of fractions far easier than the Egyptian or later Roman approaches. Old Babylonian scribes inherited this notation and built on it.

Their surviving work is on clay tablets, most of them school exercises. There are multiplication tables, tables of reciprocals (which turn division into multiplication), tables of squares and cubes, and problem texts in which a student is asked to find, say, the sides of a rectangular field given its area and the difference between its sides. Solving such problems required what we would now write as quadratic equations, and the scribes had general procedures for them, expressed as cut-and-paste manipulations of geometric figures rather than symbolic algebra, as Jens Hoyrup has shown. They computed the square root of two to the equivalent of six decimal places on the tablet YBC 7289, and they knew the relationship between the sides of a right triangle a millennium before Pythagoras. The tablet Plimpton 322 lists fifteen sets of numbers related to such triangles; whether it is a trigonometric table, a teacher's aid for generating problems, or something else is disputed, and Eleanor Robson has argued persuasively for the teacher's-aid reading.

The purpose was practical and institutional. Scribes were trained to survey fields, compute the volume of a canal excavation and the labour needed to dig it, calculate interest on loans, distribute rations, and convert between units of grain, silver and area. Mathematics was a bureaucratic skill, and the schools drilled it through problems with stylised, sometimes absurd, situations.

The legacy was long. Babylonian astronomers of the first millennium used the same number system to predict lunar and planetary phenomena with arithmetic schemes, and Greek astronomers adopted it: the Almagest of Ptolemy expresses fractions sexagesimally, which is why we still divide the hour into sixty minutes and the degree into sixty minutes of arc. Reciprocal tables and problem types reappear in Islamic and medieval mathematics.

The evidence consists of several thousand mathematical tablets, mostly from Nippur, Ur, Larsa, Sippar and Susa, edited from the pioneering work of Otto Neugebauer in the 1930s onward and reinterpreted in the past three decades with closer attention to the vocabulary of the scribes and the school context in which they worked.`,
    mechanism: `Numbers were written with two wedge shapes, a vertical wedge for one and a corner wedge for ten, combined additively up to 59. Beyond that, position carried value: a group written to the left of another was worth sixty times as much. There was no symbol for zero within the Old Babylonian period and no marker for where the units place fell, so the reader inferred the absolute size from context, much as a slide rule user does. Division by a number was performed by multiplying by its tabulated reciprocal, which is exact for numbers whose only prime factors are 2, 3 and 5. Problems were solved by named procedures: to complete the square, imagine a square of unknown side with a strip attached, cut the strip in half, rearrange, and read off the missing side.`,
    prerequisites: ['cuneiform', 'standardized-weights'],
    consequences: ['euclid-elements', 'ptolemaic-astronomy', 'al-khwarizmi-algebra'],
    figures: [
      { name: 'Old Babylonian scribal teachers', role: 'Composed the problem texts and tables' },
      { name: 'Otto Neugebauer', role: 'Pioneered the modern edition and interpretation of the tablets' },
      { name: 'Eleanor Robson', role: 'Reinterpreted the corpus in its social and school context' },
    ],
    significance: 9,
    significanceJustification: `Place-value notation and general algebraic procedures were invented here, and the sexagesimal system still structures time and angle. Greek and Islamic mathematics and astronomy inherited it directly.`,
    domains: ['computation', 'information'],
    sources: [
      { author: 'Eleanor Robson', title: 'Mathematics in Ancient Iraq: A Social History', publisher: 'Princeton University Press', year: 2008 },
      { author: 'Jens Hoyrup', title: 'Lengths, Widths, Surfaces: A Portrait of Old Babylonian Algebra and Its Kin', publisher: 'Springer', year: 2002 },
      { author: 'Eleanor Robson', title: 'Neither Sherlock Holmes nor Babylon: A Reassessment of Plimpton 322', publisher: 'Historia Mathematica', year: 2001, url: 'https://doi.org/10.1006/hmat.2001.2317' },
      { author: 'Otto Neugebauer', title: 'The Exact Sciences in Antiquity', publisher: 'Brown University Press', year: 1957 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'chariot',
    epochId: 'bronze-age',
    date: { year: -2000, precision: 'century', display: 'c. 2000 BCE' },
    location: 'Sintashta culture, southern Urals (Russia and Kazakhstan)',
    title: 'The horse-drawn spoked-wheel chariot',
    summary: `Steppe communities combined the spoked wheel with the harnessed horse to build a fast two-wheeled vehicle that became the decisive weapon and aristocratic status symbol of the second millennium BCE.`,
    explanation: `The light, spoked-wheel, horse-drawn chariot was the fastest thing on land for over a thousand years and the decisive weapon of the second millennium BCE. Wheeled vehicles had existed since the fourth millennium, but these were carts and wagons with solid wooden wheels, drawn by oxen or donkeys, moving at walking pace. Two inventions transformed them: the spoked wheel, which cut the weight of a wheel to a fraction, and the harnessing of the horse, a faster and more spirited animal than any previously yoked.

The earliest known chariots come from the Sintashta culture of the southern Urals, in the steppe between Russia and Kazakhstan. Graves there, dated by radiocarbon to around 2000 BCE, contain the imprints of two-wheeled vehicles with ten to twelve spokes per wheel, together with paired horse skeletons and bone cheekpieces for bits. Bayesian analysis of the dates by Stephan Lindner places the earliest Sintashta chariots at or slightly before 2000 BCE, making them older than any Near Eastern example, though Mesopotamian art shows two-wheeled vehicles with solid wheels drawn by equids earlier, and some scholars argue the concept moved in the other direction.

Within a few centuries, chariots appear across the Near East. The Hittites of Anatolia, the Hurrian kingdom of Mitanni, the Kassites in Babylonia, the Hyksos who ruled the Egyptian delta from around 1650 BCE and the Shang dynasty in China around 1200 BCE all adopted them. A horse-training manual by Kikkuli of Mitanni, preserved in Hittite, prescribes a months-long conditioning programme. The Egyptian New Kingdom army was organised around chariot squadrons, and the largest chariot battle known, at Kadesh in 1274 BCE between Ramesses II and the Hittite king Muwatalli II, may have involved several thousand vehicles.

A chariot carried a driver and an archer or spearman on a light platform, and its value was mobile firepower: composite bows shot from a fast platform that could wheel away from infantry. It was also enormously expensive. A vehicle of bent ash and elm, leather and bronze fittings, plus two trained horses, their grooms and the feed to sustain them, represented an aristocratic investment, and the chariot-owning warrior class, the maryannu of the Levant, became a distinct social order. The dependence of Late Bronze Age kingdoms on this costly arm is one strand in the explanations for their collapse after 1200 BCE, when cheaper infantry with javelins and long swords proved able to swarm chariots.

The evidence is graves with vehicle imprints, surviving chariots from Egyptian tombs including six from the tomb of Tutankhamun, reliefs, seals, cuneiform inventories of chariot parts, and the text of Kikkuli.`,
    mechanism: `A chariot was a lightweight platform, often just a bentwood frame with a floor of woven leather straps, mounted on a single axle with two spoked wheels. Spokes carried load in compression and tension, so a wheel of bentwood felloes and a small hub could weigh a fraction of a solid disc. The axle was placed at the rear of the platform to reduce bounce transmitted to the crew and to shift weight onto the pole. A central pole ran forward to a yoke resting on the necks of two horses; the horses were controlled by reins through a bit held in the mouth, with bone or bronze cheekpieces. Wheels turned on a fixed axle, lubricated with animal fat, and were held by linchpins. Bronze fittings were kept to a minimum to save weight.`,
    prerequisites: ['wheel', 'animal-domestication', 'bronze-metallurgy'],
    consequences: ['stirrup'],
    figures: [
      { name: 'Sintashta charioteers', role: 'Buried with the earliest known chariots' },
      { name: 'Kikkuli of Mitanni', role: 'Author of the earliest horse-training manual' },
      { name: 'David W. Anthony', role: 'Archaeologist who synthesised the steppe origin of horse transport' },
    ],
    significance: 7,
    significanceJustification: `The chariot introduced speed to land transport and warfare and reshaped the politics of every Bronze Age state. Its cost created a warrior aristocracy, and its obsolescence contributed to the end of the era.`,
    domains: ['transportation', 'weapons-security'],
    sources: [
      { author: 'David W. Anthony', title: 'The Horse, the Wheel, and Language: How Bronze-Age Riders from the Eurasian Steppes Shaped the Modern World', publisher: 'Princeton University Press', year: 2007 },
      { author: 'Stephan Lindner', title: 'Chariots in the Eurasian Steppe: a Bayesian approach to the emergence of horse-drawn transport in the early second millennium BC', publisher: 'Antiquity', year: 2020, url: 'https://doi.org/10.15184/aqy.2020.37' },
      { author: 'M. A. Littauer and J. H. Crouwel', title: 'Wheeled Vehicles and Ridden Animals in the Ancient Near East', publisher: 'Brill', year: 1979 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'alphabet',
    epochId: 'bronze-age',
    date: { year: -1800, precision: 'century', display: 'c. 1800 BCE' },
    location: 'Wadi el-Hol and Serabit el-Khadim, Egypt',
    title: 'The alphabet',
    summary: `Semitic speakers in Egypt reused a couple of dozen hieroglyphic pictures as consonant signs, creating a script anyone could learn in weeks and the ancestor of every alphabet in use today.`,
    explanation: `Every alphabet in use today, Latin, Greek, Cyrillic, Arabic, Hebrew, the Indic scripts and their descendants across Asia, goes back to a single invention made around 1800 BCE by Semitic-speaking people working in Egypt. Rather than learning hundreds of hieroglyphs, they borrowed a couple of dozen pictorial signs and used each for the first consonant of the Semitic word for the object shown. A picture of a house, bayt, stood for b; an ox head, alp, stood for a glottal stop; water, mayim, for m. The names alpha and beta and the shapes of A and B still carry this history. Because any word could be written with about twenty-seven signs, the system could be learned in weeks rather than years.

The earliest examples are two short rock inscriptions found by John and Deborah Darnell in the 1990s at Wadi el-Hol, a desert road west of Thebes, dated by their context to around 1850 to 1700 BCE. A larger group of about thirty inscriptions comes from the turquoise mines at Serabit el-Khadim in Sinai, discovered by Flinders Petrie in 1905, where Canaanite workers left dedications to the goddess Hathor on statues and rock faces; these date to around 1800 to 1500 BCE. Orly Goldwasser has argued that the inventors were not scribes at all but miners and soldiers familiar with the look of hieroglyphs without being trained in them, which explains why they used the signs as pictures with new sound values.

The script, called Proto-Sinaitic or early alphabetic, travelled north into Canaan, where it became linear Proto-Canaanite and, by about 1050 BCE, the standardised twenty-two letter Phoenician alphabet. A cuneiform alphabet of thirty signs was in use at Ugarit on the Syrian coast by 1300 BCE, adapting the alphabetic idea to clay. Phoenician traders carried the letters around the Mediterranean, and the Greeks, around 800 BCE, added vowel letters by reusing signs for Semitic consonants that Greek did not have, producing the first fully alphabetic script. Aramaic versions spread east through the Persian Empire to India.

The alphabet did not immediately democratise literacy; scribes remained a small class. But it lowered the cost of writing enough that, over the following centuries, merchants, soldiers and craftsmen could learn it, and the explosion of Greek prose, philosophy, law and history in the first millennium is hard to imagine without a script a child could master. Printing with movable type is far simpler with an alphabet than with thousands of characters.

The evidence is the inscriptions themselves, the Egyptian sign forms they visibly derive from, the acrophonic letter names preserved in Hebrew and Greek, and the continuous chain of dated inscriptions from Sinai through Phoenicia to Greece.`,
    mechanism: `The alphabet works by the acrophonic principle: each sign is the picture of an object whose name begins with the sound the sign represents. The user memorises about twenty-two to thirty signs, one per consonant of the language, and writes words as strings of consonants, leaving vowels to be inferred, as Hebrew and Arabic still do. Because signs are few, they can be simplified into quick linear strokes without losing distinctness, and by the Phoenician stage the pictures had become abstract letters written right to left in a fixed order. The Greek innovation was to assign signs for Semitic consonants absent from Greek to vowels, so that every sound was written. Letters were scratched on stone, painted on pottery, or written in ink on papyrus and leather.`,
    prerequisites: ['hieroglyphs', 'cuneiform', 'sailing-ship'],
    consequences: ['greek-natural-philosophy', 'library-of-alexandria', 'gutenberg-press'],
    figures: [
      { name: 'Canaanite miners and soldiers in Egypt', role: 'Probable inventors' },
      { name: 'John Coleman Darnell and Deborah Darnell', role: 'Discovered the Wadi el-Hol inscriptions' },
      { name: 'Orly Goldwasser', role: 'Proposed the non-scribal origin of the alphabet' },
    ],
    significance: 10,
    significanceJustification: `A script of a few dozen signs made literacy cheap enough to spread beyond a professional class, and every alphabet in the world descends from this one. Greek thought, scripture, printing and the keyboard all rest on it.`,
    domains: ['information', 'communication'],
    sources: [
      { author: 'John Coleman Darnell, F. W. Dobbs-Allsopp, Marilyn J. Lundberg, P. Kyle McCarter and Bruce Zuckerman', title: 'Two Early Alphabetic Inscriptions from the Wadi el-Hol: New Evidence for the Origin of the Alphabet from the Western Desert of Egypt', publisher: 'Annual of the American Schools of Oriental Research', year: 2005 },
      { author: 'Orly Goldwasser', title: 'How the Alphabet Was Born from Hieroglyphs', publisher: 'Biblical Archaeology Review', year: 2010 },
      { author: 'Benjamin Sass', title: 'The Genesis of the Alphabet and Its Development in the Second Millennium B.C.', publisher: 'Harrassowitz', year: 1988 },
      { author: 'Christopher A. Rollston', title: 'Writing and Literacy in the World of Ancient Israel: Epigraphic Evidence from the Iron Age', publisher: 'Society of Biblical Literature', year: 2010 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'code-of-hammurabi',
    epochId: 'bronze-age',
    date: { year: -1755, precision: 'decade', display: 'c. 1755 BCE' },
    location: 'Babylon (stele found at Susa, Iran)',
    title: 'The Code of Hammurabi',
    summary: `Hammurabi of Babylon had nearly three hundred legal rulings, with fixed prices, wages and penalties in weighed silver, carved on a public stele that scribes copied for over a thousand years.`,
    explanation: `Late in his reign, around 1755 BCE, Hammurabi, king of Babylon, had a set of nearly three hundred legal rulings carved on a stele of black diorite over two metres tall, beneath a relief of himself receiving the symbols of justice from the sun god Shamash. The stone was set up in a temple, probably at Sippar, and copied on tablets that scribes studied for more than a thousand years. In 1901 a French expedition found it at Susa in Iran, where an Elamite king had carried it as plunder in the twelfth century BCE. It is now in the Louvre.

The text is not the oldest law collection. Ur-Nammu of Ur, around 2100 BCE, and Lipit-Ishtar of Isin, around 1930 BCE, had issued earlier ones, and the town of Eshnunna had its own. But the collection of Hammurabi is the longest and best preserved, and it shows what a Bronze Age state believed it could regulate: wages for hired workers, fees for surgeons and boat builders, the rent of oxen and wagons, interest rates on silver and barley, liability for a house that collapsed or a canal that flooded a neighbour's field, marriage, inheritance, adoption, slavery, false accusation and theft. Penalties were graded by the status of victim and offender, with the famous eye-for-eye principle applying among free citizens and monetary compensation otherwise.

The reason to treat it as a technology is standardisation. The rulings express values in weighed silver by the shekel, fix prices and wages in numbers, and specify the standard of proof (witnesses, sealed documents, oaths, the river ordeal) that a contract needed. Wherever the code was known, a merchant, a farmer and a judge shared a reference point. Whether the stele was applied in court is debated: surviving trial records rarely cite it, and many scholars regard it as a monument to royal justice and a scribal model text as much as a statute book. Even so, its provisions match the private contracts of the period closely, which suggests it codified real practice.

The code also embodied a claim about the state. Its prologue lists the cities Hammurabi ruled and asserts that the gods chose him to make justice visible so that the strong might not oppress the weak. The epilogue invites any wronged man to have the stele read to him. Law written in public and in the vernacular, meant to outlast the king who issued it, was a new instrument of governance, and its imagery of the ruler receiving law from a god echoes in later traditions.

The evidence is the stele itself, dozens of tablet copies and excerpts, and the enormous archive of Old Babylonian contracts and court records against which its rules can be tested.`,
    mechanism: `The stele is a single block of diorite about 2.25 metres tall, carved with roughly 4,000 lines of Akkadian cuneiform arranged in columns that run around the stone, and topped by a relief of the king before the seated god. Each ruling follows a conditional form: if a man does one thing, then a stated consequence follows. The text was composed by palace scribes, drafted on clay, and transferred to stone by masons working from the draft. Copies were made by students in scribal schools, which is how the lines erased by the Elamites are partly known. Enforcement relied on the existing machinery of city judges, temple oaths and sealed tablets; the stele fixed the rates and standards those institutions applied rather than creating a new court system.`,
    prerequisites: ['cuneiform', 'standardized-weights'],
    consequences: ['coinage'],
    figures: [
      { name: 'Hammurabi of Babylon', role: 'Issued the collection' },
      { name: 'Jean-Vincent Scheil', role: 'Published the first edition after the discovery at Susa in 1901' },
      { name: 'Martha T. Roth', role: 'Produced the standard modern edition of Mesopotamian law collections' },
    ],
    significance: 6,
    significanceJustification: `The stele fixed prices, wages, liabilities and standards of proof in public, making the state a guarantor of economic rules. It is a landmark of standardisation even if its use in court is uncertain.`,
    domains: ['information'],
    sources: [
      { author: 'Martha T. Roth', title: 'Law Collections from Mesopotamia and Asia Minor', publisher: 'Scholars Press', year: 1997 },
      { author: 'Marc Van De Mieroop', title: 'King Hammurabi of Babylon: A Biography', publisher: 'Blackwell', year: 2005 },
      { author: 'Dominique Charpin', title: 'Writing, Law, and Kingship in Old Babylonian Mesopotamia', publisher: 'University of Chicago Press', year: 2010 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'glass',
    epochId: 'bronze-age',
    date: { year: -1600, precision: 'century', display: 'c. 1600 BCE' },
    location: 'Northern Mesopotamia (Nuzi, Tell Brak) and Egypt (Amarna, Qantir)',
    title: 'Glassmaking',
    summary: `Workshops in Mesopotamia and Egypt learned to fuse quartz and plant ash into coloured glass, cast it into ingots for export and form it into core-made vessels, the first wholly synthetic material made in quantity.`,
    explanation: `Glass is the first entirely synthetic material humans made in quantity. Small glass beads and faience, a glazed quartz paste, had been produced in Egypt and Mesopotamia since the third millennium, sometimes as accidental by-products of metalworking and glazing. True glass vessels, however, appear rather suddenly around 1600 to 1500 BCE in northern Mesopotamia, at sites such as Nuzi and Tell Brak, and within a century in Egypt, where the campaigns of Thutmose III in Syria around 1450 BCE may have brought glassmakers back as captives or tribute.

For the next four centuries glass was a luxury, prized as an imitation of lapis lazuli and turquoise and ranked with precious stones in the gift lists exchanged between kings. Egyptian workshops at Malkata, Amarna and Qantir, and Mesopotamian ones at Nuzi and Tell al-Rimah, produced small vessels, inlays, beads and pendants in blue, turquoise, white, yellow and purple. Glass ingots were traded: the Uluburun shipwreck of around 1320 BCE carried about 175 disc-shaped ingots of cobalt blue and turquoise glass, whose chemistry matches Egyptian production and which were destined for Mycenaean workshops that reworked them into beads.

The key technical discovery was a two-stage process. Excavations by Thilo Rehren and Edgar Pusch at Qantir-Piramesses showed that raw glass was first made by heating crushed quartz pebbles with plant ash in ceramic crucibles at moderate temperatures to form a semi-fused mass, which was then crushed, washed, coloured with copper, cobalt, manganese or antimony compounds, and remelted at higher temperatures in cylindrical crucibles to produce ingots. These were shipped to secondary workshops that softened them and formed vessels. This separation of primary and secondary production persisted in the glass industry into the Roman period and beyond.

Bronze Age glass could not be blown; glassblowing was invented in the first century BCE. Instead, vessels were core-formed: molten glass was trailed around a clay and dung core on a rod, decorated with threads of contrasting colour combed into festoons, and the core scraped out after cooling. Cuneiform recipes from the library of Ashurbanipal, descending from Middle Assyrian originals of around 1200 BCE, describe the ingredients and ritual precautions of the craft, the oldest surviving chemical procedures in writing.

The evidence is the surviving vessels and ingots, the crucibles, moulds and furnace debris from Qantir, Amarna and Tell Brak, the Uluburun cargo, chemical fingerprinting of glass by trace elements and isotopes, and the Mesopotamian recipe texts. The knowledge did not survive the Late Bronze Age collapse intact in the Aegean, but Near Eastern production continued and expanded into the mass-market glass of the Hellenistic and Roman world.`,
    mechanism: `Glass is silica melted with a flux that lowers its melting point and a stabiliser that stops it dissolving in water. Bronze Age glassmakers used crushed quartz pebbles as silica and the ash of salt-tolerant desert plants as flux, which supplied soda and, fortunately, enough lime to stabilise the product. Heated to around 1000 to 1100 degrees Celsius in a charcoal-fired furnace, the mixture fused into a viscous liquid; because the furnace could not reach the temperatures of modern glassworks, the melt was kept small and impurities were skimmed. Colour came from metal oxides: copper for blue and turquoise, cobalt for deep blue, antimony compounds for opaque white and yellow, manganese for purple. Vessels were shaped by winding softened glass around a removable core and rolling it smooth on a stone slab.`,
    prerequisites: ['pottery', 'copper-smelting', 'bronze-metallurgy', 'potters-wheel'],
    consequences: ['eyeglasses', 'galileo-telescope', 'microscope'],
    figures: [
      { name: 'Glassmakers of Qantir-Piramesses', role: 'Ran the best-documented primary glass workshop' },
      { name: 'Thilo Rehren and Edgar Pusch', role: 'Reconstructed the two-stage production process' },
    ],
    significance: 7,
    significanceJustification: `Glass was the first synthetic material made at scale and the ancestor of lenses, windows, laboratory ware and optical fibre. Its Bronze Age production already showed the industrial separation of raw material and finished goods.`,
    domains: ['materials', 'manufacturing'],
    sources: [
      { author: 'Thilo Rehren and Edgar B. Pusch', title: 'Late Bronze Age Glass Production at Qantir-Piramesses, Egypt', publisher: 'Science', year: 2005, url: 'https://doi.org/10.1126/science.1110466' },
      { author: 'P. R. S. Moorey', title: 'Ancient Mesopotamian Materials and Industries: The Archaeological Evidence', publisher: 'Clarendon Press', year: 1994 },
      { author: 'Paul T. Nicholson and Ian Shaw (editors)', title: 'Ancient Egyptian Materials and Technology', publisher: 'Cambridge University Press', year: 2000 },
      { author: 'Andrew J. Shortland', title: 'Lapis Lazuli from the Kiln: Glass and Glassmaking in the Late Bronze Age', publisher: 'Leuven University Press', year: 2012 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'nebra-sky-disc',
    epochId: 'bronze-age',
    date: { year: -1600, precision: 'century', display: 'c. 1600 BCE (disputed)' },
    location: 'Mittelberg hill near Nebra, Saxony-Anhalt, Germany',
    title: 'The Nebra sky disc',
    summary: `A bronze disc inlaid with gold sun, moon and stars, conventionally dated to about 1600 BCE, is the oldest known concrete depiction of the cosmos, though both its date and its astronomical reading are contested.`,
    explanation: `The Nebra sky disc is a bronze plate about 32 centimetres across, weighing around two kilograms, inlaid with gold symbols: a full circle and a crescent read as sun (or full moon) and moon, a cluster of seven dots read as the Pleiades, about twenty-five further stars, two arcs on the rim, and a curved band interpreted as a boat. It was dug up illegally by treasure hunters on the Mittelberg hill near Nebra in Saxony-Anhalt in 1999, along with two swords, two axes, a chisel and fragments of spiral arm rings, and recovered by police in 2002. It is now in the State Museum of Prehistory in Halle.

The conventional interpretation, developed by Harald Meller and colleagues, is that the disc dates to around 1600 BCE, within the Early Bronze Age Unetice culture, and encodes astronomical knowledge. The two rim arcs span about 82 degrees, which matches the angle between the sunrise positions at the summer and winter solstices at the latitude of Nebra, and the Pleiades placed beside a crescent of a particular thickness has been read, by comparison with a later Babylonian text, as a rule for inserting a leap month to keep a lunar calendar aligned with the solar year. The disc is thus presented as the oldest known concrete depiction of the cosmos and as evidence that a Central European society without writing had worked out calendrical astronomy of its own.

That reading is contested on two fronts. Because the disc was looted, its association with the swords and axes that supply the Bronze Age date rests on the statements of the finders and on soil analysis. In 2020 Rupert Gebhard and Rudiger Krause argued that the disc need not belong with the other objects, that its iconography has better parallels in the Iron Age, and that it might date to the first millennium BCE. Ernst Pernicka and a large team replied the same year, pointing to the matching soil chemistry and corrosion products, the lead-isotope signature of the copper (from the Mitterberg mines in Austria, worked in the Early Bronze Age), and gold from Cornwall, arguing that all lines of evidence support a date around 1600 BCE. Most specialists accept the Bronze Age date, but the astronomical interpretation, especially the leap-rule reading, is a hypothesis rather than an established fact, and the disc appears to have been altered several times, with the arcs and boat added later and one arc eventually removed.

What is not disputed is the metalwork: a large cast bronze disc, gold inlays of two different compositions applied in stages, and a deliberate design that refers to the sky. Whatever the exact meaning, it shows a Bronze Age society in temperate Europe, linked by tin and copper trade to Cornwall and the Alps, investing scarce metal in a representation of celestial order. It is listed here as a consequence of the metallurgy and megalithic sky-watching that preceded it; no direct line of transmission to later astronomical instruments can be demonstrated, and the link recorded below is one of tradition rather than documented influence.`,
    mechanism: `The disc was cast from copper alloyed with a small amount of tin, then hammered and annealed repeatedly to reach its thin, even profile. The gold inlays were made by cutting shallow recesses into the bronze surface, laying in thin sheets of gold, and hammering their edges into the recesses so that they held mechanically without solder. Trace-element analysis shows that the first set of inlays (the stars, sun and moon) used gold of one composition and the later arcs used another, which is how the stages of alteration are reconstructed. The contrast between the gold and the background may have been enhanced by a deliberately darkened bronze surface, though this is uncertain. Holes punched around the rim suggest it was later fixed to a backing, perhaps of wood.`,
    prerequisites: ['bronze-metallurgy', 'megalithic-construction'],
    consequences: ['antikythera-mechanism'],
    figures: [
      { name: 'Harald Meller', role: 'Led the recovery and the conventional interpretation' },
      { name: 'Ernst Pernicka', role: 'Directed the archaeometric dating and provenance studies' },
      { name: 'Rupert Gebhard and Rudiger Krause', role: 'Argued for an Iron Age date' },
    ],
    significance: 5,
    significanceJustification: `If the Bronze Age date holds, the disc is the earliest known physical representation of the sky and evidence of independent calendrical astronomy in Europe. The looted context and disputed reading limit how much weight it can bear.`,
    domains: ['space', 'materials', 'information'],
    sources: [
      { author: 'Ernst Pernicka, Jorg Adam, Gregor Borg, Gerhard Brugmann, Jan-Heinrich Bunnefeld, Wolfgang Kainz, Michael Klamm, Thomas Koiki, Harald Meller, Ralf Schwarz, Thomas Stollner, Christian-Heinrich Wunderlich and Alfred Reichenberger', title: 'Why the Nebra Sky Disc Dates to the Early Bronze Age. An Overview of the Interdisciplinary Results', publisher: 'Archaeologia Austriaca', year: 2020, url: 'https://doi.org/10.1553/archaeologia104s89' },
      { author: 'Rupert Gebhard and Rudiger Krause', title: 'Critical comments on the find complex of the so-called Nebra Sky Disk', publisher: 'Archaologische Informationen', year: 2020 },
      { author: 'Harald Meller and Kai Michel', title: 'Die Himmelsscheibe von Nebra: Der Schlussel zu einer untergegangenen Kultur im Herzen Europas', publisher: 'Propylaen', year: 2018 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'egyptian-medical-papyri',
    epochId: 'bronze-age',
    date: { year: -1600, precision: 'century', display: 'c. 1600 to 1550 BCE' },
    location: 'Thebes (Luxor), Egypt',
    title: 'The Edwin Smith and Ebers medical papyri',
    summary: `Two papyri copied around 1600 and 1550 BCE preserve a rational surgical treatise on wounds and fractures and a compendium of about 870 remedies, the oldest substantial medical texts to survive anywhere.`,
    explanation: `Two long papyri bought in Luxor by the American collector Edwin Smith in 1862 are the oldest substantial medical texts to survive from anywhere. The one that bears his name, now in the New York Academy of Medicine, is a surgical treatise written around 1600 BCE in hieratic, though its language and the glosses added to explain obsolete words show that it copies an original perhaps several centuries older. The other, sold on to Georg Ebers and now in Leipzig, is a compendium of about 870 remedies written around 1550 BCE.

The Edwin Smith papyrus is unlike anything else from the ancient world before Hippocrates. It presents forty-eight cases, arranged from the top of the head downward, each following a fixed format: title, examination, diagnosis, one of three verdicts (an ailment I will treat, an ailment I will contend with, an ailment not to be treated), and treatment. The physician is told to feel the wound, to observe whether the patient can turn his head, to note pulse and colour, and to compare the exposed surface of the brain to the ripples on molten copper. It describes the meninges, cerebrospinal fluid and the effect of head injury on the limbs on the opposite side of the body. Treatments are largely practical: closing wounds with sutures or adhesive strips, splinting fractures with linen and plaster, applying fresh meat as a dressing on the first day and honey and grease afterwards, immobilising a dislocated jaw. Magic appears only once. James Henry Breasted, who published the translation in 1930, argued that the original was a document of empirical surgery, probably from the pyramid-building age when crushed workers were common.

The Ebers papyrus is broader and more typical of Egyptian medicine. It groups remedies by complaint: digestive disorders, eye diseases, skin complaints, tumours, gynaecology, dentistry, and a treatise on the heart and the vessels that carry air, blood and other fluids to the parts of the body. Many prescriptions mix pharmacology with incantation, and the ingredients range from honey, willow, castor oil, opium poppy and copper salts, which have real effects, to animal dung. It gives a coherent, if wrong, theory of the vascular system and describes what may be diabetes-like excessive urination.

Egyptian physicians were a recognised profession from the Old Kingdom, with titles such as chief of physicians and specialists in eyes and teeth. Greek writers from Homer to Herodotus praised Egyptian medicine, and the Hippocratic corpus shows traces of Egyptian practice in surgery and pharmacy.

The evidence is the papyri themselves, half a dozen shorter medical papyri (Kahun, Hearst, Berlin, London, Chester Beatty), human remains showing healed fractures and set bones, and the titles of physicians on tomb walls.`,
    mechanism: `Egyptian medicine worked through a case procedure. The physician examined by sight, touch and smell, questioned the patient, and matched the findings to a known category with an established verdict, which was both a prognosis and a decision about resources. Surgical treatment used bronze knives, probes and forceps, linen bandages, and splints of wood or bark padded with linen; wounds were cleaned and closed with thread or with strips of linen coated in gum. Dressings of honey and fat inhibited bacterial growth and kept wounds moist, which modern trials confirm. Drugs were prepared by grinding, boiling or steeping plant and mineral ingredients in beer, wine, honey, milk or oil, then given by mouth, as ointments, as fumigations or as suppositories. Doses were measured with graded vessels and administered on a fixed schedule of days.`,
    prerequisites: ['hieroglyphs', 'copper-smelting'],
    consequences: ['galenic-medicine', 'vesalius-anatomy'],
    figures: [
      { name: 'Anonymous Old or Middle Kingdom surgeon', role: 'Composed the original of the Edwin Smith treatise' },
      { name: 'James Henry Breasted', role: 'Translated and published the Edwin Smith papyrus in 1930' },
      { name: 'Georg Ebers', role: 'Acquired and published the Ebers papyrus in 1875' },
    ],
    significance: 7,
    significanceJustification: `The Edwin Smith papyrus is the earliest evidence of systematic clinical observation, prognosis and empirical treatment. Together with Ebers it shows a written medical tradition that Greek medicine drew on.`,
    domains: ['biology-medicine', 'information'],
    sources: [
      { author: 'James Henry Breasted', title: 'The Edwin Smith Surgical Papyrus, Published in Facsimile and Hieroglyphic Transliteration with Translation and Commentary', publisher: 'University of Chicago Press', year: 1930 },
      { author: 'John F. Nunn', title: 'Ancient Egyptian Medicine', publisher: 'British Museum Press', year: 1996 },
      { author: 'Gonzalo M. Sanchez and Edmund S. Meltzer', title: 'The Edwin Smith Papyrus: Updated Translation of the Trauma Treatise and Modern Medical Commentaries', publisher: 'Lockwood Press', year: 2012 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
];
