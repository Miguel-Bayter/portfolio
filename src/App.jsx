import { useEffect, useMemo, useState } from 'react';
import { content } from './data/content';
import overviewPhoto from './img/overview.png';
import profilePhoto from './img/Profile.jpg';
import projectPlaceholder from './img/project-placeholder.svg';

const sections = ['overview', 'projects', 'caseStudy', 'stack', 'contact'];

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem('portfolio-lang');
  return saved === 'es' || saved === 'en' ? saved : 'en';
}

function getInitialTheme() {
  return 'light';
}

function getSystemPrefersDark() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [systemPrefersDark, setSystemPrefersDark] = useState(getSystemPrefersDark);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedProjectId, setSelectedProjectId] = useState('impostor');
  const [projectFilter, setProjectFilter] = useState('all');

  const t = useMemo(() => content[language], [language]);
  const projects = t.projects.items;
  const linkedInUrl = t.contact.channels.find((channel) => channel.icon === 'linkedin')?.href;

  useEffect(() => {
    if (!projects.some((p) => p.id === selectedProjectId)) {
      setSelectedProjectId(projects[0].id);
    }
  }, [projects, selectedProjectId]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const mediaQuery = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null;

    if (!mediaQuery) return undefined;

    const syncPreference = () => setSystemPrefersDark(mediaQuery.matches);
    syncPreference();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncPreference);
      return () => mediaQuery.removeEventListener('change', syncPreference);
    }

    if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(syncPreference);
      return () => mediaQuery.removeListener(syncPreference);
    }

    return undefined;
  }, []);

  useEffect(() => {
    const mediaQuery = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null;
    const applyTheme = () => {
      const prefersDark = mediaQuery ? mediaQuery.matches : getSystemPrefersDark();
      const useLight = theme === 'light' || (theme === 'system' && !prefersDark);
      document.documentElement.classList.toggle('theme-light', useLight);
      document.documentElement.classList.toggle('theme-dark', !useLight);
    };

    applyTheme();

    if (theme !== 'system' || !mediaQuery) return undefined;

    const handleChange = () => applyTheme();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }

    return undefined;
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'system';
      return 'dark';
    });
  };

  return (
    <div className="app-shell relative w-[min(1440px,95vw)] mx-auto my-5 border border-line/20 rounded-[20px] overflow-hidden bg-gradient-to-b from-[rgba(34,60,82,0.9)] to-[rgba(16,29,43,0.95)] shadow-[0_20px_58px_rgba(10,19,30,0.42),inset_0_1px_0_rgba(226,240,248,0.06)] max-md:mx-2.5 max-md:my-2.5 max-md:rounded-[14px]">
      <header className="topbar-band flex flex-col gap-3 p-4 border-b border-line/20 bg-gradient-to-r from-surface-4/20 to-transparent md:flex-row md:justify-between md:items-center md:px-8 md:py-4 md:gap-0">
        <div>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t.topbar.profileLinkLabel}
            className="topbar-identity-link"
          >
            <img src={profilePhoto} alt="Miguel Bayter" className="topbar-avatar" loading="lazy" />
            <span className="topbar-identity-name">Miguel Bayter</span>
            <span className="topbar-verified" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" className="topbar-verified-icon">
                <path d="M6.4 8.5a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9ZM5.2 9.8h2.4V18H5.2V9.8ZM9 9.8h2.3v1.1h.04c.31-.58 1.08-1.2 2.22-1.2 2.37 0 2.8 1.56 2.8 3.58V18h-2.4v-3.63c0-.87-.01-1.98-1.2-1.98-1.21 0-1.4.95-1.4 1.92V18H9V9.8Z" fill="currentColor" />
              </svg>
            </span>
          </a>
        </div>

        <div className="topbar-controls flex flex-wrap gap-2.5 items-center flex-shrink-0">
          <span className="topbar-status-pill inline-flex items-center gap-2 border border-line/30 text-ink-2 bg-surface-4/45 px-3.5 py-1 rounded-full text-[0.78rem] font-mono tracking-[0.04em]">
            <span className="relative w-[7px] h-[7px] rounded-full bg-signal-mint flex-shrink-0 status-dot" aria-hidden="true" />
            {t.topbar.status}
          </span>

          <button
            type="button"
            className="border border-line/30 bg-surface-4/65 text-ink-2 rounded-xs px-3 py-1 cursor-pointer font-mono text-[0.76rem] font-medium tracking-[0.05em] transition-all duration-150 hover:border-signal-cyan/50 hover:bg-surface-5 hover:text-ink hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-cyan focus-visible:outline-offset-2"
            aria-label={t.a11y.toggleLanguage}
            onClick={() => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            type="button"
            className="border border-line/30 bg-surface-4/65 text-ink-2 rounded-xs px-3 py-1 cursor-pointer font-mono text-[0.76rem] font-medium tracking-[0.05em] transition-all duration-150 hover:border-signal-cyan/50 hover:bg-surface-5 hover:text-ink hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-cyan focus-visible:outline-offset-2"
            aria-label={t.a11y.toggleTheme}
            onClick={cycleTheme}
          >
            {theme === 'dark'
              ? t.topbar.darkMode
              : theme === 'light'
                ? t.topbar.lightMode
                : `${t.topbar.systemMode} (${systemPrefersDark ? t.topbar.darkMode : t.topbar.lightMode})`}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 min-h-[76vh] md:grid-cols-[204px_1fr] lg:grid-cols-[222px_1fr]">
        <aside className="border-b border-line/20 p-5 flex flex-col gap-4 md:border-b-0 md:border-r md:p-6 md:px-4 md:sticky md:top-4 md:self-start" aria-label={t.a11y.navigation}>
          <p className="m-0 text-ink-4 text-[0.68rem] font-mono tracking-[0.08em] uppercase">{t.a11y.navigation}</p>

          <nav className="flex flex-wrap gap-2 md:flex-col md:gap-1.5 border border-line/15 rounded-md bg-surface-3/45 p-2">
            {sections.map((section) => {
              const isActive = section === activeSection;
              return (
                <button
                  key={section}
                  type="button"
                  className={`text-left bg-transparent border rounded-sm px-3 py-2.5 cursor-pointer text-[0.86rem] font-medium font-sans transition-all duration-150 focus-visible:outline-none md:w-full ${
                    isActive
                      ? 'border-signal-cyan/28 bg-surface-5/70 text-ink shadow-[inset_2px_0_0_rgb(59,176,242)]'
                      : 'border-transparent text-ink-2 hover:border-line/30 hover:bg-signal-cyan/10 hover:text-ink'
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {t.nav[section]}
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="p-4 flex flex-col gap-4 md:p-5 md:gap-5">
          <OverviewSection
            t={t}
            language={language}
            projects={projects}
            isVisible={activeSection === 'overview'}
            onNavigate={setActiveSection}
            onSelectProject={setSelectedProjectId}
          />
          <ProjectsSection
            t={t}
            projects={projects}
            isVisible={activeSection === 'projects'}
            selectedProjectId={selectedProjectId}
            setSelectedProjectId={setSelectedProjectId}
            projectFilter={projectFilter}
            setProjectFilter={setProjectFilter}
          />
          <CaseStudySection t={t} isVisible={activeSection === 'caseStudy'} />
          <StackSection t={t} isVisible={activeSection === 'stack'} />
          <ContactSection t={t} isVisible={activeSection === 'contact'} />

          <footer className="pt-4 border-t border-line/10 text-ink-4 text-[0.76rem] font-mono tracking-[0.04em]">
            {t.footer}
          </footer>
        </main>

      </div>
    </div>
  );
}

function OverviewSection({ t, language, projects, isVisible, onNavigate, onSelectProject }) {
  if (!isVisible) return null;

  return (
    <section className="border border-line/20 rounded-md p-4 md:p-5 animate-panel-in bg-surface-2/75 section-rhythm-light">
      <article className="overview-hero-showcase relative overflow-hidden rounded-md border">
        <span className="overview-accent-dot overview-accent-amber absolute left-7 top-6" aria-hidden="true" />
        <span className="overview-accent-dot overview-accent-mint overview-accent-optional absolute left-[52%] top-8" aria-hidden="true" />
        <span className="overview-accent-square overview-accent-cyan overview-accent-optional absolute left-[42%] bottom-16" aria-hidden="true" />
        <span className="overview-accent-square overview-accent-amber absolute right-8 top-12" aria-hidden="true" />
        <span className="overview-accent-dot overview-accent-mint overview-accent-optional absolute left-[46%] bottom-7" aria-hidden="true" />
        <span className="overview-accent-dot overview-accent-amber absolute right-10 bottom-6" aria-hidden="true" />
        <div className="overview-hero-overlay" aria-hidden="true" />

        <div
          className={`overview-hero-layout relative z-10 px-5 py-6 md:px-7 md:py-7 lg:px-8 lg:py-8 ${
            language === 'en' ? 'overview-hero-layout-en' : ''
          }`}
        >
          <div className="overview-hero-content max-w-[35rem]">
            <p className="overview-hero-name m-0 text-[1.45rem] md:text-[1.78rem] font-semibold tracking-[-0.018em] leading-[1.1]">
              {t.overview.hero.nameLine}
            </p>
            <h2 className="overview-hero-title mt-2 mb-0 text-[1.72rem] md:text-[2.04rem] font-bold tracking-[-0.022em] leading-[1.05]">
              {t.overview.hero.roleLinePrefix ? `${t.overview.hero.roleLinePrefix} ` : ''}
              <span className="overview-hero-highlight">{t.overview.hero.roleLineHighlight}</span>
              {t.overview.hero.roleLineSuffix ? ` ${t.overview.hero.roleLineSuffix}` : ''}
            </h2>
            <p className="overview-hero-copy mt-4 mb-0 max-w-[31rem] text-[0.93rem] md:text-[0.97rem] leading-[1.62]">
              {t.overview.hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="overview-hero-btn-primary inline-flex items-center gap-2 border font-mono text-[0.72rem] tracking-[0.07em] uppercase px-3.5 py-2 rounded-xs cursor-pointer transition-all duration-150 hover:-translate-y-px whitespace-nowrap"
              >
                {t.overview.hero.ctaPrimary}
                <span aria-hidden="true">-&gt;</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="overview-hero-btn-secondary inline-flex items-center gap-2 border font-mono text-[0.72rem] tracking-[0.07em] uppercase px-3.5 py-2 rounded-xs cursor-pointer transition-all duration-150 hover:-translate-y-px whitespace-nowrap"
              >
                {t.overview.hero.ctaSecondary}
              </button>
            </div>
          </div>

          <div className="overview-hero-image-wrap relative flex justify-center lg:justify-end">
            <img src={overviewPhoto} alt="Miguel Bayter" className="overview-hero-image" />
          </div>
        </div>
      </article>

      <header className="pt-5 pb-4 mb-4 border-b border-line/10">
        <h3 className="section-title-emphasis m-0 text-[1.02rem] font-semibold tracking-[-0.01em] text-ink">{t.overview.title}</h3>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.overview.subtitle}</p>
      </header>

      <TechCarousel t={t} />

      <div className="mt-5 pt-4 border-t border-line/10">
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="section-kicker m-0 text-[0.8rem] font-mono font-medium tracking-[0.1em] uppercase text-ink-3">{t.overview.proofTitle}</h3>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="section-action-ghost border border-line/20 rounded-xs px-3 py-[3px] bg-surface-4/68 text-ink-3 text-[0.72rem] font-mono tracking-[0.06em] uppercase cursor-pointer transition-all duration-150 hover:border-signal-cyan/55 hover:bg-surface-5 hover:text-ink"
          >
            {t.overview.proofAction}
          </button>
        </div>

        <div className="proof-strip-track md:grid md:grid-cols-2 md:gap-4">
          {projects.slice(0, 2).map((project) => {
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  onSelectProject(project.id);
                  onNavigate('projects');
                }}
                className="proof-card text-left border border-line/20 rounded-md p-4 bg-surface-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-line/30 h-full flex flex-col"
              >
                <div className="proof-card-head flex items-center justify-between gap-2 mb-2">
                  <p className="proof-card-type m-0 text-ink-3 text-[0.68rem] font-mono tracking-[0.08em] uppercase">{project.type}</p>
                </div>
                <h4 className="proof-card-title mt-0 mb-0 text-ink text-[1.05rem] font-semibold tracking-[-0.01em]">{project.name}</h4>
                <p className="proof-card-impact mt-2 mb-0 text-ink-2 text-[0.9rem] leading-[1.48]">{project.impact}</p>
                <div className="proof-card-tech mt-3 flex flex-wrap gap-2">
                  {project.facets.slice(0, 4).map((facet) => (
                    <span key={facet} className={`project-tech-pill project-tech-pill-${resolveFacetTone(facet)}`}>
                      <TechIcon tech={resolveFacetTechIcon(facet)} className="project-tech-pill-icon" />
                      <span>{facet}</span>
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechCarousel({ t }) {
  const items = [...t.overview.techStack.items].sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999));
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [isReverse, setIsReverse] = useState(false);

  function handlePrev() {
    setIsReverse(true);
  }

  function handleNext() {
    setIsReverse(false);
  }

  return (
    <section
      className="tech-stack-carousel overview-rhythm-band"
      aria-label={t.overview.techStack.a11yLabel}
      onMouseEnter={() => setIsAutoPlayPaused(true)}
      onMouseLeave={() => setIsAutoPlayPaused(false)}
      onFocusCapture={() => setIsAutoPlayPaused(true)}
      onBlurCapture={() => setIsAutoPlayPaused(false)}
    >
      <div className="tech-carousel-head">
        <button
          type="button"
          onClick={handlePrev}
          className="tech-carousel-nav"
          aria-label={t.overview.techStack.prev}
        >
          {'<-'}
        </button>

        <div className="tech-carousel-viewport" role="list">
          <div
            className={`tech-carousel-track tech-carousel-track-marquee ${
              isAutoPlayPaused ? 'is-paused' : ''
            } ${isReverse ? 'is-reverse' : ''}`}
          >
            {[...items, ...items].map((item, index) => (
              <article key={`${item.name}-${index}`} className="tech-carousel-item" role="listitem">
                <div className={`tech-orb tech-orb-${item.tone}`}>
                  <TechIcon tech={item.icon} className="tech-orb-icon" />
                  <span className="tech-orb-subtitle">{item.name}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="tech-carousel-nav"
          aria-label={t.overview.techStack.next}
        >
          {'->'}
        </button>
      </div>
    </section>
  );
}

function TechIcon({ tech, className }) {
  if (tech === 'html') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4h16l-1.4 15.8L12 21.8l-6.6-2L4 4Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M7.4 8h9.2M8 11.6h8.4M8.5 15.2h6.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (tech === 'css') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4h16l-1.4 15.8L12 21.8l-6.6-2L4 4Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M16.3 8H7.7l.3 3.6h7.9l-.5 5L12 17.6l-3-.9-.2-2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (tech === 'react') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (tech === 'typescript') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" fill="currentColor" fillOpacity="0.18" />
        <path d="M7 9.2h10M11 9.2v7.6M13.9 11.9h2.8a1.6 1.6 0 0 1 0 3.2h-1.4a1.6 1.6 0 1 0 0 3.2h2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (tech === 'tailwind') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 9.8c1.4-1.8 2.8-2.6 4.2-2.6 2.2 0 3.6 1 4.3 3.1.4 1.1.9 1.6 1.4 1.6 1 0 1.8-.7 2.6-2.1-1.4 1.8-2.8 2.6-4.2 2.6-2.2 0-3.6-1-4.3-3.1-.4-1.1-.9-1.6-1.4-1.6-1 0-1.8.7-2.6 2.1Zm-2 6c1.4-1.8 2.8-2.6 4.2-2.6 2.2 0 3.6 1 4.3 3.1.4 1.1.9 1.6 1.4 1.6 1 0 1.8-.7 2.6-2.1-1.4 1.8-2.8 2.6-4.2 2.6-2.2 0-3.6-1-4.3-3.1-.4-1.1-.9-1.6-1.4-1.6-1 0-1.8.7-2.6 2.1Z" fill="currentColor" />
      </svg>
    );
  }

  if (tech === 'nodejs') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.4 4.8 7.5v9L12 20.6l7.2-4.1v-9L12 3.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9.2 15.6V9.7l3 1.7v5.9m2.2-6.6-3-1.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (tech === 'express') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5.5 7.8h13m-13 4.2h10.4m-10.4 4.2h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="17.8" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (tech === 'sqlite') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="7" rx="5.2" ry="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6.8 7v4.8c0 1.2 2.3 2.2 5.2 2.2s5.2-1 5.2-2.2V7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6.8 11.2v4.8c0 1.2 2.3 2.2 5.2 2.2s5.2-1 5.2-2.2v-4.8" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (tech === 'mongodb') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4.2c1.8 2 2.7 4.2 2.7 6.6 0 3.7-2 6.4-2.7 7.2-.7-.8-2.7-3.5-2.7-7.2 0-2.4.9-4.6 2.7-6.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12 8.1v11.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (tech === 'docker') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.2" y="10.8" width="3" height="2.2" rx="0.5" fill="currentColor" />
        <rect x="7.8" y="10.8" width="3" height="2.2" rx="0.5" fill="currentColor" />
        <rect x="11.4" y="10.8" width="3" height="2.2" rx="0.5" fill="currentColor" />
        <rect x="7.8" y="8.2" width="3" height="2.1" rx="0.5" fill="currentColor" fillOpacity="0.9" />
        <rect x="11.4" y="8.2" width="3" height="2.1" rx="0.5" fill="currentColor" fillOpacity="0.9" />
        <path d="M4.2 13.8h11c1.9 0 3.4-.8 4.1-2.4-.7-.3-1.3-.2-1.8.1-.4-.7-1.2-1.1-2.2-1.1h-.6v1.4h.4c.5 0 .8.2.8.6 0 .8-.9 1.4-2 1.4H4.2v0Z" fill="currentColor" fillOpacity="0.85" />
      </svg>
    );
  }

  if (tech === 'prisma') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8.1 4.2 16.8 6.4 11.6 19.7 4.5 11.2 8.1 4.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m16.8 6.4-5.2 13.3 7.6-5.8-2.4-7.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  if (tech === 'socketio') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="6.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
        <path d="M12 2.8v2.5M12 18.7v2.5M21.2 12h-2.5M5.3 12H2.8M18.2 5.8l-1.8 1.8M7.6 16.4l-1.8 1.8M18.2 18.2l-1.8-1.8M7.6 7.6 5.8 5.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (tech === 'i18n') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.8 12h14.4M12 4.8c1.6 2 2.4 4.4 2.4 7.2S13.6 17.2 12 19.2M12 4.8c-1.6 2-2.4 4.4-2.4 7.2s.8 5.2 2.4 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (tech === 'javascript') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M9.5 9.2v6.2c0 1-.5 1.5-1.4 1.5-.6 0-1.1-.2-1.5-.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M13.2 15.6c.5.7 1.1 1.1 1.9 1.1.8 0 1.4-.4 1.4-1 0-.6-.4-.9-1.4-1.3l-.5-.2c-1.3-.5-2.2-1.2-2.2-2.6 0-1.3 1-2.3 2.6-2.3 1.1 0 1.9.4 2.5 1.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (tech === 'git') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.4 4.8a1.6 1.6 0 0 1 2.2 0l9.6 9.6a1.6 1.6 0 0 1 0 2.2l-2.6 2.6a1.6 1.6 0 0 1-2.2 0L4.8 9.6a1.6 1.6 0 0 1 0-2.2l2.6-2.6Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="9" r="1.2" fill="currentColor" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        <circle cx="15" cy="15" r="1.2" fill="currentColor" />
        <path d="M9.8 9.8 11.2 11.2M12.8 12.8 14.2 14.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return null;
}

function resolveFacetTechIcon(facet) {
  const normalized = facet.toLowerCase();

  if (normalized.includes('node')) return 'nodejs';
  if (normalized.includes('express')) return 'express';
  if (normalized.includes('socket')) return 'socketio';
  if (normalized.includes('javascript')) return 'javascript';
  if (normalized.includes('react')) return 'react';
  if (normalized.includes('typescript')) return 'typescript';
  if (normalized.includes('prisma')) return 'prisma';
  if (normalized.includes('i18n')) return 'i18n';
  if (normalized.includes('mongo')) return 'mongodb';
  if (normalized.includes('docker')) return 'docker';
  if (normalized.includes('git')) return 'git';

  return null;
}

function resolveFacetTone(facet) {
  const normalized = facet.toLowerCase();

  if (normalized.includes('node') || normalized.includes('express') || normalized.includes('socket')) return 'runtime';
  if (normalized.includes('react')) return 'framework';
  if (normalized.includes('typescript')) return 'typed';
  if (normalized.includes('javascript')) return 'language';
  if (normalized.includes('prisma') || normalized.includes('mongo')) return 'data';
  if (normalized.includes('i18n')) return 'global';

  return 'default';
}

function resolveFacetGroup(facet) {
  const normalized = facet.toLowerCase();

  if (normalized.includes('typescript') || normalized.includes('javascript')) return 'language';
  if (normalized.includes('react')) return 'framework';
  if (normalized.includes('node') || normalized.includes('express') || normalized.includes('socket')) return 'backend';
  if (normalized.includes('prisma') || normalized.includes('mongo')) return 'data';
  return 'cross';
}

function resolvePrimaryLanguage(facets) {
  const normalized = facets.map((facet) => facet.toLowerCase());
  if (normalized.some((facet) => facet.includes('typescript'))) return 'TypeScript';
  if (normalized.some((facet) => facet.includes('javascript'))) return 'JavaScript';
  return facets[0] || 'N/A';
}

function resolveProjectFacetCta(project, activeFacet, facetCta, facetSpecificCta) {
  if (!activeFacet) return project.cta;

  const hasExactFacet = project.facets.some((facet) => facet.toLowerCase() === activeFacet);
  const exactFacetCta = facetSpecificCta?.[activeFacet];
  if (hasExactFacet && exactFacetCta) return exactFacetCta;

  if (!facetCta) return project.cta;

  const selectedGroup = resolveFacetGroup(activeFacet);
  const hasFacetInGroup = project.facets.some((facet) => resolveFacetGroup(facet) === selectedGroup);

  if (!hasFacetInGroup) return project.cta;
  return facetCta[selectedGroup] || project.cta;
}

function ProjectsSection({ t, projects, isVisible, selectedProjectId, setSelectedProjectId, projectFilter, setProjectFilter }) {
  if (!isVisible) return null;

  const [areFiltersOpen, setAreFiltersOpen] = useState(false);
  const [openFilterGroup, setOpenFilterGroup] = useState(null);

  const facetOptions = Array.from(
    new Map(
      projects.flatMap((project) => project.facets.map((facet) => [facet.toLowerCase(), facet])),
    ).values(),
  )
    .sort((left, right) => {
      const priority = {
        typescript: 0,
        javascript: 1,
        'react 19': 2,
        'node.js': 3,
        express: 4,
        prisma: 5,
        'socket.io': 6,
        i18n: 7,
      };

      const leftPriority = priority[left.toLowerCase()] ?? 20;
      const rightPriority = priority[right.toLowerCase()] ?? 20;

      if (leftPriority !== rightPriority) return leftPriority - rightPriority;
      return left.localeCompare(right);
    });

  const filterCountByFacet = new Map(
    facetOptions.map((facet) => [
      facet.toLowerCase(),
      projects.filter((project) => project.facets.some((projectFacet) => projectFacet.toLowerCase() === facet.toLowerCase())).length,
    ]),
  );

  const projectFilters = [
    { key: 'all', label: t.projects.filterAll, icon: null, count: projects.length },
    ...facetOptions.map((facet) => ({
      key: `facet:${facet.toLowerCase()}`,
      label: facet,
      icon: resolveFacetTechIcon(facet),
      group: resolveFacetGroup(facet),
      count: filterCountByFacet.get(facet.toLowerCase()) ?? 0,
    })),
  ];

  const groupedFilters = {
    language: projectFilters.filter((filterOption) => filterOption.group === 'language'),
    framework: projectFilters.filter((filterOption) => filterOption.group === 'framework'),
    backend: projectFilters.filter((filterOption) => filterOption.group === 'backend'),
    data: projectFilters.filter((filterOption) => filterOption.group === 'data'),
    cross: projectFilters.filter((filterOption) => filterOption.group === 'cross'),
  };
  const filterGroupOrder = ['language', 'framework', 'backend', 'data', 'cross'];
  const totalStackFilters = facetOptions.length;
  const openGroupFilters = openFilterGroup ? groupedFilters[openFilterGroup] ?? [] : [];
  const openGroupRows = openGroupFilters.length > 2 ? 2 : openGroupFilters.length > 0 ? 1 : 0;
  const openGroupSpace = openGroupRows === 2 ? '4.4rem' : openGroupRows === 1 ? '3.2rem' : '0rem';

  const filterKeySet = new Set(projectFilters.map((filterOption) => filterOption.key));
  const effectiveFilter = filterKeySet.has(projectFilter) ? projectFilter : 'all';

  const activeFacet = effectiveFilter.startsWith('facet:') ? effectiveFilter.replace('facet:', '') : null;

  const visibleProjects = activeFacet
    ? projects
      .filter((project) => project.facets.some((facet) => facet.toLowerCase() === activeFacet))
      .sort((left, right) => {
        const leftIsSelected = left.id === selectedProjectId;
        const rightIsSelected = right.id === selectedProjectId;
        if (leftIsSelected !== rightIsSelected) return leftIsSelected ? -1 : 1;

        const leftFacetIndex = left.facets.findIndex((facet) => facet.toLowerCase() === activeFacet);
        const rightFacetIndex = right.facets.findIndex((facet) => facet.toLowerCase() === activeFacet);

        if (leftFacetIndex !== rightFacetIndex) return leftFacetIndex - rightFacetIndex;

        const leftHasDemo = Boolean(left.links.demo);
        const rightHasDemo = Boolean(right.links.demo);
        if (leftHasDemo !== rightHasDemo) return leftHasDemo ? -1 : 1;

        return left.name.localeCompare(right.name);
      })
    : projects;

  const applyFilter = (filterOption) => {
    const nextVisible = filterOption.key === 'all'
      ? projects
      : projects.filter((project) => project.facets.some((facet) => facet.toLowerCase() === filterOption.label.toLowerCase()));

    if (nextVisible.length && !nextVisible.some((project) => project.id === selectedProjectId)) {
      setSelectedProjectId(nextVisible[0].id);
    }

    setProjectFilter(filterOption.key);
    setOpenFilterGroup(null);
  };

  const handleProjectCardPointerMove = (event) => {
    if (window.innerWidth < 900) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);
  };

  const handleProjectCardPointerLeave = (event) => {
    const card = event.currentTarget;
    card.style.removeProperty('--spotlight-x');
    card.style.removeProperty('--spotlight-y');
  };

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-gradient-to-b from-surface-4/45 to-surface-2/78 section-rhythm-light">
      <header className="mb-1">
        <button
          type="button"
          className="projects-filter-toggle mt-0"
          onClick={() => setAreFiltersOpen((previous) => !previous)}
          aria-expanded={areFiltersOpen}
        >
          {areFiltersOpen ? t.projects.filtersClose : t.projects.filtersOpen} ({totalStackFilters})
        </button>
        <div
          className={`projects-filter-row mt-0 flex flex-wrap gap-2 ${areFiltersOpen ? 'is-open' : ''} ${openFilterGroup ? 'has-open-group' : ''}`}
          style={{ '--filters-open-space': openGroupSpace }}
        >
          {projectFilters.slice(0, 1).map((filterOption) => {
            const isActiveFilter = effectiveFilter === filterOption.key;

            return (
              <button
                key={filterOption.key}
                type="button"
                onClick={() => applyFilter(filterOption)}
                className={`projects-filter-chip projects-filter-chip-all ${isActiveFilter ? 'is-active' : ''}`}
              >
                {filterOption.icon ? <TechIcon tech={filterOption.icon} className="projects-filter-icon" /> : null}
                <span>{filterOption.label}</span>
                <span className="projects-filter-count">{filterOption.count}</span>
              </button>
            );
          })}

          {filterGroupOrder.map((groupKey) => {
            const filters = groupedFilters[groupKey] ?? [];
            if (!filters.length) return null;
            const isGroupOpen = openFilterGroup === groupKey;

            return (
              <div key={groupKey} className={`projects-filter-group ${isGroupOpen ? 'is-open' : 'is-collapsed'}`}>
                <button
                  type="button"
                  className="projects-filter-group-toggle"
                  aria-expanded={isGroupOpen}
                  onClick={() => {
                    setOpenFilterGroup((previous) => (previous === groupKey ? null : groupKey));
                  }}
                >
                  <span className="projects-filter-group-label">{t.projects.filterGroups?.[groupKey] ?? groupKey}</span>
                  <span className="projects-filter-group-meta">{filters.length}</span>
                  <span className={`projects-filter-group-caret ${isGroupOpen ? 'is-open' : ''}`}>▾</span>
                </button>
                <div className="projects-filter-group-chips">
                  {filters.map((filterOption) => {
                    const isActiveFilter = effectiveFilter === filterOption.key;

                    return (
                      <button
                        key={filterOption.key}
                        type="button"
                        onClick={() => applyFilter(filterOption)}
                        className={`projects-filter-chip ${isActiveFilter ? 'is-active' : ''}`}
                      >
                        {filterOption.icon ? <TechIcon tech={filterOption.icon} className="projects-filter-icon" /> : null}
                        <span>{filterOption.label}</span>
                        <span className="projects-filter-count">{filterOption.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </header>

      <div className="projects-grid mt-3 md:mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {visibleProjects.length === 0 ? (
          <article className="project-empty-state border border-line/20 rounded-md p-5 bg-surface-3/58 text-ink-2">
            <p className="m-0 text-[0.82rem] font-mono tracking-[0.05em] uppercase text-ink-3">{t.projects.emptyStateTitle}</p>
            <p className="mt-2 mb-0 text-[0.9rem] leading-[1.52]">{t.projects.emptyStateText}</p>
          </article>
        ) : visibleProjects.map((project) => {
          const isSelected = selectedProjectId === project.id;
          const hasDemo = Boolean(project.links.demo);
          const previewSrc = project.previewImage;
          const projectLanguage = resolvePrimaryLanguage(project.facets);
          const projectCta = resolveProjectFacetCta(project, activeFacet, t.projects.facetCta, t.projects.facetSpecificCta);
          const hasActiveFacet = Boolean(activeFacet) && project.facets.some((facet) => facet.toLowerCase() === activeFacet);

          return (
            <article
              key={project.id}
              className={`project-card project-showcase border border-line/20 rounded-lg transition-all duration-150 h-full flex flex-col overflow-hidden ${hasActiveFacet ? 'project-card-filter-accent' : ''} ${
                isSelected
                  ? 'bg-surface-4 border-signal-cyan/50 shadow-[inset_0_0_0_1px_rgba(59,176,242,0.16),0_14px_30px_rgba(10,19,30,0.18)]'
                  : 'bg-surface-3 hover:border-line/40 hover:bg-surface-4'
              }`}
              onMouseMove={handleProjectCardPointerMove}
              onMouseLeave={handleProjectCardPointerLeave}
            >
              <span className="project-spotlight" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setSelectedProjectId(project.id)}
                className="project-card-select w-full text-left bg-transparent border-0 p-0 cursor-pointer"
              >
                <div className="project-showcase-media">
                  <img
                    src={previewSrc}
                    alt={`${project.name} preview`}
                    className={`project-showcase-image project-showcase-image-${project.id}`}
                    loading="lazy"
                    onError={(event) => {
                      const image = event.currentTarget;
                      if (image.dataset.fallback === '1') return;
                      image.dataset.fallback = '1';
                      image.src = projectPlaceholder;
                    }}
                  />
                </div>

                <div className="project-card-body p-3 md:p-3.5">
                  <div className="project-title-row flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="project-card-type m-0 text-ink-2 text-[0.66rem] font-mono tracking-[0.08em] uppercase">{project.type}</p>
                      {project.category ? <span className="project-category-badge">{project.category}</span> : null}
                      <h3 className="project-card-title mt-1 mb-0 text-[1rem] font-semibold tracking-[-0.01em] text-ink">{project.name}</h3>
                    </div>
                  </div>

                  <p className="project-summary mt-2.5 mb-0 text-ink-2 text-[0.84rem] leading-[1.48]">{project.previewLabel || project.summary}</p>
                  <p
                    key={`cta-${project.id}-${activeFacet ?? 'all'}`}
                    className="project-cta-note mt-1.5 mb-0 text-ink-2 text-[0.78rem] leading-[1.58] max-sm:leading-[1.5]"
                  >
                    {projectCta}
                  </p>

                  <div className="project-meta-row mt-2.5 flex flex-wrap gap-1.5">
                    {project.metrics.slice(0, 1).map((metric) => (
                      <span key={metric.label} className="project-meta-chip">
                        <strong>{metric.label}:</strong>
                        <span>{metric.value}</span>
                      </span>
                    ))}
                    <span className="project-meta-chip">
                      <strong>{t.projects.languageLabel}:</strong>
                      <span>{projectLanguage}</span>
                    </span>
                  </div>

                  <div className="project-tech-list mt-2.5 flex flex-wrap gap-1.5">
                    {project.facets.slice(0, 3).map((facet) => {
                      const isActiveFacetTag = Boolean(activeFacet) && facet.toLowerCase() === activeFacet;

                      return (
                        <span
                          key={facet}
                          className={`project-tech-pill project-tech-pill-${resolveFacetTone(facet)} ${isActiveFacetTag ? 'is-active' : ''}`}
                        >
                          <TechIcon tech={resolveFacetTechIcon(facet)} className="project-tech-pill-icon" />
                          <span>{facet}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </button>

              <div className="px-3 md:px-3.5 pb-3 md:pb-3.5 mt-auto">
                <div className="project-actions mt-2.5 border-t border-line/10 pt-2.5 flex flex-wrap gap-2">
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action project-action-repo"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    {t.projects.repo}
                  </a>
                  {hasDemo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action project-action-demo"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      {t.projects.demo}
                    </a>
                  ) : (
                    <span className="project-action project-action-disabled">{t.projects.noDemo}</span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CaseStudySection({ t, isVisible }) {
  if (!isVisible) return null;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-surface-2/75 section-rhythm-light">
      <header className="pb-5 mb-5 border-b border-line/10">
        <h2 className="section-title-emphasis m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.caseStudy.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.caseStudy.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {t.caseStudy.signals.map((signal) => (
          <article key={signal.label} className="insight-signal-card border border-line/20 rounded-sm p-4 bg-surface-4">
            <p className="m-0 text-ink-3 text-[0.72rem] font-mono tracking-[0.07em] uppercase">{signal.label}</p>
            <strong className="block mt-2 text-ink text-[1rem] font-semibold tracking-[-0.01em]">{signal.value}</strong>
            <p className="mt-2 mb-0 text-ink-2 text-[0.82rem] leading-[1.55]">{signal.note}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.caseStudy.panels.map((panel) => (
          <article key={panel.title} className="insight-panel-card border border-line/20 rounded-sm p-4 bg-surface-4">
            <h3 className="m-0 text-[0.8rem] font-mono tracking-[0.08em] uppercase text-signal-coral">{panel.title}</h3>
            <ul className="mt-3 mb-0 p-0 list-none grid gap-2">
              {panel.bullets.map((bullet) => (
                <li key={bullet} className="hiring-li pl-4 text-ink-2 text-[0.84rem] leading-[1.55] relative">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function StackSection({ t, isVisible }) {
  if (!isVisible) return null;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-gradient-to-b from-surface-4/45 to-surface-2/78 section-rhythm-light">
      <header className="pb-5 mb-5 border-b border-line/10">
        <h2 className="section-title-emphasis m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.stack.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.stack.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.stack.items.map((item) => (
          <article key={item.area} className="capability-card border border-line/20 [border-top:2px_solid_rgba(158,193,213,0.35)] rounded-sm p-4 bg-surface-4">
            <h3 className="m-0 text-[0.84rem] font-semibold tracking-[0.04em] uppercase text-ink-2 font-mono">{item.area}</h3>
            <p className="mt-2 mb-0 text-ink-3 text-[0.78rem] leading-[1.55]">{item.criterion}</p>
            <ul className="mt-3 mb-0 p-0 list-none grid gap-2">
              {item.tools.map((tool) => (
                <li key={tool} className="text-ink-2 text-[0.88rem] leading-[1.4] pl-4 relative stack-li">
                  {tool}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const CHANNEL_ICONS = { github: GitHubIcon, linkedin: LinkedInIcon, mail: MailIcon };

function ContactSection({ t, isVisible }) {
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });

  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isSending = formStatus === 'loading';

  if (!isVisible) return null;

  function resetFormState() {
    setFormStatus('idle');
    setFeedback('');
  }

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formStatus !== 'idle') resetFormState();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      _subject: 'Portfolio Contact',
      _gotcha: formData.company.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setFormStatus('error');
      setFeedback(t.contact.form.required);
      return;
    }

    if (!emailPattern.test(payload.email)) {
      setFormStatus('error');
      setFeedback(t.contact.form.invalidEmail);
      return;
    }

    if (!formEndpoint) {
      setFormStatus('error');
      setFeedback(t.contact.form.error);
      return;
    }

    setFormStatus('loading');
    setFeedback('');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Contact request failed');
      }

      setFormStatus('success');
      setFeedback(t.contact.form.sent);
      setFormData({ name: '', email: '', message: '', company: '' });
      setShowForm(false);
    } catch {
      setFormStatus('error');
      setFeedback(t.contact.form.error);
    }
  }

  const inputClass =
    'w-full bg-surface-3 border border-line/20 rounded-xs px-4 py-2.5 text-ink text-[0.88rem] font-sans placeholder:text-ink-4 focus:outline-none focus:border-signal-cyan/50 transition-colors duration-150';
  const labelClass = 'block mb-1.5 text-ink-3 text-[0.72rem] font-mono tracking-[0.08em] uppercase';

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-surface-2/75 section-rhythm-light">
      <header className="pb-5 mb-5 border-b border-line/10">
        <h2 className="section-title-emphasis m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.contact.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.contact.subtitle}</p>
      </header>

      <article className="contact-highlight-card border border-signal-mint/30 rounded-sm bg-signal-mint/10 p-4 md:p-5">
        <p className="m-0 text-signal-mint text-[0.7rem] font-mono tracking-[0.08em] uppercase">{t.contact.hiringKicker}</p>
        <h3 className="mt-2 mb-0 text-ink text-[1.05rem] font-semibold tracking-[-0.01em]">{t.contact.hiringTitle}</h3>
        <p className="mt-2 mb-0 text-ink-2 text-[0.86rem] leading-[1.55]">{t.contact.hiringSubtitle}</p>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {t.contact.channels.map((channel) => {
          const Icon = CHANNEL_ICONS[channel.icon];

          if (channel.type === 'form') {
            return (
              <button
                key={channel.label}
                type="button"
                onClick={() => {
                  setShowForm((prev) => !prev);
                  resetFormState();
                }}
                className={`contact-channel-card flex flex-col items-start gap-3 border rounded-sm px-4 py-5 w-full text-left cursor-pointer transition-all duration-150 ${
                  showForm
                    ? 'border-signal-mint/50 bg-signal-mint/10 text-ink'
                    : 'border-line/20 bg-surface-4 text-ink hover:border-signal-mint hover:bg-surface-5 hover:-translate-y-0.5'
                }`}
              >
                <Icon className="w-5 h-5 text-signal-mint" />
                <span className="text-[0.92rem] font-medium leading-[1.3]">{channel.label}</span>
              </button>
            );
          }

          return (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'noreferrer' : undefined}
              className="contact-channel-card flex flex-col items-start gap-3 border border-line/20 rounded-sm px-4 py-5 bg-surface-4 text-ink no-underline transition-all duration-150 hover:border-signal-mint hover:bg-surface-5 hover:-translate-y-0.5"
            >
              <Icon className="w-5 h-5 text-signal-mint" />
              <span className="text-[0.92rem] font-medium leading-[1.3]">{channel.label}</span>
            </a>
          );
        })}
      </div>

      {showForm && formStatus !== 'success' && (
        <form onSubmit={handleSubmit} className="mt-5 pt-5 border-t border-line/10 animate-panel-in grid gap-4" noValidate>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={(event) => updateField('company', event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className={labelClass}>{t.contact.form.name}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder={t.contact.form.namePlaceholder}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>{t.contact.form.email}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder={t.contact.form.emailPlaceholder}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClass}>{t.contact.form.message}</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder={t.contact.form.messagePlaceholder}
              className={`${inputClass} resize-none`}
            />
          </div>

          {formStatus === 'error' && feedback && (
            <p className="m-0 text-signal-coral text-[0.82rem] leading-[1.5]">{feedback}</p>
          )}

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                resetFormState();
              }}
              className="border border-line/20 bg-transparent text-ink-2 font-mono text-[0.78rem] tracking-[0.06em] uppercase px-5 py-2 rounded-xs cursor-pointer hover:border-line/40 hover:text-ink transition-all duration-150"
            >
              {t.contact.form.cancel}
            </button>
            <button
              type="submit"
              disabled={isSending}
              className="border border-signal-mint/50 bg-signal-mint/10 text-signal-mint font-mono text-[0.78rem] tracking-[0.06em] uppercase px-5 py-2 rounded-xs cursor-pointer hover:bg-signal-mint/20 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? t.contact.form.sending : t.contact.form.submit}
            </button>
          </div>
        </form>
      )}

      {formStatus === 'success' && (
        <div className="mt-5 pt-5 border-t border-line/10 animate-panel-in flex items-center gap-3">
          <span className="text-signal-mint text-[1.1rem] font-mono">+</span>
          <p className="m-0 text-ink-2 text-[0.88rem] leading-[1.5]">{feedback || t.contact.form.sent}</p>
        </div>
      )}
    </section>
  );
}

export default App;
