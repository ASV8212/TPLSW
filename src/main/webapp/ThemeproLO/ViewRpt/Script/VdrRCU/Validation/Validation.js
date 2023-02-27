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
						  
							  RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
					    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
					    		return RTNVAL;
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
		  
		  //if ($('input[name='+$($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[6]).find('input[type=radio]').attr("name")+']:checked').val() == "Deferred")
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[6]).find('input[type=radio]:checked').val() == "Deferred")
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
    // var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
   //  var Filename  = names.replace(',','')
    var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
			
			 var DocType=$("#DOCU_KYC").val()
	  /*  if(DocType!="Others")
		 {
			DocType="IDPROOF" 
		 }
			
		if($("#HIDDENCUSTYP").val()=='Non-Individual')
	   {
		  var DocType = "Others"
	   }*/
	   
		var xml=UI_getdata(FileType,FileSize,Filename,DocType,$("#HIDDENCUSTYP").val()+'|'+$("#PrcsID").val(),"LSW_SGETRCKYOCUMNTTYPE")
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
           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none"  class="DelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
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
       			 
       			 if(($("#HIDDENCUSTYP").val()=="Individual")&&(row[1]=="ID PROOF" || row[1]=="SIGN PROOF" || row[1]== "DOB PROOF"|| row[1]=="ADDRESS PROOF 1" || row[1]== "ADDRESS PROOF 2")&& ((row[6]!="Collected") || (row[6]=="Collected" && row[2] == "")))
       				 { 
       				var rowno = meta.row;       			 
       	       		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary ADDRPROOFID"  onchange = "CheckDocTypeOnAddr(this);NAMEOFDOCONCHNG(this);"id="RCKY_DOCNAME'+rowno+'" name="RCKY_DOCNAME">';
       	       			HTML = HTML + '<option value="">Select</option>';
						if(row[1]=="ID PROOF")
						 {
							HTML = HTML + '<option value="NREGA Job Card">NREGA Job Card</option><option value="National Population Register Letter">National Population Register Letter</option><option disabled value="E-KYC Authentication">E-KYC Authentication</option><option value="Aadhar">Aadhar</option>';
						 }
       	       			if(row[1]=="SIGN PROOF" || row[1]== "DOB PROOF")
       	       				{
       	       			HTML = HTML + '<option value="PAN">PAN</option>';
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
				if(row[1]=="ADDRESS PROOF 1" || row[1]=="ADDRESS PROOF 2")
       	       		{
                       HTML = HTML + '<option value="NREGA Job Card">NREGA Job Card</option><option value="National Population Register Letter">National Population Register Letter</option><option disabled value="E-KYC Authentication">E-KYC Authentication</option><option value="Property Tax">Property Tax</option><option value="Pension Order">Pension Order</option><option value="Allotment Letter">Allotment Letter</option>';             
					}						
       	       	if(row[1]=="ADDRESS PROOF 1")
       	       		{
       	       	HTML = HTML + '<option value="Electricity Bill">Electricity Bill</option>';
       	       		}
       	     if(row[1]=="ADDRESS PROOF 2")
       	    	 {
       	    	HTML = HTML + '<option value="Utility Bills">Utility Bills</option>';
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
				 
       	       			
       				    HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
       	       			
       	       			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

       	  	 return htmldata[0].outerHTML;
       				 }
       			 else if(($("#HIDDENCUSTYP").val()=="Non-Individual")&&(row[1]=="ID PROOF" || row[1]=="SIGN PROOF" || row[1]== "DOB PROOF"|| row[1]=="ADDRESS PROOF 1" || row[1]== "ADDRESS PROOF 2")&& ((row[6]!="Collected") || (row[6]=="Collected" && row[2] == "")))
       				 {
       				var rowno = meta.row;
       				var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary "  onchange = "NAMEOFDOCONCHNG(this);"id="RCKY_DOCNAME'+rowno+'" name="RCKY_DOCNAME">';
   	       			HTML = HTML + '<option value="">Select</option>';
   	       			if(row[1]=="ID PROOF" && $("#HIDDENCONST").val()=="Trust")
   	       				{
   	       				HTML = HTML + '<option value="TRUST DEED">TRUST DEED</option>';
   	       				}
   	       			if((row[1]=="ADDRESS PROOF 2")&&($("#HIDDENCONST").val()=="Partnership firms" || $("#HIDDENCONST").val()=="LLP"|| $("#HIDDENCONST").val()=="HUF"|| $("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"|| $("#HIDDENCONST").val()=="Proprietorship" || $("#HIDDENCONST").val()=="Society" || $("#HIDDENCONST").val()=="Trustee"))
   	       				{
   	       				HTML = HTML + '<option value="UTILITY BILL">UTILITY BILL</option>';
   	       				}
   	       			/*if((row[1]=="ID PROOF")&&($("#HIDDENCONST").val()=="Partnership firms" || $("#HIDDENCONST").val()=="LLP"|| $("#HIDDENCONST").val()=="HUF"|| $("#HIDDENCONST").val()=="Private Ltd"|| $("#HIDDENCONST").val()=="Public Ltd"|| $("#HIDDENCONST").val()=="Proprietorship" ||$("#HIDDENCONST").val()=="Trust" || $("#HIDDENCONST").val()=="Society" || $("#HIDDENCONST").val()=="Trustee"))
   	       				{
   	       				HTML = HTML + '<option value="PAN">PAN</option>';
   	       				}*/
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
       	      		var HTML =	'<span><input type="text" id="RCKY_DOCNAME'+rowno+'"  name="RCKY_DOCNAME" disabled maxlength="100" class="form-control DSVLBL ADDRPROOFID form-control IsNumberFields  "></span>';			 
       	      			 
       	      		var htmldata = $(HTML);
       	   			

       				if ($(htmldata).find('[name=RCKY_DOCNAME]').hasClass("IsCURCommaFields"))
       					{
       					data = CURCommaSep(data);
       					}
       					
       				
       	   			$(htmldata).find('[name=RCKY_DOCNAME]').attr("value",data);

       	   			
       	   			return htmldata[0].outerHTML;
       			 }
       			
                } 
       		 },
       		 
       		{ targets: 3, "render": function ( data, type, row, meta ) {                            
   	 		 
    			var rowno = meta.row;	
    			
    			var Addvalue = $("#RCKY_DOCATTACHMENT").val();
    			
    			if (data == "")
    				{
    				data = Addvalue;
    				}
    			if(data=="")
    				{
    				var HTML ="";
					if(row[3]=="" && row[6] =="Collected")
					{
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="RCKY_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					}
    				else if(($("#HIDDENACT").val()=="Y" && row[6] =="Collected" && row[2] != "")||($("#HIDDENACT").val()!="Y" && row[6] =="Collected" && row[2] != ""))
    					{
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none;"  class="GridDocUpd" title="UPLOAD" attr-Upd="RCKY_1UPLOAD'+rowno+'"  width="20" height="20"/>';
    					}
    				else{
    					HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="RCKY_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
    				}
    	    		HTML = HTML + '<input style="display:none" id="RCKY_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(RCKY_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="RCKY_UPLOAD'+rowno+'" hidden="hidden" name="RCKY_UPLOAD" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    				}
    			else
				{
    				var HTML =	"";
					if(row[3]=="" && row[6] =="Collected")
					{
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="RCKY_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					}
    				else if(($("#HIDDENACT").val()=="Y" && row[6] =="Collected" && row[2] != "")||($("#HIDDENACT").val()!="Y" && row[6] =="Collected" && row[2] != "")){
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none;"  class="GridDocUpd" title="UPLOAD" attr-Upd="RCKY_1UPLOAD'+rowno+'"  width="20" height="20"/>';
    				}
    				else{
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="RCKY_1UPLOAD'+rowno+'"  width="20" height="20"/>';
    				}
    				
    	    		HTML = HTML + '<input style="display:none" id="RCKY_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(RCKY_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35"  height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="RCKY_UPLOAD'+rowno+'" hidden="hidden" name="RCKY_UPLOAD" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    			}
    			 
    		  
    		    	 
    			 return HTML;
             } 
    		 },
    		 { targets: 4, "render": function ( data, type, row, meta ) {  
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="text" id="RCKY_UPLOADDT'+rowno+'"  name="RCKY_UPLOADDT" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
        	   			

        				if ($(htmldata).find('[name=RCKY_UPLOADDT]').hasClass("IsCURCommaFields"))
        					{
        					data = CURCommaSep(data);
        					}
        					
        				
        	   			$(htmldata).find('[name=RCKY_UPLOADDT]').attr("value",data);

        	   			
        	   			return htmldata[0].outerHTML;
        			 }
        		 },
    		 { targets: 5, "render": function ( data, type, row, meta ) {                            
    			 if( row[6] =="Collected" )
    				 {
    				 var rowno = meta.row;		 
    	        		var HTML =	'<span><input type="checkbox" disabled class="custom-control-input RCKYGRDMNDTRY" value="'+data+'" name="RCKY_OSV" id="RCKY_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="RCKY_OSV'+rowno+'"></label></span>';			  
    	        		    
    	        		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
    	        		
    	        		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=RCKY_OSV][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
    				 }
    			 else if(row[6] !="Collected" )
    				 {
    				 var rowno = meta.row;		 
    	        		var HTML =	'<span style="display:none;"><input type="checkbox" disabled class="custom-control-input" value="'+data+'" name="RCKY_OSV" id="RCKY_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="RCKY_OSV'+rowno+'"></label></span>';			  
    	        		    
    	        		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
    	        		
    	        		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=RCKY_OSV][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
    				 }
    			 else{
        				var rowno = meta.row;	 
						var HTML =	'<span><input type="checkbox" disabled class="custom-control-input DSVLBL" value="'+data+'" name="RCKY_OSV" id="RCKY_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="RCKY_OSV'+rowno+'"></label></span>';	
        	      		//var HTML =	'<span><input type="text" id="RCKY_OSV'+rowno+'"  name="RCKY_OSV'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=RCKY_OSV][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
        			 }
        			
                 } 
        		 },
       		
       		 { targets: 6, "render": function ( data, type, row, meta ) {  
				if($("#DMY7").val().split('|')[10] != "HEGECL"){
       			if( $('.FormPageTab li.active').text() != "Applicant"  && row[6] !="Collected")
       				{
       				var rowno = meta.row;		 
       	       		var HTML =	'<form><span><input type="radio" disabled class="custom-control-input CBSIDBfields DOCSTATUS RCKYGRDMNDTRY" value="Collected" id="DOCStc'+rowno+'" name="RCKY_DOCSTATUS"><label class="custom-control-label" for="DOCStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields DOCSTATUS RCKYGRDMNDTRY Deferred" value="Deferred" id="DOCStd'+rowno+'" name="RCKY_DOCSTATUS"><label class="custom-control-label" for="DOCStd'+rowno+'">Deferred</label></span>';			  
       	       		HTML = HTML + '</form>'
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=RCKY_DOCSTATUS][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=RCKY_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
       			else if($('.FormPageTab li.active').text() == "Applicant")
       				{
       				var rowno = meta.row;		 
       	       		var HTML =	'<form><span><input type="radio" disabled class="custom-control-input CBSIDBfields DOCSTATUS RCKYGRDMNDTRY" value="Collected" id="DOCStc'+rowno+'" name="RCKY_DOCSTATUS"><label class="custom-control-label" for="DOCStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '</span>';			  
       	       		HTML = HTML + '</form>'
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=RCKY_DOCSTATUS][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=RCKY_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
       			else{
       				var rowno = meta.row;	 
    	      		var HTML =	'<form><span><input type="text" id="RCKY_DOCSTATUS'+rowno+'"  name="RCKY_DOCSTATUS" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
    	      			 HTML = HTML + '</form>'
    	      		var htmldata = $(HTML);
    	   			

    				if ($(htmldata).find('[name=RCKY_DOCSTATUS]').hasClass("IsCURCommaFields"))
    					{
    					data = CURCommaSep(data);
    					}
    					
    				
    	   			$(htmldata).find('[name=RCKY_DOCSTATUS]').attr("value",data);

    	   			
    	   			return htmldata[0].outerHTML;
       			}
				}
				else if($("#DMY7").val().split('|')[10] == "HEGECL"){
					
       				var rowno = meta.row;		 
       	       		var HTML =	'<form><span><input type="radio" disabled class="custom-control-input CBSIDBfields DOCSTATUS RCKYGRDMNDTRY" value="Collected" id="DOCStc'+rowno+'" name="RCKY_DOCSTATUS"><label class="custom-control-label" for="DOCStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '</span>';			  
       	       		HTML = HTML + '</form>'
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=RCKY_DOCSTATUS][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=RCKY_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
					
				}
                
       		 }
       		,
      		 { targets: 7, "render": function ( data, type, row, meta ) {                            
       			
      		
      				var rowno = meta.row;	 
      	      		var HTML =	'<span><input type="text" id="RCKY_TARGETDT'+rowno+'" disabled name="RCKY_TARGETDT" maxlength="10" class="form-control form-control IsNumberFields ISPastDateFields ISDatefield ">';			 
      	      	//	HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
      	      			 
      	      		var htmldata = $(HTML);
      	   			

      				if ($(htmldata).find('[name=RCKY_TARGETDT]').hasClass("IsCURCommaFields"))
      					{
      					data = CURCommaSep(data);
      					}
      					
      				
      	   			$(htmldata).find('[name=RCKY_TARGETDT]').attr("value",data);

      	   			
      	   			return htmldata[0].outerHTML;    
      				 
      			 
      			
               } 
      		 },
      		{ targets: 8, "render": function ( data, type, row, meta ) {                            
     	 		 
       			var rowno = meta.row;	
       			
       			var Addvalue = "";
       			
       			
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="RCKY_REMARKS'+rowno+'"  name="RCKY_REMARKS" disabled class="form-control DSVLBL form-control     ">';
       		
       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
       						$(htmldata).find('[name=RCKY_REMARKS]').attr("value",data);

       	    	   			
       	    	   			return htmldata[0].outerHTML;
                } 
       		 },
      		{ targets: 10, "render": function ( data, type, row, meta ) {                            
      			if(row[6]=="Collected")
      				{
      				var rowno = meta.row;		 
            		var HTML =	'<span><input type="checkbox"  disabled class="custom-control-input VRFY" data-quey-sec="S01" value="'+data+'" name="RCKY_VRFY" id="RCKY_VRFY'+rowno+'">';			 
            		HTML = HTML + '<label class="custom-control-label GridLabel" for="RCKY_VRFY'+rowno+'"></label></span>';			  
            		    
            		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
            		
            		var htmldata = $(HTML);
           			
           			$(htmldata).find('[name=RCKY_VRFY][value="true"]').attr('checked', 'checked');       			       			
           			
        	 return htmldata[0].outerHTML;
            		
            		
            			 return HTML;
      				}
      			else{
      				var rowno = meta.row;	 
    	      		//var HTML =	'<span><input type="text" id="RCKY_VRFY'+rowno+'"  name="RCKY_VRFY'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  VRFY"></span>';			 
    	      			var HTML =	'<span><input type="checkbox" disabled class="custom-control-input VRFY" data-quey-sec="S01" value="'+data+'" name="RCKY_VRFY" id="RCKY_VRFY'+rowno+'">';			 
						HTML = HTML + '<label class="custom-control-label GridLabel" for="RCKY_VRFY'+rowno+'"></label></span>';	 
    	      		var htmldata = $(HTML);
    	   			

    				if ($(htmldata).find('[name=RCKY_VRFY]').hasClass("IsCURCommaFields"))
    					{
    					data = CURCommaSep(data);
    					}
    					
    				
    	   			$(htmldata).find('[name=RCKY_VRFY]').attr("value",data);

    	   			
    	   			return htmldata[0].outerHTML;
      			}
      			
      			
      		}
       		 },
       		{ targets: 11, "render": function ( data, type, row, meta ) {                            
       			if((row[6]=="Collected")&&(row[10]==""))
       				{
       				var rowno = meta.row;	 
    				var HTML =	'<span><button type="button" disabled id="PODSave'+rowno+'" data-quey-sec="S01" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>';			 
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
                         HTML = HTML + '<input type="hidden" disabled id="RCKY_DEFRSTATS'+rowno+'"  name="RCKY_DEFRSTATS" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                         // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                         var htmldata = $(HTML);

                         $(htmldata).find('[name=RCKY_DEFRSTATS]').attr("value", data);
                         return htmldata[0].outerHTML;
              	   }
              	   else{
                 		var rowno = meta.row;
           	 			var HTML = '<span><input disabled type="text" id="RCKY_DEFRSTATS' + rowno + '"  name="RCKY_DEFRSTATS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=RCKY_DEFRSTATS]').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=RCKY_DEFRSTATS]').attr("value", data);
                         return htmldata[0].outerHTML;
                 	}
                 }
             },
			 { targets: 13, "render": function ( data, type, row, meta ) {  

						var rowno = meta.row;	
       			
       			var Addvalue = "";
	
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="UniqueNoPOPUP(this)" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="RCKY_UNIQID'+rowno+'"  name="RCKY_UNIQID" disabled class="form-control DSVLBL form-control">';
			var	HTML =  HTML + '<input type="hidden" id="RCKY_DOCNAME'+rowno+'"  name="RCKY_DOCNAME" disabled class="form-control DSVLBL form-control">';

       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
       						$(htmldata).find('[name=RCKY_UNIQID]').attr("value",data);

       	    	   			return htmldata[0].outerHTML;
        			 }
        		 },
			 { targets: 14, "render": function ( data, type, row, meta ) {  
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="text" disabled id="RCKY_AUTODD'+rowno+'"  name="RCKY_AUTODD" disabled maxlength="100" class="form-control DSVLBL form-control"></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
        	   			

        				if ($(htmldata).find('[name=RCKY_AUTODD]').hasClass("IsCURCommaFields"))
        					{
        					data = CURCommaSep(data);
        					}
        					
        				
        	   			$(htmldata).find('[name=RCKY_AUTODD]').attr("value",data);

        	   			
        	   			return htmldata[0].outerHTML;
        			 }
        		 },
				 { targets: 15, "render": function ( data, type, row, meta ) {  
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="text" disabled id="RCKY_CUSTYPE'+rowno+'"  name="RCKY_CUSTYPE" maxlength="100" class="form-control"></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
        	   			

        				if ($(htmldata).find('[name=RCKY_CUSTYPE]').hasClass("IsCURCommaFields"))
        					{
        					data = CURCommaSep(data);
        					}
        					
        				
        	   			$(htmldata).find('[name=RCKY_CUSTYPE]').attr("value",data);

        	   			
        	   			return htmldata[0].outerHTML;
        			 }
        		 }
				 ,
				  { targets: 16, "render": function ( data, type, row, meta ) {                            
       			 
       		
       				var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary RCKYGRDMNDTRY VRFYz SampledInit" data-quey-sec="S01"  onchange="CheckQuery(this);" id="RCKY_RCUSTATUS'+rowno+'" name="RCKY_RCUSTATUS">';
       	       			HTML = HTML + '<option value="">Select</option>';
					if($("#RCUGROUP").val() == "ERCU")
					{
						HTML = HTML + '<option value="Sample Initiated">Sample Initiated</option><option value="Sampled">Sampled</option>';
					}
					else
					{
							HTML = HTML + '<option value="Query">Query</option><option value="Not Screened">Not Screened</option><option  value="Screened">Screened</option><option value="Sample Initiated">Sample Initiated</option><option value="Sampled">Sampled</option>';
					}
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
       	       			
       	       			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCKY_RCUSTATUS]').attr("prevvalue",data);

       	  	 return htmldata[0].outerHTML;
       				
       			
       			
                } 
       		 },
       		{ targets: 17, "render": function ( data, type, row, meta ) {                            
       			if((row[16]=="Query"))
       				{
       				var rowno = meta.row;	 
    				var HTML =	'<span><button type="button"  id="QureySave'+rowno+'" data-quey-sec="S01" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px;" class="btn btn-Syeloutline waves-effect waves-light QureySave RaiseQry">Raise Query</button>';			 
    				HTML = HTML + '</span>'; 
    					 
    				var htmldata = $(HTML);
    					

    													
    					return htmldata[0].outerHTML;  
       				}
       			else{
       				var rowno = meta.row;	 
       				var HTML =	'<span><button type="button"  id="QureySave'+rowno+'" data-quey-sec="S01" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px;display:none;" class="btn btn-Syeloutline waves-effect waves-light QureySave RaiseQry">Raise Query</button>';			 
    				HTML = HTML + '</span>'; 
    				var htmldata = $(HTML);
					

					
					return htmldata[0].outerHTML;  
       			}
       			
      		}
       		 },
       		{ targets: 18, "render": function ( data, type, row, meta ) {                            
       			if((row[16]=="Query") || (row[16]=="Sample Initiated"))
       				{
       				var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary"   id="RCKY_RESULT'+rowno+'" name="RCKY_RESULT">';
					
					HTML = HTML + QueryResult;
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
    					

    					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCKY_RESULT]').attr("prevvalue",data);								
    					return htmldata[0].outerHTML;  
       				}
					else if((row[16]=="Not Screened"))
       				{
       				var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary"  id="RCKY_RESULT'+rowno+'" name="RCKY_RESULT">';
					
					HTML = HTML + ScreenedResult;
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
    					

    					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCKY_RESULT]').attr("prevvalue",data);								
    					return htmldata[0].outerHTML;  
       				}
					else if(row[16]=="Screened")
					{
						var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary"   id="RCKY_RESULT'+rowno+'" name="RCKY_RESULT">';
					
					HTML = HTML + ScreenedResult2;
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
    					

    					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCKY_RESULT]').attr("prevvalue",data);								
    					return htmldata[0].outerHTML; 
					}
					else if((row[16]=="Sampled"))
					{
						var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary"   id="RCKY_RESULT'+rowno+'" name="RCKY_RESULT">';
					
					HTML = HTML + SampledResult;
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
    					

    					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCKY_RESULT]').attr("prevvalue",data);								
    					return htmldata[0].outerHTML;  
					}
       			else{
       				var rowno = meta.row;	 
       				var HTML =    '<span style="display:none" ><select  class="Gridmdb-select md-form colorful-select dropdown-primary" style="display:none"  id="RCKY_RESULT'+rowno+'" name="RCKY_RESULT">';
					
					HTML = HTML + '<option value="">Select</option><option value="Query">Query</option><option value="Not Screened">Not Screened</option><option  value="Screened">Screened</option><option value="Sample Initiated">Sample Initiated</option><option value="Sampled">Sampled</option>';
					  HTML=HTML+ '</select></span>';  
    				var htmldata = $(HTML);
					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
					$(htmldata).find('[name=RCKY_RESULT]').attr("prevvalue",data);								
					

					
					return htmldata[0].outerHTML;  
       			}
       			
      		}
       		 }
			 
			 ,
			 { targets: 20, "render": function ( data, type, row, meta ) {  

						var rowno = meta.row;	
       			
       			var Addvalue = "";
	
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="IRCUREMARKPOPUP(this)" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="RCKY_REMARK'+rowno+'"  name="RCKY_REMARK" disabled class="form-control DSVLBL form-control">';
	

       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
       						$(htmldata).find('[name=RCKY_REMARK]').attr("value",data);

       	    	   			return htmldata[0].outerHTML;
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
                           HTML = HTML + '<input type="hidden" disabled id="RCDF_STATUS'+rowno+'"  name="RCDF_STATUS'+rowno+'" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                           // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                           var htmldata = $(HTML);

                           //$(htmldata).find('[name=RCDF_STATUS' + rowno + ']').attr("value", data);
                           return HTML;
                	   }
                	   else{
                   		var rowno = meta.row;
             	 			var HTML = '<span><input type="text" id="RCDF_STATUS' + rowno + '"  name="RCDF_STATUS' + rowno + '" maxlength="100" class="form-control form-control DSVLBL "></span>';
                           var htmldata = $(HTML);
                           if ($(htmldata).find('[name=RCDF_STATUS' + rowno + ']').hasClass("IsCURCommaFields")) {
                               data = CURCommaSep(data);
                           }

                           $(htmldata).find('[name=RCDF_STATUS' + rowno + ']').attr("value", data);
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
           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none"  class="DelGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
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
          			 
       	       		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary "  onchange = "NAMEOFDOCONCHNG(this);"id="RCOD_DOCNAME'+rowno+'" name="RCOD_DOCNAME'+rowno+'">';
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
       	      		var HTML =	'<span><input type="text" id="RCOD_DOCNAME'+rowno+'"  name="RCOD_DOCNAME'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
       	      			 
       	      		var htmldata = $(HTML);
       	   			

       				if ($(htmldata).find('[name=RCOD_DOCNAME'+rowno+']').hasClass("IsCURCommaFields"))
       					{
       					data = CURCommaSep(data);
       					}
       					
       				
       	   			$(htmldata).find('[name=RCOD_DOCNAME'+rowno+']').attr("value",data);

       	   			
       	   			return htmldata[0].outerHTML;
       			 }
       			
                }
       		 },*/
       		 
       		{ targets: 3, "render": function ( data, type, row, meta ) {                            
   	 		 
    			var rowno = meta.row;	
    			
    			var Addvalue = $("#RCKY_DOCATTACHMENT").val();
    			
    			if (data == "")
    				{
    				data = Addvalue;
    				}
    			if(data=="")
    				{
    				var HTML="";
    				if(row[6] =="Collected")
					{
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="RCOD_1UPLOAD'+rowno+'"  width="20" height="20"/>';
					}
					else{
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="RCOD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					}
    	    		HTML = HTML + '<input style="display:none" id="RCOD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(RCOD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="RCOD_UPLOAD'+rowno+'" hidden="hidden" name="RCOD_UPLOAD" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    				}
    			else{
    				var HTML="";
    				if(row[6] =="Collected")
					{
    					HTML='<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="RCOD_1UPLOAD'+rowno+'"  width="20" height="20"/>';
					}
					else{
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="RCOD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					}
    	    		HTML = HTML + '<input style="display:none" id="RCOD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(RCOD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35"  height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="RCOD_UPLOAD'+rowno+'" hidden="hidden" name="RCOD_UPLOAD" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    			}
    			 
    		  
    		    	 
    			 return HTML;
             } 
    		 },
    		 { targets: 4, "render": function ( data, type, row, meta ) {  
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="text" disabled id="RCOD_UPLOADDT'+rowno+'"  name="RCOD_UPLOADDT" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
        	   			

        				if ($(htmldata).find('[name=RCOD_UPLOADDT]').hasClass("IsCURCommaFields"))
        					{
        					data = CURCommaSep(data);
        					}
        					
        				
        	   			$(htmldata).find('[name=RCOD_UPLOADDT]').attr("value",data);

        	   			
        	   			return htmldata[0].outerHTML;
        			 }
        		 },
    		 { targets: 5, "render": function ( data, type, row, meta ) {                            
    			 if( row[6] =="Collected" )
    				 {
    				 var rowno = meta.row;		 
    	        		var HTML =	'<span><input type="checkbox" disabled class="custom-control-input RCODGRDMNDTRY" value="'+data+'" name="RCOD_OSV" id="RCOD_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="RCOD_OSV'+rowno+'"></label></span>';			  
    	        		    
    	        		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
    	        		
    	        		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=RCOD_OSV][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
    				 }
					 else if( row[6] !="Collected" ){
						 var rowno = meta.row;		 
    	        		var HTML =	'<span style="display:none;"><input type="checkbox" class="custom-control-input" disabled value="'+data+'" name="RCOD_OSV" id="RCOD_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="RCOD_OSV'+rowno+'"></label></span>';			  
    	        		    
    	        		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
    	        		
    	        		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=RCOD_OSV][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
					 }
    			 else{
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="checkbox" disabled class="custom-control-input" value="'+data+'" name="RCOD_OSV" id="RCOD_OSV'+rowno+'">';			 
    	        		HTML = HTML + '<label class="custom-control-label GridLabel" for="RCOD_OSV'+rowno+'"></label></span>';			  
    	        		 	 
        	      		var htmldata = $(HTML);
    	       			
    	       			$(htmldata).find('[name=RCOD_OSV][value="true"]').attr('checked', 'checked');       			       			
    	       			
    	    	 return htmldata[0].outerHTML;
    	        		
    	        		
    	        			 return HTML;
        			 }
        			
                 } 
        		 },
       		
       		 { targets: 6, "render": function ( data, type, row, meta ) {
				if($("#DMY7").val().split('|')[10] != "HEGECL")				 
				{
       			if($('.FormPageTab li.active').text() != "Applicant" && row[6] !="Collected")
       				{
       				var rowno = meta.row;		 
       	       		var HTML =	'<form><span><input type="radio" disabled class="custom-control-input CBSIDBfields RCODGRDMNDTRY DOCSTATUS" value="Collected" id="DOCOStc'+rowno+'" name="RCOD_DOCSTATUS"><label class="custom-control-label" for="DOCOStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields RCODGRDMNDTRY DOCSTATUS Deferred" value="Deferred" id="DOCOStd'+rowno+'" name="RCOD_DOCSTATUS"><label class="custom-control-label" for="DOCOStd'+rowno+'">Deferred</label></span>';			  
       	       		 HTML = HTML + '</form>'
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=RCOD_DOCSTATUS][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=RCOD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
       			else if($('.FormPageTab li.active').text() == "Applicant")
       				{
       				var rowno = meta.row;		 
       	       		var HTML =	'<form><span><input type="radio" disabled class="custom-control-input CBSIDBfields RCODGRDMNDTRY DOCSTATUS" value="Collected" id="DOCOStc'+rowno+'" name="RCOD_DOCSTATUS"><label class="custom-control-label" for="DOCOStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '</span>';			  
       	       		 HTML = HTML + '</form>'
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=RCOD_DOCSTATUS][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=RCOD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
       			else{
       				var rowno = meta.row;	 
    	      		var HTML =	'<form><span><input type="text" id="RCOD_DOCSTATUS'+rowno+'"  name="RCOD_DOCSTATUS" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
    	      			  HTML = HTML + '</form>'
    	      		var htmldata = $(HTML);
    	   			

    				if ($(htmldata).find('[name=RCOD_DOCSTATUS]').hasClass("IsCURCommaFields"))
    					{
    					data = CURCommaSep(data);
    					}
    					
    				
    	   			$(htmldata).find('[name=RCOD_DOCSTATUS]').attr("value",data);

    	   			
    	   			return htmldata[0].outerHTML;
       			}
				}
				else if($("#DMY7").val().split('|')[10] == "HEGECL"){
					if(($("#HIDDENID").val()=="BSM" || $("#HIDDENACT").val()=="Y"))
					{
       				var rowno = meta.row;		 
       	       		var HTML =	'<form><span><input type="radio" disabled class="custom-control-input CBSIDBfields RCODGRDMNDTRY DOCSTATUS" value="Collected" id="DOCOStc'+rowno+'" name="RCOD_DOCSTATUS"><label class="custom-control-label" for="DOCOStc'+rowno+'">Collected</label>';			 
       	       		HTML = HTML + '</span>';			  
       	       		 HTML = HTML + '</form>'
       	       		var htmldata = $(HTML);
       	   			
       	   			$(htmldata).find('[name=RCOD_DOCSTATUS][value="'+data+'"]').attr('checked', 'checked');

       	   			//alert($(htmldata).find('[name=RCOD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
       	   			//alert(htmldata[0].outerHTML);
       	   			
       		 return htmldata[0].outerHTML;
       				}
					else{
       				var rowno = meta.row;	 
    	      		var HTML =	'<form><span><input type="text" id="RCOD_DOCSTATUS'+rowno+'"  name="RCOD_DOCSTATUS" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
    	      			  HTML = HTML + '</form>'
    	      		var htmldata = $(HTML);
    	   			

    				if ($(htmldata).find('[name=RCOD_DOCSTATUS]').hasClass("IsCURCommaFields"))
    					{
    					data = CURCommaSep(data);
    					}
    					
    				
    	   			$(htmldata).find('[name=RCOD_DOCSTATUS]').attr("value",data);

    	   			
    	   			return htmldata[0].outerHTML;
       			}
				}
                } 
       		 }
       		,
      		 { targets: 7, "render": function ( data, type, row, meta ) {                            
       			
      		
      				var rowno = meta.row;	 
      	      		var HTML =	'<span><input type="text" id="RCOD_TARGETDT'+rowno+'"  disabled name="RCOD_TARGETDT" maxlength="10" class="form-control form-control IsNumberFields ISPastDateFields ISDatefield ">';			 
      	      		//HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
      	      			 
      	      		var htmldata = $(HTML);
      	   			

      				if ($(htmldata).find('[name=RCOD_TARGETDT]').hasClass("IsCURCommaFields"))
      					{
      					data = CURCommaSep(data);
      					}
      					
      				
      	   			$(htmldata).find('[name=RCOD_TARGETDT]').attr("value",data);

      	   			
      	   			return htmldata[0].outerHTML;    
      				 
      			
      			
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
       		var	HTML =  HTML + '<input type="hidden" id="RCOD_REMARKS'+rowno+'"  name="RCOD_REMARKS" disabled class="form-control DSVLBL form-control     ">';
       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
     						$(htmldata).find('[name=RCOD_REMARKS]').attr("value",data);

     	    	   			
     	    	   			return htmldata[0].outerHTML; 
       			 //return HTML;
                } 
       		 },
      		{ targets: 10, "render": function ( data, type, row, meta ) {                            
      			if(row[6]=="Collected")
      				{
      				var rowno = meta.row;		 
            		var HTML =	'<span><input type="checkbox" disabled class="custom-control-input VRFY" data-quey-sec="S08" value="'+data+'" name="RCOD_VRFY" id="RCOD_VRFY'+rowno+'">';			 
            		HTML = HTML + '<label class="custom-control-label GridLabel" for="RCOD_VRFY'+rowno+'"></label></span>';			  
            		    
            		// $('[name='+name+'][value="'+val+'"]').prop('checked', true);
            		
            		var htmldata = $(HTML);
           			
           			$(htmldata).find('[name=RCOD_VRFY][value="true"]').attr('checked', 'checked');       			       			
           			
        	 return htmldata[0].outerHTML;
            		
            		
            			 return HTML;
      				}
      			else{
      				var rowno = meta.row;	 
    	      		//var HTML =	'<span><input type="text" id="RCOD_VRFY'+rowno+'"  name="RCOD_VRFY'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  VRFY"></span>';			 
    	      		var HTML =	'<span><input type="checkbox" disabled class="custom-control-input VRFY" data-quey-sec="S08" value="'+data+'" name="RCOD_VRFY" id="RCOD_VRFY'+rowno+'">';			 
						HTML = HTML + '<label class="custom-control-label GridLabel" for="RCOD_VRFY'+rowno+'"></label></span>';		 
    	      		
					var htmldata = $(HTML);
           			
           			$(htmldata).find('[name=RCOD_VRFY][value="true"]').attr('checked', 'checked');       			       			
           			
        	 return htmldata[0].outerHTML;
            		
            		
            			 return HTML;
      			}
      			
      			
      		}
       		 },
       		{ targets: 11, "render": function ( data, type, row, meta ) {                            
       			if((row[6]=="Collected")&&(row[10]==""))
       				{
       				var rowno = meta.row;	 
    				var HTML =	'<span><button type="button" disabled id="PODSave'+rowno+'" data-quey-sec="S08" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>';			 
    				HTML = HTML + '</span>'; 
    					 
    				var htmldata = $(HTML);
    					

    													
    					return htmldata[0].outerHTML;  
       				}
       			else{
       				var rowno = meta.row;	 
       				var HTML =	'<span><button type="button" disabled id="PODSave'+rowno+'" data-quey-sec="S08" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px;display:none" class="btn btn-Syeloutline waves-effect waves-light PODSave RaiseQry">Raise Query</button>';			 
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
                         HTML = HTML + '<input type="hidden" disabled id="RCOD_DFRSTATUS'+rowno+'"  name="RCOD_DFRSTATUS" maxlength="10" class="form-control DSVLBL form-control   "></span>'
                         // $('[name='+name+'][value="'+val+'"]').prop('checked', true);

                         var htmldata = $(HTML);

                         $(htmldata).find('[name=RCOD_DFRSTATUS' + rowno + ']').attr("value", data);
                         return htmldata[0].outerHTML;
              	   }
              	   else{
                 		var rowno = meta.row;
           	 			var HTML = '<span><input type="text" disabled id="RCOD_DFRSTATUS' + rowno + '"  name="RCOD_DFRSTATUS" maxlength="100" class="form-control form-control DSVLBL "></span>';
                         var htmldata = $(HTML);
                         if ($(htmldata).find('[name=RCOD_DFRSTATUS]').hasClass("IsCURCommaFields")) {
                             data = CURCommaSep(data);
                         }

                         $(htmldata).find('[name=RCOD_DFRSTATUS]').attr("value", data);
                         return htmldata[0].outerHTML;
                 	}
                 }
             },
			 { targets: 13, "render": function ( data, type, row, meta ) {  
        				var rowno = meta.row;	
       			
       			var Addvalue = "";
	
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="UniqueNoPOPUP(this)" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="RCOD_UNIQNO'+rowno+'"  name="RCOD_UNIQNO" disabled class="form-control DSVLBL form-control">';
			var	HTML =  HTML + '<input type="hidden" id="RCOD_DOCNAME'+rowno+'"  name="RCOD_DOCNAME" disabled class="form-control DSVLBL form-control">';

       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
       						$(htmldata).find('[name=RCOD_UNIQNO'+rowno+']').attr("value",data);

       	    	   			return htmldata[0].outerHTML;
        			 }
        		 },
				 { targets: 14, "render": function ( data, type, row, meta ) {  
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="text" id="RCOD_AUTODD'+rowno+'"  name="RCOD_AUTODD" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
        	   			

        				if ($(htmldata).find('[name=RCOD_AUTODD'+rowno+']').hasClass("IsCURCommaFields"))
        					{
        					data = CURCommaSep(data);
        					}
        					
        				
        	   			$(htmldata).find('[name=RCOD_AUTODD'+rowno+']').attr("value",data);

        	   			
        	   			return htmldata[0].outerHTML;
        			 }
        		 },
				 { targets: 15, "render": function ( data, type, row, meta ) {  
        				var rowno = meta.row;	 
        	      		var HTML =	'<span><input type="text" disabled id="RCOD_CUSTYPE'+rowno+'"  name="RCOD_CUSTYPE"  maxlength="100" class="form-control  form-control"></span>';			 
        	      			 
        	      		var htmldata = $(HTML);
        	   			

        				if ($(htmldata).find('[name=RCOD_CUSTYPE'+rowno+']').hasClass("IsCURCommaFields"))
        					{
        					data = CURCommaSep(data);
        					}
        					
        				
        	   			$(htmldata).find('[name=RCOD_CUSTYPE'+rowno+']').attr("value",data);

        	   			
        	   			return htmldata[0].outerHTML;
        			 }
        		 }
				 ,{ targets: 16, "render": function ( data, type, row, meta ) {  

var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary RCKYGRDMNDTRY VRFYz SampledInit" data-quey-sec="S01"  onchange="CheckQuery(this);" id="RCOD_RCUSTATUS'+rowno+'" name="RCOD_RCUSTATUS">';
       	       			HTML = HTML + '<option value="">Select</option>';
					if($("#RCUGROUP").val() == "ERCU")
					{
						HTML = HTML + '<option value="Sample Initiated">Sample Initiated</option><option value="Sampled">Sampled</option>';
					}
					else
					{
						HTML = HTML + '<option value="Query">Query</option><option value="Not Screened">Not Screened</option><option  value="Screened">Screened</option><option value="Sample Initiated">Sample Initiated</option><option value="Sampled">Sampled</option>';
					}
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
       	       			
       	       			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCOD_RCUSTATUS]').attr("prevvalue",data);

       	  	 return htmldata[0].outerHTML;

			 
       			 
       		
       				
       			
       			
                } 
       		 },
			 
			 { targets: 17, "render": function ( data, type, row, meta ) {                            
       			if((row[16]=="Query"))
       				{
       				var rowno = meta.row;	 
    				var HTML =	'<span><button type="button"  id="QureySave'+rowno+'" data-quey-sec="S01" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px;" class="btn btn-Syeloutline waves-effect waves-light QureySave RaiseQry">Raise Query</button>';			 
    				HTML = HTML + '</span>'; 
    					 
    				var htmldata = $(HTML);
    					

    													
    					return htmldata[0].outerHTML;  
       				}
       			else{
       				var rowno = meta.row;	 
       				var HTML =	'<span><button type="button"  id="QureySave'+rowno+'" data-quey-sec="S01" data-aria="" data-form="PersonalInfo" style="width:55px;height:25px;display:none;" class="btn btn-Syeloutline waves-effect waves-light QureySave RaiseQry">Raise Query</button>';			 
    				HTML = HTML + '</span>'; 
    				var htmldata = $(HTML);
					

					
					return htmldata[0].outerHTML;  
       			}
       			
      		}
       		 },
       		{ targets: 18, "render": function ( data, type, row, meta ) {                            
				                            
       			if((row[16]=="Query") || (row[16]=="Sample Initiated"))
       				{
       				var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary" onchange="EnsureRaiseDef(this)"  id="RCOD_RESULT'+rowno+'" name="RCOD_RESULT">';
					
					HTML = HTML + QueryResult;
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
    					

    					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCOD_RESULT]').attr("prevvalue",data);								
    					return htmldata[0].outerHTML;  
       				}
					else if((row[16]=="Not Screened"))
       				{
       				var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary" onchange="EnsureRaiseDef(this)"  id="RCOD_RESULT'+rowno+'" name="RCOD_RESULT">';
					
					HTML = HTML + ScreenedResult;
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
    					

    					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCOD_RESULT]').attr("prevvalue",data);								
    					return htmldata[0].outerHTML;  
       				}
					else if(row[16]=="Screened")
					{
						var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary" onchange="EnsureRaiseDef(this)"  id="RCOD_RESULT'+rowno+'" name="RCOD_RESULT">';
					
					HTML = HTML + ScreenedResult2;
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
    					

    					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCOD_RESULT]').attr("prevvalue",data);								
    					return htmldata[0].outerHTML; 
					}
					else if((row[16]=="Sampled"))
					{
						var rowno = meta.row;       			 
       	       		var HTML =    '<span><select  class="Gridmdb-select md-form colorful-select dropdown-primary" onchange="EnsureRaiseDef(this)"  id="RCOD_RESULT'+rowno+'" name="RCOD_RESULT">';
					
					HTML = HTML + SampledResult;
					  HTML=HTML+ '</select></span>';      			
       	       			var htmldata = $(HTML);
    					

    					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
						$(htmldata).find('[name=RCOD_RESULT]').attr("prevvalue",data);								
    					return htmldata[0].outerHTML;  
					}
       			else{
       				var rowno = meta.row;	 
       				var HTML =    '<span style="display:none" ><select  class="Gridmdb-select md-form colorful-select dropdown-primary" style="display:none"  id="RCOD_RESULT'+rowno+'" name="RCOD_RESULT">';
					
					HTML = HTML + '<option value="">Select</option><option value="Query">Query</option><option value="Not Screened">Not Screened</option><option  value="Screened">Screened</option><option value="Sample Initiated">Sample Initiated</option><option value="Sampled">Sampled</option>';
					  HTML=HTML+ '</select></span>';  
    				var htmldata = $(HTML);
					$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");
					$(htmldata).find('[name=RCOD_RESULT]').attr("prevvalue",data);								
					

					
					return htmldata[0].outerHTML;  
       			}
       			
      		}
       		 }
			 
			 ,
			  
			 { targets: 20, "render": function ( data, type, row, meta ) {  

						var rowno = meta.row;	
       			
       			var Addvalue = "";
	
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="IRCUREMARKPOPUP(this)" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="RCOD_REMARK'+rowno+'"  name="RCOD_REMARK" disabled class="form-control DSVLBL form-control">';
	

       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
       						$(htmldata).find('[name=RCOD_REMARK]').attr("value",data);

       	    	   			return htmldata[0].outerHTML;
							
							
							
							
        			 }
        		 }
           	
           	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }

 function ChecklistDropdownvalue()
 {
	$("#RCKY_DOCNAME").val('');
	$("#DOCU_KYC").val('');
	$('#DOCU_KYC').material_select("destroy");	
	$('#DOCU_KYC').material_select();
    $('.DocChkBox').val('');
    $('.DocChkBox').prop("checked", false)
    
    $("#RCKY_DOCATTACHMENT").val('');
    $(".DDV").hide()
    $(".DDU").show()
    $(".name").text('Click Here to Upload')
    $("input[name=datafile]").attr('disabled',false);
 }

 function CheckProStatus()
 {
   var ProperStatus=$("#IRCM_PROPSTATUS"). val()
   
   if(ProperStatus=="Not Collected")
	   {
	   $("#IRCM_PROPOSV"). prop("checked", false);
	   $("#IRCM_PROPOSV").attr('disabled',true)
       }
   else
	   {
        $("#IRCM_PROPOSV").attr('disabled',false)
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
    //  var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
   //   var Filename  = names.replace(',','')
	    var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
	  
	  
			var Proof=$($(id).closest('.tbodytr').find('.tbodytrtd')[1]).text()
		if(Proof=='ADDRESS PROOF 1')
		{
		Proof="ADDRESSPROOF"
		}
		else if(Proof=='ADDRESS PROOF 2')
		{
			Proof="ADDRESSPROOF"	
		}
		else if(Proof=='ADDRESS')
		{
		Proof="ADDRESS"
		}
		else if(Proof=='ID PROOF')
		{
		Proof="IDPROOF"	
		}
		else if(Proof=='SIGN PROOF')
		{
		Proof="SIGNPROOF"		
		}
		else if(Proof=='DOB PROOF')
		{
		Proof="DOBPROOF"		
		}
		else if(Proof=='ID')
		{
	    Proof="ID"		
		}
		else if(Proof=='SIGN')
		{
		Proof="SIGN"		
		}
		else if(Proof=='DOB')
		{
		Proof="DOB"		
		}
		else if(Proof=='Others')
		{
		Proof="Others"		
		}
		
		
		
		
			
	/*	if($("#HIDDENCUSTYP").val()=='Non-Individual')
	   {
		 Proof="Others"	
	   }*/
		
        var xml=UI_getdata(FileType,FileSize,Filename,Proof,$("#HIDDENCUSTYP").val()+'|'+$("#PrcsID").val(),"LSW_SGETRCKYOCUMNTTYPE")
		var FileAccept=$(xml).find('RESULT').text()
		
		
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$("#HIDDENIPLDST").val('Fail');
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }	 

 	/*	var xml=UI_getdata(FileType,FileSize,"","","","LSW_SGETRCKYOCUMNTTYPE")
 		
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
		$($(Evnt).closest('td').next().next().next().find('input[type=checkbox]')[0]).removeClass("RCKYGRDMNDTRY");
		$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[10]).find('input[type=checkbox]').prop("checked", false);
		$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[10]).find('input[type=checkbox]').attr("disabled","disabled");
		$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[11]).find('button').hide();
		var op = UI_getdata($('select[id="'+$(Evnt).attr("id")+'"]').val().replace(/ /g,""),$("#PrcsID").val(),$('.admin-panel .col-lg-12 .active').attr('id'),'','',"LSW_GETKYCSPEFYURL")
		
		$(Evnt).closest('td').next().find('input[type=text]').val($(op).find($('select[id="'+$(Evnt).attr("id")+'"]').val().replace(/ /g,"")).text());
		
		if($(op).find($('select[id="'+$(Evnt).attr("id")+'"]').val().replace(/ /g,"")).text() != ""){
			$(Evnt).closest('.tbodytrtd').next().find('.ViewAttch').show();
		}
		else{
			$(Evnt).closest('.tbodytrtd').next().find('.ViewAttch').hide()
		}
	   
		 $(Evnt).closest('td').next().next().find('input[type=text]').val($(op).find($('select[id="'+$(Evnt).attr("id")+'"]').val().replace(/ /g,"")+'CRDT').text());
		
         var DDID=$(Evnt).closest('td').next().next().next().next().next().next().next().next().next().next().next().find('input[type=hidden]').attr('id')
        
		$("#"+DDID).attr("maxlength",$(op).find('SIZE').text())
		
		$("#"+DDID).val($(op).find($('select[id="'+$(Evnt).attr("id")+'"]').val().replace(/ /g,"")+"1").text())

	       var DATAVAL=$(Evnt).closest('td').next().find('input[type=text]').val()
	       if(DATAVAL!="")
	       {
              $(Evnt).closest('td').next().next().next().next().find('input[type=radio]:first').prop('checked', true);
              $($(Evnt).closest('td').next().next().next().find('input[type=checkbox]')[0]).addClass("RCKYGRDMNDTRY");
	          $(Evnt).closest('.tbodytrtd').next().next().next().find('span').show();
			  $($(Evnt).closest('.tbodytr').find('.tbodytrtd')[10]).find('input[type=checkbox]').removeAttr("disabled");
	          $($(Evnt).closest('.tbodytr').find('.tbodytrtd')[11]).find('button').show();
           }
	       else
	       {
			 $(Evnt).closest('td').next().next().next().next().next().next().next().next().next().next().next().next().find('input[type=text]').val('No')
	       }
			
			if($(op).find($('select[id="'+$(Evnt).attr("id")+'"]').val().replace(/ /g,"")+"1").text() == "")
			{
			  $(Evnt).closest('td').next().next().next().next().next().next().next().next().next().next().next().next().find('input[type=text]').val('No')
			}
			else
			{
			   $(Evnt).closest('td').next().next().next().next().next().next().next().next().next().next().next().next().find('input[type=text]').val('Yes')
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

	//var flname = IOP+LoadFrmXML("RT090")+"&__format=pdf&@PARAM1="+PrcsId+"&@PARAM2="+$("#DMY7").val().split("|")[9]+"&@PARAM3="+$("#DMY7").val().split("|")[8]+"&__filename=EndUse_"+$("#DMY7").val().split("|")[7]+".pdf";
	var flname = IOP+LoadFrmXML("RT090")+"&__format=pdf&@PARAM1="+PrcsId+"&@PARAM2="+$("#DMY7").val().split("|")[9]+"&@PARAM3="+$("#DMY7").val().split("|")[8]+"&__filename=EndUse_"+$("#DMY7").val().split("|")[7]+".pdf";
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function UpdtDefrFlg(evnt,toid){
	
	if(toid=="RCBK_DEFRSTUS"){
		if(evnt.value=="Last 6 months"){
			$(evnt).closest('.DYNROW').find('input[name='+toid+']').val("Pending for Deferment");
			$(evnt).closest('.DYNROW').find('input[name='+toid+']').next().addClass('active');
			//$(evnt).closest('.DYNROW').find('input[name=RCBK_FINANOSV]').prop("checked",false);
			//$(evnt).closest('.DYNROW').find('input[name=RCBK_FINANOSV]').closest('.md-form').hide();
			
		}
		else{
			$(evnt).closest('.DYNROW').find('input[name='+toid+']').val("");
			$(evnt).closest('.DYNROW').find('input[name='+toid+']').next().removeClass('active');
			//$(evnt).closest('.DYNROW').find('input[name=RCBK_FINANOSV]').prop("checked",true);
			$(evnt).closest('.DYNROW').find('input[name=RCBK_FINANOSV]').closest('.md-form').show();
		}
	}
	else if(toid=="IRCM_DEFRSTUS"){
		if(evnt.value=="Last 1 year"){
			$("#"+toid).val("Pending for Deferment");
			$("#"+toid).next().addClass('active');
			//$("#IRCM_FINANOSV").prop("checked",false);
			//$("#IRCM_FINANOSV").closest('.md-form').hide();
		}
		else{
			$("#"+toid).val("");
			$("#"+toid).next().removeClass('active');
			$("#IRCM_FINANOSV").closest('.md-form').show();
		}
	}
}

function CheckDocTypeOnAddr(ADDRPROOFID){
	if($("#HIDDENSAMEADDR").val()=="false"){
		if($(ADDRPROOFID).closest('td').prev().text() == "ADDRESS PROOF 1" || $(ADDRPROOFID).closest('td').prev().text() == "ADDRESS PROOF 2"){
			if($(ADDRPROOFID).closest('td').prev().text() == "ADDRESS PROOF 1"){
				if($(ADDRPROOFID).closest('tr').prev().find('.ADDRPROOFID').is('input') == true){
					if((ADDRPROOFID.value == $(ADDRPROOFID).closest('tr').next().find('.ADDRPROOFID').val()))
					{
						ADDRPROOFID.value = "";
						$("#"+ADDRPROOFID.id).material_select();
						alert("Communication and Permanent Address are different, So Doument Name in Address Proof 1 and Address Proof 2 can't be same");
						return false;
					}
				}
				else{
					if((ADDRPROOFID.value == $(ADDRPROOFID).closest('tr').next().find('.ADDRPROOFID select').val()))
					{
						ADDRPROOFID.value = "";
						$("#"+ADDRPROOFID.id).material_select();
						alert("Communication and Permanent Address are different, So Doument Name in Address Proof 1 and Address Proof 2 can't be same");
						return false;
					}
				}
			}
			else if($(ADDRPROOFID).closest('td').prev().text() == "ADDRESS PROOF 2"){
					if($(ADDRPROOFID).closest('tr').prev().find('.ADDRPROOFID').is('input') == true){
						if((ADDRPROOFID.value == $(ADDRPROOFID).closest('tr').prev().find('.ADDRPROOFID').val()))
						{
							ADDRPROOFID.value = "";
							$("#"+ADDRPROOFID.id).material_select();
							alert("Communication and Permanent Address are different, So Doument Name in Address Proof 1 and Address Proof 2 can't be same");
							return false;
						}
					}
					else{
						if((ADDRPROOFID.value == $(ADDRPROOFID).closest('tr').prev().find('.ADDRPROOFID select').val()))
						{
							ADDRPROOFID.value = "";
							$("#"+ADDRPROOFID.id).material_select();
							alert("Communication and Permanent Address are different, So Doument Name in Address Proof 1 and Address Proof 2 can't be same");
							return false;
						}
					}
				}
			}
		}
	}
	
	
	
 function PopFldToDrpDwn(Evnt)
 {
	 var EXTERNALRCU = UI_getdata("","","","","","LSW_SGETEXTERNALVENDOR");

        $("#MobIPopup").click();
        $("#RECMTO").empty();
		$("#RECMTO").append($(EXTERNALRCU).find("RESULT").html());
		$("#RECMTO").material_select('destroy');
		$("#RECMTO").material_select(); 
}

function CheckQuery(Evnt)
{
	$(Evnt).closest("td").next().next().next().text($("#DMY10").val().split("|")[1])
	if(Evnt.value == "Query")
	{
		$(Evnt).closest("td").next().find("button").show()
	}
	else
	{
		$(Evnt).closest("td").next().find("button").hide()
	}
	if(Evnt.value == "")
	{
		$($(Evnt).closest("td").next().next().find('span')[0]).hide();
	}
	else
	{
		$($(Evnt).closest("td").next().next().find('span')[0]).show();
		$($(Evnt).closest("td").next().next().find("select")).material_select("destroy");
		$($(Evnt).closest("td").next().next().find("select")).empty();
		if(Evnt.value == "Query")
		{
			$($(Evnt).closest("td").next().next().find("select")).append(QueryResult);
		}
		else if(Evnt.value == "Not Screened")
		{
			$($(Evnt).closest("td").next().next().find("select")).append(ScreenedResult);
		}
		else if(Evnt.value == "Screened")
		{
			$($(Evnt).closest("td").next().next().find("select")).append(ScreenedResult2);
		}
		else if(Evnt.value == "Sample Initiated")
		{
			$($(Evnt).closest("td").next().next().find("select")).append(QueryResult);
		}
		else if(Evnt.value == "Sampled")
		{
			$($(Evnt).closest("td").next().next().find("select")).append(SampledResult1);
		}
		$($(Evnt).closest("td").next().next().find("select")).material_select();
	}
	
	
	var  INTIBUTTON=""
	 
	 for(var i=0;i<=$('.VRFYz').length;i++)
	{
	    var  value=$($('.VRFYz')[i]).val()
		if(value=="Sample Initiated")
		{
		INTIBUTTON="Y"	
		}
	}
	
	
	for(var i=0;i<$('.BankDetail2').find('.DYNROW').length;i++)
	{
	if($($('.BankDetail2').find('.DYNROW')[i]).find('[name=RPRD_RCUSTATUS]').val() == 'Sample Initiated')
	{
	INTIBUTTON="Y"	
	}
	}
	
	for(var i=0;i<$('.BankDetail1').find('.DYNROW').length;i++)
	{
	if($($('.BankDetail1').find('.DYNROW')[i]).find('[name=RCBK_RCUSTATUS]').val() == 'Sample Initiated')
	{
	INTIBUTTON="Y"	
	}
	}
	
	if(RLE != "ERCU")
	{
	if(INTIBUTTON=="Y")
	{
		$(".BTNINTERNAl").show()
	}
	else
	{
		$(".BTNINTERNAl").hide()
	}
	}
	
	
}


function CheckRCUINTI()
{ 
    var  INTIBUTTON=""
	 
	 for(var i=0;i<=$('.VRFYz').length;i++)
	{
	    var  value=$($('.VRFYz')[i]).val()
		if(value=="Sample Initiated")
		{
		INTIBUTTON="Y"	
		}
	}
	
	
	for(var i=0;i<$('.BankDetail2').find('.DYNROW').length;i++)
	{
	if($($('.BankDetail2').find('.DYNROW')[i]).find('[name=RPRD_RCUSTATUS]').val() == 'Sample Initiated')
	{
	INTIBUTTON="Y"	
	}
	}
	
	for(var i=0;i<$('.BankDetail1').find('.DYNROW').length;i++)
	{
	if($($('.BankDetail1').find('.DYNROW')[i]).find('[name=RCBK_RCUSTATUS]').val() == 'Sample Initiated')
	{
	INTIBUTTON="Y"	
	}
	}
	
	
	if(INTIBUTTON=="Y")
	{
		$(".BTNINTERNAl").show()
	}
	else
	{
		$(".BTNINTERNAl").hide()
	}

}









function EnsureRaiseDef(Evnt)
{	
	if(CheckRaiseDef(Evnt) == false)
	{
		return;
	}
	if(Evnt.value == "DEFERRAL")
	{
	if(confirm("Are you sure to mark the document as "+Evnt.value))
	{
		var Vendorname=''
		var UNIQid=$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=RCKY_DOCNAME]').val()
		var UNIQid1=$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=RCKY_DOCNAME]').val()
		var GROUP='RCU'
		var ADDR=''
	
		var XML='<DEVCODE>DEV0003</DEVCODE><TYPE>RCU</TYPE><VENDORID>'+Vendorname+'</VENDORID><BRID></BRID><PRCSID>'+$("#PrcsID").val()+'</PRCSID><PROPNO>'+UNIQid+'</PROPNO><UNIQNO>'+UNIQid1+'</UNIQNO><SEQNO></SEQNO><CATEGORY>'+GROUP+'</CATEGORY><REMARKS></REMARKS><CRNTSTATUS>To be Initiated</CRNTSTATUS><ADDR>'+ADDR+'</ADDR>'	
		 
			 var DEVXML=UI_getdata(XML,"","","","","LSW_SPUSHDATATODEV")
             var DESCRIPTION=$(DEVXML).find('DESCRIPTION').text();
			 var STATUS=$(DEVXML).find('STATUS').text();	
			 var SEQNO=	$(DEVXML).find('SEQNO').text();	
			 if(STATUS!="Y")
			 {
			   alert(DESCRIPTION)
              return false;	
			  
             }
			 alert(DESCRIPTION)
			 
			 
		$("#Save4").click();
	}
	else
	{
		Evnt.value=""
		$(Evnt).material_select("destroy");
		$(Evnt).material_select();
	}
	}
	else if(Evnt.value == "NO DEFERRAL"){
		if(confirm("Are you sure to mark the document as "+Evnt.value))
		{
		$("#Save4").click();
		}
		else
		{
			Evnt.value=""
			$(Evnt).material_select("destroy");
			$(Evnt).material_select();
		}
	}
	else if(Evnt.value == "NEGATIVE")
	{
	if(confirm("Are you sure to mark the document as "+Evnt.value))
	{
		var Vendorname=''
		var UNIQid=$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=RCKY_DOCNAME]').val()
		var UNIQid1=$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=RCKY_DOCNAME]').val()
		var GROUP='RCU'
		var ADDR=''
	
		var XML='<DEVCODE>DEV0003</DEVCODE><TYPE>RCU</TYPE><VENDORID>'+Vendorname+'</VENDORID><BRID></BRID><PRCSID>'+$("#PrcsID").val()+'</PRCSID><PROPNO>'+UNIQid+'</PROPNO><UNIQNO>'+UNIQid1+'</UNIQNO><SEQNO></SEQNO><CATEGORY>'+GROUP+'</CATEGORY><REMARKS></REMARKS><CRNTSTATUS>To be Initiated</CRNTSTATUS><ADDR>'+ADDR+'</ADDR>'	
		 
			 var DEVXML=UI_getdata(XML,"","","","","LSW_SPUSHDATATODEV")
             var DESCRIPTION=$(DEVXML).find('DESCRIPTION').text();
			 var STATUS=$(DEVXML).find('STATUS').text();	
			 var SEQNO=	$(DEVXML).find('SEQNO').text();	
			 if(STATUS!="Y")
			 {
			   alert(DESCRIPTION)
              return false;	
			  
             }
			 alert(DESCRIPTION)
			 
			 
		$("#Save4").click();
	}
	else
	{
		Evnt.value=""
		$(Evnt).material_select("destroy");
		$(Evnt).material_select();
	}
	}
	
	
	
	
	
	
}

function CheckRaiseDef(Evnt){
	var UNIQid=$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[9]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[1]).text()+'-'+$($(Evnt).closest('.tbodytr').find('.tbodytrtd')[2]).find('[name=RCKY_DOCNAME]').val()
	
	 
	var DEVXML=UI_getdata($("#PrcsID").val(),UNIQid,"","","","LSW_SCHKPUSHDEF");
	var DESCRIPTION=$(DEVXML).find('DESCRIPTION').text();
	var STATUS=$(DEVXML).find('STATUS').text();	
	var SEQNO=	$(DEVXML).find('SEQNO').text();	
	if(STATUS!="Y")
	 {
		Evnt.value=$(Evnt).attr("prevvalue");
		$(Evnt).material_select("destroy");
		$(Evnt).material_select(); 
		alert(DESCRIPTION)
		return false;	
	 }
	 else{
		 $(Evnt).attr('prevvalue', Evnt.value);
		 $(Evnt).material_select("destroy");
		$(Evnt).material_select(); 
		 return true;	
	 }
	
}


function IRCUREMARKPOPUP(Evnt){
	//var ClosID = $(Evnt).next()
	//var val = ClosID.val();
	var ClosID = $(Evnt).next()
	var val =$("#"+ClosID.attr('id')).val()
	
	var DocName=$(Evnt).next().next()
	var DDVal =$("#"+DocName.attr('id')).val()
	
	$("#REMARKS1Popup").click();
	$("#IRCUUNIQID").val($(ClosID).attr("id"))
	
	$("#IRCUREMAKDATA").val(val);
		
}

function IRCUREMARKSUBMIT(Evnt){
	var todata = $("#IRCUUNIQID").val();
	var totabel = $(Evnt).attr('data-tabel')
	
	if(totabel != undefined)
	{
		$("#"+totabel).find("#"+todata).val($("#IRCUREMAKDATA").val())
		$("#REMARKS1POPCLOSE").click();
		return;
	}
	$("#"+todata).val($("#IRCUREMAKDATA").val());
		$("#REMARKS1POPCLOSE").click();
}


function DOWNLOADALLDOC()
{ 
  
	 
	 for(var i=0;i<$('.ViewAttch').length;i++)
	{
	   $('.ViewAttch')[i].click()
	
	}
	
}


function CheckKYCMANDRY(TableID,FldClas,HDR)
 {
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	   var RTNVAL="";
	 for(i=0;i<Doclength;i++)
		  {
	       if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[16]).find('input[type=text]').val()=="")
		   {
	        RTNVAL = "Fill the Mandatory Fields Status"+ " - "+HDR;
			return RTNVAL;
		   }
		   
		   if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[16]).find('input[type=text]').val()=="Select")
		   {
	        RTNVAL = "Fill the Mandatory Fields Status"+ " - "+HDR;
			return RTNVAL;
		   }
		   
		 }
	  
		return RTNVAL;  
 }