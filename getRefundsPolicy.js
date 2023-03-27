'use strict';

const container = document.getElementById("containerWrapper");

export default function getRefundsPolicy(pages) {
    container.innerHTML = pages.content.rendered;
}