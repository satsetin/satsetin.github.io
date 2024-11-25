import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
// Please change https://jscroot.github.io/template/base/ into your base url
import { url } from "https://jscroot.github.io/template/base/jscroot/url/config.js";

export function getContentURL(){
    let hashlink = getHash();
    switch (hashlink) {
        case "home":
            return url.content + "home/home.html";
        case "profile/passwords":
            return url.content + "profile/passwords.html";
        case "profile/mail":
            return url.content + "profile/mail.html";
        case "profile/accounts":
            return url.content + "profile/accounts.html";
        case "messages":
            return url.content + "messages.html";
        case "notifications/blocked":
            return url.content + "notifications/blocked.html";
        case "notifications/silenced":
            return url.content + "notifications/silenced.html";
        case "notifications/publish":
            return url.content + "notifications/publish.html";
        case "notifications/program":
            return url.content + "notifications/program.html";
        case "explore":
            return url.content + "explore.html";
        case "saved":
            return url.content + "saved.html";
        case "logout":
            return url.content + "logout.html";
        case "login":
            return url.content + "login/login.html"; // Tambahkan rute untuk halaman login
        case "cart":
            return url.content + "cart/cart.html"; 
        case "product": // Tambahkan rute untuk halaman product
            return url.content + "product/product.html";
        default:
            return url.content + "home/home.html";
    }
}

export function getURLContentJS(){
    let hashlink = getHash();
    switch (hashlink) {
        case "home":
            return url.contentview + "home.js";
        case "profile/passwords":
            return url.contentview + "profile/passwords.js";
        case "profile/mail":
            return url.contentview + "profile/mail.js";
        case "profile/accounts":
            return url.contentview + "profile/accounts.js";
        case "messages":
            return url.contentview + "messages.js";
        case "notifications/blocked":
            return url.contentview + "notifications/blocked.js";
        case "notifications/silenced":
            return url.contentview + "notifications/silenced.js";
        case "notifications/publish":
            return url.contentview + "notifications/publish.js";
        case "notifications/program":
            return url.contentview + "notifications/program.js";
        case "explore":
            return url.contentview + "explore.js";
        case "saved":
            return url.contentview + "saved.js";
        case "logout":
            return url.contentview + "logout.js";
        case "login":
            return url.contentview + "login.js"; // Script untuk login jika diperlukan
        case "cart":
            return url.contentview + "cart.js";
        case "product": // Tambahkan rute untuk script halaman product
            return url.contentview + "product.js";
            default:
                return null;
            
    }
}

// Tambahkan fungsi getData di sini
export async function getData() {
    const url = getContentURL(); // Panggil fungsi untuk mendapatkan URL konten
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.text(); // Kembalikan HTML sebagai teks
    } catch (error) {
        console.error("Error fetching data:", error);
        return "<p>Failed to load content.</p>";
    }
}
