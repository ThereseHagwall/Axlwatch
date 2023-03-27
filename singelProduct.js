'use strict';

//Här ska det tömma och skriva ut en enda produkt på en större sida med mer information


export default async function singelProductPage(id) {

    const prodUrl = `https://axlwatch.se/wp-json/wc/v3/products/${id}`;

    let response = await fetch(prodUrl);
    let data = await response.json();

    const root = document.getElementById("root");
    root.innerHTML = "";
    console.log(data);
    console.log(data.price);
    console.log(data.regular_price);

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


    console.log(data);
    singelProductContainer.append(img, productName, singelProductDescription, oldPrice, currentPrice, prodBtn);
    root.append(singelProductContainer);

}
/*
//!*lägga in i lyssnaren på prod img
//!*Skicka in produkt id till den här funktionen
//!*Rensa domen för att kunna ladda in nya saker
//!*Det ska laddas in produkt namn
//!*Det ska laddas in produkt beskrivning
//!*Det ska laddas in produkt bild
//!*Det ska laddas in produkt pris
//!*Det ska laddas in produkt rea pris?
*Det ska laddas in produkt .....
*/