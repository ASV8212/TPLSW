var OthrIncmDropDwn="";
//Credit Changes Strt
var ViewRInavtivePGFlg = "";
if(($("#DMY5").val().split("|")[1]=="Yes")||$("#PrMs1").val()=="View")
		{
		  ViewRInavtivePGFlg = "View";
		}
//Credit Changes END
$(document).ready(function () {
	$("#TGST_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#TGST_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	   $("#TGST_PRCSID").attr("value", $("#PrcsID").val());
$(".FormPageMultiTabAdd").hide();
	
	
	var xml1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETINDUSCATRGORY");

	$("#HiddenINDUSCATRGORY").val(xml1);
	
	var Industry=UI_getdata("","","","","","LSW_SGETINDUSDD")
	$("#EGCD_INDUSTRY").html("");
	$("#EGCD_INDUSTRY").append($(Industry).find('INDUSTRY').html());
	
	var LoadSchemeOptn = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHEMEPRDWS");
	$("#SCHEME").append($(LoadSchemeOptn).find("RESULT").html());
	

	

	//var DATA = $("#TGST_SCHEMEID").val()+"|TGST_SCHEMEID"

	
	FormDataFromDB("LSW_TTURNOVERGST", "TGST_", "TGSTDBfields", "TGST_SCHEMEID");
    
	 
$("#TGST_PRCSID").val($("#PrcsID").val())
$("#TGST_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
$("#TGST_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());

	
	$("#BTNTRNOVERIIGRD").click();

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
		 
		var TURNGST = TxtGridsubmitdata_V1("Table5","TOII_","TGST_");
		AssignGridXmltoField("TGST_TURNGST", TURNGST)

    var CHKresult=FormDataToDB(tbl,prfx,$("#TGST_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
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


