# Portfolio engineering rules

Canonical global and cross-project engineering rules: https://github.com/Enyina/ai-engineering-config
Scope: this personal web-product portfolio. Do not apply employer-specific rules in a personal project or leak company information.

## Reverse Engineering First
Inspect existing source, live product behavior and proven design/CMS patterns; compare choices with evidence and independently implement appropriate behavior. Verify assumptions and measure results. Preserve project identity and original assets when useful.

## Verified source
Enyina/newPortfolio powers enyina.netlify.app per owner. This repository is React/Create React App, not Vinext/D1/R2. Build on it rather than a replacement repository.

## Public data and design
Only published, visible content ships to anonymous browser clients. Never embed draft records, API keys, user secrets or private media in the frontend bundle. Keep mobile layouts, semantic HTML, keyboard operation, focus visibility and reduced-motion behavior.

## Admin security
All reads/writes of private content require verified server identity with an explicit email allowlist, including enyina3848@gmail.com. Never rely on a client-side email string or localStorage to grant access. Confirm supported OAuth/OIDC provider; ChatGPT sign-in cannot be assumed available. Use CSRF protection, validation, idempotency, media upload checks, draft/preview/publish separation, logs and backup.

## Delivery
Use branch and PR, run published-content tests and production build, compare responsive views, verify Netlify staging and original contact flow before production release. Document durable lessons and improve shared rules in ai-engineering-config when access permits.
