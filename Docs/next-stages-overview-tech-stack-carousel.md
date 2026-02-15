# Next Stage - Overview Tech Stack Carousel

## Objective

Replace the old overview snapshot cards with a technology carousel and rename the section to `Technology Stack`.

## Scope

- Replace the static cards block under overview with a carousel-like stack strip.
- Keep all UI text in English at code level and fully driven by i18n (`en` / `es`).
- Preserve visual consistency in dark, light, and system themes.

## Delivery checklist

- [x] Rename overview section heading to `Technology Stack`.
- [x] Add i18n carousel data and labels in `src/data/content.js`.
- [x] Implement `TechCarousel` component in overview.
- [x] Add previous/next controls and pagination dots.
- [x] Add responsive behavior (desktop/tablet/mobile visible item count).
- [x] Add theme-aware visual styles for carousel and orbs.
- [ ] Run final visual QA in EN/ES + dark/light/system on live page.

## Validation criteria

- Carousel visually replaces previous cards section.
- Arrows and dots reflect active position.
- No hardcoded user-facing strings outside i18n content.
- No regressions in Overview proof strip and navigation actions.
