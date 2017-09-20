var Cookies = require("js-cookie");

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
        $("#header").prepend ("<a id='sidebar-toggle-button' class='sidebar-toggle-button' href='#'>&raquo;</a>");
        $("#header").children ("#sidebar-toggle-button")
            .attr ("title", this.getString ("buttonTitle"))
            .click ((function (e) { 
                e.preventDefault();
                this.toggle ();
            }).bind (this)); // TODO: Use polyfill for bind()?
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
    Cookies.set ("sidebar-state", "closed", {expires: 7});
};

SidebarToggler.prototype.show = function () {
    $("#sidebar-toggle-button").removeClass ("closed").html("&raquo;");
    // TODO: Preserve original content width
    $("#content").width ("75%");
    $("#sidebar").show ();
    Cookies.set ("sidebar-state", "open", {expires: 7});
};

SidebarToggler.prototype.getStoredState = function () {
    return Cookies.get ("sidebar-state");
};

SidebarToggler.prototype.restoreState = function () {
    var state = this.getStoredState ();
    if (typeof (state) === "undefined" || state === "open") {
        this.show ();
    } else if (state === "closed") {
        this.hide ();
    }
};

exports.SidebarToggler = SidebarToggler;