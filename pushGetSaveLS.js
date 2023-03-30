'use strict';

import printCart from "./printCart.js";

export default function pushGetSaveLS(product_id) {

    // Lägger till i LS
    const cart = JSON.parse(localStorage.getItem("cart"))


    //Kollar om kundvagen är tom
    if(cart.length === 0) {
        let newProduct = {
            product_id: product_id,
            quantity: 1,
        };
        cart.push(newProduct);
    } else {
        let check = cart.find(product => product.product_id === product_id);

            if(check) {
                check.quantity++
            }else {
                let newProduct = {
                product_id: product_id,
                quantity: 1,
            };
        cart.push(newProduct);
    }
    }

    // SPARA
    localStorage.setItem("cart", JSON.stringify(cart))
    printCart();

}




