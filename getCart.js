'use strict';

const container = document.getElementById("containerWrapper");

export default async function getCart(page) {
    console.log("Varukorg");
    container.innerHTML = page.content.rendered
}


