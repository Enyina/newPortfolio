import { useState } from 'react';
import { site, sections, experience, skills, services, getVisibleSections, getPublishedProjects, findProject, resolveRoute, safeExternal } from './content.mjs';
import { media } from './assets';
import './dynamic.css';

const sectionItems = getVisibleSections(sections);
const allProjects = getPublishedProjects();

function Outbound({ href, children, ...props }) {
  const safe = safeExternal(href);
  return safe ? <a href={safe} target="_blank" rel="noopener noreferrer" {...props}>{children}</a> : null;
}
function Heading({ n, label, title, intro }) {
  return <div className="dp-heading"><div className="dp-heading__minor"><span>{n} / {label}</span><span>✳</span></div><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}
function Header() {
  return <header className="dp-header"><div className="dp-wrap dp-header__inner">
    <a className="dp-brand" href="/" aria-label="Matthew Enyina home">ME<span>.</span></a>
    <nav className="dp-nav" aria-label="Main navigation">{['about','experience','work','contact'].filter((id)=>sectionItems.some((s)=>s.id===id)).map((id)=><a key={id} href={'/#'+id}>{id[0].toUpperCase()+id.slice(1)}</a>)}</nav>
    <a className="dp-header__action" href={'mailto:'+site.email}>Let's talk ↗</a>
  </div></header>;
}
function Hero() {
  return <section className="dp-wrap dp-hero" id="home">
    <div><p className="dp-overline"><span className="dp-indicator"/> Product thinking · Production engineering</p>
      <h1>Building dependable <em>digital products,</em> end to end.</h1>
      <p className="dp-lead">{site.intro}</p>
      <div className="dp-buttons"><a href="#work" className="dp-btn dp-btn--accent">Explore my work ↗</a><a href="#contact" className="dp-btn dp-btn--quiet">Work with me</a></div>
      <div className="dp-hero__bottom"><span>✳ {site.title}</span><span>{site.location}</span></div>
    </div>
    <div className="dp-hero__photo"><div className="dp-hero__shape"/><img src={media.portrait} alt="Portrait of Matthew Enyina" width="480" height="540" fetchPriority="high"/><span className="dp-photo-note">Building what matters.<br/>Making it work.</span></div>
  </section>;
}
function About() {
  return <section className="dp-section dp-section--alt" id="about"><div className="dp-wrap dp-about">
    <div><Heading n="01" label="About" title="I solve the problem behind the problem."/><p className="dp-about__body">{site.about}</p><a className="dp-underline" href="#contact">Let's build something useful ↗</a></div>
    <div className="dp-about__photo"><img src={media.aboutPhoto} alt="Matthew Enyina" loading="lazy"/><div><strong>Think clearly. Build carefully. Ship.</strong><small>01 / Philosophy</small></div></div>
  </div></section>;
}
function Experience() {
  return <section className="dp-section" id="experience"><div className="dp-wrap"><Heading n="02" label="Experience" title="From interface to infrastructure." intro="Work across product development, integrations and production operations."/><div className="dp-timeline">
    {experience.map((job,index)=><article className="dp-job" key={job.id}><span className="dp-index">{String(index+1).padStart(2,'0')}</span><div><h3>{job.company}</h3><p>{job.title}</p><p className="dp-job__desc">{job.description}</p></div><span className="dp-period">{job.period}</span></article>)}
  </div></div></section>;
}
function Skills() {
  return <section className="dp-section dp-section--alt" id="skills"><div className="dp-wrap"><Heading n="03" label="Toolkit" title="The stack serves the outcome."/><div className="dp-grid dp-grid--3">
    {skills.map((group)=><article className="dp-panel" key={group.id}><h3>{group.title}</h3><div className="dp-pills">{group.values.map((v)=><span key={v}>{v}</span>)}</div></article>)}
  </div></div></section>;
}
function Services() {
  return <section className="dp-section" id="services"><div className="dp-wrap"><Heading n="04" label="Capabilities" title="How I help products move forward."/><div className="dp-grid dp-grid--3">
    {services.map((s,i)=><article className="dp-service" key={s.id}><span className="dp-index">{String(i+1).padStart(2,'0')}</span><h3>{s.title}</h3><p>{s.detail}</p></article>)}
  </div></div></section>;
}
function ProjectCover({ project }) {
  const photo = project.imageKey ? media[project.imageKey] : null;
  return photo ? <img src={photo} alt={project.title+' project preview'} loading="lazy"/> : <div className="dp-cover-art" aria-hidden="true"><small>ME / PRODUCTION</small><strong>{project.order===0?'01':'02'}</strong><small>{project.category}</small></div>;
}
function Work() {
  const [filter, setFilter] = useState('All');
  const visible = filter==='All' ? allProjects : allProjects.filter((p)=>p.category===filter);
  return <section className="dp-section dp-section--alt" id="work"><div className="dp-wrap">
    <Heading n="05" label="Selected work" title="Products built. Systems improved." intro="Recent production engineering alongside earlier hands-on projects."/>
    <div className="dp-filters" role="group" aria-label="Filter projects">{['All','Production','Earlier projects'].map((name)=><button key={name} type="button" aria-pressed={filter===name} className={filter===name?'dp-filter dp-filter--on':'dp-filter'} onClick={()=>setFilter(name)}>{name}</button>)}</div>
    <div className="dp-grid dp-grid--2">
      {visible.map((p)=><article className="dp-project" key={p.slug}><a className="dp-project__cover" href={'/work/'+p.slug} aria-label={'Read about '+p.title}><ProjectCover project={p}/></a><div className="dp-project__body"><small className="dp-overline">{p.category}</small><h3><a href={'/work/'+p.slug}>{p.title} ↗</a></h3><p>{p.summary}</p><div className="dp-tags">{p.tags.map((t)=><span key={t}>{t}</span>)}</div></div></article>)}
    </div>
  </div></section>;
}
function Contact() {
  return <section className="dp-section dp-contact" id="contact"><div className="dp-wrap dp-contact__inner"><div>
    <p className="dp-overline">06 / CONTACT</p><h2>Have a problem worth solving?</h2><p>Tell me what you're trying to build, improve or rescue. I work with teams who value thoughtful execution.</p>
    <a className="dp-contact__mail" href={'mailto:'+site.email}>{site.email} ↗</a>
    <div className="dp-social"><Outbound href={site.github}>GitHub ↗</Outbound><Outbound href={site.linkedin}>LinkedIn ↗</Outbound></div>
  </div><form action="https://formspree.io/f/xbjbvgoo" method="POST" className="dp-form">
    <h3>Send a message</h3>
    <label htmlFor="portfolio-name">Your name</label><input id="portfolio-name" name="name" autoComplete="name" required maxLength="120" placeholder="Your name"/>
    <label htmlFor="portfolio-email">Email address</label><input id="portfolio-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com"/>
    <label htmlFor="portfolio-message">What are you working on?</label><textarea id="portfolio-message" name="message" required minLength="10" maxLength="5000" rows="5" placeholder="Tell me a little about your idea"/>
    <button type="submit" className="dp-btn dp-btn--accent">Send message ↗</button>
    <small>Message delivery uses the existing Formspree integration.</small>
  </form></div></section>;
}
const components={about:About,experience:Experience,skills:Skills,services:Services,work:Work,contact:Contact};
function Detail({ slug }) {
  const p=findProject(slug);
  if(!p) return <main id="main-content" className="dp-wrap dp-detail"><a href="/#work">← Back to work</a><h1>Project not found</h1><p>The project may have been unpublished or the link is incorrect.</p></main>;
  return <main id="main-content" className="dp-wrap dp-detail"><a className="dp-underline" href="/#work">← Back to work</a><p className="dp-overline">{p.category} / CASE STUDY</p><h1>{p.title}</h1><p className="dp-detail__intro">{p.summary}</p><div className="dp-detail__cover"><ProjectCover project={p}/></div>
    <div className="dp-detail__sections">{p.context&&<section><h2>The problem</h2><p>{p.context}</p></section>}{p.contribution&&<section><h2>What I did</h2><p>{p.contribution}</p></section>}{p.outcome&&<section><h2>The result</h2><p>{p.outcome}</p></section>}<section><h2>Tools & technologies</h2><div className="dp-tags">{p.tags.map((t)=><span key={t}>{t}</span>)}</div></section></div>
    {p.repositoryUrl&&<Outbound href={p.repositoryUrl} className="dp-btn dp-btn--quiet">View original source ↗</Outbound>}
  </main>;
}
export default function DynamicPortfolio() {
  const route=resolveRoute(window.location.pathname);
  return <div className="dp-app"><a href="#main-content" className="dp-skip">Skip to content</a><Header/>
    {route.kind==='home'?<main id="main-content"><Hero/>{sectionItems.map(({id})=>{const Component=components[id];return Component?<Component key={id}/>:null;})}</main>:<Detail slug={route.kind==='project'?route.slug:null}/>}
    <footer className="dp-footer"><div className="dp-wrap"><strong>ME<span>.</span></strong><p>Designed for what comes next.</p><small>© {new Date().getFullYear()} Matthew Enyina</small></div></footer>
  </div>;
}
