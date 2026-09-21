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

    let OHA_PRODUCTS = null;

async function loadProducts() {
  if (OHA_PRODUCTS) return OHA_PRODUCTS;
  const response = await fetch('data/products.json');
  if (!response.ok) throw new Error('Unable to load product data.');
  OHA_PRODUCTS = await response.json();
  return OHA_PRODUCTS;
}

function getProductById(id) {
  return OHA_PRODUCTS?.products?.find(product => product.id === id) || null;
}

function getGroceryProducts() {
  return OHA_PRODUCTS?.products?.filter(product => product.category === 'grocery') || [];
}

function getFunctionalProducts() {
  return OHA_PRODUCTS?.products?.filter(product => product.category === 'functional-food' && !product.draft) || [];
}

  };

  await loadPartial('#site-header', 'includes/header.html');
  await loadPartial('#site-footer', 'includes/footer.html');
});
