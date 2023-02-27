function BTCOMMITMENT()
{
	
	//var op=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETLONTYP")
	
	if ($("#DMY7").val().split("|")[0] != "BT")
	{
	
	//if($(op).find("DECIDE").text()=="NA")
		//{
	    $(".BT").hide();
		$(".BTCHAGS1").removeClass("APCMMndtry");
		$(".BTRADIO").removeClass("APCMMndtry");
		}
	else{
		$(".BT").show();
	    $(".BTCHAGS1").addClass("APCMMndtry");
		 $(".BTRADIO").addClass("APCMMndtry");
		var BTCOMMITMENT=$("input[name='APCM_ISBTCMNTCHRGAPPLY']:checked"). val();
		
		if(BTCOMMITMENT=="No")
			{
			// $('.BTCHAGS').val('');
			// $('.BTCHAGS').attr('disabled',true)		 
			// $('.BTCHAGS').next().addClass('active');
			 GetBTAmt()
			}
		else
	       { 
			 $('.BTCHAGS').attr('disabled',false)
	       }


}
} 


function CROSSCELLI()
{
	var CROSSCELLI=$("input[name='APCM_ISCROSSELL1APPLY']:checked"). val();
	
	if(CROSSCELLI=="No")
		{
	   	// $("#APCM_CROSSELL1YR").val('');
		// $("#APCM_CROSSELL1YR").next().removeClass('active');
		 $('.CRSELLI').hide();
		}
	else
        { 
		$('.CRSELLI').show();
        }
} 

function CROSSCELLIIAPPLY()
{
	var CROSSCELLII=$("input[name='APCM_ISCROSSELL2APPLY']:checked"). val();
	
	if(CROSSCELLII=="No")
		{
	   	// $("#APCM_CROSSELL2YR").val('');
		 //$("#APCM_CROSSELL2YR").next().removeClass('active');
		 $('.CRSELLII').hide();
		}
	else
        { 
		$('.CRSELLII').show();
        }
} 

function CHECKLOANTYPE()
{
	var PrcsID=$("#PrcsID").val()	
	var xml=UI_getdata(PrcsID,$("#APCM_LOANID").val(),"","","","LSW_SCHKLOANTYPE")
	var PENDINGCHK=$(xml).find('RESULT').text();
	if(PENDINGCHK=='N')
	{
		$('.DECT').hide();
	}
	else
	{
		$('.DECT').show();
	}
}
/*function PROPERTYINS()
{
	var html = $(event.target).closest('.DYNROW')
	var PROINSURANCE=$(html).find('input[name=APRC_ISPROPAPPLY]:checked').val();;
	
	if(PROINSURANCE=="No")
		{
		
		
	   	 //$("#APCM_PROPYR").val('');
		 //$("#APCM_PROPYR").next().removeClass('active');
		 $(html).find('.PROINSU').hide();
		}
	else
        { 
		$(html).find('.PROINSU').show();
        }
} */

function getROIFrmFinc()
{
	var PrcsID=$("#PrcsID").val()
	
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETFINCDATAFRMCHARG")
	
	if($("#APCM_EFFCTVINTRST").val()=="")
	{
	$("#APCM_EFFCTVINTRST").val($(xml).find('ROI').text());
	}
	$("#APCM_LOANAMT").val(CURINRCommaSep($(xml).find('LonAmt').text()))	
}

function CalcEffectChargAmt()
{
	var LoanAmt=$("#DMY3").val().split("|")[3];
	var ChargeRate=$("#APCM_ACHRGRT").val()
	
	var EffectCharge1="";
	if(ChargeRate!="")
	{
	   var EffectCharge=parseFloat(LoanAmt)*parseFloat(ChargeRate)/100
	   $("#APCM_WOGSTCHRGAMT").val(CURINRCommaSep(EffectCharge));
	}
	// Added Bala 
	var op = UI_getdata($("#PrcsID").val(),EffectCharge,"","","","LSW_SGETAFWGST");
	//end
	//EffectCharge1=EffectCharge*0.18
	//$("#APCM_AECHRGAMTN").val(CURINRCommaSep(parseFloat(EffectCharge+EffectCharge1).toFixed(2)));
	$("#APCM_AECHRGAMTN").val(CURINRCommaSep($(op).find('AF').text()))
	$("#APCM_AECHRGAMTN").next().addClass('active');
	
	if($("#APCM_WOGSTCHRGAMT").val().replace(/,/g,'')==0){
		
		 $('input[name="APCM_ARECVAMTBY"]').prop('checked', false);
		$('input[name=APCM_ARECVAMTBY]').attr('disabled',true);
		 $('input[name=APCM_ARECVAMTBY]').closest('.select-radio').removeClass("APCMMndtry");
		  
		 $('.ADFEE').hide()
			$('.ADCHK').hide();
			$('.ADOnlineMode').hide();	
			$('.ADCHKCHAGE').removeClass("APCMMndtry");
		    $('.ADOnlineModeFld').removeClass("APCMMndtry");
		    $('.ADRedioMNDRY').removeClass("APCMMndtry");
		    $('input[name="APCM_MODE"]').prop('checked', false);
		 
		 
         }
	  else if($("#APCM_WOGSTCHRGAMT").val().replace(/,/g,'')!=0){
         //  $('input[name="APCM_ARECVAMTBY"]').prop('checked', false);
			 $('input[name=APCM_ARECVAMTBY]').attr('disabled',false);
			 $('input[name=APCM_ARECVAMTBY]').closest('.select-radio').addClass("APCMMndtry");
	         }
		
	
	LoadGSTtoEfct();
}


function CheckMode(ModeVal,Evnt)
{
	var HTML="";
	if(Evnt=="Change")
		{
		 HTML = $(event.target).closest('.ROOT');
		}
	else{
		HTML = $(ModeVal).closest('.ROOT');
		ModeVal=$('input[name="'+Evnt+'"]:checked').val()
	}
	$(HTML).find(".CHK").hide();
	$(HTML).find(".OnlineMode").hide();
	var Mode=ModeVal;
	
	if(Mode=="Online")
		{
		$(HTML).find(".CHK").hide();
		$(HTML).find(".OnlineMode").show();		
		$(HTML).find('.CHKCHAGE').removeClass("APCMMndtry");
	//	$(HTML).find('.CHKCHAGE').val('')
	//	$(HTML).find('.CHKCHAGE').next().removeClass('active')
		$(HTML).find('.OnlineModeFld').addClass("APCMMndtry");
		}
	else if(Mode=="Cheque" || Mode=="DD")
		{
		$(HTML).find(".CHK").show();
		$(HTML).find(".CDD").next().removeClass('active');
		$(HTML).find(".OnlineMode").hide();
		$(HTML).find('.CHKCHAGE').addClass("APCMMndtry");
		$(HTML).find('.OnlineModeFld').removeClass("APCMMndtry");

		}
	else{
		$(HTML).find(".CHK").hide();
		$(HTML).find(".OnlineMode").hide();
	    }
}
function ChKModeDataClear(HTML)
{
  $(HTML).find(".CHKCHAGE").val('')
  $(HTML).find(".CHKCHAGE").next().removeClass('active'); 
$(HTML).find('.OnlineModeFld').val('')
$(HTML).find('.OnlineModeFld').next().removeClass('active')
$(HTML).find('.OnlineModeFld').material_select("destroy");
$(HTML).find('.OnlineModeFld').material_select();
}

function ChkPayAmt()
{
var PayAmt=$("#APCM_AAMNT").val()
    if(PayAmt == "0")
	{
	 alert('Amount is  should not entered zero allow to make payment')
	 $("#APCM_AAMNT").val('')
	 return false;
	}
}

function GetBTAmt()
{
  var LoanAmt=$("#DMY3").val().split("|")[3] 
  if($("#APCM_BTAMNT").val()=="")
  {
  var BTAmt=$("#APCM_BTAMNT").val(CURINRCommaSep(LoanAmt));
  }
  
  $("#APCM_BTPAMNT").val(CURINRCommaSep(parseFloat(LoanAmt)*0.009))
}

function getPendAmt()
{
  var PrcsId=$("#PrcsID").val()  
  var xml=UI_getdata(PrcsId,"","","","","LSW_SGETPANDAMT")
  if($(xml).find('PENDINGAMT').text()==0)
	  {
	//  $('input[name=APCM_PFCOLLECTED]').attr('disabled',true);
	//  $('input[name=APCM_PFCOLLECTED]').closest('.select-radio').removeClass("APCMMndtry");
	  }
  $("#APCM_PENDNGAMT").val(CURINRCommaSep($(xml).find('PENDINGAMT').text()))
  $("#APCM_PENDNGAMT").attr('disabled',true);
}

/* CHANGED FOR KERALA CESS START JIRA 3092*/
function getCollateral()
{
	  var PrcsId=$("#PrcsID").val()  
	  var LoanAmt=$("#APCM_LOANAMT").val().replace(/,/g,'')
	  var EffectCharge=0;
	  	if ($("#DMY7").val().split("|")[6] == "Yes")
		{
			
				var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETCOLTRLCNT");
    	$("#APCM_NOOFCERSAI").val($(op).find("NOOFCOLTRL").text());
    	EffectCharge = $(op).find("CHRGAMT").text();
		$("#APCM_WOEFFCTCGRGAMTCERSAI").val($(op).find("WOGSTCHRGAMT").text());
			
	     /* var xml=UI_getdata(PrcsId,"","","","","LSW_SGETPFCOUNT")
	             $("#APCM_NOOFCERSAI").val($(xml).find('PFCOUNT').text())
	      var CollCont= $("#APCM_NOOFCERSAI").val()
	          EffectCharge=parseFloat('118')*parseInt(CollCont)//100*/
		}
		$("#APCM_EFFCTCGRGAMTCERSAI").val(CURINRCommaSep(EffectCharge));
		$("#APCM_EFFCTCGRGAMTCERSAI").next().addClass('active');
}
/* CHANGED FOR KERALA CESS END JIRA 3092*/

function ASSIGNVALTOFLD(){
	/*if($("#APCM_EFFCTVINTRST").val()==""){*/
		var op = UI_getdata($("#DMY3").val(),$("#PrcsID").val(),$("#APCM_LOANID").val(),"","","LSW_SSETCHRGVALFLD");
		var text = op;
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(text,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x[0].childNodes.length ;i++) {
			if(x[0].childNodes[1].childNodes[0]!=undefined)
				{
					if(x[0].childNodes[i].nodeName=="APCM_BTAMNT")
					{
						if($("#"+x[0].childNodes[i].nodeName).val()=="")
						{
						  $("#"+x[0].childNodes[i].nodeName).val(x[0].childNodes[i].childNodes[0].nodeValue);
				          $("#"+x[0].childNodes[i].nodeName).next().addClass('active');
						}
					}
					else if(x[0].childNodes[i].nodeName=="APCM_EFFCTVINTRST")
					{
						if($("#"+x[0].childNodes[i].nodeName).val()=="")
						{
						  $("#"+x[0].childNodes[i].nodeName).val(x[0].childNodes[i].childNodes[0].nodeValue);
				          $("#"+x[0].childNodes[i].nodeName).next().addClass('active');
						}
					}
					else
					{
				       $("#"+x[0].childNodes[i].nodeName).val(x[0].childNodes[i].childNodes[0].nodeValue);
				       $("#"+x[0].childNodes[i].nodeName).next().addClass('active');
					}
				}
			}
	    $("#APCM_BTAMNT").val(CURINRCommaSep($("#APCM_BTAMNT").val().replace(/,/g,'')));
		$("#APCM_BTPAMNT").val(CURINRCommaSep($("#APCM_BTPAMNT").val().replace(/,/g,'')));

	/*}*/
			
		
			var Pending=$("#APCM_PENDNGAMT").val().replace(/,/g,'')
              if(parseFloat(Pending)<=0)
			  {
			  $('input[name=APCM_PFCOLLECTED]').attr('disabled',true);
			  $('input[name=APCM_PFCOLLECTED]').closest('.select-radio').removeClass("APCMMndtry");
			   $("#APCM_PENDNGAMT").val('0')
			  $("#APCM_AMNTCOLLCT").val('0')
			  }
			
	
}

function ChrgAmtOnChng(){
	var LonAmt = $("#DMY3").val().split("|")[3]
	var per = $("#APCM_ACHRGRT").val()/100;
	$("#APCM_AECHRGAMTN").val(CURCommaSep(LonAmt*per));
	$("#APCM_AECHRGAMTN").next().addClass('active');
}

function CalcDDPercnt(){
	
	var BTAmt=$("#APCM_BTPAMNT").val().replace(/,/g,'')
	BTAmt=BTAmt*$("#DMY12").val().split("|")[1]
	if(parseFloat($("#APCM_BTDDNAME").val().replace(/,/g,''))>parseFloat(BTAmt))
			{
		$("#APCM_BTDDNAME").val('');
		$("#APCM_DDPERCNT").val('');
		alert("DD Amount cannot be greater than "+$("#DMY12").val().split("|")[1]+" times of BT Amount")
			}
	else
		{
		$("#APCM_DDPERCNT").val("BT Amount Collected is "+((parseFloat($("#APCM_BTDDNAME").val().replace(/,/g,'')) /parseFloat($("#APCM_BTAMNT").val().replace(/,/g,''))) * 100).toFixed(2)+"%")
		}
}


function Ifscdetls(IDVAL,BNKNAME,BRANCH)
{
var val=GetIfsc($(IDVAL).val());

if($(val).find("BANK").text() == "")
{
$(IDVAL).val('');
$('#'+BNKNAME).val('');
$('#'+BRANCH).val('');
$('#'+BNKNAME).next().removeClass('active');
$('#'+BRANCH).next().removeClass('active');
}
if($(val).find("BANK").text() != "")
{
$('#'+BNKNAME).val($(val).find("BANK").text());	
$('#'+BNKNAME).next().addClass('active');
$('#'+BNKNAME).attr('disabled',true)
}
if($(val).find("BRANCH").text() != "")
{
$('#'+BRANCH).val($(val).find("BRANCH").text());
$('#'+BRANCH).next().addClass('active');
$('#'+BRANCH).attr('disabled',true)
}
}

function HndlModeOnChng(val,id,mode)
{
	if(val!="Deductible")
		{
		$($(id).closest('.form-row').next().find('.md-form')[0]).show();
		$(id).closest('.ROOT').find('.select-radio').last().addClass("APCMMndtry")
		}
	
	else{
		$($(id).closest('.form-row').next().find('.md-form')[0]).hide();
		$(id).closest('.ROOT').find('.select-radio').last().removeClass("APCMMndtry")
		$('input[name="'+mode+'"]').prop('checked', false);
		
		
	}
	CheckMode('','Change');
}

function LoadGSTtoEfct()
{
	$("#APCM_AAMNT").val($("#APCM_AECHRGAMTN").val());
	$("#APCM_AAMNT").next().addClass('active');
}



function CollectionINTRCHRG(TypeFieldID,AmtFieldID,CHKID,Paytype)
{
var Amount = $("#" + AmtFieldID).val().replace(/,/g, "");
var Type = $("#" + TypeFieldID).val();
var PRCSID = $("#PrcsID").val();
var Prvnt = $("#Prvnt").val();

$("#PayType").val(Paytype);

var CollectionType=$("input[name='"+CHKID+"']:checked"). val();

if (CollectionType == undefined)
{
alert("Enter the Collection Type");
return false;
}

if (CollectionType == "Deferred")
{
alert("Enter the Collection Type Collected");
return false;
}

if (Amount == "")
	{
	alert("Enter the Amount");
	return false;
	}

if (Type == "Paytm")
{
var w = "600";
var h = "500";
	var left = (screen.width/2)-(w/2);
	  var top = (screen.height/2)-(h/2);
	  var URL =window.location.origin+"/TPLSW/PAYTM?UniqueID="+Amount+"&Type="+Type+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt;

	  $(".loader").show();	  
	  childWindow =  window.open(URL, "PAYMENT GATEWAY", 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	  	
	//window.open(window.location.origin+"/TPLSW/PAYTMRes?PrMs1=REFID00004320200115215708", "", "width=200,height=100");
}
else
	{
	
	alert("Select Paytm Online Mode");
	
	}
}

function CheckADMINFEECHK()
{
	var ADMINFEE=$("input[name='APCM_ARECVAMTBY']:checked"). val();
	   if(ADMINFEE=="Deductible")
		   {
		   $('.ADFEE').hide()
			$('.ADCHK').hide();
			$('.ADOnlineMode').hide();	
			$('.ADCHKCHAGE').removeClass("APCMMndtry");
		    $('.ADOnlineModeFld').removeClass("APCMMndtry");
		    $('.ADRedioMNDRY').removeClass("APCMMndtry");
		    $('input[name="APCM_MODE"]').prop('checked', false);
		   
	       }
	   else if(ADMINFEE=="Collectible")
	   {
		   $('.ADFEE').show()
		  $('.ADRedioMNDRY').addClass("APCMMndtry");
		   
	   }
	   
}




function CheckADMINFEE()
{
   var ADMINFEE=$("input[name='APCM_ARECVAMTBY']:checked"). val();
   if(ADMINFEE=="Deductible")
	   {
	   $('.ADFEE').hide()
       }
   else if(ADMINFEE=="Collectible")
	   {
        var Mode=$("input[name='APCM_MODE']:checked"). val()
	      
	   if(Mode=="Online")
		{
		$('.ADCHK').hide();
		$('.ADOnlineMode').show();		
		$('.ADCHKCHAGE').removeClass("APCMMndtry");
       $('.ADOnlineModeFld').addClass("APCMMndtry");
		}
	else if(Mode=="Cheque" || Mode=="DD")
		{
		$('.ADCHK').show();
	//	$(".CDD").next().removeClass('active');
		$('.ADOnlineMode').hide();
	    $('.ADCHKCHAGE').addClass("APCMMndtry");
		$('.ADOnlineModeFld').removeClass("APCMMndtry");
        }
	else
		{
		$('.ADCHK').hide();
		$('.ADOnlineMode').hide();	
		$('.ADCHKCHAGE').removeClass("APCMMndtry");
	    $('.ADOnlineModeFld').removeClass("APCMMndtry");
		}
	   
	   }
   else
	   {
	   $('.ADFEE').hide()
	   }


}


function CheckPENDINGCHK()
{
	var ADMINFEE=$("input[name='APCM_PFCOLLECTED']:checked"). val();
	   if(ADMINFEE=="Deductible")
		   {
		   $('.PEFEE').hide()
			$('.PFCHK').hide();
			$('.PFOFFL').hide();
			$('.PFOnlineMode').hide();	
			$('.PFCHKCHAGE').removeClass("APCMMndtry");
		    $('.PFOnlineModeFld').removeClass("APCMMndtry");
		    $('.PFRedioMNDRY').removeClass("APCMMndtry");
		    $('input[name="APCM_PFMODE"]').prop('checked', false);
		   
	       }
	   else if(ADMINFEE=="Collectible")
	   {
		   $('.PEFEE').show()
		  $('.PFRedioMNDRY').addClass("APCMMndtry");
	   }
	   
}



function CheckPENDINGFEE()
{
   var ADMINFEE=$("input[name='APCM_PFCOLLECTED']:checked"). val();
   if(ADMINFEE=="Deductible")
	   {
	   $('.PEFEE').hide()
       }
   else if(ADMINFEE=="Collectible")
	   {
	    var Mode=$("input[name='APCM_PFMODE']:checked"). val()
	      
	   if(Mode=="Online")
		{
		$('.PFOFFL').hide();
		$('.PFCHK').hide();
		$('.PFOnlineMode').show();		
		$('.PFCHKCHAGE').removeClass("APCMMndtry");
        $('.PFOnlineModeFld').addClass("APCMMndtry");
		$('.PFCHKOFF').removeClass("APCMMndtry");
		}
	else if(Mode=="Cheque" || Mode=="DD")
		{
			$('.PFOFFL').hide();
		$('.PFCHK').show();
	    //$(".CDD").next().removeClass('active');
		$('.PFOnlineMode').hide();
		$('.PFCHKCHAGE').addClass("APCMMndtry");
		$('.PFOnlineModeFld').removeClass("APCMMndtry");
		$('.PFCHKOFF').removeClass("APCMMndtry");
        }
	else if(Mode=="Offline")
	{
		
		$('.PFOFFL').show();
		$('.PFCHK').hide();
		$('.PFOnlineMode').hide();	
		$('.PFCHKOFF').addClass("APCMMndtry");
		$('.PFCHKCHAGE').removeClass("APCMMndtry");
		$('.PFOnlineModeFld').removeClass("APCMMndtry");
	}
	else
		{
		$('.PFCHK').hide();
		$('.PFOnlineMode').hide();
		$('.PFCHKCHAGE').removeClass("APCMMndtry");
        $('.PFOnlineModeFld').removeClass("APCMMndtry");
		$('.PFCHKOFF').removeClass("APCMMndtry");
        }
	   
	   }
   else
	   {
         $('.PEFEE').hide()
	   }


}


function CheckCERSAICHK()
{
	var ADMINFEE=$("input[name='APCM_CERSAIRECVBY']:checked"). val();
	   if(ADMINFEE=="Deductible")
		   {
		   $('.CERSAI').hide()
			$('.CECHK').hide();
			$('.CEOnlineMode').hide();	
			$('.CECHKCHAGE').removeClass("APCMMndtry");
		    $('.CEOnlineModeFld').removeClass("APCMMndtry");
		    $('input[name="APCM_CERSAIMODE"]').prop('checked', false);
		    $('.CERedioMNDRY').removeClass("APCMMndtry");
		   
	       }
	   else if(ADMINFEE=="Collectible")
	   {
		   $('.CERSAI').show()
		 $('.CERedioMNDRY').addClass("APCMMndtry");
	   }
	   
}


function CheckCERSAI()
{
   var ADMINFEE=$("input[name='APCM_CERSAIRECVBY']:checked"). val();
   if(ADMINFEE=="Deductible")
	   {
	   $('.CERSAI').hide()
       }
   else if(ADMINFEE=="Collectible")
	   {
	      
	      var Mode=$("input[name='APCM_CERSAIMODE']:checked"). val()
	      
	   if(Mode=="Online")
		{
		$('.CECHK').hide();
		$('.CEOnlineMode').show();		
		$('.CECHKCHAGE').removeClass("APCMMndtry");
       $('.CEOnlineModeFld').addClass("APCMMndtry");
		}
	else if(Mode=="Cheque" || Mode=="DD")
		{
		$('.CECHK').show();
		//$(".CDD").next().removeClass('active');
		$(".CEOnlineMode").hide();
		$('.CECHKCHAGE').addClass("APCMMndtry");
		$('.CEOnlineModeFld').removeClass("APCMMndtry");
        }
	else
		{
		$('.CECHK').hide();
		$('.CEOnlineMode').hide();		
		$('.CECHKCHAGE').removeClass("APCMMndtry");
        $('.CEOnlineModeFld').removeClass("APCMMndtry");
		
		
		}
	   
	   }
   else
	   {
	   $('.CERSAI').hide()
       }


}

function CheckRefNo()
{
  
    var status = UI_getdata("",$("#PrcsID").val(),"","","","LSW_SGETBTSTATUS"); 
    var BTSTATUS=$(status).find("BTSTATUS").text()
    
    if(BTSTATUS=="REALIZED"||BTSTATUS=="COLLECTED"||BTSTATUS=="BOUNCED"||BTSTATUS=="DEPOSITED")
   	 {
   	 $("#APCM_BTSTATUS").val(BTSTATUS)
     }
    
    if($("#APCM_BTSTATUS").val()=="REALIZED"||$("#APCM_BTSTATUS").val()=="COLLECTED"||$("#APCM_BTSTATUS").val()=="BOUNCED"||$("#APCM_BTSTATUS").val()=="DEPOSITED")
   	 {
   	 $('.BTSTA').attr('disabled',true);
     $('.BTSTA').removeClass('APCMMndtry');
     $('.btnBT').hide()

     }

    var CERSTATUS=$(status).find("CERSAISTATUS").text()
    
    if(CERSTATUS=="REALIZED"||CERSTATUS=="COLLECTED"||CERSTATUS=="BOUNCED"||CERSTATUS=="DEPOSITED")
   	 {
   	 $("#APCM_CERSAISTATUS").val(CERSTATUS)
        }
    
    if($("#APCM_CERSAISTATUS").val()=="REALIZED"||$("#APCM_CERSAISTATUS").val()=="COLLECTED"||$("#APCM_CERSAISTATUS").val()=="BOUNCED"||$("#APCM_CERSAISTATUS").val()=="DEPOSITED")
	 {
   	 $('.CESTA').attr('disabled',true);
    	 $('.CESTA').removeClass('APCMMndtry');
    	 $('.CERMODE').attr('disabled',true)
    	 $('.btnCERSAI').hide()
    	 
    }
    

    var PFSTATUS=$(status).find("PFSTATUS").text()
    if(PFSTATUS=="REALIZED"||PFSTATUS=="COLLECTED"||PFSTATUS=="BOUNCED"||PFSTATUS=="DEPOSITED")
   	 {
   	 $("#APCM_PFSTATUS").val(PFSTATUS)
     }
     
    if($("#APCM_PFSTATUS").val()=="REALIZED"||$("#APCM_PFSTATUS").val()=="COLLECTED"||$("#APCM_PFSTATUS").val()=="BOUNCED"||$("#APCM_PFSTATUS").val()=="DEPOSITED")
	 {
   	 $('.PFSTA').attr('disabled',true);
        $('.PFSTA').removeClass('APCMMndtry');
      //  $('.PEFEE').hide()
        $('.PEFEMODE').attr('disabled',true)
         $('.btnPF').hide()
      }
    

    var AFSTATUS=$(status).find("AFSTATUS").text()
    if(AFSTATUS=="REALIZED"||AFSTATUS=="COLLECTED"||AFSTATUS=="BOUNCED"||AFSTATUS=="DEPOSITED")
   	 {
   	 $("#APCM_STATUS").val(AFSTATUS)
     }
    if($("#APCM_STATUS").val()=="REALIZED"||$("#APCM_STATUS").val()=="COLLECTED"||$("#APCM_STATUS").val()=="BOUNCED"||$("#APCM_STATUS").val()=="DEPOSITED")
	 {
   	 $('.AFSTA').attr('disabled',true);
     $('.AFSTA').removeClass('APCMMndtry');
     $('.ADBTN').hide()
     $('.ADFEERADIO').attr('disabled',true)
     }
    	
	
}




function CHKAPPLICABLE()
{
	
	var op=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SCHKCHARGERSAPPLIC")
    
	$("#APCM_ISCROSSELL1APPLY").val($(op).find("INSURENCE").text());
    $("#APCM_ISCROSSELL2APPLY").val($(op).find("HEALTH").text());
	$("#APCM_CROSSELL1YR").val($(op).find("INSURENCETENURE").text());
	$("#APCM_CROSSELL2YR").val($(op).find("COMOTENURE").text());
	
	
	$("#APCM_CROSSELPREMAMT").val(CURINRCommaSep($(op).find("INSURAMT").text()));
	$("#APCM_CROSSELLCOMPRAAMT").val(CURINRCommaSep($(op).find("HEATHAMT").text()));
	
	if($(op).find("INSURENCE").text()=="Yes")
	{
		$('input:radio[name=APCM_ISCROSSELL1APPLY]')[0].checked = true;
		$('.CRSELLI').show();
    }
	else
	{   
		$('input:radio[name=APCM_ISCROSSELL1APPLY]')[1].checked = true;
		$('.CRSELLI').hide();
     }
	if($(op).find("HEALTH").text()=="Yes")
		{
		$('input:radio[name=APCM_ISCROSSELL2APPLY]')[0].checked = true;
		$('.CRSELLII').show();
        }
	else
		{
		$('input:radio[name=APCM_ISCROSSELL2APPLY]')[1].checked = true;
		$('.CRSELLII').hide();
        }
}
/*
function GetAFReciptDetl()
{
	var xml=UI_getdata($("#PrcsID").val(),"AF","","","","LSW_SGETCHARGSAFDETLS")
	 var n = document.getElementsByClassName('AFDBfields');
 for (i = 0; i < n.length; i++) 
   {
     name = document.getElementsByClassName('AFDBfields').item(i).id
    
     var val = $(xml).find(name).text();

     if($("#"+ name).length > 0)
     {
   	  $("#"+ name).val(val); 
   	  $("#"+ name).next().addClass('active');
     } 	
   }
}*/

function CheckBTCHARGE()
{
	var BTCOMMITMENT=$("input[name='APCM_ISBTCMNTCHRGAPPLY']:checked"). val();
	
	if(BTCOMMITMENT=="Yes")
		{
		$(".BTCHAGS1").addClass("APCMMndtry");
		$('.BTCHARGE').show();
        }
	else
		{
		$(".BTCHAGS1").removeClass("APCMMndtry");
		$('.BTCHARGE').hide();
		$(".NBT").val('');
		$(".NBT").next().removeClass('active')
		}		
}

function GetCERSAIReciptDetl(Type)
{	
 if(Type=="AF")
	 {
	    var ReceiptNo=$("#APCM_RecptNum").val()
		var Mode=$("input[name=APCM_MODE]:checked").val()
		var InsDate=$("#APCM_ADDDT").val();
		var InsNo=$("#APCM_ADDNO").val();
		var Status=$("#APCM_STATUS").val()
		var Amt=$("#APCM_AAMNT").val()
	   
		  if(ReceiptNo != "")
			{
			  $("#RECIEPRNO").val(ReceiptNo)
			  $("#RECIEPRNO").next().addClass('active')
			}
		 if(Mode != "")
		 {
		   $("#MODE").val(Mode)
		   $("#MODE").next().addClass('active')
		 }
		 if(InsDate != "")
		 {
		   $("#TRANSDATE").val(InsDate)
		   $("#TRANSDATE").next().addClass('active')
		 }
		 if(InsNo != "")
		 {
		   $("#REFNUM").val(InsNo)
		   $("#REFNUM").next().addClass('active')
		 }
		 if(Status != "")
		 {
		   $("#STATUS").val(Status)
		   $("#STATUS").next().addClass('active')
		 }
		 if(Amt != "")
		 {
		   $("#GSTAMT").val(Amt)
		   $("#GSTAMT").next().addClass('active')
		 }
	 }
 else
	 {
	 var ReceiptNo=$("#APCM_RecptNum1").val()
		var Mode=$("input[name=APCM_CERSAIMODE]:checked").val()
		var InsDate=$("#APCM_CERSAIADDDT").val();
		var InsNo=$("#APCM_CERSAIADDNO").val();
		var Status=$("#APCM_CERSAISTATUS").val()
		var Amt=$("#APCM_EFFCTCGRGAMTCERSAI").val()
	   
		  if(ReceiptNo != "")
			{
			  $("#CRECIEPRNO").val(ReceiptNo)
			  $("#CRECIEPRNO").next().addClass('active')
			}
		 if(Mode != "")
		 {
		   $("#CMODE").val(Mode)
		   $("#CMODE").next().addClass('active')
		 }
		 if(InsDate != "")
		 {
		   $("#CTRANSDATE").val(InsDate)
		   $("#CTRANSDATE").next().addClass('active')
		 }
		 if(InsNo != "")
		 {
		   $("#CREFNUM").val(InsNo)
		   $("#CREFNUM").next().addClass('active')
		 }
		 if(Status != "")
		 {
		   $("#CSTATUS").val(Status)
		   $("#CSTATUS").next().addClass('active')
		 }
		 if(Amt != "")
		 {
		   $("#CGSTAMT").val(Amt)
		   $("#CGSTAMT").next().addClass('active')
		 }
		 
	 }
}




function INSTRUMENTDATE(XID)
{	

if($('#'+XID).val()!="")
	{
     var t1 = get2date();
  ////   var datefield_id = $(this).attr('id');
     var t2 = $('#'+XID).val()

     var one_day = 1000 * 60 * 60 * 24;  //Here we need to split the inputed dates to convert them into standard format for further execution
     var x = t1.split("-");
     var y = t2.split("/");   //date format(Fullyear,month,date) 

     var date1 = new Date(x[2], (x[1] - 1), x[0]);

     // it is not coded by me,but it works correctly,it may be useful to all

     var date2 = new Date(y[2], (y[1] - 1), y[0])
     var month1 = x[1] - 1;
     var month2 = y[1] - 1;

     //Calculate difference between the two dates, and convert to days

     Diff = Math.ceil((date1.getTime() - date2.getTime()) / (one_day));
     
     if(Diff>30)
    	 {
    	 alert("Instrument Date Cannot beyond 30 days")
    	 $('#'+XID).val('')
    	  $('#'+XID).next().removeClass('active')
         }
	}
}



function GETPFCOLLAMT(Event)
{
	if(Event!="Load")
	{
	if($("#APCM_PFWAIVERAMT").val()!="")
	{
	var WaiverAmt=$("#APCM_PFWAIVERAMT").val().replace(/,/g,'')
	var PENDINGAMT=$("#APCM_PENDNGAMT").val().replace(/,/g,'')
	
              if(parseFloat(PENDINGAMT)<parseFloat(WaiverAmt))
			  {
                alert('Waiver Amount Should not be greater then Collected Amount')
				$("#APCM_AMNTCOLLCT").val(CURINRCommaSep(PENDINGAMT)) 
				$("#APCM_PFWAIVERAMT").val('')
			  }
			  else
			  {
				  
				var COLLECTEDAMT=parseFloat(PENDINGAMT)-parseFloat(WaiverAmt)  
				$("#APCM_AMNTCOLLCT").val(CURINRCommaSep(COLLECTEDAMT)) 
				$("#APCM_REPNDPFAMT").val(PENDINGAMT);
			  }
   }
   else
   {
	  var WaiverAmt=$("#APCM_AMNTCOLLCT").val().replace(/,/g,'')
	  var PENDINGAMT=$("#APCM_PENDNGAMT").val().replace(/,/g,'')
	  
	   if($("#APCM_AMNTCOLLCT").val()=="" || $("#APCM_AMNTCOLLCT").val()=="0")
	   {
	     $("#APCM_AMNTCOLLCT").val($("#APCM_REPNDPFAMT").val());
	   }
	   else
	   {
		   
		 var COLLECTEDAMT=parseFloat(PENDINGAMT)-parseFloat(WaiverAmt);
		 var FinlWaivAmt=parseFloat(COLLECTEDAMT)+parseFloat(WaiverAmt);
		 
          $("#APCM_AMNTCOLLCT").val(CURINRCommaSep(FinlWaivAmt));		 
	   }
   }
  }
  else
  {
	 if($("#APCM_PFWAIVERAMT").val()!="")
	{
	var WaiverAmt=$("#APCM_PFWAIVERAMT").val().replace(/,/g,'')
	var PENDINGAMT=$("#APCM_PENDNGAMT").val().replace(/,/g,'')
	
              if(parseFloat(PENDINGAMT)<parseFloat(WaiverAmt))
			  {
                alert('Waiver Amount Should not be greater then Collected Amount')
				$("#APCM_AMNTCOLLCT").val(CURINRCommaSep(PENDINGAMT)) 
				$("#APCM_PFWAIVERAMT").val('')
			  }
			  else
			  {
				  
				var COLLECTEDAMT=parseFloat(PENDINGAMT)-parseFloat(WaiverAmt)  
				$("#APCM_AMNTCOLLCT").val(CURINRCommaSep(COLLECTEDAMT)) 
				$("#APCM_REPNDAMT").val(PENDINGAMT);
			  }
     }
  }
}


function ChangeCalcBTAmt()
{
	var BTAmt=$("#APCM_BTAMNT").val().replace(/,/g,'')
	
	var Amt=parseFloat(BTAmt*0.009).toFixed(2)
	
	$("#APCM_BTPAMNT").val(CURINRCommaSep(Amt))
	$("#APCM_BTDDNAME").val('');
	$("#APCM_BTDDNAME").next().removeClass('active');
}


function ChkEffectiveRate()
{ 
var Rate=$("#APCM_EFFCTVINTRST").val()
var ROI=$("#APCM_ROI").val()

	if(parseFloat(Rate)>parseFloat(ROI))
	{
		alert('Sanctioned ROI is '+ROI+'% ,ROI cannot be increased in this stage, use send back to reverse the stage to Credit Appraisal.');
		$("#APCM_EFFCTVINTRST").val($("#APCM_ROI").val());
		return false;
	}
}


function CHECKPROP()
{
	var ADMINFEE=$("input[name='APRC_PROPERTYINS']:checked"). val();
   if(ADMINFEE=="Collectible")
	   {
	    var Mode=$("input[name='APRC_PROPERTYINSMODE']:checked"). val()
	      
	   if(Mode=="Online")
		{
		$('.PFOFFL').hide();
		$('.PFCHK').hide();		
		$('.PROPCHK').hide();		
		$('.PROPOFFL').hide();
		$('.PROTYMODE').show();	
		$('.CRTWCHKCHAGE').removeClass("APCMMndtry");			
		$('.CRTWCHKOFF').removeClass("APCMMndtry");		
/* 		$('.CRONCHKCHAGE').removeClass("APCMMndtry");		
        $('.PFOnlineModeFld').addClass("APCMMndtry");
		$('.PFCHKOFF').removeClass("APCMMndtry"); */
		//$('.PFCHKCHAGE').removeClass("APCMMndtry");
		}
		else if(Mode=="Cheque" || Mode=="DD")
		{
		$('.PROTYMODE').hide();			
		$('.PROPOFFL').hide();
		$('.PFOFFL').hide();
		$('.PROPCHK').show();
	    //$(".CDD").next().removeClass('active');
		$('.PFOnlineMode').hide();	
		$('.CRTWCHKCHAGE').addClass("APCMMndtry");
		$('.CRTWCHKOFF').removeClass("APCMMndtry");		
/* 		$('.CRONCHKCHAGE').addClass("APCMMndtry");		
		$('.PFOnlineModeFld').removeClass("APCMMndtry");
		$('.PFCHKOFF').removeClass("APCMMndtry"); */
		//$('.PFCHKCHAGE').addClass("APCMMndtry");
        }
		else if(Mode=="Offline")
	{
		
		$('.PROPOFFL').show();
		$('.PROTYMODE').hide();
		$('.PROPCHK').hide();
		$('.PFCHK').hide();
		$('.PFOnlineMode').hide();	
		$('.CRTWCHKCHAGE').removeClass("APCMMndtry");
		$('.CRTWCHKOFF').addClass("APCMMndtry");
/* 		$('.PFCHKOFF').addClass("APCMMndtry");
		$('.CRONCHKCHAGE').removeClass("APCMMndtry");
		$('.PFOnlineModeFld').removeClass("APCMMndtry"); */
		//$('.PFCHKCHAGE').removeClass("APCMMndtry");
	}
}
}

function CheckCROSSTWO()
{
	var ADMINFEE=$("input[name='APCM_CROSSSELL2']:checked"). val();
   if(ADMINFEE=="Collectible")
	   {
	    var Mode=$("input[name='APCM_CROSSELTWMODE']:checked"). val()
	      
	   if(Mode=="Online")
		{
		$('.PFOFFL').hide();
		$('.PFCHK').hide();		
		$('.CROSSTWOCHK').hide();		
		$('.CROSSTWOOFFL').hide();
		$('.CROSSTWOOnlineMode').show();	
		$('.CRTWCHKCHAGE').removeClass("APCMMndtry");			
		$('.CRTWCHKOFF').removeClass("APCMMndtry");		
/* 		$('.CRONCHKCHAGE').removeClass("APCMMndtry");		
        $('.PFOnlineModeFld').addClass("APCMMndtry");
		$('.PFCHKOFF').removeClass("APCMMndtry"); */
		//$('.PFCHKCHAGE').removeClass("APCMMndtry");
		}
		else if(Mode=="Cheque" || Mode=="DD")
		{
		$('.CROSSTWOOnlineMode').hide();			
		$('.CROSSTWOOFFL').hide();
		$('.PFOFFL').hide();
		$('.CROSSTWOCHK').show();
	    //$(".CDD").next().removeClass('active');
		$('.PFOnlineMode').hide();	
		$('.CRTWCHKCHAGE').addClass("APCMMndtry");
		$('.CRTWCHKOFF').removeClass("APCMMndtry");		
/* 		$('.CRONCHKCHAGE').addClass("APCMMndtry");		
		$('.PFOnlineModeFld').removeClass("APCMMndtry");
		$('.PFCHKOFF').removeClass("APCMMndtry"); */
		//$('.PFCHKCHAGE').addClass("APCMMndtry");
        }
		else if(Mode=="Offline")
	{
		
		$('.CROSSTWOOFFL').show();
		$('.CROSSTWOOnlineMode').hide();
		$('.CROSSTWOCHK').hide();
		$('.PFCHK').hide();
		$('.PFOnlineMode').hide();	
		$('.CRTWCHKCHAGE').removeClass("APCMMndtry");
		$('.CRTWCHKOFF').addClass("APCMMndtry");
/* 		$('.PFCHKOFF').addClass("APCMMndtry");
		$('.CRONCHKCHAGE').removeClass("APCMMndtry");
		$('.PFOnlineModeFld').removeClass("APCMMndtry"); */
		//$('.PFCHKCHAGE').removeClass("APCMMndtry");
	}
}
}

function CheckCROSSONE()
{
	var ADMINFEE=$("input[name='APCM_CROSSSELL1']:checked"). val();
   if(ADMINFEE=="Collectible")
	   {
	    var Mode=$("input[name='APCM_CROSSELMODE']:checked"). val()
	      
	   if(Mode=="Online")
		{
		$('.PFOFFL').hide();
		$('.PFCHK').hide();
		
		$('.CROSSONECHK').hide();
		
		$('.CROSSOFFL').hide();
		$('.CROSSONEOnlineMode').show();
		$('.CRONCHKCHAGE').removeClass("APCMMndtry");			
		$('.CSONCHKOFF').removeClass("APCMMndtry");
/* 		$('.PFCHKCHAGE').removeClass("APCMMndtry");
        $('.PFOnlineModeFld').addClass("APCMMndtry");
		$('.PFCHKOFF').removeClass("APCMMndtry"); */
		}
		else if(Mode=="Cheque" || Mode=="DD")
		{
			$('.CROSSONEOnlineMode').hide();
			
		$('.CROSSOFFL').hide();
			$('.PFOFFL').hide();
		$('.CROSSONECHK').show();
	    //$(".CDD").next().removeClass('active');
		$('.PFOnlineMode').hide();
		$('.CRONCHKCHAGE').addClass("APCMMndtry");
		$('.CSONCHKOFF').removeClass("APCMMndtry");
	/* 	$('.PFCHKCHAGE').addClass("APCMMndtry");
		$('.PFOnlineModeFld').removeClass("APCMMndtry");
		$('.PFCHKOFF').removeClass("APCMMndtry");  */
        }
		else if(Mode=="Offline")
	{
		
		$('.CROSSOFFL').show();
		$('.CROSSONEOnlineMode').hide();
		$('.CROSSONECHK').hide();
		$('.PFCHK').hide();
		$('.PFOnlineMode').hide();	
		$('.CRONCHKCHAGE').removeClass("APCMMndtry");
		$('.CSONCHKOFF').addClass("APCMMndtry");
	/*  $('.PFCHKOFF').addClass("APCMMndtry");
		$('.PFCHKCHAGE').removeClass("APCMMndtry");
		$('.PFOnlineModeFld').removeClass("APCMMndtry");  */
	}
}
}


function GETPF()
{
	var PFAmount=UI_getdata($("#PrcsID").val(),$("#APCM_LOANID").val(),"","","","LSW_SGETDEMANTAMT")
	var PFAmount=$(PFAmount).find('PFAMT').text();
	if(PFAmount=="")
		{
		PFAmount=0	
		}
	
	if(isNaN(PFAmount))
		{
			PFAmount = 0;
		}
		$("#APCM_PFAMT").val(CURINRCommaSep(parseFloat(PFAmount).toFixed(2)));
		$("#APCM_PFAMT").next().addClass('active');
}

function Chktds()
{
	if($("#APCM_TDSAPPLICABLE").val()=="Yes")
	{
		$(".AMT").show()
		var Amount=UI_getdata($("#PrcsID").val(),$("#APCM_LOANID").val(),"","","","LSW_SGETDEMANTAMT")
		var pfamt=$(Amount).find('DEMANTAMT').text();
		
		pfamt=parseFloat(pfamt)*10/100;
		$("#APCM_TDSAMT").val(CURINRCommaSep(parseFloat(pfamt).toFixed(2)));
		$("#APCM_TDSAMT").next().addClass('active'); 
		
		var Amtcollect=$("#APCM_AMNTCOLLCT").val().replace(/,/g, "")
		var Collectamt=parseFloat(Amtcollect)-parseFloat(pfamt)
		if(Collectamt=="")
		{
		Collectamt=0	
		}
		if(isNaN(Collectamt))
		{
			Collectamt = 0;
		}
		$("#APCM_AMNTCOLLCT").val(CURINRCommaSep(parseFloat(Collectamt).toFixed(2)));
		$("#APCM_AMNTCOLLCT").next().addClass('active'); 
		 $("#APCM_TDSAPPLICABLE").attr('disabled',true);
		 $("#APCM_TDSAPPLICABLE").material_select();
	}
	else
	{
		//$("#APCM_TDSAMT").val('')
		$(".AMT").hide()
	}
}

function CollectPF(){
	var PFNO1 = $(".FormPageMultiTab li.active").attr("id");
	var components=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETCOMPONENT");
	                var PRCSID1 = $("#PrcsID").val();
	                var RECEIPTNO=""
                $.ajax({
		            url: "/TPLSW/LMSPF",
		            type: 'POST',
		            data: {PRCSID:PRCSID1,PFNO:PFNO1,RECEIPTNO:RECEIPTNO,COMPONENT:$(components).find("RESULT").text(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
		            async:true,
		   // dataType: 'json',
		   // contentType:'application/json',
		    
		            success: function(stm){        
		   // var obj = JSON.parse(JSON.stringify(stm))
		    	   if(stm == "")
		    		{
		    		  alert("Customer Creation/Updation failed. Contant IT!!!");
					  
					  UI_getdata($("#PrcsID").val(),PFNO1,stm,"","","LSW_SPUSHPFINTRRESULT");
					  $("#APCM_PFCOLLECTFLG").val(stm);
		    		  return;
		    		}
		    	  else if(stm.split("|")[0] == "Fail")
	    			{
	    			  alert("Customer Creation/Updation failed. " + stm.split("|")[1]);
					  UI_getdata($("#PrcsID").val(),PFNO1,stm,"","","LSW_SPUSHPFINTRRESULT");
					  $("#APCM_PFCOLLECTFLG").val(stm);
		    		  return;
	    			}
		    	   else if (stm.split("|")[0] == "Success")
	    			{
						UI_getdata($("#PrcsID").val(),PFNO1,stm,"","","LSW_SPUSHPFINTRRESULT");
						$("#APCM_PFCOLLECTFLG").val(stm);
					}
			      }
				})
}