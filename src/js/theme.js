var SidebarToggler = require ("./sidebarToggler.js").SidebarToggler;

(function ($, document) {
    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ();
        sidebarToggler.init ();
    });
}) (jQuery, document);
