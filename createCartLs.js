'use strict';

import printCart from "./printCart.js";

export default function cartLs() {

        if (localStorage.getItem("cart")) {
        console.log("Finns en kundvagn");
        printCart();
    } else {
        console.log("Skapar tom kundvagn");
        let cartLs = [];
        localStorage.setItem("cart", JSON.stringify(cartLs));
        printCart();
    }
}
