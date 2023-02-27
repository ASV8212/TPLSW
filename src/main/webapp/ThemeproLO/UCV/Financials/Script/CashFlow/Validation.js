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


function GridControlDetailCASHFLOWGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
}


function Checkint(){
	var check=UI_getdata($("#PrcsID").val(),$("#CAFL_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#CAFL_INTERATE").val($(check).find ('INTERESTRATE').text());
	$("#CAFL_PROPOSEDTENU").val($(check).find ('TENTURE').text());
	 
}

function GetBusns(){
	var xml=UI_getdata("TYPEBUSINESS","","","","","LSW_SGETFINANCIALVAL");
    $("#CAFL_TYPEBUSINESS").html("");
	$("#CAFL_TYPEBUSINESS").append($(xml).find("RESULT").html());
	//$("#CAFL_TYPEBUSINESS").material_select(); 	
}


function GetProp(){
	var xml=UI_getdata("PROPERTYTYPE","","","","","LSW_SGETFINANCIALVAL");
    $("#CAFL_TYPEPRO").html("");
	$("#CAFL_TYPEPRO").append($(xml).find("RESULT").html());
	//$("#CAFL_TYPEPRO").material_select(); 
}

 function GetMarginValue()  
{
var Tybus=$("#CAFL_TYPEBUSINESS").val();
var result=UI_getdata("INDUS",Tybus,"","","","LSW_SGETFINANCIALVAL");
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
	if(EMIPerLakh=='')
	{
		EMIPerLakh=0;
	}
	if(isNaN(EMIPerLakh))
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
	if(Proval=='')
	{
		Proval=0;
	}
	if(isNaN(Proval))
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

