'use strict';

import printCart from "./printCart.js";
import cartLs from "./createCartLs.js";

let root = document.getElementById("root");

export default async function getProducts() {


    let response = await fetch("https://axlwatch.se/wp-json/wc/store/products");
    let data = await response.json();

    data.map(data => {
        let productContainer = document.createElement("section");
        let productName = document.createElement("h4");
        let img = document.createElement("img");
        let currentPrice = document.createElement("p");
        let oldPrice = document.createElement("p");
        let prodBtn = document.createElement("button");
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
        })

        prodBtn.addEventListener("click", () => {
            cartLs()
            console.log("Läggs till i varukorgen")

            // HÄMTA
            let cart = JSON.parse(localStorage.getItem("cart"))
            console.log("cart från LS", cart);

            // ÄNDRA
            cart.push(data.id);

            // SPARA
            localStorage.setItem("cart", JSON.stringify(cart))
            console.log("DET SKA SPARAS");
            printCart();
        })

        productContainer.append(img, productName, oldPrice, currentPrice, prodBtn);
        root.append(productContainer);
    })
}

