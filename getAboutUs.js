const container = document.getElementById("containerWrapper");

export default function getAboutUs(page){
    console.log("Om oss");
    container.innerHTML = page.content.rendered;
}
