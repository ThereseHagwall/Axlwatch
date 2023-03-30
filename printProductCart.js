'use strict';

export default function printProductCart() {

    let cart = JSON.parse(localStorage.getItem("cart"))

    const root = document.getElementById("root")
    const cartWrapper = document.createElement("div")
    let sumArr = [];
    const sum = document.createElement("p");
    let i = 0;
    cart.forEach(() => {

        fetchProdId(cart)
        async function fetchProdId() {
            console.log(cart[i].quantity);

            const prodAmount = document.createElement("p");
            prodAmount.innerText = cart[i].quantity;

        const prodUrl = `https://axlwatch.se/wp-json/wc/v3/products/${cart[i].product_id}`;
        let response = await fetch(prodUrl);
        let data = await response.json();

        const prodWrapper = document.createElement("div");
        const prodImg = document.createElement("img");
        const prodId = document.createElement("p");
        const prodName = document.createElement("p");
        const prodPrice = document.createElement("p");

        prodImg.className = "cartImg";
        cartWrapper.className = "cartWrapper";
        prodWrapper.className = "prodWrapper";


        sumArr.push(parseInt(data.price))
        prodId.innerText = data.id;
        prodImg.src = data.images[0].src;
        prodName.innerText = data.name;
        prodPrice.innerText = data.price;


        console.log(sumArr);
        function sumArray(array) {
            let sum = 0;

            array.forEach(item => {
                sum += item;
            });

            console.log(sum);
            return sum;
        }

        console.log(`${sum} Totalsumma`);
        sum.innerText = `Totalsumma ${sumArray(sumArr)}`;
    root.append(cartWrapper)
    cartWrapper.append(prodWrapper,sum)
    prodWrapper.append(prodId, prodImg,prodName,prodPrice,prodAmount)
    }
    i++
});
}
