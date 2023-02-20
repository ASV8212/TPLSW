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
  //   $("#BTNTRIGAPPL").hide();	
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
         $('input[name="LBSI_CUSTYPE"]').prop('checked', false);
		 $('input[name="LBSI_CUSTYPE"]').attr("disabled",true)
		 $('.INDIMNDRY').removeClass('LBSIMndtry');
		 $('.MNST').find('.MndtryAstr').html("")
		 
		}
 	else if($("#LBSI_LONTYPE").val()=="Re-Punch")
	  {
	  $(".PRIME").show();
	  $(".SUBLON").hide();
	  $("#LBSI_PRIMLONID").val('');
	  $("#LBSI_PRIMLONID").next().find(".MndtryAstr").html("*");
	  $("#LBSI_PRIMLONID").addClass('LBSIMndtry');
	  $(".Grid").show();
         $('input[name="LBSI_CUSTYPE"]').prop('checked', false);
		 $('input[name="LBSI_CUSTYPE"]').attr("disabled",true)
		 $('.INDIMNDRY').removeClass('LBSIMndtry');
		 $('.MNST').find('.MndtryAstr').html("")
	 }
 	else if($("#LBSI_LONTYPE").val()=="Fresh Loans")
 		{
        $(".SUBLON").hide();
 	     $(".PRIME").hide();
 	     $(".Grid").hide();	
 	    $("#LBSI_PRIMLONID").val('');
 	    $("#LBSI_PRIMLONID").removeClass('LBSIMndtry');
 	    $("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
		 $('input[name="LBSI_CUSTYPE"]').attr("disabled",false)
		 $('.INDIMNDRY').addClass('LBSIMndtry');
		  $('.MNST').find('.MndtryAstr').html("*")
 		}
 	else if($("#LBSI_LONTYPE").val()=="BT")
	{
   // $(".SUBLON").hide();
     $(".PRIME").hide();
     $(".Grid").hide();	
    $("#LBSI_PRIMLONID").val('');
    $("#LBSI_PRIMLONID").removeClass('LBSIMndtry');
   // $("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
    $('input[name="LBSI_CUSTYPE"]').attr("disabled",false)
	$('.INDIMNDRY').addClass('LBSIMndtry');
	$('.MNST').find('.MndtryAstr').html("*")
	}
 	else if($("#LBSI_LONTYPE").val()=="Existing Loans")
	{
   // $(".SUBLON").hide();
    $(".PRIME").hide();
    $(".Grid").hide();	
    $("#LBSI_PRIMLONID").val('');
    $("#LBSI_PRIMLONID").removeClass('LBSIMndtry');
    $("#LBSI_SUBLONTYPE").removeClass('LBSIMndtry');
	$('input[name="LBSI_CUSTYPE"]').attr("disabled",false)
	$('.INDIMNDRY').addClass('LBSIMndtry');
	$('.MNST').find('.MndtryAstr').html("*")
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
	var SourceBy=$("#LBSI_SOURCBY").val();
	var BranchID=$("#LBSI_BRANCH").val();
	
    $("#LBSI_CONECTNAME").val('');
	$("#LBSI_CONECTNAME").find('option').remove()
	$("#LBSI_CONECTNAME").material_select("destroy");
	$('#LBSI_CONECTNAME').material_select(); 
	
    var FRWDRESULT=UI_getdata("",SourceBy,BranchID,"","","LSW_SGETSRCDATA")
	 $("#LBSI_CONECTNAME").append($(FRWDRESULT).find("FRWDRESULT").html());
	 $('#LBSI_CONECTNAME').material_select(); 
 	
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
	 
	 var branch=$("#DMY4").val().split("|")[0]
	 var Branch=UI_getdata(branch,$("#LogUsr").val(),"","","","LSW_SGETBENCH")
	 $("#LBSI_BRANCH").append($(Branch).find("RESULT").html());
	 $('#LBSI_BRANCH').material_select(); 
 }
 function GetExistApplcant()
 {
   $("#LBSI_PRIMLONID").next().addClass('active');
  // $("#BTNTRIGAPPL").click();
   
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
	 if($("#LBSI_PRIMLONID").val()!="")
	 {
	  var LBSI_PRIMLONID=$("#LBSI_PRIMLONID").val()
	    var LBSI_LONTYPE=$("#LBSI_LONTYPE").val()
		var xml=UI_getdata(LBSI_PRIMLONID,LBSI_LONTYPE,"","","","LSW_SCHKPRIMARYLOANID")
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

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			
		   if(row[15]=="InitWF1")
			   {
			   var rowno = meta.row;	
				var HTML =	'<span class="InitWF1"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'"  name="APPLNO" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
				HTML = HTML + ' </div></span>'
				
				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
			   }
		   else{
			   var rowno = meta.row;	
			   var HTML =	'<span class="">'+data;
			   HTML = HTML + '</span>'; 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
		   }
			     		
				
	         } 
			 },
			 
			  { targets: 5, "render": function ( data, type, row, meta ) {                            
			
		  if(row[15]=="InitWF1")
			   {
		 
		 	 var rowno = meta.row;	 
						var HTML =	'<span>' + CURCommaSep(data); 			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						
							return htmldata[0].outerHTML;   
		 
			   }
			   else
			   {
				 return data;  
			   }
				
	         } 
			 },
			 
			 { targets: 9, "render": function ( data, type, row, meta ) {                            
			
		  if(row[15]=="InitWF1")
			   {
		 
		 var dy = "";
		 
		 if (data == "1")
		 {
			 dy = data + " Day";
		 }
		 else if (data=="0")
		 {
			 dy = "Today";
		 }
		 else
		 {
			dy = data + " Days";
		 }
		 
		 
		  var Clr = "";
		 
		 if (data == "Today")
		 {
		 
		Clr="Btxt28";
		 
		 }
		 else if (parseInt(data) >= 10 )
		 {
			 Clr="Btxt29";
		 }
		 else
		 {
			
			Clr="Btxt28";
			
		 }
		 	 var rowno = meta.row;	 
						var HTML =	'<span class="'+Clr+'">' + dy; 			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						
							return htmldata[0].outerHTML;   
		 
			   }
			   else
			   {
				 return data;  
			   }
				
	         } 
			 }
	        	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	  return popTableModPageGrid1;
 }
 
 function GridControlGENERALQUEUE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			
		   if(row[15]=="InitWF1")
			   {
			   var rowno = meta.row;	
				var HTML =	'<span class="InitWFview"><input type="text" style="display:none" value="'+data+'" id="APPLNO'+rowno+'"  name="APPLNO" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
				HTML = HTML + ' </div></span>'
				
				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
			   }
		   else{
			   var rowno = meta.row;	
			   var HTML =	'<span class="">'+data;
			   HTML = HTML + '</span>'; 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
		   }
			     		
				
	         } 
			 },
			 
			  { targets: 5, "render": function ( data, type, row, meta ) {                            
			
		  if(row[15]=="InitWF1")
			   {
		 
		 	 var rowno = meta.row;	 
						var HTML =	'<span>' + CURCommaSep(data); 			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						
							return htmldata[0].outerHTML;   
		 
			   }
				
	         } 
			 },
			 
			 { targets: 9, "render": function ( data, type, row, meta ) {                            
			
		  if(row[15]=="InitWF1")
			   {
		 
		 var dy = "";
		 
		 if (data == "1")
		 {
			 dy = data + " Day";
		 }
		 else if (data=="0")
		 {
			 dy = "Today";
		 }
		 else
		 {
			dy = data + " Days";
		 }
		 
		 
		  var Clr = "";
		 
		 if (data == "Today")
		 {
		 
		Clr="Btxt28";
		 
		 }
		 else if (parseInt(data) >= 10 )
		 {
			 Clr="Btxt29";
		 }
		 else
		 {
			
			Clr="Btxt28";
			
		 }
		 	 var rowno = meta.row;	 
						var HTML =	'<span class="'+Clr+'">' + dy; 			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						
							return htmldata[0].outerHTML;   
		 
			   }
				
	         } 
			 }
	        	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	  return popTableModPageGrid1;
 }
 
 
 function GridControlPODDETL (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
 {
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

         'aaData': dtData,
         "aoColumns": dtcolumn,  
         
         "bAutoWidth": false,

         "autoWidth": false,

         'bPaginate': true,

        "aaSorting": [],

         "pageLength": 100,

         "bDeferRender": true,

         'bInfo': true,

         'bFilter': true,

         "bDestroy": true,
		 "destroy": true,

         "bJQueryUI": true,

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 1, "render": function ( data, type, row, meta ) {                            
			
			var rowno = meta.row;	 
			var HTML =	'<span><input type="text" id="OKYD_TARGETDT'+rowno+'"  name="OKYD_TARGETDT'+rowno+'" maxlength="10" class="form-control form-control IsNumberFields ISDatefield ">';			 
			HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=OKYD_TARGETDT'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=OKYD_TARGETDT'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      		
				
	         } 
			 },
			   { targets: 2, "render": function ( data, type, row, meta ) {                            
					
				   if (data == "")
					   {
					var rowno = meta.row;	 
					var HTML =	'<span><input type="text" id="OKYD_PODID'+rowno+'"  name="OKYD_PODID'+rowno+'" maxlength="30" class="form-control form-control  ">';			 
					HTML = HTML + '</span>'; 
						 
					var htmldata = $(HTML);
						

					if ($(htmldata).find('[name=OKYD_PODID'+rowno+']').hasClass("IsCURCommaFields"))
						{
						data = CURCommaSep(data);
						}
						
					
						$(htmldata).find('[name=OKYD_PODID'+rowno+']').attr("value",data);

						
						return htmldata[0].outerHTML;  
					   }
				   
						
			         } 
					 },
	{ targets: 3, "render": function ( data, type, row, meta ) {                            
							

							var rowno = meta.row;	 
							var HTML =	'<span><input type="text" id="OKYD_DISBTO'+rowno+'"  name="OKYD_DISBTO'+rowno+'" maxlength="30" class="form-control NoSpecialChar ">';			 
							HTML = HTML + '</span>'; 
								 
							var htmldata = $(HTML);
								

							if ($(htmldata).find('[name=OKYD_DISBTO'+rowno+']').hasClass("IsCURCommaFields"))
								{
								data = CURCommaSep(data);
								}
								
							
								$(htmldata).find('[name=OKYD_DISBTO'+rowno+']').attr("value",data);

								
								return htmldata[0].outerHTML;  
							  
						   
								
					         } 
							 },
							 
	{ targets: 4, "render": function ( data, type, row, meta ) {                            
				
		

									var rowno = meta.row;	 
									var HTML =	'<span><button type="button" id="PODSave'+rowno+'" data-aria="" data-form="PersonalInfo" style="width:35px;height:15px" class="btn btn-Syeloutline waves-effect waves-light PODSave">Save</button>';			 
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
 
 

 function GridControlDISPATCHOPS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
 {
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

         'aaData': dtData,
         "aoColumns": dtcolumn,  
         
         "bAutoWidth": false,

         "autoWidth": false,

         'bPaginate': true,

        "aaSorting": [],

         "pageLength": 100,

         "bDeferRender": true,

         'bInfo': true,

         'bFilter': true,

         "bDestroy": true,
		 "destroy": true,

         "bJQueryUI": true,

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 3, "render": function ( data, type, row, meta ) {                            
			
			var rowno = meta.row;	 
			var HTML =	'<span><input type="text" id="OKYD_LNAMT'+rowno+'"  name="OKYD_LNAMT'+rowno+'" maxlength="10" class="form-control DSVLBLG IsNumberFields IsCURCommaFields ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=OKYD_LNAMT'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=OKYD_LNAMT'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      		
				
	         } 
			 },
			 
			   { targets: 6, "render": function ( data, type, row, meta ) {                            
					
					var rowno = meta.row;	 
					var HTML =	'<span><input type="checkbox" class="custom-control-input" id="CADI_FILERECV'+rowno+'" name="CADI_FILERECV'+rowno+'">';			 
					HTML = HTML + '<label class="custom-control-label" for="CADI_FILERECV'+rowno+'"></label></span>'; 
						 
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
 
 function GridControlCREDITOPSQ (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},	
		{ targets: 0, "render": function ( data, type, row, meta ) {                            
			
		   if(row[11]=="InitWF1")
			   {
			   var rowno = meta.row;	
				var HTML =	'<span class="InitWF1"><input type="text" style="display:none" value="'+data+'" id="UserID'+rowno+'"  name="UserID" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
				HTML = HTML + ' </div></span>'
				
				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
			   }
		   else{
			   var rowno = meta.row;	
			   var HTML =	'<span class="">'+data;
			   HTML = HTML + '</span>'; 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
		   }
			     		
				
	         } 
			 }
     	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 return popTableModPageGrid1;
 }
 
 function GridControlOPSQD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},	
	{ targets: 0, "render": function ( data, type, row, meta ) {                            
			
		   if(row[7]=="InitWF1")
			   {
			   var rowno = meta.row;	
				var HTML =	'<span class="InitWF2"><input type="text" style="display:none" value="'+data+'" id="UserID'+rowno+'"  name="UserID" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
				HTML = HTML + ' </div></span>'
				
				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
			   }
		   else{
			   var rowno = meta.row;	
			   var HTML =	'<span class="">'+data;
			   HTML = HTML + '</span>'; 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
		   }
			     		
				
	         } 
			 }
     	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 return popTableModPageGrid1;
 }
 
 function GridControlOPSQDFOR (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			
			var rowno = meta.row;	
			
					
			
			var HTML =	'<span class="InitWF1"><input type="text" style="display:none" value="'+data+'" id="OKYD_APPLNO'+rowno+'"  name="OKYD_APPLNO" maxlength="10" class="form-control ">';			
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
	 return popTableModPageGrid1;
 }
 
 function GridControlOPS (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			
		 	   if(row[11]=="InitWF1")
			   {
			   var rowno = meta.row;	
				var HTML =	'<span class="InitWF1"><input type="text" style="display:none" value="'+data+'" id="Vendr'+rowno+'"  name="Vendr" maxlength="10" class="form-control ">';			
				HTML = HTML + '<div class="HyperControls">'
				HTML = HTML + '<a type="button" class="Btxt4" data-toggle="modal" data-target="#ADDKYCDocModal" href="#">'+data+'</a>'
				HTML = HTML + ' </div></span>'
				
				
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					return htmldata[0].outerHTML; 
			   }
		   else{
			   var rowno = meta.row;	
			   var HTML =	'<span class="">'+data;
			   HTML = HTML + '</span>'; 
				var htmldata = $(HTML);
				return htmldata[0].outerHTML; 
		   }
				
	         } 
			 }
	        	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	  return popTableModPageGrid1;
 }

 