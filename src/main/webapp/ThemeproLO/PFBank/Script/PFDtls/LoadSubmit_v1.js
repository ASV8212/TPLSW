$(document).ready(function () {
	
	
	$($('.AFormaccordion')[0]).click();
	
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#PFDT_PFNO").val($(".FormPageMultiTab li.active").attr("id"))
		}
	//$("#PFDT_PFNO").text($(".PFDT_PFNO").val());
	
	FormDataFromDB("LSW_TLONPFDTLS","PFDT_","PFDTDBfields", $("#PFDT_PFNO").val()+"|PFDT_PFNO");
	//$('#OnlineModal').hide();
	//$('#CheckModal').hide();
	
	if($("#Def:checked").val()=="Deferred")
	{
	$(".Defrmnt").show();
	}
else{
	$(".Defrmnt").hide();
    }
	
	CheckCollectorNot();
	CheckLoanType('PFDT');
	CheckMode();
	ClrMndtry();
if($("#DMY7").val().split("|")[0] == "Registered Mortgage")
	{
		//$(".FormSave").hide();
		
		}
		else if($("#PFDT_DEMANDAMT").val()=="")
  	  {
	   var PrcsId=$("#PFDT_PRCSID").val()
	   var xml=UI_getdata(PrcsId,"","","","","LSW_SPFAMOUNT")
	   var INCLIGST=$(xml).find('INCLIGST').text()
	    var DEMANTAMOUNT=$(xml).find('DEMANTAMOUNT').text()
	    var  INCLIGST=CURCommaSep(INCLIGST)
	     var  DEMANTAMOUNT=CURCommaSep(DEMANTAMOUNT)
     $("#PFDT_DEMANDAMT").val(INCLIGST)
     $("#PFDT_WIOUTGSTDEMAMT").val(DEMANTAMOUNT)
      }
	  
  if($("#DMY7").val().split("|")[0] != "Registered Mortgage")
	{
 GetDmdAmt();
	}
  CHKCOLLECTIONTYPE();
  OnlineTrans();
  GetCustName();
  
  if($("#PFDT_SMSVARIFY").val()=="Verified")
  {
	  $(".SMSLINK").text('Re-Send Link :')
  }
  if($("#PFDT_EMAILVARIFY").val()=="Verified")
  {
	  $(".EMAILLINK").text('Re-Send Link :')
  }
  
	var ActivePF=$(".FormPageMultiTab").find('li.active').text()
	
	if(ActivePF=="PF 1")
		{
		 $(".PFCIBILA").show()
		 var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_TCHKCIBILINIT")
		 if($(xml).find('RESULT').text()=="Y")
			 {
			  $("#CIBIL").text('CIBIL Initiated');
    		  $("#CIBIL").addClass("btn-GrnInplain");	
    		  $("#CIBIL").removeClass("btn-yelInplain");
    		  $("#CIBIL").removeClass("btn-RedInplain"); 
			 }
		 else
			 {
			   $("#CIBIL").text('Initiate CIBIL');
			   $("#CIBIL").removeClass("btn-GrnInplain");	
    		   $("#CIBIL").addClass("btn-yelInplain");
			 }
		}
	else
		{
		  $(".PFCIBILA").hide();
		}
		
		
		
	if($("#PFDT_RECIPTNUM").val()!="")
		{
          $('.DELBTNTXT').hide
		}
		
		if($("#RRECPTNO").val()=="")
		{
			$(".RMK").text('Online transaction is completed,click initiate collection to generate the receipt number.')
		}
		
		
/*	$('.AFormaccordion').on('click', function() {
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		var tbl = $(this).attr("data-aria").split("|")[0];	
		var prfx = $(this).attr("data-aria").split("|")[1];
		if($(this).attr("aria-expanded") == "false")
			{
		FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", "");
			}
			
	});*/
	
	$('.Pay').on('click', function() {
	  
		RedirectURL=window.location.origin+"/TPLSW/PAYTMRes?PrMs1=REFID00004320200115215708"
		$(location).attr('href',encodeURI(RedirectURL));
	})
	
	
	$('.FormSave3').on('click', function() {
	
	
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		var CHKresult=FormDataToDB(tbl,prfx,$("#PFDT_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
	
		})
	
	$('.FormSave').on('click', function() {
		
		
		
//PAYTM PROCESSING CHECK START	
if($(this).text() == "Save & Next" || $(this).text()=="Save")
		{		
		 var xml=UI_getdata($("#PrcsID").val(),$("#PFDT_PFNO").val(),"","","","LSW_SONLNEPAYMNTCHK")
			if($(xml).find('RESULT').text()=="No")
			 {
				alert($(xml).find('MSG').text());
				return;
			 }
			if($(xml).find('RESULT').text()=="Success")
			 {
				alert($(xml).find('MSG').text());
				CheckCollectorNot();
				return;
			 }
		}			 
//PAYTM PROCESSING CHECK END	

		
		
		
		if($("#DMY7").val().split("|")[0] == "Registered Mortgage")
	{
		 NXTTAB(this);
		 return;
		
	}
		if($(this).text() == "Approve"){
			$("#PFDT_DEFRSTATUS").val("APPROVED");
		}
		if($(this).text() == "Reject"){
			$("#PFDT_DEFRSTATUS").val("REJECTED");
		}
		if($(this).text() == "Save & Next")
		{
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		}
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		// Customer Seq ID Gen Start		
	
		if($("#PFDT_PFNO").val() == "")
		{
		var CUSID = UI_getdata("PRF","","Yes","","","Sam_sGetSeqID");
		
		$("#PFDT_PFNO").val($(CUSID).find("Val1").text());
		//$(".PFDT_PFNO").text($(CUSID).find("Val1").text());
	    }
		// Customer Seq ID Gen End 
		$("#PFDT_PFREFNAME").val($(".FormPageMultiTab li.active a div").text())
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		var CHKresult=FormDataToDB(tbl,prfx,$("#PFDT_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		if (CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		// Tab Header Change Start
		
		$(".FormPageMultiTab li.active").attr("id",$("#PFDT_PFNO").val());
		$(".FormPageMultiTab li.active").attr("title",$("#PFDT_PFNO").val());
		$(".FormPageMultiTab li.active a div").text($("#PFDT_PFREFNAME").val());
		//$("#PFDT_PFREFNAME").val($(".FormPageMultiTab li.active a div").text())
		// Tab Header Change End
		
			if($(this).text() == "Save & Next")
			{
              if(confirm('Processing Fee once saved cannot be modified. Are you sure you want to save this record ?') == true)
		 		{
                 
		 		}
			 else
			    {
				 return false
                }
             }
		
		
			/* ONLINE Start*/
		
			if ($("[name=PFDT_MODE]:checked").val() == "Online" && $("[name=PFDT_COLECTIONTYP]:checked").val() == "Collectible")
			{
		if($(this).text() == "Save & Next")
			{				
				NXTTAB(this);			
			
			}
			else if($(this).text() == " Next")
		{
		  NXTTAB(this);
		}
		else if($(this).text() == "Approve"){
			
			UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active a div").text(),"APPROVED","","","LSW_SUPDTDEFRSTATUS")
			var IOP1 = window.location.origin;
			var RedirectURL = IOP1+"/TPLSW/ManageDeferment";
			$(location).attr('href',RedirectURL);
			//$("#PFDT_DEFRSTATUS").val("");
		}
		else if($(this).text() == "Reject"){
			UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active a div").text(),"REJECTED","","","LSW_SUPDTDEFRSTATUS")
			var IOP1 = window.location.origin;
			var RedirectURL = IOP1+"/TPLSW/ManageDeferment";
			$(location).attr('href',RedirectURL);
			//$("#PFDT_DEFRSTATUS").val("REJECTED");
		}
		
			}
	
		/*ONLINE END*/
		
			else{
		
		
		
		
			if($(this).text() == "Save & Next")
			{
              if(confirm('Processing Fee once saved cannot be modified. Are you sure you want to save this record ?') == true)
		 		{
                 
		 		}
			 else
			    {
				 return false
                }
             }

		if($(this).text() == "Save & Next")
		{
			if ($("[name=PFDT_COLECTIONTYP]:checked").val() == "Collectible")
			{
			$(".Collected").trigger("click");	
			}
			else
				{
		  NXTTAB(this);
				}
		}
		else if($(this).text() == " Next")
		{
		  NXTTAB(this);
		}
		else if($(this).text() == "Approve"){
			
			UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active a div").text(),"APPROVED","","","LSW_SUPDTDEFRSTATUS")
			var IOP1 = window.location.origin;
			var RedirectURL = IOP1+"/TPLSW/ManageDeferment";
			$(location).attr('href',RedirectURL);
			//$("#PFDT_DEFRSTATUS").val("");
		}
		else if($(this).text() == "Reject"){
			UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active a div").text(),"REJECTED","","","LSW_SUPDTDEFRSTATUS")
			var IOP1 = window.location.origin;
			var RedirectURL = IOP1+"/TPLSW/ManageDeferment";
			$(location).attr('href',RedirectURL);
			//$("#PFDT_DEFRSTATUS").val("REJECTED");
		}
			}
	});
	
	
	
	
	if($("#PrMs5").val()=="DEFR")
	{
	$()
	$('.my-auto .HyperControls').hide();
	$("#FormPageTab2").hide();
	$('.FormPageMultiTabAdd').hide();
	for(var i=0;i<$('.FormPageMultiTab').find('li').not('.FormPageMultiTabAdd').length;i++)
		{
		if($($('.FormPageMultiTab').find('li').not('.FormPageMultiTabAdd')[i]).text()!=$("#PrMs4").val())
			{
			$($('.FormPageMultiTab').find('li').not('.FormPageMultiTabAdd')[i]).hide();
			}
		}
	$("#Save1").text("Approve");
	$("#Save2").text("Reject");
	$('.PFDTDBfields').attr("disabled","disabled")
	}
	else{
		if($("#PFDT_DEFRSTATUS").val()=="PENDING"||$("#PFDT_DEFRSTATUS").val()=="APPROVED")
			{
			$('.PFDTDBfields').attr("disabled","disabled")
			}
	}
	
	
	
	// Added for P2 DElivery on ONline Payment 16042020 Start
	
		if ($("[name=PFDT_COLECTIONTYP]").val() == "Collectible" && $("#PFDT_RECIPTNUM").val() == "") 
	{
	$("#InitColcRe").show();
	}
	else
		{
		$("#InitColcRe").hide();
		}
	
	// Added for P2 DElivery on ONline Payment 16042020 End
	
	
});

