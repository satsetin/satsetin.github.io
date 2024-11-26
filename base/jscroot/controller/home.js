export function init() {
    const exploreButton = document.getElementById("explore-products-btn");
    if (exploreButton) {
        exploreButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.hash = "product"; // Ubah hash URL ke #product
        });
    }
}

export function loadHome() {
    init();  // Pastikan tombol dieksekusi di halaman home
}
