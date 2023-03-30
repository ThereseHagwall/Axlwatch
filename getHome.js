'use strict';

let root = document.getElementById("root");

export default function getHome() {
    const img = document.createElement("img");
    img.className = "frontImg";
    img.src = "https://iswag.se/wp-content/uploads/2020/04/Fashion-Men-Stainless-Steel-Watch-Luxury-Calendar-Quartz-Wrist-Watches-Business-Casual-Watch-for-Man-Clock.jpg";

    const welcome = document.createElement("h1");
    welcome.innerHTML = "Välkommen hit!";
    root.append(img, welcome);
}