var SidebarToggler = require ("./sidebarToggler.js").SidebarToggler;

(function ($, document) {
    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ("greenmine_sidebar_state", 7);
        sidebarToggler.init ();
    });
}) (jQuery, document);
