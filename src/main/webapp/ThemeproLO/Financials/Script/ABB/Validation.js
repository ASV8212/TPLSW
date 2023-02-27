
function BANKSUMAVG()
{
	if($("#SABB_NOBANKACC").val()=='')
	{
		alert ('Please select Number of Bank accounts considered for eigibiity');
		$("#SABB_BANKMONTHS").val('');
		$("#SABB_BANKMONTHS").material_select();
		return false;
	}
//Sum of Averages and Monthly ABB
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),"SUMAVG",$("#SABB_NOBANKACC").val(),$("#SABB_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
	if($(xmlSTATUS).find('RESULT').text()!="SUCCESS")
	{
		alert($(xmlSTATUS).find('RESULT').text())
		return
	}
	var SUMAVG=$(xmlSTATUS).find('SUMAVG').text()
	var MONTHAVG=$(xmlSTATUS).find('MONTHAVG').text()
	if(isNaN(SUMAVG))
	{
		SUMAVG=0;
	}
	if(isNaN(MONTHAVG))
	{
		MONTHAVG=0;
	}
	
    	$("#SABB_SUMAVG").val(CURINRCommaSep(parseFloat(SUMAVG).toFixed(2)));
		$("#SABB_MONTHABB").val(CURINRCommaSep(parseFloat(MONTHAVG).toFixed(2)));	
		
		$('#SABB_SUMAVG').next().addClass('active');
		$('#SABB_MONTHABB').next().addClass('active');
	 
		
		
//Total credit summation in Bank Account		
 
	var xmlSTAT1=UI_getdata($("#PrcsID").val(),"SUMAVGINFLOW",$("#SABB_NOBANKACC").val(),$("#SABB_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
	if($(xmlSTAT1).find('RESULT').text()!="SUCCESS")
	{
		alert($(xmlSTAT1).find('RESULT').text())
		return
	}
	var SUMAVGINFLOW=$(xmlSTAT1).find('SUMAVG').text()
	//var MONTHAVG=$(xmlSTAT).find('MONTHAVG').text()
	if(isNaN(SUMAVGINFLOW))
	{
		SUMAVGINFLOW=0;
	}
	if(isNaN(SUMAVGINFLOW))
	{
		SUMAVGINFLOW=0;
	}
	
    	$("#SABB_TOTCREBANKACC").val(CURINRCommaSep(parseFloat(SUMAVGINFLOW).toFixed(2))); 
		$('#SABB_TOTCREBANKACC').next().addClass('active');
		
//Total Adjusted Credit Summation (Business)		
	var xmlCREDSUM=UI_getdata($("#PrcsID").val(),"SUMDEPINFLOW",$("#SABB_NOBANKACC").val(),$("#SABB_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	if($(xmlCREDSUM).find('RESULT').text()!="SUCCESS")
	{
		alert($(xmlCREDSUM).find('RESULT').text())
		return
	}
	var CREDSUM=$(xmlCREDSUM).find('CREDSUM').text()
	//var MONTHAVG=$(xmlSTAT).find('MONTHAVG').text()
	if(isNaN(CREDSUM))
	{
		CREDSUM=0;
	}
	if(isNaN(CREDSUM))
	{
		CREDSUM=0;
	}
	
    	$("#SABB_ADJUSTCRESUM").val(CURINRCommaSep(parseFloat(CREDSUM).toFixed(2))); 
		$('#SABB_ADJUSTCRESUM').next().addClass('active');
//C1 C2
	var XmlC1C2=UI_getdata($("#PrcsID").val(),"SUMDEPINFLOW",$("#SABB_NOBANKACC").val(),$("#SABB_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
	if($(XmlC1C2).find('RESULT').text()!="SUCCESS")
	{
		alert($(XmlC1C2).find('RESULT').text())
		return
	}
	var C1=$(XmlC1C2).find('SUMC1').text()
	//var MONTHAVG=$(xmlSTAT).find('MONTHAVG').text()
	if(isNaN(C1))
	{
		C1=0;
	}
	if(isNaN(C1))
	{
		C1=0;
	}
	
    	$("#SABB_CRDSUMFIRST3").val(CURINRCommaSep(parseFloat(C1).toFixed(2))); 
		$('#SABB_CRDSUMFIRST3').next().addClass('active');
	var C1=$(XmlC1C2).find('SUMC2').text()
	//var MONTHAVG=$(xmlSTAT).find('MONTHAVG').text()
	if(isNaN(C1))
	{
		C1=0;
	}
	if(isNaN(C1))
	{
		C1=0;
	}
	
    	$("#SABB_CRDSUMLAST3").val(CURINRCommaSep(parseFloat(C1).toFixed(2))); 
		$('#SABB_CRDSUMLAST3').next().addClass('active');
		
//Variance	
	var C1= $('#SABB_CRDSUMFIRST3').val().replace(/,/g,'');
	var C2= $('#SABB_CRDSUMLAST3').val().replace(/,/g,'');
	var C1= parseFloat(C1);
	var C2= parseFloat(C2);
	if(C1=="")
	{
	C1=0	
	}
	if(C2=="")
	{
	C2=0	
	}
	if (C1>C2)
	{
	var TOTAL=parseFloat(((parseFloat(C1)/parseFloat(C2))-1)*100);
	}
	if (C1<C2)
	{
	var TOTAL=parseFloat(((parseFloat(C2)/parseFloat(C1))-1)*100);
	}
	 
	if((isNaN(TOTAL))||TOTAL=='Infinity')
	{
		TOTAL=0;
	}
	$('#SABB_VARIANCE').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	$('#SABB_VARIANCE').next().addClass('active');	

//Select multiplier	
	var variance=$("#SABB_VARIANCE").val().replace(/,/g,'');
	var C1=$("#SABB_CRDSUMFIRST3").val().replace(/,/g,'');
	var C2=$("#SABB_CRDSUMLAST3").val().replace(/,/g,'');
	if(variance>50.00)
	{
	$('.MULTIDIS').find('.select-dropdown').attr('disabled',false)
	}
	else
	{
	$('.MULTIDIS').find('.select-dropdown').attr('disabled',true)
	}	
//Total non-business credit summation		
		var xmlSTA=UI_getdata($("#PrcsID").val(),"SUMAVGEXCLUSION",$("#SABB_NOBANKACC").val(),$("#SABB_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
	if($(xmlSTA).find('RESULT').text()!="SUCCESS")
	{
		alert($(xmlSTA).find('RESULT').text())
		return
	}
	var SUMAVGEXCLUSION=$(xmlSTA).find('SUMAVG').text()
	//var MONTHAVG=$(xmlSTAT).find('MONTHAVG').text()
	if(isNaN(SUMAVGEXCLUSION))
	{
		SUMAVGEXCLUSION=0;
	}
	if(isNaN(SUMAVGEXCLUSION))
	{
		SUMAVGEXCLUSION=0;
	}
	
    	$("#SABB_BUSINCRESUM").val(CURINRCommaSep(parseFloat(SUMAVGEXCLUSION).toFixed(2))); 
		$('#SABB_BUSINCRESUM').next().addClass('active');
	    //SUBTRACTIONAMOUNT();
		Revisedcreditsum()
		PERNONBUSINESS();

}



/* function SUBTRACTIONAMOUNT()
{
//Revised Credit Summation
	var MAINAMT=$("#SABB_TOTCREBANKACC").val().replace(/,/g,'');
	 
	var SUBAMT= $("#SABB_BUSINCRESUM").val().replace(/,/g,'');
	
	if(MAINAMT=="")
	{
	MAINAMT=0	
	}
	if(SUBAMT=="")
	{
	SUBAMT=0	
	}
	var TOTAL=parseFloat(MAINAMT)-parseFloat(SUBAMT);
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	$("#SABB_REVBUSICRESUM").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $("#SABB_REVBUSICRESUM").next().addClass('active');
	  PERNONBUSINESS();
	
} */

function Revisedcreditsum()
{	
//Revised Credit Summation
	//var C1=CURINRCommaSep(parseFloat($("#CRSU_CRDSUMFIRST3").val()).toFixed(2));
	//var C2=CURINRCommaSep(parseFloat($("#CRSU_CRDSUMLAST3").val()).toFixed(2));
	var C1=$("#SABB_CRDSUMFIRST3").val().replace(/,/g,'');
	var C2=$("#SABB_CRDSUMLAST3").val().replace(/,/g,'');
	var variation=$("#SABB_VARMULTI").val().replace(/,/g,'');
	var creditsum=$("#SABB_ADJUSTCRESUM").val().replace(/,/g,'');
	var variance=$("#SABB_VARIANCE").val().replace(/,/g,'');
	if(C1=='')
	{
	C1=0;
	}
	if(C2=='')
	{
	C2=0;
	}
	if(variation=='')
	{
	variation=0;
	}
	if(creditsum=='')
	{
	creditsum=0;
	}
	if(variance>50)
	{
	var revised=Math.min((parseFloat(Math.min(C1,C2))*2)*(variation/100),creditsum);
	}
	else
	{
	var revised=creditsum;
	}
	if(isNaN(revised))
	{
	revised=0;
	}
	revised=CURINRCommaSep(parseFloat(revised).toFixed(2));
	$("#SABB_REVBUSICRESUM").val(revised);
	$("#SABB_REVBUSICRESUM").next().addClass('active');
	//Monthavg();
}


function PERNONBUSINESS()
{
//% of non-business credit summation
	var SABB_ADJUSTCRESUM= $('#SABB_ADJUSTCRESUM').val().replace(/,/g,'');
	var SABB_TOTCREBANKACC= $('#SABB_TOTCREBANKACC').val().replace(/,/g,'');
	
	if(SABB_ADJUSTCRESUM=="")
	{
	SABB_ADJUSTCRESUM=0	
	}
	if(SABB_TOTCREBANKACC=="")
	{
	SABB_TOTCREBANKACC=0	
	}
	var TOTAL=(SABB_TOTCREBANKACC)-(SABB_ADJUSTCRESUM)
	TOTAL=parseFloat(TOTAL)/parseFloat(SABB_TOTCREBANKACC)
	TOTAL=parseFloat(TOTAL*100)
	if(TOTAL == Infinity) 
	{
	TOTAL=0;	
	}
	
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	
	$('#SABB_PRCNONSUM').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $('#SABB_PRCNONSUM').next().addClass('active');
	   AJUSTABB();
	
}


function AJUSTABB()
{
//Adjusted ABB
	var MONTHABB= $('#SABB_MONTHABB').val().replace(/,/g,'');
	var PRCNONSUM= $('#SABB_PRCNONSUM').val().replace(/,/g,'');
	
	if(MONTHABB=="")
	{
	MONTHABB=0	
	}
	if(PRCNONSUM=="")
	{
	PRCNONSUM=0	
	}
	var TOTAL=MONTHABB*(1-(PRCNONSUM/100));
	
	
	 
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	$('#SABB_ADJUCTABB').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $('#SABB_ADJUCTABB').next().addClass('active');
	  FINALABB();
	
}

function FINALABB()
{
//Final ABB for eligibility
	var SABB_ADJUCTABB= $('#SABB_ADJUCTABB').val().replace(/,/g,'');
	var SABB_EMILASTSIXMONTH= $('#SABB_EMILASTSIXMONTH').val().replace(/,/g,'');
	var SABB_EMICLOSIXMONTH= $('#SABB_EMICLOSIXMONTH').val().replace(/,/g,'');
	
	if(SABB_ADJUCTABB=="")
	{
	SABB_ADJUCTABB=0	
	}
	if(SABB_EMILASTSIXMONTH=="")
	{
	SABB_EMILASTSIXMONTH=0	
	}
	
	if(SABB_EMICLOSIXMONTH=="")
	{
	SABB_EMICLOSIXMONTH=0	
	} 
	var TOTAL=parseFloat(SABB_ADJUCTABB)-parseFloat(SABB_EMILASTSIXMONTH)+parseFloat(SABB_EMICLOSIXMONTH);
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	 
	$('#SABB_FINALABB').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $('#SABB_FINALABB').next().addClass('active'); 
	   GetEmiperlakh();
}

function GetEmiperlakh()
{
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETLOANDET")
	var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$(xmlSTATUS).find('INTERESTRATE').text();
	Tenur=$(xmlSTATUS).find('TENTURE').text();
	 var result=UI_getdata(ROI,Tenur,LnAmt,$("#PrcsID").val()+'|'+$(".FormPageMultiTab li.active").attr("id"),"","LSW_SGETEMI_DATA");
	 var EMI=$(result).find("EMI").text();
	 	if(EMI=='')
	{
		EMI=0;
	}
	if(isNaN(EMI))
		{
			EMI=0;
		}
	$("#SABB_EMI").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#SABB_EMI").next().addClass('active');
	 GetMaxEmi();
}

function GetMaxEmi(){
	var MAXEMI=0;
	var FINALABB=$("#SABB_FINALABB").val().replace(/,/g,'');
	if(FINALABB=="")
		{
			FINALABB=0;
		}
	if($("#SABB_NOBANKACC").val()=="Single")
	{  
		 MAXEMI=parseFloat(FINALABB*0.75); 	
	}
	else if($("#SABB_NOBANKACC").val()=="Multiple")
	{ 
		  MAXEMI=parseFloat(FINALABB*0.60); 	
	}
	if(isNaN(MAXEMI))
	{
		MAXEMI=0;
	}
	
	$("#SABB_MAXEMI").val(CURINRCommaSep(parseFloat(MAXEMI).toFixed(2)));
	$("#SABB_MAXEMI").next().addClass('active');
	
	GetLoanEligibil();
	
}
function GetLoanEligibil()
{
	var MAXEMI=$("#SABB_MAXEMI").val().replace(/,/g,'');
	var FINALABB=$("#SABB_FINALABB").val().replace(/,/g,'');
	var EMI=$("#SABB_EMI").val().replace(/,/g,'');
	
	if(FINALABB=="")
		{
			FINALABB=0;
		}
		if(MAXEMI=="")
		{
			MAXEMI=0;
		}
		if(EMI=="")
		{
			EMI=0;
		}
		
	if(MAXEMI>FINALABB)
	{
		var LOANELIGH=parseFloat(parseFloat(FINALABB)/ parseFloat(EMI))*100000;
	}
	else{
		var LOANELIGH=parseFloat(parseFloat(EMI)/ parseFloat(EMI))*100000;
	}
	
	 if(LOANELIGH == Infinity) 
	{
	LOANELIGH=0;	
	}
	
	
	
	if(isNaN(LOANELIGH))
	{
		LOANELIGH=0;
	} 
	$("#SABB_LOANELIGH").val(CURINRCommaSep(parseFloat(LOANELIGH).toFixed(2)));
	$("#SABB_LOANELIGH").next().addClass('active'); 
	GetPropoLoan();
}


function GetPropoLoan()
{
	var LNAMT=$("#DMY3").val().split('|')[0];  
	var LOANELIGH=$("#SABB_LOANELIGH").val().replace(/,/g,'');
		if(LNAMT=="")
		{
			LNAMT=0;
		}
		if(LOANELIGH=="")
		{
			LOANELIGH=0;
		}
		
		var PROPLOAN=parseFloat(Math.min(LOANELIGH,LNAMT));
		if(isNaN(PROPLOAN))
	{
		PROPLOAN=0;
	} 
	$("#SABB_PROPLOAN").val(CURINRCommaSep(parseFloat(PROPLOAN).toFixed(2)));
	$("#SABB_PROPLOAN").next().addClass('active'); 
	GetOutStand();
}

function GetOutStand()
{
	
	var EXITLOAN=$("#SABB_EXITLOAN").val().replace(/,/g,'');
	var ODLIMIT=$("#SABB_ODLIMIT").val().replace(/,/g,'');
	var LAPOS=$("#SABB_LAPOS").val().replace(/,/g,'');
	
	if(EXITLOAN=="")
		{
			EXITLOAN=0;
		}
		if(ODLIMIT=="")
		{
			ODLIMIT=0;
		}
		if(LAPOS=="")
		{
			LAPOS=0;
		}
	 
	var OUTEXITLAON=parseFloat(parseFloat(EXITLOAN)-parseFloat(parseFloat(ODLIMIT)*parseFloat(50/100))-parseFloat(parseFloat(LAPOS)*parseFloat(50/100)));
		
		
		if(OUTEXITLAON == Infinity) 
	{
	OUTEXITLAON=0;	
	}
	
	
	
	if(isNaN(OUTEXITLAON))
	{
		OUTEXITLAON=0;
	} 
	$("#SABB_OUTEXITLAON").val(CURINRCommaSep(parseFloat(OUTEXITLAON).toFixed(2)));
	$("#SABB_OUTEXITLAON").next().addClass('active'); 
	GetLoanexpos();
}


function GetLoanexpos()
{
	
	var OUTEXITLAON=$("#SABB_OUTEXITLAON").val().replace(/,/g,'');
	var PROPLOAN=$("#SABB_PROPLOAN").val().replace(/,/g,'');
	 
	
	if(OUTEXITLAON=="")
		{
			OUTEXITLAON=0;
		}
		if(PROPLOAN=="")
		{
			PROPLOAN=0;
		}
	 
	 
	var TOTLOANEXP= parseFloat(parseFloat(OUTEXITLAON)+parseFloat(OUTEXITLAON));
		if(isNaN(TOTLOANEXP))
	{
		TOTLOANEXP=0;
	} 
	$("#SABB_TOTLOANEXP").val(CURINRCommaSep(parseFloat(TOTLOANEXP).toFixed(2)));
	$("#SABB_TOTLOANEXP").next().addClass('active'); 
	
	
	//Total Loan Exposure (as a % of Business Credit Summation)
	var TOTLOANEXP1=$("#SABB_TOTLOANEXP").val().replace(/,/g,'');
	var REVBUSICRESUM=$("#SABB_REVBUSICRESUM").val().replace(/,/g,'');
	 
	
	if(TOTLOANEXP1=="")
		{
			TOTLOANEXP1=0;
		}
		if(REVBUSICRESUM=="")
		{
			REVBUSICRESUM=0;
		}
	 
	 
	var PERTOTLAONEXP= parseFloat(parseFloat(TOTLOANEXP1)/parseFloat(REVBUSICRESUM));
	
	if(PERTOTLAONEXP == Infinity) 
	{
	PERTOTLAONEXP=0;	
	}
	
		if(isNaN(PERTOTLAONEXP))
	{
		PERTOTLAONEXP=0;
	} 
	$("#SABB_PERTOTLAONEXP").val(CURINRCommaSep(parseFloat(PERTOTLAONEXP).toFixed(2)));
	$("#SABB_PERTOTLAONEXP").next().addClass('active'); 
	
	//Turnover Validation
	 
	if(PERTOTLAONEXP=="")
		{
			PERTOTLAONEXP=0;
		}
		
		if(PERTOTLAONEXP<(50/100))
		{
			$("#SABB_TURNOVERVALI").val("True");
		 
		 
		}
		else
		{
				$("#SABB_TURNOVERVALI").val("Deviation is Turnover Validation");

		}
		 $("#SABB_TURNOVERVALI").next().addClass('active'); 
		 
	 
	 
	 
	 
	
	
	
	
	
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
	
var TOTAL=parseFloat(ASST_GOLD)+parseFloat(ASST_POSTALDEP)+parseFloat(ASST_MUTUALFUND)+parseFloat(ASST_INSUPOLICY)+parseFloat(ASST_VEHICLEASSETS)+parseFloat(ASST_HOUSEASSETES)+parseFloat(ASST_HOUSRENVASSETES)

var MONTHCONTRI=parseFloat(TOTAL)/36;

    if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	 if(isNaN(MONTHCONTRI))
	{
		MONTHCONTRI=0;
	}
	 
	$('#ASST_TOTALASSETS').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
    $('#ASST_TOTALASSETS').next().addClass('active');
	
	$('#ASST_MONTHCONTR').val(CURINRCommaSep(parseFloat(MONTHCONTRI).toFixed(2)))
    $('#ASST_MONTHCONTR').next().addClass('active');
}


 */