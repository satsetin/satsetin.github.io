// Cek jika token tidak ada di localStorage, arahkan ke halaman login
// Mengecek apakah ada token di localStorage
const authToken = localStorage.getItem("authToken");
if (!authToken) {
    // Jika token tidak ada, redirect ke halaman login
    window.location.href = "#login";
} else {
    // Jika token ada, tampilkan konten produk
    console.log("Token ditemukan, tampilkan produk");
    // Ambil dan tampilkan data produk dari API atau database
}

  // Ambil elemen-elemen yang dibutuhkan
  const productList = document.getElementById('product-list');
  const loading = document.getElementById('loading');
  
  // Fungsi untuk mendapatkan produk dari API
  const fetchProducts = async () => {
    // Tampilkan loading spinner
    loading.style.display = 'block';
  
    try {
      // Mengambil token dari localStorage
      const token = localStorage.getItem('authToken');
  
      // Mengirimkan permintaan GET ke API untuk mengambil daftar produk
      const response = await fetch('http://localhost:8080/api/products', {
        method: 'GET',
        headers: {
          'Authorization': `${token}`, // Menggunakan Bearer token
          'Content-Type': 'application/json',
        },
      });
  
      // Menyembunyikan loading spinner setelah data diterima
      loading.style.display = 'none';
  
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Menampilkan produk ke halaman
          displayProducts(data.products);
        } else {
          alert('Error fetching products: ' + data.message);
        }
      } else {
        alert('Failed to fetch products. Server error.');
      }
    } catch (error) {
      loading.style.display = 'none';
      alert('An error occurred: ' + error.message);
    }
  };
  
  // Fungsi untuk menampilkan produk ke halaman
  const displayProducts = (products) => {
    if (products.length === 0) {
      productList.innerHTML = '<p>No products found.</p>';
    } else {
      products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4');
        productCard.classList.add('mb-4');
        productCard.innerHTML = `
          <div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Price: $${product.price}</p>
              <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
        `;
        productList.appendChild(productCard);
      });
    }
  };
  
  // Fungsi untuk menambahkan produk ke keranjang
  const addToCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
  };
  
  // Panggil fungsi untuk mengambil produk saat halaman dimuat
  fetchProducts();
  