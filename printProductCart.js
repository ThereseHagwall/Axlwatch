'use strict';

import createCartLs from "./createCartLs.js";

export default function printProductCart() {
    createCartLs()
    let cart = JSON.parse(localStorage.getItem("cart"))
    const table = document.createElement("table");
    const root = document.getElementById("root")
    const tr1 = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.innerText = "ID";
    const th2 = document.createElement("th");
    th2.innerText = "Bild";
    const th3 = document.createElement("th");
    th3.innerText = "Namn";
    const th4 = document.createElement("th");
    th4.innerText = "Pris";
    const th5 = document.createElement("th");
    th5.innerText = "Antal";

    table.append(tr1);
    tr1.append(th1, th2, th3, th4, th5);
    const cartWrapper = document.createElement("div")
    cartWrapper.append(table)
    const shippingPrice = document.createElement("p");
    shippingPrice.className = "pTag";
    let sumArr = [];
    const sum = document.createElement("p");
    sum.className = "pTag";
    let i = 0;
    cart.forEach(() => {

        fetchProdId(cart)
        async function fetchProdId() {
            if (cart[i].quantity > 1) {

                var qty = cart[i].quantity;
            } else {
                var qty = 1;
            }


            const prodAmount = document.createElement("p");
            prodAmount.innerText = cart[i].quantity;

            const prodUrl = `https://axlwatch.se/wp-json/wc/v3/products/${cart[i].product_id}`;
            let response = await fetch(prodUrl);
            let data = await response.json();

            const prodWrapper = document.createElement("div");
            const prodImg = document.createElement("img");
            const prodId = document.createElement("p");
            const prodName = document.createElement("p");
            const prodPrice = document.createElement("p");

            prodImg.className = "cartImg";
            cartWrapper.className = "cartWrapper";
            prodWrapper.className = "prodWrapper";

            const shippingCost = 100;

            sumArr.push(parseInt(data.price * qty))
            prodId.innerText = data.id;
            prodImg.src = data.images[0].src;
            prodName.innerText = data.name;
            prodPrice.innerText = data.price;

            function sumArray(array) {
                let sum = 0;

                array.forEach(item => {
                    sum += item;
                });

                return sum;
            }
            shippingPrice.innerText = `Frakt: ${shippingCost} kr`;
            sum.innerText = `Totalsumma: ${sumArray(sumArr) + shippingCost} kr`;

            root.append(cartWrapper)
            cartWrapper.append(prodWrapper, shippingPrice, sum)
            prodWrapper.append(prodId, prodImg, prodName, prodPrice, prodAmount)
        }
        i++
    });
}
