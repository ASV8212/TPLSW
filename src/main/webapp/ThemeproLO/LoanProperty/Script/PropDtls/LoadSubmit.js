$(document).ready(function () {
	
	
	$($('.AFormaccordion')[0]).click();
	
	
	
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#LPDT_PROPERTYNO").val($(".FormPageMultiTab li.active").attr("id"))
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
	GetCustomerName();
	
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
	
	//$(".LPDT_PROPERTYNO").text($("#LPDT_PROPERTYNO").val());
	
	FormDataFromDB("LSW_TLONPROPDTLS","LPDT_","LPDTDBfields", $("#LPDT_PROPERTYNO").val()+"|LPDT_PROPERTYNO");
	//ChkPerson();
	CheckChkbocVal();
    CheckPropOwner1();
	getaddresstypeonload();
	
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
		   $('.AddPro').attr('disabled',false)
		//  $('.DELBTNTXT').hide()
         }

var propertyname=$(".FormPageMultiTab li.active a div").text()	
if(propertyname=="Property 1")
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
 // $('input:radio[name=LPDT_ADDITIOPROP][value=No]').click();
}


// added cersai existingLoans
if($("#DMY7").val().split('|')[0]=="Existing Loans" && propertyname=="Property 1")
	{
		$('input:radio[name=LPDT_ADDITIOPROP]')[0].checked = false;
		$('input:radio[name=LPDT_ADDITIOPROP]')[1].checked = false;
	}


	
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
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		// Customer Seq ID Gen Start
		
		if($(this).text() == "Save & Next")
		{

		var MndtryChk = ChkMandatoryFlds("LPDTMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
			
	 if($("#LPDT_DEMANTAMT").val()==""||$("#LPDT_DEMANTAMT").val()=="0")
  	  {
		   var xml=UI_getdata($(".FormPageMultiTab li.active").text(),$("#PrcsID").val(),"","","","LSW_TGETPROPPF")
	        $("#LPDT_DEMANTAMT").val($(xml).find('AMT').text())
	        $("#LPDT_DEMANTAMTGST").val($(xml).find('AMTGST').text())
			var amount=$(xml).find('AMT').text()
			if($("#DMY7").val().split('|')[8] != "HE02")
			{
          alert('Property Amount (PF) Rs. '+amount)
	        }
	  }
			
			
		}
	
		if($("#LPDT_PROPERTYNO").val() == "")
		{
		var CUSID = UI_getdata("PRP","","Yes","","","Sam_sGetSeqID");
		
		$("#LPDT_PROPERTYNO").val($(CUSID).find("Val1").text());
		
	    }
		// Customer Seq ID Gen End 
		
		$("#LPDT_PROPERTYNAME").val($(".FormPageMultiTab li.active a div").text())
		
		var tbl = $(this).attr("data-aria").split("|")[0];
		var prfx = $(this).attr("data-aria").split("|")[1];
		var DATA = $(this).attr("data-aria").split("|")[2];
		
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
			  var op = UI_getdata(tbl,$("#PrcsID").val(),"","","","LSW_SCHKMNDTRY")
			  if($(op).find("RESULT").text()=="ALLOW")
				  {
				  NXTTAB(this);
				  }
			  else{
				  alert("Fill Mandatory Fields in Previous Tab.")
			  }
		}
		
	});
});
