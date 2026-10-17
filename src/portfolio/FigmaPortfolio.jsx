import {useState} from 'react';
import {site,experience,skills,services,getFeaturedProjects,getArchiveProjects,getVisibleSections,findProject,resolveRoute,safeExternal} from './content.mjs';
import './figma-layout.css';
import ResumePage from './ResumePage';
import heroPortrait from '../assets/me.png';

const work=getFeaturedProjects();
const archived=getArchiveProjects();
const visibleIds=new Set(getVisibleSections().map(section=>section.id));
const links=[['About','about'],['Experience','experience'],['Projects','projects'],['Skills','skills'],['Contact','contact'],['Résumé','resume']].filter(([,id])=>id==='resume'||visibleIds.has(id==='projects'?'work':id));
function External({href,children}){const url=safeExternal(href);return url?<a href={url} target="_blank" rel="noopener noreferrer">{children}</a>:null}
function Header(){const [open,setOpen]=useState(false);return <header className="fm-header"><div className="fm-container fm-header-inner"><a href="/" className="fm-brand">M<span>.</span></a><button className="fm-menu" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>☰</button><nav aria-label="Primary navigation" className={open?'fm-nav fm-nav-open':'fm-nav'}>{links.map(([name,id])=><a key={id} href={id==='resume'?'/resume':'/#'+id} onClick={()=>setOpen(false)}>{name}</a>)}</nav><a className="fm-header-contact" href={'mailto:'+site.email}>Let's talk ↗</a></div></header>}
function Title({label,title,subtitle}){return <div className="fm-title"><span className="fm-kicker"><b>✳</b> {label}</span><h2>{titfunction Hero(){
  return <section className="fm-hero" id="hero" aria-labelledby="hero-title">
    <div className="fm-hero-glow"/>
    <div className="fm-container fm-hero-layout">
      <div className="fm-hero-content">
        <span className="fm-hero-pill"><i/> Senior Full-Stack Product Engineer · Open to remote opportunities</span>
        <h1 id="hero-title">Matthew Enyina</h1>
        <p>Building reliable products, complex integrations and real-world systems — from idea to production</p>
        <div className="fm-hero-actions">
          <a className="fm-button fm-button-primary" href="#projects">View Work ↗</a>
          <a className="fm-button fm-button-quiet" href={'mailto:'+site.email}>Get in Touch</a>
          <a className="fm-button fm-button-quiet" href="/resume">View résumé ↗</a>
        </div>
        <div className="fm-hero-foot">Node.js <span>·</span> TypeScript <span>·</span> React Native <span>·</span> Payments <span>·</span> AI</div>
      </div>
      <figure className="fm-hero-portrait">
        <img src={heroPortrait} alt="Matthew Enyina wearing a grey blazer and white turtleneck" width="483" height="626" loading="eager" decoding="async"/>
        <figcaption>Matthew Enyina <span aria-hidden="true">/</span> Lagos, Nigeria</figcaption>
      </figure>
    </div>
  </section>;
}
nts <span>·</span> AI</div></div></section>}
function Stats(){const stats=[['6+ years','Production engineering · CV'],['Full-stack','Web, mobile and APIs'],['Real-time','Requests, events and workflows'],['Independent','Building and learning in public']];return <section className="fm-stats" aria-label="Areas of expertise"><div className="fm-container fm-stats-grid">{stats.map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div></section>}
function About(){return <section id="about" className="fm-section fm-about"><div className="fm-container fm-about-grid"><div><span className="fm-kicker"><b>01</b> / ABOUT</span><h2>I solve the problem <em>behind</em> the problem.</h2></div><div><p>{site.about}</p><p>I bring product thinking into engineering decisions, from understanding what customers need to keeping critical operations reliable after launch.</p><a href="#contact" className="fm-inline-link">Let's work together ↗</a></div></div></section>}
function Experience(){return <section id="experience" className="fm-section"><div className="fm-container"><Title label="02 / EXPERIENCE" title="Where I've made an impact" subtitle="Building useful products, integrating systems, and improving production reliability."/><div className="fm-timeline">{experience.map((j,i)=><article className="fm-job" key={j.id}><span className="fm-job-index">{String(i+1).padStart(2,'0')}</span><div><h3>{j.title}</h3><p className="fm-job-company">{j.company}</p><p className="fm-job-copy">{j.description}</p>{j.highlight&&<p className="fm-job-proof">{j.highlight}</p>}</div><small>{j.period}</small></article>)}</div><div className="fm-resume-prompt"><a href="/resume" className="fm-inline-link">View full résumé · Print or save as PDF ↗</a></div></div></section>}
function Projects(){
  return <section id="projects" className="fm-section fm-section-lined">
    <span id="work" className="fm-anchor" aria-hidden="true"/>
    <div className="fm-container">
      <Title label="03 / SELECTED WORK" title="What I've built, improved and learned" subtitle="Recent production problem-solving and independent products. Each case study explains the problem, my contribution and its limits."/>
      <div className="fm-project-grid">
        {work.map((p,i)=><article key={p.slug} className="fm-project">
          <a href={'/work/'+p.slug} className="fm-project-top"><span>{String(i+1).padStart(2,'0')} / {p.category}</span><span>↗</span></a>
          <div className="fm-project-main">
            <span className="fm-project-status">{p.statusLabel}</span>
            <h3><a href={'/work/'+p.slug}>{p.title}</a></h3>
            <p>{p.summary}</p>
          </div>
          <div className="fm-chips">{p.tags.slice(0,5).map(t=><span key={t}>{t}</span>)}</div>
          <a className="fm-project-detail-link" href={'/work/'+p.slug}>Explore case study →</a>
        </article>)}
      </div>
      <details className="fm-archive">
        <summary>Earlier projects <span>{archived.length} projects · optional archive</span></summary>
        <p className="fm-archive-desc">These older experiments helped me learn. They're preserved as history rather than presented as recent production work.</p>
        <div className="fm-archive-grid">{archived.map(p=>
          <article key={p.slug}><div><h3><a href={'/work/'+p.slug}>{p.title} ↗</a></h3><p>{p.summary}</p></div><a href={'/work/'+p.slug}>Read more →</a></article>
        )}</div>
      </details>
    </div>
  </section>;
}
function Skills(){
  return <section id="skills" className="fm-section fm-section-lined"><div className="fm-container">
    <Title label="04 / TOOLKIT" title="The right tools for the outcome" subtitle="Real production experience across APIs, web and mobile apps, data and delivery."/>
    <div className="fm-skills">{skills.map(g=><div key={g.id} className="fm-skill-row"><h3>{g.title}</h3><div>{g.values.map(v=><span key={v}>{v}</span>)}</div></div>)}</div>
  </div></section>;
}
function Services(){
  return <section id="services" className="fm-section fm-section-lined"><div className="fm-container">
    <Title label="05 / HOW I CAN HELP" title="Build it, improve it, keep it running" subtitle="Ways I help companies and independent clients move from a business problem to dependable software."/>
    <div className="fm-services">{services.map(s=><article key={s.id}><h3>{s.title}</h3><p>{s.detail}</p></article>)}</div>
  </div></section>;
}
function Contact(){return <section id="contact" className="fm-contact"><div className="fm-contact-glow"/><div className="fm-container"><span className="fm-kicker"><b>05</b> / CONTACT</span><h2>Have something worth building?</h2><p>Let's turn your next product challenge into something that works.</p><a className="fm-button fm-button-primary" href={'mailto:'+site.email}>Start a conversation ↗</a>
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
  return <main className="fm-container fm-detail" id="main-content">
    <a href="/#projects" className="fm-inline-link">← Back to selected work</a>
    {p?<>
      <span className="fm-kicker">{p.category} · {p.statusLabel||'Earlier work'}</span>
      <h1>{p.title}</h1><p className="fm-detail-lead">{p.summary}</p>
      {[['The challenge',p.context],['What I contributed',p.contribution],['What changed',p.outcome],['What I learned',p.lessons]]
        .filter(([,description])=>description).map(([title,description])=>
          <section key={title}><h2>{title}</h2><p>{description}</p></section>)}
      <section><h2>Technologies and methods</h2><div className="fm-chips">{p.tags.map(t=><span key={t}>{t}</span>)}</div></section>
      {p.evidenceNote&&<p className="fm-evidence-note">{p.evidenceNote}</p>}
      {p.repositoryUrl&&<External href={p.repositoryUrl}>View public repository ↗</External>}
    </>:<><h1>Project not found</h1><p>This project may no longer be published.</p></>}
  </main>;
}
const renderedSections={about:About,experience:Experience,work:Projects,skills:Skills,services:Services,contact:Contact};
export default function FigmaPortfolio(){const route=resolveRoute(window.location.pathname);return <div className="fm-page"><a href="#main-content" className="fm-skip">Skip to content</a><Header/>{route.kind==='home'?<main id="main-content"><Hero/><Stats/>{getVisibleSections().map(({id})=>{const Section=renderedSections[id];return Section?<Section key={id}/>:null})}</main> : route.kind==='resume'?<ResumePage/>:<Detail slug={route.kind==='project'?route.slug:null}/>}<footer className="fm-footer"><div className="fm-container"><span>Matthew Enyina</span><span>Built with care, designed to evolve.</span><span>© {new Date().getFullYear()}</span></div></footer></div>}
