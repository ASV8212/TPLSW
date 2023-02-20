var OthrIncmDropDwn="";
//Credit Changes Strt
var ViewRInavtivePGFlg = "";
if(($("#DMY5").val().split("|")[1]=="Yes")||$("#PrMs1").val()=="View")
		{
		  ViewRInavtivePGFlg = "View";
		}
//Credit Changes END
$(document).ready(function () {
	$("#TOMF_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#TOMF_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());
	   $("#TOMF_PRCSID").attr("value", $("#PrcsID").val());
$(".FormPageMultiTabAdd").hide();
	
	
	var xml1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETINDUSCATRGORY");

	$("#HiddenINDUSCATRGORY").val(xml1);
	
	var Industry=UI_getdata("","","","","","LSW_SGETINDUSDD")
	$("#EGCD_INDUSTRY").html("");
	$("#EGCD_INDUSTRY").append($(Industry).find('INDUSTRY').html());
	
	var LoadSchemeOptn = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHEMEPRDWS");
	$("#SCHEME").append($(LoadSchemeOptn).find("RESULT").html());
	

	

	//var DATA = $("#TOMF_SCHEMEID").val()+"|TOMF_SCHEMEID"

	
	FormDataFromDB("LSW_TTURNOVERFIN", "TOMF_", "TOMFDBfields", "TOMF_SCHEMEID");
    
	 
$("#TOMF_PRCSID").val($("#PrcsID").val())
$("#TOMF_SCHEMEID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
$("#TOMF_SCHEMENAME").attr("value",$(".FormPageMultiTab li.active").text());

	
	$("#BTNTRNOVERIGRD").click();

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
		  

				  var TURNOVERFIN = TxtGridsubmitdata_V1("Table4","TOMI_","TOMF_");
				    AssignGridXmltoField("TOMF_TURNOVERFIN", TURNOVERFIN)

    var CHKresult=FormDataToDB(tbl,prfx,$("#TOMF_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
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


