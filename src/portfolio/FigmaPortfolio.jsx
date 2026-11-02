import {useState} from 'react';
import {site,experience,skills,services,getFeaturedProjects,getArchiveProjects,getVisibleSections,findProject,resolveRoute,safeExternal} from './content.mjs';
import './figma-layout.css';
import ResumePage from './ResumePage';
import StoryProgress from './StoryProgress';
import AIEvidenceLab from './AIEvidenceLab';
import {aiCaseEvidence, aiLab} from './aiProof.mjs';

const work=getFeaturedProjects();
const archived=getArchiveProjects();
const visibleIds=new Set(getVisibleSections().map(section=>section.id));
const links=[['AI Lab','ai-lab'],['About','about'],['Experience','experience'],['Projects','projects'],['Skills','skills'],['Contact','contact'],['Résumé','resume']].filter(([,id])=>id==='ai-lab'||id==='resume'||visibleIds.has(id==='projects'?'work':id));
function External({href,children}){const url=safeExternal(href);return url?<a href={url} target="_blank" rel="noopener noreferrer">{children}</a>:null}
function Header(){const [open,setOpen]=useState(false);return <header className="fm-header"><div className="fm-container fm-header-inner"><a href="/" className="fm-brand">M<span>.</span></a><button className="fm-menu" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>☰</button><nav aria-label="Primary navigation" className={open?'fm-nav fm-nav-open':'fm-nav'}>{links.map(([name,id])=><a key={id} href={id==='resume'?'/resume':'/#'+id} onClick={()=>setOpen(false)}>{name}</a>)}</nav><a className="fm-header-contact" href={'mailto:'+site.email}>Let's talk ↗</a></div></header>}
function Title({label,title,subtitle}){
  return <div className="fm-title">
    <span className="fm-kicker"><b>✳</b> {label}</span>
    <h2>{title}</h2>
    {subtitle&&<p>{subtitle}</p>}
  </div>;
}
function Hero(){
  return <section className="fm-hero" id="hero" aria-labelledby="hero-title">
    <div className="fm-hero-glow"/>
    <div className="fm-container fm-hero-layout">
      <div className="fm-hero-content">
        <span className="fm-hero-pill"><i/> Full-Stack Engineer · Lagos, Nigeria · Open to remote work</span>
        <h1 id="hero-title">Matthew Enyina</h1>
        <p>I build web and mobile products, work through tricky backend problems, and build my own tools along the way.</p>
        <div className="fm-hero-actions">
          <a className="fm-button fm-button-primary" href="#ai-lab">See my AI project ↗</a>
          <a className="fm-button fm-button-quiet" href="#projects">Selected work</a>
          <a className="fm-button fm-button-quiet" href={'mailto:'+site.email}>Get in Touch</a>
          <a className="fm-button fm-button-quiet" href="/resume">View résumé ↗</a>
        </div>
        <div className="fm-hero-foot">Web & mobile <span>·</span> APIs <span>·</span> Payments <span>·</span> AI tools</div>
      </div>
    </div>
  </section>;
}
function StoryPaths(){
  const paths=[
    {number:'01',eyebrow:'HOW I THINK',title:'What happens when I disagree with an AI suggestion?',description:'A real experiment made me question a better-looking test score.',link:'/work/evidence-driven-ai-workflows',cta:'See the experiment'},
    {number:'02',eyebrow:'HOW I BUILD',title:'What do you do when a payment times out?',description:'The engineering behind knowing whether to retry or investigate.',link:'/work/payment-payout-reliability',cta:'Explore the problem'},
    {number:'03',eyebrow:'WHAT I MAKE',title:'Can you try something I built?',description:'A clothing-design prototype with a garment-first preview.',link:'/work/moatt-studio',cta:'Meet Moatt'},
  ];
  return <section className="fm-story-paths fm-section" aria-labelledby="story-paths-heading">
    <div className="fm-container">
      <span className="fm-kicker"><b>START HERE</b></span>
      <h2 id="story-paths-heading">Three ways into my work.</h2>
      <p className="fm-story-paths-intro">Pick what interests you. I'll show you what I was trying to solve, what I built and what I learned.</p>
      <div className="fm-story-paths-grid">{paths.map(path=><a className="fm-story-path" key={path.number} href={path.link}>
        <span className="fm-story-path-top"><span>{path.number} / {path.eyebrow}</span><span aria-hidden="true">↗</span></span>
        <strong>{path.title}</strong>
        <span className="fm-story-path-description">{path.description}</span>
        <span className="fm-story-path-action">{path.cta} <span aria-hidden="true">→</span></span>
      </a>)}</div>
    </div>
  </section>;
}

function Stats(){const stats=[['6+ years','Working across products'],['Web + mobile','React, Expo and APIs'],['Payments','Reliability and integrations'],['AI tools','Research and agent testing']];return <section className="fm-stats" aria-label="Areas of expertise"><div className="fm-container fm-stats-grid">{stats.map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div></section>}
function About(){return <section id="about" className="fm-section fm-about"><div className="fm-container fm-about-grid"><div><span className="fm-kicker"><b>01</b> / ABOUT</span><h2>I like the hard parts <em>of building software.</em></h2></div><div><p>{site.about}</p><p>I care about the details that usually show up after a product launches: the slow request, the failed payment, the flow nobody expected. Fixing those is part of building something good.</p><a href="#contact" className="fm-inline-link">Let's work together ↗</a></div></div></section>}
function Experience(){return <section id="experience" className="fm-section"><div className="fm-container"><Title label="02 / EXPERIENCE" title="Where I've worked" subtitle="From shipping features to fixing the things that break after launch."/><div className="fm-timeline">{experience.map((j,i)=><article className="fm-job" key={j.id}><span className="fm-job-index">{String(i+1).padStart(2,'0')}</span><div><p className="fm-job-company">{j.company}</p><h3>{j.title}</h3><p className="fm-job-copy">{j.description}</p>{j.impact&&<p className="fm-job-impact">{j.impact}</p>}<ul className="fm-job-achievements">{j.achievements.map(item=><li key={item}>{item}</li>)}</ul><div className="fm-job-tags">{j.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{j.caseStudies&&<div className="fm-job-cases"><span>PROJECT STORIES</span>{j.caseStudies.map(item=><a key={item.slug} href={'/work/'+item.slug}>{item.label} ↗</a>)}</div>}</div><small>{j.period}</small></article>)}</div><div className="fm-resume-prompt"><a href="/resume" className="fm-inline-link">View full résumé · Print or save as PDF ↗</a></div></div></section>}
function Projects(){
  return <section id="projects" className="fm-section fm-section-lined">
    <span id="work" className="fm-anchor" aria-hidden="true"/>
    <div className="fm-container">
      <div className="fm-projects-layout">
        <div className="fm-projects-intro">
          <Title label="03 / SELECTED WORK" title="Selected work" subtitle="Work I've done for teams, alongside projects I'm building for myself."/>
          <p className="fm-projects-guide">Scroll through the projects, or open one to follow the decisions behind it.</p>
          <a href="/resume" className="fm-inline-link">See my full résumé ↗</a>
        </div>
        <div className="fm-projects-content">
          <div className="fm-project-grid">
        {work.map((p,i)=><article key={p.slug} className={p.slug==='evidence-driven-ai-workflows'?'fm-project fm-project-featured':'fm-project'}>
          <a href={'/work/'+p.slug} className="fm-project-top"><span>{String(i+1).padStart(2,'0')} / {p.category}</span><span>↗</span></a>
          <div className="fm-project-main">
            <span className="fm-project-status">{p.statusLabel}</span>{p.slug==='evidence-driven-ai-workflows'&&<span className="fm-project-spotlight">MY AI ENGINEERING PROJECT</span>}
            <h3><a href={'/work/'+p.slug}>{p.title}</a></h3>
            <p>{p.summary}</p>
          </div>
          <div className="fm-chips">{p.tags.slice(0,5).map(t=><span key={t}>{t}</span>)}</div>
          <a className="fm-project-detail-link" href={'/work/'+p.slug}>Read the story →</a>
        </article>)}
      </div>
      <details className="fm-archive">
        <summary>Earlier projects <span>{archived.length} projects</span></summary>
        <p className="fm-archive-desc">Some older projects from when I was learning my way around different technologies.</p>
        <div className="fm-archive-grid">{archived.map(p=>
          <article key={p.slug}><div><h3><a href={'/work/'+p.slug}>{p.title} ↗</a></h3><p>{p.summary}</p></div><a href={'/work/'+p.slug}>Read more →</a></article>
        )}</div>
      </details>
        </div>
      </div>
    </div>
  </section>;
}
function Skills(){
  return <section id="skills" className="fm-section fm-section-lined"><div className="fm-container">
    <Title label="04 / TOOLKIT" title="What I work with" subtitle="Tools I use to build, ship and fix products."/>
    <div className="fm-skills">{skills.map(g=><div key={g.id} className="fm-skill-row"><h3>{g.title}</h3><div>{g.values.map(v=><span key={v}>{v}</span>)}</div></div>)}</div>
  </div></section>;
}
function Services(){
  return <section id="services" className="fm-section fm-section-lined"><div className="fm-container">
    <Title label="05 / HOW I CAN HELP" title="What I can help you build" subtitle="From the first version to the problems that show up in production."/>
    <div className="fm-services">{services.map(s=><article key={s.id}><h3>{s.title}</h3><p>{s.detail}</p></article>)}</div>
  </div></section>;
}
function Contact(){return <section id="contact" className="fm-contact"><div className="fm-contact-glow"/><div className="fm-container"><span className="fm-kicker"><b>05</b> / CONTACT</span><h2>Working on something interesting?</h2><p>Tell me what you're building or what you need help fixing.</p><a className="fm-button fm-button-primary" href={'mailto:'+site.email}>Start a conversation ↗</a>
  <form className="fm-contact-form" action="https://formspree.io/f/xbjbvgoo" method="POST">
    <div className="fm-contact-form-heading"><h3>Or send a message</h3><p>Share a little about your project or opportunity.</p></div>
    <div className="fm-contact-form-fields">
      <div><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" maxLength="120" required placeholder="Your name"/></div>
      <div><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></div>
      <div className="fm-contact-form-message"><label htmlFor="contact-message">What can I help with?</label><textarea id="contact-message" name="message" rows="4" minLength="10" maxLength="5000" required placeholder="Tell me about the problem or product..."/></div>
    </div>
    <button type="submit" className="fm-button fm-button-primary">Send message ↗</button>
    <small>Messages are sent through Formspree, the provider used by the earlier portfolio.</small>
  </form>
  <div className="fm-contact-social"><External href={site.github}>GitHub ↗</External><External href={site.linkedin}>LinkedIn ↗</External><span>{site.location}</span></div></div></section>}
function Detail({slug}){
  const p=findProject(slug);
  const index=work.findIndex(item=>item.slug===slug);
  const next=index>=0 && index<work.length-1?work[index+1]:null;
  const chapters=p?[
    {id:'the-problem',title:'The problem',text:p.context},
    {id:'my-part',title:'What I built',text:p.contribution},
    {id:'the-hard-part',title:'The tricky part',text:p.turningPoint},
    {id:'the-result',title:'Where it stands',text:p.outcome},
    {id:'what-i-learned',title:'What I learned',text:p.lessons},
  ].filter(chapter=>chapter.text):[];
  return <main className="fm-container fm-detail" id="main-content">
    <a href="/#projects" className="fm-inline-link">← Back to selected work</a>
    {p?<>
      <span className="fm-kicker">{p.category} · {p.statusLabel||'Earlier work'}</span>
      <h1>{p.title}</h1><p className="fm-detail-lead">{p.summary}</p>
      <div className="fm-detail-reading-layout">
        <StoryProgress chapters={chapters}/>
        <div className="fm-detail-story">
          {chapters.map((chapter,i)=><section id={chapter.id} className="fm-detail-chapter" key={chapter.id}>
            <span className="fm-detail-chapter-number">{String(i+1).padStart(2,'0')}</span>
            <div><h2>{chapter.title}</h2><p>{chapter.text}</p></div>
          </section>)}
        </div>
      </div>
      {p.slug==='evidence-driven-ai-workflows'&&<section className="fm-detail-ai-evidence" aria-labelledby="ai-evidence-heading"><span className="fm-kicker"><b>FROM MY OWN TESTING</b></span><h2 id="ai-evidence-heading">A closer look</h2><p>{aiLab.disclaimer}</p><div className="fm-detail-proof-grid">{aiCaseEvidence.map(item=><article key={item.label}><span>{item.level}</span><h3>{item.finding}</h3><p>{item.detail}</p></article>)}</div><a className="fm-inline-link" href="/#ai-lab">Try the walkthrough ↗</a></section>}
      {p.demoUrl&&<External href={p.demoUrl}>Open Moatt preview ↗</External>}
      <section><h2>Tools I used</h2><div className="fm-chips">{p.tags.map(t=><span key={t}>{t}</span>)}</div></section>
      {p.evidenceNote&&<p className="fm-evidence-note">{p.evidenceNote}</p>}
      {p.repositoryUrl&&<External href={p.repositoryUrl}>View public repository ↗</External>}
      <nav className="fm-detail-next" aria-label="What to read next">
        <div>
          <span className="fm-kicker">KEEP EXPLORING</span>
          <h2>{next?'One more project?':'Want to see the bigger picture?'}</h2>
          <p>{next?'Here is another problem I worked through.':'The résumé puts my work and skills together in one place.'}</p>
        </div>
        <div className="fm-detail-next-links">
          {next&&<a href={'/work/'+next.slug} className="fm-button fm-button-primary">Next: {next.title} →</a>}
          <a href="/resume" className="fm-button fm-button-quiet">View my résumé →</a>
          <a href="/#contact" className="fm-inline-link">Or get in touch ↗</a>
        </div>
      </nav>
    </>:<><h1>Project not found</h1><p>This project may no longer be published.</p></>}
  </main>;
}
const renderedSections={about:About,experience:Experience,work:Projects,skills:Skills,services:Services,contact:Contact};
export default function FigmaPortfolio(){const route=resolveRoute(window.location.pathname);return <div className="fm-page"><a href="#main-content" className="fm-skip">Skip to content</a><Header/>{route.kind==='home'?<main id="main-content"><Hero/><Stats/><StoryPaths/><AIEvidenceLab/>{getVisibleSections().map(({id})=>{const Section=renderedSections[id];return Section?<Section key={id}/>:null})}</main> : route.kind==='resume'?<ResumePage/>:<Detail slug={route.kind==='project'?route.slug:null}/>}<footer className="fm-footer"><div className="fm-container"><span>Matthew Enyina</span><span>Made by me, and still improving.</span><span>© {new Date().getFullYear()}</span></div></footer></div>}
