const container = document.getElementById("containerWrapper");
export default function getPrivacyPolicy(page) {
    console.log("Privacy policy");
    container.innerHTML = page.content.rendered;
}

