$(document).ready(function () {
	
	//$($('.AFormaccordion')[0]).click();
	
	/* var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHECKSECURITY");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=='Y')	
	{
		$(".LNSEC").show();
		
		
	}
	else
	{
		$(".LNSEC").hide();
		
	} */	
	
	var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSECURITYTYPE");
	var chksec=$(result).find("RESULT").text();
	var chkval=$(result).find("VALUATION").text(); 
	var chkleg=$(result).find("LEGAL").text(); 
	var chkprop=$(result).find("PROP").text(); 
	
	if(chksec=='Y')	
	{
		$(".LNSEC").show();	
		$(".LEGAL").show();	
		$(".PROP").show();	
	}
	else
	{
		$(".LNSEC").hide();
		$(".LEGAL").hide();
		$(".PROP").hide();
	}	
	if(chkval=='Y')
	{
		$(".LNSEC").show();
	}
	else{
		$(".LNSEC").hide();
	}
	if(chkleg=='Y')
	{
		$(".LEGAL").show();
	}
	else{
		$(".LEGAL").hide();
	}
	if(chkprop=='Y')
	{
		$(".PROP").show();
	}
	else
	{
		$(".PROP").hide();
	}
	
	 if($("#RCUI_STATUS").val()=="")
	 {
		 $("#RCUI_STATUS").next().addClass('active')
		 $("#RCUI_STATUS").val('To be Initiated');
	 }	
	var tbl = $("#heading1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#heading1 a").attr("data-aria").split("|")[1];
	var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
	
	//FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	
	    if($("#VERTICAL").val()=="UCV")
		{
			$(".FIRESI").hide();
			$(".FIOFF").hide();
		}
	    else
		{
			$(".FIRESI").show();
			$(".FIOFF").show();
		}
	
	Branchname()
	
    LoadMultiData("",$("#PrcsID").val(),"","PropertyValuer1","TEVDDBfields","LSW_SGetTechPropDetls");
	 
	//LoadMultiData("",$("#PrcsID").val(),"","PropertyValuer2","TVIIDBfields","LSW_SGetTechIIPropDetls");
	
	//LoadMultiData("",$("#PrcsID").val(),"","PropertyValuer3","TIIIDBfields","LSW_SGetTechIIIPropDetls");
	
	//LoadMultiData("",$("#PrcsID").val(),"","LegalRpt","LEGDDBfields","LSW_SGetLegalDetls");
	
	//LoadMultiData("",$("#PrcsID").val(),"","LegalIIRpt","LDIIDBfields","LSW_SGETLEGALIIDETL");
	
	//LoadMultiData("",$("#PrcsID").val(),"","FIResidVerify","FIRVDBfields","LSW_SGetFIResidenDetls");
	
//	LoadMultiData("",$("#PrcsID").val(),"","FIOfficeVerify","FIOVDBfields","LSW_SGetFIOfficeDetls");	
	
//	//LoadMultiData("",$("#PrcsID").val(),"","PropVisitDoc","PVMDDBfields","LSW_SGETPROPVISITPH");
	
	//LoadMultiData("",$("#PrcsID").val(),"","MCAVerify","MCAVDBfields","LSW_SGetMCAVERIFY");
	
	//LoadMultiData("",$("#PrcsID").val(),"","PropVisit","PRVMDBfields","LSW_SGETPROPERVISIT");
	
		
	
	//MCAVERIFI()
	
	//ReAssignBranch()
	
   VendorDropdown()
	
  //CHKPRPVISIT();
	
var ADVAACTIVEPAGE=UI_getdata("","","","","","LSW_SGETADVASMARTSTAUS");

    var ADVAPAGESTATUS =$(ADVAACTIVEPAGE).find('STATUS').text();
   
    if(ADVAPAGESTATUS=="Inactive")
    	{
          $(".ADVA").hide();
    	}
    

	 
	  var DATA=["PropertyValuer1|TEVD_STATUS|TEVD_ADDPROPERTY|TEVD_WAVIER"]
     
	 for (j=0;j<DATA.length;j++)
		 {
	 
		 var ValuationID=DATA[j].split("|")[0];
	     var ValuationStatus=DATA[j].split("|")[1];
	     var FIOAddr=DATA[j].split("|")[2];
	     var Wavre=DATA[j].split("|")[3];
	 var row = $("." + ValuationID).find(".DYNROW").length;
		 
	 for (i=0;i<row;i++)
	 {
		 
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	
	var Status = $(HTML).find("[name=" + ValuationStatus + "]").val();	 
	var Addrs=$(HTML).find("[name=" + FIOAddr + "]").val();
	var Wav=$(HTML).find("[name=" + Wavre + "]:checked").val();
	var Finl=Addrs.replaceAll(' ', '');
	if(Finl=="")
	{
		$(HTML).find(".CHKADRS").hide();
		
	}
	else
	{
		$(HTML).find(".CHKADRS").show();
	}
	StatusData (Status,HTML,ValuationStatus,FIOAddr);
	if(Status=="To be Initiated")
				{
					if(Wav=="Waiver"||Wav=="Not Applicable")
					{
						$(HTML).closest('.DYNROW').find('.ValuationInitone').hide();
			
					
					}
					else
					{
						$(HTML).closest('.DYNROW').find('.ValuationInitone').show();
				
					}
				}
	 }
     }
	 
	


$("#BTNADVSMART").on('click', function() {
    	

    ADVASMARTMSTR()

   LoadMultiData("",$("#PrcsID").val(),"","ADVSMART","ADSMDBfields","LSW_SGETADVSAMRT");
   
    ADVDROPDOWN();
    ADVREPORTVIEW();
	
	if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
      }  
	  
	   if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 
	  
	  
   
});  
   

	
	   $("#BTNTECHIIVALUER").on('click', function() {
    	
    
    	LoadMultiData("",$("#PrcsID").val(),"","PropertyValuer2","TVIIDBfields","LSW_SGetTechIIPropDetls");
    	
    	TechII()
    	
   	 var DATA=["PropertyValuer2|TVII_STATUS|TVII_ADDPROPERTY|TVII_WAVIER"]
        
   	 for (j=0;j<DATA.length;j++)
   		 {
   		 
         var ValuationID=DATA[j].split("|")[0];
   	     var ValuationStatus=DATA[j].split("|")[1];
   	     var FIOAddr=DATA[j].split("|")[2];
   	      var Wavier=DATA[j].split("|")[3];
   	 var row = $("." + ValuationID).find(".DYNROW").length;
   		 
   	 for (i=0;i<row;i++)
   	 {
   		 
   	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
   	
   	var Status = $(HTML).find("[name=" + ValuationStatus + "]").val();	 
	var Addrs=$(HTML).find("[name=" + FIOAddr + "]").val();
	var Wav=$(HTML).find("[name=" + Wavier + "]:checked").val();
	var Finl=Addrs.replaceAll(' ', '');
	
	if(Finl=="")
	{
		$(HTML).find(".CHKADRSII").hide();
		
	}
	else
	{
		$(HTML).find(".CHKADRSII").show();
	}
   	StatusData (Status,HTML,ValuationStatus,FIOAddr);
	if(Status=="To be Initiated")
		{
			if(Wav=="Waiver"||Wav=="Not Applicable")
			{
				$(HTML).closest('.DYNROW').find('.ValuationInittwo').hide();
		
			
			}
			else
			{
				$(HTML).closest('.DYNROW').find('.ValuationInittwo').show();
		
			}
		}
   	 }
        }
		
		if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	  
     } 
   	 
	 
	  if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 
   if($("#DMY5").val().split('|')[2] == "ReCredit" && $("#PrMs1").val() != "View" && $(".FormMainTabs li.active").attr("id") == "FormMainTab5")
	   {
		   var op = UI_getdata($("#LogUsr").val(),"","","","","LSW_SGETUSRMAPROLE");
		   if($(op).find("ROLENAME").text() == "Credit")
		   {
			    for(var i = 0;i<$(".PropertyValuer2 ").find(".INPRINCSANC").length;i++)
			   {
				   if($($(".PropertyValuer2 ").find(".INPRINCSANC")[i]).is(":visible"))
				   {
					   $($(".PropertyValuer2 ").find(".INPRINCSANC")[i]).removeAttr("disabled")
				   }
			   } 
			   
		   }
	   }
});  
	


	 
	 //Start Tech 3 valuer
	 
	 $("#BTNTECHIIIVALUER").on('click', function() {
	    	
		    
			LoadMultiData("",$("#PrcsID").val(),"","PropertyValuer3","TIIIDBfields","LSW_SGetTechIIIPropDetls");
	    	
	    	TechIII();	
	    	
	   	 var DATA=["PropertyValuer3|TIII_STATUS|TIII_ADDPROPERTY|TIII_WAVIER"]
	        
	   	 for (j=0;j<DATA.length;j++)
	   		 {
	   		 
	         var ValuationID=DATA[j].split("|")[0];
	   	     var ValuationStatus=DATA[j].split("|")[1];
	   	     var FIOAddr=DATA[j].split("|")[2];
	   	     var Wavier=DATA[j].split("|")[3];
	   	 var row = $("." + ValuationID).find(".DYNROW").length;
	   		 
	   	 for (i=0;i<row;i++)
	   	 {
	   		 
	   	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	   	
	   	var Status = $(HTML).find("[name=" + ValuationStatus + "]").val();	
		var Addrs=$(HTML).find("[name=" + FIOAddr + "]").val();
		var Wav=$(HTML).find("[name=" + Wavier + "]:checked").val();
		var Finl=Addrs.replaceAll(' ', '');
		
		
		if(Finl=="")
		{
			$(HTML).find(".CHKADRSIII").hide();
		
		}
		else
		{
			$(HTML).find(".CHKADRSIII").show();
		}			
	   	StatusData (Status,HTML,ValuationStatus,FIOAddr);
		if(Status=="To be Initiated")
			{
				if(Wav=="Waiver"||Wav=="Not Applicable")
				{
					$(HTML).closest('.DYNROW').find('.ValuationInitthree').hide();
			
				
				}
				else
				{
					$(HTML).closest('.DYNROW').find('.ValuationInitthree').show();
			
				}
			}
	   	 }
	     }
	   	 
	   	DEVloadstatus();
		
		if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	  
     }
	 
	  if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 
	 
	 if($("#DMY5").val().split('|')[2] == "ReCredit" && $("#PrMs1").val() != "View" && $(".FormMainTabs li.active").attr("id") == "FormMainTab5")
	   {
		   var op = UI_getdata($("#LogUsr").val(),"","","","","LSW_SGETUSRMAPROLE");
		   if($(op).find("ROLENAME").text() == "Credit")
		   {
			    for(var i = 0;i<$(".PropertyValuer3 ").find(".INPRINCSANC").length;i++)
			   {
				   if($($(".PropertyValuer3 ").find(".INPRINCSANC")[i]).is(":visible"))
				   {
					   $($(".PropertyValuer3 ").find(".INPRINCSANC")[i]).removeAttr("disabled")
				   }
			   } 
			   
		   }
	   }
	 
	});  


	
//Start Legal 1
	 
	 
	 $("#BTNLEGALI").on('click', function() {
	    	
		    
		 LoadMultiData("",$("#PrcsID").val(),"","LegalRpt","LEGDDBfields","LSW_SGetLegalDetls");
	    	
		 LegalI();
	    	
	   	 var DATA=["LegalRpt|LEGD_STATUS"]
	        
	   	 for (j=0;j<DATA.length;j++)
	   		 {
	   		 
	         var ValuationID=DATA[j].split("|")[0];
	   	     var ValuationStatus=DATA[j].split("|")[1];
	   	     var FIOAddr=DATA[j].split("|")[2];
	   	     
	   	 var row = $("." + ValuationID).find(".DYNROW").length;
	   		 
	   	 for (i=0;i<row;i++)
	   	 {
	   		 
	   	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	   	
	   	var Status = $(HTML).find("[name=" + ValuationStatus + "]").val();	 
	   	StatusData (Status,HTML,ValuationStatus,FIOAddr);
	   	 }
	     }
	   	
if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	  
     } 	

 if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 	 
	   	if($("#DMY5").val().split('|')[2] == "ReCredit" && $("#PrMs1").val() != "View" && $(".FormMainTabs li.active").attr("id") == "FormMainTab5")
	   {
		   var op = UI_getdata($("#LogUsr").val(),"","","","","LSW_SGETUSRMAPROLE");
		   if($(op).find("ROLENAME").text() == "Credit")
		   {
			    for(var i = 0;i<$(".LegalRpt ").find(".INPRINCSANC").length;i++)
			   {
				   if($($(".LegalRpt ").find(".INPRINCSANC")[i]).is(":visible"))
				   {
					   $($(".LegalRpt ").find(".INPRINCSANC")[i]).removeAttr("disabled")
				   }
			   } 
			   
		   }
	   }
	});  
		  
	 
 $("#BTNLEGALII").on('click', function() {
	    	
		    
		 LoadMultiData("",$("#PrcsID").val(),"","LegalIIRpt","LDIIDBfields","LSW_SGETLEGALIIDETL");
	    	
		 LegalII();
	    	
	   	 var DATA=["LegalIIRpt|LDII_STATUS"]
	        
	   	 for (j=0;j<DATA.length;j++)
	   		 {
	   		 
	         var ValuationID=DATA[j].split("|")[0];
	   	     var ValuationStatus=DATA[j].split("|")[1];
	   	     var FIOAddr=DATA[j].split("|")[2];
	   	     
	   	 var row = $("." + ValuationID).find(".DYNROW").length;
	   		 
	   	 for (i=0;i<row;i++)
	   	 {
	   		 
	   	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	   	
	   	var Status = $(HTML).find("[name=" + ValuationStatus + "]").val();	 
	   	StatusData (Status,HTML,ValuationStatus,FIOAddr);
	   	 }
	     }
	   	 
	 	DEVloadstatus();

if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	  
     } 		
	 
	  if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 
	  
	  if($("#DMY5").val().split('|')[2] == "ReCredit" && $("#PrMs1").val() != "View" && $(".FormMainTabs li.active").attr("id") == "FormMainTab5")
	   {
		   var op = UI_getdata($("#LogUsr").val(),"","","","","LSW_SGETUSRMAPROLE");
		   if($(op).find("ROLENAME").text() == "Credit")
		   {
			    for(var i = 0;i<$(".LegalIIRpt ").find(".INPRINCSANC").length;i++)
			   {
				   if($($(".LegalIIRpt ").find(".INPRINCSANC")[i]).is(":visible"))
				   {
					   $($(".LegalIIRpt ").find(".INPRINCSANC")[i]).removeAttr("disabled")
				   }
			   } 
			   
		   }
	   }
	});  



 $("#BTNFIRESI").on('click', function() {
	    	
		    
		 LoadMultiData("",$("#PrcsID").val(),"","FIResidVerify","FIRVDBfields","LSW_SGetFIResidenDetls");
	    	
		 FIRES();
	    	
	   	 var DATA=["FIResidVerify|FIRV_STATUS"]
	        
	   	 for (j=0;j<DATA.length;j++)
	   		 {
	   		 
	         var ValuationID=DATA[j].split("|")[0];
	   	     var ValuationStatus=DATA[j].split("|")[1];
	   	     var FIOAddr=DATA[j].split("|")[2];
	   	     
	   	 var row = $("." + ValuationID).find(".DYNROW").length;
	   		 
	   	 for (i=0;i<row;i++)
	   	 {
	   		 
	   	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	   	
	   	var Status = $(HTML).find("[name=" + ValuationStatus + "]").val();	 
	   	StatusData (Status,HTML,ValuationStatus,FIOAddr);
	   	 }
	     }
	   	 
	 	if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	  
     } 
	 
	 
	  if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 
	  
	  
	});   
	 


 $("#BTNFIOFFICE").on('click', function() {
	    	
		    
			LoadMultiData("",$("#PrcsID").val(),"","FIOfficeVerify","FIOVDBfields","LSW_SGetFIOfficeDetls");	
	    	
			FIOFFICE();
	    	
	   	 var DATA=["FIOfficeVerify|FIOV_STATUS|FIOV_PROPADDR"]
	        
	   	 for (j=0;j<DATA.length;j++)
	   		 {
	   		 
	         var ValuationID=DATA[j].split("|")[0];
	   	     var ValuationStatus=DATA[j].split("|")[1];
	   	     var FIOAddr=DATA[j].split("|")[2];
	   	     
	   	 var row = $("." + ValuationID).find(".DYNROW").length;
	   		 
	   	 for (i=0;i<row;i++)
	   	 {
	   		 
	   	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	   	
	   	var Status = $(HTML).find("[name=" + ValuationStatus + "]").val();	 
	   	StatusData (Status,HTML,ValuationStatus,FIOAddr);
	   	 }
	     }
	   	 
	 	if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	  
     } 
	 
	  if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 
	  
	  
	});   
	 


 $("#BTNPROPERVISIT").on('click', function() {
	    	
		    
			LoadMultiData("",$("#PrcsID").val(),"","PropVisit","PRVMDBfields","LSW_SGETPROPERVISIT");
	    	
			  CHKPRPVISIT();
			  
			$('.PropVisit').find('.name').text('')
	
	
	var PVrow = $(".PropVisit").find(".DYNROW").length;
		 
	 for (i=0;i<PVrow;i++)
	 {
		 
	var HTML =	 $(".PropVisit").find(".DYNROW")[i];
	
	var AttachPho = $(HTML).find("[name=PRVM_DOCUPLOADPHO]").val();	 
	var Attach = $(HTML).find("[name=PRVM_DOCUPLOAD]").val();	 
	if(AttachPho=="")
	{
		
		
		//$(HTML).find('.Pho').hide();	 
		$(HTML).find('.Pho').css('display','none')	
	}
	if(Attach=="")
	{
		//$(HTML).find('DOCUP').hide();
       $(HTML).find('.DOCUP').css('display','none')			
	}
	
	 }
	  
			 
	if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	  
     } 		  
	
	
	 if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 
	  
	  
	 	
	});   
	 



 $("#BTNMCAVERIFI").on('click', function() {
	    	
		    
		 LoadMultiData("",$("#PrcsID").val(),"","MCAVerify","MCAVDBfields","LSW_SGetMCAVERIFY");
	    	
		 MCAVERIFI()
			  
			var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETMCAVERAPPLNAME")
		    var APPLNAME=$(xml).find('CUSTNAME').text()
		     $("#MCAV_APPLINAME").val(APPLNAME) 
		
if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	  
     } 	

 if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 

	  
	 	
	});   
	
	
   	 $("#BTNRCU").on('click', function() {
	    	
		    
		 var CHKresult=FormDataFromDB("LSW_TRCUINITIATION","RCUI_", "RCUIDBfields", "")
        $("#BTNRCUGRD").click();	
			
			RCUPage();
			
			if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	  
     } 
	 
	  if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 
	});   
	    
	 
	 
	 
	 
	/*
	 var op = UI_getdata($("#LogUsr").val(),"","","","","LSW_SGETUSRGRP1")
	 if($(op).find("groupId").text()=="BSM")
		 {
		 $(".TEVDDBfields").addClass('DSVLBL')
		 $(".TVIIDBfields").addClass('DSVLBL')
		 $(".TIIIDBfields").addClass('DSVLBL')
         $(".LEGDDBfields").addClass('DSVLBL')
		 $(".LDIIDBfields").addClass('DSVLBL')
		 $(".PRVMDBfields").addClass('DSVLBL')
		 $(".PVMDDBfields").addClass('DSVLBL')
		 $(".RCUIDBfields").addClass('DSVLBL')
		 $(".FIRVDBfields").addClass('DSVLBL')
		 $(".FIOVDBfields").addClass('DSVLBL')
		 $(".MCAVDBfields").addClass('DSVLBL')
         $(".btn").hide();
		 $(".file-field").hide();
         }
	*/
/*	var CHKresult=FormDataFromDB("LSW_TRCUINITIATION","RCUI_", "RCUIDBfields", "")
	
	if(CHKresult == "Fail")
	{
	  alert("Submission Failed");
	   return false;			
	}
	
	var CHKresult=FormDataFromDB("LSW_PROPVISTMAIN","PRVM_", "PRVMDBfields", "")
	
	if(CHKresult == "Fail")
	{
	  alert("Submission Failed");
	   return false;			
	}*/
	//$(".GRBI_CUSID").text($("#GRBI_CUSID").val());
	//var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETMCAVERAPPLNAME")
   // var APPLNAME=$(xml).find('CUSTNAME').text()
   //  $("#MCAV_APPLINAME").val(APPLNAME) 
	
	

	
	$("#headingOne1 a").attr("data-load","Yes");
	
	if($("#DMY7").val().split("|")[3]=="SFA") 
    {
      DSBVLTECH()
    }  
    
   if($("#DMY7").val().split("|")[3]=="STP") 
     {
      DSVLBLALL('')
	   // $('.ADVSMPDF').show();
     }  	
	
 if($("#PrMs1").val()=="View") 
     {
      DSVLBLALL('')
      } 
	
	
// New Applicant Details Start
	
	// New Applicant Details End
	
/*	$('.AFormaccordion').on('click', function() {
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		var tbl = $(this).attr("data-aria").split("|")[0];	
		var prfx = $(this).attr("data-aria").split("|")[1];
		if($(this).attr("aria-expanded") == "false")
			{
		FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", "");
			}
			
	});*/
	
	
	 $(document).on("change", ".VENDDATA" , function() {
	      
				
			var RowCount=$(this).closest('.DYNROW').attr('data-row')
				
				
			 var HTML=$(this).parent().parent().parent().parent();
			 if($(HTML).find(this).attr("data-vendor")!=undefined)
				{
			 var Group=$(HTML).find(this).attr("data-vendor").split("|")[0];
			 var BrID=$(HTML).find(this).attr("data-vendor").split("|")[1];
			 var VendorName=$(HTML).find(this).attr("data-vendor").split("|")[2];
			 
			 var UNIQID=$(HTML).find(this).attr("data-vendor").split("|")[3];
			 
			 var UNIQID=$("#"+UNIQID+RowCount).val()
			 
	         var BrID=$(HTML).find("[name="+BrID+"]").val()
			 var xml=UI_getdata(Group,BrID,$("#PrcsID").val(),UNIQID,"","LSW_SGETVALUATION")
			 $(HTML).find("[name="+VendorName+"]").empty();
			 $(HTML).find("[name="+VendorName+"]").append($(xml).find("RESULT").html());
			 $(HTML).find("[name="+VendorName+"]").material_select(); 
				}
			})
			
			

	 $(document).on("change", ".VENIDRELOAD" , function() {
	       
				
			var RowCount=$(this).closest('.DYNROW').attr('data-row')
				
				
			 var HTML=$(this).parent().parent().parent().parent();
			 if($(HTML).find(this).attr("data-vendor")!=undefined)
				{
			 var Group=$(HTML).find(this).attr("data-vendor").split("|")[0];
			 var BrID=$(HTML).find(this).attr("data-vendor").split("|")[1];
			 var VendorName=$(HTML).find(this).attr("data-vendor").split("|")[2];
			 
			 var UNIQID=$(HTML).find(this).attr("data-vendor").split("|")[3];
             var UNIQID=$("#"+UNIQID+RowCount).val()
			 
			 var ALTUNIQID=$(HTML).find(this).attr("data-vendor").split("|")[4];
             var ALTUNIQID=$("#"+ALTUNIQID+RowCount).val()
			 
	          var BrID=$(HTML).find("[name="+BrID+"]").val()
			  var VENDID=$(HTML).find("[name="+VendorName+"]").val()
			  
			  
			 
			 var xml=UI_getdata(Group,BrID,$("#PrcsID").val(),UNIQID+'|'+ALTUNIQID,VENDID,"LSW_SCHKVENDORID")
			 var Status= $(xml).find("STATUS").text()
			 if(Status=="PENDING")
			 {
			   alert($(xml).find("MSG").text())
			   return false;
			 }
			 else if(Status=="YES")
			 {
			 alert($(xml).find("MSG").text())
			 $(HTML).find("[name="+VendorName+"]").empty();
			 $(HTML).find("[name="+VendorName+"]").append($(xml).find("RESULT").html());
			//  $(HTML).find("[name="+VendorName+"]").material_select("destroy");
			 $(HTML).find("[name="+VendorName+"]").material_select(); 
			 }
			 }
			})		
			
			

	
 	
	 $(document).on("click", ".DELETEMCA" , function() {

		 	var PrcsId=$(this).attr("data-tab").split("|")[0];
		 //	var CusID=$(this).attr("data-tab").split("|")[1];
		 	var Type=$(this).attr("data-tab").split("|")[2];
		 	PrcsId=$("#PrcsID").val()
			 var html=$(this).closest('.DYNROW')
		     var UNIQID=$(html).find("[name=MCAV_MCAREFID]").val() 
		
		 	 if(confirm('Delete MCA Details') == true)
		 		{
		 		  var xml=UI_getdata(PrcsId,UNIQID,"MCADELETE","","","LSW_SCLEARCUSDATA");
		 		//  LoadMultiData("",$("#PrcsID").val(),$("#BKDT_CUSID").val(),"BankDetail1","BKDTDBfields","LSW_sGETBANKDLT");
		 		 location.reload(true);
		 		}
		 })
 	

$(document).on("change", ".DataToFldFIRESI" , function() {

		var Count=$(this).closest('.DYNROW').attr('data-row')
		if(Count>0)
			{
			var Datavalue = $(this).val();
			var ToFld = $(this).attr("data-change");
			$("#"+ToFld+Count).val($(this).find('option[value="' + Datavalue+ '"]').text());
			}
		else
			{
			 var Datavalue = $(this).val();
			 var ToFld = $(this).attr("data-change");
		     $("#"+ToFld).val($(this).find('option[value="' + Datavalue + '"]').text());
			}
		
		
		var row=$($('.FIResidVerify').find(event.target).closest('.DYNROW')[0]).attr('data-row');
		
		// onchange="SETVENDORNAME('FIRV_BRNAME','FIRV_VENDNAME','FIRV_BRANCHID','FIRV_VENDORID')" 
		//var BranchID=$(BranchID).val();
		

		 var BrIDVal=$("#FIRV_BRNAME"+row).val()
		  var VendorIDVal=$("#FIRV_VENDNAME"+row).val()
		   var BrNameVal=$("#FIRV_BRANCHID"+row).val()
		    var VendorNameVal=$("#FIRV_VENDORID"+row).val()
		 
		 var DATA=["FIOfficeVerify|"];
			var MemoData=DATA[0].split("|")[0];
			var row = $("." + MemoData).find(".DYNROW").length;
			for (j=0;j<row;j++)
			{  
				if($("#FIOV_VENDORID"+[j+1]).val()=="")
				{
	            $("#FIOV_BRANCHID"+[j+1]).val(BrNameVal)
		        $("#FIOV_VENDORID"+[j+1]).val(VendorNameVal)
		        
		        
		        var optn1="<option  value='"+BrIDVal+"'>" + BrNameVal + "</option>"
		        $("#FIOV_BRNAME"+[j+1]).append(optn1)
		        $("#FIOV_BRNAME"+[j+1]+" option:contains("+BrNameVal+")").attr("selected","selected")
		        
			//	$("#FIOV_BRANCHID"+[j+1]).val(BrNameVal);
		    	$("#FIOV_BRNAME"+[j+1]).material_select();
		    	
		    	 var optn2="<option  value='"+VendorIDVal+"'>" + VendorNameVal + "</option>"
			        $("#FIOV_VENDNAME"+[j+1]).append(optn2)
			        $("#FIOV_VENDNAME"+[j+1]+" option:contains("+VendorNameVal+")").attr("selected","selected")
			        
				//	$("#FIOV_BRANCHID"+[j+1]).val(VendorNameVal);
			    	$("#FIOV_VENDNAME"+[j+1]).material_select();
			 
		        
		       
				}
			
			}
			
			
		/*	 var DATA=["FIResidVerify|"];
				var MemoData=DATA[0].split("|")[0];
				var row = $("." + MemoData).find(".DYNROW").length;
				for (j=0;j<row;j++)
				{  
					if($("#FIRV_VENDORID"+[j+1]).val()=="")
					{
		            $("#FIRV_BRANCHID"+[j+1]).val(BrNameVal)
			        $("#FIRV_VENDORID"+[j+1]).val(VendorNameVal)
			        
			        
			        var optn1="<option  value='"+BrIDVal+"'>" + BrNameVal + "</option>"
			        $("#FIRV_BRNAME"+[j+1]).append(optn1)
			        $("#FIRV_BRNAME"+[j+1]+" option:contains("+BrNameVal+")").attr("selected","selected")
			        
				//	$("#FIOV_BRANCHID"+[j+1]).val(BrNameVal);
			    	$("#FIRV_BRNAME"+[j+1]).material_select();
			    	
			    	 var optn2="<option  value='"+VendorIDVal+"'>" + VendorNameVal + "</option>"
				        $("#FIRV_VENDNAME"+[j+1]).append(optn2)
				        $("#FIRV_VENDNAME"+[j+1]+" option:contains("+VendorNameVal+")").attr("selected","selected")
				        
					//	$("#FIOV_BRANCHID"+[j+1]).val(VendorNameVal);
				    	$("#FIRV_VENDNAME"+[j+1]).material_select();
				 
			        
			       
					}
				
				}
			*/
		
	})
	
	


    $(document).on("click", ".DELERPTUPLOAD" , function() {
    	
        if(confirm('Delete Property Details') == true)
    	 		{
                 $(this).closest('.DYNROW').remove()	
                }
    	 })

    

$(document).on("click", ".ValuationInit" , function() {
		
			  var RowHTML = $(this).parent().parent().parent().parent();
			  var prfx = $(this).attr("data-aria").split("|")[1];
			  var MndtryChk = ChkMandatoryFlds_V1(prfx+"Mndtry",RowHTML);
			  
			  	  var DEVTYPE = $(this).attr("data-for").split("|")[0];  
				  
				  
				  
			  if(DEVTYPE=="PropertyValuer2"||DEVTYPE=="PropertyValuer3"||DEVTYPE=="LegalRpt"||DEVTYPE=="LegalIIRpt")
				{
				  
				  var UN1=$(this).attr("data-info").split("|")[1];
				  var UNIQid = $(RowHTML).find("[name="+UN1+"]").val();
				  var GROUP=$(this).attr("data-info").split("|")[3];
				  var CHKADD=UI_getdata($("#PrcsID").val(),UNIQid,GROUP,"","","LSW_SCHKADDPROPERTY")
				  var ADDPROPERTY=$(CHKADD).find('RESULT').text()
				  
				    var PROPERTYINIT=$(CHKADD).find('PROPINIT').text()
				  
				  
				   if(DEVTYPE=="PropertyValuer3")
					   {
				      if(PROPERTYINIT!="YES")
					  {
					  alert('Cannot initiate Technical 3,Since '+PROPERTYINIT +' not initiated') 
					   return false;
                      } 
					  }
				  
				    if(DEVTYPE=="LegalIIRpt")
				     {
			       if(PROPERTYINIT!="YES")
				    {
				    alert('Cannot initiate Legal 2,Since '+PROPERTYINIT +' not initiated') 
					 return false;
                    } 
				    }
					
					
				  
				  if(ADDPROPERTY=="YES")
					{
					 alert('Cannot initiate,Since Property select as Additional Property') 
					   return false;
					}  
				}
			
		    var UID=$(this).attr("data-info").split("|")[1];
			var UIDValue=$("#"+UID+$(this).attr("data-row")).val()
			/*var Mndxml=UI_getdata($("#PrcsID").val(),$(this).attr("data-info").split("|")[3],UIDValue,"","","LSW_SCHECKADDR")
			  
			  if($(Mndxml).find('MSG').text()!="Yes")
			  {
				  alert($(Mndxml).find('MSG').text())
				  return false;
			  }
			  */
			  
			  if(MndtryChk == "Mandatory")
			   {
			   alert("Fill the Mandatory Fields / Document(s)");
			   return false;
			   }
			   
			   
				if(DEVTYPE=="FIOfficeVerify"||DEVTYPE=="FIResidVerify")
				{ 
			  if(confirm('Are you sure the entered address is correct or not , once initiated the entered address cannot be  editable') == true)
                 {
                  
                 } 
			  else
				  {
	                return false;
                  }
			  
				}
			  
			   if(DEVTYPE=="PropertyValuer1"||DEVTYPE=="PropertyValuer2"||DEVTYPE=="PropertyValuer3"||DEVTYPE=="LegalRpt"||DEVTYPE=="LegalIIRpt")
				{
				  
					var VendorName=$(this).attr("data-info").split("|")[0];
					var UN1=$(this).attr("data-info").split("|")[1];
					var UN2=$(this).attr("data-info").split("|")[2];
					var GROUP=$(this).attr("data-info").split("|")[3];
					var BranID=$(this).attr("data-info").split("|")[5];
					
					var BrID = $(RowHTML).find("[name="+BranID+"]").val();
					var VENDID = $(RowHTML).find("[name="+VendorName+"]").val();
					var UNIQID = $(RowHTML).find("[name="+UN1+"]").val();
					var ALTUNIQID = $(RowHTML).find("[name="+UN2+"]").val();
					
					 var xml=UI_getdata(GROUP,BrID,$("#PrcsID").val(),UNIQID+'|'+ALTUNIQID,VENDID,"LSW_SCHKVENDORID")
					 var Status= $(xml).find("STATUS").text()
					 if(Status=="PENDING")
					 {
						 alert($(xml).find("MSG").text())
						  return false;
					 }
					 else if(Status=="YES")
					 {
					     alert($(xml).find("MSG").text())
					 $(RowHTML).find("[name="+VendorName+"]").empty();
					 $(RowHTML).find("[name="+VendorName+"]").append($(xml).find("RESULT").html());
					 $(RowHTML).find("[name="+VendorName+"]").material_select(); 
					 return false;
					 }
				  
				}
			  
			  
			/*  if(DEVTYPE=="PropertyValuer1"||DEVTYPE=="PropertyValuer2"||DEVTYPE=="PropertyValuer3"||DEVTYPE=="LegalRpt"||DEVTYPE=="LegalIIRpt")
				{
				  var UN1=$(this).attr("data-info").split("|")[1];
				  var UNIQid = $(RowHTML).find("[name="+UN1+"]").val();
				  var xmlSTATUS=UI_getdata($("#PrcsID").val(),UNIQid,"","","","LSW_SGETPROPSTATUS")
				
		     if($(xmlSTATUS).find('PROPERTYSTATUS').text()!="Completed")
		      {
			  if(confirm('Are you sure the entered address is correct or not , once initiated the entered address cannot be  editable') == true)
               {
                
               } 
			  else
				{
	                return false;
                }
			  
				}
				}  */
		
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		var TYPE = $(this).attr("data-aria").split("|")[3];
			
		var Status=$(this).attr("data-Status");
	    $(RowHTML).find("[name="+Status+"]").val('In Progress');	
	    
	/*	if($(RowHTML).find("[name="+DATA+"]").val() == "")
		{
		var CUSID = UI_getdata("OFFICE","","Yes","","","Sam_sGetSeqID");
		
		$(RowHTML).find("[name="+DATA+"]").val($(CUSID).find("Val1").text());

	    }*/
		
	var CHKresult = FormDataToDB_V1(tbl,prfx,$(RowHTML).find("[name="+DATA+"]").val()+"|"+$(RowHTML).find("[name="+DATA+"]").val()+"|" + DATA,RowHTML);
		
		 
		
		if (CHKresult == "Fail")
			{
			alert("Initiation Failed");
			return false;			
			}
		
		var Vname=$(this).attr("data-info").split("|")[0];
		var UN1=$(this).attr("data-info").split("|")[1];
		var UN2=$(this).attr("data-info").split("|")[2];
		var GROUP=$(this).attr("data-info").split("|")[3];
		var ADDR=$(this).attr("data-info").split("|")[4];
		
		var Vendorname = $(RowHTML).find("[name="+Vname+"]").val();
		var UNIQid = $(RowHTML).find("[name="+UN1+"]").val();
		var UNIQid1 = $(RowHTML).find("[name="+UN2+"]").val();
		var ADDR = $(RowHTML).find("[name="+ADDR+"]").val();
		
		if (Vendorname == "")
			{
			alert("Select Vendor to assign the file");
			return false;
			}
			
	var DEVTYPE = $(this).attr("data-for").split("|")[0];
			
			var XML=''
			var SEQN=''
			
			if(DEVTYPE=="PropertyValuer31"||DEVTYPE=="LegalIIRpt1")
			{
				
			
			 var XML='<DEVCODE>DEV0002</DEVCODE><TYPE>Vendor</TYPE><VENDORID>'+Vendorname+'</VENDORID><BRID></BRID><PRCSID>'+$("#PrcsID").val()+'</PRCSID><PROPNO>'+UNIQid+'</PROPNO><UNIQNO>'+UNIQid1+'</UNIQNO><SEQNO></SEQNO><CATEGORY>'+GROUP+'</CATEGORY><REMARKS></REMARKS><CRNTSTATUS>To be Initiated</CRNTSTATUS><ADDR>'+ADDR+'</ADDR>'	
		 
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
				
			} 
			
			
			
	var Vendorname=GROUP
			if(GROUP=="FIO"||GROUP=="FIR")
			{
				Vendorname='FI'
				GROUP=GROUP
			}
			
	var Vendorname=GROUP
			if(GROUP=="FIO"||GROUP=="FIR")
			{
				Vendorname='FI'
				GROUP=GROUP
			}
			
	var WFVndACTVINIT1 = WFVndActvInit($("#ActvID").val(),$("#PrcsID").val()+"|VendorInitiate|Vendor|var_status=SVF&var_statusHES="+Vendorname+"&var_INFO1="+GROUP+"~"+Vendorname+"~"+UNIQid+"~"+UNIQid1+"|ADMIN","LSW_SWFACTVINITCALL");	
	
		/* var WFVndACTVINIT1 = WFVndActvInit($("#ActvID").val(),$("#PrcsID").val()+"|VendorInitiate|Vendor|var_status=SVF&var_statusHES="+Vendorname+"&var_INFO1="+GROUP+"~"+Vendorname+"~"+UNIQid+"~"+UNIQid1+"|ADMIN","LSW_SWFACTVINITCALL"); */
		
		
		
		if (WFVndACTVINIT1 == "Success")
			{
			alert("File Assigned");
			
			StatusData ("In Progress",RowHTML,Status);
			
			if(DEVTYPE=="PropertyValuer3"||DEVTYPE=="LegalIIRpt")
			{
			DEVloadstatus()
			}
			
			
			}
		else
			{
			alert("Initiation Failed");
			var DEVXML=UI_getdata("",SEQNO,"","","","LSW_SPUSHDATATODEV")
			
			}
	    })



 $(document).on("click", ".ViewUptRpt" , function() 
	{
		//var HTML=$(this).parent().parent().parent().parent();
		//$(HTML).find("[name=TEVD_FILESTATUS]").val('Initiated');
		var REFID=$(this).attr("data-aria").split("|")[2];
		var PAGENAME=$(this).attr("data-aria").split("|")[3];
		var ALTERNREFID=$(this).attr("data-aria").split("|")[4];
        
		var ACCORD=$(this).attr("data-aria").split("|")[5];
		var Type=$(this).attr("data-aria").split("|")[6];
		
		var HTML=$(this).parent().parent().parent().parent();
		var UNIQID=$(HTML).find("[name="+REFID+"]").val();
		var ALTNUNIQID=$(HTML).find("[name="+ALTERNREFID+"]").val();
		
		if(($(HTML).find("[name="+Type+"]").val()=="Vehicles")||($(HTML).find("[name="+Type+"]").val()=="Machinery"))
		{
			PAGENAME="UCVVehicleDetl";
		}
		
		
		if($(this).text()=="Update Report")
		{
		var UPDADATERPTSTATUS=UI_getdata($("#PrcsID").val(),ALTNUNIQID,"","","","LSW_SCHKDEVIATIONSTATUS")
	    var UPDATESTAS=$(UPDADATERPTSTATUS).find('UPDATEDEVIATION').text()	
		if(UPDATESTAS=="PENDING")
	    	{
	    	alert('Deivation is pending for approval,cannot Update the report')
			 return false;
	    	}
		}
		
		
		var VENDORSTAT=''
		if($(this).text()=="View Report")
		{
		var VENDOR=UI_getdata($("#PrcsID").val(),ALTNUNIQID,"","","","LSW_SGETVENDORSTATUSCHK")
	    var VENDORSTAT=$(VENDOR).find('RESULT').text()	
		var VENDORNAME=$(VENDOR).find('VENDORNAME').text()	
		}
		
		
	    if(VENDORSTAT=="VENDORCOMPLETED")
	    	{
	    	VENDORRPT(PAGENAME,ALTNUNIQID,VENDORNAME)
	    	}
	    else
	    	{
        var Formactive = "";//$(".FormPageTab").find("li.active").attr("id");		  
 		var MainActive = $(".FormMainTabs").find("li.active").attr("id");
		RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs10="+MainActive+"&PrMs6="+UNIQID+"&PrMs5="+ALTNUNIQID+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
		$(location).attr('href',encodeURI(RedirectURL));
			}
	})
	
	
	
/*	
	$(".Initiate").click(function () {
		$(".INITIATEPAGE").show();
		$(".INITIATE").hide();
		$("#RCUI_INITIDATED").val('Yes');
	})*/
	
	
	$(document).on("click", ".VerStatus" , function() 
	{
        
		var Value= $(this).val()
		var id= $(this).attr('id');
		
		    var UID=$(this).attr("data-info").split("|")[0];
			var UIDValue=$(this).closest('.DYNROW').find("[name="+UID+"]").val();
			/*var Mndxml=UI_getdata($("#PrcsID").val(),$(this).attr("data-info").split("|")[1],UIDValue,"","","LSW_SCHECKADDR")
			  
			  if($(Mndxml).find('MSG').text()!="Yes")
			  {
				  alert($(Mndxml).find('MSG').text())
				  return false;
			  }
			  */
	
		 if(Value=="Verify")	
			{
	              var UN1=$(this).attr("data-info").split("|")[0];
				  var UNIQid = $(this).closest('.DYNROW').find("[name="+UN1+"]").val();
				  var xmlSTATUS=UI_getdata($("#PrcsID").val(),UNIQid,"","","","LSW_SGETPROPSTATUS")
				   var Complalert=''	
		     if($(xmlSTATUS).find('PROPERTYSTATUS').text()!="Completed")
		      {
			//  if(confirm('Are you sure the entered address is correct or not , once initiated the entered address cannot be  editable') == true)
             Complalert= "Are you sure the entered address is correct or not , once Verified the entered address cannot be  editable"
			
			  }
			  
			}
				
         if(Value=="Verify")	
			{
             var Statement='Confirm Verification ? '+Complalert;
			}
		
		 if(Value=="Correction")	
		 {
         var Statement='Confirm Correction ? '
	  	}
	
 if(confirm(Statement+' ') == true)
	 
	 {
        if(Value=="Verify")
			{
     		$(this).closest('.DYNROW').find('.Status').val('Verified')
            $(this).closest('.DYNROW').find(".ReAssignPopup").hide();
			$(this).closest('.DYNROW').find(".ViewDataRpt").show();
			$(this).closest('.DYNROW').find(".ViewRpt").hide();
			$(this).closest('.DYNROW').find(".SaveRpt").show();
			//$(this).closest('.DYNROW').find(".CORRDISB").attr("disabled",true)
			//$(this).closest('.DYNROW').find('.FormSave').click()
		//	$(this).closest('.DYNROW').find(".RADCOMPL").hide();
			if(this.name == "FIRV_VERIFY" || this.name == "FIOV_VERIFY")
			{
				$(this).closest('.DYNROW').find('#SaveRpt').click()
			}
			else{
				$(this).closest('.DYNROW').find('.FormSave')[0].click()
			}
			}
		if(Value=="Correction")
			{
		/*	$(this).closest('.DYNROW').find('.Status').val('In Progress')
			$(this).closest('.DYNROW').find(".ReAssignPopup").show();
			$(this).closest('.DYNROW').find(".ViewDataRpt").hide();
			$(this).closest('.DYNROW').find(".ViewRpt").show();
			$(this).closest('.DYNROW').find(".SaveRpt").hide();
			$(this).closest('.DYNROW').find(".RADCOMPL").hide();
			//$(this).closest('.DYNROW').find('.FormSave').click()
		    $(this).closest('.DYNROW').find('.FormSave')[0].click()*/
			$(this).closest('.DYNROW').find('.ReAssignPopup').click()
            }
		
	 }
 else
	 {
	 
	 $(this).closest('.DYNROW').find('input[type=radio]').prop('checked', false);
	 }
 
		
	    })
	
	$(document).on("click", ".APPLIC" , function() 
	{
        
		var Value= $(this).val()
		var id= $(this).attr('id');
		/*   if(Value=="Not Applicable")	
			{
             var Statement='Confirm Not Applicable';
			}
		
		 if(Value=="Waiver")	
		 {
         var Statement='Confirm Waiver'
	  	} 
		if(confirm(Statement+' ') == true)
	    { */
         if(Value=="Not Applicable")
		 {
			 $(this).closest('.DYNROW').find('.FormSave')[0].click()
			
		 } 
		 if(Value=="Waiver")
		 {
			 $(this).closest('.DYNROW').find('.FormSave')[0].click()
			
		 } 
		
		/*  
		 else
	    {
	 
	   $(this).closest('.DYNROW').find('input[type=radio]').prop('checked', false);
	   } */
		
	 })	
	
	
	var ACCORD=$("#PrMs3").val()
	if(ACCORD!="")
	{
	if(ACCORD!="heading1")
    {
   $("#"+ACCORD).find('.AFormaccordion').click()
	}
	}
	
	
  
	//$('.FormSave').on('click', function() 
	
	 $(document).on("click", ".FormSave" , function() {
	
	
    var TYPE = $(this).attr("data-aria").split("|")[3];
		
		
		
		 if(TYPE=="RCU" && $(this).text() == "Initiate")
	{	
	$("#RCUI_VENDORID").val($("#RCUI_VENDORNAME option:selected").text());
	var RCUUNIQID=UI_getdata("","","","","","LSW_SGETTOKEN")
	$("#RCUI_UNIQID").val($(RCUUNIQID).find("TOKEN").text());
	var prfx = $(this).attr("data-aria").split("|")[1];
	var MndtryChk = ChkMandatoryFlds("INTIMndtry");
		if($("#RCUI_STATUS").val()=="To be Initiated")
	 {
		 $("#RCUI_STATUS").next().addClass('active')
		 $("#RCUI_STATUS").val('In Progress');
	 }
	if(MndtryChk == "Mandatory")
		{
		alert("Fill the Mandatory Fields / Document(s)");
		return false;
		}
	$("#RCUI_INITIDATED").val('Yes');
	
	
	}
    
    if($("#RCUI_INITIDATED").val()=='Yes')
    {
      $(".INITIATEPAGE").show();
      $(".INITIATE").hide();
      $('.INIT').find('.select-dropdown').attr('disabled',true)
    }
		
		
		if(TYPE=="RCU" && $(this).text() == "Submit")
		{	
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
			$("#RCUI_FILESTATSU").val('Completed')
			
			
			if($("#RCUI_DATEOFCOMP").val() == "")
		    		{
                    var today=$("#DMY7").val().split("|")[1]
		    		$("#RCUI_DATEOFCOMP").val(today)
		    		$(RCUI_DATEOFCOMP).next().addClass('active')
		    		}
					$('.RCUSUB').text('Re-submit')
			
		}
		
		
		if(TYPE=="RCU" && $(this).text()=="Re-submit")
		{	
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
			$("#RCUI_FILESTATSU").val('Completed')
			
			
			if($("#RCUI_DATEOFCOMP").val() == "")
		    		{
                    var today=$("#DMY7").val().split("|")[1]
		    		$("#RCUI_DATEOFCOMP").val(today)
		    		$(RCUI_DATEOFCOMP).next().addClass('active')
		    		}
					$('.RCUSUB').text('Re-submit')
			
		}
		
		
		
		if(TYPE=="ADVSMART" && $(this).text() == "Initiate")
		{	
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		  var RowHTML = $(this).parent().parent().parent().parent();
		  
		  var prfx = $(this).attr("data-aria").split("|")[1];
		  var MndtryChk = ChkMandatoryFlds_V1(prfx+"Mndtry",RowHTML);
		  
		  if(MndtryChk == "Mandatory")
		   {
		   alert("Fill the Mandatory Fields / Document(s)");
		   return false;
		   }
		
		}
		
		if(TYPE=="ADVSMART" && $(this).text() == "Get Report")
		{	
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		  var RowHTML = $(this).parent().parent().parent().parent();
		  
		  var prfx = $(this).attr("data-aria").split("|")[1];
		  var MndtryChk = ChkMandatoryFlds_V1(prfx+"Mndtry",RowHTML);
		  
		  if(MndtryChk == "Mandatory")
		   {
		   alert("Fill the Mandatory Fields / Document(s)");
		   return false;
		   }
		
		}
		
		if(TYPE=="PropertyVisit" && $(this).text() == "Submit")
		{	
	     	 var RowHTML = $(this).parent().parent().parent().parent();
			  var prfx = $(this).attr("data-aria").split("|")[1];
			  var MndtryChk = ChkMandatoryFlds_V1(prfx+"Mndtry",RowHTML);
			  
			  if(MndtryChk == "Mandatory")
			   {
			   alert("Fill the Mandatory Fields / Document(s)");
			   return false;
			   }
		 $(RowHTML).find('.Resub').text('Re-submit')
		}
		
		
		if(TYPE=="PropertyVisit" &&$(this).text()=="Re-submit")
		{	
	     	 var RowHTML = $(this).parent().parent().parent().parent();
			  var prfx = $(this).attr("data-aria").split("|")[1];
			  var MndtryChk = ChkMandatoryFlds_V1(prfx+"Mndtry",RowHTML);
			  
			  if(MndtryChk == "Mandatory")
			   {
			   alert("Fill the Mandatory Fields / Document(s)");
			   return false;
			   }
		 $(RowHTML).find('.Resub').text('Re-submit')
		}
		
		

		  var RowHTML = $(this).parent().parent().parent().parent();
		   var tbl = $(this).attr("data-aria").split("|")[0];
		   var prfx = $(this).attr("data-aria").split("|")[1];
		   var DATA = $(this).attr("data-aria").split("|")[2];
		   var TYPE = $(this).attr("data-aria").split("|")[3];
		    if(TYPE=="RCU")
			   {
		    	
		    	
		    	 var RCUSTATUSGRD = TxtGridsubmitdata_V1("Table2","RCUS_","RCUI_");
				   AssignGridXmltoField("RCUI_RCUSTATUSGRID", RCUSTATUSGRD)
			     FormDataToDB(tbl,prfx,$("#RCUI_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			   }
		/*  else if(TYPE=="PropertyVisit")
		    	{
		    	
		    	 var MULTIPH = TxtGridsubmitdata_V2("PropVisitDoc","PVMD_","PRVM_","PVMDDBfields");
		 		AssignGridXmltoField("PRVM_MULTIDOC", MULTIPH)
		    	
		    	FormDataToDB(tbl,prfx,$("#PRVM_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
		    	}*/
		    else
		    	{
              var CHKresult = FormDataToDB_V1(tbl,prfx,$(RowHTML).find("[name="+DATA+"]").val()+"|"+$(RowHTML).find("[name="+DATA+"]").val()+"|" + DATA,RowHTML);
		    	}
				
				
				
				if(TYPE=="ADVSMART")
			{
			var PROPERTYNO=$(RowHTML).find("[name="+DATA+"]").val()
             ADVASMART(PROPERTYNO,RowHTML);	
			 
			 var CHKresult = FormDataToDB_V1(tbl,prfx,$(RowHTML).find("[name="+DATA+"]").val()+"|"+$(RowHTML).find("[name="+DATA+"]").val()+"|" + DATA,RowHTML);
            }
			
				
		    
		    if(CHKresult=="Success")
		    	{
		    	
		    	alert('Form Saved Sucessfully')
		    	}
				if(TYPE=="RCU" && $(this).text() == "Initiate")
				{
					InitRCU(this);
				}
		   // Customer Seq ID Gen Start		
	   /*if($("#GRBI_CUSID").val() == "")
		{
		var CUSID = UI_getdata("CUS","","Yes","","","Sam_sGetCusSeqID");
		
		$("#GRBI_CUSID").val($(CUSID).find("Val1").text());
		$(".GRBI_CUSID").text($(CUSID).find("Val1").text());
	    } */
		// Customer Seq ID Gen End 
		
		/*var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
       var FileStatus = $(this).attr("data-aria").split("|")[3];
		if(FileStatus=="Initiate")
			{
			$("#TEVD_FILESTATUS").val(FileStatus);
			}
		   if(FileStatus=="ReassignSave")
		   {   
			var REASSREMARKS=$("#REASSREMARKS").val()
			$("#TEVD_REMARKS").val(REASSREMARKS); 
	        $(".close").click();
		   }
		var RCUSTATUSGRD = TxtGridsubmitdata_V1("Table2","RCUS_","RCUI_");
		AssignGridXmltoField("RCUI_RCUSTATUSGRID", RCUSTATUSGRD);
		
		
		FormDataToDB(tbl,prfx,$("#RCUI_PRCSID").val(),"","");
		// Tab Header Change Start
		if(FileStatus=="Reassign")
		{
	        $("#Reassign").click();
	        
		}
		*/
		// Tab Header Change End
		/*if($(this).text() == "Submit")
		{
			  NXTTAB(this);
		} */
	});
	
	/*$(".ReAssignPopup").on('click', function() {
		 
		$("#Reassign").click();
	   })*/
  
	   
$(document).on("click", ".UPDateRptPopup" , function() 
{
	
	
	var RowCount=$(this).attr("data-row").split("|")[0]
	$("#DATAROW").val(RowCount);  
	
	 var UNIQID=$(this).attr("data-for").split("|")[1]
      var ALTNUNIQID=$("#"+UNIQID+RowCount).val();
	 
	 var PAGENAME =$(this).attr("data-for").split("|")[0]
	
		if($(this).text()=="Update Report")
		{
		var UPDADATERPTSTATUS=UI_getdata($("#PrcsID").val(),ALTNUNIQID,"","","","LSW_SCHKDEVIATIONSTATUS")
	    var UPDATESTAS=$(UPDADATERPTSTATUS).find('UPDATEDEVIATION').text()	
		if(UPDATESTAS=="PENDING")
	    	{
	    	alert('Deivation is pending for approval,cannot Update the report')
			 return false;
	    	}
		
		}
	
	
       var VENDORSTAT=''
		if($(this).text()=="View Report")
		{	
     	var VENDOR=UI_getdata($("#PrcsID").val(),ALTNUNIQID,"","","","LSW_SGETVENDORSTATUSCHK")
        var VENDORSTAT=$(VENDOR).find('RESULT').text()	
	    var VENDORNAME=$(VENDOR).find('VENDORNAME').text()	
		}
    if(VENDORSTAT=="VENDORCOMPLETED")
    	{
    	VENDORRPT(PAGENAME,ALTNUNIQID,VENDORNAME)
    	}
    else
	
	{
	
 $("#FIOFFICEUPDATE").click();
	  
	var RowCount=$(this).attr("data-row").split("|")[0]
	$("#DATAROW").val(RowCount);  
	
   var UPDATEVENDER=$(this).attr("data-for").split("|")[0]
	$("#UPDATEVENDER").val(UPDATEVENDER);  
  //|FIRV_UPDATEDTINIT|FIRV_UPDATEDTCOMP|FIRV_UPDATESTATUS|FIRV_UPDATEREPORT|FIRV_UPDATEDATTAC|FIRV_UPDATEREMARK
    
   var UNIQID=$(this).attr("data-for").split("|")[1]
     $("#FIUNIQUEID").val($("#"+UNIQID+RowCount).val());
   
    $("#FIUNIQUEID").addClass('active');  
   
  var FIRV_UPDATEDTINIT=$(this).attr("data-for").split("|")[2]
  var UPDATEDATE= $("#DMY7").val().split("|")[1]
  $("#DT_Inititate").val(UPDATEDATE)
  
if($("#DT_Inititate").val()!="")
	  {
  $("#DT_Inititate").next().addClass('active');
  $("#DT_Inititate").attr('disabled',true)
	  }
  
  
  var FIRV_UPDATEDTCOMP=$(this).attr("data-for").split("|")[3]
  $("#DT_Complete").val($("#"+FIRV_UPDATEDTCOMP+RowCount).val());
  if($("#DT_Complete").val()!="")
  {
  $("#DT_Complete").next().addClass('active');
  $('.DTCOMP').show()	
  }
  else
  {
	$("#DT_Complete").next().removeClass('active'); 
    $('.DTCOMP').hide()	
//	var CurrDate=Currentdate()
//	$("#DT_Complete").val(CurrDate)
	
  }
  
  var FIRV_UPDATESTATUS=$(this).attr("data-for").split("|")[4]
  $("#FI_STATUS").val($("#"+FIRV_UPDATESTATUS+RowCount).val());
  if($("#FI_STATUS").val()!="")
  {
 $("#FI_STATUS").next().addClass('active');
 $('#FI_STATUS').val($("#"+FIRV_UPDATESTATUS+RowCount).val());
 $('#FI_STATUS').material_select();
 }
 else
{
	 $("#FI_STATUS").next().removeClass('active');
	 $('#FI_STATUS').val('');
	 $('#FI_STATUS').material_select();  
}
  
  
  var FIRV_UPDATEREPORT=$(this).attr("data-for").split("|")[5]
  $("#RPT_Date").val($("#"+FIRV_UPDATEREPORT+RowCount).val());
  if($("#RPT_Date").val()!="")
  {
$("#RPT_Date").next().addClass('active');
  }
  else
	  {
	  $("#RPT_Date").next().removeClass('active');
	  }
   
  
  var FIRV_UPDATEDATTAC=$(this).attr("data-for").split("|")[6]
  $("#FIOFFICEATT").val($("#"+FIRV_UPDATEDATTAC+RowCount).val());
  if($("#FIOFFICEATT").val()!="")
 {
  $("#FIOFFICEATT").next().addClass('active');
  $('.FIOFFICEATT').show()
  $("#FIOFFICEATTUPLOAD").hide()
  $('.rounded').show();
   $('.FIDU').find('.name').text('')
   $('.reupload').show();
  }
  else
  {
  $("#FIOFFICEATTUPLOAD").show();
  $('.rounded').hide();
  $("#FIOFFICEATT").val('');
  $("input[name=datafile]").attr('disabled',false);
  $("input[name=datafile]").attr('display','block');
  
  $('.FIDU').find('.name').text('Click Here to Upload')
  $('.reupload').hide();
  }

  
  var FIRV_UPDATEREMARK=$(this).attr("data-for").split("|")[7]
  $("#OFRemarks").val($("#"+FIRV_UPDATEREMARK+RowCount).val());
  if($("#OFRemarks").val()!="")
  {
  $("#OFRemarks").next().addClass('active');
  }
  else
	  {
	  $("#OFRemarks").next().removeClass('active'); 
	  }
	  
	  if($(this).text()=="View Report")
		{
			$('.OFFVERDone').hide();
		}
		
		else
		{
			$('.OFFVERDone').show();
		}
	  
}
  
  
	})



		$(".OFFVERDone").click(function () {
			
		var UPDATEVENDER=$("#UPDATEVENDER").val()
		
		
		  var MndtryChk = ChkMandatoryFlds("UPDATEMndtry");
            if (MndtryChk == "Mandatory") 
            {
                alert("Fill the Mandatory Fields / Document(s)");
                return false;
            }
		
		            if($("#FIOFFICEATT").val()=="")
            {
            	alert("Upload the documents");
                return false;
            }
			
			
		
		if(UPDATEVENDER=="FIOfficeVerify")	
			{
		  var DATAROW=$("#DATAROW").val()
		var DT_Inititate=$("#DT_Inititate").val()
         $("#FIOV_UPDATEDTINIT"+DATAROW).val(DT_Inititate); 
		
		var DT_Complete=$("#DT_Complete").val()
		$("#FIOV_UPDATEDTCOMP"+DATAROW).val(DT_Complete);
		
		var FI_STATUS=$("#FI_STATUS").val()
		$("#FIOV_UPDATESTATUS"+DATAROW).val(FI_STATUS);
		
		var RPT_Date=$("#RPT_Date").val()
		$("#FIOV_UPDATEREPORT"+DATAROW).val(RPT_Date);
		
		var FIOFFICEATT=$("#FIOFFICEATT").val()
		$("#FIOV_UPDATEDATTAC"+DATAROW).val(FIOFFICEATT);
		
		var OFRemarks=$("#OFRemarks").val()
		$("#FIOV_UPDATEREMARK"+DATAROW).val(OFRemarks);
		
		$("#FIOV_STATUS"+DATAROW).val('Completed');
		
		var today=$("#DMY7").val().split("|")[1]
		$("#FIOV_DATCOMPL"+DATAROW).val(today);
		$("#FIOV_DATCOMPL"+DATAROW).next().addClass('active');
		
		var UNIQID=$("#FIUNIQUEID").val()
		
		var xml1=UI_getdata($("#PrcsID").val(),UNIQID,"","","","LSW_SCHKVENDORCOMP")
             var VENCOMSTA=$(xml1).find('RESULT').text()
			 if(VENCOMSTA=="YES")
			 {
				 alert($(xml1).find('alert').text())
				  var DATAROW=DATAROW -1
				  var HTML =	 $("." + "FIOfficeVerify").find(".DYNROW")[DATAROW];

                $(HTML).find(".ValuationInit").hide();
                $(HTML).find(".ReAssignPopup").hide();
                $(HTML).find(".ViewDataRpt").show();
                $(HTML).find(".ViewRpt").hide();
                $(HTML).find(".SaveRpt").show();
		        $(".close").click(); 
				return false
		
		     }
		
		
		
		var xml=UI_getdata($("#PrcsID").val(),UNIQID,"FIOFFICE",$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
		
		
            var DATAROW=DATAROW -1
				// var DATA=["FIOfficeVerify|FIOV_STATUS"]
		      //   var ValuationID=DATA[j].split("|")[0];
			   //  var ValuationStatus=DATA[j].split("|")[1];
		       //   var row = $("." + ValuationID).find(".DYNROW").length;
				//Click save
			//	$(".close").click();
		         var HTML =	 $("." + "FIOfficeVerify").find(".DYNROW")[DATAROW];
		        $(HTML).find('.Save').click()

$(HTML).find(".ValuationInit").hide();
$(HTML).find(".ReAssignPopup").hide();
$(HTML).find(".ViewDataRpt").show();
$(HTML).find(".ViewRpt").hide();
$(HTML).find(".SaveRpt").show();
		     //   $(HTML).find('.ViewDataRpt').show()
			 window.location.reload();
		        $(".close").click();     
			}
		else if(UPDATEVENDER=="FIResidVerify")	
		{
			  var DATAROW=$("#DATAROW").val()
				var DT_Inititate=$("#DT_Inititate").val()
		         $("#FIRV_UPDATEDTINIT"+DATAROW).val(DT_Inititate); 
				
				var DT_Complete=$("#DT_Complete").val()
				$("#FIRV_UPDATEDTCOMP"+DATAROW).val(DT_Complete);
				
				var FI_STATUS=$("#FI_STATUS").val()
				$("#FIRV_UPDATESTATUS"+DATAROW).val(FI_STATUS);
				
				var RPT_Date=$("#RPT_Date").val()
				$("#FIRV_UPDATEREPORT"+DATAROW).val(RPT_Date);
				
				var FIOFFICEATT=$("#FIOFFICEATT").val()
				$("#FIRV_UPDATEDATTAC"+DATAROW).val(FIOFFICEATT);
				
				var OFRemarks=$("#OFRemarks").val()
				$("#FIRV_UPDATEREMARK"+DATAROW).val(OFRemarks);
				
				$("#FIRV_STATUS"+DATAROW).val('Completed');
				
				var today=$("#DMY7").val().split("|")[1]
				$("#FIRV_DATCOMPL"+DATAROW).val(today);
				$("#FIRV_DATCOMPL"+DATAROW).next().addClass('active');
				var UNIQID=$("#FIUNIQUEID").val()
				
			 var xml1=UI_getdata($("#PrcsID").val(),UNIQID,"","","","LSW_SCHKVENDORCOMP")
             var VENCOMSTA=$(xml1).find('RESULT').text()
			 if(VENCOMSTA=="YES")
			 { 
		        alert($(xml1).find('alert').text())
				 
				 var DATAROW=DATAROW -1
				 var HTML =	 $("." + "FIResidVerify").find(".DYNROW")[DATAROW];
                $(HTML).find(".ValuationInit").hide();
                $(HTML).find(".ReAssignPopup").hide();
                $(HTML).find(".ViewDataRpt").show();
				$(HTML).find(".ViewRpt").hide();
				$(HTML).find(".SaveRpt").show();
				$(".close").click(); 
				return false
				 
			 }
				
				var xml=UI_getdata($("#PrcsID").val(),UNIQID,"FIRESIDENCE",$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
				
				var DATAROW=DATAROW -1
				// var DATA=["FIOfficeVerify|FIOV_STATUS"]
		      //   var ValuationID=DATA[j].split("|")[0];
			   //  var ValuationStatus=DATA[j].split("|")[1];
		       //   var row = $("." + ValuationID).find(".DYNROW").length;
				//Click save
			//	$(".close").click();
		         var HTML =	 $("." + "FIResidVerify").find(".DYNROW")[DATAROW];
		        $(HTML).find('.Save').click()
 $(HTML).find(".ValuationInit").hide();
$(HTML).find(".ReAssignPopup").hide();
$(HTML).find(".ViewDataRpt").show();
$(HTML).find(".ViewRpt").hide();
$(HTML).find(".SaveRpt").show();
		        window.location.reload();
		        $(".close").click();     
			}
          })



	$(document).on("click", ".ReAssignPopup" , function() 
		{
		  $("#Reassign").click();
		  
	var RowCount=$(this).attr("data-row").split("|")[0]
	$("#DATAROWReASS").val(RowCount); 
	
	var Address=$(this).attr("data-aria").split("|")[0]
	var Branch=$(this).attr("data-aria").split("|")[1]
	var RemarkID=$(this).attr("data-aria").split("|")[2]
	var REASSVENID=$(this).attr("data-aria").split("|")[3]
	var Group=$(this).attr("data-aria").split("|")[4]	
	var UNI=$(this).attr("data-aria").split("|")[5]
	var UNII=$(this).attr("data-aria").split("|")[6]
	var WFGroup=$(this).attr("data-aria").split("|")[7]
	
	var VENDORID=$(this).attr("data-aria").split("|")[8]
	var VENDORNAME=$(this).attr("data-aria").split("|")[9]
	var BRANNAME=$(this).attr("data-aria").split("|")[10]
	var BRANCHID=$(this).attr("data-aria").split("|")[11]
	var VENSTATUS=$(this).attr("data-aria").split("|")[12]
   
	
	
/*	$("#HIDDVENDERID").val(HIDVENDORID);
	$("#HIDDVENDERNAME").val(HIDVENDORNAME);
	$("#HIDDBRANCHID").val(HIDBRANNAME);
	$("#HIDDBRANCHNAME").val(HIDBRANCHID);*/
	
	$("#ASSVENSTATUS").val($('#'+VENSTATUS+RowCount).val()); 
	$("#RSAddPRoperty").val($('#'+Address+RowCount).val()); 
	$("#RSAddPRoperty").next().addClass('active');
	$("#RSBranch").val($('#'+Branch+RowCount).val());
	$("#RSREASSREMARKS").val('');
	$("#REMARKID").val(RemarkID);
	$("#REASSVENDERID").val(REASSVENID);	
	$("#Group").val(Group);
	$("#WFGROUP").val(WFGroup);
	$("#UNIQUID").val($("#"+UNI+RowCount).val());
	$("#ALTNUNIQUID").val($("#"+UNII+RowCount).val());
	
	
	 $("#REASSVENDOR").empty();
     $("#REASSVENDOR").val('');
	 $('#REASSVENDOR').material_select("destroy");	
	 $('#REASSVENDOR').material_select();
	 
	 
	 $("#RSVender").empty();
	 $("#RSVender").val('');
	 $('#RSVender').material_select("destroy");	
	 $('#RSVender').material_select();
	 
	 $('.REASSDROP').find('.select-dropdown').attr('disabled',false)
	 
	 var REASSVENDOR=$('#'+BRANNAME+RowCount).val()
	 var REASSBRNAME=$('#'+BRANCHID+RowCount).val()

   
	  var VENDORNAME=$('#'+VENDORNAME+RowCount).val()
	  var VENDORID=$('#'+VENDORID+RowCount).val()
	 
	  
	 var CORRECTION=$(this).closest('.DYNROW').find('input[type=radio]:checked').val();
	  
	  
	  $("#PROCESSTYPE").val(CORRECTION);
	  
	   var optn="<option  value='"+REASSVENDOR+"'>" + REASSBRNAME + "</option>"
	     $("#REASSVENDOR").append(optn)
	     $("#REASSVENDOR option:contains("+REASSBRNAME+")").attr("selected","selected")
	     $("#REASSBRNAME").val(REASSBRNAME);
		 $("#REASSVENDOR").material_select();
		 ResAssVendername();
		 
		 
		 
	 if(CORRECTION=="Correction")
		 {
         var optn1="<option  value='"+VENDORID+"'>" + VENDORNAME + "</option>"
	     $("#RSVender").append(optn1)
	     $("#RSVender option:contains("+VENDORNAME+")").attr("selected","selected")
	     $("#RSVENDORNAME").val(VENDORNAME);
		 $("#RSVender").material_select(); 
		 $('.REASSDROP').find('.select-dropdown').attr('disabled',true)
		 }
	 else
		 {
          $('.REASSDROP').find('.select-dropdown').attr('disabled',false)
         }


	
	//Vendername();
	//$('.REASBRAN').hide()
	
/*	if(Group=="Legal")
		{
		$('.REASBRAN').show()
        }*/
	var DIVID=$(this).attr("data-for").split("|")[0]
	$("#RSDIVID").val(DIVID); 
	
	
 })
 	
	
$(".ReAssignDone").click(function () {
 		
		 var DATAROWReASS=$("#DATAROWReASS").val()
		 var RSREASSREMARKS=$("#RSREASSREMARKS").val()
         var RemarkID=$("#REMARKID").val()
		 $('#'+RemarkID+DATAROWReASS).val(RSREASSREMARKS); 
		 var DIVID=$("#RSDIVID").val()
		 var RSVender=$("#RSVender").val()
		 var REASSVENDOR=$("#REASSVENDOR").val();
		 
		 var REASSVENDERID=$("#REASSVENDERID").val()
		 $('#'+REASSVENDERID+DATAROWReASS).val(REASSVENDOR+'|'+RSVender); 
		 
		 var  ASSVENSTATUS=$("#ASSVENSTATUS").val()
		 
		 if(ASSVENSTATUS=="To be Initiated")
		 {
			ASSVENSTATUS='In Progress' 
		 }
		   var  ADDR=$("#RSAddPRoperty").val()
		   
		   var PRCSTYP= $("#PROCESSTYPE").val();
		   
		   
	/*	var HIDDVENDERID=$("#HIDDVENDERID").val();
		var HIDDVENDERNAME=	$("#HIDDVENDERNAME").val();
		var HIDDBRANCHID=$("#HIDDBRANCHID").val();
		var HIDDBRANCHNAME=	$("#HIDDBRANCHNAME").val();
		
		var RSVender1=$("#RSVender").val();
		var RSVENDORNAME=$("#RSVENDORNAME").val();
		var REASSVENDOR=$("#REASSVENDOR").val();
		var REASSBRNAME=$("#REASSBRNAME").val();
		
		///TEVD_VENDORNAME|TEVD_VENDORID|TEVD_BRANCNAME|TEVD_BRANCID
	//	$('#'+HIDDVENDERID+DATAROWReASS).val(RSVender); 
	//	var Data=$("#FIOV_VENDORID"+[j+1]).val()
	//	$('#'+HIDDVENDERID+DATAROWReASS).attr('disabled',false)
	//	$('#'+HIDDBRANCHID+DATAROWReASS).attr('disabled',false)
	//	$('#'+HIDDVENDERID+DATAROWReASS).val('')
	//	$('#'+HIDDVENDERID+DATAROWReASS).material_select("destroy");	
    //	$('#'+HIDDVENDERID+DATAROWReASS).material_select();
    	
    	var optn="<option  value='"+RSVender1+"'>" + RSVENDORNAME + "</option>"
        $('#'+HIDDVENDERID+DATAROWReASS).append(optn)
        $('#'+HIDDVENDERID+DATAROWReASS+" option:contains("+RSVENDORNAME+")").attr("selected","selected")

    	
		$('#'+HIDDVENDERNAME+DATAROWReASS).val(RSVENDORNAME);
		$('#'+HIDDVENDERID+DATAROWReASS).material_select();

    	
    	var optn1="<option  value='"+REASSVENDOR+"'>" + REASSBRNAME + "</option>"
        $('#'+HIDDVENDERID+DATAROWReASS).append(optn1)
        $('#'+HIDDBRANCHID+DATAROWReASS+" option:contains("+REASSBRNAME+")").attr("selected","selected")
        
		$('#'+HIDDBRANCHNAME+DATAROWReASS).val(REASSBRNAME);
    	$('#'+HIDDBRANCHID+DATAROWReASS).material_select();*/
	 
		
		 if (RSVender == "")
			{
			alert("Select Vendor to assign the file");
			return false;
			}
			
			 if (RSREASSREMARKS == "")
			{
			alert("Fill the remark field");
			return false;
			}
			
		   var XML='<DEVCODE>DEV0001</DEVCODE><TYPE>Vendor</TYPE><VENDORID>'+RSVender+'</VENDORID><BRID></BRID><PRCSID>'+$("#PrcsID").val()+'</PRCSID><PROPNO>'+$("#UNIQUID").val()+'</PROPNO><UNIQNO>'+$("#ALTNUNIQUID").val()+'</UNIQNO><SEQNO></SEQNO><CATEGORY>'+$("#WFGROUP").val()+'</CATEGORY><REMARKS>'+$("#RSREASSREMARKS").val()+'</REMARKS><CRNTSTATUS>'+ASSVENSTATUS+'</CRNTSTATUS><ADDR>'+ADDR+'</ADDR><PRCSTYP>'+PRCSTYP+'</PRCSTYP>'	
			// var XML=''
			var DEVXML=UI_getdata(XML,"","","","","LSW_SPUSHDATATODEV")
             var DESCRIPTION=$(DEVXML).find('DESCRIPTION').text();
			 var STATUS=$(DEVXML).find('STATUS').text();
             var SEQNO=	$(DEVXML).find('SEQNO').text();		 
			 if(STATUS!="Y")
			 {
				  alert(DESCRIPTION)
				  $(".close").click();
                  return false;	
			  
             }
		    alert(DESCRIPTION)
			
			var RSVender=$("#WFGROUP").val()
			
			
	var WFVndACTVINIT1 = WFVndActvInit($("#ActvID").val(),$("#PrcsID").val()+"|VendorInitiate|Vendor|var_status=SVF&var_statusHES="+RSVender+"&var_INFO1="+$("#WFGROUP").val()+"~"+RSVender+"~"+$("#UNIQUID").val()+"~"+$("#ALTNUNIQUID").val()+"|ADMIN","LSW_SWFACTVINITCALL");	
		
		
		 var HTML=$('#'+REASSVENDERID+DATAROWReASS).closest('.DYNROW')
		   
		    var DEVTYPE =$(HTML).find("#Inti").attr("data-for").split("|")[0];
		 
		 
		 if (WFVndACTVINIT1 == "Success"&& STATUS=="Y")
		 {
		 if(DEVTYPE=="PropertyValuer1"||DEVTYPE=="PropertyValuer2"||DEVTYPE=="PropertyValuer3"||DEVTYPE=="LegalRpt"||DEVTYPE=="LegalIIRpt")
				{
		    $('#'+REASSVENDERID+DATAROWReASS).closest('.DYNROW').find('.Status').val('In Progress')
			$('#'+REASSVENDERID+DATAROWReASS).closest('.DYNROW').find(".ReAssignPopup").show();
			$('#'+REASSVENDERID+DATAROWReASS).closest('.DYNROW').find(".ViewDataRpt").hide();
			$('#'+REASSVENDERID+DATAROWReASS).closest('.DYNROW').find(".ViewRpt").show();
			$('#'+REASSVENDERID+DATAROWReASS).closest('.DYNROW').find(".SaveRpt").hide();
			$('#'+REASSVENDERID+DATAROWReASS).closest('.DYNROW').find(".RADCOMPL").hide();
           // $('#'+REASSVENDERID+DATAROWReASS).closest('.DYNROW').find('input[type=radio]')[1].checked = true
				}
				
		 }
		   
		 var tbl=$(HTML).find("#Inti").attr("data-aria").split("|")[0];
		 var prfx=$(HTML).find("#Inti").attr("data-aria").split("|")[1];
		 var DATA=$(HTML).find("#Inti").attr("data-aria").split("|")[2];
		 
		 var CHKresult = FormDataToDB_V1(tbl,prfx,$(HTML).find("[name="+DATA+"]").val()+"|"+$(HTML).find("[name="+DATA+"]").val()+"|" + DATA,HTML);
		
        if (WFVndACTVINIT1 == "Success")
			{
			alert("File Assigned");
			//StatusData ("In Progress",RowHTML,Status);
			}
		else
			{
			alert("Initiation Failed");
			var DEVXML=UI_getdata("",SEQNO,"","","","LSW_SPUSHDATATODEV")
			
			}

		
		//  var HTML =$("." +DIVID).find(".DYNROW")[DATAROWReASS];
       //  $(HTML).find('.FormSave').click()
      //   $(HTML).find("#Inti").click()
         $(".close").click(); 
         
       //  $(".ValuationInit").click();
 	})
 	
	
	
	
 	
 	$(document).on("click", ".Save", function(){
		 var html=$(this).closest('.DYNROW')
        

		if($(html).find("[name=MCAV_MCAREFID]").val() == "")
		{
		var CUSID = UI_getdata("MCA","","Yes","","","Sam_sGetSeqID");
		
		$(html).find("[name=MCAV_MCAREFID]").val($(CUSID).find("Val1").text());
	//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
	    }
       $(html).find("[name=MCAV_PRCSID]").val($("#PrcsID").val());
		// Customer Seq ID Gen End 
		

		
				
				var tbl = $(this).attr("data-aria").split("|")[0];
				var prfx = $(this).attr("data-aria").split("|")[1];
				var DATA = $(this).attr("data-aria").split("|")[2];
	
				
				var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);
				
				
				if (CHKresult == "Fail")
					{
					alert("Submission Failed");
					return false;			
					}
				else
				{
					alert("Saved Successfully")
				}	
	
	}); 
	
	$(".ViewRPTPDF").click(function () {
		 
	      var RowCount=$(this).attr("data-row").split("|")[0]
			$("#DATAROW").val(RowCount);  	
	      
	      var Vendor=$(this).attr("data-for").split("|")[0]
	      var Attachment=$(this).attr("data-for").split("|")[1]
	     var Attachview= Attachment+RowCount
	  //  GrdDocDwnld('CBSI_PANATTACHMENT')"	
		GrdDocDwnld(Attachview)
		})

});

