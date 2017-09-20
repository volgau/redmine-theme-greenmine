var Cookies = require("js-cookie");

function SidebarToggler (cookieName, cookieExpires) {
    this.cookieName = cookieName;
    this.cookieExpires = cookieExpires;
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

SidebarToggler.prototype.init = function () {
    if (this.pageHasSidebar ()) {
        this.addButton ();
        this.restoreState ();
    }
};

SidebarToggler.prototype.pageHasSidebar = function () {
    // sidebar is present and not empty
    return $("#sidebar").length > 0 && $("#sidebar").children().length !== 0;
};

SidebarToggler.prototype.addButton = function () {
    if ($("#sidebar-toggle-button").length === 0) {
        $("#header").prepend ("<a id='sidebar-toggle-button' class='sidebar-toggle-button' href='#'></a>")
            .children ("#sidebar-toggle-button")
                .attr ("title", this.getString ("buttonTitle"))
                .click ((function (e) { 
                    e.preventDefault();
                    this.toggle ();
                }).bind (this)); // TODO: Use polyfill for bind()?
    }
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
    Cookies.set (this.cookieName, "closed", {expires: this.cookieExpires});
};

SidebarToggler.prototype.show = function () {
    $("#main").removeClass ("nosidebar");
    $("#sidebar-toggle-button").removeClass ("closed").html("&raquo;");
    Cookies.set (this.cookieName, "open", {expires: this.cookieExpires});
};

SidebarToggler.prototype.getStoredState = function () {
    return Cookies.get (this.cookieName);
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