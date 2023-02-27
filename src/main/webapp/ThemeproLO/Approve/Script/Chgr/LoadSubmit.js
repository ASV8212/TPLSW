$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

	$("#APCM_LOANID").attr("value",$(".FormPageMultiTab li.active").attr("id"));

    $("#APRC_PRCSID").attr("value",$("#PrcsID").val())
	
    FormDataFromDB("LSW_TAPPRCHRGHDR", "APCM_", "APCMDBfields", $("#APCM_LOANID").val()+"|APCM_LOANID");
    
    LoadMultiData("",$("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"PROPERTYINSURANCE","APRCDBfields","LSW_SGETPROPINSRTNR");


$("#APCM_LOANID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
     $("#APCM_ROI").val($("#DMY3").val().split("|")[5])
	 
	 // Added for ML01 Start
	
	  if($("#DMY7").val().split('|')[8]=="ML01")
	  {
		  $("#APCM_EFFCTVINTRST").attr('disabled',true);
	  }
	
	// Added for ML01 End
	 
    /**Grid Trigger Start **/
    //$("#BTNBUSNSDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
    /**COMPUT CERSAI START**/
    if(($("#APCM_NOOFCERSAI").val()=="" && $("#APCM_EFFCTCGRGAMTCERSAI").val()=="")||($("#APCM_NOOFCERSAI").val()=="0"))
    	{
    	var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETCOLTRLCNT");
    	$("#APCM_NOOFCERSAI").val($(op).find("NOOFCOLTRL").text());
    	$("#APCM_EFFCTCGRGAMTCERSAI").val($(op).find("CHRGAMT").text());
		$("#APCM_WOEFFCTCGRGAMTCERSAI").val($(op).find("WOGSTCHRGAMT").text());
		if($("#APCM_NOOFCERSAI").val()==0){
		$('input[name=APCM_CERSAIRECVBY]').attr('disabled',true);
			 $('input[name=APCM_CERSAIRECVBY]').closest('.select-radio').removeClass("APCMMndtry");
		}
         }
    
        
        if($("#APCM_PENDNGAMT").val().replace(/,/g,'')==0){
    		
   		 $('input[name="APCM_PFCollected"]').prop('checked', false);
         $('input[name=APCM_PFCollected]').attr('disabled',true);
   		 $('input[name=APCM_PFCollected]').closest('.select-radio').removeClass("APCMMndtry");
   	     }
    
   var DATA=["PROPERTYINSURANCE|"];
   for (j=0;j<DATA.length;j++)
   	 {
   	 var ValuationID=DATA[j].split("|")[0];
   	 var row = $("." + ValuationID).find(".DYNROW").length;
   	 for (i=0;i<row;i++)
   	 {
   	var HTML =$("." + ValuationID).find(".DYNROW")[i];
   	if(($(HTML).find('input[name=APRC_ISPROPAPPLY]:checked').val()=="Yes"))
	{

	$(HTML).find('.PROINSU').show();
	}
   	else
   	{
     $(HTML).find('.PROINSU').hide();	
   	}
   	}
   	}
        
      if($("#DMY5").val().split('|')[2]=="Waiver")
	   {
	   $("#SendBack").show();
	   var op = UI_getdata($("#DMY5").val().split('|')[2],"","","","","LSW_SGETSTAGEREVACT");
	   $("#SENDBCKACT").append($(op).find('RESULT').html());
	   }  
       
    GETPF();
    BTCOMMITMENT()
    CROSSCELLI()
    CROSSCELLIIAPPLY()
	CHECKLOANTYPE();
    //PROPERTYINS()
	getROIFrmFinc();
	 getPendAmt();
	var activityname = GetActivityName();
	
	var op = UI_getdata($("#PrcsID").val(), $("#ActvID").val(), $(".FormPageMultiTab li.active a div").text(), activityname, "", "LSW_SDISBSTAGECHECK1");
	if($(op).find("RESULT").text() !="Y")
	{	
	 if($("#DMY7").val().split("|")[0] != "Registered Mortgage")
	{
	  ASSIGNVALTOFLD(); // For Line No 24
	  getCollateral();
	}
	else
	{
	 $('input[name=APCM_PFCOLLECTED]').attr('disabled',true);
     $('input[name=APCM_PFCOLLECTED]').closest('.select-radio').removeClass("APCMMndtry");
	 $("#APCM_PENDNGAMT").val('0')
	 $("#APCM_AMNTCOLLCT").val('0')
	 $('input[name=APCM_CERSAIRECVBY]').attr('disabled',true);
	 $('input[name=APCM_CERSAIRECVBY]').closest('.select-radio').removeClass("APCMMndtry");
	 $("#APCM_EFFCTCGRGAMTCERSAI").val('0')	  
	}
	}
    CalcEffectChargAmt();
    //getCollateral();
	

    CheckADMINFEE();
    CheckPENDINGFEE();
    
    
    CheckCERSAI();
   
    CheckRefNo();
    
   CHKAPPLICABLE();
   CheckBTCHARGE()
   
   if ($("#APCM_RecptNum").val() != "")
	{
	   $(".RECIPT").show()
	}
    
    if ($("#APCM_RecptNum1").val() != "")
	{
	   $(".CERSRECIPT").show()
	}
	
if($("input[name='APCM_PFCOLLECTED']:checked"). val() == "Collectible" 
	&& $("input[name='APCM_PFMODE']:checked"). val() == "Online")
	{	
      if($("#APCM_ONREFNUMBER").val()!="")
	  {
         $(".PAYONLINE").show();
		 $(".PFOnlineMode").hide();
		 $(".PFONL").attr("disabled",true);
	  }
      else
	  {
        $(".PAYONLINE").hide();
		$(".PFOnlineMode").show();
		$(".PFONL").attr("disabled",false);
	  }		  
	}
	
    //GetBTAmt();
RECOMMENDHIDE()
	/*  if($('input[name=APCM_ARECVAMTBY]:checked').val()==undefined){
		  $('input[name=APCM_MODE]').closest('.md-form').hide();
		  $("input[id=ARECVAMTBYNo]").prop("checked", true)
		  LoadGSTtoEfct();
	  }
	  else if($('input[name=APCM_ARECVAMTBY]:checked').val()=="Collectible")
		  {
		  if($('input[name=APCM_MODE]:checked').val()!=undefined && $('input[name=APCM_MODE]:checked').val()!="")
			  {
			  CheckMode($('input[name=APCM_MODE]'),'APCM_MODE')
			  }
		  }
	  
	  if($('input[name=APCM_CERSAIRECVBY]:checked').val()==undefined){
		  $('input[name=APCM_CERSAIMODE]').closest('.md-form').hide();
	  }
	  else if($('input[name=APCM_CERSAIRECVBY]:checked').val()=="Collectible")
	  {
	  if($('input[name=APCM_CERSAIMODE]:checked').val()!=undefined && $('input[name=APCM_CERSAIMODE]:checked').val()!="")
		  {
		  CheckMode($('input[name=APCM_CERSAIMODE]'),'APCM_CERSAIMODE')
		  }
	  }
	  if($('input[name=APCM_PFCOLLECTED]:checked').val()==undefined){
		  $('input[name=APCM_PFMODE]').closest('.md-form').hide();
	  }
	  else if($('input[name=APCM_PFCOLLECTED]:checked').val()=="Collectible")
	  {
	  if($('input[name=APCM_PFMODE]:checked').val()!=undefined && $('input[name=APCM_PFMODE]:checked').val()!="")
		  {
		  CheckMode($('input[name=APCM_PFMODE]'),'APCM_PFMODE')
		  }
	  }
	   
	   
	$(".VIEWRPTPopup").on('click', function() {
		  $("#Reassign").click();
	})
*/
    
    
    // ONLOAD FIELD DISABLE START
    
    if ($("#APCM_RecptNum3").val() != "")
	{
    $('.BTSTA').attr('disabled',true);
    $('.Collected3').hide();
	}  
if ($("#APCM_PFUTRNO").val() != "")
	{
    $('.PFONL').attr('disabled',true);
   // $('.Collected4').hide();
	} 	
    
    if ($("#APCM_RecptNum2").val() != "")
	{
    $('.PFONL').attr('disabled',true);
    $('.Collected2').hide();
    $("#CTPPF").hide();
    
	if ($("[name=APCM_PFMODE]:checked").val() == "Online")
	{
	
    $('.PFCHK').show()
	$('.PFONBNK').hide()
	$('.PFONBNKONL').show()
	//$('.PFONL').attr('disabled',true)
	//$('.PFONL').next().addClass('active')
	
	if($("#APCM_PFSTATUS").val() == "Payment Success")
			{					
			$('.PFONL').attr('disabled',true);
			$("#APCM_PFADDDT").next().next().hide();
			}
	
	
	}
    
    
	}
    else if ($("[name=APCM_PFMODE]:checked").val() == "Online")
	{
	
  
	
	if($("#APCM_PFSTATUS").val() == "Payment Success")
			{	
		  $('.PFCHK').show()
			$('.PFONBNK').hide()
			 $("#CTPPF").hide();
			//$('.PFONL').attr('disabled',true)
			//$('.PFONL').next().addClass('active')
			$('.PFONL').attr('disabled',true);
			$("#APCM_PFADDDT").next().next().hide();
			}
	
	
	}
	
	if ($("#APCM_RecptNum3").val() != "")
	{
    $('.PFONL').attr('disabled',true);
    $('.Collected3').hide();
    $("#CTPLIFE").hide();
    
	if ($("[name=APCM_CROSSELMODE]:checked").val() == "Online")
	{
	
    $('.PFCHK').show()
	$('.PFONBNK').hide()
	$('.PFONBNKONL').show()
	//$('.PFONL').attr('disabled',true)
	//$('.PFONL').next().addClass('active')
	
	if($("#APCM_CRSONESTATUS").val() == "Payment Success")
			{					
			$('.PFONL').attr('disabled',true);
			$("#APCM_CRSONEADDDT").next().next().hide();
			}
	
	
	}
    
    
	}
	
	if ($("#APCM_RecptNum4").val() != "")
	{
    $('.PFONL').attr('disabled',true);
    $('.Collected4').hide();
    $("#CTPCOMBO").hide();
    
	if ($("[name=APCM_CROSSELTWMODE]:checked").val() == "Online")
	{
	
    $('.PFCHK').show()
	$('.PFONBNK').hide()
	$('.PFONBNKONL').show()
	//$('.PFONL').attr('disabled',true)
	//$('.PFONL').next().addClass('active')
	
	if($("#APCM_CRSONESTATUS").val() == "Payment Success")
			{					
			$('.PFONL').attr('disabled',true);
			$("#APCM_CRSTWOADDDT").next().next().hide();
			}
	
	
	}
    
    
	}
    
    
    if ($("#APCM_RecptNum1").val() != "")
	{
    $('.CERONL').attr('disabled',true);
    $('.Collected1').hide();
    $("#CTPC").hide();
    
    if ($("[name=APCM_CERSAIMODE]:checked").val() == "Online")
	{
	
	$('.CECHK').show()
	$('.CERONLINEBNK').hide()
	$('.CERONLINEBNKONL').show()
	//$('.CERONL').attr('disabled',true)
//	$('.CERONL').next().addClass('active')
	
	$("#APCM_CERSAIADDDT").next().next().hide();
	
	if($("#APCM_CERSAISTATUS").val() == "Payment Success")
			{		
			
			$('.CERONL').attr('disabled',true);
			}
	
	}
    
    
	}
    else if
     ($("[name=APCM_CERSAIMODE]:checked").val() == "Online")
	{
	
	
	
	if($("#APCM_CERSAISTATUS").val() == "Payment Success")
			{		
		$('.CECHK').show()
		$('.CERONLINEBNK').hide()
		 $("#CTPC").hide();
		//$('.CERONL').attr('disabled',true)
//		$('.CERONL').next().addClass('active')
		
		$("#APCM_CERSAIADDDT").next().next().hide();
			
			$('.CERONL').attr('disabled',true);
			}
	
	}
    
    
    if ($("#APCM_RecptNum").val() != "")
    	{
    $('.ADONLINE').attr('disabled',true);
    $('.Collected').hide();
    $("#CTPAF").hide();
    
    
	if ($("[name=APCM_MODE]:checked").val() == "Online")
	{
	$('.ADCHK').show()
	$('.ADONLINEBNK').hide()
	$(".ADONLINEBNKONL").show();
	
	$("#APCM_ADDDT").next().next().hide();
	
	if($("#APCM_STATUS").val() == "Payment Success")
		{			
		$('.ADONLINE').attr('disabled',true);
		}
	
//	$('.ADONLINE').next().addClass('active')
    }

    
    
    	}
    else 	if ($("[name=APCM_MODE]:checked").val() == "Online")
	{

    	
    	if($("#APCM_STATUS").val() == "Payment Success")
    		{	
        	$('.ADCHK').show()
        	$('.ADONLINEBNK').hide()
        	$("#CTPAF").hide();
        	$("#APCM_ADDDT").next().next().hide();
    		
    		$('.ADONLINE').attr('disabled',true);
    		}
    	
//    	$('.ADONLINE').next().addClass('active')
        }

if($('input:radio[name=APCM_CERSAIRECVBY]')[0].checked == false && $('input:radio[name=APCM_CERSAIRECVBY]')[1].checked == false)
{
  $('input:radio[name=APCM_CERSAIRECVBY]')[1].checked = true;
  $('input:radio[name=APCM_CERSAIRECVBY][value=Deductible]').click();
}
if($('input:radio[name=APCM_PFCOLLECTED]')[0].checked == false && $('input:radio[name=APCM_PFCOLLECTED]')[1].checked == false)
{
  $('input:radio[name=APCM_PFCOLLECTED]')[1].checked = true;
  $('input:radio[name=APCM_PFCOLLECTED][value=Deductible]').click();
}
if($('input:radio[name=APCM_ARECVAMTBY]')[0].checked == false && $('input:radio[name=APCM_ARECVAMTBY]')[1].checked == false)
{
  $('input:radio[name=APCM_ARECVAMTBY]')[1].checked = true;
  $('input:radio[name=APCM_ARECVAMTBY][value=Deductible]').click();
}

    
    // ONLOAD FIELD DISABLE END
    
  GETPFCOLLAMT('Load')  
  
  
    $(document).on("click", ".FormSave", function() {

        var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

        if ($(this).text() == "Submit") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields");
                return false;
            }
			
			
        }
     

        var PROPGRD = TxtGridsubmitdata_V2("PROPERTYINSURANCE","APRC_","APCM_","APRCDBfields");
	    AssignGridXmltoField("APCM_PROPGRD", PROPGRD);
       var CHKresult=FormDataToDB(tbl, prfx, $("#APCM_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
        if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
       if($(this).text() == "Submit")
		 {  
			  var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKPROINS")
			
			if($(xml).find('RESULT').text()!="SUCCESS")
			{
			  var Collection=$(xml).find('RESULT').text()
				 var Alert2=''
								var nameArr = Collection.split(',')
						         k=nameArr.length
								 for(i=0;i<k;i++)
								 {
									var Alert1= nameArr[i]
									var Alert2 = Alert2 +'\r\n'+Alert1
								 }
						  
						  alert(Alert2);
						   return false;
			}
        }
		if($("#APCM_PFCOLLECTFLG").val().split("|")[0] != "Success" && $("input[name='APCM_PFCOLLECTED']:checked"). val() == "Collectible" && ($(this).text() == "Save"|| $(this).text()=="Save & Next"))
		{
			if(($("input[name='APCM_PFMODE']:checked"). val() == "Cheque" && $("#APCM_PFADDNO").val() != "" && $("#APCM_PFIFSC").val() != "" && $("#APCM_PFADDDT").val() != "") ||
			($("input[name='APCM_PFMODE']:checked"). val() == "DD" && $("#APCM_PFADDNO").val() != "" && $("#APCM_PFIFSC").val() != "" && $("#APCM_PFADDDT").val() != "") ||
			($("input[name='APCM_PFMODE']:checked"). val() == "Offline" && $("#APCM_PFUTRNO").val() != "" && $("#APCM_PFOFFLADDDT").val() != "") ||
			($("input[name='APCM_PFMODE']:checked"). val() == "Online") && $("#APCM_ONREFNUMBER").val() != "")
			{
				CollectPF();
				//$("#Save").click();
			}
			/*else
			{
				alert("Fill the Mandatory Fields, to process Collection");
			}*/
		}
        if ($(this).text() == "Submit") {
        	if($("#DMY7").val().split("|")[0] != "Registered Mortgage"){
        		var PFNO1 = "3";
	   			 var PRCSID1 = $("#PrcsID").val();
	   			 var RECEIPTNO=""
	
	   			 $.ajax({
	   			   url: "/TPLSW/OPAWaiver",
	   			   type: 'POST',
	   			   data: {PRCSID:PRCSID1,OPANO:PFNO1,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	   			   async:true,
	   			  // dataType: 'json',
	   			  // contentType:'application/json',
	   			  
	   			   success: function(stm){        
	   			  // var obj = JSON.parse(JSON.stringify(stm))
	   			    if (stm == "")
	   			    {
	   			      alert("OPA Integration Failed");
	   			      return false;    
	   				  
	   				  /*var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),"WAIVER","","","","LSW_SONSUBMTWFDTLINS");
	   					var pattern = /var_/;
	   					var exists = pattern.test($(op).find("WFVAR").text());
	   					if(exists) {
	   					   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
	   					   
	   					   pattern = /Approve/;
	   					   if(exists) {
	   						   var ACTVTY="";
	   							var OverAllStatus="";
	   							var WFACTVINIT = "";
	   						   var ACTVTY=["PDD","OTC","OPSQD"]
	   						   
	   						   for(var j=0;j<ACTVTY.length;j++)
	   							{
	   							var CurntACTVTY=ACTVTY[j];
	   							WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
	   							if(OverAllStatus != "" && WFACTVINIT != "Success")
	   								{
	   								OverAllStatus="Fail";
	   								}
	   							}
	   							
	   							if(OverAllStatus == "Fail")
	   							{
	   							alert("File Assignment Failed");
	   							}
	   					   }
	   					}
	   					else{
	   						alert($(op).find("WFVAR").text());
	   					}*/
	   			    }
	   			    else  if(stm == "Success")
	   			    {
	   					
	   					var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),"WAIVER","","","","LSW_SONSUBMTWFDTLINS");
	   					var pattern = /var_/;
	   					var exists = pattern.test($(op).find("WFVAR").text());
	   					if(exists) {
	   					   pattern = /Approve/;
	   					   var exists = pattern.test($(op).find("WFVAR").text());
	   					   if(exists) {
							   UI_getdata("",$("#PrcsID").val(),"",$("#LogUsr").val(),"","LSW_SROIAMENDMNT");
	   						   var ACTVTY="";
	   							var OverAllStatus="";
	   							var WFACTVINIT = "";
	   						   var ACTVTY=["PDD","OTC","OPSQD"]
	   						   
	   						   for(var j=0;j<ACTVTY.length;j++)
	   							{
	   							var CurntACTVTY=ACTVTY[j];
	   							WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
								var ChkFlowInit = UI_getdata($("#PrcsID").val(),CurntACTVTY,"","","","LSW_SCHKACTVITYASSIGNPROP");
								if($(ChkFlowInit).find("RESULT").text() != "SUCCESS")
								{
									alert($(ChkFlowInit).find("RESULT").text());
									return;
								}
								ChkFlowInit="";
	   							if(OverAllStatus != "" && WFACTVINIT != "Success")
	   								{
	   								OverAllStatus="Fail";
	   								}
	   							}
	   							
	   							if(OverAllStatus == "Fail")
	   							{
	   							alert("File Assignment Failed");
								return;
	   							}
	   					   }
						   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
	   					}
	   					else{
	   						alert($(op).find("WFVAR").text());
	   					}
	                      // var Button = "ToRCMD";
	   					// To be Placed At Last Start
	   		           // WFComplete ($("#ActvID").val(),"var_status="+Button+"&var_rcmdu=CM","");
	   			    }
	   			    else
	   			    {
	   			    	alert("OPA Integration Failed");
	   				   return false;   
	   					/*var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),"WAIVER","","","","LSW_SONSUBMTWFDTLINS");
	   					var pattern = /var_/;
	   					var exists = pattern.test($(op).find("WFVAR").text());
	   					if(exists) {
	   					   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
	   					   
	   					   pattern = /Approve/;
	   					   if(exists) {
	   						   var ACTVTY="";
	   							var OverAllStatus="";
	   							var WFACTVINIT = "";
	   						   var ACTVTY=["PDD","OTC","OPSQD"]
	   						   
	   						   for(var j=0;j<ACTVTY.length;j++)
	   							{
	   							var CurntACTVTY=ACTVTY[j];
	   							WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
	   							if(OverAllStatus != "" && WFACTVINIT != "Success")
	   								{
	   								OverAllStatus="Fail";
	   								}
	   							}
	   							
	   							if(OverAllStatus == "Fail")
	   							{
	   							alert("File Assignment Failed");
	   							}
	   					   }
	   					}
	   					else{
	   						alert($(op).find("WFVAR").text());
	   					}*/
	   			    }  
	   			 },
	   			 error: function(stm) {
	
	   			    alert("OPA Integration Failed");
	   			    return false; 
	   				/*var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),"WAIVER","","","","LSW_SONSUBMTWFDTLINS");
	   					var pattern = /var_/;
	   					var exists = pattern.test($(op).find("WFVAR").text());
	   					if(exists) {
	   					   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
	   					   
	   					   pattern = /Approve/;
	   					   if(exists) {
	   						   var ACTVTY="";
	   							var OverAllStatus="";
	   							var WFACTVINIT = "";
	   						   var ACTVTY=["PDD","OTC","OPSQD"]
	   						   
	   						   for(var j=0;j<ACTVTY.length;j++)
	   							{
	   							var CurntACTVTY=ACTVTY[j];
	   							WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
	   							if(OverAllStatus != "" && WFACTVINIT != "Success")
	   								{
	   								OverAllStatus="Fail";
	   								}
	   							}
	   							
	   							if(OverAllStatus == "Fail")
	   							{
	   							alert("File Assignment Failed");
	   							}
	   					   }
	   					}
	   					else{
	   						alert($(op).find("WFVAR").text());
	   					}*/
	   			  }
	   			 });
        	}
        	else if($("#DMY7").val().split("|")[0] == "Registered Mortgage"){
        		var op = '<Resultset><a><WFVAR>var_Wstatus=Approve</WFVAR></a></Resultset>'
					var pattern = /var_/;
					var exists = pattern.test($(op).find("WFVAR").text());
					if(exists) {
					   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
					   
					   pattern = /Approve/;
					   var exists = pattern.test($(op).find("WFVAR").text());
					   if(exists) {
						   UI_getdata("",$("#PrcsID").val(),"",$("#LogUsr").val(),"","LSW_SROIAMENDMNT");
						   var ACTVTY="";
							var OverAllStatus="";
							var WFACTVINIT = "";
						   var ACTVTY=["PDD","OTC","OPSQD"]
						   
						   for(var j=0;j<ACTVTY.length;j++)
							{
							var CurntACTVTY=ACTVTY[j];
							WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
							if(OverAllStatus != "" && WFACTVINIT != "Success")
								{
								OverAllStatus="Fail";
								}
							}
							
							if(OverAllStatus == "Fail")
							{
							alert("File Assignment Failed");
							}
					   }
					}
					else{
						alert($(op).find("WFVAR").text());
					}
        	}
			 

	}
        // Tab Header Change End


        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });
	
	$('.Collected').on('click', function() {
		
		
    	 var html=$('.ADMINMND')
	 MndtryChk = ChkMandatoryFlds_V1("APCMMndtry",html);
	 
	 if(MndtryChk == "Mandatory")
		{
		 alert("Fill the Mandatory Fields");
		 return false;
		}	
	
		
	if ($("[name=APCM_MODE]:checked").val() == "Online")
			{
			$('.ADCHK').show()
			$('.ADONLINEBNK').hide();
			$("#CTPAF").hide();
			
	
			if($("#APCM_STATUS").val() == "Payment Success")
				{		
				
				$('.ADONLINE').attr('disabled',true);
				$("#APCM_ADDDT").next().addClass("active");
				$("#APCM_ADDNO").next().addClass("active");
				$("#APCM_ADDDT").next().next().hide();
				}
			
	     	//	$('.ADONLINE').next().addClass('active')
               }
 


		// Collections Start
		
	//if ($("[name=APCM_MODE]:checked").val() == "Online")
	//	{
	   $("#Save1").click();
	//}
	
	$("#PayType").val("AF");

		if ($("[name=APCM_ARECVAMTBY]:checked").val() == "Collectible")
		{
		var PFNO1 = "AF";
		var PRCSID1 = $("#PrcsID").val();
		var RECEIPTNO=""


		$.ajax({
		   url: "/TPLSW/COLLECTIONS",
		   type: 'POST',
		   data: {PRCSID:PRCSID1,PFNO:PFNO1,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
		   async:true,
		  // dataType: 'json',
		  // contentType:'application/json',
		   
		   success: function(stm){        
		  // var obj = JSON.parse(JSON.stringify(stm))
		    if (stm == "")
		    {
		    	
		    alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3] );
		
		    return;	
		   
		    
		    }
		    
		    else if (stm.split("|")[2] == "")
		    {
		    
		    alert("Error Occured. Contant IT!!! \n " + stm.split("|")[3] );
			
		
		    return;
		    
		    }
		    else
		    {
		    
		   //var CUSID = UI_getdata(PRCSID1,PFNO1,stm.split("|")[2],"","","LSW_SPFINTRSTATUS");	
		    	
		    	$("#APCM_RecptNum").val(stm.split("|")[2]);	
if ($("#APCM_RecptNum").val() != "")
{	
$("#APCM_RecptNum").next().addClass("active");
$("#APCM_ADDDT").next().addClass("active");
$("#APCM_ADDNO").next().addClass("active");
$("#APCM_ADDDT").next().next().hide();
$("#CTPAF").hide();
$(".RECIPT").show();
$('.ADONLINEBNKONL').show();


//Click to Collected Hide
   $('.Collected').hide();
}			
		    	//$("#PFDT_PFCOLLECT").val('Collected');	
		    	$("#APCM_STATUS").val('IN PROGRESS');
				
		    	
		    	
		    	//alert('PF Collected')
		    	
		    	$("#Save1").click();
		    	
		    	//ClickCollectedBtn();
		    	
		    	
		   
		    	$('.ADONLINE').attr('disabled',true);
		   
		    alert ("Receipt Generated");
		  
		    }
		    
		},
		error: function(stm) {

			$("#APCM_RecptNum").val("");	    	
	  	//$("#PFDT_PFCOLLECT").val('Collected');	
	  	$("#APCM_STATUS").val('FAILED');
	  	
	  	
	  	//alert('PF Collected')
	  	
	  	$("#Save1").click();
	  	
	  	//ClickCollectedBtn();
			
		alert("Collections Error Occured. Contant IT!!! \n" + stm.split("|")[3]);				
		
		  }
		});

		
		// Collections End	
		}
		
		
	});
	
$('.Collected1').on('click', function() {
		
		
	 var html=$('.CERSAIMND')
	 MndtryChk = ChkMandatoryFlds_V1("APCMMndtry",html);
	 
	 if(MndtryChk == "Mandatory")
		{
		 alert("Fill the Mandatory Fields");
		 return false;
		}
		
		
		
		
	if ($("[name=APCM_CERSAIMODE]:checked").val() == "Online")
		{
		
		$('.CECHK').show()
		$('.CERONLINEBNK').hide();
		$("#CTPC").hide();
		//$('.CERONL').attr('disabled',true)
	//	$('.CERONL').next().addClass('active')
		
		if($("#APCM_CERSAISTATUS").val() == "Payment Success")
				{		
				
				$('.CERONL').attr('disabled',true);
				$("#APCM_CERSAIADDDT").next().addClass("active");
				$("#APCM_CERSAIADDNO").next().addClass("active");
				$("#APCM_CERSAIADDDT").next().next().hide();
				}
		
    	}
		// Collections Start
		
	//if ($("[name=APCM_CERSAIMODE]:checked").val() == "Online")
	//	{
	   $("#Save1").click();
	//}

$("#PayType").val("CERSAI");

		if ($("[name=APCM_CERSAIRECVBY]:checked").val() == "Collectible")
		{
		var PFNO1 = "CERSAI";
		var PRCSID1 = $("#PrcsID").val();
		var RECEIPTNO=""


		$.ajax({
		   url: "/TPLSW/COLLECTIONS",
		   type: 'POST',
		   data: {PRCSID:PRCSID1,PFNO:PFNO1,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
		   async:true,
		  // dataType: 'json',
		  // contentType:'application/json',
		   
		   success: function(stm){        
		  // var obj = JSON.parse(JSON.stringify(stm))
		    if (stm == "")
		    {
		    	
		    	alert("Collections Error Occured. Contant IT!!! \n" + stm.split("|")[3]);
		    return;			    
		   // $('.CERONL').attr('disabled',false)
		    }
		    
		    else if (stm.split("|")[2] == "")
		    {
		    
		    	alert("Collections Error Occured. Contant IT!!! \n" + stm.split("|")[3]);
		    return;
		  //  $('.CERONL').attr('disabled',false)
		    }
		    else
		    {
		    
		   //var CUSID = UI_getdata(PRCSID1,PFNO1,stm.split("|")[2],"","","LSW_SPFINTRSTATUS");	
		    	
		    	$("#APCM_RecptNum1").val(stm.split("|")[2]);	

if ($("#APCM_RecptNum1").val() != "")
{	
$("#APCM_RecptNum1").next().addClass("active");
$("#APCM_CERSAIADDDT").next().addClass("active");
$("#APCM_CERSAIADDNO").next().addClass("active");
$("#APCM_CERSAIADDDT").next().next().hide();
$('.CERONLINEBNKONL').show();
 $(".CERSRECIPT").show()
$("#CTPC").hide();


//Click to Collected Hide
   $('.Collected1').hide();
}

				
		    	//$("#PFDT_PFCOLLECT").val('Collected');	
		    	$("#APCM_CERSAISTATUS").val('IN PROGRESS');
		    	
		    	
		    	//alert('PF Collected')
		    	
		    	$("#Save1").click();
		    	
		    	//ClickCollectedBtn();
		    	
		    	
		   
		    	$('.CERONL').attr('disabled',true);
		   
		    alert ("Receipt Generated");
		    
		    }
		    
		},
		error: function(stm) {

			$("#APCMH_RecptNum1").val("");	    	
	  	//$("#PFDT_PFCOLLECT").val('Collected');	
	  	$("#APCM_CERSAISTATUS").val('FAILED');
	  	
	  	
	  	//alert('PF Collected')
	  	
	  	$("#Save1").click();
	  	
	  	//ClickCollectedBtn();
			
	  	alert("Collections Error Occured. Contant IT!!! \n" + stm.split("|")[3]);
	  	 //$('.CERONL').attr('disabled',false)
		  }
		});

		
		// Collections End	
		}
		
		
	});


$('.Collected4').on('click', function() {
var html=$('.PFMNDCHK')
	 MndtryChk = ChkMandatoryFlds_V1("APCMMndtry",html);
	 
	 if(MndtryChk == "Mandatory")
		{
		 alert("Fill the Mandatory Fields");
		 return false;
		}
		if(confirm('PF Collection mode will be freeze') == true)
		{
			$("#Save").click();
			
			if ($("[name=APCM_PFMODE]:checked").val() == "Offline")
			{
			
			/* $('.PFOFFL').show()
			$('.PFCHK').hide()
			
			$('.PFONBNK').hide()
			$("#CTPPF").hide(); */
			$('.PFONL').attr('disabled',true)
			}
			else
			{
				$('.PEFEMODE').attr('disabled',false)
			}
		}
		else
		{
			$("#APCM_PFUTRNO").val('');
			$("#APCM_PFOFFLADDDT").val('');
			
			return;
		}
});
$('.Collected2').on('click', function() {
	
		var html=$('.PFMNDCHK')
	 MndtryChk = ChkMandatoryFlds_V1("APCMMndtry",html);
	 
	 if(MndtryChk == "Mandatory")
		{
		 alert("Fill the Mandatory Fields");
		 return false;
		}
	
	
	

	if ($("[name=APCM_PFMODE]:checked").val() == "Online")
		{
		
        $('.PFCHK').show()
		$('.PFONBNK').hide()
		  $('.PFOFFL').hide()
		 $("#CTPPF").hide();
		//$('.PFONL').attr('disabled',true)
		//$('.PFONL').next().addClass('active')
		
		if($("#APCM_PFSTATUS").val() == "Payment Success")
				{					
				$('.PFONL').attr('disabled',true);
				$("#APCM_PFADDDT").next().addClass("active");
				$("#APCM_PFADDNO").next().addClass("active");
				$("#APCM_PFADDDT").next().next().hide();
				}
        
       		
		
		}
	
	// Collections Start
	
//if ($("[name=APCM_PFMODE]:checked").val() == "Online")
//	{
   $("#Save").click();
//}

/*$("#PayType").val("PF");

	if ($("[name=APCM_PFCOLLECTED]:checked").val() == "Collectible")
	{
	var PFNO1 = "PF";
	var PRCSID1 = $("#PrcsID").val();
	var RECEIPTNO=""


	$.ajax({
	   url: "/TPLSW/COLLECTIONS",
	   type: 'POST',
	   data: {PRCSID:PRCSID1,PFNO:PFNO1,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	   async:true,
	  // dataType: 'json',
	  // contentType:'application/json',
	   
	   success: function(stm){        
	  // var obj = JSON.parse(JSON.stringify(stm))
	    if (stm == "")
	    {
	    	
	  alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3] );
	    return;		
	   // $('.PFONL').attr('disabled',false)
	    
	    }
	    
	    else if (stm.split("|")[2] == "")
	    {
	    
	    alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3] );
	    return;
	   // $('.PFONL').attr('disabled',false)
	    }
	    else
	    {
	    
	   //var CUSID = UI_getdata(PRCSID1,PFNO1,stm.split("|")[2],"","","LSW_SPFINTRSTATUS");	
	    	
	    	$("#APCM_RecptNum2").val(stm.split("|")[2]);	 

if ($("#APCM_RecptNum2").val() != "")
{	
$("#APCM_RecptNum2").next().addClass("active");
$("#APCM_PFADDDT").next().addClass("active");
$("#APCM_PFADDNO").next().addClass("active");
$("#APCM_PFADDDT").next().next().hide();
$('.PFONBNKONL').show()
$("#CTPPF").hide();

//Click to Collected Hide
   $('.Collected2').hide();
}
			
	    	//$("#PFDT_PFCOLLECT").val('Collected');	
	    	$("#APCM_PFSTATUS").val('IN PROGRESS');
	    	
  	//alert('PF Collected')
	    	
	    	$("#Save1").click();
	    	
	    	//ClickCollectedBtn();
	    	
	    	
	    	$('.PFONL').attr('disabled',true);
	  
	   
	    alert ("Receipt Generated");
	    
	    //$('.PFONL').next().addClass('active')
	    }
	    
	},
	error: function(stm) {

		$("#APCM_RecptNum2").val("");	    	
  	//$("#PFDT_PFCOLLECT").val('Collected');	
  	$("#APCM_PFSTATUS").val('FAILED');
  	
  	
  	//alert('PF Collected')
  	
  	$("#Save1").click();
  	
  	//ClickCollectedBtn();
		
	 alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3]);
		//$('.PFONL').attr('disabled',false)
	  }
	});

	
	// Collections End	
	}*/
	
	
});


$('.Collected3').on('click', function() {
	
     var html=$('.BTMNDCHK')
	 MndtryChk = ChkMandatoryFlds_V1("APCMMndtry",html);
	 
	 if(MndtryChk == "Mandatory")
		{
		 alert("Fill the Mandatory Fields");
		 return false;
		}
	
	
	var DDAmt=$("#APCM_BTDDNAME").val()
	
	if(DDAmt=="0")
	{
		alert('DD Amount should be greater than Zero');
		 return false;
	}
	// Collections Start
	
//if ($("[name=APCM_PFMODE]:checked").val() == "Online")
//	{
   $("#Save1").click();
//}

	if ($("[name=APCM_ISBTCMNTCHRGAPPLY]:checked").val() == "Yes")
	{
	var PFNO1 = "BT";
	var PRCSID1 = $("#PrcsID").val();
	var RECEIPTNO=""

$("#PayType").val("BT");

	$.ajax({
	   url: "/TPLSW/COLLECTIONS",
	   type: 'POST',
	   data: {PRCSID:PRCSID1,PFNO:PFNO1,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	   async:true,
	  // dataType: 'json',
	  // contentType:'application/json',
	   
	   success: function(stm){        
	  // var obj = JSON.parse(JSON.stringify(stm))
	    if (stm == "")
	    {
	    	
	    alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3])
	    return;		
	    
	   // $('.BTSTA').attr('disabled',false)
	    }
	    
	    else if (stm.split("|")[2] == "")
	    {
	    
	    alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3])
	    return;
	  //  $('.BTSTA').attr('disabled',false)
	    }
	    else
	    {
	    
	   //var CUSID = UI_getdata(PRCSID1,PFNO1,stm.split("|")[2],"","","LSW_SPFINTRSTATUS");	
	    	
	    	$("#APCM_RecptNum3").val(stm.split("|")[2]);	  
	    	
	    	if ($("#APCM_RecptNum3").val() != "")
	    	{	
	    	$("#APCM_RecptNum3").next().addClass("active");
			
			//Click to Collected Hide
              $('.Collected3').hide();
	    	}
	    		
	    	
	    	
	    	//$("#PFDT_PFCOLLECT").val('Collected');	
	    	$("#APCM_BTSTATUS").val('IN PROGRESS');
	    	$("#APCM_BTSTATUS").next().addClass('active');
	    	
	    	//alert('PF Collected')
	    	
	    	$("#Save1").click();
	    	
	    	//ClickCollectedBtn();
	    	   $('.BTSTA').attr('disabled',true);
	    alert("Receipt Generated");
	    //$('.BTSTA').next().addClass('active')
	    }
	    
	},
	error: function(stm) {

		$("#APCM_RecptNum3").val("");	    	
  	//$("#PFDT_PFCOLLECT").val('Collected');	
  	$("#APCM_BTSTATUS").val('FAILED');
  	$("#APCM_BTSTATUS").next().addClass('active');
  	
  	//alert('PF Collected')
  	
  	$("#Save1").click();
  	
  	//ClickCollectedBtn();
		
		alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3]);
		// $('.BTSTA').attr('disabled',false)
	  }
	});

	
	// Collections End	
	}
	
	
});
if($("#APCM_TDSAPPLICABLE").val() == "Yes")
{
	$("#APCM_TDSAPPLICABLE").closest(".col-md-4").next().show();
}


});