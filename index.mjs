// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";function m(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),i}var d=m(Object.freeze({__proto__:null,default:()=>()=>{}}))("none-by-right-async:limit");function f(e,m){var f,p,u;if(f={},arguments.length>1){if(p=function(e,t){return n(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(r("1RT2o","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!c(e.limit))?new TypeError(r("1RT3P","limit",e.limit)):null):new TypeError(r("1RT2V",t))}(f,e),p)throw p;u=m}else u=e;if(!t(u))throw new TypeError(r("1RT3q",u));return f.series?f.limit=1:f.limit||(f.limit=s),function(e,s){if(!i(e))throw new TypeError(r("1RTAh",e));if(!t(s))throw new TypeError(r("1RT3q",s));return function(e,t,i,r){var s,n,o,l,c,m;if(l=e.length,d("Collection length: %d",l),0===l)return d("Finished processing a collection."),r(null,!0);for(o=l<t.limit?l:t.limit,d("Concurrency limit: %d",o),d("Number of arguments: %d",i.length),s=0,c=l,m=0;m<o;m++)c>0&&f();function f(){d("Collection element %d: %s.",c-=1,JSON.stringify(e[c])),2===i.length?i.call(t.thisArg,e[c],p):3===i.length?i.call(t.thisArg,e[c],c,p):i.call(t.thisArg,e[c],c,e,p)}function p(e,t){if(!n)return e?(n=!0,d("Encountered an error: %s",e.message),r(e)):(d("Processed %d of %d collection elements.",s+=1,l),d("Test result: %s",!!t),t&&!n?(n=!0,d("Finished processing a collection."),r(null,!1)):c>0?f():s===l?(d("Finished processing a collection."),r(null,!0)):void 0)}}(e,f,u,(function(e,t){if(e)return s(e,!1);s(null,t)}))}}function p(e,t,i,r){if(arguments.length<4)return f(t)(e,i);f(t,i)(e,r)}e(p,"factory",f);export{p as default,f as factory};
//# sourceMappingURL=index.mjs.map
