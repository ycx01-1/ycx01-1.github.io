const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('uses the local tech-dark theme and defines core layouts', () => {
  assert.equal(read('_config.yml').match(/^theme:\s*(.+)$/m)?.[1], 'tech-dark');
  for (const file of ['layout/layout.ejs', 'layout/index.ejs', 'layout/post.ejs', 'layout/page.ejs', 'layout/archive.ejs', 'layout/category.ejs', 'layout/tag.ejs', 'layout/categories.ejs', 'layout/tags.ejs', 'layout/search.ejs', 'source/css/style.styl', 'source/favicon.svg']) {
    assert.ok(fs.existsSync(path.join(root, 'themes/tech-dark', file)), `missing ${file}`);
  }
});

test('generated site exposes the planned routes and content', () => {
  for (const file of ['index.html', 'about/index.html', 'archives/index.html', 'categories/index.html', 'tags/index.html']) {
    assert.ok(fs.existsSync(path.join(root, 'public', file)), `missing public/${file}; run npm run build first`);
  }
  const index = read('public/index.html');
  assert.match(index, /tech-dark|terminal|最新文章/i);
  assert.match(index, /data-theme-toggle/);
  assert.match(read('public/categories/index.html'), /工具实践/);
  assert.match(read('public/tags/index.html'), /FDM/);
  const fdmPost = read('public/2026/08/23/fdm-download-speed/index.html');
  assert.match(fdmPost, /categories\/%E5%B7%A5%E5%85%B7%E5%AE%9E%E8%B7%B5/);
  assert.match(fdmPost, /预计阅读 \d+ 分钟/);
  assert.match(fdmPost, /article-toc-desktop/);
  assert.ok(fs.existsSync(path.join(root, 'public/search/index.html')));
  assert.match(read('public/search.json'), /FDM/);
  assert.match(read('public/feed.xml'), /<rss version="2\.0">/);
  assert.ok(fs.existsSync(path.join(root, 'public/favicon.svg')));
  assert.match(read('public/css/style.css'), /scroll-margin-top:\s*96px/);
  assert.match(read('public/index.html'), /style\.css\?v=20260823-2/);
});
