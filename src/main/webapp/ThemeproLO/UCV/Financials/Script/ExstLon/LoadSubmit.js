$(document).ready(function () {
	
	$("#FELD_PRCSID").attr("value",$("#PrcsID").val());
	$("#FELD_CUSID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#FELD_CUSNAME").attr("value",$(".FormPageMultiTab li.active").text());
	if($("#VERTICAL").val() == "UCV Eco")
	{
		if($("#DMY7").val().split("|")[8] != "T305" && $("#DMY7").val().split("|")[8] != "T306")
		{
			$("#FormPageTab10").remove();
		}
	}
	
	var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];
	
	if($("#DMY7").val().split('|')[0]=="Existing Loans"  && $("#DMY7").val().split('|')[8] == "HE01")
	{
	   $(".OEXL").show()
	}
	else
	{
	   $(".OEXL").hide()
	}
	//$("#BTNRTRGRD").click();
	var op = UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETBNKACCNTNO");
	var AcctNo=$(op).find('RESULT').html();
	$("#FELD_EMIBNKACCT").append(AcctNo)
	
	var xml=UI_getdata("","","","","","LSW_SGETFIANCIYEARS")
	$("#FELD_LSTMONYRBOUNCED").append($(xml).find("Years").html());
	
	if($("#VERTICAL").val()!="UCV")
	{
	   var StrCAMData=UI_getdata($("#PrcsID").val(),"","",$("#VERTICAL").val(),"","LSW_SSTRCAMMAINTABLE");
	}

	
	LoadMultiData("",$("#PrcsID").val(),$("#FELD_CUSID").val(),"ExistingLoan1","FELDDBfields","LSW_sUCVGETEXLONDLT");
	
	if($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
	{
	  $("#FELD_EXLONNO").val($(".FormPageMultiTab li.active").attr("id"))
	}
	
	//FormDataFromDB("LSW_TLONBANKDTLS","BKDT_","BKDTDBfields", $("#BKDT_BNKNO").val()+"|BKDT_BNKNO");
	var DATA=["ExistingLoan1|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	     var row = $("." + ValuationID).find(".DYNROW").length;
	        for (i=0;i<row;i++)
	        {
	            var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	           GetFinancialYears(i)
			   
			   var Status = $(HTML).find("[name='FELD_LONSTATUS']").val();
	           if(Status=="Closed")
	        	   {
                    $(HTML).find(".LONACT").show()
                    $(HTML).find(".LONACTMND").addClass('FELDMndtry')
                   }
	           else
	        	   {
	        	   $(HTML).find(".LONACT").hide()
	        	    $(HTML).find(".LONACTMND").removeClass('FELDMndtry')
                   }
	        }
	      }
    CHKNOBOUNCEONLOAD();
	 CheckInsitute();
	/*var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID =$("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#headingOne1 a").attr("data-aria").split("|")[3];
	
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	$("#headingOne1 a").attr("data-load","Yes");*/

	 $(document).on("click", ".DELETEEXISLOAN" , function() {

		 	var PrcsId=$(this).attr("data-tab").split("|")[0];
		 //	var CusID=$(this).attr("data-tab").split("|")[1];
		 	var Type=$(this).attr("data-tab").split("|")[2];
		 	PrcsId=$("#"+PrcsId).val();
			 var html=$(this).closest('.DYNROW')
		     var UNIQID=$(html).find("[name=FELD_EXLONNO]").val() 
		
		 	 if(confirm('Delete Existing Loan') == true)
		 		{
		 		  var xml=UI_getdata(PrcsId,UNIQID,Type,"","","LSW_SCLEARCUSDATA");
		 	//	 LoadMultiData("",$("#PrcsID").val(),$("#FELD_CUSID").val(),"ExistingLoan1","FELDDBfields","LSW_sGETEXLONDLT");
		 		 location.reload(true);
		 		}
		 })
	 
	
	 $(document).on("click", ".RTRSub", function(){ 
	 
	    var html=$(this).closest('.DYNROW')
		var Row= $(this).closest('.DYNROW').attr('data-row');
		
		if($(this).text() == "Submit")
		  {
			var MndtryChk = ChkMandatoryFlds_V1("ERTRMndtry",html);

			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
		 }
		 
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];

			//var SIND_SALINCM = TxtGridsubmitdata_V1("Table2","SIDG_","SIND_");
			//AssignGridXmltoField("SIND_SALINCM", SIND_SALINCM) 
			
		var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);

		if (CHKresult == "Fail")
			{
			alert("Submission Failed");
			return false;			
			}
			if($("#FELD_INSINAME"+Row).val()=="")
			{
				$(html).find("[name=FELD_INSINAME]").val($("#ERTR_FINNAME"+Row).val())
				$(html).find("[name=FELD_INSINAME]").next().addClass('active');
			}
			if($("#FELD_LONAMT"+Row).val()=="" || $("#FELD_LONAMT"+Row).val()=="0" )
			{
				$(html).find("[name=FELD_LONAMT]").val($("#ERTR_FINAMT"+Row).val())
				$(html).find("[name=FELD_LONAMT]").next().addClass('active');
			}
			
	   $(".RTRClose").click();
	 })
	 
	 
	 $(document).on("click", ".FormSave", function(){
		
		var html=$(this).closest('.DYNROW')
		
		if($(html).find("[name=FELD_CLOSEDATE]").val() == "" && $(html).find("[name=FELD_LONSTATUS]").val() == "Closed" )
		{ 
			alert("Choose Closed Date")
			return false;
       }
	   
	   var MndtryChk = ChkMandatoryFlds_V1("ERTRMndtry",html);

			if(MndtryChk == "Mandatory")
				{
				alert("Fill Mandatory Fields In RTR Tab");
				return false;
				}
				
				

		if($(this).text() == "Next")
			{
			var MndtryChk = ChkMandatoryFlds_V1("FELDMndtry",html);

			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
				
			}
		if($(html).find("[name=FELD_EXLONNO]").val() == "")
		{
		var CUSID = UI_getdata("EXLON","","Yes","","","Sam_sGetSeqID");
		
		$(html).find("[name=FELD_EXLONNO]").val($(CUSID).find("Val1").text());
	//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
	    }
		
			$(html).find("[name=RTRG_UNIQUEID]").val($(html).find("[name=FELD_EXLONNO]").val());	
		
			
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
				
		var RTRDETAILS = TxtGridsubmitdata_V4("RTRTable","RTRG_","FELD_",html);
		var BALANCEDATA=["ExistingLoan1|"];
		
		
		 for (j=0;j<BALANCEDATA.length;j++)
			 {
			   var BNKDATA=BALANCEDATA[j].split("|")[0];
		       var row = $("." + BNKDATA).find(".DYNROW").length;
		       for (i=0;i<row;i++)
		       {
		         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
		         $(BnkHtml).find('[name = FELD_RTRDETAILS]').val(RTRDETAILS)
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
			alert("Existing Loan Details Saved Successfully")
		}
		
		if($(this).text() == "Next")
		{
			  NXTTAB(this);
		}
		});

});

