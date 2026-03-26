import type { ContentLocale, Project } from '../types';
import overviewPhoto from '../img/overview.png';
import { FiArrowUpRight } from 'react-icons/fi';
import TechCarousel from './TechCarousel';
import TechIcon from './TechIcon';
import { resolveFacetTone, resolveFacetTechIcon } from '../utils/facets';

interface OverviewSectionProps {
  t: ContentLocale;
  language: string;
  projects: Project[];
  isVisible: boolean;
  onNavigate: (section: string) => void;
  onSelectProject: (id: string) => void;
}

export default function OverviewSection({
  t,
  language,
  projects,
  isVisible,
  onNavigate,
  onSelectProject,
}: OverviewSectionProps) {
  if (!isVisible) return null;

  const heroButtonBase = 'overview-hero-cta group min-w-0 flex-1 basis-0';

  return (
    <section className="animate-panel-in rounded-md border border-line/18 bg-surface-2/72 p-4 section-rhythm-light md:p-5">
      <article className="overview-hero-showcase relative overflow-hidden rounded-md border">
        <span className="overview-accent-dot overview-accent-cyan absolute left-7 top-6" aria-hidden="true" />
        <span className="overview-accent-square overview-accent-cyan overview-accent-optional absolute right-8 top-12" aria-hidden="true" />
        <span className="overview-accent-dot overview-accent-amber absolute right-10 bottom-6" aria-hidden="true" />
        <div className="overview-hero-overlay" aria-hidden="true" />

        <div
          className={`overview-hero-layout relative z-10 px-5 py-6 md:px-7 md:py-7 lg:px-8 lg:py-8 ${
            language === 'en' ? 'overview-hero-layout-en' : ''
          }`}
        >
          <div className="overview-hero-content max-w-[35rem] max-[420px]:max-w-none">
            <p className="overview-hero-name m-0 text-[1.35rem] font-medium leading-[1.08] tracking-[-0.026em] max-[420px]:text-[1.1rem] md:text-[1.62rem]">
              {t.overview.hero.nameLine}
            </p>
            <h2 className="overview-hero-title mb-0 mt-2 text-[1.62rem] font-semibold leading-[1.02] tracking-[-0.032em] max-[420px]:text-[1.2rem] max-[420px]:leading-[1.08] md:text-[1.94rem]">
              {t.overview.hero.roleLinePrefix ? `${t.overview.hero.roleLinePrefix} ` : ''}
              <span className="overview-hero-highlight">{t.overview.hero.roleLineHighlight}</span>
              {t.overview.hero.roleLineSuffix ? ` ${t.overview.hero.roleLineSuffix}` : ''}
            </h2>
            <p className="overview-hero-copy mb-0 mt-4 max-w-[32rem] text-[0.9rem] leading-[1.62] max-[420px]:text-[0.78rem] max-[420px]:leading-[1.56] md:text-[0.96rem]">
              {t.overview.hero.description}
            </p>

            <div className="overview-cta-row mt-6 max-[420px]:mt-5">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className={`${heroButtonBase} overview-hero-btn-primary`}
              >
                <span className="overview-hero-cta-copy">
                  <span className="overview-hero-cta-dot overview-hero-cta-dot-primary" aria-hidden="true" />
                  <span className="overview-hero-cta-label">{t.overview.hero.ctaPrimary}</span>
                </span>
                <span aria-hidden="true" className="overview-hero-cta-arrow">
                  <FiArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className={`${heroButtonBase} overview-hero-btn-secondary`}
              >
                <span className="overview-hero-cta-copy">
                  <span className="overview-hero-cta-dot overview-hero-cta-dot-secondary" aria-hidden="true" />
                  <span className="overview-hero-cta-label">{t.overview.hero.ctaSecondary}</span>
                </span>
                <span aria-hidden="true" className="overview-hero-cta-arrow">
                  <FiArrowUpRight className="h-3.5 w-3.5" />
                </span>
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
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="section-kicker m-0 text-[0.8rem] font-mono font-semibold tracking-[0.14em] uppercase text-ink-3">{t.overview.proofTitle}</h3>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="section-action-ghost inline-flex items-center justify-center rounded-full border border-line/20 bg-surface-4/68 px-4 py-2 text-center font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink-3 transition-all duration-150 hover:border-signal-cyan/55 hover:bg-surface-5 hover:text-ink"
          >
            {t.overview.proofAction}
          </button>
        </div>

        <div className="proof-strip-track md:grid md:grid-cols-2 md:gap-4">
          {[...projects]
            .sort((a, b) => {
              const createdDiff = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
              return createdDiff !== 0 ? createdDiff : a.order - b.order;
            })
            .slice(0, 2)
            .map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => {
                onSelectProject(project.id);
                onNavigate('projects');
              }}
               className="proof-card flex h-full flex-col rounded-md border border-line/20 bg-surface-4 p-4 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-line/30"
            >
              <div className="proof-card-head flex items-center justify-between gap-2 mb-2">
                <p className="proof-card-type m-0 text-ink-3 text-[0.68rem] font-mono tracking-[0.08em] uppercase">{project.type}</p>
              </div>
              <h4 className="proof-card-title mb-0 mt-0 text-[1rem] font-semibold tracking-[-0.016em] text-ink">{project.name}</h4>
              <p className="proof-card-impact mb-0 mt-2 text-[0.88rem] leading-[1.52] text-ink-2">{project.impact}</p>
              <div className="proof-card-tech mt-3 flex flex-wrap gap-1.5">
                {project.facets.slice(0, 4).map((facet) => (
                  <span key={facet} className={`project-tech-pill project-tech-pill-${resolveFacetTone(facet)}`}>
                    <TechIcon tech={resolveFacetTechIcon(facet)} className="project-tech-pill-icon" />
                    <span className="project-tech-pill-label">{facet}</span>
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
