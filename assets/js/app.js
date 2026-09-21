
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
