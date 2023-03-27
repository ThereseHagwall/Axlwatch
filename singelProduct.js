'use strict';

import createCartLs from "./createCartLs.js";
import pushGetSaveLS from "./pushGetSaveLS.js";

export default async function singelProductPage(id) {

    const prodUrl = `https://axlwatch.se/wp-json/wc/v3/products/${id}`;

    let response = await fetch(prodUrl);
    let data = await response.json();

    const root = document.getElementById("root");
    root.innerHTML = "";
    console.log(data); //! Vill man att det är något mer som ska skriva ut kan man ta en titt här =)...

    const singelProductContainer = document.createElement("section");
    const productName = document.createElement("h4");
    const singelProductDescription = document.createElement("p")
    const img = document.createElement("img");
    const currentPrice = document.createElement("p");
    const oldPrice = document.createElement("p");
    const prodBtn = document.createElement("button");

    singelProductContainer.className = "singelProductContainer";
    img.className = "singelProductImg";
    prodBtn.className = "addToCartBtn";
    singelProductDescription.classname = "singelProductDescription";

    singelProductDescription.innerHTML = data.description;
    prodBtn.innerText = "Lägg i varukorg";
    productName.innerText = data.name;

    if (data.price === data.regular_price) {
        oldPrice.innerText = "";
    } else {
        oldPrice.innerText = `${data.regular_price} kr`;
    }

    currentPrice.innerText = `${data.price} kr`;
    oldPrice.style.textDecoration = "line-through";
    img.src = data.images[0].src;

    prodBtn.addEventListener("click", () => {
        createCartLs()
        console.log("Läggs till i varukorgen")
        pushGetSaveLS(data.id)
    })

    singelProductContainer.append(img, productName, singelProductDescription, oldPrice, currentPrice, prodBtn);
    root.append(singelProductContainer);
}
