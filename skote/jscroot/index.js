import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";
import {onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.4/croot.js";

import { url } from "https://jscroot.github.io/template/skote/jscroot/url/config.js";
import { getContentURL } from "https://jscroot.github.io/template/skote/jscroot/url/content.js";
import {runAfterHeader,runAfterContent,runAfterHashChange} from "https://jscroot.github.io/template/skote/jscroot/controller/main.js";


//addScriptInBody("assets/libs/simplebar/simplebar.min.js");
insertHTML(url.template.header,"page-topbar",runAfterHeader);
insertHTML(getContentURL(),"content_container",runAfterContent);
onHashChange(runAfterHashChange);


