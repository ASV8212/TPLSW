

$(document).ready(function () {
	
	
	
	
	
	
	
	$("#FIMA_CUSID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#FIMA_CUSNAME").val($(".FormPageMultiTab li.active a div").text())
	
	
	//if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		
	//$("#PFDT_PFNO").val($(".FormPageMultiTab li.active").attr("id"))
		
	//$("#PFDT_PFNO").text($(".PFDT_PFNO").val());
	// GetCustName();
	//("LSW_TLONPFDTLS","PFDT_","PFDTDBfields", $("#PFDT_PFNO").val()+"|PFDT_PFNO");
	//$('#OnlineModal').hide();
	//$('#CheckModal').hide();
		var tbl = "LSW_TFINANCEMAIN"
	var prfx ="FIMA"
	var DATA ="FIMA_CUSID" 
	
		
/* 		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2]; */

	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	
	
	var xml=UI_getdata("","","","","","LSW_SGetLstYrFnc")
	var CusName=$(xml).find('RESULT').html();	
	$("#FIMA_YEAR").append(CusName)
	$("#APDG_YEAR").append(CusName)
	
	
		
    // GrdLoadOnYrChng(); 

 $("#APDG_PRCSID").attr("value", $("#PrcsID").val());
FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
if($("#FIMA_FINYEAR").val() != "")
	{
    LoadMultiData("",$("#PrcsID").val(),"","BankDetail1","APDGDBfields","LSW_SGETFINCATTACH");
	$(".BankDetail1").find("button").hide();
	var DATA=["BankDetail1|"];
	 for (j=0;j<DATA.length;j++)
		 {
			 var ValuationID=DATA[j].split("|")[0];
			 var row = $("." + ValuationID).find(".DYNROW").length;
			 for (i=0;i<row;i++)
			 {
				var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
				if($(HTML).closest(".DYNROW").find("[name=APDG_PDATTACHMNT]").val() != "")
				{
					if($(HTML).closest(".DYNROW").find("[name=APDG_UPLDFL]").val() != "Added")
					{
						$(HTML).closest(".DYNROW").find("[id=AddFSA]").show();
					}
				}
				//$(HTML).closest(".DYNROW").find("[id=AddFSA]").attr("disabled","disabled");
			 }
		 }
	}
	if($("#FIMA_TRANSACTIONREC").val() != "")
	{
		$("#InitiateFSA").hide();
		$("#CompleteFSA").show();
		$("#FIMA_FINYEAR").attr("disabled","disabled");
		$("#FIMA_FINYEAR").material_select("destroy");
		$("#FIMA_FINYEAR").material_select();
		
	}
	if($("#FIMA_COMPLTFLG").val() == "Completed")
	{
		$("#CompleteFSA").hide();
	}
	
		//
		$("#BTNFINANACESHEET").click();

	ChkITR();
		
		
		 
		$('.FormSave').on('click', function() {
		

		if($(this).text() == "Save & Next")
			{

			var MndtryChk = ChkMandatoryFlds("FIMAMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
			}
		
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
			var FIMA_XMLMAIN = TxtGridsubmitdata_V1("Table4","FINT_","FIMA_");
		    AssignGridXmltoField("FIMA_XMLMAIN", FIMA_XMLMAIN)
			
		 var FIMA_ATTACHGRID = TxtGridsubmitdata_V2("BankDetail1","APDG_","FIMA_","APDGDBfields");
		AssignGridXmltoField("FIMA_ATTACHGRID", FIMA_ATTACHGRID)
		 
	         
			var CHKresult=FormDataToDB(tbl,prfx,$("#FIMA_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
	         if(CHKresult == "Fail")
		   		{
		   		  alert("Submission Failed");
		   		   return false;			
		   		}
	         //	FormDataToDB(tbl,prfx,$("#LEVD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			 //$(".FormPageMultiTab li.active").attr("id",$("#RACD_UNIQID").val());
		 	// $(".FormPageMultiTab li.active").attr("title",$("#RACD_UNIQID").val());
			 
			 	
			
		 
		
		 
			if($(this).text() == "Save & Next" && $(this).attr('next-form').split("|")[0]=="TAB" )
			{
				  
				  NXTTABA(this,'TAB');
			}
			else if($(this).text() == "Save & Next" && $(this).attr('next-form').split("|")[0]=="" )
			{
				NXTTAB(this);
			}
		})
		
		});
			