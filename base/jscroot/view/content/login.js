document.addEventListener('DOMContentLoaded', function () {
  console.log('login.js loaded');  // Pastikan file login.js dimuat

  const loginForm = document.getElementById('loginForm');
  const loginButton = document.querySelector('button[type="submit"]');

  // Debug: Cek jika tombol login dan form ditemukan
  console.log("Form dan tombol ditemukan:", loginForm, loginButton);

  if (!loginForm || !loginButton) {
    console.error('Form atau tombol login tidak ditemukan!');
    return;
  }

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Mencegah form disubmit secara default

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Debug: Cek apakah email dan password sudah terambil
    console.log("Form submitted:", { email, password });

    if (!email || !password) {
      alert('Email dan password harus diisi!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log("Response:", data);  // Debug: Cek response dari server

      if (response.ok) {
        localStorage.setItem('auth_token', data.token);
        alert('Login berhasil!');
        window.location.hash = '#home'; // Redirect ke halaman home setelah login berhasil
      } else {
        alert('Login gagal: ' + (data.message || 'Periksa email dan password.'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat login.');
    }
  });
});
