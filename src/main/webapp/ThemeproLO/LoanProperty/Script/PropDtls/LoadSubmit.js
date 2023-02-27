$(document).ready(function () {
	
	
	$($('.AFormaccordion')[0]).click();
	 

	
	if($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	      $("#LPDT_PROPERTYNO").val($(".FormPageMultiTab li.active").attr("id"))
	      $("#PRDO_PROPNUM").val($(".FormPageMultiTab li.active").attr("id"))
		  $("#PRDO_PRCSID").attr("value",$("#PrcsID").val());
		  $("#PRDO_PROPNUM").attr("value",$(".FormPageMultiTab li.active").attr("id"))
		}
   if($("#DMY7").val().split('|')[0]=="Existing Loans")
	 {
		$(".COLLATLON").show();
      if($('input:radio[name=LPDT_COLLATLON]')[0].checked == false && $('input:radio[name=LPDT_COLLATLON]')[1].checked == false)
       {
          $('input:radio[name=LPDT_COLLATLON]')[1].checked = true;
       }
	 }		
	else
	 {
      $(".COLLATLON").hide();
	 }
	
if($("#DMY7").val().split('|')[0]=="Grampanchayt property")
	{
		$(".GPP").show();
		$(".GPPM").addClass('LPDTMndtry');
	}
	else
	{
		$(".GPP").hide();
		$(".GPPM").removeClass('LPDTMndtry');
	}	
		
    
Getsectype();

	//$(".LPDT_PROPERTYNO").text($("#LPDT_PROPERTYNO").val());
	GetCustomerName();

	FormDataFromDB("LSW_TLONPROPDTLS","LPDT_","LPDTDBfields", $("#LPDT_PROPERTYNO").val()+"|LPDT_PROPERTYNO");
	var Report=UI_getdata($("#PrcsID").val(),$("#LPDT_PROPERTYNO").val(),"","","","LSW_SCHKSECVAL");
	if($(Report).find('RESULT').text()=='Y')
	{
		$("#LPDT_SECURITYTYPE").attr("disabled",true)
	}
	LoadMultiData("",$("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"BankDetail1","PRDODBfields","LSW_SGETPROPUPDDT");
	
	//ChkPerson();
	Chktaxload();
	CheckChkbocVal();
	CheckPropOwner1();
	getaddresstypeonload();
	CheckSecurityType();
	DocView();
	Checkmndry();
	if($("#LPDT_PROPTYPE").val()!="" && $("#DMY7").val().split('|')[8]=="ML01")
	{
		var PropType=$("#LPDT_PROPTYPE").val();
	    var PrType = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],$("#LPDT_PROPUSAGE").val(),"","","LSW_SGETPRODVAL");
         $("#LPDT_PROPTYPE").html("");
		 $("#LPDT_PROPTYPE").append($(PrType).find("RESULT").html());

	      $("#LPDT_PROPTYPE option[value='"+PropType+"']").attr("selected","selected")
		  $("#LPDT_PROPTYPE").material_select(); 
	}

	 var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#LPDT_PROPERTYNO").val(),"","","","LSW_SGETPROPERTYDETAILS")
		
	 if($(xmlSTATUS).find('PROPERTYSTATUS').text()=="Completed")
		 {
		  $('.LPDTDBfields').attr('disabled',true)
		  $('.ADDPro').attr('disabled',false)
		//  $('.DELBTNTXT').hide()
         }

var propertyname=$(".FormPageMultiTab li.active a div").text()	
if(propertyname=="Security 1")
{
	$('.DELBTNTXT').hide()
	$('.ADDPROPERT').hide()
}

if($("#LPDT_FILESTATUS").val()=="C")
	{
	$('.DELBTNTXT').hide()
	 $('.LPDTDBfields').attr('disabled',true)
    }

if($('input:radio[name=LPDT_ADDITIOPROP]')[0].checked == false && $('input:radio[name=LPDT_ADDITIOPROP]')[1].checked == false)
{
  $('input:radio[name=LPDT_ADDITIOPROP]')[1].checked = true;

}

// added cersai existingLoans
if($("#DMY7").val().split('|')[0]=="Existing Loans" && propertyname=="Security 1")
	{
		$('input:radio[name=LPDT_ADDITIOPROP]')[0].checked = false;
		$('input:radio[name=LPDT_ADDITIOPROP]')[1].checked = false;
	}

  if($("input[name='LPDT_PROPOWNSHIP']:checked"). val()=="Joint")
  {
     var PropOwner=$("#LPDT_OWNERCUSID").val()
	 var PropOwnerVal=PropOwner.split(",");
	 var row = $(PropOwnerVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(PropOwnerVal[i] != "")
		 {
	   //$("#THSD_AMENITIESPRO option:contains("+AMENITIESPROIVal[i]+")").attr("selected","selected")
	   $("#LPDT_PROPOWNER option[value='"+PropOwnerVal[i]+"']").attr("selected","selected")
		 }
	 }

	 $("#LPDT_PROPOWNER ").material_select();
	
  }
  
  	 $(document).on("click", ".DELETEDOCUMNETS" , function() {
    	
        if(confirm('Delete Document') == true)
    	 		{
                 $(this).closest('.DYNROW').remove()	
                }
    	 })
  
/*	$('.AFormaccordion').on('click', function() {
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		var tbl = $(this).attr("data-aria").split("|")[0];	
		var prfx = $(this).attr("data-aria").split("|")[1];
		if($(this).attr("aria-expanded") == "false")
			{
		FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", "");
			}
			
	});*/
	$('.FormSave').on('click', function() {
	if($(this).text() == "Save"){
		if($("#LPDT_SECURITYTYPE").val() == "")
		{
		alert("Security type is Mandatory");
		return false;
		}
	}
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		// Customer Seq ID Gen Start
		
	/* if($("#LPDT_DEMANTAMT").val()==""||$("#LPDT_DEMANTAMT").val()=="0")
  	  {
		   var xml=UI_getdata($(".FormPageMultiTab li.active").text(),$("#PrcsID").val(),"","","","LSW_TGETPROPPF")
	        $("#LPDT_DEMANTAMT").val($(xml).find('AMT').text())
	        $("#LPDT_DEMANTAMTGST").val($(xml).find('AMTGST').text())
			$("#LPDT_DEMANTAMT").next().addClass('active');
			$("#LPDT_DEMANTAMTGST").next().addClass('active');
			 //var amount=$(xml).find('AMT').text()
		 	if($("#DMY7").val().split('|')[8] != "HE02")
			{
          alert('Property Amount (PF) Rs. '+amount)
			}  
	  } */
		
		if($(this).text() == "Save & Next")
		{
		var MndtryChk = ChkMandatoryFlds("LPDTMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
			
	 /* if($("#LPDT_DEMANTAMT").val()==""||$("#LPDT_DEMANTAMT").val()=="0")
  	  {
		   var xml=UI_getdata($(".FormPageMultiTab li.active").text(),$("#PrcsID").val(),"","","","LSW_TGETPROPPF")
	        $("#LPDT_DEMANTAMT").val($(xml).find('AMT').text())
	        $("#LPDT_DEMANTAMTGST").val($(xml).find('AMTGST').text())
		//	var amount=$(xml).find('AMT').text()
			
         // alert('Property Amount (PF) Rs. '+amount)
	  } */
			
			
		}
		
		if($(this).text() == "Save & Next")
		{
		
		if(($("#LPDT_SECURITYTYPE").val() == "Deposits")&&($("#LPDT_DVALOFDEPO").val() == "0")||($("#LPDT_DVALOFMATUTY").val() == "0"))
				{
				alert('Value should not be 0');
				return false;
				}		
		else if(($("#LPDT_SECURITYTYPE").val() == "Gold")&&($("#LPDT_GVALOFGOLD").val() == "0")||($("#LPDT_GPREMARVAL").val() == "0"))
				{
				alert('Value should not be 0');
				return false;
				}
		else if(($("#LPDT_NETWORTHGUAR").val() == "0")&&($("#LPDT_SECURITYTYPE").val() == "Guarantees"))
				{
				alert('Networth of the Guarantor should not be 0');
				return false;
				}
		else if(($("#LPDT_MORIGIPRICE").val() == "0")&&($("#LPDT_SECURITYTYPE").val() == "Machinery"))
				{
				alert('Original Price should not be 0');
				return false;
				}
		else if(($("#LPDT_VALOFSECURITY").val() == "0")&&($("#LPDT_SECURITYTYPE").val() == "Property"))
				{
				alert('Value of the Security should not be 0');
				return false;
				}
		else if(($("#LPDT_SECURITYTYPE").val() == "Securities")&&($("#LPDT_SPREMARKETVAL").val() == "0")||($("#LPDT_STOTVALOFSEC").val() == "0"))
				{
				alert('Value should not be 0');
				return false;
				}
		else if(($("#LPDT_SECURITYTYPE").val() == "Vehicles")&&($("#LPDT_VASSETCOST").val() == "0")||($("#LPDT_VQUOTEVAL").val() == "0")||($("#LPDT_VPROVECLAMT").val() == "0")||($("#LPDT_VINSURAMT").val() == "0")||($("#LPDT_VBASEPRICE").val() == "0")||($("#LPDT_VPREMIUMPAID").val() == "0"))
				{
				alert('Value should not be 0');
				return false;
				}		
		
		}
		
		
		
		
		if($(this).text() == "Save & Next")
		{
		
			if(($("#LPDT_SECURITYTYPE").val() == "Vehicles" || $("#LPDT_SECURITYTYPE").val() == "Property")) 
			{
				if($('#LPDT_PROPDOCCOLL').is(":checked") == false)
				{
					alert("Kindly to collect the property document.");
					return;
				}
			}
		}
	
		if($("#LPDT_PROPERTYNO").val() == "")
		{
		var CUSID = UI_getdata("PRP",$("#PrcsID").val(),"Yes","","","Sam_sGetSeqID");
		$("#LPDT_PROPERTYNO").val($(CUSID).find("Val1").text());
	    }
		// Customer Seq ID Gen End 
		
		$("#LPDT_PROPERTYNAME").val($(".FormPageMultiTab li.active a div").text())
		
		
		
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
		var GRDDATA = TxtGridsubmitdata_V2("BankDetail1","PRDO_","LPDT_","PRDODBfields");
		AssignGridXmltoField("LPDT_GRDFILE", GRDDATA)
		
		var CHKresult=FormDataToDB(tbl,prfx,$("#LPDT_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
		if (CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		// Tab Header Change Start
		
		$(".FormPageMultiTab li.active").attr("id",$("#LPDT_PROPERTYNO").val());
		$(".FormPageMultiTab li.active").attr("title",$("#LPDT_PROPERTYNO").val());
		$(".FormPageMultiTab li.active a div").text($("#LPDT_PROPERTYNAME").val());
		
		// Tab Header Change End
		
			 var PROPERTYUPDATE=UI_getdata($("#PrcsID").val(),$("#LPDT_PROPERTYNO").val(),"","","","LSW_SUPDATEPROPERADDR")
		
		
		if($(this).text() == "Save & Next")
		{
			/*if($("#LPDT_PROPERTYNAME").val()!="Property 1")
			{
			  var op = UI_getdata(tbl,$("#PrcsID").val(),"","","","LSW_SCHKMNDTRY")
			  if($(op).find("RESULT").text()=="ALLOW")
				  {
				  NXTTAB(this);
				  }
			  else{
				  alert("Fill Mandatory Fields in Previous Tab.")
			  }
			}*/
            NXTTAB(this);	
		}
		
	});
});

