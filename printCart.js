'use strict'

import postOrder from "./postOrder.js";

export default function printCart() {

    if (JSON.parse(localStorage.getItem("cart")).length > 0) {
        console.log("Finns produkter");

        let emptyCartBtn = document.createElement("button");
        emptyCartBtn.innerText = "Töm kundvagnen";

        emptyCartBtn.addEventListener("click", () => {
            localStorage.setItem("cart", JSON.stringify([]));
            printCart();
        })

    } else {
        console.log("Tom kundvagn");
    }
}