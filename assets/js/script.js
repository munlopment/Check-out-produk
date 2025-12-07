// ===================== SCRIPT.JS =====================

// Tunggu halaman siap sepenuhnya
document.addEventListener("DOMContentLoaded", function() {
  // ================= LOADER =================
  const loader = document.getElementById("page-loader");
  if(loader){
    setTimeout(() => {
      loader.classList.add("hide");
    }, 800); // delay 0.8 detik biar smooth
  }

  // ================= FOOTER YEAR =================
  const yearEl = document.getElementById("year");
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }
});
