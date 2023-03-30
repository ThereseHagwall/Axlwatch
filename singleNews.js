'use strict';
import getNews from "./getNews.js";

const container = document.getElementById("containerWrapper");
const btnContainer = document.getElementById('hidden-btn-container');
export default async function getSingleNews(id) {
    try {
        const response = await fetch(`https://axlwatch.se/wp-json/wp/v2/posts/${id}`);
        const postData = await response.json();
        printSingleNews(postData);
    } catch (error) {
        console.error(error);
    }
}

function printSingleNews(post) {

    container.innerHTML = "";

    const newsBtn = document.createElement("button");
    newsBtn.innerText = "Tillbaka";

    newsBtn.addEventListener("click", () => {
        container.innerHTML = "";
        getNews();
        btnContainer.innerHTML = "";
    }) 

    const newsContainer = document.createElement("div");
    newsContainer.className = "newsContainer";

    const postTitle = document.createElement("h2");
    postTitle.innerText = post.title.rendered;

    const postContent = document.createElement("div");
    postContent.innerHTML = post.content.rendered;

    newsContainer.append(postTitle, postContent);
    container.append(newsContainer);
    btnContainer.append(newsBtn)

}
