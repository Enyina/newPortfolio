import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import {aiLab, aiCaseEvidence, labScenarios} from '../src/portfolio/aiProof.mjs';
import {getFeaturedProjects, getArchiveProjects, findProject, resolveRoute, safeExternal} from '../src/portfolio/content.mjs';

test('AI project leads the featured list and older work remains', () => {
  const featured = getFeaturedProjects();
  assert.equal(featured.length, 5);
  assert.equal(featured[0].slug, 'evidence-driven-ai-workflows');
  assert.equal(getArchiveProjects().length, 6);
  assert.equal(resolveRoute('/work/evidence-driven-ai-workflows').slug, 'evidence-driven-ai-workflows');
});

test('AI claims reflect current work and unfinished acceptance', () => {
  const ai = findProject('evidence-driven-ai-workflows');
  assert.match(ai.contribution, /Git-backed handoff/);
  assert.match(ai.contribution, /experimental local skill installer/);
  assert.match(ai.outcome, /323 software tests/);
  assert.match(ai.outcome, /still being tested/);
  assert.match(aiLab.disclaimer, /examples are fictional/i);
  assert.ok(aiCaseEvidence.some(item => item.level === 'Still inconclusive'));
});

test('Moatt correctly describes its garment-first prototype', () => {
  const garment = findProject('moatt-studio');
  assert.match(garment.contribution, /garment-only view is now the default/i);
  assert.match(garment.outcome, /manufacturing patterns/i);
  assert.equal(safeExternal(garment.demoUrl), 'https://enyina.github.io/moatt/');
});

test('exhibit scenarios are bounded and not a live agent', () => {
  assert.equal(labScenarios.length, 4);
  assert.equal(new Set(labScenarios.map(s => s.id)).size, labScenarios.length);
  assert.ok(labScenarios.some(s => s.id === 'handoff'));
  for (const scenario of labScenarios) {
    assert.equal(scenario.stages.length, 4);
    assert.ok(scenario.stages.every(x => x.name && x.detail && x.detail.length >= 15));
  }
});

test('client UI contains no private AI or employer endpoints or credentials', () => {
  for (const file of ['src/portfolio/aiProof.mjs','src/portfolio/AIEvidenceLab.jsx','src/portfolio/ai-lab.css']) {
    const source = fs.readFileSync(new URL('../' + file, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /(?:gho_[A-Za-z0-9]{12}|sk-[A-Za-z0-9]{16}|api_key\s*[:=]|bearer\s+[a-z0-9]{12})/i);
    assert.doesNotMatch(source, /(?:api\.famasi|dispensaryapi|internal\.famasi|\/private\/tmp\/issue47)/i);
    assert.doesNotMatch(source, /github\.com\/Enyina\/ai-engineering-config/i);
  }
  assert.equal(safeExternal('javascript:alert(1)'), null);
});
