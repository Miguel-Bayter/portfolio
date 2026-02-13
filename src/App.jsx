import { useEffect, useMemo, useState } from 'react';
import { content } from './data/content';
import profilePhoto from './img/Profile.jpg';

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
  const [selectedProjectId, setSelectedProjectId] = useState('taskflow');

  const t = useMemo(() => content[language], [language]);
  const projects = t.projects.items;
  const selectedProject = projects.find((p) => p.id === selectedProjectId) ?? projects[0];

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
    <div className="app-shell w-[min(1440px,95vw)] mx-auto my-5 border border-line/20 rounded-[20px] overflow-hidden bg-gradient-to-b from-[rgba(34,60,82,0.9)] to-[rgba(16,29,43,0.95)] shadow-[0_20px_58px_rgba(10,19,30,0.42),inset_0_1px_0_rgba(226,240,248,0.06)] max-md:mx-2.5 max-md:my-2.5 max-md:rounded-[14px]">
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

      <div className="grid grid-cols-1 min-h-[76vh] md:grid-cols-[226px_1fr] lg:grid-cols-[248px_1fr_348px]">
        <aside className="border-b border-line/20 p-5 flex flex-col gap-5 md:border-b-0 md:border-r md:p-6 md:px-4" aria-label={t.a11y.navigation}>
          <div className="border border-line/20 rounded-md p-4 pb-5 bg-gradient-to-br from-surface-5/35 to-surface-3/80">
            <img
              src={profilePhoto}
              alt="Miguel Bayter"
              className="w-[56px] h-[56px] rounded-full object-cover border-2 border-line/30 block mb-3"
            />
            <p className="m-0 text-signal-coral font-semibold text-[0.92rem] tracking-[0.01em]">{t.role}</p>
            <p className="mt-2 mb-0 text-ink-2 text-[0.84rem] leading-[1.5]">{t.focus}</p>
            <p className="mt-3 mb-0 text-ink-3 text-[0.76rem] font-mono tracking-[0.05em] uppercase">{t.availability}</p>
          </div>

          <nav className="flex flex-wrap gap-2 md:flex-col md:gap-1">
            {sections.map((section) => {
              const isActive = section === activeSection;
              return (
                <button
                  key={section}
                  type="button"
                  className={`text-left bg-transparent border rounded-sm px-3 py-3 cursor-pointer text-[0.88rem] font-medium font-sans transition-all duration-150 focus-visible:outline-none md:w-full ${
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
          <HeroSection t={t} onNavigate={setActiveSection} isVisible={activeSection === 'overview'} />

          <OverviewSection
            t={t}
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
            onNavigate={setActiveSection}
          />
          <CaseStudySection t={t} isVisible={activeSection === 'caseStudy'} />
          <StackSection t={t} isVisible={activeSection === 'stack'} />
          <ContactSection t={t} isVisible={activeSection === 'contact'} />

          <footer className="pt-4 border-t border-line/10 text-ink-4 text-[0.76rem] font-mono tracking-[0.04em]">
            {t.footer}
          </footer>
        </main>

        <aside
          className="border-t border-line/20 p-6 bg-gradient-to-b from-surface-3/90 to-surface-1/95 flex flex-col md:col-span-2 lg:col-span-1 lg:border-t-0 lg:border-l"
          aria-label={t.a11y.projectPulse}
        >
          <p className="m-0 text-signal-coral font-mono uppercase tracking-[0.1em] text-[0.68rem] font-medium">
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

          <div className="mt-5 pt-5 border-t border-line/10">
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

          <div className="mt-5 pt-5 border-t border-line/10">
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

          <div className="mt-5 pt-5 border-t border-line/10">
            <h3 className="m-0 mb-3 text-[0.72rem] font-mono font-medium tracking-[0.1em] uppercase text-signal-coral">
              {t.drawer.impact}
            </h3>
            <p className="m-0 text-ink-2 text-[0.84rem] leading-[1.55]">{selectedProject.impact}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function HeroSection({ t, onNavigate, isVisible }) {
  if (!isVisible) return null;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 bg-gradient-to-r from-surface-4/55 to-surface-2/78 animate-panel-in">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="m-0 text-signal-coral text-[0.72rem] font-mono font-medium tracking-[0.1em] uppercase">{t.hero.kicker}</p>
          <h2 className="mt-3 mb-0 text-[1.45rem] md:text-[1.7rem] font-semibold tracking-[-0.015em] leading-[1.2] text-ink">
            {t.hero.title}
          </h2>
          <p className="mt-3 mb-0 text-ink-2 text-[0.92rem] leading-[1.6] max-w-[65ch]">{t.hero.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="border border-signal-cyan/50 bg-signal-cyan/10 text-signal-cyan font-mono text-[0.78rem] tracking-[0.06em] uppercase px-5 py-2 rounded-xs cursor-pointer transition-all duration-150 hover:bg-signal-cyan/20 hover:-translate-y-px"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="border border-line/30 bg-transparent text-ink-2 font-mono text-[0.78rem] tracking-[0.06em] uppercase px-5 py-2 rounded-xs cursor-pointer transition-all duration-150 hover:border-line/50 hover:text-ink hover:-translate-y-px"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {t.hero.metrics.map((metric) => (
            <article key={metric.label} className="border border-line/20 rounded-sm bg-surface-1/60 p-3">
              <p className="m-0 text-ink-3 text-[0.72rem] font-mono tracking-[0.06em] uppercase">{metric.label}</p>
              <strong className="block mt-2 text-ink text-[1rem] font-semibold tracking-[-0.01em]">{metric.value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OverviewSection({ t, projects, isVisible, onNavigate, onSelectProject }) {
  if (!isVisible) return null;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-surface-2/75 section-rhythm-light">
      <header className="pb-5 mb-5 border-b border-line/10">
        <h2 className="m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{t.overview.title}</h2>
        <p className="mt-2 mb-0 text-ink-2 text-[0.88rem] leading-[1.55]">{t.overview.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {t.overview.cards.map((card) => (
          <article key={card.label} className="border border-line/20 [border-top:2px_solid_rgba(109,191,221,0.35)] rounded-sm px-4 pt-4 pb-5 bg-surface-4">
            <p className="m-0 text-ink-3 text-[0.75rem] font-mono tracking-[0.06em] uppercase">{card.label}</p>
            <strong className="block mt-3 text-ink text-[0.95rem] font-medium leading-[1.4]">{card.value}</strong>
          </article>
        ))}
      </div>

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

function ProjectsSection({ t, projects, isVisible, selectedProjectId, setSelectedProjectId, onNavigate }) {
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

          return (
            <article
              key={project.id}
              className={`project-card border border-line/20 rounded-lg p-4 transition-all duration-150 h-full flex flex-col ${
                isSelected
                  ? `bg-surface-4 ${projectHealth.selectedBorder} ${projectHealth.selectedShadow} shadow-[0_14px_30px_rgba(10,19,30,0.18)]`
                  : `bg-surface-3 hover:border-line/40 hover:bg-surface-4 ${projectHealth.shadow}`
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedProjectId(project.id)}
                className="w-full text-left bg-transparent border-0 p-0 cursor-pointer"
              >
                <div className="h-[132px] border border-line/20 rounded-md bg-gradient-to-br from-surface-5/30 via-surface-4/25 to-surface-2/75 px-4 py-3 flex flex-col justify-between">
                  <p className="m-0 text-ink-3 text-[0.68rem] font-mono tracking-[0.08em] uppercase">{project.previewLabel}</p>
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="m-0 text-[1rem] font-semibold tracking-[-0.01em] text-ink">{project.name}</h3>
                    <span className={`text-[0.7rem] font-mono tracking-[0.08em] uppercase px-2 py-[2px] border border-line/20 rounded-xs bg-surface-2 ${projectHealth.text}`}>
                      {project.health}
                    </span>
                  </div>
                </div>

                <p className="mt-3 mb-0 text-ink-2 text-[0.86rem] leading-[1.55]">{project.summary}</p>

                <div className="mt-4 grid gap-3">
                  <StoryRow label={t.projects.problemLabel} value={project.problem} />
                  <StoryRow label={t.projects.solutionLabel} value={project.solution} />
                  <StoryRow label={t.projects.impactLabel} value={project.impact} />
                </div>
              </button>

              <div className="mt-4 pt-3 border-t border-line/10 flex flex-wrap gap-2">
                {project.facets.map((facet) => (
                  <span
                    key={facet}
                    className="border border-line/10 rounded-xs px-2.5 py-[3px] text-[0.72rem] font-mono text-ink-3 bg-surface-2/60 tracking-[0.02em]"
                  >
                    {facet}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-3 border-t border-line/10 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center text-ink-4 text-[0.78rem] font-mono tracking-[0.04em]">
                <span>{t.projects.linksLabel}</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-line/20 rounded-xs px-3 py-[3px] min-w-[84px] text-center text-ink-2 bg-signal-cyan/10 text-[0.76rem] font-mono transition-all duration-150 hover:border-signal-cyan hover:text-signal-cyan hover:bg-signal-cyan/20"
                  >
                    {t.projects.repo}
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-line/20 rounded-xs px-3 py-[3px] min-w-[84px] text-center text-ink-2 bg-signal-cyan/10 text-[0.76rem] font-mono transition-all duration-150 hover:border-signal-cyan hover:text-signal-cyan hover:bg-signal-cyan/20"
                  >
                    {t.projects.demo}
                  </a>
                  <button
                    type="button"
                    onClick={() => onNavigate('caseStudy')}
                    className="border border-line/20 rounded-xs px-3 py-[3px] min-w-[84px] text-center text-ink-2 bg-transparent text-[0.76rem] font-mono transition-all duration-150 hover:border-line/40 hover:text-ink cursor-pointer"
                  >
                    {t.projects.caseStudy}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function StoryRow({ label, value }) {
  return (
    <div className="grid grid-cols-[84px_1fr] gap-3 items-start">
      <p className="m-0 text-ink-2 text-[0.66rem] font-mono tracking-[0.08em] uppercase border border-line/15 rounded-xs px-2 py-[2px] text-center bg-surface-2/60">
        {label}
      </p>
      <p className="m-0 text-ink-2 text-[0.82rem] leading-[1.55]">{value}</p>
    </div>
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
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isVisible) return null;

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:mbayterq.dev@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
                  setSubmitted(false);
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

      {showForm && !submitted && (
        <form onSubmit={handleSubmit} className="mt-5 pt-5 border-t border-line/10 animate-panel-in grid gap-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>{t.contact.form.name}</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                placeholder={t.contact.form.namePlaceholder}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>{t.contact.form.email}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                placeholder={t.contact.form.emailPlaceholder}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>{t.contact.form.message}</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              placeholder={t.contact.form.messagePlaceholder}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="border border-line/20 bg-transparent text-ink-2 font-mono text-[0.78rem] tracking-[0.06em] uppercase px-5 py-2 rounded-xs cursor-pointer hover:border-line/40 hover:text-ink transition-all duration-150"
            >
              {t.contact.form.cancel}
            </button>
            <button
              type="submit"
              className="border border-signal-mint/50 bg-signal-mint/10 text-signal-mint font-mono text-[0.78rem] tracking-[0.06em] uppercase px-5 py-2 rounded-xs cursor-pointer hover:bg-signal-mint/20 transition-all duration-150"
            >
              {t.contact.form.submit}
            </button>
          </div>
        </form>
      )}

      {submitted && (
        <div className="mt-5 pt-5 border-t border-line/10 animate-panel-in flex items-center gap-3">
          <span className="text-signal-mint text-[1.1rem] font-mono">+</span>
          <p className="m-0 text-ink-2 text-[0.88rem] leading-[1.5]">{t.contact.form.sent}</p>
        </div>
      )}
    </section>
  );
}

export default App;
