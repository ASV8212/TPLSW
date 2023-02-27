$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

    
    FormDataFromDB("LSW_TCHRGHDR", "APCH_", "APCHDBfields", "");
    
    /**Grid Trigger Start **/
    $("#BTNCHRGDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/

   RECOMMENDHIDE()
    var activityname = GetActivityName();
    if(activityname == "Waiver"){
    	$("#Waiver").show();
    }

    $(document).on("click", ".FormSave", function() {
    	
    	
    	

        var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

        if ($(this).text() == "Save & Next") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields / Document(s)");
                return false;
            }
        }
        if ($(this).text() == "Submit") {
        	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKCHRGMNDTRY")
        	if($(xml).find("RESULT").text()=="FAIL")
        		{
        		alert("File can't be submitted, due to incomplete Charge Details");
        		return
        		}
        	
        }
        // Customer Seq ID Gen Start		
        /*if ($(html).find("[name=BKDT_BNKNO]").val() == "") {
            var CUSID = UI_getdata("BNK", "", "Yes", "", "", "Sam_sGetSeqID");
            $(html).find("[name=BKDT_BNKNO]").val($(CUSID).find("Val1").text());
        }*/
        // Customer Seq ID Gen End 

        /*$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())*/

        var CHRGGRD = TxtGridsubmitdata_V1("Table2","APCD_","APCH_");
		AssignGridXmltoField("APCH_CHRGGRD", CHRGGRD)
       var CHKresult= FormDataToDB(tbl, prfx, ''); 
		 if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
        // Tab Header Change End		
		
        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
        
        if($(this).text() == "Approve"){
        	WFComplete ($("#ActvID").val(),"var_Wstatus="+$(this).text(),"");
        	
        	var WFACTVINIT1 = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|BranchOPS|Vendor||ADMIN","LSW_SWFACTVINITCALL");
	        
	        if (WFACTVINIT1 == "Success")
	    	{
	    	alert("File Assigned");
	    	}
        }
        if($(this).text() == "Submit"){
        	/*var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),"WAIVER","","","","LSW_SONSUBMTWFDTLINS");
        	var pattern = /var_/;
			var exists = pattern.test($(op).find("WFVAR").text());
			if(exists) {
			   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
			}
			else{
				alert($(op).find("WFVAR").text());
			}*/
			var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),$("#DMY6").val()+"|Submit|WAIVER",$("#DMY3").val().split('|')[3],"","","LSW_SPCKAPPRWFVARONSBMT ");
			var pattern = /var_/;
			var exists = pattern.test($(op).find("WFVAR").text());
			if(exists) {
			   pattern = /Approve/;
			   exists = pattern.test($(op).find("WFVAR").text());
			   if(exists) {
				   UI_getdata("",$("#PrcsID").val(),"",$("#LogUsr").val(),"","LSW_SROIAMENDMNT");
				   var ACTVTY="";
					var OverAllStatus="";
					var WFACTVINIT = "";
				   var ACTVTY=["PDD","OTC","OPSQD"]
				   
				   for(var j=0;j<ACTVTY.length;j++)
					{
					var CurntACTVTY=ACTVTY[j];
					WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
					var ChkFlowInit = UI_getdata($("#PrcsID").val(),CurntACTVTY,"","","","LSW_SCHKACTVITYASSIGNPROP");
					if($(ChkFlowInit).find("RESULT").text() != "SUCCESS")
					{
						alert($(ChkFlowInit).find("RESULT").text());
						return;
					}
					ChkFlowInit="";
					if(OverAllStatus != "" && WFACTVINIT != "Success")
						{
						OverAllStatus="Fail";
						}
					}
			        
			        if(OverAllStatus == "Fail")
					{
					alert("File Assignment Failed");
					return;
					}
			   }
			   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
			}
			else{
				alert($(op).find("WFVAR").text());
			}
        }
        else if($(this).text() == "Send Back"){
			var xyz = confirm("Are you sure to send back to Waiver")
        	if(xyz==true){
				var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SUPDPACTENUR")
        	WFComplete($("#ActvID").val(),encodeURI("var_Wstatus=Waiver Send Back"),"")
			}
        }
    });
    
    $(".APCDSTATUS").on('click', function() {
    	var Val = "";
    	if(this.text=="Reject")
    		{
    		Val="Rejected"
    		}
    	else if(this.text=="Approve")
    		{
    		Val="Approved"
    		
    		}
    	$(this).closest('span').find('input').val(Val);
    	$(this).closest('span').find('div').hide()
    	$(this).closest('span').find('input').show();
    	var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS")
    	$(this).closest('td').next().find('input[type=text]').val($(op).find("DT").text())
		$(this).closest('td').next().next().next().next().next().next().text($("#DMY10").val().split('|')[1]);

    });


});