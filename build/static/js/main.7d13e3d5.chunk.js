(this["webpackJsonpjst-for-fun"]=this["webpackJsonpjst-for-fun"]||[]).push([[0],{10:function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),r=e(3),c=e.n(r),u=(e(9),e(1));function l(t){var n=t.toString(16);return 1===n.length?"0"+n:n}function i(){var t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),o=function(t,n,e){return"#"+l(t)+l(n)+l(e)}(t,n,e),a="rgb(".concat(t,", ").concat(n,", ").concat(e,") ").concat(o),r="rgb(".concat(t,", ").concat(n,", ").concat(e,")");return document.body.style="background: ".concat(r,";"),a}var s=function(){var t=Object(o.useState)("rgb(255, 255, 255) #ffffff"),n=Object(u.a)(t,2),e=n[0],r=n[1];return a.a.createElement("div",{className:"colorButton"},a.a.createElement("button",{onClick:function(){return r(i())}},"Change Color"),a.a.createElement("p",null,e))};var f=function(){var t=Object(o.useState)(0),n=Object(u.a)(t,2),e=n[0],r=n[1],c=Object(o.useState)("UP"),l=Object(u.a)(c,2),i=l[0],s=l[1],f=Object(o.useState)("OUT"),m=Object(u.a)(f,2),h=m[0],b=m[1];return a.a.createElement("div",{className:"InfoButton"},a.a.createElement("button",{onClick:function(){return r(e+1)},onMouseDown:function(){return s("DOWN")},onMouseUp:function(){return s("UP")},onMouseOver:function(){return b("ON")},onMouseOut:function(){return b("OUT")}},"Down-Up-Click"),a.a.createElement("p",null,h," Button"),a.a.createElement("p",null,"Button ",i),a.a.createElement("p",null,"Click count: ",e))};var m=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t,n,e){t.exports=e(10)},9:function(t,n,e){}},[[4,1,2]]]);
//# sourceMappingURL=main.7d13e3d5.chunk.js.map