
function Product()
{
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#FOIR_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS")
	$("#FOIR_PRODUCT").val($(xmlSTATUS).find('PRODUCT').text());
	$("#FOIR_PRDNAME").val($(xmlSTATUS).find('PRDNAME').text());
	$("#FOIR_INAPPROIPRO").val($(xmlSTATUS).find('INTERESTRATE').text());
	$("#FOIR_SETENUREPRO").val($(xmlSTATUS).find('TENTURE').text())
}

$(document).on("blur", ".Charges", function() {
	
	 var PAT=$("#FOIR_PAT").val().replace(/,/g,'');
	 var DEP=$("#FOIR_DEP").val().replace(/,/g,'');
	 var Inter=$("#FOIR_INEXCPART").val().replace(/,/g,'');
	 var Remun=$("#FOIR_REMPARTNER").val().replace(/,/g,'');
	 var ONBI=$("#FOIR_OTHNONBUS").val().replace(/,/g,'');
	 var AIOI=$("#FOIR_AGROTHERINC").val().replace(/,/g,'');
	 var IndTax=$("#FOIR_INDIVITAX").val().replace(/,/g,'');
	 
	 if(PAT=="")
	 {
		PAT=0; 
	 }
	 if(DEP=="")
	 {
		DEP=0; 
	 }
	 if(Inter=="")
	 {
		Inter=0; 
	 }
	 if(Remun=="")
	 {
		Remun=0; 
	 }
	 if(ONBI=="")
	 {
		ONBI=0; 
	 }
	 if(AIOI=="")
	 {
		AIOI=0; 
	 }
	 if(IndTax=="")
	 {
		IndTax=0; 
	 }
	 var den=parseFloat(Remun)*parseFloat(75)/parseFloat(100);
	 if(isNaN(den))
		{
			den=0;
		}
	 var pen=parseFloat(ONBI)*parseFloat(25)/parseFloat(100);
	 if(isNaN(pen))
		{
			pen=0;
		}
	 var gen = parseFloat(AIOI)*parseFloat(75)/parseFloat(100);
	 if(isNaN(gen))
		{
			gen=0;
		}
		
	  
	 var TotEligVal=parseFloat(PAT)+parseFloat(DEP)+parseFloat(Inter)+parseFloat(den)-parseFloat(pen)-parseFloat(gen)-parseFloat(IndTax);
	if(isNaN(TotEligVal))
		{
			TotEligVal=0;
		}
		
	 //(d*75%)-(e*25%)-(f*75%)-g
	 var TotEligPM=parseFloat(TotEligVal/12);
	 if(isNaN(TotEligPM))
		{
			TotEligPM=0;
		} 
	 $("#FOIR_TOEGPERANM").val(CURINRCommaSep(parseFloat(TotEligVal).toFixed(2)));
     $("#FOIR_TOEGPERANM").next().addClass('active');
	 
	 $("#FOIR_TOEGPERMON").val(CURINRCommaSep(parseFloat(TotEligPM).toFixed(2)));
	$("#FOIR_TOEGPERMON").next().addClass('active');
	var FOIR=$("#FOIR_FOIRPER").val();
	var nun=parseFloat(TotEligPM)*(parseFloat(FOIR)/100); 
	if(isNaN(nun))
		{
			nun=0;
		}
	$("#FOIR_FOIREGINC").val(CURINRCommaSep(parseFloat(nun).toFixed(2))); 
    $("#FOIR_FOIREGINC").next().addClass('active');
		//wmi calculation 
		
		
		var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#FOIR_INAPPROIPRO").val();
	Tenur=$("#FOIR_SETENUREPRO").val();
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
	$("#FOIR_EMIASPRO").val(CURINRCommaSep(parseFloat(EMI).toFixed(0)));
	$("#FOIR_EMIASPRO").next().addClass('active');	
 
 
 
 
    var ExEMI=$("#FOIR_EXEMIBORFUN").val().replace(/,/g,'');
	if(ExEMI=="")
	{
		ExEMI=0;
	}
	if(nun=="")
	{
		nun=0;
	}
	var PREFUNFCF = (parseFloat(nun)-parseFloat(ExEMI));
	 if(isNaN(PREFUNFCF))
		{
			PREFUNFCF=0;
		}
	$("#FOIR_PREFUNFCF").val(CURINRCommaSep(parseFloat(PREFUNFCF).toFixed(2))); 
    $("#FOIR_PREFUNFCF").next().addClass('active');
	
	var PreFun= $("#FOIR_PREFUNFCF").val().replace(/,/g,'');
	
	var EMI= $("#FOIR_EMIASPRO").val().replace(/,/g,'');
	
	if(PreFun=="")
	{
		PreFun=0;
	}
	
	if(EMI=="")
	{
		EMI=0;
	}
	var LOANEGBI=(parseFloat(PreFun)/parseFloat(EMI)*100000);
	 if(isNaN(LOANEGBI))
		{
			LOANEGBI=0;
		}
	$("#FOIR_LOANEGBI").val(CURINRCommaSep(parseFloat(LOANEGBI).toFixed(2))); 
	 $("#FOIR_LOANEGBI").next().addClass('active');
	 var LonElig=$("#FOIR_LOANEGBI").val().replace(/,/g,'');
         var LOANPROP =Math.min(LonElig,$("#DMY3").val().split('|')[0]);
		 if(isNaN(LOANPROP))
		{
			LOANPROP=0;
		}
  $("#FOIR_LOANPROP").val(CURINRCommaSep(parseFloat(LOANPROP).toFixed(2)));
   $("#FOIR_LOANPROP").next().addClass('active');
   
   var PREFUNDSCR=parseFloat(TotEligPM)/parseFloat(ExEMI);
    if(isNaN(PREFUNDSCR))
		{
			PREFUNDSCR=0;
		}
	if(PREFUNDSCR=="Infinity")
		{
			PREFUNDSCR=0;
		}
   $("#FOIR_PREFUNDSCR").val(CURINRCommaSep(parseFloat(PREFUNDSCR).toFixed(2)));
    $("#FOIR_PREFUNDSCR").next().addClass('active');
	
 
var ROI=0;
var Tenur=0; 
ROI=$("#FOIR_INAPPROIPRO").val();
Tenur=$("#FOIR_SETENUREPRO").val();
var result=UI_getdata(ROI,Tenur,LOANPROP,"","","LSW_SGETEMI_DATA");
var EMI1=$(result).find("EMI").text();
if(EMI1=='')
{
EMI1=0;
}
if(isNaN(EMI1))
{
EMI1=0;
}
/* $("#FOIR_EMIASPRO").val(CURINRCommaSep(parseFloat(EMI1).toFixed(2)));
$("#FOIR_EMIASPRO").next().addClass('active');  */



	//var EMI1=$("#FOIR_EMIASPRO").val().replace(/,/g,'');
	var POSTFUNDSCR=parseFloat(TotEligPM)/(parseFloat(ExEMI)+parseFloat(EMI1));
	if(isNaN(POSTFUNDSCR))
		{
			POSTFUNDSCR=0;
		}
	if(POSTFUNDSCR=="Infinity")
		{
			POSTFUNDSCR=0;
		}
   $("#FOIR_POSTFUNDSCR").val(CURINRCommaSep(parseFloat(POSTFUNDSCR).toFixed(2)));
	$("#FOIR_POSTFUNDSCR").next().addClass('active');
//	IFERROR(PMT($B$4/12,$B$5,-100000), 0)
	
})
function EMIAMOUNT()
{
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETEMIAMOUNT")
	$("#FOIR_EXEMIBORFUN").val($(xmlSTATUS).find('AMOUNT').text())
	
}

/*
$(document).on("blur", ".SCROLL", function() {
 var fe=$("#FOIR_FOIREGINC").val();
 var cp=$("#FOIR_EXEMIBORFUN").val();
 var pf=parseFloat(fe)-parseFloat(cp);
 $("#FOIR_PREFUNFCF").val(pf);
 $("#FOIR_PREFUNFCF").next().addClass('active');

})

*/



