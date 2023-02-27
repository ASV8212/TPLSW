$(document).ready(function () {

$($('.AFormaccordion')[0]).click();

	/* var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHECKSECURITY");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=='Y')	
	{
		$(".PROPERTY").show()
	}
	else
	{
		$(".PROPERTY").hide()
	} */	
	/* 
	var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSECURITYNDTYPE");
	var chksec=$(result).find("RESULT").text();
	var chkval=$(result).find("VALUATION").text(); 
	var chkleg=$(result).find("LEGAL").text(); 
	
	if(chksec=='Y')	
	{
		$(".PROPERTY").show();	
		$(".LEGAL").show();		
	}
	else
	{
		$(".PROPERTY").hide();
		$(".LEGAL").hide();
	}	
	if(chkval=='Y')
	{
		$(".PROPERTY").show();
	}
	else{
		$(".PROPERTY").hide();
	}
	if(chkleg=='Y')
	{
		$(".LEGAL").show();
	}
	else{
		$(".LEGAL").hide();
	}
	
	 */

//	FormDataFromDB("LSW_TDEDUBEDETAILS","DEDE_","DEDEDBfields", "");
	
	LoadMultiData("",$("#PrcsID").val(),"","COVERAGERATIO","REPTDBfields","LSW_SREPORTSVALUATION");
	
	LoadMultiData("",$("#PrcsID").val(),"","OFFICE","REPODBfields","LSW_SREPORTOFFICEVER");
	
	
	
	  
 ///  $("#REPT_ACTIONI").text(ButtonName);
   
   var DATA=["COVERAGERATIO|"];

   for (j=0;j<DATA.length;j++){
   	var ValuationID=DATA[j].split("|")[0];
   	var row = $("." + ValuationID).find(".DYNROW").length;
   	for (i=0;i<row;i++){
   		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
   		{   
            
   			var buttonname=$(HTML).find("[name='REPT_ACTION']").val()
   			$(HTML).find("[name='REPT_ACTIONI']").text(buttonname)

    var Status=  $(HTML).find("[name='REPT_STATUS']").val()
   	 if(Status=="Completed"||Status=="Verified")
	  {
   		$(HTML).find("[name='REPT_STATUS']").addClass('Btxt22')
     }
   else if(Status=="In Progress")
	   {
	   $(HTML).find("[name='REPT_STATUS']").addClass('Btxt23')
	   }
   else
	   {
	   $(HTML).find("[name='REPT_STATUS']").addClass('Btxt21')
       }
   			
   	}
   	}
    }
   
   
   
   var DATA=["OFFICE|"];

   for (j=0;j<DATA.length;j++){
   	var ValuationID=DATA[j].split("|")[0];
   	var row = $("." + ValuationID).find(".DYNROW").length;
   	for (i=0;i<row;i++){
   		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];

   		{   
            
   			var buttonname=$(HTML).find("[name='REPO_ACTION']").val()
   			$(HTML).find("[name='REPO_ACTIONI']").text(buttonname)

    var Status=  $(HTML).find("[name='REPO_STATUS']").val()
   	 if(Status=="Completed"||Status=="Verified")
	  {
   		$(HTML).find("[name='REPO_STATUS']").addClass('Btxt22')
     }
   else if(Status=="In Progress")
	   {
	   $(HTML).find("[name='REPO_STATUS']").addClass('Btxt23')
	   }
   else
	   {
	   $(HTML).find("[name='REPO_STATUS']").addClass('Btxt21')
       }
   			
   	}
   	}
    }
   
	
	LoadMultiData("",$("#PrcsID").val(),"","PROPERTY","PROPDBfields","LSW_SREPORTSVALUER");
	
	
	  var DATA=["PROPERTY|"];

	   for (j=0;j<DATA.length;j++){
	   	var ValuationID=DATA[j].split("|")[0];
	   	var row = $("." + ValuationID).find(".DYNROW").length;
	   	for (i=0;i<row;i++){
	   		var HTML =$("." + ValuationID).find(".DYNROW")[i];
	   		  {   
	            
	   			var buttonname=$(HTML).find("[name='PROP_TECHIACTION']").val()
	   			$(HTML).find("[name='PROP_TECHIACTIONBTN']").text(buttonname)

	   			var buttonname=$(HTML).find("[name='PROP_TECHIACTIONII']").val()
	   			$(HTML).find("[name='PROP_TECHIACTIONIIBTN']").text(buttonname)
	   			
				var buttonname=$(HTML).find("[name='PROP_TECHIACTIONIII']").val()
	   			$(HTML).find("[name='PROP_TECHIACTIONIIIBTN']").text(buttonname)
				
	   			var buttonname=$(HTML).find("[name='PROP_LEGALACTIONI']").val()
	   			$(HTML).find("[name='PROP_LEGALACTIONIBTN']").text(buttonname)
	   			
	   			
	   			var buttonname=$(HTML).find("[name='PROP_LEGALACTIONII']").val()
	   			$(HTML).find("[name='PROP_LEGALACTIONIIBTN']").text(buttonname)
	   			
	   			
				
				
	   			
	   		   var PROStatus=  $(HTML).find("[name='PROP_STATUS']").val()
	   	   	 if(PROStatus=="Completed"||PROStatus=="Verified")
	   		   {
	   	   		$(HTML).find("[name='PROP_STATUS']").addClass('Btxt22')
	   	       }
	   	   else if(PROStatus=="In Progress")
	   		   {
	   		   $(HTML).find("[name='PROP_STATUS']").addClass('Btxt23')
	   		   }
	   	   else
	   		   {
	   		   $(HTML).find("[name='PROP_STATUS']").addClass('Btxt21')
	   	       }
	   	   		
	   			
	   		     var PROStatusII=  $(HTML).find("[name='PROP_STATUSII']").val()
		   	   	 if(PROStatusII=="Completed"||PROStatusII=="Verified")
		   		   {
		   	   		$(HTML).find("[name='PROP_STATUSII']").addClass('Btxt22')
		   	       }
		   	   else if(PROStatusII=="In Progress")
		   		   {
		   		   $(HTML).find("[name='PROP_STATUSII']").addClass('Btxt23')
		   		   }
		   	   else
		   		   {
		   		   $(HTML).find("[name='PROP_STATUSII']").addClass('Btxt21')
		   	      }

	       var PROStatusIII=  $(HTML).find("[name='PROP_STATUSLIII']").val()
		   	   	 if(PROStatusIII=="Completed"||PROStatusIII=="Verified")
		   		   {
		   	   		$(HTML).find("[name='PROP_STATUSLIII']").addClass('Btxt22')
		   	       }
		   	   else if(PROStatusII=="In Progress")
		   		   {
		   		   $(HTML).find("[name='PROP_STATUSLIII']").addClass('Btxt23')
		   		   }
		   	   else
		   		   {
		   		   $(HTML).find("[name='PROP_STATUSLIII']").addClass('Btxt21')
		   	       }				  
		   	   		
	   			
	   		  var LEGALSTAI=  $(HTML).find("[name='PROP_STATUSLEGI']").val()
		   	   	 if(LEGALSTAI=="Completed"||LEGALSTAI=="Verified")
		   		   {
		   	   		$(HTML).find("[name='PROP_STATUSLEGI']").addClass('Btxt22')
		   	       }
		   	   else if(LEGALSTAI=="In Progress")
		   		   {
		   		   $(HTML).find("[name='PROP_STATUSLEGI']").addClass('Btxt23')
		   		   }
		   	   else
		   		   {
		   		   $(HTML).find("[name='PROP_STATUSLEGI']").addClass('Btxt21')
		   	       }
	   			
	   		 
	   		  var LEGALSTAII=  $(HTML).find("[name='PROP_STATUSLEGII']").val()
		   	   	 if(LEGALSTAII=="Completed"||LEGALSTAII=="Verified")
		   		   {
		   	   		$(HTML).find("[name='PROP_STATUSLEGII']").addClass('Btxt22')
		   	       }
		   	   else if(LEGALSTAII=="In Progress")
		   		   {
		   		   $(HTML).find("[name='PROP_STATUSLEGII']").addClass('Btxt23')
		   		   }
		   	   else
		   		   {
		   		   $(HTML).find("[name='PROP_STATUSLEGII']").addClass('Btxt21')
		   	       }
	  
	   		}
			
			
	var result=UI_getdata($("#PrcsID").val(),$(HTML).find("[name='PROP_PROPERTYNO']").val(),"","","","LSW_SCHKSECURITYNDTYPE");
	var chksec=$(result).find("RESULT").text();
	var chkval=$(result).find("VALUATION").text(); 
	var chkleg=$(result).find("LEGAL").text(); 
	if(chksec=='Y')	
	{
		$(HTML).find(".PROPERTY").show();	
		$(HTML).find(".LEGAL").show();		
	}
	else
	{
		$(HTML).find(".PROPERTY").hide();
		$(HTML).find(".LEGAL").hide();
	}	
	if(chkval=='Y')
	{
		$(HTML).find(".PROPERTY").show();
	}
	else{
		$(HTML).find(".PROPERTY").hide();
	}
	if(chkleg=='Y')
	{
		$(HTML).find(".LEGAL").show();
	}
	else{
		$(HTML).find(".LEGAL").hide();
	}
	
	   	}
	     }
	   

	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SREPORTSREC")
    $("#REPT_RCUREPORTS").val($(xml).find('REPORTS').text())
     $("#REPT_RCUSTATUS").val($(xml).find('STAUS').text())
     $("#REPT_RCUACTION").val($(xml).find('ACTION').text())
      $("#REPT_RCUACTIONBTN").text($(xml).find('Action').text());
	
	 $("#REPT_DTINITI").val($(xml).find('RCUI_DATEOFINIT').text())
     $("#REPT_DTCOMP").val($(xml).find('RCUI_DATEOFCOMP').text())
     $("#REPT_STATUS").val($(xml).find('RCUI_RCUSTATSU').text())
      $("#REPT_MODE").val($(xml).find('RCUI_RCUMODE').text())
     $("#REPT_RPTDATE").val($(xml).find('RCUI_RPTDATE').text())
     $("#REPT_UPLODOC").val($(xml).find('RCUI_UPLDDOC').text())
   //   $("#REPT_FILESTATUS").val($(xml).find('RCUI_FILESTATSU').text())
     
if($("#REPT_RCUSTATUS").val()=="Completed")
	{
	$("#REPT_RCUSTATUS").addClass('Btxt22')
    }
   else if($("#REPT_RCUSTATUS").val()=="In Progress")
	   {
         $("#REPT_RCUSTATUS").addClass('Btxt23')
	   }
   else
	   {
	   $("#REPT_RCUSTATUS").addClass('Btxt21')
       }
   
      
  // $("#DEDE_CUSID").val('C000401')
//	LoadMultiData("",$("#PrcsID").val(),"","APPDE","APDUDBfields","LSW_SGETDEDUPE");	
	
	//$("#CBLViewRpt").click()
   
	$('.FormSave').on('click', function() {
		

		if($(this).text() == "Save & Next")
			{

			var MndtryChk = ChkMandatoryFlds("LODEMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
			}
		
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		var DEDE_APPDETAILS = TxtGridsubmitdata_V2("APPDE","APDU_","DEDE_","APDUDBfields"); 
        AssignGridXmltoField("DEDE_APPDETAILS", DEDE_APPDETAILS)
        
            var DEDE_APPGRIDETAILS = TxtGridsubmitdata_V3("APPLGRIDTable","DEGR_","DEDE_");
		       AssignGridXmltoField("DEDE_APPGRIDETAILS", DEDE_APPGRIDETAILS);    
        
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#DEDE_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			
			if(CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}

			if($(this).text() == "Save & Next")
			{
				  NXTTAB(this);
			}
			
		});
		
	
	$(".UPDateRptPopup").click(function () {
		  $("#FIOFFICEUPDATE").click();

  
	var RowCount=$(this).closest('.DYNROW').attr('data-row')
	  var REPR_DateInitiate=$(this).attr("data-for").split("|")[0]
	  
	  
	  
 $("#DT_Inititate").val($("#"+REPR_DateInitiate+RowCount).val())
	
	  if($("#DT_Inititate").val()!="")
		  {
	  $("#DT_Inititate").next().addClass('active');
	  $("#DT_Inititate").attr('disabled',true)
		  }
	  else
		  {
		  $("#DT_Inititate").next().removeClass('active');
          }
	  
	  
	  var REPR_DateComp=$(this).attr("data-for").split("|")[1]
	  
	  
	  $("#DT_Complete").val($("#"+REPR_DateComp+RowCount).val());
	  if($("#DT_Complete").val()!="")
	  {
	$("#DT_Complete").next().addClass('active');
	  }
	  else
		  {
		  
		  $("#DT_Complete").next().removeClass('active');
		  }
	  
	  
	  var REPR_FISTATUS=$(this).attr("data-for").split("|")[2]
	  $("#FI_STATUS").val($("#"+REPR_FISTATUS+RowCount).val());
	  if($("#FI_STATUS").val()!="")
	  {
  	$("#FI_STATUS").next().addClass('active');
	 $('#FI_STATUS').val($("#"+REPR_FISTATUS+RowCount).val());
	 $('#FI_STATUS').material_select();
      }
	  else
		  {
		  $("#FI_STATUS").next().removeClass('active');
		  $('#FI_STATUS').val('');
		  $('#FI_STATUS').material_select("destroy");
		  $('#FI_STATUS').material_select();
		  }
	  
	  
	  var REPR_ReportDate=$(this).attr("data-for").split("|")[3]
	  $("#RPT_Date").val($("#"+REPR_ReportDate+RowCount).val());
	  if($("#RPT_Date").val()!="")
	  {
	$("#RPT_Date").next().addClass('active');
	  }
	  else
	  {
		  $("#RPT_Date").next().removeClass('active');  
      }
	   
	  
	  var REPR_Attachment=$(this).attr("data-for").split("|")[4]
	  $("#FIOFFICEATT").val($("#"+REPR_Attachment+RowCount).val());
	  if($("#FIOFFICEATT").val()!="")
	 {
	  $("#FIOFFICEATT").next().addClass('active');
	  $('.FIOFFICEATT').show()
	  $("#FIOFFICEATTUPLOAD").hide()
	  }
	  else
		{
		  $('.FIOFFICEATT').hide()
		  $("#FIOFFICEATTUPLOAD").hide()
        }
	  
	    
	  
	  var REPR_Remarks=$(this).attr("data-for").split("|")[5]
	  $("#OFRemarks").val($("#"+REPR_Remarks+RowCount).val());
	  if($("#OFRemarks").val()!="")
	  {
	$("#OFRemarks").next().addClass('active');
	  }
	  else
		  {
		  
		  $("#OFRemarks").next().removeClass('active');
		  }

		})
		
		
		
	$(".ViewUptRpt").click(function()
	{
		//var HTML=$(this).parent().parent().parent().parent();
		//$(HTML).find("[name=TEVD_FILESTATUS]").val('Initiated');
	//	var REFID=$(this).attr("data-aria").split("|")[2];
		
		var RowCount=$(this).closest('.DYNROW').attr('data-row')
		
		var PAGENAME=$(this).attr("data-aria").split("|")[3];
		var UNIQID=$(this).attr("data-aria").split("|")[4];
		var AlterUNIQID=$(this).attr("data-aria").split("|")[5];
		

		var UNIQID =$("#"+UNIQID+RowCount).val()
		var ALTNUNIQID=$("#"+AlterUNIQID+RowCount).val()
		var REPTSID="ViewReport"
		var Formactive = "";//$(".FormPageTab").find("li.active").attr("id");		  
 		var MainActive = $(".FormMainTabs").find("li.active").attr("id");
		RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs10="+MainActive+"&PrMs6="+UNIQID+"&PrMs5="+ALTNUNIQID;
		$(location).attr('href',encodeURI(RedirectURL));
	})
	

	
		
	$(".RCUPopup").click(function () {
		  $("#RCUUPDATE").click();

  
	//var RowCount=$(this).closest('.DYNROW').attr('data-row')
	  var REPR_DateInitiate=$(this).attr("data-for").split("|")[0]
	 $("#RDT_Inititate").val($("#"+REPR_DateInitiate).val())
	
	 if($("#RDT_Inititate").val()!="")
		  {
	  $("#RDT_Inititate").next().addClass('active');
	  $("#RDT_Inititate").attr('disabled',true)
		  }
	  else
		  {
		  $("#RDT_Inititate").next().removeClass('active');
		  $("#RDT_Inititate").attr('disabled',true)
          }
	  
	  
	  var REPR_DateComp=$(this).attr("data-for").split("|")[1]
	  
	  
	  $("#RDT_Complete").val($("#"+REPR_DateComp).val());
	  if($("#RDT_Complete").val()!="")
	  {
	$("#RDT_Complete").next().addClass('active');
	  }
	  else
		  {
		  
		  $("#RDT_Complete").next().removeClass('active');
		  }
	  
	  
	  var REPR_FISTATUS=$(this).attr("data-for").split("|")[2]
	  $("#RFI_STATUS").val($("#"+REPR_FISTATUS).val());
	  if($("#RFI_STATUS").val()!="")
	  {
  	$("#RFI_STATUS").next().addClass('active');
	 $('#RFI_STATUS').val($("#"+REPR_FISTATUS).val());
	 $('#RFI_STATUS').material_select();
      }
	  else
		  {
		  $("#RFI_STATUS").next().removeClass('active');
		  $('#RFI_STATUS').val('');
		  $('#RFI_STATUS').material_select("destroy");
		  $('#RFI_STATUS').material_select();
		  }
	  
	  
	  var REPR_ReportDate=$(this).attr("data-for").split("|")[3]
	  $("#RRPT_Date").val($("#"+REPR_ReportDate).val());
	  if($("#RRPT_Date").val()!="")
	  {
	$("#RRPT_Date").next().addClass('active');
	  }
	  else
	  {
		  $("#RRPT_Date").next().removeClass('active');  
      }
	   
	  
	  var REPR_Attachment=$(this).attr("data-for").split("|")[4]
	  $("#RFIOFFICEATT").val($("#"+REPR_Attachment).val());
	  if($("#RFIOFFICEATT").val()!="")
	 {
	  $("#RFIOFFICEATT").next().addClass('active');
	  $('.RFIOFFICEATT').show()
	  $("#RFIOFFICEATTUPLOAD").hide()
	  }
	  else
		{
		  $('.RFIOFFICEATT').hide()
		  $("#RFIOFFICEATTUPLOAD").hide()
        }
	  
	  var RCUMODE=$(this).attr("data-for").split("|")[6]
	 if($("#"+RCUMODE).val()=="Verify")
		 {
	  $('input[type=radio]:first').prop('checked', true)
		 }
	 else if (RCUMODE=="Collection")
	 {
      $('input[type=radio]:second').prop('checked', true) 
	 }
	  
	})
	

	
	$(".ViewRPTPDF").click(function () {
		 
       var Attachment=$(this).attr("data-for").split("|")[0]
          GrdDocDwnld(Attachment)
		})
		
		
	$(".ViewRPTPDFMULTI").click(function () {
			var RowCount=$(this).closest('.DYNROW').attr('data-row') 
          var Attachment=$(this).attr("data-for").split("|")[0]
			var Attachview= Attachment+RowCount
			var UNIQID=$(this).attr("data-for").split("|")[5]
			var ALTERUNIQID=UNIQID+RowCount
			
			var VENDOR=UI_getdata($("#PrcsID").val(),$('#'+ALTERUNIQID).val(),"","","","LSW_SGETVENDORSTATUSCHK")
		    var VENDORSTAT=$(VENDOR).find('RESULT').text()	
			  var VENDORNAME=$(VENDOR).find('VENDORNAME').text()	
		    if(VENDORSTAT=="VENDORCOMPLETED")
		    	{
		       ALTNUNIQID=$('#'+ALTERUNIQID).val()
        	   var PAGENAME=$(this).attr("data-for").split("|")[3]
        	   var IOP=window.location.origin;
        		var PrcsId=$("#PrcsID").val()
        		
        	    ajaxindicatorstart("Downloading.. Please wait");
        		
       if(PAGENAME=="TechIIPropeInfo")
		{
     	var flname = IOP+LoadFrmXML("RT091")+"&__format=pdf&Param1="+PrcsId+"&Param2="+ALTNUNIQID+"&__filename=TECHNICAL-"+$("#DMY7").val().split("|")[7]+"-"+VENDORNAME+".pdf";
		}
	    else if(PAGENAME=="LegalUpdateReport")
	    {
 	     var flname = IOP+LoadFrmXML("RT092")+"&__format=pdf&Param1="+PrcsId+"&Param2="+ALTNUNIQID+"&__filename=LEGAL-"+$("#DMY7").val().split("|")[7]+"-"+VENDORNAME+".pdf";
	    }
	    else if(PAGENAME=="FIResidVerify")
	    {
 	   var flname = IOP+LoadFrmXML("RT093")+"&__format=pdf&Param1="+PrcsId+"&Param2="+ALTNUNIQID+"&__filename=RESIDENCE-"+$("#DMY7").val().split("|")[7]+"-"+VENDORNAME+".pdf";
	    }
	    else if(PAGENAME=="FIOfficeVerify")
	    {
 	    var flname = IOP+LoadFrmXML("RT094")+"&__format=pdf&Param1="+PrcsId+"&Param2="+ALTNUNIQID+"&__filename=OFFICE-"+$("#DMY7").val().split("|")[7]+"-"+VENDORNAME+".pdf";
	    }
        		
        		var link=document.createElement('a');
        			document.body.appendChild(link);
        			link.download=flname;
        				link.href=flname;
        				link.click();
        				ajaxindicatorstop();
				
				}
           else
        	   {
               GrdDocDwnld(Attachview)
			   }
		})	

});
