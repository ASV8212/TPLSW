function GridControlDRAWDOWN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	popTableModPageGrid1 = $('#'+TableID).DataTable({ 

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

         
         
"aoColumnDefs": [ 
       		   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			
		  
			   var rowno = meta.row;	
				var HTML =	'<span class="DRAWDOWN"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'"  name="APPLNO" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
				HTML = HTML + ' </div></span>'
				
				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
			     		
				
	         } 
			 }
           	
           	   ],

         


         });
}

function OnChngDrpDwn(Evnt)
{
	$(".loader2").show();
	var Grid = TxtGridsubmitdata_SV1("Table2","IPRG_","IPRS_");
	var fnname = "Table2";
	var control1 = "{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')}"
	var hdncolumn = "||0,3";
	var enablecontrol = "SANCCONFR";
	var par = "{TableHeader:'card-headerGridAsh',Mode:''}";
	$.ajax({
		url: "/TPLSW/inprincFlowDecider",
		data: { Gridxml: Grid, prcsID: $("#PrcsID").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
       async: true,
	    dataType: "text",
       type: 'POST',
       complete: function OnSuccess_submit(xml1) {
		   if(xml1.responseText.split("~")[0] == "Success" && xml1.responseText.split("~")[1] == "Success")
		   {
			   var op=xml1.responseText.split("~")[2];
			   if (op != "")
                  {                      
				var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
              result = result.replace(/>null</g,"><");
            var json = $.xml2json(result.replace(/&/g,"and"));
                              if(json == "")
                  {
                              alert(LoadFrmXML("V0072"));
                                $('#'+fnname).empty();
                                    $("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
                                    $("#"+fnname+"_paginate").remove();
                                    $("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
									$(".loader2").fadeOut("slow");
									$(".UCVWFRECMFLOW").hide();
                              return
                  }
            if (JSON.stringify(json.a) === '{}') {
                  alert(LoadFrmXML("V0072"));
				  $(".loader2").fadeOut("slow");
				  $(".UCVWFRECMFLOW").hide();
            }
            else {
				 handlejsonDocChkLst(JSON.parse(((((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "")).replace(/XXPXX/g, "%")).replace('xxdiv_',' / ')),fnname,control1, hdncolumn, enablecontrol,par);
				 $(".loader2").fadeOut("slow");
				 $(".UCVWFRECMFLOW").hide();
				 if(xml1.responseText.split("~")[3] != "")
				 {
					$("#"+xml1.responseText.split("~")[3]).show();
				 }
                  }
                  }
		   }
		   else
		   {
			   alert(xml1.responseText.split("~")[2]);
			   $(".loader2").fadeOut("slow");
			   $(".UCVWFRECMFLOW").hide();
			   return;
		   }
		   
	   },
    error: function (xml1)
    {
				  
		alert("In-Principle Sanction Failed, Contact IT");
		$(".loader2").fadeOut("slow");		
		return;
    }
   });  
}

function InitRCU()
{
	var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETRCUSTATUS");
	if($(op).find("RESULT_FLG").text() == "SUCCESS")
	{
	var GRP = $(op).find("RESULT_MSG").text().split("|")[0];
	var UNIQid = $(op).find("RESULT_MSG").text().split("|")[1];
	var UNIQid1 = $(op).find("RESULT_MSG").text().split("|")[2];
	var OPXML = UI_getdata(GRP,"","","","","LSW_CHKIRCUGROUP");
    var GRP= $(OPXML).find("RCU").text()
	
	var WFVndACTVINIT1 = WFVndActvInit($("#ActvID").val(),$("#PrcsID").val()+"|VendorInitiate|Vendor|var_status=SVF&var_statusHES="+GRP+"&var_INFO1="+GRP+"~"+GRP+"~"+UNIQid+"~"+UNIQid1+"|ADMIN","LSW_SWFACTVINITCALL");	
	if (WFVndACTVINIT1 == "Success")
			{
			var OPXML = UI_getdata(GRP,UNIQid,UNIQid1,"","","LSW_SUPDATEIRCUGROUP");
			alert("RCU - File Assigned");
			return true;
			}
		else
			{
			alert("RCU - Initiation Failed");
			return false;
			}
	}
	else{
		alert($(op).find("RESULT_MSG").text());
		return false;
	}
}

function InitNewUser(){

		var Code="C012";
		var NAME="WFINIT";
		var OldPrcsID= "";
		var SPNAME="";
		
		
	 $.ajax({
	       
	        url: "/TPLSW/WFINITV1",
	        //dataType: "json",
	        data: {CODE : Code,NAME : NAME,OldPrcsID : OldPrcsID,SPNAME : SPNAME,Prvnt : $("#Prvnt").val()},
	        async: true,	      
	        type: "POST",
	        success: function(res) {
	        		            	
	        if	(res.split("~")[0] == "Workflow Initiated")
	        	{
	        	$(location).attr('href',window.location.origin + "/TPLSW/TransactionDradown?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs3=NEW");         	
	        	}
	        else
	        	{
	        	alert("Flow Initiation Failed");
	        	}
	            //console.log(res)
	        },
	        error: function(res) {
	        	
	        	alert("Flow Initiation Failed");
	            }
	    });
	}