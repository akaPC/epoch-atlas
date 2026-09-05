import type { HorizonField } from '../schema';

export const field: HorizonField = {
  id: 'medicine-neurotech',
  index: 4,
  name: 'Medicine and Neurotechnology',
  code: 'MEDICINE',
  summary: `Medicine in September 2026 is a field of uneven fronts. Metabolic medicine has changed fastest: the GLP-1 class (semaglutide, tirzepatide and successors) produces 15 to 21 percent mean weight loss in pivotal trials, cuts major cardiovascular events by about a fifth in people with obesity, and is now used by tens of millions. AI diagnostics have crossed from research into routine use in imaging, with more than a thousand AI-enabled devices authorised by the FDA and randomised evidence that AI-supported mammography screening finds more cancers with less radiologist time. Large language models draft notes and answer clinical questions but have thin outcome evidence. Anti-amyloid antibodies slow early Alzheimer's disease modestly. Antimicrobial resistance kills more than a million people a year and the antibiotic pipeline remains thin, though deep learning has begun to surface new chemical classes. Brain-computer interfaces are the most visible frontier: a few dozen people carry implants with roughly 100 to 1,000 recording channels, decoding speech at conversational rates in the best cases, and the first pivotal trials are under way. No neural interface has full market approval for communication. Global delivery lags: roughly half the world lacks full coverage of essential health services.`,
  indexDefinition: `The index blends four measurable quantities: the fraction of global disease burden (in disability-adjusted life years) that can be prevented, cured or durably controlled with available treatments; diagnostic accuracy against gold-standard outcomes for the leading causes of death; the bandwidth of the best chronic brain interface in humans, expressed as simultaneously resolved neurons relative to the 86 billion in a human brain; and the fraction of the world's population with reliable access to those capabilities. A value of 100 means that essentially every non-ageing disease is treatable, that diagnosis approaches the information-theoretic limit of the available biology, that whole-brain read and write at cellular resolution is feasible within thermal and tissue limits, and that access is universal.`,
  physicalLimits: [
    {
      name: 'Neural tissue thermal limit',
      description: `Electronics placed in or on the cortex must dissipate heat into living tissue, and neurons are damaged by sustained temperature rises of more than about 1 degree Celsius. Thermal modelling of implanted arrays gives a design ceiling on the order of 40 milliwatts per square centimetre of cortical surface, with higher fluxes causing measurable tissue change. Because every amplified, digitised and transmitted channel costs energy, channel count on the implant scales inversely with energy per channel. This is the hard bound on any device that records millions of neurons from inside the skull, and it is why very high channel counts require moving computation outside the body.`,
      sources: [
        { author: 'Wolf, P. D.', title: 'Thermal considerations for the design of an implanted cortical brain-machine interface (BMI), in Indwelling Neural Implants: Strategies for Contending with the In Vivo Environment', publisher: 'CRC Press', year: 2008 },
        { author: 'Marblestone, A. H. et al.', title: 'Physical principles for scalable neural recording', publisher: 'Frontiers in Computational Neuroscience', year: 2013, url: 'https://www.frontiersin.org/articles/10.3389/fncom.2013.00137/full' },
      ],
    },
    {
      name: 'Channel count, tissue response and non-invasive signal-to-noise',
      description: `The number of neurons recorded simultaneously has doubled roughly every seven years since the 1950s, reaching hundreds to thousands per implant. Penetrating electrodes provoke gliosis and encapsulation that degrade signals over months to years, and the brain moves relative to the skull, so chronic single-unit stability is hard to guarantee. Recording from outside the skull faces a different limit: bone and scalp attenuate and blur electrical fields so that scalp EEG resolves activity only at the centimetre scale and cannot isolate single neurons. Magnetoencephalography and functional near-infrared methods improve on this but remain population-level. Non-invasive decoding of speech or intent is therefore bounded well below implanted performance regardless of the decoder used.`,
      sources: [
        { author: 'Stevenson, I. H. and Kording, K. P.', title: 'How advances in neural recording affect data analysis', publisher: 'Nature Neuroscience', year: 2011 },
        { author: 'Nunez, P. L. and Srinivasan, R.', title: 'Electric Fields of the Brain: The Neurophysics of EEG', publisher: 'Oxford University Press', year: 2006 },
        { author: 'Defossez, A. et al.', title: 'Decoding speech perception from non-invasive brain recordings', publisher: 'Nature Machine Intelligence', year: 2023 },
      ],
    },
    {
      name: 'Blood-brain barrier, diffusion and immune constraints',
      description: `The blood-brain barrier excludes nearly all large molecules and about 98 percent of small-molecule drugs, so most candidate therapies for neurological and psychiatric disease never reach their target at useful concentrations. Molecules that do cross must then diffuse through tissue, which limits the reach of anything delivered locally to millimetres, and the innate and adaptive immune systems respond to foreign proteins, viral vectors and implanted materials in ways that cannot be designed away entirely. These constraints do not forbid brain therapeutics, but they set the engineering problem: transport, shuttles, focused ultrasound opening, and vector design are slow, biological work, and no amount of computation removes the need to test them in living tissue.`,
      sources: [
        { author: 'Pardridge, W. M.', title: 'The blood-brain barrier: bottleneck in brain drug development', publisher: 'NeuroRx', year: 2005 },
      ],
    },
    {
      name: 'Neuron count and the resolution required for emulation',
      description: `A human brain contains about 86 billion neurons and roughly 100 trillion or more synapses. Reconstructing one cubic millimetre of human cortex at nanometre resolution with electron microscopy produced 1.4 petabytes of image data; the whole brain is about 1.2 million cubic millimetres, which implies more than a zettabyte of raw data at that resolution, before any inference about synaptic strengths, neuromodulator states or glial function, none of which the images capture directly. The debate over whether emulation is feasible turns on what resolution is sufficient; structural connectomes alone are known to be insufficient to predict function in even small circuits. Imaging speed, storage and the destructive nature of the method bound the timeline as much as computing does.`,
      sources: [
        { author: 'Azevedo, F. A. C. et al.', title: 'Equal numbers of neuronal and nonneuronal cells make the human brain an isometrically scaled-up primate brain', publisher: 'Journal of Comparative Neurology', year: 2009 },
        { author: 'Shapson-Coe, A. et al.', title: 'A petavoxel fragment of human cerebral cortex reconstructed at nanoscale resolution', publisher: 'Science', year: 2024 },
        { author: 'Sandberg, A. and Bostrom, N.', title: 'Whole Brain Emulation: A Roadmap', publisher: 'Future of Humanity Institute, University of Oxford', year: 2008 },
      ],
    },
    {
      name: 'Clinical trial statistics and the clock of biology',
      description: `Evidence accumulates at a rate set by sample size, effect size and the natural time course of disease. Detecting a 20 percent relative reduction in a rare outcome needs thousands of participants followed for years, and a five-year survival endpoint takes five years to observe no matter how the trial is designed. Between 2000 and 2015 only about 14 percent of drugs entering phase 1 reached approval, and the median programme took a decade. Faster discovery therefore shifts the bottleneck to trials, manufacturing and adoption rather than removing it. Surrogate endpoints, adaptive designs and better prediction can shrink but not abolish this constraint, because the purpose of a trial is to observe what the model did not predict.`,
      sources: [
        { author: 'Wong, C. H., Siah, K. W. and Lo, A. W.', title: 'Estimation of clinical trial success rates and related parameters', publisher: 'Biostatistics', year: 2019 },
        { author: 'Button, K. S. et al.', title: 'Power failure: why small sample size undermines the reliability of neuroscience', publisher: 'Nature Reviews Neuroscience', year: 2013 },
      ],
    },
  ],
  projections: [
    /* ------------------------------------------------------------ 2026-2030 */
    {
      fieldId: 'medicine-neurotech',
      window: '2026-2030',
      branch: 'slow',
      headline: 'AI reads images and notes, GLP-1 drugs scale, and BCIs stay in trials',
      narrative: `On the baseline branch the years to 2030 change medicine mostly where evidence already exists. AI image readers move from pilot to routine in mammography, chest radiography and diabetic retinopathy screening. The Swedish MASAI trial reported that AI-supported screen reading found about 20 percent more cancers while cutting radiologist reading workload by about 44 percent, and health systems copy that design rather than run a new trial for every product. Ambient documentation tools become standard in outpatient clinics in the United States and parts of Europe, saving clinician time with little demonstrated effect on outcomes. Large language models serve as reference and drafting assistants; a 2024 randomised trial found that the model alone outperformed physicians on diagnostic vignettes while physicians given the model improved little, so the design of the human-plus-model workflow dominates the period.

Metabolic medicine is the largest single shift in practice. Semaglutide and tirzepatide, which produced roughly 15 and 21 percent mean weight loss in their pivotal trials, are joined by oral small molecules and by lower-cost versions in markets where patents lapse first, taking the treated population from tens of millions toward one hundred million and beginning to bend rates of type 2 diabetes, sleep apnoea and cardiovascular events (the SELECT trial showed a 20 percent relative reduction in major adverse cardiovascular events).

Brain-computer interfaces remain investigational. A few dozen people worldwide carry implants from Neuralink, Synchron, Precision Neuroscience, Blackrock and academic groups, with channel counts from about 100 to about 1,000. The best speech decoders reach conversational rates: 62 words per minute in 2023 and 97.5 percent accuracy on a 125,000-word vocabulary in 2024. Pivotal trials start, but no communication BCI holds full market approval by 2030. Antimicrobial resistance worsens, with one or two new-class antibiotics approved against a need for many more. Gains in low-income countries come mainly from cheaper diagnostics and generic GLP-1 drugs rather than from new science.`,
      dependencies: ['chatgpt', 'glp-1-agonists', 'alphafold-2', 'mri-scanner', 'penicillin', 'germ-theory-pasteur'],
      uncertainties: [
        'Whether AI-supported reading generalises from Swedish screening programmes to fragmented health systems with different prevalence and equipment is not yet established.',
        'The long-term safety and durability of GLP-1 weight loss after discontinuation, and who pays for lifelong treatment, remain unresolved.',
        'Chronic stability of high-channel implants over three to five years in humans is still being measured, and early failures could delay pivotal trials.',
      ],
      indicators: [
        'Publication of the NHS-Galleri multicancer screening trial primary results and any decision to fund population screening.',
        'The first FDA premarket approval application for an implanted communication BCI, and the enrolment size of its pivotal trial.',
        'Annual counts of people receiving GLP-1 drugs in China, India and Brazil once generic semaglutide is available.',
        'Randomised trials of ambient documentation or LLM decision support that report patient outcomes rather than time saved.',
      ],
      confidence: 'high',
      confidenceJustification: 'Nearly everything in this window is already in late-stage trials or on the market, and the pipeline for 2030 approvals entered phase 3 by 2026. The main risk is adoption speed, not whether the technologies exist.',
      sources: [
        { author: 'Lang, K. et al.', title: 'Artificial intelligence-supported screen reading versus standard double reading in the Mammography Screening with Artificial Intelligence trial (MASAI): a clinical safety analysis of a randomised, controlled, non-inferiority, single-blinded, screening accuracy study', publisher: 'The Lancet Oncology', year: 2023 },
        { author: 'Card, N. S. et al.', title: 'An Accurate and Rapidly Calibrating Speech Neuroprosthesis', publisher: 'New England Journal of Medicine', year: 2024 },
        { author: 'Lincoff, A. M. et al.', title: 'Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes', publisher: 'New England Journal of Medicine', year: 2023 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Frontier models begin to run wet-lab loops while clinics move at trial speed',
      narrative: `The accelerated branch looks almost identical at the bedside before 2030, because any drug or device approved in this window was already in human testing when the period began. The divergence is upstream. By 2028 frontier models with tool use are running closed loops in automated laboratories: proposing compounds, ordering synthesis, reading assay results and revising hypotheses with limited human review. The output is a swelling preclinical pipeline rather than approved medicines. Antibiotic discovery is the clearest case. Deep learning had already surfaced halicin in 2020 and a new structural class in 2023 by screening chemical space that medicinal chemists had not explored; on this branch the number of such candidates entering animal studies rises from a handful per year to dozens, and the first of them reach phase 1 by 2030.

In diagnostics the change is breadth. Multimodal models that read images, notes, laboratory values and genomic data together move from benchmarks into prospective studies, and regulators begin to write guidance for systems that update after approval. Trial design changes more than trial duration: synthetic control arms built from registry data, adaptive dose finding and biomarker-based enrichment shrink some phase 2 programmes by a year or more, and the FDA accepts model-derived toxicology for an increasing share of early decisions.

Neurotechnology gains mainly on the decoding side. Models trained across participants let a new implant calibrate in minutes rather than hours, and decoders for handwriting, speech and cursor control converge on shared architectures. Channel counts still track manufacturing, so implants in 2030 carry roughly 1,000 to 4,000 electrodes, and the thermal ceiling of about 40 milliwatts per square centimetre is not yet binding. GLP-1 deployment matches the baseline. The measurable difference by 2030 is a pipeline two to three times larger than the historical trend and a regulatory apparatus visibly preparing for it.`,
      dependencies: ['chatgpt', 'alphafold-2', 'human-genome-completion', 'transistor', 'penicillin', 'vesalius-anatomy'],
      uncertainties: [
        'Whether automated laboratories generalise beyond narrow assay types to the messy biology of animal models is unproven at scale.',
        'Regulators may accept model-derived evidence more slowly than the branch assumes, in which case the pipeline grows without approvals following.',
        'The share of AI-generated candidates that fail in animals for reasons the models could not see is the central unknown for the whole branch.',
      ],
      indicators: [
        'Count of antibiotic or oncology candidates entering phase 1 that were first proposed by a model rather than a chemist.',
        'FDA or EMA guidance documents that formally accept adaptive or synthetic-control designs for pivotal trials.',
        'Reports of cross-participant BCI decoders that calibrate on a new user in under ten minutes.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The bedside picture is well anchored, but the upstream pipeline claims depend on automated laboratories and regulatory acceptance that are only beginning to be demonstrated as of 2026.',
      sources: [
        { author: 'Stokes, J. M. et al.', title: 'A Deep Learning Approach to Antibiotic Discovery', publisher: 'Cell', year: 2020 },
        { author: 'Wong, F. et al.', title: 'Discovery of a structural class of antibiotics with explainable deep learning', publisher: 'Nature', year: 2024 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI arrives in 2029, and patient care in 2030 has barely registered it',
      narrative: `The discontinuous branch places general-purpose AI at about 2029, yet a patient walking into a clinic in 2030 experiences much the same medicine as on the baseline. The reason is the clock of biology and regulation: a drug approved in 2030 entered phase 3 around 2026, and a device approved in 2030 finished its pivotal trial around 2028. What changes is everything that feeds those pipelines. From 2029 models design entire development programmes, choose targets from population-scale multi-omic data, propose molecules with predicted pharmacokinetics and toxicity, and write trial protocols. Automated laboratories run continuously. The preclinical pipeline is not two or three times the historical rate but an order of magnitude larger, and the binding constraints become animal facility capacity, manufacturing of clinical-grade material, and the number of patients and sites available for trials.

Regulators respond in this window rather than the next. Emergency-style pathways designed for pandemics are adapted for high-confidence candidates in conditions with no treatment, most visibly for pan-resistant bacterial infections, where one or two model-designed antibiotics reach compassionate use before formal approval. Diagnostic AI moves fastest because it needs no manufacturing: by 2030 a physician in most wealthy countries consults a system that reads the entire record, images and genome and proposes a differential with calibrated probabilities, and prospective studies show it matching or exceeding specialists in several domains.

Neurotechnology benefits from decoders that are effectively solved for the available signals; the limiting factor becomes hardware. Robotic insertion of many-thousand-channel arrays is demonstrated, and the community begins openly designing against the 40 milliwatt per square centimetre thermal ceiling with off-implant computation. Whole-mouse connectomics accelerates because segmentation is no longer the bottleneck. By 2030 the visible difference is not cured patients but a medical research enterprise that has stopped being rate-limited by human cognition and has started being limited by tissue, time and permission.`,
      dependencies: ['chatgpt', 'alphafold-2', 'human-genome-completion', 'ct-scanner', 'transistor', 'x-rays'],
      uncertainties: [
        'Whether an AGI-level system can reason correctly about biology it has not observed is untested, and confident wrong predictions could cause harm before they are caught.',
        'Political willingness to open emergency pathways for AI-designed drugs outside a pandemic is uncertain and may vary sharply by country.',
        'Manufacturing capacity for clinical-grade biologics and devices cannot expand by an order of magnitude within four years.',
      ],
      indicators: [
        'Any regulator granting compassionate-use access to a molecule that no human chemist proposed.',
        'Prospective multicentre studies where a general diagnostic model exceeds specialist accuracy across more than one organ system.',
        'Demonstration of a human implant with more than 10,000 recording channels operating within stated thermal limits.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The bedside claims are anchored by the 2026 pipeline, but the upstream claims rest on an AGI arrival in 2029 that is itself the least certain part of the scenario. If AGI arrives, the constraints named here are well documented.',
      sources: [
        { author: 'Wong, C. H., Siah, K. W. and Lo, A. W.', title: 'Estimation of clinical trial success rates and related parameters', publisher: 'Biostatistics', year: 2019 },
        { author: 'Musk, E. and Neuralink', title: 'An Integrated Brain-Machine Interface Platform With Thousands of Channels', publisher: 'Journal of Medical Internet Research', year: 2019, url: 'https://www.jmir.org/2019/10/e16194' },
      ],
    },

    /* ------------------------------------------------------------ 2030-2040 */
    {
      fieldId: 'medicine-neurotech',
      window: '2030-2040',
      branch: 'slow',
      headline: 'First approved speech BCIs, multicancer screening, and a slow turn in obesity',
      narrative: `On the baseline branch the 2030s deliver the medicine that entered trials in the late 2020s. The first implanted communication BCIs receive market approval in the early 2030s for people with severe paralysis, and by 2040 a few thousand people use them daily. Channel counts rise from roughly 1,000 to the 10,000 range as thin-film arrays and robotic insertion mature; stability rather than count is the practical limit, and explant rates over five years are the number that determines coverage decisions. Visual prostheses that stimulate cortex produce coarse phosphene vision that helps with navigation but not reading. Adaptive deep brain stimulation, which sensed and adjusted stimulation in Parkinson's disease in early 2020s trials, becomes the default for new implants, and closed-loop stimulation for treatment-resistant depression completes pivotal trials with effect sizes that justify use in a minority of severe cases.

Blood-based multicancer detection is funded for older adults in a few countries after the NHS-Galleri result, with sensitivity for stage I disease still below one in three, so its effect on mortality is real but modest and shows up late in the decade. Anti-amyloid therapy is given earlier because plasma p-tau tests make screening cheap, but the 25 to 35 percent slowing seen in 2023 trials does not become a cure, and the first anti-tau and combination trials read out near 2040.

Generic semaglutide reaches most of the world by the mid-2030s. In wealthy countries adult obesity prevalence turns down for the first time since records began, by a few percentage points, and rates of new type 2 diabetes fall with it. Antimicrobial resistance remains the field's failure: three to five new antibiotic classes reach approval, several first found by deep learning, but resistant infections still cause well over a million deaths a year, concentrated in South Asia and sub-Saharan Africa. AI decision support becomes ordinary and mostly invisible, embedded in records systems, with the largest measured gains in primary care settings that previously had no specialist access.`,
      dependencies: ['glp-1-agonists', 'alphafold-2', 'human-genome-completion', 'mri-scanner', 'insulin', 'anesthesia'],
      uncertainties: [
        'Whether payers will fund BCIs at prices comparable to cochlear implants or treat them as experimental for another decade is unknown.',
        'The mortality benefit of multicancer screening in a real population may be smaller than modelled if lead-time bias dominates.',
        'Obesity prevalence could plateau rather than fall if adherence and affordability limit sustained use.',
      ],
      indicators: [
        'Five-year device survival and explant rates reported from the first BCI pivotal cohorts.',
        'National obesity surveys showing three consecutive years of declining adult prevalence.',
        'WHO pipeline reports listing more than five antibacterial agents in phase 3 against priority pathogens.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The technologies are identifiable today and the timelines follow historical trial and approval durations. Adoption, pricing and the size of population-level effects are the main uncertainties.',
      sources: [
        { author: 'Oehrn, C. R. et al.', title: 'Chronic adaptive deep brain stimulation versus conventional stimulation in Parkinson’s disease: a blinded randomized feasibility trial', publisher: 'Nature Medicine', year: 2024 },
        { author: 'van Dyck, C. H. et al.', title: 'Lecanemab in Early Alzheimer’s Disease', publisher: 'New England Journal of Medicine', year: 2023 },
        { author: 'Naghavi, M. et al.', title: 'Global burden of bacterial antimicrobial resistance 1990-2021: a systematic analysis with forecasts to 2050', publisher: 'The Lancet', year: 2024 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'Automated research compresses discovery; approvals arrive in a wave after 2036',
      narrative: `With general-purpose AI at about 2032, the accelerated branch spends the first half of the decade filling pipelines and the second half approving what came out of them. Discovery is no longer the bottleneck: models propose targets, molecules, delivery vehicles and companion diagnostics together, and automated laboratories validate them in cells and animals within weeks. What stays slow is the human trial. Even with adaptive designs, biomarker enrichment and regulatory acceptance of model-predicted safety, a candidate entering phase 1 in 2033 reaches approval around 2038 to 2040. The visible result is a wave: the annual count of novel approvals roughly doubles late in the decade, weighted toward infectious disease, oncology and rare genetic disorders where endpoints are fast.

Antimicrobial resistance is the clearest beneficiary. The first antibiotics designed end to end by models are approved around 2036, and by 2040 a rapid-cycle approach exists in which a resistant isolate can be matched to a candidate compound in weeks, though manufacturing and distribution to the countries with the highest burden lag by years. In oncology, liquid biopsy sensitivity for early-stage disease improves as models integrate methylation, fragmentomics and protein panels, and most solid tumours in screened populations are found at stage I or II by 2040.

Neurotechnology gains on both hardware and decoding. Implants with 10,000 to 50,000 channels are demonstrated in humans by the late 2030s, with most computation moved off the implant to respect the thermal ceiling, and approvals extend from communication to motor restoration through brain-spine interfaces. Psychiatric closed-loop stimulation, guided by models that identify individual biomarkers of mood states, reaches a minority of severe cases. Mouse whole-brain connectomics finishes mid-decade and human cortical samples scale to cubic centimetres.

Deployment is gated by clinicians, manufacturing and payers rather than science. Models act as primary diagnosticians in low-income settings through phones and community health workers, which produces the largest measured mortality gains of the decade.`,
      dependencies: ['chatgpt', 'alphafold-2', 'human-genome-completion', 'ct-scanner', 'penicillin', 'germ-theory-pasteur'],
      uncertainties: [
        'The wave of approvals depends on regulators accepting smaller confirmatory trials, which could stall after a single high-profile safety failure.',
        'Manufacturing of biologics, viral vectors and neural implants may not scale as fast as candidate generation.',
        'The fraction of model-designed candidates that succeed in humans is unknown and sets the size of the wave.',
      ],
      indicators: [
        'Annual novel approvals exceeding 80 in a single year at the FDA, with more than a quarter attributed to model-originated candidates.',
        'A human implant with more than 10,000 channels reported with stable signals beyond two years.',
        'Health ministries in low-income countries reporting model-based triage as standard in primary care.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The direction is well supported by the mechanism of automated discovery, but timing depends on an AGI date and regulatory choices that have wide error bars.',
      sources: [
        { author: 'Abramson, J. et al.', title: 'Accurate structure prediction of biomolecular interactions with AlphaFold 3', publisher: 'Nature', year: 2024 },
        { author: 'Lorach, H. et al.', title: 'Walking naturally after spinal cord injury using a brain-spine interface', publisher: 'Nature', year: 2023 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superhuman R&D from 2031: the bottlenecks become tissue, time and consent',
      narrative: `In the discontinuous branch superintelligent systems direct medical research from about 2031, and the decade is defined by the collision between what they can propose and what biology and society allow. The proposals are effectively unlimited: mechanistic models of disease at cellular resolution, molecules and cell therapies designed against them, and delivery strategies for the blood-brain barrier that human groups had struggled with for decades. The limits are physical and institutional. A tumour still takes months to respond, an infant with a genetic disease still grows on a human timescale, and a regulator still requires that a human being take the drug before another human is prescribed it.

The regulatory settlement that emerges by mid-decade is a two-tier system. For conditions with no treatment and high certainty from in silico and animal evidence, approval follows small confirmatory human cohorts of tens to hundreds of people over one to two years. For prevention and chronic disease, where harms are subtle and populations are healthy, trials keep their historical size and length, so the benefits arrive after 2040. Under this settlement most resistant bacterial infections become treatable by 2037, several genetic disorders gain curative therapies, and the majority of solid tumours in screened populations are detected and treated at an early stage.

Neurotechnology moves fastest of all because devices need less biology. Implants approach 100,000 channels with almost all processing external, held under the roughly 40 milliwatt per square centimetre thermal ceiling by design. Optical and ultrasonic read-out methods are demonstrated in humans. Motor, speech, vision and somatosensory restoration are all approved, and the first elective, non-medical implants are debated and mostly prohibited. A complete mouse connectome and functional atlas exist by 2034, and the human whole-brain project is planned with its data volume, above a zettabyte, treated as a storage problem rather than an obstacle. Mortality statistics move only modestly by 2040; the pipeline that will move them is full.`,
      dependencies: ['chatgpt', 'alphafold-2', 'human-genome-completion', 'mri-scanner', 'transistor', 'vesalius-anatomy'],
      uncertainties: [
        'Society may refuse the two-tier settlement and hold all candidates to historical trial norms, which would push the whole branch a decade later.',
        'Superhuman models could be wrong about biology in ways that produce coordinated harm across many candidates before it is detected.',
        'Optical and ultrasonic read-out may not reach single-neuron resolution in humans within stated safety limits.',
      ],
      indicators: [
        'A formal regulatory pathway accepting in silico evidence as the primary basis for a first-in-human study.',
        'Reported cures of a resistant bloodstream infection with a compound first proposed by a model less than a year earlier.',
        'A human implant demonstrating more than 50,000 channels with documented cortical temperature measurements.',
      ],
      confidence: 'low',
      confidenceJustification: 'Everything here depends on superintelligence by 2031 and on regulatory changes with no precedent. The physical constraints cited are solid; the pace at which institutions bend to them is guesswork.',
      sources: [
        { author: 'Pardridge, W. M.', title: 'The blood-brain barrier: bottleneck in brain drug development', publisher: 'NeuroRx', year: 2005 },
        { author: 'Marblestone, A. H. et al.', title: 'Physical principles for scalable neural recording', publisher: 'Frontiers in Computational Neuroscience', year: 2013, url: 'https://www.frontiersin.org/articles/10.3389/fncom.2013.00137/full' },
      ],
    },

    /* ------------------------------------------------------------ 2040-2060 */
    {
      fieldId: 'medicine-neurotech',
      window: '2040-2060',
      branch: 'slow',
      headline: 'AGI in 2038 pays off as a research wave; cancer and infection give ground',
      narrative: `The baseline branch reaches general-purpose AI around 2038, so the 2040s look like the accelerated branch's 2030s: a decade of pipeline filling followed by a wave of approvals in the 2050s. The difference is that the surrounding infrastructure had thirty years to mature. Automated laboratories, regulatory acceptance of model-derived evidence, and biobanks covering hundreds of millions of people are already in place, so the wave is larger and arrives more smoothly than it would have earlier.

By 2060 most solid tumours in screened populations are detected at stage I, and combination targeted therapy with cell therapies makes long-term survival the norm for cancers that were fatal in 2026, though late-detected and treatment-resistant cancers persist. Antimicrobial resistance is managed rather than solved: a standing capacity to design and manufacture new agents faster than resistance evolves exists in wealthy countries and is extended to the rest of the world during the 2050s. Metabolic disease prevalence in adults is a fraction of its 2026 level. Anti-amyloid and anti-tau prevention, started in middle age on the basis of blood tests, cuts dementia incidence noticeably in cohorts born after 1980, and the first therapies that address neurodegeneration mechanistically rather than by clearing protein reach approval.

Neurotechnology follows a slower curve. Implants reach 10,000 to 100,000 channels by 2060, respecting the thermal ceiling through external computation, and restore communication, movement, hearing and coarse vision for the large majority of people with the relevant conditions who choose them. Non-invasive systems, bounded by the signal-to-noise of recording through bone, remain population-level tools for sleep, attention and rehabilitation. Connectomics completes the mouse in the 2040s and begins human whole-brain acquisition in the 2050s, a project measured in decades. Superintelligence near 2058 marks the end of the window rather than shaping it. Global delivery improves most where model-based primary care replaced absent specialists.`,
      dependencies: ['alphafold-2', 'human-genome-completion', 'ct-scanner', 'transistor', 'insulin', 'germ-theory-pasteur'],
      uncertainties: [
        'Late-stage AGI could arrive with regulatory systems that have grown more restrictive rather than more permissive after intervening failures.',
        'The rate at which resistance evolves against designed antibiotics could outpace the manufacturing cycle in low-income settings.',
        'Long-term consequences of lifelong metabolic and prevention therapies started in the 2030s will only be visible in this window.',
      ],
      indicators: [
        'Age-standardised cancer mortality falling by more than 2 percent per year for a sustained period in countries with screening.',
        'The first complete human cortical lobe reconstructed at synaptic resolution.',
        'Dementia incidence in cohorts reaching age 75 in the 2050s compared with cohorts a generation earlier.',
      ],
      confidence: 'low',
      confidenceJustification: 'Twenty to thirty years out, direction is more defensible than timing. The projection assumes the baseline AGI date and historical trial durations; both could shift by a decade.',
      sources: [
        { author: 'Sims, J. R. et al.', title: 'Donanemab in Early Symptomatic Alzheimer Disease: The TRAILBLAZER-ALZ 2 Randomized Clinical Trial', publisher: 'JAMA', year: 2023 },
        { author: 'Topol, E.', title: 'Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again', publisher: 'Basic Books', year: 2019 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'Post-ASI medicine: most disease treatable, whole-brain interfacing hits its limits',
      narrative: `With superintelligence at about 2040, the whole of this window is post-ASI on the accelerated branch, and medicine is limited by what tissue, time and people permit. Discovery is instantaneous by historical standards. The constraint that remains is the confirmatory human trial, now typically small and short but still required, and the physical plant: cell therapy manufacturing, viral vector production, implant fabrication, and the clinicians who deliver them. Over two decades these scale, and by 2060 the treatable fraction of global disease burden, excluding ageing itself, is large. Most cancers are prevented or cured; most infections are treatable by agents designed and manufactured within months of a new resistance pattern; most monogenic disorders have an approved therapy; and psychiatric disease is managed with a combination of designed molecules and closed-loop stimulation tuned to individual biomarkers. Dementia incidence falls sharply in cohorts that received mechanistic prevention from the 2040s.

Neurotechnology reaches the limits described in the physical constraints. Implants of 100,000 to one million channels exist, with almost all computation outside the skull and heat flux held under about 40 milliwatts per square centimetre. Beyond that, adding channels adds little clinically: communication, movement and sensation are restored at near-natural fidelity for the conditions that need them. The debate shifts from restoration to augmentation, and most jurisdictions permit elective implants for adults by the 2050s under strict consent rules, with uptake in the low single-digit percentages of the population.

The human connectome at synaptic resolution is completed around 2050, an acquisition measured in zettabytes, and it settles some questions about emulation and opens others. Structure alone does not predict function; the field learns which additional measurements are needed and whether they can be made in living tissue. Emulation of small mammals is demonstrated. Whether a human emulation is attempted becomes an ethical and political question, not a technical one. Global delivery lags the frontier by five to ten years but reaches most of the world by 2060.`,
      dependencies: ['alphafold-2', 'human-genome-completion', 'mri-scanner', 'transistor', 'penicillin', 'vesalius-anatomy'],
      uncertainties: [
        'Whether society permits small confirmatory trials for prevention in healthy people, where harms are hardest to detect, determines how much of this arrives before 2060.',
        'The measurements beyond structural connectivity that a functional emulation would need may not be obtainable in living tissue.',
        'Manufacturing and clinical capacity could remain the limit for decades in low-income countries.',
      ],
      indicators: [
        'Global age-standardised mortality from cancer and infection each falling below half their 2026 level.',
        'Publication of a complete human brain structural connectome.',
        'A validated emulation of a mammalian brain reproducing behaviour of the source animal.',
      ],
      confidence: 'low',
      confidenceJustification: 'The physical limits are well characterised and bound the projection, but the pace of institutional and manufacturing scale-up after superintelligence is speculative.',
      sources: [
        { author: 'Shapson-Coe, A. et al.', title: 'A petavoxel fragment of human cerebral cortex reconstructed at nanoscale resolution', publisher: 'Science', year: 2024 },
        { author: 'Wolf, P. D.', title: 'Thermal considerations for the design of an implanted cortical brain-machine interface (BMI), in Indwelling Neural Implants: Strategies for Contending with the In Vivo Environment', publisher: 'CRC Press', year: 2008 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2040-2060',
      branch: 'fast',
      headline: 'Medicine approaches biological ceilings; the emulation question becomes empirical',
      narrative: `On the discontinuous branch the 2040s begin a decade after superintelligence, and the medicine of this window is shaped by the accumulated output of systems that have run since 2031. Every disease with a known mechanism has candidate treatments; the question is which have been confirmed in humans and manufactured at scale. By 2045 cancer mortality in wealthy countries is a small fraction of its 2026 level, driven by prevention through continuous molecular monitoring rather than treatment. Resistant infection is a solved operational problem: surveillance detects new resistance, a designed agent is manufactured within weeks, and stockpiles exist. Most genetic disorders are corrected in early life. Psychiatric disease, historically the least tractable area, yields to a combination of mechanistic understanding from human circuit-level data, designed molecules that cross the blood-brain barrier via engineered shuttles, and closed-loop stimulation. Dementia becomes rare in treated populations.

Neurotechnology runs into its ceilings early in the window. One-million-channel implants are demonstrated, and beyond that the thermal limit and tissue response make further gains costly and clinically pointless for restoration. The field pivots to alternatives: optical methods through thinned bone, ultrasonic read-out, and molecular recording that stores activity in cellular material for later read-out. None reaches whole-brain single-neuron resolution in a living person within safety limits, and the projection treats that as unlikely for the rest of the century.

The complete human structural connectome is finished around 2045, and the emulation debate becomes empirical. Emulation of insects, then rodents, is validated against behaviour. For a human, the field concludes that structure plus a set of molecular measurements is required, that the acquisition is destructive, and that the result cannot be verified against the original. Whether to attempt it is contested; some jurisdictions prohibit it and some permit it with consent from terminally ill volunteers. Global delivery, gated by physical plant and politics, reaches most of the world by the 2050s.`,
      dependencies: ['alphafold-2', 'human-genome-completion', 'mri-scanner', 'transistor', 'x-rays', 'galenic-medicine'],
      uncertainties: [
        'A ceiling this close to biological limits assumes no unforeseen failure modes from decades of intensive intervention in healthy people.',
        'The willingness of societies to permit destructive human brain acquisition, even with consent, is unknown.',
        'Alternative read-out methods may hit safety limits sooner than assumed.',
      ],
      indicators: [
        'A validated rodent emulation reproducing learned behaviour of the source animal.',
        'Demonstrated human read-out of more than one million neurons with cortical temperature within 1 degree Celsius of baseline.',
        'Global under-70 mortality from cancer and infection falling below a quarter of 2026 levels.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is a projection of physical limits applied to a scenario, not a forecast of events. The limits are well founded; the assumption that institutions allow them to be approached is not.',
      sources: [
        { author: 'Sandberg, A. and Bostrom, N.', title: 'Whole Brain Emulation: A Roadmap', publisher: 'Future of Humanity Institute, University of Oxford', year: 2008 },
        { author: 'Azevedo, F. A. C. et al.', title: 'Equal numbers of neuronal and nonneuronal cells make the human brain an isometrically scaled-up primate brain', publisher: 'Journal of Comparative Neurology', year: 2009 },
      ],
    },

    /* ------------------------------------------------------------ 2060-2090 */
    {
      fieldId: 'medicine-neurotech',
      window: '2060-2090',
      branch: 'slow',
      headline: 'Superintelligence from 2058 transforms treatment; delivery becomes the whole story',
      narrative: `The baseline branch enters this window with superintelligence arriving around 2058, and the three decades that follow compress what the faster branches experienced earlier. The infrastructure inherited from the 2040s and 2050s, including automated laboratories, standing regulatory pathways for model-derived evidence, and biobanks covering most of humanity, means the pipeline fills quickly. Confirmatory trials remain the pacing item, and because the branch spent longer with human-led research, its institutions are more conservative: trials in healthy people for prevention retain historical sizes into the 2070s.

By 2090 the treatable fraction of disease burden approaches what the accelerated branch reached in 2060. Cancer is mostly prevented; infection is managed by rapid-cycle design; genetic disorders are corrected; dementia is uncommon in treated cohorts; and psychiatric disease is managed mechanistically. Neurotechnology reaches the thermal and tissue ceilings by the 2070s, with implants in the hundred-thousand to million-channel range restoring function at near-natural fidelity for those who need it. Elective augmentation is permitted in some jurisdictions late in the window.

The human structural connectome is completed in the 2060s and validated emulation of small mammals in the 2070s. The human emulation debate proceeds as on the other branches but a generation later, and this branch is the one where a society has the longest time to decide. Global delivery is the central variable. Because most of the world adopted model-based primary care in the 2030s and 2040s, the delivery gap in 2090 is smaller than the science gap was in 2026, but manufacturing and clinical infrastructure in the poorest regions still trails the frontier by a decade. The measurable outcome is that life expectancy at birth in low-income countries reaches what high-income countries had in the 2020s, and under-70 mortality from treatable causes falls to a small fraction of its 2026 level everywhere.`,
      dependencies: ['human-genome-completion', 'transistor', 'penicillin', 'insulin', 'germ-theory-pasteur', 'galenic-medicine'],
      uncertainties: [
        'Late-arriving superintelligence could meet an institutional environment that has grown more, rather than less, willing to accept model evidence, in which case this branch converges with the others sooner.',
        'Sixty years of unknown geopolitical and climate developments dominate the uncertainty in global delivery.',
        'Whether ageing itself becomes treatable, which this field excludes, would change disease burden in ways the index does not capture.',
      ],
      indicators: [
        'Life expectancy at birth in the lowest-income quintile of countries exceeding 80 years.',
        'Regulatory acceptance of confirmatory trials under 200 people for treatments in healthy populations.',
        'A complete human structural connectome.',
      ],
      confidence: 'low',
      confidenceJustification: 'Forty to sixty years out the projection rests on the branch definition and on physical limits, not on anything observable today. It should be read as a consistency check on the scenario rather than a forecast.',
      sources: [
        { author: 'World Health Organization', title: 'World health statistics 2024: monitoring health for the SDGs, Sustainable Development Goals', publisher: 'World Health Organization', year: 2024 },
        { author: 'Meara, J. G. et al.', title: 'Global Surgery 2030: evidence and solutions for achieving health, welfare, and economic development', publisher: 'The Lancet', year: 2015 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'Universal delivery, augmentation by choice, and the emulation decision',
      narrative: `Twenty years after superintelligence on the accelerated branch, the treatable fraction of disease burden is near its ceiling in the countries that led, and the window is about extending that everywhere and deciding what to do with the neural interfaces that exist. Physical plant is the limiting factor for delivery: manufacturing of cell and gene therapies, implant fabrication, and trained surgical and nursing capacity. Surgical robots that operate autonomously under supervision, approved for defined procedures in the 2040s, are the main lever for extending surgical care to the five billion people who lacked it in 2015, and by 2090 surgical access is close to universal. Diagnostic capacity is universal earlier because it runs on phones and low-cost sensors.

Remaining disease is dominated by what the field cannot address: ageing, trauma, and conditions in people who decline treatment. Antimicrobial resistance is a permanent maintenance task. Psychiatric and neurodevelopmental conditions are managed but not eliminated, because the goals of treatment in these areas depend on individual and cultural judgement that the technology does not settle.

Neurotechnology is at its physical ceiling for implanted restoration and has been for a generation. Elective interfaces for communication, memory support and sensory extension are legal for adults in most jurisdictions, with uptake that plateaus in the low tens of percent in wealthy countries, limited by surgery and by preference rather than cost. Non-invasive systems, still bounded by recording through bone, are ubiquitous and low bandwidth.

The whole-brain emulation question, made empirical in the 2050s, is decided in this window. The projection assumes at least one jurisdiction permits a human attempt with consent, that the result is a system whose relationship to the original person is disputed, and that the dispute shapes law on personhood for the rest of the century. This is the least certain claim in the field and is included because the physical possibility exists and the decision cannot be deferred indefinitely.`,
      dependencies: ['human-genome-completion', 'mri-scanner', 'transistor', 'anesthesia', 'vesalius-anatomy', 'galenic-medicine'],
      uncertainties: [
        'Autonomous surgery may remain limited to a narrow set of procedures, leaving the surgical access gap open longer.',
        'Elective implant uptake could be much lower or higher than assumed depending on cultural attitudes that cannot be forecast.',
        'No jurisdiction may permit a human emulation attempt, in which case the question remains open indefinitely.',
      ],
      indicators: [
        'The share of surgical procedures performed autonomously under supervision exceeding half in any national system.',
        'Any national statute defining the legal status of an emulated mind.',
        'Global under-5 and under-70 mortality converging to within 20 percent across income quintiles.',
      ],
      confidence: 'low',
      confidenceJustification: 'The medical claims follow from the branch and physical limits; the social claims about augmentation and emulation are informed speculation about choices that cannot be predicted.',
      sources: [
        { author: 'Saeidi, H. et al.', title: 'Autonomous robotic laparoscopic surgery for intestinal anastomosis', publisher: 'Science Robotics', year: 2022 },
        { author: 'Yuste, R. et al.', title: 'Four ethical priorities for neurotechnologies and AI', publisher: 'Nature', year: 2017 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2060-2090',
      branch: 'fast',
      headline: 'A mature post-scarcity medicine bounded by biology, consent and what people want',
      narrative: `Thirty years after superintelligence, the discontinuous branch has a medicine in which the science is complete for practical purposes and the remaining questions are about deployment, preference and the limits of tissue. Almost every disease with a mechanism is preventable or curable, with treatments confirmed in humans over the 2030s and 2040s and manufactured at global scale by the 2050s. Delivery is universal by the 2060s because the branch invested early in autonomous surgical and manufacturing capacity. Residual mortality is from trauma, ageing, and choice. Population health statistics converge across countries within this window.

Neurotechnology has been at its implanted ceiling since the 2040s. The window's work is on alternatives and on what people do with the capability. Optical, ultrasonic and molecular recording methods reach their own limits, and the field settles on a consensus that whole-brain single-neuron read-out in a living human is not achievable within thermal and tissue constraints, and that write access at cellular resolution across the brain is bounded the same way. What is achievable is high-bandwidth interfacing with a few cortical regions, and this is used for communication, memory support, sensory extension and shared control of external systems. Uptake among healthy adults is a matter of culture and varies widely; the projection makes no claim about its level.

The human emulation question was made empirical in the 2040s and decided, in at least some jurisdictions, in the 2050s or 2060s. This window lives with the consequences. The projection assumes emulations exist, that their legal status is contested, and that the answer differs by country. The broader effect on medicine is that the boundary between treating a person and modifying one has become the central ethical question of the field, replacing the older question of whether a treatment works. Medicine's limits in 2090 are not scientific; they are the physical limits of tissue described elsewhere in this entry, the clock of biology, and what people consent to.`,
      dependencies: ['human-genome-completion', 'ct-scanner', 'transistor', 'x-rays', 'vesalius-anatomy', 'galenic-medicine'],
      uncertainties: [
        'A branch with superintelligence in 2031 is dominated by non-medical uncertainties about whether and how such systems are governed, which this field does not model.',
        'The consensus that whole-brain living read-out is infeasible could be overturned by a physical method not currently foreseen.',
        'Population health convergence assumes stable global institutions over sixty years.',
      ],
      indicators: [
        'Under-70 mortality from disease below 5 percent of its 2026 level in any large country.',
        'A peer-reviewed physical argument, accepted by the field, that living whole-brain cellular read-out is bounded by thermal limits.',
        'Legal recognition of any emulated mind in any jurisdiction.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the far tail of the most aggressive scenario. Physical limits bound it well; almost nothing else about it can be forecast.',
      sources: [
        { author: 'Marblestone, A. H. et al.', title: 'Physical principles for scalable neural recording', publisher: 'Frontiers in Computational Neuroscience', year: 2013, url: 'https://www.frontiersin.org/articles/10.3389/fncom.2013.00137/full' },
        { author: 'Sandberg, A. and Bostrom, N.', title: 'Whole Brain Emulation: A Roadmap', publisher: 'Future of Humanity Institute, University of Oxford', year: 2008 },
      ],
    },

    /* ------------------------------------------------------------ 2090-2126 */
    {
      fieldId: 'medicine-neurotech',
      window: '2090-2126',
      branch: 'slow',
      headline: 'The baseline reaches the plateau two generations after the others',
      narrative: `By the last window the baseline branch has spent nearly seventy years with superintelligence and has converged on the same physical and biological plateau as the faster branches, roughly a generation behind. The treatable fraction of disease burden is near its ceiling everywhere; delivery is universal; antimicrobial resistance is a maintenance task; and residual mortality is from ageing, trauma and choice. The measurable difference from the other branches is not the end state but the path: cumulative deaths from treatable disease between 2026 and 2126 are higher on this branch by an amount that depends mostly on how fast the 2060s and 2070s went, and the atlas does not attempt to estimate it.

Neurotechnology is at its ceiling. Implanted interfaces with up to about a million channels, held under the thermal limit by external computation, restore function for everyone who wants it, and elective interfacing for adults is legal in most places with uptake set by culture. Non-invasive interfaces are ubiquitous and low bandwidth. The physical consensus that living whole-brain single-neuron read-out is infeasible holds, and the field treats it as a settled limit like the diffraction limit in optics: circumventable in special cases, not in general.

The human structural connectome was completed in the 2060s, mammalian emulation validated in the 2070s, and the human emulation question decided at different times in different countries during the 2080s and 2090s. This window inherits whatever those decisions were. The projection assumes at least one attempt has been made somewhere and that its status remains disputed.

What remains for medicine in 2126 is the same on every branch: the biology of ageing, which this field excludes and the longevity field addresses; the individual and cultural questions of what treatment is for; and the maintenance of an enormous physical and institutional apparatus that keeps the plateau in place. The index approaches but does not reach 100, because universal access and complete treatability are asymptotes, not destinations.`,
      dependencies: ['transistor', 'penicillin', 'x-rays', 'germ-theory-pasteur', 'vesalius-anatomy', 'galenic-medicine'],
      uncertainties: [
        'A century out, the only claims with support are physical limits; every institutional claim is a consistency assumption.',
        'Civilisational disruption at any point in the century would reset the trajectory in ways no field-level projection can model.',
        'A physical method for living whole-brain read-out not currently imaginable would change the ceiling.',
      ],
      indicators: [
        'Convergence of the baseline and accelerated branches on the same measured disease burden by the 2100s.',
        'Whether the thermal ceiling for implanted electronics remains the accepted bound in the neuroengineering literature.',
      ],
      confidence: 'low',
      confidenceJustification: 'One hundred years out, this is a description of a plateau implied by physical limits, not a forecast. It exists to make the index endpoint explicit.',
      sources: [
        { author: 'Wolf, P. D.', title: 'Thermal considerations for the design of an implanted cortical brain-machine interface (BMI), in Indwelling Neural Implants: Strategies for Contending with the In Vivo Environment', publisher: 'CRC Press', year: 2008 },
        { author: 'Azevedo, F. A. C. et al.', title: 'Equal numbers of neuronal and nonneuronal cells make the human brain an isometrically scaled-up primate brain', publisher: 'Journal of Comparative Neurology', year: 2009 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'A stable plateau: medicine as maintenance, neurotechnology as a settled choice',
      narrative: `The accelerated branch spends this window on a plateau it reached in the 2070s. Disease that has a mechanism is prevented or cured; delivery is universal; and the institutions that keep this in place, from resistance surveillance to global manufacturing of designed agents, are as ordinary as water treatment was in 2026. The field's research effort is small relative to its 2030s peak and is directed at maintenance: new pathogens, new resistance, rare conditions, and the long-term consequences of a century of intervention in healthy people, which is the largest genuine scientific uncertainty of the window. If lifelong prevention started in the 2040s has cumulative harms that only appear after fifty years, they appear here.

Neurotechnology has reached and accepted its ceilings. The physical consensus is that implanted read-out is bounded near a million channels by heat and tissue, that non-invasive read-out is bounded at the population level by bone, and that living whole-brain cellular access is infeasible. Within those bounds the technology is mature, safe and unremarkable. Elective interfacing is a personal choice that has stabilised at a level set by culture rather than by capability, and it differs by country as diet or religion do.

The emulation question has been decided and the decisions have had a generation to play out. The projection assumes emulated minds exist in some jurisdictions, that their number is small, that their legal status varies, and that their existence has shifted the definition of medicine in those places to include the maintenance of non-biological substrates, a field this atlas does not model. In the rest of the world medicine remains the care of biological people.

The index for this branch approaches its asymptote. What separates it from 100 is not science but the irreducible residue: access that is nearly but never perfectly universal, conditions that are managed rather than cured because cure is not what the person wants, and the biology of ageing, which belongs to another field.`,
      dependencies: ['transistor', 'insulin', 'x-rays', 'anesthesia', 'vesalius-anatomy', 'galenic-medicine'],
      uncertainties: [
        'Long-term harms of century-long preventive intervention are the one scientific unknown that could reverse part of the plateau.',
        'Whether emulated minds exist at all depends on decisions no projection can make.',
        'Institutional stability over a century is assumed and cannot be justified from within this field.',
      ],
      indicators: [
        'Cohort studies of people who began lifelong prevention in the 2040s reporting fifty-year outcomes.',
        'Whether medical research funding has fallen to a maintenance level relative to health system spending.',
      ],
      confidence: 'low',
      confidenceJustification: 'A consistency description of an asymptote implied by physical limits and the branch definition. Nothing here is a forecast in the ordinary sense.',
      sources: [
        { author: 'Sandberg, A. and Bostrom, N.', title: 'Whole Brain Emulation: A Roadmap', publisher: 'Future of Humanity Institute, University of Oxford', year: 2008 },
        { author: 'Nunez, P. L. and Srinivasan, R.', title: 'Electric Fields of the Brain: The Neurophysics of EEG', publisher: 'Oxford University Press', year: 2006 },
      ],
    },
    {
      fieldId: 'medicine-neurotech',
      window: '2090-2126',
      branch: 'fast',
      headline: 'Ninety years past superintelligence: the same plateau, reached earliest',
      narrative: `The discontinuous branch reaches this window with the longest experience of post-superintelligence medicine, and its distinguishing feature is not a higher ceiling but a longer time on the plateau. The physical limits in this entry bound every branch identically: the thermal ceiling of roughly 40 milliwatts per square centimetre for implanted electronics, the blood-brain barrier, the signal-to-noise of recording through bone, and the impossibility of verifying an emulation against its original. Superintelligence does not remove these; it finds their edges faster. By the 2090s the edges have been found and the field has been operating within them for two generations.

Medicine is maintenance. Disease with a mechanism is prevented or cured, delivery is universal, and residual mortality is from ageing, trauma and choice. The one open scientific question is the same as on the accelerated branch: the very long-term consequences of interventions begun in the 2030s and 2040s, now observable across seventy to ninety years. On this branch those consequences, if any, appear a decade earlier and there has been more time to correct them.

Neurotechnology is mature within its bounds. Interfaces restore function for anyone who wants it, elective interfacing is a settled cultural variable, and the consensus on the infeasibility of living whole-brain cellular access has held for fifty years. The emulation decisions were made in the 2050s and 2060s and their consequences are older here than anywhere else; the projection assumes emulated minds exist, that their legal status is settled differently in different places, and that a field of substrate maintenance exists alongside medicine.

What the atlas can say with any confidence about 2126 is only this: the three branches converge on the same plateau, the plateau is set by tissue and physics rather than by intelligence, and the differences between branches are entirely in the path, measured in cumulative avoidable deaths between 2026 and the date each branch arrived. The index approaches its asymptote and stops.`,
      dependencies: ['transistor', 'penicillin', 'x-rays', 'anesthesia', 'vesalius-anatomy', 'galenic-medicine'],
      uncertainties: [
        'The claim that physical limits bound every branch identically assumes no unknown physics; that assumption is strong but not certain.',
        'A branch with superintelligence in 2031 carries a century of non-medical risk that dominates any medical projection.',
        'Whether emulated minds exist and in what number is a social decision that cannot be forecast.',
      ],
      indicators: [
        'Whether the neuroengineering literature still treats the thermal ceiling as binding a century from now.',
        'Convergence of the three branches on the same measured disease burden.',
      ],
      confidence: 'low',
      confidenceJustification: 'The endpoint of the most aggressive scenario. Only the physical bounds carry weight; the rest is a description of what consistency with those bounds requires.',
      sources: [
        { author: 'Marblestone, A. H. et al.', title: 'Physical principles for scalable neural recording', publisher: 'Frontiers in Computational Neuroscience', year: 2013, url: 'https://www.frontiersin.org/articles/10.3389/fncom.2013.00137/full' },
        { author: 'Pardridge, W. M.', title: 'The blood-brain barrier: bottleneck in brain drug development', publisher: 'NeuroRx', year: 2005 },
      ],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 14, low: 13, high: 15 },
      { year: 2030, value: 17, low: 15, high: 19 },
      { year: 2040, value: 25, low: 20, high: 31 },
      { year: 2060, value: 42, low: 32, high: 54 },
      { year: 2090, value: 66, low: 48, high: 80 },
      { year: 2126, value: 80, low: 58, high: 92 },
    ],
    moderate: [
      { year: 2026, value: 14, low: 13, high: 15 },
      { year: 2030, value: 17, low: 15, high: 20 },
      { year: 2040, value: 33, low: 25, high: 42 },
      { year: 2060, value: 60, low: 45, high: 74 },
      { year: 2090, value: 80, low: 60, high: 92 },
      { year: 2126, value: 87, low: 66, high: 96 },
    ],
    fast: [
      { year: 2026, value: 14, low: 13, high: 15 },
      { year: 2030, value: 18, low: 15, high: 22 },
      { year: 2040, value: 42, low: 28, high: 56 },
      { year: 2060, value: 72, low: 52, high: 87 },
      { year: 2090, value: 86, low: 64, high: 96 },
      { year: 2126, value: 90, low: 68, high: 98 },
    ],
  },
  sources: [
    { author: 'Willett, F. R. et al.', title: 'A high-performance speech neuroprosthesis', publisher: 'Nature', year: 2023, url: 'https://www.nature.com/articles/s41586-023-06377-x' },
    { author: 'Musk, E. and Neuralink', title: 'An Integrated Brain-Machine Interface Platform With Thousands of Channels', publisher: 'Journal of Medical Internet Research', year: 2019, url: 'https://www.jmir.org/2019/10/e16194' },
    { author: 'Wilding, J. P. H. et al.', title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity', publisher: 'New England Journal of Medicine', year: 2021, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183' },
    { author: 'Jastreboff, A. M. et al.', title: 'Tirzepatide Once Weekly for the Treatment of Obesity', publisher: 'New England Journal of Medicine', year: 2022, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038' },
    { author: 'Topol, E.', title: 'Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again', publisher: 'Basic Books', year: 2019 },
    { author: 'Murray, C. J. L. et al.', title: 'Global burden of bacterial antimicrobial resistance in 2019: a systematic analysis', publisher: 'The Lancet', year: 2022 },
    { author: 'Rajpurkar, P., Chen, E., Banerjee, O. and Topol, E. J.', title: 'AI in health and medicine', publisher: 'Nature Medicine', year: 2022 },
    { author: 'Mitchell, P. et al.', title: 'Assessment of Safety of a Fully Implanted Endovascular Brain-Computer Interface for Severe Paralysis in 4 Patients: The Stentrode With Thought-Controlled Digital Switch (SWITCH) Study', publisher: 'JAMA Neurology', year: 2023 },
  ],
  lastReviewed: '2026-09-04',
};
