
 
 
 function GetDrpDwnVal()
 {
	 var URLNAVCHK = UI_IntrData($(window.parent.document).find("#CpmCd").val(),"","","","","SCF_SFEPGetPrgName","INTR1")
	 var DrpVal=""
	 for ( i=0;i<$(URLNAVCHK).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(URLNAVCHK).find('a')[i]).find('PRGMID').text() +'>'+ $($(URLNAVCHK).find('a')[i]).find('PRGMNAME').text()+'</option>'
		 // <option value="Program 1">Program 1</option>
         // <option value="Program 2">Program 2</option>
		 $("#RMLH_PrgmID").append(DrpVal)
	 }	 
 }

 function PrgmOnChng(){
	 $('#RMLH_BtchNo').find('option').remove();
	 var OPPrgm = UI_getdata($("#RMLH_PrgmID").val(),"","","","","SCF_sGetBatchNoFrPrgm")
	 var DrpVal=""
	 $("#RMLH_BtchNo option[value!='']").remove();
	 DrpVal=OPPrgm.replace('<Resultset><a><BatchID>','').replace('</BatchID></a></Resultset>','')
	 $("#RMLH_BtchNo").append(DrpVal)
	 $('#RMLH_BtchNo').material_select();
	 /**for ( i=0;i<$(OPPrgm).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(OPPrgm).find('a')[i]).find('BatchID').text() +'>'+ $($(OPPrgm).find('a')[i]).find('BatchID').text()+'</option>'
		 // <option value="Program 1">Program 1</option>
         // <option value="Program 2">Program 2</option>
		 $("#RMLH_BtchNo").append(DrpVal)
		 $('#RMLH_BtchNo').material_select();
	 }	**/
	 
 }
 
 function OnChngeSetVal(FldVal,AssgnVal)
{
$("#"+AssgnVal).val($("#"+FldVal+" option[value='" + $( "#"+FldVal).val() + "']").text())
}

function FetchTranState(){
	if($('#RMLH_PrgmID').val()==""|| $("#RMLH_BtchNo").val()=="" || $('#RMLH_PrgmID').val() == null || $("#RMLH_BtchNo").val()==null)
	{
		if($('#RMLH_PrgmID').val()=="" || $('#RMLH_PrgmID').val() == null)
		{
			alert("Kindly choose Program");
		}
		else if($('#RMLH_BtchNo').val()=="" || $("#RMLH_BtchNo").val()==null)
		{
			alert("Kindly choose BatchID");
		}
	}
	else{
$("#BTNTranQr").trigger('click');
	}
}