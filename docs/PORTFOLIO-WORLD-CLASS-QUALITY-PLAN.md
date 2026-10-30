# Portfolio quality review — the road to a credible 10/10

**Review date:** 30 October 2026  
**Scope:** `Enyina/newPortfolio` only (personal website). No changes to any employer-owned code, private AI repo, MCP service or deployment.  
**Current provisional rating:** **6.8/10**, based on reviewed source and current content. **Not** a Lighthouse score, user-study score, live visual audit or verified production grade.

## The actual problem

The engineering work is stronger than the way the portfolio shows it. Visitors can read claims and explore an AI walkthrough, but there are few genuine project images or artifacts. Some site copy sounded like an audit report instead of the person who built the software. Several interface labels were also too small. Live performance, browser accessibility and deployment state have not been verified.

The goal is **not** to clone award-winning portfolios, fill the site with effects, or claim an imaginary 10× result. The goal is for a stranger to understand the engineering contribution in seconds, enjoy exploring it, and trust the proof.

## Scorecard (editorial judgment, not measured audit)

| Area | Provisional / 10 | What blocks an excellent rating |
| --- | ---: | --- |
| Engineering credibility | 8.5 | Need approved evidence artifacts and verifiable public outcomes |
| Personal voice | 7 | Remove audit-like phrasing and repeatedly check how copy sounds aloud |
| Distinctive visual design | 7 | Consistent art direction needs genuine product imagery and a real visual QA pass |
| Project storytelling | 5.5 | Too many text-heavy entries; needs problem/decision/visual/result |
| Interaction and information architecture | 7 | Need user observation, keyboard/screen-reader acceptance and clearer project discovery |
| Accessibility readiness | 6 | No complete WCAG 2.2 AA audit or measured contrast/focus behavior |
| Performance and release confidence | 6 | No verified LCP/INP/CLS, mobile load data or verified Netlify deployed commit |

These are **prioritization scores**, not a scientific composite or proof of compliance.

## Reference patterns reverse engineered — never copy source, artwork or layouts

- **Strong editorial clarity:** Selected Awwwards portfolios use immediately identifiable authorship, visually distinct projects and restrained typography. Adapt the idea of a recognizable visual signature, not any site's exact design.
- **Real work above decoration:** Strong case studies on Foleo use actual interface work to make a project's contribution tangible. Use *authorized original* screenshots from independent personal projects, not a concept image passed off as production evidence.
- **Process and decision-making:** Nielsen Norman Group's UX portfolio research emphasizes showing the problem, one's role, constraints, decisions and real outcomes. Our proof should show the trade-offs without turning the page into an internal incident report.
- **Usability before novelty:** WCAG 2.2 AA defines accessibility targets; Google's Web Vitals define real-world loading, input and layout-stability targets. Do not call the product compliant until it has actually been measured.

Public references:
- https://www.nngroup.com/articles/ux-design-portfolios/
- https://www.w3.org/TR/WCAG22/
- https://developers.google.com/search/docs/appearance/core-web-vitals
- https://www.awwwards.com/creative-web-portfolios.html
- https://www.foleo.design/

## Prioritized implementation roadmap

### P0 — Clear writing and solid fundamentals (partially implemented)

- [x] Rewrite visible experience/project copy to sound like a builder, not an evidence auditor.
- [x] Replace phrases like “Owner-reported in résumé” with specific plain-English descriptions.
- [x] Keep private AI claims accurate and avoid pretending a synthetic visualization is a live product.
- [x] Increase microscopic labels, input font sizes, tap targets and case-study reading sizes through responsive CSS.
- [ ] Run the real build and all unit/integration tests on the latest commit; repair failures.
- [ ] Use Chrome/Safari and a phone to inspect navigation, layouts, contact and résumé routes at 320, 375, 768 and 1440 CSS px. Fix overflow, focus traps and layout changes.
- [ ] Inspect **all** public-facing visible strings for stiff, generic copy. Test understanding aloud with at least two people who have not seen the website.

**Done when:** Someone can explain what I do, see my strongest work and find my contact details after a 5-second scan; main tasks are reachable in two actions or fewer; the complete build/test suite passes.

### P1 — Show actual work, not just claims (highest remaining value)

- [ ] Add a proper lead visual for the private AI engineering case: create a **clearly labeled, original reconstruction** of an allowed evaluator comparison, plus real published outputs or charts that can be sanitized and independently checked. Do not reveal private source, prompts, keys, traces, GitHub repo URLs or employer details.
- [ ] Add an approved screenshot/video of Moatt's actual front/back garment editor, including a deliberately honest “current prototype” caption. Verify mobile/desktop rendering before publishing.
- [ ] For each employer case, use *only owner-authorized, independently redrawn, generic workflows* labeled “illustration.” No customer/patient content, real screenshots, company backend routes, sensitive architecture, operational metrics or credentials.
- [ ] Design a reusable visual case-study template: project thumbnail, exact role, context, one hard decision, demo/proof, result, limitation, next improvement.
- [ ] Add image descriptive alt text, responsive `srcset`/sizes where applicable, lazy-load non-hero media and reserve aspect ratio to prevent shifts.

**Done when:** The three strongest cases each have a legitimate visual proof artifact, the source/illustration nature is obvious, and no image implies functionality or confidential facts that are not verified.

### P2 — Hiring-manager and recruiter experience

- [ ] Make the project section scannable with a short role/impact summary and consistent proof links.
- [ ] Replace “More features” lists with two-minute, high-signal case studies: problem → decision → what I built → what happened → what I learned.
- [ ] Provide a short “Start here” path: strongest AI research, full-stack production work and a public personal product.
- [ ] Show practical availability, remote location and one-click email/resume access without intrusive forms.
- [ ] Conduct 5 brief unmoderated sessions: ask visitors what I build, which project impressed them, where they became confused and how they'd contact me.

**Done when:** At least 4 of 5 people find a relevant case and the contact path without help, and can correctly distinguish real work from illustrations. Results go in a private, non-sensitive review report.

### P3 — Accessibility, performance and release confidence

- [ ] Test all main routes, menu interactions, form labels, buttons, case-study controls, focus outlines, zoom at 200%, text spacing, contrast and reduced-motion behavior against **WCAG 2.2 AA**.
- [ ] Check keyboard-only and VoiceOver/NVDA screen-reader navigation; fix failures, not just automated warnings.
- [ ] Run Lighthouse/PageSpeed on mobile and desktop; investigate unused JS, CSS and fonts, image loading, form behavior and React bundles.
- [ ] Verify **real-user** Core Web Vitals at p75 if field data exists: LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1. If field data is unavailable, clearly label Lighthouse lab measurements as lab-only.
- [ ] Check `/release.json`, direct `/work/:slug`, `/resume`, deep-link refresh, SEO/social previews, 404 behavior and a successful user-authorized contact test.
- [ ] Confirm published Netlify commit equals the reviewed/tested commit before public sharing.
- [ ] Run a simple rollback/recovery drill against a known-good personal portfolio deployment without touching employer applications.

**Done when:** No known WCAG 2.2 AA failures on tested paths, all critical routes work, good Web Vitals are recorded where available and rollback and publication are verified.

### P4 — Distinctive polish only after proof and usability

- [ ] Refine project imagery, transitions, typography hierarchy and subtle hover/focus microinteractions based on mobile + desktop screenshot review.
- [ ] Add small supporting diagrams that teach something real, not decorative movement for its own sake.
- [ ] Consider lightweight filter/navigation only if real visitors struggle to find the right project.
- [ ] Consider tasteful optional motion with reduced-motion support and no layout shifts.
- [ ] Refuse fabricated reviews, imaginary client metrics, misleading AI demo claims and unauthorized workplace screenshots.

**Done when:** Visual refinement improves visitor understanding and completion, not just appearance.

## Quality gate before calling it “10/10”

For an **aspirational** 10/10, require all of the following with evidence:

1. Genuine visual proof in at least three priority case studies.
2. First-time readers can identify role, specialism and best work within five seconds.
3. Scannable, human-sounding writing verified by reviewers unfamiliar with the site.
4. Full WCAG 2.2 AA checks on primary routes and interactions.
5. Real-device mobile QA, keyboard access and screen-reader journey.
6. Lighthouse and real-user Core Web Vitals or clear measurement limitations.
7. Contact form, project links, résumé print and deep links verified on the deployed site.
8. No unsupported, private or inflated claims; source permission tracked.
9. Deliberately original art direction; no copied proprietary assets or designs.
10. Measured recruiter/visitor feedback and a safe, tested release/rollback process.

The score must be **recalculated after** this evidence is collected. A perfect score can never be established from source inspection alone.

## What can be automated now

```bash
node --test tests/*.test.mjs
CI=true npm test -- --watch=false --runInBand
CI=true npm run build
```

Automation checks code and content contracts only. It does not replace real-browser screenshots, a WCAG audit, real-user data or Netlify deploy verification.
