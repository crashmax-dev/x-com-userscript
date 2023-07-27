// ==UserScript==
// @name        x-com-userscript
// @version     0.0.0
// @author      crashmax <userscript@crashmax.ru>
// @license     MIT
// @homepage    https://crashmax-dev.github.io/x-com-userscript/
// @connect     crashmax-dev.github.io
// @icon        https://abs.twimg.com/favicons/twitter.3.ico
// @match       *://twitter.com/*
// @match       *://x.com/*
// @grant       GM_xmlhttpRequest
// @updateURL   https://crashmax-dev.github.io/x-com-userscript/x-com-userscript.meta.js
// @downloadURL https://crashmax-dev.github.io/x-com-userscript/x-com-userscript.user.js
// ==/UserScript==

(function(){"use strict";function i(e,t,...o){const n=document.createElement(e);return t instanceof Node?n.append(t):typeof t=="string"?n.append(u(t)):Array.isArray(t)?n.append(...t):(Object.assign(n,t),Object.assign(n.style,t?.style)),n.append(...o),n}function u(e){return document.createTextNode(e)}function b(e,t,o){const n=new MutationObserver((s,a)=>{for(const c of s)t(c,a)});return n.observe(e,{childList:!0,subtree:!0,...o}),()=>n.disconnect()}function f({selector:e,target:t=document.body,rejectTimeoutMs:o,signal:n}){return new Promise((s,a)=>{const c=b(t,(l,T)=>{const p=t.querySelector(e);p&&(T.disconnect(),s(p))}),r={timeout:null,abort:null},m=l=>{r.timeout&&clearTimeout(r.timeout),r.abort&&n.removeEventListener("abort",r.abort),c(),a(l)};o>0&&(r.timeout=setTimeout(()=>m(`${f.name} rejected (${o}ms)`),o)),n&&!n.aborted&&(r.abort=()=>m(n.reason),n.addEventListener("abort",r.abort))})}const d="Mathematical Pi 6",y="https://crashmax-dev.github.io/x-com-userscript/mathematical-pi-6.woff2";async function v(){const e=await g(),t=new FontFace(d,e);document.fonts.add(t);const o=await f({selector:'[href="/home"]'});h(o)}function g(){return new Promise((e,t)=>{GM_xmlhttpRequest({url:y,responseType:"arraybuffer",onload:o=>{e(o.response)},onerror:t})})}function h(e){e.querySelector("a > div").remove();const o=i("div",{style:{color:"#fff",fontFamily:`"${d}"`,fontSize:"4rem"}},i("b",{style:{fontSize:"5rem",marginRight:"10px"}},"X"),u("YETA"));e.style.backgroundColor="transparent",e.style.marginTop="1rem",e.style.marginLeft="1rem",e.style.alignItems="center",e.style.flexFlow="row",e.append(o)}v()})();
