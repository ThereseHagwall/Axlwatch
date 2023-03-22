import getCategories from "./getCategories.js";
import getNews from "./getNews.js"
import getProducts from "./getProducts.js";
let menu = document.getElementById("menu");
let root = document.getElementById("root");
const productCategory = document.getElementById("productCategory");

export default async function getMenu() {
    try {
        const response = await fetch("https://axlwatch.se/wp-json/wp/v2/pages")
        const data = await response.json();
        printPages(data);
    } catch (error) {
        console.error(error);
    }
}

getMenu();

function printPages(pages) {
    let ul = document.createElement("ul");
    ul.className = "headerMenu";
    pages.map(page => {
        // console.log("page", page.title.rendered);
        let li = document.createElement("li");
        li.innerText = page.title.rendered;

        li.addEventListener("click", () => {
            // console.log("page", page.title.rendered);
            console.log("page", page.title.rendered);
            if (page.title.rendered === "Nyheter") {
                productCategory.innerText = "";
                root.innerText = "";
                getNews();
            } else if (page.title.rendered === "Butik") {
                root.innerText = "";
                getCategories();
                getProducts();
            }
        })

        ul.appendChild(li);
    })
    menu.appendChild(ul);
}