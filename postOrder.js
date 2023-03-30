'use strict';

import printCart from "./printCart.js";
import getCart from "./getCart.js";

export default function postOrder(event) {
    event.preventDefault();

    const nameInput = document.querySelector('#name');
    const name = nameInput ? nameInput.value : '';
    const addressInput = document.querySelector('#address');
    const address = addressInput ? addressInput.value : '';
    const cityInput = document.querySelector('#city');
    const city = cityInput ? cityInput.value : '';
    const postcodeInput = document.querySelector('#postcode');
    const postcode = postcodeInput ? postcodeInput.value : '';
    const emailInput = document.querySelector('#email');
    const email = emailInput ? emailInput.value : '';
    const phoneInput = document.querySelector('#phone');
    const phone = phoneInput ? phoneInput.value : '';

    const cart = JSON.parse(localStorage.getItem("cart"));

    // SKAPA BODY
    let order = {
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        // customer_id: 1,
        billing: {
            first_name: name.split(" ")[0],
            last_name: name.split(" ")[1] || "",
            address_1: address,
            city: city,
            postcode: postcode,
            country: "SE",
            email: email,
            phone: phone
        },
        shipping: {
            first_name: name.split(" ")[0],
            last_name: name.split(" ")[1] || "",
            address_1: address,
            city: city,
            postcode: postcode,
            country: "SE",
            email: email,
            phone: phone
        },
        line_items:
            // LOOPA IGENOM KUNDVAGN
            cart,

        shipping_lines: [
            {
                method_id: "flat_rate",
                method_title: "Flat rate",
                total: "100"
            }
        ]
    }
event.target.reset();


    fetch("https://axlwatch.se/wp-json/wc/v3/orders", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body:JSON.stringify(order),
    })
    .then(res => res.json())
    .then(returnData => {

        localStorage.setItem("cart", JSON.stringify([]));
        printCart();
        let cart2 = document.getElementById("root");
        cart2.innerHTML = '';
        let message = document.createElement('p');
        message.textContent = `Tack för beställningen ${returnData.billing.first_name + ' ' + returnData.billing.last_name}. Ditt ordernummer är ${returnData.id}.`;
        cart2.appendChild(message);

    })
    .catch(err => console.log("err", err));

}