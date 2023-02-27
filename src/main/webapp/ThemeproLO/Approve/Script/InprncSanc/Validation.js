function GridControlDetailSANCCONFR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
			   { targets: 1, "width":"25%", "render": function ( data, type, row, meta ) {
				   var HTML =    '<span>'+data+'</span>';
				   var htmldata = $(HTML);

       	  	 return htmldata[0].outerHTML;
			   }
			   },
			 { targets: 2, "width":"25%", "render": function ( data, type, row, meta ) {
				var rowno = meta.row;
				
				var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" disabled onchange = "OnChngDrpDwn(this)" id="IPRG_TYPCHNG'+rowno+'" name="IPRG_TYPCHNG">';
				HTML = HTML + '<option value="">Select</option>';
				if(row[0]=="IMP001")
				{
					HTML = HTML + imp1
				}
				else if(row[0]=="IMP002")
				{
					HTML = HTML + imp1
				}
				else if(row[0]=="IMP003")
				{
					HTML = HTML + imp1
				}
				else if(row[0]=="IMP004")
				{
					HTML = HTML + imp4
				}
				else if(row[0]=="IMP006")
				{
					HTML = HTML + imp6
				}
				HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
       	       			
       	       			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
				if(baserole == "Sales" && (row[0]=="IMP001" || row[0]=="IMP002" || row[0]=="IMP003"|| row[0]=="IMP006"))
				{
					$(htmldata).find("select").removeAttr("disabled");
				}
				else if(baserole == "Credit" && (row[0]=="IMP004"))
				{
					$(htmldata).find("select").removeAttr("disabled");
				}
       	  	 return htmldata[0].outerHTML;
			 }
			 },
			{ targets: 4, "width":"25%", "render": function ( data, type, row, meta ) {
				   var HTML =  "";
				   if(data == "TO DISBURSEMENT INITIATION")
				   {
					   HTML = HTML+'<span ><div class = "IBtxt2_G">'+data+'</div></span>';
				   }
				   else if(data == "CLICK HERE TO RAISE DEVIATION")
				   {
					   HTML = HTML+'<span ><div class = "IBtxt2_O InitDeviation">'+data+'</div></span>';
				   }
				   else if(data == "TO UNDERWRITTING")
				   {
					   HTML = HTML+'<span ><div class = "IBtxt2_R">'+data+'</div></span>';
				   }
				   else  if(data == "PENDING")
				   {
					   HTML = HTML+'<span ><div class = "IBtxt2_O">'+data+'</div></span>';
				   }
				   else  if(data == "REJECT")
				   {
					   HTML = HTML+'<span ><div class = "IBtxt2_R">'+data+'</div></span>';
				   }
				   else  if(data == "APPROVE")
				   {
					   HTML = HTML+'<span ><div class = "IBtxt2_G">'+data+'</div></span>';
				   }
				   else
				   {
					   HTML = HTML+'<span ><div>'+data+'</div></span>';
				   }
				   var htmldata = $(HTML);

       	  	 return htmldata[0].outerHTML;
			   }
			},
			{ targets: 5, "width":"25%", "render": function ( data, type, row, meta ) {		
				var rowno = meta.row;			
				var HTML = '<span>';
				if(row[4] == "TO DISBURSEMENT INITIATION" || row[4] == "TO UNDERWRITTING" || row[4] == "")
				{
					HTML = HTML+'<input type="text" id="IPRG_DOWNSTRM' + rowno + '" style="display:none;" name="IPRG_DOWNSTRM" maxlength="500" class="form-control form-control   ">';
				}
				else{
				HTML = HTML+'<input type="text" id="IPRG_DOWNSTRM' + rowno + '"  name="IPRG_DOWNSTRM" maxlength="500" class="form-control form-control IsCURCommaFields NoSpecialChar   ">';
				}
                    HTML = HTML + '</span>';

                    var htmldata = $(HTML);


                    if ($(htmldata).find('[name=IPRG_DOWNSTRM]').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }


                    $(htmldata).find('[name=IPRG_DOWNSTRM]').attr("value", data);


                    return htmldata[0].outerHTML;
				
			}
			}
           	
           	   ],

          "fnDrawCallback": function (oSettings) {

         }

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
		    if($(".FormPageTab li.active").text()=="Sanction Confirmation" && $("#DMY5").val().split('|')[2] != "ReCredit" || $("#PrMs1").val() == "View")
			{
				DSVLBLALL('');
			}
	   },
    error: function (xml1)
    {
				  
		alert("In-Principle Sanction Failed, Contact IT");
		$(".loader2").fadeOut("slow");	
  if($(".FormPageTab li.active").text()=="Sanction Confirmation" && $("#DMY5").val().split('|')[2] != "ReCredit" || $("#PrMs1").val() == "View")
			{
				DSVLBLALL('');
			}		
		return;
    }
   });  
   
  
}

/* function InitRCU()
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
} */