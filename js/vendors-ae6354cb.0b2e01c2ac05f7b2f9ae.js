"use strict";(self.webpackChunkcivil_dev=self.webpackChunkcivil_dev||[]).push([[232],{96901:(e,t,r)=>{var a=r(60530),n=r(41511),u=r(19996),i=r(65420),o=r(66419),l=r(3649),s=a(r(86902)),c=a(r(78914)),f=a(r(2991)),d=a(r(77766)),v=a(r(23765)),h=a(r(97657)),g=a(r(18777)),b=a(r(3649)),$=a(r(20116)),p=a(r(81643)),y=a(r(41511));function w(e,t){var r=void 0!==i&&u(e)||e["@@iterator"];if(!r){if(n(e)||(r=function(e,t){var r;if(!e)return;if("string"==typeof e)return m(e,t);var a=l(r=Object.prototype.toString.call(e)).call(r,8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return o(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,s=function(){};return{s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,f=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return f=e.done,e},e:function(e){d=!0,c=e},f:function(){try{f||null==r.return||r.return()}finally{if(d)throw c}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var _=r(73114).default,k=r(80825).default,N=r(44820).default,I=r(51591).default,j=r(78483).default;function x(e,t){if(t&&t.__type&&("Pointer"===t.__type||"Object"===t.__type)){for(var r in e){var a=e[r];if("string"==typeof a&&a===t.objectId)return!0;if(a.className===t.className&&a.objectId===t.objectId)return!0}return!1}if((0,y.default)(t)){var n,u=w(t);try{for(u.s();!(n=u.n()).done;){if(x(e,n.value))return!0}}catch(e){u.e(e)}finally{u.f()}}return(0,p.default)(e).call(e,t)>-1}function S(e){return e._toFullJSON?e._toFullJSON():e}function D(e,t,r,a){if(t.className!==e)return!1;var n=t,u=a;for(var i in t.toJSON&&(n=t.toJSON()),a.toJSON&&(u=a.toJSON().where),n.className=e,u)if(!E(e,n,r,i,u[i]))return!1;return!0}function O(e,t,r){if((0,y.default)(e)){for(var a=0;a<e.length;a++)if(r(e[a],t))return!0;return!1}return r(e,t)}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,r=(e=e.toLowerCase()).split(" "),a="in"===(r=(0,$.default)(r).call(r,(function(e){return""!==e})))[0],n="ago"===r[r.length-1];if(!a&&!n&&"now"!==e)return{status:"error",info:"Time should either start with 'in' or end with 'ago'"};if(a&&n)return{status:"error",info:"Time cannot have both 'in' and 'ago'"};if((r=a?(0,b.default)(r).call(r,1):(0,b.default)(r).call(r,0,r.length-1)).length%2!=0&&"now"!==e)return{status:"error",info:"Invalid time string. Dangling unit or number."};for(var u=[];r.length;)u.push([r.shift(),r.shift()]);for(var i=0,o=0,l=u;o<l.length;o++){var s=(0,g.default)(l[o],2),c=s[0],f=s[1],d=Number(c);if(!(0,h.default)(d))return{status:"error",info:"'".concat(c,"' is not an integer.")};switch(f){case"yr":case"yrs":case"year":case"years":i+=31536e3*d;break;case"wk":case"wks":case"week":case"weeks":i+=604800*d;break;case"d":case"day":case"days":i+=86400*d;break;case"hr":case"hrs":case"hour":case"hours":i+=3600*d;break;case"min":case"mins":case"minute":case"minutes":i+=60*d;break;case"sec":case"secs":case"second":case"seconds":i+=d;break;default:return{status:"error",info:"Invalid interval: '".concat(f,"'")}}}var v=1e3*i;return a?{status:"success",info:"future",result:new Date(t.valueOf()+v)}:n?{status:"success",info:"past",result:new Date(t.valueOf()-v)}:{status:"success",info:"present",result:new Date(t.valueOf())}}function E(e,t,r,a,n){if(null===n)return!1;if((0,p.default)(a).call(a,".")>=0){var u=a.split("."),i=u[0],o=(0,b.default)(u).call(u,1).join(".");return E(e,t[i]||{},r,o,n)}var l,s,c;if("$or"===a){for(l=0;l<n.length;l++)if(D(e,t,r,n[l]))return!0;return!1}if("$and"===a){for(l=0;l<n.length;l++)if(!D(e,t,r,n[l]))return!1;return!0}if("$nor"===a){for(l=0;l<n.length;l++)if(D(e,t,r,n[l]))return!1;return!0}if("$relatedTo"===a)return!1;if(!/^[A-Za-z][0-9A-Za-z_]*$/.test(a))throw new N(N.INVALID_KEY_NAME,"Invalid Key: ".concat(a));if("object"!==(0,v.default)(n))return(0,y.default)(t[a])?(0,p.default)(s=t[a]).call(s,n)>-1:t[a]===n;if(n.__type)return"Pointer"===n.__type?O(t[a],n,(function(e,t){return void 0!==e&&t.className===e.className&&t.objectId===e.objectId})):O(k(t[a]),k(n),_);for(var h in n){if((c=n[h]).__type&&(c=k(c)),c.$relativeTime){var m,J=A(c.$relativeTime);if("success"!==J.status)throw new N(N.INVALID_JSON,(0,d.default)(m="bad $relativeTime (".concat(a,") value. ")).call(m,J.info));c=J.result}switch(("[object Date]"===toString.call(c)||"string"==typeof c&&"Invalid Date"!==new Date(c)&&!isNaN(new Date(c)))&&(t[a]=new Date(t[a].iso?t[a].iso:t[a])),h){case"$lt":if(t[a]>=c)return!1;break;case"$lte":if(t[a]>c)return!1;break;case"$gt":if(t[a]<=c)return!1;break;case"$gte":if(t[a]<c)return!1;break;case"$ne":if(_(t[a],c))return!1;break;case"$in":if(!x(c,t[a]))return!1;break;case"$nin":if(x(c,t[a]))return!1;break;case"$all":for(l=0;l<c.length;l++){var T;if((0,p.default)(T=t[a]).call(T,c[l])<0)return!1}break;case"$exists":var Q=void 0!==t[a],q=n.$exists;if("boolean"!=typeof n.$exists)break;if(!Q&&q||Q&&!q)return!1;break;case"$regex":if("object"===(0,v.default)(c))return c.test(t[a]);for(var L="",z=-2,C=(0,p.default)(c).call(c,"\\Q");C>-1;)L+=c.substring(z+2,C),(z=(0,p.default)(c).call(c,"\\E",C))>-1&&(L+=c.substring(C+2,z).replace(/\\\\\\\\E/g,"\\E").replace(/\W/g,"\\$&")),C=(0,p.default)(c).call(c,"\\Q",z);L+=c.substring(Math.max(C,z+2));var M=n.$options||"";if(M=M.replace("x","").replace("s",""),!new RegExp(L,M).test(t[a]))return!1;break;case"$nearSphere":return!(!c||!t[a])&&c.radiansTo(t[a])<=(n.$maxDistance||1/0);case"$within":if(!c||!t[a])return!1;var P=c.$box[0],V=c.$box[1];return!(P.latitude>V.latitude||P.longitude>V.longitude)&&(t[a].latitude>P.latitude&&t[a].latitude<V.latitude&&t[a].longitude>P.longitude&&t[a].longitude<V.longitude);case"$options":case"$maxDistance":break;case"$select":for(var Z=(0,$.default)(r).call(r,(function(e,t,r){return D(c.query.className,e,r,c.query.where)})),K=0;K<Z.length;K+=1){var Y=S(Z[K]);return _(t[a],Y[c.key])}return!1;case"$dontSelect":for(var B=(0,$.default)(r).call(r,(function(e,t,r){return D(c.query.className,e,r,c.query.where)})),F=0;F<B.length;F+=1){var R=S(B[F]);return!_(t[a],R[c.key])}return!1;case"$inQuery":for(var U=(0,$.default)(r).call(r,(function(e,t,r){return D(c.className,e,r,c.where)})),W=0;W<U.length;W+=1){var G=S(U[W]);if(t[a].className===G.className&&t[a].objectId===G.objectId)return!0}return!1;case"$notInQuery":for(var H=(0,$.default)(r).call(r,(function(e,t,r){return D(c.className,e,r,c.where)})),X=0;X<H.length;X+=1){var ee=S(H[X]);if(t[a].className===ee.className&&t[a].objectId===ee.objectId)return!1}return!0;case"$containedBy":var te,re=w(t[a]);try{for(re.s();!(te=re.n()).done;){var ae=te.value;if(!x(c,ae))return!1}}catch(e){re.e(e)}finally{re.f()}return!0;case"$geoWithin":if(c.$polygon){var ne,ue=(0,f.default)(ne=c.$polygon).call(ne,(function(e){return[e.latitude,e.longitude]}));return new I(ue).containsPoint(t[a])}if(c.$centerSphere){var ie=(0,g.default)(c.$centerSphere,2),oe=ie[0],le=ie[1],se=new j({latitude:oe[1],longitude:oe[0]});return new j(t[a]).radiansTo(se)<=le}break;case"$geoIntersects":var ce=new I(t[a].coordinates),fe=new j(c.$point);return ce.containsPoint(fe);default:return!1}}return!0}var J={matchesQuery:D,validateQuery:function(e){var t,r=e;e.toJSON&&(r=e.toJSON().where);var a=["$and","$or","$nor","_rperm","_wperm","_perishable_token","_email_verify_token","_email_verify_token_expires_at","_account_lockout_expires_at","_failed_login_count"];(0,c.default)(t=(0,s.default)(r)).call(t,(function(e){if(r&&r[e]&&r[e].$regex&&"string"==typeof r[e].$options&&!r[e].$options.match(/^[imxs]+$/))throw new N(N.INVALID_QUERY,"Bad $options value for query: ".concat(r[e].$options));if((0,p.default)(a).call(a,e)<0&&!e.match(/^[a-zA-Z][a-zA-Z0-9_\.]*$/))throw new N(N.INVALID_KEY_NAME,"Invalid key name: ".concat(e))}))}};e.exports=J}}]);