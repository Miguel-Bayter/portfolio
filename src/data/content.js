export const content = {
  en: {
    role: "Fullstack Software Developer | Software Analysis and Development Technologist",
    focus: "I ship production-ready products from UX to API architecture.",
    availability: "Open to full-time roles · LATAM / Remote",
    a11y: {
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
      title: "Fullstack Software Developer Portfolio",
      subtitle:
        "End-to-end product delivery with measurable business outcomes.",
      profileLinkLabel: "Open LinkedIn profile",
      proofLabel: "Hiring evidence highlights",
      proofItems: [
        "Ownership of scope and execution",
        "Business-aligned impact metrics",
      ],
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
        "This portfolio is structured for recruiters and technical leads: fast proof, real constraints, and measurable outcomes.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact Me",
      metrics: [
        { label: "Core Tracks", value: "3 Product Flows" },
        { label: "Main Stack", value: "React + Node + PostgreSQL" },
        { label: "Delivery Style", value: "Feature Slices + QA" },
      ],
    },
    overview: {
      title: "Stack Tecnologico",
      hero: {
        nameLine: "I'm Miguel Bayter",
        roleLinePrefix: "",
        roleLineHighlight: "Fullstack",
        roleLineSuffix: "Software Developer",
        description:
          "I build reliable product experiences across frontend and backend, balancing delivery speed, quality, and communication for real team workflows.",
        ctaPrimary: "View Projects",
        ctaSecondary: "Contact Me",
      },
      proofTitle: "Proof Strip",
      proofAction: "Open project board",
      techStack: {
        a11yLabel: "Technology stack carousel",
        prev: "Previous technologies",
        next: "Next technologies",
        items: [
          { name: "HTML5", icon: "html", tone: "orange", rank: 1 },
          { name: "CSS3", icon: "css", tone: "blue", rank: 2 },
          { name: "JavaScript", icon: "javascript", tone: "amber", rank: 3 },
          { name: "Git", icon: "git", tone: "orange", rank: 4 },
          { name: "React", icon: "react", tone: "indigo", rank: 5 },
          { name: "Tailwind CSS", icon: "tailwind", tone: "cyan", rank: 6 },
          { name: "TypeScript", icon: "typescript", tone: "blue", rank: 7 },
          { name: "Node.js", icon: "nodejs", tone: "green", rank: 8 },
          { name: "Express", icon: "express", tone: "slate", rank: 9 },
          { name: "SQLite", icon: "sqlite", tone: "indigo", rank: 10 },
          { name: "MongoDB", icon: "mongodb", tone: "forest", rank: 11 },
          { name: "Prisma", icon: "prisma", tone: "indigo", rank: 12 },
          { name: "Docker", icon: "docker", tone: "cyan", rank: 13 },
        ],
      },
    },
    projects: {
      linksLabel: "Links",
      repo: "Repository",
      demo: "Live Demo",
      noDemo: "Maintenance",
      languageLabel: "Language",
      facetCta: {
        language: "Typed language decisions keep domain logic explicit and reduce ambiguity across client-server boundaries.",
        framework: "Component and rendering structure prioritize predictable state transitions and composable UI behavior.",
        backend: "Service boundaries and request flow are organized for deterministic behavior under concurrent interactions.",
        data: "Data access is modeled with integrity-first operations and predictable transactional behavior.",
        cross: "Cross-cutting concerns are handled with explicit conventions for localization, consistency, and maintainability.",
      },
      facetSpecificCta: {
        "node.js": "Node.js runtime is used for non-blocking event loops and stable websocket throughput during concurrent sessions.",
        express: "Express handles routing and middleware layering with explicit request validation boundaries.",
        "socket.io": "Socket.io channels coordinate room lifecycle, role events, and real-time synchronization guarantees.",
        javascript: "Core gameplay and interaction logic is implemented in JavaScript with event-driven control paths.",
        "react 19": "React 19 powers interactive UI states with predictable rendering and scalable component composition.",
        typescript: "TypeScript enforces explicit contracts across UI and service boundaries to reduce runtime ambiguity.",
        prisma: "Prisma models relational integrity and transactional data operations for critical checkout and return flows.",
        i18n: "Internationalization is integrated at the UI flow level to keep content, routes, and labels consistent across locales.",
      },
      filterAll: "All",
      filtersOpen: "Show filters",
      filtersClose: "Hide filters",
      emptyStateTitle: "No matches",
      emptyStateText: "No projects match this filter yet. Try another stack.",
      filterGroups: {
        language: "Language",
        framework: "Framework",
        backend: "Backend",
        data: "Data",
        cross: "Cross",
      },
      caseStudy: "Details",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      impactLabel: "Impact",
      items: [
        {
          id: "impostor",
          name: "Impostor",
          type: "Multiplayer Fullstack Game",
          previewImage:
            "https://opengraph.githubassets.com/1/Miguel-Bayter/Impostor",
          previewLabel: "Realtime rooms and role synchronization",
          cta: "Event-driven architecture with Socket.io room lifecycle control, deterministic role state, and latency-aware interaction handling.",
          summary:
            "Online multiplayer social deduction game with real-time rooms, role logic, and synchronized interactions.",
          problem:
            "A local game prototype lacked stable multiplayer coordination and role-safe gameplay at scale.",
          solution:
            "Designed a split frontend/backend architecture with Socket.io channels, room lifecycle control, and auth boundaries.",
          impact:
            "Established a production-shaped foundation for real-time game flows and progressive feature delivery.",
          category: "Realtime Product",
          facets: ["Node.js", "Express", "Socket.io", "JavaScript"],
          decisions: [
            "Event-driven room orchestration for real-time consistency",
            "Transport-level validation before gameplay actions",
            "Incremental architecture to separate game logic from delivery channels",
          ],
          metrics: [
            { label: "Mode", value: "Multiplayer realtime" },
            { label: "Stack", value: "Express + Socket.io" },
            { label: "Scope", value: "Frontend + backend" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Impostor",
            demo: "https://impostor-chi-ecru.vercel.app",
          },
        },
        {
          id: "tugestionamiga",
          name: "TuGestionAmiga",
          type: "Library Management System",
          previewImage:
            "https://opengraph.githubassets.com/1/Miguel-Bayter/TuGestionAmiga",
          previewLabel: "Catalog, loans, and admin workflows",
          cta: "Monorepo setup with typed contracts, Prisma-backed transactional flows, and route-level role enforcement for operational consistency.",
          summary:
            "Library management platform handling catalog, shopping cart, rentals, returns, and admin supervision.",
          problem:
            "Book sales and rental flows needed stricter role control, persistent state, and transaction safety.",
          solution:
            "Implemented monorepo frontend/backend with i18n-first UX, protected routes, and transactional checkout/loan flows.",
          impact:
            "Improved operational reliability for inventory and returns while supporting multilingual product growth.",
          category: "Operations Platform",
          facets: ["React 19", "TypeScript", "Prisma", "i18n"],
          decisions: [
            "Strict ADMIN/USER role boundaries across routes and actions",
            "Transactional checkout + rental/return integrity",
            "Frontend fully prepared for English/Spanish localization",
          ],
          metrics: [
            { label: "Architecture", value: "Monorepo frontend/backend" },
            { label: "Core Flows", value: "Catalog + cart + loans" },
            { label: "Auth", value: "Role-protected routes" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/TuGestionAmiga",
            demo: "",
          },
        },
      ],
    },
    caseStudy: {
      title: "Hiring Readiness Snapshot",
      subtitle:
        "The signals technical teams review before moving candidates to interview loops.",
      signals: [
        {
          label: "Ownership",
          value: "Scope to release",
          note: "I cover interface flow, API logic, data model decisions, and deployment notes.",
        },
        {
          label: "Execution",
          value: "Reliable delivery",
          note: "I work in feature slices with clear acceptance criteria and progress visibility.",
        },
        {
          label: "Communication",
          value: "Cross-team clarity",
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
      title: "Capabilities and Development Practices",
      subtitle:
        "Capabilities mapped to delivery behavior, not just technology labels.",
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
        "Open to fullstack product roles where ownership, quality, and business impact matter.",
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
        sending: "Sending...",
        cancel: "Cancel",
        sent: "Message sent successfully. I will get back to you soon.",
        error: "Could not send the message. Please try again in a moment.",
        invalidEmail: "Please enter a valid email address.",
        required: "Please complete all required fields.",
      },
    },
    footer: "Miguel Eduardo Bayter Quintana - 2026",
  },
  es: {
    role: "Desarrollador Fullstack | Tecnologo en Analisis y Desarrollo de Software",
    focus:
      "Entrego productos listos para produccion desde UX hasta arquitectura de API.",
    availability: "Disponible para roles full-time · LATAM / Remoto",
    a11y: {
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
      title: "Portafolio de Desarrollador Fullstack",
      subtitle:
        "Entrega end-to-end de producto con resultados medibles para negocio.",
      profileLinkLabel: "Abrir perfil de LinkedIn",
      proofLabel: "Evidencia para contratacion",
      proofItems: [
        "Responsabilidad de alcance y ejecucion",
        "Metricas de impacto alineadas al negocio",
      ],
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
        "Este portafolio esta estructurado para reclutadores y lideres tecnicos: evidencia rapida, restricciones reales y resultados medibles.",
      ctaPrimary: "Ver Proyectos",
      ctaSecondary: "Contactarme",
      metrics: [
        { label: "Rutas clave", value: "3 flujos de producto" },
        { label: "Stack principal", value: "React + Node + PostgreSQL" },
        { label: "Metodo de entrega", value: "Feature slices + QA" },
      ],
    },
    overview: {
      title: "Technology Stack",
      hero: {
        nameLine: "Soy Miguel Bayter",
        roleLinePrefix: "Desarrollador de Software",
        roleLineHighlight: "Fullstack",
        roleLineSuffix: "",
        description:
          "Construyo experiencias de Software confiables en frontend y backend, equilibrando velocidad de entrega, calidad y comunicacion para equipos reales.",
        ctaPrimary: "Ver Proyectos",
        ctaSecondary: "Contactarme",
      },
      proofTitle: "Franja de evidencia",
      proofAction: "Abrir tablero de proyectos",
      techStack: {
        a11yLabel: "Carrusel de stack tecnologico",
        prev: "Tecnologias anteriores",
        next: "Siguientes tecnologias",
        items: [
          { name: "HTML5", icon: "html", tone: "orange", rank: 1 },
          { name: "CSS3", icon: "css", tone: "blue", rank: 2 },
          { name: "JavaScript", icon: "javascript", tone: "amber", rank: 3 },
          { name: "Git", icon: "git", tone: "orange", rank: 4 },
          { name: "React", icon: "react", tone: "indigo", rank: 5 },
          { name: "Tailwind CSS", icon: "tailwind", tone: "cyan", rank: 6 },
          { name: "TypeScript", icon: "typescript", tone: "blue", rank: 7 },
          { name: "Node.js", icon: "nodejs", tone: "green", rank: 8 },
          { name: "Express", icon: "express", tone: "slate", rank: 9 },
          { name: "SQLite", icon: "sqlite", tone: "indigo", rank: 10 },
          { name: "MongoDB", icon: "mongodb", tone: "forest", rank: 11 },
          { name: "Prisma", icon: "prisma", tone: "indigo", rank: 12 },
          { name: "Docker", icon: "docker", tone: "cyan", rank: 13 },
        ],
      },
    },
    projects: {
      title: "Portafolio de Proyectos",
      subtitle:
        "Proyectos orientados a produccion con contexto de entrega, decisiones tecnicas e impacto medible.",
      linksLabel: "Enlaces",
      repo: "Repositorio",
      demo: "Demo",
      noDemo: "Mantenimiento",
      languageLabel: "Lenguaje",
      facetCta: {
        language: "Las decisiones de lenguaje tipado mantienen la logica de dominio explicita y reducen ambiguedad entre cliente y servidor.",
        framework: "La estructura de componentes y renderizado prioriza transiciones de estado predecibles y composicion reutilizable.",
        backend: "Los limites de servicio y flujo de requests se organizan para comportamiento deterministico bajo concurrencia.",
        data: "El acceso a datos se modela con operaciones orientadas a integridad y comportamiento transaccional predecible.",
        cross: "Los concerns transversales se resuelven con convenciones explicitas de localizacion, consistencia y mantenibilidad.",
      },
      facetSpecificCta: {
        "node.js": "Node.js se usa por su event loop no bloqueante y throughput estable en sesiones concurrentes con websockets.",
        express: "Express organiza rutas y capas de middleware con limites explicitos de validacion por request.",
        "socket.io": "Socket.io coordina ciclo de salas, eventos por rol y garantias de sincronizacion en tiempo real.",
        javascript: "La logica central de juego e interaccion se implementa en JavaScript con control orientado a eventos.",
        "react 19": "React 19 soporta estados interactivos con renderizado predecible y composicion escalable de componentes.",
        typescript: "TypeScript aplica contratos explicitos entre UI y servicios para reducir ambiguedad en runtime.",
        prisma: "Prisma modela integridad relacional y operaciones transaccionales para flujos criticos de checkout y devolucion.",
        i18n: "La internacionalizacion se integra en el flujo de UI para mantener consistencia de contenido, rutas y etiquetas entre idiomas.",
      },
      filterAll: "Todos",
      filtersOpen: "Mostrar filtros",
      filtersClose: "Ocultar filtros",
      emptyStateTitle: "Sin resultados",
      emptyStateText: "No hay proyectos para este filtro. Prueba con otro stack.",
      filterGroups: {
        language: "Lenguajes",
        framework: "Frameworks",
        backend: "Backend",
        data: "Datos",
        cross: "Transversal",
      },
      detailHint:
        "Los resumenes de tarjeta son intencionalmente breves. Ve a Perfil para empresas para mas contexto.",
      caseStudy: "Detalle",
      problemLabel: "Problema",
      solutionLabel: "Solucion",
      impactLabel: "Impacto",
      items: [
        {
          id: "impostor",
          name: "Impostor",
          type: "Juego Fullstack Multijugador",
          previewImage:
            "https://opengraph.githubassets.com/1/Miguel-Bayter/Impostor",
          previewLabel: "Salas en tiempo real y sincronizacion de roles",
          cta: "Arquitectura orientada a eventos con control de ciclo de salas en Socket.io, estado de roles deterministico y manejo sensible a latencia.",
          summary:
            "Juego social multijugador online con salas en tiempo real, logica de roles y sincronizacion de estado.",
          problem:
            "El prototipo local no tenia una base estable para coordinar jugadores y reglas por rol.",
          solution:
            "Disene una arquitectura separada frontend/backend con canales Socket.io y control de ciclo de salas.",
          impact:
            "Dejo una base real de produccion para evolucionar flujos multijugador con menor riesgo tecnico.",
          category: "Producto en tiempo real",
          facets: ["Node.js", "Express", "Socket.io", "JavaScript"],
          decisions: [
            "Orquestacion por eventos para consistencia en tiempo real",
            "Validacion de acciones antes de ejecutar jugadas",
            "Arquitectura incremental separando logica de juego y transporte",
          ],
          metrics: [
            { label: "Modo", value: "Tiempo real multijugador" },
            { label: "Stack", value: "Express + Socket.io" },
            { label: "Alcance", value: "Frontend + backend" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Impostor",
            demo: "https://impostor-chi-ecru.vercel.app",
          },
        },
        {
          id: "tugestionamiga",
          name: "TuGestionAmiga",
          type: "Sistema de Gestion Bibliotecaria",
          previewImage:
            "https://opengraph.githubassets.com/1/Miguel-Bayter/TuGestionAmiga",
          previewLabel: "Catalogo, prestamos y flujos administrativos",
          cta: "Estructura monorepo con contratos tipados, flujos transaccionales sobre Prisma y enforcement de roles a nivel de rutas para consistencia operativa.",
          summary:
            "Plataforma de gestion bibliotecaria para catalogo, carrito, prestamos, devoluciones y supervision administrativa.",
          problem:
            "Los flujos de venta y renta requerian mayor control de roles, persistencia de estado e integridad transaccional.",
          solution:
            "Implemente monorepo frontend/backend con i18n-first, rutas protegidas y operaciones criticas transaccionales.",
          impact:
            "Mejoro la confiabilidad operativa de inventario y devoluciones, habilitando crecimiento multilenguaje.",
          category: "Plataforma operativa",
          facets: ["React 19", "TypeScript", "Prisma", "i18n"],
          decisions: [
            "Limites estrictos entre roles ADMIN y USER",
            "Checkout y devoluciones con integridad transaccional",
            "Frontend preparado para localizacion completa EN/ES",
          ],
          metrics: [
            { label: "Arquitectura", value: "Monorepo frontend/backend" },
            { label: "Flujos", value: "Catalogo + carrito + prestamos" },
            { label: "Auth", value: "Rutas protegidas por rol" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/TuGestionAmiga",
            demo: "",
          },
        },
      ],
    },
    caseStudy: {
      title: "Resumen de encaje para contratacion",
      subtitle:
        "Senales que los equipos tecnicos revisan antes de avanzar a entrevistas.",
      signals: [
        {
          label: "Responsabilidad",
          value: "Alcance a release",
          note: "Cubro flujo de interfaz, logica API, decisiones de datos y notas de despliegue.",
        },
        {
          label: "Ejecucion",
          value: "Entrega confiable",
          note: "Trabajo por feature slices con criterio de aceptacion y visibilidad de avance.",
        },
        {
          label: "Comunicacion",
          value: "Claridad entre equipos",
          note: "Explico tradeoffs en lenguaje claro para Software, diseño y tecnologia.",
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
            "Mapear flujos de Software y restricciones tecnicas rapido",
            "Entregar una feature acotada de UI a API",
            "Dejar patrones reutilizables para escalar en equipo",
          ],
        },
      ],
    },
    stack: {
      title: "Capacidades y practicas de desarrollo",
      subtitle:
        "Capacidades mapeadas a habitos de entrega concretos, no solo etiquetas tecnicas.",
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
        "Disponible para roles fullstack de producto con foco en responsabilidad, calidad e impacto de negocio.",
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
        sending: "Enviando...",
        cancel: "Cancelar",
        sent: "Mensaje enviado correctamente. Te respondere pronto.",
        error:
          "No se pudo enviar el mensaje. Intentalo de nuevo en un momento.",
        invalidEmail: "Ingresa un correo valido.",
        required: "Completa todos los campos obligatorios.",
      },
    },
    footer: "Miguel Eduardo Bayter Quintana - 2026",
  },
};
