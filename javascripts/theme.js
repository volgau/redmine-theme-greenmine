!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){var n=o(1).SidebarToggler;!function(e,t){function o(t){e(t).wrapInner("<span></span>")}e(t).ready(function(){new n("greenmine_sidebar_state",7).init(),o("td.status")})}(jQuery,document)},function(e,t,o){function n(e,t){this.cookieName=e,this.cookieExpires=t}var r=o(2);n.prototype.strings={ru:{buttonTitle:"Вкл./выкл. боковую панель"},en:{buttonTitle:"Toggle sidebar"}},n.prototype.getString=function(e){var t=$("html").attr("lang").toLowerCase();return"ru"===t?this.strings[t][e]:this.strings.en[e]},n.prototype.init=function(){this.pageHasSidebar()&&(this.addButton(),this.restoreState())},n.prototype.pageHasSidebar=function(){return $("#sidebar").length>0&&0!==$("#sidebar").children().length},n.prototype.addButton=function(){0===$("#sidebar-toggle-button").length&&$("#header").prepend("<a id='sidebar-toggle-button' class='sidebar-toggle-button' href='#'></a>").children("#sidebar-toggle-button").attr("title",this.getString("buttonTitle")).click(function(e){e.preventDefault(),this.toggle()}.bind(this))},n.prototype.toggle=function(){$("#main").hasClass("nosidebar")?this.show():this.hide()},n.prototype.hide=function(){$("#main").addClass("nosidebar"),$("#sidebar-toggle-button").addClass("closed").html("&laquo;"),r.set(this.cookieName,"closed",{expires:this.cookieExpires})},n.prototype.show=function(){$("#main").removeClass("nosidebar"),$("#sidebar-toggle-button").removeClass("closed").html("&raquo;"),r.set(this.cookieName,"open",{expires:this.cookieExpires})},n.prototype.getStoredState=function(){return r.get(this.cookieName)},n.prototype.restoreState=function(){var e=this.getStoredState();void 0===e||"open"===e?this.show():"closed"===e&&this.hide()},t.SidebarToggler=n},function(e,t,o){var n,r;!function(i){var s=!1;if(n=i,void 0!==(r="function"==typeof n?n.call(t,o,t,e):n)&&(e.exports=r),s=!0,e.exports=i(),s=!0,!s){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var o=arguments[e];for(var n in o)t[n]=o[n]}return t}function t(o){function n(t,r,i){var s;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},n.defaults,i),"number"==typeof i.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}r=o.write?o.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u]));return document.cookie=t+"="+r+c}t||(s={});for(var d=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,l=0;l<d.length;l++){var f=d[l].split("="),g=f.slice(1).join("=");'"'===g.charAt(0)&&(g=g.slice(1,-1));try{var h=f[0].replace(p,decodeURIComponent);if(g=o.read?o.read(g,h):o(g,h)||g.replace(p,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(e){}if(t===h){s=g;break}t||(s[h]=g)}catch(e){}}return s}}return n.set=n,n.get=function(e){return n.call(n,e)},n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(t,o){n(t,"",e(o,{expires:-1}))},n.withConverter=t,n}return t(function(){})})}]);