# SourceGermany

German proxy buying service. Main offer: second-hand items from eBay.de and Kleinanzeigen (we deal with the seller in German, collect, inspect, ship). New items from any German shop too. Ships to any country with DHL Express or DHL Paket International.

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16.2.4 (App Router) | **Not standard Next.js 14/15.** Breaking API changes. Read `node_modules/next/dist/docs/` before touching routing or data-fetching. |
| Language | TypeScript 5 | Strict mode off; types are pragmatic, not exhaustive |
| UI | React 19.2.4 | Server Components by default; `"use client"` only where needed |
| Styling | Tailwind CSS v4 | No `tailwind.config.js` — configuration lives in `src/app/globals.css` via `@theme` |
| Email | Resend | Via `RESEND_API_KEY`; used only in `/api/contact` |
| Fonts | Bricolage Grotesque (headings) + Inter (body) | Loaded via `next/font/google` in `layout.tsx` |
| Deployment | Vercel | Standard Next.js output mode |

Installed but largely unused: `shadcn`, `@base-ui/react`, `lucide-react`. The `src/components/ui/` primitives exist but most custom UI is hand-built.

## Project structure

```
src/
  app/
    layout.tsx              # Root layout: Nav + Footer, fonts, metadata
    page.tsx                # Home: second-hand hero, problems we solve, steps, shipping, shops teaser
    second-hand/page.tsx    # eBay.de + Kleinanzeigen service detail, inspection, FAQ
    how-it-works/page.tsx
    pricing/page.tsx        # "Shipping & fees": fee list + DHL Express vs DHL Paket
    shops/page.tsx          # Marketplaces + shop directory, category sections have id= anchors
    why-germany/page.tsx
    about/page.tsx
    contact/page.tsx        # "use client": quote request form (free-text country, shipping preference)
    api/contact/route.ts    # POST: sends enquiry email via Resend (HTML-escaped)
  components/
    Nav.tsx                 # "use client": floating pill header, also exports <Logo>
    Footer.tsx
    Blocks.tsx              # Shared: Eyebrow, PageHeader, buttons, CtaBand, ShippingCards (DHL options live here)
    ScrollReveal.tsx
```

The old cost estimator (`/estimator`, `/api/estimate`, `lib/pricing.ts`) was removed. `/estimator` permanently redirects to `/contact` (see `next.config.ts`). Quotes are now given personally.

### API

**`POST /api/contact`** body: `{ name?, email, destination, shipping?, message }`. `email` and `message` required.

## Environment variables

```
RESEND_API_KEY=re_...    # Required for /api/contact to send email
```

No database, no auth, no session. The app is fully stateless.

## Local dev

```bash
npm install
cp .env.local.example .env.local   # set RESEND_API_KEY
npm run dev                         # http://localhost:3000
```

```bash
npm run build    # production build
npm run lint     # eslint
```

## Design conventions

- **Tokens** live in `src/app/globals.css` (`:root` + `@theme inline`): `paper` (cream background), `ink` (text), `brand` (deep green), `brand-soft`, `coral` (primary CTA), `coral-soft`, `sun` (yellow highlight). Use them as Tailwind classes (`bg-paper`, `text-brand`, `bg-coral`...). No per-file colour constants.
- **Shapes**: rounded-3xl cards, rounded-full buttons and pills, large rounded dark panels (`rounded-[2rem] bg-ink`).
- **Typography**: `font-display` (Bricolage Grotesque) for headings, Inter for body. `.scribble` gives a highlighter mark behind a word.
- **Icons**: hand-written inline SVG in the same file. No emojis.
- **Images**: `next/image` with `fill` + `sizes` or explicit size.
- **Copy**: no em dashes or semicolons as prose connectors.
