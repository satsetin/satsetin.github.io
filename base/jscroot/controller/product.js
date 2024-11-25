import { getData } from "../url/content.js"; // Pastikan fungsi ini tersedia

  document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("product-grid");
    const cartNotification = document.querySelector(".cart-notification");
    const apiUrl = "http://localhost:8080/api/products"; // Ganti dengan URL API produk Anda

    // Cek apakah pengguna sudah login
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isLoggedIn status:", isLoggedIn); // Menambahkan log untuk memverifikasi status login

    if (!isLoggedIn) {
      console.log("User is not logged in, redirecting to login...");
      window.location.href = "login.html"; // Ganti dengan halaman login Anda
      return;
    }

    console.log("User is logged in. Fetching products...");

    // Ambil data produk
    async function fetchProducts() {
      try {
        productGrid.innerHTML = "<p>Loading...</p>";
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Data produk:", data); // Menambahkan log untuk melihat data produk

        const products = data.products || data;

        if (Array.isArray(products)) {
          productGrid.innerHTML = "";
          products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}" />
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <div class="price">
                <span class="discount-price">${product.discountPrice}</span>
                <span class="original-price">${product.originalPrice}</span>
              </div>
              <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
              </button>
            `;
            productGrid.appendChild(productCard);
          });
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();

    // Fungsi untuk menambah produk ke keranjang
    function addToCart(productId) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const product = { id: productId }; // Sesuaikan data produk yang ditambahkan
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartNotification();
    }

    // Update notifikasi keranjang
    function updateCartNotification() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cartNotification.textContent = cart.length;
      cartNotification.style.display = cart.length > 0 ? "block" : "none";
    }

    updateCartNotification(); // Inisialisasi notifikasi keranjang
  });

<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
