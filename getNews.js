const root = document.getElementById("root");

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
    const ul = document.createElement("ul");

    posts.map((post) => {

        const postLi = document.createElement("li");
        const aLink = document.createElement("a");

        aLink.href = post.link;
        postLi.innerText = post.title.rendered;

        postLi.addEventListener("click", () => {
            console.log(post.link);

        })
        postLi.appendChild(aLink);
        ul.appendChild(postLi);

    })
    root.append(ul);
}

