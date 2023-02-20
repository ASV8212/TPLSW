var MndtryFlg = ""
$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
	//$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	
	$("#BKDT_PRCSID").attr("value",$("#PrcsID").val());
	$("#BKDT_CUSID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	
	var tbl = $("#heading1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#heading1 a").attr("data-aria").split("|")[1];
	var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
	
	LoadMultiData("",$("#PrcsID").val(),$("#BKDT_CUSID").val(),"BankDetail1","BKDTDBfields","LSW_sGETBANKDLT");
	
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#BKDT_BNKNO").val($(".FormPageMultiTab li.active").attr("id"))
		}
	
	//FormDataFromDB("LSW_TLONBANKDTLS","BKDT_","BKDTDBfields", $("#BKDT_BNKNO").val()+"|BKDT_BNKNO");
	CheckLoanType('BKDT');
	var DATA=["BankDetail1|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ChequeAvailable (HTML,"");
	 }
	}
	 
	 
	if($("#DMY7").val().split("|")[8] =="HE02"&&$("#DMY5").val().split("|")[2] =="PreLogin")
	{
		$('.SNDCRD').show()
		$('.Rejct').show()
		$('.ApplForm').show()
		
	}
	else
	{
	     $('.SNDCRD').hide()
         $('.Rejct').hide()	
         $('.ApplForm').hide()		 
	}
	 
	 if($("#DMY7").val().split("|")[8] =="HE02")
	{
	 var Role=$("#DMY5").val().split("|")[1]
	
	    if(Role=="Yes")
		  {
		    $(".GenApplForm").show()
		  }
		  else if($("#PrMs1").val()=="View")
		{
			$(".GenApplForm").show()
		}
	  else
		 {
		   $(".GenApplForm").hide()
		 }
	}
	$(document).on("click", "#Reject", function() {
			$("#REJECTREMARKSPopup").click();
			
		});


		
	 $(document).on("blur", ".ACCNO", function() {
			
			var DateVal=$(this).val()	
			var DateId=$(this).attr('id')
		    var html=$('.BankDetail1').find(".DYNROW")
		    var row = $('.BankDetail1').find(".DYNROW").length;
			 for (i=0;i<row;i++)
			 {
			   var JoinId=$($(html).find("[name=BKDT_ACCTNO]")[i]).attr('id');
			   if(JoinId!=DateId)
				   {
				   var JoinVal=$($(html).find("[name=BKDT_ACCTNO]")[i]).val()
				    if(JoinVal == DateVal)
				    	{
				    	alert("Account Number is Already Entered");
				    	$(this).val('');
				    	return false;
				    	}
				   }
			 }
		});
	 
/*	$('.AFormaccordion').on('click', function() {
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		var tbl = $(this).attr("data-aria").split("|")[0];	
		var prfx = $(this).attr("data-aria").split("|")[1];
		if($(this).attr("aria-expanded") == "false")
			{
		FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", "");
			}
			
	});*/
	 
	 
	 $(document).on("click", ".DELETEBNKDET" , function() {

		 	var PrcsId=$(this).attr("data-tab").split("|")[0];
		 //	var CusID=$(this).attr("data-tab").split("|")[1];
		 	var Type=$(this).attr("data-tab").split("|")[2];
		 	PrcsId=$("#"+PrcsId).val();
			 var html=$(this).closest('.DYNROW')
		     var UNIQID=$(html).find("[name=BKDT_BNKNO]").val() 
		
		 	 if(confirm('Delete Bank Details') == true)
		 		{
		 		  var xml=UI_getdata(PrcsId,UNIQID,Type,"","","LSW_SCLEARCUSDATA");
		 		//  LoadMultiData("",$("#PrcsID").val(),$("#BKDT_CUSID").val(),"BankDetail1","BKDTDBfields","LSW_sGETBANKDLT");
		 		 location.reload(true);
		 		}
		 })

	
	
	//$('.FormSave').on('click', function() {
	 $(document).on("click", ".FormSave", function(){
		
		 var html=$(this).closest('.DYNROW')
		
		if($(this).text() == "Save & Next")
		{
		
		var MndtryChk = ChkMandatoryFlds_V1("BKDTMndtry",html);
		
		if(MndtryChk == "Mandatory")
			{
			MndtryFlg="Mandatory";
			alert("Fill the Mandatory Fields");
			return false;
			}
		
		
		if($($(html).find("input[name='BKDT_CHEQAVAILABLE']:checked")).val()=="Yes")
	 	{
		   if($(html).find("[name=BKDT_COLLATTACHMENT]").val() == "")
			   {
			   MndtryFlg="Mandatory";
			   alert("Upload the Cheque ");
				return false;
			   
			   }
	
	    }
		
		}
	//var FormXML =	submitdata("CBSIDBfields");
		
		// Customer Seq ID Gen Start		
	
		if($(html).find("[name=BKDT_BNKNO]").val() == "")
		{
		var CUSID = UI_getdata("BNK","","Yes","","","Sam_sGetSeqID");
		
		$(html).find("[name=BKDT_BNKNO]").val($(CUSID).find("Val1").text());
	//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
	    }
		// Customer Seq ID Gen End 
		
		$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())
		
		
		
				
				var tbl = $(this).attr("data-aria").split("|")[0];
				var prfx = $(this).attr("data-aria").split("|")[1];
				var DATA = $(this).attr("data-aria").split("|")[2];
	
				
				var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);
				
				
				if (CHKresult == "Fail")
					{
					MndtryFlg="Submission Failed";
					alert("Submission Failed");
					return false;			
					}
				else
				{
				//	alert("Account Details Saved Successfully")
				}

     var BankUpdate=   UI_getdata($("#PrcsID").val(),$(html).find("[name=BKDT_BNKNO]").val(),"","","","LSW_SUPDATEBANKDETAILS");
		
		
		// Tab Header Change End
		
			
		if($(this).text() == "Save & Next")
		{
			  NXTTAB(this);
		}
		
	});
	
	
	 $(document).on("click", ".SNDCRD", function(){
		
		for(var i = 0;i<$('.BankDetail1').find('.Formnxt').length;i++)
		{
			if(MndtryFlg=="")
			{
				//$('.BankDetail1').find('.Formnxt')[i].click();
				var  html=	$('.BankDetail1').find('.DYNROW')[i]
                var MndtryChk = ChkMandatoryFlds_V1("BKDTMndtry",html);
                if(MndtryChk == "Mandatory")
			    {
			     MndtryFlg="Mandatory";
			     alert("Fill the Mandatory Fields");
			     return false;
			    }
			}
			else
			{
				break;
			}
		}
		
			//FormSave 
		for(var i = 0;i<$('.BankDetail1').find('.Save').length;i++)
		{
		$('.BankDetail1').find('.Save')[i].click();
        }
		
	
		
		
		if(MndtryFlg==""){
				var xmlzz=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHECKPFCOLLECTION")
				var Collection=$(xmlzz).find('RESULT').text()
				if(($("#DMY7").val().split("|")[0]=="Registered Mortgage")||($("#DMY7").val().split("|")[0]=="Re-Punch"))
				{
				 Collection='SUCCESS'
				}
					
				if(Collection != 'SUCCESS')
					{
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
				var BANK=UI_getdata($("#PrcsID").val(),"","","","","LSW_SChkBankDetails")
				
			    var BANKDETAILS=$(BANK).find('BANKDETAILS').text()
				if(BANKDETAILS == "NO")
			   {
				 alert('Fill the Primary Acccount Bank Details for the Applicant(s) whose Income considered is selected as Yes');
				 return false;
			   }
				
				var xml=UI_getdata($("#PrcsID").val(),$("#DMY5").val().split('|')[2],"","","","LSW_SWFVARDECIDE");
				var Button = $(xml).find("WFVAR").text();
				WFComplete ($("#ActvID").val(),"var_status="+Button,"");	
			}
			else{
				MndtryFlg="";
				return;
			}
	//var Html=$(this).closest('.BankDetail1')
	
//	$(this).closest('.BankDetail1').find('.Formnxt').click()
	  
	});
	
});

