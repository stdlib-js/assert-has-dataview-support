// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-dataview@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs";var a="function"==typeof DataView?DataView:null;function n(){var n,o,s;if("function"!=typeof a)return!1;try{s=new e(24),o=new a(s,8),(n=t(o)&&"function"==typeof o.getFloat64&&"function"==typeof o.setFloat64)&&(o.setFloat64(0,-3.14),o.setFloat64(8,NaN),n=n&&o.buffer===s&&16===o.byteLength&&8===o.byteOffset&&-3.14===o.getFloat64(0)&&o.getFloat64(8)!=o.getFloat64(8))}catch(t){n=!1}return n}export{n as default};
//# sourceMappingURL=index.mjs.map
