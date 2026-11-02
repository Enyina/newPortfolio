import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {experience, getFeaturedProjects, findProject} from '../src/portfolio/content.mjs';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('every role shows meaningful engineering contributions without inflated claims', () => {
  assert.equal(experience.length,4);
  assert.deepEqual(experience.map(job => job.company), ['Famasi Africa','DabaObject LLC','YEBOX','Howmies']);
  for (const job of experience) {
    assert.ok(job.impact.length > 45, 'Missing clear engineering challenge: ' + job.company);
    assert.ok(job.achievements.length >= 2, 'Missing concrete contributions: ' + job.company);
    assert.ok(job.achievements.every(item => typeof item === 'string' && item.length >= 60));
    assert.ok(job.tags.length >= 3, 'Expected a relevant technical stack: ' + job.company);
    assert.doesNotMatch(JSON.stringify(job), /owner.reported|independently verified|10x|100% guaranteed/i);
  }
});
test('employer stories are real published paths and personal work remains prominent', () => {
  const job=experience.find(job => job.id === 'famasi');
  assert.equal(job.caseStudies.length, 3);
  for (const story of job.caseStudies) assert.ok(findProject(story.slug));
  const personal=getFeaturedProjects().filter(p => p.category === 'Independent');
  assert.deepEqual(personal.map(p => p.slug),['evidence-driven-ai-workflows','moatt-studio']);
});
test('web résumé uses all roles and only the strongest finished-enough personal work', () => {
  const resume=read('src/portfolio/ResumePage.jsx');
  assert.match(resume,/experience\.map\(job/);
  assert.match(resume,/job\.achievements\.map/);
  assert.match(resume,/job\.caseStudies\.map/);
  assert.match(resume,/getFeaturedProjects\(\)\.filter\(p => p\.category === 'Independent'\)/);
  assert.match(resume,/still testing the full approval and rollback cycle/i);
  assert.match(resume,/fabric realism are still in development/i);
});
test('sticky reading is selective, responsive and hidden in printed navigation', () => {
  const css=read('src/portfolio/figma-layout.css');
  const paper=read('src/portfolio/resume.css');
  const view=read('src/portfolio/FigmaPortfolio.jsx');
  assert.match(css,/\.fm-projects-intro\{position:sticky/);
  assert.match(css,/\.fm-detail-reading-layout \.fm-detail-steps\{position:sticky/);
  assert.match(css,/@media\(max-width:900px\)/);
  assert.match(css,/\.fm-projects-intro\{position:static/);
  assert.match(css,/\.fm-detail-reading-layout \.fm-detail-steps\{position:static/);
  assert.match(view,/className="fm-projects-layout"/);
  assert.match(view,/className="fm-detail-reading-layout"/);
  assert.match(paper,/@media print/);
  assert.match(paper,/\.resume-page__jump,.resume-page__case-link,.resume-page__closing\{display:none!important\}/);
});
