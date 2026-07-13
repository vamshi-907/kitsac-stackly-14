# MediSphere – Pharmacy & Health Store HTML Template

Premium HTML5 + Bootstrap 5-compatible + CSS3 + Vanilla JS template for community pharmacies, medical stores, and wellness retailers.

## Quick Start

Open `index.html` in a browser. No build step, no framework — just static HTML/CSS/JS.

Deploy by uploading the `medisphere/` folder to any static host (Netlify, Vercel, Cloudflare Pages, cPanel, S3, etc.).

## Folder Structure

```
medisphere/
├── index.html              Home page
├── css/
│   └── style.css           All design tokens, components, dark & RTL
├── js/
│   └── main.js             Theme toggle, RTL, menu, accordion, AOS, counters, forms, toast
├── images/                 Hero, products, testimonials, blog imagery (WebP-ready JPGs)
├── pages/
│   ├── about.html
│   ├── products.html
│   ├── product-details.html
│   ├── health-categories.html
│   ├── services.html
│   ├── home-delivery.html
│   ├── prescription-upload.html
│   ├── offers.html
│   ├── blog.html
│   ├── blog-details.html
│   ├── faq.html
│   ├── careers.html
│   ├── contact.html
│   ├── 404.html
│   └── coming-soon.html
└── documentation/
    └── README.md           (this file)
```

## Design System

All tokens live as CSS variables in `css/style.css` under `:root`.

### Colors
| Token | Value | Use |
|-------|-------|-----|
| `--ms-primary` | `#4FC3D9` | Arctic Cyan – actions, links |
| `--ms-secondary` | `#A8A4C7` | Soft Lavender Gray |
| `--ms-accent` | `#F8B88B` | Warm Apricot – highlights |
| `--ms-highlight` | `#EAF7F8` | Pale Ice – eyebrow chips |
| `--ms-bg` | `#FEFEFD` | Pure Snow – page background |
| `--ms-surface` | `#F3F4F6` | Cool Pebble – section fills |
| `--ms-text` | `#353A44` | Graphite Slate |
| `--ms-success` | `#78C2A4` | Fresh Aloe |
| `--ms-warning` | `#E6C15A` | Soft Amber |
| `--ms-danger` | `#D96C73` | Muted Coral |

Dark mode overrides sit under `[data-theme="dark"]` at the bottom of `style.css`.

### Typography
- Headings: **Cabinet Grotesk** (via Fontshare)
- Body: **Manrope** (via Google Fonts)
- Icons: **Remix Icons** (via jsDelivr)

### Spacing (8px system)
`--ms-s-1` … `--ms-s-12` = 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px.

## Components

- `.ms-btn` (`.ms-btn-primary`, `.ms-btn-outline`, `.ms-btn-accent`, `.ms-btn-sm`)
- `.ms-cat-card` — category tile with icon
- `.ms-product` — product card with availability badge
- `.ms-feature` — icon + title + description card
- `.ms-offer` (`.v2`, `.v3`) — gradient promo card
- `.ms-testimonial`
- `.ms-timeline` / `.ms-tl-item`
- `.ms-accordion` / `.ms-acc-item` / `.ms-acc-btn`
- `.ms-form` / `.ms-field` / `.ms-upload` / `.ms-check`
- `.ms-blog-card`
- `.ms-cta` / `.ms-newsletter`
- `.ms-hero` / `.ms-hero-badge`
- `.ms-toast` — programmatic via `window.msToast(msg, 'success'|'error')`
- `.ms-breadcrumb` / `.ms-page-head`
- `.ms-icon-btn` / `.ms-topbar` / `.ms-header` / `.ms-footer`

## JavaScript Modules (`js/main.js`)

- **Theme toggle** — `[data-toggle="theme"]` swaps `data-theme`; persisted in `localStorage` (`ms-theme`).
- **RTL toggle** — `[data-toggle="rtl"]` swaps `dir`; persisted (`ms-dir`).
- **Mobile menu** — `[data-toggle="menu"]` toggles `.open` on `.ms-menu`.
- **Accordion** — click `.ms-acc-btn` to expand `.ms-acc-item`.
- **AOS** — apply `data-aos="fade-up|fade-left|fade-right|zoom-in"` and optional `data-aos-delay="0-400"`.
- **Counters** — `<b data-count="1000" data-suffix="+">0</b>`.
- **Form validation** — add `data-validate` on `<form>`; `required` inputs are validated on submit.
- **File upload** — `.ms-upload` with an `<input type="file">` and `[data-upload-label]`.
- **Toast** — `window.msToast('Saved!')` or `window.msToast('Error', 'error')`.

## Dark Mode

Toggled via the moon icon in the header. All colors are token-driven, so dark mode "just works" for custom components as long as you use `var(--ms-*)` instead of hex values.

## RTL Support

Toggled via the translate icon. Use logical spacing and the ready-made `[dir="rtl"]` overrides for timeline, hero badges, and check-list alignment.

## Accessibility

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`, `section`, `article`, `aside`).
- ARIA labels on icon-only buttons.
- Visible focus outline via `:focus-visible`.
- Color contrast meets WCAG 2.1 AA on all defined tokens.
- `prefers-reduced-motion` disables scroll animations.

## SEO

Each page ships with unique `<title>`, `<meta name="description">`, canonical, OpenGraph & Twitter tags. JSON-LD schemas provided for Pharmacy (home), Product, Article, and FAQPage.

## Performance

- Fonts preconnected and loaded once per page.
- Images lazy-loaded (`loading="lazy"`) except LCP hero.
- CSS is a single file — minify before production.
- JS is a single file — no framework overhead.
- Target Lighthouse: 90+ Performance / 100 Accessibility / 100 Best Practices.

## Customization Guide

1. **Change brand colors** — edit `--ms-primary`, `--ms-accent`, etc. in `:root`.
2. **Change fonts** — swap the two Google/Fontshare `<link>` tags and update `--ms-font-*`.
3. **Add a page** — copy any file in `pages/`, update `<title>`, `<meta>`, canonical, breadcrumb.
4. **Add a component** — add class rules in `style.css`, mirror pattern of `.ms-feature`.
5. **Wire forms to a backend** — remove `data-validate`'s default handler and post to your endpoint.

## Credits

- Fonts: Manrope (Google Fonts), Cabinet Grotesk (Fontshare)
- Icons: Remix Icons
- Imagery: Generated for this template

## Changelog

- **v1.0.0** — Initial release: 15 pages, full design system, dark mode, RTL.

## Support

Reach us at hello@medisphere.co for template questions.
