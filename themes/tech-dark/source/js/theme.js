(function () {
  var button = document.querySelector('[data-theme-toggle]');
  if (!button) return;
  var root = document.documentElement;
  var stored = localStorage.getItem('tech-dark-theme');
  if (stored === 'light') root.dataset.theme = 'light';
  button.addEventListener('click', function () {
    var light = root.dataset.theme === 'light';
    root.dataset.theme = light ? 'dark' : 'light';
    localStorage.setItem('tech-dark-theme', light ? 'dark' : 'light');
  });
})();

(function () {
  var page = document.querySelector('[data-search-page]');
  if (!page) return;
  var input = page.querySelector('[data-search-input]');
  var results = page.querySelector('[data-search-results]');
  var posts = [];
  fetch('/search.json')
    .then(function (response) { return response.json(); })
    .then(function (data) { posts = data; })
    .catch(function () { results.innerHTML = '<div class="empty-state">搜索索引暂时不可用，请稍后再试。</div>'; });
  input.addEventListener('input', function () {
    var keyword = input.value.trim().toLowerCase();
    if (!keyword) {
      results.innerHTML = '<div class="empty-state">输入关键词开始搜索。</div>';
      return;
    }
    var matches = posts.filter(function (post) {
      return (post.title + ' ' + post.excerpt).toLowerCase().indexOf(keyword) !== -1;
    });
    if (!matches.length) {
      results.innerHTML = '<div class="empty-state">没有找到相关文章。</div>';
      return;
    }
    results.innerHTML = matches.map(function (post) {
      return '<a class="search-result" href="/' + post.url + '"><time>' + new Date(post.date).toLocaleDateString('zh-CN') + '</time><strong>' + post.title + '</strong><span>' + post.excerpt + '</span></a>';
    }).join('');
  });
})();
