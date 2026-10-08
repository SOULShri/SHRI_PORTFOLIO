import { Project, SkillCategory, BuildProcessStep, BuildJourneyItem } from './types';

export const personalInfo = {
  name: 'Shrivara Bhat',
  eyebrow: 'VJTI · INFORMATION TECHNOLOGY',
  role: 'Information Technology Student & Developer',
  location: 'Mumbai, India',
  education: {
    degree: 'B.Tech Information Technology',
    institution: 'Veermata Jijabai Technological Institute (VJTI), Mumbai',
    period: '2023 – Present',
  },
  email: 'subhat_b23@it.vjti.ac.in',
  github: 'https://github.com/SOULShri',
  linkedin: 'https://www.linkedin.com/in/shrivara-bhat-b62369332',
  headline: 'I build full-stack applications & AI-powered systems.',
  bio1: "I'm Shrivara Bhat, an Information Technology student at VJTI Mumbai focused on building practical web applications and exploring AI-powered features.",
  bio2: 'I enjoy turning ideas into working products — from frontend interfaces and REST APIs to databases and AI-assisted workflows.',
  currently: 'Building full-stack & AI applications',
  openTo: 'Software Engineering Internships',
};

export const whatIBuildPillars = [
  {
    number: '01',
    title: 'FULL-STACK PRODUCTS',
    description: 'React / Next.js interfaces connected to REST APIs, backend logic and structured data.',
    visualNodes: ['React / Next.js', 'REST API Layer', 'Relational DB'],
    arrowLabel: 'Data & State Sync',
    badge: 'End-to-End Delivery',
  },
  {
    number: '02',
    title: 'BACKEND SYSTEMS',
    description: 'Node.js, Express, FastAPI and PostgreSQL used to turn application workflows into maintainable systems.',
    visualNodes: ['HTTP Request', 'Domain Logic & Auth', 'Persistent Data'],
    arrowLabel: 'Validated Execution',
    badge: 'API & Data Modeling',
  },
  {
    number: '03',
    title: 'AI-POWERED FEATURES',
    description: 'Python services, RAG and vector retrieval used where AI adds practical value.',
    visualNodes: ['User Query', 'Context Retrieval', 'AI Response'],
    arrowLabel: 'RAG Pipeline',
    badge: 'Applied AI & Search',
  },
];

export const projects: Project[] = [
  {
    id: 'placementos',
    slug: 'placementos',
    title: 'PlacementOS',
    subtitle: 'AI-Enhanced Placement Management System',
    description:
      'A full-stack placement platform connecting students, TPOs, recruiters and alumni through structured placement workflows and AI-assisted candidate preparation.',
    technologies: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Python',
      'FastAPI',
      'LangChain',
      'ChromaDB',
    ],
    roles: ['Student', 'TPO', 'Recruiter', 'Alumni'],
    workflows: ['Profiles', 'Resumes', 'Companies', 'Opportunities', 'Applications'],
    aiFeatures: ['Resume analysis', 'Skill-gap identification', 'Context-aware AI'],
    githubUrl: 'https://github.com/SOULShri/PLACEMENT-OS',
    caseStudyUrl: '/project/placementos',
    architectureNodes: {
      primary: [
        { label: 'Role Portals', desc: 'Student / TPO / Recruiter / Alumni' },
        { label: 'PlacementOS Core', desc: 'Next.js App Router + TypeScript' },
        { label: 'Data Persistence', desc: 'PostgreSQL + Prisma ORM' },
      ],
      branch: [
        { label: 'FastAPI Microservice', desc: 'Async Python Backend' },
        { label: 'LangChain & ChromaDB', desc: 'Vector Embeddings & Retrieval' },
        { label: 'AI Insights Engine', desc: 'Resume & Skill-Gap Analysis' },
      ],
    },
    caseStudy: {
      overview:
        'PlacementOS is designed to replace fragmented spreadsheets, multiple messaging groups, and manual email notifications with an integrated system for campus recruitment. It models four dedicated user personas while providing an asynchronous AI pipeline to help candidates identify resume gaps before submitting applications.',
      problem:
        'College campus placement processes involve strict deadlines, multi-tier eligibility rules, sensitive student credentials, and high operational friction for Training and Placement Officers (TPOs). Students lack actionable feedback on how their profiles align with job descriptions, and recruiters face cluttered, unstandardized applicant rosters.',
      whatIBuilt: [
        'A comprehensive web platform with role-based routing tailored for Students, TPOs, Recruiters, and Alumni.',
        'End-to-end recruitment lifecycle pipelines: company onboarding, job posting, eligibility filtering, and application status tracking.',
        'A decoupled Python AI microservice that evaluates resume text against opportunity criteria and flags missing proficiencies.',
        'Structured database schemas in PostgreSQL with Prisma ORM ensuring transactional integrity across student submissions.',
      ],
      architectureExplanation:
        'PlacementOS uses a two-tier architecture: a Next.js application handles user authentication, session state, and transactional database operations with PostgreSQL. When a student requests profile analysis, Next.js calls a dedicated FastAPI microservice. The Python backend uses LangChain with ChromaDB vector storage to perform semantic matching and return structured recommendations.',
      implementation: [
        {
          title: 'Frontend & Role-Based Routing (Next.js & TypeScript)',
          details: [
            'Implemented strictly typed dashboards for each role with route protections preventing students from accessing administrator/TPO workflows.',
            'Created modular application forms handling nested academic histories, verified document links, and multi-round application states.',
          ],
        },
        {
          title: 'Database Schema & Relational Integrity (PostgreSQL & Prisma)',
          details: [
            'Modeled relational schemas spanning Users, Profiles, Companies, Drives, Applications, and Audit logs.',
            'Leveraged Prisma Client with type-safe queries, enforcing constraints like one-application-per-drive per eligible candidate.',
          ],
        },
        {
          title: 'Asynchronous AI Processing (FastAPI, LangChain, ChromaDB)',
          details: [
            'Separated compute-heavy NLP operations from the main web server into a standalone FastAPI microservice.',
            'Indexed company requirements and skill taxonomies into ChromaDB vector stores, querying them via LangChain to generate targeted skill-gap assessments.',
          ],
        },
      ],
      workflowSteps: [
        { step: '01', title: 'Profile & Resume Ingestion', description: 'Students register and upload structured resumes and academic verifications.' },
        { step: '02', title: 'Opportunity Publication', description: 'TPOs and verified Recruiters publish eligibility criteria, deadlines, and requirements.' },
        { step: '03', title: 'AI Resume & Gap Analysis', description: 'Candidate resumes are parsed and compared against criteria using ChromaDB and LangChain.' },
        { step: '04', title: 'Structured Application Flow', description: 'Eligible candidates apply and progress through multi-stage recruitment rounds.' },
        { step: '05', title: 'Alumni & TPO Oversight', description: 'Alumni provide mentorship touchpoints while TPOs monitor aggregated cohort metrics.' },
      ],
      techStackExplanation: [
        { tech: 'Next.js & TypeScript', usage: 'Serves the primary web client and server actions with type-safe component contracts and dynamic routing.' },
        { tech: 'PostgreSQL', usage: 'Primary relational database storing users, role policies, company drives, and application records.' },
        { tech: 'Prisma ORM', usage: 'Provides declarative schema definitions, automated migrations, and fully type-checked database queries.' },
        { tech: 'FastAPI', usage: 'Lightweight asynchronous Python REST server handling document analysis and AI processing requests.' },
        { tech: 'LangChain & ChromaDB', usage: 'Used for contextual document retrieval, prompt structuring, and vector comparison for skill-gap insights.' },
      ],
      whatILearned: [
        'How to design clean boundaries between a core web server and specialized AI microservices.',
        'The importance of clear relational database constraints when dealing with critical applicant data.',
        'Structuring prompts and vector context to produce specific, practical skill feedback rather than hallucinated commentary.',
      ],
    },
  },
  {
    id: 'secure-coding',
    slug: 'secure-coding',
    title: 'Secure Coding Contest Platform',
    subtitle: 'Containerized Competitive Programming Environment',
    description:
      'A coding-contest platform with separate frontend and backend services, authentication, role-based access and containerized deployment.',
    technologies: ['React', 'Node.js', 'Express', 'Docker', 'Kubernetes'],
    roles: ['Participants', 'Organizers', 'Administrators'],
    workflows: ['Contests', 'Participants', 'Organizers', 'Programming Problems'],
    aiFeatures: [],
    githubUrl: 'https://github.com/SOULShri/secure-coding-contest-platform',
    caseStudyUrl: '/project/secure-coding',
    architectureNodes: {
      primary: [
        { label: 'React Client', desc: 'Code Editor & Contest Dashboards' },
        { label: 'REST API Gateway', desc: 'Express Router + JWT Security' },
        { label: 'Node.js Service', desc: 'Submission Evaluation & Logic' },
        { label: 'Container Runtime', desc: 'Docker Isolated Containers' },
      ],
      branch: [
        { label: 'Kubernetes Pods', desc: 'Cluster Configuration & Orchestration' },
        { label: 'Resource Limits', desc: 'Memory & CPU Capping' },
      ],
    },
    caseStudy: {
      overview:
        'A resilient platform engineered for hosting programming contests with distinct organizer and participant permissions. The system focuses on separating concerns between user-facing contest administration and the containerized environments required to build and deploy contest services safely.',
      problem:
        'Competitive programming portals require real-time problem delivery, role-based controls preventing unauthorized problem modification, and isolated service architecture so that heavy contest traffic or student submissions do not destabilize administrative services.',
      whatIBuilt: [
        'Decoupled client-server architecture with an interactive React frontend and an Express.js backend.',
        'Role-based access control protecting organizer problem-creation routes and participant contest timers.',
        'Containerization of services with Docker to ensure reproducible build environments across developer machines.',
        'Exploration of Kubernetes manifests (Deployments, Services, ConfigMaps) to orchestrate containerized application pods.',
      ],
      architectureExplanation:
        'The architecture cleanly decouples the React frontend from the Node.js/Express backend. Requests pass through an authentication middleware layer verifying JWT tokens and role claims. Backend services are packaged into standardized Docker images, and Kubernetes manifests define pod configurations, networking, and service discovery.',
      implementation: [
        {
          title: 'Decoupled Client & Problem Interface (React)',
          details: [
            'Built an interactive contest dashboard displaying countdown timers, test cases, problem statements, and real-time standing boards.',
            'Implemented state management to prevent work loss during network hiccups or submission processing.',
          ],
        },
        {
          title: 'Secure API & Authorization Layer (Node.js & Express)',
          details: [
            'Engineered RESTful endpoints for contest scheduling, problem bank management, and participant submissions.',
            'Used JWT tokens and middleware guards to restrict contest editing strictly to organizer credentials.',
          ],
        },
        {
          title: 'Containerization & Infrastructure (Docker & Kubernetes)',
          details: [
            'Wrote multi-stage Dockerfiles minimizing image sizes and standardizing runtime dependencies.',
            'Authored Kubernetes deployment and service configurations to test container scaling and service self-healing.',
          ],
        },
      ],
      workflowSteps: [
        { step: '01', title: 'Organizer Setup', description: 'Organizers author coding problems, define constraints, and configure contest timeframes.' },
        { step: '02', title: 'Participant Entry', description: 'Students register and authenticate with verified roles prior to contest start.' },
        { step: '03', title: 'Timed Problem Delivery', description: 'Problem statements and mock tests are distributed via authenticated REST endpoints.' },
        { step: '04', title: 'Submission Routing', description: 'Submissions are verified, processed through the backend logic, and logged.' },
        { step: '05', title: 'Containerized Deployment', description: 'Dockerized services orchestrated through Kubernetes manifests ensure runtime stability.' },
      ],
      techStackExplanation: [
        { tech: 'React', usage: 'Provides a responsive single-page user interface for contestants and organizers with instant state updates.' },
        { tech: 'Node.js & Express', usage: 'Powers the core backend application, handling HTTP routing, role verification, and contest business logic.' },
        { tech: 'Docker', usage: 'Packages frontend and backend services into isolated, predictable container environments.' },
        { tech: 'Kubernetes', usage: 'Explored for orchestrating multi-container service pods, ingress routing, and local deployment testing.' },
      ],
      whatILearned: [
        'How to design strict role-based access control (RBAC) in Express middleware.',
        'Structuring Dockerfiles for efficient caching and minimal image footprint.',
        'The fundamentals of container orchestration and declarative infrastructure via Kubernetes manifests.',
      ],
    },
  },
  {
    id: 'lost-and-found',
    slug: 'lost-and-found',
    title: 'Lost and Found Hub',
    subtitle: 'Full-Stack Campus Recovery & Claim Workflow Platform',
    description:
      'A full-stack platform for reporting lost and found items, managing listings and organizing claims through a structured workflow.',
    technologies: ['React', 'Node.js', 'Express', 'Prisma', 'Cloudinary'],
    roles: ['Reporters', 'Finders', 'Claimants'],
    workflows: ['Users', 'Item Listings', 'Claims', 'Verification'],
    aiFeatures: [],
    githubUrl: 'https://github.com/SOULShri/lost-and-found-',
    caseStudyUrl: '/project/lost-and-found',
    architectureNodes: {
      primary: [
        { label: 'React UI', desc: 'Item Feed, Filters & Claim Forms' },
        { label: 'Express REST API', desc: 'Auth, Listing & Claim Routing' },
        { label: 'Prisma ORM', desc: 'Type-Safe Database Modeling' },
        { label: 'App Data Store', desc: 'Item States & Ownership Records' },
      ],
      branch: [
        { label: 'Cloudinary API', desc: 'Media Upload & Image CDN' },
        { label: 'Asset URLs', desc: 'Optimized Image Delivery' },
      ],
    },
    caseStudy: {
      overview:
        'A centralized digital lost-and-found system created to streamline how lost possessions are recorded, discovered, and safely claimed across a campus or community setting, replacing chaotic notice boards with verifiable claim histories.',
      problem:
        'When students lose valuable belongings on campus (identity cards, electronics, notebooks), notice boards are quickly lost in clutter and public social media posts lack privacy, validation of actual ownership, and real-time claim status tracking.',
      whatIBuilt: [
        'A complete web application with clean listing discovery, category tagging, and search filters.',
        'A structured multi-step claim workflow ensuring claimants provide verifiable identification details before items are handed over.',
        'Cloud-based image processing using Cloudinary so users can attach clear photographic proof without bloating database storage.',
        'Prisma-backed relational data layer maintaining the exact lifecycle of an item from "Reported" to "Claimed" and "Resolved".',
      ],
      architectureExplanation:
        'The frontend is built with React, communicating via JSON REST endpoints to a Node.js/Express server. Image uploads are sent directly to Cloudinary via signed or API-mediated streams, storing optimized CDN URLs in the relational database managed through Prisma.',
      implementation: [
        {
          title: 'Frontend Interface & State (React)',
          details: [
            'Built an intuitive grid interface with instant filtering by item status (Lost / Found), date, and category.',
            'Constructed a claim submission interface with modal guidance to facilitate verified handovers.',
          ],
        },
        {
          title: 'Backend REST Architecture (Node.js & Express)',
          details: [
            'Implemented routes for item creation, updating status flags, and managing claims submitted by secondary users.',
            'Protected sensitive contact information from unauthorized viewers until a claim is verified.',
          ],
        },
        {
          title: 'Data Modeling & Media Storage (Prisma & Cloudinary)',
          details: [
            'Designed relational tables linking Users to Items and Items to multiple pending Claims with foreign key integrity.',
            'Integrated Cloudinary for image resizing, format optimization, and safe cloud asset hosting.',
          ],
        },
      ],
      workflowSteps: [
        { step: '01', title: 'Report Item', description: 'User initiates a Lost or Found report detailing location, timestamp, and item metadata.' },
        { step: '02', title: 'Create Listing', description: 'Listing is created with unique identifiers and made searchable in the campus directory.' },
        { step: '03', title: 'Upload Image', description: 'Photos of the item are securely uploaded to Cloudinary CDN and linked to the listing.' },
        { step: '04', title: 'View Item', description: 'Community members browse the catalog using filters, categories, and keyword search.' },
        { step: '05', title: 'Manage Claim', description: 'Claimants provide proof of ownership; the finder verifies details and updates the status to resolved.' },
      ],
      techStackExplanation: [
        { tech: 'React', usage: 'Delivers a responsive client with rapid search filtering and clean claim submission forms.' },
        { tech: 'Node.js & Express', usage: 'Provides the REST backend handling user validation, item CRUD, and claim workflow updates.' },
        { tech: 'Prisma', usage: 'Manages database schema definitions and gives type-safe access to item records and claim relationships.' },
        { tech: 'Cloudinary', usage: 'Stores, optimizes, and serves user-submitted photos of reported items reliably.' },
      ],
      whatILearned: [
        'Designing state machines for item lifecycle management (Reported -> Claim Pending -> Verified -> Returned).',
        'Managing third-party media upload flows without exposing private API secrets.',
        'Balancing public visibility of lost items with privacy controls for claimant details.',
      ],
    },
  },
];

export const engineeringFoundations = [
  {
    title: 'Data Structures & Algorithms',
    code: 'CS201',
    description: 'Arrays, Trees, Graphs, Hash Maps, Dynamic Programming, and complexity analysis (Big-O).',
  },
  {
    title: 'Object-Oriented Programming',
    code: 'CS202',
    description: 'Encapsulation, Inheritance, Polymorphism, Abstraction, and clean modular class design.',
  },
  {
    title: 'DBMS',
    code: 'CS203',
    description: 'Relational schemas, SQL queries, Indexing, Transactions, ACID properties, and normalization.',
  },
  {
    title: 'Operating Systems',
    code: 'CS204',
    description: 'Processes, Threads, Concurrency, Synchronization, Memory management, and File systems.',
  },
  {
    title: 'Computer Networks',
    code: 'CS205',
    description: 'OSI & TCP/IP models, HTTP/HTTPS, DNS, Sockets, Routing, and Transport layer mechanics.',
  },
  {
    title: 'Software Engineering',
    code: 'CS206',
    description: 'System design fundamentals, SDLC, Modular architecture, Version control, and Testing.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Core programming and scripting languages for systems and web applications.',
    skills: ['C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    description: 'Modern user interface development and reactive web foundations.',
    skills: ['React', 'Next.js', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    description: 'Server architectures, microservices, and API endpoint engineering.',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Databases',
    description: 'Relational & document data persistence and ORM modeling.',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    category: 'AI & Retrieval',
    description: 'Retrieval-Augmented Generation, vector similarity, and LLM application frameworks.',
    skills: ['LangChain', 'ChromaDB', 'RAG'],
  },
  {
    category: 'Tools & DevOps',
    description: 'Version control, containerization, and infrastructure deployment.',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes'],
  },
];

export const howIBuildProcess: BuildProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    phase: 'Problem Space',
    description: 'Understand the problem and constraints thoroughly before touching any code.',
    tasks: ['Identify core user pain points', 'Map out functional constraints', 'Define clear success criteria'],
  },
  {
    number: '02',
    title: 'Design',
    phase: 'System & Architecture',
    description: 'Break into workflows and design APIs, data models, and component boundaries.',
    tasks: ['Draft entity-relationship schemas', 'Define REST endpoints & contracts', 'Plan component hierarchy'],
  },
  {
    number: '03',
    title: 'Build',
    phase: 'Implementation',
    description: 'Implement frontend and backend iteratively with type safety and modular components.',
    tasks: ['Write clean, structured code', 'Implement authentication & business logic', 'Connect data layers & services'],
  },
  {
    number: '04',
    title: 'Refine',
    phase: 'Debug & Harden',
    description: 'Debug edge cases, inspect performance bottlenecks, and refine the user experience.',
    tasks: ['Handle failure states gracefully', 'Optimize queries & bundle size', 'Polish micro-interactions'],
  },
];

export const collaborativeProject = {
  team: 'Inheritimance Team',
  title: 'Stock Market Learning & Game Project',
  description:
    'Collaborated with a team to build an interactive platform focused on stock-market learning and investing concepts, while participating in VJTI and multiple online hackathons.',
  keyHighlights: [
    'Gamified financial literacy and stock market mechanics for beginners.',
    'Team-based rapid ideation, Git collaboration, and feature prototyping under hackathon timeframes.',
    'Explored real-time simulated order execution and portfolio tracking.',
  ],
};

export const buildJourneyTimeline: BuildJourneyItem[] = [
  {
    title: 'Started B.Tech IT at VJTI',
    description:
      'Began formal engineering education at Veermata Jijabai Technological Institute (VJTI) Mumbai, diving into core Computer Science foundations and programming.',
    badge: 'Foundation',
  },
  {
    title: 'Full-stack application development',
    description:
      'Built end-to-end web applications with React, Node.js, Express, and PostgreSQL; mastered REST API design, relational data modeling, and Prisma.',
    badge: 'Full-Stack',
  },
  {
    title: 'AI-powered application work',
    description:
      'Expanded into Python, FastAPI, LangChain, and ChromaDB to implement practical Retrieval-Augmented Generation (RAG) and document analysis workflows.',
    badge: 'Applied AI',
  },
  {
    title: 'Collaborative projects / hackathons',
    description:
      'Teamed up with peers for VJTI and online hackathons (Inheritimance Team), sharpening team Git workflows and rapid architectural decision-making.',
    badge: 'Collaboration',
  },
  {
    title: 'Currently seeking software engineering internships',
    description:
      'Eager to apply strong computer science fundamentals and full-stack/AI capabilities to real-world engineering teams and impactful systems.',
    badge: 'Open to Roles',
  },
];
