﻿!function(a){a.fn.hoverIntent=function(b,c){var d={sensitivity:7,interval:100,timeout:0};d=a.extend(d,c?{over:b,out:c}:b);var e,f,g,h,i=function(a){e=a.pageX,f=a.pageY},j=function(b,c){if(c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.abs(g-e)+Math.abs(h-f)<d.sensitivity)return a(c).unbind("mousemove",i),c.hoverIntent_s=1,d.over.apply(c,[b]);g=e,h=f,c.hoverIntent_t=setTimeout(function(){j(b,c)},d.interval)},k=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=0,d.out.apply(b,[a])},l=function(b){for(var c=("mouseover"==b.type?b.fromElement:b.toElement)||b.relatedTarget;c&&c!=this;)try{c=c.parentNode}catch(b){c=this}if(c==this)return!1;var e=jQuery.extend({},b),f=this;f.hoverIntent_t&&(f.hoverIntent_t=clearTimeout(f.hoverIntent_t)),"mouseover"==b.type?(g=e.pageX,h=e.pageY,a(f).bind("mousemove",i),1!=f.hoverIntent_s&&(f.hoverIntent_t=setTimeout(function(){j(e,f)},d.interval))):(a(f).unbind("mousemove",i),1==f.hoverIntent_s&&(f.hoverIntent_t=setTimeout(function(){k(e,f)},d.timeout)))};return this.mouseover(l).mouseout(l)}}(jQuery);