# Stage Projects

## Checklist

- [x] Create this tracking file in `Docs/`.
- [x] Equalize project card visual size (type/title/media consistency).
- [x] Improve overview proof cards visual consistency (without percentages).
- [x] Add Prisma to tech carousel in EN and ES.
- [x] Add Prisma SVG in `TechIcon` map.
- [x] Run build and verify no regressions.

## Notes

- Maintain formal styling and responsive behavior.
- Keep i18n labels intact (`Maintenance` / `Mantenimiento`).
- Do not reintroduce percentages or Project Pulse.
- Image framing micro-calibration completed per project (`impostor`, `tugestionamiga`).
- Added extra framing + action/button tuning for very small screens (`<=320px`).

## Responsive Matrix (Projects)

| Viewport | Effective Rules | Media Height | Image Framing | Text/Body | Actions |
| --- | --- | --- | --- | --- | --- |
| 1024px | `<=1200` | `108px` | calibrated per-project framing (`center 14%`) | ultra-compact body and single-line summary | inline/wrap compact |
| 768px | `<=900` | `116px` | same framing + compact cards | auto body heights with condensed chips | inline/wrap compact |
| 480px | `<=640` + `<=480` | `110px` | same framing | smaller typography with readable contrast | 2-column action grid |
| 390px | `<=640` + `<=480` | `110px` | same framing | compact pills/icons + technical CTA clamp | 2-column action grid |
| 360px | `<=640` + `<=480` + `<=360` | `110px` | same framing | maintained compact rhythm | 2-column action grid |
| 320px | `<=640` + `<=480` + `<=360` + `<=320` | `102px` | unified framing (`center 18%`, `scale(1.02)`) | tighter body padding + summary clamp 2 | tighter 2-column action grid |

## Next Improvements (Analysis)

- [Done] Refine GitHub OpenGraph previews with better framing and keep robust fallback placeholder.
- [Done] Add image loading fallback (`onError`) to swap to local placeholder when remote OG cards fail.
- [Done] Add subtle project category badges (e.g. `Game`, `Management`, `Realtime`) to improve scan speed for recruiters.
- [Done] Improve keyboard accessibility on card headers and action links with clearer focus-visible styling.
- [Done] Add a tiny project metadata row (e.g. "Role", "Scope") with concise text-only chips (no percentages).
- [Done] Add stack/language filters for Projects section (tech-based chips with icons).
- [Done] Refine Projects card media framing using repository previews + fallback placeholder.
- [Done] Prioritize filtered results by relevance (facet position, live demo presence, alphabetical tie-break).
- [Done] Use filters based on key development stack facets (languages + frameworks + tooling) and show per-filter counts.
- [Done] Group stack filters by software dimensions (Language, Framework, Backend, Data, Cross) and improve SVG/icon visibility.
- [Done] Add mobile filter toggle for small screens and strengthen icon contrast/glow in both themes.
- [Done] Make each filter group collapsible (desktop and mobile) and improve filter spacing/readability.
- [Done] Apply strict accordion behavior: opening one filter group closes the others.
- [Done] Tune copy lengths by locale so EN/ES summaries align naturally without relying on stricter clamping.
- [Done] Remove unused `categoryKey` project metadata after switching to stack-driven filters.
- [Done] Add empty-state feedback when a selected filter has no matching projects.
- [Done] Start filters fully collapsed by default and refine spacing/color hierarchy for a cleaner first scan.
- [Done] Add smooth accordion transition for filter groups and tighten top spacing in Projects header.
- [Done] Redesign filter groups as compact dropdown toggles to remove stretched empty spaces.
- [Done] Refine cards to an ultra-compact premium layout (less width, less visual weight, stronger hierarchy).
- [Done] Add dynamic technical microcopy per filter group and per exact facet (e.g. `TypeScript`, `Prisma`, `Socket.io`) in EN/ES.
- [Done] Improve dark-mode readability by increasing critical card text sizes and contrast.
- [Done] Highlight active facet tags inside cards and add a subtle accent rail for filtered cards.
- [Done] Add subtle desktop spotlight hover effect with reduced-motion fallback.
- [Done] Run visual QA pass (desktop/mobile) and increase small typography in filters/topbar for better dark-mode readability.
