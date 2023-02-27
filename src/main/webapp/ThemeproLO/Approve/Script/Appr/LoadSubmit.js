$(document).ready(function() {

      if($("#DMY7").val().split("|")[8]=="HE02")
	  {
		  $(".DocCheckList").hide();
	  }
    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	
    LoadMultiData("",$("#PrcsID").val(),"","BankDetail1","APSGDBfields","LSW_SGETREMRKFRMMSTR");
	
	LoadMultiData("",$("#PrcsID").val(),$("#DMY7").val().split("|")[8],"ViewReport","ARVRDBfields","LSW_SAPPRRECMVIEWRPT");
    
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
	
	  $(document).on("click", ".UCVWFRECMFLOW", function() {
		  var op =  UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHECKINPRINCSANC");
		  $("#ACTIONTAKEN").val($(this).text());
		  if($(op).find("RESULT_FLG").text() == "FAIL" && $(this).text() != "Send to credit")
		  {
			  alert($(op).find("RESULT_MSG").text());
			  return
		  }
		  else{
			$("#GetRemarks").click();
		  }
	    });
    
    $(document).on("click", "#INPRINCRDESCSUBMIT", function() {
		var ACTVTY="";
		  var OverAllStatus="";
			var WFACTVINIT = "";
			
			var OP="";
			var Token=$(window.parent.parent.document).find("#Prvnt").val();
			var RmrkTxt = $("#INPRINCRDESC").val();
			var xml = "<UsrID>"+$("#LogUsr").val()+"</UsrID><ActionTaken>"+$("#ACTIONTAKEN").val()+"</ActionTaken><Remarks>"+$("#INPRINCRDESC").val()+"</Remarks><PrcsID>"+$("#PrcsID").val()+"</PrcsID><ACTVYID>"+$("#ActvID").val()+"</ACTVYID>"
			if(RmrkTxt==""){
		alert("Kindly fill the Remark");
		return;
	}
	$.ajax({

       url: "/TPLSW/UI_GetData",
       data: { param1: xml, param2: "", param3: RmrkTxt, param4: "", param5: "",spname: "LSW_SPushDatatoInPrincTbl",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
       async: true,
       //dataType: "json",
	    dataType: "text",
       type: 'POST',
       complete: function OnSuccess_submit(xml1) {
    	   	OP=xml1.responseText;
			if($(OP).find("RESULT_FLG").text()=="FAIL")
			{
				alert($(OP).find("RESULT_FLG").text());
				return;
			}
			else if($(OP).find("RESULT_FLG").text()=="SUCCESS")
			{
				if($("#ACTIONTAKEN").val() == "Send to credit")
				 {
					WFComplete ($("#ActvID").val(),"var_Wstatus=CRSB",""); 
					var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_STERMSANACTIVITY");
				 }
				 else if($("#ACTIONTAKEN").val() == "Proceed Disbursement")
				 {
					 if(!InitRCU())
					 {
						 return;
					 }
					 UI_getdata($("#PrcsID").val(),"","","","","LSW_SUPDTINITSTATUS");
					 ACTVTY=["OTC","PDD"];
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
						}
					WFComplete ($("#ActvID").val(),"var_Wstatus=DISBINIT","");
				 }
			}
			else{
				alert("In-Principle Sanction Submission Failed");
				return;
			}
	   },
	
    error: function (xml1)
    {
		//alertify.alert(LoadFrmXML("V0126"));
			//window.alert(LoadFrmXML("V0126"));
			
			alert("In-Principle Sanction Submission Failed");
			return;
			
		
		//ajaxindicatorstop();
    }	   
	});
	});
    $(document).on("click", ".WFRECMFLOW", function() {
        
   	 //if ($(this).text() == "Forward" || $(this).text() == "Recommended") {
   		 
   		 if($(this).text() != "Approval Query")
		 {
   		 $("#ACTIONTAKEN").val($(this).text());
		 }
		 else{
			 $("#ACTIONTAKEN").val("Raise Query");
		 }
   		 
		 var Level=$("#RECMTO").find('option').last().attr("value")
		 if(Level!="")
		 {
		   Level=Level.replace('L','');
		 }
		  var MaxLevel=$("#DMY6").val();
	if($(this).text()!="Approve"){
		if(parseInt(Level)==parseInt(MaxLevel))
		{
			alert('The file can not be Forwarded, as the file is in higher authority. Kindly Approve the case to process further');
			return false;
		}
		else
		{			
   		  $("#MobIPopup").click();
		}
	}
	else
	{
	  $("#MobIPopup").click();
	}
		 if ($(this).text() == "Forward and Recommend")
		 {
		  var Level=$("#DMY6").val();
			  Level= Level.replace('L','')
		      Level= parseInt(Level)+parseInt(1);
			  
			  $("#RECMTO").val('L'+Level)
		 }
		 
		 if ($(this).text() == "Send Back")
		 {
		  var Level=$("#DMY6").val();
			  Level= Level.replace('L','')
			  Level= parseInt(Level)-parseInt(1)
			  $("#RECMTO").val('');
		 }
	
		 
		 if ($(this).text() == "Forward" || $(this).text() == "Recommend" || $(this).text() == "Approval Query"  || $(this).text() == "Approve and Recommend"){
			 $("#RECMTO").show();
			 $("#RECMTO").closest('.col').show()
		 }
		 else{
			 $("#RECMTO").hide();
			 $("#RECMTO").closest('.col').hide()
		 }
           $('.HEADTEXT').text($(this).text())  
            
        //}
   	
   });
    
    $(document).on("click", "#WFCONF", function() {
        
    	
		if($("#ACTIONTAKEN").val()=="Forward" || $("#ACTIONTAKEN").val()=="Forward and Recommend" || $("#ACTIONTAKEN").val()=="Recommend"  || $("#ACTIONTAKEN").val()=="Raise Query" || $("#ACTIONTAKEN").val()=="Approve and Recommend"){
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
		else if($("#ACTIONTAKEN").val()=="Send Back"){
			PushDatatoApprTbl2();
		}
		else if($("#ACTIONTAKEN").val()=="Reject"){
			PushDatatoApprTbl1();
		}
      });
    	
    
    getRECOMND();
	
    if(parseInt($("#HIDNLVL").val().replace('L',''))<=parseInt($("#DMY6").val().replace('L','')))
	{
		$("#Approve").show();
		$("#Forward").hide();
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
	
	if($("#DMY5").val().split("|")[2]=="ReCredit")
	{
		$("#Recredit").show();
		$("#PDisb").show();
		$("#Forward").hide();
		$("#Reject").hide();
	}
	else
	{
     	$("#Recredit").hide();
		$("#PDisb").hide();	
	}
	
	
	//CO SIGN STRT
	if($("#DMY7").val().split('|')[15] == "Y")
	{
		$("#ApproveRecmnd").show();
	}
	else{
		$("#ApproveRecmnd").hide();
	}
	
	if($("#DMY7").val().split('|')[16] == "Y" && $("#DMY7").val().split('|')[17] == "N")
	{
		$("#Recommended").show();
		$("#Approve").hide();
	}
	if($("#DMY7").val().split('|')[16] == "Y" && $("#DMY7").val().split('|')[17] == "Y")
	{
		if(parseInt($("#HIDNLVL").val().replace('L',''))<=parseInt($("#DMY6").val().replace('L','')))
	{
		$("#Approve").show();
		$("#Recommended").hide();
	}
	else{
		$("#Approve").hide();
	}
	}
	//CO SIGN END
	
	
	/*if ($("#DMY7").val().split("|")[5] == "Yes")
	{
		if(($("#DMY5").val().split("|")[2]=="BranchOPS")&&(($("#PrMs1").val()!="View")))
		{
		  $("#GenSan").show();	
		    $(".SanLink").hide();	
		}
		else if(($("#DMY5").val().split("|")[2]=="BranchOPS")&&(($("#PrMs1").val()=="View")))
		{
		  $("#GenSan").hide();	
		    $(".SanLink").hide();	
		}
		else{
		$("#GenSan").hide();
          $(".SanLink").show();		
		}
	}
	else if($("#DMY7").val().split("|")[5] == "No"){
	 if($("#PrMs1").val()=="View")
		{
			$(".SanLink").hide()
		}
		else{
			$(".SanLink").show()
		}
	}
	else
	{
	  $("#GenSan").hide();	
	}*/
	
	if (($("#DMY7").val().split("|")[5] == "Yes")&&($("#DMY5").val().split("|")[2]=="BranchOPS")&&($("#PrMs1").val()!="View"))
	{
		//$("#GenSan").show();	
	}
	if((($("#DMY7").val().split("|")[5] == "Yes"))&&($("#GenSan").is(':visible')==false)){
		$(".SanLink").show();	
	}
	
	if($("#DMY5").val().split("|")[2]=="Cancelled" || $("#DMY5").val().split("|")[2]=="Rejected"){
		$("#GenSan").hide();	
		$(".SanLink").hide();	
	}
});