# Matthew Enyina — Portfolio

The source repository for the owner's Netlify portfolio: https://enyina.netlify.app/

## What visitors get

- A Figma Make-inspired dark editorial layout, using amber accents.
- A current career story based on the owner's 5 October 2026 resume.
- Five selected case studies with problem, contribution, outcome, lessons and honest status labels.
- An optional archive with six earlier projects and existing detail links.
- A public resume at \`/resume\`, printable or savable as PDF by the visitor. It intentionally omits a personal phone number.
- Email and Formspree message options.

**Important:** A GitHub commit and a passing build do not prove the production Netlify site has been updated. See the public version marker at \`/release.json\` and check Netlify's production deploy separately.

## Development

1. Install Node 20 or newer.
2. Run \`npm ci\`.
3. Run \`npm start\` for development.
4. Run \`node --test tests/*.test.mjs\` for content, privacy and route checks.
5. Run \`CI=true npm run build\` for a production build.

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

## Remaining acceptance checks

- Confirm Netlify production deployment and identify the commit/version served.
- Visit home, archived projects, direct detail links and \`/resume\` on phone and desktop.
- Verify a real contact-form delivery without sending unsolicited test messages.
- Check print or Save as PDF layout.
- Validate owner approval of employer claim phrasing and case-study media.
