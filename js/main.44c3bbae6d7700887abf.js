(()=>{"use strict";var e,t,r,o,n,a={68911:(e,t,r)=>{var o=r(79897),n=r(6061),a=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};const i=e=>{class t extends e{}return a([(0,n.Cb)({type:Object})],t.prototype,"context",void 0),t},l=async()=>{const{default:e}=await Promise.all([r.e(912),r.e(44),r.e(557),r.e(506),r.e(165),r.e(222),r.e(232),r.e(213),r.e(29),r.e(734),r.e(305),r.e(921),r.e(552),r.e(492),r.e(480)]).then(r.t.bind(r,60583,23));return e.initialize("ZIK0mwzU7CBs41xRpHWGwFuE2RFm4hrE32MFKohX","OQqvhxSsyZeUF7mVEGYKcV64VEdxJwHtoXhjZo3W"),e.serverURL="https://parseapi.back4app.com/",e};class c{executeRender(e,t){(0,o.sY)(e,t)}}class s{executeRender(e,t){(0,o.sY)((e=>o.dy`
  <app-nav></app-nav>
  ${e}
`)(e),t)}}const p=(e,t)=>{const r=document.getElementById("root");r&&t.executeRender(e,r)},d=(e,t)=>{e.render=e=>{p(e,new c)},t()},f=(e,t)=>{e.render=e=>{p(e,new s)},t()},u=e=>`/civil-dev${e}`,b=o.iv`
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
`,v=e=>class extends e{createRenderRoot(){const e=super.createRenderRoot(),t=document.createElement("style");return t.textContent=b.cssText,e.prepend(t),e}};var y=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let h=class extends(v(o.oi)){render(){return o.dy`
      <li>
        <a href="${this.navItem.path}">${this.navItem.title}</a>
      </li>
    `}};h.styles=[o.iv``],y([(0,n.Cb)({type:Object})],h.prototype,"navItem",void 0),h=y([(0,n.Mo)("app-nav-item")],h);var g=r(55161),m=r.n(g),j=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};const O=[{title:"Home",path:u("/")},{title:"Projects",path:u("/projects")}];let w=class extends(v(o.oi)){signIn(){m()(u("/auth"))}render(){return o.dy`
      <nav>
        <ul>
          ${O.map((e=>o.dy`<app-nav-item .navItem="${e}"></app-nav-item>`))}
        </ul>

        <button type="button" @click="${this.signIn}">Sign in</button>
      </nav>
    `}};w.styles=[o.iv``],w=j([(0,n.Mo)("app-nav")],w),m().base("/civil-dev"),m()("/",f,(e=>{e.render(o.dy`<app-home .context="${e}"></app-home>`)})),m()("/projects",f,(e=>{e.render(o.dy`<app-projects .context="${e}"></app-projects>`)})),m()("/projects/:id",f,(e=>{e.render(o.dy`<app-project-details .context="${e}"></app-project-details>`)})),m()("/auth",d,(e=>{e.render(o.dy`<app-auth .context="${e}"></app-auth>`)})),m()("*",d,(e=>{e.render(o.dy`<app-not-found .context="${e}"></app-not-found>`)})),m()();var x=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let R=class extends(i(v(o.oi))){async signUp(){try{const e=(e=>({createUser(t,r,o){const n=new e.User;return n.set("username",t),n.set("password",r),n.set("email",o),n}}))(await l()),t=e.createUser("blizz","pass","blizzcon@gmail.com"),r=await t.signUp();console.log(r.getEmail())}catch(e){console.log({...e})}}render(){return o.dy`
      <p>auth</p>

      <button type="button" @click="${this.signUp}">Sign up</button>
    `}};R.styles=[b,o.iv``],R.properties={},R=x([(0,n.Mo)("app-auth")],R);var P=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let k=class extends(i(v(o.oi))){render(){return o.dy`<p>home</p>`}};k.styles=[o.iv``],k.properties={},k=P([(0,n.Mo)("app-home")],k);var I=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let $=class extends(i(v(o.oi))){render(){return o.dy`<p>404: Not found</p>`}};$.styles=[o.iv``],$.properties={},$=I([(0,n.Mo)("app-not-found")],$);var E=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let M=class extends(i(v(o.oi))){get projectId(){var e,t;return null===(t=null===(e=this.context)||void 0===e?void 0:e.params)||void 0===t?void 0:t.id}async upload(){if(!this.fileInput||!this.fileInput.files||!this.fileInput.files.length)return;const[e]=Array.from(this.fileInput.files),t=await l(),r=new t.File(e.name,e);try{const o=await r.save(),n=new(t.Object.extend("FileMetaData"));n.set("file",o),n.set("fileName",e.name),await n.save(),console.log(o)}catch(e){}}async getFiles(){const e=await l(),t=e.Object.extend("FileMetaData"),r=new e.Query(t);try{const e=await r.find();console.log(e),e.forEach((e=>{const t=e.get("file"),r=e.get("fileName");console.log(`File: ${r}, URL: ${t.url()}`)}))}catch(e){}}attributeChangedCallback(){console.log(this.context)}render(){return o.dy`
      ${this.projectId}
      <input id="fileInput" type="file" />
      <button type="button" @click="${this.upload}">Upload</button>
      <button type="button" @click="${this.getFiles}">Get files</button>
      <h1>brrr</h1>
    `}};M.styles=[o.iv``],M.properties={},E([(0,n.IO)("#fileInput")],M.prototype,"fileInput",void 0),M=E([(0,n.Mo)("app-project-details")],M);var C=function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let F=class extends(i(v(o.oi))){render(){return o.dy`<p>projects list</p>`}};F.styles=[o.iv``],F.properties={},F=C([(0,n.Mo)("app-projects")],F)}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return a[e].call(r.exports,r,r.exports,l),r.exports}l.m=a,e=[],l.O=(t,r,o,n)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,o,n]=e[p],i=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(l.O).every((e=>l.O[e](r[c])))?r.splice(c--,1):(i=!1,n<a&&(a=n));if(i){e.splice(p--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,o,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,l.d(n,a),n},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>"js/"+e+".1bbcc5069ee785f80b95.js",l.miniCssF=e=>{},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="civil-dev:",l.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var i,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var d=s[p];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+r){i=d;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",n+r),i.src=e),o[e]=[t];var f=(t,r)=>{i.onerror=i.onload=null,clearTimeout(u);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},u=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/civil-dev/",(()=>{var e={179:0};l.f.j=(t,r)=>{var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=l.p+l.u(t),i=new Error;l.l(a,(r=>{if(l.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[a,i,c]=r,s=0;if(a.some((t=>0!==e[t]))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(c)var p=c(l)}for(t&&t(r);s<a.length;s++)n=a[s],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(p)},r=self.webpackChunkcivil_dev=self.webpackChunkcivil_dev||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=l.O(void 0,[912,44,557,506,165,222,232,213,29,734,305,921,552,492],(()=>l(68911)));c=l.O(c)})();