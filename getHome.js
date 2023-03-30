'use strict';

let root = document.getElementById("root");

export default function getHome() {
    const img = document.createElement("img");
    img.className = "frontImg";
    img.src = "https://iswag.se/wp-content/uploads/2020/04/Fashion-Men-Stainless-Steel-Watch-Luxury-Calendar-Quartz-Wrist-Watches-Business-Casual-Watch-for-Man-Clock.jpg";

    const welcome = document.createElement("h1");
    welcome.innerHTML = "Välkommen hit!";
    const info = document.createElement("h5");
    info.innerText = "Viverra mauris in aliquam sem fringilla. Eu augue ut lectus arcu bibendum at. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Eu turpis egestas pretium aenean pharetra magna. Ut porttitor leo a diam sollicitudin tempor id. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Non odio euismod lacinia at quis risus sed. Suspendisse potenti nullam ac tortor. Tincidunt ornare massa eget egestas purus viverra.";
    info.id = "welcomeInfo"
    welcome.append(info);
    root.append(img, welcome);
}