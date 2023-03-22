const root = document.getElementById("root");

export default async function getNews() {
    try {
        const response = await fetch("https://axlwatch.se/wp-json/wp/v2/posts");
        const getData = await response.json();
        console.log(getData);
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
        console.log(post.excerpt.rendered);
        aLink.href = post.link;
        postLi.innerText = post.title.rendered;
        info.innerText = post.excerpt.rendered;

        postLi.addEventListener("click", () => {
            console.log(post.link);

        })

        postLi.appendChild(aLink);
        newsContainer.append(postLi, info)

        root.append(newsContainer);
    })
}

