var imp1 = '<option value="Increase">Increase</option><option value="Decrease">Decrease</option><option value="Same">Same</option>';
var imp4 = '<option value="Unavailable with customer">Unavailable with customer</option><option value="Customer doc rejected by Credit">Customer doc rejected by Credit</option><option value="No subject-to documents mentioned in Credit Approval">No subject-to documents mentioned in Credit Approval</option>';
var imp6 = '<option value="Waiver">Waiver</option><option value="Decrease">Decrease</option><option value="Same">Same</option>';


$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));


	RECOMMENDHIDE();
    FormDataFromDB("LSW_TINPRINCSANC", "IPRS_", "IPRSDBfields", "");
    
    /**Grid Trigger Start **/
	$("#BTNSANCCONFR").click()
    //$("#BTNBUSNSDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
OnChngDrpDwn("");
 $(".UCVWFRECMFLOW").hide();
	
    


    
    
    $(document).on("click", ".FormSave", function() {
		
       var Grid = TxtGridsubmitdata_SV1("Table2","IPRG_","IPRS_");
	   AssignGridXmltoField("IPRS_XML", Grid);
	   var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];
		var CHKresult=FormDataToDB(tbl, prfx, '');

		
		 if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}

        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
    });
	
	 $(document).on("click", ".InitDeviation", function() {
		 if($(this).closest(".tbodytrtd").next().find("input[type=text]").val() == "")
		 {
			 alert("Downstream Value has not been updated")
			 return;
		 }
		 $("#Save").click();
		 var op=UI_getdata($("#PrcsID").val(),$($(this).closest(".tbodytr").find(".tbodytrtd")[0]).text(),"","","","LSW_SCHKDOWNSTREAM_PERMIT");
		 if($(op).find("RESULT").text() != "ALLOW")
		 {
			 alert($(op).find("RESULT").text());
			 return;
		 }
		 var DEVFR = $($(this).closest(".tbodytr").find(".tbodytrtd")[0]).text();
		 var DEVCODE = "";
		 if(DEVFR == "IMP002")
		 {
		 DEVCODE = "DEV0006";
		 }
		 else
		 {
			 DEVCODE = "DEV0013";
		 }
		 
		var DEVXML=UI_getdata($("#PrcsID").val(),DEVCODE,DEVFR,"","","LSW_SCUSTOMPUSHDEV");
		alert($(DEVXML).find("DESCR").text());
		window.location.reload();
    });
	
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
				 else if($("#ACTIONTAKEN").val() == "Proceed Post-Sanction")
				 {
					 if($("#VERTICAL").val() != "UCV" && $("#VERTICAL").val() != "UCV Eco")
					 {
						 if(!InitRCU())
						 {
							 return;
						 }
						 UI_getdata($("#PrcsID").val(),"","","","","LSW_SUPDTINITSTATUS");
					 }
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
						UI_getdata($("#PrcsID").val(),"","","","","LSW_SPUSHDATATOSTAGEDISB_HIST");
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


});