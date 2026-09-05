import type { ForecastModel } from '../schema';

/**
 * Eight forecasting models for the arrival of AGI and ASI.
 *
 * Each model is a distinct method with its own assumptions, and they disagree
 * on purpose. The ensemble on The Threshold combines them using defaultWeight
 * (weights here sum to 1; the renderer renormalizes if a reader changes them).
 * With these weights the unconditional ensemble median lands near AGI 2032
 * (interquartile range about 2029 to 2040) and ASI near 2040 (about 2033 to 2058),
 * consistent with the anchor years in takeoff.ts.
 *
 * Percentiles are calendar years. Values above NEVER_YEAR (2200) render as
 * "beyond 2200 or never".
 */
export const forecastModels: ForecastModel[] = [
  {
    id: 'compute-trend',
    index: 1,
    name: 'Compute-trend extrapolation',
    shortName: 'Compute trend',
    summary:
      'Extrapolates frontier training compute, hardware price-performance and algorithmic efficiency to estimate when effective compute crosses the band associated with human-level and then superhuman performance, discounted for the energy and capital limits that slow the trend.',
    approach: `The model treats capability as a function of effective training compute: physical FLOP multiplied by an algorithmic efficiency factor. It fits the 2010 to 2024 growth rate of frontier runs (about 4x to 5x per year in Epoch AI's dataset), combines it with hardware price-performance (FLOP per dollar doubling every 2 to 2.5 years) and algorithmic progress (compute for fixed capability halving every 8 to 12 months), and projects effective compute forward. It then finds when effective compute reaches the band where prior scaling produced qualitative jumps, applying a slowdown from 2028 as power, capital and fab constraints bind. AGI is where the curve crosses that band; ASI adds further scaling at a slower rate.`,
    assumptions: [
      'Capability continues to track effective compute with no hard ceiling short of the AGI threshold band.',
      'Frontier training compute grows about 4x per year until roughly 2028, then slows toward 2x per year as gigawatt-scale power and capital constraints bind.',
      'Algorithmic efficiency keeps halving the compute required for fixed capability every 8 to 12 months, as measured by Ho et al. for language models.',
      'Hardware price-performance continues doubling every 2 to 2.5 years through at least the early 2030s.',
      'Capital availability of several hundred billion dollars per year in AI infrastructure persists without a financing collapse.',
      'The AGI threshold lies within about 2 to 4 orders of magnitude of effective compute above the largest 2025 training runs.',
    ],
    inputs: [
      {
        label: 'Frontier training compute growth, 2010 to 2024',
        value: 'about 4x to 5x per year',
        note: 'Sevilla et al. 2022 documented the break from the pre-2010 pace; the Epoch AI notable models dataset shows the trend continuing.',
      },
      {
        label: 'Largest disclosed training runs by 2025',
        value: 'low 10^26 FLOP',
        note: 'Epoch AI estimates; GPT-4 in 2023 was about 2x10^25 FLOP.',
      },
      {
        label: 'Hardware price-performance',
        value: 'FLOP per dollar doubling every 2 to 2.5 years',
        note: 'Hobbhahn and Besiroglu 2022 estimate roughly 2.5 years for machine learning GPUs.',
      },
      {
        label: 'Algorithmic efficiency doubling time',
        value: 'about 8 months (95 percent interval 5 to 14 months)',
        note: 'Ho et al. 2024, language models 2012 to 2023.',
      },
      {
        label: 'Power for a single frontier campus by 2030',
        value: '1 to 5 GW',
        note: 'Epoch AI 2024 analysis of scaling constraints through 2030.',
      },
      {
        label: 'Annual AI capital expenditure of the largest developers',
        value: 'hundreds of billions of dollars per year by 2025 and 2026',
        note: 'Reported company guidance; the model does not rely on a precise figure.',
      },
      {
        label: 'Assumed effective compute gap to AGI',
        value: '2 to 4 orders of magnitude above the 2025 frontier',
      },
    ],
    agi: { p5: 2027, p25: 2028, p50: 2030, p75: 2034, p95: 2045 },
    asi: { p5: 2029, p25: 2032, p50: 2036, p75: 2044, p95: 2065 },
    reasoning: `Start with the trend. Between 2010 and 2024 the training compute of frontier models grew about 4x to 5x per year, a rate that compounds to roughly three orders of magnitude per decade. Sevilla et al. documented the break from the pre-2010 Moore's law pace, and Epoch AI's continuing dataset shows the trend holding through the largest disclosed 2025 runs in the low 10^26 FLOP range. Physical compute is only part of the story. Ho et al. found that the compute needed to reach a fixed language-model loss halved about every 8 months between 2012 and 2023, so effective compute (physical FLOP times algorithmic efficiency) has grown closer to 10x per year.

The model's central assumption is that the AGI threshold sits 2 to 4 orders of magnitude of effective compute above the 2025 frontier. That range is chosen because each prior order of magnitude bought a qualitative shift (GPT-2 to GPT-3 to GPT-4 to the reasoning-trained models of 2025), and because the remaining gap to a system that can do most cognitive work at human level looks, on benchmark evidence, smaller than the gap already crossed. At 10x per year in effective compute, 2 orders of magnitude arrive in about 2 years and 4 in about 4 years, which places the crossing between 2027 and 2029 if nothing slows.

Something will slow. Epoch AI's 2024 analysis of constraints through 2030 identified power (single campuses at 1 to 5 GW), chip fabrication and high-bandwidth memory supply, data, and the latency wall as the binding limits, and concluded that runs of about 2x10^29 FLOP are feasible by 2030 only if all four are relaxed together. Capital is the other brake: annual spending in the hundreds of billions cannot grow 4x per year for long. The model therefore cuts physical compute growth to about 2x per year after 2028. That shifts the median to 2030, with p25 at 2028 (the threshold is at the low end and the trend holds) and p75 at 2034 (the threshold is at the high end and the slowdown bites early). The p95 of 2045 covers a financing collapse or a decade-long algorithmic plateau.

ASI requires further scaling after AGI under the slower post-2028 regime, plus whatever acceleration automated research provides. A median of 2036 assumes another 2 to 3 orders of magnitude of effective compute at roughly 3x per year, with p25 at 2032 if the research feedback loop is strong and p95 at 2065 if hardware becomes the sole driver of progress and grows only as fast as fabs and grids allow.`,
    critique: `The model's weakest link is the threshold band. Nothing in the compute record says how much effective compute AGI requires; the 2 to 4 order-of-magnitude gap is an informed guess dressed as a parameter, and the whole distribution shifts by years if it is wrong in either direction. Extrapolating a trend also assumes the trend measures the right thing. Loss on next-token prediction improved smoothly, but the capabilities that matter for AGI (long-horizon planning, reliability under distribution shift, learning from little data) may not scale the same way, and the model has no term for them. The slowdown is handled crudely: a single step change in growth rate at 2028, when in practice power, capital and fab limits arrive unevenly and could bite earlier if AI revenue disappoints investors. Algorithmic efficiency is measured on language modeling loss for models up to 2023; whether it generalizes to agentic training is unknown. Finally, the model says nothing about ASI beyond assuming more compute produces it, which imports the very question at issue.`,
    defaultWeight: 0.18,
    sources: [
      {
        author: 'Sevilla, J. et al.',
        title: 'Compute Trends Across Three Eras of Machine Learning',
        publisher: 'International Joint Conference on Neural Networks (IJCNN)',
        year: 2022,
        url: 'https://arxiv.org/abs/2202.05924',
      },
      {
        author: 'Ho, A. et al.',
        title: 'Algorithmic progress in language models',
        publisher: 'arXiv',
        year: 2024,
        url: 'https://arxiv.org/abs/2403.05812',
      },
      {
        author: 'Sevilla, J. et al.',
        title: 'Can AI scaling continue through 2030?',
        publisher: 'Epoch AI',
        year: 2024,
        url: 'https://epoch.ai/blog/can-ai-scaling-continue-through-2030',
      },
      {
        author: 'Hobbhahn, M. and Besiroglu, T.',
        title: 'Trends in GPU price-performance',
        publisher: 'Epoch AI',
        year: 2022,
        url: 'https://epoch.ai/blog/trends-in-gpu-price-performance',
      },
      {
        author: 'Epoch AI',
        title: 'Machine Learning Trends',
        publisher: 'Epoch AI',
        year: 2025,
        url: 'https://epoch.ai/trends',
      },
      {
        author: 'Kaplan, J. et al.',
        title: 'Scaling Laws for Neural Language Models',
        publisher: 'arXiv',
        year: 2020,
        url: 'https://arxiv.org/abs/2001.08361',
      },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'biological-anchors',
    index: 2,
    name: 'Biological anchors',
    shortName: 'Bio anchors',
    summary:
      'Estimates the training compute needed to produce a transformative model by anchoring on the human brain and on evolution, then asks when that compute becomes affordable given hardware, algorithmic and spending trends.',
    approach: `Following Cotra's 2020 framework, the model builds a distribution over the training compute required for a transformative model from several biological anchors: the compute the brain performs (Carlsmith's 10^13 to 10^17 FLOP per second), the compute of a human lifetime of learning, neural network scaling laws applied to brain-sized models at various effective horizon lengths, and the compute spent by evolution to produce the brain. Each anchor gets a probability weight and wide error bars. The requirement distribution is then compared year by year against affordable compute, projected from hardware price-performance, algorithmic progress and willingness to spend. The AGI date is when the probability that affordable compute exceeds the requirement crosses 50 percent; ASI adds a further scaling margin.`,
    assumptions: [
      'The human brain is a useful reference point for the compute a transformative model needs, within a few orders of magnitude.',
      "Carlsmith's range of 10^13 to 10^17 FLOP per second for brain-equivalent computation, with a central value near 10^15, is approximately right.",
      'Neural network scaling behavior seen from 2020 to 2025 continues to hold for brain-scale parameter counts and long-horizon tasks.',
      'Willingness to spend on a single training run grows to a few percent of the GDP of a large economy before plateauing.',
      'Algorithmic progress halves the compute required for a given capability roughly every 2 to 3 years in the long run, slower than the recent language model rate.',
      'The evolution anchor is an upper bound rather than a likely requirement.',
    ],
    inputs: [
      {
        label: 'Brain compute (Carlsmith 2020)',
        value: '10^13 to 10^17 FLOP per second',
        note: 'Central estimate near 10^15 FLOP per second; Carlsmith judged it more likely than not that 10^15 is sufficient.',
      },
      {
        label: 'Lifetime anchor',
        value: 'about 10^24 to 10^27 FLOP',
        note: 'Brain compute multiplied by roughly a billion seconds of childhood learning, with adjustments.',
      },
      {
        label: 'Neural network anchors',
        value: 'roughly 10^28 to 10^36 FLOP',
        note: 'Short, medium and long horizon variants; the widest and most heavily weighted anchor in Cotra 2020.',
      },
      {
        label: 'Evolution anchor',
        value: 'about 10^41 FLOP',
        note: 'Compute over roughly a billion years of nervous system evolution; treated as an upper bound.',
      },
      {
        label: 'Cotra 2020 median for transformative AI',
        value: '2050',
        note: 'Updated to about 2040 in her 2022 revision, with roughly 15 percent probability by 2030.',
      },
      {
        label: 'Largest 2025 training runs',
        value: 'low 10^26 FLOP',
      },
      {
        label: 'Long-run hardware price-performance',
        value: 'doubling every 2 to 2.5 years',
      },
    ],
    agi: { p5: 2027, p25: 2031, p50: 2036, p75: 2048, p95: 2085 },
    asi: { p5: 2030, p25: 2037, p50: 2045, p75: 2062, p95: 2110 },
    reasoning: `The biological anchors approach begins from the observation that we have exactly one existence proof of general intelligence and it runs on about 20 watts. Carlsmith's 2020 review of the neuroscience estimated that matching the brain's task-relevant computation likely takes 10^13 to 10^17 FLOP per second, with 10^15 the central figure. That number alone does not give a training requirement, so Cotra's 2020 report built several anchors around it. The lifetime anchor multiplies brain compute by a childhood of learning and lands near 10^24 to 10^27 FLOP, a level the largest 2025 runs at low 10^26 FLOP already approach or exceed. The neural network anchors treat a brain-sized model (10^14 to 10^15 parameters) as a transformer trained under scaling laws for tasks whose effective horizon ranges from seconds to years, producing requirements from about 10^28 to 10^36 FLOP. The evolution anchor, roughly 10^41 FLOP, is the compute spent by natural selection and is treated as a ceiling.

Weighting these anchors, Cotra's 2020 median for transformative AI was 2050. Her 2022 update, prompted by faster than expected progress and a higher estimate of algorithmic gains, moved the median to about 2040 with roughly 15 percent probability by 2030. This model takes the 2022 update as its starting point and shifts modestly earlier again, for two reasons. First, the low end of the neural network anchors has been reached: models trained with 10^26 FLOP display broad competence that the 2020 report expected only at higher levels, which raises the weight on the short horizon anchor. Second, the affordability curve moved. Willingness to spend on a single run reached the billions of dollars by 2025, years ahead of the 2020 report's schedule, and Ho et al. measured algorithmic progress at roughly three times the rate the report assumed.

Against that, the medium and long horizon anchors remain far off. If human-level autonomy over month-long tasks requires 10^32 FLOP or more, then even at 3x annual growth in effective compute the crossing takes until the mid to late 2030s, and a slowdown pushes it into the 2040s. The resulting distribution has a p25 of 2031 (short horizon anchor correct), a median of 2036, a p75 of 2048 (long horizon anchor correct) and a p95 of 2085 for the possibility that the brain analogy misleads and much more compute is needed. ASI is modeled as another 2 to 3 orders of magnitude of effective compute beyond the AGI requirement, giving a median of 2045 and a long tail to 2110 in which hardware alone must carry the load.`,
    critique: `The anchors framework is honest about its uncertainty, which is its virtue and its weakness: a distribution spanning a dozen orders of magnitude of compute is hard to falsify and easy to move by reweighting. Carlsmith's brain estimate is itself uncertain by four orders of magnitude, and the mapping from brain FLOP per second to training FLOP relies on analogies (a childhood of learning, an evolution of search) that have no established exchange rate with gradient descent. The neural network anchors depend on the concept of effective horizon length, which has never been measured for any real task. Critics from both directions have noted this: Yudkowsky argued in 2021 that biology-based anchors say almost nothing about engineered systems, while others observed that the same framework in 2020 would have assigned low probability to the 2023 to 2025 capability jumps at 10^25 to 10^26 FLOP. The model also inherits Cotra's definition of transformative AI (an economic impact comparable to the industrial revolution), which is not identical to AGI, so its dates may be later than a capability-based definition would give. The ASI treatment is a scaling margin without independent justification.`,
    defaultWeight: 0.08,
    sources: [
      {
        author: 'Cotra, A.',
        title: 'Forecasting TAI with biological anchors',
        publisher: 'Open Philanthropy',
        year: 2020,
      },
      {
        author: 'Cotra, A.',
        title: 'Two-year update on my personal AI timelines',
        publisher: 'AI Alignment Forum',
        year: 2022,
      },
      {
        author: 'Carlsmith, J.',
        title: 'How Much Computational Power Does It Take to Match the Human Brain?',
        publisher: 'Open Philanthropy',
        year: 2020,
        url: 'https://www.openphilanthropy.org/research/how-much-computational-power-does-it-take-to-match-the-human-brain/',
      },
      {
        author: 'Ho, A. et al.',
        title: 'Algorithmic progress in language models',
        publisher: 'arXiv',
        year: 2024,
        url: 'https://arxiv.org/abs/2403.05812',
      },
      {
        author: 'Hobbhahn, M. and Besiroglu, T.',
        title: 'Trends in GPU price-performance',
        publisher: 'Epoch AI',
        year: 2022,
        url: 'https://epoch.ai/blog/trends-in-gpu-price-performance',
      },
      {
        author: 'Moravec, H.',
        title: 'When will computer hardware match the human brain?',
        publisher: 'Journal of Evolution and Technology',
        year: 1998,
      },
      {
        author: 'Yudkowsky, E.',
        title: 'Biology-Inspired AGI Timelines: The Trick That Never Works',
        publisher: 'AI Alignment Forum',
        year: 2021,
      },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'low',
  },
  {
    id: 'expert-survey',
    index: 3,
    name: 'Expert survey aggregation',
    shortName: 'Expert surveys',
    summary:
      'Aggregates published surveys of machine learning researchers on when high-level machine intelligence will arrive, adjusting for framing effects and for the consistent drift of survey medians toward earlier dates.',
    approach: `The model collects the large published surveys of AI researchers (Müller and Bostrom 2016, Grace et al. 2018, Zhang et al. 2022, and the 2023 AI Impacts survey reported in Grace et al. 2024), extracts the aggregate 50 percent dates for high-level machine intelligence and for full automation of labor, and fits a trend to how those dates moved between survey waves. It then adjusts the most recent aggregate forward by a fraction of the observed drift, on the grounds that respondents have repeatedly updated in one direction, and widens the tails to reflect the large framing effects the surveys themselves document. The ASI distribution comes from the surveys' questions about superintelligence within some number of years of HLMI.`,
    assumptions: [
      'The people who build machine learning systems have information about its trajectory that is not fully captured by trend extrapolation.',
      'Aggregate survey medians are a meaningful summary despite very wide individual disagreement.',
      'The direction of drift between survey waves (earlier each time since 2016) carries some predictive information and should be partly extrapolated.',
      'The HLMI definition used by the surveys (machines that can accomplish every task better and more cheaply than human workers) is close to the atlas definition of AGI.',
      'Framing effects are symmetric noise rather than systematic bias in one direction.',
    ],
    inputs: [
      {
        label: 'Müller and Bostrom 2016 (surveys run 2012 to 2013)',
        value: '50 percent HLMI by about 2040',
        note: 'Median across four expert groups; 90 percent by 2075.',
      },
      {
        label: 'Grace et al. 2018 (2016 survey, 352 respondents)',
        value: '50 percent HLMI by 2061',
        note: 'The full automation of labor framing gave 2138 from the same respondents.',
      },
      {
        label: 'Zhang et al. 2022 (2019 survey)',
        value: '50 percent HLMI by about 2060',
      },
      {
        label: '2022 AI Impacts survey',
        value: '50 percent HLMI by 2060',
        note: 'Reported in Grace et al. 2024 as the baseline the 2023 wave moved from.',
      },
      {
        label: '2023 AI Impacts survey (2,778 respondents)',
        value: '50 percent HLMI by 2047',
        note: 'Down 13 years in one year; full automation of labor 50 percent by 2116, down 48 years.',
      },
      {
        label: 'Drift adjustment applied',
        value: 'about half of the 2016 to 2023 movement extrapolated forward',
      },
      {
        label: 'Superintelligence after HLMI (Müller and Bostrom 2016)',
        value: '10 percent within 2 years, 75 percent within 30 years',
      },
    ],
    agi: { p5: 2028, p25: 2032, p50: 2040, p75: 2060, p95: 2120 },
    asi: { p5: 2032, p25: 2042, p50: 2060, p75: 2095, p95: 2210 },
    reasoning: `The survey record is the closest thing we have to a time series of expert belief. Müller and Bostrom's surveys, run in 2012 and 2013, found a median 50 percent date for high-level machine intelligence of about 2040. Grace et al.'s 2016 survey of 352 authors from NeurIPS and ICML gave 2061, later than the earlier work, and showed how much the answer depends on framing: asked instead about full automation of labor, the same respondents put 50 percent at 2138. Zhang et al.'s 2019 survey gave about 2060, and the 2022 AI Impacts wave gave 2060 again. Then the 2023 wave, with 2,778 respondents, gave 2047 for HLMI and 2116 for full automation of labor: 13 and 48 years earlier respectively in a single year, the largest one-year revision in the record.

Taken at face value, the 2023 aggregate is the model's anchor. Two adjustments move it. First, the drift. Every wave since 2016 has moved earlier, and the 2023 move was large; the model extrapolates about half of the 2016 to 2023 movement forward, on the reasoning that respondents update with a lag as capabilities become visible. That shifts the median from 2047 toward 2040. Second, the definition. HLMI (every task better and cheaper than humans) is stricter than this atlas's capability-based AGI, which argues for a modest further shift earlier, while the full automation framing, which is closer to economic replacement, argues later. These partly cancel.

The resulting median of 2040 sits well behind the compute and forecasting-platform models, and the model does not hide that. Researchers as a group have been slower to update than forecasters, and there are two readings. One is that they know something about how hard the remaining problems are. The other is that they are answering from professional caution and from the parts of the field they work in, most of which are not the frontier. The tails are wide because the surveys themselves are: in 2023 the spread across respondents covered decades, and the 10 percent and 90 percent dates differed by more than half a century. The p25 of 2032 and p75 of 2060 reflect that spread; the p95 of 2120 reflects respondents who place substantial probability on never.

For ASI the model uses the surveys' own follow-up questions. Müller and Bostrom found respondents gave 10 percent probability to superintelligence within 2 years of HLMI and 75 percent within 30 years; Grace et al. found a similar shape with somewhat more weight on fast transitions. Applying that lag distribution to the AGI distribution gives an ASI median near 2060, with p25 at 2042 and a p95 that runs beyond 2200, which the atlas renders as never.`,
    critique: `Surveys measure opinion, not the world. Researchers are experts in building systems, not in forecasting, and the record shows they are poor at the latter: the same respondents give dates that differ by 75 years depending on whether the question says HLMI or full automation of labor, which suggests the numbers are constructed on the spot rather than drawn from a stable belief. Response rates have been low (around 15 percent in 2023), so selection effects are possible in either direction. The drift adjustment is arbitrary: extrapolating half of past movement has no principled basis, and one could equally argue that the 2023 jump was a reaction to ChatGPT that will partly revert. Most respondents work outside frontier labs and have no direct view of unreleased systems, while those inside them are a tiny fraction of the sample. On the other side, the surveys' definitions are demanding enough that the model may be measuring something later than AGI as the atlas defines it. Finally, superintelligence questions in the surveys are lightly specified, so the ASI distribution rests on a few sentences of survey text rather than on any model of the transition.`,
    defaultWeight: 0.12,
    sources: [
      {
        author: 'Müller, V. C. and Bostrom, N.',
        title: 'Future Progress in Artificial Intelligence: A Survey of Expert Opinion',
        publisher: 'Fundamental Issues of Artificial Intelligence, Springer',
        year: 2016,
      },
      {
        author: 'Grace, K. et al.',
        title: 'When Will AI Exceed Human Performance? Evidence from AI Experts',
        publisher: 'Journal of Artificial Intelligence Research',
        year: 2018,
        url: 'https://doi.org/10.1613/jair.1.11222',
      },
      {
        author: 'Zhang, B. et al.',
        title: 'Forecasting AI Progress: Evidence from a Survey of Machine Learning Researchers',
        publisher: 'Journal of Artificial Intelligence Research',
        year: 2022,
      },
      {
        author: 'Grace, K. et al.',
        title: 'Thousands of AI Authors on the Future of AI',
        publisher: 'arXiv',
        year: 2024,
        url: 'https://arxiv.org/abs/2401.02843',
      },
      {
        author: 'Bostrom, N.',
        title: 'Superintelligence: Paths, Dangers, Strategies',
        publisher: 'Oxford University Press',
        year: 2014,
      },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'forecasting-community',
    index: 4,
    name: 'Forecasting community aggregates',
    shortName: 'Forecaster aggregates',
    summary:
      'Takes the community medians of prediction platforms and superforecaster panels as the estimate, adjusted for their documented drift toward earlier dates and for the split between generalist forecasters and domain experts.',
    approach: `The model reads the community distributions from public forecasting platforms, chiefly the Metaculus questions on weakly general AI and on general AI, alongside aggregates from superforecaster groups such as Samotsvety and the Forecasting Research Institute's 2022 Existential Risk Persuasion Tournament. It maps each platform's resolution criteria onto the atlas definitions of AGI and ASI, weights the sources by track record and by how closely the criteria match, and combines them into one distribution. Because these medians have moved consistently earlier since 2020, the model applies a small forward adjustment for expected future drift, while widening the upper tail to reflect superforecasters' greater skepticism relative to AI researchers.`,
    assumptions: [
      'Aggregated forecasts from motivated, scored forecasters are better calibrated than expert opinion or any single model.',
      'The Metaculus general AI resolution criteria (a unified system passing adversarial Turing, robotics, coding and expert-level knowledge tests) are a reasonable operationalization of AGI.',
      'Past drift toward earlier dates partly reflects genuine information arriving, so a small further drift is expected.',
      'Superforecaster skepticism relative to domain experts captures real base-rate information about technology hype.',
      'Platform communities are not so dominated by enthusiasts that their medians are systematically early.',
    ],
    inputs: [
      {
        label: 'Metaculus weakly general AI, community median',
        value: 'moved from the 2040s in 2020 to the late 2020s by 2024',
        note: 'Resolution requires a single system to pass a Turing-style test, a robotics manipulation task, and coding and knowledge tests.',
      },
      {
        label: 'Metaculus general AI, community median',
        value: 'moved from the 2050s in 2020 to the early 2030s by 2024',
        note: 'Resolution adds a two-hour adversarial Turing test and stricter thresholds on the other components.',
      },
      {
        label: 'Samotsvety forecasts',
        value: 'earlier than academic surveys, later than frontier-lab insiders',
        note: 'The group has published aggregates on AI risk and timelines; this model uses them qualitatively rather than as a specific date.',
      },
      {
        label: 'Existential Risk Persuasion Tournament, 2022 (Karger et al. 2023)',
        value: 'superforecasters gave systematically later dates and lower risk than AI experts',
        note: 'Structured argument over several months barely moved either group.',
      },
      {
        label: 'Drift adjustment',
        value: 'about 1 year earlier than the 2024 to 2025 community medians',
      },
      {
        label: 'Skepticism widening',
        value: 'upper tail extended by about 10 years relative to platform distributions',
      },
    ],
    agi: { p5: 2027, p25: 2029, p50: 2031, p75: 2036, p95: 2050 },
    asi: { p5: 2029, p25: 2033, p50: 2038, p75: 2046, p95: 2070 },
    reasoning: `Prediction platforms turn a vague question into a scored one. Metaculus's weakly general AI question requires a single system to pass a Turing-style test, solve a robotics manipulation task, and score well on coding and knowledge tests; the general AI question adds an adversarial two-hour Turing test and stricter thresholds. When these questions opened in 2020 the community medians sat in the 2040s and 2050s. Through 2022 and 2023, as instruction-tuned language models and then reasoning models arrived, the medians fell by roughly a decade in each of two years, settling by 2024 in the late 2020s for weakly general AI and the early 2030s for general AI. Through 2025 and into 2026 the medians moved less, which the model reads as the community having largely priced in the current trajectory.

Superforecasters complicate the picture. In the 2022 Existential Risk Persuasion Tournament, Karger et al. found that superforecasters with strong track records on geopolitical questions gave consistently later AI dates and much lower catastrophe probabilities than AI domain experts, and that months of structured argument barely moved either group. Samotsvety, a superforecasting team that has published AI forecasts, has generally sat between the two. The model treats this split as real information: generalist forecasters have seen many technologies over-promised, while domain experts have seen this one under-promised since 2019.

Combining the sources, the model puts the AGI median at 2031, about one year earlier than the 2024 to 2025 Metaculus general AI median, to allow for continued but slowing drift. The p25 of 2029 tracks the weakly general question. The p75 of 2036 and p95 of 2050 are wider than the platform distributions, reflecting the superforecaster view and the possibility that platform communities are enriched with enthusiasts.

ASI is thinner on the platforms; few questions operationalize it cleanly. The model therefore combines the platform AGI distribution with the takeoff assumptions of the atlas ensemble, where the moderate scenario gives 4 to 12 years from AGI to ASI. Applying a lag distribution centered near 7 years gives an ASI median of 2038, with a p25 of 2033 if a fast takeoff follows an early AGI and a p95 of 2070 if slow diffusion dominates.

The model's honest summary: the people who bet on these questions think AGI is close, and those with the best general forecasting records think it is somewhat less close than the enthusiasts do. This distribution splits the difference with a lean toward the platforms, because the platforms have updated in the direction the evidence moved for six consecutive years.`,
    critique: `Forecasting platforms have real strengths, but they have never been scored on a question like this one. Metaculus's calibration record comes from thousands of short-range questions with clean resolutions; a question that resolves in the 2030s under criteria written in 2020 gives no feedback until it is too late to learn from. The resolution criteria are also not AGI: passing an adversarial Turing test and assembling a model car are proxies chosen for measurability, and a system could pass all of them while remaining far from human-level autonomy, or fail one (robotics) while otherwise being general. The community is self-selected, skews toward people who follow AI closely and are excited by it, and displays herding around prominent forecasters. The drift adjustment assumes that past movement predicts future movement, which is exactly the error forecasters are trained to avoid. The tournament evidence cuts both ways: superforecasters may be right, in which case this model's median is too early, or they may lack domain knowledge, in which case widening the tails is unjustified. Finally, the ASI distribution is borrowed from the atlas's own takeoff scenarios, which makes it partly circular.`,
    defaultWeight: 0.15,
    sources: [
      {
        author: 'Karger, E. et al.',
        title: 'Forecasting Existential Risks: Evidence from a Long-Run Forecasting Tournament',
        publisher: 'Forecasting Research Institute',
        year: 2023,
      },
      {
        author: 'Metaculus community',
        title: 'When will the first general AI system be devised, tested, and publicly announced?',
        publisher: 'Metaculus',
        year: 2020,
        url: 'https://www.metaculus.com/questions/5121/',
      },
      {
        author: 'Metaculus community',
        title: 'When will the first weakly general AI system be devised, tested, and publicly announced?',
        publisher: 'Metaculus',
        year: 2020,
        url: 'https://www.metaculus.com/questions/3479/',
      },
      {
        author: 'Tetlock, P. E. and Gardner, D.',
        title: 'Superforecasting: The Art and Science of Prediction',
        publisher: 'Crown',
        year: 2015,
      },
      {
        author: 'Grace, K. et al.',
        title: 'Thousands of AI Authors on the Future of AI',
        publisher: 'arXiv',
        year: 2024,
        url: 'https://arxiv.org/abs/2401.02843',
      },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'benchmark-saturation',
    index: 5,
    name: 'Benchmark saturation trend',
    shortName: 'Benchmark trend',
    summary:
      'Measures how quickly new benchmarks go from introduction to human-level or saturated performance, projects that shrinking interval onto the benchmarks that remain unsaturated, and treats the point where no meaningful benchmark survives as AGI.',
    approach: `For each major benchmark since ImageNet, the model records the year of introduction, the year it was matched or saturated, and the interval between. It fits the shrinking interval and identifies which capabilities remain unsaturated as of 2026: long-horizon autonomous tasks, real-world reliability, and novel scientific reasoning. It then uses METR's measured trend in the length of tasks AI agents can complete (doubling roughly every 7 months in the 2019 to 2025 data) to project when horizons reach job-length tasks. AGI is the year when both the remaining benchmarks saturate and task horizons reach about one month; ASI is when systems exceed the best humans on newly designed adversarial evaluations.`,
    assumptions: [
      'Benchmark performance is a leading indicator of real capability rather than an artifact of training on similar data.',
      'The introduction-to-saturation interval will keep shrinking, or at least not lengthen, for the currently unsaturated benchmarks.',
      'The METR task-horizon trend continues at roughly its 2019 to 2025 pace for several more years.',
      'A task horizon of about one month at 50 percent reliability, together with saturation of expert-level benchmarks, is a reasonable operational marker for AGI.',
      'Reliability (80 percent success rather than 50 percent) lags horizon length by a fixed factor rather than plateauing.',
      'Benchmark designers will keep producing harder tests, so saturation of the last one is observable.',
    ],
    inputs: [
      {
        label: 'ImageNet (2009) to surpassing the human error rate',
        value: 'about 6 years (2015)',
        note: 'Top-5 error below the reported 5.1 percent human baseline.',
      },
      {
        label: 'GLUE (2018) and SuperGLUE (2019) to human baseline',
        value: 'about 1 year and about 2 years',
      },
      {
        label: 'MMLU (2020) to expert-level scores',
        value: 'about 3 to 4 years',
        note: 'Hendrycks et al. estimated expert accuracy near 90 percent; frontier models passed that in 2024.',
      },
      {
        label: 'GPQA (2023) to PhD-level accuracy',
        value: 'about 1 year',
      },
      {
        label: 'SWE-bench Verified (2024)',
        value: 'from low double digits to a large majority of tasks within about 18 months',
      },
      {
        label: "FrontierMath (2024) and Humanity's Last Exam (2025)",
        value: 'still unsaturated as of mid 2026 but climbing',
        note: 'Both launched with frontier models scoring in the single digits and moved to substantial fractions within about a year.',
      },
      {
        label: 'ARC-AGI (2019)',
        value: 'ARC-AGI-1 effectively saturated in late 2024; ARC-AGI-2 remained open through 2025',
      },
      {
        label: 'METR task-horizon doubling time',
        value: 'about 7 months (2019 to 2025)',
        note: 'Kwa et al. 2025; the authors noted the 2024 to 2025 subset trended faster, closer to 4 months.',
      },
    ],
    agi: { p5: 2027, p25: 2028, p50: 2029, p75: 2032, p95: 2040 },
    asi: { p5: 2029, p25: 2032, p50: 2035, p75: 2041, p95: 2055 },
    reasoning: `The benchmark record tells a simple story. ImageNet was introduced in 2009 and human-level top-5 error was surpassed in 2015, about six years. GLUE, introduced in 2018, was passed within a year; SuperGLUE, designed in 2019 to be harder, fell within two. MMLU, released in 2020 with an estimated expert accuracy near 90 percent, was matched in 2024. GPQA, built in 2023 from questions that PhD holders outside the field could not answer even with web access, was matched within about a year. ARC-AGI-1, which Chollet designed in 2019 explicitly to resist memorization, sat under 35 percent for five years and then was effectively saturated by a reasoning model in December 2024. FrontierMath and Humanity's Last Exam, released in late 2024 and early 2025 as tests on which frontier models scored in the single digits, both saw substantial gains within a year. The interval from introduction to saturation has fallen from years to months, and benchmark authors now design tests expecting them to last a year or two.

What has not saturated is the important part. Systems that score at expert level on exams still fail at long, messy, multi-step tasks with no clear rubric. METR's measurement is the best quantification: the length of software tasks that agents can complete at 50 percent reliability, expressed in human time, has doubled roughly every 7 months since 2019, reaching about an hour by early 2025 and several hours later that year, with the 2024 to 2025 subset moving faster. Extrapolating the 7 month doubling from a few hours in 2025, a one-week horizon arrives around 2027 and a one-month horizon around 2028 to 2029. At 80 percent reliability the horizon is shorter by a fixed factor, which adds roughly a year.

The model defines its AGI marker as saturation of the remaining expert benchmarks plus a one-month task horizon at usable reliability. Both project to 2028 to 2030, and the median is set at 2029. The p25 of 2028 assumes the faster 2024 to 2025 pace continues; the p75 of 2032 assumes the trend bends as tasks become less well-specified than software; the p95 of 2040 covers the possibility that horizon length plateaus at days for reasons benchmarks cannot see.

ASI in this frame is when systems exceed the best humans on evaluations designed after the fact to be adversarial: novel research problems, strategy in open-ended environments, and tasks with multi-year horizons. The task-horizon trend, if it continues, reaches multi-year horizons by the mid 2030s, giving an ASI median of 2035, a p25 of 2032, and a p95 of 2055 for the case where the final steps require new paradigms rather than more of the same.`,
    critique: `Benchmarks are the most contaminated evidence in the field. Every benchmark is public, every training corpus is scraped after it is published, and every lab targets the benchmarks it reports; a shrinking interval to saturation is at least partly a measure of how quickly the field optimizes for a target, not of general capability. The model concedes this in its assumptions and then proceeds anyway. The METR trend rests on software tasks with clean success criteria, drawn from a few hundred problems; extrapolating it to open-ended work assumes the same slope holds in domains where success is ambiguous, which is exactly what has never been shown. The 50 percent reliability standard is generous: a colleague who finishes half of month-long assignments is not employable, and the 80 percent horizon is much shorter. The one-month marker for AGI is a convention chosen for tractability. Defining ASI by adversarial evaluations that do not yet exist makes the ASI numbers unfalsifiable. The model also treats a trend measured over six years as a law, when trends of this kind have bent before, and gives no mechanism for why it should continue.`,
    defaultWeight: 0.12,
    sources: [
      {
        author: 'Kwa, T. et al.',
        title: 'Measuring AI Ability to Complete Long Tasks',
        publisher: 'METR, arXiv',
        year: 2025,
        url: 'https://arxiv.org/abs/2503.14499',
      },
      {
        author: 'Hendrycks, D. et al.',
        title: 'Measuring Massive Multitask Language Understanding',
        publisher: 'International Conference on Learning Representations (ICLR)',
        year: 2021,
        url: 'https://arxiv.org/abs/2009.03300',
      },
      {
        author: 'Chollet, F.',
        title: 'On the Measure of Intelligence',
        publisher: 'arXiv',
        year: 2019,
        url: 'https://arxiv.org/abs/1911.01547',
      },
      {
        author: 'Jimenez, C. E. et al.',
        title: 'SWE-bench: Can Language Models Resolve Real-World GitHub Issues?',
        publisher: 'International Conference on Learning Representations (ICLR)',
        year: 2024,
        url: 'https://arxiv.org/abs/2310.06770',
      },
      {
        author: 'Glazer, E. et al.',
        title: 'FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning in AI',
        publisher: 'arXiv',
        year: 2024,
        url: 'https://arxiv.org/abs/2411.04872',
      },
      {
        author: 'Phan, L. et al.',
        title: "Humanity's Last Exam",
        publisher: 'arXiv',
        year: 2025,
        url: 'https://arxiv.org/abs/2501.14249',
      },
      {
        author: 'Rein, D. et al.',
        title: 'GPQA: A Graduate-Level Google-Proof Q&A Benchmark',
        publisher: 'arXiv',
        year: 2023,
        url: 'https://arxiv.org/abs/2311.12022',
      },
      {
        author: 'Wang, A. et al.',
        title: 'SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems',
        publisher: 'Advances in Neural Information Processing Systems (NeurIPS)',
        year: 2019,
        url: 'https://arxiv.org/abs/1905.00537',
      },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'economic-diffusion',
    index: 6,
    name: 'Economic diffusion model',
    shortName: 'Economic diffusion',
    summary:
      'Defines AGI by economic replacement rather than by capability, and estimates when AI actually performs most cognitive work across the economy given the deployment lags that every general-purpose technology has faced.',
    approach: `The model starts from a capability date borrowed from the ensemble's technical models (median near 2030) and then estimates the lag to economic replacement: the year in which AI systems perform the majority of cognitive work at less than human cost across the economy. The lag is built from historical analogues (electrification per David, the Solow paradox, the productivity J-curve), adoption data, and the gates on deployment: regulation and liability, complementary capital, trust, and wage competition from displaced workers. It then compares against Acemoglu's modest-gains estimates as a check on near-term speed. ASI in this frame is when AI makes most of the economy's consequential decisions, not only its tasks.`,
    assumptions: [
      'AGI is best understood as an economic threshold: systems doing most cognitive work in practice, at scale, cheaper than people.',
      'Deployment of a general-purpose technology takes decades because organizations must be redesigned around it, as with electricity and computing.',
      'Regulation, liability and professional licensing will lag capability by years in most sectors and jurisdictions.',
      'Complementary capital (robotics, data infrastructure, redesigned workflows) is required for most of the economic value and is built on physical timescales.',
      'Displaced labor lowers wages in affected tasks, which slows substitution at the margin.',
      "Capability itself arrives on the ensemble's median schedule; this model is about the lag, not the capability.",
    ],
    inputs: [
      {
        label: 'Electrification lag (David 1990)',
        value: 'about 40 years from the dynamo to measurable productivity gains',
        note: 'Factories had to be rebuilt around distributed electric drive before the gains appeared.',
      },
      {
        label: 'Computer productivity lag (Solow 1987)',
        value: 'visible in productivity statistics only in the late 1990s, about two decades after personal computers',
      },
      {
        label: 'Productivity J-curve (Brynjolfsson, Rock and Syverson 2021)',
        value: 'measured productivity dips before rising as intangible investment is expensed',
      },
      {
        label: 'Acemoglu 2024 estimate',
        value: 'total factor productivity gains of about 0.5 to 0.7 percent over a decade',
        note: 'Based on the share of tasks exposed and cost savings per task with current systems; GDP effects of around 1 percent, somewhat higher with adjustments.',
      },
      {
        label: 'Task exposure (Eloundou et al. 2023)',
        value: 'about 80 percent of the US workforce has at least 10 percent of tasks exposed; about 19 percent has half or more',
        note: 'Exposure is not adoption.',
      },
      {
        label: 'Firm adoption of AI in production',
        value: 'a minority of firms as of the latest survey data known to this model',
        note: 'US Census Bureau Business Trends and Outlook Survey; adoption rose year over year from single digits in 2023.',
      },
      {
        label: 'Assumed capability date',
        value: 'ensemble technical median near 2030',
      },
      {
        label: 'Assumed lag from capability to replacement',
        value: '10 to 15 years at the median',
      },
    ],
    agi: { p5: 2032, p25: 2037, p50: 2042, p75: 2050, p95: 2070 },
    asi: { p5: 2038, p25: 2046, p50: 2055, p75: 2068, p95: 2100 },
    reasoning: `The other models in the ensemble ask when a system can do the work. This one asks when the work is actually done by systems, and it insists that the second question is the one that matters for the economy, for labor, and for the meaning of the word transformative. History gives the lag. Paul David showed that the dynamo was commercially available in the 1880s but factory productivity did not respond until the 1920s, because the gains required rebuilding factories around distributed electric drive, retraining workers and replacing a capital stock that still worked. Robert Solow's 1987 remark that computers were everywhere except in the productivity statistics held for another decade before the late 1990s surge. Brynjolfsson, Rock and Syverson formalized this as a J-curve: the intangible investment needed to exploit a general-purpose technology is expensed rather than capitalized, so measured productivity falls before it rises.

AI has features that shorten the lag (software deploys instantly, and the technology can help design its own integration) and features that lengthen it. The lengthening features are the model's focus. Liability regimes for autonomous systems in medicine, law, finance and transport are built sector by sector and take years each. Most economic value requires complementary capital: robots for physical tasks, data pipelines, redesigned workflows and organizations that trust the output. Acemoglu's 2024 calculation, which takes the share of exposed tasks from Eloundou et al. and applies measured cost savings, gets total factor productivity gains of under one percent over a decade, a number that reflects near-term adoption of current systems rather than eventual capability, but which shows how far the present economy is from replacement. Firm-level adoption surveys through 2025 showed a minority of firms using AI in production at all.

The model takes the ensemble's technical median of about 2030 for capability and applies a lag distribution with a median of 10 to 15 years, shorter than electrification because software diffuses faster, longer than a product cycle because institutions do not. That gives an AGI median, defined as majority replacement of cognitive work, of 2042, with p25 at 2037 if AI-driven integration compresses the lag and p75 at 2050 if regulation or a backlash slows it. The p5 of 2032 is the case where capability arrives early and diffusion is unusually fast; the p95 of 2070 is the electrification case in full.

ASI here means systems making most of the economy's consequential decisions, which requires not just capability but delegated authority. The model puts that at a 2055 median, p25 2046, p95 2100, later than any capability-based model, because authority is transferred more slowly than tasks are.`,
    critique: `This model changes the question and then answers the new one, which is fair as long as readers notice. By defining AGI as economic replacement it guarantees later dates, and a reader combining it with capability-based models in one ensemble is averaging apples with oranges: the ensemble's AGI median becomes a blend of two different events. The historical analogues are also weaker than they look. Electrification required physical rebuilding of every factory; a language model is deployed by API and an agent by a configuration file. The relevant lag may be closer to the smartphone (about a decade to near-universal adoption) than to the dynamo. The model assumes institutions gate deployment, but it says little about competitive pressure: a firm that automates first captures margin, and in tradable sectors the laggards lose. Acemoglu's estimate is explicitly about the near term and about current systems, so citing it as evidence about the lag after AGI-level capability is a stretch. Most seriously, the model borrows its capability date from other models, so if those are wrong it is wrong twice, and its ASI definition (delegated authority) is not a capability at all and may never resolve cleanly.`,
    defaultWeight: 0.12,
    sources: [
      {
        author: 'Brynjolfsson, E., Rock, D. and Syverson, C.',
        title: 'The Productivity J-Curve: How Intangibles Complement General Purpose Technologies',
        publisher: 'American Economic Journal: Macroeconomics',
        year: 2021,
        url: 'https://doi.org/10.1257/mac.20180386',
      },
      {
        author: 'David, P. A.',
        title: 'The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox',
        publisher: 'American Economic Review',
        year: 1990,
      },
      {
        author: 'Acemoglu, D.',
        title: 'The Simple Macroeconomics of AI',
        publisher: 'NBER Working Paper 32487',
        year: 2024,
        url: 'https://www.nber.org/papers/w32487',
      },
      {
        author: 'Solow, R. M.',
        title: "We'd Better Watch Out",
        publisher: 'New York Times Book Review',
        year: 1987,
      },
      {
        author: 'Eloundou, T. et al.',
        title: 'GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models',
        publisher: 'arXiv',
        year: 2023,
        url: 'https://arxiv.org/abs/2303.10130',
      },
      {
        author: 'Brynjolfsson, E., Li, D. and Raymond, L.',
        title: 'Generative AI at Work',
        publisher: 'NBER Working Paper 31161',
        year: 2023,
        url: 'https://www.nber.org/papers/w31161',
      },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'skeptic',
    index: 7,
    name: 'Skeptical plateau model',
    shortName: 'Skeptic case',
    summary:
      'Gives full weight to the case that current architectures will plateau short of general intelligence, that benchmark gains overstate real capability, and that the history of AI counsels expecting another winter before AGI.',
    approach: `The model assembles the strongest arguments that the current paradigm (large pretrained transformers with reinforcement learning post-training) will not reach AGI, and estimates how long a new paradigm would take to be discovered, developed and scaled. It draws on the data wall (Villalobos et al.), documented reasoning brittleness and failure under distribution shift, the absence of continual learning and embodiment, energy and capital limits, the persistent gap between benchmark scores and job performance, and the base rate from previous AI booms and winters. It assigns probabilities to the paradigm reaching AGI anyway, to a successor paradigm arriving within a generation, and to a long stall, and combines them into a distribution whose median is late and whose tail includes never.`,
    assumptions: [
      'Scaling pretrained transformers yields diminishing returns on the capabilities that matter for generality, even as benchmark scores keep rising.',
      'Reliable reasoning, continual learning from experience, and grounded world models require architectural innovations that have not yet been found.',
      'The stock of high-quality human text is close to exhausted and synthetic data does not fully substitute for it.',
      'Benchmark performance systematically overstates job performance because benchmarks are static, contaminated and narrow.',
      'Fundamental paradigm shifts in AI have historically taken 15 to 30 years from first idea to dominance.',
      'Investment cycles in AI end in retrenchment when returns disappoint, delaying research by years.',
    ],
    inputs: [
      {
        label: 'Stock of public human-generated text (Villalobos et al. 2024)',
        value: 'about 300 trillion tokens, projected to be fully used between 2026 and 2032',
      },
      {
        label: 'Time from backpropagation to deep learning dominance',
        value: 'about 26 years (1986 to 2012)',
      },
      {
        label: 'Previous AI winters',
        value: 'mid 1970s (after the Lighthill report) and late 1980s to mid 1990s (after expert systems)',
      },
      {
        label: 'Gap between benchmark and deployment',
        value: 'expert-level exam scores alongside failure on multi-day autonomous work, as of 2025 evaluations',
        note: 'METR task horizons at 80 percent reliability remained well under a day in 2025.',
      },
      {
        label: 'Marcus critique (2018)',
        value: 'ten concerns including data hunger, shallow transfer, opacity and difficulty with hierarchical structure',
      },
      {
        label: 'LeCun position (2022)',
        value: 'autoregressive language models are not a path to human-level intelligence; proposes world-model architectures',
      },
      {
        label: 'Energy for continued scaling',
        value: 'multi-gigawatt campuses competing with grid build-out timelines of 5 to 10 years for new generation and transmission',
      },
      {
        label: 'Probability the current paradigm reaches AGI',
        value: 'about 25 percent in this model',
      },
    ],
    agi: { p5: 2035, p25: 2048, p50: 2065, p75: 2110, p95: 2250 },
    asi: { p5: 2042, p25: 2062, p50: 2090, p75: 2150, p95: 2300 },
    reasoning: `Every previous AI boom produced systems that impressed on demonstrations and failed in deployment, and every one ended in a winter. Perceptrons in the 1960s, expert systems in the 1980s: each time practitioners believed the remaining problems were engineering, and each time they were conceptual. The skeptic model asks whether 2026 is different and answers: probably not entirely.

Data. Villalobos et al. estimated the stock of public human-generated text at about 300 trillion tokens and projected that frontier training would exhaust it between 2026 and 2032. Synthetic data helps for verifiable domains like mathematics and code, but it does not obviously help with the tacit knowledge that most jobs depend on. Reasoning. Models trained with reinforcement learning on verifiable problems improved sharply on those problems, but studies through 2025 kept finding brittleness: performance that collapses under small distribution shifts, sensitivity to irrelevant details in a prompt, and confident errors on novel compositions of familiar pieces. Marcus catalogued these failure modes in 2018 and much of the list survives. Learning. No deployed system learns continually from experience the way a new employee does; each session starts from the same weights, and the workarounds (long context, retrieval, fine-tuning) are patches, not the capability. LeCun has argued that autoregressive prediction is the wrong objective for a system that must act in the world. Embodiment. Most economic activity involves the physical world, and robotics has improved slowly by comparison. Energy and capital. Multi-gigawatt campuses need power infrastructure that takes 5 to 10 years to build, and current spending assumes revenues that have not yet appeared.

The strongest version of the case is not that these problems are unsolvable but that they require a paradigm shift, and paradigm shifts in AI have taken a generation: backpropagation was popularized in 1986 and deep learning became dominant in 2012. The model assigns about 25 percent probability that scaling plus post-training gets to AGI anyway (contributing the p5 of 2035 and much of the mass before 2048), about 45 percent that a successor paradigm emerges and scales within a generation (the mass from the 2050s to the 2090s, with the median at 2065), and about 30 percent that progress stalls for reasons we do not understand, including the possibility that general intelligence requires something these machines cannot have. That last block puts the p75 at 2110 and the p95 beyond 2200, which the atlas renders as never.

ASI follows AGI only after the further problem of exceeding rather than matching human cognition is solved, and the model sees no reason to expect that to be fast. The median is 2090, and the p95 of 2300 says superintelligence may not be achievable by any method we can foresee.`,
    critique: `The skeptic's arguments were mostly made about earlier systems and have a poor track record. Marcus's 2018 list included tasks that models later performed; the claim that scaling would plateau was made at each of GPT-2, GPT-3 and GPT-4 scale and was wrong each time; and the data wall argument has so far been answered by synthetic data, reinforcement learning on verifiable tasks, and multimodal sources. The model assigns 30 percent to an indefinite stall without a mechanism, which is less a forecast than a refusal to forecast. The paradigm-shift base rate is drawn from a period when the field had a few thousand researchers and negligible compute; today it has hundreds of thousands and tools that accelerate research itself, so the 26 year interval is unlikely to repeat. The embodiment objection defines AGI more strictly than the atlas does. Winters happened when funding was concentrated in governments and a handful of firms; the current investment base is broad, and even a severe retrenchment would leave more capability in place than existed in 2022. Finally, the critique of benchmarks proves too much: if benchmarks are uninformative, the skeptic's own evidence of brittleness, which comes from benchmarks, is equally suspect.`,
    defaultWeight: 0.1,
    sources: [
      {
        author: 'Villalobos, P. et al.',
        title: 'Will we run out of data? Limits of LLM scaling based on human-generated data',
        publisher: 'arXiv',
        year: 2024,
        url: 'https://arxiv.org/abs/2211.04325',
      },
      {
        author: 'Marcus, G.',
        title: 'Deep Learning: A Critical Appraisal',
        publisher: 'arXiv',
        year: 2018,
        url: 'https://arxiv.org/abs/1801.00631',
      },
      {
        author: 'LeCun, Y.',
        title: 'A Path Towards Autonomous Machine Intelligence',
        publisher: 'OpenReview',
        year: 2022,
      },
      {
        author: 'Lighthill, J.',
        title: 'Artificial Intelligence: A General Survey',
        publisher: 'Science Research Council (UK)',
        year: 1973,
      },
      {
        author: 'Crevier, D.',
        title: 'AI: The Tumultuous History of the Search for Artificial Intelligence',
        publisher: 'Basic Books',
        year: 1993,
      },
      {
        author: 'Chollet, F.',
        title: 'On the Measure of Intelligence',
        publisher: 'arXiv',
        year: 2019,
        url: 'https://arxiv.org/abs/1911.01547',
      },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'low',
  },
  {
    id: 'ai-rd-acceleration',
    index: 8,
    name: 'AI research acceleration model',
    shortName: 'AI R&D feedback',
    summary:
      'Models the feedback loop in which AI systems automate a growing share of AI research, so algorithmic progress accelerates as capability rises, pulling AGI into the late 2020s and compressing the gap between AGI and superintelligence to a few years.',
    approach: `The model follows Davidson's compute-centric framework. It tracks the fraction of AI research tasks current systems can perform, using METR's task-horizon measurements and lab reports, and projects it forward. As automation rises, the effective number of researchers grows, algorithmic progress speeds up, and the compute needed for a given capability falls faster than the historical 8 to 12 month halving. The loop runs under assumptions about diminishing returns to research, the remaining algorithmic overhang, and hardware growth. AGI is when the system can automate essentially all of AI research; ASI is when the loop has run long enough to produce systems far beyond human researchers on the tasks that matter.`,
    assumptions: [
      'AI research is unusually automatable because its inputs and outputs are digital and its experiments run on the same compute the systems use.',
      'There is a substantial algorithmic overhang: existing hardware could support far more capable systems with better algorithms.',
      'Returns to research effort diminish, but not so steeply that a large increase in effective researchers fails to raise the rate of progress several-fold.',
      'Labs will direct automated researchers at improving their own systems rather than being prevented by policy or caution.',
      'The METR task-horizon trend of doubling every 4 to 7 months continues through the point where horizons cover research-scale tasks.',
      'Compute growth of at least 2x per year continues through 2030 so that the loop is not starved of experiments.',
    ],
    inputs: [
      {
        label: 'METR task horizon, early 2025',
        value: 'about one hour at 50 percent reliability, doubling every 7 months (closer to 4 months on the 2024 to 2025 subset)',
        note: 'Kwa et al. 2025.',
      },
      {
        label: 'Historical algorithmic progress',
        value: 'compute for fixed capability halves every 8 to 12 months (Ho et al. 2024)',
      },
      {
        label: 'Davidson 2023 model, 20 percent to 100 percent AI R&D automation',
        value: 'median about 3 years',
        note: 'The report gives roughly even odds of under 3 years and most of its probability to under 10 years.',
      },
      {
        label: 'AI 2027 scenario (Kokotajlo et al. 2025)',
        value: 'superhuman coders in 2027, full automation of AI research shortly after, superintelligence before 2028 in the fast branch',
        note: 'A scenario, not a forecast; the authors described their own medians as somewhat later than the scenario dates.',
      },
      {
        label: 'Frontier lab statements on internal AI use',
        value: 'a majority of new code at some labs written with AI assistance by 2025',
        note: 'Public company statements; not independently verified.',
      },
      {
        label: 'Assumed research speedup at full automation',
        value: '5x to 30x over the 2025 rate',
      },
      {
        label: 'Assumed algorithmic overhang',
        value: '2 to 4 orders of magnitude of effective compute',
      },
    ],
    agi: { p5: 2027, p25: 2028, p50: 2029, p75: 2032, p95: 2040 },
    asi: { p5: 2028, p25: 2030, p50: 2032, p75: 2036, p95: 2048 },
    reasoning: `The models above treat progress as exogenous: compute grows, algorithms improve, and capability follows. This model makes progress endogenous. AI research consists of proposing ideas, writing code, running experiments and reading results, all on computers, and frontier systems began doing all of them in earnest between 2024 and 2026. METR's measurements give the trajectory: the length of software tasks agents complete at 50 percent reliability doubled every 7 months from 2019 to early 2025, reaching about an hour, with the 2024 to 2025 subset closer to every 4 months. Research engineering tasks run from hours to weeks. At the 7 month rate, week-long horizons arrive around 2027; at the 4 month rate, in 2026.

Once systems perform most research engineering, the feedback begins. Davidson's compute-centric model, the most careful published treatment, tracks how automating research and chip production raises the growth rate of effective compute. Its central finding was that going from 20 percent to 100 percent automation of AI research takes about 3 years at the median, and that the software side of the loop can run several times faster than the hardware side by harvesting an existing overhang. Ho et al. measured the historical rate: compute for a fixed capability halved every 8 months or so with human researchers. If automated researchers raise research throughput 5x to 30x, and returns diminish as Davidson assumed, the halving time falls to a few months, and 2 to 4 orders of magnitude of effective compute arrive within 2 to 3 years with no new hardware.

The AI 2027 scenario made this concrete: superhuman coders in 2027, automated researchers next, and, in its fast branch, superintelligence before the end of 2027. Its authors said their own medians were later, and this model is later still, because it discounts for the parts of research that are not engineering (taste, choosing what to try, waiting for training runs) and for the possibility that labs slow the loop deliberately. The AGI median is 2029: full automation of AI research and, through it, of most other cognitive work. The p25 of 2028 corresponds to the faster METR pace; the p75 of 2032 to the slower pace with strong diminishing returns; the p95 of 2040 to the loop failing to close because research taste does not automate.

ASI follows quickly by construction. Once the loop runs at full speed, the gap between human-level and far beyond human depends on how many doublings the overhang holds and how fast systems that also automate chip design can expand hardware. The median gap is 3 years, giving ASI at 2032, with p25 at 2030 and p95 at 2048 if the overhang proves small and hardware becomes the sole bottleneck.`,
    critique: `This is the ensemble's most speculative model and it should be read that way. Its core quantity, the speedup from automated research, has never been measured; the 5x to 30x range comes from theory and from the authors of scenario literature, not from data. Research taste, the ability to choose which of a thousand experiments to run, may be the scarce input, and it is exactly the part that current systems show least evidence of. Experiments take wall-clock time: a frontier training run lasts months, and no number of automated researchers makes it shorter without more compute, which brings back the hardware constraints the model waves at. The METR extrapolation is doing most of the work and is drawn from software tasks with clean success criteria. Davidson's own model, which this one leans on, carries very wide uncertainty by its author's account. The scenario literature it cites is explicitly not a forecast. Finally, the model assumes labs will run the loop; a serious safety incident, regulation, or an internal decision to pause could add years, and the model's tails do not reflect that adequately.`,
    defaultWeight: 0.13,
    sources: [
      {
        author: 'Davidson, T.',
        title: 'What a compute-centric framework says about takeoff speeds',
        publisher: 'Open Philanthropy',
        year: 2023,
        url: 'https://www.openphilanthropy.org/research/what-a-compute-centric-framework-says-about-takeoff-speeds/',
      },
      {
        author: 'Kokotajlo, D. et al.',
        title: 'AI 2027',
        publisher: 'AI Futures Project',
        year: 2025,
        url: 'https://ai-2027.com/',
      },
      {
        author: 'Kwa, T. et al.',
        title: 'Measuring AI Ability to Complete Long Tasks',
        publisher: 'METR, arXiv',
        year: 2025,
        url: 'https://arxiv.org/abs/2503.14499',
      },
      {
        author: 'Ho, A. et al.',
        title: 'Algorithmic progress in language models',
        publisher: 'arXiv',
        year: 2024,
        url: 'https://arxiv.org/abs/2403.05812',
      },
      {
        author: 'Erdil, E. and Besiroglu, T.',
        title: 'Explosive growth from AI automation: A review of the arguments',
        publisher: 'arXiv',
        year: 2023,
        url: 'https://arxiv.org/abs/2309.11690',
      },
      {
        author: 'Good, I. J.',
        title: 'Speculations Concerning the First Ultraintelligent Machine',
        publisher: 'Advances in Computers, vol. 6',
        year: 1965,
        url: 'https://doi.org/10.1016/S0065-2458(08)60418-0',
      },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'low',
  },
];
