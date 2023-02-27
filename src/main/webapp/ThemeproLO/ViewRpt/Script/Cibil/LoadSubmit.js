$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
	
	var LoanType = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETCIBILCUSNAME");
	$("#FIEG_CUSID").html("")
	$("#FIEG_CUSID").append($(LoanType).find("RESULT").html());
	
	if($("#DMY7").val().split('|')[0]=="BT")
	{
	   $(".BTSP").show();
	   $(".BTM").addClass('RCBPMndtry');
	}
	else
	{
	   $(".BTSP").hide();
	   $(".BTM").removeClass('RCBPMndtry');
	}
	
	$(".CIBIL").click(function () {	
	//$("#FIEG_CUSID").empty();
	  $("#FIEG_DATEOFINIT").val('');	
	  $("#FIEG_CUSID").val('');			
	  $("#FIEG_CUSID").material_select();
	  $(".CCLR").val('');	  
	  $("#FIEG_DATEOFINIT").next().removeClass('active')
	  $("#FIEG_CIBILSCOREI").next().removeClass('active')
	  $("#FIEG_CIBILSCOREII").next().removeClass('active')
	  $(".DDV").hide();
	  $(".DDU").show();
	  $('input[type="file"]').css("display", "block");
	  $(".DDV").next().next().text('Click Here to Upload')
	})
	
  FormDataFromDB("LSW_TRPTCIBILPAGE","RCBP_","RCBPDBfields", "");
     $("#CBLViewRpt").trigger('click')
	
     DisbCusName();
     
     
     
     
	$('.FormSave').on('click', function() {

		if($(this).text() == "Done")
		{
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds("CIBILMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		
		InsCIBILData();
	   // FormDataToDB(tbl,prfx,$("#RCBP_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		}
		
		/*if($(this).text() == "Next")
		{
		var MndtryChk = ChkMandatoryFlds("RCBPMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		}
		*/
		//var CIBILGRD = TxtGridsubmitdata_V1("CBRTable","FIEG_","RCBP_");
	 //AssignGridXmltoField("RCBP_CIBILGRD", CIBILGRD)
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		var CHKresult=FormDataToDB(tbl,prfx,$("#RCBP_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		
		if($(this).text() == "Done")
		{
		  $("#CBLViewRpt").trigger('click')	
		  $("#CIBILLOSE").click();
		}
		if($(this).text() == "Save & Next")
		{
		  NXTTAB(this);
		}
		else if($(this).text() == "Next")
		{
		  NXTTAB(this);
		}
	});
	
});

