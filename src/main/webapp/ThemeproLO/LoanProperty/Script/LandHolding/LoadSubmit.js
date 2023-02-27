var MndtryFlg = ""
$(document).ready(function () {
	
	
	
	
	
	
	$("#LDHL_PRCSID").attr("value",$("#PrcsID").val());
	
	
	var tbl = $("#heading1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#heading1 a").attr("data-aria").split("|")[1];
	var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
	
	     //LoadMultiData("",$("#PrcsID").val(),$("#BKDT_CUSID").val(),"BankDetail1","BKDTDBfields","LSW_sGETBANKDLT");
		 LoadMultiData_V2("",$("#PrcsID").val(),"","LANDHOLDING","LDHLDBfields","LSW_SLANDHOLDDTL");
	  
	  
	 
	 $(document).on("click", ".DELETEBNKDET" , function() {

		 	var PrcsId=$(this).attr("data-tab").split("|")[0];
		 //	var CusID=$(this).attr("data-tab").split("|")[1];
		 	var Type=$(this).attr("data-tab").split("|")[2];
		 	PrcsId=$("#"+PrcsId).val();
			 var html=$(this).closest('.DYNROW')
		     var UNIQID=$(html).find("[name=LDHL_LNDUNIQNO]").val() 
		
		 	 if(confirm('Delete Land Holding Details') == true)
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
		
		var MndtryChk = ChkMandatoryFlds_V1("LDHLMndtry",html);
		
		if(MndtryChk == "Mandatory")
			{
				MndtryFlg="Mandatory";
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		
		
		
		
		}
	
		
	
		if($(html).find("[name=LDHL_LNDUNIQNO]").val() == "")
		{
		var LNDNO = UI_getdata("Land Holding",$("#PrcsID").val(),"Yes","","","Sam_sGetSeqID");
		
		$(html).find("[name=LDHL_LNDUNIQNO]").val($(LNDNO).find("Val1").text());
		$(html).find("[name=LIMA_UNIQID]").val($(LNDNO).find("Val1").text());
	
	    }
		
				
				var tbl = $(this).attr("data-aria").split("|")[0];
				var prfx = $(this).attr("data-aria").split("|")[1];
				var DATA = $(this).attr("data-aria").split("|")[2];
	
				
				var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);
				
				
				if (CHKresult == "Fail")
					{
						MndtryFlg="Mandatory";
					alert("Submission Failed");
					return false;			
					}
				else
				{
					alert("Land Holding Details Saved Successfully")
				}

		
			
		if($(this).text() == "Save & Next")
		{
			  NXTTAB(this);
		}
		
	});
	
	 
	
	
	
});

