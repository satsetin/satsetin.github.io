// Mengambil elemen form dan input dari halaman
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Menangani pengiriman form login
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Mengambil nilai email dan password
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validasi input (cek apakah email dan password tidak kosong)
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

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
      // Jika login berhasil, redirect ke halaman home
      window.location.hash = 'home'; // Ganti hash URL ke "home"
    } else {
      alert('Login failed: ' + data.message);
    }
  } else {
    alert('Login failed: Server error');
  }
});
