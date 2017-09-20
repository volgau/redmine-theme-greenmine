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
    if ($("#sidebar").length > 0 // sidebar present
        && $("#sidebar").children().length !== 0 // sidebar is not empty
        && $("#sidebar-toggle-button").length === 0) // button not yet added
    {
        $("#header").prepend ("<a id='sidebar-toggle-button' class='sidebar-toggle-button' href='#'></a>");
        $("#header").children ("#sidebar-toggle-button")
            .attr ("title", this.getString ("buttonTitle"))
            .click ((function (e) { 
                e.preventDefault();
                this.toggle ();
            }).bind (this)); // TODO: Use polyfill for bind()?

            return true;
    }

    return false;
};

SidebarToggler.prototype.toggle = function () {
    if ($("#main").hasClass ("nosidebar")) {
        this.show ();
    } else {
        this.hide ();
    }
};

SidebarToggler.prototype.hide = function () {
    $("#main").addClass ("nosidebar");
    $("#sidebar-toggle-button").addClass ("closed").html("&laquo;");
    Cookies.set ("greenmine_sidebar_state", "closed", {expires: 7});
};

SidebarToggler.prototype.show = function () {
    $("#main").removeClass ("nosidebar");
    $("#sidebar-toggle-button").removeClass ("closed").html("&raquo;");
    Cookies.set ("greenmine_sidebar_state", "open", {expires: 7});
};

SidebarToggler.prototype.getStoredState = function () {
    return Cookies.get ("greenmine_sidebar_state");
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