var _e=(i,a)=>{for(let o=0;o<i.length;o++)if(i[o]!==a[o])return!1;return!0};function he(i){let a=[];for(let o of i){let c=a[a.length-1];c&&_e(c.face,o.face)?c.ms+=o.ms:a.push({face:o.face,ms:o.ms})}return a}var Ye={hold:2e3,steps:[[.4,40],[.75,40],[1,60],[.75,40],[.4,40]]};function Qe(i,a){if(_e(a.blinkFace(i,1),i))return null;let o=[{face:i.slice(),ms:Ye.hold}];for(let[c,l]of Ye.steps)o.push({face:a.blinkFace(i,c),ms:l});return{frames:he(o),mode:"loop"}}var Je={levels:[0,.3,.6,1],ms:70};function et(i,a){if(_e(a.mouthFace(i,1),i))return null;let o=Je.levels.map(c=>({face:c?a.mouthFace(i,c):i.slice(),ms:Je.ms}));return{frames:he(o),mode:"pingpong"}}var ie={hold:1500,step:50,moving:.55};function tt(i,a){let o=[{face:i.slice(),ms:ie.hold}],c=a.boopKeys&&a.boopKeys();if(c)return{frames:he([...o,...c.map(b=>({face:b.face.slice(),ms:b.ms}))]),mode:"loop"};let l=Math.round(ie.moving*1e3/ie.step);for(let b=0;b<=l;b++)o.push({face:a.boopFace(b*ie.step/1e3),ms:ie.step});return o[o.length-1].ms=Math.round(a.BOOP_TIME*1e3)-l*ie.step,{frames:he(o),mode:"loop"}}var nt="https://zarmat99.github.io/snootrix/",Tt=(()=>{let i=new Uint32Array(256);for(let a=0;a<256;a++){let o=a;for(let c=0;c<8;c++)o=o&1?3988292384^o>>>1:o>>>1;i[a]=o>>>0}return i})();function Ct(i){let a=4294967295;for(let o=0;o<i.length;o++)a=Tt[(a^i[o])&255]^a>>>8;return(a^4294967295)>>>0}function at(i,a){let o=[];for(let c=0;c<i;c++)o.push(c);if(a==="pingpong")for(let c=i-2;c>=1;c--)o.push(c);return o}var ot=i=>{let a=new Uint8Array(i.reduce((c,l)=>c+l.length,0)),o=0;for(let c of i)a.set(c,o),o+=c.length;return a};function Ot(i,a){let o=1<<a,c=o+1,l=a+1,b=c+1,s=new Map,v=[],$=0,h=0,d=f=>{for($|=f<<h,h+=l;h>=8;)v.push($&255),$>>>=8,h-=8};d(o);let g=i[0];for(let f=1;f<i.length;f++){let u=i[f],y=g*256+u,w=s.get(y);if(w!==void 0){g=w;continue}d(g),b===4096?(d(o),s=new Map,b=c+1,l=a+1):(b>=1<<l&&l++,s.set(y,b++)),g=u}return d(g),d(c),h>0&&v.push($&255),v}function it(i,a,o,c,l){let b=[],s=h=>b.push(h&255),v=h=>{b.push(h&255,h>>8&255)},$=h=>{for(let d=0;d<h.length;d++)b.push(h.charCodeAt(d))};$("GIF89a"),v(o),v(c),s(243),s(0),s(0);for(let h=0;h<16;h++){let d=l[h]||[0,0,0];s(d[0]),s(d[1]),s(d[2])}return s(33),s(255),s(11),$("NETSCAPE2.0"),s(3),s(1),v(0),s(0),i.forEach((h,d)=>{s(33),s(249),s(4),s(4),v(Math.max(2,Math.min(65535,Math.round(a[d])))),s(0),s(0),s(44),v(0),v(0),v(o),v(c),s(0),s(4);let g=Ot(h,4);for(let f=0;f<g.length;f+=255){let u=Math.min(255,g.length-f);s(u);for(let y=0;y<u;y++)b.push(g[f+y])}s(0)}),s(59),Uint8Array.from(b)}function rt(i,a=new Date){let o=(a.getHours()<<11|a.getMinutes()<<5|a.getSeconds()>>1)&65535,c=(Math.max(1980,a.getFullYear())-1980<<9|a.getMonth()+1<<5|a.getDate())&65535,l=[],b=[],s=0;for(let d of i){let g=Uint8Array.from(d.name,P=>P.charCodeAt(0)&127),f=d.data,u=Ct(f),y=new Uint8Array(30+g.length),w=new DataView(y.buffer);w.setUint32(0,67324752,!0),w.setUint16(4,20,!0),w.setUint16(6,0,!0),w.setUint16(8,0,!0),w.setUint16(10,o,!0),w.setUint16(12,c,!0),w.setUint32(14,u,!0),w.setUint32(18,f.length,!0),w.setUint32(22,f.length,!0),w.setUint16(26,g.length,!0),w.setUint16(28,0,!0),y.set(g,30),l.push(y,f);let p=new Uint8Array(46+g.length),M=new DataView(p.buffer);M.setUint32(0,33639248,!0),M.setUint16(4,20,!0),M.setUint16(6,20,!0),M.setUint16(8,0,!0),M.setUint16(10,0,!0),M.setUint16(12,o,!0),M.setUint16(14,c,!0),M.setUint32(16,u,!0),M.setUint32(20,f.length,!0),M.setUint32(24,f.length,!0),M.setUint16(28,g.length,!0),M.setUint32(42,s,!0),p.set(g,46),b.push(p),s+=y.length+f.length}let v=b.reduce((d,g)=>d+g.length,0),$=new Uint8Array(22),h=new DataView($.buffer);return h.setUint32(0,101010256,!0),h.setUint16(8,i.length,!0),h.setUint16(10,i.length,!0),h.setUint32(12,v,!0),h.setUint32(16,s,!0),ot([...l,...b,$])}var st=(i,a)=>"0x"+i.toString(16).padStart(a,"0").toUpperCase(),It=i=>i?(i[0]&248)<<8|(i[1]&252)<<3|i[2]>>3:0,Ut=(i,a=16,o="  ")=>{let c=[];for(let l=0;l<i.length;l+=a)c.push(o+i.slice(l,l+a).join(", ")+",");return c.join(`
`)};function lt(i,a,o,c,l,b,{name:s="snootrix_anim",mode:v="loop"}={}){let $=o.reduce((d,g)=>d+g,0),h=i.map((d,g)=>{let f=[];for(let u=0;u<c*l;u++)f.push(st(It(b[d[u]]),4));return`  { // frame ${g+1}
${Ut(f,16,"    ")}
  },`}).join(`
`);return`// Visor animation exported from the free SNOOTRIX face editor: ${nt}
// ${i.length} frames of ${c}x${l} pixels, one value per LED, RGB565, rows from the top, left panel first.
// Black (0x0000) = off. One loop = ${a.length} steps (${v==="pingpong"?"ping-pong":"loop"}), ${$} ms: step s shows frame
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
`}function ct(i,a,o,c,{name:l="snootrix_max7219_anim",chain:b="",mode:s="loop"}={}){let v=i[0]?i[0].length:0,$=u=>u===0?"right":"left",h=(u,y)=>u.panel<0?`${y+1}: ${u.name}`:`${$(u.panel)} ${u.name}`,d=o.reduce((u,y)=>u+y,0),g=i.map((u,y)=>{let w=u.map((p,M)=>`    { ${p.rows.map(S=>S.reduce((I,j,X)=>I|(j?128>>X:0),0)).map(S=>st(S,2)).join(", ")} },  // ${h(p,M)}`);return`  { // frame ${y+1}
${w.join(`
`)}
  },`}).join(`
`),f=b?`
// ${b.replace(/\n/g,`
// `)}`:`
// Modules in the order listed in frame 1 (sides as seen from the front; mouth modules from the snout outwards).`;return`// Visor animation for MAX7219 8x8 modules, exported from the free SNOOTRIX face editor: ${nt}
// Head: ${c}. ${i.length} frames x ${v} modules x 8 bytes: rows from the top, bit 7 = the leftmost LED
// as seen from the front of the head (for a module on a cheek: as seen from outside, looking at it).${f}
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
const uint8_t ${l}_modules = ${v};
const uint16_t ${l}_frames = ${i.length};
const uint16_t ${l}_steps = ${a.length};
const uint8_t ${l}_order[${a.length}] PROGMEM = { ${a.join(", ")} };
const uint16_t ${l}_ms[${a.length}] PROGMEM = { ${o.join(", ")} };
const uint8_t ${l}[${i.length}][${v}][8] PROGMEM = {
${g}
};
`}var dt=1,ge=64,pt=["drawn","rainbow","pulse"];function Rt(i){let a="";for(let o=0;o<i.length;o++)a+=String.fromCharCode(i[o]);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Gt(i){let a=atob(i.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(a,o=>o.charCodeAt(0))}async function mt(i,a){let o=new Response(new Blob([i]).stream().pipeThrough(new a("deflate-raw")));return new Uint8Array(await o.arrayBuffer())}var Dt=(i,a,o)=>{let c=a/2;for(let l=0;l<o;l++)for(let b=0;b<c;b++)if(i[l*a+c+b]!==i[l*a+c-1-b])return!1;return!0};async function Ee({frames:i,ms:a,mode:o,colorMode:c="drawn"},l,b){if(!i.length||i.length>ge)throw new Error("frame count");let s=i.every(w=>Dt(w,l,b)),v=s?l/2:l,$=s?l/2:0,h=v*b,d=new Uint8Array(1+2*i.length+i.length*Math.ceil(h/2));d[0]=i.length,a.forEach((w,p)=>{d[1+2*p]=w&255,d[2+2*p]=w>>8&255});let g=1+2*i.length;i.forEach((w,p)=>{let M=i[p-1];for(let P=0;P<h;P++){let S=Math.floor(P/v)*l+$+P%v,I=(w[S]^(M?M[S]:0))&15;d[g+(P>>1)]|=I<<(P&1)*4}g+=Math.ceil(h/2)});let f=d,u=!1;if(typeof CompressionStream<"u")try{f=await mt(d,CompressionStream),u=!0}catch{f=d}let y=(s?1:0)|(u?2:0)|Math.max(0,pt.indexOf(c))<<2|(o==="pingpong"?16:0);return Rt(ot([Uint8Array.of(dt,y),f]))}async function ft(i,a,o){let c=Gt(i);if(c[0]!==dt)throw new Error("unknown animation format");let l=c[1],b=!!(l&1),s=c.subarray(2);l&2&&(s=await mt(s,DecompressionStream));let v=s[0];if(!v||v>ge)throw new Error("bad frame count");let $=b?a/2:a,h=$*o,d=Math.ceil(h/2);if(s.length<1+2*v+v*d)throw new Error("animation link too short");let g=[];for(let y=0;y<v;y++)g.push(s[1+2*y]|s[2+2*y]<<8);let f=[],u=1+2*v;for(let y=0;y<v;y++){let w=new Uint8Array(a*o),p=f[y-1];for(let M=0;M<h;M++){let P=Math.floor(M/$),S=M%$,I=s[u+(M>>1)]>>(M&1)*4&15;if(b){let j=P*a+a/2+S,X=P*a+a/2-1-S;w[j]=w[X]=I^(p?p[j]:0)}else{let j=P*a+S;w[j]=I^(p?p[j]:0)}}f.push(w),u+=d}return{frames:f,ms:g,mode:l&16?"pingpong":"loop",colorMode:pt[l>>2&3]||"drawn"}}var be={title:"SNOOTRIX is a prototype board, nothing to plug in yet.",body:"On SNOOTRIX this animation goes to your visor as-is: USB-C, Send, unplug, it keeps playing from a power bank. No PC, no converter, no code.",joined:"You're on the list. Thank you!"},Nt="https://tally.so/r/eqdb1k?src=editor-send",Bt='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/></svg>',Ft=`
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
`,xe=1.1,ut=2.2;function ht({anim:i,startPlay:a,stopPlay:o,animator:c,state:l,track:b=()=>{},waitlist:s=null,F:v}){let{W:$,H:h}=v,d=null,g=null,f=null,u=null,y=null,w=null,p=0,M=0,P=!1,S=!1,I=null;function j(){let _=document.createElement("style");_.textContent=Ft,document.head.appendChild(_),d=document.createElement("div"),d.className="snd-back",d.id="sendBack",d.hidden=!0,d.innerHTML=`
      <div class="snd" id="sendSheet" role="dialog" aria-modal="true" aria-labelledby="sendTitle" aria-describedby="sendText" tabindex="-1">
        <button type="button" class="snd-x" id="sendClose" aria-label="Close" title="Close">${Bt}</button>
        <p class="snd-title" id="sendTitle"></p>
        <p class="snd-text" id="sendText"></p>
        <canvas class="snd-led" id="sendLed" aria-hidden="true"></canvas>
        <div class="snd-act">
          <a class="btn pill pink snd-cta" id="sendCta" href="${Nt}" data-waitlist="send" target="_blank" rel="noopener" data-umami-event="waitlist" data-umami-event-where="send"></a>
          <p class="snd-done" id="sendDone" hidden></p>
        </div>
      </div>`,document.body.appendChild(d),g=d.querySelector("#sendSheet"),f=d.querySelector("#sendLed"),u=d.querySelector("#sendCta"),y=d.querySelector("#sendDone"),g.querySelector("#sendTitle").textContent=be.title;let G=g.querySelector("#sendText");for(let k of be.body.split(/(as-is|USB-C)/))k==="as-is"||k==="USB-C"?G.append(Object.assign(document.createElement("span"),{className:"snd-nw",textContent:k})):k&&G.append(k);y.textContent=be.joined,s&&s.addLink(u),d.querySelector("#sendClose").addEventListener("click",D),d.addEventListener("click",k=>{k.target===d&&D()}),window.addEventListener("keydown",k=>{d.hidden||s&&s.isOpen()||(k.key==="Escape"?(k.preventDefault(),D()):k.key==="Tab"&&X(k),k.stopPropagation())},!0),window.addEventListener("resize",()=>{I=null})}function X(_){let G=[...g.querySelectorAll("a[href], button")].filter(q=>!q.disabled&&!q.closest("[hidden]"));if(!G.length)return;let k=G[0],L=G[G.length-1],T=document.activeElement;_.shiftKey&&(T===k||T===g||!g.contains(T))?(_.preventDefault(),L.focus()):!_.shiftKey&&(T===L||!g.contains(T))&&(_.preventDefault(),k.focus())}function t(){let _=!!(s&&s.joined);u.textContent=s?s.cta:"Join the free list",u.hidden=_,y.hidden=!_}function O(_){d||j(),d.hidden&&(w=_||document.activeElement,b("send-snootrix",{head:s?s.head:l.head,frames:i.frames.length}),t(),d.hidden=!1,d.classList.remove("in"),d.offsetWidth,d.classList.add("in"),i.frames.length>1&&!i.playing&&(a(!1),P=!0),g.scrollTop=0,g.focus({preventScroll:!0}),S=!1,M=0,I=null,cancelAnimationFrame(p),J())}function D(){!d||d.hidden||(d.hidden=!0,cancelAnimationFrame(p),p=0,P&&i.playing&&o(!1),P=!1,w&&w.isConnected&&w.focus({preventScroll:!0}))}function J(){p=requestAnimationFrame(J);let _=!!(s&&s.isOpen());if(S&&!_&&(t(),u.hidden&&!g.contains(document.activeElement)&&g.focus({preventScroll:!0})),S=_,_)return;let G=performance.now();G-M<33||(M=G,ne())}function ne(){let _=f.clientWidth;if(!_)return;let G=Math.min(3,window.devicePixelRatio||1),k=Math.round(_*G),L=k/($+ut+2*xe),T=Math.round(L*(h+2*xe)),q=(E,B)=>[(xe+E+(E>=$/2?ut:0)+.5)*L,(xe+B+.5)*L];if(!I||f.width!==k||f.height!==T){f.width=k,f.height=T,I=document.createElement("canvas"),I.width=k,I.height=T;let E=I.getContext("2d");E.fillStyle="#05030b",E.fillRect(0,0,k,T),E.fillStyle="#18132a",E.beginPath();for(let B=0;B<h;B++)for(let C=0;C<$;C++){let[H,V]=q(C,B);E.moveTo(H+L*.3,V),E.arc(H,V,L*.3,0,Math.PI*2)}E.fill()}let Q=f.getContext("2d");Q.drawImage(I,0,0);let N=c.rgba,K=new Map;for(let E=0;E<$*h;E++){let B=N[E*4],C=N[E*4+1],H=N[E*4+2];if(!(B|C|H))continue;let V=B<<16|C<<8|H,A=K.get(V);A||K.set(V,A=[]),A.push(E)}for(let[E,B]of K){let C=`${E>>16},${E>>8&255},${E&255}`;for(let[H,V]of[[.2,.66],[1,.4]]){Q.fillStyle=`rgba(${C},${H})`,Q.beginPath();for(let A of B){let[re,ae]=q(A%$,A/$|0);Q.moveTo(re+L*V,ae),Q.arc(re,ae,L*V,0,Math.PI*2)}Q.fill()}}}return{open:O,close:D,isOpen:()=>!!d&&!d.hidden,TEXT:be}}var ye=ge,Se=20,Ae=1e4,gt=100,bt=2e3,xt="snootrix.anim.v1",yt=80,z=(i,a="")=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path${a?` fill-rule="${a}"`:""} d="${i}"/></svg>`,R={play:z("M8 5v14l11-7z"),stop:z("M7 7h10v10H7z"),add:z("M3 3h12v2H5v10H3zM7 7h14v14H7zM9 9v10h10V9zM13 11h2v2h2v2h-2v2h-2v-2h-2v-2h2z","evenodd"),left:z("M15.5 5.5 9 12l6.5 6.5-1.5 1.5-8-8 8-8z"),right:z("M8.5 18.5 15 12 8.5 5.5 10 4l8 8-8 8z"),del:z("M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"),down:z("M5 20h14v-2H5zM12 16l5-5-1.4-1.4L13 12.2V4h-2v8.2L8.4 9.6 7 11z"),code:z("M8.6 16.6L4 12l4.6-4.6L7.2 6 1.2 12l6 6zm6.8 0L20 12l-4.6-4.6L16.8 6l6 6-6 6z"),link:z("M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM7.8 17.7a3 3 0 0 1-4.2-4.2l2.8-2.8 1.4 1.4-2.8 2.8a1 1 0 0 0 1.4 1.4l2.8-2.8 1.4 1.4zm8.5-6.4l-1.4-1.4 2.8-2.8a1 1 0 0 0-1.4-1.4l-2.8 2.8-1.4-1.4 2.8-2.8a3 3 0 0 1 4.2 4.2z"),eye:z("M1.5 12C4.3 7.7 7.8 5.5 12 5.5s7.7 2.2 10.5 6.5c-2.8 4.3-6.3 6.5-10.5 6.5S4.3 16.3 1.5 12zM12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8z","evenodd"),mouth:z("M2 8.5l3.3 3.3L8.7 8.5l3.3 3.3 3.3-3.3 3.4 3.3L22 8.5V12l-3.3 3.5-3.4-3.3-3.3 3.3-3.3-3.3-3.4 3.3L2 12z"),heart:z("M12 21s-7.5-4.6-9.6-9.2C1 8.6 3 5 6.6 5c2.2 0 3.6 1.2 4.4 2.4h2C13.8 6.2 15.2 5 17.4 5 21 5 23 8.6 21.6 11.8 19.5 16.4 12 21 12 21z"),send:z("M3 20.5V14l11-2-11-2V3.5L22 12z")},zt=`
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
`;async function Wt(i){let{state:a,editor:o,animator:c,toast:l,track:b,F:s,A:v,S:$,heads:h,isBusy:d,onFaceShown:g}=i,{W:f,H:u,PALETTE:y}=s,w=new URLSearchParams(location.search),p=(e,n=document)=>n.querySelector(e),M={get(e){try{let n=localStorage.getItem(e);return n?JSON.parse(n):null}catch{return null}},set(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch{}}},P=new Set,S=(e,n)=>{let r=e+(n?JSON.stringify(n):"");P.has(r)||(P.add(r),b("anim",{action:e,...n}))},I=1,j=e=>Math.max(Se,Math.min(Ae,Math.round((+e||gt)/10)*10)),X=(e,n=gt)=>({id:I++,face:e.slice(),ms:j(n)}),t={frames:[X(a.face)],cur:0,mode:"loop",onion:!0,playing:!1},O=null,D=()=>{t.frames[t.cur].face.set(a.face)},J=()=>at(t.frames.length,t.mode),ne=()=>J().reduce((e,n)=>e+t.frames[n].ms,0),_=()=>{o.onion=t.onion&&!t.playing&&t.cur>0?t.frames[t.cur-1].face:null},G=document.createElement("style");G.textContent=zt,document.head.appendChild(G);let k=document.createElement("section");k.className="anim",k.id="anim",k.setAttribute("aria-label","Animation"),k.innerHTML=`
    <div class="anim-top"><h2>Animation</h2><span class="anim-info" id="animInfo"></span></div>
    <div class="anim-gen" role="group" aria-label="Make frames from this face">
      <p class="lead">Make it move, from the face on screen:</p>
      <div class="anim-gen-row">
        <button class="btn" data-gen="blink" title="Eyes that close and open again">${R.eye}Blink</button>
        <button class="btn" data-gen="talk" title="The mouth from closed to open: talks in ping-pong">${R.mouth}Talk</button>
        <button class="btn" data-gen="boop" title="The hearts of the boop, then the face again">${R.heart}Boop</button>
      </div>
    </div>
    <div class="anim-strip" id="animStrip" role="group" aria-label="Frames"></div>
    <div class="anim-bar" role="toolbar" aria-label="Frames">
      <button class="btn pill anim-play" id="animPlay" aria-pressed="false" title="Play the animation (Enter)">${R.play}<span>Play</span></button>
      <button class="btn icon" id="animAdd" aria-label="Add a frame: a copy of this one" title="Add a frame: a copy of this one">${R.add}</button>
      <button class="btn icon" id="animLeft" aria-label="Move this frame left" title="Move this frame left">${R.left}</button>
      <button class="btn icon" id="animRight" aria-label="Move this frame right" title="Move this frame right">${R.right}</button>
      <button class="btn icon" id="animDel" aria-label="Delete this frame" title="Delete this frame">${R.del}</button>
    </div>
    <div class="anim-bar">
      <label class="anim-ms">Frame time <input type="number" id="animMs" min="${Se}" max="${Ae}" step="10" inputmode="numeric" aria-label="Frame time in milliseconds"> ms</label>
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
      <button type="button" class="btn chip anim-send" id="animSend" aria-haspopup="dialog">${R.send}Send to SNOOTRIX</button>
    </div>`,p("#gridHint").after(k);let L=p("#animStrip"),T=document.createElement("button");T.className="btn pill",T.id="btnAnimPlay",T.setAttribute("aria-pressed","false"),T.title="Play the animation (Enter)",T.innerHTML=`${R.play}<span>Play</span>`,p("#btnReset").before(T);let q=document.createElement("div");q.className="anim-exports",q.id="animExports",q.innerHTML=`
    <h2>Animation for your firmware</h2>
    <div class="share-buttons">
      <button class="btn big" id="animGif" data-umami-event="export" data-umami-event-type="gif">${R.down}Animated GIF (128\xD732)</button>
      <button class="btn big" id="animZip" data-umami-event="export" data-umami-event-type="png-zip">${R.down}PNG frames + sheets (ZIP)</button>
      <button class="btn big" id="animC" data-umami-event="export" data-umami-event-type="c-anim">${R.code}C array frames (ESP32)</button>
      <button class="btn big" id="animMax" data-umami-event="export" data-umami-event-type="max7219-anim" disabled>${R.code}MAX7219 frames (Arduino)</button>
    </div>
    <p class="small muted" id="animExpInfo"></p>
    <ul class="small muted anim-notes">
      <li><b>GIF</b>: one pixel per LED, each frame with its time. Plays on ESP32 (AnimatedGIF with the HUB75 DMA library), the Adafruit Matrix Portal and CircuitPython <code>gifio</code>; the ProtoTracer GIF converter takes it too, at one speed for every frame (use "Same for all"; the ZIP's README has a fix for recent Pillow).</li>
      <li><b>ZIP</b>: a PNG per frame, the frames in one tall sprite sheet (PNG, and BMP for CircuitPython <code>TileGrid</code>), the times and a Matrix Portal example.</li>
      <li><b>C array</b>: RGB565 frames with the order and the time of each step, for ESP32 sketches with Adafruit GFX or the HUB75 DMA library.</li>
      <li><b>MAX7219</b>: 8 bytes per module and frame, in the order of the head's chain, for the MAX7219 heads.</li>
    </ul>
    <div class="share-buttons"><button class="btn big" id="animLink" data-umami-event="share" data-umami-event-type="anim-link">${R.link}Copy animation link</button></div>
    <p class="small muted" id="animLinkInfo">The link opens this editor with your animation playing, when it is short enough for a chat (2000 characters); otherwise share the GIF.</p>`,p("#maxNote").after(q);function Q(e,n){e.width!==f*2&&(e.width=f*2,e.height=u*2);let m=e.getContext("2d");m.fillStyle="#07050d",m.fillRect(0,0,e.width,e.height);let x=new Map;for(let F=0;F<f*u;F++){let Z=n[F];Z&&(x.has(Z)||x.set(Z,[]),x.get(Z).push(F))}for(let[F,Z]of x){m.fillStyle=`rgb(${y[F].join(",")})`;for(let te of Z)m.fillRect(te%f*2,Math.floor(te/f)*2,2-.35,2-.35)}}let N=[];function K(){t.cur=Math.max(0,Math.min(t.frames.length-1,t.cur)),L.textContent="",N=t.frames.map((e,n)=>{let r=document.createElement("button");r.type="button",r.className="anim-frame";let m=document.createElement("canvas");Q(m,e.face);let x=document.createElement("span");return r.append(m,x),r.addEventListener("click",()=>pe(n)),L.appendChild(r),{b:r,cv:m,lab:x}}),C(),E(),A()}function E(){t.frames.forEach((n,r)=>{let m=N[r];m&&(m.lab.innerHTML=`<b>${r+1}</b>${n.ms} ms`,m.b.setAttribute("aria-label",`Frame ${r+1} of ${t.frames.length}, ${n.ms} milliseconds`))});let e=t.frames.length;p("#animInfo").textContent=e===1?"1 frame":`${e} frames \xB7 ${(ne()/1e3).toFixed(ne()<1e4?2:1)} s ${t.mode==="pingpong"?"ping-pong":"loop"}`,p("#animExpInfo").textContent=e===1?"Your animation has 1 frame: add frames under the grid, or make them with Blink, Talk or Boop.":`Your animation: ${e} frames, ${J().length} steps per ${t.mode==="pingpong"?"ping-pong":"loop"}, ${(ne()/1e3).toFixed(2)} s.`}function B(e){let n=N[e];if(!n)return;let r=n.b.offsetLeft-L.offsetLeft,m=r+n.b.offsetWidth;r<L.scrollLeft?L.scrollLeft=r-4:m>L.scrollLeft+L.clientWidth&&(L.scrollLeft=m-L.clientWidth+4)}function C(){N.forEach((e,n)=>e.b.setAttribute("aria-pressed",String(n===t.cur&&!t.playing))),B(t.cur)}let H=-1;function V(e){H>=0&&N[H]&&N[H].b.classList.remove("playing"),H=e,e>=0&&N[e]&&(N[e].b.classList.add("playing"),B(e))}function A(){let e=t.frames.length;p("#animDel").disabled=e<2,p("#animLeft").disabled=t.cur===0,p("#animRight").disabled=t.cur>=e-1,p("#animAdd").disabled=e>=ye;let n=p("#animMs");document.activeElement!==n&&(n.value=t.frames[t.cur].ms),p("#animMode").querySelectorAll("button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.v===t.mode))),p("#animOnion").setAttribute("aria-pressed",String(t.onion)),T.hidden=e<2;for(let r of[p("#animPlay"),T])r.setAttribute("aria-pressed",String(t.playing)),r.querySelector("svg").outerHTML=t.playing?R.stop:R.play,r.querySelector("span").textContent=t.playing?"Stop":"Play";p("#animPlay").disabled=e<2;for(let r of["#animGif","#animZip","#animC","#animLink"])p(r).disabled=!1;re()}function re(){let e=h&&h.HEADS[a.head];p("#animMax").disabled=!(e&&e.modules),p("#animMax").title=e&&e.modules?`${e.modules.length} modules \xD7 8 bytes per frame`:"Needs a head with MAX7219 modules (menu over the 3D head)"}let ae=0;function vt(){ae||(ae=setTimeout(()=>{ae=0;let e=N[t.cur];e&&Q(e.cv,t.frames[t.cur].face)},120))}let Le=0;function W(){clearTimeout(Le),Le=setTimeout(async()=>{try{let e=await Ee({frames:t.frames.map(n=>n.face),ms:t.frames.map(n=>n.ms),mode:t.mode},f,u);M.set(xt,{code:e,cur:t.cur,onion:t.onion})}catch(e){console.warn(e)}},400)}function ee(e){t.cur=Math.max(0,Math.min(t.frames.length-1,e)),a.face.set(t.frames[t.cur].face),o.show=null,_(),o.draw(),g()}function pe(e){t.playing&&Y(!1),D(),ee(e),C(),A(),W()}function ve(){return{kind:"anim",frames:t.frames.map(e=>({id:e.id,face:e.face.slice(),ms:e.ms})),cur:t.cur,mode:t.mode}}function oe(){D(),o.undoStack.push(ve()),o.undoStack.length>yt&&o.undoStack.shift(),o.redoStack.length=0}function wt(e){t.frames=e.frames.map(n=>({id:n.id,face:n.face.slice(),ms:n.ms})),t.mode=e.mode,t.cur=e.cur,K(),ee(e.cur),C(),A(),W()}function Pe(){if(t.frames.length>=ye){l(`${ye} frames at most.`);return}t.playing&&Y(!1),oe(),t.frames.splice(t.cur+1,0,X(a.face,t.frames[t.cur].ms)),t.cur+=1,K(),ee(t.cur),C(),A(),W(),t.frames.length===2&&l("New frame: a copy of the first. Draw what changes, then press Play."),S("add")}function Te(){t.frames.length<2||(t.playing&&Y(!1),oe(),t.frames.splice(t.cur,1),t.cur=Math.min(t.cur,t.frames.length-1),K(),ee(t.cur),C(),A(),W(),l("Frame deleted. Undo brings it back."),S("delete"))}function we(e){let n=t.cur,r=n+e;r<0||r>=t.frames.length||(t.playing&&Y(!1),oe(),[t.frames[n],t.frames[r]]=[t.frames[r],t.frames[n]],t.cur=r,K(),_(),o.draw(),W(),S("move"))}function Me(e,n=!1){let r=j(e),m=n?t.frames:[t.frames[t.cur]];if(m.every(x=>x.ms===r)){A();return}oe();for(let x of m)x.ms=r;E(),A(),W(),S(n?"time-all":"time")}function Ce(e){e!=="loop"&&e!=="pingpong"||(t.mode=e,t.playing&&(O.order=J(),O.step=-1),E(),A(),W(),S("mode",{mode:e}))}function Oe(e){t.onion=!!e,_(),o.draw(),A(),W(),S("onion")}let Ie={blink:Qe,talk:et,boop:tt},Mt={blink:"Blink needs eyes: draw them above the dotted line, away from the snoot.",talk:"Talk needs a mouth: draw it below the dotted line."};function Ue(e){if(!Ie[e])return!1;t.playing&&Y(!1),D();let n=Ie[e](t.frames[t.cur].face,v);if(!n)return l(Mt[e]),!1;oe(),t.frames=n.frames.map(m=>X(m.face,m.ms)),t.mode=n.mode,t.cur=0,K(),ee(0),C(),A(),W();let r=e[0].toUpperCase()+e.slice(1);return l(`${r}: ${t.frames.length} frames from your face, ${t.mode==="pingpong"?"ping-pong":"loop"}. Undo brings back your frames.`),S("gen",{gen:e}),se(),!0}function se(e=!0){if(t.frames.length<2){l("Add a frame first: an animation needs two or more.");return}t.playing||(D(),O={order:J(),t0:null,step:-1},t.playing=!0,_(),C(),A(),e&&S("play"))}function Y(e=!0){if(!t.playing)return;let n=O&&O.step>=0?O.order[O.step]:t.cur;t.playing=!1,O=null,V(-1),o.show=null,e&&n!==t.cur?ee(n):(_(),o.draw()),C(),A()}let me=()=>t.playing?Y():se();function $t(e){O.t0===null&&(O.t0=e);let n=O.order.map(x=>t.frames[x].ms),r=n.reduce((x,F)=>x+F,0),m=(e-O.t0)*1e3%r;for(let x=0;x<n.length;x++){if(m<n[x])return x;m-=n[x]}return n.length-1}let Re=c.update.bind(c);c.update=(e,n)=>{if(!t.playing)return Re(e,n);let r=$t(n.now),m=t.frames[O.order[r]].face;return r!==O.step&&(O.step=r,o.show=m,o.draw(),V(O.order[r])),Re(m,{...n,mouth:"off",blink:!1})},p("#gridWrap").addEventListener("pointerdown",()=>{t.playing&&Y()},!0);let Ge=e=>(e.frameId=t.frames[t.cur].id,e);o.snapshot=()=>{o.undoStack.push(Ge(a.face.slice())),o.undoStack.length>yt&&o.undoStack.shift(),o.redoStack.length=0};let De=(e,n)=>{let r=e.pop();if(!r)return;if(t.playing&&Y(!1),r.kind==="anim"){n.push(ve()),wt(r);return}let m=r.frameId===void 0?t.cur:t.frames.findIndex(x=>x.id===r.frameId);m<0||(m!==t.cur&&(D(),ee(m),C(),A()),n.push(Ge(a.face.slice())),a.face.set(r),o._changed())};o.undo=()=>De(o.undoStack,o.redoStack),o.redo=()=>De(o.redoStack,o.undoStack);let Ne=o.onChange;o.onChange=()=>{D(),vt(),W(),Ne&&Ne()},p("#animPlay").addEventListener("click",me),T.addEventListener("click",me),p("#animAdd").addEventListener("click",Pe),p("#animDel").addEventListener("click",Te),p("#animLeft").addEventListener("click",()=>we(-1)),p("#animRight").addEventListener("click",()=>we(1)),p("#animMs").addEventListener("change",e=>Me(e.target.value)),p("#animMs").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),e.target.blur())}),p("#animAll").addEventListener("click",()=>{Me(p("#animMs").value,!0),l(`Every frame: ${t.frames[t.cur].ms} ms`)}),p("#animMode").querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>Ce(e.dataset.v))),p("#animOnion").addEventListener("click",()=>Oe(!t.onion)),k.querySelectorAll("[data-gen]").forEach(e=>e.addEventListener("click",()=>Ue(e.dataset.gen))),p("#animToExports").addEventListener("click",()=>{let e=document.querySelector('[role=tab][data-tab="share"]');e&&e.click(),setTimeout(()=>q.scrollIntoView({behavior:"smooth",block:"start"}),50)});let Be=ht({anim:t,startPlay:se,stopPlay:Y,animator:c,state:a,track:b,waitlist:i.waitlist,F:s});p("#animSend").addEventListener("click",e=>Be.open(e.currentTarget));let Fe=p("#headSel");Fe&&Fe.addEventListener("change",re),window.addEventListener("keydown",e=>{if(d()||e.ctrlKey||e.metaKey||e.altKey)return;let n=document.activeElement;!(!n||n===document.body||L.contains(n))||e.target.closest&&e.target.closest("input, textarea, select")||(e.key==="Enter"&&(!n||n===document.body)?(e.preventDefault(),me()):e.key==="ArrowLeft"&&t.cur>0?(e.preventDefault(),pe(t.cur-1)):e.key==="ArrowRight"&&t.cur<t.frames.length-1&&(e.preventDefault(),pe(t.cur+1)))});let fe=e=>!!(i.inAppStop&&i.inAppStop(e)),ue=(e,n,r,m)=>{let x=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:n});document.body.appendChild(x),x.click(),x.remove(),setTimeout(()=>URL.revokeObjectURL(x.href),4e3),l(r),i.exported&&i.exported(m)},le=()=>{D();let e=J();return{o:e,ms:e.map(n=>t.frames[n].ms),faces:t.frames.map(n=>n.face)}},kt=e=>{let n=new Uint8Array(f*u*3);for(let r=0;r<f*u;r++){let m=y[e[r]];m&&(n[r*3]=m[0],n[r*3+1]=m[1],n[r*3+2]=m[2])}return n};async function ze(e){let n=document.createElement("canvas");n.width=f,n.height=u*e.length;let r=n.getContext("2d"),m=r.createImageData(f,u*e.length);e.forEach((F,Z)=>{for(let te=0;te<f*u;te++){let de=y[F[te]]||[0,0,0],U=(Z*f*u+te)*4;m.data[U]=de[0],m.data[U+1]=de[1],m.data[U+2]=de[2],m.data[U+3]=255}}),r.putImageData(m,0,0);let x=await $.canvasToBlob(n);return new Uint8Array(await x.arrayBuffer())}function je(){let{o:e,ms:n,faces:r}=le();return it(e.map(m=>r[m]),n.map(m=>m/10),f,u,y)}function _t(){if(fe("gif"))return;let{o:e}=le();ue(new Blob([je()],{type:"image/gif"}),"snootrix-anim-128x32.gif",`GIF saved: ${e.length} frames, 128\xD732, one pixel per LED`,p("#animGif"))}async function He(){let{o:e,ms:n,faces:r}=le(),m=r.length,x=[],F=U=>String(U+1).padStart(2,"0");for(let U=0;U<m;U++)x.push({name:`snootrix-anim/frames/frame-${F(U)}.png`,data:await ze([r[U]])});x.push({name:"snootrix-anim/snootrix_anim_sheet.png",data:await ze(r)});let Z=new Uint8Array(f*u*m*3);r.forEach((U,ke)=>Z.set(kt(U),ke*f*u*3)),x.push({name:"snootrix-anim/snootrix_anim_sheet.bmp",data:new Uint8Array(await $.encodeBMP24(Z,f,u*m).arrayBuffer())});let te={editor:"https://zarmat99.github.io/snootrix/",width:f,height:u,frames:t.frames.map((U,ke)=>({file:`frames/frame-${F(ke)}.png`,ms:U.ms})),mode:t.mode,loop:{order:e,ms:n},sheet:{png:"snootrix_anim_sheet.png",bmp:"snootrix_anim_sheet.bmp",tile_width:f,tile_height:u,frames:m}},de=U=>new TextEncoder().encode(U.replace(/\n/g,`\r
`));return x.push({name:"snootrix-anim/animation.json",data:new TextEncoder().encode(JSON.stringify(te,null,2)+`
`)}),x.push({name:"snootrix-anim/matrixportal_code.py",data:new TextEncoder().encode(Lt(e,n))}),x.push({name:"snootrix-anim/README.txt",data:de(Pt(m,e,n))}),rt(x)}async function Et(){if(fe("png-zip"))return;let e=p("#animZip");e.disabled=!0;try{let n=t.frames.length;ue(new Blob([await He()],{type:"application/zip"}),"snootrix-anim-frames.zip",`ZIP saved: ${n} PNG frames, sprite sheets and times`,e)}catch(n){console.error(n),l("Could not make the ZIP. Try again.")}finally{e.disabled=!1}}function Xe(){let{o:e,ms:n,faces:r}=le();return lt(r,e,n,f,u,y,{mode:t.mode})}function St(){fe("c-anim")||ue(new Blob([Xe()],{type:"text/x-c"}),"snootrix_anim.h",`C header saved: ${t.frames.length} RGB565 frames, 128\xD732`,p("#animC"))}function qe(){let e=h&&h.HEADS[a.head];if(!e||!e.modules)return null;let{o:n,ms:r,faces:m}=le();return ct(m.map(x=>h.moduleLeds(e,x)),n,r,e.label,{chain:e.chainNote||"",mode:t.mode})}function At(){let e=h&&h.HEADS[a.head];if(!e||!e.modules||fe("max7219-anim"))return;let n=qe();n&&ue(new Blob([n],{type:"text/x-c"}),"snootrix_max7219_anim.h",`MAX7219 header saved: ${t.frames.length} frames \xD7 ${e.modules.length} modules`,p("#animMax"))}async function Ke(){D();let e=await Ee({frames:t.frames.map(r=>r.face),ms:t.frames.map(r=>r.ms),mode:t.mode,colorMode:a.colorMode},f,u),n=a.head&&a.head!=="snootrix"?`head=${encodeURIComponent(a.head)}`:"";return`${location.origin}${location.pathname}${n?`?${n}`:""}#a=${e}`}async function Ve(){let e=await Ke();if(e.length>bt)return l(`Too long for a link (${e.length.toLocaleString("en")} characters): share the GIF instead.`),e;try{await navigator.clipboard.writeText(e),l("Link copied: it opens the editor with your animation playing")}catch{prompt("Copy this link:",e)}return e}p("#animGif").addEventListener("click",_t),p("#animZip").addEventListener("click",Et),p("#animC").addEventListener("click",St),p("#animMax").addEventListener("click",At),p("#animLink").addEventListener("click",Ve);function Lt(e,n){return`# Adafruit Matrix Portal (M4 or S3) with CircuitPython 9 or newer: plays snootrix_anim_sheet.bmp on two 64x32
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
One ${t.mode==="pingpong"?"ping-pong":"loop"}: ${n.length} steps, ${r.reduce((m,x)=>m+x,0)} ms. Frame shown at each step: ${n.map(m=>m+1).join(", ")}.
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
`}async function We(e){let n=await ft(e,f,u);return{frames:n.frames.map((r,m)=>X(r,n.ms[m])),mode:n.mode,colorMode:n.colorMode}}let $e=new URLSearchParams(location.hash.slice(1)),ce=M.get(xt);if(ce&&ce.code)try{let e=await We(ce.code);t.frames=e.frames,t.mode=e.mode,t.cur=Math.max(0,Math.min(e.frames.length-1,ce.cur|0)),t.onion=ce.onion!==!1,$e.get("f")&&t.frames.length>1?(o.undoStack.push(ve()),t.frames=[X(a.face,t.frames[t.cur].ms)],t.cur=0):D()}catch(e){console.warn("saved animation not readable",e)}if(K(),ee(t.cur),C(),A(),$e.get("a"))try{let e=await We($e.get("a"));oe(),t.frames=e.frames,t.mode=e.mode,t.cur=0,a.colorMode=e.colorMode,K(),ee(0),C(),A(),W(),history.replaceState(null,"",location.pathname+location.search),setTimeout(()=>l("Loaded a shared animation. Make it yours! Undo brings back your own."),600),t.frames.length>1&&se(),S("open-link")}catch(e){console.warn(e),l("This animation link is damaged: showing your own animation.")}let Ze={anim:t,get play(){return O},select:pe,addFrame:Pe,deleteFrame:Te,move:we,setMs:Me,setMode:Ce,setOnion:Oe,generate:Ue,startPlay:se,stopPlay:Y,toggle:me,order:J,loopMs:ne,linkUrl:Ke,copyLink:Ve,gifBytes:je,zipFiles:He,cText:Xe,maxText:qe,send:Be,MAX_FRAMES:ye,MS_MIN:Se,MS_MAX:Ae,LINK_MAX:bt};return w.has("debug")&&(window.__snootrixAnim=Ze),Ze}export{bt as LINK_MAX,ye as MAX_FRAMES,Ae as MS_MAX,Se as MS_MIN,gt as MS_NEW,Wt as setupAnim};
