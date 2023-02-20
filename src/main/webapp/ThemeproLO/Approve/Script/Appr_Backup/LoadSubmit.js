$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	
    LoadMultiData("",$("#PrcsID").val(),"","BankDetail1","APSGDBfields","LSW_SGETREMRKFRMMSTR");
	
	LoadMultiData("",$("#PrcsID").val(),"","ViewReport","ARVRDBfields","LSW_SAPPRRECMVIEWRPT");
    
    LoadMultiData("",$("#PrcsID").val(),"","Empowerment","ARETDBfields","LSW_SAPPRRECMEMPTYPE");

   RECOMMENDHIDE()
   
   $("#BTNKYCLIST").click();
	var activityname = GetActivityName();
    if(activityname == "RCMDII" ||activityname ==  "RCMDI"){
    	$(".DECDBTN").show();
    }
	else{
		$(".DECDBTN").hide();
	}

 $(document).on("click", "#DocCheckConfirm", function() {
    
    	$("#DocCheckClose").click();
    })

    $(document).on("click", ".FormSave", function() {

       /* var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

        if ($(this).text() == "Save & Next") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields");
                return false;
            }
        }*/
        // Customer Seq ID Gen Start		
        /*if ($(html).find("[name=BKDT_BNKNO]").val() == "") {
            var CUSID = UI_getdata("BNK", "", "Yes", "", "", "Sam_sGetSeqID");
            $(html).find("[name=BKDT_BNKNO]").val($(CUSID).find("Val1").text());
        }*/
        // Customer Seq ID Gen End 

        /*$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())*/

       
        //FormDataToDB(tbl, prfx, '');


        // Tab Header Change End
       /* if ($(this).text() == "Approve") { // Branch OPS Trigger
			   //WFComplete ($("#ActvID").val(),"var_Rstatus="+$(this).text(),"");
			   var ACTVTY="";
				var OverAllStatus="";
				var WFACTVINIT = "";
			   var ACTVTY=["BranchOPS","PDD","OTC"]
			   
		        for(var j=0;j<ACTVTY.length;j++)
				{
				var CurntACTVTY=ACTVTY[j];
				WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
				if(OverAllStatus != "" && WFACTVINIT != "Success")
					{
					OverAllStatus="Fail";
					}
				}
		        
		        if(OverAllStatus == "Fail")
				{
				alert("File Assignment Failed");
				}
			else
				{
				alert("File Assigned");
				}
				//WFACTVINIT1 = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|Sanction|Vendor||ADMIN","LSW_SWFACTVINITCALL");
		        
		        
		        }*/

        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });


    $(document).on("click", "#REEVAL", function() {
    
    	WFREV("163500_87094_HomeEqutity_process_SendToCredit","ADMIN","LSW_SReevaluate");
    	
    });
    
    /*$(document).on("click", ".WFRECMFLOW", function() {
        
    	 if ($(this).text() == "Forward" || $(this).text() == "Recommended") {
    		 
    		 
    		 $("#MobIPopup").click();
             
             
         }
    	
    });*/
    
    
    $(document).on("click", ".WFRECMFLOW", function() {
        
   	 //if ($(this).text() == "Forward" || $(this).text() == "Recommended") {
   		 
   		 $("#ACTIONTAKEN").val($(this).text());
   		 
   		 $("#MobIPopup").click();
		 
		 if ($(this).text() == "Forward" || $(this).text() == "Recommend"){
			 $("#RECMTO").show();
			 $("#RECMTO").closest('.col').show()
		 }
		 else{
			 $("#RECMTO").hide();
			 $("#RECMTO").closest('.col').hide()
		 }
            
            
        //}
   	
   });
    $(document).on("click", "#SB", function() {
    	WFComplete ($("#ActvID").val(),"var_rstatus=SB","");
    });
    $(document).on("click", "#WFCONF", function() {
        
    	
		if($("#ACTIONTAKEN").val()=="Forward" || $("#ACTIONTAKEN").val()=="Recommend"){
			PushDatatoApprTbl();
				var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),$("#DMY6").val()+'|'+$("#ACTIONTAKEN").val()+'|DEVIATIONS|'+$("#RECMTO").val(),$("#DMY3").val().split('|')[9],"","","LSW_SPCKAPPRWFVARONSBMT ");
				var pattern = /var_/;
				var exists = pattern.test($(op).find("WFVAR").text());
				if(exists) {
				   WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
				}
				else{
					alert($(op).find("WFVAR").text());
				}
    	}
		else if($("#ACTIONTAKEN").val()=="Approve"){
			PushDatatoApprTbl1();
      	WFComplete ($("#ActvID").val(),"var_rstatus=Sanction","");
		 /*//WFComplete ($("#ActvID").val(),"var_Rstatus="+$(this).text(),"");
			   var ACTVTY="";
				var OverAllStatus="";
				var WFACTVINIT = "";
			   var ACTVTY=["BranchOPS","PDD","OTC"]
			   
		        for(var j=0;j<ACTVTY.length;j++)
				{
				var CurntACTVTY=ACTVTY[j];
				
				WFACTVINIT = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|"+CurntACTVTY+"|Vendor||ADMIN","LSW_SWFACTVINITCALL");
				if(OverAllStatus != "" && WFACTVINIT != "Success")
					{
					OverAllStatus="Fail";
					}
				}
		        
		        if(OverAllStatus == "Fail")
				{
				alert("File Assignment Failed");
				}
			else
				{
				alert("File Assigned");
				}*/
				//WFACTVINIT1 = WFActvInit($("#ActvID").val(),$("#PrcsID").val()+"|Sanction|Vendor||ADMIN","LSW_SWFACTVINITCALL");
		}
		else if($("#ACTIONTAKEN").val()=="Reject"){
			PushDatatoApprTbl1
			WFComplete ($("#ActvID").val(),"var_rstatus=Reject","");
		}
      });
    	
    
    getRECOMND();
	
    if(parseInt($("#HIDNLVL").val().replace('L',''))<=parseInt($("#DMY6").val().replace('L','')))
	{
		$("#Approve").show();
		$("#Recommended").hide();
	}
	else{
		$("#Approve").hide();
	}
	
	if ($("#DMY7").val().split("|")[5] == "Yes")
	{
		if($("#DMY5").val().split("|")[2]=="BranchOPS")
		{
		  $("#GenSan").show();	
		    $(".SanLink").hide();	
		}
		else{
		$("#GenSan").hide();
          $(".SanLink").show();		
		}
	}
	else
	{
	  $("#GenSan").hide();
	  $(".SanLink").show();	
	}
});