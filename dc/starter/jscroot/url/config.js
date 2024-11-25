//please always use trailing slash(/) for folder or extension for file.
export const croot = "https://jscroot.github.io/template/dc/starter/jscroot/";
//never use slash in front of file or directory
export const folder={
    template:croot+"template/",
    controller : croot+"controller/",
    view : croot+"view/",
}

export const url={
    template:{
        content : folder.template+"content/",
        header: folder.template+"header.html",
        search:folder.template+"search.html" ,
        settings:folder.template+"settings.html" ,
        sidebar:folder.template+"sidebar.html" ,
        footer:folder.template+"footer.html" 
    },
    controller:{
        main : folder.controller+"main.js",
        navbar : folder.controller+"navbar.js"
    },
    view : {
        content:folder.view+"content/",
        header: folder.view+"header.js",
        search:folder.view+"search.js" ,
        settings:folder.view+"settings.js" ,
        sidebar:folder.view+"sidebar.js" ,
        footer:folder.view+"footer.js" 

    }
}