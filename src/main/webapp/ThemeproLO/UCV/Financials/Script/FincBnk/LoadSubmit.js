$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
	//$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	
	$("#FCBD_PRCSID").attr("value",$("#PrcsID").val());
	$("#FCBD_CUSID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	
	var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];
	
	var html=$(this).closest('.DYNROW')
	//LoadMultiData("",$("#PrcsID").val(),$(html).find('.UNIQNO').val(),"BnkBalance","BUBPDBfields","LSW_TBNKBALANCEPAGE");
	
	//Added for GECL 3.0 and 10% Start
	if($("#DMY7").val().split("|")[8]=="HE02")
	{
	  $(".ABBMndtry").removeClass('FCBDMndtry');
	  $(".ABBMndtry").next().find(".MndtryAstr").html("");
	}
	else
	{
	  $(".ABBMndtry").addClass('FCBDMndtry');
	  $(".ABBMndtry").next().find(".MndtryAstr").html("*");
	  var UpdAvg=UI_getdata($("#PrcsID").val(),$("#DMY3").val().split("|")[3],$("#DMY7").val().split("|")[13],"","","LSW_SAUTOAVGUPDTBANKBAL")
	}
	//Added for GECL 3.0 and 10% End
	
	//var UpdAvg=UI_getdata($("#PrcsID").val(),$("#DMY3").val().split("|")[3],$("#DMY7").val().split("|")[13],"","","LSW_SAUTOAVGUPDTBANKBAL")
	
	LoadMultiData("",$("#PrcsID").val(),$("#FCBD_CUSID").val(),"BankDetail1","FCBDDBfields","LSW_sGETFINCBNKDLT");
	
	if($("#DMY7").val().split("|")[8]=="ML01")
	{
		$(".BnkNotes").hide();
	}
	var DATA=["BankDetail1|"];
	for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	ODCCLOAD(HTML);
	}
	}
	
	$(document).on("click", ".BALANCE", function(){
		/*var html=$(this).closest('.DYNROW')
		
		var DATA=["BnkBalance|"];
	 for (j=0;j<DATA.length;j++)
		 {
		   var BALANCE=DATA[j].split("|")[0];
	       var row = $("." + BALANCE).find(".DYNROW").length;
	       $("#BTNBALANCEGRD"+(parseInt([i])+1)).click()
	     }	*/	
		var Row=$(this).closest(".DYNROW").attr("data-row")
		
		if($("#FCBD_ACCNTSEQNO"+Row).val()=="")
		{
    		var CUSID = UI_getdata("FINBNK","","Yes","","","Sam_sGetSeqID");
    		$("#FCBD_ACCNTSEQNO"+Row).val($(CUSID).find("Val1").text())
		}
		$("#Hiddenrow").val($(this).closest(".DYNROW").attr("data-row"));
 		//$(".MultiGridTrg").click();
	}) 
	
	//getCusName();
	
	
$(document).on("click", ".DELETEFINCBANKDET" , function() {

 	var PrcsId=$(this).attr("data-tab").split("|")[0];
 	var Type=$(this).attr("data-tab").split("|")[2];
 	PrcsId=$("#"+PrcsId).val();
	 var html=$(this).closest('.DYNROW')
     var UNIQID=$(html).find("[name=FCBD_BNKNO]").val()
     var lenbankaccnt = $($(".BankDetail1").find(".DYNROW")).length;
	 if(lenbankaccnt!="")
	 {
		 if(parseInt(lenbankaccnt)-1==0)
		 {
			 alert("Atleast one Banking Details is Mandatory. Kindly proceed the case without deleting the same");
			 return;
		 }
	 }	 

 	 if(confirm('Delete Banking Details ') == true)
 		{
 		  var xml=UI_getdata(PrcsId,UNIQID,Type,"","","LSW_SCLEARCUSDATA");

 	 	   $(this).closest('.DYNROW').remove()	
 	 		var k= $('.BankDetail1').find('.DYNROW').length
 	 		for(i=0;i<k;i++)
 	 			{
 	 			//('.BankDetail1').find('.DYNROW')[i]
 	 		    var	j=i+1
 	            $($('.BankDetail1').find('.DYNROW')[i]).find('#PROPTXTHDR').text('Account '+j)
 	 			}
 		}
 })	
	
	
	
	
	$(document).on("click", ".UPDateFlow", function(){
		 /*var DATA=["UPDATEINFLOW|"];
		 for (j=0;j<DATA.length;j++)
			 {
			   var INFLOW=DATA[j].split("|")[0];
		       var row = $("." + INFLOW).find(".DYNROW").length;
		       for (i=0;i<row;i++)
		       {
		         var html1 = $("." + INFLOW).find(".DYNROW")[i];
		         
		         $(html1).find('[name = FBUF_ACCOUNTNO]').val($(html).find('.UNIQNO').val())
		        // SchemeBasedCAM(HTML,"CACL_INCCONSID"+(parseInt([i])+1));
		       }
		     }	*/		    
		  //$(".MultiGridTrg").click();
       })

	
	
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#FCBD_ACCNTSEQNO").val($(".FormPageMultiTab li.active").attr("id"))
		}
	
	var DATA=["BankDetail1|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	//LoadManualAvailable(HTML,"");
	 }
	}
	
	
		 if($('.BankDetail1').find('.DYNROW').length=="0")
		 {
		 $('.NODATA').show()
		 }
	 
	
	
	
	
	
	
	
	 $(document).on("click", ".FormSave", function(){
		
		 var html=$(this).closest('.DYNROW')
		
		if($(this).text() == "Save & Next")
		{
		
		var MndtryChk = ChkMandatoryFlds_V1("FCBDMndtry",html);
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}

		if($(html).find("[name=FCBD_ACCTTYPE]").val()=="Savings account"||$(html).find("[name=FCBD_ACCTTYPE]").val()=="Current Account"||$(html).find("[name=FCBD_ACCTTYPE]").val()=="Others")
			{
			if($("#DMY7").val().split("|")[8]!="HE02")
	         {
				 
				 
				 
				 
				 
		    if($(html).find("[name=FCBD_AVGMONBLNC]").val()=="0" || $(html).find("[name=FCBD_AVGMONBLNC]").val()=="0.00")
			  {
			    alert('Average Monthly Balance should be greater than Zero')
			    return false;
			  }
			  
			    if($(html).find("[name=FCBD_INFLWSUM]").val()=="0" || $(html).find("[name=FCBD_INFLWSUM]").val()=="0.00")
			  {
			    alert('Update Flow - Inflow should be greater than Zero')
			    return false;
			  }
			  
			   if($(html).find("[name=FCBD_OUTFLWSUM]").val()=="0" || $(html).find("[name=FCBD_OUTFLWSUM]").val()=="0.00")
			  {
			    alert('Update Flow - Outflow should be greater than Zero')
			    return false;
			  }
			  
			  
			  
			  
			 }
			}
		}
		// Customer Seq ID Gen Start		
	
		if($(html).find("[name=FCBD_ACCNTSEQNO]").val() == "")
		{
		var CUSID = UI_getdata("FINBNK","","Yes","","","Sam_sGetSeqID");
		
		$(html).find("[name=FCBD_ACCNTSEQNO]").val($(CUSID).find("Val1").text());
	//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
	    }
		// Customer Seq ID Gen End 
		
	//	$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())
		//var html=this.closest('#UpdateBalance')
		
		
				var tbl = $(this).attr("data-aria").split("|")[0];
				var prfx = $(this).attr("data-aria").split("|")[1];
				var DATA = $(this).attr("data-aria").split("|")[2];

				
				var UPDBALANCE = TxtGridsubmitdata_V4("BALANCETable","BUBM_","FCBD_",html);
				var BALANCEDATA=["BankDetail1|"];
				 for (j=0;j<BALANCEDATA.length;j++)
					 {
					   var BNKDATA=BALANCEDATA[j].split("|")[0];
				       var row = $("." + BNKDATA).find(".DYNROW").length;
				       for (i=0;i<row;i++)
				       {
				         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
				         $(BnkHtml).find('[name = FCBD_BNKBALANCE]').val(UPDBALANCE)
				       }
				     }
				
					var UPDFLOW = TxtGridsubmitdata_V4("FLOWTable","UPFD_","FCBD_",html);
				 
				    var BALANCEDATA=["BankDetail1|"];
					 for (j=0;j<BALANCEDATA.length;j++)
						 {
						   var BNKDATA=BALANCEDATA[j].split("|")[0];
					       var row = $("." + BNKDATA).find(".DYNROW").length;
					       for (i=0;i<row;i++)
					       {
					         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
					         $(BnkHtml).find('[name = FCBD_INFLOW]').val(UPDFLOW)
					        // SchemeBasedCAM(HTML,"CACL_INCCONSID"+(parseInt([i])+1));
					       }
					     }
				
				var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);

				if (CHKresult == "Fail")
					{
					alert("Submission Failed");
					return false;			
					}
				else
				{
					alert("Account Details Saved Successfully")
				}
		// Tab Header Change End
		
			
		if($(this).text() == "Save & Next")
		{
			  NXTTAB(this);
		}
		
	});
	//************Credit Change Strt************
	$(document).on("change", ".IsPercentageSPLCashTr", function() {
	  //$('.IsIFSCFields').change(function () {	 	    
	  var Percentage=$(this).val()

	  if(parseInt(Percentage)>parseInt('100'))
		  {
		  
		  alert ("Percentage Can't be Greater than 100")
		  $(this).val('')
		  }
	 	});
		//************Credit Change End************
	 $(document).on("click", ".Balance", function(){
		 
		 MndtryChk = CheckDocMndtry("BALANCETable"+$(this).closest(".DYNROW").attr("data-row"),"BALREMARK","Update Balance");
			if(MndtryChk != "")
				{
				alert(MndtryChk);
				return;
				}
		 
		 	$("#FCBD_AVGMONBLNC"+$('#Hiddenrow').val()).val($("#FCBD_AVG"+$('#Hiddenrow').val()).val())
		 	$("#FCBD_AVGMONBLNC"+$('#Hiddenrow').val()).next().addClass('active');
			$(".BalanceClose").click();
		})		
	$(document).on("click", ".UPFLOWSUBMIT", function(){ 	
            $(".close").click();     
         })
		
});

