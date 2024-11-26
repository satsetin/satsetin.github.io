import { getHash } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
import { url } from "https://chekoutgobiz.github.io/fe_web/base/jscroot/url/config.js";

// Mendapatkan URL Konten Berdasarkan Hash
export function getContentURL() {
    let hashlink = getHash() || "home"; // Default ke "home" jika hash kosong
    switch (hashlink) {
        case "home":
            return url.template.content + "home/home.html";
        case "profile/passwords":
            return url.template.content + "profile/passwords.html";
        case "profile/mail":
            return url.template.content + "profile/mail.html";
        case "profile/accounts":
            return url.template.content + "profile/accounts.html";
        case "messages":
            return url.template.content + "messages.html";
        case "notifications/blocked":
            return url.template.content + "notifications/blocked.html";
        case "notifications/silenced":
            return url.template.content + "notifications/silenced.html";
        case "notifications/publish":
            return url.template.content + "notifications/publish.html";
        case "notifications/program":
            return url.template.content + "notifications/program.html";
        case "explore":
            return url.template.content + "explore.html";
        case "saved":
            return url.template.content + "saved.html";
        case "logout":
            return url.template.content + "logout.html";
        case "login":
            return url.template.content + "login/login.html"; // Rute login
        case "cart":
            return url.template.content + "cart/cart.html";
        case "product":
            return url.template.content + "product/product.html";
        default:
            return url.template.content + "home/home.html"; // Fallback ke "home"
    }
}

// Mendapatkan URL Script JS Berdasarkan Hash
export function getURLContentJS() {
    let hashlink = getHash() || "home"; // Default ke "home" jika hash kosong
    switch (hashlink) {
        case "home":
            return url.view.content + "home.js";
        case "profile/passwords":
            return url.view.content + "profile/passwords.js";
        case "profile/mail":
            return url.view.content + "profile/mail.js";
        case "profile/accounts":
            return url.view.content + "profile/accounts.js";
        case "messages":
            return url.view.content + "messages.js";
        case "notifications/blocked":
            return url.view.content + "notifications/blocked.js";
        case "notifications/silenced":
            return url.view.content + "notifications/silenced.js";
        case "notifications/publish":
            return url.view.content + "notifications/publish.js";
        case "notifications/program":
            return url.view.content + "notifications/program.js";
        case "explore":
            return url.view.content + "explore.js";
        case "saved":
            return url.view.content + "saved.js";
        case "logout":
            return url.view.content + "logout.js";
        case "login":
            return url.view.content + "login.js";
        case "cart":
            return url.view.content + "cart.js";
        case "product":
            return url.view.content + "product.js";
        default:
            return null;
    }
}

// Mendapatkan Data dari URL Konten
export async function getData() {
    const contentURL = getContentURL(); // Panggil fungsi untuk mendapatkan URL konten
    try {
        const response = await fetch(contentURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.text(); // Kembalikan HTML sebagai teks
    } catch (error) {
        console.error("Error fetching data:", error);
        return "<p>Failed to load content.</p>";
    }
}
