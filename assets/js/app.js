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

{
  "meta": {
    "brand": "OHA Shop",
    "currency": "BDT",
    "currency_symbol": "৳",
    "version": "m3"
  },
  "categories": [
    {
      "id": "grocery",
      "name": "অর্গানিক গ্রোসারি"
    },
    {
      "id": "functional-food",
      "name": "ফাংশনাল ফুড"
    }
  ],
  "products": [
    {
      "id": "honey",
      "name": "মধু",
      "category": "grocery",
      "type": "variant",
      "headline": "প্রাকৃতিক মিষ্টতার সহজ সংযোজন",
      "shortDescription": "বিভিন্ন ফুলের উৎসের মধু—দৈনন্দিন খাবার ও পানীয়তে ব্যবহারের জন্য.",
      "image": "assets/images/products/pure-honey.webp",
      "variants": [
        {
          "id": "lychee-honey-250g",
          "name": "লিচু ফুলের মধু — ২৫০ গ্রাম",
          "price": 0
        },
        {
          "id": "lychee-honey-500g",
          "name": "লিচু ফুলের মধু — ৫০০ গ্রাম",
          "price": 0
        },
        {
          "id": "lychee-honey-1kg",
          "name": "লিচু ফুলের মধু — ১ কেজি",
          "price": 0
        },
        {
          "id": "mustard-honey-500g",
          "name": "সরিষা ফুলের মধু — ৫০০ গ্রাম",
          "price": 0
        },
        {
          "id": "blackseed-honey-500g",
          "name": "কালোজিরা ফুলের মধু — ৫০০ গ্রাম",
          "price": 0
        }
      ]
    },
    {
      "id": "ghee",
      "name": "খাঁটি ঘি",
      "category": "grocery",
      "type": "variant",
      "headline": "প্রতিদিনের খাবারে ঘি—স্বাদ ও পুষ্টির সহজ সংযোজন",
      "shortDescription": "ভাত, রুটি, খিচুড়ি ও অন্যান্য খাবারে ব্যবহারের জন্য ঐতিহ্যবাহী ঘি.",
      "image": "assets/images/products/pure-ghee.webp",
      "variants": [
        {
          "id": "ghee-250g",
          "name": "খাঁটি ঘি — ২৫০ গ্রাম",
          "price": 0
        },
        {
          "id": "ghee-500g",
          "name": "খাঁটি ঘি — ৫০০ গ্রাম",
          "price": 0
        },
        {
          "id": "ghee-1kg",
          "name": "খাঁটি ঘি — ১ কেজি",
          "price": 0
        }
      ]
    },
    {
      "id": "coconut-oil",
      "name": "Cold-Pressed নারিকেল তেল",
      "category": "grocery",
      "type": "variant",
      "headline": "নারিকেলের প্রাকৃতিক বৈশিষ্ট্যে রান্নাঘরে সহজ সংযোজন",
      "shortDescription": "Cold-pressed নারিকেল তেল—রান্না ও দৈনন্দিন household ব্যবহারের জন্য.",
      "image": "assets/images/products/cold-pressed-coconut-oil.webp",
      "variants": [
        {
          "id": "coconut-250ml",
          "name": "Cold-Pressed নারিকেল তেল — ২৫০ ml",
          "price": 0
        },
        {
          "id": "coconut-500ml",
          "name": "Cold-Pressed নারিকেল তেল — ৫০০ ml",
          "price": 0
        },
        {
          "id": "coconut-1l",
          "name": "Cold-Pressed নারিকেল তেল — ১ লিটার",
          "price": 0
        }
      ]
    },
    {
      "id": "mustard-oil",
      "name": "কাঠের ঘানিতে ভাঙা খাঁটি সরিষার তেল",
      "category": "grocery",
      "type": "variant",
      "headline": "পুরোনো দিনের স্বাদে ফিরুক আপনার রান্না",
      "shortDescription": "কাঠের ঘানির ঐতিহ্যবাহী পদ্ধতিতে তৈরি সরিষার তেল—বাঙালির রান্নার পরিচিত স্বাদ ও ঘ্রাণের জন্য.",
      "image": "assets/images/products/wood-pressed-mustard-oil.webp",
      "variants": [
        {
          "id": "mustard-500ml",
          "name": "কাঠের ঘানির সরিষার তেল — ৫০০ ml",
          "price": 0
        },
        {
          "id": "mustard-1l",
          "name": "কাঠের ঘানির সরিষার তেল — ১ লিটার",
          "price": 0
        },
        {
          "id": "mustard-2l",
          "name": "কাঠের ঘানির সরিষার তেল — ২ লিটার",
          "price": 0
        },
        {
          "id": "mustard-5l",
          "name": "কাঠের ঘানির সরিষার তেল — ৫ লিটার",
          "price": 0
        }
      ]
    },
    {
      "id": "black-seed-oil",
      "name": "কালোজিরার তেল",
      "category": "grocery",
      "type": "variant",
      "headline": "পরিচিত কালোজিরার স্বাদ, নতুনভাবে আপনার রান্নাঘরে",
      "shortDescription": "কালোজিরা থেকে তৈরি পরিচিত প্রাকৃতিক তেল—দৈনন্দিন খাদ্যাভ্যাসে ব্যবহারের জন্য.",
      "image": "assets/images/products/black-seed-oil.webp",
      "variants": [
        {
          "id": "black-seed-100ml",
          "name": "কালোজিরার তেল — ১০০ ml",
          "price": 0
        },
        {
          "id": "black-seed-250ml",
          "name": "কালোজিরার তেল — ২৫০ ml",
          "price": 0
        },
        {
          "id": "black-seed-500ml",
          "name": "কালোজিরার তেল — ৫০০ ml",
          "price": 0
        }
      ]
    },
    {
      "id": "olive-oil",
      "name": "Extra Virgin Olive Oil",
      "category": "grocery",
      "type": "variant",
      "headline": "ভূমধ্যসাগরীয় স্বাদের সহজ সংযোজন",
      "shortDescription": "Extra Virgin Olive Oil—সালাদ, dressing ও নির্দিষ্ট খাবারে ব্যবহারের জন্য.",
      "image": "assets/images/products/extra-virgin-olive-oil.webp",
      "variants": [
        {
          "id": "olive-250ml",
          "name": "Extra Virgin Olive Oil — ২৫০ ml",
          "price": 0
        },
        {
          "id": "olive-500ml",
          "name": "Extra Virgin Olive Oil — ৫০০ ml",
          "price": 0
        },
        {
          "id": "olive-1l",
          "name": "Extra Virgin Olive Oil — ১ লিটার",
          "price": 0
        }
      ]
    },
    {
      "id": "saudi-dates",
      "name": "সৌদি আরবের খেজুর",
      "category": "grocery",
      "type": "variant",
      "headline": "মরুভূমির ঐতিহ্য থেকে আপনার পরিবারের টেবিলে",
      "shortDescription": "নির্বাচিত সৌদি খেজুর—প্রাকৃতিক মিষ্টতার জনপ্রিয় ও সহজ খাবার.",
      "image": "assets/images/products/saudi-dates.webp",
      "variants": [
        {
          "id": "ajwa-500g",
          "name": "আজওয়া খেজুর — ৫০০ গ্রাম",
          "price": 0
        },
        {
          "id": "ajwa-1kg",
          "name": "আজওয়া খেজুর — ১ কেজি",
          "price": 0
        },
        {
          "id": "sukkari-500g",
          "name": "সুক্কারি খেজুর — ৫০০ গ্রাম",
          "price": 0
        },
        {
          "id": "sukkari-1kg",
          "name": "সুক্কারি খেজুর — ১ কেজি",
          "price": 0
        },
        {
          "id": "safawi-500g",
          "name": "সাফাওয়ি খেজুর — ৫০০ গ্রাম",
          "price": 0
        },
        {
          "id": "medjool-500g",
          "name": "মেডজুল খেজুর — ৫০০ গ্রাম",
          "price": 0
        }
      ]
    },
    {
      "id": "black-rice",
      "name": "Black Rice",
      "category": "grocery",
      "type": "variant",
      "headline": "প্রতিদিনের ভাতের তালিকায় আনুন বৈচিত্র্য",
      "shortDescription": "স্বতন্ত্র রং ও texture-এর জন্য পরিচিত black rice—বৈচিত্র্যময় খাদ্যাভ্যাসের জন্য.",
      "image": "assets/images/products/black-rice.webp",
      "variants": [
        {
          "id": "black-rice-500g",
          "name": "Black Rice — ৫০০ গ্রাম",
          "price": 0
        },
        {
          "id": "black-rice-1kg",
          "name": "Black Rice — ১ কেজি",
          "price": 0
        },
        {
          "id": "black-rice-2kg",
          "name": "Black Rice — ২ কেজি",
          "price": 0
        }
      ]
    },
    {
      "id": "turmeric-booster",
      "name": "Organic Turmeric Booster",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "প্রকৃতির হলুদের পরিচিত উপাদান, দৈনন্দিন খাদ্যাভ্যাসে সহজ সংযোজন",
      "shortDescription": "দৈনন্দিন food routine-এ turmeric-based functional food যুক্ত করার একটি সহজ option.",
      "image": "assets/images/products/organic-turmeric-booster.webp"
    },
    {
      "id": "healthy-gut",
      "name": "Organic Healthy Gut",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "দৈনন্দিন খাদ্যাভ্যাসে gut-friendly choice",
      "shortDescription": "দৈনন্দিন wellness routine-এর সঙ্গে food-based functional option.",
      "image": "assets/images/products/organic-healthy-gut.webp"
    },
    {
      "id": "superfood",
      "name": "Organic Superfood",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "প্রাকৃতিক উপাদানের সমন্বয়ে দৈনন্দিন খাদ্যাভ্যাসে বৈচিত্র্য",
      "shortDescription": "নির্বাচিত উপাদানের সমন্বয়ে তৈরি functional food option.",
      "image": "assets/images/products/organic-superfood.webp"
    },
    {
      "id": "apple-cider-vinegar",
      "name": "Organic Apple Cider Vinegar with the Mother",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "Mother-সহ apple cider vinegar-এর স্বতন্ত্র বৈশিষ্ট্য",
      "shortDescription": "দৈনন্দিন food routine-এ ব্যবহারের জন্য apple cider vinegar with the mother.",
      "image": "assets/images/products/apple-cider-vinegar-with-mother.webp"
    },
    {
      "id": "joint-guard",
      "name": "Joint Guard",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "Active lifestyle-এর সঙ্গে functional food-এর complementary choice",
      "shortDescription": "দৈনন্দিন wellness routine-এর জন্য functional food option.",
      "image": "assets/images/products/joint-guard.webp"
    },
    {
      "id": "immun-plus",
      "name": "Immun Plus",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "দৈনন্দিন পুষ্টিকর খাদ্যাভ্যাসের সঙ্গে functional food-এর সংযোজন",
      "shortDescription": "প্রতিদিনের food routine-এর সঙ্গে ব্যবহারযোগ্য functional food option.",
      "image": "assets/images/products/immun-plus.webp"
    },
    {
      "id": "bio-comfit",
      "name": "Bio Comfit",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "দৈনন্দিন wellness routine-এর জন্য সহজ functional option",
      "shortDescription": "আপনার দৈনন্দিন খাদ্যাভ্যাসে functional food যুক্ত করার একটি option.",
      "image": "assets/images/products/bio-comfit.webp"
    },
    {
      "id": "vegespeed",
      "name": "Vegspeed",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "উদ্ভিদজাত খাদ্যাভ্যাসের সঙ্গে functional nutrition",
      "shortDescription": "দৈনন্দিন food routine-এর সঙ্গে ব্যবহারযোগ্য functional food option.",
      "image": "assets/images/products/vegespeed.webp"
    },
    {
      "id": "beetroot-powder",
      "name": "Beetroot Powder",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "Beetroot-এর ব্যবহার সহজ করুন",
      "shortDescription": "Smoothie, পানীয় বা খাবারে beetroot powder ব্যবহারের সহজ উপায়.",
      "image": "assets/images/products/beetroot-powder.webp"
    },
    {
      "id": "moringa-powder",
      "name": "Organic Moringa Powder",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "দৈনন্দিন খাবারে মরিঙ্গার সহজ সংযোজন",
      "shortDescription": "মরিঙ্গা পাউডার—inventory confirmation-এর পর publish করার জন্য placeholder.",
      "image": "assets/images/products/organic-moringa-powder.webp",
      "draft": true
    },
    {
      "id": "chia-seeds",
      "name": "Organic Chia Seeds",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "দৈনন্দিন খাদ্যাভ্যাসে চিয়া সিডের সহজ সংযোজন",
      "shortDescription": "চিয়া সিড—inventory confirmation-এর পর publish করার জন্য placeholder.",
      "image": "assets/images/products/organic-chia-seeds.webp",
      "draft": true
    },
    {
      "id": "flaxseed",
      "name": "Organic Flaxseed",
      "category": "functional-food",
      "type": "fixed",
      "price": 0,
      "headline": "খাদ্যাভ্যাসে তিসি বীজের সহজ সংযোজন",
      "shortDescription": "Flaxseed—inventory confirmation-এর পর publish করার জন্য placeholder.",
      "image": "assets/images/products/organic-flaxseed.webp",
      "draft": true
    }
  ]
}


/* OHA Shop M4 — Home renderer */
(function () {
  const icons = [
    "fa-droplet", "fa-jar", "fa-seedling", "fa-bottle-droplet",
    "fa-circle-dot", "fa-leaf", "fa-calendar-days", "fa-bowl-food",
    "fa-mortar-pestle", "fa-spoon", "fa-wheat-awn", "fa-flask",
    "fa-person-walking", "fa-shield-heart", "fa-heart-pulse", "fa-carrot",
    "fa-leaf", "fa-seedling", "fa-seedling", "fa-seedling"
  ];

  const categoryLabel = p => p.category === "grocery" ? "Organic Grocery" : "Functional Food";

  const featureText = (p) => {
    const common = {
      honey:["প্রাকৃতিক মিষ্টতার সহজ সংযোজন","চা, নাশতা ও দৈনন্দিন খাবারে ব্যবহারযোগ্য","পণ্যের উৎস ও ভ্যারিয়েন্ট দেখে পছন্দ করুন"],
      ghee:["স্বাদ ও রান্নায় পরিচিত ঐতিহ্য","ভাত, রুটি ও রান্নায় সহজে ব্যবহারযোগ্য","পরিমাণ ও প্যাক সাইজ অনুযায়ী বেছে নিন"],
      coconut_oil:["নারিকেলের প্রাকৃতিক বৈশিষ্ট্য","রান্না ও দৈনন্দিন খাদ্যাভ্যাসে ব্যবহারযোগ্য","সহজে সংরক্ষণ ও ব্যবহারের উপযোগী"],
      mustard_oil:["পুরোনো দিনের পরিচিত স্বাদ","বাংলা রান্নার নানা পদে ব্যবহারযোগ্য","কাঠের ঘানি ভাঙা পণ্য হিসেবে আলাদা পরিচিতি"],
      black_seed_oil:["কালোজিরার পরিচিত বৈশিষ্ট্য","খাদ্যাভ্যাসে অল্প পরিমাণে সংযোজনযোগ্য","ব্যবহার অনুযায়ী প্যাক সাইজ বেছে নিন"],
      olive_oil:["ভূমধ্যসাগরীয় খাদ্যসংস্কৃতির পরিচিত উপাদান","সালাদ ও রান্নায় ব্যবহারযোগ্য","Extra Virgin নামটি কেবল উপযুক্ত গ্রেডের পণ্যে প্রযোজ্য"],
      dates:["ঐতিহ্যবাহী প্রাকৃতিক মিষ্টতা","নাশতা ও ইফতারে জনপ্রিয়","বিভিন্ন জাত ও প্যাক সাইজে নির্বাচন"],
      black_rice:["চালের তালিকায় বৈচিত্র্য","দৈনন্দিন খাবারে নতুন অভিজ্ঞতা","রান্নার আগে যথাযথভাবে প্রস্তুত করে ব্যবহার করুন"]
    };
    const functional = [
      ["প্রাকৃতিক হলুদের পরিচিত উপাদান","দৈনন্দিন খাদ্যাভ্যাসে সহজ সংযোজন","ব্যবহারের নির্দেশনা মেনে গ্রহণ করুন"],
      ["দৈনন্দিন খাদ্যাভ্যাসে gut-friendly choice","নিয়মিত খাবারের সঙ্গে সহজে যুক্ত করা যায়","প্যাকেটের নির্দেশনা অনুসরণ করুন"],
      ["প্রাকৃতিক উপাদানের সমন্বয়","দৈনন্দিন খাদ্যাভ্যাসে বৈচিত্র্য আনে","পরিমাণ ও ব্যবহারবিধি দেখে গ্রহণ করুন"],
      ["Mother-সহ apple cider vinegar-এর স্বতন্ত্র বৈশিষ্ট্য","খাদ্যাভ্যাসে বিভিন্নভাবে ব্যবহারযোগ্য","পণ্যের নির্দেশনা অনুসরণ করুন"],
      ["Active lifestyle-এর সঙ্গে complementary choice","দৈনন্দিন routine-এ সহজে যুক্ত করা যায়","এটি সুষম খাদ্যের বিকল্প নয়"],
      ["পুষ্টিকর খাদ্যাভ্যাসের সঙ্গে functional food-এর সংযোজন","দৈনন্দিন routine-এ ব্যবহারযোগ্য","লেবেলের নির্দেশনা অনুসরণ করুন"],
      ["দৈনন্দিন wellness routine-এর সহজ functional option","ব্যবহার করা সহজ","পণ্যের নির্দেশনা মেনে ব্যবহার করুন"],
      ["উদ্ভিদজাত খাদ্যাভ্যাসের সঙ্গে functional nutrition","দৈনন্দিন খাবারে সহজ সংযোজন","পরিমাণ ও ব্যবহারবিধি অনুসরণ করুন"],
      ["Beetroot-এর ব্যবহার সহজ করুন","খাবার ও পানীয়তে সংযোজনযোগ্য","প্রয়োজন অনুযায়ী ব্যবহার করুন"]
    ];
    if (p.category === "functional") {
      const idx = Math.max(0, ["turmeric_booster","healthy_gut","superfood","acv_mother","joint_guard","immun_plus","bio_comfit","vegspeed","beetroot_powder"].indexOf(p.id));
      return functional[idx] || ["দৈনন্দিন খাদ্যাভ্যাসে সহজ সংযোজন","ব্যবহার করা সহজ","পণ্যের নির্দেশনা অনুসরণ করুন"];
    }
    return common[p.id] || ["দৈনন্দিন খাদ্যাভ্যাসে ব্যবহারযোগ্য","নির্বাচিত প্যাক সাইজ ও ভ্যারিয়েন্ট","পণ্যের নির্দেশনা অনুসরণ করুন"];
  };

  function productSection(p, i) {
    const icon = icons[i] || "fa-leaf";
    const features = featureText(p);
    const reverse = i % 2 === 1 ? "flex-lg-row-reverse" : "";
    return `
      <section class="product-story ${i % 2 === 1 ? "alt" : ""}">
        <div class="container">
          <div class="row align-items-center g-5 ${reverse}">
            <div class="col-lg-6">
              <div class="product-visual">
                <div class="product-number">${String(i + 1).padStart(2,"0")}</div>
                <div class="visual-inner">
                  <i class="fa-solid ${icon}"></i>
                  <h3 class="h4 fw-bold mt-3 mb-1">${p.name}</h3>
                  <div class="text-muted">${categoryLabel(p)}</div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="px-lg-3">
                <div class="product-category mb-2">${categoryLabel(p)}</div>
                <h2 class="product-title mb-3">${p.home_headline || p.tagline || p.name}</h2>
                <p class="product-desc mb-3">${p.description || ""}</p>
                <ul class="feature-list">
                  ${features.map(x => `<li><i class="fa-solid fa-check"></i><span>${x}</span></li>`).join("")}
                </ul>
                <a href="shop.html" class="btn btn-oha-primary px-4">
                  কেনাকাটা করুন <i class="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>`;
  }

  async function renderHome() {
    const root = document.getElementById("product-stories");
    const soon = document.getElementById("coming-soon-products");
    if (!root) return;

    try {
      const res = await fetch("data/products.json");
      if (!res.ok) throw new Error("Product data unavailable");
      const products = await res.json();

      const live = products.filter(p => !p.draft);
      root.innerHTML = live.map(productSection).join("");

      const drafts = products.filter(p => p.draft);
      if (drafts.length && soon) {
        soon.innerHTML = `
          <div class="container">
            <div class="coming-soon d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
              <div><strong>শীঘ্রই আরও কিছু পণ্য</strong><br><span class="small">ইনভেন্টরি নিশ্চিত হলে নতুন পণ্যগুলো প্রকাশ করা হবে।</span></div>
              <div class="small fw-semibold">${drafts.map(p => p.name).join(" • ")}</div>
            </div>
          </div>`;
      }
    } catch (err) {
      root.innerHTML = `<div class="container py-5"><div class="alert alert-warning">পণ্য তথ্য লোড করা যাচ্ছে না। পরে আবার চেষ্টা করুন।</div></div>`;
    }
  }

  document.addEventListener("DOMContentLoaded", renderHome);
})();
