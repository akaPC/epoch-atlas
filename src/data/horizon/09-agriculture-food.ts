import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'agriculture-food',
  index: 9,
  name: 'Agriculture and Food',
  code: 'AGRICULTURE',
  summary: `Agriculture feeds about 8.2 billion people from roughly 1.6 billion hectares of cropland and about twice that in pasture, and in September 2026 it is a mature industrial system with a thin layer of new biology on top. Cereal yields still rise about one percent a year, close to half the rate needed to meet mid-century demand without clearing new land. Roughly half of the nitrogen in human bodies has passed through a Haber-Bosch reactor, and ammonia synthesis consumes about two percent of world final energy, almost all of it from natural gas and coal. Gene editing has produced its first commercial crops (a GABA-enriched tomato in Japan, waxy maize and mustard greens in the United States, and the first releases under England's precision breeding rules), while engineered photosynthesis remains in field trials. Cultivated meat is approved in a handful of jurisdictions, banned in several US states, and produced in tonnes rather than kilotonnes. Aquaculture now supplies more aquatic animal food than wild capture. Vertical farming has consolidated after a wave of bankruptcies. Climate change has already reduced yields in the tropics, and between 670 and 730 million people were undernourished in the most recent FAO estimates, driven by conflict and prices more than by production.`,
  indexDefinition: `The index measures how far the food system has moved toward its plausible biological and physical ceiling, blending five components: field yield relative to the photosynthetic and water-use limits of each crop, the share of crop nitrogen supplied without fossil energy, the degree of automation from planting to processing, the share of animal-type protein that can be produced without animals at cost parity when a society wants it, and resilience, meaning the absence of production-driven hunger and of multi-year shortfalls under climate stress. A score of 100 means crops converting sunlight at close to the Zhu, Long and Ort ceilings, nutrient cycles closed, farmland reduced to what is strictly needed, cultivated and fermented protein cheaper than livestock, and zero undernourishment attributable to supply. September 2026 sits near 22.`,
  physicalLimits: [
    {
      name: 'Photosynthetic efficiency ceiling',
      description: `Only about 45 percent of sunlight is photosynthetically active, and after losses to reflection, photochemical inefficiency, carbohydrate synthesis and respiration the maximum conversion of total solar energy into biomass is about 4.6 percent for C3 crops such as wheat, rice and soybean and about 6 percent for C4 crops such as maize and sugarcane. Photorespiration alone costs C3 plants a quarter or more of their fixed carbon in warm climates. Real crops achieve 1 to 2 percent over a season, with the best C4 stands near 2.4 percent, so there is at most a two to threefold gain available from engineering the light and carbon reactions. Every yield projection in this field is bounded by these figures.`,
      sources: [
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'What is the maximum efficiency with which photosynthesis can convert solar energy into biomass?', publisher: 'Current Opinion in Biotechnology', year: 2008 },
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'Improving Photosynthetic Efficiency for Greater Yield', publisher: 'Annual Review of Plant Biology', year: 2010 },
      ],
    },
    {
      name: 'Energy cost of nitrogen fixation',
      description: `The nitrogen triple bond requires about 945 kilojoules per mole to break, and every route to reactive nitrogen pays for it. Haber-Bosch plants use about 27 to 35 gigajoules per tonne of ammonia against a thermodynamic floor near 19, so the chemistry is already within a factor of two of its limit and further savings must come from the hydrogen source, not the reactor. Biological nitrogenase spends about 16 ATP per molecule of nitrogen reduced and is destroyed by oxygen, which is why legumes divert 5 to 15 percent of their photosynthate to their root nodules and why a nitrogen-fixing cereal must trade some yield for its fertiliser. About 180 million tonnes of ammonia a year currently feed roughly half of humanity.`,
      sources: [
        { author: 'Jan Willem Erisman, Mark A. Sutton, James Galloway, Zbigniew Klimont and Wilfried Winiwarter', title: 'How a century of ammonia synthesis changed the world', publisher: 'Nature Geoscience', year: 2008 },
        { author: 'Vaclav Smil', title: 'Enriching the Earth: Fritz Haber, Carl Bosch, and the Transformation of World Food Production', publisher: 'MIT Press', year: 2001 },
        { author: 'International Energy Agency', title: 'Ammonia Technology Roadmap', publisher: 'IEA', year: 2021 },
      ],
    },
    {
      name: 'Water, land and Liebig\'s law of the minimum',
      description: `A crop's growth is set by whichever resource is scarcest, a rule Liebig stated in 1840 and that still governs fields. Transpiration is coupled to carbon uptake through the same stomata, so a C3 crop needs on the order of 500 to 1,000 litres of water per kilogram of dry matter and a C4 crop about half that; agriculture already takes about 70 percent of global freshwater withdrawals. Cropland covers roughly 12 percent of ice-free land and the best soils are already farmed, so new land is marginal, remote or forested. Raising photosynthetic efficiency therefore lifts yield only where water, nitrogen, phosphorus and temperature allow, and phosphorus, mined from finite rock deposits, is the nutrient with no biological substitute.`,
      sources: [
        { author: 'Justus von Liebig', title: 'Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie', publisher: 'Vieweg', year: 1840 },
        { author: 'Food and Agriculture Organization of the United Nations', title: 'The State of the World\'s Land and Water Resources for Food and Agriculture: Systems at breaking point', publisher: 'FAO', year: 2021 },
        { author: 'James Elser and Elena Bennett', title: 'A broken biogeochemical cycle', publisher: 'Nature', year: 2011 },
      ],
    },
    {
      name: 'Energy cost of artificial light',
      description: `A field receives sunlight free; a plant factory must buy every photon. The best horticultural LEDs deliver about 3 to 3.5 micromoles of photosynthetically active photons per joule, and a leafy crop needs roughly 15 to 20 moles per square metre per day, so lighting alone costs on the order of 10 kilowatt hours per kilogram of fresh lettuce, plus cooling to remove the same energy as heat. For a staple like wheat, whose grain is a fraction of its biomass, the cost is far higher: indoor wheat can reach several hundred times field yield per unit of land but only at electricity costs that no plausible tariff supports. Controlled-environment agriculture therefore stays with high-value, fast, leafy or fruiting crops unless electricity becomes nearly free.`,
      sources: [
        { author: 'Toyoki Kozai, Genhua Niu and Michiko Takagaki (eds)', title: 'Plant Factory: An Indoor Vertical Farming System for Efficient Quality Food Production', publisher: 'Academic Press', year: 2020 },
        { author: 'Senthold Asseng et al.', title: 'Wheat yield potential in controlled-environment vertical farms', publisher: 'Proceedings of the National Academy of Sciences', year: 2020 },
        { author: 'Luuk Graamans, Esteban Baeza, Andy van den Dobbelsteen, Ilias Tsafaras and Cecilia Stanghellini', title: 'Plant factories versus greenhouses: Comparison of resource use efficiency', publisher: 'Agricultural Systems', year: 2018 },
      ],
    },
    {
      name: 'Bioreactor economics of cultivated meat',
      description: `Animal cells grown in suspension are limited by oxygen transfer, by the accumulation of ammonia and lactate, by shear sensitivity and by the need for sterile operation, which together cap practical densities near 10 to 100 million cells per millilitre and stirred-tank volumes near a few tens of cubic metres. Humbird's 2021 scale-up analysis, using pharmaceutical industry cost models, found that media (amino acids, glucose, growth factors) dominate cost, that a plant producing tens of thousands of tonnes a year would be among the largest cell culture facilities ever built, and that even optimistic assumptions leave costs at tens of dollars per kilogram of wet cell mass. Approaching livestock prices requires cell lines and media outside the current industrial envelope.`,
      sources: [
        { author: 'David Humbird', title: 'Scale-up economics for cultured meat', publisher: 'Biotechnology and Bioengineering', year: 2021 },
        { author: 'Derrick Risner, Fangzhou Li, Jason S. Fell, Sara A. Pace, Justin B. Siegel, Ilias Tagkopoulos and Edward S. Spang', title: 'Preliminary Techno-Economic Assessment of Animal Cell-Based Meat', publisher: 'Foods', year: 2021 },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ */
    /* 2026-2030                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'agriculture-food',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Incremental yields, first gene-edited crops, cultivated meat stuck at pilot scale',
      narrative: `Through 2030 the Baseline farm changes at the pace of seed catalogues and equipment replacement cycles. Global cereal yields continue to rise about 1 percent a year, in line with the 0.9 to 1.6 percent annual trends that Ray and colleagues measured for the four major crops, so world grain output grows toward 3 billion tonnes with little new land. Gene-edited varieties move from first approvals to early commercial acreage: high-oleic and waxy traits in oilseeds and maize, disease-resistant bananas and wheat in trial, and the first precision-bred releases in England. The European Union's new genomic techniques regulation, still being finalised in 2025, begins to apply late in the window but produces no EU harvest before 2030. Photosynthesis improvement remains experimental: the RIPE traits that gave 20 to 30 percent biomass gains in tobacco and soybean plots stay in multi-year replicated trials, and no photosynthesis-enhanced crop is sold. Nitrogen-fixing microbial inoculants for maize and wheat spread across several million hectares in North America and displace perhaps 10 to 20 percent of applied nitrogen where used, while the world still makes about 180 million tonnes of ammonia a year from natural gas and coal; the first commercial green ammonia plants, each sized at about a million tonnes or less, are starting up or under construction in Saudi Arabia, Australia and Scandinavia. Precision agriculture is the fastest moving piece: camera-guided sprayers cut herbicide use by half or more on adopting farms, and autonomous tractors and harvesters work a few hundred thousand hectares under remote supervision. Vertical farming, after the failures of 2023 to 2025, survives as leafy greens and herbs near expensive cities and as seedling and research facilities. Cultivated meat is sold, in restaurants or as pet food, in Singapore, the United States, Israel and the United Kingdom, at prices well above conventional meat and volumes of tens to hundreds of tonnes; several US states keep their bans. Aquaculture grows 2 to 3 percent a year and supplies most of the fish people eat. Undernourishment stays near 700 million, driven by conflict and prices rather than by production.`,
      dependencies: ['crispr-discovery', 'gps', 'green-revolution', 'haber-bosch', 'fertile-crescent-agriculture'],
      uncertainties: [
        'A major El Nino or a war affecting a large exporter could push cereal prices up by half within a season, as in 2008 and 2022, and dominate the window regardless of technology.',
        'The EU regulation on new genomic techniques could be adopted, delayed or weakened, which changes whether European breeders invest in gene editing before 2030.',
        'Cultivated meat could lose most of its remaining venture funding, leaving only a few companies to reach 2030.',
      ],
      indicators: [
        'Whether any photosynthesis-enhanced crop enters regulatory review in the United States or Brazil before 2030.',
        'Hectares treated with nitrogen-fixing microbial products and the measured reduction in synthetic nitrogen per hectare in independent trials.',
        'The count of countries with cultivated meat approvals and the largest single production run reported, in tonnes.',
        'Commissioning of the first electrolytic ammonia plant above 500,000 tonnes a year.',
      ],
      confidence: 'high',
      confidenceJustification: 'Nearly everything that reaches a field by 2030 is already in trial or registration, and yield trends have been stable for decades. Price shocks are the main risk to the picture, not technology.',
      sources: [
        { author: 'Deepak K. Ray, Nathaniel D. Mueller, Paul C. West and Jonathan A. Foley', title: 'Yield Trends Are Insufficient to Double Global Crop Production by 2050', publisher: 'PLOS ONE', year: 2013 },
        { author: 'Good Food Institute', title: 'State of the Industry Report: Cultivated Meat and Seafood', publisher: 'Good Food Institute', year: 2024 },
        { author: 'FAO, IFAD, UNICEF, WFP and WHO', title: 'The State of Food Security and Nutrition in the World 2024', publisher: 'FAO', year: 2024 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Same fields, better models: AI-driven breeding and enzyme design arrive before the harvest',
      narrative: `In the Accelerated branch the harvest of 2030 is nearly identical to the Baseline, because everything that reaches a field by then was bred, trialled and registered before models could help much. What differs is the pipeline behind it. Protein structure prediction and generative design, descended from AlphaFold, are used from 2026 to propose candidate rubisco variants, nitrogenase components that tolerate oxygen, and enzymes for photorespiratory bypasses; multimodal models read phenotyping data from drones and field cameras and propose crosses. Genomic selection accuracy improves and breeding cycle times in maize, soybean and wheat fall toward the biological minimum of one generation per speed-breeding cycle (about 60 to 90 days for wheat under continuous light), so the number of candidate traits entering trials in 2029 and 2030 is several times higher than in 2025. None of this appears on a shelf before 2030. The regulatory clocks are unchanged: a gene-edited trait needs two to five years of multi-location trials and one to three years of review in the United States, and longer in most other jurisdictions. Cultivated meat benefits more immediately, because its constraint is process biology rather than seasons: model-guided media optimisation and cell-line engineering cut media cost per litre and raise densities in pilot reactors, which lowers cost by a few fold on paper, though no company operates reactors larger than a few tens of cubic metres and Humbird's scale-up analysis still bounds costs at tens of dollars per kilogram. Autonomous field machinery scales faster than in the Baseline as perception models improve and labour shortages bite in Europe, Japan and the United States. Green ammonia projects find cheaper solar power and faster permitting. By 2030 AGI is about two years away and the agricultural research establishment has begun to reorganise around automated laboratories, but yields per hectare, fertiliser use and diets look like the Baseline.`,
      dependencies: ['alphafold-2', 'crispr-discovery', 'recombinant-dna', 'green-revolution', 'haber-bosch'],
      uncertainties: [
        'Designed enzymes that work in vitro may fail in planta, as many rubisco engineering attempts have, so the enlarged candidate pool may not raise the number of traits that reach trials.',
        'Media cost reductions reported in pilot reactors may not transfer to larger vessels where oxygen transfer and shear dominate.',
        'Regulators could respond to a flood of submissions by slowing review rather than speeding it.',
      ],
      indicators: [
        'Number of gene-edited and photosynthesis-related traits entering multi-location trials each year at the largest seed companies and public programmes.',
        'Published cultivated meat media costs below one dollar per litre at pilot scale, verified by a third party.',
        'Adoption of model-based genomic prediction as the default in public wheat and rice breeding programmes.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The physical outcome by 2030 is well constrained by lead times. The uncertainty is how much the research pipeline actually accelerates, which is not yet measurable in field data.',
      sources: [
        { author: 'Haocheng Li, Caixia Gao and colleagues; Kunling Chen, Yanpeng Wang, Rui Zhang, Huawei Zhang and Caixia Gao', title: 'CRISPR/Cas Genome Editing and Precision Plant Breeding in Agriculture', publisher: 'Annual Review of Plant Biology', year: 2019 },
        { author: 'David Humbird', title: 'Scale-up economics for cultured meat', publisher: 'Biotechnology and Bioengineering', year: 2021 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI arrives in 2029 and finds a food system with four-year lead times',
      narrative: `The Discontinuous branch reaches AGI around 2029, and its effect on what people eat before the end of 2030 is close to nil. That is not a failure of the technology but a property of the field. A crop trait conceived in 2029 needs at least one growing season to test, three to produce statistically defensible multi-location yield data, and one to three years of regulatory review; a new seed variety then needs several years to reach a significant share of planted area because farmers buy seed annually and switch cautiously. A cultivated meat plant of commercial size needs two to three years to design, permit and build in stainless steel. Green ammonia plants, autonomous machinery fleets and irrigation systems are physical capital with similar lead times. So the visible 2026 to 2030 story is the same as in the other branches: 1 percent yield growth, early gene-edited products, microbial nitrogen supplements on a few million hectares, camera-guided sprayers, aquaculture growth and stubborn hunger numbers. What changes in 2029 and 2030 is the research layer. AGI-class systems, working with automated laboratories and phenotyping robots, generate and screen candidate designs for higher-efficiency photosynthesis, oxygen-tolerant nitrogenase in plant organelles, heat-tolerant reproductive tissues and pest resistance at a rate no human programme can match, and they plan trial networks to use the 2030 and 2031 seasons efficiently on both hemispheres. Investors redirect capital from plant-based meat toward cultivated and fermented protein once media costs fall in pilot data. Governments begin to ask whether existing biosafety frameworks can review submissions arriving at ten times the historical rate. Farmers, meanwhile, notice mostly that their sprayer software improves and that commodity prices are unchanged. The window closes with a pipeline full of designs and no new food.`,
      dependencies: ['state-of-the-field-2026', 'alphafold-2', 'crispr-discovery', 'green-revolution', 'haber-bosch', 'fertile-crescent-agriculture'],
      uncertainties: [
        'Early AGI systems may be far better at software and molecular design than at the messy, slow work of field agronomy, delaying their effect on crops.',
        'A rush of submissions could provoke moratoria on gene-edited crops in some jurisdictions before 2030.',
        'Capital markets may not fund cultivated protein plants until a design has been demonstrated at scale, which cannot happen within the window.',
      ],
      indicators: [
        'Announcements of automated crop-design laboratories with attached phenotyping fields by frontier AI developers or their partners.',
        'The number of regulatory submissions for edited crop traits in the United States, Brazil and China in 2030 relative to 2025.',
        'Southern hemisphere trial plantings in late 2030 of traits designed in the same year.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Physical lead times make the 2030 harvest nearly branch-independent, which gives the projection a firm floor. Whether AGI is applied to agriculture at all in its first year is the open question.',
      sources: [
        { author: 'Stephen P. Long, Amy Marshall-Colon and Xin-Guang Zhu', title: 'Meeting the Global Food Demand of the Future by Engineering Crop Photosynthesis and Yield Potential', publisher: 'Cell', year: 2015 },
        { author: 'Good Food Institute', title: 'State of the Industry Report: Cultivated Meat and Seafood', publisher: 'Good Food Institute', year: 2024 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2030-2040                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'agriculture-food',
      window: '2030-2040',
      branch: 'slow',
      headline: 'Gene editing goes mainstream, photosynthesis traits reach the field, fertiliser turns green',
      narrative: `The Baseline 2030s are the decade gene editing becomes ordinary breeding. By 2040 most new commercial varieties of maize, soybean, rice, wheat, potato and tomato carry edited alleles for disease resistance, heat and drought tolerance, and quality traits, released in the United States, Brazil, Argentina, Japan, the United Kingdom, China and, from the mid-2030s, the European Union. The first photosynthesis-enhanced varieties reach farmers late in the decade, most likely soybean and rice carrying photorespiratory bypass or faster photoprotection recovery, with yield gains of 5 to 15 percent in favourable conditions, well below the 20 to 30 percent seen in small plots and consistent with Sinclair's warning that yield is co-limited by nitrogen and water. Nitrogen-fixing cereals remain a laboratory goal; microbial products expand to tens of millions of hectares. Fertiliser itself starts to decarbonise: electrolytic and low-carbon ammonia supply perhaps 10 to 15 percent of the roughly 200 million tonnes made in 2040, concentrated where solar power is cheapest, while Haber-Bosch chemistry remains the route. Autonomy spreads on large farms: 20 to 30 percent of North American, Australian and Brazilian row crop area is planted, sprayed or harvested by machines running unsupervised for hours, and robotic harvesting reaches strawberries, apples and asparagus at cost parity with seasonal labour. Climate is the counterweight. Consistent with the AR6 Working Group II assessment, heat and drought reduce yields in the tropics and subtropics, extreme years like 2012 in the US corn belt occur about twice as often, and yield growth slows in South Asia and sub-Saharan Africa even as breeding improves. Cultivated meat stays below 0.1 percent of world meat, sold mainly as hybrid products with plant protein; precision fermentation dairy proteins take a few percent of the ingredient market. Aquaculture of aquatic animals passes 120 million tonnes. Population approaches 9 billion by the late 2030s. Yields and demand roughly keep pace, prices are volatile, and undernourishment hovers between 500 and 700 million. AGI arrives around 2038, too late to change this decade's harvests.`,
      dependencies: ['crispr-discovery', 'gps', 'recombinant-dna', 'green-revolution', 'haber-bosch', 'irrigation'],
      uncertainties: [
        'Photosynthesis traits could underperform in the field by more than assumed, as some early replications suggested, leaving them commercially marginal before 2040.',
        'Warming could exceed the AR6 central pathway in this decade, with compounding heat and drought in two or more breadbaskets in the same year.',
        'Public resistance to gene-edited food in Europe and parts of Asia could keep those markets closed longer than assumed.',
        'Green ammonia may stay above 10 percent of supply only where subsidised, if natural gas remains cheap.',
      ],
      indicators: [
        'Commercial release of any variety marketed on a photosynthesis trait, and its independently measured yield advantage.',
        'Share of US maize and soybean area planted or harvested by machines without an operator on board.',
        'Tonnes of ammonia produced from electrolytic hydrogen as reported by the IEA and IFA.',
        'Frequency of simultaneous yield shortfalls in two or more major exporters.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The direction of breeding, automation and fertiliser change is set by projects already funded, but field performance of photosynthesis traits and the pace of climate damage are both uncertain by a factor of two.',
      sources: [
        { author: 'Paul F. South, Amanda P. Cavanagh, Helen W. Liu and Donald R. Ort', title: 'Synthetic glycolate metabolism pathways stimulate crop growth and productivity in the field', publisher: 'Science', year: 2019 },
        { author: 'Thomas R. Sinclair, Thomas W. Rufty and Ramon S. Lewis', title: 'Increasing Photosynthesis: Unlikely Solution for World Food Problem', publisher: 'Trends in Plant Science', year: 2019 },
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2022: Impacts, Adaptation and Vulnerability. Working Group II Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2022 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'Automated research meets the growing season: designed traits reach farms by the late 2030s',
      narrative: `AGI arrives around 2032 in the Accelerated branch and by 2035 most crop and process biology research runs through automated systems: models propose designs, robotic laboratories build and test constructs, phenotyping platforms score plants, and models revise. The result is a large increase in the number and quality of candidate traits, not a faster field. A trait still needs seasons. Working from candidate genes in 2033, the fastest pathway is one greenhouse generation, two seasons of small-plot trials, two or three seasons of multi-location trials and one to three years of review, so the first crops with model-designed photosynthetic upgrades reach farmers around 2038 to 2040, a few years ahead of the Baseline and with larger gains (15 to 25 percent in trials for rice and soybean). Engineered nitrogen fixation in a cereal, probably an organelle-hosted nitrogenase in a small-acreage crop, is demonstrated in the field in the late 2030s but not sold. Speed-breeding facilities under artificial light make several generations a year and become the standard front end of every major breeding programme. Cultivated meat and precision fermentation move faster because they are process industries: model-designed cell lines that grow in cheap chemically defined media and tolerate higher densities bring costs toward 10 to 20 dollars per kilogram at plants of a few tens of thousands of tonnes a year by the late 2030s, still bound by Humbird's oxygen transfer and reactor scale limits, so cultivated products are a premium niche and precision fermentation dairy and egg proteins grow faster. Autonomy is helped by the robotics field: by 2040 roughly a third of industrial row crop area operates without a driver and orchard robots are common. Electrolytic ammonia reaches 15 to 25 percent of supply on cheap solar. Climate losses are as in the Baseline; the difference is that adapted varieties arrive a few years earlier. In 2040 ASI arrives and the food system is a decade behind the designs already on file.`,
      dependencies: ['agentic-coding-tools', 'alphafold-2', 'crispr-discovery', 'recombinant-dna', 'green-revolution', 'haber-bosch'],
      uncertainties: [
        'Automated laboratories may accelerate molecular work while multi-location field trials remain the bottleneck, so the gain over the Baseline could be one or two years rather than four.',
        'Cultivated meat cost reductions depend on cell lines that grow at densities no animal cell has reached in industrial practice.',
        'Model-assisted regulatory review could be rejected by legislatures, holding review times at human pace.',
      ],
      indicators: [
        'Time from first greenhouse test to commercial release for a new trait falling below five years at any major seed company.',
        'A cultivated meat or precision fermentation plant above 10,000 tonnes a year operating at reported costs under 20 dollars per kilogram.',
        'A field demonstration of a cereal fixing more than 20 percent of its own nitrogen, published with independent isotope data.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The mechanism of automated research is plausible and partly demonstrated in molecular biology, but its effect on a field paced by seasons and review is bounded by lead times that are well understood.',
      sources: [
        { author: 'Giles E. D. Oldroyd and Ray Dixon', title: 'Biotechnological solutions to the nitrogen problem', publisher: 'Current Opinion in Biotechnology', year: 2014 },
        { author: 'David Humbird', title: 'Scale-up economics for cultured meat', publisher: 'Biotechnology and Bioengineering', year: 2021 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superhuman crop design from 2031, adoption paced by seasons, seed markets and biosafety review',
      narrative: `In the Discontinuous branch superintelligent systems direct agricultural research from 2031, and this decade is the clearest demonstration in the atlas of a field where design is not the bottleneck. By 2033 there exist fully specified designs for C4-like carbon concentration in rice and wheat, oxygen-tolerant nitrogenase in plant plastids, rubisco variants with higher specificity, heat-stable pollen, and closed nutrient loops for controlled environments, along with cell lines for cultivated meat that grow in media costing under a dollar a litre. Turning them into food takes the rest of the decade. Trial networks run every season on every continent, but statistics still need replicated years, and regulators, even with model assistance, insist on multi-season safety and performance data; the first superintelligence-designed varieties are approved between 2035 and 2037. Adoption then runs at the seed market's pace: maize and soybean, replanted yearly from purchased seed, convert within three to five years; wheat and rice, often farm-saved, convert over a decade; smallholders in Africa and South Asia, who produce about a third of the world's food on roughly 12 percent of its agricultural land, convert slowest of all. By 2040 photosynthesis-enhanced varieties cover a significant minority of industrial cropland with yield gains of 20 to 30 percent, and the first nitrogen-fixing cereal is sold commercially. Fertiliser demand begins to fall. Cultivated meat and precision fermentation are limited by steel: reactor capacity built between 2034 and 2040 reaches perhaps a few hundred thousand tonnes a year of cell mass, under one percent of meat, though costs approach conventional poultry in the best plants. Robotic field and orchard fleets, designed by the same systems, take over most industrial operations by 2040. What does not change fast is climate, land tenure, water rights and diet: extreme seasons still cause losses, most farmers still farm their own land, and most people still eat what they ate. Hunger falls where governments use cheaper grain well, and persists where they do not.`,
      dependencies: ['state-of-the-field-2026', 'alphafold-2', 'crispr-discovery', 'green-revolution', 'haber-bosch', 'plough'],
      uncertainties: [
        'Whether superintelligent design can shorten the multi-season statistics that regulators require, or whether trial duration is a hard floor.',
        'Governments may treat superintelligence-designed organisms as a biosecurity matter and impose moratoria that stall approvals through 2040.',
        'Smallholder adoption could be far slower than assumed if seed distribution and credit systems do not change.',
        'Consumer rejection of designed foods could cap cultivated and engineered products regardless of price.',
      ],
      indicators: [
        'First regulatory approval of a crop with a fully synthetic photosynthetic or nitrogen-fixation pathway.',
        'Share of US maize area planted to varieties released after 2035.',
        'Global ammonia production for fertiliser falling year on year for the first time outside a recession.',
        'Cultivated meat sold at or below retail chicken price in any market.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch relies on a discontinuity in research capability with no precedent, and the only firm anchors are the biological clocks of seasons and the historical pace of seed replacement.',
      sources: [
        { author: 'Sarah K. Lowder, Marco V. Sanchez and Raffaele Bertini', title: 'Which farms feed the world and has farmland become more concentrated?', publisher: 'World Development', year: 2021 },
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'What is the maximum efficiency with which photosynthesis can convert solar energy into biomass?', publisher: 'Current Opinion in Biotechnology', year: 2008 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2040-2060                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'agriculture-food',
      window: '2040-2060',
      branch: 'slow',
      headline: 'AGI-designed crops, nitrogen-fixing cereals, and automation across industrial agriculture',
      narrative: `AGI arrives around 2038 in the Baseline and this window is where its agricultural effects accumulate. The first generation of fully model-designed traits, combining photorespiratory bypasses, improved rubisco kinetics, better canopy light distribution and faster photoprotection recovery, reaches the market in the mid-2040s and spreads through the seed systems of the major crops by the 2050s. Field yields rise 25 to 40 percent above 2026 levels in favourable regions by 2060, taking the best crops from roughly 1 percent to about 1.5 to 2 percent seasonal solar conversion, still well under the 4.6 and 6 percent theoretical ceilings. Nitrogen-fixing cereals, after two decades of work, are commercial from the early 2050s, first in rice and maize, fixing a third to a half of their nitrogen and cutting synthetic fertiliser demand on adopting farms in proportion. Haber-Bosch continues but shrinks: by 2060 ammonia output for fertiliser has fallen from its 2040 peak, and most of it is made from electrolytic hydrogen. Autonomy reaches most industrial cropland; the number of farms keeps falling in rich countries while smallholders persist elsewhere. Cultivated meat matures slowly: cost parity with beef arrives in the late 2040s at a few plants, and cultivated and fermented products hold perhaps 5 to 10 percent of animal protein by 2060, with the rest from a livestock sector that has itself been made more efficient by gene editing and feed engineering. Aquaculture, dominated by recirculating and offshore systems, supplies more than two thirds of aquatic food. Climate stress peaks in this window: mean warming near 2 degrees Celsius drives heat and water limits that adapted varieties offset only in part; yields in the tropics stagnate and production shifts poleward. Population peaks near 10.3 billion in the 2080s, so demand still rises through 2060 and is met largely by yield, with cropland roughly stable. Undernourishment falls below 400 million as productivity and incomes rise in Africa. ASI arrives around 2058 to find a system already changing.`,
      dependencies: ['crispr-discovery', 'recombinant-dna', 'green-revolution', 'haber-bosch', 'three-field-rotation', 'fertile-crescent-agriculture'],
      uncertainties: [
        'Nitrogen-fixing cereals may carry a yield penalty large enough that farmers prefer cheap electrolytic ammonia, keeping Haber-Bosch dominant.',
        'Climate damage could outrun adaptation in South Asia and the Sahel, producing chronic regional deficits that global surpluses do not reach.',
        'Livestock efficiency gains could keep conventional meat cheaper than cultivated meat for the whole window.',
      ],
      indicators: [
        'Average yield of the top quartile of US maize or Chinese rice farms passing 1.5 times the 2026 level.',
        'Commercial acreage of a nitrogen-fixing cereal above one million hectares.',
        'Global synthetic nitrogen fertiliser consumption declining for five consecutive years.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The biological targets are quantified and the design capability is implied by the branch anchor, but adoption rates, climate damage and the relative economics of livestock and cultivated meat are each uncertain by a factor of two.',
      sources: [
        { author: 'Donald R. Ort et al.', title: 'Redesigning photosynthesis to sustainably meet global food and bioenergy demand', publisher: 'Proceedings of the National Academy of Sciences', year: 2015 },
        { author: 'United Nations Department of Economic and Social Affairs', title: 'World Population Prospects 2024', publisher: 'United Nations', year: 2024 },
        { author: 'Food and Agriculture Organization of the United Nations', title: 'The future of food and agriculture: Alternative pathways to 2050', publisher: 'FAO', year: 2018 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'After ASI in 2040: redesigned crops, fertiliser decoupled from fossil fuels, land sparing begins',
      narrative: `ASI arrives around 2040 in the Accelerated branch and by the mid-2040s agricultural science is effectively a design discipline. The traits that took the 2030s to reach trials are superseded by whole-pathway redesigns: C4-like carbon concentration in rice and wheat, engineered rubisco, nitrogen fixation in the major cereals, root systems tuned to soil and water, and reproductive tissues that tolerate heat waves. Regulatory review, now model-assisted and running on continuous field data, takes a year or two rather than three to five. Adoption remains bounded by seed replacement, extension services and smallholder economics, but by 2060 most of the world's cropland grows crops designed after 2040. Yields in the best regions reach 50 to 70 percent above 2026 levels, corresponding to 2 to 2.5 percent seasonal solar conversion, about half of the theoretical C3 ceiling; the remainder is co-limited by water, temperature and the length of the season. Synthetic nitrogen use falls by half from its 2040 peak as fixing cereals spread; the ammonia that remains is electrolytic, and phosphorus recovery from waste streams closes a loop that had been open since the 1840s. Cultivated meat and precision fermentation, with cell lines and organisms redesigned and reactor plants built by automated construction, reach parity with chicken and pork in the late 2040s and supply 15 to 25 percent of animal protein by 2060, more in cities and in ingredients than in whole cuts. Controlled-environment agriculture grows where electricity is nearly free at midday, mostly for fresh produce. Land sparing becomes visible: cropland and pasture decline by a few percent, with the released land going to forest, wetland and carbon projects. Climate damages still occur but the system absorbs them. Food prices fall in real terms and undernourishment approaches the level set by conflict rather than production. The demographic peak near 10.3 billion arrives with the food system's capacity well ahead of demand.`,
      dependencies: ['humanoid-robotics-revival', 'alphafold-2', 'crispr-discovery', 'green-revolution', 'haber-bosch', 'irrigation'],
      uncertainties: [
        'Whole-pathway redesigns such as C4 rice have resisted decades of effort and may carry fitness costs that field conditions expose only after release.',
        'Land sparing depends on policy; cheaper food could instead expand cropland for biofuels and feed if governments do not protect released land.',
        'Consumer acceptance of cultivated meat could plateau below 10 percent regardless of price.',
        'Automated construction of food-grade bioreactor plants may face licensing barriers similar to pharmaceutical facilities.',
      ],
      indicators: [
        'A C3 crop with a functioning engineered carbon-concentrating mechanism approved for sale.',
        'Global synthetic nitrogen use below 60 percent of its 2040 level.',
        'Cultivated and fermented products above 10 percent of animal protein sales in any large country.',
        'Net decline in global agricultural land area reported by FAO for five consecutive years.',
      ],
      confidence: 'low',
      confidenceJustification: 'The biology permits this path and the branch anchor implies the design capability, but the projection stacks assumptions about regulation, adoption and diet that each could fail independently.',
      sources: [
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'Improving Photosynthetic Efficiency for Greater Yield', publisher: 'Annual Review of Plant Biology', year: 2010 },
        { author: 'James Elser and Elena Bennett', title: 'A broken biogeochemical cycle', publisher: 'Nature', year: 2011 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2040-2060',
      branch: 'fast',
      headline: 'Designed agriculture at scale: yields near half the photosynthetic ceiling, livestock in decline',
      narrative: `By 2040 the Discontinuous branch has had nine years of superintelligent crop design and five of commercial products, and this window is when the physical system catches up with the designs. Every major crop is replaced by redesigned lines through the 2040s, with adoption bounded by seed logistics and smallholder economics rather than by review; by the 2050s smallholders in Africa and South Asia plant designed varieties distributed as open seed, because the marginal cost of a design is near zero. Average yields on well-watered land reach 60 to 100 percent above 2026 levels by 2060, at seasonal solar conversion efficiencies of 2.5 to 3 percent for C3 and up to 4 percent for C4 crops, approaching half to two thirds of the theoretical limits in Zhu, Long and Ort. Water and heat, not carbon capture, now set yields, and irrigation, desalination and engineered water use efficiency become the main agronomic investments. Nitrogen fixation is built into all major cereals by the early 2050s and synthetic ammonia for fertiliser falls by two thirds; Haber-Bosch survives mainly as an energy carrier industry. Livestock declines: cultivated and fermented animal protein, produced in automated plants near cities at costs below conventional meat, takes 30 to 50 percent of animal protein by 2060, with the remainder from ruminants on land unsuited to crops. Agricultural land shrinks by 10 to 20 percent as pasture is released and yields rise, the largest deliberate land-use change in human history, managed for carbon and biodiversity by the same systems that run the farms. Food is nearly fully automated from planting to processing. Warming of about 2 degrees Celsius is absorbed by adapted crops and by the ability to redesign within a few seasons of a new stress. What remains slow is human: dietary preference for animal products, rural land tenure, cultural attachment to farming and the politics of released land. Undernourishment falls to a few tens of millions, concentrated in conflict zones.`,
      dependencies: ['state-of-the-field-2026', 'crispr-discovery', 'green-revolution', 'haber-bosch', 'animal-domestication', 'fertile-crescent-agriculture'],
      uncertainties: [
        'Societies may refuse designed crops at scale, or fragment into jurisdictions that do and do not permit them, halving the global effect.',
        'Land released from farming could be claimed for energy, settlement or feedstock rather than ecosystems.',
        'Water limits in South Asia, the North China Plain and the American High Plains could bind harder than engineered water-use efficiency can offset.',
      ],
      indicators: [
        'World average cereal yield passing 1.5 times its 2026 level.',
        'Cultivated and fermented products above a quarter of animal protein in any large market.',
        'Global pasture area falling by more than 10 percent from its 2026 extent.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the far tail of the fast branch. The biological ceilings and seed-market clocks are the only firm anchors; everything else depends on social permission at a scale with no precedent.',
      sources: [
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'What is the maximum efficiency with which photosynthesis can convert solar energy into biomass?', publisher: 'Current Opinion in Biotechnology', year: 2008 },
        { author: 'Monica Crippa, Efisio Solazzo, Diego Guizzardi, Fabio Monforti-Ferrario, Francesco N. Tubiello and Adrian Leip', title: 'Food systems are responsible for a third of global anthropogenic GHG emissions', publisher: 'Nature Food', year: 2021 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2060-2090                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'agriculture-food',
      window: '2060-2090',
      branch: 'slow',
      headline: 'ASI-designed agriculture arrives in the Baseline, two decades after the faster branches',
      narrative: `ASI arrives around 2058 in the Baseline, so this window repeats, at the Baseline's slower institutional pace, what the Accelerated branch went through after 2040. The starting point in 2060 is a system with gene-edited and first-generation photosynthesis-enhanced crops, early nitrogen-fixing cereals, automated industrial farms and a small cultivated-protein sector. Superintelligent design then compresses the remaining biology: C4-like carbon concentration in C3 crops, fixation in all cereals, redesigned root and water systems and reproductive tolerance to 45 degrees Celsius are specified in the 2060s and, after seasons of trials and a regulatory system still built for the 2030s, adopted through the 2070s. By 2090 yields on good land are 60 to 90 percent above 2026, seasonal solar conversion is 2.5 to 3.5 percent, and water is the binding limit nearly everywhere. Synthetic nitrogen use falls by two thirds. Cultivated and fermented proteins reach 20 to 30 percent of animal protein by 2090 as plants designed after 2060 are built out, with livestock retained by preference and on marginal land. Cropland and pasture decline by 10 to 15 percent, and former pasture becomes forest and rewilded land managed for carbon under climate policies the atlas treats in its own field. Population passes its peak near 10.3 billion in the 2080s and begins to fall, so per capita food supply rises faster than production. Warming near or above 2 degrees Celsius still produces extreme seasons, but a system that can redesign a crop in a year and switch seed in three seasons no longer suffers multi-year shortfalls. Undernourishment falls below 100 million, almost entirely in areas of conflict or state failure. The Baseline's remaining gap to the index ceiling is institutional: seed systems, land tenure, extension and regulation still move at human speed, so a world that could feed twelve billion on half its current farmland feeds ten billion on most of it.`,
      dependencies: ['crispr-discovery', 'green-revolution', 'haber-bosch', 'mechanical-refrigeration', 'heavy-plough', 'fertile-crescent-agriculture'],
      uncertainties: [
        'The Baseline assumes ASI is deployed under stable institutions; disruption could either speed adoption or fragment the food system.',
        'Population could peak lower and earlier than the UN medium projection, reducing demand and the pressure to adopt.',
        'Water scarcity under a warmer climate could cap yields well below the photosynthetic gains.',
      ],
      indicators: [
        'Global synthetic nitrogen use below a third of its historical peak.',
        'World average cereal yield passing 1.6 times its 2026 level.',
        'Global agricultural land area down more than 10 percent from 2026.',
      ],
      confidence: 'low',
      confidenceJustification: 'Beyond 2060 the projection rests on biological limits and the scenario anchor rather than on any current programme. The direction is defensible; the magnitudes and timing are not.',
      sources: [
        { author: 'United Nations Department of Economic and Social Affairs', title: 'World Population Prospects 2024', publisher: 'United Nations', year: 2024 },
        { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2022: Impacts, Adaptation and Vulnerability. Working Group II Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2022 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'Agriculture as a managed planetary system: near-ceiling crops, shrinking farmland, rewilding',
      narrative: `Two decades after ASI, the Accelerated branch's food system is near its biological limits and its main questions are about land and purpose. Crops in 2090 convert 3 to 4 percent of seasonal sunlight into biomass, with C4 crops near 4.5 percent at the best sites, against the 4.6 and 6 percent ceilings; the remaining gap is the thermodynamics of the photosynthetic apparatus itself, which no design can remove. Yields are therefore two to two and a half times 2026 levels on land with adequate water, and the water and heat limits are managed by desalination where energy is cheap, by engineered water use efficiency, and by moving production toward regions that warming has made more favourable. Nitrogen and phosphorus cycles are closed: all major crops fix their own nitrogen, phosphorus is recovered from waste and mining declines, and Haber-Bosch survives only where ammonia is used as fuel. Livestock is a minority of animal protein; cultivated, fermented and plant-derived products supply 50 to 70 percent by 2090 in most regions, and the remaining animals are kept on land unsuited to crops or for cultural reasons. Agricultural land is 30 to 40 percent below its 2026 extent, with cropland concentrated on the most productive soils under automated management and most former pasture returned to forest, grassland and wetland. Controlled-environment farming produces most fresh vegetables and fruit for cities, running on solar at midday and on storage otherwise. Food production is fully automated, from seed to plate, and the sector employs almost no one in most countries; where smallholder farming persists it is by choice, supported by policy, not by necessity. Population is declining from its 2080s peak. Undernourishment is near zero except in conflict. The index approaches 70 by 2090; the remainder represents the thermodynamic ceiling and the choices about land that societies make.`,
      dependencies: ['crispr-discovery', 'green-revolution', 'haber-bosch', 'animal-domestication', 'fertile-crescent-agriculture'],
      uncertainties: [
        'How much land societies choose to release from farming is a political outcome that could range from almost none to more than half.',
        'Livestock could persist at scale by cultural preference even where cultivated protein is cheaper.',
        'Desalination for irrigation depends on energy costs decided in another field of this atlas.',
      ],
      indicators: [
        'Seasonal solar conversion above 3 percent measured in a commercial C3 crop over a full season.',
        'Livestock numbers below half of their 2026 level.',
        'Global agricultural land area below 70 percent of its 2026 extent.',
      ],
      confidence: 'low',
      confidenceJustification: 'Every quantity here sits at or near a physical ceiling, which makes the upper bounds firm, but the fraction of the ceiling that societies choose to use is unforecastable.',
      sources: [
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'What is the maximum efficiency with which photosynthesis can convert solar energy into biomass?', publisher: 'Current Opinion in Biotechnology', year: 2008 },
        { author: 'Food and Agriculture Organization of the United Nations', title: 'The State of the World\'s Land and Water Resources for Food and Agriculture: Systems at breaking point', publisher: 'FAO', year: 2021 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Food decoupled from land, climate and season, by choice as much as by design',
      narrative: `In the Discontinuous branch agriculture reached its designed form in the 2050s, and this window is about what a civilisation does with a food system that no longer binds. Crops sit close to their photosynthetic ceilings: 3.5 to 4 percent seasonal conversion for C3 designs and about 5 percent for C4, within roughly 20 percent of the theoretical limits, and water use efficiency near the physical limit set by the coupling of carbon dioxide uptake and transpiration. Fertiliser as a product no longer exists; nitrogen fixation and nutrient recycling are properties of the crop and the soil microbiome, both designed. Cultivated and fermented protein is the majority of animal protein by the 2070s and near 80 percent by 2090, produced in automated plants at costs comparable to flour; livestock persists at perhaps a fifth of its 2026 numbers, mostly as managed grazers in ecosystems. With yields two to three times 2026 levels and demand falling with population, agricultural land falls to less than half its 2026 extent, and the released land becomes the largest carbon and biodiversity project in history, managed by the same systems that manage farms. Some fresh food and most specialty crops are produced in closed systems near cities; some societies choose to keep open-field farming on more land than needed for reasons of landscape, culture and employment, which is the main reason the index stops short of 100. Direct synthesis of food from electricity, hydrogen and carbon dioxide via engineered microbes supplies feed, ingredients and the food of space and polar settlements, sidestepping photosynthesis where energy is cheaper than land. Hunger is an artefact of conflict and deliberate deprivation only. What is left of the field is ecology, culture and governance: how much of the Earth to farm, which crops and animals to keep for their own sake, and who decides.`,
      dependencies: ['state-of-the-field-2026', 'crispr-discovery', 'haber-bosch', 'animal-domestication', 'fertile-crescent-agriculture'],
      uncertainties: [
        'A superintelligent civilisation may allocate land and energy to purposes other than rewilding, so the released land may not become ecosystem.',
        'Electricity-to-food routes compete with photosynthesis on energy cost, which is set outside this field and could go either way.',
        'The share of people who continue to want farmed and animal foods is a cultural variable no model constrains.',
      ],
      indicators: [
        'Global agricultural land area below half its 2026 extent.',
        'Microbial protein from hydrogen and carbon dioxide above 10 percent of world protein feed.',
        'Livestock numbers below a quarter of 2026 levels.',
      ],
      confidence: 'low',
      confidenceJustification: 'This projection is bounded by biological limits and by the scenario anchor but has no empirical basis beyond them. It describes a ceiling, not a forecast of what will be chosen.',
      sources: [
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'Improving Photosynthetic Efficiency for Greater Yield', publisher: 'Annual Review of Plant Biology', year: 2010 },
        { author: 'Monica Crippa, Efisio Solazzo, Diego Guizzardi, Fabio Monforti-Ferrario, Francesco N. Tubiello and Adrian Leip', title: 'Food systems are responsible for a third of global anthropogenic GHG emissions', publisher: 'Nature Food', year: 2021 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2090-2126                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'agriculture-food',
      window: '2090-2126',
      branch: 'slow',
      headline: 'A century after gene editing: the Baseline converges on the biological ceiling',
      narrative: `By the last window of the atlas the Baseline has had almost seventy years of ASI-assisted design and the differences between branches are mostly about when things happened rather than what. Crops in the 2100s sit near their photosynthetic limits, 3.5 to 4 percent seasonal conversion for C3 and around 5 percent for C4, with water and temperature governing the rest; yields are two to three times 2026 levels on the best land. Nutrient cycles are closed; synthetic nitrogen fertiliser is a historical industry. Cultivated, fermented and plant-derived proteins supply most animal-type protein by 2126, with livestock kept by preference and for landscape management. Agricultural land is 40 to 50 percent below 2026, food production is fully automated, and controlled environments supply cities. Population, having peaked near 10.3 billion in the 2080s, is below 10 billion and falling, so per capita supply is ample even in the poorest regions. Undernourishment has been eliminated as a production problem; it persists only where violence prevents distribution. The remaining gap to the index ceiling (the Baseline reaches roughly 62 by 2126) is not technical. It reflects the photosynthetic thermodynamics that no design escapes, the water limits of a warmer planet whose climate this atlas treats separately, and deliberate choices: societies that keep more land in farming than they need, retain animal agriculture at scale, and regulate food biotechnology cautiously. The reasoning chain is straightforward. The limits in this field were quantified by 2021 (Zhu, Long and Ort for photosynthesis; Erisman and Smil for nitrogen; Humbird for cultivated cells), practice was within a factor of three of them by 2060, and a century is enough for even slow institutions to close most of the remaining gap. What no model predicts is the size of the population, its diet and its attachment to the land.`,
      dependencies: ['crispr-discovery', 'green-revolution', 'haber-bosch', 'plough', 'animal-domestication', 'fertile-crescent-agriculture'],
      uncertainties: [
        'Whether population falls slowly or quickly after 2090 dominates every per capita figure.',
        'Institutional continuity over a century is unknowable and the Baseline assumes it.',
        'Climate outcomes decided in other fields set the water limit that bounds yield here.',
      ],
      indicators: [
        'Synthetic nitrogen fertiliser production below 10 percent of its historical peak.',
        'World average seasonal solar conversion in cereals above 3 percent.',
        'Global agricultural land below 60 percent of its 2026 extent.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the biological limits are trustworthy. The projection describes convergence on those limits rather than events.',
      sources: [
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'What is the maximum efficiency with which photosynthesis can convert solar energy into biomass?', publisher: 'Current Opinion in Biotechnology', year: 2008 },
        { author: 'Vaclav Smil', title: 'Enriching the Earth: Fritz Haber, Carl Bosch, and the Transformation of World Food Production', publisher: 'MIT Press', year: 2001 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'Food as infrastructure: a designed biosphere, a small farmed footprint, a shrinking population',
      narrative: `The Accelerated branch enters the twenty-second century with a food system that has been near its biological limits since the 2080s. The final window brings the consequences of that state: agriculture is infrastructure, like water supply or the grid, and what changes is scale and purpose. Crops and the microbial systems around them are redesigned on cycles of a few years as climates shift, pathogens evolve and preferences change; each redesign takes a season or two to validate because that is how long a season is. Yields on farmed land are two and a half to three times 2026 levels, at seasonal conversion within about 15 percent of the Zhu, Long and Ort ceilings, and nearly all remaining variation comes from water and temperature. The farmed area is about half of 2026, concentrated where soil, water and climate are best, and the rest of the former agricultural landscape is managed ecosystem. Animal-type protein is mostly cultivated and fermented; livestock exist in the millions rather than billions, as part of managed ecosystems and by cultural choice. Electricity-to-food routes, in which microbes make protein and fat from hydrogen and carbon dioxide, supply a significant share of feed and ingredients, and all food for off-planet settlements. Population is falling slowly from its 2080s peak, and per capita food supply is not a constraint anywhere. The index reaches about 80 by 2126. The remaining 20 points are the photosynthetic and water ceilings, which cannot be crossed, plus the land that societies keep in traditional farming for reasons other than food. The uncertainties that matter here are not agricultural: the population trajectory, the climate the planet has by then, and whether the civilisation living on Earth in 2126 values farmed landscapes. The reasoning chain from 2026 is short: the limits were known, the design capability arrived in 2040, and ninety years is long enough for adoption, land tenure and diet to follow.`,
      dependencies: ['crispr-discovery', 'haber-bosch', 'animal-domestication', 'fertile-crescent-agriculture'],
      uncertainties: [
        'Population decline could be steep enough that farmland falls far below half of 2026 without any change in yield.',
        'The balance between photosynthetic and electricity-to-food production depends on energy prices set outside this field.',
        'Cultural attachment to farmed landscapes and animals could keep more of the system traditional than the index assumes.',
      ],
      indicators: [
        'Farmed area stable near half of 2026 for a decade.',
        'Livestock numbers below 10 percent of 2026.',
        'Electricity-to-food routes above 20 percent of world protein supply.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a limit-bounded description, not a forecast. The biological fixed points are secure; the social choices are not.',
      sources: [
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'Improving Photosynthetic Efficiency for Greater Yield', publisher: 'Annual Review of Plant Biology', year: 2010 },
        { author: 'United Nations Department of Economic and Social Affairs', title: 'World Population Prospects 2024', publisher: 'United Nations', year: 2024 },
      ],
    },
    {
      fieldId: 'agriculture-food',
      window: '2090-2126',
      branch: 'fast',
      headline: 'At the ceiling: agriculture as a solved problem and a cultural choice',
      narrative: `In the Discontinuous branch the food system has been at its physical ceiling since the 2070s, and the atlas's final window has little to add technically. Crops convert sunlight to biomass at 4 to 5.5 percent over a season, the practical maximum after the thermodynamics of light capture, carboxylation and respiration; the field-level gap to the theoretical values in Zhu, Long and Ort is a few tenths of a percent and reflects weather. Water is the only agronomic limit and is managed with desalination on cheap energy where societies choose to farm dry land. Nitrogen, phosphorus and carbon cycle within the system. Most protein and fat is produced without animals, much of it without plants, from electricity and carbon dioxide via engineered microbes; open-field agriculture continues on a fraction of its 2026 land, because photosynthesis on land is still the cheapest way to make carbohydrate at scale and because people want fields. Livestock exist as ecological and cultural animals. Off-planet food production, in orbital and lunar habitats, is closed-loop and uses the electricity-to-food routes. The index reads near 88 by 2126, and the remainder is definitional: the ceiling of 100 describes a world that farms only what it must at the thermodynamic limits with no hunger, and this branch keeps more land, animals and traditional practice than the minimum by choice. The reasoning is that after 2060 there was nothing left to improve in the biology; every subsequent change is about the size and preferences of the civilisation eating. Hunger exists only as a weapon. The questions that remain for agriculture in 2126 are whether a planet with a stable or declining population and unlimited food chooses to rewild most of its surface, to keep farming as a way of life, or both, and those are choices this atlas cannot forecast.`,
      dependencies: ['state-of-the-field-2026', 'crispr-discovery', 'haber-bosch', 'animal-domestication', 'fertile-crescent-agriculture'],
      uncertainties: [
        'How much of the Earth a superintelligent civilisation chooses to farm, and for whom, is not an agricultural question.',
        'Off-planet food systems at the assumed scale depend on space settlement decisions with no demonstrated basis.',
        'The physical ceiling itself could be revised if entirely synthetic photosystems exceed natural photosynthesis, though no such system has been demonstrated.',
      ],
      indicators: [
        'Commercial crops measured above 4 percent seasonal solar conversion over multiple years.',
        'Farmed land area stable or declining while food supply per person is constant.',
        'Closed-loop food production sustaining a permanent off-planet population.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window describes a system at biological ceilings; the numbers are limit-derived and the choices behind them are unforecastable.',
      sources: [
        { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'What is the maximum efficiency with which photosynthesis can convert solar energy into biomass?', publisher: 'Current Opinion in Biotechnology', year: 2008 },
        { author: 'Justus von Liebig', title: 'Die organische Chemie in ihrer Anwendung auf Agricultur und Physiologie', publisher: 'Vieweg', year: 1840 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 22, low: 21, high: 23 },
      { year: 2030, value: 24, low: 23, high: 25 },
      { year: 2040, value: 29, low: 26, high: 32 },
      { year: 2060, value: 38, low: 32, high: 45 },
      { year: 2090, value: 50, low: 40, high: 60 },
      { year: 2126, value: 62, low: 48, high: 75 },
    ],
    moderate: [
      { year: 2026, value: 22, low: 21, high: 23 },
      { year: 2030, value: 24, low: 23, high: 26 },
      { year: 2040, value: 32, low: 27, high: 37 },
      { year: 2060, value: 48, low: 38, high: 58 },
      { year: 2090, value: 68, low: 52, high: 80 },
      { year: 2126, value: 80, low: 62, high: 90 },
    ],
    fast: [
      { year: 2026, value: 22, low: 21, high: 23 },
      { year: 2030, value: 25, low: 23, high: 27 },
      { year: 2040, value: 36, low: 28, high: 44 },
      { year: 2060, value: 58, low: 42, high: 70 },
      { year: 2090, value: 76, low: 58, high: 88 },
      { year: 2126, value: 88, low: 68, high: 96 },
    ],
  },
  sources: [
    { author: 'Xin-Guang Zhu, Stephen P. Long and Donald R. Ort', title: 'What is the maximum efficiency with which photosynthesis can convert solar energy into biomass?', publisher: 'Current Opinion in Biotechnology', year: 2008 },
    { author: 'Paul F. South, Amanda P. Cavanagh, Helen W. Liu and Donald R. Ort', title: 'Synthetic glycolate metabolism pathways stimulate crop growth and productivity in the field', publisher: 'Science', year: 2019 },
    { author: 'Jan Willem Erisman, Mark A. Sutton, James Galloway, Zbigniew Klimont and Wilfried Winiwarter', title: 'How a century of ammonia synthesis changed the world', publisher: 'Nature Geoscience', year: 2008 },
    { author: 'Vaclav Smil', title: 'Enriching the Earth: Fritz Haber, Carl Bosch, and the Transformation of World Food Production', publisher: 'MIT Press', year: 2001 },
    { author: 'David Humbird', title: 'Scale-up economics for cultured meat', publisher: 'Biotechnology and Bioengineering', year: 2021 },
    { author: 'Intergovernmental Panel on Climate Change', title: 'Climate Change 2022: Impacts, Adaptation and Vulnerability. Working Group II Contribution to the Sixth Assessment Report', publisher: 'Cambridge University Press', year: 2022 },
    { author: 'FAO, IFAD, UNICEF, WFP and WHO', title: 'The State of Food Security and Nutrition in the World 2024', publisher: 'FAO', year: 2024 },
    { author: 'Food and Agriculture Organization of the United Nations', title: 'The State of World Fisheries and Aquaculture 2024: Blue Transformation in action', publisher: 'FAO', year: 2024 },
  ],
  lastReviewed: '2026-09-04',
};
