var SidebarToggler = require ("./sidebarToggler.js").SidebarToggler;

(function ($, document) {
    function wrapCellInner (selector) {
        $(selector).wrapInner ("<span></span>");
    }
    function applySelect2 ($) {
        if (typeof ($) === "function") {
            $("select#issue_assigned_to_id").select2 ({dropdownAutoWidth: 'true', width: '60%'});
            $("#issue-form select#time_entry_activity_id").select2 ({dropdownAutoWidth: 'true', width: '60%'});
            $("#new_time_entry select#time_entry_activity_id").select2 ();
            $("select[id^='issue_custom_field_values']").select2 ({dropdownAutoWidth: 'true', width: '60%'});
        }
    }
    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ("greenmine_sidebar_state", 7);
        sidebarToggler.init ();
        wrapCellInner ("table.issues td.status");
        wrapCellInner ("div.issue div.attributes div.status div.value");
        applySelect2 (window.jql);
    });
}) (jQuery, document);
