(()=>{"use strict";var e,t,r,o,n,i={33006:(e,t,r)=>{var o=r(79897),n=r(6061),i=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};const a=e=>{class t extends e{}return i([(0,n.Cb)({type:Object})],t.prototype,"context",void 0),t},l=async()=>{const{default:e}=await Promise.all([r.e(912),r.e(44),r.e(557),r.e(506),r.e(165),r.e(222),r.e(232),r.e(213),r.e(29),r.e(734),r.e(305),r.e(921),r.e(552),r.e(492),r.e(480)]).then(r.t.bind(r,60583,23));return e.initialize("ZIK0mwzU7CBs41xRpHWGwFuE2RFm4hrE32MFKohX","OQqvhxSsyZeUF7mVEGYKcV64VEdxJwHtoXhjZo3W"),e.serverURL="https://parseapi.back4app.com/",e};class s{executeRender(e,t){(0,o.sY)(e,t)}}class c{executeRender(e,t){(0,o.sY)((e=>o.dy`
  <app-nav></app-nav>
  ${e}
`)(e),t)}}const p=(e,t)=>{const r=document.getElementById("root");r&&t.executeRender(e,r)},d=(e,t)=>{e.render=e=>{p(e,new s)},t()},u=(e,t)=>{e.render=e=>{p(e,new c)},t()},f=e=>`/civil-dev${e}`,v=o.iv`
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
`,y=e=>class extends e{createRenderRoot(){const e=super.createRenderRoot(),t=document.createElement("style");return t.textContent=v.cssText,e.prepend(t),e}};var b=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let h=class extends(y(o.oi)){render(){return o.dy`
      <li>
        <a href="${this.navItem.path}">${this.navItem.title}</a>
      </li>
    `}};h.styles=[o.iv``],b([(0,n.Cb)({type:Object})],h.prototype,"navItem",void 0),h=b([(0,n.Mo)("app-nav-item")],h);var m=r(55161),g=r.n(m),j=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};const O=[{title:"Home",path:f("/")},{title:"Projects",path:f("/projects")}];let w=class extends(y(o.oi)){signIn(){g()(f("/auth"))}render(){return o.dy`
      <nav>
        <ul>
          ${O.map((e=>o.dy`<app-nav-item .navItem="${e}"></app-nav-item>`))}
        </ul>

        <button type="button" @click="${this.signIn}">Sign in</button>
      </nav>
    `}};w.styles=[o.iv``],w=j([(0,n.Mo)("app-nav")],w),g().base("/civil-dev"),g()("/",u,(e=>{e.render(o.dy`<app-home .context="${e}"></app-home>`)})),g()("/projects",u,(e=>{e.render(o.dy`<app-projects .context="${e}"></app-projects>`)})),g()("/projects/:id",u,(e=>{e.render(o.dy`<app-project-details .context="${e}"></app-project-details>`)})),g()("/auth",d,(e=>{e.render(o.dy`<app-auth .context="${e}"></app-auth>`)})),g()("/email-verification-success",d,(e=>{e.render(o.dy`<app-email-verification-success .context="${e}"></app-email-verification-success>`)})),g()("*",d,(e=>{e.render(o.dy`<app-not-found .context="${e}"></app-not-found>`)})),g()();var x=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let R=class extends(a(y(o.oi))){async signUp(){var e,t,r,o;try{const n=null===(e=this.usernameInput)||void 0===e?void 0:e.value,i=null===(t=this.emailInput)||void 0===t?void 0:t.value,a=null===(r=this.passwordInput)||void 0===r?void 0:r.value,s=null===(o=this.confirmPasswordInput)||void 0===o?void 0:o.value;if(!(n&&i&&a&&s))return;if(a!==s)return;const c=(e=>({createUser(t,r,o){const n=new e.User;return n.set("username",t),n.set("password",r),n.set("email",o),n}}))(await l()),p=c.createUser(n,a,i),d=await p.signUp();console.log(d.getEmail())}catch(e){console.log({...e})}}render(){return o.dy`
      <p>auth</p>

      <input type="text" id="username" placeholder="Username" />
      <input type="email" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Password" />
      <input type="password" id="confirmPassword" placeholder="Confirm password" />

      <button type="button" @click="${this.signUp}">Sign up</button>
    `}};R.styles=[v,o.iv``],R.properties={},x([(0,n.IO)("#username")],R.prototype,"usernameInput",void 0),x([(0,n.IO)("#email")],R.prototype,"emailInput",void 0),x([(0,n.IO)("#password")],R.prototype,"passwordInput",void 0),x([(0,n.IO)("#confirmPassword")],R.prototype,"confirmPasswordInput",void 0),R=x([(0,n.Mo)("app-auth")],R);var P=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let I=class extends(a(y(o.oi))){get username(){var e;const t=new URLSearchParams(null===(e=this.context)||void 0===e?void 0:e.querystring).get("username");if(t)return t}render(){return o.dy`
      <p>Congratulations, ${this.username}, you have successfully verified your email!</p>
      <a href="${f("/")}">Go back</a>
    `}};I.styles=[o.iv``],I.properties={},I=P([(0,n.Mo)("app-email-verification-success")],I);var k=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let $=class extends(a(y(o.oi))){render(){return o.dy`<p>home</p>`}};$.styles=[o.iv``],$.properties={},$=k([(0,n.Mo)("app-home")],$);var E=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let M=class extends(a(y(o.oi))){render(){return o.dy`<p>404: Not found</p>`}};M.styles=[o.iv``],M.properties={},M=E([(0,n.Mo)("app-not-found")],M);var C=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let U=class extends(a(y(o.oi))){get projectId(){var e,t;return null===(t=null===(e=this.context)||void 0===e?void 0:e.params)||void 0===t?void 0:t.id}async upload(){if(!this.fileInput||!this.fileInput.files||!this.fileInput.files.length)return;const[e]=Array.from(this.fileInput.files),t=await l(),r=new t.File(e.name,e);try{const o=await r.save(),n=new(t.Object.extend("FileMetaData"));n.set("file",o),n.set("fileName",e.name),await n.save(),console.log(o)}catch(e){}}async getFiles(){const e=await l(),t=e.Object.extend("FileMetaData"),r=new e.Query(t);try{const e=await r.find();console.log(e),e.forEach((e=>{const t=e.get("file"),r=e.get("fileName");console.log(`File: ${r}, URL: ${t.url()}`)}))}catch(e){}}attributeChangedCallback(){console.log(this.context)}render(){return o.dy`
      ${this.projectId}
      <input id="fileInput" type="file" />
      <button type="button" @click="${this.upload}">Upload</button>
      <button type="button" @click="${this.getFiles}">Get files</button>
      <h1>brrr</h1>
    `}};U.styles=[o.iv``],U.properties={},C([(0,n.IO)("#fileInput")],U.prototype,"fileInput",void 0),U=C([(0,n.Mo)("app-project-details")],U);var q=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let F=class extends(a(y(o.oi))){render(){return o.dy`<p>projects list</p>`}};F.styles=[o.iv``],F.properties={},F=q([(0,n.Mo)("app-projects")],F)}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return i[e].call(r.exports,r,r.exports,l),r.exports}l.m=i,e=[],l.O=(t,r,o,n)=>{if(!r){var i=1/0;for(p=0;p<e.length;p++){for(var[r,o,n]=e[p],a=!0,s=0;s<r.length;s++)(!1&n||i>=n)&&Object.keys(l.O).every((e=>l.O[e](r[s])))?r.splice(s--,1):(a=!1,n<i&&(i=n));if(a){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,o,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var i={};t=t||[null,r({}),r([]),r(r)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,l.d(n,i),n},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>"js/"+e+".1bbcc5069ee785f80b95.js",l.miniCssF=e=>{},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="civil-dev:",l.l=(e,t,r,i)=>{if(o[e])o[e].push(t);else{var a,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var d=c[p];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+r){a=d;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",n+r),a.src=e),o[e]=[t];var u=(t,r)=>{a.onerror=a.onload=null,clearTimeout(f);var n=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),s&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/civil-dev/",(()=>{var e={179:0};l.f.j=(t,r)=>{var o=l.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=l.p+l.u(t),a=new Error;l.l(i,(r=>{if(l.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,a,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in a)l.o(a,o)&&(l.m[o]=a[o]);if(s)var p=s(l)}for(t&&t(r);c<i.length;c++)n=i[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(p)},r=self.webpackChunkcivil_dev=self.webpackChunkcivil_dev||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=l.O(void 0,[912,44,557,506,165,222,232,213,29,734,305,921,552,492],(()=>l(33006)));s=l.O(s)})();