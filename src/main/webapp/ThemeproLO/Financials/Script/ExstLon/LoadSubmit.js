$(document).ready(function () {
	
	$("#FELD_PRCSID").attr("value",$("#PrcsID").val());
	$("#FELD_CUSID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#FELD_CUSNAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	
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
	
		var op = UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SGETBNKACCNTNO");
	var AcctNo=$(op).find('RESULT').html();
	$("#FELD_EMIBNKACCT").append(AcctNo)
	
	var xml=UI_getdata("","","","","","LSW_SGETFIANCIYEARS")
	$("#FELD_LSTMONYRBOUNCED").append($(xml).find("Years").html());
	
	LoadMultiData("",$("#PrcsID").val(),$("#FELD_CUSID").val(),"ExistingLoan1","FELDDBfields","LSW_sGETEXLONDLT");
	
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
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
	 
	 
	 $(document).on("click", ".FormSave", function(){
		
		var html=$(this).closest('.DYNROW')
		
		
		
		if($(html).find("[name=FELD_CLOSEDATE]").val() == "" && $(html).find("[name=FELD_LONSTATUS]").val() == "Closed" )
		{ 
			alert("Choose Closed Date")
			return false;
       }
	   
	   
		
		if($(this).text() == "Next")
			{
			var MndtryChk = ChkMandatoryFlds_V1("FELDMndtry",html);

			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
			}
		if($(html).find("[name=FELD_EXLONNO]").val() == "")
		{
		var CUSID = UI_getdata("EXLON","","Yes","","","Sam_sGetSeqID");
		
		$(html).find("[name=FELD_EXLONNO]").val($(CUSID).find("Val1").text());
	//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
	    }
			
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];

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

