(function() {
  "use strict";

  // =========================
  // Page Loader
  // =========================
  const loader = document.getElementById("page-loader");
  window.addEventListener("load", () => {
    if(loader){
      loader.classList.add("hidden");
      setTimeout(() => loader.style.display="none",600);
    }
    // Hero fade-in
    const hero = document.querySelector(".hero-content");
    if(hero) hero.classList.add("show");
    // Produk staggered
    const cards = document.querySelectorAll(".product-card");
    cards.forEach((card, idx) => {
      setTimeout(() => card.classList.add("show"), idx * 150);
    });
  });

  // =========================
  // Set Year
  // =========================
  const yearSpan = document.getElementById("year");
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // =========================
  // Smooth Scroll Hero to Produk
  // =========================
  const scrollBtn = document.getElementById("scrollToProduk");
  if(scrollBtn){
    scrollBtn.addEventListener("click", e => {
      e.preventDefault();
      const produk = document.getElementById("produk");
      if(produk) produk.scrollIntoView({behavior:"smooth"});
    });
  }

  // =========================
  // Produk Hover Animation
  // =========================
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
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
