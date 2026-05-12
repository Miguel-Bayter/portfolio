# Qué hice, por qué lo hice y cómo replicarlo manualmente

> Documento generado después de la sesión de implementación del 2026-02-27.
> Nivel: desde cero. Si entiendes esto, entiendes lo que se hizo.

---

## Índice

1. [Contexto: ¿qué problema había?](#1-contexto-qué-problema-había)
2. [Migración a TypeScript](#2-migración-a-typescript)
3. [Separación de componentes](#3-separación-de-componentes)
4. [ESLint — el vigilante del código](#4-eslint--el-vigilante-del-código)
5. [Vitest — pruebas automáticas](#5-vitest--pruebas-automáticas)
6. [GitHub Actions CI — pipeline automático](#6-github-actions-ci--pipeline-automático)
7. [og:image — cómo se ve al compartir el link](#7-ogimage--cómo-se-ve-al-compartir-el-link)
8. [Conocimientos base que necesitas](#8-conocimientos-base-que-necesitas)

---

## 1. Contexto: ¿qué problema había?

El portafolio funcionaba visualmente, pero tenía problemas que un desarrollador senior detectaría en 10 minutos:

| Problema | Por qué es grave |
|---|---|
| Todo el código en un solo archivo de 1256 líneas | Imposible de mantener, señal de falta de arquitectura |
| Sin TypeScript (aunque el portafolio decía "uso TypeScript") | Contradicción directa con el stack que promueve |
| Sin tests | Cualquier empresa seria pregunta "¿cómo sabés que funciona?" |
| Sin ESLint | Un bug de React (Hook Rule) estaba viviendo en el código sin que nadie lo notara |
| Sin og:image | El link al portafolio se veía feo al compartirlo por LinkedIn o WhatsApp |

La solución fue: **agregar señales profesionales reales, no cosméticas**.

---

## 2. Migración a TypeScript

### ¿Qué es TypeScript?

JavaScript es un lenguaje donde podés hacer esto:

```js
function sumar(a, b) {
  return a + b;
}

sumar("5", 3); // Resultado: "53" — ¡concatenó en vez de sumar!
```

No hay error. JavaScript acepta cualquier tipo en cualquier lugar. Eso causa bugs silenciosos.

TypeScript es JavaScript **con tipos**. Le decís al compilador qué tipo espera cada variable:

```ts
function sumar(a: number, b: number): number {
  return a + b;
}

sumar("5", 3); // ❌ ERROR en el editor, antes de ejecutar
```

El error aparece antes de que el código corra. Eso es TypeScript: **un sistema de detección de errores antes de que exploten en producción**.

### ¿Qué se hizo exactamente?

#### Paso 1 — Instalar TypeScript y los tipos de React

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

- `typescript` — el compilador
- `@types/react` — le dice a TypeScript cómo son los tipos de React (props, eventos, etc.)
- `@types/react-dom` — idem para react-dom

#### Paso 2 — Crear `tsconfig.json`

Este archivo le dice al compilador TypeScript cómo comportarse. Se crea en la raíz del proyecto:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src", "vite.config.ts", "vitest.config.ts"]
}
```

**Cada opción explicada:**

| Opción | Qué hace | Por qué está ahí |
|---|---|---|
| `target: "ES2020"` | El código se compila a JavaScript moderno | ES2020 es compatible con todos los browsers actuales |
| `lib: ["ES2020","DOM","DOM.Iterable"]` | Qué APIs tiene disponibles | DOM = ventana, document, etc. |
| `moduleResolution: "bundler"` | Cómo resuelve los imports | Modo moderno para Vite 5 + TS 5 |
| `allowImportingTsExtensions: true` | Podés escribir `import X from './X.tsx'` | Necesario con Vite |
| `noEmit: true` | No genera archivos `.js`, solo valida | Vite ya se encarga de compilar |
| `jsx: "react-jsx"` | Entiende JSX sin importar React manualmente | React 17+ no necesita `import React` en cada archivo |
| `strict: true` | Activa todas las reglas estrictas | Más errores detectados, más código seguro |
| `noUnusedLocals: true` | Error si declarás una variable y no la usás | Limpieza de código muerto |
| `noUnusedParameters: true` | Error si declarás un parámetro y no lo usás | Idem |

#### Paso 3 — Crear `src/vite-env.d.ts`

Vite importa imágenes como strings (rutas). TypeScript no sabe eso por defecto. Este archivo le explica:

```ts
/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
```

La línea `/// <reference types="vite/client" />` también le dice a TypeScript que `import.meta.env` existe (la forma en que Vite expone variables de entorno como `VITE_FORMSPREE_ENDPOINT`).

#### Paso 4 — Crear `src/types.ts`

Todas las interfaces compartidas van en un solo archivo. Una interfaz es un "contrato":

```ts
export interface Project {
  id: string;
  name: string;
  type: string;
  facets: string[];   // array de strings
  metrics: ProjectMetric[];
  links: ProjectLinks;
  // ... etc
}
```

Ahora si algún componente intenta acceder a `project.naem` (typo), TypeScript lo detecta inmediatamente.

#### Paso 5 — Renombrar archivos

```
src/App.jsx         →  src/App.tsx
src/main.jsx        →  src/main.tsx
src/data/content.js →  src/data/content.ts
src/utils/facets.js →  src/utils/facets.ts
src/components/OverviewSection.jsx  →  OverviewSection.tsx
(... todos los componentes igual)
```

La extensión `.tsx` = TypeScript + JSX. La extensión `.ts` = TypeScript sin JSX.

#### Paso 6 — Actualizar index.html

```html
<!-- ANTES -->
<script type="module" src="/src/main.jsx"></script>

<!-- DESPUÉS -->
<script type="module" src="/src/main.tsx"></script>
```

#### Paso 7 — Actualizar tailwind.config.cjs

Tailwind necesita saber en qué archivos buscar clases CSS:

```js
// ANTES
content: ['./index.html', './src/**/*.{js,jsx}'],

// DESPUÉS
content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
```

#### Paso 8 — Agregar script de typecheck a package.json

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "typecheck": "tsc --noEmit"
}
```

`tsc --noEmit` ejecuta el compilador en modo "solo verificar, no generar archivos".

#### Verificar que funciona

```bash
npm run typecheck
```

Si no aparece nada = sin errores. Si aparecen errores, los describe con archivo y línea.

---

## 3. Separación de componentes

### ¿Por qué separar?

Un archivo de 1256 líneas tiene estos problemas:
- No podés navegar el código sin perderte
- Si dos personas trabajan en él al mismo tiempo → conflictos de Git garantizados
- No podés reusar partes del código en otros proyectos
- Los code reviews son imposibles ("¿en qué línea está ese bug?")

La regla general: **un componente = un archivo**.

### Cómo se hizo

Se identificaron los componentes grandes dentro de `App.jsx`:

```
App.jsx (1256 líneas)
  ├── OverviewSection     → src/components/OverviewSection.tsx
  ├── ProjectsSection     → src/components/ProjectsSection.tsx
  ├── CaseStudySection    → src/components/CaseStudySection.tsx
  ├── StackSection        → src/components/StackSection.tsx
  ├── ContactSection      → src/components/ContactSection.tsx
  ├── TechCarousel        → src/components/TechCarousel.tsx
  ├── TechIcon            → src/components/TechIcon.tsx
  ├── icons               → src/components/icons.tsx
  └── ProjectPulseCard    → src/components/ProjectPulseCard.tsx  ← nuevo
```

Y el `App.tsx` final quedó como el "shell" que solo maneja el estado global y renderiza estos componentes.

### Cómo extraer un componente manualmente

**Paso 1** — Identificar la función en `App.jsx`:
```jsx
function OverviewSection({ t, language, projects, isVisible, onNavigate }) {
  // ... código
}
```

**Paso 2** — Crear `src/components/OverviewSection.tsx` y pegarlo ahí con sus imports:
```tsx
import type { ContentLocale, Project } from '../types';
import overviewPhoto from '../img/overview.png';
// ... otros imports

interface OverviewSectionProps {
  t: ContentLocale;
  language: string;
  projects: Project[];
  isVisible: boolean;
  onNavigate: (section: string) => void;
  onSelectProject: (id: string) => void;
}

export default function OverviewSection({ t, language, projects, isVisible, onNavigate, onSelectProject }: OverviewSectionProps) {
  // ... el mismo código de antes
}
```

**Paso 3** — En `App.tsx`, importarlo y eliminarlo:
```tsx
// AGREGAR al inicio
import OverviewSection from './components/OverviewSection';

// ELIMINAR la definición de la función OverviewSection del archivo
```

**Paso 4** — Usarlo igual que antes:
```tsx
<OverviewSection
  t={t}
  language={language}
  projects={projects}
  isVisible={activeSection === 'overview'}
  onNavigate={(s) => setActiveSection(s as SectionId)}
  onSelectProject={setSelectedProjectId}
/>
```

---

## 4. ESLint — el vigilante del código

### ¿Qué es ESLint?

ESLint es un programa que lee tu código y te advierte cuando hace algo peligroso o incorrecto, **sin ejecutarlo**.

Por ejemplo, el bug que tenía el portafolio antes:

```jsx
function ProjectsSection({ isVisible }) {
  if (!isVisible) return null;          // ← retorno temprano
  const [open, setOpen] = useState(false); // ← hook DESPUÉS del return = ❌ CRASH
}
```

React tiene una regla: los Hooks (`useState`, `useEffect`, etc.) **siempre** deben llamarse en el mismo orden, nunca después de un `return` condicional. ESLint con el plugin `react-hooks` detecta esto automáticamente.

### Instalación

```bash
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks
```

### Crear `eslint.config.js`

ESLint 9 (la versión actual) usa un formato nuevo llamado "flat config". El archivo se crea en la raíz:

```js
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    // Ignorar carpetas que no son nuestro código
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    // Solo analizar archivos TypeScript
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Todas las reglas recomendadas de TypeScript
      ...tsPlugin.configs.recommended.rules,
      // Regla que detecta el bug de hooks
      'react-hooks/rules-of-hooks': 'error',
      // Avisa si falta una dependencia en useEffect
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
```

### Agregar script a package.json

```json
"scripts": {
  "lint": "eslint src"
}
```

### Ejecutar

```bash
npm run lint
```

---

## 5. Vitest — pruebas automáticas

### ¿Qué son los tests y para qué sirven?

Imaginate que tenés una función que decide qué ícono mostrar para cada tecnología:

```ts
function resolveFacetTechIcon(facet: string): string | null {
  if (facet.toLowerCase().includes('node')) return 'nodejs';
  if (facet.toLowerCase().includes('react')) return 'react';
  // ...
}
```

Sin tests, cada vez que modificás algo tenés que **probar manualmente** en el browser. Con tests, escribís una vez las expectativas y las verificás automáticamente:

```ts
it('returns nodejs for Node.js', () => {
  expect(resolveFacetTechIcon('Node.js')).toBe('nodejs');
});

it('returns null for unknown facet', () => {
  expect(resolveFacetTechIcon('Redis')).toBeNull();
});
```

Si mañana alguien cambia la función y rompe algo, los tests fallan al instante.

### Instalación

```bash
npm install --save-dev vitest
```

### Crear `vitest.config.ts`

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,       // permite usar describe/it/expect sin importarlos
    environment: 'node', // entorno de ejecución (sin browser)
  },
});
```

### Estructura de un archivo de tests

Los archivos de test tienen extensión `.test.ts` y viven junto al archivo que testean:

```
src/utils/
├── facets.ts           ← el código real
└── facets.test.ts      ← los tests
```

Estructura básica de un test:

```ts
import { describe, it, expect } from 'vitest';
import { resolveFacetTechIcon } from './facets';

// "describe" agrupa tests relacionados
describe('resolveFacetTechIcon', () => {

  // "it" es un test individual — se lee como una oración
  it('returns nodejs for Node.js', () => {
    // "expect" + "toBe" = "espero que el resultado sea..."
    expect(resolveFacetTechIcon('Node.js')).toBe('nodejs');
  });

  it('returns null for unknown tech', () => {
    expect(resolveFacetTechIcon('Redis')).toBeNull();
  });

});
```

### Agregar script a package.json

```json
"scripts": {
  "test": "vitest run"
}
```

`vitest run` = ejecuta todos los tests una vez y cierra.
`vitest` (sin `run`) = modo watch, re-ejecuta al guardar archivos.

### Ejecutar

```bash
npm run test
```

Resultado esperado:
```
✓ src/utils/facets.test.ts (41 tests)

Test Files  1 passed (1)
     Tests  41 passed (41)
```

---

## 6. GitHub Actions CI — pipeline automático

### ¿Qué es CI/CD?

**CI** = Continuous Integration (Integración Continua)
**CD** = Continuous Deployment (Despliegue Continuo)

La idea: cada vez que hacés `git push`, un servidor en la nube ejecuta automáticamente una serie de pasos (verificar tipos, correr tests, construir el sitio, publicarlo). Si algo falla, el deploy no ocurre.

### El archivo que lo controla

Ya existía `.github/workflows/deploy.yml`. Se le agregaron dos pasos nuevos **antes** del build:

```yaml
# ANTES (solo build + deploy)
- name: Install dependencies
  run: npm ci

- name: Build site
  run: npm run build

# DESPUÉS (typecheck + tests + build + deploy)
- name: Install dependencies
  run: npm ci

- name: Type check          ← NUEVO
  run: npm run typecheck

- name: Run tests           ← NUEVO
  run: npm run test

- name: Build site
  run: npm run build
```

### Por qué este orden importa

Si los tests fallan, GitHub Actions para ahí y **no hace el deploy**. Nunca llega código roto a producción. Eso es la garantía que buscan los equipos de trabajo.

### Cómo verlo

En GitHub → pestaña **Actions** → ves cada push con sus pasos ejecutados, tiempos, y si pasaron o fallaron.

---

## 7. og:image — cómo se ve al compartir el link

### ¿Qué son las Open Graph tags?

Cuando compartís un link en LinkedIn, WhatsApp o Twitter, esas plataformas leen etiquetas especiales del HTML llamadas **Open Graph** (`og:`) para mostrar una preview con título, descripción e imagen.

Si no las tenés, LinkedIn muestra solo el link sin imagen. Mal.

### Las etiquetas que se agregaron

En `index.html`, dentro de `<head>`:

```html
<!-- Imagen que aparece al compartir el link -->
<meta property="og:image" content="https://miguel-bayter.github.io/portfolio/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Para Twitter/X específicamente -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://miguel-bayter.github.io/portfolio/og-image.png" />
```

- `summary_large_image` = imagen grande (en lugar de miniatura cuadrada)
- El tamaño estándar es 1200×630 px

### Cómo se agregó la imagen

La imagen `overview.png` (el fondo del hero) se copió a la carpeta `public/`:

```bash
cp src/img/overview.png public/og-image.png
```

Los archivos en `public/` se sirven **tal cual** en la URL raíz del sitio. Por eso la URL funciona como `https://tu-dominio/og-image.png`.

### Cómo reemplazarla con una captura real

1. Tomá un screenshot del portafolio con el browser (1200×630 px ideal)
2. Guardalo como `og-image.png`
3. Reemplazá el archivo en `public/og-image.png`
4. Hacé commit y push → el deploy lo actualiza

Para verificar cómo se verá: [https://www.opengraph.xyz](https://www.opengraph.xyz) — pegás la URL y te muestra la preview.

---

## 8. Conocimientos base que necesitas

Si llegaste hasta acá y algunos conceptos no quedaron claros, acá están los fundamentos que los hacen posibles:

### ¿Qué es Node.js y npm?

**Node.js** es un entorno que permite ejecutar JavaScript fuera del browser (en tu computadora, en un servidor). Antes de Node, JavaScript solo corría en el browser.

**npm** (Node Package Manager) es el gestor de paquetes que viene con Node. Cuando hacés `npm install vitest`, descarga el código de Vitest desde internet y lo pone en la carpeta `node_modules/`.

El archivo `package.json` registra qué paquetes necesita tu proyecto:
- `dependencies`: lo que necesita para funcionar en producción
- `devDependencies`: lo que solo necesita para desarrollo (tests, ESLint, TypeScript, etc.)

### ¿Qué es un módulo?

En JavaScript moderno, cada archivo puede exportar cosas:

```ts
// utils/math.ts
export function sumar(a: number, b: number) {
  return a + b;
}
```

Y otros archivos pueden importarlas:

```ts
// main.ts
import { sumar } from './utils/math';
console.log(sumar(2, 3)); // 5
```

Esto permite dividir el código en piezas pequeñas, independientes y reutilizables. Es lo que se hizo con los componentes.

### ¿Qué es Vite?

Vite es la herramienta que:
1. En desarrollo (`npm run dev`): sirve tu código al browser instantáneamente con hot reload (recarga sin perder el estado)
2. En producción (`npm run build`): agrupa todos los archivos en un bundle optimizado (JS minimizado, CSS minimizado, imágenes comprimidas) listo para deployar

Vite entiende TypeScript, JSX, imports de imágenes, y CSS por defecto.

### ¿Qué es Git y GitHub?

**Git** = sistema de control de versiones. Registra cada cambio al código con autor, fecha y mensaje. Podés volver a cualquier punto anterior.

**GitHub** = plataforma web que aloja repositorios Git. También ofrece:
- **GitHub Pages**: hosting gratuito para sitios estáticos (el portafolio vive acá)
- **GitHub Actions**: servidor CI/CD gratuito para repositorios públicos

### ¿Qué es un "build"?

El código que escribís (TypeScript, JSX, imports de módulos, Tailwind) no puede ser leído directamente por el browser. El **build** transforma todo eso en HTML, CSS y JavaScript estándar que cualquier browser entiende.

```
src/App.tsx  ─┐
src/styles.css─┤  vite build  →  dist/index.html
content.ts   ─┘               →  dist/assets/index-xxx.js
                               →  dist/assets/index-xxx.css
```

La carpeta `dist/` es lo que se publica en GitHub Pages.

### ¿Qué es un tipo en TypeScript?

Un tipo es la descripción de qué forma tiene un valor. Podés definir tus propios tipos con `interface` o `type`:

```ts
// Describe cómo es un objeto Project
interface Project {
  id: string;       // siempre un string
  name: string;
  facets: string[]; // array de strings
  links: {
    repo: string;
    demo: string;   // puede ser string vacío ""
  };
}

// Ahora si alguien intenta esto:
const p: Project = {
  id: 123,  // ❌ ERROR: 123 no es string
  name: "Mi App",
  facets: [],
  links: { repo: "", demo: "" }
};
```

Los tipos más comunes:
- `string` — texto
- `number` — número
- `boolean` — true/false
- `string[]` — array de strings
- `string | null` — string O null (union type)
- `Record<string, string>` — objeto con claves y valores string

---

## Resultado final

Después de esta sesión, el portafolio tiene:

```
✅ TypeScript strict — 0 errores de compilación
✅ 9 componentes separados (vs 1 monolito de 1256 líneas)
✅ 41 tests automáticos que verifican la lógica de facets
✅ ESLint configurado — detecta bugs de React Hooks
✅ Pipeline CI: typecheck → test → build → deploy (automático en cada push)
✅ og:image configurada — preview al compartir el link
```

**Lo que queda pendiente (requiere acción manual):**

| Tarea | Qué hay que hacer |
|---|---|
| Screenshots de proyectos | Capturar el browser, guardar en `src/img/`, referenciar en `content.ts` |
| og:image real | Reemplazar `public/og-image.png` con screenshot del portafolio |
| Deploy de TuGestionAmiga | Subir el proyecto a Vercel/Railway, poner la URL en `content.ts` como `demo` |
| Más proyectos | Agregar objetos al array `items` dentro de `projects` en `content.ts` |
