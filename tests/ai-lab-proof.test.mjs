import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import {aiLab, aiCaseEvidence, labScenarios} from '../src/portfolio/aiProof.mjs';
import {getFeaturedProjects, getArchiveProjects, findProject, resolveRoute, safeExternal} from '../src/portfolio/content.mjs';

test('the AI engineering case study leads the featured portfolio without displacing older work', () => {
  const featured = getFeaturedProjects();
  assert.equal(featured.length, 5);
  assert.equal(featured[0].slug, 'evidence-driven-ai-workflows');
  assert.equal(getArchiveProjects().length, 6);
  assert.equal(findProject('evidence-driven-ai-workflows')?.category, 'Independent');
  assert.equal(resolveRoute('/work/evidence-driven-ai-workflows').slug, 'evidence-driven-ai-workflows');
});

test('the model evaluation is not misrepresented as independently proven improvement', () => {
  const featured = findProject('evidence-driven-ai-workflows');
  assert.match(featured.outcome, /323/);
  assert.match(featured.outcome, /15 Codex answers/);
  assert.match(featured.outcome, /left it out/i);
  assert.match(featured.lessons, /caught a reason not to trust/i);
  assert.match(aiLab.disclaimer, /not a live AI demo/i);
  assert.ok(aiCaseEvidence.some(item => item.level === 'Not a proven improvement'));
});

test('case study displays multiple meaningful, explicit user journeys', () => {
  assert.equal(labScenarios.length, 4);
  assert.equal(new Set(labScenarios.map(s => s.id)).size, labScenarios.length);
  for (const scenario of labScenarios) {
    assert.equal(scenario.stages.length, 4);
    assert.ok(scenario.stages.every(x => x.name && x.detail && x.detail.length >= 15));
    assert.ok(scenario.question && scenario.verdict && scenario.outcome);
  }
});

test('client-facing AI exhibit is static and contains no private network endpoints or secrets', () => {
  const paths = [
    'src/portfolio/aiProof.mjs',
    'src/portfolio/AIEvidenceLab.jsx',
    'src/portfolio/ai-lab.css',
  ];
  for (const file of paths) {
    const source = fs.readFileSync(new URL('../' + file, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /(?:gho_[A-Za-z0-9]{12}|sk-[A-Za-z0-9]{16}|api_key\s*[:=]|bearer\s+[a-z0-9]{12})/i);
    assert.doesNotMatch(source, /(?:api\.famasi|dispensaryapi|internal\.famasi|\/private\/tmp\/issue47)/i);
  }
  assert.equal(safeExternal('javascript:alert(1)'), null);
});
