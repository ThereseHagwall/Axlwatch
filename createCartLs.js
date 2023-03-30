'use strict';

import printCart from "./printCart.js";

export default function createCartLs() {

        if (localStorage.getItem("cart")) {
        printCart();
    } else {
        let cartLs = [];
        localStorage.setItem("cart", JSON.stringify(cartLs));
        printCart();
    }
}
