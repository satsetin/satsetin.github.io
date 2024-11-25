export function init() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    const userID = "user123"; // Anda bisa mendapatkan userID dari session atau parameter URL

    // Fungsi untuk menghitung total harga
    function calculateTotal(cart) {
        return cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    // Fungsi untuk menambahkan jumlah produk
    function increaseQuantity(index, cart) {
        cart[index].quantity += 1;
        renderCart(cart);
    }

    // Fungsi untuk mengurangi jumlah produk
    function decreaseQuantity(index, cart) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        renderCart(cart);
    }

    // Fungsi untuk menampilkan keranjang
    function renderCart(cart) {
        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {
            cartItemsContainer.innerHTML =
                '<p class="empty-cart">Keranjang Anda kosong.</p>';
            cartTotalElement.textContent = "Total: Rp.0";
            checkoutBtn.style.display = "none";
            return;
        }

        checkoutBtn.style.display = "block";

        cart.forEach((item, index) => {
            const cartItem = `
              <div class="cart-item">
                <img src="img/${item.name
                  .toLowerCase()
                  .replace(" ", "")}.jpg" alt="${item.name}">
                <div>
                  <h3>${item.name}</h3>
                  <p>Harga Satuan: Rp.${item.price}</p>
                  <p>Total Harga: Rp.${item.price * item.quantity}</p>
                </div>
                <div class="quantity-controls">
                  <button class="decrease-btn" data-index="${index}">-</button>
                  <span>${item.quantity}</span>
                  <button class="increase-btn" data-index="${index}">+</button>
                </div>
              </div>
            `;
            cartItemsContainer.insertAdjacentHTML("beforeend", cartItem);
        });

        cartTotalElement.textContent = `Total: Rp.${calculateTotal(cart)}`;
    }

    // Ambil data keranjang dari API
    fetch(`/cart?userID=${userID}`)
        .then((response) => response.json())
        .then((data) => {
            renderCart(data);

            // Tambahkan event listener untuk tombol increase/decrease
            document.querySelectorAll(".increase-btn").forEach((btn) =>
                btn.addEventListener("click", (e) => {
                    const index = e.target.dataset.index;
                    increaseQuantity(index, data);
                })
            );

            document.querySelectorAll(".decrease-btn").forEach((btn) =>
                btn.addEventListener("click", (e) => {
                    const index = e.target.dataset.index;
                    decreaseQuantity(index, data);
                })
            );
        })
        .catch((error) => {
            console.error("Error fetching cart:", error);
        });
}
