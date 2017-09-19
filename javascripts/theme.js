function SidebarToggler () {
}

SidebarToggler.prototype.strings = {
    "ru": { buttonTitle: "Вкл./выкл. боковую панель" },
    "en": { buttonTitle: "Toggle sidebar" }
};

SidebarToggler.prototype.getString = function (slug) {
    var lang = $("html").attr ("lang").toLowerCase();
    if (lang === "ru") {
        return this.strings [lang][slug];
    }
    // fallback to EN
    return this.strings ["en"][slug];
}

SidebarToggler.prototype.addButton = function () {
    if ($("#sidebar").length > 0) {
        // TODO: Add CSS class
        $("#header").prepend ("<a id='btn-sidebar-toggle' class='btn-sidebar-toggle' href='#'>&raquo;</a>");
        $("#header").children ("#btn-sidebar-toggle")
            .attr ("title", this.getString ("buttonTitle"))
            .click ((function (e) { 
                e.preventDefault();
                this.toggle ();
            // TODO: Use polyfill for bind()?
            }).bind (this));
    }
};

SidebarToggler.prototype.toggle = function () {
    if ($("#sidebar").filter (":visible").length === 1) {
        this.hide ();
    } else {
        this.show ();
    }
};

SidebarToggler.prototype.hide = function () {
    $("#btn-sidebar-toggle").addClass ("closed").html("&laquo;");
    // TODO: Preserve original content width
    $("#content").width ("auto");
    $("#sidebar").hide ();
};

SidebarToggler.prototype.show = function () {
    $("#btn-sidebar-toggle").removeClass ("closed").html("&raquo;");
    // TODO: Preserve original content width
    $("#content").width ("75%");
    $("#sidebar").show ();
};

SidebarToggler.prototype.restoreButtonState = function () {
    // TODO: Restore state from cookies
};
    
(function ($, document) {
    var sidebarToggler = new SidebarToggler ();
    sidebarToggler.addButton ();
    sidebarToggler.restoreButtonState ();
}) (jQuery, document);
