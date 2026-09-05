import type { Epoch, TechEventInput } from '../schema';

export const epoch: Epoch = {
  id: 'networked-world',
  index: 12,
  name: 'The networked world',
  code: 'NETWORK',
  startYear: 1995,
  endYear: 2012,
  span: '1995 to 2012',
  thesis: `Between 1995 and 2012 the computer stopped being a machine you sat in front of and became a medium you lived inside. The epoch opens with the commercial web (Netscape's public offering, Amazon's first sale, Windows 95 with a TCP/IP stack in the box) and closes in a single remarkable year in which the Higgs boson was observed, CRISPR was shown to be a programmable DNA editor, a deep neural network won the ImageNet contest by a margin nobody had predicted, and a battery-electric sedan won Car of the Year. The through-line is connection. Once the marginal cost of copying and distributing information fell to nearly zero, and once radio links (Wi-Fi, Bluetooth, 3G) freed the connection from the wall socket, whole industries reorganized around search, recommendation and the aggregation of user behaviour. Commerce, encyclopaedias, music, video, friendship and money were all re-implemented as software services running in rented data centres. The same networked, data-heavy way of working transformed science: the human genome, the Kepler field and the LHC each produced more data than any single laboratory could hold, and each depended on the internet to share it. By 2012 a majority of new computers were phones, and the ingredients of the following epoch (cheap GPU compute, enormous labelled datasets, cloud infrastructure and gene editing) were all in place.`,
  enablingConditions: [
    'Moore\'s law continued through the epoch, so a 2012 phone carried more compute than a 1995 workstation, and the price of storage fell by roughly a thousandfold.',
    'The Internet had been opened to commercial traffic in the early 1990s, and the World Wide Web, Mosaic and Netscape gave non-specialists a way to use it.',
    'Fibre-optic backbones laid during the late-1990s telecom boom left the world with vastly more long-haul bandwidth than it needed, which collapsed the price of moving bits after the 2001 crash.',
    'Lithium-ion batteries, liquid crystal displays and low-power ARM processors, all descended from the previous epoch, made pocketable connected devices practical.',
    'Open-source software (Linux, Apache, MySQL, and later Git) let small teams build large services without paying for platform licences.',
    'Venture capital in the United States, and later in China, was willing to fund companies that lost money for years in order to capture network effects.',
  ],
  constraintsRemoved: [
    'Distribution: a book, song, video or program no longer needed physical inventory, shelf space or a broadcast slot to reach an audience.',
    'Place: with Wi-Fi, cellular data and GPS, useful computing was no longer tied to a desk, an office or a wired connection.',
    'Capital: cloud computing turned servers from a fixed cost bought in advance into a metered utility rented by the hour.',
    'Gatekeeping: anyone could publish an encyclopaedia entry, a video or a piece of software, and search engines and social feeds rather than editors decided what was seen.',
    'Data scale in science: sequencing, telescopes and particle detectors could now generate and share terabytes, so discovery increasingly meant statistics over very large samples.',
  ],
  secondOrderConsequences: [
    'Advertising became the default business model of the consumer internet, which aligned product design with attention capture and made behavioural data the most valuable asset of the epoch.',
    'Winner-take-most markets emerged in search, social networking, e-commerce and app stores because network effects and zero marginal costs rewarded the largest player.',
    'The music, newspaper and retail industries lost their old distribution monopolies within a decade, and the pattern repeated in video, hotels and taxis in the next.',
    'The smartphone supply chain produced cheap cameras, radios, batteries and sensors that would later be repurposed for drones, robots and electric vehicles.',
    'Massive labelled datasets, cheap parallel compute and cloud hosting, each built for other reasons, combined at the end of the epoch to make deep learning practical.',
    'Cryptographic money, open-source hardware and gene editing put capabilities once reserved for states and large firms in the hands of small groups.',
  ],
  transition: `The networked world ended when its by-products became more important than its products. By 2012 the systems built to serve search results, photos and videos had left behind three things nobody had planned as a unit: warehouses of commodity servers rentable by the minute, billions of labelled images and sentences contributed by users, and graphics processors whose parallel arithmetic happened to be exactly what neural networks needed. AlexNet in September 2012 showed that combining them produced a discontinuous jump in machine perception, and within five years the same recipe was applied to speech, translation and language itself. The same year CRISPR-Cas9 turned genome reading, the achievement of 2003, into genome writing. The next epoch is therefore not defined by a new medium but by a new kind of agent: software that learns from the network's accumulated record and acts on it. The smartphone, the cloud and the social graph did not go away; they became the delivery system and the training data for the intelligence era.`,
  humanExperience: `A person who was twenty in 1995 and thirty-seven in 2012 lived through the fastest change in daily habits since electrification. In 1995 they might have owned a dial-up modem that tied up the telephone line; email was for students and engineers, and looking something up meant a library, an encyclopaedia set or a knowledgeable friend. Buying a book meant a bookshop, buying music meant a compact disc, and finding a restaurant in a strange city meant a guidebook or a hotel concierge. By 2012 the same person carried in a pocket a device that answered almost any factual question within seconds, held every song they owned and millions they did not, showed them where they were on a map, and kept them in continuous, ambient contact with everyone they had ever known.

The texture of work changed as much as the tools. Programmers moved from mailing patches to pushing commits to shared repositories; scientists downloaded genomes and telescope catalogues rather than requesting samples; shopkeepers competed with a warehouse in another state that offered next-day delivery. Journalists watched classified advertising, the financial base of the newspaper, migrate to free listings. Musicians watched album sales collapse and touring become the business.

Attention became contested territory. Where a 1995 evening might have offered four television channels and a landline, a 2012 evening offered an infinite scrolling feed engineered to be checked again. Privacy quietly inverted: the default became that one's location, purchases, friendships and reading were recorded by companies, mostly in exchange for services that cost nothing. Children born after 2007 would never know a world without a touchscreen. The gains were real: unprecedented access to knowledge, to markets, to distant relatives, to communities of interest. So were the losses: attention, local institutions, and the comfortable assumption that a fact once learned stayed put.`,
  minEvents: 20,
  sources: [
    { author: 'Manuel Castells', title: 'The Rise of the Network Society', publisher: 'Blackwell', year: 1996 },
    { author: 'Walter Isaacson', title: 'The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution', publisher: 'Simon & Schuster', year: 2014 },
    { author: 'Tim Wu', title: 'The Master Switch: The Rise and Fall of Information Empires', publisher: 'Alfred A. Knopf', year: 2010 },
    { author: 'Carlota Perez', title: 'Technological Revolutions and Financial Capital: The Dynamics of Bubbles and Golden Ages', publisher: 'Edward Elgar', year: 2002 },
    { author: 'Steven Levy', title: 'In the Plex: How Google Thinks, Works, and Shapes Our Lives', publisher: 'Simon & Schuster', year: 2011 },
  ],
  lastReviewed: '2026-09-04',
};

export const events: TechEventInput[] = [
  {
    id: 'e-commerce-amazon',
    epochId: 'networked-world',
    date: { year: 1995, month: 7, day: 16, precision: 'exact', display: '1995-07-16' },
    location: 'Bellevue, Washington, United States',
    title: 'Amazon.com opens and proves the web can be a shop',
    summary: 'Jeff Bezos launched Amazon.com as an online bookstore in July 1995, demonstrating that a website plus a warehouse could undercut physical retail on selection and, eventually, price.',
    explanation: `Amazon.com sold its first book, a science text by Douglas Hofstadter, on 16 July 1995 from a converted garage in Bellevue, Washington. Jeff Bezos had left the hedge fund D. E. Shaw the previous year after reading that web usage was growing at over two thousand percent a year, and he chose books deliberately: there were more than three million titles in print, far more than any physical store could stock, and a website could list all of them while holding almost none.

The early company was small and improvised. Orders were packed on the floor until someone thought of buying tables. But the strategy, summarized in the internal slogan "get big fast", was clear from the start. Amazon would accept losses for years to build scale, then use scale to negotiate with publishers and shippers, then reinvest the savings in lower prices and faster delivery. Bezos's 1997 letter to shareholders, written after the initial public offering that May, laid out this reasoning in public and has been reprinted with every annual report since.

Amazon was not the first online retailer, and in the late 1990s many rivals (Pets.com, Webvan, eToys) failed spectacularly when the stock market bubble collapsed in 2000 and 2001. Amazon's own share price fell more than ninety percent. What distinguished it was operational discipline in the unglamorous parts of the business: warehouse software, inventory placement, returns and customer reviews. Reviews in particular were radical; a shop that let customers say a product was bad seemed self-destructive to traditional retailers, but it built trust and, more importantly, produced data.

Data became the second business. Every search, click and purchase trained recommendation systems ("customers who bought this also bought"), and the infrastructure built to run the store at holiday peak was so much larger than average demand that Amazon eventually rented it out, which became Amazon Web Services in 2006. Third-party sellers were admitted to the marketplace in 2000, turning the store into a platform on which other merchants competed.

The significance is less that people bought books online than that the web was shown to be a place where ordinary transactions could happen at scale, with credit cards, addresses and trust. By 2012 Amazon's revenue exceeded sixty billion dollars a year, the largest bookshop chain in the United States had gone bankrupt, and "e-commerce" was no longer a category anyone needed to name.`,
    mechanism: `A customer's browser sent an encrypted form (using Netscape's Secure Sockets Layer, released in 1995) to Amazon's web servers, which queried a catalogue database of titles licensed from book distributors. Orders were fulfilled first by ordering from wholesalers on demand and later from Amazon's own warehouses, where software assigned each incoming item a bin location and generated pick lists that walked workers along the shortest route. Recommendation engines used item-to-item collaborative filtering: for each product, the system precomputed a list of other products frequently bought by the same customers, which could be served instantly without heavy computation at page load. Payment ran through card networks over the same links that carried the order. The physical half of the system was containerised shipping and parcel carriers, which Amazon integrated by negotiating volume rates and, later, building sortation centres of its own.`,
    prerequisites: ['world-wide-web', 'mosaic-netscape', 'tcp-ip', 'containerization'],
    consequences: ['aws-cloud-computing', 'imagenet-dataset', 'smartphone-universal-computer'],
    figures: [
      { name: 'Jeff Bezos', role: 'Founder and chief executive' },
      { name: 'Shel Kaphan', role: 'First employee and lead engineer' },
    ],
    significance: 8,
    significanceJustification: 'Amazon established the template for internet retail and platform marketplaces, and its infrastructure spun out into cloud computing. It reshaped retail employment, logistics and the economics of publishing.',
    domains: ['information', 'communication', 'transportation'],
    sources: [
      { author: 'Brad Stone', title: 'The Everything Store: Jeff Bezos and the Age of Amazon', publisher: 'Little, Brown and Company', year: 2013 },
      { author: 'Jeff Bezos', title: '1997 Letter to Shareholders', publisher: 'Amazon.com, Inc.', year: 1997 },
      { author: 'Robert Spector', title: 'Amazon.com: Get Big Fast', publisher: 'HarperBusiness', year: 2000 },
      { author: 'Greg Linden, Brent Smith and Jeremy York', title: 'Amazon.com Recommendations: Item-to-Item Collaborative Filtering', publisher: 'IEEE Internet Computing', year: 2003, url: 'https://doi.org/10.1109/MIC.2003.1167344' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'wifi',
    epochId: 'networked-world',
    date: { year: 1997, month: 6, precision: 'year', display: '1997 (IEEE 802.11 ratified June 1997)' },
    location: 'IEEE 802.11 working group; Lucent and NCR laboratories, Nieuwegein, Netherlands',
    title: 'IEEE 802.11 wireless networking, later branded Wi-Fi',
    summary: 'The IEEE ratified the 802.11 wireless local area network standard in 1997; the faster 802.11b revision of 1999 and the Wi-Fi brand made untethered internet access ordinary in homes, offices and cafes.',
    explanation: `The first IEEE 802.11 standard was approved in June 1997 after seven years of committee work led by Vic Hayes of NCR, later Lucent, whose Dutch laboratory had been building wireless cash-register links since the late 1980s. The 1997 standard allowed one or two megabits per second in the unlicensed 2.4 gigahertz band. It was slow and expensive, and few consumers noticed. The revision that mattered, 802.11b, was ratified in September 1999 and raised the rate to eleven megabits per second, comparable to the wired Ethernet of the time.

Two things turned a standard into a phenomenon. The first was the unlicensed spectrum itself. In 1985 the United States Federal Communications Commission had opened three "industrial, scientific and medical" bands to unlicensed spread-spectrum devices, an obscure decision pushed by an engineer named Michael Marcus. Because no operator owned the band, anyone could sell equipment and anyone could install it. The second was branding and interoperability. In 1999 six companies formed the Wireless Ethernet Compatibility Alliance, hired a consultancy to invent the name "Wi-Fi", and certified products so that a Lucent card would work with a Cisco base station. Apple's AirPort, launched in July 1999 with the iBook, put the technology in a consumer product and drove chip prices down.

Adoption was rapid. Corporate offices installed access points to avoid cabling; universities blanketed campuses; Starbucks began offering wireless access in 2001; and by the middle of the decade home broadband routers shipped with Wi-Fi by default. Later revisions (802.11g in 2003, 802.11n in 2009) increased speeds to hundreds of megabits per second, and the 5 gigahertz band eased congestion.

The significance is in what Wi-Fi did to the relationship between a person and the network. The wired internet was a place you went, sitting at a desk. Wi-Fi made the network ambient: any room, any device, no configuration beyond a password. It solved the last-thirty-metres problem that cellular data was too slow and expensive to solve in the early 2000s, and when smartphones arrived they offloaded most of their traffic onto it. Laptop sales overtook desktop sales in 2005 partly because a laptop without a cable was finally useful. By 2012 the Wi-Fi Alliance had certified more than ten thousand products, and the technology carried more internet traffic than all cellular networks combined.`,
    mechanism: `Wi-Fi transmits data packets over radio in unlicensed bands around 2.4 and later 5 gigahertz. The 1997 standard used spread-spectrum techniques (frequency hopping or direct sequence) that spread each bit over a wide band to tolerate interference from microwave ovens and other devices sharing the spectrum. 802.11b used direct-sequence spread spectrum with complementary code keying; 802.11a and g switched to orthogonal frequency-division multiplexing, which splits the channel into many narrow subcarriers each carrying a slow stream, resistant to multipath echoes indoors. Because radio is a shared medium in which a station cannot hear collisions while transmitting, 802.11 uses carrier sense with collision avoidance: a station listens, waits a random back-off, transmits, and expects an acknowledgement. Access points bridge the wireless cell to wired Ethernet, and the same IP packets flow end to end.`,
    prerequisites: ['ethernet', 'hertz-radio-waves', 'packet-switching', 'tcp-ip'],
    consequences: ['iphone', 'smartphone-universal-computer'],
    figures: [
      { name: 'Vic Hayes', role: 'Chair of the IEEE 802.11 working group, 1990 to 2000' },
      { name: 'Michael Marcus', role: 'FCC engineer behind the 1985 unlicensed spread-spectrum rules' },
      { name: 'Bruce Tuch', role: 'NCR and Lucent engineer on early WaveLAN and 802.11 physical layers' },
    ],
    significance: 8,
    significanceJustification: 'Wi-Fi made network access ambient rather than located, enabled the laptop and smartphone eras, and now carries the majority of global internet traffic at the edge.',
    domains: ['communication', 'information'],
    sources: [
      { author: 'Wolter Lemstra, Vic Hayes and John Groenewegen (editors)', title: 'The Innovation Journey of Wi-Fi: The Road to Global Success', publisher: 'Cambridge University Press', year: 2010 },
      { author: 'Matthew S. Gast', title: '802.11 Wireless Networks: The Definitive Guide', publisher: "O'Reilly Media", year: 2002 },
      { author: 'IEEE', title: 'IEEE Std 802.11-1997: Wireless LAN Medium Access Control (MAC) and Physical Layer (PHY) Specifications', publisher: 'Institute of Electrical and Electronics Engineers', year: 1997 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'google-search',
    epochId: 'networked-world',
    date: { year: 1998, month: 9, day: 4, precision: 'exact', display: '1998-09-04' },
    location: 'Stanford University and Menlo Park, California, United States',
    title: 'Google and PageRank make the web searchable',
    summary: 'Larry Page and Sergey Brin published the PageRank algorithm in 1998 and incorporated Google on 4 September that year, turning the link structure of the web into a ranking signal that made search reliably useful.',
    explanation: `Search engines existed before Google. AltaVista, Lycos, Excite and Inktomi all indexed the web by the mid-1990s, but they ranked pages mostly by the words on them, which was easy to game and gave poor results for common queries. Larry Page, a Stanford graduate student, began in 1996 by asking a different question: which pages did the rest of the web think were important? He and Sergey Brin treated a hyperlink as a vote and, in an idea borrowed from academic citation analysis, weighted each vote by the importance of the page casting it. The recursive definition, solved as the principal eigenvector of the web's link matrix, was named PageRank.

They described the system in a paper for the World Wide Web conference in April 1998, "The Anatomy of a Large-Scale Hypertextual Web Search Engine", and in a Stanford technical report on PageRank. The prototype, running on cheap PCs in a dormitory, was already answering thousands of queries a day. Andy Bechtolsheim of Sun Microsystems wrote a cheque for a hundred thousand dollars in August 1998, and Google Inc. was incorporated on 4 September 1998 in a garage in Menlo Park.

Google's results were noticeably better, and the company grew almost entirely by word of mouth with a plain home page that loaded quickly. The business model came later. In October 2000 Google launched AdWords, selling text advertisements keyed to the search query, and in 2002 it adopted an auction with ranking by expected revenue, an idea largely pioneered by Overture. The combination of relevant results and relevant advertisements became the most profitable business in the history of media. The company went public in 2004 and earned more than fifty billion dollars in 2012.

The engineering to serve billions of queries was itself important. Google built its own distributed file system, a cluster scheduler and the MapReduce framework, described in papers in 2003 and 2004 that inspired the open-source Hadoop and much of the later "big data" industry. Its habit of hiring machine-learning researchers, and later acquiring DeepMind and publishing the transformer architecture, made it a central institution of the following epoch.

The lasting significance is that Google made the web navigable without a directory or a librarian. Knowing something became less valuable than being able to look it up, a shift whose cognitive consequences are still debated.`,
    mechanism: `A crawler fetches pages by following links and stores them; an indexer inverts the text so that every word points to the list of documents containing it. At query time the engine intersects those lists, then ranks candidates. PageRank supplies a query-independent importance score computed offline: each page's score is the sum of the scores of pages linking to it, divided by their outgoing link counts, plus a small constant representing a random jump. Iterating this rule over the whole link graph converges on the stationary distribution of a random surfer. The final rank combined PageRank with query-dependent signals such as term proximity, anchor text of incoming links and font size. Serving ran on thousands of commodity PCs with the index sharded across machines and replicated for fault tolerance, so that a single query fanned out to many servers and returned in well under a second.`,
    prerequisites: ['world-wide-web', 'mosaic-netscape', 'tcp-ip', 'linux'],
    consequences: ['youtube', 'imagenet-dataset', 'smartphone-universal-computer', 'word2vec', 'transformer-paper'],
    figures: [
      { name: 'Larry Page', role: 'Co-founder; conceived PageRank' },
      { name: 'Sergey Brin', role: 'Co-founder' },
      { name: 'Rajeev Motwani', role: 'Stanford adviser and PageRank report co-author' },
    ],
    significance: 9,
    significanceJustification: 'Google made the web usable at scale, created the advertising model that funded the consumer internet, and built the infrastructure and research culture that seeded modern machine learning.',
    domains: ['information', 'computation', 'communication'],
    sources: [
      { author: 'Sergey Brin and Lawrence Page', title: 'The anatomy of a large-scale hypertextual Web search engine', publisher: 'Computer Networks and ISDN Systems', year: 1998, url: 'https://doi.org/10.1016/S0169-7552(98)00110-X' },
      { author: 'Lawrence Page, Sergey Brin, Rajeev Motwani and Terry Winograd', title: 'The PageRank Citation Ranking: Bringing Order to the Web', publisher: 'Stanford InfoLab', year: 1999 },
      { author: 'Steven Levy', title: 'In the Plex: How Google Thinks, Works, and Shapes Our Lives', publisher: 'Simon & Schuster', year: 2011 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'bluetooth',
    epochId: 'networked-world',
    date: { year: 1999, month: 7, precision: 'year', display: '1999 (Bluetooth 1.0 specification, July 1999)' },
    location: 'Ericsson, Lund, Sweden; Bluetooth Special Interest Group',
    title: 'Bluetooth short-range radio replaces the cable',
    summary: 'Ericsson engineers designed a low-power radio link to replace cables between phones and headsets; the Bluetooth Special Interest Group formed in 1998 and published the 1.0 specification in July 1999.',
    explanation: `Bluetooth began in 1994 as a project at Ericsson Mobile in Lund, Sweden, where Nils Rydbeck asked Jaap Haartsen and Sven Mattisson to design a radio that would let a mobile phone talk to a wireless headset. The constraints were severe: it had to fit on one cheap chip, run for days on a small battery, and work in the crowded unlicensed 2.4 gigahertz band alongside microwave ovens and the emerging Wi-Fi. Haartsen's design used fast frequency hopping, changing channel 1,600 times a second, so that interference on any one channel cost only a fraction of a packet.

Ericsson understood that a radio only its own phones used would be worthless, so in May 1998 it founded a Special Interest Group with IBM, Intel, Nokia and Toshiba. The name, proposed by Intel's Jim Kardach, honours the tenth-century Danish king Harald Bluetooth, who united the Scandinavian tribes as the standard was meant to unite the PC and mobile industries. The 1.0 specification was released in July 1999, and the first products, a headset and a phone from Ericsson, arrived in 2000. Early versions were unreliable and pairing was confusing; it took the 1.2 and 2.0 revisions (2003 and 2004) and the arrival of the iPhone and Android for the technology to become dependable and ubiquitous.

The adoption curve then became steep. Hands-free headsets were pushed by driving laws; wireless keyboards, mice and speakers followed; and in 2010 Bluetooth Low Energy, derived from a Nokia project called Wibree, cut power consumption enough for coin-cell sensors, fitness trackers and beacons. Annual shipments passed a billion devices around 2007 and four billion by the mid-2010s.

Bluetooth matters for three reasons. It is the most successful example of a consortium standard beating proprietary alternatives, because every phone maker had a reason to adopt it. It created the "personal area network", the idea that the objects a person carries or wears form a small private network centred on the phone. And, together with Wi-Fi, it demonstrated that unlicensed spectrum, which regulators had regarded as junk, could support industries worth hundreds of billions of dollars. Wireless earbuds, smartwatches, car infotainment and medical sensors all sit on the foundation laid in Lund.`,
    mechanism: `A Bluetooth radio transmits at about one milliwatt, giving a range of roughly ten metres. The 2.4 gigahertz band is divided into 79 channels of one megahertz, and paired devices hop between them in a pseudo-random sequence derived from the master device's address and clock, 1,600 hops per second. Data is sent in short packets in alternate time slots so that master and slave take turns. Gaussian frequency-shift keying, later supplemented by phase-shift keying for higher rates, keeps the transmitter simple and cheap. A master and up to seven active slaves form a piconet sharing one hopping sequence. Above the radio, a protocol stack handles link management, pairing keys, and profiles that define how a headset, keyboard or file transfer behaves, so that devices from different manufacturers interoperate. Bluetooth Low Energy uses 40 wider channels and very short connection events to spend most of its time asleep.`,
    prerequisites: ['hertz-radio-waves', 'cell-phone', 'integrated-circuit'],
    consequences: ['iphone', 'smartphone-universal-computer'],
    figures: [
      { name: 'Jaap Haartsen', role: 'Ericsson engineer; principal designer of the radio' },
      { name: 'Sven Mattisson', role: 'Ericsson engineer; co-designer' },
      { name: 'Jim Kardach', role: 'Intel engineer; proposed the name and helped form the SIG' },
    ],
    significance: 6,
    significanceJustification: 'Bluetooth made cable-free peripherals and wearables practical and established the phone-centred personal area network. It is less foundational than Wi-Fi but ships in nearly every connected device.',
    domains: ['communication'],
    sources: [
      { author: 'Jaap C. Haartsen', title: 'The Bluetooth radio system', publisher: 'IEEE Personal Communications', year: 2000, url: 'https://doi.org/10.1109/98.824570' },
      { author: 'Bluetooth Special Interest Group', title: 'Specification of the Bluetooth System, Version 1.0', publisher: 'Bluetooth SIG', year: 1999 },
      { author: 'Jennifer Bray and Charles F. Sturman', title: 'Bluetooth: Connect Without Cables', publisher: 'Prentice Hall', year: 2001 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'wikipedia',
    epochId: 'networked-world',
    date: { year: 2001, month: 1, day: 15, precision: 'exact', display: '2001-01-15' },
    location: 'San Diego, California, United States',
    title: 'Wikipedia launches as a free encyclopaedia anyone can edit',
    summary: 'Jimmy Wales and Larry Sanger launched Wikipedia on 15 January 2001 as a wiki-based feeder for the expert-written Nupedia; within a few years its volunteer-written articles had eclipsed every printed encyclopaedia.',
    explanation: `Wikipedia was a side project. In 2000 Jimmy Wales, who had made money in options trading and ran a web portal called Bomis, hired the philosophy graduate student Larry Sanger to edit Nupedia, a free online encyclopaedia written by credentialed experts and reviewed through a seven-step process. After a year Nupedia had about two dozen finished articles. In January 2001 Sanger was introduced to wiki software, invented by Ward Cunningham in 1995, which let any visitor edit any page in a browser. Wales agreed to try it as a way of generating drafts, and Wikipedia went live on 15 January 2001.

The experts of Nupedia were unimpressed, but the open site grew at a pace nobody expected: a thousand articles by February, twenty thousand by the end of the year, and a hundred thousand by early 2003. Sanger left in 2002; Wales transferred the project to the non-profit Wikimedia Foundation in 2003. German, French and Japanese editions appeared in 2001, and by 2012 there were editions in more than 280 languages, with the English edition passing four million articles.

The project's rules emerged from practice: a neutral point of view, verifiability against published sources, no original research, and an assumption of good faith among strangers. Vandalism was real but was usually reverted in minutes, because every edit was visible and reversible and because thousands of volunteers watched pages they cared about. A 2005 investigation in Nature compared science articles in Wikipedia and Encyclopaedia Britannica and found roughly comparable error rates, a finding Britannica disputed but which shifted public perception. Britannica ceased its print edition in 2012.

Wikipedia is significant as an institution and as a dataset. As an institution it showed that voluntary, unpaid collaboration among strangers could produce a reference work larger and more current than any commercial publisher's, and that the mechanism was social (norms, discussion pages, reputation) rather than technical. As a dataset it became the single most important corpus for computational linguistics: freely licensed, multilingual, cross-linked and consistently structured, it fed knowledge graphs, question-answering systems and, after 2018, the pretraining of large language models. It remains among the ten most visited websites in the world and, unusually for the epoch, carries no advertising.`,
    mechanism: `Wikipedia runs on MediaWiki, software written in PHP with a MySQL database, on servers operated by the Wikimedia Foundation. Every page is stored as a sequence of revisions; an edit creates a new revision rather than overwriting the old, so any change can be compared and reverted. Pages are written in a lightweight wikitext markup that is rendered to HTML on request and cached aggressively, since reads outnumber writes by thousands to one. Links between articles are created by enclosing a title in double square brackets, which makes the encyclopaedia a densely connected graph. Templates allow structured infoboxes, and categories provide a folksonomy. Social mechanisms complete the system: watchlists notify editors of changes to pages they follow, talk pages host disputes, and a small elected corps of administrators can protect pages or block accounts.`,
    prerequisites: ['world-wide-web', 'linux', 'mosaic-netscape'],
    consequences: ['bert', 'gpt-2', 'gpt-3'],
    figures: [
      { name: 'Jimmy Wales', role: 'Co-founder' },
      { name: 'Larry Sanger', role: 'Co-founder and first editor-in-chief' },
      { name: 'Ward Cunningham', role: 'Inventor of the wiki, 1995' },
    ],
    significance: 8,
    significanceJustification: 'Wikipedia replaced the printed encyclopaedia, demonstrated large-scale volunteer knowledge production, and became the core training corpus for natural language processing.',
    domains: ['information', 'communication'],
    sources: [
      { author: 'Jim Giles', title: 'Internet encyclopaedias go head to head', publisher: 'Nature', year: 2005, url: 'https://doi.org/10.1038/438900a' },
      { author: 'Andrew Lih', title: 'The Wikipedia Revolution: How a Bunch of Nobodies Created the World\'s Greatest Encyclopedia', publisher: 'Hyperion', year: 2009 },
      { author: 'Joseph Michael Reagle Jr.', title: 'Good Faith Collaboration: The Culture of Wikipedia', publisher: 'MIT Press', year: 2010 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'ipod',
    epochId: 'networked-world',
    date: { year: 2001, month: 10, day: 23, precision: 'exact', display: '2001-10-23' },
    location: 'Cupertino, California, United States',
    title: 'The iPod puts a thousand songs in a pocket',
    summary: 'Apple introduced the iPod on 23 October 2001, pairing a tiny hard drive, a scroll wheel and the iTunes library; with the iTunes Store in 2003 it rebuilt the music business around downloads and made Apple a consumer electronics company.',
    explanation: `The iPod was announced by Steve Jobs on 23 October 2001, six weeks after the attacks of 11 September, to a press that was mildly puzzled that a computer company had made a music player. Portable MP3 players had existed since 1998, but they held a few dozen songs in flash memory or were the size of a CD player. The iPod used a 1.8-inch, five-gigabyte Toshiba hard drive that Jon Rubinstein had seen on a visit to Japan in early 2001, a FireWire connection that could fill it in minutes rather than the hours USB 1.1 took, and a mechanical scroll wheel that made navigating a thousand songs pleasant. Tony Fadell, hired as a contractor, led the hardware programme with a team that built the product in about eight months, licensing the operating system from Pixo and the reference design from PortalPlayer.

The device initially worked only with Macintosh computers and cost 399 dollars. Windows support arrived in 2002, and in April 2003 Apple opened the iTunes Music Store, having persuaded the five major record labels to sell individual songs for 99 cents with digital rights management. The store sold a million songs in its first week. The iPod mini, shuffle and nano followed, with flash memory replacing the hard drive, and by 2007 Apple had sold a hundred million iPods and held about three quarters of the American market.

The commercial result was the reorganisation of the recorded music industry. Album sales, already falling because of file sharing on Napster and its successors, gave way to single-track purchases and later to streaming; global recorded music revenue roughly halved between 1999 and 2014 before recovering. The labels' distribution monopoly was replaced by a platform owned by a technology company.

For Apple, and for the epoch, the iPod mattered as a rehearsal. It established the pattern of a beautiful device tied to a software library and an online store, with Apple taking a share of every transaction. Its supply chain, its industrial design under Jony Ive, and the team under Fadell and Rubinstein became the basis for the iPhone. In 2007 the iPhone was introduced as, among other things, "a widescreen iPod with touch controls", and iPod sales began a decline that ended with the product's discontinuation in 2022. The iPod also normalised the idea that one carried one's entire media library at all times, which made the transition to the cloud and streaming feel natural rather than strange.`,
    mechanism: `Music was encoded on a computer into compressed formats (MP3 or AAC) that discard sound the ear masks, reducing a song to a few megabytes. iTunes managed the library and synchronised it over FireWire to the iPod's 1.8-inch hard disk. Because a spinning disk consumes power and is fragile, the player read ahead into a 32-megabyte memory buffer, then spun the disk down, so the drive ran only a few seconds per song. A PortalPlayer system-on-chip with two ARM cores decoded the audio and drove a monochrome liquid crystal display. The scroll wheel, mechanical in the first model and a capacitive touch surface from 2002, converted finger rotation into list scrolling with acceleration, so long lists could be traversed in a few gestures. A lithium-polymer battery gave about ten hours of playback. The iTunes Store wrapped purchased tracks in FairPlay encryption keyed to the buyer's authorised computers.`,
    prerequisites: ['lithium-ion-battery', 'macintosh', 'integrated-circuit'],
    consequences: ['iphone'],
    figures: [
      { name: 'Steve Jobs', role: 'Apple chief executive; drove the product' },
      { name: 'Tony Fadell', role: 'Led the iPod hardware programme' },
      { name: 'Jon Rubinstein', role: 'Apple hardware chief; selected the Toshiba drive' },
      { name: 'Jony Ive', role: 'Industrial design' },
    ],
    significance: 6,
    significanceJustification: 'The iPod reorganised the music industry around digital distribution and built the design, supply chain and business model that produced the iPhone. Its direct technical novelty was modest.',
    domains: ['information', 'communication'],
    sources: [
      { author: 'Steven Levy', title: 'The Perfect Thing: How the iPod Shuffles Commerce, Culture, and Coolness', publisher: 'Simon & Schuster', year: 2006 },
      { author: 'Walter Isaacson', title: 'Steve Jobs', publisher: 'Simon & Schuster', year: 2011 },
      { author: 'Apple Inc.', title: 'Apple Presents iPod (press release)', publisher: 'Apple Inc.', year: 2001 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'human-genome-completion',
    epochId: 'networked-world',
    date: { year: 2003, month: 4, day: 14, precision: 'exact', display: '2003-04-14' },
    location: 'Bethesda, Maryland, United States; Wellcome Trust Sanger Institute, Hinxton, United Kingdom, and partner centres',
    title: 'The Human Genome Project declares the sequence complete',
    summary: 'After a working draft in 2001, the public Human Genome Project announced an essentially complete human reference sequence on 14 April 2003, fifty years after the double helix, making the genome a shared digital object.',
    explanation: `The Human Genome Project had been launched in 1990 with a fifteen-year plan and a budget of three billion dollars. By the late 1990s a private competitor, Celera Genomics under Craig Venter, was using whole-genome shotgun sequencing and capillary machines to race the public consortium, and the rivalry accelerated both. On 26 June 2000 President Clinton and Prime Minister Blair announced a joint "working draft"; the two papers appeared in February 2001, the public consortium's in Nature and Celera's in Science. Those drafts covered about ninety percent of the euchromatic genome with many gaps and errors.

The "finished" sequence announced on 14 April 2003, timed to the fiftieth anniversary of Watson and Crick's paper, covered about ninety-nine percent of the gene-containing regions at an accuracy of better than one error in ten thousand bases, with roughly 340 gaps that available technology could not close. A formal description appeared in Nature in October 2004. The truly gapless telomere-to-telomere sequence would not arrive until 2022, so "complete" in 2003 meant complete for practical purposes.

The most surprising scientific finding was the gene count. Estimates of a hundred thousand protein-coding genes were replaced by a figure around twenty to twenty-five thousand, fewer than in some plants, which shifted attention from genes to regulation, alternative splicing and non-coding RNA. Only about one and a half percent of the genome coded for proteins, and nearly half was made of transposable elements.

The project's design decisions mattered as much as its results. The Bermuda Principles of 1996 required that sequence data be released to public databases within twenty-four hours, which defeated attempts to patent raw sequence and set a norm for open data across biology. Sixteen centres in six countries coordinated over the internet, with the Sanger Institute and three American centres doing most of the work.

The consequences unfolded over the following decade. The reference genome made possible genome-wide association studies, the HapMap and 1000 Genomes projects, and the diagnosis of rare diseases by sequencing. It created the market pull for next-generation sequencing, whose cost per genome fell from about a hundred million dollars in 2001 to around a thousand dollars by 2014. Protein structure prediction, mRNA vaccine design and CRISPR targeting all assume a reference against which any human sequence can be compared. Above all, the genome became something a laptop could hold: a text file of about three gigabytes, downloadable by anyone.`,
    mechanism: `The public project used hierarchical shotgun sequencing. Genomic DNA was fragmented into pieces of about 150,000 bases and cloned into bacterial artificial chromosomes, which were mapped to their positions on the chromosomes. Each mapped clone was then sheared into small fragments, cloned again, and sequenced by the Sanger dideoxy method on automated capillary machines that read about 600 bases per run with fluorescently labelled terminators. Software assembled overlapping reads into contiguous sequence for each clone, and the clone map ordered the contigs along the chromosome. Finishing meant targeted resequencing to close gaps and resolve ambiguities. Celera's alternative, whole-genome shotgun, skipped the clone map and assembled reads from the entire genome at once, relying on paired-end reads to span repeats. Both approaches depended on large compute clusters and public databases (GenBank, EMBL, DDBJ) that mirrored each other nightly.`,
    prerequisites: ['human-genome-project-launch', 'automated-dna-sequencer', 'pcr', 'dna-double-helix', 'recombinant-dna'],
    consequences: ['crispr-discovery', 'mrna-vaccines', 'alphafold-2', 'casgevy-crispr-therapy'],
    figures: [
      { name: 'Francis Collins', role: 'Director of the National Human Genome Research Institute' },
      { name: 'John Sulston', role: 'Director of the Sanger Centre; champion of open data' },
      { name: 'Eric Lander', role: 'Director of the Whitehead/MIT Center for Genome Research; lead author of the 2001 paper' },
      { name: 'Craig Venter', role: 'Founder of Celera Genomics; competing private effort' },
    ],
    significance: 9,
    significanceJustification: 'The reference genome is the foundational dataset of modern biology and medicine, and the project set the open-data norms and sequencing market that followed. Its immediate clinical payoff was slower than promised.',
    domains: ['biology-medicine', 'information'],
    sources: [
      { author: 'International Human Genome Sequencing Consortium', title: 'Initial sequencing and analysis of the human genome', publisher: 'Nature', year: 2001, url: 'https://doi.org/10.1038/35057062' },
      { author: 'International Human Genome Sequencing Consortium', title: 'Finishing the euchromatic sequence of the human genome', publisher: 'Nature', year: 2004, url: 'https://doi.org/10.1038/nature03001' },
      { author: 'J. Craig Venter and others', title: 'The Sequence of the Human Genome', publisher: 'Science', year: 2001, url: 'https://doi.org/10.1126/science.1058040' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'social-networks',
    epochId: 'networked-world',
    date: { year: 2004, month: 2, day: 4, precision: 'exact', display: '2004-02-04 (Facebook launch; Friendster 2002, MySpace 2003)' },
    location: 'Cambridge, Massachusetts, United States (Facebook); Mountain View and Los Angeles, California (Friendster, MySpace)',
    title: 'Social networking sites make the friend graph a product',
    summary: 'Friendster (2002), MySpace (2003) and Facebook (launched 4 February 2004 at Harvard) turned personal profiles and explicit friend lists into the organising structure of the web, with Facebook reaching a billion users by 2012.',
    explanation: `The idea of a website organised around people rather than pages had precursors in SixDegrees.com (1997) and in dating sites, but the form took hold with Friendster, launched by Jonathan Abrams in March 2002. Friendster let users build profiles, link to friends and browse the friends of friends; it reached three million users within months and then collapsed under slow servers and a management that fought its own users. MySpace, launched in August 2003 by Chris DeWolfe and Tom Anderson, copied the model, let users decorate their pages with HTML and music, became the home of independent bands, and was bought by News Corporation for 580 million dollars in 2005.

Facebook was launched on 4 February 2004 by Mark Zuckerberg and fellow Harvard students as "thefacebook", restricted to holders of a Harvard email address. Exclusivity and real names distinguished it: because members were verifiable classmates, the site had far less spam and pretence than its rivals. It opened to other universities, then to high schools, then in September 2006 to anyone over thirteen, the same month it introduced the News Feed, an algorithmically ordered stream of friends' activity that provoked outrage and then became the product's core. The Facebook Platform for third-party applications followed in 2007, the Like button in 2009, and the company passed a billion monthly users in October 2012, months after its public offering.

Meanwhile Twitter (2006) made the follow relationship asymmetric and public, LinkedIn (2003) did the same for professional identity, and outside the United States Orkut, Mixi, Cyworld, VKontakte and QQ dominated their regions. What they shared was a business built on the graph: knowing who was connected to whom and what they paid attention to.

The consequences were large and mixed. Social networks became the main way news and opinion spread, displacing editors with feeds tuned to engagement, and were central to the Arab Spring of 2011 and later to disinformation campaigns and the politics of outrage. They created the modern advertising machine, in which a message can be targeted by inferred interest, location and friendship, and they normalised the continuous documentation of ordinary life. Together with the smartphone they made checking a feed a habit performed dozens of times a day. The scholarly literature on their effects on mental health, polarisation and civic life remains contested, but nobody disputes that they changed how several billion people relate to one another.`,
    mechanism: `A social network site stores users, profile attributes and a graph of edges (friend, follow, group membership) in a database that must serve reads at enormous rate, since each page view assembles data about dozens of people. Facebook built this on the LAMP stack (Linux, Apache, MySQL, PHP), adding memcached to hold hot data in memory, custom photo storage, and eventually TAO, a distributed graph cache. The News Feed ranks candidate stories by a score predicting engagement, initially a hand-tuned formula weighting affinity with the poster, the type of content and recency, later a machine-learned model. Advertising targets users by declared and inferred attributes and by lookalike audiences derived from the graph. Notifications and email keep users returning, and Like and share buttons embedded on other sites extend the graph's reach across the web.`,
    prerequisites: ['world-wide-web', 'linux', 'mosaic-netscape'],
    consequences: ['youtube', 'smartphone-universal-computer'],
    figures: [
      { name: 'Mark Zuckerberg', role: 'Facebook founder' },
      { name: 'Jonathan Abrams', role: 'Friendster founder' },
      { name: 'Chris DeWolfe and Tom Anderson', role: 'MySpace founders' },
    ],
    significance: 8,
    significanceJustification: 'Social networks reorganised communication, news distribution and advertising around the friend graph and reached most of humanity within a decade. Their effects on public life are profound and still contested.',
    domains: ['communication', 'information'],
    sources: [
      { author: 'danah m. boyd and Nicole B. Ellison', title: 'Social Network Sites: Definition, History, and Scholarship', publisher: 'Journal of Computer-Mediated Communication', year: 2007, url: 'https://doi.org/10.1111/j.1083-6101.2007.00393.x' },
      { author: 'David Kirkpatrick', title: 'The Facebook Effect: The Inside Story of the Company That Is Connecting the World', publisher: 'Simon & Schuster', year: 2010 },
      { author: 'Julia Angwin', title: 'Stealing MySpace: The Battle to Control the Most Popular Website in America', publisher: 'Random House', year: 2009 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'youtube',
    epochId: 'networked-world',
    date: { year: 2005, month: 4, day: 23, precision: 'exact', display: '2005-04-23 (first upload; site founded February 2005)' },
    location: 'San Mateo, California, United States',
    title: 'YouTube makes video a thing anyone can publish',
    summary: 'Founded in February 2005 by three PayPal alumni, YouTube hosted its first video on 23 April 2005 and, by making upload and embedding trivial, turned video from a broadcast medium into a participatory one; Google bought it in 2006 for 1.65 billion dollars.',
    explanation: `In early 2005 Chad Hurley, Steve Chen and Jawed Karim, who had worked together at PayPal, registered the domain youtube.com. The founding story they told involved difficulty sharing videos from a dinner party; the site's first video, "Me at the zoo", eighteen seconds of Karim in front of elephants at the San Diego Zoo, was uploaded on 23 April 2005. Video on the web was not new, but it was painful: files were large, codecs incompatible, and viewers had to download players. YouTube converted every upload to Flash video, which nearly every browser could already play, and generated an embed code so that a clip could be pasted into a blog or a MySpace page. Growth came largely through MySpace embeds.

By mid-2006 the site served a hundred million video views a day, and copyrighted television clips (a Saturday Night Live sketch, "Lazy Sunday", was an early sensation) drove much of the traffic. Bandwidth costs were enormous and legal exposure larger. On 9 October 2006 Google bought YouTube for 1.65 billion dollars in stock, bringing capital, a content identification system to placate rights holders, and an advertising business. Viacom nevertheless sued for a billion dollars in 2007; the case, resolved in YouTube's favour under the safe-harbour provisions of the Digital Millennium Copyright Act, defined the legal ground for user-generated content.

YouTube then became infrastructure. The iPhone shipped with a YouTube application in 2007, and mobile viewing eventually exceeded desktop. The Partner Program of 2007 shared advertising revenue with creators, inventing a new occupation. Political campaigns, music labels, universities and news organisations all adopted the site rather than competing with it. By 2012 YouTube reported that seventy-two hours of video were uploaded every minute and that it had more than a billion monthly users.

The significance is twofold. Culturally, YouTube dissolved the distinction between broadcaster and audience that had structured video since the 1930s; anyone with a camera, and after 2007 anyone with a phone, could reach a global audience without a gatekeeper. Technically, it forced the build-out of content delivery networks, video codecs and transcoding pipelines at planetary scale, and its recommendation system, tuned to watch time from 2012, became one of the most studied and criticised algorithms in the world. YouTube's archive of tutorials, lectures and music is, alongside Wikipedia, the closest thing the epoch produced to a universal library.`,
    mechanism: `An uploaded video file is copied to storage and queued for transcoding, in which server farms decode the original and re-encode it into several standardised resolutions and bit rates (H.264 from 2007, later VP9 and AV1). The player, first Flash and after 2010 HTML5, requests the stream over ordinary HTTP in small chunks and switches between quality levels as bandwidth changes, a technique called adaptive bitrate streaming. Popular videos are cached on content delivery network servers placed inside internet service providers, so most bytes travel only a few kilometres. Content ID compares audio and video fingerprints of every upload against a database supplied by rights holders and lets them block, track or monetise matches. Recommendations combine collaborative filtering over watch histories with, after 2012, models predicting expected watch time. Advertising is inserted as pre-roll or overlay and the revenue shared with eligible creators.`,
    prerequisites: ['world-wide-web', 'social-networks', 'fiber-optics', 'google-search'],
    consequences: ['iphone', 'smartphone-universal-computer'],
    figures: [
      { name: 'Chad Hurley', role: 'Co-founder and chief executive' },
      { name: 'Steve Chen', role: 'Co-founder and chief technology officer' },
      { name: 'Jawed Karim', role: 'Co-founder; uploaded the first video' },
    ],
    significance: 7,
    significanceJustification: 'YouTube made video publishing universal, created the creator economy and built the streaming and recommendation infrastructure later copied by every platform. It reshaped culture more than technology.',
    domains: ['communication', 'information'],
    sources: [
      { author: 'Jean Burgess and Joshua Green', title: 'YouTube: Online Video and Participatory Culture', publisher: 'Polity Press', year: 2009 },
      { author: 'Meeyoung Cha, Haewoon Kwak, Pablo Rodriguez, Yong-Yeol Ahn and Sue Moon', title: 'I Tube, You Tube, Everybody Tubes: Analyzing the World\'s Largest User Generated Content Video System', publisher: 'ACM Internet Measurement Conference', year: 2007, url: 'https://doi.org/10.1145/1298306.1298309' },
      { author: 'Google Inc.', title: 'Google To Acquire YouTube for $1.65 Billion in Stock (press release)', publisher: 'Google Inc.', year: 2006 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'git-version-control',
    epochId: 'networked-world',
    date: { year: 2005, month: 4, day: 7, precision: 'exact', display: '2005-04-07' },
    location: 'Portland, Oregon, United States',
    title: 'Linus Torvalds writes Git, and distributed version control takes over',
    summary: 'When the Linux kernel lost its licence for the BitKeeper tool in April 2005, Linus Torvalds wrote Git in about two weeks; its distributed, content-addressed design and later GitHub (2008) made it the universal substrate of software collaboration.',
    explanation: `Version control systems record the history of a body of source code so that many programmers can work on it at once. Through the 1990s the dominant tools, CVS and then Subversion, kept a single central repository; every commit was a network operation and branching was painful. From 2002 the Linux kernel used BitKeeper, a proprietary distributed system whose maker allowed free use by open-source projects. In April 2005 that arrangement collapsed after a kernel contributor reverse-engineered BitKeeper's protocol, and Linus Torvalds, unwilling to go back to centralised tools, decided to write his own.

He began on 3 April 2005 and made the first commit of Git on 7 April, describing it in the commit message as "the information manager from hell". Within days it was hosting its own development; by June it was managing the kernel; and in July Torvalds handed maintenance to Junio Hamano, who has led it since. The design goals were speed on a codebase with tens of thousands of files, protection against corruption, and a workflow in which every developer holds a complete copy of the history and merges happen anywhere. Torvalds later said he had modelled parts of it on his experience with BitKeeper and on the distributed filesystem ideas he knew from operating systems.

For its first few years Git was regarded as powerful but hostile, a tool for kernel hackers. That changed with GitHub, founded in 2008 by Tom Preston-Werner, Chris Wanstrath and P. J. Hyett, which wrapped Git repositories in a social website with issue tracking and, crucially, the "pull request", a way for a stranger to propose a change and have it reviewed and merged with a click. Contributing to open source, which had meant mailing patches to a list, became as easy as forking a page. By 2012 GitHub hosted more than three million repositories; by the 2020s it hosted over a hundred million and had been bought by Microsoft.

The significance is that Git and GitHub became the shared memory of the software industry. Almost every program written after 2010, open or proprietary, lives in a Git repository; machine-learning models, datasets, infrastructure definitions and even legislation are versioned in it. The public corpus of code on GitHub trained the code-generating language models of the following epoch, and the pull request became the interface through which automated coding agents submit their work.`,
    mechanism: `Git stores every file as a "blob" named by the SHA-1 hash of its contents; directories are "trees" listing blob and subtree hashes; a "commit" points to a tree, to its parent commits, and to author and message. Because every object is addressed by the hash of its content, and each commit's hash covers its entire ancestry, history cannot be altered without changing every subsequent hash, and two repositories can verify they hold identical data by comparing one string. Branches are simply movable pointers to commits, so creating one costs nothing. Merging finds the common ancestor of two commits and applies both sets of changes, flagging conflicts where they overlap. Every clone is a full repository; synchronising is a matter of exchanging the objects the other side lacks, which Git computes by walking commit graphs. Objects are compressed into packfiles using delta encoding for efficient storage and transfer.`,
    prerequisites: ['linux', 'unix', 'tcp-ip'],
    consequences: ['bitcoin', 'stable-diffusion', 'agentic-coding-tools'],
    figures: [
      { name: 'Linus Torvalds', role: 'Author of Git' },
      { name: 'Junio C. Hamano', role: 'Git maintainer since July 2005' },
      { name: 'Tom Preston-Werner, Chris Wanstrath and P. J. Hyett', role: 'GitHub founders, 2008' },
    ],
    significance: 7,
    significanceJustification: 'Git became the near-universal system of record for software and, through GitHub, the social infrastructure of open-source collaboration and the training corpus for code-generating models.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Scott Chacon and Ben Straub', title: 'Pro Git, Second Edition', publisher: 'Apress', year: 2014 },
      { author: 'Linus Torvalds', title: 'Kernel SCM saga.. (message to the Linux kernel mailing list, 6 April 2005)', publisher: 'Linux Kernel Mailing List', year: 2005 },
      { author: 'Linus Torvalds', title: 'Tech Talk: Linus Torvalds on git (Google, 3 May 2007)', publisher: 'Google', year: 2007 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'aws-cloud-computing',
    epochId: 'networked-world',
    date: { year: 2006, month: 3, day: 14, precision: 'exact', display: '2006-03-14 (S3 launch; EC2 followed in August 2006)' },
    location: 'Seattle, Washington, United States',
    title: 'Amazon Web Services turns computing into a metered utility',
    summary: 'Amazon launched the Simple Storage Service on 14 March 2006 and the Elastic Compute Cloud that August, letting anyone rent storage and servers by the hour with a credit card; cloud computing became the default way to build software.',
    explanation: `Amazon Web Services grew out of two internal problems. The retail site's engineers were slow to build new features because every team had to provision its own servers, databases and storage, so around 2003 Amazon reorganised its infrastructure into services with hard programming interfaces that any team could call. At the same time Amazon's data centres, sized for the December peak, sat mostly idle the rest of the year. Andy Jassy, then Jeff Bezos's technical assistant, wrote the plan to sell those services to outsiders, and a small team including Werner Vogels, Chris Pinkham and Benjamin Black built the first products.

The Simple Storage Service, S3, launched on 14 March 2006 at fifteen cents per gigabyte per month; the Elastic Compute Cloud, EC2, followed in beta on 25 August 2006, renting a virtual Linux server for ten cents an hour. There were no contracts, no minimums and no salesmen. A start-up could go from an idea to a running service in an afternoon, scale to millions of users if it succeeded, and pay nothing if it failed. Early customers were exactly such start-ups: SmugMug, Reddit, and from 2008 Netflix, which moved its streaming business onto AWS after a database corruption incident in its own data centre.

The competitive response was slow. Google launched App Engine in 2008 and Microsoft Azure in 2010, but AWS held roughly a third of the market through the 2010s and its revenue passed ten billion dollars in 2016. It added a relational database service, message queues, content delivery, and hundreds of further products; by 2012 it had data centre regions on four continents.

The significance lies in what cloud computing removed. Before 2006 building an internet service required capital: buying servers, renting cage space, hiring administrators. After it, computing was an operating expense that scaled with use, like electricity. This lowered the cost of a software start-up by an order of magnitude and is a large part of why the mobile and social applications of the following years could be built by small teams. It also concentrated the world's computing in a few companies' data centres, with consequences for privacy, resilience and geopolitics that became visible later. When the deep-learning era arrived, the cloud was where models were trained and served: OpenAI on Microsoft's Azure, Anthropic on AWS and Google, and the "hyperscale" data centres of the 2020s are the direct descendants of the warehouse-sized buildings AWS began filling in 2006.`,
    mechanism: `S3 stores objects, each up to five terabytes, under a key in a bucket, replicated across several facilities and retrieved by HTTP requests authenticated with a signed header. Durability comes from writing every object to multiple disks in multiple buildings and continuously checking and repairing copies. EC2 rents virtual machines: a hypervisor (originally Xen, later Amazon's own Nitro hardware) partitions a physical server into isolated instances, each with its own virtual disk, network interface and operating system image, which can be started or destroyed in minutes by an API call. Metering records consumption per hour and per gigabyte and bills monthly. Behind the interfaces lie warehouse-scale data centres of commodity servers, redundant power and cooling, and a private fibre network, operated by software that treats hardware failure as routine and reschedules work around it.`,
    prerequisites: ['e-commerce-amazon', 'linux', 'tcp-ip', 'fiber-optics'],
    consequences: ['smartphone-universal-computer', 'chatgpt', 'claude', 'hyperscale-ai-datacenters'],
    figures: [
      { name: 'Andy Jassy', role: 'Wrote the AWS business plan and led the division' },
      { name: 'Werner Vogels', role: 'Amazon chief technology officer' },
      { name: 'Chris Pinkham and Benjamin Black', role: 'Proposed and led early EC2 development' },
    ],
    significance: 9,
    significanceJustification: 'Cloud computing changed computing from a capital good into a utility, enabling the start-up and mobile eras and providing the substrate on which large AI models are trained and served.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Michael Armbrust, Armando Fox, Rean Griffith, Anthony D. Joseph, Randy Katz, Andy Konwinski, Gunho Lee, David Patterson, Ariel Rabkin, Ion Stoica and Matei Zaharia', title: 'A View of Cloud Computing', publisher: 'Communications of the ACM', year: 2010, url: 'https://doi.org/10.1145/1721654.1721672' },
      { author: 'Giuseppe DeCandia and others', title: "Dynamo: Amazon's Highly Available Key-value Store", publisher: 'ACM Symposium on Operating Systems Principles', year: 2007, url: 'https://doi.org/10.1145/1294261.1294281' },
      { author: 'Brad Stone', title: 'The Everything Store: Jeff Bezos and the Age of Amazon', publisher: 'Little, Brown and Company', year: 2013 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'iphone',
    epochId: 'networked-world',
    date: { year: 2007, month: 1, day: 9, precision: 'exact', display: '2007-01-09 (announced; released 29 June 2007)' },
    location: 'San Francisco, California, United States',
    title: 'The iPhone: a computer with a multi-touch screen that is also a phone',
    summary: 'Steve Jobs unveiled the iPhone on 9 January 2007 and Apple shipped it on 29 June; its capacitive multi-touch screen, desktop-class browser and, from 2008, the App Store defined the form of the modern smartphone.',
    explanation: `Smartphones existed before 2007. Nokia, BlackBerry and Palm sold devices with email and small keyboards, and Windows Mobile phones had styluses and cramped versions of desktop software. Steve Jobs's announcement at Macworld on 9 January 2007 presented "an iPod, a phone and an internet communicator" as one device, and the crowd understood only slowly that he meant a single product. The iPhone went on sale on 29 June 2007 in the United States at 499 dollars with a two-year AT&T contract.

The project, code-named Purple, had begun around 2004 as a tablet exploration using a multi-touch technology from a company called FingerWorks that Apple acquired in 2005. Jobs redirected it into a phone; Scott Forstall's software team ported a cut-down Mac OS X to an ARM processor, and Tony Fadell's hardware group, drawing on the iPod supply chain, built the device. The screen was a 3.5-inch capacitive glass panel, chosen over the resistive plastic screens of the time because it could sense several fingers at once and did not need a stylus. Corning supplied chemically strengthened "Gorilla" glass at Jobs's insistence a few months before launch.

Two decisions mattered more than any component. First, the iPhone ran a real web browser, Safari, that rendered pages as a desktop did, so the mobile web stopped being a separate crippled thing. Second, after initially resisting third-party software, Apple released a software development kit in March 2008 and opened the App Store in July 2008 with the iPhone 3G. Within a year there were fifty thousand applications; by 2012 there were seven hundred thousand and developers had earned billions. Google's Android, whose first phone shipped in October 2008, adopted the same touch-first design and reached far larger volumes at lower prices, so that by 2012 the two platforms together had displaced Nokia, BlackBerry and Microsoft.

The consequences are described in the following event; here the point is the artefact itself. The iPhone integrated the achievements of two epochs: the cellular radio, GPS, Wi-Fi and Bluetooth; the lithium-ion battery; the ARM processor; the capacitive touchscreen; the camera sensor; the Unix kernel; the graphical interface born at Xerox PARC. It set the pattern that every subsequent phone followed, a slab of glass with no physical keyboard, and made Apple for a time the most valuable company in the world. The 2007 keynote is probably the most watched product introduction in history.`,
    mechanism: `The original iPhone used a Samsung system-on-chip with a 412 megahertz ARM11 core and a PowerVR graphics unit, 128 megabytes of memory, and 4 to 16 gigabytes of flash storage, running a version of Mac OS X (later iOS) with the Darwin kernel. The projected-capacitive screen contains a grid of transparent electrodes; a finger changes the capacitance at nearby intersections and a controller reports the positions of several touches at once, which the operating system interprets as taps, swipes and pinches, with physics-based scrolling that decelerates and bounces. Radios include GSM and EDGE cellular data, Wi-Fi and Bluetooth; an accelerometer detects orientation, a proximity sensor turns off the screen near the ear, and an ambient light sensor adjusts brightness. Applications are sandboxed processes distributed through a signed App Store. A lithium-ion polymer cell gives a day of use.`,
    prerequisites: ['cell-phone', 'wifi', 'bluetooth', 'ipod', 'lithium-ion-battery', 'gps', 'macintosh', 'xerox-parc-gui', 'unix'],
    consequences: ['smartphone-universal-computer', 'tesla-model-s'],
    figures: [
      { name: 'Steve Jobs', role: 'Apple chief executive' },
      { name: 'Scott Forstall', role: 'Led iPhone software' },
      { name: 'Tony Fadell', role: 'Led iPhone hardware' },
      { name: 'Jony Ive', role: 'Industrial design' },
    ],
    significance: 9,
    significanceJustification: 'The iPhone defined the form of the device through which most of humanity now accesses computing and the internet, and the App Store created a new software economy. Android carried the design to global scale.',
    domains: ['communication', 'computation', 'information'],
    sources: [
      { author: 'Brian Merchant', title: 'The One Device: The Secret History of the iPhone', publisher: 'Little, Brown and Company', year: 2017 },
      { author: 'Walter Isaacson', title: 'Steve Jobs', publisher: 'Simon & Schuster', year: 2011 },
      { author: 'Apple Inc.', title: 'Apple Reinvents the Phone with iPhone (press release, 9 January 2007)', publisher: 'Apple Inc.', year: 2007 },
      { author: 'Fred Vogelstein', title: 'Dogfight: How Apple and Google Went to War and Started a Revolution', publisher: 'Sarah Crichton Books', year: 2013 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'cuda-gpu-computing',
    epochId: 'networked-world',
    date: { year: 2007, month: 6, precision: 'year', display: 'June 2007 (CUDA 1.0; announced November 2006)' },
    location: 'NVIDIA, Santa Clara, California, United States',
    title: 'CUDA makes the graphics processor a general-purpose parallel computer',
    summary: 'NVIDIA released CUDA in 2007, a C-based programming model that let ordinary programmers run general computations on the hundreds of parallel cores of a graphics card; it became the platform on which deep learning was built.',
    explanation: `Graphics processors evolved through the 1990s and early 2000s to draw video game scenes: millions of triangles, each needing the same small calculations for lighting and texture. By 2001 NVIDIA's GeForce 3 had programmable shader units, and researchers noticed that a chip designed to compute the same function on millions of pixels was, in effect, a massively parallel computer. A community calling itself GPGPU (general-purpose computing on graphics processing units) began coaxing matrix multiplications and physics simulations out of graphics cards by disguising data as textures and programs as shaders. It worked but was painful, and results were hard to reproduce across hardware.

Ian Buck, a Stanford graduate student, built a research language called Brook in 2003 to make this easier, and NVIDIA hired him. With the Tesla architecture of the GeForce 8800, announced in November 2006, the company unified the previously separate vertex and pixel processors into an array of identical streaming multiprocessors that could be addressed directly. CUDA (Compute Unified Device Architecture), released in its 1.0 version in June 2007, exposed them through a small set of extensions to C: a programmer wrote a "kernel" function, launched it across thousands of threads, and the hardware scheduled the threads across the chip. NVIDIA committed to supporting every future GPU with the same model and shipped the tools free with its consumer cards, so any graduate student with a gaming PC had a supercomputer of a kind.

Adoption came first in scientific computing: molecular dynamics, seismic processing, computational finance and medical imaging saw speed-ups of ten to a hundred times. NVIDIA built a professional line, also named Tesla, without display outputs. The open standard OpenCL, released in 2009, offered a similar model across vendors but never matched CUDA's libraries and tools.

The decisive application was not foreseen. Neural networks are dominated by matrix multiplications, and in 2009 Rajat Raina, Anand Madhavan and Andrew Ng at Stanford showed that GPUs could train them seventy times faster. Alex Krizhevsky wrote his own CUDA convolution code and trained AlexNet on two consumer GeForce GTX 580 cards in 2012. From that point every advance in deep learning ran on NVIDIA hardware and CUDA software, which is why a company that made video-game chips became the most valuable in the world in the following epoch, and why the data centres built for AI are measured in numbers of GPUs.`,
    mechanism: `A CUDA program runs on a host CPU and launches kernels on the GPU. Each kernel is executed by a grid of thread blocks; threads within a block run on one streaming multiprocessor, share a small fast on-chip memory and can synchronise, while blocks are scheduled independently across the chip. The hardware executes threads in groups of 32 called warps, issuing one instruction for all 32 at once (single instruction, multiple threads), so performance depends on threads following the same control path and reading adjacent memory addresses so that accesses coalesce. Memory is hierarchical: registers, shared memory, and a large but slow off-chip memory with hundreds of gigabytes per second of bandwidth. The compiler translates C kernels into an intermediate representation, PTX, which the driver compiles for the specific chip. Libraries for linear algebra (cuBLAS), fast Fourier transforms and, from 2014, neural networks (cuDNN) hide most of this from application programmers.`,
    prerequisites: ['integrated-circuit', 'intel-4004', 'linux'],
    consequences: ['alexnet', 'gpt-3', 'hyperscale-ai-datacenters', 'compute-export-controls'],
    figures: [
      { name: 'Ian Buck', role: 'Creator of Brook and lead architect of CUDA' },
      { name: 'John Nickolls', role: 'NVIDIA architect of the unified GPU computing architecture' },
      { name: 'Jensen Huang', role: 'NVIDIA chief executive; committed the company to GPU computing' },
    ],
    significance: 8,
    significanceJustification: 'CUDA turned commodity graphics cards into accessible parallel computers and became the sole practical platform for training deep neural networks, making GPU supply a strategic concern of states.',
    domains: ['computation'],
    sources: [
      { author: 'John Nickolls, Ian Buck, Michael Garland and Kevin Skadron', title: 'Scalable Parallel Programming with CUDA', publisher: 'ACM Queue', year: 2008, url: 'https://doi.org/10.1145/1365490.1365500' },
      { author: 'Erik Lindholm, John Nickolls, Stuart Oberman and John Montrym', title: 'NVIDIA Tesla: A Unified Graphics and Computing Architecture', publisher: 'IEEE Micro', year: 2008, url: 'https://doi.org/10.1109/MM.2008.31' },
      { author: 'Rajat Raina, Anand Madhavan and Andrew Y. Ng', title: 'Large-scale Deep Unsupervised Learning using Graphics Processors', publisher: 'International Conference on Machine Learning', year: 2009, url: 'https://doi.org/10.1145/1553374.1553486' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'bitcoin',
    epochId: 'networked-world',
    date: { year: 2008, month: 10, day: 31, precision: 'exact', display: '2008-10-31 (white paper; genesis block 3 January 2009)' },
    location: 'Published pseudonymously on the cryptography mailing list; location unknown',
    title: 'Bitcoin: money without a central issuer',
    summary: 'On 31 October 2008 the pseudonymous Satoshi Nakamoto published a nine-page paper describing a peer-to-peer electronic cash system secured by proof of work, and mined its first block on 3 January 2009; it was the first digital money that needed no trusted intermediary.',
    explanation: `Digital cash had been attempted for twenty years. David Chaum's DigiCash in the 1990s used blind signatures but relied on a central bank of issue; Wei Dai's b-money and Nick Szabo's bit gold proposals of 1998 imagined decentralised money but never solved how a network of strangers could agree on who owned what without someone being in charge. Adam Back's Hashcash of 1997 used computational "proof of work" to price email and deter spam. On 31 October 2008, in the weeks after the collapse of Lehman Brothers, a person or group using the name Satoshi Nakamoto posted to a cryptography mailing list a paper, "Bitcoin: A Peer-to-Peer Electronic Cash System", that combined these pieces.

The insight was to make the ledger itself the object of agreement. Transactions are broadcast to all nodes and gathered into blocks; each block includes the hash of the previous one, forming a chain, and a node may add a block only by finding a hash below a target, which takes enormous trial and error. Nodes accept the longest valid chain. To rewrite history an attacker would have to redo that work faster than the rest of the network combined, so a ledger with no owner became tamper-resistant. Miners are rewarded with newly created coins, giving strangers a reason to spend electricity securing the system, and the supply is capped at twenty-one million.

Nakamoto released the software on 9 January 2009, having mined the "genesis block" on 3 January with a headline from that day's Times about bank bailouts embedded in it. Hal Finney received the first transaction. Nakamoto stopped communicating in 2011 and has never been identified. Bitcoin's first documented purchase, two pizzas for ten thousand bitcoins in May 2010, and its use on the Silk Road drug market from 2011 brought attention; by 2012 its price had reached about thirteen dollars and mining had moved from CPUs to GPUs to purpose-built ASIC chips.

Whether Bitcoin is money, an asset, or an elaborate speculative object is disputed, and its energy consumption is a serious criticism. Its technical significance is not in doubt: it demonstrated Byzantine-fault-tolerant consensus among anonymous parties on an open network, an idea later generalised by Ethereum into programmable contracts. Its industrial side-effect was unexpected. GPU and then ASIC mining trained a generation of firms in building and powering warehouses of dense computing hardware, and several of them, CoreWeave most prominently, converted directly into providers of AI computing after 2019.`,
    mechanism: `Ownership is represented by unspent transaction outputs locked to a public key; spending one requires a digital signature (ECDSA over the secp256k1 curve) from the matching private key. A transaction consumes existing outputs and creates new ones, and is broadcast peer to peer. Miners collect transactions into a candidate block, add a reference to the previous block's hash, and repeatedly change a nonce until the SHA-256 hash of the block header falls below a difficulty target; the network adjusts the target every 2,016 blocks so that blocks arrive about every ten minutes. Finding a valid hash entitles the miner to a block reward plus fees. Every node verifies every block and transaction independently and follows the chain with the most accumulated work. Merkle trees let light clients verify a transaction's inclusion without the whole chain. There is no login, account or administrator; the rules are enforced by every participant's software.`,
    prerequisites: ['tcp-ip', 'world-wide-web', 'linux', 'git-version-control'],
    consequences: ['hyperscale-ai-datacenters'],
    figures: [
      { name: 'Satoshi Nakamoto', role: 'Pseudonymous author of the white paper and original software' },
      { name: 'Hal Finney', role: 'Early developer; recipient of the first transaction' },
      { name: 'Adam Back', role: 'Inventor of Hashcash proof of work, 1997' },
    ],
    significance: 6,
    significanceJustification: 'Bitcoin solved decentralised consensus among strangers and created a trillion-dollar asset class, but its use as money remains limited and its broader technological consequences are still unfolding. The industrial lineage from mining to AI data centres is real but indirect.',
    domains: ['information', 'computation'],
    sources: [
      { author: 'Satoshi Nakamoto', title: 'Bitcoin: A Peer-to-Peer Electronic Cash System', publisher: 'bitcoin.org', year: 2008, url: 'https://bitcoin.org/bitcoin.pdf' },
      { author: 'Arvind Narayanan, Joseph Bonneau, Edward Felten, Andrew Miller and Steven Goldfeder', title: 'Bitcoin and Cryptocurrency Technologies: A Comprehensive Introduction', publisher: 'Princeton University Press', year: 2016 },
      { author: 'Stuart Haber and W. Scott Stornetta', title: 'How to time-stamp a digital document', publisher: 'Journal of Cryptology', year: 1991, url: 'https://doi.org/10.1007/BF00196791' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'kepler-exoplanets',
    epochId: 'networked-world',
    date: { year: 2009, month: 3, day: 7, precision: 'exact', display: '2009-03-07 (launch, UTC)' },
    location: 'Cape Canaveral, Florida, United States; NASA Ames Research Center, California',
    title: 'The Kepler space telescope shows that planets are everywhere',
    summary: 'Launched on 7 March 2009 (UTC), NASA\'s Kepler telescope stared at 150,000 stars for four years and found thousands of transiting planets, establishing that most stars have planets and that small rocky ones are common.',
    explanation: `The first planet orbiting a Sun-like star, 51 Pegasi b, was found in 1995 by Michel Mayor and Didier Queloz from the wobble it induced in its star's spectrum. By 2009 about 350 exoplanets were known, almost all giants close to their stars, because those were the only kind the methods could detect. Whether small planets like Earth were common or rare, the question that mattered for life elsewhere, was open.

William Borucki at NASA's Ames Research Center had argued since the 1980s that a space telescope could answer it by the transit method: when a planet crosses its star, the star dims by a tiny fraction (about one part in ten thousand for an Earth crossing the Sun). Detecting that required a photometer stable to parts per million, watching many stars at once, for years, without interruption from day or weather. NASA rejected the proposal four times before selecting it in 2001. Kepler launched on a Delta II from Cape Canaveral on 7 March 2009 (late on 6 March local time) into an Earth-trailing orbit around the Sun, and from May 2009 it monitored about 150,000 stars in a patch of sky between Cygnus and Lyra every thirty minutes.

Results came quickly. The first five planets were announced in January 2010; a catalogue of 1,235 candidates in February 2011; and by the end of the primary mission the count exceeded four thousand candidates, most later confirmed. Kepler found planets in orbital resonances, circumbinary planets orbiting two stars, and Kepler-22b and Kepler-186f, the first small planets in habitable zones. Its statistical result was the important one: analyses of the survey showed that most stars host planets, that planets between Earth and Neptune in size, absent from our solar system, are the most common kind, and that a substantial fraction of Sun-like stars, plausibly a fifth or more, have a roughly Earth-sized planet at a temperate distance.

The telescope lost two of its four reaction wheels by May 2013, ending the primary mission, but engineers devised the K2 mission using sunlight pressure for balance, which ran until the fuel ran out in 2018. Kepler was succeeded by TESS in 2018, and its targets were passed to the James Webb Space Telescope for atmospheric study. Its legacy is a change in the default assumption of astronomy and of the wider culture: planets, including small temperate ones, are the rule rather than the exception.`,
    mechanism: `Kepler was a 0.95-metre Schmidt telescope with a 105-square-degree field of view, the widest of any space telescope, feeding a focal plane of 42 charge-coupled devices totalling 95 megapixels. Rather than take pictures, it summed the light of each preselected target star every 29.4 minutes (and every minute for some) and transmitted only those brightness values, since the data rate could not carry full images. Precision came from keeping the telescope in a thermally stable heliocentric orbit, pointing to within milliarcseconds using reaction wheels, and slightly defocusing stars so that pixel-to-pixel sensitivity differences averaged out. A transit appears as a periodic, flat-bottomed dip; its depth gives the planet's radius relative to the star, its period the orbit, and its duration constrains the geometry. Software searched every light curve for repeated dips, and ground telescopes and statistical validation eliminated false positives such as eclipsing binaries.`,
    prerequisites: ['ccd-sensor', 'hubble-telescope', 'kepler-laws', 'galileo-telescope'],
    consequences: ['jwst'],
    figures: [
      { name: 'William Borucki', role: 'Principal investigator; proposed the mission' },
      { name: 'David Koch', role: 'Deputy principal investigator' },
      { name: 'Natalie Batalha', role: 'Mission scientist; led planet candidate analysis' },
    ],
    significance: 7,
    significanceJustification: 'Kepler settled that planets, including small ones in habitable zones, are common across the galaxy, transforming exoplanet science from anecdote to statistics. Its practical consequences are scientific rather than economic.',
    domains: ['space', 'information'],
    sources: [
      { author: 'William J. Borucki and others', title: 'Kepler Planet-Detection Mission: Introduction and First Results', publisher: 'Science', year: 2010, url: 'https://doi.org/10.1126/science.1185402' },
      { author: 'William J. Borucki', title: 'KEPLER Mission: development and overview', publisher: 'Reports on Progress in Physics', year: 2016, url: 'https://doi.org/10.1088/0034-4885/79/3/036901' },
      { author: 'Susan E. Thompson and others', title: 'Planetary Candidates Observed by Kepler. VIII. A Fully Automated Catalog with Measured Completeness and Reliability Based on Data Release 25', publisher: 'The Astrophysical Journal Supplement Series', year: 2018, url: 'https://doi.org/10.3847/1538-4365/aab4f9' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'imagenet-dataset',
    epochId: 'networked-world',
    date: { year: 2009, month: 6, precision: 'year', display: 'June 2009 (CVPR paper)' },
    location: 'Princeton University, New Jersey, and Stanford University, California, United States',
    title: 'ImageNet: fourteen million labelled images and a public benchmark',
    summary: 'Fei-Fei Li and colleagues presented ImageNet in June 2009, a dataset of millions of web images labelled by crowd workers into thousands of categories; its annual challenge from 2010 became the proving ground on which deep learning won.',
    explanation: `In 2006 Fei-Fei Li, then a new professor at the University of Illinois and from 2007 at Princeton, concluded that computer vision was stuck not for lack of algorithms but for lack of data. The standard datasets of the time held a few thousand images in a few dozen categories, small enough that any flexible model memorised them. Li's idea was to map the visual world at the scale of language: to attach images to a large fraction of the nouns in WordNet, the lexical database built at Princeton by George Miller, with hundreds of examples per noun.

The obstacle was labour. Downloading candidate images from search engines for each noun was easy; verifying that each image actually showed the object was not, and at the initial rate of Princeton undergraduates it would take decades. In 2007 a student suggested Amazon Mechanical Turk, the crowd-labour marketplace Amazon had opened in 2005. ImageNet became, for a time, one of its largest users, with about fifty thousand workers in 167 countries voting on images. Jia Deng, the lead graduate student, designed the quality-control scheme in which several workers had to agree before an image was accepted. The paper describing the dataset, then 3.2 million images in 5,247 categories, was presented at the Conference on Computer Vision and Pattern Recognition in June 2009, as a poster in a corner of the hall. By 2010 it held more than fourteen million images in over twenty thousand categories.

The dataset alone was not what changed the field; the competition was. From 2010 the ImageNet Large Scale Visual Recognition Challenge asked entrants to classify a subset of 1.2 million training images into a thousand categories, scored on a hidden test set. Winning entries in 2010 and 2011 used hand-designed features and support vector machines, with top-5 error rates of 28 and 26 percent. In 2012 a deep convolutional network from Toronto scored 15.3 percent, and by 2015 networks had passed the estimated human error of about 5 percent. The challenge ran until 2017.

ImageNet's significance is that it changed what counted as progress in machine learning. Before it, papers reported results on small datasets with idiosyncratic evaluation; after it, a single public leaderboard, large enough to reward capacity and general enough to matter, let the community see a discontinuity when one occurred. It also established that data of sufficient scale, collected from the web and labelled by crowds, was itself a research contribution, a pattern later repeated for text, speech and protein structures. Critics have noted problems in its person categories and in the labour conditions of its labelling, both of which prompted later reforms.`,
    mechanism: `For each of thousands of WordNet synsets (sets of synonymous nouns, such as "German shepherd"), the team queried several image search engines with the term and its translations to collect candidate URLs, then downloaded the images. Candidates were shown to Mechanical Turk workers in batches with a definition and example images, and workers indicated which images contained the concept. Because workers vary in reliability, each image was judged by multiple workers and accepted only when a category-specific confidence threshold, calibrated on a validated sample, was reached; harder categories required more votes. The result is a hierarchy following WordNet, so that images of dog breeds are also images of dogs and mammals. For the challenge, a thousand categories were selected, training images were released with labels, and test predictions were submitted to a server for scoring, with top-1 and top-5 error as metrics.`,
    prerequisites: ['world-wide-web', 'google-search', 'e-commerce-amazon', 'ccd-sensor'],
    consequences: ['alexnet'],
    figures: [
      { name: 'Fei-Fei Li', role: 'Principal investigator; conceived the dataset' },
      { name: 'Jia Deng', role: 'Lead graduate student and first author' },
      { name: 'Kai Li', role: 'Princeton collaborator on infrastructure' },
    ],
    significance: 7,
    significanceJustification: 'ImageNet created the benchmark that made the deep-learning breakthrough visible and established large crowd-labelled web datasets as the foundation of modern machine learning. Its effect was catalytic rather than direct.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li and Li Fei-Fei', title: 'ImageNet: A large-scale hierarchical image database', publisher: 'IEEE Conference on Computer Vision and Pattern Recognition', year: 2009, url: 'https://doi.org/10.1109/CVPR.2009.5206848' },
      { author: 'Olga Russakovsky and others', title: 'ImageNet Large Scale Visual Recognition Challenge', publisher: 'International Journal of Computer Vision', year: 2015, url: 'https://doi.org/10.1007/s11263-015-0816-y' },
      { author: 'Fei-Fei Li', title: 'The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI', publisher: 'Flatiron Books', year: 2023 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: '3d-printing',
    epochId: 'networked-world',
    date: { year: 2009, precision: 'year', display: '2009 (key patents expire; RepRap 2005 to 2008)' },
    location: 'University of Bath, United Kingdom; Brooklyn, New York, United States',
    title: 'Desktop 3D printing: expiring patents and the RepRap project',
    summary: 'Additive manufacturing was invented in the 1980s, but the expiry of the core fused-deposition patent in 2009, together with the open-source RepRap printer developed at Bath from 2005, cut the price of a 3D printer from tens of thousands of dollars to under a thousand.',
    explanation: `Three-dimensional printing builds objects layer by layer from a digital model rather than cutting them from a block or forcing them into a mould. Chuck Hull patented stereolithography, which hardens liquid resin with an ultraviolet laser, in 1986 and founded 3D Systems. Carl Deckard at the University of Texas developed selective laser sintering of powders in the same years, and Scott Crump patented fused deposition modelling, which extrudes a thread of molten plastic, in 1989 and founded Stratasys. Through the 1990s and 2000s these companies sold "rapid prototyping" machines to engineering firms at prices from thirty thousand to several hundred thousand dollars, protected by patents and serviced like industrial equipment.

Two things happened in the late 2000s. In 2005 Adrian Bowyer, a mechanical engineering lecturer at the University of Bath, launched RepRap (Replicating Rapid Prototyper), a project to design a fused-deposition printer that could print most of its own parts, with all designs released under the GNU General Public License. The first RepRap, Darwin, produced a copy of itself in 2008, and the Mendel design of 2009 became the ancestor of most hobbyist printers. Because the designs were open and built from hardware-store rods, stepper motors and Arduino-based controllers, hundreds of people improved them, and the community shared printable designs on Thingiverse, launched in 2008.

The second event was legal. Stratasys's fundamental fused-deposition patent expired in 2009, removing the threat of infringement suits against commercial derivatives. MakerBot, founded in Brooklyn in January 2009 by Bre Pettis, Adam Mayer and Zach Smith, began selling RepRap-derived kits for under a thousand dollars; Ultimaker in the Netherlands and Prusa Research in Prague followed. When the key selective laser sintering patents expired in 2014 the same pattern repeated for powder printing. Sales of desktop printers grew from a few hundred in 2008 to tens of thousands a year by 2012, and the "maker movement" of the period, with its fairs and hackerspaces, adopted the printer as its emblem.

The significance should be stated carefully. Predictions around 2012 that every home would have a printer, and that manufacturing would return to the kitchen table, did not come true. What did happen was quieter and larger. Cheap printers put physical prototyping in the hands of students, surgeons, architects and hobbyists; industrial additive manufacturing, freed from the expectation of prototyping only, moved into production of parts too complex to machine, including titanium aerospace brackets, dental aligners, hearing aids and rocket engine components at SpaceX and Relativity. The episode is also a clear natural experiment in how patent expiry and open-source hardware together can collapse the price of a technology by two orders of magnitude within a few years.`,
    mechanism: `A digital model, usually a mesh of triangles in the STL format, is "sliced" by software into horizontal layers of a fixed thickness, typically 0.1 to 0.3 millimetres, and each layer is converted into a tool path. In fused deposition, a stepper-driven carriage moves an extruder head in two axes while a heated nozzle, fed by a gear pushing a filament of thermoplastic (PLA or ABS), lays down a thread of molten plastic that fuses to the layer below; the bed or the head then steps up one layer. Overhangs need temporary support structures. Stereolithography instead scans an ultraviolet laser or projects an image across a vat of photopolymer resin to cure each layer. Selective laser sintering spreads a thin layer of powder and fuses the cross-section with a laser, with the unfused powder supporting the part. In every case, a microcontroller interprets G-code commands and coordinates the motors, heaters and sensors.`,
    prerequisites: ['laser', 'integrated-circuit', 'world-wide-web', 'git-version-control'],
    consequences: ['starship-flights', 'humanoid-robotics-revival'],
    figures: [
      { name: 'Adrian Bowyer', role: 'Founder of the RepRap project' },
      { name: 'Chuck Hull', role: 'Inventor of stereolithography, 1986' },
      { name: 'Scott Crump', role: 'Inventor of fused deposition modelling; Stratasys founder' },
      { name: 'Bre Pettis', role: 'MakerBot co-founder' },
    ],
    significance: 5,
    significanceJustification: 'Desktop 3D printing democratised prototyping and helped shift industrial additive manufacturing into production, but its consumer impact fell far short of the claims made around 2012.',
    domains: ['manufacturing', 'materials'],
    sources: [
      { author: 'Rhys Jones, Patrick Haufe, Edward Sells, Pejman Iravani, Vik Olliver, Chris Palmer and Adrian Bowyer', title: 'RepRap: the replicating rapid prototyper', publisher: 'Robotica', year: 2011, url: 'https://doi.org/10.1017/S026357471000069X' },
      { author: 'Charles W. Hull', title: 'Apparatus for production of three-dimensional objects by stereolithography, US Patent 4,575,330', publisher: 'United States Patent and Trademark Office', year: 1986 },
      { author: 'Chris Anderson', title: 'Makers: The New Industrial Revolution', publisher: 'Crown Business', year: 2012 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'falcon-9-dragon',
    epochId: 'networked-world',
    date: { year: 2010, month: 6, day: 4, precision: 'exact', display: '2010-06-04 (first Falcon 9 flight; Dragon reached the ISS 25 May 2012)' },
    location: 'Cape Canaveral, Florida, United States',
    title: 'Falcon 9 and Dragon: a private company reaches orbit and the space station',
    summary: 'SpaceX flew the Falcon 9 rocket for the first time on 4 June 2010 and on 25 May 2012 its Dragon capsule became the first commercial spacecraft to berth with the International Space Station, proving that a private firm could build and operate orbital transport.',
    explanation: `SpaceX was founded by Elon Musk in 2002 with the stated aim of reducing the cost of reaching space enough to make Mars settlement possible. Its first rocket, the small Falcon 1, failed three times before reaching orbit in September 2008, by which point the company was nearly bankrupt. What saved it was a NASA programme. After the 2003 Columbia disaster and the decision to retire the Space Shuttle, NASA created Commercial Orbital Transportation Services in 2006 to pay private companies fixed-price milestones for developing cargo delivery to the space station, rather than owning the vehicles. SpaceX won an award of 278 million dollars, and in December 2008 a 1.6 billion dollar contract for twelve resupply flights.

The Falcon 9, named for its nine Merlin engines, first flew on 4 June 2010 from Cape Canaveral and reached orbit on its first attempt. The Merlin engine, designed in-house by a team led by Tom Mueller, burned kerosene and liquid oxygen and used a pintle injector derived from the Apollo lunar module descent engine; nine of them gave the vehicle engine-out capability. On 8 December 2010 the second flight carried a Dragon capsule that orbited twice and splashed down in the Pacific, the first recovery of a spacecraft from orbit by a private company. On 22 May 2012 the third flight launched Dragon on a demonstration mission that on 25 May was captured by the station's robotic arm and berthed, delivering cargo and returning with experiments. Regular cargo flights began that October.

The company's practices differed from those of established contractors. It built about eighty percent of the vehicle in one factory in Hawthorne, California, including engines, tanks and avionics, and iterated designs quickly, treating failures as data. Its prices, about sixty million dollars for a Falcon 9 launch in 2012 against well over a hundred million for comparable vehicles, forced competitors to respond.

The significance is that the 2010 to 2012 flights established the vehicle and the company that, later in the decade, would land and reuse first stages, fly astronauts, and launch the majority of the world's mass to orbit. They also validated NASA's fixed-price commercial model, which was extended to crew transport in 2014 and to lunar landers in 2021. The reusable Falcon 9 and the far larger Starship belong to the following epoch, but both were possible because a private company had, by 2012, demonstrated orbital launch and spacecraft recovery on its own account.`,
    mechanism: `The Falcon 9 version 1.0 was a two-stage rocket about 55 metres tall. Nine Merlin 1C engines on the first stage burned rocket-grade kerosene and liquid oxygen, fed by turbopumps driven by a gas generator, producing about 4,900 kilonewtons of thrust at lift-off; a single vacuum-optimised Merlin powered the second stage. Both stages used aluminium-lithium tanks with a common bulkhead and were built by friction-stir welding. Flight computers, triply redundant and voting, steered by gimballing the engines. Dragon consisted of a pressurised capsule with a phenolic-impregnated carbon ablator heat shield developed with NASA and an unpressurised trunk; it manoeuvred with Draco thrusters, navigated to the station using GPS and a laser rangefinder, and held position within reach of the station's Canadarm2, which grappled and berthed it. Return was by parachute splashdown in the Pacific.`,
    prerequisites: ['v2-rocket', 'apollo-11', 'space-shuttle', 'gps'],
    consequences: ['falcon-9-booster-landing', 'starship-flights'],
    figures: [
      { name: 'Elon Musk', role: 'Founder and chief engineer' },
      { name: 'Tom Mueller', role: 'Propulsion chief; designed the Merlin engine' },
      { name: 'Gwynne Shotwell', role: 'President and chief operating officer' },
    ],
    significance: 8,
    significanceJustification: 'Falcon 9 and Dragon proved that a private company could operate orbital transport, validated NASA\'s commercial contracting model, and created the vehicle whose reuse later transformed launch economics.',
    domains: ['space', 'transportation'],
    sources: [
      { author: 'NASA', title: 'Commercial Orbital Transportation Services: A New Era in Spaceflight (NASA/SP-2014-617)', publisher: 'National Aeronautics and Space Administration', year: 2014 },
      { author: 'Eric Berger', title: 'Liftoff: Elon Musk and the Desperate Early Days That Launched SpaceX', publisher: 'William Morrow', year: 2021 },
      { author: 'Eric Berger', title: 'Reentry: SpaceX, Elon Musk, and the Reusable Rockets That Launched a Second Space Age', publisher: 'BenBella Books', year: 2024 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'smartphone-universal-computer',
    epochId: 'networked-world',
    date: { year: 2011, precision: 'year', display: '2011 (smartphone shipments pass PCs)' },
    location: 'Global',
    title: 'The smartphone becomes the universal computer',
    summary: 'In 2011 worldwide smartphone shipments passed those of personal computers, and by 2012 the touchscreen phone, with its app store, cloud services, camera, GPS and sensors, had become the primary computer for most of the people who owned one.',
    explanation: `The iPhone of 2007 was a product; the smartphone of 2011 was a condition. Between those dates Google's Android, released as open-source software in 2008, allowed Samsung, HTC, Huawei and dozens of Chinese manufacturers to build touchscreen phones at every price, and the two platforms together destroyed the incumbents. Nokia, which had sold forty percent of the world's phones in 2007, abandoned its own software in 2011; BlackBerry collapsed; Microsoft's mobile share fell to a rounding error. In 2011 the market research firm Canalys reported that 488 million smartphones had shipped that year against 415 million PCs, the first time the phone had passed the computer. Two years later a billion smartphones shipped in a single year.

Several things had to combine. Third-generation and then LTE cellular networks made mobile data fast enough for video. Cloud services (email, maps, photos, music) meant the phone did not need to hold anything, only to reach it. App stores provided a distribution channel with no shelves and no publisher, so that a two-person company could reach a hundred million users, as Instagram did between 2010 and 2012 before Facebook bought it for a billion dollars. The camera improved until the phone became, by 2012, the most used camera in the world. GPS, accelerometers, compasses and later fingerprint readers made the phone a sensor package that knew where it was and how it was moving. Payments, ride hailing, and messaging platforms such as WhatsApp (2009) and WeChat (2011) then built on those capabilities.

The consequences were global in a way the PC had never been. In sub-Saharan Africa, India and Southeast Asia the smartphone was the first computer and the first internet connection most people had, and mobile money systems such as M-Pesa reached people banks never had. For the industry, the volumes were transformative: the supply chain that produced hundreds of millions of cameras, radios, batteries, displays and accelerometers a year drove their prices down by orders of magnitude, making them available for drones, cars, wearables and robots, a pattern Chris Anderson called "the peace dividend of the smartphone wars".

For the person holding one, the phone became the site of attention. Surveys by 2012 found owners checking it dozens of times a day. Sleep, conversation, navigation, news, photography, dating and shopping all moved into it. In the following epoch the chat interfaces to large language models reached hundreds of millions of people within months precisely because the universal computer was already in every pocket.`,
    mechanism: `A 2011 smartphone integrated on a single system-on-chip an ARM application processor with two or four cores at over a gigahertz, a graphics unit, an image signal processor and a cellular baseband handling 3G and LTE radio protocols, fabricated on 28 to 45 nanometre processes. Around it sat one to two gigabytes of memory, tens of gigabytes of flash storage, radios for Wi-Fi, Bluetooth and GPS, a capacitive touchscreen of 4 to 5 inches, cameras of 8 megapixels, and a suite of microelectromechanical sensors. The operating system (iOS or Linux-based Android) managed sandboxed applications, power states that kept the radios mostly asleep, and push notifications relayed from cloud servers. App stores distributed signed packages and handled payment. Location came from combining GPS with Wi-Fi access point and cell tower databases, which fixed position within seconds indoors and out.`,
    prerequisites: ['iphone', 'wifi', 'bluetooth', 'gps', 'cell-phone', 'lithium-ion-battery', 'aws-cloud-computing', 'social-networks', 'youtube', 'google-search'],
    consequences: ['chatgpt', 'humanoid-robotics-revival'],
    figures: [
      { name: 'Andy Rubin', role: 'Founder of Android' },
      { name: 'Steve Jobs', role: 'Apple; established the touchscreen form' },
      { name: 'Lee Kun-hee', role: 'Samsung chairman during its rise to the largest maker' },
    ],
    significance: 9,
    significanceJustification: 'The smartphone became the first computer and internet connection for most of humanity, reorganised daily life around a pocket device, and created the sensor supply chain later reused across robotics and vehicles.',
    domains: ['communication', 'computation', 'information'],
    sources: [
      { author: 'Canalys', title: 'Smart phones overtake client PCs in 2011 (press release, 3 February 2012)', publisher: 'Canalys', year: 2012 },
      { author: 'Fred Vogelstein', title: 'Dogfight: How Apple and Google Went to War and Started a Revolution', publisher: 'Sarah Crichton Books', year: 2013 },
      { author: 'Aaron Smith', title: 'Smartphone Ownership 2013', publisher: 'Pew Research Center', year: 2013 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'tesla-model-s',
    epochId: 'networked-world',
    date: { year: 2012, month: 6, day: 22, precision: 'exact', display: '2012-06-22' },
    location: 'Fremont, California, United States',
    title: 'The Tesla Model S makes the electric car desirable',
    summary: 'Tesla delivered the first Model S sedans on 22 June 2012; with a 265-mile range, a large touchscreen and over-the-air software updates, it won Motor Trend Car of the Year and convinced the industry that battery-electric cars could compete on merit.',
    explanation: `Electric cars are older than petrol ones, and there had been serious attempts to revive them, most famously General Motors' EV1 of 1996, withdrawn and crushed in 2003. Their problem was the battery: lead-acid and nickel-metal hydride packs gave ranges under a hundred miles. Tesla Motors, founded in 2003 by Martin Eberhard and Marc Tarpenning and funded and later led by Elon Musk, bet on the lithium-ion cylindrical cells mass-produced for laptops. Its Roadster of 2008, built on a Lotus chassis with 6,831 such cells, proved the idea at a hundred thousand dollars but was a low-volume conversion.

The Model S was the first car Tesla designed from scratch. It was announced in 2009, built in the former NUMMI plant in Fremont, California, that Tesla bought from Toyota in 2010 for a fraction of its cost, and the first customer cars were handed over at a ceremony there on 22 June 2012. The car placed a flat battery pack of about 7,000 cells under the floor between the axles, which gave a low centre of gravity, a flat cabin floor and luggage space at both ends. The largest 85 kilowatt-hour pack gave an official range of 265 miles, more than double any other electric car on sale, and the performance version reached sixty miles an hour in about four seconds. A 17-inch touchscreen replaced almost all physical controls, and the car's software was updated over the cellular network, a practice from phones that no car maker had adopted.

Motor Trend named it Car of the Year for 2013, the first time in the award's history that the winner had no internal combustion engine, and Consumer Reports gave it the highest score it had ever awarded. Tesla built its Supercharger network from September 2012 to address range anxiety on long trips. Sales of about 2,650 in 2012 grew to more than 50,000 a year by 2015.

The significance lies in what the car demonstrated to others. Before 2012 electric vehicles were treated by incumbents as compliance products, small and slow, built to satisfy California regulations. The Model S showed that an electric car could be the best car in its class, and that a new entrant could build it. Every large manufacturer subsequently announced electric platforms; Chinese firms including BYD scaled fastest. Tesla's battery demand led to the Gigafactory partnership with Panasonic in 2014, and its Autopilot software, introduced in 2014 and 2015, made the company an artificial intelligence developer, the lineage that later produced its Optimus humanoid robot. The Model S is the point at which the electrification of road transport stopped being hypothetical.`,
    mechanism: `The Model S drivetrain was a three-phase alternating-current induction motor, in the tradition of Nikola Tesla's 1888 design, mounted between the rear wheels and driving them through a single-speed reduction gear; there was no gearbox because an electric motor delivers full torque from rest. An inverter converted the pack's direct current, at about 400 volts, into variable-frequency alternating current to control speed, and ran in reverse under braking to recharge the pack (regenerative braking). The pack contained thousands of 18650-format lithium-ion cells with nickel-cobalt-aluminium cathodes, grouped into sixteen modules, each cell fused individually and cooled by a glycol loop running between them, with a battery management system balancing charge and monitoring temperature. Charging accepted alternating current through an onboard charger or direct current at up to 120 kilowatts from a Supercharger. Software controlled everything from the torque map to the door handles.`,
    prerequisites: ['lithium-ion-battery', 'tesla-ac-system', 'benz-daimler-automobile', 'electric-grid', 'iphone'],
    consequences: ['solid-state-battery-progress', 'humanoid-robotics-revival'],
    figures: [
      { name: 'Elon Musk', role: 'Chief executive and product architect' },
      { name: 'JB Straubel', role: 'Chief technology officer; battery and drivetrain' },
      { name: 'Franz von Holzhausen', role: 'Chief designer' },
      { name: 'Martin Eberhard and Marc Tarpenning', role: 'Tesla founders, 2003' },
    ],
    significance: 7,
    significanceJustification: 'The Model S changed the auto industry\'s view of electric vehicles from compliance product to competitive necessity, triggering the global shift to electrification. Its technology was integrative rather than novel.',
    domains: ['transportation', 'energy'],
    sources: [
      { author: 'Ashlee Vance', title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future', publisher: 'Ecco', year: 2015 },
      { author: 'Angus MacKenzie', title: '2013 Motor Trend Car of the Year: Tesla Model S', publisher: 'Motor Trend', year: 2012 },
      { author: 'Tesla Motors, Inc.', title: 'Annual Report on Form 10-K for the fiscal year ended December 31, 2012', publisher: 'United States Securities and Exchange Commission', year: 2013 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'crispr-discovery',
    epochId: 'networked-world',
    date: { year: 2012, month: 6, day: 28, precision: 'exact', display: '2012-06-28 (Jinek et al., Science, online)' },
    location: 'University of California, Berkeley, United States; Umea University, Sweden; University of Vienna, Austria',
    title: 'CRISPR-Cas9 is shown to be a programmable DNA-cutting tool',
    summary: 'On 28 June 2012 Jennifer Doudna, Emmanuelle Charpentier and colleagues published in Science that the bacterial enzyme Cas9 could be directed by a designed guide RNA to cut any chosen DNA sequence, turning an immune system into a genome-editing tool.',
    explanation: `The story begins with an oddity. In 1987 Japanese researchers noticed repeated DNA sequences in E. coli, and in the 1990s Francisco Mojica in Alicante found similar clustered repeats in archaea from salt marshes. Mojica named them CRISPR (clustered regularly interspaced short palindromic repeats) and in 2005 reported that the "spacer" sequences between the repeats matched viruses, proposing that they were a record of past infections, an immune memory. In 2007 Rodolphe Barrangou and Philippe Horvath at the dairy company Danisco proved it experimentally: Streptococcus thermophilus strains that survived a phage attack acquired new spacers from that phage, and the spacers, with associated Cas proteins, conferred resistance. The system was of practical interest for yoghurt cultures. Subsequent work by Sylvain Moineau, John van der Oost, Luciano Marraffini and Erik Sontheimer showed that the system cut DNA and that the target was defined by the spacer.

Emmanuelle Charpentier, studying Streptococcus pyogenes in Vienna and Umea, discovered in 2011 a second small RNA, tracrRNA, required for the system to work. She approached Jennifer Doudna, a structural biologist at Berkeley, at a conference in Puerto Rico that year. Working with Martin Jinek and Krzysztof Chylinski, they showed in vitro that the Cas9 protein, loaded with the CRISPR RNA and tracrRNA, cut double-stranded DNA at the site matching the RNA, and, crucially, that the two RNAs could be fused into a single synthetic "guide RNA" that could be designed to match any sequence. The paper was published online in Science on 28 June 2012. Virginijus Siksnys in Vilnius reached similar conclusions independently and published in September.

The step from test tube to living cells followed within months. In January 2013 Feng Zhang at the Broad Institute and George Church at Harvard separately reported Cas9 editing in human and mouse cells, and Doudna's own group did so weeks later. Within a year laboratories worldwide were editing plants, mice, fish and human cell lines, since the method required only ordering a short RNA rather than engineering a new protein, as the earlier zinc-finger and TALEN tools had.

The significance is hard to overstate. Genome editing became cheap, fast and general, transforming basic research, agriculture and medicine; the first approved CRISPR therapy, for sickle-cell disease, arrived in 2023. Doudna and Charpentier received the 2020 Nobel Prize in Chemistry. The patent dispute between Berkeley and the Broad Institute, and debates over credit among the many contributors, remain contentious, as does the ethics of heritable editing after the 2018 birth of gene-edited babies in China.`,
    mechanism: `In bacteria, Cas9 is a nuclease that carries a CRISPR RNA whose spacer sequence of about twenty nucleotides is complementary to a target, together with the tracrRNA that holds the complex together. Cas9 scans DNA for a short protospacer adjacent motif (NGG for Streptococcus pyogenes Cas9); when it finds one, it unwinds the adjacent DNA and tests whether the guide RNA pairs with it. If the twenty bases match, the protein's two nuclease domains, HNH and RuvC, each cut one strand, producing a double-strand break three bases from the motif. The 2012 work fused the two RNAs into one single-guide RNA and showed that changing its twenty-nucleotide sequence retargeted the cut. In living cells, the cell repairs the break either by error-prone end joining, which usually disables the gene, or, if a donor template is supplied, by homology-directed repair, which writes in a chosen sequence.`,
    prerequisites: ['dna-double-helix', 'recombinant-dna', 'pcr', 'automated-dna-sequencer', 'human-genome-completion'],
    consequences: ['casgevy-crispr-therapy', 'state-of-the-field-2026'],
    figures: [
      { name: 'Jennifer Doudna', role: 'Co-lead of the 2012 Science paper; Nobel laureate 2020' },
      { name: 'Emmanuelle Charpentier', role: 'Co-lead; discovered tracrRNA; Nobel laureate 2020' },
      { name: 'Martin Jinek', role: 'First author of the 2012 paper' },
      { name: 'Francisco Mojica', role: 'Named CRISPR and proposed its immune function' },
      { name: 'Rodolphe Barrangou and Philippe Horvath', role: 'Demonstrated CRISPR immunity experimentally, 2007' },
      { name: 'Feng Zhang and George Church', role: 'First editing in mammalian cells, January 2013' },
    ],
    significance: 9,
    significanceJustification: 'CRISPR-Cas9 made genome editing general, cheap and fast, with consequences across medicine, agriculture and research that are still unfolding. Credit for the discovery is shared among many and remains disputed.',
    domains: ['biology-medicine'],
    sources: [
      { author: 'Martin Jinek, Krzysztof Chylinski, Ines Fonfara, Michael Hauer, Jennifer A. Doudna and Emmanuelle Charpentier', title: 'A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity', publisher: 'Science', year: 2012, url: 'https://doi.org/10.1126/science.1225829' },
      { author: 'Rodolphe Barrangou, Christophe Fremaux, Helene Deveau, Melissa Richards, Patrick Boyaval, Sylvain Moineau, Dennis A. Romero and Philippe Horvath', title: 'CRISPR Provides Acquired Resistance Against Viruses in Prokaryotes', publisher: 'Science', year: 2007, url: 'https://doi.org/10.1126/science.1138140' },
      { author: 'Francisco J. M. Mojica, Cesar Diez-Villasenor, Jesus Garcia-Martinez and Elena Soria', title: 'Intervening Sequences of Regularly Spaced Prokaryotic Repeats Derive from Foreign Genetic Elements', publisher: 'Journal of Molecular Evolution', year: 2005, url: 'https://doi.org/10.1007/s00239-004-0046-3' },
      { author: 'Le Cong and others', title: 'Multiplex Genome Engineering Using CRISPR/Cas Systems', publisher: 'Science', year: 2013, url: 'https://doi.org/10.1126/science.1231143' },
      { author: 'Prashant Mali and others', title: 'RNA-Guided Human Genome Engineering via Cas9', publisher: 'Science', year: 2013, url: 'https://doi.org/10.1126/science.1232033' },
      { author: 'Eric S. Lander', title: 'The Heroes of CRISPR', publisher: 'Cell', year: 2016, url: 'https://doi.org/10.1016/j.cell.2015.12.041' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'lhc-higgs',
    epochId: 'networked-world',
    date: { year: 2012, month: 7, day: 4, precision: 'exact', display: '2012-07-04 (Higgs discovery announced; LHC first beam 10 September 2008)' },
    location: 'CERN, Geneva, Switzerland',
    title: 'The Large Hadron Collider finds the Higgs boson',
    summary: 'The Large Hadron Collider at CERN, the largest machine ever built, circulated its first beam in September 2008, and on 4 July 2012 the ATLAS and CMS collaborations announced a new particle at 125 GeV consistent with the Higgs boson predicted in 1964.',
    explanation: `In 1964 Peter Higgs, and independently Francois Englert with Robert Brout, and a third group of Gerald Guralnik, Carl Hagen and Tom Kibble, proposed that a field filling all space gives elementary particles their mass, and that the field should have an associated particle. Over the following decades the Standard Model of particle physics was built around this mechanism, and every one of its other particles was found. The Higgs boson remained missing because its mass was unknown and producing it required collision energies beyond any accelerator. CERN's LEP collider searched up to about 114 GeV before it was shut down in 2000 to make room for its successor.

The Large Hadron Collider was approved in 1994 and built in LEP's 27-kilometre tunnel a hundred metres beneath the French-Swiss border. It is a ring of 1,232 superconducting dipole magnets, each fifteen metres long, cooled with superfluid helium to 1.9 kelvin, colder than deep space, to bend two counter-rotating proton beams at up to 7 TeV each. The first beam circulated on 10 September 2008; nine days later a faulty electrical joint caused a magnet quench and a helium explosion that damaged fifty magnets and delayed operations by a year. Collisions at 7 TeV began in March 2010.

Two general-purpose detectors, ATLAS and CMS, each the size of a cathedral and built by collaborations of about three thousand physicists from dozens of countries, recorded the debris of about 600 million collisions per second, filtering them to a few hundred per second worth keeping. Data went to the Worldwide LHC Computing Grid, a federation of about 170 computing centres, since no single site could store the petabytes produced. On 4 July 2012 the two collaborations announced, in a seminar at CERN, that each had found a new boson at about 125 GeV with a significance of five standard deviations, seen mainly in its decays to two photons and to four leptons. Higgs and Englert, who were present, received the Nobel Prize in 2013.

The LHC has since measured the particle's properties, which so far match the Standard Model's predictions, and has found no evidence of the supersymmetric partners that many theorists expected. That absence is itself a major result, and the field's direction after the Higgs remains uncertain. As an engineering and organisational achievement, the machine demonstrated what a multinational scientific collaboration could build and operate: the largest cryogenic system, the most powerful magnets in regular service, and the largest distributed computing project of its time. CERN's earlier gift to the world, the World Wide Web, was invented to serve exactly this kind of community.`,
    mechanism: `Protons stripped from hydrogen are accelerated through a chain of older machines to 450 GeV and injected into the LHC ring in bunches, where radio-frequency cavities push them to 4 TeV (in 2012) as the dipole magnets ramp to 8 tesla to keep them on course. The two beams cross at four points, focused to a few tens of micrometres so that bunches of a hundred billion protons collide about twenty million times per second. When two quarks or gluons collide with enough energy they can produce a Higgs boson, which decays in about a hundred billionths of a trillionth of a second. Detectors measure the decay products in concentric layers: silicon trackers record charged-particle paths in a magnetic field, calorimeters absorb and measure energy, and outer muon chambers identify muons. Physicists reconstruct the invariant mass of candidate decay products; a genuine particle appears as a bump above the smooth background, established by statistics.`,
    prerequisites: ['rutherford-atom', 'planck-quantum', 'einstein-1905', 'world-wide-web', 'laser'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'Peter Higgs', role: 'Proposed the mechanism, 1964; Nobel laureate 2013' },
      { name: 'Francois Englert', role: 'Proposed the mechanism with Robert Brout, 1964; Nobel laureate 2013' },
      { name: 'Lyn Evans', role: 'LHC project leader' },
      { name: 'Fabiola Gianotti', role: 'ATLAS spokesperson at the discovery; later CERN Director-General' },
      { name: 'Joe Incandela', role: 'CMS spokesperson at the discovery' },
    ],
    significance: 8,
    significanceJustification: 'The Higgs discovery completed the Standard Model and validated a fifty-year-old theory; the LHC itself is the largest scientific instrument ever built. Practical consequences are indirect, through technology and organisational precedent.',
    domains: ['information', 'materials', 'computation'],
    sources: [
      { author: 'ATLAS Collaboration', title: 'Observation of a new particle in the search for the Standard Model Higgs boson with the ATLAS detector at the LHC', publisher: 'Physics Letters B', year: 2012, url: 'https://doi.org/10.1016/j.physletb.2012.08.020' },
      { author: 'CMS Collaboration', title: 'Observation of a new boson at a mass of 125 GeV with the CMS experiment at the LHC', publisher: 'Physics Letters B', year: 2012, url: 'https://doi.org/10.1016/j.physletb.2012.08.021' },
      { author: 'Lyndon Evans and Philip Bryant (editors)', title: 'LHC Machine', publisher: 'Journal of Instrumentation', year: 2008, url: 'https://doi.org/10.1088/1748-0221/3/08/S08001' },
      { author: 'Peter W. Higgs', title: 'Broken Symmetries and the Masses of Gauge Bosons', publisher: 'Physical Review Letters', year: 1964, url: 'https://doi.org/10.1103/PhysRevLett.13.508' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'alexnet',
    epochId: 'networked-world',
    date: { year: 2012, month: 9, day: 30, precision: 'exact', display: '2012-09-30 (ImageNet challenge submission; results announced October 2012)' },
    location: 'University of Toronto, Canada',
    title: 'AlexNet wins ImageNet and revives deep learning',
    summary: 'A deep convolutional neural network trained on two consumer GPUs by Alex Krizhevsky, Ilya Sutskever and Geoffrey Hinton won the 2012 ImageNet challenge with a 15.3 percent error rate against 26.2 percent for the runner-up, ending decades of scepticism about neural networks.',
    explanation: `Neural networks had been proposed in the 1940s, trained by backpropagation from the 1980s, and used by Yann LeCun to read cheques in the 1990s, but by the 2000s they were widely regarded as a dead end. Kernel methods and hand-designed features won benchmarks; networks with many layers were hard to train and, it was believed, had no advantage. A small group, notably Geoffrey Hinton in Toronto, Yoshua Bengio in Montreal and LeCun in New York, kept working, funded partly by the Canadian Institute for Advanced Research, and from 2006 published methods for training deeper networks. Their results on speech recognition around 2009 to 2011 were strong but did not convince the vision community.

Alex Krizhevsky, a graduate student of Hinton's, had written unusually fast code for training convolutional networks on NVIDIA GPUs using CUDA. His colleague Ilya Sutskever argued that with ImageNet's 1.2 million labelled images there was finally enough data to train a large network without it simply memorising. Krizhevsky trained a network with eight learned layers and sixty million parameters on two GeForce GTX 580 cards in his bedroom over about a week, splitting the model across the two cards because neither had enough memory. The design used rectified linear units instead of saturating sigmoids, which sped training several-fold; dropout, a technique from Hinton's group that randomly disabled neurons during training to prevent co-adaptation; and aggressive data augmentation by cropping and flipping images.

The entry was submitted to the ImageNet Large Scale Visual Recognition Challenge at the end of September 2012, and when results were announced in October it had a top-5 error of 15.3 percent, against 26.2 percent for the best conventional entry. In a field where a one-point gain was a good year, the gap was immediately understood as a discontinuity. The paper was presented at the NIPS conference in December 2012.

The reaction was swift. Google, Microsoft, Facebook and Baidu hired the pioneers and their students; Hinton's tiny company was bought by Google in 2013; within two years every leading vision system was a deep network, and speech recognition, machine translation and game playing followed. NVIDIA reoriented itself around deep learning. The three ingredients AlexNet combined, big labelled data, GPU compute and a handful of training tricks, defined the research programme of the following decade, and the scaling of the same recipe produced the language models of the 2020s. Hinton, Bengio and LeCun received the 2018 Turing Award, and Hinton shared the 2024 Nobel Prize in Physics.`,
    mechanism: `AlexNet takes a 224 by 224 pixel colour image and passes it through five convolutional layers, each of which slides a set of small learned filters across its input to produce feature maps, with the early layers detecting edges and colour blobs and later layers combining them into textures and object parts. Max-pooling layers between them shrink the maps and give tolerance to small shifts. Three fully connected layers at the top map the features to scores for the thousand classes, normalised by a softmax. Every unit applies a rectified linear function, max(0, x), which does not saturate and so keeps gradients flowing. Training minimises cross-entropy loss by stochastic gradient descent with momentum: each batch of 128 images is run forward, the error is propagated backward through the layers by the chain rule to compute the gradient for every parameter, and the parameters are nudged. Dropout randomly zeros half the units in the fully connected layers during training.`,
    prerequisites: ['integrated-circuit', 'shannon-information-theory', 'cuda-gpu-computing', 'imagenet-dataset'],
    consequences: ['word2vec', 'gans', 'alphago', 'transformer-paper'],
    figures: [
      { name: 'Alex Krizhevsky', role: 'Lead author; wrote the GPU code and trained the network' },
      { name: 'Ilya Sutskever', role: 'Co-author' },
      { name: 'Geoffrey Hinton', role: 'Co-author and supervisor' },
    ],
    significance: 10,
    significanceJustification: 'AlexNet demonstrated that deep networks trained on large data with GPUs decisively beat every alternative, triggering the deep-learning revolution and the industrial reorientation that defines the following epoch.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Alex Krizhevsky, Ilya Sutskever and Geoffrey E. Hinton', title: 'ImageNet Classification with Deep Convolutional Neural Networks', publisher: 'Advances in Neural Information Processing Systems 25', year: 2012 },
      { author: 'Alex Krizhevsky, Ilya Sutskever and Geoffrey E. Hinton', title: 'ImageNet classification with deep convolutional neural networks', publisher: 'Communications of the ACM', year: 2017, url: 'https://doi.org/10.1145/3065386' },
      { author: 'Yann LeCun, Yoshua Bengio and Geoffrey Hinton', title: 'Deep learning', publisher: 'Nature', year: 2015, url: 'https://doi.org/10.1038/nature14539' },
      { author: 'Cade Metz', title: 'Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World', publisher: 'Dutton', year: 2021 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
];
