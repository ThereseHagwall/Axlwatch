'use strict';

import printCart from "./printCart.js";


export default function pushGetSaveLS(id) {

    // Lägger till i LS
    const cart = JSON.parse(localStorage.getItem("cart"))
    cart.push(id);
    //! Här ska vi även lägga in det i "order objectet"

    // Hämtar nuvarande från LS
    console.log("cart från LS", cart);

    // SPARA
    localStorage.setItem("cart", JSON.stringify(cart))
    printCart();

}




