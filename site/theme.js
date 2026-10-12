// Light/dark switch. Without a choice the page follows the device setting (see style.css); a click saves
// the visitor's choice on this device only. Loaded in <head> so a saved choice applies before first paint.
(() => {
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'paper') root.dataset.theme = saved;
  } catch {}
  const current = () => root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'paper' : 'dark');
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-switch');
    if (!button) return;
    const label = () => {
      const next = current() === 'dark' ? 'Light' : 'Dark';
      button.textContent = next;
      button.setAttribute('aria-label', `Switch to the ${next.toLowerCase()} theme`);
    };
    label();
    button.hidden = false;
    button.addEventListener('click', () => {
      root.dataset.theme = current() === 'dark' ? 'paper' : 'dark';
      try {
        localStorage.setItem('theme', root.dataset.theme);
      } catch {}
      label();
    });
  });
})();
