import { useMemo, useState } from 'react';
import { labels, projects, stack, timeline } from './data/content';

const sections = ['overview', 'projects', 'caseStudy', 'stack', 'contact'];

function App() {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const t = useMemo(() => labels[language], [language]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Miguel Bayter</p>
          <h1>{t.topbar.title}</h1>
        </div>

        <div className="topbar-actions">
          <span className="status-pill">{t.topbar.status}</span>
          <button
            type="button"
            className="lang-button"
            onClick={() => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar" aria-label="Navigation">
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
            isVisible={activeSection === 'projects'}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />

          <CaseStudySection t={t} isVisible={activeSection === 'caseStudy'} />
          <StackSection t={t} isVisible={activeSection === 'stack'} />
          <ContactSection t={t} isVisible={activeSection === 'contact'} />

          <footer className="footer-note">{t.footer}</footer>
        </main>

        <aside className="detail-drawer" aria-label="Selected project details">
          <h2>{selectedProject.name}</h2>
          <p>{selectedProject.summary}</p>

          <div className="drawer-block">
            <h3>Engineering Decisions</h3>
            <ul>
              {selectedProject.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>

          <div className="drawer-block">
            <h3>Metrics</h3>
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

function ProjectsSection({ t, isVisible, selectedProject, setSelectedProject }) {
  if (!isVisible) return null;

  return (
    <section className="panel">
      <header className="section-header">
        <h2>{t.projects.title}</h2>
        <p>{t.projects.subtitle}</p>
      </header>

      <div className="project-grid">
        {projects.map((project) => {
          const isSelected = selectedProject.name === project.name;
          return (
            <article
              key={project.name}
              className={isSelected ? 'project-card is-selected' : 'project-card'}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProject(project);
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
                <a href={project.links.repo} target="_blank" rel="noreferrer">
                  {t.projects.links}: Repo
                </a>
                <a href={project.links.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
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
        {timeline.map((item) => (
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
        {stack.map((item) => (
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
        <a href="https://github.com/Miguel-Bayter" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:you@example.com">{t.contact.cta}</a>
      </div>
    </section>
  );
}

export default App;
