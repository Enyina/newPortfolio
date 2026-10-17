# Portfolio Rebuild — work plan and verified state

Canonical repository: Enyina/newPortfolio. User confirmed it powers enyina.netlify.app.
Delivery branch: main (direct GitHub commits authorized by owner 17 October 2026). Historical rebuild branch: feat/dynamic-portfolio-rebuild.
The mistaken earlier implementation in Enyina/my-portfolio should not be merged or deployed.

## 17 October 2026 — latest implementation checkpoint

- Source design inspected from owner's Figma Make project \`ZAv7iF1KN3E839Z5ZDASDy\`; active public component is \`src/portfolio/FigmaPortfolio.jsx\`.
- Resume basis: owner's October 5, 2026 targeted CV. Four roles are shown with precise dates. Experience figures are owner-reported, not independently measured.
- Five featured case studies, six earlier archived projects, original slugs preserved. Employer stories contain general public-safe descriptions only.
- \`/resume\` is a privacy-conscious HTML CV with a real print / Save as PDF action, not a stored downloadable PDF.
- Email link and original Formspree form are both present in current React code. Delivery is not yet smoke-tested.
- Section order/visibility configuration now determines which sections render.
- Full GitHub Actions unit + build checks passed on this iteration; no completed browser acceptance check or independently confirmed Netlify live release.
- See \`docs/CAREER_EVIDENCE_LEDGER.md\` for what was checked and what still needs approval.

## Implemented
- New accessible, responsive portfolio experience based on current full-stack product engineering.
- The earlier project references are preserved in an archive, and the original Formspree form has been restored in the active Figma-inspired page.
- Public section ordering/visibility and published projects, including detailed /work/:slug pages.
- Unit checks for hidden and draft filtering, routing, duplicate identifiers and safe external links.
- GitHub Action for tests and production compilation on main, with a public release marker in `public/release.json`.

## Not yet complete
- Actual CMS/backend/database: current content is a PUBLIC snapshot in code.
- Server-verified admin login, CRUD, previews, drafts, media and resume uploads.
- Figma Make reference obtained and implemented as a dark/amber visual baseline; real-browser screenshot comparison still pending.
- Netlify deploy preview smoke tests and production acceptance.

## Next milestones
1. GitHub Actions tests and production build passed on main; independently verify the Netlify production deploy SHA and public `release.json` marker, inspect desktop/mobile and form submission.
2. Choose durable backend that suits current Netlify deployment; make schema/versioned migration and backup strategy.
3. Implement OIDC-verified editor sign-in with server-side allowlist (requested email enyina3848@gmail.com). Do not assume ChatGPT sign-in is available as OAuth.
4. Add private draft/published records and safe publish transactions, conflict handling, audit logs and validated media uploads.
5. Build structured /admin forms for content, layout, projects, CV/resume, media, preview/publish.
6. Improve and visually validate desktop and mobile; release with rollback.

## Security
No client-only admin auth, no secrets in repo, no drafts in browser JS, no production mutations without backup and confirmation of backend deployment configuration. Validate form/accessibility and performance on a deploy preview before changing main.

## Inputs needed for full planned CMS
- Direct Figma/Builder desktop and mobile source frames for exact visual matching. There was an earlier Figma invitation named 'Enyina Matthew personal portfol', but no confirmed direct frame URLs in this repository.
- Netlify project owner access to verify production deploy controls and add server-only environment variables. Never put credentials in GitHub files or chat.
- Data/auth/storage provider. Netlify Functions plus Supabase (PostgreSQL, verified login, Storage) is a low-complexity default for keeping this Netlify URL; Cloudflare D1/R2 would need a separate worker/deployment integration.
- Sign in with ChatGPT for third-party hosted websites requires an OpenAI-approved OAuth client (commercial partner limited trial as documented October 2026); otherwise use supported Google OAuth with strict server-side owner email allowlist. Do not present a fake ChatGPT auth button.
- The October 5 CV and the approved project selection have been used. New employer-specific metrics, production screenshots or media still require verification and permission.
