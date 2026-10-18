var be=(r,a)=>{for(let o=0;o<r.length;o++)if(r[o]!==a[o])return!1;return!0};function se(r){let a=[];for(let o of r){let m=a[a.length-1];m&&be(m.face,o.face)?m.ms+=o.ms:a.push({face:o.face,ms:o.ms})}return a}var Ve={hold:2e3,steps:[[.4,40],[.75,40],[1,60],[.75,40],[.4,40]]};function qe(r,a){if(be(a.blinkFace(r,1),r))return null;let o=[{face:r.slice(),ms:Ve.hold}];for(let[m,s]of Ve.steps)o.push({face:a.blinkFace(r,m),ms:s});return{frames:se(o),mode:"loop"}}var Ze={levels:[0,.3,.6,1],ms:70};function We(r,a){if(be(a.mouthFace(r,1),r))return null;let o=Ze.levels.map(m=>({face:m?a.mouthFace(r,m):r.slice(),ms:Ze.ms}));return{frames:se(o),mode:"pingpong"}}var q={hold:1500,step:50,moving:.55};function Ye(r,a){let o=[{face:r.slice(),ms:q.hold}],m=a.boopKeys&&a.boopKeys();if(m)return{frames:se([...o,...m.map(h=>({face:h.face.slice(),ms:h.ms}))]),mode:"loop"};let s=Math.round(q.moving*1e3/q.step);for(let h=0;h<=s;h++)o.push({face:a.boopFace(h*q.step/1e3),ms:q.step});return o[o.length-1].ms=Math.round(a.BOOP_TIME*1e3)-s*q.step,{frames:se(o),mode:"loop"}}var Je="https://zarmat99.github.io/snootrix/",kt=(()=>{let r=new Uint32Array(256);for(let a=0;a<256;a++){let o=a;for(let m=0;m<8;m++)o=o&1?3988292384^o>>>1:o>>>1;r[a]=o>>>0}return r})();function Et(r){let a=4294967295;for(let o=0;o<r.length;o++)a=kt[(a^r[o])&255]^a>>>8;return(a^4294967295)>>>0}function Qe(r,a){let o=[];for(let m=0;m<r;m++)o.push(m);if(a==="pingpong")for(let m=r-2;m>=1;m--)o.push(m);return o}var et=r=>{let a=new Uint8Array(r.reduce((m,s)=>m+s.length,0)),o=0;for(let m of r)a.set(m,o),o+=m.length;return a};function At(r,a){let o=1<<a,m=o+1,s=a+1,h=m+1,l=new Map,x=[],$=0,u=0,g=f=>{for($|=f<<u,u+=s;u>=8;)x.push($&255),$>>>=8,u-=8};g(o);let w=r[0];for(let f=1;f<r.length;f++){let p=r[f],y=w*256+p,v=l.get(y);if(v!==void 0){w=v;continue}g(w),h===4096?(g(o),l=new Map,h=m+1,s=a+1):(h>=1<<s&&s++,l.set(y,h++)),w=p}return g(w),g(m),u>0&&x.push($&255),x}function tt(r,a,o,m,s){let h=[],l=u=>h.push(u&255),x=u=>{h.push(u&255,u>>8&255)},$=u=>{for(let g=0;g<u.length;g++)h.push(u.charCodeAt(g))};$("GIF89a"),x(o),x(m),l(243),l(0),l(0);for(let u=0;u<16;u++){let g=s[u]||[0,0,0];l(g[0]),l(g[1]),l(g[2])}return l(33),l(255),l(11),$("NETSCAPE2.0"),l(3),l(1),x(0),l(0),r.forEach((u,g)=>{l(33),l(249),l(4),l(4),x(Math.max(2,Math.min(65535,Math.round(a[g])))),l(0),l(0),l(44),x(0),x(0),x(o),x(m),l(0),l(4);let w=At(u,4);for(let f=0;f<w.length;f+=255){let p=Math.min(255,w.length-f);l(p);for(let y=0;y<p;y++)h.push(w[f+y])}l(0)}),l(59),Uint8Array.from(h)}function nt(r,a=new Date){let o=(a.getHours()<<11|a.getMinutes()<<5|a.getSeconds()>>1)&65535,m=(Math.max(1980,a.getFullYear())-1980<<9|a.getMonth()+1<<5|a.getDate())&65535,s=[],h=[],l=0;for(let g of r){let w=Uint8Array.from(g.name,A=>A.charCodeAt(0)&127),f=g.data,p=Et(f),y=new Uint8Array(30+w.length),v=new DataView(y.buffer);v.setUint32(0,67324752,!0),v.setUint16(4,20,!0),v.setUint16(6,0,!0),v.setUint16(8,0,!0),v.setUint16(10,o,!0),v.setUint16(12,m,!0),v.setUint32(14,p,!0),v.setUint32(18,f.length,!0),v.setUint32(22,f.length,!0),v.setUint16(26,w.length,!0),v.setUint16(28,0,!0),y.set(w,30),s.push(y,f);let d=new Uint8Array(46+w.length),M=new DataView(d.buffer);M.setUint32(0,33639248,!0),M.setUint16(4,20,!0),M.setUint16(6,20,!0),M.setUint16(8,0,!0),M.setUint16(10,0,!0),M.setUint16(12,o,!0),M.setUint16(14,m,!0),M.setUint32(16,p,!0),M.setUint32(20,f.length,!0),M.setUint32(24,f.length,!0),M.setUint16(28,w.length,!0),M.setUint32(42,l,!0),d.set(w,46),h.push(d),l+=y.length+f.length}let x=h.reduce((g,w)=>g+w.length,0),$=new Uint8Array(22),u=new DataView($.buffer);return u.setUint32(0,101010256,!0),u.setUint16(8,r.length,!0),u.setUint16(10,r.length,!0),u.setUint32(12,x,!0),u.setUint32(16,l,!0),et([...s,...h,$])}var at=(r,a)=>"0x"+r.toString(16).padStart(a,"0").toUpperCase(),St=r=>r?(r[0]&248)<<8|(r[1]&252)<<3|r[2]>>3:0,Lt=(r,a=16,o="  ")=>{let m=[];for(let s=0;s<r.length;s+=a)m.push(o+r.slice(s,s+a).join(", ")+",");return m.join(`
`)};function ot(r,a,o,m,s,h,{name:l="snootrix_anim",mode:x="loop"}={}){let $=o.reduce((g,w)=>g+w,0),u=r.map((g,w)=>{let f=[];for(let p=0;p<m*s;p++)f.push(at(St(h[g[p]]),4));return`  { // frame ${w+1}
${Lt(f,16,"    ")}
  },`}).join(`
`);return`// Visor animation exported from the free SNOOTRIX face editor: ${Je}
// ${r.length} frames of ${m}x${s} pixels, one value per LED, RGB565, rows from the top, left panel first.
// Black (0x0000) = off. One loop = ${a.length} steps (${x==="pingpong"?"ping-pong":"loop"}), ${$} ms: step s shows frame
// ${l}_order[s] for ${l}_ms[s] milliseconds. Tables in flash: read them with pgm_read_byte / pgm_read_word.
//
// ESP32 + ESP32-HUB75-MatrixPanel-DMA (two 64x32 panels chained: 128x32) or any Adafruit GFX display:
//   #include "${l}.h"
//   uint16_t step = 0;
//   uint32_t due = 0;
//   void loop() {
//     if ((int32_t)(millis() - due) >= 0) {
//       uint8_t f = pgm_read_byte(&${l}_order[step]);
//       display->drawRGBBitmap(0, 0, ${l}[f], ${l}_w, ${l}_h);   // Adafruit GFX
//       due = millis() + pgm_read_word(&${l}_ms[step]);
//       step = (step + 1) % ${l}_steps;
//     }
//   }
// Library built with NO_GFX: draw the frame pixel by pixel instead of drawRGBBitmap:
//   for (uint16_t i = 0; i < ${l}_w * ${l}_h; i++)
//     display->drawPixel(i % ${l}_w, i / ${l}_w, pgm_read_word(&${l}[f][i]));
// Each frame takes ${m*s*2} bytes of flash.
#pragma once
#include <stdint.h>
#ifndef PROGMEM
#define PROGMEM
#endif
const uint16_t ${l}_w = ${m};
const uint16_t ${l}_h = ${s};
const uint16_t ${l}_frames = ${r.length};
const uint16_t ${l}_steps = ${a.length};
const uint8_t ${l}_order[${a.length}] PROGMEM = { ${a.join(", ")} };
const uint16_t ${l}_ms[${a.length}] PROGMEM = { ${o.join(", ")} };
const uint16_t ${l}[${r.length}][${m*s}] PROGMEM = {
${u}
};
`}function it(r,a,o,m,{name:s="snootrix_max7219_anim",chain:h="",mode:l="loop"}={}){let x=r[0]?r[0].length:0,$=p=>p===0?"right":"left",u=(p,y)=>p.panel<0?`${y+1}: ${p.name}`:`${$(p.panel)} ${p.name}`,g=o.reduce((p,y)=>p+y,0),w=r.map((p,y)=>{let v=p.map((d,M)=>`    { ${d.rows.map(_=>_.reduce((j,R,C)=>j|(R?128>>C:0),0)).map(_=>at(_,2)).join(", ")} },  // ${u(d,M)}`);return`  { // frame ${y+1}
${v.join(`
`)}
  },`}).join(`
`),f=h?`
// ${h.replace(/\n/g,`
// `)}`:`
// Modules in the order listed in frame 1 (sides as seen from the front; mouth modules from the snout outwards).`;return`// Visor animation for MAX7219 8x8 modules, exported from the free SNOOTRIX face editor: ${Je}
// Head: ${m}. ${r.length} frames x ${x} modules x 8 bytes: rows from the top, bit 7 = the leftmost LED
// as seen from the front of the head (for a module on a cheek: as seen from outside, looking at it).${f}
// One loop = ${a.length} steps (${l==="pingpong"?"ping-pong":"loop"}), ${g} ms: step s shows frame ${s}_order[s] for ${s}_ms[s] ms.
// The tables are in flash (PROGMEM): on AVR boards such as the Arduino Nano read them with pgm_read_byte / pgm_read_word.
//
//   #include "${s}.h"
//   uint16_t step = 0;
//   uint32_t due = 0;
//   void loop() {
//     if ((int32_t)(millis() - due) >= 0) {
//       uint8_t f = pgm_read_byte(&${s}_order[step]);
//       for (uint8_t m = 0; m < ${s}_modules; m++)
//         for (uint8_t r = 0; r < 8; r++)
//           mx.setRow(m, r, pgm_read_byte(&${s}[f][m][r]));   // MD_MAX72xx (LedControl: lc.setRow, up to 8 per chain)
//       due = millis() + pgm_read_word(&${s}_ms[step]);
//       step = (step + 1) % ${s}_steps;
//     }
//   }
// Depending on how your modules are mounted and on the library's module type you may need to flip or rotate the bytes.
#pragma once
#include <stdint.h>
#ifndef PROGMEM
#define PROGMEM
#endif
const uint8_t ${s}_modules = ${x};
const uint16_t ${s}_frames = ${r.length};
const uint16_t ${s}_steps = ${a.length};
const uint8_t ${s}_order[${a.length}] PROGMEM = { ${a.join(", ")} };
const uint16_t ${s}_ms[${a.length}] PROGMEM = { ${o.join(", ")} };
const uint8_t ${s}[${r.length}][${x}][8] PROGMEM = {
${w}
};
`}var rt=1,le=64,st=["drawn","rainbow","pulse"];function Pt(r){let a="";for(let o=0;o<r.length;o++)a+=String.fromCharCode(r[o]);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Tt(r){let a=atob(r.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(a,o=>o.charCodeAt(0))}async function lt(r,a){let o=new Response(new Blob([r]).stream().pipeThrough(new a("deflate-raw")));return new Uint8Array(await o.arrayBuffer())}var Ut=(r,a,o)=>{let m=a/2;for(let s=0;s<o;s++)for(let h=0;h<m;h++)if(r[s*a+m+h]!==r[s*a+m-1-h])return!1;return!0};async function xe({frames:r,ms:a,mode:o,colorMode:m="drawn"},s,h){if(!r.length||r.length>le)throw new Error("frame count");let l=r.every(v=>Ut(v,s,h)),x=l?s/2:s,$=l?s/2:0,u=x*h,g=new Uint8Array(1+2*r.length+r.length*Math.ceil(u/2));g[0]=r.length,a.forEach((v,d)=>{g[1+2*d]=v&255,g[2+2*d]=v>>8&255});let w=1+2*r.length;r.forEach((v,d)=>{let M=r[d-1];for(let A=0;A<u;A++){let _=Math.floor(A/x)*s+$+A%x,j=(v[_]^(M?M[_]:0))&15;g[w+(A>>1)]|=j<<(A&1)*4}w+=Math.ceil(u/2)});let f=g,p=!1;if(typeof CompressionStream<"u")try{f=await lt(g,CompressionStream),p=!0}catch{f=g}let y=(l?1:0)|(p?2:0)|Math.max(0,st.indexOf(m))<<2|(o==="pingpong"?16:0);return Pt(et([Uint8Array.of(rt,y),f]))}async function ct(r,a,o){let m=Tt(r);if(m[0]!==rt)throw new Error("unknown animation format");let s=m[1],h=!!(s&1),l=m.subarray(2);s&2&&(l=await lt(l,DecompressionStream));let x=l[0];if(!x||x>le)throw new Error("bad frame count");let $=h?a/2:a,u=$*o,g=Math.ceil(u/2);if(l.length<1+2*x+x*g)throw new Error("animation link too short");let w=[];for(let y=0;y<x;y++)w.push(l[1+2*y]|l[2+2*y]<<8);let f=[],p=1+2*x;for(let y=0;y<x;y++){let v=new Uint8Array(a*o),d=f[y-1];for(let M=0;M<u;M++){let A=Math.floor(M/$),_=M%$,j=l[p+(M>>1)]>>(M&1)*4&15;if(h){let R=A*a+a/2+_,C=A*a+a/2-1-_;v[R]=v[C]=j^(d?d[R]:0)}else{let R=A*a+_;v[R]=j^(d?d[R]:0)}}f.push(v),p+=g}return{frames:f,ms:w,mode:s&16?"pingpong":"loop",colorMode:st[s>>2&3]||"drawn"}}var ce=le,ye=20,we=1e4,mt=100,dt=2e3,ft="snootrix.anim.v1",pt=80,T=(r,a="")=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path${a?` fill-rule="${a}"`:""} d="${r}"/></svg>`,S={play:T("M8 5v14l11-7z"),stop:T("M7 7h10v10H7z"),add:T("M3 3h12v2H5v10H3zM7 7h14v14H7zM9 9v10h10V9zM13 11h2v2h2v2h-2v2h-2v-2h-2v-2h2z","evenodd"),left:T("M15.5 5.5 9 12l6.5 6.5-1.5 1.5-8-8 8-8z"),right:T("M8.5 18.5 15 12 8.5 5.5 10 4l8 8-8 8z"),del:T("M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"),down:T("M5 20h14v-2H5zM12 16l5-5-1.4-1.4L13 12.2V4h-2v8.2L8.4 9.6 7 11z"),code:T("M8.6 16.6L4 12l4.6-4.6L7.2 6 1.2 12l6 6zm6.8 0L20 12l-4.6-4.6L16.8 6l6 6-6 6z"),link:T("M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM7.8 17.7a3 3 0 0 1-4.2-4.2l2.8-2.8 1.4 1.4-2.8 2.8a1 1 0 0 0 1.4 1.4l2.8-2.8 1.4 1.4zm8.5-6.4l-1.4-1.4 2.8-2.8a1 1 0 0 0-1.4-1.4l-2.8 2.8-1.4-1.4 2.8-2.8a3 3 0 0 1 4.2 4.2z"),eye:T("M1.5 12C4.3 7.7 7.8 5.5 12 5.5s7.7 2.2 10.5 6.5c-2.8 4.3-6.3 6.5-10.5 6.5S4.3 16.3 1.5 12zM12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8z","evenodd"),mouth:T("M2 8.5l3.3 3.3L8.7 8.5l3.3 3.3 3.3-3.3 3.4 3.3L22 8.5V12l-3.3 3.5-3.4-3.3-3.3 3.3-3.3-3.3-3.4 3.3L2 12z"),heart:T("M12 21s-7.5-4.6-9.6-9.2C1 8.6 3 5 6.6 5c2.2 0 3.6 1.2 4.4 2.4h2C13.8 6.2 15.2 5 17.4 5 21 5 23 8.6 21.6 11.8 19.5 16.4 12 21 12 21z")},It=`
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
`;async function Ft(r){let{state:a,editor:o,animator:m,toast:s,track:h,F:l,A:x,S:$,heads:u,isBusy:g,onFaceShown:w}=r,{W:f,H:p,PALETTE:y}=l,v=new URLSearchParams(location.search),d=(e,n=document)=>n.querySelector(e),M={get(e){try{let n=localStorage.getItem(e);return n?JSON.parse(n):null}catch{return null}},set(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch{}}},A=new Set,_=(e,n)=>{let i=e+(n?JSON.stringify(n):"");A.has(i)||(A.add(i),h("anim",{action:e,...n}))},j=1,R=e=>Math.max(ye,Math.min(we,Math.round((+e||mt)/10)*10)),C=(e,n=mt)=>({id:j++,face:e.slice(),ms:R(n)}),t={frames:[C(a.face)],cur:0,mode:"loop",onion:!0,playing:!1},k=null,F=()=>{t.frames[t.cur].face.set(a.face)},K=()=>Qe(t.frames.length,t.mode),te=()=>K().reduce((e,n)=>e+t.frames[n].ms,0),W=()=>{o.onion=t.onion&&!t.playing&&t.cur>0?t.frames[t.cur-1].face:null},ve=document.createElement("style");ve.textContent=It,document.head.appendChild(ve);let V=document.createElement("section");V.className="anim",V.id="anim",V.setAttribute("aria-label","Animation"),V.innerHTML=`
    <div class="anim-top"><h2>Animation</h2><span class="anim-info" id="animInfo"></span></div>
    <div class="anim-gen" role="group" aria-label="Make frames from this face">
      <p class="lead">Make it move, from the face on screen:</p>
      <div class="anim-gen-row">
        <button class="btn" data-gen="blink" title="Eyes that close and open again">${S.eye}Blink</button>
        <button class="btn" data-gen="talk" title="The mouth from closed to open: talks in ping-pong">${S.mouth}Talk</button>
        <button class="btn" data-gen="boop" title="The hearts of the boop, then the face again">${S.heart}Boop</button>
      </div>
    </div>
    <div class="anim-strip" id="animStrip" role="group" aria-label="Frames"></div>
    <div class="anim-bar" role="toolbar" aria-label="Frames">
      <button class="btn pill anim-play" id="animPlay" aria-pressed="false" title="Play the animation (Enter)">${S.play}<span>Play</span></button>
      <button class="btn icon" id="animAdd" aria-label="Add a frame: a copy of this one" title="Add a frame: a copy of this one">${S.add}</button>
      <button class="btn icon" id="animLeft" aria-label="Move this frame left" title="Move this frame left">${S.left}</button>
      <button class="btn icon" id="animRight" aria-label="Move this frame right" title="Move this frame right">${S.right}</button>
      <button class="btn icon" id="animDel" aria-label="Delete this frame" title="Delete this frame">${S.del}</button>
    </div>
    <div class="anim-bar">
      <label class="anim-ms">Frame time <input type="number" id="animMs" min="${ye}" max="${we}" step="10" inputmode="numeric" aria-label="Frame time in milliseconds"> ms</label>
      <button class="btn chip" id="animAll" title="Give every frame this time">Same for all</button>
      <div class="seg" id="animMode" role="group" aria-label="Playback">
        <button data-v="loop" title="1, 2, 3, 1, 2, 3...">Loop</button>
        <button data-v="pingpong" title="1, 2, 3, 2, 1, 2...">Ping-pong</button>
      </div>
      <button class="btn chip" id="animOnion" aria-pressed="true" title="Show the previous frame faintly while you draw">Onion skin</button>
    </div>
    <p class="small muted" id="animHint">Tap a frame to draw on it; the copy button adds the next one. Undo works on frames too. <button type="button" class="linkbtn" id="animToExports">Export for your firmware</button></p>`,d("#gridHint").after(V);let O=d("#animStrip"),B=document.createElement("button");B.className="btn pill",B.id="btnAnimPlay",B.setAttribute("aria-pressed","false"),B.title="Play the animation (Enter)",B.innerHTML=`${S.play}<span>Play</span>`,d("#btnReset").before(B);let Y=document.createElement("div");Y.className="anim-exports",Y.id="animExports",Y.innerHTML=`
    <h2>Animation for your firmware</h2>
    <div class="share-buttons">
      <button class="btn big" id="animGif" data-umami-event="export" data-umami-event-type="gif">${S.down}Animated GIF (128\xD732)</button>
      <button class="btn big" id="animZip" data-umami-event="export" data-umami-event-type="png-zip">${S.down}PNG frames + sheets (ZIP)</button>
      <button class="btn big" id="animC" data-umami-event="export" data-umami-event-type="c-anim">${S.code}C array frames (ESP32)</button>
      <button class="btn big" id="animMax" data-umami-event="export" data-umami-event-type="max7219-anim" disabled>${S.code}MAX7219 frames (Arduino)</button>
    </div>
    <p class="small muted" id="animExpInfo"></p>
    <ul class="small muted anim-notes">
      <li><b>GIF</b>: one pixel per LED, each frame with its time. Plays on ESP32 (AnimatedGIF with the HUB75 DMA library), the Adafruit Matrix Portal and CircuitPython <code>gifio</code>; the ProtoTracer GIF converter takes it too, at one speed for every frame (use "Same for all"; the ZIP's README has a fix for recent Pillow).</li>
      <li><b>ZIP</b>: a PNG per frame, the frames in one tall sprite sheet (PNG, and BMP for CircuitPython <code>TileGrid</code>), the times and a Matrix Portal example.</li>
      <li><b>C array</b>: RGB565 frames with the order and the time of each step, for ESP32 sketches with Adafruit GFX or the HUB75 DMA library.</li>
      <li><b>MAX7219</b>: 8 bytes per module and frame, in the order of the head's chain, for the MAX7219 heads.</li>
    </ul>
    <div class="share-buttons"><button class="btn big" id="animLink" data-umami-event="share" data-umami-event-type="anim-link">${S.link}Copy animation link</button></div>
    <p class="small muted" id="animLinkInfo">The link opens this editor with your animation playing, when it is short enough for a chat (2000 characters); otherwise share the GIF.</p>`,d("#maxNote").after(Y);function Me(e,n){e.width!==f*2&&(e.width=f*2,e.height=p*2);let c=e.getContext("2d");c.fillStyle="#07050d",c.fillRect(0,0,e.width,e.height);let b=new Map;for(let P=0;P<f*p;P++){let G=n[P];G&&(b.has(G)||b.set(G,[]),b.get(G).push(P))}for(let[P,G]of b){c.fillStyle=`rgb(${y[P].join(",")})`;for(let H of G)c.fillRect(H%f*2,Math.floor(H/f)*2,2-.35,2-.35)}}let D=[];function X(){t.cur=Math.max(0,Math.min(t.frames.length-1,t.cur)),O.textContent="",D=t.frames.map((e,n)=>{let i=document.createElement("button");i.type="button",i.className="anim-frame";let c=document.createElement("canvas");Me(c,e.face);let b=document.createElement("span");return i.append(c,b),i.addEventListener("click",()=>ae(n)),O.appendChild(i),{b:i,cv:c,lab:b}}),U(),me(),L()}function me(){t.frames.forEach((n,i)=>{let c=D[i];c&&(c.lab.innerHTML=`<b>${i+1}</b>${n.ms} ms`,c.b.setAttribute("aria-label",`Frame ${i+1} of ${t.frames.length}, ${n.ms} milliseconds`))});let e=t.frames.length;d("#animInfo").textContent=e===1?"1 frame":`${e} frames \xB7 ${(te()/1e3).toFixed(te()<1e4?2:1)} s ${t.mode==="pingpong"?"ping-pong":"loop"}`,d("#animExpInfo").textContent=e===1?"Your animation has 1 frame: add frames under the grid, or make them with Blink, Talk or Boop.":`Your animation: ${e} frames, ${K().length} steps per ${t.mode==="pingpong"?"ping-pong":"loop"}, ${(te()/1e3).toFixed(2)} s.`}function $e(e){let n=D[e];if(!n)return;let i=n.b.offsetLeft-O.offsetLeft,c=i+n.b.offsetWidth;i<O.scrollLeft?O.scrollLeft=i-4:c>O.scrollLeft+O.clientWidth&&(O.scrollLeft=c-O.clientWidth+4)}function U(){D.forEach((e,n)=>e.b.setAttribute("aria-pressed",String(n===t.cur&&!t.playing))),$e(t.cur)}let ne=-1;function _e(e){ne>=0&&D[ne]&&D[ne].b.classList.remove("playing"),ne=e,e>=0&&D[e]&&(D[e].b.classList.add("playing"),$e(e))}function L(){let e=t.frames.length;d("#animDel").disabled=e<2,d("#animLeft").disabled=t.cur===0,d("#animRight").disabled=t.cur>=e-1,d("#animAdd").disabled=e>=ce;let n=d("#animMs");document.activeElement!==n&&(n.value=t.frames[t.cur].ms),d("#animMode").querySelectorAll("button").forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.v===t.mode))),d("#animOnion").setAttribute("aria-pressed",String(t.onion)),B.hidden=e<2;for(let i of[d("#animPlay"),B])i.setAttribute("aria-pressed",String(t.playing)),i.querySelector("svg").outerHTML=t.playing?S.stop:S.play,i.querySelector("span").textContent=t.playing?"Stop":"Play";d("#animPlay").disabled=e<2;for(let i of["#animGif","#animZip","#animC","#animLink"])d(i).disabled=!1;ke()}function ke(){let e=u&&u.HEADS[a.head];d("#animMax").disabled=!(e&&e.modules),d("#animMax").title=e&&e.modules?`${e.modules.length} modules \xD7 8 bytes per frame`:"Needs a head with MAX7219 modules (menu over the 3D head)"}let de=0;function ut(){de||(de=setTimeout(()=>{de=0;let e=D[t.cur];e&&Me(e.cv,t.frames[t.cur].face)},120))}let Ee=0;function I(){clearTimeout(Ee),Ee=setTimeout(async()=>{try{let e=await xe({frames:t.frames.map(n=>n.face),ms:t.frames.map(n=>n.ms),mode:t.mode},f,p);M.set(ft,{code:e,cur:t.cur,onion:t.onion})}catch(e){console.warn(e)}},400)}function N(e){t.cur=Math.max(0,Math.min(t.frames.length-1,e)),a.face.set(t.frames[t.cur].face),o.show=null,W(),o.draw(),w()}function ae(e){t.playing&&z(!1),F(),N(e),U(),L(),I()}function fe(){return{kind:"anim",frames:t.frames.map(e=>({id:e.id,face:e.face.slice(),ms:e.ms})),cur:t.cur,mode:t.mode}}function Z(){F(),o.undoStack.push(fe()),o.undoStack.length>pt&&o.undoStack.shift(),o.redoStack.length=0}function ht(e){t.frames=e.frames.map(n=>({id:n.id,face:n.face.slice(),ms:n.ms})),t.mode=e.mode,t.cur=e.cur,X(),N(e.cur),U(),L(),I()}function Ae(){if(t.frames.length>=ce){s(`${ce} frames at most.`);return}t.playing&&z(!1),Z(),t.frames.splice(t.cur+1,0,C(a.face,t.frames[t.cur].ms)),t.cur+=1,X(),N(t.cur),U(),L(),I(),t.frames.length===2&&s("New frame: a copy of the first. Draw what changes, then press Play."),_("add")}function Se(){t.frames.length<2||(t.playing&&z(!1),Z(),t.frames.splice(t.cur,1),t.cur=Math.min(t.cur,t.frames.length-1),X(),N(t.cur),U(),L(),I(),s("Frame deleted. Undo brings it back."),_("delete"))}function pe(e){let n=t.cur,i=n+e;i<0||i>=t.frames.length||(t.playing&&z(!1),Z(),[t.frames[n],t.frames[i]]=[t.frames[i],t.frames[n]],t.cur=i,X(),W(),o.draw(),I(),_("move"))}function ue(e,n=!1){let i=R(e),c=n?t.frames:[t.frames[t.cur]];if(c.every(b=>b.ms===i)){L();return}Z();for(let b of c)b.ms=i;me(),L(),I(),_(n?"time-all":"time")}function Le(e){e!=="loop"&&e!=="pingpong"||(t.mode=e,t.playing&&(k.order=K(),k.step=-1),me(),L(),I(),_("mode",{mode:e}))}function Pe(e){t.onion=!!e,W(),o.draw(),L(),I(),_("onion")}let Te={blink:qe,talk:We,boop:Ye},gt={blink:"Blink needs eyes: draw them above the dotted line, away from the snoot.",talk:"Talk needs a mouth: draw it below the dotted line."};function Ue(e){if(!Te[e])return!1;t.playing&&z(!1),F();let n=Te[e](t.frames[t.cur].face,x);if(!n)return s(gt[e]),!1;Z(),t.frames=n.frames.map(c=>C(c.face,c.ms)),t.mode=n.mode,t.cur=0,X(),N(0),U(),L(),I();let i=e[0].toUpperCase()+e.slice(1);return s(`${i}: ${t.frames.length} frames from your face, ${t.mode==="pingpong"?"ping-pong":"loop"}. Undo brings back your frames.`),_("gen",{gen:e}),oe(),!0}function oe(){if(t.frames.length<2){s("Add a frame first: an animation needs two or more.");return}t.playing||(F(),k={order:K(),t0:null,step:-1},t.playing=!0,W(),U(),L(),_("play"))}function z(e=!0){if(!t.playing)return;let n=k&&k.step>=0?k.order[k.step]:t.cur;t.playing=!1,k=null,_e(-1),o.show=null,e&&n!==t.cur?N(n):(W(),o.draw()),U(),L()}let ie=()=>t.playing?z():oe();function bt(e){k.t0===null&&(k.t0=e);let n=k.order.map(b=>t.frames[b].ms),i=n.reduce((b,P)=>b+P,0),c=(e-k.t0)*1e3%i;for(let b=0;b<n.length;b++){if(c<n[b])return b;c-=n[b]}return n.length-1}let Ie=m.update.bind(m);m.update=(e,n)=>{if(!t.playing)return Ie(e,n);let i=bt(n.now),c=t.frames[k.order[i]].face;return i!==k.step&&(k.step=i,o.show=c,o.draw(),_e(k.order[i])),Ie(c,{...n,mouth:"off",blink:!1})},d("#gridWrap").addEventListener("pointerdown",()=>{t.playing&&z()},!0);let Ge=e=>(e.frameId=t.frames[t.cur].id,e);o.snapshot=()=>{o.undoStack.push(Ge(a.face.slice())),o.undoStack.length>pt&&o.undoStack.shift(),o.redoStack.length=0};let Re=(e,n)=>{let i=e.pop();if(!i)return;if(t.playing&&z(!1),i.kind==="anim"){n.push(fe()),ht(i);return}let c=i.frameId===void 0?t.cur:t.frames.findIndex(b=>b.id===i.frameId);c<0||(c!==t.cur&&(F(),N(c),U(),L()),n.push(Ge(a.face.slice())),a.face.set(i),o._changed())};o.undo=()=>Re(o.undoStack,o.redoStack),o.redo=()=>Re(o.redoStack,o.undoStack);let Oe=o.onChange;o.onChange=()=>{F(),ut(),I(),Oe&&Oe()},d("#animPlay").addEventListener("click",ie),B.addEventListener("click",ie),d("#animAdd").addEventListener("click",Ae),d("#animDel").addEventListener("click",Se),d("#animLeft").addEventListener("click",()=>pe(-1)),d("#animRight").addEventListener("click",()=>pe(1)),d("#animMs").addEventListener("change",e=>ue(e.target.value)),d("#animMs").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),e.target.blur())}),d("#animAll").addEventListener("click",()=>{ue(d("#animMs").value,!0),s(`Every frame: ${t.frames[t.cur].ms} ms`)}),d("#animMode").querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>Le(e.dataset.v))),d("#animOnion").addEventListener("click",()=>Pe(!t.onion)),V.querySelectorAll("[data-gen]").forEach(e=>e.addEventListener("click",()=>Ue(e.dataset.gen))),d("#animToExports").addEventListener("click",()=>{let e=document.querySelector('[role=tab][data-tab="share"]');e&&e.click(),setTimeout(()=>Y.scrollIntoView({behavior:"smooth",block:"start"}),50)});let Ce=d("#headSel");Ce&&Ce.addEventListener("change",ke),window.addEventListener("keydown",e=>{if(g()||e.ctrlKey||e.metaKey||e.altKey)return;let n=document.activeElement;!(!n||n===document.body||O.contains(n))||e.target.closest&&e.target.closest("input, textarea, select")||(e.key==="Enter"&&(!n||n===document.body)?(e.preventDefault(),ie()):e.key==="ArrowLeft"&&t.cur>0?(e.preventDefault(),ae(t.cur-1)):e.key==="ArrowRight"&&t.cur<t.frames.length-1&&(e.preventDefault(),ae(t.cur+1)))});let re=(e,n,i)=>{let c=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:n});document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(c.href),4e3),s(i)},J=()=>{F();let e=K();return{o:e,ms:e.map(n=>t.frames[n].ms),faces:t.frames.map(n=>n.face)}},xt=e=>{let n=new Uint8Array(f*p*3);for(let i=0;i<f*p;i++){let c=y[e[i]];c&&(n[i*3]=c[0],n[i*3+1]=c[1],n[i*3+2]=c[2])}return n};async function Fe(e){let n=document.createElement("canvas");n.width=f,n.height=p*e.length;let i=n.getContext("2d"),c=i.createImageData(f,p*e.length);e.forEach((P,G)=>{for(let H=0;H<f*p;H++){let ee=y[P[H]]||[0,0,0],E=(G*f*p+H)*4;c.data[E]=ee[0],c.data[E+1]=ee[1],c.data[E+2]=ee[2],c.data[E+3]=255}}),i.putImageData(c,0,0);let b=await $.canvasToBlob(n);return new Uint8Array(await b.arrayBuffer())}function Be(){let{o:e,ms:n,faces:i}=J();return tt(e.map(c=>i[c]),n.map(c=>c/10),f,p,y)}function yt(){let{o:e}=J();re(new Blob([Be()],{type:"image/gif"}),"snootrix-anim-128x32.gif",`GIF saved: ${e.length} frames, 128\xD732, one pixel per LED`)}async function De(){let{o:e,ms:n,faces:i}=J(),c=i.length,b=[],P=E=>String(E+1).padStart(2,"0");for(let E=0;E<c;E++)b.push({name:`snootrix-anim/frames/frame-${P(E)}.png`,data:await Fe([i[E]])});b.push({name:"snootrix-anim/snootrix_anim_sheet.png",data:await Fe(i)});let G=new Uint8Array(f*p*c*3);i.forEach((E,ge)=>G.set(xt(E),ge*f*p*3)),b.push({name:"snootrix-anim/snootrix_anim_sheet.bmp",data:new Uint8Array(await $.encodeBMP24(G,f,p*c).arrayBuffer())});let H={editor:"https://zarmat99.github.io/snootrix/",width:f,height:p,frames:t.frames.map((E,ge)=>({file:`frames/frame-${P(ge)}.png`,ms:E.ms})),mode:t.mode,loop:{order:e,ms:n},sheet:{png:"snootrix_anim_sheet.png",bmp:"snootrix_anim_sheet.bmp",tile_width:f,tile_height:p,frames:c}},ee=E=>new TextEncoder().encode(E.replace(/\n/g,`\r
`));return b.push({name:"snootrix-anim/animation.json",data:new TextEncoder().encode(JSON.stringify(H,null,2)+`
`)}),b.push({name:"snootrix-anim/matrixportal_code.py",data:new TextEncoder().encode($t(e,n))}),b.push({name:"snootrix-anim/README.txt",data:ee(_t(c,e,n))}),nt(b)}async function wt(){let e=d("#animZip");e.disabled=!0;try{let n=t.frames.length;re(new Blob([await De()],{type:"application/zip"}),"snootrix-anim-frames.zip",`ZIP saved: ${n} PNG frames, sprite sheets and times`)}catch(n){console.error(n),s("Could not make the ZIP. Try again.")}finally{e.disabled=!1}}function Ne(){let{o:e,ms:n,faces:i}=J();return ot(i,e,n,f,p,y,{mode:t.mode})}function vt(){re(new Blob([Ne()],{type:"text/x-c"}),"snootrix_anim.h",`C header saved: ${t.frames.length} RGB565 frames, 128\xD732`)}function ze(){let e=u&&u.HEADS[a.head];if(!e||!e.modules)return null;let{o:n,ms:i,faces:c}=J();return it(c.map(b=>u.moduleLeds(e,b)),n,i,e.label,{chain:e.chainNote||"",mode:t.mode})}function Mt(){let e=ze();if(!e)return;let n=u.HEADS[a.head];re(new Blob([e],{type:"text/x-c"}),"snootrix_max7219_anim.h",`MAX7219 header saved: ${t.frames.length} frames \xD7 ${n.modules.length} modules`)}async function He(){F();let e=await xe({frames:t.frames.map(i=>i.face),ms:t.frames.map(i=>i.ms),mode:t.mode,colorMode:a.colorMode},f,p),n=a.head&&a.head!=="snootrix"?`head=${encodeURIComponent(a.head)}`:"";return`${location.origin}${location.pathname}${n?`?${n}`:""}#a=${e}`}async function je(){let e=await He();if(e.length>dt)return s(`Too long for a link (${e.length.toLocaleString("en")} characters): share the GIF instead.`),e;try{await navigator.clipboard.writeText(e),s("Link copied: it opens the editor with your animation playing")}catch{prompt("Copy this link:",e)}return e}d("#animGif").addEventListener("click",yt),d("#animZip").addEventListener("click",wt),d("#animC").addEventListener("click",vt),d("#animMax").addEventListener("click",Mt),d("#animLink").addEventListener("click",je);function $t(e,n){return`# Adafruit Matrix Portal (M4 or S3) with CircuitPython 9 or newer: plays snootrix_anim_sheet.bmp on two 64x32
# HUB75 panels chained (128x32), every step for its own time. Copy snootrix_anim_sheet.bmp and this file, renamed
# code.py, to the CIRCUITPY drive; adafruit_matrixportal comes from the CircuitPython library bundle.
# Exported from the free SNOOTRIX face editor (https://zarmat99.github.io/snootrix/). Not tested on a board by us.
import time

import displayio
from adafruit_matrixportal.matrix import Matrix

ORDER = [${e.join(", ")}]  # frame shown at each step
SECONDS = [${n.map(i=>(i/1e3).toFixed(3).replace(/0+$/,"").replace(/\.$/,".0")).join(", ")}]  # time of each step

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
`}function _t(e,n,i){return`SNOOTRIX face editor - animation frames
Made with the free SNOOTRIX face editor: https://zarmat99.github.io/snootrix/

${e} frames of 128x32 pixels, one pixel per LED: both 64x32 panels side by side, left panel first. Black = off.
One ${t.mode==="pingpong"?"ping-pong":"loop"}: ${n.length} steps, ${i.reduce((c,b)=>c+b,0)} ms. Frame shown at each step: ${n.map(c=>c+1).join(", ")}.
Time of each step (ms): ${i.join(", ")}.

frames/frame-01.png ...    one PNG per frame (image converters, ProtoTracer Helper's Image-Converter, pixel editors)
snootrix_anim_sheet.png    all frames one under the other, 128 x ${p*e} (sprite sheet)
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
`}async function Xe(e){let n=await ct(e,f,p);return{frames:n.frames.map((i,c)=>C(i,n.ms[c])),mode:n.mode,colorMode:n.colorMode}}let he=new URLSearchParams(location.hash.slice(1)),Q=M.get(ft);if(Q&&Q.code)try{let e=await Xe(Q.code);t.frames=e.frames,t.mode=e.mode,t.cur=Math.max(0,Math.min(e.frames.length-1,Q.cur|0)),t.onion=Q.onion!==!1,he.get("f")&&t.frames.length>1?(o.undoStack.push(fe()),t.frames=[C(a.face,t.frames[t.cur].ms)],t.cur=0):F()}catch(e){console.warn("saved animation not readable",e)}if(X(),N(t.cur),U(),L(),he.get("a"))try{let e=await Xe(he.get("a"));Z(),t.frames=e.frames,t.mode=e.mode,t.cur=0,a.colorMode=e.colorMode,X(),N(0),U(),L(),I(),history.replaceState(null,"",location.pathname+location.search),setTimeout(()=>s("Loaded a shared animation. Make it yours! Undo brings back your own."),600),t.frames.length>1&&oe(),_("open-link")}catch(e){console.warn(e),s("This animation link is damaged: showing your own animation.")}let Ke={anim:t,get play(){return k},select:ae,addFrame:Ae,deleteFrame:Se,move:pe,setMs:ue,setMode:Le,setOnion:Pe,generate:Ue,startPlay:oe,stopPlay:z,toggle:ie,order:K,loopMs:te,linkUrl:He,copyLink:je,gifBytes:Be,zipFiles:De,cText:Ne,maxText:ze,MAX_FRAMES:ce,MS_MIN:ye,MS_MAX:we,LINK_MAX:dt};return v.has("debug")&&(window.__snootrixAnim=Ke),Ke}export{dt as LINK_MAX,ce as MAX_FRAMES,we as MS_MAX,ye as MS_MIN,mt as MS_NEW,Ft as setupAnim};
