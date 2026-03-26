import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
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
  const [mobilePendingFilter, setMobilePendingFilter] = useState(projectFilter);
  const [openFilterGroup, setOpenFilterGroup] = useState<FacetGroup | null>(null);
  const [facetSortDirection, setFacetSortDirection] = useState<Record<string, 'desc' | 'asc'>>({});
  const [flippedProjectId, setFlippedProjectId] = useState<string | null>(null);

  const closeFilters = useCallback(() => {
    setAreFiltersOpen(false);
    setOpenFilterGroup(null);
  }, []);

  useEffect(() => {
    if (!areFiltersOpen) return undefined;

    setMobilePendingFilter(projectFilter);

    document.body.classList.add('overflow-hidden');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeFilters();
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) closeFilters();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [areFiltersOpen, closeFilters, projectFilter]);

  if (!isVisible) return null;

  const facetComplexityOrder: Record<string, number> = {
    'next.js': 0,
    nestjs: 1,
    'socket.io': 2,
    prisma: 3,
    typescript: 4,
    'react 19': 5,
    react: 6,
    vite: 7,
    tailwind: 8,
    'node.js': 9,
    express: 10,
    mongodb: 11,
    mysql: 12,
    i18n: 13,
    javascript: 14,
  };

  const sortFacetsByComplexity = (facets: string[]) =>
    facets.slice().sort((left, right) => {
      const leftKey = left.toLowerCase();
      const rightKey = right.toLowerCase();
      const leftRank = facetComplexityOrder[leftKey] ?? 99;
      const rightRank = facetComplexityOrder[rightKey] ?? 99;
      if (leftRank !== rightRank) return leftRank - rightRank;
      return left.localeCompare(right);
    });

  const facetOptions = Array.from(
    new Map(
      projects.flatMap((project) => project.facets.map((facet) => [facet.toLowerCase(), facet])),
    ).values(),
  )
    .sort((left, right) => {
      const leftRank = facetComplexityOrder[left.toLowerCase()] ?? 99;
      const rightRank = facetComplexityOrder[right.toLowerCase()] ?? 99;
      if (leftRank !== rightRank) return leftRank - rightRank;
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
  const totalFacetFilters = facetOptions.length;
  const openGroupFilters = openFilterGroup ? (groupedFilters[openFilterGroup] ?? []) : [];

  const filterKeySet = new Set(projectFilters.map((f) => f.key));
  const effectiveFilter = filterKeySet.has(projectFilter) ? projectFilter : 'all';
  const activeFacet = effectiveFilter.startsWith('facet:') ? effectiveFilter.replace('facet:', '') : null;
  const activeFacetSort = activeFacet ? (facetSortDirection[activeFacet] ?? 'desc') : 'desc';
  const activeFilterLabel = projectFilters.find((filter) => filter.key === effectiveFilter)?.label;

  const visibleProjects = activeFacet
    ? projects
      .filter((project) => project.facets.some((facet) => facet.toLowerCase() === activeFacet))
      .sort((left, right) => {
        const leftDate = Date.parse(left.createdAt);
        const rightDate = Date.parse(right.createdAt);
        if (leftDate !== rightDate) {
          return activeFacetSort === 'desc' ? rightDate - leftDate : leftDate - rightDate;
        }
        return left.name.localeCompare(right.name);
      })
    : projects;

  const projectCount = Math.max(1, visibleProjects.length);
  const smGridColumns = Math.min(2, projectCount);
  const lgGridColumns = Math.min(3, projectCount);
  const xlGridColumns = Math.min(3, projectCount);
  const xxlGridColumns = Math.min(3, projectCount);

  const applyFilter = (filterOption: FilterOption) => {
    const nextVisible = filterOption.key === 'all'
      ? projects
      : projects.filter((project) => project.facets.some((facet) => facet.toLowerCase() === filterOption.label.toLowerCase()));

    if (filterOption.key.startsWith('facet:')) {
      const facetKey = filterOption.key.replace('facet:', '');
      setFacetSortDirection((prev) => {
        const current = prev[facetKey] ?? 'desc';
        const next = activeFacet === facetKey ? (current === 'desc' ? 'asc' : 'desc') : 'desc';
        return { ...prev, [facetKey]: next };
      });
    }

    if (nextVisible.length && !nextVisible.some((project) => project.id === selectedProjectId)) {
      setSelectedProjectId(nextVisible[0].id);
    }

    setProjectFilter(filterOption.key);
    setAreFiltersOpen(false);
    setOpenFilterGroup(null);
  };

  const applyMobilePendingFilter = () => {
    const pendingFilter = projectFilters.find((filterOption) => filterOption.key === mobilePendingFilter);
    if (!pendingFilter) {
      closeFilters();
      return;
    }

    applyFilter(pendingFilter);
  };

  const renderFilterChip = (
    filterOption: FilterOption,
    options?: {
      extraClassName?: string;
      selectedKey?: string;
      onClick?: () => void;
    },
  ) => {
    const selectedKey = options?.selectedKey ?? effectiveFilter;
    const isActiveFilter = selectedKey === filterOption.key;
    const facetKey = filterOption.key.startsWith('facet:')
      ? filterOption.key.replace('facet:', '')
      : null;
    const sortDirection = facetKey ? (facetSortDirection[facetKey] ?? 'desc') : 'desc';

    return (
      <button
        key={filterOption.key}
        type="button"
        onClick={options?.onClick ?? (() => applyFilter(filterOption))}
        className={`projects-filter-chip ${filterOption.key === 'all' ? 'projects-filter-chip-all' : ''} ${isActiveFilter ? 'is-active' : ''} ${options?.extraClassName ?? ''}`.trim()}
        data-group={filterOption.group ?? 'all'}
      >
        {filterOption.icon ? <TechIcon tech={filterOption.icon} className="projects-filter-icon" /> : null}
        <span>{filterOption.label}</span>
        {isActiveFilter && facetKey ? (
          <span className="projects-filter-sort" aria-hidden="true">
            {sortDirection === 'desc' ? '↓' : '↑'}
          </span>
        ) : null}
        <span className="projects-filter-count">{filterOption.count}</span>
      </button>
    );
  };

  const handleTechNavClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const direction = event.currentTarget.dataset.direction === 'right' ? 1 : -1;
    const carousel = event.currentTarget.closest<HTMLElement>('.project-back-tech-carousel');
    if (!carousel) return;
    const list = carousel.querySelector<HTMLDivElement>('.project-back-tech-list');
    const track = carousel.querySelector<HTMLElement>('.project-back-tech-track');
    if (!list || !track) return;

    // Pause marquee animation and switch to manual scroll mode
    track.style.animation = 'none';
    track.style.transform = 'none';

    const firstPill = list.querySelector<HTMLElement>('.project-tech-pill');
    const pillWidth = firstPill ? firstPill.offsetWidth : 72;
    const gap = 8;
    const step = (pillWidth + gap) * direction;
    const halfScroll = list.scrollWidth / 2;

    // Seed initial scroll to middle of the duplicated track so both directions work
    if (list.scrollLeft === 0 && direction === -1) {
      list.scrollTo({ left: halfScroll, behavior: 'auto' });
      return;
    }

    let nextScroll = list.scrollLeft + step;

    // Wrap forward: reached second copy → jump to same position in first copy
    if (nextScroll >= halfScroll) {
      list.scrollTo({ left: nextScroll - halfScroll, behavior: 'auto' });
      return;
    }
    // Wrap backward: went below 0 → jump to same position in second copy
    if (nextScroll < 0) {
      list.scrollTo({ left: halfScroll + nextScroll, behavior: 'auto' });
      return;
    }

    list.scrollBy({ left: step, behavior: 'smooth' });
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

  const isTouchFlipMode = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  return (
    <section className="border border-line/20 rounded-md p-5 md:p-6 animate-panel-in bg-gradient-to-b from-surface-4/45 to-surface-2/78 section-rhythm-light">
      <header className="projects-filter-shell mb-1">
        <div className="flex items-center justify-between gap-2 md:hidden">
          <button
            type="button"
            className="projects-filter-toggle mt-0 inline-flex"
            onClick={() => setAreFiltersOpen(true)}
            aria-expanded={areFiltersOpen}
            aria-controls="projects-mobile-filters"
          >
            {t.projects.filtersOpen} ({totalFacetFilters})
          </button>

          {effectiveFilter !== 'all' ? (
            <span className="inline-flex min-w-0 max-w-[52%] items-center justify-end rounded-full border border-line/20 bg-surface-1/55 px-2.5 py-1 text-[0.63rem] font-mono uppercase tracking-[0.08em] text-ink-3">
              <span className="truncate">{activeFilterLabel}</span>
            </span>
          ) : null}
        </div>

        <div className="hidden md:block">
          <div className="space-y-3">
            <div className="projects-filter-row mt-0 hidden md:flex">
              {projectFilters.slice(0, 1).map((filterOption) => renderFilterChip(filterOption))}

              {filterGroupOrder.map((groupKey) => {
                const filters = groupedFilters[groupKey] ?? [];
                if (!filters.length) return null;
                const isGroupOpen = openFilterGroup === groupKey;

                return (
                  <div key={groupKey} className={`projects-filter-group ${isGroupOpen ? 'is-open' : ''}`}>
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
                  </div>
                );
              })}
            </div>

            {openFilterGroup ? (
              <div className="projects-filter-panel">
                <div className="projects-filter-panel-head">
                  <p className="projects-filter-panel-title m-0">{t.projects.filterGroups?.[openFilterGroup] ?? openFilterGroup}</p>
                  <span className="projects-filter-panel-count">{openGroupFilters.length}</span>
                </div>

                <div className="projects-filter-panel-grid">
                  {openGroupFilters.map((filterOption) => renderFilterChip(filterOption, { extraClassName: 'w-full justify-between' }))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {areFiltersOpen && typeof document !== 'undefined' && createPortal(
          <>
            <button
              type="button"
              className="projects-mobile-sheet-backdrop fixed inset-0 z-40 bg-[rgb(2_8_16/0.68)] backdrop-blur-[3px] md:hidden"
              aria-label={t.projects.filtersClose}
              onClick={closeFilters}
            />

            <div className="projects-mobile-sheet-frame fixed inset-0 z-50 flex items-end justify-center md:hidden">
              <div
                id="projects-mobile-filters"
                role="dialog"
                aria-modal="true"
                aria-label={t.projects.filtersOpen}
                className="projects-mobile-sheet relative flex max-h-[min(86dvh,42rem)] w-full max-w-xl flex-col overflow-hidden rounded-t-[1.75rem] border border-line/18 bg-[linear-gradient(180deg,rgba(12,18,30,0.98)_0%,rgba(15,24,38,0.99)_54%,rgba(11,18,28,1)_100%)] shadow-[0_-20px_65px_rgba(2,6,16,0.52)] ring-1 ring-white/5"
              >
                <div className="projects-mobile-sheet-header sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-white/8 bg-[linear-gradient(180deg,rgba(15,22,36,0.98)_0%,rgba(13,20,33,0.92)_100%)] px-4 py-4 backdrop-blur-md">
                  <div className="min-w-0">
                    <p className="m-0 text-sm font-semibold tracking-[-0.01em] text-ink">{totalFacetFilters} {t.projects.filtersOptionsLabel}</p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-3 transition-all duration-150 hover:border-signal-cyan/28 hover:bg-white/10 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45"
                    onClick={closeFilters}
                    aria-label={t.projects.filtersClose}
                  >
                    <FiX className="h-5 w-5" />
                  </button>
                </div>

                <div className="projects-mobile-sheet-body flex-1 overflow-y-auto bg-[linear-gradient(180deg,rgba(8,12,20,0.08)_0%,rgba(8,12,20,0.22)_100%)] px-4 py-4 pb-28">
                  <div className="flex flex-wrap gap-2">
                    {projectFilters.slice(0, 1).map((filterOption) => renderFilterChip(filterOption, {
                      extraClassName: 'w-full justify-between rounded-xl',
                      selectedKey: mobilePendingFilter,
                      onClick: () => setMobilePendingFilter(filterOption.key),
                    }))}
                  </div>

                  <div className="mt-4 space-y-3.5">
                    {filterGroupOrder.map((groupKey) => {
                      const filters = groupedFilters[groupKey] ?? [];
                      if (!filters.length) return null;

                      return (
                        <section key={groupKey} className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.018)_100%)] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <p className="projects-filter-mobile-group-title m-0">
                              {t.projects.filterGroups?.[groupKey] ?? groupKey}
                            </p>
                            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-white/10 bg-surface-0/58 px-1.5 text-[0.58rem] font-mono text-ink-3">
                              {filters.length}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:grid-cols-3">
                            {filters.map((filterOption) => renderFilterChip(filterOption, {
                              extraClassName: 'w-full justify-between rounded-xl',
                              selectedKey: mobilePendingFilter,
                              onClick: () => setMobilePendingFilter(filterOption.key),
                            }))}
                          </div>
                        </section>
                      );
                    })}
                  </div>
                </div>

                <div className="projects-mobile-sheet-footer absolute inset-x-0 bottom-0 z-10 border-t border-white/8 bg-[linear-gradient(180deg,rgba(15,22,36,0.82)_0%,rgba(15,22,36,0.98)_100%)] px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-3 backdrop-blur-md">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-signal-cyan/28 bg-gradient-to-r from-surface-0 via-surface-0 to-surface-1 px-4 py-3 text-[0.78rem] font-mono font-semibold uppercase tracking-[0.1em] text-ink transition-all duration-150 hover:-translate-y-0.5 hover:border-signal-cyan/42 hover:from-surface-0 hover:to-surface-2 hover:shadow-[0_12px_24px_rgba(8,18,30,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45"
                    onClick={applyMobilePendingFilter}
                  >
                    <span className="inline-flex h-2 w-2 rounded-full bg-signal-cyan/80 shadow-[0_0_0_4px_rgba(59,176,242,0.12)]" aria-hidden="true" />
                    {t.projects.filtersApply}
                  </button>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )}
      </header>

      <div
        className={`projects-grid projects-grid-dynamic mt-3 md:mt-4 grid grid-cols-1 gap-3 ${projectCount === 1 ? 'projects-grid-single' : ''} projects-grid-sm-${smGridColumns} projects-grid-lg-${lgGridColumns} projects-grid-xl-${xlGridColumns} projects-grid-2xl-${xxlGridColumns}`}
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
            const isFlipped = flippedProjectId === project.id;

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
                <div className={`project-flip-inner ${isFlipped ? 'is-flipped' : ''}`}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      if (isTouchFlipMode()) {
                        setFlippedProjectId((prev) => (prev === project.id ? null : project.id));
                      }
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

                  <div
                    className="project-flip-face project-flip-back px-3 md:px-3.5 py-3 md:py-3.5"
                    onClick={(event) => {
                      if (!isTouchFlipMode()) return;
                      const target = event.target as HTMLElement;
                      if (target.closest('a,button')) return;
                      setFlippedProjectId(null);
                    }}
                  >
                    <div className="project-back-content">
                      <div className="project-back-head flex items-start justify-between gap-2">
                        <h3 className="m-0 text-ink text-[0.9rem] font-semibold tracking-[-0.01em]">{project.name}</h3>
                      </div>

                      <p className="project-back-summary m-0">{project.summary}</p>

                      <div className="project-back-tech-carousel">
                        <button
                          type="button"
                          className="project-tech-nav"
                          aria-label={t.projects.techScrollLeft}
                          data-direction="left"
                          onClick={handleTechNavClick}
                        >
                          {'<-'}
                        </button>
                        <div className="project-back-tech-list">
                          <div className="project-back-tech-track">
                            {(() => {
                              const facets = sortFacetsByComplexity(Array.from(new Set(project.facets)));
                              const repeated = facets.concat(facets);
                              return repeated.map((facet, index) => {
                                const isActiveFacetTag = Boolean(activeFacet) && facet.toLowerCase() === activeFacet;

                                return (
                                  <span
                                    key={`${facet}-${index}`}
                                    className={`project-tech-pill project-tech-pill-${resolveFacetTone(facet)} ${isActiveFacetTag ? 'is-active' : ''}`}
                                    data-tech={resolveFacetTechIcon(facet) ?? undefined}
                                    title={facet}
                                    aria-label={facet}
                                    aria-hidden={index >= facets.length}
                                  >
                                    <TechIcon tech={resolveFacetTechIcon(facet)} className="project-tech-pill-icon" />
                                    <span className="project-tech-pill-label">{facet}</span>
                                  </span>
                                );
                              });
                            })()}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="project-tech-nav"
                          aria-label={t.projects.techScrollRight}
                          data-direction="right"
                          onClick={handleTechNavClick}
                        >
                          {'->'}
                        </button>
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
