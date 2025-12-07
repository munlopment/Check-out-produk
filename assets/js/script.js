function goToProduct(name){
    window.location.href = "product.html?name=" + name;
}

function checkout(name, price){
    localStorage.setItem("coName", name);
    localStorage.setItem("coPrice", price);
    window.location.href = "checkout.html";
}

function loadCheckout(){
    let name = localStorage.getItem("coName");
    let price = localStorage.getItem("coPrice");

    document.getElementById("coName").innerText = name;
    document.getElementById("coPrice").innerText = "Rp " + price;

    let qr = document.getElementById("qrImage");

    if(name.includes("Netflix")){
        qr.src = "assets/image/products/qr-netflix.png";
    } else {
        qr.src = "assets/image/products/qr-spotify.png";
    }
}

function sendWA(){
    let name = localStorage.getItem("coName");
    let price = localStorage.getItem("coPrice");

    let msg = 
`Halo kak, saya sudah melakukan pembayaran.
Produk: ${name}
Harga: Rp ${price}
Berikut bukti pembayaran saya.`;

    window.location.href =
        "https://wa.me/62857XXXXXXX?text=" + encodeURIComponent(msg);
}

(function(){

    const body = document.body;
    const popup = document.getElementById('popup');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const processBtn = document.getElementById('processBtn');
    const closeBtn = document.getElementById('closeBtn');
    const closeBtn2 = document.getElementById('closeBtn2');
    const qrBox = document.getElementById('qrBox');

    let loadingAdded = false;
    let qrGlowAnimation = null;

    // OPEN POPUP
    function openPopup(){
        popup.style.display = 'flex';
        step1.style.display = 'block';
        step2.style.display = 'none';
        body.classList.add('popup-open');
        popup.setAttribute('aria-hidden', 'false');

        animatePopup(step1);
        startQRGlow();
    }

    // CLOSE POPUP
    function closePopup(){
        popup.classList.add("closing");

        setTimeout(()=>{
            popup.style.display = 'none';
            popup.classList.remove("closing");
        }, 200);

        body.classList.remove("popup-open");
        popup.setAttribute('aria-hidden', 'true');

        stopQRGlow();
        removeLoadingAnim();
        loadingAdded = false;
    }

    // STEP 2
    function showStep2(){
        step1.style.display = 'none';
        step2.style.display = 'block';
        animatePopup(step2);
        stopQRGlow();
    }

    // ANIMASI MASUK POPUP
    function animatePopup(box){
        if(!box) return;
        box.style.transform = 'scale(0.9)';
        box.style.opacity = '0';
        setTimeout(()=>{
            box.style.transition = '0.28s ease';
            box.style.transform = 'scale(1)';
            box.style.opacity = '1';
        }, 10);
    }

    // QR GLOW
    function startQRGlow(){
        if(qrGlowAnimation) return;
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

    function stopQRGlow(){
        if(qrGlowAnimation){
            qrGlowAnimation.cancel();
            qrGlowAnimation = null;
            qrBox.style.boxShadow = '';
        }
    }

    // LOADING → STEP 2
    function showLoadingThenNext(){
        if(loadingAdded) return;

        const div = document.createElement("div");
        div.id = "loadingAnim";
        div.style = "margin-top:15px; text-align:center; font-size:16px;";
        div.innerHTML = `
            <div class="spinner"></div>
            <div>Memverifikasi pembayaran...</div>
        `;

        step1.appendChild(div);
        loadingAdded = true;

        setTimeout(()=>{ showStep2(); }, 1700);
    }

    function removeLoadingAnim(){
        const l = document.getElementById("loadingAnim");
        if(l) l.remove();
    }

    // RIPPLE EFFECT
    function addRipple(e){
        const button = e.currentTarget;
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        const size = Math.max(button.clientWidth, button.clientHeight);

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = e.clientX - rect.left - size/2 + "px";
        ripple.style.top = e.clientY - rect.top - size/2 + "px";

        button.appendChild(ripple);

        setTimeout(()=> ripple.remove(), 600);
    }

    // EVENT
    checkoutBtn.addEventListener("click", openPopup);
    closeBtn.addEventListener("click", closePopup);
    closeBtn2.addEventListener("click", closePopup);

    processBtn.addEventListener("click", function(e){
        addRipple(e);
        showLoadingThenNext();
    });

    checkoutBtn.addEventListener("click", addRipple);

    // KLIK DI LUAR POPUP UNTUK TUTUP
    popup.addEventListener("click", function(e){
        if(e.target === popup){ closePopup(); }
    });

})();
