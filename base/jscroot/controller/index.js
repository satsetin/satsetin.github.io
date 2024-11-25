import { getData, getURLContentJS } from "./content.js"; // Sesuaikan path ke content.js

async function loadPage() {
    const container = document.getElementById("app"); // Elemen untuk memuat halaman
    try {
        // Ambil konten HTML menggunakan getData
        const html = await getData();
        container.innerHTML = html;

        // Muat script JS tambahan jika tersedia
        const scriptURL = getURLContentJS();
        if (scriptURL) {
            const scriptModule = await import(scriptURL); // Impor modul secara dinamis
            if (scriptModule.init) {
                scriptModule.init(); // Jalankan fungsi init() jika ada
            }
        }
    } catch (error) {
        console.error("Error loading page:", error);
        container.innerHTML = "<p>Failed to load the page.</p>";
    }
}

// Event listener untuk hashchange (navigasi berbasis hash)
window.addEventListener("hashchange", loadPage);

// Muat halaman awal saat aplikasi pertama kali dimuat
window.addEventListener("load", loadPage);
