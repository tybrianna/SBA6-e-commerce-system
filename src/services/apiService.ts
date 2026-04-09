export async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products/search?q=phone");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return await response.json();

    } catch (error) {
        throw error;
    }
}