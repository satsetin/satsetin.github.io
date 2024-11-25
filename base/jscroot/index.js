import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import {onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.4/croot.js";
// Please change https://jscroot.github.io/template/base/ into your base url
import { url } from "../../url/config.js";
import { getContentURL } from "../../url/content.js";
import {runAfterHeader,runAfterContent,runAfterHashChange} from "../../controller/main.js";



insertHTML(url.header,"header__container",runAfterHeader);
insertHTML(getContentURL(),"content",runAfterContent);
onHashChange(runAfterHashChange);


