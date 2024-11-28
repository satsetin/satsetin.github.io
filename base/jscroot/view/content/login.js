const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loadingIndicator = document.getElementById('loading'); // Spinner loading
const errorMessage = document.getElementById('error-message'); // Pesan error

// Menangani Submit Form Login
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

  // Menampilkan loading spinner
  loadingIndicator.style.display = 'block';

  try {
    // Mengirim permintaan login ke API
    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    // Sembunyikan spinner setelah request selesai
    loadingIndicator.style.display = 'none';

    if (response.ok) {
      const data = await response.json();
      console.log("Data Login:", data); // Debugging: cek data respons

      // Periksa apakah token ada dalam respons
      if (data.token) {
        // Simpan token ke localStorage
        localStorage.setItem('authToken', data.token);
        console.log("Token Disimpan:", data.token); // Debugging: cek token yang disimpan

        // Redirect ke halaman home setelah login berhasil
        window.location.hash = '#home';  // Mengganti hash URL ke "home"
      } else {
        errorMessage.textContent = 'Login failed: No token received';
      }
    } else {
      errorMessage.textContent = 'Login failed: Server error';
    }
  } catch (error) {
    // Tangani error jaringan atau kesalahan lainnya
    console.error('Error:', error);
    errorMessage.textContent = 'Login failed: Network error';
  }
});

// Cek apakah token sudah ada di localStorage saat halaman dimuat
if (localStorage.getItem("authToken")) {
  window.location.hash = "#home"; // Jika sudah login, langsung ke halaman home
}
