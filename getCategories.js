'use strict'

import printCategory from "./printCategory.js"

const productCategory = document.getElementById("productCategory");

export default async function getCategories() {
    try {
        const response = await fetch("https://axlwatch.se/wp-json/wc/v3/products/categories");
        const getData = await response.json();
        printCategories(getData);
    } catch (error) {
        console.error(error);
    }
}


function printCategories(categories) {
    const btnContainer = document.getElementById('hidden-btn-container');
    const ul = document.createElement("ul");
    ul.className = "productCategoryMenu";
    categories.map(category => {
        const li = document.createElement("li");
        const aLink = document.createElement("a");
        aLink.innerText = category.name;

        aLink.addEventListener("click", () => {
            btnContainer.innerHTML = "";
            printCategory(category)
        })
        li.appendChild(aLink);
        ul.appendChild(li);
    })
    productCategory.appendChild(ul);
}
