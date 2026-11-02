## November 2, 2026 — Career story and demo-housing progress

- Portfolio career timeline and résumé now lead with the full-stack scope, system reliability work and project contributions behind each of four published roles. The public copy does not claim employer revenue, new management responsibilities or unsupported percentages.
- Two independent personal products are emphasized in the résumé: the private AI research/evaluation toolkit and public Moatt prototype. Archived exercises are still findable on the portfolio site, but do not dilute the résumé.
- Desktop project browsing now keeps the project introduction visible; case studies keep their chapter navigation alongside the reading column. Small screens use normal flow, not stacked sticky panels.
- A standalone, no-backend **Fee Processing** demonstration was added to a review PR and passes its own demo checks. GitHub Pages hosting is staged but **not confirmed live**. Do not add a demonstration link or claim commercial payment capability until the actual static published site is verified.
- Next checks: portfolio React tests and production build, mobile scrolling and print, static calculator Pages source configuration, and public live URL smoke tests.
- Detailed hosting boundaries: [Demo hosting and career promotion](DEMO-HOSTING-AND-CAREER-PROMOTION.md).

# Project renewal lab

**Review date:** 2 November 2026. **Public-safe inventory only.** This file does not grant permission to access workplace software or publish private AI source. The rankings are **priorities for further work**, not verified product quality scores.

## How I decide what deserves a portfolio spot

I ask five questions, in order:

1. **Is it mine to change and show?** Personal repository with clear permission. Work for an employer stays descriptive unless publication is specifically approved.
2. **Does it solve a problem worth understanding?** What was difficult, and what decision did I make?
3. **Can somebody use it or review the behavior?** Demo, safe reproducible tests, source, or a clearly labeled reconstruction.
4. **Would I trust the core flow?** No glaring security holes, missing access controls, broken installs, or misleading status claims.
5. **Does it reveal a different strength?** Avoid featuring five interchangeable tutorial apps.

A green test alone does not qualify a project. A project isn't called *live* unless its actual public URL, functionality and deployed revision have been checked. No unsupported 10× claims, mock client endorsements, fake metrics or inflated job titles.

## Existing résumé and portfolio work

| Project | Source connection | Public presentation decision | Next gate |
| --- | --- | --- | --- |
| Personal AI engineering toolkit | Owner's separate private personal AI system | Keep featured as a personal engineering research project; do not link source or raw agent traces | Native agent approval/rollback experiment, documented safe demonstration |
| Moatt clothing studio | [Moatt](https://github.com/Enyina/moatt) | Keep featured; public source and a documented preview are available | Browser acceptability, garment/fabric realism, accessibility and a current verified screenshot |
| Shop@Kego | [original](https://github.com/Enyina/shop-kego), [client](https://github.com/Enyina/shopkego-client), [server](https://github.com/Enyina/shopKego-server) | Archive while rebuilding: legacy Node 16 and template client docs are not a current premium demo | A [draft startup fix](https://github.com/Enyina/shop-kego/pull/1) now checks environment loading and port selection; then reproduce checkout, authentication and recovery end-to-end before promotion |
| HiTours | [HiTours](https://github.com/Enyina/Hitours) | Archive: legacy dependencies and runtime declarations | Modernize in an isolated branch, remove insecure defaults, test booking + failure paths |
| Social Media App | [original](https://github.com/Enyina/social__media-app), [client](https://github.com/Enyina/social-media-client), [server](https://github.com/Enyina/social-media-server) | Archive; relationship between versions needs verification | Account/access safety, create/read post flows, media handling and a screenshot |
| Messaging App | [original](https://github.com/Enyina/Messager__App) | Archive; keep distinct from standalone Socket.IO chat exercise | Verify actual functionality and repair accessible conversations before promotion |
| Inventory App | [Inventory App](https://github.com/Enyina/Inventory-App) | Archive until behavior and persistence are demonstrated | Basic item lifecycle, permissions, empty/error UI and tests |
| Video Sharing App | [Video Sharing App](https://github.com/Enyina/Video__sharing-App) | Archive until media flow and rights are reviewed | Safe uploads, access, playback and performance baseline |

**Employer work:** Famasi Africa, DabaObject, YEBOX and Howmies remain résumé experience and public-safe high-level case studies only. Do not search, clone, edit, test or reuse employer repositories as part of this personal-project program.

## Additional public personal candidates worth testing

| Candidate | Why it could be useful | Evidence from current repo | Current selection |
| --- | --- | --- | --- |
| [Real-time room chat](https://github.com/Enyina/REAL-TIME-CHAT-APP-) | Live-room product behavior, safe messages, recovery and frontend interaction | Found unsafe HTML insertion, global disconnect notification and no tests in original source; [draft safety fix](https://github.com/Enyina/REAL-TIME-CHAT-APP-/pull/1) | **Improve next**; not ready for feature until PR is reviewed, CI passes, browser journey works, and the missing authentication/room access is addressed |
| [Fee Processing](https://github.com/Enyina/Fee-Processing) | Precise backend reasoning and testable calculation tradeoffs | Found synchronous request wrapper error, unsupported-currency fallthrough and missing payload validation; [draft API fix](https://github.com/Enyina/Fee-Processing/pull/1) | **Improve next**; do not promote as payment infrastructure until exact money math, configuration storage and auth are corrected |
| [Flow-Wave-Web](https://github.com/Enyina/Flow-Wave-Web) | Could show a newer web app and product thinking | React/Zustand/React Query source exists; README is still Builder.io boilerplate | Inspect user journeys and ownership/dependencies before ranking |
| [CryptoScore](https://github.com/Enyina/cryptscore) | May show more ambitious NestJS backend work | NestJS, tests and authentication dependencies exist; README is a default Nest template | Evaluate feature scope and sensitive data handling; do not infer product maturity from dependencies |
| [Foodpal](https://github.com/Enyina/foodpal) | Potential consumer product and modern UI | Next.js starter present; README still scaffold text | Inspect the actual app first—do not promote a starter |
| [Todo Nest project](https://github.com/Enyina/Todo_Nest_project) | Clean backend testing demonstration | NestJS MongoDB Todo API has documentation and Jest setup | Test auth and safe input boundaries; likely a technical exercise rather than a headline product |
| [WishMe](https://github.com/Enyina/wishMe-frontend) | Possibly a personal gifting/wishlist app | Frontend React starter and separately named wishlist backend exist, but relationship is unconfirmed | Confirm integration and user flow before evaluation |

Other public repositories—including Node/JWT learning exercises, clones, and standalone UI samples—remain discoverable for skill demonstrations, but do not earn automatic portfolio placement. Private/ambiguous repositories are **not audited or classified as personal** from their names alone.

## Daily review cycle

1. Re-read this shortlist, each candidate's latest public-safe changes and any open review PRs. Avoid reopening identical old issues every day.
2. Pick the next project with the greatest *real* improvement opportunity; prefer fixing a broken core user journey or security boundary over decorative README changes.
3. Investigate actual code, compare relevant alternatives, choose one bounded task, define positive/negative/recovery tests.
4. Implement only in a clearly personal repository on a review branch; record what was actually tested and what is still unknown.
5. Do not merge, deploy, or update the public portfolio case as a finished result until checked, approved evidence exists.
6. Promote only a **distinctive** project: one product demo, one strong backend system, one interesting developer tool, rather than redundant versions of the same tutorial.

### Current high-signal portfolio mix

- **AI engineering:** personal AI toolkit (featured, with limited safe evidence).
- **Product design/frontend:** Moatt (featured, work-in-progress).
- **Production teamwork:** high-level employer descriptions only, no internal implementation or private screenshots.
- **Next candidate:** safer real-time chat, if authentic access/messaging/browser evidence becomes available; fee-calculation exercise as a backend case if monetary correctness and testing become credible.

The daily review automation can identify and propose improvements. It does not imply that a GitHub Action has passed, a PR is merged or a deployment went live.
