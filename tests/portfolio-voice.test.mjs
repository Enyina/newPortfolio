import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {site, experience, projects, services, skills} from '../src/portfolio/content.mjs';
import {aiLab, labScenarios, aiCaseEvidence} from '../src/portfolio/aiProof.mjs';

const copy = [
  ...Object.values(site),
  ...experience.flatMap(x => [x.title,x.company,x.description,x.highlight||'']),
  ...projects.flatMap(x => [x.title,x.summary,x.context||'',x.contribution||'',x.outcome||'',x.lessons||'',x.evidenceNote||'']),
  ...services.flatMap(x => [x.title,x.detail]),
  ...skills.map(x => x.title),
  ...[aiLab.eyebrow,aiLab.title,aiLab.intro,aiLab.disclaimer],
  ...aiLab.signals.flatMap(x => [x.label,x.note]),
  ...labScenarios.flatMap(x => [x.label,x.question,x.verdict,x.outcome,...x.stages.flatMap(s => [s.name,s.detail])]),
  ...aiCaseEvidence.flatMap(x => [x.label,x.finding,x.level,x.detail]),
].filter(x => typeof x === 'string');

test('public copy never shows internal review or audit labels', () => {
  for (const line of copy) {
    assert.doesNotMatch(line,/owner.reported|owner.described|independently verified|according to (?:my|the) r[eé]sum[eé]|self.reported|human_review_required|promotion_authorized|claim provenance|synthetic.*evidence/i);
  }
});

test('the story stays personal and avoids unverified claims', () => {
  assert.match(site.about, /I’m a software engineer/);
  const ai = projects.find(x=>x.slug === 'evidence-driven-ai-workflows');
  assert.match(ai.context, /I started building/);
  assert.match(ai.contribution, /Built a rules system/);
  assert.match(ai.outcome, /still being tested/);
  assert.match(aiLab.disclaimer, /examples are fictional/i);
});

test('writing and quality expectations remain in project instructions', () => {
  const rules = readFileSync(new URL('../AGENTS.md',import.meta.url),'utf8');
  assert.match(rules,/Public writing must sound human/);
  const plan = readFileSync(new URL('../docs/PORTFOLIO-WORLD-CLASS-QUALITY-PLAN.md',import.meta.url),'utf8');
  assert.match(plan,/WCAG 2\.2 AA/);
  assert.match(plan,/Core Web Vitals/);
});


test('homepage, walkthrough and resume avoid internal report language', () => {
  const uiFiles = [
    'src/portfolio/FigmaPortfolio.jsx',
    'src/portfolio/AIEvidenceLab.jsx',
    'src/portfolio/ResumePage.jsx',
    'public/index.html',
  ];
  for (const path of uiFiles) {
    const source = readFileSync(new URL('../' + path, import.meta.url), 'utf8');
    assert.doesNotMatch(source,
      /Owner-reported|Owner-described|self-reported|independently verified|AI-powered genius|10x better|the thinking behind the shipping|candidate not promoted|claim provenance/i,
      path + ' should read like a human portfolio, not an internal review');
  }
});
