import { Product } from "./Product.ts";

async function getProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products/search?q=phone");
        const data = await response.json();

        const products = data.products.map((item: any) => new Product(item));

        products.forEach(product => {
            console.log(product.displayDetails());
        });

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

getProducts();