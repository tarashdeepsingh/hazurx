// Single source of truth for all copy. Edit here, the site updates.

export const site = {
  name: "HAZURX",
  gurmukhi: "ਹਜ਼ੂਰ",
  tagline: "Inspired by roots. Built for the future.",
  // TODO: swap for hello@hazurx.com once the domain mail is live.
  email: "tarashdeep29@gmail.com",
  phone: "+91 82839 74329",
  location: "India",
  // TODO: add real profile URLs.
  linkedin: "https://www.linkedin.com/in/tarashdeep-singh",
  github: "https://github.com/hpsingh468",
};

export const meaning = {
  hazur: "Inspired by Hazur Sahib, symbolizing our roots, values, humility and purpose.",
  x: "Represents limitless possibilities, exploration and innovation.",
};

export const services = [
  {
    n: "01",
    title: "Custom Software Development",
    blurb:
      "Tools built around how you actually work.",
    items: [
      "Business management systems",
      "CRM & ERP solutions",
      "Admin panels & dashboards",
      "SaaS platforms",
      "Workflow automation",
    ],
  },
  {
    n: "02",
    title: "Web Development",
    blurb: "Sites and web apps that load fast and look right.",
    items: [
      "Corporate websites",
      "Landing pages",
      "E-commerce",
      "Custom web applications",
      "Portals & booking platforms",
    ],
  },
  {
    n: "03",
    title: "Mobile App Development",
    blurb: "Apps that keep working when the signal doesn't.",
    items: [
      "Android applications",
      "iOS applications",
      "Offline-first field apps",
      "API-integrated apps",
      "Maintenance & upgrades",
    ],
  },
  {
    n: "04",
    title: "Backend & API Engineering",
    blurb: "The part nobody sees, built so it doesn't fall over.",
    items: [
      "REST API development",
      "Backend architecture",
      "Database design",
      "Third-party integrations",
      "Queues, webhooks & event-driven systems",
    ],
  },
  {
    n: "05",
    title: "Cloud & DevOps Solutions",
    blurb: "Servers, deploys and backups, so it stays up.",
    items: [
      "Server setup & hardening",
      "Cloud deployment",
      "CI/CD pipelines",
      "Docker & containers",
      "Monitoring, backups & upkeep",
    ],
  },
  {
    n: "06",
    title: "Product Engineering & Consulting",
    blurb: "Not sure what to build yet? Let's work it out.",
    items: [
      "Requirement gathering",
      "Product planning",
      "UI/UX & solution design",
      "Technical architecture",
      "End-to-end delivery",
    ],
  },
];

export const process = [
  { n: "I", title: "Understand", text: "Find the real problem." },
  { n: "II", title: "Design", text: "Agree flows and interface." },
  { n: "III", title: "Build", text: "Working software every week." },
  { n: "IV", title: "Deploy", text: "Ship it, monitored and backed up." },
  { n: "V", title: "Support", text: "Stay on to improve it." },
];

export type Project = {
  id: string;
  name: string;
  kind: string;
  year?: string;
  summary: string;
  outcome: string;
  role: string;
  stack: string[];
  url?: string;
  shots: { src: string; alt: string; device?: "mobile" }[];
  points: string[];
};

export const projects: Project[] = [
  {
    id: "vetko",
    name: "Vetko Surveys",
    kind: "Marketing site · Admin platform · Android scanner app",
    summary: "Website, admin panel and an offline-first Android scanner app for a marine survey company.",
    outcome: "A website, an admin platform and an offline Android scanner app. Surveyors scan on the quayside; the office sees every vessel live.",
    role: "Design to deployment.",
    stack: ["Kotlin", "Laravel", "Next.js", "MySQL"],
    url: "https://vetkosurveys.com",
    shots: [
      { src: "/work/vetko-home.jpg", alt: "Vetko Surveys marketing website hero" },
      { src: "/work/admin-dashboard-v3.jpg", alt: "Vetko admin dashboard with scanning activity and discharge progress" },
      { src: "/work/admin-vessels-v2.jpg", alt: "Vetko admin vessels list" },
      { src: "/work/admin-tokens-v2.jpg", alt: "Vetko admin tokens list" },
      { src: "/work/vetko-home-mobile.jpg", alt: "Vetko Surveys website on mobile", device: "mobile" },
    ],
    points: [
      "Native Android app scans logs offline and prints token receipts over Bluetooth.",
      "Syncs to a live admin dashboard whenever the device reaches coverage.",
    ],
  },
  {
    id: "parakh",
    name: "PARAKH Rashtriya Sarvekshan Dashboard",
    kind: "Data dashboard · NCERT",
    summary: "National survey dashboard delivering insights for 2.3M+ students across 782 districts.",
    outcome: "Insights for 2.3M+ students across 782 districts, loading 70% faster.",
    role: "Frontend, caching and data retrieval.",
    stack: ["Next.js", "TypeScript", "Redis", "Highcharts"],
    url: "https://dashboard.parakh.ncert.gov.in/en",
    shots: [{ src: "/work/parakh.jpg", alt: "PARAKH Rashtriya Sarvekshan dashboard with national map and survey statistics" }],
    points: [
      "Cut load times by 70% with server-side rendering, Redis caching and optimised data retrieval.",
      "Interactive geospatial visualisations and hierarchical navigation, from national down to district, with Highcharts and Highmaps.",
      "Deployed the full PARAKH ecosystem on official NCERT servers.",
    ],
  },
  {
    id: "unicef",
    name: "National Immunization Strategy Costing",
    kind: "Costing platform · UNICEF",
    summary: "Costing and budgeting platform for national immunization strategy planning.",
    outcome: "Costing APIs tuned to about 10 ms, a 96% improvement.",
    role: "Django APIs and interactive costing workflows.",
    stack: ["Next.js", "Redux", "Django", "Redis"],
    url: "https://niscost.org/en",
    shots: [{ src: "/work/niscost.jpg", alt: "NIS.Cost National Immunization Strategy costing application" }],
    points: [
      "Cut API data-retrieval to ~10 ms (96% faster) with Redis caching, database indexing and query optimisation.",
      "Designed and maintained scalable Django APIs for roadmap, budgeting, costing and reporting workflows.",
      "Real-time calculations and responsive interactions in the costing interface.",
    ],
  },
  {
    id: "ihpl",
    name: "Isher Holdings",
    kind: "Corporate website",
    summary: "Corporate website for a timber shipping specialist.",
    outcome: "A website as dependable as the shipping business behind it.",
    role: "Design to deployment.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://ihplsg.com",
    shots: [
      { src: "/work/ihpl-home.jpg", alt: "Isher Holdings website hero" },
      { src: "/work/ihpl-home-mobile.jpg", alt: "Isher Holdings website on mobile", device: "mobile" },
    ],
    points: [
      "Fast, responsive, search-ready.",
    ],
  },
];

export type Highlight = { m: string; t: string; d: string };
export const experience: { role: string; focus: string; start: string; highlights: Highlight[] } = {
  role: "Software Developer",
  focus: "Backend and full-stack engineering across real-time platforms, billing systems and national-scale dashboards.",
  start: "Oct 2023",
  highlights: [
    { m: "6+", t: "Business verticals", d: "Architected a multi-tenant, distributed real-time bidding platform: auction orchestration, bid decisioning, eligibility rules, lead routing, lifecycle management and RBAC." },
    { m: "150+", t: "Agents in 4 months", d: "Created a flexible billing architecture (prepaid, postpaid, SaaS plans, paid seats, trials, credits, payment recovery, pooled usage, hierarchical teams) that onboarded 150+ agents in four months." },
    { m: "95+", t: "Countries served", d: "Built and deployed backend and full-stack modules in Django, Next.js and Redis, powering an Excel-like interface for users in 95+ countries." },
    { m: "100K+", t: "Users imported", d: "Designed queued background processing in Laravel to import 100,000+ users from Excel with minimal application load." },
    { m: "15+", t: "Buyers onboarded", d: "Built buyer onboarding and auctions: API onboarding, dynamic pricing, Ping/Post and Direct Post bid evaluation, prioritisation and automated lead allocation." },
    { m: "1,500+", t: "Assets restored", d: "Restored 1,500+ deleted campaign assets during a critical production incident, limiting downtime and revenue impact." },
    { m: "10+", t: "Risk signals", d: "Established a lead-quality and fraud framework on 10+ risk and identity signals, and monetised unsold leads through a clickwall." },
    { m: "NCERT", t: "Production deployment", d: "Deployed the complete PARAKH ecosystem on official NCERT servers: integration, scalability and reliable operation across modules." },
    { m: "AI", t: "Lead engagement", d: "Shipped an AI lead-engagement and scheduling flow with Retell AI, Twilio and Brevo: voice, email and SMS, live calendar checks and automated booking." },
    { m: "Async", t: "Fault-tolerant workflows", d: "Designed event-driven lead workflows with queues, webhooks, retries and CRM integrations, so work continues when something fails." },
    { m: "20%", t: "Faster delivery", d: "Worked with CXOs and cross-functional teams, improving alignment and cutting delivery time by 20%." },
    { m: "60%", t: "Of projects reuse it", d: "Centralised email into a Laravel Lumen microservice that is reused across 60% of projects." },
  ],
};

export const stats = [
  { value: 2.3, suffix: "M+", label: "students reached", decimals: 1 },
  { value: 150, suffix: "+", label: "agents onboarded", decimals: 0 },
  { value: 100, suffix: "K+", label: "users imported", decimals: 0 },
  { value: 96, suffix: "%", label: "faster APIs", decimals: 0 },
];

export const proofs = [
  {
    title: "PARAKH Rashtriya Sarvekshan Dashboard",
    org: "NCERT",
    stack: ["Next.js", "TypeScript", "Redis", "Highcharts"],
    metric: "2.3M+",
    metricLabel: "students across 782 districts",
    points: [
      "Cut load times by 70% with server-side rendering, Redis caching and optimised data retrieval.",
      "Interactive geospatial maps and hierarchical navigation with Highcharts/Highmaps.",
    ],
  },
  {
    title: "National Immunization Strategy Costing",
    org: "UNICEF",
    stack: ["Next.js", "Redux", "Django", "Redis"],
    metric: "96%",
    metricLabel: "faster API retrieval, down to ~10 ms",
    points: [
      "Redis caching, database indexing and query tuning for roadmap, budgeting, costing and reporting APIs.",
      "Real-time costing workflows with responsive interactions.",
    ],
  },
];

export const achievements = [
  { year: "2026", title: "Zenith Performer", org: "", text: "Outstanding performance and impact in Q1." },
  { year: "2022", title: "Internship, IIRS / ISRO", org: "", text: "Selected 1 out of 200+ students." },
  { year: "2022", title: "1st Runner-Up, BREADCODE 1.0", org: "Breadboard Coding Society", text: "Coding contest." },
  { year: "2021", title: "1st Runner-Up, Crowd Hacks", org: "IEEE, GTBIT", text: "36-hour hackathon, 60+ teams, ₹20,000 prize." },
];

export const skills = [
  "Node.js", "Go", "Python", "Django", "Laravel", "Next.js", "React", "TypeScript",
  "Kotlin", "REST", "WebSockets", "Microservices", "PostgreSQL", "MySQL", "MongoDB",
  "ClickHouse", "Elasticsearch", "Redis", "RabbitMQ", "Kafka", "Docker", "Nginx",
  "CI/CD", "Linux", "Tailwind", "Three.js",
];

export const skillGroups = [
  { label: "Backend", items: ["Node.js", "Go", "Python", "Django", "Laravel", "REST APIs", "Microservices", "WebSockets", "Event-driven architecture", "Message queues"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "ClickHouse", "Elasticsearch"] },
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "HTML & CSS"] },
  { label: "Tools", items: ["Docker", "Nginx", "CI/CD", "Linux", "Redis", "RabbitMQ", "Kafka", "Gunicorn", "Git"] },
  { label: "Concepts", items: ["Distributed systems", "Async processing", "Concurrency", "Performance optimisation", "Fault tolerance"] },
];

export const bio = {
  name: "Tarashdeep Singh",
  role: "Software developer · Founder, HAZURX",
  lead: "We like the hard parts of software: systems that have to be fast, correct, and still standing when something breaks.",
  paras: [
    "We like the hard parts of software: systems that have to be fast, correct, and still standing when something breaks.",
    "We've built real-time bidding and lead-routing platforms across 6+ business verticals, billing that onboarded 150+ agents in four months, and national dashboards used by millions of students.",
    "Our founder learned the craft in production, with real users, deadlines and the odd incident at midnight.",
    "HAZURX is where we bring that same standard to client work: one accountable team, from the first conversation to the live server.",
  ],
  facts: [
    ["Based in", "India"],
    ["Role", "Software developer"],
    ["Strongest at", "Backend & distributed systems"],
  ],
  chips: ["Backend & distributed systems", "Real-time platforms"],
};

export const aboutStats = [
  { v: "6+", l: "business verticals on one bidding platform" },
  { v: "150+", l: "agents onboarded in 4 months" },
  { v: "2.3M+", l: "students reached by dashboards we built" },
  { v: "96%", l: "faster API data retrieval" },
];

export const strengths = [
  { n: "01", title: "Backend & distributed systems", text: "Event-driven workflows, queues, webhooks and retries, designed to be fault-tolerant from day one." },
  { n: "02", title: "Real-time & high-load", text: "Auctions, bid decisioning and routing that stay fast. Caching, indexing and query tuning where it counts." },
  { n: "03", title: "End-to-end delivery", text: "Requirements, design, build, deploy and support. Web, mobile and API, owned by one accountable team." },
];

export const principlesStatement = "Smart work picks the target. Hard work hits it. We bring both.";

export const principles = [
  { n: "01", title: "Work comes first", text: "Work is our priority. We're glad when there's more of it, because every project is a chance to learn, earn trust and get better." },
  { n: "02", title: "Hard work and smart work", text: "Smart work chooses the target; hard work is what reaches it. We never trade quantity for quality or the reverse. We aim for both." },
  { n: "03", title: "Grateful, never complaining", text: "We don't complain about the load. We pray for more work and more opportunities, and treat each one as a chance to grow." },
  { n: "04", title: "Back ourselves", text: "Believe we can outwork anyone, then do it. Be the best in the room, and earn that place again every day." },
];

export const appShots = [
  { src: "/work/app-home.jpg", label: "Dashboard", alt: "Vetko Scanner app dashboard showing logs, tokens and CBM for the day" },
  { src: "/work/app-scan.jpg", label: "Scan", alt: "Vetko Scanner app scanning screen with recent scans" },
  { src: "/work/app-edit.jpg", label: "Correct", alt: "Vetko Scanner app edit dialog for a log's grade, length and diameter" },
  { src: "/work/app-token.jpg", label: "Token", alt: "Vetko Scanner app token screen with print and complete actions" },
];
