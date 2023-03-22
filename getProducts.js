let root = document.getElementById("root");

export default async function getProducts() {
    let response = await fetch("https://axlwatch.se/wp-json/wc/store/products");
    let data = await response.json();
    console.log("product", data);

    data.map(data => {
        let product = document.createElement("div");
        let img = document.createElement("img");
        let price = document.createElement("p");
        console.log(data.name);
        product.innerText = data.name;
        price.innerText = `${data.prices.price} kr`;
        img.src = data.images[0].src;

        root.append(product, img, price);
    })
}

