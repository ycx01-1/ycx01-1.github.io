const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('uses the local tech-dark theme and defines core layouts', () => {
  assert.equal(read('_config.yml').match(/^theme:\s*(.+)$/m)?.[1], 'tech-dark');
  for (const file of ['layout/layout.ejs', 'layout/index.ejs', 'layout/post.ejs', 'layout/page.ejs', 'layout/archive.ejs', 'layout/category.ejs', 'layout/tag.ejs', 'source/css/style.styl']) {
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
});
