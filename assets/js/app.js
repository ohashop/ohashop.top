/* =========================================================
   OHA SHOP — MAIN APP JAVASCRIPT
   File: assets/js/app.js
   Responsibilities:
   - Load Header
   - Load Footer
   - Active Navigation
   - Search Overlay
   - Newsletter Form
   - Copyright Year
   - Cart Count
   ========================================================= */
"use strict";
/* =========================================================
   GLOBAL OHA APP
   ========================================================= */
window.OHA = window.OHA || {};
/* =========================================================
   DOM READY
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
    loadSiteHeader();
    loadSiteFooter();
    initializeCartCount();
});
/* =========================================================
   LOAD HEADER
   ========================================================= */
async function loadSiteHeader() {
    const headerContainer = document.getElementById("site-header");
    if (!headerContainer) {
        return;
    }
    try {
        const response = await fetch("includes/header.html", {
            cache: "no-cache"
        });
        if (!response.ok) {
            throw new Error(
                "Header could not be loaded. Status: " +
                response.status
            );
        }
        const html = await response.text();
        headerContainer.innerHTML = html;
        /* Initialize header features */
        setActiveNavigation();
        initializeSearch();
        initializeMobileNavigation();
        updateCartCount();
    } catch (error) {
        console.error(
            "OHA Shop Header Error:",
            error
        );
    }
}
/* =========================================================
   LOAD FOOTER
   ========================================================= */
async function loadSiteFooter() {
    const footerContainer = document.getElementById("site-footer");
    if (!footerContainer) {
        return;
    }
    try {
        const response = await fetch("includes/footer.html", {
            cache: "no-cache"
        });
        if (!response.ok) {
            throw new Error(
                "Footer could not be loaded. Status: " +
                response.status
            );
        }
        const html = await response.text();
        footerContainer.innerHTML = html;
        /* Initialize footer features */
        updateCopyrightYear();
        initializeNewsletter();
    } catch (error) {
        console.error(
            "OHA Shop Footer Error:",
            error
        );
    }
}
/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */
function setActiveNavigation() {
    const currentPage =
        document.body.getAttribute("data-page") ||
        getCurrentPage();
    if (!currentPage) {
        return;
    }
    /* Desktop navigation */
    const desktopLinks =
        document.querySelectorAll(
            ".oha-nav-link[data-page]"
        );
    desktopLinks.forEach(function (link) {
        const page =
            link.getAttribute("data-page");
        if (page === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
    /* Mobile navigation */
    const mobileLinks =
        document.querySelectorAll(
            ".oha-mobile-link[data-page]"
        );
    mobileLinks.forEach(function (link) {
        const page =
            link.getAttribute("data-page");
        if (page === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}
/* =========================================================
   DETERMINE CURRENT PAGE
   ========================================================= */
function getCurrentPage() {
    const path =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();
    switch (path) {
        case "":
        case "index.html":
            return "home";
        case "lifestyle.html":
            return "lifestyle";
        case "shop.html":
            return "shop";
        case "order-success.html":
            return "shop";
        case "404.html":
            return "";
        default:
            return "";
    }
}
/* =========================================================
   SEARCH
   ========================================================= */
function initializeSearch() {
    const searchButton =
        document.querySelector(
            ".oha-icon-button"
        );
    const searchOverlay =
        document.getElementById(
            "ohaSearchOverlay"
        );
    const searchClose =
        document.getElementById(
            "ohaSearchClose"
        );
    const searchForm =
        document.getElementById(
            "ohaSearchForm"
        );
    const searchInput =
        document.getElementById(
            "ohaSearchInput"
        );
    if (
        !searchButton ||
        !searchOverlay
    ) {
        return;
    }
    /* Open search */
    searchButton.addEventListener(
        "click",
        function () {
            openSearchOverlay();
        }
    );
    /* Close search */
    if (searchClose) {
        searchClose.addEventListener(
            "click",
            function () {
                closeSearchOverlay();
            }
        );
    }
    /* Click outside search box */
    searchOverlay.addEventListener(
        "click",
        function (event) {
            if (
                event.target ===
                searchOverlay
            ) {
                closeSearchOverlay();
            }
        }
    );
    /* ESC key */
    document.addEventListener(
        "keydown",
        function (event) {
            if (
                event.key === "Escape"
            ) {
                closeSearchOverlay();
            }
        }
    );
    /* Search submit */
    if (searchForm) {
        searchForm.addEventListener(
            "submit",
            function (event) {
                event.preventDefault();
                const keyword =
                    searchInput
                        ? searchInput.value.trim()
                        : "";
                if (!keyword) {
                    if (searchInput) {
                        searchInput.focus();
                    }
                    return;
                }
                /*
                 * For now search redirects
                 * to shop page with URL parameter.
                 *
                 * shop.js will later use
                 * this parameter to filter products.
                 */
                window.location.href =
                    "shop.html?search=" +
                    encodeURIComponent(keyword);
            }
        );
    }
}
/* =========================================================
   OPEN SEARCH
   ========================================================= */
function openSearchOverlay() {
    const overlay =
        document.getElementById(
            "ohaSearchOverlay"
        );
    const input =
        document.getElementById(
            "ohaSearchInput"
        );
    if (!overlay) {
        return;
    }
    overlay.classList.add("show");
    document.body.classList.add(
        "oha-search-open"
    );
    /* Focus input */
    setTimeout(function () {
        if (input) {
            input.focus();
        }
    }, 150);
}
/* =========================================================
   CLOSE SEARCH
   ========================================================= */
function closeSearchOverlay() {
    const overlay =
        document.getElementById(
            "ohaSearchOverlay"
        );
    if (!overlay) {
        return;
    }
    overlay.classList.remove("show");
    document.body.classList.remove(
        "oha-search-open"
    );
}
/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */
function initializeMobileNavigation() {
    const mobileLinks =
        document.querySelectorAll(
            ".oha-mobile-link"
        );
    if (!mobileLinks.length) {
        return;
    }
    mobileLinks.forEach(function (link) {
        link.addEventListener(
            "click",
            function () {
                /*
                 * Bootstrap Offcanvas will
                 * normally close automatically
                 * when navigating to another page.
                 */
            }
        );
    });
}
/* =========================================================
   CART COUNT
   ========================================================= */
function initializeCartCount() {
    updateCartCount();
}
/* =========================================================
   GET CART
   ========================================================= */
function getCart() {
    try {
        const savedCart =
            localStorage.getItem(
                "ohaCart"
            );
        if (!savedCart) {
            return [];
        }
        const cart =
            JSON.parse(savedCart);
        if (!Array.isArray(cart)) {
            return [];
        }
        return cart;
    } catch (error) {
        console.error(
            "OHA Shop Cart Error:",
            error
        );
        return [];
    }
}
/* =========================================================
   UPDATE CART COUNT
   ========================================================= */
function updateCartCount() {
    const cartCount =
        document.getElementById(
            "cart-count"
        );
    if (!cartCount) {
        return;
    }
    const cart =
        getCart();
    let totalQuantity = 0;
    cart.forEach(function (item) {
        const quantity =
            Number(item.quantity) || 0;
        totalQuantity += quantity;
    });
    cartCount.textContent =
        totalQuantity;
    /*
     * Accessibility
     */
    cartCount.setAttribute(
        "aria-label",
        totalQuantity +
        " items in cart"
    );
}
/* =========================================================
   ADD TO CART
   ========================================================= */
function addToCart(product) {
    if (!product) {
        return;
    }
    const cart =
        getCart();
    const productId =
        String(product.id || "");
    const variant =
        String(product.variant || "");
    const existingItem =
        cart.find(function (item) {
            return (
                String(item.id) === productId &&
                String(item.variant || "") === variant
            );
        });
    if (existingItem) {
        existingItem.quantity =
            Number(existingItem.quantity || 0) +
            Number(product.quantity || 1);
    } else {
        cart.push({
            id: product.id,
            name: product.name || "",
            category:
                product.category || "",
            variant:
                product.variant || "",
            quantity:
                Number(product.quantity || 1),
            price:
                Number(product.price || 0),
            image:
                product.image || ""
        });
    }
    localStorage.setItem(
        "ohaCart",
        JSON.stringify(cart)
    );
    updateCartCount();
    return cart;
}
/* =========================================================
   REMOVE FROM CART
   ========================================================= */
function removeFromCart(productId, variant) {
    const cart =
        getCart();
    const updatedCart =
        cart.filter(function (item) {
            return !(
                String(item.id) ===
                String(productId) &&
                String(item.variant || "") ===
                String(variant || "")
            );
        });
    localStorage.setItem(
        "ohaCart",
        JSON.stringify(updatedCart)
    );
    updateCartCount();
    return updatedCart;
}
/* =========================================================
   CLEAR CART
   ========================================================= */
function clearCart() {
    localStorage.removeItem(
        "ohaCart"
    );
    updateCartCount();
}
/* =========================================================
   CART TOTAL
   ========================================================= */
function getCartTotal() {
    const cart =
        getCart();
    return cart.reduce(
        function (total, item) {
            const price =
                Number(item.price) || 0;
            const quantity =
                Number(item.quantity) || 0;
            return total +
                (price * quantity);
        },
        0
    );
}
/* =========================================================
   CART ITEM COUNT
   ========================================================= */
function getCartItemCount() {
    const cart =
        getCart();
    return cart.reduce(
        function (total, item) {
            return total +
                (Number(item.quantity) || 0);
        },
        0
    );
}
/* =========================================================
   FOOTER COPYRIGHT YEAR
   ========================================================= */
function updateCopyrightYear() {
    const yearElement =
        document.getElementById(
            "ohaCurrentYear"
        );
    if (!yearElement) {
        return;
    }
    yearElement.textContent =
        new Date().getFullYear();
}
/* =========================================================
   NEWSLETTER
   ========================================================= */
function initializeNewsletter() {
    const newsletterForm =
        document.getElementById(
            "ohaNewsletterForm"
        );
    if (!newsletterForm) {
        return;
    }
    newsletterForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();
            const emailInput =
                newsletterForm.querySelector(
                    'input[name="email"]'
                );
            if (!emailInput) {
                return;
            }
            const email =
                emailInput.value.trim();
            if (!email) {
                emailInput.focus();
                return;
            }
            /*
             * Backend integration will be added
             * later with Google Apps Script.
             *
             * For now we provide a simple
             * confirmation message.
             */
            showOhaMessage(
                "ধন্যবাদ! আপনার ইমেইল ঠিকানা গ্রহণ করা হয়েছে।",
                "success"
            );
            newsletterForm.reset();
        }
    );
}
/* =========================================================
   SIMPLE OHA MESSAGE
   ========================================================= */
function showOhaMessage(
    message,
    type = "success"
) {
    /*
     * Remove previous message
     */
    const existingMessage =
        document.querySelector(
            ".oha-app-message"
        );
    if (existingMessage) {
        existingMessage.remove();
    }
    /*
     * Create message
     */
    const messageElement =
        document.createElement(
            "div"
        );
    messageElement.className =
        "oha-app-message oha-app-message-" +
        type;
    messageElement.setAttribute(
        "role",
        "status"
    );
    messageElement.innerHTML = `
        <span class="oha-app-message-icon">
            <i class="fa-solid fa-check"></i>
        </span>
        <span class="oha-app-message-text">
            ${escapeHtml(message)}
        </span>
        <button
            type="button"
            class="oha-app-message-close"
            aria-label="Close"
        >
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;
    document.body.appendChild(
        messageElement
    );
    /*
     * Close button
     */
    const closeButton =
        messageElement.querySelector(
            ".oha-app-message-close"
        );
    if (closeButton) {
        closeButton.addEventListener(
            "click",
            function () {
                messageElement.remove();
            }
        );
    }
    /*
     * Auto remove
     */
    setTimeout(
        function () {
            if (
                messageElement &&
                messageElement.parentNode
            ) {
                messageElement.remove();
            }
        },
        5000
    );
}
/* =========================================================
   ESCAPE HTML
   ========================================================= */
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
/* =========================================================
   GLOBAL METHODS
   ========================================================= */
window.OHA.getCart =
    getCart;
window.OHA.addToCart =
    addToCart;
window.OHA.removeFromCart =
    removeFromCart;
window.OHA.clearCart =
    clearCart;
window.OHA.getCartTotal =
    getCartTotal;
window.OHA.getCartItemCount =
    getCartItemCount;
window.OHA.updateCartCount =
    updateCartCount;
window.OHA.showMessage =
    showOhaMessage;
