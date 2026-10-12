// Builds kylewilliams.co from this repository: the portfolio's markdown pages become a static site,
// zipped for a single upload to Cloudflare Pages.
//
//   npm run build                 the real site (site/dist/, kylewilliams-co.zip); refuses to build while
//                                 any published page still has an [ask] or an unapproved [OK?]
//   npm run preview               builds anyway and marks those spots; also shows draft posts
//   ... -- --theme paper          pick a theme (default: site/config.json "theme")
//   ... -- --out site/dist-paper  build somewhere else (for comparing themes)
//
// Published: site/home.html (front page), how-i-build.md, timeline.md, now.md, colophon.md, projects/*.md
// (except `status: draft`) and posts with `status: published`. Never published: private/, research/,
// open-questions.md, CLAUDE.md, learning-log.md, site/directions/.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { zipSync } from 'fflate';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = path.join(root, 'site');
const arg = (name) => {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : undefined;
};
const preview = process.argv.includes('--preview');
const config = JSON.parse(fs.readFileSync(path.join(site, 'config.json'), 'utf8'));
const theme = arg('--theme') || config.theme || 'dark';
const dist = path.resolve(root, arg('--out') || 'site/dist');
const manifests = JSON.parse(fs.readFileSync(path.join(site, 'manifests.json'), 'utf8'));
const printed = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** Splits `---\nkey: value\n---` front matter from a markdown file. */
function frontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { meta: {}, body: text };
  const meta = Object.fromEntries(
    m[1]
      .split('\n')
      .map((l) => {
        const i = l.indexOf(':');
        return i > 0 ? [l.slice(0, i).trim(), l.slice(i + 1).trim()] : null;
      })
      .filter(Boolean),
  );
  return { meta, body: text.slice(m[0].length) };
}

// Markdown links between portfolio files become site URLs.
const ROUTES = {
  'how-i-build.md': '/how-i-build/',
  'timeline.md': '/timeline/',
  'now.md': '/now/',
  'colophon.md': '/colophon/',
  'README.md': '/',
};
function siteLink(href) {
  if (/^(https?:|mailto:|#|\/)/.test(href)) return href;
  const clean = href.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');
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

/** The site's one signature device: a receipt-style record of a project. */
function receipt(key) {
  const m = manifests[key];
  if (!m) return '';
  const rows = m.rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
  return `<aside class="receipt" aria-label="${esc(m.title)} at a glance"><div class="head">${esc(m.title)}</div><dl>${rows}</dl><div class="foot">Printed ${esc(printed)}</div></aside>`;
}

// The quality gate: placeholders never reach the public site.
const problems = [];
function gate(file, text) {
  text.split('\n').forEach((line, i) => {
    if (/\[ask\]|\[OK\?\]/.test(line)) problems.push(`${file}:${i + 1}  ${line.trim().slice(0, 100)}`);
  });
  return preview
    ? text.replace(/\*\*\[ask\]\*\*|\[ask\]/g, '<mark>ASK</mark>').replace(/\*\*\[OK\?\]\*\*|\[OK\?\]/g, '<mark>OK?</mark>')
    : text;
}

function layout({ title, description, body, active = '' }) {
  const nav = [
    ['/work/southbay420/', 'Work', 'work'],
    ['/writing/', 'Writing', 'writing'],
    ['/now/', 'Now', 'now'],
  ]
    .map(([href, label, key]) => `<a href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`)
    .join('');
  const contact = [
    config.email && `<a href="mailto:${esc(config.email)}">${esc(config.email)}</a>`,
    config.linkedin && `<a href="${esc(config.linkedin)}">LinkedIn</a>`,
  ]
    .filter(Boolean)
    .join('');
  return `<!doctype html>
<html lang="en" data-theme="${esc(theme)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description || config.description)}">
<link rel="stylesheet" href="/fonts/fonts.css">
<link rel="stylesheet" href="/style.css">
</head>
<body>
${preview ? `<div class="preview-bar">Preview (${esc(theme)} theme)${problems.length ? ': highlighted spots are waiting on an answer or an approval and block the real build' : ''}.</div>` : ''}
<header class="site-header"><div class="wrap"><a class="brand" href="/">${esc(config.name)}</a><nav>${nav}</nav></div></header>
<main>${body}</main>
<footer class="site-footer" id="contact"><div class="wrap"><div><h2>Email me.</h2><div class="contact">${contact}</div></div><p class="small"><a href="/colophon/">Colophon</a><a href="/now/">Now</a></p></div></footer>
</body>
</html>
`;
}

function page(out, html) {
  const file = path.join(dist, out, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function markdownPage(file, out, active, { receiptKey, postMeta } = {}) {
  const { meta, body } = frontMatter(gate(file, read(file)));
  const title = meta.title || (body.match(/^#\s+(.+)$/m)?.[1] ?? config.name);
  let html = marked.parse(body);
  const after = [
    postMeta && `<p class="post-meta">${esc([meta.date, meta.tag].filter(Boolean).join(' · '))}${meta.status !== 'published' ? ' · draft' : ''}</p>`,
    receiptKey && receipt(receiptKey),
  ]
    .filter(Boolean)
    .join('');
  if (after) html = html.replace(/<\/h1>/, `</h1>${after}`);
  page(out, layout({ title: `${title} · ${config.name}`, description: meta.description, active, body: `<article class="wrap prose">${html}</article>` }));
  return { title, meta };
}

// --- build ---
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(path.join(site, 'style.css'), path.join(dist, 'style.css'));
fs.cpSync(path.join(site, 'fonts'), path.join(dist, 'fonts'), { recursive: true });
fs.cpSync(path.join(root, 'projects', 'img'), path.join(dist, 'img'), { recursive: true });

for (const f of fs.readdirSync(path.join(root, 'projects')).filter((f) => f.endsWith('.md'))) {
  if (frontMatter(read(`projects/${f}`)).meta.status === 'draft') continue;
  const key = f.replace(/\.md$/, '');
  markdownPage(`projects/${f}`, `work/${key}`, 'work', { receiptKey: key });
}
markdownPage('how-i-build.md', 'how-i-build', '');
markdownPage('timeline.md', 'timeline', '');
markdownPage('now.md', 'now', 'now');
markdownPage('colophon.md', 'colophon', '');

const posts = fs
  .readdirSync(path.join(root, 'posts'))
  .filter((f) => f.endsWith('.md'))
  .sort()
  .reverse()
  .map((f) => ({ f, ...frontMatter(read(`posts/${f}`)) }))
  .filter((p) => p.meta.status === 'published' || preview)
  .map((p) => ({
    slug: p.f.replace(/\.md$/, ''),
    ...markdownPage(`posts/${p.f}`, `writing/${p.f.replace(/\.md$/, '')}`, 'writing', { postMeta: true }),
  }));
const postLine = (p) =>
  `<a href="/writing/${p.slug}/">${esc(p.title)}</a><span class="meta">${esc([p.meta.date, p.meta.tag].filter(Boolean).join(' · '))}${p.meta.status !== 'published' ? ' · draft' : ''}</span>`;
const list = posts.length ? posts.map((p) => `<li>${postLine(p)}</li>`).join('') : '<li>First post coming soon.</li>';
page('writing', layout({ title: `Writing · ${config.name}`, active: 'writing', body: `<section class="wrap prose"><h1>Writing</h1><ul class="posts">${list}</ul></section>` }));

const home = gate('site/home.html', fs.readFileSync(path.join(site, 'home.html'), 'utf8'))
  .replace(/\{\{manifest:([\w-]+)\}\}/g, (_, key) => receipt(key))
  .replace('{{latest_post}}', posts[0] ? postLine(posts[0]) : 'First post coming soon.');
page('', layout({ title: `${config.name}: ${config.tagline}`, body: home }));

if (problems.length && !preview) {
  console.error(
    `Not built: ${problems.length} spot(s) still need an answer or an approval:\n  ${problems.join('\n  ')}\nAnswer them (or run "npm run preview" to look at the site anyway).`,
  );
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
const zipName = preview ? `kylewilliams-co-PREVIEW-${theme}.zip` : 'kylewilliams-co.zip';
fs.writeFileSync(path.join(root, zipName), zipSync(files));
console.log(`${preview ? 'Preview' : 'Site'} built (${theme}): ${Object.keys(files).length} files → ${zipName}${problems.length ? ` (${problems.length} spot(s) marked)` : ''}`);
