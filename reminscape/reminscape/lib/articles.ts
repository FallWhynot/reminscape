export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  readingTime: number;
  tags: string[];
  image: string;
  featured?: boolean;
};

export const articles: Article[] = [
  // NEWS
  {
    slug: "global-climate-summit-reaches-historic-agreement",
    category: "News",
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Targets",
    excerpt: "World leaders have signed a landmark accord pledging net-zero emissions by 2045, with binding accountability mechanisms and a $500 billion green transition fund.",
    body: `After four days of gruelling negotiations in Geneva, delegates from 194 countries emerged with what many are calling the most consequential climate agreement since the Paris Accord. The Geneva Protocol commits signatories to net-zero carbon emissions by 2045 — five years ahead of previous targets — and establishes an independent monitoring body with real enforcement authority.

The agreement includes a $500 billion green transition fund aimed at supporting developing nations in replacing fossil fuel infrastructure. Unlike previous commitments that relied entirely on voluntary compliance, the new accord introduces financial penalties for countries that miss interim milestones set for 2030 and 2037.

Critics from several major oil-producing nations argued the timeline was "economically unrealistic," while environmental groups cautiously welcomed the deal but noted that implementation would require unprecedented political will. "This is a stronger text than anyone expected walking in," said one veteran climate negotiator who asked not to be named. "Whether governments follow through is an entirely separate question."

Markets reacted with modest optimism. Renewable energy stocks surged in early trading, while shares in coal and conventional oil companies fell sharply. Analysts suggested the agreement could accelerate the already rapid decline in new fossil fuel investment.

The protocol now returns to each nation's legislative process for ratification. The United States, European Union, China, and India — which together account for over 60 percent of global emissions — have all signalled intent to ratify before the year's end.`,
    date: "2026-08-14",
    readingTime: 5,
    tags: ["Climate", "Policy", "Geneva", "Environment"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
    featured: true,
  },
  {
    slug: "semiconductor-shortage-reshaping-supply-chains",
    category: "News",
    title: "Semiconductor Shortage Is Permanently Reshaping Global Supply Chains",
    excerpt: "Manufacturers are abandoning just-in-time logistics and near-shoring production in a structural shift that will redefine how goods are made for decades.",
    body: `The chip shortage that began disrupting global manufacturing in 2021 has catalysed changes that industry analysts say are now structural. Companies that once operated on lean, just-in-time inventory principles have stockpiled components, diversified supplier bases, and in some cases relocated production closer to end markets.

Major automakers have been among the most vocal about the transformation. Several have established direct relationships with chip fabricators — previously unheard of in an industry that historically left component sourcing entirely to tier-one suppliers. The result is a more resilient but undeniably more expensive supply chain.

Taiwan Semiconductor Manufacturing Company continues to dominate advanced chip production, but its share of global capacity has edged down as new fabs come online in the United States, Germany, Japan, and India. Governments have poured hundreds of billions of dollars into semiconductor incentives, viewing chip sovereignty as a national security imperative alongside economic necessity.

For consumers, the near-term consequence is higher prices on everything from cars to washing machines. Longer-term, economists are divided on whether regionalized production will introduce meaningful inflation or whether scale economies at the new facilities will eventually offset higher labour costs.

What is not in dispute is the permanence of the shift. "Nobody is going back to the old model," said one supply chain consultant who has advised Fortune 500 companies through the transition. "The risk tolerance is simply gone."`,
    date: "2026-07-29",
    readingTime: 6,
    tags: ["Semiconductors", "Supply Chain", "Manufacturing", "Economy"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
  },
  {
    slug: "urban-housing-crisis-new-approaches",
    category: "News",
    title: "Cities Are Trying Something Different to Fix the Housing Crisis",
    excerpt: "From Vienna's social housing model to Tokyo's permissive zoning, a handful of cities have kept housing affordable. Their lessons are finally getting attention.",
    body: `In most major cities across the English-speaking world, housing affordability has reached a crisis point. Median home prices in cities like London, Sydney, Toronto, and San Francisco now represent more than a decade of median household income. But it did not have to be this way — and a growing body of evidence points to specific policy choices as the cause, and correction, of the problem.

Vienna stands out as the most often cited counterexample. The Austrian capital has maintained social housing at scale since the 1920s, and today roughly 60 percent of residents live in publicly subsidised accommodation. Waiting lists exist, but rents remain a fraction of comparable private-market apartments. The city continues to fund new social housing construction annually.

Tokyo offers a different model. Japan's capital has kept housing costs relatively stable through aggressive permissive zoning that allows residential construction at density across the city. While Tokyo is not cheap by global standards, housing costs have grown far more slowly than in comparable global cities, and new supply consistently meets demand.

Several North American and European cities have begun studying both models seriously. Houston's relatively liberal land-use rules have made it an accidental experiment in zoning reform, maintaining more affordable housing than comparable American cities despite strong population growth.

What unites successful cities is a willingness to allow — or actively finance — new housing supply. The cities that have failed most spectacularly at affordability tend to have in common a combination of restrictive zoning, strong incumbent homeowner political power, and an unwillingness to treat housing as essential infrastructure rather than a speculative asset.`,
    date: "2026-06-18",
    readingTime: 7,
    tags: ["Housing", "Urban Planning", "Policy", "Cities"],
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&q=80",
  },

  // MOTORSPORT
  {
    slug: "formula-one-2026-regulations-explained",
    category: "Motorsport",
    title: "The 2026 Formula One Regulations Are the Most Radical in a Generation",
    excerpt: "Smaller cars, ground-effect aerodynamics, and 50% hybrid power. What the new rules mean for the sport — and why teams are both excited and terrified.",
    body: `Formula One's 2026 technical regulations represent the most sweeping overhaul the sport has seen since the turbo-hybrid era began in 2014. The new rules touch nearly every aspect of car design: smaller overall dimensions, a fundamental rethink of aerodynamic philosophy, and a powertrain that derives a full half of its output from electrical energy.

The headline specification is the new power unit. Conventional internal combustion output drops to around 400 kilowatts, with a matched electrical component delivering an equal contribution. The harvesting and deployment of electrical energy happens continuously throughout a lap, not just under braking, requiring a level of power management sophistication unprecedented in the sport.

Aerodynamically, the cars move away from the complex, wake-generating downforce surfaces of recent seasons. The regulations mandate simpler bodywork with a reduced number of regulated surfaces, in theory producing cars that race more cleanly in close proximity. Early simulations suggest lap times will be broadly similar to current machinery despite the smaller displacements.

For teams, the transition represents enormous financial and engineering risk. Several manufacturers that sat out the 2014 engine regulations specifically because they found the cost of entry prohibitive are now present, viewing the clean-sheet opportunity as their best chance to arrive competitive. At least two further manufacturers are understood to be evaluating whether to join for 2030.

The first proper pre-season running under the new regulations is expected to reveal whether the aerodynamic philosophy has achieved its intended goal. Early computational fluid dynamics data from teams who have shared results publicly suggests the cars will indeed follow each other more closely — a crucial requirement for the close, unpredictable racing the sport has pursued for decades.`,
    date: "2026-08-01",
    readingTime: 6,
    tags: ["Formula One", "Regulations", "2026", "Technology"],
    image: "https://images.unsplash.com/photo-1541889413457-4aec9c8a3f4f?w=1200&q=80",
    featured: true,
  },
  {
    slug: "le-mans-hydrogen-hypercar-class",
    category: "Motorsport",
    title: "Le Mans Is Adding a Hydrogen Hypercar Class. Here Is What That Means.",
    excerpt: "The ACO has confirmed hydrogen-fuelled prototypes will compete at La Sarthe from 2028. The technology is ready. The infrastructure is another matter.",
    body: `The Automobile Club de l'Ouest has confirmed that hydrogen-fuelled prototypes will join the Hypercar class at the 24 Hours of Le Mans from the 2028 season. The announcement represents the most significant technology diversification in the race's century-long history and positions the event as a proving ground for the fuel type many see as the future of long-distance motorsport.

The hydrogen cars will compete directly against battery-electric and hybrid-combustion Hypercars on performance rather than in a separate class, with regulations designed to equalise lap times across the different energy sources. The fuel cell vehicles will refuel at dedicated hydrogen pit infrastructure that is currently under construction at the Circuit de la Sarthe.

The technology itself is more mature than the infrastructure challenge suggests. Toyota, which has been developing hydrogen fuel cell and hydrogen combustion technology in parallel with its hybrid programme, has already demonstrated prototype hardware capable of Hypercar-level performance figures in closed testing. Porsche and BMW have both indicated intent to evaluate hydrogen powertrain programmes for 2028.

The principal challenge remains refuelling time. Current hydrogen systems require significantly longer pit stops than conventional refuelling, a constraint that the ACO is addressing through minimum stop time rules that will apply to all powertrain types, levelling the strategic playing field while teams develop faster refuelling hardware.

Whether hydrogen succeeds at Le Mans as a credible technology showcase rather than a curiosity will depend largely on whether the competing cars can match the reliability of the best hybrid machines over a 24-hour race. Early data from endurance testing programmes is, according to those involved, more encouraging than public commentary might suggest.`,
    date: "2026-07-11",
    readingTime: 5,
    tags: ["Le Mans", "Hydrogen", "ACO", "Endurance Racing"],
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80",
  },
  {
    slug: "motogp-electronics-arms-race",
    category: "Motorsport",
    title: "The Electronics Arms Race That Is Quietly Defining MotoGP",
    excerpt: "Modern MotoGP bikes carry more processing power than a mid-range laptop. The manufacturers who master the software are winning — and the gap is widening.",
    body: `At any given MotoGP race weekend, the battles most visible to spectators — the overtaking moves, the spectacular saves, the tactical tyre choices — represent only a fraction of the competition actually taking place. A quieter, more consequential contest happens in the data centres and engineering offices of the participating manufacturers, where software engineers work alongside aerodynamicists and engine specialists to extract every measurable fraction from control electronics that now define competitive advantage.

The current unified electronics platform mandated by IRTA standardises hardware across all manufacturers, but the software that runs on it remains proprietary. Each manufacturer develops its own control strategies for traction, engine braking, wheelie control, and the increasingly complex management of the seamless gearbox. The differences between the best and worst implementations, measured in pure lap time, are often larger than the differences between the engines themselves.

Ducati has been the manufacturer most associated with electronic mastery in recent seasons, and their success correlates directly with significant investment in dedicated software development teams — a resource allocation that has become an industry template. Honda and Yamaha have both restructured their electronics departments in response, acknowledging internally that the competitive deficit they experienced was primarily a software rather than hardware problem.

The human element complicates the picture. Rider feedback remains essential to developing effective control strategies, and the manufacturers with the strongest rider-engineer relationships have generally translated that communication more efficiently into faster software iterations. A rider who can precisely articulate what the bike is doing in the first metre after corner apex provides fundamentally different development inputs than one who can only describe the sensation in general terms.

What this means for the long-term character of the sport remains genuinely contested within the paddock.`,
    date: "2026-05-30",
    readingTime: 7,
    tags: ["MotoGP", "Electronics", "Technology", "Racing"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  },

  // TECHNOLOGY
  {
    slug: "local-ai-models-privacy-revolution",
    category: "Technology",
    title: "Local AI Models Are Quietly Sparking a Privacy Revolution",
    excerpt: "As capable models shrink to run on consumer hardware, a growing number of users are choosing to keep their data entirely off cloud servers. The implications are profound.",
    body: `Something significant has been happening in basements, home offices, and developer laptops for the past two years: artificial intelligence has arrived locally. Models that once required data centre-scale computing to run now operate on consumer graphics cards, and in some cases entirely on CPU. The implications for privacy, data sovereignty, and the business models of major AI companies are beginning to materialise.

The shift has been enabled by a combination of model compression techniques — quantisation, pruning, and distillation — that dramatically reduce the computational footprint of capable models without proportionally degrading their usefulness. A model that performs most everyday language tasks acceptably can now run on hardware that costs a few hundred pounds and fits in a backpack.

For privacy-conscious users, the appeal is straightforward. Queries to a local model do not leave the device. There is no logging, no data used for training, no terms of service to accept, and no company with the ability to access what you asked. Lawyers, doctors, journalists, and anyone else with confidentiality obligations have particular reason to be interested.

The adoption curve is still steep. Local models require technical comfort to set up, and even the best available consumer-grade options trail frontier cloud models on complex reasoning tasks. But the trajectory is clear, and several open-source projects have made the setup process substantially more accessible over the past year.

Major AI companies have been watching this trend carefully and responding in different ways. Some have leaned into privacy as a differentiator for their own products, offering on-device processing for specific use cases. Others have lobbied, with mixed results, for regulatory frameworks that might advantage cloud-based approaches.

The most significant question for the medium term is not whether local models will become capable enough to replace cloud AI for most everyday tasks — that seems increasingly inevitable — but whether the open-source ecosystem that has driven the local model revolution can sustain the development pace required to match frontier research.`,
    date: "2026-08-20",
    readingTime: 8,
    tags: ["AI", "Privacy", "Local Models", "Open Source"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
    featured: true,
  },
  {
    slug: "spatial-computing-beyond-hype",
    category: "Technology",
    title: "Spatial Computing Beyond the Hype: Where We Actually Are",
    excerpt: "Headsets are getting lighter, software is getting better, and enterprise adoption is quietly growing. But the consumer breakthrough remains elusive.",
    body: `Spatial computing has been perpetually three years away from mainstream adoption for the better part of a decade. The headsets announced with enormous fanfare at developer conferences have become, in several cases, discontinued products. Yet beneath the hype cycle, something genuinely interesting is happening: the technology is getting meaningfully better, specific enterprise applications are proving their value, and the hardware is beginning to approach a form factor that does not require explaining to people why you are wearing it.

The current generation of mixed reality devices from the major manufacturers represents a genuine step change from their predecessors in weight, field of view, and display quality. The best available optics now produce visuals that do not immediately signal "you are looking at a screen," which has been a fundamental barrier to immersion since the first commercial headsets shipped.

Enterprise adoption has led consumer interest throughout this cycle. Surgical planning, industrial maintenance, architectural visualisation, and training simulation have proven to be legitimate use cases with measurable ROI, driving a steady if unglamorous business in headset sales that continues regardless of consumer market performance. Several major hospitals have integrated spatial computing into pre-operative workflows, and the data on outcomes is being watched carefully.

The consumer story is more complicated. Gaming applications have been the primary driver of consumer interest, but the installed base remains too small to attract the quality of third-party game development that typically drives platform growth. The content-hardware feedback loop that characterised the success of previous gaming platforms has not materialised.

What might change that? The answer varies depending on who you ask in the industry. Some point to form factor — the killer consumer device will be something approaching normal glasses. Others argue it is content — one defining application that makes the headset indispensable. A third school of thought suggests the consumer breakthrough will not come from dedicated headsets at all, but from spatial features integrated into devices people already own.`,
    date: "2026-07-03",
    readingTime: 6,
    tags: ["Spatial Computing", "AR", "VR", "Hardware"],
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=1200&q=80",
  },
  {
    slug: "open-source-operating-systems-moment",
    category: "Technology",
    title: "Linux Is Having Its Moment — and It Might Actually Stick This Time",
    excerpt: "Gaming support, better hardware compatibility, and Microsoft's own decisions are driving real growth in Linux desktop adoption. The numbers are finally moving.",
    body: `For as long as most people can remember, Linux advocates have been predicting that this year would finally be the year of the Linux desktop. The prediction has been wrong enough times to become a running joke. But something different is happening now, and this time the evidence is not merely anecdotal.

Steam's own hardware survey data has shown Linux desktop share crossing two percent for the first time — a number that sounds small until you appreciate how dramatically gaming compatibility has changed. The combination of Valve's Proton compatibility layer and significant investment in graphics driver quality means the vast majority of Steam's game catalogue now runs on Linux, often without any additional configuration. For many users who gamed on Windows primarily, that was the last barrier.

Microsoft's own product decisions have helped. The continued rollout of mandatory online account requirements, persistent advertising in system interfaces, and an upgrade path that has left older hardware officially unsupported have prompted a meaningful number of users to evaluate alternatives seriously for the first time.

The hardware compatibility situation, historically the most significant practical barrier to Linux adoption, has improved substantially. Major laptop manufacturers now ship Linux-certified devices, and driver quality for recent-generation hardware has reached a point where a new user is unlikely to encounter the Wi-Fi and suspend issues that characterised Linux computing even five years ago.

What remains genuinely difficult is the long tail of Windows-specific software. Creative professionals dependent on the Adobe suite, business users on Microsoft Office's full feature set (browser-based Office is fine for many, insufficient for power users), and anyone whose employer mandates specific Windows applications face real friction that no amount of compatibility layer progress fully resolves.

Whether this cohort of new Linux users stays will depend largely on the ecosystem continuing to meet them. Early data from distributions targeting new users suggests retention is higher than previous adoption waves, partly because those users arrived for rational reasons rather than ideology.`,
    date: "2026-06-07",
    readingTime: 6,
    tags: ["Linux", "Open Source", "Desktop", "Gaming"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80",
  },

  // GAMING
  {
    slug: "baldurs-gate-3-one-year-later",
    category: "Gaming",
    title: "What Baldur's Gate 3 Actually Changed About RPG Design",
    excerpt: "A year after its release, it is becoming clear that the game has shifted player expectations in ways developers are now scrambling to meet.",
    body: `When Baldur's Gate 3 launched in full in August 2023, reviews ranged from enthusiastic to superlative. The consensus was that Larian Studios had made an exceptional role-playing game. What was less clear in those first weeks of coverage was the extent to which the game would recalibrate what players expected from the genre — and how significant the downstream effects on the broader industry would be.

Those effects are now visible. Studio heads and lead designers at multiple major RPG developers have either confirmed publicly or acknowledged privately that their production targets shifted after seeing what Larian had delivered. The volume and quality of voiced dialogue, the depth of reactivity to player choices, the density of hand-crafted scenarios — these were not impossible standards, but they were significantly higher than industry averages, and players noticed.

The comparison pressure this creates is uncomfortable for studios operating at conventional budgets. Baldur's Gate 3 was an unusual project: a sequel to a beloved franchise, built by a studio with demonstrated technical expertise, with the creative freedom afforded by early access revenue and a publisher willing to commit genuinely substantial resources over a multi-year development. Replicating those conditions is not straightforward.

What studios can learn, and appear to be learning, is more specific. The game's approach to letting players feel consequential — responding to choices at a granular level, allowing plans to genuinely succeed or fail on their merits, presenting moral complexity without obvious correct answers — is a design philosophy rather than a budget line item. Several projects in development appear to be taking those lessons seriously, prioritising reactivity and authorial coherence over sheer content volume.

Whether the games that emerge from this influence deliver on their ambitions remains to be seen. The development cycles of the most ambitious projects in pre-production now are long enough that the direct evidence will not arrive for years.`,
    date: "2026-08-10",
    readingTime: 5,
    tags: ["Baldur's Gate 3", "RPG", "Game Design", "Industry"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
  },
  {
    slug: "game-preservation-crisis",
    category: "Gaming",
    title: "Gaming's Preservation Crisis Is Getting Worse. Here's Why It Matters.",
    excerpt: "Hundreds of commercially released games are already legally inaccessible. As live service titles age and storefronts shutter, the problem is accelerating.",
    body: `A report published by the Video Game History Foundation in 2023 found that 87 percent of classic video games were out of print and effectively inaccessible through legal means. The situation has not improved since, and in important respects it has gotten worse as a new category of preservation failure has emerged: the live service title.

Games built around ongoing online services — persistent multiplayer worlds, seasonal content drops, social features dependent on active servers — present a preservation challenge that static, single-player titles do not. When the servers go offline, the game as it existed goes with them. Players cannot revisit it. Researchers cannot study it. The cultural artefact is simply gone.

This is not a hypothetical problem. Dozens of significant live service titles have been shut down in recent years, some with less than a month's notice. Particularly egregious cases have involved games that charged players substantial sums for content that became inaccessible within a year of purchase. Legal frameworks designed for physical goods have proven poorly equipped to address the specific consumer and cultural harms this creates.

The legal situation around preservation is itself a barrier. The Digital Millennium Copyright Act's anti-circumvention provisions technically prohibit the creation of the server emulators that would allow games to remain playable after official shutdown, even for non-commercial preservation purposes. Exemptions are granted periodically by the Copyright Office, but the scope is narrow and the process is slow relative to the pace of the industry.

Several countries are beginning to grapple with these questions through the lens of cultural heritage. The European Union has explored extending existing frameworks for film and music preservation to interactive media, and at least one major European national archive has begun accepting commercial game submissions on a systematic basis.

The games industry's own record on preservation is inconsistent. A handful of publishers have made genuine efforts — maintaining classic titles, releasing source code for old games, supporting preservation organisations. Many more have not engaged with the issue at all.`,
    date: "2026-07-22",
    readingTime: 7,
    tags: ["Preservation", "History", "Industry", "Digital Rights"],
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&q=80",
  },
  {
    slug: "indie-games-distribution-problem",
    category: "Gaming",
    title: "Indie Games Have a Distribution Problem — and It Is Getting Worse",
    excerpt: "Steam now lists more than 60,000 games. For most independent developers, discoverability is not a challenge. It is an existential crisis.",
    body: `The golden age narrative around independent game development has always sat uncomfortably alongside a less flattering reality: the vast majority of indie games released commercially earn almost nothing. The democratisation of development tools that made the indie boom possible also removed the barriers that once provided a natural filter, flooding distribution platforms with more titles than any reasonable number of players can discover, play, and review.

Steam's catalogue now exceeds 60,000 games, growing by tens of thousands per year. Even a game of genuine quality faces the near-impossibility of cutting through to an audience without either substantial marketing resources, a pre-existing community, or significant algorithmic favour from the platform itself — which typically requires early sales momentum to generate, creating a feedback loop that disadvantages new releases.

The consequences are measurable. Post-mortems from developers who have been candid about their commercial results consistently show median revenue figures that, when divided across development time, produce hourly rates well below minimum wage. For many developers, this is acceptable if the game is a passion project completed alongside other employment. For those who attempted to make game development their livelihood, the results have often been devastating.

Several potential responses to the discoverability problem have been explored. Platform-level curation is the obvious lever, but Steam's operator has historically been reluctant to intervene in ways that favour some games over others beyond the algorithmic level. Third-party curation through press, influencers, and community-driven recommendation has become more important as a result — but access to these amplification channels correlates strongly with developer marketing resources, recreating the advantage structures that curation was supposed to address.

The alternative distribution model that has attracted the most serious attention is subscription. Xbox Game Pass and similar services on console and PC have demonstrated that players will pay for curated access, and a smaller but well-curated indie subscription service could theoretically provide a different discovery mechanism. Whether it provides sustainable economics for developers is a more complicated question.`,
    date: "2026-06-01",
    readingTime: 6,
    tags: ["Indie Games", "Steam", "Distribution", "Industry"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80",
  },

  // OPINION
  {
    slug: "slow-internet-was-better",
    category: "Opinion",
    title: "The Slow Internet Was Better in Ways We Did Not Appreciate at the Time",
    excerpt: "Dial-up forced patience and scarcity that, in retrospect, cultivated something we have since lost. It is not nostalgia — it is a genuine observation about attention.",
    body: `This is not nostalgia. I am not arguing that we should go back to thirty-kilobit connections and waiting three minutes for an image to load. But I do think there is something worth examining in what the friction of early internet access produced in the people who used it, and what the removal of that friction has cost us.

Loading times created pause. A forum thread did not refresh in real time. An article took a moment to appear. These delays, which felt purely like technical deficits at the time, functioned as natural attention checkpoints. You decided to read something before you read it, because the decision had a small but perceptible cost. Impulsive, reactive engagement was less rewarding when each click was followed by a wait.

Scarcity of good content shaped how you sought it. Search was worse. Recommendation algorithms did not exist. You found interesting websites through other interesting websites, through word of mouth, through Usenet groups and early forums and email lists. The serendipity was genuine, and so was the community that formed around shared discovery. A good website in 2001 had readers who had actively sought it out.

Social media did not yet exist, which meant the absence of performance anxiety. You read things privately, without the immediate option to share your reaction. Formation of opinion happened before expression of opinion. The arrangement sounds reversed now — we are accustomed to reacting in real time as a form of engaging with content — but the older sequence had something to recommend it.

I am not certain what to do with any of this. The slow internet is gone and will not return, and most of what it provided has been replaced by things that are objectively better. But the attention habits it cultivated — patience, deliberateness, genuine seeking — seem worth trying to recover in some form, however artificial the means.`,
    date: "2026-08-05",
    readingTime: 5,
    tags: ["Internet", "Attention", "Technology", "Culture"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    featured: true,
  },
  {
    slug: "subscription-fatigue-is-real",
    category: "Opinion",
    title: "Subscription Fatigue Is Real — and the Industry Has No One to Blame But Itself",
    excerpt: "We went from paying once for things to paying forever for them. The consumer revolt has been slower than warranted, but the signs are finally there.",
    body: `I have been thinking about the twelve subscriptions I am currently paying for. Some are clearly worth it: music streaming at roughly ten pounds a month for unlimited access to recorded music represents an extraordinary value proposition compared to anything that existed before it. Others are less defensible on their merits: a software application I use occasionally, which used to cost thirty pounds outright, now costs twenty-five pounds a month.

The shift from ownership to subscription in software began with defensible reasoning. Perpetual licences created version fragmentation, made security updates difficult to deliver, and produced boom-bust revenue cycles that made long-term product investment unpredictable. These were real problems, and subscription software genuinely solved some of them.

What happened next was predictable in retrospect. Having established that consumers would accept subscription pricing for productivity software, the model expanded until it reached areas where the economics are more difficult to justify. Subscriptions for video games are the clearest example: unlike music or films, the value of the library depends almost entirely on whether the specific games you want are included at the specific time you want to play them.

The price increases are the other part of this story. Streaming services launched at prices that reflected the cost of content acquisition in a market with limited competition. That market no longer exists. The subscriber who joined a streaming service in 2016 for eight pounds a month is now paying three times that for a service that has simultaneously become more restrictive about account sharing.

The slow-building consumer reaction is visible in the churn data that major services have begun reporting more carefully. Subscribers are treating subscriptions more like they treat gym memberships — useful in theory, cancellable in practice — and the tolerance for price increases appears to be genuinely limited.`,
    date: "2026-07-15",
    readingTime: 5,
    tags: ["Subscriptions", "Software", "Consumer", "Business Models"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80",
  },
  {
    slug: "media-trust-collapse",
    category: "Opinion",
    title: "The Collapse of Media Trust Is a Harder Problem Than Anyone Wants to Admit",
    excerpt: "Trust in news organisations has been declining for decades. The fixes people propose rarely account for why it started falling in the first place.",
    body: `Trust in news organisations across the developed world has been declining for roughly fifty years. The decline accelerated with the internet but predates it, and the causes are more varied and more interesting than most commentary acknowledges.

The dominant narrative on the political right holds that mainstream journalism is ideologically biased and that trust has fallen because audiences have recognised this. The dominant narrative among journalism institutions holds that trust has fallen because information ecosystems have become too fragmented and social media has rewarded emotional engagement over accuracy. Both explanations contain truth. Neither is sufficient.

What gets less attention is the structural change in how journalism is funded and organised. The collapse of local newspaper revenue — driven by classified advertising moving online rather than by any conspiracy or ideology — removed the institutional foundation that produced a great deal of solid, unglamorous accountability reporting. What replaced it was national and digital journalism that is better at breaking news and worse at sustained institutional investigation. These are not equivalent things.

The relationship between journalism and its subjects has also changed. The adversarial press model that characterised mid-twentieth century American journalism rested on a specific social contract: journalists were trusted by audiences to hold institutions accountable because they were clearly independent from those institutions. That independence, real and perceived, has eroded in ways that are not primarily about ideology. Elite journalism and elite other things have become more socially homogenous over time, which matters even if the journalism itself remains rigorous.

What would restore trust? Probably not what most people think. Demonstrating accuracy more visibly helps at the margins. Transparency about processes and corrections matters. But the deeper issue is that trust is a relationship, and relationships are rebuilt through time and demonstrated reliability rather than through communication strategies.`,
    date: "2026-06-25",
    readingTime: 7,
    tags: ["Media", "Trust", "Journalism", "Culture"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
  },
];

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getRecentArticles(count: number = 5): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export const categories = ["News", "Motorsport", "Technology", "Gaming", "Opinion"];

export const categoryDescriptions: Record<string, string> = {
  News: "Essential reporting on the events and forces shaping our world — from geopolitics and economics to climate and public policy.",
  Motorsport: "In-depth coverage of Formula One, MotoGP, endurance racing, and the engineering that drives them forward.",
  Technology: "Critical and curious analysis of the technology industry, digital culture, and the platforms that define modern life.",
  Gaming: "Thoughtful writing about games, the industry that makes them, and what they reveal about the people who play them.",
  Opinion: "Essays and arguments on culture, technology, media, and life in the twenty-first century.",
};
