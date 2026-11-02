import { site, experience, skills, getFeaturedProjects, safeExternal } from './content.mjs';
import './resume.css';

const education = {
  degree: 'B.Eng. Marine Engineering',
  school: 'Niger Delta University',
  period: '2014 — 2021',
};

const workHighlights = [
  'Built and maintained web, mobile and backend features used across pharmacy ordering and operations.',
  'Improved API response times by tuning database queries and geospatial indexes.',
  'Worked on live order updates and voice-assisted ordering, keeping the customer review step in place.',
  'Debugged payment and wallet flows, retries, imports and third-party integrations.',
];

export default function ResumePage() {
  const github = safeExternal(site.github);
  const linkedin = safeExternal(site.linkedin);
  const featured = getFeaturedProjects();
  return <main id="main-content" className="resume-page fm-container">
    <div className="resume-page__actions">
      <a href="/#projects">← Back to my work</a>
      <button type="button" onClick={() => window.print()} aria-label="Print resume or save as PDF">
        Print or save as PDF ↗
      </button>
    </div>

    <header className="resume-page__heading">
      <p className="resume-page__eyebrow">Résumé · November 2026</p>
      <h1>{site.name}</h1>
      <p className="resume-page__role">Full-Stack Engineer · Web, Mobile, Backend & AI Tools</p>
      <p className="resume-page__meta">Lagos, Nigeria · Open to remote roles and consulting</p>
      <div className="resume-page__links">
        <a href={'mailto:' + site.email}>{site.email}</a>
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
      </div>
    </header>

    <div className="resume-page__intro">
      <p className="resume-page__opening">I build products from the interface down to the API. I especially enjoy the work that starts when something doesn't behave as expected: slow queries, payment failures, messy integrations and complicated handoffs.</p>
      <p>After years of working on those problems for product teams, I started building my own AI engineering toolkit to make research, testing and switching between coding assistants less repetitive.</p>
    </div>
    <nav className="resume-page__jump" aria-label="Explore this résumé">
      <a href="#resume-experience">01 / Work experience <span>↓</span></a>
      <a href="#resume-projects">02 / Selected projects <span>↓</span></a>
      <a href="#resume-toolkit">03 / Tools I use <span>↓</span></a>
    </nav>

    <section id="resume-experience" aria-labelledby="resume-experience-heading">
      <div className="resume-page__section-head"><span>01</span><div><h2 id="resume-experience-heading">Where I've worked</h2><p>Products for real people, with real constraints.</p></div></div>
      {experience.map(job => <article className="resume-page__job" key={job.id}>
        <div className="resume-page__job-heading"><h3>{job.title} · {job.company}</h3><span>{job.period}</span></div>
        <p>{job.description}</p>
        {job.id === 'famasi' && <>
          <ul>{workHighlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
          <a className="resume-page__case-link" href="/work/pharmacy-order-orchestration">Read about an order-flow problem I worked on →</a>
        </>}
      </article>)}
    </section>

    <section id="resume-projects" aria-labelledby="resume-projects-heading">
      <div className="resume-page__section-head"><span>02</span><div><h2 id="resume-projects-heading">What I've built beyond the job title</h2><p>Side projects help me test ideas I keep thinking about at work.</p></div></div>
      <div className="resume-page__work">
        {featured.map((project, index) => <article key={project.slug} className={project.category === 'Independent' ? 'resume-page__project is-personal' : 'resume-page__project'}>
          <span className="resume-page__project-index">{String(index + 1).padStart(2, '0')} / {project.category === 'Independent' ? 'Personal' : 'Work'}</span>
          <h3><a href={'/work/' + project.slug}>{project.title} ↗</a></h3>
          <p>{project.summary}</p>
        </article>)}
      </div>
      <p className="resume-page__project-note">The personal AI code isn't public. Moatt is open to explore; the work examples are high-level.</p>
    </section>

    <section id="resume-toolkit" aria-labelledby="resume-toolkit-heading">
      <div className="resume-page__section-head"><span>03</span><div><h2 id="resume-toolkit-heading">Tools I use</h2><p>I pick tools based on the problem, not the other way around.</p></div></div>
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
        <h2>Enough about the résumé.</h2>
        <p>If you're building a product or hiring someone to solve the tricky parts, I'd be glad to hear about it.</p>
      </div>
      <a href={'mailto:' + site.email}>Let's talk →</a>
    </aside>
  </main>;
}
