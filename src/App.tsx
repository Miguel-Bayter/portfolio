import { useState, useEffect, useCallback } from 'react';
import { content } from './data/content';
import type { Language, Theme, SectionId } from './types';
import { HeroSection } from './components/HeroSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProfileSection } from './components/ProfileSection';
import { ContactSection } from './components/ContactSection';
import { Navbar } from './components/Navbar';

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved === 'en' || saved === 'es') ? saved : 'es';
  });
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved === 'light' || saved === 'dark' || saved === 'system') ? saved : 'system';
  });
  const [activeSection, setActiveSection] = useState<SectionId>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = content[language];

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    const resolved = theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      : theme;
    document.documentElement.setAttribute('data-theme', resolved);
  }, [theme]);

  useEffect(() => {
    const handleSystemTheme = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', handleSystemTheme);
    return () => mq.removeEventListener('change', handleSystemTheme);
  }, [theme]);

  const scrollToSection = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => setLanguage((l) => (l === 'en' ? 'es' : 'en'));

  const cycleTheme = () => {
    const order: Theme[] = ['light', 'dark', 'system'];
    const idx = order.indexOf(theme);
    setTheme(order[(idx + 1) % order.length]);
  };

  const navItems: { id: SectionId; label: string }[] = [
    { id: 'overview', label: t.nav.overview },
    { id: 'projects', label: t.nav.projects },
    { id: 'profile', label: t.nav.profile },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        language={language}
        theme={theme}
        onToggleLanguage={toggleLanguage}
        onCycleTheme={cycleTheme}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        t={t}
      />

      <main>
        <section id="overview">
          <HeroSection t={t} onNavigate={scrollToSection} />
        </section>
        <section id="techstack">
          <TechStackSection t={t} />
        </section>
        <section id="projects">
          <ProjectsSection t={t} language={language} />
        </section>
        <section id="profile">
          <ProfileSection t={t} language={language} />
        </section>
        <section id="contact">
          <ContactSection t={t} language={language} />
        </section>
      </main>

      <footer className="bg-base-200 py-8 text-center text-sm text-base-content/60">
        <p>&copy; {new Date().getFullYear()} Miguel Bayter. {t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
