




$(document).ready(function () {

	var IOP = window.location.origin + '/jw';


	///$("#FSN").click();
	
	if($(window.parent.document).find("#NxAction").val()=='New')
	{
	InitWFPrcs('RINV')
	}
	
	GetDrpDwnVal()
	FormDataFromDB("LSW_tRegInvce", "RINV_", "RINV", "");
	 
	
	
	
	
	$("#BTNREIVsuance").trigger("click");

	$('.assignmentComplete').click(function () {
		 
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
				
				var USR=UI_IntrData($("#RINV_PrgID").val(),$(window.parent.parent.document).find("#CpmCd").val(),"",$(op).find('CpCde').text(),"","SCF_FEPPickWFVar","INTR1")
				USR=$(USR).find('WFUsr').text()
				
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

		 
	});

 
});


