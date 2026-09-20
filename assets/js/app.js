document.addEventListener('DOMContentLoaded', async () => {
  const loadPartial = async (selector, file) => {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Could not load ${file}`);
      el.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
    }
  };
  await loadPartial('#site-header', 'includes/header.html');
  await loadPartial('#site-footer', 'includes/footer.html');
});