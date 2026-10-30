import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {site, experience, projects, services, skills} from '../src/portfolio/content.mjs';
import {aiLab, labScenarios, aiCaseEvidence} from '../src/portfolio/aiProof.mjs';

const publicCopy = [
  ...Object.values(site),
  ...experience.flatMap(job => [job.title, job.company, job.description, job.highlight || '']),
  ...projects.flatMap(p => [p.title, p.summary, p.context || '', p.contribution || '', p.outcome || '', p.lessons || '', p.evidenceNote || '']),
  ...services.flatMap(s => [s.title, s.detail]),
  ...skills.map(s => s.title),
  aiLab.eyebrow, aiLab.title, aiLab.intro, aiLab.disclaimer,
  ...aiLab.signals.flatMap(s => [s.label, s.note]),
  ...labScenarios.flatMap(s => [s.label, s.question, s.verdict, s.outcome, ...s.stages.flatMap(step => [step.name, step.detail])]),
  ...aiCaseEvidence.flatMap(s => [s.label, s.finding, s.level, s.detail]),
].filter(value => typeof value === 'string');

test('public copy does not expose internal audit terminology', () => {
  for (const line of publicCopy) {
    assert.doesNotMatch(line, /owner.reported|owner.described|independently verified|according to (?:my|the) r[eé]sum[eé]|self.reported|human_review_required|promotion_authorized|candidate revision|claim provenance/i);
  }
});

test('portfolio speaks directly and keeps the personal AI project honest', () => {
  assert.match(site.about, /I (?:work|spend|want)/);
  const ai = projects.find(p => p.slug === 'evidence-driven-ai-workflows');
  assert.ok(ai);
  assert.match(ai.context, /I wanted/);
  assert.match(ai.contribution, /Built/);
  assert.match(ai.outcome, /left it out/i);
  assert.match(aiLab.disclaimer, /not a live AI demo/);
});

test('human copy rules are documented as lasting project standards', () => {
  const rules = readFileSync(new URL('../AGENTS.md', import.meta.url), 'utf8');
  assert.match(rules, /Public writing must sound human/);
  assert.match(rules, /what I built, why, what was hard/);
  const plan = readFileSync(new URL('../docs/PORTFOLIO-WORLD-CLASS-QUALITY-PLAN.md', import.meta.url), 'utf8');
  assert.match(plan, /WCAG 2\.2 AA/);
  assert.match(plan, /Core Web Vitals/i);
  assert.match(plan, /visual proof/i);
});
