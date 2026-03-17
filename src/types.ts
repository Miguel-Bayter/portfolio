export interface TechStackItem {
  name: string;
  icon: string;
  tone: string;
  rank: number;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLinks {
  repo: string;
  demo: string;
}

export interface Project {
  id: string;
  order: number;
  createdAt: string;
  name: string;
  type: string;
  previewImage: string;
  previewLabel?: string;
  cta: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  category: string;
  facets: string[];
  decisions: string[];
  metrics: ProjectMetric[];
  links: ProjectLinks;
}

export interface ContactChannel {
  label: string;
  href: string;
  external: boolean;
  icon: string;
  type?: string;
}

export interface ProfileEntry {
  title: string;
  institution: string;
  period?: string;
  note?: string;
}

export interface ProfileGroup {
  title: string;
  subtitle?: string;
  items: string[];
  certificates?: ProfileCertificate[];
}

export interface ProfileCertificate {
  label: string;
  href: string;
}

export interface StackItem {
  area: string;
  criterion: string;
  tools: string[];
}

export interface ContentLocale {
  role: string;
  focus: string;
  availability: string;
  a11y: {
    toggleLanguage: string;
    toggleTheme: string;
    navigation: string;
  };
  nav: {
    overview: string;
    projects: string;
    profile: string;
    contact: string;
  };
  topbar: {
    title: string;
    subtitle: string;
    profileLinkLabel: string;
    proofLabel: string;
    proofItems: string[];
    status: string;
    darkMode: string;
    lightMode: string;
    systemMode: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: ProjectMetric[];
  };
  overview: {
    title: string;
    subtitle?: string;
    hero: {
      nameLine: string;
      roleLinePrefix: string;
      roleLineHighlight: string;
      roleLineSuffix: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    proofTitle: string;
    proofAction: string;
    techStack: {
      a11yLabel: string;
      prev: string;
      next: string;
      items: TechStackItem[];
    };
  };
  projects: {
    title?: string;
    subtitle?: string;
    linksLabel: string;
    repo: string;
    demo: string;
    noDemo: string;
    languageLabel: string;
    facetCta: {
      language: string;
      framework: string;
      backend: string;
      data: string;
      cross: string;
    };
    facetSpecificCta: Record<string, string>;
    filterAll: string;
    filtersOpen: string;
    filtersClose: string;
    emptyStateTitle: string;
    emptyStateText: string;
    filterGroups: {
      language: string;
      framework: string;
      backend: string;
      data: string;
      cross: string;
    };
    detailHint?: string;
    caseStudy: string;
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
    pulseMetrics: string;
    pulseDecisions: string;
    pulseImpact: string;
    items: Project[];
  };
  profile: {
    title: string;
    subtitle: string;
    sectionLabels: {
      technicalTraining: string;
      courses: string;
    };
    statusLabel: string;
    statusValue: string;
    summary: string;
    schoolingTitle: string;
    cvLabel: string;
    certificatesLabel: string;
    credentials: {
      title: string;
      tracksLabel: string;
      coursesLabel: string;
      certificatesLabel: string;
    };
    skills: {
      title: string;
      items: string[];
    };
    education: ProfileEntry[];
    programs: ProfileGroup[];
    schooling: ProfileEntry[];
    deliverySignals: {
      title: string;
      subtitle?: string;
      items: Array<{
        area: string;
        tools: string[];
      }>;
    };
  };
  stack: {
    title: string;
    subtitle: string;
    items: StackItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    hiringKicker: string;
    hiringTitle: string;
    hiringSubtitle: string;
    channels: ContactChannel[];
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      cancel: string;
      sent: string;
      error: string;
      invalidEmail: string;
      required: string;
    };
  };
  footer: string;
}

export interface Content {
  en: ContentLocale;
  es: ContentLocale;
}

export type Language = 'en' | 'es';
export type Theme = 'light' | 'dark' | 'system';
export type SectionId = 'overview' | 'projects' | 'profile' | 'contact';
export type FacetGroup = 'language' | 'framework' | 'backend' | 'data' | 'cross';
