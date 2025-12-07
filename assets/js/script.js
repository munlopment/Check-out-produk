function goToProduct(name){
    window.location.href = "product.html?type=" + name;
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

    if(name.includes("Netflix")){
        document.getElementById("qrImage").src = "assets/image/produk/qr-netflix.png";
    } else {
        document.getElementById("qrImage").src = "assets/image/produk/qr-spotify.png";
    }
}

function sendWA(){
    let name = localStorage.getItem("coName");
    let price = localStorage.getItem("coPrice");

    let message = `Halo kak, saya sudah checkout:
Produk: ${name}
Total: Rp ${price}
Berikut bukti pembayaran saya.`;

    window.location.href = "https://wa.me/62857xxxxxx?text=" + encodeURIComponent(message);
}
