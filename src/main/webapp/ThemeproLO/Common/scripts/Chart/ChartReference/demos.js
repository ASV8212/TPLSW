﻿function getDemoTheme(){var a=document.body?$.data(document.body,"theme"):null;if(null!=a)return a;a="";var b=window.location.toString().indexOf("?");if(-1==b)return"";var a=window.location.toString().substring(1+b);a.indexOf("(")>=0&&(a=a.substring(1)),a.indexOf(")")>=0&&(a=a.substring(0,a.indexOf(")")));var c="../../jqwidgets/styles/jqx."+a+".css";if(window.location.href.toString().indexOf("angularjs")>=0){var d=window.location.href.toString();(d.indexOf("button")>=0||-1==d.indexOf("treegrid")&&d.indexOf("grid")>=0||d.indexOf("dropdownlist")>=0||d.indexOf("combobox")>=0||d.indexOf("datatable")>=0||d.indexOf("listbox")>=0||d.indexOf("tabs")>=0||-1==d.indexOf("listmenu")&&d.indexOf("menu")>=0||d.indexOf("calendar")>=0||d.indexOf("datetimeinput")>=0||d.indexOf("chart")>=0&&-1==d.indexOf("bulletchart"))&&(c="../../../jqwidgets/styles/jqx."+a+".css")}if(window.location.href.toString().indexOf("typescript")>=0&&(c="../../../jqwidgets/styles/jqx."+a+".css"),window.location.href.toString().indexOf("angularjs2")>=0&&(c="../../jqwidgets/styles/jqx."+a+".css"),void 0!=document.createStyleSheet){var e=!1;$.each(document.styleSheets,function(b,c){if(void 0!=c.href&&-1!=c.href.indexOf(a))return e=!0,!1}),e||document.createStyleSheet(c)}else{var e=!1;if(document.styleSheets&&$.each(document.styleSheets,function(b,c){if(void 0!=c.href&&-1!=c.href.indexOf(a))return e=!0,!1}),!e){var f=$('<link rel="stylesheet" href="'+c+'" media="screen" />');f[0].onload=function(){$.jqx&&$.jqx.ready&&$.jqx.ready()},$(document).find("head").append(f)}}return $.jqx=$.jqx||{},$.jqx.theme=a,a}var theme="";try{if(jQuery){if($(document).ready(function(){$(".example-description").css("margin-bottom",15)}),theme=getDemoTheme(),window.location.toString().indexOf("file://")>=0){var loc=window.location.toString(),addMessage=!1;(loc.indexOf("grid")>=0||loc.indexOf("chart")>=0||loc.indexOf("tree")>=0||loc.indexOf("list")>=0||loc.indexOf("combobox")>=0||loc.indexOf("php")>=0||loc.indexOf("adapter")>=0||loc.indexOf("datatable")>=0||loc.indexOf("ajax")>=0)&&(addMessage=!0),addMessage&&$(document).ready(function(){setTimeout(function(){$(document.body).prepend($('<div style="font-size: 12px; font-family: Verdana;">Note: To run a sample that includes data binding, you must open it via "http://..." protocol since Ajax makes http requests.</div><br/>'))},50)})}}else $(document).ready(function(){theme=getDemoTheme()})}catch(a){var er=a}