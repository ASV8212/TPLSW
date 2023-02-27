$(document).ready(function () {
	
	
	//GETDROPDOWNVAL("Load");
	
	//SrcByDisble();
	
	FormDataFromDB("LSW_TDEDUBEDETAILS","DEDE_","DEDEDBfields", "");
	

	LoadMultiData("",$("#PrcsID").val(),"","APPDE","APDUDBfields","LSW_SGETDEDUPE");	
	
   
   var op = UI_getdata($("#LogUsr").val(),"","","","","LSW_SGETUSRGRP1")
	 if($(op).find("groupId").text()=="BSM")
		 {
		 $(".DEGRDBfields").addClass('DSVLBL')
       }
   
   
   var DATA=["APPDE|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	//CheckDedupe (HTML,"");
	 }
	}
   
   
	$('.FormSave').on('click', function() {
		

		if($(this).text() == "Save & Next")
			{

			var MndtryChk = ChkMandatoryFlds("LODEMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
			}
		
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		var DEDE_APPDETAILS = TxtGridsubmitdata_V2("APPDE","APDU_","DEDE_","APDUDBfields"); 
        AssignGridXmltoField("DEDE_APPDETAILS", DEDE_APPDETAILS)
        
            var DEDE_APPGRIDETAILS = TxtGridsubmitdata_V3("APPLGRIDTable","DEGR_","DEDE_");
		       AssignGridXmltoField("DEDE_APPGRIDETAILS", DEDE_APPGRIDETAILS);    
        
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#DEDE_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			
			if(CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}

			if($(this).text() == "Save & Next")
			{
				  NXTTAB(this);
			}
			
		});
		
	
	
	
});
