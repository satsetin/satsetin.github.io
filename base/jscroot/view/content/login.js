const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loadingIndicator = document.getElementById('loading'); // Menyimpan spinner
const errorMessage = document.getElementById('error-message'); // Elemen error message

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

  // Tampilkan loading spinner
  loadingIndicator.style.display = 'block';

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

  // Sembunyikan spinner setelah request selesai
  loadingIndicator.style.display = 'none';

  // Memeriksa apakah login berhasil
  if (response.ok) {
    const data = await response.json();
    console.log("Response data:", data); // Debugging: cek respons data

    if (data.token) {
      // Simpan token ke localStorage
      localStorage.setItem('authToken', data.token);
      console.log("Token disimpan:", data.token);  // Debugging: cek token yang disimpan

      // Redirect ke halaman home jika login berhasil
      window.location.hash = '#home'; // Ganti hash URL ke "home"
    } else {
      // Tampilkan pesan error jika tidak ada token dalam respons
      errorMessage.textContent = 'Login failed: No token received';
    }
  } else {
    // Tampilkan pesan error jika server error
    errorMessage.textContent = 'Login failed: Server error';
  }
});
