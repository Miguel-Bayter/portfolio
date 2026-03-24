import type { Content } from "../types";
import impostorRealPreview from "../img/projects/impostor-real.png";
import eiraRealPreview from "../img/projects/eira-real.png";
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
          { name: "Git", icon: "git", tone: "orange", rank: 4 },
          { name: "TypeScript", icon: "typescript", tone: "blue", rank: 5 },
          { name: "React", icon: "react", tone: "indigo", rank: 6 },
          { name: "Tailwind CSS", icon: "tailwind", tone: "cyan", rank: 7 },
          { name: "Node.js", icon: "nodejs", tone: "green", rank: 8 },
          { name: "Express", icon: "express", tone: "slate", rank: 9 },
          { name: "Next.js", icon: "nextjs", tone: "slate", rank: 10 },
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
        language: "Lang",
        framework: "Framework",
        backend: "Backend",
        data: "Data",
        cross: "Tooling",
      },
      caseStudy: "Details",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      impactLabel: "Impact",
      items: [
        {
          id: "eira",
          order: 0,
          createdAt: "2026-03-18",
          name: "Eira",
          type: "Mental Health & Wellness SaaS",
          previewImage: eiraRealPreview,
          previewLabel: "React 18 · Express · Hexagonal Arch · Dual AI · PWA",
          cta: "Full-stack mental wellness SaaS: hexagonal backend with dual AI (Gemini + Groq fallback), Supabase auth, OWASP-hardened API, and a React 18 PWA with mood tracking, AI chat, and therapeutic tools.",
          summary:
            "Mental wellness SaaS with hexagonal backend, dual AI (Gemini → Groq), OWASP-hardened API, Supabase auth, mood tracking, AI journal analysis, and React 18 PWA with offline support.",
          problem:
            "Mental health apps require privacy by design, resilient AI that never fails silently, and accessible UIs that work under stress — all with production-grade security.",
          solution:
            "pnpm monorepo with hexagonal backend (domain zero-coupled to Express/Prisma), dual AI failover, httpOnly cookie auth, RLS on Supabase, CI pipeline, and React 18 + Radix UI + TanStack Query + Playwright E2E.",
          impact:
            "Live Vercel deployment. Hardened API on Render with OWASP compliance, Playwright E2E coverage, and bilingual PWA with offline support.",
          category: "Operations Platform",
          facets: ["TypeScript", "React 19", "Vite", "Tailwind", "Express", "Prisma", "i18n"],
          decisions: [
            "Hexagonal architecture keeps domain logic decoupled from Express, Prisma, and AI SDKs",
            "Dual AI failover: Gemini 2.0 Flash → Groq Llama 3.3 70B with safe fallback message",
            "RLS on Supabase + httpOnly cookies + OWASP rate-limiting for privacy by design",
          ],
          metrics: [
            { label: "Deploy", value: "Vercel + Render (live)" },
            { label: "AI", value: "Gemini + Groq fallback" },
            { label: "Testing", value: "Vitest + Playwright E2E" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Eira",
            demo: "https://eira-woad.vercel.app",
          },
        },
        {
          id: "danu",
          order: 1,
          createdAt: "2026-03-10",
          name: "Danu",
          type: "Project Management SaaS",
          previewImage: danuPreview,
          previewLabel: "Next.js 16 · Supabase Realtime · shadcn/ui · jsPDF",
          cta: "Full-stack PM SaaS on free-tier infra: Next.js 16, Supabase Realtime, Auth.js v5, Kanban/Gantt with drag-and-drop, Resend email flows, and PDF exports.",
          summary:
            "PM SaaS with Kanban, Gantt drag-and-drop, Supabase Realtime, role-based workspaces, Resend email flows, jsPDF reports, and 90+ Vitest tests.",
          problem:
            "Needed a production-grade PM tool with realtime collaboration, PDF reporting, and multi-tenant workspaces on $0/month infrastructure.",
          solution:
            "Next.js 16 App Router, React 19, Supabase Realtime, Auth.js v5 + Prisma 7, shadcn/ui, next-intl, recharts, dnd-kit, jsPDF, and Resend for email automation.",
          impact:
            "Demo-ready SaaS with realtime sync, drag-and-drop task management, email automation, and 90+ tests enforced in CI.",
          category: "SaaS Platform",
          facets: ["React 19", "TypeScript", "Next.js", "Prisma", "Tailwind", "i18n"],
          decisions: [
            "Supabase Realtime channels for zero-latency task updates across workspaces",
            "Auth.js v5 with Prisma adapter for multi-provider auth and invite-token workspaces",
            "jsPDF + html2canvas for client-side PDF export without server costs",
          ],
          metrics: [
            { label: "Tests", value: "90+ Vitest unit tests" },
            { label: "Core Flows", value: "Kanban · Gantt · PDF reports" },
            { label: "Infra", value: "Supabase + Vercel (free tier)" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Danu",
            demo: "https://danu-eight.vercel.app/",
          },
        },
        {
          id: "impostor",
          order: 2,
          createdAt: "2024-10-18",
          name: "Impostor",
          type: "Realtime Multiplayer Platform",
          previewImage: impostorRealPreview,
          previewLabel: "NestJS 11 · Socket.IO · MongoDB · Redis · pnpm workspaces",
          cta: "Multiplayer platform with NestJS 11 + Socket.IO 4 gateway, JWT auth, MongoDB, Redis pub/sub, and a React 19 + Vite frontend — all in a typed pnpm monorepo.",
          summary:
            "Realtime multiplayer platform with NestJS 11 + Socket.IO 4 gateway, JWT auth, MongoDB, Redis pub/sub, and a React 19 + Vite frontend. @impostor/types enforces strict FE/BE contracts.",
          problem:
            "Needed a monorepo that kept frontend, backend, and event contracts strictly aligned under concurrent realtime load.",
          solution:
            "pnpm workspaces with @impostor/types shared package, NestJS 11 gateway, class-validator DTOs, bcrypt auth, ioredis pub/sub, and Docker Compose for local orchestration.",
          impact:
            "Scalable realtime platform with typed contracts, JWT-secured rooms, Docker-ready infra, and deterministic room state without polling.",
          category: "Realtime Platform",
          facets: ["TypeScript", "React 19", "Vite", "Tailwind", "NestJS", "Socket.io", "MongoDB"],
          decisions: [
            "Shared @impostor/types package enforces event contracts between gateway and frontend",
            "ioredis integration enables horizontal scaling of WebSocket rooms",
            "Docker Compose orchestrates MongoDB + Redis for reproducible local environments",
          ],
          metrics: [
            { label: "Gateway", value: "NestJS 11 + Socket.IO 4" },
            { label: "Persistence", value: "MongoDB + Redis pub/sub" },
            { label: "Architecture", value: "pnpm monorepo + Docker" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Impostor",
            demo: "https://impostor-chi-ecru.vercel.app",
          },
        },
        {
          id: "invygo",
          order: 3,
          createdAt: "2025-11-05",
          name: "InvYGO",
          type: "Inventory & Catalog Platform",
          previewImage: invygoRealPreview,
          previewLabel: "React 19 · Vite 7 · TanStack Query · Zustand · Tailwind 4",
          cta: "Inventory/catalog SPA: React 19, Vite 7, TanStack Query v5, Zustand v5, Tailwind 4, React Router 7, i18next, and Playwright E2E — live on Netlify.",
          summary:
            "Inventory/catalog SPA with TanStack Query v5, Zustand v5, React Router 7, Tailwind 4, i18next bilingual support, and Playwright E2E. Live on Netlify.",
          problem:
            "Needed a modular frontend with clean async data management, scalable UI state, multilingual support, and measurable E2E quality.",
          solution:
            "Vite 7 + React 19 with TanStack Query v5 + Zustand v5, React Router 7 code splitting, i18next ES/EN, Tailwind 4, and Playwright covering catalog search, filters, and pagination.",
          impact:
            "Live Netlify deployment with sub-second loads, bilingual support, E2E coverage on core flows, and architecture ready for API integration.",
          category: "Product Interface",
          facets: ["React 19", "TypeScript", "Vite", "Tailwind", "i18n"],
          decisions: [
            "TanStack Query v5 + Zustand v5 for clear separation of server vs UI state",
            "React Router 7 with route-based code splitting for scalable navigation",
            "Playwright E2E tests covering catalog search, filters, and pagination flows",
          ],
          metrics: [
            { label: "Deploy", value: "Netlify (live)" },
            { label: "State", value: "TanStack Query + Zustand" },
            { label: "Testing", value: "Playwright E2E" },
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
          title: "Technologist in Software Analysis and Development",
          institution: "SENA",
          period: "Nov 2023 - Feb 2026",
          note:
            "Technologist program focused on requirements analysis, software development, databases, testing, documentation, and applied delivery projects.",
        },
        {
          title: "Technical Program in Programming Fundamentals with Python",
          institution: "Ministry of Information Technologies and Communications - Sergio Arboleda University (MISION TIC - 2022)",
          period: "Dec 2022",
          note:
            "Built Python fundamentals around variables, control flow, functions, and problem-solving logic useful for backend thinking and automation basics.",
        },
        {
          title: "Technical Program in Software Development with Java",
          institution: "Ministry of Information Technologies and Communications - Sergio Arboleda University (MISION TIC - 2022)",
          period: "Nov 2022",
          note:
            "Covered Java-based software construction with structured logic, object-oriented foundations, and maintainable code practices for enterprise-style applications.",
        },
        {
          title: "Technical Program in Basic Programming with Java",
          institution: "Ministry of Information Technologies and Communications - Sergio Arboleda University (MISION TIC - 2022)",
          period: "Sep 2022",
          note:
            "Strengthened programming logic, algorithms, and Java syntax essentials to build a solid base for scalable backend development.",
        },
        {
          title: "Technical Program in Programming Fundamentals with Python",
          institution: "Ministry of Information Technologies and Communications - Sergio Arboleda University (MISION TIC - 2022)",
          period: "Aug 2022",
          note:
            "Introduced computational thinking, Python syntax, and structured problem decomposition as an entry point into software development.",
        },
        {
          title: "Technical Course in Mobile Device Programming",
          institution: "SENA",
          period: "Nov 2019",
          note:
            "Early technical training focused on mobile interaction flows, app structure, and implementation basics for device-oriented experiences.",
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
          { name: "Git", icon: "git", tone: "orange", rank: 4 },
          { name: "TypeScript", icon: "typescript", tone: "blue", rank: 5 },
          { name: "React", icon: "react", tone: "indigo", rank: 6 },
          { name: "Tailwind CSS", icon: "tailwind", tone: "cyan", rank: 7 },
          { name: "Node.js", icon: "nodejs", tone: "green", rank: 8 },
          { name: "Express", icon: "express", tone: "slate", rank: 9 },
          { name: "Next.js", icon: "nextjs", tone: "slate", rank: 10 },
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
        language: "Lang",
        framework: "Framework",
        backend: "Backend",
        data: "Datos",
        cross: "Tooling",
      },
      detailHint:
        "Los resúmenes de tarjeta son intencionalmente breves. Ve a Perfil para empresas para más contexto.",
      caseStudy: "Detalle",
      problemLabel: "Problema",
      solutionLabel: "Solución",
      impactLabel: "Impacto",
      items: [
        {
          id: "eira",
          order: 0,
          createdAt: "2026-03-18",
          name: "Eira",
          type: "SaaS de Salud Mental y Bienestar",
          previewImage: eiraRealPreview,
          previewLabel: "React 18 · Express · Arquitectura Hexagonal · IA Dual · PWA",
          cta: "SaaS fullstack de bienestar mental: arquitectura hexagonal, IA dual (Gemini + Groq), auth Supabase, API hardened OWASP, y PWA React 18 con seguimiento de estado emocional y chat IA.",
          summary:
            "SaaS de bienestar mental con arquitectura hexagonal, IA dual (Gemini → Groq), API OWASP-hardened, auth Supabase, seguimiento de humor, análisis de diario con IA y PWA React 18 con soporte offline.",
          problem:
            "Las apps de salud mental requieren privacidad por diseño, IA resiliente que nunca falle silenciosamente y UI accesible bajo estrés — todo con seguridad de nivel productivo.",
          solution:
            "Monorepo pnpm con backend hexagonal (dominio desacoplado de Express/Prisma), failover IA dual, cookies httpOnly, RLS en Supabase, CI pipeline y React 18 + Radix UI + TanStack Query + Playwright E2E.",
          impact:
            "Desplegado en Vercel. API hardened en Render con cumplimiento OWASP, cobertura E2E Playwright y PWA bilingüe con soporte offline.",
          category: "Plataforma operativa",
          facets: ["TypeScript", "React 19", "Vite", "Tailwind", "Express", "Prisma", "i18n"],
          decisions: [
            "Paquete @eira/shared enforce contratos entre frontend y API",
            "Helmet + rate-limiting + Zod en cada límite de la API",
            "Tests E2E con Playwright sobre todos los flujos críticos",
          ],
          metrics: [
            { label: "Arquitectura", value: "pnpm monorepo" },
            { label: "API", value: "Express + Prisma + Supabase" },
            { label: "Testing", value: "Vitest + Playwright E2E" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Eira",
            demo: "https://eira-woad.vercel.app",
          },
        },
        {
          id: "danu",
          order: 1,
          createdAt: "2026-03-10",
          name: "Danu",
          type: "SaaS de gestión de proyectos",
          previewImage: danuPreview,
          previewLabel: "Next.js 16 · Supabase Realtime · shadcn/ui · jsPDF",
          cta: "SaaS PM en free-tier: Next.js 16, Supabase Realtime, Auth.js v5, Kanban/Gantt con drag-and-drop, emails con Resend y exportación PDF.",
          summary:
            "SaaS PM con Kanban, Gantt drag-and-drop, sync Supabase Realtime, workspaces con roles, emails Resend, reportes jsPDF y 90+ tests Vitest.",
          problem:
            "Se necesitaba una herramienta PM con colaboración realtime, reportes PDF y workspaces multi-tenant a $0/mes.",
          solution:
            "Next.js 16 App Router, React 19, Supabase Realtime, Auth.js v5 + Prisma 7, shadcn/ui, next-intl, recharts, dnd-kit, jsPDF y Resend para automatización de emails.",
          impact:
            "SaaS demo-ready con sync realtime, drag-and-drop, automatización de emails y 90+ tests en CI.",
          category: "Plataforma SaaS",
          facets: ["React 19", "TypeScript", "Next.js", "Prisma", "Tailwind", "i18n"],
          decisions: [
            "Supabase Realtime channels para actualización instantánea de tareas en todos los workspaces",
            "Auth.js v5 con Prisma adapter para auth multi-proveedor y workspaces con invitación tokenizada",
            "jsPDF + html2canvas para exportación de PDF en cliente sin costos de servidor",
          ],
          metrics: [
            { label: "Tests", value: "90+ tests Vitest" },
            { label: "Flujos", value: "Kanban · Gantt · Reportes PDF" },
            { label: "Infra", value: "Supabase + Vercel (free tier)" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Danu",
            demo: "https://danu-eight.vercel.app/",
          },
        },
        {
          id: "impostor",
          order: 2,
          createdAt: "2024-10-18",
          name: "Impostor",
          type: "Plataforma Multiplayer Realtime",
          previewImage: impostorRealPreview,
          previewLabel: "NestJS 11 · Socket.IO · MongoDB · Redis · pnpm workspaces",
          cta: "Plataforma multiplayer: gateway NestJS 11 + Socket.IO 4, auth JWT, MongoDB, Redis pub/sub y frontend React 19 + Vite en monorepo pnpm tipado.",
          summary:
            "Plataforma multiplayer con gateway NestJS 11 + Socket.IO 4, JWT, MongoDB, Redis pub/sub y React 19 + Vite. @impostor/types enforce contratos estrictos FE/BE.",
          problem:
            "Se necesitaba un monorepo que mantuviera frontend, backend y contratos de eventos alineados bajo carga concurrente.",
          solution:
            "pnpm workspaces con @impostor/types compartido, gateway NestJS 11, DTOs class-validator, auth bcrypt, ioredis pub/sub y Docker Compose para orquestación local.",
          impact:
            "Plataforma realtime escalable con contratos tipados, salas JWT-secured, infra Docker-ready y estado de sala determinístico sin polling.",
          category: "Plataforma realtime",
          facets: ["TypeScript", "React 19", "Vite", "Tailwind", "NestJS", "Socket.io", "MongoDB"],
          decisions: [
            "Paquete @impostor/types enforce contratos de eventos entre gateway y frontend",
            "ioredis permite escalar horizontalmente las salas WebSocket",
            "Docker Compose orquesta MongoDB + Redis para entornos locales reproducibles",
          ],
          metrics: [
            { label: "Gateway", value: "NestJS 11 + Socket.IO 4" },
            { label: "Persistencia", value: "MongoDB + Redis pub/sub" },
            { label: "Arquitectura", value: "pnpm monorepo + Docker" },
          ],
          links: {
            repo: "https://github.com/Miguel-Bayter/Impostor",
            demo: "https://impostor-chi-ecru.vercel.app",
          },
        },
        {
          id: "invygo",
          order: 3,
          createdAt: "2025-11-05",
          name: "InvYGO",
          type: "Plataforma de Inventario y Catálogo",
          previewImage: invygoRealPreview,
          previewLabel: "React 19 · Vite 7 · TanStack Query · Zustand · Tailwind 4",
          cta: "SPA de inventario/catálogo: React 19, Vite 7, TanStack Query v5, Zustand v5, Tailwind 4, React Router 7, i18next y Playwright E2E — live en Netlify.",
          summary:
            "SPA de inventario/catálogo con TanStack Query v5, Zustand v5, React Router 7, Tailwind 4, i18next bilingüe y Playwright E2E. Live en Netlify.",
          problem:
            "Se necesitaba un frontend modular con gestión de datos async, estado UI escalable, soporte multilenguaje y calidad E2E medible.",
          solution:
            "Vite 7 + React 19 con TanStack Query v5 + Zustand v5, React Router 7 code splitting, i18next ES/EN, Tailwind 4 y Playwright cubriendo búsqueda, filtros y paginación.",
          impact:
            "Despliegue live en Netlify, carga sub-segundo, soporte bilingüe, cobertura E2E en flujos críticos y arquitectura lista para API.",
          category: "Interfaz de producto",
          facets: ["React 19", "TypeScript", "Vite", "Tailwind", "i18n"],
          decisions: [
            "TanStack Query v5 + Zustand v5 para separación clara de estado servidor vs UI",
            "React Router 7 con code splitting por ruta para navegación escalable",
            "Tests E2E Playwright cubriendo búsqueda, filtros y paginación del catálogo",
          ],
          metrics: [
            { label: "Deploy", value: "Netlify (live)" },
            { label: "Estado", value: "TanStack Query + Zustand" },
            { label: "Testing", value: "Playwright E2E" },
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
          period: "Nov 2023 - Feb 2026",
          note:
            "Tecnología enfocada en análisis de requerimientos, desarrollo de software, bases de datos, pruebas, documentación y proyectos aplicados.",
        },
        {
          title: "Técnico en Fundamentos de Programación con Python",
          institution: "Ministerio de Tecnologías de la Información y las Comunicaciones - la Universidad Sergio Arboleda (MISION TIC - 2022)",
          period: "Dic 2022",
          note:
            "Formación en fundamentos de Python con variables, control de flujo, funciones y lógica de resolución de problemas aplicable a backend y automatización.",
        },
        {
          title: "Técnico en Desarrollo de Software con Lenguaje de Programación Java",
          institution: "Ministerio de Tecnologías de la Información y las Comunicaciones - la Universidad Sergio Arboleda (MISION TIC - 2022)",
          period: "Nov 2022",
          note:
            "Enfocado en construcción de software con Java, bases de orientación a objetos y prácticas de código mantenible para contextos empresariales.",
        },
        {
          title: "Técnico en Programación Básica con Lenguaje de Programación Java",
          institution: "Ministerio de Tecnologías de la Información y las Comunicaciones - la Universidad Sergio Arboleda (MISION TIC - 2022)",
          period: "Sep 2022",
          note:
            "Refuerzo de lógica, algoritmia y sintaxis base en Java para consolidar fundamentos útiles en desarrollo backend escalable.",
        },
        {
          title: "Técnico en Fundamentos de Programación con Python",
          institution: "Ministerio de Tecnologías de la Información y las Comunicaciones - la Universidad Sergio Arboleda (MISION TIC - 2022)",
          period: "Ago 2022",
          note:
            "Introducción al pensamiento computacional, sintaxis de Python y descomposición estructurada de problemas como base de desarrollo.",
        },
        {
          title: "Curso técnico en Programación de Dispositivos Móviles",
          institution: "SENA",
          period: "Nov 2019",
          note:
            "Formación inicial orientada a flujos móviles, estructura de aplicaciones y nociones de implementación para experiencias centradas en dispositivos.",
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
