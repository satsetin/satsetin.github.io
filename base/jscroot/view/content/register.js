// register.js

// Fungsi untuk registrasi
async function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        console.log("Registration successful", data);
        window.location.href = "login.html";  // Arahkan ke halaman login setelah registrasi
    } else {
        console.error("Registration failed:", data.error);
        alert(data.error);
    }
}

// Event listener untuk form registrasi
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    register();
});
