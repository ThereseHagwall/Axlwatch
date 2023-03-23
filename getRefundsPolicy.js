const container = document.getElementById("containerWrapper");

export default function getRefundsPolicy(pages) {
    console.log("Återbetalnings- och retur policy");
    container.innerHTML = pages.content.rendered;
}