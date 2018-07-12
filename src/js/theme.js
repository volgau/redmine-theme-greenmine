var SidebarToggler = require ("./sidebarToggler.js").SidebarToggler;

(function ($, document) {
    function wrapCellInner (selector) {
        $(selector).wrapInner ("<span></span>");
    }
    function applySelect2 () {
        if (typeof (window.jql) === "function") {
            window.jql ("select#issue_assigned_to_id").select2 ({dropdownAutoWidth: 'true', width: '60%'});
            window.jql ("select#time_entry_activity_id").select2 ();
            window.jql ("select[id^='issue_custom_field_values']").select2 ({dropdownAutoWidth: 'true', width: '60%'});
        }
    }
    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ("greenmine_sidebar_state", 7);
        sidebarToggler.init ();
        wrapCellInner ("table.issues td.status");
        wrapCellInner ("div.issue div.attributes div.status div.value");
        applySelect2 ();
    });
}) (jQuery, document);
