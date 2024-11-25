import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
import { url } from "https://jscroot.github.io/template/dc/starter/jscroot/url/config.js";

export function getContentURL(){
    let hashlink=getHash();
    console.log("link hash:"+hashlink);
    switch (hashlink) {
        case "home":
            return url.template.content+"home.html";
        case "about":
            return url.template.content+"about.html";
        case "profile/info":
            return url.template.content+"profile/info.html";
        default:
            return url.template.content+"home.html";
    }

}



export function getURLContentJS(){
    let hashlink=getHash();
    console.log("link hash:"+hashlink);
    switch (hashlink) {
        case "home":
            return url.view.content+"home.js";
        case "about":
            return url.view.content+"about.js";
        case "profile/info":
            return url.view.content+"profile/info.js";
        default:
            return url.view.content+"home.js";
    }

}