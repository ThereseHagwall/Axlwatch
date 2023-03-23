const container = document.getElementById("containerWrapper");

export default function getAboutUs(page){
    container.innerHTML = page.content.rendered;
}
