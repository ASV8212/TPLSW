function GenerateReport(){
	/*var BatchID = $('#QTRA_BatchID').val();
	var IOP=window.location.origin;
	var RedirectURL ="/Birt/frameset?__report=report/CSCF/SCF_FInstrRegisTransaction.rptdesign&__format=html&__pageoverflow=1&__overwrite=false";
	RedirectURL = RedirectURL+"&param1="+BatchID;
	$('#ReportIframe').prop('src', RedirectURL);
	*/
	FncallModPageGridLrgData(this,'Table2',{spname:'SCF_sGetRepayStateGrid',Param:$('#QTRA_BatchID').val(),brid:'',MnuId:''},{0:$(''),1:$('')});
}


function GetDrpDwnVal()
{	 
	 var URLNAVCHK = UI_getdataLrg("USER","","","","","LSW_SBRDRPDOWNDATA")
	 
	 var DrpVal=''
	 
	 
	 for ( i=0;i<$(URLNAVCHK).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(URLNAVCHK).find('a')[i]).find('BRID').text() +'>'+ $($(URLNAVCHK).find('a')[i]).find('BRANCH').text()+'</option>'
		
		
		 // <option value="Program 1">Program 1</option>
        // <option value="Program 2">Program 2</option>
		 $("#GridBranch").append(DrpVal)
		 
	 }

}

function OnChngeSetVal(FldVal,AssgnVal)
{
/*
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
*/
	
	SalesDashGrid();
	
}


function SalesDashGrid()
{

	$("#BTNAcctRecv").click();

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
 
 
 function GETDROPDOWNVAL(event)
 {
 	
 	if (event == "Load")
 		{
 		if($("#LBSI_LONTYPE").val()=="")
 			{$(".DUP").show();}
 	var LoanType = UI_getdata("LONTYPE","","","","","LSW_SGETPRODVAL");

 	$("#LBSI_LONTYPE").html("")
 	$("#LBSI_LONTYPE").append($(LoanType).find("RESULT").html());
 	 $(".SUBLON").hide();
     $(".PRIME").hide();
     
 		}
 	else if (event == "Page")
 		{
 		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LBSI_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

 		$("#LBSI_SUBLONTYPE").html("")
 		$("#LBSI_SUBLONTYPE").append($(SubLoanType).find("RESULT").html());
 		$('#LBSI_SUBLONTYPE').material_select();
 		
 		if($(SubLoanType).find("RESULT").html() == '<option value="">Select</option>')
 			{ 			
 			$(".SUBLON").hide();
 			$(".PRIME").hide();
 			$(".DUP").show();
 			$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
			$("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
 			//$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
 			}
 		   else
			{
		   	 $(".SUBLON").show();
			 $(".PRIME").show();
			 $(".DUP").hide();
			 $("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			 $("#LBSI_SUBLONTYPE").addClass('LBSIMndtry');
			 $("#LBSI_PRIMLONID").next().find(".MndtryAstr").html("*");
			 $("#LBSI_PRIMLONID").addClass('LBSIMndtry');
			//$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			}
 		}
 	if($("#LBSI_LONTYPE").val()=="Registered Mortgage")
		{
		  $(".PRIME").show();
		 $(".SUBLON").hide();
		 $("#LBSI_PRIMLONID").next().find(".MndtryAstr").html("*");
		 $("#LBSI_PRIMLONID").addClass('LBSIMndtry');
		}
 	

 }
 
 function CheckCusType()
 {
	 var CusType=$("input[name='LBSI_CUSTYPE']:checked"). val();
	  if(CusType=="Non-Individual")
		  {
		   $(".CONS").show();
		   $(".CONS").val('');
		   $("#LBSI_CONSTITUTION").parent().next().find(".MndtryAstr").html("*");
		   $("#LBSI_CONSTITUTION").addClass('LBSIMndtry');
		  }
	  else
		  {
		   $(".CONS").hide();
		   $("#LBSI_CONSTITUTION").parent().next().find(".MndtryAstr").html("");
		   $("#LBSI_CONSTITUTION").removeClass('LBSIMndtry');
		  }
 }
 
 function CheckSource()
 {
	var SourceBy=$("#LBSI_SOURCBY").val()

 	if(SourceBy=="Connector")
		 {
		 $(".DST").attr("disabled",true)
 		 $(".DST").addClass('disabled');
 		 $(".DSA").attr("disabled",true)
 		 $(".DSA").addClass('disabled');
 		 $(".CON").attr("disabled",false)
 		 $("span:contains('Connector 1')").parent().addClass('CON');
		 $(".CON").removeClass('disabled');
 		}
 	else if(SourceBy=="DST")
 		{
 		 $(".DST").attr("disabled",false)
 		 $("span:contains('DST 1')").parent().addClass('DST');
 		 $(".DST").removeClass('disabled');
 		 $(".DSA").attr("disabled",true)
 		 $(".DSA").addClass('disabled');
 		 $(".CON").attr("disabled",true)
		 $(".CON").addClass('disabled');
 		}
 	else if(SourceBy=="DSA")
		{
		 $(".DST").attr("disabled",true)
		 $(".DST").addClass('disabled');
		 $(".DSA").attr("disabled",false)
		 $("span:contains('DSA 1')").parent().addClass('DSA');
		 $(".DSA").removeClass('disabled');
		 $(".CON").attr("disabled",true)
	     $(".CON").addClass('disabled');
		}
 }
 
 function CheckDirect()
 {
	 var SourceBy=$("#LBSI_SOURCBY").val()
      if(SourceBy=="Direct")
		{
         $(".DIRDISB").hide();
         $("#LBSI_CONECTNAME").removeClass('LBSIMndtry');
         $("#LBSI_CONECTNAME").parent().next().find(".MndtryAstr").html("");
		}
      else
       {
          $(".DIRDISB").show();
          $("#LBSI_CONECTNAME").addClass('LBSIMndtry');
          $("#LBSI_CONECTNAME").parent().next().find(".MndtryAstr").html("*");
       }
}
 
 function getBranch()
 {
	 var Branch=UI_getdata("","","","","","LSW_SGETBENCH")
	 $("#LBSI_BRANCH").append($(Branch).find("RESULT").html());
	 $('#LBSI_BRANCH').material_select(); 
 }
 function GetExistApplcant()
 {
   $("#BTNTRIGAPPL").click();	
 }
 
 
 
 function GridControlMANAGEDEFR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
 {	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

         'aaData': dtData,
         "aoColumns": dtcolumn,  
         
         "bAutoWidth": false,

         "autoWidth": false,

         'bPaginate': true,

        "aaSorting": [],

         "pageLength": 5,

         "bDeferRender": true,

         'bInfo': true,

         'bFilter': true,

         "bDestroy": true,

         "bJQueryUI": true,

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 1, "render": function ( data, type, row, meta ) {                            
			
			var rowno = meta.row;	
			
					
			
			var HTML =	'<span class="MANAGEDEFR"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'"  name="APPLNO" maxlength="10" class="form-control ">';			
			HTML = HTML + '<div class="HyperControls">'
			HTML = HTML + '<a type="button" class="Btxt4" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
			HTML = HTML + ' </div></span>'
			
			
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				return htmldata[0].outerHTML;      		
				
	         } 
			 }
     	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }
 