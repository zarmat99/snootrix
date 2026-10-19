var xe=(i,a)=>{for(let o=0;o<i.length;o++)if(i[o]!==a[o])return!1;return!0};function le(i){let a=[];for(let o of i){let c=a[a.length-1];c&&xe(c.face,o.face)?c.ms+=o.ms:a.push({face:o.face,ms:o.ms})}return a}var Ze={hold:2e3,steps:[[.4,40],[.75,40],[1,60],[.75,40],[.4,40]]};function We(i,a){if(xe(a.blinkFace(i,1),i))return null;let o=[{face:i.slice(),ms:Ze.hold}];for(let[c,s]of Ze.steps)o.push({face:a.blinkFace(i,c),ms:s});return{frames:le(o),mode:"loop"}}var qe={levels:[0,.3,.6,1],ms:70};function Ye(i,a){if(xe(a.mouthFace(i,1),i))return null;let o=qe.levels.map(c=>({face:c?a.mouthFace(i,c):i.slice(),ms:qe.ms}));return{frames:le(o),mode:"pingpong"}}var q={hold:1500,step:50,moving:.55};function Je(i,a){let o=[{face:i.slice(),ms:q.hold}],c=a.boopKeys&&a.boopKeys();if(c)return{frames:le([...o,...c.map(g=>({face:g.face.slice(),ms:g.ms}))]),mode:"loop"};let s=Math.round(q.moving*1e3/q.step);for(let g=0;g<=s;g++)o.push({face:a.boopFace(g*q.step/1e3),ms:q.step});return o[o.length-1].ms=Math.round(a.BOOP_TIME*1e3)-s*q.step,{frames:le(o),mode:"loop"}}var Qe="https://zarmat99.github.io/snootrix/",Et=(()=>{let i=new Uint32Array(256);for(let a=0;a<256;a++){let o=a;for(let c=0;c<8;c++)o=o&1?3988292384^o>>>1:o>>>1;i[a]=o>>>0}return i})();function At(i){let a=4294967295;for(let o=0;o<i.length;o++)a=Et[(a^i[o])&255]^a>>>8;return(a^4294967295)>>>0}function et(i,a){let o=[];for(let c=0;c<i;c++)o.push(c);if(a==="pingpong")for(let c=i-2;c>=1;c--)o.push(c);return o}var tt=i=>{let a=new Uint8Array(i.reduce((c,s)=>c+s.length,0)),o=0;for(let c of i)a.set(c,o),o+=c.length;return a};function St(i,a){let o=1<<a,c=o+1,s=a+1,g=c+1,l=new Map,x=[],$=0,u=0,b=f=>{for($|=f<<u,u+=s;u>=8;)x.push($&255),$>>>=8,u-=8};b(o);let w=i[0];for(let f=1;f<i.length;f++){let p=i[f],y=w*256+p,v=l.get(y);if(v!==void 0){w=v;continue}b(w),g===4096?(b(o),l=new Map,g=c+1,s=a+1):(g>=1<<s&&s++,l.set(y,g++)),w=p}return b(w),b(c),u>0&&x.push($&255),x}function nt(i,a,o,c,s){let g=[],l=u=>g.push(u&255),x=u=>{g.push(u&255,u>>8&255)},$=u=>{for(let b=0;b<u.length;b++)g.push(u.charCodeAt(b))};$("GIF89a"),x(o),x(c),l(243),l(0),l(0);for(let u=0;u<16;u++){let b=s[u]||[0,0,0];l(b[0]),l(b[1]),l(b[2])}return l(33),l(255),l(11),$("NETSCAPE2.0"),l(3),l(1),x(0),l(0),i.forEach((u,b)=>{l(33),l(249),l(4),l(4),x(Math.max(2,Math.min(65535,Math.round(a[b])))),l(0),l(0),l(44),x(0),x(0),x(o),x(c),l(0),l(4);let w=St(u,4);for(let f=0;f<w.length;f+=255){let p=Math.min(255,w.length-f);l(p);for(let y=0;y<p;y++)g.push(w[f+y])}l(0)}),l(59),Uint8Array.from(g)}function at(i,a=new Date){let o=(a.getHours()<<11|a.getMinutes()<<5|a.getSeconds()>>1)&65535,c=(Math.max(1980,a.getFullYear())-1980<<9|a.getMonth()+1<<5|a.getDate())&65535,s=[],g=[],l=0;for(let b of i){let w=Uint8Array.from(b.name,A=>A.charCodeAt(0)&127),f=b.data,p=At(f),y=new Uint8Array(30+w.length),v=new DataView(y.buffer);v.setUint32(0,67324752,!0),v.setUint16(4,20,!0),v.setUint16(6,0,!0),v.setUint16(8,0,!0),v.setUint16(10,o,!0),v.setUint16(12,c,!0),v.setUint32(14,p,!0),v.setUint32(18,f.length,!0),v.setUint32(22,f.length,!0),v.setUint16(26,w.length,!0),v.setUint16(28,0,!0),y.set(w,30),s.push(y,f);let d=new Uint8Array(46+w.length),M=new DataView(d.buffer);M.setUint32(0,33639248,!0),M.setUint16(4,20,!0),M.setUint16(6,20,!0),M.setUint16(8,0,!0),M.setUint16(10,0,!0),M.setUint16(12,o,!0),M.setUint16(14,c,!0),M.setUint32(16,p,!0),M.setUint32(20,f.length,!0),M.setUint32(24,f.length,!0),M.setUint16(28,w.length,!0),M.setUint32(42,l,!0),d.set(w,46),g.push(d),l+=y.length+f.length}let x=g.reduce((b,w)=>b+w.length,0),$=new Uint8Array(22),u=new DataView($.buffer);return u.setUint32(0,101010256,!0),u.setUint16(8,i.length,!0),u.setUint16(10,i.length,!0),u.setUint32(12,x,!0),u.setUint32(16,l,!0),tt([...s,...g,$])}var ot=(i,a)=>"0x"+i.toString(16).padStart(a,"0").toUpperCase(),Lt=i=>i?(i[0]&248)<<8|(i[1]&252)<<3|i[2]>>3:0,Pt=(i,a=16,o="  ")=>{let c=[];for(let s=0;s<i.length;s+=a)c.push(o+i.slice(s,s+a).join(", ")+",");return c.join(`
`)};function it(i,a,o,c,s,g,{name:l="snootrix_anim",mode:x="loop"}={}){let $=o.reduce((b,w)=>b+w,0),u=i.map((b,w)=>{let f=[];for(let p=0;p<c*s;p++)f.push(ot(Lt(g[b[p]]),4));return`  { // frame ${w+1}
${Pt(f,16,"    ")}
  },`}).join(`
`);return`// Visor animation exported from the free SNOOTRIX face editor: ${Qe}
// ${i.length} frames of ${c}x${s} pixels, one value per LED, RGB565, rows from the top, left panel first.
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
// Each frame takes ${c*s*2} bytes of flash.
#pragma once
#include <stdint.h>
#ifndef PROGMEM
#define PROGMEM
#endif
const uint16_t ${l}_w = ${c};
const uint16_t ${l}_h = ${s};
const uint16_t ${l}_frames = ${i.length};
const uint16_t ${l}_steps = ${a.length};
const uint8_t ${l}_order[${a.length}] PROGMEM = { ${a.join(", ")} };
const uint16_t ${l}_ms[${a.length}] PROGMEM = { ${o.join(", ")} };
const uint16_t ${l}[${i.length}][${c*s}] PROGMEM = {
${u}
};
`}function rt(i,a,o,c,{name:s="snootrix_max7219_anim",chain:g="",mode:l="loop"}={}){let x=i[0]?i[0].length:0,$=p=>p===0?"right":"left",u=(p,y)=>p.panel<0?`${y+1}: ${p.name}`:`${$(p.panel)} ${p.name}`,b=o.reduce((p,y)=>p+y,0),w=i.map((p,y)=>{let v=p.map((d,M)=>`    { ${d.rows.map(_=>_.reduce((j,R,O)=>j|(R?128>>O:0),0)).map(_=>ot(_,2)).join(", ")} },  // ${u(d,M)}`);return`  { // frame ${y+1}
${v.join(`
`)}
  },`}).join(`
`),f=g?`
// ${g.replace(/\n/g,`
// `)}`:`
// Modules in the order listed in frame 1 (sides as seen from the front; mouth modules from the snout outwards).`;return`// Visor animation for MAX7219 8x8 modules, exported from the free SNOOTRIX face editor: ${Qe}
// Head: ${c}. ${i.length} frames x ${x} modules x 8 bytes: rows from the top, bit 7 = the leftmost LED
// as seen from the front of the head (for a module on a cheek: as seen from outside, looking at it).${f}
// One loop = ${a.length} steps (${l==="pingpong"?"ping-pong":"loop"}), ${b} ms: step s shows frame ${s}_order[s] for ${s}_ms[s] ms.
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
const uint16_t ${s}_frames = ${i.length};
const uint16_t ${s}_steps = ${a.length};
const uint8_t ${s}_order[${a.length}] PROGMEM = { ${a.join(", ")} };
const uint16_t ${s}_ms[${a.length}] PROGMEM = { ${o.join(", ")} };
const uint8_t ${s}[${i.length}][${x}][8] PROGMEM = {
${w}
};
`}var st=1,ce=64,lt=["drawn","rainbow","pulse"];function Tt(i){let a="";for(let o=0;o<i.length;o++)a+=String.fromCharCode(i[o]);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Ut(i){let a=atob(i.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(a,o=>o.charCodeAt(0))}async function ct(i,a){let o=new Response(new Blob([i]).stream().pipeThrough(new a("deflate-raw")));return new Uint8Array(await o.arrayBuffer())}var It=(i,a,o)=>{let c=a/2;for(let s=0;s<o;s++)for(let g=0;g<c;g++)if(i[s*a+c+g]!==i[s*a+c-1-g])return!1;return!0};async function ye({frames:i,ms:a,mode:o,colorMode:c="drawn"},s,g){if(!i.length||i.length>ce)throw new Error("frame count");let l=i.every(v=>It(v,s,g)),x=l?s/2:s,$=l?s/2:0,u=x*g,b=new Uint8Array(1+2*i.length+i.length*Math.ceil(u/2));b[0]=i.length,a.forEach((v,d)=>{b[1+2*d]=v&255,b[2+2*d]=v>>8&255});let w=1+2*i.length;i.forEach((v,d)=>{let M=i[d-1];for(let A=0;A<u;A++){let _=Math.floor(A/x)*s+$+A%x,j=(v[_]^(M?M[_]:0))&15;b[w+(A>>1)]|=j<<(A&1)*4}w+=Math.ceil(u/2)});let f=b,p=!1;if(typeof CompressionStream<"u")try{f=await ct(b,CompressionStream),p=!0}catch{f=b}let y=(l?1:0)|(p?2:0)|Math.max(0,lt.indexOf(c))<<2|(o==="pingpong"?16:0);return Tt(tt([Uint8Array.of(st,y),f]))}async function mt(i,a,o){let c=Ut(i);if(c[0]!==st)throw new Error("unknown animation format");let s=c[1],g=!!(s&1),l=c.subarray(2);s&2&&(l=await ct(l,DecompressionStream));let x=l[0];if(!x||x>ce)throw new Error("bad frame count");let $=g?a/2:a,u=$*o,b=Math.ceil(u/2);if(l.length<1+2*x+x*b)throw new Error("animation link too short");let w=[];for(let y=0;y<x;y++)w.push(l[1+2*y]|l[2+2*y]<<8);let f=[],p=1+2*x;for(let y=0;y<x;y++){let v=new Uint8Array(a*o),d=f[y-1];for(let M=0;M<u;M++){let A=Math.floor(M/$),_=M%$,j=l[p+(M>>1)]>>(M&1)*4&15;if(g){let R=A*a+a/2+_,O=A*a+a/2-1-_;v[R]=v[O]=j^(d?d[R]:0)}else{let R=A*a+_;v[R]=j^(d?d[R]:0)}}f.push(v),p+=b}return{frames:f,ms:w,mode:s&16?"pingpong":"loop",colorMode:lt[s>>2&3]||"drawn"}}var me=ce,we=20,ve=1e4,dt=100,ft=2e3,pt="snootrix.anim.v1",ut=80,T=(i,a="")=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path${a?` fill-rule="${a}"`:""} d="${i}"/></svg>`,S={play:T("M8 5v14l11-7z"),stop:T("M7 7h10v10H7z"),add:T("M3 3h12v2H5v10H3zM7 7h14v14H7zM9 9v10h10V9zM13 11h2v2h2v2h-2v2h-2v-2h-2v-2h2z","evenodd"),left:T("M15.5 5.5 9 12l6.5 6.5-1.5 1.5-8-8 8-8z"),right:T("M8.5 18.5 15 12 8.5 5.5 10 4l8 8-8 8z"),del:T("M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"),down:T("M5 20h14v-2H5zM12 16l5-5-1.4-1.4L13 12.2V4h-2v8.2L8.4 9.6 7 11z"),code:T("M8.6 16.6L4 12l4.6-4.6L7.2 6 1.2 12l6 6zm6.8 0L20 12l-4.6-4.6L16.8 6l6 6-6 6z"),link:T("M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM7.8 17.7a3 3 0 0 1-4.2-4.2l2.8-2.8 1.4 1.4-2.8 2.8a1 1 0 0 0 1.4 1.4l2.8-2.8 1.4 1.4zm8.5-6.4l-1.4-1.4 2.8-2.8a1 1 0 0 0-1.4-1.4l-2.8 2.8-1.4-1.4 2.8-2.8a3 3 0 0 1 4.2 4.2z"),eye:T("M1.5 12C4.3 7.7 7.8 5.5 12 5.5s7.7 2.2 10.5 6.5c-2.8 4.3-6.3 6.5-10.5 6.5S4.3 16.3 1.5 12zM12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8z","evenodd"),mouth:T("M2 8.5l3.3 3.3L8.7 8.5l3.3 3.3 3.3-3.3 3.4 3.3L22 8.5V12l-3.3 3.5-3.4-3.3-3.3 3.3-3.3-3.3-3.4 3.3L2 12z"),heart:T("M12 21s-7.5-4.6-9.6-9.2C1 8.6 3 5 6.6 5c2.2 0 3.6 1.2 4.4 2.4h2C13.8 6.2 15.2 5 17.4 5 21 5 23 8.6 21.6 11.8 19.5 16.4 12 21 12 21z")},Gt=`
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
`;async function Bt(i){let{state:a,editor:o,animator:c,toast:s,track:g,F:l,A:x,S:$,heads:u,isBusy:b,onFaceShown:w}=i,{W:f,H:p,PALETTE:y}=l,v=new URLSearchParams(location.search),d=(e,n=document)=>n.querySelector(e),M={get(e){try{let n=localStorage.getItem(e);return n?JSON.parse(n):null}catch{return null}},set(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch{}}},A=new Set,_=(e,n)=>{let r=e+(n?JSON.stringify(n):"");A.has(r)||(A.add(r),g("anim",{action:e,...n}))},j=1,R=e=>Math.max(we,Math.min(ve,Math.round((+e||dt)/10)*10)),O=(e,n=dt)=>({id:j++,face:e.slice(),ms:R(n)}),t={frames:[O(a.face)],cur:0,mode:"loop",onion:!0,playing:!1},k=null,F=()=>{t.frames[t.cur].face.set(a.face)},K=()=>et(t.frames.length,t.mode),te=()=>K().reduce((e,n)=>e+t.frames[n].ms,0),W=()=>{o.onion=t.onion&&!t.playing&&t.cur>0?t.frames[t.cur-1].face:null},Me=document.createElement("style");Me.textContent=Gt,document.head.appendChild(Me);let V=document.createElement("section");V.className="anim",V.id="anim",V.setAttribute("aria-label","Animation"),V.innerHTML=`
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
      <label class="anim-ms">Frame time <input type="number" id="animMs" min="${we}" max="${ve}" step="10" inputmode="numeric" aria-label="Frame time in milliseconds"> ms</label>
      <button class="btn chip" id="animAll" title="Give every frame this time">Same for all</button>
      <div class="seg" id="animMode" role="group" aria-label="Playback">
        <button data-v="loop" title="1, 2, 3, 1, 2, 3...">Loop</button>
        <button data-v="pingpong" title="1, 2, 3, 2, 1, 2...">Ping-pong</button>
      </div>
      <button class="btn chip" id="animOnion" aria-pressed="true" title="Show the previous frame faintly while you draw">Onion skin</button>
    </div>
    <p class="small muted" id="animHint">Tap a frame to draw on it; the copy button adds the next one. Undo works on frames too. <button type="button" class="linkbtn" id="animToExports">Export for your firmware</button></p>`,d("#gridHint").after(V);let C=d("#animStrip"),B=document.createElement("button");B.className="btn pill",B.id="btnAnimPlay",B.setAttribute("aria-pressed","false"),B.title="Play the animation (Enter)",B.innerHTML=`${S.play}<span>Play</span>`,d("#btnReset").before(B);let Y=document.createElement("div");Y.className="anim-exports",Y.id="animExports",Y.innerHTML=`
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
    <p class="small muted" id="animLinkInfo">The link opens this editor with your animation playing, when it is short enough for a chat (2000 characters); otherwise share the GIF.</p>`,d("#maxNote").after(Y);function $e(e,n){e.width!==f*2&&(e.width=f*2,e.height=p*2);let m=e.getContext("2d");m.fillStyle="#07050d",m.fillRect(0,0,e.width,e.height);let h=new Map;for(let P=0;P<f*p;P++){let G=n[P];G&&(h.has(G)||h.set(G,[]),h.get(G).push(P))}for(let[P,G]of h){m.fillStyle=`rgb(${y[P].join(",")})`;for(let H of G)m.fillRect(H%f*2,Math.floor(H/f)*2,2-.35,2-.35)}}let D=[];function X(){t.cur=Math.max(0,Math.min(t.frames.length-1,t.cur)),C.textContent="",D=t.frames.map((e,n)=>{let r=document.createElement("button");r.type="button",r.className="anim-frame";let m=document.createElement("canvas");$e(m,e.face);let h=document.createElement("span");return r.append(m,h),r.addEventListener("click",()=>ae(n)),C.appendChild(r),{b:r,cv:m,lab:h}}),U(),de(),L()}function de(){t.frames.forEach((n,r)=>{let m=D[r];m&&(m.lab.innerHTML=`<b>${r+1}</b>${n.ms} ms`,m.b.setAttribute("aria-label",`Frame ${r+1} of ${t.frames.length}, ${n.ms} milliseconds`))});let e=t.frames.length;d("#animInfo").textContent=e===1?"1 frame":`${e} frames \xB7 ${(te()/1e3).toFixed(te()<1e4?2:1)} s ${t.mode==="pingpong"?"ping-pong":"loop"}`,d("#animExpInfo").textContent=e===1?"Your animation has 1 frame: add frames under the grid, or make them with Blink, Talk or Boop.":`Your animation: ${e} frames, ${K().length} steps per ${t.mode==="pingpong"?"ping-pong":"loop"}, ${(te()/1e3).toFixed(2)} s.`}function _e(e){let n=D[e];if(!n)return;let r=n.b.offsetLeft-C.offsetLeft,m=r+n.b.offsetWidth;r<C.scrollLeft?C.scrollLeft=r-4:m>C.scrollLeft+C.clientWidth&&(C.scrollLeft=m-C.clientWidth+4)}function U(){D.forEach((e,n)=>e.b.setAttribute("aria-pressed",String(n===t.cur&&!t.playing))),_e(t.cur)}let ne=-1;function ke(e){ne>=0&&D[ne]&&D[ne].b.classList.remove("playing"),ne=e,e>=0&&D[e]&&(D[e].b.classList.add("playing"),_e(e))}function L(){let e=t.frames.length;d("#animDel").disabled=e<2,d("#animLeft").disabled=t.cur===0,d("#animRight").disabled=t.cur>=e-1,d("#animAdd").disabled=e>=me;let n=d("#animMs");document.activeElement!==n&&(n.value=t.frames[t.cur].ms),d("#animMode").querySelectorAll("button").forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.v===t.mode))),d("#animOnion").setAttribute("aria-pressed",String(t.onion)),B.hidden=e<2;for(let r of[d("#animPlay"),B])r.setAttribute("aria-pressed",String(t.playing)),r.querySelector("svg").outerHTML=t.playing?S.stop:S.play,r.querySelector("span").textContent=t.playing?"Stop":"Play";d("#animPlay").disabled=e<2;for(let r of["#animGif","#animZip","#animC","#animLink"])d(r).disabled=!1;Ee()}function Ee(){let e=u&&u.HEADS[a.head];d("#animMax").disabled=!(e&&e.modules),d("#animMax").title=e&&e.modules?`${e.modules.length} modules \xD7 8 bytes per frame`:"Needs a head with MAX7219 modules (menu over the 3D head)"}let fe=0;function ht(){fe||(fe=setTimeout(()=>{fe=0;let e=D[t.cur];e&&$e(e.cv,t.frames[t.cur].face)},120))}let Ae=0;function I(){clearTimeout(Ae),Ae=setTimeout(async()=>{try{let e=await ye({frames:t.frames.map(n=>n.face),ms:t.frames.map(n=>n.ms),mode:t.mode},f,p);M.set(pt,{code:e,cur:t.cur,onion:t.onion})}catch(e){console.warn(e)}},400)}function N(e){t.cur=Math.max(0,Math.min(t.frames.length-1,e)),a.face.set(t.frames[t.cur].face),o.show=null,W(),o.draw(),w()}function ae(e){t.playing&&z(!1),F(),N(e),U(),L(),I()}function pe(){return{kind:"anim",frames:t.frames.map(e=>({id:e.id,face:e.face.slice(),ms:e.ms})),cur:t.cur,mode:t.mode}}function Z(){F(),o.undoStack.push(pe()),o.undoStack.length>ut&&o.undoStack.shift(),o.redoStack.length=0}function gt(e){t.frames=e.frames.map(n=>({id:n.id,face:n.face.slice(),ms:n.ms})),t.mode=e.mode,t.cur=e.cur,X(),N(e.cur),U(),L(),I()}function Se(){if(t.frames.length>=me){s(`${me} frames at most.`);return}t.playing&&z(!1),Z(),t.frames.splice(t.cur+1,0,O(a.face,t.frames[t.cur].ms)),t.cur+=1,X(),N(t.cur),U(),L(),I(),t.frames.length===2&&s("New frame: a copy of the first. Draw what changes, then press Play."),_("add")}function Le(){t.frames.length<2||(t.playing&&z(!1),Z(),t.frames.splice(t.cur,1),t.cur=Math.min(t.cur,t.frames.length-1),X(),N(t.cur),U(),L(),I(),s("Frame deleted. Undo brings it back."),_("delete"))}function ue(e){let n=t.cur,r=n+e;r<0||r>=t.frames.length||(t.playing&&z(!1),Z(),[t.frames[n],t.frames[r]]=[t.frames[r],t.frames[n]],t.cur=r,X(),W(),o.draw(),I(),_("move"))}function he(e,n=!1){let r=R(e),m=n?t.frames:[t.frames[t.cur]];if(m.every(h=>h.ms===r)){L();return}Z();for(let h of m)h.ms=r;de(),L(),I(),_(n?"time-all":"time")}function Pe(e){e!=="loop"&&e!=="pingpong"||(t.mode=e,t.playing&&(k.order=K(),k.step=-1),de(),L(),I(),_("mode",{mode:e}))}function Te(e){t.onion=!!e,W(),o.draw(),L(),I(),_("onion")}let Ue={blink:We,talk:Ye,boop:Je},bt={blink:"Blink needs eyes: draw them above the dotted line, away from the snoot.",talk:"Talk needs a mouth: draw it below the dotted line."};function Ie(e){if(!Ue[e])return!1;t.playing&&z(!1),F();let n=Ue[e](t.frames[t.cur].face,x);if(!n)return s(bt[e]),!1;Z(),t.frames=n.frames.map(m=>O(m.face,m.ms)),t.mode=n.mode,t.cur=0,X(),N(0),U(),L(),I();let r=e[0].toUpperCase()+e.slice(1);return s(`${r}: ${t.frames.length} frames from your face, ${t.mode==="pingpong"?"ping-pong":"loop"}. Undo brings back your frames.`),_("gen",{gen:e}),oe(),!0}function oe(){if(t.frames.length<2){s("Add a frame first: an animation needs two or more.");return}t.playing||(F(),k={order:K(),t0:null,step:-1},t.playing=!0,W(),U(),L(),_("play"))}function z(e=!0){if(!t.playing)return;let n=k&&k.step>=0?k.order[k.step]:t.cur;t.playing=!1,k=null,ke(-1),o.show=null,e&&n!==t.cur?N(n):(W(),o.draw()),U(),L()}let ie=()=>t.playing?z():oe();function xt(e){k.t0===null&&(k.t0=e);let n=k.order.map(h=>t.frames[h].ms),r=n.reduce((h,P)=>h+P,0),m=(e-k.t0)*1e3%r;for(let h=0;h<n.length;h++){if(m<n[h])return h;m-=n[h]}return n.length-1}let Ge=c.update.bind(c);c.update=(e,n)=>{if(!t.playing)return Ge(e,n);let r=xt(n.now),m=t.frames[k.order[r]].face;return r!==k.step&&(k.step=r,o.show=m,o.draw(),ke(k.order[r])),Ge(m,{...n,mouth:"off",blink:!1})},d("#gridWrap").addEventListener("pointerdown",()=>{t.playing&&z()},!0);let Re=e=>(e.frameId=t.frames[t.cur].id,e);o.snapshot=()=>{o.undoStack.push(Re(a.face.slice())),o.undoStack.length>ut&&o.undoStack.shift(),o.redoStack.length=0};let Ce=(e,n)=>{let r=e.pop();if(!r)return;if(t.playing&&z(!1),r.kind==="anim"){n.push(pe()),gt(r);return}let m=r.frameId===void 0?t.cur:t.frames.findIndex(h=>h.id===r.frameId);m<0||(m!==t.cur&&(F(),N(m),U(),L()),n.push(Re(a.face.slice())),a.face.set(r),o._changed())};o.undo=()=>Ce(o.undoStack,o.redoStack),o.redo=()=>Ce(o.redoStack,o.undoStack);let Oe=o.onChange;o.onChange=()=>{F(),ht(),I(),Oe&&Oe()},d("#animPlay").addEventListener("click",ie),B.addEventListener("click",ie),d("#animAdd").addEventListener("click",Se),d("#animDel").addEventListener("click",Le),d("#animLeft").addEventListener("click",()=>ue(-1)),d("#animRight").addEventListener("click",()=>ue(1)),d("#animMs").addEventListener("change",e=>he(e.target.value)),d("#animMs").addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),e.target.blur())}),d("#animAll").addEventListener("click",()=>{he(d("#animMs").value,!0),s(`Every frame: ${t.frames[t.cur].ms} ms`)}),d("#animMode").querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>Pe(e.dataset.v))),d("#animOnion").addEventListener("click",()=>Te(!t.onion)),V.querySelectorAll("[data-gen]").forEach(e=>e.addEventListener("click",()=>Ie(e.dataset.gen))),d("#animToExports").addEventListener("click",()=>{let e=document.querySelector('[role=tab][data-tab="share"]');e&&e.click(),setTimeout(()=>Y.scrollIntoView({behavior:"smooth",block:"start"}),50)});let Fe=d("#headSel");Fe&&Fe.addEventListener("change",Ee),window.addEventListener("keydown",e=>{if(b()||e.ctrlKey||e.metaKey||e.altKey)return;let n=document.activeElement;!(!n||n===document.body||C.contains(n))||e.target.closest&&e.target.closest("input, textarea, select")||(e.key==="Enter"&&(!n||n===document.body)?(e.preventDefault(),ie()):e.key==="ArrowLeft"&&t.cur>0?(e.preventDefault(),ae(t.cur-1)):e.key==="ArrowRight"&&t.cur<t.frames.length-1&&(e.preventDefault(),ae(t.cur+1)))});let re=e=>!!(i.inAppStop&&i.inAppStop(e)),se=(e,n,r,m)=>{let h=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:n});document.body.appendChild(h),h.click(),h.remove(),setTimeout(()=>URL.revokeObjectURL(h.href),4e3),s(r),i.exported&&i.exported(m)},J=()=>{F();let e=K();return{o:e,ms:e.map(n=>t.frames[n].ms),faces:t.frames.map(n=>n.face)}},yt=e=>{let n=new Uint8Array(f*p*3);for(let r=0;r<f*p;r++){let m=y[e[r]];m&&(n[r*3]=m[0],n[r*3+1]=m[1],n[r*3+2]=m[2])}return n};async function Be(e){let n=document.createElement("canvas");n.width=f,n.height=p*e.length;let r=n.getContext("2d"),m=r.createImageData(f,p*e.length);e.forEach((P,G)=>{for(let H=0;H<f*p;H++){let ee=y[P[H]]||[0,0,0],E=(G*f*p+H)*4;m.data[E]=ee[0],m.data[E+1]=ee[1],m.data[E+2]=ee[2],m.data[E+3]=255}}),r.putImageData(m,0,0);let h=await $.canvasToBlob(n);return new Uint8Array(await h.arrayBuffer())}function De(){let{o:e,ms:n,faces:r}=J();return nt(e.map(m=>r[m]),n.map(m=>m/10),f,p,y)}function wt(){if(re("gif"))return;let{o:e}=J();se(new Blob([De()],{type:"image/gif"}),"snootrix-anim-128x32.gif",`GIF saved: ${e.length} frames, 128\xD732, one pixel per LED`,d("#animGif"))}async function Ne(){let{o:e,ms:n,faces:r}=J(),m=r.length,h=[],P=E=>String(E+1).padStart(2,"0");for(let E=0;E<m;E++)h.push({name:`snootrix-anim/frames/frame-${P(E)}.png`,data:await Be([r[E]])});h.push({name:"snootrix-anim/snootrix_anim_sheet.png",data:await Be(r)});let G=new Uint8Array(f*p*m*3);r.forEach((E,be)=>G.set(yt(E),be*f*p*3)),h.push({name:"snootrix-anim/snootrix_anim_sheet.bmp",data:new Uint8Array(await $.encodeBMP24(G,f,p*m).arrayBuffer())});let H={editor:"https://zarmat99.github.io/snootrix/",width:f,height:p,frames:t.frames.map((E,be)=>({file:`frames/frame-${P(be)}.png`,ms:E.ms})),mode:t.mode,loop:{order:e,ms:n},sheet:{png:"snootrix_anim_sheet.png",bmp:"snootrix_anim_sheet.bmp",tile_width:f,tile_height:p,frames:m}},ee=E=>new TextEncoder().encode(E.replace(/\n/g,`\r
`));return h.push({name:"snootrix-anim/animation.json",data:new TextEncoder().encode(JSON.stringify(H,null,2)+`
`)}),h.push({name:"snootrix-anim/matrixportal_code.py",data:new TextEncoder().encode(_t(e,n))}),h.push({name:"snootrix-anim/README.txt",data:ee(kt(m,e,n))}),at(h)}async function vt(){if(re("png-zip"))return;let e=d("#animZip");e.disabled=!0;try{let n=t.frames.length;se(new Blob([await Ne()],{type:"application/zip"}),"snootrix-anim-frames.zip",`ZIP saved: ${n} PNG frames, sprite sheets and times`,e)}catch(n){console.error(n),s("Could not make the ZIP. Try again.")}finally{e.disabled=!1}}function ze(){let{o:e,ms:n,faces:r}=J();return it(r,e,n,f,p,y,{mode:t.mode})}function Mt(){re("c-anim")||se(new Blob([ze()],{type:"text/x-c"}),"snootrix_anim.h",`C header saved: ${t.frames.length} RGB565 frames, 128\xD732`,d("#animC"))}function He(){let e=u&&u.HEADS[a.head];if(!e||!e.modules)return null;let{o:n,ms:r,faces:m}=J();return rt(m.map(h=>u.moduleLeds(e,h)),n,r,e.label,{chain:e.chainNote||"",mode:t.mode})}function $t(){let e=u&&u.HEADS[a.head];if(!e||!e.modules||re("max7219-anim"))return;let n=He();n&&se(new Blob([n],{type:"text/x-c"}),"snootrix_max7219_anim.h",`MAX7219 header saved: ${t.frames.length} frames \xD7 ${e.modules.length} modules`,d("#animMax"))}async function je(){F();let e=await ye({frames:t.frames.map(r=>r.face),ms:t.frames.map(r=>r.ms),mode:t.mode,colorMode:a.colorMode},f,p),n=a.head&&a.head!=="snootrix"?`head=${encodeURIComponent(a.head)}`:"";return`${location.origin}${location.pathname}${n?`?${n}`:""}#a=${e}`}async function Xe(){let e=await je();if(e.length>ft)return s(`Too long for a link (${e.length.toLocaleString("en")} characters): share the GIF instead.`),e;try{await navigator.clipboard.writeText(e),s("Link copied: it opens the editor with your animation playing")}catch{prompt("Copy this link:",e)}return e}d("#animGif").addEventListener("click",wt),d("#animZip").addEventListener("click",vt),d("#animC").addEventListener("click",Mt),d("#animMax").addEventListener("click",$t),d("#animLink").addEventListener("click",Xe);function _t(e,n){return`# Adafruit Matrix Portal (M4 or S3) with CircuitPython 9 or newer: plays snootrix_anim_sheet.bmp on two 64x32
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
`}function kt(e,n,r){return`SNOOTRIX face editor - animation frames
Made with the free SNOOTRIX face editor: https://zarmat99.github.io/snootrix/

${e} frames of 128x32 pixels, one pixel per LED: both 64x32 panels side by side, left panel first. Black = off.
One ${t.mode==="pingpong"?"ping-pong":"loop"}: ${n.length} steps, ${r.reduce((m,h)=>m+h,0)} ms. Frame shown at each step: ${n.map(m=>m+1).join(", ")}.
Time of each step (ms): ${r.join(", ")}.

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
`}async function Ke(e){let n=await mt(e,f,p);return{frames:n.frames.map((r,m)=>O(r,n.ms[m])),mode:n.mode,colorMode:n.colorMode}}let ge=new URLSearchParams(location.hash.slice(1)),Q=M.get(pt);if(Q&&Q.code)try{let e=await Ke(Q.code);t.frames=e.frames,t.mode=e.mode,t.cur=Math.max(0,Math.min(e.frames.length-1,Q.cur|0)),t.onion=Q.onion!==!1,ge.get("f")&&t.frames.length>1?(o.undoStack.push(pe()),t.frames=[O(a.face,t.frames[t.cur].ms)],t.cur=0):F()}catch(e){console.warn("saved animation not readable",e)}if(X(),N(t.cur),U(),L(),ge.get("a"))try{let e=await Ke(ge.get("a"));Z(),t.frames=e.frames,t.mode=e.mode,t.cur=0,a.colorMode=e.colorMode,X(),N(0),U(),L(),I(),history.replaceState(null,"",location.pathname+location.search),setTimeout(()=>s("Loaded a shared animation. Make it yours! Undo brings back your own."),600),t.frames.length>1&&oe(),_("open-link")}catch(e){console.warn(e),s("This animation link is damaged: showing your own animation.")}let Ve={anim:t,get play(){return k},select:ae,addFrame:Se,deleteFrame:Le,move:ue,setMs:he,setMode:Pe,setOnion:Te,generate:Ie,startPlay:oe,stopPlay:z,toggle:ie,order:K,loopMs:te,linkUrl:je,copyLink:Xe,gifBytes:De,zipFiles:Ne,cText:ze,maxText:He,MAX_FRAMES:me,MS_MIN:we,MS_MAX:ve,LINK_MAX:ft};return v.has("debug")&&(window.__snootrixAnim=Ve),Ve}export{ft as LINK_MAX,me as MAX_FRAMES,ve as MS_MAX,we as MS_MIN,dt as MS_NEW,Bt as setupAnim};
