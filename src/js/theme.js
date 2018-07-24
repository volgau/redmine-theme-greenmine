var SidebarToggler = require ("./sidebarToggler.js").SidebarToggler;

(function ($, document) {
    
    function wrapCellInner (selector) {
        $(selector).wrapInner ("<span></span>");
    }

    function applySelect2Partial ($) {
        $("#issue-form select#issue_assigned_to_id").select2 ({dropdownAutoWidth: 'true', width: '60%'});
        $("#issue-form select[id^='issue_custom_field_values']").select2 ({dropdownAutoWidth: 'true', width: '60%'});
    }

    function applySelect2 ($) {
        applySelect2Partial ($);
        $("#issue-form select#time_entry_activity_id").select2 ({dropdownAutoWidth: 'true', width: '60%'});
        $("#new_time_entry select#time_entry_activity_id").select2 ();
    }

    function isSelect2Installed () {
        return (typeof (window.jql) === "function" && window.jql ().select2);
    }

    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ("greenmine_sidebar_state", 7);
        sidebarToggler.init ();
        wrapCellInner ("table.issues td.status");
        wrapCellInner ("div.issue div.attributes div.status div.value");

        if (isSelect2Installed ()) {
            applySelect2 (window.jql);
        }
    });

    $(document).on ("ajax:complete ajaxSuccess", function (event, data, status, xhr) {
        if (isSelect2Installed ()) {
            applySelect2Partial (window.jql);
        }
    });

}) (jQuery, document);
