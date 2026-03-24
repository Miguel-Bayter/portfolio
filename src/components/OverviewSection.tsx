import type { ContentLocale, Project } from '../types';
import overviewPhoto from '../img/overview.png';
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
          ))}
        </div>
      </div>
    </section>
  );
}
