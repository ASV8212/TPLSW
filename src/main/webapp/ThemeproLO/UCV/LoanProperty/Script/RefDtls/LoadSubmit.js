$(document).ready(function () {
	
	
	$($('.AFormaccordion')[0]).click();

	var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHECKSECURITY");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=='Y')	
	{
		$("#FormPageTab2").show()
	}
	else
	{
		$("#FormPageTab2").hide()
	}	
	
	//if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		//{
	//$("#LPDT_PROPERTYNO").val($(".FormPageMultiTab li.active").attr("id"))
	//	}
	//$(".LPDT_PROPERTYNO").text($("#LPDT_PROPERTYNO").val());
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#LRDT_REFID").val($(".FormPageMultiTab li.active").attr("id"))
		}
	//GetRelationship();
	GetRelationType();
	
	FormDataFromDB("LSW_TLONREFDTLS","LRDT_","LRDTDBfields", $("#LRDT_REFID").val()+"|LRDT_REFID");
	
	var propertyname=$(".FormPageMultiTab li.active a div").text()	
if(propertyname=="Reference 1")
{
	$('.DELBTNTXT').hide()
}

	//FormDataFromDB("LSW_TLONREFDTLS","LRDT_","LRDTDBfields");
	//CheckLoanType('LRDT');
/*	$('.AFormaccordion').on('click', function() {
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		var tbl = $(this).attr("data-aria").split("|")[0];	
		var prfx = $(this).attr("data-aria").split("|")[1];
		if($(this).attr("aria-expanded") == "false")
			{
		FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", "");
			}
			
	});*/
	
	
	 if($("#VERTICAL").val()=="MSME")
		{
			$(".MSMEDETAILS").show();
					 
		}
	
	$('.FormSave').on('click', function() {
		
		if($(this).text() == "Save & Next")
		{

		var MndtryChk = ChkMandatoryFlds("LRDTMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
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
		if($("#LRDT_REFID").val() == "")
		{
		var REFID = UI_getdata("REFDETAILS","","Yes","","","Sam_sGetSeqID");
		
		$("#LRDT_REFID").val($(REFID).find("Val1").text());
		
	    }
		$("#LRDT_REFNAME").val($(".FormPageMultiTab li.active a div").text())
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
		
		$(".FormPageMultiTab li.active").attr("id",$("#LRDT_REFID").val());
		$(".FormPageMultiTab li.active").attr("title",$("#LRDT_REFID").val());
		$(".FormPageMultiTab li.active a div").text($("#LRDT_REFNAME").val());
		// Tab Header Change End
		
		if($(this).text() == "Save & Next")
		{
			 var REFID = UI_getdata($("#PrcsID").val(),"","","","","LSW_SREFERENCEDETAILS");
			 var ref=$(REFID).find("RESULT").text();
			 if(ref!='SUCCESS')
			 {
				 alert (ref);
				 return false;
			 }
			  NXTTAB(this);
		}
		
	});
	
	
	
	
});

