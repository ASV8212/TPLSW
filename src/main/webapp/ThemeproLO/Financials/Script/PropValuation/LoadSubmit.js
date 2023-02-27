$(document).ready(function () {
	
		var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKVIABILITYTAB");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=='Y')	
	{
		$("#FormPageTab9").remove()
	}

	
	//FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	FormDataFromDB("LSW_TPROVALVERIF","PVER_", "PVERDBfields", "")
	$("#PRAP_PRCSID").val($("#PrcsID").val())
	
	var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSECRITYPROP");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=="Y")
	{
	  $(".PropValu").show();
	}
	else
	{
	   $(".PropValu").hide();
	   
	   $("#collapseTwo2").addClass("show");
	   $("#headingTwo2").addClass("active");
	   $("#headingTwo2").find('a').addClass("collapsed");
	   $("#headingTwo2").find('a').addClass("Btxt8");
	   $("#headingTwo2").find('a').removeClass("Btxt7");
	   $("#headingTwo2").find('a').find('i').removeClass('fa-plus-circle');
	   $("#headingTwo2").find('a').find('i').addClass('fa-minus-circle');  
	}
	
	LoadMultiData("",$("#PrcsID").val(),"","PROPEAPPRI","PAPDDBfields","LSW_SPROPEAPPRISAL");

	//getRadioVal();	
	//LoadMultiData("",$("#PrcsID").val(),"","APPVERIFICATION","PRVEDBfields","LSW_SGETAPPVERFI");
	
	//LoadMultiData("",$("#PrcsID").val(),"","COAPPVERIFICATION","PVCODBfields","LSW_SGETCOAPPVERFI");
	
    $("#BTNRCUGRD").click();
	$(document).on("click", ".FormSave", function(){
		
    
		if($(this).text() == "Save & Next")
		{	
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		}
		
       var FormName=$(this).attr("data-form")
		
		if(FormName=="PROPERTYAPPRASIAL")
			{
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		var TECHNICAL = TxtGridsubmitdata_V2("PROPEAPPRI","PAPD_","PRAP_","PAPDDBfields"); 
        AssignGridXmltoField("PRAP_PROPDETAILS", TECHNICAL);
		
		FormDataToDB(tbl,prfx,$("#PRAP_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
            }
		else
		   {
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
            var PVER_CHECKSTATUS = TxtGridsubmitdata_V1("Table2","PVCS_","PVER_");
			   AssignGridXmltoField("PVER_CHECKSTATUS", PVER_CHECKSTATUS)
		     FormDataToDB(tbl,prfx,$("#PVER_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		   }
	
		if($(this).text() == "Save & Next")
		{
			  NXTTAB(this);
		}
	});	
});

