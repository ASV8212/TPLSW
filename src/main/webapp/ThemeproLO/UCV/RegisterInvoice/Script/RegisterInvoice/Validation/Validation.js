function GenerateReport(){
	/*var BatchID = $('#QTRA_BatchID').val();
	var IOP=window.location.origin;
	var RedirectURL ="/Birt/frameset?__report=report/CSCF/SCF_FInstrRegisTransaction.rptdesign&__format=html&__pageoverflow=1&__overwrite=false";
	RedirectURL = RedirectURL+"&param1="+BatchID;
	$('#ReportIframe').prop('src', RedirectURL);
	*/
	FncallModPageGridLrgData(this,'Table12',{spname:'SCF_sGetRepayStateGrid',Param:$('#QTRA_BatchID').val(),brid:'',MnuId:''},{0:$(''),1:$('')});
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
	 
	 var DrpVal=''
	 
	 
	 for ( i=0;i<$(URLNAVCHK).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(URLNAVCHK).find('a')[i]).find('PRGMID').text() +'>'+ $($(URLNAVCHK).find('a')[i]).find('PRGMNAME').text()+'</option>'
		
		
		 // <option value="Program 1">Program 1</option>
         // <option value="Program 2">Program 2</option>
		 $("#RINV_PrgID").append(DrpVal)
		 
	 }

	 
 }
 
 
  function FileUpldShw(Fld)
 {
	 
	 if($('#RINV_PrgName').val() == "")
	 {
		 alert('Kindly choose the program');
		 $('#RINV_POIssuType').val('');
		 return;
	 }
 //FncallwebserviceGrid(this,'Table12',{spname:'SAM_SFetchGridData',Mode:'|Medium',Param:'|',brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
 FncallInstrRegGridLrgData_FinanceASync(this,'Table12',{spname:'SCF_sGetRegInvcTempValData',Param:'Blank',brid:'',MnuId:''},{0:'',1:''},'||9,10,11,12,13,14,15,16');
 
 var classval=$(Fld).attr('id')
 
 if($(Fld).val()=='Upload')
 {
 $('.'+classval+'_file').show();
 $('#GridAdd').hide();
 $('#Validate1').hide();

 }
 else{
  $('.'+classval+'_file').hide();
  $('#GridAdd').show();
  $('#Validate1').show();

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
	        url:"/TPLSW/ExcelNoDelUploadHandlerCustome?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain1="+domain1+"&usrpwd1="+usrpwd1+"&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val(),
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
					$(id).closest('div').append('&nbsp;<span>'+names.slice(0,-1)+'</span>&nbsp; <img id="Attach" onclick="Fledwnld(this)" name="0" style="width: 21px;height: 19px;padding-bottom: 2px;" class="Table12" src="/TPLSW/ThemeproLO/Common/Images/Generate.png"> &nbsp;<img src="ThemeproLO/Common/Images/delete-16.png" id="MnlDel" style="padding-bottom: 2px;" onclick="Attchdelete(this)" alt="Smiley face">')
				

				//$(id).closest('td').append('&nbsp;<span>'+names.slice(0,-1)+'</span>&nbsp;')
				
		//		$('#GridValidate').val('0')
		
//FncallwebserviceGrid(this,'Table12',{spname:'SAM_SFetchGridData',Mode:'NOEDT|Medium',Param:$('#RINV_PrcsID').val()+'|'+$('#RINV_ActivityID').val(),brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
FncallInstrRegGridLrgData_FinanceASync(this,'Table12',{spname:'SCF_sGetRegInvcTempValData',Param:$('#RINV_PrcsID').val(),brid:'',MnuId:''},{0:'',1:''},'||9,10,11,12,13,14,15,16');
				
				
//	FncallInstrRegGridLrgData_UploadASync(this,'Table12',{spname:'SCF_SgetInstrRegGridDataOnUpload',Param:$('#INRG_PrcsID').val(),brid:'',MnuId:''},{0:$('#'),1:$('#')},'||1,4,6,8,9,10,14,16,17,18,19,21,22,23,24,25,26,28,30,31');
				
				
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

//FncallModPageGridLrgData(this,'Table12',{spname:'SCF_SgetInstrRegGridData',Param:$('#INRG_PrcsID').val(),brid:'',MnuId:''},{0:$('#'),1:$('#')},'||1,4,6,8,9,10,14,16,17,18,19,21,22,23,24,25,26,28');

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

$($(document).find('input[type="file"]')[i]).closest('div').append('&nbsp;<span>'+value.split('\\')[6].split('.')[0]+'</span>&nbsp; <img id="Attach" onclick="Fledwnld(this)" name="0" style="width: 21px;height: 19px;padding-bottom: 2px;" class="Table12" src="/ThemePro_LSW/ThemeproLO/Common/Images/Generate.png"> &nbsp;<img id="MnlDel" src="ThemeproLO/Common/Images/delete-16.png" style="padding-bottom: 2px;" onclick="Attchdelete(this)" alt="Smiley face">')
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
	
	
	//FncallwebserviceGrid(this,'Table12',{spname:'SAM_SFetchGridData',Mode:'NOEDT|Medium',Param:'|',brid:'LSW_tRegInvceDetl_Temp|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
	FncallInstrRegGridLrgData_FinanceASync(this,'Table12',{spname:'SCF_sGetRegInvcTempValData',Param:'Blank',brid:'',MnuId:''},{0:'',1:''},'||9,10,11,12,13,14,15,16');
	
    
	//FncallModPageGridLrgData(this,'Table12',{spname:'SCF_SgetInstrRegGridData',Param:$('#INRG_PrcsID').val(),brid:'Empty',MnuId:''},{0:$('#'),1:$('#')},'||1,4,6,8,9,10,14,16,17,18,19,21,22,23,24,25,26,28');
		
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

var op= UI_IntrData($("#"+FldVal).val(),$(window.parent.document).find("#CpmCd").val(),"","","","SCF_sFEPGetCoOpertCde",'INTR1');
op = op.replace('<XMLLRGResult><asetLRGDAta>','').replace('</asetLRGDAta></XMLLRGResult>','')

	 var DrpVal=""
	
	 $("#REIV_CorpCode option[value!='']").remove();
	 for ( i=0;i<$(op).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(op).find('a')[i]).find('CpCde').text() +'>'+ $($(op).find('a')[i]).find('CpCde').text()+'</option>'
		
		 $("#REIV_CorpCode").append(DrpVal)
		 $('#REIV_CorpCode').material_select();
		 
	 }

}

function Validate(){
	
	var GridTblMndtryVal= GridTblMndtry("Table12");
    if (GridTblMndtryVal== "GridMandatory") {
           return;
        }

 var RINV_PoInvceDetl = Gridsubmitdata("Table12");
	        // AssignGridXmltoField("RINV_PoInvceDetl", RINV_PoInvceDetl);
			var subChk = "";
			if( $("#RINV_POIssuType").val()=="Manual")
		  {
			subChk=UI_getdata(RINV_PoInvceDetl,'Manual',$("#RINV_PrcsID").val(),'','','SCF_sDataToTempRegInvc')
		  }
		  else if( $("#RINV_POIssuType").val()=="Upload")
		  {
			//subChk=UI_getdata('','','','','','')
		  }

 if($("#RINV_BatchId").val()=="")
		 {
			 if($("#MnuId").val()=='30g')
		 {
		 var op= UI_getdata("INVCPAY","","Yes","","","Sam_sGetBTCHSeqID")
		 }
		 else
		 {
		 var op= UI_getdata("BATCH","","Yes","","","Sam_sGetBTCHSeqID")
		 }
		 
		 $("#RINV_BatchId").val($(op).find('Val3').text());
		 }
		 
		 
		 //var tablenameins = "LSW_tRegInvce";
          //var subChk = FormDataToDB(tablenameins);
		  var UpldTyp="";
		  if( $("#RINV_POIssuType").val()=="Manual")
		  {
		UpldTyp="";
		  }
		  else
		  {
		  UpldTyp="NOEDT";
		  }
		  


	ajaxindicatorstart("Generating, Please wait...");
	var opxml= UI_getdata($("#RINV_PrcsID").val(),"","","","","SCF_sGetPostINPT");
	var op1= UI_IntrData($("#RINV_PrcsID").val(),opxml,"",$("#REIV_PrcsTyp").val(),$("#RINV_PrgID").val(),"LSW_SFEPInstrmntExcelUpload",'INTR1');
	//if($(op1).find("Result").text() =="Success")
	//{
	//var op2= UI_IntrData($("#RINV_PrcsID").val(),"","","","","SCF_sFEPValidateEligibilityGrid",'INTR1');
	var op3= UI_getdata($("#RINV_PrcsID").val(),op1,"","","","SCF_sRegInvcDtlUpdt");
	if($(op3).find("Result").text() =="Success")
	{
		//FncallwebserviceGrid(this,'Table12',{spname:'SAM_SFetchGridData',Mode:UpldTyp+'|Medium',Param:$('#RINV_PrcsID').val()+'|'+$('#RINV_ActivityID').val(),brid:'LSW_tRegInvceDetl|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
		FncallInstrRegGridLrgData_FinanceASync(this,'Table12',{spname:'SCF_sGetRegInvcTempValData',Param:$('#RINV_PrcsID').val(),brid:'',MnuId:''},{0:'',1:''},'||9,10,11,12,13,14,15,16');
		ReSetChngValidSt();
	}
	else{
	//FncallwebserviceGrid(this,'Table12',{spname:'SAM_SFetchGridData',Mode:UpldTyp+'|Medium',Param:$('#RINV_PrcsID').val()+'|'+$('#RINV_ActivityID').val(),brid:'LSW_tRegInvceDetl|LSW_tRegInvce',MnuId:'POIS_PoInvceDetl|'+$('#SubmitSuccess').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')});
	FncallInstrRegGridLrgData_FinanceASync(this,'Table12',{spname:'SCF_sGetRegInvcTempValData',Param:$('#RINV_PrcsID').val(),brid:'',MnuId:''},{0:'',1:''},'||9,10,11,12,13,14,15,16');
		alert($(op3).find("Result").text());
	}
	//}
	
	
	
	ajaxindicatorstop();
	
}

function DueDtChk(DueDt,PoDt,Crnt)
{

		var t1 = $("#"+PoDt).val();
        var datefield_id = $(this).attr('id');
        var t2 = $("#"+DueDt).val();

        var one_day = 1000 * 60 * 60 * 24;  //Here we need to split the inputed dates to convert them into standard format for further execution
        var x = t1.split("-");
        var y = t2.split("-");   //date format(Fullyear,month,date) 

        var date1 = new Date(x[2], (x[1] - 1), x[0]);

        // it is not coded by me,but it works correctly,it may be useful to all

        var date2 = new Date(y[2], (y[1] - 1), y[0])
        var month1 = x[1] - 1;
        var month2 = y[1] - 1;

        //Calculate difference between the two dates, and convert to days

        Diff = Math.ceil((date2.getTime() - date1.getTime()) / (one_day));

		if(t2!="")
		{
        if (Diff < 0) {
		
			$(Crnt).focus();
		 	$(Crnt).val('')

		  window.alert("Enter valid date!!");
            return 
        }
		}


}
function Validate12(){
	 $('#GridAdd').trigger('click');
 }
 
 
 function UpdtUpldGridDataToTmp(){
	 if($('#RINV_POIssuType').val() == "Upload")
	 {
	 var xml = '<Data><row>';
	 //var ln = $('#Table12GridPop').find(".gridDBfields").length;
	 //for(var i = 0;i<ln;i++)
	 //{
		//xml += '<'+$('#Table12GridPop').find(".gridDBfields")[i].id+'>'+$('#Table12GridPop').find(".gridDBfields")[i].value+'</'+$('#Table12GridPop').find(".gridDBfields")[i].id+'>'
	 //}
	 var ln = $('#Table12GridPop').find(".gridDBfields").length;
	 for(var i = 0;i<ln;i++)
	 {
		 if($($('#Table12GridPop').find(".gridDBfields")[i])[0].nodeName!="DIV")
		 {
			 var x = $($('#Table12GridPop').find(".gridDBfields")[i]).hasClass("IsCURCommaFields");
			 if (x == true) {
				xml += '<'+$('#Table12GridPop').find(".gridDBfields")[i].id+'>'+$('#Table12GridPop').find(".gridDBfields")[i].value.replace(/,/g,"")+'</'+$('#Table12GridPop').find(".gridDBfields")[i].id+'>'
			 }
			 else{
				xml += '<'+$('#Table12GridPop').find(".gridDBfields")[i].id+'>'+$('#Table12GridPop').find(".gridDBfields")[i].value+'</'+$('#Table12GridPop').find(".gridDBfields")[i].id+'>'
			 }
		 }
	 }
	 xml += '</row></Data>';
	 var op = UI_getdata(xml,'Upload',$('#RINV_PrcsID').val(),'','','SCF_sDataToTempRegInvc')
	 }
 }
 
 function ChngValidSt(){
	$('#ChkValdtCmplt').val('0');
}
function ReSetChngValidSt(){
	$('#ChkValdtCmplt').val('1');
}


function DtlRegInvcDataToTmp(PKID){
	if( $("#RINV_POIssuType").val()=="Upload"){
	UI_getdata($('#RINV_PrcsID').val(),PKID,'','','','SCF_sRegInvcDtlTmpData')
	}
}