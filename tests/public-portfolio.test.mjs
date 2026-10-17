import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {
  site, sections, projects, experience,
  getVisibleSections, getPublishedProjects, getFeaturedProjects, getArchiveProjects,
  findProject, validSlug, resolveRoute, safeExternal
} from '../src/portfolio/content.mjs';

test('sections are consistently ordered and shown only when enabled', () => {
  assert.deepEqual(getVisibleSections().map(x => x.id),
    ['about', 'experience', 'work', 'skills', 'services', 'contact']);
  assert.deepEqual(getVisibleSections([
    {id:'contact',visible:true,order:0},
    {id:'about',visible:false,order:1},
    {id:'work',visible:true,order:2},
  ]).map(x=>x.id),['contact','work']);
  const ui=readFileSync('src/portfolio/FigmaPortfolio.jsx','utf8');
  assert.match(ui,/getVisibleSections\(\)\.map/);
  assert.match(ui,/work:Projects/);
});

test('experience matches the October 2026 public career timeline', () => {
  assert.deepEqual(experience.map(x=>x.company),['Famasi Africa','DabaObject LLC','YEBOX','Howmies']);
  assert.equal(experience[0].period,'Jun 2024 — Present');
});

test('five current case studies are featured; six earlier apps are still in the archive', () => {
  const featured=getFeaturedProjects();
  assert.deepEqual(featured.map(p=>p.slug),[
    'pharmacy-order-orchestration',
    'payment-payout-reliability',
    'voice-assisted-ordering',
    'moatt-studio',
    'evidence-driven-ai-workflows'
  ]);
  assert.equal(getArchiveProjects().length,6);
  assert.deepEqual(getArchiveProjects().slice(0,2).map(p=>p.slug),['shop-kego','hitours']);
  assert.equal(getPublishedProjects().length,11);
});

test('all former project links remain published and directly resolvable', () => {
  for(const slug of ['shop-kego','hitours','social-media-app','messaging-app','inventory-app','video-sharing-app']){
    assert.ok(findProject(slug));
    assert.deepEqual(resolveRoute('/work/'+slug),{kind:'project',slug});
  }
});

test('draft/hidden work never leaks into public project selections or direct detail pages', () => {
  const rows=[
    {slug:'draft',published:false,visible:true,placement:'featured',order:0},
    {slug:'hidden',published:true,visible:false,placement:'archive',order:1},
    {slug:'unsafe/slug',published:true,visible:true,placement:'featured',order:2},
    {slug:'public',published:true,visible:true,placement:'featured',order:3},
  ];
  assert.deepEqual(getFeaturedProjects(rows).map(p=>p.slug),['public']);
  assert.deepEqual(getArchiveProjects(rows),[]);
  assert.equal(findProject('draft',rows),null);
  assert.equal(findProject('hidden',rows),null);
});

test('unrecognized/hidden sections are omitted', () => {
  assert.deepEqual(getVisibleSections([
    {id:'about',visible:false,order:0},
    {id:'internal',visible:true,order:1},
    {id:'contact',visible:true,order:2},
  ]).map(x=>x.id),['contact']);
});

test('duplicate known sections and published slugs are rejected', () => {
  assert.throws(()=>getVisibleSections([{id:'about',visible:true,order:0},{id:'about',visible:true,order:1}]),/Duplicate/);
  assert.throws(()=>getPublishedProjects([{slug:'same',visible:true,published:true,order:0},{slug:'same',visible:true,published:true,order:1}]),/Duplicate/);
});

test('invalid collections are rejected',()=>{
  assert.throws(()=>getVisibleSections(null),TypeError);
  assert.throws(()=>getPublishedProjects({}),TypeError);
});

test('direct routes work only with safe slugs',()=>{
  assert.deepEqual(resolveRoute('/'),{kind:'home'});
  assert.deepEqual(resolveRoute('/index.html'),{kind:'home'});
  assert.deepEqual(resolveRoute('/resume'),{kind:'resume'});
  assert.deepEqual(resolveRoute('/resume/'),{kind:'resume'});
  assert.deepEqual(resolveRoute('/work/moatt-studio'),{kind:'project',slug:'moatt-studio'});
  assert.deepEqual(resolveRoute('/project/shop-kego/'),{kind:'project',slug:'shop-kego'});
  for(const p of ['/admin','/work/../secret','/work/%2F','/work/a/b','/work/BIG'])assert.equal(resolveRoute(p).kind,'not-found');
  assert.equal(validSlug('a-good-slug'),true);
  assert.equal(validSlug('../evil'),false);
});

test('unsafe external protocols cannot render as links',()=>{
  assert.equal(safeExternal('javascript:alert(1)'),null);
  assert.equal(safeExternal('http://github.com'),null);
  assert.equal(safeExternal('https://github.com/Enyina'),'https://github.com/Enyina');
});

test('every case study and archived project remains reachable',()=>{
  for(const p of getPublishedProjects(projects)){
    assert.equal(findProject(p.slug).title,p.title);
    assert.equal(resolveRoute('/work/'+p.slug).kind,'project');
  }
});

test('newer private research and employer case studies stay honest about evidence and scope',()=>{
  for(const p of getFeaturedProjects()){
    assert.ok(p.context,'Case study needs a problem: '+p.slug);
    assert.ok(p.contribution,'Case study needs an individual contribution: '+p.slug);
    assert.ok(p.outcome,'Case study needs a stated outcome: '+p.slug);
    assert.ok(p.evidenceNote,'Case study needs an evidence boundary: '+p.slug);
  }
  const privateProject=findProject('evidence-driven-ai-workflows');
  assert.equal(privateProject.repositoryUrl,undefined);
  assert.match(privateProject.statusLabel,/Private/);
  const moatt=findProject('moatt-studio');
  assert.match(moatt.outcome,/prototype/i);
});

test('current contact channel is available',()=>{
  assert.equal(site.email,'enyina3848@gmail.com');
});

test('the public resume can be printed or saved without exposing a phone number',()=>{
  const source=readFileSync('src/portfolio/ResumePage.jsx','utf8');
  const ui=readFileSync('src/portfolio/FigmaPortfolio.jsx','utf8');
  assert.match(source,/window\.print\(\)/);
  assert.match(ui,/ResumePage/);
  assert.doesNotMatch(source,/\+234[\s\d]{9,}/);
  assert.match(source,/mailto:/);
});

test('direct email and the original message form are both available',()=>{
  const source=readFileSync('src/portfolio/FigmaPortfolio.jsx','utf8');
  assert.match(source,/mailto:/);
  assert.match(source,/formspree\.io\/f\/xbjbvgoo/);
  assert.match(source,/method="POST"/);
  for(const field of ['contact-name','contact-email','contact-message']) assert.ok(source.includes(field));
});


test('the opening section shows a real, accessible local portrait',()=>{
  const source=readFileSync('src/portfolio/FigmaPortfolio.jsx','utf8');
  const img=readFileSync('src/assets/me.png');
  assert.deepEqual([...img.subarray(0,8)],[137,80,78,71,13,10,26,10]);
  assert.match(source,/import heroPortrait from '\.\.\/assets\/me\.png'/);
  assert.match(source,/className="fm-hero-portrait"/);
  assert.match(source,/alt="Matthew Enyina wearing a grey blazer and white turtleneck"/);
  assert.match(source,/width="483" height="626"/);
  assert.match(source,/loading="eager"/);
});
