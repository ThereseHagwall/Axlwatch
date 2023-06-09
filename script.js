'use strict';
import getSingleNews from "./singleNews.js";
import getNews from "./getNews.js"
import getMenu from "./getMenu.js";
import getProducts from "./getProducts.js";
import getCategories from "./getCategories.js";
import getHome from "./getHome.js";



let pageName = document.getElementById("pageName");
let description = document.getElementById("description");


async function getPageName() {
    try {
        const response = await fetch("https://axlwatch.se/wp-json");
        const data = await response.json();
        pageName.innerText = data.name;
        description.innerText = data.description;

    } catch (error) {
        console.error(error);
    }
}

getPageName();
getHome();

