!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){var n=o(1).SidebarToggler;!function(e,t){function o(t){e(t).wrapInner("<span></span>")}function i(){"function"==typeof window.jql&&(window.jql("select#issue_assigned_to_id").select2({dropdownAutoWidth:"true",width:"60%"}),window.jql("select#time_entry_activity_id").select2(),window.jql("select[id^='issue_custom_field_values']").select2({dropdownAutoWidth:"true",width:"60%"}))}e(t).ready(function(){new n("greenmine_sidebar_state",7).init(),o("table.issues td.status"),o("div.issue div.attributes div.status div.value"),i()})}(jQuery,document)},function(e,t,o){function n(e,t){this.cookieName=e,this.cookieExpires=t}var i=o(2);n.prototype.strings={ru:{buttonTitle:"Вкл./выкл. боковую панель"},en:{buttonTitle:"Toggle sidebar"}},n.prototype.getString=function(e){var t=$("html").attr("lang").toLowerCase();return"ru"===t?this.strings[t][e]:this.strings.en[e]},n.prototype.init=function(){this.pageHasSidebar()&&(this.addButton(),this.restoreState())},n.prototype.pageHasSidebar=function(){return $("#sidebar").length>0&&0!==$("#sidebar").children().length},n.prototype.addButton=function(){0===$("#sidebar-toggle-button").length&&$("#header").prepend("<a id='sidebar-toggle-button' class='sidebar-toggle-button' href='#'></a>").children("#sidebar-toggle-button").attr("title",this.getString("buttonTitle")).click(function(e){e.preventDefault(),this.toggle()}.bind(this))},n.prototype.toggle=function(){$("#main").hasClass("nosidebar")?this.show():this.hide()},n.prototype.hide=function(){$("#main").addClass("nosidebar"),$("#sidebar-toggle-button").addClass("closed").html("&laquo;"),i.set(this.cookieName,"closed",{expires:this.cookieExpires})},n.prototype.show=function(){$("#main").removeClass("nosidebar"),$("#sidebar-toggle-button").removeClass("closed").html("&raquo;"),i.set(this.cookieName,"open",{expires:this.cookieExpires})},n.prototype.getStoredState=function(){return i.get(this.cookieName)},n.prototype.restoreState=function(){var e=this.getStoredState();void 0===e||"open"===e?this.show():"closed"===e&&this.hide()},t.SidebarToggler=n},function(e,t,o){var n,i;!function(r){var s=!1;if(n=r,void 0!==(i="function"==typeof n?n.call(t,o,t,e):n)&&(e.exports=i),s=!0,e.exports=r(),s=!0,!s){var a=window.Cookies,c=window.Cookies=r();c.noConflict=function(){return window.Cookies=a,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var o=arguments[e];for(var n in o)t[n]=o[n]}return t}function t(o){function n(t,i,r){var s;if("undefined"!=typeof document){if(arguments.length>1){if(r=e({path:"/"},n.defaults,r),"number"==typeof r.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*r.expires),r.expires=a}r.expires=r.expires?r.expires.toUTCString():"";try{s=JSON.stringify(i),/^[\{\[]/.test(s)&&(i=s)}catch(e){}i=o.write?o.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var c="";for(var u in r)r[u]&&(c+="; "+u,!0!==r[u]&&(c+="="+r[u]));return document.cookie=t+"="+i+c}t||(s={});for(var d=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,p=0;p<d.length;p++){var f=d[p].split("="),g=f.slice(1).join("=");this.json||'"'!==g.charAt(0)||(g=g.slice(1,-1));try{var h=f[0].replace(l,decodeURIComponent);if(g=o.read?o.read(g,h):o(g,h)||g.replace(l,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(e){}if(t===h){s=g;break}t||(s[h]=g)}catch(e){}}return s}}return n.set=n,n.get=function(e){return n.call(n,e)},n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(t,o){n(t,"",e(o,{expires:-1}))},n.withConverter=t,n}return t(function(){})})}]);