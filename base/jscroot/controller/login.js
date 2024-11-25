export function init() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                // Simpan token di localStorage
                localStorage.setItem("token", result.token);
                alert("Login successful!");
                window.location.href = "#product"; // Arahkan ke halaman dashboard
            } else {
                alert(`Login failed: ${result.message}`);
            }
        } catch (error) {
            alert("Error connecting to the server. Please try again later.");
            console.error(error);
        }
    });
}
