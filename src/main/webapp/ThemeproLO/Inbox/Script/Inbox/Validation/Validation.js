function GenerateReport(){
	/*var BatchID = $('#QTRA_BatchID').val();
	var IOP=window.location.origin;
	var RedirectURL ="/Birt/frameset?__report=report/CSCF/SCF_FInstrRegisTransaction.rptdesign&__format=html&__pageoverflow=1&__overwrite=false";
	RedirectURL = RedirectURL+"&param1="+BatchID;
	$('#ReportIframe').prop('src', RedirectURL);
	*/
	FncallModPageGridLrgData(this,'Table2',{spname:'SCF_sGetRepayStateGrid',Param:$('#QTRA_BatchID').val(),brid:'',MnuId:''},{0:$(''),1:$('')});
}
//GridRerun
//GridComp
 $(document).on('click', '#GridRerun', function () {
	 
	ajaxindicatorstart("Please wait...");

	var param2 = $(this).closest('tr').find('td')[3].innerHTML;

	$.ajax({

               //url: "/ThemePro_SCF/SCFInstrBatchExec",
               //data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5, spname2: "CORE_STACCTCREATION",spname: "SAM_sGetInstrCount" },
			url: "/TestThread/SCFInstrBatchExec",
			data: { param1: "", param2: param2, param3: "200", param4: "", param5: "",spname: "SAM_sGetRepayCount50",spname2: "CORE_STBulkRepaymentPosting" },
			dataType: "text",
            type: 'POST',
            success: function(data)
			{
				ajaxindicatorstop();
				swal("Repayment", "Submitted Successfully!", "success");
            },
          	failure:function(data)
            {
				ajaxindicatorstop();
				swal("Repayment", "Submission Failed!", "error");
				OP="Fail";
			}
                                  
    });
	ajaxindicatorstop();
 });
 
 function Onclickil(){
	 $("#BTNInbox").trigger("click");
 }
  function Onclickil1(){
	 $("#BTNInbox1").trigger("click");
 }
 
 
 
function AutoValidate(PRCSID,PRGMID)
{

var RTNVAL="";
	ajaxindicatorstart("Generating, Please wait...");
	var opxml= UI_getdata(PRCSID,"","","","","SCF_sGetPostINPT");
	var op1= UI_IntrData(PRCSID,opxml,"","Invoice",PRGMID,"LSW_SFEPInstrmntExcelUpload",'INTR1');
	//if($(op1).find("Result").text() =="Success")
	//{
	//var op2= UI_IntrData($("#RINV_PrcsID").val(),"","","","","SCF_sFEPValidateEligibilityGrid",'INTR1');
	var op3= UI_getdata(PRCSID,op1,"","","","SCF_sPOInvcDtlUpdt");
	/*if($(op3).find("Result").text() =="Success")
	{
		FncallwebserviceGrid(this,'Table2',{spname:'SAM_SFetchGridData',Mode:'NOEDT|Medium',Param:$('#RINV_PrcsID').val()+'|'+$('#RINV_ActivityID').val(),brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
	}*/
	if($(op3).find("Result").text() !="Success")
	{
		RTNVAL=$(op3).find("Result").text()+'|'+$(op3).find("Fail").text()
		if($(op3).find("Fail").text() == "")
		{
			alert($(op3).find("Result").text());
			return
		}
	}
	else
	{
		RTNVAL=$(op3).find("Result").text()+'|'+$(op3).find("Fail").text()
	}
	//}
	
	
	ajaxindicatorstop();
return 	RTNVAL
	
}


function ChngnavHrd(Evnt,val1){
	$('#BtnChng').text(Evnt)
	$('#BtnChng').val(val1)
}



function AutoFINCValidate(PRCSID,PRGMID)
{

var RTNVAL="";
	ajaxindicatorstart("Generating, Please wait...");
	var opxml= UI_getdata(PRCSID,"","","","","SCF_sGetFINCPostINPT");
	var op1= UI_IntrData(PRCSID,opxml,"","Invoice",PRGMID,"LSW_SFEPInstrmntExcelUpload",'INTR1');
	//if($(op1).find("Result").text() =="Success")
	//{
	//var op2= UI_IntrData($("#RINV_PrcsID").val(),"","","","","SCF_sFEPValidateEligibilityGrid",'INTR1');
	var op3= UI_getdata(PRCSID,op1,"","","","SCF_sFINCInvcDtlUpdt");
	/*if($(op3).find("Result").text() =="Success")
	{
		FncallwebserviceGrid(this,'Table2',{spname:'SAM_SFetchGridData',Mode:'NOEDT|Medium',Param:$('#RINV_PrcsID').val()+'|'+$('#RINV_ActivityID').val(),brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
	}*/
	if($(op3).find("Result").text() !="Success")
	{
		RTNVAL=$(op3).find("Result").text()+'|'+$(op3).find("Fail").text()
		if($(op3).find("Fail").text() == "")
		{
			alert($(op3).find("Result").text());
			return
		}
	}
	else
	{
		RTNVAL=$(op3).find("Result").text()+'|'+$(op3).find("Fail").text()
	}
	//}
	
	
	ajaxindicatorstop();
return 	RTNVAL
	
}


function InbxRghts()
{

var	TransTyp = UI_IntrData($(window.parent.document).find("#CpmCd").val(),"","","","","SCF_SFEPGetCusType","INTR1");

	var MnuData = UI_getdata($(TransTyp).find('LoginType').text(),'','','','',"SCF_SGetInbxMnu");
	

	
	
	for(i=0;i<$(MnuData).find('a').length;i++)
	{
	$("."+$($(MnuData).find('a')[i]).find('menuid').text()).remove()

	}
	
	
}