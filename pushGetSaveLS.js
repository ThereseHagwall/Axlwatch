'use strict';

import printCart from "./printCart.js";

export default function pushGetSaveLS(product_id) {

    // Lägger till i LS
    const cart = JSON.parse(localStorage.getItem("cart"))


    //Kollar om kundvagen är tom
    if(cart.length === 0) {
        console.log("skapar första produkten");
        let newProduct = {
            product_id: product_id,
            quantity: 1,
        };
        cart.push(newProduct);
    } else {
        let check = cart.find(product => product.product_id === product_id);

            if(check) {
                console.log("ökar produkten");
                check.quantity++
            }else {
                console.log("Skapar ny produkt");
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




