import type { Project, ContentLocale, FacetGroup } from '../types';

export function resolveFacetTechIcon(facet: string): string | null {
  const normalized = facet.toLowerCase();

  if (normalized.includes('node')) return 'nodejs';
  if (normalized.includes('express')) return 'express';
  if (normalized.includes('socket')) return 'socketio';
  if (normalized.includes('javascript')) return 'javascript';
  if (normalized.includes('react')) return 'react';
  if (normalized.includes('typescript')) return 'typescript';
  if (normalized.includes('prisma')) return 'prisma';
  if (normalized.includes('i18n')) return 'i18n';
  if (normalized.includes('mongo')) return 'mongodb';
  if (normalized.includes('docker')) return 'docker';
  if (normalized.includes('git')) return 'git';

  return null;
}

export function resolveFacetTone(facet: string): string {
  const normalized = facet.toLowerCase();

  if (normalized.includes('node') || normalized.includes('express') || normalized.includes('socket')) return 'runtime';
  if (normalized.includes('react')) return 'framework';
  if (normalized.includes('typescript')) return 'typed';
  if (normalized.includes('javascript')) return 'language';
  if (normalized.includes('prisma') || normalized.includes('mongo')) return 'data';
  if (normalized.includes('i18n')) return 'global';

  return 'default';
}

export function resolveFacetGroup(facet: string): FacetGroup {
  const normalized = facet.toLowerCase();

  if (normalized.includes('typescript') || normalized.includes('javascript')) return 'language';
  if (normalized.includes('react')) return 'framework';
  if (normalized.includes('node') || normalized.includes('express') || normalized.includes('socket')) return 'backend';
  if (normalized.includes('prisma') || normalized.includes('mongo')) return 'data';
  return 'cross';
}

export function resolvePrimaryLanguage(facets: string[]): string {
  const normalized = facets.map((facet) => facet.toLowerCase());
  if (normalized.some((facet) => facet.includes('typescript'))) return 'TypeScript';
  if (normalized.some((facet) => facet.includes('javascript'))) return 'JavaScript';
  return facets[0] ?? 'N/A';
}

export function resolveProjectFacetCta(
  project: Project,
  activeFacet: string | null,
  facetCta: ContentLocale['projects']['facetCta'],
  facetSpecificCta: ContentLocale['projects']['facetSpecificCta'],
): string {
  if (!activeFacet) return project.cta;

  const hasExactFacet = project.facets.some((facet) => facet.toLowerCase() === activeFacet);
  const exactFacetCta = facetSpecificCta[activeFacet];
  if (hasExactFacet && exactFacetCta) return exactFacetCta;

  const selectedGroup = resolveFacetGroup(activeFacet);
  const hasFacetInGroup = project.facets.some((facet) => resolveFacetGroup(facet) === selectedGroup);

  if (!hasFacetInGroup) return project.cta;
  return facetCta[selectedGroup] ?? project.cta;
}
