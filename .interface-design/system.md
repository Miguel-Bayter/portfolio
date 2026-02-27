# Portfolio Interface System

## Direction and Feel
- Domain: software product delivery, engineering reliability, hiring proof.
- Tone: technical, confident, clear, and evidence-driven.
- Visual language: deep slate/navy surfaces with cyan and mint signal accents.
- Above-the-fold priority: value proposition, proof signals, and availability state.

## Color and Depth Strategy
- Use a single accent family for interaction emphasis (`signal-cyan`) and a secondary health accent (`signal-mint`).
- Keep warm accents minimal and purpose-based only.
- Surface hierarchy uses subtle layered gradients and low-contrast borders.
- Depth style: layered shadows + inset top highlights for cards and pills.

## Spacing and Rhythm
- Base spacing unit: 4px.
- Header and topbar blocks should stay compact on mobile.
- Section rhythm should prioritize fast scanning: title, short subtitle, proof blocks, action.

## Key Component Patterns
- **Topbar status pill**: live state chip with restrained pulse/sheen animation and reduced-motion fallback.
- **Topbar proof pills**: short uppercase evidence tags, 2 visible on mobile, 3 on desktop.
- **Proof strip cards**: modular cards with status chip, progress bar, and two-cell metadata row.
- **Section titles**: high-contrast heading with subtle accent underline, not heavy glow.
- **Interaction timing**: 140-220ms, ease-out/deceleration curves, no spring effects.

## Projects Dense Mode (2xl)
- **Grid scaling**: `1/2/3/4/5` columns by breakpoint (`base/sm/lg/xl/2xl`) with tighter gap at `2xl` for dashboard density.
- **Card hierarchy**: prioritize title, language chip, and top 1-2 tech facets; hide low-priority narrative text on `2xl`.
- **Actions**: use icon-only compact buttons on `2xl` with accessible labels and hover/focus tooltips.
- **State emphasis**: active facet tag gets soft cyan glow; filtered cards get subtle vertical accent rail.
- **Motion**: keep transitions subtle (`120-160ms`) and disable decorative effects under `prefers-reduced-motion`.

## Dense Pattern Reuse (Stack + Hiring Fit)
- **Shared premium cards**: `capability`, `signal`, and `panel` cards use the same top accent rail and subtle layered surface treatment.
- **2xl compaction**: tighten paddings and typography while preserving hierarchy (`title > value > short rationale > bullets`).
- **Content density control**: clamp long explanatory lines and keep bullets readable without vertical sprawl.
- **Grid behavior**: increase card count per row only on large canvases (`stack` up to 4 cols, hiring panels up to 4 cols).
