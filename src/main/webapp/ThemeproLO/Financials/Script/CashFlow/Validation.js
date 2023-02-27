function SUBTRACTIONAMOUNT(MAINAMT,SUBAMT,TOTALFILED)
{
	var MAINAMT= $('#'+MAINAMT).val().replace(/,/g, "");
	var SUBAMT= $('#'+SUBAMT).val().replace(/,/g, "");
	
	if(MAINAMT=="")
	{
	MAINAMT=0	
	}
	if(SUBAMT=="")
	{
	SUBAMT=0	
	}
	var TOTAL=parseFloat(MAINAMT)-parseFloat(SUBAMT)
	$('#'+TOTALFILED).val(TOTAL)
	  $('#'+TOTALFILED).next().addClass('active');
	  
	TOTALASSCTCREATED();
}


function TOTALBILLEDAMT()
{
	var TotalAMOUNT=0
	var FiledAmount=0
	for(i=0;i<$("#Table4").find('.tbody').find('.tbodytr').length;i++)
	{
		FiledAmount=$("#CAGR_AMOUNT"+i).val().replace(/,/g, "");
		
		if(FiledAmount=="")
		{
			FiledAmount=0
		}
		TotalAMOUNT=parseFloat(TotalAMOUNT)+parseFloat(FiledAmount)
	}
	
	$("#CAFL_TOTALBILLAMOUT").val(TotalAMOUNT)
}


/* function GridControlDetailCASHMONTHGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
 
				 
					 { targets: 3, "render": function ( data, type, row, meta ) {                            
						 
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="CAGR_AMOUNT'+rowno+'" style="width:140px" name="CAGR_AMOUNT'+rowno+'" maxlength="40" onchange="TOTALBILLEDAMT()"  class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=CAGR_AMOUNT'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=CAGR_AMOUNT'+rowno+']').attr("value",data);
									$(htmldata).find('[name=CAGR_AMOUNT'+rowno+']').attr("value",data);
									$(htmldata).find('[name=CAGR_AMOUNT'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   				
					  } 
				 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
} */


function GridControlDetailCASHMONTHGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
 
				 { targets: 0, "render": function ( data, type, row, meta ) {                            
			 			
			 				var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="CASF_MONTH'+rowno+'" style="width:140px"  name="CASF_MONTH'+rowno+'" maxlength="40" disabled class="form-control IsNumberFieldsSpl DSVLBL GridMndtry  form-control Cashflow">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=CASF_MONTH'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=CASF_MONTH'+rowno+']').attr("value",data);
								return htmldata[0].outerHTML;   	
			 			
							
				         } 
						 },
						 { targets: 1, "render": function ( data, type, row, meta ) {                            
							 
								 var rowno = meta.row;	
								 var HTML = "";
                       /*       if(row[0] == "Total Bills validated")
						{
							HTML =	'<span><input type="text"  id="BNKG_AMOUNT'+rowno+'" style="width:160px"  name="BNKG_AMOUNT'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL"  maxlength="30" class="form-control NoSpecialChar IsCURCommaFields  form-control DSVLBL  BANKBASEDDTS">';	
						}			
                        else{
							}	 */
							
												
									var HTML =	'<span><input type="text" id="CASF_AMOUNT'+rowno+'" style="width:140px" name="CASF_AMOUNT'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control Cashflow">';			 
									HTML = HTML + '</span>'; 
						
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=CASF_AMOUNT'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=CASF_AMOUNT'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  		
						  } 
					 },
					 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
		
		
}

/* function Checkint(){
	var check=UI_getdata($("#PrcsID").val(),$("#CAFL_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#CAFL_INTERATE").val($(check).find ('INTERESTRATE').text());
	$("#CAFL_PROPOSEDTENU").val($(check).find ('TENTURE').text());
	 
} */
function Checkinst(){
	var check=UI_getdata($("#PrcsID").val(),$("#CAFL_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#CAFL_INTERATE").val($(check).find ('INTERESTRATE').text());
	$("#CAFL_PROPOSEDTENU").val($(check).find ('TENTURE').text());
	//$("#FLOW_LOANAMT").val($(check).find ('LOANAMOUNT').text());
	
}
/* function GetBusns(){
	var xml=UI_getdata("TYPEBUSINESS","","","","","LSW_SGETFINANCIALVAL");
    $("#CAFL_TYPEBUSINESS").html("");
	$("#CAFL_TYPEBUSINESS").append($(xml).find("RESULT").html());
	//$("#CAFL_TYPEBUSINESS").material_select(); 	
} */
function Getbussiness()
{ 
	var xml=UI_getdata("TYPEBUSINESS","","","","","LSW_SGETFINANCIALVAL");
    $("#CAFL_TYPEBUSINESS").html("");
    $("#CAFL_TYPEBUSINESS").append($(xml).find("RESULT").html());
    $("#CAFL_TYPEBUSINESS").material_select(); 
	 //$(".Cashflow").focusout();
}

/* function GetProp(){
	var xml=UI_getdata("PROPERTYTYPE","","","","","LSW_SGETFINANCIALVAL");
    $("#CAFL_TYPEPRO").html("");
	$("#CAFL_TYPEPRO").append($(xml).find("RESULT").html());
	//$("#CAFL_TYPEPRO").material_select(); 
} */
function getproperty(){
	var xml=UI_getdata("PROPERTYTYPE","","","","","LSW_SGETFINANCIALVAL");
    $("#CAFL_TYPEPRO").html("");
	$("#CAFL_TYPEPRO").append($(xml).find("RESULT").html());
	//$("#CAFL_TYPEPRO").material_select(); 
}

 function GetMarginVal()  
{
var Tybus=$("#CAFL_TYPEBUSINESS").val();
var result=UI_getdata("TYBUSIN",Tybus,"","","","LSW_SGETFINANCIALVAL");
$("#CAFL_MARGIN").val($(result).find("RESULT").text());
 $("#CAFL_MARGIN").next().addClass('active'); 
}

$(document).on("blur",".MULMAR",function(){
	 var mul=$("#CAFL_MARGIN").val().replace(/,/g,'');
	 var mul1=$("#CAFL_TOTALBILLAMOUT").val().replace(/,/g,'');
	 if(mul=='')
	{
		mul=0;
	}
	if(isNaN(mul))
	{
		mul=0;
	}
	 if(mul1=='')
	{
		mul1=0;
	}
	if(isNaN(mul1))
	{
		mul1=0;
	}
	 var mul2=parseFloat(mul)*parseFloat(mul1);
	 mul2=CURINRCommaSep(parseFloat(mul2).toFixed(0));
	 $("#CAFL_NETPROFIT").val(mul2);
	 $("#CAFL_NETPROFIT").next().addClass('active');
	 
})

$(document).on("blur",".MULDSR",function(){
	 var amul=$("#CAFL_NETPROFIT").val().replace(/,/g,'');
	 var amul1=$("#CAFL_DSR").val().replace(/,/g,'');
	 if(amul=='')
	{
		amul=0;
	}
	if(isNaN(amul))
	{
		amul=0;
	}
	 if(amul1=='')
	{
		amul1=0;
	}
	if(isNaN(amul1))
	{
		amul1=0;
	}
	 var amul2=parseFloat(amul)*parseFloat(amul1);
	 amul2=CURINRCommaSep(parseFloat(amul2).toFixed(0));
	 $("#CAFL_SURPLUSSERV").val(amul2);
	 $("#CAFL_SURPLUSSERV").next().addClass('active');
	 
})



$(document).on("blur",".SUBEMI",function(){
	 var sub=$("#CAFL_SURPLUSSERV").val().replace(/,/g,'');
	 var sub1=$("#CAFL_EXISTEMI").val().replace(/,/g,'');
	 if(sub=='')
	{
		sub=0;
	}
	if(isNaN(sub))
	{
		sub=0;
	}
	 if(sub1=='')
	{
		sub1=0;
	}
	if(isNaN(sub1))
	{
		sub1=0;
	}
	 var sub2=parseFloat(sub)-parseFloat(sub1);
	 sub2=CURINRCommaSep(parseFloat(sub2).toFixed(0));
	 
	 if(isNaN(sub2))
	{
		sub2=0;
	}
	 $("#CAFL_AVAILEMI").val(sub2);
	 $("#CAFL_AVAILEMI").next().addClass('active');
	 
	 //TWO TIMES OF ABB
	
	
	var check1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETABBDETAILS");
	var pro3=($(check1).find ('FINALABB').text());
	var pro4=2*parseFloat(pro3);
	 pro4=CURINRCommaSep(parseFloat(pro4).toFixed(0));
	 $("#CAFL_TWOTIMEABB").val(pro4);
	 $("#CAFL_TWOTIMEABB").next().addClass('active');
	 
	 //EMI PAID IN 12 MONTHS
	 
	var check2=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETABBDETAILS");
	var twice=($(check2).find ('EMIPAID').text());
	var twice2=2*parseFloat(twice);
	 twice2=CURINRCommaSep(parseFloat(twice2).toFixed(0));
	 $("#CAFL_MONTHEMI").val(twice2);
	 $("#CAFL_MONTHEMI").next().addClass('active');
	 
	 //MINIMUM OF AVAILABLE,TWO TIMES,EMI PAID 
	 
	var min1 =$("#CAFL_AVAILEMI").val().replace(/,/g,'');
	var min2=$("#CAFL_TWOTIMEABB").val().replace(/,/g,''); 
	var min3=$("#CAFL_MONTHEMI").val().replace(/,/g,''); 
	
	var Fund=Math.min((min1),(min2),(min3)); 
	
	 if(isNaN(Fund))
	{
		Fund=0;
	}
	Fund=CURINRCommaSep(parseFloat(Fund).toFixed(0));
	
	$("#CAFL_ADJUCTEMI").val(Fund);
	$("#CAFL_ADJUCTEMI").next().addClass('active'); 
	
	//EMI PER LAKH
	
	
/* 	var LonAt=100000;
	var ROI=0;
	var Tenur=0;
	//LnAt= $("#DMY3").val().split('|')[3];
	ROI=$("#CAFL_INTERATE").val();
	Tenur=$("#CAFL_PROPOSEDTENU").val();
	if(LonAt=='')
	{
		LonAt=0;
	}
	if(isNaN(LonAt))
	{
		LonAt=0;
	}
	if(ROI=='')
	{
		ROI=0;
	}
	if(isNaN(ROI))
	{
		ROI=0;
	}
	if(Tenur=='')
	{
		Tenur=0;
	}
	if(isNaN(Tenur))
	{
		Tenur=0;
	}
	var amt=0;
	amt=parseFloat(LonAt *((ROI/100)/12) * (Math.pow(1+((ROI/100)/12),Tenur)/((Math.pow(1+((ROI/100)/12),Tenur))-1)));
	$("#CAFL_EMI").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));

	$("#CAFL_EMI").next().addClass('active'); */ 
	
	var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#CAFL_INTERATE").val();
	Tenur=$("#CAFL_PROPOSEDTENU").val();
	 var result=UI_getdata(ROI,Tenur,LnAmt,"","","LSW_SGETEMI_DATA");
	 var EMI=$(result).find("EMI").text();
	 	if(EMI=='')
	{
		EMI=0;
	}
	if(isNaN(EMI))
		{
			EMI=0;
		}
	$("#CAFL_EMI").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#CAFL_EMI").next().addClass('active'); 
	
	 //LOAN ELIGIBILITY
	 
	var ProposedEMI=$("#CAFL_ADJUCTEMI").val().replace(/,/g,'');
	var EMIPerLakh=$("#CAFL_EMI").val().replace(/,/g,'');
	var TyPro=$("#CAFL_TYPEPRO").val();
	var result=UI_getdata("PROTYPE",TyPro,"","","","LSW_SGETFINANCIALVAL");
	var MarginVal=$(result).find("VALUE").text();
	var Proval=$("#CAFL_PROPVALUE").val().replace(/,/g,'');
	if(ProposedEMI=='')
	{
		ProposedEMI=0;
	}
	if(isNaN(ProposedEMI))
	{
		ProposedEMI=0;
	}
	if(ProposedEMI==Infinity)
	{
		ProposedEMI=0;
	}
	if(EMIPerLakh=='')
	{
		EMIPerLakh=0;
	}
	if(isNaN(EMIPerLakh))
	{
		EMIPerLakh=0;
	}
	if(EMIPerLakh==Infinity)
	{
		EMIPerLakh=0;
	}
	if(MarginVal=='')
	{
		
		MarginVal=0;
	}
	if(isNaN(MarginVal))
	{
		MarginVal=0;
	}
	if(MarginVal==Infinity)
	{
		MarginVal=0;
	}
	if(Proval=='')
	{
		Proval=0;
	}
	if(isNaN(Proval))
	{
		Proval=0;
	}
	if(Proval==Infinity)
	{
		Proval=0;
	}
	var  amt1=0,amt2=0,amt=0;
	amt2=parseFloat(MarginVal/100)*parseFloat(Proval);
	amt1=parseFloat(ProposedEMI)/parseFloat(EMIPerLakh)*100000;
	amt=Math.min(amt1,amt2);
	$("#CAFL_LOANELIGIBIL").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));
	$("#CAFL_LOANELIGIBIL").next().addClass('active'); 
	
	//PROPOSE LOAN
	
	var LoanAmt=0;
	var fn=0;
	LoanAmt= $("#DMY3").val().split('|')[3];
	var fn=Math.min($("#CAFL_LOANELIGIBIL").val().replace(/,/g,''),(LoanAmt));
	fn=CURINRCommaSep(parseFloat(fn).toFixed(0));
	$("#CAFL_PROPOSLOAN").val(fn);
	$("#CAFL_PROPOSLOAN").next().addClass('active');
	
	//FINAL LTV
	
	
	var l1=$("#CAFL_PROPOSLOAN").val().replace(/,/g,'');
	var l2=$("#CAFL_PROPVALUE").val().replace(/,/g,'');
	if(l1=='')
	{
		l1=0;
	}
	if(isNaN(l1))
	{
		l1=0;
	}
	if(l2=='')
	{
		l2=0;
	}
	if(isNaN(l2))
	{
		l2=0;
	}
		
	var l3=parseFloat(l1)/parseFloat(l2);
	l3=CURINRCommaSep(parseFloat(l3).toFixed(2));
	$("#CAFL_FINALLTV").val(l3);
	$("#CAFL_FINALLTV").next().addClass('active');
	 
	 
	 
	 
	 
})
   
   
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
	
		//amt=CURINRCommaSep(parseFloat(amt).toFixed(2));
		var avg=amt/12;
		$("#CAFL_AVERAGE").val(amt);
		$("#CAFL_AVERAGE").next().addClass('active'); 
		
		//
		/* 
		var Tybus=$("#FLOW_TYPEBUSS").val();
		var result=UI_getdata("TYBUSIN",Tybus,"","","","LSW_SGETFINANCIALVAL");
		$("#FLOW_GROSSPRO").val($(result).find("RESULT").text());
		$("#FLOW_GROSSPRO").next().addClass('active');	
	
		var eight=$("#FLOW_GROSSPRO").val();
		var temp=parseFloat(amt)*parseFloat(eight);
		if(isNaN(temp))
		{
			temp=0;
		}
		$("#FLOW_NETPROFIT").val(temp);
		$("#FLOW_NETPROFIT").next().addClass('active'); 
		var hunt=parseFloat(temp)*0.6;
		$("#FLOW_SALAPERMON").val(hunt);
		$("#FLOW_SALAPERMON").next().addClass('active'); 
		 */
		
		
		//$($($(this).closest(".tbody").find(".tbodytr")[12]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".Cashflow").val(amt);

		
		
		
		var chk=UI_getdata($("#PrcsID").val(),$("#FLOW_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
		var fnchk=($(chk).find('PRODUCT').text());
		
			var INDUS=$("#CAFL_MARGIN").val().replace(/,/g,'');
			var NETPROFT=parseFloat(avg)*parseFloat(INDUS)/100;
			$("#CAFL_NETPROFIT").val(CURINRCommaSep(parseFloat(NETPROFT).toFixed(2)));
			$("#CAFL_NETPROFIT").next().addClass('active');
			Chkproflow();
		
});

function Chkproflow()
{
	//DST 60% CASH FLOW
	var IEleven=$("#CAFL_NETPROFIT").val().replace(/,/g,'');
	if(IEleven=='')
	{
	IEleven=0;
	}
	var Eleresult=parseFloat(IEleven)*60/100;
	if(isNaN(Eleresult))
	{
	  Eleresult=0;
	}
     if(Eleresult==Infinity)
	 {
		 Eleresult=0;
	 }		 
	//Eleresult=CURINRCommaSep(parseFloat(Eleresult).toFixed(2));	
	$("#CAFL_DSR").val('60');
	$("#CAFL_DSR").next().addClass('active');
	
	$("#CAFL_SURPLUSSERV").val(Eleresult);
	$("#CAFL_SURPLUSSERV").next().addClass('active');
	EMIOBILIFLOW();
	
	
	
}
function EMIOBILIFLOW()
{
		var SURPLUS=$("#CAFL_SURPLUSSERV").val().replace(/,/g,'');
		var EXISTEMI=$("#CAFL_EXISTEMI").val().replace(/,/g,'');
		if(SURPLUS=='')
		{
			SURPLUS=0;
		}
		if(EXISTEMI=='')
		{
			EXISTEMI=0;
		}
		
		var TOTAL=parseFloat(SURPLUS)-parseFloat(EXISTEMI);
		if(isNaN(TOTAL))
		{
			TOTAL=0;
		}
		
		$("#CAFL_AVAILEMI").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
		$("#CAFL_AVAILEMI").next().addClass('active');
		
		//2 TIMES ABB FLOW
		
		var ABB=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETABBDETAILS");
		var ABBVAL=($(ABB).find ('FINALABB').text());
		if(ABBVAL=='')
		{
			ABBVAL=0;
		}
		
		FINABB=2*parseFloat(ABBVAL);
		if(isNaN(FINABB))
		{
			FINABB=0;
		}
		
		$("#CAFL_TWOTIMEABB").val(CURINRCommaSep(parseFloat(FINABB).toFixed(2)));
		$("#CAFL_TWOTIMEABB").next().addClass('active');
		
		//12 MONTHS OF EMI TRACKER FLOW
		
		var twice=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETABBDETAILS");
		var twice1=($(twice).find ('EMIPAID').text());
		if(twice1=='')
		{
			twice1=0;
		}
		
		var mulrecrd=2*parseFloat(twice1);

		if(isNaN(mulrecrd))
		{
			mulrecrd=0;
		}
		mulrecrd=CURINRCommaSep(parseFloat(mulrecrd).toFixed(2));
		$("#CAFL_MONTHEMI").val(mulrecrd);
		$("#CAFL_MONTHEMI").next().addClass('active'); 
		
		//ADJUSTED FUND EMI FLOW
		
		var adjust=$("#CAFL_AVAILEMI").val().replace(/,/g,'');
		var adjust1=$("#CAFL_TWOTIMEABB").val().replace(/,/g,'');
		var adjust2=$("#CAFL_MONTHEMI").val().replace(/,/g,'');
			
		if(adjust=='')
		{
		adjust=0;
		}	
		if(adjust1=='')
		{
		adjust1=0;
		}	
		if(adjust2=='')
		{
		adjust2=0;
		}	
		
		var finladjust=Math.min((adjust),(adjust1),(adjust2));
		if(isNaN(finladjust))
		{
		finladjust=0;
		}
		FINAL=CURINRCommaSep(parseFloat(finladjust).toFixed(2));
		
		$("#CAFL_ADJUCTEMI").val(FINAL);
		$("#CAFL_ADJUCTEMI").next().addClass('active'); 
		
		
		//EMI PER LAKH FLOW
		
		var LnAmt=100000; 
		var ROI=0;
		var Tenur=0; 
		ROI=$("#CAFL_INTERATE").val();
		Tenur=$("#CAFL_PROPOSEDTENU").val();
		if(ROI=='')
		{
		ROI=0;
		}	
		if(Tenur=='')
		{
		Tenur=0;
		}
		var result=UI_getdata(ROI,Tenur,LnAmt,"","","LSW_SGETEMI_DATA");
		var EMI=$(result).find("EMI").text();
	
		if(isNaN(EMI))
		{
		EMI=0;
		}
		$("#CAFL_EMI").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
		$("#CAFL_EMI").next().addClass('active'); 
		
		//LOAN ELIGIBILITY
	
		var ad=$("#CAFL_MONTHEMI").val().replace(/,/g,'');
		var ad1=$("#CAFL_ADJUCTEMI").val().replace(/,/g,'');
		var ad2=$("#CAFL_EMI").val().replace(/,/g,'');
		var PROVAL=$("#CAFL_PROPVALUE").val().replace(/,/g,'');
		var INDUSMAR=$("#CAFL_MARGIN").val().replace(/,/g,'');		
		var TyPro=$("#CAFL_TYPEPRO").val();
		var result=UI_getdata("PROTYPE",TyPro,"","","","LSW_SGETFINANCIALVAL");
		var MarginVal=$(result).find("VALUE").text();
		
		if(ad=='')
		{
		ad=0;
		}	
		if(ad1=='')
		{
		ad1=0;
		}	
		if(ad2=='')
		{
		ad2=0;
		}	
		
		var firstmin=parseFloat(ad1)/parseFloat(ad2)*100000;
		
		
		var secondmin=parseFloat(PROVAL)*parseFloat(MarginVal)
		var finalmin=Math.min((firstmin),(secondmin));
		if(isNaN(finalmin))
		{
		finalmin=0;
		}
		if(finalmin==Infinity)
		{
			finalmin=0;
		}
		//finladjust=CURINRCommaSep(parseFloat(finladjust).toFixed(2));
		$("#CAFL_LOANELIGIBIL").val(CURINRCommaSep(parseFloat(finalmin).toFixed(2)));
		$("#CAFL_LOANELIGIBIL").next().addClass('active'); 
		
		
		//PROPOSED LOAN
		
		var LNAMT=UI_getdata($("#PrcsID").val(),$("#CAFL_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	//$("#FLOW_PROINTRATE").val($(check).find ('LOANAMOUNT').text());
	
		var LOANELI=$("#CAFL_LOANELIGIBIL").val().replace(/,/g,'');
		//var LOANAMT=$("#FLOW_LOANAMT").val().replace(/,/g,'');
		
		var LOANAMT=$(LNAMT).find ('LOANAMOUNT').text().replace(/,/g,'');
		
		if(LOANELI=='')
		{
		LOANELI=0;
		}
		if(LOANAMT=='')
		{
		LOANAMT=0;
		}
		var FINALPRO=Math.min((LOANELI),(LOANAMT));
		if(isNaN(FINALPRO))
		{
			FINALPRO=0;
		}
		if(FINALPRO==Infinity)
		{
			FINALPRO=0;
		}
		$("#CAFL_PROPOSLOAN").val(CURINRCommaSep(parseFloat(FINALPRO).toFixed(2)));
		$("#CAFL_PROPOSLOAN").next().addClass('active'); 
		
		
		
		
		//FINAL LTV
		
		var PROPOSELN=$("#CAFL_PROPOSLOAN").val().replace(/,/g,'');
		var PROPERVAL=$("#CAFL_PROPVALUE").val().replace(/,/g,'');
		
		if(PROPOSELN=='')
		{
		PROPOSELN=0;
		}
		if(PROPERVAL=='')
		{
		PROPERVAL=0;
		}
		
		var FINALLTV=parseFloat(PROPOSELN)/parseFloat(PROPERVAL)*100;
		if(isNaN(FINALLTV))
		{
			FINALLTV=0;
		}
		IF(FINALLTV==Infinity)
		{
			FINALLTV=0;
		}
		$("#CAFL_FINALLTV").val(CURINRCommaSep(parseFloat(FINALLTV).toFixed(2)));
		$("#CAFL_FINALLTV").next().addClass('active'); 
		
}
