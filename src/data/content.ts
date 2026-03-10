import type { Content } from "../types";
import impostorRealPreview from "../img/projects/impostor-real.png";
import tuGestionAmigaRealPreview from "../img/projects/tugestionamiga-real.png";
import invygoRealPreview from "../img/projects/invygo-real.jpg";
import misionTicGeneral from "../certifications/MISION TIC 2022/Curso y terminó exitosamente el programa Misión TIC .pdf";
import misionTicPython from "../certifications/MISION TIC 2022/Fundamentos de Programacion con Python.pdf";
import misionTicJavaBasic from "../certifications/MISION TIC 2022/Programacion Basica con Lenguaje de Programacion Java.pdf";
import misionTicJavaDev from "../certifications/MISION TIC 2022/Desarrollo de Software con Lenguaje de Programacion Java.pdf";
import misionTicWeb from "../certifications/MISION TIC 2022/Habilidades en Programacion con Enfasis en Aplicaciones Web.pdf";
import senaMobile from "../certifications/CURSOS SENA/Programacion de Dispositivos Moviles.pdf";

export const content: Content = {
  en: {
    role: "Fullstack Software Developer | Software Analysis and Development Technologist",
    focus: "I ship production-ready products from UX to API architecture.",
    availability: "Open to full-time roles · LATAM / Remote",
    a11y: {
      toggleLanguage: "Switch language",
      toggleTheme: "Switch color theme",
      navigation: "Navigation",
    },
    nav: {
      overview: "Overview",
      projects: "Projects",
      profile: "Profile",
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
      title: "Technology Stack",
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
      pulseMetrics: "Metrics",
      pulseDecisions: "Architecture",
      pulseImpact: "Impact",
      facetCta: {
        language:
          "Typed language decisions keep domain logic explicit and reduce ambiguity across client-server boundaries.",
        framework:
          "Component and rendering structure prioritize predictable state transitions and composable UI behavior.",
        backend:
          "Service boundaries and request flow are organized for deterministic behavior under concurrent interactions.",
        data: "Data access is modeled with integrity-first operations and predictable transactional behavior.",
        cross:
          "Cross-cutting concerns are handled with explicit conventions for localization, consistency, and maintainability.",
      },
      facetSpecificCta: {
        "node.js":
          "Node.js runtime is used for non-blocking event loops and stable websocket throughput during concurrent sessions.",
        express:
          "Express handles routing and middleware layering with explicit request validation boundaries.",
        "socket.io":
          "Socket.io channels coordinate room lifecycle, role events, and real-time synchronization guarantees.",
        javascript:
          "Core gameplay and interaction logic is implemented in JavaScript with event-driven control paths.",
        "react 19":
          "React 19 powers interactive UI states with predictable rendering and scalable component composition.",
        typescript:
          "TypeScript enforces explicit contracts across UI and service boundaries to reduce runtime ambiguity.",
        prisma:
          "Prisma models relational integrity and transactional data operations for critical checkout and return flows.",
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
          order: 1,
          name: "Impostor",
          type: "Multiplayer Fullstack Game",
          previewImage: impostorRealPreview,
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
          order: 2,
          name: "TuGestionAmiga",
          type: "Library Management System",
          previewImage: tuGestionAmigaRealPreview,
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
        {
          id: "invygo",
          order: 3,
          name: "InvYGO",
          type: "Inventory and Catalog Platform",
          previewImage: invygoRealPreview,
          previewLabel:
            "Interactive catalog flows and configurable carousel behavior",
          cta: "Feature-oriented frontend architecture with route-level separation, i18n-ready UI, and configurable state-driven interactions.",
          summary:
            "Product-style React platform for catalog and inventory views with dynamic carousel configuration and localized UX.",
          problem:
            "The catalog experience needed structured routing, reusable UI layers, and predictable state updates for configurable interactions.",
          solution:
            "Built a TypeScript monorepo workspace with modular pages, typed state flows, and internationalization support integrated into navigation and views.",
          impact:
            "Delivers a cleaner baseline for scaling product modules while preserving consistency in interaction patterns and multilingual presentation.",
          category: "Product Interface Platform",
          facets: ["React 19", "TypeScript", "i18n", "JavaScript"],
          decisions: [
            "Route-based page boundaries for clearer ownership and feature scaling",
            "Centralized state transitions for carousel configurability",
            "Translation-first UI structure for language-safe expansion",
          ],
          metrics: [
            { label: "Architecture", value: "Workspace web app" },
            { label: "Core Flows", value: "Catalog + inventory + carousel" },
            { label: "Language", value: "TypeScript-first" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/InvYGO",
            demo: "https://invygo.netlify.app",
          },
        },
      ],
    },
    profile: {
      title: "Professional Profile",
      subtitle:
        "Resume-style snapshot focused on education and technical training.",
      statusLabel: "Education",
      statusValue: "Internship-ready",
      summary:
        "Technologist student in Software Analysis and Development with applied training in requirements analysis, data/process modeling, software design, development, testing, databases, APIs, and documentation. Seeking internship opportunities to contribute to real product delivery.",
      schoolingTitle: "Schooling",
      cvLabel: "Download CV",
      certificatesLabel: "Download certificates",
      skills: {
        title: "Key skills",
        items: [
          "React + TypeScript",
          "Node.js + Express",
          "REST API design",
          "SQL fundamentals",
          "Frontend architecture",
          "Git + GitHub workflows",
          "Responsive UI",
          "i18n-ready interfaces",
        ],
      },
      education: [
        {
          title: "Software Analysis and Development (Technologist)",
          institution: "SENA",
          period: "In progress",
          note:
            "Curriculum covers requirements analysis, data/process modeling, software design, development, testing, databases, APIs, documentation, and version control through applied projects.",
        },
      ],
      programs: [
        {
          title: "MISION TIC 2022",
          subtitle: "Ministerio TIC",
          items: [
            "Programming Fundamentals with Python",
            "Basic Programming with Java",
            "Software Development with Java",
            "Programming Skills with Emphasis on Web Applications",
          ],
          certificates: [
            { label: "Mision TIC completion", href: misionTicGeneral },
            { label: "Python fundamentals", href: misionTicPython },
            { label: "Java programming basics", href: misionTicJavaBasic },
            { label: "Java software development", href: misionTicJavaDev },
            { label: "Web app programming skills", href: misionTicWeb },
          ],
        },
        {
          title: "SENA Courses",
          subtitle: "Technical training",
          items: ["Mobile device programming"],
          certificates: [
            { label: "Mobile device programming", href: senaMobile },
          ],
        },
      ],
      schooling: [
        {
          title: "Academic High School Diploma",
          institution: "Corporacion Educativa Soledad Acosta de Samper",
          period: "Secondary",
        },
        {
          title: "Primary Education",
          institution: "Corporacion Educativa Colegio Alter - Alteris",
          period: "Primary",
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
    role: "Desarrollador Fullstack | Tecnólogo en Análisis y Desarrollo de Software",
    focus:
      "Entrego productos listos para producción desde UX hasta arquitectura de API.",
    availability: "Disponible para roles full-time · LATAM / Remoto",
    a11y: {
      toggleLanguage: "Cambiar idioma",
      toggleTheme: "Cambiar tema de color",
      navigation: "Navegación",
    },
    nav: {
      overview: "Resumen",
      projects: "Proyectos",
      profile: "Perfil",
      stack: "Capacidades",
      contact: "Contacto",
    },
    topbar: {
      title: "Portafolio de Desarrollador Fullstack",
      subtitle:
        "Entrega end-to-end de producto con resultados medibles para negocio.",
      profileLinkLabel: "Abrir perfil de LinkedIn",
      proofLabel: "Evidencia para contratación",
      proofItems: [
        "Responsabilidad de alcance y ejecución",
        "Métricas de impacto alineadas al negocio",
      ],
      status: "Disponible para entrevistas",
      darkMode: "Oscuro",
      lightMode: "Claro",
      systemMode: "Sistema",
    },
    hero: {
      kicker: "Consola Fullstack de Entrega",
      title:
        "Diseño y construyo software que pasa de concepto a producción con tradeoffs técnicos claros.",
      subtitle:
        "Este portafolio está estructurado para reclutadores y líderes técnicos: evidencia rápida, restricciones reales y resultados medibles.",
      ctaPrimary: "Ver Proyectos",
      ctaSecondary: "Contactarme",
      metrics: [
        { label: "Rutas clave", value: "3 flujos de producto" },
        { label: "Stack principal", value: "React + Node + PostgreSQL" },
        { label: "Método de entrega", value: "Feature slices + QA" },
      ],
    },
    overview: {
      title: "Stack Tecnológico",
      hero: {
        nameLine: "Soy Miguel Bayter",
        roleLinePrefix: "Desarrollador de Software",
        roleLineHighlight: "Fullstack",
        roleLineSuffix: "",
        description:
          "Construyo experiencias de software confiables en frontend y backend, equilibrando velocidad de entrega, calidad y comunicación para equipos reales.",
        ctaPrimary: "Ver Proyectos",
        ctaSecondary: "Contactarme",
      },
      proofTitle: "Franja de evidencia",
      proofAction: "Abrir tablero de proyectos",
      techStack: {
        a11yLabel: "Carrusel de stack tecnológico",
        prev: "Tecnologías anteriores",
        next: "Siguientes tecnologías",
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
        "Proyectos orientados a producción con contexto de entrega, decisiones técnicas e impacto medible.",
      linksLabel: "Enlaces",
      repo: "Repositorio",
      demo: "Demo",
      noDemo: "Mantenimiento",
      languageLabel: "Lenguaje",
      pulseMetrics: "Métricas",
      pulseDecisions: "Arquitectura",
      pulseImpact: "Impacto",
      facetCta: {
        language:
          "Las decisiones de lenguaje tipado mantienen la lógica de dominio explícita y reducen ambigüedad entre cliente y servidor.",
        framework:
          "La estructura de componentes y renderizado prioriza transiciones de estado predecibles y composición reutilizable.",
        backend:
          "Los límites de servicio y flujo de requests se organizan para comportamiento determinístico bajo concurrencia.",
        data: "El acceso a datos se modela con operaciones orientadas a integridad y comportamiento transaccional predecible.",
        cross:
          "Los concerns transversales se resuelven con convenciones explícitas de localización, consistencia y mantenibilidad.",
      },
      facetSpecificCta: {
        "node.js":
          "Node.js se usa por su event loop no bloqueante y throughput estable en sesiones concurrentes con websockets.",
        express:
          "Express organiza rutas y capas de middleware con límites explícitos de validación por request.",
        "socket.io":
          "Socket.io coordina ciclo de salas, eventos por rol y garantías de sincronización en tiempo real.",
        javascript:
          "La lógica central de juego e interacción se implementa en JavaScript con control orientado a eventos.",
        "react 19":
          "React 19 soporta estados interactivos con renderizado predecible y composición escalable de componentes.",
        typescript:
          "TypeScript aplica contratos explícitos entre UI y servicios para reducir ambigüedad en runtime.",
        prisma:
          "Prisma modela integridad relacional y operaciones transaccionales para flujos críticos de checkout y devolución.",
        i18n: "La internacionalización se integra en el flujo de UI para mantener consistencia de contenido, rutas y etiquetas entre idiomas.",
      },
      filterAll: "Todos",
      filtersOpen: "Mostrar filtros",
      filtersClose: "Ocultar filtros",
      emptyStateTitle: "Sin resultados",
      emptyStateText:
        "No hay proyectos para este filtro. Prueba con otro stack.",
      filterGroups: {
        language: "Lenguajes",
        framework: "Frameworks",
        backend: "Backend",
        data: "Datos",
        cross: "Transversal",
      },
      detailHint:
        "Los resúmenes de tarjeta son intencionalmente breves. Ve a Perfil para empresas para más contexto.",
      caseStudy: "Detalle",
      problemLabel: "Problema",
      solutionLabel: "Solución",
      impactLabel: "Impacto",
      items: [
        {
          id: "impostor",
          order: 1,
          name: "Impostor",
          type: "Juego Fullstack Multijugador",
          previewImage: impostorRealPreview,
          previewLabel: "Salas en tiempo real y sincronización de roles",
          cta: "Arquitectura orientada a eventos con control de ciclo de salas en Socket.io, estado de roles determinístico y manejo sensible a latencia.",
          summary:
            "Juego social multijugador online con salas en tiempo real, lógica de roles y sincronización de estado.",
          problem:
            "El prototipo local no tenía una base estable para coordinar jugadores y reglas por rol.",
          solution:
            "Diseñé una arquitectura separada frontend/backend con canales Socket.io y control de ciclo de salas.",
          impact:
            "Dejó una base real de producción para evolucionar flujos multijugador con menor riesgo técnico.",
          category: "Producto en tiempo real",
          facets: ["Node.js", "Express", "Socket.io", "JavaScript"],
          decisions: [
            "Orquestación por eventos para consistencia en tiempo real",
            "Validación de acciones antes de ejecutar jugadas",
            "Arquitectura incremental separando lógica de juego y transporte",
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
          order: 2,
          name: "TuGestionAmiga",
          type: "Sistema de Gestión Bibliotecaria",
          previewImage: tuGestionAmigaRealPreview,
          previewLabel: "Catálogo, préstamos y flujos administrativos",
          cta: "Estructura monorepo con contratos tipados, flujos transaccionales sobre Prisma y enforcement de roles a nivel de rutas para consistencia operativa.",
          summary:
            "Plataforma de gestión bibliotecaria para catálogo, carrito, préstamos, devoluciones y supervisión administrativa.",
          problem:
            "Los flujos de venta y renta requerían mayor control de roles, persistencia de estado e integridad transaccional.",
          solution:
            "Implementé monorepo frontend/backend con i18n-first, rutas protegidas y operaciones críticas transaccionales.",
          impact:
            "Mejoró la confiabilidad operativa de inventario y devoluciones, habilitando crecimiento multilenguaje.",
          category: "Plataforma operativa",
          facets: ["React 19", "TypeScript", "Prisma", "i18n"],
          decisions: [
            "Límites estrictos entre roles ADMIN y USER",
            "Checkout y devoluciones con integridad transaccional",
            "Frontend preparado para localización completa EN/ES",
          ],
          metrics: [
            { label: "Arquitectura", value: "Monorepo frontend/backend" },
            { label: "Flujos", value: "Catálogo + carrito + préstamos" },
            { label: "Auth", value: "Rutas protegidas por rol" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/TuGestionAmiga",
            demo: "",
          },
        },
        {
          id: "invygo",
          order: 3,
          name: "InvYGO",
          type: "Plataforma de Inventario y Catálogo",
          previewImage: invygoRealPreview,
          previewLabel:
            "Flujos de catálogo interactivos y carrusel configurable",
          cta: "Arquitectura frontend orientada a features con separación por rutas, UI preparada para i18n e interacciones configurables por estado.",
          summary:
            "Plataforma React estilo producto para catálogo e inventario con configuración dinámica de carrusel y experiencia localizada.",
          problem:
            "La experiencia de catálogo requería rutas claras, capas UI reutilizables y actualizaciones de estado predecibles para interacciones configurables.",
          solution:
            "Construí un workspace TypeScript con páginas modulares, flujos de estado tipados y soporte de internacionalización integrado en navegación y vistas.",
          impact:
            "Entrega una base más limpia para escalar módulos de producto manteniendo consistencia en patrones de interacción y presentación multilenguaje.",
          category: "Plataforma de interfaz de producto",
          facets: ["React 19", "TypeScript", "i18n", "JavaScript"],
          decisions: [
            "Límites por rutas para ownership más claro y escalado por feature",
            "Transiciones de estado centralizadas para configurar el carrusel",
            "Estructura UI translation-first para expansión segura por idioma",
          ],
          metrics: [
            { label: "Arquitectura", value: "Workspace web app" },
            { label: "Flujos", value: "Catálogo + inventario + carrusel" },
            { label: "Lenguaje", value: "TypeScript-first" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/InvYGO",
            demo: "https://invygo.netlify.app",
          },
        },
      ],
    },
    profile: {
      title: "Perfil Profesional",
      subtitle:
        "Seccion tipo hoja de vida enfocada en estudios y formacion tecnica.",
      statusLabel: "Estudios",
      statusValue: "En busqueda de practicas",
      summary:
        "Tecnologo en Analisis y Desarrollo de Software en formacion, con entrenamiento aplicado en analisis de requerimientos, modelado de datos y procesos, diseno de software, desarrollo, pruebas, bases de datos, APIs y documentacion. En busqueda de practicas para aportar en productos reales.",
      schoolingTitle: "Escolaridad",
      cvLabel: "Descargar CV",
      certificatesLabel: "Descargar certificados",
      skills: {
        title: "Skills clave",
        items: [
          "React + TypeScript",
          "Node.js + Express",
          "Diseno de API REST",
          "Fundamentos de SQL",
          "Arquitectura frontend",
          "Git + GitHub",
          "UI responsive",
          "Interfaces con i18n",
        ],
      },
      education: [
        {
          title: "Tecnologo en Analisis y Desarrollo de Software",
          institution: "SENA",
          period: "En curso",
          note:
            "Formacion en analisis de requerimientos, modelado de datos y procesos, diseno de software, desarrollo, pruebas, bases de datos, APIs, documentacion y control de versiones con proyectos aplicados.",
        },
      ],
      programs: [
        {
          title: "MISION TIC 2022",
          subtitle: "Ministerio TIC",
          items: [
            "Fundamentos de Programacion con Python",
            "Programacion Basica con Lenguaje de Programacion Java",
            "Desarrollo de Software con Lenguaje de Programacion Java",
            "Habilidades en Programacion con Enfasis en Aplicaciones Web",
          ],
          certificates: [
            { label: "Certificado general Mision TIC", href: misionTicGeneral },
            { label: "Fundamentos de Python", href: misionTicPython },
            { label: "Programacion basica en Java", href: misionTicJavaBasic },
            { label: "Desarrollo de software en Java", href: misionTicJavaDev },
            { label: "Aplicaciones web", href: misionTicWeb },
          ],
        },
        {
          title: "Cursos SENA",
          subtitle: "Formacion tecnica",
          items: ["Programacion de Dispositivos Moviles"],
          certificates: [
            { label: "Programacion de dispositivos moviles", href: senaMobile },
          ],
        },
      ],
      schooling: [
        {
          title: "Bachiller Academico",
          institution: "Corporacion Educativa Soledad Acosta de Samper",
          period: "Secundaria",
        },
        {
          title: "Primaria",
          institution: "Corporacion Educativa Colegio Alter - Alteris",
          period: "Primaria",
        },
      ],
    },
    stack: {
      title: "Capacidades y prácticas de desarrollo",
      subtitle:
        "Capacidades mapeadas a hábitos de entrega concretos, no solo etiquetas técnicas.",
      items: [
        {
          area: "Entrega Frontend",
          criterion:
            "Priorizo patrones reutilizables, jerarquía clara y estados de UI resilientes.",
          tools: [
            "React",
            "Vite",
            "Arquitectura de componentes",
            "Estado por feature",
          ],
        },
        {
          area: "Backend y diseño de API",
          criterion: "Estructuro servicios por dominio y contratos explícitos.",
          tools: [
            "Node.js",
            "Express",
            "Diseño REST API",
            "Patrones de autenticación",
          ],
        },
        {
          area: "Datos y persistencia",
          criterion:
            "Modelo datos para mantenibilidad y consultas predecibles.",
          tools: [
            "PostgreSQL",
            "Modelo relacional",
            "Base de optimización de consultas",
          ],
        },
        {
          area: "Calidad y entrega",
          criterion:
            "Mantengo releases confiables con workflows repetibles y documentación clara.",
          tools: [
            "GitHub",
            "Actions CI/CD",
            "GitHub Pages",
            "Estándares de README",
          ],
        },
      ],
    },
    contact: {
      title: "Contratación y contacto",
      subtitle:
        "Disponible para roles fullstack de producto con foco en responsabilidad, calidad e impacto de negocio.",
      hiringKicker: "Disponible ahora",
      hiringTitle:
        "Listo para entrevistas técnicas y pruebas prácticas de código.",
      hiringSubtitle:
        "Me acoplo mejor a equipos que valoran arquitectura limpia, comunicación y consistencia de entrega.",
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
        messagePlaceholder: "Cuéntame sobre el rol o proyecto",
        submit: "Enviar",
        sending: "Enviando...",
        cancel: "Cancelar",
        sent: "Mensaje enviado correctamente. Te responderé pronto.",
        error:
          "No se pudo enviar el mensaje. Inténtalo de nuevo en un momento.",
        invalidEmail: "Ingresa un correo válido.",
        required: "Completa todos los campos obligatorios.",
      },
    },
    footer: "Miguel Eduardo Bayter Quintana - 2026",
  },
};
