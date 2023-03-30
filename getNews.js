'use strict';
import getSingleNews from "./singleNews.js";

// const root = document.getElementById("root");
const container = document.getElementById("containerWrapper");

export default async function getNews() {
    try {
        const response = await fetch("https://axlwatch.se/wp-json/wp/v2/posts");
        const getData = await response.json();
        printNews(getData)
    } catch (error) {
        console.error(error);
    }
}

function printNews(posts) {

    posts.map((post) => {
        const newsContainer = document.createElement("div");
        newsContainer.className = "newsContainer";
        const info = document.createElement("p");

        const postLi = document.createElement("h2");
        const aLink = document.createElement("a");
        aLink.href = post.link;
        postLi.innerText = post.title.rendered;
        info.innerHTML = post.excerpt.rendered;

        postLi.addEventListener("click", () => {
            console.log(post.link);
            getSingleNews(post.id);
        })

        postLi.appendChild(aLink);
        newsContainer.append(postLi, info)
        container.append(newsContainer);
    })
}