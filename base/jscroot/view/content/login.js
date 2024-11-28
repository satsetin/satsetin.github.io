// Mengambil elemen form dan input dari halaman
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage'); // Elemen untuk menampilkan error
const successMessage = document.getElementById('successMessage'); // Elemen untuk menampilkan success

// Menangani pengiriman form login
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Mengambil nilai email dan password
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validasi input (cek apakah email dan password tidak kosong)
  if (!email || !password) {
    showErrorMessage('Please fill in all fields');
    return;
  }

  // Clear previous messages
  hideMessages();

  // Kirim request login ke endpoint API
  const response = await fetch('http://localhost:8080/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  // Memeriksa apakah login berhasil
  if (response.ok) {
    const data = await response.json();
    if (data.success) {
      // Jika login berhasil, tampilkan pesan sukses dan redirect ke home
      showSuccessMessage('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.hash = '#home'; // Ganti hash URL ke "home"
      }, 2000); // Delay 2 detik sebelum redirect
    } else {
      showErrorMessage(data.message || 'Login failed');
    }
  } else {
    showErrorMessage('Login failed: Server error');
  }
});

// Fungsi untuk menampilkan pesan kesalahan
function showErrorMessage(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

// Fungsi untuk menampilkan pesan sukses
function showSuccessMessage(message) {
  successMessage.textContent = message;
  successMessage.style.display = 'block';
}

// Fungsi untuk menyembunyikan pesan kesalahan dan sukses
function hideMessages() {
  errorMessage.style.display = 'none';
  successMessage.style.display = 'none';
}
