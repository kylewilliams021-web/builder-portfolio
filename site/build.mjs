// Builds kylewilliams.co from this repository: the portfolio's markdown pages become a static site in
// site/dist/, zipped as kylewilliams-co.zip for a single upload to Cloudflare Pages.
//
//   npm run build     the real site; refuses to build while any published page still has an
//                     [ask] or an unapproved [OK?] number (the quality gate)
//   npm run preview   builds anyway, marking those spots on the page, for review only
//
// What is published: site/home.html (front page), how-i-build.md, timeline.md, projects/*.md and posts
// whose front matter says `status: published`. Never published: private/, open-questions.md, CLAUDE.md,
// learning-log.md, site/directions/.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { zipSync } from 'fflate';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = path.join(root, 'site');
const dist = path.join(site, 'dist');
const preview = process.argv.includes('--preview');
const config = JSON.parse(fs.readFileSync(path.join(site, 'config.json'), 'utf8'));

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** Splits `---\nkey: value\n---` front matter from a markdown file. */
function frontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { meta: {}, body: text };
  const meta = Object.fromEntries(m[1].split('\n').map((l) => l.split(/:\s*/, 2)).filter((p) => p.length === 2));
  return { meta, body: text.slice(m[0].length) };
}

// Markdown links between portfolio files become site URLs.
const ROUTES = { 'how-i-build.md': '/how-i-build/', 'timeline.md': '/timeline/', 'README.md': '/' };
function siteLink(href) {
  if (/^(https?:|mailto:|#)/.test(href)) return href;
  const clean = href.replace(/^(\.\.\/)+/, '');
  if (ROUTES[clean]) return ROUTES[clean];
  const project = clean.match(/^projects\/([\w-]+)\.md(#.*)?$/) || clean.match(/^([\w-]+)\.md(#.*)?$/);
  if (project && fs.existsSync(path.join(root, 'projects', `${project[1]}.md`))) return `/work/${project[1]}/${project[2] || ''}`;
  if (/^(img|projects\/img)\//.test(clean)) return '/' + clean.replace(/^projects\//, '');
  return href;
}
marked.use({
  renderer: {
    link({ href, title, tokens }) {
      return `<a href="${esc(siteLink(href))}"${title ? ` title="${esc(title)}"` : ''}>${this.parser.parseInline(tokens)}</a>`;
    },
    image({ href, title, text }) {
      return `<img src="${esc(siteLink(href))}" alt="${esc(text)}"${title ? ` title="${esc(title)}"` : ''} loading="lazy">`;
    },
  },
});

// The quality gate: placeholders never reach the public site.
const problems = [];
function gate(file, text) {
  text.split('\n').forEach((line, i) => {
    if (/\[ask\]|\[OK\?\]/.test(line)) problems.push(`${file}:${i + 1}  ${line.trim().slice(0, 100)}`);
  });
  return preview ? text.replace(/\*\*\[ask\]\*\*|\[ask\]/g, '<mark>ASK</mark>').replace(/\*\*\[OK\?\]\*\*|\[OK\?\]/g, '<mark>OK?</mark>') : text;
}

function layout({ title, description, body, active = '' }) {
  const nav = [['/work/southbay420/', 'Work', 'work'], ['/how-i-build/', 'How I build', 'how'], ['/writing/', 'Writing', 'writing']]
    .map(([href, label, key]) => `<a href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`)
    .join('');
  const contact = [
    config.email && `<a href="mailto:${esc(config.email)}">Email</a>`,
    config.linkedin && `<a href="${esc(config.linkedin)}">LinkedIn</a>`,
  ].filter(Boolean).join('');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description || config.description)}">
<link rel="stylesheet" href="/style.css">
</head>
<body>
${preview && problems.length ? '<div class="preview-bar">Preview: highlighted spots are waiting on an answer or an approval and block the real build.</div>' : ''}
<header class="site-header"><div class="wrap"><a class="brand" href="/">${esc(config.name)}</a><nav>${nav}<a class="btn" href="#contact">Let's talk</a></nav></div></header>
<main>${body}</main>
<footer class="site-footer" id="contact"><div class="wrap"><p>${esc(config.name)} · ${esc(config.tagline)}</p><nav>${contact}</nav></div></footer>
</body>
</html>
`;
}

function page(out, html) {
  const file = path.join(dist, out, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function markdownPage(file, out, active) {
  const { meta, body } = frontMatter(gate(file, read(file)));
  const title = meta.title || (body.match(/^#\s+(.+)$/m)?.[1] ?? config.name);
  page(out, layout({ title: `${title} — ${config.name}`, description: meta.description, active, body: `<article class="wrap prose">${marked.parse(body)}</article>` }));
  return { title, meta };
}

// --- build ---
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(path.join(site, 'style.css'), path.join(dist, 'style.css'));
fs.cpSync(path.join(root, 'projects', 'img'), path.join(dist, 'img'), { recursive: true });

const projects = fs.readdirSync(path.join(root, 'projects')).filter((f) => f.endsWith('.md'));
for (const f of projects) markdownPage(`projects/${f}`, `work/${f.replace(/\.md$/, '')}`, 'work');
markdownPage('how-i-build.md', 'how-i-build', 'how');
markdownPage('timeline.md', 'timeline', '');

const posts = fs.readdirSync(path.join(root, 'posts')).filter((f) => f.endsWith('.md')).sort().reverse()
  .map((f) => ({ f, ...frontMatter(read(`posts/${f}`)) }))
  .filter((p) => p.meta.status === 'published')
  .map((p) => ({ slug: p.f.replace(/\.md$/, ''), ...markdownPage(`posts/${p.f}`, `writing/${p.f.replace(/\.md$/, '')}`, 'writing') }));
const list = posts.length
  ? posts.map((p) => `<li><a href="/writing/${p.slug}/">${esc(p.title)}</a> <span>${esc(p.meta.date || '')}</span></li>`).join('')
  : '<li>First posts coming soon.</li>';
page('writing', layout({ title: `Writing — ${config.name}`, active: 'writing', body: `<section class="wrap prose"><h1>Writing</h1><ul class="posts">${list}</ul></section>` }));

const home = gate('site/home.html', fs.readFileSync(path.join(site, 'home.html'), 'utf8'))
  .replace('{{latest_post}}', posts[0] ? `<a href="/writing/${posts[0].slug}/">${esc(posts[0].title)}</a>` : '');
page('', layout({ title: `${config.name} — ${config.tagline}`, body: home }));

if (problems.length && !preview) {
  console.error(`Not built: ${problems.length} spot(s) still need an answer or an approval:\n  ${problems.join('\n  ')}\nAnswer them (or run "npm run preview" to look at the site anyway).`);
  process.exit(1);
}

// Zip for Cloudflare Pages: upload this file as a new deployment.
const files = {};
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else files[path.relative(dist, full).split(path.sep).join('/')] = fs.readFileSync(full);
  }
})(dist);
const zipName = preview ? 'kylewilliams-co-PREVIEW.zip' : 'kylewilliams-co.zip';
fs.writeFileSync(path.join(root, zipName), zipSync(files));
console.log(`${preview ? 'Preview' : 'Site'} built: ${Object.keys(files).length} files → ${zipName}${problems.length ? ` (${problems.length} spot(s) marked for review)` : ''}`);
