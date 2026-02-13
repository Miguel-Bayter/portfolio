export const content = {
  en: {
    role: "Fullstack Developer",
    focus: "I ship production-ready products from UX to API architecture.",
    availability: "Open to full-time roles · LATAM / Remote",
    a11y: {
      navigation: "Primary navigation",
      projectPulse: "Selected project pulse panel",
      toggleLanguage: "Switch language",
      toggleTheme: "Switch color theme",
    },
    nav: {
      overview: "Overview",
      projects: "Projects",
      caseStudy: "Hiring Fit",
      stack: "Capabilities",
      contact: "Contact",
    },
    topbar: {
      title: "Product Delivery Portfolio",
      subtitle:
        "Evidence-first interface for technical and hiring conversations.",
      status: "Available for interviews",
      darkMode: "Dark",
      lightMode: "Light",
      systemMode: "System",
    },
    hero: {
      kicker: "Fullstack Delivery Console",
      title:
        "I design and build software that moves from concept to production with clear technical tradeoffs.",
      subtitle:
        "This portfolio is structured for recruiters and engineering leads: fast proof, real constraints, and measurable outcomes.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact Me",
      metrics: [
        { label: "Core Tracks", value: "3 Product Flows" },
        { label: "Main Stack", value: "React + Node + PostgreSQL" },
        { label: "Delivery Style", value: "Feature Slices + QA" },
      ],
    },
    overview: {
      title: "Quick Hiring Snapshot",
      subtitle: "A fast scan of fit, execution style, and project evidence.",
      proofTitle: "Proof Strip",
      proofAction: "Open project board",
      cards: [
        { label: "Target Role", value: "Junior / Semi Senior Fullstack" },
        { label: "Strength", value: "Interface quality + backend structure" },
        { label: "Work Preference", value: "Product teams with ownership" },
      ],
    },
    projects: {
      title: "Project Portfolio",
      subtitle:
        "Each project card shows problem, solution, and impact in one scan.",
      linksLabel: "Links",
      repo: "Repository",
      demo: "Live Demo",
      caseStudy: "Case Study",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      impactLabel: "Impact",
      items: [
        {
          id: "taskflow",
          name: "TaskFlow Teams",
          type: "Fullstack Platform",
          previewLabel: "Collaborative Workflow Surface",
          summary:
            "A collaborative task workspace with role controls, auth flows, and release-ready UX states.",
          problem:
            "Teams lacked a shared flow for ownership, priorities, and execution visibility.",
          solution:
            "Built role-based task pipelines with protected routes and clear workflow states.",
          impact:
            "Reduced coordination friction and improved completion predictability across squads.",
          facets: [
            "Frontend: React",
            "API: Express",
            "DB: PostgreSQL",
            "DevOps: CI/CD",
          ],
          statusKey: "up",
          health: "Healthy",
          completion: "82%",
          decisions: [
            "JWT auth with protected route strategy",
            "Module-oriented backend by business context",
            "Explicit loading, empty, and error interface states",
          ],
          metrics: [
            { label: "Modules", value: "4 core modules" },
            { label: "Flows", value: "Auth + CRUD + Roles" },
            { label: "API", value: "REST with validation" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter",
            demo: "https://miguel-bayter.github.io/portfolio/",
          },
        },
        {
          id: "finance",
          name: "Finance Pulse",
          type: "Fullstack Dashboard",
          previewLabel: "Personal Finance Intelligence",
          summary:
            "A finance tracking dashboard focused on category analytics and actionable reporting.",
          problem:
            "Users tracked expenses manually with no clear monthly signals.",
          solution:
            "Implemented category-first dashboards with date filters and export-ready reports.",
          impact:
            "Enabled faster monthly reviews and clearer spending decisions with less manual effort.",
          facets: [
            "Frontend: React",
            "API: Node",
            "DB: PostgreSQL",
            "Export: CSV",
          ],
          statusKey: "stable",
          health: "Stable",
          completion: "76%",
          decisions: [
            "Category-first analytics model",
            "Date filter strategy for monthly and custom windows",
            "Separation between data services and visual widgets",
          ],
          metrics: [
            { label: "Reports", value: "Monthly and custom" },
            { label: "Filters", value: "Date + category" },
            { label: "Export", value: "CSV ready" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter",
            demo: "https://miguel-bayter.github.io/portfolio/",
          },
        },
        {
          id: "commerce",
          name: "Commerce Engine",
          type: "E-commerce System",
          previewLabel: "Order and Catalog Operations",
          summary:
            "A modular commerce flow covering catalog browsing, checkout, and admin operations.",
          problem:
            "The existing flow had fragile checkout steps and weak admin visibility.",
          solution:
            "Built layered services with deterministic checkout and role-based operations.",
          impact:
            "Improved order reliability and made admin actions more predictable and traceable.",
          facets: [
            "Frontend: React",
            "API: Express",
            "DB: PostgreSQL",
            "Infra: Docker",
          ],
          statusKey: "progress",
          health: "In Progress",
          completion: "69%",
          decisions: [
            "Layered service boundaries for maintainability",
            "Persistent cart with deterministic checkout flow",
            "Role separation between customer and admin journeys",
          ],
          metrics: [
            { label: "Features", value: "Catalog + cart + orders" },
            { label: "Infra", value: "Dockerized setup" },
            { label: "Panel", value: "Admin workflow" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter",
            demo: "https://miguel-bayter.github.io/portfolio/",
          },
        },
      ],
    },
    caseStudy: {
      title: "Hiring Fit Snapshot",
      subtitle:
        "The signals companies usually check before moving candidates to interviews.",
      signals: [
        {
          label: "Ownership",
          value: "Feature to release",
          note: "I cover interface flow, API logic, data model decisions, and deployment notes.",
        },
        {
          label: "Execution",
          value: "Predictable delivery",
          note: "I work in feature slices with clear acceptance criteria and progress visibility.",
        },
        {
          label: "Communication",
          value: "Technical clarity",
          note: "I explain tradeoffs in plain language for product, design, and engineering.",
        },
      ],
      panels: [
        {
          title: "What teams get",
          bullets: [
            "Clean UI states for loading, empty, and error paths",
            "Backend structure aligned with business domains",
            "Readable documentation for handoff and onboarding",
          ],
        },
        {
          title: "How I collaborate",
          bullets: [
            "Frequent async updates with concise technical context",
            "Early risk flags instead of late surprises",
            "Clear task ownership and delivery boundaries",
          ],
        },
        {
          title: "Quality habits",
          bullets: [
            "Validation-first forms and API input checks",
            "Consistent component patterns and naming conventions",
            "Manual QA passes before release candidates",
          ],
        },
        {
          title: "First 30 days",
          bullets: [
            "Map product flows and technical constraints quickly",
            "Deliver one scoped feature from UI to API",
            "Leave reusable patterns the team can scale",
          ],
        },
      ],
    },
    stack: {
      title: "Capabilities and Engineering Practices",
      subtitle:
        "Tools mapped to concrete delivery behavior, not only technology labels.",
      items: [
        {
          area: "Frontend Delivery",
          criterion:
            "I prioritize reusable patterns, clear hierarchy, and resilient UI states.",
          tools: [
            "React",
            "Vite",
            "Component architecture",
            "Feature-scoped state",
          ],
        },
        {
          area: "Backend and API Design",
          criterion:
            "I structure services around business domains and explicit contracts.",
          tools: [
            "Node.js",
            "Express",
            "REST API design",
            "Authentication patterns",
          ],
        },
        {
          area: "Data and Persistence",
          criterion:
            "I model data for maintainability first, then tune for predictable queries.",
          tools: [
            "PostgreSQL",
            "Relational modeling",
            "Query optimization basics",
          ],
        },
        {
          area: "Quality and Delivery",
          criterion:
            "I keep releases reliable with repeatable workflows and documentation discipline.",
          tools: [
            "GitHub",
            "Actions CI/CD",
            "GitHub Pages",
            "README standards",
          ],
        },
      ],
    },
    contact: {
      title: "Hiring and Contact",
      subtitle:
        "Open to fullstack product roles where quality, ownership, and collaboration matter.",
      hiringKicker: "Available now",
      hiringTitle:
        "Ready for technical interviews and practical coding assessments.",
      hiringSubtitle:
        "Best fit: product teams that value clean architecture, strong communication, and delivery consistency.",
      channels: [
        {
          label: "GitHub",
          href: "https://github.com/Miguel-Bayter",
          external: true,
          icon: "github",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/miguel-eduardo-bayter-quintana-98653b128",
          external: true,
          icon: "linkedin",
        },
        {
          label: "Send message",
          href: "mailto:mbayterq.dev@gmail.com",
          external: false,
          icon: "mail",
          type: "form",
        },
      ],
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Tell me about the role or project",
        submit: "Send",
        cancel: "Cancel",
        sent: "Message ready - your email client will open.",
      },
    },
    drawer: {
      title: "Project Pulse",
      status: "Status",
      completion: "Completion",
      decisions: "Engineering Decisions",
      metrics: "Delivery Metrics",
      impact: "Business Impact",
    },
    footer: "Miguel Eduardo Bayter Quintana - 2026",
  },
  es: {
    role: "Desarrollador Fullstack",
    focus:
      "Entrego productos listos para produccion desde UX hasta arquitectura de API.",
    availability: "Disponible para roles full-time · LATAM / Remoto",
    a11y: {
      navigation: "Navegacion principal",
      projectPulse: "Panel de pulso del proyecto seleccionado",
      toggleLanguage: "Cambiar idioma",
      toggleTheme: "Cambiar tema de color",
    },
    nav: {
      overview: "Resumen",
      projects: "Proyectos",
      caseStudy: "Perfil para empresas",
      stack: "Capacidades",
      contact: "Contacto",
    },
    topbar: {
      title: "Portafolio de Entrega de Producto",
      subtitle:
        "Interfaz orientada a evidencia para entrevistas tecnicas y de contratacion.",
      status: "Disponible para entrevistas",
      darkMode: "Oscuro",
      lightMode: "Claro",
      systemMode: "Sistema",
    },
    hero: {
      kicker: "Consola Fullstack de Entrega",
      title:
        "Diseno y construyo software que pasa de concepto a produccion con tradeoffs tecnicos claros.",
      subtitle:
        "Este portafolio esta estructurado para reclutadores y lideres de ingenieria: evidencia rapida, restricciones reales y resultados medibles.",
      ctaPrimary: "Ver Proyectos",
      ctaSecondary: "Contactarme",
      metrics: [
        { label: "Rutas clave", value: "3 flujos de producto" },
        { label: "Stack principal", value: "React + Node + PostgreSQL" },
        { label: "Metodo de entrega", value: "Feature slices + QA" },
      ],
    },
    overview: {
      title: "Resumen rapido para contratacion",
      subtitle: "Vista rapida de encaje, ejecucion y evidencia de proyectos.",
      proofTitle: "Franja de evidencia",
      proofAction: "Abrir tablero de proyectos",
      cards: [
        { label: "Rol objetivo", value: "Fullstack Junior / Semi Senior" },
        {
          label: "Fortaleza",
          value: "Calidad de interfaz + estructura backend",
        },
        { label: "Preferencia", value: "Equipos de producto con ownership" },
      ],
    },
    projects: {
      title: "Portafolio de Proyectos",
      subtitle:
        "Cada tarjeta muestra problema, solucion e impacto en una lectura.",
      linksLabel: "Enlaces",
      repo: "Repositorio",
      demo: "Demo",
      caseStudy: "Caso",
      problemLabel: "Problema",
      solutionLabel: "Solucion",
      impactLabel: "Impacto",
      items: [
        {
          id: "taskflow",
          name: "TaskFlow Teams",
          type: "Plataforma Fullstack",
          previewLabel: "Superficie de flujo colaborativo",
          summary:
            "Workspace colaborativo con control de roles, autenticacion y estados de UX listos para release.",
          problem:
            "Los equipos no tenian un flujo compartido para ownership, prioridades y visibilidad.",
          solution:
            "Construi pipelines por rol con rutas protegidas y estados de flujo claros.",
          impact:
            "Redujo friccion de coordinacion y mejoro la predictibilidad de entrega.",
          facets: [
            "Frontend: React",
            "API: Express",
            "DB: PostgreSQL",
            "DevOps: CI/CD",
          ],
          statusKey: "up",
          health: "Saludable",
          completion: "82%",
          decisions: [
            "Autenticacion JWT con estrategia de rutas protegidas",
            "Backend modular por contexto de negocio",
            "Estados explicitos para carga, vacio y error",
          ],
          metrics: [
            { label: "Modulos", value: "4 modulos principales" },
            { label: "Flujos", value: "Auth + CRUD + Roles" },
            { label: "API", value: "REST con validacion" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter",
            demo: "https://miguel-bayter.github.io/portfolio/",
          },
        },
        {
          id: "finance",
          name: "Finance Pulse",
          type: "Dashboard Fullstack",
          previewLabel: "Inteligencia financiera personal",
          summary:
            "Dashboard de control financiero centrado en analitica por categoria y reportes accionables.",
          problem:
            "Los usuarios registraban gastos manualmente sin senales mensuales claras.",
          solution:
            "Implemente dashboards por categoria con filtros por fecha y reportes exportables.",
          impact:
            "Permite revisiones mensuales mas rapidas y decisiones de gasto mas claras con menos trabajo manual.",
          facets: [
            "Frontend: React",
            "API: Node",
            "DB: PostgreSQL",
            "Export: CSV",
          ],
          statusKey: "stable",
          health: "Estable",
          completion: "76%",
          decisions: [
            "Modelo analitico centrado en categorias",
            "Estrategia de filtros mensuales y ventanas personalizadas",
            "Separacion entre servicios de datos y widgets visuales",
          ],
          metrics: [
            { label: "Reportes", value: "Mensual y personalizado" },
            { label: "Filtros", value: "Fecha + categoria" },
            { label: "Exportacion", value: "CSV listo" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter",
            demo: "https://miguel-bayter.github.io/portfolio/",
          },
        },
        {
          id: "commerce",
          name: "Commerce Engine",
          type: "Sistema E-commerce",
          previewLabel: "Operaciones de catalogo y ordenes",
          summary:
            "Flujo modular de comercio con catalogo, checkout y operaciones administrativas.",
          problem:
            "El flujo anterior tenia pasos fragiles en checkout y poca visibilidad admin.",
          solution:
            "Construi servicios por capas con checkout determinista y operaciones por rol.",
          impact:
            "Mejoro la confiabilidad de ordenes y la trazabilidad operativa del panel admin.",
          facets: [
            "Frontend: React",
            "API: Express",
            "DB: PostgreSQL",
            "Infra: Docker",
          ],
          statusKey: "progress",
          health: "En progreso",
          completion: "69%",
          decisions: [
            "Limites de servicios por capas para mantenibilidad",
            "Carrito persistente con checkout determinista",
            "Separacion de roles entre cliente y administrador",
          ],
          metrics: [
            { label: "Funciones", value: "Catalogo + carrito + ordenes" },
            { label: "Infra", value: "Setup con Docker" },
            { label: "Panel", value: "Workflow administrativo" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter",
            demo: "https://miguel-bayter.github.io/portfolio/",
          },
        },
      ],
    },
    caseStudy: {
      title: "Resumen de encaje para contratacion",
      subtitle:
        "Senales que las empresas suelen revisar antes de pasar a entrevista.",
      signals: [
        {
          label: "Ownership",
          value: "Feature a release",
          note: "Cubro flujo de interfaz, logica API, decisiones de datos y notas de despliegue.",
        },
        {
          label: "Ejecucion",
          value: "Entrega predecible",
          note: "Trabajo por feature slices con criterio de aceptacion y visibilidad de avance.",
        },
        {
          label: "Comunicacion",
          value: "Claridad tecnica",
          note: "Explico tradeoffs en lenguaje claro para producto, diseno e ingenieria.",
        },
      ],
      panels: [
        {
          title: "Lo que recibe el equipo",
          bullets: [
            "Estados de UI claros para carga, vacio y error",
            "Estructura backend alineada al dominio de negocio",
            "Documentacion legible para handoff y onboarding",
          ],
        },
        {
          title: "Como colaboro",
          bullets: [
            "Updates asincronos frecuentes con contexto tecnico",
            "Riesgos identificados temprano, no al final",
            "Ownership claro y limites de entrega definidos",
          ],
        },
        {
          title: "Habitos de calidad",
          bullets: [
            "Validaciones consistentes en formularios y API",
            "Patrones de componentes y nombres uniformes",
            "Pasadas de QA manual antes de cada release",
          ],
        },
        {
          title: "Primeros 30 dias",
          bullets: [
            "Mapear flujos de producto y restricciones tecnicas rapido",
            "Entregar una feature acotada de UI a API",
            "Dejar patrones reutilizables para escalar en equipo",
          ],
        },
      ],
    },
    stack: {
      title: "Capacidades y practicas de ingenieria",
      subtitle:
        "Herramientas mapeadas a habitos de entrega concretos, no solo etiquetas.",
      items: [
        {
          area: "Entrega Frontend",
          criterion:
            "Priorizo patrones reutilizables, jerarquia clara y estados de UI resilientes.",
          tools: [
            "React",
            "Vite",
            "Arquitectura de componentes",
            "Estado por feature",
          ],
        },
        {
          area: "Backend y diseno de API",
          criterion: "Estructuro servicios por dominio y contratos explicitos.",
          tools: [
            "Node.js",
            "Express",
            "Diseno REST API",
            "Patrones de autenticacion",
          ],
        },
        {
          area: "Datos y persistencia",
          criterion:
            "Modelo datos para mantenibilidad y consultas predecibles.",
          tools: [
            "PostgreSQL",
            "Modelo relacional",
            "Base de optimizacion de consultas",
          ],
        },
        {
          area: "Calidad y entrega",
          criterion:
            "Mantengo releases confiables con workflows repetibles y documentacion clara.",
          tools: [
            "GitHub",
            "Actions CI/CD",
            "GitHub Pages",
            "Estandares de README",
          ],
        },
      ],
    },
    contact: {
      title: "Contratacion y contacto",
      subtitle:
        "Disponible para roles fullstack de producto con foco en calidad y ownership.",
      hiringKicker: "Disponible ahora",
      hiringTitle:
        "Listo para entrevistas tecnicas y pruebas practicas de codigo.",
      hiringSubtitle:
        "Me acoplo mejor a equipos que valoran arquitectura limpia, comunicacion y consistencia de entrega.",
      channels: [
        {
          label: "GitHub",
          href: "https://github.com/Miguel-Bayter",
          external: true,
          icon: "github",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/miguel-eduardo-bayter-quintana-98653b128",
          external: true,
          icon: "linkedin",
        },
        {
          label: "Enviar mensaje",
          href: "mailto:mbayterq.dev@gmail.com",
          external: false,
          icon: "mail",
          type: "form",
        },
      ],
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@correo.com",
        messagePlaceholder: "Cuentame sobre el rol o proyecto",
        submit: "Enviar",
        cancel: "Cancelar",
        sent: "Mensaje listo - se abrira tu cliente de correo.",
      },
    },
    drawer: {
      title: "Pulso del proyecto",
      status: "Estado",
      completion: "Avance",
      decisions: "Decisiones de ingenieria",
      metrics: "Metricas de entrega",
      impact: "Impacto de negocio",
    },
    footer: "Miguel Eduardo Bayter Quintana - 2026",
  },
};
