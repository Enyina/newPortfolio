/**
 * Curated PUBLIC content. Drafts, private screenshots, credentials and unapproved
 * employer material never belong in this browser-delivered module.
 * Career source: owner's 2026-10-05 CV. Narrative assertions are owner-reported,
 * NOT independently measured by this website.
 */
export const site = {
  name: 'Matthew Enyina',
  title: 'Full-Stack Product Engineer · AI Systems Builder',
  email: 'enyina3848@gmail.com',
  intro: 'I build software that holds up when things get complicated. I also build tools that make AI-assisted engineering more reliable.',
  about: 'I’m a Lagos-based engineer with 6+ years of experience building products across healthcare, logistics, SaaS and property technology. I work from the interface all the way down to the API, database and deployment. I spend a lot of time on the problems that show up after launch: slow systems, messy integrations, failed payments and hard-to-reproduce bugs. Lately, I’ve also been building my own AI engineering tools, because I want more than code that looks right. I want to know it works.',
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
    description: 'Build and maintain the web, mobile and backend systems behind medication orders, payments and pharmacy operations.'
    highlight: 'Improved API response times by tuning database queries and geospatial indexes.',
    tags: ['Product delivery', 'Backend systems', 'Healthcare'],
  },
  {
    id: 'dabaobject', title: 'Frontend Engineer (Contract)', company: 'DabaObject LLC',
    period: 'Jan 2024 — May 2024',
    description: 'Built a mobile-first restaurant ordering experience with reusable React components and smoother delivery workflows.',
    tags: ['React', 'Design systems', 'Ordering'],
  },
  {
    id: 'yebox', title: 'Backend Engineer', company: 'YEBOX',
    period: 'Aug 2023 — Jan 2024',
    description: 'Worked through performance and reliability issues in an existing logistics backend, then backed the fixes with tests and clearer documentation.',
    tags: ['Node.js', 'PostgreSQL', 'Testing'],
  },
  {
    id: 'howmies', title: 'Full-Stack Engineer', company: 'Howmies',
    period: 'Jan 2020 — Aug 2023',
    description: 'Built features across property search, bookings, payments and notifications, and helped keep the product running.',
    tags: ['Node.js', 'React', 'PropTech'],
  },
];

export const skills = [
  { id: 'backend', title: 'Backend & APIs', values: ['Node.js', 'TypeScript', 'Express', 'NestJS', 'REST APIs', 'WebSockets', 'Socket.IO'] },
  { id: 'frontend', title: 'Frontend & mobile', values: ['React', 'React Native', 'Expo', 'Tailwind', 'TanStack Query', 'Zustand'] },
  { id: 'data', title: 'Data & reliability', values: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma', 'Redis', 'Idempotency', 'Testing'] },
  { id: 'delivery', title: 'Cloud & integrations', values: ['DigitalOcean', 'Docker', 'GitHub Actions', 'CI/CD', 'Payments', 'CRM'] },
  { id: 'ai-engineering', title: 'AI systems & evaluation', values: ['Codex', 'MCP tooling', 'Agent evaluation', 'Prompt-injection testing', 'Skill lifecycle gates', 'Trust boundaries', 'Evidence-led research'] },
];

export const services = [
  { id: 'product', title: 'Full-stack product delivery', detail: 'Clarify the user problem, build the workflow end to end and support it after launch.' },
  { id: 'apis', title: 'APIs and complex integrations', detail: 'Make third-party services, payments and real-time operations behave predictably.' },
  { id: 'reliability', title: 'Production improvements', detail: 'Find bottlenecks, understand failures and strengthen critical business flows.' },
  { id: 'ai-systems', title: 'AI engineering and evaluation', detail: 'Build AI-assisted workflows, test them on real tasks and catch bad suggestions before they become a problem.' },
];

export const projects = [
  {
    slug: 'pharmacy-order-orchestration', title: 'Keeping pharmacy orders on track',
    category: 'Production', statusLabel: 'Work experience', placement: 'featured',
    summary: 'Making it easier to follow an order as it moves between customers, pharmacies and the operations team.',
    context: 'An order can involve several people and systems. When one step stalls, everyone needs to know what happened and what comes next.',
    contribution: 'Worked on real-time pharmacy offers, order updates and the screens operators use to track progress. The focus was making each handoff easier to follow and harder to get wrong.',
    outcome: 'Gave the team clearer visibility into what was happening with an order and where someone needed to step in.',
    lessons: 'A good order flow needs to explain what happened when something goes wrong—not just work on the happy path.',
    tags: ['Node.js', 'TypeScript', 'React', 'Socket.IO', 'MongoDB'],
    evidenceNote: 'A high-level account of my work. Internal systems and customer information stay private.',
    published: true, visible: true, order: 1,
  },
  {
    slug: 'payment-payout-reliability', title: 'Making payments safer to retry',
    category: 'Production', statusLabel: 'Employer case study', placement: 'featured',
    summary: 'Handling the moments when a payment times out, a callback arrives twice or nobody knows whether a transaction succeeded.',
    context: 'A timeout does not always mean a payment failed. Blindly retrying can create a second problem while trying to solve the first.',
    contribution: 'Worked on payment confirmations, wallet and payout flows, repeat-safe requests and the checks needed to investigate unexpected results.',
    outcome: 'Made unusual transaction states easier to investigate and recover from without guessing what happened.',
    lessons: 'When money moves, knowing what actually happened matters more than trying again quickly.',
    tags: ['Node.js', 'Paystack', 'MongoDB', 'Background processing'],
    evidenceNote: 'The work is described without exposing transaction records or internal payment systems.',
    published: true, visible: true, order: 2,
  },
  {
    slug: 'voice-assisted-ordering', title: 'Turning spoken requests into usable orders',
    category: 'Production', statusLabel: 'Employer case study', placement: 'featured',
    summary: 'Helping people place orders in their own words, while giving them a chance to check what the system understood.',
    context: 'People talk naturally. Order forms do not. The difficult part is turning a spoken request into something accurate without taking control away from the customer.',
    contribution: 'Worked on the flow from speech input to structured order details and on the review step before submission.',
    outcome: 'A more natural way to start an order, with room for the customer to catch mistakes before they matter.',
    lessons: 'AI can make a form easier to fill, but the customer should always get the final say.',
    tags: ['React', 'Node.js', 'Voice interaction', 'Structured data'],
    evidenceNote: 'No customer recordings or private medical details are shown.',
    published: true, visible: true, order: 3,
  },
  {
    slug: 'moatt-studio', title: 'Moatt — designing clothes in the browser',
    category: 'Independent', statusLabel: 'Public prototype', placement: 'featured',
    summary: 'A personal clothing-design studio for trying out garment shapes, fabrics and artwork before making the real thing.',
    context: 'Most clothing mockups make it hard to imagine the finished piece. I wanted a faster way to experiment visually.',
    contribution: 'Built front-and-back design controls, artwork layers and a 3D preview, then kept improving the clothing shape and feel.',
    outcome: 'A working prototype I can keep testing. The fabric realism and mannequin still need work before it is something I would rely on for production.',
    lessons: 'If the clothing does not look believable, the number of editing features does not matter.',
    tags: ['React', '3D UI', 'Product design', 'Testing'],
    repositoryUrl: 'https://github.com/Enyina/moatt',
    evidenceNote: 'The code is public; the design studio is still a work in progress.',
    published: true, visible: true, order: 4,
  },
  {
    slug: 'evidence-driven-ai-workflows', title: 'Building an AI engineering system I can trust',
    category: 'Independent', statusLabel: 'Private project · In progress', placement: 'featured',
    summary: 'My private toolkit for researching engineering problems, testing AI suggestions and keeping unproven ideas out of the rules I actually use.',
    context: 'I use AI to build software, but I kept running into the same problem: a convincing answer is not necessarily a correct one. I wanted a way to test what an assistant suggests before making it part of how I work.',
    contribution: 'Built a personal rule system, research tools, real Codex comparison tests and a review process for new skills. The pieces work together to keep different projects separate, compare an idea against a baseline and stop changes that have not earned approval. I am also working on a smaller, more focused way to load only the MCP skills a task needs.',
    outcome: 'One local test run passed 323 checks. I also compared 15 Codex answers with and without a proposed skill. The score looked better with the skill, but reading the answers revealed a trade-off I was not happy with. I left it out. The next step is proving that the full approval and rollback process works in a real test environment.',
    lessons: 'The best part of this project is that it caught a reason not to trust its own score. I would rather keep a good idea in testing than turn a mistake into a rule everyone follows.',
    tags: ['Codex', 'AI engineering', 'Agent evaluation', 'MCP', 'Testing', 'Developer tooling', 'Privacy'],
    evidenceNote: 'The walkthrough uses made-up examples. My source code and original test sessions are private.',
    published: true, visible: true, order: 0,
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
  if (path === '/resume' || path === '/resume/') return {kind:'resume'};
  if (typeof path !== 'string') return {kind:'not-found'};
  const match = /^\/(?:work|project)\/([^/]+)\/?$/.exec(path);
  return match && validSlug(match[1]) ? {kind:'project',slug:match[1]} : {kind:'not-found'};
}
export function safeExternal(value) {
  if (typeof value !== 'string') return null;
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
  catch { return null; }
}
