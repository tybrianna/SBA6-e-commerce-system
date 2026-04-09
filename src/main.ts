import { Product } from "./Product.ts";
import { calculateDiscount } from "./discountCalculator.ts";
import { calculateTax } from "./taxCalculator.ts";
import { fetchProducts } from "./apiService.ts";
import { handleError } from "./errorHandler.ts";

async function main() {
    try {
        const data = await fetchProducts();

        const products = data.products.map((item: any) => new Product(item));

        products.forEach(product => {
            const discount = calculateDiscount(product.price, product.discountPercentage);
            const tax = calculateTax(product.price, product.category);

            console.log(product.displayDetails());
            console.log("Discount Amount: $" + discount.toFixed(2));
            console.log("Tax Amount: $" + tax.toFixed(2));
            console.log("----------------------");
        });

    } catch (error) {
        handleError(error);
    }
}

main();