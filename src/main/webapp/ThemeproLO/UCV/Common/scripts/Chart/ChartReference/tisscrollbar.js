!function(a){a.tis.tisWidget("tisScrollBar","",{}),a.extend(a.tis._tisScrollBar.prototype,{defineInstance:function(){var b={height:null,width:null,vertical:!1,min:0,max:1e3,value:0,step:10,largestep:50,thumbMinSize:10,thumbSize:0,thumbStep:"auto",roundedCorners:"all",showButtons:!0,disabled:!1,touchMode:"auto",touchModeStyle:"auto",thumbTouchSize:0,_triggervaluechanged:!0,rtl:!1,areaDownCapture:!1,areaUpCapture:!1,_initialLayout:!1,offset:0,reference:0,velocity:0,frame:0,timestamp:0,ticker:null,amplitude:0,target:0};return a.extend(!0,this,b),b},createInstance:function(a){this.render()},render:function(){this._mouseup=new Date;var b=this,c="<div id='tisScrollOuterWrap' style='box-sizing: content-box; width:100%; height: 100%; align:left; border: 0px; valign:top; position: relative;'><div id='tisScrollWrap' style='box-sizing: content-box; width:100%; height: 100%; left: 0px; top: 0px; align:left; valign:top; position: absolute;'><div id='tisScrollBtnUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div><div id='tisScrollAreaUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='tisScrollThumb' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='tisScrollAreaDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='tisScrollBtnDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div></div></div>";if(a.tis.utilities&&"hidden"==a.tis.utilities.scrollBarButtonsVisibility&&(this.showButtons=!1),b.WinJS?MSApp.execUnsafeLocalFunction(function(){b.host.html(c)}):this.element.innerHTML=c,void 0!=this.width&&parseInt(this.width)>0&&this.host.width(parseInt(this.width)),void 0!=this.height&&parseInt(this.height)>0&&this.host.height(parseInt(this.height)),this.isPercentage=!1,null!=this.width&&-1!=this.width.toString().indexOf("%")&&(this.host.width(this.width),this.isPercentage=!0),null!=this.height&&-1!=this.height.toString().indexOf("%")&&(this.host.height(this.height),this.isPercentage=!0),this.isPercentage){var d=this;a.tis.utilities.resize(this.host,function(){d._arrange()},!1)}this.thumbCapture=!1,this.scrollOuterWrap=a(this.element.firstChild),this.scrollWrap=a(this.scrollOuterWrap[0].firstChild),this.btnUp=a(this.scrollWrap[0].firstChild),this.areaUp=a(this.btnUp[0].nextSibling),this.btnThumb=a(this.areaUp[0].nextSibling),this.arrowUp=a(this.btnUp[0].firstChild),this.areaDown=a(this.btnThumb[0].nextSibling),this.btnDown=a(this.areaDown[0].nextSibling),this.arrowDown=a(this.btnDown[0].firstChild);var e=this.element.id;if(this.btnUp[0].id="tisScrollBtnUp"+e,this.btnDown[0].id="tisScrollBtnDown"+e,this.btnThumb[0].id="tisScrollThumb"+e,this.areaUp[0].id="tisScrollAreaUp"+e,this.areaDown[0].id="tisScrollAreaDown"+e,this.scrollWrap[0].id="tisScrollWrap"+e,this.scrollOuterWrap[0].id="tisScrollOuterWrap"+e,!this.host.tisRepeatButton)throw new Error("tisScrollBar: Missing reference to tisbuttons.js.");this.btnUp.tisRepeatButton({_ariaDisabled:!0,overrideTheme:!0,disabled:this.disabled}),this.btnDown.tisRepeatButton({_ariaDisabled:!0,overrideTheme:!0,disabled:this.disabled}),this.btnDownInstance=a.data(this.btnDown[0],"tisRepeatButton").instance,this.btnUpInstance=a.data(this.btnUp[0],"tisRepeatButton").instance,this.areaUp.tisRepeatButton({_scrollAreaButton:!0,_ariaDisabled:!0,overrideTheme:!0}),this.areaDown.tisRepeatButton({_scrollAreaButton:!0,_ariaDisabled:!0,overrideTheme:!0}),this.btnThumb.tisButton({_ariaDisabled:!0,overrideTheme:!0,disabled:this.disabled}),this.propertyChangeMap.value=function(a,b,c,d){isNaN(d)||c!=d&&a.setPosition(parseFloat(d),!0)},this.propertyChangeMap.width=function(a,b,c,d){void 0!=a.width&&parseInt(a.width)>0&&(a.host.width(parseInt(a.width)),a._arrange())},this.propertyChangeMap.height=function(a,b,c,d){void 0!=a.height&&parseInt(a.height)>0&&(a.host.height(parseInt(a.height)),a._arrange())},this.propertyChangeMap.theme=function(a,b,c,d){a.setTheme()},this.propertyChangeMap.max=function(a,b,c,d){isNaN(d)||c!=d&&(a.max=parseInt(d),a.min>a.max&&(a.max=a.min+1),a._arrange(),a.setPosition(a.value))},this.propertyChangeMap.min=function(a,b,c,d){isNaN(d)||c!=d&&(a.min=parseInt(d),a.min>a.max&&(a.max=a.min+1),a._arrange(),a.setPosition(a.value))},this.propertyChangeMap.disabled=function(a,b,c,d){c!=d&&(d?a.host.addClass(a.toThemeProperty("tis-fill-state-disabled")):a.host.removeClass(a.toThemeProperty("tis-fill-state-disabled")),a.btnUp.tisRepeatButton("disabled",a.disabled),a.btnDown.tisRepeatButton("disabled",a.disabled),a.btnThumb.tisButton("disabled",a.disabled))},this.propertyChangeMap.touchMode=function(a,b,c,d){c!=d&&(a._updateTouchBehavior(),!0===d?(a.showButtons=!1,a.refresh()):!1===d&&(a.showButtons=!0,a.refresh()))},this.propertyChangeMap.rtl=function(a,b,c,d){c!=d&&a.refresh()},this.buttonUpCapture=!1,this.buttonDownCapture=!1,this._updateTouchBehavior(),this.setPosition(this.value),this._addHandlers(),this.setTheme()},resize:function(a,b){this.width=a,this.height=b,this._arrange()},_updateTouchBehavior:function(){if(this.isTouchDevice=a.tis.mobile.isTouchDevice(),1==this.touchMode){if(a.tis.browser.msie&&a.tis.browser.version<9)return void this.setTheme();this.isTouchDevice=!0,a.tis.mobile.setMobileSimulator(this.btnThumb[0]),this._removeHandlers(),this._addHandlers(),this.setTheme()}else 0==this.touchMode&&(this.isTouchDevice=!1)},_addHandlers:function(){var b=this,c=!1;try{("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(c=!0,this._touchSupport=!0)}catch(a){}if((b.isTouchDevice||c)&&(this.addHandler(this.btnThumb,a.tis.mobile.getTouchEventName("touchend"),function(a){var c=b.vertical?b.toThemeProperty("tis-scrollbar-thumb-state-pressed"):b.toThemeProperty("tis-scrollbar-thumb-state-pressed-horizontal"),d=b.toThemeProperty("tis-fill-state-pressed");return b.btnThumb.removeClass(c),b.btnThumb.removeClass(d),b.disabled||b.handlemouseup(b,a),!1}),this.addHandler(this.btnThumb,a.tis.mobile.getTouchEventName("touchstart"),function(a){if(!b.disabled){if(1==b.touchMode)a.clientX=a.originalEvent.clientX,a.clientY=a.originalEvent.clientY;else{var c=a;c.originalEvent.touches&&c.originalEvent.touches.length?(a.clientX=c.originalEvent.touches[0].clientX,a.clientY=c.originalEvent.touches[0].clientY):(a.clientX=a.originalEvent.clientX,a.clientY=a.originalEvent.clientY)}b.handlemousedown(a),a.preventDefault&&a.preventDefault()}}),a.tis.mobile.touchScroll(this.element,b.max,function(a,c,d,e,f){if("visible"==b.host.css("visibility")){if(1==b.touchMode)f.clientX=f.originalEvent.clientX,f.clientY=f.originalEvent.clientY;else{var g=f;g.originalEvent.touches&&g.originalEvent.touches.length?(f.clientX=g.originalEvent.touches[0].clientX,f.clientY=g.originalEvent.touches[0].clientY):(f.clientX=f.originalEvent.clientX,f.clientY=f.originalEvent.clientY)}var h=b.vertical?b.toThemeProperty("tis-scrollbar-thumb-state-pressed"):b.toThemeProperty("tis-scrollbar-thumb-state-pressed-horizontal");b.btnThumb.addClass(h),b.btnThumb.addClass(b.toThemeProperty("tis-fill-state-pressed")),b.thumbCapture=!0,b.handlemousemove(f)}},b.element.id,b.host,b.host)),!this.isTouchDevice){try{if((""!=document.referrer||window.frameElement)&&null!=window.top&&window.top!=window.self){var d=null;if(window.parent&&document.referrer&&(d=document.referrer),d&&-1!=d.indexOf(document.location.host)){var e=function(a){b.disabled||b.handlemouseup(b,a)};window.top.document.addEventListener?window.top.document.addEventListener("mouseup",e,!1):window.top.document.attachEvent&&window.top.document.attachEvent("onmouseup",e)}}}catch(a){}var f="click mouseup mousedown";this.addHandler(this.btnDown,f,function(a){var c=b.step;switch(Math.abs(b.max-b.min)<=c&&(c=1),b.rtl&&!b.vertical&&(c=-b.step),a.type){case"click":b.buttonDownCapture&&!b.isTouchDevice?b.disabled||b.setPosition(b.value+c):!b.disabled&&b.isTouchDevice&&b.setPosition(b.value+c);break;case"mouseup":if(!b.btnDownInstance.base.disabled&&b.buttonDownCapture)return b.buttonDownCapture=!1,b.btnDown.removeClass(b.toThemeProperty("tis-scrollbar-button-state-pressed")),b.btnDown.removeClass(b.toThemeProperty("tis-fill-state-pressed")),b._removeArrowClasses("pressed","down"),b.handlemouseup(b,a),b.setPosition(b.value+c),!1;break;case"mousedown":if(!b.btnDownInstance.base.disabled)return b.buttonDownCapture=!0,b.btnDown.addClass(b.toThemeProperty("tis-fill-state-pressed")),b.btnDown.addClass(b.toThemeProperty("tis-scrollbar-button-state-pressed")),b._addArrowClasses("pressed","down"),!1}}),this.addHandler(this.btnUp,f,function(a){var c=b.step;switch(Math.abs(b.max-b.min)<=c&&(c=1),b.rtl&&!b.vertical&&(c=-b.step),a.type){case"click":b.buttonUpCapture&&!b.isTouchDevice?b.disabled||b.setPosition(b.value-c):!b.disabled&&b.isTouchDevice&&b.setPosition(b.value-c);break;case"mouseup":if(!b.btnUpInstance.base.disabled&&b.buttonUpCapture)return b.buttonUpCapture=!1,b.btnUp.removeClass(b.toThemeProperty("tis-scrollbar-button-state-pressed")),b.btnUp.removeClass(b.toThemeProperty("tis-fill-state-pressed")),b._removeArrowClasses("pressed","up"),b.handlemouseup(b,a),b.setPosition(b.value-c),!1;break;case"mousedown":if(!b.btnUpInstance.base.disabled)return b.buttonUpCapture=!0,b.btnUp.addClass(b.toThemeProperty("tis-fill-state-pressed")),b.btnUp.addClass(b.toThemeProperty("tis-scrollbar-button-state-pressed")),b._addArrowClasses("pressed","up"),!1}})}var g="click";if(this.isTouchDevice&&(g=a.tis.mobile.getTouchEventName("touchend")),this.addHandler(this.areaUp,g,function(a){if(!b.disabled){var c=b.largestep;return b.rtl&&!b.vertical&&(c=-b.largestep),b.setPosition(b.value-c),!1}}),this.addHandler(this.areaDown,g,function(a){if(!b.disabled){var c=b.largestep;return b.rtl&&!b.vertical&&(c=-b.largestep),b.setPosition(b.value+c),!1}}),this.addHandler(this.areaUp,"mousedown",function(a){if(!b.disabled)return b.areaUpCapture=!0,!1}),this.addHandler(this.areaDown,"mousedown",function(a){if(!b.disabled)return b.areaDownCapture=!0,!1}),this.addHandler(this.btnThumb,"mousedown dragstart",function(a){if("dragstart"===a.type)return!1;b.disabled||b.handlemousedown(a),a.preventDefault&&a.preventDefault()}),this.addHandler(a(document),"mouseup."+this.element.id,function(a){b.disabled||b.handlemouseup(b,a)}),!this.isTouchDevice&&(this.mousemoveFunc=function(a){b.disabled||b.handlemousemove(a)},this.addHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc),this.addHandler(a(document),"mouseleave."+this.element.id,function(a){b.disabled||b.handlemouseleave(a)}),this.addHandler(a(document),"mouseenter."+this.element.id,function(a){b.disabled||b.handlemouseenter(a)}),!b.disabled)){this.addHandler(this.btnUp,"mouseenter mouseleave",function(a){"mouseenter"===a.type?b.disabled||b.btnUpInstance.base.disabled||1==b.touchMode||(b.btnUp.addClass(b.toThemeProperty("tis-scrollbar-button-state-hover")),b.btnUp.addClass(b.toThemeProperty("tis-fill-state-hover")),b._addArrowClasses("hover","up")):b.disabled||b.btnUpInstance.base.disabled||1==b.touchMode||(b.btnUp.removeClass(b.toThemeProperty("tis-scrollbar-button-state-hover")),b.btnUp.removeClass(b.toThemeProperty("tis-fill-state-hover")),b._removeArrowClasses("hover","up"))});var h=b.toThemeProperty("tis-scrollbar-thumb-state-hover");b.vertical||(h=b.toThemeProperty("tis-scrollbar-thumb-state-hover-horizontal")),this.addHandler(this.btnThumb,"mouseenter mouseleave",function(a){"mouseenter"===a.type?b.disabled||1==b.touchMode||(b.btnThumb.addClass(h),b.btnThumb.addClass(b.toThemeProperty("tis-fill-state-hover"))):b.disabled||1==b.touchMode||(b.btnThumb.removeClass(h),b.btnThumb.removeClass(b.toThemeProperty("tis-fill-state-hover")))}),this.addHandler(this.btnDown,"mouseenter mouseleave",function(a){"mouseenter"===a.type?b.disabled||b.btnDownInstance.base.disabled||1==b.touchMode||(b.btnDown.addClass(b.toThemeProperty("tis-scrollbar-button-state-hover")),b.btnDown.addClass(b.toThemeProperty("tis-fill-state-hover")),b._addArrowClasses("hover","down")):b.disabled||b.btnDownInstance.base.disabled||1==b.touchMode||(b.btnDown.removeClass(b.toThemeProperty("tis-scrollbar-button-state-hover")),b.btnDown.removeClass(b.toThemeProperty("tis-fill-state-hover")),b._removeArrowClasses("hover","down"))})}},destroy:function(){var b=this.btnUp,c=this.btnDown,d=this.btnThumb,f=(this.scrollWrap,this.areaUp),g=this.areaDown;this.arrowUp.remove(),delete this.arrowUp,this.arrowDown.remove(),delete this.arrowDown,g.removeClass(),f.removeClass(),c.removeClass(),b.removeClass(),d.removeClass(),b.tisRepeatButton("destroy"),c.tisRepeatButton("destroy"),f.tisRepeatButton("destroy"),g.tisRepeatButton("destroy"),d.tisButton("destroy");var h=a.data(this.element,"tisScrollBar");this._removeHandlers(),this.btnUp=null,this.btnDown=null,this.scrollWrap=null,this.areaUp=null,this.areaDown=null,this.scrollOuterWrap=null,delete this.mousemoveFunc,delete this.btnDownInstance,delete this.btnUpInstance,delete this.scrollOuterWrap,delete this.scrollWrap,delete this.btnDown,delete this.areaDown,delete this.areaUp,delete this.btnDown,delete this.btnUp,delete this.btnThumb,delete this.propertyChangeMap.value,delete this.propertyChangeMap.min,delete this.propertyChangeMap.max,delete this.propertyChangeMap.touchMode,delete this.propertyChangeMap.disabled,delete this.propertyChangeMap.theme,delete this.propertyChangeMap,h&&delete h.instance,this.host.removeData(),this.host.remove(),delete this.host,delete this.set,delete this.get,delete this.call,delete this.element},_removeHandlers:function(){this.removeHandler(this.btnUp,"mouseenter"),this.removeHandler(this.btnDown,"mouseenter"),this.removeHandler(this.btnThumb,"mouseenter"),this.removeHandler(this.btnUp,"mouseleave"),this.removeHandler(this.btnDown,"mouseleave"),this.removeHandler(this.btnThumb,"mouseleave"),this.removeHandler(this.btnUp,"click"),this.removeHandler(this.btnDown,"click"),this.removeHandler(this.btnDown,"mouseup"),this.removeHandler(this.btnUp,"mouseup"),this.removeHandler(this.btnDown,"mousedown"),this.removeHandler(this.btnUp,"mousedown"),this.removeHandler(this.areaUp,"mousedown"),this.removeHandler(this.areaDown,"mousedown"),this.removeHandler(this.areaUp,"click"),this.removeHandler(this.areaDown,"click"),this.removeHandler(this.btnThumb,"mousedown"),this.removeHandler(this.btnThumb,"dragstart"),this.removeHandler(a(document),"mouseup."+this.element.id),this.mousemoveFunc?this.removeHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc):this.removeHandler(a(document),"mousemove."+this.element.id),this.removeHandler(a(document),"mouseleave."+this.element.id),this.removeHandler(a(document),"mouseenter."+this.element.id)},_addArrowClasses:function(a,b){"pressed"==a&&(a="selected"),""!=a&&(a="-"+a),this.vertical?("up"!=b&&void 0!=b||this.arrowUp.addClass(this.toThemeProperty("tis-icon-arrow-up"+a)),"down"!=b&&void 0!=b||this.arrowDown.addClass(this.toThemeProperty("tis-icon-arrow-down"+a))):("up"!=b&&void 0!=b||this.arrowUp.addClass(this.toThemeProperty("tis-icon-arrow-left"+a)),"down"!=b&&void 0!=b||this.arrowDown.addClass(this.toThemeProperty("tis-icon-arrow-right"+a)))},_removeArrowClasses:function(a,b){"pressed"==a&&(a="selected"),""!=a&&(a="-"+a),this.vertical?("up"!=b&&void 0!=b||this.arrowUp.removeClass(this.toThemeProperty("tis-icon-arrow-up"+a)),"down"!=b&&void 0!=b||this.arrowDown.removeClass(this.toThemeProperty("tis-icon-arrow-down"+a))):("up"!=b&&void 0!=b||this.arrowUp.removeClass(this.toThemeProperty("tis-icon-arrow-left"+a)),"down"!=b&&void 0!=b||this.arrowDown.removeClass(this.toThemeProperty("tis-icon-arrow-right"+a)))},setTheme:function(){var b=this.btnUp,c=this.btnDown,d=this.btnThumb,e=this.scrollWrap,h=(this.areaUp,this.areaDown,this.arrowUp),i=this.arrowDown;this.scrollWrap[0].className=this.toThemeProperty("tis-reset"),this.scrollOuterWrap[0].className=this.toThemeProperty("tis-reset");var j=this.toThemeProperty("tis-reset");this.areaDown[0].className=j,this.areaUp[0].className=j;var k=this.toThemeProperty("tis-scrollbar")+" "+this.toThemeProperty("tis-widget")+" "+this.toThemeProperty("tis-widget-content");this.host.addClass(k),this.isTouchDevice&&this.host.addClass(this.toThemeProperty("tis-scrollbar-mobile")),c[0].className=this.toThemeProperty("tis-scrollbar-button-state-normal"),b[0].className=this.toThemeProperty("tis-scrollbar-button-state-normal");var l="";if(this.vertical?(h[0].className=j+" "+this.toThemeProperty("tis-icon-arrow-up"),i[0].className=j+" "+this.toThemeProperty("tis-icon-arrow-down"),l=this.toThemeProperty("tis-scrollbar-thumb-state-normal")):(h[0].className=j+" "+this.toThemeProperty("tis-icon-arrow-left"),i[0].className=j+" "+this.toThemeProperty("tis-icon-arrow-right"),l=this.toThemeProperty("tis-scrollbar-thumb-state-normal-horizontal")),l+=" "+this.toThemeProperty("tis-fill-state-normal"),d[0].className=l,this.disabled?(e.addClass(this.toThemeProperty("tis-fill-state-disabled")),e.removeClass(this.toThemeProperty("tis-scrollbar-state-normal"))):(e.addClass(this.toThemeProperty("tis-scrollbar-state-normal")),e.removeClass(this.toThemeProperty("tis-fill-state-disabled"))),"all"==this.roundedCorners)if(this.host.addClass(this.toThemeProperty("tis-rc-all")),this.vertical){var m=a.tis.cssroundedcorners("top");m=this.toThemeProperty(m),b.addClass(m);var n=a.tis.cssroundedcorners("bottom");n=this.toThemeProperty(n),c.addClass(n)}else{var o=a.tis.cssroundedcorners("left");o=this.toThemeProperty(o),b.addClass(o);var p=a.tis.cssroundedcorners("right");p=this.toThemeProperty(p),c.addClass(p)}else{var q=a.tis.cssroundedcorners(this.roundedCorners);q=this.toThemeProperty(q),elBtnUp.addClass(q),elBtnDown.addClass(q)}var q=a.tis.cssroundedcorners(this.roundedCorners);q=this.toThemeProperty(q),d.hasClass(q)||d.addClass(q),this.isTouchDevice&&0!=this.touchModeStyle&&(this.showButtons=!1,d.addClass(this.toThemeProperty("tis-scrollbar-thumb-state-normal-touch")))},isScrolling:function(){return void 0!=this.thumbCapture&&void 0!=this.buttonDownCapture&&void 0!=this.buttonUpCapture&&void 0!=this.areaDownCapture&&void 0!=this.areaUpCapture&&(this.thumbCapture||this.buttonDownCapture||this.buttonUpCapture||this.areaDownCapture||this.areaUpCapture)},track:function(){var a,b,c,d;a=Date.now(),b=a-this.timestamp,this.timestamp=a,c=this.offset-this.frame,this.frame=this.offset,d=1e3*c/(1+b),this.velocity=.2*d+.2*this.velocity},handlemousedown:function(b){function e(a){d.reference=parseInt(d.btnThumb[0].style.top),d.offset=parseInt(d.btnThumb[0].style.top),d.vertical||(d.reference=parseInt(d.btnThumb[0].style.left),d.offset=parseInt(d.btnThumb[0].style.left)),d.velocity=d.amplitude=0,d.frame=d.offset,d.timestamp=Date.now(),clearInterval(d.ticker),d.ticker=setInterval(function(){d.track()},100)}if(void 0==this.thumbCapture||0==this.thumbCapture){this.thumbCapture=!0;var c=this.btnThumb;null!=c&&(c.addClass(this.toThemeProperty("tis-fill-state-pressed")),this.vertical?c.addClass(this.toThemeProperty("tis-scrollbar-thumb-state-pressed")):c.addClass(this.toThemeProperty("tis-scrollbar-thumb-state-pressed-horizontal")))}var d=this;this.thumbCapture&&a.tis.scrollAnimation&&e(b),this.dragStartX=b.clientX,this.dragStartY=b.clientY,this.dragStartValue=this.value},toggleHover:function(a,b){},refresh:function(){this._arrange()},_setElementPosition:function(a,b,c){isNaN(b)||parseInt(a[0].style.left)!=parseInt(b)&&(a[0].style.left=b+"px"),isNaN(c)||parseInt(a[0].style.top)!=parseInt(c)&&(a[0].style.top=c+"px")},_setElementTopPosition:function(a,b){isNaN(b)||(a[0].style.top=b+"px")},_setElementLeftPosition:function(a,b){isNaN(b)||(a[0].style.left=b+"px")},handlemouseleave:function(a){var b=this.btnUp,c=this.btnDown;if((this.buttonDownCapture||this.buttonUpCapture)&&(b.removeClass(this.toThemeProperty("tis-scrollbar-button-state-pressed")),c.removeClass(this.toThemeProperty("tis-scrollbar-button-state-pressed")),this._removeArrowClasses("pressed")),1==this.thumbCapture){var d=this.btnThumb,e=this.vertical?this.toThemeProperty("tis-scrollbar-thumb-state-pressed"):this.toThemeProperty("tis-scrollbar-thumb-state-pressed-horizontal");d.removeClass(e),d.removeClass(this.toThemeProperty("tis-fill-state-pressed"))}},handlemouseenter:function(a){var b=this.btnUp,c=this.btnDown;if(this.buttonUpCapture&&(b.addClass(this.toThemeProperty("tis-scrollbar-button-state-pressed")),b.addClass(this.toThemeProperty("tis-fill-state-pressed")),this._addArrowClasses("pressed","up")),this.buttonDownCapture&&(c.addClass(this.toThemeProperty("tis-scrollbar-button-state-pressed")),c.addClass(this.toThemeProperty("tis-fill-state-pressed")),this._addArrowClasses("pressed","down")),1==this.thumbCapture){var d=this.btnThumb;this.vertical?d.addClass(this.toThemeProperty("tis-scrollbar-thumb-state-pressed")):d.addClass(this.toThemeProperty("tis-scrollbar-thumb-state-pressed-horizontal")),d.addClass(this.toThemeProperty("tis-fill-state-pressed"))}},handlemousemove:function(a){var b=this.btnUp,c=this.btnDown,d=0;if(null!=c&&null!=b){if(null!=b&&null!=c&&void 0!=this.buttonDownCapture&&void 0!=this.buttonUpCapture&&(this.buttonDownCapture&&a.which==d?(c.removeClass(this.toThemeProperty("tis-scrollbar-button-state-pressed")),c.removeClass(this.toThemeProperty("tis-fill-state-pressed")),this._removeArrowClasses("pressed","down"),this.buttonDownCapture=!1):this.buttonUpCapture&&a.which==d&&(b.removeClass(this.toThemeProperty("tis-scrollbar-button-state-pressed")),b.removeClass(this.toThemeProperty("tis-fill-state-pressed")),this._removeArrowClasses("pressed","up"),this.buttonUpCapture=!1)),1!=this.thumbCapture)return!1;var e=this.btnThumb;if(a.which==d&&!this.isTouchDevice&&!this._touchSupport){this.thumbCapture=!1,this._arrange();var f=this.vertical?this.toThemeProperty("tis-scrollbar-thumb-state-pressed"):this.toThemeProperty("tis-scrollbar-thumb-state-pressed-horizontal");return e.removeClass(f),e.removeClass(this.toThemeProperty("tis-fill-state-pressed")),!0}void 0!=a.preventDefault&&a.preventDefault(),null!=a.originalEvent&&(a.originalEvent.mouseHandled=!0),void 0!=a.stopPropagation&&a.stopPropagation();var g=0;try{g=this.vertical?a.clientY-this.dragStartY:a.clientX-this.dragStartX;var h=this._btnAndThumbSize;this._btnAndThumbSize||(h=this.vertical?b.height()+c.height()+e.height():b.width()+c.width()+e.width());var i=(this.max-this.min)/(this.scrollBarSize-h);if("auto"!=this.thumbStep){if(g*=i,Math.abs(this.dragStartValue+g-this.value)>=parseInt(this.thumbStep)){var j=Math.round(parseInt(g)/this.thumbStep)*this.thumbStep;return this.rtl&&!this.vertical?this.setPosition(this.dragStartValue-j):this.setPosition(this.dragStartValue+j),!1}return!1}g*=i;var j=g;this.rtl&&!this.vertical&&(j=-g),this.setPosition(this.dragStartValue+j),this.offset=parseInt(e[0].style.left),this.vertical&&(this.offset=parseInt(e[0].style.top))}catch(a){alert(a)}return!1}},handlemouseup:function(b,c){function h(){var a,b;if(g.amplitude)if(a=Date.now()-g.timestamp,(b=-g.amplitude*Math.exp(-a/325))>.5||b<-.5){var c=(g.max-g.min)/(g.scrollBarSize-g._btnAndThumbSize),d=c*(g.target+b),e=d;g.rtl&&!g.vertical&&(e=-d),g.setPosition(g.dragStartValue+e),requestAnimationFrame(h)}else{var c=(g.max-g.min)/(g.scrollBarSize-g._btnAndThumbSize),d=c*(g.target+b),e=d;g.rtl&&!g.vertical&&(e=-d),g.setPosition(g.dragStartValue+e)}}var d=!1;if(this.thumbCapture){this.thumbCapture=!1;var e=this.btnThumb,f=this.vertical?this.toThemeProperty("tis-scrollbar-thumb-state-pressed"):this.toThemeProperty("tis-scrollbar-thumb-state-pressed-horizontal");if(e.removeClass(f),e.removeClass(this.toThemeProperty("tis-fill-state-pressed")),d=!0,this._mouseup=new Date,a.tis.scrollAnimation){var g=this;clearInterval(this.ticker),(this.velocity>25||this.velocity<-25)&&(this.amplitude=.8*this.velocity,this.target=Math.round(this.offset+this.amplitude),this.vertical,this.target-=this.reference,this.timestamp=Date.now(),requestAnimationFrame(h))}}if(this.areaDownCapture=this.areaUpCapture=!1,this.buttonUpCapture||this.buttonDownCapture){var i=this.btnUp,j=this.btnDown;this.buttonUpCapture=!1,this.buttonDownCapture=!1,i.removeClass(this.toThemeProperty("tis-scrollbar-button-state-pressed")),j.removeClass(this.toThemeProperty("tis-scrollbar-button-state-pressed")),i.removeClass(this.toThemeProperty("tis-fill-state-pressed")),j.removeClass(this.toThemeProperty("tis-fill-state-pressed")),this._removeArrowClasses("pressed"),d=!0,this._mouseup=new Date}d&&(void 0!=c.preventDefault&&c.preventDefault(),null!=c.originalEvent&&(c.originalEvent.mouseHandled=!0),void 0!=c.stopPropagation&&c.stopPropagation())},setPosition:function(b,c){this.element;if(void 0!=b&&NaN!=b||(b=this.min),b>=this.max&&(b=this.max),b<this.min&&(b=this.min),this.value!==b||1==c){if(b==this.max){var e=new a.Event("complete");this.host.trigger(e)}var f=this.value;if(this._triggervaluechanged){var g=new a.Event("valueChanged");g.previousValue=this.value,g.currentValue=b}this.value=b,this._positionelements(),this._triggervaluechanged&&this.host.trigger(g),this.valueChanged&&this.valueChanged({currentValue:this.value,previousvalue:f})}return b},val:function(a){return function(b){for(var c in b)if(b.hasOwnProperty(c))return!1;return"number"!=typeof a&&("date"!=typeof a&&("boolean"!=typeof a&&"string"!=typeof a))}(a)||0==arguments.length?this.value:(this.setPosition(a),a)},_getThumbSize:function(a){var b=this.max-this.min,c=0;return b>1?c=a/(b+a)*a:1==b?c=a-1:0==b&&(c=a),this.thumbSize>0&&(c=this.thumbSize),c<this.thumbMinSize&&(c=this.thumbMinSize),Math.min(c,a)},_positionelements:function(){var b=(this.element,this.areaUp),c=this.areaDown,f=(this.btnUp,this.btnDown,this.btnThumb),h=(this.scrollWrap,this._height?this._height:this.host.height()),i=this._width?this._width:this.host.width(),j=this.vertical?i:h;this.showButtons||(j=0);var k=this.vertical?h:i;this.scrollBarSize=k;var l=this._getThumbSize(k-2*j);l=Math.floor(l),l<this.thumbMinSize&&(l=this.thumbMinSize),(NaN==h||h<10)&&(h=10),(NaN==i||i<10)&&(i=10),j+=2,this.btnSize=j;var m=this._btnAndThumbSize;if(!this._btnAndThumbSize){var m=this.vertical?2*this.btnSize+f.outerHeight():2*this.btnSize+f.outerWidth();m=Math.round(m)}var n=(k-m)/(this.max-this.min)*(this.value-this.min);if(this.rtl&&!this.vertical&&(n=(k-m)/(this.max-this.min)*(this.max-this.value-this.min)),n=Math.round(n),n<0&&(n=0),this.vertical){var o=k-n-m;o<0&&(o=0),c[0].style.height=o+"px",b[0].style.height=n+"px",this._setElementTopPosition(b,j),this._setElementTopPosition(f,j+n),this._setElementTopPosition(c,j+n+l)}else b[0].style.width=n+"px",c[0].style.width=k-n-m>=0?k-n-m+"px":"0px",this._setElementLeftPosition(b,j),this._setElementLeftPosition(f,j+n),this._setElementLeftPosition(c,2+j+n+l)},_arrange:function(){var a=this;if(a._initialLayout)return void(a._initialLayout=!1);if(a.min>a.max){var b=a.min;a.min=a.max,a.max=b}if(a.min<0){var c=a.max-a.min;a.min=0,a.max=c}var e=(a.element,a.areaUp),f=a.areaDown,g=a.btnUp,h=a.btnDown,i=a.btnThumb,j=a.scrollWrap,k=parseInt(a.element.style.height),l=parseInt(a.element.style.width);if(a.isPercentage)var k=a.host.height(),l=a.host.width();isNaN(k)&&(k=0),isNaN(l)&&(l=0),a._width=l,a._height=k;var m=a.vertical?l:k;a.showButtons||(m=0),g[0].style.width=m+"px",g[0].style.height=m+"px",h[0].style.width=m+"px",h[0].style.height=m+"px",a.vertical?j[0].style.width=l+2+"px":j[0].style.height=k+2+"px",a._setElementPosition(g,0,0);var n=m+2;a.vertical?a._setElementPosition(h,0,k-n):a._setElementPosition(h,l-n,0);var o=a.vertical?k:l;a.scrollBarSize=o;var p=a._getThumbSize(o-2*n);(p=Math.floor(p-2))<a.thumbMinSize&&(p=a.thumbMinSize);var q=!1;a.isTouchDevice&&0!=a.touchModeStyle&&(q=!0),a.vertical?(i[0].style.width=l+"px",i[0].style.height=p+"px",q&&0!==a.thumbTouchSize&&(i.css({width:a.thumbTouchSize+"px"}),i.css("margin-left",(a.host.width()-a.thumbTouchSize)/2))):(i[0].style.width=p+"px",i[0].style.height=k+"px",q&&0!==a.thumbTouchSize&&(i.css({height:a.thumbTouchSize+"px"}),i.css("margin-top",(a.host.height()-a.thumbTouchSize)/2))),(NaN==k||k<10)&&(k=10),(NaN==l||l<10)&&(l=10),a.btnSize=m;var r=a.vertical?2*n+(2+parseInt(i[0].style.height)):2*n+(2+parseInt(i[0].style.width));r=Math.round(r),a._btnAndThumbSize=r;var s=(o-r)/(a.max-a.min)*(a.value-a.min);if(a.rtl&&!a.vertical&&(s=(o-r)/(a.max-a.min)*(a.max-a.value-a.min)),s=Math.round(s),(isNaN(s)||s<0||s===-1/0||s===1/0)&&(s=0),a.vertical){var t=o-s-r;t<0&&(t=0),f[0].style.height=t+"px",f[0].style.width=l+"px",e[0].style.height=s+"px",e[0].style.width=l+"px";var u=parseInt(a.element.style.height);a.isPercentage&&(u=a.host.height()),i[0].style.visibility="inherit",(u-3*parseInt(m)<0||u<r)&&(i[0].style.visibility="hidden"),a._setElementPosition(e,0,n),a._setElementPosition(i,0,n+s),a._setElementPosition(f,0,n+s+p)}else{s>0&&(e[0].style.width=s+"px"),k>0&&(e[0].style.height=k+"px");var v=o-s-r;v<0&&(v=0),f[0].style.width=v+"px",f[0].style.height=k+"px";var w=parseInt(a.element.style.width);a.isPercentage&&(w=a.host.width()),i[0].style.visibility="inherit",(w-3*parseInt(m)<0||w<r)&&(i[0].style.visibility="hidden"),a._setElementPosition(e,n,0),a._setElementPosition(i,n+s,0),a._setElementPosition(f,n+s+p,0)}}})}(tisBaseFramework);