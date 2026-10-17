import { site, experience, skills, getFeaturedProjects, safeExternal } from './content.mjs';
import './resume.css';

const education = {
  degree: 'B.Eng. Marine Engineering',
  school: 'Niger Delta University',
  period: '2014 — 2021',
};

const workHighlights = [
  'Delivered features across React/Expo clients, Node.js and TypeScript APIs, MongoDB/Prisma data models, integrations and operational workflows.',
  'Improved API performance through query optimization and geospatial indexing; my October résumé reports an approximately 70% reduction in response time.',
  'Built real-time and voice-assisted workflows, with reviewable structured data rather than blind automation.',
  'Worked on transaction-sensitive payment handling, idempotency, operational recovery, bulk imports and CRM integrations.',
];

export default function ResumePage() {
  const github = safeExternal(site.github);
  const linkedin = safeExternal(site.linkedin);
  return <main id="main-content" className="resume-page fm-container">
    <div className="resume-page__actions">
      <a href="/#projects">← Portfolio</a>
      <button type="button" onClick={() => window.print()} aria-label="Print resume or save as PDF">
        Print or save as PDF ↗
      </button>
    </div>
    <header className="resume-page__heading">
      <p className="resume-page__eyebrow">Public résumé · Updated October 2026</p>
      <h1>{site.name}</h1>
      <p className="resume-page__role">{site.title} · Node.js / TypeScript / React</p>
      <p className="resume-page__meta">Lagos, Nigeria · Open to remote roles and consulting</p>
      <div className="resume-page__links">
        <a href={'mailto:'+site.email}>{site.email}</a>
        {linkedin&&<a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
        {github&&<a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
      </div>
    </header>
    <section aria-labelledby="resume-summary">
      <h2 id="resume-summary">Profile</h2>
      <p>{site.about}</p>
    </section>
    <section aria-labelledby="resume-experience">
      <h2 id="resume-experience">Experience</h2>
      {experience.map(job => <article className="resume-page__job" key={job.id}>
        <div className="resume-page__job-heading"><h3>{job.title} · {job.company}</h3><span>{job.period}</span></div>
        <p>{job.description}</p>
        {job.id==='famasi'&&<ul>{workHighlights.map(highlight=><li key={highlight}>{highlight}</li>)}</ul>}
      </article>)}
    </section>
    <section aria-labelledby="resume-toolkit">
      <h2 id="resume-toolkit">Skills</h2>
      <div className="resume-page__skills">{skills.map(group=><div key={group.id}>
        <h3>{group.title}</h3><p>{group.values.join(' · ')}</p>
      </div>)}</div>
    </section>
    <section aria-labelledby="resume-projects">
      <h2 id="resume-projects">Selected work</h2>
      <div className="resume-page__work">{getFeaturedProjects().map(project=><article key={project.slug}>
        <h3><a href={'/work/'+project.slug}>{project.title} ↗</a></h3>
        <p>{project.summary}</p>
      </article>)}</div>
    </section>
    <section aria-labelledby="resume-education">
      <h2 id="resume-education">Education</h2>
      <p><strong>{education.degree}</strong> · {education.school} · {education.period}</p>
    </section>
    <p className="resume-page__footnote">This is the public, contact-safe version of my career summary. Specific impact figures reflect my self-reported résumé, not independent third-party measurements.</p>
  </main>;
}
