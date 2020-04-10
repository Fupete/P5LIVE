/*! load-js v3.0.3 - Sat Sep 15 2018 18:17:56 GMT-0400 (EDT). (c) 2018 Miguel Castillo <manchagnu@gmail.com>. Licensed under MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).loadJS=e()}}(function(){return require=_bb$iter=function(e,r){var t={};function n(r){if(!t.hasOwnProperty(r)){var a={exports:{}},i=e[r][0],u=e[r][1];t[r]=a.exports,i((d=u,function(e){var r=d[e];if(o(r))return n(r);for(var t=n.next;t;t=t.next)if(t.has(r))return t.get(r);for(var a=n.prev;a;a=a.prev)if(a.has(r))return a.get(r);throw new Error("Module '"+e+"' with id "+r+" was not found")}),a,a.exports),t[r]=a.exports}var d;return t[r]}function o(r){return e[r]}if(n.get=n,n.has=o,n.next="undefined"==typeof _bb$iter?null:_bb$iter,r.length)for(var a=n,i=n.next;i;)i.prev=a,a=i,i=i.next;return r.forEach(n),n}({1:[function(e,r,t){function n(){var e={},r=document.getElementsByTagName("head")[0]||document.documentElement;function t(t){"string"==typeof t&&(t={url:t});var n=t.id||t.url,o=e[n];if(o)return console.log("load-js: cache hit",n),o;if(!1!==t.allowExternal){var a=function(e){var r=e&&document.getElementById(e);if(r&&"watermark"!==r.loadJS)return console.warn("load-js: duplicate script with id:",e),r}(t.id)||function(e){var r=e&&document.querySelector("script[src='"+e+"']");if(r&&"watermark"!==r.loadJS)return console.warn("load-js: duplicate script with url:",e),r}(t.url);if(a){var i=Promise.resolve(a);return n&&(e[n]=i),i}}if(!t.url&&!t.text)throw new Error("load-js: must provide a url or text to load");var u=(t.url?function(e,r){return new Promise(function(t,n){var o=!1;r.onload=r.onreadystatechange=function(){o||r.readyState&&"loaded"!==r.readyState&&"complete"!==r.readyState||(o=!0,r.onload=r.onreadystatechange=null,t(r))},r.onerror=n,e.appendChild(r)})}:function(e,r){return e.appendChild(r),Promise.resolve(r)})(r,function(e){var r=document.createElement("script");r.charset=e.charset||"utf-8",r.type=e.type||"text/javascript",r.async=!!e.async,r.id=e.id||e.url,r.loadJS="watermark",e.url&&(r.src=e.url);e.text&&(r.text=e.text);return r}(t));return n&&!1!==t.cache&&(e[n]=u),u}return function(e){return e instanceof Array?Promise.all(e.map(t)):t(e)}}r.exports=n(),r.exports.create=n},{}]},[1]),_bb$iter(1)});
//# sourceMappingURL=index.js.map