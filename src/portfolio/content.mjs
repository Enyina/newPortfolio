/**
 * Curated PUBLIC content. Drafts, private screenshots, credentials and unapproved
 * employer material never belong in this browser-delivered module.
 * Career source: owner's 2026-10-05 CV. Narrative assertions are owner-reported,
 * NOT independently measured by this website.
 */
export const site = {
  name: 'Matthew Enyina',
  title: 'Full-Stack Engineer | AI Tools & Product Engineering',
  email: 'enyina3848@gmail.com',
  intro: 'I build web and mobile products, solve the backend problems behind them, and make tools that improve how I work.',
  about: 'I’m a software engineer based in Lagos. For over six years, I’ve worked across web apps, mobile apps, APIs and the less glamorous things that keep products running. I enjoy untangling difficult bugs, making payment flows reliable and finding better ways to build. My latest personal project is an AI engineering toolkit I use to research problems, test ideas and carry work between coding assistants.',
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
    description: 'I work across patient apps, internal tools and the APIs behind medication ordering, payments and pharmacy operations.',
    impact: 'Building and improving the systems that keep an order moving from request to fulfillment.',
    achievements: [
      'Deliver full-stack features across React, React Native and Node.js/TypeScript, connecting the customer experience to pharmacy and operations workflows.',
      'Build and debug real-time pharmacy offers, order updates and handoffs, making failed or stalled steps easier to investigate.',
      'Work on payment, wallet and external-provider integrations, with particular attention to repeat requests, uncertain outcomes and recovery.',
      'Improve API responsiveness through database query tuning and geospatial indexing.',
    ],
    caseStudies: [
      {label:'Order workflows',slug:'pharmacy-order-orchestration'},
      {label:'Payments and recovery',slug:'payment-payout-reliability'},
      {label:'Voice-assisted ordering',slug:'voice-assisted-ordering'},
    ],
    tags: ['TypeScript', 'Node.js', 'React Native', 'MongoDB', 'Payments'],
  },
  {
    id: 'dabaobject', title: 'Frontend Engineer (Contract)', company: 'DabaObject LLC',
    period: 'Jan 2024 — May 2024',
    description: 'Built interfaces for a mobile-first restaurant ordering experience.',
    impact: 'Making a multi-step ordering journey feel clear on smaller screens.',
    achievements: [
      'Developed responsive ordering screens and reusable React components for browsing and placing orders.',
      'Worked on the front-end details that connect customer actions to order and delivery workflows.',
    ],
    tags: ['React', 'Responsive UI', 'Reusable components'],
  },
  {
    id: 'yebox', title: 'Backend Engineer', company: 'YEBOX',
    period: 'Aug 2023 — Jan 2024',
    description: 'Worked on the backend of an existing logistics product.',
    impact: 'Making a legacy service easier to maintain, test and integrate.',
    achievements: [
      'Investigated performance and reliability problems in Node.js and PostgreSQL services.',
      'Added automated regression checks and clearer integration documentation while improving existing workflows.',
    ],
    tags: ['Node.js', 'PostgreSQL', 'API testing'],
  },
  {
    id: 'howmies', title: 'Full-Stack Engineer', company: 'Howmies',
    period: 'Jan 2020 — Aug 2023',
    description: 'Built features across a property rental product, from the interface to the backend.',
    impact: 'Turning property discovery into a booking flow people could actually complete.',
    achievements: [
      'Worked across property search, booking, payment and notification features.',
      'Connected application screens, APIs and integrations, and helped maintain and deploy the product.',
    ],
    tags: ['React', 'Node.js', 'Bookings', 'Payments'],
  },
];

export const skills = [
  { id: 'backend', title: 'Backend & APIs', values: ['Node.js', 'TypeScript', 'Express', 'NestJS', 'REST APIs', 'WebSockets', 'Socket.IO'] },
  { id: 'frontend', title: 'Frontend & mobile', values: ['React', 'React Native', 'Expo', 'Tailwind', 'TanStack Query', 'Zustand'] },
  { id: 'data', title: 'Data & reliability', values: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma', 'Redis', 'Idempotency', 'Testing'] },
  { id: 'delivery', title: 'Cloud & integrations', values: ['DigitalOcean', 'Docker', 'GitHub Actions', 'CI/CD', 'Payments', 'CRM'] },
  { id: 'ai-engineering', title: 'AI & developer tools', values: ['Codex', 'MCP', 'Agent testing', 'Python', 'CLI tools', 'GitHub Actions', 'Workflow design'] },
];

export const services = [
  { id: 'product', title: 'Web and mobile products', detail: 'From the first interface to the API and everything it needs to work in production.' },
  { id: 'apis', title: 'Backends and integrations', detail: 'Payments, real-time updates, third-party APIs and the bugs that come with them.' },
  { id: 'reliability', title: 'Fixing what breaks', detail: 'Slow requests, unreliable flows, retries and production issues that need proper answers.' },
  { id: 'ai-systems', title: 'AI tools for engineering', detail: 'Building practical tools around coding agents, testing, research and handoffs between sessions.' },
];

export const projects = [
  {
    slug: 'pharmacy-order-orchestration', title: 'Keeping pharmacy orders on track',
    category: 'Production', statusLabel: 'Work experience', placement: 'featured',
    summary: 'Making it easier to follow an order as it moves between customers, pharmacies and the operations team.',
    context: 'An order can involve several people and systems. When one step stalls, everyone needs to know what happened and what comes next.',
    contribution: 'Worked on real-time pharmacy offers, order updates and the screens operators use to track progress. The focus was making each handoff easier to follow and harder to get wrong.',
    outcome: 'Gave the team clearer visibility into what was happening with an order and where someone needed to step in.',
    turningPoint: 'The hard part is what happens between steps. If an order gets stuck, the next person should be able to see where and why.',
    lessons: 'A good order flow needs to explain what happened when something goes wrong—not just work on the happy path.',
    tags: ['Node.js', 'TypeScript', 'React', 'Socket.IO', 'MongoDB'],
    evidenceNote: 'A high-level account of my work. Internal systems and customer information stay private.',
    published: true, visible: true, order: 1,
  },
  {
    slug: 'payment-payout-reliability', title: 'Making payments safer to retry',
    category: 'Production', statusLabel: 'Work experience', placement: 'featured',
    summary: 'Handling the moments when a payment times out, a callback arrives twice or nobody knows whether a transaction succeeded.',
    context: 'A timeout does not always mean a payment failed. Blindly retrying can create a second problem while trying to solve the first.',
    contribution: 'Worked on payment confirmations, wallet and payout flows, repeat-safe requests and the checks needed to investigate unexpected results.',
    outcome: 'Made unusual transaction states easier to investigate and recover from without guessing what happened.',
    turningPoint: 'A timeout is not always a failed payment. The safest next step starts with checking what the provider actually recorded.',
    lessons: 'When money moves, knowing what actually happened matters more than trying again quickly.',
    tags: ['Node.js', 'Paystack', 'MongoDB', 'Background processing'],
    evidenceNote: 'The work is described without exposing transaction records or internal payment systems.',
    published: true, visible: true, order: 2,
  },
  {
    slug: 'voice-assisted-ordering', title: 'Turning spoken requests into usable orders',
    category: 'Production', statusLabel: 'Work experience', placement: 'featured',
    summary: 'Helping people place orders in their own words, while giving them a chance to check what the system understood.',
    context: 'People talk naturally. Order forms do not. The difficult part is turning a spoken request into something accurate without taking control away from the customer.',
    contribution: 'Worked on the flow from speech input to structured order details and on the review step before submission.',
    outcome: 'A more natural way to start an order, with room for the customer to catch mistakes before they matter.',
    turningPoint: 'Speech recognition makes a form easier to start, but it also makes reviewing the details before submission more important.',
    lessons: 'AI can make a form easier to fill, but the customer should always get the final say.',
    tags: ['React', 'Node.js', 'Voice interaction', 'Structured data'],
    evidenceNote: 'No customer recordings or private medical details are shown.',
    published: true, visible: true, order: 3,
  },
  {
    slug: 'moatt-studio', title: 'Moatt — designing clothes in the browser',
    category: 'Independent', statusLabel: 'Public prototype', placement: 'featured',
    summary: 'A browser-based clothing studio with front-and-back artwork, a garment-first preview and an optional mannequin.',
    context: 'I wanted to try a design on a garment, turn it around and inspect the details without jumping between different tools.',
    contribution: 'Built an editor for artwork, text and garment changes, with front/back previews, close-up inspection, save and export. The garment-only view is now the default; the mannequin remains an option.',
    outcome: 'The garment-first editor is merged into the public project, with a hosted preview recorded in the project. I’m still improving the silhouette, fabric realism and mannequin. This is for exploring ideas, not manufacturing patterns.',
    turningPoint: 'The editor became more useful with a garment-only view, but the mannequin and fabric still need the visual quality I want.',
    lessons: 'Good inspection tools help, but the garment itself has to look convincing. That is still the biggest design challenge.',
    tags: ['React', '3D UI', 'Product design', 'Testing'],
    repositoryUrl: 'https://github.com/Enyina/moatt',
    demoUrl: 'https://enyina.github.io/moatt/',
    evidenceNote: 'Source and release notes are public. The prototype is still being refined; the latest live preview has not been rechecked here.',
    published: true, visible: true, order: 4,
  },
  {
    slug: 'evidence-driven-ai-workflows', title: 'My personal AI engineering toolkit',
    category: 'Independent', statusLabel: 'Private project · In progress', placement: 'featured',
    summary: 'A collection of tools I built to research engineering problems, test coding assistants and resume work across projects and sessions.',
    context: 'I use coding assistants a lot, and I kept repeating myself: explaining project rules, checking suggestions and recovering context after switching tools. I started building my own system to make that work less fragile.',
    contribution: 'Built a rules system that separates personal and work contexts, a research assistant for comparing approaches, a test runner for coding-agent skills and a Git-backed handoff format for Codex and Antigravity. More recently I added an experimental local skill installer, a toolbox for finding relevant resources and setup guidance for using selected skills across ChatGPT conversations. Those last integrations still need hands-on acceptance checks.',
    outcome: 'The tools can already check project boundaries, generate reviewable suggestions and record task handoffs. One recorded Codex run passed 323 software tests. In a 15-task comparison, a proposed writing skill scored higher on phrase matching but made one answer worse, so I kept it out. The complete automatic learning, approval and rollback cycle is still being tested.',
    turningPoint: 'One proposed skill scored better on a test, but made a real answer less useful. I chose not to add it.',
    lessons: 'More instructions aren’t always better. The useful part is being able to check the result, pick up where I left off and know when not to use a new rule.',
    tags: ['Codex', 'AI engineering', 'Agent evaluation', 'MCP', 'Testing', 'Developer tooling', 'Privacy'],
    evidenceNote: 'The interactive walkthrough is illustrative. The code, evaluation traces and unapproved rules stay private.',
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
