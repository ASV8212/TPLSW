/* function SUBTRACTIONAMOUNT(MAINAMT,SUBAMT,TOTALFILED)
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
 */
function Product()
{
	//var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#RCCM_SCHEME").val(),"","","","LSW_SGETLOANDETAILS")
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#FOGS_SCHEMEID").val(),"","","","LSW_SGETLOANDET");
	$("#FOGS_PRODUCT").val($(xmlSTATUS).find('PRODUCT').text());
	$("#FOGS_PRDNAME").val($(xmlSTATUS).find('PRDNAME').text());
	$("#FOGS_APPROI").val($(xmlSTATUS).find('INTERESTRATE').text());
	$("#FOGS_TENURE").val($(xmlSTATUS).find('TENTURE').text())
}

/* 
function TOTALASSCTCREATED()
{
	var ASST_GOLD= $('#ASST_GOLD').val().replace(/,/g, "");
	var ASST_POSTALDEP= $('#ASST_POSTALDEP').val().replace(/,/g, "");
	var ASST_MUTUALFUND= $('#ASST_MUTUALFUND').val().replace(/,/g, "");
	var ASST_INSUPOLICY= $('#ASST_INSUPOLICY').val().replace(/,/g, "");
	 
	 var ASST_VEHICLEASSETS= $('#ASST_VEHICLEASSETS').val().replace(/,/g, "");
	 var ASST_HOUSEASSETES= $('#ASST_HOUSEASSETES').val().replace(/,/g, "");
	 var ASST_HOUSRENVASSETES= $('#ASST_HOUSRENVASSETES').val().replace(/,/g, "");
	 
	 if(ASST_GOLD=="")
	{
	ASST_GOLD=0	
	}
	
	if(ASST_POSTALDEP=="")
	{
	ASST_POSTALDEP=0	
	}
	
	if(ASST_MUTUALFUND=="")
	{
	ASST_MUTUALFUND=0	
	}
	
	if(ASST_INSUPOLICY=="")
	{
	ASST_INSUPOLICY=0	
	}
	if(ASST_VEHICLEASSETS=="")
	{
	ASST_VEHICLEASSETS=0	
	}
	
	
	if(ASST_HOUSEASSETES=="")
	{
	ASST_HOUSEASSETES=0	
	}
	
	
	if(ASST_HOUSRENVASSETES=="")
	{
	ASST_HOUSRENVASSETES=0	
	}
	
var TOTAL=parseFloat(ASST_GOLD)+parseFloat(ASST_POSTALDEP)
+parseFloat(ASST_MUTUALFUND)+parseFloat(ASST_INSUPOLICY)
+parseFloat(ASST_VEHICLEASSETS)+parseFloat(ASST_HOUSEASSETES)
+parseFloat(ASST_HOUSRENVASSETES)

var MONTHCONTRI=parseFloat(TOTAL)/36


	$('#ASST_TOTALASSETS').val(TOTAL)
    $('#ASST_TOTALASSETS').next().addClass('active');
	
	$('#ASST_MONTHCONTR').val(MONTHCONTRI)
    $('#ASST_MONTHCONTR').next().addClass('active');
} */


	function  GetSector(){ 
	var check=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSECDETAILS");  
	$("#FOGS_BUSINESSTYE").val($(check).find ('SECTOR').text()); 
	$("#FOGS_INDGROUP").val($(check).find ('INDUSCAT').text()); 
	$("#FOGS_SUBINSTGROUP").val($(check).find ('NATUREBUSIN').text()); 
	
     $("#FOGS_BUSINESSTYE").attr('disabled',true); 
     $("#FOGS_INDGROUP").attr('disabled',true); 
     $("#FOGS_SUBINSTGROUP").attr('disabled',true); 
}


	function  GetMarginVal(){ 
	
	var check=UI_getdata("MARGINVAL",$("#FOGS_INDGROUP").val(),$("#FOGS_SUBINSTGROUP").val(),$("#FOGS_BUSINESSTYE").val(),"","LSW_SGETPRODVAL");  
	var INDUS=$(check).find ('RESULT').text()
	
	$("#FOGS_INDMARGIN").val(parseFloat(INDUS).toFixed(2));  
    $("#FOGS_INDMARGIN").attr('disabled',true); 

	} 
 function FoirGst(){
	    //Gross Profit	
		var PAT=$("#FOGS_PAT").val().replace(/,/g,'');
		var DEP=$("#FOGS_DEP").val().replace(/,/g,'');
		var INTERPAID=$("#FOGS_INTERPAID").val().replace(/,/g,'');
		var RENUM=$("#FOGS_RECUMPARTENER").val().replace(/,/g,'');
		var OTHERIN=$("#FOGS_OTHERINCOME").val().replace(/,/g,'');
		var INDITAX=$("#FOGS_INDTAXI").val().replace(/,/g,''); 
		if(PAT=='')
		{
			PAT=0;
		}
		if(DEP=='')
		{
			DEP=0;
		}
		if(INTERPAID=='')
		{
			INTERPAID=0;
		}
		if(RENUM=='')
		{
			RENUM=0;
		}
		if(OTHERIN=='')
		{
			OTHERIN=0;
		}
		if(INDITAX=='')
		{
			INDITAX=0;
		} 
		var GROSSPROF1=parseFloat(parseFloat(parseFloat(PAT)+parseFloat(DEP))*2);
		var GROSSPROF2=parseFloat(parseFloat(parseFloat(RENUM)+parseFloat(OTHERIN))*(75/100));
		var GROSSPROF=parseFloat(GROSSPROF1)+parseFloat(INTERPAID)+parseFloat(GROSSPROF2)- parseFloat(INDITAX);
		if(isNaN(GROSSPROF))
		{
			GROSSPROF=0;
		}
		$("#FOGS_GROSSPROFIT").val(CURINRCommaSep(parseFloat(GROSSPROF).toFixed(2)));
			 $("#FOGS_GROSSPROFIT").next().addClass('active');
		//Gross Margin	
	    var GROSSMAR=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETGROSSMARGIN");
		$("#FOGS_INDTAX").val(CURINRCommaSep(parseFloat($(GROSSMAR).find ('RESULT').text())));
			 $("#FOGS_INDTAX").next().addClass('active');
	     var   GROSSMARGIN1= $(GROSSMAR).find ('RESULT').text();
		// var GROSSMARGIN1=2354345;
		 
		 if(GROSSMARGIN1=='')
		 {
			 GROSSMARGIN1=0;
		 }
		 
		 var GROSSMARGIN= parseFloat(GROSSPROF)/parseFloat(GROSSMARGIN1); 
		 if(isNaN(GROSSMARGIN))
		 {
			 GROSSMARGIN=0;
		 }
		 GROSSMARGIN=GROSSMARGIN*100;
		 $("#FOGS_GROSSMARGIN").val(parseFloat(GROSSMARGIN).toFixed(2));  
		 $("#FOGS_GROSSMARGIN").next().addClass('active');
		  
		 var INDUSMARGIN=$("#FOGS_INDMARGIN").val(); 
		  if(INDUSMARGIN=='')
		 {
			 INDUSMARGIN=0;
		 }
		// Applicable Margin 
		 var APPLMARGIN=parseFloat(Math.min(INDUSMARGIN,GROSSMARGIN)); 
		 if(isNaN(APPLMARGIN))
		 {
			 APPLMARGIN=0;
		 } 
		 $("#FOGS_APPLMARGIN").val(CURINRCommaSep(parseFloat(APPLMARGIN).toFixed(2)));
		 $("#FOGS_APPLMARGIN").next().addClass('active');
		  
		 //Applicable profit
		   var GSTSALES1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETGSTSALES");
	       var GSTSALES= $(GSTSALES1).find ('GSTSALES').text();
		   if(GSTSALES=='')
		 {
			 GSTSALES=0;
		 }
		  
			var APPLPROFIT=parseFloat(parseFloat(GSTSALES)*parseFloat(APPLMARGIN/100));
		 if(isNaN(APPLPROFIT))
		 {
			 APPLPROFIT=0;
		 }   
		 
		  $("#FOGS_APPLPROFIT").val(CURINRCommaSep(parseFloat(APPLPROFIT).toFixed(2)));
		 $("#FOGS_APPLPROFIT").next().addClass('active');
		 
		 //FOIR applied eligible income (Monthly)
		 var APPLIPROFIT=$("#FOGS_APPLPROFIT").val().replace(/,/g,'');
		 var FOIR=$("#FOGS_FOIR").val();
		  if(APPLIPROFIT=='')
		 {
			 APPLIPROFIT=0;
		 }
		  if(FOIR=='')
		 {
			 FOIR=0;
		 }
		  var FOIRMONTH=parseFloat(parseFloat(parseFloat(APPLIPROFIT)*parseFloat(FOIR/100))/12);
			 if(isNaN(FOIRMONTH))
		 {
			 FOIRMONTH=0;
		 }  
		 $("#FOGS_FOIRMONTH").val(CURINRCommaSep(parseFloat(FOIRMONTH).toFixed(2)));
		  $("#FOGS_FOIRMONTH").next().addClass('active');
		  
		  //Existing EMI + Interest on Borrowed fund excluding related party 
		  
		 var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETEMIAMOUNT")
          var EXISEMI=$(xmlSTATUS).find('AMOUNT').text();		 
		  if(EXISEMI=='')
		 {
			 EXISEMI=0;
		 }
		 if(isNaN(EXISEMI))
		 {
			 EXISEMI=0;
		 } 
		$("#FOGS_EXISTEMI").val(CURINRCommaSep(parseFloat(EXISEMI).toFixed(2)));
		   $("#FOGS_EXISTEMI").next().addClass('active');
		
		//Pre funding FCF
         var PREFUNDFCF=parseFloat(parseFloat(FOIRMONTH)-parseFloat(EXISEMI));
		 	 if(isNaN(PREFUNDFCF))
		 {
			 PREFUNDFCF=0;
		 }  
		 
		  $("#FOGS_PREFUNDFCF").val(CURINRCommaSep(parseFloat(PREFUNDFCF).toFixed(2)));
		  $("#FOGS_PREFUNDFCF").next().addClass('active');
		
		
		//EMI p.m for 1 Lac (as per product)

		var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#FOGS_APPROI").val();
	Tenur=$("#FOGS_TENURE").val();
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
	$("#FOGS_EMI").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#FOGS_EMI").next().addClass('active');
		  
		  
		  //Loan Eligibility
      var LOANELIGI = parseFloat(parseFloat(parseFloat(PREFUNDFCF)/parseFloat(EMI))*100000);
	  if(isNaN(LOANELIGI))
		{
			LOANELIGI=0;
		}
	  
	  $("#FOGS_LOANELIGI").val(CURINRCommaSep(parseFloat(LOANELIGI).toFixed(2)));
	$("#FOGS_LOANELIGI").next().addClass('active');
	
	
	
	//Loan Proposed
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#FOGS_SCHEMEID").val(),"","","","LSW_SGETLOANDET");
	var LoanAmt=parseFloat($(xmlSTATUS).find('LOANAMOUNT').text());
	
	
	 var LOANPROPOSED=parseFloat(Math.min(LOANELIGI,LoanAmt)); 
		if(isNaN(LOANPROPOSED))
		{
			LOANPROPOSED=0;
		}
	  
	 $("#FOGS_LOANPROPOSED").val(CURINRCommaSep(parseFloat(LOANPROPOSED).toFixed(2)));
	$("#FOGS_LOANPROPOSED").next().addClass('active');
	
	//Pre funding DSCR 
	var PREFUNDSCR=parseFloat(parseFloat(APPLIPROFIT/12)/parseFloat(EXISEMI));
	
	if(isNaN(PREFUNDSCR))
		{
			PREFUNDSCR=0;
		}
	  
	 $("#FOGS_PREFUNDSCR").val(CURINRCommaSep(parseFloat(PREFUNDSCR).toFixed(2)));
	$("#FOGS_PREFUNDSCR").next().addClass('active');

    //Post Funding DSCR 
    
		 
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#FOGS_APPROI").val();
	Tenur=$("#FOGS_TENURE").val();
	 var result=UI_getdata(ROI,Tenur,LOANPROPOSED,"","","LSW_SGETEMI_DATA");
	 var EMI1=$(result).find("EMI").text();
	 	if(EMI1=='')
	{
		EMI1=0;
	} 
	if(isNaN(EMI1))
		{
			EMI1=0;
		}

	var POSTFUNDSCR=parseFloat(parseFloat(APPLIPROFIT/12)/parseFloat(parseFloat(EXISEMI)+parseFloat(EMI1)));
	
	if(isNaN(POSTFUNDSCR))
		{
			POSTFUNDSCR=0;
		}
	  
	 $("#FOGS_POSTFUNDSCR").val(CURINRCommaSep(parseFloat(POSTFUNDSCR).toFixed(2)));
	$("#FOGS_POSTFUNDSCR").next().addClass('active');

	
	
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	