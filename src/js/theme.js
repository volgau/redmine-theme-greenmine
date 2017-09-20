var SidebarToggler = require ("./sidebarToggler.js").SidebarToggler;

(function ($, document) {
    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ();
        if (sidebarToggler.addButton ()) {
            sidebarToggler.restoreState ();
        }
    });
}) (jQuery, document);
