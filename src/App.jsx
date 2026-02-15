import { useEffect, useMemo, useRef, useState } from 'react';
import { content } from './data/content';
import overviewPhoto from './img/overview.png';

const HEALTH = {
  up: {
    shadow: 'shadow-[inset_3px_0_0_#75d8b8]',
    selectedShadow: 'shadow-[inset_3px_0_0_#75d8b8,inset_0_0_0_1px_rgba(117,216,184,0.15)]',
    selectedBorder: 'border-signal-mint/50',
    text: 'text-signal-mint',
    fill: 'bg-signal-mint',
  },
  stable: {
    shadow: 'shadow-[inset_3px_0_0_#6dbfdd]',
    selectedShadow: 'shadow-[inset_3px_0_0_#6dbfdd,inset_0_0_0_1px_rgba(109,191,221,0.15)]',
    selectedBorder: 'border-signal-cyan/50',
    text: 'text-signal-cyan',
    fill: 'bg-signal-cyan',
  },
  progress: {
    shadow: 'shadow-[inset_3px_0_0_#e6b66a]',
    selectedShadow: 'shadow-[inset_3px_0_0_#e6b66a,inset_0_0_0_1px_rgba(230,182,106,0.15)]',
    selectedBorder: 'border-signal-amber/50',
    text: 'text-signal-amber',
    fill: 'bg-signal-amber',
  },
};

const sections = ['overview', 'projects', 'caseStudy', 'stack', 'contact'];

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem('portfolio-lang');
  return saved === 'es' || saved === 'en' ? saved : 'en';
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'system';
  const saved = window.localStorage.getItem('portfolio-theme');
  return saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system';
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedProjectId, setSelectedProjectId] = useState('impostor');
  const [isPulseOpen, setIsPulseOpen] = useState(false);
  const pulsePanelRef = useRef(null);

  const t = useMemo(() => content[language], [language]);
  const projects = t.projects.items;
  const selectedProject = projects.find((p) => p.id === selectedProjectId) ?? projects[0];

  useEffect(() => {
    if (!projects.some((p) => p.id === selectedProjectId)) {
      setSelectedProjectId(projects[0].id);
    }
  }, [projects, selectedProjectId]);

  useEffect(() => {
    if (activeSection !== 'projects' && isPulseOpen) {
      setIsPulseOpen(false);
    }
  }, [activeSection, isPulseOpen]);

  useEffect(() => {
    if (!isPulseOpen || activeSection !== 'projects') return;
    if (typeof window === 'undefined') return;
    if (window.innerWidth > 900) return;

    const timer = window.setTimeout(() => {
      pulsePanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 40);

    return () => window.clearTimeout(timer);
  }, [isPulseOpen, activeSection, selectedProjectId]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      const useLight = theme === 'light' || (theme === 'system' && !mediaQuery.matches);
      document.documentElement.classList.toggle('theme-light', useLight);
      document.documentElement.classList.toggle('theme-dark', !useLight);
    };

    applyTheme();

    if (theme !== 'system') return undefined;

    mediaQuery.addEventListener('change', applyTheme);
    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'system';
      return 'dark';
    });
  };

  const healthToken = HEALTH[selectedProject.statusKey];

  return (
    <div className="app-shell relative w-[min(1440px,95vw)] mx-auto my-5 border border-line/20 rounded-[20px] overflow-hidden bg-gradient-to-b from-[rgba(34,60,82,0.9)] to-[rgba(16,29,43,0.95)] shadow-[0_20px_58px_rgba(10,19,30,0.42),inset_0_1px_0_rgba(226,240,248,0.06)] max-md:mx-2.5 max-md:my-2.5 max-md:rounded-[14px]">
      <header className="flex flex-col gap-4 p-5 border-b border-line/20 bg-gradient-to-r from-surface-4/20 to-transparent md:flex-row md:justify-between md:items-center md:px-8 md:py-5 md:gap-0">
        <div>
          <p className="m-0 font-mono text-signal-cyan tracking-[0.12em] text-[0.7rem] font-medium uppercase">
            Miguel Bayter
          </p>
          <h1 className="mt-2 mb-0 text-[1.42rem] font-semibold tracking-[-0.01em] leading-[1.2] text-ink">
            {t.topbar.title}
          </h1>
          <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.4]">
            {t.topbar.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 items-center flex-shrink-0">
          <span className="inline-flex items-center gap-2 border border-signal-mint/35 text-signal-mint bg-signal-mint/10 px-4 py-1.5 rounded-full text-[0.8rem] font-mono tracking-[0.04em]">
            <span className="relative w-[7px] h-[7px] rounded-full bg-signal-mint flex-shrink-0 status-dot" aria-hidden="true" />
            {t.topbar.status}
          </span>

          <button
            type="button"
            className="border border-line/30 bg-surface-5 text-ink rounded-xs px-4 py-1.5 cursor-pointer font-mono text-[0.78rem] font-medium tracking-[0.06em] transition-all duration-150 hover:border-signal-cyan hover:bg-signal-cyan/10 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-cyan focus-visible:outline-offset-2"
            aria-label={t.a11y.toggleLanguage}
            onClick={() => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            type="button"
            className="border border-line/30 bg-surface-5 text-ink rounded-xs px-4 py-1.5 cursor-pointer font-mono text-[0.78rem] font-medium tracking-[0.06em] transition-all duration-150 hover:border-signal-coral hover:bg-signal-coral/10 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-coral focus-visible:outline-offset-2"
            aria-label={t.a11y.toggleTheme}
            onClick={cycleTheme}
          >
            {theme === 'dark' ? t.topbar.darkMode : theme === 'light' ? t.topbar.lightMode : t.topbar.systemMode}
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
                      ? 'border-signal-cyan/30 bg-signal-cyan/10 text-ink shadow-[inset_3px_0_0_#6dbfdd]'
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

        <main className="p-5 flex flex-col gap-5 md:p-6">
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
            selectedProjectId={selectedProject.id}
            setSelectedProjectId={setSelectedProjectId}
            isPulseOpen={isPulseOpen}
            setIsPulseOpen={setIsPulseOpen}
          />
          <CaseStudySection t={t} isVisible={activeSection === 'caseStudy'} />
          <StackSection t={t} isVisible={activeSection === 'stack'} />
          <ContactSection t={t} isVisible={activeSection === 'contact'} />

          <footer className="pt-4 border-t border-line/10 text-ink-4 text-[0.76rem] font-mono tracking-[0.04em]">
            {t.footer}
          </footer>
        </main>

      </div>

      {activeSection === 'projects' && isPulseOpen && (
        <>
          <button
            type="button"
            className="pulse-backdrop"
            aria-label={t.drawer.close}
            onClick={() => setIsPulseOpen(false)}
          />
          <aside ref={pulsePanelRef} className="project-pulse-panel" aria-label={t.a11y.projectPulse}>
            <div className="project-pulse border border-line/20 rounded-md p-5 bg-gradient-to-b from-surface-3/92 to-surface-1/96 flex flex-col h-full overflow-y-auto">
              <div className="project-pulse-media">
                <img
                  src={selectedProject.previewImage}
                  alt={`${selectedProject.name} pulse preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="m-0 mt-4 text-signal-coral font-mono uppercase tracking-[0.1em] text-[0.68rem] font-medium">
                {t.drawer.title}
              </p>
              <h2 className={`mt-2 mb-0 text-[1.1rem] font-semibold tracking-[-0.01em] ${healthToken.text}`}>
                {selectedProject.name}
              </h2>
              <p className="mt-2 mb-4 text-ink-2 text-[0.86rem] leading-[1.55]">{selectedProject.summary}</p>

              <div className="grid grid-cols-2 gap-3 mb-1">
                <article className="border border-line/20 rounded-sm bg-surface-1/60 p-3">
                  <p className="m-0 text-ink-3 text-[0.72rem] font-mono tracking-[0.06em] uppercase">{t.drawer.status}</p>
                  <strong className={`block mt-2 font-mono text-[0.9rem] font-medium ${healthToken.text}`}>
                    {selectedProject.health}
                  </strong>
                </article>

                <article className="border border-line/20 rounded-sm bg-surface-1/60 p-3">
                  <p className="m-0 text-ink-3 text-[0.72rem] font-mono tracking-[0.06em] uppercase">{t.drawer.completion}</p>
                  <strong className="block mt-2 font-mono text-[0.9rem] font-medium text-ink">{selectedProject.completion}</strong>
                  <div className="mt-2 h-[3px] rounded-full bg-line/12 overflow-hidden" aria-hidden="true">
                    <div
                      className={`h-full rounded-full transition-all duration-[400ms] ease-out ${healthToken.fill}`}
                      style={{ width: selectedProject.completion }}
                    />
                  </div>
                </article>
              </div>

              <div className="mt-4 pt-4 border-t border-line/10">
                <h3 className="m-0 mb-3 text-[0.72rem] font-mono font-medium tracking-[0.1em] uppercase text-signal-coral">
                  {t.drawer.decisions}
                </h3>
                <ul className="m-0 p-0 list-none grid gap-2">
                  {selectedProject.decisions.map((decision) => (
                    <li key={decision} className="text-ink-2 text-[0.83rem] leading-[1.5] pl-4 relative drawer-li">
                      {decision}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-line/10">
                <h3 className="m-0 mb-3 text-[0.72rem] font-mono font-medium tracking-[0.1em] uppercase text-signal-coral">
                  {t.drawer.metrics}
                </h3>
                <ul className="m-0 p-0 list-none grid gap-2">
                  {selectedProject.metrics.map((metric) => (
                    <li key={metric.label} className="flex justify-between items-baseline gap-3 text-ink-2 text-[0.83rem] leading-[1.5]">
                      <span>{metric.label}</span>
                      <strong className="font-mono text-[0.8rem] font-medium text-ink whitespace-nowrap">{metric.value}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-line/10">
                <h3 className="m-0 mb-3 text-[0.72rem] font-mono font-medium tracking-[0.1em] uppercase text-signal-coral">
                  {t.drawer.impact}
                </h3>
                <p className="m-0 text-ink-2 text-[0.84rem] leading-[1.55]">{selectedProject.impact}</p>
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}

function OverviewSection({ t, language, projects, isVisible, onNavigate, onSelectProject }) {
  if (!isVisible) return null;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-surface-2/75 section-rhythm-light">
      <article className="overview-hero-showcase relative overflow-hidden rounded-md border">
        <span className="overview-accent-dot overview-accent-amber absolute left-7 top-6" aria-hidden="true" />
        <span className="overview-accent-dot overview-accent-mint overview-accent-optional absolute left-[52%] top-8" aria-hidden="true" />
        <span className="overview-accent-square overview-accent-cyan overview-accent-optional absolute left-[42%] bottom-16" aria-hidden="true" />
        <span className="overview-accent-square overview-accent-amber absolute right-8 top-12" aria-hidden="true" />
        <span className="overview-accent-dot overview-accent-mint overview-accent-optional absolute left-[46%] bottom-7" aria-hidden="true" />
        <span className="overview-accent-dot overview-accent-amber absolute right-10 bottom-6" aria-hidden="true" />
        <div className="overview-hero-overlay" aria-hidden="true" />

        <div
          className={`overview-hero-layout relative z-10 px-6 py-7 md:px-8 md:py-8 lg:px-10 lg:py-10 ${
            language === 'en' ? 'overview-hero-layout-en' : ''
          }`}
        >
          <div className="overview-hero-content max-w-[35rem]">
            <p className="overview-hero-name m-0 text-[1.52rem] md:text-[1.9rem] font-semibold tracking-[-0.02em] leading-[1.08]">
              {t.overview.hero.nameLine}
            </p>
            <h2 className="overview-hero-title mt-2 mb-0 text-[1.9rem] md:text-[2.2rem] font-bold tracking-[-0.025em] leading-[1.03]">
              {t.overview.hero.roleLinePrefix ? `${t.overview.hero.roleLinePrefix} ` : ''}
              <span className="overview-hero-highlight">{t.overview.hero.roleLineHighlight}</span>
              {t.overview.hero.roleLineSuffix ? ` ${t.overview.hero.roleLineSuffix}` : ''}
            </h2>
            <p className="overview-hero-copy mt-4 mb-0 max-w-[32rem] text-[0.94rem] md:text-[0.98rem] leading-[1.58]">
              {t.overview.hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="overview-hero-btn-primary inline-flex items-center gap-2 border font-mono text-[0.74rem] tracking-[0.07em] uppercase px-4 py-2 rounded-xs cursor-pointer transition-all duration-150 hover:-translate-y-px whitespace-nowrap"
              >
                {t.overview.hero.ctaPrimary}
                <span aria-hidden="true">-&gt;</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="overview-hero-btn-secondary inline-flex items-center gap-2 border font-mono text-[0.74rem] tracking-[0.07em] uppercase px-4 py-2 rounded-xs cursor-pointer transition-all duration-150 hover:-translate-y-px whitespace-nowrap"
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

      <header className="pt-6 pb-5 mb-5 border-b border-line/10">
        <h3 className="m-0 text-[1.05rem] font-semibold tracking-[-0.01em] text-ink">{t.overview.title}</h3>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.overview.subtitle}</p>
      </header>

      <TechCarousel t={t} />

      <div className="mt-6 pt-5 border-t border-line/10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h3 className="m-0 text-[0.8rem] font-mono font-medium tracking-[0.1em] uppercase text-signal-coral">{t.overview.proofTitle}</h3>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="border border-line/20 rounded-xs px-3 py-[3px] bg-surface-5 text-ink-2 text-[0.72rem] font-mono tracking-[0.06em] uppercase cursor-pointer transition-all duration-150 hover:border-signal-cyan hover:text-signal-cyan"
          >
            {t.overview.proofAction}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((project) => {
            const projectHealth = HEALTH[project.statusKey];
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  onSelectProject(project.id);
                  onNavigate('projects');
                }}
                className={`text-left border border-line/20 rounded-sm p-4 bg-surface-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-line/30 ${projectHealth.shadow}`}
              >
                <p className="m-0 text-ink-3 text-[0.7rem] font-mono tracking-[0.07em] uppercase">{project.type}</p>
                <h4 className="mt-2 mb-0 text-ink text-[0.92rem] font-semibold tracking-[-0.01em]">{project.name}</h4>
                <p className="mt-2 mb-0 text-ink-2 text-[0.82rem] leading-[1.5]">{project.impact}</p>
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
      className="tech-stack-carousel"
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

function ProjectsSection({ t, projects, isVisible, selectedProjectId, setSelectedProjectId, isPulseOpen, setIsPulseOpen }) {
  if (!isVisible) return null;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-gradient-to-b from-surface-4/45 to-surface-2/78">
      <header className="pb-5 mb-5 border-b border-line/10">
        <h2 className="m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.projects.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.projects.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => {
          const isSelected = selectedProjectId === project.id;
          const projectHealth = HEALTH[project.statusKey];
          const hasDemo = Boolean(project.links.demo);

          return (
            <article
              key={project.id}
              className={`project-card project-showcase border border-line/20 rounded-lg transition-all duration-150 h-full flex flex-col overflow-hidden ${
                isSelected
                  ? `bg-surface-4 ${projectHealth.selectedBorder} ${projectHealth.selectedShadow} shadow-[0_14px_30px_rgba(10,19,30,0.18)]`
                  : `bg-surface-3 hover:border-line/40 hover:bg-surface-4 ${projectHealth.shadow}`
              }`}
            >
              <button type="button" onClick={() => setSelectedProjectId(project.id)} className="w-full text-left bg-transparent border-0 p-0 cursor-pointer">
                <div className="project-showcase-media">
                  <img
                    src={project.previewImage}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="m-0 text-ink-3 text-[0.66rem] font-mono tracking-[0.08em] uppercase">{project.type}</p>
                      <h3 className="mt-2 mb-0 text-[1.08rem] font-semibold tracking-[-0.01em] text-ink">{project.name}</h3>
                    </div>
                    <span className={`text-[0.68rem] font-mono tracking-[0.08em] uppercase px-2 py-[2px] border border-line/20 rounded-xs bg-surface-2 whitespace-nowrap ${projectHealth.text}`}>
                      {project.health}
                    </span>
                  </div>

                  <p className="mt-3 mb-0 text-ink-2 text-[0.86rem] leading-[1.52]">{project.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.facets.slice(0, 4).map((facet) => (
                      <span key={facet} className="project-tech-pill">
                        {facet}
                      </span>
                    ))}
                  </div>
                </div>
              </button>

              <div className="px-4 md:px-5 pb-4 md:pb-5 mt-auto">
                <div className="mt-1 grid grid-cols-2 gap-3 border-t border-line/10 pt-3">
                <article className="border border-line/15 rounded-xs p-2.5 bg-surface-2/60">
                  <p className="m-0 text-ink-3 text-[0.66rem] font-mono tracking-[0.08em] uppercase">{t.drawer.completion}</p>
                  <strong className="block mt-1 text-ink text-[0.83rem] font-medium">{project.completion}</strong>
                </article>
                <article className="border border-line/15 rounded-xs p-2.5 bg-surface-2/60">
                  <p className="m-0 text-ink-3 text-[0.66rem] font-mono tracking-[0.08em] uppercase">{t.drawer.status}</p>
                  <strong className={`block mt-1 text-[0.83rem] font-medium ${projectHealth.text}`}>{project.health}</strong>
                </article>
                </div>

                <div className="mt-3 border-t border-line/10 pt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      setIsPulseOpen(isSelected ? !isPulseOpen : true);
                    }}
                    className="project-action project-action-pulse"
                  >
                    {isSelected && isPulseOpen ? t.drawer.close : t.drawer.open}
                  </button>
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
        <h2 className="m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.caseStudy.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.caseStudy.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {t.caseStudy.signals.map((signal) => (
          <article key={signal.label} className="border border-line/20 rounded-sm p-4 bg-surface-4">
            <p className="m-0 text-ink-3 text-[0.72rem] font-mono tracking-[0.07em] uppercase">{signal.label}</p>
            <strong className="block mt-2 text-ink text-[1rem] font-semibold tracking-[-0.01em]">{signal.value}</strong>
            <p className="mt-2 mb-0 text-ink-2 text-[0.82rem] leading-[1.55]">{signal.note}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.caseStudy.panels.map((panel) => (
          <article key={panel.title} className="border border-line/20 rounded-sm p-4 bg-surface-4">
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
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-gradient-to-b from-surface-4/45 to-surface-2/78">
      <header className="pb-5 mb-5 border-b border-line/10">
        <h2 className="m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.stack.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.stack.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.stack.items.map((item) => (
          <article key={item.area} className="border border-line/20 [border-top:2px_solid_rgba(158,193,213,0.35)] rounded-sm p-4 bg-surface-4">
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
        <h2 className="m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.contact.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.contact.subtitle}</p>
      </header>

      <article className="border border-signal-mint/30 rounded-sm bg-signal-mint/10 p-4 md:p-5">
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
                className={`flex flex-col items-start gap-3 border rounded-sm px-4 py-5 w-full text-left cursor-pointer transition-all duration-150 ${
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
              className="flex flex-col items-start gap-3 border border-line/20 rounded-sm px-4 py-5 bg-surface-4 text-ink no-underline transition-all duration-150 hover:border-signal-mint hover:bg-surface-5 hover:-translate-y-0.5"
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
