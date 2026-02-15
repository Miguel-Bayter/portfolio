export const content = {
  en: {
    role: "Fullstack Developer",
    focus: "I ship production-ready products from UX to API architecture.",
    availability: "Open to full-time roles · LATAM / Remote",
    a11y: {
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
      title: "Technology Stack",
      hero: {
        nameLine: "I'm Miguel Bayter",
        roleLinePrefix: "",
        roleLineHighlight: "Fullstack",
        roleLineSuffix: "Developer",
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
          { name: "Docker", icon: "docker", tone: "cyan", rank: 12 },
        ],
      },
    },
    projects: {
      title: "Project Portfolio",
      subtitle:
        "Real repositories with delivery context, stack, and execution quality.",
      linksLabel: "Links",
      repo: "Repository",
      demo: "Live Demo",
      noDemo: "No live demo",
      caseStudy: "Case Study",
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
          previewLabel: "Real-time social deduction architecture",
          summary:
            "Online multiplayer social deduction game with real-time rooms, role logic, and synchronized interactions.",
          problem:
            "A local game prototype lacked stable multiplayer coordination and role-safe gameplay at scale.",
          solution:
            "Designed a split frontend/backend architecture with Socket.io channels, room lifecycle control, and auth boundaries.",
          impact:
            "Established a production-shaped foundation for real-time game flows and progressive feature delivery.",
          facets: ["Node.js", "Express", "Socket.io", "JavaScript"],
          statusKey: "up",
          health: "Healthy",
          completion: "74%",
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
          previewLabel: "Commerce + rentals + admin operations",
          summary:
            "Library management platform handling catalog, shopping cart, rentals, returns, and admin supervision.",
          problem:
            "Book sales and rental flows needed stricter role control, persistent state, and transaction safety.",
          solution:
            "Implemented monorepo frontend/backend with i18n-first UX, protected routes, and transactional checkout/loan flows.",
          impact:
            "Improved operational reliability for inventory and returns while supporting multilingual product growth.",
          facets: ["React 19", "TypeScript", "Prisma", "i18n"],
          statusKey: "stable",
          health: "Stable",
          completion: "86%",
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
        sending: "Sending...",
        cancel: "Cancel",
        sent: "Message sent successfully. I will get back to you soon.",
        error: "Could not send the message. Please try again in a moment.",
        invalidEmail: "Please enter a valid email address.",
        required: "Please complete all required fields.",
      },
    },
    drawer: {
      title: "Project Pulse",
      open: "Open Pulse",
      close: "Close Pulse",
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
      title: "Technology Stack",
      hero: {
        nameLine: "Soy Miguel Bayter",
        roleLinePrefix: "Desarrollador",
        roleLineHighlight: "Fullstack",
        roleLineSuffix: "",
        description:
          "Construyo experiencias de producto confiables en frontend y backend, equilibrando velocidad de entrega, calidad y comunicacion para equipos reales.",
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
          { name: "Docker", icon: "docker", tone: "cyan", rank: 12 },
        ],
      },
    },
    projects: {
      title: "Portafolio de Proyectos",
      subtitle:
        "Repositorios reales con contexto de entrega, stack y calidad de ejecucion.",
      linksLabel: "Enlaces",
      repo: "Repositorio",
      demo: "Demo",
      noDemo: "Sin demo",
      caseStudy: "Caso",
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
          previewLabel: "Arquitectura social en tiempo real",
          summary:
            "Juego social multijugador online con salas en tiempo real, logica de roles y sincronizacion de estado.",
          problem:
            "El prototipo local no tenia una base estable para coordinar jugadores y reglas por rol.",
          solution:
            "Disene una arquitectura separada frontend/backend con canales Socket.io y control de ciclo de salas.",
          impact:
            "Dejo una base real de produccion para evolucionar flujos multijugador con menor riesgo tecnico.",
          facets: ["Node.js", "Express", "Socket.io", "JavaScript"],
          statusKey: "up",
          health: "Saludable",
          completion: "74%",
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
          previewLabel: "Compras + prestamos + panel admin",
          summary:
            "Plataforma de gestion bibliotecaria para catalogo, carrito, prestamos, devoluciones y supervision administrativa.",
          problem:
            "Los flujos de venta y renta requerian mayor control de roles, persistencia de estado e integridad transaccional.",
          solution:
            "Implemente monorepo frontend/backend con i18n-first, rutas protegidas y operaciones criticas transaccionales.",
          impact:
            "Mejoro la confiabilidad operativa de inventario y devoluciones, habilitando crecimiento multilenguaje.",
          facets: ["React 19", "TypeScript", "Prisma", "i18n"],
          statusKey: "stable",
          health: "Estable",
          completion: "86%",
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
        sending: "Enviando...",
        cancel: "Cancelar",
        sent: "Mensaje enviado correctamente. Te respondere pronto.",
        error:
          "No se pudo enviar el mensaje. Intentalo de nuevo en un momento.",
        invalidEmail: "Ingresa un correo valido.",
        required: "Completa todos los campos obligatorios.",
      },
    },
    drawer: {
      title: "Pulso del proyecto",
      open: "Abrir Pulso",
      close: "Cerrar Pulso",
      status: "Estado",
      completion: "Avance",
      decisions: "Decisiones de ingenieria",
      metrics: "Metricas de entrega",
      impact: "Impacto de negocio",
    },
    footer: "Miguel Eduardo Bayter Quintana - 2026",
  },
};
