!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(2),u=function(e){return e&&e.__esModule?e:{default:e}}(o);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"render",value:function(){return u.default.createElement("h1",null,"HelloHOGE2")}}]),t}();t.default=i},function(e,t,r){"use strict";e.exports=r(3)},function(e,t,r){"use strict";
/** @license React v16.4.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(4),o=r(5),u=r(6),i=r(7),f="function"==typeof Symbol&&Symbol.for,l=f?Symbol.for("react.element"):60103,c=f?Symbol.for("react.portal"):60106,a=f?Symbol.for("react.fragment"):60107,s=f?Symbol.for("react.strict_mode"):60108,p=f?Symbol.for("react.profiler"):60114,y=f?Symbol.for("react.provider"):60109,d=f?Symbol.for("react.context"):60110,v=f?Symbol.for("react.async_mode"):60111,b=f?Symbol.for("react.forward_ref"):60112;f&&Symbol.for("react.timeout");var h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function g(e,t,r){this.props=e,this.context=t,this.refs=u,this.updater=r||_}function j(){}function O(e,t,r){this.props=e,this.context=t,this.refs=u,this.updater=r||_}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var w=O.prototype=new j;w.constructor=O,n(w,g.prototype),w.isPureReactComponent=!0;var S={current:null},x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n=void 0,o={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)x.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var c=Array(f),a=0;a<f;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:l,type:e,key:u,ref:i,props:o,_owner:S.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var E=/\/+/g,$=[];function C(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function A(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case l:case c:u=!0}}if(u)return r(n,e,""===t?"."+T(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=t+T(o=e[i],i);u+=A(o,f,r,n)}else if(null===e||void 0===e?f=null:f="function"==typeof(f=h&&e[h]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),i=0;!(o=e.next()).done;)u+=A(o=o.value,f=t+T(o,i++),r,n);else"object"===o&&m("31","[object Object]"===(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return u}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,i.thatReturnsArgument):null!=e&&(R(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r,e={$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),n.push(e))}function U(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(E,"$&/")+"/"),t=C(t,u,n,o),null==e||A(e,"",N,t),M(t)}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;t=C(null,null,t,r),null==e||A(e,"",q,t),M(t)},count:function(e){return null==e?0:A(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return U(e,t,null,i.thatReturnsArgument),t},only:function(e){return R(e)||m("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:y,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},Fragment:a,StrictMode:s,unstable_AsyncMode:v,unstable_Profiler:p,createElement:k,cloneElement:function(e,t,r){(null===e||void 0===e)&&m("267",e);var o=void 0,u=n({},e.props),i=e.key,f=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(f=t.ref,c=S.current),void 0!==t.key&&(i=""+t.key);var a=void 0;for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)x.call(t,o)&&!P.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==a?a[o]:t[o])}if(1===(o=arguments.length-2))u.children=r;else if(1<o){a=Array(o);for(var s=0;s<o;s++)a[s]=arguments[s+2];u.children=a}return{$$typeof:l,type:e.type,key:i,ref:f,props:u,_owner:c}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:S,assign:n}},I={default:F},V=I&&F||I;e.exports=V.default?V.default:V},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,f=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in r=Object(arguments[l]))o.call(r,c)&&(f[c]=r[c]);if(n){i=n(r);for(var a=0;a<i.length;a++)u.call(r,i[a])&&(f[i[a]]=r[i[a]])}}return f}},function(e,t,r){"use strict";var n=function(e){};e.exports=function(e,t,r,o,u,i,f,l){if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[r,o,u,i,f,l],s=0;(c=new Error(t.replace(/%s/g,function(){return a[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,r){"use strict";e.exports={}},function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o}])});