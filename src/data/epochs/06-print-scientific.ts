import type { Epoch, TechEventInput } from '../schema';

export const epoch: Epoch = {
  id: 'print-scientific',
  index: 6,
  name: 'Print and the scientific revolution',
  code: 'PRINT',
  startYear: 1450,
  endYear: 1760,
  span: '1450 to 1760',
  thesis: `Between 1450 and 1760 Europe acquired two things it had never had: a way to copy knowledge without corrupting it, and a method for testing claims about nature against instruments rather than authorities. The printing press made identical texts, tables and diagrams available in thousands of copies, so that an astronomer in Prague could check the figures of one in Frombork and a physician in London could compare his dissections against a Basel woodcut. Cheap, fixed, comparable information turned scholarship from a matter of preserving old texts into a matter of correcting them.

On that foundation a new practice grew up. Copernicus, Vesalius, Kepler, Galileo, Harvey, Torricelli, Boyle, Huygens and Newton did not simply think harder than their predecessors; they built telescopes, barometers, air pumps, pendulum clocks and microscopes, reported what those devices showed, and published so that others could repeat the observation. Journals such as the Philosophical Transactions institutionalized this loop of claim, evidence and reply. By the end of the epoch the results were no longer confined to natural philosophy: the atmospheric engine, the marine chronometer and inoculation against smallpox were practical technologies derived directly from experimental knowledge. The epoch's central achievement was the discovery that knowledge could be made to accumulate.`,
  enablingConditions: [
    'Paper had reached Europe from China through the Islamic world and was being produced in water-powered mills, so the raw material for mass printing already existed when Gutenberg began work.',
    'Medieval universities, monastic libraries and the recovered Greek and Arabic scientific corpus gave scholars a shared body of texts (Ptolemy, Euclid, Galen, Aristotle) to argue with and eventually overturn.',
    'Skilled metalworking, from goldsmiths to clockmakers and lens grinders, provided the precision craft needed for type moulds, telescope objectives, escapements and screw-cut instruments.',
    'Atlantic and Indian Ocean voyages created urgent commercial and military demand for astronomy, cartography, magnetism and timekeeping, which princes and trading companies were willing to fund.',
    'Political fragmentation in Europe meant that a book or a scholar banned in one jurisdiction could usually find a printer or a patron in another, so no single authority could suppress a line of inquiry.',
  ],
  constraintsRemoved: [
    'The scribal copy limit: a text no longer degraded with each copy, and a diagram or table could be reproduced exactly, so errors could be found and corrected across editions rather than accumulating.',
    'The limit of unaided human senses: telescopes and microscopes revealed moons of Jupiter, capillaries and microorganisms that no amount of reasoning could have supplied.',
    'The authority constraint: experimental demonstration, reported in print and repeated by others, became an accepted way to overrule Aristotle, Ptolemy or Galen.',
    'The measurement constraint on time and place: pendulum clocks and eventually spring-driven chronometers made seconds and longitudes measurable quantities rather than estimates.',
    'The muscle and water limit on power: the atmospheric steam engine showed that heat could be converted into useful mechanical work at a scale independent of rivers, wind or animals.',
  ],
  secondOrderConsequences: [
    'Vernacular print and cheap Bibles fed the Reformation and confessional wars, showing that the same press that spread astronomy also spread polemic.',
    'A Republic of Letters formed across borders through correspondence, journals and academies, creating the first international scientific community with shared norms of priority and credit.',
    'Reliable navigation and cartography turned overseas exploration into sustained colonization and the Atlantic slave trade, with catastrophic demographic consequences for the Americas and Africa.',
    'Mathematical natural philosophy became the model for other fields, encouraging attempts to found politics, economics and even ethics on similar principles during the Enlightenment.',
    'The proof that experiment paid off in engines, clocks and medicine created a lasting expectation that knowledge should yield useful improvement, an expectation that underwrote the Industrial Revolution.',
  ],
  transition: `By 1760 the tools and habits of the scientific revolution had begun to leak out of the academies and into workshops. Newcomen engines were pumping water from Cornish and Midland mines, and the men who serviced them, including a young instrument maker at Glasgow named James Watt, were literate in the pneumatics of Torricelli and Boyle. Harrison had shown that precision manufacture could solve a problem that had defeated astronomers, and clock and instrument makers in London, Paris and Lancashire were the pool of skill from which textile machinery and machine tools would be drawn. The Royal Society, the Paris Academy and the new provincial societies such as the Lunar Society of Birmingham connected natural philosophers with manufacturers. Meanwhile British coal, canals, credit and colonial markets supplied the demand and the capital. The next epoch would apply the experimental method not to the heavens but to spinning, iron and steam, and would discover that mechanization could compound as fast as knowledge had.`,
  humanExperience: `For most people the epoch began in a world of manuscript, seasonal time and local knowledge and ended in one of printed almanacs, clock hours and news from across the ocean. Literacy rose sharply in towns, especially in Protestant northern Europe, and a shopkeeper or artisan might own a Bible, a chapbook and a printed calendar. Print also brought pamphlets, broadsides and libels, so that ordinary people were drawn into religious and political disputes as readers rather than as an audience for preachers alone.

Daily life stayed hard. Harvests still failed, plague returned repeatedly until the 1660s, and smallpox killed or scarred a large share of every generation; inoculation in the 1720s was the first time a family could act against it. Medicine remained mostly Galenic in practice even after Vesalius and Harvey, so the scientific revolution was felt less in the sickroom than in the marketplace: better maps, more reliable charts, cheaper printed navigation tables, and clocks in church towers and eventually parlours that reorganized work around measured hours.

A person who lived near a mine after 1712 would have seen a Newcomen engine, a building-sized machine that breathed steam and raised water day and night, the first sight of heat doing work without muscle. A sailor's odds of arriving improved with each generation of instruments. And a curious reader, even one without Latin, could now buy a translated account of Jupiter's moons or Leeuwenhoek's animalcules and see the engravings for themselves. The deepest change was in what could be believed: authority was no longer sufficient, and the idea that the world could be examined, measured and improved had reached beyond the learned.`,
  minEvents: 18,
  sources: [
    { author: 'Elizabeth L. Eisenstein', title: 'The Printing Press as an Agent of Change', publisher: 'Cambridge University Press', year: 1979 },
    { author: 'Steven Shapin', title: 'The Scientific Revolution', publisher: 'University of Chicago Press', year: 1996 },
    { author: 'David Wootton', title: 'The Invention of Science: A New History of the Scientific Revolution', publisher: 'Allen Lane', year: 2015 },
    { author: 'Joel Mokyr', title: 'A Culture of Growth: The Origins of the Modern Economy', publisher: 'Princeton University Press', year: 2016 },
    { author: 'Thomas S. Kuhn', title: 'The Copernican Revolution: Planetary Astronomy in the Development of Western Thought', publisher: 'Harvard University Press', year: 1957 },
  ],
  lastReviewed: '2026-09-04',
};

export const events: TechEventInput[] = [
  // Note: the two events added beyond the registry list (mercator-projection, boyle-air-pump) are placed
  // first so that earlier-dated events in this file can name them as consequences; the site orders events by date.
  {
    id: 'mercator-projection',
    epochId: 'print-scientific',
    date: { year: 1569, precision: 'year', display: '1569' },
    location: 'Duisburg, Duchy of Cleves (Germany)',
    title: 'Mercator\'s world map for navigators',
    summary: 'Gerardus Mercator published a world map in 1569 on a projection in which any constant compass bearing is a straight line, solving the navigator\'s chart problem and fixing the shape of the world map for four centuries.',
    explanation: `In 1569 Gerardus Mercator, a Flemish cartographer and instrument maker working in Duisburg, published a large wall map of the world in eighteen sheets whose title announced that it was a new and augmented description of the earth corrected for the use of sailors. Its novelty was the projection. On earlier charts a course of constant compass bearing, a rhumb line or loxodrome, appeared as a curve spiralling toward the pole, so a pilot could not lay off a bearing with a straight edge. Mercator spaced the parallels of latitude progressively farther apart toward the poles, in the same proportion by which the meridians had been stretched to make them parallel, so that angles on the map matched angles on the globe and every rhumb line became straight.

The problem it solved was pressing. Iberian, Dutch and English navigation relied on compass bearings and latitude sailing, and the portolan charts inherited from the Mediterranean, which were adequate over short distances, produced serious errors on ocean crossings. The Portuguese mathematician Pedro Nunes had analysed the loxodrome in 1537, and Mercator had drawn rhumb lines on a globe in 1541; the 1569 map was the culmination. Mercator did not publish his construction; the English mathematician Edward Wright derived the mathematics and printed tables of meridional parts in Certaine Errors in Navigation (1599), which made the projection usable by ordinary chart makers.

Adoption was slow because Mercator's map lacked the tables and because pilots were conservative, but by the late seventeenth century Dutch and English sea atlases were routinely on the projection, and it remained the basis of Admiralty charts into the twentieth century. The projection's well known distortion of area, which makes Greenland look the size of Africa, is the price of preserving angles and is irrelevant to its purpose. Its later use for classroom wall maps, for which it is unsuited, has produced a long polemic literature.

The significance is that it turned charting from a craft of estimation into a matter of mathematics, and it exemplifies the epoch's pattern of a theoretical result (Nunes, Wright) feeding a printed product (Mercator, then Hondius and Blaeu) that shaped practice at sea. Only three complete copies of the 1569 map survive, at Basel, Paris and Rotterdam, but the construction is fully documented by Wright and the map's text panels.`,
    mechanism: `On a globe the meridians converge toward the poles, so at latitude phi one degree of longitude spans only cos(phi) of its equatorial length. Mercator drew the meridians as equally spaced vertical lines, stretching east-west distances by a factor of 1/cos(phi), and then stretched the north-south spacing by the same factor at each latitude so that local shapes were preserved and directions on the map matched compass bearings. The cumulative north-south position of a parallel is therefore the integral of the secant of latitude, which Wright approximated by summing secants minute by minute and tabulating the result as meridional parts; the closed form using the logarithm of the tangent was found later. A navigator draws a straight line between two points, reads its bearing with a protractor, and steers that bearing.`,
    prerequisites: ['caravel-navigation', 'magnetic-compass', 'ptolemaic-astronomy', 'gutenberg-press', 'euclid-elements'],
    consequences: ['harrison-chronometer', 'gps'],
    figures: [
      { name: 'Gerardus Mercator', role: 'Cartographer who devised and published the projection' },
      { name: 'Edward Wright', role: 'Mathematician who published the construction and tables in 1599' },
      { name: 'Pedro Nunes', role: 'Portuguese mathematician who first analysed the rhumb line' },
    ],
    significance: 6,
    significanceJustification: 'The projection made accurate long-distance course plotting a routine graphical operation and remained the standard for sea charts for four hundred years. It is a clear case of mathematics transforming a practical craft.',
    domains: ['transportation', 'information'],
    sources: [
      { author: 'Mark Monmonier', title: 'Rhumb Lines and Map Wars: A Social History of the Mercator Projection', publisher: 'University of Chicago Press', year: 2004 },
      { author: 'Nicholas Crane', title: 'Mercator: The Man Who Mapped the Planet', publisher: 'Weidenfeld and Nicolson', year: 2002 },
      { author: 'John P. Snyder', title: 'Flattening the Earth: Two Thousand Years of Map Projections', publisher: 'University of Chicago Press', year: 1993 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'boyle-air-pump',
    epochId: 'print-scientific',
    date: { year: 1660, precision: 'year', display: '1660 (gas law published 1662)' },
    location: 'Oxford, England',
    title: 'Boyle\'s air pump and the spring of the air',
    summary: 'Robert Boyle and Robert Hooke built an improved vacuum pump in 1659 and published New Experiments Physico-Mechanicall (1660), establishing the pressure-volume law of gases and the practice of witnessed, published experiment.',
    explanation: `In 1659 Robert Boyle, a wealthy Anglo-Irish gentleman living in Oxford, commissioned his assistant Robert Hooke to build a pneumatic engine on the model of Otto von Guericke's Magdeburg pump but with a glass receiver into which experiments could be placed and observed. The pump was a large brass cylinder with a piston worked by a rack and pinion, connected through a stopcock to a globe of about thirty quarts. It leaked, needed constant attention and cost as much as a small house, but it produced a working vacuum on demand. In 1660 Boyle published New Experiments Physico-Mechanicall, Touching the Spring of the Air, and its Effects, describing forty-three experiments in detail.

In the receiver a Torricellian barometer fell as air was pumped out, confirming that the column was supported by air pressure. A bell rang silently, candles went out, and small animals died, showing that air was required for sound, combustion and life. Boyle's term for the air's elasticity, its spring, framed it as a mechanical property to be measured. In the 1662 second edition, replying to the critic Franciscus Linus, he reported experiments with a J-shaped tube in which a column of trapped air was compressed by mercury, and tabulated the results: the volume of the air varied inversely with the pressure on it. Boyle credited Richard Towneley with suggesting the relation; on the Continent it was later found independently by Edme Mariotte.

Why it mattered is twofold. Scientifically, the pump made the vacuum a laboratory instrument and the gas law was the first quantitative law of a substance's behaviour, foundational for pneumatic chemistry and for the theory of gases. Institutionally, Boyle's way of working, minutely describing apparatus and procedure, reporting failures, and staging demonstrations before named witnesses so that a matter of fact could be certified by a community, became the model for the Royal Society founded in 1660. Thomas Hobbes attacked the whole enterprise, arguing that experiments could not settle philosophical questions; Shapin and Schaffer's study of that dispute is the classic account of how experimental fact became authoritative.

The evidence is unusually good, since Boyle's works and workdiaries survive and the design of the pump is documented in engravings. What is contested is credit: Hooke built the pump and probably ran most experiments, and the law bears Boyle's name in Britain and Mariotte's in France.`,
    mechanism: `The pump consisted of a brass cylinder about fourteen inches long with a leather-packed piston drawn down by a rack and pinion. A valve at the top connected the cylinder to the glass receiver through a stopcock. With the stopcock open, drawing the piston down expanded the air from the receiver into the cylinder; closing the stopcock and opening a vent, then pushing the piston up, expelled that air. Each stroke removed a fixed fraction of the remaining air, so pressure fell geometrically and never reached zero. For the gas law, a U-shaped tube sealed at the short end trapped a measured column of air; mercury poured into the long open arm compressed it, and the difference in mercury levels plus atmospheric pressure gave the total pressure, which Boyle compared against the air column's length.`,
    prerequisites: ['torricelli-barometer', 'harvey-circulation', 'archimedean-mechanics', 'glass'],
    consequences: ['royal-society-scientific-paper', 'newcomen-engine', 'periodic-table'],
    figures: [
      { name: 'Robert Boyle', role: 'Designed the experimental programme and published the results' },
      { name: 'Robert Hooke', role: 'Built the pump and operated it' },
      { name: 'Otto von Guericke', role: 'Magdeburg engineer whose earlier pump inspired Boyle\'s' },
    ],
    significance: 7,
    significanceJustification: 'The air pump established the vacuum as an experimental tool, gave the first quantitative gas law, and defined the social form of witnessed experiment that the Royal Society adopted. It sits directly upstream of chemistry and the steam engine.',
    domains: ['energy', 'materials', 'information'],
    sources: [
      { author: 'Robert Boyle', title: 'New Experiments Physico-Mechanicall, Touching the Spring of the Air, and its Effects', publisher: 'H. Hall for T. Robinson, Oxford', year: 1660 },
      { author: 'Steven Shapin and Simon Schaffer', title: 'Leviathan and the Air-Pump: Hobbes, Boyle, and the Experimental Life', publisher: 'Princeton University Press', year: 1985 },
      { author: 'Michael Hunter', title: 'Boyle: Between God and Science', publisher: 'Yale University Press', year: 2009 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'gutenberg-press',
    epochId: 'print-scientific',
    date: { year: 1455, precision: 'year', display: 'c. 1455' },
    location: 'Mainz, Holy Roman Empire (Germany)',
    title: 'The Gutenberg press and the 42-line Bible',
    summary: 'Johannes Gutenberg combined a hand mould for casting metal type, an oil-based ink and a screw press into a system that printed the 42-line Bible around 1455 and spread to every major European city within thirty years.',
    explanation: `Around 1450 Johannes Gutenberg, a goldsmith from Mainz, assembled a set of techniques into a working system for printing with movable metal type. Movable type itself was not new: Bi Sheng had used ceramic type in Song China and Korean printers had cast bronze type in the early fifteenth century. What Gutenberg added was a way to make type quickly and uniformly, an ink that adhered to metal, and a press that transferred the image evenly. The first major product, the 42-line Bible, was finished by 1455; a letter from Enea Silvio Piccolomini (the future Pope Pius II) describes seeing quires of it at Frankfurt in October 1454.

The causes were partly economic. Universities, courts and the Church had created a large demand for texts that scribes could not meet cheaply, and paper mills, following Chinese and Arabic methods, had spread through Italy, France and Germany during the fourteenth century. Gutenberg financed his work with loans from Johann Fust, lost a lawsuit to Fust in 1455 and saw his workshop pass to Fust and Peter Schoeffer, who ran it as a commercial press. Printers trained in Mainz carried the craft to Strasbourg, Cologne, Venice, Paris and beyond; by 1500 more than a thousand presses had produced perhaps ten million volumes, the so-called incunabula.

The significance was less the volume than the fixity. A printed edition consisted of identical copies, so errors could be listed and corrected in the next edition rather than multiplying in each scribe's hand, and a table of astronomical data or an anatomical woodcut could be trusted to match the one a colleague was looking at. Readers in different cities could cite the same page. This made cumulative correction possible, and it made the press the enabling technology of everything else in this epoch, from De revolutionibus and the Fabrica to the Philosophical Transactions.

Evidence for the details is uneven. No portrait or signed work of Gutenberg survives, and reconstruction of his methods rests on the Helmasperger notarial instrument of 1455, later accounts by Schoeffer's circle, and technical analysis of the surviving Bibles. Recent studies of type impressions suggest that early Mainz type may have been cast by a method other than the classic hand mould, so exact attribution of individual innovations remains debated, though the outcome does not.`,
    mechanism: `A punch of hardened steel bearing a single letter in relief was struck into a softer copper blank to make a matrix. The matrix was clamped into an adjustable hand mould and an alloy of lead, tin and antimony was poured in; the alloy expanded slightly on cooling to give a sharp face and could be cast hundreds of times an hour. Compositors set the type in lines in a stick, locked pages into a forme, and inked it with leather balls using an oil-and-lampblack ink adapted from painters, since water-based inks beaded on metal. Damp paper was laid on the forme and a screw press, adapted from wine and paper presses, pressed platen and paper together in one firm impression. Two workers could produce several hundred sheets a day.`,
    prerequisites: ['movable-type-song', 'chinese-paper', 'alphabet', 'medieval-universities'],
    consequences: ['copernican-heliocentrism', 'vesalius-anatomy', 'mercator-projection', 'royal-society-scientific-paper', 'linnaean-taxonomy'],
    figures: [
      { name: 'Johannes Gutenberg', role: 'Goldsmith who integrated type casting, ink and press into a working system' },
      { name: 'Johann Fust', role: 'Financier who took over the Mainz workshop in 1455' },
      { name: 'Peter Schoeffer', role: 'Gutenberg\'s assistant and later master printer who refined type and layout' },
    ],
    significance: 10,
    significanceJustification: 'Print is the precondition for cumulative science, the Reformation and mass literacy. It changed the cost and reliability of every later transfer of knowledge in the atlas.',
    domains: ['information', 'communication', 'manufacturing'],
    sources: [
      { author: 'Elizabeth L. Eisenstein', title: 'The Printing Press as an Agent of Change', publisher: 'Cambridge University Press', year: 1979 },
      { author: 'Lucien Febvre and Henri-Jean Martin', title: 'The Coming of the Book: The Impact of Printing 1450 to 1800', publisher: 'Verso', year: 1976 },
      { author: 'Andrew Pettegree', title: 'The Book in the Renaissance', publisher: 'Yale University Press', year: 2010 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'caravel-navigation',
    epochId: 'print-scientific',
    date: { year: 1488, precision: 'year', display: '1488 (Dias rounds the Cape; caravel developed from the 1440s)' },
    location: 'Lisbon and Lagos, Portugal; the Atlantic coast of Africa',
    title: 'The caravel and Atlantic celestial navigation',
    summary: 'Portuguese shipwrights and pilots combined the lateen-rigged caravel with compass, quadrant and printed declination tables, enabling voyages against the wind down the African coast and the rounding of the Cape of Good Hope in 1488.',
    explanation: `In the decades after 1440 Portuguese mariners sailing for Prince Henry and later for King John II worked out how to go far down the Atlantic coast of Africa and, crucially, how to come back. Square-rigged ships could not beat against the northeast trade winds on the return, so shipwrights adapted the caravel, a small vessel with two or three lateen sails on a shallow, fine hull, which could sail closer to the wind. Pilots learned the volta do mar, the wide westward sweep into the open Atlantic to catch the westerlies home. Bartolomeu Dias rounded the Cape of Good Hope in 1488 in two caravels, and Vasco da Gama reached India in 1498.

The navigational problem was as important as the ship. Out of sight of land, dead reckoning by compass and estimated speed accumulated error. Portuguese pilots, advised by the Jewish astronomer Abraham Zacuto and by a royal commission of 1484, adopted the quadrant and mariner's astrolabe to measure the altitude of the Pole Star or the noon sun, and used tables of solar declination, printed from the 1490s in the Regimento do astrolabio, to convert that altitude into latitude. Latitude sailing, running down a parallel to a known destination, became the standard method for two centuries. Longitude remained unsolved until the chronometer.

The causes were commercial and dynastic: gold and slaves from West Africa, the search for a sea route to Asian spices that bypassed Venetian and Mamluk intermediaries, and crusading rivalry with Castile. The consequences were global. Within thirty years of Dias, Columbus had crossed the Atlantic in ships of similar type, Magellan's expedition had circumnavigated, and Iberian empires stretched from Brazil to the Moluccas. The Columbian exchange of crops, animals, people and diseases that followed reshaped every continent, and demand from the sea trade drove much of the cartography, astronomy and instrument making of this epoch.

Evidence rests on chronicles by Zurara and Barros, surviving rutters and regimentos, and a small number of contemporary charts. Portuguese secrecy policy and the loss of the Casa da India archive in the 1755 Lisbon earthquake mean that many details of ship design and navigational practice are reconstructed rather than documented, and the tidy story of a Sagres school of navigation is a later invention.`,
    mechanism: `The caravel's lateen sails, triangular sails on long yards, could be trimmed nearly fore-and-aft, letting the ship make progress at roughly sixty degrees off the wind, while a stern rudder and shallow draft suited coastal exploration and river mouths. For position, the pilot held a quadrant or a heavy brass mariner's astrolabe at arm's length, sighted the sun at local noon or Polaris at night, and read the altitude in degrees. Subtracting the sun's tabulated declination for that date, or applying a correction for Polaris, gave latitude. Compass bearing, sand-glass time and a log of estimated speed gave a dead-reckoned track between fixes, recorded on a traverse board and plotted on a portolan-style chart.`,
    prerequisites: ['sailing-ship', 'magnetic-compass', 'astrolabe', 'ptolemaic-astronomy'],
    consequences: ['mercator-projection', 'harrison-chronometer', 'linnaean-taxonomy', 'smallpox-inoculation'],
    figures: [
      { name: 'Bartolomeu Dias', role: 'Commander of the 1487 to 1488 voyage that rounded the Cape of Good Hope' },
      { name: 'Prince Henry of Portugal', role: 'Patron of the early African voyages' },
      { name: 'Abraham Zacuto', role: 'Astronomer whose tables underpinned Portuguese latitude navigation' },
    ],
    significance: 8,
    significanceJustification: 'Ocean navigation connected the hemispheres for the first time on a sustained basis. It created the demand for astronomy, cartography and timekeeping that drove much of this epoch and began the global exchange that defines the modern world.',
    domains: ['transportation', 'information', 'weapons-security'],
    sources: [
      { author: 'J. H. Parry', title: 'The Age of Reconnaissance: Discovery, Exploration and Settlement 1450 to 1650', publisher: 'University of California Press', year: 1981 },
      { author: 'Peter Russell', title: 'Prince Henry the Navigator: A Life', publisher: 'Yale University Press', year: 2000 },
      { author: 'Felipe Fernandez-Armesto', title: 'Pathfinders: A Global History of Exploration', publisher: 'W. W. Norton', year: 2006 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'copernican-heliocentrism',
    epochId: 'print-scientific',
    date: { year: 1543, precision: 'year', display: '1543' },
    location: 'Frombork, Royal Prussia (Poland); printed in Nuremberg',
    title: 'Copernicus publishes De revolutionibus',
    summary: 'Nicolaus Copernicus placed the sun at the centre of the planetary system in De revolutionibus orbium coelestium (1543), giving a mathematically complete alternative to Ptolemy that Kepler, Galileo and Newton would later vindicate.',
    explanation: `Nicolaus Copernicus, a canon of the cathedral chapter at Frombork on the Baltic, spent some thirty years working out a full mathematical astronomy in which the earth rotates daily on its axis and orbits the sun annually, along with the other planets. He had circulated a short sketch, the Commentariolus, around 1514, but delayed publication of the full treatise until the young Wittenberg mathematician Georg Joachim Rheticus visited him in 1539 and pressed him to release it. De revolutionibus orbium coelestium was printed by Johannes Petreius in Nuremberg in 1543, and Copernicus is said to have received a copy on his deathbed in May of that year.

Copernicus was not driven by new observations; he used mostly Ptolemaic and Arabic data. His motive was mathematical and aesthetic. Ptolemy's system explained planetary motion with a device called the equant that violated the ancient principle of uniform circular motion, and it left the order and distances of the planets arbitrary. Placing the sun at the centre fixed the planetary order, explained retrograde motion as a perspective effect of the earth overtaking outer planets, and allowed the relative sizes of the orbits to be derived. Copernicus retained circles and epicycles, so his system was no simpler in detail and no more accurate in prediction than Ptolemy's.

Why it mattered was that print delivered the argument, with its tables and diagrams, to every mathematician in Europe. Owen Gingerich's census of surviving first and second editions shows that copies were owned and annotated by Reinhold, Tycho Brahe, Kepler and Galileo among others. The Prutenic Tables (1551) computed from Copernican models were used for the Gregorian calendar reform. Osiander's unsigned preface presented the theory as a calculating hypothesis, which for a time blunted theological objection; the book was placed on the Index in 1616, after Galileo's telescopic discoveries had made the physical claim harder to ignore.

The evidence for what Copernicus believed and when is good: his autograph manuscript survives in Krakow, and the printing history is well documented. What is contested is influence. Recent scholarship stresses his debts to Maragha-school astronomers such as Ibn al-Shatir, whose mathematical devices appear in his work by routes not yet traced, and cautions that few astronomers accepted the earth's motion as physical fact before 1600. The revolution was a slow one, but it began here.`,
    mechanism: `Copernicus kept the geometrical toolkit of Ptolemaic astronomy, combinations of uniformly rotating circles, but reassigned the roles. The daily rotation of the heavens became a rotation of the earth; the annual motion that Ptolemy had built into every planet's model became the earth's own orbit, so the same loop appeared in each planet only because the observer was moving. Because each planet's apparent retrograde arc depends on the ratio of its orbit to the earth's, Copernicus could compute the relative radius of each orbit in units of the earth's, producing for the first time a scaled diagram of the solar system. Small epicycles replaced the equant to preserve uniform circular motion, and the whole was worked into tables for computing positions.`,
    prerequisites: ['ptolemaic-astronomy', 'gutenberg-press', 'euclid-elements', 'indian-numerals-zero', 'medieval-universities'],
    consequences: ['kepler-laws', 'galileo-telescope', 'newton-principia'],
    figures: [
      { name: 'Nicolaus Copernicus', role: 'Author of the heliocentric system' },
      { name: 'Georg Joachim Rheticus', role: 'Disciple who persuaded Copernicus to publish and saw the book through the press' },
      { name: 'Andreas Osiander', role: 'Lutheran theologian who added the anonymous preface calling the theory a hypothesis' },
    ],
    significance: 9,
    significanceJustification: 'Heliocentrism reframed the central problem of astronomy and removed humanity from the physical centre of the cosmos. Its vindication by Kepler, Galileo and Newton is the spine of the scientific revolution.',
    domains: ['space', 'information'],
    sources: [
      { author: 'Nicolaus Copernicus', title: 'De revolutionibus orbium coelestium', publisher: 'Johannes Petreius, Nuremberg', year: 1543 },
      { author: 'Owen Gingerich', title: 'The Book Nobody Read: Chasing the Revolutions of Nicolaus Copernicus', publisher: 'Walker and Company', year: 2004 },
      { author: 'Thomas S. Kuhn', title: 'The Copernican Revolution: Planetary Astronomy in the Development of Western Thought', publisher: 'Harvard University Press', year: 1957 },
      { author: 'N. M. Swerdlow and O. Neugebauer', title: 'Mathematical Astronomy in Copernicus\'s De Revolutionibus', publisher: 'Springer', year: 1984 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'vesalius-anatomy',
    epochId: 'print-scientific',
    date: { year: 1543, precision: 'year', display: '1543' },
    location: 'Padua, Republic of Venice; printed in Basel',
    title: 'Vesalius publishes De humani corporis fabrica',
    summary: 'Andreas Vesalius, professor at Padua, dissected human bodies himself and published De humani corporis fabrica (1543), whose woodcuts corrected Galen on hundreds of points and made direct observation the standard of anatomy.',
    explanation: `Andreas Vesalius, born in Brussels in 1514 and appointed lecturer in surgery and anatomy at Padua at the age of twenty-three, broke with the medieval practice of lecturing from Galen while a barber-surgeon cut. He performed dissections himself, in front of students, and compared what he found with the ancient text. Galen had dissected animals, chiefly Barbary macaques and pigs, because human dissection was forbidden in Roman Pergamon and Alexandria in his day; Vesalius showed that the five-lobed liver, the rete mirabile at the base of the brain and the segmented sternum Galen described belonged to other species. In 1543 he published De humani corporis fabrica libri septem in Basel with the printer Johannes Oporinus, in seven books with more than two hundred woodcuts.

The Fabrica succeeded because of print. The illustrations, produced in Titian's workshop in Venice, probably by Jan van Calcar and others, were cut on pearwood blocks that Vesalius carried over the Alps himself; they showed the skeleton and the flayed muscle-men in landscape settings, with lettered keys tying figure to text. A reader anywhere could compare the printed body with a real one. Vesalius wrote that a picture could show in a glance what pages of description could not, and the book set the pattern for illustrated scientific publishing.

The causes lay in the Paduan medical faculty, where civic authorities supplied bodies of executed criminals, and in humanist scholarship, which had produced better Greek editions of Galen and so made the discrepancies visible. Vesalius's own motive was partly reputational: the Fabrica was dedicated to Charles V, whose physician he became. He left academic life soon after and died in 1564 on the return from a pilgrimage to Jerusalem.

The significance is that anatomy became an observational discipline with a public standard of evidence. Realdo Colombo, Fabricius and eventually William Harvey worked in the tradition Vesalius founded at Padua, and Harvey's discovery of the circulation depended on the Fabrician description of the venous valves. Vesalius did not overturn Galenic physiology, and he retained the porous septum of the heart in his first edition, but he legitimized the claim that the ancients could be wrong about the body. The evidence is unusually complete: the book itself, its 1555 second edition, an annotated copy with Vesalius's own corrections rediscovered in 2007, and extensive contemporary testimony.`,
    mechanism: `Vesalius worked from fresh cadavers obtained through the Paduan magistrates, dissecting in a temporary wooden theatre in winter to slow decay and preserving skeletons by boiling and articulating bones with wire. Each region was exposed in sequence, from bones to muscles, vessels, nerves and organs, and compared point by point against Galen's Greek text. Drawings made at the table were transferred to pearwood blocks and cut in relief, so that the woodcut could be printed in the same forme as the movable type; letters engraved on the figures matched a printed key. Oporinus's press ran the sheets on large folio paper, and the same blocks, slightly recut, served the 1555 edition, guaranteeing that every reader saw an identical image.`,
    prerequisites: ['galenic-medicine', 'gutenberg-press', 'medieval-universities'],
    consequences: ['harvey-circulation', 'microscope'],
    figures: [
      { name: 'Andreas Vesalius', role: 'Anatomist and author of the Fabrica' },
      { name: 'Johannes Oporinus', role: 'Basel printer of the 1543 and 1555 editions' },
      { name: 'Jan van Calcar', role: 'Artist from Titian\'s workshop credited with many of the illustrations' },
    ],
    significance: 7,
    significanceJustification: 'The Fabrica made direct observation, reproduced in print, the arbiter of anatomical fact. It founded the tradition that led through Harvey to modern physiology and medicine.',
    domains: ['biology-medicine', 'information'],
    sources: [
      { author: 'Andreas Vesalius', title: 'De humani corporis fabrica libri septem', publisher: 'Johannes Oporinus, Basel', year: 1543 },
      { author: 'C. D. O\'Malley', title: 'Andreas Vesalius of Brussels, 1514 to 1564', publisher: 'University of California Press', year: 1964 },
      { author: 'J. B. deC. M. Saunders and Charles D. O\'Malley', title: 'The Illustrations from the Works of Andreas Vesalius of Brussels', publisher: 'Dover Publications', year: 1973 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'kepler-laws',
    epochId: 'print-scientific',
    date: { year: 1609, precision: 'year', display: '1609 (first two laws); third law 1619' },
    location: 'Prague, Kingdom of Bohemia',
    title: 'Kepler\'s laws of planetary motion',
    summary: 'Using Tycho Brahe\'s observations of Mars, Johannes Kepler showed in Astronomia Nova (1609) that planets move in ellipses with the sun at one focus, sweeping equal areas in equal times, and in 1619 related orbital period to distance.',
    explanation: `Johannes Kepler arrived in Prague in 1600 as assistant to Tycho Brahe, the Danish nobleman whose observatory on Hven had produced the most accurate naked-eye positions ever recorded, good to about one or two minutes of arc. Tycho set him to work on Mars, the planet whose motion fitted circular models worst. After Tycho's death in 1601 Kepler inherited the data and the post of imperial mathematician to Rudolf II, and over the following years he waged what he called his war on Mars.

Kepler began, like everyone, with circles. He built a model with an equant that matched Tycho's longitudes to within two minutes of arc, then rejected it because it disagreed with the observations by eight minutes at some points. That refusal to tolerate a discrepancy smaller than any earlier astronomer could have detected is the hinge of the story. He then tried an oval, and finally found that an ellipse with the sun at one focus fitted the positions exactly. Along the way he had discovered that the line from the sun to Mars sweeps out equal areas in equal times, which replaced uniform circular motion as the rule governing speed. Both results were published in Astronomia Nova in 1609, a book which is unusual in reporting the author's false starts in detail. The third law, that the square of the orbital period is proportional to the cube of the mean distance, appeared in Harmonices Mundi in 1619.

The causes were the conjunction of Tycho's data, Copernican conviction, and Kepler's unusual willingness to look for physical causes: he imagined a force from the rotating sun sweeping the planets round, weakening with distance, influenced by William Gilbert's De Magnete (1600). The physics was wrong but the search for a cause led him to accept a non-circular, non-uniform orbit that a pure geometer would have rejected.

The consequences unfolded slowly. Few astronomers adopted the ellipse before the Rudolphine Tables of 1627 demonstrated its predictive power, most dramatically in Gassendi's observation of the transit of Mercury in 1631, which Kepler had predicted to within a fraction of a day. Newton later showed in the Principia that all three laws follow from an inverse-square attraction, turning Kepler's descriptions into theorems. The evidence is exceptionally rich: Tycho's observation logs, Kepler's manuscripts and correspondence, and Astronomia Nova itself survive, allowing historians to reconstruct the calculations step by step.`,
    mechanism: `Kepler worked by triangulation. Because Mars returns to the same point in its orbit every 687 days while the earth does not, pairs of Tycho's observations separated by that interval gave him two lines of sight to one fixed point in Mars's orbit from two known positions of the earth, fixing Mars's true position and distance without assuming any model. Repeating this for several points traced the orbit's shape. He also used Mars to determine the earth's own orbit, finding it too was non-uniform. He tested candidate curves by computing predicted longitudes and comparing them with observations, accepting only agreement within Tycho's accuracy. The area law emerged from summing distances along the orbit as a proxy for time, an early use of infinitesimal methods.`,
    prerequisites: ['copernican-heliocentrism', 'ptolemaic-astronomy', 'euclid-elements', 'gutenberg-press'],
    consequences: ['newton-principia', 'calculus', 'kepler-exoplanets'],
    figures: [
      { name: 'Johannes Kepler', role: 'Astronomer who derived the three laws' },
      { name: 'Tycho Brahe', role: 'Observer whose data made the discovery possible' },
    ],
    significance: 8,
    significanceJustification: 'Kepler replaced two thousand years of circular astronomy with orbits that were actually correct and set the standard of matching theory to observation within instrumental error. Newton\'s gravitation was built to explain these laws.',
    domains: ['space', 'information'],
    sources: [
      { author: 'Johannes Kepler', title: 'Astronomia Nova', publisher: 'Heidelberg (English translation by William H. Donahue, Cambridge University Press, 1992)', year: 1609 },
      { author: 'Max Caspar', title: 'Kepler', publisher: 'Dover Publications', year: 1993 },
      { author: 'James R. Voelkel', title: 'The Composition of Kepler\'s Astronomia Nova', publisher: 'Princeton University Press', year: 2001 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'galileo-telescope',
    epochId: 'print-scientific',
    date: { year: 1610, month: 3, day: 13, precision: 'exact', display: '1610-03-13 (Sidereus Nuncius published; observations from late 1609)' },
    location: 'Padua and Venice, Republic of Venice',
    title: 'Galileo turns the telescope on the sky',
    summary: 'Galileo Galilei improved the Dutch spyglass to twenty-power, observed lunar mountains, four moons of Jupiter and countless stars, and published Sidereus Nuncius in March 1610, the first instrument-based discoveries in astronomy.',
    explanation: `In September 1608 the spectacle maker Hans Lipperhey of Middelburg applied to the States General of the Netherlands for a patent on a tube with two lenses that made distant objects appear near. The patent was refused because the device was too easily copied, and within a year spyglasses of about three power were on sale in Paris, London and Italy. Galileo Galilei, professor of mathematics at Padua, heard of it in mid-1609, worked out the optics for himself, and by grinding better lenses produced instruments of eight, then twenty and thirty power. In August 1609 he demonstrated one to the Venetian Senate from the campanile, which doubled his salary.

In the winter of 1609 to 1610 he pointed it upward. He saw that the moon's terminator was ragged and that bright points appeared in the dark region ahead of it and grew into illuminated patches, which he interpreted correctly as mountain peaks catching the sunrise, and he estimated their heights from the shadows. He resolved the Milky Way into stars. On 7 January 1610 he noticed three small stars in a line near Jupiter, and over the following nights found four bodies that moved with the planet and around it. Sidereus Nuncius, printed in Venice on 13 March 1610, reported all this with engravings, and the first run of 550 copies sold out. He later observed the phases of Venus, which showed that Venus circles the sun, and the odd appendages of Saturn.

The moons of Jupiter were decisive because they refuted the objection that a moving earth would leave its moon behind: here were bodies orbiting a planet that everyone agreed was moving. The phases of Venus were incompatible with Ptolemy's arrangement. Galileo named the moons the Medicean stars, secured the post of mathematician and philosopher to the Grand Duke of Tuscany, and became the public face of Copernicanism, which led to his condemnation by the Inquisition in 1633.

Beyond astronomy, the episode established that an instrument could reveal what senses and reason could not, and that such discoveries should be published quickly with enough detail for others to repeat them. Kepler confirmed the moons within months, and the Jesuit astronomers of the Collegio Romano followed in 1611. The evidence is unusually direct: Galileo's observation notebooks, the printed book, two of his telescopes in Florence, and Kepler's contemporary reply all survive.`,
    mechanism: `Galileo's telescope was a Dutch or Galilean refractor: a plano-convex objective lens of long focal length at the front and a plano-concave eyepiece of short focal length at the eye, separated by the difference of their focal lengths. The objective forms a converging beam; the concave eyepiece intercepts it before the image forms and renders the rays parallel again, so the eye sees an upright, magnified virtual image. Magnification equals the ratio of the two focal lengths, so higher power required a longer objective focal length and a stronger eyepiece, at the cost of a very narrow field of view (Galileo's twenty-power instrument showed about a quarter of the moon). He stopped down the objective with a cardboard ring to reduce aberrations from the poor edges of hand-ground glass.`,
    prerequisites: ['eyeglasses', 'ibn-al-haytham-optics', 'copernican-heliocentrism', 'gutenberg-press', 'glass'],
    consequences: ['microscope', 'huygens-pendulum-clock', 'newton-principia', 'torricelli-barometer', 'hubble-telescope'],
    figures: [
      { name: 'Galileo Galilei', role: 'Improved the telescope and made and published the first telescopic discoveries' },
      { name: 'Hans Lipperhey', role: 'Middelburg spectacle maker who applied for the first telescope patent in 1608' },
    ],
    significance: 9,
    significanceJustification: 'The telescope was the first instrument to extend a human sense beyond its natural limit and immediately produced evidence bearing on the largest question of the age. It set the pattern of instrument, observation and rapid publication that defines experimental science.',
    domains: ['space', 'information', 'materials'],
    sources: [
      { author: 'Galileo Galilei', title: 'Sidereus Nuncius, or The Sidereal Messenger', publisher: 'Venice (English translation by Albert Van Helden, University of Chicago Press, 1989)', year: 1610 },
      { author: 'J. L. Heilbron', title: 'Galileo', publisher: 'Oxford University Press', year: 2010 },
      { author: 'Albert Van Helden', title: 'The Invention of the Telescope', publisher: 'Transactions of the American Philosophical Society 67(4)', year: 1977 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'harvey-circulation',
    epochId: 'print-scientific',
    date: { year: 1628, precision: 'year', display: '1628' },
    location: 'London, England; printed in Frankfurt',
    title: 'Harvey demonstrates the circulation of the blood',
    summary: 'William Harvey showed by dissection, vivisection, ligature experiments and a quantitative argument that the heart pumps blood in a closed circuit through arteries and veins, published as De motu cordis in 1628.',
    explanation: `William Harvey, a Kentish physician trained at Cambridge and at Padua under Fabricius, announced in his Lumleian lectures at the College of Physicians in London in 1616 and published in 1628 that the blood circulates. His short Latin book, Exercitatio anatomica de motu cordis et sanguinis in animalibus, printed in Frankfurt for the international book fair, overturned the Galenic account in which blood was continuously made in the liver from food, flowed outward through the veins to be consumed by the tissues, and passed in small quantities through invisible pores in the septum of the heart to be mixed with air from the lungs.

Harvey's method was comparative and experimental. He studied the beating heart in cold-blooded animals such as eels and frogs, whose slow rhythm let him see that the heart contracts actively to expel blood, rather than expanding to draw it in as Galen had held. He tied off arteries and veins in living dogs and saw which side swelled. He used the valves in the veins, which his teacher Fabricius had described, to show by pressing on a forearm vein that blood in the veins moves only toward the heart. And he made a quantitative argument: the heart expels roughly two ounces per beat, and at over a thousand beats an hour it moves far more blood in a day than the body could possibly make from food, so the same blood must return and go round again.

The one link he could not see was how blood passed from arteries to veins in the tissues; he inferred pores or anastomoses. Marcello Malpighi observed the capillaries in a frog's lung with a microscope in 1661, four years after Harvey's death, closing the circuit.

The theory was resisted for decades, notably by the Paris faculty, because it undermined the rationale for bloodletting and the whole Galenic physiology of humours. Descartes accepted the circulation but not Harvey's account of the heartbeat. By the 1660s it was standard, and the Oxford physiologists around Boyle, Hooke and Richard Lower built on it to study respiration and transfusion. Harvey's importance lies as much in method as result: he showed that a physiological question could be settled by experiment and measurement, and the ligature demonstration became a classroom set piece for centuries. The evidence is direct, resting on the book, his lecture notes, and his later replies to critics.`,
    mechanism: `Harvey's demonstration combined three lines of evidence. Direct observation of exposed hearts in slow-beating animals showed that the heart hardens and whitens as it contracts, ejecting blood into the arteries, whose pulse is the pressure wave of that ejection. Ligature experiments showed that a tight band on the arm stops the arterial pulse below it and empties the veins, while a moderate band that blocks only the veins makes them swell below the ligature, so arteries carry blood outward and veins carry it back. Finger-pressure tests on the visible veins showed that the valves prevent backward flow. Finally, multiplying the stroke volume by the pulse rate gave a daily output in the hundreds of pounds, impossible to supply by digestion, so the blood must recirculate.`,
    prerequisites: ['vesalius-anatomy', 'galenic-medicine', 'medieval-universities'],
    consequences: ['microscope', 'boyle-air-pump'],
    figures: [
      { name: 'William Harvey', role: 'Physician who discovered and demonstrated the circulation' },
      { name: 'Hieronymus Fabricius', role: 'Paduan anatomist whose description of venous valves Harvey built on' },
      { name: 'Marcello Malpighi', role: 'Microscopist who observed the capillaries in 1661' },
    ],
    significance: 7,
    significanceJustification: 'Harvey founded experimental physiology and demolished the theoretical basis of Galenic medicine. His quantitative argument is one of the first uses of measurement to settle a biological question.',
    domains: ['biology-medicine'],
    sources: [
      { author: 'William Harvey', title: 'Exercitatio anatomica de motu cordis et sanguinis in animalibus', publisher: 'William Fitzer, Frankfurt', year: 1628 },
      { author: 'Thomas Wright', title: 'Circulation: William Harvey\'s Revolutionary Idea', publisher: 'Chatto and Windus', year: 2012 },
      { author: 'Roger French', title: 'William Harvey\'s Natural Philosophy', publisher: 'Cambridge University Press', year: 1994 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'torricelli-barometer',
    epochId: 'print-scientific',
    date: { year: 1643, precision: 'year', display: '1643' },
    location: 'Florence, Grand Duchy of Tuscany',
    title: 'Torricelli\'s mercury barometer and the weight of the air',
    summary: 'Evangelista Torricelli inverted a tube of mercury into a basin in 1643, produced the first sustained vacuum, and explained the 76 centimetre column as the weight of the atmosphere, founding pneumatics and meteorology.',
    explanation: `Galileo had noted, from the complaints of Florentine well-diggers, that a suction pump could not raise water more than about ten metres, and had guessed that a column of water simply broke under its own weight beyond that height. After Galileo's death his last assistant, Evangelista Torricelli, mathematician to the Grand Duke, reasoned that the limit came instead from outside: we live, he wrote, at the bottom of an ocean of air, and the air has weight. If so, a denser liquid should rise less far. In 1643, with the help of Vincenzo Viviani, he filled a glass tube about a metre long with mercury, closed the open end with a finger, inverted it into a dish of mercury and released it. The mercury fell to a height of about 76 centimetres and stopped, leaving an apparently empty space above.

Torricelli described the experiment in a letter to Michelangelo Ricci in Rome in June 1644. He drew two conclusions. The space at the top was a vacuum, which Aristotelian physics held to be impossible. And the column was held up by the pressure of the atmosphere on the mercury in the dish, so that the height should vary with the weight of the air above. He noticed that it did change from day to day, though he could not immediately separate weather effects from other causes.

The experiment spread quickly through correspondence with Mersenne in Paris. Blaise Pascal repeated it with wine and water in long tubes at Rouen in 1646, and in 1648 his brother-in-law Florin Perier carried a barometer up the Puy de Dome and found the column about three inches shorter at the summit than at the base. That settled the question: the column measured the weight of the air above, and the vacuum was real. Otto von Guericke's air pump at Magdeburg (demonstrated in 1654) and Boyle's at Oxford followed directly.

The significance goes beyond the instrument. The barometer put a number on something invisible and gave experimenters a working vacuum, which was needed to study combustion, respiration, sound and the elasticity of air. The recognition that the atmosphere exerts a pressure of roughly a kilogram per square centimetre was the physical basis on which Papin, Savery and Newcomen would later build engines driven by that pressure. Evidence is secure: Torricelli's letters survive, as do Pascal's printed account and the correspondence of Mersenne's circle.`,
    mechanism: `Mercury is about 13.6 times as dense as water, so a column that balances the atmosphere is about 76 centimetres rather than ten metres, short enough for a glass tube. When the sealed tube is inverted into the basin, mercury drains until the pressure at the surface of the basin, transmitted up through the liquid, equals the weight of the column plus the near-zero pressure of the vapour above it. Any change in atmospheric pressure is registered as a change in column height, about one centimetre per one percent change. The space above the mercury is a true vacuum apart from a trace of mercury vapour, because mercury does not release dissolved air and does not wet glass, which is why water, which boils into the vacuum, gives a much less clean result.`,
    prerequisites: ['archimedean-mechanics', 'galileo-telescope', 'glass'],
    consequences: ['boyle-air-pump', 'newcomen-engine', 'royal-society-scientific-paper'],
    figures: [
      { name: 'Evangelista Torricelli', role: 'Devised the experiment and the explanation' },
      { name: 'Vincenzo Viviani', role: 'Performed the first experiment with Torricelli' },
      { name: 'Blaise Pascal', role: 'Organized the Puy de Dome test that confirmed the atmospheric explanation' },
    ],
    significance: 7,
    significanceJustification: 'The barometer created the vacuum as a laboratory tool and established that the atmosphere has measurable weight, the foundation of pneumatic chemistry and of the atmospheric steam engine.',
    domains: ['energy', 'materials', 'information'],
    sources: [
      { author: 'W. E. Knowles Middleton', title: 'The History of the Barometer', publisher: 'Johns Hopkins Press', year: 1964 },
      { author: 'Steven Shapin and Simon Schaffer', title: 'Leviathan and the Air-Pump: Hobbes, Boyle, and the Experimental Life', publisher: 'Princeton University Press', year: 1985 },
      { author: 'Blaise Pascal', title: 'Recit de la grande experience de l\'equilibre des liqueurs', publisher: 'Charles Savreux, Paris', year: 1648 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'huygens-pendulum-clock',
    epochId: 'print-scientific',
    date: { year: 1656, precision: 'year', display: '1656 (patent 1657; Horologium Oscillatorium 1673)' },
    location: 'The Hague, Dutch Republic',
    title: 'Huygens\'s pendulum clock',
    summary: 'Christiaan Huygens applied a pendulum to a clock escapement in 1656, improving timekeeping accuracy from a quarter of an hour a day to a few seconds, and in 1673 published the mathematical theory of the pendulum that made precision measurement possible.',
    explanation: `Galileo had observed around 1602 that a pendulum's period depends on its length and, for small swings, hardly at all on its amplitude, and late in life he sketched a clock regulated by one, which his son Vincenzo began but did not finish. Christiaan Huygens, the son of a Dutch diplomat and already a gifted mathematician, built the first working pendulum clock at the end of 1656 with the clockmaker Salomon Coster of The Hague, obtained a States General patent in June 1657, and described the design in Horologium (1658). Verge-and-foliot clocks of the time drifted by fifteen minutes or more a day; Huygens's first clocks were good to about a minute, and improved versions to a few seconds.

Huygens then discovered that the pendulum was not perfectly isochronous: wider swings took slightly longer. Between 1659 and 1673 he solved the problem mathematically, showing that a bob constrained to move on a cycloid rather than a circle has a period independent of amplitude, and that a pendulum suspended between two cycloidal cheeks traces exactly that curve. Horologium Oscillatorium (1673) contains this result, the theory of the compound pendulum and its centre of oscillation, the formula relating period to length and gravity, and the laws of centrifugal force. It is one of the founding texts of mathematical physics and was studied closely by Newton.

The causes were partly the longitude problem. Huygens hoped a clock accurate at sea would let navigators compare local time with home-port time and so find longitude, and he ran sea trials in the 1660s, but pendulums could not survive a ship's motion. In 1675 he invented the balance spring, which regulated watches and pointed the way to Harrison. Robert Hooke claimed priority for the spring, one of several disputes of the epoch.

The consequences were immediate on land. Pendulum clocks in observatories at Paris, Greenwich and Danzig allowed transit times of stars to be measured to the second, which was what made Flamsteed's catalogue and Roemer's 1676 estimate of the speed of light possible. Jean Richer's finding in 1672 that a pendulum ran slower at Cayenne than in Paris revealed that gravity varies with latitude, a key datum for Newton's argument that the earth is oblate. The evidence is strong: patents, Huygens's correspondence, surviving Coster clocks and the published treatises.`,
    mechanism: `A weight-driven train of gears turns a crown wheel whose teeth are checked alternately by two pallets on a verge. In earlier clocks the verge carried a foliot bar whose swing rate depended on the driving force; Huygens attached the verge instead to a pendulum through a light crutch, so that the pendulum's own gravitational restoring force set the rate and the escapement merely gave it a small push each swing to replace energy lost to friction and air. Period depends on length, about one second per swing for a rod just under a metre long, so a clock can be regulated by sliding the bob. Cycloidal cheeks at the suspension shorten the effective length at larger amplitudes, correcting the residual amplitude error, though later long-pendulum, small-arc designs made them unnecessary.`,
    prerequisites: ['mechanical-clock', 'galileo-telescope', 'archimedean-mechanics'],
    consequences: ['newton-principia', 'harrison-chronometer', 'gps'],
    figures: [
      { name: 'Christiaan Huygens', role: 'Inventor of the pendulum clock and author of its theory' },
      { name: 'Salomon Coster', role: 'Hague clockmaker who built the first pendulum clocks under licence' },
      { name: 'Galileo Galilei', role: 'Discovered the near-isochronism of the pendulum and sketched a clock' },
    ],
    significance: 7,
    significanceJustification: 'The pendulum clock improved timekeeping by two orders of magnitude and made the second a measurable unit, which astronomy, physics and navigation all required. Huygens\'s theory of it was a model for Newton.',
    domains: ['information', 'manufacturing', 'transportation'],
    sources: [
      { author: 'Christiaan Huygens', title: 'Horologium Oscillatorium (The Pendulum Clock)', publisher: 'F. Muguet, Paris (English translation by Richard J. Blackwell, Iowa State University Press, 1986)', year: 1673 },
      { author: 'Joella G. Yoder', title: 'Unrolling Time: Christiaan Huygens and the Mathematization of Nature', publisher: 'Cambridge University Press', year: 1988 },
      { author: 'David S. Landes', title: 'Revolution in Time: Clocks and the Making of the Modern World', publisher: 'Belknap Press of Harvard University Press', year: 1983 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'microscope',
    epochId: 'print-scientific',
    date: { year: 1665, precision: 'year', display: '1665 (Micrographia); Leeuwenhoek\'s animalcules 1676' },
    location: 'London, England and Delft, Dutch Republic',
    title: 'The microscope reveals a hidden world',
    summary: 'Robert Hooke\'s Micrographia (1665) and Antoni van Leeuwenhoek\'s single-lens observations of bacteria and protozoa from the 1670s showed that living matter had structure and inhabitants far below the limit of sight.',
    explanation: `Compound microscopes with an objective and an eyepiece were being made in the Netherlands and Italy by the 1620s, probably by the same spectacle makers who produced telescopes; Galileo sent one to Federico Cesi in 1624, and Cesi's Accademia dei Lincei published the first microscopic drawings, of bees, in 1625. The instruments were dim and blurred by chromatic and spherical aberration, and for forty years they produced curiosities rather than discoveries.

Two publications changed that. In January 1665 the Royal Society published Robert Hooke's Micrographia, a folio of large engraved plates showing a flea, a louse, the compound eye of a fly, the point of a needle, and a thin slice of cork in which Hooke saw a honeycomb of tiny chambers he called cells. The book was a sensation; Samuel Pepys sat up until two in the morning reading it. It showed that the everyday world had structure at every scale and that an instrument could report it in reproducible pictures.

Then, from 1673, the Delft draper Antoni van Leeuwenhoek began sending letters to the Royal Society describing what he saw through tiny single-lens microscopes he ground himself. His lenses, some under two millimetres across, magnified up to about 270 times, far beyond any compound instrument of the day. In 1674 he described protozoa in lake water, in 1676 he reported bacteria in pepper infusions, in 1677 spermatozoa, and in 1683 the bacteria in scrapings from his own teeth. The Society was sceptical and sent a delegation, which confirmed the animalcules in 1677. Malpighi in Bologna and Swammerdam in Amsterdam meanwhile used microscopes to trace capillaries, the structure of the lung and kidney, and insect metamorphosis.

The significance is that a new domain of nature was opened to investigation, but the consequences were delayed. Nobody in the seventeenth century connected animalcules with disease, and the compound microscope remained too poor in resolution for serious cell biology until achromatic objectives in the 1830s. Leeuwenhoek shared neither his lens-making method nor his best instruments, so his results could not be extended by others. Still, cell theory, germ theory and bacteriology all rest on the observation, made here, that living things are built of and surrounded by organisms and structures invisible to the eye. Evidence is firm: Micrographia survives in many copies, some of Leeuwenhoek's microscopes still exist, and his letters were printed in the Philosophical Transactions. Which Dutch maker first built a compound microscope, and when, remains unresolved.`,
    mechanism: `Hooke's compound microscope used a small bi-convex objective near the specimen to form a magnified real image inside the tube, which an eyepiece lens then enlarged further; a field lens between them widened the view. Because each lens added aberration, total useful magnification was perhaps thirty to fifty times, and Hooke illuminated specimens with a lamp focused through a glass globe of water. Leeuwenhoek's instrument was a single tiny sphere or lens of very short focal length clamped between two brass plates, with the specimen held on a pin adjusted by screws; the observer held the plate up to the eye against the light. A single lens of one to two millimetres focal length gives high magnification with only one source of aberration, which is why his resolution, about one micrometre, exceeded compound instruments for over a century.`,
    prerequisites: ['eyeglasses', 'galileo-telescope', 'ibn-al-haytham-optics', 'vesalius-anatomy', 'harvey-circulation', 'glass'],
    consequences: ['linnaean-taxonomy', 'germ-theory-pasteur', 'koch-postulates', 'electron-microscope'],
    figures: [
      { name: 'Robert Hooke', role: 'Author of Micrographia and Curator of Experiments to the Royal Society' },
      { name: 'Antoni van Leeuwenhoek', role: 'Delft microscopist who discovered bacteria and protozoa' },
      { name: 'Marcello Malpighi', role: 'Bolognese anatomist who founded microscopic anatomy' },
    ],
    significance: 9,
    significanceJustification: 'The microscope opened the domain of the very small, revealing cells and microorganisms and eventually making germ theory, cell biology and microbiology possible. Its immediate payoff was slow but its eventual reach is enormous.',
    domains: ['biology-medicine', 'information', 'materials'],
    sources: [
      { author: 'Robert Hooke', title: 'Micrographia: or Some Physiological Descriptions of Minute Bodies Made by Magnifying Glasses', publisher: 'Royal Society, London', year: 1665 },
      { author: 'Edward G. Ruestow', title: 'The Microscope in the Dutch Republic: The Shaping of Discovery', publisher: 'Cambridge University Press', year: 1996 },
      { author: 'Clifford Dobell', title: 'Antony van Leeuwenhoek and his Little Animals', publisher: 'Dover Publications', year: 1960 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'royal-society-scientific-paper',
    epochId: 'print-scientific',
    date: { year: 1665, month: 3, day: 6, precision: 'exact', display: '1665-03-06 (first issue of Philosophical Transactions)' },
    location: 'London, England',
    title: 'The Royal Society and the scientific journal',
    summary: 'The Royal Society (founded 1660) and its secretary Henry Oldenburg launched the Philosophical Transactions in March 1665, creating the periodical scientific paper as the unit in which discoveries are dated, credited and open to reply.',
    explanation: `On 28 November 1660, after a lecture by Christopher Wren at Gresham College, a dozen men including Boyle, Wilkins and Wren agreed to found a college for the promoting of physico-mathematical experimental learning. Charles II granted charters in 1662 and 1663, making it the Royal Society of London. It had a curator of experiments, Robert Hooke, whose job was to perform demonstrations before the fellows at weekly meetings, and a secretary, Henry Oldenburg, a German-born diplomat and translator who maintained a vast correspondence with natural philosophers across Europe.

On 6 March 1665 Oldenburg published, at his own expense and risk, the first number of the Philosophical Transactions: Giving some Accompt of the Present Undertakings, Studies, and Labours of the Ingenious in many Considerable Parts of the World. The Journal des Scavans had begun in Paris two months earlier as a general learned review; Oldenburg's journal was the first devoted to reports of observation and experiment, and it has been published continuously ever since. Early issues carried Hooke's and Cassini's observations of Jupiter's spot, Boyle's experiments, Leeuwenhoek's animalcules, and in 1672 Newton's first paper, on the composition of white light.

The journal solved a problem of the new science. Discoveries circulated by letter, which established priority only among the correspondents and could be lost or disputed. Oldenburg's practice of registering a communication at the Society with its date, and printing it under the author's name, gave a public and durable record of who had found what and when. It also invited replies, so that Newton's optical paper drew criticism from Hooke and Huygens through the same channel. Contributions were read and sometimes referred to fellows before printing, the seed of what would become peer review, though formal refereeing came only in the nineteenth century.

The consequences were the norms of modern science: publication as the act that constitutes a discovery, credit by priority of publication, and a cumulative, citable literature. The Paris Academy of Sciences (1666), the Acta Eruditorum of Leipzig (1682) and the Berlin and St Petersburg academies followed the model. Sprat's History of the Royal Society (1667) articulated the ideal of plain prose reporting matters of fact. The evidence is documentary: the Society's minutes, Oldenburg's letters and the complete run of the journal survive, and recent historical work has traced the growth of editorial practice from Oldenburg's private venture to a Society publication in 1752.`,
    mechanism: `A natural philosopher sent an account of an observation or experiment, by letter, to the secretary, who read it at a meeting and entered it into the Society's register book with the date. Selected items were translated if needed, abridged or printed whole, and set in type as a monthly number sold by the Society's printers. Contributors did not pay and were not paid; the journal's economic basis was Oldenburg's subscription sales and, from 1752, the Society's own funds. Each printed report carried author, date and enough procedural detail, in principle, for repetition. The Society's meetings supplied a mechanism of collective witnessing, and letters of reply printed in later numbers provided public criticism. Priority disputes could be adjudicated by consulting the register, as Newton and Leibniz's partisans did.`,
    prerequisites: ['gutenberg-press', 'torricelli-barometer', 'boyle-air-pump', 'galileo-telescope', 'medieval-universities', 'house-of-wisdom'],
    consequences: ['newton-principia', 'calculus', 'smallpox-inoculation', 'harrison-chronometer', 'linnaean-taxonomy', 'periodic-table'],
    figures: [
      { name: 'Henry Oldenburg', role: 'First secretary of the Royal Society and founding editor of the Philosophical Transactions' },
      { name: 'Robert Hooke', role: 'Curator of experiments who performed demonstrations before the fellows' },
      { name: 'Thomas Sprat', role: 'Author of the 1667 History of the Royal Society that set out its aims' },
    ],
    significance: 8,
    significanceJustification: 'The scientific journal and the learned society created the institutional loop of claim, publication and reply on which every later discovery in this atlas depends. Priority by publication is the incentive structure of science.',
    domains: ['information', 'communication'],
    sources: [
      { author: 'Thomas Sprat', title: 'The History of the Royal Society of London, for the Improving of Natural Knowledge', publisher: 'J. Martyn, London', year: 1667 },
      { author: 'Michael Hunter', title: 'Establishing the New Science: The Experience of the Early Royal Society', publisher: 'Boydell Press', year: 1989 },
      { author: 'Noah Moxham and Aileen Fyfe', title: 'The Royal Society and the Prehistory of Peer Review, 1665 to 1965', publisher: 'The Historical Journal 61(4)', year: 2018, url: 'https://doi.org/10.1017/S0018246X17000334' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'leibniz-stepped-reckoner',
    epochId: 'print-scientific',
    date: { year: 1673, precision: 'year', display: '1673 (demonstrated in London; improved machine 1694)' },
    location: 'Paris; demonstrated in London; later Hanover',
    title: 'Leibniz\'s stepped reckoner',
    summary: 'Gottfried Wilhelm Leibniz designed a calculating machine using a stepped drum that could multiply and divide by repeated addition, demonstrated it to the Royal Society in 1673, and set the mechanical pattern for calculators until the twentieth century.',
    explanation: `Blaise Pascal had built adding machines in the 1640s to help his father's tax work, and Wilhelm Schickard had designed one earlier in Tubingen, but both could only add and subtract. Gottfried Wilhelm Leibniz, in Paris on a diplomatic mission from 1672 and studying mathematics under Huygens, conceived a machine that would also multiply and divide, and in February 1673 he showed a wooden model to the Royal Society in London. The fellows were impressed enough to elect him, but Hooke was sceptical and the model did not fully work. Leibniz spent much of the next two decades and a considerable sum having the mechanism built in brass, first by the Parisian clockmaker Olivier and later in Hanover; a machine finished in 1694 survives in the Lower Saxony State Library.

The key invention was the stepped drum, a cylinder carrying nine teeth of increasing length. A small gear sliding along the drum meshed with as many teeth as the digit set, so one turn of the drum added that digit into a register. Multiplication became repeated addition with a shift of the carriage between decimal places, exactly the procedure of pencil-and-paper long multiplication, and division became repeated subtraction. Leibniz also arranged for the multiplicand to be set once and applied repeatedly, and for the carriage to shift, both features that later calculating machines retained.

Leibniz's motive was explicit and characteristic: it is unworthy of excellent men, he wrote, to lose hours like slaves in the labour of calculation. He was also, separately, the inventor of binary arithmetic, on which he published in 1703, and he imagined a machine using balls and channels to compute in binary, though he never built one. The reckoner's carry mechanism was never made to work reliably across all digits, and the machine was a demonstration rather than a tool.

Its significance is as a design. Charles Xavier Thomas de Colmar's Arithmometer of 1820, the first commercially successful calculator, used the stepped drum, as did Curta hand calculators sold until 1972. Babbage knew the tradition when he designed his engines, and Leibniz's dream of freeing thought from arithmetic is the recurring motive of computation in this atlas. The evidence is good: the 1694 machine survives and was studied in detail in the twentieth century, Leibniz's descriptions and correspondence are extensive, and the Royal Society's minutes record the 1673 demonstration.`,
    mechanism: `Each decimal position of the input has a stepped drum, a brass cylinder with nine parallel teeth of lengths increasing from one ninth to nine ninths of the circumference. A setting knob slides a ten-tooth pinion along the drum's axis so that, when the drum turns once, the pinion engages only as many teeth as the digit set, from zero to nine, and advances the result wheel by that number. All drums are geared to a single crank, so one turn adds the whole set number into the accumulator. A carriage holding the accumulator can be shifted one place with respect to the drums, so turning the crank several times at each position performs multiplication by successive digits. Tens-carry was handled by a pentagonal disc and lever that transferred a unit to the next wheel when a wheel passed nine.`,
    prerequisites: ['al-jazari-automata', 'mechanical-clock', 'indian-numerals-zero', 'al-khwarizmi-algebra', 'antikythera-mechanism'],
    consequences: ['babbage-difference-engine', 'babbage-analytical-engine'],
    figures: [
      { name: 'Gottfried Wilhelm Leibniz', role: 'Designer of the stepped reckoner and inventor of binary arithmetic' },
      { name: 'Blaise Pascal', role: 'Builder of the earlier adding machine, the Pascaline' },
    ],
    significance: 6,
    significanceJustification: 'The stepped drum was the first mechanism for all four arithmetic operations and remained in use in calculators for nearly three centuries. It is the mechanical ancestor of Babbage\'s engines and the clearest early statement of the goal of automating calculation.',
    domains: ['computation', 'manufacturing'],
    sources: [
      { author: 'Michael R. Williams', title: 'A History of Computing Technology', publisher: 'IEEE Computer Society Press', year: 1997 },
      { author: 'Maria Rosa Antognazza', title: 'Leibniz: An Intellectual Biography', publisher: 'Cambridge University Press', year: 2009 },
      { author: 'Georges Ifrah', title: 'The Universal History of Computing: From the Abacus to the Quantum Computer', publisher: 'John Wiley and Sons', year: 2001 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'calculus',
    epochId: 'print-scientific',
    date: { year: 1684, precision: 'year', display: '1684 (Leibniz publishes; Newton\'s manuscripts date from 1665 to 1666)' },
    location: 'Leipzig (publication); Cambridge, England and Hanover',
    title: 'The invention of the calculus',
    summary: 'Isaac Newton in 1665 to 1666 and Gottfried Leibniz in 1675 independently created the calculus, a general method for rates of change and accumulated quantities; Leibniz published first in 1684 and the resulting priority dispute divided European mathematics for a century.',
    explanation: `The problems of tangents, areas, maxima and instantaneous velocity had been attacked piecemeal by Archimedes, Kepler, Cavalieri, Fermat, Descartes, Wallis and Barrow. What Newton and Leibniz each did was to see that two of these problems were inverse to one another, that finding the rate of change of a quantity and finding the quantity whose rate of change is given undo each other, and to build on that fundamental theorem a general algorithmic method that worked on any curve or function expressible in symbols.

Newton did this first. During the plague years 1665 to 1666, at home in Woolsthorpe after Cambridge closed, he developed his method of fluxions, treating quantities as flowing in time and their rates as fluxions, together with the binomial theorem for fractional powers and the technique of infinite series. He wrote it up in the tract De analysi (1669), which circulated in manuscript through Barrow and Collins, and in a longer treatise of 1671, but published nothing on it until 1704. The Principia of 1687 used geometric limit arguments rather than fluxional notation, though Newton claimed the results had been found by fluxions.

Leibniz, working in Paris in 1675 in ignorance of Newton's manuscripts, arrived at the same fundamental relation by a different route, thinking of curves as polygons with infinitely many infinitesimal sides and of areas as sums of infinitely thin strips. He invented the notation still used today, dy/dx for the differential quotient and the elongated S for the integral, and published a six-page paper, Nova methodus pro maximis et minimis, in the Acta Eruditorum in October 1684. Jacob and Johann Bernoulli took up the method at once, and Johann's pupil the Marquis de l'Hopital published the first textbook in 1696.

The priority dispute broke out after 1699 when Fatio de Duillier suggested Leibniz had borrowed from Newton, and became bitter after 1711 when Leibniz appealed to the Royal Society, whose president was Newton. The Society's report of 1712, the Commercium Epistolicum, was drafted by Newton himself and found for him. Modern scholarship agrees that both discoveries were independent, that Newton was first to invent and Leibniz first to publish. The quarrel's practical effect was that British mathematicians clung to Newton's notation and fell behind the Continent for a century.

The significance is hard to overstate: the calculus is the language of Newtonian mechanics, of Maxwell's electrodynamics, of every rate and every optimisation in engineering and economics. The evidence is abundant on both sides, in Newton's mathematical papers, Leibniz's Paris notebooks and the correspondence through Oldenburg.`,
    mechanism: `Both versions rest on the same operations. Differentiation takes a quantity y that depends on x and asks how y changes for a vanishingly small change in x; for a polynomial the answer is found by expanding (x + o), discarding terms in o squared and higher, and dividing by o, which yields the rule that x to the n has derivative n times x to the n minus 1. Integration reverses this, and the fundamental theorem states that the area under a curve from a fixed point to x is a function whose derivative is the curve itself, so any area or accumulated quantity can be found by antidifferentiation rather than by exhaustion. Infinite series allowed non-polynomial functions such as sines and logarithms to be handled by the same rules. Leibniz's notation made the chain rule and substitution nearly mechanical.`,
    prerequisites: ['euclid-elements', 'archimedean-mechanics', 'al-khwarizmi-algebra', 'indian-numerals-zero', 'kepler-laws', 'royal-society-scientific-paper'],
    consequences: ['newton-principia', 'maxwell-equations', 'einstein-1905', 'babbage-analytical-engine'],
    figures: [
      { name: 'Isaac Newton', role: 'Invented the method of fluxions in 1665 to 1666' },
      { name: 'Gottfried Wilhelm Leibniz', role: 'Independently invented the differential and integral calculus and published it first' },
      { name: 'Johann Bernoulli', role: 'Early developer and teacher of the Leibnizian calculus' },
    ],
    significance: 10,
    significanceJustification: 'The calculus is the mathematical language of change and the tool without which physics, engineering and statistics as practised since 1700 could not exist. Its dual invention and the dispute over it also shaped how science handles credit.',
    domains: ['information', 'computation'],
    sources: [
      { author: 'A. Rupert Hall', title: 'Philosophers at War: The Quarrel between Newton and Leibniz', publisher: 'Cambridge University Press', year: 1980 },
      { author: 'Carl B. Boyer', title: 'The History of the Calculus and Its Conceptual Development', publisher: 'Dover Publications', year: 1959 },
      { author: 'Niccolo Guicciardini', title: 'Isaac Newton on Mathematical Certainty and Method', publisher: 'MIT Press', year: 2009 },
      { author: 'Gottfried Wilhelm Leibniz', title: 'Nova methodus pro maximis et minimis', publisher: 'Acta Eruditorum, Leipzig', year: 1684 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'newton-principia',
    epochId: 'print-scientific',
    date: { year: 1687, month: 7, day: 5, precision: 'exact', display: '1687-07-05' },
    location: 'Cambridge and London, England',
    title: 'Newton publishes the Principia',
    summary: 'Isaac Newton\'s Philosophiae Naturalis Principia Mathematica (1687) stated three laws of motion and universal gravitation, derived Kepler\'s laws, the tides and the shape of the earth from them, and unified terrestrial and celestial physics under one mathematical system.',
    explanation: `In August 1684 Edmond Halley visited Isaac Newton at Cambridge to ask what path a planet would follow under a force falling off as the inverse square of distance, a question Halley, Hooke and Wren had discussed at the Royal Society without being able to prove an answer. Newton replied that it would be an ellipse, that he had calculated it years before, and that he would send the demonstration. The nine-page tract that followed, De motu corporum in gyrum, grew over the next two and a half years into the Principia, which the Royal Society licensed and Halley paid to print. It appeared on 5 July 1687.

Book I sets out the laws of motion (inertia, force proportional to change of motion, equal and opposite action) and proves, in the geometrical style of the ancients but using limit arguments equivalent to calculus, that a body swept toward a centre by an inverse-square force moves on a conic section obeying Kepler's area and harmonic laws. Book II treats motion in resisting media and demolishes Descartes's vortex cosmology. Book III, the System of the World, applies the theory to the observed universe: the same force that makes an apple fall holds the moon in orbit, since the moon's centripetal acceleration matches gravity at the earth's surface diluted by the inverse square of sixty earth radii. Gravitation between all masses accounts for the planets, the comets, the tides, the precession of the equinoxes and the oblateness of the earth, which Richer's pendulum measurements had hinted at.

Newton's sources were the tradition described in this epoch. He had Kepler's laws, Galileo's law of fall and projectile parabola, Huygens's centrifugal force theorem and pendulum clock, Flamsteed's observations from Greenwich, Halley's comet data and his own calculus. Hooke's letters of 1679 to 1680 had suggested the inverse-square attraction and compounding of tangential and centripetal motion, and Hooke's demand for credit soured relations for life.

The Principia's significance is that it showed the physical world to be governed by a small number of mathematical laws whose consequences could be computed and checked. For two centuries it was the model of what a scientific theory should be, and its methods, refined by Euler, Lagrange and Laplace, guided navigation, ballistics, the prediction of Halley's comet in 1758, the discovery of Neptune in 1846 and the trajectories of the Apollo missions. Newton's own view, that he had described how gravity acts without explaining its cause, was criticised by Leibniz and Huygens and vindicated by later practice. The evidence consists of the three editions Newton supervised, his manuscripts, Halley's correspondence and the Society's records.`,
    mechanism: `The core argument is quantitative. A body in uniform circular motion of radius r and period T requires a centripetal acceleration proportional to r divided by T squared. Combining this with Kepler's third law, T squared proportional to r cubed, gives an acceleration proportional to one over r squared, so the sun's pull on each planet falls off as the inverse square of distance. Newton then proved in general that an inverse-square central force yields conic orbits with the sun at a focus, and that a uniform sphere attracts as if its mass were at its centre, which let him treat planets as points. The moon test compared the moon's orbital acceleration, computed from its distance and period, with the acceleration of falling bodies measured on earth; the ratio matched the inverse square of the distance ratio to within the accuracy of the data.`,
    prerequisites: ['kepler-laws', 'galileo-telescope', 'copernican-heliocentrism', 'huygens-pendulum-clock', 'calculus', 'euclid-elements', 'royal-society-scientific-paper'],
    consequences: ['harrison-chronometer', 'maxwell-equations', 'einstein-1905', 'sputnik', 'apollo-11'],
    figures: [
      { name: 'Isaac Newton', role: 'Author of the Principia' },
      { name: 'Edmond Halley', role: 'Prompted, edited and financed the publication' },
      { name: 'Robert Hooke', role: 'Proposed the inverse-square hypothesis and disputed credit' },
    ],
    significance: 10,
    significanceJustification: 'The Principia unified the physics of heaven and earth under mathematical law and was the paradigm of scientific theory for two centuries. Every later mechanical, orbital and engineering calculation in this atlas descends from it.',
    domains: ['space', 'information', 'energy'],
    sources: [
      { author: 'Isaac Newton', title: 'Philosophiae Naturalis Principia Mathematica', publisher: 'Royal Society, London (English translation by I. Bernard Cohen and Anne Whitman, University of California Press, 1999)', year: 1687 },
      { author: 'Richard S. Westfall', title: 'Never at Rest: A Biography of Isaac Newton', publisher: 'Cambridge University Press', year: 1980 },
      { author: 'I. Bernard Cohen', title: 'The Newtonian Revolution', publisher: 'Cambridge University Press', year: 1980 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'newcomen-engine',
    epochId: 'print-scientific',
    date: { year: 1712, precision: 'year', display: '1712' },
    location: 'Dudley Castle, Tipton, Staffordshire, England',
    title: 'Newcomen\'s atmospheric steam engine',
    summary: 'Thomas Newcomen, a Dartmouth ironmonger, erected the first successful steam-driven pumping engine at a coal mine near Dudley Castle in 1712, using atmospheric pressure on a piston beneath condensed steam to lift water from deep workings.',
    explanation: `By 1700 English coal mines were reaching depths at which water could not be drained by horse-driven pumps, and the pneumatic discoveries of Torricelli, Boyle and Guericke had suggested a remedy. Denis Papin had shown in 1690 that steam condensed under a piston would let atmospheric pressure drive it down, and Thomas Savery had patented in 1698 a pump without a piston that used steam pressure and suction alternately, which worked only for shallow lifts and tended to burst. Thomas Newcomen, an ironmonger and Baptist lay preacher of Dartmouth in Devon who sold tools to Cornish tin mines, worked for about a decade with his partner John Calley on a piston engine, and in 1712 erected one at a colliery near Dudley Castle in the Black Country. A 1719 engraving by Thomas Barney records it: a brass cylinder of 21 inches bore and about 8 feet stroke, working twelve strokes a minute and raising roughly ten gallons per stroke from 51 yards.

The engine was a large timber beam pivoted on the wall of a purpose-built engine house. One end hung over the mine shaft with a chain to the pump rods; the other was chained to a piston in an open-topped vertical cylinder mounted over a boiler. Steam at little more than atmospheric pressure filled the cylinder as the weight of the pump rods pulled the piston up; a jet of cold water then condensed it, and the atmosphere pushed the piston down, lifting the rods. Newcomen had to work under Savery's broad patent, which was extended by Parliament to 1733, so the two interests combined as a syndicate that licensed engines.

The engine was fuel-hungry, because the cylinder was chilled at every stroke, but at collieries fuel was nearly free. Over a hundred were built in Britain by 1733 and more than a thousand by 1800, in sizes up to 70 inches bore, and they went abroad to Hungary, Sweden, France and the American colonies. John Smeaton improved the proportions from experiment in the 1770s. James Watt's separate condenser of 1765, invented while repairing a Newcomen model at Glasgow University, was a direct fix for its defining waste.

Its significance is as the first practical machine to convert heat into continuous mechanical work, and the first engine independent of wind, water or muscle. It made deep coal mining possible, which in turn made the fuel for the Industrial Revolution available. Newcomen left no writings and few personal records; the engine is known from drawings, contracts, surviving parts and later accounts, and the exact contribution of Calley and of a Swedish visitor, Marten Triewald, who described the engine in 1734, remains debated.`,
    mechanism: `A coal-fired boiler, essentially a brewer's copper with a domed lid, produced steam at a pressure barely above atmospheric. When the steam valve opened, steam entered the cylinder beneath the piston while the heavy pump rods at the far end of the beam pulled the piston up. The valve closed and a jet of cold water sprayed into the cylinder, condensing the steam and creating a partial vacuum; the atmosphere, pressing on the open top of the piston at about 14 pounds per square inch, drove it down with a force of several tons, rocking the beam and lifting the rods and a column of water. A layer of water on top of the piston sealed its leather packing. Valves were at first worked by hand and later by a plug rod driven from the beam, making the cycle automatic.`,
    prerequisites: ['torricelli-barometer', 'boyle-air-pump', 'water-wheel', 'iron-smelting', 'royal-society-scientific-paper'],
    consequences: ['watt-separate-condenser', 'trevithick-locomotive', 'cort-puddling'],
    figures: [
      { name: 'Thomas Newcomen', role: 'Inventor and builder of the atmospheric engine' },
      { name: 'John Calley', role: 'Newcomen\'s partner in developing the engine' },
      { name: 'Thomas Savery', role: 'Patentee of the earlier steam pump whose patent covered Newcomen\'s engine' },
    ],
    significance: 9,
    significanceJustification: 'The Newcomen engine was the first practical heat engine and the first source of mechanical power not tied to a river, the wind or an animal. It unlocked deep coal and is the direct ancestor of Watt\'s engine and all later thermal power.',
    domains: ['energy', 'manufacturing', 'materials'],
    sources: [
      { author: 'L. T. C. Rolt and J. S. Allen', title: 'The Steam Engine of Thomas Newcomen', publisher: 'Moorland Publishing', year: 1977 },
      { author: 'Richard L. Hills', title: 'Power from Steam: A History of the Stationary Steam Engine', publisher: 'Cambridge University Press', year: 1989 },
      { author: 'H. W. Dickinson', title: 'A Short History of the Steam Engine', publisher: 'Cambridge University Press', year: 1939 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'smallpox-inoculation',
    epochId: 'print-scientific',
    date: { year: 1721, precision: 'year', display: '1721' },
    location: 'London, England and Boston, Massachusetts Bay Colony',
    title: 'Smallpox inoculation reaches Britain and America',
    summary: 'In 1721 Lady Mary Wortley Montagu had her daughter inoculated with smallpox in London and Zabdiel Boylston inoculated 244 people in Boston, bringing to the West a practice long used in China, India, Africa and the Ottoman Empire and producing the first statistical evidence for a medical procedure.',
    explanation: `Smallpox in the early eighteenth century killed perhaps a tenth of all children in European cities and scarred or blinded many survivors. Variolation, deliberately infecting a healthy person with matter from a mild case to produce a milder disease and lifelong immunity, had been practised in China at least since the sixteenth century by blowing powdered scabs into the nose, in India and West Africa by scratching pus into the skin, and in the Ottoman lands by Greek and Circassian practitioners. Emanuel Timoni in Constantinople and Giacomo Pylarini in Smyrna described the Turkish method in the Philosophical Transactions in 1714 and 1716, which is how physicians in London and Boston first read of it.

Lady Mary Wortley Montagu, wife of the British ambassador to the Porte and herself scarred by smallpox, had her son inoculated in Constantinople in 1718 by the embassy surgeon Charles Maitland. Back in London during the epidemic of 1721 she had Maitland inoculate her daughter before physicians of the Royal College. The Princess of Wales, Caroline of Ansbach, took an interest; six condemned prisoners at Newgate were inoculated in August 1721 in exchange for pardons, then several charity children, and in 1722 the royal daughters. The procedure entered fashionable practice in Britain, though with an early death rate of about one in fifty.

In Boston the same spring, the Puritan minister Cotton Mather, who had read Timoni and had also learned of the practice from his enslaved West African servant Onesimus, urged the town's physicians to inoculate during a severe epidemic. Only Zabdiel Boylston agreed. He inoculated his own son and two slaves in June 1721 and 244 people by the following year, amid furious opposition; a bomb was thrown through Mather's window. Boylston kept records: six of his inoculated patients died, about 2 percent, while 844 of 5,889 natural cases in the town died, about 14 percent. Presented to the Royal Society in 1726, these were among the first numerical comparisons of a treated and an untreated population in medicine, and James Jurin's tabulations in London confirmed the advantage.

Inoculation spread slowly, since inoculated persons were contagious and had to be isolated, until Robert Sutton and his sons in the 1760s simplified the method into a shallow scratch that reduced mortality further and inoculated tens of thousands. Edward Jenner, himself variolated as a boy, drew on this practice when he tested cowpox in 1796, and vaccination then displaced variolation. Evidence for the 1721 events is rich: Montagu's letters, Maitland's published account, Mather's diary and pamphlets, and Boylston's own report of 1726.`,
    mechanism: `The inoculator took fluid or dried matter from a ripe pustule of a person with a mild case of smallpox and introduced a small quantity into one or two shallow incisions or scratches on the arm of the recipient, covering the site with a walnut shell or a dressing. Infection through the skin rather than the respiratory tract produces a localized lesion first and usually a milder generalized disease, with a fatality rate of roughly one to two percent compared with twenty to thirty percent for natural infection, though the mechanism for the difference is still not fully understood. The recipient developed a genuine smallpox infection, was contagious for about two weeks, and on recovery had the same lifelong immunity as a natural survivor. Later practitioners chose donors with mild disease and used minimal quantities.`,
    prerequisites: ['galenic-medicine', 'royal-society-scientific-paper', 'caravel-navigation', 'egyptian-medical-papyri'],
    consequences: ['jenner-vaccination', 'polio-vaccine', 'mrna-vaccines'],
    figures: [
      { name: 'Lady Mary Wortley Montagu', role: 'Introduced and championed inoculation in Britain' },
      { name: 'Zabdiel Boylston', role: 'Boston physician who inoculated 244 people and recorded the outcomes' },
      { name: 'Onesimus', role: 'Enslaved West African who described inoculation to Cotton Mather' },
      { name: 'Charles Maitland', role: 'Surgeon who performed the first inoculations in England' },
    ],
    significance: 7,
    significanceJustification: 'Inoculation was the first effective preventive measure against an epidemic disease adopted in the West, and its evaluation by comparative mortality figures was an early instance of quantitative clinical evidence. It led directly to Jenner\'s vaccine and the eventual eradication of smallpox.',
    domains: ['biology-medicine'],
    sources: [
      { author: 'Isobel Grundy', title: 'Lady Mary Wortley Montagu: Comet of the Enlightenment', publisher: 'Oxford University Press', year: 1999 },
      { author: 'Genevieve Miller', title: 'The Adoption of Inoculation for Smallpox in England and France', publisher: 'University of Pennsylvania Press', year: 1957 },
      { author: 'Donald R. Hopkins', title: 'The Greatest Killer: Smallpox in History', publisher: 'University of Chicago Press', year: 2002 },
      { author: 'Stephen Coss', title: 'The Fever of 1721: The Epidemic That Revolutionized Medicine and American Politics', publisher: 'Simon and Schuster', year: 2016 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'linnaean-taxonomy',
    epochId: 'print-scientific',
    date: { year: 1735, precision: 'year', display: '1735 (Systema Naturae); binomial names 1753' },
    location: 'Leiden, Dutch Republic; later Uppsala, Sweden',
    title: 'Linnaeus and the classification of living things',
    summary: 'Carl Linnaeus published Systema Naturae in 1735, a hierarchical classification of minerals, plants and animals, and in Species Plantarum (1753) fixed the two-word Latin name as the standard label for every species, making biology a shared, cumulative enterprise.',
    explanation: `By 1700 exploration had flooded Europe with plants and animals from the Americas, Africa and Asia, and naturalists had no agreed way to name or arrange them. A plant might be known by a dozen names and by a Latin descriptive phrase running to a line of text. Carl Linnaeus, a Swedish physician's son who had studied at Uppsala and travelled in Lapland, went to the Netherlands in 1735 to take his medical degree and there published, with the patronage of the botanist Jan Frederik Gronovius, a twelve-page folio called Systema Naturae. It arranged the three kingdoms of nature into classes, orders, genera and species, and for plants used the number and arrangement of stamens and pistils, the sexual system, as the sorting key.

The scheme was frankly artificial; Linnaeus knew that counting stamens grouped unrelated plants, but he prized ease of use, so that any collector with a lens could place a specimen. He worked out the rules in Fundamenta Botanica (1736) and Philosophia Botanica (1751), and in Species Plantarum (1753) he did something more durable: beside each species' long descriptive phrase he printed a single trivial name in the margin, so that genus plus trivial name, Homo sapiens or Solanum tuberosum, uniquely identified it. The tenth edition of Systema Naturae (1758) extended binomials to animals, and both dates are the formal starting points of botanical and zoological nomenclature today.

The causes were the sheer volume of material, which print, cheap paper and the herbarium sheet made possible to circulate, and the long tradition from Cesalpino through Ray and Tournefort of seeking natural groupings. Linnaeus added system and a genius for organization; his students, the apostles, collected on Cook's voyages and across the world, and he trained a generation to send specimens to Uppsala.

Its significance lies less in the sexual system, abandoned within a century, than in the naming convention and the nested hierarchy. A stable name allowed observations made in Java and in Sweden to be attached to the same organism and accumulated; the hierarchy, which Linnaeus intended as a map of creation, became for Darwin the pattern that descent with modification explained. Linnaeus placed humans among the primates, and his scheme of human varieties, elaborated in later editions, fed racial classification with lasting harm. The evidence is straightforward: the printed editions, Linnaeus's herbarium and manuscripts, preserved by the Linnean Society of London, and his extensive correspondence.`,
    mechanism: `Classification proceeds by nested sets. Every species is assigned to a genus of similar species, each genus to an order, each order to a class, and each class to a kingdom, so that the position of any organism can be stated as a path through the hierarchy. For plants, Linnaeus's key sorts a specimen first by the number of stamens in the flower (class), then by the number of pistils (order), then by details of fruit and flower to reach genus and species. The binomial name is a two-part label, a capitalized generic name and a lower-case specific epithet in Latin form, attached to a printed description and ideally to a type specimen. Priority of publication decides which name stands when several have been proposed, a rule later codified in international codes of nomenclature.`,
    prerequisites: ['microscope', 'caravel-navigation', 'gutenberg-press', 'royal-society-scientific-paper', 'medieval-universities'],
    consequences: ['germ-theory-pasteur', 'human-genome-project-launch'],
    figures: [
      { name: 'Carl Linnaeus', role: 'Author of Systema Naturae and inventor of consistent binomial nomenclature' },
      { name: 'Jan Frederik Gronovius', role: 'Leiden botanist who financed the first edition' },
      { name: 'John Ray', role: 'English naturalist whose species concept Linnaeus built on' },
    ],
    significance: 7,
    significanceJustification: 'Binomial nomenclature and the ranked hierarchy gave biology a shared language in which observations from every continent could accumulate. It is the organizing framework that made evolutionary biology and modern systematics possible.',
    domains: ['biology-medicine', 'information', 'agriculture'],
    sources: [
      { author: 'Carl Linnaeus', title: 'Systema Naturae', publisher: 'Theodor Haak, Leiden', year: 1735 },
      { author: 'Lisbet Koerner', title: 'Linnaeus: Nature and Nation', publisher: 'Harvard University Press', year: 1999 },
      { author: 'Wilfrid Blunt', title: 'Linnaeus: The Compleat Naturalist', publisher: 'Princeton University Press', year: 2001 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'harrison-chronometer',
    epochId: 'print-scientific',
    date: { year: 1759, precision: 'year', display: '1759 (H4 completed; sea trial to Jamaica 1761 to 1762)' },
    location: 'London, England',
    title: 'Harrison\'s marine chronometer solves longitude',
    summary: 'John Harrison, a self-taught Yorkshire clockmaker, completed in 1759 a watch, H4, that kept time at sea to within seconds a day, allowing longitude to be found by comparing local noon with Greenwich time and winning the reward offered by the Longitude Act of 1714.',
    explanation: `Latitude could be found from the sun or stars, but longitude required knowing the time at a reference meridian, since the earth turns fifteen degrees an hour. After the loss of four ships and about 1,400 men of Sir Cloudesley Shovell's fleet on the Scilly Isles in 1707, Parliament passed the Longitude Act of 1714, offering up to 20,000 pounds for a method accurate to half a degree, about two minutes of time, on a voyage to the West Indies. Astronomers, including Newton on the advisory panel, expected the answer to come from the moon's motion, and Halley, Flamsteed and later Maskelyne worked toward lunar tables. Huygens's pendulum had failed at sea, and Newton doubted that any clock could survive a ship's motion, temperature and humidity.

John Harrison, a carpenter and clockmaker from Barrow upon Humber, who had built wooden clocks accurate to a second a month, came to London in 1730 and with the Board of Longitude's support built a series of sea clocks. H1 (1735), a 34-kilogram machine with linked balances, made a successful trial to Lisbon. H2 and H3, built over the next twenty years, introduced the bimetallic strip for temperature compensation and the caged roller bearing. Then Harrison changed course. Working with the watchmaker John Jefferys, he found that a large watch with a fast, high-energy balance was less disturbed by motion than any large clock, and in 1759 completed H4, a silver-cased watch 13 centimetres across with a diamond-pallet verge escapement, a temperature-compensated balance spring and a remontoire to even out the driving force.

On the voyage to Jamaica in 1761 to 1762, carried by his son William, H4 lost about five seconds, giving longitude to within about a nautical mile, well inside the Act's limit. The Board, chaired by astronomers committed to lunar distances, demanded a second trial (Barbados, 1764, again successful), then required Harrison to disclose the mechanism and have it copied by Larcum Kendall before paying half the reward. Only after petition to George III did Parliament vote him most of the balance in 1773.

The chronometer's significance is that it made longitude a matter of reading a dial, and it did so by precision manufacture rather than astronomy. Kendall's copy K1 accompanied Cook on his second voyage, and by 1800 Arnold and Earnshaw had simplified the design into an instrument that could be made in quantity, so that by the 1820s a chronometer was standard equipment on ocean-going ships. Lunar distances, published in the Nautical Almanac from 1767, coexisted with it as a check. The dispute with Maskelyne, once told as a morality tale, is now seen as a genuine disagreement about which method was reliable enough to trust with ships. All five of Harrison's timekeepers survive at Greenwich, with his papers and the Board's minutes.`,
    mechanism: `H4 is a large spring-driven watch beating five times a second. A fast, heavy balance stores enough energy in each swing that a ship's roll or pitch barely disturbs it, and a spiral balance spring returns it; the period depends on the balance's inertia and the spring's stiffness, not on gravity, so the watch is indifferent to tilt. A bimetallic compensation curb, a strip of brass and steel that bends with temperature, shortens the effective spring in heat and lengthens it in cold, cancelling the drift that had defeated earlier watches. A remontoire rewinds a small secondary spring every seven and a half seconds so the escapement always receives the same force regardless of how far the mainspring has run down. Diamond pallets on the verge reduce friction and wear. To find longitude, the navigator observes local noon by the sun and reads the watch's Greenwich time; each four minutes of difference is one degree.`,
    prerequisites: ['huygens-pendulum-clock', 'mechanical-clock', 'mercator-projection', 'caravel-navigation', 'newton-principia', 'royal-society-scientific-paper'],
    consequences: ['gps', 'transatlantic-cable'],
    figures: [
      { name: 'John Harrison', role: 'Designed and built the sea clocks H1 to H4 and the watch H5' },
      { name: 'Larcum Kendall', role: 'Watchmaker who copied H4 as K1 for Cook\'s voyages' },
      { name: 'Nevil Maskelyne', role: 'Astronomer Royal who championed the rival lunar-distance method' },
    ],
    significance: 7,
    significanceJustification: 'The chronometer solved the last great problem of oceanic navigation and demonstrated that precision engineering could outperform astronomy. It made global shipping, charting and empire far safer and more predictable.',
    domains: ['transportation', 'manufacturing', 'information'],
    sources: [
      { author: 'Dava Sobel', title: 'Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time', publisher: 'Walker and Company', year: 1995 },
      { author: 'William J. H. Andrewes (editor)', title: 'The Quest for Longitude', publisher: 'Collection of Historical Scientific Instruments, Harvard University', year: 1996 },
      { author: 'Richard Dunn and Rebekah Higgitt', title: 'Finding Longitude: How Ships, Clocks and Stars Helped Solve the Longitude Problem', publisher: 'Collins and Royal Museums Greenwich', year: 2014 },
      { author: 'Rupert T. Gould', title: 'The Marine Chronometer: Its History and Development', publisher: 'J. D. Potter', year: 1923 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
];
