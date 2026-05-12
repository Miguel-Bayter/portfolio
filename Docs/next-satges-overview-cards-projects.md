# Next Stages - Overview Cards + Projects Compact

## Objective

Adapt the `Overview` section to the provided reference style using `src/img/overview.png`, and compact the `Projects` cards for faster recruiter scan.

## Design intent

- Human: recruiter or engineering lead scanning portfolio in 2-3 minutes.
- Task: understand positioning, strengths, and project proof quickly.
- Feel: confident, clean, and intentional with strong hierarchy.

## Interface direction (implemented)

- Domain: hiring, technical credibility, product delivery, portfolio proof, interview conversion.
- Color world: light editorial hero panel inside the current dark shell, with existing amber/cyan accents.
- Signature: `Hiring Spotlight` split hero in Overview (text left, portrait right, accent geometry).
- Defaults avoided:
  - Generic repeated dark card pattern for Overview.
  - Overloaded project cards with too many stacked story rows.
  - Same visual weight for all content blocks.

## i18n requirements

- All new copy is driven from `src/data/content.js` in both `en` and `es`.
- No new user-facing hardcoded strings in component logic.

## Execution checklist

- [x] Create planning document for overview/projects redesign.
- [x] Add i18n structure `overview.hero` in EN and ES.
- [x] Integrate `overview.png` in `OverviewSection` hero layout.
- [x] Add decorative geometric accents (non-interactive, aria-hidden).
- [x] Keep existing Overview proof strip and hiring cards.
- [x] Compact Projects cards visual hierarchy.
- [x] Keep selected card state and links actions.
- [x] Preserve responsive behavior for mobile and desktop.
- [x] Convert `Project Pulse` to an optional floating panel (not fixed column).
- [x] Run final visual QA on live page.

## Validation criteria

- Overview resembles reference composition (headline emphasis + portrait split layout).
- Projects are more compact and scannable at first glance.
- EN/ES toggle shows complete new content consistently.
- No regression on navigation, contact form, or theme toggle.
