document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.querySelector('button[type="submit"]');
    
    // Menangani pengiriman form login
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Mencegah form submit secara default
      
      // Ambil nilai dari input form
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Validasi input
      if (!email || !password) {
        alert('Email dan password harus diisi');
        return;
      }
      
      // Kirim request login ke server
      try {
        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        const data = await response.json();
        
        if (response.ok) {
          // Login berhasil
          localStorage.setItem('auth_token', data.token); // Simpan token di localStorage
          alert('Login berhasil!');
          window.location.hash = '#home'; // Redirect ke halaman home
        } else {
          // Login gagal
          alert('Login gagal: ' + (data.message || 'Cek email dan password Anda.'));
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat melakukan login.');
      }
    });
  });
  