"use strict";var r=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var o=r(function(F,i){"use strict";var s=typeof DataView=="function"?DataView:null;i.exports=s});var n=r(function(b,u){"use strict";var l=require("@stdlib/assert-is-dataview"),c=require("@stdlib/array-buffer"),f=o();function p(){var e,t,a;if(typeof f!="function")return!1;try{a=new c(24),t=new f(a,8),e=l(t)&&typeof t.getFloat64=="function"&&typeof t.setFloat64=="function",e&&(t.setFloat64(0,-3.14),t.setFloat64(8,NaN),e=e&&t.buffer===a&&t.byteLength===16&&t.byteOffset===8&&t.getFloat64(0)===-3.14&&t.getFloat64(8)!==t.getFloat64(8))}catch(w){e=!1}return e}u.exports=p});var v=n();module.exports=v;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
