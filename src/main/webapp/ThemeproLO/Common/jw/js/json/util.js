function filter(a,b,c){var d=b+c;a.load(a.url+d)}function getUrlParam(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)",c=new RegExp(b),d=c.exec(window.location.href);return null==d?"":d[1]}ConnectionManager={tokenName:"",tokenValue:"",post:function(a,b,c){var d=window;$.support.cors=!0,$.ajax({type:"POST",url:a,data:c,dataType:"text",beforeSend:function(a){a.setRequestHeader(ConnectionManager.tokenName,ConnectionManager.tokenValue)},xhrFields:{withCredentials:!0},success:function(a){b.success.call(d,a)},error:function(a){try{b.error&&b.error.call(d,a)}catch(a){}}})},ajaxJsonp:function(a,b,c){$.ajax({url:a,async:!1,dataType:"jsonp",data:c,processData:!1,success:function(a){b.success(a)}})},get:function(a,b,c,d){d?$.getScript(a,b):($.support.cors=!0,$.ajax({type:"GET",url:a,data:c,dataType:"text",xhrFields:{withCredentials:!0},success:function(a){b.success(a)},error:function(a){try{b.error&&b.error(a)}catch(a){}}}))}},AssignmentManager={getCurrentUsername:function(a,b){var c=a+"/web/json/workflow/currentUsername";ConnectionManager.ajaxJsonp(c,b,null)},login:function(a,b,c,d){var e={success:function(e){if(e.username!=b){var f=a+"/web/json/directory/user/sso?username="+encodeURIComponent(b)+"&password="+encodeURIComponent(c);ConnectionManager.ajaxJsonp(f,d,null)}else d.success(e)}};this.getCurrentUsername(a,e)},loginWithHash:function(a,b,c,d){var e={success:function(e){if(e.username!=b){var f=a+"/web/json/directory/user/sso?username="+b+"&hash="+c;ConnectionManager.ajaxJsonp(f,d,null)}else d.success(e)}};this.getCurrentUsername(a,e)},logout:function(a){var b=a+"/j_spring_security_logout";ConnectionManager.ajaxJsonp(b,null,null)},withdrawAssignment:function(a,b){var c=a+"/web/json/workflow/assignment/withdraw/"+b,d={success:function(){document.location=a+"/web/json/workflow/closeDialog"}};ConnectionManager.post(c,d,null)},completeAssignment:function(a,b,c){var d=a+"/web/json/workflow/assignment/complete/"+b,e={success:function(b){if(c){var d=-1==c.indexOf("?")?"?processId=":"&processId=",e=c+d+b.processId;document.location=e}else document.location=a+"/web/json/workflow/closeDialog"}};ConnectionManager.post(d,e,null)},completeAssignmentWithVariable:function(a,b,c,d){var e=a+"/web/json/workflow/assignment/completeWithVariable/"+b,f={success:function(b){if(d){var c=-1==d.indexOf("?")?"?processId=":"&processId=",e=d+c+b.processId;document.location=e}else document.location=a+"/web/json/workflow/closeDialog"}};ConnectionManager.post(e,f,c)}},UrlUtil={encodeUrlParam:function(a){var b=a;try{var c=b.split("\\?");b=c[0],c.length>1&&(b+="?"+UrlUtil.constructUrlQueryString(getUrlParams(c[1])))}catch(a){}return b},mergeRequestQueryString:function(a,b){if(null==a||null==b)return a;var c=UrlUtil.getUrlParams(a);return c=$.extend(c,UrlUtil.getUrlParams(b)),UrlUtil.constructUrlQueryString(c)},getUrlParams:function(b){var c=new Object;if(""!=b)try{var d=b;if(-1!=b.indexOf("?")&&(d=b.substring(b.indexOf("?")+1)),""!=d){var e=d.split("&");for(a in e)if(""!=e[a]){var f=e[a].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]),i=c[g];void 0==i&&(i=new Array),i.push(h),c[g]=i}}}catch(a){}return c},constructUrlQueryString:function(a){var b="";try{for(key in a){var c=a[key];for(value in c)b+=encodeURIComponent(key)+"="+encodeURIComponent(c[value])+"&"}""!=b&&(b=b.substring(0,b.length-1))}catch(a){}return b}};