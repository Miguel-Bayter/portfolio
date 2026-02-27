import { describe, it, expect } from 'vitest';
import {
  resolveFacetTechIcon,
  resolveFacetTone,
  resolveFacetGroup,
  resolvePrimaryLanguage,
  resolveProjectFacetCta,
} from './facets';
import type { Project, ContentLocale } from '../types';

// ── resolveFacetTechIcon ─────────────────────────────────────────────────────

describe('resolveFacetTechIcon', () => {
  it('returns nodejs for Node.js', () => expect(resolveFacetTechIcon('Node.js')).toBe('nodejs'));
  it('returns express for Express', () => expect(resolveFacetTechIcon('Express')).toBe('express'));
  it('returns socketio for Socket.io', () => expect(resolveFacetTechIcon('Socket.io')).toBe('socketio'));
  it('returns react for React 19', () => expect(resolveFacetTechIcon('React 19')).toBe('react'));
  it('returns typescript for TypeScript', () => expect(resolveFacetTechIcon('TypeScript')).toBe('typescript'));
  it('returns javascript for JavaScript', () => expect(resolveFacetTechIcon('JavaScript')).toBe('javascript'));
  it('returns prisma for Prisma', () => expect(resolveFacetTechIcon('Prisma')).toBe('prisma'));
  it('returns i18n for i18n', () => expect(resolveFacetTechIcon('i18n')).toBe('i18n'));
  it('returns mongodb for MongoDB', () => expect(resolveFacetTechIcon('MongoDB')).toBe('mongodb'));
  it('returns docker for Docker', () => expect(resolveFacetTechIcon('Docker')).toBe('docker'));
  it('returns git for Git', () => expect(resolveFacetTechIcon('Git')).toBe('git'));
  it('returns null for unknown facet', () => expect(resolveFacetTechIcon('Redis')).toBeNull());
});

// ── resolveFacetTone ─────────────────────────────────────────────────────────

describe('resolveFacetTone', () => {
  it('returns runtime for Node.js', () => expect(resolveFacetTone('Node.js')).toBe('runtime'));
  it('returns runtime for Express', () => expect(resolveFacetTone('Express')).toBe('runtime'));
  it('returns runtime for Socket.io', () => expect(resolveFacetTone('Socket.io')).toBe('runtime'));
  it('returns framework for React', () => expect(resolveFacetTone('React 19')).toBe('framework'));
  it('returns typed for TypeScript', () => expect(resolveFacetTone('TypeScript')).toBe('typed'));
  it('returns language for JavaScript', () => expect(resolveFacetTone('JavaScript')).toBe('language'));
  it('returns data for Prisma', () => expect(resolveFacetTone('Prisma')).toBe('data'));
  it('returns data for MongoDB', () => expect(resolveFacetTone('MongoDB')).toBe('data'));
  it('returns global for i18n', () => expect(resolveFacetTone('i18n')).toBe('global'));
  it('returns default for unknown facet', () => expect(resolveFacetTone('Redis')).toBe('default'));
});

// ── resolveFacetGroup ────────────────────────────────────────────────────────

describe('resolveFacetGroup', () => {
  it('returns language for TypeScript', () => expect(resolveFacetGroup('TypeScript')).toBe('language'));
  it('returns language for JavaScript', () => expect(resolveFacetGroup('JavaScript')).toBe('language'));
  it('returns framework for React', () => expect(resolveFacetGroup('React 19')).toBe('framework'));
  it('returns backend for Node.js', () => expect(resolveFacetGroup('Node.js')).toBe('backend'));
  it('returns backend for Express', () => expect(resolveFacetGroup('Express')).toBe('backend'));
  it('returns backend for Socket.io', () => expect(resolveFacetGroup('Socket.io')).toBe('backend'));
  it('returns data for Prisma', () => expect(resolveFacetGroup('Prisma')).toBe('data'));
  it('returns data for MongoDB', () => expect(resolveFacetGroup('MongoDB')).toBe('data'));
  it('returns cross for i18n', () => expect(resolveFacetGroup('i18n')).toBe('cross'));
  it('returns cross for unknown', () => expect(resolveFacetGroup('Docker')).toBe('cross'));
});

// ── resolvePrimaryLanguage ───────────────────────────────────────────────────

describe('resolvePrimaryLanguage', () => {
  it('returns TypeScript when present', () =>
    expect(resolvePrimaryLanguage(['Node.js', 'TypeScript', 'Prisma'])).toBe('TypeScript'));
  it('returns JavaScript when no TypeScript', () =>
    expect(resolvePrimaryLanguage(['Node.js', 'Express', 'JavaScript'])).toBe('JavaScript'));
  it('returns first facet when no language tag', () =>
    expect(resolvePrimaryLanguage(['Docker', 'i18n'])).toBe('Docker'));
  it('returns N/A for empty array', () =>
    expect(resolvePrimaryLanguage([])).toBe('N/A'));
  it('TypeScript takes precedence over JavaScript', () =>
    expect(resolvePrimaryLanguage(['JavaScript', 'TypeScript'])).toBe('TypeScript'));
});

// ── resolveProjectFacetCta ───────────────────────────────────────────────────

const mockProject: Project = {
  id: 'test',
  name: 'Test',
  type: 'Test Type',
  previewImage: '',
  cta: 'default cta',
  summary: '',
  problem: '',
  solution: '',
  impact: '',
  category: '',
  facets: ['TypeScript', 'React 19'],
  decisions: [],
  metrics: [],
  links: { repo: '', demo: '' },
};

const mockFacetCta: ContentLocale['projects']['facetCta'] = {
  language: 'language group cta',
  framework: 'framework group cta',
  backend: 'backend group cta',
  data: 'data group cta',
  cross: 'cross group cta',
};

const mockFacetSpecificCta: ContentLocale['projects']['facetSpecificCta'] = {
  typescript: 'specific typescript cta',
};

describe('resolveProjectFacetCta', () => {
  it('returns project.cta when no activeFacet', () =>
    expect(resolveProjectFacetCta(mockProject, null, mockFacetCta, mockFacetSpecificCta))
      .toBe('default cta'));

  it('returns specific cta when facet matches exactly', () =>
    expect(resolveProjectFacetCta(mockProject, 'typescript', mockFacetCta, mockFacetSpecificCta))
      .toBe('specific typescript cta'));

  it('returns group cta when facet group matches', () =>
    expect(resolveProjectFacetCta(mockProject, 'javascript', mockFacetCta, mockFacetSpecificCta))
      .toBe('language group cta'));

  it('returns project.cta when facet group does not match project', () =>
    expect(resolveProjectFacetCta(mockProject, 'node.js', mockFacetCta, mockFacetSpecificCta))
      .toBe('default cta'));
});
