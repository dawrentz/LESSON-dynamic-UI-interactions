(()=>{"use strict";var n={430:(n,e,t)=>{t.d(e,{A:()=>A});var i=t(354),r=t.n(i),o=t(314),a=t.n(o)()(r());a.push([n.id,"/* ==================reset.css================== */\n\n\n/* 1. Use a more-intuitive box-sizing model. */\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n    margin: 0;\n    padding: 0\n}\n\n/* Typographic tweaks!\n3. Add accessible line-height\n4. Improve text rendering */\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n\n    /* immediate children of body */\n    > * {\n        padding: var(--padding);\n    }\n}\n\n/* 5. Improve media defaults */\nimg, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n}\n\n/* 6. Remove built-in form typography styles */\ninput, button, textarea, select {\n    font: inherit;\n    appearance: none;\n}\n\n/* 7. Avoid text overflows */\np, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n}\n\n/* 8. Create a root stacking context */\n#root, #__next {\n    isolation: isolate;\n} \n\n/* 9. Reset link styling */\na {\n    appearance: none;\n    color: inherit;\n    text-decoration: none;\n}\n\n/* 10. lists */\nul {\n    padding-left: var(--padding);\n}","",{version:3,sources:["webpack://./src/reset.css"],names:[],mappings:"AAAA,kDAAkD;;;AAGlD,8CAA8C;AAC9C;IACI,sBAAsB;AAC1B;;AAEA,6BAA6B;AAC7B;IACI,SAAS;IACT;AACJ;;AAEA;;2BAE2B;AAC3B;IACI,gBAAgB;IAChB,mCAAmC;;IAEnC,+BAA+B;IAC/B;QACI,uBAAuB;IAC3B;AACJ;;AAEA,8BAA8B;AAC9B;IACI,cAAc;IACd,eAAe;AACnB;;AAEA,8CAA8C;AAC9C;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA,4BAA4B;AAC5B;IACI,yBAAyB;AAC7B;;AAEA,sCAAsC;AACtC;IACI,kBAAkB;AACtB;;AAEA,0BAA0B;AAC1B;IACI,gBAAgB;IAChB,cAAc;IACd,qBAAqB;AACzB;;AAEA,cAAc;AACd;IACI,4BAA4B;AAChC",sourcesContent:["/* ==================reset.css================== */\n\n\n/* 1. Use a more-intuitive box-sizing model. */\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n    margin: 0;\n    padding: 0\n}\n\n/* Typographic tweaks!\n3. Add accessible line-height\n4. Improve text rendering */\nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n\n    /* immediate children of body */\n    > * {\n        padding: var(--padding);\n    }\n}\n\n/* 5. Improve media defaults */\nimg, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n}\n\n/* 6. Remove built-in form typography styles */\ninput, button, textarea, select {\n    font: inherit;\n    appearance: none;\n}\n\n/* 7. Avoid text overflows */\np, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n}\n\n/* 8. Create a root stacking context */\n#root, #__next {\n    isolation: isolate;\n} \n\n/* 9. Reset link styling */\na {\n    appearance: none;\n    color: inherit;\n    text-decoration: none;\n}\n\n/* 10. lists */\nul {\n    padding-left: var(--padding);\n}"],sourceRoot:""}]);const A=a},208:(n,e,t)=>{t.d(e,{A:()=>c});var i=t(354),r=t.n(i),o=t(314),a=t.n(o),A=t(430),s=a()(r());s.i(A.A),s.push([n.id,'/* style.css */\n\n:root {\n  /* variables */\n  --spacing: 1rem;\n  --img-width: 30rem;\n\n  /* debugging */\n  * {\n    /* outline: solid red 1px; */\n  }\n}\n\nbody {\n  background-color: lightgray;\n\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n\n  min-width: var(--img-width);\n}\n\n#header {\n  margin: var(--spacing);\n\n  min-width: fit-content;\n\n  display: grid;\n  align-items: start;\n\n  grid-template-columns: repeat(2, auto);\n\n  #nav-div {\n    justify-self: end;\n\n    background-color: white;\n    text-align: center;\n\n    /* \n    challenges with the sizing/positioning the drop-down-menu:\n\n      -the drop-down-menu needs "position: absolute" to not disrupt DOM flow when revealed\n\n      -i\'m placing the drop-down-menu inside the nav-div (where the user hovers over) because it allows the absolute-position to\n        automatically render at the right spot (under the nav-div\'s title)\n\n      -to automatically position the drop-down-menu in the correct vertical position, the nav-div title must fill the un-hovered-nav-div\n        (drop-down-menu starts below that div, which now corresponds with the bottom edge of the nav-div)\n\n    */\n\n    /* drop-down-menu is init hidden, so the max-height here is just the h3 element */\n    height: min-content;\n    /* the drop-down-menu width inherits nav-div\'s */\n    width: 10rem;\n\n    h3 {\n      /* padding top and bottom of the h3 sets nav-div height, and makes the drop-down-menu start at bottom edge of nav-div*/\n      padding: 0.5rem 0;\n    }\n\n    &:hover {\n    }\n\n    #nav-drop-down-menu {\n      z-index: 1;\n      position: absolute;\n\n      background-color: white;\n\n      width: inherit;\n\n      &.hidden {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      .inner-nav-title {\n        margin-bottom: 0.5rem;\n        padding: 0.25rem 0;\n\n        border-top: 1px solid black;\n        border-bottom: 1px solid black;\n\n        &:hover {\n          background-color: black;\n          font-weight: bold;\n          color: white;\n\n          cursor: pointer;\n        }\n      }\n    }\n  }\n}\n\n#main-content {\n  /* cuts off the wide imgContainer div */\n  overflow: hidden;\n\n  #img-carousel-container {\n    /* background-color: palevioletred; */\n\n    margin: 0 auto;\n    margin-bottom: var(--spacing);\n\n    max-width: var(--img-width);\n\n    #all-carousel-images {\n      position: relative;\n\n      /* init as center the first picture. js will edit this to "slide" the wide imgContainer into view.*/\n      /* right: calc(0 * (var(--img-width) + 2rem)); */\n\n      display: flex;\n      gap: calc(2 * var(--spacing));\n\n      img {\n        border-radius: 50%;\n        max-width: var(--img-width);\n        min-width: var(--img-width);\n        max-height: var(--img-width);\n        min-height: var(--img-width);\n\n        margin: auto;\n      }\n    }\n  }\n\n  #nav-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: var(--spacing);\n\n    margin-bottom: 3rem;\n\n    .nav-arrow {\n      --arrow-size: 2rem;\n      width: var(--arrow-size);\n      height: var(--arrow-size);\n\n      &:hover {\n        transform: scale(1.25);\n        cursor: pointer;\n      }\n    }\n\n    #img-nav-circles {\n      display: flex;\n      justify-content: center;\n      gap: 0.75rem;\n\n      .img-nav-circle {\n        --circle-size: 0.666rem;\n\n        height: var(--circle-size);\n        width: var(--circle-size);\n\n        background-color: rgb(117, 117, 117);\n        border-radius: 50%;\n\n        &.selected {\n          transform: scale(1.5);\n          background-color: white;\n        }\n\n        &:hover {\n          transform: scale(1.5);\n          cursor: pointer;\n        }\n      }\n    }\n  }\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,cAAc;;AAId;EACE,cAAc;EACd,eAAe;EACf,kBAAkB;;EAElB,cAAc;EACd;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE,2BAA2B;;EAE3B,4DAA4D;;EAE5D,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;;EAEtB,sBAAsB;;EAEtB,aAAa;EACb,kBAAkB;;EAElB,sCAAsC;;EAEtC;IACE,iBAAiB;;IAEjB,uBAAuB;IACvB,kBAAkB;;IAElB;;;;;;;;;;;KAWC;;IAED,iFAAiF;IACjF,mBAAmB;IACnB,gDAAgD;IAChD,YAAY;;IAEZ;MACE,sHAAsH;MACtH,iBAAiB;IACnB;;IAEA;IACA;;IAEA;MACE,UAAU;MACV,kBAAkB;;MAElB,uBAAuB;;MAEvB,cAAc;;MAEd;QACE,aAAa;QACb,gBAAgB;MAClB;;MAEA;QACE,qBAAqB;QACrB,kBAAkB;;QAElB,2BAA2B;QAC3B,8BAA8B;;QAE9B;UACE,uBAAuB;UACvB,iBAAiB;UACjB,YAAY;;UAEZ,eAAe;QACjB;MACF;IACF;EACF;AACF;;AAEA;EACE,uCAAuC;EACvC,gBAAgB;;EAEhB;IACE,qCAAqC;;IAErC,cAAc;IACd,6BAA6B;;IAE7B,2BAA2B;;IAE3B;MACE,kBAAkB;;MAElB,mGAAmG;MACnG,gDAAgD;;MAEhD,aAAa;MACb,6BAA6B;;MAE7B;QACE,kBAAkB;QAClB,2BAA2B;QAC3B,2BAA2B;QAC3B,4BAA4B;QAC5B,4BAA4B;;QAE5B,YAAY;MACd;IACF;EACF;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;;IAEnB,mBAAmB;;IAEnB;MACE,kBAAkB;MAClB,wBAAwB;MACxB,yBAAyB;;MAEzB;QACE,sBAAsB;QACtB,eAAe;MACjB;IACF;;IAEA;MACE,aAAa;MACb,uBAAuB;MACvB,YAAY;;MAEZ;QACE,uBAAuB;;QAEvB,0BAA0B;QAC1B,yBAAyB;;QAEzB,oCAAoC;QACpC,kBAAkB;;QAElB;UACE,qBAAqB;UACrB,uBAAuB;QACzB;;QAEA;UACE,qBAAqB;UACrB,eAAe;QACjB;MACF;IACF;EACF;AACF",sourcesContent:['/* style.css */\n\n@import url("./reset.css");\n\n:root {\n  /* variables */\n  --spacing: 1rem;\n  --img-width: 30rem;\n\n  /* debugging */\n  * {\n    /* outline: solid red 1px; */\n  }\n}\n\nbody {\n  background-color: lightgray;\n\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n\n  min-width: var(--img-width);\n}\n\n#header {\n  margin: var(--spacing);\n\n  min-width: fit-content;\n\n  display: grid;\n  align-items: start;\n\n  grid-template-columns: repeat(2, auto);\n\n  #nav-div {\n    justify-self: end;\n\n    background-color: white;\n    text-align: center;\n\n    /* \n    challenges with the sizing/positioning the drop-down-menu:\n\n      -the drop-down-menu needs "position: absolute" to not disrupt DOM flow when revealed\n\n      -i\'m placing the drop-down-menu inside the nav-div (where the user hovers over) because it allows the absolute-position to\n        automatically render at the right spot (under the nav-div\'s title)\n\n      -to automatically position the drop-down-menu in the correct vertical position, the nav-div title must fill the un-hovered-nav-div\n        (drop-down-menu starts below that div, which now corresponds with the bottom edge of the nav-div)\n\n    */\n\n    /* drop-down-menu is init hidden, so the max-height here is just the h3 element */\n    height: min-content;\n    /* the drop-down-menu width inherits nav-div\'s */\n    width: 10rem;\n\n    h3 {\n      /* padding top and bottom of the h3 sets nav-div height, and makes the drop-down-menu start at bottom edge of nav-div*/\n      padding: 0.5rem 0;\n    }\n\n    &:hover {\n    }\n\n    #nav-drop-down-menu {\n      z-index: 1;\n      position: absolute;\n\n      background-color: white;\n\n      width: inherit;\n\n      &.hidden {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      .inner-nav-title {\n        margin-bottom: 0.5rem;\n        padding: 0.25rem 0;\n\n        border-top: 1px solid black;\n        border-bottom: 1px solid black;\n\n        &:hover {\n          background-color: black;\n          font-weight: bold;\n          color: white;\n\n          cursor: pointer;\n        }\n      }\n    }\n  }\n}\n\n#main-content {\n  /* cuts off the wide imgContainer div */\n  overflow: hidden;\n\n  #img-carousel-container {\n    /* background-color: palevioletred; */\n\n    margin: 0 auto;\n    margin-bottom: var(--spacing);\n\n    max-width: var(--img-width);\n\n    #all-carousel-images {\n      position: relative;\n\n      /* init as center the first picture. js will edit this to "slide" the wide imgContainer into view.*/\n      /* right: calc(0 * (var(--img-width) + 2rem)); */\n\n      display: flex;\n      gap: calc(2 * var(--spacing));\n\n      img {\n        border-radius: 50%;\n        max-width: var(--img-width);\n        min-width: var(--img-width);\n        max-height: var(--img-width);\n        min-height: var(--img-width);\n\n        margin: auto;\n      }\n    }\n  }\n\n  #nav-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: var(--spacing);\n\n    margin-bottom: 3rem;\n\n    .nav-arrow {\n      --arrow-size: 2rem;\n      width: var(--arrow-size);\n      height: var(--arrow-size);\n\n      &:hover {\n        transform: scale(1.25);\n        cursor: pointer;\n      }\n    }\n\n    #img-nav-circles {\n      display: flex;\n      justify-content: center;\n      gap: 0.75rem;\n\n      .img-nav-circle {\n        --circle-size: 0.666rem;\n\n        height: var(--circle-size);\n        width: var(--circle-size);\n\n        background-color: rgb(117, 117, 117);\n        border-radius: 50%;\n\n        &.selected {\n          transform: scale(1.5);\n          background-color: white;\n        }\n\n        &:hover {\n          transform: scale(1.5);\n          cursor: pointer;\n        }\n      }\n    }\n  }\n}\n'],sourceRoot:""}]);const c=s},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),o="/*# ".concat(r," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],A=0;A<n.length;A++){var s=n[A],c=i.base?s[0]+i.base:s[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var u=t(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=r(h,i);i.byIndex=A,e.splice(A,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var A=t(o[a]);e[A].references--}for(var s=i(n,r),c=0;c<o.length;c++){var d=t(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var i=t(72),r=t.n(i),o=t(825),a=t.n(o),A=t(659),s=t.n(A),c=t(56),d=t.n(c),l=t(540),u=t.n(l),h=t(113),m=t.n(h),g=t(208),p={};p.styleTagTransform=m(),p.setAttributes=d(),p.insert=s().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=u(),r()(g.A,p),g.A&&g.A.locals&&g.A.locals;const v=document.querySelector("#img-nav-circles"),B=document.querySelector("#right-nav-arrow"),f=document.querySelector("#all-carousel-images"),C=document.querySelector("#img-nav-circles"),w=document.querySelectorAll(".nav-arrow");let b;function E(){const n=document.createElement("div");return n.classList.add("img-nav-circle"),n}function y(n){n.classList.add("selected")}function I(){return v.querySelectorAll(".img-nav-circle")}function k(n,e){e.addEventListener("click",(()=>{!function(n,e){const t=e.getAttribute("data-link-img-num");n.style=`right: calc(${t} * (var(--img-width) + 2rem))`}(n,e),function(n){I().forEach((n=>{!function(n){n.classList.remove("selected")}(n)})),y(n)}(e)}))}function x(){clearTimeout(b),b=setTimeout((()=>{B.click(),x()}),5e3)}x();const M=document.querySelector("#nav-div"),Q=document.querySelector("#nav-drop-down-menu");var z,S;S=Q,(z=M).addEventListener("mouseover",(()=>{S.classList.remove("hidden"),z.addEventListener("mouseout",(()=>{S.classList.add("hidden")}))})),function(n,e){const t=function(n){const e=function(n){return n.querySelectorAll("img")}(n);return e.length}(n);for(let i=0;i<t;i++){const t=E();k(n,t),e.append(t),0===i&&y(t)}!function(n,e){let t=0;e.forEach((n=>{n.setAttribute("data-link-img-num",""+t++)}))}(0,I())}(f,C),w.forEach((n=>{n.addEventListener("click",(n=>{!function(n){const e=function(n,e){const t=I().length-1;let i=+n+ +e;return i>t&&(i=0),i<0&&(i=t),i.toString()}(document.querySelector(".img-nav-circle.selected").getAttribute("data-link-img-num"),n);(function(n){let e;return I().forEach((t=>{t.getAttribute("data-link-img-num")===n&&(e=t)})),e})(e).click()}(n.target.getAttribute("date-shift-int"))}))})),function(){const n=I(),e=Array.from(n),t=document.querySelectorAll(".nav-arrow");return[...e,...Array.from(t)]}().forEach((n=>{n.addEventListener("click",(()=>{x()}))}))})();
//# sourceMappingURL=main.js.map