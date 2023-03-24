'use strict';

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
        // console.log(data);
        pageName.innerText = data.name;
        description.innerText = data.description;

    } catch (error) {
        console.error(error);
    }
}

getPageName();
getHome();

let root = document.getElementById("root");
let menu = document.getElementById("menu");
let cart = document.getElementById("cart");

let saveName = document.getElementById("saveName");
let userName = document.getElementById("userName");

// saveNameBtn.addEventListener("click", () => {
//     let setName = saveName.value;
//     localStorage.setItem("user", setName);
//     printLoggedInUser();
// })

// KOLLA OM DET FINNS EN USER
if (localStorage.getItem("user")) {
    console.log("Det finns en user");
    printLoggedInUser();
} else {
    console.log("Det finns ingen user");
    printLoginForm();
}

// KOLLA OM DET FINNS EN KUNDVAGN
if (localStorage.getItem("cart")) {
    console.log("Finns en kundvagn");
    printCart();
} else {
    console.log("Skapar tom kundvagn");
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    printCart();
}

function printLoginForm() {
    // PRINTA LOGIN FORM
    let loginForm = document.createElement("input");
    let loginBtn = document.createElement("button");
    loginBtn.innerText = "logga in";

    loginBtn.addEventListener("click", () => {
        localStorage.setItem("user", loginForm.value);
        printLoggedInUser();
    })
    userName.innerHTML = "";
    userName.append(loginForm, loginBtn);
}

function printLoggedInUser() {
    userName.innerText = localStorage.getItem("user");
    let logoutBtn = document.createElement("button")
    logoutBtn.innerText = "logga ut";

    let printUserName = document.createElement("span");
    printUserName.innerText = "Hej " + localStorage.getItem("user") +"!";

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        printLoginForm();
    })

    userName.innerHTML = "";
    userName.append(printUserName, logoutBtn)
}

fetch("https://axlwatch.se/wp-json/")
.then(res => res.json())
.then(data => {
    console.log("data", data);
    pageName.innerText = data.name + " - " + data.description;
})
.catch(err => console.log("err", err));


fetch("https://axlwatch.se/wp-json/wp/v2/pages") 
.then(res => res.json())
.then(data => {
    console.log("posts", data);
    printPages(data);
})

fetch("https://axlwatch.se/wp-json/wc/store/products")
.then(res => res.json())
.then(data => {
    console.log("produkter", data);
    printProductList(data);
})


function printCart() {
    
    if(JSON.parse(localStorage.getItem("cart")).length > 0) {
        console.log("Finns produkter");
        cart.innerText = (JSON.parse(localStorage.getItem("cart")).length) + " st produkter";

        let emptyCartBtn = document.createElement("button");
        emptyCartBtn.innerText = "Töm kundvagnen";

        emptyCartBtn.addEventListener("click", () => {
            localStorage.setItem("cart", JSON.stringify([]));
            printCart();
        })

        let sendOrderBtn = document.createElement("button");
        sendOrderBtn.innerText = "Skicka order";

        sendOrderBtn.addEventListener("click", postOrder)

        cart.append(emptyCartBtn, sendOrderBtn);

    } else {
        console.log("Tom kundvagn");
        cart.innerText = "Inga produkter"
    }
}

function postOrder() {
    console.log("Skicka order");

    // SKAPA BODY
    let order = {
        payment_method: "bacs", 
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        customer_id: 1,
        billing: {
            first_name: "Janne",
            last_name: "Kemi",
            adress_1: "Gatan 10",
            city: "Uddebo",
            postcode: "514 92",
            country: "SE",
            email: "janne@hiveandfive.se",
            phone: "070123456"
        },
        shipping: {
            first_name: "Janne",
            last_name: "Kemi",
            adress_1: "Gatan 10",
            city: "Uddebo",
            postcode: "514 92",
            country: "SE",
            email: "janne@hiveandfive.se",
            phone: "070123456"
        },
        line_items: [
            // LOOPA IGENOM KUNDVAGN
            {
                product_id: 13,
                quantity: 1
            }, 
            {
                product_id: 11,
                quantity: 2
            }
        ],
        shipping_lines: [
            {
                method_id: "flat_rate",
                method_title: "Flat rate",
                total: "100"
            }    
        ]
    
    }

    fetch("https://axlwatch.se/wp-json/wc/v3/orders", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(order),
    })
    .then(res => res.json())
    .then(data => {
        console.log("Order skickad", data);
        localStorage.setItem("cart", JSON.stringify([]));
        printCart();
    })
    .catch(err => console.log("err", err));
}