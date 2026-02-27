import type { Project, ContentLocale } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './icons';
import { resolvePrimaryLanguage } from '../utils/facets';

interface ProjectPulseCardProps {
  project: Project;
  t: ContentLocale;
}

export default function ProjectPulseCard({ project, t }: ProjectPulseCardProps) {
  const hasDemo = Boolean(project.links.demo);
  const primaryLanguage = resolvePrimaryLanguage(project.facets);

  return (
    <aside className="project-pulse-card border border-line/20 rounded-lg bg-surface-3 flex flex-col overflow-hidden animate-panel-in sticky top-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-line/10">
        {project.category && (
          <span className="project-category-badge mb-2 inline-block">{project.category}</span>
        )}
        <h3 className="m-0 text-ink text-[1.05rem] font-semibold tracking-[-0.01em] leading-[1.2]">
          {project.name}
        </h3>
        <p className="mt-1 mb-0 text-ink-3 text-[0.68rem] font-mono tracking-[0.07em] uppercase">
          {project.type} · {primaryLanguage}
        </p>
      </div>

      {/* Metrics */}
      <div className="px-4 py-3 border-b border-line/10">
        <p className="m-0 mb-2.5 text-[0.62rem] font-mono tracking-[0.1em] uppercase text-signal-cyan opacity-90">
          {t.projects.pulseMetrics}
        </p>
        <div className="grid grid-cols-1 gap-1.5">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex items-baseline justify-between gap-2 bg-surface-4/60 border border-line/10 rounded-xs px-2.5 py-1.5">
              <span className="text-ink-3 text-[0.68rem] font-mono tracking-[0.05em] truncate">{metric.label}</span>
              <span className="text-ink text-[0.78rem] font-semibold font-mono whitespace-nowrap">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture decisions */}
      {project.decisions.length > 0 && (
        <div className="px-4 py-3 border-b border-line/10">
          <p className="m-0 mb-2.5 text-[0.62rem] font-mono tracking-[0.1em] uppercase text-signal-amber opacity-90">
            {t.projects.pulseDecisions}
          </p>
          <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
            {project.decisions.map((decision) => (
              <li key={decision} className="flex items-start gap-2 text-ink-2 text-[0.78rem] leading-[1.48]">
                <span className="text-signal-amber/70 font-mono text-[0.7rem] mt-px flex-shrink-0">›</span>
                <span>{decision}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Impact */}
      <div className="px-4 py-3 border-b border-line/10 flex-1">
        <p className="m-0 mb-2 text-[0.62rem] font-mono tracking-[0.1em] uppercase text-signal-mint opacity-90">
          {t.projects.pulseImpact}
        </p>
        <p className="m-0 text-ink-2 text-[0.81rem] leading-[1.55]">{project.impact}</p>
      </div>

      {/* Links */}
      <div className="px-4 py-3 flex gap-2">
        <a
          href={project.links.repo}
          target="_blank"
          rel="noreferrer"
          className="project-action project-action-repo flex-1 justify-center"
        >
          <GitHubIcon className="w-3.5 h-3.5" />
          {t.projects.repo}
        </a>
        {hasDemo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="project-action project-action-demo flex-1 justify-center"
          >
            <ExternalLinkIcon className="w-3.5 h-3.5" />
            {t.projects.demo}
          </a>
        ) : (
          <span className="project-action project-action-disabled flex-1 justify-center">{t.projects.noDemo}</span>
        )}
      </div>
    </aside>
  );
}
