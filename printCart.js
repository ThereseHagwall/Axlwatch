'use strict'

import postOrder from "./postOrder.js";

export default function printCart() {

    // let nisse = document.getElementById("wrapper");
    let cart = document.getElementById("cart");

    if(JSON.parse(localStorage.getItem("cart")).length > 0) {

        // nisse.innerHTML = "";
        console.log("Finns produkter");
        cart.innerText = (JSON.parse(localStorage.getItem("cart")).length) + " st produkter";

        let emptyCartBtn = document.createElement("button");
        emptyCartBtn.innerText = "Töm kundvagnen";

        emptyCartBtn.addEventListener("click", () => {
            localStorage.setItem("cart", JSON.stringify([]));
            printCart();
        })

    } else {
        console.log("Tom kundvagn");
        cart.innerText = "Inga produkter"
    }
}