'use strict';

const container = document.getElementById("containerWrapper");

import postOrder from "./postOrder.js";
export default async function getCart() {
    console.log("Varukorg");
    let cart = document.getElementById("root");

    if(JSON.parse(localStorage.getItem("cart")).length > 0) {
        console.log("Finns produkter");
        cart.innerText = (JSON.parse(localStorage.getItem("cart")).length) + " st produkter";

        // Create form
        let form = document.createElement('form');
        form.id = 'order-form';
        form.innerHTML = `
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>

            <label for="phoneNumber">Phone number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required><br>

            <label for="city">City:</label>
            <input type="text" id="city" name="city" required><br>

            <label for="postcode">Postcode:</label>
            <input type="text" id="postcode" name="postcode" required><br>

            <input type="submit" value="Beställ">
        `;
        cart.appendChild(form);

        // Add event listener to form
        document.querySelector('#order-form').addEventListener('submit', postOrder);

        let emptyCartBtn = document.createElement("button");
        emptyCartBtn.innerText = "Töm kundvagnen";

        emptyCartBtn.addEventListener("click", () => {
            localStorage.setItem("cart", JSON.stringify([]));
            getCart();
        })

        cart.append(emptyCartBtn);

    } else {
        console.log("Tom kundvagn");
        cart.innerText = "Inga produkter"
    }
    document.querySelector('#order-form').reset();
}


