var BTN = "."

function Fncallwebservice(cntrl,fnname, par, control1,hdncolumn,enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

	var Prvnt=$(window.parent.parent.document).find('#Prvnt').val()
	x=JSON.stringify(par)
	x=x.replace("}",",\"Prvnt\":\""+Prvnt+"\"}")
	par=JSON.parse(x);


//    $("#popup").dialog("open");

   // var
    ajaxindicatorstart("Loading.. Please wait");
    $.ajax({
        url: "/TPLSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
        	ajaxindicatorstop();
        	//alertify.alert(result);
           //return;
		  
            result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
                $("#popup").dialog();
                $("#popup").dialog("option", "width", 805);
                $("#popup").dialog("option", "closeOnEscape", true);
                $("#popup").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               handlejson(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            }
        },
        error: function (xhr, status, error) {
			ajaxindicatorstop();
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function FncallwebserviceLrgDataSPL(cntrl,fnname, par, control1,hdncolumn,enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

//    $("#popup").dialog("open");

var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId

   // var
   // ajaxindicatorstart("Loading.. Please wait");
    /*$.ajax({
        url: "/TPLSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
        	ajaxindicatorstop();
        	//alertify.alert(result);
           //return;
            result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
        	//return;
            if (JSON.stringify(json.a) === '{}') {
                alert(LoadFrmXML("V0072"))

            }
            else {
                $("#popup").dialog();
                $("#popup").dialog("option", "width", 805);
                $("#popup").dialog("option", "closeOnEscape", true);
                $("#popup").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               handlejson(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            }
        },
        error: function (xhr, status, error) {
			ajaxindicatorstop();
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });*/
	
		//var op=UI_getdata(Param,brid,MnuId,"","",spname);
		
	////
	//return;
		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
             //  async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	 result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
					if(json == "")
			{
					alert(LoadFrmXML("V0072"));
					return
			}
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            }
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
			alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });
		
		
		
	////

}

///


function FncallwebserviceLrgData(cntrl,fnname, par, control1,hdncolumn,enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

//    $("#popup").dialog("open");

var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var DBSRC=par.DBSrc

   // var
   // ajaxindicatorstart("Loading.. Please wait");
    /*$.ajax({
        url: "/TPLSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
        	ajaxindicatorstop();
        	//alertify.alert(result);
           //return;
            result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
        	//return;
            if (JSON.stringify(json.a) === '{}') {
                alert(LoadFrmXML("V0072"))

            }
            else {
                $("#popup").dialog();
                $("#popup").dialog("option", "width", 805);
                $("#popup").dialog("option", "closeOnEscape", true);
                $("#popup").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               handlejson(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            }
        },
        error: function (xhr, status, error) {
			ajaxindicatorstop();
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });*/
	
		//var op=UI_getdata(Param,brid,MnuId,"","",spname);
		
	////
	
		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSRC,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
             //  async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	 result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        				
			if(json == "")
			{
					alert(LoadFrmXML("V0072"));
					return
			}
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
                $("#popup").dialog();
                $("#popup").dialog("option", "width", 805);
                $("#popup").dialog("option", "closeOnEscape", true);
                $("#popup").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               handlejson(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            }
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
			alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });
		
		
		
	////

}

//QueueLlrgdata start

//QueueLlrgdata start

function FncallFEPQueueLrgData(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

    var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
  var DBSRC=par.DBSrc

  
  		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSRC,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	        result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
					if(json == "")
			{
					//alert(LoadFrmXML("V0072"));
					  $('#Table1').empty();
					  	$("#Table1_info").text('Showing 0 to 0 of 0 entries');
						$("#Table1_paginate").remove();
						$("#Table1_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
// For Side Tree Inbox/Queue Count Start			

// For Side Tree Inbox/Queue Count End			
									

					return
			}
			
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
          //  handlejsonModPageGrid(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl);
            	
								
				handlejsonQueueFEP(JSON.parse(((((JSON.stringify(json.a).replace(/`~~`/g, "</")).replace(/~`/g, "/>")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, cntrl);
			}
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
			alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });
	   
	   
}

//QueueLlrgdata end


function FncallQueueLrgData(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

    var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
  

  
  		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	        result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
					if(json == "")
			{
					//alert(LoadFrmXML("V0072"));
					  $('#Table1').empty();
					  	$("#Table1_info").text('Showing 0 to 0 of 0 entries');
						$("#Table1_paginate").remove();
						$("#Table1_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
// For Side Tree Inbox/Queue Count Start			
var QmainMenuID = $(window.parent.document).find('ul.tabs li.active').attr('name').split('~')[0];
var QSubMenuClass = $(cntrl).attr('name');
var QIcon="";

if($($(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').contents()).length == 2)
{
	QIcon= $($(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').contents()[0]).prop('outerHTML');
}
else if($($(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').contents()).length == 3)
{
		QIcon= $($(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').contents()[1]).prop('outerHTML');
}
else
{
QIcon = $(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').text();	
}

var QSubMenuTXT = QIcon + QSubMenuClass.replace(/_/g,' ') + ' (0)';

$("#"+$(cntrl).find('span').attr('id')).text('0');


$(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').text('');
$(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').append(QSubMenuTXT)
// For Side Tree Inbox/Queue Count End			
									

					return
			}
			
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
          //  handlejsonModPageGrid(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl);
	handlejsonQueue(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, cntrl);
			}
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
			alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });
	   
	   
}

//QueueLlrgdata end



// FEP DASH

function FncallFEPDashLrgData(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var DBSrc = par.DBSrc;  

  
  		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: true,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	        result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
					if(json == "")
			{
					alert(LoadFrmXML("V0072"));
					  $('#'+fnname).empty();
					  	$("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
						$("#"+fnname+"_paginate").remove();
						$("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
					return
			}
			
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            handlejsonModDashGridWOP(JSON.parse(((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl,par);
			}
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
			//alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });
		
  
       //  
	   
}


function FncallFEPDashLrgDataFP(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var DBSrc = par.DBSrc;  

  
  		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: true,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	        result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
					if(json == "")
			{
					alert(LoadFrmXML("V0072"));
					  $('#'+fnname).empty();
					  	$("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
						$("#"+fnname+"_paginate").remove();
						$("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
					return
			}
			
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            	handlejsonModDashGridFP(JSON.parse(((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl,par);
			}
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
			//alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });
		
  
       //  
	   
}



function FncallFEPDashLrgDataWP(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var DBSrc = par.DBSrc;  

  
  		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	        result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
					if(json == "")
			{
					alert(LoadFrmXML("V0072"));
					  $('#'+fnname).empty();
					  	$("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
						$("#"+fnname+"_paginate").remove();
						$("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
					return
			}
			
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            handlejsonModDashGridWP(JSON.parse(((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl,par);
			}
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
			//alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });
		
  
       //  
	   
}


// FEP DASH




//PgMdGrdLrgdata start

function FncallModPageGridLrgData(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
  

  
  		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	        result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
					if(json == "")
			{
					alert(LoadFrmXML("V0072"));
					  $('#'+fnname).empty();
					  	$("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
						$("#"+fnname+"_paginate").remove();
						$("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
					return
			}
			
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            handlejsonModPageGrid(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl);
			}
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
			alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });
		
  
       //   

}

//For Two Large Grid Data Start
function FncallModPageGridLrgData1(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
  

  
  		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	        result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
					if(json == "")
			{
					alert(LoadFrmXML("V0072"));
					  $('#'+fnname).empty();
					  	$("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
						$("#"+fnname+"_paginate").remove();
						$("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
					return
			}
			
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            handlejsonModPageGrid1(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl);
			}
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
			alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });
		
  
       //   

}
//For Two Large Grid Data Start
//PgMdGrdLrgdata end


///
function FncallwebserviceGrid(cntrl,fnname, par, control1,hdncolumn,enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

if(par.Mode!=undefined)
{
hdncolumn = par.Mode;
}


var Prvnt=$(window.parent.parent.document).find('#Prvnt').val()
	x=JSON.stringify(par)
	x=x.replace("}",",\"Prvnt\":\""+Prvnt+"\"}")
	par=JSON.parse(x);
	//    $("#popup").dialog("open");

   // var
  
    $.ajax({
        url: "/TPLSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
        	
        	//alertify.alert(result);
           //return;
           result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
        	//return;
            if (JSON.stringify(json.a) === '{}') {
                alert(LoadFrmXML("V0072"))

            }
            else {
                //$("#popup").dialog();
               // $("#popup").dialog("option", "width", 805);
               // $("#popup").dialog("option", "closeOnEscape", true);
                //$("#popup").dialog("option", "position", { my: "left top", at: "left bottom", of: $(cntrl) });
				
				
                handlejsonGrid(JSON.parse((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")),fnname, control1, hdncolumn, enablecontrol);
            }
        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

///////////QUEUE

function FncallQueue(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

	
	var Prvnt=$(window.parent.parent.document).find('#Prvnt').val()
	x=JSON.stringify(par)
	x=x.replace("}",",\"Prvnt\":\""+Prvnt+"\"}")
	par=JSON.parse(x);
    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
    $.ajax({
        url: "/TPLSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
        	//ajaxindicatorstop();
        	//alertify.alert(result);
           //return;
            result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
        	//return;
            if (JSON.stringify(json.a) === '{}') {
                alert(LoadFrmXML("V0072"))

            }
            else {
                //$("#popup").dialog();
               // $("#popup").dialog("option", "width", 805);
               // $("#popup").dialog("option", "closeOnEscape", true);
                //$("#popup").dialog("option", "position", { my: "left top", at: "left bottom", of: $(cntrl) });
            	handlejsonQueue(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, cntrl);
            }
        },
        error: function (xhr, status, error) {
			//ajaxindicatorstop();
            var err = eval("(" + xhr.responseText + ")");
            alert(err);
        }
    });
}
// Queue End

function FncallModPageGrid(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

	var Prvnt=$(window.parent.parent.document).find('#Prvnt').val()
	x=JSON.stringify(par)
	x=x.replace("}",",\"Prvnt\":\""+Prvnt+"\"}")
	par=JSON.parse(x);
    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
    $.ajax({
        url: "/TPLSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
        	//ajaxindicatorstop();
        	//alertify.alert(result);
           //return;
            result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
        	//return;
            if (JSON.stringify(json.a) === '{}') {
                alert(LoadFrmXML("V0072"))

            }
            else {
                //$("#popup").dialog();
               // $("#popup").dialog("option", "width", 805);
               // $("#popup").dialog("option", "closeOnEscape", true);
                //$("#popup").dialog("option", "position", { my: "left top", at: "left bottom", of: $(cntrl) });
            	handlejsonModPageGrid(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl);
            }
        },
        error: function (xhr, status, error) {
			//ajaxindicatorstop();
            var err = eval("(" + xhr.responseText + ")");
            alert(err);
        }
    });
}


function FncallwebserviceChk(cntrl,fnname, par, control1,hdncolumn,enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

//    $("#popup").dialog("open");

	var Prvnt=$(window.parent.parent.document).find('#Prvnt').val()
	x=JSON.stringify(par)
	x=x.replace("}",",\"Prvnt\":\""+Prvnt+"\"}")
	par=JSON.parse(x);
	
   // var
    ajaxindicatorstart("Loading.. Please wait");
    $.ajax({
        url: "/TPLSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
        	ajaxindicatorstop();
        	//alertify.alert(result);
           //return;
            result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
        	//return;
            if (JSON.stringify(json.a) === '{}') {
                alert(LoadFrmXML("V0072"))

            }
            else {
                $("#popup").dialog();
                $("#popup").dialog("option", "width", 805);
                $("#popup").dialog("option", "closeOnEscape", true);
                $("#popup").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               handlejsonChk(JSON.parse((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")), control1, hdncolumn, enablecontrol);
            }
        },
        error: function (xhr, status, error) {
			ajaxindicatorstop();
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}

function FncallPageGrid(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

	var Prvnt=$(window.parent.parent.document).find('#Prvnt').val()
	x=JSON.stringify(par)
	x=x.replace("}",",\"Prvnt\":\""+Prvnt+"\"}")
	par=JSON.parse(x);
    //    $("#popup").dialog("open");
  ajaxindicatorstart("Loading.. Please wait");
    $.ajax({
        url: "/TPLSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
        	ajaxindicatorstop();
        	//alertify.alert(result);
           //return;
            result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
        	//return;
            if (JSON.stringify(json.a) === '{}') {
                alert(LoadFrmXML("V0072"))

            }
            else {
                //$("#popup").dialog();
               // $("#popup").dialog("option", "width", 805);
               // $("#popup").dialog("option", "closeOnEscape", true);
                //$("#popup").dialog("option", "position", { my: "left top", at: "left bottom", of: $(cntrl) });
            	handlejsonPageGrid(JSON.parse(((((JSON.stringify(json.a).replace(/`~~`/g, "</")).replace(/~`/g, "/>")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, enablecontrol);
            }
        },
        error: function (xhr, status, error) {
			ajaxindicatorstop();
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}




function FncallInstrRegGridLrgData_FinanceASync(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");

   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
  
  
  		$.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
              // async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;
					
			if (op != "")
			{				
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
				
	
	        result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
					if(json == "")
			{
					alert(LoadFrmXML("V0072"));
					  $('#'+fnname).empty();
					  	$("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
						$("#"+fnname+"_paginate").remove();
						$("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
					return
			}
			
			
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	//alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            handlejsonModPageGrid(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl);
		
		//TotInstrumentValueOnUpload();
		
		//alertify.alert("To be Financed Data Fetched");
			
			
	
	//$('#GridValidate').val('1')
		
	//var cS=0,cf=0;
	//var tablLen=0;
//	tablLen = $('#Table2').find('tbody').find('tr').length;

		//alertify.alert("<p>Total No. of Records Validated: "+tablLen+"</p><p>No. of Successful Records: "+cS+"</p><p>No. of Failure Records: "+cf+"</p>")
		//alertify.alert("<p>Total No. of Records Validated: "+tablLen+"</p>")
			
			
			}
	ajaxindicatorstop();
					
			}		//ajaxindicatorstop();
			else
			{
					ajaxindicatorstop();
			alert(LoadFrmXML("V0072"));
            
			}
			},
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
				ajaxindicatorstop();
					alert(LoadFrmXML("V0126"));
				OP="Fail";
				
            }
                                  
               
    	   });
		
  
       //   

}





//////////////

var dtData1 = {};
var myData;
var popTable;
var popTableModPageGrid;
var popTablePageGrid;
var popTableChk;
var dtData2 = {};
var myData1;
var popTable1;
var popTableModPageGrid1;
var popTablePageGrid1;
var popTableChk1;
var popTableScf;

function handlejsonQueueFEP(result, curcontl, hdncolumn, enablecontrol) {

    var dtData = [];
    var count = 0;
    //to re-init datatable


   // myData = JSON.parse(result.d);

    myData = $(result);
    
    var entry;
    var name;
    entry = myData[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }


    $.each(myData, function (event) {


    	switch (count) {
        case 1:
            dtData.push([this[dtData1[0]]]);
            break;
        case 2:
            dtData.push([this[dtData1[0]], this[dtData1[1]]]);
            break;
        case 3:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]]]);
            break;
        case 4:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]]]);
            break;
        case 5:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]]]);
            break;
        case 6:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]]]);
            break;
        case 7:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]]]);
            break;
        case 8:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]]]);
            break;
        case 9:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]]]);
            break;
        case 10:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]]]);
            break;
        case 11:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]]]);
            break;
        case 12:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]]]);
            break;
        case 13:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]]]);
            break;
        case 14:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]]]);
            break;
        case 15:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]]]);
            break;
        case 16:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]]]);
            break;
        case 17:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]]]);
            break;
        case 18:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]]]);
            break;
        case 19:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]]]);
            break;
        case 20:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]]]);
            break;
        case 21:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]]]);
            break;
        case 22:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]]]);
            break;
        case 23:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]]]);
            break;
        case 24:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]]]);
            break;
        case 25:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]]]);
            break;
        case 26:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]]]);
            break;
        case 27:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]]]);
            break;
        case 28:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]]]);
            break;
        case 29:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]]]);
            break;

        case 30:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]]]);
            break;
        case 31:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]]]);
            break;
        case 32:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]]]);
            break;
        case 33:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]]]);
            break;
        case 34:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]]]);
            break;
        case 35:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]]]);
            break;
    }

    });
    if (!(typeof popTableScf === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

		if(popTableScf!=null)
		{
		if(!(typeof popTableScf[0] === "undefined"))
		{
        //popTable.fnDestroy();
		if(popTableScf[0].id == "Table1")
		{
        popTableScf.fnDestroy();
		}
		}
		 popTableScf.destroy();
		}
		
        popTableScf = null;
        // $('#Table1').dataTable( {"bDestroy": true	} );
        //Remove all the DOM elements
		
        $('#Table1').empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData1[i];
 //added by manimala... <<start>> for date sorting
        if (dtData1[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
      //added by manimala... <<end>>
        dtcolumn.push(obj);
    }

 if(myData[0].Actions == "")
	{
    	dtData = [];
	}

	
		var cc = parseInt(count)-3;
	
	/**var hideClm = [];
	
	var hideClm1='[';
	
	for(c=parseInt(cc);c<count;c++)
	{
		if(c==parseInt(count)-1)
		hideClm1=hideClm1+c.toString();
	else
		hideClm1=hideClm1+c.toString()+',';
		
	}
		
	hideClm1=hideClm1+']';
	hideClm = hideClm1;**/
	
	var hideClm = [];
	
	var hideClm1='[';
	
	if(hdncolumn != undefined)
	{
	if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
		{
			var hideClm1='['+hdncolumn.split('|')[2]+',';
			
		}
	
	hdncolumn=hdncolumn.split('|')[0];
	}
	
	for(c=parseInt(cc);c<count;c++)
	{
		if(c==parseInt(count)-1)
		hideClm1=hideClm1+c.toString();
	else
		hideClm1=hideClm1+c.toString()+',';
		
	}
		
	hideClm1=hideClm1+']';
	hideClm = hideClm1;

	
    if (typeof popTableScf === "undefined" || popTableScf === null) {
        popTableScf = $('#Table1').DataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': true,
           "aaSorting": [],
            "pageLength": 10,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           //"scrollY": true,
           // "scrollX": true,
           

            "sPaginationType": "full_numbers",
			 "aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],
            "fnDrawCallback": function (oSettings) {
            	
            	

            }
            });


          /*  $(document).on('click', '#Table1 tbody th', function () {

                alertify.alert('1');

            });*/

			// For Queue Count Start
			$(document).off('click', '#Table1 tbody tr').on('click', '#Table1 tbody tr', function () {

               // alertify.alert('1');
			   
			   
			   if ($(this).hasClass("selected") == true)
			   {
				     $("#Table1 tbody tr").removeClass("selected");				   
			   }
			   else
			   {
				   $("#Table1 tbody tr").removeClass("selected");	
					$(this).addClass('selected');				   
			   }
	

            });
			
			
		
			//  For Queue Count End
	
            $('#Table1_wrapper').find('label').each(function () {
            	$(this).parent().append($(this).children());
            	});
            	$('#Table1_wrapper .dataTables_filter').find('input').each(function () {
            	$('input').attr("placeholder", "Search");
            	$('input').removeClass('form-control-sm');
            	});
            	$('#Table1_wrapper .dataTables_length').addClass('d-flex flex-row');
            	$('#Table1_wrapper .dataTables_filter').addClass('md-form');
            	$('#Table1_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
            	//$('#Table1_wrapper select').addClass('mdb-select');
				$('#Table1_wrapper select').addClass('mdb-GridSelect');
            	//$('#Table1_wrapper .mdb-select').material_Select();
            	$('#Table1_wrapper .dataTables_filter').find('label').remove();
            
			
            	$("#Table1_wrapper .dataTables_scrollHeadInner").css("width","100%")
            	$("#Table1_wrapper .dataTables_scrollHeadInner table").css("width","100%")
                $("#Table1").css("width","100%")

               $("#Table1_wrapper .dataTables_scrollHeadInner").addClass("card-headerGrid" + $("#FormColor").val());
			   
			   $("#Table1_wrapper #Table1 thead").addClass("card-headerGrid" + $("#FormColor").val());
		
		//Count Dropdown Customisation
		$("#Table1_wrapper .select-dropdown").css("width","40px");
		$("#Table1_wrapper .select-dropdown").css("height","40px");
		
		// Show Entries Label removal
		$("#Table1_length label").remove();
		 
		
		//First Row Customisation
		$($("#Table1_wrapper").find('.row')[0]).css("width","100%")
		$($("#Table1_wrapper").find('.row')[0]).css("margin-left",".1px")
		
		
		$($("#Table1_wrapper").find('.row')[0]).addClass("card-headerGrid" + $("#FormColor").val())
		
		
		
		//Last Row Customisation
		
		$($("#Table1_wrapper").find('.row')[2]).css("width","100%")
		$($("#Table1_wrapper").find('.row')[2]).css("margin-left",".1px")
		$($("#Table1_wrapper").find('.row')[2]).css("height","2.5rem")
		$($("#Table1_wrapper").find('.row')[2]).find('div').css("height","2.2rem")
		

		$($("#Table1_wrapper").find('.row')[2]).addClass("card-headerGrid" + $("#FormColor").val())
		
		
		
		 $("#Table1_wrapper .page-item.active .page-link").addClass($("#FormColor").val());
	        	 
		$("#Table1_info").css("color","white");
				
		
		
		//Card Header Above Grid
		
		$(".card-headerAbvGrid").addClass("card-headerGrid" + $("#FormColor").val())
		
		//Grid Buttons Color
		$('.BtnPrcs').addClass($("#FormColor").val());
		
		
		
		
	var GridVal =	"<div class=\"col-sm-12 col-md-4\" style=\"height: 2.2rem;\"><div class=\"GridBtnValue\" id=\"\" role=\"status\" aria-live=\"polite\" style=\"color: rgb(255, 255, 255);\"><ul><li class=\"GridLiBtnValue\"><span class=\"\" id=\"NoofIns\">0</span><label for=\"NoofIns\">Instruments</label></li><li class=\"GridLiBtnValue\"><label for=\"NoofIns\">Value Rs.</label><span class=\"\" id=\"TotAmt\">0</span></li></ul></div></div>"
		
		$($($("#Table1_wrapper").find('.row')[2]).find('div')[0]).removeClass("col-md-5")
		$($($("#Table1_wrapper").find('.row')[2]).find('div')[0]).addClass("col-md-4")
		
		$($($("#Table1_wrapper").find('.row')[2]).find('div')[2]).removeClass("col-md-7")
		$($($("#Table1_wrapper").find('.row')[2]).find('div')[2]).addClass("col-md-4")
		
		$($("#Table1_wrapper").find('.row')[2]).prepend(GridVal);
		
		
		$($("#Table1_wrapper").find('.row')[2]).find('.col-sm-12').addClass("card-headerGrid" + $("#FormColor").val())
		
		//$(".dataTables_paginate .page-link").css("color","#ffffff");
		
		//$(".dataTables_paginate .page-link").css("color","#ffffff");
		
		//Center Row Customisation
			
		$($("#Table1_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");	 
			  
		  $($("#Table1_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");

	      $($("#Table1_wrapper").find('.row')[1]).removeClass("row");
		
		
		 $('.mdb-GridSelect').material_select();
		
		
		if($("#NoofIns").length >= 1)
			{
				if($("#NoofIns").text() == 0)
				{
				$("#NoofIns").parent().hide();
				$("#TotAmt").parent().hide();
				}
			}
		
        /*footer search*/
      
    }

}

function handlejsonQueue(result, curcontl, hdncolumn, enablecontrol) {

    var dtData = [];
    var count = 0;
    //to re-init datatable


   // myData = JSON.parse(result.d);

    myData = $(result);
    
    var entry;
    var name;
    entry = myData[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }


    $.each(myData, function (event) {


    	switch (count) {
        case 1:
            dtData.push([this[dtData1[0]]]);
            break;
        case 2:
            dtData.push([this[dtData1[0]], this[dtData1[1]]]);
            break;
        case 3:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]]]);
            break;
        case 4:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]]]);
            break;
        case 5:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]]]);
            break;
        case 6:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]]]);
            break;
        case 7:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]]]);
            break;
        case 8:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]]]);
            break;
        case 9:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]]]);
            break;
        case 10:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]]]);
            break;
        case 11:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]]]);
            break;
        case 12:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]]]);
            break;
        case 13:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]]]);
            break;
        case 14:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]]]);
            break;
        case 15:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]]]);
            break;
        case 16:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]]]);
            break;
        case 17:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]]]);
            break;
        case 18:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]]]);
            break;
        case 19:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]]]);
            break;
        case 20:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]]]);
            break;
        case 21:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]]]);
            break;
        case 22:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]]]);
            break;
        case 23:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]]]);
            break;
        case 24:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]]]);
            break;
        case 25:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]]]);
            break;
        case 26:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]]]);
            break;
        case 27:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]]]);
            break;
        case 28:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]]]);
            break;
        case 29:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]]]);
            break;

        case 30:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]]]);
            break;
        case 31:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]]]);
            break;
        case 32:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]]]);
            break;
        case 33:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]]]);
            break;
        case 34:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]]]);
            break;
        case 35:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]]]);
            break;
    }

    });
    if (!(typeof popTable === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

        //popTable.fnDestroy();
		if(popTable[0].id == "Table1")
		{
        popTable.fnDestroy();
		}
        popTable = null;
        // $('#Table1').dataTable( {"bDestroy": true	} );
        //Remove all the DOM elements
        $('#Table1').empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData1[i];
 //added by manimala... <<start>> for date sorting
        if (dtData1[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
      //added by manimala... <<end>>
        dtcolumn.push(obj);
    }

 if(myData[0].Actions == "")
	{
    	dtData = [];
	}

	
		var cc = parseInt(count)-3;
	
	var hideClm = [];
	
	var hideClm1='[';
	
	for(c=parseInt(cc);c<count;c++)
	{
		if(c==parseInt(count)-1)
		hideClm1=hideClm1+c.toString();
	else
		hideClm1=hideClm1+c.toString()+',';
		
	}
		
	hideClm1=hideClm1+']';
	hideClm = hideClm1;

	
    if (typeof popTable === "undefined" || popTable === null) {
        popTable = $('#Table1').dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': true,
           "aaSorting": [],
            "pageLength": 7,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           "scrollY": "270",
            "scrollX": true,
           

            "sPaginationType": "full_numbers",
			 "aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],
            "fnDrawCallback": function (oSettings) {
            	
            	

            }
            });


            $(document).on('click', '#Table1 tbody th', function () {

                alertify.alert('1');

            });

			// For Queue Count Start
			
			//$("#"+$("ul").find('.active').attr('id')).find('span').attr('id').text();
			//$("#"+$("#"+($("ul").find('.active').attr('id'))).find('span').attr('id')).text($('#Table1_info').text().split(" ")[5])
			$("#"+$(enablecontrol).find('span').attr('id')).text($('#Table1_info').text().split(" ")[5])
			
// For Side Tree Inbox/Queue Count Start			
var QmainMenuID = $(window.parent.document).find('ul.tabs li.active').attr('name').split('~')[0];
var QSubMenuClass = $(enablecontrol).attr('name');
var QIcon="";

if($($(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').contents()).length == 2)
{
	QIcon= $($(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').contents()[0]).prop('outerHTML');
}
else if($($(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').contents()).length == 3)
{
		QIcon= $($(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').contents()[1]).prop('outerHTML');
}
else
{
QIcon = $(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').text();	
}

var QSubMenuTXT = QIcon + QSubMenuClass.replace(/_/g,' ') + ' (' + $('#Table1_info').text().split(" ")[5] +')';

$(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').text('');
$(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').append(QSubMenuTXT)
// For Side Tree Inbox/Queue Count End			
			
			//  For Queue Count End
			
			
			
        //$(".dataTables_scrollHead").remove();
  /*          $("#Table1 tbody").delegate("tr", "click", function () {
       // $(document).on('click', '#Table1 tbody tr', function () {

                var aData = popTable.fnGetData(this);
                                
                for (var i = 0; i < aData.length; i++) {

                    if (typeof curcontl[i] != "undefined") {
						if(aData[i] != null)
						{
                        //     Getjsondate                       curcontl[i].innerText = aData[i]
                        if (aData[i].toString().substring(0, 5) == "/Date") {
                            $(curcontl[i]).val(Getjsondate(aData[i]))
                        }
                        else {
                            $(curcontl[i]).val(aData[i]);

                            if ($(curcontl[i]).attr("id") == "mode") {
                                //#region If you want Trigger Event Reg Here
                                $("#ActivityID").trigger('change');
                                //#endregion
                            }

                        }
}
                    }
                }
                if (typeof enablecontrol != "undefined") {
                    for (var i = 0; i < aData.length; i++) {

                        if (typeof enablecontrol[i] != "undefined") {




                            if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                                $("." + enablecontrol[i]).show();
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }


                            }
                            else {
                                $("." + enablecontrol[i]).hide();

                                $("." + enablecontrol[i]).addClass("hidden-input");
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }
                            }
                        }
                    }
                }
                
               // $("#popup").dialog("close");

            });
            
*/


        //                          $("#Table1_length").append('<table><tr><td><select><option value="1">Id</option></select></td><td><input id="searchpopup" type="text"/></td></tr></table><input id="checkvalueexist" value="search" type="button"/>');
        //        $('#Table1').after('<table><tr><td><input type="text"/></td></tr></table>');
        //                          $('#searchpopup').keyup(function () {
        //                              index = 0;
        //                              popTable.fnFilter(this.value, index, 1, 1);

        //                          });

        
       
        var footervalue = "";
     /*   if (typeof hdncolumn != "undefined") {
            for (var ii = 0; ii < count; ii++) {

                if (typeof hdncolumn[ii] != "undefined") {
                    popTable.fnSetColumnVis(hdncolumn[ii], false);
                }
                else {
                    footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                }
            }
        }

        else {

            for (var iii = 0; iii < count; iii++) {
               
                footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                

            }
        }*/
        footervalue += '<td><input type="button" name="search_engine" id="GridAdd" value="Add" style="width:50px"  class="search_init" /></td>';

            footervalue = '<tfoot><tr>' + footervalue + '</tr><tfoot>';
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');

            footervalue = "";
            $("#Table1").append(footervalue);
            //  $('#Table1').dataTable()
            //        $('#Table1').after('<table><tr><td><input type="text"/></td></tr></table>');
            var asInitVals = [];
            /*footer search*/
            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                popTable.fnFilter(this.value, $("tfoot input").index(this));
            });

        
        


        /*
        * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
        * the footer
        */
        $("tfoot input").each(function (i) {
            asInitVals[i] = this.value;
        });



        $("tfoot input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("tfoot input").index(this)];
            }
        });
        /*footer search*/
        $('#checkvalueexist').click(function () {
           
            var nNodes = $('#Table1').dataTable().fnGetNodes();
            // alertify.alert(nNodes.length);
            if (nNodes.length > 0) {
                for (var i = 0; i < nNodes.length; i++) {

                    var dat = $('#Table1').dataTable().fnGetData(nNodes[i]);
                    if ('36' == dat[0]) {

                        alert(LoadFrmXML("V0073") + dat[0]);
                        return false;
                    }
                    if (dat[1] == 'The Proposed Projec') {
                        alert(LoadFrmXML("V0074") + dat[1]);
                        return false;
                    }


                }

            }
        });
    }

}


//
function handlejsonPageGrid(result, TableID, curcontl, hdncolumn, enablecontrol) {

    var dtData = [];
    var count = 0;
    //to re-init datatable


   // myData = JSON.parse(result.d);
//
    myData = $(result);
    
    var entry;
    var name;
    entry = myData[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }


    $.each(myData, function (event) {


    	switch (count) {
        case 1:
            dtData.push([this[dtData1[0]]]);
            break;
        case 2:
            dtData.push([this[dtData1[0]], this[dtData1[1]]]);
            break;
        case 3:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]]]);
            break;
        case 4:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]]]);
            break;
        case 5:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]]]);
            break;
        case 6:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]]]);
            break;
        case 7:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]]]);
            break;
        case 8:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]]]);
            break;
        case 9:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]]]);
            break;
        case 10:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]]]);
            break;
        case 11:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]]]);
            break;
        case 12:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]]]);
            break;
        case 13:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]]]);
            break;
        case 14:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]]]);
            break;
        case 15:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]]]);
            break;
        case 16:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]]]);
            break;
        case 17:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]]]);
            break;
        case 18:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]]]);
            break;
        case 19:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]]]);
            break;
        case 20:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]]]);
            break;
        case 21:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]]]);
            break;
        case 22:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]]]);
            break;
        case 23:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]]]);
            break;
        case 24:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]]]);
            break;
        case 25:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]]]);
            break;
        case 26:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]]]);
            break;
        case 27:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]]]);
            break;
        case 28:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]]]);
            break;
        case 29:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]]]);
            break;

        case 30:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]]]);
            break;
        case 31:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]]]);
            break;
        case 32:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]]]);
            break;
        case 33:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]]]);
            break;
        case 34:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]]]);
            break;
        case 35:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]]]);
            break;
		case 36:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]]]);
            break;
		case 37:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]]]);
            break;
		case 38:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]]]);
            break;
		case 39:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]]]);
            break;
		case 40:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]]]);
            break;
		case 41:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]]]);
            break;
		case 42:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]]]);
            break;
		case 43:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]]]);
            break;
		case 44:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]]]);
            break;
		case 45:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]]]);
            break;
		case 46:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]]]);
            break;
    }

    });
    if (!(typeof popTablePageGrid === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

		if(popTablePageGrid !="undefined")
		{

		if(popTablePageGrid[0].id == TableID || popTablePageGrid[0].id == Table2 )
		{
        popTablePageGrid.fnDestroy();
		}
        popTablePageGrid = null;
        // $('#' + TableID).dataTable( {"bDestroy": true	} );
      //  popTable.fnDestroy();
        //Remove all the DOM elements
        $('#' + TableID).empty();
		}
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
	
    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData1[i];
        dtcolumn.push(obj);
    }



    if (typeof popTablePageGrid === "undefined" || popTablePageGrid === null) {
        popTablePageGrid = $('#' + TableID).dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': true,
           "aaSorting": [],
            "pageLength": 7,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           "scrollY": "270",
            "scrollX": true,
           

            "sPaginationType": "full_numbers",
            "fnDrawCallback": function (oSettings) {
            	
          /*var a= $("#"+TableID).parents('div').closest('.dataTables_scroll').find('.dataTables_scrollHeadInner').find('thead');
                
                $("#"+TableID).parents('div').closest('.dataTables_scroll').find('.dataTables_scrollHeadInner').find('thead')
                 
                 $("#"+TableID).closest('table').find('thead').remove();
                 $("#"+TableID).prepend(a);
                 $("#"+TableID).parents('div').closest('.dataTables_scroll').find('.dataTables_scrollHead').remove();
				  
				  var GridNodeName =$("#"+TableID).attr('name');
                  var LabelValue = LoadGridLablName(GridNodeName);
                  

                  if($("#"+TableID).find('thead tr').length >= 2)
                {
                  LabelValue="";
                 $("#"+TableID).find('thead').append(LabelValue);
                }
                  
                  else
                  {
                  $("#"+TableID).find('thead').prepend(LabelValue);
                  $("#"+TableID).find('thead').find('tr:nth-child(2)').css('display','none');
                  }*/
                  
                 

            }
            });


            $(document).on('click', '#Table1 tbody th', function () {

                alertify.alert('1');

            });

        //$(".dataTables_scrollHead").remove();
           $('#' + TableID + " tbody").delegate("tr", "click", function () {
       // $(document).on('click', '#Table1 tbody tr', function () {

                var aData = popTablePageGrid.fnGetData(this);
                                
                for (var i = 0; i < aData.length; i++) {

                    if (typeof curcontl[i] != "undefined") {
						if(aData[i] != null)
						{
                        //     Getjsondate                       curcontl[i].innerText = aData[i]
                        if (aData[i].toString().substring(0, 5) == "/Date") {
                            $(curcontl[i]).val(Getjsondate(aData[i]))
                        }
                        else {
                            $(curcontl[i]).val(aData[i]);

                            if ($(curcontl[i]).attr("id") == "ActivityID") {
                                //#region If you want Trigger Event Reg Here
                                $("#ActivityID").trigger('change');
                                //#endregion
                            }
							
							
                            
                            if ($(curcontl[i]).attr("id") == "TableName") {
                                //#region If you want Trigger Event Reg Here
                                $("#TableName").trigger('change');
                                //#endregion
                            }
                            if ($(curcontl[i]).attr("id") == "editMenuFunction")
                            {
                                //#region If you want Trigger Event Reg Here
                                $("#editMenuFunction").trigger('change');
                                
                                //#endregion
                            }
                            
                            if ($(curcontl[i]).attr("id") == "QueueName") {
                                //#region If you want Trigger Event Reg Here
                                $("#QueueName").trigger('change');
                                $("#TableName").trigger('change');
                                //#endregion
                            }
                            
                            if ($(curcontl[i]).attr("id") == "WFName") {
                                //#region If you want Trigger Event Reg Here
                                $("WFName").trigger('change');
                                
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "CUSM_OldPrcsID") {
                                //#region If you want Trigger Event Reg Here
                               CusUpdation();
                                
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "RCBD_ID") {
                                //#region If you want Trigger Event Reg Here
                               GetCusDetls();
                                
                                //#endregion
                            }
							
								//Added by Manimala --Start
							if ($(curcontl[i]).attr("id") == "EditLRCN_PrCode") {
                               
								 $("#GridClkChk").val('Clk');
                                
                            }
							//end
							
						
							
							

                        }
}
                    }
                }
                if (typeof enablecontrol != "undefined") {
                    for (var i = 0; i < aData.length; i++) {

                        if (typeof enablecontrol[i] != "undefined") {




                            if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                                $("." + enablecontrol[i]).show();
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }


                            }
                            else {
                                $("." + enablecontrol[i]).hide();

                                $("." + enablecontrol[i]).addClass("hidden-input");
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }
                            }
                        }
                    }
                }

              //  $("#popup").dialog("close");

            });
            



        //                          $("#Table1_length").append('<table><tr><td><select><option value="1">Id</option></select></td><td><input id="searchpopup" type="text"/></td></tr></table><input id="checkvalueexist" value="search" type="button"/>');
        //        $('#' + TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
        //                          $('#searchpopup').keyup(function () {
        //                              index = 0;
        //                              popTable.fnFilter(this.value, index, 1, 1);

        //                          });

        
       
        var footervalue = "";
     /*   if (typeof hdncolumn != "undefined") {
            for (var ii = 0; ii < count; ii++) {

                if (typeof hdncolumn[ii] != "undefined") {
                    popTable.fnSetColumnVis(hdncolumn[ii], false);
                }
                else {
                    footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                }
            }
        }

        else {

            for (var iii = 0; iii < count; iii++) {
               
                footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                

            }
        }*/
        footervalue += '<td><input type="button" name="search_engine" id="GridAdd" value="Add" style="width:50px"  class="search_init" /></td>';

            footervalue = '<tfoot><tr>' + footervalue + '</tr></tfoot>';
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');

            footervalue = "";
            $('#' + TableID).append(footervalue);
            //  $('#' + TableID).dataTable()
            //        $('#' + TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
            var asInitVals = [];
            /*footer search*/
            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                popTablePageGrid.fnFilter(this.value, $("tfoot input").index(this));
            });

        
        


        /*
        * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
        * the footer
        */
        $("tfoot input").each(function (i) {
            asInitVals[i] = this.value;
        });



        $("tfoot input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("tfoot input").index(this)];
            }
        });
        /*footer search*/
        $('#checkvalueexist').click(function () {
           
            var nNodes = $('#' + TableID).dataTable().fnGetNodes();
            // alertify.alert(nNodes.length);
            if (nNodes.length > 0) {
                for (var i = 0; i < nNodes.length; i++) {

                    var dat = $('#' + TableID).dataTable().fnGetData(nNodes[i]);
                    if ('36' == dat[0]) {

                        alert(LoadFrmXML("V0073") + dat[0]);
                        return false;
                    }
                    if (dat[1] == 'The Proposed Projec') {
                        alert(LoadFrmXML("V0074") + dat[1]);
                        return false;
                    }


                }

            }
        });
    }

}


//




function handlejson(result, curcontl, hdncolumn, enablecontrol) {

    var dtData = [];
    var count = 0;
	
    //to re-init datatable


   // myData = JSON.parse(result.d);
//
    myData = $(result);
    
    var entry;
    var name;
    entry = myData[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }


    $.each(myData, function (event) {


    	switch (count) {
        case 1:
            dtData.push([this[dtData1[0]]]);
            break;
        case 2:
            dtData.push([this[dtData1[0]], this[dtData1[1]]]);
            break;
        case 3:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]]]);
            break;
        case 4:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]]]);
            break;
        case 5:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]]]);
            break;
        case 6:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]]]);
            break;
        case 7:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]]]);
            break;
        case 8:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]]]);
            break;
        case 9:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]]]);
            break;
        case 10:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]]]);
            break;
        case 11:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]]]);
            break;
        case 12:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]]]);
            break;
        case 13:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]]]);
            break;
        case 14:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]]]);
            break;
        case 15:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]]]);
            break;
        case 16:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]]]);
            break;
        case 17:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]]]);
            break;
        case 18:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]]]);
            break;
        case 19:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]]]);
            break;
        case 20:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]]]);
            break;
        case 21:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]]]);
            break;
        case 22:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]]]);
            break;
        case 23:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]]]);
            break;
        case 24:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]]]);
            break;
        case 25:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]]]);
            break;
        case 26:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]]]);
            break;
        case 27:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]]]);
            break;
        case 28:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]]]);
            break;
        case 29:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]]]);
            break;

        case 30:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]]]);
            break;
        case 31:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]]]);
            break;
        case 32:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]]]);
            break;
        case 33:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]]]);
            break;
        case 34:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]]]);
            break;
        case 35:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]]]);
            break;
		case 36:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]]]);
            break;
		case 37:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]]]);
            break;
		case 38:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]]]);
            break;
		case 39:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]]]);
            break;
		case 40:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]]]);
            break;
		case 41:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]]]);
            break;
		case 42:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]]]);
            break;
		case 43:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]]]);
            break;
		case 44:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]]]);
            break;
		case 45:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]]]);
            break;
		case 46:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]]]);
            break;
    }

    });
	
	if(popTableChk !=null)
	{
		
		if(popTableChk[0].id == "Table1")
		{
        popTableChk.fnDestroy();
		}
        popTableChk = null;
        // $('#Table1').dataTable( {"bDestroy": true	} );
       // popTable.fnDestroy();
        //Remove all the DOM elements
        $('#Table1').empty();
		
	}
  
	
	if(popTable !=null)
	{
	
	if (!(typeof popTable === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

		if(popTable[0].id == "Table1")
		{
        popTable.fnDestroy();
		}
        popTable = null;
        // $('#Table1').dataTable( {"bDestroy": true	} );
       // popTable.fnDestroy();
        //Remove all the DOM elements
        $('#Table1').empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
	}

    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData1[i];
        dtcolumn.push(obj);
    }

	var hideClm='';
	
	if(hdncolumn != undefined)
	{

		hideClm='['+hdncolumn+']';

	}

    if (typeof popTable === "undefined" || popTable === null) {
        popTable = $('#Table1').dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': true,
            "aaSorting": [],
            "pageLength": 6,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
            "tooltip":true,
            "scrollY": "210",
            "scrollX": true,
            "sPaginationType": "full_numbers",
			"aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],		
            "fnDrawCallback": function (oSettings) {

            }
            });


            $(document).on('click', '#Table1 tbody th', function () {

                alertify.alert('1');

            });

        //$(".dataTables_scrollHead").remove();
            $("#Table1 tbody").delegate("tr", "click", function () {
       // $(document).on('click', '#Table1 tbody tr', function () {

                var aData = popTable.fnGetData(this);
                                
                for (var i = 0; i < aData.length; i++) {

                    if (typeof curcontl[i] != "undefined") {
						if(aData[i] != null)
						{
                        //     Getjsondate                       curcontl[i].innerText = aData[i]
                        if (aData[i].toString().substring(0, 5) == "/Date") {
                            $(curcontl[i]).val(Getjsondate(aData[i]))
                        }
                        else {
                            $(curcontl[i]).val(aData[i]);

                            if ($(curcontl[i]).attr("id") == "ActivityID") {
                                //#region If you want Trigger Event Reg Here
                                $("#ActivityID").trigger('change');
                                //#endregion
                            }
							
							
                            
                            if ($(curcontl[i]).attr("id") == "TableName") {
                                //#region If you want Trigger Event Reg Here
                                $("#TableName").trigger('change');
                                //#endregion
                            }
                            if ($(curcontl[i]).attr("id") == "editMenuFunction")
                            {
                                //#region If you want Trigger Event Reg Here
                                $("#editMenuFunction").trigger('change');
                                
                                //#endregion
                            }
                            
                            if ($(curcontl[i]).attr("id") == "QueueName") {
                                //#region If you want Trigger Event Reg Here
                                $("#QueueName").trigger('change');
                                $("#TableName").trigger('change');
                                //#endregion
                            }
                            
                            if ($(curcontl[i]).attr("id") == "WFName") {
                                //#region If you want Trigger Event Reg Here
                                $("#WFName").trigger('change');
                                
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "CUSM_OldPrcsID") {
                                //#region If you want Trigger Event Reg Here
                               CusUpdation();
                                
                                //#endregion
                            }
							
							if ($(curcontl[i]).attr("id") == "LNAP_Product") {
                                //#region If you want Trigger Event Reg Here
                             // PrdFundDsbl();
							  ProdFundDsbl();
							  chkMonths();
							  chkProperty();
							  clrfiledsprod();
							  //LonAmtVal();
                                
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "LNAP_PrgName") {
                                //#region If you want Trigger Event Reg Here
							  LonAmtVal();
							  LonTenorVal();
                              //clrfiledsprog();
                                //#endregion
                            }
							
							
							if ($(curcontl[i]).attr("id") == "LNAP_PrCode") {
							//#region If you want Trigger Event Reg Here
							ClrPrdDetl();
							//#endregion
							}
							
							if ($(curcontl[i]).attr("id") == "LNAP_SubProduct") {
                                //#region If you want Trigger Event Reg Here
                             PrpseDsbl();
							 LonAmtVal();
                            //clrfiledssubprod();
                                //#endregion
                            }
							
							if ($(curcontl[i]).attr("id") == "FNAV_FldInvstgnId") {
                                //#region If you want Trigger Event Reg Here
                            FldDsbl('FI');
                                
                                //#endregion
                            }
							
							if ($(curcontl[i]).attr("id") == "FNAV_RiskCntnmtUnitId") {
                                //#region If you want Trigger Event Reg Here
                            FldDsbl('RCU');
                                
                                //#endregion
                            }
							
							if ($(curcontl[i]).attr("id") == "FNAV_LegalId") {
                                //#region If you want Trigger Event Reg Here
                            FldDsbl('LGL');
                                
                                //#endregion
                            }
							
							if ($(curcontl[i]).attr("id") == "FNAV_TchnclEvaltnId") {
                                //#region If you want Trigger Event Reg Here
                            FldDsbl('VAL');
                                
                                //#endregion
                            }
							
							if ($(curcontl[i]).attr("id") == "FNAV_CAId") {
                                //#region If you want Trigger Event Reg Here
                            FldDsbl('CA');
                                
                                //#endregion
                            }
							//Micro Finance Basic info
				if ($(curcontl[i]).attr("id") == "BCDT_CusBrID") {
                                //#region If you want Trigger Event Reg Here
                            BranchId();
                                
                                //#endregion
                            }
							
							//Supply Chain validation Start
							
							//Limit
							if ($(curcontl[i]).attr("id") == "CIF_LMT_ID") {
                                //#region If you want Trigger Event Reg Here
								loadDataImg();
								
                                
                                //#endregion
                            }
							//Limit
							 /* if ($(curcontl[i]).attr("id") == "PBCD_ProductType") {
                                
								
									
									IFSCValidation('PBCD_ProductType');
                              
                            }*/
							
							  if ($(curcontl[i]).attr("id") == "DMND_CustID") {
                                
									var chkval = ChkCustState();
									if(chkval=='No'){
										$('#DMND_CustID').val($('#HiddenCustID').val());
										
									}
									else{
										ClrCustID();
									}
									
                            }
							if ($(curcontl[i]).attr("id") == "CLCN_CustID") {
                                
									var chkval = ChkCustState();
									if(chkval=='No'){
										$('#CLCN_CustID').val($('#HiddenCustID').val());
										
									}
									else{
										ClrCustID();
									}
									
                            }
							
							  if ($(curcontl[i]).attr("id") == "CGST_StateCode") {
                                
								$('#CGST_GSTIN').val('');	
									
                            }
							
							
							  if ($(curcontl[i]).attr("id") == "PBCD_ChrgPayer") {
                                
									ChargePayr('Change');
									
                            }
							
							if ($(curcontl[i]).attr("id") == "BCDT_ConstitnCd"){
								PANCINClear();
							}
							
							if ($(curcontl[i]).attr("id") == "RSOA_ExposureOn")
							{
							  ValidateStatement();
							}
							
							if ($(curcontl[i]).attr("id") == "BURP_CounterParty") {
                                
									ChkCounterExist();
									
                            }
							
							//Master Browser Start
							if ($(curcontl[i]).attr("id") == "QMAB_Prgm")
							{
							ChngPrgm();
							}
							if ($(curcontl[i]).attr("id") == "QMAB_Prdc")
							{
							ChngProd();
							}
							//Master Browser End
							
							
							if ($(curcontl[i]).attr("id") == "BCDT_ConstitnCd") {
	
							//$("#BTNGrpPromoDetl").trigger("click");
							setRegandCINMnd();
						
							}							
							 if ($(curcontl[i]).attr("id") == "ChkPrgmToDate") {
                                
									BuyerSellerClearGrid();
                              
                            }
							/*if ($(curcontl[i]).attr("id") == "BSRC_PrdctType") {
                                
									BuyerSellerClearGrid();
                              
                            }*/
							if ($(curcontl[i]).attr("id") == "INRD_StaleDays") {
                                
									CalcMaxFinAmt('Clear');
									ClearOnChange();
									onGridAdd();
                              
                            }
							if ($(curcontl[i]).attr("id") == "ELFD_StaleDays") {
                                
									ClearOnChange();
                              
                            }
							if ($(curcontl[i]).attr("id") == "BCDT_IndusClasifcn") {
							
								IndstrySubClasficclear();
								
							}
							if ($(curcontl[i]).attr("id") == "OldPrcsID") {
							
								loadDataToEdit();
								
							}
							
							
							//program validation
							if ($(curcontl[i]).attr("id") == "PBCD_SpreadRateIndex")
							{
							
							AddspreadRt();
						
							}
							if ($(curcontl[i]).attr("id") == "BSDT_BaseCodeRate")
							{
							
							AddspreadRt();
						
							}

							
							if ($(curcontl[i]).attr("id") == "BSDT_PrdctType")
							{
							
							GenRelAccID();
						
							}
							
							if ($(curcontl[i]).attr("id") == "PBCD_Exposureon")
							{
							  ExposureValid('Change');
							}
							
							/*if ($(curcontl[i]).attr("id") == "OldPrcsID")
							{
							  ChkEditMode();
							 
							}*/
							
							
							//Bulk Registration ValidationMessage Start
							
							
							
							if ($(curcontl[i]).attr("id") == "INRG_PrgmID")
							{
							  InsregClear();
							}
							
							//Bulk Registration ValidationMessage End
							
							
							//Bulk Repayment End
							
							
							if ($(curcontl[i]).attr("id") == "RACD_ProgrammeName")
							{
							  clearCustDetl();
							}
							
							if ($(curcontl[i]).attr("id") == "RAMN_ProgrammeName")
							{
							  clearCustDetl();
							}
							
							
							
							//if ($($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1]).text() == "BURP_PrgmID")
								if ($(curcontl[i]).attr("id") == "BURP_PrgmID1")
							{
								
								CopyData2Temp("PrgmID");
							}
							
								if ($(curcontl[i]).attr("id") == "BURP_PrgmID")
							{
								
								fnClrCountrID();
							}
							
							//if ($($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1]).text() == "BURP_AnchorParty")
								if ($(curcontl[i]).attr("id") == "BURP_AnchorParty1")
							{
								CopyData2Temp("AnchorParty");
							}
							
							//if ($($("#"+tableid).find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1]).text() == "BURP_CounterPartyID")

							if ($(curcontl[i]).attr("id") == "BURP_CoporateCode1")
							{
								CopyData2Temp("CoporateCode");
							}
							
							if ($(curcontl[i]).attr("id") == "WAIV_PrgmID")
							{
								ClrCountrRec();
							}
							
							if ($(curcontl[i]).attr("id") == "BRMD_ActualInvoiceNo")
							{
								getExcessAllocData();
							}
							
							
							if ($(curcontl[i]).attr("id") == "BURP_CoporateCode1") {
                                
									ChkExcsCoprCdPrcs();
									
                            }
							
							
							//02022019
							//Supply Chain validation End
								
								
							if ($(curcontl[i]).attr("id") == "RightsReviewName") {
								//#region If you want Trigger Event Reg Here
								$("#QueRgtsviewlevel").trigger("click");   
								//#endregion
								}
			
							if ($(curcontl[i]).attr("id") == "CUSA_Country") {
                                //#region If you want Trigger Event Reg Here
                             BsCntryDsbl();
                                //#endregion
                            }
								if ($(curcontl[i]).attr("id") == "CUSA_RCountry") {
                                //#region If you want Trigger Event Reg Here
                             BsResCntryDsbl();
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "CIDT_Country") {
                                //#region If you want Trigger Event Reg Here
                            PrstEmplBsCntryDsbl();
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "CIDT_PCountry") {
                                //#region If you want Trigger Event Reg Here
                             PrvsBsResCntryDsbl();
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "EditFormID") {
								//#region If you want Trigger Event Reg Here
								$("#EditTblclmName").trigger("click");   
									//#endregion
								}
if ($(curcontl[i]).attr("id") == "FromLBQVal") {
    //#region If you want Trigger Event Reg Here
   // $("#WFName").trigger('change');
	DispQIconRIght();
    //#endregion
}

if ($(curcontl[i]).attr("id") == "TableName") {
	$("#BTNworks").trigger("click");
	//document.getElementById('UniqueParam').value="";

}
if ($(curcontl[i]).attr("id") == "EditUniqueParameter") {
    $("#EditBTNworks").trigger('click');

}
if ($(curcontl[i]).attr("id") == "HistTableName") {
 // fillHistTblClmNames();
	 $("#HistTblclmName").trigger('click');

}

if ($(curcontl[i]).attr("id") == "EditHistTableName") {
	 // fillHistTblClmNames();
		 $("#EditHistTblclmName").trigger('click');

	}
//edited by manimala...
if ($(curcontl[i]).attr("id") == "Desgn") {
    //#region If you want Trigger Event Reg Here
 $("#BTN_Usermap").trigger("click");
    
    //#endregion
}
if ($(curcontl[i]).attr("id") == "Userid") {
    //#region If you want Trigger Event Reg Here
 $("#BTN_Usermap").trigger("click");
    
    //#endregion
}
if ($(curcontl[i]).attr("id") == "EditLRCN_PurpCode") {
	
	$("#BTNRoi").trigger("click");

	}
if ($(curcontl[i]).attr("id") == "MenuName") {
	
Usersgridview();

}
if ($(curcontl[i]).attr("id") == "MenuLevelOne") {
	
Usersgridview1();

}
if ($(curcontl[i]).attr("id") == "MenuLevelTwo") {
	
Usersgridview2();

}
if ($(curcontl[i]).attr("id") == "Queue-ID") {
		
		Queuegridview();


}





if ($(curcontl[i]).attr("id") == "packageId") {
	$("#Rgtsgridview").trigger("click");

}
if ($(curcontl[i]).attr("id") == "FormName") {
	$("#Rgtsgridview").trigger("click");

}


if ($(curcontl[i]).attr("id") == "EditLRCN_PrCode") {
   
 $("#BTNRoi").trigger("click");
    
   
}

if ($(curcontl[i]).attr("id") == "EditLRCN_PurpCode") {
	
	$("#BTNRoi").trigger("click");

}

if ($(curcontl[i]).attr("id") == "EditLRCN_SchmCode") {
    //#region If you want Trigger Event Reg Here
 $("#BTNRoi").trigger("click");
    
    //#endregion
}

if ($(curcontl[i]).attr("id") == "WFIDHist") {
    //#region If you want Trigger Event Reg Here
 REPTHISTPAGEDATA()
    
    //#endregion
}

if ($(curcontl[i]).attr("id") == "PrcsID") {
    //#region If you want Trigger Event Reg Here
  $("#GetFileHistData").trigger("click");
    //#endregion
}
if ($(curcontl[i]).attr("id") == "PropPrcsID") {
    //#region If you want Trigger Event Reg Here
  AttachDMSFetch();
    //#endregion
}
if ($(curcontl[i]).attr("id") == "CustPrcsID") {
    //#region If you want Trigger Event Reg Here
  AttachDMSFetch();
    //#endregion
}

if ($(curcontl[i]).attr("id") == "NewMaintableName") {
	FetchAddTbl();
	ClrList();
}

if ($(curcontl[i]).attr("id") == "NewWFName") {
	ClrTxt();
}

if ($(curcontl[i]).attr("id") == "EditMaintableName") {
	 // fillHistTblClmNames();
		 $("#EditAddTblName").trigger('click');

	}
	
	 
if ($(curcontl[i]).attr("id") == "HEditTabshwclm") {
    //#region If you want Trigger Event Reg Here
 //$("#BTNRoi").trigger("click");
  ForEditRightClmBlur();  
    //#endregion
}


if ($(curcontl[i]).attr("id") == "EditTableName") {
    
 $("#EditTableName").trigger("change");
    
}


if ($(curcontl[i]).attr("id") == "EVSM_SchmCode") {
    //#region If you want Trigger Event Reg Here
  GetROIEMI();
    //#endregion
}

if ($(curcontl[i]).attr("id") == "wkfwid") {
    //#region If you want Trigger Event Reg Here
  Getfilestatusflddata();
    //#endregion
}

if ($(curcontl[i]).attr("id") == "ReviewName") {


	clrscr();
	FetchTblColName();
	fetchdata();
	}

  if ($(curcontl[i]).attr("id") == "OFIP_AcctID") {
    $("#OFIP_AcctID").trigger("change");
    
} 


  //loan proppsal scheme end
  //MicroFinance
  if ($(curcontl[i]).attr("id") == "LACD_RepaymntPrd") {
   
   
  emi('LACD_LonAmt','LACD_ROI','LACD_RepaymntPrd','LACD_EMI');
    
}
      
	  if ($(curcontl[i]).attr("id") == "LACR_PropNo") {
   
   
  getCusLoanDetails();
    
}
       
	  
  if ($(curcontl[i]).attr("id") == "LDCR_OldPrcsID")
  {
                                //#region If you want Trigger Event Reg Here
     LedUpdation();
                                
                                //#endregion
     }
	  if ($(curcontl[i]).attr("id") == "CUCR_OldPrcsID") 
	  {
                                //#region If you want Trigger Event Reg Here
       CusUpdation();
                                
                                //#endregion
       }
 if ($(curcontl[i]).attr("id") == "LNAP_CusName")
								 {
                                //#region If you want Trigger Event Reg Here
                            	ViewAppDtl();
								
                                //#endregion
                            }	   
	  if ($(curcontl[i]).attr("id") == "ELDT_ApplId")
								 {
                               
                            	GetOccpdtl()

                            }
if ($(curcontl[i]).attr("id") == "BNKD_ApplId")
								 {
                               
                            	GetApplntval();

                            }		


if ($(curcontl[i]).attr("id") == "DBDT_AcctNo")
								 {
                               
						 	LonTOFund();
							PFCltnChk();

                            }

  if ($(curcontl[i]).attr("id") == "LNAP_LonCpyNo") {
   
   
   RefrnceLonCpy();
    
}

	  if ($(curcontl[i]).attr("id") == "CusCBLIdPropNo") {
   
   
   CibilAttchVw();
    
}

	  if ($(curcontl[i]).attr("id") == "PNBD_ProdName") {
		    
		     loadPage('ProdName');
		    
		  
		}
	  
	  
	  
	  
if ($(curcontl[i]).attr("id") == "LACD_RepaymntPrd") {
   
   
  emi('LACD_LonAmt','LACD_ROI','LACD_RepaymntPrd','LACD_EMI');
    
}

if ($(curcontl[i]).attr("id") == "Instrument__Amount") {   
   
  GetInvcSelectionDetails();
    
}
if ($(curcontl[i]).attr("id") == "PBCD_ProgmNature") {   
  ChkPrdFrVendrFinc();
}
							
							
							
                      }
}
                    }
                }
                if (typeof enablecontrol != "undefined") {
                    for (var i = 0; i < aData.length; i++) {

                        if (typeof enablecontrol[i] != "undefined") {




                            if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                                $("." + enablecontrol[i]).show();
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }


                            }
                            else {
                                $("." + enablecontrol[i]).hide();

                                $("." + enablecontrol[i]).addClass("hidden-input");
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }
                            }
                        }
                    }
                }

                $("#popup").dialog("close");

            });
            



        //                          $("#Table1_length").append('<table><tr><td><select><option value="1">Id</option></select></td><td><input id="searchpopup" type="text"/></td></tr></table><input id="checkvalueexist" value="search" type="button"/>');
        //        $('#Table1').after('<table><tr><td><input type="text"/></td></tr></table>');
        //                          $('#searchpopup').keyup(function () {
        //                              index = 0;
        //                              popTable.fnFilter(this.value, index, 1, 1);

        //                          });

        
       
        var footervalue = "";
     /*   if (typeof hdncolumn != "undefined") {
            for (var ii = 0; ii < count; ii++) {

                if (typeof hdncolumn[ii] != "undefined") {
                    popTable.fnSetColumnVis(hdncolumn[ii], false);
                }
                else {
                    footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                }
            }
        }

        else {

            for (var iii = 0; iii < count; iii++) {
               
                footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                

            }
        }*/
        footervalue += '<td><input type="button" name="search_engine" id="GridAdd" value="Add" style="width:50px"  class="search_init" /></td>';

            footervalue = '<tfoot><tr>' + footervalue + '</tr></tfoot>';
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');

            footervalue = "";
            $("#Table1").append(footervalue);
            //  $('#Table1').dataTable()
            //        $('#Table1').after('<table><tr><td><input type="text"/></td></tr></table>');
            var asInitVals = [];
            /*footer search*/
            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                popTable.fnFilter(this.value, $("tfoot input").index(this));
            });

        
        


        /*
        * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
        * the footer
        */
        $("tfoot input").each(function (i) {
            asInitVals[i] = this.value;
        });



        $("tfoot input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("tfoot input").index(this)];
            }
        });
        /*footer search*/
        $('#checkvalueexist').click(function () {
           
            var nNodes = $('#Table1').dataTable().fnGetNodes();
            // alertify.alert(nNodes.length);
            if (nNodes.length > 0) {
                for (var i = 0; i < nNodes.length; i++) {

                    var dat = $('#Table1').dataTable().fnGetData(nNodes[i]);
                    if ('36' == dat[0]) {

                        alert(LoadFrmXML("V0073") + dat[0]);
                        return false;
                    }
                    if (dat[1] == 'The Proposed Projec') {
                        alert(LoadFrmXML("V0074") + dat[1]);
                        return false;
                    }


                }

            }
        });
    }

}



///

function handlejsonSPLPopup(result, curcontl, hdncolumn, enablecontrol) {

    var dtData = [];
    var count = 0;
	
    //to re-init datatable


   // myData = JSON.parse(result.d);
//
    myData = $(result);
    
    var entry;
    var name;
    entry = myData[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }


    $.each(myData, function (event) {


    	switch (count) {
        case 1:
            dtData.push([this[dtData1[0]]]);
            break;
        case 2:
            dtData.push([this[dtData1[0]], this[dtData1[1]]]);
            break;
        case 3:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]]]);
            break;
        case 4:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]]]);
            break;
        case 5:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]]]);
            break;
        case 6:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]]]);
            break;
        case 7:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]]]);
            break;
        case 8:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]]]);
            break;
        case 9:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]]]);
            break;
        case 10:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]]]);
            break;
        case 11:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]]]);
            break;
        case 12:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]]]);
            break;
        case 13:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]]]);
            break;
        case 14:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]]]);
            break;
        case 15:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]]]);
            break;
        case 16:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]]]);
            break;
        case 17:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]]]);
            break;
        case 18:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]]]);
            break;
        case 19:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]]]);
            break;
        case 20:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]]]);
            break;
        case 21:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]]]);
            break;
        case 22:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]]]);
            break;
        case 23:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]]]);
            break;
        case 24:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]]]);
            break;
        case 25:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]]]);
            break;
        case 26:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]]]);
            break;
        case 27:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]]]);
            break;
        case 28:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]]]);
            break;
        case 29:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]]]);
            break;

        case 30:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]]]);
            break;
        case 31:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]]]);
            break;
        case 32:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]]]);
            break;
        case 33:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]]]);
            break;
        case 34:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]]]);
            break;
        case 35:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]]]);
            break;
		case 36:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]]]);
            break;
		case 37:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]]]);
            break;
		case 38:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]]]);
            break;
		case 39:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]]]);
            break;
		case 40:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]]]);
            break;
		case 41:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]]]);
            break;
		case 42:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]]]);
            break;
		case 43:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]]]);
            break;
		case 44:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]]]);
            break;
		case 45:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]]]);
            break;
		case 46:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]]]);
            break;
    }

    });
	
	if(popTableChk !=null)
	{
		
		if(popTableChk[0].id == "TableSPL")
		{
        popTableChk.fnDestroy();
		}
        popTableChk = null;
        // $('#Table1').dataTable( {"bDestroy": true	} );
       // popTable.fnDestroy();
        //Remove all the DOM elements
        $('#TableSPL').empty();
		
	}
  
	
	if(popTable !=null)
	{
	
	if (!(typeof popTable === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

		if(popTable[0].id == "TableSPL")
		{
        popTable.fnDestroy();
		}
        popTable = null;
        // $('#Table1').dataTable( {"bDestroy": true	} );
       // popTable.fnDestroy();
        //Remove all the DOM elements
        $('#TableSPL').empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
	}

    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData1[i];
        dtcolumn.push(obj);
    }



    if (typeof popTable === "undefined" || popTable === null) {
        popTable = $('#TableSPL').dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': true,
           "aaSorting": [],
            "pageLength": 6,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           "scrollY": "210",
            "scrollX": true,
           

            "sPaginationType": "full_numbers",
            "fnDrawCallback": function (oSettings) {

            }
            });


            $(document).on('click', '#TableSPL tbody th', function () {

                alertify.alert('1');

            });

        //$(".dataTables_scrollHead").remove();
            $("#TableSPL tbody").delegate("tr", "click", function () {
       // $(document).on('click', '#Table1 tbody tr', function () {

                var aData = popTable.fnGetData(this);
                                
                for (var i = 0; i < aData.length; i++) {

                    if (typeof curcontl[i] != "undefined") {
						if(aData[i] != null)
						{
                        //     Getjsondate                       curcontl[i].innerText = aData[i]
                        if (aData[i].toString().substring(0, 5) == "/Date") {
                            $(curcontl[i]).val(Getjsondate(aData[i]))
                        }
                        else {
                            $(curcontl[i]).val(aData[i]);

                            if ($(curcontl[i]).attr("id") == "ActivityID") {
                                //#region If you want Trigger Event Reg Here
                                $("#ActivityID").trigger('change');
                                //#endregion
                            }
							
							
                            
                            if ($(curcontl[i]).attr("id") == "TableName") {
                                //#region If you want Trigger Event Reg Here
                                $("#TableName").trigger('change');
                                //#endregion
                            }
                            if ($(curcontl[i]).attr("id") == "editMenuFunction")
                            {
                                //#region If you want Trigger Event Reg Here
                                $("#editMenuFunction").trigger('change');
                                
                                //#endregion
                            }
                            
                            if ($(curcontl[i]).attr("id") == "QueueName") {
                                //#region If you want Trigger Event Reg Here
                                $("#QueueName").trigger('change');
                                $("#TableName").trigger('change');
                                //#endregion
                            }
                            
                            if ($(curcontl[i]).attr("id") == "WFName") {
                                //#region If you want Trigger Event Reg Here
                                $("#WFName").trigger('change');
                                
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "CUSM_OldPrcsID") {
                                //#region If you want Trigger Event Reg Here
                               CusUpdation();
                                
                                //#endregion
                            }
				

if ($(curcontl[i]).attr("id") == "RightsReviewName") {
								//#region If you want Trigger Event Reg Here
								$("#QueRgtsviewlevel").trigger("click");   
								//#endregion
								}
			
							if ($(curcontl[i]).attr("id") == "CUSA_Country") {
                                //#region If you want Trigger Event Reg Here
                             BsCntryDsbl();
                                //#endregion
                            }
								if ($(curcontl[i]).attr("id") == "CUSA_RCountry") {
                                //#region If you want Trigger Event Reg Here
                             BsResCntryDsbl();
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "CIDT_Country") {
                                //#region If you want Trigger Event Reg Here
                            PrstEmplBsCntryDsbl();
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "CIDT_PCountry") {
                                //#region If you want Trigger Event Reg Here
                             PrvsBsResCntryDsbl();
                                //#endregion
                            }
							if ($(curcontl[i]).attr("id") == "EditFormID") {
								//#region If you want Trigger Event Reg Here
								$("#EditTblclmName").trigger("click");   
									//#endregion
								}
if ($(curcontl[i]).attr("id") == "FromLBQVal") {
    //#region If you want Trigger Event Reg Here
   // $("#WFName").trigger('change');
	DispQIconRIght();
    //#endregion
}

if ($(curcontl[i]).attr("id") == "TableName") {
	$("#BTNworks").trigger("click");
	//document.getElementById('UniqueParam').value="";

}
if ($(curcontl[i]).attr("id") == "EditUniqueParameter") {
    $("#EditBTNworks").trigger('click');

}
if ($(curcontl[i]).attr("id") == "HistTableName") {
 // fillHistTblClmNames();
	 $("#HistTblclmName").trigger('click');

}

if ($(curcontl[i]).attr("id") == "EditHistTableName") {
	 // fillHistTblClmNames();
		 $("#EditHistTblclmName").trigger('click');

	}
//edited by manimala...

if ($(curcontl[i]).attr("id") == "Desgn") {
    //#region If you want Trigger Event Reg Here
 $("#BTN_Usermap").trigger("click");
    
    //#endregion
}
if ($(curcontl[i]).attr("id") == "Userid") {
    //#region If you want Trigger Event Reg Here
 $("#BTN_Usermap").trigger("click");
    
    //#endregion
}


if ($(curcontl[i]).attr("id") == "EditLRCN_PurpCode") {
	
	$("#BTNRoi").trigger("click");

	}
if ($(curcontl[i]).attr("id") == "MenuName") {
	
Usersgridview();

}
if ($(curcontl[i]).attr("id") == "MenuLevelOne") {
	
Usersgridview1();

}
if ($(curcontl[i]).attr("id") == "MenuLevelTwo") {
	
Usersgridview2();

}
if ($(curcontl[i]).attr("id") == "Queue-ID") {
		
		Queuegridview();


}




if ($(curcontl[i]).attr("id") == "packageId") {
	$("#Rgtsgridview").trigger("click");

}
if ($(curcontl[i]).attr("id") == "FormName") {
	$("#Rgtsgridview").trigger("click");

}


if ($(curcontl[i]).attr("id") == "EditLRCN_PrCode") {
   
 $("#BTNRoi").trigger("click");
    
   
}

if ($(curcontl[i]).attr("id") == "EditLRCN_PurpCode") {
	
	$("#BTNRoi").trigger("click");

}

if ($(curcontl[i]).attr("id") == "EditLRCN_SchmCode") {
    //#region If you want Trigger Event Reg Here
 $("#BTNRoi").trigger("click");
    
    //#endregion
}

if ($(curcontl[i]).attr("id") == "WFIDHist") {
    //#region If you want Trigger Event Reg Here
 REPTHISTPAGEDATA()
    
    //#endregion
}

if ($(curcontl[i]).attr("id") == "PrcsID") {
    //#region If you want Trigger Event Reg Here
  $("#GetFileHistData").trigger("click");
    //#endregion
}
if ($(curcontl[i]).attr("id") == "PropPrcsID") {
    //#region If you want Trigger Event Reg Here
  AttachDMSFetch();
    //#endregion
}
if ($(curcontl[i]).attr("id") == "CustPrcsID") {
    //#region If you want Trigger Event Reg Here
  AttachDMSFetch();
    //#endregion
}

if ($(curcontl[i]).attr("id") == "NewMaintableName") {
	FetchAddTbl();
	ClrList();
}

if ($(curcontl[i]).attr("id") == "NewWFName") {
	ClrTxt();
}

if ($(curcontl[i]).attr("id") == "EditMaintableName") {
	 // fillHistTblClmNames();
		 $("#EditAddTblName").trigger('click');

	}
	
	 
if ($(curcontl[i]).attr("id") == "HEditTabshwclm") {
    //#region If you want Trigger Event Reg Here
 //$("#BTNRoi").trigger("click");
  ForEditRightClmBlur();  
    //#endregion
}


if ($(curcontl[i]).attr("id") == "EditTableName") {
    
 $("#EditTableName").trigger("change");
    
}


if ($(curcontl[i]).attr("id") == "EVSM_SchmCode") {
    //#region If you want Trigger Event Reg Here
  GetROIEMI();
    //#endregion
}

if ($(curcontl[i]).attr("id") == "wkfwid") {
    //#region If you want Trigger Event Reg Here
  Getfilestatusflddata();
    //#endregion
}







if ($(curcontl[i]).attr("id") == "ReviewName") {


	clrscr();
	FetchTblColName();
	fetchdata();
	}

  if ($(curcontl[i]).attr("id") == "OFIP_AcctID") {
    $("#OFIP_AcctID").trigger("change");
    
} 

 if ($(curcontl[i]).attr("id") == "LNAP_CusName") {
   ViewAppDtl()
    
} 


  
                      }
}
                    }
                }
                if (typeof enablecontrol != "undefined") {
                    for (var i = 0; i < aData.length; i++) {

                        if (typeof enablecontrol[i] != "undefined") {




                            if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                                $("." + enablecontrol[i]).show();
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }


                            }
                            else {
                                $("." + enablecontrol[i]).hide();

                                $("." + enablecontrol[i]).addClass("hidden-input");
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }
                            }
                        }
                    }
                }

               $("#popupSPL").dialog("close");
				//popTable.fnDestroy();
   if(popTable[0].id == "TableSPL")
		{
        popTable.fnDestroy();
		$('#TableSPL').empty();
		}
   
   
    //popTable.fnDestroy();
            });
            



        //                          $("#Table1_length").append('<table><tr><td><select><option value="1">Id</option></select></td><td><input id="searchpopup" type="text"/></td></tr></table><input id="checkvalueexist" value="search" type="button"/>');
        //        $('#Table1').after('<table><tr><td><input type="text"/></td></tr></table>');
        //                          $('#searchpopup').keyup(function () {
        //                              index = 0;
        //                              popTable.fnFilter(this.value, index, 1, 1);

        //                          });

        
       
        var footervalue = "";
     /*   if (typeof hdncolumn != "undefined") {
            for (var ii = 0; ii < count; ii++) {

                if (typeof hdncolumn[ii] != "undefined") {
                    popTable.fnSetColumnVis(hdncolumn[ii], false);
                }
                else {
                    footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                }
            }
        }

        else {

            for (var iii = 0; iii < count; iii++) {
               
                footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                

            }
        }*/
        footervalue += '<td><input type="button" name="search_engine" id="GridAdd" value="Add" style="width:50px"  class="search_init" /></td>';

            footervalue = '<tfoot><tr>' + footervalue + '</tr></tfoot>';
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');

            footervalue = "";
            $("#TableSPL").append(footervalue);
            //  $('#Table1').dataTable()
            //        $('#Table1').after('<table><tr><td><input type="text"/></td></tr></table>');
            var asInitVals = [];
            /*footer search*/
            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                popTable.fnFilter(this.value, $("tfoot input").index(this));
            });

        
        


        /*
        * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
        * the footer
        */
        $("tfoot input").each(function (i) {
            asInitVals[i] = this.value;
        });



        $("tfoot input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("tfoot input").index(this)];
            }
        });
        /*footer search*/
        $('#checkvalueexist').click(function () {
           
            var nNodes = $('#Table1').dataTable().fnGetNodes();
            // alertify.alert(nNodes.length);
            if (nNodes.length > 0) {
                for (var i = 0; i < nNodes.length; i++) {

                    var dat = $('#Table1').dataTable().fnGetData(nNodes[i]);
                    if ('36' == dat[0]) {

                        alert(LoadFrmXML("V0073") + dat[0]);
                        return false;
                    }
                    if (dat[1] == 'The Proposed Projec') {
                        alert(LoadFrmXML("V0074") + dat[1]);
                        return false;
                    }


                }

            }
        });
    }
 
}

///




function handlejsonChk(result, curcontl, hdncolumn, enablecontrol) {

    var dtData = [];
    var count = 0;
    //to re-init datatable


   // myData = JSON.parse(result.d);
//
    myData = $(result);
    
    var entry;
    var name;
    entry = myData[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }


    $.each(myData, function (event) {


    	switch (count) {
        case 1:
            dtData.push([this[dtData1[0]]]);
            break;
        case 2:
            dtData.push([this[dtData1[0]], this[dtData1[1]]]);
            break;
        case 3:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]]]);
            break;
        case 4:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]]]);
            break;
        case 5:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]]]);
            break;
        case 6:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]]]);
            break;
        case 7:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]]]);
            break;
        case 8:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]]]);
            break;
        case 9:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]]]);
            break;
        case 10:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]]]);
            break;
        case 11:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]]]);
            break;
        case 12:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]]]);
            break;
        case 13:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]]]);
            break;
        case 14:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]]]);
            break;
        case 15:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]]]);
            break;
        case 16:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]]]);
            break;
        case 17:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]]]);
            break;
        case 18:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]]]);
            break;
        case 19:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]]]);
            break;
        case 20:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]]]);
            break;
        case 21:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]]]);
            break;
        case 22:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]]]);
            break;
        case 23:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]]]);
            break;
        case 24:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]]]);
            break;
        case 25:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]]]);
            break;
        case 26:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]]]);
            break;
        case 27:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]]]);
            break;
        case 28:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]]]);
            break;
        case 29:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]]]);
            break;

        case 30:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]]]);
            break;
        case 31:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]]]);
            break;
        case 32:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]]]);
            break;
        case 33:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]]]);
            break;
        case 34:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]]]);
            break;
        case 35:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]]]);
            break;
		case 36:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]]]);
            break;
		case 37:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]]]);
            break;
		case 38:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]]]);
            break;
		case 39:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]]]);
            break;
		case 40:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]]]);
            break;
		case 41:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]]]);
            break;
		case 42:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]]]);
            break;
		case 43:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]]]);
            break;
		case 44:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]]]);
            break;
		case 45:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]]]);
            break;
		case 46:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]]]);
            break;
    }

    });
	
	
if(popTableChk!=null)
{
    if (!(typeof popTableChk === "undefined")) {
        /* destroy table*/
        //Delete the datable object first
		 
       
		
		if(popTableChk[0].id == "Table1")
		{
        popTableChk.fnDestroy();
		}
        popTableChk = null;
        // $('#Table1').dataTable( {"bDestroy": true	} );
       // popTableChk.fnDestroy();
        //Remove all the DOM elements
        $('#Table1').empty();
        /* destry table*/
        //        oSettings = popTableChk.fnSettings();
        //        popTableChk.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTableChk.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTableChk.fnDraw();

    }
	}
	if(popTable !=null)
	{
	
	if (!(typeof popTable === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

		if(popTable[0].id == "Table1")
		{
        popTable.fnDestroy();
		}
        popTable = null;
        // $('#Table1').dataTable( {"bDestroy": true	} );
       // popTable.fnDestroy();
        //Remove all the DOM elements
        $('#Table1').empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
	}
    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData1[i];
        dtcolumn.push(obj);
    }
		


    if (typeof popTableChk === "undefined" || popTableChk === null) {
        popTableChk = $('#Table1').dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],

			 'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': true,
           "aaSorting": [],
            "pageLength": 6,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           "scrollY": "210",
            "scrollX": true,
           
            "sPaginationType": "full_numbers",
			
            "fnDrawCallback": function (oSettings) {
			
	

            }
            });


            $(document).on('click', '#Table1 tbody th', function () {

                alertify.alert('1');

            });

			 $("#Table1 tbody").live("tr", "click", function () {
				alertify.alert("1")
			});
			
			//$("#Table1").delegate("tr.rows", "click", function ()
	//$('#Table1').on('click', '#Qselectchk', function()
	$("#Table1 tr").click(function(event)
	{
	
	check = $("input:checked" );
    if(check) {
         
		event.stopPropagation();
    } else {
        
		return false;
    }
	  
	  
	   
	//$("#popup").dialog("close");	
	});
	//$("#Qselectchk").on("click", function(){

	
			
		/*	
        //$(".dataTables_scrollHead").remove();
         $('#Table1_wrapper').on('click', '#Save', function(){
       // $(document).on('click', '#Table1 tbody tr', function () {
		   
		   var data1="";
		   if($("input:checked" ).length == 0)
	{
	alertify.alert("Please Select a File");
	$("input:checked" ).prop( "checked", false );
    }
	
	

	
	

	for(i=0; i<$("input:checked" ).length;i++)
	{
		
	for(var j=1;j<$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td').length;j++)
    {
		data1 += $($("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td'))[j].innerHTML+",";
	}
		
		data1 +="|";
	
	}
	
	ChkValues(data1);
	
	
    
	
	/*
                var aData = popTableChk.fnGetData(this);
                                
                for (var i = 0; i < aData.length; i++) {

                    if (typeof curcontl[i] != "undefined") {
						if(aData[i] != null)
						{
                        //     Getjsondate                       curcontl[i].innerText = aData[i]
                        if (aData[i].toString().substring(0, 5) == "/Date") {
                            $(curcontl[i]).val(Getjsondate(aData[i]))
                        }
                        else {
                            $(curcontl[i]).val(aData[i]);

                            if ($(curcontl[i]).attr("id") == "ActivityID") {
                                //#region If you want Trigger Event Reg Here
                                $("#ActivityID").trigger('change');
                                //#endregion
                            }
							
							 if ($(curcontl[i]).attr("id") == "BCDT_ApplID")
								 {
                                //#region If you want Trigger Event Reg Here
                            	ViewAppDtl();
								
                                //#endregion
                            }
                            
                            if ($(curcontl[i]).attr("id") == "TableName") {
                                //#region If you want Trigger Event Reg Here
                                $("#TableName").trigger('change');
                                //#endregion
                            }
                            if ($(curcontl[i]).attr("id") == "editMenuFunction")
                            {
                                //#region If you want Trigger Event Reg Here
                                $("#editMenuFunction").trigger('change');
                                
                                //#endregion
                            }
                            
                            if ($(curcontl[i]).attr("id") == "QueueName") {
                                //#region If you want Trigger Event Reg Here
                                $("#QueueName").trigger('change');
                                $("#TableName").trigger('change');
                                //#endregion
                            }
                            
                            if ($(curcontl[i]).attr("id") == "WFName") {
                                //#region If you want Trigger Event Reg Here
                                $("WFName").trigger('change');
                                
                                //#endregion
                            }
							

							
							

                        }
}
                    }
                }
                if (typeof enablecontrol != "undefined") {
                    for (var i = 0; i < aData.length; i++) {

                        if (typeof enablecontrol[i] != "undefined") {




                            if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                                $("." + enablecontrol[i]).show();
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }


                            }
                            else {
                                $("." + enablecontrol[i]).hide();

                                $("." + enablecontrol[i]).addClass("hidden-input");
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }
                            }
                        }
                    }
                }

                $("#popup").dialog("close");

            });
            
*/


        //                          $("#Table1_length").append('<table><tr><td><select><option value="1">Id</option></select></td><td><input id="searchpopup" type="text"/></td></tr></table><input id="checkvalueexist" value="search" type="button"/>');
        //        $('#Table1').after('<table><tr><td><input type="text"/></td></tr></table>');
        //                          $('#searchpopup').keyup(function () {
        //                              index = 0;
        //                              popTableChk.fnFilter(this.value, index, 1, 1);

        //                          });

        
      
       
		var HeaderBtnval="";
	   var footervalue = "";
     /*   if (typeof hdncolumn != "undefined") {
            for (var ii = 0; ii < count; ii++) {

                if (typeof hdncolumn[ii] != "undefined") {
                    popTableChk.fnSetColumnVis(hdncolumn[ii], false);
                }
                else {
                    footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                }
            }
        }

        else {

            for (var iii = 0; iii < count; iii++) {
               
                footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                

            }
        }*/
		
					HeaderBtnval +='&nbsp;&nbsp;&nbsp;<img class="buttonPRS" id="Save" style ="width:25px; height:20px;" title="Insert" type="button" src=\"/TPLSW/ThemeproLO/Common/Images/check1.png\"/>  (Click to insert)'
		
		
				$("#Table1").parents('div').find('.fg-toolbar').find(".dataTables_length").append(HeaderBtnval);
				 
       // footervalue += '<td><input type="button" name="search_engine" id="GridAdd" value="SAVE" style="width:50px"  class="search_init" /></td>';
		

            //footervalue = '<tfoot><tr>' + footervalue + '</tr></tfoot>';
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');

            footervalue = "";
            $("#Table1").append(footervalue);
            //  $('#Table1').dataTable()
            //        $('#Table1').after('<table><tr><td><input type="text"/></td></tr></table>');
            var asInitVals = [];
            /*footer search*/
            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                popTableChk.fnFilter(this.value, $("tfoot input").index(this));
            });

        
        


        /*
        * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
        * the footer
        */
        $("tfoot input").each(function (i) {
            asInitVals[i] = this.value;
        });



        $("tfoot input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("tfoot input").index(this)];
            }
        });
        /*footer search*/
        $('#checkvalueexist').click(function () {
           
            var nNodes = $('#Table1').dataTable().fnGetNodes();
            // alertify.alert(nNodes.length);
            if (nNodes.length > 0) {
                for (var i = 0; i < nNodes.length; i++) {

                    var dat = $('#Table1').dataTable().fnGetData(nNodes[i]);
                    if ('36' == dat[0]) {

                        alert(LoadFrmXML("V0073") + dat[0]);
                        return false;
                    }
                    if (dat[1] == 'The Proposed Projec') {
                        alert(LoadFrmXML("V0074") + dat[1]);
                        return false;
                    }


                }

            }
        });
    }

}



//

function handlejsonGrid(result,TableID, curcontl, hdncolumn, enablecontrol) {

    var dtData = [];
    var count = 0;
    //to re-init datatable

   // myData = JSON.parse(result.d);
  
    	myData = $(result);    	
    	
    var entry;
    var name;
         	
    entry = myData[0];
    
    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }
    
	if(hdncolumn != undefined)
	{
	if (hdncolumn.indexOf('|') != -1)
	{
	
	var GridType=hdncolumn.split('|')[1];
	var GridSize="";
	
	if (GridType == "Small")
	{
		GridSize = "160";
	}
	else if(GridType == "Medium")
	{
		GridSize = "260";
	}
	else if(GridType == "Large")
	{
		GridSize = "360";
	}
	else if(GridType == "ExtraLarge")
	{
		GridSize = "650";
	}
	else
	{
		GridSize = "160";
	}
	}
	else
	{
		GridSize = "160";
			hdncolumn=hdncolumn.split('|')[0];
	}
	
	}
	else
	{
		GridSize = "160";
	}
	
	

	
    $.each(myData, function (event) {

    	switch (count) {
        case 1:
            dtData.push([this[dtData1[0]]]);
            break;
        case 2:
            dtData.push([this[dtData1[0]], this[dtData1[1]]]);
            break;
        case 3:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]]]);
            break;
        case 4:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]]]);
            break;
        case 5:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]]]);
            break;
        case 6:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]]]);
            break;
        case 7:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]]]);
            break;
        case 8:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]]]);
            break;
        case 9:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]]]);
            break;
        case 10:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]]]);
            break;
        case 11:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]]]);
            break;
        case 12:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]]]);
            break;
        case 13:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]]]);
            break;
        case 14:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]]]);
            break;
        case 15:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]]]);
            break;
        case 16:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]]]);
            break;
        case 17:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]]]);
            break;
        case 18:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]]]);
            break;
        case 19:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]]]);
            break;
        case 20:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]]]);
            break;
        case 21:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]]]);
            break;
        case 22:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]]]);
            break;
        case 23:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]]]);
            break;
        case 24:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]]]);
            break;
        case 25:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]]]);
            break;
        case 26:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]]]);
            break;
        case 27:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]]]);
            break;
        case 28:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]]]);
            break;
        case 29:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]]]);
            break;

        case 30:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]]]);
            break;
        case 31:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]]]);
            break;
        case 32:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]]]);
            break;
        case 33:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]]]);
            break;
        case 34:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]]]);
            break;
        case 35:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]]]);
            break;
		case 36:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]]]);
            break;
		case 37:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]]]);
            break;
		case 38:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]]]);
            break;
		case 39:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]]]);
            break;
		case 40:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]]]);
            break;
		case 41:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]]]);
            break;
		case 42:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]]]);
            break;
		case 43:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]]]);
            break;
		case 44:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]]]);
            break;
		case 45:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]]]);
            break;
		case 46:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]]]);
            break;
		case 47:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]]]);
            break;
		case 48:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]],this[dtData1[47]]]);
            break;
		case 49:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]],this[dtData1[47]],this[dtData1[48]]]);
            break;
		case 50:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]], this[dtData1[46]],this[dtData1[47]],this[dtData1[48]],this[dtData1[49]]]);
            break;
		case 51:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]], this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]]]);
            break;
		case 52:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]]]);
            break;
		case 53:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]]]);
            break;
		case 54:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]]]);
            break;
		case 55:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]]]);
            break;
		case 56:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]]]);
            break;
			
		case 57:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]]]);
            break;
		case 58:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]]]);
            break;
		case 59:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]]]);
            break;
		case 60:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]]]);
            break;
		case 61:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]]]);
            break;
		case 62:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]]]);
            break;
		case 63:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]]]);
            break;
		case 64:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]]]);
            break;
		case 65:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]]]);
            break;
		case 66:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]]]);
            break;		
		case 67:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]],this[dtData1[66]]]);
            break;	
		case 68:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]],this[dtData1[66]],this[dtData1[67]]]);
            break;	
		case 69:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]],this[dtData1[66]],this[dtData1[67]],this[dtData1[68]]]);
            break;	
		case 70:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]],this[dtData1[66]],this[dtData1[67]],this[dtData1[68]],this[dtData1[69]]]);
            break;
    }

    });
    	
    if (!(typeof popTable === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

		
		
		
		if(popTable[0].id == "Table1")
		{
        popTable.fnDestroy();
		}
		
		/*if($('#TableSPL').html()!="")
		{
			$('#TableSPL').empty();
			$('#TableSPL').parents('div').find('thead').remove();
			
		}	*/	

		
       // popTable.fnDestroy();
        popTable = null;
        // $('#' + TableID).dataTable( {"bDestroy": true	} );
        //popTable.fnDestroy();
        //Remove all the DOM elements
        $('#' + TableID).empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
    //dynamically add column name
    var dtcolumn = [];
	
	

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData1[i];
        dtcolumn.push(obj);
    }

    if(myData[0].Action == "")
	{
    	dtData = [];
	}
	var cnt =0;
	if (TableID == 'TableDevtn')
	{
	cnt = 9 
	}
	/*if(TableID == 'TableCusOnBoard'){
		cnt = 8
	}*/
	else
	{
	cnt=6
	}
	if (count>=6)
	{
	var cc = parseInt(count)-parseInt(cnt);
	
	var hideClm = [];
	

	var hideClm1='[';
	
	if(hdncolumn != undefined)
	{
	if((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
		{
			if(hdncolumn.split('|')[2]!=undefined)
			{
			var hideClm1='['+hdncolumn.split('|')[2]+',';
			}
		}
	
	hdncolumn=hdncolumn.split('|')[0];
	}

	for(c=parseInt(cc);c<count;c++)
	{
		if(c==parseInt(count)-1)
		hideClm1=hideClm1+c.toString();
	else
		hideClm1=hideClm1+c.toString()+',';
		
	}
		
	hideClm1=hideClm1+']';
	hideClm = hideClm1;
	}
	
    if (typeof popTable === "undefined" || popTable === null) {
        popTable = $('#' + TableID).dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': false,
           "aaSorting": [],
            "pageLength": 10,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': false,
            "bDestroy": true,
            "bJQueryUI": true,
           // "responsive": true,
           "scrollY": GridSize,
            "scrollX": true,
           

            "sPaginationType": "full_numbers",
			  //"aoColumnDefs": [{ "bVisible": false, "aTargets": jQuery.parseJSON(hideClm) }],
			  "aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],

            "fnDrawCallback": function (oSettings) {
            	
            	 var a= $("#"+TableID+"_wrapper").find('.dataTables_scrollHeadInner').find('thead');
				//var a= $('.dataTables_scrollHeadInner').find('thead');
                 
				$('.dataTables_scrollHeadInner').find('thead');
                  
                  $("#"+TableID).closest('table').find('thead').remove();
                  $("#"+TableID).prepend(a);
                 $("#"+TableID+"_wrapper").find('.dataTables_scrollHead').remove();
				 
                  				  
				  var GridNodeName =$("#"+TableID).attr('name');
                  var LabelValue = LoadGridLablName(GridNodeName);
                  

                  if($("#"+TableID).find('thead tr').length >= 2)
                {
                  LabelValue="";
                 $("#"+TableID).find('thead').append(LabelValue);
                }
                  
                  else
                  {
                  $("#"+TableID).find('thead').prepend(LabelValue);
                  $("#"+TableID).find('thead').find('tr:nth-child(2)').css('display','none');
                  }
                  
                 
                  
                  
            }
            });
        
       
        
      

        
        
            $(document).on('click', '#Table1 tbody th', function () {

                alertify.alert('1');

            });

        //$(".dataTables_scrollHead").remove();
            $("#Table1 tbody").delegate("tr", "click", function () {
       // $(document).on('click', '#Table1 tbody tr', function () {

                var aData = popTable.fnGetData(this);
                                
                for (var i = 0; i < aData.length; i++) {

                    if (typeof curcontl[i] != "undefined") {
						if(aData[i] != null)
						{
                        //     Getjsondate                       curcontl[i].innerText = aData[i]
                        if (aData[i].toString().substring(0, 5) == "/Date") {
                            $(curcontl[i]).val(Getjsondate(aData[i]))
                        }
                        else {
                            $(curcontl[i]).val(aData[i]);

                            if ($(curcontl[i]).attr("id") == "ActivityID") {
                                //#region If you want Trigger Event Reg Here
                                $("#ActivityID").trigger('change');
                                //#endregion
                            }
                           
			      if ($(curcontl[i]).attr("id") == "TXT_BrkLinkId") {
                                $("#TXT_BrkLinkId").trigger('change');

                            }
                            if ($(curcontl[i]).attr("id") == "id_UserID") {
                                $("#id_UserID").trigger('change');

                            }

                        }
}
                    }
                }
                if (typeof enablecontrol != "undefined") {
                    for (var i = 0; i < aData.length; i++) {

                        if (typeof enablecontrol[i] != "undefined") {




                            if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                                $("." + enablecontrol[i]).show();
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }


                            }
                            else {
                                $("." + enablecontrol[i]).hide();

                                $("." + enablecontrol[i]).addClass("hidden-input");
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }
                            }
                        }
                    }
                }

               // $("#popup").dialog("close");

            });
            



        //                          $("#Table1_length").append('<table><tr><td><select><option value="1">Id</option></select></td><td><input id="searchpopup" type="text"/></td></tr></table><input id="checkvalueexist" value="search" type="button"/>');
        //        $('#' + TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
        //                          $('#searchpopup').keyup(function () {
        //                              index = 0;
        //                              popTable.fnFilter(this.value, index, 1, 1);

        //                          });

            
          //  $("#"+TableID+'_info').contents().filter(function(){
         //       return this.nodeType === 3;
         //   }).remove();
        
            $("#"+TableID+'_info').text('');
            
            
        var footervalue = "";
     //   $('.dataTables_info').empty();
        
     /*   if (typeof hdncolumn != "undefined") {
            for (var ii = 0; ii < count; ii++) {

                if (typeof hdncolumn[ii] != "undefined") {
                    popTable.fnSetColumnVis(hdncolumn[ii], false);
                }
                else {
                    footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                }
            }
        }

        else {

            for (var iii = 0; iii < count; iii++) {
               
                footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                

            }
        }*/
		
			$($("#"+ TableID ).find("tbody tr td a")).find('#GridEdit').attr('data-target',"#"+TableID+"GridPop")
		$($("#"+ TableID ).find("tbody tr td a")).find('#GridEdit').attr('data-toggle',"modal")
		
		
        footervalue += '<td><a type="button" name="search_engine" id="" data-toggle="modal" data-target= "#'+TableID+'GridPop" title="Add" style="width:20px;height:20px;" ><img id="GridAdd" name="0" style="width:20px;height:20px;" class="Table2" src="/TPLSW/ThemeproLO/Common/Images/file_add.png"></a></td>';
            footervalue = '<tfoot><tr>' + footervalue + '</tr><tfoot>';
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');
 
            //footervalue = "";
			var reviewbtnchk= $($("#"+ TableID ).find("tbody tr td a")[0]).find("img").attr("title");
			
				var alength = $($("#"+ TableID ).find("tbody tr td")[0]).find('a').length;
		
		
		
				if(alength != 1)
{
				
if(hdncolumn== "NOEDT" || hdncolumn == "NODEL")
{
			
}	
else
{
	$("#"+ TableID +'_info').append(footervalue);
	
}	
}
			
			if(TableID=="Table12")
			{
			$("#"+ TableID +'_info').find('#GridAdd').closest('td').hide();
			}
			
			//to increase the grid table width start
           $("#"+TableID).css('width','100%'); 
            //to increase the grid table width end
                        
            //  $('#' + TableID).dataTable()
            //        $('#' + TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
            var asInitVals = [];
            /*footer search*/
            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                popTable.fnFilter(this.value, $("tfoot input").index(this));
            });

        
        


        /*
        * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
        * the footer
        */
        $("tfoot input").each(function (i) {
            asInitVals[i] = this.value;
        });



        $("tfoot input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("tfoot input").index(this)];
            }
        });
        /*footer search*/
        $('#checkvalueexist').click(function () {
           
            var nNodes = $('#' + TableID).dataTable().fnGetNodes();
            // alertify.alert(nNodes.length);
            if (nNodes.length > 0) {
                for (var i = 0; i < nNodes.length; i++) {

                    var dat = $('#' + TableID).dataTable().fnGetData(nNodes[i]);
                    if ('36' == dat[0]) {

                        alert(LoadFrmXML("V0073") + dat[0]);
                        return false;
                    }
                    if (dat[1] == 'The Proposed Projec') {
                        alert(LoadFrmXML("V0074") + dat[1]);
                        return false;
                    }


                }

            }
        });
    }

	 $("#" + TableID + "_wrapper").addClass("card");
    $("#" + TableID + "_wrapper .fg-toolbar:first-of-type").remove();
	
	
	  $("#"+TableID+"_wrapper").find('.dataTables_scrollBody').css("overflow-x","auto");			   
			  
		 

	     // $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
	
	
	
    //if($('#' + TableID).find('tbody').find('tr').find('td')[3].innerHTML == "Blank" )
    	//{
   // $('#' + TableID).find('tbody').find('tr').remove();
    	//}
}


function handlejsonModPageGrid(result,TableID, curcontl, hdncolumn, enablecontrol) {

 var dtData = [];
    var count = 0;
    //to re-init datatable


   // myData = JSON.parse(result.d);

    myData = $(result);
    
    var entry;
    var name;
    entry = myData[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }

  $.each(myData, function (event) {

    	switch (count) {
        case 1:
            dtData.push([this[dtData1[0]]]);
            break;
        case 2:
            dtData.push([this[dtData1[0]], this[dtData1[1]]]);
            break;
        case 3:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]]]);
            break;
        case 4:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]]]);
            break;
        case 5:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]]]);
            break;
        case 6:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]]]);
            break;
        case 7:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]]]);
            break;
        case 8:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]]]);
            break;
        case 9:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]]]);
            break;
        case 10:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]]]);
            break;
        case 11:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]]]);
            break;
        case 12:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]]]);
            break;
        case 13:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]]]);
            break;
        case 14:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]]]);
            break;
        case 15:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]]]);
            break;
        case 16:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]]]);
            break;
        case 17:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]]]);
            break;
        case 18:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]]]);
            break;
        case 19:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]]]);
            break;
        case 20:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]]]);
            break;
        case 21:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]]]);
            break;
        case 22:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]]]);
            break;
        case 23:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]]]);
            break;
        case 24:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]]]);
            break;
        case 25:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]]]);
            break;
        case 26:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]]]);
            break;
        case 27:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]]]);
            break;
        case 28:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]]]);
            break;
        case 29:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]]]);
            break;

        case 30:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]]]);
            break;
        case 31:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]]]);
            break;
        case 32:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]]]);
            break;
        case 33:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]]]);
            break;
        case 34:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]]]);
            break;
        case 35:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]]]);
            break;
		case 36:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]]]);
            break;
		case 37:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]]]);
            break;
		case 38:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]]]);
            break;
		case 39:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]]]);
            break;
		case 40:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]]]);
            break;
		case 41:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]]]);
            break;
		case 42:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]]]);
            break;
		case 43:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]]]);
            break;
		case 44:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]]]);
            break;
		case 45:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]]]);
            break;
		case 46:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]]]);
            break;
		case 47:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]]]);
            break;
		case 48:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]],this[dtData1[47]]]);
            break;
		case 49:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]],this[dtData1[47]],this[dtData1[48]]]);
            break;
		case 50:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]], this[dtData1[46]],this[dtData1[47]],this[dtData1[48]],this[dtData1[49]]]);
            break;
		case 51:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]], this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]]]);
            break;
		case 52:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]]]);
            break;
		case 53:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]]]);
            break;
		case 54:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]]]);
            break;
		case 55:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]]]);
            break;
		case 56:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]]]);
            break;
			
		case 57:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]]]);
            break;
		case 58:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]]]);
            break;
		case 59:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]]]);
            break;
		case 60:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]]]);
            break;
		case 61:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]]]);
            break;
		case 62:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]]]);
            break;
		case 63:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]]]);
            break;
		case 64:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]]]);
            break;
		case 65:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]]]);
            break;
		case 66:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]]]);
            break;		
		case 67:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]],this[dtData1[66]]]);
            break;	
		case 68:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]],this[dtData1[66]],this[dtData1[67]]]);
            break;	
		case 69:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]],this[dtData1[66]],this[dtData1[67]],this[dtData1[68]]]);
            break;	
		case 70:
			dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]], this[dtData1[35]], this[dtData1[36]], this[dtData1[37]], this[dtData1[38]], this[dtData1[39]], this[dtData1[40]], this[dtData1[41]], this[dtData1[42]], this[dtData1[43]], this[dtData1[44]], this[dtData1[45]],this[dtData1[46]], this[dtData1[47]],this[dtData1[48]],this[dtData1[49]],this[dtData1[50]],this[dtData1[51]],this[dtData1[52]],this[dtData1[53]],this[dtData1[54]],this[dtData1[55]],this[dtData1[56]],this[dtData1[57]],this[dtData1[58]],this[dtData1[59]],this[dtData1[60]],this[dtData1[61]],this[dtData1[62]],this[dtData1[63]],this[dtData1[64]],this[dtData1[65]],this[dtData1[66]],this[dtData1[67]],this[dtData1[68]],this[dtData1[69]]]);
            break;
    }

    });
	
    if (!(typeof popTableModPageGrid === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

        popTableModPageGrid.fnDestroy();
		if(popTableModPageGrid[0].id == "Table1")
		{
        popTableModPageGrid.fnDestroy();
		}
        popTableModPageGrid = null;
        // $('#'+TableID).dataTable( {"bDestroy": true	} );
        //Remove all the DOM elements
        $('#'+TableID).empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData1[i];
//added by manimala... <<start>> for date sorting 
   if (dtData1[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
       //added by manimala... <<end>>
        dtcolumn.push(obj);
    }

 if(myData[0].Actions == "")
	{
    	dtData = [];
	}

	
		var cc = parseInt(count)-6;
	
	var hideClm = [];
	
	var hideClm1='[';
	
	if(hdncolumn != undefined)
	{
	if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
		{
			var hideClm1='['+hdncolumn.split('|')[2]+',';
			
		}
	
	hdncolumn=hdncolumn.split('|')[0];
	}
	
	
	

	
	
	for(c=parseInt(cc);c<count;c++)
	{
		if(c==parseInt(count)-1)
		hideClm1=hideClm1+c.toString();
	else
		hideClm1=hideClm1+c.toString()+',';
		
	}
		
	hideClm1=hideClm1+']';
	hideClm = hideClm1;

	
    if (typeof popTableModPageGrid === "undefined" || popTableModPageGrid === null) {
        popTableModPageGrid = $('#'+TableID).dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': false,
           "aaSorting": [],
            "pageLength": 50,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           "scrollY": "370",
            "scrollX": true,
           

            "sPaginationType": "full_numbers",
			 "aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],
             "fnDrawCallback": function (oSettings) {
            	
            	 var a= $("#"+TableID+"_wrapper").find('.dataTables_scrollHeadInner').find('thead');
				//var a= $('.dataTables_scrollHeadInner').find('thead');
                 
				//$('.dataTables_scrollHeadInner').find('thead');
                  
                 // $("#"+TableID).closest('table').find('thead').remove();
                  $("#"+TableID).prepend(a);
                // $("#"+TableID+"_wrapper").find('.dataTables_scrollHead').remove();
				 
                  				  
				  var GridNodeName =$("#"+TableID).attr('name');
                  var LabelValue = LoadGridLablName(GridNodeName);
                  

                  if($("#"+TableID).find('thead tr').length >= 3)
                {
                  LabelValue="";
                 $("#"+TableID).find('thead').append(LabelValue);
                }
                  
                  else
                  {
				   $($("#"+TableID).find('thead')[1]).remove();
                  $("#"+TableID).find('thead').prepend(LabelValue);
                  $("#"+TableID).find('thead').find('tr:nth-child(2)').css('display','none');
				  
                  }
                  
                 
                  
                  
            }
            });


            $(document).on('click', '#Table1 tbody th', function () {

                alertify.alert('1');

            });

			// For Queue Count Start
			
			//$("#"+$("ul").find('.active').attr('id')).find('span').attr('id').text();
			//$("#"+$("#"+($("ul").find('.active').attr('id'))).find('span').attr('id')).text($('#Table1_info').text().split(" ")[5])
			$("#"+$(enablecontrol).find('span').attr('id')).text($('#Table1_info').text().split(" ")[5])
			
			//  For Queue Count End
			
			
			
        //$(".dataTables_scrollHead").remove();
  /*          $("#Table1 tbody").delegate("tr", "click", function () {
       // $(document).on('click', '#Table1 tbody tr', function () {

                var aData = popTable.fnGetData(this);
                                
                for (var i = 0; i < aData.length; i++) {

                    if (typeof curcontl[i] != "undefined") {
						if(aData[i] != null)
						{
                        //     Getjsondate                       curcontl[i].innerText = aData[i]
                        if (aData[i].toString().substring(0, 5) == "/Date") {
                            $(curcontl[i]).val(Getjsondate(aData[i]))
                        }
                        else {
                            $(curcontl[i]).val(aData[i]);

                            if ($(curcontl[i]).attr("id") == "mode") {
                                //#region If you want Trigger Event Reg Here
                                $("#ActivityID").trigger('change');
                                //#endregion
                            }

                        }
}
                    }
                }
                if (typeof enablecontrol != "undefined") {
                    for (var i = 0; i < aData.length; i++) {

                        if (typeof enablecontrol[i] != "undefined") {




                            if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                                $("." + enablecontrol[i]).show();
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }


                            }
                            else {
                                $("." + enablecontrol[i]).hide();

                                $("." + enablecontrol[i]).addClass("hidden-input");
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }
                            }
                        }
                    }
                }
                
               // $("#popup").dialog("close");

            });
            
*/


        //                          $("#Table1_length").append('<table><tr><td><select><option value="1">Id</option></select></td><td><input id="searchpopup" type="text"/></td></tr></table><input id="checkvalueexist" value="search" type="button"/>');
        //        $('#'+TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
        //                          $('#searchpopup').keyup(function () {
        //                              index = 0;
        //                              popTable.fnFilter(this.value, index, 1, 1);

        //                          });

        
       
        var footervalue = "";
     /*   if (typeof hdncolumn != "undefined") {
            for (var ii = 0; ii < count; ii++) {

                if (typeof hdncolumn[ii] != "undefined") {
                    popTable.fnSetColumnVis(hdncolumn[ii], false);
                }
                else {
                    footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                }
            }
        }

        else {

            for (var iii = 0; iii < count; iii++) {
               
                footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                

            }
        }*/
		
		 $("#"+TableID+'_filter').text('');
		
		   $("#"+TableID).css('width','100%'); 
		   
        footervalue += '<td><a type="button" name="search_engine" id="" data-toggle="modal" data-target= "#'+TableID+'GridPop" title="Add" style="width:20px;height:20px;" ><img id="GridAdd" name="0" style="width:20px;height:20px;" class="Table2" src="/TPLSW/ThemeproLO/Common/Images/file_add.png"></a></td>';
            footervalue = '<tfoot><tr>' + footervalue + '</tr><tfoot>';
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');

            
			/** Grid Add Strt**/
			var reviewbtnchk= $($("#"+ TableID ).find("tbody tr td a")[0]).find("img").attr("title");
			var alength = $($("#"+ TableID ).find("tbody tr td")[0]).find('a').length;
			if(alength != 1)
				{
				if(hdncolumn== "NOEDT" || hdncolumn == "NODEL")
				{
						
				}	
				else
				{
					if(TableID=="Table12")
					{
						$("#"+ TableID +'_info').append(footervalue);
					}
					else
					{
						footervalue = "";
					}
				}	
				}
				if(TableID=="Table12")
				{
				$("#"+ TableID +'_info').find('#GridAdd').closest('td').hide();
				}
				/** Grid Add End**/
            $("#Table1").append(footervalue);
            //  $('#'+TableID).dataTable()
            //        $('#'+TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
            var asInitVals = [];
            /*footer search*/
            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                popTable.fnFilter(this.value, $("tfoot input").index(this));
            });

        
        


        /*
        * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
        * the footer
        */
        $("tfoot input").each(function (i) {
            asInitVals[i] = this.value;
        });



        $("tfoot input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("tfoot input").index(this)];
            }
        });
        /*footer search*/
        $('#checkvalueexist').click(function () {
           
            var nNodes = $('#'+TableID).dataTable().fnGetNodes();
            // alertify.alert(nNodes.length);
            if (nNodes.length > 0) {
                for (var i = 0; i < nNodes.length; i++) {

                    var dat = $('#'+TableID).dataTable().fnGetData(nNodes[i]);
                    if ('36' == dat[0]) {

                        alert(LoadFrmXML("V0073") + dat[0]);
                        return false;
                    }
                    if (dat[1] == 'The Proposed Projec') {
                        alert(LoadFrmXML("V0074") + dat[1]);
                        return false;
                    }


                }

            }
        });
    }

}
function handlejsonModPageGrid1(result,TableID, curcontl, hdncolumn, enablecontrol) {

 var dtData = [];
    var count = 0;
    //to re-init datatable


   // myData = JSON.parse(result.d);

    myData1 = $(result);
    
    var entry;
    var name;
    entry = myData1[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData2[count] = name;
            count++;
            //dtData1.push(name);

        }

    }

  $.each(myData1, function (event) {

    	switch (count) {
        case 1:
            dtData.push([this[dtData2[0]]]);
            break;
        case 2:
            dtData.push([this[dtData2[0]], this[dtData2[1]]]);
            break;
        case 3:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]]]);
            break;
        case 4:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]]]);
            break;
        case 5:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]]]);
            break;
        case 6:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]]]);
            break;
        case 7:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]]]);
            break;
        case 8:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]]]);
            break;
        case 9:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]]]);
            break;
        case 10:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]]]);
            break;
        case 11:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]]]);
            break;
        case 12:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]]]);
            break;
        case 13:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]]]);
            break;
        case 14:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]]]);
            break;
        case 15:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
            break;
        case 16:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
            break;
        case 17:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]]]);
            break;
        case 18:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]]]);
            break;
        case 19:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]]]);
            break;
        case 20:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]]]);
            break;
        case 21:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]]]);
            break;
        case 22:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]]]);
            break;
        case 23:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]]]);
            break;
        case 24:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]]]);
            break;
        case 25:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]]]);
            break;
        case 26:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]]]);
            break;
        case 27:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]]]);
            break;
        case 28:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]]]);
            break;
        case 29:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]]]);
            break;

        case 30:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]]]);
            break;
        case 31:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]]]);
            break;
        case 32:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]]]);
            break;
        case 33:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]]]);
            break;
        case 34:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]]]);
            break;
        case 35:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]]]);
            break;
		case 36:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]]]);
            break;
		case 37:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]]]);
            break;
		case 38:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]]]);
            break;
		case 39:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]]]);
            break;
		case 40:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]]]);
            break;
		case 41:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]]]);
            break;
		case 42:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]]]);
            break;
		case 43:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]]]);
            break;
		case 44:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]]]);
            break;
		case 45:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]]]);
            break;
		case 46:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]]]);
            break;
		case 47:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]]]);
            break;
		case 48:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]]]);
            break;
		case 49:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]],this[dtData2[48]]]);
            break;
		case 50:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]],this[dtData2[47]],this[dtData2[48]],this[dtData2[49]]]);
            break;
		case 51:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]]]);
            break;
		case 52:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]]]);
            break;
		case 53:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]]]);
            break;
		case 54:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]]]);
            break;
		case 55:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]]]);
            break;
		case 56:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]]]);
            break;
			
		case 57:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]]]);
            break;
		case 58:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]]]);
            break;
		case 59:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]]]);
            break;
		case 60:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]]]);
            break;
		case 61:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]]]);
            break;
		case 62:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]]]);
            break;
		case 63:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]]]);
            break;
		case 64:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]]]);
            break;
		case 65:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]]]);
            break;
		case 66:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]]]);
            break;		
		case 67:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]]]);
            break;	
		case 68:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]]]);
            break;	
		case 69:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]]]);
            break;	
		case 70:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]],this[dtData2[69]]]);
            break;
    }

    });
	
    if (!(typeof popTableModPageGrid1 === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

        popTableModPageGrid1.fnDestroy();
		if(popTableModPageGrid1[0].id == "Table1")
		{
        popTableModPageGrid1.fnDestroy();
		}
        popTableModPageGrid1 = null;
        // $('#'+TableID).dataTable( {"bDestroy": true	} );
        //Remove all the DOM elements
        $('#'+TableID).empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData2[i];
//added by manimala... <<start>> for date sorting 
   if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
       //added by manimala... <<end>>
        dtcolumn.push(obj);
    }

 if(myData1[0].Actions == "")
	{
    	dtData = [];
	}

	
		var cc = parseInt(count)-6;
	
	var hideClm = [];
	
	var hideClm1='[';
	
	if(hdncolumn != undefined)
	{
		
	if(hdncolumn !="||")
	{		
	if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
		{
			var hideClm1='['+hdncolumn.split('|')[2]+',';
			
		}
	
	hdncolumn=hdncolumn.split('|')[0];
	}
	}
	
	
	

	
	
	for(c=parseInt(cc);c<count;c++)
	{
		if(c==parseInt(count)-1)
		hideClm1=hideClm1+c.toString();
	else
		hideClm1=hideClm1+c.toString()+',';
		
	}
		
	hideClm1=hideClm1+']';
	hideClm = hideClm1;

	
    if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
        popTableModPageGrid1 = $('#'+TableID).dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': false,
           "aaSorting": [],
            "pageLength": 50,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           "scrollY": "370",
            "scrollX": true,
           

            "sPaginationType": "full_numbers",
			 "aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],
             "fnDrawCallback": function (oSettings) {
            	
            	 var a= $("#"+TableID+"_wrapper").find('.dataTables_scrollHeadInner').find('thead');
				//var a= $('.dataTables_scrollHeadInner').find('thead');
                 
				//$('.dataTables_scrollHeadInner').find('thead');
                  
                 // $("#"+TableID).closest('table').find('thead').remove();
                  $("#"+TableID).prepend(a);
                // $("#"+TableID+"_wrapper").find('.dataTables_scrollHead').remove();
				 
                  				  
				  var GridNodeName =$("#"+TableID).attr('name');
                  var LabelValue = LoadGridLablName(GridNodeName);
                  

                  if($("#"+TableID).find('thead tr').length >= 3)
                {
                  LabelValue="";
                 $("#"+TableID).find('thead').append(LabelValue);
                }
                  
                  else
                  {
				   $($("#"+TableID).find('thead')[1]).remove();
                  $("#"+TableID).find('thead').prepend(LabelValue);
                  $("#"+TableID).find('thead').find('tr:nth-child(2)').css('display','none');
				  
                  }
                  
                 
                  
                  
            }
            });


            $(document).on('click', '#Table1 tbody th', function () {

                alertify.alert('1');

            });

			// For Queue Count Start
			
			//$("#"+$("ul").find('.active').attr('id')).find('span').attr('id').text();
			//$("#"+$("#"+($("ul").find('.active').attr('id'))).find('span').attr('id')).text($('#Table1_info').text().split(" ")[5])
			$("#"+$(enablecontrol).find('span').attr('id')).text($('#Table1_info').text().split(" ")[5])
			
			//  For Queue Count End
			
			
			
        //$(".dataTables_scrollHead").remove();
  /*          $("#Table1 tbody").delegate("tr", "click", function () {
       // $(document).on('click', '#Table1 tbody tr', function () {

                var aData = popTable.fnGetData(this);
                                
                for (var i = 0; i < aData.length; i++) {

                    if (typeof curcontl[i] != "undefined") {
						if(aData[i] != null)
						{
                        //     Getjsondate                       curcontl[i].innerText = aData[i]
                        if (aData[i].toString().substring(0, 5) == "/Date") {
                            $(curcontl[i]).val(Getjsondate(aData[i]))
                        }
                        else {
                            $(curcontl[i]).val(aData[i]);

                            if ($(curcontl[i]).attr("id") == "mode") {
                                //#region If you want Trigger Event Reg Here
                                $("#ActivityID").trigger('change');
                                //#endregion
                            }

                        }
}
                    }
                }
                if (typeof enablecontrol != "undefined") {
                    for (var i = 0; i < aData.length; i++) {

                        if (typeof enablecontrol[i] != "undefined") {




                            if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                                $("." + enablecontrol[i]).show();
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }


                            }
                            else {
                                $("." + enablecontrol[i]).hide();

                                $("." + enablecontrol[i]).addClass("hidden-input");
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }
                            }
                        }
                    }
                }
                
               // $("#popup").dialog("close");

            });
            
*/


        //                          $("#Table1_length").append('<table><tr><td><select><option value="1">Id</option></select></td><td><input id="searchpopup" type="text"/></td></tr></table><input id="checkvalueexist" value="search" type="button"/>');
        //        $('#'+TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
        //                          $('#searchpopup').keyup(function () {
        //                              index = 0;
        //                              popTable.fnFilter(this.value, index, 1, 1);

        //                          });

        
       
        var footervalue = "";
     /*   if (typeof hdncolumn != "undefined") {
            for (var ii = 0; ii < count; ii++) {

                if (typeof hdncolumn[ii] != "undefined") {
                    popTable.fnSetColumnVis(hdncolumn[ii], false);
                }
                else {
                    footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                }
            }
        }

        else {

            for (var iii = 0; iii < count; iii++) {
               
                footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                

            }
        }*/
		
		 $("#"+TableID+'_filter').text('');
		
		   $("#"+TableID).css('width','100%'); 
		   
        footervalue += '<td><input type="button" name="search_engine" id="GridAdd" value="Add" style="width:50px"  class="search_init" /></td>';

            footervalue = '<tfoot><tr>' + footervalue + '</tr><tfoot>';
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');

            footervalue = "";
            $("#Table1").append(footervalue);
            //  $('#'+TableID).dataTable()
            //        $('#'+TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
            var asInitVals = [];
            /*footer search*/
            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                popTable1.fnFilter(this.value, $("tfoot input").index(this));
            });

        
        


        /*
        * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
        * the footer
        */
        $("tfoot input").each(function (i) {
            asInitVals[i] = this.value;
        });



        $("tfoot input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("tfoot input").index(this)];
            }
        });
        /*footer search*/
        $('#checkvalueexist').click(function () {
           
            var nNodes = $('#'+TableID).dataTable().fnGetNodes();
            // alertify.alert(nNodes.length);
            if (nNodes.length > 0) {
                for (var i = 0; i < nNodes.length; i++) {

                    var dat = $('#'+TableID).dataTable().fnGetData(nNodes[i]);
                    if ('36' == dat[0]) {

                        alert(LoadFrmXML("V0073") + dat[0]);
                        return false;
                    }
                    if (dat[1] == 'The Proposed Projec') {
                        alert(LoadFrmXML("V0074") + dat[1]);
                        return false;
                    }


                }

            }
        });
    }

}
function handlejson_Whdn(result, curcontl, hdncolumn, enablecontrol) {
    Assignpopup = curcontl;
    AssignJSON_To_Grid_WImg(result.d, oTable_Grid_Branch);
}



function handlejson_Whdn_FWelBranch(result, curcontl, hdncolumn, enablecontrol) {
    Assignpopup = curcontl;
    AssignJSON_To_Grid_WImg_ForPrdID(result.d, oTable_PopBrAcctID);
}

function handlejson_Whdn_FBrID(result, curcontl, hdncolumn, enablecontrol) {
    Assignpopup = curcontl;
    AssignJSON_To_Grid_WImg_ForPrdID(result.d, oTable_Grid_Branch);
}




function handlejson_Whdn_FPrdID(result, curcontl, hdncolumn, enablecontrol) {
    Assignpopup = curcontl;
    AssignJSON_To_Grid_WImg_ForPrdID(result.d, oTable_Grid_PrdID);
}
function handlejson_Whdn_FAcctID(result, curcontl, hdncolumn, enablecontrol) {
    Assignpopup = curcontl;
    AssignJSON_To_Grid_WImg(result.d, oTable_Grid_AcctID);
}
 function FncallModPageGridLrgData_HistView(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');

    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
  

  
  	 $.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
               async: false,
               //dataType: "json",
    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	op=xml1.responseText;

if (op != "")
{	
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')


        result = result.replace(/>null</g,"><");
        	var json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//alertify.alert(json);
        	
if(json == "")
{
alert(LoadFrmXML("V0072"));
  $('#'+fnname).empty();
  	$("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
$("#"+fnname+"_paginate").remove();
$("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
return
}


        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            handlejsonModPageGrid_HistView(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),fnname,control1, hdncolumn, cntrl);
}
ajaxindicatorstop();

}	 //ajaxindicatorstop();
else
{
alert(LoadFrmXML("V0072"));
            	ajaxindicatorstop();
}
},

            error: function (xml1)
            {
//alertify.alert(LoadFrmXML("V0126"));
alert(LoadFrmXML("V0126"));
OP="Fail";
//ajaxindicatorstop();
            }
                                  
               
    	   });

  
       //   

}




function handlejsonModPageGrid_HistView(result,TableID, curcontl, hdncolumn, enablecontrol) {

 var dtData = [];
    var count = 0;
    //to re-init datatable


   // myData = JSON.parse(result.d);

    myData = $(result);
    
    var entry;
    var name;
    entry = myData[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData1[count] = name;
            count++;
            //dtData1.push(name);

        }

    }


    $.each(myData, function (event) {


    	switch (count) {
        case 1:
            dtData.push([this[dtData1[0]]]);
            break;
        case 2:
            dtData.push([this[dtData1[0]], this[dtData1[1]]]);
            break;
        case 3:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]]]);
            break;
        case 4:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]]]);
            break;
        case 5:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]]]);
            break;
        case 6:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]]]);
            break;
        case 7:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]]]);
            break;
        case 8:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]]]);
            break;
        case 9:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]]]);
            break;
        case 10:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]]]);
            break;
        case 11:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]]]);
            break;
        case 12:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]]]);
            break;
        case 13:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]]]);
            break;
        case 14:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]]]);
            break;
        case 15:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]]]);
            break;
        case 16:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]]]);
            break;
        case 17:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]]]);
            break;
        case 18:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]]]);
            break;
        case 19:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]]]);
            break;
        case 20:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]]]);
            break;
        case 21:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]]]);
            break;
        case 22:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]]]);
            break;
        case 23:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]]]);
            break;
        case 24:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]]]);
            break;
        case 25:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]]]);
            break;
        case 26:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]]]);
            break;
        case 27:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]]]);
            break;
        case 28:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]]]);
            break;
        case 29:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]]]);
            break;

        case 30:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]]]);
            break;
        case 31:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]]]);
            break;
        case 32:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]]]);
            break;
        case 33:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]]]);
            break;
        case 34:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]]]);
            break;
        case 35:
            dtData.push([this[dtData1[0]], this[dtData1[1]], this[dtData1[2]], this[dtData1[3]], this[dtData1[4]], this[dtData1[5]], this[dtData1[6]], this[dtData1[7]], this[dtData1[8]], this[dtData1[9]], this[dtData1[10]], this[dtData1[11]], this[dtData1[12]], this[dtData1[13]], this[dtData1[14]], this[dtData1[15]], this[dtData1[16]], this[dtData1[17]], this[dtData1[18]], this[dtData1[19]], this[dtData1[20]], this[dtData1[21]], this[dtData1[22]], this[dtData1[23]], this[dtData1[24]], this[dtData1[25]], this[dtData1[26]], this[dtData1[27]], this[dtData1[28]], this[dtData1[29]], this[dtData1[30]], this[dtData1[31]], this[dtData1[32]], this[dtData1[33]], this[dtData1[34]]]);
            break;
    }

    });
    if (!(typeof popTableModPageGrid === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

        popTableModPageGrid.fnDestroy();
if(popTableModPageGrid[0].id == "Table1")
{
        popTableModPageGrid.fnDestroy();
}
        popTableModPageGrid = null;
        // $('#'+TableID).dataTable( {"bDestroy": true	} );
        //Remove all the DOM elements
        $('#'+TableID).empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData1[i];
//added by manimala... <<start>> for date sorting 
   if (dtData1[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
       //added by manimala... <<end>>
        dtcolumn.push(obj);
    }

 if(myData[0].Actions == "")
{
    	dtData = [];
}


var cc = parseInt(count)-3;

var hideClm = [];

var hideClm1='[';

for(c=parseInt(cc);c<count;c++)
{
if(c==parseInt(count)-1)
hideClm1=hideClm1+c.toString();
else
hideClm1=hideClm1+c.toString()+',';

}

hideClm1=hideClm1+']';
hideClm = hideClm1;


    if (typeof popTableModPageGrid === "undefined" || popTableModPageGrid === null) {
        popTableModPageGrid = $('#'+TableID).dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': true,
           "aaSorting": [],
            "pageLength": 7,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           "scrollY": "270",
            "scrollX": true,
           

            "sPaginationType": "full_numbers",
 "aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],
            "fnDrawCallback": function (oSettings) {
            	
            	

            }
            });


            $(document).on('click', '#Table1 tbody th', function () {

                alertify.alert('1');

            });

// For Queue Count Start

//$("#"+$("ul").find('.active').attr('id')).find('span').attr('id').text();
//$("#"+$("#"+($("ul").find('.active').attr('id'))).find('span').attr('id')).text($('#Table1_info').text().split(" ")[5])
$("#"+$(enablecontrol).find('span').attr('id')).text($('#Table1_info').text().split(" ")[5])

//  For Queue Count End



        //$(".dataTables_scrollHead").remove();
  /*          $("#Table1 tbody").delegate("tr", "click", function () {
       // $(document).on('click', '#Table1 tbody tr', function () {

                var aData = popTable.fnGetData(this);
                                
                for (var i = 0; i < aData.length; i++) {

                    if (typeof curcontl[i] != "undefined") {
if(aData[i] != null)
{
                        //     Getjsondate                       curcontl[i].innerText = aData[i]
                        if (aData[i].toString().substring(0, 5) == "/Date") {
                            $(curcontl[i]).val(Getjsondate(aData[i]))
                        }
                        else {
                            $(curcontl[i]).val(aData[i]);

                            if ($(curcontl[i]).attr("id") == "mode") {
                                //#region If you want Trigger Event Reg Here
                                $("#ActivityID").trigger('change');
                                //#endregion
                            }

                        }
}
                    }
                }
                if (typeof enablecontrol != "undefined") {
                    for (var i = 0; i < aData.length; i++) {

                        if (typeof enablecontrol[i] != "undefined") {




                            if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                                $("." + enablecontrol[i]).show();
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }


                            }
                            else {
                                $("." + enablecontrol[i]).hide();

                                $("." + enablecontrol[i]).addClass("hidden-input");
                                for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                    var trid = $("." + enablecontrol[i])[ii].id;
                                    $("#" + trid).find("input[type=text]").val("");
                                }
                            }
                        }
                    }
                }
                
               // $("#popup").dialog("close");

            });
            
*/


        //                          $("#Table1_length").append('<table><tr><td><select><option value="1">Id</option></select></td><td><input id="searchpopup" type="text"/></td></tr></table><input id="checkvalueexist" value="search" type="button"/>');
        //        $('#'+TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
        //                          $('#searchpopup').keyup(function () {
        //                              index = 0;
        //                              popTable.fnFilter(this.value, index, 1, 1);

        //                          });

        
       
        var footervalue = "";
     /*   if (typeof hdncolumn != "undefined") {
            for (var ii = 0; ii < count; ii++) {

                if (typeof hdncolumn[ii] != "undefined") {
                    popTable.fnSetColumnVis(hdncolumn[ii], false);
                }
                else {
                    footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                }
            }
        }

        else {

            for (var iii = 0; iii < count; iii++) {
               
                footervalue += '<td><input type="button" name="search_engine" style="width:15px"  class="search_init" /></td>';
                

            }
        }*/
        footervalue += '<td><input type="button" name="search_engine" id="GridAdd" value="Add" style="width:50px"  class="search_init" /></td>';

            footervalue = '<tfoot><tr>' + footervalue + '</tr><tfoot>';
            //$("#Table1_length").append('<input id="checkvalueexist" value="search" type="button"/>');

            footervalue = "";
            $("#Table1").append(footervalue);
            //  $('#'+TableID).dataTable()
            //        $('#'+TableID).after('<table><tr><td><input type="text"/></td></tr></table>');
            var asInitVals = [];
            /*footer search*/
            $("tfoot input").keyup(function () {
                /* Filter on the column (the index) of this element */
                popTable.fnFilter(this.value, $("tfoot input").index(this));
            });

        
        


        /*
        * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
        * the footer
        */
        $("tfoot input").each(function (i) {
            asInitVals[i] = this.value;
        });



        $("tfoot input").blur(function (i) {
            if (this.value == "") {
                this.className = "search_init";
                this.value = asInitVals[$("tfoot input").index(this)];
            }
        });
        /*footer search*/
        $('#checkvalueexist').click(function () {
           
            var nNodes = $('#'+TableID).dataTable().fnGetNodes();
            // alertify.alert(nNodes.length);
            if (nNodes.length > 0) {
                for (var i = 0; i < nNodes.length; i++) {

                    var dat = $('#'+TableID).dataTable().fnGetData(nNodes[i]);
                    if ('36' == dat[0]) {

                        alert(LoadFrmXML("V0073") + dat[0]);
                        return false;
                    }
                    if (dat[1] == 'The Proposed Projec') {
                        alert(LoadFrmXML("V0074") + dat[1]);
                        return false;
                    }


                }

            }
        });
    }

}

//FEP DASH
var GTableID="";
function handlejsonModDashGridWP(result,TableID, curcontl, hdncolumn, enablecontrol,par) {
	GTableID=TableID;
	 var dtData = [];
	    var count = 0;
	    //to re-init datatable


	   // myData = JSON.parse(result.d);

	    myData1 = $(result);
	    
	    var entry;
	    var name;
	    entry = myData1[0];

	    for (name in entry) {
	        if (entry.hasOwnProperty(name)) {
	            dtData2[count] = name;
	            count++;
	            //dtData1.push(name);

	        }

	    }

	  $.each(myData1, function (event) {

	    	switch (count) {
	        case 1:
	            dtData.push([this[dtData2[0]]]);
	            break;
	        case 2:
	            dtData.push([this[dtData2[0]], this[dtData2[1]]]);
	            break;
	        case 3:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]]]);
	            break;
	        case 4:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]]]);
	            break;
	        case 5:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]]]);
	            break;
	        case 6:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]]]);
	            break;
	        case 7:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]]]);
	            break;
	        case 8:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]]]);
	            break;
	        case 9:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]]]);
	            break;
	        case 10:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]]]);
	            break;
	        case 11:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]]]);
	            break;
	        case 12:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]]]);
	            break;
	        case 13:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]]]);
	            break;
	        case 14:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]]]);
	            break;
	        case 15:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
	            break;
	        case 16:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
	            break;
	        case 17:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]]]);
	            break;
	        case 18:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]]]);
	            break;
	        case 19:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]]]);
	            break;
	        case 20:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]]]);
	            break;
	        case 21:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]]]);
	            break;
	        case 22:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]]]);
	            break;
	        case 23:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]]]);
	            break;
	        case 24:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]]]);
	            break;
	        case 25:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]]]);
	            break;
	        case 26:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]]]);
	            break;
	        case 27:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]]]);
	            break;
	        case 28:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]]]);
	            break;
	        case 29:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]]]);
	            break;

	        case 30:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]]]);
	            break;
	        case 31:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]]]);
	            break;
	        case 32:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]]]);
	            break;
	        case 33:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]]]);
	            break;
	        case 34:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]]]);
	            break;
	        case 35:
	            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]]]);
	            break;
			case 36:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]]]);
	            break;
			case 37:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]]]);
	            break;
			case 38:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]]]);
	            break;
			case 39:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]]]);
	            break;
			case 40:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]]]);
	            break;
			case 41:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]]]);
	            break;
			case 42:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]]]);
	            break;
			case 43:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]]]);
	            break;
			case 44:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]]]);
	            break;
			case 45:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]]]);
	            break;
			case 46:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]]]);
	            break;
			case 47:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]]]);
	            break;
			case 48:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]]]);
	            break;
			case 49:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]],this[dtData2[48]]]);
	            break;
			case 50:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]],this[dtData2[47]],this[dtData2[48]],this[dtData2[49]]]);
	            break;
			case 51:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]]]);
	            break;
			case 52:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]]]);
	            break;
			case 53:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]]]);
	            break;
			case 54:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]]]);
	            break;
			case 55:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]]]);
	            break;
			case 56:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]]]);
	            break;
				
			case 57:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]]]);
	            break;
			case 58:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]]]);
	            break;
			case 59:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]]]);
	            break;
			case 60:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]]]);
	            break;
			case 61:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]]]);
	            break;
			case 62:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]]]);
	            break;
			case 63:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]]]);
	            break;
			case 64:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]]]);
	            break;
			case 65:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]]]);
	            break;
			case 66:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]]]);
	            break;		
			case 67:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]]]);
	            break;	
			case 68:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]]]);
	            break;	
			case 69:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]]]);
	            break;	
			case 70:
				dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]],this[dtData2[69]]]);
	            break;
	    }

	    });
		
	    if (!(typeof popTableModPageGrid1 === "undefined")) {
	        /* destroy table*/
	        //Delete the datable object first

	       // popTableModPageGrid1.fnDestroy();
			if(popTableModPageGrid1[0].id == "Table1")
			{
	        //popTableModPageGrid1.fnDestroy();
			}
	        popTableModPageGrid1 = null;
	        // $('#'+TableID).dataTable( {"bDestroy": true	} );
	        //Remove all the DOM elements
	        $('#'+TableID).empty();
	        /* destry table*/
	        //        oSettings = popTable.fnSettings();
	        //        popTable.fnClearTable(this);
	        //        for (var i = 0; i < dtData.length; i++) {
	        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
	        //        }
	        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
	        //        popTable.fnDraw();

	    }
	    //dynamically add column name
	    var dtcolumn = [];

	    for (var i = 0; i < count; i++) {
	        var obj = {};
	        obj["sTitle"] = dtData2[i];
	//added by manimala... <<start>> for date sorting 
	   if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
	       //added by manimala... <<end>>
	        dtcolumn.push(obj);
	    }

	 if(myData1[0].Actions == "")
		{
	    	dtData = [];
		}

		
			var cc = parseInt(count)-6;
		
		var hideClm = [];
		
		var hideClm1='[';
		
		if(hdncolumn != undefined)
		{
			
		if(hdncolumn !="||")
		{		
		if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
			{
				var hideClm1='['+hdncolumn.split('|')[2]+',';
				
			}
		
		hdncolumn=hdncolumn.split('|')[0];
		}
		}
		
		
		

		
		
		for(c=parseInt(cc);c<count;c++)
		{
			if(c==parseInt(count)-1)
			hideClm1=hideClm1+c.toString();
		else
			hideClm1=hideClm1+c.toString()+',';
			
		}
			
		hideClm1=hideClm1+']';
		hideClm = hideClm1;

		
	    if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
	        popTableModPageGrid1 = $('#'+TableID).dataTable({  //grid is the id of the table
	            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
	            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
	            'aaData': dtData,
	            "aoColumns": dtcolumn, 
	            "bAutoWidth": false,
	            "autoWidth": false,
	            'bPaginate': true,
	           "aaSorting": [],
	            "pageLength": 5,
	            "bDeferRender": true,
	            'bInfo': true,
	            'bFilter': true,
	            "bDestroy": true,
	            "bJQueryUI": true,
	           
	          // "scrollY": true,
	           // "scrollX": true,
	           

	            "sPaginationType": "full_numbers",
				 "aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],
	             "fnDrawCallback": function (oSettings) {
	            	
	            	
	                  
	            }
	            });


	        $("#Table2 tbody").delegate("tr", "click", function () {

	            var aData = popTableModPageGrid1.fnGetData(this);
	                            
	            for (var i = 0; i < aData.length; i++) {

	                if (typeof curcontl[i] != "undefined") {
						if(aData[i] != null)
						{
	                    //     Getjsondate                       curcontl[i].innerText = aData[i]
	                    if (aData[i].toString().substring(0, 5) == "/Date") {
	                        $(curcontl[i]).val(Getjsondate(aData[i]))
	                    }
	                    else {
	                        $(curcontl[i]).val(aData[i]);
		
							
							
	                  }
	}
	                }
	            }
	            if (typeof enablecontrol != "undefined") {
	                for (var i = 0; i < aData.length; i++) {

	                    if (typeof enablecontrol[i] != "undefined") {




	                        if (aData[i] == "Group with others" || aData[i] == "GROUP") {

	                            $("." + enablecontrol[i]).show();
	                            for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
	                                var trid = $("." + enablecontrol[i])[ii].id;
	                                $("#" + trid).find("input[type=text]").val("");
	                            }


	                        }
	                        else {
	                            $("." + enablecontrol[i]).hide();

	                            $("." + enablecontrol[i]).addClass("hidden-input");
	                            for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
	                                var trid = $("." + enablecontrol[i])[ii].id;
	                                $("#" + trid).find("input[type=text]").val("");
	                            }
	                        }
	                    }
	                }
	            }

	          //  $("#popup").dialog("close");

	        });
	        
	        
	    	
	        $('#'+TableID+'_wrapper').find('label').each(function () {
	        	$(this).parent().append($(this).children());
	        	});
	        	$('#'+TableID+'_wrapper .dataTables_filter').find('input').each(function () {
	        		$('#'+TableID).find('input').attr("placeholder", "Search");
	        		$('#'+TableID).find('input').removeClass('form-control-sm');
	        	});
	        	$('#'+TableID+'_wrapper .dataTables_length').addClass('d-flex flex-row');
	        	$('#'+TableID+'_wrapper .dataTables_filter').addClass('md-form');
	        	$('#'+TableID+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
	        	$('#'+TableID+'_wrapper select').addClass('mdb-select');
	        	//$('#Table1_wrapper .mdb-select').material_Select();
	        	$('#'+TableID+'_wrapper .dataTables_filter').find('label').remove();
	        
	        	
	        	$("#"+TableID+"_wrapper .dataTables_scrollHeadInner").css("width","100%")
	        	$("#"+TableID+"_wrapper .dataTables_scrollHeadInner table").css("width","100%")
	            $("#"+TableID).css("width","100%")

	           $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").addClass(par.TableHeader);

			   		     $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
			   
			    // Middle row Customisation
		   $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");
			   
			  
		     $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
			
			      $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
			   
	        	//$($("#" + TableID + "_wrapper").find(".row")[2]).remove();
	        	
	        	$($("#" + TableID + "_wrapper").find('.row')[0]).find("div").remove();
	        	
	        	 $($("#" + TableID + "_wrapper").find('.row')[0]).removeClass("row");
	        	
	        	 $("#"+TableID+"_wrapper .page-item.active .page-link").addClass(par.TableHeader.replace('card-headerGrid',''));
	        	 
				 $("#"+TableID+"_info").addClass(par.TableHeader.replace('card-headerGrid','') + 'Txt');
				 
				 
	
        	
				 
	        	// $("#" + TableID + "_wrapper").addClass("card");
	        	   // $("#" + TableID + "_wrapper:first-of-type").remove();
	        	

	    }

	}


	
	
function handlejsonModDashGridWOP(result,TableID, curcontl, hdncolumn, enablecontrol,par) {

 var dtData = [];
    var count = 0;
    //to re-init datatable


   // myData = JSON.parse(result.d);

    myData1 = $(result);
    
    var entry;
    var name;
    entry = myData1[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData2[count] = name;
            count++;
            //dtData1.push(name);

        }

    }

  $.each(myData1, function (event) {

    	switch (count) {
        case 1:
            dtData.push([this[dtData2[0]]]);
            break;
        case 2:
            dtData.push([this[dtData2[0]], this[dtData2[1]]]);
            break;
        case 3:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]]]);
            break;
        case 4:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]]]);
            break;
        case 5:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]]]);
            break;
        case 6:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]]]);
            break;
        case 7:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]]]);
            break;
        case 8:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]]]);
            break;
        case 9:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]]]);
            break;
        case 10:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]]]);
            break;
        case 11:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]]]);
            break;
        case 12:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]]]);
            break;
        case 13:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]]]);
            break;
        case 14:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]]]);
            break;
        case 15:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
            break;
        case 16:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
            break;
        case 17:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]]]);
            break;
        case 18:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]]]);
            break;
        case 19:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]]]);
            break;
        case 20:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]]]);
            break;
        case 21:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]]]);
            break;
        case 22:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]]]);
            break;
        case 23:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]]]);
            break;
        case 24:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]]]);
            break;
        case 25:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]]]);
            break;
        case 26:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]]]);
            break;
        case 27:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]]]);
            break;
        case 28:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]]]);
            break;
        case 29:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]]]);
            break;

        case 30:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]]]);
            break;
        case 31:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]]]);
            break;
        case 32:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]]]);
            break;
        case 33:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]]]);
            break;
        case 34:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]]]);
            break;
        case 35:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]]]);
            break;
		case 36:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]]]);
            break;
		case 37:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]]]);
            break;
		case 38:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]]]);
            break;
		case 39:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]]]);
            break;
		case 40:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]]]);
            break;
		case 41:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]]]);
            break;
		case 42:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]]]);
            break;
		case 43:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]]]);
            break;
		case 44:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]]]);
            break;
		case 45:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]]]);
            break;
		case 46:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]]]);
            break;
		case 47:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]]]);
            break;
		case 48:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]]]);
            break;
		case 49:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]],this[dtData2[48]]]);
            break;
		case 50:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]],this[dtData2[47]],this[dtData2[48]],this[dtData2[49]]]);
            break;
		case 51:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]]]);
            break;
		case 52:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]]]);
            break;
		case 53:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]]]);
            break;
		case 54:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]]]);
            break;
		case 55:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]]]);
            break;
		case 56:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]]]);
            break;
			
		case 57:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]]]);
            break;
		case 58:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]]]);
            break;
		case 59:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]]]);
            break;
		case 60:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]]]);
            break;
		case 61:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]]]);
            break;
		case 62:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]]]);
            break;
		case 63:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]]]);
            break;
		case 64:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]]]);
            break;
		case 65:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]]]);
            break;
		case 66:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]]]);
            break;		
		case 67:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]]]);
            break;	
		case 68:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]]]);
            break;	
		case 69:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]]]);
            break;	
		case 70:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]],this[dtData2[69]]]);
            break;
    }

    });
	
    if (!(typeof popTableModPageGrid1 === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

       // popTableModPageGrid1.fnDestroy();
		if(popTableModPageGrid1[0].id == "Table1")
		{
        //popTableModPageGrid1.fnDestroy();
		}
        popTableModPageGrid1 = null;
        // $('#'+TableID).dataTable( {"bDestroy": true	} );
        //Remove all the DOM elements
        $('#'+TableID).empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData2[i];
//added by manimala... <<start>> for date sorting 
   if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
       //added by manimala... <<end>>
        dtcolumn.push(obj);
    }

 if(myData1[0].Actions == "")
	{
    	dtData = [];
	}

	
		var cc = parseInt(count)-6;
	
	var hideClm = [];
	
	var hideClm1='[';
	
	if(hdncolumn != undefined)
	{
		
	if(hdncolumn !="||")
	{		
	if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
		{
			var hideClm1='['+hdncolumn.split('|')[2]+',';
			
		}
	
	hdncolumn=hdncolumn.split('|')[0];
	}
	}
	
	
	

	
	
	for(c=parseInt(cc);c<count;c++)
	{
		if(c==parseInt(count)-1)
		hideClm1=hideClm1+c.toString();
	else
		hideClm1=hideClm1+c.toString()+',';
		
	}
		
	hideClm1=hideClm1+']';
	hideClm = hideClm1;

	
    if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
        popTableModPageGrid1 = $('#'+TableID).dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': true,
           "aaSorting": [],
            "pageLength": 5,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           //"scrollY": true,
           // "scrollX": "200px",
           

            "sPaginationType": "full_numbers",
			 "aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],
             "fnDrawCallback": function (oSettings) {
            	
            	
                  
            }
            });


    	
        $('#'+TableID+'_wrapper').find('label').each(function () {
        	$(this).parent().append($(this).children());
        	});
        	$('#'+TableID+'_wrapper .dataTables_filter').find('input').each(function () {
        		$('#'+TableID+'_wrapper input').attr("placeholder", "Search");
        		$('#'+TableID+'_wrapper input').removeClass('form-control-sm');
        	});
        	$('#'+TableID+'_wrapper .dataTables_length').addClass('d-flex flex-row');
        	$('#'+TableID+'_wrapper .dataTables_filter').addClass('md-form');
        	$('#'+TableID+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
        	$('#'+TableID+'_wrapper select').addClass('mdb-select');
        	//$('#Table1_wrapper .mdb-select').material_Select();
        	$('#'+TableID+'_wrapper .dataTables_filter').find('label').remove();
        
        	
        	$("#"+TableID+"_wrapper .dataTables_scrollHeadInner").css("width","100%")
        	$("#"+TableID+"_wrapper .dataTables_scrollHeadInner table").css("width","100%")
            $("#"+TableID).css("width","100%")

           $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").addClass(par.TableHeader);

		   // Middle row Customisation
		   $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");
		   
		       $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
			 
			 
		   
		  $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
		   
        	$($("#" + TableID + "_wrapper").find(".row")[2]).remove();
			
			  $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
        	
        	$($("#" + TableID + "_wrapper").find('.row')[0]).find("div").remove();
        	
        	 $($("#" + TableID + "_wrapper").find('.row')[0]).removeClass("row");
        	
        	 
        	 
			  
			 
        	// $("#" + TableID + "_wrapper").addClass("card");
        	   // $("#" + TableID + "_wrapper:first-of-type").remove();
        	

    }

}


function handlejsonModDashGridFP(result,TableID, curcontl, hdncolumn, enablecontrol,par) {

 var dtData = [];
    var count = 0;
    //to re-init datatable


   // myData = JSON.parse(result.d);

    myData1 = $(result);
    
    var entry;
    var name;
    entry = myData1[0];

    for (name in entry) {
        if (entry.hasOwnProperty(name)) {
            dtData2[count] = name;
            count++;
            //dtData1.push(name);

        }

    }

  $.each(myData1, function (event) {

    	switch (count) {
        case 1:
            dtData.push([this[dtData2[0]]]);
            break;
        case 2:
            dtData.push([this[dtData2[0]], this[dtData2[1]]]);
            break;
        case 3:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]]]);
            break;
        case 4:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]]]);
            break;
        case 5:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]]]);
            break;
        case 6:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]]]);
            break;
        case 7:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]]]);
            break;
        case 8:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]]]);
            break;
        case 9:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]]]);
            break;
        case 10:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]]]);
            break;
        case 11:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]]]);
            break;
        case 12:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]]]);
            break;
        case 13:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]]]);
            break;
        case 14:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]]]);
            break;
        case 15:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
            break;
        case 16:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
            break;
        case 17:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]]]);
            break;
        case 18:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]]]);
            break;
        case 19:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]]]);
            break;
        case 20:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]]]);
            break;
        case 21:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]]]);
            break;
        case 22:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]]]);
            break;
        case 23:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]]]);
            break;
        case 24:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]]]);
            break;
        case 25:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]]]);
            break;
        case 26:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]]]);
            break;
        case 27:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]]]);
            break;
        case 28:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]]]);
            break;
        case 29:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]]]);
            break;

        case 30:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]]]);
            break;
        case 31:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]]]);
            break;
        case 32:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]]]);
            break;
        case 33:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]]]);
            break;
        case 34:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]]]);
            break;
        case 35:
            dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]]]);
            break;
		case 36:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]]]);
            break;
		case 37:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]]]);
            break;
		case 38:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]]]);
            break;
		case 39:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]]]);
            break;
		case 40:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]]]);
            break;
		case 41:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]]]);
            break;
		case 42:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]]]);
            break;
		case 43:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]]]);
            break;
		case 44:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]]]);
            break;
		case 45:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]]]);
            break;
		case 46:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]]]);
            break;
		case 47:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]]]);
            break;
		case 48:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]]]);
            break;
		case 49:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]],this[dtData2[48]]]);
            break;
		case 50:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]],this[dtData2[47]],this[dtData2[48]],this[dtData2[49]]]);
            break;
		case 51:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]]]);
            break;
		case 52:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]]]);
            break;
		case 53:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]]]);
            break;
		case 54:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]]]);
            break;
		case 55:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]]]);
            break;
		case 56:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]]]);
            break;
			
		case 57:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]]]);
            break;
		case 58:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]]]);
            break;
		case 59:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]]]);
            break;
		case 60:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]]]);
            break;
		case 61:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]]]);
            break;
		case 62:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]]]);
            break;
		case 63:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]]]);
            break;
		case 64:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]]]);
            break;
		case 65:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]]]);
            break;
		case 66:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]]]);
            break;		
		case 67:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]]]);
            break;	
		case 68:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]]]);
            break;	
		case 69:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]]]);
            break;	
		case 70:
			dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]],this[dtData2[69]]]);
            break;
    }

    });
	
    if (!(typeof popTableModPageGrid1 === "undefined")) {
        /* destroy table*/
        //Delete the datable object first

       // popTableModPageGrid1.fnDestroy();
		if(popTableModPageGrid1[0].id == "Table1")
		{
        //popTableModPageGrid1.fnDestroy();
		}
        popTableModPageGrid1 = null;
        // $('#'+TableID).dataTable( {"bDestroy": true	} );
        //Remove all the DOM elements
        $('#'+TableID).empty();
        /* destry table*/
        //        oSettings = popTable.fnSettings();
        //        popTable.fnClearTable(this);
        //        for (var i = 0; i < dtData.length; i++) {
        //            popTable.oApi._fnAddData(oSettings, dtData[i]);
        //        }
        //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        //        popTable.fnDraw();

    }
    //dynamically add column name
    var dtcolumn = [];

    for (var i = 0; i < count; i++) {
        var obj = {};
        obj["sTitle"] = dtData2[i];
//added by manimala... <<start>> for date sorting 
   if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
       //added by manimala... <<end>>
        dtcolumn.push(obj);
    }

 if(myData1[0].Actions == "")
	{
    	dtData = [];
	}

	
		var cc = parseInt(count)-6;
	
	var hideClm = [];
	
	var hideClm1='[';
	
	if(hdncolumn != undefined)
	{
		
	if(hdncolumn !="||")
	{		
	if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
		{
			var hideClm1='['+hdncolumn.split('|')[2]+',';
			
		}
	
	hdncolumn=hdncolumn.split('|')[0];
	}
	}
	
	
	

	
	
	for(c=parseInt(cc);c<count;c++)
	{
		if(c==parseInt(count)-1)
		hideClm1=hideClm1+c.toString();
	else
		hideClm1=hideClm1+c.toString()+',';
		
	}
		
	hideClm1=hideClm1+']';
	hideClm = hideClm1;

	
    if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
        popTableModPageGrid1 = $('#'+TableID).dataTable({  //grid is the id of the table
            //'aaData': [["0000000003", "Non Member", "Samuel", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000004", "Non Member", "Uche", "", "", "", "/Date(252441000000)/", "", "", "", "Salaried", "Male", "S", "Graduate", ""], ["0000000005", "Non Member", "ngozi", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000006", "Non Member", "Mohammed Ameen", "", "", "", "/Date(220905000000)/", "", "", "", "Salaried", "Male", "M", "Post Graduate", ""], ["0000000011", "Non Member", "Suresh", "", "", "", "/Date(315513000000)/", "", "", "", "Business", "Male", "S", "Under Graduate", ""], ["0000000012", "Non Member", "ff", "", "", "", "/Date(567973800000)/", "", "", "", "Others", "Male", "M", "", ""], ["0000000013", "Non Member", "sss", "", "", "", "/Date(631132200000)/", "", "", "", "Salaried", "Male", "S", "", ""], ["0000000014", "Non Member", "SSS", "", "", "", "/Date(252441000000)/", "", "", "", "Not-Avail", "Male", "S", "", ""], ["0000000015", "Non Member", "RAjagovarthanan", "", "", "", "/Date(268165800000)/", "0444666666", "rajagovarthanan@encoretheme.com", "", "Salaried", "Male", "M", "Under Graduate", ""], ["0000000016", "Non Member", "Gabriel", "", "", "", "/Date(220905000000)/", "", "", "", "", "Male", "", "", ""], ["0000000017", "Non Member", "ddd", "", "", "", "/Date(567973800000)/", "", "", "", "Prof", "Male", "S", "", ""], ["0000000018", "Non Member", "Kumar", "", "", "", "/Date(567973800000)/", "", "", "", "Business", "Male", "M", "", ""]],
            //"aoColumns": [{ "sTitle": "Cusid" }, { "sTitle": "custype" }, { "sTitle": "FullName" }, { "sTitle": "Permanent Address" }, { "sTitle": "Business Address" }, { "sTitle": "Correspondence  Address" }, { "sTitle": "DOB" }, { "sTitle": "Phone No" }, { "sTitle": "Email" }, { "sTitle": "age" }, { "sTitle": "Occupation" }, { "sTitle": "Gender" }, { "sTitle": "Maritalstatus" }, { "sTitle": "Education" }, { "sTitle": "idno"}],
            'aaData': dtData,
            "aoColumns": dtcolumn, 
            "bAutoWidth": false,
            "autoWidth": false,
            'bPaginate': false,
           "aaSorting": [],
           // "pageLength": 5,
            "bDeferRender": true,
            'bInfo': true,
            'bFilter': true,
            "bDestroy": true,
            "bJQueryUI": true,
           
           //"scrollY": true,
           // "scrollX": "200px",
           

            "sPaginationType": "full_numbers",
			 "aoColumnDefs": [ { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)} ],
             "fnDrawCallback": function (oSettings) {
            	
            	
                  
            }
            });


        $("#" +TableID +  "tbody").delegate("tr", "click", function () {

            var aData = popTable.fnGetData(this);
                            
            for (var i = 0; i < aData.length; i++) {

                if (typeof curcontl[i] != "undefined") {
					if(aData[i] != null)
					{
                    //     Getjsondate                       curcontl[i].innerText = aData[i]
                    if (aData[i].toString().substring(0, 5) == "/Date") {
                        $(curcontl[i]).val(Getjsondate(aData[i]))
                    }
                    else {
                        $(curcontl[i]).val(aData[i]);
	
						
						
                  }
}
                }
            }
            if (typeof enablecontrol != "undefined") {
                for (var i = 0; i < aData.length; i++) {

                    if (typeof enablecontrol[i] != "undefined") {




                        if (aData[i] == "Group with others" || aData[i] == "GROUP") {

                            $("." + enablecontrol[i]).show();
                            for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                var trid = $("." + enablecontrol[i])[ii].id;
                                $("#" + trid).find("input[type=text]").val("");
                            }


                        }
                        else {
                            $("." + enablecontrol[i]).hide();

                            $("." + enablecontrol[i]).addClass("hidden-input");
                            for (var ii = 0; ii < $("." + enablecontrol[i]).length; ii++) {
                                var trid = $("." + enablecontrol[i])[ii].id;
                                $("#" + trid).find("input[type=text]").val("");
                            }
                        }
                    }
                }
            }

          //  $("#popup").dialog("close");

        });
        
        $('#'+TableID+'_wrapper').find('label').each(function () {
        	$(this).parent().append($(this).children());
        	});
        	$('#'+TableID+'_wrapper .dataTables_filter').find('input').each(function () {
        		$('#'+TableID+'_wrapper input').attr("placeholder", "Search");
        		$('#'+TableID+'_wrapper input').removeClass('form-control-sm');
        	});
        	$('#'+TableID+'_wrapper .dataTables_length').addClass('d-flex flex-row');
        	$('#'+TableID+'_wrapper .dataTables_filter').addClass('md-form');
        	$('#'+TableID+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
        	$('#'+TableID+'_wrapper select').addClass('mdb-select');
        	//$('#Table1_wrapper .mdb-select').material_Select();
        	$('#'+TableID+'_wrapper .dataTables_filter').find('label').remove();
        
        	
        	$("#"+TableID+"_wrapper .dataTables_scrollHeadInner").css("width","100%")
        	$("#"+TableID+"_wrapper .dataTables_scrollHeadInner table").css("width","100%")
            $("#"+TableID).css("width","100%")

           $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").addClass(par.TableHeader);

		   // Middle row Customisation
		   $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");
		   
		       $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
			 
		  $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
		   
        	$($("#" + TableID + "_wrapper").find(".row")[2]).remove();
			
			  $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
        	
        	$($("#" + TableID + "_wrapper").find('.row')[0]).find("div").remove();
        	
        	 $($("#" + TableID + "_wrapper").find('.row')[0]).removeClass("row");
			 
        	// $("#" + TableID + "_wrapper").addClass("card");
        	   // $("#" + TableID + "_wrapper:first-of-type").remove();
    }
}

function FncallDocChkLst(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');
    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var DBSrc = par.DBSrc; 
            $.ajax({
               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: false,
               //dataType: "json",
                      dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
                     var      op=xml1.responseText;
                  if (op != "")
                  {                      
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
              result = result.replace(/>null</g,"><");
            var json = $.xml2json(result.replace(/&/g,"and"));
            //alertify.alert(json);
                              if(json == "")
                  {
                              alert(LoadFrmXML("V0072"));
                                $('#'+fnname).empty();
                                    $("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
                                    $("#"+fnname+"_paginate").remove();
                                    $("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
                              return
                  }
            //return;
            if (JSON.stringify(json.a) === '{}') {
                  alert(LoadFrmXML("V0072"));
            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
                 // handlejsonDocChkLst(JSON.parse(((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "").replace(/XXPXX/g, "%")),fnname,control1, hdncolumn, enablecontrol,par);
				 handlejsonDocChkLst(JSON.parse(((((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "")).replace(/XXPXX/g, "%")).replace('xxdiv_',' / ')),fnname,control1, hdncolumn, enablecontrol,par);
                  }
      ajaxindicatorstop();
                  }           //ajaxindicatorstop();
                  else
                  {
                  //alert(LoadFrmXML("V0072"));
                  ajaxindicatorstop();
                  }
                  },
            error: function (xml1)
            {
                        //alertify.alert(LoadFrmXML("V0126"));
                              alert(LoadFrmXML("V0126"));
                        OP="Fail";
                        //ajaxindicatorstop();
            }
         });
       // 
}

function FncallDocChkLst_v1(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');
    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var DBSrc = par.DBSrc; 
var xml1 = par.XML
                     var      op=xml1;
                  if (op != "")
                  {                      
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
              result = result.replace(/>null</g,"><");
            var json = $.xml2json(result.replace(/&/g,"and"));
            //alertify.alert(json);
                              if(json == "")
                  {
                              alert(LoadFrmXML("V0072"));
                                $('#'+fnname).empty();
                                    $("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
                                    $("#"+fnname+"_paginate").remove();
                                    $("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
                              return
                  }
            //return;
            if (JSON.stringify(json.a) === '{}') {
                  alert(LoadFrmXML("V0072"));
            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
                 // handlejsonDocChkLst(JSON.parse(((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "").replace(/XXPXX/g, "%")),fnname,control1, hdncolumn, enablecontrol,par);
				 handlejsonDocChkLst_v1(JSON.parse(((((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "")).replace(/XXPXX/g, "%")).replace('xxdiv_',' / ')),fnname,control1, hdncolumn, enablecontrol,par);
                  }
      ajaxindicatorstop();
                  }           //ajaxindicatorstop();
                  else
                  {
                  //alert(LoadFrmXML("V0072"));
                  ajaxindicatorstop();
                  }
       // 
}

function handlejsonDocChkLst(result,TableID, curcontl, hdncolumn, enablecontrol,par) {
    var dtData = [];
        var count = 0;
        //to re-init datatable
       // myData = JSON.parse(result.d);
        myData1 = $(result);
        var entry;
        var name;
        entry = myData1[0];
        for (name in entry) {
            if (entry.hasOwnProperty(name)) {
                dtData2[count] = name;
                count++;
                //dtData1.push(name);
            }
        }
      $.each(myData1, function (event) {
          switch (count) {
            case 1:
                dtData.push([this[dtData2[0]]]);
                break;
            case 2:
                dtData.push([this[dtData2[0]], this[dtData2[1]]]);
                break;
            case 3:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]]]);
                break;
            case 4:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]]]);
                break;
            case 5:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]]]);
                break;
            case 6:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]]]);
                break;
            case 7:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]]]);
                break;
            case 8:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]]]);
                break;
            case 9:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]]]);
                break;
            case 10:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]]]);
                break;
            case 11:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]]]);
                break;
            case 12:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]]]);
                break;
            case 13:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]]]);
                break;
            case 14:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]]]);
                break;
            case 15:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
                break;
            case 16:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
                break;
            case 17:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]]]);
                break;
            case 18:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]]]);
                break;
            case 19:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]]]);
                break;
            case 20:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]]]);
                break;
            case 21:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]]]);
                break;
            case 22:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]]]);
                break;
            case 23:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]]]);
                break;
            case 24:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]]]);
                break;
            case 25:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]]]);
                break;
            case 26:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]]]);
                break;
            case 27:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]]]);
                break;
            case 28:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]]]);
                break;
            case 29:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]]]);
                break;
            case 30:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]]]);
                break;
            case 31:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]]]);
                break;
            case 32:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]]]);
                break;
            case 33:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]]]);
                break;
            case 34:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]]]);
                break;
            case 35:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]]]);
                break;
                case 36:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]]]);
                break;
                case 37:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]]]);
                break;
                case 38:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]]]);
                break;
                case 39:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]]]);
                break;
                case 40:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]]]);
                break;
                case 41:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]]]);
                break;
                case 42:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]]]);
                break;
                case 43:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]]]);
                break;
                case 44:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]]]);
                break;
                case 45:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]]]);
                break;
                case 46:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]]]);
                break;
                case 47:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]]]);
               break;
                case 48:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]]]);
                break;
                case 49:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]],this[dtData2[48]]]);
                break;
                case 50:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]],this[dtData2[47]],this[dtData2[48]],this[dtData2[49]]]);
                break;
                case 51:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]]]);
                break;
                case 52:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]]]);
                break;
                case 53:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]]]);
                break;
                case 54:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]]]);
                break;
                case 55:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]]]);
                break;
                case 56:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]]]);
                break;
                case 57:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]]]);
                break;
                case 58:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]]]);
                break;
                case 59:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]]]);
                break;
                case 60:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]]]);
                break;
                case 61:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]]]);
                break;
                case 62:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]]]);
                break;
                case 63:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]]]);
                break;
                case 64:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]]]);
                break;
                case 65:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]]]);
                break;
                case 66:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]]]);
                break;          
                case 67:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]]]);
                break;    
                case 68:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]]]);
                break;    
                case 69:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]]]);
                break;    
                case 70:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]],this[dtData2[69]]]);
                break;
        }
        });
        if (!(typeof popTableModPageGrid1 === "undefined")) {
            /* destroy table*/
            //Delete the datable object first
           // popTableModPageGrid1.fnDestroy();
                /*if(popTableModPageGrid1[0].id == "Table1")
                {
            //popTableModPageGrid1.fnDestroy();
                }*/
            popTableModPageGrid1 = null;
            // $('#'+TableID).dataTable( {"bDestroy": true      } );
            //Remove all the DOM elements
            $('#'+TableID).empty();
            /* destry table*/
            //        oSettings = popTable.fnSettings();
            //        popTable.fnClearTable(this);
            //        for (var i = 0; i < dtData.length; i++) {
            //            popTable.oApi._fnAddData(oSettings, dtData[i]);
            //        }
            //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
            //        popTable.fnDraw();
        }
        //dynamically add column name
        var dtcolumn = [];
        for (var i = 0; i < count; i++) {
            var obj = {};
            obj["sTitle"] = dtData2[i];
    //added by manimala... <<start>> for date sorting
       if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
           //added by manimala... <<end>>
            dtcolumn.push(obj);
        }
        if(myData1.length == 0)
        {
        dtData = [];
        }
        else if(Object.values(myData1[0])[0] == "")
          {
          dtData = [];
          }
                var cc = parseInt(count)-6;
          var hideClm = [];
          var hideClm1='[';
          if(hdncolumn != undefined)
          {
          if(hdncolumn !="||")
          {          
          if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
                {
                      var hideClm1='['+hdncolumn.split('|')[2]+',';
                }
          hdncolumn=hdncolumn.split('|')[0];
          }
          }
          for(c=parseInt(cc);c<count;c++)
          {
                if(c==parseInt(count)-1)
                hideClm1=hideClm1+c.toString();
          else
                hideClm1=hideClm1+c.toString()+',';
          }
          hideClm1=hideClm1+']';
          hideClm = hideClm1;
          if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
        	  
        	  
        	if (enablecontrol == "DocumentCheckList")
             {
        		 GridControlDetailKYC (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
             }
           else if (enablecontrol == "DocumentCheckListOthers")
             {
        		  GridControlDetailOthers (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
             }
        	else if (enablecontrol == "PFDEFR")
           {
        	   GridControlDetailPFDEFR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
	else if (enablecontrol == "DEFRMNTKYC")
            {
         	   GridControlDetailDEFRMNTKYC (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
        	else if (enablecontrol == "DEFRMNTOTHRKYC")
            {
        		GridControlDetailDEFRMNTOTHRKYC (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
             }
        	else if (enablecontrol == "DEFRMNTBANKDTL")
            {
        		GridControlDetailDEFRMNTBANKDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
             }
			 else if (enablecontrol == "DEFRMNTFINCDTL")
            {
        		GridControlDetailDEFRMNTFINCDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
             }
			  else if (enablecontrol == "MNGDEV")
	            {
	         	   GridControlDetailMNGDEV (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				else if (enablecontrol == "MNGLEAD")
	            {
	         	   GridControlDetailMNGDEV (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
           else if (enablecontrol == "RCU")
           {
        	   GridControlDetailRCU (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   
		    else if (enablecontrol == "VENDDOCUPLOAD")
           {
        	   GridControlDetailVENDDOCUPLOAD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   
		   else if (enablecontrol == "VENDADDROLE")
           {
        	   GridControlDetailVENDADDROLE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
        	
		   
		   
		    else if (enablecontrol == "DOCUPLOAD")
           {
        	   GridControlDetailDOCUPLOAD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   
		    else if (enablecontrol == "PROPERVALUATION")
           {
        	   GridControlDetailPROVALU (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }

           else if (enablecontrol == "ValuaUptProInfoI")
           {
        	   GridControlDetailUptProInfo (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
           else if (enablecontrol == "ValuaUptProInfoII")
           {
        	   GridControlDetailUptProInfoII (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
        	
				else if (enablecontrol == "ValuaUptAMENITIES")
           {
        	   GridControlDetailUptValAMENTIES (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
        	
           else if (enablecontrol == "ValuarAMENITIES")
           {
        	   GridControlDetailValuarAMENITIES (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
        	
           else if (enablecontrol == "FINANCCAM")
           {
        	   GridControlDetailFINANCCAM (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   //Aliance Grid Start
		   
		    else if (enablecontrol == "MPBFI")
           {
        	   GridControlDetailMPBFI (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		    else if (enablecontrol == "MPBFII")
           {
        	   GridControlDetailMPBFII (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		    else if (enablecontrol == "TRNOVERI")
           {
        	   GridControlDetailTRNOVERI (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		    else if (enablecontrol == "TRNOVERII")
           {
        	   GridControlDetailTRNOVERII (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		    else if (enablecontrol == "TRNOVERIII")
           {
        	   GridControlDetailTRNOVERIII(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   else if (enablecontrol == "ELIGCALCI")
           {
        	   GridControlDetailELIGCALCI(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   else if (enablecontrol == "ELIGCALCII")
           {
        	   GridControlDetailELIGCALCII(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   //Aliance Grid End
		   
		   
           else if (enablecontrol == "FINANCEXIXTING")
           {
        	   GridControlDetailFINANCEXIXTING (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
           else if (enablecontrol == "PRFINCOMEGRID")
           {
        	   GridControlDetailINCM (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   else if (enablecontrol == "LGRIGRID")
		   {
			   GridControlDetailLGRIGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		   }
		   //Credit Policy Change Strt
		   else if (enablecontrol == "SEPCALCPROFINCOMEGRID")
           {
        	   GridControlDetailPRSEPCALC (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   else if (enablecontrol == "SEPCALCGRMPINCOMEGRID")
           {
        	   GridControlDetailGRSEPCALC (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   else if(enablecontrol == "MARGINGST")
		   {
			  GridControlDetailMARGINGST (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm); 
		   }
		   
		   //Credit Policy Change End
		   
		   //MicroLAP Changes Start
		    else if (enablecontrol == "PRFOTHINCOMEGRIDONE")
           {
        	   GridControlDetailIOTHNCMONE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		    else if (enablecontrol == "PRFOTHINCOMEGRIDTWO")
           {
        	   GridControlDetailIOTHNCMTWO (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   else if (enablecontrol == "PRFOTHINCOMEGRIDTHREE")
           {
        	   GridControlDetailIOTHNCMTHREE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   else if (enablecontrol == "PRFOTHINCOMEGRIDFOUR")
           {
        	   GridControlDetailIOTHNCMFOUR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   else if (enablecontrol == "ASSETCLASSGRID")
           {
        	   GridControlDetailIASSETCLASSGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
		   // MicroLAP Changes End
		   
           else if (enablecontrol == "PRFOTHINCOMEGRID")
           {
        	   GridControlDetailIOTHNCM (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
           }
            else if (enablecontrol == "LISTBUSINESS")
            {
                GridControlDetail(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "RENTDATA")
            {
               GridControlDetail_OthrIncome(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "EMPOWERMNT")
            {
               GridControlDetail_EMPOWERMNT(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
			else if (enablecontrol == "EMPOWERMNTI")
            {
               GridControlDetail_EMPOWERMNTI(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "FINANCIAL")
            {
               GridControlDetail_FINANCIAL(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
        	
            else if (enablecontrol == "LISTBUSINESS")
            {

          	  GridControlDetail(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "RENTDATA")
            {
          	  GridControlDetail_OthrIncome(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "EMPOWERMNT")
            {
          	  GridControlDetail_EMPOWERMNT(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "FINANCIAL")
            {
          	  GridControlDetail_FINANCIAL(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "ASSET")
            {
          	  GridControlDetail_ASSET(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "REPORT" || enablecontrol == "APPLICANT")
            {
          	  GridControlDetail_REPORT(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "EMPOWERMNTGRD")
            {
          	  GridControlDetail_EMPOWERMNTGRD(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "CHRGDTL")
            {
          	  GridControlDetail(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "RTRELIG")
            {
          	  GridControlDetailRTRELIG(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "RTRNORMS")
            {
          	  GridControlDetailRTRNORMS(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "FINCELIGB")
            {
          	  GridControlDetailFINCELIGB(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
            else if (enablecontrol == "RRELIG")
            {
          	  GridControlDetailRRELIG(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
        	
        	  //Ratio Start 	
            else if (enablecontrol == "RATIOPROFITLOSS")
            {
         	   GridControlDetailRATIOPROFITLOSS(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
         	
            else if (enablecontrol == "RATIOBALSHEET")
            {
         	   GridControlDetailRATIOBALSHEET(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
			  else if (enablecontrol == "FINANACESHEET")
            {
         	   GridControlDetailFINANACESHEET(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
			
			
			else if (enablecontrol == "CASHFLOWGRID")
            {
         	   GridControlDetailCASHFLOWGRID(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
         	     	
         	  else if (enablecontrol == "FINCSUMMARY")
               {
            	   GridControlDetailFINCSUMMARY(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
               }
               //Ratio End
         	 else if (enablecontrol == "REPAYCHQ")
             {
          	   GridControlDetailREPAYCHQ(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
             }
			 else if (enablecontrol == "REPAYCHQMULTI")
            {
         	   GridControlDetailREPAYCHQMULTI(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
        	 // CIBIL REPORT GRID Start
			  else if (enablecontrol == "CIBILReport")
            {
         	   GridControlCIBILRPTDATA(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
       	// CIBIL REPORT GRID END
			  else if (enablecontrol == "LINS")
	            {
	         	   GridControlDetailLINS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "MNDTRYPROPGRID")
	            {
	         	   GridControlDetailMNDTRYPROPGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "ADPROPINSRNC")
	            {
	         	   GridControlDetailADPROPINSRNC (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "HEALTHCOMBOGRD")
	            {
	         	   GridControlDetailHEALTHCOMBOGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "LPDSGRID")
	            {
	         	   GridControlDetailLPDSGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "OPSASK")
	            {
	         	   GridControlDetailOPSASK (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "APPRLOANGRID")
	            {
	         	   GridControlDetailAPPRLOANGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
        	 
	         	else if (enablecontrol == "KYCDTL")
	            {
	         	   GridControlDetailKYCDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "SANCTIONFILEDTL")
	            {
	         	   GridControlDetailSANCTIONFILEDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "TechGDTL")
	            {
	         	   GridControlDetailTechGDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "Applnnform")
	            {
	         		GridControlDetailApplnnform (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "OthrFile")
	            {
	         		GridControlDetailOthrFile (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "FIRprt")
	            {
	         		GridControlDetailFIRprt (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "RCURprt")
	            {
	         		GridControlDetailRCURprt (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "PropVst")
	            {
	         		GridControlDetailPropVst (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "Cibil")
	            {
	         		GridControlDetailCibil (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "TechRPRT")
	            {
	         		GridControlDetailTechRPRT (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "Incm")
	            {
	         		GridControlDetailIncm (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if ((enablecontrol == "Approvals")||(enablecontrol == "Apprvl"))
	            {
	         		GridControlDetailApprovals (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if ((enablecontrol == "BTNBTPrcs")||(enablecontrol == "BTPrcs"))
	            {
	         		GridControlDetailBTNBTPrcs (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "SancLtr")
	            {
	         		GridControlDetailSancLtr (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "Legl")
	            {
	         		GridControlDetailLegl (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "DM")
	            {
	         		GridControlDetailDM (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "LonAgr")
	            {
	         		GridControlDetailLonAgr (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "CrsSell")
	            {
	         		GridControlDetailCrsSell (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "BTOPS")
	            {
	         		GridControlDetailBTOPS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				else if (enablecontrol == "Repaymentkit")
	            {
	         		GridControlDetailRepaymentkit (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				else if (enablecontrol == "MINIKYCDTL")
	            {
	         		GridControlDetailMINIKYCDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				else if (enablecontrol == "T2CheckLst")
	            {
	         		GridControlDetailT2CheckLst (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				else if (enablecontrol == "GECLCheckLst")
	            {
	         		GridControlDetailGECLCheckLst (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "ENDUSEGRID")
	            {
	         		GridControlDetailENDUSEGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
        	
        	//OTC STRT
	         	else if (enablecontrol == "SALES")
	            {
	         	   GridControlDetailSALES (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "BRANCH")
	            {
	         		GridControlDetailBRANCH (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "OPS")
	            {
	         		GridControlDetailOPS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				
	        	//OTC STRT
	         	else if (enablecontrol == "BALANCEGRID")
	            {
	         		GridControlDetailBALANCEGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
        	//File CheckList Strt
	         	else if (enablecontrol == "UPLDFILECHECK")
	            {
	         		GridControlDetailUPLDFILECHECK (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
        		//File CheckList End

	            else if (enablecontrol == "UPDATEFLOWGRID")
	                {
	             	   GridControlDetailUPDATEFLOWGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	                }
	            else if (enablecontrol == "KARZAGRD")
                {
             	   GridControlDetailKARZAGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
                }
	            else if (enablecontrol == "PANKARZAGRD")
                {
             	   GridControlDetailPANKARZAGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
                }
        	
        	 //DEDUPE 	
	            else if (enablecontrol == "DEDUBEGRID")
	            {
	         	   GridControlDetailDEDUBEGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	            else if (enablecontrol == "CIBILReportDUDUPE")
	            {
	         	   GridControlCIBILReportDUDUPE(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
        	//Mini CheckLst Strt
	         	else if (enablecontrol == "MINChkLst")
	            {
	         		GridControlDetailMINChkLst (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
        		//Mini CheckLst End
	         	else if (enablecontrol == "DEDUPEBIFGRD")
	            {
	         		GridControlDetailDEDUPEBIFGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "DEDUPECIFGRD")
	            {
	         		GridControlDetailDEDUPECIFGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "DEDUPEAIFGRD")
	            {
	         		GridControlDetailDEDUPEAIFGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "AUDITTRAIL")
	            {
	         		GridControlDetailAUDITTRAIL(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "FINCSUMGRID")
	            {
	         		GridControlDetailFINCSUMGRID(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "DEDUPEAGREEGRD")
	            {
	         		GridControlDetailDEDUPEAGREEGRD(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
        	else if (enablecontrol == "REPAYGRD")
	            {
	         		GridControlDetailREPAYGRD(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
			else if (enablecontrol == "ODEDUCTGRD")
	            {
	         		GridControlDetailODEDUCTGRD(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
			
            else if (enablecontrol == "APPRRTRFINANC")
            {
         		GridControlDetailAPPRRTRFINANC(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
			else if (enablecontrol == "APPRKYCLIST")
            {
         		GridControlDetailAPPRKYCLIST(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
			else if (enablecontrol == "INTERDEDUPE")
            {
         		GridControlDetailINTERDEDUPE(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
        	
			else if (enablecontrol == "MNUEMPOWERMNT")
            {
         		GridControlDetailMNUEMPOWERMNT(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
			else if (enablecontrol == "RBIDEDUPE")
            {
         		GridControlDetailRBIDEDUPE(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
            }
			else if (enablecontrol == "FAMILYCOMBOGRD")
	            {
	         	   GridControlDetailFAMILCOMBOGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
			else if (enablecontrol == "SALESGRD")
			{
			   GridControlDetailSALESGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
			}
			else if (enablecontrol == "VIABILITYGRD")
			{
			   GridControlDetailVIABILITYGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
			}
			else if (enablecontrol == "BNKBASEDGRD")
			{
			   GridControlDetailBNKBASEDGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
			}
			
			else if (enablecontrol == "MONTHSHEETGRD")
			{
			   GridControlDetailCASHFLOWGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
			}
			
         // Grid Table Properties Set Start
         $('#'+TableID).find("tbody").addClass("tbody");
         $('#'+TableID).find("tbody").find("tr").addClass("tbodytr");
         $('#'+TableID).find("tbody").find("tr").find("td").addClass("tbodytrtd");
              $('#'+TableID+'_wrapper').find('label').each(function () {
                  $(this).parent().append($(this).children());
                  });
                  $('#'+TableID+'_wrapper .dataTables_filter').find('input').each(function () {
                       // $('#'+TableID+'_wrapper input').attr("placeholder", "Search");
                        $('#'+TableID+'_wrapper input').removeClass('form-control-sm');
                  });
                  $('#'+TableID+'_wrapper .dataTables_length').addClass('d-flex flex-row');
                  $('#'+TableID+'_wrapper .dataTables_filter').addClass('md-form');
                  $('#'+TableID+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
                  $('#'+TableID+'_wrapper .dataTables_filter').find('label').remove();
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").css("width","100%")
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner table").css("width","100%")
                  $("#"+TableID).css("width","100%")
                 $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").addClass(par.TableHeader);
                     // Middle row Customisation
                     $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");
                         $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
                    $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
                  $($("#" + TableID + "_wrapper").find(".row")[2]).remove();
                          $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
                  $($("#" + TableID + "_wrapper").find('.row')[0]).find("div").remove();
                   $($("#" + TableID + "_wrapper").find('.row')[0]).removeClass("row");
// Field Initialisation Start
// Dropdown
$('#'+TableID+'_wrapper .Gridmdb-select').material_select();              
// Calendar
var $input = $(document).find('.Griddatepicker').pickadate({
    //editable: 'true',
format: 'dd/mm/yyyy',
selectYears: 150,
selectMonths: true
})
.on("change", function() {
  $(this).prev().val($(this).val());
  $(this).prev().focus();
});
//Field Initialisation End
// Grid Table Properties Set End
          }
    }
 
 
 function handlejsonDocChkLst_v1(result,TableID, curcontl, hdncolumn, enablecontrol,par) {
    var dtData = [];
        var count = 0;
        //to re-init datatable
       // myData = JSON.parse(result.d);
        myData1 = $(result);
        var entry;
        var name;
        entry = myData1[0];
        for (name in entry) {
            if (entry.hasOwnProperty(name)) {
                dtData2[count] = name;
                count++;
                //dtData1.push(name);
            }
        }
      $.each(myData1, function (event) {
          switch (count) {
			case 15:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
                break;
            case 16:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
                break;
        }
        });
        if (!(typeof popTableModPageGrid1 === "undefined")) {
            /* destroy table*/
            //Delete the datable object first
           // popTableModPageGrid1.fnDestroy();
                /*if(popTableModPageGrid1[0].id == "Table1")
                {
            //popTableModPageGrid1.fnDestroy();
                }*/
            popTableModPageGrid1 = null;
            // $('#'+TableID).dataTable( {"bDestroy": true      } );
            //Remove all the DOM elements
            $('#'+TableID).empty();
            /* destry table*/
            //        oSettings = popTable.fnSettings();
            //        popTable.fnClearTable(this);
            //        for (var i = 0; i < dtData.length; i++) {
            //            popTable.oApi._fnAddData(oSettings, dtData[i]);
            //        }
            //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
            //        popTable.fnDraw();
        }
        //dynamically add column name
        var dtcolumn = [];
        for (var i = 0; i < count; i++) {
            var obj = {};
            obj["sTitle"] = dtData2[i];
    //added by manimala... <<start>> for date sorting
       if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
           //added by manimala... <<end>>
            dtcolumn.push(obj);
        }
        if(myData1.length == 0)
        {
        dtData = [];
        }
        else if(Object.values(myData1[0])[0] == "")
          {
          dtData = [];
          }
                var cc = parseInt(count)-6;
          var hideClm = [];
          var hideClm1='[';
          if(hdncolumn != undefined)
          {
          if(hdncolumn !="||")
          {          
          if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
                {
                      var hideClm1='['+hdncolumn.split('|')[2]+',';
                }
          hdncolumn=hdncolumn.split('|')[0];
          }
          }
          for(c=parseInt(cc);c<count;c++)
          {
                if(c==parseInt(count)-1)
                hideClm1=hideClm1+c.toString();
          else
                hideClm1=hideClm1+c.toString()+',';
          }
          hideClm1=hideClm1+']';
          hideClm = hideClm1;
          if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
        	  
        	  if (enablecontrol == "KYCDTL")
	            {
	         	   GridControlDetailKYCDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "SANCTIONFILEDTL")
	            {
	         	   GridControlDetailSANCTIONFILEDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "TechGDTL")
	            {
	         	   GridControlDetailTechGDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "Applnnform")
	            {
	         		GridControlDetailApplnnform (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "OthrFile")
	            {
	         		GridControlDetailOthrFile (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "FIRprt")
	            {
	         		GridControlDetailFIRprt (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "RCURprt")
	            {
	         		GridControlDetailRCURprt (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "PropVst")
	            {
	         		GridControlDetailPropVst (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "Cibil")
	            {
	         		GridControlDetailCibil (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "TechRPRT")
	            {
	         		GridControlDetailTechRPRT (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "Incm")
	            {
	         		GridControlDetailIncm (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if ((enablecontrol == "Approvals")||(enablecontrol == "Apprvl"))
	            {
	         		GridControlDetailApprovals (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if ((enablecontrol == "BTNBTPrcs")||(enablecontrol == "BTPrcs"))
	            {
	         		GridControlDetailBTNBTPrcs (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "SancLtr")
	            {
	         		GridControlDetailSancLtr (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "Legl")
	            {
	         		GridControlDetailLegl (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "DM")
	            {
	         		GridControlDetailDM (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "LonAgr")
	            {
	         		GridControlDetailLonAgr (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "CrsSell")
	            {
	         		GridControlDetailCrsSell (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "BTOPS")
	            {
	         		GridControlDetailBTOPS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				else if (enablecontrol == "Repaymentkit")
	            {
	         		GridControlDetailRepaymentkit (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				else if (enablecontrol == "MINIKYCDTL")
	            {
	         		GridControlDetailMINIKYCDTL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				else if (enablecontrol == "T2CheckLst")
	            {
	         		GridControlDetailT2CheckLst (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				else if (enablecontrol == "GECLCheckLst")
	            {
	         		GridControlDetailGECLCheckLst (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
	         	else if (enablecontrol == "ENDUSEGRID")
	            {
	         		GridControlDetailENDUSEGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
        	//Mini CheckLst Strt
	         	else if (enablecontrol == "MINChkLst")
	            {
	         		GridControlDetailMINChkLst (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
        		//Mini CheckLst End
			
         // Grid Table Properties Set Start
         $('#'+TableID).find("tbody").addClass("tbody");
         $('#'+TableID).find("tbody").find("tr").addClass("tbodytr");
         $('#'+TableID).find("tbody").find("tr").find("td").addClass("tbodytrtd");
              $('#'+TableID+'_wrapper').find('label').each(function () {
                  $(this).parent().append($(this).children());
                  });
                  $('#'+TableID+'_wrapper .dataTables_filter').find('input').each(function () {
                       // $('#'+TableID+'_wrapper input').attr("placeholder", "Search");
                        $('#'+TableID+'_wrapper input').removeClass('form-control-sm');
                  });
                  $('#'+TableID+'_wrapper .dataTables_length').addClass('d-flex flex-row');
                  $('#'+TableID+'_wrapper .dataTables_filter').addClass('md-form');
                  $('#'+TableID+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
                  $('#'+TableID+'_wrapper .dataTables_filter').find('label').remove();
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").css("width","100%")
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner table").css("width","100%")
                  $("#"+TableID).css("width","100%")
                 $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").addClass(par.TableHeader);
                     // Middle row Customisation
                     $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");
                         $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
                    $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
                  $($("#" + TableID + "_wrapper").find(".row")[2]).remove();
                          $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
                  $($("#" + TableID + "_wrapper").find('.row')[0]).find("div").remove();
                   $($("#" + TableID + "_wrapper").find('.row')[0]).removeClass("row");
// Field Initialisation Start
// Dropdown
$('#'+TableID+'_wrapper .Gridmdb-select').material_select();              
// Calendar
var $input = $(document).find('.Griddatepicker').pickadate({
    //editable: 'true',
format: 'dd/mm/yyyy',
selectYears: 150,
selectMonths: true
})
.on("change", function() {
  $(this).prev().val($(this).val());
  $(this).prev().focus();
});
//Field Initialisation End
// Grid Table Properties Set End
          }
    }
//My Applications Start


function FncallMyAppl(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');
    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var DBSrc = par.DBSrc; 
            $.ajax({
               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: false,
               //dataType: "json",
                      dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
                     var      op=xml1.responseText;
                  if (op != "")
                  {                      
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
              result = result.replace(/>null</g,"><");
            var json = $.xml2json(result.replace(/&/g,"and"));
            //alertify.alert(json);
                              if(json == "")
                  {
                              alert(LoadFrmXML("V0072"));
                                $('#'+fnname).empty();
                                    $("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
                                    $("#"+fnname+"_paginate").remove();
                                    $("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
                              return
                  }
            //return;
            if (JSON.stringify(json.a) === '{}') {
                  alert(LoadFrmXML("V0072"));
            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
            	handlejsonMyAppl(JSON.parse(((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "").replace(/XXPXX/g, "%").replace(/XXSLXX/g,"/")),fnname,control1, hdncolumn, enablecontrol,par);
                  }
      ajaxindicatorstop();
                  }           //ajaxindicatorstop();
                  else
                  {
                  //alert(LoadFrmXML("V0072"));
                  ajaxindicatorstop();
                  }
                  },
            error: function (xml1)
            {
                        //alertify.alert(LoadFrmXML("V0126"));
                              alert(LoadFrmXML("V0126"));
                        OP="Fail";
                        //ajaxindicatorstop();
            }
         });
       // 
}

function handlejsonMyAppl(result,TableID, curcontl, hdncolumn, enablecontrol,par) {
    var dtData = [];
        var count = 0;
        //to re-init datatable
       // myData = JSON.parse(result.d);
        myData1 = $(result);
        var entry;
        var name;
        entry = myData1[0];
        for (name in entry) {
            if (entry.hasOwnProperty(name)) {
                dtData2[count] = name;
                count++;
                //dtData1.push(name);
            }
        }
      $.each(myData1, function (event) {
          switch (count) {
            case 1:
                dtData.push([this[dtData2[0]]]);
                break;
            case 2:
                dtData.push([this[dtData2[0]], this[dtData2[1]]]);
                break;
            case 3:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]]]);
                break;
            case 4:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]]]);
                break;
            case 5:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]]]);
                break;
            case 6:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]]]);
                break;
            case 7:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]]]);
                break;
            case 8:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]]]);
                break;
            case 9:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]]]);
                break;
            case 10:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]]]);
                break;
            case 11:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]]]);
                break;
            case 12:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]]]);
                break;
            case 13:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]]]);
                break;
            case 14:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]]]);
                break;
            case 15:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
                break;
            case 16:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
                break;
            case 17:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]]]);
                break;
            case 18:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]]]);
                break;
            case 19:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]]]);
                break;
            case 20:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]]]);
                break;
            case 21:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]]]);
                break;
            case 22:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]]]);
                break;
            case 23:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]]]);
                break;
            case 24:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]]]);
                break;
            case 25:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]]]);
                break;
            case 26:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]]]);
                break;
            case 27:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]]]);
                break;
            case 28:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]]]);
                break;
            case 29:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]]]);
                break;
            case 30:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]]]);
                break;
            case 31:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]]]);
                break;
            case 32:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]]]);
                break;
            case 33:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]]]);
                break;
            case 34:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]]]);
                break;
            case 35:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]]]);
                break;
                case 36:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]]]);
                break;
                case 37:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]]]);
                break;
                case 38:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]]]);
                break;
                case 39:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]]]);
                break;
                case 40:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]]]);
                break;
                case 41:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]]]);
                break;
                case 42:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]]]);
                break;
                case 43:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]]]);
                break;
                case 44:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]]]);
                break;
                case 45:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]]]);
                break;
                case 46:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]]]);
                break;
                case 47:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]]]);
               break;
                case 48:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]]]);
                break;
                case 49:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]],this[dtData2[48]]]);
                break;
                case 50:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]],this[dtData2[47]],this[dtData2[48]],this[dtData2[49]]]);
                break;
                case 51:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]]]);
                break;
                case 52:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]]]);
                break;
                case 53:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]]]);
                break;
                case 54:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]]]);
                break;
                case 55:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]]]);
                break;
                case 56:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]]]);
                break;
                case 57:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]]]);
                break;
                case 58:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]]]);
                break;
                case 59:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]]]);
                break;
                case 60:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]]]);
                break;
                case 61:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]]]);
                break;
                case 62:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]]]);
                break;
                case 63:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]]]);
                break;
                case 64:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]]]);
                break;
                case 65:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]]]);
                break;
                case 66:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]]]);
                break;          
                case 67:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]]]);
                break;    
                case 68:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]]]);
                break;    
                case 69:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]]]);
                break;    
                case 70:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]],this[dtData2[69]]]);
                break;
        }
        });
        if (!(typeof popTableModPageGrid1 === "undefined")) {
            /* destroy table*/
            //Delete the datable object first
           // popTableModPageGrid1.fnDestroy();
                /*if(popTableModPageGrid1[0].id == "Table1")
                {
            //popTableModPageGrid1.fnDestroy();
                }*/
        	   popTableModPageGrid1.destroy();
            popTableModPageGrid1 = null;
            // $('#'+TableID).dataTable( {"bDestroy": true      } );
            //Remove all the DOM elements
           // $('#'+TableID).empty();
            /* destry table*/
            //        oSettings = popTable.fnSettings();
            //        popTable.fnClearTable(this);
            //        for (var i = 0; i < dtData.length; i++) {
            //            popTable.oApi._fnAddData(oSettings, dtData[i]);
            //        }
            //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
            //        popTable.fnDraw();
        }
        
        $('#'+TableID).empty();
        
        //dynamically add column name
        var dtcolumn = [];
        for (var i = 0; i < count; i++) {
            var obj = {};
            obj["sTitle"] = dtData2[i];
    //added by manimala... <<start>> for date sorting
       if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
           //added by manimala... <<end>>
            dtcolumn.push(obj);
        }
        if(myData1.length == 0)
        {
        dtData = [];
        }
        else if(Object.values(myData1[0])[0] == "")
          {
          dtData = [];
          }
                var cc = parseInt(count)-6;
          var hideClm = [];
          var hideClm1='[';
          if(hdncolumn != undefined)
          {
          if(hdncolumn !="||")
          {          
          if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
                {
                      var hideClm1='['+hdncolumn.split('|')[2]+',';
                }
          hdncolumn=hdncolumn.split('|')[0];
          }
          }
          for(c=parseInt(cc);c<count;c++)
          {
                if(c==parseInt(count)-1)
                hideClm1=hideClm1+c.toString();
          else
                hideClm1=hideClm1+c.toString()+',';
          }
          hideClm1=hideClm1+']';
          hideClm = hideClm1;
          if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
        	  
        	  
      if(enablecontrol == "GENERAL")
	    {
	      popTableModPageGrid1=  GridControlGENERAL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    }
      else if (enablecontrol == "GENERAL TAB CASE")
      {
         popTableModPageGrid1 =  GridControlGENERALTABCASE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
      }
	  else if (enablecontrol == "GENERALQUEUE")
      {
         popTableModPageGrid1 =  GridControlGENERALQUEUE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
      }
	  else if (enablecontrol == "ENQUIRTYTAB")
      {
          popTableModPageGrid1 =  GridControlENQUIRTYTAB (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
      }
	  else if (enablecontrol == "OPS")
		      {
		popTableModPageGrid1 =  GridControlOPS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		      }
      else if (enablecontrol == "BRANCHOPS")
      {
    	popTableModPageGrid1=  GridControlPODDETL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
      }
      else if (enablecontrol == "DISPATCHOPS")
      {
    	popTableModPageGrid1=  GridControlDISPATCHOPS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
      }
      else if (enablecontrol == "CREDITOPSQ")
      {
    	popTableModPageGrid1=  GridControlCREDITOPSQ (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
      }
      else if (enablecontrol == "OPSQD")
      {
    	popTableModPageGrid1=  GridControlOPSQD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
      }
      else if (enablecontrol == "OPSQDFOR")
      {
    	popTableModPageGrid1=  GridControlOPSQDFOR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
      }
      else if(enablecontrol == "MANAGEDEFR"){
    	popTableModPageGrid1=  GridControlMANAGEDEFR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
      }
	  else if (enablecontrol == "VENDOR")
	{
		popTableModPageGrid1 = GridControlDetailVENDOR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	}
        	// For internal Dedupe Start
	 else if (enablecontrol == "INTERDEDUPE")
	{
		popTableModPageGrid1 = GridControlDetailINTERDEDUPE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	}
	
	  else if (enablecontrol == "DocumentPIN")
	      {
	    	  
	    	  popTableModPageGrid1=GridControlDocumentPIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	      }
		  
		  
	  //added  user master
	    else if (enablecontrol == "DIRDEPART")
      {
    		popTableModPageGrid1=  GridControlDIRDEPARTMENT (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
	       else if (enablecontrol == "VENDORMST")
      {
    		popTableModPageGrid1=  GridControlVENDORMST (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
	  
	       else if (enablecontrol == "DEPARTMST")
      {
    		popTableModPageGrid1=  GridControlDEPARTMENTMST (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	
	
	else if (enablecontrol == "RBIDEDUPE")
	{
		popTableModPageGrid1 = GridControlDetailRBIDEDUPE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	}
	else if (enablecontrol == "UserMasterAssigned")
		{
			popTableModPageGrid1=  GridControlCREDITOPSQ (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		}
		else if (enablecontrol == "RoleMasterAssigned")
		{
			popTableModPageGrid1=  GridControlOPSQD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		}
		else if (enablecontrol == "BranchMasterAssigned")
		{
			popTableModPageGrid1=  GridControlOPSQDFOR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		}
		else if (enablecontrol == "VendorEmpanelmentAssigned")
		{
			popTableModPageGrid1 =  GridControlOPS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		}
    // For internal Dedupe End
         // Grid Table Properties Set Start
         $('#'+TableID).find("tbody").addClass("tbody");
         $('#'+TableID).find("tbody").find("tr").addClass("tbodytr");
         $('#'+TableID).find("tbody").find("tr").find("td").addClass("tbodytrtd");
              $('#'+TableID+'_wrapper').find('label').each(function () {
                  $(this).parent().append($(this).children());
                  });
                  $('#'+TableID+'_wrapper .dataTables_filter').find('input').each(function () {
                       // $('#'+TableID+'_wrapper input').attr("placeholder", "Search");
                        $('#'+TableID+'_wrapper input').removeClass('form-control-sm');
                  });
                  $('#'+TableID+'_wrapper .dataTables_length').addClass('d-flex flex-row');
                  $('#'+TableID+'_wrapper .dataTables_filter').addClass('md-form');
                  $('#'+TableID+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
                  $('#'+TableID+'_wrapper .dataTables_filter').find('label').remove();
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").css("width","100%")
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner table").css("width","100%")
                  $("#"+TableID).css("width","100%")
                 $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").addClass(par.TableHeader);
                     // Middle row Customisation
                     $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");
                         $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
                    $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
                  //$($("#" + TableID + "_wrapper").find(".row")[2]).remove();
                          $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
                  $($("#" + TableID + "_wrapper").find('.row')[0]).find("div").remove();
                   $($("#" + TableID + "_wrapper").find('.row')[0]).removeClass("row");
// Field Initialisation Start
// Dropdown
$('#'+TableID+'_wrapper .Gridmdb-select').material_select();              
// Calendar
var $input = $(document).find('.Griddatepicker').pickadate({
    //editable: 'true',
format: 'dd/mm/yyyy',
selectYears: 150,
selectMonths: true
})
.on("change", function() {
  $(this).prev().val($(this).val());
  $(this).prev().focus();
});
//Field Initialisation End
// Grid Table Properties Set End

oTable = $('#Table3').DataTable();
$('#SearchTable3').keyup(function(){
      oTable.search($(this).val()).draw() ;
})


          }
    }

// My Applications End



//My Applications Dashboard Start


function FncallMyApplDshBrd(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
  var popTable;
  sessionStorage.setItem('SessionMICRCODE', '0');
  //    $("#popup").dialog("open");
//ajaxindicatorstart("Loading.. Please wait");
 var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var DBSrc = par.DBSrc; 
          $.ajax({
             url: "/TPLSW/UI_GetData",
             data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
             async: false,
             //dataType: "json",
                    dataType: "text",
             type: 'POST',
             complete: function OnSuccess_submit(xml1) {
                   var      op=xml1.responseText;
                if (op != "")
                {                      
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
            result = result.replace(/>null</g,"><");
          var json = $.xml2json(result.replace(/&/g,"and"));
          //alertify.alert(json);
                            if(json == "")
                {
                            alert(LoadFrmXML("V0072"));
                              $('#'+fnname).empty();
                                  $("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
                                  $("#"+fnname+"_paginate").remove();
                                  $("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
                            return
                }
          //return;
          if (JSON.stringify(json.a) === '{}') {
                alert(LoadFrmXML("V0072"));
          }
          else {
             // $("#popupSPL").dialog();
             // $("#popupSPL").dialog("option", "width", 805);
            //  $("#popupSPL").dialog("option", "closeOnEscape", true);
             // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
             //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
        	  handlejsonMyApplDshBrd(JSON.parse(((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "").replace(/XXPXX/g, "%").replace(/XXSLXX/g,"/")),fnname,control1, hdncolumn, enablecontrol,par);
                }
    ajaxindicatorstop();
                }           //ajaxindicatorstop();
                else
                {
                //alert(LoadFrmXML("V0072"));
                ajaxindicatorstop();
                }
                },
          error: function (xml1)
          {
                      //alertify.alert(LoadFrmXML("V0126"));
                            alert(LoadFrmXML("V0126"));
                      OP="Fail";
                      //ajaxindicatorstop();
          }
       });
     // 
}

function handlejsonMyApplDshBrd(result,TableID, curcontl, hdncolumn, enablecontrol,par) {

 var dtData = [];
        var count = 0;
        //to re-init datatable
       // myData = JSON.parse(result.d);
        myData1 = $(result);
        var entry;
        var name;
        entry = myData1[0];
        for (name in entry) {
            if (entry.hasOwnProperty(name)) {
                dtData2[count] = name;
                count++;
                //dtData1.push(name);
            }
        }
      $.each(myData1, function (event) {
          switch (count) {
            case 1:
                dtData.push([this[dtData2[0]]]);
                break;
            case 2:
                dtData.push([this[dtData2[0]], this[dtData2[1]]]);
                break;
            case 3:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]]]);
                break;
            case 4:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]]]);
                break;
            case 5:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]]]);
                break;
            case 6:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]]]);
                break;
            case 7:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]]]);
                break;
            case 8:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]]]);
                break;
            case 9:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]]]);
                break;
            case 10:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]]]);
                break;
            case 11:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]]]);
                break;
            case 12:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]]]);
                break;
            case 13:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]]]);
                break;
            case 14:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]]]);
                break;
            case 15:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
                break;
            case 16:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
                break;
            case 17:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]]]);
                break;
            case 18:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]]]);
                break;
            case 19:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]]]);
                break;
            case 20:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]]]);
                break;
            case 21:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]]]);
                break;
            case 22:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]]]);
                break;
            case 23:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]]]);
                break;
            case 24:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]]]);
                break;
            case 25:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]]]);
                break;
            case 26:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]]]);
                break;
            case 27:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]]]);
                break;
            case 28:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]]]);
                break;
            case 29:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]]]);
                break;
            case 30:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]]]);
                break;
            case 31:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]]]);
                break;
            case 32:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]]]);
                break;
            case 33:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]]]);
                break;
            case 34:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]]]);
                break;
            case 35:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]]]);
                break;
                case 36:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]]]);
                break;
                case 37:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]]]);
                break;
                case 38:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]]]);
                break;
                case 39:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]]]);
                break;
                case 40:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]]]);
                break;
                case 41:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]]]);
                break;
                case 42:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]]]);
                break;
                case 43:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]]]);
                break;
                case 44:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]]]);
                break;
                case 45:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]]]);
                break;
                case 46:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]]]);
                break;
                case 47:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]]]);
               break;
                case 48:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]]]);
                break;
                case 49:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]],this[dtData2[48]]]);
                break;
                case 50:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]],this[dtData2[47]],this[dtData2[48]],this[dtData2[49]]]);
                break;
                case 51:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]]]);
                break;
                case 52:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]]]);
                break;
                case 53:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]]]);
                break;
                case 54:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]]]);
                break;
                case 55:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]]]);
                break;
                case 56:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]]]);
                break;
                case 57:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]]]);
                break;
                case 58:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]]]);
                break;
                case 59:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]]]);
                break;
                case 60:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]]]);
                break;
                case 61:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]]]);
                break;
                case 62:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]]]);
                break;
                case 63:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]]]);
                break;
                case 64:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]]]);
                break;
                case 65:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]]]);
                break;
                case 66:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]]]);
                break;          
                case 67:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]]]);
                break;    
                case 68:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]]]);
                break;    
                case 69:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]]]);
                break;    
                case 70:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]],this[dtData2[69]]]);
                break;
        }
        });
        if (!(typeof popTableModPageGrid1 === "undefined")) {
            /* destroy table*/
            //Delete the datable object first
           // popTableModPageGrid1.fnDestroy();
                /*if(popTableModPageGrid1[0].id == "Table1")
                {
            //popTableModPageGrid1.fnDestroy();
                }*/
            popTableModPageGrid1 = null;
            // $('#'+TableID).dataTable( {"bDestroy": true      } );
            //Remove all the DOM elements
            $('#'+TableID).empty();
            /* destry table*/
            //        oSettings = popTable.fnSettings();
            //        popTable.fnClearTable(this);
            //        for (var i = 0; i < dtData.length; i++) {
            //            popTable.oApi._fnAddData(oSettings, dtData[i]);
            //        }
            //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
            //        popTable.fnDraw();
        }
        //dynamically add column name
        var dtcolumn = [];
        for (var i = 0; i < count; i++) {
            var obj = {};
            obj["sTitle"] = dtData2[i];
    //added by manimala... <<start>> for date sorting
       if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
           //added by manimala... <<end>>
            dtcolumn.push(obj);
        }
        if(myData1.length == 0)
        {
        dtData = [];
        }
        else if(Object.values(myData1[0])[0] == "")
          {
          dtData = [];
          }
                var cc = parseInt(count)-6;
          var hideClm = [];
          var hideClm1='[';
          if(hdncolumn != undefined)
          {
          if(hdncolumn !="||")
          {          
          if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
                {
                      var hideClm1='['+hdncolumn.split('|')[2]+',';
                }
          hdncolumn=hdncolumn.split('|')[0];
          }
          }
          for(c=parseInt(cc);c<count;c++)
          {
                if(c==parseInt(count)-1)
                hideClm1=hideClm1+c.toString();
          else
                hideClm1=hideClm1+c.toString()+',';
          }
          hideClm1=hideClm1+']';
          hideClm = hideClm1;
          if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
        	  
        	  if (enablecontrol == "GENERAL")
	            {
	         	 popTableModPageGrid1=  GridControlGENERAL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				
			else if (enablecontrol == "DSHBRD")
	            {
	         	 popTableModPageGrid1=  GridControlDSHBRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
			else if (enablecontrol == "DSHBRD2")
	            {
	         	 popTableModPageGrid1=  GridControlDSHBRD2 (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
			else if (enablecontrol == "DSHBRDWTHHREF")
	            {
	         	 popTableModPageGrid1=  GridControlDSHBRDWTHHREF (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				
			else if (enablecontrol == "DSHBRDWTHHREFLNG")
	            {
	         	 popTableModPageGrid1=  GridControlDSHBRDWTHHREFLNG (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				
				if (enablecontrol == "DSHBRDAPPLNO")
	            {
	         	 popTableModPageGrid1=  GridControlDSHBRDAPPLNO (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				
				if (enablecontrol == "ACTNBLEDSHBRDAPPLNO")
	            {
	         	 popTableModPageGrid1=  GridControlACTNBLEDSHBRDAPPLNO (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				
				if (enablecontrol == "SUBACTNBLEDSHBRDAPPLNO")
	            {
	         	 popTableModPageGrid1=  GridControlSUBACTNBLEDSHBRDAPPLNO (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	            }
				
				
        	
			
         // Grid Table Properties Set Start
         $('#'+TableID).find("tbody").addClass("tbody");
         $('#'+TableID).find("tbody").find("tr").addClass("tbodytr");
         $('#'+TableID).find("tbody").find("tr").find("td").addClass("tbodytrtd");
              $('#'+TableID+'_wrapper').find('label').each(function () {
                  $(this).parent().append($(this).children());
                  });
                  $('#'+TableID+'_wrapper .dataTables_filter').find('input').each(function () {
                       // $('#'+TableID+'_wrapper input').attr("placeholder", "Search");
                        $('#'+TableID+'_wrapper input').removeClass('form-control-sm');
                  });
                  $('#'+TableID+'_wrapper .dataTables_length').addClass('d-flex flex-row');
                  $('#'+TableID+'_wrapper .dataTables_filter').addClass('md-form');
                  $('#'+TableID+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
                  $('#'+TableID+'_wrapper .dataTables_filter').find('label').remove();
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").css("width","100%")
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner table").css("width","100%")
                  $("#"+TableID).css("width","100%")
                 $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").addClass(par.TableHeader);
                     // Middle row Customisation
                     $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");
                         $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
                    $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
                  //$($("#" + TableID + "_wrapper").find(".row")[2]).remove();
                          $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
                  $($("#" + TableID + "_wrapper").find('.row')[0]).find("div").remove();
                   $($("#" + TableID + "_wrapper").find('.row')[0]).removeClass("row");
// Field Initialisation Start
// Dropdown
$('#'+TableID+'_wrapper .Gridmdb-select').material_select();              
// Calendar
var $input = $(document).find('.Griddatepicker').pickadate({
    //editable: 'true',
format: 'dd/mm/yyyy',
selectYears: 150,
selectMonths: true
})
.on("change", function() {
  $(this).prev().val($(this).val());
  $(this).prev().focus();
});


        }
  }

//My Applications Dashboard End




//Multi Paging Grid Start


function FncallMultiPagingGrd(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
  var popTable;
  sessionStorage.setItem('SessionMICRCODE', '0');
  //    $("#popup").dialog("open");
//ajaxindicatorstart("Loading.. Please wait");
 var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var DBSrc = par.DBSrc; 
          $.ajax({
             url: "/TPLSW/UI_GetData",
             data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
             async: false,
             //dataType: "json",
                    dataType: "text",
             type: 'POST',
             complete: function OnSuccess_submit(xml1) {
                   var      op=xml1.responseText;
                if (op != "")
                {                      
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
            result = result.replace(/>null</g,"><");
          var json = $.xml2json(result.replace(/&/g,"and"));
          //alertify.alert(json);
                            if(json == "")
                {
                            alert(LoadFrmXML("V0072"));
                              $('#'+fnname).empty();
                                  $("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
                                  $("#"+fnname+"_paginate").remove();
                                  $("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
                            return
                }
          //return;
          if (JSON.stringify(json.a) === '{}') {
                alert(LoadFrmXML("V0072"));
          }
          else {
             // $("#popupSPL").dialog();
             // $("#popupSPL").dialog("option", "width", 805);
            //  $("#popupSPL").dialog("option", "closeOnEscape", true);
             // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
             //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
        	  handlejsonMultiPagingGrd(JSON.parse(((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "").replace(/XXPXX/g, "%").replace(/XXSLXX/g,"/")),fnname,control1, hdncolumn, enablecontrol,par);
                }
    ajaxindicatorstop();
                }           //ajaxindicatorstop();
                else
                {
                //alert(LoadFrmXML("V0072"));
                ajaxindicatorstop();
                }
                },
          error: function (xml1)
          {
                      //alertify.alert(LoadFrmXML("V0126"));
                            alert(LoadFrmXML("V0126"));
                      OP="Fail";
                      //ajaxindicatorstop();
          }
       });
     // 
}

function handlejsonMultiPagingGrd(result,TableID, curcontl, hdncolumn, enablecontrol,par) {

 var dtData = [];
        var count = 0;
        //to re-init datatable
       // myData = JSON.parse(result.d);
        myData1 = $(result);
        var entry;
        var name;
        entry = myData1[0];
        for (name in entry) {
            if (entry.hasOwnProperty(name)) {
                dtData2[count] = name;
                count++;
                //dtData1.push(name);
            }
        }
      $.each(myData1, function (event) {
          switch (count) {
            case 1:
                dtData.push([this[dtData2[0]]]);
                break;
            case 2:
                dtData.push([this[dtData2[0]], this[dtData2[1]]]);
                break;
            case 3:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]]]);
                break;
            case 4:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]]]);
                break;
            case 5:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]]]);
                break;
            case 6:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]]]);
                break;
            case 7:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]]]);
                break;
            case 8:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]]]);
                break;
            case 9:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]]]);
                break;
            case 10:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]]]);
                break;
            case 11:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]]]);
                break;
            case 12:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]]]);
                break;
            case 13:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]]]);
                break;
            case 14:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]]]);
                break;
            case 15:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
                break;
            case 16:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
                break;
            case 17:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]]]);
                break;
            case 18:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]]]);
                break;
            case 19:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]]]);
                break;
            case 20:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]]]);
                break;
            case 21:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]]]);
                break;
            case 22:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]]]);
                break;
            case 23:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]]]);
                break;
            case 24:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]]]);
                break;
            case 25:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]]]);
                break;
            case 26:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]]]);
                break;
            case 27:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]]]);
                break;
            case 28:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]]]);
                break;
            case 29:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]]]);
                break;
            case 30:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]]]);
                break;
            case 31:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]]]);
                break;
            case 32:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]]]);
                break;
            case 33:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]]]);
                break;
            case 34:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]]]);
                break;
            case 35:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]]]);
                break;
                case 36:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]]]);
                break;
                case 37:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]]]);
                break;
                case 38:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]]]);
                break;
                case 39:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]]]);
                break;
                case 40:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]]]);
                break;
                case 41:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]]]);
                break;
                case 42:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]]]);
                break;
                case 43:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]]]);
                break;
                case 44:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]]]);
                break;
                case 45:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]]]);
                break;
                case 46:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]]]);
                break;
                case 47:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]]]);
               break;
                case 48:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]]]);
                break;
                case 49:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]],this[dtData2[48]]]);
                break;
                case 50:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]],this[dtData2[47]],this[dtData2[48]],this[dtData2[49]]]);
                break;
                case 51:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]]]);
                break;
                case 52:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]]]);
                break;
                case 53:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]]]);
                break;
                case 54:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]]]);
                break;
                case 55:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]]]);
                break;
                case 56:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]]]);
                break;
                case 57:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]]]);
                break;
                case 58:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]]]);
                break;
                case 59:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]]]);
                break;
                case 60:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]]]);
                break;
                case 61:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]]]);
                break;
                case 62:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]]]);
                break;
                case 63:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]]]);
                break;
                case 64:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]]]);
                break;
                case 65:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]]]);
                break;
                case 66:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]]]);
                break;          
                case 67:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]]]);
                break;    
                case 68:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]]]);
                break;    
                case 69:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]]]);
                break;    
                case 70:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]],this[dtData2[69]]]);
                break;
        }
        });
        if (!(typeof popTableModPageGrid1 === "undefined")) {
            /* destroy table*/
            //Delete the datable object first
           // popTableModPageGrid1.fnDestroy();
                /*if(popTableModPageGrid1[0].id == "Table1")
                {
            //popTableModPageGrid1.fnDestroy();
                }*/
            popTableModPageGrid1 = null;
            // $('#'+TableID).dataTable( {"bDestroy": true      } );
            //Remove all the DOM elements
            $('#'+TableID).empty();
            /* destry table*/
            //        oSettings = popTable.fnSettings();
            //        popTable.fnClearTable(this);
            //        for (var i = 0; i < dtData.length; i++) {
            //            popTable.oApi._fnAddData(oSettings, dtData[i]);
            //        }
            //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
            //        popTable.fnDraw();
        }
        //dynamically add column name
        var dtcolumn = [];
        for (var i = 0; i < count; i++) {
            var obj = {};
            obj["sTitle"] = dtData2[i];
    //added by manimala... <<start>> for date sorting
       if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
           //added by manimala... <<end>>
            dtcolumn.push(obj);
        }
        if(myData1.length == 0)
        {
        dtData = [];
        }
        else if(Object.values(myData1[0])[0] == "")
          {
          dtData = [];
          }
                var cc = parseInt(count)-6;
          var hideClm = [];
          var hideClm1='[';
          if(hdncolumn != undefined)
          {
          if(hdncolumn !="||")
          {          
          if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
                {
                      var hideClm1='['+hdncolumn.split('|')[2]+',';
                }
          hdncolumn=hdncolumn.split('|')[0];
          }
          }
          for(c=parseInt(cc);c<count;c++)
          {
                if(c==parseInt(count)-1)
                hideClm1=hideClm1+c.toString();
          else
                hideClm1=hideClm1+c.toString()+',';
          }
          hideClm1=hideClm1+']';
          hideClm = hideClm1;
          if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
        	  
        	  
	   if (enablecontrol == "DIRDEPART")
      {
    		popTableModPageGrid1=  GridControlDIRDEPARTMENT (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
	       else if (enablecontrol == "VENDORMST")
      {
    		popTableModPageGrid1=  GridControlVENDORMST (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
	  
	       else if (enablecontrol == "DEPARTMST")
      {
    		popTableModPageGrid1=  GridControlDEPARTMENTMST (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }

	   else if (enablecontrol == "ROLEMST")
      {
    		popTableModPageGrid1=  GridControlROLEMST (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
      
	  
	   else if (enablecontrol == "DIRUSER")
      {
    		popTableModPageGrid1=  GridControlDIRUSER (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
	  else if (enablecontrol == "MonthRpt")
      {
    		popTableModPageGrid1=  GridControlMonthREPORT (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
	    else if (enablecontrol == "IVLDVDRDATA")
      {
    		popTableModPageGrid1=  GridControlIVLDVDRDATA (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
	     else if (enablecontrol == "IVLDUSRDATA")
      {
    		popTableModPageGrid1=  GridControlIVLDUSRDATA (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	    else if (enablecontrol == "IVLDBRDATA")
      {
    		popTableModPageGrid1=  GridControlIVLDBRDATA (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
	   else if (enablecontrol == "VENDOREMPMAP")
      {
    		popTableModPageGrid1=  GridControlVENDOREMPMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }
	  
		else if (enablecontrol == "UserMasterAssigned")
		{
			popTableModPageGrid1=  GridControlCREDITOPSQ (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		}
		else if (enablecontrol == "RoleMasterAssigned")
		{
			popTableModPageGrid1=  GridControlOPSQD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		}
		else if (enablecontrol == "BranchMasterAssigned")
		{
			popTableModPageGrid1=  GridControlOPSQDFOR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		}
		else if (enablecontrol == "VendorEmpanelmentAssigned")
		{
			popTableModPageGrid1 =  GridControlOPS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
		}
        else if (enablecontrol == "DIRUSERROLEMAP")
	      {
	    	popTableModPageGrid1=GridControlDIRUSERROLEMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	   else if (enablecontrol == "DIRBRMAP")
	      {
	    	popTableModPageGrid1=GridControlDIRBRMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
		  
		 else if (enablecontrol == "DIRBRMODULEMAP")
	      {
	    	popTableModPageGrid1=GridControlDIRMODULEMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }  
		  
	 else if (enablecontrol == "VDRBRMAP")
	      {
	    	popTableModPageGrid1=GridControlVDRBRMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      } 
		
        //added for  Role-User MAPPING   
	   
	   else if (enablecontrol == "ROLEUSERMAP")
	      {
	    	popTableModPageGrid1=GridControlROLLUSERMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	   
	   else if (enablecontrol == "ROLEUSERMAPMAIN")
	      {
	    	popTableModPageGrid1=GridControlROLLUSERMAPMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	   
	   //end 


		
		  //added for Branch-USER MAPPING   
	   
	   else if (enablecontrol == "DIRBRUSERMAP")
	      {
	    	popTableModPageGrid1=GridControlBRANCHUSERMAPBR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	   
	   else if (enablecontrol == "DIRBRUSERMAPMAIN")
	      {
	    	popTableModPageGrid1=GridControlBRANCHUSERMAPMAINBR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);      
	      }
	   
	   //end 
	   
	   
	    else if (enablecontrol == "DocumentTEMPLATESView")
	      {
	    	  
	    	  popTableModPageGrid1=GridControlDocumentTEMPLATESView (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	      }
		  
	     else if (enablecontrol == "DocumentPIN")
	      {
	    	  
	    	  popTableModPageGrid1=GridControlDocumentPIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	      }
	  
	   
//added for  vendor- Branch MAPPING   
	   
	   else if (enablecontrol == "VENDORBRANHMAP")
	      {
	    	popTableModPageGrid1=GridControlBRANCHUSERMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	   
	   else if (enablecontrol == "VENDORBRANHMAPMAIN")
	      {
	    	popTableModPageGrid1=GridControlBRANCHUSERMAPMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	     else if (enablecontrol == "VDRBRMAPMAIN")
	      {
	    	popTableModPageGrid1=GridControlVDRBRMAPMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	   //end 
	    else if (enablecontrol == "IFSCMST")
	      {
	    	popTableModPageGrid1=GridControlIFSCMST(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
		  
		  else if (enablecontrol == "CERSAIDOWNLOAD")
	      {
	    	popTableModPageGrid1=GridControlCERSAIDOWNLOAD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
		  
		  else if (enablecontrol == "DIRBRMAPMAIN")
	      {
	    	popTableModPageGrid1=GridControlDIRBRMAPMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
		  
		   else if (enablecontrol == "DIRUSERMODULEMAIN")
	      {
	    	popTableModPageGrid1=GridControlDIRUSERMODULEMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
		  
		  
        else if (enablecontrol == "DIRROLEMAPMAIN")
	      {
	    	popTableModPageGrid1=GridControlDIRROLEMAPMAIN(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	else if (enablecontrol == "BRVERTICAL")
	      {
	    	popTableModPageGrid1=GridControlBRVERTICAL(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	else if (enablecontrol == "VERTICALMAP")
	      {
	    	popTableModPageGrid1=GridControlVERTICALMAP(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }
	else if (enablecontrol == "RPTUSRID")
	      {
	    	popTableModPageGrid1=GridControlRPTUSRID(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
	    	      
	      }		
    else if (enablecontrol == "DIRUSER")
      {
    		popTableModPageGrid1=  GridControlDIRUSER (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm);
    	      
      }	
			
         // Grid Table Properties Set Start
         $('#'+TableID).find("tbody").addClass("tbody");
         $('#'+TableID).find("tbody").find("tr").addClass("tbodytr");
         $('#'+TableID).find("tbody").find("tr").find("td").addClass("tbodytrtd");
              $('#'+TableID+'_wrapper').find('label').each(function () {
                  $(this).parent().append($(this).children());
                  });
                  $('#'+TableID+'_wrapper .dataTables_filter').find('input').each(function () {
                       // $('#'+TableID+'_wrapper input').attr("placeholder", "Search");
                        $('#'+TableID+'_wrapper input').removeClass('form-control-sm');
                  });
                  $('#'+TableID+'_wrapper .dataTables_length').addClass('d-flex flex-row');
                  $('#'+TableID+'_wrapper .dataTables_filter').addClass('md-form');
                  $('#'+TableID+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
                  $('#'+TableID+'_wrapper .dataTables_filter').find('label').remove();
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").css("width","100%")
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner table").css("width","100%")
                  $("#"+TableID).css("width","100%")
                 $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").addClass(par.TableHeader);
                     // Middle row Customisation
                     $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","auto");
                         $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
                    $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
                  //$($("#" + TableID + "_wrapper").find(".row")[2]).remove();
                          $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
                  $($("#" + TableID + "_wrapper").find('.row')[0]).find("div").remove();
                   $($("#" + TableID + "_wrapper").find('.row')[0]).removeClass("row");
// Field Initialisation Start
// Dropdown
$('#'+TableID+'_wrapper .Gridmdb-select').material_select();              
// Calendar
var $input = $(document).find('.Griddatepicker').pickadate({
    //editable: 'true',
format: 'dd/mm/yyyy',
selectYears: 150,
selectMonths: true
})
.on("change", function() {
  $(this).prev().val($(this).val());
  $(this).prev().focus();
});


        }
  }

//Multi Paging Grid End