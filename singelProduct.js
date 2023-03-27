'use strict';

//Här ska det tömma och skriva ut en enda produkt på en större sida med mer information


export default async function getProducts() {
    let response = await fetch("https://axlwatch.se/wp-json/wc/store/products");
    let data = await response.json();
}