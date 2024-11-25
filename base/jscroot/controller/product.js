import { getData } from "../url/content.js"; // Pastikan fungsi ini tersedia

document.addEventListener("DOMContentLoaded", async () => {
    const productGrid = document.getElementById("product-grid");
    const apiUrl = "http://localhost:8080/api/products"; // URL API Anda

    // Ambil data produk
    try {
        productGrid.innerHTML = "<p>Loading...</p>";
        const data = await getData(apiUrl);
        productGrid.innerHTML = data
            .map(
                (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">
                <span class="discount-price">${product.discountPrice}</span>
                <span class="original-price">${product.originalPrice}</span>
            </div>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>`
            )
            .join("");
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});
