$(document).ready(function () {
	
	
	$($('.AFormaccordion')[0]).click();
	
	
	
	//if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		//{
	//$("#LPDT_PROPERTYNO").val($(".FormPageMultiTab li.active").attr("id"))
	//	}
	//$(".LPDT_PROPERTYNO").text($("#LPDT_PROPERTYNO").val());
	
	FormDataFromDB("LSW_TLONREFDTLS","LRDT_","LRDTDBfields");
	CheckLoanType('LRDT');
/*	$('.AFormaccordion').on('click', function() {
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		var tbl = $(this).attr("data-aria").split("|")[0];	
		var prfx = $(this).attr("data-aria").split("|")[1];
		if($(this).attr("aria-expanded") == "false")
			{
		FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", "");
			}
			
	});*/
	
	
	$('.FormSave').on('click', function() {
		
		if($(this).text() == "Save & Next")
		{

		var MndtryChk = ChkMandatoryFlds("LRDTMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		}
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		// Customer Seq ID Gen Start		
	
		//if($("#LPDT_PROPERTYNO").val() == "")
		//{
		//var CUSID = UI_getdata("PRP","","Yes","","","Sam_sGetSeqID");
		
		//$("#LPDT_PROPERTYNO").val($(CUSID).find("Val1").text());
		
	   // }
		// Customer Seq ID Gen End 
		
		//$("#LPDT_PROPERTYNAME").val($(".FormPageMultiTab li.active a div").text())
		
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		var CHKresult=FormDataToDB(tbl,prfx,$("#LRDT_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
		
		if (CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		// Tab Header Change Start
		
		//$(".FormPageMultiTab li.active").attr("id",$("#LPDT_PROPERTYNO").val());
		//$(".FormPageMultiTab li.active").attr("title",$("#LPDT_PROPERTYNO").val());
		//$(".FormPageMultiTab li.active a div").text($("#LPDT_PROPERTYNAME").val());
		
		// Tab Header Change End
		
		if($(this).text() == "Save & Next")
		{
			  NXTTAB(this);
		}
		
	});
	
	
	
	
});

