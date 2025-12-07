document.addEventListener("DOMContentLoaded", function() {
  // ================= LOADER =================
  const loader = document.getElementById("page-loader");
  if(loader){
    setTimeout(() => {
      loader.classList.add("hide");
    }, 600); // delay 0.6 detik
  }

  // ================= FOOTER YEAR =================
  const yearEl = document.getElementById("year");
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }
});
