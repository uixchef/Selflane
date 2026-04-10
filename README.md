# Selflane

Marketing landing page for **Selflane** — a personal-site builder positioning — implemented as a [Next.js](https://nextjs.org/) App Router app with assets traced from Figma.

**Repository:** [github.com/uixchef/Selflane](https://github.com/uixchef/Selflane)

## Stack

- **Next.js** 16 (App Router), **React** 19  
- **TypeScript**  
- **Tailwind CSS** v4 (`@tailwindcss/postcss`)  
- **Radix UI** (`@radix-ui/react-slot`), **class-variance-authority**, **lucide-react**  
- Dev/build use the **webpack** bundler (`next dev --webpack` / `next build --webpack`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal if 3000 is taken).

### Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Local dev server         |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint                   |

## Project layout

| Path | Role |
|------|------|
| `app/` | App Router — `layout.tsx`, `page.tsx`, `globals.css` |
| `components/selflane/` | Landing UI — hero, meteors, partner marquee, Figma-aligned layers |
| `components/ui/` | Shared UI (e.g. `Button`) |
| `lib/` | Utilities and asset map (`selflane-assets.ts`) |
| `public/figma/` | Local SVGs (logo, horizon stack, partner logos, lines) |

Raster/SVG handling for local assets is configured in `next.config.ts` (including SVGs via `next/image` where used).

## Figma assets

Static exports live under `public/figma/` and are referenced from `lib/selflane-assets.ts`. To (re)download originals from Figma MCP asset URLs into that folder:

```bash
./scripts/download-figma-assets.sh
```

Existing files are skipped; delete a file first to refetch.

## Deployment

Standard Next.js deployment: build with `npm run build`, run with `npm run start`, or host on [Vercel](https://vercel.com/) or any Node-friendly platform that supports Next.js 16.

## License

Private project (`"private": true` in `package.json`). Adjust if you open-source the repo.
