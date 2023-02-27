
function BANKSUMAVG()
{
//Sum of Averages AND Monthly ABB
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
	if(isNaN(MONTHAVG))
	{
		MONTHAVG=0;
	}
	
    	$("#CRSU_SUMAVG").val(CURINRCommaSep(parseFloat(SUMAVG).toFixed(2)));
		$("#CRSU_MONTHABB").val(CURINRCommaSep(parseFloat(MONTHAVG).toFixed(2)));	
		
		$('#CRSU_SUMAVG').next().addClass('active');
		$('#CRSU_MONTHABB').next().addClass('active');
//Total credit summation in Bank Account	 
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
	if(isNaN(SUMAVGINFLOW))
	{
		SUMAVGINFLOW=0;
	}
	
    	$("#CRSU_TOTCREBANKACC").val(CURINRCommaSep(parseFloat(SUMAVGINFLOW).toFixed(2))); 
		$('#CRSU_TOTCREBANKACC').next().addClass('active');
//Adjusted Credit Summation (Business)		
	var xmlCREDSUM=UI_getdata($("#PrcsID").val(),"SUMDEPINFLOW",$("#CRSU_NOBANKACC").val(),$("#CRSU_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
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
	
    	$("#CRSU_ADJBUSICRESUM").val(CURINRCommaSep(parseFloat(CREDSUM).toFixed(2))); 
		$('#CRSU_ADJBUSICRESUM').next().addClass('active');
		
//C1 C2		
	var XmlC1=UI_getdata($("#PrcsID").val(),"SUMDEPINFLOW",$("#CRSU_NOBANKACC").val(),$("#CRSU_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
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
	
    	$("#CRSU_CRDSUMFIRST3").val(CURINRCommaSep(parseFloat(C1).toFixed(2))); 
		$('#CRSU_CRDSUMFIRST3').next().addClass('active');
		
		
	var XmlC2=UI_getdata($("#PrcsID").val(),"SUMDEPINFLOW",$("#CRSU_NOBANKACC").val(),$("#CRSU_BANKMONTHS").val(),"","LSW_SABBCALCULATION")
	
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
	
//Variance	
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
	
//Select multiplier	
	var variance=$("#CRSU_VARIANCE").val().replace(/,/g,'');
	var C1=$("#CRSU_CRDSUMFIRST3").val().replace(/,/g,'');
	var C2=$("#CRSU_CRDSUMLAST3").val().replace(/,/g,'');
	if(variance>50.00)
	{
	$('.MULTIDIS').find('.select-dropdown').attr('disabled',false)
	}
	else
	{
	$('.MULTIDIS').find('.select-dropdown').attr('disabled',true)
	}
	
	
//Total non-business credit summation	
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
	
    	$("#CRSU_BUSINCRESUM").val(CURINRCommaSep(parseFloat(SUMAVGEXCLUSION).toFixed(2))); 
		$('#CRSU_BUSINCRESUM').next().addClass('active');
	    //SUBTRACTIONAMOUNT();
		Revisedcreditsum();
		PERNONBUSINESS();
		//ADJUSTEDCREDITSUM();
		
		loan();
		//passfail();
}



/* function SUBTRACTIONAMOUNT()
{
//Revised Credit Summation
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
	$("#CRSU_REVBUSICRESUM").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $("#CRSU_REVBUSICRESUM").next().addClass('active');
	  PERNONBUSINESS();
	
}
 */
function PERNONBUSINESS()
{
//% of non-business credit summation
	var CRSU_ADJBUSICRESUM= $('#CRSU_ADJBUSICRESUM').val().replace(/,/g,'');
	var CRSU_TOTCREBANKACC= $('#CRSU_TOTCREBANKACC').val().replace(/,/g,'');
	
	if(CRSU_ADJBUSICRESUM=="")
	{
	CRSU_ADJBUSICRESUM=0	
	}
	if(CRSU_TOTCREBANKACC=="")
	{
	CRSU_TOTCREBANKACC=0	
	}
	//var TOTAL=parseFloat(CRSU_BUSINCRESUM)/parseFloat(CRSU_TOTCREBANKACC)
	var TOTAL=(CRSU_TOTCREBANKACC)-(CRSU_ADJBUSICRESUM)
	
	
	//TOTAL=parseFloat(TOTAL)*100
	TOTAL=parseFloat(TOTAL)/parseFloat(CRSU_TOTCREBANKACC)
	//TOTAL=TOTAL.toFixed(2)
	TOTAL=parseFloat(TOTAL*100)
	if(TOTAL == Infinity) 
	{
	TOTAL=0;	
	}
	
	if(isNaN(TOTAL))
	{
		TOTAL=0;
	}
	
	$('#CRSU_PRCNONSUM').val(CURINRCommaSep(parseFloat(TOTAL).toFixed(2)));
	  $('#CRSU_PRCNONSUM').next().addClass('active');
	   AJUSTABB();
	
}


function AJUSTABB()
{
//Adjusted ABB 
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
	var TOTAL=MONTHABB*(1-(PRCNONSUM/100));
	
	
	 
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
//Final ABB for eligibility 
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
//EMI Per Lakh 
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETLOANDET")
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
	$("#CRSU_EMI").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#CRSU_EMI").next().addClass('active');
	 //GetMaxEmi();
}

/* function GetMaxEmi(){
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
	
	$("#CRSU_MAXEMI").val(CURINRCommaSep(parseFloat(MAXEMI).toFixed(2)));
	$("#CRSU_MAXEMI").next().addClass('active');
	
	//GetLoanEligibil();
	
} */

/* function GetPropoLoan()
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
	$("#CRSU_PROPLOAN").val(CURINRCommaSep(parseFloat(PROPLOAN).toFixed(2)));
	$("#CRSU_PROPLOAN").next().addClass('active'); 
	GetOutStand();
} */

/* function GetOutStand()
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
} */


/* function GetLoanexpos()
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
} */

 function Getbussiness()
{ 
//Branch/Location
	var xml=UI_getdata("BRANCH","","","","","LSW_SGETFINANCIALVAL");
    $("#CRSU_BRANCHLOC").html("");
    $("#CRSU_BRANCHLOC").append($(xml).find("RESULT").html());
    $("#CRSU_BRANCHLOC").material_select();

//Type of Industry
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
//Revised Credit Summation
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
	$("#CRSU_REVBUSICRESUM").val(revised);
	$("#CRSU_REVBUSICRESUM").next().addClass('active');
	//Monthavg();
}

/* var check=UI_getdata($("#PrcsID").val(),$("#CRSU_SCHEMEID").val(),"","","","LSW_SGETLOANCUSNAME");
$("#CRSU_MULTIPLIER").val($(check).find ('MULTIPLIER').text()); */

function Totalcost(){
//Total Fixed Cost
var A1=$("#CRSU_BUSIPREMRENT").val().replace(/,/g,'');
var A2=$("#CRSU_EMPSALARY").val().replace(/,/g,'');
var A3=$("#CRSU_OTHFIXCOST").val().replace(/,/g,'');

var Total= parseFloat(A1)+parseFloat(A2)+parseFloat(A3);
if(isNaN(Total))
{
Total=0;
}
$("#CRSU_TOTFIXCOST").val(CURINRCommaSep(parseFloat(Total).toFixed(2)));
$("#CRSU_TOTFIXCOST").next().addClass('active');
}


function loan()
{
//Loan Eligibility Based on ABB
var LOANAMT=$("#CRSU_LOANAMTREQ").val().replace(/,/g,'');
var FINALABB=$("#CRSU_FINALABB").val().replace(/,/g,'');
var EMI=$("#CRSU_EMI").val().replace(/,/g,'');
var REVCREDSUMMAT=$("#CRSU_REVBUSICRESUM").val().replace(/,/g,'');
var TENURE=$("#CRSU_PROTENTURE").val().replace(/,/g,'');
var EMILAST12=$("#CRSU_EMITRACKLAST12").val().replace(/,/g,'');
var calc1=parseFloat(parseFloat(FINALABB*50/100)/EMI * 100000)
var xmlBRANCHAMT=UI_getdata("BRANCH",$("#CRSU_BRANCHLOC").val(),"","","","LSW_SGETFINANCIALVAL");
var BRANCHAMT=$(xmlBRANCHAMT).find ('AMOUNT').text();
if(isNaN(calc1))
{
calc1=0;
}

if((calc1 <100000) || REVCREDSUMMAT <50000)
{
var LOANABB=0
}
else if (REVCREDSUMMAT>149999 && ((EMILAST12*TENURE*4)>300000))
{

var LOANABB=Math.min(LOANAMT, calc1,REVCREDSUMMAT/(75/100), EMILAST12*TENURE*4,BRANCHAMT) 
}
else
{
var LOANABB=Math.min(LOANAMT,calc1, REVCREDSUMMAT*2, 300000)
}

LOANABB=Math.round(LOANABB/1000) * 1000
$("#CRSU_LOANELIGABB").val(CURINRCommaSep(parseFloat(LOANABB).toFixed(2)));
$("#CRSU_LOANELIGABB").next().addClass('active');

var ABB=$("#CRSU_LOANELIGABB").val().replace(/,/g,'');
var CRESUM=$("#CRSU_LOANELIGCRDSUM").val().replace(/,/g,'');
var xmlSTPVAL=UI_getdata($("#PrcsID").val(),"","","","","LSW_SSTPCREDSUMDET")
var STPRES=$(xmlSTPVAL).find('RESULT').text()
	
	if(STPRES=='YES')
	{
		var FINALLONSTP=Math.max(ABB,CRESUM)
		$("#CRSU_FINALLOANELIG").val(CURINRCommaSep(parseFloat(FINALLONSTP).toFixed(2)));
		$("#CRSU_FINALLOANELIG").next().addClass('active');
	}

}

function LOANCS()
{
//Loan Eligibility Based on Credit Summation
var ADJSLOANMF1 = $($($("#TableCS").find(".tbodytr")[5]).find(".tbodytrtd")[1]).find(".MULTIPLIERCAL").val()
var ADJSLOANMG1 = $($($("#TableCS").find(".tbodytr")[5]).find(".tbodytrtd")[2]).find(".MULTIPLIERCAL").val()
var ADJSLOANMH2 = $($($("#TableCS").find(".tbodytr")[5]).find(".tbodytrtd")[3]).find(".MULTIPLIERCAL").val()
var ADJSLOANMI5 = $($($("#TableCS").find(".tbodytr")[5]).find(".tbodytrtd")[4]).find(".MULTIPLIERCAL").val()

ADJSLOANMF1=ADJSLOANMF1.replace(/,/g,'');
ADJSLOANMG1=ADJSLOANMG1.replace(/,/g,'');
ADJSLOANMH2=ADJSLOANMH2.replace(/,/g,'');
ADJSLOANMI5=ADJSLOANMI5.replace(/,/g,'');

var y=$("#CRSU_EMI").val().replace(/,/g,'');
var MF1 = parseFloat(ADJSLOANMF1/y)*100000 
var MG1 = parseFloat(ADJSLOANMG1/y)*100000
var MH2 = parseFloat(ADJSLOANMH2/y)*100000
var MI5 = parseFloat(ADJSLOANMI5/y)*100000

if(isNaN(MF1))
{
MF1=0;
}
if(isNaN(MG1))
{
MG1=0;
}
if(isNaN(MH2))
{
MH2=0;
}
if(isNaN(MI5))
{
MI5=0;
}

if(MH2 > 300000)
	{
	var MR36=Math.min(MH2,500000)
	}
else 
	{
	var MR36=Math.min(MI5,300000)
	}

if(MR36 < 100000)
	{
	var E1=0
	}
	else
	{
	var E1=MR36
	} 
	
if (MF1 > 500000)
	{
	var E2=MF1
	}   
else 
	{
	var E2=E1
	}
	
if(MF1 > 500000) 
	{
	var E3=MF1
	}
else 
	{
	var E3=E1
	}
	
if(MG1 > 500000) 
	{
	var E4=MG1
	}
else 
	{
	var E4=E1
	}
var indus=$("#CRSU_TYPEINDUS").val();	
var xmlINDUS=UI_getdata("TYPEBUSINESS1",indus,"","","","LSW_SGETFINANCIALVAL");
var INDUSTRY=$(xmlINDUS).find ('INDUS').text();
if($("#CRSU_BRANCHLOC").val()=="Others")
{
var LOANC1=E1
}
else if(INDUSTRY!="Trader")
{
var LOANC1=E3
}
else
{
var LOANC1=E4
}
var xmlBRANCHAMT=UI_getdata("BRANCH",$("#CRSU_BRANCHLOC").val(),"","","","LSW_SGETFINANCIALVAL");
var BRANCHAMT=$(xmlBRANCHAMT).find ('AMOUNT').text();

var FINALLOANCS=Math.min(LOANC1,$("#CRSU_LOANAMTREQ").val(),BRANCHAMT)
FINALLOANCS=Math.round(FINALLOANCS/1000) * 1000
if(isNaN(FINALLOANCS))
{
FINALLOANCS=0;
}
$("#CRSU_LOANELIGCRDSUM").val(CURINRCommaSep(parseFloat(FINALLOANCS).toFixed(2)));
$("#CRSU_LOANELIGCRDSUM").next().addClass('active');
 
var ABB=$("#CRSU_LOANELIGABB").val().replace(/,/g,'');
var CRESUM=$("#CRSU_LOANELIGCRDSUM").val().replace(/,/g,'');
var xmlSTPVAL=UI_getdata($("#PrcsID").val(),"","","","","LSW_SSTPCREDSUMDET")
var STPRES=$(xmlSTPVAL).find('RESULT').text()
	
	if(STPRES=='YES')
	{
		var FINALLONSTP=Math.max(ABB,CRESUM)
		$("#CRSU_FINALLOANELIG").val(CURINRCommaSep(parseFloat(FINALLONSTP).toFixed(2)));
		$("#CRSU_FINALLOANELIG").next().addClass('active');
	}
}




function finalloan()
{
//Final loan eligible for Funding
var ABB=$("#CRSU_LOANELIGABB").val().replace(/,/g,'');
var CRESUM=$("#CRSU_LOANELIGCRDSUM").val().replace(/,/g,'');
var ASSESSMENT=$("input[name='CRSU_CREDITSUM']:checked"). val();


	
		if(ASSESSMENT=="ABB")
		{
		$("#CRSU_FINALLOANELIG").val(CURINRCommaSep(parseFloat(ABB).toFixed(2)));
		$("#CRSU_FINALLOANELIG").next().addClass('active');
		}
		if(ASSESSMENT=="Credit Summation")
		{
		$("#CRSU_FINALLOANELIG").val(CURINRCommaSep(parseFloat(CRESUM).toFixed(2)));
		$("#CRSU_FINALLOANELIG").next().addClass('active');
		}
	

}	


function GridControlDetailCREDITSUMMATION(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
				{
                targets: 1,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="CRSG_NOMULTIPLIER' + rowno + '"  name="CRSG_NOMULTIPLIER' + rowno + '" maxlength="25" disabled class="form-control MULTIPLIERCAL IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CRSG_NOMULTIPLIER' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CRSG_NOMULTIPLIER' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
			{
                targets: 2,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="CRSG_MULTIPLIERONE' + rowno + '"  name="CRSG_MULTIPLIERONE' + rowno + '" maxlength="25" disabled class="form-control MULTIPLIERCAL IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CRSG_MULTIPLIERONE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CRSG_MULTIPLIERONE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
			{
                targets: 3,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="CRSG_MULTIPLIERTWO' + rowno + '"  name="CRSG_MULTIPLIERTWO' + rowno + '" maxlength="25" disabled class="form-control MULTIPLIERCAL IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CRSG_MULTIPLIERTWO' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CRSG_MULTIPLIERTWO' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
			{
                targets: 4,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" style = "width:200px" id="CRSG_MULTIPLIERFIVE' + rowno + '"  name="CRSG_MULTIPLIERFIVE' + rowno + '" maxlength="25" onblur="LOANCS();" disabled class="form-control MULTIPLIERCAL IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CRSG_MULTIPLIERFIVE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CRSG_MULTIPLIERFIVE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            } 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}
$(document).on("change", ".GRIDCAL", function(){
var REVCREDSUM=$('#CRSU_REVBUSICRESUM').val().replace(/,/g,'');
var MONTH=$("#CRSU_BANKMONTHS").val().replace(/Month/g,'');
var indus=$("#CRSU_TYPEINDUS").val().replace(/,/g,'');
var xmlMARGIN=UI_getdata("TYPEBUSINESS1",indus,"","","","LSW_SGETFINANCIALVAL");
var MARGIN=$(xmlMARGIN).find ('MARGIN').text();
var TOTFIXCOST=$("#CRSU_TOTFIXCOST").val().replace(/,/g,'');
var OWNHOUSE=$("input[name='CRSU_OWNHOUSE']:checked"). val()
var TOTEXISOBLI=$("#CRSU_EXISTEMIOBLI").val().replace(/,/g,'');
var OBLICLOSESIX=$("#CRSU_OBLICLOSENEXT6").val().replace(/,/g,'');
var EMITRACK12=$("#CRSU_EMITRACKLAST12").val().replace(/,/g,'');

var TABLELENGHT=$("#TableCS").find(".tbodytr").length
for(var j=0;j<TABLELENGHT;j++)
{
		if(j==0)
		{
		var AVGCREDSUM=parseFloat((REVCREDSUM/MONTH)).toFixed(2)
		if(isNaN(AVGCREDSUM))
		{
			AVGCREDSUM=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[1]).find('input').val(AVGCREDSUM)
		var AVGCREDSUM1=parseFloat(AVGCREDSUM*1.5).toFixed(2)
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[2]).find('input').val(AVGCREDSUM1)
		var AVGCREDSUM2=parseFloat(AVGCREDSUM*2).toFixed(2)
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[3]).find('input').val(AVGCREDSUM2)
		var AVGCREDSUM5=parseFloat(AVGCREDSUM*5).toFixed(2)
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[4]).find('input').val(AVGCREDSUM5)
		}
		if(j==1)
		{
		var GROSSPROF=parseFloat(AVGCREDSUM*(MARGIN/100)).toFixed(2)
		if(isNaN(GROSSPROF))
		{
			GROSSPROF=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[1]).find('input').val(GROSSPROF)
		var GROSSPROF1=parseFloat(AVGCREDSUM1*(MARGIN/100)).toFixed(2)
		if(isNaN(GROSSPROF1))
		{
			GROSSPROF1=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[2]).find('input').val(GROSSPROF1)
		var GROSSPROF2=parseFloat(AVGCREDSUM2*(MARGIN/100)).toFixed(2)
		if(isNaN(GROSSPROF2))
		{
			GROSSPROF2=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[3]).find('input').val(GROSSPROF2)
		var GROSSPROF5=parseFloat(AVGCREDSUM5*(MARGIN/100)).toFixed(2)
		if(isNaN(GROSSPROF5))
		{
			GROSSPROF5=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[4]).find('input').val(GROSSPROF5)
		}
		if(j==2)
		{
		var NETPROF=parseFloat(GROSSPROF-TOTFIXCOST).toFixed(2)
		if(isNaN(NETPROF))
		{
			NETPROF=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[1]).find('input').val(NETPROF)
		var NETPROF1=parseFloat(GROSSPROF1-TOTFIXCOST).toFixed(2)
		if(isNaN(NETPROF1))
		{
			NETPROF1=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[2]).find('input').val(NETPROF1)
		var NETPROF2=parseFloat(GROSSPROF2-TOTFIXCOST).toFixed(2)
		if(isNaN(NETPROF2))
		{
			NETPROF2=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[3]).find('input').val(NETPROF2)
		var NETPROF5=parseFloat(GROSSPROF5-TOTFIXCOST).toFixed(2)
		if(isNaN(NETPROF5))
		{
			NETPROF5=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[4]).find('input').val(NETPROF5)
		}
		if(j==3)
		{
		if(OWNHOUSE=='Yes')
		{
		var DSR=parseFloat(NETPROF*70/100).toFixed(2)
		if(isNaN(DSR))
		{
			DSR=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[1]).find('input').val(DSR)
		var DSR1=parseFloat(NETPROF1*70/100).toFixed(2)
		if(isNaN(DSR1))
		{
			DSR1=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[2]).find('input').val(DSR1)
		var DSR2=parseFloat(NETPROF2*70/100).toFixed(2)
		if(isNaN(DSR2))
		{
			DSR2=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[3]).find('input').val(DSR2)
		var DSR5=parseFloat(NETPROF5*70/100).toFixed(2)
		if(isNaN(DSR5))
		{
			DSR5=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[4]).find('input').val(DSR5)
		}
		else
		{
		var DSR=parseFloat(NETPROF*60/100).toFixed(2)
		if(isNaN(DSR))
		{
			DSR=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[1]).find('input').val(DSR)
		var DSR1=parseFloat(NETPROF1*60/100).toFixed(2)
		if(isNaN(DSR1))
		{
			DSR1=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[2]).find('input').val(DSR1)
		var DSR2=parseFloat(NETPROF2*60/100).toFixed(2)
		if(isNaN(DSR2))
		{
			DSR2=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[3]).find('input').val(DSR2)
		var DSR5=parseFloat(NETPROF5*60/100).toFixed(2)
		if(isNaN(DSR5))
		{
			DSR5=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[4]).find('input').val(DSR5)
		}
		}
		if(j==4)
		{
		if(isNaN(TOTEXISOBLI))
		{
			TOTEXISOBLI=0;
		}
		if(isNaN(OBLICLOSESIX))
		{
			OBLICLOSESIX=0;
		}
		if(TOTEXISOBLI=='')
		{
		TOTEXISOBLI=0;
		}
		if(OBLICLOSESIX=='')
		{
		OBLICLOSESIX=0;
		}
		var TOTOBLI=parseFloat(TOTEXISOBLI) - parseFloat(OBLICLOSESIX)
		if(isNaN(TOTOBLI))
		{
			TOTOBLI=0;
		}
		var EXISTOBLI=parseFloat(DSR-TOTOBLI).toFixed(2)
		if(isNaN(EXISTOBLI))
		{
			EXISTOBLI=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[1]).find('input').val(EXISTOBLI)
		var EXISTOBLI1=parseFloat(DSR1-TOTOBLI).toFixed(2)
		if(isNaN(EXISTOBLI1))
		{
			EXISTOBLI1=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[2]).find('input').val(EXISTOBLI1)
		var EXISTOBLI2=parseFloat(DSR2-TOTOBLI).toFixed(2)
		if(isNaN(EXISTOBLI2))
		{
			EXISTOBLI2=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[3]).find('input').val(EXISTOBLI2)
		var EXISTOBLI5=parseFloat(DSR5-TOTOBLI).toFixed(2)
		if(isNaN(EXISTOBLI5))
		{
			EXISTOBLI5=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[4]).find('input').val(EXISTOBLI5)
		}
		if(j==5)
		{
		var ADDADJSTLOAN=parseFloat(Math.min(EXISTOBLI,EMITRACK12*4)).toFixed(2)
		if(isNaN(ADDADJSTLOAN))
		{
			ADDADJSTLOAN=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[1]).find('input').val(ADDADJSTLOAN)
		var ADDADJSTLOAN1=parseFloat(Math.min(EXISTOBLI1,EMITRACK12*4)).toFixed(2)
		if(isNaN(ADDADJSTLOAN1))
		{
			ADDADJSTLOAN1=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[2]).find('input').val(ADDADJSTLOAN1)
		var ADDADJSTLOAN2=parseFloat(Math.min(EXISTOBLI2,EMITRACK12*4)).toFixed(2)
		if(isNaN(ADDADJSTLOAN2))
		{
			ADDADJSTLOAN2=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[3]).find('input').val(ADDADJSTLOAN2)
		var ADDADJSTLOAN5=EXISTOBLI5
		if(isNaN(ADDADJSTLOAN5))
		{
			ADDADJSTLOAN5=0;
		}
		$($($("#TableCS").find(".tbodytr")[j]).find(".tbodytrtd")[4]).find('input').val(ADDADJSTLOAN5)
		}
	
}
LOANCS();
});

