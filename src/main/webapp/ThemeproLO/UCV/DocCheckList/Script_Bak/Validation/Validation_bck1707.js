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

 	var LoanType = UI_getdata("LONTYPE","","","","","LSW_SGETPRODVAL");

 	$("#LBSI_LONTYPE").html("")
 	$("#LBSI_LONTYPE").append($(LoanType).find("RESULT").html());
 	 $(".SUBLON").hide();
     $(".PRIME").hide();
     $(".DUP").show();
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
 			//$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("");
 			}
 		   else
			{
		   	 $(".SUBLON").show();
			 $(".PRIME").show();
			 $(".DUP").hide();
			//$("#LBSI_SUBLONTYPE").parent().next().find(".MndtryAstr").html("*");
			}
 		}
 	if($("#LBSI_LONTYPE").val()=="Registered Mortgage")
		{
		  $(".PRIME").show();
		 $(".SUBLON").hide();
		}

 }
 
 function CheckDocMndtry(TableID,FldClas,HDR)
 {
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).length>0)
				  {
				  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).attr("type")=="text")
						  {
					  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=text]').val()=="")
						  {
						  if($(".FormPageTab li.active").text() == 'Co-Applicant' && ($($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() != "ADDRESS PROOF 2" && $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() != "SIGN PROOF" && $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() != "DOB PROOF"))
							  {
							  RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
					    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
					    		return RTNVAL;
							  }
						  else if($(".FormPageTab li.active").text() == 'Guarantor' && ($($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() == "ID PROOF" || $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text()=='ADDRESS PROOF 1'))
							  {
							  RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
					    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
					    		return RTNVAL;
							  }
						  else if(($(".FormPageTab li.active").text() == 'Applicant') && (($("#HIDDENCUSTYP").val()=="Individual" && $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() != "ADDRESS PROOF 2")||($("#HIDDENCUSTYP").val()!="Individual"))){
							  RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
					    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
					    		return RTNVAL;
						  }
						  
						  }
						  }
				  
				  else if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).attr("type")=="radio"){
					  var atLeastOneChecked=false;
					  
					  $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=radio]').each(function() {
		    		         if ($(this).prop("checked") == true) {
		    		             atLeastOneChecked = true;  		             
		    		             
		    		         }
		    		         
		    		     });
		    		  
		    		
					  
					  
					  if(atLeastOneChecked == false)
					  {
						  if($(".FormPageTab li.active").text() == 'Co-Applicant' && ($($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() != "ADDRESS PROOF 2" && $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() != "SIGN PROOF" && $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() != "DOB PROOF"))
						  {
					  RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
			    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
			    		return RTNVAL;
						  }
						  else if($(".FormPageTab li.active").text() == 'Guarantor' && ($($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() == "ID PROOF" || $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text()=='ADDRESS PROOF 1'))
						  {
						  RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
				    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
				    		return RTNVAL;
						  }
					  else if(($(".FormPageTab li.active").text() == 'Applicant') && (($("#HIDDENCUSTYP").val()=="Individual" && $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() != "ADDRESS PROOF 2")||($("#HIDDENCUSTYP").val()!="Individual"))){
						  RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
				    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
				    		return RTNVAL;
					  }
					  }
				  }
				  else if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).attr("type")=="checkbox"){
					  var allChecked = true;
					  $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).each(function(index, element){
			        	  if(!element.checked){
			        	    allChecked = false;
			        	   // return false;
			        	  } 
			        	});
			        	if (allChecked == false)
			            {
			        		RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
				    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
				    		return RTNVAL;
			            }
					  
				  }
				  }
			 }
		/* if (i <= 4)
			 {
		  if ($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[0]) == "")
		  {
			  RTNVAL = "No Data Available in " + $($($("#Table2 thead").find('tr')[0]).find('th')[5]).text()
	    		+ " for " + $($($("#Table2 tbody").find('tr')[0]).find('td')[0]).text() + "- KYC";
	    		return RTNVAL; 
			 }*/
		  
		     /*if ($($($("#Table2 tbody").find("tr")[i]).find('td')[5]).text() == "Collected")
		    	 {
		    	 
		    	if ($($($("#Table2 tbody").find("tr")[i]).find('td')[2]).text() == "") 
		    		{
		    		RTNVAL = "No Data Available in " + $($($("#Table2 thead").find('tr')[0]).find('th')[2]).text()
		    		+ " for " + $($($("#Table2 tbody").find('tr')[0]).find('td')[0]).text() + "- KYC";
		    		return RTNVAL;
		    		}
		    	
		    	if ($($($("#Table2 tbody").find("tr")[i]).find('td')[3]).text() == "") 
	    		{
	    		RTNVAL = "No Data Available in " + $($($("#Table2 thead").find('tr')[0]).find('th')[3]).text()
	    		+ " for " + $($($("#Table2 tbody").find('tr')[0]).find('td')[0]).text() + "- KYC";
	    		return RTNVAL;
	    		}
		    	
		    	if ($($($("#Table2 tbody").find("tr")[i]).find('td')[4]).find("input[type=checkbox]").prop("checked") == false) 
	    		{
	    		RTNVAL = "No Data Available in " + $($($("#Table2 thead").find('tr')[0]).find('th')[4]).text()
	    		+ " for " + $($($("#Table2 tbody").find('tr')[0]).find('td')[0]).text() + "- KYC";
	    		return RTNVAL;
	    		}
		    	 
		    	 }*/
		  
		  if ($('input[name='+$($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[6]).find('input[type=radio]').attr("name")+']:checked').val() == "Deferred")
	    	 {
	    	 
	    	if ($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[7]).find('input[type=text]').val() == "") 
	    		{
	    		//RTNVAL = "No Data Available in " + $($($("#Table2 thead").find('tr')[0]).find('th')[7]).text()
RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[7]).text() 
	    		+ " for " + $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[1]).text() + "-"+HDR;
	    		return RTNVAL;
	    		}
	    	
	    	 
	    	 }
		    	 
		    	 
		    	 
		  }
	 return RTNVAL;
 }
 
 function CheckDocType()
 {
	 var DocType=$("#DOCU_KYC").val()
	 
	 if(DocType=="Others")
		 {
		    $(".OKYC").hide()
		 }
	 else
		 {
		   $(".OKYC").show()
		 }
 }
 

 function DocFldUpldHndlr(id,docu)
 {

 var Val=$(id).val()


 if($(id).closest('td').find('input[type="file"]').val()!="")
 {
     var domain= LoadFrmXML("RS001");
     var usrpwd= LoadFrmXML("RS002");
     var PrcsID=getUrlParam("PrcsID");
     var FormName= 'Verification_Upload';
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
       file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
 	     for(var i = 0;i<file_data.length;i++){
 			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
 	         fd.append("file_"+c, file_data[i]);
 	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
 			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
 			 vrsnno += $(op).find("VR").text()+',';
 			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
 			 {
 				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
 			 }
 	         descrptns += 'FieldDocument'+',';
 	     }
 	 }
 	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
     var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
	 
            var Filename  = names.replace(',','')
			var xml=UI_getdata(FileType,FileSize,Filename,"","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }	 

 var y=  names;
 /*var specialChars = "<>&#^|~`"
 var check = function(string){
     for(i = 0; i < specialChars.length;i++){
         if(string.indexOf(specialChars[i]) > -1){
             return true
         }
     }
     return false;
 }

 if(check(y) == false){
     // Code that needs to execute when none of the above is in the string
 }else{
     alert('File name contains special character please remove and upload');
 	$(id).closest('td').find('input[type="file"]').val('')
 	return;
 }*/
 	 
  ajaxindicatorstart("Uploading.. Please wait");
 	    $.ajax({
 	        url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val(),
 	        data: fd,
 			async:false,
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
 				$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
 				$(id).closest('td').find('input[type="file"]').attr('disabled',true)
 				$(id).closest('td').find('input[type="file"]').val('');
 				$(id).closest('td').find('input[type="file"]').hide();
 			//	$(id).closest('td').replace('','');
 			//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
 				
 				//
 				
 				$(id).closest('.md-form').find('span').remove()
 				 $(id).val('')
 		
 			    $(id).val(data.split('~')[2])
 				var UPLOAD=docu+'UPLOAD'
 				$('#'+UPLOAD).hide();
 				$('.'+docu).show();
 				$(".DDV").show();
 				$(id).closest('.md-form').append('<span class="name">'+names.slice(0,-1)+'</span>');

 					ajaxindicatorstop();
 					alert(LoadFrmXML("V0118"));
 					return
 					
 				}	
 					 ajaxindicatorstop(); 
 	        },
 	        failure:function(data)
 	        {
 	     		  ajaxindicatorstop();
 					alert(LoadFrmXML("V0119"));
 					return
 	        	
 	        }
 	    });
 		
 		  ajaxindicatorstop();
 		  }
 		  else{
 		  
 		  alert('select the file to upload');
 		  }

 		 

 	  
 }
 
function GridControlDetailKYC (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
 {
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

         'aaData': dtData,
         "aoColumns": dtcolumn,  
         
         "bAutoWidth": false,

         "autoWidth": false,

         'bPaginate': false,

        "aaSorting": [],

        // "pageLength": 5,

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
           	  {
       			 targets: 0, "render": function ( data, type, row, meta ) {
       				var rowno = meta.row; 
       				if(row[0]=="Q")
       					{
           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
        				HTML = HTML + '</span>';  
        				var htmldata = $(HTML);				
        				return htmldata[0].outerHTML;
       					}
       				else
       					{
       					var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none" class="DelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
        				HTML = HTML + '</span>';  
        				var htmldata = $(HTML);				
        				return htmldata[0].outerHTML;
       					}
       				  
       			 }
           	  },
       		 { targets: 2, "render": function ( data, type, row, meta ) {                            
       			 
       			 if(($("#HIDDENID").val()=="BSM"||$("#HIDDENACT").val()=="Y")&&($("#HIDDENCUSTYP").val()=="Individual")&&(row[1]=="ID PROOF" || row[1]=="SIGN PROOF" || row[1]== "DOB PROOF"|| row[1]=="ADDRESS PROOF 1" || row[1]== "ADDRESS PROOF 2")&& row[6]!="Collected")
       				 {
       				var rowno = meta.row;       			 
          			 
       	       		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary "  onchange = "NAMEOFDOCONCHNG(this);"id="KYCD_DOCNAME'+rowno+'" name="KYCD_DOCNAME'+rowno+'">';
       	       			HTML = HTML + '<option value="">Select</option>';
       	       			if(row[1]=="ID PROOF" || row[1]=="SIGN PROOF" || row[1]== "DOB PROOF")
       	       				{
       	       			HTML = HTML + '<option value="PAN">PAN</option>';
       	       				}
							if(row[1]=="ID PROOF" || row[1]== "DOB PROOF")
       	       				{
       	       			HTML = HTML + '<option value="Aadhar">Aadhar</option>';
       	       				}
       	       			/*if(($(".FormPageTab li.active").text()=="Co-Applicant"||$(".FormPageTab li.active").text()=="Guarantor") && row[1]== "ADDRESS PROOF 1")
       	       				{
       	       			       HTML = HTML + '<option value="Form 60">Form 60</option>';
       	       				}*/
       	       			if(row[1]=="ID PROOF" || row[1]== "DOB PROOF" || row[1]== "ADDRESS PROOF 1")
       	       				{
       	       			HTML = HTML + '<option value="Voter ID">Voter ID</option>';
       	       				}
       	       			if(row[1]=="ID PROOF" ||row[1]=="SIGN PROOF" || row[1]== "ADDRESS PROOF 1" || row[1]== "DOB PROOF")
       	       				{
       	       			HTML = HTML + '<option value="Driving License">Driving License</option>';
       	       				}
       	       			
       	       			/*HTML = HTML + '<option value="Aadhar">Aadhar</option>';*/
       	       		if(row[1]=="ID PROOF" ||row[1]=="SIGN PROOF" || row[1]== "DOB PROOF" || row[1]== "ADDRESS PROOF 1")
       	       			{
       	       		HTML = HTML + '<option value="Passport">Passport</option>';
       	       			}
       	       	if(row[1]=="ADDRESS PROOF 1")
       	       		{
       	       	HTML = HTML + '<option value="Electricity Bill">Electricity Bill</option>';
       	       		}
       	     if(row[1]=="ADDRESS PROOF 2")
       	    	 {
       	    	HTML = HTML + '<option value="Utility Bill">Utility Bill</option>';
       	    	 }
       	  if(row[1]=="ADDRESS PROOF 1")
	       		{
	       	HTML = HTML + '<option value="Aadhar">Aadhar</option>';
	       		}
	     if(row[1]=="ADDRESS PROOF 2")
	    	 {
	    	HTML = HTML + '<option value="Aadhar">Aadhar</option>';
	    	 }
	     if($('.FormPageTab li.active div').text()=="Co-Applicant" && (row[1]=="ID PROOF" || row[1]=="SIGN PROOF" || row[1]== "DOB PROOF"|| row[1]=="ADDRESS PROOF 1" || row[1]== "ADDRESS PROOF 2"))
	     {
		    	HTML = HTML + '<option value="Affidavit">Affidavit</option>';
		    	 }
				 if(($('.FormPageTab li.active div').text()=="Co-Applicant"||$('.FormPageTab li.active div').text()=="Applicant")&&(row[1]=="ADDRESS PROOF 2")){
					 HTML = HTML + '<option value="BANK STATEMENT">BANK STATEMENT</option>';
				 }
				 
       	       			
       				   HTML=HTML+ '</select></span>';
       	       			var htmldata = $(HTML);
       	       			
       	       			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

       	  	 return htmldata[0].outerHTML;
       				 }
       			 else if(($("#HIDDENID").val()=="BSM"||$("#HIDDENACT").val()=="Y")&&($("#HIDDENCUSTYP").val()=="Non-Individual")&&(row[1]=="ID PROOF" || row[1]=="SIGN PROOF" || row[1]== "DOB PROOF"|| row[1]=="ADDRESS PROOF 1" || row[1]== "ADDRESS PROOF 2")&& row[6]!="Collected")
       				 {
       				var rowno = meta.row;
       				var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary "  onchange = "NAMEOFDOCONCHNG(this);"id="KYCD_DOCNAME'+rowno+'" name="KYCD_DOCNAME'+rowno+'">';
   	       			HTML = HTML + '<option value="">Select</option>';
   	       			if(row[1]=="ID PROOF" && $("#HIDDENCONST").val()=="Trust")
   	       				{
   	       				HTML = HTML + '<option value="TRUST DEED">TRUST DEED</option>';
   	       				}
   	       			if((row[1]=="ADDRESS PROOF 2")&&($("#HIDDENCONST").val()=="Partnership firms" || $("#HIDDENCONST").val()=="LLP"|| $("#HIDDENCONST").val()=="HUF"|| $("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"|| $("#HIDDENCONST").val()=="Proprietorship" || $("#HIDDENCONST").val()=="Society" || $("#HIDDENCONST").val()=="Trustee"))
   	       				{
   	       				HTML = HTML + '<option value="UTILITY BILL">UTILITY BILL</option>';
   	       				}
   	       			if((row[1]=="ID PROOF")&&($("#HIDDENCONST").val()=="Partnership firms" || $("#HIDDENCONST").val()=="LLP"|| $("#HIDDENCONST").val()=="HUF"|| $("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"|| $("#HIDDENCONST").val()=="Proprietorship" ||$("#HIDDENCONST").val()=="Trust" || $("#HIDDENCONST").val()=="Society" || $("#HIDDENCONST").val()=="Trustee"))
   	       				{
   	       				HTML = HTML + '<option value="PAN">PAN</option>';
   	       				}
   	       			if((row[1]=="ID PROOF" || row[1]=="ADDRESS PROOF 1")&&($("#HIDDENCONST").val()=="Partnership firms" || $("#HIDDENCONST").val()=="LLP"|| $("#HIDDENCONST").val()=="HUF"|| $("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"|| $("#HIDDENCONST").val()=="Proprietorship" ||$("#HIDDENCONST").val()=="Trust" || $("#HIDDENCONST").val()=="Society" || $("#HIDDENCONST").val()=="Trustee"))
   	       				{
   	       				HTML = HTML + '<option value="SHOPS and ESTB ACT CERTIFICATE">SHOPS and ESTB ACT CERTIFICATE</option>';
   	       				}
   	       			if((row[1]=="ID PROOF")&&($("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"))
   	       				{
   	       				HTML = HTML + '<option value="AOA WITH RC">AOA WITH RC</option>';
   	       				}
   	       			if((row[1]=="ID PROOF" || row[1]=="ADDRESS PROOF 1")&&($("#HIDDENCONST").val()=="Partnership firms" || $("#HIDDENCONST").val()=="LLP"|| $("#HIDDENCONST").val()=="HUF"|| $("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"|| $("#HIDDENCONST").val()=="Proprietorship" || $("#HIDDENCONST").val()=="Society" || $("#HIDDENCONST").val()=="Trustee"))
   	       				{
   	       				HTML = HTML + '<option value="SALES TAX RC">SALES TAX RC</option>';
   	       				}
		   	       	if((row[1]=="ID PROOF")&&($("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"))
		   	       		{
		   	       		HTML = HTML + '<option value="MOA WITH RC">MOA WITH RC</option>';
		   	       		}
   	       			if((row[1]=="ID PROOF" || row[1]=="ADDRESS PROOF 1")&&($("#HIDDENCONST").val()=="Partnership firms" || $("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"|| $("#HIDDENCONST").val()=="Proprietorship" || $("#HIDDENCONST").val()=="Society" || $("#HIDDENCONST").val()=="Trustee"))
   	       				{
   	       				HTML = HTML + '<option value="PRIMARY CORPORATE GSTIN">PRIMARY CORPORATE GSTIN</option>';
   	       				}
   	       			if((row[1]=="ID PROOF")&&($("#HIDDENCONST").val()=="Partnership firms" || $("#HIDDENCONST").val()=="LLP"))
   	       				{
   	       				HTML = HTML + '<option value="REGISTERED PARTNERSHIP DEED">REGISTERED PARTNERSHIP DEED</option>';
   	       				}
   	       			if((row[1]=="ID PROOF")&&($("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"))
   	       				{
   	       				HTML = HTML + '<option value="ROC/IOC">ROC/IOC</option>';
   	       				}
   	       			if((row[1]=="ID PROOF")&&($("#HIDDENCONST").val()=="HUF"||$("#HIDDENCONST").val()=="Trust"))
   	       				{
   	       			HTML = HTML + '<option value="FORM 60">FORM 60</option>';
   	       				}
	   	       		if(row[1]=="ADDRESS PROOF 1")
		       		{
	   	       			HTML = HTML + '<option value="Aadhar">Aadhar</option>';
		       		}
			     if(row[1]=="ADDRESS PROOF 2")
			    	 {
			    	HTML = HTML + '<option value="Aadhar">Aadhar</option></select></span>';
			    	 }
			     if($('.FormPageTab li.active div').text()=="Co-Applicant" && (row[1]=="ID PROOF" || row[1]=="SIGN PROOF" || row[1]== "DOB PROOF"|| row[1]=="ADDRESS PROOF 1" || row[1]== "ADDRESS PROOF 2"))
			     {
				    	HTML = HTML + '<option value="Affidavit">Affidavit</option>';
				    	 }
						  if(($('.FormPageTab li.active div').text()=="Co-Applicant"||$('.FormPageTab li.active div').text()=="Applicant") && (row[1]=="ID PROOF"))
							{
				    	HTML = HTML + '<option value="SSI NO">SSI NO</option>';
						HTML = HTML + '<option value="GST CERTIFICATE">GST CERTIFICATE</option>';
						HTML = HTML + '<option value="SALES TAX CERTIFICATE">SALES TAX CERTIFICATE</option>';
				    	 }
						 if(($('.FormPageTab li.active div').text()=="Co-Applicant"||$('.FormPageTab li.active div').text()=="Applicant") && (row[1]=="ADDRESS PROOF 1"))
							{
				    	HTML = HTML + '<option value="SSI NO">SSI NO</option>';
						HTML = HTML + '<option value="GST CERTIFICATE">GST CERTIFICATE</option>';
						HTML = HTML + '<option value="SALES TAX CERTIFICATE">SALES TAX CERTIFICATE</option>';
						HTML = HTML + '<option value="UTILITY BILL">UTILITY BILL</option>';
						HTML = HTML + '<option value="OTHER INCORPORATE DOCUMENTS">OTHER INCORPORATE DOCUMENTS</option>';
				    	 }
   	       			
   	       			HTML=HTML+'</select></span>'
   	       			var htmldata = $(HTML);
	       			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
	       			return htmldata[0].outerHTML;
       				 }
       			 else{
       				var rowno = meta.row;	 
       	      		var HTML =	'<span><input type="text" id="KYCD_DOCNAME'+rowno+'"  name="KYCD_DOCNAME'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
       	      			 
       	      		var htmldata = $(HTML);
       	   			

       				if ($(htmldata).find('[name=KYCD_DOCNAME'+rowno+']').hasClass("IsCURCommaFields"))
       					{
       					data = CURCommaSep(data);
       					}
       					
       				
       	   			$(htmldata).find('[name=KYCD_DOCNAME'+rowno+']').attr("value",data);

       	   			
       	   			return htmldata[0].outerHTML;
       			 }
       			
                } 
       		 },
       		 
       		{ targets: 3, "render": function ( data, type, row, meta ) {                            
   	 		 
    			var rowno = meta.row;	
    			
    			var Addvalue = $("#KYCD_DOCATTACHMENT").val();
    			
    			if (data == "")
    				{
    				data = Addvalue;
    				}
    			if(data=="")
    				{
    				var HTML ="";
    				if(($("#HIDDENACT").val()=="Y" && row[6] =="Collected")||($("#HIDDENACT").val()!="Y" && row[6] =="Collected"))
    					{
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png"   class="GridDocUpd" title="UPLOAD" attr-Upd="KYCD_1UPLOAD'+rowno+'"  width="20" height="20"/>';
    					}
    				else{
    					HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="KYCD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
    				}
    	    		HTML = HTML + '<input style="display:none" id="KYCD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(KYCD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="KYCD_UPLOAD'+rowno+'" hidden="hidden" name="KYCD_UPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    				}
    			else{
    				var HTML =	"";
    				if(($("#HIDDENACT").val()=="Y" && row[6] =="Collected")||($("#HIDDENACT").val()!="Y" && row[6] =="Collected")){
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png"   class="GridDocUpd" title="UPLOAD" attr-Upd="KYCD_1UPLOAD'+rowno+'"  width="20" height="20"/>';
    				}
    				else{
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="KYCD_1UPLOAD'+rowno+'"  width="20" height="20"/>';
    				}
    				
    	    		HTML = HTML + '<input style="display:none" id="KYCD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(KYCD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35"  height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="KYCD_UPLOAD'+rowno+'" hidden="hidden" name="KYCD_UPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    			}
    			 
    		  
    		    	 
    			 return HTML;
             } 
    		 },
    		 { targets: 4, "render": function ( data, type, row, meta ) {  
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="text" id="KYCD_UPLOADDT'+rowno+'"  name="KYCD_UPLOADDT'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
        	   			

        				if ($(htmldata).find('[name=KYCD_UPLOADDT'+rowno+']').hasClass("IsCURCommaFields"))
        					{
        					data = CURCommaSep(data);
        					}
        					
        				
        	   			$(htmldata).find('[name=KYCD_UPLOADDT'+rowno+']').attr("value",data);

        	   			
        	   			return htmldata[0].outerHTML;
        			 }
        		 },
    		 { targets: 5, "render": function ( data, type, row, meta ) {                            
    			 if(($("#HIDDENID").val()=="BSM" || $("#HIDDENACT").val()=="Y")&& row[6] =="Collected" )
    				 {
    				 var rowno = meta.row;		 
    	        		var HTML =	'<span><input type="checkbox" class="custom-control-input KYCDGRDMNDTRY" value="'+data+'" name="KYCD_OSV'+rowno+'" id="KYCD_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_OSV'+rowno+'"></label></span>';			  
    	        		    
    	        		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
    	        		
    	        		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=KYCD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
    				 }
    			 else if(($("#HIDDENID").val()=="BSM" || $("#HIDDENACT").val()=="Y")&& row[6] !="Collected" )
    				 {
    				 var rowno = meta.row;		 
    	        		var HTML =	'<span style="display:none;"><input type="checkbox" class="custom-control-input" value="'+data+'" name="KYCD_OSV'+rowno+'" id="KYCD_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_OSV'+rowno+'"></label></span>';			  
    	        		    
    	        		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
    	        		
    	        		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=KYCD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
    				 }
    			 else{
        				var rowno = meta.row;	 
						var HTML =	'<span><input type="checkbox" disabled class="custom-control-input DSVLBL" value="'+data+'" name="KYCD_OSV'+rowno+'" id="KYCD_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_OSV'+rowno+'"></label></span>';	
        	      		//var HTML =	'<span><input type="text" id="KYCD_OSV'+rowno+'"  name="KYCD_OSV'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=KYCD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
        			 }
        			
                 } 
        		 },
       		
       		 { targets: 6, "render": function ( data, type, row, meta ) {                            
       			if(($("#HIDDENID").val()=="BSM" || $("#HIDDENACT").val()=="Y") && $('.FormPageTab li.active').text() != "Applicant"  && row[6] !="Collected")
       				{
       				var rowno = meta.row;		 
       	       		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields DOCSTATUS KYCDGRDMNDTRY" value="Collected" id="DOCStc'+rowno+'" name="KYCD_DOCSTATUS'+rowno+'"><label class="custom-control-label" for="DOCStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields DOCSTATUS KYCDGRDMNDTRY Deferred" value="Deferred" id="DOCStd'+rowno+'" name="KYCD_DOCSTATUS'+rowno+'"><label class="custom-control-label" for="DOCStd'+rowno+'">Deferred</label></span>';			  
       	       		
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
       			else if(($("#HIDDENID").val()=="BSM" || $("#HIDDENACT").val()=="Y") && $('.FormPageTab li.active').text() == "Applicant")
       				{
       				var rowno = meta.row;		 
       	       		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields DOCSTATUS KYCDGRDMNDTRY" value="Collected" id="DOCStc'+rowno+'" name="KYCD_DOCSTATUS'+rowno+'"><label class="custom-control-label" for="DOCStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '</span>';			  
       	       		
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
       			else{
       				var rowno = meta.row;	 
    	      		var HTML =	'<span><input type="text" id="KYCD_DOCSTATUS'+rowno+'"  name="KYCD_DOCSTATUS'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
    	      			 
    	      		var htmldata = $(HTML);
    	   			

    				if ($(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+']').hasClass("IsCURCommaFields"))
    					{
    					data = CURCommaSep(data);
    					}
    					
    				
    	   			$(htmldata).find('[name=KYCD_DOCSTATUS'+rowno+']').attr("value",data);

    	   			
    	   			return htmldata[0].outerHTML;
       			}

                } 
       		 }
       		,
      		 { targets: 7, "render": function ( data, type, row, meta ) {                            
       			
      			 if(row[6]=="Deferred" && $("#hIDDNACT").val() != "DEFAppr")
      				 {
      				var rowno = meta.row;	 
      	      		var HTML =	'<span><input type="text" id="KYCD_TARGETDT'+rowno+'"  name="KYCD_TARGETDT'+rowno+'" maxlength="10" class="form-control form-control IsNumberFields ISPastDateFields ISDatefield ">';			 
      	      		HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
      	      			 
      	      		var htmldata = $(HTML);
      	   			

      				if ($(htmldata).find('[name=KYCD_TARGETDT'+rowno+']').hasClass("IsCURCommaFields"))
      					{
      					data = CURCommaSep(data);
      					}
      					
      				
      	   			$(htmldata).find('[name=KYCD_TARGETDT'+rowno+']').attr("value",data);

      	   			
      	   			return htmldata[0].outerHTML;    
      				 }
      			 else
      				 {
      				var rowno = meta.row;	 
    	      		var HTML =	'<span><input type="text" id="KYCD_TARGETDT'+rowno+'"  name="KYCD_TARGETDT'+rowno+'" disabled maxlength="10" class="form-control DSVLBL form-control ISDatefield ISPastDateFields IsNumberFields  ">';
    	      		HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" style="display:none;" class="GridFieldIcon Griddatepicker"/></span>'; 
    	      			 
    	      		var htmldata = $(HTML);
    	   			

    				if ($(htmldata).find('[name=KYCD_TARGETDT'+rowno+']').hasClass("IsCURCommaFields"))
    					{
    					data = CURCommaSep(data);
    					}
    					
    				
    	   			$(htmldata).find('[name=KYCD_TARGETDT'+rowno+']').attr("value",data);

    	   			
    	   			return htmldata[0].outerHTML;
      				 }
      			
               } 
      		 },
      		{ targets: 8, "render": function ( data, type, row, meta ) {                            
     	 		 
       			var rowno = meta.row;	
       			
       			var Addvalue = "";
       			
       			
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="KYCD_REMARKS'+rowno+'"  name="KYCD_REMARKS'+rowno+'" disabled class="form-control DSVLBL form-control     ">';
       		
       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
       						$(htmldata).find('[name=KYCD_REMARKS'+rowno+']').attr("value",data);

       	    	   			
       	    	   			return htmldata[0].outerHTML;
                } 
       		 },
      		{ targets: 10, "render": function ( data, type, row, meta ) {                            
      			if(row[6]=="Collected")
      				{
      				var rowno = meta.row;		 
            		var HTML =	'<span><input type="checkbox"  class="custom-control-input VRFY" data-quey-sec="S01" value="'+data+'" name="KYCD_VRFY'+rowno+'" id="KYCD_VRFY'+rowno+'">';			 
            		HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_VRFY'+rowno+'"></label></span>';			  
            		    
            		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
            		
            		var htmldata = $(HTML);
           			
           			$(htmldata).find('[name=KYCD_VRFY'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
           			
        	 return htmldata[0].outerHTML;
            		
            		
            			 return HTML;
      				}
      			else{
      				var rowno = meta.row;	 
    	      		//var HTML =	'<span><input type="text" id="KYCD_VRFY'+rowno+'"  name="KYCD_VRFY'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  VRFY"></span>';			 
    	      			var HTML =	'<span><input type="checkbox" disabled class="custom-control-input VRFY" data-quey-sec="S01" value="'+data+'" name="KYCD_VRFY'+rowno+'" id="KYCD_VRFY'+rowno+'">';			 
						HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_VRFY'+rowno+'"></label></span>';	 
    	      		var htmldata = $(HTML);
    	   			

    				if ($(htmldata).find('[name=KYCD_VRFY'+rowno+']').hasClass("IsCURCommaFields"))
    					{
    					data = CURCommaSep(data);
    					}
    					
    				
    	   			$(htmldata).find('[name=KYCD_VRFY'+rowno+']').attr("value",data);

    	   			
    	   			return htmldata[0].outerHTML;
      			}
      			
      			
      		}
       		 },
       		{ targets: 11, "render": function ( data, type, row, meta ) {                            
       			if((row[6]=="Collected")&&(row[10]==""))
       				{
       				var rowno = meta.row;	 
    				var HTML =	'<span><button type="button" id="PODSave'+rowno+'" data-quey-sec="S01" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>';			 
    				HTML = HTML + '</span>'; 
    					 
    				var htmldata = $(HTML);
    					

    													
    					return htmldata[0].outerHTML;  
       				}
       			else{
       				var rowno = meta.row;	 
       				var HTML =	'<span><button type="button"  id="PODSave'+rowno+'" data-quey-sec="S01" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px;display:none" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>';			 
    				HTML = HTML + '</span>'; 
    				var htmldata = $(HTML);
					

					
					return htmldata[0].outerHTML;  
       			}
       			
      		}
       		 }, {
                 targets: 12,
                 "render": function(data, type, row, meta) {
              	   if(row[12] == "" && $("#hIDDNACT").val()=="DEFAppr" && row[6]=="Deferred"){
                 		var rowno = meta.row;
                         var HTML = '<span><div class="HyperControls "><i class="fa fa-check"></i><a  class="Btxt4 APCDSTATUS" id="Approve'+ rowno +'" name="Approve'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Approve</a></div>';
                         HTML = HTML + '<div class="HyperControls"><i class="fa fa fa-times"></i><a  class="Btxt4 APCDSTATUS" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
                         HTML = HTML + '<input type="hidden" disabled id="KYCD_DEFRSTATS'+rowno+'"  name="KYCD_DEFRSTATS'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                         // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                         var htmldata = $(HTML);

                         $(htmldata).find('[name=KYCD_DEFRSTATS' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
              	   }
              	   else{
                 		var rowno = meta.row;
           	 			var HTML = '<span><input type="text" id="KYCD_DEFRSTATS' + rowno + '"  name="KYCD_DEFRSTATS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=KYCD_DEFRSTATS' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=KYCD_DEFRSTATS' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
                 	}
                 }
             }
           	
           	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }


 
 function GridControlDetailPFDEFR(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
 {
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

         'aaData': dtData,
         "aoColumns": dtcolumn,  
         
         "bAutoWidth": false,

         "autoWidth": false,

         'bPaginate': false,

        "aaSorting": [],

        // "pageLength": 5,

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
       		{
                   targets: 4,
                   "render": function(data, type, row, meta) {
                	   if(row[4] == ""){
                   		var rowno = meta.row;
                           var HTML = '<span><div class="HyperControls "><i class="fa fa-check"></i><a  class="Btxt4 APCDSTATUS" id="Approve'+ rowno +'" name="Approve'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Approve</a></div>';
                           HTML = HTML + '<div class="HyperControls"><i class="fa fa fa-times"></i><a  class="Btxt4 APCDSTATUS" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
                           HTML = HTML + '<input type="hidden" disabled id="DFPD_STATUS'+rowno+'"  name="DFPD_STATUS'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                           // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                           var htmldata = $(HTML);

                           //$(htmldata).find('[name=DFPD_STATUS' + rowno + ']').attr("value", data);
                           return HTML;
                	   }
                	   else{
                   		var rowno = meta.row;
             	 			var HTML = '<span><input type="text" id="DFPD_STATUS' + rowno + '"  name="DFPD_STATUS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                           var htmldata = $(HTML);
                           if ($(htmldata).find('[name=DFPD_STATUS' + rowno + ']').hasClass("IsCURCommaFields")) {
                               data = CURCommaSep(data);
                           }

                           $(htmldata).find('[name=DFPD_STATUS' + rowno + ']').attr("value", data);
                           return htmldata[0].outerHTML;
                   	}
                   }
               }
             	
             	   ],

            "fnDrawCallback": function (oSettings) {

           }

           });
  	 
   }
 
 function GridControlDetailOthers (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
 {
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

         'aaData': dtData,
         "aoColumns": dtcolumn,  
         
         "bAutoWidth": false,

         "autoWidth": false,

         'bPaginate': false,

        "aaSorting": [],

        // "pageLength": 5,

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
           	  {
       			 targets: 0, "render": function ( data, type, row, meta ) {
       				var rowno = meta.row; 
       				if(row[0]=="Q")
       					{
           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
        				HTML = HTML + '</span>';  
        				var htmldata = $(HTML);				
        				return htmldata[0].outerHTML;
       					}
       				else
       					{
       					var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none" class="DelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
        				HTML = HTML + '</span>';  
        				var htmldata = $(HTML);				
        				return htmldata[0].outerHTML;
       					}
       				  
       			 }
           	  },
       	/*	 { targets: 2, "render": function ( data, type, row, meta ) {                            
       			 
       			 if($("#HIDDENID").val()=="BSM")
       				 {
       				var rowno = meta.row;       			 
          			 
       	       		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary "  onchange = "NAMEOFDOCONCHNG(this);"id="OKYD_DOCNAME'+rowno+'" name="OKYD_DOCNAME'+rowno+'">';
       	       			HTML = HTML + '<option value="">Select</option>';
       	       			HTML = HTML + '<option value="PAN">PAN</option>';
       	       			if($(".FormPageTab li.active").text()=="Co-Applicant")
       	       				{
       	       			       HTML = HTML + '<option value="Form 60">Form 60</option>';
       	       				}
       	       			HTML = HTML + '<option value="Voter ID">Voter ID</option>';
       	       			HTML = HTML + '<option value="Driving License">Driving License</option>';
       	       			/*HTML = HTML + '<option value="Aadhar">Aadhar</option>';*/
       	       		/*	HTML = HTML + '<option value="Passport">Passport</option>';
       	       			HTML = HTML + '<option value="Electricity Bill">Electricity Bill</option>';
       	       			HTML = HTML + '<option value="Utility Bill">Utility Bill</option></select></span>';
       				          			
       	       			var htmldata = $(HTML);
       	       			
       	       			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

       	  	 return htmldata[0].outerHTML;
       				 }
       			 else{
       				var rowno = meta.row;	 
       	      		var HTML =	'<span><input type="text" id="OKYD_DOCNAME'+rowno+'"  name="OKYD_DOCNAME'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
       	      			 
       	      		var htmldata = $(HTML);
       	   			

       				if ($(htmldata).find('[name=OKYD_DOCNAME'+rowno+']').hasClass("IsCURCommaFields"))
       					{
       					data = CURCommaSep(data);
       					}
       					
       				
       	   			$(htmldata).find('[name=OKYD_DOCNAME'+rowno+']').attr("value",data);

       	   			
       	   			return htmldata[0].outerHTML;
       			 }
       			
                }
       		 },*/
       		 
       		{ targets: 3, "render": function ( data, type, row, meta ) {                            
   	 		 
    			var rowno = meta.row;	
    			
    			var Addvalue = $("#KYCD_DOCATTACHMENT").val();
    			
    			if (data == "")
    				{
    				data = Addvalue;
    				}
    			if(data=="")
    				{
    				var HTML="";
    				if($("#HIDDENACT").val()=="Y" && row[6] =="Collected")
					{
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png"  class="GridDocUpd" title="UPLOAD" attr-Upd="OKYD_1UPLOAD'+rowno+'"  width="20" height="20"/>';
					}
					else{
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="OKYD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					}
    	    		HTML = HTML + '<input style="display:none" id="OKYD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(OKYD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="OKYD_UPLOAD'+rowno+'" hidden="hidden" name="OKYD_UPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    				}
    			else{
    				var HTML="";
    				if($("#HIDDENACT").val()=="Y" && row[6] =="Collected")
					{
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png"  class="GridDocUpd" title="UPLOAD" attr-Upd="OKYD_1UPLOAD'+rowno+'"  width="20" height="20"/>';
					}
					else{
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="OKYD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					}
    	    		HTML = HTML + '<input style="display:none" id="OKYD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(OKYD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35"  height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="OKYD_UPLOAD'+rowno+'" hidden="hidden" name="OKYD_UPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    			}
    			 
    		  
    		    	 
    			 return HTML;
             } 
    		 },
    		 { targets: 4, "render": function ( data, type, row, meta ) {  
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="text" id="OKYD_UPLOADDT'+rowno+'"  name="OKYD_UPLOADDT'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
        	   			

        				if ($(htmldata).find('[name=OKYD_UPLOADDT'+rowno+']').hasClass("IsCURCommaFields"))
        					{
        					data = CURCommaSep(data);
        					}
        					
        				
        	   			$(htmldata).find('[name=OKYD_UPLOADDT'+rowno+']').attr("value",data);

        	   			
        	   			return htmldata[0].outerHTML;
        			 }
        		 },
    		 { targets: 5, "render": function ( data, type, row, meta ) {                            
    			 if(($("#HIDDENID").val()=="BSM" || $("#HIDDENACT").val()=="Y")&& row[6] =="Collected" )
    				 {
    				 var rowno = meta.row;		 
    	        		var HTML =	'<span><input type="checkbox" class="custom-control-input OKYDGRDMNDTRY" value="'+data+'" name="OKYD_OSV'+rowno+'" id="OKYD_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="OKYD_OSV'+rowno+'"></label></span>';			  
    	        		    
    	        		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
    	        		
    	        		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=OKYD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
    				 }
					 else if(($("#HIDDENID").val()=="BSM" || $("#HIDDENACT").val()=="Y")&& row[6] !="Collected" ){
						 var rowno = meta.row;		 
    	        		var HTML =	'<span style="display:none;"><input type="checkbox" class="custom-control-input" value="'+data+'" name="OKYD_OSV'+rowno+'" id="OKYD_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="OKYD_OSV'+rowno+'"></label></span>';			  
    	        		    
    	        		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
    	        		
    	        		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=OKYD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
					 }
    			 else{
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="checkbox" disabled class="custom-control-input" value="'+data+'" name="OKYD_OSV'+rowno+'" id="OKYD_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="OKYD_OSV'+rowno+'"></label></span>';			  
    	        		 	 
        	      		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=OKYD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
        			 }
        			
                 } 
        		 },
       		
       		 { targets: 6, "render": function ( data, type, row, meta ) {                            
       			if(($("#HIDDENID").val()=="BSM"|| $("#HIDDENACT").val()=="Y") && $('.FormPageTab li.active').text() != "Applicant" && row[6] !="Collected")
       				{
       				var rowno = meta.row;		 
       	       		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields OKYDGRDMNDTRY DOCSTATUS" value="Collected" id="DOCOStc'+rowno+'" name="OKYD_DOCSTATUS'+rowno+'"><label class="custom-control-label" for="DOCOStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields OKYDGRDMNDTRY DOCSTATUS Deferred" value="Deferred" id="DOCOStd'+rowno+'" name="OKYD_DOCSTATUS'+rowno+'"><label class="custom-control-label" for="DOCOStd'+rowno+'">Deferred</label></span>';			  
       	       		
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
       			else if(($("#HIDDENID").val()=="BSM" || $("#HIDDENACT").val()=="Y") && $('.FormPageTab li.active').text() == "Applicant")
       				{
       				var rowno = meta.row;		 
       	       		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields OKYDGRDMNDTRY DOCSTATUS" value="Collected" id="DOCOStc'+rowno+'" name="OKYD_DOCSTATUS'+rowno+'"><label class="custom-control-label" for="DOCOStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '</span>';			  
       	       		
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
       			else{
       				var rowno = meta.row;	 
    	      		var HTML =	'<span><input type="text" id="OKYD_DOCSTATUS'+rowno+'"  name="OKYD_DOCSTATUS'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
    	      			 
    	      		var htmldata = $(HTML);
    	   			

    				if ($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+']').hasClass("IsCURCommaFields"))
    					{
    					data = CURCommaSep(data);
    					}
    					
    				
    	   			$(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+']').attr("value",data);

    	   			
    	   			return htmldata[0].outerHTML;
       			}

                } 
       		 }
       		,
      		 { targets: 7, "render": function ( data, type, row, meta ) {                            
       			
      			 if(row[6]=="Deferred" && $("#hIDDNACT").val() != "DEFAppr")
      				 {
      				var rowno = meta.row;	 
      	      		var HTML =	'<span><input type="text" id="OKYD_TARGETDT'+rowno+'"  name="OKYD_TARGETDT'+rowno+'" maxlength="10" class="form-control form-control IsNumberFields ISPastDateFields ISDatefield ">';			 
      	      		HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
      	      			 
      	      		var htmldata = $(HTML);
      	   			

      				if ($(htmldata).find('[name=OKYD_TARGETDT'+rowno+']').hasClass("IsCURCommaFields"))
      					{
      					data = CURCommaSep(data);
      					}
      					
      				
      	   			$(htmldata).find('[name=OKYD_TARGETDT'+rowno+']').attr("value",data);

      	   			
      	   			return htmldata[0].outerHTML;    
      				 }
      			 else
      				 {
      				var rowno = meta.row;	 
    	      		var HTML =	'<span><input type="text" id="OKYD_TARGETDT'+rowno+'"  name="OKYD_TARGETDT'+rowno+'" disabled maxlength="10" class="form-control DSVLBL form-control ISDatefield ISPastDateFields IsNumberFields  ">';
    	      		HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" style="display:none;" class="GridFieldIcon Griddatepicker"/></span>'; 
    	      			 
    	      		var htmldata = $(HTML);
    	   			

    				if ($(htmldata).find('[name=OKYD_TARGETDT'+rowno+']').hasClass("IsCURCommaFields"))
    					{
    					data = CURCommaSep(data);
    					}
    					
    				
    	   			$(htmldata).find('[name=OKYD_TARGETDT'+rowno+']').attr("value",data);

    	   			
    	   			return htmldata[0].outerHTML;
      				 }
      			
               } 
      		 },
      		{ targets: 8, "render": function ( data, type, row, meta ) {                            
     	 		 
       			var rowno = meta.row;	
       			
       			var Addvalue = "";
       			
       			if (data == "")
       				{
       				data = Addvalue;
       				}
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" onclick="REMARKPOPUP(this)" title="VIEW" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="OKYD_REMARKS'+rowno+'"  name="OKYD_REMARKS'+rowno+'" disabled class="form-control DSVLBL form-control     ">';
       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
     						$(htmldata).find('[name=OKYD_REMARKS'+rowno+']').attr("value",data);

     	    	   			
     	    	   			return htmldata[0].outerHTML; 
       			 //return HTML;
                } 
       		 },
      		{ targets: 10, "render": function ( data, type, row, meta ) {                            
      			if(row[6]=="Collected")
      				{
      				var rowno = meta.row;		 
            		var HTML =	'<span><input type="checkbox" class="custom-control-input VRFY" data-quey-sec="S08" value="'+data+'" name="OKYD_VRFY'+rowno+'" id="OKYD_VRFY'+rowno+'">';			 
            		HTML = HTML + '<label class="custom-control-label GridLabel" for="OKYD_VRFY'+rowno+'"></label></span>';			  
            		    
            		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
            		
            		var htmldata = $(HTML);
           			
           			$(htmldata).find('[name=OKYD_VRFY'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
           			
        	 return htmldata[0].outerHTML;
            		
            		
            			 return HTML;
      				}
      			else{
      				var rowno = meta.row;	 
    	      		//var HTML =	'<span><input type="text" id="OKYD_VRFY'+rowno+'"  name="OKYD_VRFY'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  VRFY"></span>';			 
    	      		var HTML =	'<span><input type="checkbox" disabled class="custom-control-input VRFY" data-quey-sec="S08" value="'+data+'" name="OKYD_VRFY'+rowno+'" id="OKYD_VRFY'+rowno+'">';			 
						HTML = HTML + '<label class="custom-control-label GridLabel" for="OKYD_VRFY'+rowno+'"></label></span>';		 
    	      		
					var htmldata = $(HTML);
           			
           			$(htmldata).find('[name=OKYD_VRFY'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
           			
        	 return htmldata[0].outerHTML;
            		
            		
            			 return HTML;
      			}
      			
      			
      		}
       		 },
       		{ targets: 11, "render": function ( data, type, row, meta ) {                            
       			if((row[6]=="Collected")&&(row[10]==""))
       				{
       				var rowno = meta.row;	 
    				var HTML =	'<span><button type="button" id="PODSave'+rowno+'" data-quey-sec="S08" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>';			 
    				HTML = HTML + '</span>'; 
    					 
    				var htmldata = $(HTML);
    					

    													
    					return htmldata[0].outerHTML;  
       				}
       			else{
       				var rowno = meta.row;	 
       				var HTML =	'<span><button type="button"  id="PODSave'+rowno+'" data-quey-sec="S08" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px;display:none" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>';			 
    				HTML = HTML + '</span>'; 
    				var htmldata = $(HTML);
					

					
					return htmldata[0].outerHTML;  
       			}
       			
      		}
       		 }, {
                 targets: 12,
                 "render": function(data, type, row, meta) {
              	   if(row[12] == "" && $("#hIDDNACT").val()=="DEFAppr" && row[6]=="Deferred"){
                 		var rowno = meta.row;
                         var HTML = '<span><div class="HyperControls "><i class="fa fa-check"></i><a  class="Btxt4 APCDSTATUS" id="Approve'+ rowno +'" name="Approve'+ rowno +'" data-value="Approve" data-table="TableRR" href="#">Approve</a></div>';
                         HTML = HTML + '<div class="HyperControls"><i class="fa fa fa-times"></i><a  class="Btxt4 APCDSTATUS" id="Reject'+ rowno +'" name="Reject'+ rowno +'"  data-table="TableRR" href="#">Reject</a></div>';
                         HTML = HTML + '<input type="hidden" disabled id="OKYD_DFRSTATUS'+rowno+'"  name="OKYD_DFRSTATUS'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                         // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                         var htmldata = $(HTML);

                         $(htmldata).find('[name=OKYD_DFRSTATUS' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
              	   }
              	   else{
                 		var rowno = meta.row;
           	 			var HTML = '<span><input type="text" id="OKYD_DFRSTATUS' + rowno + '"  name="OKYD_DFRSTATUS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=OKYD_DFRSTATUS' + rowno + ']').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=OKYD_DFRSTATUS' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
                 	}
                 }
             }
           	
           	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }

 function ChecklistDropdownvalue()
 {
	$("#KYCD_DOCNAME").val('');
	$("#DOCU_KYC").val('');
	$('#DOCU_KYC').material_select("destroy");	
	$('#DOCU_KYC').material_select();
    $('.DocChkBox').val('');
    $('.DocChkBox').prop("checked", false)
    
    $("#KYCD_DOCATTACHMENT").val('');
    $(".DDV").hide()
    $(".DDU").show()
    $(".name").text('Click Here to Upload')
    $("input[name=datafile]").attr('disabled',false);
 }

 function CheckProStatus()
 {
   var ProperStatus=$("#UPDC_PROPSTATUS"). val()
   
   if(ProperStatus=="Not Collected")
	   {
	   $("#UPDC_PROPOSV"). prop("checked", false);
	   $("#UPDC_PROPOSV").attr('disabled',true)
       }
   else
	   {
        $("#UPDC_PROPOSV").attr('disabled',false)
	   }
}
 
 
 function HndlUpldAfrLod(id,docu){
	 if($(id).closest('.tbodytrtd').prev().find('select').val()==""){
		 alert("NAME OF DOCUMENT is Mandatory")
		return;
	 }
	 $("#HIDDENIPLDST").val('');
	 $($(id).closest('.tbodytr').find('.tbodytrtd')[12]).find('input').val('')
	 GridDocFldUpldHndlr_FrDocChkLst(id,docu);
	 if($("#HIDDENIPLDST").val()=='Success')
		 {
		 	var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS");
	    	$(id).closest('td').next().find('input[type=text]').val($(op).find("DT").text());
	    	$("#"+docu).next().show();
	    	//$($(id).closest('.tbodytr').find('.tbodytrtd')[6]).find('input:radio:first').prop("checked", true).trigger("click");
			$(id).closest('.tbodytr').find('input:radio:first').prop("checked", true).trigger("click");
			$($(id).closest('.tbodytr').find('input:checkbox')[1]).removeAttr("disabled");
			$($($(id).closest('.tbodytr').find('.tbodytrtd'))[11]).find('button').show();
		 }
	 else{
		 $("#"+docu).next().hide();
	 }
 }
 
 
 function GridDocFldUpldHndlr_FrDocChkLst(id,docu)
 {

 var Val=$(id).val()


 if($(id).closest('td').find('input[type="file"]').val()!="")
 {
     var domain= LoadFrmXML("RS001");
     var usrpwd= LoadFrmXML("RS002");
     var PrcsID=getUrlParam("PrcsID");
     var FormName= 'Verification_Upload';
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
       file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
 	     for(var i = 0;i<file_data.length;i++){
 			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
 	         fd.append("file_"+c, file_data[i]);
 	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
 			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
 			 vrsnno += $(op).find("VR").text()+',';
 			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
 			 {
 				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
 			 }
 	         descrptns += 'FieldDocument'+',';
 	     }
 	 }
 	 

  	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
      var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
 	 
	 
	  var Filename  = names.replace(',','')
			var xml=UI_getdata(FileType,FileSize,Filename,"","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$("#HIDDENIPLDST").val('Fail');
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }	 

 	/*	var xml=UI_getdata(FileType,FileSize,"","","","LSW_SGETKYCDOCUMNTTYPE")
 		
 		var FileAccept=$(xml).find('RESULT').text()
 	if(FileAccept == 'NO')
 	{
 		alert("Upload Only Image and PDF")
 		$("#HIDDENIPLDST").val('Fail');
 		return
     }	 */

 var y=  names;
 /*var specialChars = "<>&#^|~`"
 var check = function(string){
     for(i = 0; i < specialChars.length;i++){
         if(string.indexOf(specialChars[i]) > -1){
             return true
         }
     }
     return false;
 }

 if(check(y) == false){
     // Code that needs to execute when none of the above is in the string
 }else{
     alert('File name contains special character please remove and upload');
 	$(id).closest('td').find('input[type="file"]').val('')
 	$("#HIDDENIPLDST").val('Fail');
 	return;
 }*/
 	 
  ajaxindicatorstart("Uploading.. Please wait");
 	    $.ajax({
 	        url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val(),
 	        data: fd,
 			async:false,
 	        contentType: false,
 	        processData: false,
 	        type: 'POST',
 	        success: function(data){
 			
 			if(data=="Fail")
 	        		{
 						 ajaxindicatorstop();
 	        		alert(LoadFrmXML("V0119"));
 	        		$("#HIDDENIPLDST").val('Fail');
 					return
 	        		}
 			else{
 				$(id).val(data.split('~')[2])
 				
 				//AttchDmsIns(data,'upload',prodata);
 				//$(id).val('View');
 				/*$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
 				$(id).closest('td').find('input[type="file"]').attr('disabled',true)
 				$(id).closest('td').find('input[type="file"]').val('');
 				$(id).closest('td').find('input[type="file"]').hide();
 			//	$(id).closest('td').replace('','');
 			//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
 				
 				//
 				
 				$(id).closest('.md-form').find('span').remove()
 				 $(id).val('')
 		
 			    $(id).val(data.split('~')[2])
 				var UPLOAD=docu+'UPLOAD'
 				$('#'+UPLOAD).hide();
 				var VIEW=docu+'VIEW'
 				$('#'+VIEW).show();
 				$(id).closest('.md-form').append('<span class="name">'+names.slice(0,-1)+'</span>');
 				
 				*/
 			
 					ajaxindicatorstop();
 					alert(LoadFrmXML("V0118"));
 					$("#HIDDENIPLDST").val('Success');
 					return
 					
 				}	
 					 ajaxindicatorstop(); 
 	        },
 	        failure:function(data)
 	        {
 	     		  ajaxindicatorstop();
 					alert(LoadFrmXML("V0119"));
 					$("#HIDDENIPLDST").val('Fail');
 					return
 	        	
 	        }
 	    });
 		
 		  ajaxindicatorstop();
 		  }
 		  else{
 		  
 		  alert('select the file to upload');
 		  }

 		 

 	  
 }
 
 function NAMEOFDOCONCHNG(Evnt){
	 $($(Evnt).closest('.tbodytrtd').next().find('input:hidden')).not('input[type=file]').val('');
	 $($(Evnt).closest('.tbodytr').find('.tbodytrtd')[12]).find('input').val('');
		$(Evnt).closest('.tbodytrtd').next().next().find('input[type=text]').val('');
		$(Evnt).closest('.tbodytrtd').next().next().next().find('input[type=checkbox]').prop("checked", false);
		$(Evnt).closest('.tbodytrtd').next().find('.ViewAttch').hide()
		$(Evnt).closest('.tbodytrtd').next().next().next().find('span').hide();
		$(Evnt).closest('.tbodytrtd').next().next().next().next().next().find('input[type=text]').val("");
		$(Evnt).closest('.tbodytrtd').next().next().next().next().next().find('input[type=text]').attr( "disabled", "disabled" );
		$(Evnt).closest('.tbodytrtd').next().next().next().next().next().find('input[type=text]').addClass("DSVLBL")
		$(Evnt).closest('.tbodytrtd').next().next().next().next().next().find('img').hide();
		$(Evnt).closest('.tbodytrtd').next().next().next().next().find('input[type=radio]:checked').prop("checked", false);
		$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[10]).find('input[type=checkbox]').prop("checked", false);
		$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[10]).find('input[type=checkbox]').attr("disabled","disabled");
		$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[11]).find('button').hide();
		$($(Evnt).closest('td').next().next().next().find('input[type=checkbox]')[0]).removeClass("KYCDGRDMNDTRY");
		
		var op = UI_getdata($('select[name="'+$(Evnt).attr("name")+'"]').val().replace(/ /g,""),$("#PrcsID").val(),$('.admin-panel .col-lg-12 .active').attr('id'),'','',"LSW_GETKYCSPEFYURL")
		
		$(Evnt).closest('td').next().find('input[type=text]').val($(op).find($('select[name="'+$(Evnt).attr("name")+'"]').val().replace(/ /g,"")).text());
		
		if($(op).find($('select[name="'+$(Evnt).attr("name")+'"]').val().replace(/ /g,"")).text() != ""){
			$(Evnt).closest('.tbodytrtd').next().find('.ViewAttch').show();
		}
		else{
			$(Evnt).closest('.tbodytrtd').next().find('.ViewAttch').hide()
		}
	   
		 $(Evnt).closest('td').next().next().find('input[type=text]').val($(op).find($('select[name="'+$(Evnt).attr("name")+'"]').val().replace(/ /g,"")+'CRDT').text());
			
	       var DATAVAL=$(Evnt).closest('td').next().find('input[type=text]').val()
	       if(DATAVAL!="")
	       {
       $(Evnt).closest('td').next().next().next().next().find('input[type=radio]:first').prop('checked', true);
       $($(Evnt).closest('td').next().next().next().find('input[type=checkbox]')[0]).addClass("KYCDGRDMNDTRY");
	   $(Evnt).closest('.tbodytrtd').next().next().next().find('span').show();
	   $($(Evnt).closest('.tbodytr').find('.tbodytrtd')[10]).find('input[type=checkbox]').removeAttr("disabled");
	   $($(Evnt).closest('.tbodytr').find('.tbodytrtd')[11]).find('button').show();
        }
	       else
	    	{
	    	}
 }
 
 function LoadVefyHndlr(HTML,id){
	 if(HTML == "")
		 {
		 if($("input[name="+id+"]").prop("checked")==true)
			{
			 $("input[name="+id+"]").closest('.CREDIT').next().find('button').hide();
			}
		else{
			$("input[name="+id+"]").closest('.CREDIT').next().find('button').show();
		}
		 }
	 else{
		 if($(HTML).find("input[name="+id+"]").prop("checked")==true)
			{
			 $(HTML).find("input[name="+id+"]").closest('.CREDIT').next().find('button').hide();
			}
		else{
			$(HTML).find("input[name="+id+"]").closest('.CREDIT').next().find('button').show();
		}
	 }
	 
 }
 
 
function GentrateApplicform()
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()

	var flname = IOP+LoadFrmXML("RT089")+"&__format=pdf&Param1="+PrcsId+"&Param2="+$("#DMY7").val().split("|")[8]+"&__filename=Applicationform_"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function GentrateEndUse()
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()

	var flname = IOP+LoadFrmXML("RT090")+"&__format=pdf&@PARAM1="+PrcsId+"&__filename=EndUse_"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function UpdtDefrFlg(evnt,toid){
	if(toid=="BNKS_DEFRSTUS"){
		if(evnt.value=="Last 6 months"){
			$(evnt).closest('.DYNROW').find('input[name='+toid+']').val("Pending for Deferment");
			$(evnt).closest('.DYNROW').find('input[name='+toid+']').next().addClass('active');
			//$(evnt).closest('.DYNROW').find('input[name=BNKS_FINANOSV]').prop("checked",false);
			//$(evnt).closest('.DYNROW').find('input[name=BNKS_FINANOSV]').closest('.md-form').hide();
			
		}
		else{
			$(evnt).closest('.DYNROW').find('input[name='+toid+']').val("");
			$(evnt).closest('.DYNROW').find('input[name='+toid+']').next().removeClass('active');
			//$(evnt).closest('.DYNROW').find('input[name=BNKS_FINANOSV]').prop("checked",true);
			$(evnt).closest('.DYNROW').find('input[name=BNKS_FINANOSV]').closest('.md-form').show();
		}
	}
	else if(toid=="UPDC_DEFRSTUS"){
		if(evnt.value=="Last 1 year"){
			$("#"+toid).val("Pending for Deferment");
			$("#"+toid).next().addClass('active');
			//$("#UPDC_FINANOSV").prop("checked",false);
			//$("#UPDC_FINANOSV").closest('.md-form').hide();
		}
		else{
			$("#"+toid).val("");
			$("#"+toid).next().removeClass('active');
			$("#UPDC_FINANOSV").closest('.md-form').show();
		}
	}
}