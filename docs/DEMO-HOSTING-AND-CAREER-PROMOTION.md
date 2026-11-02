# Free demo hosting and career promotion rules

**Updated 2 November 2026. Personal repositories only.** This is a status report and decision record, not proof that any new URL is live.

## What deserves hosting

A static public demo needs an original or properly licensed design, no server secrets, no customer information, no required live payment integration, clear capabilities and limitations, positive/negative validation tests, accessible mobile controls, and proof that the **deployed** version works.

GitHub Pages is suitable for static files and compiled frontend bundles. It does **not** run Node.js APIs, MongoDB, socket servers or private authentication backends. Use project Pages URLs where available instead of buying a domain or inventing a custom hostname.

## This cycle's hosting candidate

**Fee Processing — static educational calculator.**

- Project: `Enyina/Fee-Processing`, draft PR #1.
- Public-safe isolated preview: `demo/index.html`, `demo/calc.js`, `demo/app.js`, `demo/styles.css` (no payment or account functionality).
- Tests: `node --test demo/calc.test.cjs`, including exact arithmetic, invalid inputs, rate limits and a source check for network calls / credentials.
- Deployment workflow: `.github/workflows/demo-pages.yml` validates on PR; after an approved merge to `main`, the build can publish via GitHub Pages if the repository has **Settings → Pages → Source: GitHub Actions** enabled.
- **Status:** Demo checks passed on its PR. No Pages deployment or working public URL verified; not eligible for a public résumé demo link yet.
- **If deployed:** check the GitHub Pages Actions job succeeded and open the URL returned by the deployment; verify form behavior on phone and desktop; then add it to the personal project portfolio as an **educational fee-calculation demo**, not a live processor.

## Intentionally not hosted now

- Flow-Wave-Web contains authentication and payment flows with environment-dependent APIs. A free public frontend should not be enabled until ownership, endpoints, fake test data, consent and auth safety have been reviewed.
- Real-time Chat needs a Node/Socket.IO server and room/auth protection; GitHub Pages alone would show a nonfunctional imitation.
- Shop@Kego/HiTours need backend services, test databases and checkout/booking safety. Do not expose these projects as live commerce services.
- Coursera-themed HTML mockup cannot be promoted as an original standalone product without checking rights and replacing unowned brand/content.
- Moatt already documents a GitHub Pages preview; verify the actual published revision and realistic use before upgrading its portfolio status.
- The private AI engineering system should **not** be deployed as a public server from its internal repository. The portfolio's synthetic explainer is an intentional, public-safe alternative.

## Career story decision

The résumé showcases the four evidenced employment roles with concrete technical contributions. Its personal-project area focuses on the AI engineering toolkit and Moatt; historical tutorial apps and draft PRs stay out of the résumé until they have real utility, verification and a reason for a recruiter to care.

A portfolio update is earned when an authorized **personal** project shows a meaningful improvement with working tests and, for a hosted demo, verified live behavior. Make its contribution and limits clear, use natural writing and preserve privacy. Never copy employer code or operational information into public code, screenshots or demos.

## Daily review checkpoint

The existing **Daily Portfolio Project Lab** now checks implemented improvements, test results, free hosting readiness and whether an honest résumé/portfolio update is justified. It should propose or implement only scoped personal changes and must report what is unfinished. It does not silently grant deployment permission, perform a company release or turn an untested prototype into a proven product.
