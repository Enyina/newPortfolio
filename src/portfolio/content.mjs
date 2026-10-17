/**
 * The browser receives PUBLISHED content only.
 * Never put drafts, unpublished media, auth credentials or tokens here.
 */
export const site = {
  name: 'Matthew Enyina',
  title: 'Senior Full-Stack Product Engineer',
  email: 'enyina3848@gmail.com',
  intro: 'I build dependable digital products—from intuitive interfaces to payments, integrations and production systems.',
  about: 'I am a product-minded engineer working with Node.js, TypeScript, React and React Native. I tackle the real problem behind a requirement, build practical solutions, and own reliability after launch.',
  location: 'Lagos, Nigeria · Working remotely',
  github: 'https://github.com/Enyina',
  linkedin: 'https://www.linkedin.com/in/enyina-matthew/',
};
export const sections = [
  { id: 'about', order: 0, visible: true },
  { id: 'experience', order: 1, visible: true },
  { id: 'skills', order: 2, visible: true },
  { id: 'services', order: 3, visible: true },
  { id: 'work', order: 4, visible: true },
  { id: 'testimonials', order: 5, visible: false },
  { id: 'contact', order: 6, visible: true },
];
export const experience = [
  { id: 'famasi', title: 'Senior Full-Stack Product Engineer', company: 'Famasi Africa', period: '2024 — present', description: 'Building and operating healthcare ordering, pharmacy coordination, real-time workflows and payments.' },
  { id: 'abinbev', title: 'Backend Engineering', company: 'AB InBev', period: 'Previously', description: 'Backend development, APIs and third-party integration work.' },
  { id: 'arca', title: 'Frontend Engineering', company: 'ARCA', period: 'Previously', description: 'Product interfaces and web application integrations.' },
];
export const skills = [
  { id: 'backend', title: 'Backend & systems', values: ['Node.js','TypeScript','Express','MongoDB','PostgreSQL','Prisma','REST APIs'] },
  { id: 'frontend', title: 'Frontend & mobile', values: ['React','React Native','Expo','Accessible UI','Responsive design'] },
  { id: 'delivery', title: 'Delivery & operations', values: ['Payments','Real-time systems','Docker','CI/CD','Production debugging'] },
];
export const services = [
  { id: 'product', title: 'Product engineering', detail: 'Turning complicated workflows into intuitive products people can actually use.' },
  { id: 'apis', title: 'APIs & integrations', detail: 'Robust backend systems, financial workflows and third-party integrations.' },
  { id: 'reliability', title: 'Production reliability', detail: 'Observability, debugging and resilience where correctness matters.' },
];
export const projects = [
  { slug: 'pharmacy-order-orchestration', title: 'Pharmacy order orchestration', category: 'Production', summary: 'Connecting prescription requests, pharmacy offers, order milestones and operations.', context: 'A time-sensitive workflow across multiple teams and pharmacies.', contribution: 'Improved request handling, offer workflows, order state tracking and operational visibility.', outcome: 'Clearer handoffs and better insight into delayed order fulfillment.', tags: ['Node.js','TypeScript','React','Real-time'], imageKey: null, published: true, visible: true, order: 0 },
  { slug: 'payment-payout-reliability', title: 'Payment & payout reliability', category: 'Production', summary: 'Transaction-sensitive wallet and settlement flows designed around correctness.', context: 'Financial workflows need safe state transitions and predictable retries.', contribution: 'Idempotency, reviewed payout recovery and explicit transaction handling.', outcome: 'Stronger controls around payment and payout exceptions.', tags: ['Node.js','Paystack','MongoDB'], imageKey: null, published: true, visible: true, order: 1 },
  { slug: 'shop-kego', title: 'Shop@Kego', category: 'Earlier projects', summary: 'E-commerce application from my original portfolio.', tags: ['React','JavaScript'], imageKey: 'kego', repositoryUrl: 'https://github.com/Enyina/shop-kego', published: true, visible: true, order: 2 },
  { slug: 'social-media-app', title: 'Social Media App', category: 'Earlier projects', summary: 'Social application from my original portfolio.', tags: ['React','JavaScript'], imageKey: 'social', repositoryUrl: 'https://github.com/Enyina/social__media-app', published: true, visible: true, order: 3 },
  { slug: 'hitours', title: 'HiTours', category: 'Earlier projects', summary: 'Tour booking web application.', tags: ['React','JavaScript'], imageKey: 'tour', repositoryUrl: 'https://github.com/Enyina/Hitours', published: true, visible: true, order: 4 },
  { slug: 'messaging-app', title: 'Messaging App', category: 'Earlier projects', summary: 'Messaging application project.', tags: ['React','JavaScript'], imageKey: 'messenger', repositoryUrl: 'https://github.com/Enyina/Messager__App', published: true, visible: true, order: 5 },
  { slug: 'inventory-app', title: 'Inventory App', category: 'Earlier projects', summary: 'Inventory management application.', tags: ['React','JavaScript'], imageKey: 'inventory', repositoryUrl: 'https://github.com/Enyina/Inventory-App', published: true, visible: true, order: 6 },
  { slug: 'video-sharing-app', title: 'Video Sharing App', category: 'Earlier projects', summary: 'Video sharing application.', tags: ['React','JavaScript'], imageKey: 'video', repositoryUrl: 'https://github.com/Enyina/Video__sharing-App', published: true, visible: true, order: 7 },
];
const ids = new Set(['about','experience','skills','services','work','testimonials','contact']);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const validSlug = (value) => typeof value === 'string' && value.length <= 100 && slugPattern.test(value);
export function getVisibleSections(rows = sections) {
  if (!Array.isArray(rows)) throw new TypeError('Invalid sections');
  const seen = new Set();
  return rows.filter((r) => {
    if (!r || !ids.has(r.id)) return false;
    if (seen.has(r.id)) throw new Error('Duplicate section: ' + r.id);
    seen.add(r.id);
    return r.visible === true && Number.isSafeInteger(r.order) && r.order >= 0;
  }).sort((a,b) => a.order - b.order || a.id.localeCompare(b.id));
}
export function getPublishedProjects(rows = projects) {
  if (!Array.isArray(rows)) throw new TypeError('Invalid projects');
  const seen = new Set();
  return rows.filter((p) => {
    if (!p || p.published !== true || p.visible !== true || !validSlug(p.slug)) return false;
    if (seen.has(p.slug)) throw new Error('Duplicate project slug: ' + p.slug);
    seen.add(p.slug);
    return Number.isSafeInteger(p.order) && p.order >= 0;
  }).sort((a,b) => a.order - b.order || a.slug.localeCompare(b.slug));
}
export const findProject = (slug, rows = projects) => validSlug(slug) ? getPublishedProjects(rows).find((p) => p.slug === slug) ?? null : null;
export function resolveRoute(path) {
  if (path === '/' || path === '/index.html') return { kind: 'home' };
  if (typeof path !== 'string') return { kind: 'not-found' };
  const match = /^\/(?:work|project)\/([^/]+)\/?$/.exec(path);
  return match && validSlug(match[1]) ? {kind:'project',slug:match[1]} : {kind:'not-found'};
}
export function safeExternal(value) {
  if (typeof value !== 'string') return null;
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; }
  catch { return null; }
}
