
function BANKSUMAVG()
{
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),"SUMAVG",$("#CRSU_NOBANKACC").val(),$("#CRSU_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
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
	if(SUMAVG=='Infinity')
	{
		SUMAVG=0;
	}
	if(isNaN(MONTHAVG))
	{
		MONTHAVG=0;
	}
	if(MONTHAVG=='Infinity')
	{
		MONTHAVG=0;
	}
	
    	$("#CRSU_SUMAVG").val(CURINRCommaSep(parseFloat(SUMAVG).toFixed(2)));
		$("#CRSU_MONTHABB").val(CURINRCommaSep(parseFloat(MONTHAVG).toFixed(2)));	
		
		$('#CRSU_SUMAVG').next().addClass('active');
		$('#CRSU_MONTHABB').next().addClass('active');
	 
		
		
		
 
	var xmlSTAT1=UI_getdata($("#PrcsID").val(),"SUMAVGINFLOW",$("#CRSU_NOBANKACC").val(),$("#CRSU_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
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
	if(SUMAVGINFLOW=='Infinity')
	{
		SUMAVGINFLOW=0;
	}
    if(isNaN(SUMAVGINFLOW))
	{
		SUMAVGINFLOW=0;
	}
	
    	$("#CRSU_TOTCREBANKACC").val(CURINRCommaSep(parseFloat(SUMAVGINFLOW).toFixed(2))); 
		$('#CRSU_TOTCREBANKACC').next().addClass('active');
		
		
		
	var XmlC1=UI_getdata($("#PrcsID").val(),"SUMAVGINFLOW",$("#CRSU_NOBANKACC").val(),$("#CRSU_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
	if($(XmlC1).find('RESULT').text()!="SUCCESS")
	{
		alert($(XmlC1).find('RESULT').text())
		return
	}
	var C1=$(XmlC1).find('SUMC1').text()
	//var MONTHAVG=$(xmlSTAT).find('MONTHAVG').text()
	if(isNaN(C1))
	{
		C1=0;
	}
	if(isNaN(C1))
	{
		C1=0;
	}
	if(C1=='Infinity')
	{
		C1=0;
	}
	
    	$("#CRSU_CRDSUMFIRST3").val(CURINRCommaSep(parseFloat(C1).toFixed(2))); 
		$('#CRSU_CRDSUMFIRST3').next().addClass('active');
		
		
	var XmlC2=UI_getdata($("#PrcsID").val(),"SUMAVGINFLOW",$("#CRSU_NOBANKACC").val(),$("#CRSU_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
	if($(XmlC2).find('RESULT').text()!="SUCCESS")
	{
		alert($(XmlC2).find('RESULT').text())
		return
	}
	var C1=$(XmlC2).find('SUMC2').text()
	//var MONTHAVG=$(xmlSTAT).find('MONTHAVG').text()
	if(isNaN(C1))
	{
		C1=0;
	}
	if(isNaN(C1))
	{
		C1=0;
	}
	
    	$("#CRSU_CRDSUMLAST3").val(CURINRCommaSep(parseFloat(C1).toFixed(2))); 
		$('#CRSU_CRDSUMLAST3').next().addClass('active');	
	
	
	var C1= $('#CRSU_CRDSUMFIRST3').val().replace(/,/g,'');
	var C2= $('#CRSU_CRDSUMLAST3').val().replace(/,/g,'');
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
	$('#CRSU_VARIANCE').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	$('#CRSU_VARIANCE').next().addClass('active');	
	
	
	var variance=$("#CRSU_VARIANCE").val().replace(/,/g,'');
	var C1=$("#CRSU_CRDSUMFIRST3").val().replace(/,/g,'');
	var C2=$("#CRSU_CRDSUMLAST3").val().replace(/,/g,'');
	if(variance>50.00)
	{
	$('.MULTIDIS').find('.select-dropdown').attr('disabled',false)
	//$(".multidisable").attr('disabled',false);
	//$('.MULTIDIS').material_select('disabled',true)
	}
	else
	{
	$('.MULTIDIS').find('.select-dropdown').attr('disabled',true)
	//$(".multidisable").attr('disabled',true);
	//$('.MULTIDIS').material_select('disabled',false)
	}
	
	
	
	var xmlSTA=UI_getdata($("#PrcsID").val(),"SUMAVGEXCLUSION",$("#CRSU_NOBANKACC").val(),$("#CRSU_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
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
	if(SUMAVGEXCLUSION=='Infinity')
	{
		SUMAVGEXCLUSION=0;
	}
	
    	$("#CRSU_BUSINCRESUM").val(CURINRCommaSep(parseFloat(SUMAVGEXCLUSION).toFixed(2))); 
		$('#CRSU_BUSINCRESUM').next().addClass('active');
	    SUBTRACTIONAMOUNT();
		ADJUSTEDCREDITSUM();
		Revisedcreditsum();
		loan();
		passfail();
}



function SUBTRACTIONAMOUNT()
{
	var MAINAMT=$("#CRSU_TOTCREBANKACC").val().replace(/,/g,'');
	 
	var SUBAMT= $("#CRSU_BUSINCRESUM").val().replace(/,/g,'');
	
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
	if(TOTAL=='Infinity')
	{
		TOTAL=0;
	}
		

	$("#CRSU_REVBUSICRESUM").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $("#CRSU_REVBUSICRESUM").next().addClass('active');
	  PERNONBUSINESS();
	
}
function ADJUSTEDCREDITSUM()
{
	var MAINAMT=$("#CRSU_TOTCREBANKACC").val().replace(/,/g,'');
	 
	var SUBAMT= $("#CRSU_BUSINCRESUM").val().replace(/,/g,'');
	
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
	if(TOTAL=='Infinity')
	{
		TOTAL=0;
	}
	$("#CRSU_ADJBUSICRESUM").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $("#CRSU_ADJBUSICRESUM").next().addClass('active');
	  PERNONBUSINESS();
	
}

function PERNONBUSINESS()
{
	var CRSU_BUSINCRESUM= $('#CRSU_BUSINCRESUM').val().replace(/,/g,'');
	var CRSU_TOTCREBANKACC= $('#CRSU_TOTCREBANKACC').val().replace(/,/g,'');
	
	if(CRSU_BUSINCRESUM=="")
	{
	CRSU_BUSINCRESUM=0	
	}
	if(CRSU_TOTCREBANKACC=="")
	{
	CRSU_TOTCREBANKACC=0	
	}
	var TOTAL=parseFloat(CRSU_BUSINCRESUM)/parseFloat(CRSU_TOTCREBANKACC)
	
	
	if(TOTAL == Infinity) 
	{
	TOTAL=0;	
	}
	
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	if(TOTAL=='Infinity')
	{
		TOTAL=0;
	}
	TOTAL=parseFloat(TOTAL)*100
	$('#CRSU_PRCNONSUM').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $('#CRSU_PRCNONSUM').next().addClass('active');
	   AJUSTABB();
	
}


function AJUSTABB()
{
	var MONTHABB= $('#CRSU_MONTHABB').val().replace(/,/g,'');
	var PRCNONSUM= $('#CRSU_PRCNONSUM').val().replace(/,/g,'');
	
	if(MONTHABB=="")
	{
	MONTHABB=0	
	}
	if(PRCNONSUM=="")
	{
	PRCNONSUM=0	
	}
	var TOTAL=parseFloat(parseFloat(MONTHABB)*parseFloat(1-parseFloat(PRCNONSUM)/100));
	
	
	 
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	$('#CRSU_ADJUCTABB').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $('#CRSU_ADJUCTABB').next().addClass('active');
	  FINALABB();
	
}

function FINALABB()
{
	var CRSU_ADJUCTABB= $('#CRSU_ADJUCTABB').val().replace(/,/g,'');
	var CRSU_EMILASTSIXMONTH= $('#CRSU_EMILASTSIXMONTH').val().replace(/,/g,'');
	var CRSU_OBLICLOSENEXT6= $('#CRSU_OBLICLOSENEXT6').val().replace(/,/g,'');
	
	if(CRSU_ADJUCTABB=="")
	{
	CRSU_ADJUCTABB=0	
	}
	if(CRSU_EMILASTSIXMONTH=="")
	{
	CRSU_EMILASTSIXMONTH=0	
	}
	
	if(CRSU_OBLICLOSENEXT6=="")
	{
	CRSU_OBLICLOSENEXT6=0	
	} 
	var TOTAL=parseFloat(CRSU_ADJUCTABB)-parseFloat(CRSU_EMILASTSIXMONTH)+parseFloat(CRSU_OBLICLOSENEXT6);
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	 
	$('#CRSU_FINALABB').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $('#CRSU_FINALABB').next().addClass('active'); 
	   GetEmiperlakh();
	  // BANKSUMAVG();
}

function GetEmiperlakh()
{
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETLOANDET")
	var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$(xmlSTATUS).find('INTERESTRATE').text();
	Tenur=$(xmlSTATUS).find('TENTURE').text();
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
	$("#CRSU_EMI").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#CRSU_EMI").next().addClass('active');
	 GetMaxEmi();
}

function GetMaxEmi(){
	var MAXEMI=0;
	var FINALABB=$("#CRSU_FINALABB").val().replace(/,/g,'');
	if(FINALABB=="")
		{
			FINALABB=0;
		}
	if($("#CRSU_NOBANKACC").val()=="Single")
	{  
		 MAXEMI=parseFloat(FINALABB*0.75); 	
	}
	else if($("#CRSU_NOBANKACC").val()=="Multiple")
	{ 
		  MAXEMI=parseFloat(FINALABB*0.60); 	
	}
	if(isNaN(MAXEMI))
	{
		MAXEMI=0;
	}
	if(MAXEMI=='Infinity')
	{
		MAXEMI=0;
	}
	
	$("#CRSU_MAXEMI").val(CURINRCommaSep(parseFloat(MAXEMI).toFixed(2)));
	$("#CRSU_MAXEMI").next().addClass('active');
	
	//GetLoanEligibil();
	
}
/*function GetLoanEligibil()
{
	var MAXEMI=$("#CRSU_MAXEMI").val().replace(/,/g,'');
	var FINALABB=$("#CRSU_FINALABB").val().replace(/,/g,'');
	var EMI=$("#CRSU_EMI").val().replace(/,/g,'');
	
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
		var LOANELIGH=parseFloat(parseFloat(MAXEMI)/ parseFloat(EMI))*100000;
	}
	if(isNaN(LOANELIGH))
	{
		LOANELIGH=0;
	} 
	
	if(LOANELIGH == Infinity) 
	{
	LOANELIGH=0;	
	}
	
	
	
	$("#CRSU_LOANELIGH").val(CURINRCommaSep(parseFloat(LOANELIGH).toFixed(2)));
	$("#CRSU_LOANELIGH").next().addClass('active'); 
	GetPropoLoan();
}*/


function GetPropoLoan()
{   var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#CRSU_SHEMEID").val(),"","","","LSW_SGETLOANDET");
	var LNAMT=$(xmlSTATUS).find('LOANAMOUNT').text();  
	var LOANELIGH=$("#CRSU_LOANELIGH").val().replace(/,/g,'');
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
	if(PROPLOAN=='Infinity')
	{
		PROPLOAN=0;
	}
	$("#CRSU_PROPLOAN").val(CURINRCommaSep(parseFloat(PROPLOAN).toFixed(2)));
	$("#CRSU_PROPLOAN").next().addClass('active'); 
	GetOutStand();
}

function GetOutStand()
{
	
	var EXITLOAN=$("#CRSU_EXITLOAN").val().replace(/,/g,'');
	var ODLIMIT=$("#CRSU_ODLIMIT").val().replace(/,/g,'');
	var LAPOS=$("#CRSU_LAPOS").val().replace(/,/g,'');
	
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
	$("#CRSU_OUTEXITLAON").val(CURINRCommaSep(parseFloat(OUTEXITLAON).toFixed(2)));
	$("#CRSU_OUTEXITLAON").next().addClass('active'); 
	GetLoanexpos();
}


function GetLoanexpos()
{
	
	var OUTEXITLAON=$("#CRSU_OUTEXITLAON").val().replace(/,/g,'');
	var PROPLOAN=$("#CRSU_PROPLOAN").val().replace(/,/g,'');
	 
	
	if(OUTEXITLAON=="")
		{
			OUTEXITLAON=0;
		}
		if(PROPLOAN=="")
		{
			PROPLOAN=0;
		}
	 
	 
	var TOTLOANEXP= parseFloat(parseFloat(OUTEXITLAON)+parseFloat(PROPLOAN));
		if(isNaN(TOTLOANEXP))
	{
		TOTLOANEXP=0;
	} 
	if(TOTLOANEXP=='Infinity')
	{
		TOTLOANEXP=0;
	}
	$("#CRSU_TOTLOANEXP").val(CURINRCommaSep(parseFloat(TOTLOANEXP).toFixed(2)));
	$("#CRSU_TOTLOANEXP").next().addClass('active'); 
	
	
	//Total Loan Exposure (as a % of Business Credit Summation)
	var TOTLOANEXP1=$("#CRSU_TOTLOANEXP").val().replace(/,/g,'');
	var REVBUSICRESUM=$("#CRSU_REVBUSICRESUM").val().replace(/,/g,'');
	 
	
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
	$("#CRSU_PERTOTLAONEXP").val(CURINRCommaSep(parseFloat(PERTOTLAONEXP*100).toFixed(2)));
	$("#CRSU_PERTOTLAONEXP").next().addClass('active'); 
	
	//Turnover Validation
	 
	if(PERTOTLAONEXP=="")
		{
			PERTOTLAONEXP=0;
		}
		
		if(PERTOTLAONEXP<(50/100))
		{
			$("#CRSU_TURNOVERVALI").val("True");
		 
		 
		}
		else
		{
				$("#CRSU_TURNOVERVALI").val("Deviation is Turnover Validation");

		}
		 $("#CRSU_TURNOVERVALI").next().addClass('active'); 
		 
	 
	 
	 
	 
	
	
	
	
	
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
 function Getbussiness()
{ 
	var xml=UI_getdata("TYPEBUSINESS1","","","","","LSW_SGETFINANCIALVAL");
    $("#CRSU_TYPEINDUS").html("");
    $("#CRSU_TYPEINDUS").append($(xml).find("RESULT").html());
    $("#CRSU_TYPEINDUS").material_select(); 
}


function Checkinst(){
	var check=UI_getdata($("#PrcsID").val(),$("#CRSU_SCHEMEID").val(),"","","","LSW_SGETLOANCUSNAME");
	$("#CRSU_NAMECUS").val($(check).find ('APPLICANTNAME').text());
	$("#CRSU_PROINTRATE").val($(check).find ('INTERESTRATE').text());
	$("#CRSU_PROTENTURE").val($(check).find ('TENTURE').text());
	$("#CRSU_LOANAMTREQ").val($(check).find('LOANAMOUNT').text());
}

function Revisedcreditsum()
{	
	//var C1=CURINRCommaSep(parseFloat($("#CRSU_CRDSUMFIRST3").val()).toFixed(2));
	//var C2=CURINRCommaSep(parseFloat($("#CRSU_CRDSUMLAST3").val()).toFixed(2));
	var C1=$("#CRSU_CRDSUMFIRST3").val().replace(/,/g,'');
	var C2=$("#CRSU_CRDSUMLAST3").val().replace(/,/g,'');
	var variation=$("#CRSU_VARMULTI").val().replace(/,/g,'');
	var creditsum=$("#CRSU_ADJBUSICRESUM").val().replace(/,/g,'');
	var variance=$("#CRSU_VARIANCE").val().replace(/,/g,'');
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
	var revised=Math.min(parseFloat(Math.min(C1,C2))*2)*(variation/100);
	}
	else
	{
	var revised=creditsum;
	}
	if(isNaN(revised))
	{
	revised=0;
	}
	if(revised=='Infinity')
	{
		revised=0;
	}
	revised=CURINRCommaSep(parseFloat(revised).toFixed(2));
	$("#CRSU_REVBUSICRESUM").val(revised);
	$("#CRSU_REVBUSICRESUM").next().addClass('active');
	Monthavg();
}


function Monthavg()
{
/*if(parseFloat($("#CRSU_LOANAMTREQ").val())<= 200000)
{
var multiplier =5;
}
else if(parseFloat($("#CRSU_LOANAMTREQ").val())<= 500000)
{
var multiplier =2;
}*/
var check=UI_getdata($("#PrcsID").val(),$("#CRSU_SCHEMEID").val(),"","","","LSW_SGETLOANCUSNAME");
$("#CRSU_MULTIPLIER").val($(check).find ('MULTIPLIER').text());
//Monthly Average Credit Summation
var months=$("#CRSU_BANKMONTHS").val().replace(/,/g,'');
var revisedcredit=$("#CRSU_REVBUSICRESUM").val().replace(/,/g,'');
var multiplier=$("#CRSU_MULTIPLIER").val().replace(/,/g,'');
//var monthavg=$("#CRSU_REVBUSICRESUM").val().replace(/,/g,'');
var PERTOTLAONEXP= parseFloat(parseFloat(revisedcredit)/parseFloat(months))*2;
if(isNaN(PERTOTLAONEXP))
{
PERTOTLAONEXP=0;
}
if(PERTOTLAONEXP=='Infinity')
{
	PERTOTLAONEXP=0;
}
$("#CRSU_MONAVGCRESUM").val(CURINRCommaSep(parseFloat(PERTOTLAONEXP).toFixed(2)));
$("#CRSU_MONAVGCRESUM").next().addClass('active'); 

//MULTIPLIER OF 5 MONTHAVG

var CRESUMFIVE= parseFloat(parseFloat(revisedcredit)/parseFloat(months))*5;
if(isNaN(CRESUMFIVE))
{
CRESUMFIVE=0;
}
if(CRESUMFIVE=='Infinity')
{
	CRESUMFIVE=0;
}
$("#CRSU_MONAVGCRESUMFVE").val(CURINRCommaSep(parseFloat(CRESUMFIVE).toFixed(2)));
$("#CRSU_MONAVGCRESUMFVE").next().addClass('active'); 

//Gross profit
var monavgcrd=$("#CRSU_MONAVGCRESUM").val().replace(/,/g,'');
var indus=$("#CRSU_TYPEINDUS").val().replace(/,/g,'');
if(indus=="Kirana")
{
var gross= (parseFloat(monavgcrd))*(15/100);
}
else if(indus=="Pharma")
{
var gross= (parseFloat(monavgcrd))*(20/100);
}
else
{
var gross= (parseFloat(monavgcrd))*(12/100);
}
if(isNaN(gross))
{
gross=0;
}
if(gross=='Infinity')
{
	gross=0;
}
$("#CRSU_GROSPROFIT").val(CURINRCommaSep(parseFloat(gross).toFixed(2)));
$("#CRSU_GROSPROFIT").next().addClass('active');

//MULTIPLIER OF 5 GROSS PROFIT

var MONCRESUM=$("#CRSU_MONAVGCRESUMFVE").val().replace(/,/g,'');
var TYPINDUS=$("#CRSU_TYPEINDUS").val().replace(/,/g,'');
if(TYPINDUS=="Kirana")
{
var GROS= (parseFloat(MONCRESUM))*(15/100);
}
else if(TYPINDUS=="Pharma")
{
var GROS= (parseFloat(MONCRESUM))*(20/100);
}
else
{
var GROS= (parseFloat(MONCRESUM))*(12/100);
}
if(isNaN(GROS))
{
GROS=0;
}
if(GROS=='Infinity')
{
	GROS=0;
}
$("#CRSU_GROSPROFITFVE").val(CURINRCommaSep(parseFloat(GROS).toFixed(2)));
$("#CRSU_GROSPROFITFVE").next().addClass('active');


//Net profit

var fixcost=$("#CRSU_TOTFIXCOST").val().replace(/,/g,'');
var gross=$("#CRSU_GROSPROFIT").val().replace(/,/g,'');
var net= parseFloat(parseFloat(gross)-parseFloat(fixcost));
if(isNaN(net))
{
net=0;
}
if(net=='Infinity')
{
	net=0;
}
$("#CRSU_NETPROFIT").val(CURINRCommaSep(parseFloat(net).toFixed(2)));
$("#CRSU_NETPROFIT").next().addClass('active');

//MULTIPLIER OF 5 NET PROFIT 


var FXCOST=$("#CRSU_TOTFIXCOST").val().replace(/,/g,'');
var GROSS=$("#CRSU_GROSPROFITFVE").val().replace(/,/g,'');
var NETPRO= parseFloat(parseFloat(GROSS)-parseFloat(FXCOST));
if(isNaN(NETPRO))
{
NETPRO=0;
}
if(NETPRO=='Infinity')
{
	NETPRO=0;
}
$("#CRSU_NETPROFITFVE").val(CURINRCommaSep(parseFloat(NETPRO).toFixed(2)));
$("#CRSU_NETPROFITFVE").next().addClass('active');


//Profit Available for Loan Servicing (DSR @60%)
var net=$("#CRSU_NETPROFIT").val().replace(/,/g,'');
var DSR=parseFloat(net)*(60/100);
if(isNaN(DSR))
{
DSR=0;
}
if(DSR=='Infinity')
{
	DSR=0;
}
$("#CRSU_PROAVAILLOANSERV").val(CURINRCommaSep(parseFloat(DSR).toFixed(2)));
$("#CRSU_PROAVAILLOANSERV").next().addClass('active');

//MULTIPLIER OF 5 DSR

var NETPRFT=$("#CRSU_NETPROFITFVE").val().replace(/,/g,'');
var LNSER=parseFloat(NETPRFT)*(60/100);
if(isNaN(LNSER))
{
LNSER=0;
}
if(LNSER=='Infinity')
{
	LNSER=0;
}
$("#CRSU_PROAVAILLOANSERVFVE").val(CURINRCommaSep(parseFloat(LNSER).toFixed(2)));
$("#CRSU_PROAVAILLOANSERVFVE").next().addClass('active');

//Profit Available for servicing of additional loan
var DSR=$("#CRSU_PROAVAILLOANSERV").val().replace(/,/g,'');
var obli=$("#CRSU_EXISTEMIOBLI").val().replace(/,/g,'');
var Oblisixm=$("#CRSU_OBLICLOSENEXT6").val().replace(/,/g,'');
var Additional= parseFloat(DSR)-parseFloat(obli)+parseFloat(Oblisixm);
if(isNaN(Additional))
{
Additional=0;
}
if(Additional=='Infinity')
{
	Additional=0;
}
$("#CRSU_PROADDILOAN").val(CURINRCommaSep(parseFloat(Additional).toFixed(2)));
$("#CRSU_PROADDILOAN").next().addClass('active');

//MULTIPLIER OF 5 ADDITIONAL LOANAMOUNT

var LNSERV=$("#CRSU_PROAVAILLOANSERVFVE").val().replace(/,/g,'');
var OBLID=$("#CRSU_EXISTEMIOBLI").val().replace(/,/g,'');
var OBLIN=$("#CRSU_OBLICLOSENEXT6").val().replace(/,/g,'');
var ADDITION= parseFloat(LNSERV)-parseFloat(OBLID)+parseFloat(OBLIN);
if(isNaN(ADDITION))
{
ADDITION=0;
}
if(ADDITION=='Infinity')
{
	ADDITION=0;
}
$("#CRSU_PROADDILOANFVE").val(CURINRCommaSep(parseFloat(ADDITION).toFixed(2)));
$("#CRSU_PROADDILOANFVE").next().addClass('active');

//Profit Available for servicing of loan applied with us
var profit=$("#CRSU_PROADDILOAN").val().replace(/,/g,'');
var emitrack=$("#CRSU_EMITRACKLAST12").val().replace(/,/g,'');
//var profloan=parseFloat(profit);

var profloan=parseFloat(Math.min((emitrack*2),profit));

/* if($("#CRSU_MULTIPLIER").val()=="5")
{

} */

if(isNaN(profloan))
{
profloan=0;
}
if(profloan=='Infinity')
{
	profloan=0;
}
$("#CRSU_PROLOANAPPL").val(CURINRCommaSep(parseFloat(profloan).toFixed(2)));
$("#CRSU_PROLOANAPPL").next().addClass('active');


//MULTIPLIER OF 5 ADDITION LOAN WITH US

var PROFTADD=$("#CRSU_PROADDILOANFVE").val().replace(/,/g,'');
var EMITRCK=$("#CRSU_EMITRACKLAST12").val().replace(/,/g,'');

//var PROFN=parseFloat(Math.min((EMITRCK*2),PROFTADD));
var PROFN=parseFloat(PROFTADD);

if(isNaN(PROFN))
{
PROFN=0;
}
if(PROFN=='Infinity')
{
	PROFN=0;
}
$("#CRSU_PROLOANAPPLFVE").val(CURINRCommaSep(parseFloat(PROFN).toFixed(2)));
$("#CRSU_PROLOANAPPLFVE").next().addClass('active');

//MULTIPLIER OF 2 AND 5 CALCULATION

//EMI AND PROFIT

var LNAMT=$("#CRSU_LOANAMTREQ").val().replace(/,/g,'');
var EMI=$("#CRSU_EMI").val().replace(/,/g,'');
var Mulprotwo=$("#CRSU_PROLOANAPPL").val().replace(/,/g,'');
var MULRESLT=parseFloat(Mulprotwo)/ parseFloat(EMI)*100000;

var Mulprofive=$("#CRSU_PROLOANAPPLFVE").val().replace(/,/g,'');
var MULFIVERESLT=parseFloat(Mulprofive)/ parseFloat(EMI)*100000;

if(parseFloat(MULRESLT)>200000)
{
	var FN=parseFloat(Math.min(parseFloat(MULRESLT),500000,parseFloat(LNAMT)));
}
else
{
	var FN=parseFloat(Math.min(parseFloat(MULFIVERESLT),200000,parseFloat(LNAMT)));
}

if(parseFloat(FN)<100000)
{
	$("#CRSU_LOANELIGCRDSUM").val('0');
}
else
{
	$("#CRSU_LOANELIGCRDSUM").val(CURINRCommaSep(parseFloat(FN).toFixed(2)));
	$("#CRSU_LOANELIGCRDSUM").next().addClass('active');
}









}


function Totalcost(){
var A1=$("#CRSU_BUSIPREMRENT").val().replace(/,/g,'');
var A2=$("#CRSU_EMPSALARY").val().replace(/,/g,'');
var A3=$("#CRSU_OTHFIXCOST").val().replace(/,/g,'');

var Total= parseFloat(A1)+parseFloat(A2)+parseFloat(A3);
if(isNaN(Total))
{
Total=0;
}
if(Total=='Infinity')
{
	Total=0;
}
$("#CRSU_TOTFIXCOST").val(CURINRCommaSep(parseFloat(Total).toFixed(2)));
$("#CRSU_TOTFIXCOST").next().addClass('active');
}


function passfail()
{
var pass = "Pass";
var fail = "Fail";
var need = "50000 needed";
var na = "NA";
var MONTHABB=$("#CRSU_FINALABB").val().replace(/,/g,'');
//if($("#CRSU_MONTHABB").val()>13889)
	if($("#CRSU_NOBANKACC").val()=="Single")
	{
	if(parseFloat(MONTHABB)>8334)
		{
		$("#CRSU_MINMONTHABB").val(pass);
		$("#CRSU_MINMONTHABB").next().addClass('active');
		}
		else
		{
		$("#CRSU_MINMONTHABB").val(fail);
		$("#CRSU_MINMONTHABB").next().addClass('active');
		}
	}
	else
	{
			if(parseFloat(MONTHABB)>13889)
		{
		$("#CRSU_MINMONTHABB").val(pass);
		$("#CRSU_MINMONTHABB").next().addClass('active');
		}
		else
		{
		$("#CRSU_MINMONTHABB").val(fail);
		$("#CRSU_MINMONTHABB").next().addClass('active');
		}
	}
	
	


var loanamt=$("#CRSU_LOANAMTREQ").val().replace(/,/g,'');
var creditsum=$("#CRSU_ADJBUSICRESUM").val().replace(/,/g,'');
if(parseFloat(loanamt)>=200000)
{
	if(parseFloat(creditsum)>150000)
	{
	$("#CRSU_MINICRDSUM").val(pass);
	$("#CRSU_MINICRDSUM").next().addClass('active');
	}
	else
	{
	$("#CRSU_MINICRDSUM").val(need);
	$("#CRSU_MINICRDSUM").next().addClass('active');
	}
	}
else
{
	if(parseFloat(creditsum)>50000)
	{
	$("#CRSU_MINICRDSUM").val(pass);
	$("#CRSU_MINICRDSUM").next().addClass('active');
	}
	else
	{
	$("#CRSU_MINICRDSUM").val(fail);
	$("#CRSU_MINICRDSUM").next().addClass('active');
	}
}
var emi=$("#CRSU_EMITRACKLAST12").val().replace(/,/g,'');
if(parseFloat(loanamt)>200000)
{
if(parseFloat(emi)>4200)
	{
	$("#CRSU_MINIEMI").val(pass);
	$("#CRSU_MINIEMI").next().addClass('active');
	}
	else
	{
	$("#CRSU_MINIEMI").val(fail);
	$("#CRSU_MINIEMI").next().addClass('active');
	}
	}
	else
	{
	$("#CRSU_MINIEMI").val(na);
	$("#CRSU_MINIEMI").next().addClass('active');
	}
	var Pass=UI_getdata($("#PrcsID").val(),"SUMAVGINFLOW",$("#CRSU_NOBANKACC").val(),$("#CRSU_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	$("#CRSU_MINCRDDEB").val($(Pass).find ('PASSFAIL').text());
	$("#CRSU_MINCRDDEB").next().addClass('active');	
	
if(($("#CRSU_MINMONTHABB").val()=="Fail")||($("#CRSU_MINICRDSUM").val()=="Fail"))//||($("#CRSU_MINIEMI").val()=="Fail"))//||($("#CRSU_MINCRDDEB").val()=="Fail"))
{

$("#CRSU_LOANELIGABB").val('0');
//$("#CRSU_LOANELIGCRDSUM").val('0');
$("#CRSU_FINALLOANELIG").val('0');
}
}



function loan()
{
var loanamt=$("#CRSU_LOANAMTREQ").val().replace(/,/g,'');
var numacc=$("#CRSU_NOBANKACC").val().replace(/,/g,'');
var o=$("#CRSU_FINALABB").val().replace(/,/g,'');
var e=$("#CRSU_ADJBUSICRESUM").val().replace(/,/g,'');
var tenure=$("#CRSU_PROTENTURE").val().replace(/,/g,'');
var k=$("#CRSU_EMITRACKLAST12").val().replace(/,/g,'');

/* if(parseFloat(loanamt)<=200000)
{
	if(numacc=="Multiple")
	{
	var loan=parseFloat(Math.min((30/100)*o*tenure,(e)/(50/100),loanamt));
	}
	else
	{
	var loan=parseFloat(Math.min((50/100)*o*tenure,(e)/(50/100),loanamt));
	}
}
else
{
	if(numacc=="Multiple")
	{
	var loan=parseFloat(Math.min((30/100)*o*tenure,(e)/(75/100),k*2*tenure,loanamt));
	}
	else
	{
	var loan=parseFloat(Math.min((50/100)*o*tenure,(e)/(75/100),k*2*tenure,loanamt));
	}
} */

if(numacc=="Multiple")
{
	var loan=parseFloat((30/100)*o*tenure)
	if(parseFloat(loan)<100000 || parseFloat(e)<50000)
	{
		var finloan=$("#CRSU_LOANELIGABB").val(0);			
	}
	else
	{
		if(parseFloat(e)>149999 && k*2*tenure>200000)
		{
			var finloan=parseFloat(Math.min((30/100)*o*tenure,(e)/(75/100),k*2*tenure,loanamt,500000))
		}
		else
		{
			var finloan=parseFloat(Math.min((30/100)*o*tenure,(e)/(50/100),loanamt,200000));
		}
			
	}
	
}
else
{
	var loan=parseFloat((50/100)*o*tenure)
	if(parseFloat(loan)<100000 || parseFloat(e)<50000)
	{
		var finloan=$("#CRSU_LOANELIGABB").val(0);			
	}
	else
	{
		if(parseFloat(e)>149999 && k*2*tenure>200000)
		{
			var finloan=parseFloat(Math.min((50/100)*o*tenure,(e)/(75/100),k*2*tenure,loanamt,500000))
		}
		else
		{
			var finloan=parseFloat(Math.min((50/100)*o*tenure,(e)/(50/100),loanamt,200000));
		}
			
	}
	
}


$("#CRSU_LOANELIGABB").val(CURINRCommaSep(parseFloat(finloan).toFixed(2)));
$("#CRSU_LOANELIGABB").next().addClass('active');
/* 
var y=$("#CRSU_PROLOANAPPL").val().replace(/,/g,'');
var z=$("#CRSU_EMI").val().replace(/,/g,'');
var loancredit= parseFloat(Math.min(loanamt,(parseFloat(y)/parseFloat(z))*100000));
$("#CRSU_LOANELIGCRDSUM").val(CURINRCommaSep(parseFloat(loancredit).toFixed(2)));
$("#CRSU_LOANELIGCRDSUM").next().addClass('active'); */
}
function finalloan()
{
var ABB=$("#CRSU_LOANELIGABB").val().replace(/,/g,'');
var CRESUM=$("#CRSU_LOANELIGCRDSUM").val().replace(/,/g,'');
var ASSESSMENT=$("input[name='CRSU_CREDITSUM']:checked"). val();
	
	if(ASSESSMENT=="ABB")
	{
	$("#CRSU_FINALLOANELIG").val(CURINRCommaSep(parseFloat(ABB).toFixed(2)));
	}
	if(ASSESSMENT=="Credit Summation")
	{
	$("#CRSU_FINALLOANELIG").val(CURINRCommaSep(parseFloat(CRESUM).toFixed(2)));
	}
/*var finalloan=parseFloat(Math.max(loan,loancredit));
$("#CRSU_FINALLOANELIG").val(CURINRCommaSep(parseFloat(finalloan).toFixed(2)));
$("#CRSU_FINALLOANELIG").next().addClass('active');*/

}	





