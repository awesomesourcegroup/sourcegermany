# Agent & AI coding rules — SourceGermany

## Next.js version warning

This project runs **Next.js 16.2.4** with **React 19**. Both have breaking changes relative to what most AI training data covers. Before writing any routing, data-fetching, or server/client boundary code, read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices in compiler output.

## Project-specific conventions

### Colour
Brand colours are Tailwind tokens defined in `src/app/globals.css`: `paper`, `paper-deep`, `ink`, `brand`, `brand-soft`. Keep the design plain (see README, Design conventions). Use the classes (`bg-brand`, `text-ink`). Do not hardcode hex values in components. Shared building blocks (PageHeader, SectionHeading, CtaBand, Faq, ShippingTable, buttons) are in `src/components/Blocks.tsx`.

### Icons
**No emojis in UI.** All icons are small inline SVG components defined at the top of the file where they're used, e.g.:

```tsx
const IconWrench = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="..."/>
  </svg>
);
```

`lucide-react` is installed but **not used** — write SVGs by hand. Keep icon components in the same file as their consumers.

### Server vs client components
Default to Server Components. Add `"use client"` only when the component needs `useState`, `useEffect`, or browser event handlers. Currently client components: `Nav.tsx`, `contact/page.tsx`.

### Tailwind v4
Configuration is in `src/app/globals.css` via `@theme { ... }`. There is no `tailwind.config.js`. Class names follow Tailwind v4 conventions — verify against `node_modules/tailwindcss/` if uncertain.

### Deep-linking to /shops
Each category section in `src/app/shops/page.tsx` has an `id` attribute derived from the category name (e.g. `id="smart-home-audio"`). The expertise pillar cards on the home page link to `/shops#<id>`. Keep these in sync when adding or renaming categories.

### Shipping options
DHL Express and DHL Paket International are described once in `shippingOptions` in `src/components/Blocks.tsx`. Edit them there. There is no price calculator anymore.

### Images
- Use `next/image` `<Image>` for all images.
- Always provide `fill` + `sizes`, or explicit `width`/`height`.
- Static assets live in `public/images/`. Unsplash photos used under the Unsplash License (free for commercial use).

## What to check before modifying shared components

| Component | Consumers |
|---|---|
| `Nav.tsx` | Every page (via `layout.tsx`) |
| `Footer.tsx` | Every page (via `layout.tsx`) |
| `Blocks.tsx` | Every page |
| `/shops` section `id` values | `page.tsx` pillar `href` fields |
