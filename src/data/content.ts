import type { Content } from "../types";
import impostorRealPreview from "../img/projects/impostor-real.png";
import tuGestionAmigaRealPreview from "../img/projects/tugestionamiga-real.png";
import invygoRealPreview from "../img/projects/invygo-real.jpg";
import danuPreview from "../img/projects/danu-real.png";
import misionTicGeneral from "../certifications/MISION TIC 2022/Curso y terminó exitosamente el programa Misión TIC .pdf";
import misionTicPython from "../certifications/MISION TIC 2022/Fundamentos de Programacion con Python.pdf";
import misionTicJavaBasic from "../certifications/MISION TIC 2022/Programacion Basica con Lenguaje de Programacion Java.pdf";
import misionTicJavaDev from "../certifications/MISION TIC 2022/Desarrollo de Software con Lenguaje de Programacion Java.pdf";
import misionTicWeb from "../certifications/MISION TIC 2022/Habilidades en Programacion con Enfasis en Aplicaciones Web.pdf";
import senaMobile from "../certifications/CURSOS SENA/Programacion de Dispositivos Moviles.pdf";
import senaTechnologist from "../certifications/TECNOLOGA/CONSTANCIA DE ESTUDIO ANALISIS Y DESARROLLO DE SOFTWARE.pdf";

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
          { name: "TypeScript", icon: "typescript", tone: "blue", rank: 4 },
          { name: "React", icon: "react", tone: "indigo", rank: 5 },
          { name: "Next.js", icon: "nextjs", tone: "slate", rank: 6 },
          { name: "Node.js", icon: "nodejs", tone: "green", rank: 7 },
          { name: "Express", icon: "express", tone: "slate", rank: 8 },
          { name: "Tailwind CSS", icon: "tailwind", tone: "cyan", rank: 9 },
          { name: "Git", icon: "git", tone: "orange", rank: 10 },
          { name: "Prisma", icon: "prisma", tone: "indigo", rank: 11 },
          { name: "MongoDB", icon: "mongodb", tone: "forest", rank: 12 },
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
        nestjs:
          "NestJS provides a modular backend with gateways and controllers for realtime and REST entry points.",
        "next.js":
          "Next.js App Router enables server actions, routing, and rendering performance for SaaS flows.",
        javascript:
          "Core gameplay and interaction logic is implemented in JavaScript with event-driven control paths.",
        "react 19":
          "React 19 powers interactive UI states with predictable rendering and scalable component composition.",
        typescript:
          "TypeScript enforces explicit contracts across UI and service boundaries to reduce runtime ambiguity.",
        vite:
          "Vite keeps feedback loops fast with instant HMR and optimized TypeScript builds.",
        prisma:
          "Prisma models relational integrity and transactional data operations for critical checkout and return flows.",
        mongodb:
          "MongoDB persists realtime room state and player activity with flexible document models.",
        mysql:
          "MySQL provides structured storage for catalog, loan, and purchase records with Prisma migrations.",
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
          id: "danu",
          order: 3,
          createdAt: "2026-03-10",
          name: "Danu",
          type: "Project Management SaaS",
          previewImage: danuPreview,
          previewLabel: "Kanban + Gantt + realtime + PDF reports",
          cta: "Full-stack PM SaaS built on free-tier infra using Next.js App Router, Supabase Realtime, Auth.js v5, and PDF reporting.",
          summary:
            "Enterprise-ready project management SaaS with Kanban, Gantt, realtime collaboration, and audit-friendly PDF reporting.",
          problem:
            "Needed a production-grade PM tool with realtime collaboration and reporting while staying on $0/month infrastructure.",
          solution:
            "Implemented Next.js 16 + React 19 with Supabase Realtime, Prisma + Postgres, Auth.js v5, Tailwind + shadcn/ui, next-intl, and jsPDF exports.",
          impact:
            "Shipped a demo-ready SaaS with layered server architecture, realtime sync, and 90+ tests for reliability.",
          category: "SaaS Platform",
          facets: ["React 19", "TypeScript", "Next.js", "Prisma", "Tailwind", "i18n"],
          decisions: [
            "Realtime task sync and notifications via Supabase channels",
            "CSS Grid Gantt timeline with preset ranges",
            "Role-based workspaces with Auth.js and invite tokens",
          ],
          metrics: [
            { label: "Scope", value: "Full-stack SaaS" },
            { label: "Core Flows", value: "Kanban + Gantt + reports" },
            { label: "Infra", value: "Supabase + Vercel" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Danu",
            demo: "https://danu-eight.vercel.app/",
          },
        },
        {
          id: "impostor",
          order: 1,
          createdAt: "2024-10-18",
          name: "Impostor",
          type: "Multiplayer Monorepo",
          previewImage: impostorRealPreview,
          previewLabel: "React 19 + Vite + NestJS realtime",
          cta: "Impostor-style multiplayer monorepo with React 19/Vite, NestJS + Socket.IO, MongoDB, and shared type contracts.",
          summary:
            "Realtime multiplayer platform with shared contracts, deterministic room lifecycle, and scalable session orchestration.",
          problem:
            "Needed a monorepo that kept frontend, backend, and shared contracts aligned for realtime sessions.",
          solution:
            "Built pnpm workspaces with React 19 + Vite + Tailwind, NestJS gateway, Socket.IO events, MongoDB, and optional Redis support.",
          impact:
            "Delivered predictable room lifecycle orchestration with shared types and realtime reliability.",
          category: "Realtime Platform",
          facets: ["TypeScript", "React 19", "Vite", "Tailwind", "NestJS", "Socket.io", "MongoDB"],
          decisions: [
            "Event-driven room orchestration for realtime consistency",
            "Shared types package for FE/BE contract safety",
            "NestJS gateway with Socket.IO for scalable rooms",
          ],
          metrics: [
            { label: "Mode", value: "Realtime multiplayer" },
            { label: "Stack", value: "React + NestJS" },
            { label: "Scope", value: "Monorepo FE/BE" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Impostor",
            demo: "https://impostor-chi-ecru.vercel.app",
          },
        },
        {
          id: "tugestionamiga",
          order: 0,
          createdAt: "2024-08-22",
          name: "TuGestionAmiga",
          type: "Library Management Platform",
          previewImage: tuGestionAmigaRealPreview,
          previewLabel: "React 19 + Vite + Express + Prisma",
          cta: "Library monorepo with React 19 + Vite frontend and Express + Prisma 6 backend on MySQL.",
          summary:
            "Operational library system with role-based workflows, reliable transactions, and auditable inventory flows.",
          problem:
            "Needed role-safe inventory flows with reliable transactions and consistent database seeding.",
          solution:
            "Built a layered Express API (routes → services → database) with Prisma 6 + MySQL and a React 19 UI with i18next, React Router, and Tailwind.",
          impact:
            "Delivered a maintainable monorepo with seeded data, strong typing, and scalable service boundaries.",
          category: "Operations Platform",
          facets: ["React 19", "TypeScript", "Vite", "Tailwind", "Express", "Prisma", "MySQL", "i18n"],
          decisions: [
            "Layered backend (routes → services → database) for maintainability",
            "Prisma 6 with MySQL for schema control and seeding",
            "Frontend ready for Spanish/English localization",
          ],
          metrics: [
            { label: "Architecture", value: "Monorepo frontend/backend" },
            { label: "Core Flows", value: "Catalog + loans + purchases" },
            { label: "Data", value: "MySQL + Prisma" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/TuGestionAmiga",
            demo: "",
          },
        },
        {
          id: "invygo",
          order: 2,
          createdAt: "2025-11-05",
          name: "InvYGO",
          type: "Inventory & Catalog UI",
          previewImage: invygoRealPreview,
          previewLabel:
            "React 19 + Vite + React Query + Zustand",
          cta: "Inventory/catalog UI built with React 19, Vite, React Query, Zustand, and i18next.",
          summary:
            "Inventory/catalog UI with predictable state, async data orchestration, and localization-ready architecture.",
          problem:
            "Needed a fast, modular frontend with predictable state and multilingual-ready structure.",
          solution:
            "Implemented a Vite + React 19 app with React Router, TanStack Query, Zustand, and i18next.",
          impact:
            "Delivered a scalable frontend base for catalog interactions and future expansion.",
          category: "Product Interface",
          facets: ["React 19", "TypeScript", "Vite", "Tailwind", "i18n"],
          decisions: [
            "Route-based page boundaries for clearer ownership",
            "React Query + Zustand for async and UI state",
            "Translation-first UI structure for language-safe expansion",
          ],
          metrics: [
            { label: "Architecture", value: "Vite workspace app" },
            { label: "Core Flows", value: "Catalog + inventory" },
            { label: "State", value: "React Query + Zustand" },
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
      sectionLabels: {
        technicalTraining: "Technical training",
        courses: "Courses",
      },
      statusLabel: "Education",
      statusValue: "Internship-ready",
      summary:
        "Software Analysis and Development technologist with hands-on delivery across requirements, data/process modeling, software design, testing, databases, APIs, and technical documentation. Focused on reliable product delivery and team-ready execution.",
      schoolingTitle: "Schooling",
      cvLabel: "Download CV",
      certificatesLabel: "Download certificates",
      credentials: {
        title: "Credentials",
        tracksLabel: "Tracks",
        coursesLabel: "Courses",
        certificatesLabel: "Certificates",
      },
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
          period: "Completed",
          note:
            "Curriculum covers requirements analysis, data/process modeling, software design, development, testing, databases, APIs, documentation, and version control through applied projects.",
        },
      ],
      programs: [
        {
          title: "SENA Technologist",
          subtitle: "Software Analysis and Development",
          items: ["Enrollment certificate"],
          certificates: [
            { label: "Enrollment certificate: Software Analysis and Development 2024 - 2026", href: senaTechnologist },
          ],
        },
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
      deliverySignals: {
        title: "Key Capabilities",
        subtitle: "Indicators of quality, coordination, and consistent delivery.",
        items: [
          {
            area: "UX/UI collaboration",
            tools: [
              "Figma handoff",
              "UI copy polish",
              "Design QA",
              "UX feedback loops",
              "Component specs",
            ],
          },
          {
            area: "Frontend development",
            tools: [
              "Accessibility",
              "Performance checks",
              "State boundaries",
              "Component architecture",
              "Regression testing",
            ],
          },
          {
            area: "Backend development",
            tools: [
              "API contracts",
              "Auth + roles",
              "CI/CD deploy",
              "Observability basics",
              "Error handling",
            ],
          },
        ],
      },
    },
    stack: {
      title: "Skills",
      subtitle:
        "Skill groups shaped by delivery focus, not just tool labels.",
      items: [
        {
          area: "Interface Development",
          criterion:
            "I prioritize reusable patterns, clear hierarchy, and resilient UI states.",
          tools: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Vite",
            "Design handoff",
            "UI testing",
          ],
        },
        {
          area: "Backend Services",
          criterion:
            "I structure services around business domains and explicit contracts.",
          tools: [
            "Node.js",
            "Express",
            "REST APIs",
            "NestJS",
            "Socket.io",
            "API validation",
          ],
        },
        {
          area: "Data Management",
          criterion:
            "I model data for maintainability first, then tune for predictable queries.",
          tools: [
            "PostgreSQL",
            "MySQL",
            "Prisma",
            "MongoDB",
            "Supabase",
            "Query optimization",
          ],
        },
        {
          area: "Delivery Lifecycle",
          criterion:
            "I keep releases reliable with repeatable workflows and documentation discipline.",
          tools: [
            "GitHub",
            "GitHub Actions",
            "Docker",
            "Vercel/Netlify",
            "Testing discipline",
            "Monitoring basics",
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
          { name: "TypeScript", icon: "typescript", tone: "blue", rank: 4 },
          { name: "React", icon: "react", tone: "indigo", rank: 5 },
          { name: "Next.js", icon: "nextjs", tone: "slate", rank: 6 },
          { name: "Node.js", icon: "nodejs", tone: "green", rank: 7 },
          { name: "Express", icon: "express", tone: "slate", rank: 8 },
          { name: "Tailwind CSS", icon: "tailwind", tone: "cyan", rank: 9 },
          { name: "Git", icon: "git", tone: "orange", rank: 10 },
          { name: "Prisma", icon: "prisma", tone: "indigo", rank: 11 },
          { name: "MongoDB", icon: "mongodb", tone: "forest", rank: 12 },
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
        nestjs:
          "NestJS aporta un backend modular con gateways y controladores para entradas realtime y REST.",
        "next.js":
          "Next.js App Router habilita server actions, routing y rendimiento para flujos SaaS.",
        javascript:
          "La lógica central de juego e interacción se implementa en JavaScript con control orientado a eventos.",
        "react 19":
          "React 19 soporta estados interactivos con renderizado predecible y composición escalable de componentes.",
        typescript:
          "TypeScript aplica contratos explícitos entre UI y servicios para reducir ambigüedad en runtime.",
        vite:
          "Vite mantiene un loop rápido con HMR instantáneo y builds TypeScript optimizados.",
        prisma:
          "Prisma modela integridad relacional y operaciones transaccionales para flujos críticos de checkout y devolución.",
        mongodb:
          "MongoDB persiste estado de salas y actividad en tiempo real con modelos flexibles.",
        mysql:
          "MySQL soporta catálogo, préstamos y compras con migraciones gestionadas por Prisma.",
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
          id: "danu",
          order: 3,
          createdAt: "2026-03-10",
          name: "Danu",
          type: "SaaS de gestión de proyectos",
          previewImage: danuPreview,
          previewLabel: "Kanban + Gantt + realtime + reportes PDF",
          cta: "SaaS fullstack en free-tier con Next.js App Router, Supabase Realtime, Auth.js v5 y reportes PDF.",
          summary:
            "SaaS de gestión listo para empresa con Kanban, Gantt, colaboración realtime y reportes PDF auditables.",
          problem:
            "Se necesitaba una herramienta de PM lista para producción con colaboración realtime y reportes en infraestructura $0/mes.",
          solution:
            "Implementé Next.js 16 + React 19 con Supabase Realtime, Prisma + Postgres, Auth.js v5, Tailwind + shadcn/ui, next-intl y jsPDF.",
          impact:
            "Entregué un SaaS listo para demo con arquitectura por capas, sincronización realtime y 90+ tests.",
          category: "Plataforma SaaS",
          facets: ["React 19", "TypeScript", "Next.js", "Prisma", "Tailwind", "i18n"],
          decisions: [
            "Sincronización realtime de tareas y notificaciones con Supabase",
            "Timeline tipo Gantt con CSS Grid y rangos predefinidos",
            "Workspaces con roles en Auth.js e invitaciones tokenizadas",
          ],
          metrics: [
            { label: "Alcance", value: "SaaS fullstack" },
            { label: "Flujos", value: "Kanban + Gantt + reportes" },
            { label: "Infra", value: "Supabase + Vercel" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Danu",
            demo: "https://danu-eight.vercel.app/",
          },
        },
        {
          id: "impostor",
          order: 1,
          createdAt: "2024-10-18",
          name: "Impostor",
          type: "Monorepo multiplayer",
          previewImage: impostorRealPreview,
          previewLabel: "React 19 + Vite + NestJS realtime",
          cta: "Monorepo estilo Impostor con React 19/Vite, NestJS + Socket.IO, MongoDB y contratos compartidos.",
          summary:
            "Plataforma multiplayer en tiempo real con contratos compartidos y ciclo de vida de salas predecible.",
          problem:
            "Se necesitaba un monorepo que mantuviera frontend, backend y contratos alineados en sesiones realtime.",
          solution:
            "Workspaces pnpm con React 19 + Vite + Tailwind, gateway NestJS, eventos Socket.IO, MongoDB y soporte opcional de Redis.",
          impact:
            "Ciclo de vida de salas predecible con tipos compartidos y confiabilidad realtime.",
          category: "Plataforma realtime",
          facets: ["TypeScript", "React 19", "Vite", "Tailwind", "NestJS", "Socket.io", "MongoDB"],
          decisions: [
            "Orquestación de salas por eventos para consistencia realtime",
            "Paquete de tipos compartidos FE/BE",
            "Gateway NestJS con Socket.IO para escalabilidad",
          ],
          metrics: [
            { label: "Modo", value: "Multiplayer realtime" },
            { label: "Stack", value: "React + NestJS" },
            { label: "Scope", value: "Monorepo FE/BE" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Impostor",
            demo: "https://impostor-chi-ecru.vercel.app",
          },
        },
        {
          id: "tugestionamiga",
          order: 0,
          createdAt: "2024-08-22",
          name: "TuGestionAmiga",
          type: "Plataforma de biblioteca",
          previewImage: tuGestionAmigaRealPreview,
          previewLabel: "React 19 + Vite + Express + Prisma",
          cta: "Sistema de biblioteca en monorepo con frontend React 19 + Vite y backend Express + Prisma 6 sobre MySQL.",
          summary:
            "Sistema operativo de biblioteca con flujos por roles, transacciones confiables e inventario trazable.",
          problem:
            "Se requerían flujos con roles, transacciones confiables y seeding consistente de base de datos.",
          solution:
            "API Express por capas (routes → services → database) con Prisma 6 + MySQL y UI React 19 con i18next, React Router y Tailwind.",
          impact:
            "Monorepo mantenible con datos seed, tipado fuerte y límites claros de servicio.",
          category: "Plataforma operativa",
          facets: ["React 19", "TypeScript", "Vite", "Tailwind", "Express", "Prisma", "MySQL", "i18n"],
          decisions: [
            "Backend por capas (routes → services → database)",
            "Prisma 6 con MySQL para control de esquema y seeding",
            "Frontend preparado para ES/EN con i18next",
          ],
          metrics: [
            { label: "Arquitectura", value: "Monorepo frontend/backend" },
            { label: "Flujos", value: "Catálogo + préstamos + compras" },
            { label: "Datos", value: "MySQL + Prisma" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/TuGestionAmiga",
            demo: "",
          },
        },
        {
          id: "invygo",
          order: 2,
          createdAt: "2025-11-05",
          name: "InvYGO",
          type: "UI de inventario y catálogo",
          previewImage: invygoRealPreview,
          previewLabel:
            "React 19 + Vite + React Query + Zustand",
          cta: "UI de inventario/catálogo con React 19, Vite, React Query, Zustand e i18next.",
          summary:
            "UI de inventario/catálogo con estado predecible, datos async y arquitectura lista para i18n.",
          problem:
            "Se necesitaba un frontend rápido y modular con estado predecible y estructura multilenguaje.",
          solution:
            "Implementé Vite + React 19 con React Router, TanStack Query, Zustand e i18next.",
          impact:
            "Base frontend escalable para interacciones de catálogo y expansión futura.",
          category: "Interfaz de producto",
          facets: ["React 19", "TypeScript", "Vite", "Tailwind", "i18n"],
          decisions: [
            "Límites por rutas para ownership más claro",
            "React Query + Zustand para estado asíncrono/UI",
            "Estructura translation-first para expansión segura",
          ],
          metrics: [
            { label: "Arquitectura", value: "App Vite" },
            { label: "Flujos", value: "Catálogo + inventario" },
            { label: "Estado", value: "React Query + Zustand" },
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
        "Sección tipo hoja de vida enfocada en estudios y formación técnica.",
      sectionLabels: {
        technicalTraining: "Formación técnica",
        courses: "Cursos",
      },
      statusLabel: "Estudios",
      statusValue: "En búsqueda de prácticas",
      summary:
        "Tecnólogo en Análisis y Desarrollo de Software con experiencia práctica en requerimientos, modelado de datos y procesos, diseño de software, pruebas, bases de datos, APIs y documentación técnica. Enfocado en entrega confiable y trabajo en equipo.",
      schoolingTitle: "Escolaridad",
      cvLabel: "Descargar CV",
      certificatesLabel: "Descargar certificados",
      credentials: {
        title: "Credenciales",
        tracksLabel: "Rutas",
        coursesLabel: "Cursos",
        certificatesLabel: "Certificados",
      },
      skills: {
        title: "Skills clave",
        items: [
          "React + TypeScript",
          "Node.js + Express",
          "Diseño de API REST",
          "Fundamentos de SQL",
          "Arquitectura frontend",
          "Git + GitHub",
          "UI responsive",
          "Interfaces con i18n",
        ],
      },
      education: [
        {
          title: "Tecnólogo en Análisis y Desarrollo de Software",
          institution: "SENA",
          period: "Formación finalizada",
          note:
            "Formación en análisis de requerimientos, modelado de datos y procesos, diseño de software, desarrollo, pruebas, bases de datos, APIs, documentación y control de versiones con proyectos aplicados.",
        },
      ],
      programs: [
        {
          title: "Tecnología SENA",
          subtitle: "Análisis y Desarrollo de Software",
          items: ["Constancia de estudio"],
          certificates: [
            { label: "Constancia Estudiante Análisis y Desarrollo de Software 2024 - 2026", href: senaTechnologist },
          ],
        },
        {
          title: "MISION TIC 2022",
          subtitle: "Ministerio TIC",
          items: [
            "Fundamentos de Programación con Python",
            "Programación Básica con Lenguaje de Programación Java",
            "Desarrollo de Software con Lenguaje de Programación Java",
            "Habilidades en Programación con Énfasis en Aplicaciones Web",
          ],
          certificates: [
            { label: "Certificado general Misión TIC", href: misionTicGeneral },
            { label: "Fundamentos de Python", href: misionTicPython },
            { label: "Programación básica en Java", href: misionTicJavaBasic },
            { label: "Desarrollo de software en Java", href: misionTicJavaDev },
            { label: "Aplicaciones web", href: misionTicWeb },
          ],
        },
        {
          title: "Cursos SENA",
          subtitle: "Formación técnica",
          items: ["Programación de Dispositivos Móviles"],
          certificates: [
            { label: "Programación de dispositivos móviles", href: senaMobile },
          ],
        },
      ],
      schooling: [
        {
          title: "Bachiller Académico",
          institution: "Corporación Educativa Soledad Acosta de Samper",
          period: "Secundaria",
        },
        {
          title: "Primaria",
          institution: "Corporación Educativa Colegio Alter - Alteris",
          period: "Primaria",
        },
      ],
      deliverySignals: {
        title: "Capacidades Clave",
        subtitle: "Indicadores de calidad, coordinación y entrega consistente.",
        items: [
          {
            area: "Colaboración UX/UI",
            tools: [
              "Handoff en Figma",
              "Pulido de copy",
              "QA visual",
              "Feedback UX",
              "Especificaciones de componentes",
            ],
          },
          {
            area: "Desarrollo frontend",
            tools: [
              "Accesibilidad",
              "Chequeos de performance",
              "Límites de estado",
              "Arquitectura de componentes",
              "Testing de regresión",
            ],
          },
          {
            area: "Desarrollo backend",
            tools: [
              "Contratos de API",
              "Auth y roles",
              "CI/CD + deploy",
              "Observabilidad básica",
              "Manejo de errores",
            ],
          },
        ],
      },
    },
    stack: {
      title: "Habilidades",
      subtitle:
        "Grupos de habilidades según foco de entrega, no solo etiquetas de herramientas.",
      items: [
        {
          area: "Desarrollo de Interfaces",
          criterion:
            "Priorizo patrones reutilizables, jerarquía clara y estados de UI resilientes.",
          tools: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Vite",
            "Handoff de diseño",
            "Testing UI",
          ],
        },
        {
          area: "Servicios Backend",
          criterion: "Estructuro servicios por dominio y contratos explícitos.",
          tools: [
            "Node.js",
            "Express",
            "APIs REST",
            "NestJS",
            "Socket.io",
            "Validacion de API",
          ],
        },
        {
          area: "Administración de Datos",
          criterion:
            "Modelo datos para mantenibilidad y consultas predecibles.",
          tools: [
            "PostgreSQL",
            "MySQL",
            "Prisma",
            "MongoDB",
            "Supabase",
            "Optimizacion de consultas",
          ],
        },
        {
          area: "Ciclo de Entrega",
          criterion:
            "Mantengo releases confiables con workflows repetibles y documentación clara.",
          tools: [
            "GitHub",
            "GitHub Actions",
            "Docker",
            "Vercel/Netlify",
            "Disciplina de testing",
            "Monitoreo basico",
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
