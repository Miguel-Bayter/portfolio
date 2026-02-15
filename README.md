# Portfolio Ops Console

Interface-first fullstack developer portfolio for GitHub Pages.

## Live URL

`https://miguel-bayter.github.io/portfolio/`

## Stack

- React 18
- Vite 5
- GitHub Actions (Pages deploy)

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

- `src/App.jsx`: app shell and sections
- `src/data/content.js`: bilingual content and project data
- `src/styles.css`: design tokens and interface styles
- `.github/workflows/deploy.yml`: auto deploy to GitHub Pages

## Language support

The interface includes EN/ES toggle in the top bar.

## Notes

Pages site is configured with `build_type=workflow`.
