// login.js - JavaScript untuk menangani form login

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById("loginForm");
  
    // Event listener untuk menangani submit form
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Mencegah form dikirim secara default
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      if (email && password) {
        // Kirim data login ke server (bisa menggunakan fetch atau AJAX)
        const data = {
          email: email,
          password: password,
        };
  
        try {
          const response = await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
  
          const result = await response.json();
  
          if (response.ok) {
            // Login berhasil, lakukan sesuatu (misal redirect atau simpan token)
            alert("Login Successful!");
            window.location.href = "/dashboard"; // Ganti dengan halaman setelah login
          } else {
            // Jika gagal, tampilkan pesan error
            alert("Login failed: " + result.message);
          }
        } catch (error) {
          console.error("Login error:", error);
          alert("An error occurred. Please try again.");
        }
      } else {
        alert("Please fill in both email and password.");
      }
    });
  });
  