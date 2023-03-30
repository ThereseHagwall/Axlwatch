'use strict'

const categoryUrl = "https://axlwatch.se/index.php/wp-json/wc/v3/products?category="

import singelProductPage from "./singelProduct.js";
import createCartLs from "./createCartLs.js";
import pushGetSaveLS from "./pushGetSaveLS.js";

let root = document.getElementById("root");

export default async function printCategory(category) {

    const fetchCategoryId = categoryUrl + category.id;

    try {
        const response = await fetch(fetchCategoryId);
        const data = await response.json();

        root.innerHTML = "";
        data.map(product => {

            const prodCon = document.createElement("div");
            prodCon.className = "productContainer";
            const productName = document.createElement("div");
            const img = document.createElement("img");
            img.className = "productImg";
            const currentPrice = document.createElement("p");
            const oldPrice = document.createElement("p");
            const prodBtn = document.createElement("button");
            prodBtn.className = "addToCartBtn";
            prodBtn.innerText = "Lägg i varukorg";
            productName.innerText = product.name;
            if (product.price === product.regular_price) {
                oldPrice.innerText = "";
            } else {
                oldPrice.innerText = `${product.regular_price} kr`;
            }
            currentPrice.innerText = `${product.price} kr`;
            oldPrice.style.textDecoration = "line-through";
            img.src = product.images[0].src;

            img.addEventListener("click", () => {
                singelProductPage(product.id)

            })

            prodBtn.addEventListener("click", () => {
                createCartLs()
                let pushedItem = document.createElement('h5');
                pushedItem.innerText = '✅ tillagd i varukorgen';
                setTimeout(function () {
                    pushedItem.innerText = "";
                }, 2000);
                prodCon.appendChild(pushedItem);
                pushGetSaveLS(data.id)

            })

            prodCon.append(img, productName, oldPrice, currentPrice, prodBtn);
            root.append(prodCon);

        })

    } catch (error) {
        console.error(error);
    }
};