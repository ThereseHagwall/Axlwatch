'use strict';

export default function getMyAccount(){
    const root = document.getElementById("root")
    const message = document.createElement("p")
    message.innerText = "Ditt konto är under spaning 🤓"

    root.appendChild(message)
}