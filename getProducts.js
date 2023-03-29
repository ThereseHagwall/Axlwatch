'use strict';

import createCartLs from "./createCartLs.js";
import singelProductPage from "./singelProduct.js";
import pushGetSaveLS from "./pushGetSaveLS.js";

let root = document.getElementById("root");

export default async function getProducts() {

    let response = await fetch("https://axlwatch.se/wp-json/wc/store/products");
    let data = await response.json();

    data.map(data => {
        const productContainer = document.createElement("section");
        const productName = document.createElement("h4");
        const img = document.createElement("img");
        const currentPrice = document.createElement("p");
        const oldPrice = document.createElement("p");
        const prodBtn = document.createElement("button");
        productContainer.className = "productContainer";
        img.className = "productImg";
        prodBtn.className = "addToCartBtn";
        prodBtn.innerText = "Lägg i varukorg";
        productName.innerText = data.name;

        if (data.prices.price === data.prices.regular_price) {
            oldPrice.innerText = "";
        } else {
            oldPrice.innerText = `${data.prices.regular_price} kr`;
        }
        currentPrice.innerText = `${data.prices.price} kr`;
        oldPrice.style.textDecoration = "line-through";
        img.src = data.images[0].src;

        img.addEventListener("click", () => {
            console.log("Product");
            //Här ska man komma in på en produktsida
            console.log(data.id);
            singelProductPage(data.id);
        })

        prodBtn.addEventListener("click", () => {
            createCartLs()
            console.log("Läggs till i varukorgen")
            let pushedItem = document.createElement('h5');
            pushedItem.innerText = '✅ tillagd i varukorgen';
            setTimeout(function () {
                pushedItem.innerText = "";
            }, 2000);
            pushGetSaveLS(data.id)
            productContainer.appendChild(pushedItem);
        })

        productContainer.append(img, productName, oldPrice, currentPrice, prodBtn);
        root.append(productContainer);
    })
}

