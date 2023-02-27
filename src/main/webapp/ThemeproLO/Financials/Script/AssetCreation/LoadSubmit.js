$(document).ready(function () {
	
	
	$("#ASST_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#ASST_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
	
	FormDataFromDB("LSW_TASSETCREATION","ASST_","ASSTDBfields", "ASST_SCHEMEID");
	   $("#ASST_PRCSID").val($("#PrcsID").val())
	
	$("#ASST_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#ASST_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	var PRODUCTXML=UI_getdata($("#PrcsID").val(),$("#ASST_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#ASST_PRODUCT").val(($(PRODUCTXML).find('PRODUCT').text()));
	GetTyProperty();
		var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETACCESSCREADATA")
    	$("#ASST_NAMEENTITY").val($(xmlSTATUS).find('NAME').text())
		$("#ASST_MONTHYEAR").val($(xmlSTATUS).find('INCORDATE').text())
		$("#ASST_INTERATE").val($(xmlSTATUS).find('INTER').text())
		$("#ASST_PROPOSEDTENU").val($(xmlSTATUS).find('TENURE').text())

		$(document).on("click", ".FormSave", function(){	
	
			
			var html=$(this).closest('.DYNROW')
		
		if($(this).text() == "Save & Next")
			{
			  var MndtryChk = ChkMandatoryFlds("LODEMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
			}
		
		
		var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
         if($(OP).find("LOANID").text()!="")
		{			
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}
		  
		  
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#ASST_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			

			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			  return false;			
			}
	$(".ELIGHSCHEME").html('');
   LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
	EnableFnlElgFld();		

			if($(this).text() == "Save & Next")
			{
				  NXTTAB(this);
			}
			
		});
		
	
		
	
	
});
