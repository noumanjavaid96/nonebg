# East Bridge Global — ebgofficial.com

Redesigned marketing site for **East Bridge Global (EBG)** — connecting founders,
agencies, and capital from Asia, MENA & APAC to US, EU, and global markets.

Pure static site: **no build step, no frameworks, no dependencies.** Deploy the
repository root to any static host and it works.

## Structure

```
index.html            The whole site (single page, six sections)
404.html              Styled not-found page
assets/css/styles.css Design system + all styling
assets/js/main.js     Nav, mobile menu, scroll reveals, contact form
assets/img/           Favicon (SVG) + social share image (og.png)
robots.txt, sitemap.xml
```

## Design

- **Identity:** ink navy × warm gold × ivory; bridge-arc logo mark drawn in SVG.
- **Type:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif) +
  [Manrope](https://fonts.google.com/specimen/Manrope) (body), loaded from Google
  Fonts with system fallbacks.
- **Motion:** hero arc draw-in, scroll reveals, animated market routes, marquee —
  all disabled automatically for `prefers-reduced-motion`.
- Fully responsive (tested 390px–1440px), semantic HTML, skip link, focus styles.

## Deploy

Any static host works:

- **GitHub Pages:** Settings → Pages → deploy from branch, root folder.
- **Netlify / Vercel / Cloudflare Pages:** point at the repo, no build command,
  output directory = repository root.

Then point the `ebgofficial.com` DNS at the host.

## Before going live — review these

The live site could not be crawled from the build environment, so a few details
are best-guess placeholders. Search and replace as needed:

1. **Contact email** — currently `hello@ebgofficial.com` (in `index.html` and
   `assets/js/main.js`). Confirm the mailbox exists or swap it.
2. **Contact form** — currently opens the visitor's email app pre-filled
   (mailto). For a real inbox pipeline, replace the submit handler in
   `assets/js/main.js` with [Formspree](https://formspree.io), Netlify Forms, or
   your own endpoint.
3. **Copy for the four ecosystem pillars** (Ventures, Academy, Alliance, Growth)
   and the **founder bio** — written from EBG's public positioning; adjust
   wording to match the official program descriptions.
4. **Founder photo** — the founder card uses a monogram placeholder; drop in a
   portrait if desired.
5. **Social links** — none are included yet; add verified profiles to the footer.
