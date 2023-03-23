'use strict'

const categoryUrl = "https://axlwatch.se/index.php/wp-json/wc/v3/products?category="

export default async function printCategory(category) {

    const fetchCategoryId = categoryUrl+category.id

    try {
        const response = await fetch(fetchCategoryId)
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}