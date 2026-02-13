import { useEffect, useMemo, useState } from 'react';
import { content } from './data/content';

const sections = ['overview', 'projects', 'caseStudy', 'stack', 'contact'];

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const saved = window.localStorage.getItem('portfolio-lang');
  return saved === 'es' || saved === 'en' ? saved : 'en';
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedProjectId, setSelectedProjectId] = useState('taskflow');

  const t = useMemo(() => content[language], [language]);
  const projects = t.projects.items;
  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? projects[0];

  useEffect(() => {
    if (!projects.some((project) => project.id === selectedProjectId)) {
      setSelectedProjectId(projects[0].id);
    }
  }, [projects, selectedProjectId]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Miguel Bayter</p>
          <h1>{t.topbar.title}</h1>
          <p className="topbar-subtitle">{t.topbar.subtitle}</p>
        </div>

        <div className="topbar-actions">
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            {t.topbar.status}
          </span>
          <button
            type="button"
            className="lang-button"
            aria-label={t.a11y.toggleLanguage}
            onClick={() => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar" aria-label={t.a11y.navigation}>
          <div className="identity-card">
            <p className="role">{t.role}</p>
            <p className="focus">{t.focus}</p>
          </div>

          <nav>
            {sections.map((section) => (
              <button
                key={section}
                type="button"
                className={section === activeSection ? 'nav-item is-active' : 'nav-item'}
                onClick={() => setActiveSection(section)}
              >
                {t.nav[section]}
              </button>
            ))}
          </nav>
        </aside>

        <main className="content-area">
          <OverviewSection t={t} isVisible={activeSection === 'overview'} />

          <ProjectsSection
            t={t}
            projects={projects}
            isVisible={activeSection === 'projects'}
            selectedProjectId={selectedProject.id}
            setSelectedProjectId={setSelectedProjectId}
          />

          <CaseStudySection t={t} isVisible={activeSection === 'caseStudy'} />
          <StackSection t={t} isVisible={activeSection === 'stack'} />
          <ContactSection t={t} isVisible={activeSection === 'contact'} />

          <footer className="footer-note">{t.footer}</footer>
        </main>

        <aside className="detail-drawer" aria-label={t.a11y.projectPulse}>
          <p className="drawer-kicker">{t.drawer.title}</p>
          <h2>{selectedProject.name}</h2>
          <p>{selectedProject.summary}</p>

          <div className="pulse-row">
            <article className="pulse-stat">
              <p>{t.drawer.status}</p>
              <strong>{selectedProject.health}</strong>
            </article>
            <article className="pulse-stat">
              <p>{t.drawer.completion}</p>
              <strong>{selectedProject.completion}</strong>
            </article>
          </div>

          <div className="drawer-block">
            <h3>{t.drawer.decisions}</h3>
            <ul>
              {selectedProject.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>

          <div className="drawer-block">
            <h3>{t.drawer.metrics}</h3>
            <ul>
              {selectedProject.metrics.map((metric) => (
                <li key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function OverviewSection({ t, isVisible }) {
  if (!isVisible) return null;

  return (
    <section className="panel">
      <header className="section-header">
        <h2>{t.overview.title}</h2>
        <p>{t.overview.subtitle}</p>
      </header>
      <div className="metric-grid">
        {t.overview.cards.map((card) => (
          <article key={card.label} className="metric-card">
            <p>{card.label}</p>
            <strong>{card.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection({
  t,
  projects,
  isVisible,
  selectedProjectId,
  setSelectedProjectId
}) {
  if (!isVisible) return null;

  return (
    <section className="panel">
      <header className="section-header">
        <h2>{t.projects.title}</h2>
        <p>{t.projects.subtitle}</p>
      </header>

      <div className="project-grid">
        {projects.map((project) => {
          const isSelected = selectedProjectId === project.id;
          return (
            <article
              key={project.id}
              className={isSelected ? 'project-card is-selected' : 'project-card'}
              onClick={() => setSelectedProjectId(project.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProjectId(project.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="project-head">
                <h3>{project.name}</h3>
                <span>{project.type}</span>
              </div>
              <p>{project.summary}</p>

              <div className="chips">
                {project.facets.map((facet) => (
                  <span key={facet} className="chip">
                    {facet}
                  </span>
                ))}
              </div>

              <div className="links-row">
                <span>{t.projects.linksLabel}</span>
                <div className="project-links">
                  <a href={project.links.repo} target="_blank" rel="noreferrer">
                    {t.projects.repo}
                  </a>
                  <a href={project.links.demo} target="_blank" rel="noreferrer">
                    {t.projects.demo}
                  </a>
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
    <section className="panel">
      <header className="section-header">
        <h2>{t.caseStudy.title}</h2>
        <p>{t.caseStudy.subtitle}</p>
      </header>
      <div className="timeline-rail">
        {t.caseStudy.timeline.map((item) => (
          <article key={item.stage} className="timeline-item">
            <p className="stage">{item.stage}</p>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function StackSection({ t, isVisible }) {
  if (!isVisible) return null;

  return (
    <section className="panel">
      <header className="section-header">
        <h2>{t.stack.title}</h2>
        <p>{t.stack.subtitle}</p>
      </header>

      <div className="stack-grid">
        {t.stack.items.map((item) => (
          <article key={item.area} className="stack-card">
            <h3>{item.area}</h3>
            <ul>
              {item.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ t, isVisible }) {
  if (!isVisible) return null;

  return (
    <section className="panel">
      <header className="section-header">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.subtitle}</p>
      </header>

      <div className="contact-grid">
        {t.contact.channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.external ? '_blank' : undefined}
            rel={channel.external ? 'noreferrer' : undefined}
          >
            {channel.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default App;
