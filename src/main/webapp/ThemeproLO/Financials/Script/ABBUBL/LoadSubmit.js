$(document).ready(function() {

	$("#ABBL_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#ABBL_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	
    $("#ABBL_PRCSID").attr("value", $("#PrcsID").val());
	 
	 
	
    FormDataFromDB("LSW_TABBUBLSCREEN", "ABBL_", "ABBLDBfields", "ABBL_SCHEMEID");
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
                alert("Fill the Mandatory Fields");
                return false;
            }
    
        }
        
var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
          
		if($(OP).find("LOANID").text()!="")
		{			
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}
		  
		var CHKresult=FormDataToDB(tbl, prfx, $("#ABBL_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
			else{
				alert("Form saved Successfullly");
			}
$(".ELIGHSCHEME").html('');
   LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 

EnableFnlElgFld();
   //LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 

        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


});