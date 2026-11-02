import { site, experience, skills, getFeaturedProjects, safeExternal } from './content.mjs';
import './resume.css';

const education = {
  degree: 'B.Eng. Marine Engineering',
  school: 'Niger Delta University',
  period: '2014 — 2021',
};

const strengths = [
  'End-to-end product engineering',
  'Backend APIs and integrations',
  'Payments, reliability and recovery',
  'AI-assisted engineering tools',
];

export default function ResumePage() {
  const github = safeExternal(site.github);
  const linkedin = safeExternal(site.linkedin);
  const personalProjects = getFeaturedProjects().filter(p => p.category === 'Independent');
  return <main id="main-content" className="resume-page fm-container">
    <div className="resume-page__actions">
      <a href="/#projects">← Back to selected work</a>
      <button type="button" onClick={() => window.print()} aria-label="Print resume or save as PDF">
        Print or save as PDF ↗
      </button>
    </div>

    <header className="resume-page__heading">
      <p className="resume-page__eyebrow">Résumé · November 2026</p>
      <h1>{site.name}</h1>
      <p className="resume-page__role">Senior Full-Stack Engineer · Product Platforms, APIs & AI Tooling</p>
      <p className="resume-page__meta">Lagos, Nigeria · Open to remote roles and consulting</p>
      <div className="resume-page__links">
        <a href={'mailto:' + site.email}>{site.email}</a>
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
      </div>
    </header>

    <div className="resume-page__intro">
      <p className="resume-page__opening">I build the parts of a product that have to work together: the screens people use, the APIs behind them, and the payments and integrations that make everything run.</p>
      <p>Over six years across healthcare, logistics, ordering and property technology, I've worked on both new features and the tricky failures that happen after launch. Outside my day job, I build AI engineering tools to make investigation, testing and coding-agent handoffs more dependable.</p>
      <div className="resume-page__strengths" aria-label="Engineering strengths">
        {strengths.map(item=><span key={item}>{item}</span>)}
      </div>
    </div>
    <nav className="resume-page__jump" aria-label="Explore this résumé">
      <a href="#resume-experience">01 / Experience <span>↓</span></a>
      <a href="#resume-projects">02 / Personal projects <span>↓</span></a>
      <a href="#resume-toolkit">03 / Technical skills <span>↓</span></a>
    </nav>

    <section id="resume-experience" aria-labelledby="resume-experience-heading">
      <div className="resume-page__section-head"><span>01</span><div><h2 id="resume-experience-heading">Professional experience</h2><p>Products I've worked on, and what I contributed.</p></div></div>
      {experience.map(job => <article className="resume-page__job" key={job.id}>
        <div className="resume-page__job-heading"><h3>{job.title} · {job.company}</h3><span>{job.period}</span></div>
        <p className="resume-page__job-impact">{job.impact}</p>
        <ul>{job.achievements.map(item=><li key={item}>{item}</li>)}</ul>
        {job.caseStudies&&<div className="resume-page__case-links">
          <span>More about this work</span>
          {job.caseStudies.map(item=><a className="resume-page__case-link" key={item.slug} href={'/work/'+item.slug}>{item.label} ↗</a>)}
        </div>}
      </article>)}
    </section>

    <section id="resume-projects" aria-labelledby="resume-projects-heading">
      <div className="resume-page__section-head"><span>02</span><div><h2 id="resume-projects-heading">Independent projects</h2><p>Things I've built because I wanted to solve a problem myself.</p></div></div>
      <div className="resume-page__work">
        {personalProjects.map((project, index) => <article key={project.slug} className="resume-page__project is-personal">
          <span className="resume-page__project-index">{String(index + 1).padStart(2, '0')} / PERSONAL PROJECT</span>
          <h3><a href={'/work/' + project.slug}>{project.title} ↗</a></h3>
          <p>{project.summary}</p>
          <p className="resume-page__project-contribution">{project.slug==='evidence-driven-ai-workflows'
            ? 'Built project-scoped rules, agent evaluation tests and Git-backed task handoffs. Still testing the full approval and rollback cycle.'
            : 'Built front/back garment editing, visual inspection, save/export and a garment-first preview. The mannequin and fabric realism are still in development.'}</p>
        </article>)}
      </div>
    </section>

    <section id="resume-toolkit" aria-labelledby="resume-toolkit-heading">
      <div className="resume-page__section-head"><span>03</span><div><h2 id="resume-toolkit-heading">Technical skills</h2><p>Technologies I've used to build and support products.</p></div></div>
      <div className="resume-page__skills">{skills.map(group => <div key={group.id}>
        <h3>{group.title}</h3><p>{group.values.join(' · ')}</p>
      </div>)}</div>
    </section>

    <section id="resume-education" aria-labelledby="resume-education-heading">
      <div className="resume-page__section-head"><span>04</span><div><h2 id="resume-education-heading">Education</h2></div></div>
      <p><strong>{education.degree}</strong> · {education.school} · {education.period}</p>
    </section>

    <aside className="resume-page__closing" aria-label="Continue the conversation">
      <div>
        <h2>There's more behind the job titles.</h2>
        <p>The project stories show how I approach real engineering problems. Or we can talk about what you're building.</p>
      </div>
      <a href={'mailto:' + site.email}>Let's talk →</a>
    </aside>
  </main>;
}
