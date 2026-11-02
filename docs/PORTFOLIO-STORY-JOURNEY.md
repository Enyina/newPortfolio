# A portfolio you can explore

**Updated:** 2 November 2026 · **Scope:** the personal portfolio only.

I used two *candidate* storytelling approaches from the personal AI engineering toolbox to design the portfolio:
- **Five-beat storytelling**: goal and obstacle → actual work → complication → decision/result → earned takeaway. This is an adaptation of a short-video framework, not proof that it increases recruiting responses.
- **Observe → Customize → Edge**: use tested editorial/portfolio interaction patterns without copying another site. The original element is the owner's real engineering work: building AI evaluation tools, rejecting a misleading score, and handling failure-prone product flows.

## A visitor's journey

| Click | What they see | Why it matters |
| --- | --- | --- |
| Homepage | Name, type of work and three distinct story entry points | The visitor chooses by interest, not by scrolling through a wall of cards |
| AI project | The real problem of unreliable AI suggestions, what was built, a real trial that raised a score but damaged an answer, what remains unfinished | Engineering judgment matters more than AI hype |
| Payment project | A timeout creates uncertainty, the ownership of the result matters, guarded retries/recovery are better than hoping | Shows concrete backend decision-making without publishing internal systems |
| Moatt project | Independent product editor, garment-first default and public prototype link | Gives visitors a genuine product they can inspect and a candid description of its limits |
| Any project chapter | Problem → work → harder detail → current result → lesson | The narrative advances without inventing incidents or metrics |
| Project end | Next related project, résumé and contact | No dead end; user can continue at their own pace |
| Résumé web view | Professional introduction, relevant career history, personal work, tools, education, contact | An easy-to-scan career progression with optional case-study links |
| Résumé printed view | Ordinary chronological résumé, no sticky navigation, decorative prompts or animations | Appropriate for applications and ATS readers |

## What stays private

The browser bundle may include public-safe observations but never credentials, authorization tokens, private Codex transcripts, unapproved AI policy contents, workplace code, patient/customer information, internal payment or order identifiers, internal endpoint URLs or proprietary app screenshots. Company names and high-level work descriptions may remain as already published on the résumé. Figures that cannot be substantiated should not be added to build excitement.

The AI walkthrough is fictional. The historical 15-case comparison is a real, documented local experiment; its phrase-based scoring was inconclusive. Do not pass fictional workflow steps off as observed behavior. No claim of an autonomous, production-deployed self-improving system.

## Interactions demonstrate frontend skill

- Keyboard-operable HTML links and buttons, including active chapter state and reading progress.
- Animated scenario changes and visual progress in the experiment, with a static alternative under reduced-motion.
- A lightweight CSS hover response and conditional scroll-entry motion for chapter text.
- No third-party tracking, animation SDK, camera, autoplay video or extra permission needed to tell the story.
- Content remains in the document flow; animations never hide the only copy of any information.

**Acceptance:** Run `node --test tests/*.test.mjs`, React tests and a production build. At 320px, 375px, 768px and desktop widths, test the three journey links, chapter anchors/progress, scenario controls, case-study next routes, résumé navigation and print, keyboard focus, reduced-motion preference and contact. Measure loading and contrast in an actual browser, not by inspecting CSS alone. Confirm the exact deployed commit and its release marker before calling this version live.

This is the source-backed implementation plan, not a usability study. Collect real visitor feedback before claiming that the journey performs better.
