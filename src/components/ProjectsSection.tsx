import { useState } from 'react';
import type { ContentLocale, Project, FacetGroup } from '../types';
import projectPlaceholder from '../img/project-placeholder.svg';
import TechIcon from './TechIcon';
import { GitHubIcon, ExternalLinkIcon, MaintenanceIcon } from './icons';
import {
  resolveFacetTechIcon,
  resolveFacetTone,
  resolveFacetGroup,
} from '../utils/facets';

interface FilterOption {
  key: string;
  label: string;
  icon: string | null;
  group?: FacetGroup;
  count: number;
}

interface ProjectsSectionProps {
  t: ContentLocale;
  projects: Project[];
  isVisible: boolean;
  selectedProjectId: string;
  setSelectedProjectId: (id: string) => void;
  projectFilter: string;
  setProjectFilter: (filter: string) => void;
}

export default function ProjectsSection({
  t,
  projects,
  isVisible,
  selectedProjectId,
  setSelectedProjectId,
  projectFilter,
  setProjectFilter,
}: ProjectsSectionProps) {
  const [areFiltersOpen, setAreFiltersOpen] = useState(false);
  const [openFilterGroup, setOpenFilterGroup] = useState<FacetGroup | null>(null);

  if (!isVisible) return null;

  const facetOptions = Array.from(
    new Map(
      projects.flatMap((project) => project.facets.map((facet) => [facet.toLowerCase(), facet])),
    ).values(),
  )
    .sort((left, right) => {
      const priority: Record<string, number> = {
        typescript: 0,
        javascript: 1,
        'react 19': 2,
        'node.js': 3,
        express: 4,
        prisma: 5,
        'socket.io': 6,
        i18n: 7,
      };

      const leftPriority = priority[left.toLowerCase()] ?? 20;
      const rightPriority = priority[right.toLowerCase()] ?? 20;

      if (leftPriority !== rightPriority) return leftPriority - rightPriority;
      return left.localeCompare(right);
    });

  const filterCountByFacet = new Map(
    facetOptions.map((facet) => [
      facet.toLowerCase(),
      projects.filter((project) => project.facets.some((projectFacet) => projectFacet.toLowerCase() === facet.toLowerCase())).length,
    ]),
  );

  const projectFilters: FilterOption[] = [
    { key: 'all', label: t.projects.filterAll, icon: null, count: projects.length },
    ...facetOptions.map((facet) => ({
      key: `facet:${facet.toLowerCase()}`,
      label: facet,
      icon: resolveFacetTechIcon(facet),
      group: resolveFacetGroup(facet),
      count: filterCountByFacet.get(facet.toLowerCase()) ?? 0,
    })),
  ];

  const groupedFilters: Record<FacetGroup, FilterOption[]> = {
    language: projectFilters.filter((f) => f.group === 'language'),
    framework: projectFilters.filter((f) => f.group === 'framework'),
    backend: projectFilters.filter((f) => f.group === 'backend'),
    data: projectFilters.filter((f) => f.group === 'data'),
    cross: projectFilters.filter((f) => f.group === 'cross'),
  };
  const filterGroupOrder: FacetGroup[] = ['language', 'framework', 'backend', 'data', 'cross'];
  const totalStackFilters = facetOptions.length;
  const openGroupFilters = openFilterGroup ? (groupedFilters[openFilterGroup] ?? []) : [];
  const openGroupRows = openGroupFilters.length > 2 ? 2 : openGroupFilters.length > 0 ? 1 : 0;
  const openGroupSpace = openGroupRows === 2 ? '4.4rem' : openGroupRows === 1 ? '3.2rem' : '0rem';

  const filterKeySet = new Set(projectFilters.map((f) => f.key));
  const effectiveFilter = filterKeySet.has(projectFilter) ? projectFilter : 'all';
  const activeFacet = effectiveFilter.startsWith('facet:') ? effectiveFilter.replace('facet:', '') : null;

  const visibleProjects = activeFacet
    ? projects
      .filter((project) => project.facets.some((facet) => facet.toLowerCase() === activeFacet))
      .sort((left, right) => {
        const leftIsSelected = left.id === selectedProjectId;
        const rightIsSelected = right.id === selectedProjectId;
        if (leftIsSelected !== rightIsSelected) return leftIsSelected ? -1 : 1;

        const leftFacetIndex = left.facets.findIndex((facet) => facet.toLowerCase() === activeFacet);
        const rightFacetIndex = right.facets.findIndex((facet) => facet.toLowerCase() === activeFacet);

        if (leftFacetIndex !== rightFacetIndex) return leftFacetIndex - rightFacetIndex;

        const leftHasDemo = Boolean(left.links.demo);
        const rightHasDemo = Boolean(right.links.demo);
        if (leftHasDemo !== rightHasDemo) return leftHasDemo ? -1 : 1;

        return left.name.localeCompare(right.name);
      })
    : projects;

  const projectCount = Math.max(1, visibleProjects.length);
  const smGridColumns = Math.min(2, projectCount);
  const lgGridColumns = Math.min(3, projectCount);
  const xlGridColumns = Math.min(4, projectCount);
  const xxlGridColumns = Math.min(5, projectCount);

  const applyFilter = (filterOption: FilterOption) => {
    const nextVisible = filterOption.key === 'all'
      ? projects
      : projects.filter((project) => project.facets.some((facet) => facet.toLowerCase() === filterOption.label.toLowerCase()));

    if (nextVisible.length && !nextVisible.some((project) => project.id === selectedProjectId)) {
      setSelectedProjectId(nextVisible[0].id);
    }

    setProjectFilter(filterOption.key);
    setOpenFilterGroup(null);
  };

  const handleProjectCardPointerMove = (event: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 900) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);
  };

  const handleProjectCardPointerLeave = (event: React.MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.style.removeProperty('--spotlight-x');
    card.style.removeProperty('--spotlight-y');
  };

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-gradient-to-b from-surface-4/45 to-surface-2/78 section-rhythm-light">
      <header className="mb-1">
        <button
          type="button"
          className="projects-filter-toggle mt-0"
          onClick={() => setAreFiltersOpen((previous) => !previous)}
          aria-expanded={areFiltersOpen}
        >
          {areFiltersOpen ? t.projects.filtersClose : t.projects.filtersOpen} ({totalStackFilters})
        </button>
        <div
          className={`projects-filter-row mt-0 flex flex-wrap gap-2 ${areFiltersOpen ? 'is-open' : ''} ${openFilterGroup ? 'has-open-group' : ''}`}
          style={{ '--filters-open-space': openGroupSpace } as React.CSSProperties}
        >
          {projectFilters.slice(0, 1).map((filterOption) => {
            const isActiveFilter = effectiveFilter === filterOption.key;

            return (
              <button
                key={filterOption.key}
                type="button"
                onClick={() => applyFilter(filterOption)}
                className={`projects-filter-chip projects-filter-chip-all ${isActiveFilter ? 'is-active' : ''}`}
              >
                {filterOption.icon ? <TechIcon tech={filterOption.icon} className="projects-filter-icon" /> : null}
                <span>{filterOption.label}</span>
                <span className="projects-filter-count">{filterOption.count}</span>
              </button>
            );
          })}

          {filterGroupOrder.map((groupKey) => {
            const filters = groupedFilters[groupKey] ?? [];
            if (!filters.length) return null;
            const isGroupOpen = openFilterGroup === groupKey;

            return (
              <div key={groupKey} className={`projects-filter-group ${isGroupOpen ? 'is-open' : 'is-collapsed'}`}>
                <button
                  type="button"
                  className="projects-filter-group-toggle"
                  aria-expanded={isGroupOpen}
                  onClick={() => {
                    setOpenFilterGroup((previous) => (previous === groupKey ? null : groupKey));
                  }}
                >
                  <span className="projects-filter-group-label">{t.projects.filterGroups?.[groupKey] ?? groupKey}</span>
                  <span className="projects-filter-group-meta">{filters.length}</span>
                  <span className={`projects-filter-group-caret ${isGroupOpen ? 'is-open' : ''}`}>▾</span>
                </button>
                <div className="projects-filter-group-chips">
                  {filters.map((filterOption) => {
                    const isActiveFilter = effectiveFilter === filterOption.key;

                    return (
                      <button
                        key={filterOption.key}
                        type="button"
                        onClick={() => applyFilter(filterOption)}
                        className={`projects-filter-chip ${isActiveFilter ? 'is-active' : ''}`}
                      >
                        {filterOption.icon ? <TechIcon tech={filterOption.icon} className="projects-filter-icon" /> : null}
                        <span>{filterOption.label}</span>
                        <span className="projects-filter-count">{filterOption.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </header>

      <div
        className="projects-grid projects-grid-dynamic mt-3 md:mt-4 grid grid-cols-1 gap-3"
        style={{
          '--projects-columns-sm': smGridColumns,
          '--projects-columns-lg': lgGridColumns,
          '--projects-columns-xl': xlGridColumns,
          '--projects-columns-2xl': xxlGridColumns,
        } as React.CSSProperties}
      >
          {visibleProjects.length === 0 ? (
            <article className="project-empty-state border border-line/20 rounded-md p-5 bg-surface-3/58 text-ink-2">
              <p className="m-0 text-[0.82rem] font-mono tracking-[0.05em] uppercase text-ink-3">{t.projects.emptyStateTitle}</p>
              <p className="mt-2 mb-0 text-[0.9rem] leading-[1.52]">{t.projects.emptyStateText}</p>
            </article>
          ) : visibleProjects.map((project) => {
            const isSelected = selectedProjectId === project.id;
            const hasDemo = Boolean(project.links.demo);
            const previewSrc = project.previewImage;
            const projectFrontNote = project.category || project.type;
            const hasActiveFacet = Boolean(activeFacet) && project.facets.some((facet) => facet.toLowerCase() === activeFacet);

            return (
              <article
                key={project.id}
                className={`project-card project-showcase project-flip-card border border-line/20 rounded-lg transition-all duration-150 overflow-hidden ${hasActiveFacet ? 'project-card-filter-accent' : ''} ${
                  isSelected
                    ? 'bg-surface-4 border-signal-cyan/50 shadow-[inset_0_0_0_1px_rgba(59,176,242,0.16),0_14px_30px_rgba(10,19,30,0.18)]'
                    : 'bg-surface-3 hover:border-line/40 hover:bg-surface-4'
                }`}
                onMouseMove={handleProjectCardPointerMove}
                onMouseLeave={handleProjectCardPointerLeave}
              >
                <span className="project-spotlight" aria-hidden="true" />
                <div className="project-flip-inner">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProjectId(project.id);
                    }}
                    className="project-flip-face project-flip-front project-card-select w-full text-left bg-transparent border-0 p-0 cursor-pointer"
                  >
                    <div className="project-showcase-media-front">
                      <img
                        src={previewSrc}
                        alt={`${project.name} preview`}
                        className={`project-showcase-image project-showcase-image-${project.id}`}
                        loading="lazy"
                        onError={(event) => {
                          const image = event.currentTarget;
                          if (image.dataset['fallback'] === '1') return;
                          image.dataset['fallback'] = '1';
                          image.src = projectPlaceholder;
                        }}
                      />
                    </div>

                    <div className="project-front-overlay p-3 md:p-3.5">
                      <div className="project-front-head flex items-center gap-2">
                        <span className="project-front-badge" aria-hidden="true">
                          <TechIcon tech={resolveFacetTechIcon(project.facets[0] ?? 'JavaScript')} className="project-front-badge-icon" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="project-front-title m-0">{project.name}</h3>
                          <p className="project-front-subtitle mt-1 mb-0">{project.previewLabel || project.summary}</p>
                        </div>
                      </div>

                      <div className="project-front-foot mt-2.5 flex items-center">
                        <span className="project-front-foot-note">{projectFrontNote}</span>
                      </div>
                    </div>
                  </button>

                  <div className="project-flip-face project-flip-back px-3 md:px-3.5 py-3 md:py-3.5">
                    <div className="project-back-content">
                      <div className="project-back-head flex items-start justify-between gap-2">
                        <h3 className="m-0 text-ink text-[0.9rem] font-semibold tracking-[-0.01em]">{project.name}</h3>
                        <span className="project-back-hint text-[0.58rem] font-mono tracking-[0.08em] uppercase text-signal-cyan">3D</span>
                      </div>

                      <p className="project-back-summary m-0">{project.summary}</p>

                      <div className="project-back-tech-list flex flex-wrap gap-1.5">
                        {project.facets.slice(0, 3).map((facet) => {
                          const isActiveFacetTag = Boolean(activeFacet) && facet.toLowerCase() === activeFacet;

                          return (
                            <span
                              key={facet}
                              className={`project-tech-pill project-tech-pill-${resolveFacetTone(facet)} ${isActiveFacetTag ? 'is-active' : ''}`}
                            >
                              <TechIcon tech={resolveFacetTechIcon(facet)} className="project-tech-pill-icon" />
                              <span>{facet}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="project-actions mt-2.5 border-t border-line/10 pt-2.5 flex flex-wrap gap-2">
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action project-action-repo"
                        title={t.projects.repo}
                        aria-label={t.projects.repo}
                        data-tooltip={t.projects.repo}
                      >
                        <GitHubIcon className="project-action-icon w-3.5 h-3.5" />
                        <span className="project-action-label">{t.projects.repo}</span>
                      </a>
                      {hasDemo ? (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="project-action project-action-demo"
                          title={t.projects.demo}
                          aria-label={t.projects.demo}
                          data-tooltip={t.projects.demo}
                        >
                          <ExternalLinkIcon className="project-action-icon w-3.5 h-3.5" />
                          <span className="project-action-label">{t.projects.demo}</span>
                        </a>
                      ) : (
                        <span
                          className="project-action project-action-disabled"
                          title={t.projects.noDemo}
                          aria-label={t.projects.noDemo}
                          data-tooltip={t.projects.noDemo}
                        >
                          <MaintenanceIcon className="project-action-icon w-3.5 h-3.5" />
                          <span className="project-action-label">{t.projects.noDemo}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}
