# Matthew Enyina — Portfolio

Canonical existing website source repository: Enyina/newPortfolio
Published domain: https://enyina.netlify.app/

## Development

- Node 20, then npm ci
- npm start — local development
- node --test tests/*.test.mjs — published-only content tests
- CI=true npm run build — production build

## Architecture

src/portfolio/content.mjs contains only publicly published content, current experience, original portfolio projects, configuration and safe selectors.
src/portfolio/DynamicPortfolio.jsx is the modern responsive public site and /work/:slug detail page.
src/portfolio/assets.js reuses original images.
The original React component files remain for comparison and rollback.

The /work/:slug route reloads through the Netlify SPA fallback in public/_redirects.

## Important limitations

The new interface is committed to a development branch, NOT deployed. The current stack is React/Create React App, not Vinext/D1/R2. A secure admin CMS is NOT implemented yet; editing currently requires updating the public published snapshot. Do not put drafts or auth secrets in frontend code. See docs/PORTFOLIO_REBUILD.md.
