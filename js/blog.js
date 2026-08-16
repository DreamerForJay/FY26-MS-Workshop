(() => {
  const root = document.documentElement;
  const nav = document.querySelector('.blog-nav');
  const menu = document.querySelector('.blog-menu');
  const theme = document.querySelector('#blog-theme-toggle');
  const storedTheme = localStorage.getItem('portfolio-theme-v2');
  root.dataset.theme = storedTheme === 'light' ? 'light' : 'dark';

  theme?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme-v2', root.dataset.theme);
  });

  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
    if (menu) menu.textContent = '☰';
  }));
})();