// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol:void 0,r="function"==typeof n?n.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,f,a,i,u;if(null==t)return e.call(t);f=t[r],u=r,n=null!=(i=t)&&o.call(i,u);try{t[r]=void 0}catch(o){return e.call(t)}return a=e.call(t),n?t[r]=f:delete t[r],a}:function(t){return e.call(t)},a="function"==typeof DataView,i="function"==typeof ArrayBuffer,u="function"==typeof Float64Array,y="function"==typeof Float64Array?Float64Array:null,l="function"==typeof Float64Array?Float64Array:void 0,c=function(){var t,e,o;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),o=e,t=(u&&o instanceof Float64Array||"[object Float64Array]"===f(o))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?l:function(){throw new Error("not implemented")},p="function"==typeof ArrayBuffer?ArrayBuffer:null,s="function"==typeof ArrayBuffer?ArrayBuffer:void 0,b=function(){var t,e,o,n;if("function"!=typeof p)return!1;try{o=new p(16),n=o,(t=(i&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===f(n))&&"function"==typeof p.isView)&&((e=new c(o))[0]=-3.14,e[1]=NaN,t=t&&p.isView(e)&&16===o.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?s:function(){throw new Error("not implemented")},w="function"==typeof DataView?DataView:null;return function(){var t,e,o,n;if("function"!=typeof w)return!1;try{o=new b(24),e=new w(o,8),n=e,(t=(a&&n instanceof DataView||"[object DataView]"===f(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===o&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).hasDataViewSupport=e();
//# sourceMappingURL=browser.js.map
