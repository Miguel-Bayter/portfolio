# Portfolio Ops Console

Interface-first fullstack developer portfolio focused on hiring readiness and technical clarity.

## What this portfolio demonstrates

- Production-minded frontend architecture with typed boundaries
- Bilingual product communication (EN/ES) with a single content source
- Technical storytelling: constraints, tradeoffs, and delivery-oriented outcomes
- CI quality gates before deploy (typecheck, lint, tests, build)

## Live URL

`https://miguel-bayter.github.io/portfolio/`

## Stack

- React 18 + TypeScript
- Vite 5
- Vitest + ESLint
- GitHub Actions (typecheck, test, build, Pages deploy)

## Featured projects

- `Impostor` - Realtime multiplayer flow (Node.js, Express, Socket.io, JavaScript)
- `TuGestionAmiga` - Role-protected management platform (React, TypeScript, Prisma, i18n)
- `InvYGO` - Product-style catalog/inventory interface (React 19, TypeScript, i18n)

## 3-minute technical review (for recruiters and engineering leads)

1. Open the live portfolio and go to `Projects`.
2. Use facet filters (`Language`, `Backend`, `Data`, etc.) to inspect project focus by stack dimension.
3. Open each `Repository` and `Live Demo` from the card actions.
4. Validate code quality locally with:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

5. Review CI workflow in `.github/workflows/deploy.yml` (gates before Pages deploy).

## Local development

```bash
npm install
npm run dev
```

### Contact form setup (Phase 1)

Create a `.env` file in the project root with:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Without this variable, the contact form will show an error message instead of submitting.

## Build

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.tsx`: app shell and section orchestration
- `src/components/*.tsx`: section components and reusable UI blocks
- `src/data/content.ts`: bilingual content and project data
- `src/utils/facets.ts`: facet mapping/filter helpers
- `src/types.ts`: shared TypeScript interfaces
- `src/styles.css`: design tokens and interface styles
- `.github/workflows/deploy.yml`: auto deploy to GitHub Pages

## Architecture decisions

- `Separation of concerns`: App shell in `src/App.tsx`, view sections in `src/components`, mapping logic in `src/utils`.
- `Typed contracts`: central interfaces in `src/types.ts` keep content/components aligned.
- `i18n source of truth`: all locale content is centralized in `src/data/content.ts`.
- `Deterministic filtering`: facet grouping and priority sorting are isolated in `src/utils/facets.ts`.
- `Quality-first delivery`: pipeline enforces typecheck, lint, tests, and build before deployment.

## Language support

The interface includes EN/ES toggle in the top bar.

## Recruiter-ready checklist

- [x] Live portfolio URL available
- [x] At least three projects with repository links
- [x] At least one active live demo
- [x] Bilingual content (EN/ES)
- [x] CI/CD workflow in GitHub Actions
- [x] TypeScript + lint + tests configured and passing
- [x] Contact form flow enabled through Formspree
- [ ] Add one more production-grade project (target: 4 total)
- [x] Replace OpenGraph preview images with real project screenshots
- [ ] Add one deep case study with measurable metrics (latency, throughput, or user impact)

## Quality gates

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Notes

Pages site is configured with `build_type=workflow`.
