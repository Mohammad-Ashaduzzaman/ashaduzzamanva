export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  role: string;
  services: string[];
  category: 'social' | 'marketing-ops' | 'research-data' | 'product-ops';
  outcomeHeadline: string;
  summary: string;
  context: string;
  challenge: string;
  responsibilities: string[];
  approach: string[];
  systemProcess: {
    step: string;
    description: string;
  }[];
  deliverables: string[];
  outcome: string;
  whatItDemonstrates: string[];
  confidentiality: 'public' | 'limited' | 'confidential';
  interactiveType?: 'growth-chart' | 'tone-matrix' | 'content-pillars' | 'data-pipeline' | 'saas-flows';
}

export interface Credential {
  name: string;
  issuer: string;
  category: 'Communication' | 'Project Management' | 'Data & Analytics' | 'Marketing' | 'Product & UX' | 'Business Support';
  featured: boolean;
  year?: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  projectType: string;
  verifiedUpwork: boolean;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Mohammad Ashaduzzaman",
    eyebrow: "10+ YEARS · COMMUNICATION · RESEARCH · OPERATIONS",
    title: "Communication & Marketing Operations Specialist",
    secondaryTitle: "Research · Data · Content · Project Management · AI-Assisted Operations",
    alternativeTitle: "Founder’s Right-Hand for Communication, Research & Marketing Operations",
    location: "Global Remote",
    availability: "Available for select long-term remote partnerships",
    email: "plan.ashad@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/mohammad-ashaduzzaman/",
    whatsappUrl: "https://wa.me/8801748118745",
    whatsappNumber: "+880 1748 118745",
    upworkUrl: "https://www.upwork.com",
    githubUrl: "https://github.com/mohammad-ashaduzzaman/gis-power-portfolio",
    portfolioRefUrl: "https://mohammad-ashaduzzaman.github.io/gis-power-portfolio/",
    targetEngagement: "$3,000/month (Strategic Retainer)",
    portraitUrl: "/assets/ashad-portrait-v6.png",
    bioStatement: "For more than a decade, I’ve helped clients research ideas, communicate clearly, manage digital content, organize projects, analyze information, and turn moving pieces into work that actually gets finished.",
    centralMessage: "Mohammad turns complex work into clear communication, organized systems, useful insights, and consistent execution.",
  },

  upworkStats: {
    yearsExperience: "10+ Years",
    totalEarned: "$50K+",
    completedJobs: "115+",
    hoursLogged: "4,241+",
    jobSuccessScore: "100%",
    statusBadge: "Top Rated",
    avgRating: "5.0 / 5.0",
  },

  capabilities: [
    {
      id: "communication-content",
      letter: "A",
      title: "Communication & Content",
      headline: "Turning complex ideas into communication people can quickly understand and act on.",
      description: "Crafting clear, persuasive, and brand-aligned messaging across external channels, internal documentation, and executive correspondence.",
      items: [
        "Communication strategy & editorial direction",
        "Brand voice development & tone guidelines",
        "Executive LinkedIn commentary & leadership narratives",
        "High-conversion copywriting & campaign messaging",
        "Topical briefing & content research",
        "Stakeholder-ready documentation & executive memos",
      ],
      deliverables: ["Editorial calendars", "Voice manuals", "LinkedIn articles", "Executive briefs"],
    },
    {
      id: "marketing-operations",
      letter: "B",
      title: "Social Media & Marketing Operations",
      headline: "Building the system behind consistent content—not simply creating isolated posts.",
      description: "Managing multi-channel social engines, establishing repeatable production pipelines, and coordinating creative assets from concept to scheduled delivery.",
      items: [
        "LinkedIn, Instagram, & Facebook content engines",
        "Content pillar architectures & sprint planning",
        "Community engagement & peer conversation management",
        "Short-form video packaging (Reels / Shorts)",
        "Carousels & static creative coordination",
        "Repurposing long-form assets into modular media",
        "Marketing performance analysis & monthly reporting",
      ],
      deliverables: ["Multi-platform queues", "Repurposing roadmaps", "Engagement logs", "Monthly analytics reports"],
    },
    {
      id: "research-insight",
      letter: "C",
      title: "Research & Insight",
      headline: "Finding the signal inside large amounts of information.",
      description: "Synthesizing market trends, competitor positioning, and deep desk research into crisp, decision-ready briefings that executives can act on immediately.",
      items: [
        "Structured desk & internet research",
        "Competitor & landscape benchmarking",
        "Industry trend synthesis & market scans",
        "Survey data collection & qualitative coding",
        "Decision-ready executive summaries & evidence tables",
      ],
      deliverables: ["Competitor dossiers", "Executive briefing papers", "Market intelligence decks", "Synthesized evidence tables"],
    },
    {
      id: "data-analysis",
      letter: "D",
      title: "Data Analysis & Visualization",
      headline: "Data should answer a business question—not merely produce another chart.",
      description: "Transforming raw spreadsheets and marketing analytics into intuitive visual narratives that highlight actionable opportunities and operational bottlenecks.",
      items: [
        "Spreadsheet data cleaning & standardization",
        "Exploratory data analysis & pattern identification",
        "Dashboard architecture & KPI tracking",
        "Marketing analytics & channel attribution",
        "Translating metrics into concrete operational actions",
        "Clean chart design for executive presentations",
      ],
      deliverables: ["Executive KPI summaries", "Cleaned datasets", "Analytical dashboards", "Trend visualization decks"],
    },
    {
      id: "project-operations",
      letter: "E",
      title: "Project & Content Operations",
      headline: "Keeping ideas, people, files, deadlines, and deliverables moving in the same direction.",
      description: "Translating ambiguous strategic goals into structured tasks, standard operating procedures, timeline tracking, and accountable cross-functional delivery.",
      items: [
        "Project scoping & milestone breakdown",
        "Content production workflows & SOP documentation",
        "Cross-functional task coordination & follow-ups",
        "Deliverable tracking & quality assurance (QA)",
        "Digital asset management & taxonomy",
        "Status reporting & proactive blocker resolution",
        "Workflow design & continuous process refinement",
      ],
      deliverables: ["Standard Operating Procedures (SOPs)", "Project tracker boards", "Weekly status updates", "QA checklists"],
    },
    {
      id: "creative-production",
      letter: "F",
      title: "Creative & Digital Production",
      headline: "Strategy and execution should live in the same room.",
      description: "Designing polished social graphics, presentation decks, video cutdowns, and UI wireframes that uphold rigorous aesthetic standards without handoff latency.",
      items: [
        "Figma layouts, wireframes, & rapid UI thinking",
        "Social media creative design (Canva & Adobe)",
        "Presentation & pitch deck design",
        "Short-form video editing & caption timing",
        "Visual storytelling & infographics",
      ],
      deliverables: ["Figma screen wireframes", "Social graphics packs", "Executive pitch decks", "Repurposed vertical videos"],
    },
  ],

  projects: [
    {
      id: "linkedin-growth-operations",
      client: "Irina / Executive Advisory",
      industry: "Executive Coaching & Advisory",
      duration: "Approx. 2 Years",
      role: "Social Media Strategy & Content Operations Lead",
      category: "social",
      outcomeHeadline: "From 1,500 to 17,000 followers through consistent long-term LinkedIn execution",
      title: "Long-Term LinkedIn Growth & Content Operations",
      summary: "Scaled executive presence from 1,500 to 17,000 followers over two years through structured editorial planning, high-retention copywriting, visual asset design, and disciplined daily community engagement.",
      services: ["Social Strategy", "Copywriting", "Creative Direction", "Community Management", "Content Operations"],
      context: "The client possessed elite domain expertise but was hindered by erratic posting schedules, generic thought-leadership formats, and lack of systematic audience nurturing. The profile stood at ~1,500 followers.",
      challenge: "Transforming high-level consulting insights into engaging, easily digestible LinkedIn content without diluting intellectual authority or burning out the founder with endless writing demands.",
      responsibilities: [
        "Designed weekly content calendar spanning 4 strategic pillars (Frameworks, Client Case Studies, contrarian perspectives, personal lessons)",
        "Drafted long-form text posts, punchy micro-carousels, and visual quote graphics",
        "Managed publishing cadence and scheduled distribution during peak executive engagement windows",
        "Executed daily outbound commenting on key industry peer profiles to spark high-value networking",
        "Tracked monthly performance data to double-down on highest resonating content formats",
      ],
      approach: [
        "01 Audience Diagnosis: Analyzed top-performing voices in executive coaching to identify content voids.",
        "02 Asynchronous Intake: Created a lightweight question-prompt system to extract raw insights from the client in 20 min/week.",
        "03 Polished Execution: Re-engineered raw voice notes into structured hooks, readable body copy, and clean visuals.",
        "04 Active Nurturing: Fostered genuine comment dialogues that turned passive lurkers into connected peers.",
      ],
      systemProcess: [
        { step: "Intake", description: "Weekly 15-min audio note recording on key client discussions." },
        { step: "Synthesis", description: "Extraction into 3-4 structured post drafts with tailored hooks." },
        { step: "Design", description: "Creation of clean, typographic carousels and brand quote assets." },
        { step: "Engagement", description: "Daily 30-min window for peer commenting and audience replies." },
        { step: "Review", description: "Bi-weekly review of engagement quality and topic traction." },
      ],
      deliverables: [
        "150+ Published high-authority LinkedIn posts",
        "Custom Figma carousel templates and graphic library",
        "Strategic commenting guidelines document",
        "Quarterly audience analytics & topic-affinity reports",
      ],
      outcome: "Expanded organic profile following from ~1,500 to ~17,000 engaged industry followers over a 2-year engagement, establishing the client as an undisputed category authority.",
      whatItDemonstrates: [
        "Long-term operational consistency",
        "Executive brand voice stewardship",
        "Sustainable content extraction workflows",
        "High-fidelity visual design for business platforms",
      ],
      confidentiality: "limited",
      interactiveType: "growth-chart",
    },
    {
      id: "nurturing-our-wellbeing",
      client: "Nurturing Our Wellbeing",
      industry: "Workplace Wellbeing & Mental Health",
      duration: "Ongoing Partnership",
      role: "Brand Voice Specialist & Thought Leadership Lead",
      category: "social",
      outcomeHeadline: "Creating a scalable brand-voice system for expert-led LinkedIn engagement",
      title: "Thought Leadership & Authentic Brand Voice System",
      summary: "Established an emotionally intelligent communication and comment strategy that engaged senior HR and mental health leaders without sounding robotic, sales-driven, or superficial.",
      services: ["Brand Voice Strategy", "LinkedIn Communication", "Comment Architecture", "Qualitative Engagement"],
      context: "Workplace wellbeing is an intensely sensitive topic. Generic marketing tactics or aggressive promotional comments alienate enterprise buyers and corporate leaders who value psychological safety.",
      challenge: "Participating in high-stakes professional wellbeing dialogues on LinkedIn while preserving the founder's nuanced, compassionate, and clinically grounded tone across dozens of discussions weekly.",
      responsibilities: [
        "Codified the founder's clinical perspective, values, and vocabulary into a clear Tone of Voice manual",
        "Conducted daily targeted listening on posts by Chief People Officers, HR Directors, and Wellbeing advocates",
        "Crafted value-adding, insightful comments that expanded on discussions rather than simply agreeing",
        "Maintained flawless emotional intelligence and respectful discourse on sensitive organizational topics",
        "Identified warm prospective partners through thoughtful, unforced comment threads",
      ],
      approach: [
        "01 Voice Calibration: Mapped prohibited phrases vs. approved brand voice markers (e.g., reflective over prescriptive).",
        "02 Relevance Filtering: Screened 50+ posts daily to filter down to the 5-8 most impactful conversations.",
        "03 Insight Injection: Formulated comments that introduced secondary questions, scientific citations, or grounded workplace empathy.",
        "04 Relationship Continuity: Followed up with ongoing contributors to build genuine digital rapport.",
      ],
      systemProcess: [
        { step: "Listen", description: "Daily curation of executive HR conversations on workplace burnout and culture." },
        { step: "Filter", description: "Evaluation against strict relevance and alignment criteria." },
        { step: "Draft", description: "Writing reflective, insightful perspectives avoiding clichés." },
        { step: "Engage", description: "Meaningful dialogue exchanges that invite collaborative responses." },
      ],
      deliverables: [
        "Comprehensive Brand Voice & Engagement Playbook",
        "Curated list of 100+ key corporate wellbeing voices",
        "Hundreds of high-impact conversation contributions",
        "Executive conversation summaries and connection pipeline",
      ],
      outcome: "Positioned Nurturing Our Wellbeing as a trusted, humane authority in workplace mental health, creating organic relationship bridges with global HR directors without cold outreach.",
      whatItDemonstrates: [
        "Nuanced emotional intelligence in B2B communication",
        "Strict adherence to client philosophy and ethics",
        "Zero-cliché conversational copywriting",
      ],
      confidentiality: "public",
      interactiveType: "tone-matrix",
    },
    {
      id: "veterans-moving-florida",
      client: "Veterans Moving Florida",
      industry: "Local Logistics & Moving Services",
      duration: "Multi-Year Retainer",
      role: "Social Media & Marketing Operations Manager",
      category: "marketing-ops",
      outcomeHeadline: "Building a repeatable content engine for a Florida service business",
      title: "Localized Social Content & Operations Engine",
      summary: "Engineered a reliable multi-pillar content system integrating customer social proof, practical packing guides, localized Florida relocation advice, and team culture across Reels, Carousels, and Meta channels.",
      services: ["Marketing Operations", "Localized Content Strategy", "Meta Asset Design", "Video Repurposing"],
      context: "Moving companies operate in a fiercely competitive, low-trust local market. Consumers fear damaged belongings, hidden fees, and unreliable crews. The business required constant proof of competence.",
      challenge: "Moving away from sporadic 'hire us' ads into a systematic, community-centric content machine that addressed real moving anxieties and celebrated veteran work ethic.",
      responsibilities: [
        "Architected 7 core content pillars (Social Proof, Behind the Scenes, Florida Moving Realities, Packing Education, Neighborhood Guides, Moving Problem Solving, Event Day Coverage)",
        "Produced localized Reels, educational swipe carousels, and customer celebration graphics",
        "Researched Florida-specific climate challenges (heat, humidity, hurricane prep, condo moving restrictions) for high-utility educational posts",
        "Scheduled and managed weekly publishing queues across Facebook, Instagram, and local community touchpoints",
        "Coordinated with moving crews to capture raw field photos and videos for authentic repurposing",
      ],
      approach: [
        "01 Pillar Blueprint: Built a weekly rotating cadence ensuring variety and steady trust accumulation.",
        "02 Local Utility: Focused heavily on Florida-specific moving hurdles that national competitors ignore.",
        "03 Crew Enablement: Provided simple photo checklists to moving foremen to gather authentic job-site proof.",
        "04 Multi-Asset Packaging: Transformed one successful move into a carousel review, a short clip, and a local community tip.",
      ],
      systemProcess: [
        { step: "Intake", description: "Weekly review of completed jobs and customer reviews." },
        { step: "Production", description: "Design of carousels, reels, and Florida neighborhood guides." },
        { step: "Localization", description: "Injecting regional relocation tips (Tampa, Orlando, Miami rules)." },
        { step: "Distribution", description: "Coordinated posting across Meta platforms during peak moving research hours." },
      ],
      deliverables: [
        "7-Pillar Content Engine Operating Framework",
        "100+ Custom branded social graphics and local moving guides",
        "Field asset collection SOP for on-site moving crews",
        "Centralized Meta business scheduling system",
      ],
      outcome: "Transformed social presence into a respected local relocation resource, dramatically bolstering brand familiarity and generating steady, trusted organic inquiries across Florida.",
      whatItDemonstrates: [
        "Operationalizing service-business content pipelines",
        "Localized consumer research & value creation",
        "Multi-asset design consistency",
      ],
      confidentiality: "public",
      interactiveType: "content-pillars",
    },
    {
      id: "vr-sikh-projects",
      client: "VR Sikh Projects & Cultural Heritage",
      industry: "Cultural Non-Profit & Digital History",
      duration: "18 Months",
      role: "Content Operations & Repurposing Specialist",
      category: "marketing-ops",
      outcomeHeadline: "Packaging cultural heritage into high-retention short-form digital communication",
      title: "Cultural Content Repurposing & Digital Communication",
      summary: "Adapted historical archival research and virtual reality heritage assets into platform-native YouTube Shorts, Instagram Reels, and social narratives with impeccable cultural sensitivity and factual accuracy.",
      services: ["Content Repurposing", "Short-Form Packaging", "Cultural Research", "Story Framing"],
      context: "The organization produced groundbreaking VR recreations of historic Sikh monuments and heritage sites, but long-form 360-degree assets were difficult for mobile social audiences to consume.",
      challenge: "Repurposing complex historical themes and virtual environments into accessible 30-to-60-second video formats without trivializing the sacred cultural context or compromising historical facts.",
      responsibilities: [
        "Reviewed archival footage, VR recordings, and academic texts to draft engaging narrative scripts",
        "Edited dynamic short-form videos with custom captions, historical overlays, and respectful audio beds",
        "Authored educational social copy providing rich historical context and source citations",
        "Maintained platform adaptation across YouTube Shorts, Instagram, and community discussion boards",
        "Ensured rigorous vetting of visual representations against historical and religious guidelines",
      ],
      approach: [
        "01 Contextual Research: Verified names, dates, and architectural facts against verified scholarly accounts.",
        "02 Narrative Pacing: Hooked viewers with architectural mysteries or untold historical moments in the first 3 seconds.",
        "03 Platform Packaging: Cropped VR captures into vertical ratios with dynamic focus tracking.",
        "04 Community Moderation: Monitored discussion sections with respectful educational answers.",
      ],
      systemProcess: [
        { step: "Archive Review", description: "Analyzing 3D/VR capture files and historical documentation." },
        { step: "Scripting", description: "Writing tightly timed 45-second educational scripts." },
        { step: "Editing", description: "Vertical video cutting, visual callouts, and subtitle pacing." },
        { step: "Publishing", description: "Targeted release aligned with historical commemorations." },
      ],
      deliverables: [
        "60+ Short-form educational video assets",
        "Historical contextual copy library and terminology lexicon",
        "Multi-channel distribution schedule",
      ],
      outcome: "Expanded global cultural appreciation to hundreds of thousands of next-generation viewers, bridging centuries of heritage with modern digital formats.",
      whatItDemonstrates: [
        "Deep cultural sensitivity and ethical communication",
        "Visual storytelling through video repurposing",
        "Translating complex scholarship into bite-sized engagement",
      ],
      confidentiality: "public",
    },
    {
      id: "multi-brand-tone-matrix",
      client: "Multi-Brand Portfolio (5 Distinct Client Brands)",
      industry: "Cross-Industry (Education, Wellbeing, Cultural, Executive)",
      duration: "Parallel Client Engagements",
      role: "Cross-Functional Communications Lead",
      category: "social",
      outcomeHeadline: "Preserving distinct brand voices across diverse industries without tonal bleed",
      title: "Multi-Brand Tone Calibration & Engagement Matrix",
      summary: "Simultaneously managed communication and engagement across 5 distinct organizations—ranging from child developmental brands to corporate wellbeing consultancies and cultural heritage initiatives.",
      services: ["Brand Voice Engineering", "Tone Calibration", "Stakeholder Communication", "Persona Management"],
      context: "Contracting across multiple organizations often results in 'tonal bleed'—where all brands end up sounding like the contractor. Mohammad demonstrated the discipline of keeping each voice pristine.",
      challenge: "Switching daily between an encouraging, playful tone for parents, a reflective clinical tone for corporate wellbeing, a reverent tone for cultural history, and a razor-sharp executive voice for founders.",
      responsibilities: [
        "Built separate Voice Charters for each brand: vocabulary limits, sentence structures, and emotional postures",
        "Inkspiration Kids: Encouraging, imaginative, educational, parent-supportive tone",
        "Nurturing Our Wellbeing: Reflective, clinically responsible, psychologically safe, executive HR focus",
        "VR Sikh Projects & 5 Sikh Seva: Reverent, community-centered, culturally accurate, service-oriented",
        "Jaskaran Singh / Executive Brand: Conversational, relationship-driven, pragmatic, founder-focused",
        "Zero cross-contamination of voice across hundreds of published weekly interactions",
      ],
      approach: [
        "01 Context Priming: Switching mental modes through clear brand-specific checklists prior to drafting.",
        "02 Vocabulary Safeguards: Strict lists of words each brand ALWAYS uses and NEVER uses.",
        "03 Persona Reviews: Regular stakeholder alignment reviews to fine-tune tonal drift.",
      ],
      systemProcess: [
        { step: "Calibrate", description: "Reviewing brand persona guidelines prior to entering each account." },
        { step: "Engage", description: "Writing native interactions within the specific brand boundary." },
        { step: "Verify", description: "Reviewing draft copy against prohibited vocabulary checklists." },
        { step: "Monitor", description: "Tracking sentiment and audience response metrics." },
      ],
      deliverables: [
        "5 Comprehensive Brand Voice Reference Sheets",
        "Custom persona engagement guidelines",
        "Thousands of tailored audience touchpoints",
      ],
      outcome: "Demonstrated that superior communication is not writing everything in one 'smart' voice, but mastering the exact voice of the person or institution speaking.",
      whatItDemonstrates: [
        "Chameleon-like linguistic agility",
        "Professional boundary management",
        "Cognitive context-switching without quality drop",
      ],
      confidentiality: "public",
      interactiveType: "tone-matrix",
    },
    {
      id: "saas-product-operations",
      client: "Connected Technology SaaS Platform (Anonymized)",
      industry: "Enterprise SaaS & Digital Operations",
      duration: "12 Months",
      role: "Product & Project Operations Partner",
      category: "product-ops",
      outcomeHeadline: "Organizing fragmented feature requirements into clear product systems",
      title: "Connected Technology SaaS Product & Project Operations",
      summary: "Partnered with technical founders to document user journeys, streamline admin and mobile screen flows, organize backlog requirements, and establish systematic QA review loops.",
      services: ["Product Operations", "Requirements Architecture", "User Journey Mapping", "QA Documentation"],
      context: "A fast-moving SaaS team had brilliant engineering and ambitious vision, but scattered documentation, unclear sprint handoffs, and undefined edge cases were causing developer bottlenecks.",
      challenge: "Translating sprawling founder ideas and customer feature requests into organized, developer-ready user flows, screen architectures, and actionable QA feedback cycles.",
      responsibilities: [
        "Mapped end-to-end user journeys across mobile interfaces and enterprise desktop admin dashboards",
        "Documented detailed functional requirements, screen states, and edge-case exceptions in centralized hubs",
        "Conducted structured UX reviews in Figma to identify workflow friction points before coding",
        "Created systematic QA testing sheets and coordinated feedback loops between design and engineering",
        "Organized project deliverables, sprint priorities, and release notes for executive stakeholders",
      ],
      approach: [
        "01 Architecture Clarity: Converted abstract brainstorms into visual flowcharts with clear branching logic.",
        "02 Spec Rigor: Wrote unambiguous acceptance criteria for each user-facing screen.",
        "03 Friction Audits: Reviewed visual mockups from a real end-user perspective to eliminate redundant steps.",
        "04 Verification Loops: Tested staging builds against acceptance criteria to catch bugs before release.",
      ],
      systemProcess: [
        { step: "Discovery", description: "Founder intake on business logic and desired user outcomes." },
        { step: "Journey Mapping", description: "Diagramming screens, state transitions, and permission tiers." },
        { step: "Specification", description: "Writing acceptance criteria and edge case parameters." },
        { step: "QA Review", description: "Testing implemented features against original specifications." },
      ],
      deliverables: [
        "Full-system User Journey Architecture map",
        "Comprehensive Feature Requirements documentation",
        "Standardized Bug & QA Feedback repository",
        "Executive product progress briefings",
      ],
      outcome: "Significantly reduced developer rework, accelerated feature release cadence, and gave leadership total transparency into product readiness without micromanagement.",
      whatItDemonstrates: [
        "Operating inside complex digital products",
        "Structuring ambiguity into precise specifications",
        "Cross-functional coordination between tech and leadership",
      ],
      confidentiality: "confidential",
    },
    {
      id: "research-data-case-study",
      client: "Strategic Market & Policy Analysis (Synthesized)",
      industry: "Market Intelligence & Operations Research",
      duration: "Completed Project",
      role: "Lead Research & Data Operations Partner",
      category: "research-data",
      outcomeHeadline: "From raw information to decision-ready insight in under five minutes",
      title: "From Raw Information to Decision-Ready Insight",
      summary: "Conducted exhaustive desk research, standardized disparate multi-source survey datasets, and synthesized complex trends into an executive brief with intuitive chart narratives.",
      services: ["Desk Research", "Data Cleaning", "Trend Analysis", "Executive Briefing"],
      context: "A leadership team was evaluating strategic expansion into a new sector but was paralyzed by conflicting industry reports, messy survey exports, and contradictory market signals.",
      challenge: "Filtering signal from noise: standardizing unstructured data tables, identifying core statistical correlations, and articulating a crisp business recommendation for non-technical executives.",
      responsibilities: [
        "Formulated the core investigation question and outlined required evidence categories",
        "Gathered and aggregated data across 12+ public and proprietary research publications",
        "Cleaned, normalized, and validated raw survey datasets in Excel and Google Sheets",
        "Identified 3 pivotal trend inflection points often overlooked in surface summaries",
        "Engineered executive-ready visual charts highlighting adoption curves and cost implications",
        "Authored a concise 2-page decision brief structured around strategic recommendations",
      ],
      approach: [
        "01 Question Formulation: Defined the exact decisions leadership needed to make.",
        "02 Evidence Triage: Screened sources for methodological integrity and recency.",
        "03 Data Normalization: Removed outliers, standardized categorization schema, and mapped metrics.",
        "04 Narrative Translation: Translated statistical findings into clear operational tradeoffs.",
      ],
      systemProcess: [
        { step: "Question", description: "What is the true cost-benefit curve of shifting operational workflows?" },
        { step: "Sources", description: "Multi-source aggregation of market reports, surveys, and benchmarks." },
        { step: "Method", description: "Cleaning, standardization, and exploratory correlation analysis." },
        { step: "Synthesis", description: "Transforming 200+ data rows into 3 pivotal executive takeaways." },
      ],
      deliverables: [
        "Normalized Master Spreadsheet with documented formulas",
        "Executive Decision Brief (Question → Evidence → Recommendation)",
        "Presentation-ready data charts and summary slides",
      ],
      outcome: "Enabled executive leadership to reach a unanimous capital allocation decision in a single 45-minute meeting, supported by verified empirical evidence.",
      whatItDemonstrates: [
        "Rigorous research methodology",
        "Translating spreadsheets into human decisions",
        "Executive-grade visual and written synthesis",
      ],
      confidentiality: "limited",
      interactiveType: "data-pipeline",
    },
  ] as Project[],

  howIWork: [
    {
      step: "01",
      name: "Understand",
      tagline: "Context Before Tasks",
      description: "Every engagement begins with uncovering why the work exists. I examine the business objective, audience expectations, operational constraints, and what concrete success looks like.",
      deliverables: ["Project scope document", "Success metrics alignment", "Context & constraints charter"],
      peaceOfMind: "You never have to explain the same business reality twice."
    },
    {
      step: "02",
      name: "Research",
      tagline: "Signal Over Noise",
      description: "Gathering ground truth through desk research, competitor scans, audience listening, and raw dataset analysis. I build an evidence base before recommending an operational move.",
      deliverables: ["Competitor & market scan", "Curated source repository", "Key assumptions validation"],
      peaceOfMind: "Decisions are backed by evidence, not guesswork or generic templates."
    },
    {
      step: "03",
      name: "Structure",
      tagline: "Systems Beat Heroics",
      description: "Converting ambiguity into clear priorities, repeatable systems, editorial calendars, SOPs, and actionable project tasks. Moving from scattered ideas to an organized roadmap.",
      deliverables: ["Operational workflow map", "Content pillars / editorial calendar", "Standard operating procedures"],
      peaceOfMind: "Work runs smoothly without constant firefighting or last-minute panics."
    },
    {
      step: "04",
      name: "Execute",
      tagline: "Consistent Craft",
      description: "Writing clear copy, designing polished visual assets, scheduling distribution, coordinating stakeholders, tracking deliverables, and proactively removing blockers.",
      deliverables: ["Final creative & copy assets", "Scheduled publishing queues", "Coordinated task deliverables"],
      peaceOfMind: "High-standard execution happens reliably on schedule."
    },
    {
      step: "05",
      name: "Improve",
      tagline: "Compounding Refinement",
      description: "Reviewing performance analytics, audience responses, and workflow bottlenecks to iterate. Every cycle becomes faster, clearer, and more aligned with long-term goals.",
      deliverables: ["Monthly performance reviews", "Workflow optimization notes", "Iterated next-cycle plan"],
      peaceOfMind: "Your operational systems compound in value month over month."
    },
  ],

  founderSupport: {
    headline: "When you need more than another pair of hands.",
    subhead: "I work best with founders and senior leaders who have plenty happening at once—content, research, campaigns, projects, documentation, and decisions—and need someone capable of understanding the context behind the tasks.",
    pillars: [
      {
        title: "Reduce Noise",
        description: "Research, organize, and synthesize scattered information. Sift through data, competitor moves, and customer feedback so you only review high-leverage insights.",
        points: ["Desk & market research dossiers", "Data cleaning & executive summaries", "Inbox & workflow triage"]
      },
      {
        title: "Keep Work Moving",
        description: "Coordinate projects, content, and deliverables across teams. Maintain schedules, enforce quality control, and keep deadlines from slipping.",
        points: ["Multi-channel content engines", "Cross-functional task follow-ups", "SOP creation & documentation"]
      },
      {
        title: "Make Communication Clear",
        description: "Turn rough ideas and fragmented information into polished internal or external communication that stakeholders, clients, and audiences respect.",
        points: ["Executive LinkedIn presence", "Pitch deck & report polish", "Brand voice stewardship"]
      }
    ]
  },

  principles: [
    {
      title: "Context Before Tasks",
      description: "Understanding why the work exists prevents wasted effort and produces outcomes that actually solve the underlying problem."
    },
    {
      title: "Clarity Over Complexity",
      description: "If an executive or audience cannot understand an insight in two minutes, the communication has failed, regardless of effort."
    },
    {
      title: "Systems Beat Heroics",
      description: "One-off bursts of effort cannot match the compounding power of clear SOPs, predictable cadences, and organized workflows."
    },
    {
      title: "Consistency Compounds",
      description: "Whether in LinkedIn thought-leadership, brand voice, or weekly project reporting, steady reliability builds undeniable trust."
    },
    {
      title: "Ownership Matters",
      description: "Problems should move toward resolution, not merely toward another status meeting or passive handoff."
    }
  ],

  education: [
    {
      degree: "B.Sc. in Urban & Rural Planning",
      institution: "Khulna University",
      advantage: "Systems Thinking: Trained in analyzing intricate, interconnected systems, spatial logistics, infrastructure planning, and long-term socio-economic frameworks."
    },
    {
      degree: "Master’s in Public Health (MPH)",
      institution: "Rajshahi University",
      advantage: "Research & Evidence Thinking: Instilled rigorous epidemiological research methodologies, qualitative and quantitative data analysis, and evidence-based decision-making."
    },
    {
      degree: "Master’s in Development Studies",
      institution: "Islamic University, Kushtia",
      advantage: "Social & Institutional Context: Deepened comprehension of international institutional frameworks, policy implementation, stakeholder management, and socio-economic dynamics."
    }
  ],

  certifications: [
    // Communication
    { name: "Communicating with Presence", issuer: "LinkedIn Learning", category: "Communication", featured: true },
    { name: "Corporate Communications", issuer: "Strategic Institute", category: "Communication", featured: true },
    { name: "Effective Communication: Writing, Design, and Presentation", issuer: "University of Colorado Boulder / Coursera", category: "Communication", featured: true },
    { name: "Program Management and the Art of Communication", issuer: "Coursera", category: "Communication", featured: true },
    { name: "Microsoft Public Relations and Communications Associate", issuer: "Microsoft", category: "Communication", featured: true },

    // Project & Program Management
    { name: "Google Project Management Professional", issuer: "Google", category: "Project Management", featured: true },
    { name: "Microsoft Project Management", issuer: "Microsoft", category: "Project Management", featured: true },
    { name: "Microsoft Program Management", issuer: "Microsoft", category: "Project Management", featured: true },
    { name: "IBM Program Manager", issuer: "IBM", category: "Project Management", featured: true },
    { name: "IBM IT Project Manager", issuer: "IBM", category: "Project Management", featured: true },
    { name: "IBM IT Scrum Master", issuer: "IBM", category: "Project Management", featured: true },
    { name: "Generative AI for Project Managers", issuer: "Project Management Institute / Coursera", category: "Project Management", featured: true },
    { name: "Managing Major Engineering Projects", issuer: "University of Leeds", category: "Project Management", featured: true },

    // Data & Analytics
    { name: "Google Data Analytics Professional", issuer: "Google", category: "Data & Analytics", featured: true },
    { name: "Google Advanced Data Analytics", issuer: "Google", category: "Data & Analytics", featured: true },
    { name: "IBM Data Analyst Professional", issuer: "IBM", category: "Data & Analytics", featured: true },
    { name: "Meta Data Analyst Professional", issuer: "Meta", category: "Data & Analytics", featured: true },
    { name: "Microsoft Excel Professional", issuer: "Microsoft", category: "Data & Analytics", featured: true },
    { name: "Survey Data Collection and Analytics", issuer: "University of Michigan / Coursera", category: "Data & Analytics", featured: true },
    { name: "Data Engineering Foundations", issuer: "IBM", category: "Data & Analytics", featured: false },
    { name: "Generative AI SQL Database Specialist with ChatGPT", issuer: "Coursera Project Network", category: "Data & Analytics", featured: false },

    // Marketing
    { name: "Meta Social Media Marketing Professional", issuer: "Meta", category: "Marketing", featured: true },
    { name: "Google Digital Marketing & E-commerce", issuer: "Google", category: "Marketing", featured: true },
    { name: "Meta Marketing Science Certification Prep", issuer: "Meta", category: "Marketing", featured: true },
    { name: "IBM Digital Marketing and Growth Hacking with GenAI", issuer: "IBM", category: "Marketing", featured: true },
    { name: "Unilever Digital Marketing Analyst", issuer: "Unilever", category: "Marketing", featured: true },
    { name: "Social Media Marketing in Practice", issuer: "Digital Marketing Institute", category: "Marketing", featured: false },
    { name: "E-Marketing Strategy", issuer: "International Business Institute", category: "Marketing", featured: false },
    { name: "Advanced Search Engine Optimization (SEO)", issuer: "Coursera", category: "Marketing", featured: false },

    // Product & UX & Creative
    { name: "IBM Product Manager", issuer: "IBM", category: "Product & UX", featured: true },
    { name: "IBM AI Product Manager", issuer: "IBM", category: "Product & UX", featured: true },
    { name: "Google UX Design Professional", issuer: "Google", category: "Product & UX", featured: true },
    { name: "Microsoft UX Design Professional", issuer: "Microsoft", category: "Product & UX", featured: true },
    { name: "IBM UI/UX Designer", issuer: "IBM", category: "Product & UX", featured: true },
    { name: "Figma, Sketch & Miro for UX Design", issuer: "CalArts / Coursera", category: "Product & UX", featured: false },
    { name: "Adobe Graphic Designer Professional", issuer: "Adobe", category: "Product & UX", featured: false },
    { name: "Visual Communication & Graphic Design", issuer: "CalArts", category: "Product & UX", featured: false },

    // Business Support & Systems
    { name: "IBM Business Analyst Professional", issuer: "IBM", category: "Business Support", featured: true },
    { name: "Intuit Academy Bookkeeping Professional", issuer: "Intuit", category: "Business Support", featured: true },
    { name: "Tally Bookkeeper Professional", issuer: "Tally Education", category: "Business Support", featured: false },
    { name: "Google Cloud Digital Leader", issuer: "Google Cloud", category: "Business Support", featured: true },
    { name: "Google IT Support Professional", issuer: "Google", category: "Business Support", featured: true },
    { name: "Microsoft IT Support Specialist", issuer: "Microsoft", category: "Business Support", featured: false },
    { name: "IBM IT Support Professional", issuer: "IBM", category: "Business Support", featured: false },
  ] as Credential[],

  tools: [
    {
      category: "Communication & Productivity",
      tools: ["Google Workspace", "Gmail", "Google Docs", "Google Sheets", "Google Slides", "Slack", "Loom"]
    },
    {
      category: "Content & Creative",
      tools: ["Figma", "Canva Pro", "Adobe Photoshop", "Adobe Illustrator", "CapCut / Descript", "Miro"]
    },
    {
      category: "Social Media Engines",
      tools: ["LinkedIn Campaign Manager", "Meta Business Suite", "Buffer", "Hootsuite", "Later", "YouTube Studio"]
    },
    {
      category: "Research & Data",
      tools: ["Advanced Excel", "Google Sheets (Complex Formulae)", "Exploratory Data Analysis", "Qualitative Coding Tools", "Google Analytics"]
    },
    {
      category: "AI & Modern Workflows",
      tools: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Perplexity Pro", "Midjourney", "Custom GPT Prompts", "AI Transcription"]
    },
    {
      category: "Project & Task Operations",
      tools: ["Notion", "Trello", "Asana", "ClickUp", "SOP Documentation", "Google Drive Archiving"]
    }
  ],

  testimonials: [
    {
      id: "t1",
      quote: "Mohammad is one of the most reliable and thorough professionals I’ve had the pleasure of working with. He took complete ownership of our content operations, brought structure to our weekly ideas, and never missed a beat.",
      clientName: "Irina P.",
      role: "Executive Advisor & Founder",
      company: "Executive Leadership Consultancy",
      projectType: "Long-Term LinkedIn Growth & Operations",
      verifiedUpwork: true
    },
    {
      id: "t2",
      quote: "What separates Mohammad from standard assistants is his ability to grasp the nuance of our domain. He understood our clinical tone immediately and engaged senior stakeholders with genuine insight and empathy.",
      clientName: "Sarah M.",
      role: "Founder & Director",
      company: "Nurturing Our Wellbeing",
      projectType: "Thought Leadership & Brand Voice System",
      verifiedUpwork: true
    },
    {
      id: "t3",
      quote: "Working with Mohammad gave us a repeatable marketing engine. He organized our content pillars, kept our crews aligned on gathering real job-site proof, and turned our social pages into an active trust generator.",
      clientName: "David K.",
      role: "Managing Director",
      company: "Veterans Moving Florida",
      projectType: "Social Media & Marketing Operations",
      verifiedUpwork: true
    },
    {
      id: "t4",
      quote: "Outstanding multidisciplinary competence. Whether summarizing messy survey data or coordinating product user flows, he delivers structured, polished work that allows me to focus on strategic leadership.",
      clientName: "Alex R.",
      role: "Tech Founder & CEO",
      company: "Connected Technology SaaS Platform",
      projectType: "Product & Operations Management",
      verifiedUpwork: true
    }
  ]
};
