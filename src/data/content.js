export const labels = {
  en: {
    role: 'Fullstack Developer',
    focus: 'Building reliable web systems from UI to API',
    nav: {
      overview: 'Overview',
      projects: 'Projects',
      caseStudy: 'Case Study',
      stack: 'Stack & Practices',
      contact: 'Contact'
    },
    topbar: {
      title: 'Ops Portfolio Console',
      status: 'System Status: Stable'
    },
    overview: {
      title: 'Developer Signal',
      subtitle:
        'I build fullstack products with clear architecture, production habits, and interface quality.',
      cards: [
        { label: 'Current Track', value: 'React + Node + PostgreSQL' },
        { label: 'Primary Goal', value: 'Junior/Semi Junior Fullstack Role' },
        { label: 'Delivery Style', value: 'Feature driven with measurable outcomes' }
      ]
    },
    projects: {
      title: 'Service Portfolio',
      subtitle: 'Each project is framed as a shipped system, not a classroom demo.',
      facets: 'Facets',
      links: 'Links'
    },
    caseStudy: {
      title: 'Release Timeline Rail',
      subtitle: 'Problem to outcome milestones across my flagship build.'
    },
    stack: {
      title: 'Stack and Engineering Practices',
      subtitle: 'Tools mapped to actual usage and delivery decisions.'
    },
    contact: {
      title: 'Contact Channel',
      subtitle: 'Open to fullstack roles and technical collaboration.',
      cta: 'Send message'
    },
    footer: 'Built with React + Vite. Deployed on GitHub Pages.'
  },
  es: {
    role: 'Desarrollador Fullstack',
    focus: 'Construyo sistemas web confiables desde interfaz hasta API',
    nav: {
      overview: 'Resumen',
      projects: 'Proyectos',
      caseStudy: 'Caso de Estudio',
      stack: 'Stack y Practicas',
      contact: 'Contacto'
    },
    topbar: {
      title: 'Consola de Portafolio Ops',
      status: 'Estado del Sistema: Estable'
    },
    overview: {
      title: 'Senal Profesional',
      subtitle:
        'Construyo productos fullstack con arquitectura clara, habitos de produccion y calidad de interfaz.',
      cards: [
        { label: 'Enfoque Actual', value: 'React + Node + PostgreSQL' },
        { label: 'Objetivo', value: 'Rol Fullstack Junior/Semi Junior' },
        { label: 'Forma de Entrega', value: 'Orientado a features con resultados medibles' }
      ]
    },
    projects: {
      title: 'Portafolio de Servicios',
      subtitle: 'Cada proyecto se presenta como sistema entregado, no como demo academica.',
      facets: 'Capas',
      links: 'Enlaces'
    },
    caseStudy: {
      title: 'Linea de Tiempo de Releases',
      subtitle: 'Hitos desde el problema hasta el resultado del proyecto principal.'
    },
    stack: {
      title: 'Stack y Practicas de Ingenieria',
      subtitle: 'Herramientas conectadas con uso real y decisiones de entrega.'
    },
    contact: {
      title: 'Canal de Contacto',
      subtitle: 'Disponible para roles fullstack y colaboracion tecnica.',
      cta: 'Enviar mensaje'
    },
    footer: 'Construido con React + Vite. Desplegado en GitHub Pages.'
  }
};

export const projects = [
  {
    name: 'TaskFlow Teams',
    type: 'Fullstack Platform',
    summary: 'Collaborative task system with auth, role control, and project based delivery.',
    facets: ['Frontend: React', 'API: Express', 'DB: PostgreSQL', 'DevOps: CI/CD'],
    decisions: [
      'JWT auth with route guards',
      'Module based backend structure',
      'UI states for loading, empty, and error handling'
    ],
    metrics: [
      { label: 'Modules', value: '4 core modules' },
      { label: 'Flows', value: 'Auth + CRUD + Roles' },
      { label: 'API', value: 'REST with validation' }
    ],
    links: {
      repo: 'https://github.com/Miguel-Bayter',
      demo: 'https://miguel-bayter.github.io/portfolio/'
    }
  },
  {
    name: 'Finance Pulse',
    type: 'Fullstack Dashboard',
    summary: 'Personal finance control system with filters, categories, and reporting.',
    facets: ['Frontend: React', 'API: Node', 'DB: PostgreSQL', 'Export: CSV'],
    decisions: [
      'Category based analytics model',
      'Date filter strategy for monthly and custom reports',
      'Separation between data services and visual widgets'
    ],
    metrics: [
      { label: 'Reports', value: 'Monthly and custom' },
      { label: 'Filters', value: 'Date + category' },
      { label: 'Export', value: 'CSV ready' }
    ],
    links: {
      repo: 'https://github.com/Miguel-Bayter',
      demo: 'https://miguel-bayter.github.io/portfolio/'
    }
  },
  {
    name: 'Commerce Engine',
    type: 'E-commerce System',
    summary: 'Catalog, cart, checkout simulation, stock handling, and admin workflow.',
    facets: ['Frontend: React', 'API: Express', 'DB: PostgreSQL', 'Infra: Docker'],
    decisions: [
      'Layered architecture for maintainability',
      'Persistent cart and order state flow',
      'Admin and user role separation'
    ],
    metrics: [
      { label: 'Features', value: 'Catalog + cart + orders' },
      { label: 'Infra', value: 'Dockerized setup' },
      { label: 'Panel', value: 'Admin workflow' }
    ],
    links: {
      repo: 'https://github.com/Miguel-Bayter',
      demo: 'https://miguel-bayter.github.io/portfolio/'
    }
  }
];

export const timeline = [
  {
    stage: '01 / Discovery',
    text: 'Define business problem, users, and delivery scope before code.'
  },
  {
    stage: '02 / Architecture',
    text: 'Design API contracts, data model, and module boundaries.'
  },
  {
    stage: '03 / Build',
    text: 'Ship frontend workflows and backend services in feature slices.'
  },
  {
    stage: '04 / Quality',
    text: 'Add validations, error paths, loading states, and refactors.'
  },
  {
    stage: '05 / Release',
    text: 'Deploy, document decisions, and measure real outcomes.'
  }
];

export const stack = [
  {
    area: 'Frontend',
    tools: ['React', 'Vite', 'CSS architecture', 'State by feature']
  },
  {
    area: 'Backend',
    tools: ['Node.js', 'Express', 'REST API', 'Auth patterns']
  },
  {
    area: 'Data',
    tools: ['PostgreSQL', 'Relational modeling', 'Query optimization basics']
  },
  {
    area: 'Delivery',
    tools: ['GitHub', 'Actions CI/CD', 'GitHub Pages', 'README discipline']
  }
];
