'use strict';

import getCategories from "./getCategories.js";
import getNews from "./getNews.js"
import getProducts from "./getProducts.js";
import getAboutUs from "./getAboutUs.js";
import getCart from "./getCart.js";
import getHome from "./getHome.js";
import getMyAccount from "./getMyAccount.js";
import getPrivacyPolicy from "./getPrivacyPolicy.js";
import getRefundsPolicy from "./getRefundsPolicy.js";
import printProductCart from "./printProductCart.js";
import getContactInfo from "./getContactInfo.js";


let headerMenu = document.getElementById("headerMenu");
let footerMenu = document.getElementById("footerMenu");
let root = document.getElementById("root");
const container = document.getElementById("containerWrapper");
const productCategory = document.getElementById("productCategory");
const btnContainer = document.getElementById('hidden-btn-container');


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
    let ulHeader = document.createElement("ul");
    ulHeader.className = "headerMenu";
    let ulFooter = document.createElement("ul");
    ulFooter.className = "footerMenu";
    pages.map(page => {
        let li = document.createElement("li");
        if (page.title.rendered === "Kassa") {
            li.innerText = "";
        } else {
            li.innerText = page.title.rendered;
            li.id = page.slug;
        }
        if (page.title.rendered === "Kontakt" || page.title.rendered === "Om oss" || page.title.rendered === "Hem" || page.title.rendered === "Nyheter" || page.title.rendered === "Butik" || page.title.rendered === "Varukorg") {
            ulHeader.appendChild(li);
        } else {
            ulFooter.appendChild(li);
        }
        li.addEventListener("click", () => {
            if (page.title.rendered === "Hem") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                btnContainer.innerHTML = "";
                getHome(page);
            } else if (page.title.rendered === "Nyheter") {
                productCategory.innerText = "";
                root.innerText = "";
                container.innerText = "";
                btnContainer.innerHTML = "";
                getNews();
            } else if (page.title.rendered === "Butik") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                btnContainer.innerHTML = "";
                getCategories();
                getProducts();
            } else if (page.title.rendered === "Återbetalnings- och returpolicy") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                btnContainer.innerHTML = "";
                getRefundsPolicy(page);
            } else if (page.title.rendered === "Om oss") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                btnContainer.innerHTML = "";
                getAboutUs(page);
            } else if (page.title.rendered === "Mitt konto") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                btnContainer.innerHTML = "";
                getMyAccount(page);
            } else if (page.title.rendered === "Varukorg") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                btnContainer.innerHTML = "";
                printProductCart()
                getCart(page);
            } else if (page.title.rendered === "Privacy Policy") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                btnContainer.innerHTML = "";
                getPrivacyPolicy(page);
            } else if (page.title.rendered === "Kontakt") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                btnContainer.innerHTML = "";
                getContactInfo(page);
            }
        })
    })
    headerMenu.appendChild(ulHeader);
    footerMenu.appendChild(ulFooter);
}