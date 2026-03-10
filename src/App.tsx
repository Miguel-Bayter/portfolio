import { useEffect, useMemo, useState } from 'react';
import type { Language, Theme, SectionId } from './types';
import { content } from './data/content';
import profilePhoto from './img/Profile.jpg';
import OverviewSection from './components/OverviewSection';
import ProjectsSection from './components/ProjectsSection';
import ProfileSection from './components/ProfileSection';
import StackSection from './components/StackSection';
import ContactSection from './components/ContactSection';

const sections: SectionId[] = ['overview', 'projects', 'profile', 'stack', 'contact'];

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem('portfolio-lang');
  return saved === 'es' || saved === 'en' ? saved : 'en';
}

function getInitialTheme(): Theme {
  return 'light';
}

function getSystemPrefersDark(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [systemPrefersDark, setSystemPrefersDark] = useState(getSystemPrefersDark);
  const [activeSection, setActiveSection] = useState<SectionId>('overview');
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

    return undefined;
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
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
            onNavigate={(s) => setActiveSection(s as SectionId)}
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
          <ProfileSection t={t} isVisible={activeSection === 'profile'} />
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

export default App;
