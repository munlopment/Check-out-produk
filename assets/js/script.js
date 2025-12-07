// =========================
// MUNLOPMENT STORE JS
// Professional & Modular
// =========================

(function () {
  "use strict";

  // =========================
  // Page Loader
  // =========================
  function hideLoader() {
    const loader = document.getElementById("page-loader");
    if (!loader) return;
    loader.classList.add("hidden");
  }

  window.addEventListener("load", () => {
    setTimeout(hideLoader, 500); // loader fade-out
  });

  // =========================
  // Set current year in footer
  // =========================
  function setCurrentYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }
  setCurrentYear();

  // =========================
  // Smooth Scroll to Produk
  // =========================
  const scrollToProdukBtn = document.getElementById("scrollToProduk");
  if (scrollToProdukBtn) {
    scrollToProdukBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const produkSection = document.getElementById("produk");
      if (produkSection) {
        produkSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // =========================
  // Product Hover Animation
  // =========================
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
      card.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 6px 12px rgba(0,0,0,0.05)";
    });
  });

})();
