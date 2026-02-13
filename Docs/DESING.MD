# Portfolio Visual Upgrade Plan
## Friendly Ops + i18n Improvements

## 1) Goal

Improve the portfolio UI with a more friendly, modern visual direction while preserving the Ops Console identity, and upgrade i18n so all interface and content sections are fully localized (EN/ES).

## 2) Selected Direction

- Style: Friendly Ops (Option 1)
- Visual tone: Technical but approachable
- Color world:
  - Deep petroleum blue base
  - Soft mint highlights
  - Coral soft accent (limited use)
  - Cool ivory text
  - Neutral steel surfaces

## 3) Interface-Design Basis

### Domain
Deployment flow, project delivery, engineering decisions, release milestones, stack reliability, collaboration readiness.

### Signature Element
Right-side drawer becomes a "Project Pulse Card":
- project health status
- key delivery metrics
- architecture decisions with clearer grouping

### Defaults to Replace
- Flat dark terminal-like visuals -> layered, friendlier surfaces
- Generic cards -> structured cards with stronger hierarchy
- Plain links row -> action-oriented CTA styling and consistency

## 4) Scope of Changes

### 4.1 Visual System (`src/styles.css`)
- Redefine design tokens (Friendly Ops palette).
- Improve text contrast for secondary/muted levels.
- Add subtle layered background and softer section emphasis.
- Refine spacing scale usage for better breathing room.
- Improve interaction states:
  - hover
  - active
  - focus-visible
  - selected
- Keep desktop/mobile parity with cleaner responsive behavior.

### 4.2 UI Structure (`src/App.jsx`)
- Improve topbar hierarchy (title, status, language control).
- Refine project cards:
  - clearer header
  - better readability
  - stronger selected state
- Upgrade detail drawer into "Project Pulse" feel.
- Ensure section readability and rhythm between blocks.

### 4.3 i18n Content (`src/data/content.js`)
- Move all currently hardcoded UI text into per-language objects.
- Localize fully:
  - Overview
  - Projects
  - Case Study
  - Stack & Practices
  - Contact
  - Drawer labels (e.g., Engineering Decisions, Metrics)
- Fix Spanish quality (accents and terminology consistency):
  - Practicas
  - Senal
  - Ingenieria
  - etc.

## 5) i18n Functional Improvements

- Persist language with `localStorage`.
- Update document language attribute dynamically (`document.documentElement.lang`).
- Translate accessibility labels (`aria-label`) where applicable.
- Ensure project/timeline/stack datasets are language-aware (not only headings).

## 6) Expected Outcome

- A more welcoming and polished interface without losing technical identity.
- Better recruiter perception (product-grade presentation).
- Complete bilingual experience with consistent EN/ES behavior.
- Strong readability and interaction clarity on desktop and mobile.

## 7) Implementation Files

- `src/styles.css`
- `src/App.jsx`
- `src/data/content.js`

## 8) Validation Checklist (Post-implementation)

- [ ] Color tokens updated and consistent
- [ ] Contrast improved in body and metadata text
- [ ] Project card interactions feel clear and friendly
- [ ] Drawer reads as decision panel, not plain list
- [ ] All visible text localized EN/ES
- [ ] Language persists after reload
- [ ] `lang` attribute updates correctly
- [ ] Mobile layout keeps hierarchy and spacing quality
- [ ] GitHub Pages build remains green
