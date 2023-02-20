$(document).on('click', '#BTNEdit', function () {
		$('#BTNNew').show();
		$('#BTNEdit').hide();
		$('.FindCustID').show();
		$('.inputTXT').val('');
		$('.inputTXTAR').val('');
		$('#BURP_BranchName').val($('#TempBrName').val());
		$('#BURP_BranchID').val($('#TempBrID').val());
		$('#Mode').val('Edit');

});

$(document).on('click', '#BTNNew', function () {
		$('#BTNNew').hide();
		$('#BTNEdit').show();
		$('.FindCustID').hide();
		$('.inputTXT').val('');
		$('.inputTXTAR').val('');
		$('#BURP_BranchName').val($('#TempBrName').val());
		$('#BURP_BranchID').val($('#TempBrID').val());
		$('#Mode').val('New');
});

$(document).on('click', '#BTNSave', function () {
	var pgL=$('.PageContent').length;
	var i;
	generateID();
	var fXML="<Tab><Content>";
	var pgId;
	var mndtryChk;
	var State="";
	
	
	
	
	for(i=pgL-1;i>-1;i--)
	{
		pgId=$('.PageContent')[i].id;
		if ($('#' + pgId).text() != "")
		{
		//triggerGrid(pgId);
		fXML=fXML+bindXML(pgId,'Save');
		}
		else
		{
			fXML=fXML+"<Form><Details></Details></Form>";
		}
	}
	fXML=fXML+"</Content></Tab>";

	var op = UI_getdata(fXML,"","","","","SCF_sBulkRegrIns");
	State=$(op).find("result").text();
	
	if(State=="success")
	{
		swal("Bulk Repayment", "Saved Successfully!", "success");
	}
	else
	{
		alertify.alert(State);
	}
	
	
	
});

$(document).on('click', '#BTNSubmit', function () {
	generateID();
	var totval=$('#BURP_PayAmt').val();
	if(totval!=0)
	{
	var ChkVAl=finalSubmit('Submit');
	var IOP=window.location.origin+'/jw';
    var activityId = getUrlParam("activityId");
	if(ChkVAl == "Yes")
	   	  {	
	   var CID = "Your Batch ID is'" + $("#BURP_BatchID").val() +"'"
	
	swal({
                title: LoadFrmXML("V0083"), 
                text: "Submission is under process!" + "\n " + CID,
                type: "warning", 
                showCancelButton: true, 
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok!",
                animation: "slide-from-top", 
                closeOnConfirm: false
            },
			
			
            function () { 
			
			if($('#BURP_Alloctype').val() == "Upload")
			{
			var param1 = getUrlParam("processId");
			$.ajax({
    url: "/TestThread/SCF_RepayOnSubmit",
	data: { param1: param1, param2: "", param3: "", param4: "", param5: "",spname: "SCF_getRepayDetl2Post",spname2: "LON_SALLOCATION_REPAYMENT",spname3: "SCF_tGetRepayDateFromTmp2Wf" },

	dataType: "text",
    type: 'POST',
    success: function(data)
    {

		ajaxindicatorstop();
     },
		
   	failure:function(data)
     {
		ajaxindicatorstop();
     }

});
			
			}
			
			
		var Decision="var_Status=Frwd";
		//var Participant=",var_PRcmdA=maker1";
			var seturl1 = IOP+"/TestLoanapplication/JSP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect="+IOP+"/TestLoanapplication/JSP/CommonAssignment/formSuccess.jsp";
            seturl1 = seturl1 + "&wfvariable=" +Decision;
			window.location = seturl1;
			});
		  }

	}
		else{
			alertify.alert("Payment Amount should not be '0'.");
		}
});

$(document).on('click', '#BTNReject', function () {
	var ChkVAl=finalSubmit('Reject');
	var IOP=window.location.origin+'/jw';
    var activityId = getUrlParam("activityId");
   // if(ChkVAl == "Yes")
	   //	  {	
	   var CID = "Your Batch ID is'" + $("#BURP_BatchID").val() +"'"
	
	swal({
                title: LoadFrmXML("V0083"), 
                text: "Submission is under process!" + "\n " + CID,
                type: "warning", 
                showCancelButton: true, 
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok!",
                animation: "slide-from-top", 
                closeOnConfirm: false
            },
			
			
            function () {

		var op = UI_getdata($('#BURP_PrcsID').val(),"Reject","","","","SCF_sUpdateRepayStatus");

				
		var Decision="var_Status=Rjct";
		//var Participant=",var_PRcmdA=maker1";
			var seturl1 = IOP+"/TestLoanapplication/JSP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect="+IOP+"/TestLoanapplication/JSP/CommonAssignment/formSuccess.jsp";
            seturl1 = seturl1 + "&wfvariable=" +Decision;
			window.location = seturl1;
			});
		 // }

});

$(document).on('click', '#BTNApprove', function () {
	
	 var CID = "Your Batch ID is'" + $("#BURP_BatchID").val() +"'"
	
	swal({
                title: LoadFrmXML("V0083"), 
                text: "Submission is under process!" + "\n " + CID,
                type: "warning", 
                showCancelButton: true, 
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok!",
                animation: "slide-from-top", 
                closeOnConfirm: false
            },
			
			
            function () { 
			
			$('.confirm').hide();
			
	var ChkVAl=finalApprove();
	
		if(ChkVAl == "Yes")
	   	  {

	
	
	
	var op = UI_getdata($('#BURP_PrcsID').val(),"","","","","SCF_SBulkRepaymentBFPostingChk");
	var State=$(op).find("result").text();
	
	
	if(State!="Success")
	{
			swal("Instrument Registration", "Submission Failed!", State);
			return;
	}
	
	var param3=$('#BURP_BatchID').val();
	
	//var op = UI_getdata($('#BURP_PrcsID').val(),"Approve","","","","SCF_sUpdateRepayStatus");
	
$.ajax({
			url: "/TestThread/SCFInstrBatchExec",
			data: { param1: "", param2: $('#BURP_PrcsID').val(), param3: "200", param4: "", param5: "",spname: "SAM_sGetRepayCount50",spname2: "CORE_STBulkRepaymentPosting" },
			dataType: "text",
            type: 'POST',
            success: function(data)
			{
               	OP=data.responseText;
				ajaxindicatorstop();
				swal("Process "+param3+" about to end", "Please wait...", "success");
				ajaxindicatorstop();	
            },
          	failure:function(data)
            {
				ajaxindicatorstop();
				swal("Instrument Registration", "Submission Failed!", "error");
				OP="Fail";
            }
                                     
    	   });
	
			  
	/*op = UI_getdata($('#BURP_PrgmID').val(),$('#BURP_PrcsID').val(),$('#BURP_BatchID').val(),GetCurrentUser(),"","CORE_STBulkRepaymentPosting");
	var OpResult=$(op).find("Result").text();*/
	
	//if(OpResult=="Success")
	//{
	var IOP=window.location.origin+'/jw';
    var activityId = getUrlParam("activityId");
	if(ChkVAl == "Yes")
	   	  {	
		var Decision="var_Status=Aprv";
		//var Participant=",var_PRcmdA=maker1";
			var seturl1 = IOP+"/TestLoanapplication/JSP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect="+IOP+"/TestLoanapplication/JSP/CommonAssignment/formSuccess.jsp";
            seturl1 = seturl1 + "&wfvariable=" +Decision;
			window.location = seturl1;
		  }
	//}
	//else
	//{
	//	alertify.alert(OpResult);
	//}
		  }
			});

});

$(document).on('click', '#BTNSendBack', function () {
		//var ChkVAl=finalSubmit();
	var IOP=window.location.origin+'/jw';
    var activityId = getUrlParam("activityId");
    //if(ChkVAl == "Yes")
	  // 	  {	
	   var CID = "Your Batch ID is'" + $("#BURP_BatchID").val() +"'"
	
	swal({
                title: LoadFrmXML("V0083"), 
                text: "Submission is under process!" + "\n " + CID,
                type: "warning", 
                showCancelButton: true, 
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok!",
                animation: "slide-from-top", 
                closeOnConfirm: false
            },
			
			
            function () { 
			
		var Decision="var_Status=SendBack";
		//var Participant=",var_PRcmdA=maker1";
			var seturl1 = IOP+"/TestLoanapplication/JSP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect="+IOP+"/TestLoanapplication/JSP/CommonAssignment/formSuccess.jsp";
            seturl1 = seturl1 + "&wfvariable=" +Decision;
			window.location = seturl1;
			});
		//  }

});
function generateID()
{
	 if($('#BURP_BatchID').val()=="")
	 {
		  var CusID = UI_getdata("BulkRepay", "BR", "Yes", "", "", "Sam_sGetSeqID");
		   var Val3 = $(CusID).find("Val3").text();
			$('#BURP_BatchID').val(Val3);
	 }
}
function finalSubmit(Event)
{
	var pgL=$('.PageContent').length;
	var i;
	var fXML="<Tab><Content>";
	var pgId;
	var mndtryChk;
	var tXML="";
	
	
	
	for(i=pgL-1;i>-1;i--)
	{
		pgId=$('.PageContent')[i].id;
		if ($('#' + pgId).text() != "")
		{
//		triggerGrid(pgId);
		tXML=bindXML(pgId,Event);
		if(tXML=="Mndtry")
		{
			return "no";
		}
		fXML=fXML+tXML;
		}
		else
		{
			alertify.alert("Please view all the tab.")
			return "no";
		}
		
	}
	
	if(fXML!="Mndtry")
	{
	fXML=fXML+"</Content></Tab>";
	var op = UI_getdata(fXML,"","","","","SCF_sBulkRegrIns");
	var State=$(op).find("result").text();
	if(State=="success")
	{
		return "Yes";
	}
	else
	{
		alertify.alert(State);
		return "no";
		
	}
	}
	
}
function finalApprove()
{
	var pgL=$('.PageContent').length;
	var i;
	var fXML="<Tab><Content>";
	var pgId;
	var mndtryChk;
	
	var tXML="";
	
	
	for(i=pgL-1;i>-1;i--)
	{
		pgId=$('.PageContent')[i].id;
		if ($('#' + pgId).text() != "")
		{
		//triggerGrid(pgId);
		tXML=bindXML(pgId,'Submit');
		if(tXML=="Mndtry")
		{
			return "no";
		}
		fXML=fXML+tXML;
		}
		else
		{
			alertify.alert("Please view all the tab.")
			return "no";
		}

	}
	
	if(fXML!="Mndtry")
	{
	fXML=fXML+"</Content></Tab>";
	var op = UI_getdata(fXML,"Approve","","","","SCF_sBulkRegrIns");
	var State=$(op).find("result").text();
	if(State=="success")
	{
		return "Yes";
	}
	else
	{
		alertify.alert(State);
		return "no";
		
	}
	}
	
}
function bindXML(pgId,mode)
{

	if(mode=="Submit")
	{
		 var MndtChk=ChkMandatoryFields("Mndtry");
		if(MndtChk=="No")
		{
			return "Mndtry";
		}
		//Mndtry
	}
	var x = $('#'+pgId).find(".DBfields").length;;
    
	var name = "";
    var fieldid = "";
    var value = "";
    var type = "";
  
    var formxml = "<Form><Details>";
    for (i = 0; i < x; i++) {
        name = $('#'+pgId).find(".DBfields")[i].name;
        fieldid = $('#'+pgId).find(".DBfields")[i].id;
        if ($('#' + fieldid).hasClass("IsCURCommaFields")) {
            value = $('#'+pgId).find(".DBfields")[i].value.replace(/,/g, "");

        }
        else {
		if ($('#' + fieldid).hasClass("ImgIdnt")) {
		if($('#'+pgId).find(".DBfields")[i].src.indexOf("/Attachments/")!=-1)
		{
		value = $('#'+pgId).find(".DBfields")[i].src;
		value = "/Attachments/" + value.split("/Attachments/")[1];
		}
		else{
		value = "";
		}
		}
		else
		{
		
            value = $('#'+pgId).find(".DBfields")[i].value.replace(/\&/g, "and");
			}
        }

			if(value != "")
			{
        var formxml = formxml + "<" + name + ">" + value + "</" + name + ">";
			}

    }
    
	
    var formxml = formxml + "</Details></Form>";
    return formxml;
}
function triggerGrid(tabID)
{
	if(tabID=='C_Tab0')
	{
		var VirtMatDetl = Gridsubmitdata("Table2");
		AssignGridXmltoField("BURP_VirtMatDetl", VirtMatDetl);
	         
		

	}
}
function loadDataToEdit()
{
	SCFFormDataFromDB("SCF_tBulkRepayment", "BURP_", "BURP", "",$('#OldPrcsID').val());
	FncallModPageGridLrgData(this,'Table2',{spname:'SCF_SgetInstrRepayGridData',Param:$('#OldPrcsID').val(),brid:'',MnuId:'Checker'},{0:$(''),1:$('')},'||1,2,4,13,14,15,16,17,18,20,21,23,26,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47,48');
	$('.FindBatchID').css('display', 'inline') 
	 
}
