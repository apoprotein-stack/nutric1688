(function(){
  if (document.getElementById('brain-age-nav')) return;
  var nav = document.querySelector('nav.header-tabs');
  if (!nav) return;
  var a = document.createElement('a');
  a.id = 'brain-age-nav';
  a.className = 'header-tab';
  a.href = 'sirt-game/index.html';
  a.title = '測測你的大腦年齡';
  a.style.textDecoration = 'none';
  a.innerHTML = '<span class="tab-icon">🧠</span><span>大腦年齡</span>';
  nav.appendChild(a);
  var logo = document.querySelector('a.logo-wrap');
  if (logo && (logo.getAttribute('href') === '#' || !logo.getAttribute('href'))) {
    logo.setAttribute('href', 'portal.html');
  }
})();
