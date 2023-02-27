$(document).ready(function () {
	
	
	//GETDROPDOWNVAL("Load");
	
	//SrcByDisble();
	
	var PrdType = UI_getdata("PRODUCT","","","","","LSW_SGETPRODVAL");

	//$("#LODE_PRODUCT").html("")
	$("#LODE_PRODUCT").append($(PrdType).find("RESULT").html());
	$("#LODE_PRODUCT").material_select();
	
	var LonPurpose = UI_getdata("LONPURPOS","",$("#DMY7").val().split('|')[8],"","","LSW_SGETPRODVAL");

	//$("#LODE_PRODUCT").html("")
	$("#LODE_LONPURP").append($(LonPurpose).find("RESULT").html());
	$("#LODE_LONPURP").material_select();
	
	var LoadSchemeOptn = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHEMEPRDWS");
	$("#LODE_SCHEME").append($(LoadSchemeOptn).find("RESULT").html());
	
	if($("#DMY7").val().split('|')[8]=="ML01")
	{
      $(".ML").show()
	  $(".MLMndtry").addClass('LODEMndtry')
	var LonPurpose = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],"","","","LSW_SGETPRODVAL");

	$("#LODE_PROPTYPE").append($(LonPurpose).find("RESULT").html());
	$("#LODE_PROPTYPE").material_select();
	}
	
	var stm=$("#DMY14").val()	
	var obj= JSON.parse(stm)
	$("#LODE_SOURCBY").append('<option value="" selected>--Select--</option>') 
    $("#LODE_SOURCBY").append(obj.SRCBY);
	$("#LODE_SOURCBY").material_select();
	
	
	FormDataFromDB("LSW_TLOANDETAILS","LODE_","LODEDBfields", "");
	

	CheckLoanTypeRM('LODE');


	if($("#LODE_SOURCBY").val()=="")
	{
       getLoanDetails();
	}
	CheckSourceOnload();
        CheckLoanType('Load');
	//getLoanDetails();
	CheckSrc();
	CheckLeadId();
	loadSubloanPurpose();
	SubloandropdownOnload();
	
	ChkSchemeLoad()
	
	
	CHKPRODUCTTYPE();
	
	
	if($("#DMY7").val().split("|")[8] =="HE02")
	{
		NEWPRODUCT();
	}
	
	if($("#LODE_PROPTYPE").val()!="" && $("#DMY7").val().split('|')[8]=="ML01")
	{
		var PropType=$("#LODE_PROPTYPE").val();
	    var PrType = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],$("#LODE_PROPUSAGE").val(),"","","LSW_SGETPRODVAL");
         $("#LODE_PROPTYPE").html("");
		 $("#LODE_PROPTYPE").append($(PrType).find("RESULT").html());

	      $("#LODE_PROPTYPE option[value='"+PropType+"']").attr("selected","selected")
		  $("#LODE_PROPTYPE").material_select(); 
	 
	}
	
	
	if($("#DMY5").val().split("|")[2] =="SendToCredit")
	{
		$("#LODE_SCHEME").attr('disabled',true);
		
		if($("#DMY7").val().split('|')[8]=="ML01")
		{
			$("#LODE_PROPUSAGE").attr('disabled',true);
			$("#LODE_PROPTYPE").attr('disabled',true);
		}
	}
	
	$('.FormSave').on('click', function() {
		
		//var FormXML =	submitdata("CBSIDBfields");
			
		
		// Mandatory Check Start
		if($(this).text() == "Save & Next")
			{

			var MndtryChk = ChkMandatoryFlds("LODEMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
			}
		
		// Mandatory Check End
		
		
			// Customer Seq ID Gen Start		
		
			//if($("#LPDT_PROPERTYNO").val() == "")
			//{
			//var CUSID = UI_getdata("PRP","","Yes","","","Sam_sGetSeqID");
			
			//$("#LPDT_PROPERTYNO").val($(CUSID).find("Val1").text());
			
		   // }
			// Customer Seq ID Gen End 
			
			//$("#LPDT_PROPERTYNAME").val($(".FormPageMultiTab li.active a div").text())
			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#LODE_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}
			
			// Tab Header Change Start
			
			//$(".FormPageMultiTab li.active").attr("id",$("#LPDT_PROPERTYNO").val());
			//$(".FormPageMultiTab li.active").attr("title",$("#LPDT_PROPERTYNO").val());
			//$(".FormPageMultiTab li.active a div").text($("#LPDT_PROPERTYNAME").val());
			
			// Tab Header Change End
			

			if($(this).text() == "Save & Next")
			{
				  NXTTAB(this);
			}
			
		});
		
	
		
	if($("#DMY7").val().split("|")[8] =="HE02"&& $("#DMY3").val().split("|")[2] =="")
	{
		SAVEDATA();
	}
	
});
