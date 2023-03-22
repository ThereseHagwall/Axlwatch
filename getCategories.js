const getWrapper = document.querySelector(".wrapper");

export default async function getCategories() {
    try {
        const response = await fetch("https://axlwatch.se/wp-json/wc/v3/products/categories");
        const getData = await response.json();
        printCategories(getData);
    } catch (error) {
        console.error(error);
    }
}

getCategories();


function printCategories(categorys) {


    const ul = document.createElement("ul");
    categorys.map(category => {
        const li = document.createElement("li");
        const aLink = document.createElement("a");
        aLink.innerText = category.name;
        aLink.addEventListener("click", () => {
            // Skall öppna en funktion som går till den kategorin man tryckt på
        })
        li.appendChild(aLink);
        ul.appendChild(li);
    })
    getWrapper.appendChild(ul);
}
