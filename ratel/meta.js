!function e(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.RatelMaterialMeta=r():t.RatelMaterialMeta=r()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=a(e,"string");return"symbol"===n(t)?t:String(t)}function a(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}r.r(t),r.d(t,"components",(function(){return k})),r.d(t,"componentList",(function(){return I}));var l,p=[{title:"Div",screenshot:"",schema:{componentName:"Div",props:{}}}],f=i(i({},{componentName:"Div",title:"\u81ea\u7531\u5bb9\u5668",docUrl:"",screenshot:"",devMode:"proCode",npm:{package:"ratel-material",version:"0.1.0",exportName:"Div",main:"src/index.tsx",destructuring:!0,subName:""},configure:{props:[{title:{label:{type:"i18n","en-US":"HTML tag","zh-CN":"HTML\u6807\u7b7e"},tip:"\u751f\u6210\u7684\u7c7b\u540d\u5b57"},name:"HTMLTag",description:"HTML\u6807\u7b7e",setter:{componentName:"StringSetter",isRequired:!1,initialValue:""}}],supports:{style:!0},component:{isContainer:!0}},category:"\u5e03\u5c40\u5bb9\u5668\u7c7b"}),{},{snippets:p});function s(e,t){return b(e)||y(e,t)||g(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}function b(e){if(Array.isArray(e))return e}function d(e){return h(e)||O(e)||g(e)||v()}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}function O(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function h(e){if(Array.isArray(e))return j(e)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return(t=N(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){var t=x(e,"string");return"symbol"===M(t)?t:String(t)}function x(e,t){if("object"!==M(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var D={};function A(e){var t=[{title:"\u5e38\u7528",icon:"",children:[]},{title:"\u5bb9\u5668",icon:"",children:[]},{title:"\u5bfc\u822a",icon:"",children:[]},{title:"\u5185\u5bb9",icon:"",children:[]},{title:"Feedback \u53cd\u9988",icon:"",children:[]}],r={"\u539f\u5b50\u7ec4\u4ef6":!0},n={};return e.forEach((function(e){var o=e.category||"\u5176\u4ed6";e.group&&!n[e.componentName]&&(n[e.componentName]=e.group),e.group&&!r[e.group]&&(r[e.group]=!0);var i=t.find((function(e){return e.title===o}));i||(i={title:o,icon:"",children:[]},t.push(i)),e.snippets&&e.snippets.length&&i.children.push({componentName:e.componentName,title:e.title||e.componentName,sort:{category:i.title,group:n[e.componentName]||"\u539f\u5b50\u7ec4\u4ef6",priority:D[i.title]||0},icon:"",package:e.npm.pkg,snippets:e.snippets||[]})})),t}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ratel-material",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0.1.0",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"@alifd/next":"1.25.23","@alifd/meet":"2.6.3",antd:"4.17.3"};if(!e||!r)return e;var o=e.npm;return o?("object"===M(n)&&n[o.package]?e.npm=w(w({},o),{},{version:n[o.package]}):o.package===t&&(e.npm=w(w({},o),{},{version:r})),e):e}["\u57fa\u7840\u5143\u7d20","\u5e03\u5c40\u5bb9\u5668\u7c7b","\u8868\u683c\u7c7b","\u8868\u5355\u8be6\u60c5\u7c7b","\u5e2e\u52a9\u7c7b","\u5bf9\u8bdd\u6846\u7c7b","\u4e1a\u52a1\u7c7b","\u901a\u7528","\u5f15\u5bfc","\u4fe1\u606f\u8f93\u5165","\u4fe1\u606f\u5c55\u793a","\u4fe1\u606f\u53cd\u9988"].reverse().forEach((function(e,t){D[e]=++t}));var T,k=[],_={};[f].forEach((function(e){if(Array.isArray(e))k.push.apply(k,d(e.map((function(e){if(!e.npm){var t=e.componentName,r=t.split("."),n=s(r,2),o=n[0],i=n[1];e.npm={exportName:o,main:"",destructuring:!0,subName:r.length>1?t.slice(t.indexOf(".")+1):i}}return e.npm=w(w({},_),e.npm||{}),E(e)}))));else if(e.components)k.push.apply(k,d(e.components.map((function(e){if(!e.npm){var t=e.componentName,r=t.split("."),n=s(r,2),o=n[0],i=n[1];e.npm={exportName:o,main:"",destructuring:!0,subName:r.length>1?t.slice(t.indexOf(".")+1):i}}return e.npm=w(w({},_),e.npm||{}),E(e)}))));else{if(!e.npm){var t=e.componentName,r=t.split("."),n=s(r,2),o=n[0],i=n[1];e.npm={exportName:o,main:"",destructuring:!0,subName:r.length>1?t.slice(t.indexOf(".")+1):i}}e.npm=w(w({},_),e.npm||{}),k.push(E(e))}}));var I=A(k),L=!0}])}));