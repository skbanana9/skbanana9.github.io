(function(){'use strict';var b;var f=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},g=function(a){if(f(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&f(a))return a;return null};var h=function(){};goog.inherits(h,HTMLAudioElement);b=h.prototype;b.createdCallback=function(){this.a=!1;this.hasAttribute("gwd-controls")&&this.setAttribute("controls","")};b.attachedCallback=function(){if("function"==typeof this.gwdLoad&&"function"==typeof this.gwdIsLoaded&&!this.gwdIsLoaded()){var a=g(this),c=a&&"function"==typeof a.gwdIsLoaded;(!a||c&&a.gwdIsLoaded())&&this.gwdLoad()}this.autoplay&&this.paused&&this.play()};
b.attributeChangedCallback=function(a){"sources"==a&&l(this);"gwd-controls"==a&&(this.hasAttribute("gwd-controls")?this.setAttribute("controls",""):this.removeAttribute("controls"))};b.gwdLoad=function(){l(this);this.a=!0;var a=document.createEvent("Event");a.initEvent("ready",!0,!0);this.dispatchEvent(a)};b.gwdIsLoaded=function(){return this.a};b.mute=function(){this.muted=!this.muted};b.replay=function(){this.seek(0);this.play()};b.seek=function(a){this.currentTime=a};
var l=function(a){for(var c=a.getAttribute("sources"),c=c?c.split(","):[],d;d=a.firstChild;)a.removeChild(d);for(d=0;d<c.length;++d){var k=document.createElement("source"),m=k;var e=c[d];e=e.trim();e=window.Enabler?Enabler.getUrl(e):e;m.src=e;a.appendChild(k)}};document.registerElement("gwd-audio",{prototype:h.prototype,"extends":"audio"});}).call(this);
