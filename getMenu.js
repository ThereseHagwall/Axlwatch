let menu = document.getElementById("menu");

export default async function getMenu() {
    try {
        const response = await fetch("https://axlwatch.se/wp-json/wp/v2/pages")
        const data = await response.json();
        printPages(data);
    } catch (error) {
        console.error(error);
    }
}

getMenu();

function printPages(pages) {
    let ul = document.createElement("ul")
    pages.map(page => {
        console.log("page", page.title.rendered);
        let li = document.createElement("li")
        li.innerText = page.title.rendered;

        li.addEventListener("click", () => {
            console.log("page", page.title.rendered);
        })

        ul.appendChild(li)
    })
    menu.appendChild(ul);
}