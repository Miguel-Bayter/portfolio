# Portfolio Redesign Plan - Sprint-Based Planning

**Project:** Miguel Bayter Portfolio Redesign
**Date:** May 4, 2026
**Designer:** AI Orchestrator Agent
**Framework:** TailwindCSS + DaisyUI 5 + React 18

---

## Executive Summary

This document outlines a comprehensive redesign of the portfolio website. The current implementation uses React 18 + TypeScript + Vite with ~7000 lines of custom CSS implementing a proprietary design system. The redesign objective is to:

1. Migrate to Tailwind CSS 4 + DaisyUI 5
2. Remove all inline CSS patterns in favor of DaisyUI utilities
3. Preserve the ProfileSection logic (as explicitly required)
4. Implement a modern, accessible, and maintainable design
5. Improve component architecture while preserving UX

**Key Constraint:** The Profile section logic MUST be preserved exactly as-is.

---

## Current State Analysis

### Technology Stack
- **Framework:** React 18.3.1
- **Build Tool:** Vite 8.0.2
- **Styling:** Tailwind CSS 3.4.19 + custom CSS (~7000 lines)
- **Icons:** React Icons 5.6.0
- **TypeScript:** 5.9.3
- **Testing:** Vitest 4.0.18

### Components Inventory
| Component | Purpose | Lines | Notes |
|----------|---------|-------|-------|
| App.tsx | Main layout, state management | ~250 | Topbar + sidebar + main content |
| OverviewSection | Hero intro + tech stack + proof cards | ~150 | Self-contained section |
| ProjectsSection | Project grid with filters + flip cards | ~635 | Complex filtering logic |
| ProfileSection | Skills, education, certificates | ~300 | **PRESERVE LOGIC** |
| ContactSection | Contact form + channels | ~254 | Formspree integration |
| NavigationDrawer | Mobile navigation drawer | ~202 | Portal-based modal |
| TechCarousel | Tech stack carousel | ~N/A | Marquee animation |
| TechIcon | Tech icon renderer | ~N/A | Icon mapping utility |

### Custom CSS Architecture
- **Theme System:** CSS variables for surfaces (0-5), inks (1-4), signals (mint, cyan, amber, coral)
- **Dark/Light Mode:** `.theme-light` / `.theme-dark` class toggling
- **Animation System:** Keyframes for pulse, marquee, card transitions
- **Component Patterns:** Extensive custom classes for cards, buttons, pills

### Data Structure
- **Content:** Bilingual (EN/ES) in `src/data/content.ts`
- **Types:** `Content`, `ContentLocale`, `Project`, `SectionId`, `Theme`, `Language`
- **Projects:** 4 projects with facets, links, metrics, decisions

---

## Design Language

### DaisyUI 5 Integration Strategy

DaisyUI 5 requires **Tailwind CSS 4**. The migration path:

1. **Current:** Tailwind CSS 3.4.x with `@tailwind directives`
2. **Target:** Tailwind CSS 4 with `@import "tailwindcss"` + `@plugin "daisyui"`

### Color Palette (DaisyUI Semantic Colors)

| DaisyUI Role | Light Theme | Dark Theme | Usage |
|--------------|-------------|------------|-------|
| `primary` | Cyan #0e96 9c | Cyan #3bb4eb | CTAs, highlights |
| `secondary` | Violet #8b5cf6 | Violet #a78bfa | Accents |
| `accent` | Amber #f59e0b | Amber #fbbf24 | Warnings, badges |
| `neutral` | Slate #334155 | Slate #1e293b | Text, borders |
| `base-100` | White #ffffff | Dark #0f172a | Backgrounds |
| `base-200` | Gray-50 #f8fafc | Slate-800 #1e293b | Cards |
| `base-300` | Gray-100 #f1f5f9 | Slate-700 #334155 | Borders |
| `info` | Blue #3b82f6 | Blue #60a5fa | Information |
| `success` | Green #22c55e | Green #4ade80 | Success states |
| `warning` | Amber #eab308 | Amber #facc15 | Warnings |
| `error` | Red #ef4444 | Red #f87171 | Errors |

### Typography
- **Font Stack:** System font stack (no custom fonts per DaisyUI guidelines)
- **Monospace:** JetBrains Mono (preserved from current for code elements)
- **Scale:** DaisyUI default scale with Tailwind responsive prefixes

---

## Sprint Structure

### Sprint 1: Foundation & Setup
**Duration:** 1-2 days
**Goal:** Configure Tailwind CSS 4 + DaisyUI 5, establish theme

#### Tasks

##### 1.1 Tailwind CSS 4 Migration
- **Task:** Upgrade Tailwind CSS from v3 to v4
- **Actions:**
  - Run `npm install -D tailwindcss@latest @tailwindcss/vite@latest`
  - Remove `postcss.config.cjs` (deprecated in v4)
  - Update `src/styles/globals.css`:
    ```css
    @import "tailwindcss";
    @plugin "daisyui";
    ```
  - Update `vite.config.ts` to use `@tailwindcss/vite` plugin
  - Remove `tailwind.config.cjs` reference in postcss
- **Verification:** `npm run dev` works without PostCSS errors

##### 1.2 DaisyUI 5 Configuration
- **Task:** Install and configure DaisyUI 5
- **Actions:**
  - Run `npm install -D daisyui@latest`
  - Configure custom theme in CSS with brand colors
  - Test dark/light mode toggle works
- **Verification:** DaisyUI components render correctly

##### 1.3 CSS Variable Mapping
- **Task:** Map existing CSS variables to DaisyUI semantic tokens
- **Actions:**
  - Create mapping table between old variables and DaisyUI colors
  - Maintain `surface-*` → `base-*` mapping
  - Maintain `ink-*` → appropriate text colors
  - Test both themes render correctly
- **Verification:** Both themes display correctly

##### 1.4 Build Verification
- **Task:** Ensure project builds without errors
- **Actions:**
  - Run `npm run build`
  - Fix any CSS specificity issues
  - Verify all pages render correctly
- **Verification:** Production build succeeds

**Deliverables:**
- Tailwind CSS 4 + DaisyUI 5 installed
- Custom theme configured
- Both light and dark themes functional

---

### Sprint 2: Layout Shell Migration
**Duration:** 2-3 days
**Goal:** Migrate App.tsx topbar and sidebar to DaisyUI components

#### Tasks

##### 2.1 Topbar Component
- **Task:** Replace custom topbar with DaisyUI navbar
- **Current Implementation:**
  - Custom profile link with avatar
  - Status pill with animated dot
  - Language toggle (EN/ES)
  - Theme toggle (light/dark/system)
- **DaisyUI Components to Use:**
  - `navbar` + `navbar-start` + `navbar-end`
  - `btn btn-ghost` for action buttons
  - `badge` for status indicators
  - `avatar` for profile photo
- **Preserved Behavior:**
  - Language cycling
  - Theme cycling (light/dark/system)
  - LinkedIn link
  - Mobile drawer trigger
- **Verification:** Topbar renders on all breakpoints

##### 2.2 Sidebar Navigation
- **Task:** Replace custom sidebar with DaisyUI menu
- **Current Implementation:**
  - Vertical nav with section buttons
  - Active state indicator (cyan bar)
  - Responsive visibility (hidden on mobile)
- **DaisyUI Components to Use:**
  - `menu` + `menu-vertical`
  - `menu-disabled` for inactive
  - Active state with `menu-active`
- **Preserved Behavior:**
  - Section navigation (overview, projects, profile, contact)
  - Active section highlighting
- **Verification:** Navigation works on desktop and mobile

##### 2.3 Mobile Navigation
- **Task:** Refactor NavigationDrawer to use DaisyUI drawer
- **Current Implementation:**
  - Custom portal-based drawer
  - Overlay with backdrop blur
  - Animated open/close transitions
- **DaisyUI Components to Use:**
  - `drawer` component
  - `drawer-toggle` for trigger
  - `drawer-content` + `drawer-side`
- **Preserved Behavior:**
  - Same visual aesthetic
  - Keyboard navigation (Escape to close)
  - Touch-friendly target sizes
- **Verification:** Mobile drawer opens/closes correctly

##### 2.4 App Shell Frame
- **Task:** Simplify app-shell-frame styling
- **Current Implementation:**
  - Custom max-width constraint
  - Custom border-radius
  - Custom box-shadow
- **DaisyUI Components to Use:**
  - `card` for container
  - DaisyUI theme colors for background
- **Verification:** Shell renders at all breakpoints

**Deliverables:**
- Topbar using DaisyUI navbar
- Sidebar using DaisyUI menu
- Mobile drawer using DaisyUI drawer
- App shell styled with DaisyUI utilities

---

### Sprint 3: OverviewSection Redesign
**Duration:** 2-3 days
**Goal:** Redesign hero and proof cards with DaisyUI

#### Tasks

##### 3.1 Hero Card Redesign
- **Task:** Replace custom hero with DaisyUI card
- **Current Implementation:**
  - Custom gradient backgrounds
  - Custom accent dots
  - Image with gradient overlay
  - Two CTA buttons
- **DaisyUI Components to Use:**
  - `card` + `card-side` for layout
  - `card-body` for content areas
  - `badge` for role highlights
  - `btn` variants for CTAs
- **Preserved Elements:**
  - Name and role line
  - Description text
  - Two CTA buttons (View Projects, Contact Me)
  - Hero image (same position)
- **Verification:** Hero renders correctly at all breakpoints

##### 3.2 Tech Stack Carousel
- **Task:** Replace custom carousel with DaisyUI carousel
- **Current Implementation:**
  - Custom marquee animation
  - Custom tech orb styling
  - Navigation buttons
- **DaisyUI Components to Use:**
  - `carousel` component
  - `carousel-item` for each tech
- **Preserved Elements:**
  - Tech icons (HTML, CSS, JS, Git, TS, React, etc.)
  - Marquee animation behavior
  - Navigation controls
- **Verification:** Carousel scrolls and displays all tech

##### 3.3 Proof Cards
- **Task:** Replace custom proof cards with DaisyUI card
- **Current Implementation:**
  - Custom card styling
  - Hover effects with lift animation
  - Project type badge
  - Tech pills
- **DaisyUI Components to Use:**
  - `card` component
  - `card-body` for content
  - `badge` for project type
  - `chip` for tech tags
- **Preserved Elements:**
  - Project name and type
  - Impact description
  - Tech stack pills (max 4)
  - Click to navigate to projects
- **Verification:** Cards display correctly and link to projects

**Deliverables:**
- Hero section with DaisyUI styling
- Tech carousel functional
- Proof cards with DaisyUI components

---

### Sprint 4: ProjectsSection Redesign
**Duration:** 3-4 days
**Goal:** Redesign project grid with flip cards and filters

#### Tasks

##### 4.1 Project Grid Layout
- **Task:** Replace custom grid with DaisyUI components
- **Current Implementation:**
  - Custom responsive grid columns
  - Dynamic column count based on project count
  - Empty state handling
- **DaisyUI Components to Use:**
  - `grid` + Tailwind grid utilities
  - `card` for project cards
- **Verification:** Grid adapts to project count

##### 4.2 Project Cards (Front)
- **Task:** Replace flip card front with DaisyUI
- **Current Implementation:**
  - Custom flip animation (3D transform)
  - Front image with overlay
  - Title and subtitle
  - Category badge
- **DaisyUI Components to Use:**
  - `card` + `card-image`
  - `card-body` for content
  - `badge` for category
- **Preserved Elements:**
  - Project image
  - Project name
  - Preview label/summary
  - Category badge
  - Hover spotlight effect
- **Verification:** Cards display correctly

##### 4.3 Project Cards (Back/Detail)
- **Task:** Replace flip card back with DaisyUI
- **Current Implementation:**
  - Summary text
  - Tech pill carousel with marquee
  - Repo/demo action buttons
  - Scroll navigation
- **DaisyUI Components to Use:**
  - `card-body` for content
  - `chip` for tech tags
  - `btn btn-sm` for actions
- **Preserved Elements:**
  - Summary
  - Tech pills (sorted by complexity)
  - Repo link button
  - Demo link button (or maintenance badge)
- **Verification:** Back of card displays correctly

##### 4.4 Filter System
- **Task:** Replace custom filters with DaisyUI
- **Current Implementation:**
  - Custom filter chips
  - Group dropdown panels
  - Mobile bottom sheet
- **DaisyUI Components to Use:**
  - `join` for filter group
  - `dropdown` for filter groups
  - Custom mobile sheet styling
- **Preserved Elements:**
  - All filter categories (language, framework, backend, data, cross)
  - Active filter highlighting
  - Project count per filter
  - Mobile responsive filter sheet
  - Sort direction toggle (asc/desc)
- **Verification:** Filters work correctly

##### 4.5 Empty State
- **Task:** Style empty state with DaisyUI
- **DaisyUI Components to Use:**
  - `alert alert-info`
- **Verification:** Empty state displays when no projects match

**Deliverables:**
- Project grid with DaisyUI cards
- Flip card functionality (or simplified card)
- Filter system functional
- Empty state styled

---

### Sprint 5: ContactSection Redesign
**Duration:** 1-2 days
**Goal:** Redesign contact section with DaisyUI forms

#### Tasks

##### 5.1 Hiring Highlight Card
- **Task:** Style with DaisyUI alert/card
- **DaisyUI Components to Use:**
  - `alert alert-success` or `card`
- **Preserved Elements:**
  - Hiring kicker
  - Hiring title
  - Hiring subtitle
- **Verification:** Card displays correctly

##### 5.2 Channel Cards
- **Task:** Replace custom channel cards with DaisyUI
- **Current Implementation:**
  - GitHub, LinkedIn, Email/Form cards
  - Hover lift effect
- **DaisyUI Components to Use:**
  - `card` + `card-body`
  - `btn btn-ghost` for channel links
- **Preserved Elements:**
  - Channel icons (GitHub, LinkedIn, Mail)
  - Channel labels
  - Form trigger button behavior
- **Verification:** Channel cards work correctly

##### 5.3 Contact Form
- **Task:** Replace custom form with DaisyUI form
- **Current Implementation:**
  - Custom styled inputs
  - Custom textarea
  - Form validation
  - Formspree integration
  - Success/error states
- **DaisyUI Components to Use:**
  - `form-control`
  - `input` + `input-bordered`
  - `label` + `textarea`
  - `alert` for success/error
- **Preserved Elements:**
  - All form fields (name, email, message)
  - Company honeypot field
  - Email validation
  - Formspree endpoint integration
  - Loading/success/error states
  - Cancel button
- **Verification:** Form submits correctly

**Deliverables:**
- Hiring highlight styled
- Channel cards functional
- Contact form works with validation

---

### Sprint 6: ProfileSection (Preserved Logic)
**Duration:** 1-2 days
**Goal:** Restyle ProfileSection while preserving ALL logic

#### CRITICAL REQUIREMENT
**The ProfileSection.tsx logic MUST be preserved exactly. Only styling changes are allowed.**

Allowed Changes:
- Replace custom CSS classes with DaisyUI equivalents
- Update color tokens to use DaisyUI semantic colors
- Adjust spacing/padding to match DaisyUI patterns

NOT Allowed:
- No changes to component logic
- No changes to state management
- No changes to data handling
- No changes to event handlers
- No changes to accessibility attributes

#### Tasks

##### 6.1 Profile Hero Card
- **Task:** Restyle hero card with DaisyUI
- **Current:** Custom avatar, name, role badge, availability badge, summary, CV button
- **DaisyUI Components:** `card`, `avatar`, `badge`, `btn`
- **Preserved:** All content, all logic
- **Verification:** Same visual, different classes

##### 6.2 Skills Grid
- **Task:** Restyle skills cards with DaisyUI
- **Current:** Custom skill cards with icons, titles, tool pills
- **DaisyUI Components:** `card`, `badge`, `chip`
- **Preserved:** All skill items, all tool icons, all content
- **Verification:** Same layout, different classes

##### 6.3 Delivery Signals
- **Task:** Restyle delivery signals with DaisyUI
- **Current:** Custom cards with capability areas and tools
- **DaisyUI Components:** `card`, `badge`
- **Preserved:** All delivery items, all tools
- **Verification:** Same layout, different classes

##### 6.4 Education List
- **Task:** Restyle education entries with DaisyUI
- **Current:** Custom scrollable list with navigation buttons
- **DaisyUI Components:** `card`, `badge`
- **Preserved:** All education entries, navigation logic
- **Verification:** Same scroll behavior, different classes

##### 6.5 Certificates List
- **Task:** Restyle certificates with DaisyUI
- **Current:** Custom scrollable list with download links
- **DaisyUI Components:** `card`, `btn btn-sm`
- **Preserved:** All certificates, all download links
- **Verification:** Same download behavior, different classes

##### 6.6 Section Header
- **Task:** Restyle section header with DaisyUI
- **Current:** Custom title with icon
- **DaisyUI Components:** `card`, `card-title`
- **Preserved:** Title text, icon
- **Verification:** Same display, different classes

**Deliverables:**
- ProfileSection visually restyled
- ALL logic preserved
- No functional changes

---

### Sprint 7: Utilities & Polish
**Duration:** 2-3 days
**Goal:** Ensure consistency and fix edge cases

#### Tasks

##### 7.1 Animation System
- **Task:** Review and update animations
- **Current:** Custom keyframes in CSS
- **Actions:**
  - Identify essential animations to preserve
  - Move to DaisyUI-compatible approach
  - Test prefers-reduced-motion support
- **Essential Animations:**
  - Pulse ring on status dot
  - Tech marquee
  - Card hover lift
  - Mobile drawer transitions
- **Verification:** Animations smooth, respects motion preferences

##### 7.2 Accessibility Audit
- **Task:** Verify WCAG 2.1 AA compliance
- **Actions:**
  - Check color contrast ratios
  - Verify keyboard navigation
  - Check focus indicators
  - Test with screen reader
- **DaisyUI Components to Use:**
  - `sr-only` for screen reader text
  - Focus utilities
- **Verification:** Passes accessibility check

##### 7.3 Responsive Testing
- **Task:** Test all breakpoints
- **Breakpoints to Test:**
  - Mobile: 320px - 639px
  - Tablet: 640px - 1023px
  - Desktop: 1024px - 1439px
  - Large: 1440px+
- **Actions:**
  - Test all sections at each breakpoint
  - Fix any layout issues
  - Verify touch targets (min 44px)
- **Verification:** Works at all breakpoints

##### 7.4 Dark Mode Verification
- **Task:** Ensure dark mode complete
- **Actions:**
  - Toggle between themes
  - Check all sections
  - Verify no white flashes
- **Verification:** Smooth theme transitions

##### 7.5 Performance Check
- **Task:** Verify no regression
- **Actions:**
  - Lighthouse audit
  - Check bundle size
  - Verify no layout shift
- **Verification:** Performance maintained or improved

**Deliverables:**
- All animations working
- Accessibility compliant
- Responsive at all breakpoints
- Dark mode complete

---

### Sprint 8: Testing & Deployment
**Duration:** 1-2 days
**Goal:** Verify and deploy

#### Tasks

##### 8.1 Unit Testing
- **Task:** Run existing tests
- **Actions:**
  - Run `npm run test`
  - Fix any test failures
  - Add tests for new components if needed
- **Verification:** All tests pass

##### 8.2 Type Checking
- **Task:** Run TypeScript check
- **Actions:**
  - Run `npm run typecheck`
  - Fix any type errors
- **Verification:** No TypeScript errors

##### 8.3 Linting
- **Task:** Run ESLint
- **Actions:**
  - Run `npm run lint`
  - Fix any lint errors
- **Verification:** No lint errors

##### 8.4 Build Test
- **Task:** Production build
- **Actions:**
  - Run `npm run build`
  - Preview production build
  - Fix any build errors
- **Verification:** Production build succeeds

##### 8.5 Deployment
- **Task:** Deploy to production
- **Actions:**
  - Deploy to Netlify/Vercel
  - Verify live site
  - Test in production
- **Verification:** Site live and functional

**Deliverables:**
- All tests pass
- Production build successful
- Site deployed and verified

---

## Technical Implementation Notes

### Tailwind CSS 4 Migration Checklist
- [ ] Install `tailwindcss@latest` and `@tailwindcss/vite@latest`
- [ ] Remove `postcss.config.cjs`
- [ ] Update `vite.config.ts` to use `@tailwindcss/vite`
- [ ] Update CSS: `@import "tailwindcss"; @plugin "daisyui";`
- [ ] Remove `tailwind.config.cjs` or convert to CSS-based config
- [ ] Test dev server works
- [ ] Test production build works

### DaisyUI 5 Theme Configuration
```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
```

### Color Mapping Reference
| Old Variable | DaisyUI Equivalent |
|--------------|-------------------|
| `--surface-0` | `base-100` |
| `--surface-1` | `base-200` |
| `--surface-2` | `base-200` (darker) |
| `--surface-3` | `base-300` |
| `--ink-1` | `neutral-content` |
| `--ink-2` | `neutral-content` (muted) |
| `--signal-cyan` | `primary` |
| `--signal-mint` | `success` |
| `--signal-amber` | `warning` |
| `--signal-coral` | `error` |

### Key DaisyUI Components by Section

| Section | DaisyUI Components |
|---------|-------------------|
| Topbar | `navbar`, `avatar`, `badge`, `btn` |
| Sidebar | `menu`, `menu-vertical` |
| Mobile Nav | `drawer` |
| Hero | `card`, `card-side` |
| Tech Carousel | `carousel` |
| Proof Cards | `card`, `badge`, `chip` |
| Projects Grid | `grid`, `card` |
| Project Filters | `join`, `dropdown` |
| Contact Channels | `card`, `btn` |
| Contact Form | `form-control`, `input`, `label`, `alert` |
| Profile | `card`, `avatar`, `badge` |

---

## Skills Required

Based on autoskills analysis:

1. **frontend-design** - Design system architecture, component composition
2. **tailwind-css-patterns** - Tailwind utilities, responsive patterns
3. **react-best-practices** - React component patterns, hooks usage
4. **accessibility-a11y** - WCAG compliance, keyboard navigation
5. **vitest** - Testing patterns, test coverage
6. **typescript-advanced-types** - TypeScript best practices
7. **webapp-testing** - E2E testing strategies
8. **composition-patterns** - Component composition patterns

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| DaisyUI 5 breaking changes | Review changelog, test incrementally |
| Custom CSS complexity | Map systematically, test each sprint |
| Profile section regression | Comprehensive test suite, manual verification |
| Animation performance | Test on low-end devices, optimize if needed |
| Accessibility regressions | Audit each sprint, fix immediately |

---

## Success Criteria

1. **No inline CSS** - All styling via DaisyUI utilities and Tailwind
2. **ProfileSection logic preserved** - Identical behavior, only styling changes
3. **All sections functional** - Overview, Projects, Profile, Contact all work
4. **Dark/Light themes** - Both complete and consistent
5. **Responsive** - Works 320px to 2560px
6. **Accessible** - WCAG 2.1 AA compliant
7. **Performance** - No regression from current state
8. **Tests pass** - All existing tests pass

---

## Next Steps

1. **Approve this plan** - User reviews and approves
2. **Sprint 1 begins** - Tailwind CSS 4 + DaisyUI 5 setup
3. **Iterate sprints** - Complete each sprint, verify, proceed
4. **Deploy** - Final sprint completes, deployment

---

*Document Version: 1.0*
*Last Updated: May 4, 2026*
