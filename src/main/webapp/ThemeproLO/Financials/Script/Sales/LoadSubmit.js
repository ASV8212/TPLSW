var OthrIncmDropDwn="";
var OthrIncmDropDwn1="";
//Credit Changes Strt
var ViewRInavtivePGFlg = "";
if(($("#DMY5").val().split("|")[1]=="Yes")||$("#PrMs1").val()=="View")
		{
		  ViewRInavtivePGFlg = "View";
		}
//Credit Changes END
$(document).ready(function () {
	 CheckGstCus();
	 
	//$("#EGCD_UNIQUID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	
	/*var xml1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETINDUSCATRGORY");
	//$("#HiddenINDUSCATRGORY").val($(xml1).find("INDUSCATRGORY").text());
	$("#HiddenINDUSCATRGORY").val(xml1);
	
	var Industry=UI_getdata("","","","","","LSW_SGETINDUSDD")
	$("#EGCD_INDUSTRY").html("");
	$("#EGCD_INDUSTRY").append($(Industry).find('INDUSTRY').html());
	
	var LoadSchemeOptn = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHEMEPRDWS");
	$("#SCHEME").append($(LoadSchemeOptn).find("RESULT").html());
	
	
	var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID =$("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#headingOne1 a").attr("data-aria").split("|")[3];
	
	
	
	if($("#RCCM_UNIQUID").val()=="S00002" || $("#RCCM_UNIQUID").val()=="S00001")
	{ 
	  var xml=UI_getdata($("#PrcsID").val(),$("#RCCM_UNIQUID").val(),"","","","LSW_SCHECKELIGDATA")
	  
	  if($(xml).find('RESULT').text() != 'OK')
	   {
		  alert($(xml).find('RESULT').text())
		 
		  if( $(".FormPageMultiTab li.active").prev().length == 0)
		  {
		  	$("#FormPageTab1").click()
		  }
		  else
		  {
		  	 $(".FormPageMultiTab li.active").prev().click();
		  }
		  return false;
	   }
	}

	 if($("#DMY5").val().split("|")[1]=="Yes")
		 {
		 $(".GENCAM").show();
		 
		 }
		 else if($("#PrMs1").val()=="View")
		{
			$(".GENCAM").show()
		}
	 else
		 {
		 $(".GENCAM").hide();
		 }
	
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}  */
	//LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val(),"CAMChecklist","CACLDBfields","LSW_SGETSCHEMECUSID");
	
	//OthrIncmDropDwn1 = UI_getdata("SALOI",$("#PrcsID").val(),$("#VIAB_CUSID").val(),"","","LSW_SGETOTHRINCMDRPDOWN")
	//OthrIncmDropDwn = $(OthrIncmDropDwn1).find('RESULT').html()
	
	 /* if($(OthrIncmDropDwn1).find('STATUS').text()=="Yes")
	{
		$(".SALINCM").show();
		$(".NODATA").hide();
	}
	else
	{
	  $(".SALINCM").hide();	
	  $(".NODATA").show();
	}
	
     var DATA ="SIND_CUSID"

	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}*/
 
	$("#SALE_PRCSID").val("#prcsid");
	$("#SALE_ACTIVITYID").val("#ActvID");
    FormDataFromDB("LSW_TSALESDETL","SALE_", "SALEDBfields","");
	 
	
	
	$("#BTNSALESGRD").click();
 
	 
 

	$(document).on("click", ".FormSave" , function() {
	//$('.FormSave').on('click', function() {
 
			  var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

        if ($(this).text() == "Save & Next") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") 
            {
                alert("Fill the Mandatory Fields");
                return false;
            }
    
        }
			var SALE_SALES = TxtGridsubmitdata_V1("Table1","SALS_","SALE_");
			AssignGridXmltoField("SALE_SALES", SALE_SALES)
			
	var OP=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").text(),$(".FormPageMultiTab li.active").attr("id"),"","","LSW_SSTRCAMMAINTABLE")
   if($(OP).find("LOANID").text()!="")
		{			
		  $("#RCCM_LOANUNIQID").val($(OP).find("LOANID").text());
		}

			
	
	
			var FormName=$(this).attr("data-form")
 
			var CHKresult=FormDataToDB(tbl, prfx, '');
			if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}

        if ($(this).text() == "Save & Next") {
            NXTTAB(this);
        }
			
	}); 
 
$("#BTNEXISTINGDATA").on('click', function() {
	var tbl = $("#headingTwo2 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingTwo2 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingTwo2 a").attr("data-aria").split("|")[2];
	var CusID =$("#headingTwo2 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#headingTwo2 a").attr("data-aria").split("|")[3];
	
	  if($("#"+CusID).val() == "")
		{
		  $("#"+CusID).val($("#"+CusID1).val())
		}
	  if  (DATA != "")
		{
			DATA = $("#"+DATA).val()+"|" + DATA;
		}
		//Credit Policy Change Strt********
		if($(".FormPageMultiTab li.active").attr("id") == "S00002" && $("#DMY7").val().split('|')[0]=="Existing Loans" && $("#DMY7").val().split('|')[8] == "HE01")
		{
			$(".ENBLONLYFRRTR").show();
			$(".ENBLONLYFRRTR").find("[name=RXLM_ISCHOLALN]").addClass("RXLMMndtry");
			
		}
		//Credit Policy Change End********
       
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	if($("#RCCM_UNIQUID").val()=="S00007")
	{
		$("#HIDDENCOL").val('||10,11,12')
		$("#BTNRTREXTGRD").click();
		//FncallDocChkLst(this,'Table2',{spname:'LSW_TKYCDOCCHECKLIST1',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:'KYCDOC',brid:$('#PrcsID').val(),MnuId:$('#UPDC_CUSID').val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'DocumentCheckList'); 
		//FncallDocChkLst(this,'Table3',{spname:'LSW_SRTREXISTINGLOAN',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#RXLM_UNIQUID').val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||'+$("#HIDDENCOL").val(),'FINANCEXIXTING');
	}
	else
	{
	   $("#HIDDENCOL").val('||9,10,11,12')
	   $("#BTNRTREXTGRD").click();
	}
	FnLoadEXGrd()
	if($(".FormPageMultiTab li.active").attr("id")=="S00002"){
	$($("#Table3").find("th")[5]).text('CONSIDER FOR RTR.')
	}
	
	if($(".FormPageMultiTab li.active").attr("id")=="S00003"){
	$($("#Table3").find("th")[5]).text('CONSIDER FOR CLOSURE')
	}
	
	if($(".FormPageMultiTab li.active").attr("id")=="S00004"){
	$($("#Table3").find("th")[5]).text('CONSIDER FOR FOIR')
	}
	
});

 
// Added for HE02 Purpose Start
if($("#DMY7").val().split("|")[8] == "HE02")
      {
		  $('.FormPageMultiTab').find('li').last().hide()
          $('.DELBTNTXT').hide()
          $(".EXITLON").hide()
          $(".CAM").hide()
		  $(".LTV").hide();
		  //$(".AFormaccordion").click();
		   $('.FormPageMultiTab').find('li.active').text('Scheme');
		   $("#Save1").click();
		   $(".Eligibility").find('.AFormaccordion').click();
		   $(".ExpAmt").focusout();
		   //$("#BTNELIGBLEDATA").click();  
	  }
	   // Added for HE02 Purpose End

	
});

