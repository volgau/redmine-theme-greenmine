var SidebarToggler = require ("./sidebarToggler.js").SidebarToggler;

(function ($, document) {
    function wrapCellInner (selector) {
        $(selector).wrapInner ("<span></span>");
    }
    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ("greenmine_sidebar_state", 7);
        sidebarToggler.init ();
        wrapCellInner ("table.issues td.status");
        wrapCellInner ("div.issue div.attributes div.status div.value");
    });
}) (jQuery, document);
