# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A Next.js (App Router) service that generates deterministic gradient avatars from a
username or email. Forked from [vercel/avatar](https://github.com/vercel/avatar) and
converted to the App Router. Deployed to Vercel and served in production at
`https://avatars.vocayo.ai`.

## Commands

```bash
npm run dev            # dev server (Next.js + Turbopack) on http://localhost:3000
npm run build          # production build
npm run start          # serve the production build
npm run lint           # next lint

npm run test:e2e       # run Playwright e2e tests (trace on)
npx playwright test tests/startpage.spec.ts   # run a single test file
npx playwright test -g "startpage checks"     # run a single test by title
npm run test:e2e:ui    # Playwright interactive UI mode
npm run test:e2e:report  # open the last HTML report
```

There are no unit tests — the only test suite is Playwright e2e.

## Architecture

The entire product is essentially one API route plus a demo landing page.

- **`app/api/avatar/[name]/route.tsx`** — the core endpoint (`export const runtime = 'edge'`).
  The `[name]` segment is parsed as `username.type` (e.g. `rauchg.svg`); the extension
  after the dot selects the output format. Query params: `size` (default 600), `rounded`
  (corner radius, default 0), and `text` (initials, **SVG output only**).
  - `.svg` requests are hand-serialized to an SVG string and returned with a
    long-lived immutable `Cache-Control` header.
  - Everything else is rendered to PNG via `next/og`'s `ImageResponse` (Satori).
  - The same avatar markup exists twice — once as JSX (for `ImageResponse`) and once
    as a template string (for the raw SVG response). **Any visual change must be made
    in both places** or PNG and SVG output will diverge.
  - Text centering uses `dy=".35em"` (not `dominantBaseline="central"`); see the inline
    comment in the route for why. This is deliberate — don't "simplify" it back.

- **`utils/gradient.ts`** — `generateGradient(username)` derives a hue deterministically:
  SHA-1 the input (via `crypto.subtle`, edge-compatible), sum the bytes, mod 360. The
  color and its triad complement (via `tinycolor2`) form the gradient stops. Same input
  always yields the same avatar. When no username is present the route falls back to a
  random string, so blank names are non-deterministic by design.

- **`app/page.tsx`** — static demo/landing page showing sample avatars via `<img src="/api/avatar/...">`.

## Testing notes

Playwright is configured to run against a **deployed environment**, not a local server —
the `webServer` block in `playwright.config.ts` is commented out. Environment selection
(`tests/env.ts`) keys off Checkly / CI env vars:

- `DEV` → `http://localhost:3000` (default; start `npm run dev` first)
- `CI` → `BASE_URL` env var, else `https://avatars.vocayo.ai`
- `PROD` → `https://avatars.vocayo.ai`

Tests pass a Vercel protection-bypass header from `VERCEL_AUTOMATION_BYPASS_SECRET` so
they can hit password-protected preview deployments. The CI workflow
(`.github/workflows/playwright.yml`) triggers on Vercel `deployment_status` success and
runs the suite against the preview URL — not on every push.
