'use strict';

export default function printProductCart() {

    let cart = JSON.parse(localStorage.getItem("cart"))
    const root = document.getElementById("root")

cart.forEach((id) => {
    root.innerHTML = "";
    const prodId = document.createElement("article");
    console.log();
    prodId.innerText = id;
    root.appendChild(prodId)
});
}

/*
*Hämta cart
*För varje ID som finns där inne ska de skrivas ut
    *Bild
    *Namn
    *Pris
    *Antal
*Skall komm i en column ska de skrivas ut
*förberadande knapp för att kunna ta bort EN produkt
*Om tid finns tid lägg till ta bort knapp för varje ID
*/