// product.js

async function fetchProducts() {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8080/api/products", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`  // Mengirimkan token sebagai header untuk otentikasi
        }
    });

    const data = await response.json();

    if (response.ok) {
        console.log("Products fetched successfully", data.products);
        displayProducts(data.products);
    } else {
        console.error("Failed to fetch products:", data.error);
    }
}

// Fungsi untuk menampilkan produk di halaman
function displayProducts(products) {
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";  // Clear previous content

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.originalPrice}</p>
            <button onclick="addToCart('${product._id}')">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Fungsi untuk menambahkan produk ke keranjang
async function addToCart(productId) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");  // Pastikan Anda menyimpan user_id saat login

    const response = await fetch("http://localhost:8080/api/cart", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ product_id: productId, user_id: userId })
    });

    const data = await response.json();

    if (response.ok) {
        console.log("Product added to cart", data);
    } else {
        console.error("Failed to add to cart:", data.error);
    }
}

// Memanggil fetchProducts untuk menampilkan produk saat halaman dimuat
fetchProducts();
