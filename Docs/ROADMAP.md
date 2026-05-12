# Portfolio Roadmap — Presentación a Empresas

> Análisis generado: 2026-02-27
> Estado: En implementación

---

## Estado Actual

```
✅ Fortalezas
  - Design system sólido (6-level surface elevation, 4-level ink hierarchy)
  - i18n funcional (localStorage, document.lang, aria-labels localizados)
  - SEO/OG tags completos en index.html
  - Micro-interacciones cuidadas (pulse-ring, panel-in, status-sheen)
  - Dark/light/system theme robusto
  - Filtros de proyectos técnicamente sofisticados
  - GitHub Actions CI/CD ya configurado
  - README.md existe

❌ Bloqueantes para presentar a empresas top
  - React Hook Rules violation en ProjectsSection (red flag técnico)
  - Solo 2 proyectos
  - Sin tests en ningún proyecto
  - Sin TypeScript en el portfolio (inconsistente con el stack que promociona)
  - Sin screenshots reales de proyectos
  - i18n title swap: EN tiene "Stack Tecnologico", ES tiene "Technology Stack"
  - ES sin acentos/tildes en todo el contenido
  - "Project Pulse Card" especificado en DESING.MD pero no implementado
  - Todo el código en un solo archivo App.jsx (1256 líneas)
  - Sin .env.example documentado
```

---

## FASE 1 — Bugs que un Tech Lead detectaría (prioridad máxima)

| # | Tarea | Archivo | Estado |
|---|---|---|---|
| 1.1 | Fix React Hook Rules violation en `ProjectsSection` — mover hooks antes del `return null` | `src/App.jsx:604-606` | ✅ Hecho |
| 1.2 | Fix i18n title swap — `overview.title` tiene los idiomas invertidos | `src/data/content.js:47,389` | ✅ Hecho |
| 1.3 | Agregar accents/tildes al ES — todos los textos sin ñ/acentos | `src/data/content.js` ES section | ✅ Hecho |
| 1.4 | Crear `.env.example` documentando `VITE_FORMSPREE_ENDPOINT` | root | ✅ Hecho |

**Detalle técnico 1.1 — Hook Rules Violation:**
```jsx
// ACTUAL (viola Rules of Hooks)
function ProjectsSection(...) {
  if (!isVisible) return null;          // early return ANTES de hooks
  const [areFiltersOpen, ...] = useState(false);  // ❌ hook después de return condicional

// FIX: extraer inner component o mover hooks antes del return
function ProjectsSection(...) {
  const [areFiltersOpen, ...] = useState(false);  // ✅ hooks primero
  if (!isVisible) return null;                     // return después
```

---

## FASE 2 — Calidad de código y estructura

| # | Tarea | Descripción | Estado |
|---|---|---|---|
| 2.1 | Separar componentes en archivos | Extraer cada section a `src/components/` | ✅ Hecho |
| 2.2 | Migrar a TypeScript | Convertir `.jsx` → `.tsx`, tipos en `types.ts`, `vite-env.d.ts` | ✅ Hecho |
| 2.3 | Fix TechCarousel navigation | Botones `<-` `->` pausan auto-play y setean dirección | ✅ Hecho |
| 2.4 | Agregar ESLint + react-hooks plugin | `eslint.config.js` flat config (ESLint 9) | ✅ Hecho |

**Estructura propuesta para 2.1:**
```
src/
├── components/
│   ├── OverviewSection.jsx
│   ├── ProjectsSection.jsx
│   ├── CaseStudySection.jsx
│   ├── StackSection.jsx
│   ├── ContactSection.jsx
│   ├── TechCarousel.jsx
│   ├── TechIcon.jsx
│   └── icons/
│       ├── GitHubIcon.jsx
│       ├── ExternalLinkIcon.jsx
│       ├── LinkedInIcon.jsx
│       └── MailIcon.jsx
├── utils/
│   └── facets.js    # resolveFacetTone, resolveFacetTechIcon, etc.
├── data/
│   └── content.js
├── App.jsx          # Solo shell + routing state
└── main.jsx
```

---

## FASE 3 — Contenido y proyectos

| # | Tarea | Descripción | Estado |
|---|---|---|---|
| 3.1 | Agregar 1-2 proyectos más | Mínimo 4 proyectos para demostrar versatilidad real | ⬜ Pendiente |
| 3.2 | Screenshots reales | Reemplazar GitHub OpenGraph con capturas propias | ⬜ Pendiente |
| 3.3 | Implementar Project Pulse Card | Panel sticky derecho `lg:grid-cols-[1fr_300px]` con métricas, decisions, impact, links | ✅ Hecho |
| 3.4 | Completar TuGestionAmiga demo | Deploy funcional o estado explicado en el card | ⬜ Pendiente |
| 3.5 | Agregar proyecto con tests | Cualquier proyecto con unit tests demuestra awareness de calidad | ⬜ Pendiente |

---

## FASE 4 — Señales de calidad profesional

| # | Tarea | Descripción | Estado |
|---|---|---|---|
| 4.1 | Tests al portfolio | Vitest — 41 tests en `facets.test.ts`, todas passing | ✅ Hecho |
| 4.2 | Mejorar GitHub Actions CI | Agregados `typecheck` + `test` steps antes del build | ✅ Hecho |
| 4.3 | Verificar favicon.svg | Confirmado que existe en public/ — agregar favicon.ico como fallback | ⬜ Pendiente |
| 4.4 | og:image real | Screenshot del portfolio para preview al compartir el link | ⬜ Pendiente |

---

## FASE 5 — Diferenciación para top companies

| # | Tarea | Descripción | Estado |
|---|---|---|---|
| 5.1 | Case Study en profundidad | Reemplazar la sección genérica con un case study real: problema → decisiones → tradeoffs → resultado | ⬜ Pendiente |
| 5.2 | Métricas reales | Cuantificar: usuarios concurrentes testeados, latencia medida, cobertura si existe | ⬜ Pendiente |
| 5.3 | Blog técnico o nota | Link a artículo propio sobre una decisión técnica real | ⬜ Pendiente |
| 5.4 | Contribución open source | Una PR merged en proyectos de terceros es señal muy valorada | ⬜ Pendiente |

---

## Stack del Portfolio

| Tecnología | Versión | Rol |
|---|---|---|
| React | 18.3.1 | UI framework |
| TypeScript | 5.x | Tipado estático (strict mode) |
| Vite | 5.4.12 | Build tool |
| Tailwind CSS | 3.4.19 | Utility CSS |
| Vitest | 4.x | Unit testing (41 tests) |
| ESLint | 9.x | Linting (flat config) |
| Space Grotesk | - | Tipografía sans |
| JetBrains Mono | - | Tipografía mono |
| Formspree | - | Proxy de formulario |
| GitHub Pages | - | Hosting |
| GitHub Actions | - | CI/CD (typecheck + test + build) |

---

## Archivos Clave

| Archivo | Líneas | Rol |
|---|---|---|
| `src/App.tsx` | ~180 | Shell + routing state (TypeScript) |
| `src/components/*.tsx` | 9 archivos | Componentes separados + ProjectPulseCard |
| `src/styles.css` | 2,757 | Design system completo |
| `src/data/content.ts` | ~700 | i18n EN + ES (tipado) |
| `src/types.ts` | ~200 | Interfaces TypeScript |
| `src/utils/facets.ts` | - | Utilidades de facets |
| `src/utils/facets.test.ts` | 41 tests | Vitest unit tests |
| `eslint.config.js` | - | ESLint 9 flat config |
| `index.html` | 43 | Entry + SEO/OG meta |
| `tailwind.config.cjs` | 62 | Design tokens + breakpoints |
| `.github/workflows/deploy.yml` | - | CI/CD: typecheck + test + build |
