# Portfolio Rebuild — work plan and verified state

Canonical repository: Enyina/newPortfolio. User confirmed it powers enyina.netlify.app.
Delivery branch: main (direct GitHub commits authorized by owner 17 October 2026). Historical rebuild branch: feat/dynamic-portfolio-rebuild.
The mistaken earlier implementation in Enyina/my-portfolio should not be merged or deployed.

## Implemented
- New accessible, responsive portfolio experience based on current full-stack product engineering.
- Existing project imagery and Formspree form retained.
- Public section ordering/visibility and published projects, including detailed /work/:slug pages.
- Unit checks for hidden and draft filtering, routing, duplicate identifiers and safe external links.
- GitHub Action for tests and production compilation on main, with a public release marker in `public/release.json`.

## Not yet complete
- Actual CMS/backend/database: current content is a PUBLIC snapshot in code.
- Server-verified admin login, CRUD, previews, drafts, media and resume uploads.
- Visual comparisons with original Figma/Builder references (not available in repository).
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
- Updated CV, approved production case-study claims and media are needed for content acceptance, not core plumbing.
