var FetchLoanDtl = "";
var obj = "";
$(document).ready(function() {
	$(".ApplTitle").text('\n Migrated Term Loan\n')
	
	 FetchLoanDtl = UI_getdata($("#LogUsr").val(),$("#VERTICAL").val(),"","","","LSW_SMIGTLDISB");
	 obj = JSON.parse($(FetchLoanDtl).find("Result").text());
	 $("#TLTR_ACCNTID").find('option').remove();
	$("#TLTR_ACCNTID").material_select("destroy");
	var optn = "";
	 for(var i = 0;i<obj.MIGTRANCH.length;i++)
	 {
		 optn = optn+"<option>"+obj.MIGTRANCH[i].AccountID+"</option>"
	 }
	 
    
	$("#TLTR_ACCNTID").append(optn);
	
	
	FormDataFromDB("LSW_TLPUSHTOLMS","TLTR_","TLTRDBfields", "");
	
	
	
	if($("#DMY5").val().split("|")[2] == "MakerInit" || $("#DMY5").val().split("|")[2] == "Maker")
	{
		$("#Save").show();
		$("#Forward").show();
	}
	if($("#DMY5").val().split("|")[2] == "Checker")
	{
		$("#SendBack").show();
		$("#Approve").show();
		$("#Reject").show();
		$("#TLTR_ACCNTID").material_select("destroy");
		$(".TLTRDBfields").attr("disabled","disabled");
		$("#TLTR_ACCNTID").material_select();
		
	}
	
	$(".FormSave").click(function () {
		
		if($(this).text() != "Save" && $(this).text() != "Reject" && $(this).text() != "Send Back")
		{
			var MndtryChk = ChkMandatoryFlds("TLTRMndtry");
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
		}
		
		var CHKresult=FormDataToDB("LSW_TLPUSHTOLMS","TLTR",$("#TLTR_PRCSID").val()+"|"+"|")
			
		if (CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		
		if($(this).text() == "Forward")
		{
			WFComplete_V1 ($("#ActvID").val(),"var_status="+$(this).text(),"","MIGTL");
		}
		if($(this).text() == "Send Back")
		{
			WFComplete_V1 ($("#ActvID").val(),"var_status=SendBack","","MIGTL");
		}
		if($(this).text() == "Approve")
		{
			var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SPUSHTLTRANCHE_MIG");
			if($(op).find("RESULT").text() == "SUCCESS")
			{
				WFComplete_V1 ($("#ActvID").val(),"var_status=Approve","","MIGTL");
			}
			else
			{
				alert($(op).find("RESULT").text());
				return
			}
		}
		if($(this).text() == "Reject")
		{
			WFComplete_V1 ($("#ActvID").val(),"var_status="+$(this).text(),"","MIGTL");
		}
	});
});