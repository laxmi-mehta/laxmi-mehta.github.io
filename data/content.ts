// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Laxmi Mehta',
  role: 'Backend Engineer',
  headline: ['Building reliable systems today.', 'Machine Learning Engineer tomorrow.'],
  subheading:
    'A year spent shipping production APIs taught me how software really behaves under load. Now I am walking the same careful road into machine learning — one model, one experiment, one lesson at a time.',
  location: 'Mumbai, India',
  email: 'admin@onlydairy.in',
  github: 'https://github.com/laxmi-mehta',
  linkedin: 'https://www.linkedin.com/in/laxmi-mehta',
  resume: '/resume.pdf',
}

export const journal = [
  {
    title: 'Who I am',
    note: 'page one',
    body: 'A backend engineer from Mumbai who fell in love with the invisible parts of software — the queries, the queues, the quiet machinery that keeps everything running while nobody is watching.',
  },
  {
    title: 'How I think',
    note: 'a habit of mind',
    body: 'Slowly, then precisely. I like to understand a system before I change it, sketch the data flow before I write the endpoint, and measure before I optimize. Good engineering feels less like typing and more like listening.',
  },
  {
    title: 'Why backend',
    note: 'the craft',
    body: 'Because correctness is a kind of beauty. A well-designed schema, an API that never surprises its callers, a job queue that fails gracefully — these are things you can trust, and building trustworthy things is deeply satisfying.',
  },
  {
    title: 'Why machine learning',
    note: 'the turning point',
    body: 'My first ML project — teaching an agent to manage traffic with reinforcement learning — changed something. Systems that learn ask harder questions than systems that follow rules, and I want to spend the next years answering them.',
  },
  {
    title: 'Lessons learned',
    note: 'carried in the pack',
    body: 'Production teaches humility: cache invalidation is real, migrations deserve respect, and the simplest design that works is usually the right one. Every incident I have debugged made me a calmer engineer.',
  },
  {
    title: 'Where I am headed',
    note: 'the horizon',
    body: 'Toward machine learning engineering — combining a backend engineer’s discipline with a scientist’s curiosity. Reliable data pipelines, honest evaluation, models that actually ship.',
  },
]

export const education = [
  {
    degree: 'B.Sc. Information Technology',
    school: 'Model College, Mumbai',
    score: '9.80 CGPA',
    years: '2022 — 2025',
  },
  {
    degree: 'HSC · Commerce',
    school: 'Model College, Mumbai',
    score: '90.60%',
    years: '2020 — 2022',
  },
  {
    degree: 'SSC',
    school: 'Saraswati English Hindi School',
    score: '91.20%',
    years: '2009 — 2020',
  },
]

export const milestones = [
  {
    marker: 'I',
    time: 'May 2025 — Present · Full-time',
    role: 'Backend Developer · Adhyay Infotech Pvt. Ltd.',
    place: 'Mumbai, India',
    summary:
      'Building a large-scale dairy management platform used by dairy cooperatives, collection centres and milk producers.',
    details: [
      'RESTful APIs with Django REST Framework, serving web and mobile apps',
      'Business workflows — farmer onboarding, milk collection & dispatch, collection-centre operations',
      'Reporting modules (collection, summary, incentive, drill-down) over large datasets',
      'PostgreSQL optimization — ORM query tuning, migrations, production debugging',
      'End-to-end features: requirements → API design → build → test → deploy',
    ],
    lesson: 'Production software is more than code — it is requirements, reviews and reliability.',
  },
  {
    marker: 'II',
    time: 'Now → next',
    role: 'The road into machine learning',
    place: 'In progress',
    summary: 'Joining what I know — production systems — with what I am learning: models.',
    details: [
      'Reinforcement-learning traffic management system using PPO',
      'CNN skin-disease classifier served through a Django web app',
      'Studying deep learning with TensorFlow and PyTorch',
    ],
    lesson: 'A model is only useful once it survives contact with production.',
  },
  {
    marker: 'III',
    time: 'Apr — Aug 2024 · Internships',
    role: 'Where it all started — six internships',
    place: 'Mumbai · Remote',
    summary: 'A season of saying yes to everything — Python, web, cloud and business.',
    details: [
      'Octanet Techoctanet Services — Python Development (Jul – Aug 2024)',
      'CodSoft — Web Development (Jun 2024)',
      'Internship Studio — Website Design & Development (May – Jun 2024)',
      'iLearnings Career & Consulting — Web Developer (Jun 2024)',
      'Younity — Business Development Analyst (Jun 2024)',
      'iFutures Technologies — Cloud Computing (Apr 2024)',
    ],
    lesson: 'Try many doors early — you only need one to open wide.',
  },
]

export const skillGroups = [
  {
    title: 'Backend',
    caption: 'the workbench',
    items: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
  },
  {
    title: 'Machine Learning',
    caption: 'the field notes',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Cloud & Tools',
    caption: 'the travel kit',
    items: ['AWS', 'Git', 'Linux'],
  },
]

export type FeaturedProject = {
  name: string
  image: string
  tagline: string
  overview: string
  problem: string
  architecture: string
  data: string
  challenges: string
  impact: string
  lesson: string
  stack: string[]
  github: string
  demo?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Traffic Management with Reinforcement Learning',
    image: '/images/projects/traffic-management-ml.png',
    tagline: 'Teaching an agent to untangle traffic',
    overview:
      'A simulated traffic-control system where a reinforcement-learning agent learns signal timing policies that keep intersections flowing, visualised with live animations.',
    problem:
      'Fixed-timer traffic signals waste enormous time: they cannot react to real conditions. Could an agent learn adaptive signal control purely from experience?',
    architecture:
      'A Python simulation environment exposes intersection state (queue lengths, wait times) to a PPO agent. The agent proposes signal phases; the environment returns rewards based on total throughput and average wait. Training and evaluation loops are decoupled so learned policies can be replayed visually.',
    data:
      'State is engineered from simulated sensor readings — per-lane vehicle counts and cumulative waiting time — normalised into fixed-size observation vectors for the policy network.',
    challenges:
      'Reward shaping was the hard part: naive rewards taught the agent to starve side roads. Balancing throughput against fairness took many redesigns of the reward function.',
    impact:
      'The trained policy consistently beat fixed-timer baselines on average wait time in simulation, and the project became the turning point of my move into ML.',
    lesson: 'In RL, you get exactly the behaviour you reward — not the behaviour you intended.',
    stack: ['Python', 'PPO', 'Reinforcement Learning', 'NumPy'],
    github: 'https://github.com/laxmi-mehta/TrafficManagement-ML',
  },
  {
    name: 'Skin Disease Detection',
    image: '/images/projects/Django-app.png',
    tagline: 'A CNN classifier, served like real software',
    overview:
      'A full web application that classifies skin conditions from uploaded photographs using a convolutional neural network, wrapped in a Django interface anyone can use.',
    problem:
      'Early screening of skin conditions is limited by access to specialists. An image classifier cannot replace a doctor, but it can offer a fast, private first signal.',
    architecture:
      'Django handles uploads, user flow and result presentation; a trained CNN runs inference server-side. Model loading is done once at startup so predictions stay fast, and the ML layer is isolated behind a clean service boundary.',
    data:
      'Trained on a labelled dermatology image dataset with augmentation (rotation, flips, colour jitter) to compensate for class imbalance and small sample sizes.',
    challenges:
      'Bridging two worlds: notebooks are forgiving, web servers are not. Handling arbitrary user images — sizes, formats, lighting — required a robust preprocessing pipeline before the model ever saw a pixel.',
    impact:
      'Delivered an end-to-end ML product — dataset to deployed interface — and proved to myself that I could carry a model all the way into working software.',
    lesson: 'The model is 20% of an ML product. The other 80% is engineering.',
    stack: ['Python', 'Django', 'CNN', 'TensorFlow'],
    github: 'https://github.com/laxmi-mehta/skin-disease-detection-app',
  },
  {
    name: 'Django REST API',
    image: '/images/projects/django-restapi.png',
    tagline: 'A clean, honest API — the backend fundamentals',
    overview:
      'A user-management REST API built to RESTful standards: create, read, update and delete operations with proper status codes, validation and serialization throughout.',
    problem:
      'Most tutorial APIs cut corners — no validation, vague errors, inconsistent responses. This project was an exercise in doing the fundamentals properly.',
    architecture:
      'Django REST Framework viewsets and serializers over a MongoDB Atlas store, with a clear separation between transport, validation and persistence layers.',
    data:
      'Document-oriented user schema on MongoDB Atlas, with serializer-level validation guarding every write path.',
    challenges:
      'Marrying Django’s relational assumptions with a document database meant being deliberate about where validation and integrity rules live.',
    impact:
      'Became my reference implementation — the patterns here (thin views, fat serializers, explicit errors) carried directly into my production work.',
    lesson: 'An API is a promise. Keep it boring, keep it consistent.',
    stack: ['Django', 'Django REST Framework', 'MongoDB Atlas'],
    github: 'https://github.com/laxmi-mehta/django-rest-api',
  },
]

export const otherProjects = [
  { name: 'Music Website', desc: 'Modern music site with smooth animations.', tags: ['Next.js', 'Aceternity UI'], link: 'https://github.com/laxmi-mehta/music-website-nextjs' },
  { name: 'Real Estate Website', desc: 'Property listings with search and filtering.', tags: ['React'], link: 'https://real-estate-git-main-laxmi-mehtas-projects.vercel.app/' },
  { name: 'Fitness Club Website', desc: 'Workout plans and membership flows.', tags: ['React'], link: 'https://fitness-club-reactjs-git-main-laxmi-mehtas-projects.vercel.app/' },
  { name: 'Expense Tracker', desc: 'Personal finance with charts and categories.', tags: ['Vue.js'], link: 'https://expense-tracker-vuejs-git-main-laxmi-mehtas-projects.vercel.app/' },
  { name: 'BMI Calculator', desc: 'Health calculator with recommendations.', tags: ['React'], link: 'https://bmi-calculator-reactjs-git-main-laxmi-mehtas-projects.vercel.app/' },
  { name: 'Todo List App', desc: 'CRUD tasks with local-storage persistence.', tags: ['React'], link: 'https://todo-list-reactjs-git-main-laxmi-mehtas-projects.vercel.app/' },
  { name: 'Dice Game', desc: 'Animated dice game with score tracking.', tags: ['React'], link: 'https://dice-game-git-main-laxmi-mehtas-projects.vercel.app/' },
  { name: 'Food Website', desc: 'Responsive ordering site with menu and cart.', tags: ['HTML', 'CSS', 'JS'], link: 'https://laxmi-mehta.github.io/food_website/' },
]

export const aiJourney = {
  intro:
    'This is not a checklist — it is a walk I take every day. Each stage below is a real stretch of the road, walked or still ahead.',
  stages: [
    {
      state: 'walked' as const,
      title: 'Foundations',
      items: ['Python mastery', 'Linear algebra & statistics refresh', 'NumPy & Pandas fluency'],
    },
    {
      state: 'walked' as const,
      title: 'Classical machine learning',
      items: ['Scikit-learn pipelines', 'Regression, trees, ensembles', 'Model evaluation & cross-validation'],
    },
    {
      state: 'walking' as const,
      title: 'Deep learning',
      items: ['Neural networks with TensorFlow & PyTorch', 'CNNs for vision (shipped one!)', 'Training discipline: overfitting, regularisation, tuning'],
    },
    {
      state: 'ahead' as const,
      title: 'ML engineering',
      items: ['Serving models behind real APIs', 'Data & feature pipelines', 'MLOps: versioning, monitoring, retraining'],
    },
    {
      state: 'ahead' as const,
      title: 'Research interests',
      items: ['Reinforcement learning for real-world control', 'Computer vision in healthcare', 'Efficient inference on modest hardware'],
    },
  ],
}

export const closingQuote =
  'Every system I have built taught me something. The next one could be ours — let’s build it together.'
