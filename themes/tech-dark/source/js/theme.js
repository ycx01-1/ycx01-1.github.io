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
