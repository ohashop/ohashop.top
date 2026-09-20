document.addEventListener('DOMContentLoaded', async () => {
  const loadPartial = async (selector, file) => {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Could not load ${file}`);
      el.innerHTML = await response.text();
      setActiveNav();
    } catch (error) {
      console.error(error);
    }
  };

  const setActiveNav = () => {
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const target = link.getAttribute('href');
      if (target === current) link.classList.add('active');
    });
  };

  await loadPartial('#site-header', 'includes/header.html');
  await loadPartial('#site-footer', 'includes/footer.html');
});
