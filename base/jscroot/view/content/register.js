document.addEventListener('DOMContentLoaded', function () {
    console.log('register.js loaded'); // Pastikan file register.js dimuat
  
    const registerForm = document.getElementById('registerForm');
    
    // Debug: Pastikan form ditemukan
    console.log("Form ditemukan:", registerForm);
  
    if (!registerForm) {
      console.error('Form register tidak ditemukan!');
      return;
    }
  
    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Mencegah form disubmit secara default
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      // Debug: Cek apakah data sudah terambil
      console.log("Form submitted:", { email, password, confirmPassword });
  
      if (!email || !password || !confirmPassword) {
        alert('Semua kolom harus diisi!');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok!');
        return;
      }
  
      try {
        const response = await fetch('http://localhost:8080/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
  
        console.log("Response:", data);  // Debug: Cek response dari server
  
        if (response.ok) {
          alert('Register berhasil! Silakan login.');
          window.location.hash = '#login'; // Redirect ke halaman login setelah register berhasil
        } else {
          alert('Register gagal: ' + (data.message || 'Cek kembali data Anda.'));
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat register.');
      }
    });
  });
  