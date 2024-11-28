document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const loginButton = document.querySelector('button[type="submit"]');
  
  // Pastikan tombol dan form ada
  if (!loginForm || !loginButton) {
    console.error('Form atau tombol login tidak ditemukan!');
    return;
  }

  // Tangani submit form login
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Mencegah form untuk disubmit secara default

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validasi input
    if (!email || !password) {
      alert('Email dan password harus diisi!');
      return;
    }

    try {
      // Kirim request login ke server
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Jika login berhasil, simpan token dan redirect
        localStorage.setItem('auth_token', data.token); // Simpan token di localStorage
        alert('Login berhasil!');
        window.location.hash = '#home'; // Redirect ke halaman home
      } else {
        // Jika login gagal, tampilkan pesan error
        alert('Login gagal: ' + (data.message || 'Cek email dan password Anda.'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat melakukan login.');
    }
  });
});
