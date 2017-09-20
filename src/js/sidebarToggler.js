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
    if ($("#sidebar").length > 0 && $("#sidebar-toggle-button").length === 0) {
        // TODO: Add CSS class
        $("#header").prepend ("<a id='sidebar-toggle-button' class='sidebar-toggle-button' href='#'>&raquo;</a>");
        $("#header").children ("#sidebar-toggle-button")
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
    $("#sidebar-toggle-button").addClass ("closed").html("&laquo;");
    // TODO: Preserve original content width
    $("#content").width ("auto");
    $("#sidebar").hide ();
};

SidebarToggler.prototype.show = function () {
    $("#sidebar-toggle-button").removeClass ("closed").html("&raquo;");
    // TODO: Preserve original content width
    $("#content").width ("75%");
    $("#sidebar").show ();
};

SidebarToggler.prototype.restoreButtonState = function () {
    // TODO: Restore state from cookies
};