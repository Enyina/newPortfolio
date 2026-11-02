import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {getFeaturedProjects, getPublishedProjects, findProject, safeExternal} from '../src/portfolio/content.mjs';

const read = path => readFileSync(new URL('../' + path, import.meta.url),'utf8');

test('the five featured stories have actual goals, personal work, a complication and an outcome',()=>{
  const featured=getFeaturedProjects();
  assert.equal(featured.length,5);
  for(const project of featured){
    assert.ok(project.context?.length>35,'Problem needs context: '+project.slug);
    assert.ok(project.contribution?.length>35,'Personal role needs detail: '+project.slug);
    assert.ok(project.turningPoint?.length>35,'A real, nonfabricated turning point is missing: '+project.slug);
    assert.ok(project.outcome?.length>35,'Result and limitation need detail: '+project.slug);
    assert.ok(project.lessons?.length>25,'Earned reflection needed: '+project.slug);
  }
});

test('story paths go to valid published projects instead of dead ends',()=>{
  const ui=read('src/portfolio/FigmaPortfolio.jsx');
  const targets=['evidence-driven-ai-workflows','payment-payout-reliability','moatt-studio'];
  for(const slug of targets){
    assert.ok(findProject(slug),'Missing story path: '+slug);
    assert.ok(ui.includes("link:'/work/"+slug+"'"),'Missing story path link: '+slug);
  }
  assert.match(ui,/aria-label="What to read next"/);
  assert.match(ui,/Or get in touch/);
  assert.match(ui,/\/resume/);
  assert.equal(getPublishedProjects().length,11);
});

test('résumé keeps readable story chapters, printing and contact',()=>{
  const ui=read('src/portfolio/ResumePage.jsx');
  const css=read('src/portfolio/resume.css');
  for(const id of ['resume-experience','resume-projects','resume-toolkit','resume-education']){
    assert.ok(ui.includes('id="'+id+'"'),'Missing résumé section: '+id);
  }
  assert.match(ui,/window\.print\(\)/);
  assert.match(ui,/mailto:/);
  assert.match(css,/@media print/);
  assert.match(css,/\.resume-page__jump,\.resume-page__case-link,\.resume-page__closing\{display:none!important\}/);
});

test('animation remains optional, the text remains in normal document flow',()=>{
  const css=read('src/portfolio/figma-layout.css')+'\n'+read('src/portfolio/ai-lab.css');
  const nav=read('src/portfolio/StoryProgress.jsx');
  assert.match(css,/prefers-reduced-motion:reduce/);
  assert.match(css,/@keyframes ai-scene-in/);
  assert.match(css,/@keyframes fm-chapter-enter/);
  assert.match(nav,/role="progressbar"/);
  assert.match(nav,/aria-current/);
  assert.match(nav,/href=\{'#'\+chapter\.id\}/);
  assert.doesNotMatch(nav,/fetch\(|localStorage|sessionStorage/);
});

test('public stories retain privacy boundaries',()=>{
  const ui=read('src/portfolio/FigmaPortfolio.jsx');
  const content=read('src/portfolio/content.mjs');
  const resume=read('src/portfolio/ResumePage.jsx');
  for(const source of [ui,content,resume]){
    assert.doesNotMatch(source, /api\.famasi|dispensaryapi|private\/tmp\/issue47|gho_[A-Za-z0-9]{12}|sk-[A-Za-z0-9]{16}/i);
  }
  assert.equal(findProject('evidence-driven-ai-workflows').repositoryUrl,undefined);
  assert.equal(safeExternal(findProject('moatt-studio').demoUrl),'https://enyina.github.io/moatt/');
});
