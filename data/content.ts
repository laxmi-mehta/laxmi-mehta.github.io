// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Laxmi Mehta',
  role: 'Backend Engineer',
  company: 'Adhyay Infotech Pvt. Ltd.',
  // rotating profiles shown large in the hero
  roles: ['Backend Developer', 'Django & DRF Developer', 'Aspiring ML Engineer', 'Database Craftsman'],
  headline: ['Building reliable systems today.', 'Machine Learning Engineer tomorrow.'],
  subheading:
    'A year spent shipping production APIs taught me how software really behaves under load. Now I am walking the same careful road into machine learning — one model, one experiment, one lesson at a time.',
  location: 'Mumbai, India',
  email: 'admin@onlydairy.in',
  github: 'https://github.com/laxmi-mehta',
  linkedin: 'https://www.linkedin.com/in/laxmi-mehta',
  resume: '/resume.pdf',
}

// numbers from the Mobile Dairy platform I work on at Adhyay Infotech
export const aboutHighlights = [
  { value: '100k+', label: 'App Downloads' },
  { value: '4.9★', label: 'Play Store Rating' },
  { value: '64+', label: 'Reports Powered' },
  { value: '10k+', label: 'Dairy Centers Served' },
]

// the single about-me page, one paragraph per entry (**term** renders highlighted)
export const aboutMe = [
  'I’m a **Backend Developer at Adhyay Infotech**, where I build and maintain the backend of **Mobile Dairy** — a multi-tenant platform that powers milk collection, quality-based billing, dispatch and payments for **10,000+ dairy centers** across India. I own features end to end: **REST APIs with Django**, business workflows, **reporting modules** and **PostgreSQL optimization** for real production data.',
  'Before this, I completed my **B.Sc. IT** at Model College with a **9.80 CGPA** and packed one summer with **six internships** across Python, web and cloud. Along the way I built everything from React and Vue apps to **NutriVision** — my final-year project, a **CNN-powered food nutrition analyzer** served through Django.',
  'Now I’m walking a deliberate road into **machine learning**. I keep a public learning log — **100 Days of ML** on GitHub — implementing algorithms from scratch with **NumPy, Pandas and Scikit-learn**, and I ship what I learn as real tools like my **ML Algorithm Visualizer**, deployed live on **Hugging Face**.',
  'I like software that is boring in the best way: **predictable, measured, reliable**. The kind you stop noticing because it simply works.',
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
      'Developing and maintaining backend features for a **large-scale dairy management platform** serving **10,000+ dairy centers** — scalable REST APIs, complex business rules and the reporting engine behind daily operations.',
    details: [
      'Designed and enhanced **scalable REST APIs** with **Django REST Framework**',
      '**Customer management, transfer mapping and inventory** features with **role-based permissions**',
      'Built and maintained **64+ analytical and operational reports** with **optimized SQL queries**',
      'Delivered nearly **200 feature enhancements and bug fixes** across production releases',
      '**Production debugging and root-cause analysis** — performance, reliability and data accuracy',
      'Collaborated with **frontend, QA and product teams** through code reviews, testing and **post-release monitoring**',
    ],
    lesson: 'Production software is more than code — it is requirements, reviews and reliability.',
  },
  {
    marker: 'II',
    time: 'Now → next',
    role: 'The road into machine learning',
    place: 'In progress',
    summary: 'Joining what I know — **production systems** — with what I am learning: **models**.',
    details: [
      '**Reinforcement-learning** traffic management system using **PPO**',
      '**CNN skin-disease classifier** served through a Django web app',
      'Studying deep learning with **TensorFlow and PyTorch**',
    ],
    lesson: 'A model is only useful once it survives contact with production.',
  },
  {
    marker: 'III',
    time: 'Apr — Aug 2024 · Internships',
    role: 'Where it all started — six internships',
    place: 'Mumbai · Remote',
    summary: 'A season of saying yes to everything — **Python, web, cloud and business**.',
    details: [
      '**Octanet Techoctanet Services** — Python Development (Jul – Aug 2024)',
      '**CodSoft** — Web Development (Jun 2024)',
      '**Internship Studio** — Website Design & Development (May – Jun 2024)',
      '**iLearnings Career & Consulting** — Web Developer (Jun 2024)',
      '**Younity** — Business Development Analyst (Jun 2024)',
      '**iFutures Technologies** — Cloud Computing (Apr 2024)',
    ],
    lesson: 'Try many doors early — you only need one to open wide.',
  },
]

export const skillGroups = [
  {
    title: 'Backend',
    caption: 'the workbench',
    items: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Celery'],
  },
  {
    title: 'Machine Learning',
    caption: 'the field notes',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV'],
  },
  {
    title: 'Frontend',
    caption: 'the shop window',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'HTML & CSS'],
  },
  {
    title: 'Languages & Tools',
    caption: 'the travel kit',
    items: ['C++', 'Java', 'PHP', 'Git & GitHub', 'Docker', 'AWS', 'Linux', 'Postman'],
  },
]

export type FeaturedProject = {
  name: string
  image: string
  tagline: string
  overview: string
  impact: string
  stack: string[]
  github?: string
  demo?: string
  stats?: { value: string; label: string }[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Mobile Dairy — Dairy Management Platform',
    image: '/images/projects/mobile-dairy.png',
    tagline: 'what I build at work, every day',
    overview:
      'India’s most popular milk-collection software — a multi-tenant platform for dairy cooperatives, collection centres and dairy plants, covering milk collection, quality-based billing, dispatch, inventory and payments. I work on its Django backend: REST APIs, business workflows and the reporting modules behind daily operations.',
    impact: 'In production since 2017, powering real dairy businesses across India every day.',
    stats: [
      { value: '100k+', label: 'App Downloads' },
      { value: '4.9★', label: 'Play Store Rating' },
      { value: '64+', label: 'Reports Powered' },
      { value: '10k+', label: 'Dairy Centers Served' },
    ],
    stack: ['Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'AWS'],
    demo: 'https://mobiledairy.co.in/?lan=en',
  },
  {
    name: 'NutriVision AI',
    image: '/images/projects/nutrivision-ai.png',
    tagline: 'my final-year college project',
    overview:
      'An AI-powered food nutritional analysis platform — upload a photo of your meal and a CNN (InceptionV3, trained on the India Food-20 dataset) identifies the dish and breaks down its calories, protein, carbs and fats. Comes with recipe recommendations, a barcode scanner, a community forum and NutriBot, a health chatbot.',
    impact:
      'Built end-to-end as my B.Sc. IT final project — Django backend, MongoDB, a TensorFlow/OpenCV model, and a complete product experience around it.',
    stack: ['Django', 'TensorFlow', 'OpenCV', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/laxmi-mehta/NutriVision-AI',
  },
  {
    name: 'ML Algorithm Visualizer',
    image: '/images/projects/ml-algo-visualizer.png',
    tagline: 'learning machine learning by seeing it',
    overview:
      'An interactive Streamlit dashboard that turns classical ML into something you can play with — tune parameters and watch ten-plus algorithms (regression, KNN, SVM, random forests, K-Means, DBSCAN, PCA) redraw their decision boundaries live, plus concept demos for gradient descent, regularisation and overfitting.',
    impact:
      'Deployed live on Hugging Face Spaces with Docker — the tool I use to build and share ML intuition.',
    stack: ['Python', 'Streamlit', 'Scikit-learn', 'Docker'],
    github: 'https://github.com/laxmi-mehta/ml-algo-visualizer',
    demo: 'https://laxmimehta-ml-algo-visualizer.hf.space/',
  },
  {
    name: 'MediReminder AI',
    image: '/images/projects/medireminder-ai.png',
    tagline: 'so no dose is ever missed',
    overview:
      'A smart medication management system built for elderly patients juggling multiple prescriptions — scan a prescription with OCR, let AI flag dangerous drug interactions, and get smart reminders with full medication history tracking.',
    impact:
      'Turns a photo of a prescription into a managed medication schedule — OCR, AI interaction checks and reminders in one flow.',
    stack: ['Python', 'OCR', 'AI Integration'],
    github: 'https://github.com/laxmi-mehta/MediReminder-AI',
  },
  {
    name: 'Traffic Management with Reinforcement Learning',
    image: '/images/projects/traffic-management-ml.png',
    tagline: 'teaching an agent to untangle traffic',
    overview:
      'A simulated traffic-control system where a reinforcement-learning agent learns signal timing policies that keep intersections flowing, visualised with live animations.',
    impact:
      'The trained PPO policy consistently beat fixed-timer baselines on average wait time — and this project became the turning point of my move into ML.',
    stack: ['Python', 'PPO', 'Reinforcement Learning', 'NumPy'],
    github: 'https://github.com/laxmi-mehta/TrafficManagement-ML',
  },
  {
    name: 'Skin Disease Detection',
    image: '/images/projects/Django-app.png',
    tagline: 'a CNN classifier, served like real software',
    overview:
      'A full web application that classifies skin conditions from uploaded photographs using a convolutional neural network, wrapped in a Django interface anyone can use.',
    impact:
      'Delivered an end-to-end ML product — dataset to deployed interface — and proved I could carry a model all the way into working software.',
    stack: ['Python', 'Django', 'CNN', 'TensorFlow'],
    github: 'https://github.com/laxmi-mehta/skin-disease-detection-app',
  },
]

export const otherProjects = [
  { name: 'Django REST API', desc: 'User CRUD API built to RESTful standards with DRF and MongoDB Atlas.', tags: ['Django', 'DRF', 'MongoDB'], link: 'https://github.com/laxmi-mehta/django-rest-api' },
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
