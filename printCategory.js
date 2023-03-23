'use strict'

const categoryUrl = "https://axlwatch.se/index.php/wp-json/wc/v3/products?category="

let root = document.getElementById("root");


export default async function printCategory(category) {

    const fetchCategoryId = categoryUrl+category.id;

    try {
        const response = await fetch(fetchCategoryId);
        const data = await response.json();

        root.innerHTML = "";
        data.map(product => {

            const prodCon = document.createElement("div");
            prodCon.className = "productContainer";
            let productName = document.createElement("div");
            let img = document.createElement("img");
            img.className = "productImg";
            let currentPrice = document.createElement("p");
            let oldPrice = document.createElement("p");
            productName.innerText = product.name;
            if (product.price === product.regular_price) {
                oldPrice.innerText = "";
            } else {
                oldPrice.innerText = `${product.regular_price} kr`;
            }
            currentPrice.innerText = `${product.price} kr`;
            oldPrice.style.textDecoration = "line-through";
            img.src = product.images[0].src;

            prodCon.append(img, productName, oldPrice, currentPrice);
            root.append(prodCon);

    })

    } catch (error) {
        console.error(error);
    }
};