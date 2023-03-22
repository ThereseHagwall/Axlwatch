const getWrapper = document.querySelector(".wrapper")

export default async function fetchData() {
    try {
        const response = await fetch("https://axlwatch.se/wp-json/wp/v2/posts");
        const getData = await response.json();

        console.log(getData)
        printNews(getData)
    } catch (error) {
        console.error(error)
    }
}

function printNews(posts) {
    const ul = document.createElement("ul")
    console.log("funktionen", posts[0].title.rendered)
    posts.map((post) => {

        const postLi = document.createElement("li")
        const aLink = document.createElement("a")
        console.log(post.title.rendered)
        aLink.href = post.link
        postLi.innerText = post.title.rendered

        postLi.addEventListener("click", () =>{
            console.log(post.link)

        })
        postLi.appendChild(aLink)
        ul.appendChild(postLi)

    })
    getWrapper.append(ul)
}

