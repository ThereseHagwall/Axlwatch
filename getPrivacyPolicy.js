'use strict';

const container = document.getElementById("containerWrapper");
export default function getPrivacyPolicy(page) {
    container.innerHTML = page.content.rendered;
}

