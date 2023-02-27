function LoadManualAvailable(html,id)
{
var Cheque=$(html).find("input[name='FCBD_RPTGENR']:checked"). val();
	
	if(Cheque=="Manual")
		{
		$(html).find(".ManualRpt").show()
		$(html).find(".DetailRpt").show()
        $(html).find(".AutoRpt").hide()
        $(html).find(".DetRpt").attr('disabled',false)
        $(html).find('.BnkMndtry').addClass('FCBDMndtry')
		}
	else if(Cheque=="Auto")
		{
		$(html).find(".ManualRpt").hide()
		$(html).find(".DetailRpt").hide()
		$(html).find(".AutoRpt").show()
		$(html).find('.BnkMndtry').removeClass('FCBDMndtry')
       var UploadValue=$(html).find("input[name='FCBD_UPLOADFILE']"). val();
		if(UploadValue!="")
		{
			$(html).find(".DetailRpt").show()
			$(html).find(".DetRpt").attr('disabled',false)
         }
       }
	else
		{
		$(html).find(".ManualRpt").hide()
		$(html).find(".AutoRpt").hide()
		$(html).find(".DetailRpt").hide()
		}
}
function ManualAvailable(html,id)
{
var Cheque=$(html).find("input[name='FCBD_RPTGENR']:checked"). val();
	
	if(Cheque=="Manual")
		{
		$(html).find(".ManualRpt").show()
		$(html).find(".DetailRpt").show()
        $(html).find(".AutoRpt").hide()
        
        $(html).find(".DetRpt").val('')
 
        $(html).find('.BnkMndtry').addClass('FCBDMndtry')
        $(html).find(".DetRpt").attr('disabled',false)
        $(html).find('.BNKL').removeClass('active')
		}
	else if(Cheque=="Auto")
		{
		$(html).find('.BnkMndtry').removeClass('FCBDMndtry')
		$(html).find(".ManualRpt").hide()
		$(html).find(".DetailRpt").hide()
		$(html).find(".AutoRpt").show()
		$(html).find(".DetRpt").val('')
	//	$(html).find('span').remove()
        $(html).find('input[type="file"]').attr('disabled',false)
		$(html).find('input[type="file"]').val('');
		$(html).find('input[type="file"]').show();
		$(html).find(".file-field").show()
		$(html).find(".FCBD_UPLOADFILE").hide()
		$(html).find(".file-field").find('input[type="file"]').css('display', 'block');
		//$(html).find('AutoRpt').find('span').find('.FileName').text('');

  //      $(html).find('input[type="file"]').val('');
	//	$(html).find('input[type="file"]').attr('disabled',false);
	//	$(html).find("input[name='FCBD_UPLOADFILE']"). val('');
        

  /*     var UploadValue=$(html).find("input[name='FCBD_UPLOADFILE']"). val();
		if(UploadValue!="")
		{
			$(html).find(".DetailRpt").show()
	        $(html).find(".DetRpt").attr('disabled',true)
         }*/
       }
	else
		{
		$(html).find(".ManualRpt").hide()
		$(html).find(".AutoRpt").hide()
		$(html).find(".DetailRpt").hide()
		}

}
function UploadFile()
{
	var DATA=["BankDetail1|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	LoadManualAvailable(HTML,"");
	 }
	}
}

function DateValidate(XID,YID)
{
if(YID.value!='')	
{
if(XID.value!='')	
{	
	var STDATE=$("#"+XID).val()
	var ENDDATE=$("#"+YID).val()

	      date = new Date();
	    var y = date.getFullYear();
	    var STDATE1 = STDATE.split("/");
	    var dd = STDATE1[0];
	    var mm = STDATE1[1];
	    var yy = STDATE1[2];

	var STDATE2=yy+mm+dd

	    var ENDDATE1 = ENDDATE.split("/");
	     var dd1 = ENDDATE1[0];
	     var mm1 = ENDDATE1[1];
	     var yy1 = ENDDATE1[2];
     var ENDDATE2=yy1+mm1+dd1
     
	    if(STDATE2>ENDDATE2)
	    	{
	    	 window.alert('End Date should not be less than Start Date');
	    	 $("#"+YID).val('')
	    	}
}
}
}

function GridControlDetailBALANCEGRID(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="BUBM_DADE5TH'+rowno+'"  name="BUBM_DADE5TH'+rowno+'" maxlength="30" data-item="Amount" data-total="FCBD_AVG" class="form-control IsNumberFields IsCURCommaFields FinYrIncm form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=BUBM_DADE5TH'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=BUBM_DADE5TH'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;    		
		         } 
				 },
				 				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="BUBM_DADE10TH'+rowno+'"  name="BUBM_DADE10TH'+rowno+'" maxlength="30" data-item="Amount" data-total="FCBD_AVG" class="form-control IsNumberFields IsCURCommaFields FinYrIncm form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=BUBM_DADE10TH'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=BUBM_DADE10TH'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;    		
							
				         } 
						 },
				 { targets: 3, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="BUBM_DADE15TH'+rowno+'"  name="BUBM_DADE15TH'+rowno+'" maxlength="30" data-item="Amount" data-total="FCBD_AVG" class="form-control IsNumberFields IsCURCommaFields FinYrIncm form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=BUBM_DADE15TH'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=BUBM_DADE15TH'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;    		
							
				         } 
						 },
						 
						 				 { targets: 4, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="BUBM_DADE20TH'+rowno+'"  name="BUBM_DADE20TH'+rowno+'" maxlength="30" data-item="Amount" data-total="FCBD_AVG" class="form-control IsNumberFields IsCURCommaFields FinYrIncm form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=BUBM_DADE20TH'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=BUBM_DADE20TH'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;    		
							
				         } 
						 },
						 
						 { targets: 5, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="BUBM_DADE25TH'+rowno+'"  name="BUBM_DADE25TH'+rowno+'" maxlength="30" data-item="Amount" data-total="FCBD_AVG" class="form-control IsCURCommaFields IsNumberFields FinYrIncm  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=BUBM_DADE25TH'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=BUBM_DADE25TH'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;    		
									
						         } 
								 },
								  { targets: 6, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="BUBM_DADE30TH'+rowno+'"  name="BUBM_DADE30TH'+rowno+'" maxlength="30" data-item="Amount" data-total="FCBD_AVG" class="form-control IsCURCommaFields IsNumberFields FinYrIncm  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=BUBM_DADE30TH'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=BUBM_DADE30TH'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;    		
									
						         } 
								 },
								 { targets: 7, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="BUBM_DAILYBAL'+rowno+'"  name="BUBM_DAILYBAL'+rowno+'" maxlength="15" data-item="DailyBalanc" data-total="FCBD_AVG" class="form-control IsCURCommaFields IsNumberFields FinYrIncm form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=BUBM_DAILYBAL'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=BUBM_DAILYBAL'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;    		
									
						         } 
								 },
								 { targets: 8, "render": function ( data, type, row, meta ) {                            
							 			
									 var rowno = meta.row;	 
										var HTML =	'<span><input type="text" id="BUBM_SUBAMT'+rowno+'"  name="BUBM_SUBAMT'+rowno+'" maxlength="30" data-total="FCBD_AVG"  data-item="SubtData" class="form-control IsNumberFields IsCURCommaFieldsPlus IsCURCommaFields FinYrIncm  form-control">';			 
										HTML = HTML + '</span>'; 
											 
										var htmldata = $(HTML);
											
										if ($(htmldata).find('[name=BUBM_SUBAMT'+rowno+']').hasClass("IsCURCommaFields"))
											{
											data = CURCommaSep(data);
											}
											$(htmldata).find('[name=BUBM_SUBAMT'+rowno+']').attr("value",data);
											return htmldata[0].outerHTML;    		
											
								         } 
										 },
										 { targets: 9, "render": function ( data, type, row, meta ) {                            
							     	 		 
								       			var rowno = meta.row;	
								       			
								       			var Addvalue = "";
								       			
								       			
								       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="BNKREMARKPOPUP(this,'+TableID+')" class="" width="35" height="25">';
								       		var	HTML =  HTML + '<input type="hidden" id="BUBM_REMARK'+rowno+'"  name="BUBM_REMARK'+rowno+'" disabled class="form-control DSVLBL BALREMARK form-control">';
								       		
								       						HTML = HTML + '</span>';		 
								       		  
								       						var htmldata = $(HTML);
								       						$(htmldata).find('[name=BUBM_REMARK'+rowno+']').attr("value",data);

								       	    	   			
								       	    	   			return htmldata[0].outerHTML;
								                } 
								       		 },
								 { targets: 10, "render": function ( data, type, row, meta ) {                            
							 			
									 var rowno = meta.row;	 
										var HTML =	'<span><input type="text" id="BUBM_ANG'+rowno+'"  name="BUBM_ANG'+rowno+'" maxlength="15" data-item="Average" disabled class="form-control DSVLBL IsCURCommaFields IsNumberFields NoSpecialChar form-control">';			 
										HTML = HTML + '</span>'; 
											 
										var htmldata = $(HTML);
											
										if ($(htmldata).find('[name=BUBM_ANG'+rowno+']').hasClass("IsCURCommaFields"))
											{
											data = CURCommaSep(data);
											}
											$(htmldata).find('[name=BUBM_ANG'+rowno+']').attr("value",data);
											return htmldata[0].outerHTML;    		
								         } 
										 },
										 { targets: 11, "render": function ( data, type, row, meta ) {                            
							 			
									 var rowno = meta.row;	 
										var HTML =	'<span><input type="text" id="BUBM_DADE'+rowno+'"  name="BUBM_DADE'+rowno+'" maxlength="15" data-item="Days" disabled class="form-control DSVLBL IsNumberFields NoSpecialChar form-control">';			 
										HTML = HTML + '</span>'; 
											 
										var htmldata = $(HTML);
											
										if ($(htmldata).find('[name=BUBM_DADE'+rowno+']').hasClass("IsCURCommaFields"))
											{
											data = CURCommaSep(data);
											}
											$(htmldata).find('[name=BUBM_DADE'+rowno+']').attr("value",data);
											return htmldata[0].outerHTML;    		
								         } 
										 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}


function GridControlDetailUPDATEFLOWGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
				var HTML =	'<span><input type="text" disabled id="UPFD_MOUNTH'+rowno+'" style=""  name="UPFD_MOUNTH'+rowno+'"  class="form-control DSVLBL UPFDDBfields form-control">';			 
				HTML = HTML + '</span>'; 
					 
					var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=UPFD_MOUNTH'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=UPFD_MOUNTH'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		           } 
				 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="UPFD_INFLOW'+rowno+'" data-item="Amount" data-scr="INFLOW"  data-field="UPFD_INFLOW'+rowno+'|" data-to="FCBD_INFLWSUM" name="UPFD_INFLOW'+rowno+'"  data-total="EGCD_FINYRTOT" maxlength="30" class="form-control NoSpecialChar IsNumberFields FLOW UPFDDBfields IsCURCommaFields form-control ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=UPFD_INFLOW'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=UPFD_INFLOW'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
					 var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="UPFD_OUTFLOW'+rowno+'" data-item="Amount" data-scr="OUTFLOW" name="UPFD_OUTFLOW'+rowno+'" data-to="FCBD_OUTFLWSUM" data-item="Amount" data-total="UPFD_OUTFLOW" maxlength="30" class="form-control NoSpecialChar  FLOW IsCURCommaFields IsNumberFields UPFDDBfields form-control ">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=UPFD_OUTFLOW'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=UPFD_OUTFLOW'+rowno+']').attr("value",data);
							return htmldata[0].outerHTML;   		
							
				         } 
						 },
						 
						 { targets: 3, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="UPFD_UNIQID'+rowno+'" name="UPFD_UNIQID'+rowno+'"  data-total="UPFD_UNIQID" maxlength="15" class="form-control NoSpecialChar UPFDDBfields form-control ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=UPFD_UNIQID'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=UPFD_UNIQID'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						         } 
								 }


    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}



$(document).ready(function () {	

$(document).on("blur", ".AvgBal", function() {
	
	//$(this).val();
	
	var AmtLngth = $(this).closest('.tbodytr').find('[data-item=Amount]').length;
	
	var Amount = 0;
	
	var val="";
	
	for (i=0;i<AmtLngth;i++)
		{
		
		val = $($(this).closest('.tbodytr').find('[data-item=Amount]')[i]).val().replace(/,/g,'');
		
		if (val == "")
			{
			val = 0;
			}
		
		Amount = parseFloat(Amount) + parseFloat(val);
		
		}
	
	var Percentage =  $($(this).closest('.tbodytr').find('[data-item=Percentage]')[0]).val().replace(/,/g,'');
	
	if (Percentage == "")
	{
		Percentage = 0;
	}
		
	var Average = ((parseFloat(parseFloat(Amount)/100) * parseFloat(Percentage))/ parseInt(AmtLngth)).toFixed(2);
	
	
	$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(Average));
		 	
	var AverageLngth = $(this).closest('.tbody').find('[data-item=Average]').length;
	
	Amount = 0;
	val=0;
	
	for (j=0;j<AverageLngth;j++)
	{
	
	val = $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
	
	if (val == "")
		{
		val = 0;
		}
	
	Amount = parseFloat(Amount) + parseFloat(val);
	
	}
	
	var TotalAverageFld = $(this).attr("data-total");
	
	$(this).closest(".DYNROW").find('[name='+TotalAverageFld+']').val(CURINRCommaSep(Amount));
	
	//alert($(this).val());
	
	
	return false;
});

$(document).on("blur", ".FLOW", function() {
	
	var FLOWLen =$(this).closest('.tbody').find('tr').length;
	var FLOWAmount = 0;
	var val="";
	var GetDataItem = $(this).attr("data-scr");
	for (i=0;i<FLOWLen;i++)
		{
		val = $($(this).closest('.tbody').find('tr')[i]).find('[data-scr="'+GetDataItem+'"]').val().replace(/,/g,'');
		if (val == "")
		{
		val = 0;
		}
		FLOWAmount = parseFloat(FLOWAmount) + parseFloat(val);
		}
	
	var toval = $(this).attr('data-to');
	$('input[name="'+toval+'"]').val(CURINRCommaSep(FLOWAmount));
	
});
$(document).on("blur", ".FinYrIncm", function() {
	
	//$(this).val();
	
	
	var AmtLngth = $(this).closest('.tbodytr').find('[data-item=Amount]').length;
	
	var Amount = 0;
	var SUM=0;
	var val="";
	
	for (i=0;i<AmtLngth;i++)
		{
		
		val = $($(this).closest('.tbodytr').find('[data-item=Amount]')[i]).val().replace(/,/g,'');
		
		if (val == "")
			{
			val = 0;
			}
		
		Amount = parseFloat(Amount) + parseFloat(val);
		
		}
	
	/*var Percentage =  $($(this).closest('.tbodytr').find('[data-item=Percentage]')[0]).val().replace(/,/g,'');
	
	if (Percentage == "")
	{
		Percentage = 0;
	}*/
		
	/*var Average = ((parseFloat(parseFloat(Amount)/100) * parseFloat(Percentage))/ parseInt(AmtLngth)).toFixed(2);*/
	
	var DailyBalnc=$($(this).closest('.tbodytr').find('[data-item=DailyBalanc]')[0]).val().replace(/,/g,'');
	  
	  if(DailyBalnc=="")
	  {
		  DailyBalnc=0;
	  }
	
	var SubData=$($(this).closest('.tbodytr').find('[data-item=SubtData]')[0]).val().replace(/,/g,'');
	  
	  if(SubData=="")
	  {
		  SubData=0;
	  }
	   var Average=0;
	  var Days=$($(this).closest('.tbodytr').find('[data-item=Days]')[0]).val()
	 
	  if($("#DMY7").val().split("|")[13]=="S00007" && parseFloat($("#DMY3").val().split("|")[3])>"10000000" && $("#DMY7").val().split("|")[8]=="HE01")
	  {
		  
			   Average=(parseFloat(DailyBalnc)-parseFloat(SubData))/parseFloat(Days)
			  Average=Math.round(Average * 100) / 100 
			  //Average.toFixed(2)
	  }
	  else
	  {
	  
	Amount=parseFloat(Amount)-parseFloat(SubData)
	
	var Average = parseFloat(Amount)/3
	Average=Math.round(Average * 100) / 100  //Average.toFixed(2)
	  }
	
	$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(Average));
	   	
	var AverageLngth = $(this).closest('.tbody').find('[data-item=Average]').length;
	
	Amount = 0;
	val=0;
	
	for (j=0;j<AverageLngth;j++)
	{
	
	val = $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
	
	if (val == "")
		{
		val = 0;
		}
	
	Amount = parseFloat(Amount) + parseFloat(val);
	
	}
	Amount=Amount.toFixed(2);
	Amount=Amount/12
	var TotalAverageFld = $(this).attr("data-total");
	
	//$("#FCBD_SUMAVG").val(CURINRCommaSep(parseFloat(SUM).toFixed(0)));
	$(this).closest(".DYNROW").find('[name='+TotalAverageFld+']').val(CURINRCommaSep(Amount.toFixed(0)));
	
	return false;
});

});
/*
function getCusName() 
{
	//$("input[name='COBI_GENTER']:checked"). val();
	//var AcctIIdVal=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='FCBD_ACCTHOLDNAME']").val();	
	//var AcctIIdVal=$(html).find("input[name="+$(this).attr('name')+"]:checked"). val()
	//var AcctIId=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='FCBD_ACCTHOLDNAME']").attr('id');
	var html=$('.BankDetail1').find(".DYNROW");
	var HOLDNameId=$($(html).find("input[name='FCBD_ACCTHOLDNAME']")[0]).attr('id')
	
    var row = $('.BankDetail1').find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	   var HOLDNameIId=$($(html).find("input[name='FCBD_ACCTHOLDNAME']")[i]).attr('id');
	   
	   if(HOLDNameId!=HOLDNameIId)
		   {
		       var AcctId=$($(html).find("input[name='FCBD_ACCTNUM']")[i]).attr('id')
		       var BrName=$($(html).find("input[name='FCBD_BNKNAMBR']")[i]).attr('id')
		       var HOLDNameIVal=$($(html).find("input[name='FCBD_ACCTHOLDNAME']")[0]).val()
		       $("#"+HOLDNameIId).val(HOLDNameIVal)
		       $("#"+HOLDNameIId).next().addClass('active')
		       $("#"+AcctId).attr('disabled',false);
		       $("#"+BrName).attr('disabled',false);
		   }
	 }
}*/

function CheckDocMndtry(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).length>0)
				  {
          if(j==5){
	           if(parseInt($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j-1]).find('input[type=text]').val())!=0 
	           && $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j-1]).find('input[type=text]').val()!=""
	           && $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j-1]).find('input[type=text]').val()!=0.00)
			   {
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[5]).find('input[type=hidden]').val()=="")
		             {
			          RTNVAL = "Remarks is mandatory when Exclusion is entered";
				    		return RTNVAL;
		             }
	              }
                 }
				}
			 }
		  }
	 return RTNVAL;
}

function GetAccountField(Acct1,Acct2)
{

	if($("#"+Acct1).val() != "")
		{
		  $("#"+Acct2).val('ACCOUNT NUMBER - '+$("#"+Acct1).val())
		}
}

function BNKREMARKPOPUP(Evnt,ID){
	var ClosID = $(Evnt).next()
	ID=$(ID).attr('id')
	//var val =$("#"+$(ClosID).attr('id')).val()
	var val=$("#"+ID).find("#"+$(ClosID).attr("id")).val()
	
	//var val=ClosID.val()
	
	$("#REMARKSPopup").click();
	$("#REMARKSModal").find("#RemarksCONFIRM").attr("data-to",$(ClosID).attr("id"))
	$("#REMARKSModal").find("#RemarksCONFIRM").attr("data-tabel",ID)
	if(val != ""){
		$("#POPUPRemarks").val(val);
		$("#POPUPRemarks").next().addClass('active');
	}
	else{
		$("#POPUPRemarks").val("");
	}
}

function CalcInOutCkhPerc(InwBonc,OutwBonc,TotInwBonc,TotOutwBonc,InwPerc,OutwPerc,Transaction)
{
	var InwBonc1=$("#"+InwBonc).val();
	var OutwBonc1=$("#"+OutwBonc).val();
	
	var TotInwBonc1=$("#"+TotInwBonc).val();
	var TotOutwBonc1=$("#"+TotOutwBonc).val(); 
	
	var InwPerc1= parseInt(InwBonc1)/parseInt(TotInwBonc1)
	var OutwPerc1= parseInt(OutwBonc1)/parseInt(TotOutwBonc1)
	if(InwPerc1=="Infinity")
	{
		InwPerc1 = 0
	}
	if(OutwPerc1=="Infinity")
	{
		OutwPerc1 = 0
	}
	
	if (isNaN(OutwPerc1)) 
	{
		OutwPerc1 = 0
	}
	if (isNaN(InwPerc1)) 
	{
		InwPerc1 = 0
	}
	if($.isNumeric(InwPerc1)==false)
	{
		
		if(Transaction == "Inward Transaction")
		{
		$("#"+InwPerc).val("");
		$("#"+InwPerc).next().removeClass('active');
		
		alert("Enter Valid data in "+Transaction);
		return;
		
		}
		
	}
	else
	{
		
		if (isNaN(InwPerc1)) 
	{
		InwPerc1 = 0
	}
	InwPerc1=InwPerc1.toFixed(2)
	$("#"+InwPerc).val(InwPerc1);
	$("#"+InwPerc).next().addClass('active');
	}
	
	if($.isNumeric(OutwPerc1)==false)
	{
	if(Transaction == "Outward Transaction")
		{
		$("#"+OutwPerc).val("");
		$("#"+OutwPerc).next().removeClass('active');
		
		alert("Enter Valid data in "+Transaction);
		return;
		}
	
	}
	else
	{
	if (isNaN(OutwPerc1)) 
	{
		OutwPerc1 = 0
	}
	OutwPerc1=OutwPerc1.toFixed(2)
	
	$("#"+OutwPerc).val(OutwPerc1);
	
	$("#"+OutwPerc).next().addClass('active');
	}
}

function ODCCLOAD(html)
//function ODCC(html)
{
//var acctype=$(html).find("input[name='BKDT_ACCTTYPE']"). val();
//var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
//var acctype=$(acctype).val();
var acctype=$(html).find("select[name='FCBD_ACCTTYPE']").val()
if((acctype=="Over Draft Account")||(acctype=="Cash Credit"))
{
$(html).find(".ODCC").show();
//$('.ODCC').show();
$(html).find("input[name='FCBD_SANCTIONLIM']").addClass('FCBDMndtry')
$(html).find("input[name='FCBD_DRAWPWR']").addClass('FCBDMndtry')
}
else
{
$(html).find('.ODCC').hide();
$(html).find("input[name='FCBD_SANCTIONLIM']").removeClass('FCBDMndtry')
$(html).find("input[name='FCBD_DRAWPWR']").removeClass('FCBDMndtry')
}
}
