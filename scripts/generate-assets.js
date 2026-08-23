function escapeXml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

hexo.extend.generator.register('search-index', function (locals) {
  const posts = locals.posts.sort('-date').map(function (post) {
    return {
      title: post.title,
      url: post.path,
      date: post.date.toISOString(),
      excerpt: post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').trim().slice(0, 180) : ''
    };
  });

  return { path: 'search.json', data: JSON.stringify(posts) };
});

hexo.extend.generator.register('rss-feed', function (locals) {
  const config = this.config;
  const siteUrl = String(config.url || '').replace(/\/$/, '');
  const posts = locals.posts.sort('-date').limit(20);
  const items = posts.map(function (post) {
    const link = siteUrl + '/' + post.path;
    return '<item>' +
      '<title>' + escapeXml(post.title) + '</title>' +
      '<link>' + escapeXml(link) + '</link>' +
      '<guid isPermaLink="true">' + escapeXml(link) + '</guid>' +
      '<pubDate>' + new Date(post.date).toUTCString() + '</pubDate>' +
      '<description>' + escapeXml(post.excerpt || post.content) + '</description>' +
      '</item>';
  }).join('');
  const xml = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<rss version="2.0"><channel>' +
    '<title>' + escapeXml(config.title) + '</title>' +
    '<link>' + escapeXml(siteUrl + '/') + '</link>' +
    '<description>' + escapeXml(config.description) + '</description>' +
    items + '</channel></rss>';
  return { path: 'feed.xml', data: xml };
});
