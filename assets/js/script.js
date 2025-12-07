/* ==========================
   LOADER
========================== */
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("page-loader");
    if (loader) setTimeout(() => loader.classList.add("hide"), 300);

    const yearDOM = document.getElementById("year");
    if (yearDOM) yearDOM.innerText = new Date().getFullYear();
});

/* ==========================
   SCROLL TO PRODUK
========================== */
const scrollBtn = document.getElementById("scrollToProduk");
if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        const produkSection = document.getElementById("produk");
        if (produkSection) produkSection.scrollIntoView({ behavior: 'smooth' });
    });
}

/* ==========================
   CHECKOUT STORAGE
========================== */
function checkout(name, price) {
    localStorage.setItem("coName", name);
    localStorage.setItem("coPrice", price);
    window.location.href = "checkout.html";
}

/* ==========================
   LOAD CHECKOUT
========================== */
function loadCheckout() {
    let name = localStorage.getItem("coName") || "Produk Tidak Ditemukan";
    let price = localStorage.getItem("coPrice") || "0";

    const nameDOM = document.getElementById("coName");
    const priceDOM = document.getElementById("coPrice");
    const qr = document.getElementById("qrimage");

    if (nameDOM) nameDOM.innerText = name;
    if (priceDOM) priceDOM.innerText = "Rp " + price;

    if (qr) {
        if (name.toLowerCase().includes("netflix")) qr.src = "assets/images/products/qr-netflix.png";
        else if (name.toLowerCase().includes("spotify")) qr.src = "assets/images/products/qr-spotify.png";
        else qr.src = "assets/images/qr.png";
    }
}

/* ==========================
   SEND TO WA
========================== */
const WA_NUMBER = "6285282788041";

function sendWA() {
    const name = localStorage.getItem("coName");
    const price = localStorage.getItem("coPrice");

    const msg = `Halo kak, saya sudah melakukan pembayaran.\nProduk: ${name}\nHarga: Rp ${price}\nBerikut bukti pembayaran saya.`;
    window.location.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
}

/* ==========================
   POPUP PRODUCT + VALIDASI CHECKBOX
========================== */
function popupProduct(name, desc, price) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popupTitle");
    const content = document.getElementById("popupDesc");
    const checkbox = document.getElementById("agreeTerms");
    const checkoutBtn = document.getElementById("popupCheckout");

    if (!popup) return;

    title.innerText = name;
    content.innerText = desc;
    checkbox.checked = false;
    checkoutBtn.disabled = true;

    checkbox.addEventListener("change", () => {
        checkoutBtn.disabled = !checkbox.checked;
    });

    checkoutBtn.onclick = () => checkout(name, price);

    popup.style.display = "flex";

    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
}
