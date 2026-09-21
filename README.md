# OHA Shop

GitHub Pages starter for OHAShop.top.

## Stack
- HTML5
- Bootstrap 5.3
- Font Awesome
- Vanilla JavaScript
- GitHub Pages

## Milestone
M1 — GitHub foundation, global styling, header/footer partials, base pages and SEO files.

# OHA Shop — M2

Premium organic grocery visual foundation.

## Stack
HTML5 + Bootstrap 5.3 + Font Awesome + Vanilla JavaScript + GitHub Pages

## M2 completed
- Refined brand system
- Organic premium color palette
- Header and mobile offcanvas navigation
- Footer and social area
- Global CTA/button styles
- Responsive foundation
- Active navigation state

# OHA Shop — M3 Product Data Architecture

Completed:
- 20 product records
- 8 grocery products with combined variant + size options
- 9 confirmed functional-food records from the current list
- 3 proposed functional-food placeholders marked `draft: true`
- JSON data source and loader helpers

Important:
- Prices are intentionally `0` until the real catalog prices are supplied.
- Draft products 18–20 must be confirmed against actual inventory before publication.
- Product claims remain informational; medical/therapeutic guarantees are not included.

- # OHA Shop — M4 Home / Landing Page

## Added
- Premium organic-grocery editorial home page
- Responsive hero section
- Brand story section
- Dynamic product-story sections loaded from `data/products.json`
- Alternating image/placeholder + text layout
- Safe, non-therapeutic product copy
- "Why OHA Shop?" section
- Final CTA
- Draft products are not shown as live products; they appear in a "Coming Soon" strip.

## Integration
Copy these files into the existing M3 project:
- `index.html` (replace M3 index)
- `assets/css/home.css`
- `assets/js/home.js`

M4 does not replace M3 product data, header/footer, or global styles.
