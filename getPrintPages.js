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

let headerMenu = document.getElementById("headerMenu");
let footerMenu = document.getElementById("footerMenu");
let root = document.getElementById("root");
const container = document.getElementById("containerWrapper");
const productCategory = document.getElementById("productCategory");

export default function printPages(pages) {
    let ulHeader = document.createElement("ul");
    ulHeader.className = "headerMenu";
    let ulFooter = document.createElement("ul");
    ulFooter.className = "footerMenu";
    pages.map(page => {
        console.log("page", page);
        let li = document.createElement("li");
        if (page.title.rendered === "Kassa") {
            li.innerText = "";
        } else {
            li.innerText = page.title.rendered;
        }
        if (page.title.rendered === "Varukorg" || page.title.rendered === "Om oss" || page.title.rendered === "Hem" || page.title.rendered === "Nyheter" || page.title.rendered === "Butik") {
            ulHeader.appendChild(li);
        } else {
            ulFooter.appendChild(li);
        }
        li.addEventListener("click", () => {
            // console.log("page", page.title.rendered);
            console.log("page", page.title.rendered);
            if (page.title.rendered === "Hem") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                getHome(page);
            } else if (page.title.rendered === "Nyheter") {
                productCategory.innerText = "";
                root.innerText = "";
                container.innerText = "";
                getNews();
            } else if (page.title.rendered === "Butik") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                getCategories();
                getProducts();
            } else if (page.title.rendered === "Återbetalnings- och returpolicy") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                getRefundsPolicy(page);
            } else if (page.title.rendered === "Om oss") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                getAboutUs(page);
            } else if (page.title.rendered === "Mitt konto") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                getMyAccount(page);
            } else if (page.title.rendered === "Varukorg") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                getCart(page);
            } else if (page.title.rendered === "Privacy Policy") {
                root.innerText = "";
                productCategory.innerText = "";
                container.innerText = "";
                getPrivacyPolicy(page);
            }
        })
    })
    headerMenu.appendChild(ulHeader);
    footerMenu.appendChild(ulFooter);
}