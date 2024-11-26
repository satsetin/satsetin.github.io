// login.js

// Fungsi untuk login
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        console.log("Login success", data);
        // Simpan token di localStorage atau sessionStorage
        localStorage.setItem("token", data.token);
        window.location.href = "home.html";  // Arahkan ke halaman home setelah login
    } else {
        console.error("Login failed:", data.error);
        alert(data.error);
    }
}

// Event listener untuk form login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    login();
});
