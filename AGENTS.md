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
Owner-approved delivery workflow (17 October 2026): commit directly to main to avoid manual PR merges. Preserve rollback history, run tests and production build on main, and verify Netlify production publication and the original contact flow. Do not assume that a GitHub push proves the production deploy succeeded. Document durable lessons and improve shared rules in ai-engineering-config when access permits.


## Current deployment verification
- Main includes the modern React experience; GitHub Actions runs on main.
- `public/release.json` is the production smoke-test marker. If the published site still looks old, check the file at `https://enyina.netlify.app/release.json`. If absent, verify Netlify's production branch, auto-publish/deploy lock and the latest production deploy SHA.
- Database and auth must be server-controlled; never expose drafts or service-role keys to public React bundles.

## Research-backed design and engineering choices

For significant portfolio changes, compare genuinely different ways to help visitors understand the work and reach out. Consider proof-first, editorial and balanced layouts when appropriate, not as mandatory templates. Use relevant public UX research, platform standards, accessibility guidance and actual site evidence. Maintain the portfolio's recognizable visual identity and do not blindly copy other sites, assets, or employers' work.

The personal `Enyina/ai-engineering-config` repository contains a source-backed read-only advisor. When it is available, compare options using `bin/ai-intelligence suggest --workspace <this-repository> --project portfolio --feature admin-dashboard --domain design --task "<specific task>"`, or use `--domain engineering` for implementation tradeoffs. The link to private shared rules is not automatically loaded by every agent; the tool must be accessible.

Select solutions based on real visitor needs and test responsive display, keyboard behavior, clear content, security boundaries, and the full contact journey. Record evidence before recommending reusable personal rules; do not silently alter the central rule system. Continue to honor the existing portfolio release workflow.

## Saving work and explaining updates

When an authorized change is complete, save it in a focused Git commit with a clear description. Do not leave completed work uncommitted. Keep unrelated work and private information out of the commit. Follow this project's existing delivery and approval requirements; do not assume committing gives permission to push or publish. If a higher-priority rule or direct instruction prevents a commit, explain that clearly.

For each meaningful change, update `RELEASE_NOTES.md` using **only everyday English that a person with no software background can understand**. Explain what changed, why it matters, and anything people still cannot use. Avoid technical language, implementation details, command names, source filenames, abbreviations and internal test names. Do not say a change is live or available until publication is verified. Keep technical checks in engineering reports, not release notes.
