$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	
    LoadMultiData("",$("#PrcsID").val(),"","BankDetail1","APSGDBfields","LSW_SGETREMRKFRMMSTR");
	
	LoadMultiData("",$("#PrcsID").val(),"","ViewReport","ARVRDBfields","LSW_SAPPRRECMVIEWRPT");
    
    LoadMultiData("",$("#PrcsID").val(),"","Empowerment","ARETDBfields","LSW_SAPPRRECMEMPTYPE");
	
	LoadMultiData("",$("#PrcsID").val(),"","ManualEmpowerment","MAETDBfields","LSW_SAPPRMANUEMPTYPE");
	

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
   		 if($(this).text() != "Approval Query")
		 {
   		 $("#ACTIONTAKEN").val($(this).text());
		 }
		 else{
			 $("#ACTIONTAKEN").val("Raise Query");
		 }
   		 
   		 $("#MobIPopup").click();
		 
		 if ($(this).text() == "Forward" || $(this).text() == "Recommend" || $(this).text() == "Approval Query" || $(this).text() == "Approve and Recommend"){
			 $("#RECMTO").show();
			 $("#RECMTO").closest('.col').show()
		 }
		 else{
			 $("#RECMTO").hide();
			 $("#RECMTO").closest('.col').hide()
		 }
            
            
        //}
   	
   });
    $(document).on("click", "#WFCONF", function() {
        
    	
		if($("#ACTIONTAKEN").val()=="Forward" || $("#ACTIONTAKEN").val()=="Recommend" || $("#ACTIONTAKEN").val()=="Raise Query" || $("#ACTIONTAKEN").val()=="Approve and Recommend"){
			PushDatatoApprTbl();
    	}
		else if($("#ACTIONTAKEN").val()=="Approve"){
			var HARDSTP = UI_getdata($("#PrcsID").val(),"SANCTION","","","","LSW_SOVERALLSTAGVALDT ");
			if($(HARDSTP).find("RESULT").text() != "")
			{
				 alert('Complete the below Mandatory actionables \r\n'+$(HARDSTP).find("RESULT").text())
				return;
			}
			PushDatatoApprTbl1();
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
			PushDatatoApprTbl1();
		}
		else if($("#ACTIONTAKEN").val()=="Send Back"){
			PushDatatoApprTbl2();
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
	if($("#DMY6").val()=='L0'){
    	$("#SB").hide();
    	$("#Approve").hide();
    	$("#Recommended").hide();
    	$("#Reject").hide();
    }
	//CO SIGN STRT
	/*if($("#DMY7").val().split('|')[15] == "Y")
	{
		$("#ApproveRecmnd").show();
	}
	else{
		$("#ApproveRecmnd").hide();
	}*/
	//CO SIGN END
	/*if ($("#DMY7").val().split("|")[5] == "Yes")
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
	else if($("#PrMs1").val()=="View")
		{
			$(".SanLink").show()
		}
	else
	{
	  $("#GenSan").hide();	
	}*/
	
	if (($("#DMY7").val().split("|")[5] == "Yes")&&($("#DMY5").val().split("|")[2]=="BranchOPS")&&($("#PrMs1").val()!="View"))
	{
		$("#GenSan").show();	
	}
	if(($("#DMY7").val().split("|")[5] == "Yes")&&($("#GenSan").is(':visible')==false)){
		$(".SanLink").show();	
	}
	
	if($("#DMY5").val().split("|")[2]=="Cancelled" || $("#DMY5").val().split("|")[2]=="Rejected"){
		$("#GenSan").hide();	
		$(".SanLink").hide();	
	}
	
});