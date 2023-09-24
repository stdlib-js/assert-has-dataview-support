"use strict";var r=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var o=r(function(F,i){
var s=typeof DataView=="function"?DataView:null;i.exports=s
});var n=r(function(b,u){
var l=require('@stdlib/assert-is-dataview/dist'),c=require('@stdlib/array-buffer/dist'),f=o();function p(){var e,t,a;if(typeof f!="function")return!1;try{a=new c(24),t=new f(a,8),e=l(t)&&typeof t.getFloat64=="function"&&typeof t.setFloat64=="function",e&&(t.setFloat64(0,-3.14),t.setFloat64(8,NaN),e=e&&t.buffer===a&&t.byteLength===16&&t.byteOffset===8&&t.getFloat64(0)===-3.14&&t.getFloat64(8)!==t.getFloat64(8))}catch(w){e=!1}return e}u.exports=p
});var v=n();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
