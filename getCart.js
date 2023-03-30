'use strict';

const container = document.getElementById("containerWrapper");

import postOrder from "./postOrder.js";
export default async function getCart() {
    let cart = document.getElementById("root");

    if (JSON.parse(localStorage.getItem("cart")).length > 0) {

        // Create form
        let form = document.createElement('form');
        form.id = 'order-form';
        form.innerHTML = `
            <label for="name">Namn:</label>
            <input type="text" id="name" name="name" required>

            <label for="phoneNumber">Telefonnummer:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="address">Adress:</label>
            <input type="text" id="address" name="address" required>

            <label for="city">Stad:</label>
            <input type="text" id="city" name="city" required>

            <label for="postcode">Postnummer:</label>
            <input type="text" id="postcode" name="postcode" required>

            <input type="submit" value="Skicka beställning" id="submitBtn">
        `;
        cart.appendChild(form);
        document.querySelector('#order-form').addEventListener('submit', postOrder);
        // Add event listener to form
        document.querySelector('#order-form').addEventListener('submit', function (event) {
            event.preventDefault();
            let cart = document.getElementById("root");
            cart.innerHTML = '';
            let message = document.createElement('p');
            message.textContent = `Vi behandlar din order!`;
            cart.appendChild(message);
        });
        let emptyCartBtn = document.createElement("button");
        emptyCartBtn.innerText = "Töm kundvagnen";
        emptyCartBtn.id = "emptyCartBtn";

        emptyCartBtn.addEventListener("click", () => {
            localStorage.setItem("cart", JSON.stringify([]));
            getCart();
        })

        cart.append(emptyCartBtn);

    } else {
        cart.innerText = "Inga produkter"
    }
}


