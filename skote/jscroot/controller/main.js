import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";
import {addScriptInBody} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.3/croot.js";

import { url } from "https://jscroot.github.io/template/skote/jscroot/url/config.js";
import { getURLContentJS } from "https://jscroot.github.io/template/skote/jscroot/url/content.js";
import { getContentURL } from "https://jscroot.github.io/template/skote/jscroot/url/content.js";


export function runAfterHeader(){
    console.log("runAfterHeader");
    insertHTML(url.template.sidebar,"side-menu",runAfterSidebar);
}

function runAfterSidebar(){
    console.log("runaftersidebar");
    addScriptInBody("assets/libs/metismenu/metisMenu.min.js");
    insertHTML(url.template.rightbar,"right_bar",runAfterRightbar);
}

function runAfterRightbar(){
    console.log("runAfterRightbar");
    addScriptInBody("assets/libs/node-waves/waves.min.js");
    insertHTML(url.template.footer,"footer_container",runAfterFooter);
}

function runAfterFooter(){
    console.log("runAfterFooter"); 
    addScriptInBody("assets/js/app.js");
}


export async function runAfterContent(){
    let urljs = getURLContentJS();
    console.log(urljs);
    let module = await import(urljs);
    module.main();
    console.log(urljs);
}

export function runAfterHashChange(evt){
    console.log("runAfterHashChange");
    insertHTML(getContentURL(),"content_container",runAfterContent);
}