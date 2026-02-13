export const content = {
  en: {
    role: 'Fullstack Developer',
    focus: 'Building reliable web systems from interface to API',
    a11y: {
      navigation: 'Primary navigation',
      projectPulse: 'Selected project pulse panel',
      toggleLanguage: 'Switch language'
    },
    nav: {
      overview: 'Overview',
      projects: 'Projects',
      caseStudy: 'Case Study',
      stack: 'Stack & Practices',
      contact: 'Contact'
    },
    topbar: {
      title: 'Friendly Ops Portfolio',
      subtitle: 'Product-minded fullstack delivery console',
      status: 'System Stable'
    },
    overview: {
      title: 'Developer Signal',
      subtitle:
        'I deliver fullstack products with clear architecture, practical UX, and measurable outcomes.',
      cards: [
        { label: 'Current Track', value: 'React + Node + PostgreSQL' },
        { label: 'Primary Goal', value: 'Junior/Semi Junior Fullstack Role' },
        { label: 'Work Style', value: 'Feature slices with iterative quality checks' }
      ]
    },
    projects: {
      title: 'Service Portfolio',
      subtitle: 'Each project is shown as a shipped system with technical evidence.',
      linksLabel: 'Links',
      repo: 'Repository',
      demo: 'Live Demo',
      items: [
        {
          id: 'taskflow',
          name: 'TaskFlow Teams',
          type: 'Fullstack Platform',
          summary: 'Collaborative task workspace with auth, role control, and project-based execution.',
          facets: ['Frontend: React', 'API: Express', 'DB: PostgreSQL', 'DevOps: CI/CD'],
          health: 'Healthy',
          completion: '82%',
          decisions: [
            'JWT auth with route guards',
            'Module-oriented backend by business context',
            'Explicit states for loading, empty, and error paths'
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
          id: 'finance',
          name: 'Finance Pulse',
          type: 'Fullstack Dashboard',
          summary: 'Personal finance control with category analytics, filters, and export-ready reporting.',
          facets: ['Frontend: React', 'API: Node', 'DB: PostgreSQL', 'Export: CSV'],
          health: 'Stable',
          completion: '76%',
          decisions: [
            'Category-first analytics model',
            'Date filter strategy for monthly and custom windows',
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
          id: 'commerce',
          name: 'Commerce Engine',
          type: 'E-commerce System',
          summary: 'Catalog, cart, order flow, and admin operations on a layered architecture.',
          facets: ['Frontend: React', 'API: Express', 'DB: PostgreSQL', 'Infra: Docker'],
          health: 'In Progress',
          completion: '69%',
          decisions: [
            'Layered services for maintainability',
            'Persistent cart with deterministic order flow',
            'Role separation between customer and admin paths'
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
      ]
    },
    caseStudy: {
      title: 'Release Timeline Rail',
      subtitle: 'From problem framing to post-release validation.',
      timeline: [
        {
          stage: '01 / Discovery',
          text: 'Define user problem, constraints, and success criteria before implementation.'
        },
        {
          stage: '02 / Architecture',
          text: 'Design API contracts, data model, and module boundaries.'
        },
        {
          stage: '03 / Build',
          text: 'Deliver frontend workflows and backend services in feature slices.'
        },
        {
          stage: '04 / Quality',
          text: 'Cover validation, edge paths, and UX reliability states.'
        },
        {
          stage: '05 / Release',
          text: 'Deploy, document decisions, and review outcomes for the next iteration.'
        }
      ]
    },
    stack: {
      title: 'Stack and Engineering Practices',
      subtitle: 'Tools connected to delivery habits and architecture decisions.',
      items: [
        {
          area: 'Frontend',
          tools: ['React', 'Vite', 'Component architecture', 'State by feature']
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
      ]
    },
    contact: {
      title: 'Contact Channel',
      subtitle: 'Open to fullstack roles and technical collaboration.',
      channels: [
        { label: 'GitHub', href: 'https://github.com/Miguel-Bayter', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true },
        { label: 'Send message', href: 'mailto:you@example.com', external: false }
      ]
    },
    drawer: {
      title: 'Project Pulse',
      status: 'Status',
      completion: 'Completion',
      decisions: 'Engineering Decisions',
      metrics: 'Delivery Metrics'
    },
    footer: 'Built with React + Vite. Deployed on GitHub Pages.'
  },
  es: {
    role: 'Desarrollador Fullstack',
    focus: 'Construyo sistemas web confiables desde interfaz hasta API',
    a11y: {
      navigation: 'Navegacion principal',
      projectPulse: 'Panel de pulso del proyecto seleccionado',
      toggleLanguage: 'Cambiar idioma'
    },
    nav: {
      overview: 'Resumen',
      projects: 'Proyectos',
      caseStudy: 'Caso de Estudio',
      stack: 'Stack y Practicas',
      contact: 'Contacto'
    },
    topbar: {
      title: 'Portafolio Friendly Ops',
      subtitle: 'Consola de entrega fullstack orientada a producto',
      status: 'Sistema Estable'
    },
    overview: {
      title: 'Senal Profesional',
      subtitle:
        'Entrego productos fullstack con arquitectura clara, UX practica y resultados medibles.',
      cards: [
        { label: 'Enfoque Actual', value: 'React + Node + PostgreSQL' },
        { label: 'Objetivo Principal', value: 'Rol Fullstack Junior/Semi Junior' },
        { label: 'Forma de Trabajo', value: 'Features por etapas con validacion continua' }
      ]
    },
    projects: {
      title: 'Portafolio de Servicios',
      subtitle: 'Cada proyecto se presenta como sistema entregado con evidencia tecnica.',
      linksLabel: 'Enlaces',
      repo: 'Repositorio',
      demo: 'Demo',
      items: [
        {
          id: 'taskflow',
          name: 'TaskFlow Teams',
          type: 'Plataforma Fullstack',
          summary: 'Espacio colaborativo de tareas con auth, control de roles y ejecucion por proyectos.',
          facets: ['Frontend: React', 'API: Express', 'DB: PostgreSQL', 'DevOps: CI/CD'],
          health: 'Saludable',
          completion: '82%',
          decisions: [
            'Autenticacion JWT con proteccion de rutas',
            'Backend modular por contexto de negocio',
            'Estados explicitos para carga, vacio y error'
          ],
          metrics: [
            { label: 'Modulos', value: '4 modulos principales' },
            { label: 'Flujos', value: 'Auth + CRUD + Roles' },
            { label: 'API', value: 'REST con validacion' }
          ],
          links: {
            repo: 'https://github.com/Miguel-Bayter',
            demo: 'https://miguel-bayter.github.io/portfolio/'
          }
        },
        {
          id: 'finance',
          name: 'Finance Pulse',
          type: 'Dashboard Fullstack',
          summary: 'Control financiero personal con analitica por categorias, filtros y reportes exportables.',
          facets: ['Frontend: React', 'API: Node', 'DB: PostgreSQL', 'Export: CSV'],
          health: 'Estable',
          completion: '76%',
          decisions: [
            'Modelo analitico centrado en categorias',
            'Estrategia de filtros por fecha mensual y personalizada',
            'Separacion entre servicios de datos y widgets visuales'
          ],
          metrics: [
            { label: 'Reportes', value: 'Mensual y personalizado' },
            { label: 'Filtros', value: 'Fecha + categoria' },
            { label: 'Exportacion', value: 'CSV listo' }
          ],
          links: {
            repo: 'https://github.com/Miguel-Bayter',
            demo: 'https://miguel-bayter.github.io/portfolio/'
          }
        },
        {
          id: 'commerce',
          name: 'Commerce Engine',
          type: 'Sistema E-commerce',
          summary: 'Catalogo, carrito, flujo de ordenes y operaciones admin sobre arquitectura por capas.',
          facets: ['Frontend: React', 'API: Express', 'DB: PostgreSQL', 'Infra: Docker'],
          health: 'En Progreso',
          completion: '69%',
          decisions: [
            'Servicios por capas para mantenibilidad',
            'Carrito persistente con flujo de orden determinista',
            'Separacion de roles entre cliente y administrador'
          ],
          metrics: [
            { label: 'Funciones', value: 'Catalogo + carrito + ordenes' },
            { label: 'Infra', value: 'Configuracion con Docker' },
            { label: 'Panel', value: 'Flujo administrativo' }
          ],
          links: {
            repo: 'https://github.com/Miguel-Bayter',
            demo: 'https://miguel-bayter.github.io/portfolio/'
          }
        }
      ]
    },
    caseStudy: {
      title: 'Linea de Tiempo de Releases',
      subtitle: 'Desde la definicion del problema hasta la validacion post-release.',
      timeline: [
        {
          stage: '01 / Descubrimiento',
          text: 'Definir problema de usuario, restricciones y criterio de exito antes de implementar.'
        },
        {
          stage: '02 / Arquitectura',
          text: 'Disenar contratos de API, modelo de datos y limites de modulos.'
        },
        {
          stage: '03 / Construccion',
          text: 'Entregar flujos frontend y servicios backend por slices funcionales.'
        },
        {
          stage: '04 / Calidad',
          text: 'Cubrir validaciones, casos borde y estados de confiabilidad en UX.'
        },
        {
          stage: '05 / Release',
          text: 'Desplegar, documentar decisiones y revisar resultados para iterar.'
        }
      ]
    },
    stack: {
      title: 'Stack y Practicas de Ingenieria',
      subtitle: 'Herramientas conectadas con habitos de entrega y decisiones de arquitectura.',
      items: [
        {
          area: 'Frontend',
          tools: ['React', 'Vite', 'Arquitectura de componentes', 'Estado por feature']
        },
        {
          area: 'Backend',
          tools: ['Node.js', 'Express', 'API REST', 'Patrones de autenticacion']
        },
        {
          area: 'Datos',
          tools: ['PostgreSQL', 'Modelo relacional', 'Base de optimizacion de consultas']
        },
        {
          area: 'Entrega',
          tools: ['GitHub', 'Actions CI/CD', 'GitHub Pages', 'Disciplina en README']
        }
      ]
    },
    contact: {
      title: 'Canales de Contacto',
      subtitle: 'Disponible para roles fullstack y colaboracion tecnica.',
      channels: [
        { label: 'GitHub', href: 'https://github.com/Miguel-Bayter', external: true },
        { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true },
        { label: 'Enviar mensaje', href: 'mailto:you@example.com', external: false }
      ]
    },
    drawer: {
      title: 'Pulso del Proyecto',
      status: 'Estado',
      completion: 'Avance',
      decisions: 'Decisiones de Ingenieria',
      metrics: 'Metricas de Entrega'
    },
    footer: 'Construido con React + Vite. Desplegado en GitHub Pages.'
  }
};
