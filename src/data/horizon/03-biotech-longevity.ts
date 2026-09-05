import type { HorizonField } from '../schema';

/* ------------------------------------------------------------------ */
/* Shared citations                                                    */
/* ------------------------------------------------------------------ */

const GOMPERTZ = {
  author: 'Benjamin Gompertz',
  title: 'On the Nature of the Function Expressive of the Law of Human Mortality, and on a New Mode of Determining the Value of Life Contingencies',
  publisher: 'Philosophical Transactions of the Royal Society',
  year: 1825,
};
const HAYFLICK = {
  author: 'Leonard Hayflick and Paul S. Moorhead',
  title: 'The serial cultivation of human diploid cell strains',
  publisher: 'Experimental Cell Research',
  year: 1961,
};
const DONG_VIJG = {
  author: 'Xiao Dong, Brandon Milholland and Jan Vijg',
  title: 'Evidence for a limit to human lifespan',
  publisher: 'Nature',
  year: 2016,
  url: 'https://www.nature.com/articles/nature19793',
};
const BARBI = {
  author: 'Elisabetta Barbi, Francesco Lagona, Marco Marsili, James W. Vaupel and Kenneth W. Wachter',
  title: 'The plateau of human mortality: Demography of longevity pioneers',
  publisher: 'Science',
  year: 2018,
};
const HALLMARKS_2013 = {
  author: 'Carlos López-Otín, Maria A. Blasco, Linda Partridge, Manuel Serrano and Guido Kroemer',
  title: 'The Hallmarks of Aging',
  publisher: 'Cell',
  year: 2013,
  url: 'https://doi.org/10.1016/j.cell.2013.05.039',
};
const HALLMARKS_2023 = {
  author: 'Carlos López-Otín, Maria A. Blasco, Linda Partridge, Manuel Serrano and Guido Kroemer',
  title: 'Hallmarks of aging: An expanding universe',
  publisher: 'Cell',
  year: 2023,
  url: 'https://doi.org/10.1016/j.cell.2022.11.001',
};
const OCAMPO = {
  author: 'Alejandro Ocampo, Pradeep Reddy, Juan Carlos Izpisua Belmonte and colleagues',
  title: 'In Vivo Amelioration of Age-Associated Hallmarks by Partial Reprogramming',
  publisher: 'Cell',
  year: 2016,
  url: 'https://doi.org/10.1016/j.cell.2016.11.052',
};
const LU_2020 = {
  author: 'Yuancheng Lu, David A. Sinclair and colleagues',
  title: 'Reprogramming to recover youthful epigenetic information and restore vision',
  publisher: 'Nature',
  year: 2020,
};
const JUMPER = {
  author: 'John Jumper, Richard Evans, Alexander Pritzel, Demis Hassabis and colleagues',
  title: 'Highly accurate protein structure prediction with AlphaFold',
  publisher: 'Nature',
  year: 2021,
  url: 'https://www.nature.com/articles/s41586-021-03819-2',
};
const ABRAMSON = {
  author: 'Josh Abramson, Jonas Adler, John Jumper and colleagues',
  title: 'Accurate structure prediction of biomolecular interactions with AlphaFold 3',
  publisher: 'Nature',
  year: 2024,
  url: 'https://www.nature.com/articles/s41586-024-07487-w',
};
const RFDIFFUSION = {
  author: 'Joseph L. Watson, David Juergens, David Baker and colleagues',
  title: 'De novo design of protein structure and function with RFdiffusion',
  publisher: 'Nature',
  year: 2023,
};
const ANZALONE = {
  author: 'Andrew V. Anzalone, David R. Liu and colleagues',
  title: 'Search-and-replace genome editing without double-strand breaks or donor DNA',
  publisher: 'Nature',
  year: 2019,
  url: 'https://www.nature.com/articles/s41586-019-1711-4',
};
const KOMOR = {
  author: 'Alexis C. Komor, Yongjoo B. Kim, Michael S. Packer, John A. Zuris and David R. Liu',
  title: 'Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage',
  publisher: 'Nature',
  year: 2016,
};
const FRANGOUL = {
  author: 'Haydar Frangoul, David Altshuler, Selim Corbacioglu and colleagues',
  title: 'CRISPR-Cas9 Gene Editing for Sickle Cell Disease and beta-Thalassemia',
  publisher: 'New England Journal of Medicine',
  year: 2021,
  url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2031054',
};
const FDA_CASGEVY = {
  author: 'U.S. Food and Drug Administration',
  title: 'FDA Approves First Gene Therapies to Treat Patients with Sickle Cell Disease',
  publisher: 'FDA',
  year: 2023,
  url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease',
};
const GILLMORE = {
  author: 'Julian D. Gillmore, Ed Gane, Jorg Taubel and colleagues',
  title: 'CRISPR-Cas9 In Vivo Gene Editing for Transthyretin Amyloidosis',
  publisher: 'New England Journal of Medicine',
  year: 2021,
  url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2107454',
};
const MUSUNURU = {
  author: 'Kiran Musunuru, Sarah A. Grandinette, Rebecca C. Ahrens-Nicklas and colleagues',
  title: 'Patient-Specific In Vivo Gene Editing to Treat a Rare Genetic Disease',
  publisher: 'New England Journal of Medicine',
  year: 2025,
};
const CAGAN = {
  author: 'Alex Cagan, Adrian Baez-Ortega, Inigo Martincorena and colleagues',
  title: 'Somatic mutation rates scale with lifespan across mammals',
  publisher: 'Nature',
  year: 2022,
  url: 'https://www.nature.com/articles/s41586-022-04618-z',
};
const LINDAHL = {
  author: 'Tomas Lindahl',
  title: 'Instability and decay of the primary structure of DNA',
  publisher: 'Nature',
  year: 1993,
};
const HORVATH = {
  author: 'Steve Horvath',
  title: 'DNA methylation age of human tissues and cell types',
  publisher: 'Genome Biology',
  year: 2013,
};
const HARRISON = {
  author: 'David E. Harrison, Randy Strong, Richard A. Miller and colleagues',
  title: 'Rapamycin fed late in life extends lifespan in genetically heterogeneous mice',
  publisher: 'Nature',
  year: 2009,
};
const BAKER_SENESCENCE = {
  author: 'Darren J. Baker, Bennett G. Childs, Jan M. van Deursen and colleagues',
  title: 'Naturally occurring p16Ink4a-positive cells shorten healthy lifespan',
  publisher: 'Nature',
  year: 2016,
};
const LINCOFF = {
  author: 'A. Michael Lincoff, Kirstine Brown-Frandsen, Helen M. Colhoun and colleagues',
  title: 'Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes',
  publisher: 'New England Journal of Medicine',
  year: 2023,
};
const KAWAI = {
  author: 'Tatsuo Kawai, Leonardo V. Riella and colleagues',
  title: 'Xenotransplantation of a Porcine Kidney for End-Stage Kidney Disease',
  publisher: 'New England Journal of Medicine',
  year: 2025,
};
const MONTGOMERY = {
  author: 'Robert A. Montgomery, Jeffrey M. Stern and colleagues',
  title: 'Results of Two Cases of Pig-to-Human Kidney Xenotransplantation',
  publisher: 'New England Journal of Medicine',
  year: 2022,
};
const OLSHANSKY = {
  author: 'S. Jay Olshansky, Bradley J. Willcox, Lloyd Demetrius and Hiram Beltrán-Sánchez',
  title: 'Implausibility of radical life extension in humans in the twenty-first century',
  publisher: 'Nature Aging',
  year: 2024,
};
const OEPPEN_VAUPEL = {
  author: 'Jim Oeppen and James W. Vaupel',
  title: 'Broken Limits to Life Expectancy',
  publisher: 'Science',
  year: 2002,
};
const KIRKWOOD = {
  author: 'Thomas B. L. Kirkwood',
  title: 'Evolution of ageing',
  publisher: 'Nature',
  year: 1977,
};
const WILLIAMS = {
  author: 'George C. Williams',
  title: 'Pleiotropy, Natural Selection, and the Evolution of Senescence',
  publisher: 'Evolution',
  year: 1957,
};
const PARDRIDGE = {
  author: 'William M. Pardridge',
  title: 'The blood-brain barrier: bottleneck in brain drug development',
  publisher: 'NeuroRx',
  year: 2005,
};
const MINGOZZI = {
  author: 'Federico Mingozzi and Katherine A. High',
  title: 'Immune responses to AAV vectors: overcoming barriers to successful gene therapy',
  publisher: 'Blood',
  year: 2013,
};
const SHAY_WRIGHT = {
  author: 'Jerry W. Shay and Woodring E. Wright',
  title: 'Hayflick, his limit, and cellular ageing',
  publisher: 'Nature Reviews Molecular Cell Biology',
  year: 2000,
};
const NASEM_HHGE = {
  author: 'International Commission on the Clinical Use of Human Germline Genome Editing',
  title: 'Heritable Human Genome Editing',
  publisher: 'National Academies Press',
  year: 2020,
};
const JINEK = {
  author: 'Martin Jinek, Krzysztof Chylinski, Ines Fonfara, Michael Hauer, Jennifer A. Doudna and Emmanuelle Charpentier',
  title: 'A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity',
  publisher: 'Science',
  year: 2012,
};
const KAEBERLEIN = {
  author: 'Matt Kaeberlein, Peter S. Rabinovitch and George M. Martin',
  title: 'Healthy aging: The ultimate preventative medicine',
  publisher: 'Science',
  year: 2015,
};
const VAUPEL_2021 = {
  author: 'James W. Vaupel, Francisco Villavicencio and Marie-Pier Bergeron-Boucher',
  title: 'Demographic perspectives on the rise of longevity',
  publisher: 'Proceedings of the National Academy of Sciences',
  year: 2021,
};

/* ------------------------------------------------------------------ */
/* Field                                                               */
/* ------------------------------------------------------------------ */

export const field: HorizonField = {
  id: 'biotech-longevity',
  index: 3,
  name: 'Biotechnology and Longevity',
  code: 'BIOTECH',
  summary: `Biotechnology is the set of tools for reading, writing and editing living systems, and longevity research is the attempt to turn those tools on aging itself. In September 2026 the field sits at an unusual point. Reading DNA is nearly free: a human genome that took thirteen years and roughly three billion dollars to finish in 2003 now costs a few hundred dollars and a day. Writing is maturing: the first CRISPR medicine, exagamglogene autotemcel (Casgevy), was approved in late 2023 for sickle cell disease and beta thalassemia, and in 2025 a bespoke base-editing therapy was designed, tested in animals and infused into a single infant within about six months of diagnosis. Protein structure prediction is effectively solved for single chains, and generative models now design binders and enzymes with no natural precursor. Aging biology, by contrast, has produced compelling mouse results (rapamycin, senolytics, partial epigenetic reprogramming) and not one human intervention shown to slow aging. Gene therapies list at two to four million dollars per patient and reach hundreds of people a year, not the millions who qualify. The field's central tension is that discovery is accelerating faster than delivery, manufacturing, trials and payment can absorb.`,
  indexDefinition: `The index measures how far medicine can deliberately and safely rewrite human biology. It combines four components: the share of diseases addressable by approved genetic or cellular therapies; delivery to any tissue, including the brain, with redosing; replacement organs on demand; and, weighted most heavily, demonstrated effect on human aging, measured as a change in the Gompertz slope rather than a shift in disease-specific mortality. A value of 100 is the plausible ceiling: any somatic genome edited on demand, organs regrown or replaced routinely, and adult biological age held steady so that the risk of death no longer doubles every eight years, leaving lifespan bounded by accident, brain damage that cannot be repaired, and choice. September 2026 sits at 12.`,
  physicalLimits: [
    {
      name: 'Gompertz mortality law',
      description: `Since 1825 it has been known that adult human mortality rises roughly exponentially with age, doubling about every eight years from a low point near age 30. This regularity has held across two centuries of medical progress: interventions have lowered the intercept (the starting hazard) but have not changed the slope. The law bounds every projection in this field because a therapy that only removes one cause of death shifts the curve downward without bending it, and the gain in life expectancy from eliminating even cancer entirely is only a few years. Only an intervention that lengthens the doubling time counts as slowing aging.`,
      sources: [GOMPERTZ, VAUPEL_2021],
    },
    {
      name: 'Hayflick limit and telomere biology',
      description: `Normal human somatic cells divide a finite number of times in culture, roughly 40 to 60 doublings, before entering replicative senescence, a limit tied to telomere shortening in cells that lack telomerase. Senescent cells accumulate with age and secrete inflammatory signals that damage neighbouring tissue. The limit is also a tumour suppression mechanism: cells that bypass it by reactivating telomerase are the cells that become cancers. Any intervention that extends replicative capacity therefore trades against oncogenic risk, and clearance of senescent cells, not their rejuvenation, is the safer near-term route.`,
      sources: [HAYFLICK, SHAY_WRIGHT, BAKER_SENESCENCE],
    },
    {
      name: 'Somatic mutation accumulation and the cost of DNA repair',
      description: `DNA decays spontaneously: depurination, deamination and oxidation damage tens of thousands of bases per cell per day, and repair, though remarkable, is imperfect. Across mammals, somatic mutation rates scale inversely with lifespan, so that species reach a similar mutational burden at the end of life regardless of how long they live. Repair is also energetically and informationally expensive: a cell cannot check every base against a reference it does not have. This bounds the reversibility of aging, above all in post-mitotic neurons, which cannot be replaced without replacing the person, and it means that even a perfectly maintained body accumulates irreducible damage.`,
      sources: [LINDAHL, CAGAN],
    },
    {
      name: 'Delivery barriers: the blood-brain barrier and vector immunity',
      description: `Roughly 98 percent of small molecules and essentially all large molecules are excluded from the brain by the blood-brain barrier, and the viral vectors that carry gene therapies (chiefly adeno-associated virus) provoke neutralizing antibodies that make redosing impossible in most patients and cause dangerous inflammation at high doses. Lipid nanoparticles reach the liver efficiently and other organs poorly. Every in vivo therapy projected here has to solve tissue targeting and immune tolerance, and these are engineering problems with slow, empirical, primate-scale feedback loops, not problems that yield to design alone.`,
      sources: [PARDRIDGE, MINGOZZI],
    },
    {
      name: 'Evolutionary constraints and the observed lifespan ceiling',
      description: `Aging exists because selection weakens after reproduction: genes that help early and harm late accumulate (antagonistic pleiotropy), and organisms invest in maintenance only as far as their expected wild lifespan justifies (disposable soma). Human biology is therefore tuned for perhaps 40 to 70 years of maintenance, not 150. Empirically, the oldest verified human, Jeanne Calment, died at 122 in 1997, and the maximum reported age at death has not risen since the 1990s despite rising life expectancy, though the mortality plateau after 105 and the sparsity of data leave the existence of a hard limit contested. Any projection of lifespans beyond about 125 requires changing the underlying biology, not improving care.`,
      sources: [WILLIAMS, KIRKWOOD, DONG_VIJG, BARBI],
    },
  ],
  projections: [
    /* ---------------------------------------------------------------- */
    /* 2026-2030                                                         */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'biotech-longevity',
      window: '2026-2030',
      branch: 'slow',
      headline: 'Gene editing stays rare and expensive; longevity remains a mouse science',
      narrative: `Between 2026 and 2030 the baseline branch looks like the present with more products. Ex vivo editing for sickle cell disease and beta thalassemia remains the flagship: Casgevy, approved by the FDA in December 2023 with a United States list price of about 2.2 million dollars, is joined by base-editing competitors in late trials, but uptake stays in the low thousands worldwide because each course requires stem cell collection, busulfan conditioning and weeks in hospital. In vivo liver editing (transthyretin amyloidosis, hereditary angioedema, PCSK9 for familial hypercholesterolemia) reaches or approaches approval by 2030 after safety scrutiny of liver toxicity signals, priced comparably to existing gene therapies. The 2025 demonstration that a bespoke base editor could be designed and dosed for one infant in about six months becomes a repeatable template for perhaps dozens of ultra-rare cases a year, supported by regulators willing to treat the delivery platform as validated, but each case still costs on the order of a million dollars in labor and reagents. AI tools compress target discovery and protein design, and structure prediction is a standard step in every program, yet the clinical calendar is unchanged: a phase 3 trial still takes three to five years. Aging medicine produces no approved indication. Partial reprogramming enters first-in-human ophthalmic trials; senolytics report small trials with biomarker endpoints; GLP-1 agonists continue to show reductions in cardiovascular events (about 20 percent relative reduction in the SELECT trial) and become the most widely used drugs that touch age-related mortality, without changing the Gompertz slope. Daily life for most people: the same doctors, drugs and hospitals, with genome sequencing offered at birth in a few health systems and pig kidney xenotransplant trials enrolling their first cohorts. Someone alive today gains from better cardiometabolic control, not from anything that acts on aging itself.`,
      dependencies: ['casgevy-crispr-therapy', 'glp-1-agonists', 'crispr-discovery', 'human-genome-completion', 'recombinant-dna', 'dna-double-helix'],
      uncertainties: [
        'Liver toxicity events in in vivo editing programs could delay the first systemic CRISPR approvals past 2030.',
        'Payer resistance to multi-million-dollar one-time therapies may keep patient counts below even the low-thousands estimate.',
        'The first-in-human partial reprogramming trials could show unexpected oncogenic or inflammatory signals that set the whole aging program back by years.',
      ],
      indicators: [
        'Cumulative number of patients infused with Casgevy or a competing ex vivo editing therapy passing 2,000 worldwide.',
        'FDA or EMA approval of any in vivo CRISPR or base-editing product for a systemic disease.',
        'Publication of a repeatable regulatory pathway for individualized editing therapies with more than ten patients treated under it.',
        'First safety readout from a partial reprogramming trial in human optic neuropathy.',
      ],
      confidence: 'high',
      confidenceJustification: 'The window is short and the pipeline is visible: the products that could be approved by 2030 are already in late trials. The main risk to this projection is a safety event, not a surprise success.',
      sources: [FDA_CASGEVY, FRANGOUL, GILLMORE, MUSUNURU, LINCOFF],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2026-2030',
      branch: 'moderate',
      headline: 'Automated discovery starts to bite, but the clinic keeps its own calendar',
      narrative: `The accelerated branch diverges from baseline only at the margins before 2030, because AGI arrives around 2032 and the tools of 2026 to 2030 are the same tools. What differs is the tempo of preclinical work. Frontier models are already used in 2026 to draft experimental designs, analyze sequencing data and propose protein sequences; on this branch, by 2028 to 2029 a growing share of target identification, guide RNA optimization and capsid engineering runs in closed loops between models and automated laboratories, and the number of investigational new drug filings for genetic medicines rises noticeably above the baseline trend. Approved products through 2030 are nearly identical to the baseline list: ex vivo editing for hemoglobinopathies, one or two in vivo liver programs, a pipeline of bespoke editors for ultra-rare disease. Prices stay in the 2 to 4 million dollar range because manufacturing, not discovery, sets them. The visible differences are in the pipeline: more candidates per year, more tissue-targeted delivery vehicles (engineered AAV capsids, lipid nanoparticles with organ-specific ligands) entering phase 1, and the first AI-designed proteins with no natural precursor, including binders and enzymes, in human trials. In aging biology, this branch sees the first well-powered biomarker trials, with epigenetic clocks and proteomic aging scores used as secondary endpoints, and animal data for combination interventions arriving faster because the animal work is planned and analyzed by models. Xenotransplantation trials proceed on the same timeline as baseline, since pigs and immunology do not speed up. For an individual, 2030 on this branch feels like 2030 on the baseline branch, with a stronger sense that something has changed upstream: more trials recruiting, and more press about discoveries that will not reach a pharmacy for a decade.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'pcr', 'dna-double-helix'],
      uncertainties: [
        'Whether closed-loop automated laboratories actually raise the rate of clinically relevant candidates, rather than the rate of publishable ones, is untested at scale.',
        'AI-designed proteins may show immunogenicity or manufacturing problems that natural scaffolds do not, delaying their first approvals.',
        'Epigenetic clocks may fail to win regulatory acceptance as surrogate endpoints, leaving aging trials without a feasible design.',
      ],
      indicators: [
        'Year-on-year growth in investigational new drug filings for gene and cell therapies exceeding 20 percent.',
        'A fully de novo designed protein therapeutic entering phase 2.',
        'A regulator accepting an aging clock or composite aging biomarker as a secondary endpoint in a registrational trial.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The approved-product list is nearly forced by today\'s pipeline, so that part is confident. The claim about a measurable preclinical acceleration by 2029 depends on the branch\'s AGI timing and on laboratory automation maturing on schedule.',
      sources: [ABRAMSON, RFDIFFUSION, HORVATH, MUSUNURU],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2026-2030',
      branch: 'fast',
      headline: 'AGI arrives in 2029; biology notices, but nothing reaches patients before 2030',
      narrative: `On the discontinuous branch AGI arrives around 2029, and the last year of the window is different in kind from the first. Through 2028 the field looks like the baseline: Casgevy and its competitors, in vivo liver editing approaching approval, bespoke editors for a few dozen ultra-rare patients, first-in-human partial reprogramming for optic neuropathy, and xenotransplant trials of pig kidneys carrying ten or more gene edits. In 2029 and 2030, systems at or above human level in research design begin to run biology programs end to end: reading the literature, proposing mechanisms, designing constructs, ordering synthesis and interpreting results from automated labs. The immediate output is not approved medicine. It is a flood of preclinical candidates, delivery vehicles and hypotheses about aging, and a sharp fall in the cost of designing a therapy. What does not change is the clock downstream. A phase 1 trial still requires dosing a human and waiting; a mouse lifespan study still takes about three years; manufacturing capacity for viral vectors and edited cells is fixed by plants that take years to build and validate. By the end of 2030 the count of approved gene and cell therapies is within a handful of the baseline branch. The index moves little because approval and delivery are the measure of capability, not candidates. Prices remain in the millions per patient. Who has access: the same few thousand patients in wealthy health systems. What changes in daily life is anticipation, a boom in biotech capital, and the start of a hard public argument about whether trial rules written for human-paced research should bend when the discovery side no longer limits the pace. Someone alive today should read this window as the moment the queue formed, not the moment it cleared.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'recombinant-dna', 'dna-double-helix'],
      uncertainties: [
        'AGI around 2029 is the branch anchor, and if it slips even two years this window collapses into the baseline.',
        'Automated laboratories may not scale to the throughput a superhuman designer can use, leaving the bottleneck in the wet lab rather than the trial.',
        'A well-publicized death in an accelerated trial could produce a regulatory backlash that slows every branch.',
        'Capital may concentrate in a few firms with automated capacity, narrowing rather than widening the pipeline.',
      ],
      indicators: [
        'A frontier model credited as the principal designer of a therapeutic that enters a clinical trial.',
        'Capital expenditure on viral vector and cell therapy manufacturing capacity doubling within two years.',
        'Regulators publishing formal guidance on AI-designed therapeutics and platform-based approval.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The product list through 2030 is confident for the same reason as the baseline. The claim that approvals lag discovery by construction is robust, since it rests on trial and manufacturing timelines that cannot be compressed by design alone.',
      sources: [MUSUNURU, KAWAI, JUMPER],
    },

    /* ---------------------------------------------------------------- */
    /* 2030-2040                                                         */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'biotech-longevity',
      window: '2030-2040',
      branch: 'slow',
      headline: 'The genetic medicine decade: hundreds of indications, millions of dollars each',
      narrative: `Baseline 2030 to 2040 is the decade genetic medicine becomes ordinary for rare disease. Prime and base editing reach approval for several monogenic conditions, in vivo liver editing is standard for a few indications, and the number of approved gene, cell and editing therapies worldwide grows from a few dozen in 2026 to well over a hundred by 2040. AI assistance, with AGI around 2038 on this branch, steadily raises preclinical throughput but leaves trial durations and manufacturing untouched until the end of the decade. Prices fall slowly: automated closed-system manufacturing and off-the-shelf allogeneic cells bring some ex vivo therapies under one million dollars, and in vivo lipid nanoparticle products approach the hundreds of thousands. Access broadens to tens of thousands of patients per year in high-income countries, with gene therapy for sickle cell disease reaching some African centers through point-of-care manufacturing pilots. Delivery beyond the liver improves: engineered capsids and receptor-targeted nanoparticles cross the blood-brain barrier at useful efficiency in primates and enter trials for neurological disease, but immune responses to vectors continue to cap redosing. In aging, the decade's main result is negative and clarifying: metformin, rapamycin analogs and first-generation senolytics complete outcome trials with modest or null effects on composite aging endpoints, while partial reprogramming shows tissue-level benefit in the eye and skin without systemic use. Xenotransplant kidneys reach approval by the late 2030s, with graft survival measured in years, easing but not ending the transplant shortage. For a person who is 40 in 2026, this decade delivers better cancer immunotherapy, better cardiometabolic drugs and the option of a pig kidney, and no evidence that their own aging has slowed. Life expectancy at birth in rich countries rises by about one year, mostly from cardiovascular gains.`,
      dependencies: ['casgevy-crispr-therapy', 'mrna-vaccines', 'crispr-discovery', 'human-genome-completion', 'recombinant-dna', 'germ-theory-pasteur'],
      uncertainties: [
        'Rapamycin analogs or senolytics could show a clinically meaningful effect in outcome trials, which would move this branch closer to the accelerated one.',
        'Blood-brain barrier crossing capsids validated in primates may fail in humans for immunological reasons, delaying neurological gene therapy by a decade.',
        'Xenograft survival could plateau at months rather than years if chronic rejection proves harder than the first cases suggested.',
      ],
      indicators: [
        'More than 100 approved gene, cell or editing therapies listed by FDA and EMA combined.',
        'A redosable in vivo gene therapy platform demonstrated in humans.',
        'Median pig kidney xenograft survival in trials exceeding two years.',
        'Outcome readouts from any rapamycin-analog or senolytic trial with an aging composite endpoint.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The direction is well supported by the current pipeline and by the historical cadence of therapy approvals. The counts and prices are estimates, and the null result for first-generation aging drugs is a judgment based on mouse-to-human translation history rather than data.',
      sources: [ANZALONE, HARRISON, MONTGOMERY, KAWAI, HALLMARKS_2023],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2030-2040',
      branch: 'moderate',
      headline: 'Automated research compresses discovery; trials and factories set the pace',
      narrative: `With AGI around 2032, the accelerated branch spends this decade with research systems that can run the discovery half of biology largely on their own. By the mid-2030s automated labs operate around the clock under model direction, and the constraints migrate: the number of credible candidates for any target grows faster than any trial network can test them. Regulators respond with adaptive and platform approvals, so a validated delivery vehicle paired with a new payload can enter humans in months rather than years. The approved catalog grows faster than baseline, reaching several hundred genetic medicines by 2040, and prices fall further because AI-designed manufacturing processes and fully automated cell production bring many products into the low hundreds of thousands of dollars. In vivo editing in the brain, muscle and heart reaches approval late in the decade for a few indications. Aging biology changes character: with ASI around 2040 on this branch, the last years of the window see model-generated mechanistic accounts of aging that outrun human review, but human evidence remains thin, because a trial that reads out on mortality in middle-aged adults takes a decade by construction. What exists by 2040 is a first generation of combination interventions (senolytic plus tissue-restricted reprogramming plus metabolic drugs) with good data in dogs and non-human primates and early human safety data, plus validated aging clocks accepted by regulators as surrogate endpoints. Xenotransplant organs are approved and produced at scale by the late 2030s. For someone who is 40 in 2026 and 54 in 2040, the personal effect is that the first plausible aging interventions are in trials they can enroll in, and that the genetic risks in their sequence have specific, if expensive, corrections available. Their own aging clock has not been turned back.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'recombinant-dna', 'dna-double-helix'],
      uncertainties: [
        'Regulators may not adopt platform approvals at the pace assumed, in which case the approved catalog tracks the baseline despite a much larger pipeline.',
        'Dog and primate data for combination aging interventions may not translate, as has been the pattern for single agents.',
        'Manufacturing may prove harder to automate than discovery, holding prices near baseline levels through 2040.',
      ],
      indicators: [
        'Regulatory frameworks that let a new payload on a validated vector enter humans without a full new preclinical package.',
        'Published lifespan or healthspan results for combination interventions in companion dogs or non-human primates.',
        'An approved in vivo editing therapy for a central nervous system indication.',
      ],
      confidence: 'medium',
      confidenceJustification: 'The mechanism (discovery accelerates, trials do not) is robust across branches. The specific counts and the timing of regulatory adaptation are judgment calls with wide error bars.',
      sources: [ABRAMSON, HALLMARKS_2023, HORVATH, OCAMPO],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2030-2040',
      branch: 'fast',
      headline: 'Superhuman research meets the human trial: discovery is free, evidence is not',
      narrative: `On the discontinuous branch ASI arrives around 2031, and from then on the design side of biology is effectively unconstrained. Within a few years, model-directed labs characterize delivery vehicles for most tissues, design editors with error rates below detection, and propose interventions against every one of the twelve hallmarks of aging. What remains binding is everything that runs on biological and social time. Dosing a human and observing an outcome still takes as long as the outcome takes to occur; a five-year mortality endpoint takes five years even when the drug was designed in an afternoon. Regulators, under strong pressure, shift by mid-decade to platform approvals, continuous evidence collection and heavy use of surrogate endpoints, and the trial count rises to levels the 2026 system could not have staffed. Manufacturing is the second constraint: viral vectors, nanoparticles and engineered cells need plants, and the decade's capital flows largely into building them. By 2040 the approved genetic medicine catalog runs to thousands of indications, most monogenic diseases are treatable at diagnosis, and prices for in vivo therapies fall toward tens of thousands of dollars in high-income systems. The first interventions with measurable effect on biological age in humans (partial reprogramming under tightly controlled expression, senescent cell clearance, systemic factor replacement) are approved for defined indications by the late 2030s, with effect sizes on aging clocks of a few years, and no one yet knows whether that translates to lifespan. Xenotransplant and, increasingly, engineered organs are routine. The public argument about how much risk volunteers may accept, and who gets treated first, dominates the decade. For a person who is 40 in 2026, this branch means they are 54 in 2040 with access to the first real aging medicine, at a stage where its long-run effect on them is unknown.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'recombinant-dna', 'dna-double-helix'],
      uncertainties: [
        'ASI around 2031 is the branch anchor; any delay pushes every date in this window out by the same amount.',
        'Society may refuse to relax trial ethics, in which case superhuman discovery produces a decade of candidates and few approvals.',
        'Interventions that move aging clocks by a few years may turn out to move the clock without moving the outcome.',
        'Oncogenic risk from reprogramming may appear only after five to ten years of follow-up.',
      ],
      indicators: [
        'Approval of any therapy whose registrational endpoint is a change in a validated aging biomarker.',
        'Number of concurrent interventional trials in genetic medicine exceeding five times the 2026 level.',
        'Cost of goods for an in vivo editing therapy published below 10,000 dollars per dose.',
      ],
      confidence: 'low',
      confidenceJustification: 'This window depends on a discontinuity in research capability and on regulatory and social responses that have no precedent. The claim that the constraint moves to trials and manufacturing is robust; the quantities are not.',
      sources: [HALLMARKS_2023, OCAMPO, LU_2020, MUSUNURU],
    },

    /* ---------------------------------------------------------------- */
    /* 2040-2060                                                         */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'biotech-longevity',
      window: '2040-2060',
      branch: 'slow',
      headline: 'Aging medicine gets its first human wins, small and late',
      narrative: `Baseline 2040 to 2060 is the window where the slow branch's longevity story turns from mouse to human. AGI around 2038 and ASI around 2058 mean the discovery side accelerates through the 2040s and becomes effectively unconstrained only at the end. Genetic medicine is mature: most monogenic diseases are correctable, in vivo editing reaches most tissues, and redosing is possible thanks to immune-tolerant vectors. Costs for established indications fall to the range of ordinary specialty drugs, and middle-income countries adopt them at scale. The transplant shortage ends as xenogeneic and laboratory-grown organs become routine. In aging, the combination interventions that entered trials in the 2030s produce their first outcome data: a reduction in all-cause mortality of perhaps 10 to 20 percent over a decade in treated older adults, equivalent to two to three years of added life expectancy, achieved by compressing morbidity rather than by changing the Gompertz slope. Partial reprogramming is approved for several organs but used cautiously because of oncogenic risk. Aging clocks are standard clinical measurements, ordered like cholesterol panels. The biological limits remain visible: somatic mutations continue to accumulate, no intervention restores the immune system to youthful function, and the record lifespan of about 122 years is not broken. For someone who is 40 in 2026, this window covers ages 54 to 74. They receive interventions that add a few healthy years and keep them working and mobile longer than their parents, at a cost their health system mostly covers. Radical life extension is a research program with strong momentum by 2060, as superhuman systems take over its direction, but not a product. Rich-country life expectancy at birth reaches about 88 to 90 years.`,
      dependencies: ['casgevy-crispr-therapy', 'glp-1-agonists', 'crispr-discovery', 'human-genome-completion', 'dna-double-helix', 'germ-theory-pasteur'],
      uncertainties: [
        'A 10 to 20 percent mortality reduction from combination therapy is a central estimate; the true figure could be near zero or double.',
        'Immune-tolerant redosable vectors might not be achieved, which would leave most tissues reachable only once per lifetime.',
        'Late oncogenic effects of partial reprogramming could remove it from clinical use entirely.',
      ],
      indicators: [
        'First randomized outcome trial reporting reduced all-cause mortality from an intervention targeting aging hallmarks rather than a single disease.',
        'Verified reports of a human older than 122.',
        'Life expectancy at birth exceeding 86 in any large high-income country.',
      ],
      confidence: 'low',
      confidenceJustification: 'Two decades out, with the field\'s first human aging outcome data still unwritten. The genetic medicine maturity claims extrapolate a visible trend; the aging effect sizes are informed guesses bounded by the Gompertz law.',
      sources: [GOMPERTZ, OLSHANSKY, HALLMARKS_2023, DONG_VIJG],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2040-2060',
      branch: 'moderate',
      headline: 'Healthspan gains of a decade arrive; the lifespan ceiling still holds',
      narrative: `On the accelerated branch, ASI around 2040 means the whole of this window runs with superhuman research direction, while trials, manufacturing and human biology still take their own time. The 2040s deliver the outcome data for the interventions designed in the 2030s. Combination regimens that clear senescent cells, restore proteostasis and periodically reset epigenetic state in specific tissues show all-cause mortality reductions of 20 to 40 percent in treated adults over a decade of follow-up, which translates to roughly five to ten years of added healthy life for people who start treatment in middle age. This is a real bend in the mortality curve but not a break: the hazard still doubles roughly every eight years, only from a lower starting point. The 2050s add systemic interventions: whole-body reprogramming under inducible control, immune system regeneration through thymic and hematopoietic renewal, and gene-edited tissue replacement. Costs are those of chronic medicine, and most high-income and many middle-income systems fund them because they reduce late-life care spending. Verified lifespans begin to exceed 122 years by the late 2050s in cohorts that were 60 to 70 when treatment began. Organ replacement is routine, and the first engineered replacements for the heart and kidney are grown from patient cells. What remains unsolved: the brain cannot be replaced, somatic mutation load in neurons is irreversible with current tools, and the immune system is only partially restored. For a person who is 40 in 2026, this window covers ages 54 to 74; on this branch they receive treatment early enough to expect perhaps a decade of additional healthy years, with the possibility of more as later interventions arrive while they are still alive.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'recombinant-dna', 'dna-double-helix'],
      uncertainties: [
        'A 20 to 40 percent mortality reduction assumes that hallmark-targeting interventions combine additively in humans, which has not been shown in any species.',
        'Inducible whole-body reprogramming may be too dangerous for general use even under superhuman design.',
        'Verified ages beyond 122 require decades of follow-up on treated cohorts, so the timing could slip into the 2060s.',
      ],
      indicators: [
        'A combination aging intervention reporting reduced all-cause mortality in a randomized trial with more than five years of follow-up.',
        'Approval of an inducible reprogramming therapy for a systemic indication.',
        'Demonstrated regeneration of thymic function in adults over 60.',
      ],
      confidence: 'low',
      confidenceJustification: 'The direction follows from the branch anchors, but the effect sizes are extrapolations from animal data through interventions that do not yet exist. The claim that the Gompertz slope is not yet broken is the most defensible part.',
      sources: [OCAMPO, HALLMARKS_2023, GOMPERTZ, BAKER_SENESCENCE],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2040-2060',
      branch: 'fast',
      headline: 'Mortality curves bend hard; the brain and society set the remaining limits',
      narrative: `On the discontinuous branch, this window is the first with two decades of human outcome data under superhuman research direction. The interventions approved in the late 2030s have been followed for twenty years, and the picture is clear by the 2050s: for adults who begin treatment before 60, the age-specific mortality doubling time lengthens from about eight years to something like twelve to fifteen, and the biological age of treated tissues can be held roughly steady or reduced. That is a change in the Gompertz slope itself, which no earlier intervention had achieved. Deaths from cancer, cardiovascular disease and neurodegeneration fall sharply; remaining deaths are dominated by accidents, infections in rare immune failures, and the tissues that cannot be reset, above all the brain, where somatic mutation and irreplaceable neurons bound what can be repaired. Manufacturing is no longer a limit: cell-free synthesis and autonomous plants produce therapies at commodity cost, and delivery to every tissue is solved. The transplant concept is obsolete; organs are regrown in place or replaced with engineered tissue. Society is the constraint: pension systems, labor markets and family structures adjust to adults who are 80 with the function of 55, and access questions dominate politics. Verified ages above 122 become common by 2060 among people who were under 70 when treated. For someone who is 40 in 2026, this branch covers ages 54 to 74 with the strongest aging medicine that biology permits arriving in time; their expected remaining life at 74 is measured in decades rather than years, with the caveat that no cohort has yet lived long enough to prove the extrapolation, and the first cohort is the one that discovers the failure modes.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'recombinant-dna', 'dna-double-helix'],
      uncertainties: [
        'Lengthening the mortality doubling time in humans has never been observed and may be biologically impossible at the scale assumed.',
        'Widespread use of reprogramming could produce a wave of late cancers that reverses the mortality gains.',
        'Political resistance to unequal access could slow deployment far more than the technology itself.',
        'The brain may set a lower ceiling than assumed if cognitive decline continues on its own clock despite bodily maintenance.',
      ],
      indicators: [
        'Population-level mortality data showing a lengthened doubling time in treated cohorts.',
        'Cancer incidence trends in reprogramming-treated populations over ten years of follow-up.',
        'Verified ages over 122 reported for more than ten people in a single year.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the most speculative projection in the near half of the horizon. It rests on the branch anchor, on unproven translation of animal reprogramming results, and on social choices that could go either way.',
      sources: [GOMPERTZ, CAGAN, OCAMPO, BARBI],
    },

    /* ---------------------------------------------------------------- */
    /* 2060-2090                                                         */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'biotech-longevity',
      window: '2060-2090',
      branch: 'slow',
      headline: 'Lifespan starts to move; healthy 90s become normal in rich countries',
      narrative: `Baseline 2060 to 2090 follows ASI around 2058, so this window is the slow branch's version of what the other branches saw two or three decades earlier. Superhuman research direction takes hold in the 2060s, and the long-running trials from the 2040s and 2050s deliver mature outcome data. Combination aging interventions move from a decade of added healthspan to modest changes in the Gompertz slope, as inducible whole-body reprogramming, immune regeneration and tissue replacement are approved and funded in most high-income systems. Life expectancy at birth in those countries reaches the mid-90s by 2090, and the healthy fraction of life rises faster than lifespan. Verified lifespans pass 122 in the 2070s and reach around 130 by 2090. Remaining limits are those cited elsewhere in this entry: the brain's irreplaceable neurons and accumulated somatic mutations, the residual failure modes of repaired immune systems, and the cost of maintaining an adult's biology against thermodynamic decay. Access widens to middle-income countries by the 2080s, but global inequality in healthy lifespan is the era's defining moral problem. For a person who is 40 in 2026, this window covers ages 74 to 104. In 2076 that person is 90: on the baseline branch their odds of being alive are roughly even, and if alive they are probably in better function than a 90-year-old of 2026, though not young. The question is whether they reach the 2060s in good enough condition for the new interventions to act on them. The honest answer is that many will, with an expected age at death for that cohort in the mid to late 90s, and that the more radical interventions of the 2070s and 2080s arrive too late to matter for most of them.`,
      dependencies: ['casgevy-crispr-therapy', 'crispr-discovery', 'human-genome-completion', 'dna-double-helix', 'jenner-vaccination', 'animal-domestication'],
      uncertainties: [
        'The transition from healthspan gains to a changed Gompertz slope may not happen at all, leaving the slow branch at a plateau near 90 years of life expectancy.',
        'Global inequality could be far worse than assumed if the interventions remain expensive to maintain.',
        'Cognitive aging may prove the binding limit sooner than bodily aging, capping the usefulness of longer lives.',
      ],
      indicators: [
        'Life expectancy at birth exceeding 92 in any large high-income country.',
        'Verified ages above 125.',
        'Middle-income countries funding maintenance-style aging interventions through public insurance.',
      ],
      confidence: 'low',
      confidenceJustification: 'Four to six decades out, after the branch\'s own ASI transition. The narrative is a reasoned extrapolation from the physical limits and the earlier windows, not a forecast with data behind it.',
      sources: [OEPPEN_VAUPEL, DONG_VIJG, CAGAN, OLSHANSKY],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2060-2090',
      branch: 'moderate',
      headline: 'Held biological age becomes ordinary medicine; the brain is the frontier',
      narrative: `On the accelerated branch this window consolidates what the 2040s and 2050s began. The mortality doubling time for treated adults lengthens beyond twelve years, and periodic maintenance of biological age (tissue-by-tissue reprogramming, clearance of damaged cells and proteins, stem cell renewal) is routine for adults from midlife on, at costs comparable to today's chronic medicine and largely publicly funded. Life expectancy at birth in high-income countries passes 100 by the 2080s, and life expectancy for treated 70-year-olds is on the order of 40 further years. Verified ages of 130 to 140 are recorded by 2090. The brain is the frontier: neurons cannot be replaced without loss of the person, so interventions target support cells, vasculature, proteostasis and mitochondrial function within existing neurons, and neuronal somatic mutation load is the clearest remaining clock. Whole-body reprogramming beyond partial, tissue-restricted forms remains too risky for general use because of oncogenic reversion. Everything else is mature: organs regrow or are replaced, monogenic disease is corrected at diagnosis, and infection is managed by designed antibodies and cellular immunity on demand. Society has adapted, unevenly, to a much older and healthier population, with retirement ages and family structures reorganized over two generations. Access in low-income countries lags by decades. For a person who is 40 in 2026 (74 to 104 in this window), treatment began in their 50s and 60s. In 2076, at 90, they are more likely alive than not, functionally like a 65-year-old of 2026, and reaching 100 in good function is a realistic prospect. The branch's remaining uncertainty is how well the earliest treated cohorts hold up as they reach ages no human has reached before.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'dna-double-helix', 'jenner-vaccination'],
      uncertainties: [
        'Maintenance regimens may accumulate their own long-term harms, such as clonal expansion of repeatedly reprogrammed cells.',
        'Neuronal aging could impose a cognitive ceiling well below the bodily one, making very long lives undesirable in practice.',
        'Public funding of maintenance medicine depends on it lowering total care costs, which is plausible but not certain.',
      ],
      indicators: [
        'Cohort life tables for treated adults showing a mortality doubling time above twelve years.',
        'Verified ages above 130.',
        'Approved interventions that measurably slow cognitive aging in people over 80.',
      ],
      confidence: 'low',
      confidenceJustification: 'The narrative follows from the branch\'s earlier windows, but each step compounds uncertainty. The claims about the brain as the binding limit rest on well-established biology and are the most defensible part.',
      sources: [CAGAN, LINDAHL, GOMPERTZ, HALLMARKS_2023],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2060-2090',
      branch: 'fast',
      headline: 'Aging as a managed condition; centenarians in working life',
      narrative: `On the discontinuous branch this window is the period in which the question of radical life extension is answered empirically rather than argued. Cohorts first treated in the late 2030s reach their 80s and 90s with the biological state of adults in their 50s, and the earliest are approaching 120 by 2090 with a risk of death that has flattened rather than doubled. Period life expectancy loses meaning because the life table depends on interventions that are still improving; cohort estimates for treated adults extend well past 150 years, but no cohort has yet lived that long, so the number is a projection, not an observation. The binding constraints are the brain and society. Neuronal loss and somatic mutation in neurons cannot be fully reversed, so cognitive maintenance relies on supporting cells, vasculature and metabolic control, and it is the brain's slow decay that most researchers expect to set the eventual ceiling, plausibly somewhere between 150 and 200 years. Institutions built for 80-year lives, from pensions to marriage to the transfer of power, are rebuilt over this window with considerable conflict. Access is near universal in high-income countries and widening elsewhere because the marginal cost of treatment is small. Manufacturing, delivery and design are no longer meaningful constraints. For a person who is 40 in 2026 (74 to 104 across this window), the fast branch means they were treated from their 50s. In 2076, at 90, they are most likely alive with the biology of someone in their 50s, and they have a realistic expectation of living through the whole window and beyond, with the honest caveat that they are members of the first cohort, and first cohorts discover the failure modes.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'dna-double-helix', 'animal-domestication'],
      uncertainties: [
        'A flattened hazard at advanced ages has only been observed in the untreated very old and only weakly; sustaining it under treatment is an assumption.',
        'Cognitive integrity beyond 120 has never been tested and may fail in ways body maintenance cannot address.',
        'Institutional adaptation could fail badly enough to restrict access or provoke backlash against the technology.',
      ],
      indicators: [
        'Verified ages above 130 in people who began treatment before 70.',
        'Cohort mortality among treated adults over 90 comparable to untreated adults under 60.',
        'Legislative reform of retirement, inheritance or term limits explicitly citing extended lifespans.',
      ],
      confidence: 'low',
      confidenceJustification: 'Everything here compounds the uncertainties of the earlier fast-branch windows. The physical limits cited are the only firm ground; the rest is scenario reasoning.',
      sources: [BARBI, CAGAN, DONG_VIJG, KIRKWOOD],
    },

    /* ---------------------------------------------------------------- */
    /* 2090-2126                                                         */
    /* ---------------------------------------------------------------- */
    {
      fieldId: 'biotech-longevity',
      window: '2090-2126',
      branch: 'slow',
      headline: 'A century of healthy life within reach; the lifespan ceiling lifts slowly',
      narrative: `Baseline 2090 to 2126 sees the slow branch converge toward what the other branches reached decades earlier, because after ASI around 2058 the discovery constraint lifted and only biological and institutional time remained. By the 2100s, maintenance of biological age is routine medicine in most of the world, the mortality doubling time for treated adults has lengthened well beyond the historical eight years, and verified ages above 130 are recorded. The ceiling debate of 2016 is resolved in practice: the old limit of about 122 reflected the biology of untreated humans, and it moves when the biology is changed, but it does not vanish, because the brain's accumulated somatic damage still cannot be undone without losing continuity of the person. Lifespan expectations for treated adults in 2126 plausibly center on 120 to 150 years, with wide uncertainty. Life expectancy at birth in high-income countries exceeds 100. Genetic medicine is universal and cheap; organ replacement is routine; infectious disease is managed by designed immunity. For someone who is 40 in 2026, this window covers ages 104 to 140. On the baseline branch, most of that cohort will have died in their 90s and early 100s, before the strongest interventions were available or when they were too old to benefit fully; a minority who reached the 2060s in good condition may live into this window. The fair summary for a reader alive today on this branch: expect to live longer and healthier than your parents by a decade or so, and expect your children, treated from midlife with mature interventions, to live in a world where aging is a managed condition rather than a fate.`,
      dependencies: ['casgevy-crispr-therapy', 'crispr-discovery', 'human-genome-completion', 'dna-double-helix', 'germ-theory-pasteur', 'animal-domestication'],
      uncertainties: [
        'The brain-imposed ceiling could sit near 125 rather than 150, in which case lifespan gains after 2090 are small.',
        'Whether biological age can be held steady indefinitely, rather than slowed, is unknown even in principle.',
        'Global adoption may stall in regions where health systems never reach the capacity to deliver maintenance medicine.',
      ],
      indicators: [
        'Verified ages above 130.',
        'Life expectancy at birth above 100 in a large high-income country.',
        'Universal public coverage of aging maintenance in at least one middle-income country.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out. The only anchors are the physical limits and the internal logic of the branch. Treat the numbers as illustrations of a reasoning chain rather than predictions.',
      sources: [DONG_VIJG, LINDAHL, OLSHANSKY, OEPPEN_VAUPEL],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2090-2126',
      branch: 'moderate',
      headline: 'Managed aging is the default; lifespans of 150 are plausible for the treated',
      narrative: `On the accelerated branch this window is a period of maturity. The interventions of the 2040s through 2080s have been refined by superhuman research for eighty years, and the earliest treated cohorts have now lived long enough to test the extrapolations. Two outcomes are plausible and the record does not yet distinguish them. In one, mortality for treated adults stays low and roughly flat through the 120s and 130s, and deaths cluster around 150 to 170 years as neuronal damage accumulates past repair. In the other, unforeseen failure modes emerge after a century of maintained biology (clonal expansion, immune exhaustion, or cumulative side effects of repeated reprogramming) and the practical ceiling settles nearer 130. Either way, healthy life to 100 is ordinary for those treated from midlife, and childhood genetic correction plus lifelong maintenance is standard for the generation born after 2060. Population structure is unlike anything in history: the median adult is over 60 by chronological age but functionally middle-aged, birth rates are low, and the economy is organized around very long careers with repeated retraining. Access is close to universal, with residual inequality in the timing of first treatment. Research attention has shifted to the brain: neural tissue repair without loss of identity is the field's remaining hard problem, and it is unclear whether it is solvable within the constraints of the substrate. For someone who is 40 in 2026 (104 to 140 across the window), this branch makes survival into the window likely if they were treated from their 50s, and survival through it uncertain, because they are in the first cohort whose outcome the branch is waiting to observe.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'dna-double-helix', 'animal-domestication'],
      uncertainties: [
        'The two outcomes described (ceiling near 160 versus near 130) differ by a generation of life and cannot be distinguished before the 2100s.',
        'Very low birth rates combined with very long lives may produce social outcomes that restrict the technology politically.',
        'Neural repair without loss of identity may be impossible, fixing the ceiling wherever the brain sets it.',
      ],
      indicators: [
        'Mortality in treated cohorts over 120 either flat or rising, which discriminates between the two outcomes.',
        'Verified ages above 140.',
        'Demonstrated regeneration of human neural tissue with preserved memory and personality in any clinical setting.',
      ],
      confidence: 'low',
      confidenceJustification: 'A century out with two explicitly divergent outcomes. Confidence is low by construction; the value of the projection is the reasoning about what would decide between them.',
      sources: [CAGAN, LINDAHL, BARBI, HALLMARKS_2023],
    },
    {
      fieldId: 'biotech-longevity',
      window: '2090-2126',
      branch: 'fast',
      headline: 'The ceiling is a design parameter, bounded by the brain and by choice',
      narrative: `On the discontinuous branch the biology of aging has been under superhuman direction for ninety years by the end of this window, and the empirical record is deep. Cohorts treated from the late 2030s have passed 150 years by the 2120s, or have not, and that fact determines the shape of the branch. The projection here is that a majority of them have, with mortality among treated adults resembling that of untreated 40-year-olds (an annual risk of death of a few tenths of a percent, dominated by accident and choice), and with the residual biological ceiling set by the brain: the accumulation of somatic mutations and the loss of neurons that cannot be replaced without replacing the person. Estimates of that ceiling in the 2120s range from about 200 years to indefinitely long with continuous intervention, and the honest position is that the evidence needed to distinguish these does not exist yet. Everything else is settled: genomes are corrected at conception or birth, organs are regrown, infection is managed by designed immunity, and the cost of maintaining a human body is comparable to the cost of feeding it. The open problems are social and philosophical, including whether very long lives change what people want, how power and wealth are prevented from concentrating across a century, and how a society decides what its members owe the future when they expect to be in it. For a person who is 40 in 2026 (104 to 140 across the window), this branch offers the real possibility of being alive at its end, treated from their 50s and maintained since, with the caveat that they are the cohort on which the ceiling is being measured, and no one has yet reached the other side.`,
      dependencies: ['casgevy-crispr-therapy', 'alphafold-2', 'crispr-discovery', 'human-genome-completion', 'dna-double-helix', 'animal-domestication'],
      uncertainties: [
        'A mortality rate for the very old comparable to that of 40-year-olds has no precedent and may be unreachable because of accumulated neuronal damage.',
        'Germline correction at conception raises governance questions that the 2020 international commission left unresolved and that could restrict the practice.',
        'The social effects of a century of maintained adults are unknown and could be destabilizing enough to reverse access.',
        'Continuity of identity under repeated neural maintenance is a philosophical as well as a biological question and may not have a clean answer.',
      ],
      indicators: [
        'Verified ages above 150.',
        'Annual mortality below 0.5 percent among treated adults over 100.',
        'Formal governance regimes for heritable genome editing adopted by major jurisdictions.',
      ],
      confidence: 'low',
      confidenceJustification: 'This is the far edge of the horizon under the most discontinuous branch. The physical limits cited bound what is possible; nothing else here is more than structured speculation.',
      sources: [CAGAN, DONG_VIJG, NASEM_HHGE, KIRKWOOD],
    },
  ],
  capabilityIndex: {
    slow: [
      { year: 2026, value: 12, low: 11, high: 13 },
      { year: 2030, value: 15, low: 13, high: 17 },
      { year: 2040, value: 22, low: 18, high: 27 },
      { year: 2060, value: 34, low: 26, high: 44 },
      { year: 2090, value: 48, low: 34, high: 62 },
      { year: 2126, value: 60, low: 40, high: 76 },
    ],
    moderate: [
      { year: 2026, value: 12, low: 11, high: 13 },
      { year: 2030, value: 15, low: 13, high: 18 },
      { year: 2040, value: 27, low: 21, high: 34 },
      { year: 2060, value: 46, low: 34, high: 58 },
      { year: 2090, value: 62, low: 44, high: 76 },
      { year: 2126, value: 74, low: 50, high: 88 },
    ],
    fast: [
      { year: 2026, value: 12, low: 11, high: 13 },
      { year: 2030, value: 15, low: 13, high: 19 },
      { year: 2040, value: 34, low: 24, high: 46 },
      { year: 2060, value: 58, low: 40, high: 74 },
      { year: 2090, value: 74, low: 50, high: 88 },
      { year: 2126, value: 84, low: 56, high: 96 },
    ],
  },
  sources: [HALLMARKS_2023, HALLMARKS_2013, JUMPER, JINEK, KOMOR, OCAMPO, DONG_VIJG, KAEBERLEIN],
  lastReviewed: '2026-09-04',
};
