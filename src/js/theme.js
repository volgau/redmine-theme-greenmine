var SidebarToggler = require ("./sidebarToggler.js").SidebarToggler;

(function ($, document) {
    
    function wrapCellInner (selector) {
        $(selector).each (function () {
            if ($(this).children ("span").length === 0) {
                $(this).wrapInner ("<span></span>");
            }
        });
    }

    function applyStatusBadges () {
        wrapCellInner ("table.issues td.status");
        wrapCellInner ("div.issue div.attributes div.status div.value");
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

    function applyConvertSpentTime () {
        $(".issue.details .spent-time > .value > a").each (function () {
            $(this).text (convertSpentTime ($(this).text ()));   
        });
        $(".time-entries .hours").each (function () {
            $(this).text (convertSpentTime ($(this).text ()));
        });
    }
      
    function convertSpentTime (hourst) {
        if (hourst.indexOf(":") < 0) {
            var hoursd = parseFloat (hourst);
            var hours = Math.floor (hoursd);
            var minutes = Math.ceil ((hoursd - hours) * 60);
            var mt = "" + minutes;
            if (mt.length === 1) {
                mt = "0" + mt;
            }
            return hours + ":" + mt;
        }
        return hourst;
    }
    
    $(document).ready (function () {
        var sidebarToggler = new SidebarToggler ("greenmine_sidebar_state", 7);
        sidebarToggler.init ();
        applyStatusBadges ();
        applyConvertSpentTime ();
        if (isSelect2Installed ()) {
            applySelect2 (window.jql);
        }
    });

    $(document).on ("ajax:complete ajaxSuccess", function (event, data, status, xhr) {
        applyStatusBadges ();
        if (isSelect2Installed ()) {
            applySelect2Partial (window.jql);
        }
    });

}) (jQuery, document);
