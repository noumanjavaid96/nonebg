# East Bridge Global — ebgofficial.com

Redesigned marketing site for **East Bridge Global (EBG)** — AI systems,
advisory, capital, and global market access for operators from Asia, MENA &
APAC building into US, EU, and global markets.

Pure static site: **no build step, no frameworks, no dependencies.** Deploy the
repository root to any static host and it works.

## Design — "The Blueprint"

Light-first and **color-blind-friendly by design** (built for a color-blind
founder):

- One chromatic axis — **cobalt blue** ink on warm **paper**, with a small
  **amber** secondary used only decoratively. Blue/orange survives all common
  color-vision deficiencies; there are no red/green distinctions anywhere.
- Meaning is never carried by color alone: links are underlined or arrowed,
  states change shape and weight, focus rings are thick and offset.
- High luminance contrast throughout (cobalt on paper ≈ 7:1, ink on paper ≈ 15:1).
- Identity: blueprint grid, a self-drawing suspension-bridge schematic in the
  hero, technical corner marks, a rotating "operator-led" stamp.
- Type: [Fraunces](https://fonts.google.com/specimen/Fraunces) display serif +
  [Manrope](https://fonts.google.com/specimen/Manrope), from Google Fonts with
  system fallbacks.
- All motion is disabled automatically under `prefers-reduced-motion`.

## Structure

```
index.html            The whole site (single page)
404.html              Styled not-found page
assets/css/styles.css Design system + all styling
assets/js/main.js     Nav, mobile menu, scroll reveals, console, contact form
assets/img/           Favicon (SVG), social image (og.png), founder photo slot
robots.txt, sitemap.xml
```

Sections: hero → partner network → Why Asia & MENA → founder + $1B mission →
ecosystem bento (AIRA OS, Academy, Capital & Fundraising, Build Studio,
Advisory, Growth, Ventures co-build, The Cost of It) → AIRA OS feature →
contact.

## Deploy

Any static host:

- **GitHub Pages:** Settings → Pages → deploy from branch, root folder.
- **Netlify / Vercel / Cloudflare Pages:** point at the repo, no build command,
  output directory = repository root.

Then point `ebgofficial.com` DNS at the host.

## Before going live — review these

1. **Founder photo** — drop the portrait at `assets/img/founder.jpg`
   (4:5 crop looks best). Until it exists, the card shows a monogram
   automatically.
2. **Contact email** — currently `hello@ebgofficial.com` (in `index.html` and
   `assets/js/main.js`). Confirm the mailbox or swap it.
3. **Contact form** — opens the visitor's email app pre-filled (mailto). For an
   inbox pipeline, replace the submit handler in `assets/js/main.js` with
   [Formspree](https://formspree.io), Netlify Forms, or your own endpoint.
4. **Links to verify** — founder LinkedIn
   (`linkedin.com/in/wajeehulhussain`) and The Cost of It YouTube channel
   (`youtube.com/@EastBridgeGlobal`) are best guesses; confirm both.
5. **Partner marquee** — currently Forbes, AWS, OpenAI, Coinbase,
   CoinMarketCap, Google Partner (taken from the previous site). Edit the list
   in `index.html` (`.network__track`, the names appear twice for the loop).
6. **Ecosystem card copy** — transcribed and tightened from the previous site's
   screenshots; give it a read for program-level accuracy.
