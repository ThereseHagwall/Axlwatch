'use strict';

let root = document.getElementById("root");

export default async function getProducts() {
    let response = await fetch("https://axlwatch.se/wp-json/wc/store/products");
    let data = await response.json();

    data.map(data => {
        let productContainer = document.createElement("section");
        productContainer.className = "productContainer";
        let productName = document.createElement("h4");
        let img = document.createElement("img");
        img.className = "productImg";
        let currentPrice = document.createElement("p");
        let oldPrice = document.createElement("p");
        productName.innerText = data.name;
        if (data.prices.price === data.prices.regular_price) {
            oldPrice.innerText = "";
        } else {
            oldPrice.innerText = `${data.prices.regular_price} kr`;
        }
        currentPrice.innerText = `${data.prices.price} kr`;
        oldPrice.style.textDecoration = "line-through";
        img.src = data.images[0].src;

        productContainer.append(img, productName, oldPrice, currentPrice);
        root.append(productContainer);
    })
}

