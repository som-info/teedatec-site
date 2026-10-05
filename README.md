# Teedatec — Amir Namvar · Portfolio

Personal portfolio website of **Amir Namvar**, freelance full-stack web developer (brand: **Teedatec**).
Live at **https://teedatec.com** (GitHub Pages + custom domain).

Pure **HTML, CSS and vanilla JavaScript** — no frameworks, no build step, no dependencies.

## Features

- Sections: Hero (with portrait), About, Experience (timeline), Learning & Growth, Skills, Services, Projects (6 projects), How I Work, Contact, Footer
- Dark / light theme toggle (respects `prefers-color-scheme`, remembers choice, no flash on load)
- Smooth scrolling, sticky header, active-section highlighting, reveal-on-scroll animations
- Responsive mobile navigation (hamburger, closes on link click / Escape)
- Accessible: semantic HTML, skip link, focus styles, ARIA labels, `prefers-reduced-motion` support
- SEO: meta description, canonical URL, Open Graph + Twitter cards, JSON-LD (`Person` with contact points, `WebSite`, `ItemList` of projects), `sitemap.xml`, `robots.txt`
- Optimized images: profile photo and project screenshots as WebP with JPEG fallback, responsive `srcset`, lazy-loaded below the fold, explicit dimensions
- Contact channels with inline SVG icons: email, WhatsApp, Telegram and GitHub (Contact section and footer)
- Contact form (Formspree) with client-side validation and a `mailto:` fallback
- Custom `404.html`

## Project structure

```
.
├── index.html          # main page
├── 404.html            # GitHub Pages "not found" page
├── favicon.svg         # "AN" monogram
├── css/styles.css
├── js/main.js
├── assets/img/
│   ├── og-image.png            # 1200×630 social preview
│   ├── apple-touch-icon.png    # 180×180
│   ├── amir-namvar-{300,600}.{webp,jpg}  # profile photo (square)
│   └── projects/*.webp|*.jpg   # project screenshots (800×500)
├── CNAME               # teedatec.com
├── .nojekyll           # serve files as-is (no Jekyll processing)
├── robots.txt
└── sitemap.xml
```

## Run locally

```bash
python3 -m http.server 8000
# or: npx serve .
```

Open <http://localhost:8000>.

## ⚠️ Placeholders to fill before / after going live

| What | Where | How |
|------|-------|-----|
| **Formspree form ID** | `index.html` → `<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID">` | Create a free form at [formspree.io](https://formspree.io), set its email to `infosomamir@gmail.com`, then replace `YOUR_FORM_ID`. Until replaced, the form opens the visitor's email app (mailto fallback). |
| **Upwork profile link** | `index.html` → Contact section, `<li hidden data-placeholder="upwork">` | Replace `YOUR_UPWORK_PROFILE` with your real URL and remove the `hidden` attribute. |
| Lumen live demo | Projects section | Points to `https://som-info.github.io/lumen-landing` — make sure GitHub Pages is enabled for that repo. |

All TODOs are marked with `TODO(owner)` in the source (`grep -rn "TODO(owner)" .`).

## Deploy on GitHub Pages

1. Create a repository (e.g. `som-info/teedatec-site`, or `som-info/som-info.github.io`) and push these files to the **root** of the default branch (`main`):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/som-info/teedatec-site.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment** → Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → **Save**.
3. Still in **Settings → Pages**, under **Custom domain** enter `teedatec.com` and save (the `CNAME` file in this repo already contains it).
4. Configure DNS at your domain registrar (below). After DNS propagates and GitHub issues the certificate, tick **Enforce HTTPS**.
5. *(Recommended)* Verify the domain for your account/organization: **GitHub Settings → Pages → Add a domain** (adds a TXT record) to prevent domain takeover.

### DNS records (apex domain `teedatec.com`)

At your DNS provider, remove any conflicting existing `A`/`AAAA`/`CNAME` records for `@` and `www`, then add:

| Type  | Name / Host | Value                |
|-------|-------------|----------------------|
| A     | `@`         | `185.199.108.153`    |
| A     | `@`         | `185.199.109.153`    |
| A     | `@`         | `185.199.110.153`    |
| A     | `@`         | `185.199.111.153`    |
| CNAME | `www`       | `som-info.github.io` |

Optional IPv6 (AAAA, `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

With both the apex and `www` configured, GitHub Pages automatically redirects `www.teedatec.com` → `teedatec.com`.

Check propagation:

```bash
dig teedatec.com +noall +answer -t A
dig www.teedatec.com +noall +answer -t CNAME
```

DNS changes can take from a few minutes up to 24–48 hours. HTTPS certificates are issued automatically once DNS resolves correctly.

## Updating content

- Text: edit `index.html`.
- Colors / theme: CSS custom properties at the top of `css/styles.css`.
- New project: copy an `<article class="card project">` block in `index.html`, add an 800×500 screenshot to `assets/img/projects/` (WebP + JPEG) and add the project to the JSON-LD `ItemList` in `<head>`.
- Profile photo: replace `assets/img/amir-namvar-300.*` and `amir-namvar-600.*` (square, WebP + JPEG).
- Contact details (email, WhatsApp `https://wa.me/905556755787`, Telegram `https://t.me/+905556755787`) appear in the Contact section, the footer and the JSON-LD — update all three together.
- After major changes, update `<lastmod>` in `sitemap.xml`.

## License

© Amir Namvar / Teedatec. All rights reserved.
