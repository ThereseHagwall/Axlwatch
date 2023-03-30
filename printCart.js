'use strict'

export default function printCart() {

    if (JSON.parse(localStorage.getItem("cart")).length > 0) {

        let emptyCartBtn = document.createElement("button");
        emptyCartBtn.innerText = "Töm kundvagnen";

        emptyCartBtn.addEventListener("click", () => {
            localStorage.setItem("cart", JSON.stringify([]));
            printCart();
        })
    }
}