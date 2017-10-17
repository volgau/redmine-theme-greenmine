var SidebarToggler = require ("./sidebarToggler.js").SidebarToggler;

(function ($, document) {
    function wrapCellInner (selector) {
        $(selector).wrapInner ("<span></span>");
    }
    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ("greenmine_sidebar_state", 7);
        sidebarToggler.init ();
        wrapCellInner ("td.status");
    });
}) (jQuery, document);
