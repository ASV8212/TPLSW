var OthrIncmDropDwn="";
//Credit Changes Strt
var ViewRInavtivePGFlg = "";
if(($("#DMY5").val().split("|")[1]=="Yes")||$("#PrMs1").val()=="View")
		{
		  ViewRInavtivePGFlg = "View";
		}
//Credit Changes END
$(document).ready(function () {
	$("#AEPM_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#AEPM_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	   $("#AEPM_PRCSID").attr("value", $("#PrcsID").val());
$(".FormPageMultiTabAdd").hide();
	
	
	var xml1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETINDUSCATRGORY");

	$("#HiddenINDUSCATRGORY").val(xml1);
	
	var Industry=UI_getdata("","","","","","LSW_SGETINDUSDD")
	$("#EGCD_INDUSTRY").html("");
	$("#EGCD_INDUSTRY").append($(Industry).find('INDUSTRY').html());
	
	var LoadSchemeOptn = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHEMEPRDWS");
	$("#SCHEME").append($(LoadSchemeOptn).find("RESULT").html());
	

	

	//var DATA = $("#AEPM_SCHEMEID").val()+"|AEPM_SCHEMEID"

	
	FormDataFromDB("LSW_TACTUALPURMETHOD", "AEPM_", "AEPMDBfields", "AEPM_SCHEMEID");
    
	 
$("#AEPM_PRCSID").val($("#PrcsID").val())
$("#AEPM_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
$("#AEPM_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());

	
	$("#BTNELIGCALCIGRD").click();
 $(document).on("click", ".FormSave" , function() {
	//$('.FormSave').on('click', function() {
		
		
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
	var ACTUALMETHOD = TxtGridsubmitdata_V1("Table7","EGCI_","AEPM_");
	AssignGridXmltoField("AEPM_ACTUALMETHOD", ACTUALMETHOD)


    var CHKresult=FormDataToDB(tbl,prfx,$("#AEPM_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
			else
			{
				alert("Form saved Successfullly");
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


