(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),s=t(667),c=t.n(s),u=new URL(t(641),t.b),d=a()(i()),l=c()(u);d.push([e.id,"\nbody {\n  background-image: url("+l+');\n  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);\n  color: white;\n  font-family: "Gill Sans", sans-serif;\n }\n\n a {\n  color:lightgray;\n }\n\n h1 {\n  font-size: 48px;\n }\n\n h2 {\n  font-size: 24px;\n }\n\n h3 {\n  font-size: 18px;\n }\n\n #footer {\n  position:fixed;\n  left:20px;\n  bottom:20px;\n  height:30px;\n  width:100%;\n  text-align: center;\n }\n\n #menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n }\n\n .menu-item {\n  flex-grow: 1;\n }\n\n /* home page */\n #home-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 800px;\n }\n\n /* contact us page */\n\n #contact-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 800px;\n }\n\n /* menu page  */\n #menu-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 800px;\n }\n#menu-items {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n .item-container {\n  height: 400px;\n  width: 300px;\n  text-align: center;\n  margin: 15px;\n  padding: 20px;\n  background-color: dimgray;\n  border: 3px solid white;\n }\n\n .item-img {\n  width: 275px;\n  height: 275px;\n }\n\n .selected {\n  text-decoration: underline solid white 3px;\n }',""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var p=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=i(m,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=t(o[a]);n[s].references--}for(var c=r(e,i),u=0;u<o.length;u++){var d=t(o[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},641:(e,n,t)=>{e.exports=t.p+"0b00229189901a4b1cef.jpeg"}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),o=t(569),a=t.n(o),s=t(565),c=t.n(s),u=t(216),d=t.n(u),l=t(589),p=t.n(l),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=()=>{document.querySelector("#container").innerHTML='\n  <div id="home-container">\n        <div><h1>WELCOME TO YOUR FAVORITE RESTAURANT</h1></div>\n        <div><h2>Please take a look at our menu to see our offerings.</h2></div>\n      </div>\n  ',document.getElementById("home-btn").classList.add("selected")};console.log("woohoo, you are inside index.js"),document.querySelector("#content").innerHTML='\n  <div id="menu">\n  <div><h2 id="home-btn" class="menu-item selected">Home</h2></div>\n  <div><h2 id="contact-btn" class="menu-item">Contact Us</h2></div>\n  <div><h2 id="menu-btn" class="menu-item">Menu</h2></div>\n</div>\n<div id="container"></div>\n<div id="footer">\n<p>Background Photo by <a href="https://unsplash.com/@foodiesfeed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jakub Kapusnak</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>\n</div>\n  ',f();let v=document.querySelectorAll(".menu-item"),y=()=>{v.forEach((e=>{e.classList.remove("selected")}))};document.getElementById("home-btn").addEventListener("click",(()=>{y(),f()})),document.getElementById("contact-btn").addEventListener("click",(()=>{y(),document.querySelector("#container").innerHTML="\n  <div id=\"contact-container\">\n  <div><h1>Contact Us</h1></div>\n  <div><h2>Need to get ahold of us?</h2></div>\n  <div><h2>Here's How:</h2></div>\n  <div><h3>By Phone: (888) 867-5309</h3></div>\n  <div><h3>By Email: welovetohearyourcomplaints@noway.com</h3></div>\n  <div><h3>By Fax: You can't be serious...</h3></div>\n  <div><h3>By Mail: 2901 Osceola Pkwy, Lake Buena Vista, FL 32830</h3></div>\n</div> \n  ",document.getElementById("contact-btn").classList.add("selected")})),document.getElementById("menu-btn").addEventListener("click",(()=>{y(),document.querySelector("#container").innerHTML='\n  <div id="menu-container">\n  <div id="menu-title"><h1>Our Menu</h1></div>\n  <div id="menu-items">\n    <div class="item-container" id="item1">\n      <img class="item-img" src="burger.jpeg" alt="Burger">\n      <h2>Burger</h2>\n      <h3>$9.99</h3>\n      <p>Photo by <a href="https://unsplash.com/@nixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tyler Nix</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>\n      </p>\n    </div>\n    <div class="item-container" id="item2">\n      <img class="item-img" src="pizza.jpeg" alt="Pizza">\n      <h2>Pizza</h2>\n      <h3>$14.99</h3>\n      <p>Photo by <a href="https://unsplash.com/@thisisnando?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fernando Andrade</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>\n      </p>\n    </div>\n    <div class="item-container" id="item3">\n      <img class="item-img" src="pasta.jpeg" alt="Pasta">\n      <h2>Pasta</h2>\n      <h3>$8.99</h3>\n      <p>Photo by <a href="https://unsplash.com/@bleiplays33?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Lei</a> on <a href="https://unsplash.com/s/photos/pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>\n      </p> \n    </div>\n  </div>\n</div>\n  ',document.getElementById("menu-btn").classList.add("selected")}))})()})();