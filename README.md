# Matthew Enyina — Portfolio

The source repository for the owner's Netlify portfolio: https://enyina.netlify.app/

## What visitors get

- An original dark editorial layout with warm amber accents, responsive typography and readable case studies.
- A current career story based on the owner's 5 October 2026 resume.
- Five selected case studies, led by the private AI engineering system, with evidence, outcomes and clear limitations.
- An interactive four-scenario AI engineering exhibit and a real Codex evaluation comparison; it does not connect to a live agent or expose private source.
- An optional archive with six earlier projects and existing detail links.
- A public resume at \`/resume\`, printable or savable as PDF by the visitor. It intentionally omits a personal phone number.
- Email and Formspree message options.

**Important:** A GitHub commit and a passing build do not prove the production Netlify site has been updated. See the public version marker at \`/release.json\` and check Netlify's production deploy separately.

## Development

1. Install Node 20 or newer.
2. Run \`npm ci\`.
3. Run \`npm start\` for development.
4. Run \`node --test tests/*.test.mjs\` for content, privacy and route checks.
5. Run \`CI=true npm test -- --watch=false --runInBand\` for the interactive React component tests.
6. Run \`CI=true npm run build\` for a production build.

## Canonical source and paths

- \`src/App.jsx\` loads the active \`src/portfolio/FigmaPortfolio.jsx\` layout. The older \`DynamicPortfolio.jsx\` is not active.
- \`src/portfolio/content.mjs\` contains **public only** profile, career, project, section and routing information.
- \`src/portfolio/figma-layout.css\` contains the responsive Figma-inspired appearance.
- \`src/portfolio/ResumePage.jsx\` and \`resume.css\` provide the public printable resume.
- \`public/_redirects\` provides direct-link refreshes on Netlify.
- \`docs/CAREER_EVIDENCE_LEDGER.md\` distinguishes owner-reported achievements from independently established evidence.
- \`AGENTS.md\` refers to the personal private engineering standards and this project's additional guardrails.

## Editing and security

The public information is currently versioned in Git, **not in a database or content-management dashboard**. Only approved, published information belongs in the client JavaScript bundle. There is no private admin route, draft store, authenticated editor, file-upload service or ChatGPT-login integration yet.

Do not build a browser-password shortcut or store service-role keys in source code. The planned admin requires verified server-side login and a connected storage provider.

## Quality improvement plan

The current editorial review and prioritized benchmark-based roadmap are in [the portfolio quality plan](docs/PORTFOLIO-WORLD-CLASS-QUALITY-PLAN.md). It distinguishes changes already in source from real-device, accessibility, performance and published-site checks still required. The aim is a credible, genuinely useful portfolio, not an invented perfect score.

## Remaining acceptance checks

- Confirm Netlify production deployment and identify the commit/version served.
- Visit home, archived projects, direct detail links and \`/resume\` on phone and desktop.
- Verify a real contact-form delivery without sending unsolicited test messages.
- Check print or Save as PDF layout.
- Validate owner approval of employer claim phrasing and case-study media.
