# SourceGermany

German proxy shopping service — buy any product from Germany, shipped worldwide with duties paid.

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16.2.4 (App Router) | **Not standard Next.js 14/15.** Breaking API changes. Read `node_modules/next/dist/docs/` before touching routing or data-fetching. |
| Language | TypeScript 5 | Strict mode off; types are pragmatic, not exhaustive |
| UI | React 19.2.4 | Server Components by default; `"use client"` only where needed |
| Styling | Tailwind CSS v4 | No `tailwind.config.js` — configuration lives in `src/app/globals.css` via `@theme` |
| Email | Resend | Via `RESEND_API_KEY`; used only in `/api/contact` |
| Fonts | Space Grotesk + DM Mono | Loaded via `next/font/google` in `layout.tsx` |
| Deployment | Vercel | Standard Next.js output mode |

Installed but largely unused: `shadcn`, `@base-ui/react`, `lucide-react`. The `src/components/ui/` primitives exist but most custom UI is hand-built.

## Project structure

```
src/
  app/
    layout.tsx              # Root layout — Nav + Footer, font injection, global metadata
    page.tsx                # Home page
    about/page.tsx
    contact/page.tsx        # "use client" — enquiry form with Resend submit
    estimator/page.tsx      # "use client" — EstimatorForm
    how-it-works/page.tsx
    pricing/page.tsx
    shops/page.tsx          # Category sections have id= anchors for /shops#category-id links
    why-germany/page.tsx
    api/
      contact/route.ts      # POST — sends enquiry email via Resend
      estimate/route.ts     # POST — calls lib/pricing, returns EstimateResult
  components/
    Nav.tsx                 # Sticky header; "use client" for mobile menu state
    Footer.tsx
    EstimatorForm.tsx       # "use client" — wraps /api/estimate
    ui/                     # shadcn primitives (button, card, badge, input, select, separator)
  lib/
    pricing.ts              # "server only" — pure pricing logic (no external deps)
    utils.ts
public/
  images/                   # All Unsplash photos (free commercial licence)
    banner-porsche.jpg      # Porsche 911 Turbo S — "Engineered to a standard" banner
    hero-industry.jpg       # Home page hero background
    pillar-auto.jpg
    pillar-cameras.jpg
    pillar-fashion.jpg
    pillar-health.jpg
    pillar-smarthome.jpg
    pillar-tools.jpg
    why-germany-hero.jpg
    why-germany-tools.jpg
```

## Pages & routes

| Route | Purpose |
|---|---|
| `/` | Marketing home — hero, stats bar, 6 expertise pillars, Porsche banner, trust points, how-it-works teaser, CTA |
| `/how-it-works` | Three-step process detail |
| `/why-germany` | Why source from Germany (quality, value, exclusivity) |
| `/shops` | Curated shop directory — 6 categories, each with `id` anchor for deep-linking |
| `/pricing` | Fee table and DDP vs DAP explanation |
| `/estimator` | Interactive shipping cost calculator |
| `/about` | Brand values and team blurb |
| `/contact` | Channel cards + enquiry form |

### API routes

**`POST /api/contact`**

Body: `{ name?, email, destination, message }`

Sends an HTML email to `contact@sourcegermany.com` via Resend. `email` and `message` are required. Returns `{ success: true }` or `{ error }`.

**`POST /api/estimate`**

Body: `{ itemPriceEur: number, weightKg: number, destination: "singapore"|"australia"|"canada"|"usa", mode: "ddp"|"dap" }`

Runs `calculateEstimate()` from `src/lib/pricing.ts`. Returns:

```ts
{
  estimatedTotalEur: number,
  estimatedTotalLocal: string,   // e.g. "S$1,234 SGD"
  serviceFeeEur: number,
  deliveryDays: string,
  mode: "ddp" | "dap",
  currency: string,
  note: string,
}
```

## Pricing logic (`src/lib/pricing.ts`)

Marked `"server only"` — never imported client-side.

```
total = itemPrice + dhlShipping + insurance(1%) + serviceFee + packaging(€4.50) + destinationTaxes - vatRefund
```

- **DHL shipping**: base rate per destination + per-kg rate (minimum 0.5 kg billed)
- **Service fee**: tiered (€25 under €100, up to 6.5% over €1,200)
- **VAT refund**: `(price / 1.19) * 0.19` — German VAT recovered on export
- **Destination taxes**: GST/duty estimates per country (SG 9%, AU 10%+duty, CA 13%, US 0% under $800)
- **DDP mode**: taxes included in quote; **DAP mode**: taxes excluded, note added to output

FX rates are hardcoded constants — update when rates drift significantly.

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

- **Brand colour**: `#C9A84C` (gold). Defined as `const GOLD` at the top of each file that uses it — not a global token.
- **Colour palette**: zinc scale. `zinc-950` for dark sections, `zinc-50` for light-grey sections, `white` for default.
- **Typography**: Space Grotesk for all UI; DM Mono available but currently unused.
- **Icons**: hand-written inline SVG components defined in the same file as their usage. `lucide-react` is installed but not used. No emojis anywhere in the UI.
- **Images**: all `<Image>` usage includes `fill` + `sizes` or explicit `width`/`height`. No `unoptimized`.
- **No global state**: every page is a Server Component unless it needs `useState`/`useEffect`.
