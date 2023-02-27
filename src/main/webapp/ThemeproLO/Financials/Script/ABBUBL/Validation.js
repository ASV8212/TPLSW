
function Handle()
{
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#FLOW_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS")
	$("#FLOW_PROINTRATE").val($(xmlSTATUS).find('INTERESTRATE').text())
	$("#FLOW_PROTENTURE").val($(xmlSTATUS).find('TENTURE').text())
	
}


function GridControlDetailCASHFLOWGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
							var HTML =	'<span><input type="text" id="CASH_MONTH'+rowno+'" style="width:140px"  name="CASH_MONTH'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl  GridMndtry IsCURCommaFields form-control Cashflow">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=CASH_MONTH'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=CASH_MONTH'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   	
			 			
							
				         } 
						 },
						 { targets: 2, "render": function ( data, type, row, meta ) {                            
							 
								 var rowno = meta.row;	
								 var HTML = "";
                            if(row[0] == "Total Bills validated")
						{
							HTML =	'<span><input type="text"  id="CASH_AMOUNT'+rowno+'" style="width:160px"  name="CASH_AMOUNT'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL"  maxlength="30" class="form-control NoSpecialChar IsCURCommaFields  form-control DSVLBL  Cashflow">';	
						}			
                        else{
							
												
									var HTML =	'<span><input type="text" id="CASH_AMOUNT'+rowno+'" style="width:140px" name="CASH_AMOUNT'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control Cashflow">';			 
									HTML = HTML + '</span>'; 
						}
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=CASH_AMOUNT'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=CASH_AMOUNT'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  		
						  } 
					 },
					 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}
	
	$(document).on("blur", ".Cashflow", function() {
		var amt=0,val1=0,val2=0,val3=0,val4=0,val5=0,val6=0,val7=0,val8=0,val9=0,val10=0,val11=0,val12=0;
	  
	 val1=$($($(this).closest(".tbody").find(".tbodytr")[0]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val2=$($($(this).closest(".tbody").find(".tbodytr")[1]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val3=$($($(this).closest(".tbody").find(".tbodytr")[2]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val4=$($($(this).closest(".tbody").find(".tbodytr")[3]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val5=$($($(this).closest(".tbody").find(".tbodytr")[4]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val6=$($($(this).closest(".tbody").find(".tbodytr")[5]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val7=$($($(this).closest(".tbody").find(".tbodytr")[6]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val8=$($($(this).closest(".tbody").find(".tbodytr")[7]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val9=$($($(this).closest(".tbody").find(".tbodytr")[8]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val10=$($($(this).closest(".tbody").find(".tbodytr")[9]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val11=$($($(this).closest(".tbody").find(".tbodytr")[10]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
	val12=$($($(this).closest(".tbody").find(".tbodytr")[11]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val().replace(/,/g,'');
		
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
		if(isNaN(val2))
		{
			val2=0;
		}
		if(val3 == "")
		{
			val3=0;
		}
		if(isNaN(val3))
		{
			val3=0;
		}
		
		if(val4 == "")
		{
			val4=0;
		}
		if(isNaN(val4))
		{
			val4=0;
		}
		
		if(val5 == "")
		{
			val5=0;
		}
		if(isNaN(val5))
		{
			val5=0;
		}
		
		if(val6 == "")
		{
			val6=0;
		}
		if(isNaN(val6))
		{
			val6=0;
		}
		
		if(val7 == "")
		{
			val7=0;
		}
		if(isNaN(val7))
		{
			val7=0;
		}
		
		if(val8 == "")
		{
			val8=0;
		}
		if(isNaN(val8))
		{
			val8=0;
		}
		
		if(val9 == "")
		{
			val9=0;
		}
		if(isNaN(val9))
		{
			val9=0;
		}
		
		if(val10 == "")
		{
			val10=0;
		}
		if(isNaN(val10))
		{
			val10=0;
		}
		
		if(val11 == "")
		{
			val11=0;
		}
		if(isNaN(val11))
		{
			val11=0;
		}
		if(val12 == "")
		{
			val12=0;
		}
		if(isNaN(val12))
		{
			val12=0;
		}
		
	
		
		amt=parseFloat(val1)+parseFloat(val2)+parseFloat(val3)+parseFloat(val4)+parseFloat(val5)+parseFloat(val6)+parseFloat(val7)+parseFloat(val8)+parseFloat(val9)+parseFloat(val10)+parseFloat(val11)+parseFloat(val12);
		amt=CURINRCommaSep(parseFloat(amt).toFixed(0));
		$($($(this).closest(".tbody").find(".tbodytr")[12]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val(amt);
	
});
	
function Getbussiness()
{ 
var xml=UI_getdata("TYPEBUSINESS","","","","","LSW_SGETFINANCIALVAL");
$("#FLOW_TYPOBUSS").html("");
$("#FLOW_TYPOBUSS").append($(xml).find("RESULT").html());
$("#FLOW_TYPOBUSS").material_select(); 
}


function Product()
{
	
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#ABBL_SCHEMEID").val(),"","","","LSW_SGETLOANDET");
	$("#ABBL_LOANAMT").val($(xmlSTATUS).find('LOANAMOUNT').text());
	$("#ABBL_LOANINREST").val($(xmlSTATUS).find('INTERESTRATE').text());
	$("#ABBL_LOANTENT").val($(xmlSTATUS).find('TENTURE').text())
}
