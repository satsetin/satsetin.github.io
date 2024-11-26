// cart.js

async function fetchCart() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");

    const response = await fetch(`http://localhost:8080/api/cart?user_id=${userId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();

    if (response.ok) {
        console.log("Cart fetched successfully", data);
        displayCart(data.cart, data.total_price);
    } else {
        console.error("Failed to fetch cart:", data.error);
    }
}

// Fungsi untuk menampilkan keranjang belanja
function displayCart(cart, totalPrice) {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = "";  // Clear previous content

    cart.items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");

        itemElement.innerHTML = `
            <h3>${item.product.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart('${item.product._id}')">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });

    const totalElement = document.createElement("div");
    totalElement.classList.add("total-price");
    totalElement.innerHTML = `<h3>Total: $${totalPrice}</h3>`;
    cartContainer.appendChild(totalElement);
}

// Fungsi untuk menghapus item dari keranjang
async function removeFromCart(productId) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");

    const response = await fetch(`http://localhost:8080/api/cart/item?product_id=${productId}&user_id=${userId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();

    if (response.ok) {
        console.log("Product removed from cart", data);
        fetchCart();  // Update cart display
    } else {
        console.error("Failed to remove product from cart:", data.error);
    }
}

// Memanggil fetchCart untuk menampilkan cart saat halaman dimuat
fetchCart();
