
/* function Handle()
{
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#NBNK_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS")
	$("#NBNK_PROINTRATE").val($(xmlSTATUS).find('INTERESTRATE').text())
	$("#NBNK_PROTENTURE").val($(xmlSTATUS).find('TENTURE').text())
	
	
} */




function Checkinst(){
	var check=UI_getdata($("#PrcsID").val(),$("#NBNK_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#NBNK_PROINTRATE").val($(check).find ('INTERESTRATE').text());
	$("#NBNK_PROTENTURE").val($(check).find ('TENTURE').text());
}

/* $(document).on("blur",".EMIPERLAK",function(){  
var LnAmt=100000; 
var ROI=0;
var Tenur=0; 
ROI=$("#NBNK_PROINTRATE").val();
Tenur=$("#NBNK_PROTENTURE").val();
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
$("#OUBL_EMILAKH").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
$("#OUBL_EMILAKH").next().addClass('active'); 

}) */

/* function GridControlDetailCASHNBNKGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
							var HTML =	'<span><input type="text" id="CASH_MONTH'+rowno+'" style="width:140px"  name="CASH_MONTH'+rowno+'" maxlength="40" class="form-control IsNumberFieldsSpl  GridMndtry IsCURCommaFields form-control CashNBNK">';			 
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
						 { targets: 1, "render": function ( data, type, row, meta ) {                            
							 
								 var rowno = meta.row;	
								 var HTML = "";
                   /*          if(row[0] == "Total Bills validated")
						{
							HTML =	'<span><input type="text"  id="CASH_AMOUNT'+rowno+'" style="width:160px"  name="CASH_AMOUNT'+rowno+'" data-item="Amount" data-itemr="Amount" data-totalr="ITRVAL"  maxlength="30" class="form-control NoSpecialChar IsCURCommaFields  form-control DSVLBL  CashNBNK">';	
						}			
                        else{
						}							*/
							
												
						/* 			var HTML =	'<span><input type="text" id="CASH_AMOUNT'+rowno+'" style="width:140px" name="CASH_AMOUNT'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control CashNBNK">';			 
									HTML = HTML + '</span>'; 
						
										 
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
        }); */ 
		
		
 function GridControlDetailNONBANKGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
							var HTML =	'<span><input type="text" id="NBMO_MONTH'+rowno+'" style="width:140px"  name="NBMO_MONTH'+rowno+'" maxlength="40" disabled class="form-control IsNumberFieldsSpl DSVLBL GridMndtry  form-control CashNBNK">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								
							if ($(htmldata).find('[name=NBMO_MONTH'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								$(htmldata).find('[name=NBMO_MONTH'+rowno+']').attr("value",data);
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
							
												
									var HTML =	'<span><input type="text" id="NBMO_AMOUNT'+rowno+'" style="width:140px" name="NBMO_AMOUNT'+rowno+'" maxlength="40" class="form-control IsCURCommaFields GridMndtry IsNumberFieldsSpl  form-control CashNBNK">';			 
									HTML = HTML + '</span>'; 
						
										 
									var htmldata = $(HTML);
										
									if ($(htmldata).find('[name=NBMO_AMOUNT'+rowno+']').hasClass("IsCURCommaFields"))
										{
										data = CURCommaSep(data);
										}
										$(htmldata).find('[name=NBMO_AMOUNT'+rowno+']').attr("value",data);
										return htmldata[0].outerHTML;  		
						  } 
					 },
					 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
		
		
}
	
	$(document).on("blur", ".CashNBNK", function() {
		var amt=0,val1=0,val2=0,val3=0,val4=0,val5=0,val6=0,val7=0,val8=0,val9=0,val10=0,val11=0,val12=0;
	  
	 val1=$($($(this).closest(".tbody").find(".tbodytr")[0]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val2=$($($(this).closest(".tbody").find(".tbodytr")[1]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val3=$($($(this).closest(".tbody").find(".tbodytr")[2]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val4=$($($(this).closest(".tbody").find(".tbodytr")[3]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val5=$($($(this).closest(".tbody").find(".tbodytr")[4]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val6=$($($(this).closest(".tbody").find(".tbodytr")[5]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val7=$($($(this).closest(".tbody").find(".tbodytr")[6]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val8=$($($(this).closest(".tbody").find(".tbodytr")[7]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val9=$($($(this).closest(".tbody").find(".tbodytr")[8]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val10=$($($(this).closest(".tbody").find(".tbodytr")[9]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val11=$($($(this).closest(".tbody").find(".tbodytr")[10]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
	val12=$($($(this).closest(".tbody").find(".tbodytr")[11]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val().replace(/,/g,'');
		
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
		
		$("#NBNK_AVERAGE").val(amt);
		$("#NBNK_AVERAGE").next().addClass('active');
		$("#NBNK_TYPEBUSS").val('');
		$("#NBNK_TYPEBUSS").material_select('');
		/* 
		var Tybus=$("#NBNK_TYPEBUSS").val();
		var result=UI_getdata("TYBUSIN",Tybus,"","","","LSW_SGETFINANCIALVAL");
		$("#NBNK_GROSSPRO").val($(result).find("RESULT").text());
		$("#NBNK_GROSSPRO").next().addClass('active');	
	
		var eight=$("#NBNK_GROSSPRO").val();
		var temp=parseFloat(amt)*parseFloat(eight);
		if(isNaN(temp))
		{
			temp=0;
		}
		$("#NBNK_NETPROFIT").val(temp);
		$("#NBNK_NETPROFIT").next().addClass('active'); 
		var hunt=parseFloat(temp)*0.6;
		$("#NBNK_SALAPERMON").val(hunt);
		$("#NBNK_SALAPERMON").next().addClass('active'); 
		 */
		
		
		//$($($(this).closest(".tbody").find(".tbodytr")[12]).find(".tbodytrtd")[$(this).closest(".tbodytrtd").index()]).find(".CashNBNK").val(amt);

		//var Chkamt=amt;//.replace(/,/g,'');
		
});
	
function Getbussiness()
{ 
	var xml=UI_getdata("TYPEBUSINESS1","","","","","LSW_SGETFINANCIALVAL");
    $("#NBNK_TYPEBUSS").html("");
    $("#NBNK_TYPEBUSS").append($(xml).find("RESULT").html());
    $("#NBNK_TYPEBUSS").material_select(); 
}

function Chkprofit()
{


		var Chkamt=$("#NBNK_AVERAGE").val();
		var TyPro=$("#NBNK_TYPEBUSS").val();
		var Gross=UI_getdata("TYPEBUSINESS1",TyPro,"","","","LSW_SGETFINANCIALVAL");
		var Total=parseFloat($(Gross).find("MARGIN").text());
		var AmtTotal=0;
		if(Total==15)
		{
			AmtTotal=Chkamt*15/100
		}
		else if(Total==10)
		{
			AmtTotal=Chkamt*10/100
		}
		else if(Total==20)
		{
			AmtTotal=Chkamt*20/100
		}
		else if(Total==12)
		{
			AmtTotal=Chkamt*12/100
		}
		else if(Total==8)
		{
			AmtTotal=Chkamt*8/100
		}else if(Total==7)
		{
			AmtTotal=Chkamt*7/100
		}else if(Total==5)
		{
			AmtTotal=Chkamt*5/100
		}else if(Total==4)
		{
			AmtTotal=Chkamt*4/100
		}
		else
		{
			AmtTotal=Total
		}
		if(isNaN(AmtTotal))
		{
		AmtTotal=0;
		}
		
		AmtTotal=CURINRCommaSep(parseFloat(AmtTotal).toFixed(2));
		$("#NBNK_GROSSPRO").val(AmtTotal);
		$("#NBNK_GROSSPRO").next().addClass('active'); 
		
		var I7=$("#NBNK_GROSSPRO").val().replace(/,/g,'');
		var ResultI7=parseFloat(I7)/12;
		if(isNaN(ResultI7))
		{
		ResultI7=0;
		}
		ResultI7=CURINRCommaSep(parseFloat(ResultI7).toFixed(2));
		$("#NBNK_GROSSPROMON").val(ResultI7);
		$("#NBNK_GROSSPROMON").next().addClass('active'); 
		




	var IEight=$("#NBNK_GROSSPROMON").val().replace(/,/g,'');
	var INine=$("#NBNK_RENTPERMON").val().replace(/,/g,'');
	var ITen=$("#NBNK_SALAPERMON").val().replace(/,/g,'');
	var OTHFIXCOST=$("#NBNK_OTHFIXCOST").val().replace(/,/g,'');
	if(IEight=='')
	{
	IEight=0;
	}
	if(INine=='')
	{
	INine=0;
	}
	if(ITen=='')
	{
	ITen=0;
	}
	if(OTHFIXCOST=='')
	{
	OTHFIXCOST=0;
	}
	var Subt1=parseFloat(IEight)-parseFloat(INine)-parseFloat(ITen)-parseFloat(OTHFIXCOST);
	//var Subt1=parseFloat(OTHFIXCOST)-parseFloat(ITen)-parseFloat(INine)-parseFloat(IEight);
	//var Subt2=parseFloat(ITen)-parseFloat(OTHFIXCOST);
	//var Result=parseFloat(Subt2)-parseFloat(Subt1);
	if(isNaN(Subt1))
	{
	Subt1=0;
	}
	Subt1=CURINRCommaSep(parseFloat(Subt1).toFixed(2));
	$("#NBNK_NETPROFIT").val(Subt1);
	$("#NBNK_NETPROFIT").next().addClass('active');
	
	//DSR 60%
	
	var IEleven=$("#NBNK_NETPROFIT").val().replace(/,/g,'');
	if(IEleven=='')
	{
	IEleven=0;
	}
	var Eleresult=parseFloat(IEleven)*60/100;
	if(isNaN(Eleresult))
	{
	  Eleresult=0;
	}	
	Eleresult=CURINRCommaSep(parseFloat(Eleresult).toFixed(2));	
	$("#NBNK_DSR").val(Eleresult);
	$("#NBNK_DSR").next().addClass('active');
	//Existemi();
	//$(".CashNBNK").focusout();
	Existemi();
}

function Existemi()
{
	var IThirtn=$("#NBNK_DSR").val().replace(/,/g,'');
	var IFourtn=$("#NBNK_EXISTEMIOBLI").val().replace(/,/g,'');
	
	if(IThirtn=='')
	{
	IThirtn=0;
	}	
	if(IFourtn=='')
	{
	IFourtn=0;
	}
	var Res=parseFloat(IThirtn)-parseFloat(IFourtn);
	if(isNaN(Res))
	{
	Res=0;
	}	
	
	Res=CURINRCommaSep(parseFloat(Res).toFixed(2));	
	$("#NBNK_AVALFUND").val(Res);
	$("#NBNK_AVALFUND").next().addClass('active');
	
	//90% ABB
	
	/*var check1=UI_getdata($("#PrcsID").val(),$("#NBNK_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	var pro3=($(check1).find('PRODUCT').text());	
	var check=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETABBDETAILS");
	var pro=($(check).find ('FINALABB').text());
	var LnAt=0;
	LnAt= $("#DMY3").val().split('|')[0].replace(/,/g,'');
	
	var pro4=0;
	if(pro3=='T201')
	{
	   pro4=90/100*parseFloat(pro);
	}
	else if (parseFloat(LnAt)<=1500000)
	{
		 pro4=2*parseFloat(pro);
	}
	else if(parseFloat(LnAt)>1500000)
	{
		 pro4=1.25*parseFloat(pro);
	}

   if(pro4=="")
   {
	  pro4=0;
   }

	pro4=CURINRCommaSep(parseFloat(pro4).toFixed(2));
	$("#NBNK_ABB").val(pro4);
	$("#NBNK_ABB").next().addClass('active'); */
	
	//TWICE OF TRACK RECORD

	/*var twice=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETABBDETAILS");
	var twice1=($(twice).find ('EMIPAID').text());
	var mulrecrd=2*parseFloat(twice1);

	mulrecrd=CURINRCommaSep(parseFloat(mulrecrd).toFixed(2));
	$("#NBNK_EMITRACK").val(mulrecrd);
	$("#NBNK_EMITRACK").next().addClass('active'); */
	
	//ADJUST FUND 
/*
	var adjust=$("#NBNK_AVALFUND").val().replace(/,/g,'');
	var adjust1=$("#NBNK_ABB").val().replace(/,/g,'');
	var adjust2=$("#NBNK_EMITRACK").val().replace(/,/g,'');
		
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

	if(adjust2>8400)
	{	
		var finladjust=Math.min((adjust),(adjust2));
	}
	else
	{
		var finladjust=Math.min((adjust),(adjust1));
	}
	
		
	if(isNaN(finladjust))
	{
	finladjust=0;
	}	
	finladjust=CURINRCommaSep(parseFloat(finladjust).toFixed(2));
	$("#NBNK_FUNDEMI").val(finladjust);
	$("#NBNK_FUNDEMI").next().addClass('active'); 
*/	
	//EMI PER LAKH
	
	var LnAmt=100000; 
	var ROI=0;
	var Tenur=0; 
	ROI=$("#NBNK_PROINTRATE").val();
	Tenur=$("#NBNK_PROTENTURE").val();
	if(ROI=='')
	{
	ROI=0;
	}	
	if(Tenur=='')
	{
	Tenur=0;
	}
	var result=UI_getdata(ROI,Tenur,LnAmt,$("#PrcsID").val()+'|'+$(".FormPageMultiTab li.active").attr("id"),"","LSW_SGETEMI_DATA");
	var EMI=$(result).find("EMI").text();

	if(isNaN(EMI))
	{
	EMI=0;
	}
	$("#NBNK_EMIPERLAKH").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#NBNK_EMIPERLAKH").next().addClass('active'); 
	
	//LOAN ELIGIBILITY
	
	//var ad=$("#NBNK_EMITRACK").val().replace(/,/g,'');
	var ad1=$("#NBNK_AVALFUND").val().replace(/,/g,'');
	var ad2=$("#NBNK_EMIPERLAKH").val().replace(/,/g,'');
	/*if(ad=='')
	{
	ad=0;
	}*/	
	if(ad1=='')
	{
	ad1=0;
	}	
	if(ad2=='')
	{
	ad2=0;
	}	
	
	var first=parseFloat(ad1)/parseFloat(ad2)*100000;
	if(parseFloat(first)<100000)
	{
		first=0;
	}
	else
	{
		first=parseFloat(ad1)/parseFloat(ad2)*100000;
	}
	
	var firstmin=Math.min((first),200000);
	/*var firstmin=parseFloat(ad1)/parseFloat(ad2);
	if(ad<8400)
	{	
		var finladjust=Math.min((firstmin),200000);
	}
	else
	{
		var finladjust=Math.min((firstmin),500000);
	}*/
	
		
	if(isNaN(firstmin))
	{
	firstmin=0;
	}
	firstmin=CURINRCommaSep(parseFloat(firstmin).toFixed(2));
	$("#NBNK_LOANEGBLAKH").val(firstmin);
	$("#NBNK_LOANEGBLAKH").next().addClass('active'); 


}

 /*   function getproperty()
	{
		var xml=UI_getdata("Property","","","","","LSW_SGETPRODVAL");
        $("#NBNK_PROPERTY").html("");
	    $("#NBNK_PROPERTY").append($(xml).find("RESULT").html());	
	}   */
	
  function GetMarginVal()  
    {
	var Tybus=$("#NBNK_TYPEBUSS").val();
	var result=UI_getdata("TYBUSIN",Tybus,"","","","LSW_SGETFINANCIALVAL");
	$("#NBNK_GROSSPRO").val($(result).find("RESULT").text());
	$("#NBNK_GROSSPRO").next().addClass('active');	 	
	//GetNetProfit();
	}
  
