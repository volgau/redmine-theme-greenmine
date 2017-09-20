require ("./sidebarToggler.js");

(function ($, document) {
    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ();
        sidebarToggler.addButton ();
        sidebarToggler.restoreButtonState ();
    });
}) (jQuery, document);
