import { useEffect, useMemo, useRef, useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import type { Language, Theme, SectionId } from './types';
import { content } from './data/content';
import profilePhoto from './img/Profile.jpg';
import OverviewSection from './components/OverviewSection';
import ProjectsSection from './components/ProjectsSection';
import ProfileSection from './components/ProfileSection';
import ContactSection from './components/ContactSection';
import NavigationDrawer from './components/NavigationDrawer';

const sections: SectionId[] = ['overview', 'projects', 'profile', 'contact'];

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
  const shellRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [systemPrefersDark, setSystemPrefersDark] = useState(getSystemPrefersDark);
  const [activeSection, setActiveSection] = useState<SectionId>('overview');
  const [selectedProjectId, setSelectedProjectId] = useState('impostor');
  const [projectFilter, setProjectFilter] = useState('all');

  const t = useMemo(() => content[language], [language]);
  const projects = useMemo(
    () => [...t.projects.items].sort((a, b) => {
      const createdDiff = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return createdDiff !== 0 ? createdDiff : a.order - b.order;
    }),
    [t.projects.items],
  );
  const linkedInUrl = t.contact.channels.find((channel) => channel.icon === 'linkedin')?.href;
  const topbarControlClass = 'inline-flex h-10 flex-none items-center justify-center rounded-full border border-line/18 bg-surface-0/90 px-3 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-ink-2 transition-all duration-150 hover:border-signal-cyan/28 hover:bg-surface-0 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/35';

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

  useEffect(() => {
    const shell = shellRef.current;
    const header = headerRef.current;

    if (!shell || !header || typeof window === 'undefined') return undefined;

    const syncTopbarOffset = () => {
      const headerRect = header.getBoundingClientRect();
      const topbarBottom = `${Math.round(headerRect.bottom)}px`;
      shell.style.setProperty('--topbar-bottom', topbarBottom);
      document.documentElement.style.setProperty('--topbar-bottom', topbarBottom);
    };

    syncTopbarOffset();

    const resizeObserver = typeof ResizeObserver === 'function'
      ? new ResizeObserver(() => syncTopbarOffset())
      : null;

    resizeObserver?.observe(header);
    window.addEventListener('resize', syncTopbarOffset);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', syncTopbarOffset);
      document.documentElement.style.removeProperty('--topbar-bottom');
    };
  }, [language, theme, systemPrefersDark]);

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  return (
    <div ref={shellRef} className="app-shell app-shell-frame">
      <header ref={headerRef} className="topbar-band relative z-30 flex items-center justify-between gap-2 border-b border-line/20 bg-gradient-to-r from-surface-3/18 via-surface-2/8 to-transparent p-4 md:gap-6 md:px-8 md:py-4">
        <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden md:gap-3">
          <div className="flex-none md:hidden">
            <NavigationDrawer
              sections={sections.map((s) => ({ id: s, label: t.nav[s] }))}
              activeSection={activeSection}
              onNavigate={(section) => setActiveSection(section as SectionId)}
              navigationLabel={t.a11y.navigation}
              closeLabel={t.a11y.closeNavigation}
            />
          </div>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t.topbar.profileLinkLabel}
            className="topbar-identity-link inline-flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full border border-line/18 bg-gradient-to-r from-surface-4/58 via-surface-3/44 to-surface-2/32 p-[0.2rem] text-ink no-underline shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_10px_20px_rgb(7_18_31/0.12)] transition-all duration-150 hover:border-signal-cyan/34 hover:from-surface-4/68 hover:via-surface-3/54 hover:to-surface-2/42 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/35 md:h-auto md:w-auto md:min-w-0 md:justify-start md:gap-2 md:px-1.5 md:py-1"
          >
            <img
              src={profilePhoto}
              alt="Miguel Bayter"
              className="topbar-avatar h-[2.15rem] w-[2.15rem] flex-none rounded-full border border-line/34 object-cover object-[50%_12%] shadow-[0_0_0_1px_rgb(255_255_255/0.08)]"
              loading="lazy"
            />
            <span className="topbar-identity-name hidden min-w-0 truncate font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-2 md:inline md:text-[0.72rem]">
              Miguel Bayter
            </span>
            <span
              className="topbar-verified hidden h-[1.35rem] w-[1.35rem] flex-none items-center justify-center rounded-full border border-signal-cyan/34 bg-gradient-to-br from-signal-cyan/88 to-signal-cyan/74 text-surface-0 md:inline-flex"
              aria-hidden="true"
            >
              <FaLinkedinIn className="topbar-verified-icon h-3 w-3" />
            </span>
          </a>

          <span className="topbar-status-pill inline-flex h-10 min-w-0 max-w-[10.75rem] flex-1 items-center justify-center gap-2 border-line/20 bg-surface-0/70 px-2.5 py-1.5 text-center text-ink-2 before:hidden md:hidden">
            <span className="status-dot relative inline-flex h-2 w-2 flex-none rounded-full bg-signal-mint" aria-hidden="true" />
            <span className="topbar-status-text text-[0.66rem] font-medium tracking-[0.08em] sm:text-[0.7rem]">{t.topbar.status}</span>
          </span>
        </div>

        <div className="flex flex-none items-center gap-1 overflow-hidden">
          <span className="topbar-status-pill hidden h-10 min-w-0 items-center justify-center gap-2 border-line/20 bg-surface-0/70 px-4 py-1.5 text-center text-ink-2 before:hidden md:inline-flex">
            <span className="status-dot relative inline-flex h-2 w-2 flex-none rounded-full bg-signal-mint" aria-hidden="true" />
            <span className="topbar-status-text text-[0.66rem] font-medium tracking-[0.08em] sm:text-[0.7rem]">{t.topbar.status}</span>
          </span>

          <div className="flex flex-none items-center gap-1">
            <button
              type="button"
              className={`topbar-action-btn topbar-action-btn-mobile ${topbarControlClass} w-9 px-0`}
              aria-label={t.a11y.toggleLanguage}
              onClick={() => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>

            <button
              type="button"
              className={`topbar-action-btn topbar-action-btn-mobile topbar-theme-btn ${topbarControlClass} w-10 px-0 md:w-10 md:px-0`}
              aria-label={t.a11y.toggleTheme}
              onClick={cycleTheme}
            >
              <span className="topbar-theme-icon inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M14.5 3.6a8.6 8.6 0 1 0 5.9 14.7 7.5 7.5 0 1 1-5.9-14.7Z" fill="currentColor" />
                  </svg>
                ) : theme === 'light' ? (
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                    <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7 17 17M7 7 5.3 5.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <rect x="4" y="5" width="16" height="11" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 19h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 min-h-[76dvh] md:grid-cols-[204px_1fr] lg:grid-cols-[222px_1fr]">
        <aside className="hidden md:flex border-b border-line/20 p-5 flex flex-col gap-4 md:border-b-0 md:border-r md:p-6 md:px-4 md:sticky md:top-4 md:self-start" aria-label={t.a11y.navigation}>
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
          <ProfileSection t={t} isVisible={activeSection === 'profile'} language={language} />
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
