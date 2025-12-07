/* ============================================================
   MUNLOPMENT STORE – MAIN JAVASCRIPT
   Clean • No conflict • Optimized • Safe for all pages
============================================================ */

/* ---------- 1. CORE NAVIGATION FUNCTIONS ---------- */
function goToProduct(name) {
    window.location.href = "product.html?name=" + encodeURIComponent(name);
}

function checkout(name, price) {
    localStorage.setItem("coName", name);
    localStorage.setItem("coPrice", price);
    window.location.href = "checkout.html";
}

function loadCheckout() {
    let name = localStorage.getItem("coName") || "Produk Tidak Ditemukan";
    let price = localStorage.getItem("coPrice") || "0";

    let nameDOM = document.getElementById("coName");
    let priceDOM = document.getElementById("coPrice");
    let qr = document.getElementById("qrimage");

    if (nameDOM) nameDOM.innerText = name;
    if (priceDOM) priceDOM.innerText = "Rp " + price;

    if (qr) {
        if (name.toLowerCase().includes("netflix")) {
            qr.src = "assets/images/products/qr-netflix.png";
        } else {
            qr.src = "assets/images/products/qr-spotify.png";
        }
    }
}

/* Nomor WA Resmi */
const WA_NUMBER = "6285282788041";

function sendWA() {
    let name = localStorage.getItem("coName");
    let price = localStorage.getItem("coPrice");

    let msg =
`Halo kak, saya sudah melakukan pembayaran.
Produk: ${name}
Harga: Rp ${price}
Berikut bukti pembayaran saya.`;

    window.location.href =
        "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
}

/* ============================================================
   2. POPUP CHECKOUT + ANIMASI
============================================================ */

(function () {

    /* Kalau elemen popup tidak ada di halaman ini, STOP */
    const popup = document.getElementById('popup');
    if (!popup) return;

    const body = document.body;
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const processBtn = document.getElementById('processBtn');
    const closeBtn = document.getElementById('closeBtn');
    const closeBtn2 = document.getElementById('closeBtn2');
    const qrBox = document.getElementById('qrBox');

    let loadingAdded = false;
    let qrGlowAnimation = null;

    /* ---------- POPUP OPEN ---------- */
    function openPopup() {
        popup.style.display = 'flex';

        step1.style.display = 'block';
        step2.style.display = 'none';

        body.classList.add('popup-open');
        popup.setAttribute('aria-hidden', 'false');

        animatePopup(step1);
        startQRGlow();
    }

    /* ---------- POPUP CLOSE ---------- */
    function closePopup() {
        popup.classList.add("closing");

        setTimeout(() => {
            popup.style.display = 'none';
            popup.classList.remove("closing");
        }, 200);

        body.classList.remove('popup-open');
        popup.setAttribute('aria-hidden', 'true');

        stopQRGlow();
        removeLoadingAnim();
        loadingAdded = false;
    }

    /* ---------- GO TO STEP 2 ---------- */
    function showStep2() {
        step1.style.display = 'none';
        step2.style.display = 'block';
        animatePopup(step2);
        stopQRGlow();
    }

    /* ---------- POPUP ANIMATION ---------- */
    function animatePopup(box) {
        if (!box) return;
        box.style.transform = 'scale(0.9)';
        box.style.opacity = '0';
        setTimeout(() => {
            box.style.transition = '0.28s ease';
            box.style.transform = 'scale(1)';
            box.style.opacity = '1';
        }, 10);
    }

    /* ---------- QR GLOW ANIMATION ---------- */
    function startQRGlow() {
        if (!qrBox) return;
        if (qrGlowAnimation) return;

        qrGlowAnimation = qrBox.animate([
            { boxShadow: "0 0 0px rgba(0,150,255,0)" },
            { boxShadow: "0 0 18px rgba(0,150,255,0.5)" },
            { boxShadow: "0 0 0px rgba(0,150,255,0)" }
        ], {
            duration: 3000,
            iterations: Infinity,
            easing: "ease-in-out"
        });
    }

    function stopQRGlow() {
        if (qrGlowAnimation) {
            qrGlowAnimation.cancel();
            qrGlowAnimation = null;
            qrBox.style.boxShadow = '';
        }
    }

    /* ---------- LOADING THEN NEXT ---------- */
    function showLoadingThenNext() {
        if (loadingAdded) return;

        const div = document.createElement("div");
        div.id = "loadingAnim";
        div.style = "margin-top:15px; text-align:center; font-size:16px;";
        div.innerHTML = `
            <div class='spinner'></div>
            <div>Memverifikasi pembayaran...</div>
        `;
        step1.appendChild(div);

        loadingAdded = true;

        setTimeout(() => { showStep2(); }, 1700);
    }

    function removeLoadingAnim() {
        const l = document.getElementById("loadingAnim");
        if (l) l.remove();
    }

    /* ---------- RIPPLE EFFECT ---------- */
    function addRipple(e) {
        const button = e.currentTarget;
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        const size = Math.max(button.clientWidth, button.clientHeight);

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = e.clientX - rect.left - size / 2 + "px";
        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    /* ---------- EVENT LISTENERS ---------- */
    checkoutBtn?.addEventListener("click", openPopup);
    checkoutBtn?.addEventListener("click", addRipple);

    processBtn?.addEventListener("click", function (e) {
        addRipple(e);
        showLoadingThenNext();
    });

    closeBtn?.addEventListener("click", closePopup);
    closeBtn2?.addEventListener("click", closePopup);

    popup.addEventListener("click", (e) => {
        if (e.target === popup) closePopup();
    });

})();
