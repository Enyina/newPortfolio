/**
 * Curated PUBLIC content. Drafts, private screenshots, credentials and unapproved
 * employer material never belong in this browser-delivered module.
 * Career source: owner's 2026-10-05 CV. Narrative assertions are owner-reported,
 * NOT independently measured by this website.
 */
export const site = {
  name: 'Matthew Enyina',
  title: 'Senior Full-Stack Product Engineer',
  email: 'enyina3848@gmail.com',
  intro: 'I take complex product problems from discovery to dependable production software — APIs, payments, real-time systems and the interfaces people actually use.',
  about: 'I am a Lagos-based full-stack product engineer with 6+ years of experience across healthcare, logistics, SaaS and property technology. I work across Node.js and TypeScript APIs, React and React Native, databases, integrations, deployment and production debugging. I focus on what a product needs to accomplish, how it can fail, and what happens after it ships.',
  location: 'Lagos, Nigeria · Remote worldwide',
  github: 'https://github.com/Enyina',
  linkedin: 'https://www.linkedin.com/in/enyina-matthew/',
};

export const sections = [
  { id: 'about', order: 0, visible: true },
  { id: 'experience', order: 1, visible: true },
  { id: 'work', order: 2, visible: true },
  { id: 'skills', order: 3, visible: true },
  { id: 'services', order: 4, visible: true },
  { id: 'testimonials', order: 5, visible: false },
  { id: 'contact', order: 6, visible: true },
];

export const experience = [
  {
    id: 'famasi', title: 'Senior Full-Stack Product Engineer', company: 'Famasi Africa',
    period: 'Jun 2024 — Present',
    description: 'Own features across web/mobile interfaces, Node.js and TypeScript APIs, MongoDB/Prisma workflows, payments, real-time pharmacy coordination and production reliability.',
    highlight: 'Owner-reported in résumé: ~70% improvement in API response time after query and geospatial-index work.',
    tags: ['Product delivery', 'Backend systems', 'Healthcare'],
  },
  {
    id: 'dabaobject', title: 'Frontend Engineer (Contract)', company: 'DabaObject LLC',
    period: 'Jan 2024 — May 2024',
    description: 'Built a mobile-first restaurant-ordering experience with reusable React and Tailwind components, and automated delivery workflows.',
    tags: ['React', 'Design systems', 'Ordering'],
  },
  {
    id: 'yebox', title: 'Backend Engineer', company: 'YEBOX',
    period: 'Aug 2023 — Jan 2024',
    description: 'Improved a legacy Node.js and PostgreSQL logistics service, introduced automated tests and made integration documentation clearer.',
    tags: ['Node.js', 'PostgreSQL', 'Testing'],
  },
  {
    id: 'howmies', title: 'Full-Stack Engineer', company: 'Howmies',
    period: 'Jan 2020 — Aug 2023',
    description: 'Worked on a property-rental product covering discovery, bookings, payments, notifications and deployment.',
    tags: ['Node.js', 'React', 'PropTech'],
  },
];

export const skills = [
  { id: 'backend', title: 'Backend & APIs', values: ['Node.js', 'TypeScript', 'Express', 'NestJS', 'REST APIs', 'WebSockets', 'Socket.IO'] },
  { id: 'frontend', title: 'Frontend & mobile', values: ['React', 'React Native', 'Expo', 'Tailwind', 'TanStack Query', 'Zustand'] },
  { id: 'data', title: 'Data & reliability', values: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma', 'Redis', 'Idempotency', 'Testing'] },
  { id: 'delivery', title: 'Cloud, integrations & AI', values: ['DigitalOcean', 'Docker', 'GitHub Actions', 'CI/CD', 'Payments', 'CRM', 'AI-assisted engineering'] },
];

export const services = [
  { id: 'product', title: 'Full-stack product delivery', detail: 'Clarify the user problem, build the workflow end to end and support it after launch.' },
  { id: 'apis', title: 'APIs and complex integrations', detail: 'Make third-party services, payments and real-time operations behave predictably.' },
  { id: 'reliability', title: 'Production improvements', detail: 'Find bottlenecks, understand failures and strengthen critical business flows.' },
];

export const projects = [
  {
    slug: 'pharmacy-order-orchestration', title: 'Making pharmacy order fulfillment observable',
    category: 'Production', statusLabel: 'Employer case study', placement: 'featured',
    summary: 'Turning a multi-party medication request into a traceable process across pharmacy responses, patient decisions and operations.',
    context: 'Medication requests require several independent participants to respond in the right order. The difficult problem is visibility and coordinated state, not simply collecting an order form.',
    contribution: 'Contributed to real-time request and offer workflows, bid handling, state-transition safeguards, pharmacy coordination and operator-facing progress tracking across web and mobile.',
    outcome: 'More structured handoffs and clearer points of intervention for an operational team. Specific business impact figures need approval before publication.',
    lessons: 'Model who may advance each step, expose stalled work and make asynchronous workflows recoverable.',
    tags: ['Node.js', 'TypeScript', 'React', 'Socket.IO', 'MongoDB'],
    evidenceNote: 'Scope and responsibilities described in the October 2026 résumé and owner project discussions. No internal diagrams or customer information published.',
    published: true, visible: true, order: 0,
  },
  {
    slug: 'payment-payout-reliability', title: 'Designing safer payment and payout workflows',
    category: 'Production', statusLabel: 'Employer case study', placement: 'featured',
    summary: 'Reducing ambiguity in transaction-sensitive operations with explicit states, repeat-safe requests and careful recovery.',
    context: 'A payment or payout can fail, time out or return an uncertain result. Retrying without verifying the earlier attempt can make a financial error worse.',
    contribution: 'Worked on payment confirmation, wallet and payout flow integrity, idempotency, monitored processing and guarded exception handling.',
    outcome: 'A more deliberate basis for diagnosing and resolving exceptional payment states. Public claims stop short of asserting financial guarantees or metrics not independently verified.',
    lessons: 'For irreversible operations, prioritize auditability and verified outcomes over blindly automatic retries.',
    tags: ['Node.js', 'Paystack', 'MongoDB', 'Background processing'],
    evidenceNote: 'Resume and owner-described responsibilities; no private settlement data, internal endpoints or security details.',
    published: true, visible: true, order: 1,
  },
  {
    slug: 'voice-assisted-ordering', title: 'From spoken requests to reviewable orders',
    category: 'Production', statusLabel: 'Employer case study', placement: 'featured',
    summary: 'A voice-assisted ordering experience that turns natural-language requests into structured information users can check.',
    context: 'People describe medication needs in everyday language, but order systems need precise, structured fields and an opportunity to correct misunderstandings.',
    contribution: 'Built or improved the handoff from speech transcription to structured, reviewable application data and the surrounding full-stack ordering experience.',
    outcome: 'A practical AI-assisted interface with human verification in the loop, rather than treating every model interpretation as an unquestionable instruction.',
    lessons: 'Preserve user control at the boundary between uncertain language understanding and a real-world order.',
    tags: ['React', 'Node.js', 'Voice interaction', 'Structured data'],
    evidenceNote: 'Featured in the October 2026 résumé. No customer recordings, private prompts, patient data or internal source.',
    published: true, visible: true, order: 2,
  },
  {
    slug: 'moatt-studio', title: 'Moatt Studio — clothing concepts on a mannequin',
    category: 'Independent', statusLabel: 'Public prototype', placement: 'featured',
    summary: 'A browser-based studio for experimenting with garment shapes, colors and artwork on a mannequin.',
    context: 'Simple garment mockups are useful long before a brand needs manufacturing-grade patterns or realistic fabric simulation.',
    contribution: 'Designed a 2D artwork and 3D mannequin workflow with front/back editing, layer controls, import/export and usability checks.',
    outcome: 'A working prototype and public engineering record. It is not a physically accurate fitting tool or production garment-pattern generator.',
    lessons: 'Separate a useful conceptual mockup from a manufacturing guarantee, and test interaction conflicts across desktop and touch.',
    tags: ['React', '3D UI', 'Product design', 'Testing'],
    repositoryUrl: 'https://github.com/Enyina/moatt',
    evidenceNote: 'Source and explicit limitations in the public Moatt repository, reviewed October 2026.',
    published: true, visible: true, order: 3,
  },
  {
    slug: 'evidence-driven-ai-workflows', title: 'An evidence-driven AI engineering workflow',
    category: 'Independent', statusLabel: 'In progress · Private code', placement: 'featured',
    summary: 'A personal system for evaluating proven approaches, reusing scoped engineering guidance and reviewing lessons before adoption.',
    context: 'AI-assisted coding can become inconsistent when source claims, company rules and reusable guidance are mixed together without evidence or boundaries.',
    contribution: 'Developed a personal approach to reverse-engineering first, comparing options, applying project-scoped rules and creating reviewable learning proposals.',
    outcome: 'A structured private rules and research workflow; some learning pipelines are still planned or partially implemented, not autonomous end-to-end systems.',
    lessons: 'Useful automation needs provenance, tests, permission boundaries and deliberate promotion of learned rules.',
    tags: ['AI-assisted development', 'Research', 'Testing', 'Automation'],
    evidenceNote: 'Summarized only from approved personal project documentation. Private repository and policy contents are not linked or reproduced.',
    published: true, visible: true, order: 4,
  },
  {
    slug: 'shop-kego', title: 'Shop@Kego', category: 'Earlier projects', placement: 'archive',
    summary: 'Earlier e-commerce project with server-side product, account and checkout building blocks.',
    tags: ['Node.js', 'Express', 'MongoDB'], repositoryUrl: 'https://github.com/Enyina/shop-kego',
    published: true, visible: true, order: 5,
  },
  {
    slug: 'hitours', title: 'HiTours', category: 'Earlier projects', placement: 'archive',
    summary: 'Earlier tour-booking project with Express, MongoDB and booking workflows.',
    tags: ['Node.js', 'Express', 'MongoDB'], repositoryUrl: 'https://github.com/Enyina/Hitours',
    published: true, visible: true, order: 6,
  },
  {
    slug: 'social-media-app', title: 'Social Media App', category: 'Earlier projects', placement: 'archive',
    summary: 'Earlier social application experiment.', tags: ['React', 'JavaScript'],
    repositoryUrl: 'https://github.com/Enyina/social__media-app', published: true, visible: true, order: 7,
  },
  {
    slug: 'messaging-app', title: 'Messaging App', category: 'Earlier projects', placement: 'archive',
    summary: 'Earlier messaging interface experiment.', tags: ['React', 'JavaScript'],
    repositoryUrl: 'https://github.com/Enyina/Messager__App', published: true, visible: true, order: 8,
  },
  {
    slug: 'inventory-app', title: 'Inventory App', category: 'Earlier projects', placement: 'archive',
    summary: 'Earlier inventory management experiment.', tags: ['React', 'JavaScript'],
    repositoryUrl: 'https://github.com/Enyina/Inventory-App', published: true, visible: true, order: 9,
  },
  {
    slug: 'video-sharing-app', title: 'Video Sharing App', category: 'Earlier projects', placement: 'archive',
    summary: 'Earlier video sharing experiment.', tags: ['React', 'JavaScript'],
    repositoryUrl: 'https://github.com/Enyina/Video__sharing-App', published: true, visible: true, order: 10,
  },
];

const ids = new Set(['about','experience','skills','services','work','testimonials','contact']);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const validSlug = value => typeof value === 'string' && value.length > 0 && value.length <= 100 && slugPattern.test(value);

export function getVisibleSections(rows = sections) {
  if (!Array.isArray(rows)) throw new TypeError('Invalid sections');
  const seen = new Set();
  return rows.filter(row => {
    if (!row || !ids.has(row.id)) return false;
    if (seen.has(row.id)) throw new Error('Duplicate section: ' + row.id);
    seen.add(row.id);
    return row.visible === true && Number.isSafeInteger(row.order) && row.order >= 0;
  }).sort((a,b) => a.order - b.order || a.id.localeCompare(b.id));
}

export function getPublishedProjects(rows = projects) {
  if (!Array.isArray(rows)) throw new TypeError('Invalid projects');
  const seen = new Set();
  return rows.filter(p => {
    if (!p || p.published !== true || p.visible !== true || !validSlug(p.slug)) return false;
    if (seen.has(p.slug)) throw new Error('Duplicate public project slug: ' + p.slug);
    seen.add(p.slug);
    return Number.isSafeInteger(p.order) && p.order >= 0;
  }).sort((a,b) => a.order - b.order || a.slug.localeCompare(b.slug));
}
export const getFeaturedProjects = rows => getPublishedProjects(rows).filter(p => p.placement === 'featured');
export const getArchiveProjects = rows => getPublishedProjects(rows).filter(p => p.placement === 'archive');
export const findProject = (slug, rows = projects) => validSlug(slug)
  ? getPublishedProjects(rows).find(p => p.slug === slug) ?? null : null;

export function resolveRoute(path) {
  if (path === '/' || path === '/index.html') return {kind:'home'};
  if (typeof path !== 'string') return {kind:'not-found'};
  const match = /^\/(?:work|project)\/([^/]+)\/?$/.exec(path);
  return match && validSlug(match[1]) ? {kind:'project',slug:match[1]} : {kind:'not-found'};
}
export function safeExternal(value) {
  if (typeof value !== 'string') return null;
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
  catch { return null; }
}
