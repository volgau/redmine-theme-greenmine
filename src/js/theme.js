var SCSS1 = require ("../scss/application_override.scss");
var SCSS2 = require ("../scss/context_menu_override.scss");
var SCSS3 = require ("../scss/responsive_override.scss");

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
