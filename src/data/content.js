export const content = {
  en: {
    role: 'Fullstack Developer',
    focus: 'Shipping production-ready web products from interface to API',
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
      subtitle: 'Interview-ready fullstack delivery console',
      status: 'System Stable'
    },
    overview: {
      title: 'Developer Signal',
      subtitle:
        'I build fullstack systems with clear architecture, clean execution, and outcomes that are easy to defend in interviews.',
      cards: [
        { label: 'Current Track', value: 'React + Node + PostgreSQL' },
        { label: 'Hiring Target', value: 'Junior/Semi Junior Fullstack Role' },
        { label: 'Delivery Approach', value: 'Feature slices with quality checks and iteration' }
      ]
    },
    projects: {
      title: 'Service Portfolio',
      subtitle: 'Each project is presented as a product shipment with technical evidence.',
      linksLabel: 'Links',
      repo: 'Repository',
      demo: 'Live Demo',
      items: [
        {
          id: 'taskflow',
          name: 'TaskFlow Teams',
          type: 'Fullstack Platform',
          summary: 'Collaborative task workspace with authentication, role control, and project execution flows.',
          facets: ['Frontend: React', 'API: Express', 'DB: PostgreSQL', 'DevOps: CI/CD'],
          health: 'Healthy',
          completion: '82%',
          decisions: [
            'JWT auth with protected routes',
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
          summary: 'Personal finance control with category analytics, date filters, and export-ready reporting.',
          facets: ['Frontend: React', 'API: Node', 'DB: PostgreSQL', 'Export: CSV'],
          health: 'Stable',
          completion: '76%',
          decisions: [
            'Category-first analytics model',
            'Date filter strategy for monthly and custom windows',
            'Clear separation between data services and visual widgets'
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
          summary: 'Catalog, cart, order flow, and admin operations built on layered architecture.',
          facets: ['Frontend: React', 'API: Express', 'DB: PostgreSQL', 'Infra: Docker'],
          health: 'In Progress',
          completion: '69%',
          decisions: [
            'Layered services for maintainability',
            'Persistent cart with deterministic checkout flow',
            'Role separation between customer and admin journeys'
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
      subtitle: 'Tools mapped to delivery habits and architecture decisions.',
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
      subtitle: 'Open to fullstack opportunities and technical collaboration.',
      channels: [
        { label: 'GitHub', href: 'https://github.com/Miguel-Bayter', external: true },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/miguel-eduardo-bayter-quintana-98653b128/',
          external: true
        },
        { label: 'Send message', href: 'mailto:mbayterq.dev@gmail.com', external: false }
      ]
    },
    drawer: {
      title: 'Project Pulse',
      status: 'Status',
      completion: 'Completion',
      decisions: 'Engineering Decisions',
      metrics: 'Delivery Metrics'
    },
    footer: 'Built with React + Vite. Designed for technical interviews.'
  },
  es: {
    role: 'Desarrollador Fullstack',
    focus: 'Entrego productos web listos para produccion desde interfaz hasta API',
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
      subtitle: 'Consola fullstack lista para entrevistas tecnicas',
      status: 'Sistema Estable'
    },
    overview: {
      title: 'Senal Profesional',
      subtitle:
        'Construyo sistemas fullstack con arquitectura clara, ejecucion ordenada y resultados defendibles en entrevista.',
      cards: [
        { label: 'Enfoque Actual', value: 'React + Node + PostgreSQL' },
        { label: 'Objetivo de Contratacion', value: 'Rol Fullstack Junior/Semi Junior' },
        { label: 'Metodo de Entrega', value: 'Features por etapas con validacion continua' }
      ]
    },
    projects: {
      title: 'Portafolio de Servicios',
      subtitle: 'Cada proyecto se presenta como entrega de producto con evidencia tecnica.',
      linksLabel: 'Enlaces',
      repo: 'Repositorio',
      demo: 'Demo',
      items: [
        {
          id: 'taskflow',
          name: 'TaskFlow Teams',
          type: 'Plataforma Fullstack',
          summary: 'Espacio colaborativo de tareas con autenticacion, control de roles y flujos de ejecucion por proyecto.',
          facets: ['Frontend: React', 'API: Express', 'DB: PostgreSQL', 'DevOps: CI/CD'],
          health: 'Saludable',
          completion: '82%',
          decisions: [
            'Autenticacion JWT con rutas protegidas',
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
          summary: 'Control financiero personal con analitica por categoria, filtros por fecha y reportes exportables.',
          facets: ['Frontend: React', 'API: Node', 'DB: PostgreSQL', 'Export: CSV'],
          health: 'Estable',
          completion: '76%',
          decisions: [
            'Modelo analitico centrado en categorias',
            'Estrategia de filtros mensuales y ventanas personalizadas',
            'Separacion clara entre servicios de datos y widgets visuales'
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
            'Carrito persistente con checkout determinista',
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
      subtitle: 'Desde el planteamiento del problema hasta la validacion post-release.',
      timeline: [
        {
          stage: '01 / Descubrimiento',
          text: 'Definir problema del usuario, restricciones y criterio de exito antes de implementar.'
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
          text: 'Desplegar, documentar decisiones y revisar resultados para la siguiente iteracion.'
        }
      ]
    },
    stack: {
      title: 'Stack y Practicas de Ingenieria',
      subtitle: 'Herramientas mapeadas a habitos de entrega y decisiones de arquitectura.',
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
      subtitle: 'Disponible para oportunidades fullstack y colaboracion tecnica.',
      channels: [
        { label: 'GitHub', href: 'https://github.com/Miguel-Bayter', external: true },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/miguel-eduardo-bayter-quintana-98653b128/',
          external: true
        },
        { label: 'Enviar mensaje', href: 'mailto:mbayterq.dev@gmail.com', external: false }
      ]
    },
    drawer: {
      title: 'Pulso del Proyecto',
      status: 'Estado',
      completion: 'Avance',
      decisions: 'Decisiones de Ingenieria',
      metrics: 'Metricas de Entrega'
    },
    footer: 'Construido con React + Vite. Disenado para entrevistas tecnicas.'
  }
};
