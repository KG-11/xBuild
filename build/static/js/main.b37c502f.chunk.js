(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l}));const a={desktop:2080,laptop:1680,tablet:1024,mobile:696,mobileS:400},r=e=>`${e}px`,c=e=>e/16+"rem",o=e=>Number(e.replace("ms","")),i=e=>`${e}ms`,l=e=>e.split(" ").map((e=>Number(e)/255))},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return p}));var a=n(0),r=n(17);var c=function(){return Object(a.useContext)(r.a)};var o=function(e=""){const[t,n]=Object(a.useState)(e),[r,c]=Object(a.useState)(),[o,i]=Object(a.useState)(!1);return{value:t,error:r,onChange:e=>{n(e.target.value),i(!0),r&&e.target.checkValidity()&&c(null)},onBlur:e=>{o&&e.target.checkValidity()},onInvalid:e=>{e.preventDefault(),c(e.target.validationMessage)}}};let i=0;var l=()=>{const[e,t]=Object(a.useState)(null);return Object(a.useEffect)((()=>t(++i)),[]),e};var s=function(e,t,n){const r=Object(a.useRef)();Object(a.useEffect)((()=>{r.current=e})),Object(a.useEffect)((()=>{if(null!==t){let e=setInterval((function(){r.current()}),t);return()=>clearInterval(e)}}),[t,n])};var u=function(e,t,n={},r=!0){const[c,o]=Object(a.useState)(!1),[i,l]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{if(!(null===e||void 0===e?void 0:e.current))return;const a=new IntersectionObserver((([e])=>{const{isIntersecting:n,target:r}=e;o(n),n&&t&&(a.unobserve(r),l(!0))}),n);return!i&&r&&a.observe(e.current),()=>a.disconnect()}),[e,t,n,i,r]),c};var d=function(e,t){const[n,r]=Object(a.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return[n,t=>{try{const a=t instanceof Function?t(n):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error(a)}}]};var h=function(e,t=!0){const[n,r]=Object(a.useState)(0),c=b();return Object(a.useEffect)((()=>{let n=!1,a=null;const o=()=>{const{innerHeight:a}=window,c=Math.max(0,window.scrollY)*e,o=Math.max(-a,Math.min(a,c));r(t?o:c),n=!1},i=()=>{n||(n=!0,a=requestAnimationFrame(o))};return c||window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i),cancelAnimationFrame(a)}}),[t,e,c]),n};var b=function(){const[e,t]=Object(a.useState)((()=>{var e,t;return null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches}));return Object(a.useEffect)((()=>{var e,n;const a=null===(e=(n=window).matchMedia)||void 0===e?void 0:e.call(n,"(prefers-reduced-motion: reduce)"),r=()=>{t(null===a||void 0===a?void 0:a.matches)};return null===a||void 0===a||a.addListener(r),r(),()=>{null===a||void 0===a||a.removeListener(r)}}),[]),e};var f=function(e){const t=Object(a.useRef)();return Object(a.useEffect)((()=>{t.current=e}),[e]),t.current};var m=function(){return Object(a.useContext)(r.b)};var j=function(){const{status:e}=m(),t=f(e),n=b();Object(a.useEffect)((()=>{("entering"===t&&"entered"===e||n&&"entered"===e)&&(window.scrollTo(0,0),document.getElementById("MainContent").focus())}),[n,t,e])};var p=function(){const e="object"===typeof window,t=navigator.userAgent.match(/iphone|ipod|ipad/i),n=Object(a.useRef)((()=>({w:0,h:0}))),r=Object(a.useRef)((()=>Math.abs(window.orientation))),c=Object(a.useCallback)((()=>{let e=document.createElement("div");e.style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),r.current.w=90===n.current?e.offsetHeight:window.innerWidth,r.current.h=90===n.current?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null}),[]),o=Object(a.useCallback)((()=>e?t?(c(),90!==Math.abs(window.orientation)?r.current.h:r.current.w):window.innerHeight:0),[c,e,t]),i=Object(a.useCallback)((()=>({width:e?window.innerWidth:0,height:o()})),[o,e]),[l,s]=Object(a.useState)((()=>i()));return Object(a.useEffect)((()=>{const e=()=>{s(i())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[i,e]),l}},function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(2);const r="system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",c={base:{rgbBlack:"0 0 0",rgbWhite:"255 255 255",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:r,fontStack:`Gotham, ${r}`,monoFontStack:"SFMono Regular, Roboto Mono, Consolas, Liberation Mono, Menlo, Courier, monospace",japaneseFontStack:"\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30e1\u30a4\u30ea\u30aa, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:Object(a.e)(140),fontSizeH1:Object(a.e)(100),fontSizeH2:Object(a.e)(58),fontSizeH3:Object(a.e)(38),fontSizeH4:Object(a.e)(28),fontSizeBodyXL:Object(a.e)(22),fontSizeBodyL:Object(a.e)(20),fontSizeBodyM:Object(a.e)(18),fontSizeBodyS:Object(a.e)(16),fontSizeBodyXS:Object(a.e)(14),lineHeightTitle:"1.1",lineHeightBody:"1.5",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px"},desktop:{fontSizeH0:Object(a.e)(120),fontSizeH1:Object(a.e)(80)},laptop:{maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:Object(a.e)(100),fontSizeH1:Object(a.e)(70),fontSizeH2:Object(a.e)(52),fontSizeH3:Object(a.e)(36),fontSizeH4:Object(a.e)(26)},tablet:{fontSizeH0:Object(a.e)(80),fontSizeH1:Object(a.e)(60),fontSizeH2:Object(a.e)(48),fontSizeH3:Object(a.e)(32),fontSizeH4:Object(a.e)(24)},mobile:{spaceOuter:"24px",fontSizeH0:Object(a.e)(56),fontSizeH1:Object(a.e)(40),fontSizeH2:Object(a.e)(34),fontSizeH3:Object(a.e)(28),fontSizeH4:Object(a.e)(22),fontSizeBodyL:Object(a.e)(18),fontSizeBodyM:Object(a.e)(16),fontSizeBodyS:Object(a.e)(14)},mobileS:{spaceOuter:"16px",fontSizeH0:Object(a.e)(42),fontSizeH1:Object(a.e)(38),fontSizeH2:Object(a.e)(28),fontSizeH3:Object(a.e)(24),fontSizeH4:Object(a.e)(20)}},o={dark:{themeId:"dark",rgbBackground:"17 17 17",rgbBackgroundLight:"26 26 26",rgbPrimary:"0 229 255",rgbAccent:"0 229 255",rgbText:"255 255 255",rgbError:"255 0 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.8)",colorTextLight:"rgb(var(--rgbText) / 0.6)"},light:{themeId:"light",rgbBackground:"242 242 242",rgbBackgroundLight:"255 255 255",rgbPrimary:"0 0 0",rgbAccent:"0 229 255",rgbText:"0 0 0",rgbError:"210 14 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.7)",colorTextLight:"rgb(var(--rgbText) / 0.6)"}}},,,,function(e,t,n){"use strict";var a=n(1),r=n(4),c=n.n(r),o=n(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=o.createElement("path",{d:"M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"});function s({title:e,titleId:t,...n},a){return o.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,l)}const u=o.forwardRef(s);n.p;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var h=o.createElement("path",{fillRule:"evenodd",d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10A10 10 0 012 12zm14.86-6.09A7.726 7.726 0 0012 4.2c-.57 0-1.12.07-1.66.18.66.87 1.66 2.29 2.69 4.27 1.47-.65 2.81-1.51 3.83-2.74zM8.55 5c.55.65 1.63 2.06 2.79 4.25-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5zM4.2 11.89V12c0 1.91.7 3.66 1.84 5 .41-.61 1.12-1.54 2.15-2.5 1.08-.97 2.54-1.96 4.4-2.58-.15-.36-.3-.7-.45-1.03-2.78.87-5.52 1-7.08 1.01h-.01c-.34 0-.63 0-.85-.01zm12.22 6.53A57.5 57.5 0 0015 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 01-3.24 4.99zM12 19.8c-1.74 0-3.34-.57-4.64-1.54.28-.45.87-1.32 1.82-2.22.96-.93 2.32-1.89 4.05-2.46.59 1.67 1.13 3.57 1.54 5.71-.86.33-1.77.51-2.77.51zm6.13-12.62a7.823 7.823 0 011.66 4.45 15.32 15.32 0 00-3.19-.35h-.01c-.8 0-1.55.07-2.26.19l-.027-.067c-.16-.395-.313-.774-.493-1.143 1.58-.69 3.09-1.68 4.32-3.08z"});function b({title:e,titleId:t,...n},a){return o.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,h)}const f=o.forwardRef(b);n.p;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var j=o.createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"});function p({title:e,titleId:t,...n},a){return o.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,j)}const v=o.forwardRef(p);n.p;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var g=o.createElement("path",{d:"M12.875 3.516L12 1.932l-.875 1.584-9.393 17L.912 22h22.175l-.82-1.484-9.392-17zM19.697 20H4.303L12 6.068 19.697 20zM11 15v-4h2v4h-2zm0 3v-2h2v2h-2z"});function x({title:e,titleId:t,...n},a){return o.createElement("svg",O({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,g)}const w=o.forwardRef(x);n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=o.createElement("path",{d:"M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"});function S({title:e,titleId:t,...n},a){return o.createElement("svg",y({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,_)}const z=o.forwardRef(S);n.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var M=o.createElement("path",{d:"M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z"});function E({title:e,titleId:t,...n},a){return o.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,M)}const N=o.forwardRef(E);n.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L=o.createElement("path",{d:"M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"});function B({title:e,titleId:t,...n},a){return o.createElement("svg",H({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,L)}const C=o.forwardRef(B);n.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var P=o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"});function R({title:e,titleId:t,...n},a){return o.createElement("svg",I({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,P)}const T=o.forwardRef(R);n.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var W=o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"});function F({title:e,titleId:t,...n},a){return o.createElement("svg",$({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,W)}const A=o.forwardRef(F);n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var V=o.createElement("path",{d:"M8 5v14l11-7z"});function U({title:e,titleId:t,...n},a){return o.createElement("svg",X({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,V)}const G=o.forwardRef(U);n.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var D=o.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"});function q({title:e,titleId:t,...n},a){return o.createElement("svg",J({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,D)}const K=o.forwardRef(q);n.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var Q=o.createElement("path",{fillRule:"evenodd",d:"M15 10a2 2 0 100 4 2 2 0 000-4zm-2 5.464A4 4 0 0017.646 9 4 4 0 0015 2H9a4 4 0 00-2.646 7 4.01 4.01 0 00-.818 1 4 4 0 00.818 5 3.977 3.977 0 00-.818 1A4 4 0 1013 18v-2.536zM11 16H9a2 2 0 102 2v-2zM9 8h2V4H9a2 2 0 100 4zm0 2a2 2 0 100 4h2v-4H9zm4-2V4h2a2 2 0 010 4h-2z"});function Z({title:e,titleId:t,...n},a){return o.createElement("svg",Y({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,Q)}const ee=o.forwardRef(Z);n.p,n(44);const te={twitter:u,dribbble:f,github:v,error:w,menu:z,arrowRight:N,chevronRight:C,close:T,send:A,play:G,pause:K,figma:ee};t.a=({icon:e,style:t,className:n,...r})=>{const o=te[e];return Object(a.jsx)(o,{"aria-hidden":!0,className:c()("icon",n),...r})}},,function(e,t,n){"use strict";function a(e){e.currentTarget.blur()}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"b",(function(){return W}));var a=n(1),r=n(0),c=n(15),o=n(5),i=n(56),l=n(57),s=n(4),u=n.n(s),d=n(20),h=n(9);n(43);var b=function({highlight:e,className:t,...n}){const r=`monogram-clip-${Object(h.c)()}`;return Object(a.jsxs)("svg",{"aria-hidden":!0,className:u()("monogram",t),width:"46",height:"29",viewBox:"0 0 46 29",...n,children:[Object(a.jsx)("defs",{children:Object(a.jsx)("clipPath",{id:r,children:Object(a.jsx)("path",{d:"M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z"})})}),Object(a.jsx)("rect",{clipPath:`url(#${r})`,width:"100%",height:"100%"}),e&&Object(a.jsx)("g",{clipPath:`url(#${r})`,children:Object(a.jsx)("rect",{className:"monogram__highlight",width:"100%",height:"100%"})})]})},f=n(14),m=n(22);n(50);var j=({menuOpen:e,...t})=>{const n=u()("nav-toggle__icon",{"nav-toggle__icon--open":e});return Object(a.jsx)(m.a,{iconOnly:!0,className:"nav-toggle","aria-label":"Menu","aria-expanded":e,...t,children:Object(a.jsxs)("div",{className:"nav-toggle__inner",children:[Object(a.jsx)(f.a,{className:u()(n,"nav-toggle__icon--menu"),open:e,icon:"menu"}),Object(a.jsx)(f.a,{className:u()(n,"nav-toggle__icon--close"),open:e,icon:"close"})]})})};n(51);var p=({isMobile:e,...t})=>{const{dispatch:n,theme:r}=Object(h.a)(),c="dark"===r,o=`theme-toggle-mask-${Object(h.c)()}`;return Object(a.jsx)(m.a,{iconOnly:!0,className:u()("theme-toggle",{"theme-toggle--mobile":e}),"aria-label":"Toggle theme",onClick:()=>{n({type:"toggleTheme"})},...t,children:Object(a.jsxs)("svg",{"aria-hidden":!0,className:"theme-toggle__svg",width:"38",height:"38",viewBox:"0 0 38 38",children:[Object(a.jsx)("defs",{children:Object(a.jsxs)("mask",{id:o,children:[Object(a.jsx)("circle",{className:u()("theme-toggle__circle","theme-toggle__circle--mask",{"theme-toggle__circle--dark":c}),cx:"19",cy:"19",r:"13"}),Object(a.jsx)("circle",{className:u()("theme-toggle__mask",{"theme-toggle__mask--dark":c}),cx:"25",cy:"14",r:"9"})]})}),Object(a.jsx)("path",{className:u()("theme-toggle__path",{"theme-toggle__path--dark":c}),d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),Object(a.jsx)("circle",{className:u()("theme-toggle__circle",{"theme-toggle__circle--dark":c}),mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})};const v=[{label:"Projects",pathname:"/",hash:"#project-1"},{label:"Details",pathname:"/",hash:"#details"},{label:"Contact",pathname:"/contact"}],O=[{label:"Twitter",url:"https://twitter.com/hamishMW",icon:"twitter"},{label:"Figma",url:"https://www.figma.com/@Hamish",icon:"figma"},{label:"Github",url:"https://github.com/HamishMW",icon:"github"}];var g=n(21),x=n(2),w=n(10),y=n(16);n(52);const _=()=>Object(a.jsx)("div",{className:"navbar__nav-icons",children:O.map((({label:e,url:t,icon:n})=>Object(a.jsx)("a",{className:"navbar__nav-icon-link","aria-label":e,href:t,onMouseUp:y.a,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(f.a,{className:"navbar__nav-icon",icon:n})},e)))});function S(e){const{menuOpen:t,dispatch:n}=Object(h.a)(),{location:o}=e,[i,s]=Object(r.useState)(),u=Object(h.l)(),d=Object(r.useRef)(),f=u.width<=x.a.mobile||u.height<=696,m=()=>{s(Math.random().toString(32).substr(2,8))},O=()=>{m(),t&&n({type:"toggleMenu"})};return Object(a.jsxs)("header",{className:"navbar",ref:d,children:[Object(a.jsx)(c.b,{className:"navbar__logo",to:{pathname:"/",hash:"#intro",state:i},"aria-label":"Hamish Williams, Designer",onClick:O,onMouseUp:y.a,children:Object(a.jsx)(b,{highlight:!0})}),Object(a.jsx)(j,{onClick:()=>n({type:"toggleMenu"}),menuOpen:t}),Object(a.jsxs)("nav",{className:"navbar__nav",children:[Object(a.jsx)("div",{className:"navbar__nav-list",children:v.map((({label:e,pathname:t,hash:n})=>Object(a.jsx)(c.c,{exact:!0,className:"navbar__nav-link",activeClassName:"navbar__nav-link--active",isActive:e=>(({match:e,hash:t=""})=>!!e&&`${e.url}${t}`===`${o.pathname}${o.hash}`)({match:e,hash:n}),onClick:m,to:{pathname:t,hash:n,state:i},onMouseUp:y.a,children:e},e)))}),Object(a.jsx)(_,{})]}),Object(a.jsx)(l.a,{mountOnEnter:!0,unmountOnExit:!0,in:t,timeout:{enter:0,exit:Object(x.b)(w.b.base.durationL)},onEnter:g.b,children:e=>Object(a.jsxs)("nav",{className:`navbar__mobile-nav navbar__mobile-nav--${e}`,children:[v.map((({label:t,pathname:n,hash:r},o)=>Object(a.jsx)(c.c,{className:`navbar__mobile-nav-link navbar__mobile-nav-link--${e}`,activeClassName:"navbar__mobile-nav-link--active",onClick:O,to:{pathname:n,hash:r,state:i},onMouseUp:y.a,style:{transitionDelay:Object(x.c)(Number(Object(x.b)(w.b.base.durationS))+50*o)},children:t},t))),Object(a.jsx)(_,{}),Object(a.jsx)(p,{isMobile:!0})]})}),!f&&Object(a.jsx)(p,{})]})}var z=Object(r.memo)(S),k=n(28),M=n(23),E=n(27);const N={menuOpen:!1,theme:"dark"};function H(e,t){const{type:n,value:a}=t;switch(n){case"setTheme":return{...e,theme:a};case"toggleTheme":{const t="dark"===e.theme?"light":"dark";return{...e,theme:t}}case"toggleMenu":return{...e,menuOpen:!e.menuOpen};default:throw new Error}}n(53),n(54);const L=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(2),n.e(3),n.e(6)]).then(n.bind(null,109)))),B=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,113)))),C=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(2),n.e(3),n.e(16),n.e(8)]).then(n.bind(null,107)))),I=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(11)]).then(n.bind(null,110)))),P=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(15)]).then(n.bind(null,108)))),R=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,114)))),T=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(12)]).then(n.bind(null,111)))),$=Object(r.createContext)(),W=Object(r.createContext)(),F=()=>{const e=Object(o.f)(),{pathname:t}=e;return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsx)("link",{rel:"canonical",href:`https://hamishw.com${t}`})}),Object(a.jsx)(M.a,{showOnFocus:!0,as:"a",className:"skip-to-main",href:"#MainContent",children:"Skip to main content"}),Object(a.jsx)(z,{location:e}),Object(a.jsx)(i.a,{component:"main",className:"app",tabIndex:-1,id:"MainContent",children:Object(a.jsx)(l.a,{timeout:Object(x.b)(w.b.base.durationS),onEnter:g.b,children:t=>Object(a.jsx)(W.Provider,{value:{status:t},children:Object(a.jsx)("div",{className:u()("app__page",`app__page--${t}`),children:Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)(r.Fragment,{}),children:Object(a.jsxs)(o.c,{location:e,children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:L}),Object(a.jsx)(o.a,{path:"/contact",component:B}),Object(a.jsx)(o.a,{path:"/projects/smart-sparrow",component:C}),Object(a.jsx)(o.a,{path:"/projects/slice",component:I}),Object(a.jsx)(o.a,{path:"/projects/volkihar-knight",component:P}),Object(a.jsx)(o.a,{path:"/uses",component:T}),Object(a.jsx)(o.a,{component:R})]})})})})},t)})]})};t.c=()=>{const[e]=Object(h.f)("theme","dark"),[t,n]=Object(r.useReducer)(H,N);return Object(r.useEffect)((()=>{E.a||console.info("\n__  __  __\n\\ \\ \\ \\ \\\u2215\n \\ \\\u2215\\ \\\n  \\\u2215  \\\u2215\n\n\nTaking a peek huh? Check out the source code: https://github.com/HamishMW/portfolio\n\n\n"),window.history.scrollRestoration="manual"}),[]),Object(r.useEffect)((()=>{n({type:"setTheme",value:e})}),[e]),Object(a.jsx)($.Provider,{value:{...t,dispatch:n},children:Object(a.jsx)(k.b,{themeId:t.theme,children:Object(a.jsx)(c.a,{children:Object(a.jsx)(F,{})})})})}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const a=["entering","entered"],r=e=>a.includes(e),c=e=>e&&e.offsetHeight},function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),r=n(0),c=n(4),o=n.n(c),i=n(15),l=n(13),s=n(9),u=n(2),d=n(23);n(46);var h=({className:e,style:t,size:n=32,text:r="Loading...",...c})=>{const i=()=>Object(l.createPortal)(Object(a.jsx)(d.a,{className:"loader-announcement","aria-live":"assertive",children:r}),document.body);if(Object(s.h)())return Object(a.jsxs)("div",{className:"loader-text",...c,children:[r,i()]});const h=Math.round(n/3*.2),b=Math.round(n/3-2*h-1);return Object(a.jsxs)("div",{className:o()("loader",e),"aria-label":r,style:{"--size":Object(u.d)(n),"--spanSize":Object(u.d)(b),"--gapSize":Object(u.d)(h),...t},...c,children:[Object(a.jsxs)("div",{className:"loader__content",children:[Object(a.jsx)("div",{className:"loader__span"}),Object(a.jsx)("div",{className:"loader__span"}),Object(a.jsx)("div",{className:"loader__span"})]}),i()]})},b=n(14),f=n(16);n(47);const m=Object(r.forwardRef)((({className:e,as:t,secondary:n,loading:r,loadingText:c="loading",icon:l,iconEnd:s,iconHoverShift:u,iconOnly:d,children:m,rel:j,target:p,href:v,...O},g)=>{const x=null===v||void 0===v?void 0:v.includes("://"),w=x||"#"===(null===v||void 0===v?void 0:v[0])?"a":i.b,y=t||(v?w:"button");return Object(a.jsxs)(y,{className:o()("button",e,{"button--loading":r,"button--icon-only":d,"button--secondary":n}),href:v&&x?v:void 0,to:v&&!x?v:void 0,rel:j||x?"noopener noreferrer":void 0,target:p||x?"_blank":void 0,onMouseUp:f.a,ref:g,...O,children:[!!l&&Object(a.jsx)(b.a,{className:o()("button__icon",{"button__icon--start":!d,"button__icon--shift":u}),icon:l}),!!m&&Object(a.jsx)("span",{className:"button__text",children:m}),!!s&&Object(a.jsx)(b.a,{className:o()("button__icon",{"button__icon--end":!d,"button__icon--shift":u}),icon:s}),r&&Object(a.jsx)(h,{className:"button__loader",size:32,text:c})]})}))},function(e,t,n){"use strict";var a=n(1),r=n(4),c=n.n(r);n(45);t.a=({className:e,showOnFocus:t,as:n="span",children:r,visible:o,...i})=>Object(a.jsx)(n,{className:c()("visually-hidden",e,{"visually-hidden--hidden":!o&&!t,"visually-hidden--show-on-focus":t}),...i,children:r})},,,,function(e,t,n){"use strict";const a="ReactSnap"===navigator.userAgent;t.a=a},function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return f}));var a=n(1),r=n(0),c=n(20),o=n(4),i=n.n(o);var l=function(){return Object(r.useContext)(f)},s=n(10),u=n(2),d=n.p+"static/media/gotham-book.9c2a0ce4.woff2",h=n.p+"static/media/gotham-medium.0ad7d622.woff2";const b=`\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 400;\n    src: url(${d}) format("woff");\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 500;\n    src: url(${h}) format("woff2");\n    font-display: swap;\n  }\n`,f=Object(r.createContext)({});function m(e){return Object.keys(e).filter((e=>"themeId"!==e)).map((t=>`--${t}: ${e[t]};`)).join("\n")}function j(e){let t={};for(const n of Object.keys(e))"themeId"!==n&&(t[`--${n}`]=e[n]);return t}const p=`\n  :root {\n    ${m(s.b.base)}\n  }\n\n  ${Object.keys(u.a).map((e=>`\n        @media (max-width: ${u.a[e]}px) {\n          :root {\n            ${m(s.b[e])}\n          }\n        }\n      `)).join("\n")}\n\n  .dark {\n    ${m(s.a.dark)}\n  }\n\n  .light {\n    ${m(s.a.light)}\n  }\n`;t.b=({themeId:e="dark",theme:t,children:n,className:o,as:u="div"})=>{const m={...s.a[e],...t},v=!l().themeId;return Object(r.useEffect)((()=>{v&&(window.localStorage.setItem("theme",JSON.stringify(e)),document.body.classList.remove("light","dark"),document.body.classList.add(e))}),[e,v]),Object(a.jsxs)(f.Provider,{value:m,children:[v&&Object(a.jsxs)(r.Fragment,{children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)("link",{rel:"preload",href:h,as:"font",crossorigin:""}),Object(a.jsx)("link",{rel:"preload",href:d,as:"font",crossorigin:""}),Object(a.jsx)("style",{children:b}),Object(a.jsx)("style",{children:p})]}),n]}),!v&&Object(a.jsx)(u,{className:i()("theme-provider",o),style:j(m),children:n})]})}},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(13),c=n(17);const o=document.getElementById("root");o.hasChildNodes()?Object(r.hydrate)(Object(a.jsx)(c.c,{}),o):Object(r.render)(Object(a.jsx)(c.c,{}),o)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}],[[35,5,7]]]);
//# sourceMappingURL=main.b37c502f.chunk.js.map