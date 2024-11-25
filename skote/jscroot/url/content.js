import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";

import { url } from "https://jscroot.github.io/template/skote/jscroot/url/config.js";

export function getContentURL(){
    let hashlink=getHash();
    console.log("link hash:"+hashlink);
    switch (hashlink) {
        case "home":
            return url.template.content+"dashboard/home.html";
        case "dashboard/ecommerce":
            return url.template.content+"dashboard/ecommerce.html";
        case "dashboard/project":
            return url.template.content+"dashboard/project.html";
        case "dashboard/crm":
            return url.template.content+"dashboard/crm.html";
        case "dashboard/banking":
            return url.template.content+"dashboard/banking.html";
        case "dashboard/icons":
            return url.template.content+"dashboard/icons.html";
        case "dashboard/map":
            return url.template.content+"dashboard/map.html";
        case "about":
            return url.template.content+"about.html";
        case "calander":
            return url.template.content+"calander.html";
        case "chat":
            return url.template.content+"chat.html";
        case "email":
            return url.template.content+"email.html";
        case "kanban":
            return url.template.content+"kanban.html";
        case "todo":
            return url.template.content+"todo.html";
        case "utility/settings":
            return url.template.content+"utility/settings.html";
        case "utility/pricing":
            return url.template.content+"utility/pricing.html";
        case "utility/blog":
            return url.template.content+"utility/blog.html";
        case "utility/blankpage":
            return url.template.content+"utility/blankpage.html";
        case "utility/profile":
            return url.template.content+"utility/profile.html";
        case "projects/details":
            return url.template.content+"projects/details.html";
        case "projects/home":
            return url.template.content+"projects/home.html";
        case "table/advanced":
            return url.template.content+"table/advanced.html";
        case "table/basic":
            return url.template.content+"table/basic.html";
        case "chart/apex":
            return url.template.content+"chart/apex.html";
        case "chart/chartjs":
            return url.template.content+"chart/chartjs.html";
        case "forms/checkbox":
            return url.template.content+"forms/checkbox.html";
        case "forms/datepicker":
            return url.template.content+"forms/datepicker.html";
        case "forms/file":
            return url.template.content+"forms/file.html";
        case "forms/input":
            return url.template.content+"forms/input.html";
        case "forms/inputgroup":
            return url.template.content+"forms/inputgroup.html";
        case "forms/inputlayout":
            return url.template.content+"forms/inputlayout.html";
        case "forms/mask":
            return url.template.content+"forms/mask.html";
        case "forms/radio":
            return url.template.content+"forms/radio.html";
        case "forms/repeater":
            return url.template.content+"forms/repeater.html";
        case "forms/select":
            return url.template.content+"forms/select.html";
        case "forms/switch":
            return url.template.content+"forms/switch.html";
        case "forms/textarea":
            return url.template.content+"forms/textarea.html";
        case "forms/validation":
            return url.template.content+"forms/validation.html";
        case "forms/wizard":
            return url.template.content+"forms/wizard.html";
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