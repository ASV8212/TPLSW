
$(document).ready(function() {
	$(".ApplTitle").text('\n DRAW DOWN\n')
	
	var op = UI_getdata($("#LogUsr").val(),$("#VERTICAL").val(),"","","","LSW_SFETCHACTVODLAN");
    $("#DRAW_ACCNTID").find('option').remove();
	$("#DRAW_ACCNTID").material_select("destroy");
	$("#DRAW_ACCNTID").append($(op).find("RESULT").html());
	$("#LPDT_SECURITYTYPE").material_select();
	
	FormDataFromDB("LSW_TDRAWDOWNREQMN","DRAW_","DRAWDBfields", "");
	
	$("#DRAW_DRAWDOWNDT").val($(op).find("BUSINESSDATE").text());
	
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
		$("#DRAW_ACCNTID").material_select("destroy");
		$(".DRAWDBfields").attr("disabled","disabled");
		$("#DRAW_ACCNTID").material_select();
		
	}
	
	$(".FormSave").click(function () {
		
		if($(this).text() != "Save" && $(this).text() != "Reject" && $(this).text() != "Send Back")
		{
			var MndtryChk = ChkMandatoryFlds("DRAWMndtry");
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
		}
		
		var CHKresult=FormDataToDB("LSW_TDRAWDOWNREQMN","DRAW",$("#DRAW_PRCSID").val()+"|"+"|")
			
		if (CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		
		if($(this).text() == "Forward")
		{
			WFComplete_V1 ($("#ActvID").val(),"var_status="+$(this).text(),"","StandAloneDradown");
		}
		if($(this).text() == "Send Back")
		{
			WFComplete_V1 ($("#ActvID").val(),"var_status=SendBack","","StandAloneDradown");
		}
		if($(this).text() == "Approve")
		{
			
			
		var xml = "<AccountId>"+$("#DRAW_ACCNTID").val()+"</AccountId><DrawDownAmt>"+$("#DRAW_DRAWDOWNAMT").val()+"</DrawDownAmt><DrawDownDate>"+$("#DRAW_DRAWDOWNDT").val()
		+"</DrawDownDate><PayeeName>"+$("#DRAW_PAYEENAME").val()+"</PayeeName><PayeeAcctNo>"+$("#DRAW_PAYEEACCTNO").val()
		+"</PayeeAcctNo><IFSCCode>"+$("#DRAW_IFSCCODE").val()+"</IFSCCode><BankName>"+$("#DRAW_BANKNAME").val()+"</BankName><BranchName>"+$("#DRAW_BRANCHNAME").val()+"</BranchName>"
		$(".loader2").show();
		$.ajax({
	    url:"/TPLSW/DrawDownHandlr",
	    type:'POST',
	    data:{spname:"LSW_SDRAWDOWNCREATE",inputdata:xml,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	    async:true,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	    success: function(stm){
			if(stm.split("!@#")[0] == "Success")
			{
				var obj = JSON.parse(stm.split("!@#")[1])
				if(obj.Status == "Success")
				{
					alert(obj.Result);
					WFComplete_V1 ($("#ActvID").val(),"var_status=Approve","","StandAloneDradown");
				}
				else
				{
					alert(obj.Result);
					$(".loader2").hide();
				}
			}
			else if(stm.split("!@#")[0] != "Success")
			{
				alert(stm.split("!@#")[1]);
				$(".loader2").hide();
				return;
			}
			},
	error: function(stm) {
		 //window.alert(LoadFrmXML("V0125"))
		alert("Error Occured. Contant IT!!!");
		$(".loader2").hide();
		   }
	});
	
		}
		if($(this).text() == "Reject")
		{
			WFComplete_V1 ($("#ActvID").val(),"var_status="+$(this).text(),"","StandAloneDradown");
		}
	});
});