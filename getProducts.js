let root = document.getElementById("root");

export default async function getProducts() {
    let response = await fetch("https://axlwatch.se/wp-json/wc/store/products");
    let data = await response.json();

    data.map(data => {
        let productContainer = document.createElement("div");
        productContainer.className = "productContainer";
        let productName = document.createElement("div");
        let img = document.createElement("img");
        img.className = "productImg";
        let price = document.createElement("p");

        productName.innerText = data.name;
        price.innerText = `${data.prices.price} kr`;
        img.src = data.images[0].src;

        productContainer.append(img, productName, price);
        root.append(productContainer);
    })
}

