import{a as Ve,b as qe,c as Ze}from"./chunk-CLF2GQDG.js";var Ke="https://zarmat99.github.io/snootrix/",vt=(()=>{let r=new Uint32Array(256);for(let o=0;o<256;o++){let i=o;for(let d=0;d<8;d++)i=i&1?3988292384^i>>>1:i>>>1;r[o]=i>>>0}return r})();function Mt(r){let o=4294967295;for(let i=0;i<r.length;i++)o=vt[(o^r[i])&255]^o>>>8;return(o^4294967295)>>>0}function We(r,o){let i=[];for(let d=0;d<r;d++)i.push(d);if(o==="pingpong")for(let d=r-2;d>=1;d--)i.push(d);return i}var Ye=r=>{let o=new Uint8Array(r.reduce((d,l)=>d+l.length,0)),i=0;for(let d of r)o.set(d,i),i+=d.length;return o};function $t(r,o){let i=1<<o,d=i+1,l=o+1,y=d+1,s=new Map,x=[],$=0,p=0,g=m=>{for($|=m<<p,p+=l;p>=8;)x.push($&255),$>>>=8,p-=8};g(i);let w=r[0];for(let m=1;m<r.length;m++){let f=r[m],b=w*256+f,v=s.get(b);if(v!==void 0){w=v;continue}g(w),y===4096?(g(i),s=new Map,y=d+1,l=o+1):(y>=1<<l&&l++,s.set(b,y++)),w=f}return g(w),g(d),p>0&&x.push($&255),x}function Je(r,o,i,d,l){let y=[],s=p=>y.push(p&255),x=p=>{y.push(p&255,p>>8&255)},$=p=>{for(let g=0;g<p.length;g++)y.push(p.charCodeAt(g))};$("GIF89a"),x(i),x(d),s(243),s(0),s(0);for(let p=0;p<16;p++){let g=l[p]||[0,0,0];s(g[0]),s(g[1]),s(g[2])}return s(33),s(255),s(11),$("NETSCAPE2.0"),s(3),s(1),x(0),s(0),r.forEach((p,g)=>{s(33),s(249),s(4),s(4),x(Math.max(2,Math.min(65535,Math.round(o[g])))),s(0),s(0),s(44),x(0),x(0),x(i),x(d),s(0),s(4);let w=$t(p,4);for(let m=0;m<w.length;m+=255){let f=Math.min(255,w.length-m);s(f);for(let b=0;b<f;b++)y.push(w[m+b])}s(0)}),s(59),Uint8Array.from(y)}function Qe(r,o=new Date){let i=(o.getHours()<<11|o.getMinutes()<<5|o.getSeconds()>>1)&65535,d=(Math.max(1980,o.getFullYear())-1980<<9|o.getMonth()+1<<5|o.getDate())&65535,l=[],y=[],s=0;for(let g of r){let w=Uint8Array.from(g.name,A=>A.charCodeAt(0)&127),m=g.data,f=Mt(m),b=new Uint8Array(30+w.length),v=new DataView(b.buffer);v.setUint32(0,67324752,!0),v.setUint16(4,20,!0),v.setUint16(6,0,!0),v.setUint16(8,0,!0),v.setUint16(10,i,!0),v.setUint16(12,d,!0),v.setUint32(14,f,!0),v.setUint32(18,m.length,!0),v.setUint32(22,m.length,!0),v.setUint16(26,w.length,!0),v.setUint16(28,0,!0),b.set(w,30),l.push(b,m);let h=new Uint8Array(46+w.length),M=new DataView(h.buffer);M.setUint32(0,33639248,!0),M.setUint16(4,20,!0),M.setUint16(6,20,!0),M.setUint16(8,0,!0),M.setUint16(10,0,!0),M.setUint16(12,i,!0),M.setUint16(14,d,!0),M.setUint32(16,f,!0),M.setUint32(20,m.length,!0),M.setUint32(24,m.length,!0),M.setUint16(28,w.length,!0),M.setUint32(42,s,!0),h.set(w,46),y.push(h),s+=b.length+m.length}let x=y.reduce((g,w)=>g+w.length,0),$=new Uint8Array(22),p=new DataView($.buffer);return p.setUint32(0,101010256,!0),p.setUint16(8,r.length,!0),p.setUint16(10,r.length,!0),p.setUint32(12,x,!0),p.setUint32(16,s,!0),Ye([...l,...y,$])}var et=(r,o)=>"0x"+r.toString(16).padStart(o,"0").toUpperCase(),_t=r=>r?(r[0]&248)<<8|(r[1]&252)<<3|r[2]>>3:0,Et=(r,o=16,i="  ")=>{let d=[];for(let l=0;l<r.length;l+=o)d.push(i+r.slice(l,l+o).join(", ")+",");return d.join(`
`)};function tt(r,o,i,d,l,y,{name:s="snootrix_anim",mode:x="loop"}={}){let $=i.reduce((g,w)=>g+w,0),p=r.map((g,w)=>{let m=[];for(let f=0;f<d*l;f++)m.push(et(_t(y[g[f]]),4));return`  { // frame ${w+1}
${Et(m,16,"    ")}
  },`}).join(`
`);return`// Visor animation exported from the free SNOOTRIX face editor: ${Ke}
// ${r.length} frames of ${d}x${l} pixels, one value per LED, RGB565, rows from the top, left panel first.
// Black (0x0000) = off. One loop = ${o.length} steps (${x==="pingpong"?"ping-pong":"loop"}), ${$} ms: step s shows frame
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
// Each frame takes ${d*l*2} bytes of flash.
#pragma once
#include <stdint.h>
#ifndef PROGMEM
#define PROGMEM
#endif
const uint16_t ${s}_w = ${d};
const uint16_t ${s}_h = ${l};
const uint16_t ${s}_frames = ${r.length};
const uint16_t ${s}_steps = ${o.length};
const uint8_t ${s}_order[${o.length}] PROGMEM = { ${o.join(", ")} };
const uint16_t ${s}_ms[${o.length}] PROGMEM = { ${i.join(", ")} };
const uint16_t ${s}[${r.length}][${d*l}] PROGMEM = {
${p}
};
`}function nt(r,o,i,d,{name:l="snootrix_max7219_anim",chain:y="",mode:s="loop"}={}){let x=r[0]?r[0].length:0,$=f=>f===0?"right":"left",p=(f,b)=>f.panel<0?`${b+1}: ${f.name}`:`${$(f.panel)} ${f.name}`,g=i.reduce((f,b)=>f+b,0),w=r.map((f,b)=>{let v=f.map((h,M)=>`    { ${h.rows.map(_=>_.reduce((H,T,I)=>H|(T?128>>I:0),0)).map(_=>et(_,2)).join(", ")} },  // ${p(h,M)}`);return`  { // frame ${b+1}
${v.join(`
`)}
  },`}).join(`
`),m=y?`
// ${y.replace(/\n/g,`
// `)}`:`
// Modules in the order listed in frame 1 (sides as seen from the front; mouth modules from the snout outwards).`;return`// Visor animation for MAX7219 8x8 modules, exported from the free SNOOTRIX face editor: ${Ke}
// Head: ${d}. ${r.length} frames x ${x} modules x 8 bytes: rows from the top, bit 7 = the leftmost LED
// as seen from the front of the head (for a module on a cheek: as seen from outside, looking at it).${m}
// One loop = ${o.length} steps (${s==="pingpong"?"ping-pong":"loop"}), ${g} ms: step s shows frame ${l}_order[s] for ${l}_ms[s] ms.
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
const uint8_t ${l}_modules = ${x};
const uint16_t ${l}_frames = ${r.length};
const uint16_t ${l}_steps = ${o.length};
const uint8_t ${l}_order[${o.length}] PROGMEM = { ${o.join(", ")} };
const uint16_t ${l}_ms[${o.length}] PROGMEM = { ${i.join(", ")} };
const uint8_t ${l}[${r.length}][${x}][8] PROGMEM = {
${w}
};
`}var at=1,ie=64,ot=["drawn","rainbow","pulse"];function kt(r){let o="";for(let i=0;i<r.length;i++)o+=String.fromCharCode(r[i]);return btoa(o).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function At(r){let o=atob(r.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(o,i=>i.charCodeAt(0))}async function it(r,o){let i=new Response(new Blob([r]).stream().pipeThrough(new o("deflate-raw")));return new Uint8Array(await i.arrayBuffer())}var St=(r,o,i)=>{let d=o/2;for(let l=0;l<i;l++)for(let y=0;y<d;y++)if(r[l*o+d+y]!==r[l*o+d-1-y])return!1;return!0};async function xe({frames:r,ms:o,mode:i,colorMode:d="drawn"},l,y){if(!r.length||r.length>ie)throw new Error("frame count");let s=r.every(v=>St(v,l,y)),x=s?l/2:l,$=s?l/2:0,p=x*y,g=new Uint8Array(1+2*r.length+r.length*Math.ceil(p/2));g[0]=r.length,o.forEach((v,h)=>{g[1+2*h]=v&255,g[2+2*h]=v>>8&255});let w=1+2*r.length;r.forEach((v,h)=>{let M=r[h-1];for(let A=0;A<p;A++){let _=Math.floor(A/x)*l+$+A%x,H=(v[_]^(M?M[_]:0))&15;g[w+(A>>1)]|=H<<(A&1)*4}w+=Math.ceil(p/2)});let m=g,f=!1;if(typeof CompressionStream<"u")try{m=await it(g,CompressionStream),f=!0}catch{m=g}let b=(s?1:0)|(f?2:0)|Math.max(0,ot.indexOf(d))<<2|(i==="pingpong"?16:0);return kt(Ye([Uint8Array.of(at,b),m]))}async function rt(r,o,i){let d=At(r);if(d[0]!==at)throw new Error("unknown animation format");let l=d[1],y=!!(l&1),s=d.subarray(2);l&2&&(s=await it(s,DecompressionStream));let x=s[0];if(!x||x>ie)throw new Error("bad frame count");let $=y?o/2:o,p=$*i,g=Math.ceil(p/2);if(s.length<1+2*x+x*g)throw new Error("animation link too short");let w=[];for(let b=0;b<x;b++)w.push(s[1+2*b]|s[2+2*b]<<8);let m=[],f=1+2*x;for(let b=0;b<x;b++){let v=new Uint8Array(o*i),h=m[b-1];for(let M=0;M<p;M++){let A=Math.floor(M/$),_=M%$,H=s[f+(M>>1)]>>(M&1)*4&15;if(y){let T=A*o+o/2+_,I=A*o+o/2-1-_;v[T]=v[I]=H^(h?h[T]:0)}else{let T=A*o+_;v[T]=H^(h?h[T]:0)}}m.push(v),f+=g}return{frames:m,ms:w,mode:l&16?"pingpong":"loop",colorMode:ot[l>>2&3]||"drawn"}}var re=ie,be=20,ye=1e4,we=100,st=2e3,lt="snootrix.anim.v1",ct=80,U=(r,o="")=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path${o?` fill-rule="${o}"`:""} d="${r}"/></svg>`,L={play:U("M8 5v14l11-7z"),stop:U("M7 7h10v10H7z"),add:U("M3 3h12v2H5v10H3zM7 7h14v14H7zM9 9v10h10V9zM13 11h2v2h2v2h-2v2h-2v-2h-2v-2h2z","evenodd"),left:U("M15.5 5.5 9 12l6.5 6.5-1.5 1.5-8-8 8-8z"),right:U("M8.5 18.5 15 12 8.5 5.5 10 4l8 8-8 8z"),del:U("M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"),down:U("M5 20h14v-2H5zM12 16l5-5-1.4-1.4L13 12.2V4h-2v8.2L8.4 9.6 7 11z"),code:U("M8.6 16.6L4 12l4.6-4.6L7.2 6 1.2 12l6 6zm6.8 0L20 12l-4.6-4.6L16.8 6l6 6-6 6z"),link:U("M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM7.8 17.7a3 3 0 0 1-4.2-4.2l2.8-2.8 1.4 1.4-2.8 2.8a1 1 0 0 0 1.4 1.4l2.8-2.8 1.4 1.4zm8.5-6.4l-1.4-1.4 2.8-2.8a1 1 0 0 0-1.4-1.4l-2.8 2.8-1.4-1.4 2.8-2.8a3 3 0 0 1 4.2 4.2z"),eye:U("M1.5 12C4.3 7.7 7.8 5.5 12 5.5s7.7 2.2 10.5 6.5c-2.8 4.3-6.3 6.5-10.5 6.5S4.3 16.3 1.5 12zM12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8z","evenodd"),mouth:U("M2 8.5l3.3 3.3L8.7 8.5l3.3 3.3 3.3-3.3 3.4 3.3L22 8.5V12l-3.3 3.5-3.4-3.3-3.3 3.3-3.3-3.3-3.4 3.3L2 12z"),heart:U("M12 21s-7.5-4.6-9.6-9.2C1 8.6 3 5 6.6 5c2.2 0 3.6 1.2 4.4 2.4h2C13.8 6.2 15.2 5 17.4 5 21 5 23 8.6 21.6 11.8 19.5 16.4 12 21 12 21z"),send:U("M3 20.5V14l11-2-11-2V3.5L22 12z")},Lt=`
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
.btn.anim-play[aria-pressed="true"] { background: rgba(28, 19, 54, 0.82);
  border-color: var(--pink); color: #ffd6ec; box-shadow: 0 0 16px rgba(255, 70, 170, 0.45); }
.btn.anim-play[aria-pressed="true"] svg { animation: pulse 1s ease-in-out infinite; }
.anim-ms { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: var(--muted); }
.anim-ms input { width: 78px; min-height: 38px; border-radius: 10px; border: 1px solid var(--line); background: var(--panel2);
  color: var(--text); font: 600 15px/1 var(--font); padding: 6px 8px; }
.anim-ms input:focus-visible { outline: 2px solid var(--cyan); outline-offset: 1px; }
.anim .seg { flex: 0 1 auto; gap: 4px; }
.anim .seg button { min-height: 38px; padding: 8px 11px; }
.anim-gen { margin: 2px 0 10px; }
.anim-gen-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
.anim-gen-row .btn { border-radius: 12px; min-height: 44px; padding: 8px 6px; }
.anim-gen-row .btn svg { width: 22px; height: 22px; color: var(--cyan); }
.anim-gen-row .btn[data-gen="boop"] svg { color: var(--pink); }
`;async function Ot(r){let{state:o,editor:i,animator:d,toast:l,track:y,F:s,A:x,S:$,heads:p,isBusy:g,onFaceShown:w}=r,{W:m,H:f,PALETTE:b}=s,v=new URLSearchParams(location.search),h=(e,n=document)=>n.querySelector(e),M={get(e){try{let n=localStorage.getItem(e);return n?JSON.parse(n):null}catch{return null}},set(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch{}}},A=new Set,_=(e,n)=>{let a=e+(n?JSON.stringify(n):"");A.has(a)||(A.add(a),y("anim",{action:e,...n}))},H=1,T=e=>Math.max(be,Math.min(ye,Math.round((+e||we)/10)*10)),I=(e,n=we)=>({id:H++,face:e.slice(),ms:T(n)}),t={frames:[I(o.face)],cur:0,mode:"loop",onion:!0,playing:!1},E=null,B=()=>{t.frames[t.cur].face.set(o.face)},Z=()=>We(t.frames.length,t.mode),se=()=>Z().reduce((e,n)=>e+t.frames[n].ms,0),K=()=>{i.onion=t.onion&&!t.playing&&t.cur>0?t.frames[t.cur-1].face:null},ve=document.createElement("style");ve.textContent=Lt,document.head.appendChild(ve);let q=document.createElement("section");q.className="anim",q.id="anim",q.setAttribute("aria-label","Animation"),q.innerHTML=`
    <div class="anim-top"><h2>Animation</h2><span class="anim-info" id="animInfo"></span></div>
    <div class="anim-gen" role="group" aria-label="Make frames from this face">
      <div class="anim-gen-row">
        <button class="btn" data-gen="blink" title="Eyes that close and open again">${L.eye}Blink</button>
        <button class="btn" data-gen="talk" title="The mouth from closed to open: talks in ping-pong">${L.mouth}Talk</button>
        <button class="btn" data-gen="boop" title="The hearts of the boop, then the face again">${L.heart}Boop</button>
      </div>
    </div>
    <div class="anim-strip" id="animStrip" role="group" aria-label="Frames"></div>
    <div class="anim-bar" role="toolbar" aria-label="Frames">
      <button class="btn pill anim-play" id="animPlay" aria-pressed="false" title="Play the animation (Enter)">${L.play}<span>Play</span></button>
      <button class="btn icon" id="animAdd" aria-label="Add a frame: a copy of this one" title="Add a frame: a copy of this one">${L.add}</button>
      <button class="btn icon" id="animLeft" aria-label="Move this frame left" title="Move this frame left">${L.left}</button>
      <button class="btn icon" id="animRight" aria-label="Move this frame right" title="Move this frame right">${L.right}</button>
      <button class="btn icon" id="animDel" aria-label="Delete this frame" title="Delete this frame">${L.del}</button>
    </div>
    <div class="anim-bar">
      <label class="anim-ms">Frame time <input type="number" id="animMs" min="${be}" max="${ye}" step="10" inputmode="numeric" aria-label="Frame time in milliseconds"> ms</label>
      <button class="btn chip" id="animAll" title="Give every frame this time">Same for all</button>
      <div class="seg" id="animMode" role="group" aria-label="Playback">
        <button data-v="loop" title="1, 2, 3, 1, 2, 3...">Loop</button>
        <button data-v="pingpong" title="1, 2, 3, 2, 1, 2...">Ping-pong</button>
      </div>
      <button class="btn chip" id="animOnion" aria-pressed="true" title="Show the previous frame faintly while you draw">Onion skin</button>
    </div>`,h("#animSlot").appendChild(q);let D=h("#animStrip"),W=document.createElement("div");W.className="anim-exports",W.id="animExports",W.innerHTML=`
    <h2>Animation</h2>
    <div class="btns">
      <button class="btn big" id="animGif" data-umami-event="export" data-umami-event-type="gif" title="One pixel per LED, every frame with its time: ESP32 AnimatedGIF, Matrix Portal, CircuitPython gifio">${L.down}GIF 128\xD732</button>
      <button class="btn big" id="animZip" data-umami-event="export" data-umami-event-type="png-zip" title="A PNG per frame, sprite sheets in PNG and BMP, the times and a README">${L.down}PNG frames (ZIP)</button>
      <button class="btn big" id="animC" data-umami-event="export" data-umami-event-type="c-anim" title="RGB565 frames with order and times, for ESP32 with Adafruit GFX or the HUB75 DMA library">${L.code}C frames</button>
      <button class="btn big" id="animMax" data-umami-event="export" data-umami-event-type="max7219-anim" disabled>${L.code}MAX7219 frames</button>
      <button class="btn big" id="animLink" data-umami-event="share" data-umami-event-type="anim-link" title="Opens this page with your animation playing (up to 2000 characters)">${L.link}Animation link</button>
    </div>`;let C=e=>W.querySelector(e);function Me(e,n){e.width!==m*2&&(e.width=m*2,e.height=f*2);let c=e.getContext("2d");c.fillStyle="#07050d",c.fillRect(0,0,e.width,e.height);let u=new Map;for(let P=0;P<m*f;P++){let G=n[P];G&&(u.has(G)||u.set(G,[]),u.get(G).push(P))}for(let[P,G]of u){c.fillStyle=`rgb(${b[P].join(",")})`;for(let j of G)c.fillRect(j%m*2,Math.floor(j/m)*2,2-.35,2-.35)}}let z=[];function X(){t.cur=Math.max(0,Math.min(t.frames.length-1,t.cur)),D.textContent="",z=t.frames.map((e,n)=>{let a=document.createElement("button");a.type="button",a.className="anim-frame";let c=document.createElement("canvas");Me(c,e.face);let u=document.createElement("span");return a.append(c,u),a.addEventListener("click",()=>te(n)),D.appendChild(a),{b:a,cv:c,lab:u}}),R(),le(),S()}function le(){t.frames.forEach((n,a)=>{let c=z[a];c&&(c.lab.innerHTML=`<b>${a+1}</b>${n.ms} ms`,c.b.setAttribute("aria-label",`Frame ${a+1} of ${t.frames.length}, ${n.ms} milliseconds`))});let e=t.frames.length;h("#animInfo").textContent=e===1?"1 frame":`${e} frames \xB7 ${(se()/1e3).toFixed(se()<1e4?2:1)} s`,r.onFrames&&r.onFrames(e)}function $e(e){let n=z[e];if(!n)return;let a=n.b.offsetLeft-D.offsetLeft,c=a+n.b.offsetWidth;a<D.scrollLeft?D.scrollLeft=a-4:c>D.scrollLeft+D.clientWidth&&(D.scrollLeft=c-D.clientWidth+4)}function R(){z.forEach((e,n)=>e.b.setAttribute("aria-pressed",String(n===t.cur&&!t.playing))),$e(t.cur)}let ee=-1;function _e(e){ee>=0&&z[ee]&&z[ee].b.classList.remove("playing"),ee=e,e>=0&&z[e]&&(z[e].b.classList.add("playing"),$e(e))}function S(){let e=t.frames.length;h("#animDel").disabled=e<2,h("#animLeft").disabled=t.cur===0,h("#animRight").disabled=t.cur>=e-1,h("#animAdd").disabled=e>=re;let n=h("#animMs");document.activeElement!==n&&(n.value=t.frames[t.cur].ms),h("#animMode").querySelectorAll("button").forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.v===t.mode))),h("#animOnion").setAttribute("aria-pressed",String(t.onion));{let a=h("#animPlay");a.setAttribute("aria-pressed",String(t.playing)),a.querySelector("svg").outerHTML=t.playing?L.stop:L.play,a.querySelector("span").textContent=t.playing?"Stop":"Play"}h("#animPlay").disabled=e<2,ce()}function ce(){let e=p&&p.HEADS[o.head];C("#animMax").disabled=!(e&&e.modules),C("#animMax").title=e&&e.modules?`${e.modules.length} modules \xD7 8 bytes per frame`:"Needs a MAX7219 head"}let me=0;function mt(){me||(me=setTimeout(()=>{me=0;let e=z[t.cur];e&&Me(e.cv,t.frames[t.cur].face)},120))}let Ee=0;function O(){clearTimeout(Ee),Ee=setTimeout(async()=>{try{let e=await xe({frames:t.frames.map(n=>n.face),ms:t.frames.map(n=>n.ms),mode:t.mode},m,f);M.set(lt,{code:e,cur:t.cur,onion:t.onion})}catch(e){console.warn(e)}},400)}function F(e){t.cur=Math.max(0,Math.min(t.frames.length-1,e)),o.face.set(t.frames[t.cur].face),i.show=null,K(),i.draw(),w()}function te(e){t.playing&&N(!1),B(),F(e),R(),S(),O()}function de(){return{kind:"anim",frames:t.frames.map(e=>({id:e.id,face:e.face.slice(),ms:e.ms})),cur:t.cur,mode:t.mode}}function V(){B(),i.undoStack.push(de()),i.undoStack.length>ct&&i.undoStack.shift(),i.redoStack.length=0}function dt(e){t.frames=e.frames.map(n=>({id:n.id,face:n.face.slice(),ms:n.ms})),t.mode=e.mode,t.cur=e.cur,X(),F(e.cur),R(),S(),O()}function ke(){if(t.frames.length>=re){l(`${re} frames at most.`);return}t.playing&&N(!1),V(),t.frames.splice(t.cur+1,0,I(o.face,t.frames[t.cur].ms)),t.cur+=1,X(),F(t.cur),R(),S(),O(),t.frames.length===2&&l("New frame: draw what changes, then Play"),_("add")}function Ae(){t.frames.length<2||(t.playing&&N(!1),V(),t.frames.splice(t.cur,1),t.cur=Math.min(t.cur,t.frames.length-1),X(),F(t.cur),R(),S(),O(),l("Frame deleted"),_("delete"))}function fe(e){let n=t.cur,a=n+e;a<0||a>=t.frames.length||(t.playing&&N(!1),V(),[t.frames[n],t.frames[a]]=[t.frames[a],t.frames[n]],t.cur=a,X(),K(),i.draw(),O(),_("move"))}function pe(e,n=!1){let a=T(e),c=n?t.frames:[t.frames[t.cur]];if(c.every(u=>u.ms===a)){S();return}V();for(let u of c)u.ms=a;le(),S(),O(),_(n?"time-all":"time")}function Se(e){e!=="loop"&&e!=="pingpong"||(t.mode=e,t.playing&&(E.order=Z(),E.step=-1),le(),S(),O(),_("mode",{mode:e}))}function Le(e){t.onion=!!e,K(),i.draw(),S(),O(),_("onion")}let Pe={blink:Ve,talk:qe,boop:Ze},ft={blink:"Blink needs eyes",talk:"Talk needs a mouth"};function Ue(e){if(!Pe[e])return!1;t.playing&&N(!1),B();let n=Pe[e](t.frames[t.cur].face,x);if(!n)return l(ft[e]),!1;V(),t.frames=n.frames.map(c=>I(c.face,c.ms)),t.mode=n.mode,t.cur=0,X(),F(0),R(),S(),O();let a=e[0].toUpperCase()+e.slice(1);return l(`${a}: ${t.frames.length} frames`),_("gen",{gen:e}),ne(),!0}function ne(e=!0){if(t.frames.length<2){l("Add a frame first");return}t.playing||(B(),E={order:Z(),t0:null,step:-1},t.playing=!0,K(),R(),S(),e&&_("play"))}function N(e=!0){if(!t.playing)return;let n=E&&E.step>=0?E.order[E.step]:t.cur;t.playing=!1,E=null,_e(-1),i.show=null,e&&n!==t.cur?F(n):(K(),i.draw()),R(),S()}let ue=()=>t.playing?N():ne();function pt(e){E.t0===null&&(E.t0=e);let n=E.order.map(u=>t.frames[u].ms),a=n.reduce((u,P)=>u+P,0),c=(e-E.t0)*1e3%a;for(let u=0;u<n.length;u++){if(c<n[u])return u;c-=n[u]}return n.length-1}let Re=d.update.bind(d);d.update=(e,n)=>{if(!t.playing)return Re(e,n);let a=pt(n.now),c=t.frames[E.order[a]].face;return a!==E.step&&(E.step=a,i.show=c,i.draw(),_e(E.order[a])),Re(c,{...n,mouth:"off",blink:!1})},h("#gridWrap").addEventListener("pointerdown",()=>{t.playing&&N()},!0);let Oe=e=>(e.frameId=t.frames[t.cur].id,e);i.snapshot=()=>{i.undoStack.push(Oe(o.face.slice())),i.undoStack.length>ct&&i.undoStack.shift(),i.redoStack.length=0};let Ce=(e,n)=>{let a=e.pop();if(!a)return;if(t.playing&&N(!1),a.kind==="areas"){i.swapAreas(a,n);return}if(a.kind==="anim"){n.push(de()),dt(a);return}let c=a.frameId===void 0?t.cur:t.frames.findIndex(u=>u.id===a.frameId);c<0||(c!==t.cur&&(B(),F(c),R(),S()),n.push(Oe(o.face.slice())),o.face.set(a),i._changed())};i.undo=()=>Ce(i.undoStack,i.redoStack),i.redo=()=>Ce(i.redoStack,i.undoStack);let Ge=i.onChange;i.onChange=()=>{B(),mt(),O(),Ge&&Ge()},h("#animPlay").addEventListener("click",ue),h("#animAdd").addEventListener("click",ke),h("#animDel").addEventListener("click",Ae),h("#animLeft").addEventListener("click",()=>fe(-1)),h("#animRight").addEventListener("click",()=>fe(1)),h("#animMs").addEventListener("change",e=>pe(e.target.value)),h("#animMs").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),e.target.blur())}),h("#animAll").addEventListener("click",()=>{pe(h("#animMs").value,!0),l(`Every frame: ${t.frames[t.cur].ms} ms`)}),h("#animMode").querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>Se(e.dataset.v))),h("#animOnion").addEventListener("click",()=>Le(!t.onion)),q.querySelectorAll("[data-gen]").forEach(e=>e.addEventListener("click",()=>Ue(e.dataset.gen)));let Te=h("#headSel");Te&&Te.addEventListener("change",ce),window.addEventListener("keydown",e=>{if(g()||e.ctrlKey||e.metaKey||e.altKey)return;let n=document.activeElement;!(!n||n===document.body||D.contains(n))||e.target.closest&&e.target.closest("input, textarea, select")||(e.key==="Enter"&&(!n||n===document.body)?(e.preventDefault(),ue()):e.key==="ArrowLeft"&&t.cur>0?(e.preventDefault(),te(t.cur-1)):e.key==="ArrowRight"&&t.cur<t.frames.length-1&&(e.preventDefault(),te(t.cur+1)))});let ae=e=>!!(r.inAppStop&&r.inAppStop(e)),oe=(e,n,a,c)=>{let u=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:n});document.body.appendChild(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(u.href),4e3),l(a),r.exported&&r.exported(c)},Y=()=>{B();let e=Z();return{o:e,ms:e.map(n=>t.frames[n].ms),faces:t.frames.map(n=>n.face)}},ut=e=>{let n=new Uint8Array(m*f*3);for(let a=0;a<m*f;a++){let c=b[e[a]];c&&(n[a*3]=c[0],n[a*3+1]=c[1],n[a*3+2]=c[2])}return n};async function Ie(e){let n=document.createElement("canvas");n.width=m,n.height=f*e.length;let a=n.getContext("2d"),c=a.createImageData(m,f*e.length);e.forEach((P,G)=>{for(let j=0;j<m*f;j++){let Q=b[P[j]]||[0,0,0],k=(G*m*f+j)*4;c.data[k]=Q[0],c.data[k+1]=Q[1],c.data[k+2]=Q[2],c.data[k+3]=255}}),a.putImageData(c,0,0);let u=await $.canvasToBlob(n);return new Uint8Array(await u.arrayBuffer())}function De(){let{o:e,ms:n,faces:a}=Y();return Je(e.map(c=>a[c]),n.map(c=>c/10),m,f,b)}function ht(){if(ae("gif"))return;let{o:e}=Y();oe(new Blob([De()],{type:"image/gif"}),"snootrix-anim-128x32.gif",`GIF saved: ${e.length} frames`,C("#animGif"))}async function Fe(){let{o:e,ms:n,faces:a}=Y(),c=a.length,u=[],P=k=>String(k+1).padStart(2,"0");for(let k=0;k<c;k++)u.push({name:`snootrix-anim/frames/frame-${P(k)}.png`,data:await Ie([a[k]])});u.push({name:"snootrix-anim/snootrix_anim_sheet.png",data:await Ie(a)});let G=new Uint8Array(m*f*c*3);a.forEach((k,ge)=>G.set(ut(k),ge*m*f*3)),u.push({name:"snootrix-anim/snootrix_anim_sheet.bmp",data:new Uint8Array(await $.encodeBMP24(G,m,f*c).arrayBuffer())});let j={editor:"https://zarmat99.github.io/snootrix/",width:m,height:f,frames:t.frames.map((k,ge)=>({file:`frames/frame-${P(ge)}.png`,ms:k.ms})),mode:t.mode,loop:{order:e,ms:n},sheet:{png:"snootrix_anim_sheet.png",bmp:"snootrix_anim_sheet.bmp",tile_width:m,tile_height:f,frames:c}},Q=k=>new TextEncoder().encode(k.replace(/\n/g,`\r
`));return u.push({name:"snootrix-anim/animation.json",data:new TextEncoder().encode(JSON.stringify(j,null,2)+`
`)}),u.push({name:"snootrix-anim/matrixportal_code.py",data:new TextEncoder().encode(yt(e,n))}),u.push({name:"snootrix-anim/README.txt",data:Q(wt(c,e,n))}),Qe(u)}async function gt(){if(ae("png-zip"))return;let e=C("#animZip");e.disabled=!0;try{let n=t.frames.length;oe(new Blob([await Fe()],{type:"application/zip"}),"snootrix-anim-frames.zip",`ZIP saved: ${n} frames`,e)}catch(n){console.error(n),l("Could not make the ZIP")}finally{e.disabled=!1}}function Ne(){let{o:e,ms:n,faces:a}=Y();return tt(a,e,n,m,f,b,{mode:t.mode})}function xt(){ae("c-anim")||oe(new Blob([Ne()],{type:"text/x-c"}),"snootrix_anim.h",`C header saved: ${t.frames.length} frames`,C("#animC"))}function Be(){let e=p&&p.HEADS[o.head];if(!e||!e.modules)return null;let{o:n,ms:a,faces:c}=Y();return nt(c.map(u=>p.moduleLeds(e,u)),n,a,e.label,{chain:e.chainNote||"",mode:t.mode})}function bt(){let e=p&&p.HEADS[o.head];if(!e||!e.modules||ae("max7219-anim"))return;let n=Be();n&&oe(new Blob([n],{type:"text/x-c"}),"snootrix_max7219_anim.h",`MAX7219 header saved: ${t.frames.length} frames`,C("#animMax"))}async function ze(){B();let e=await xe({frames:t.frames.map(a=>a.face),ms:t.frames.map(a=>a.ms),mode:t.mode,colorMode:o.colorMode},m,f),n=o.head&&o.head!=="snootrix"?`head=${encodeURIComponent(o.head)}`:"";return`${location.origin}${location.pathname}${n?`?${n}`:""}#a=${e}`}async function je(){let e=await ze();if(e.length>st)return l("Too long for a link: share the GIF."),e;try{await navigator.clipboard.writeText(e),l("Link copied")}catch{prompt("Copy this link:",e)}return e}C("#animGif").addEventListener("click",ht),C("#animZip").addEventListener("click",gt),C("#animC").addEventListener("click",xt),C("#animMax").addEventListener("click",bt),C("#animLink").addEventListener("click",je);function yt(e,n){return`# Adafruit Matrix Portal (M4 or S3) with CircuitPython 9 or newer: plays snootrix_anim_sheet.bmp on two 64x32
# HUB75 panels chained (128x32), every step for its own time. Copy snootrix_anim_sheet.bmp and this file, renamed
# code.py, to the CIRCUITPY drive; adafruit_matrixportal comes from the CircuitPython library bundle.
# Exported from the free SNOOTRIX face editor (https://zarmat99.github.io/snootrix/). Not tested on a board by us.
import time

import displayio
from adafruit_matrixportal.matrix import Matrix

ORDER = [${e.join(", ")}]  # frame shown at each step
SECONDS = [${n.map(a=>(a/1e3).toFixed(3).replace(/0+$/,"").replace(/\.$/,".0")).join(", ")}]  # time of each step

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
`}function wt(e,n,a){return`SNOOTRIX face editor - animation frames
Made with the free SNOOTRIX face editor: https://zarmat99.github.io/snootrix/

${e} frames of 128x32 pixels, one pixel per LED: both 64x32 panels side by side, left panel first. Black = off.
One ${t.mode==="pingpong"?"ping-pong":"loop"}: ${n.length} steps, ${a.reduce((c,u)=>c+u,0)} ms. Frame shown at each step: ${n.map(c=>c+1).join(", ")}.
Time of each step (ms): ${a.join(", ")}.

frames/frame-01.png ...    one PNG per frame (image converters, ProtoTracer Helper's Image-Converter, pixel editors)
snootrix_anim_sheet.png    all frames one under the other, 128 x ${f*e} (sprite sheet)
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
`}async function He(e){let n=await rt(e,m,f);return{frames:n.frames.map((a,c)=>I(a,n.ms[c])),mode:n.mode,colorMode:n.colorMode}}let he=new URLSearchParams(location.hash.slice(1)),J=M.get(lt);if(J&&J.code)try{let e=await He(J.code);t.frames=e.frames,t.mode=e.mode,t.cur=Math.max(0,Math.min(e.frames.length-1,J.cur|0)),t.onion=J.onion!==!1,he.get("f")&&t.frames.length>1?(i.undoStack.push(de()),t.frames=[I(o.face,t.frames[t.cur].ms)],t.cur=0):B()}catch(e){console.warn("saved animation not readable",e)}if(X(),F(t.cur),R(),S(),he.get("a"))try{let e=await He(he.get("a"));V(),t.frames=e.frames,t.mode=e.mode,t.cur=0,o.colorMode=e.colorMode,X(),F(0),R(),S(),O(),history.replaceState(null,"",location.pathname+location.search),setTimeout(()=>l("Shared animation loaded"),600),t.frames.length>1&&ne(),_("open-link")}catch(e){console.warn(e),l("This link is damaged")}let Xe={anim:t,get play(){return E},select:te,addFrame:ke,deleteFrame:Ae,move:fe,setMs:pe,setMode:Se,setOnion:Le,generate:Ue,startPlay:ne,stopPlay:N,toggle:ue,order:Z,loopMs:se,linkUrl:ze,copyLink:je,gifBytes:De,zipFiles:Fe,cText:Ne,maxText:Be,exportsEl:W,renderMax:ce,load(e,n,a="loop"){t.playing&&N(!1),V(),t.frames=e.map((c,u)=>I(c,n[u]||we)),t.mode=a==="pingpong"?"pingpong":"loop",t.cur=0,X(),F(0),R(),S(),O()},MAX_FRAMES:re,MS_MIN:be,MS_MAX:ye,LINK_MAX:st};return v.has("debug")&&(window.__snootrixAnim=Xe),Xe}export{st as LINK_MAX,re as MAX_FRAMES,ye as MS_MAX,be as MS_MIN,we as MS_NEW,Ot as setupAnim};
