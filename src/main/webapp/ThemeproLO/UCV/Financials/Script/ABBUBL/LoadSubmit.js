$(document).ready(function() {

	$("#ABBL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#ABBL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
    $("#ABBL_PRCSID").attr("value", $("#PrcsID").val());
	 
	 
	
    FormDataFromDB("LSW_TABBUBLSCREEN", "ABBL_", "ABBLDBfields", "");
      //Product();
	 //EMIAMOUNT();
    //$(".FormPageMultiTabAdd").hide();
	
	
    $(document).on("click", ".FormSave", function(){
          var ViewRInavtivePGFlg = "";
       if(($("#DMY5").val().split("|")[1]=="Yes")||$("#PrMs1").val()=="View")
		 {
		  ViewRInavtivePGFlg = "View";
		}
       
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

        if ($(this).text() == "Save & Next") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") 
            {
                alert("Fill the Mandatory Fields / Document(s)");
                return false;
            }
    
        }
        
UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")

		var CHKresult=FormDataToDB(tbl, prfx, '');
		if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
			else{
				alert("Form saved Successfullly");
			}

   //LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 

        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});