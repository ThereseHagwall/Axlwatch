import getNews from "./getNews.js"
import getMenu from "./getMenu.js";
import getProducts from "./getProducts.js";
import getCategories from "./getCategories.js";

let pageName = document.getElementById("pageName");
let description = document.getElementById("description");


async function getPageName() {
    try {
        const response = await fetch("https://axlwatch.se/wp-json");
        const data = await response.json();
        // console.log(data);
        pageName.innerText = data.name;
        description.innerText = data.description;

    } catch (error) {
        console.error(error);
    }
}

getPageName();