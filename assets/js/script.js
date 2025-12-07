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
