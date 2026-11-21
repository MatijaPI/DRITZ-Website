# Deployment: push to GitHub → site updated

The site is built by GitHub Actions and published to GitHub Pages with the custom domain **dritz.si**.

## One-time setup (required before the first deploy of this version)

The old site was published with "Deploy from a branch" (the HTML files in the repository root). The new site
has to be **built**, so Pages must use GitHub Actions instead:

1. GitHub → repository **MatijaPI/DRITZ-Website** → **Settings → Pages**.
2. **Build and deployment → Source:** choose **GitHub Actions** (instead of "Deploy from a branch").
3. **Custom domain:** keep `dritz.si` (the build also ships `CNAME`). Keep **Enforce HTTPS** on.
4. (Optional) **Settings → Secrets and variables → Actions → Variables** — add non-secret settings:
   | Variable                                                                   | Purpose                                                                |
   | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
   | `GOOGLE_SITE_VERIFICATION`                                                 | Search Console HTML-tag token (only if you verify that way)            |
   | `FORM_ENDPOINT`                                                            | e.g. a Formspree endpoint; empty = form opens the visitor's e-mail app |
   | `ANALYTICS_PROVIDER`, `ANALYTICS_DOMAIN` / `ANALYTICS_SRC`, `ANALYTICS_ID` | optional cookieless analytics (Plausible/Umami)                        |

> ⚠️ If you merge to `main` **without** switching the source, GitHub Pages would try to publish the repository
> root, which no longer contains `index.html` → the site would show a 404 until you switch. Switch first, then
> merge. (Switching first is harmless: the current live site stays up until the workflow publishes the new build.)

## Every deploy

```sh
git push origin redesign          # push the branch
# open a Pull Request redesign → main on GitHub; CI (ci.yml) builds and checks it
# merge the PR → deploy.yml runs: lint, type-check, i18n check, build, publish
```

Watch progress under **Actions → Deploy to GitHub Pages**. A run takes about 1–2 minutes. When it is green,
https://dritz.si shows the new version (GitHub's CDN may cache HTML for up to 10 minutes).

You can also deploy manually: **Actions → Deploy to GitHub Pages → Run workflow**.

## Local commands

| Command           | What it does                                                          |
| ----------------- | --------------------------------------------------------------------- |
| `npm ci`          | install exact dependency versions (Node ≥ 22.23, Node 24 recommended) |
| `npm run dev`     | dev server at http://localhost:4321                                   |
| `npm run build`   | translation check + production build into `dist/`                     |
| `npm run preview` | serve the built `dist/` at http://localhost:4321                      |
| `npm run lint`    | ESLint + Prettier check                                               |
| `npm run check`   | Astro/TypeScript type check                                           |

## Rollback

GitHub → **Actions** → open the last good "Deploy to GitHub Pages" run → **Re-run all jobs**; or revert the merge
commit on `main` (`git revert -m 1 <merge-sha>` and push).

## DNS (unchanged)

Apex `dritz.si` → GitHub Pages A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
`185.199.111.153` (and AAAA `2606:50c0:8000::153` … `8003::153` if you want IPv6); `www` CNAME →
`matijapi.github.io`. Verify current values in the GitHub Pages documentation before changing anything.

## Security headers

GitHub Pages does not allow custom HTTP headers. The site therefore ships:

- `Content-Security-Policy` as a `<meta>` tag with SHA-256 hashes for every inline script (Astro `security.csp`,
  configured in `astro.config.mjs`): `default-src 'self'`, no inline script without a hash, `object-src 'none'`,
  `base-uri 'self'`, `form-action 'self' https: mailto:` (no `upgrade-insecure-requests`: GitHub Pages already forces HTTPS, and Safari would apply it to `http://localhost` previews and block all CSS/JS).
- `<meta name="referrer" content="strict-origin-when-cross-origin">`.
- HTTPS enforced by GitHub Pages.

If the site ever moves to a host that supports headers (Netlify, Cloudflare Pages, Vercel), add:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY            (or CSP frame-ancestors 'none')
Permissions-Policy: camera=(), microphone=(), geolocation=()
Cache-Control: public, max-age=31536000, immutable   (for /_astro/*)
```
