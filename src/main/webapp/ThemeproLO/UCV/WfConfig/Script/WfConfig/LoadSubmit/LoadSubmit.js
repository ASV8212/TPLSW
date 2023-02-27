




$(document).ready(function () {

	var IOP = window.location.origin + '/jw';


	///$("#FSN").click();
	
	if($(window.parent.document).find("#NxAction").val()=='New')
	{
	InitWFPrcs('RINV')
	}
	
	GetDrpDwnVal();
	GetMenuDrpDwnVal();
	AppndCmpnyUsr();
	//Enable Cmpny Code Start
	if($(window.parent.parent.document).find("#CpmCd").val()=="C999999" || $(window.parent.parent.document).find("#CpmCd").val()=="c999999")
	{
		$("#CmpnyCode").show();
		var URLNAVCHK = UI_getdata($(window.parent.document).find("#CpmCd").val(),"","","","","SCF_sGetCmpnyCodeDrpDwn")
		//$("#RMLH_CmpnyCde option").remove();
		var DrpVal=""
		for ( i=0;i<$(URLNAVCHK).find('a').length;i++)
		 {
				DrpVal= $(URLNAVCHK).find("cmpycode")[i].innerHTML
				
				 $("#RMLH_CmpnyCde").append(DrpVal)
			 
		 }
		//$("#RMLH_CmpnyCde").append($(URLNAVCHK).find("cmpycode").text())
		
	}
	else{
		var DrpVal=""
		DrpVal= '<option value='+$(window.parent.parent.document).find("#CpmCd").val() +'>'+ $(window.parent.parent.document).find("#CpmCd").val()+'</option>'
		$("#RMLH_CmpnyCde").append(DrpVal);
		$("#RMLH_CmpnyCde").select()
	}
	//Enable Cmpny Code End
	/*var opxml = UI_getdata($(window.parent.parent.document).find("#CpmCd").val(),"","","","","SCF_sChkCmpyExstLvlHdr")
	if($(opxml).find("Result").text()=="New")
	{
	$("#BTNREIVsuance").trigger("click");
	}
	else
	{
		$("#BTNREIVsuance1").trigger("click");
	}*/
	
	$("#RMLH_CrBy").val(GetCurrentUser());

	$('.assignmentComplete').click(function () {
	
	
	if($("#RMLH_MenuName").val()=="")
	{
	alert("Choose Menu");
	return
	}
	
	if($("#RMLH_LvlName").val()=="")
	{
	alert("Choose Level");
	return
	}
	
	
		 /**
		 var RINV_PoInvceDetl = Gridsubmitdata("Table2");
	         AssignGridXmltoField("RINV_PoInvceDetl", RINV_PoInvceDetl);
		 
		 var BTNName=$(this).find('a').attr('data-original-title');
		 
		 if($('main').attr('class')=='REGINVPAY')
		 {
		 BTNName='Approve';
		 }
		 
		 	 
		 if($("#RINV_BatchId").val()=="")
		 {
		 var op= UI_getdata("BATCH","","Yes","","","Sam_sGetBTCHSeqID")
		 
		 $("#RINV_BatchId").val($(op).find('Val3').text());
		 }
		 
		 
		 var tablenameins = "LSW_tRegInvce";
                var subChk = FormDataToDB(tablenameins);
				

				
				var op= UI_getdata($("#RINV_PrcsID").val(),"","","","","SCF_sGetCopcodeVal")
				
				var USR=UI_IntrData($("#RINV_PrgID").val(),$(window.parent.parent.document).find("#CpmCd").val(),"",op,"","SCF_FEPPickWFVar","INTR1")
				//USR=$(USR).find('WFUsr').text()
				
				var RtnVal=	CmpleteWFPrcs('RINV',BTNName,USR)
			
		
		
		
		
			if(RtnVal=='Success'&&BTNName=='Approve')
			{
			UI_getdata($("#RINV_PrcsID").val(),"","","","","SCF_SRegFinlINS")
			}
			if(RtnVal=='Success'&&BTNName=='Reject')
			{
			UI_getdata($("#RINV_PrcsID").val(),"","","","","SCF_SRegFinlINS")
			}
			if(RtnVal=='Success')
			{
			$(".fa-home").click();
			}
**/
		var xml = submitdata("SRCH");
		 var GrdDtl = Gridsubmitdata("Table2");
		 if($(GrdDtl).find('RMLH_LvlName').text() !="")
		 {
			 var op = UI_getdata(GrdDtl,xml,"","","","SCF_sWFRcmDtlIns");
			 if($(op).find("Result").text()=="Success")
			 {
				 alert('Success');
			 }
			 else
			 {
				 alert('Failed');
			 }
		 }
		 else{
			 alert('Enter atleast one row');
		 }
		 
		 
	});

 
});


