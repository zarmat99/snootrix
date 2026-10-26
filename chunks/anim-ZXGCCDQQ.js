import{a as qe,b as Ze,c as Ke}from"./chunk-CLF2GQDG.js";var We="https://zarmat99.github.io/snootrix/",Mt=(()=>{let r=new Uint32Array(256);for(let o=0;o<256;o++){let i=o;for(let d=0;d<8;d++)i=i&1?3988292384^i>>>1:i>>>1;r[o]=i>>>0}return r})();function $t(r){let o=4294967295;for(let i=0;i<r.length;i++)o=Mt[(o^r[i])&255]^o>>>8;return(o^4294967295)>>>0}function Ye(r,o){let i=[];for(let d=0;d<r;d++)i.push(d);if(o==="pingpong")for(let d=r-2;d>=1;d--)i.push(d);return i}var Je=r=>{let o=new Uint8Array(r.reduce((d,l)=>d+l.length,0)),i=0;for(let d of r)o.set(d,i),i+=d.length;return o};function _t(r,o){let i=1<<o,d=i+1,l=o+1,y=d+1,s=new Map,x=[],$=0,p=0,g=m=>{for($|=m<<p,p+=l;p>=8;)x.push($&255),$>>>=8,p-=8};g(i);let w=r[0];for(let m=1;m<r.length;m++){let f=r[m],b=w*256+f,v=s.get(b);if(v!==void 0){w=v;continue}g(w),y===4096?(g(i),s=new Map,y=d+1,l=o+1):(y>=1<<l&&l++,s.set(b,y++)),w=f}return g(w),g(d),p>0&&x.push($&255),x}function Qe(r,o,i,d,l){let y=[],s=p=>y.push(p&255),x=p=>{y.push(p&255,p>>8&255)},$=p=>{for(let g=0;g<p.length;g++)y.push(p.charCodeAt(g))};$("GIF89a"),x(i),x(d),s(243),s(0),s(0);for(let p=0;p<16;p++){let g=l[p]||[0,0,0];s(g[0]),s(g[1]),s(g[2])}return s(33),s(255),s(11),$("NETSCAPE2.0"),s(3),s(1),x(0),s(0),r.forEach((p,g)=>{s(33),s(249),s(4),s(4),x(Math.max(2,Math.min(65535,Math.round(o[g])))),s(0),s(0),s(44),x(0),x(0),x(i),x(d),s(0),s(4);let w=_t(p,4);for(let m=0;m<w.length;m+=255){let f=Math.min(255,w.length-m);s(f);for(let b=0;b<f;b++)y.push(w[m+b])}s(0)}),s(59),Uint8Array.from(y)}function et(r,o=new Date){let i=(o.getHours()<<11|o.getMinutes()<<5|o.getSeconds()>>1)&65535,d=(Math.max(1980,o.getFullYear())-1980<<9|o.getMonth()+1<<5|o.getDate())&65535,l=[],y=[],s=0;for(let g of r){let w=Uint8Array.from(g.name,k=>k.charCodeAt(0)&127),m=g.data,f=$t(m),b=new Uint8Array(30+w.length),v=new DataView(b.buffer);v.setUint32(0,67324752,!0),v.setUint16(4,20,!0),v.setUint16(6,0,!0),v.setUint16(8,0,!0),v.setUint16(10,i,!0),v.setUint16(12,d,!0),v.setUint32(14,f,!0),v.setUint32(18,m.length,!0),v.setUint32(22,m.length,!0),v.setUint16(26,w.length,!0),v.setUint16(28,0,!0),b.set(w,30),l.push(b,m);let h=new Uint8Array(46+w.length),M=new DataView(h.buffer);M.setUint32(0,33639248,!0),M.setUint16(4,20,!0),M.setUint16(6,20,!0),M.setUint16(8,0,!0),M.setUint16(10,0,!0),M.setUint16(12,i,!0),M.setUint16(14,d,!0),M.setUint32(16,f,!0),M.setUint32(20,m.length,!0),M.setUint32(24,m.length,!0),M.setUint16(28,w.length,!0),M.setUint32(42,s,!0),h.set(w,46),y.push(h),s+=b.length+m.length}let x=y.reduce((g,w)=>g+w.length,0),$=new Uint8Array(22),p=new DataView($.buffer);return p.setUint32(0,101010256,!0),p.setUint16(8,r.length,!0),p.setUint16(10,r.length,!0),p.setUint32(12,x,!0),p.setUint32(16,s,!0),Je([...l,...y,$])}var tt=(r,o)=>"0x"+r.toString(16).padStart(o,"0").toUpperCase(),Et=r=>r?(r[0]&248)<<8|(r[1]&252)<<3|r[2]>>3:0,At=(r,o=16,i="  ")=>{let d=[];for(let l=0;l<r.length;l+=o)d.push(i+r.slice(l,l+o).join(", ")+",");return d.join(`
`)};function nt(r,o,i,d,l,y,{name:s="snootrix_anim",mode:x="loop"}={}){let $=i.reduce((g,w)=>g+w,0),p=r.map((g,w)=>{let m=[];for(let f=0;f<d*l;f++)m.push(tt(Et(y[g[f]]),4));return`  { // frame ${w+1}
${At(m,16,"    ")}
  },`}).join(`
`);return`// Visor animation exported from the free SNOOTRIX face editor: ${We}
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
`}function at(r,o,i,d,{name:l="snootrix_max7219_anim",chain:y="",mode:s="loop"}={}){let x=r[0]?r[0].length:0,$=f=>f===0?"right":"left",p=(f,b)=>f.panel<0?`${b+1}: ${f.name}`:`${$(f.panel)} ${f.name}`,g=i.reduce((f,b)=>f+b,0),w=r.map((f,b)=>{let v=f.map((h,M)=>`    { ${h.rows.map(_=>_.reduce((X,G,I)=>X|(G?128>>I:0),0)).map(_=>tt(_,2)).join(", ")} },  // ${p(h,M)}`);return`  { // frame ${b+1}
${v.join(`
`)}
  },`}).join(`
`),m=y?`
// ${y.replace(/\n/g,`
// `)}`:`
// Modules in the order listed in frame 1 (sides as seen from the front; mouth modules from the snout outwards).`;return`// Visor animation for MAX7219 8x8 modules, exported from the free SNOOTRIX face editor: ${We}
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
`}var ot=1,se=64,it=["drawn","rainbow","pulse"];function kt(r){let o="";for(let i=0;i<r.length;i++)o+=String.fromCharCode(r[i]);return btoa(o).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function St(r){let o=atob(r.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(o,i=>i.charCodeAt(0))}async function rt(r,o){let i=new Response(new Blob([r]).stream().pipeThrough(new o("deflate-raw")));return new Uint8Array(await i.arrayBuffer())}var Lt=(r,o,i)=>{let d=o/2;for(let l=0;l<i;l++)for(let y=0;y<d;y++)if(r[l*o+d+y]!==r[l*o+d-1-y])return!1;return!0};async function be({frames:r,ms:o,mode:i,colorMode:d="drawn"},l,y){if(!r.length||r.length>se)throw new Error("frame count");let s=r.every(v=>Lt(v,l,y)),x=s?l/2:l,$=s?l/2:0,p=x*y,g=new Uint8Array(1+2*r.length+r.length*Math.ceil(p/2));g[0]=r.length,o.forEach((v,h)=>{g[1+2*h]=v&255,g[2+2*h]=v>>8&255});let w=1+2*r.length;r.forEach((v,h)=>{let M=r[h-1];for(let k=0;k<p;k++){let _=Math.floor(k/x)*l+$+k%x,X=(v[_]^(M?M[_]:0))&15;g[w+(k>>1)]|=X<<(k&1)*4}w+=Math.ceil(p/2)});let m=g,f=!1;if(typeof CompressionStream<"u")try{m=await rt(g,CompressionStream),f=!0}catch{m=g}let b=(s?1:0)|(f?2:0)|Math.max(0,it.indexOf(d))<<2|(i==="pingpong"?16:0);return kt(Je([Uint8Array.of(ot,b),m]))}async function st(r,o,i){let d=St(r);if(d[0]!==ot)throw new Error("unknown animation format");let l=d[1],y=!!(l&1),s=d.subarray(2);l&2&&(s=await rt(s,DecompressionStream));let x=s[0];if(!x||x>se)throw new Error("bad frame count");let $=y?o/2:o,p=$*i,g=Math.ceil(p/2);if(s.length<1+2*x+x*g)throw new Error("animation link too short");let w=[];for(let b=0;b<x;b++)w.push(s[1+2*b]|s[2+2*b]<<8);let m=[],f=1+2*x;for(let b=0;b<x;b++){let v=new Uint8Array(o*i),h=m[b-1];for(let M=0;M<p;M++){let k=Math.floor(M/$),_=M%$,X=s[f+(M>>1)]>>(M&1)*4&15;if(y){let G=k*o+o/2+_,I=k*o+o/2-1-_;v[G]=v[I]=X^(h?h[G]:0)}else{let G=k*o+_;v[G]=X^(h?h[G]:0)}}m.push(v),f+=g}return{frames:m,ms:w,mode:l&16?"pingpong":"loop",colorMode:it[l>>2&3]||"drawn"}}var le=se,ye=20,we=1e4,ve=100,lt=2e3,ct="snootrix.anim.v1",mt=80,U=(r,o="")=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path${o?` fill-rule="${o}"`:""} d="${r}"/></svg>`,L={play:U("M8 5v14l11-7z"),stop:U("M7 7h10v10H7z"),add:U("M3 3h12v2H5v10H3zM7 7h14v14H7zM9 9v10h10V9zM13 11h2v2h2v2h-2v2h-2v-2h-2v-2h2z","evenodd"),left:U("M15.5 5.5 9 12l6.5 6.5-1.5 1.5-8-8 8-8z"),right:U("M8.5 18.5 15 12 8.5 5.5 10 4l8 8-8 8z"),del:U("M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"),down:U("M5 20h14v-2H5zM12 16l5-5-1.4-1.4L13 12.2V4h-2v8.2L8.4 9.6 7 11z"),code:U("M8.6 16.6L4 12l4.6-4.6L7.2 6 1.2 12l6 6zm6.8 0L20 12l-4.6-4.6L16.8 6l6 6-6 6z"),link:U("M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM7.8 17.7a3 3 0 0 1-4.2-4.2l2.8-2.8 1.4 1.4-2.8 2.8a1 1 0 0 0 1.4 1.4l2.8-2.8 1.4 1.4zm8.5-6.4l-1.4-1.4 2.8-2.8a1 1 0 0 0-1.4-1.4l-2.8 2.8-1.4-1.4 2.8-2.8a3 3 0 0 1 4.2 4.2z"),eye:U("M1.5 12C4.3 7.7 7.8 5.5 12 5.5s7.7 2.2 10.5 6.5c-2.8 4.3-6.3 6.5-10.5 6.5S4.3 16.3 1.5 12zM12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8z","evenodd"),mouth:U("M2 8.5l3.3 3.3L8.7 8.5l3.3 3.3 3.3-3.3 3.4 3.3L22 8.5V12l-3.3 3.5-3.4-3.3-3.3 3.3-3.3-3.3-3.4 3.3L2 12z"),heart:U("M12 21s-7.5-4.6-9.6-9.2C1 8.6 3 5 6.6 5c2.2 0 3.6 1.2 4.4 2.4h2C13.8 6.2 15.2 5 17.4 5 21 5 23 8.6 21.6 11.8 19.5 16.4 12 21 12 21z"),send:U("M3 20.5V14l11-2-11-2V3.5L22 12z")},Pt=`
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
.anim-gen-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
.anim-gen-row .btn { border-radius: 12px; min-height: 44px; padding: 8px 6px; }
.anim-gen-row .btn svg { width: 22px; height: 22px; color: var(--cyan); }
.anim-gen-row .btn[data-gen="boop"] svg { color: var(--pink); }
`;async function Tt(r){let{state:o,editor:i,animator:d,toast:l,track:y,F:s,A:x,S:$,heads:p,isBusy:g,onFaceShown:w}=r,{W:m,H:f,PALETTE:b}=s,v=new URLSearchParams(location.search),h=(e,n=document)=>n.querySelector(e),M={get(e){try{let n=localStorage.getItem(e);return n?JSON.parse(n):null}catch{return null}},set(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch{}}},k=new Set,_=(e,n)=>{let a=e+(n?JSON.stringify(n):"");k.has(a)||(k.add(a),y("anim",{action:e,...n}))},X=1,G=e=>Math.max(ye,Math.min(we,Math.round((+e||ve)/10)*10)),I=(e,n=ve)=>({id:X++,face:e.slice(),ms:G(n)}),t={frames:[I(o.face)],cur:0,mode:"loop",onion:!0,playing:!1},E=null,B=()=>{t.frames[t.cur].face.set(o.face)},K=()=>Ye(t.frames.length,t.mode),ce=()=>K().reduce((e,n)=>e+t.frames[n].ms,0),W=()=>{i.onion=t.onion&&!t.playing&&t.cur>0?t.frames[t.cur-1].face:null},Me=document.createElement("style");Me.textContent=Pt,document.head.appendChild(Me);let Z=document.createElement("section");Z.className="anim",Z.id="anim",Z.setAttribute("aria-label","Animation"),Z.innerHTML=`
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
      <label class="anim-ms">Frame time <input type="number" id="animMs" min="${ye}" max="${we}" step="10" inputmode="numeric" aria-label="Frame time in milliseconds"> ms</label>
      <button class="btn chip" id="animAll" title="Give every frame this time">Same for all</button>
      <div class="seg" id="animMode" role="group" aria-label="Playback">
        <button data-v="loop" title="1, 2, 3, 1, 2, 3...">Loop</button>
        <button data-v="pingpong" title="1, 2, 3, 2, 1, 2...">Ping-pong</button>
      </div>
      <button class="btn chip" id="animOnion" aria-pressed="true" title="Show the previous frame faintly while you draw">Onion skin</button>
    </div>`,h("#animSlot").appendChild(Z);let D=h("#animStrip"),z=document.createElement("button");z.className="btn pill",z.id="btnAnimPlay",z.setAttribute("aria-pressed","false"),z.title="Play the animation (Enter)",z.innerHTML=`${L.play}<span>Play</span>`,h("#btnReset").before(z);let Y=document.createElement("div");Y.className="anim-exports",Y.id="animExports",Y.innerHTML=`
    <h2>Animation</h2>
    <div class="btns">
      <button class="btn big" id="animGif" data-umami-event="export" data-umami-event-type="gif" title="One pixel per LED, every frame with its time: ESP32 AnimatedGIF, Matrix Portal, CircuitPython gifio">${L.down}GIF 128\xD732</button>
      <button class="btn big" id="animZip" data-umami-event="export" data-umami-event-type="png-zip" title="A PNG per frame, sprite sheets in PNG and BMP, the times and a README">${L.down}PNG frames (ZIP)</button>
      <button class="btn big" id="animC" data-umami-event="export" data-umami-event-type="c-anim" title="RGB565 frames with order and times, for ESP32 with Adafruit GFX or the HUB75 DMA library">${L.code}C frames</button>
      <button class="btn big" id="animMax" data-umami-event="export" data-umami-event-type="max7219-anim" disabled>${L.code}MAX7219 frames</button>
      <button class="btn big" id="animLink" data-umami-event="share" data-umami-event-type="anim-link" title="Opens this page with your animation playing (up to 2000 characters)">${L.link}Animation link</button>
    </div>`;let T=e=>Y.querySelector(e);function $e(e,n){e.width!==m*2&&(e.width=m*2,e.height=f*2);let c=e.getContext("2d");c.fillStyle="#07050d",c.fillRect(0,0,e.width,e.height);let u=new Map;for(let P=0;P<m*f;P++){let C=n[P];C&&(u.has(C)||u.set(C,[]),u.get(C).push(P))}for(let[P,C]of u){c.fillStyle=`rgb(${b[P].join(",")})`;for(let H of C)c.fillRect(H%m*2,Math.floor(H/m)*2,2-.35,2-.35)}}let j=[];function V(){t.cur=Math.max(0,Math.min(t.frames.length-1,t.cur)),D.textContent="",j=t.frames.map((e,n)=>{let a=document.createElement("button");a.type="button",a.className="anim-frame";let c=document.createElement("canvas");$e(c,e.face);let u=document.createElement("span");return a.append(c,u),a.addEventListener("click",()=>ne(n)),D.appendChild(a),{b:a,cv:c,lab:u}}),R(),me(),S()}function me(){t.frames.forEach((n,a)=>{let c=j[a];c&&(c.lab.innerHTML=`<b>${a+1}</b>${n.ms} ms`,c.b.setAttribute("aria-label",`Frame ${a+1} of ${t.frames.length}, ${n.ms} milliseconds`))});let e=t.frames.length;h("#animInfo").textContent=e===1?"1 frame":`${e} frames \xB7 ${(ce()/1e3).toFixed(ce()<1e4?2:1)} s`,r.onFrames&&r.onFrames(e)}function _e(e){let n=j[e];if(!n)return;let a=n.b.offsetLeft-D.offsetLeft,c=a+n.b.offsetWidth;a<D.scrollLeft?D.scrollLeft=a-4:c>D.scrollLeft+D.clientWidth&&(D.scrollLeft=c-D.clientWidth+4)}function R(){j.forEach((e,n)=>e.b.setAttribute("aria-pressed",String(n===t.cur&&!t.playing))),_e(t.cur)}let te=-1;function Ee(e){te>=0&&j[te]&&j[te].b.classList.remove("playing"),te=e,e>=0&&j[e]&&(j[e].b.classList.add("playing"),_e(e))}function S(){let e=t.frames.length;h("#animDel").disabled=e<2,h("#animLeft").disabled=t.cur===0,h("#animRight").disabled=t.cur>=e-1,h("#animAdd").disabled=e>=le;let n=h("#animMs");document.activeElement!==n&&(n.value=t.frames[t.cur].ms),h("#animMode").querySelectorAll("button").forEach(a=>a.setAttribute("aria-pressed",String(a.dataset.v===t.mode))),h("#animOnion").setAttribute("aria-pressed",String(t.onion)),z.hidden=e<2;for(let a of[h("#animPlay"),z])a.setAttribute("aria-pressed",String(t.playing)),a.querySelector("svg").outerHTML=t.playing?L.stop:L.play,a.querySelector("span").textContent=t.playing?"Stop":"Play";h("#animPlay").disabled=e<2,de()}function de(){let e=p&&p.HEADS[o.head];T("#animMax").disabled=!(e&&e.modules),T("#animMax").title=e&&e.modules?`${e.modules.length} modules \xD7 8 bytes per frame`:"Needs a MAX7219 head"}let fe=0;function dt(){fe||(fe=setTimeout(()=>{fe=0;let e=j[t.cur];e&&$e(e.cv,t.frames[t.cur].face)},120))}let Ae=0;function O(){clearTimeout(Ae),Ae=setTimeout(async()=>{try{let e=await be({frames:t.frames.map(n=>n.face),ms:t.frames.map(n=>n.ms),mode:t.mode},m,f);M.set(ct,{code:e,cur:t.cur,onion:t.onion})}catch(e){console.warn(e)}},400)}function N(e){t.cur=Math.max(0,Math.min(t.frames.length-1,e)),o.face.set(t.frames[t.cur].face),i.show=null,W(),i.draw(),w()}function ne(e){t.playing&&F(!1),B(),N(e),R(),S(),O()}function pe(){return{kind:"anim",frames:t.frames.map(e=>({id:e.id,face:e.face.slice(),ms:e.ms})),cur:t.cur,mode:t.mode}}function q(){B(),i.undoStack.push(pe()),i.undoStack.length>mt&&i.undoStack.shift(),i.redoStack.length=0}function ft(e){t.frames=e.frames.map(n=>({id:n.id,face:n.face.slice(),ms:n.ms})),t.mode=e.mode,t.cur=e.cur,V(),N(e.cur),R(),S(),O()}function ke(){if(t.frames.length>=le){l(`${le} frames at most.`);return}t.playing&&F(!1),q(),t.frames.splice(t.cur+1,0,I(o.face,t.frames[t.cur].ms)),t.cur+=1,V(),N(t.cur),R(),S(),O(),t.frames.length===2&&l("New frame: draw what changes, then Play"),_("add")}function Se(){t.frames.length<2||(t.playing&&F(!1),q(),t.frames.splice(t.cur,1),t.cur=Math.min(t.cur,t.frames.length-1),V(),N(t.cur),R(),S(),O(),l("Frame deleted"),_("delete"))}function ue(e){let n=t.cur,a=n+e;a<0||a>=t.frames.length||(t.playing&&F(!1),q(),[t.frames[n],t.frames[a]]=[t.frames[a],t.frames[n]],t.cur=a,V(),W(),i.draw(),O(),_("move"))}function he(e,n=!1){let a=G(e),c=n?t.frames:[t.frames[t.cur]];if(c.every(u=>u.ms===a)){S();return}q();for(let u of c)u.ms=a;me(),S(),O(),_(n?"time-all":"time")}function Le(e){e!=="loop"&&e!=="pingpong"||(t.mode=e,t.playing&&(E.order=K(),E.step=-1),me(),S(),O(),_("mode",{mode:e}))}function Pe(e){t.onion=!!e,W(),i.draw(),S(),O(),_("onion")}let Ue={blink:qe,talk:Ze,boop:Ke},pt={blink:"Blink needs eyes",talk:"Talk needs a mouth"};function Re(e){if(!Ue[e])return!1;t.playing&&F(!1),B();let n=Ue[e](t.frames[t.cur].face,x);if(!n)return l(pt[e]),!1;q(),t.frames=n.frames.map(c=>I(c.face,c.ms)),t.mode=n.mode,t.cur=0,V(),N(0),R(),S(),O();let a=e[0].toUpperCase()+e.slice(1);return l(`${a}: ${t.frames.length} frames`),_("gen",{gen:e}),ae(),!0}function ae(e=!0){if(t.frames.length<2){l("Add a frame first");return}t.playing||(B(),E={order:K(),t0:null,step:-1},t.playing=!0,W(),R(),S(),e&&_("play"))}function F(e=!0){if(!t.playing)return;let n=E&&E.step>=0?E.order[E.step]:t.cur;t.playing=!1,E=null,Ee(-1),i.show=null,e&&n!==t.cur?N(n):(W(),i.draw()),R(),S()}let oe=()=>t.playing?F():ae();function ut(e){E.t0===null&&(E.t0=e);let n=E.order.map(u=>t.frames[u].ms),a=n.reduce((u,P)=>u+P,0),c=(e-E.t0)*1e3%a;for(let u=0;u<n.length;u++){if(c<n[u])return u;c-=n[u]}return n.length-1}let Oe=d.update.bind(d);d.update=(e,n)=>{if(!t.playing)return Oe(e,n);let a=ut(n.now),c=t.frames[E.order[a]].face;return a!==E.step&&(E.step=a,i.show=c,i.draw(),Ee(E.order[a])),Oe(c,{...n,mouth:"off",blink:!1})},h("#gridWrap").addEventListener("pointerdown",()=>{t.playing&&F()},!0);let Te=e=>(e.frameId=t.frames[t.cur].id,e);i.snapshot=()=>{i.undoStack.push(Te(o.face.slice())),i.undoStack.length>mt&&i.undoStack.shift(),i.redoStack.length=0};let Ce=(e,n)=>{let a=e.pop();if(!a)return;if(t.playing&&F(!1),a.kind==="anim"){n.push(pe()),ft(a);return}let c=a.frameId===void 0?t.cur:t.frames.findIndex(u=>u.id===a.frameId);c<0||(c!==t.cur&&(B(),N(c),R(),S()),n.push(Te(o.face.slice())),o.face.set(a),i._changed())};i.undo=()=>Ce(i.undoStack,i.redoStack),i.redo=()=>Ce(i.redoStack,i.undoStack);let Ge=i.onChange;i.onChange=()=>{B(),dt(),O(),Ge&&Ge()},h("#animPlay").addEventListener("click",oe),z.addEventListener("click",oe),h("#animAdd").addEventListener("click",ke),h("#animDel").addEventListener("click",Se),h("#animLeft").addEventListener("click",()=>ue(-1)),h("#animRight").addEventListener("click",()=>ue(1)),h("#animMs").addEventListener("change",e=>he(e.target.value)),h("#animMs").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),e.target.blur())}),h("#animAll").addEventListener("click",()=>{he(h("#animMs").value,!0),l(`Every frame: ${t.frames[t.cur].ms} ms`)}),h("#animMode").querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>Le(e.dataset.v))),h("#animOnion").addEventListener("click",()=>Pe(!t.onion)),Z.querySelectorAll("[data-gen]").forEach(e=>e.addEventListener("click",()=>Re(e.dataset.gen)));let Ie=h("#headSel");Ie&&Ie.addEventListener("change",de),window.addEventListener("keydown",e=>{if(g()||e.ctrlKey||e.metaKey||e.altKey)return;let n=document.activeElement;!(!n||n===document.body||D.contains(n))||e.target.closest&&e.target.closest("input, textarea, select")||(e.key==="Enter"&&(!n||n===document.body)?(e.preventDefault(),oe()):e.key==="ArrowLeft"&&t.cur>0?(e.preventDefault(),ne(t.cur-1)):e.key==="ArrowRight"&&t.cur<t.frames.length-1&&(e.preventDefault(),ne(t.cur+1)))});let ie=e=>!!(r.inAppStop&&r.inAppStop(e)),re=(e,n,a,c)=>{let u=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:n});document.body.appendChild(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(u.href),4e3),l(a),r.exported&&r.exported(c)},J=()=>{B();let e=K();return{o:e,ms:e.map(n=>t.frames[n].ms),faces:t.frames.map(n=>n.face)}},ht=e=>{let n=new Uint8Array(m*f*3);for(let a=0;a<m*f;a++){let c=b[e[a]];c&&(n[a*3]=c[0],n[a*3+1]=c[1],n[a*3+2]=c[2])}return n};async function De(e){let n=document.createElement("canvas");n.width=m,n.height=f*e.length;let a=n.getContext("2d"),c=a.createImageData(m,f*e.length);e.forEach((P,C)=>{for(let H=0;H<m*f;H++){let ee=b[P[H]]||[0,0,0],A=(C*m*f+H)*4;c.data[A]=ee[0],c.data[A+1]=ee[1],c.data[A+2]=ee[2],c.data[A+3]=255}}),a.putImageData(c,0,0);let u=await $.canvasToBlob(n);return new Uint8Array(await u.arrayBuffer())}function Ne(){let{o:e,ms:n,faces:a}=J();return Qe(e.map(c=>a[c]),n.map(c=>c/10),m,f,b)}function gt(){if(ie("gif"))return;let{o:e}=J();re(new Blob([Ne()],{type:"image/gif"}),"snootrix-anim-128x32.gif",`GIF saved: ${e.length} frames`,T("#animGif"))}async function Fe(){let{o:e,ms:n,faces:a}=J(),c=a.length,u=[],P=A=>String(A+1).padStart(2,"0");for(let A=0;A<c;A++)u.push({name:`snootrix-anim/frames/frame-${P(A)}.png`,data:await De([a[A]])});u.push({name:"snootrix-anim/snootrix_anim_sheet.png",data:await De(a)});let C=new Uint8Array(m*f*c*3);a.forEach((A,xe)=>C.set(ht(A),xe*m*f*3)),u.push({name:"snootrix-anim/snootrix_anim_sheet.bmp",data:new Uint8Array(await $.encodeBMP24(C,m,f*c).arrayBuffer())});let H={editor:"https://zarmat99.github.io/snootrix/",width:m,height:f,frames:t.frames.map((A,xe)=>({file:`frames/frame-${P(xe)}.png`,ms:A.ms})),mode:t.mode,loop:{order:e,ms:n},sheet:{png:"snootrix_anim_sheet.png",bmp:"snootrix_anim_sheet.bmp",tile_width:m,tile_height:f,frames:c}},ee=A=>new TextEncoder().encode(A.replace(/\n/g,`\r
`));return u.push({name:"snootrix-anim/animation.json",data:new TextEncoder().encode(JSON.stringify(H,null,2)+`
`)}),u.push({name:"snootrix-anim/matrixportal_code.py",data:new TextEncoder().encode(wt(e,n))}),u.push({name:"snootrix-anim/README.txt",data:ee(vt(c,e,n))}),et(u)}async function xt(){if(ie("png-zip"))return;let e=T("#animZip");e.disabled=!0;try{let n=t.frames.length;re(new Blob([await Fe()],{type:"application/zip"}),"snootrix-anim-frames.zip",`ZIP saved: ${n} frames`,e)}catch(n){console.error(n),l("Could not make the ZIP")}finally{e.disabled=!1}}function Be(){let{o:e,ms:n,faces:a}=J();return nt(a,e,n,m,f,b,{mode:t.mode})}function bt(){ie("c-anim")||re(new Blob([Be()],{type:"text/x-c"}),"snootrix_anim.h",`C header saved: ${t.frames.length} frames`,T("#animC"))}function ze(){let e=p&&p.HEADS[o.head];if(!e||!e.modules)return null;let{o:n,ms:a,faces:c}=J();return at(c.map(u=>p.moduleLeds(e,u)),n,a,e.label,{chain:e.chainNote||"",mode:t.mode})}function yt(){let e=p&&p.HEADS[o.head];if(!e||!e.modules||ie("max7219-anim"))return;let n=ze();n&&re(new Blob([n],{type:"text/x-c"}),"snootrix_max7219_anim.h",`MAX7219 header saved: ${t.frames.length} frames`,T("#animMax"))}async function je(){B();let e=await be({frames:t.frames.map(a=>a.face),ms:t.frames.map(a=>a.ms),mode:t.mode,colorMode:o.colorMode},m,f),n=o.head&&o.head!=="snootrix"?`head=${encodeURIComponent(o.head)}`:"";return`${location.origin}${location.pathname}${n?`?${n}`:""}#a=${e}`}async function He(){let e=await je();if(e.length>lt)return l("Too long for a link: share the GIF."),e;try{await navigator.clipboard.writeText(e),l("Link copied")}catch{prompt("Copy this link:",e)}return e}T("#animGif").addEventListener("click",gt),T("#animZip").addEventListener("click",xt),T("#animC").addEventListener("click",bt),T("#animMax").addEventListener("click",yt),T("#animLink").addEventListener("click",He);function wt(e,n){return`# Adafruit Matrix Portal (M4 or S3) with CircuitPython 9 or newer: plays snootrix_anim_sheet.bmp on two 64x32
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
`}function vt(e,n,a){return`SNOOTRIX face editor - animation frames
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
`}async function Xe(e){let n=await st(e,m,f);return{frames:n.frames.map((a,c)=>I(a,n.ms[c])),mode:n.mode,colorMode:n.colorMode}}let ge=new URLSearchParams(location.hash.slice(1)),Q=M.get(ct);if(Q&&Q.code)try{let e=await Xe(Q.code);t.frames=e.frames,t.mode=e.mode,t.cur=Math.max(0,Math.min(e.frames.length-1,Q.cur|0)),t.onion=Q.onion!==!1,ge.get("f")&&t.frames.length>1?(i.undoStack.push(pe()),t.frames=[I(o.face,t.frames[t.cur].ms)],t.cur=0):B()}catch(e){console.warn("saved animation not readable",e)}if(V(),N(t.cur),R(),S(),ge.get("a"))try{let e=await Xe(ge.get("a"));q(),t.frames=e.frames,t.mode=e.mode,t.cur=0,o.colorMode=e.colorMode,V(),N(0),R(),S(),O(),history.replaceState(null,"",location.pathname+location.search),setTimeout(()=>l("Shared animation loaded"),600),t.frames.length>1&&ae(),_("open-link")}catch(e){console.warn(e),l("This link is damaged")}let Ve={anim:t,get play(){return E},select:ne,addFrame:ke,deleteFrame:Se,move:ue,setMs:he,setMode:Le,setOnion:Pe,generate:Re,startPlay:ae,stopPlay:F,toggle:oe,order:K,loopMs:ce,linkUrl:je,copyLink:He,gifBytes:Ne,zipFiles:Fe,cText:Be,maxText:ze,exportsEl:Y,renderMax:de,load(e,n,a="loop"){t.playing&&F(!1),q(),t.frames=e.map((c,u)=>I(c,n[u]||ve)),t.mode=a==="pingpong"?"pingpong":"loop",t.cur=0,V(),N(0),R(),S(),O()},MAX_FRAMES:le,MS_MIN:ye,MS_MAX:we,LINK_MAX:lt};return v.has("debug")&&(window.__snootrixAnim=Ve),Ve}export{lt as LINK_MAX,le as MAX_FRAMES,we as MS_MAX,ye as MS_MIN,ve as MS_NEW,Tt as setupAnim};
