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
	 var URLNAVCHK = UI_getdata("USER","","","","","LSW_SBRDRPDOWNDATA")
	 
	 var DrpVal=''
	 
	 
	 for ( i=0;i<$(URLNAVCHK).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(URLNAVCHK).find('a')[i]).find('ID').text() +'>'+ $($(URLNAVCHK).find('a')[i]).find('BRANCH').text()+'</option>'
		
		
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

function LoadDashBord(){
	
	/*var	data = UI_IntrData($("#CpmCd").val(),"","","","","SCF_sFEPGETDashBoardDtl","INTR1");
	
	$("#SancLmt").find("h5").text($(data).find("SancLmt").text());
	$("#OprLmt").find("h5").text($(data).find("OprLmt").text());
	$("#UnLmt").find("h5").text($(data).find("UnLmt").text());
	$("#AvlLmt").find("h5").text($(data).find("AvlLmt").text());
	$("#SancLmt").find("h5").append(" &#8377;");
	$("#OprLmt").find("h5").append(" &#8377;");
	$("#UnLmt").find("h5").append(" &#8377;");
	$("#AvlLmt").find("h5").append(" &#8377;");
	
	$("#SancPer").find("p").text($(data).find("SancPer").text());
	$("#OprPer").find("p").text($(data).find("OprPer").text()+"%");
	$("#UnPer").find("p").text($(data).find("UnPer").text()+"%");
	$("#AvlPer").find("p").text($(data).find("AvlPer").text()+"%");
	
	$($("#SancPer").find("div")[1]).css("width", "100%");
	$($("#OprPer").find("div")[1]).css("width", $(data).find("OprPer").text()+"%");
	$($("#UnPer").find("div")[1]).css("width", $(data).find("UnPer").text()+"%");
	$($("#AvlPer").find("div")[1]).css("width", $(data).find("AvlPer").text()+"%");
	
	//var data1 = UI_getdata(GetCurrentUser(),'','','','',"LSW_sRecvblDtl");
	
	//$("#PAN").text($(data1).find("PAN").text());
	//$("#NFN").text($(data1).find("NFN").text());
	//$("#PAV").text($(data1).find("PAV").text());
	//$("#NFV").text($(data1).find("NFV").text());
	
	var	TransTyp = UI_IntrData($(window.parent.document).find("#CpmCd").val(),"Dealer","","","","SCF_SFEPGetCusType","INTR1");

	var MnuData = UI_getdata($(TransTyp).find('LoginType').text(),$(window.parent.document).find("#LogUsr").val(),'','','',"SCF_SGetTransMnu");
	
	 $(".TransMnu").append(MnuData.replace('<Resultset><a><Menu>','').replace('</Menu></a></Resultset>',''));
	
	
	
	var op = UI_getdata($(TransTyp).find('LoginType').text(),'','','','',"SCF_SGetDashBrdMnu");
	
	
	for(i=0;i<$(op).find('Menuid').length;i++)
	{
	$("#"+$($(op).find('Menuid')[i]).text()).removeClass('TBR')
	$("#"+$($(op).find('Menuid')[i]).text()).attr('name',$($(op).find('MenuClr')[i]).text())
	}
	$(".TBR").remove();
	$(".DashTrg").click();
	
	/*	//	My Liabilities
	$("#BTNLiab").click();
	
	// My Accepted Receivables
	$("#BTNAcctRecv").click();
	
	//Purchase Order
	$("#BTNPO").click();
	
	//CP Limit
	$("#BTNCPLimit").click();
	
	//My Relationship
	$("#BTNMyRel").click();
	
	//Transaction List
	$("#BTNTranLst").click();*/
	
	//var op = UI_getdata(GetCurrentUser(),'','','','',"");

	SalesDashGrid();
	GetDrpDwnVal();
	



}

function LCR()
{
alert("hi");	
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
 
 /*
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
 	

 } */
 
 
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
   //  $("#BTNTRIGAPPL").hide();	
     $(".Grid").show();
 		}
 	else if (event == "Page")
 		{
 		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LBSI_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

 		$("#LBSI_SUBLONTYPE").html("")
 		$("#LBSI_SUBLONTYPE").append($(SubLoanType).find("RESULT").html());
 		$('#LBSI_SUBLONTYPE').material_select();
 		$(".Grid").show();
 		
 		if($(SubLoanType).find("RESULT").html() == '<option value="">Select</option>')
 			{ 			
 			$(".SUBLON").hide();
 			$(".PRIME").hide();
 			$(".DUP").show();
 			$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
			$("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
			$(".Grid").show();
 			//$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
 			}
 		   else
			{
		   	 $(".SUBLON").show();
			 $(".PRIME").show();
			 $(".DUP").hide();
			 $("#LBSI_PRIMLONID").val('');
			 $("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			 $("#LBSI_SUBLONTYPE").addClass('LBSIMndtry');
			 $("#LBSI_PRIMLONID").next().find(".MndtryAstr").html("*");
			 $("#LBSI_PRIMLONID").addClass('LBSIMndtry');
			 $(".Grid").show();
			//$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			}
 		}
 	if($("#LBSI_LONTYPE").val()=="Registered Mortgage")
		{
		  $(".PRIME").show();
		 $(".SUBLON").hide();
		 $("#LBSI_PRIMLONID").val('');
		 $("#LBSI_PRIMLONID").next().find(".MndtryAstr").html("*");
		 $("#LBSI_PRIMLONID").addClass('LBSIMndtry');
		 $(".Grid").show();
		}
 	else if($("#LBSI_LONTYPE").val()=="Re-Punch")
	  {
	  $(".PRIME").show();
	  $(".SUBLON").hide();
	  $("#LBSI_PRIMLONID").val('');
	  $("#LBSI_PRIMLONID").next().find(".MndtryAstr").html("*");
	  $("#LBSI_PRIMLONID").addClass('LBSIMndtry');
	  $(".Grid").show();
	 }
 	else if($("#LBSI_LONTYPE").val()=="Fresh Loans")
 		{
        $(".SUBLON").hide();
 	     $(".PRIME").hide();
 	     $(".Grid").hide();	
 	    $("#LBSI_PRIMLONID").val('');
 	    $("#LBSI_PRIMLONID").removeClass('LBSIMndtry');
 	    $("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
 		}
 	else if($("#LBSI_LONTYPE").val()=="BT")
	{
   // $(".SUBLON").hide();
     $(".PRIME").hide();
     $(".Grid").hide();	
    $("#LBSI_PRIMLONID").val('');
    $("#LBSI_PRIMLONID").removeClass('LBSIMndtry');
   // $("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
	}
 	else if($("#LBSI_LONTYPE").val()=="Existing Loans")
	{
   // $(".SUBLON").hide();
    $(".PRIME").hide();
    $(".Grid").hide();	
    $("#LBSI_PRIMLONID").val('');
    $("#LBSI_PRIMLONID").removeClass('LBSIMndtry');
    $("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
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
		else
		{
			$(".DIRDISB").hide();
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
   $("#LBSI_PRIMLONID").next().addClass('active');
 //  $("#BTNTRIGAPPL").click();
   
 }
 
 function GetOldPrcsid()
 {
	 
	     var LBSI_PRIMLONID=$("#LBSI_PRIMLONID").val()
		var xml=UI_getdata(LBSI_PRIMLONID,"","","","","LSW_SGETOLDPRCSID")
		var OLDPRCID=$(xml).find('OLDPRCSID').text() 
		$("#OLDPRCSID").val(OLDPRCID)
}
 
 function ChkPrimLoanID()
 {
	 
	  var LBSI_PRIMLONID=$("#LBSI_PRIMLONID").val()
		var xml=UI_getdata(LBSI_PRIMLONID,"","","","","LSW_SCHKPRIMARYLOANID")
		var Result =$(xml).find('Result').text() 
		var Alert =$(xml).find('Alert').text() 
	if(Result=="NO")
		{
		alert(Alert)
		$("#LBSI_PRIMLONID").val('')
		$("#LBSI_PRIMLONID").next().removeClass('active');
		$("#LBSI_PRIMLONID").removeClass('active');
		return false
        }
	 
	 
 }




function ReEvlt(){
	var CHK="";
	
	var ActvtyID = '163500_87094_HomeEqutity_process_SendToCredit';
	//var IOP=window.location.origin+"/jw/web/json/monitoring/activity/reevaluate?activityId="+ActvtyID+"&j_username=admin&j_password=THeme@987"
	var processId='';
	var activityID = '';
	var IOP=window.location.origin+"/jw/web/json/monitoring/activity/reevaluate?activityId="+ActvtyID;
	 var Result=UI_getdata(processId,activityID,"","","","Sam_sWFReevaluate");
	  
	
	  $.ajax({
                 type: 'POST',
                 url: IOP,
                // data: params,
                // dataType : "text",
				/* beforeSend: function(request) {
    request.setRequestHeader("referrer", "http://10.1.0.4:8082");
  },*/
				 async:false,
                 xhrFields: {
                     withCredentials: true
                 },
                 success: function(data) {
                    // OP="Accepted";
					 
					 alert("Activity Re-evaluated");
                 },
                 error: function(data) {
                     try {
                         // do nothing for now
                        // if (callback.error) {
                          //   callback.error.call(thisWindow, data);
						  	//alertify.alert(LoadFrmXML("V0127"));
								//window.alert(LoadFrmXML("V0127"));
						  //alertify.alert('Error: File not Accepted');
                        // }
                     }
                     catch (e) {}
                 }
               })
}


function GridControlGENERAL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
		 "destroy": true,
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
		
			    var rowno = meta.row;	
				var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data.split('|')[1]+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" name="'+data.split('|')[1]+'" data-toggle="modal" onclick="DshBrdData(this);" data-target="#ADDKYCDocModal" href="#">'+data.split('|')[0]+'</a>'
				HTML = HTML + ' </div></span>'				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
	         } 
			 },
    	   ],
         "fnDrawCallback": function (oSettings) {
        }
        });
	  return popTableModPageGrid1;
}



function DshBrdData(id)
{
	var BRID=$(id).attr('name');
	var BrName=$(id).text();
	$("#BRANCHNAME").val('BRANCH :'+BrName);
	$("#BRANCHID").val(BRID);
	$("#BRPopup").click();
	 $("#BRViewRpt").trigger('click')
	//FncallMyApplDshBrd(this,'Table4',{spname:'LSW_SSALESDASHGRIDPOUP',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:BRID,MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','DSHBRD');

	//$("#Table4_wrapper").find('.row').hide();

}



function GridControlDSHBRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
		 "destroy": true,
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 2, "render": function ( data, type, row, meta ) {                            
		
			    var rowno = meta.row;	
				var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData2(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
				HTML = HTML + ' </div></span>'				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
	         } 
			 },
			   { targets: 3, "render": function ( data, type, row, meta ) {                            
					
				    var rowno = meta.row;	
					var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
					HTML = HTML + '<div class="HyperControls">'
					HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData2(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
					HTML = HTML + ' </div></span>'				
					HTML = HTML + '</span>'; 
						 
					var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
		         } 
				 },
			   { targets: 4, "render": function ( data, type, row, meta ) {                            
					
				    var rowno = meta.row;	
					var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
					HTML = HTML + '<div class="HyperControls">'
					HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData2(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
					HTML = HTML + ' </div></span>'				
					HTML = HTML + '</span>'; 
						 
					var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
		         } 
				 },
			   { targets: 5, "render": function ( data, type, row, meta ) {                            
					
				    var rowno = meta.row;	
					var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
					HTML = HTML + '<div class="HyperControls">'
					HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData2(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
					HTML = HTML + ' </div></span>'				
					HTML = HTML + '</span>'; 
						 
					var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
		         } 
				 },
				   { targets: 6, "render": function ( data, type, row, meta ) {                            
						
					    var rowno = meta.row;	
						var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
						HTML = HTML + '<div class="HyperControls">'
						HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData2(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
						HTML = HTML + ' </div></span>'				
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
						return htmldata[0].outerHTML; 
			         } 
					 },
					   { targets: 7, "render": function ( data, type, row, meta ) {                            
							
						    var rowno = meta.row;	
							var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
							HTML = HTML + '<div class="HyperControls">'
							HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData2(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
							HTML = HTML + ' </div></span>'				
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
							return htmldata[0].outerHTML; 
				         } 
						 },
						   { targets: 8, "render": function ( data, type, row, meta ) {                            
								
							    var rowno = meta.row;	
								var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
								HTML = HTML + '<div class="HyperControls">'
								HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData2(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
								HTML = HTML + ' </div></span>'				
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
								return htmldata[0].outerHTML; 
					         } 
							 },
						 { targets: 9, "render": function ( data, type, row, meta ) {                            
								
							    var rowno = meta.row;	
								var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
								HTML = HTML + '<div class="HyperControls">'
								HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData2(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
								HTML = HTML + ' </div></span>'				
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
								return htmldata[0].outerHTML; 
					         } 
							 },
							 { targets: 10, "render": function ( data, type, row, meta ) {                            
									
								    var rowno = meta.row;	
									var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
									HTML = HTML + '<div class="HyperControls">'
									HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData2(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
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
	  return popTableModPageGrid1;
}


function DshBrdData2(id)
{
	var index=$(id).closest('td').index()
	$("#ACTNAME").val($($(id).closest('table').find('thead th')[index]).text());
	$("#CATGRY").val($($(id).closest('tr').find('td')[1]).text());
	$("#CATUSRID").val($($(id).closest('tr').find('td')[0]).text());
    $("#CATUSRNAME").val($("#BRANCHNAME").val() +':'+$($(id).closest('tr').find('td')[0]).text()+'('+$($(id).closest('tr').find('td')[1]).text()+') :'+$($(id).closest('table').find('thead th')[index]).text())
	
	$("#DataPopup").click();
	 $("#DataViewRpt").trigger('click')
	//FncallMyApplDshBrd(this,'Table4',{spname:'LSW_SSALESDASHGRIDPOUP',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#LogUsr').val(),brid:BRID,MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||3','DSHBRD');

	//$("#Table4_wrapper").find('.row').hide();

}


function DataPerfRpt1()
{
	$("#DataPerfRpt").click();
	$("#DataViewPerfRpt").trigger('click')


}


function DataPerfRpt2()
{
	
	$("#DataPerfRptIPopup").click();
	$("#DataViewPerfRptI").trigger('click')

}


function DataPerfRpt3()
{
	
	$("#DataPerfRptIIPopup").click();
	$("#DataViewPerfRptII").trigger('click')
}


function GridControlDSHBRD2 (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
		 "destroy": true,
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
		
			    var rowno = meta.row;	
				var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" name="'+data+'" data-toggle="modal" onclick="DshBrdData(this);" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
				HTML = HTML + ' </div></span>'				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
	         } 
			 },
    	   ],
         "fnDrawCallback": function (oSettings) {
        }
        });
	  return popTableModPageGrid1;
}




function SalesBSMDashbrdTrig()
{	
	$("#BRViewRpt").click();
}

function BSMRPTCHNG(VAL)
{
	if(VAL=='Branches')
	{
	$('.reportee').hide();
	$('#BTNAcctRecv').click();
	$('.branch').show();
	$('#Branches').closest('li').addClass('active');
	$('#Reportee').closest('li').removeClass('active');
		
		
	}
	else if(VAL=='Reportee')
	{
		$('.reportee').show();
		$('#BTNreportee').click();
		$('.branch').hide();	
		$('#Reportee').closest('li').addClass('active');
		$('#Branches').closest('li').removeClass('active');
			
		
	}

}






function GridControlDSHBRDWTHHREF (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
		 "destroy": true,
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
		
			    var rowno = meta.row;	
				var HTML =	'<span class="InitWF1"><input type="text" style="display:none"  value="'+data+'" id="BRNCHID|'+rowno+'"  name="BRNCHID" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="">' +data
				HTML = HTML + ' </div></span>'				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
	         } 
			 },
    	   ],
         "fnDrawCallback": function (oSettings) {
        }
        });
	  return popTableModPageGrid1;
}
