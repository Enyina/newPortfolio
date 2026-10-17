import test from 'node:test';
import assert from 'node:assert/strict';
import {site,sections,projects,getVisibleSections,getPublishedProjects,findProject,validSlug,resolveRoute,safeExternal} from '../src/portfolio/content.mjs';
test('only known visible sections render in intended order',()=>{
  assert.deepEqual(getVisibleSections(sections).map(x=>x.id),['about','experience','skills','services','work','contact']);
});
test('legacy work and production case studies have published pages',()=>{
  const slugs=getPublishedProjects().map(x=>x.slug);
  assert.equal(slugs.length,8);
  assert.equal(slugs[0],'pharmacy-order-orchestration');
  assert.ok(slugs.includes('shop-kego'));
});
test('draft and hidden work never appears in public projection',()=>{
  const rows=[
    {slug:'draft',published:false,visible:true,order:0},
    {slug:'hidden',published:true,visible:false,order:1},
    {slug:'bad/slug',published:true,visible:true,order:2},
    {slug:'public',published:true,visible:true,order:3}
  ];
  assert.deepEqual(getPublishedProjects(rows).map(x=>x.slug),['public']);
  assert.equal(findProject('draft',rows),null);
  assert.equal(findProject('hidden',rows),null);
});
test('unknown and hidden sections are excluded',()=>{
  assert.deepEqual(getVisibleSections([
    {id:'about',visible:false,order:0},
    {id:'internal',visible:true,order:1},
    {id:'contact',visible:true,order:2},
  ]).map(x=>x.id),['contact']);
});
test('duplicate visible sections and projects are rejected',()=>{
  assert.throws(()=>getVisibleSections([{id:'about',visible:true,order:0},{id:'about',visible:true,order:1}]),/Duplicate/);
  assert.throws(()=>getPublishedProjects([{slug:'same',visible:true,published:true,order:0},{slug:'same',visible:true,published:true,order:1}]),/Duplicate/);
});
test('invalid shapes do not silently publish',()=>{
  assert.throws(()=>getVisibleSections(null),TypeError);
  assert.throws(()=>getPublishedProjects({}),TypeError);
});
test('safe route parsing accepts only published-style slugs',()=>{
  assert.deepEqual(resolveRoute('/'),{kind:'home'});
  assert.deepEqual(resolveRoute('/index.html'),{kind:'home'});
  assert.deepEqual(resolveRoute('/work/shop-kego'),{kind:'project',slug:'shop-kego'});
  assert.deepEqual(resolveRoute('/project/shop-kego/'),{kind:'project',slug:'shop-kego'});
  for(const p of ['/admin','/work/../secret','/work/%2F','/work/a/b','/work/BIG']) assert.equal(resolveRoute(p).kind,'not-found');
  assert.equal(validSlug('a-good-slug'),true);
  assert.equal(validSlug('../evil'),false);
});
test('only HTTPS external destinations accepted',()=>{
  assert.equal(safeExternal('javascript:alert(1)'),null);
  assert.equal(safeExternal('http://github.com'),null);
  assert.equal(safeExternal('https://github.com/Enyina'),'https://github.com/Enyina');
});
test('every published card resolves to a detail page',()=>{
  for(const p of getPublishedProjects(projects)) {
    assert.equal(findProject(p.slug).title,p.title);
    assert.equal(resolveRoute('/work/'+p.slug).kind,'project');
  }
});
test('public record has the correct contact channel',()=>{
  assert.equal(site.email,'enyina3848@gmail.com');
});
