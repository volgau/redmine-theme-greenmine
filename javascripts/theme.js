!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){var i=n(1).SidebarToggler;!function(e,t){function n(t){e(t).each(function(){0===e(this).children("span").length&&e(this).wrapInner("<span></span>")})}function o(){n("table.issues td.status"),n("div.issue div.attributes div.status div.value")}function r(e){e("#issue-form select#issue_assigned_to_id").select2({dropdownAutoWidth:"true",width:"60%"}),e("#issue-form select[id^='issue_custom_field_values']").select2({dropdownAutoWidth:"true",width:"60%"})}function s(e){r(e),e("#issue-form select#time_entry_activity_id").select2({dropdownAutoWidth:"true",width:"60%"}),e("#new_time_entry select#time_entry_activity_id").select2()}function a(){return"function"==typeof window.jql&&window.jql().select2}function c(){e(".issue.details .spent-time > .value > a").each(function(){e(this).text(u(e(this).text()))}),e(".time-entries .hours").each(function(){e(this).text(u(e(this).text()))})}function u(e){if(e.indexOf(":")<0){var t=parseFloat(e),n=Math.floor(t),i=Math.ceil(60*(t-n)),o=""+i;return 1===o.length&&(o="0"+o),n+":"+o+" ("+e+")"}return e}e(t).ready(function(){new i("greenmine_sidebar_state",7).init(),o(),c(),a()&&s(window.jql)}),e(t).on("ajax:complete ajaxSuccess",function(e,t,n,i){o(),a()&&r(window.jql)})}(jQuery,document)},function(e,t,n){function i(e,t){this.cookieName=e,this.cookieExpires=t}var o=n(2);i.prototype.strings={ru:{buttonTitle:"Вкл./выкл. боковую панель"},en:{buttonTitle:"Toggle sidebar"}},i.prototype.getString=function(e){var t=$("html").attr("lang").toLowerCase();return"ru"===t?this.strings[t][e]:this.strings.en[e]},i.prototype.init=function(){this.pageHasSidebar()&&(this.addButton(),this.restoreState())},i.prototype.pageHasSidebar=function(){return $("#sidebar").length>0&&0!==$("#sidebar").children().length},i.prototype.addButton=function(){0===$("#sidebar-toggle-button").length&&$("#header").prepend("<a id='sidebar-toggle-button' class='sidebar-toggle-button' href='#'></a>").children("#sidebar-toggle-button").attr("title",this.getString("buttonTitle")).click(function(e){e.preventDefault(),this.toggle()}.bind(this))},i.prototype.toggle=function(){$("#main").hasClass("nosidebar")?this.show():this.hide()},i.prototype.hide=function(){$("#main").addClass("nosidebar"),$("#sidebar-toggle-button").addClass("closed").html("&laquo;"),o.set(this.cookieName,"closed",{expires:this.cookieExpires})},i.prototype.show=function(){$("#main").removeClass("nosidebar"),$("#sidebar-toggle-button").removeClass("closed").html("&raquo;"),o.set(this.cookieName,"open",{expires:this.cookieExpires})},i.prototype.getStoredState=function(){return o.get(this.cookieName)},i.prototype.restoreState=function(){var e=this.getStoredState();void 0===e||"open"===e?this.show():"closed"===e&&this.hide()},t.SidebarToggler=i},function(e,t,n){var i,o;!function(r){var s=!1;if(i=r,void 0!==(o="function"==typeof i?i.call(t,n,t,e):i)&&(e.exports=o),s=!0,e.exports=r(),s=!0,!s){var a=window.Cookies,c=window.Cookies=r();c.noConflict=function(){return window.Cookies=a,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}function t(n){function i(t,o,r){var s;if("undefined"!=typeof document){if(arguments.length>1){if(r=e({path:"/"},i.defaults,r),"number"==typeof r.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*r.expires),r.expires=a}r.expires=r.expires?r.expires.toUTCString():"";try{s=JSON.stringify(o),/^[\{\[]/.test(s)&&(o=s)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var c="";for(var u in r)r[u]&&(c+="; "+u,!0!==r[u]&&(c+="="+r[u]));return document.cookie=t+"="+o+c}t||(s={});for(var d=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,p=0;p<d.length;p++){var f=d[p].split("="),h=f.slice(1).join("=");this.json||'"'!==h.charAt(0)||(h=h.slice(1,-1));try{var g=f[0].replace(l,decodeURIComponent);if(h=n.read?n.read(h,g):n(h,g)||h.replace(l,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===g){s=h;break}t||(s[g]=h)}catch(e){}}return s}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(t,n){i(t,"",e(n,{expires:-1}))},i.withConverter=t,i}return t(function(){})})}]);