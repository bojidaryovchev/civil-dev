(self.webpackChunkcivil_dev=self.webpackChunkcivil_dev||[]).push([[552],{5969:(e,t,r)=>{"use strict";var n=r(60530),a=r(34074),u=r(63978),f=r(23765),i=r(52424);u(t,"__esModule",{value:!0}),t.clearAllState=function(){d=new l.default},t.commitServerChanges=function(e,t){var r=p(e);o.commitServerChanges(r.serverData,r.objectCache,t)},t.duplicateState=function(e,t){var r=p(e),n=p(t);for(var a in r.serverData)n.serverData[a]=r.serverData[a];for(var u=0;u<r.pendingOps.length;u++)for(var f in r.pendingOps[u])n.pendingOps[u][f]=r.pendingOps[u][f];for(var i in r.objectCache)n.objectCache[i]=r.objectCache[i];n.existed=r.existed},t.enqueueTask=function(e,t){return p(e).tasks.enqueue(t)},t.estimateAttribute=function(e,t){var r=g(e),n=_(e);return o.estimateAttribute(r,n,e.className,e.id,t)},t.estimateAttributes=function(e){var t=g(e),r=_(e);return o.estimateAttributes(t,r,e.className,e.id)},t.getObjectCache=function(e){var t=v(e);if(t)return t.objectCache;return{}},t.getPendingOps=_,t.getServerData=g,t.getState=v,t.initializeState=p,t.mergeFirstPendingState=function(e){var t=_(e);o.mergeFirstPendingState(t)},t.popPendingState=function(e){var t=p(e).pendingOps;return o.popPendingState(t)},t.pushPendingState=function(e){var t=p(e).pendingOps;o.pushPendingState(t)},t.removeState=function(e){var t=v(e);if(null===t)return null;return d.delete(e),t},t.setPendingOp=function(e,t,r){var n=p(e).pendingOps;o.setPendingOp(n,t,r)},t.setServerData=function(e,t){var r=p(e).serverData;o.setServerData(r,t)};var l=n(r(52424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={};for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=u&&a?a(e,i):null;l&&(l.get||l.set)?u(n,i,l):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r(83167)),s=n(r(12726));function c(e){if("function"!=typeof i)return null;var t=new i,r=new i;return(c=function(e){return e?r:t})(e)}var d=new l.default;function v(e){return d.get(e)||null}function p(e,t){var r=v(e);return r||(t||(t={serverData:{},pendingOps:[{}],objectCache:{},tasks:new s.default,existed:!1}),r=t,d.set(e,r),r)}function g(e){var t=v(e);return t?t.serverData:{}}function _(e){var t=v(e);return t?t.pendingOps:[{}]}},19218:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,a.default)(e).call(e,t)>-1)return!0;for(var r=0;r<e.length;r++)if(e[r]instanceof u.default&&e[r].className===t.className&&e[r]._getId()===t._getId())return!0;return!1};var a=n(r(81643)),u=n(r(48205))},29449:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof i.default))return!0;var t=e.attributes;for(var r in t){if(!o(t[r]))return!1}return!0};var a=n(r(41511)),u=n(r(23765)),f=n(r(76987)),i=n(r(48205)),l=n(r(32609));function o(e){if("object"!==(0,u.default)(e))return!0;if(e instanceof l.default)return!0;if(e instanceof i.default)return!!e.id;if(e instanceof f.default)return!!e.url();if((0,a.default)(e)){for(var t=0;t<e.length;t++)if(!o(e[t]))return!1;return!0}for(var r in e)if(!o(e[r]))return!1;return!0}},80825:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.default=function e(t){if(null===t||"object"!==(0,f.default)(t)||t instanceof Date)return t;if((0,u.default)(t)){var r=[];return(0,a.default)(t).call(t,(function(t,n){r[n]=e(t)})),r}if("string"==typeof t.__op)return(0,c.opFromJSON)(t);if("Pointer"===t.__type&&t.className)return s.default.fromJSON(t);if("Object"===t.__type&&t.className)return s.default.fromJSON(t);if("Relation"===t.__type){var n=new d.default(null,null);return n.targetClassName=t.className,n}if("Date"===t.__type)return new Date(t.iso);if("File"===t.__type)return i.default.fromJSON(t);if("GeoPoint"===t.__type)return new l.default({latitude:t.latitude,longitude:t.longitude});if("Polygon"===t.__type)return new o.default(t.coordinates);var v={};for(var p in t)v[p]=e(t[p]);return v};var a=n(r(78914)),u=n(r(41511)),f=n(r(23765)),i=(n(r(76102)),n(r(76987))),l=n(r(78483)),o=n(r(51591)),s=n(r(48205)),c=r(77733),d=n(r(32609))},27504:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,a){return h(e,!!t,!!r,n||[],a)};var a=n(r(23765)),u=n(r(2991)),f=n(r(41511)),i=n(r(77766)),l=n(r(29828)),o=n(r(86902)),s=n(r(81643)),c=n(r(76102)),d=n(r(76987)),v=n(r(78483)),p=n(r(51591)),g=n(r(48205)),_=r(77733),b=n(r(32609));function h(e,t,r,n,m){if(e instanceof g.default){if(t)throw new Error("Parse Objects not allowed here");var y,j=e.id?e.className+":"+e.id:e;return r||!n||(0,s.default)(n).call(n,j)>-1||e.dirty()||(0,o.default)(e._getServerData()).length<1?m&&(0,l.default)(y=e._getId()).call(y,"local")?e.toOfflinePointer():e.toPointer():(n=(0,i.default)(n).call(n,j),e._toFullJSON(n,m))}if(e instanceof _.Op||e instanceof c.default||e instanceof v.default||e instanceof p.default||e instanceof b.default)return e.toJSON();if(e instanceof d.default){if(!e.url())throw new Error("Tried to encode an unsaved file.");return e.toJSON()}if("[object Date]"===Object.prototype.toString.call(e)){if(isNaN(e))throw new Error("Tried to encode an invalid date.");return{__type:"Date",iso:e.toJSON()}}if("[object RegExp]"===Object.prototype.toString.call(e)&&"string"==typeof e.source)return e.source;if((0,f.default)(e))return(0,u.default)(e).call(e,(function(e){return h(e,t,r,n,m)}));if(e&&"object"===(0,a.default)(e)){var w={};for(var O in e)w[O]=h(e[O],t,r,n,m);return w}return e}},73114:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.default=function e(t,r){var n=Object.prototype.toString;if("[object Date]"===n.call(t)||"[object Date]"===n.call(r)){return+new Date(t)==+new Date(r)}if((0,f.default)(t)!==(0,f.default)(r))return!1;if(!t||"object"!==(0,f.default)(t))return t===r;if((0,u.default)(t)||(0,u.default)(r)){if(!(0,u.default)(t)||!(0,u.default)(r))return!1;if(t.length!==r.length)return!1;for(var c=t.length;c--;)if(!e(t[c],r[c]))return!1;return!0}if(t instanceof i.default||t instanceof l.default||t instanceof o.default||t instanceof s.default)return t.equals(r);if(r instanceof s.default&&("Object"===t.__type||"Pointer"===t.__type))return t.objectId===r.id&&t.className===r.className;if((0,a.default)(t).length!==(0,a.default)(r).length)return!1;for(var d in t)if(!e(t[d],r[d]))return!1;return!0};var a=n(r(86902)),u=n(r(41511)),f=n(r(23765)),i=n(r(76102)),l=n(r(76987)),o=n(r(78483)),s=n(r(48205))},51121:(e,t,r)=>{"use strict";r(63978)(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[&<>\/'"]/g,(function(e){return n[e]}))};var n={"&":"&amp;","<":"&lt;",">":"&gt;","/":"&#x2F;","'":"&#x27;",'"':"&quot;"}},75778:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.default=function(e){return(0,a.default)(e).call(e,"r:")>-1};var a=n(r(81643))},74158:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.default=function(e){var t=new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$").exec(e);if(!t)return null;var r=(0,a.default)(t[1])||0,n=((0,a.default)(t[2])||1)-1,u=(0,a.default)(t[3])||0,f=(0,a.default)(t[4])||0,i=(0,a.default)(t[5])||0,l=(0,a.default)(t[6])||0,o=(0,a.default)(t[8])||0;return new Date(Date.UTC(r,n,u,f,i,l,o))};var a=n(r(94198))},35430:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.continueWhile=function e(t,r){if(t())return r().then((function(){return e(t,r)}));return u.default.resolve()},t.resolvingPromise=f,t.when=function(e){var t,r=(0,a.default)(e);t=r?e:arguments;var n=t.length,i=!1,l=[],o=r?[l]:l,s=[];if(l.length=t.length,s.length=t.length,0===n)return u.default.resolve(o);for(var c=new f,d=function(){--n<=0&&(i?c.reject(s):c.resolve(o))},v=function(e,t){e&&"function"==typeof e.then?e.then((function(e){l[t]=e,d()}),(function(e){s[t]=e,i=!0,d()})):(l[t]=e,d())},p=0;p<t.length;p++)v(t[p],p);return c};var a=n(r(41511)),u=n(r(93476));function f(){var e,t,r=new u.default((function(r,n){e=r,t=n}));return r.resolve=e,r.reject=t,r}},77831:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return(0,u.default)(e).call(e,(function(e){e instanceof i.default?(0,f.default)(t,e)||t.push(e):(0,a.default)(t).call(t,e)<0&&t.push(e)})),t};var a=n(r(81643)),u=n(r(78914)),f=n(r(19218)),i=n(r(48205))},52810:(e,t,r)=>{"use strict";var n=r(60530);r(63978)(t,"__esModule",{value:!0}),t.default=function(e,t){var r={objects:{},files:[]},n=e.className+":"+e._getId();r.objects[n]=!e.dirty()||e;var a=e.attributes;for(var u in a)"object"===(0,l.default)(a[u])&&d(a[u],r,!1,!!t);var f=[];for(var o in r.objects)o!==n&&!0!==r.objects[o]&&f.push(r.objects[o]);return(0,i.default)(f).call(f,r.files)};var a=n(r(78914)),u=n(r(41511)),f=n(r(81643)),i=n(r(77766)),l=n(r(23765)),o=n(r(76987)),s=n(r(48205)),c=n(r(32609));function d(e,t,r,n){if(e instanceof s.default){if(!e.id&&r)throw new Error("Cannot create a pointer to an unsaved Object.");var i=e.className+":"+e._getId();if(!t.objects[i]){t.objects[i]=!e.dirty()||e;var v=e.attributes;for(var p in v)"object"===(0,l.default)(v[p])&&d(v[p],t,!n,n)}}else{var g;if(e instanceof o.default)!e.url()&&(0,f.default)(g=t.files).call(g,e)<0&&t.files.push(e);else if(!(e instanceof c.default))for(var _ in(0,u.default)(e)&&(0,a.default)(e).call(e,(function(e){"object"===(0,l.default)(e)&&d(e,t,r,n)})),e)"object"===(0,l.default)(e[_])&&d(e[_],t,r,n)}}},90027:(e,t,r)=>{"use strict";var n;n=r(45822),e.exports=n},98013:e=>{for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,r){var n=r||0,a=t;return[a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]]].join("")}},89308:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},45822:(e,t,r)=>{var n=r(89308),a=r(98013);e.exports=function(e,t,r){var u=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var f=(e=e||{}).random||(e.rng||n)();if(f[6]=15&f[6]|64,f[8]=63&f[8]|128,t)for(var i=0;i<16;++i)t[u+i]=f[i];return t||a(f)}}}]);