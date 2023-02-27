function GridControlDetailEXPOSURE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,
	   "bSort": false,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': false,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
 
				 { targets: 1, "render": function ( data, type, row, meta ) {                            
			 				var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="EXPS_NAME'+rowno+'" style="width:140px"  name="EXPS_NAME'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl form-control">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=EXPS_NAME'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=EXPS_NAME'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   	
				         } 
						 },
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
							 
								 var rowno = meta.row;	 
									var HTML =	'<span><input type="text" id="EXPS_LOANAGGNUM'+rowno+'" style="width:140px" name="EXPS_LOANAGGNUM'+rowno+'" maxlength="40" class="form-control IsNoSpcharFields form-control">';			 
									HTML = HTML + '</span>'; 
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=EXPS_LOANAGGNUM'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=EXPS_LOANAGGNUM'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  		
						  } 
					 },
					 { targets: 3, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_VEHICLENO'+rowno+'" style="width:140px" name="EXPS_VEHICLENO'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_VEHICLENO'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_VEHICLENO'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				 
				 
				   {targets: 4, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_ASSETNAME'+rowno+'" style="width:140px" name="EXPS_ASSETNAME'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_ASSETNAME'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_ASSETNAME'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				 { targets: 5, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_MFGYEAR'+rowno+'" style="width:140px" name="EXPS_MFGYEAR'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_MFGYEAR'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_MFGYEAR'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				  { targets: 6, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_LOANAMT'+rowno+'" style="width:140px" name="EXPS_LOANAMT'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_LOANAMT'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_LOANAMT'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				   { targets: 7, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_EMI'+rowno+'" style="width:140px" name="EXPS_EMI'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_EMI'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_EMI'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				   { targets: 8, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_TENURE'+rowno+'" style="width:140px" name="EXPS_TENURE'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_TENURE'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_TENURE'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				 { targets: 9, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_CLEAR'+rowno+'" style="width:140px" name="EXPS_CLEAR'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_CLEAR'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_CLEAR'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				 
				  { targets: 10, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_PEAKDELAY'+rowno+'" style="width:140px" name="EXPS_PEAKDELAY'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_PEAKDELAY'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_PEAKDELAY'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				 
				 { targets: 11, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_AVGDELAY'+rowno+'" style="width:140px" name="EXPS_AVGDELAY'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_AVGDELAY'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_AVGDELAY'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				  { targets: 12, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_STATUS'+rowno+'" style="width:140px" name="EXPS_STATUS'+rowno+'" maxlength="40" class="form-control   IsNoSpcharFields  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_STATUS'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_STATUS'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				 
				 { targets: 13, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_PRIN'+rowno+'" style="width:140px" data-total="EXPO_PRINPAL" name="EXPS_PRIN'+rowno+'" maxlength="40" data-item="OS" class="form-control CalcOS IsCURCommaFields IsNumberFields form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_PRIN'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_PRIN'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 },
				 
				 
				 { targets: 14, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="EXPS_CURRENTDGV'+rowno+'" style="width:140px" data-total="EXPO_PROEXPDGV"  name="EXPS_CURRENTDGV'+rowno+'" data-item="DGV" maxlength="40" class="form-control IsCURCommaFields IsNumberFields CalcDGV form-control getdgv ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=EXPS_CURRENTDGV'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=EXPS_CURRENTDGV'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 }
				 
				 
				 
				 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}

  /* $(document).on("blur", ".getdgv", function() {
		var amt=0,val1=0,val2=0;
	  
	 val1=$($($(this).closest(".tbody").find(".tbodytr")[0]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".getdgv").val().replace(/,/g,'');
	val2=$($($(this).closest(".tbody").find(".tbodytr")[1]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".getdgv").val().replace(/,/g,'');


if(val1 == "")
		{
			val1=0;
		}
		if(isNaN(val1))
		{
			val1=0;
		}
		 if(val2 == "")
		{
			val2=0;
		}


    amt=parseFloat(val1)+parseFloat(val2)

$("#EXPO_PROEXPDGV").val(amt);
		$("#EXPO_PROEXPDGV").next().addClass('active');
}

*/

function CheckAmt(){
	
	var chck=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETEXPOAMT");

	$("#EXPO_PROEXPAMT").val($("#DMY3").val().split("|")[0]);
	$("#EXPO_PROEXPAMT").next().addClass('active');
	var ExLnAmt=$(chck).find ('LOANAMOUNT').text();
	
	if($("#EXPO_PRINPAL").val()=="")
	{
	  $("#EXPO_PRINPAL").val($(chck).find ('PRINCIPLE').text());
	  $("#EXPO_PRINPAL").next().addClass('active');
	}
	 var Tot = parseFloat(ExLnAmt)+parseFloat($("#DMY3").val().split("|")[0])
	if(Tot=="")
	{
	Tot=0	
	}
		if(isNaN(Tot))
	{
		Tot=0;
	}
	if($("#EXPO_GROSSEXPO").val()=="")
	{
	   $("#EXPO_GROSSEXPO").val(CURINRCommaSep(parseFloat(Tot).toFixed(2)));
	   $("#EXPO_GROSSEXPO").next().addClass('active');
	}
}
 
function checkNetExp()
{
	var PROP=$("#EXPO_PROEXPAMT").val().replace(/,/g,'');
	 
	var PRINC= $("#EXPO_PRINPAL").val().replace(/,/g,'');
	
	if(PROP=="")
	{
	PROP=0	
	}
	if(PRINC=="")
	{
	PRINC=0	
	}
	var TOTAL=parseFloat(PROP)+parseFloat(PRINC);
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	$("#EXPO_NETEXPO").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $("#EXPO_NETEXPO").next().addClass('active');
}

$(document).on("blur", ".CalcDGV", function() {
	
	var AmtLngth =$(this).closest('.tbody').find('[data-item=DGV]').length;
	
	var Amount = 0;
	var SUM=0;
	var val="";
	
	for (i=0;i<AmtLngth;i++)
		{
		val = $($(this).closest('.tbody').find('[data-item=DGV]')[i]).val().replace(/,/g,'');
		if (val == "")
			{
			val = 0;
			}
		
		Amount = parseFloat(Amount) + parseFloat(val);
		
		}

	var TotalAverageFld = $(this).attr("data-total");
	
	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount.toFixed(0)));
	$("#"+TotalAverageFld).next().addClass('active');
	
	var PEA=$("#EXPO_PROEXPAMT").val().replace(/,/g,'');
	var DGV=$("#EXPO_PROEXPDGV").val().replace(/,/g,'');
	
	if(PEA=="")
	{
		PEA=0;
	}
	
	if(DGV=="")
	{
		DGV=0;
	}
	
	var Tot=parseFloat(PEA)+parseFloat(DGV)

	var TotRatio=(parseFloat(PEA)/parseFloat(DGV))/100
	
	$("#EXPO_EXPRATIO").val(CURINRCommaSep(Tot.toFixed(0)));
	$("#EXPO_EXPRATIO").next().addClass('active');
	return false;
}); 
 

$(document).on("blur", ".CalcOS", function() {
	
	var AmtLngth =$(this).closest('.tbody').find('[data-item=OS]').length;
	
	var Amount = 0;
	var SUM=0;
	var val="";
	
	for (i=0;i<AmtLngth;i++)
		{
		val = $($(this).closest('.tbody').find('[data-item=OS]')[i]).val().replace(/,/g,'');
		if (val == "")
			{
			val = 0;
			}
		
		Amount = parseFloat(Amount) + parseFloat(val);
		
		}
	var TotalAverageFld = $(this).attr("data-total");
	
	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount.toFixed(0)));
	$("#"+TotalAverageFld).next().addClass('active');
	
	var PEA=$("#EXPO_PROEXPAMT").val().replace(/,/g,'');
	var OS=$("#EXPO_PRINPAL").val().replace(/,/g,'');
	
	if(PEA=="")
	{
		PEA=0;
	}
	
	if(OS=="")
	{
		OS=0;
	}
	
	var Tot=parseFloat(PEA)+parseFloat(OS)
	
	$("#EXPO_NETEXPO").val(CURINRCommaSep(Tot.toFixed(0)));
	
	return false;
}); 
  

 $(document).on("blur", ".CalcLonAmt", function() {
	
  var AmtLngth =$(this).closest('.tbody').find('[data-item=LONAMT]').length;
	
	var Amount = 0;
	var SUM=0;
	var val="";
	
	for (i=0;i<AmtLngth;i++)
		{
		val = $($(this).closest('.tbody').find('[data-item=LONAMT]')[i]).val().replace(/,/g,'');
		if(val == "")
		{
		 val = 0;
		}
		
		Amount = parseFloat(Amount) + parseFloat(val);
		
		}
	var Gross = $(this).attr("data-total").split("|")[0];
	
	var PLonAmt = $(this).attr("data-total").split("|")[1];
	
	$("#"+Gross).val(CURINRCommaSep(Amount.toFixed(0)));
	$("#"+Gross).next().addClass('active');
	
	var GrossVal=$("#"+Gross).val().replace(/,/g,'');
	var PLonAmtVal=$("#"+PLonAmt).val().replace(/,/g,'');
	
	if(GrossVal=="")
	{
		GrossVal=0;
	}
	
	if(PLonAmtVal=="")
	{
		PLonAmtVal=0;
	}
	
	var Tot=parseFloat(GrossVal)+parseFloat(PLonAmtVal)
	
	$("#"+Gross).val(CURINRCommaSep(Tot.toFixed(0)));
	
	return false;
});  
     
   
  