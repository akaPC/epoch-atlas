import type { Epoch, TechEventInput } from '../schema';

export const epoch: Epoch = {
  id: 'intelligence-era',
  index: 13,
  name: 'The intelligence era',
  code: 'INTELLIGENCE',
  startYear: 2012,
  endYear: 2026,
  span: '2012 to September 2026',
  thesis: `The intelligence era begins when learned representations stop being a research curiosity and become the dominant way of building software that deals with language, images, proteins and code. The pivot is 2012, when a deep convolutional network trained on graphics processors won ImageNet by a margin nobody expected. Within a decade the same recipe, scaled by orders of magnitude and reorganized around the transformer, produced systems that write, reason, translate, draw and program at a level that forces a redefinition of what a computer is for.

The era is not only about machine learning. It is the period in which a set of long-running research programs matured at once: messenger RNA vaccines went from a fringe idea to a billion-dose platform in a year, CRISPR became a licensed cure, reusable rockets made orbit an operating cost rather than a capital loss, laboratory fusion crossed scientific breakeven, and perovskite tandems pushed solar past the silicon ceiling. What unites these threads is a common dependence on cheap computation, enormous datasets and the capital of a small number of technology firms and states. By 2026 the binding constraints are no longer algorithmic. They are electricity, advanced chips, export licenses and the human institutions that must decide how much autonomy to grant to machines that can now act on their own behalf.`,
  enablingConditions: [
    'Graphics processors designed for games turned out to be nearly ideal for the dense matrix arithmetic of neural networks, and their price per operation fell steadily through the 2010s.',
    'The networked world had produced petabyte-scale corpora of text, images and code, along with the storage and distributed systems needed to train on them.',
    'A small number of firms and research laboratories could afford training runs costing tens of millions and later billions of dollars, and were willing to publish or release what they built.',
    'Open publication norms in machine learning, centred on arXiv and open-weight releases, spread each advance to competitors within weeks.',
    'Decades of patient basic research in immunology, genome editing, plasma physics and photovoltaics reached the point where engineering could finish the job.',
  ],
  constraintsRemoved: [
    'Software no longer had to be written rule by rule for tasks involving language, perception or judgement; it could be learned from examples and then instructed in plain language.',
    'Predicting a protein structure from its sequence, a fifty-year problem, became a routine computation available to any biologist.',
    'The marginal cost of drafting text, images, code and analysis fell by orders of magnitude, removing a bottleneck on knowledge work that had held since the invention of writing.',
    'Launching mass to orbit stopped requiring a new rocket for every flight, cutting the cost of access to space several fold.',
    'Vaccine development timelines that had been measured in years compressed to months once the antigen could be specified as a sequence.',
  ],
  secondOrderConsequences: [
    'Compute became a strategic resource. Governments began to control the export of chips and the tools that make them, and electricity demand from datacenters became a factor in national grid planning.',
    'The economics of knowledge work shifted, with early evidence of productivity gains in programming, customer support and writing, and unresolved questions about employment, wages and the ownership of training data.',
    'Trust in recorded media weakened as synthetic text, audio, images and video became indistinguishable from authentic material without provenance tools.',
    'A new class of institutions, laboratories with explicit safety mandates, evaluation organizations and international summits, arose to manage risks from systems whose capabilities were outrunning understanding of their behaviour.',
    'Biology began to be treated as an information discipline, with structure prediction, sequence design and gene editing forming a design loop rather than a sequence of discoveries.',
  ],
  transition: `This is the current epoch, and its transition is unresolved. The open questions are the ones The Threshold takes up. Will scaling continue to convert compute into capability, or will the well of high-quality data and the cost of electricity and chips slow it? Will models that can plan and act over hours and days become reliable enough to be trusted with consequential work, and if they do, who bears responsibility for their mistakes? Can evaluation, interpretability and alignment research keep pace with systems whose internal reasoning is only partly legible? Outside AI, the epoch closes with fusion, solid-state batteries and humanoid robots all in the uncomfortable interval between demonstration and deployment. The Threshold asks when, if ever, general and superhuman machine intelligence arrive, and what the evidence of 2012 to 2026 says about the answer. The honest position in September 2026 is that the trend lines are steep, the constraints are physical and political rather than mathematical, and the historical record is still being written.`,
  humanExperience: `A person who was an adult in 2012 lived through the strangest change in the relationship between people and machines since the personal computer. At the start of the period a phone could recognize a face in a photograph and, badly, transcribe a voice message. By 2023 the same person could hold a conversation in natural language with a program that had read most of the public internet, ask it to draft a contract, explain a diagnosis, debug a script or write a poem in the style of a dead relative, and receive a competent answer in seconds. For students, programmers, lawyers, translators and illustrators this was either a gift or a threat, and often both on the same day.

The change arrived through ordinary interfaces. Nobody bought a new device to use ChatGPT; it appeared in a browser tab and then inside email, search, spreadsheets and integrated development environments. The visible signs of the era were quieter than those of the industrial epochs: a photo that might not be real, a customer service voice that might not be a person, a pull request written by an agent overnight, a job posting that asked for prompt-writing skills.

Beyond the screen, the period brought a vaccine designed in days that ended a pandemic's worst phase, a weekly injection that reliably reduced body weight for the first time in the history of medicine, a gene edit that cured children of sickle cell disease, and the first images of the early universe from a telescope a million miles away. It also brought anxiety about work, elections shaped by synthetic media, and a sense that the pace of change had detached from any single person's ability to follow it. The dominant experience was not of any one technology but of acceleration itself.`,
  minEvents: 30,
  sources: [
    { author: 'Krizhevsky, A., Sutskever, I. and Hinton, G.', title: 'ImageNet Classification with Deep Convolutional Neural Networks', publisher: 'Advances in Neural Information Processing Systems 25', year: 2012 },
    { author: 'Vaswani, A. et al.', title: 'Attention Is All You Need', publisher: 'Advances in Neural Information Processing Systems 30', year: 2017, url: 'https://arxiv.org/abs/1706.03762' },
    { author: 'Kaplan, J. et al.', title: 'Scaling Laws for Neural Language Models', publisher: 'arXiv', year: 2020, url: 'https://arxiv.org/abs/2001.08361' },
    { author: 'Maslej, N. et al.', title: 'Artificial Intelligence Index Report 2025', publisher: 'Stanford Institute for Human-Centered Artificial Intelligence', year: 2025, url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report' },
    { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
    { author: 'Sevilla, J. et al.', title: 'Compute Trends Across Three Eras of Machine Learning', publisher: 'arXiv', year: 2022, url: 'https://arxiv.org/abs/2202.05924' },
  ],
  lastReviewed: '2026-09-04',
};

export const events: TechEventInput[] = [
  {
    id: 'word2vec',
    epochId: 'intelligence-era',
    date: { year: 2013, month: 1, day: 16, precision: 'exact', display: '2013-01-16' },
    location: 'Google, Mountain View, California',
    title: 'word2vec: words as vectors',
    summary: 'Tomas Mikolov and colleagues at Google showed that a shallow neural network trained to predict neighbouring words produces vectors in which meaning is encoded as geometry.',
    explanation: `In January 2013 Tomas Mikolov, Kai Chen, Greg Corrado and Jeffrey Dean posted a short paper describing two very simple neural architectures for learning word representations from raw text. The models, called continuous bag of words and skip-gram, were trained to predict a word from its context or the context from a word. The product was not the predictions but the internal vectors, typically a few hundred numbers per word, that the network learned along the way. Released as open source software under the name word2vec, the method spread through natural language processing within months.

The striking result was that the learned space had linear structure. The vector for "king" minus the vector for "man" plus the vector for "woman" landed close to the vector for "queen". Country vectors sat in a consistent relation to capital city vectors. Nothing in the training objective asked for this; it emerged from predicting words in context over billions of tokens of Google News text. The follow-up paper in late 2013 added negative sampling and phrase handling, which made training fast enough to run on a single machine over a corpus of a billion words in hours.

Word embeddings were not new. Latent semantic analysis had built vector spaces from word co-occurrence since the late 1980s, and Bengio and colleagues had trained neural language models with embeddings in 2003. What word2vec changed was cost and quality together. By discarding the expensive hidden layers of earlier neural language models, Mikolov's team could train on corpora two orders of magnitude larger, and the resulting vectors were better on analogy and similarity benchmarks than anything before them.

The importance was less the specific vectors than the demonstration that useful semantic structure could be learned from unlabeled text by prediction alone. That principle, self-supervised learning at scale, is the foundation of every large language model that followed. The pretrained embedding also introduced a workflow: train once on a huge general corpus, then reuse the representation for many downstream tasks. GloVe from Stanford in 2014 and fastText from Facebook in 2016 refined the idea, and contextual embeddings from ELMo in 2018 and BERT later the same year replaced fixed word vectors with representations that depend on the sentence. The evidence for the shift is in the citation record and in the benchmark tables: within three years almost every published NLP system began from pretrained embeddings.`,
    mechanism: `The skip-gram model takes a centre word and tries to predict each word within a window of a few positions on either side. Each vocabulary word has an input vector and an output vector; the probability of a context word is computed from the dot product of the centre word's input vector and the context word's output vector, normalized over the vocabulary. Because normalizing over a million words is expensive, the second paper replaced the full softmax with negative sampling: for each true context pair the model also draws a handful of random words and learns to score the true pair high and the random pairs low using a logistic loss. Training by stochastic gradient descent over billions of word positions pushes words that appear in similar contexts toward similar vectors. The linear regularities arise because the model's scoring function is a dot product, which makes differences between vectors meaningful directions.`,
    prerequisites: ['alexnet', 'shannon-information-theory', 'google-search'],
    consequences: ['transformer-paper', 'bert', 'gpt-2'],
    figures: [
      { name: 'Tomas Mikolov', role: 'Lead author' },
      { name: 'Jeffrey Dean', role: 'Co-author and Google Brain lead' },
    ],
    significance: 7,
    significanceJustification: 'word2vec established that dense semantic representations can be learned from unlabeled text by prediction alone, the principle underlying every later language model. Its direct technical lineage runs through BERT and GPT.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Mikolov, T., Chen, K., Corrado, G. and Dean, J.', title: 'Efficient Estimation of Word Representations in Vector Space', publisher: 'arXiv', year: 2013, url: 'https://arxiv.org/abs/1301.3781' },
      { author: 'Mikolov, T., Sutskever, I., Chen, K., Corrado, G. and Dean, J.', title: 'Distributed Representations of Words and Phrases and their Compositionality', publisher: 'Advances in Neural Information Processing Systems 26', year: 2013, url: 'https://arxiv.org/abs/1310.4546' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'gans',
    epochId: 'intelligence-era',
    date: { year: 2014, month: 6, day: 10, precision: 'exact', display: '2014-06-10' },
    location: 'Université de Montréal, Montreal, Canada',
    title: 'Generative adversarial networks',
    summary: 'Ian Goodfellow and colleagues proposed training a generator network against a discriminator network in a two-player game, producing the first neural systems that could synthesize convincing images from noise.',
    explanation: `In June 2014 Ian Goodfellow, then a doctoral student in Yoshua Bengio's laboratory in Montreal, posted a paper with Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville and Bengio describing a new way to train generative models. Instead of writing down a probability distribution over images and maximizing its likelihood, which was mathematically awkward for anything realistic, the authors pitted two networks against each other. A generator turned random noise into candidate images. A discriminator tried to tell those candidates from real training images. Each was trained on the other's failures.

The first results were modest by later standards: blurry digits and small faces. But the idea was unusually fertile. By 2015 Radford, Metz and Chintala had stabilized training with convolutional architectures (DCGAN) and shown that the generator's latent space supported arithmetic much like word2vec. In 2017 and 2018 NVIDIA researchers led by Tero Karras produced progressive GANs and then StyleGAN, which generated photorealistic faces at high resolution. Websites showing endless synthetic portraits became a public curiosity and, soon, a warning about fabricated identities. Conditional and image-to-image variants such as pix2pix and CycleGAN made translation between domains, day to night or horse to zebra, routine.

Generative adversarial networks mattered for three reasons. First, they showed that neural networks could synthesize, not just classify, and that the synthetic output could be good enough to fool people. This inaugurated the deepfake problem years before diffusion models made it universal. Second, the adversarial framing, using one learned model to supply the training signal for another, became a general tool: it appears in domain adaptation, in robustness research and in reinforcement learning from learned reward models. Third, GANs gave the field a reason to study latent spaces as controllable interfaces, which shaped later work on image editing.

GANs were notoriously difficult to train. Mode collapse, in which the generator produced only a few outputs, and oscillating losses were constant problems, and a large literature on Wasserstein objectives, spectral normalization and gradient penalties grew up to address them. By 2021 diffusion models had matched and then surpassed GANs on image quality with far more stable training, and most image generation moved to that family. The historical significance of GANs is therefore as a proof that machine synthesis of media was possible and as the first system to raise the social questions that generative AI would later force on everyone. The original paper had accumulated tens of thousands of citations within a decade.`,
    mechanism: `Two networks are trained simultaneously. The generator G maps a vector of random noise to an image. The discriminator D maps an image to a probability that it came from the training set rather than from G. D is trained to maximize its accuracy on a mixed batch of real and generated images; G is trained to produce images that D scores as real, using gradients that flow back through D into G. In the ideal case this minimax game reaches an equilibrium in which G reproduces the data distribution and D can do no better than chance. In practice the two players are updated alternately with stochastic gradient descent, and the balance between them must be managed carefully. Later variants replaced the original cross-entropy objective with distance measures that give smoother gradients and added normalization to keep the discriminator from overpowering the generator.`,
    prerequisites: ['alexnet', 'word2vec'],
    consequences: ['stable-diffusion', 'gpt-2'],
    figures: [
      { name: 'Ian Goodfellow', role: 'Lead author' },
      { name: 'Yoshua Bengio', role: 'Senior author and laboratory head' },
    ],
    significance: 7,
    significanceJustification: 'GANs were the first neural systems to synthesize media convincing enough to deceive people, establishing generative modelling as a major field and raising the deepfake problem. They were superseded by diffusion models but shaped the questions those models answered.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Goodfellow, I. et al.', title: 'Generative Adversarial Nets', publisher: 'Advances in Neural Information Processing Systems 27', year: 2014, url: 'https://arxiv.org/abs/1406.2661' },
      { author: 'Radford, A., Metz, L. and Chintala, S.', title: 'Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks', publisher: 'arXiv', year: 2015, url: 'https://arxiv.org/abs/1511.06434' },
      { author: 'Karras, T., Laine, S. and Aila, T.', title: 'A Style-Based Generator Architecture for Generative Adversarial Networks', publisher: 'IEEE Conference on Computer Vision and Pattern Recognition', year: 2019, url: 'https://arxiv.org/abs/1812.04948' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'resnet',
    epochId: 'intelligence-era',
    date: { year: 2015, month: 12, day: 10, precision: 'exact', display: '2015-12-10' },
    location: 'Microsoft Research Asia, Beijing',
    title: 'ResNet: residual connections make very deep networks trainable',
    summary: 'Kaiming He and colleagues introduced skip connections that let networks of over a hundred layers train reliably, winning ImageNet 2015 and supplying a structural idea used in every later large model.',
    explanation: `By 2015 the deep learning community had learned that deeper convolutional networks classified images better, but only up to a point. Beyond roughly twenty layers, training became unstable and accuracy fell even on the training set, which meant the problem was optimization rather than overfitting. Kaiming He, Xiangyu Zhang, Shaoqing Ren and Jian Sun at Microsoft Research Asia proposed a structural fix. Instead of asking each block of layers to learn a full transformation of its input, they asked it to learn only a residual, the difference from the identity, and added the block's input directly to its output through a shortcut connection.

The effect was immediate. Networks of 50, 101 and 152 layers trained without difficulty, and a 152-layer ResNet won the ImageNet classification competition in December 2015 with a top-5 error of 3.57 percent, below the estimated human error rate on the task. The same team's entries won the detection and localization tracks and the COCO detection challenge. The paper, published at CVPR in 2016, became one of the most cited in computer science.

The residual connection solved a specific problem, the degradation of very deep networks, but its influence was general. Because the shortcut path carries the signal unchanged, gradients can flow backwards through hundreds of layers without vanishing, and each block can be initialized near the identity so that adding depth never hurts. The transformer architecture of 2017 adopted residual connections around every attention and feed-forward sublayer, and every large language model since has used them. When people speak of a model with 96 or 120 layers, the fact that such depth trains at all is a consequence of the residual idea.

ResNet also fixed the practical reference point for computer vision. For several years a ResNet-50 pretrained on ImageNet was the default backbone for detection, segmentation, medical imaging and satellite analysis, and transfer learning from such backbones became the standard way to build vision systems with limited data. Benchmarks that reported ResNet-50 throughput became the common currency for comparing accelerators.

The historical evidence is the competition results, the near-universal adoption of residual blocks in subsequent architectures, and the fact that the ResNet paper remained the most cited deep learning paper of its decade. The idea was simple enough to fit in a diagram and important enough to make networks of arbitrary depth a routine engineering choice rather than a research risk.`,
    mechanism: `A residual block computes y = F(x) + x, where x is the block input, F is a small stack of convolutional layers with nonlinearities, and the addition is elementwise. If the dimensions of x and F(x) differ, a linear projection is applied to x before the sum. Because the identity path is preserved, the derivative of y with respect to x is the identity plus the derivative of F, so a gradient arriving at the block's output passes to its input undiminished even when F contributes little. During training, blocks whose residual function is not yet useful behave like the identity, which means adding blocks cannot make optimization worse. Batch normalization inside F keeps activations well scaled. Stacking dozens of such blocks with periodic downsampling gives networks of 50 to 152 layers that train with ordinary stochastic gradient descent.`,
    prerequisites: ['alexnet'],
    consequences: ['transformer-paper', 'alphago', 'alphafold-2'],
    figures: [
      { name: 'Kaiming He', role: 'Lead author' },
      { name: 'Jian Sun', role: 'Senior author' },
    ],
    significance: 7,
    significanceJustification: 'Residual connections made arbitrarily deep networks trainable and were adopted by the transformer and every large model after it. ResNet also set the default backbone for computer vision for years.',
    domains: ['computation'],
    sources: [
      { author: 'He, K., Zhang, X., Ren, S. and Sun, J.', title: 'Deep Residual Learning for Image Recognition', publisher: 'IEEE Conference on Computer Vision and Pattern Recognition', year: 2016, url: 'https://arxiv.org/abs/1512.03385' },
      { author: 'Russakovsky, O. et al.', title: 'ImageNet Large Scale Visual Recognition Challenge', publisher: 'International Journal of Computer Vision', year: 2015, url: 'https://arxiv.org/abs/1409.0575' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'falcon-9-booster-landing',
    epochId: 'intelligence-era',
    date: { year: 2015, month: 12, day: 21, precision: 'exact', display: '2015-12-21' },
    location: 'Cape Canaveral, Florida',
    title: 'Falcon 9 first stage lands after an orbital launch',
    summary: 'SpaceX returned the first stage of an orbital rocket to a vertical landing on land minutes after delivering eleven satellites to orbit, opening the way to routine booster reuse.',
    explanation: `On the evening of December 21, 2015, a SpaceX Falcon 9 lifted off from Cape Canaveral carrying eleven Orbcomm communications satellites. Roughly ten minutes later its first stage, having separated at the edge of space, reignited its engines, flew back to the coast and settled upright on a concrete pad a few miles from the launch site. It was the first time a booster from an orbital launch had returned intact for reuse. Blue Origin's New Shepard had landed a month earlier, but from a suborbital hop at a fraction of the energy.

The landing was the result of a program that had begun with the Grasshopper test vehicle in 2012 and had failed publicly several times. Two attempts to land on a drone ship in 2015 ended in explosions, and a June 2015 launch failure destroyed a cargo mission to the space station. The upgraded Falcon 9 that flew in December had denser, colder propellant and more thrust, which gave it the margin to reserve fuel for the return.

The reason the feat mattered was economic. A Falcon 9 first stage contains nine engines and most of the vehicle's structure and cost. Throwing it into the ocean after each flight had been the norm for orbital rockets since 1957. Recovery turned that cost from an expendable into a capital asset. In April 2016 a booster landed on a drone ship at sea, which allowed recovery on missions with less fuel margin. In March 2017 a recovered stage flew a second time, carrying the SES-10 satellite. By the early 2020s individual boosters had flown more than twenty times, and SpaceX was launching over a hundred Falcon 9 missions a year, more than the rest of the world combined, while charging prices well below competitors.

Reuse also changed what could be launched. The Starlink constellation, thousands of satellites providing broadband from low orbit, would not have been financially possible at expendable prices. The frequency of flights let SpaceX iterate on hardware, and the operational experience fed directly into the far larger Starship program. The evidence of the change is in launch statistics compiled by government and independent trackers, in the collapse of prices in the commercial launch market, and in the decisions of every major launch provider, from Rocket Lab to the Chinese state firms, to develop reusable first stages of their own.`,
    mechanism: `After stage separation at around 70 kilometres altitude and several thousand kilometres per hour, the first stage uses cold-gas thrusters to flip end over end. Three of its nine Merlin engines relight for a boostback burn that cancels its downrange velocity and sends it toward the landing site. Titanium grid fins deploy near the top of the stage and steer it aerodynamically during descent. A second burn slows the stage as it reenters the thicker atmosphere. Just above the ground a single engine fires for the landing burn; because the stage cannot hover, the engine throttle is timed so that velocity reaches zero exactly as the deployed legs touch down. Guidance relies on inertial sensors, GPS and onboard convex optimization that recomputes the trajectory in flight. Drone ship landings add a barge that holds station using thrusters.`,
    prerequisites: ['falcon-9-dragon', 'v2-rocket', 'gps'],
    consequences: ['starship-flights', 'jwst'],
    figures: [
      { name: 'Elon Musk', role: 'SpaceX founder and chief engineer' },
      { name: 'Lars Blackmore', role: 'Landing guidance and control lead' },
    ],
    significance: 8,
    significanceJustification: 'Booster recovery converted the largest cost of orbital launch into a reusable asset and drove launch prices down several fold. It enabled Starlink and set the direction for every subsequent launch vehicle program.',
    domains: ['space', 'transportation'],
    sources: [
      { author: 'SpaceX', title: 'Falcon 9', publisher: 'SpaceX', year: 2024, url: 'https://www.spacex.com/vehicles/falcon-9/' },
      { author: 'Blackmore, L.', title: 'Autonomous Precision Landing of Space Rockets', publisher: 'The Bridge, National Academy of Engineering', year: 2016 },
      { author: 'Berger, E.', title: 'Reentry: SpaceX, Elon Musk, and the Reusable Rockets that Launched a Second Space Age', publisher: 'BenBella Books', year: 2024 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'alphago',
    epochId: 'intelligence-era',
    date: { year: 2016, month: 3, day: 15, precision: 'exact', display: '2016-03-15' },
    location: 'Seoul, South Korea (DeepMind, London)',
    title: 'AlphaGo defeats Lee Sedol',
    summary: "DeepMind's AlphaGo beat the world champion Lee Sedol four games to one at Go, a game long thought to be a decade or more beyond computers, by combining deep networks with tree search and self-play.",
    explanation: `Between March 9 and 15, 2016, in a Seoul hotel watched by an estimated 200 million people, a program built by DeepMind defeated Lee Sedol, one of the strongest Go players in history, by four games to one. Go had resisted computers long after chess fell to Deep Blue in 1997. Its board has far more legal positions than chess, and its positions cannot be evaluated by counting material. Most researchers expected a decade of further work. Five months earlier AlphaGo had beaten the European champion Fan Hui, a result published in Nature in January 2016, but Lee was of a different class.

AlphaGo combined three ideas. A policy network, a deep convolutional network trained first on 30 million positions from human games and then improved by playing against itself, proposed promising moves. A value network, trained on positions from self-play, estimated who was winning. Monte Carlo tree search used both to explore the most plausible lines far more efficiently than brute force. The system ran on a distributed cluster of CPUs and GPUs, and DeepMind used Google's new tensor processing units for the match.

The second game produced the moment that defined the event. AlphaGo's 37th move, a shoulder hit on the fifth line, was one that commentators called a mistake and then, after minutes of silence, a stroke of creativity; the network had estimated that a human would play it with probability one in ten thousand. Lee won the fourth game with a move of comparable brilliance, the last time a human beat a top Go program in a formal match.

The importance was symbolic and technical at once. Symbolically, it collapsed the timeline for a benchmark that had been a byword for the limits of machine intelligence, and it drew attention and investment in Asia in particular. Technically, it demonstrated that deep learning and search could be combined, and that self-play could generate unbounded training data. In October 2017 AlphaGo Zero, trained with no human games at all, defeated the match version 100 games to 0 after three days of self-play, and AlphaZero generalized the recipe to chess and shogi. The same self-play and search principles reappeared in later systems, including the reinforcement learning used to train reasoning language models. The evidence is the match record, the two Nature papers, and the documented retirement of Lee Sedol in 2019, who cited the arrival of an opponent that could not be defeated.`,
    mechanism: `The policy network takes the 19 by 19 board as input planes and outputs a probability distribution over moves; it was trained by supervised learning on expert games and then by policy gradient reinforcement learning against earlier versions of itself. The value network takes a position and outputs the expected winner, trained by regression on self-play outcomes. During play, Monte Carlo tree search expands the game tree by selecting moves that balance the policy prior against observed results, evaluates leaf positions by a mix of the value network and fast rollouts, and backs up results to the root. After thousands of simulations the most visited move is played. The neural networks reduce both the breadth of the search, by pruning unlikely moves, and its depth, by replacing long rollouts with a learned estimate. AlphaGo Zero merged the two networks and dropped rollouts entirely.`,
    prerequisites: ['alexnet', 'resnet', 'von-neumann-architecture'],
    consequences: ['alphafold-2', 'o-series-reasoning-models'],
    figures: [
      { name: 'David Silver', role: 'Lead researcher' },
      { name: 'Demis Hassabis', role: 'DeepMind co-founder' },
      { name: 'Lee Sedol', role: 'World champion opponent' },
    ],
    significance: 8,
    significanceJustification: 'AlphaGo collapsed a benchmark expected to stand for another decade and proved that deep networks, search and self-play could be combined into superhuman performance. It shaped public and government perceptions of AI, especially in Asia.',
    domains: ['computation'],
    sources: [
      { author: 'Silver, D. et al.', title: 'Mastering the game of Go with deep neural networks and tree search', publisher: 'Nature 529, 484-489', year: 2016, url: 'https://www.nature.com/articles/nature16961' },
      { author: 'Silver, D. et al.', title: 'Mastering the game of Go without human knowledge', publisher: 'Nature 550, 354-359', year: 2017, url: 'https://www.nature.com/articles/nature24270' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'transformer-paper',
    epochId: 'intelligence-era',
    date: { year: 2017, month: 6, day: 12, precision: 'exact', display: '2017-06-12' },
    location: 'Google Brain and Google Research, Mountain View and Toronto',
    title: 'Attention Is All You Need: the transformer',
    summary: 'Eight Google researchers replaced recurrence with self-attention, producing an architecture that trains in parallel on accelerators and scales to the largest models ever built.',
    explanation: `In June 2017 Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan Gomez, Lukasz Kaiser and Illia Polosukhin posted a paper on machine translation with a provocative title. Until then the best sequence models were recurrent networks, which read a sentence one token at a time and carried a hidden state forward. Attention, introduced by Bahdanau, Cho and Bengio in 2014, had let the decoder look back at the input, but recurrence remained. The transformer dropped it. Every token in a sequence attended directly to every other, in a single parallel operation, and position was supplied by adding a fixed sinusoidal signal to the input embeddings.

The immediate results were strong but not revolutionary: a new state of the art on English to German and English to French translation at a fraction of the training cost of the previous best systems. What mattered was the shape of the architecture. Because there was no sequential dependency inside a layer, the whole sequence could be processed at once as matrix multiplications, which is precisely what GPUs and Google's TPUs do well. Training time no longer scaled with sequence length in the way recurrent networks did, and the model could be made wider and deeper without the optimization pathologies that had limited recurrent models.

Within eighteen months the transformer had become the default for language. OpenAI's GPT of June 2018 used the decoder half as a generative language model; Google's BERT of October 2018 used the encoder half as a bidirectional representation learner. Vision transformers in 2020 showed the architecture worked on images once they were cut into patches. AlphaFold 2 built its structure module on attention. By 2023 every frontier language, image, audio and multimodal model was a transformer variant, and the paper had become one of the most cited scientific papers of the century.

The transformer succeeded because it aligned the mathematics of sequence modelling with the economics of hardware. Kaplan and colleagues' scaling laws of 2020, which showed smooth, predictable improvement with compute, data and parameters, were measured on transformers and would not have been so clean for recurrent networks. The evidence for its significance is the architecture's total dominance in the models listed later in this epoch, and the fact that the eight authors went on to found or lead a substantial fraction of the companies building those models.`,
    mechanism: `Each token is embedded as a vector and augmented with a positional signal. In a self-attention layer, three learned linear maps turn each vector into a query, a key and a value. The attention weight between two tokens is the scaled dot product of one's query with the other's key, passed through a softmax over all tokens; each token's output is the weighted sum of the values. Several such heads run in parallel and are concatenated, letting the model attend to different relations at once. A position-wise feed-forward network then transforms each token independently. Residual connections and layer normalization wrap both sublayers. Stacking six or more blocks gives the encoder; the decoder adds masked self-attention so that each position sees only earlier ones, and cross-attention to the encoder output. All operations are dense matrix products that parallelize across tokens and across accelerator cores.`,
    prerequisites: ['alexnet', 'word2vec', 'resnet', 'shannon-information-theory'],
    consequences: ['bert', 'gpt-2', 'gpt-3', 'alphafold-2', 'stable-diffusion'],
    figures: [
      { name: 'Ashish Vaswani', role: 'Lead author' },
      { name: 'Noam Shazeer', role: 'Co-author' },
      { name: 'Jakob Uszkoreit', role: 'Co-author' },
    ],
    significance: 10,
    significanceJustification: 'The transformer is the architecture of every frontier model of the era, and its parallelism is what allowed scaling laws to be exploited. Few single papers have so completely determined the shape of a technology.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Vaswani, A. et al.', title: 'Attention Is All You Need', publisher: 'Advances in Neural Information Processing Systems 30', year: 2017, url: 'https://arxiv.org/abs/1706.03762' },
      { author: 'Bahdanau, D., Cho, K. and Bengio, Y.', title: 'Neural Machine Translation by Jointly Learning to Align and Translate', publisher: 'International Conference on Learning Representations', year: 2015, url: 'https://arxiv.org/abs/1409.0473' },
      { author: 'Dosovitskiy, A. et al.', title: 'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale', publisher: 'International Conference on Learning Representations', year: 2021, url: 'https://arxiv.org/abs/2010.11929' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'bert',
    epochId: 'intelligence-era',
    date: { year: 2018, month: 10, day: 11, precision: 'exact', display: '2018-10-11' },
    location: 'Google AI Language, Mountain View, California',
    title: 'BERT: bidirectional pretraining for language understanding',
    summary: 'Google researchers pretrained a transformer encoder to fill in masked words across billions of tokens, then fine-tuned it to set new records on eleven language understanding benchmarks at once.',
    explanation: `In October 2018 Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova released BERT, Bidirectional Encoder Representations from Transformers. The model was a transformer encoder of 12 or 24 layers, pretrained on the whole of English Wikipedia and the BookCorpus, some 3.3 billion words, with two self-supervised tasks. In masked language modelling, 15 percent of input tokens were hidden and the model learned to predict them from both directions of context. In next sentence prediction, it learned whether two passages were consecutive. After pretraining, a small output layer was added and the whole network was fine-tuned for a few hours on each downstream task.

The results were startling for their breadth. BERT improved the state of the art on eleven benchmarks simultaneously, including the GLUE suite of understanding tasks, the SQuAD reading comprehension test, where it exceeded human performance on the leaderboard, and named entity recognition. Previous systems had been engineered task by task; BERT was one pretrained model and a recipe.

BERT crystallized the pretrain-then-fine-tune paradigm that word2vec and ELMo had foreshadowed. It made clear that the representation learned from predicting text was general enough to transfer to almost any language task, and that scale in pretraining data and model size translated into downstream accuracy. Because Google released the weights, tens of thousands of practitioners could fine-tune BERT on a single GPU, and within a year derivative models (RoBERTa, ALBERT, DistilBERT, multilingual and domain-specific variants) filled the literature. Google deployed BERT in its search ranking in late 2019, calling it the largest improvement in five years.

Historically, BERT and GPT represent a fork. BERT used the bidirectional encoder and excelled at understanding tasks with labelled fine-tuning. GPT used the causal decoder and generated text. For two or three years the encoder approach dominated applied natural language processing. The decoder approach won in the end because generation subsumed understanding once models were large enough to be instructed in prose, but the practical machinery of the era, the tokenizers, the fine-tuning recipes, the benchmark culture and the habit of releasing pretrained checkpoints, was largely built around BERT. The evidence is the model's citation count, which exceeded 100,000 within six years, and its documented use in search, translation and content moderation at scale.`,
    mechanism: `Input text is split into WordPiece subword tokens, prefixed with a classification token and separated by sentence markers. Token, segment and position embeddings are summed and passed through a stack of transformer encoder blocks in which every token attends to every other in both directions. During pretraining, randomly selected tokens are replaced by a mask symbol (or occasionally by a random or unchanged token), and a softmax over the vocabulary at those positions is trained to recover the original. A second head on the classification token is trained to predict whether the two input segments were adjacent in the source. Fine-tuning attaches a task-specific linear layer, to the classification token for sentence-level tasks or to each token for span and tagging tasks, and updates all parameters with a small learning rate for a few epochs.`,
    prerequisites: ['transformer-paper', 'word2vec', 'wikipedia'],
    consequences: ['gpt-2', 'gpt-3', 'chatgpt'],
    figures: [
      { name: 'Jacob Devlin', role: 'Lead author' },
      { name: 'Ming-Wei Chang', role: 'Co-author' },
    ],
    significance: 7,
    significanceJustification: 'BERT established pretraining and fine-tuning as the universal recipe for language tasks and was deployed in web search within a year. It defined the practical tooling of NLP even though generative decoders later overtook it.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Devlin, J., Chang, M.-W., Lee, K. and Toutanova, K.', title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding', publisher: 'Proceedings of NAACL-HLT 2019', year: 2019, url: 'https://arxiv.org/abs/1810.04805' },
      { author: 'Peters, M. et al.', title: 'Deep Contextualized Word Representations', publisher: 'Proceedings of NAACL-HLT 2018', year: 2018, url: 'https://arxiv.org/abs/1802.05365' },
      { author: 'Liu, Y. et al.', title: 'RoBERTa: A Robustly Optimized BERT Pretraining Approach', publisher: 'arXiv', year: 2019, url: 'https://arxiv.org/abs/1907.11692' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'gpt-2',
    epochId: 'intelligence-era',
    date: { year: 2019, month: 2, day: 14, precision: 'exact', display: '2019-02-14' },
    location: 'OpenAI, San Francisco',
    title: 'GPT-2 and the staged release',
    summary: 'OpenAI trained a 1.5 billion parameter decoder on 40 gigabytes of web text and showed it could write coherent multi-paragraph prose and perform tasks it was never trained for, then withheld the full model over misuse concerns.',
    explanation: `On February 14, 2019, OpenAI announced GPT-2, a language model ten times larger than its 2018 predecessor. Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever had trained a 1.5 billion parameter transformer decoder on WebText, a corpus of about 8 million web pages selected by following links that Reddit users had upvoted. The training objective was the simplest possible: predict the next token. The model had never been shown a labelled example of any task.

The paper's title, "Language Models are Unsupervised Multitask Learners", stated the finding. Given a prompt, GPT-2 could summarize, translate, answer questions and complete stories at a level that, while inconsistent, was far beyond what an unsupervised model was supposed to manage. Its samples were the first machine-written text that many readers found difficult to distinguish from human writing across several paragraphs. A prompt about unicorns in the Andes produced a plausible news story that circulated widely.

OpenAI chose not to release the full model at first, citing the risk of automated disinformation, spam and impersonation. It released a 124 million parameter version, then larger versions over nine months, and the full model in November 2019 after studying detection methods and finding no evidence of major misuse. The decision was controversial. Some researchers saw a publicity stunt; others saw a first attempt at responsible disclosure norms for a dual-use technology. Either way, it introduced the public to the idea that language models might be dangerous, and it established a pattern of staged releases and safety evaluations that later laboratories formalized.

Technically, GPT-2 was the demonstration that pure scaling of a decoder on diverse web text produced emergent, zero-shot task performance, the observation that justified the far larger GPT-3 the following year. The paper reported that performance improved smoothly with model size across every task tested with no sign of saturation. This was the empirical seed of the scaling hypothesis. The evidence for GPT-2's importance is its role as the direct architectural and methodological ancestor of every GPT that followed, and the fact that its release debate shaped the governance conversation around AI for the next several years.`,
    mechanism: `GPT-2 is a decoder-only transformer with 48 layers, 1,600-dimensional embeddings and a context window of 1,024 byte-pair-encoded tokens. Masked self-attention ensures each position attends only to earlier positions, so the network defines a probability distribution over the next token given all previous ones. Training minimizes cross-entropy on that prediction across the WebText corpus; no task labels are used. At inference the model is given a prompt and sampled token by token, with temperature and top-k truncation to control diversity. Task behaviour arises because the training text itself contains examples of summaries, translations and question answering with recognizable textual cues, and a sufficiently large model learns to continue those patterns. Layer normalization was moved to the input of each block and a modified initialization scaled residual layers by depth, both stabilizing training at larger size.`,
    prerequisites: ['transformer-paper', 'bert', 'word2vec', 'social-networks'],
    consequences: ['gpt-3', 'chatgpt', 'llama'],
    figures: [
      { name: 'Alec Radford', role: 'Lead author' },
      { name: 'Ilya Sutskever', role: 'OpenAI chief scientist' },
    ],
    significance: 7,
    significanceJustification: 'GPT-2 was the first demonstration that unsupervised scaling produces general zero-shot capability, and its staged release started the public debate about language model risk. Both threads run directly into GPT-3 and ChatGPT.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Radford, A., Wu, J., Child, R., Luan, D., Amodei, D. and Sutskever, I.', title: 'Language Models are Unsupervised Multitask Learners', publisher: 'OpenAI', year: 2019 },
      { author: 'OpenAI', title: 'Better Language Models and Their Implications', publisher: 'OpenAI', year: 2019, url: 'https://openai.com/index/better-language-models/' },
      { author: 'Radford, A., Narasimhan, K., Salimans, T. and Sutskever, I.', title: 'Improving Language Understanding by Generative Pre-Training', publisher: 'OpenAI', year: 2018 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'gpt-3',
    epochId: 'intelligence-era',
    date: { year: 2020, month: 5, day: 28, precision: 'exact', display: '2020-05-28' },
    location: 'OpenAI, San Francisco',
    title: 'GPT-3 and in-context learning',
    summary: 'A 175 billion parameter language model trained on hundreds of billions of tokens learned new tasks from a handful of examples placed in its prompt, confirming that scale alone produced qualitatively new behaviour.',
    explanation: `In May 2020 OpenAI published a paper by Tom Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah and 27 co-authors describing GPT-3, a transformer language model with 175 billion parameters, more than a hundred times larger than GPT-2. It had been trained on roughly 300 billion tokens drawn from a filtered Common Crawl, WebText, books and Wikipedia, at a compute cost estimated at several million dollars on a Microsoft-built cluster of V100 GPUs.

The headline finding was in-context learning. Given a few examples of a task in the prompt, with no gradient updates, GPT-3 could perform translation, arithmetic, question answering, unscrambling words and writing code at levels competitive with fine-tuned models. The paper plotted performance against model size for eight scales and showed that few-shot ability grew steeply with size. News articles generated by the model were judged human-written by readers about half the time, no better than chance.

The paper was the empirical confirmation of the scaling laws that Jared Kaplan and colleagues at OpenAI had published in January 2020, which showed that language model loss fell as a smooth power law in parameters, data and compute over seven orders of magnitude. GPT-3 sat on that curve. The implication, that capabilities could be bought by spending more, reoriented the field. Google, DeepMind, Microsoft, Meta and a wave of startups began building models at comparable scale, and the cost of frontier training runs rose from millions to hundreds of millions of dollars within three years.

GPT-3 was not released as weights. OpenAI offered it through an application programming interface from June 2020, the first time a frontier model was sold as a service, and a community of developers built writing assistants, chatbots and code tools on top of it. GitHub Copilot, launched in 2021 on a GPT-3 descendant called Codex, was the first widely used AI programming tool. The API model also set the commercial template that every later laboratory followed.

The paper was candid about limitations: the model repeated itself, lost coherence over long passages, made confident factual errors, absorbed biases from its training data and could be used for misinformation. Most of these remained the central problems of the era. The evidence for GPT-3's significance is the sudden convergence of the entire industry on large decoder models after mid-2020, and the direct line from GPT-3 through InstructGPT to ChatGPT.`,
    mechanism: `GPT-3 uses the GPT-2 architecture scaled up: 96 layers, 12,288-dimensional embeddings, 96 attention heads and a 2,048-token context, with alternating dense and locally banded sparse attention to reduce cost. Training used model and data parallelism across thousands of GPUs, with the parameters of each layer split across devices and gradients aggregated between them. The objective was next-token prediction over the mixed corpus, with higher-quality sources sampled more often than their size alone would justify. In-context learning works because the model, having seen countless documents that contain patterns followed by continuations of those patterns, learns during pretraining to infer the rule governing a prompt and apply it. Few-shot examples in the prompt thus act as a task specification processed entirely within the forward pass, with no parameter updates.`,
    prerequisites: ['gpt-2', 'transformer-paper', 'aws-cloud-computing'],
    consequences: ['instructgpt-rlhf', 'chatgpt', 'gpt-4', 'llama', 'claude'],
    figures: [
      { name: 'Tom Brown', role: 'Lead author' },
      { name: 'Dario Amodei', role: 'Research lead, later Anthropic co-founder' },
      { name: 'Jared Kaplan', role: 'Scaling laws author' },
    ],
    significance: 9,
    significanceJustification: 'GPT-3 confirmed the scaling hypothesis and introduced in-context learning, redirecting the whole industry toward very large models sold as services. Its descendants are the systems that defined the era.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Brown, T. et al.', title: 'Language Models are Few-Shot Learners', publisher: 'Advances in Neural Information Processing Systems 33', year: 2020, url: 'https://arxiv.org/abs/2005.14165' },
      { author: 'Kaplan, J. et al.', title: 'Scaling Laws for Neural Language Models', publisher: 'arXiv', year: 2020, url: 'https://arxiv.org/abs/2001.08361' },
      { author: 'Chen, M. et al.', title: 'Evaluating Large Language Models Trained on Code', publisher: 'arXiv', year: 2021, url: 'https://arxiv.org/abs/2107.03374' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'waymo-driverless-service',
    epochId: 'intelligence-era',
    date: { year: 2020, month: 10, day: 8, precision: 'exact', display: '2020-10-08' },
    location: 'Phoenix, Arizona',
    title: 'Waymo opens fully driverless rides to the public',
    summary: 'Waymo began carrying paying members of the public in Phoenix with no safety driver aboard, the first commercial robotaxi service, later extending to San Francisco, Los Angeles and other cities.',
    explanation: `On October 8, 2020, Waymo, the self-driving unit spun out of Google's Chauffeur project of 2009, announced that its ride-hailing service in the Phoenix suburbs would carry members of the public with nobody in the driver's seat. Fully driverless rides for a small group of testers had begun in late 2019, but the October announcement opened the service to the general public through the Waymo One app. It was the first time anyone could summon a car with no human driver as an ordinary commercial transaction.

The path to that point had been long and expensive. The DARPA Grand Challenges of 2004 to 2007 established that computers could drive off-road and through simple urban courses. Google's program, staffed largely by challenge veterans, accumulated millions of test miles through the 2010s with safety drivers ready to intervene. Optimism in the mid-2010s about imminent mass deployment, including public predictions by Tesla, Uber and several automakers, gave way to a shakeout: Uber ended its program after a fatal crash in Tempe in 2018, and a number of well-funded startups closed. Waymo's approach, combining lidar, radar and cameras with high-definition maps and cautious geographic expansion, proved durable.

Expansion followed slowly and then faster. Waymo received permission for fully driverless commercial operations in San Francisco in August 2023, opened Los Angeles in 2024, and by 2025 was reporting more than 250,000 paid rides per week across its cities, with Austin and Atlanta operated in partnership with Uber and further cities announced. General Motors shut down its competing Cruise service in December 2024 after a pedestrian was dragged by a Cruise vehicle in 2023 and the company was found to have withheld information from regulators. Tesla began a limited robotaxi service in Austin in June 2025 with safety monitors aboard, and Chinese operators including Baidu's Apollo Go scaled driverless services in Wuhan and other cities.

Waymo's safety data, published in peer-reviewed form and through an online safety hub, showed substantially lower rates of injury crashes and police-reported crashes per mile than human benchmarks over tens of millions of rider-only miles. The event marks the moment when autonomous driving crossed from research demonstration into a working, if geographically limited, transport service. It is included in this epoch because the perception and planning stacks that made it possible are deep-learning systems, and because it is the first large-scale deployment of AI given physical control over vehicles carrying the public.`,
    mechanism: `The Waymo vehicle carries multiple lidar units that build a three-dimensional point cloud of surroundings at centimetre resolution, radar for velocity and weather robustness, and high-resolution cameras for colour and detail. Sensor data is fused with a prebuilt high-definition map that encodes lane geometry, signage and signal locations, so the car localizes itself precisely and needs only to detect what is dynamic. Deep networks classify and track pedestrians, cyclists and vehicles and predict their trajectories a few seconds ahead. A planning module then chooses a path and speed that satisfy traffic rules and comfort constraints, and drive-by-wire actuators execute it. Remote fleet assistants can answer questions from a stuck vehicle but do not drive it. The stack is validated in large-scale simulation replaying logged and synthesized scenarios before software is released to the fleet.`,
    prerequisites: ['alexnet', 'gps', 'resnet', 'lithium-ion-battery'],
    consequences: ['humanoid-robotics-revival', 'state-of-the-field-2026'],
    figures: [
      { name: 'Sebastian Thrun', role: 'Founder of the Google self-driving project' },
      { name: 'John Krafcik', role: 'Waymo chief executive at launch' },
    ],
    significance: 6,
    significanceJustification: 'The first commercial driverless service demonstrated that learned perception could be trusted with public safety at scale, though only in mapped cities. Its slow expansion also showed how far physical AI lagged digital AI.',
    domains: ['transportation', 'computation'],
    sources: [
      { author: 'Kusano, K. et al.', title: 'Comparison of Waymo Rider-Only Crash Data to Human Benchmarks at 7.1 Million Miles', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2312.12675' },
      { author: 'Waymo', title: 'Waymo Safety Impact', publisher: 'Waymo', year: 2025, url: 'https://waymo.com/safety/impact/' },
      { author: 'Thrun, S. et al.', title: 'Stanley: The Robot that Won the DARPA Grand Challenge', publisher: 'Journal of Field Robotics 23', year: 2006 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'alphafold-2',
    epochId: 'intelligence-era',
    date: { year: 2020, month: 11, day: 30, precision: 'exact', display: '2020-11-30' },
    location: 'DeepMind, London',
    title: 'AlphaFold 2 solves protein structure prediction',
    summary: "DeepMind's AlphaFold 2 predicted protein structures from sequence at near-experimental accuracy in the CASP14 assessment, effectively solving a fifty-year-old problem and later earning a Nobel Prize.",
    explanation: `On November 30, 2020, the organizers of the fourteenth Critical Assessment of protein Structure Prediction (CASP14) announced that a system from DeepMind had achieved a median accuracy across the hardest targets comparable to experimental methods. AlphaFold 2 scored around 90 on the assessment's 100-point GDT scale, where a score above 90 is considered competitive with crystallography. The previous best, DeepMind's own first AlphaFold in 2018, had scored in the 60s. John Moult, the co-founder of CASP, said the problem that the competition had been set up in 1994 to track had, in a meaningful sense, been solved.

The problem was that a protein's function depends on the three-dimensional shape into which its chain of amino acids folds, and that shape had been determinable only by slow, expensive experiments: X-ray crystallography, nuclear magnetic resonance and, more recently, cryo-electron microscopy. Christian Anfinsen's 1972 Nobel lecture had posed the challenge of predicting shape from sequence alone. Decades of physics-based simulation and statistical methods had made progress, particularly by exploiting co-evolution patterns in aligned sequences from related organisms, but nothing approached experimental accuracy.

AlphaFold 2 was published in Nature in July 2021 by John Jumper, Richard Evans, Alexander Pritzel and colleagues, with the source code released the same week. DeepMind and the European Bioinformatics Institute then released predicted structures for the entire human proteome and, by 2022, for over 200 million proteins covering nearly every organism with a sequenced genome. The database was used by more than two million researchers within a few years. AlphaFold 3, released in 2024, extended prediction to complexes of proteins with DNA, RNA, ligands and ions. In October 2024 the Nobel Prize in Chemistry was awarded to Demis Hassabis and John Jumper for AlphaFold, shared with David Baker for computational protein design.

The significance lies in the transformation of structural biology from a discovery science into a lookup and design activity. Drug discovery, enzyme engineering and the interpretation of disease mutations all draw on predicted structures. It was also the first case in which a deep learning system delivered a major scientific result outside computing, and it became the template for AI-for-science efforts in materials, weather and mathematics. The evidence is the CASP14 assessment, the Nature papers, the usage statistics of the AlphaFold Protein Structure Database and the Nobel citation.`,
    mechanism: `AlphaFold 2 takes the amino acid sequence, builds a multiple sequence alignment of related proteins from databases, and constructs two representations: one for the alignment and one for pairs of residues. A stack of 48 Evoformer blocks passes information between the two using attention, so that co-evolution signals in the alignment refine estimates of which residues are in contact and vice versa. A structure module then treats each residue as a rigid body with a position and orientation, and uses invariant point attention to place them in three dimensions, iteratively refining the atomic coordinates. The whole network is trained end to end on known structures from the Protein Data Bank, with a loss on the predicted atomic positions, and predicts its own per-residue confidence. The output is recycled through the network several times to improve accuracy.`,
    prerequisites: ['transformer-paper', 'resnet', 'alphago', 'dna-double-helix', 'human-genome-completion'],
    consequences: ['casgevy-crispr-therapy', 'state-of-the-field-2026'],
    figures: [
      { name: 'John Jumper', role: 'Lead researcher' },
      { name: 'Demis Hassabis', role: 'DeepMind chief executive' },
    ],
    significance: 9,
    significanceJustification: 'AlphaFold 2 solved a fifty-year grand challenge in biology and made protein structure a routine computation used by millions of researchers. It is the clearest case of deep learning producing a Nobel-level scientific result.',
    domains: ['biology-medicine', 'computation'],
    sources: [
      { author: 'Jumper, J. et al.', title: 'Highly accurate protein structure prediction with AlphaFold', publisher: 'Nature 596, 583-589', year: 2021, url: 'https://www.nature.com/articles/s41586-021-03819-2' },
      { author: 'Varadi, M. et al.', title: 'AlphaFold Protein Structure Database: massively expanding the structural coverage of protein-sequence space with high-accuracy models', publisher: 'Nucleic Acids Research 50', year: 2022 },
      { author: 'The Royal Swedish Academy of Sciences', title: 'The Nobel Prize in Chemistry 2024', publisher: 'Nobel Prize Outreach', year: 2024, url: 'https://www.nobelprize.org/prizes/chemistry/2024/summary/' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'mrna-vaccines',
    epochId: 'intelligence-era',
    date: { year: 2020, month: 12, day: 11, precision: 'exact', display: '2020-12-11' },
    location: 'Mainz, Germany and Cambridge, Massachusetts',
    title: 'mRNA vaccines authorized against COVID-19',
    summary: 'Within a year of the SARS-CoV-2 genome being published, two messenger RNA vaccines demonstrated about 95 percent efficacy in trials and received emergency authorization, establishing a new vaccine platform.',
    explanation: `On December 11, 2020, the United States Food and Drug Administration issued an emergency use authorization for the Pfizer-BioNTech vaccine BNT162b2, nine days after the United Kingdom's regulator had done so. Moderna's mRNA-1273 followed on December 18. Both vaccines encoded the spike protein of SARS-CoV-2 as messenger RNA wrapped in lipid nanoparticles, and both had shown roughly 95 percent efficacy against symptomatic disease in trials of more than 30,000 participants published in the New England Journal of Medicine. Less than a year had passed since the viral genome was posted online on January 10, 2020. Moderna finalized its vaccine design within two days of that posting.

The speed was possible because mRNA is a platform. Conventional vaccines require growing the pathogen or its proteins, a process tuned for each disease over years. An mRNA vaccine requires only the sequence of the target antigen; the manufacturing process is the same for any target. The idea dated to the 1990s but had been blocked by two problems: injected RNA provoked a violent inflammatory response, and it was rapidly degraded. Katalin Karikó and Drew Weissman at the University of Pennsylvania showed in 2005 that substituting modified nucleosides such as pseudouridine into the RNA suppressed the inflammatory reaction while preserving protein production. Lipid nanoparticle delivery, developed over two decades for small interfering RNA therapies, solved the stability and cell entry problem. Karikó and Weissman received the Nobel Prize in Physiology or Medicine in 2023.

Development was accelerated by the American Operation Warp Speed program and by BioNTech's partnership with Pfizer, which funded manufacturing at risk before trial results were known. By the end of 2021 more than a billion doses of the two vaccines had been administered. Studies estimated that COVID-19 vaccines of all types prevented around 14 to 20 million deaths in their first year of use, with mRNA vaccines providing the bulk of doses in North America and Europe.

The lasting importance is the platform. mRNA candidates for influenza, respiratory syncytial virus, cytomegalovirus and personalized cancer vaccines entered trials, with the melanoma vaccine developed by Moderna and Merck showing promising results in combination with immunotherapy. The technology also demonstrated that a therapeutic could be specified as a digital sequence, which links it to the computational biology of the same years. The evidence is in the regulatory records, the phase 3 trial publications and the excess mortality data of 2021 and 2022.`,
    mechanism: `The vaccine contains a synthetic messenger RNA encoding the full-length SARS-CoV-2 spike protein with two proline substitutions that lock it in the prefusion shape the immune system should recognize. Uridine is replaced by N1-methylpseudouridine to reduce innate immune sensing and increase translation. The RNA is encapsulated in lipid nanoparticles about 100 nanometres across, composed of an ionizable lipid, a helper phospholipid, cholesterol and a PEG-lipid. After intramuscular injection the particles are taken up by cells, the ionizable lipid becomes charged in the acidic endosome and releases the RNA into the cytoplasm, and ribosomes translate it into spike protein for a few days. The protein is displayed on the cell surface and presented to the immune system, which produces neutralizing antibodies and T cells. The RNA never enters the nucleus and is degraded within days.`,
    prerequisites: ['recombinant-dna', 'human-genome-completion', 'automated-dna-sequencer', 'polio-vaccine'],
    consequences: ['casgevy-crispr-therapy', 'state-of-the-field-2026'],
    figures: [
      { name: 'Katalin Karikó', role: 'Nucleoside modification pioneer, Nobel laureate' },
      { name: 'Drew Weissman', role: 'Immunologist, Nobel laureate' },
      { name: 'Ugur Sahin', role: 'BioNTech co-founder' },
    ],
    significance: 9,
    significanceJustification: 'mRNA vaccines ended the acute phase of a global pandemic and established a programmable vaccine platform that reduces development time from years to months. They are the clearest example in the era of biology becoming an information technology.',
    domains: ['biology-medicine'],
    sources: [
      { author: 'Polack, F. P. et al.', title: 'Safety and Efficacy of the BNT162b2 mRNA Covid-19 Vaccine', publisher: 'New England Journal of Medicine 383, 2603-2615', year: 2020, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2034577' },
      { author: 'Baden, L. R. et al.', title: 'Efficacy and Safety of the mRNA-1273 SARS-CoV-2 Vaccine', publisher: 'New England Journal of Medicine 384, 403-416', year: 2021, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2035389' },
      { author: 'Karikó, K., Buckstein, M., Ni, H. and Weissman, D.', title: 'Suppression of RNA Recognition by Toll-like Receptors: The Impact of Nucleoside Modification and the Evolutionary Origin of RNA', publisher: 'Immunity 23, 165-175', year: 2005 },
      { author: 'The Nobel Assembly at Karolinska Institutet', title: 'The Nobel Prize in Physiology or Medicine 2023', publisher: 'Nobel Prize Outreach', year: 2023, url: 'https://www.nobelprize.org/prizes/medicine/2023/press-release/' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'glp-1-agonists',
    epochId: 'intelligence-era',
    date: { year: 2021, month: 6, day: 4, precision: 'exact', display: '2021-06-04' },
    location: 'Novo Nordisk, Bagsvaerd, Denmark and Eli Lilly, Indianapolis',
    title: 'GLP-1 agonists become effective obesity drugs',
    summary: 'The FDA approved semaglutide (Wegovy) for chronic weight management after trials showed average weight loss of about 15 percent, followed by tirzepatide, making obesity pharmacologically treatable for the first time.',
    explanation: `On June 4, 2021, the United States Food and Drug Administration approved semaglutide, sold as Wegovy, for chronic weight management in adults, the first new obesity drug approved since 2014 and the first that worked well. In the STEP 1 trial, published in the New England Journal of Medicine that year, participants lost an average of 14.9 percent of body weight over 68 weeks against 2.4 percent for placebo. Eli Lilly's tirzepatide, which acts on two hormone receptors, produced average losses above 20 percent in the SURMOUNT-1 trial in 2022 and was approved for obesity as Zepbound in November 2023.

Both drugs are analogues of glucagon-like peptide-1, a gut hormone released after meals that stimulates insulin secretion, slows stomach emptying and signals satiety to the brain. Exenatide, derived from a peptide in Gila monster venom, had been approved for type 2 diabetes in 2005, and Novo Nordisk's liraglutide followed. Chemists led by Lotte Bjerre Knudsen at Novo Nordisk engineered semaglutide to bind albumin in the blood and resist enzymatic breakdown, giving a week-long half-life that allowed a single weekly injection at doses high enough to affect appetite substantially. It was approved for diabetes as Ozempic in 2017 before its weight effects were formally studied.

The consequences spread rapidly. Demand outran supply for two years, the drugs became a subject of popular culture, and Novo Nordisk briefly became Europe's most valuable company. The SELECT trial, reported in 2023, showed that semaglutide reduced major cardiovascular events by 20 percent in overweight people without diabetes, which shifted the drugs from cosmetic to cardiometabolic medicine. Trials reported benefits in heart failure, kidney disease, sleep apnoea and fatty liver disease, and an oral formulation of semaglutide for obesity was submitted for approval in 2025. Studies also found reduced alcohol consumption and other compulsive behaviours, prompting research into addiction.

Costs, at over a thousand dollars per month at American list prices, and the need for continuous use to maintain weight loss, made access and insurance coverage a political issue. Compounded and counterfeit versions proliferated during shortages. The importance of the event is that obesity, affecting more than a billion people and driving much of the burden of chronic disease, became reliably treatable with a drug for the first time, and that food, restaurant and medical device companies began to plan for a population that ate less. The evidence is in the trial publications, the regulatory approvals and prescription volumes exceeding tens of millions.`,
    mechanism: `Semaglutide is a 31-amino-acid peptide that mimics GLP-1 with three changes: an amino acid substitution that resists cleavage by the enzyme DPP-4, and a fatty acid chain attached through a linker that binds tightly to serum albumin, protecting the molecule from kidney filtration and extending its half-life to about a week. It activates GLP-1 receptors in the pancreas, increasing glucose-dependent insulin release, in the stomach, slowing emptying, and in the hypothalamus and brainstem, reducing hunger and food reward. Weight loss results primarily from lower calorie intake. Tirzepatide adds activity at the receptor for glucose-dependent insulinotropic polypeptide (GIP), which appears to enhance the effect. Both are given by subcutaneous injection with doses increased in steps over months to limit nausea, the most common side effect.`,
    prerequisites: ['insulin', 'recombinant-dna', 'oral-contraceptive'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'Lotte Bjerre Knudsen', role: 'Chief scientific adviser, Novo Nordisk, semaglutide inventor' },
      { name: 'Daniel Drucker', role: 'GLP-1 physiology researcher' },
    ],
    significance: 8,
    significanceJustification: 'GLP-1 agonists made obesity treatable with a drug for the first time and showed cardiovascular and other benefits, with implications for health systems and the food economy. Their scale of use within four years was unprecedented for a new drug class.',
    domains: ['biology-medicine'],
    sources: [
      { author: 'Wilding, J. P. H. et al.', title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity', publisher: 'New England Journal of Medicine 384, 989-1002', year: 2021, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183' },
      { author: 'Jastreboff, A. M. et al.', title: 'Tirzepatide Once Weekly for the Treatment of Obesity', publisher: 'New England Journal of Medicine 387, 205-216', year: 2022, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038' },
      { author: 'Lincoff, A. M. et al.', title: 'Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes', publisher: 'New England Journal of Medicine 389, 2221-2232', year: 2023, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2307563' },
      { author: 'U.S. Food and Drug Administration', title: 'FDA Approves New Drug Treatment for Chronic Weight Management, First Since 2014', publisher: 'FDA', year: 2021, url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-new-drug-treatment-chronic-weight-management-first-2014' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'jwst',
    epochId: 'intelligence-era',
    date: { year: 2021, month: 12, day: 25, precision: 'exact', display: '2021-12-25' },
    location: 'Kourou, French Guiana, to the Sun-Earth L2 point',
    title: 'James Webb Space Telescope launched',
    summary: 'The largest telescope ever placed in space launched on Christmas Day 2021, unfolded a 6.5 metre segmented mirror a million miles from Earth, and returned its first infrared images of the early universe in July 2022.',
    explanation: `On December 25, 2021, an Ariane 5 rocket lifted the James Webb Space Telescope from Kourou toward the second Sun-Earth Lagrange point, 1.5 million kilometres away. Over the following month the observatory unfolded a five-layer sunshield the size of a tennis court and deployed 18 hexagonal beryllium mirror segments into a single 6.5 metre primary, a sequence involving hundreds of single-point failures that had never been rehearsed in space. On July 12, 2022, NASA released the first full-colour images, including a deep field of galaxy cluster SMACS 0723 that showed thousands of galaxies, some seen as they were more than 13 billion years ago.

Webb was conceived in the late 1980s as the successor to Hubble, designed to observe in the infrared where the light of the first galaxies, stretched by cosmic expansion, actually falls. The project was a joint effort of NASA, the European Space Agency and the Canadian Space Agency. Its cost grew from an early estimate near a billion dollars to about ten billion, and its launch slipped by more than a decade, which made it a case study in the management of large scientific instruments. The technical demands were severe: the mirror had to be kept below 50 kelvin, the mid-infrared instrument colder still, and the whole optical train had to align to a fraction of a wavelength after launch shock and unfolding.

The scientific return was immediate. Within its first two years Webb found galaxies at redshifts above 13, earlier and brighter than most models predicted, forcing revisions to theories of early star formation and black hole growth. It measured the atmospheric composition of exoplanets by transmission spectroscopy, detecting carbon dioxide, methane and sulphur dioxide in gas giants and hints of atmospheres on rocky worlds. It resolved protoplanetary disks, star-forming nebulae and the ice chemistry of molecular clouds in unprecedented detail. The mission's fuel reserve, thanks to an accurate launch, is expected to allow more than twenty years of operation.

Webb belongs in this epoch as the flagship of a cluster of large instruments, alongside the Vera Rubin Observatory, the Euclid mission and gravitational wave detectors, that made the 2020s a period of data-driven astronomy in which machine learning became a standard analysis tool. The evidence is in the mission's engineering records, the peer-reviewed early release science, and the archive of public images that became part of common culture.`,
    mechanism: `Infrared light from distant sources reflects off the 18-segment gold-coated beryllium primary mirror, which is actively aligned by actuators to act as one surface, then off the secondary and tertiary mirrors into four instruments: a near-infrared camera, a near-infrared spectrograph with a programmable microshutter array that can take spectra of a hundred objects at once, a mid-infrared instrument cooled to 7 kelvin by a helium cryocooler, and a combined guider and slitless spectrograph. The sunshield of five kapton layers blocks heat from the Sun, Earth and Moon so the optics passively cool to about 40 kelvin, essential because warm optics would glow at the wavelengths being observed. The observatory orbits L2 so that all three heat sources stay on one side. Data is stored on a solid-state recorder and downlinked through the Deep Space Network.`,
    prerequisites: ['hubble-telescope', 'ccd-sensor', 'kepler-exoplanets', 'galileo-telescope'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'John Mather', role: 'Senior project scientist, NASA' },
      { name: 'Bill Ochs', role: 'Project manager, NASA' },
    ],
    significance: 7,
    significanceJustification: 'Webb is the most capable telescope ever built and reshaped understanding of the early universe and exoplanet atmospheres within two years of launch. It also demonstrated that a decade-late, ten-billion-dollar instrument could still deliver.',
    domains: ['space', 'information'],
    sources: [
      { author: 'Gardner, J. P. et al.', title: 'The James Webb Space Telescope', publisher: 'Space Science Reviews 123, 485-606', year: 2006, url: 'https://arxiv.org/abs/astro-ph/0606175' },
      { author: 'Gardner, J. P. et al.', title: 'The James Webb Space Telescope Mission', publisher: 'Publications of the Astronomical Society of the Pacific 135', year: 2023, url: 'https://arxiv.org/abs/2304.04869' },
      { author: 'NASA', title: 'James Webb Space Telescope', publisher: 'NASA Science', year: 2024, url: 'https://science.nasa.gov/mission/webb/' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'instructgpt-rlhf',
    epochId: 'intelligence-era',
    date: { year: 2022, month: 3, day: 4, precision: 'exact', display: '2022-03-04' },
    location: 'OpenAI, San Francisco',
    title: 'InstructGPT and reinforcement learning from human feedback',
    summary: 'OpenAI showed that fine-tuning a language model on human preference rankings made a 1.3 billion parameter model preferred over the 175 billion parameter GPT-3, establishing the method that turned raw language models into assistants.',
    explanation: `In March 2022 Long Ouyang, Jeff Wu, Xu Jiang and colleagues at OpenAI published the InstructGPT paper, "Training language models to follow instructions with human feedback". The problem it addressed was practical. GPT-3 could do remarkable things when prompted carefully, but by default it continued text rather than answering, made up facts, produced toxic output and ignored instructions. A raw language model predicts what the internet would say next, which is not the same as what a user wants.

The solution combined three stages. First, contractors wrote demonstrations of good responses to prompts collected from the API, and the model was fine-tuned on them. Second, contractors ranked several model outputs to the same prompt from best to worst, and a separate reward model was trained to predict those rankings. Third, the language model was optimized with a reinforcement learning algorithm, proximal policy optimization, to produce outputs the reward model scored highly, with a penalty for drifting too far from the original model. The technique, reinforcement learning from human feedback, had been proposed by Paul Christiano and colleagues in 2017 for teaching agents from comparisons of behaviour, and applied to summarization by OpenAI in 2020.

The result was that labellers preferred the outputs of a 1.3 billion parameter InstructGPT model to those of the 175 billion parameter GPT-3, despite the hundredfold difference in size. Truthfulness improved, toxic output fell, and the models generalized to instructions in languages and formats they had not been trained on. The paper also documented the alignment tax, a slight loss on academic benchmarks, and the possibility of over-optimization against the reward model.

InstructGPT is the direct technical ancestor of ChatGPT, which was a sibling model trained with the same method in a dialogue format. Anthropic published its own study of helpful and harmless assistants trained with RLHF in April 2022, and in December 2022 introduced constitutional AI, in which model-generated feedback guided by written principles partly replaces human labels. Direct preference optimization in 2023 simplified the pipeline by removing the separate reward model. By 2024 the dominant training recipe for frontier systems consisted of pretraining followed by supervised fine-tuning and some form of preference optimization, and the reinforcement learning machinery built for RLHF was repurposed to train reasoning models against verifiable rewards. The evidence is the paper's human evaluation results, the acknowledged lineage from InstructGPT to ChatGPT, and the near-universal adoption of preference-based post-training.`,
    mechanism: `Post-training begins with supervised fine-tuning on a few thousand prompt and response pairs written by labellers. A reward model, typically a copy of the language model with a scalar output head, is then trained on tens of thousands of pairwise comparisons: for each prompt, labellers rank several sampled responses, and the reward model learns to assign higher scores to preferred responses using a Bradley-Terry loss. In the reinforcement learning stage the policy model generates a response to a prompt, the reward model scores it, and proximal policy optimization updates the policy to raise the expected reward while a Kullback-Leibler penalty against the supervised model prevents the policy from exploiting the reward model with degenerate text. A small mix of pretraining gradients is added to preserve general capability. The cycle can be repeated with fresh comparisons collected from the improved model.`,
    prerequisites: ['gpt-3', 'alphago'],
    consequences: ['chatgpt', 'claude', 'gpt-4', 'llama', 'o-series-reasoning-models'],
    figures: [
      { name: 'Long Ouyang', role: 'Lead author' },
      { name: 'Paul Christiano', role: 'Originator of RLHF from preferences' },
      { name: 'Jan Leike', role: 'Alignment team lead' },
    ],
    significance: 8,
    significanceJustification: 'RLHF is what converted language models from text predictors into usable assistants, and every deployed chat model since has used a version of it. The method also seeded the reinforcement learning pipelines behind reasoning models.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Ouyang, L. et al.', title: 'Training language models to follow instructions with human feedback', publisher: 'Advances in Neural Information Processing Systems 35', year: 2022, url: 'https://arxiv.org/abs/2203.02155' },
      { author: 'Christiano, P. et al.', title: 'Deep Reinforcement Learning from Human Preferences', publisher: 'Advances in Neural Information Processing Systems 30', year: 2017, url: 'https://arxiv.org/abs/1706.03741' },
      { author: 'Bai, Y. et al.', title: 'Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback', publisher: 'arXiv', year: 2022, url: 'https://arxiv.org/abs/2204.05862' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'stable-diffusion',
    epochId: 'intelligence-era',
    date: { year: 2022, month: 8, day: 22, precision: 'exact', display: '2022-08-22' },
    location: 'LMU Munich and Stability AI, London',
    title: 'Stable Diffusion: open text-to-image generation',
    summary: 'A latent diffusion model trained by Munich researchers and released with open weights by Stability AI let anyone with a consumer GPU generate images from text, spreading generative imagery across the internet within weeks.',
    explanation: `On August 22, 2022, Stability AI released the weights of Stable Diffusion, a text-to-image model developed by Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser and Björn Ommer at Ludwig Maximilian University of Munich with Runway and the LAION data collective. Earlier in the year OpenAI's DALL-E 2 (April) and Google's Imagen (May) had shown that diffusion models conditioned on text could produce striking, coherent images, but neither was released, and DALL-E 2 was available only through a waitlisted service. Stable Diffusion could be downloaded and run on a graphics card with eight gigabytes of memory.

The technical basis was the latent diffusion paper presented at CVPR in June 2022. Diffusion models, developed by Sohl-Dickstein in 2015 and made practical by Ho, Jain and Abbeel in 2020, learn to reverse a process that gradually adds noise to an image. Running them directly on pixels is expensive. Rombach's group instead trained an autoencoder to compress images into a much smaller latent space, ran diffusion there, and decoded the result, cutting compute by an order of magnitude. Text conditioning came from the CLIP encoder released by OpenAI in 2021, and the training set was a filtered subset of LAION-5B, a public collection of five billion image and caption pairs scraped from the web.

The release detonated. Within days there were web interfaces, plugins for Photoshop and Blender, and fine-tuned variants for anime, architecture and product photography. Techniques for controlling the output, from DreamBooth personalization to ControlNet's structural guidance in 2023, arrived from the open community faster than from any single laboratory. Midjourney, a closed service launched the previous month, and DALL-E competed on quality, but the open model set the pace of experimentation.

The consequences were cultural, legal and political. Artists objected that their work had been scraped without consent, and lawsuits against Stability AI, Midjourney and others were filed in 2023, alongside Getty Images' claim over its watermarked photographs. Deepfake pornography and political imagery became trivially easy to produce. Stock image libraries and illustration markets faced immediate price pressure. At the same time the model became a tool for concept artists, game studios and advertising. Stable Diffusion is the point at which generative media stopped being a laboratory demonstration and became infrastructure, and it set the pattern of open-weight releases that Llama would follow for language six months later. The evidence is the release itself, the download and derivative statistics on model hubs, and the litigation record.`,
    mechanism: `A variational autoencoder compresses a 512 by 512 pixel image into a 64 by 64 by 4 latent tensor. During training, Gaussian noise is added to latents at a random strength, and a U-Net convolutional network with attention layers is trained to predict the noise given the noisy latent, the noise level and a text embedding from a frozen CLIP text encoder injected through cross-attention. At generation time the process runs backwards: starting from pure noise, the U-Net repeatedly estimates and subtracts noise over 20 to 50 steps, guided toward the prompt by classifier-free guidance, which amplifies the difference between conditional and unconditional predictions. The final latent is decoded to pixels. Because the U-Net works in the compressed space, each step costs a fraction of pixel-space diffusion, which is what made consumer hardware sufficient.`,
    prerequisites: ['gans', 'transformer-paper', 'alexnet', 'gpt-3'],
    consequences: ['chatgpt', 'gemini', 'state-of-the-field-2026'],
    figures: [
      { name: 'Robin Rombach', role: 'Lead author of latent diffusion' },
      { name: 'Björn Ommer', role: 'Group leader, LMU Munich' },
      { name: 'Emad Mostaque', role: 'Stability AI founder' },
    ],
    significance: 7,
    significanceJustification: 'Stable Diffusion made high-quality image synthesis freely available to anyone with a gaming computer, triggering both a creative explosion and the first major copyright and deepfake conflicts of the generative era. It set the open-weight precedent that Llama later followed.',
    domains: ['computation', 'information', 'communication'],
    sources: [
      { author: 'Rombach, R., Blattmann, A., Lorenz, D., Esser, P. and Ommer, B.', title: 'High-Resolution Image Synthesis with Latent Diffusion Models', publisher: 'IEEE Conference on Computer Vision and Pattern Recognition', year: 2022, url: 'https://arxiv.org/abs/2112.10752' },
      { author: 'Ho, J., Jain, A. and Abbeel, P.', title: 'Denoising Diffusion Probabilistic Models', publisher: 'Advances in Neural Information Processing Systems 33', year: 2020, url: 'https://arxiv.org/abs/2006.11239' },
      { author: 'Schuhmann, C. et al.', title: 'LAION-5B: An open large-scale dataset for training next generation image-text models', publisher: 'Advances in Neural Information Processing Systems 35', year: 2022, url: 'https://arxiv.org/abs/2210.08402' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'compute-export-controls',
    epochId: 'intelligence-era',
    date: { year: 2022, month: 10, day: 7, precision: 'exact', display: '2022-10-07' },
    location: 'Bureau of Industry and Security, Washington, D.C.',
    title: 'United States restricts export of advanced AI chips to China',
    summary: 'Sweeping American export controls on advanced computing chips, chipmaking equipment and related services to China turned AI compute into a formally controlled strategic resource, with major updates in 2023 and 2025.',
    explanation: `On October 7, 2022, the United States Department of Commerce's Bureau of Industry and Security published rules restricting the export to China of advanced computing chips, the equipment needed to manufacture leading-edge semiconductors, and the ability of American persons to support Chinese advanced chip production. The measures targeted graphics processors above a performance threshold, which caught NVIDIA's A100 and H100 accelerators, as well as lithography, deposition and etch tools for nodes below roughly 14 to 16 nanometres. Officials described the goal as maintaining "as large of a lead as possible" in the technologies underlying artificial intelligence and advanced weapons.

The rules marked a change in doctrine. Previous American export controls had aimed to keep adversaries a couple of generations behind while allowing trade. The 2022 rules aimed to freeze China's frontier capability outright, and they applied to foreign-made products containing American technology, extending their reach to the Netherlands, Japan, South Korea and Taiwan, whose governments subsequently aligned their own controls on ASML, Tokyo Electron and other equipment makers. Chris Miller's history Chip War, published the same week, became the standard account of why the semiconductor supply chain had become a geopolitical fault line.

The controls were revised repeatedly. NVIDIA designed reduced-performance chips (A800, H800) that fell below the thresholds, and in October 2023 the Bureau closed that gap with new performance-density metrics and extended country coverage. In December 2024 it added high-bandwidth memory and more equipment. In January 2025 the outgoing Biden administration issued a broader framework for artificial intelligence diffusion that would have tiered access for every country in the world; the Trump administration rescinded it in May 2025 before it took effect, while continuing to restrict China directly, briefly blocking the H20 chip in April 2025 and then in August 2025 permitting sales under an arrangement in which NVIDIA and AMD would remit a share of China revenue to the United States government. China responded with controls on gallium, germanium and rare earth exports and with a national push for domestic accelerators from Huawei and others.

The controls' effectiveness is contested. DeepSeek's R1 model in January 2025, trained on export-compliant H800 chips, showed that constrained compute could still produce a competitive model, while smuggling and cloud access provided leakage. Nonetheless, the rules made compute a formally controlled strategic good, in the way fissile material or cryptography had been, and they shaped where hyperscale datacenters were built and which countries could buy what. The evidence is the Federal Register record and the public statements of the firms and governments involved.`,
    mechanism: `The rules operate through the Export Administration Regulations. Items are classified by export control classification numbers; the 2022 rule created new numbers for integrated circuits exceeding thresholds of aggregate processing performance and interconnect bandwidth, and for supercomputers and equipment aimed at advanced logic and memory nodes. Exports of such items to China require a licence, reviewed with a presumption of denial. The foreign direct product rule extends the licence requirement to items made abroad using American software, equipment or technology, which is why chips fabricated in Taiwan by TSMC fall under it. The rules also restrict "U.S. persons" from servicing covered Chinese fabs. Enforcement relies on know-your-customer obligations for exporters and cloud providers, entity list designations for specific Chinese firms, and coordination with allied governments to align their own controls.`,
    prerequisites: ['integrated-circuit', 'gpt-3', 'alexnet', 'manhattan-project'],
    consequences: ['deepseek-r1', 'hyperscale-ai-datacenters', 'state-of-the-field-2026'],
    figures: [
      { name: 'Alan Estevez', role: 'Under Secretary of Commerce for Industry and Security' },
      { name: 'Jake Sullivan', role: 'United States National Security Adviser' },
    ],
    significance: 7,
    significanceJustification: 'The controls established compute as a strategic resource subject to state control, reshaped the global semiconductor trade and defined the geopolitical frame within which the AI race is run. Their long-term effect on Chinese capability remains uncertain.',
    domains: ['weapons-security', 'computation', 'manufacturing'],
    sources: [
      { author: 'Bureau of Industry and Security', title: 'Implementation of Additional Export Controls: Certain Advanced Computing and Semiconductor Manufacturing Items; Supercomputer and Semiconductor End Use; Entity List Modification', publisher: 'Federal Register 87 FR 62186', year: 2022 },
      { author: 'Bureau of Industry and Security', title: 'Implementation of Additional Export Controls: Certain Advanced Computing Items; Supercomputer and Semiconductor End Use; Updates and Corrections', publisher: 'Federal Register 88 FR 73458', year: 2023 },
      { author: 'Miller, C.', title: "Chip War: The Fight for the World's Most Critical Technology", publisher: 'Scribner', year: 2022 },
      { author: 'Allen, G. C.', title: "Choking Off China's Access to the Future of AI", publisher: 'Center for Strategic and International Studies', year: 2022, url: 'https://www.csis.org/analysis/choking-chinas-access-future-ai' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'chatgpt',
    epochId: 'intelligence-era',
    date: { year: 2022, month: 11, day: 30, precision: 'exact', display: '2022-11-30' },
    location: 'OpenAI, San Francisco',
    title: 'ChatGPT released',
    summary: 'OpenAI released a free conversational interface to a GPT-3.5 model trained with human feedback; it reached 100 million users in two months and made large language models a public fact.',
    explanation: `On November 30, 2022, OpenAI published a short blog post announcing ChatGPT, a "research preview" of a chat interface to a model from the GPT-3.5 series, fine-tuned with reinforcement learning from human feedback in a dialogue format. Internally the launch was regarded as a low-key demonstration; a more capable model, GPT-4, had already finished training. The product reached a million users in five days and, by an analyst estimate reported in February 2023, 100 million monthly users in two months, the fastest adoption of any consumer application to that date.

The technology was not new. GPT-3 had been available through an API for two years, and InstructGPT had shown the value of preference training in March. What changed was the interface and the price. A conversation box that anyone could type into, free of charge, with a model that answered questions, wrote essays and code, explained concepts and admitted, sometimes, that it was wrong, made the capability legible to people who had never read a machine learning paper. Students used it for homework within days; universities and school districts debated bans; programmers discovered it could write and fix code; lawyers, doctors and journalists tested it against their own expertise and reported mixed but unsettling results.

The commercial and strategic reaction was immediate. Microsoft, which had invested a billion dollars in OpenAI in 2019, announced a multi-year investment reported at ten billion dollars in January 2023 and integrated the model into Bing search in February. Google declared an internal emergency, accelerated the release of its Bard chatbot and reorganized its research divisions. Meta, Anthropic, Baidu, Alibaba and dozens of startups shipped chat products within a year. OpenAI introduced a paid tier in February 2023 and, by 2025, reported hundreds of millions of weekly users and annualized revenue in the billions of dollars.

ChatGPT also concentrated public attention on the risks of language models. Fabricated citations, confidently wrong answers, jailbreaks that bypassed safety training, and the use of the tool for spam and cheating became news stories. In March 2023 an open letter called for a pause on training systems more powerful than GPT-4, and by the end of the year the United Kingdom had convened an international AI safety summit and the United States had issued an executive order on AI. The evidence for ChatGPT's significance is the adoption data, the documented responses of the largest technology companies and the sudden entry of AI into legislative agendas worldwide. It is the moment the intelligence era became visible to everyone.`,
    mechanism: `ChatGPT wraps a decoder-only transformer, initially the text-davinci-003 lineage of GPT-3.5 and from March 2023 also GPT-4, in a chat protocol. Each turn of a conversation is formatted with role markers for system, user and assistant, and the full transcript up to a context limit is fed to the model, which generates the next assistant turn token by token. The model was fine-tuned on human-written dialogues in which trainers played both sides, and then optimized with reinforcement learning against a reward model trained on rankings of alternative responses, the same recipe as InstructGPT. Safety behaviour, refusals and the assistant persona are products of this post-training rather than of the pretrained model. Serving at scale required batching requests across large GPU clusters and streaming tokens to the browser as they are produced.`,
    prerequisites: ['gpt-3', 'instructgpt-rlhf', 'bert', 'smartphone-universal-computer'],
    consequences: ['gpt-4', 'claude', 'gemini', 'llama', 'agentic-coding-tools', 'hyperscale-ai-datacenters'],
    figures: [
      { name: 'Sam Altman', role: 'OpenAI chief executive' },
      { name: 'John Schulman', role: 'Post-training research lead' },
      { name: 'Mira Murati', role: 'OpenAI chief technology officer' },
    ],
    significance: 9,
    significanceJustification: 'ChatGPT converted a research capability into a mass product in weeks, reorganized the technology industry around language models and put AI onto political agendas worldwide. Its significance lies in diffusion rather than invention.',
    domains: ['computation', 'information', 'communication'],
    sources: [
      { author: 'OpenAI', title: 'Introducing ChatGPT', publisher: 'OpenAI', year: 2022, url: 'https://openai.com/index/chatgpt/' },
      { author: 'Hu, K.', title: 'ChatGPT sets record for fastest-growing user base', publisher: 'Reuters', year: 2023, url: 'https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/' },
      { author: 'Ouyang, L. et al.', title: 'Training language models to follow instructions with human feedback', publisher: 'Advances in Neural Information Processing Systems 35', year: 2022, url: 'https://arxiv.org/abs/2203.02155' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'nif-fusion-ignition',
    epochId: 'intelligence-era',
    date: { year: 2022, month: 12, day: 5, precision: 'exact', display: '2022-12-05' },
    location: 'National Ignition Facility, Lawrence Livermore National Laboratory, California',
    title: 'Fusion ignition at the National Ignition Facility',
    summary: 'A laser-driven implosion released 3.15 megajoules of fusion energy from 2.05 megajoules of laser energy, the first laboratory fusion reaction to produce more energy than was delivered to the fuel.',
    explanation: `In the early hours of December 5, 2022, the National Ignition Facility fired its 192 laser beams into a gold cylinder the size of a pencil eraser containing a peppercorn-sized capsule of frozen deuterium and tritium. The laser delivered 2.05 megajoules of ultraviolet light; the fusion reactions that followed released 3.15 megajoules. For the first time in a laboratory, a fusion target had produced more energy than the energy used to drive it, a threshold called scientific breakeven or, in the facility's own terminology, ignition. The United States Department of Energy announced the result on December 13.

The achievement had been long delayed. NIF was completed in 2009 at a cost of about 3.5 billion dollars, with a stated goal of ignition by 2012. Early campaigns fell short by orders of magnitude, and the program was widely described as a failure. Progress came through incremental changes: better understanding of hydrodynamic instabilities, new capsule materials, improved laser pulse shaping, and in August 2021 a shot that reached 1.3 megajoules and showed the plasma was self-heating. The December 2022 shot used a thicker capsule and a small increase in laser energy. The result was confirmed in a set of peer-reviewed papers in Physical Review Letters in February 2024, one of which concluded that the Lawson criterion for ignition had been met.

Subsequent shots increased the yield. A July 2023 experiment produced 3.88 megajoules, and by 2025 the facility reported yields above 8 megajoules from roughly the same laser input, a target gain of about four. The result is important as physics: it demonstrates that a burning plasma can be created and that the decades of computational modelling behind inertial confinement are sound. Its primary purpose, however, is stewardship of the American nuclear weapons stockpile, and NIF is not a power plant. The laser is under one percent efficient, so the wall-plug energy consumed by the facility was roughly a hundred times the fusion yield, and the facility can fire about once a day, whereas a power plant would need ten shots a second with targets costing cents rather than thousands of dollars.

The event nevertheless changed the climate around fusion. Private fusion companies, which had raised several billion dollars by 2022, pointed to it as proof of principle; Commonwealth Fusion Systems, TAE, Helion and others pursued magnetic and pulsed approaches with commercial targets in the 2030s. The evidence is the DOE announcement, the Physical Review Letters papers and the facility's published shot data.`,
    mechanism: `Infrared light from 192 neodymium glass laser beams is amplified, converted to ultraviolet, and focused through two openings of a hohlraum, a gold-lined cylinder. The laser heats the hohlraum walls, which emit X-rays that bathe a spherical capsule of diamond-like carbon a couple of millimetres across. The X-rays ablate the capsule's outer layer, and the rocket-like reaction drives the remaining shell inward at around 400 kilometres per second, compressing the deuterium-tritium fuel to densities greater than lead and heating a central hot spot to over 100 million kelvin. Fusion reactions in the hot spot produce alpha particles that deposit their energy in the surrounding fuel, raising its temperature faster than it loses energy, so a burn wave propagates outward through the compressed fuel. The whole implosion lasts a few billionths of a second and is diagnosed by neutron detectors and X-ray imaging.`,
    prerequisites: ['hydrogen-bomb', 'laser', 'nuclear-fission', 'nuclear-power'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'Annie Kritcher', role: 'Principal designer of the ignition experiment' },
      { name: 'Omar Hurricane', role: 'Chief scientist, inertial confinement fusion program' },
    ],
    significance: 7,
    significanceJustification: 'Ignition proved that laboratory fusion can release more energy than the driver delivers, a milestone pursued since the 1950s. It is a physics result rather than an energy technology, and the path to useful power remains long.',
    domains: ['energy'],
    sources: [
      { author: 'U.S. Department of Energy', title: 'DOE National Laboratory Makes History by Achieving Fusion Ignition', publisher: 'Department of Energy', year: 2022, url: 'https://www.energy.gov/articles/doe-national-laboratory-makes-history-achieving-fusion-ignition' },
      { author: 'Abu-Shawareb, H. et al. (Indirect Drive ICF Collaboration)', title: 'Achievement of Target Gain Larger than Unity in an Inertial Fusion Experiment', publisher: 'Physical Review Letters 132, 065102', year: 2024, url: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.132.065102' },
      { author: 'Zylstra, A. B. et al.', title: 'Burning plasma achieved in inertial fusion', publisher: 'Nature 601, 542-548', year: 2022, url: 'https://www.nature.com/articles/s41586-021-04281-w' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'llama',
    epochId: 'intelligence-era',
    date: { year: 2023, month: 2, day: 24, precision: 'exact', display: '2023-02-24' },
    location: 'Meta AI, Paris and Menlo Park',
    title: 'LLaMA and the open-weight language models',
    summary: "Meta released LLaMA to researchers in February 2023 and Llama 2 under a permissive licence in July, making near-frontier language models freely downloadable and seeding an open ecosystem.",
    explanation: `On February 24, 2023, Meta AI announced LLaMA, a family of language models from 7 to 65 billion parameters trained by Hugo Touvron, Thibaut Lavril, Gautier Izacard and colleagues, largely in Paris. The models were trained on more tokens than their size would conventionally justify, following the insight of DeepMind's Chinchilla paper of 2022 that most large models had been undertrained on data, and the 13 billion parameter version matched GPT-3 on most benchmarks at a tenth of the size. Meta released the weights to academic researchers on request. Within a week they had leaked onto public file-sharing sites, and within a month Stanford's Alpaca had shown that a few hundred dollars of fine-tuning on instruction data turned the 7 billion model into a passable chatbot that ran on a laptop.

In July 2023 Meta released Llama 2, with weights available to anyone under a licence permitting commercial use by all but the largest companies, and with chat-tuned versions trained using human feedback. Llama 3 followed in April 2024, and in July 2024 Llama 3.1 included a 405 billion parameter model that Meta claimed was competitive with the best closed models of the time. Llama 4, released in April 2025 with a mixture-of-experts design, received a more mixed reception. By then the models had been downloaded hundreds of millions of times and formed the base for thousands of fine-tuned derivatives.

Meta's rationale was strategic. Mark Zuckerberg argued that open weights would make Llama the industry standard, attract improvements from outside the company, and deny competitors a moat, in the way that Linux and open source software had done for infrastructure. The company did not sell model access, so it lost nothing by giving the models away, and its advertising business benefited from cheaper AI tooling.

The consequences went beyond Meta. Mistral in France, the Qwen models from Alibaba, and DeepSeek in China all released strong open-weight models in 2023 and 2024, and the gap between open and closed frontier capability narrowed to months. Hobbyists ran quantized models on phones; enterprises fine-tuned them on private data; researchers used them to study interpretability and safety. Critics argued that open weights could not be recalled if misuse emerged and that safety training could be stripped by fine-tuning. The debate over open versus closed models became one of the defining policy questions of the era, and the European Union's AI Act and the American executive order of October 2023 both addressed it. The evidence is the release record, the download statistics on public model hubs and the benchmark comparisons published with each generation.`,
    mechanism: `LLaMA is a decoder-only transformer with several efficiency refinements adopted from prior work: pre-normalization with RMSNorm, the SwiGLU activation function in the feed-forward layers, and rotary position embeddings that encode relative position in the attention dot products. The 65 billion parameter model was trained on 1.4 trillion tokens from Common Crawl, C4, GitHub, Wikipedia, books, arXiv and Stack Exchange using 2,048 A100 GPUs for about 21 days. Later generations used grouped-query attention to reduce memory during inference, larger vocabularies, and contexts up to 128,000 tokens. Chat versions add supervised fine-tuning and reinforcement learning from human feedback with separate helpfulness and safety reward models. Because weights are released as files, users can quantize them to 4 or 8 bits, run them on consumer hardware and fine-tune them with low-rank adapters that modify a small fraction of parameters.`,
    prerequisites: ['gpt-3', 'gpt-2', 'instructgpt-rlhf', 'linux'],
    consequences: ['deepseek-r1', 'agentic-coding-tools', 'state-of-the-field-2026'],
    figures: [
      { name: 'Hugo Touvron', role: 'Lead author of LLaMA' },
      { name: 'Yann LeCun', role: 'Meta chief AI scientist' },
      { name: 'Mark Zuckerberg', role: 'Meta chief executive, open-weight strategy' },
    ],
    significance: 7,
    significanceJustification: 'Llama made near-frontier language models freely available, creating an open ecosystem that closed the gap with proprietary systems to months and forced the open versus closed debate into policy. It is the language counterpart of Stable Diffusion.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Touvron, H. et al.', title: 'LLaMA: Open and Efficient Foundation Language Models', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2302.13971' },
      { author: 'Touvron, H. et al.', title: 'Llama 2: Open Foundation and Fine-Tuned Chat Models', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2307.09288' },
      { author: 'Hoffmann, J. et al.', title: 'Training Compute-Optimal Large Language Models', publisher: 'arXiv', year: 2022, url: 'https://arxiv.org/abs/2203.15556' },
      { author: 'Grattafiori, A. et al.', title: 'The Llama 3 Herd of Models', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2407.21783' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'gpt-4',
    epochId: 'intelligence-era',
    date: { year: 2023, month: 3, day: 14, precision: 'exact', display: '2023-03-14' },
    location: 'OpenAI, San Francisco',
    title: 'GPT-4',
    summary: 'OpenAI released GPT-4, a multimodal model that passed professional examinations at human expert levels and set the capability benchmark against which the frontier of the era was measured for the next two years.',
    explanation: `On March 14, 2023, OpenAI released GPT-4, the model it had finished training in the summer of 2022 and spent six months evaluating and aligning. The accompanying technical report was unusual: it gave no details of the architecture, parameter count, training data or compute, citing competition and safety. It did report results. GPT-4 scored in the top ten percent of test takers on a simulated bar examination, where GPT-3.5 had scored in the bottom ten percent, and performed at or near the top on the SAT, GRE, advanced placement examinations and medical licensing questions. It accepted images as input, describing photographs, reading charts and explaining jokes in memes.

The report's most forward-looking claim was that OpenAI had predicted GPT-4's final loss and some downstream capabilities from models trained with ten thousand times less compute, evidence that scaling laws had become an engineering tool. A companion paper from Microsoft researchers, titled "Sparks of Artificial General Intelligence", argued that GPT-4 showed reasoning and problem-solving across domains that earlier systems lacked. The claim was contested but set the terms of debate for the following years.

GPT-4 was deployed immediately in ChatGPT's paid tier, in Microsoft's Bing and Copilot products, and through an API used by thousands of companies. Its quality gap over other available models was large enough that for roughly a year it was the reference point for the entire industry: benchmarks were reported against it, and competitors' announcements were framed by how close they came. Anthropic's Claude 3 Opus in March 2024, Google's Gemini 1.5 Pro and Meta's Llama 3.1 405B were each received as reaching or passing GPT-4 level, and by late 2024 that level had become a commodity available from several providers and open weights.

OpenAI continued the line with GPT-4 Turbo in November 2023, which lengthened the context window to 128,000 tokens, and GPT-4o in May 2024, a natively multimodal model that could hold spoken conversations with low latency. GPT-4.5 arrived in February 2025 and GPT-5 in August 2025, which merged the standard and reasoning model lines. Reports indicated the original GPT-4's training cost exceeded 100 million dollars, and its scale implied a mixture-of-experts architecture, though OpenAI never confirmed either.

The importance of GPT-4 is as the moment the frontier reached professional competence across most text-based tasks. It also inaugurated the practice of extensive pre-release red-teaming, system cards and staged access that laboratories subsequently formalized, and its release intensified the calls for regulation that culminated in the executive order and safety summits of late 2023. The evidence is the technical report, the independent evaluations that followed and the documented industry responses.`,
    mechanism: `GPT-4 is a transformer-based model pretrained to predict the next token on public and licensed text and image data, then post-trained with reinforcement learning from human feedback and, according to the system card, with additional rule-based reward models for safety. Image input is handled by encoding images into token-like representations that are processed by the same network as text. OpenAI reported that it could forecast final training loss from small-scale runs using a power-law fit and that it predicted performance on a coding benchmark from runs 1,000 times smaller. The context window was 8,000 tokens at launch and 32,000 in a variant. Inference is served across large GPU clusters with batching and, for the later 4o variant, a unified model that processes audio, image and text natively rather than through separate transcription and synthesis stages.`,
    prerequisites: ['gpt-3', 'instructgpt-rlhf', 'chatgpt', 'transformer-paper'],
    consequences: ['claude', 'gemini', 'o-series-reasoning-models', 'agentic-coding-tools', 'hyperscale-ai-datacenters'],
    figures: [
      { name: 'Sam Altman', role: 'OpenAI chief executive' },
      { name: 'Greg Brockman', role: 'OpenAI president' },
      { name: 'Jakub Pachocki', role: 'Pretraining research lead' },
    ],
    significance: 9,
    significanceJustification: 'GPT-4 brought language models to professional-examination level and served as the capability reference for the whole industry for over a year. Its release also formalized the safety evaluation practices that later frontier models followed.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'OpenAI', title: 'GPT-4 Technical Report', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2303.08774' },
      { author: 'Bubeck, S. et al.', title: 'Sparks of Artificial General Intelligence: Early experiments with GPT-4', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2303.12712' },
      { author: 'OpenAI', title: 'GPT-4', publisher: 'OpenAI', year: 2023, url: 'https://openai.com/index/gpt-4-research/' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'claude',
    epochId: 'intelligence-era',
    date: { year: 2023, month: 3, day: 14, precision: 'exact', display: '2023-03-14' },
    location: 'Anthropic, San Francisco',
    title: 'Claude and constitutional AI',
    summary: 'Anthropic, founded by former OpenAI researchers with an explicit safety mission, released Claude, trained partly by constitutional AI, and grew it into a frontier model family through successive generations.',
    explanation: `On March 14, 2023, the same day GPT-4 appeared, Anthropic made its assistant Claude generally available after months of limited testing. Anthropic had been founded in 2021 by Dario Amodei, Daniela Amodei and a group of colleagues who left OpenAI over disagreements about direction, with the stated aim of doing frontier research while making safety the organizing principle. Its early work included papers on scaling laws, on predictability and surprise in large models, and on mechanistic interpretability led by Chris Olah, alongside the 2022 study of helpful and harmless assistants trained with human feedback.

Claude's distinctive training method was constitutional AI, published in December 2022. Instead of relying only on human labellers to rate harmful outputs, the model was asked to critique and revise its own responses against a written list of principles, and a preference model was trained on the model's own judgements of which response better followed the constitution. The approach reduced the need for human exposure to harmful content and made the values guiding the model explicit and inspectable. The published constitution drew on the Universal Declaration of Human Rights, platform terms of service and principles written by the company.

The model family advanced rapidly. Claude 2 in July 2023 offered a 100,000-token context, then unusually long. Claude 3 in March 2024 came in three sizes, Haiku, Sonnet and Opus, with Opus matching or exceeding GPT-4 on standard benchmarks. Claude 3.5 Sonnet in June 2024 became widely used for programming, and in October 2024 Anthropic released a computer use capability that let the model operate a desktop through screenshots and mouse actions. Claude 3.7 Sonnet in February 2025 introduced extended thinking and shipped with Claude Code, a terminal agent. Claude 4 arrived in May 2025 with Opus 4 and Sonnet 4, followed by further releases through 2025 that emphasized long-running agentic tasks. Anthropic reported revenue growth from the low hundreds of millions in 2024 to several billion dollars annualized in 2025, driven mainly by enterprise and coding use.

Anthropic also shaped governance. Its Responsible Scaling Policy of September 2023 committed it to capability thresholds that would trigger stronger safeguards, a template that other laboratories adopted in their own frameworks. Its interpretability research, including the 2024 scaling of sparse autoencoders to production models, was among the first to identify human-interpretable features inside a frontier model. The evidence is the published papers, model announcements and policy documents, and the company's position, by 2025, among the three or four organizations at the frontier. Anthropic's own account of itself should be read with the same care as any company's.`,
    mechanism: `Claude models are decoder-only transformers pretrained on a large mixture of text, code and later images, then post-trained. Constitutional AI operates in two phases. In the supervised phase, the model generates responses to prompts designed to elicit harmful behaviour, then critiques each response against a randomly drawn principle from the constitution and rewrites it; the model is fine-tuned on the revised responses. In the reinforcement phase, the model generates pairs of responses, and a copy of the model judges which better satisfies a sampled principle; these judgements train a preference model that is then used as the reward in reinforcement learning, in place of most human harmlessness labels. Human feedback continues to be used for helpfulness. Later generations added extended thinking, in which the model emits a scratchpad of reasoning tokens before its answer, and tool use protocols for acting on software environments.`,
    prerequisites: ['gpt-3', 'instructgpt-rlhf', 'chatgpt', 'transformer-paper'],
    consequences: ['agentic-coding-tools', 'o-series-reasoning-models', 'state-of-the-field-2026'],
    figures: [
      { name: 'Dario Amodei', role: 'Anthropic co-founder and chief executive' },
      { name: 'Daniela Amodei', role: 'Anthropic co-founder and president' },
      { name: 'Chris Olah', role: 'Interpretability research lead' },
    ],
    significance: 7,
    significanceJustification: 'Claude established a frontier laboratory built around safety commitments, introduced constitutional AI and responsible scaling policies that others copied, and became a leading model for programming and agentic work. Its full historical weight depends on developments still unfolding.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Anthropic', title: 'Introducing Claude', publisher: 'Anthropic', year: 2023, url: 'https://www.anthropic.com/news/introducing-claude' },
      { author: 'Bai, Y. et al.', title: 'Constitutional AI: Harmlessness from AI Feedback', publisher: 'arXiv', year: 2022, url: 'https://arxiv.org/abs/2212.08073' },
      { author: 'Anthropic', title: "Anthropic's Responsible Scaling Policy", publisher: 'Anthropic', year: 2023, url: 'https://www.anthropic.com/news/anthropics-responsible-scaling-policy' },
      { author: 'Templeton, A. et al.', title: 'Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet', publisher: 'Anthropic', year: 2024, url: 'https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'starship-flights',
    epochId: 'intelligence-era',
    date: { year: 2023, month: 4, day: 20, precision: 'exact', display: '2023-04-20' },
    location: 'Starbase, Boca Chica, Texas',
    title: 'Starship integrated flight tests begin',
    summary: 'The largest and most powerful rocket ever built began integrated test flights in April 2023, progressing through explosive failures to booster catches and controlled ship splashdowns by 2025, aimed at full reusability.',
    explanation: `On April 20, 2023, SpaceX launched the first fully stacked Starship from its Starbase site in south Texas. The vehicle, a stainless steel Super Heavy booster with 33 methane-fuelled Raptor engines under a Starship upper stage, stands about 120 metres tall and produces roughly twice the thrust of the Saturn V. The first flight lost several engines at liftoff, tumbled during stage separation and was destroyed by its flight termination system four minutes in, after damaging the launch pad. It was, in the company's framing, a test with the objective of clearing the tower.

The program proceeded by iteration. The second flight in November 2023 achieved hot-staging separation before both stages were lost. The third in March 2024 reached orbital velocity and reentered before breaking up. The fourth in June 2024 brought both stages through to controlled splashdowns. On October 13, 2024, the fifth flight returned the Super Heavy booster to the launch site, where the tower's mechanical arms caught it in mid-air, a manoeuvre with no precedent. Booster catches were repeated on later flights, and in May 2025 a previously flown booster was launched again. The upper stage proved harder: the redesigned second-generation ship was lost on three consecutive flights in the first half of 2025, one scattering debris over the Caribbean, before the tenth flight in August 2025 completed its full profile, deploying simulated Starlink satellites and relighting an engine in space, and the eleventh in October 2025 repeated the success. A third-generation vehicle with upgraded Raptor engines was in preparation for 2026, and orbital propellant transfer tests, the key to the lunar and Mars missions, remained to be demonstrated as of mid-2026.

Starship matters because of what full reusability would mean. Falcon 9 reuses its first stage; Starship is designed to reuse both stages with rapid turnaround, which SpaceX projects could reduce the cost of mass to orbit by another order of magnitude, to a few hundred dollars per kilogram or less. NASA selected Starship in 2021 as the lander for the Artemis III crewed lunar mission, and the vehicle is central to SpaceX's plans for Mars and for larger Starlink satellites. Its development has been criticized for environmental effects around Boca Chica, for regulatory friction with the Federal Aviation Administration, and for the schedule risk it imposes on the Artemis program.

As of mid-2026 Starship was a vehicle in test, with the booster largely proven and the ship progressing toward reuse. Anything beyond that point should be treated as expectation rather than record. The evidence is the flight record, the FAA's mishap investigation reports and NASA's contract documents.`,
    mechanism: `Both stages are built from welded stainless steel rings, chosen for strength at cryogenic temperatures and heat tolerance on reentry, and burn liquid methane with liquid oxygen in full-flow staged combustion Raptor engines, the first such engines to fly. The booster's 33 engines lift the stack; at staging the ship's engines ignite while still attached, pushing off through a vented interstage. The booster flips, performs a boostback burn, descends using grid fins and relights 13 then 3 engines to hover beside the tower, whose arms close on lifting pins below the grid fins. The ship coasts to near-orbital velocity, reenters belly first protected by hexagonal ceramic heat shield tiles, and uses four flaps to control its fall before flipping to vertical and landing on its engines. Orbital refuelling, transferring propellant between docked ships, is required for missions beyond low Earth orbit.`,
    prerequisites: ['falcon-9-booster-landing', 'falcon-9-dragon', 'apollo-11', 'v2-rocket'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'Elon Musk', role: 'SpaceX chief engineer' },
      { name: 'Gwynne Shotwell', role: 'SpaceX president and chief operating officer' },
    ],
    significance: 7,
    significanceJustification: 'Starship is the first attempt at a fully reusable super-heavy launch vehicle and the booster catch of 2024 was an unprecedented feat; if completed it would change the economics of spaceflight again. Its significance is provisional because the system was still in test as of 2026.',
    domains: ['space', 'transportation'],
    sources: [
      { author: 'SpaceX', title: 'Starship', publisher: 'SpaceX', year: 2025, url: 'https://www.spacex.com/vehicles/starship/' },
      { author: 'NASA', title: 'As Artemis Moves Forward, NASA Picks SpaceX to Land Next Americans on Moon', publisher: 'NASA', year: 2021 },
      { author: 'Federal Aviation Administration', title: 'SpaceX Starship Super Heavy Project at the Boca Chica Launch Site: Final Programmatic Environmental Assessment', publisher: 'FAA Office of Commercial Space Transportation', year: 2022 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'perovskite-tandem-solar',
    epochId: 'intelligence-era',
    date: { year: 2023, precision: 'year', display: '2023' },
    location: 'LONGi, Xi\'an, China; KAUST, Saudi Arabia; Oxford PV, United Kingdom',
    title: 'Perovskite-silicon tandem cells pass 33 percent efficiency',
    summary: 'Certified efficiencies for perovskite-on-silicon tandem solar cells exceeded 33 percent in 2023, breaking through the practical ceiling of single-junction silicon and pointing toward cheaper photovoltaic power.',
    explanation: `In 2023 laboratory solar cells that stacked a thin perovskite layer on top of a conventional silicon cell crossed 33 percent certified efficiency for the first time. The King Abdullah University of Science and Technology reported 33.7 percent in mid-2023, and in November LONGi, the world's largest silicon module maker, announced a certified 33.9 percent. The theoretical maximum for a single-junction silicon cell is about 29 percent and the best laboratory silicon cells had been stuck near 27 percent for years, so the tandems represented the first practical route past a limit that had bounded the industry since the 1950s. LONGi pushed the record above 34.5 percent in 2024 and toward 35 percent in 2025.

Perovskites are a family of crystalline materials, in the solar context usually lead halide compounds, whose light absorption can be tuned by composition. Tsutomu Miyasaka's group first used one in a solar cell in 2009 at under 4 percent efficiency; by 2012 solid-state versions from Henry Snaith's group at Oxford and Nam-Gyu Park's at Sungkyunkwan University had passed 10 percent, and single-junction perovskite cells reached 26 percent within a decade, the fastest efficiency climb of any photovoltaic material. Because a perovskite can be tuned to absorb blue and green light while letting red and infrared through to the silicon beneath, the two materials together convert more of the solar spectrum than either alone.

The obstacles were durability and manufacturing. Perovskites degrade under moisture, heat and ultraviolet light, and the record cells were square centimetres in size. Progress through the mid-2020s came in encapsulation, in additives and interface layers that suppressed ion migration, and in coating processes compatible with existing silicon lines. Oxford PV shipped the first commercial tandem modules from its factory in Germany in 2024 at around 24 percent module efficiency, and Chinese firms including LONGi, Trina and GCL announced pilot lines, with commercial modules beginning to appear in 2025 and 2026. Whether tandems would achieve the 25-year field lifetimes that silicon modules routinely deliver was still being established as of mid-2026.

The context is a solar industry that installed more than 500 gigawatts in 2024, making photovoltaics the fastest-growing source of electricity in history and, in most of the world, the cheapest. Higher cell efficiency reduces the land, glass, mounting and labour cost per watt, which now dominate module cost. The tandem breakthrough belongs in this epoch because it extends that cost decline beyond the silicon ceiling, and because AI datacenters, electric vehicles and heat pumps were creating new demand for the power. The evidence is the National Renewable Energy Laboratory's certified efficiency chart, the peer-reviewed efficiency tables and the companies' announcements.`,
    mechanism: `A tandem cell places a wide-bandgap perovskite absorber, typically a mixed-cation lead halide with a bandgap near 1.68 electronvolts, on top of a silicon cell with a bandgap of 1.12 electronvolts. High-energy photons are absorbed in the perovskite and lower-energy ones pass through to the silicon, so each junction operates near its own optimum and the voltages add. In the monolithic two-terminal design the layers are connected in series through a thin recombination junction, requiring current matching between the two cells; four-terminal designs wire them separately. The perovskite film is deposited by solution coating or vapour deposition onto the textured silicon surface, with charge-selective transport layers on either side and a transparent conductive oxide on top. Interface passivation and encapsulation against moisture and oxygen determine both efficiency and lifetime.`,
    prerequisites: ['silicon-solar-cell', 'planck-quantum', 'periodic-table'],
    consequences: ['hyperscale-ai-datacenters', 'state-of-the-field-2026'],
    figures: [
      { name: 'Henry Snaith', role: 'Perovskite photovoltaics pioneer, Oxford PV co-founder' },
      { name: 'Tsutomu Miyasaka', role: 'First perovskite solar cell' },
    ],
    significance: 6,
    significanceJustification: 'Tandem cells broke the silicon efficiency ceiling and extend the cost decline of the largest new source of electricity. Their commercial significance depends on durability that was still being proven as of 2026.',
    domains: ['energy', 'materials'],
    sources: [
      { author: 'National Renewable Energy Laboratory', title: 'Best Research-Cell Efficiency Chart', publisher: 'NREL', year: 2025, url: 'https://www.nrel.gov/pv/cell-efficiency' },
      { author: 'Kojima, A., Teshima, K., Shirai, Y. and Miyasaka, T.', title: 'Organometal Halide Perovskites as Visible-Light Sensitizers for Photovoltaic Cells', publisher: 'Journal of the American Chemical Society 131, 6050-6051', year: 2009 },
      { author: 'Green, M. A. et al.', title: 'Solar cell efficiency tables (Version 63)', publisher: 'Progress in Photovoltaics 32', year: 2024 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'casgevy-crispr-therapy',
    epochId: 'intelligence-era',
    date: { year: 2023, month: 11, day: 16, precision: 'exact', display: '2023-11-16' },
    location: 'MHRA, London and FDA, Silver Spring, Maryland',
    title: 'Casgevy: the first approved CRISPR therapy',
    summary: 'The UK regulator approved exagamglogene autotemcel (Casgevy) for sickle cell disease and beta thalassaemia in November 2023, with the FDA following in December, the first medicine based on CRISPR genome editing.',
    explanation: `On November 16, 2023, the United Kingdom's Medicines and Healthcare products Regulatory Agency authorized Casgevy, developed by Vertex Pharmaceuticals and CRISPR Therapeutics, for patients aged twelve and over with sickle cell disease or transfusion-dependent beta thalassaemia. The United States Food and Drug Administration approved it for sickle cell disease on December 8, 2023 and for beta thalassaemia in January 2024, and the European Union followed in early 2024. It was the first licensed therapy anywhere to use CRISPR-Cas9, eleven years after Jennifer Doudna, Emmanuelle Charpentier and their colleagues showed the system could be programmed to cut DNA at chosen sites.

Both diseases arise from mutations in the adult haemoglobin gene. The therapy does not repair that gene. Instead it exploits a natural workaround: fetal haemoglobin, which is normally switched off after birth by the regulatory protein BCL11A. Casgevy edits a patient's own blood stem cells to disable the enhancer that drives BCL11A in red cell precursors, so the cells resume making fetal haemoglobin, which compensates for the defective adult form. The idea came from genetic studies of people who naturally retained fetal haemoglobin and were protected from sickle symptoms.

In the pivotal trials, published in the New England Journal of Medicine, 29 of 30 evaluable sickle cell patients were free of the severe pain crises that define the disease for at least a year after treatment, and almost all thalassaemia patients no longer required transfusions. The first patient, Victoria Gray, treated in 2019, became a public face of the technology. The procedure is demanding: stem cells are harvested, edited in a laboratory and returned after the patient's bone marrow is cleared by chemotherapy, which requires weeks in hospital and carries risks of infertility. The list price in the United States was set at 2.2 million dollars.

The approval matters as proof that genome editing can be delivered as a safe, effective and manufacturable medicine. It arrived alongside a second sickle cell gene therapy, bluebird bio's Lyfgenia, using an older viral vector approach, and ahead of a pipeline of editing therapies for liver, eye and blood disorders using base editing and prime editing, which change single letters without cutting both DNA strands. In 2025 physicians in Philadelphia treated an infant with a personalized base-editing therapy designed and manufactured in months, a sign of where the field was heading. Uptake was slow because of cost and complexity: only a few hundred patients had been treated commercially by 2025, against roughly 100,000 people with sickle cell disease in the United States alone and millions in Africa and India. The evidence is the regulatory decisions, the trial publications and the treatment centre data.`,
    mechanism: `Haematopoietic stem cells are mobilized into the blood with plerixafor, collected by apheresis and sent to a manufacturing site. There they are electroporated with a ribonucleoprotein complex consisting of the Cas9 enzyme and a guide RNA targeting the erythroid-specific enhancer of the BCL11A gene. Cas9 cuts both DNA strands at the target; the cell's non-homologous end joining repair introduces small insertions or deletions that disrupt the enhancer. The edited cells are tested, frozen and shipped back. The patient receives high-dose busulfan chemotherapy to destroy existing marrow, then the edited cells are infused and engraft. Because BCL11A is no longer expressed in red cell precursors, the gamma-globin genes are derepressed and the red cells produce fetal haemoglobin, which does not polymerize in the way sickle haemoglobin does and substitutes for missing beta-globin in thalassaemia.`,
    prerequisites: ['crispr-discovery', 'recombinant-dna', 'human-genome-completion', 'mrna-vaccines'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'Jennifer Doudna', role: 'CRISPR-Cas9 co-discoverer' },
      { name: 'Emmanuelle Charpentier', role: 'CRISPR-Cas9 co-discoverer, CRISPR Therapeutics co-founder' },
      { name: 'Haydar Frangoul', role: 'Lead clinical investigator' },
    ],
    significance: 8,
    significanceJustification: 'Casgevy is the first genome-editing medicine and effectively cures two of the most common inherited diseases, proving CRISPR as a therapeutic platform. Its cost and complexity limit reach, but it opens the path for a generation of editing therapies.',
    domains: ['biology-medicine'],
    sources: [
      { author: 'Frangoul, H. et al.', title: 'CRISPR-Cas9 Gene Editing for Sickle Cell Disease and β-Thalassemia', publisher: 'New England Journal of Medicine 384, 252-260', year: 2021, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2031054' },
      { author: 'Frangoul, H. et al.', title: 'Exagamglogene Autotemcel for Severe Sickle Cell Disease', publisher: 'New England Journal of Medicine 390, 1649-1662', year: 2024, url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2309676' },
      { author: 'U.S. Food and Drug Administration', title: 'FDA Approves First Gene Therapies to Treat Patients with Sickle Cell Disease', publisher: 'FDA', year: 2023, url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease' },
      { author: 'Jinek, M. et al.', title: 'A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity', publisher: 'Science 337, 816-821', year: 2012 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'gemini',
    epochId: 'intelligence-era',
    date: { year: 2023, month: 12, day: 6, precision: 'exact', display: '2023-12-06' },
    location: 'Google DeepMind, London and Mountain View',
    title: 'Gemini: Google enters the frontier',
    summary: 'Google DeepMind released Gemini, a natively multimodal model family, in December 2023, followed by million-token contexts in 2024 and thinking models in 2025, restoring Google to the frontier it had helped create.',
    explanation: `On December 6, 2023, Google announced Gemini, the first model family produced by Google DeepMind, the unit formed in April that year by merging Google Brain with DeepMind. Gemini Ultra, the largest version, was reported to exceed GPT-4 on most academic benchmarks and to be the first model to pass human expert performance on the MMLU examination suite, though a promotional video that appeared to show real-time video understanding was later acknowledged to have been edited. Gemini Pro was deployed in the Bard chatbot immediately; Ultra followed in February 2024 when Bard was renamed Gemini.

The release ended a period of visible disarray. Google had invented the transformer, published the scaling and instruction-tuning research that underpinned ChatGPT, and built the tensor processing units that trained it all, yet had been caught unprepared by OpenAI's consumer launch. Bard's first demonstration in February 2023 contained a factual error that coincided with a fall in Alphabet's share price. The merged organization under Demis Hassabis, with Sergey Brin returning to write code, was Google's answer.

Gemini's distinctive claims were native multimodality and context length. The model was trained from the start on interleaved text, images, audio and video rather than bolting encoders onto a language model. Gemini 1.5 Pro, released in February 2024, offered a context window of one million tokens, enough to hold hours of video or entire codebases, and demonstrated near-perfect recall across that span on retrieval tests. Gemini 2.0 in December 2024 added agentic capabilities and a Flash Thinking variant, and Gemini 2.5 Pro in March 2025 topped several independent leaderboards with its reasoning mode. Gemini 3 followed in late 2025. Google deployed the models across Search in the form of AI Overviews, in Android, Workspace and its cloud platform, giving it a distribution footprint that no competitor could match.

The significance is less any single result than the confirmation that the frontier would be contested by several organizations rather than owned by one. By 2025 OpenAI, Google DeepMind, Anthropic, Meta, xAI and several Chinese laboratories were releasing models within months of each other, and leadership on benchmarks changed hands repeatedly. Google's vertical integration, from custom silicon through models to products with billions of users, made it the competitor best positioned to absorb the costs of the race. The evidence is the technical reports, the independent leaderboards and the product deployment record.`,
    mechanism: `Gemini models are decoder-only transformers trained on Google's tensor processing units across multiple datacenters, using a mixture-of-experts architecture in the 1.5 generation and later, in which a router sends each token to a subset of specialist feed-forward networks so that only a fraction of parameters is active per token. Multimodal input is tokenized directly: images and video frames are encoded into visual tokens and audio into acoustic tokens that are interleaved with text in the same sequence, so a single network attends across modalities. Long contexts rely on efficient attention implementations and on training with progressively longer sequences. Post-training uses supervised fine-tuning and reinforcement learning from human and AI feedback, and the thinking variants generate extended reasoning before answering. Image and audio output are produced by separate or integrated decoder components depending on the version.`,
    prerequisites: ['transformer-paper', 'gpt-4', 'chatgpt', 'alphago', 'google-search'],
    consequences: ['o-series-reasoning-models', 'agentic-coding-tools', 'state-of-the-field-2026'],
    figures: [
      { name: 'Demis Hassabis', role: 'Google DeepMind chief executive' },
      { name: 'Oriol Vinyals', role: 'Gemini technical co-lead' },
      { name: 'Sundar Pichai', role: 'Alphabet chief executive' },
    ],
    significance: 7,
    significanceJustification: 'Gemini brought the company that invented the transformer back to the frontier and established that the race would have several contestants. Its million-token context and search integration changed what users expected of models.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Gemini Team, Google', title: 'Gemini: A Family of Highly Capable Multimodal Models', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2312.11805' },
      { author: 'Gemini Team, Google', title: 'Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2403.05530' },
      { author: 'Pichai, S. and Hassabis, D.', title: 'Introducing Gemini: our largest and most capable AI model', publisher: 'Google', year: 2023, url: 'https://blog.google/technology/ai/google-gemini-ai/' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'humanoid-robotics-revival',
    epochId: 'intelligence-era',
    date: { year: 2024, precision: 'year', display: '2024' },
    location: 'California, Texas, Hangzhou and Shenzhen',
    title: 'The humanoid robot revival',
    summary: 'Cheap actuators, learned control and foundation models revived humanoid robotics in 2024, with Figure, Tesla, Agility, Boston Dynamics and Chinese firms such as Unitree demonstrating and piloting general-purpose bipeds.',
    explanation: `In 2024 humanoid robots moved from research curiosities and viral videos toward pilot deployment. Figure AI, founded in 2022, showed its Figure 01 robot conversing and handling objects using an OpenAI model in March, raised funding at a valuation above two billion dollars, and placed its Figure 02 in a BMW plant in South Carolina. Tesla unveiled a second generation of its Optimus robot and staged a demonstration with tele-operated units at an October event. Agility Robotics' Digit worked shifts moving totes in a GXO Logistics warehouse under the first formal robots-as-a-service contract for a humanoid. Boston Dynamics retired its hydraulic Atlas in April and introduced an all-electric successor, and Hyundai, its owner, planned factory trials. In China, Unitree released the G1 at a starting price of 16,000 dollars, and dozens of firms, encouraged by government industrial policy, demonstrated bipeds; in April 2025 Beijing staged a half marathon in which humanoids ran alongside people.

Three developments made the revival possible. Electric motors and harmonic and planetary gearboxes, driven down in cost by electric vehicles and drones, replaced hydraulics. Reinforcement learning in simulation, using massively parallel physics engines on GPUs, produced walking controllers that transferred to hardware with a robustness that hand-designed controllers had never achieved. And vision-language-action models, beginning with Google's RT-2 in 2023 and continuing with open models such as OpenVLA and the work of Physical Intelligence, allowed robots to interpret instructions and scenes using the same pretrained representations as language models, with actions generated as tokens.

The choice of the human form was pragmatic rather than romantic. Factories, warehouses and homes are built for human bodies, so a general-purpose machine that fits them can be deployed without redesigning the environment, and video of humans provides training data. Critics noted that bipedal walking is energetically costly and mechanically fragile, and that wheeled bases with arms do most practical work more cheaply. The commercial case rested on labour shortages in logistics and manufacturing and on the prospect of learning-based generality.

As of mid-2026 the record was one of pilots and small fleets rather than mass deployment. Public demonstrations often mixed autonomy with teleoperation, dexterity remained far below human hands, and reliability over long shifts was unproven at scale. Goldman Sachs and other analysts projected a market in the tens of billions of dollars by 2035, and Chinese manufacturers were producing humanoids in the thousands per year. The event is recorded as a revival, the start of an industrial effort, with its outcome open. The evidence is the companies' announcements, the published research on learned locomotion and manipulation, and the pilot deployment reports.`,
    mechanism: `A modern humanoid has 20 to 40 actuated joints, each driven by a brushless electric motor through a compact reduction gear, with torque sensing that allows compliant contact. Locomotion controllers are trained by reinforcement learning in simulation: thousands of simulated robots walk over randomized terrain with randomized physical parameters, and a policy network mapping proprioceptive sensor readings to joint targets is optimized for stable, efficient gait, then run on the real robot at hundreds of hertz. Manipulation increasingly uses vision-language-action models: a pretrained multimodal transformer takes camera images and a text instruction and outputs discretized motor commands, fine-tuned on teleoperated demonstrations. Batteries in the torso provide two to five hours of operation. Perception uses depth cameras and, in some designs, lidar, and onboard GPUs run the networks with low latency.`,
    prerequisites: ['alphago', 'transformer-paper', 'lithium-ion-battery', 'waymo-driverless-service', 'al-jazari-automata'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'Brett Adcock', role: 'Figure AI founder' },
      { name: 'Wang Xingxing', role: 'Unitree founder' },
      { name: 'Marc Raibert', role: 'Boston Dynamics founder' },
    ],
    significance: 6,
    significanceJustification: 'The revival marks the point where learned control and cheap actuation made general-purpose humanoids plausible enough to attract industrial investment. Whether they become a major technology remains to be seen.',
    domains: ['manufacturing', 'computation'],
    sources: [
      { author: 'Brohan, A. et al.', title: 'RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control', publisher: 'arXiv', year: 2023, url: 'https://arxiv.org/abs/2307.15818' },
      { author: 'Kim, M. J. et al.', title: 'OpenVLA: An Open-Source Vision-Language-Action Model', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2406.09246' },
      { author: 'Boston Dynamics', title: 'An Electric New Era for Atlas', publisher: 'Boston Dynamics', year: 2024, url: 'https://bostondynamics.com/blog/electric-new-era-for-atlas/' },
      { author: 'Goldman Sachs Research', title: 'The global market for humanoid robots could reach $38 billion by 2035', publisher: 'Goldman Sachs', year: 2024 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'o-series-reasoning-models',
    epochId: 'intelligence-era',
    date: { year: 2024, month: 9, day: 12, precision: 'exact', display: '2024-09-12' },
    location: 'OpenAI, San Francisco',
    title: 'OpenAI o1 and the reasoning model wave',
    summary: 'OpenAI released o1, a model trained by reinforcement learning to think through problems in a long chain of thought before answering, and within months every frontier laboratory shipped a reasoning model of its own.',
    explanation: `On September 12, 2024, OpenAI released a preview of o1, a model that produced a hidden chain of reasoning before its visible answer. On the American Invitational Mathematics Examination o1 solved 83 percent of problems where GPT-4o solved 13 percent; on competitive programming it ranked in the 89th percentile on Codeforces; on a benchmark of doctoral-level science questions it exceeded human experts. The model was slower and more expensive per query, and OpenAI published a chart showing accuracy rising smoothly with both training compute and the amount of compute spent thinking at test time. A second scaling axis, inference compute, had been added to the first.

The idea had roots in chain-of-thought prompting, described by Jason Wei and colleagues at Google in 2022, which showed that asking a model to reason step by step improved accuracy on arithmetic and logic. What o1 added was training. Using reinforcement learning on problems with verifiable answers, mathematics, code and science, the model was rewarded for reaching correct conclusions and learned, by itself, to break problems into steps, check its work, backtrack and try alternatives. It was the AlphaGo lesson applied to language: search over reasoning, trained by outcome.

The wave followed quickly. OpenAI announced o3 in December 2024 with a result on the ARC-AGI abstraction benchmark that its creators had thought years away, and released o3 and o4-mini in April 2025. Google shipped Gemini 2.0 Flash Thinking in December 2024 and made reasoning standard in Gemini 2.5. DeepSeek's R1 in January 2025 reproduced the approach with open weights and a published method. Anthropic's Claude 3.7 Sonnet in February 2025 introduced extended thinking with a user-controlled budget, and xAI's Grok 3 followed. By late 2025 OpenAI had folded the o-series into GPT-5, which routed between quick and deliberate modes, and reasoning had become a standard capability rather than a product line.

The consequences were broad. Benchmarks in mathematics and code that had seemed durable were saturated within a year, with models achieving gold-medal performance at the 2025 International Mathematical Olympiad. Agentic tools became reliable enough for hours-long tasks because the models could plan and recover from errors. The economics of AI shifted toward inference: serving a reasoning model could require ten to a hundred times the compute of a direct answer, which fed the datacenter build-out. Questions about whether the hidden reasoning was faithful to the model's actual computation, and whether it should be shown to users, became central to safety research. The evidence is the release announcements, the benchmark results reproduced by independent evaluators and the near-simultaneous adoption across laboratories.`,
    mechanism: `A pretrained language model is fine-tuned with reinforcement learning on a large set of problems whose answers can be checked automatically, such as mathematics with numeric answers, code with unit tests and science questions with known solutions. The model samples a long sequence of reasoning tokens followed by an answer; the answer is scored by a verifier, and a policy gradient method updates the model to make high-scoring reasoning traces more likely. Over training the model discovers useful behaviours, including decomposition, self-verification, backtracking and trying multiple approaches, without being shown examples of them. At inference the model is allowed a budget of thinking tokens, and accuracy generally rises with that budget. Some systems sample several reasoning chains and select by majority vote or a learned reward model. The reasoning tokens are usually hidden or summarized for users.`,
    prerequisites: ['gpt-4', 'instructgpt-rlhf', 'alphago', 'claude', 'gemini'],
    consequences: ['deepseek-r1', 'agentic-coding-tools', 'hyperscale-ai-datacenters', 'state-of-the-field-2026'],
    figures: [
      { name: 'Noam Brown', role: 'Reasoning research lead, OpenAI' },
      { name: 'Jason Wei', role: 'Chain-of-thought author' },
      { name: 'Ilya Sutskever', role: 'Early proponent of test-time compute scaling' },
    ],
    significance: 8,
    significanceJustification: 'Reasoning models added a second scaling axis, inference compute, and pushed model performance in mathematics, science and code past most human experts within a year. They made reliable agents possible and were adopted by every frontier laboratory.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'OpenAI', title: 'Learning to Reason with LLMs', publisher: 'OpenAI', year: 2024, url: 'https://openai.com/index/learning-to-reason-with-llms/' },
      { author: 'Wei, J. et al.', title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models', publisher: 'Advances in Neural Information Processing Systems 35', year: 2022, url: 'https://arxiv.org/abs/2201.11903' },
      { author: 'DeepSeek-AI', title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning', publisher: 'arXiv', year: 2025, url: 'https://arxiv.org/abs/2501.12948' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'quantum-error-correction',
    epochId: 'intelligence-era',
    date: { year: 2024, month: 12, day: 9, precision: 'exact', display: '2024-12-09' },
    location: 'Google Quantum AI, Santa Barbara, California',
    title: 'Quantum error correction below threshold',
    summary: "Google's Willow processor showed that a surface-code logical qubit became more reliable as it was made larger, the first demonstration below the error correction threshold and the precondition for useful quantum computers.",
    explanation: `On December 9, 2024, Google Quantum AI announced results from a new 105-qubit superconducting processor named Willow, published in Nature. The team encoded a single logical qubit in a surface code, a two-dimensional array of physical qubits in which errors are detected by repeatedly measuring parity checks, and showed that as the code was enlarged from distance 3 to 5 to 7, the logical error rate fell by a factor of about two at each step. The largest code reached a logical error per cycle of 0.143 percent, lower than the best physical qubit in the device, and a logical memory that lasted more than twice as long as any of its components.

This was the outcome that quantum computing theory had promised since Peter Shor and others developed error correction in the 1990s. Quantum bits are fragile; every gate and every microsecond of idling introduces errors. The threshold theorem says that if physical error rates are below a certain value, encoding information redundantly and correcting errors can suppress logical errors exponentially with code size. Being above threshold means bigger codes make things worse. Willow's demonstration that bigger was better, the first unambiguous crossing, converted the question of large-scale quantum computing from whether to how much engineering.

The result built on a 2023 Google paper that had shown a marginal improvement from distance 3 to 5, and on parallel progress elsewhere. In December 2023 a Harvard, MIT and QuEra team led by Mikhail Lukin demonstrated logical operations on up to 48 logical qubits in a neutral atom array, using error detection rather than full correction. Quantinuum's trapped-ion machines showed logical qubits with error rates below physical ones in 2024. Microsoft announced in February 2025 a processor it claimed used topological Majorana qubits, though the claim was disputed by physicists. In 2025 several groups reported logical gates between error-corrected qubits and real-time decoding.

What remained was scale. A useful fault-tolerant computer for chemistry or cryptography would need thousands of logical qubits, each built from hundreds to a thousand physical ones, and the classical decoding electronics, control wiring and cryogenics to match. Roadmaps from IBM, Google and Quantinuum targeted the early 2030s. The relevance to this epoch is twofold: quantum computers are the one proposed computing paradigm that could break the encryption underlying the networked world, which drove the standardization of post-quantum cryptography by NIST in 2024; and Willow's random circuit sampling benchmark, which the classical frontier supercomputer would take an estimated ten septillion years to reproduce, showed that the gap between quantum and classical hardware was widening. The evidence is the Nature papers and the reproduced error-rate data.`,
    mechanism: `The surface code arranges data qubits on a square lattice with measurement qubits between them. Each cycle, measurement qubits are entangled with their four neighbours and read out, producing parity checks of X-type and Z-type stabilizers. A single error on a data qubit flips two adjacent checks, and a classical decoder, using minimum-weight matching or a neural network, infers the most likely pattern of errors from the history of check outcomes and tracks corrections in software. The code distance d is the lattice width; the code corrects up to (d-1)/2 errors, and the logical error rate scales roughly as (p/p_threshold) to the power (d+1)/2 for physical error rate p. Willow's transmon qubits had coherence times near 100 microseconds and two-qubit gate errors around 0.3 percent, with real-time decoding fast enough to keep pace with the roughly one microsecond cycle.`,
    prerequisites: ['transistor', 'planck-quantum', 'shannon-information-theory', 'integrated-circuit'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'Hartmut Neven', role: 'Google Quantum AI founder and lead' },
      { name: 'Michael Newman', role: 'Error correction research lead' },
      { name: 'Peter Shor', role: 'Originator of quantum error correction' },
    ],
    significance: 7,
    significanceJustification: 'Below-threshold error correction was the outstanding experimental question for fault-tolerant quantum computing, and Willow answered it. Practical machines remain years away, so the significance is as a proof of the path.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Google Quantum AI and Collaborators', title: 'Quantum error correction below the surface code threshold', publisher: 'Nature 638, 920-926', year: 2025, url: 'https://arxiv.org/abs/2408.13687' },
      { author: 'Google Quantum AI', title: 'Suppressing quantum errors by scaling a surface code logical qubit', publisher: 'Nature 614, 676-681', year: 2023, url: 'https://www.nature.com/articles/s41586-022-05434-1' },
      { author: 'Bluvstein, D. et al.', title: 'Logical quantum processor based on reconfigurable atom arrays', publisher: 'Nature 626, 58-65', year: 2024, url: 'https://arxiv.org/abs/2312.03982' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'deepseek-r1',
    epochId: 'intelligence-era',
    date: { year: 2025, month: 1, day: 20, precision: 'exact', display: '2025-01-20' },
    location: 'DeepSeek, Hangzhou, China',
    title: 'DeepSeek R1',
    summary: 'A Chinese laboratory released an open-weight reasoning model matching OpenAI o1 on key benchmarks, trained at a fraction of reported Western costs on export-restricted chips, and briefly erased hundreds of billions of dollars from chipmaker valuations.',
    explanation: `On January 20, 2025, DeepSeek, a laboratory spun out of the quantitative hedge fund High-Flyer in Hangzhou, released DeepSeek-R1 with open weights under an MIT licence and a paper describing how it had been trained. The model matched OpenAI's o1 on mathematics, coding and reasoning benchmarks. It was built on DeepSeek-V3, a 671 billion parameter mixture-of-experts model released the previous month whose paper reported that the final training run had used 2.79 million GPU-hours on NVIDIA H800 chips, the export-compliant variant of the H100, at a cost of about 5.6 million dollars. That figure excluded research, prior runs and hardware, but it was an order of magnitude below the sums that Western laboratories were understood to spend, and the app topped download charts in the United States within days.

On January 27, NVIDIA's market value fell by close to 600 billion dollars in a single session, the largest one-day loss for any company in history, as investors concluded that frontier AI might need far fewer chips than assumed. The reaction partly reversed as analysts argued that cheaper training would increase total demand and that inference, which reasoning models consumed heavily, would grow. But the episode fixed DeepSeek in public memory as the moment American assumptions about its lead were shaken.

The technical contribution was substantial and openly documented. DeepSeek showed that reinforcement learning with a simple rule-based reward on verifiable problems, without supervised reasoning examples, produced a model (R1-Zero) that spontaneously developed long chains of thought, self-verification and what the paper called an "aha moment" of reflection. The group reinforcement algorithm it used, GRPO, avoided the memory cost of a separate value network. The final R1 added a small amount of cold-start data and multiple training stages for readability. Distilled versions from 1.5 to 70 billion parameters, based on Llama and Qwen, brought reasoning to consumer hardware. The V3 paper documented engineering advances including multi-head latent attention, auxiliary-loss-free load balancing and FP8 mixed-precision training that others adopted. The core method was later published in Nature in September 2025.

R1 changed several debates. It showed that export controls had not stopped a Chinese laboratory from reaching the frontier within months of it, though the chips used predated the tightened 2023 rules. It demonstrated that open weights could be at the frontier for reasoning as they already were for base models, and it prompted OpenAI to expose reasoning summaries and to release an open-weight model of its own in August 2025. It also raised questions about distillation from Western models and about data governance, since the model's outputs reflected Chinese censorship on political topics. The evidence is the technical reports, the reproducibility of the method by other groups and the market record.`,
    mechanism: `DeepSeek-V3, the base model, is a mixture-of-experts transformer in which each token activates about 37 billion of 671 billion parameters, using multi-head latent attention to compress the key-value cache and a load-balancing scheme that avoids the auxiliary loss usually needed to keep experts evenly used. Training ran in FP8 precision with custom communication kernels to overlap computation and data movement across H800 nodes with restricted interconnect. R1 was trained from V3 by Group Relative Policy Optimization: for each prompt the model samples a group of responses, each is scored by rule-based rewards for correctness and formatting, and the policy is updated toward responses that score above the group average, using the group statistics as the baseline in place of a learned value function. A brief supervised warm-up on curated reasoning examples and a final alignment stage improved language consistency and helpfulness.`,
    prerequisites: ['o-series-reasoning-models', 'llama', 'compute-export-controls', 'gpt-4'],
    consequences: ['agentic-coding-tools', 'state-of-the-field-2026'],
    figures: [
      { name: 'Liang Wenfeng', role: 'DeepSeek founder' },
      { name: 'Daya Guo', role: 'Lead author of the R1 paper' },
    ],
    significance: 7,
    significanceJustification: 'R1 showed that frontier reasoning could be reproduced openly, cheaply and outside the United States, shifting assumptions about compute needs, export controls and the open versus closed balance. Its market impact was the largest single-day reaction to an AI release.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'DeepSeek-AI', title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning', publisher: 'arXiv', year: 2025, url: 'https://arxiv.org/abs/2501.12948' },
      { author: 'DeepSeek-AI', title: 'DeepSeek-V3 Technical Report', publisher: 'arXiv', year: 2024, url: 'https://arxiv.org/abs/2412.19437' },
      { author: 'Guo, D. et al.', title: 'DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning', publisher: 'Nature 645, 633-638', year: 2025 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'high',
  },
  {
    id: 'hyperscale-ai-datacenters',
    epochId: 'intelligence-era',
    date: { year: 2025, month: 1, day: 21, precision: 'exact', display: '2025-01-21' },
    location: 'Abilene, Texas; Memphis, Tennessee; and worldwide',
    title: 'Hyperscale AI datacenters and the compute build-out',
    summary: 'The Stargate announcement of January 2025 headlined a global build-out of gigawatt-scale AI datacenters, with the largest technology companies committing hundreds of billions of dollars a year and electricity becoming the binding constraint.',
    explanation: `On January 21, 2025, the day after the presidential inauguration, OpenAI, SoftBank, Oracle and the investment firm MGX announced Stargate, a plan to invest up to 500 billion dollars over four years in AI computing infrastructure in the United States, beginning with a campus already under construction in Abilene, Texas. The announcement was the most visible marker of a build-out that had been gathering pace since ChatGPT. Microsoft said it would spend about 80 billion dollars on AI datacenters in its 2025 fiscal year; Alphabet, Amazon and Meta announced comparable programs, and the combined capital expenditure of the four largest American cloud companies in calendar 2025 was on course to exceed 350 billion dollars, more than the annual investment of the entire American oil and gas industry.

The unit of construction changed from the megawatt to the gigawatt. xAI built its Colossus cluster in Memphis with 100,000 NVIDIA GPUs in 122 days in 2024 and doubled it in 2025, running gas turbines on site while grid connections were completed. Meta announced Hyperion in Louisiana, planned to reach five gigawatts. Microsoft agreed in September 2024 to buy the entire output of a restarted reactor at Three Mile Island, and Amazon and Google signed agreements for small modular reactors and nuclear power purchase. Datacenter developments were announced in the Gulf states, India, Malaysia, Norway and elsewhere, often tied to sovereign AI ambitions and, in the American case, to export policy over who could host frontier chips.

The physical demands were unprecedented. A single frontier training cluster in 2025 could draw several hundred megawatts, with racks of liquid-cooled accelerators consuming over 100 kilowatts each. The International Energy Agency estimated in April 2025 that datacenters had used about 415 terawatt-hours in 2024, roughly 1.5 percent of global electricity, and projected the figure could more than double by 2030, with AI the main driver. In the United States, utilities revised load forecasts upward for the first time in two decades, gas turbine order books stretched years ahead, and interconnection queues, transformer shortages and local opposition over water and power prices became routine obstacles.

The build-out was also a financial phenomenon. NVIDIA became the most valuable company in the world on the strength of accelerator sales, and questions about whether the revenue from AI services could justify the capital committed were raised repeatedly through 2025 and into 2026, with comparisons to the railway and telecom booms. The event is recorded as a process rather than a moment, with Stargate as its emblem, and its ending was not yet visible as of mid-2026. The evidence is the companies' filings and announcements, the IEA and utility forecasts, and the construction record.`,
    mechanism: `An AI datacenter is organized around clusters of accelerators connected by high-bandwidth networks. Within a rack, GPUs are linked by proprietary interconnects such as NVLink so that a model's parameters can be spread across dozens of chips; between racks, InfiniBand or Ethernet fabrics with hundreds of gigabits per second per port allow tens of thousands of chips to train one model in synchrony. Training splits work by data, tensor and pipeline parallelism and synchronizes gradients every step, so network latency and reliability dominate design. Power arrives at high voltage from dedicated substations and is stepped down to supply racks drawing 100 kilowatts or more, with direct liquid cooling replacing air because of the density. Uninterruptible power and on-site generation buffer grid interruptions. Sites are chosen for available power, land, fibre and cool climates, and increasingly are co-located with gas plants, nuclear reactors or renewable projects.`,
    prerequisites: ['aws-cloud-computing', 'gpt-4', 'chatgpt', 'electric-grid', 'compute-export-controls', 'nuclear-power'],
    consequences: ['agentic-coding-tools', 'state-of-the-field-2026'],
    figures: [
      { name: 'Jensen Huang', role: 'NVIDIA chief executive' },
      { name: 'Sam Altman', role: 'OpenAI chief executive, Stargate' },
      { name: 'Masayoshi Son', role: 'SoftBank chief executive, Stargate' },
    ],
    significance: 8,
    significanceJustification: 'The datacenter build-out is the largest concentrated private capital investment in history and turned electricity into the limiting factor for AI. Whether it proves a sound investment or a bubble is one of the open questions of the era.',
    domains: ['computation', 'energy', 'manufacturing'],
    sources: [
      { author: 'OpenAI', title: 'Announcing The Stargate Project', publisher: 'OpenAI', year: 2025, url: 'https://openai.com/index/announcing-the-stargate-project/' },
      { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
      { author: 'Constellation Energy', title: 'Constellation to Launch Crane Clean Energy Center, Restoring Jobs and Carbon-Free Power to The Grid', publisher: 'Constellation', year: 2024 },
      { author: 'Sevilla, J. et al.', title: 'Compute Trends Across Three Eras of Machine Learning', publisher: 'arXiv', year: 2022, url: 'https://arxiv.org/abs/2202.05924' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'agentic-coding-tools',
    epochId: 'intelligence-era',
    date: { year: 2025, precision: 'year', display: '2025' },
    location: 'San Francisco and worldwide',
    title: 'Agentic coding tools',
    summary: 'In 2025 AI systems moved from autocompleting code to autonomously planning, writing, running and debugging software across whole repositories, with Claude Code, OpenAI Codex, Cursor and similar tools adopted by millions of developers.',
    explanation: `Programming was the first knowledge profession to be transformed by large language models, and 2025 was the year the transformation changed character. GitHub Copilot, launched in 2021, had completed lines as a programmer typed. ChatGPT and its successors answered questions and wrote functions on request. The agentic tools of 2025 did something different: given a task in plain language, they read a codebase, formed a plan, edited many files, ran tests and build commands, read the errors, fixed them and returned a finished change, working for minutes or hours with little supervision.

Several products defined the category. Anthropic released Claude Code, a terminal-based agent, alongside Claude 3.7 Sonnet in February 2025 and made it generally available in May; by late 2025 it accounted for a large share of the company's revenue. OpenAI released a Codex command-line tool in April and a cloud-hosted Codex agent in May that worked on tasks in parallel sandboxes. Cursor, an editor built on the open source VS Code, added agent modes and became one of the fastest-growing software companies on record. GitHub shipped a Copilot coding agent that could be assigned issues. Cognition's Devin, previewed in 2024, Google's Jules and Gemini CLI, and open source agents such as Aider and OpenHands filled out the field. Cloud platforms such as Replit and Lovable let non-programmers build applications by conversation, a practice that acquired the name vibe coding.

The enabling advances were reasoning models, which could plan multi-step work and recover from failed attempts, long context windows that held entire projects, and tool-use protocols such as the Model Context Protocol, released by Anthropic in November 2024, that standardized how models called external systems. Progress was measured on SWE-bench, a benchmark of real GitHub issues, where the best systems went from resolving under 5 percent of tasks in late 2023 to more than 70 percent of the verified subset by mid-2025. The evaluation organization METR reported that the length of software tasks models could complete autonomously at 50 percent reliability had been doubling roughly every seven months since 2019 and had reached several hours by 2025.

The effects on the profession were immediate and contested. Surveys showed large majorities of developers using AI tools daily, and technology companies reported that a quarter or more of new code was model-written. Employers reduced hiring of junior engineers, while demand for people who could specify, review and supervise agent output rose. Reliability problems, including confident errors, security flaws in generated code and the tendency of agents to game tests, kept humans in the loop for consequential systems. As of mid-2026 the direction was clear and the end point was not: agents were writing an increasing share of the world's software under human review, and the tools were beginning to be applied to research, data analysis and administrative work far from programming. The evidence is the product releases, the benchmark records and the adoption surveys.`,
    mechanism: `An agentic coding tool wraps a frontier model in a loop. The model receives a task description, a set of tools (read and write files, search the repository, run shell commands, fetch documentation) and a system prompt describing conventions. It reasons about what to do, calls a tool, receives the result as text, and continues, alternating between thinking and acting until it judges the task complete. Long-context models hold the relevant files, the conversation and tool outputs in a single window, with summarization or compaction when the window fills. Sub-agents can be spawned for parallel searches or independent subtasks. Permissions gate dangerous actions such as deleting files or pushing to shared branches. The model has been post-trained by reinforcement learning on software environments where reward comes from passing tests, so it has learned to run tests, read stack traces and iterate rather than guess.`,
    prerequisites: ['o-series-reasoning-models', 'claude', 'gpt-4', 'gemini', 'llama', 'git-version-control', 'unix'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'Boris Cherny', role: 'Claude Code creator, Anthropic' },
      { name: 'Michael Truell', role: 'Cursor co-founder' },
      { name: 'Thomas Dohmke', role: 'GitHub chief executive during Copilot era' },
    ],
    significance: 8,
    significanceJustification: 'Agentic coding tools are the first case of AI autonomously performing hours of skilled professional work at scale, and software is the profession through which the effect on employment and productivity is first being measured. The pattern is spreading to other kinds of work.',
    domains: ['computation', 'information'],
    sources: [
      { author: 'Anthropic', title: 'Claude 3.7 Sonnet and Claude Code', publisher: 'Anthropic', year: 2025, url: 'https://www.anthropic.com/news/claude-3-7-sonnet' },
      { author: 'OpenAI', title: 'Introducing Codex', publisher: 'OpenAI', year: 2025, url: 'https://openai.com/index/introducing-codex/' },
      { author: 'Jimenez, C. E. et al.', title: 'SWE-bench: Can Language Models Resolve Real-World GitHub Issues?', publisher: 'International Conference on Learning Representations', year: 2024, url: 'https://arxiv.org/abs/2310.06770' },
      { author: 'Kwa, T. et al.', title: 'Measuring AI Ability to Complete Long Tasks', publisher: 'arXiv', year: 2025, url: 'https://arxiv.org/abs/2503.14499' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'solid-state-battery-progress',
    epochId: 'intelligence-era',
    date: { year: 2025, precision: 'year', display: '2025' },
    location: 'Toyota City, Japan; San Jose, California; Ningde, China',
    title: 'Solid-state batteries approach production',
    summary: 'By 2025 solid-state lithium batteries had moved from laboratory cells to pilot lines and automotive sample deliveries at Toyota, QuantumScape, Samsung SDI and Chinese makers, though mass production and cost parity remained unproven.',
    explanation: `The lithium-ion battery of 1991 uses a flammable liquid electrolyte and a graphite anode. A solid-state battery replaces the liquid with a solid ceramic, sulphide or polymer conductor, which in principle allows a lithium metal anode, raising energy density by a third or more, improving safety and permitting faster charging. The idea is older than lithium-ion itself, but practical solid electrolytes with high conductivity and stable interfaces proved elusive. The discovery of superionic sulphide conductors in Japan in the 2010s, with conductivities matching liquids, revived the field, and through the late 2010s and early 2020s the question became engineering: manufacturing thin, defect-free electrolyte layers at scale, managing the volume changes of lithium metal, and applying the stack pressure the cells require.

By 2025 the state of the field was one of pilot production rather than commerce. Toyota, which held the largest patent portfolio, announced a partnership with the refiner Idemitsu in October 2023 to mass-produce sulphide electrolyte and stated a target of putting solid-state batteries in vehicles in 2027 or 2028, after earlier targets slipped. QuantumScape, the Silicon Valley company backed by Volkswagen, shipped B-sample cells of its ceramic separator design to automakers in 2024, announced a faster separator production process in 2025 and licensed its technology to Volkswagen's PowerCo for initial production. Samsung SDI operated a pilot line and targeted 2027. Factorial Energy, working with Mercedes-Benz and Stellantis, road-tested a car with semi-solid cells in 2025. In China, WeLion supplied semi-solid cells for a long-range Nio sedan from 2023, and CATL, BYD and others announced small-scale all-solid-state production targets for 2027 with mass production toward 2030. Government programs in Japan, China and Korea subsidized the effort.

The term covered a spectrum. Semi-solid or hybrid cells, which retained some liquid or gel, were already in limited use; all-solid-state cells with lithium metal anodes were what the industry meant by the goal, and none was in volume production as of mid-2026. Meanwhile conventional lithium-ion kept improving and falling in price, with lithium iron phosphate cells dropping below 60 dollars per kilowatt-hour in China in 2024 and sodium-ion cells entering production, which raised the bar a solid-state cell would need to clear. Industry forecasts placed all-solid-state batteries below five percent of the market before 2030.

The topic belongs in this epoch because batteries are the enabling technology of the transition to electric transport and of grid storage for solar and wind, and because the solid-state race, like fusion and humanoids, exemplifies a technology at the threshold. The claim recorded here is modest: the science had been settled and pilot manufacturing had begun, while the commercial outcome remained open. The evidence is the companies' announcements, the technical literature and independent battery industry analyses.`,
    mechanism: `In a solid-state cell, lithium ions move through a solid electrolyte rather than a liquid. Sulphide electrolytes such as argyrodites and the lithium germanium phosphorus sulphide family conduct ions through a crystal framework of vacancies and interstitial sites, reaching conductivities above one millisiemens per centimetre at room temperature, comparable to liquids, though they react with moisture and require dry-room processing. Oxide electrolytes such as garnet-type LLZO are more stable but stiffer and harder to process. During charge, lithium ions leave the cathode, pass through the electrolyte and plate as metal on the anode current collector; on discharge the metal dissolves. The absence of a liquid removes the flammable component and, ideally, the graphite host, so the anode becomes pure lithium. Dendrites that grow through the electrolyte, contact loss as electrodes expand and contract, and the need for external pressure are the principal failure modes that engineering must control.`,
    prerequisites: ['lithium-ion-battery', 'volta-battery', 'tesla-model-s'],
    consequences: ['state-of-the-field-2026'],
    figures: [
      { name: 'Ryoji Kanno', role: 'Sulphide superionic conductor pioneer, Tokyo Institute of Technology' },
      { name: 'Jagdeep Singh', role: 'QuantumScape co-founder' },
    ],
    significance: 5,
    significanceJustification: 'Solid-state batteries could raise energy density and safety for electric vehicles and storage, but as of 2026 they were a pilot technology competing against rapidly improving conventional cells. The record is one of progress, not arrival.',
    domains: ['energy', 'materials', 'transportation'],
    sources: [
      { author: 'Janek, J. and Zeier, W. G.', title: 'A solid future for battery development', publisher: 'Nature Energy 1, 16141', year: 2016 },
      { author: 'Kato, Y. et al.', title: 'High-power all-solid-state batteries using sulfide superionic conductors', publisher: 'Nature Energy 1, 16030', year: 2016 },
      { author: 'Janek, J. and Zeier, W. G.', title: 'Challenges in speeding up solid-state battery development', publisher: 'Nature Energy 8, 230-240', year: 2023 },
      { author: 'Toyota Motor Corporation', title: 'Toyota and Idemitsu Kosan Enter Collaboration for Mass Production of All-Solid-State Batteries', publisher: 'Toyota Global Newsroom', year: 2023 },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
  },
  {
    id: 'state-of-the-field-2026',
    epochId: 'intelligence-era',
    date: { year: 2026, month: 9, precision: 'year', display: 'September 2026' },
    location: 'Worldwide',
    title: 'State of the field, September 2026',
    summary: 'A summary record of where frontier AI, robotics, biotechnology and energy stood as the atlas was compiled in September 2026, written with the caution that the recent past is the hardest period to see clearly.',
    explanation: `This record closes the epoch with a description of the field as it stood in September 2026. The events preceding it in this file were established by the middle of that year; what follows is a summary of conditions then, with later months described conditionally. Readers should treat it as a snapshot that will look naive in hindsight.

In artificial intelligence, the frontier was held by a small group of laboratories: OpenAI, Google DeepMind, Anthropic, Meta and xAI in the United States, and DeepSeek, Alibaba's Qwen team, Moonshot and others in China. Each had released successive generations through 2025 and into 2026 with reasoning as a standard capability, million-token contexts and native handling of text, images, audio and video. Benchmarks that had been meaningful in 2023, such as graduate examinations, competition mathematics and repository-scale programming, were largely saturated, and evaluation had shifted to long-horizon agentic tasks, scientific research assistance and economically measured work. Independent measurements suggested the length of tasks models could complete autonomously was still doubling every several months. Whether that trend continued through the second half of 2026 is something this record cannot confirm.

The binding constraints were physical and political. Frontier training runs were understood to cost in the billions of dollars, and the largest datacenter campuses under construction were planned in gigawatts. Electricity, chips and the licences to export them shaped who could compete. Governments had moved from summits to rules: the European Union's AI Act was entering force in stages, the United States had oscillated between an executive order and its rescission, and China regulated generative services while subsidizing compute. Safety research had produced interpretability tools, frontier safety frameworks and third-party evaluations, but the reliability of agents acting in the world, the faithfulness of their reasoning and the concentration of capability in a few firms remained open problems.

In robotics, humanoids and autonomous vehicles were in pilot deployment. Waymo carried hundreds of thousands of riders a week in a handful of cities, and humanoid fleets numbered in the hundreds to low thousands. In biotechnology, genome editing had one approved product and a pipeline; AI-designed proteins and antibodies were entering trials; GLP-1 drugs were reshaping chronic disease treatment, and oral and next-generation versions were arriving. In energy, solar was the fastest-growing source in history and tandem cells were entering production; fusion had proved ignition but no plant; solid-state batteries were at the pilot stage; and nuclear power was being revived largely to feed datacenters.

The honest summary is that the era's central technology was still improving on every measured axis, that its economic and social effects were arriving unevenly, and that the questions The Threshold addresses, when general and superhuman machine intelligence might arrive and what would follow, were being asked seriously by governments, investors and the public rather than by specialists alone. What the period after mid-2026 held would be recorded in later revisions of this atlas.`,
    mechanism: `This record is a synthesis rather than an event and has no single mechanism. It is compiled from the primary records of the preceding events, from laboratory announcements and technical reports through mid-2026, from independent evaluations such as those of METR and the Stanford AI Index, from regulatory texts, and from industry data on datacenter construction, vehicle deployments, drug approvals and energy installations. Its method is to state what could be verified from public documents as of the first half of 2026, to describe trends by their measured rate rather than by projection, and to mark anything later as conditional. It should be revised as the record of 2026 settles, and its confidence rating reflects that the most recent period is always the least reliably documented.`,
    prerequisites: ['o-series-reasoning-models', 'agentic-coding-tools', 'hyperscale-ai-datacenters', 'deepseek-r1', 'humanoid-robotics-revival', 'casgevy-crispr-therapy', 'glp-1-agonists', 'perovskite-tandem-solar', 'nif-fusion-ignition', 'solid-state-battery-progress', 'quantum-error-correction', 'starship-flights'],
    consequences: [],
    figures: [],
    significance: 6,
    significanceJustification: 'This record exists to fix the point of observation from which the atlas looks backward and forward. Its value is in candour about what was and was not known in September 2026.',
    domains: ['computation', 'biology-medicine', 'energy', 'manufacturing'],
    sources: [
      { author: 'Maslej, N. et al.', title: 'Artificial Intelligence Index Report 2025', publisher: 'Stanford Institute for Human-Centered Artificial Intelligence', year: 2025, url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report' },
      { author: 'Kwa, T. et al.', title: 'Measuring AI Ability to Complete Long Tasks', publisher: 'arXiv', year: 2025, url: 'https://arxiv.org/abs/2503.14499' },
      { author: 'International Energy Agency', title: 'Energy and AI', publisher: 'IEA', year: 2025, url: 'https://www.iea.org/reports/energy-and-ai' },
      { author: 'Bengio, Y. et al.', title: 'International AI Safety Report 2025', publisher: 'UK Department for Science, Innovation and Technology', year: 2025, url: 'https://www.gov.uk/government/publications/international-ai-safety-report-2025' },
    ],
    lastReviewed: '2026-09-04',
    confidence: 'medium',
    verification: 'developing',
  },
];
