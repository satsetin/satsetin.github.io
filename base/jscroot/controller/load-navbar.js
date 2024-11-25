// load-navbar.js
import { url } from "https://chekoutgobiz.github.io/fe_web/base/jscroot/url/config.js";


export async function loadNavbar(containerId = "navbar-container") {
    try {
        // Dapatkan URL file navbar.html dari konfigurasi
        const response = await fetch(url.template.navbar);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const navbarHTML = await response.text();

        // Sisipkan konten ke dalam elemen dengan id yang ditentukan
        document.getElementById(containerId).innerHTML = navbarHTML;
    } catch (error) {
        console.error("Error loading navbar:", error);
        document.getElementById(containerId).innerHTML =
            "<p>Failed to load navbar. Please try again later.</p>";
    }
}
