# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — Start dev server (port 3000)
- `pnpm build` — Production build (outputs to `dist/` as static export)
- `pnpm lint` — Run ESLint (next/core-web-vitals + next/typescript configs)

## Architecture

**Next.js 16.2 static export** — This is a personal portfolio/portal site for Isaac Wang. It exports as a fully static site (`output: "export"`, `distDir: "dist"`). No server-side runtime.

**Tech stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion, next-intl (custom client-side setup), shadcn/ui (base-nova style), Aegis (performance monitoring), Vercel Analytics.

**Single-page app:** `app/page.tsx` composes five sections: Hero, NowSection, Projects, BlogPreview, Footer, with a ParticlesBackground behind them.

**i18n:** Custom client-side implementation in `lib/i18n/client.tsx` — does NOT use next-intl's routing/plugin. Uses a React context (`useI18n`) with JSON message files in `messages/{en,zh}.json`. Locale persisted in localStorage. The `I18nProvider` wrapper in `components/i18n-provider.tsx` sets a default locale of "en".

**Styling:** Tailwind CSS 4 with PostCSS. Custom CSS variables defined in `app/globals.css` using an organic color palette (mint accent `#00B894`, warm background `#F5F5F0`). Fonts loaded from Fontshare (Clash Display, Instrument Sans) via `<link>` in layout, not `next/font`.

**Path aliases:** `@/*` maps to project root.

**Static export constraints:** `images.unoptimized: true` — no Next.js image optimization. All pages must be statically exportable (no dynamic API routes, no server actions).

## Next.js 16 Notes

This project uses Next.js 16.2 which has breaking changes from earlier versions. Read the relevant guide in `node_modules/next/dist/docs/` before writing code that touches Next.js APIs, conventions, or file structure.
