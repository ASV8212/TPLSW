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
			data: { param1: "", param2: param2, param3: "200", param4: "", param5: "",spname: "SAM_sGetRepayCount50",spname2: "CORE_STBulkRepaymentPosting",Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
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
 
 
 function GetDrpDwnVal()
 {
	 
	 var URLNAVCHK = UI_IntrData($(window.parent.document).find("#CpmCd").val(),"","","","","SCF_SFEPGetPrgName","INTR1")
	 
	 var DrpVal=""
	 
	 
	 for ( i=0;i<$(URLNAVCHK).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(URLNAVCHK).find('a')[i]).find('PRGMID').text() +'>'+ $($(URLNAVCHK).find('a')[i]).find('PRGMNAME').text()+'</option>'
		
		
		 // <option value="Program 1">Program 1</option>
         // <option value="Program 2">Program 2</option>
		 $("#RINV_PrgID").append(DrpVal)
		 
	 }

	 
 }
 function GetMenuDrpDwnVal()
 {
	 
	 var URLNAVCHK = UI_getdata("","","","","","SCF_sMenuList")
	 
	 var DrpVal=""
	 
	 
	 for ( i=0;i<$(URLNAVCHK).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(URLNAVCHK).find('a')[i]).find('Menu__ID').text() +'>'+ $($(URLNAVCHK).find('a')[i]).find('Menu__Name').text()+'</option>'
		
		
		 // <option value="Program 1">Program 1</option>
         // <option value="Program 2">Program 2</option>
		 $("#RMLH_MenuName1").append(DrpVal)
		 
	 }

	 
 }
 
  function FileUpldShw(Fld)
 {
 FncallwebserviceGrid(this,'Table2',{spname:'SAM_SFetchGridData',Mode:'|Medium',Param:'|',brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
 
 var classval=$(Fld).attr('id')
 
 if($(Fld).val()=='Upload')
 {
 $('.'+classval+'_file').show();
 $('#GridAdd').hide();

 }
 else{
  $('.'+classval+'_file').hide();
  $('#GridAdd').show();

 }
 
 }
 
 
 
 
 
 
 
 function InsExclFldUpldHndlr(id)
{
	
//ajaxindicatorstart("Uploading.. Please wait");	

var Val=$(id).val()


if($(id).closest('div').find('input[type="file"]').val()!="")
{
    var domain1= LoadFrmXML("RS004");
    var usrpwd1= LoadFrmXML("RS005");
    var PrcsID=	$("#RINV_PrcsID").val();
    var FormName= "SCF_sInvoiceUpload";
    var names="";
    var descrptns="";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
 var fd = new FormData();
   var vrsnno= "";
	var prodata = "";
var CountAttch=1;
	
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $(id).closest('div').find('input[type="file"]')[0].files; // for multiple files
	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $(id).closest('div').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
			 flsize += parseFloat($(id).closest('div').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
	         descrptns += 'FieldDocument'+',';
			 
			 
	     }
	 }

	PrcsID=PrcsID;
	 
	
						 
 ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	        url:"/TPLSW/ExcelNoDelUploadHandlerCustome?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain1="+domain1+"&usrpwd1="+usrpwd1,
	        data: fd,
		//	async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
			if(data=="Fail")
	        		{
						 ajaxindicatorstop();
	        		alert(LoadFrmXML("V0119"));
					return
	        		}
			else{
				//AttchDmsIns(data,'upload',prodata);
				//$(id).val('View');
				ajaxindicatorstart();
				
				if($(data).find("Result").text()=="Success")
				{
					data=$(data).find("FileLoc").text();
					$(id).closest('div').find('input[type="hidden"]').val(data.split('|')[0])
					$(id).closest('div').find('input[type="file"]').attr('disabled',true)
					$(id).closest('div').find('input[type="file"]').val('');
					$(id).closest('div').find('input[type="file"]').hide();
					$(id).closest('div').append('&nbsp;<span>'+names.slice(0,-1)+'</span>&nbsp; <img id="Attach" onclick="Fledwnld(this)" name="0" style="width: 21px;height: 19px;padding-bottom: 2px;" class="Table2" src="/TPLSW/ThemeproLO/Common/Images/Generate.png"> &nbsp;<img src="ThemeproLO/Common/Images/delete-16.png" id="MnlDel" style="padding-bottom: 2px;" onclick="Attchdelete(this)" alt="Smiley face">')
				

				//$(id).closest('td').append('&nbsp;<span>'+names.slice(0,-1)+'</span>&nbsp;')
				
		//		$('#GridValidate').val('0')
		
FncallwebserviceGrid(this,'Table2',{spname:'SAM_SFetchGridData',Mode:'NOEDT|Medium',Param:$('#RINV_PrcsID').val()+'|'+$('#RINV_ActivityID').val(),brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
				
				
//	FncallInstrRegGridLrgData_UploadASync(this,'Table2',{spname:'SCF_SgetInstrRegGridDataOnUpload',Param:$('#INRG_PrcsID').val(),brid:'',MnuId:''},{0:$('#'),1:$('#')},'||1,4,6,8,9,10,14,16,17,18,19,21,22,23,24,25,26,28,30,31');
				
				
	//			TotInstrumentValueOnUpload();
				
					ajaxindicatorstop();
					return
				}
				else
				{
					$(id).closest('div').find('input[type="file"]').val('');
					alertify.alert($(data).find("Result").text());
					ajaxindicatorstop(); 
				}



				
				}	
					// ajaxindicatorstop(); 
	        },
	        failure:function(data)
	        {
	     		  ajaxindicatorstop();
					alertify.alert(LoadFrmXML("V0119"));
					return
	        	
	        }
	    });
		
		 // ajaxindicatorstop();
		  }
		  else{
		  
		  alert('select the file to upload');
		  }

		 

	 




//ExclFldUpldHndlr(id);

//FncallModPageGridLrgData(this,'Table2',{spname:'SCF_SgetInstrRegGridData',Param:$('#INRG_PrcsID').val(),brid:'',MnuId:''},{0:$('#'),1:$('#')},'||1,4,6,8,9,10,14,16,17,18,19,21,22,23,24,25,26,28');

}


function Fledwnld(id)
{
ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
var url= $(id).closest('div').find('.DBfields').val()
	//if(AcctNo!=""){
	RedirectURL = 'http://'+IOP+url.replace(/\\/g, "/");
	var link = document.createElement("a");
    link.download = 'Report';
    link.href = RedirectURL;
    link.click();

	//WintabsCtrl(RedirectURL,'Term Sheet',AppNo,'yes');
	ajaxindicatorstop();

}


function LoadVwImg()
{

var Len=$(document).find('input[type="file"]').length;

for(i=0;i<Len;i++)
{

if($($(document).find('input[type="file"]').closest('div').find('.DBfields')[i]).val()!='')
{
$($(document).find('input[type="file"]')[i]).attr('disabled',true)
$($(document).find('input[type="file"]')[i]).val('');
$($(document).find('input[type="file"]')[i]).hide();

var value= $($(document).find('input[type="file"]').closest('div').find('.DBfields')[i]).val()

$($(document).find('input[type="file"]')[i]).closest('div').append('&nbsp;<span>'+value.split('\\')[6].split('.')[0]+'</span>&nbsp; <img id="Attach" onclick="Fledwnld(this)" name="0" style="width: 21px;height: 19px;padding-bottom: 2px;" class="Table2" src="/ThemePro_LSW/ThemeproLO/Common/Images/Generate.png"> &nbsp;<img id="MnlDel" src="ThemeproLO/Common/Images/delete-16.png" style="padding-bottom: 2px;" onclick="Attchdelete(this)" alt="Smiley face">')
}
				
}

}





function Attchdelete(id) {
    
  

var strconfirm = confirm("Are you sure you want to delete?");
if (strconfirm == true) 
{	
    $($(id).closest('div').find('input[type="hidden"]')[1]).val('')
	$(id).closest('div').find('input[type="file"]').attr('disabled',false)
	$(id).closest('div').find('input[type="file"]').val('');
	$(id).closest('div').find('input[type="file"]').show();
	$(id).closest('div').find('span').remove()
	$(id).closest('div').find('#Attach').remove();
	$(id).closest('div').find('#MnlDel').remove();
	
	
	FncallwebserviceGrid(this,'Table2',{spname:'SAM_SFetchGridData',Mode:'NOEDT|Medium',Param:'|',brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
	
    
	//FncallModPageGridLrgData(this,'Table2',{spname:'SCF_SgetInstrRegGridData',Param:$('#INRG_PrcsID').val(),brid:'Empty',MnuId:''},{0:$('#'),1:$('#')},'||1,4,6,8,9,10,14,16,17,18,19,21,22,23,24,25,26,28');
		
   // $("#INRG_TotInstrmntVal").val('0');
		
	}
  
	else
	{
		return;
	}


}


function OnChngeSetVal(FldVal,AssgnVal)
{

$("#"+AssgnVal).val($("#"+FldVal+" option[value='" + $( "#"+FldVal).val() + "']").text())

var op= UI_IntrData($("#"+FldVal).val(),"","","","","SCF_sFEPGetCoOpertCde",'INTR1');


	 var DrpVal=""
	 
	 
	 for ( i=0;i<$(op).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(op).find('a')[i]).find('CpCde').text() +'>'+ $($(op).find('a')[i]).find('CpCde').text()+'</option>'
		
		 $("#REIV_CorpCode").append(DrpVal)
		 
	 }

}

function OnChngeSetVal1(FldVal,AssgnVal)
{
$("#"+AssgnVal).val($("#"+FldVal+" option[value='" + $( "#"+FldVal).val() + "']").text())
}

function OnChngeSetVal2(FldVal,AssgnVal)
{
$("#"+AssgnVal).val($("#"+FldVal).val())
}
function Validate(){

 var RINV_PoInvceDetl = Gridsubmitdata("Table2");
	         AssignGridXmltoField("RINV_PoInvceDetl", RINV_PoInvceDetl);

 if($("#RINV_BatchId").val()=="")
		 {
		 var op= UI_getdata("BATCH","","Yes","","","Sam_sGetBTCHSeqID")
		 
		 $("#RINV_BatchId").val($(op).find('Val3').text());
		 }
		 
		 
		 var tablenameins = "LSW_tRegInvce";
          var subChk = FormDataToDB(tablenameins);


	ajaxindicatorstart("Generating, Please wait...");
	var opxml= UI_getdata($("#RINV_PrcsID").val(),"","","","","SCF_sGetPostINPT");
	var op1= UI_IntrData($("#RINV_PrcsID").val(),opxml,"",$("#REIV_PrcsTyp").val(),$("#RINV_PrgID").val(),"LSW_SFEPInstrmntExcelUpload",'INTR1');
	//if($(op1).find("Result").text() =="Success")
	//{
	//var op2= UI_IntrData($("#RINV_PrcsID").val(),"","","","","SCF_sFEPValidateEligibilityGrid",'INTR1');
	var op3= UI_getdata($("#RINV_PrcsID").val(),op1,"","","","SCF_sRegInvcDtlUpdt");
	if($(op3).find("Result").text() =="Success")
	{
		FncallwebserviceGrid(this,'Table2',{spname:'SAM_SFetchGridData',Mode:'NOEDT|Medium',Param:$('#RINV_PrcsID').val()+'|'+$('#RINV_ActivityID').val(),brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
	}
	else{
		alert('Validation Failed');
	}
	//}
	
	
	ajaxindicatorstop();
	
}


function AppndCmpnyUsr(){
	$("#Name option").remove();
	if($(window.parent.parent.document).find("#CpmCd").val()=="C999999" || $(window.parent.parent.document).find("#CpmCd").val()=="c999999")
	{
	var URLNAVCHK= UI_getdata($("#RMLH_CmpnyCde").val(),"","","","","SCF_sGetCmpnyCode");
	}
	else
	{
		var URLNAVCHK= UI_getdata($(window.parent.parent.document).find("#CpmCd").val(),"","","","","SCF_sGetCmpnyCode");
	}
	var DrpVal=""
	 
	 
	 for ( i=0;i<$(URLNAVCHK).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(URLNAVCHK).find('a')[i]).find('ID').text() +'>'+ $($(URLNAVCHK).find('a')[i]).find('Name').text()+'</option>'
		
		
		 // <option value="Program 1">Program 1</option>
         // <option value="Program 2">Program 2</option>
		 $("#Name").append(DrpVal)
		 
	 }
	
}

function TriggerChng()
{
	if($("#RMLH_CmpnyCde").val()=="" || $("#RMLH_CmpnyCde").val()==null)
	{
	//alert('Kindly Choose the Company Name');
	$('#BTNREIVsuance1').trigger('click');
	}
	else{
	$('#BTNREIVsuance1').trigger('click');
	}
	
}

function TriggerChng1()
{
	if($("#RMLH_MenuName1").val()=="" || $("#RMLH_MenuName1").val()==null)
	$('#BTNREIVsuance').trigger('click');
	else
		$('#BTNREIVsuance1').trigger('click');
	
	AppndCmpnyUsr();
}

