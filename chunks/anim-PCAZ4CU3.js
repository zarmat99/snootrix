var Ee=(i,a)=>{for(let o=0;o<i.length;o++)if(i[o]!==a[o])return!1;return!0};function xe(i){let a=[];for(let o of i){let c=a[a.length-1];c&&Ee(c.face,o.face)?c.ms+=o.ms:a.push({face:o.face,ms:o.ms})}return a}var Je={hold:2e3,steps:[[.4,40],[.75,40],[1,60],[.75,40],[.4,40]]};function et(i,a){if(Ee(a.blinkFace(i,1),i))return null;let o=[{face:i.slice(),ms:Je.hold}];for(let[c,l]of Je.steps)o.push({face:a.blinkFace(i,c),ms:l});return{frames:xe(o),mode:"loop"}}var Qe={levels:[0,.3,.6,1],ms:70};function tt(i,a){if(Ee(a.mouthFace(i,1),i))return null;let o=Qe.levels.map(c=>({face:c?a.mouthFace(i,c):i.slice(),ms:Qe.ms}));return{frames:xe(o),mode:"pingpong"}}var le={hold:1500,step:50,moving:.55};function nt(i,a){let o=[{face:i.slice(),ms:le.hold}],c=a.boopKeys&&a.boopKeys();if(c)return{frames:xe([...o,...c.map(b=>({face:b.face.slice(),ms:b.ms}))]),mode:"loop"};let l=Math.round(le.moving*1e3/le.step);for(let b=0;b<=l;b++)o.push({face:a.boopFace(b*le.step/1e3),ms:le.step});return o[o.length-1].ms=Math.round(a.BOOP_TIME*1e3)-l*le.step,{frames:xe(o),mode:"loop"}}var at="https://zarmat99.github.io/snootrix/",Tt=(()=>{let i=new Uint32Array(256);for(let a=0;a<256;a++){let o=a;for(let c=0;c<8;c++)o=o&1?3988292384^o>>>1:o>>>1;i[a]=o>>>0}return i})();function Ct(i){let a=4294967295;for(let o=0;o<i.length;o++)a=Tt[(a^i[o])&255]^a>>>8;return(a^4294967295)>>>0}function ot(i,a){let o=[];for(let c=0;c<i;c++)o.push(c);if(a==="pingpong")for(let c=i-2;c>=1;c--)o.push(c);return o}var it=i=>{let a=new Uint8Array(i.reduce((c,l)=>c+l.length,0)),o=0;for(let c of i)a.set(c,o),o+=c.length;return a};function Ot(i,a){let o=1<<a,c=o+1,l=a+1,b=c+1,s=new Map,w=[],_=0,h=0,d=m=>{for(_|=m<<h,h+=l;h>=8;)w.push(_&255),_>>>=8,h-=8};d(o);let g=i[0];for(let m=1;m<i.length;m++){let u=i[m],y=g*256+u,M=s.get(y);if(M!==void 0){g=M;continue}d(g),b===4096?(d(o),s=new Map,b=c+1,l=a+1):(b>=1<<l&&l++,s.set(y,b++)),g=u}return d(g),d(c),h>0&&w.push(_&255),w}function rt(i,a,o,c,l){let b=[],s=h=>b.push(h&255),w=h=>{b.push(h&255,h>>8&255)},_=h=>{for(let d=0;d<h.length;d++)b.push(h.charCodeAt(d))};_("GIF89a"),w(o),w(c),s(243),s(0),s(0);for(let h=0;h<16;h++){let d=l[h]||[0,0,0];s(d[0]),s(d[1]),s(d[2])}return s(33),s(255),s(11),_("NETSCAPE2.0"),s(3),s(1),w(0),s(0),i.forEach((h,d)=>{s(33),s(249),s(4),s(4),w(Math.max(2,Math.min(65535,Math.round(a[d])))),s(0),s(0),s(44),w(0),w(0),w(o),w(c),s(0),s(4);let g=Ot(h,4);for(let m=0;m<g.length;m+=255){let u=Math.min(255,g.length-m);s(u);for(let y=0;y<u;y++)b.push(g[m+y])}s(0)}),s(59),Uint8Array.from(b)}function st(i,a=new Date){let o=(a.getHours()<<11|a.getMinutes()<<5|a.getSeconds()>>1)&65535,c=(Math.max(1980,a.getFullYear())-1980<<9|a.getMonth()+1<<5|a.getDate())&65535,l=[],b=[],s=0;for(let d of i){let g=Uint8Array.from(d.name,L=>L.charCodeAt(0)&127),m=d.data,u=Ct(m),y=new Uint8Array(30+g.length),M=new DataView(y.buffer);M.setUint32(0,67324752,!0),M.setUint16(4,20,!0),M.setUint16(6,0,!0),M.setUint16(8,0,!0),M.setUint16(10,o,!0),M.setUint16(12,c,!0),M.setUint32(14,u,!0),M.setUint32(18,m.length,!0),M.setUint32(22,m.length,!0),M.setUint16(26,g.length,!0),M.setUint16(28,0,!0),y.set(g,30),l.push(y,m);let p=new Uint8Array(46+g.length),S=new DataView(p.buffer);S.setUint32(0,33639248,!0),S.setUint16(4,20,!0),S.setUint16(6,20,!0),S.setUint16(8,0,!0),S.setUint16(10,0,!0),S.setUint16(12,o,!0),S.setUint16(14,c,!0),S.setUint32(16,u,!0),S.setUint32(20,m.length,!0),S.setUint32(24,m.length,!0),S.setUint16(28,g.length,!0),S.setUint32(42,s,!0),p.set(g,46),b.push(p),s+=y.length+m.length}let w=b.reduce((d,g)=>d+g.length,0),_=new Uint8Array(22),h=new DataView(_.buffer);return h.setUint32(0,101010256,!0),h.setUint16(8,i.length,!0),h.setUint16(10,i.length,!0),h.setUint32(12,w,!0),h.setUint32(16,s,!0),it([...l,...b,_])}var lt=(i,a)=>"0x"+i.toString(16).padStart(a,"0").toUpperCase(),It=i=>i?(i[0]&248)<<8|(i[1]&252)<<3|i[2]>>3:0,Rt=(i,a=16,o="  ")=>{let c=[];for(let l=0;l<i.length;l+=a)c.push(o+i.slice(l,l+a).join(", ")+",");return c.join(`
`)};function dt(i,a,o,c,l,b,{name:s="snootrix_anim",mode:w="loop"}={}){let _=o.reduce((d,g)=>d+g,0),h=i.map((d,g)=>{let m=[];for(let u=0;u<c*l;u++)m.push(lt(It(b[d[u]]),4));return`  { // frame ${g+1}
${Rt(m,16,"    ")}
  },`}).join(`
`);return`// Visor animation exported from the free SNOOTRIX face editor: ${at}
// ${i.length} frames of ${c}x${l} pixels, one value per LED, RGB565, rows from the top, left panel first.
// Black (0x0000) = off. One loop = ${a.length} steps (${w==="pingpong"?"ping-pong":"loop"}), ${_} ms: step s shows frame
// ${s}_order[s] for ${s}_ms[s] milliseconds. Tables in flash: read them with pgm_read_byte / pgm_read_word.
//
// ESP32 + ESP32-HUB75-MatrixPanel-DMA (two 64x32 panels chained: 128x32) or any Adafruit GFX display:
//   #include "${s}.h"
//   uint16_t step = 0;
//   uint32_t due = 0;
//   void loop() {
//     if ((int32_t)(millis() - due) >= 0) {
//       uint8_t f = pgm_read_byte(&${s}_order[step]);
//       display->drawRGBBitmap(0, 0, ${s}[f], ${s}_w, ${s}_h);   // Adafruit GFX
//       due = millis() + pgm_read_word(&${s}_ms[step]);
//       step = (step + 1) % ${s}_steps;
//     }
//   }
// Library built with NO_GFX: draw the frame pixel by pixel instead of drawRGBBitmap:
//   for (uint16_t i = 0; i < ${s}_w * ${s}_h; i++)
//     display->drawPixel(i % ${s}_w, i / ${s}_w, pgm_read_word(&${s}[f][i]));
// Each frame takes ${c*l*2} bytes of flash.
#pragma once
#include <stdint.h>
#ifndef PROGMEM
#define PROGMEM
#endif
const uint16_t ${s}_w = ${c};
const uint16_t ${s}_h = ${l};
const uint16_t ${s}_frames = ${i.length};
const uint16_t ${s}_steps = ${a.length};
const uint8_t ${s}_order[${a.length}] PROGMEM = { ${a.join(", ")} };
const uint16_t ${s}_ms[${a.length}] PROGMEM = { ${o.join(", ")} };
const uint16_t ${s}[${i.length}][${c*l}] PROGMEM = {
${h}
};
`}function ct(i,a,o,c,{name:l="snootrix_max7219_anim",chain:b="",mode:s="loop"}={}){let w=i[0]?i[0].length:0,_=u=>u===0?"right":"left",h=(u,y)=>u.panel<0?`${y+1}: ${u.name}`:`${_(u.panel)} ${u.name}`,d=o.reduce((u,y)=>u+y,0),g=i.map((u,y)=>{let M=u.map((p,S)=>`    { ${p.rows.map(E=>E.reduce((I,z,q)=>I|(z?128>>q:0),0)).map(E=>lt(E,2)).join(", ")} },  // ${h(p,S)}`);return`  { // frame ${y+1}
${M.join(`
`)}
  },`}).join(`
`),m=b?`
// ${b.replace(/\n/g,`
// `)}`:`
// Modules in the order listed in frame 1 (sides as seen from the front; mouth modules from the snout outwards).`;return`// Visor animation for MAX7219 8x8 modules, exported from the free SNOOTRIX face editor: ${at}
// Head: ${c}. ${i.length} frames x ${w} modules x 8 bytes: rows from the top, bit 7 = the leftmost LED
// as seen from the front of the head (for a module on a cheek: as seen from outside, looking at it).${m}
// One loop = ${a.length} steps (${s==="pingpong"?"ping-pong":"loop"}), ${d} ms: step s shows frame ${l}_order[s] for ${l}_ms[s] ms.
// The tables are in flash (PROGMEM): on AVR boards such as the Arduino Nano read them with pgm_read_byte / pgm_read_word.
//
//   #include "${l}.h"
//   uint16_t step = 0;
//   uint32_t due = 0;
//   void loop() {
//     if ((int32_t)(millis() - due) >= 0) {
//       uint8_t f = pgm_read_byte(&${l}_order[step]);
//       for (uint8_t m = 0; m < ${l}_modules; m++)
//         for (uint8_t r = 0; r < 8; r++)
//           mx.setRow(m, r, pgm_read_byte(&${l}[f][m][r]));   // MD_MAX72xx (LedControl: lc.setRow, up to 8 per chain)
//       due = millis() + pgm_read_word(&${l}_ms[step]);
//       step = (step + 1) % ${l}_steps;
//     }
//   }
// Depending on how your modules are mounted and on the library's module type you may need to flip or rotate the bytes.
#pragma once
#include <stdint.h>
#ifndef PROGMEM
#define PROGMEM
#endif
const uint8_t ${l}_modules = ${w};
const uint16_t ${l}_frames = ${i.length};
const uint16_t ${l}_steps = ${a.length};
const uint8_t ${l}_order[${a.length}] PROGMEM = { ${a.join(", ")} };
const uint16_t ${l}_ms[${a.length}] PROGMEM = { ${o.join(", ")} };
const uint8_t ${l}[${i.length}][${w}][8] PROGMEM = {
${g}
};
`}var pt=1,ye=64,ft=["drawn","rainbow","pulse"];function Ut(i){let a="";for(let o=0;o<i.length;o++)a+=String.fromCharCode(i[o]);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Gt(i){let a=atob(i.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(a,o=>o.charCodeAt(0))}async function mt(i,a){let o=new Response(new Blob([i]).stream().pipeThrough(new a("deflate-raw")));return new Uint8Array(await o.arrayBuffer())}var Nt=(i,a,o)=>{let c=a/2;for(let l=0;l<o;l++)for(let b=0;b<c;b++)if(i[l*a+c+b]!==i[l*a+c-1-b])return!1;return!0};async function Ae({frames:i,ms:a,mode:o,colorMode:c="drawn"},l,b){if(!i.length||i.length>ye)throw new Error("frame count");let s=i.every(M=>Nt(M,l,b)),w=s?l/2:l,_=s?l/2:0,h=w*b,d=new Uint8Array(1+2*i.length+i.length*Math.ceil(h/2));d[0]=i.length,a.forEach((M,p)=>{d[1+2*p]=M&255,d[2+2*p]=M>>8&255});let g=1+2*i.length;i.forEach((M,p)=>{let S=i[p-1];for(let L=0;L<h;L++){let E=Math.floor(L/w)*l+_+L%w,I=(M[E]^(S?S[E]:0))&15;d[g+(L>>1)]|=I<<(L&1)*4}g+=Math.ceil(h/2)});let m=d,u=!1;if(typeof CompressionStream<"u")try{m=await mt(d,CompressionStream),u=!0}catch{m=d}let y=(s?1:0)|(u?2:0)|Math.max(0,ft.indexOf(c))<<2|(o==="pingpong"?16:0);return Ut(it([Uint8Array.of(pt,y),m]))}async function ut(i,a,o){let c=Gt(i);if(c[0]!==pt)throw new Error("unknown animation format");let l=c[1],b=!!(l&1),s=c.subarray(2);l&2&&(s=await mt(s,DecompressionStream));let w=s[0];if(!w||w>ye)throw new Error("bad frame count");let _=b?a/2:a,h=_*o,d=Math.ceil(h/2);if(s.length<1+2*w+w*d)throw new Error("animation link too short");let g=[];for(let y=0;y<w;y++)g.push(s[1+2*y]|s[2+2*y]<<8);let m=[],u=1+2*w;for(let y=0;y<w;y++){let M=new Uint8Array(a*o),p=m[y-1];for(let S=0;S<h;S++){let L=Math.floor(S/_),E=S%_,I=s[u+(S>>1)]>>(S&1)*4&15;if(b){let z=L*a+a/2+E,q=L*a+a/2-1-E;M[z]=M[q]=I^(p?p[z]:0)}else{let z=L*a+E;M[z]=I^(p?p[z]:0)}}m.push(M),u+=d}return{frames:m,ms:g,mode:l&16?"pingpong":"loop",colorMode:ft[l>>2&3]||"drawn"}}var me={searching:"Looking for a SNOOTRIX board\u2026",none:"No SNOOTRIX board detected.",found:"A board is connected, but sending from this page comes with the first SNOOTRIX boards.",title:"SNOOTRIX is a prototype board, nothing to plug in yet.",body:"On SNOOTRIX this animation goes to your visor as-is: USB-C, Send, unplug, it keeps playing from a power bank. No PC, no converter, no code.",joined:"You're on the list. Thank you!"},Dt="https://tally.so/r/eqdb1k?src=editor-send",Bt='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/></svg>',Ft=`
.snd-back { position: fixed; inset: 0; z-index: 40; display: flex; align-items: flex-end; justify-content: center;
  padding: 12px 12px calc(12px + env(safe-area-inset-bottom)); background: rgba(5, 3, 11, 0.66); overscroll-behavior: contain; }
.snd { position: relative; width: min(460px, 100%); max-height: calc(100vh - 24px); max-height: calc(100dvh - 24px);
  overflow-y: auto; overscroll-behavior: contain; padding: 16px; border: 1px solid transparent; border-radius: var(--radius);
  background: linear-gradient(160deg, rgba(38, 19, 62, 0.98), rgba(19, 12, 40, 0.98)) padding-box,
    linear-gradient(110deg, rgba(255, 70, 170, 0.75), rgba(40, 225, 255, 0.6)) border-box;
  box-shadow: 0 10px 34px rgba(0, 0, 0, 0.6), 0 0 22px rgba(255, 70, 170, 0.12); color: var(--text); }
.snd:focus { outline: none; }
.snd-x { position: absolute; top: 8px; right: 8px; width: 36px; height: 36px; padding: 0; display: grid; place-items: center;
  border: 0; border-radius: 50%; background: none; color: var(--muted); cursor: pointer; }
.snd-x svg { width: 16px; height: 16px; }
.snd-x:hover { color: var(--text); background: rgba(170, 150, 235, 0.14); }
.snd-x:focus-visible { outline: 2px solid var(--cyan); outline-offset: 0; }
.snd-status { display: flex; align-items: center; gap: 10px; margin: 0 34px 12px 0; padding: 10px 12px; border-radius: 10px;
  background: rgba(5, 3, 11, 0.55); border: 1px solid var(--line); font-size: 15px; line-height: 1.3; font-weight: 700; color: #fff; }
.snd-dot { flex: none; width: 10px; height: 10px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); }
.snd-status.search .snd-dot { animation: snd-pulse 0.7s ease-in-out infinite alternate; }
.snd-status.none .snd-dot { background: #ff3d6e; box-shadow: 0 0 10px #ff3d6e; }
@keyframes snd-pulse { from { opacity: 0.25; transform: scale(0.7); } }
.snd-title { margin: 0 34px 8px 0; font-size: 16px; line-height: 1.35; font-weight: 700; color: #fff; text-wrap: pretty; }
.snd-text { margin: 0 0 12px; font-size: 14.5px; line-height: 1.45; color: #f1ecff; text-wrap: pretty; }
.snd-nw { white-space: nowrap; }
.snd-led { display: block; width: 100%; height: auto; margin: 0 0 14px; border-radius: 10px; border: 1px solid var(--line);
  background: #05030b; }
.snd-act { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; }
.snd-cta { padding: 10px 18px; min-height: 42px; font-size: 14.5px; }
.snd-done { margin: 0; font-size: 14.5px; font-weight: 600; color: #ffd6ec; }
.snd-back.in { animation: snd-fade 0.2s ease-out; }
.snd-back.in .snd { animation: snd-up 0.28s cubic-bezier(0.2, 0.8, 0.2, 1); }
@keyframes snd-fade { from { opacity: 0; } }
@keyframes snd-up { from { opacity: 0; transform: translateY(18px); } }
@media (min-width: 700px) { .snd-back { align-items: center; } .snd { padding: 20px 22px; } }
`,ve=1.1,ht=2.2;function gt({anim:i,startPlay:a,stopPlay:o,animator:c,state:l,track:b=()=>{},waitlist:s=null,F:w}){let{W:_,H:h}=w,d=null,g=null,m=null,u=null,y=null,M=null,p=0,S=0,L=!1,E=!1,I=null;function z(){let $=document.createElement("style");$.textContent=Ft,document.head.appendChild($),d=document.createElement("div"),d.className="snd-back",d.id="sendBack",d.hidden=!0,d.innerHTML=`
      <div class="snd" id="sendSheet" role="dialog" aria-modal="true" aria-labelledby="sendStatus" aria-describedby="sendTitle sendText" tabindex="-1">
        <button type="button" class="snd-x" id="sendClose" aria-label="Close" title="Close">${Bt}</button>
        <p class="snd-status" id="sendStatus" role="status" aria-live="polite"><span class="snd-dot" aria-hidden="true"></span><span id="sendStatusText"></span></p>
        <p class="snd-title" id="sendTitle"></p>
        <p class="snd-text" id="sendText"></p>
        <canvas class="snd-led" id="sendLed" aria-hidden="true"></canvas>
        <div class="snd-act">
          <a class="btn pill pink snd-cta" id="sendCta" href="${Dt}" data-waitlist="send" target="_blank" rel="noopener" data-umami-event="waitlist" data-umami-event-where="send"></a>
          <p class="snd-done" id="sendDone" hidden></p>
        </div>
      </div>`,document.body.appendChild(d),g=d.querySelector("#sendSheet"),m=d.querySelector("#sendLed"),u=d.querySelector("#sendCta"),y=d.querySelector("#sendDone"),g.querySelector("#sendTitle").textContent=me.title;let A=g.querySelector("#sendText");for(let k of me.body.split(/(as-is|USB-C)/))k==="as-is"||k==="USB-C"?A.append(Object.assign(document.createElement("span"),{className:"snd-nw",textContent:k})):k&&A.append(k);y.textContent=me.joined,s&&s.addLink(u),d.querySelector("#sendClose").addEventListener("click",V),d.addEventListener("click",k=>{k.target===d&&V()}),window.addEventListener("keydown",k=>{d.hidden||s&&s.isOpen()||(k.key==="Escape"?(k.preventDefault(),V()):k.key==="Tab"&&q(k),k.stopPropagation())},!0),window.addEventListener("resize",()=>{I=null})}function q($){let A=[...g.querySelectorAll("a[href], button")].filter(te=>!te.disabled&&!te.closest("[hidden]"));if(!A.length)return;let k=A[0],T=A[A.length-1],G=document.activeElement;$.shiftKey&&(G===k||G===g||!g.contains(G))?($.preventDefault(),T.focus()):!$.shiftKey&&(G===T||!g.contains(G))&&($.preventDefault(),k.focus())}function t(){let $=!!(s&&s.joined);u.textContent=s?s.cta:"Join the free list",u.hidden=$,y.hidden=!$}let P=12346,j=0;async function ee(){try{return"serial"in navigator?(await navigator.serial.getPorts()).some(A=>(A.getInfo?A.getInfo().usbVendorId:0)===P):!1}catch{return!1}}function ae($){let A=g.querySelector("#sendStatus");A.className=`snd-status ${$}`,g.querySelector("#sendStatusText").textContent=me[$==="search"?"searching":$]}async function oe(){let $=++j;ae("search");let[A]=await Promise.all([ee(),new Promise(k=>setTimeout(k,900))]);$!==j||d.hidden||ae(A?"found":"none")}function ue($){d||z(),d.hidden&&(M=$||document.activeElement,b("send-snootrix",{head:s?s.head:l.head,frames:i.frames.length}),t(),oe(),d.hidden=!1,d.classList.remove("in"),d.offsetWidth,d.classList.add("in"),i.frames.length>1&&!i.playing&&(a(!1),L=!0),g.scrollTop=0,g.focus({preventScroll:!0}),E=!1,S=0,I=null,cancelAnimationFrame(p),N())}function V(){!d||d.hidden||(d.hidden=!0,cancelAnimationFrame(p),p=0,L&&i.playing&&o(!1),L=!1,M&&M.isConnected&&M.focus({preventScroll:!0}))}function N(){p=requestAnimationFrame(N);let $=!!(s&&s.isOpen());if(E&&!$&&(t(),u.hidden&&!g.contains(document.activeElement)&&g.focus({preventScroll:!0})),E=$,$)return;let A=performance.now();A-S<33||(S=A,K())}function K(){let $=m.clientWidth;if(!$)return;let A=Math.min(3,window.devicePixelRatio||1),k=Math.round($*A),T=k/(_+ht+2*ve),G=Math.round(T*(h+2*ve)),te=(v,D)=>[(ve+v+(v>=_/2?ht:0)+.5)*T,(ve+D+.5)*T];if(!I||m.width!==k||m.height!==G){m.width=k,m.height=G,I=document.createElement("canvas"),I.width=k,I.height=G;let v=I.getContext("2d");v.fillStyle="#05030b",v.fillRect(0,0,k,G),v.fillStyle="#18132a",v.beginPath();for(let D=0;D<h;D++)for(let X=0;X<_;X++){let[J,W]=te(X,D);v.moveTo(J+T*.3,W),v.arc(J,W,T*.3,0,Math.PI*2)}v.fill()}let C=m.getContext("2d");C.drawImage(I,0,0);let ne=c.rgba,re=new Map;for(let v=0;v<_*h;v++){let D=ne[v*4],X=ne[v*4+1],J=ne[v*4+2];if(!(D|X|J))continue;let W=D<<16|X<<8|J,O=re.get(W);O||re.set(W,O=[]),O.push(v)}for(let[v,D]of re){let X=`${v>>16},${v>>8&255},${v&255}`;for(let[J,W]of[[.2,.66],[1,.4]]){C.fillStyle=`rgba(${X},${J})`,C.beginPath();for(let O of D){let[H,ie]=te(O%_,O/_|0);C.moveTo(H+T*W,ie),C.arc(H,ie,T*W,0,Math.PI*2)}C.fill()}}}return{open:ue,close:V,isOpen:()=>!!d&&!d.hidden,TEXT:me}}var we=ye,Le=20,Pe=1e4,bt=100,xt=2e3,yt="snootrix.anim.v1",vt=80,F=(i,a="")=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path${a?` fill-rule="${a}"`:""} d="${i}"/></svg>`,U={play:F("M8 5v14l11-7z"),stop:F("M7 7h10v10H7z"),add:F("M3 3h12v2H5v10H3zM7 7h14v14H7zM9 9v10h10V9zM13 11h2v2h2v2h-2v2h-2v-2h-2v-2h2z","evenodd"),left:F("M15.5 5.5 9 12l6.5 6.5-1.5 1.5-8-8 8-8z"),right:F("M8.5 18.5 15 12 8.5 5.5 10 4l8 8-8 8z"),del:F("M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"),down:F("M5 20h14v-2H5zM12 16l5-5-1.4-1.4L13 12.2V4h-2v8.2L8.4 9.6 7 11z"),code:F("M8.6 16.6L4 12l4.6-4.6L7.2 6 1.2 12l6 6zm6.8 0L20 12l-4.6-4.6L16.8 6l6 6-6 6z"),link:F("M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM7.8 17.7a3 3 0 0 1-4.2-4.2l2.8-2.8 1.4 1.4-2.8 2.8a1 1 0 0 0 1.4 1.4l2.8-2.8 1.4 1.4zm8.5-6.4l-1.4-1.4 2.8-2.8a1 1 0 0 0-1.4-1.4l-2.8 2.8-1.4-1.4 2.8-2.8a3 3 0 0 1 4.2 4.2z"),eye:F("M1.5 12C4.3 7.7 7.8 5.5 12 5.5s7.7 2.2 10.5 6.5c-2.8 4.3-6.3 6.5-10.5 6.5S4.3 16.3 1.5 12zM12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8z","evenodd"),mouth:F("M2 8.5l3.3 3.3L8.7 8.5l3.3 3.3 3.3-3.3 3.4 3.3L22 8.5V12l-3.3 3.5-3.4-3.3-3.3 3.3-3.3-3.3-3.4 3.3L2 12z"),heart:F("M12 21s-7.5-4.6-9.6-9.2C1 8.6 3 5 6.6 5c2.2 0 3.6 1.2 4.4 2.4h2C13.8 6.2 15.2 5 17.4 5 21 5 23 8.6 21.6 11.8 19.5 16.4 12 21 12 21z"),send:F("M3 20.5V14l11-2-11-2V3.5L22 12z")},zt=`
.anim { margin-top: 14px; border-top: 1px solid var(--line); }
.anim-top { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; }
.anim-top h2 { margin: 14px 0 8px; }
.anim-info { font-size: 12px; color: var(--muted); white-space: nowrap; }
/* contain: the strip scrolls inside the panel and never widens the page */
.anim-strip { display: flex; gap: 8px; overflow-x: auto; overscroll-behavior-x: contain; padding: 3px 2px 9px;
  scroll-snap-type: x proximity; scrollbar-width: thin; contain: inline-size; max-width: 100%; }
.anim-frame { flex: none; width: 124px; scroll-snap-align: start; appearance: none; border: 1px solid var(--line);
  background: var(--panel2); color: var(--text); border-radius: 10px; padding: 5px 5px 4px; cursor: pointer;
  display: flex; flex-direction: column; gap: 4px; font: 600 12px/1.2 var(--font); text-align: left; }
.anim-frame canvas { width: 112px; height: 28px; border-radius: 4px; display: block; background: #07050d; }
.anim-frame span { display: flex; justify-content: space-between; color: var(--muted); padding: 0 2px; }
.anim-frame span b { color: var(--text); }
.anim-frame:hover { border-color: rgba(40, 225, 255, 0.5); }
.anim-frame[aria-pressed="true"] { border-color: var(--cyan); box-shadow: 0 0 0 1px var(--cyan) inset, 0 0 12px rgba(40, 225, 255, 0.25); }
.anim-frame.playing { border-color: var(--pink); box-shadow: 0 0 0 1px var(--pink) inset, 0 0 14px rgba(255, 70, 170, 0.35); }
.anim-bar { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin: 4px 0 8px; }
.anim .btn.chip { min-height: 38px; }
.anim-bar .spacer { flex: 1; }
.btn.anim-play { min-width: 92px; }
/* playing: the "live" look of Talk with the microphone on (pink edge and glow), not the filled pink of Boop */
.btn.anim-play[aria-pressed="true"], .stage-bar #btnAnimPlay[aria-pressed="true"] { background: rgba(28, 19, 54, 0.82);
  border-color: var(--pink); color: #ffd6ec; box-shadow: 0 0 16px rgba(255, 70, 170, 0.45); }
.btn.anim-play[aria-pressed="true"] svg, #btnAnimPlay[aria-pressed="true"] svg { animation: pulse 1s ease-in-out infinite; }
.anim-ms { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: var(--muted); }
.anim-ms input { width: 78px; min-height: 38px; border-radius: 10px; border: 1px solid var(--line); background: var(--panel2);
  color: var(--text); font: 600 15px/1 var(--font); padding: 6px 8px; }
.anim-ms input:focus-visible { outline: 2px solid var(--cyan); outline-offset: 1px; }
.anim .seg { flex: 0 1 auto; gap: 4px; }
.anim .seg button { min-height: 38px; padding: 8px 11px; }
.anim-gen { margin: 2px 0 10px; }
.anim-gen .lead { font-size: 13px; color: var(--muted); margin: 0 0 7px; }
.anim-gen-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
.anim-gen-row .btn { border-radius: 12px; min-height: 44px; padding: 8px 6px; }
.anim-gen-row .btn svg { width: 22px; height: 22px; color: var(--cyan); }
.anim-gen-row .btn[data-gen="boop"] svg { color: var(--pink); }
.anim-exports .share-buttons .btn.big { flex: 1 1 calc(50% - 10px); }
.anim-notes { margin: 8px 0 12px; padding-left: 18px; }
.anim-notes li { margin: 4px 0; }
.anim-notes b { color: var(--text); font-weight: 600; }
@media (min-width: 900px) { .anim-exports .share-buttons .btn.big { flex: 1 1 calc(33% - 10px); } }
/* the exports and "Send to SNOOTRIX" side by side (idea 47); the button has the border of the board's line */
.anim-out { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 14px;
  margin: -2px 0 6px; font-size: 13px; }
.btn.anim-send { border-color: transparent; color: #fff;
  background: linear-gradient(160deg, rgba(38, 19, 62, 0.97), rgba(19, 12, 40, 0.97)) padding-box,
    linear-gradient(110deg, rgba(255, 70, 170, 0.85), rgba(40, 225, 255, 0.7)) border-box;
  box-shadow: 0 0 14px rgba(255, 70, 170, 0.16); }
.btn.anim-send:hover { border-color: transparent; box-shadow: 0 0 18px rgba(255, 70, 170, 0.32); }
.btn.anim-send svg { color: var(--pink); }
`;async function Wt(i){let{state:a,editor:o,animator:c,toast:l,track:b,F:s,A:w,S:_,heads:h,isBusy:d,onFaceShown:g}=i,{W:m,H:u,PALETTE:y}=s,M=new URLSearchParams(location.search),p=(e,n=document)=>n.querySelector(e),S={get(e){try{let n=localStorage.getItem(e);return n?JSON.parse(n):null}catch{return null}},set(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch{}}},L=new Set,E=(e,n)=>{let r=e+(n?JSON.stringify(n):"");L.has(r)||(L.add(r),b("anim",{action:e,...n}))},I=1,z=e=>Math.max(Le,Math.min(Pe,Math.round((+e||bt)/10)*10)),q=(e,n=bt)=>({id:I++,face:e.slice(),ms:z(n)}),t={frames:[q(a.face)],cur:0,mode:"loop",onion:!0,playing:!1},P=null,j=()=>{t.frames[t.cur].face.set(a.face)},ee=()=>ot(t.frames.length,t.mode),ae=()=>ee().reduce((e,n)=>e+t.frames[n].ms,0),oe=()=>{o.onion=t.onion&&!t.playing&&t.cur>0?t.frames[t.cur-1].face:null},ue=document.createElement("style");ue.textContent=zt,document.head.appendChild(ue);let V=document.createElement("section");V.className="anim",V.id="anim",V.setAttribute("aria-label","Animation"),V.innerHTML=`
    <div class="anim-top"><h2>Animation</h2><span class="anim-info" id="animInfo"></span></div>
    <div class="anim-gen" role="group" aria-label="Make frames from this face">
      <p class="lead">Make it move, from the face on screen:</p>
      <div class="anim-gen-row">
        <button class="btn" data-gen="blink" title="Eyes that close and open again">${U.eye}Blink</button>
        <button class="btn" data-gen="talk" title="The mouth from closed to open: talks in ping-pong">${U.mouth}Talk</button>
        <button class="btn" data-gen="boop" title="The hearts of the boop, then the face again">${U.heart}Boop</button>
      </div>
    </div>
    <div class="anim-strip" id="animStrip" role="group" aria-label="Frames"></div>
    <div class="anim-bar" role="toolbar" aria-label="Frames">
      <button class="btn pill anim-play" id="animPlay" aria-pressed="false" title="Play the animation (Enter)">${U.play}<span>Play</span></button>
      <button class="btn icon" id="animAdd" aria-label="Add a frame: a copy of this one" title="Add a frame: a copy of this one">${U.add}</button>
      <button class="btn icon" id="animLeft" aria-label="Move this frame left" title="Move this frame left">${U.left}</button>
      <button class="btn icon" id="animRight" aria-label="Move this frame right" title="Move this frame right">${U.right}</button>
      <button class="btn icon" id="animDel" aria-label="Delete this frame" title="Delete this frame">${U.del}</button>
    </div>
    <div class="anim-bar">
      <label class="anim-ms">Frame time <input type="number" id="animMs" min="${Le}" max="${Pe}" step="10" inputmode="numeric" aria-label="Frame time in milliseconds"> ms</label>
      <button class="btn chip" id="animAll" title="Give every frame this time">Same for all</button>
      <div class="seg" id="animMode" role="group" aria-label="Playback">
        <button data-v="loop" title="1, 2, 3, 1, 2, 3...">Loop</button>
        <button data-v="pingpong" title="1, 2, 3, 2, 1, 2...">Ping-pong</button>
      </div>
      <button class="btn chip" id="animOnion" aria-pressed="true" title="Show the previous frame faintly while you draw">Onion skin</button>
    </div>
    <p class="small muted" id="animHint">Tap a frame to draw on it; the copy button adds the next one. Undo works on frames too.</p>
    <div class="anim-out">
      <button type="button" class="linkbtn" id="animToExports">Export for your firmware</button>
      <button type="button" class="btn chip anim-send" id="animSend" aria-haspopup="dialog">${U.send}Send to SNOOTRIX</button>
    </div>`,p("#gridHint").after(V);let N=p("#animStrip"),K=document.createElement("button");K.className="btn pill",K.id="btnAnimPlay",K.setAttribute("aria-pressed","false"),K.title="Play the animation (Enter)",K.innerHTML=`${U.play}<span>Play</span>`,p("#btnReset").before(K);let $=document.createElement("div");$.className="anim-exports",$.id="animExports",$.innerHTML=`
    <h2>Animation for your firmware</h2>
    <div class="share-buttons">
      <button class="btn big" id="animGif" data-umami-event="export" data-umami-event-type="gif">${U.down}Animated GIF (128\xD732)</button>
      <button class="btn big" id="animZip" data-umami-event="export" data-umami-event-type="png-zip">${U.down}PNG frames + sheets (ZIP)</button>
      <button class="btn big" id="animC" data-umami-event="export" data-umami-event-type="c-anim">${U.code}C array frames (ESP32)</button>
      <button class="btn big" id="animMax" data-umami-event="export" data-umami-event-type="max7219-anim" disabled>${U.code}MAX7219 frames (Arduino)</button>
    </div>
    <p class="small muted" id="animExpInfo"></p>
    <ul class="small muted anim-notes">
      <li><b>GIF</b>: one pixel per LED, each frame with its time. Plays on ESP32 (AnimatedGIF with the HUB75 DMA library), the Adafruit Matrix Portal and CircuitPython <code>gifio</code>; the ProtoTracer GIF converter takes it too, at one speed for every frame (use "Same for all"; the ZIP's README has a fix for recent Pillow).</li>
      <li><b>ZIP</b>: a PNG per frame, the frames in one tall sprite sheet (PNG, and BMP for CircuitPython <code>TileGrid</code>), the times and a Matrix Portal example.</li>
      <li><b>C array</b>: RGB565 frames with the order and the time of each step, for ESP32 sketches with Adafruit GFX or the HUB75 DMA library.</li>
      <li><b>MAX7219</b>: 8 bytes per module and frame, in the order of the head's chain, for the MAX7219 heads.</li>
    </ul>
    <div class="share-buttons"><button class="btn big" id="animLink" data-umami-event="share" data-umami-event-type="anim-link">${U.link}Copy animation link</button></div>
    <p class="small muted" id="animLinkInfo">The link opens this editor with your animation playing, when it is short enough for a chat (2000 characters); otherwise share the GIF.</p>`,p("#maxNote").after($);function A(e,n){e.width!==m*2&&(e.width=m*2,e.height=u*2);let f=e.getContext("2d");f.fillStyle="#07050d",f.fillRect(0,0,e.width,e.height);let x=new Map;for(let B=0;B<m*u;B++){let Z=n[B];Z&&(x.has(Z)||x.set(Z,[]),x.get(Z).push(B))}for(let[B,Z]of x){f.fillStyle=`rgb(${y[B].join(",")})`;for(let Q of Z)f.fillRect(Q%m*2,Math.floor(Q/m)*2,2-.35,2-.35)}}let k=[];function T(){t.cur=Math.max(0,Math.min(t.frames.length-1,t.cur)),N.textContent="",k=t.frames.map((e,n)=>{let r=document.createElement("button");r.type="button",r.className="anim-frame";let f=document.createElement("canvas");A(f,e.face);let x=document.createElement("span");return r.append(f,x),r.addEventListener("click",()=>ie(n)),N.appendChild(r),{b:r,cv:f,lab:x}}),C(),G(),v()}function G(){t.frames.forEach((n,r)=>{let f=k[r];f&&(f.lab.innerHTML=`<b>${r+1}</b>${n.ms} ms`,f.b.setAttribute("aria-label",`Frame ${r+1} of ${t.frames.length}, ${n.ms} milliseconds`))});let e=t.frames.length;p("#animInfo").textContent=e===1?"1 frame":`${e} frames \xB7 ${(ae()/1e3).toFixed(ae()<1e4?2:1)} s ${t.mode==="pingpong"?"ping-pong":"loop"}`,p("#animExpInfo").textContent=e===1?"Your animation has 1 frame: add frames under the grid, or make them with Blink, Talk or Boop.":`Your animation: ${e} frames, ${ee().length} steps per ${t.mode==="pingpong"?"ping-pong":"loop"}, ${(ae()/1e3).toFixed(2)} s.`}function te(e){let n=k[e];if(!n)return;let r=n.b.offsetLeft-N.offsetLeft,f=r+n.b.offsetWidth;r<N.scrollLeft?N.scrollLeft=r-4:f>N.scrollLeft+N.clientWidth&&(N.scrollLeft=f-N.clientWidth+4)}function C(){k.forEach((e,n)=>e.b.setAttribute("aria-pressed",String(n===t.cur&&!t.playing))),te(t.cur)}let ne=-1;function re(e){ne>=0&&k[ne]&&k[ne].b.classList.remove("playing"),ne=e,e>=0&&k[e]&&(k[e].b.classList.add("playing"),te(e))}function v(){let e=t.frames.length;p("#animDel").disabled=e<2,p("#animLeft").disabled=t.cur===0,p("#animRight").disabled=t.cur>=e-1,p("#animAdd").disabled=e>=we;let n=p("#animMs");document.activeElement!==n&&(n.value=t.frames[t.cur].ms),p("#animMode").querySelectorAll("button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.v===t.mode))),p("#animOnion").setAttribute("aria-pressed",String(t.onion)),K.hidden=e<2;for(let r of[p("#animPlay"),K])r.setAttribute("aria-pressed",String(t.playing)),r.querySelector("svg").outerHTML=t.playing?U.stop:U.play,r.querySelector("span").textContent=t.playing?"Stop":"Play";p("#animPlay").disabled=e<2;for(let r of["#animGif","#animZip","#animC","#animLink"])p(r).disabled=!1;D()}function D(){let e=h&&h.HEADS[a.head];p("#animMax").disabled=!(e&&e.modules),p("#animMax").title=e&&e.modules?`${e.modules.length} modules \xD7 8 bytes per frame`:"Needs a head with MAX7219 modules (menu over the 3D head)"}let X=0;function J(){X||(X=setTimeout(()=>{X=0;let e=k[t.cur];e&&A(e.cv,t.frames[t.cur].face)},120))}let W=0;function O(){clearTimeout(W),W=setTimeout(async()=>{try{let e=await Ae({frames:t.frames.map(n=>n.face),ms:t.frames.map(n=>n.ms),mode:t.mode},m,u);S.set(yt,{code:e,cur:t.cur,onion:t.onion})}catch(e){console.warn(e)}},400)}function H(e){t.cur=Math.max(0,Math.min(t.frames.length-1,e)),a.face.set(t.frames[t.cur].face),o.show=null,oe(),o.draw(),g()}function ie(e){t.playing&&Y(!1),j(),H(e),C(),v(),O()}function Me(){return{kind:"anim",frames:t.frames.map(e=>({id:e.id,face:e.face.slice(),ms:e.ms})),cur:t.cur,mode:t.mode}}function se(){j(),o.undoStack.push(Me()),o.undoStack.length>vt&&o.undoStack.shift(),o.redoStack.length=0}function wt(e){t.frames=e.frames.map(n=>({id:n.id,face:n.face.slice(),ms:n.ms})),t.mode=e.mode,t.cur=e.cur,T(),H(e.cur),C(),v(),O()}function Te(){if(t.frames.length>=we){l(`${we} frames at most.`);return}t.playing&&Y(!1),se(),t.frames.splice(t.cur+1,0,q(a.face,t.frames[t.cur].ms)),t.cur+=1,T(),H(t.cur),C(),v(),O(),t.frames.length===2&&l("New frame: a copy of the first. Draw what changes, then press Play."),E("add")}function Ce(){t.frames.length<2||(t.playing&&Y(!1),se(),t.frames.splice(t.cur,1),t.cur=Math.min(t.cur,t.frames.length-1),T(),H(t.cur),C(),v(),O(),l("Frame deleted. Undo brings it back."),E("delete"))}function ke(e){let n=t.cur,r=n+e;r<0||r>=t.frames.length||(t.playing&&Y(!1),se(),[t.frames[n],t.frames[r]]=[t.frames[r],t.frames[n]],t.cur=r,T(),oe(),o.draw(),O(),E("move"))}function $e(e,n=!1){let r=z(e),f=n?t.frames:[t.frames[t.cur]];if(f.every(x=>x.ms===r)){v();return}se();for(let x of f)x.ms=r;G(),v(),O(),E(n?"time-all":"time")}function Oe(e){e!=="loop"&&e!=="pingpong"||(t.mode=e,t.playing&&(P.order=ee(),P.step=-1),G(),v(),O(),E("mode",{mode:e}))}function Ie(e){t.onion=!!e,oe(),o.draw(),v(),O(),E("onion")}let Re={blink:et,talk:tt,boop:nt},Mt={blink:"Blink needs eyes: draw them above the dotted line, away from the snoot.",talk:"Talk needs a mouth: draw it below the dotted line."};function Ue(e){if(!Re[e])return!1;t.playing&&Y(!1),j();let n=Re[e](t.frames[t.cur].face,w);if(!n)return l(Mt[e]),!1;se(),t.frames=n.frames.map(f=>q(f.face,f.ms)),t.mode=n.mode,t.cur=0,T(),H(0),C(),v(),O();let r=e[0].toUpperCase()+e.slice(1);return l(`${r}: ${t.frames.length} frames from your face, ${t.mode==="pingpong"?"ping-pong":"loop"}. Undo brings back your frames.`),E("gen",{gen:e}),de(),!0}function de(e=!0){if(t.frames.length<2){l("Add a frame first: an animation needs two or more.");return}t.playing||(j(),P={order:ee(),t0:null,step:-1},t.playing=!0,oe(),C(),v(),e&&E("play"))}function Y(e=!0){if(!t.playing)return;let n=P&&P.step>=0?P.order[P.step]:t.cur;t.playing=!1,P=null,re(-1),o.show=null,e&&n!==t.cur?H(n):(oe(),o.draw()),C(),v()}let he=()=>t.playing?Y():de();function kt(e){P.t0===null&&(P.t0=e);let n=P.order.map(x=>t.frames[x].ms),r=n.reduce((x,B)=>x+B,0),f=(e-P.t0)*1e3%r;for(let x=0;x<n.length;x++){if(f<n[x])return x;f-=n[x]}return n.length-1}let Ge=c.update.bind(c);c.update=(e,n)=>{if(!t.playing)return Ge(e,n);let r=kt(n.now),f=t.frames[P.order[r]].face;return r!==P.step&&(P.step=r,o.show=f,o.draw(),re(P.order[r])),Ge(f,{...n,mouth:"off",blink:!1})},p("#gridWrap").addEventListener("pointerdown",()=>{t.playing&&Y()},!0);let Ne=e=>(e.frameId=t.frames[t.cur].id,e);o.snapshot=()=>{o.undoStack.push(Ne(a.face.slice())),o.undoStack.length>vt&&o.undoStack.shift(),o.redoStack.length=0};let De=(e,n)=>{let r=e.pop();if(!r)return;if(t.playing&&Y(!1),r.kind==="anim"){n.push(Me()),wt(r);return}let f=r.frameId===void 0?t.cur:t.frames.findIndex(x=>x.id===r.frameId);f<0||(f!==t.cur&&(j(),H(f),C(),v()),n.push(Ne(a.face.slice())),a.face.set(r),o._changed())};o.undo=()=>De(o.undoStack,o.redoStack),o.redo=()=>De(o.redoStack,o.undoStack);let Be=o.onChange;o.onChange=()=>{j(),J(),O(),Be&&Be()},p("#animPlay").addEventListener("click",he),K.addEventListener("click",he),p("#animAdd").addEventListener("click",Te),p("#animDel").addEventListener("click",Ce),p("#animLeft").addEventListener("click",()=>ke(-1)),p("#animRight").addEventListener("click",()=>ke(1)),p("#animMs").addEventListener("change",e=>$e(e.target.value)),p("#animMs").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),e.target.blur())}),p("#animAll").addEventListener("click",()=>{$e(p("#animMs").value,!0),l(`Every frame: ${t.frames[t.cur].ms} ms`)}),p("#animMode").querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>Oe(e.dataset.v))),p("#animOnion").addEventListener("click",()=>Ie(!t.onion)),V.querySelectorAll("[data-gen]").forEach(e=>e.addEventListener("click",()=>Ue(e.dataset.gen))),p("#animToExports").addEventListener("click",()=>{let e=document.querySelector('[role=tab][data-tab="share"]');e&&e.click(),setTimeout(()=>$.scrollIntoView({behavior:"smooth",block:"start"}),50)});let Fe=gt({anim:t,startPlay:de,stopPlay:Y,animator:c,state:a,track:b,waitlist:i.waitlist,F:s});p("#animSend").addEventListener("click",e=>Fe.open(e.currentTarget));let ze=p("#headSel");ze&&ze.addEventListener("change",D),window.addEventListener("keydown",e=>{if(d()||e.ctrlKey||e.metaKey||e.altKey)return;let n=document.activeElement;!(!n||n===document.body||N.contains(n))||e.target.closest&&e.target.closest("input, textarea, select")||(e.key==="Enter"&&(!n||n===document.body)?(e.preventDefault(),he()):e.key==="ArrowLeft"&&t.cur>0?(e.preventDefault(),ie(t.cur-1)):e.key==="ArrowRight"&&t.cur<t.frames.length-1&&(e.preventDefault(),ie(t.cur+1)))});let ge=e=>!!(i.inAppStop&&i.inAppStop(e)),be=(e,n,r,f)=>{let x=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:n});document.body.appendChild(x),x.click(),x.remove(),setTimeout(()=>URL.revokeObjectURL(x.href),4e3),l(r),i.exported&&i.exported(f)},ce=()=>{j();let e=ee();return{o:e,ms:e.map(n=>t.frames[n].ms),faces:t.frames.map(n=>n.face)}},$t=e=>{let n=new Uint8Array(m*u*3);for(let r=0;r<m*u;r++){let f=y[e[r]];f&&(n[r*3]=f[0],n[r*3+1]=f[1],n[r*3+2]=f[2])}return n};async function je(e){let n=document.createElement("canvas");n.width=m,n.height=u*e.length;let r=n.getContext("2d"),f=r.createImageData(m,u*e.length);e.forEach((B,Z)=>{for(let Q=0;Q<m*u;Q++){let fe=y[B[Q]]||[0,0,0],R=(Z*m*u+Q)*4;f.data[R]=fe[0],f.data[R+1]=fe[1],f.data[R+2]=fe[2],f.data[R+3]=255}}),r.putImageData(f,0,0);let x=await _.canvasToBlob(n);return new Uint8Array(await x.arrayBuffer())}function Xe(){let{o:e,ms:n,faces:r}=ce();return rt(e.map(f=>r[f]),n.map(f=>f/10),m,u,y)}function St(){if(ge("gif"))return;let{o:e}=ce();be(new Blob([Xe()],{type:"image/gif"}),"snootrix-anim-128x32.gif",`GIF saved: ${e.length} frames, 128\xD732, one pixel per LED`,p("#animGif"))}async function He(){let{o:e,ms:n,faces:r}=ce(),f=r.length,x=[],B=R=>String(R+1).padStart(2,"0");for(let R=0;R<f;R++)x.push({name:`snootrix-anim/frames/frame-${B(R)}.png`,data:await je([r[R]])});x.push({name:"snootrix-anim/snootrix_anim_sheet.png",data:await je(r)});let Z=new Uint8Array(m*u*f*3);r.forEach((R,_e)=>Z.set($t(R),_e*m*u*3)),x.push({name:"snootrix-anim/snootrix_anim_sheet.bmp",data:new Uint8Array(await _.encodeBMP24(Z,m,u*f).arrayBuffer())});let Q={editor:"https://zarmat99.github.io/snootrix/",width:m,height:u,frames:t.frames.map((R,_e)=>({file:`frames/frame-${B(_e)}.png`,ms:R.ms})),mode:t.mode,loop:{order:e,ms:n},sheet:{png:"snootrix_anim_sheet.png",bmp:"snootrix_anim_sheet.bmp",tile_width:m,tile_height:u,frames:f}},fe=R=>new TextEncoder().encode(R.replace(/\n/g,`\r
`));return x.push({name:"snootrix-anim/animation.json",data:new TextEncoder().encode(JSON.stringify(Q,null,2)+`
`)}),x.push({name:"snootrix-anim/matrixportal_code.py",data:new TextEncoder().encode(Lt(e,n))}),x.push({name:"snootrix-anim/README.txt",data:fe(Pt(f,e,n))}),st(x)}async function _t(){if(ge("png-zip"))return;let e=p("#animZip");e.disabled=!0;try{let n=t.frames.length;be(new Blob([await He()],{type:"application/zip"}),"snootrix-anim-frames.zip",`ZIP saved: ${n} PNG frames, sprite sheets and times`,e)}catch(n){console.error(n),l("Could not make the ZIP. Try again.")}finally{e.disabled=!1}}function qe(){let{o:e,ms:n,faces:r}=ce();return dt(r,e,n,m,u,y,{mode:t.mode})}function Et(){ge("c-anim")||be(new Blob([qe()],{type:"text/x-c"}),"snootrix_anim.h",`C header saved: ${t.frames.length} RGB565 frames, 128\xD732`,p("#animC"))}function Ve(){let e=h&&h.HEADS[a.head];if(!e||!e.modules)return null;let{o:n,ms:r,faces:f}=ce();return ct(f.map(x=>h.moduleLeds(e,x)),n,r,e.label,{chain:e.chainNote||"",mode:t.mode})}function At(){let e=h&&h.HEADS[a.head];if(!e||!e.modules||ge("max7219-anim"))return;let n=Ve();n&&be(new Blob([n],{type:"text/x-c"}),"snootrix_max7219_anim.h",`MAX7219 header saved: ${t.frames.length} frames \xD7 ${e.modules.length} modules`,p("#animMax"))}async function Ke(){j();let e=await Ae({frames:t.frames.map(r=>r.face),ms:t.frames.map(r=>r.ms),mode:t.mode,colorMode:a.colorMode},m,u),n=a.head&&a.head!=="snootrix"?`head=${encodeURIComponent(a.head)}`:"";return`${location.origin}${location.pathname}${n?`?${n}`:""}#a=${e}`}async function We(){let e=await Ke();if(e.length>xt)return l(`Too long for a link (${e.length.toLocaleString("en")} characters): share the GIF instead.`),e;try{await navigator.clipboard.writeText(e),l("Link copied: it opens the editor with your animation playing")}catch{prompt("Copy this link:",e)}return e}p("#animGif").addEventListener("click",St),p("#animZip").addEventListener("click",_t),p("#animC").addEventListener("click",Et),p("#animMax").addEventListener("click",At),p("#animLink").addEventListener("click",We);function Lt(e,n){return`# Adafruit Matrix Portal (M4 or S3) with CircuitPython 9 or newer: plays snootrix_anim_sheet.bmp on two 64x32
# HUB75 panels chained (128x32), every step for its own time. Copy snootrix_anim_sheet.bmp and this file, renamed
# code.py, to the CIRCUITPY drive; adafruit_matrixportal comes from the CircuitPython library bundle.
# Exported from the free SNOOTRIX face editor (https://zarmat99.github.io/snootrix/). Not tested on a board by us.
import time

import displayio
from adafruit_matrixportal.matrix import Matrix

ORDER = [${e.join(", ")}]  # frame shown at each step
SECONDS = [${n.map(r=>(r/1e3).toFixed(3).replace(/0+$/,"").replace(/\.$/,".0")).join(", ")}]  # time of each step

matrix = Matrix(width=128, height=32, bit_depth=4)
bitmap = displayio.OnDiskBitmap("/snootrix_anim_sheet.bmp")
sprite = displayio.TileGrid(bitmap, pixel_shader=bitmap.pixel_shader, tile_width=128, tile_height=32)
group = displayio.Group()
group.append(sprite)
matrix.display.root_group = group

step = 0
while True:
    sprite[0] = ORDER[step]
    time.sleep(SECONDS[step])
    step = (step + 1) % len(ORDER)
`}function Pt(e,n,r){return`SNOOTRIX face editor - animation frames
Made with the free SNOOTRIX face editor: https://zarmat99.github.io/snootrix/

${e} frames of 128x32 pixels, one pixel per LED: both 64x32 panels side by side, left panel first. Black = off.
One ${t.mode==="pingpong"?"ping-pong":"loop"}: ${n.length} steps, ${r.reduce((f,x)=>f+x,0)} ms. Frame shown at each step: ${n.map(f=>f+1).join(", ")}.
Time of each step (ms): ${r.join(", ")}.

frames/frame-01.png ...    one PNG per frame (image converters, ProtoTracer Helper's Image-Converter, pixel editors)
snootrix_anim_sheet.png    all frames one under the other, 128 x ${u*e} (sprite sheet)
snootrix_anim_sheet.bmp    the same sheet as a 24-bit BMP: CircuitPython displayio.OnDiskBitmap + TileGrid
                           (tile_width=128, tile_height=32, frame k = tile k)
animation.json             frames, times, order of one loop
matrixportal_code.py       example code.py for an Adafruit Matrix Portal with two 64x32 panels (not tested on a board)

For GIF players (ESP32 with AnimatedGIF, Matrix Portal, CircuitPython gifio) use the GIF export of the editor.

ProtoTracer: the GIF-Converter of ProtoTracer-Helpers turns the editor's GIF into an ImageSequence. It plays every
frame at one speed (fps): give all frames the same time in the editor ("Same for all") or repeat frames.
With Pillow 9.1 or newer the converter writes wrong data for every frame after the first (of any GIF): add these
two lines at the top of GifConverter.py and it reads the frames right:
    from PIL import GifImagePlugin
    GifImagePlugin.LOADING_STRATEGY = GifImagePlugin.LoadingStrategy.RGB_AFTER_DIFFERENT_PALETTE_ONLY
`}async function Ze(e){let n=await ut(e,m,u);return{frames:n.frames.map((r,f)=>q(r,n.ms[f])),mode:n.mode,colorMode:n.colorMode}}let Se=new URLSearchParams(location.hash.slice(1)),pe=S.get(yt);if(pe&&pe.code)try{let e=await Ze(pe.code);t.frames=e.frames,t.mode=e.mode,t.cur=Math.max(0,Math.min(e.frames.length-1,pe.cur|0)),t.onion=pe.onion!==!1,Se.get("f")&&t.frames.length>1?(o.undoStack.push(Me()),t.frames=[q(a.face,t.frames[t.cur].ms)],t.cur=0):j()}catch(e){console.warn("saved animation not readable",e)}if(T(),H(t.cur),C(),v(),Se.get("a"))try{let e=await Ze(Se.get("a"));se(),t.frames=e.frames,t.mode=e.mode,t.cur=0,a.colorMode=e.colorMode,T(),H(0),C(),v(),O(),history.replaceState(null,"",location.pathname+location.search),setTimeout(()=>l("Loaded a shared animation. Make it yours! Undo brings back your own."),600),t.frames.length>1&&de(),E("open-link")}catch(e){console.warn(e),l("This animation link is damaged: showing your own animation.")}let Ye={anim:t,get play(){return P},select:ie,addFrame:Te,deleteFrame:Ce,move:ke,setMs:$e,setMode:Oe,setOnion:Ie,generate:Ue,startPlay:de,stopPlay:Y,toggle:he,order:ee,loopMs:ae,linkUrl:Ke,copyLink:We,gifBytes:Xe,zipFiles:He,cText:qe,maxText:Ve,send:Fe,MAX_FRAMES:we,MS_MIN:Le,MS_MAX:Pe,LINK_MAX:xt};return M.has("debug")&&(window.__snootrixAnim=Ye),Ye}export{xt as LINK_MAX,we as MAX_FRAMES,Pe as MS_MAX,Le as MS_MIN,bt as MS_NEW,Wt as setupAnim};
