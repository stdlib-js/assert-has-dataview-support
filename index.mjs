// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-dataview@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs";var a="function"==typeof DataView?DataView:null,n=t,o=e,r=a;var s=function(){var t,e,a;if("function"!=typeof r)return!1;try{a=new o(24),e=new r(a,8),(t=n(e)&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===a&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t};export{s as default};
//# sourceMappingURL=index.mjs.map
