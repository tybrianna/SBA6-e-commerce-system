export class Product {
    title: string;
    price: number;

    constructor(productData: { title: string; price: number }) {
        this.title = productData.title;
        this.price = productData.price;
    }

    displayDetails(): string {
        return `Product: ${this.title}, Price: $${this.price}`;
    }

    getPriceWithDiscount(): number {
        return this.price;
    }
}