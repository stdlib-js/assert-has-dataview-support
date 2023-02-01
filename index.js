// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol.toStringTag:"",r=t&&"symbol"==typeof Symbol.toStringTag?function(t){var r,f,a,i,u;if(null==t)return e.call(t);f=t[n],u=n,r=null!=(i=t)&&o.call(i,u);try{t[n]=void 0}catch(o){return e.call(t)}return a=e.call(t),r?t[n]=f:delete t[n],a}:function(t){return e.call(t)},f="function"==typeof DataView,a="function"==typeof ArrayBuffer,i="function"==typeof Float64Array,u="function"==typeof Float64Array?Float64Array:null,y="function"==typeof Float64Array?Float64Array:void 0,l=function(){var t,e,o;if("function"!=typeof u)return!1;try{e=new u([1,3.14,-3.14,NaN]),o=e,t=(i&&o instanceof Float64Array||"[object Float64Array]"===r(o))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?y:function(){throw new Error("not implemented")},c="function"==typeof ArrayBuffer?ArrayBuffer:null,p="function"==typeof ArrayBuffer?ArrayBuffer:void 0,s=function(){var t,e,o,n;if("function"!=typeof c)return!1;try{o=new c(16),n=o,(t=(a&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===r(n))&&"function"==typeof c.isView)&&((e=new l(o))[0]=-3.14,e[1]=NaN,t=t&&c.isView(e)&&16===o.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?p:function(){throw new Error("not implemented")},b="function"==typeof DataView?DataView:null;return function(){var t,e,o,n;if("function"!=typeof b)return!1;try{o=new s(24),e=new b(o,8),n=e,(t=(f&&n instanceof DataView||"[object DataView]"===r(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===o&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).hasDataViewSupport=e();
//# sourceMappingURL=index.js.map
