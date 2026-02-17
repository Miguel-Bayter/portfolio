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
| 1024px | `<=1200` | `172px` | base per-project framing | `project-card-body: 198px`, summary clamp 3 | inline/wrap |
| 768px | `<=900` | `176px` | base per-project framing | body/title/summary min-heights reset to auto | inline/wrap |
| 480px | `<=640` + `<=480` | `156px` | base per-project framing | smaller pill typography | 2-column action grid |
| 390px | `<=640` + `<=480` | `156px` | base per-project framing | compact pills/icons | 2-column action grid |
| 360px | `<=640` + `<=480` + `<=360` | `156px` | base per-project framing | same project sizing as 390 | 2-column action grid |
| 320px | `<=640` + `<=480` + `<=360` + `<=320` | `142px` | unified framing (`center 18%`, `scale(1.02)`) | tighter body padding + summary clamp 4 | tighter 2-column action grid |

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
