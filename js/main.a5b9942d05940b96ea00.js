(()=>{"use strict";var e,t,r,o,n,i={33441:(e,t,r)=>{var o=r(79897),n=r(6061),i=r(55161),a=r.n(i);const l=async()=>{const{default:e}=await Promise.all([r.e(912),r.e(44),r.e(557),r.e(506),r.e(165),r.e(222),r.e(232),r.e(213),r.e(29),r.e(734),r.e(305),r.e(921),r.e(552),r.e(492),r.e(480)]).then(r.t.bind(r,60583,23));return e.initialize("ZIK0mwzU7CBs41xRpHWGwFuE2RFm4hrE32MFKohX","OQqvhxSsyZeUF7mVEGYKcV64VEdxJwHtoXhjZo3W"),e.serverURL="https://parseapi.back4app.com/",e};class c{executeRender(e,t){(0,o.sY)(e,t)}}class s{executeRender(e,t){(0,o.sY)((e=>o.dy`
  <app-nav></app-nav>
  ${e}
`)(e),t)}}const p=(e,t)=>{const r=document.getElementById("root");r&&t.executeRender(e,r)},d=(e,t)=>{e.render=e=>{p(e,new c)},t()},f=(e,t)=>{e.render=e=>{p(e,new s)},t()},u=o.iv`
  /*
  http://meyerweb.com/eric/tools/css/reset/  
  v2.0 | 20110126
  License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }
`;var b=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};const y=[{title:"Home",href:"/"},{title:"Projects",href:"/projects"}];let h=class extends o.oi{render(){return o.dy`
      <nav>
        <ul>
          ${y.map((e=>(e=>o.dy`
  <li>
    <a href="${e.href}">${e.title}</a>
  </li>
`)(e)))}
        </ul>

        <button type="button" @click="${this.signIn}">Sign in</button>
      </nav>
    `}signIn(){a()("/auth")}};h.styles=[u,o.iv``],h=b([(0,n.Mo)("app-nav")],h),a()("/",f,(e=>{e.render(o.dy`<app-home></app-home>`)})),a()("/projects",f,(e=>{e.render(o.dy`<app-projects></app-projects>`)})),a()("/projects/:id",f,(e=>{e.render(o.dy`<app-project-details .context="${e}"></app-project-details>`)})),a()("/auth",d,(e=>{e.render(o.dy`<app-auth></app-auth>`)})),a()("*",d,(e=>{e.render(o.dy`<app-not-found></app-not-found>`)})),a()();var v=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let g=class extends o.oi{async signUp(){try{const e=(e=>({createUser(t,r,o){const n=new e.User;return n.set("username",t),n.set("password",r),n.set("email",o),n}}))(await l()),t=e.createUser("blizz","pass","bojidaryovchev1@gmail.com"),r=await t.signUp();console.log(r.getEmail())}catch(e){console.log({...e})}}render(){return o.dy`
      <p>auth</p>

      <button type="button" @click="${this.signUp}">Sign up</button>
    `}};g.styles=[u,o.iv``],g.properties={},g=v([(0,n.Mo)("app-auth")],g);var m=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let j=class extends o.oi{render(){return o.dy`<p>home</p>`}};j.styles=[u,o.iv``],j.properties={},j=m([(0,n.Mo)("app-home")],j);var O=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let w=class extends o.oi{render(){return o.dy`<p>404: Not found</p>`}};w.styles=[u,o.iv``],w.properties={},w=O([(0,n.Mo)("app-not-found")],w);var R=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};const x=e=>class extends e{createRenderRoot(){const e=super.createRenderRoot(),t=document.createElement("style");return t.textContent=u.cssText,e.prepend(t),e}};var k=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let P=class extends((e=>{class t extends e{}return R([(0,n.Cb)({type:Object})],t.prototype,"context",void 0),t})(x(o.oi))){get projectId(){var e,t;return null===(t=null===(e=this.context)||void 0===e?void 0:e.params)||void 0===t?void 0:t.id}async upload(){if(!this.fileInput||!this.fileInput.files||!this.fileInput.files.length)return;const[e]=Array.from(this.fileInput.files),t=await l(),r=new t.File(e.name,e);try{const o=await r.save(),n=new(t.Object.extend("FileMetaData"));n.set("file",o),n.set("fileName",e.name),await n.save(),console.log(o)}catch(e){}}async getFiles(){const e=await l(),t=e.Object.extend("FileMetaData"),r=new e.Query(t);try{const e=await r.find();console.log(e),e.forEach((e=>{const t=e.get("file"),r=e.get("fileName");console.log(`File: ${r}, URL: ${t.url()}`)}))}catch(e){}}attributeChangedCallback(){console.log(this.context)}render(){return o.dy`
      ${this.projectId}
      <input id="fileInput" type="file" />
      <button type="button" @click="${this.upload}">Upload</button>
      <button type="button" @click="${this.getFiles}">Get files</button>
      <h1>brrr</h1>
    `}};P.styles=[o.iv``],P.properties={},k([(0,n.IO)("#fileInput")],P.prototype,"fileInput",void 0),P=k([(0,n.Mo)("app-project-details")],P);var E=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let I=class extends o.oi{render(){return o.dy`<p>projects list</p>`}};I.styles=[u,o.iv``],I.properties={},I=E([(0,n.Mo)("app-projects")],I)}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return i[e].call(r.exports,r,r.exports,l),r.exports}l.m=i,e=[],l.O=(t,r,o,n)=>{if(!r){var i=1/0;for(p=0;p<e.length;p++){for(var[r,o,n]=e[p],a=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(l.O).every((e=>l.O[e](r[c])))?r.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(p--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,o,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var i={};t=t||[null,r({}),r([]),r(r)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,l.d(n,i),n},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>"js/"+e+".1bbcc5069ee785f80b95.js",l.miniCssF=e=>{},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="civil-dev:",l.l=(e,t,r,i)=>{if(o[e])o[e].push(t);else{var a,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var d=s[p];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+r){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",n+r),a.src=e),o[e]=[t];var f=(t,r)=>{a.onerror=a.onload=null,clearTimeout(u);var n=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},u=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/civil-dev/",(()=>{var e={179:0};l.f.j=(t,r)=>{var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=l.p+l.u(t),a=new Error;l.l(i,(r=>{if(l.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,a,c]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in a)l.o(a,o)&&(l.m[o]=a[o]);if(c)var p=c(l)}for(t&&t(r);s<i.length;s++)n=i[s],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(p)},r=self.webpackChunkcivil_dev=self.webpackChunkcivil_dev||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=l.O(void 0,[912,44,557,506,165,222,232,213,29,734,305,921,552,492],(()=>l(33441)));c=l.O(c)})();