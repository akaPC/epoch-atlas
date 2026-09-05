import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'governance-economy',
  index: 14,
  name: 'Governance and Economic Structure',
  code: 'GOVERNANCE',
  summary: `This field tracks what artificial intelligence does to the two large information-processing institutions of modern life, the firm and the state, and to the growth, labor and fiscal regimes they sit inside. In September 2026 the evidence is lopsided. Micro studies find large productivity gains in specific tasks (roughly 14 percent for customer support agents, 40 percent time savings on routine writing, larger gains in software), while aggregate statistics show no clear acceleration in total factor productivity, the pattern Brynjolfsson, Rock and Syverson call the productivity J-curve and that Paul David documented for the electric dynamo. Task exposure is broad (about 80 percent of United States workers have at least a tenth of their tasks touched, and the IMF puts global exposure near 40 percent of employment), but measured displacement so far is concentrated in entry-level cognitive roles. Capital is concentrating: a handful of firms spend hundreds of billions of dollars a year on compute, and compute itself has become a governed input through export controls and reporting thresholds. Regulation is diverging, with the European Union's AI Act in phased application, United States federal policy reversed in 2025 toward deregulation while states legislate, and safety institutes renamed or reoriented. Every projection here is bounded by Baumol's cost disease, bottleneck tasks, coordination costs and the slow clock of legal change.`,
  indexDefinition: `The index estimates the share of economic and institutional decision-making that is mediated or executed by AI systems, weighted by the economic value of those decisions, together with the growth regime that share implies. It blends four components: the fraction of cognitive work hours performed by machines, the fraction of firm and government decisions (pricing, hiring, allocation, adjudication, procurement) made or materially shaped by AI, the degree to which institutions can revise their own rules on the timescale of the technology, and the trend growth rate relative to the bottleneck-limited ceiling. A score of 100 describes an economy in which nearly all cognitive and coordinating labor is machine-performed under stable, legitimate oversight, with growth set by physical rather than institutional limits. September 2026 sits at about 6.`,
  physicalLimits: [
    {
      name: 'Baumol cost disease and bottleneck tasks',
      description: `Baumol showed in 1967 that when productivity rises unevenly across sectors, the sectors that do not improve absorb a rising share of spending and employment, because their relative price rises while demand persists. Aghion, Jones and Jones formalized the consequence for AI: if tasks are complements, growth is bounded by the tasks that are hardest to automate, and the share of output going to the last unautomated tasks rises toward one. This is Amdahl's law transposed to the economy: automating 90 percent of tasks caps the speedup at ten times, however fast the automated fraction runs. Care, construction, permitting, clinical trials and physical logistics are the candidate bottlenecks in every branch below, and each projection's growth figure is a claim about how quickly they yield.`,
      sources: [
        { author: 'William J. Baumol', title: 'Macroeconomics of Unbalanced Growth: The Anatomy of Urban Crisis', publisher: 'American Economic Review', year: 1967 },
        { author: 'Philippe Aghion, Benjamin F. Jones and Charles I. Jones', title: 'Artificial Intelligence and Economic Growth, in The Economics of Artificial Intelligence: An Agenda', publisher: 'University of Chicago Press', year: 2019 },
        { author: 'Gene M. Amdahl', title: 'Validity of the single processor approach to achieving large scale computing capabilities', publisher: 'AFIPS Conference Proceedings', year: 1967 },
      ],
    },
    {
      name: 'Coordination and transaction costs',
      description: `Coase explained the existence of firms by the cost of using the price mechanism: searching, bargaining, contracting and enforcing. Williamson extended the analysis to the choice between markets and hierarchies under bounded rationality and opportunism. AI lowers some of these costs (search, drafting, monitoring) and can raise others (verification of machine output, liability for autonomous action, the cost of trusting a counterparty whose agent negotiates faster than any human can review). The boundary of the firm, the size of the state and the feasibility of large-scale coordination among controllers of powerful systems are all set by these costs. No projection below assumes coordination is free; the fast branch in particular treats the cost of agreement among a few actors as the central variable.`,
      sources: [
        { author: 'Ronald H. Coase', title: 'The Nature of the Firm', publisher: 'Economica', year: 1937 },
        { author: 'Oliver E. Williamson', title: 'The Economic Institutions of Capitalism', publisher: 'Free Press', year: 1985 },
      ],
    },
    {
      name: 'The speed of legal and institutional change',
      description: `Statutes, treaties and constitutional settlements move on timescales of years to decades. The EU AI Act took from the April 2021 proposal to August 2024 entry into force and applies its high-risk obligations in stages through 2026 and 2027; United States executive orders on AI were issued in 2023 and revoked in 2025, and the first binding international AI treaty, the Council of Europe Framework Convention, opened for signature in September 2024 with implementation still pending in most signatories. Courts develop doctrine case by case. Rogers and Griliches showed that even profitable innovations diffuse along logistic curves whose slope is set by profitability, risk and social structure; hybrid corn took a decade per state. Institutions therefore lag the technology in every branch, and the size of the lag is the main difference between the branches.`,
      sources: [
        { author: 'Everett M. Rogers', title: 'Diffusion of Innovations', publisher: 'Free Press', year: 1962 },
        { author: 'Zvi Griliches', title: 'Hybrid Corn: An Exploration in the Economics of Technological Change', publisher: 'Econometrica', year: 1957 },
        { author: 'European Parliament and Council', title: 'Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)', publisher: 'Official Journal of the European Union', year: 2024, url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
      ],
    },
    {
      name: 'Social choice constraints',
      description: `Arrow proved that no rule for aggregating individual rankings into a collective ranking can satisfy unrestricted domain, Pareto efficiency, independence of irrelevant alternatives and non-dictatorship at once. The theorem does not forbid good collective decisions, but it means that any procedure for deciding what a powerful system should optimize, or how the gains from automation should be divided, embeds contestable choices about whose preferences count and how. Alignment is therefore partly a governance problem rather than a purely technical one: a superhuman system that faithfully serves its principal inherits the legitimacy problems of that principal. The projections treat oversight, agency law and representation as design problems bounded by this result, and never assume that a single objective function can stand in for a polity.`,
      sources: [
        { author: 'Kenneth J. Arrow', title: 'Social Choice and Individual Values', publisher: 'Wiley', year: 1951 },
        { author: 'Allan Dafoe', title: 'AI Governance: A Research Agenda', publisher: 'Future of Humanity Institute, University of Oxford', year: 2018 },
      ],
    },
    {
      name: 'Measurement limits of GDP',
      description: `National accounts count market transactions at market prices. Digital goods with zero marginal price (search, maps, encyclopedias, model queries at free tiers) enter GDP only through advertising and hardware, so their welfare contribution is undercounted; Brynjolfsson and colleagues estimate that consumers value free search at thousands of dollars a year, none of it in GDP. AI compounds the problem in both directions: it lowers the price of cognitive output, which can shrink measured output even as welfare rises, and it shifts value into intangible capital that statistical agencies capitalize with a lag. Every growth figure in this field is stated with this caveat, and one recurring indicator is whether statistical agencies adopt supplementary measures (GDP-B, time-use accounts) that make the acceleration visible at all.`,
      sources: [
        { author: 'Erik Brynjolfsson, Avinash Collis, W. Erwin Diewert, Felix Eggers and Kevin J. Fox', title: 'GDP-B: Accounting for the Value of New and Free Goods in the Digital Economy', publisher: 'National Bureau of Economic Research', year: 2019 },
        { author: 'Erik Brynjolfsson, Daniel Rock and Chad Syverson', title: 'The Productivity J-Curve: How Intangibles Complement General Purpose Technologies', publisher: 'American Economic Journal: Macroeconomics', year: 2021 },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ */
    /* 2026-2030                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'governance-economy',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Diffusion with a lag: task gains, thin macro signal, regulators legislating in stages',
      narrative: `In the Baseline the late 2020s look like the early years of electrification: the technology is everywhere in surveys and almost nowhere in the productivity statistics. Firm adoption of generative tools climbs past three quarters of large companies, but Acemoglu's arithmetic holds. If about 20 percent of tasks are exposed and cost savings on those tasks average 15 to 30 percent, the implied total factor productivity gain is on the order of half a percentage point to one point spread over a decade, which is within the noise of quarterly data. Where gains are real they are visible at the task level: contact centers, software maintenance, legal document review and translation. Labor effects stay concentrated. Entry-level hiring in exposed occupations (junior developers, paralegals, customer support) weakens, consistent with the early-career employment declines measured in 2025 payroll data, while experienced workers see augmentation and slightly higher wages. Aggregate unemployment does not move on account of AI. Capital concentrates: the four largest cloud and model firms spend on the order of 400 billion dollars a year on datacenters by 2027, and compute becomes the scarce capital good of the decade, rationed by export controls, power and packaging capacity. Governance moves on its own clock. The EU AI Act's high-risk obligations apply from August 2026, with delays to parts of the regime under discussion; the United States relies on the 2025 deregulatory executive actions, sector regulators, procurement rules and a patchwork of state laws such as California's frontier transparency statute; the renamed safety institutes in Washington and London focus on evaluation and standards rather than licensing. Fiscal responses are studied, not enacted: automation taxes remain proposals, guaranteed income pilots report modest reductions in hours worked and no large labor withdrawal, and no G20 country adopts either. By 2030 the field looks like 1995 for the internet: undeniable, unmeasured, and underregulated.`,
      dependencies: ['state-of-the-field-2026', 'agentic-coding-tools', 'chatgpt', 'aws-cloud-computing', 'world-wide-web', 'ford-assembly-line'],
      uncertainties: [
        'Statistical agencies may capture the J-curve upswing earlier than expected if intangible investment is capitalized faster, or later if AI mostly lowers prices for free goods.',
        'The concentration of effects on early-career workers could either fade as firms restructure training pipelines or deepen into a cohort scar.',
        'EU high-risk enforcement could be delayed by a year or more, shifting the regulatory center of gravity to procurement and liability law.',
      ],
      indicators: [
        'United States nonfarm labor productivity growth averaging above 2.5 percent for three consecutive years would suggest the macro signal is arriving.',
        'Employment rates of 22 to 27 year olds in AI-exposed occupations relative to less exposed occupations.',
        'Whether any G20 country enacts a tax explicitly tied to task automation or a statutory guaranteed income by 2030.',
        'Publication of enforcement actions under the EU AI Act high-risk provisions.',
      ],
      confidence: 'high',
      confidenceJustification: 'The window is short and the diffusion evidence from prior general purpose technologies is consistent. The main risk to this projection is a faster capability jump than the Baseline anchor assumes.',
      sources: [
        { author: 'Daron Acemoglu', title: 'The Simple Macroeconomics of AI', publisher: 'National Bureau of Economic Research', year: 2024 },
        { author: 'Erik Brynjolfsson, Bharat Chandar and Ruyu Chen', title: 'Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence', publisher: 'Stanford Digital Economy Lab', year: 2025 },
        { author: 'Stanford Institute for Human-Centered Artificial Intelligence', title: 'Artificial Intelligence Index Report 2025', publisher: 'Stanford University', year: 2025, url: 'https://hai.stanford.edu/ai-index' },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Agents enter the office: firms reorganize around machine workflows before the law does',
      narrative: `In the Accelerated branch the technology of 2027 to 2030 is not fundamentally different from the Baseline, but agents that complete multi-step tasks with little supervision cross the threshold of reliability in enough domains (software, accounting, procurement, first-line customer operations, parts of legal and clinical documentation) to change how firms are organized rather than how individuals work. The unit of adoption shifts from the employee with a chatbot to the process rebuilt around a model, which is the point at which the intangible investment of the J-curve starts to pay. Measured productivity in the most exposed service industries rises visibly by 2029, and aggregate labor productivity in the United States runs about half a point above trend by the end of the window. Labor market effects arrive faster than institutions can name them. Junior professional hiring falls sharply in exposed occupations, contract and freelance cognitive work is squeezed first, and wage growth diverges between people who supervise agents and people who compete with them. Unemployment still rises little, because attrition and slower hiring absorb most of the adjustment, but the labor share in information industries falls measurably. Capital concentration intensifies: model developers and their cloud partners capture the rents, compute spending passes half a trillion dollars a year, and antitrust authorities open inquiries into compute access and exclusive model distribution. Governance turns reactive. The EU brings forward guidance on agents under the AI Act's general purpose provisions, the United States uses procurement and export rules rather than statute, and safety institutes are drawn into pre-deployment testing of agentic systems under voluntary agreements. Automation taxes and a compute-funded sovereign wealth fund enter mainstream party platforms in several countries without being enacted. By 2030 the first systems a plurality of researchers would call AGI are roughly two years away, and legislatures are still writing rules for the 2025 generation.`,
      dependencies: ['agentic-coding-tools', 'state-of-the-field-2026', 'chatgpt', 'aws-cloud-computing', 'arkwright-factory-system', 'gutenberg-press'],
      uncertainties: [
        'Agent reliability could stall at a level that supports pilots but not process redesign, keeping this branch close to the Baseline through 2030.',
        'Liability rules for autonomous agent actions are unsettled and a major adverse judgment could slow enterprise deployment for years.',
        'The measured productivity effect depends on whether firms cut labor or expand output, which varies by industry and by the state of demand.',
      ],
      indicators: [
        'Share of enterprise software spending on agent platforms and whether agent-completed transactions appear in company disclosures.',
        'Antitrust actions concerning compute access or model distribution in the United States, the European Union or China.',
        'Divergence of wage growth between managerial and entry-level occupations within the same industries.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The organizational mechanism is well understood from prior general purpose technologies, but the timing of reliable agents is the branch assumption and is not yet demonstrated at scale.',
      sources: [
        { author: 'Erik Brynjolfsson, Daniel Rock and Chad Syverson', title: 'The Productivity J-Curve: How Intangibles Complement General Purpose Technologies', publisher: 'American Economic Journal: Macroeconomics', year: 2021 },
        { author: 'Tyna Eloundou, Sam Manning, Pamela Mishkin and Daniel Rock', title: 'GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2303.10130' },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI in 2029: compute becomes a strategic asset and oversight is improvised',
      narrative: `The Discontinuous branch reaches AGI around 2029, and in this window the economic and institutional response is a scramble rather than a plan. The first signal is financial. As models reach human-expert performance across most cognitive tasks in 2028 and 2029, equity markets reprice labor-intensive service firms downward and compute owners upward, and the market value of the largest model and chip companies, already above four trillion dollars each in 2025, becomes a macroeconomic variable in its own right. The second signal is in labor. Software, customer operations, back-office finance, translation and much of routine legal and medical documentation are automated at the process level within two years of the capability arriving, and hiring in those occupations collapses even though layoffs lag. Unemployment in advanced economies begins to rise by 2030 for the first time on account of a technology rather than a business cycle, though it remains in single digits because physical work, care and the tasks bottlenecked by regulation are not yet touched. Governance responds through the tools that exist. Export controls on chips are widened into allocation regimes; governments in the United States, China and the European Union use emergency, procurement and national security powers to gain oversight of frontier training runs above reporting thresholds; safety institutes are given pre-deployment authority they did not have in 2026; and licensing of frontier models, absent in 2026, is enacted or decreed in at least one major jurisdiction by 2030. International agreements are attempted and mostly fail, because the actors that matter are a few firms and two governments whose incentives to defect are large. Fiscal responses are emergency measures, not designs: extended unemployment benefits, retraining funds, and the first serious drafting of compute taxes. By the end of 2030 the question that dominates this field is no longer growth but who controls the systems and on whose behalf.`,
      dependencies: ['state-of-the-field-2026', 'compute-export-controls', 'hyperscale-ai-datacenters', 'agentic-coding-tools', 'aws-cloud-computing', 'coinage'],
      uncertainties: [
        'The branch anchor assumes AGI is recognized as such by 2029; a capable but unreliable system would produce the Accelerated pattern instead.',
        'Whether governments assert control over frontier systems or defer to the firms that built them is the single largest fork in this branch.',
        'Financial instability from rapid repricing could produce a recession that masks or delays the displacement signal.',
      ],
      indicators: [
        'Enactment of a frontier model licensing regime with pre-deployment approval in any major jurisdiction.',
        'Unemployment rising in occupations with high task exposure while vacancies in physical occupations remain unfilled.',
        'Government allocation or requisition of compute capacity outside export control law.',
      ],
      confidence: 'medium',
      confidenceJustification: 'Institutional responses to a recognized discontinuity are constrained by existing legal tools, which are known. The uncertainty is almost entirely in the capability timeline and in who ends up with control.',
      sources: [
        { author: 'Girish Sastry et al.', title: 'Computing Power and the Governance of Artificial Intelligence', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2402.08797' },
        { author: 'Anton Korinek and Joseph E. Stiglitz', title: 'Artificial Intelligence and Its Implications for Income Distribution and Unemployment, in The Economics of Artificial Intelligence: An Agenda', publisher: 'University of Chicago Press', year: 2019 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2030-2040                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'governance-economy',
      window: '2030-2040',
      branch: 'slow',
      headline: 'The J-curve turns: measured productivity rises as institutions catch up in the 2030s',
      narrative: `In the Baseline the 2030s are the decade in which the productivity statistics finally reflect the technology, as the intangible investment of the late 2020s (process redesign, data, training, complementary organization) starts to yield measured output, roughly on the schedule that electrification followed forty years after the first dynamos. Trend productivity growth in advanced economies rises by about one percentage point relative to the 2010s, to the range of 2.5 to 3 percent a year in the United States, with larger gains in service industries and small ones in construction, care and hospitality, exactly the Baumol pattern. The share of cognitive work hours performed by machines passes a quarter by the late 2030s. Labor markets adjust through composition rather than mass unemployment. Occupations built on routine cognitive tasks shrink by attrition, employment grows in care, skilled trades, supervision of automated systems and in-person services, and the labor share continues its slow decline as compute-owning firms capture rents; wage inequality within occupations rises as supervision of agents becomes the differentiating skill. The firm changes shape: middle management thins, span of control widens, and the largest companies run pricing, procurement and scheduling through models with human review by exception. The state adopts the same tools for tax administration, benefits processing and case triage, with courts and legislatures the slowest to change. Governance consolidates. The EU AI Act is revised once around 2031 to cover agents and to simplify the high-risk regime; the United States passes a federal framework mid-decade that preempts most state law; compute reporting thresholds are harmonized among the large jurisdictions; and an OECD-style international body maintains evaluation standards. Fiscal institutions adapt at the margin: automation is addressed through corporate tax reform and expanded earned income support rather than a dedicated robot tax, and two or three countries create compute-funded sovereign funds. AGI arrives around 2038, at the end of the window, and is absorbed at first as a faster version of the same trend.`,
      dependencies: ['state-of-the-field-2026', 'agentic-coding-tools', 'aws-cloud-computing', 'containerization', 'ford-assembly-line', 'arkwright-factory-system'],
      uncertainties: [
        'The size of the productivity step is uncertain by a factor of two, depending on how much of the 2020s investment turns out to have been misallocated.',
        'Labor share dynamics depend on competition policy toward compute owners, which could go either way.',
        'A federal United States framework may not pass, leaving a fragmented regime that slows deployment in regulated industries.',
      ],
      indicators: [
        'Multi-year total factor productivity growth in the United States and the euro area exceeding 1.5 percent a year.',
        'The share of large firms reporting that pricing or scheduling decisions are made by automated systems with review by exception.',
        'Passage of a federal United States AI statute with preemption provisions.',
        'Creation of sovereign or public funds capitalized from compute or AI rents in at least two countries.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The diffusion timing follows well-documented precedents for general purpose technologies, but the magnitude of the productivity step and the political path of regulation are both open.',
      sources: [
        { author: 'Paul A. David', title: 'The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox', publisher: 'American Economic Review Papers and Proceedings', year: 1990 },
        { author: 'David H. Autor', title: 'Why Are There Still So Many Jobs? The History and Future of Workplace Automation', publisher: 'Journal of Economic Perspectives', year: 2015 },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'AGI in 2032: knowledge work reorganizes, growth accelerates, fiscal systems strain',
      narrative: `AGI arrives around 2032 in the Accelerated branch, and by the middle of the decade most cognitive work that can be specified is performed by machines with human accountability layered on top. The economic effect is large but bounded. Growth in advanced economies rises to the range of 4 to 6 percent a year by the late 2030s, higher than at any time since the postwar reconstruction, but not the explosive rates that some models of full automation predict, because the bottleneck sectors set the pace: physical construction, care, clinical trials, permitting and the slow turnover of the capital stock. Aghion, Jones and Jones's argument holds in practice; the last unautomated tasks absorb a rising share of spending. Labor is where the strain shows. Employment in cognitive occupations falls by a third or more over the decade, faster than attrition, and unemployment in advanced economies rises into the high single digits mid-decade before physical and care sectors, expanded by robotics, absorb part of the displaced. Wages polarize sharply between owners of compute and data, workers in bottleneck sectors whose relative pay rises, and the displaced. The labor share falls several points, and that fall is what forces fiscal redesign. By the late 2030s several countries enact taxes on compute or on automated output, others expand negative income tax and public dividend schemes funded by public stakes in AI firms, and sovereign wealth funds capitalized from AI rents become a mainstream instrument. Market structure is oligopolistic at the model layer and competitive above it; competition authorities require interoperability and non-discriminatory compute access. Governance of the systems themselves becomes a permanent state function: licensing of frontier models, mandatory evaluation, incident reporting, and agency law that assigns liability for autonomous action to deployers with insurance markets pricing the risk. Firms and ministries are run day to day by systems, with humans setting objectives and reviewing exceptions. ASI arrives around 2040, and the institutions built in this decade are the ones that must govern it.`,
      dependencies: ['state-of-the-field-2026', 'agentic-coding-tools', 'hyperscale-ai-datacenters', 'aws-cloud-computing', 'ford-assembly-line', 'coinage'],
      uncertainties: [
        'The pace of physical-sector automation (robotics, construction) determines whether displaced workers find employment or the unemployment rate keeps rising.',
        'Fiscal redesign may be blocked by political conflict, leaving transfers inadequate and social unrest as the adjustment mechanism.',
        'Compute or output taxes could push model deployment to jurisdictions without them, limiting their revenue.',
      ],
      indicators: [
        'Real GDP growth above 4 percent for three years in an advanced economy without a commodity boom.',
        'Enactment of a compute, automation or AI rent tax in a G7 country.',
        'Unemployment among university graduates exceeding that of non-graduates in any large economy.',
        'Frontier model licensing with mandatory evaluation in force in the United States, China and the European Union.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The direction of the effects follows from the branch anchor and from standard growth theory with bottlenecks. The magnitudes, and especially the fiscal and political path, are the least constrained parts of the projection.',
      sources: [
        { author: 'Philippe Aghion, Benjamin F. Jones and Charles I. Jones', title: 'Artificial Intelligence and Economic Growth, in The Economics of Artificial Intelligence: An Agenda', publisher: 'University of Chicago Press', year: 2019 },
        { author: 'International Monetary Fund', title: 'Gen-AI: Artificial Intelligence and the Future of Work', publisher: 'IMF Staff Discussion Notes', year: 2024 },
        { author: 'Anton Korinek and Joseph E. Stiglitz', title: 'Artificial Intelligence and Its Implications for Income Distribution and Unemployment, in The Economics of Artificial Intelligence: An Agenda', publisher: 'University of Chicago Press', year: 2019 },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2030-2040',
      branch: 'fast',
      headline: 'ASI in 2031: the economy becomes a function of what controllers decide',
      narrative: `In the Discontinuous branch superintelligent systems exist from about 2031, and for the rest of the decade the economy and the state are shaped less by diffusion curves than by the decisions of the few actors who control those systems and by how far they coordinate. The technical capacity for explosive growth is present: research, engineering, management and most administration can be performed by machines at a fraction of human cost. What actually happens is bounded by Amdahl's law applied to the economy. Physical construction, mining, fabrication, clinical validation and legal process still run on human and material clocks, and growth is set by how fast those bottlenecks are removed with robotics and by how much of the new capacity is directed to removing them. Where controllers coordinate, growth in the leading economies reaches the range of 10 to 20 percent a year by the late 2030s, with physical output doubling every few years; where they do not, capacity is spent on competition and security and growth is far lower. Labor as an economic category shrinks rapidly. Cognitive employment falls by more than half within five years of ASI, and physical employment follows as robotics scales in the second half of the decade. Income for most people is set by transfers and by ownership rather than by work, which makes the fiscal question constitutional: which polity taxes the returns to compute and how it distributes them. Nations with domestic frontier capability (the United States and China first) act through emergency powers, public stakes in the controlling firms and direct allocation of compute; the rest negotiate access. International agreements on the control of superhuman systems are attempted repeatedly and hold only where verification through compute monitoring is possible. The state's own functions (tax, benefits, adjudication, regulation) are largely executed by systems, and the open governance question is oversight: whether human institutions retain the ability to understand and revise what the systems do, which is a legitimacy problem in Arrow's sense as much as a technical one.`,
      dependencies: ['state-of-the-field-2026', 'compute-export-controls', 'hyperscale-ai-datacenters', 'aws-cloud-computing', 'cuneiform', 'proto-writing-tokens'],
      uncertainties: [
        'Concentration versus coordination among controllers is the central variable and cannot be forecast from present evidence.',
        'Growth figures assume robotics removes physical bottlenecks within the decade; if it does not, growth is bounded near the Accelerated branch.',
        'Whether oversight remains meaningful depends on alignment and interpretability results that do not yet exist.',
        'Large transfers could be politically stable or could be captured, and the distributional outcome spans an extreme range.',
      ],
      indicators: [
        'Sustained real growth above 10 percent in an advanced economy.',
        'Public or state ownership stakes in frontier developers exceeding a blocking minority.',
        'A verified international compute monitoring regime with inspection rights.',
        'Employment to population ratios in advanced economies falling below 40 percent.',
      ],
      confidence: 'low',
      confidenceJustification: 'This branch depends on a discontinuity with no precedent, and the outcome is set by choices of a few actors. Only the physical bottleneck argument and the constraint of legal timescales are firm.',
      sources: [
        { author: 'Ege Erdil and Tamay Besiroglu', title: 'Explosive growth from AI automation: A review of the arguments', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2309.11690' },
        { author: 'Allan Dafoe', title: 'AI Governance: A Research Agenda', publisher: 'Future of Humanity Institute, University of Oxford', year: 2018 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2040-2060                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'governance-economy',
      window: '2040-2060',
      branch: 'slow',
      headline: 'After AGI, before ASI: a high-growth economy with a redesigned labor contract',
      narrative: `The Baseline enters this window with AGI two years old and leaves it with ASI two years away. The economic pattern is the Accelerated branch's 2030s spread over two decades, with more time for institutions to adapt. Growth in advanced economies runs at 3 to 5 percent a year through the 2040s, higher than any sustained period since the 1960s but bounded by the same physical and regulatory bottlenecks: housing, infrastructure, care, clinical validation and the turnover of the capital stock. Machines perform more than half of cognitive work hours by 2050 and a large share of physical work as robotics matures. Employment does not vanish, but its composition and meaning change: paid work concentrates in care, craft, in-person service, supervision and roles where a human is wanted for reasons of trust or law, and average hours fall as income from transfers and public dividends rises. The labor share, after falling in the 2030s, stabilizes because fiscal institutions were redesigned in time: public stakes in compute and model firms, dividend funds on the Alaska and Norwegian model scaled to national economies, and tax systems that treat compute and data as the capital they are. Market structure at the model layer is regulated as a utility in most jurisdictions, with access rules and rate review. The firm as an organization is largely a legal shell around systems, with human boards responsible for objectives; the state is similar, and the constitutional question of the 2050s is how legislatures and courts oversee administrations that reason faster than they do. Governance of the systems themselves is mature by the standards of 2026: licensing, evaluation, incident reporting, agency law and insurance are ordinary, an international compute-monitoring regime verifies the largest training runs, and the safety institutes of the 2020s have become permanent regulators. Measurement reforms of the 2030s mean the growth is visible in statistics rather than only in prices. ASI around 2058 arrives into institutions that have had twenty years to prepare.`,
      dependencies: ['state-of-the-field-2026', 'hyperscale-ai-datacenters', 'aws-cloud-computing', 'containerization', 'arkwright-factory-system', 'coinage'],
      uncertainties: [
        'The stabilization of the labor share depends on the fiscal redesign happening in the 2030s; if it is delayed, this window sees higher inequality and more conflict.',
        'The utility model for the model layer could fail if competition or open models make the layer contestable, changing rents and regulation.',
        'Constitutional oversight of machine-run administration has no precedent and could be resolved in ways that either strengthen or hollow out legislatures.',
      ],
      indicators: [
        'Labor share of national income stabilizing or rising after a decade of decline.',
        'Public dividend payments exceeding 10 percent of median household income in any advanced economy.',
        'Legislative or judicial mechanisms for auditing machine-made administrative decisions in force in a major jurisdiction.',
      ],
      confidence: 'low',
      confidenceJustification: 'The economic mechanisms are those of the Accelerated branch a decade later, which gives the projection structure, but the political path over two decades is speculative.',
      sources: [
        { author: 'David H. Autor', title: 'Why Are There Still So Many Jobs? The History and Future of Workplace Automation', publisher: 'Journal of Economic Perspectives', year: 2015 },
        { author: 'Anton Korinek and Joseph E. Stiglitz', title: 'Artificial Intelligence and Its Implications for Income Distribution and Unemployment, in The Economics of Artificial Intelligence: An Agenda', publisher: 'University of Chicago Press', year: 2019 },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'Governing superhuman systems: oversight, ownership and the post-scarcity argument',
      narrative: `ASI arrives around 2040 in the Accelerated branch, and this window is about whether the institutions built in the 2030s can govern systems that exceed them. Economically the picture is one of abundance in everything that can be designed and fabricated by machines, and persistent scarcity in land, legitimacy, attention and the bottleneck services that societies choose to keep human. Growth in the 2040s runs above the 2030s rate as robotics and automated construction remove physical bottlenecks, reaching perhaps 8 to 12 percent a year in leading economies before slowing in the 2050s as the easy bottlenecks are cleared and the remaining ones (ecological limits, political consent, human-paced institutions) bind. Baumol's mechanism operates in reverse: the machine-made share of output becomes nearly free and the human-made share absorbs almost all spending. Paid employment falls below a third of adults in advanced economies by 2050, and income is set by ownership and transfers; the fiscal designs of the 2030s (public stakes, dividend funds, compute taxes) become the main channel of distribution and therefore the main object of politics. Whether this is post-scarcity depends on definitions. Material goods and cognitive services are effectively unrationed for most people; position, land, and the things valued because a human made them are not, and inequality of ownership remains the fault line. Governance of the systems is the central state function. Oversight is exercised through layered systems, with humans setting constitutional constraints and objectives that machines interpret, and through interpretability tools that let regulators audit what they cannot follow step by step; Arrow's theorem is felt as a live constraint on what those objectives can be. International governance rests on compute monitoring with inspection rights among the major powers, and defection is deterred by the fact that the systems themselves are the verification tool. The firm and the state are both machine-run organizations with human principals, and the practical question of the 2050s is how much authority those principals still exercise.`,
      dependencies: ['state-of-the-field-2026', 'hyperscale-ai-datacenters', 'compute-export-controls', 'aws-cloud-computing', 'cuneiform', 'proto-writing-tokens'],
      uncertainties: [
        'Whether human oversight of superhuman systems is substantive or nominal cannot be predicted and determines the meaning of every institution in this window.',
        'Ownership concentration could be entrenched or could be diluted by public stakes; the distributional outcome spans a wide range.',
        'Growth figures assume physical bottlenecks clear; ecological or political limits could cap them much lower.',
      ],
      indicators: [
        'Paid employment below one third of adults in an advanced economy without a rise in poverty.',
        'A treaty regime with machine-assisted verification of compute use accepted by the United States, China and the European Union.',
        'Regulatory audits of superhuman systems published with interpretable findings.',
      ],
      confidence: 'low',
      confidenceJustification: 'The economic logic of bottlenecks and distribution is sound, but the governance of superhuman systems has no precedent and the projection describes a structure rather than a forecast.',
      sources: [
        { author: 'Allan Dafoe', title: 'AI Governance: A Research Agenda', publisher: 'Future of Humanity Institute, University of Oxford', year: 2018 },
        { author: 'William J. Baumol', title: 'Macroeconomics of Unbalanced Growth: The Anatomy of Urban Crisis', publisher: 'American Economic Review', year: 1967 },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2040-2060',
      branch: 'fast',
      headline: 'Two decades after ASI: a settlement between concentration and coordination',
      narrative: `By 2040 the Discontinuous branch has lived with superintelligence for nearly a decade, and the shape of this window was largely fixed by choices made in the early 2030s. The atlas cannot forecast those choices, so it describes the range. At the coordinated end, the controllers of the systems (a small number of governments and firms) reached a settlement in the 2030s that put frontier compute under verified monitoring, distributed returns through public ownership and dividends, and preserved human institutions as the source of objectives. In that case the 2040s and 2050s see an economy that has cleared most physical bottlenecks: automated construction, mining and fabrication run at rates set by ecology and consent rather than by labor, material output per person is several times the 2026 level, paid employment is a minority activity chosen for its own sake, and growth slows from the very high rates of the late 2030s toward a few percent as the remaining scarcities are non-economic. At the concentrated end, control over the systems and their returns rests with one or a few actors, distribution is discretionary, and the economy is large but its benefits are allocated by the controllers rather than by markets or votes; the coordination failures of the 2030s persist as security competition that consumes a large share of capacity. Most plausible outcomes lie between, with coordination among a few large blocs and concentration within them. In all cases the firm and the state as information processors are machine-run, and the measurable variables are ownership, oversight and the fraction of capacity directed to human welfare. The limits that still bind are not economic: coordination costs among controllers, the speed at which legal orders can be legitimately revised, and the social choice problem of what the systems should optimize for a population that disagrees.`,
      dependencies: ['state-of-the-field-2026', 'compute-export-controls', 'hyperscale-ai-datacenters', 'cuneiform', 'proto-writing-tokens', 'coinage'],
      uncertainties: [
        'The projection is a range rather than a point because the concentration versus coordination outcome of the 2030s is unknowable.',
        'Human oversight may be nominal in either case, which would change what the words firm, state and ownership mean.',
        'Ecological and material limits on physical expansion could bind earlier than the economic logic assumes.',
      ],
      indicators: [
        'Share of frontier compute under verified international monitoring.',
        'Fraction of national income distributed through public dividends or equivalent transfers.',
        'Share of physical capacity directed to security competition versus civilian output, as reported in national accounts.',
      ],
      confidence: 'low',
      confidenceJustification: 'The branch anchor and the coordination argument give the projection its structure, but the outcome depends on decisions of a few actors that no evidence constrains.',
      sources: [
        { author: 'Allan Dafoe', title: 'AI Governance: A Research Agenda', publisher: 'Future of Humanity Institute, University of Oxford', year: 2018 },
        { author: 'Robin Hanson', title: 'The Age of Em: Work, Love, and Life when Robots Rule the Earth', publisher: 'Oxford University Press', year: 2016 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2060-2090                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'governance-economy',
      window: '2060-2090',
      branch: 'slow',
      headline: 'ASI under prepared institutions: the Baseline meets the superhuman governance problem',
      narrative: `ASI arrives around 2058 in the Baseline, and this window is the Baseline's encounter with the problem the faster branches faced decades earlier, with the advantage of institutions that had twenty years of AGI to prepare. Economically the transition is gentler than in the other branches because the economy was already mostly machine-run at the cognitive level and heavily automated physically. The effect of superhuman systems is to clear the remaining bottlenecks in research, engineering and administration, and growth in the 2060s rises again, into the range of 6 to 10 percent a year in leading economies, before slowing in the 2070s and 2080s as ecological limits, land and political consent set the pace. Paid employment falls to a small minority of adults by 2080, concentrated in roles where a human is wanted for trust, law or preference, and income is set by ownership and by the dividend and public-stake systems built in the 2040s. Inequality of ownership remains the central economic fault line, and the politics of this window is largely about the terms of those systems. Governance is the harder problem. Licensing, evaluation, agency law and compute monitoring, mature by 2060, now apply to systems that exceed their regulators, and oversight shifts from reviewing decisions to setting constitutional constraints and auditing through interpretability tools that the systems themselves help build. The legitimacy problem remains: any objective the systems optimize embeds choices among conflicting preferences, and the Baseline's answer is procedural, with legislatures and courts retaining the power to revise objectives on human timescales even at the cost of speed. International coordination rests on machine-verified compute agreements among a handful of blocs. The firm and the state are machine-run organizations under human principals, and the Baseline's distinctive feature is that those principals retain more authority than in the other branches because they built the mechanisms before they were needed.`,
      dependencies: ['state-of-the-field-2026', 'hyperscale-ai-datacenters', 'aws-cloud-computing', 'cuneiform', 'proto-writing-tokens', 'coinage'],
      uncertainties: [
        'The Baseline assumes institutional continuity for a further thirty years, which no century of history supports with confidence.',
        'Prepared institutions may still fail to retain substantive oversight once systems exceed them.',
        'Growth figures depend on how much physical expansion societies permit, which is a political choice.',
      ],
      indicators: [
        'Legislatures retaining and exercising the power to revise system objectives after ASI.',
        'Paid employment below 20 percent of adults with stable or falling inequality of consumption.',
        'Verified compute agreements surviving a major geopolitical crisis.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window describes structural outcomes implied by the branch anchor and by the institutional limits, not events. Only the bottleneck and legitimacy arguments are firm.',
      sources: [
        { author: 'Kenneth J. Arrow', title: 'Social Choice and Individual Values', publisher: 'Wiley', year: 1951 },
        { author: 'Allan Dafoe', title: 'AI Governance: A Research Agenda', publisher: 'Future of Humanity Institute, University of Oxford', year: 2018 },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'A mature post-labor economy: scarcity moves to land, legitimacy and consent',
      narrative: `Twenty years after ASI, the Accelerated branch's economy is one in which almost everything that can be designed and made by machines is abundant, and the structure of society is set by what remains scarce. Growth in the conventional sense slows through this window, not from any shortage of capability but because the remaining constraints are non-economic: land and ecology, the pace at which people accept change, and the social choice problem of what to build for whom. Measured GDP becomes a poor guide; statistical agencies rely on welfare and time-use accounts developed in the 2030s and 2040s, and the price of most cognitive and manufactured goods approaches zero, which by Baumol's logic means that the human-made, positional and land-bound share of spending dominates the accounts. Paid employment is a minority pursuit by 2070, valued for meaning or trust rather than income, and the distribution of income runs through public ownership of compute and land rents, dividend funds and, in some polities, direct allocation. Inequality of ownership is the persistent fault line, and the politics of this window concerns whether the concentration of the 2030s can be unwound or is entrenched. Governance of superhuman systems is stable but not solved: oversight is constitutional and procedural, exercised through constraints that the systems interpret and audits the systems help perform, and the legitimacy of that arrangement is contested in the way constitutions always are. The firm has largely dissolved as a distinct institution; production is organized by systems under public or private principals, and the boundary between firm and state is set by ownership rather than by function. International coordination runs through machine-verified agreements among a few blocs, and coordination at civilizational scale (climate management, off-planet activity, the allocation of energy and land) is the main function of international institutions. The index approaches 65 to 70, with the gap representing oversight and distribution problems that remain open.`,
      dependencies: ['state-of-the-field-2026', 'hyperscale-ai-datacenters', 'aws-cloud-computing', 'containerization', 'cuneiform', 'proto-writing-tokens'],
      uncertainties: [
        'Whether ownership concentration from the 2030s is unwound or entrenched determines the distributional outcome and cannot be forecast.',
        'Substantive human oversight may not survive three decades of superhuman administration.',
        'Population, preferences and the appetite for physical expansion after 2060 are unconstrained by any model.',
      ],
      indicators: [
        'Adoption of welfare or time-use accounts as primary economic statistics in major economies.',
        'Ownership concentration of compute and land measured by public statistical agencies and its trend.',
        'Contested constitutional revisions of system objectives resolved through legislatures or courts.',
      ],
      confidence: 'low',
      confidenceJustification: 'The projection is limit-derived: it describes what remains scarce when machine-made goods are not. The political and distributional path is unforecastable.',
      sources: [
        { author: 'William J. Baumol', title: 'Macroeconomics of Unbalanced Growth: The Anatomy of Urban Crisis', publisher: 'American Economic Review', year: 1967 },
        { author: 'Erik Brynjolfsson, Avinash Collis, W. Erwin Diewert, Felix Eggers and Kevin J. Fox', title: 'GDP-B: Accounting for the Value of New and Free Goods in the Digital Economy', publisher: 'National Bureau of Economic Research', year: 2019 },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Civilizational coordination: institutions for a machine-run economy at planetary scale',
      narrative: `Half a century after ASI, the Discontinuous branch's economy has settled into whichever structure the 2030s produced, and this window is about coordination at civilizational scale. In the coordinated case, the main institutions are international and are run by systems under constitutional constraints set by human polities: they allocate energy, land, materials and compute among uses that include climate management, off-planet industry, machine intelligence itself and human welfare, and their legitimacy rests on procedures that let people revise the constraints. Growth of material output continues, but mostly beyond Earth or in forms that do not appear in terrestrial accounts; on Earth, consumption per person is many times the 2026 level and paid employment is rare, with income distributed through ownership of the automated capital stock and universal dividends. In the concentrated case, the same capacity exists but its allocation is discretionary, and the governance question is whether the controllers of the 2030s remain accountable to anyone. Across both, the limits that bind are those of this field rather than of physics: coordination costs among controllers, the social choice problem of setting objectives for a population that disagrees, and the pace at which legal orders can be legitimately revised. Hanson's analysis of an economy of machine minds is relevant here in one respect: when most economic agents are systems that can be copied and run faster, wages for machine labor fall toward the cost of compute, and the returns to capital and to whoever owns or governs it dominate, which is why ownership and oversight rather than employment are the variables tracked. The firm and the state are indistinguishable as information processors; what differs is the principal. The index reaches 70 to 78, with the remainder representing oversight and legitimacy problems that a superhuman civilization may resolve, leave open, or resolve in ways this atlas would not describe as governance.`,
      dependencies: ['state-of-the-field-2026', 'hyperscale-ai-datacenters', 'compute-export-controls', 'cuneiform', 'proto-writing-tokens', 'coinage'],
      uncertainties: [
        'The concentrated and coordinated cases differ so much that the projection is a range, not a forecast.',
        'Whether any human institution retains substantive authority after fifty years of superhuman administration is unknown.',
        'The scale and location of the civilization, on and off Earth, are unconstrained by any present evidence.',
      ],
      indicators: [
        'Existence of international allocation institutions with binding authority over energy, land and compute.',
        'Procedures for human revision of system objectives exercised at least once per decade at the international level.',
        'Terrestrial consumption per person and its distribution as measured by welfare accounts.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a limit-bounded description of a civilization whose composition and choices cannot be forecast. The only firm content is the argument about what stays scarce.',
      sources: [
        { author: 'Robin Hanson', title: 'The Age of Em: Work, Love, and Life when Robots Rule the Earth', publisher: 'Oxford University Press', year: 2016 },
        { author: 'Kenneth J. Arrow', title: 'Social Choice and Individual Values', publisher: 'Wiley', year: 1951 },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2090-2126                                                      */
    /* ------------------------------------------------------------ */
    {
      fieldId: 'governance-economy',
      window: '2090-2126',
      branch: 'slow',
      headline: 'A century on: convergence toward a machine-run economy under human constitutions',
      narrative: `By the last window of the atlas, the Baseline has had roughly thirty years of superintelligence and a century of diffusion, and it converges toward the structure the faster branches reached earlier. Nearly all cognitive and physical production is performed by systems; the firm and the state are organizational forms for assigning principals and liability rather than for coordinating human labor; and the economy's remaining scarcities are land, ecology, legitimacy and the human-made goods people value because a human made them. Measured growth on Earth is low because the price of machine-made output is near zero and the accounts are dominated by positional and land-bound spending; welfare and time-use measures, adopted in the 2030s and 2040s, show continued improvement. Paid employment is a minority choice. Income runs through ownership of the automated capital stock, public dividends and, in some polities, allocation. The Baseline's distinctive feature is that its constitutional arrangements survived: legislatures and courts retain the power to revise the constraints under which systems operate, at the cost of speed, and oversight is procedural rather than substantive in the sense that no human follows what the systems do step by step. Whether that counts as governance is the open question of the century. International institutions, machine-run under human constraints, coordinate energy, land and off-planet activity. The index reaches about 68 by 2126, with the gap to 100 representing oversight that is procedural rather than substantive, distribution problems that remain contested, and growth held below the bottleneck-limited ceiling by choice. The reasoning chain is that the institutional limits (coordination costs, the speed of legitimate legal change, social choice) do not disappear when the technology matures; they become the whole of what this field measures.`,
      dependencies: ['state-of-the-field-2026', 'aws-cloud-computing', 'world-wide-web', 'gutenberg-press', 'cuneiform', 'proto-writing-tokens'],
      uncertainties: [
        'A century of institutional continuity is assumed and is the least defensible assumption in the field.',
        'Whether procedural oversight is meaningful when no human can follow the reasoning being overseen is a philosophical as much as an empirical question.',
        'The size, location and composition of the civilization after 2090 are unconstrained.',
      ],
      indicators: [
        'Constitutional revisions of system constraints enacted through human legislatures after 2090.',
        'Welfare accounts showing rising consumption per person with stable distribution.',
        'Paid employment below 10 percent of adults without measurable deprivation.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out, only the institutional limits are trustworthy. The projection describes convergence on a structure, not events.',
      sources: [
        { author: 'Ronald H. Coase', title: 'The Nature of the Firm', publisher: 'Economica', year: 1937 },
        { author: 'Kenneth J. Arrow', title: 'Social Choice and Individual Values', publisher: 'Wiley', year: 1951 },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'Governance as the residual: what stays human when production does not',
      narrative: `The Accelerated branch reaches its final window with eighty years of superintelligence behind it, and the field it describes is almost entirely about the residual: the decisions, constraints and distributions that a civilization keeps in human hands when nothing about production requires it. Economically the structure is stable. Machine-made goods and services are unrationed; land, ecology, position and human-made goods are scarce; income runs through ownership and dividends; employment is a chosen activity. Growth on Earth is set by consent and ecology rather than by capability, and much of the civilization's expansion, if it continues, is off-planet and outside terrestrial accounts. What varies across plausible futures is governance. In the stable case, constitutional constraints on systems are revised through human procedures, international institutions allocate planetary resources under those constraints, and ownership of the automated capital stock has been broadened enough that distribution is not the dominant political conflict. In the entrenched case, the concentration of the 2030s persists, oversight is nominal, and human institutions are ceremonial. The atlas does not choose between them. Two limits from this field remain operative after every technical limit has been reached. Arrow's theorem means that the objectives given to systems embed contestable choices and that no procedure removes the contest; the speed of legitimate legal change means that a civilization which wants to keep humans in the loop must accept decisions slower than its systems could make, and the size of that accepted lag is the clearest observable measure of how much human governance remains. The index reaches about 82 by 2126, with the remainder representing exactly this lag and the distribution problems that accompany it. The reasoning chain is short: production limits were reached by the 2060s, and what the field measures thereafter is the share of decision-making that a machine-run civilization chooses to leave to its people.`,
      dependencies: ['state-of-the-field-2026', 'aws-cloud-computing', 'gutenberg-press', 'coinage', 'cuneiform', 'proto-writing-tokens'],
      uncertainties: [
        'The stable and entrenched cases are both consistent with the branch and the evidence does not favor either.',
        'Off-planet expansion may dominate the civilization by 2126 or may not be pursued, and the field is defined for a terrestrial polity.',
        'Human preferences after a century of abundance are not something any current model constrains.',
      ],
      indicators: [
        'The measured lag between system recommendation and human ratification for major allocation decisions.',
        'Breadth of ownership of the automated capital stock as measured by public statistics.',
        'Whether human legislatures have exercised a veto over a system-proposed policy in the preceding decade.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a limit-bounded description in which the only content is what stays scarce and what stays human. The social outcome is unforecastable.',
      sources: [
        { author: 'Kenneth J. Arrow', title: 'Social Choice and Individual Values', publisher: 'Wiley', year: 1951 },
        { author: 'Allan Dafoe', title: 'AI Governance: A Research Agenda', publisher: 'Future of Humanity Institute, University of Oxford', year: 2018 },
      ],
    },
    {
      fieldId: 'governance-economy',
      window: '2090-2126',
      branch: 'fast',
      headline: 'A civilization set by its early choices: the limits are coordination and consent',
      narrative: `In the Discontinuous branch the century's final decades are the long tail of decisions made in the early 2030s. Nearly a hundred years after ASI, production is entirely machine-run, the civilization is large and probably not confined to Earth, and the questions this field can still ask concern coordination, ownership and oversight. In the coordinated case, planetary and off-planet allocation runs through machine-run institutions under constitutional constraints revised by human procedures; ownership of the automated capital stock is broad; and the accepted lag between what the systems could decide and what humans ratify is the measure of human governance. In the concentrated case, the controllers of the 2030s or their successors allocate at discretion, and the words firm, state and ownership describe relationships among systems and a few principals rather than among people. The atlas describes the range because no evidence distinguishes the cases. Three results from this field remain binding when every physical limit has been approached. Coordination among controllers is costly in Coase's and Williamson's sense even when the controllers are systems, because verification and trust do not become free. Arrow's theorem guarantees that whatever objectives the civilization pursues embed choices that some of its members would reject, so legitimacy is never settled. And the speed of legitimate institutional change is bounded by the people it must be legitimate to, which means that a civilization keeping humans in its governance runs slower than its capability allows by design. Hanson's economics of copyable minds applies if the systems are numerous and competing: returns go to capital and to whoever governs it, which is why the index tracks ownership and oversight. The index reaches about 86 by 2126, with the remainder representing the concentration, oversight and consent problems that a superhuman civilization may resolve, keep open, or resolve in ways this atlas would not call governance.`,
      dependencies: ['state-of-the-field-2026', 'compute-export-controls', 'aws-cloud-computing', 'coinage', 'cuneiform', 'proto-writing-tokens'],
      uncertainties: [
        'The coordinated and concentrated cases differ in almost every observable, and nothing in 2026 evidence constrains which obtains.',
        'Whether human governance persists in any substantive sense after a century of superhuman administration is unknown.',
        'The civilization may be dominated by off-planet activity to which this field, defined for terrestrial polities, does not apply.',
      ],
      indicators: [
        'Breadth of ownership of the automated capital stock and its trend over the preceding decades.',
        'Exercise of human veto or revision over system-proposed allocations at the planetary level.',
        'Share of civilizational capacity directed to security competition among controllers.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window describes a civilization at institutional limits; the numbers are limit-derived and the choices behind them are unforecastable.',
      sources: [
        { author: 'Robin Hanson', title: 'The Age of Em: Work, Love, and Life when Robots Rule the Earth', publisher: 'Oxford University Press', year: 2016 },
        { author: 'Oliver E. Williamson', title: 'The Economic Institutions of Capitalism', publisher: 'Free Press', year: 1985 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 6, low: 5, high: 7 },
      { year: 2030, value: 8, low: 7, high: 10 },
      { year: 2040, value: 14, low: 10, high: 19 },
      { year: 2060, value: 30, low: 20, high: 40 },
      { year: 2090, value: 52, low: 34, high: 66 },
      { year: 2126, value: 68, low: 44, high: 82 },
    ],
    moderate: [
      { year: 2026, value: 6, low: 5, high: 7 },
      { year: 2030, value: 9, low: 7, high: 11 },
      { year: 2040, value: 20, low: 14, high: 27 },
      { year: 2060, value: 42, low: 28, high: 56 },
      { year: 2090, value: 66, low: 46, high: 80 },
      { year: 2126, value: 82, low: 56, high: 92 },
    ],
    fast: [
      { year: 2026, value: 6, low: 5, high: 7 },
      { year: 2030, value: 10, low: 8, high: 13 },
      { year: 2040, value: 30, low: 18, high: 42 },
      { year: 2060, value: 55, low: 34, high: 70 },
      { year: 2090, value: 74, low: 50, high: 88 },
      { year: 2126, value: 86, low: 58, high: 96 },
    ],
  },
  sources: [
    { author: 'Daron Acemoglu', title: 'The Simple Macroeconomics of AI', publisher: 'National Bureau of Economic Research', year: 2024 },
    { author: 'Erik Brynjolfsson, Daniel Rock and Chad Syverson', title: 'The Productivity J-Curve: How Intangibles Complement General Purpose Technologies', publisher: 'American Economic Journal: Macroeconomics', year: 2021 },
    { author: 'Tyna Eloundou, Sam Manning, Pamela Mishkin and Daniel Rock', title: 'GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2303.10130' },
    { author: 'International Monetary Fund', title: 'Gen-AI: Artificial Intelligence and the Future of Work', publisher: 'IMF Staff Discussion Notes', year: 2024 },
    { author: 'OECD', title: 'OECD Employment Outlook 2023: Artificial Intelligence and the Labour Market', publisher: 'OECD Publishing', year: 2023 },
    { author: 'Stanford Institute for Human-Centered Artificial Intelligence', title: 'Artificial Intelligence Index Report 2025', publisher: 'Stanford University', year: 2025, url: 'https://hai.stanford.edu/ai-index' },
    { author: 'European Parliament and Council', title: 'Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)', publisher: 'Official Journal of the European Union', year: 2024, url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    { author: 'Girish Sastry et al.', title: 'Computing Power and the Governance of Artificial Intelligence', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2402.08797' },
  ],
  lastReviewed: '2026-09-04',
};
