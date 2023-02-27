$(document).ready(function () {
	
	/* if($("#PrMs1").val()=="View")
	{
	$(".VIEWDEDUPEBTN").attr('disabled',false);
	} */
	//$($('.AFormaccordion')[0]).click();
	$("#CEMI_PRCSID").attr("value",$("#PrcsID").val());
	$("#CGST_PRCSID").attr("value",$("#PrcsID").val());
	var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID =$("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#headingOne1 a").attr("data-aria").split("|")[3];
	
	// Added Since Loading Issues Date - 28/05/2020 Start
	var CItbl = $("#headingTwo2 a").attr("data-aria").split("|")[0];	
	var CIprfx = $("#headingTwo2 a").attr("data-aria").split("|")[1];
	var CIDATA = $("#headingTwo2 a").attr("data-aria").split("|")[2];
	var CICusID =$("#headingTwo2 a").attr("data-aria").split("|")[2];
	var CICusID1 =$("#headingTwo2 a").attr("data-aria").split("|")[3];
    //End
	
	var Orgtbl = $("#headingFour4 a").attr("data-aria").split("|")[0];	
	var Orgprfx = $("#headingFour4 a").attr("data-aria").split("|")[1];
	var OrgDATA = $("#headingFour4 a").attr("data-aria").split("|")[2];
	var OrgCusID =$("#headingFour4 a").attr("data-aria").split("|")[2];
	var OrgCusID1 =$("#headingFour4 a").attr("data-aria").split("|")[3];
	
	
	if(DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	$("#headingOne1 a").attr("data-load","Yes");
	
	
	var xml=UI_getdata("","","","","","LSW_SGETNATUR")
	
	$("#CDOG_INDUSCATRGORY").html("")
	$("#CDOG_INDUSCATRGORY").append($(xml).find("Industry").html());
	$("#CDOG_INDUSCATRGORY").material_select();
	$("#CEMI_INDUSCATRGORY").html("")
	$("#CEMI_INDUSCATRGORY").append($(xml).find("Industry").html());
	//$("#CEMI_INDUSCATRGORY").material_select();
	
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	if($("#DMY5").val().split('|')[2]=="SendToCredit")
	{
        $("#CDOG_KYCCATEGORY").attr('disabled',false);
		$("#CDOG_KYCCATEGORY").addClass('CDOGMndtry');
     
    }
    else
    {
        $("#CDOG_KYCCATEGORY").attr('disabled',true);
        $("#CDOG_KYCCATEGORY").removeClass("CDOGMndtry");
		
    }
	
	if($("#CBSI_PANVERIFY").val()=='Verified')
	{
		$(".CBSI_PAN").addClass('VIEWDISABLE');
	}
	if($("#CBSI_VOTERIDVEIRFY").val()=='Verified')
	{
		$(".CBSI_VOTERID").addClass('VIEWDISABLE');
	}
	if($("#CBSI_DRIVLICNSVERIFY").val()=='Verified')
	{
		$(".CBSI_DRIVLICNS").addClass('VIEWDISABLE');
	}
	if($("#CBSI_PASSPORTVERIFY").val()=='Verified')
	{
		$(".CBSI_PASSPORT").addClass('VIEWDISABLE');
	}
	// Added Since Loading Issues Date - 28/05/2020 Start
	
	if($("#"+CICusID1).length>0)
	  {
		$("#"+CICusID).val($("#"+CICusID1).val())
	  }
	  
	  if($("#"+OrgCusID1).length>0)
	  {
		$("#"+OrgCusID).val($("#"+OrgCusID1).val())
	  }
	
	if(CIDATA != "")
	{
		CIDATA = $("#"+CIDATA).val()+"|" + CIDATA;
	}
	$(".ImgScore").text('Image Score : '+$("#CBSI_IMGSCORE").val());
	GetSector();
	FormDataFromDB(CItbl, CIprfx + "_", CIprfx+"DBfields", CIDATA);
	LoadMultiData("",$("#PrcsID").val(),"","BankDetail2","CGSTDBfields","LSW_SGETGSTGRDDATA");
	if($("#CBSI_AADHARTYPE").val()=="ZIP File Verification")
     {
      $(".AUPLDXMLII").hide();
      }
	
	FormDataFromDB(Orgtbl, Orgprfx + "_", Orgprfx+"DBfields", OrgDATA);
	
	// End
	if($("#VERTICAL").val()=="MSME Alliance")
	{
		 $("#CADI_CGEOLIMIT").removeClass('CADIMndtry');
		 $("#CADI_CGEOLIMIT").next().find(".MndtryAstr").html("");
	}
	
	if($("#CADI_EMAILVERIFY").val()=="Verified")
	{
		$('.CADI_EMAILVERIFYCLASS').addClass("btn-GrnInplain");
		$('.CADI_EMAILVERIFYCLASS').text($("#CADI_EMAILVERIFY").val())
	}

if(($("#CBSI_CUSTYPE").val() == "Non-Individual") && (($("#CBSI_CONSTITUTION").val()=="Private Ltd")||($("#CBSI_CONSTITUTION").val()=="Public Ltd ")))
    {
      $("#CADI_ORGLNDLINENO").addClass('CADIMndtry');
	  $("#CADI_ORGSTDC").addClass('CADIMndtry');
	  //$("#CADI_MOBNOI").removeClass('CADIMndtry');
      //$("#CADI_MOBIVERIFY").removeClass('CADIMndtry');
              
    }
 else
    {
     $("#CADI_ORGLNDLINENO").removeClass('CADIMndtry');
	 $("#CADI_ORGSTDC").removeClass('CADIMndtry');
	 //$("#CADI_MOBNOI").addClass('CADIMndtry');
     //$("#CADI_MOBIVERIFY").addClass('CADIMndtry');
    }
	if(($("#CBSI_CUSTYPE").val() == "Non-Individual") && ($("#CBSI_CONSTITUTION").val()=="Partnership firms"))
    {
		
		$(".PARTTYPE").show();
		$("#CBSI_PARTNERSHPTY").addClass('CBSIMndtry');
		$("#CBSI_PARTNERSHPTY").parent().next().find(".MndtryAstr").html("*");
	}
	else
	{
	
		$(".PARTTYPE").hide(); 
	}
    if($("#DMY7").val().split("|")[8]=="HE02")
	{
		$(".BTNDedupe").hide();
	}
	
	Chkdirect();
	CheckGstNumber();
	Checkborrower();
	Chkbox();
	//Cochk();
	//Udyamcheckorg();
	if($("#CBSI_HIDPROFTYP").val()!='')
	{	
	var HIDPROFTYP=$("#CBSI_HIDPROFTYP").val()
	var PROOFTYPE=HIDPROFTYP.split(",");
	var row = $(PROOFTYPE).length;
	for (i=0;i<row;i++)
	{
	if(PROOFTYPE[i] !="")
	{
	$("#CBSI_KYCPROOFTYP option[value='"+PROOFTYPE[i]+"']").attr("selected","selected")
	}
	}
	}
	
	var xml=UI_getdata("Karza",$("#VERTICAL").val(),"","","","LSW_SCHKINTGSTATUS")
	var data=$(xml).find('STATUS').text()
	
	$("#KARZASTATUS").val(data)
	
	if(data=="Inactive")
	{
		$(".INTDSBV").attr("disabled",true);
		$("#CDOG_INCCONSID").attr('disabled',false);
		$("#CDOG_INCCONSID").addClass("CDOGMndtry");
		$("#CEMI_INCCONSID1").attr('disabled',false);
		$("#CEMI_INCCONSID1").addClass("CEMIMndtry");
	}
	else
	{
		$(".INTDSBV").attr("disabled",false);
	}
	
 	if($("#DMY7").val().split("|")[0]=="Existing Loans"&&$("#CBSI_FILESTATUS").val()=="C")
		{
		$("#CBSI_PROFILE").attr('disabled',true)
        }  
		
		if($("#DMY7").val().split("|")[0]=="Re-Punch"&&$("#CBSI_FILESTATUS").val()=="C")
		{
		$("#CBSI_PROFILE").attr('disabled',true)
        }  
	
		var User=UI_getdata($("#LogUsr").val(),"","","","","LSW_SGETUSERRPTID")
	
	if($("#CBSI_RPTID").val()=="")
	{
		$("#CBSI_RPTID").val($(User).find('RPTID').text())
	}
	if($("#CBSI_CURUSROLE").val()=="")
	{
		$("#CBSI_CURUSROLE").val($(User).find('ROLE').text())
	}
	
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#CBSI_CUSID").val(),"","","","LSW_SGETFISTATUS")
	
	/*if($(xmlSTATUS).find('RESULT').text()=="N")
		{
		 $("#FormMainTab2").addClass('TABDSVLBL')
		 $("#FormMainTab3").addClass('TABDSVLBL')
		 $("#FormMainTab4").addClass('TABDSVLBL')
		 $("#FormPageTab2").addClass('TABDSVLBL')
		 $("#FormPageTab3").addClass('TABDSVLBL')
		}
	else
		{
	     $("#FormMainTab2").removeClass('TABDSVLBL')
		 $("#FormMainTab3").removeClass('TABDSVLBL')
		 $("#FormMainTab4").removeClass('TABDSVLBL')
		 $("#FormPageTab2").removeClass('TABDSVLBL')
		 $("#FormPageTab3").removeClass('TABDSVLBL')
		}
	*/
	
	 if($(xmlSTATUS).find('RESIDENCESTA').text()=="Completed")
		 {
		  $('.RESSTAT').attr('disabled',true)
		  $("#CBSI_RESCOMPETED").val($(xmlSTATUS).find('RESIDENCESTA').text())
		  
         }
	
    	if($(xmlSTATUS).find('OFFICESTAT').text()=="Completed")
    	 {
    	 // $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
    		$("#CBSI_FICOMPETED").val($(xmlSTATUS).find('OFFICESTAT').text())
    		$('.ORGADD').attr('disabled',true)
         }	
		 
		 if($(xmlSTATUS).find('LEADSTATUS').text()=="Y")
    	 {
    		$('#CADI_EMAILID').attr('disabled',true)
			$('#CADI_MOBNOI').attr('disabled',true)
			$('.CADI_EMAILID').attr('disabled',true)
			//$('.CADI_MOBNOI').attr('disabled',true)
         }	

	$("#CEMI_CUSID").attr("value",$("#"+CusID1).val());
	if ($("#"+CusID1).length>0)
	{
		if($("#"+CusID1).val()=="")
		{
		   $("."+CusID1).text('Customer ID')
		}
		else
		{
		   $("."+CusID1).text($("#"+CusID1).val());
		}
	}
	
	
	
	
	CheckDudupe('CBSI_DEDUPEVERIFY');
	//LoadVwImg();
	//CheckExsCust();
	CheckAppltype();
	CheckMarStatus();
	CheckUploadMndtry();
	ApplicantTitleDisabl();
	 CheckNegativeList();
	CheckIncomeCons();
	CheckFieldDisb();
	Chkqualify('','','','Load');
        NotIndiPan()
        //CheckLoanType('CBSI','CADI','CEMI','CDOG');
		AddZoom();
		//CheckGSTorNot();
		showRejRmk();
		CheckProfile('Load');
		FindConstDD();
	LoadVwImage('CBSI_');
	
	  if($("#CBSI_MSKAADHARATTACHMENT").val()!="")
	  {
	   $(".AadharMskImg").show();
	   $(".AadharViewImg").hide();
	   $("#CBSI_AADHAR").attr("disabled",true);
      }
	  if($("#CBSI_MSKAADHARATTACHMENTII").val()!="")
	  {
	   $(".AadharMskImgII").show();
	   $(".AadharViewImgII").hide();
	   $("#CBSI_AADHAR").attr("disabled",true);
      }
	
	if($("#CBSI_UBVERIFYTYPE").val()=="Mobile Authentication with OTP")
	{
		$(".UtilityLable").text("Service Number");
	}
	
	
	
	//Loadresidentaddr();
	/*$('.AFormaccordion').on('click', function() {
		
	//var FormXML =	submitdata("CBSIDBfields");
		
		var tbl = $(this).attr("data-aria").split("|")[0];	
		var prfx = $(this).attr("data-aria").split("|")[1];
		if($(this).attr("aria-expanded") == "false")
			{
		FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", "");
			}	
	});*/
	
	       if($("#CBSI_FETCHFSTNAME").val() != "")
        	  {
        	  $("#CBSI_CUSFISNAM").attr('disabled',true);
        	  }
	      if($("#CBSI_FETCHLSTNAME").val() != "")
	          {
	    	    $("#CBSI_CUSLSTNAM").attr('disabled',true);
	          }
			  
		 if($("#KARZASTATUS").val()=="Active")
	   {		   
		if($("#CBSI_CUSID").val() == "" || $("#CBSI_PANVERIFY").val() == "" )
    	  {
    	   $('.ACCRDISB').addClass('TABDSVLBL');
    	  }  
	   }
     else
	  {
		   if($("#CBSI_CUSID").val() == "")
    	    {
    	     $('.ACCRDISB').addClass('TABDSVLBL');
    	    }
      }	
   
	    if($(xmlSTATUS).find('STATUS').text()=='Y')
		 {
			 $("#CADI_PINCODE").attr('disabled',true)
			 $("#CADI_ORGPINCODE").attr('disabled',true)
			 $("#CADI_PERMPINCODE").attr('disabled',true)
		 }
		 else
		 {
			$("#CADI_PINCODE").attr('disabled',false) 
			$("#CADI_ORGPINCODE").attr('disabled',false)
			$("#CADI_PERMPINCODE").attr('disabled',false)
		 }    
			  
			  
		 if($("#CBSI_CUSTYPE").val()=='Non-Individual')
		 {	  
			  $("#CBSI_CUSFISNAM").removeClass('IsUpprCse');
			  $("#CBSI_CUSFISNAM").removeClass('IsAlphaFields');
			  //$("#CBSI_CUSFISNAM").addClass('IsNumberFields');
			 // $("#CBSI_CUSFISNAM").addClass('NONumber');
			  
		 }
	
	$(document).on("click", ".DELETEAPPEMP" , function() {

 	var PrcsId=$(this).attr("data-tab").split("|")[0];
 	var Type=$(this).attr("data-tab").split("|")[2];
 	PrcsId=$("#"+PrcsId).val();
	 var html=$(this).closest('.DYNROW')
     var UNIQID=$(html).find("[name=CEMI_EMPID]").val() 

 	 if(confirm('Delete Employment Details') == true)
 		{
 		  var xml=UI_getdata(PrcsId,UNIQID,Type,"","","LSW_SCLEARCUSDATA");

 	 	   $(this).closest('.DYNROW').remove()	
 	 		var k= $('.BankDetail1').find('.DYNROW').length
 	 		for(i=0;i<k;i++)
 	 			{
 	 			//('.BankDetail1').find('.DYNROW')[i]
 	 		    var	j=i+1
 	            $($('.BankDetail1').find('.DYNROW')[i]).find('#PROPTXTHDR').text('Employment '+j)
 	 			}
 		}
 })
 // Contact Details Data Start

 $(document).on("click", ".CONLOAD", function()
{
	//if($("#CBSI_GSTNUM").val() != "")
	//{
	//	VerifyGST('CBSI_GSTNUM','CBSI_GSTVERIFY','CBSI_CUSTYPE','CADI_ADDRLINI','CADI_ADDRLINII')//$(".CBSI_GSTNUM").click();
	//}
	
	
	if($("#"+CICusID1).length>0)
	  {
		$("#"+CICusID).val($("#"+CICusID1).val())
	  }
		var xml=UI_getdata($("#PrcsID").val(),$("#CBSI_CUSID").val(),$("#CADI_EMAILID").val(),"","","LSW_SEMAILVERIFY")
			  
			  if($(xml).find('STATUS').text()=='Y')
			  {
				  $("#CADI_EMAILVERIFY").val('Verified')
				  $(".CADI_EMAILID").text('Verified')
				   $(".EMAILLINK").text('');
				  $(".CADI_EMAILID").addClass('btn-GrnInplain');
				  $(".CADI_EMAILID").removeClass('btn-yelInplain');
			  }
			  else
			  {
				  if($(xml).find('STATUS').text() !="N")
				  {
					$(".EMAILLINK").text($(xml).find('STATUS').text())
					$(".CADI_EMAILID").text('Verify')
				    $(".CADI_EMAILID").removeClass('btn-GrnInplain');
				    $(".CADI_EMAILID").addClass('btn-yelInplain');
				  }
				  else
				  {
				  $(".CADI_EMAILID").text('Verify')
				  $(".EMAILLINK").text('');
				  $(".CADI_EMAILID").removeClass('btn-GrnInplain');
				  $(".CADI_EMAILID").addClass('btn-yelInplain');
				  }
			  }
			  
			  
	if($("#CADI_EMAILVERIFY").val()=="Verified")
	{
		$('.CADI_EMAILVERIFYCLASS').addClass("btn-GrnInplain");
		$('.CADI_EMAILVERIFYCLASS').text($("#CADI_EMAILVERIFY").val())
	}
	
	
	
	Loadresidentaddr();
	
	var ADxml=UI_getdata($("#PrcsID").val(),$("#CBSI_CUSID").val(),"","","","LSW_SGETDCADDRDATA")
			  
			  if($(ADxml).find("ADP1").text()!="")
			  {
				  $(".ADDRVI").show();
			      $("#CADI_ADDRPROOF1").val($(ADxml).find("ADP1").text())
				  $("#CADI_NIADDRPROOF1").val($(ADxml).find("ADP1").text())
				  //$("#CADI_ADDRPROOF1").next().append("<span>"+$(ADxml).find("ADPNAME1").text()+"</span>")
				 
			  }
			  else
			  {
				  $(".ADDRVI").hide();
			  }
			  
			  if($(ADxml).find("ADP1").text()!="")
				{
				  $(".ADDRVII").show();
			     $("#CADI_ADDRPROOF2").val($(ADxml).find("ADP1").text())
				  //$("#CADI_ADDRPROOF2").next().append("<span>"+$(ADxml).find("ADPNAME2").text()+"</span>")
			  }
			  else
			  {
				 $(".ADDRVII").hide(); 
			  }
})

// Contact Details Data End

$(document).on("click", ".ORGDETL", function()
{
	if($("#"+$(this).attr("data-aria").split("|")[2]).val() == "")
	   {
		$("#"+$(this).attr("data-aria").split("|")[2]).val($("#"+$(this).attr("data-aria").split("|")[3]).val())
	   }
Chkbox();
if($("#DMY5").val().split('|')[2]=="SendToCredit")
{
OrgNaturBusness();
}
	//Checkborrower();
})

// Employment Details Data Start

$(document).on("click", ".EMPDLOAD", function()
{
//Cochk();
	/*if($("#CBSI_GSTNUM").val() != "")
	{
		VerifyGST('CBSI_GSTNUM','CBSI_GSTVERIFY','CBSI_CUSTYPE','CEMI_ADDRLINEI1','CEMI_ADDRLINEII1')//$(".CBSI_GSTNUM").click();
	}
	
	if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Office Address")
	   {
	      var Addr1='CEMI_ADDRLINEI1';
		  var Addr2='CEMI_ADDRLINEII1';
		  var pin='CEMI_PINCODE1';
		  var city='CEMI_CITY1';
		  var state='CEMI_STATE1';
		  
		  var AddrIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[0]).text()
		  var AddrIIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[1]).text()
	      var PINCODE=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[2]).text()
       var CITYVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[3]).text()
       var STATEVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[4]).text()
		  
          $("#"+Addr1).val(AddrIVal);
	    	 $("#"+Addr2).val(AddrIIVal);
	    	 $("#"+pin).val(PINCODE);
	    	 $("#"+city).val(CITYVAL);
	    	 $("#"+state).val(STATEVAL);

	    	 if( $("#"+Addr1).val() != "")
 		 {
	    	 $("#"+Addr1).next().addClass('active');
	    	// $("#"+Addr1).attr('disabled',true)
 		 }
	    	 if( $("#"+Addr2).val() != "")
 		 {
	    	 $("#"+Addr2).next().addClass('active');
	    	 //$("#"+Addr2).attr('disabled',true)
 		 }
	    	 if( $("#"+pin).val() != "")
 		 {
	    	 $("#"+pin).next().addClass('active');
	    	// $("#"+pin).attr('disabled',true)
 		 }
	    	 if( $("#"+city).val() != "")
 		 {
	    	 $("#"+city).next().addClass('active');
	    	 //$("#"+city).attr('disabled',true)
 		 }
	    	 if( $("#"+state).val() != "")
 		 {
	    	 $("#"+state).next().addClass('active');
	    	 //$("#"+state).attr('disabled',true)
 		 }
	   } */
	
})

// Employment Details Data End

	$(document).on("click", ".CusTypeDetl" , function() {
		$('input[name="CoAppType"]').prop('checked', false);	
		$(".Constitution").hide();
		$(".CIN").hide();
		$("#CoAppConsti").val('');
		$('#CoAppConsti').material_select("destroy");	
		$('#CoAppConsti').material_select();
    });
	
	$(document).on("click", ".DedupeSmt", function(){
		
		if($(this).text()=="Confirm")
		 { 
	 
	 var personalinfocusid = $($("input[name='ACTION']:checked").closest(".tbodytr").find(".tbodytrtd")[19]).text();
	 
		/*	var contactcusid = $($("input[name='MOBNO']:checked").closest(".tbodytr").find(".tbodytrtd")[7]).text();
			var addrinfocusid = $($("input[name='ADDRACTION']:checked").closest(".tbodytr").find(".tbodytrtd")[12]).text();*/
			
			if(personalinfocusid == "NA")
			{
				alert("Invalid Customer ID Has Been Picked For Processing, Pick a Valid Customer ID to Process Further");
				return;
			}
			if(personalinfocusid == "")
			{
				alert("Invalid Customer ID Has Been Picked For Processing, Pick a Valid Customer ID to Process Further");
				return;
			}
			
			var xmlsamecus=UI_getdata($("#PrcsID").val(),personalinfocusid,"","","","LSW_SCHKCUSTOMERIDEX");
			
			if($(xmlsamecus).find("RESULT").text() != "SUCCESS")
			{
				alert($(xmlsamecus).find("RESULT").text());
				return;
			}
			
		/*	if((contactcusid == personalinfocusid) && (contactcusid  == addrinfocusid))
			{
				
			}
			else
			{
				alert("Different Customer ID Has Been Choosen, Pick Same Customer ID to Process Further");
				return;
			}
		   if($("input[name='MOBNO']:checked").val()=="Yes")
		   {
			  var Mob='CADI_MOBNOI';
			  var MobNum=$($("input[name='MOBNO']:checked").closest('tbody tr').find('td')[0]).text()
			  $("#"+Mob).val(MobNum);
			  
			  if( $("#"+Mob).val() != "")
	 		    {
		    	   $("#"+Mob).next().addClass('active');
		    	   //$("#"+Mob).attr('disabled',true)
	 		    }
		   }
   if($("input[name='ADDRACTION']:checked").val()=="Yes")
       {
      if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Residence Address")
	   {
	      var Addr1='CADI_ADDRLINI';
		  var Addr2='CADI_ADDRLINII';
		  var pin='CADI_PINCODE';
		  var city='CADI_CITY';
		  var state='CADI_STATE';
		  
		  var AddrIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[0]).text()
		  var AddrIIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[1]).text()
	      var PINCODE=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[2]).text()
         var CITYVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[3]).text()
         var STATEVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[4]).text()
		  
            $("#"+Addr1).val(AddrIVal);
	    	 $("#"+Addr2).val(AddrIIVal);
	    	 $("#"+pin).val(PINCODE);
	    	 $("#"+city).val(CITYVAL);
	    	 $("#"+state).val(STATEVAL);
	    	if( $("#"+Addr1).val() != "")
   		 {
	    	 $("#"+Addr1).next().addClass('active');
	    	 //$("#"+Addr1).attr('disabled',true)
   		 }
	    	 if( $("#"+Addr2).val() != "")
   		 {
	    	 $("#"+Addr2).next().addClass('active');
	    	// $("#"+Addr2).attr('disabled',true)
   		 }
	    	 if( $("#"+pin).val() != "")
   		 {
	    	 $("#"+pin).next().addClass('active');
	    	// $("#"+pin).attr('disabled',true)
   		 }
	    	 if( $("#"+city).val() != "")
   		 {
	    	 $("#"+city).next().addClass('active');
	    	 //$("#"+city).attr('disabled',true)
   		 }
	    	 if( $("#"+state).val() != "")
   		 {
	    	 $("#"+state).next().addClass('active');
	    	// $("#"+state).attr('disabled',true)
   		 }
	    	    
	   }
  else if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Permanent Address")
     {
	      var Addr1='CADI_PREMADDRLINI';
		  var Addr2='CADI_PERMADDRLINII';
		  var pin='CADI_PERMPINCODE';
		  var city='CADI_PERMCITY';
		  var state='CADI_PERMSTATE';
		  
		  var AddrIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[0]).text()
		  var AddrIIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[1]).text()
	      var PINCODE=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[2]).text()
         var CITYVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[3]).text()
         var STATEVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[4]).text()
		  
            $("#"+Addr1).val(AddrIVal);
	    	 $("#"+Addr2).val(AddrIIVal);
	    	 $("#"+pin).val(PINCODE);
	    	 $("#"+city).val(CITYVAL);
	    	 $("#"+state).val(STATEVAL);
	    	 if( $("#"+Addr1).val() != "")
   		 {
	    	 $("#"+Addr1).next().addClass('active');
	    	// $("#"+Addr1).attr('disabled',true)
   		 }
	    	 if( $("#"+Addr2).val() != "")
   		 {
	    	 $("#"+Addr2).next().addClass('active');
	    	 //$("#"+Addr2).attr('disabled',true)
   		 }
	    	 if( $("#"+pin).val() != "")
   		 {
	    	 $("#"+pin).next().addClass('active');
	    	// $("#"+pin).attr('disabled',true)
   		 }
	    	 if( $("#"+city).val() != "")
   		 {
	    	 $("#"+city).next().addClass('active');
	    	 //$("#"+city).attr('disabled',true)
   		 }
	    	 if( $("#"+state).val() != "")
   		 {
	    	 $("#"+state).next().addClass('active');
	    	// $("#"+state).attr('disabled',true)
   		 }
     }
    if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Office Address")
    { 
      if($("#CBSI_CUSTYPE").val() == "Non-Individual")
        {
	      var Addr1='CADI_ORGADDRLINI';
		  var Addr2='CADI_ORGADDRLINII';
		  var pin='CADI_ORGPINCODE';
		  var city='CADI_ORGCITY';
		  var state='CADI_ORGSTATE';
		  
		  var AddrIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[0]).text()
		  var AddrIIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[1]).text()
	      var PINCODE=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[2]).text()
         var CITYVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[3]).text()
         var STATEVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[4]).text()
		  
            $("#"+Addr1).val(AddrIVal);
	    	 $("#"+Addr2).val(AddrIIVal);
	    	 $("#"+pin).val(PINCODE);
	    	 $("#"+city).val(CITYVAL);
	    	 $("#"+state).val(STATEVAL);
       }
   else
      {
	      var Addr1='CEMI_ADDRLINEI1';
		  var Addr2='CEMI_ADDRLINEII1';
		  var pin='CEMI_PINCODE1';
		  var city='CEMI_CITY1';
		  var state='CEMI_STATE1';
		  
		  var AddrIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[0]).text()
		  var AddrIIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[1]).text()
	      var PINCODE=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[2]).text()
          var CITYVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[3]).text()
          var STATEVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[4]).text()
		  
		  
             $("#"+Addr1).val(AddrIVal);
	    	 $("#"+Addr2).val(AddrIIVal);
	    	 $("#"+pin).val(PINCODE);
	    	 $("#"+city).val(CITYVAL);
	    	 $("#"+state).val(STATEVAL);

	    	 if( $("#"+Addr1).val() != "")
    		 {
	    	 $("#"+Addr1).next().addClass('active');
	    	// $("#"+Addr1).attr('disabled',true)
    		 }
	    	 if( $("#"+Addr2).val() != "")
    		 {
	    	 $("#"+Addr2).next().addClass('active');
	    	 //$("#"+Addr2).attr('disabled',true)
    		 }
	    	 if( $("#"+pin).val() != "")
    		 {
	    	 $("#"+pin).next().addClass('active');
	    	// $("#"+pin).attr('disabled',true)
    		 }
	    	 if( $("#"+city).val() != "")
    		 {
	    	 $("#"+city).next().addClass('active');
	    	 //$("#"+city).attr('disabled',true)
    		 }
	    	 if( $("#"+state).val() != "")
    		 {
	    	 $("#"+state).next().addClass('active');
	    	 //$("#"+state).attr('disabled',true)
    		 }
			 
    	  }
    }
  }*/
	    if($("input[name='AGREEACTION']:checked").val()=="Yes")
		   {
			  var ExAcct=$($("input[name='AGREEACTION']:checked").closest('tbody tr').find('td')[2]).text()
			   
			   if($("#CBSI_EXISTLONID").val() =="")
			   {
				   var xml=UI_getdata(ExAcct,"","","","","LSW_SINSEXLONFRDED")
			  
			      var AcctId=$(xml).find('CBSI_APPLCNTNO').text();
			      var OldPrcsid=$(xml).find('CBSI_PRCSID').text();
			      if(AcctId != "")
			      {
				    var op=UI_getdata(OldPrcsid,$("#PrcsID").val(),"Existing Loans",ExAcct,$("#CBSI_BRANCH").val()+'|'+$("#CBSI_BRID").val()+'|'+$("#LogUsr").val(),"LSW_SGETExistApplicantDet")
			        location.reload(true); 
				     //$("#CBSI_EXISTLONID").val('C')
					//$("input[name='AGREEACTION']").attr('disabled',true)
			      }
			   }
         else
			{
				  //$("input[name='AGREEACTION']").attr('disabled',true)
				   //$("#COAI_SAMAPPLADDR").attr('disabled',true)
		           //$(".PremAddr").prop("disabled", true);	
			}
              /*if($("#DedupeAGIFTable").text().replace(/\s+/g, '') != "Nodataavailableintable" )
				  {
				    
				  }*/
			  $("#APFI_LONTYPE").text('Existing Loans')
			  $("#APFI_SUBLONTYPE").text('Normal Top-up')
		   }
	
    if($("input[name='ACTION']:checked").val()=="Yes")
	   {
    	
    	var FstNam='CBSI_CUSFISNAM'
	    var LstNam='CBSI_CUSLSTNAM'
		var Gender='CBSI_GENTER'
		var DOB='CBSI_DOB'
	    var MartStatus='CBSI_MARITSTUS'
		var Fathnam='CBSI_FATHRNAM';
    	var SpouseName="CBSI_SPOUSNAME"
		
		 
		  if($("#CBSI_CUSTYPE").val() == "Non-Individual")
		     {
			      var Addr1='CADI_ORGADDRLINI';
				  var Addr2='CADI_ORGADDRLINII';
				  var pin='CADI_ORGPINCODE';
				  var city='CADI_ORGCITY';
				  var state='CADI_ORGSTATE';
			 }
			else
			{				
		var Addr1='CADI_ADDRLINI';
		var Addr2='CADI_ADDRLINII';
	    var pin='CADI_PINCODE';
		var city='CADI_CITY';
		var state='CADI_STATE';
			}

   var FirstName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[0]).text()
   var LastName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[1]).text()
   var Gend=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[2]).text()
   var MarStatus=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[3]).text()
   var DOBVal=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[4]).text()
   var FatherName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[5]).text()
   
   var AddrOne=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[8]).text()
   var AddrTwo=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[9]).text()
   var Pincode=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[10]).text()
   var CityVal=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[11]).text()
   var SatetVal=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[12]).text()
   
        if($("#CBSI_CUSTYPE").val()=="Non-Individual")
	     {
		   $("#"+FstNam).val(FirstName+' '+LastName)
	     }
	     else
	     {
            if(FirstName!="")
			{
	    	  $("#"+FstNam).val(FirstName);
			}
			
			if(LastName!="")
			{
	    	  $("#"+LstNam).val(LastName);
			}
			
		   
	      }
			 
			if(Gend != "")
			{
			 $("#"+Gender).val(Gend);
			 $('[name='+Gender+'][value="'+Gend+'"]').prop('checked', true);
			}
			
			if(FatherName != "")
			{ 
		      $("#"+Fathnam).val(FatherName);
			}
	    	 
			if(MarStatus != "")
			{
			  $("#"+MartStatus).val(MarStatus);
	    	  $("#"+MartStatus).material_select();
			}
	    	 
	    	if(DOBVal != "")
			{
			  $("#"+DOB).val(DOBVal);
			}
			
	    	 if($("#CBSI_CONSTITUTION").val()=="Proprietorship" || $("#CBSI_CONSTITUTION").val()=="Society" || $("#CBSI_CONSTITUTION").val()=="Trustee")
			 {
				 $("#"+FstNam).attr('disabled',false);
			 }
			 else
			 {
			  $("#"+FstNam).attr('disabled',true);
  			  $("#"+LstNam).attr('disabled',true);
			 }
	    	 
	    	 $("#"+Fathnam).attr('disabled',false)
	    	 $("#"+DOB).attr('disabled',false)
	    	 
	     if($("#"+DOB).val() != "")
 		 {
 		   var dob=$("#"+DOB).val()
            var res = dob.split("/");
            var day = res[0];
           var month = res[1];
           var year = res[2];
           dob=(month+'-'+day+'-'+year)
           dob = new Date(dob);
           var today = new Date();
           var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
         
           $("#CBSI_AGE").val(age);
 		 }
     if($("#CBSI_AGE").val() != "")
       {
     	$("#CBSI_AGE").next().addClass("active")
       }
	   
	   if(AddrOne!="")
			{
	    	  $("#"+Addr1).val(AddrOne);
			  $("#"+Addr1).next().addClass("active");
			}
			if(AddrTwo!="")
			{
	    	  $("#"+Addr2).val(AddrTwo);
			  $("#"+Addr2).next().addClass("active");
			}
			if(Pincode!="")
			{
	    	  $("#"+pin).val(Pincode);
			  $("#"+pin).next().addClass("active");
			}
			if(CityVal!="")
			{
	    	  $("#"+city).val(CityVal);
			  $("#"+city).next().addClass("active");
			}
			if(SatetVal!="")
			{
	    	  $("#"+state).val(SatetVal);
			  $("#"+state).next().addClass("active");
			}
	    	 
          if($("#"+Fathnam).val() != "")
     	    {
     	      $("#"+Fathnam).next().addClass('active');
			  $("#CBSI_FETCHFATHNAME").val('');
	    	  $("#"+Fathnam).attr('disabled',false)
     	   }
	     if( $("#"+FstNam).val() != "")
 		   {
	    	 $("#"+FstNam).next().addClass('active');
			 $("#CBSI_FETCHFSTNAME").val('');
	    	 //$("#"+FstNam).attr('disabled',true)
 		   }
	     if($("#"+LstNam).val() != "")
 		   { 
	    	 $("#"+LstNam).next().addClass('active');
			 $("#CBSI_FETCHLSTNAME").val('');
	    	 //$("#"+LstNam).attr('disabled',true)
 		   }
	    if($("#"+MartStatus).val() == "Married")
 		   {
	    	 $("#"+SpouseName).attr('disabled',false)
			 $("#"+SpouseName).addClass('CBSIMndtry');
			 $("#"+SpouseName).next().find(".MndtryAstr").html("*");
 		 }
	    else
	     {
			$("#"+SpouseName).val('');
	    	$("#"+SpouseName).attr('disabled',true)
			$("#"+SpouseName).removeClass('CBSIMndtry');
			$("#"+SpouseName).next().find(".MndtryAstr").html("");
	     }
	    
	    if( $("#"+DOB).val() != "")
 		 {
		    $("#CBSI_FETCHDOBNAME").val('')
	    	$("#"+DOB).next().addClass('active');
	    	$("#"+DOB).attr('disabled',false)
 		 }
	 }
}
else
	{
		  var FstNam='CBSI_CUSFISNAM'
	      var LstNam='CBSI_CUSLSTNAM'
	      var Gender='CBSI_GENTER'
	      var DOB='CBSI_DOB'
	      var MartStatus='CBSI_MARITSTUS'
	    	  
	      var Mob='CADI_MOBNOI';
		  var Fathnam='CBSI_FATHRNAM';
		  
		  if($("#CBSI_CUSTYPE").val() == "Non-Individual")
		     {
			      var Addr1='CADI_ORGADDRLINI';
				  var Addr2='CADI_ORGADDRLINII';
				  var pin='CADI_ORGPINCODE';
				  var city='CADI_ORGCITY';
				  var state='CADI_ORGSTATE';
			 }
		  else
		  {
			  
		var Addr1='CADI_ADDRLINI';
		var Addr2='CADI_ADDRLINII';
	    var pin='CADI_PINCODE';
		var city='CADI_CITY';
		var state='CADI_STATE';
		
		  }

		        if($(this).attr("data-form")=="Contact Details" || $(this).attr("data-form")=="Organisation Details")
		         {
				   if($("input[name='MOBNO']:checked").val()=="Yes")
				   {
					  var MobNum=$($("input[name='MOBNO']:checked").closest('tbody tr').find('td')[0]).text()
					  $("#"+Mob).val(MobNum);
					  
					  if( $("#"+Mob).val() != "")
			 		    {
				    	   $("#"+Mob).next().addClass('active');
				    	   //$("#"+Mob).attr('disabled',true)
			 		    }
				   }
           if($("input[name='ADDRACTION']:checked").val()=="Yes")
		    {
		   if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Residence Address")
			   {
			      var Addr1='CADI_ADDRLINI';
				  var Addr2='CADI_ADDRLINII';
				  var pin='CADI_PINCODE';
				  var city='CADI_CITY';
				  var state='CADI_STATE';
				  
				  var AddrIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[0]).text()
				  var AddrIIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[1]).text()
			      var PINCODE=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[2]).text()
		          var CITYVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[3]).text()
		          var STATEVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[4]).text()
				  
		             $("#"+Addr1).val(AddrIVal);
			    	 $("#"+Addr2).val(AddrIIVal);
			    	 $("#"+pin).val(PINCODE);
			    	 $("#"+city).val(CITYVAL);
			    	 $("#"+state).val(STATEVAL);
			    	if( $("#"+Addr1).val() != "")
		    		 {
			    	 $("#"+Addr1).next().addClass('active');
			    	 //$("#"+Addr1).attr('disabled',true)
		    		 }
			    	 if( $("#"+Addr2).val() != "")
		    		 {
			    	 $("#"+Addr2).next().addClass('active');
			    	// $("#"+Addr2).attr('disabled',true)
		    		 }
			    	 if( $("#"+pin).val() != "")
		    		 {
			    	 $("#"+pin).next().addClass('active');
			    	// $("#"+pin).attr('disabled',true)
		    		 }
			    	 if( $("#"+city).val() != "")
		    		 {
			    	 $("#"+city).next().addClass('active');
			    	 //$("#"+city).attr('disabled',true)
		    		 }
			    	 if( $("#"+state).val() != "")
		    		 {
			    	 $("#"+state).next().addClass('active');
			    	// $("#"+state).attr('disabled',true)
		    		 }
			    	    
			   }
		   else if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Permanent Address")
		      {
			      var Addr1='CADI_PREMADDRLINI';
				  var Addr2='CADI_PERMADDRLINII';
				  var pin='CADI_PERMPINCODE';
				  var city='CADI_PERMCITY';
				  var state='CADI_PERMSTATE';
				  
				  var AddrIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[0]).text()
				  var AddrIIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[1]).text()
			      var PINCODE=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[2]).text()
		          var CITYVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[3]).text()
		          var STATEVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[4]).text()
				  
		             $("#"+Addr1).val(AddrIVal);
			    	 $("#"+Addr2).val(AddrIIVal);
			    	 $("#"+pin).val(PINCODE);
			    	 $("#"+city).val(CITYVAL);
			    	 $("#"+state).val(STATEVAL);
			    	 if( $("#"+Addr1).val() != "")
		    		 {
			    	 $("#"+Addr1).next().addClass('active');
			    	// $("#"+Addr1).attr('disabled',true)
		    		 }
			    	 if( $("#"+Addr2).val() != "")
		    		 {
			    	 $("#"+Addr2).next().addClass('active');
			    	 //$("#"+Addr2).attr('disabled',true)
		    		 }
			    	 if( $("#"+pin).val() != "")
		    		 {
			    	 $("#"+pin).next().addClass('active');
			    	// $("#"+pin).attr('disabled',true)
		    		 }
			    	 if( $("#"+city).val() != "")
		    		 {
			    	 $("#"+city).next().addClass('active');
			    	 //$("#"+city).attr('disabled',true)
		    		 }
			    	 if( $("#"+state).val() != "")
		    		 {
			    	 $("#"+state).next().addClass('active');
			    	// $("#"+state).attr('disabled',true)
		    		 }
		      }
		   if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Office Address")
		   { 
		     if($("#CBSI_CUSTYPE").val() == "Non-Individual")
		        {
			      var Addr1='CADI_ORGADDRLINI';
				  var Addr2='CADI_ORGADDRLINII';
				  var pin='CADI_ORGPINCODE';
				  var city='CADI_ORGCITY';
				  var state='CADI_ORGSTATE';
				  
				  var AddrIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[0]).text()
				  var AddrIIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[1]).text()
			      var PINCODE=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[2]).text()
		          var CITYVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[3]).text()
		          var STATEVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[4]).text()
				  
		             $("#"+Addr1).val(AddrIVal);
			    	 $("#"+Addr2).val(AddrIIVal);
			    	 $("#"+pin).val(PINCODE);
			    	 $("#"+city).val(CITYVAL);
			    	 $("#"+state).val(STATEVAL);
					 if( $("#"+Addr1).val() != "")
		    		 {
			    	 $("#"+Addr1).next().addClass('active');
			    	// $("#"+Addr1).attr('disabled',true)
		    		 }
			    	 if( $("#"+Addr2).val() != "")
		    		 {
			    	 $("#"+Addr2).next().addClass('active');
			    	 //$("#"+Addr2).attr('disabled',true)
		    		 }
			    	 if( $("#"+pin).val() != "")
		    		 {
			    	 $("#"+pin).next().addClass('active');
			    	// $("#"+pin).attr('disabled',true)
		    		 }
			    	 if( $("#"+city).val() != "")
		    		 {
			    	 $("#"+city).next().addClass('active');
			    	 //$("#"+city).attr('disabled',true)
		    		 }
			    	 if( $("#"+state).val() != "")
		    		 {
			    	 $("#"+state).next().addClass('active');
			    	// $("#"+state).attr('disabled',true)
		    		 }
		        }
		     }
		   }
		  }
		 else if($(this).attr("data-form")=="Employment Details")
			{
		     if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Office Address")
			   {
			      var Addr1='CEMI_ADDRLINEI1';
				  var Addr2='CEMI_ADDRLINEII1';
				  var pin='CEMI_PINCODE1';
				  var city='CEMI_CITY1';
				  var state='CEMI_STATE1';
				  
				  var AddrIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[0]).text()
				  var AddrIIVal=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[1]).text()
			      var PINCODE=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[2]).text()
		          var CITYVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[3]).text()
		          var STATEVAL=$($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[4]).text()
				  
		             $("#"+Addr1).val(AddrIVal);
			    	 $("#"+Addr2).val(AddrIIVal);
			    	 $("#"+pin).val(PINCODE);
			    	 $("#"+city).val(CITYVAL);
			    	 $("#"+state).val(STATEVAL);
					
			    	 if( $("#"+Addr1).val() != "")
		    		 {
			    	 $("#"+Addr1).next().addClass('active');
			    	// $("#"+Addr1).attr('disabled',true)
		    		 }
			    	 if( $("#"+Addr2).val() != "")
		    		 {
			    	 $("#"+Addr2).next().addClass('active');
			    	 //$("#"+Addr2).attr('disabled',true)
		    		 }
			    	 if( $("#"+pin).val() != "")
		    		 {
			    	 $("#"+pin).next().addClass('active');
			    	// $("#"+pin).attr('disabled',true)
		    		 }
			    	 if( $("#"+city).val() != "")
		    		 {
			    	 $("#"+city).next().addClass('active');
			    	 //$("#"+city).attr('disabled',true)
		    		 }
			    	 if( $("#"+state).val() != "")
		    		 {
			    	 $("#"+state).next().addClass('active');
			    	 //$("#"+state).attr('disabled',true)
		    		 }
					 
			   }
		     }
		 else
			 {
			 if($("input[name='ACTION']:checked").val()=="Yes")
			   {
			  var FirstName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[0]).text()
		      var LastName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[1]).text()
		      var Gend=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[2]).text()
	          var MarStatus=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[3]).text()
	          var DOBVal=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[4]).text()
	          var FatherName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[5]).text()
	          
	var AddrOne=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[8]).text();
    var AddrTwo=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[9]).text();
    var Pincode=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[10]).text();
    var CityVal=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[11]).text();
    var SatetVal=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[12]).text();
   
			   if($("#CBSI_CUSTYPE").val()=="Non-Individual")
	             {
		            $("#"+FstNam).val(FirstName+' '+LastName)
	             }
	          else
	             {
           if(FirstName!="")
			{
	    	  $("#"+FstNam).val(FirstName);
		    }
			
			if(FirstName!="")
			{
	    	   $("#"+LstNam).val(LastName);
			}

			$("#"+Gender).val(Gend);
			$("#"+Fathnam).val(FatherName);
			$('[name='+Gender+'][value="'+Gend+'"]').prop('checked', true);
			$("#"+MartStatus).val(MarStatus);
			$("#"+MartStatus).material_select();
			$("#"+DOB).val(DOBVal);
			
			 if($("#"+DOB).val() != "")
		    		 {
		    		   var dob=$("#"+DOB).val()
		               var res = dob.split("/");
		               var day = res[0];
		              var month = res[1];
		              var year = res[2];
		              dob=(month+'-'+day+'-'+year)
		              dob = new Date(dob);
		              var today = new Date();
		              var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
		            
		              $("#CBSI_AGE").val(age);
		    		 }
	            if($("#CBSI_AGE").val() != "")
	              {
	            	$("#CBSI_AGE").next().addClass("active")
	              }
	             }
				 
			if(AddrOne!="")
			{
	    	  $("#"+Addr1).val(AddrOne);
			  $("#"+Addr1).next().addClass("active");
			}
			if(AddrTwo!="")
			{
	    	  $("#"+Addr2).val(AddrTwo);
			  $("#"+Addr2).next().addClass("active");
			}
			if(Pincode!="")
			{
	    	  $("#"+pin).val(Pincode);
			  $("#"+pin).next().addClass("active");
			}
			if(CityVal!="")
			{
	    	  $("#"+city).val(CityVal);
			  $("#"+city).next().addClass("active");
			}
			if(SatetVal!="")
			{
	    	  $("#"+state).val(SatetVal);
			  $("#"+state).next().addClass("active");
			}  
			    	 
			    	
			if($("#CBSI_CONSTITUTION").val()=="Proprietorship" || $("#CBSI_CONSTITUTION").val()=="Society" || $("#CBSI_CONSTITUTION").val()=="Trustee")
			 {
				 $("#"+FstNam).attr('disabled',false);
			 }
			 else
			 {
			   $("#"+FstNam).attr('disabled',true);
  			   $("#"+LstNam).attr('disabled',true);
			 }
					
			    	 $("#"+Fathnam).attr('disabled',false)
			    	 $("#"+DOB).attr('disabled',false)
			    	 
	               if($("#"+Fathnam).val() != "")
	            	{
	            	  $("#"+Fathnam).next().addClass('active');
					  $("#CBSI_FETCHFATHNAME").val('');
			    	  $("#"+Fathnam).attr('disabled',false)
	            	}
			    	if( $("#"+FstNam).val() != "")
		    		 {
			    	 $("#"+FstNam).next().addClass('active');
					 $("#CBSI_FETCHFSTNAME").val('');
			    	// $("#"+FstNam).attr('disabled',false)
		    		 }
			    	 if( $("#"+LstNam).val() != "")
		    		 {
			    	  $("#"+LstNam).next().addClass('active');
					  $("#CBSI_FETCHLSTNAME").val('');
			    	 // $("#"+LstNam).attr('disabled',false)
		    		 }
			    	 /*if( $("#"+Gender).val() != "")
		    		 {
			    	 $("#"+Gender).next().addClass('active');
			    	 $("#"+Gender).attr('disabled',true)
		    		 }*/
			    	 if( $("#"+DOB).val() != "")
		    		 {
					   $("#CBSI_FETCHDOBNAME").val('')
			    	   $("#"+DOB).next().addClass('active');
			    	   $("#"+DOB).attr('disabled',false)
		    		 }
			   }
			  
			 }
			}
			
			if(personalinfocusid != "")
			{
	         UI_getdata($("#PrcsID").val(),$("#CBSI_CUSID").val(),personalinfocusid,"","","LSW_SPUSHPOSIDEXTOCUSID_1");
			 $("#CBSI_CUSID").val(personalinfocusid);
			 $("#CADI_CUSID").val(personalinfocusid);
			 $("#Save1").click();
			 $("#Save2").click();
			 window.location.reload();
			}
			 $(".DedupeClose").click();		
	})
	$(document).on("click", ".DedupeGenCusID", function(){
		var chkyflg = "";
		var chkyflg_1 = "";
		if($($("#DedupeBIFTable").find(".tbodytr")[0]).find(".tbodytrtd").text() != "No data available in table")
		{
			for(var i=0;i<$("#DedupeBIFTable").find(".tbodytr").length;i++)
			{
				if($($($("#DedupeBIFTable").find(".tbodytr")[i]).find(".tbodytrtd")[20]).text() == "Y")
				{
					chkyflg_1 = true;
					if($($($("#DedupeBIFTable").find(".tbodytr")[i]).find(".tbodytrtd")[13]).find("input[type=radio]").is(':checked') && chkyflg == "")
					{
						chkyflg = true;
					}
				}
			}
		}
		//if((chkyflg == true && chkyflg_1 == true) || chkyflg_1 == "")
		if(chkyflg_1 == "")
		{
			PosdxGenCusID('CBSI_CUSID','CBSI_CUSTYPE','CBSI_DEDUPEVERIFY','Applicant','CBSI_EXISTLONID','CBSI_CUSFISNAM');
		}
		else
		{
			alert('Y matches found but the customer id was not selected, Kindly chosen any of the Y matched customer to proceed further');
			return;
		}
	});
	$(document).on("click", ".AddKYC", function(){
		
		if($("#CBSI_CUSID").val()=="")
		{
		$("#Save1").click();
		}
	});
		$(document).on("click", ".VKYC", function(){
		var CusID=$("#CBSI_CUSID").val()
		VkycPopuUp(CusID);
		$("#BTNVKYCGRD").click();
	});
	
	
	//$('.FormSave').on('click', function() {
	$(document).on("click", ".FormSave", function(){
		var CusID=$("#CBSI_CUSID").val()
	      $("#DMY6").val(CusID); 
		//var FormXML =	submitdata("CBSIDBfields");
		// Mandatory Check Start
					
		var html=$(this).closest('.DYNROW')
		if($(this).text() == "Save & Next")
			{			
			var FormMndryChk = $(this).attr("data-for")

			var prfx = $(this).attr("data-aria").split("|")[1];
			var MndtryChk="";
			var DocMndtryChk="";
			if(prfx!="CEMI" )
			{
				if($(this).closest('.DYNROW').parent().parent().attr("id")=="collapseThree3"){
					MndtryChk = ChkMandatoryFlds_V1(prfx+"Mndtry",html);
				}	
				else
				{
					MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
				 
				 
				 //DocMndtryChk=ChkMandatoryFlds_Doc("DOCMndtry")
				}
			}
			 

			if(MndtryChk == "Mandatory")
				{
				 alert("Fill the Mandatory Fields / Document(s)");
				 return false;
				}
			else
				{
				  var DocMndtry=ChkMandatoryFlds_Doc("DOCMndtry")
				  
				  if(DocMndtry != "")
					  {
					    alert('Upload '+ DocMndtry);
					    return false;
					  }
				 }
			
			if(FormMndryChk=="SAVENEXT")	
			  {
			  MndtryChk = ChkMandatoryFlds("CBSIMndtry");
			  if(MndtryChk == "Mandatory")
				  {
				  alert("Fill the  Personal Info");
					return false;
                  }
			   if(MndtryChk == "")
				  {
			  MndtryChk = ChkMandatoryFlds("CADIMndtry");
				  }
			   if(MndtryChk == "Mandatory")
			       {
					  alert("Fill the  Contact Details");
						return false;
                    }
                }	
			    if($("#KARZASTATUS").val()=="Active")
				{
			    if($("#CBSI_PANVERIFY").val()=="" || $("#CBSI_PANVERIFY").val()=="Failed")
					{
					  alert("Verify your PAN Number");
					  return false;
					}
				}
			if($("#CBSI_PROFILE").val() == "" && $("#CBSI_CUSTYPE").val() == "Individual")	
			{
				alert("Select Profile and then Submit");
				return false;
			}
			
			/*if($("#CBSI_AADHAR").val()=="XXXXXXXX")
			{
				alert("Aadhar is Mandatory");
				return false;
			}
			else if($("#CBSI_AADHAR").val() != "XXXXXXXX" && $("#CBSI_AADHAR").val() !="" && $("#CBSI_AADHARATTACHMENT").val()=="")
			{
				alert("Upload Aadhar's ID is Mandatory");
				return false;
			}
			*/
			var FormName=$(this).attr("data-form")
			if(FormName=="ContactDetails")
				{
			   if(($("#CBSI_CUSTYPE").val() == "Non-Individual") && ($("#CBSI_CONSTITUTION").val()!="Private Ltd"))
			   {
			   if ($("#CBSI_CONSTITUTION").val()!="Public Ltd")
			   {
			   if($("#CADI_MOBNOI").val()!="")
			     {
		         if($("#CADI_MOBIVERIFY").val() != "Verified")
		          {
			       alert("Verify your Mobile Number")
			       return false
		          }
			     }  
				
				 /*if($("#CADI_EMAILID").val()!="")
			     {
		         if($("#CADI_EMAILVERIFY").val() != "Verified")
		          {
			       alert("Verify your Email ID")
			       return false
		          }
			     }*/
				}
				}
				/* else if(($("#CBSI_CUSTYPE").val() == "Non-Individual") && ($("#CBSI_CONSTITUTION").val()!="Public Ltd "))
			   {
			   if($("#CADI_MOBNOI").val()!="")
			     {
		         if($("#CADI_MOBIVERIFY").val() != "Verified")
		          {
			       alert("Verify your Mobile Number")
			       return false
		          }
			     } 
				} */
				}
				else if(FormName=="EmployementDetails")
				{
				/*if($("#CADI_MOBNOI").val()!="")
			     {
		          if($("#CADI_MOBIVERIFY").val() != "Verified")
		           {
			        alert("Verify your Mobile Number In Contact Details")
			        return false;
		           }
			     }*/
				/* if($("#CBSI_CUSTYPE").val()=="Individual")
				 {
				    if($("#CADI_ADDRLINI").val()=="" || $("#CADI_PINCODE").val()=="" || $("#CADI_PREMADDRLINI").val()=="" || $("#CADI_PERMPINCODE").val()=="")
				      {
					    alert('Fill the Contact Details')
				      }
				 }
				 else
				 {
				    if($("#CADI_ORGPINCODE").val()=="" || $("#CADI_ORGADDRLINI").val()=="")
				      {
					     alert('Fill the Contact Details')
				      }
				 }*/
				if($("#KARZASTATUS").val()=="Active")
				{
				if($("#CBSI_PANVERIFY").val()=="" || $("#CBSI_PANVERIFY").val()=="Failed")
					{
					  alert("Verify your PAN Number");
					  return false;
					}
				}
				
				}
			if(FormName=="PersonalInfo")
			 {
	/* 	      if($("#CBSI_GSTNUM").val()!="")
		         {
	               	 if($("#KARZASTATUS").val()=="Active")
				       {
	                     if($("#CBSI_GSTVERIFY").val() != "Verified")
	                       {
		                      alert("Verify your GST Number")
		                       return false
	                       }
				       }
		        } */ 
		      if($("#CBSI_CUSPHOTO").val() == "" && $("#CBSI_CUSTYPE").val() == "Individual")
		         {
		             alert("Upload the photo")
		             return false
	             }
			  }
			}
			 
		    // Mandatory Check End
			// Customer Seq ID Gen Start
		//if($("#CBSI_CUSFISNAM").val() != "" && $("#CBSI_TITLE").val() != "" && $("#CBSI_PAN").val() != "")
		//{
			if($("#CBSI_CUSID").val() == "")
			{
			var CUSID = UI_getdata("CUS","","Yes","","","Sam_sGetCusSeqID");
			
			$("#CBSI_CUSID").val($(CUSID).find("Val1").text());
			$(".CBSI_CUSID").text($(CUSID).find("Val1").text());
			
		    }
			if($("#CBSI_APPLCNTNO").val() == "")
			{
			var APPLNO = UI_getdata("FileNo",$("#PrcsID").val(),"Yes","","","Sam_sGetLONApplSeqID");
			$("#CBSI_APPLCNTNO").val($(APPLNO).find("Val1").text());
			$("#APFI_APPLNO").text($(APPLNO).find("Val1").text());
		    }
			if($(html).find("[name=CEMI_EMPID]").val() == "")
			{
			var CUSID = UI_getdata("EMPID",$("#PrcsID").val(),"Yes",$("#CBSI_CUSID").val(),"","Sam_sGetLONApplSeqID");
			$(html).find("[name=CEMI_EMPID]").val('EA'+$(CUSID).find("Val1").text());
		//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
		    }
			
        $('.BankDetail2').find("[name=CGST_CUSID]").val($("#CBSI_CUSID").val())
		var GSTGRDDATA = TxtGridsubmitdata_V2("BankDetail2","CGST_","CBSI_","CGSTDBfields");
		AssignGridXmltoField("CBSI_GSTMULTI", GSTGRDDATA)
			
			
					
			if($("#CBSI_APPLCNTDATE").val() == "")
				{
                	$("#CBSI_APPLCNTDATE").val($("#DMY7").val().split("|")[1])
				}
			
		    	if($("#CBSI_BUSINESSDT").val() == "")
		    	{
				$("#CBSI_BUSINESSDT").val($("#DMY7").val().split("|")[2])
                }
		    	
		    	
			
			
			
			  if($("#CBSI_CUSID").val() != "" && $("#CBSI_PANVERIFY").val()=="Verified")
		    	 {
		    	   $('.ACCRDISB').removeClass('TABDSVLBL');
		    	 } 

				 
			// Customer Seq ID Gen End 
			//$("#LPDT_PROPERTYNAME").val($(".FormPageMultiTab li.active a div").text())
			
		
			
			
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			if($(this).closest('.DYNROW').parent().parent().attr("id")=="collapseThree3")
			{
			var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);
			
			if (CHKresult == "Fail")
				{
				alert("Submission Failed");
				return false;			
				}
			else
			{
				alert("Employment Details Saved Successfully")
			}
			}
			
			
		else{
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#CBSI_CUSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			   return false;			
			}
		}
	
			// Tab Header Change Start
			
			//$(".FormPageMultiTab li.active").attr("id",$("#CBSI_CUSID").val());
		    //$(".FormPageMultiTab li.active").attr("title",$("#CBSI_CUSID").val());
			$(".FormPageMultiTab li.active a div").text($("#CBSI_CUSID").val());
		
			// Tab Header Change End
			
		/*}
		else
		{
			if($("#CBSI_CUSTYPE").val() == "Individual")
			{
		      alert('Enter Customer PAN,Title,First Name And Last Name');
		      return false;
            }
			else
			{
				alert('Enter Customer PAN,Organisation name');
			    return false;	
        	}
		}*/ 

		if($(this).text() == "Save & Next")
		{
			
			var FormName=$(this).attr("data-form")
			
			if(FormName=="OrganisationDetails" || FormName=="EmployementDetails")
				{
			  var PRCSID = $("#PrcsID").val();
		      var CUSID=$("#CBSI_CUSID").val();
              var xml=UI_getdata($("#PrcsID").val(),$("#CBSI_CUSID").val(),'APPL',"","","LSW_SUPDDEDUPESTS")
			  
			/*$.ajax({
			    url: "/TPLSW/LMSCUS",
			    type: 'POST',
			    data: {PRCSID:PRCSID,CUSID:CusID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
			    async:false,
			   // dataType: 'json',
			   // contentType:'application/json',
			    
			    success: function(stm){        
			   // var obj = JSON.parse(JSON.stringify(stm))
			    	if (stm == "")
			    		{
			    		
			    		alert("Error Occured. Contant IT!!!");
			    		return;
			    		
			    		
			    		}
			    	
			    	else if (stm.split("|")[1] == "No Data")
		    			{
		    			
		    			alert("Error Occured. Contant IT!!!");
			    		return;
		    			
		    			}
			    	
			    	else if (stm.split("|")[1] == "Success")
			    		{
			    		//alert("Data Found");
		                     
			    		}
			
			},
			error: function(stm) {
				 //window.alert(LoadFrmXML("V0125"))
				alert("Error Occured. Contant IT!!!");
				   }
			});*/
			
		 }
			  NXTTAB(this);
		}
		});

$("#CusAdd").on('click', function() {
	
	var licount = $(".FormPageMultiTab li").length;
	var value = $(".FormPageMultiTab").attr('title');
	var Formactive = $(".FormPageTab").find("li.active").attr("id");		  
	var MainActive = $(".FormMainTabs").find("li.active").attr("id");
	
	var CusType=$("input[name=CoAppType]:checked").val();
	var MndtryChk = ChkMandatoryFlds("COAPMndtry");
	
	if(MndtryChk == "Mandatory")
		{
		alert("Fill the Mandatory Fields / Documents");
		return false;
		}
	
	var Constitution=$("#CoAppConsti").val();
	var CIN = $("#CoAppcin").val();
	
	var ExistAppNo=$("#ExsCusID").val();
	var Prcsid=$("#PrcsID").val();
	var ActivityID=$("#ActvID").val();
	var UserID=$("#LogUsr").val();
	var xml=UI_getdata(ExistAppNo,Prcsid,ActivityID,UserID,"","LSW_SGETCUSTOMERDETAILS")
	if($("#NextPageID").val() == "")
		{	
	 RedirectURL = window.location.origin+"/TPLSW/"+$(".FormPageTab").find("li.active").attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+"&PrMs8="+value+"|"+licount+"|"+"Add"+"&PrMs7="+CusType+"|"+Constitution+"|"+CIN;
	 $(location).attr('href',encodeURI(RedirectURL));
		}
	else
		{			
		
		  RedirectURL = window.location.origin+"/TPLSW/"+$("#NextPageID").val().split("|")[1]+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+$("#NextPageID").val().split("|")[0]+"&PrMs10="+MainActive+"&PrMs7="+CusType+"|"+Constitution+"|"+CIN;;
		  $(location).attr('href',encodeURI(RedirectURL));
		}
	
});
	
	LoadMultiData("",$("#PrcsID").val(),$("#CEMI_CUSID").val(),"BankDetail1","CEMIDBfields","LSW_SGETAPPLNTEMPDTL");
	CheckPan()
$("#BTNEMPMULTIDATA").on('click', function() {

	//LoadMultiData("",$("#PrcsID").val(),$("#CEMI_CUSID").val(),"BankDetail1","CEMIDBfields","LSW_SGETAPPLNTEMPDTL");
	$("input[name='CEMI_CUSID']" ).val($("#CBSI_CUSID").val());
	
	if($("#CBSI_FICOMPETED").val()=="Completed")
	 {
	 $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
	 $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFTYPE').attr('disabled',true)
     }
	else
	 {
	   $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFADDR').attr('disabled',false)
	   $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFTYPE').attr('disabled',false)
	 }
	var DATA=["BankDetail1|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var EMPDetails=DATA[j].split("|")[0];
	 var row = $("."+EMPDetails).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("."+EMPDetails).find(".DYNROW")[i];
	if($("#DMY5").val().split('|')[2]=="SendToCredit")
	{
	EmpNaturBusness(HTML,row);
	}
	
	$(HTML).find("input[name='CEMI_CUSID']" ).val($("#CBSI_CUSID").val())
	//CheckNegativeList (HTML,"");
	ChkLoad(HTML);
	//Cochk();
	//Udyamcheckorg();
	 }
	}
	 RmoveEmpFlds();
     
					   
	//$(".DedupeSmt").click();
});

 // Only for Proprietorship Start
 
 var Consitition=$("#CBSI_CONSTITUTION").val()
 
 if(Consitition=='Proprietorship' || Consitition=='Trustee' || Consitition=='Society')
 {
	 $("#CBSI_CUSFISNAM").attr('disabled',false);
 }
 
 //Only for Proprietorship End

});

$(document).on("click", ".KarzaSmt", function() {

      var FstNam=$(this).attr("data-aria").split("|")[0];
      var LstNam=$(this).attr("data-aria").split("|")[1];
      var FathName=$(this).attr("data-aria").split("|")[2];
      var DOB=$(this).attr("data-aria").split("|")[3];
      var ADDRI=$(this).attr("data-aria").split("|")[4];
      var ADDRII=$(this).attr("data-aria").split("|")[5];
      var GenderId=$(this).attr("data-aria").split("|")[6];
	  var VOTERIDDOCCHK=$(this).attr("data-aria").split("|")[7];
	  var AADHARDOCCHK=$(this).attr("data-aria").split("|")[8];
	  var DLDOCCHK=$(this).attr("data-aria").split("|")[9];
	  var PASSPORTDOCCHK=$(this).attr("data-aria").split("|")[10];
	  var PANDOCCHK=$(this).attr("data-aria").split("|")[11];
      var PROOFSELECTED=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[8]).find('input').val();
	  var KYCSELECTED=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[0]).text();
	  
      var name=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[1]).text()
      var DOBVal=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[2]).text()
      var Gender=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[3]).text()
      var FatherName=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[4]).text()
      var Address=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[5]).text()

      var Data=name.replace(" ","|");
      var FirstName=Data.split("|")[0];
	  var LastName=Data.split("|")[1];
       
	   if((PROOFSELECTED!=$("#"+VOTERIDDOCCHK).val())||(PROOFSELECTED!=$("#"+AADHARDOCCHK).val())||(PROOFSELECTED!=$("#"+DLDOCCHK).val())||(PROOFSELECTED!=$("#"+PASSPORTDOCCHK).val(PROOFSELECTED))||(PROOFSELECTED!=$("#"+PANDOCCHK).val(PROOFSELECTED)))
	   {
		  if(KYCSELECTED=="VOTER ID DIRECT" || KYCSELECTED=="VOTER ID")
			{
			$("#"+VOTERIDDOCCHK).val(PROOFSELECTED);
			}
		  if(KYCSELECTED=="AADHAAR")
			{
			$("#"+AADHARDOCCHK).val(PROOFSELECTED);
			}
		  if(KYCSELECTED=="DRIVING LICENSE DIRECT" || KYCSELECTED=="DL")
			{
			$("#"+DLDOCCHK).val(PROOFSELECTED);
			}
	      if(KYCSELECTED=="PASSPORT DIRECT" || KYCSELECTED=="PASSPORT")
			{
			$("#"+PASSPORTDOCCHK).val(PROOFSELECTED);
			}
	      if(KYCSELECTED=="PAN DIRECT" || KYCSELECTED=="PAN")
			{
			$("#"+PANDOCCHK).val(PROOFSELECTED);
			}
	   }
	   else
	   {
	   alert(PROOFSELECTED+"is already selected");
	   return;
	   }
	   
		 if($("#CBSI_CUSTYPE").val()=='Non-Individual')
		 {	  
			var   FirstName=FirstName+' '+LastName
			 var LastName='' 
		 }
		 
		   if(FirstName != "")
		   {
			   $("#"+FstNam).val(FirstName);
		   }
		  if(LastName != undefined)
		   {
			 $("#"+LstNam).val(LastName); 
		   }
		 else
		   {
			if(FatherName != "")
			   {
				 $("#"+LstNam).val(FatherName);
			   }  
		   }
		   
		   if(FatherName != "")
		   {
			  $("#"+FathName).val(FatherName);
		   }
	    	
	    	if(DOBVal != "")
			{
			  $("#"+DOB).val(DOBVal);
			}
	    	
	    	 
	    	 if(Address != "")
	    		 {
	    		   var length=Address.split(',').length	    
		           var Event=Address.split(',').length%2
		    if(Event=="1")
		    	{
		    	  $("#"+ADDRI).val((Address.split(',')[0]))
		    	  $("#"+ADDRI).next().addClass("active")
		    	  $("#"+ADDRII).val((Address.split(',')[1]));
		 	      $("#"+ADDRII).next().addClass("active")
		    	}
		     else
		    	 {
		    	   $("#"+ADDRI).val((Address.split(',')[0]))
		    	   $("#"+ADDRI).next().addClass("active")
		    	   $("#"+ADDRII).val((Address.split(',')[1]));
		 	       $("#"+ADDRII).next().addClass("active")
		    	 }
	    		 } 
	    	 //AgeVal(DOB,'CBSI_AGE')
	    	 
	    	 if($("#"+DOB).val() != "")
	    		 {
	    		   var dob=$("#"+DOB).val()
	               var res = dob.split("/");
	               var day = res[0];
	              var month = res[1];
	              var year = res[2];
	              dob=(month+'-'+day+'-'+year)
	              dob = new Date(dob);
	              var today = new Date();
	              var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
	            
	              $("#CBSI_AGE").val(age);
	    		 }
            if($("#CBSI_AGE").val() != "")
              {
            	$("#CBSI_AGE").next().addClass("active")
              }
	         //$("#CBSI_AGE").val(age);    	 
	    	 if( $("#"+FstNam).val() != "")
    		 {
	    	 $("#"+FstNam).next().addClass('active');
	    	// $("#"+FstNam).attr('disabled',true)
	    	// $("#CBSI_FETCHFSTNAME").val('Selected')
    		 }
	    	 else
	    	 {
	    		 $("#"+FstNam).next().removeClass('active');
		    	 $("#"+FstNam).attr('disabled',false)
	    	 }
	    	 if( $("#"+LstNam).val() != "")
    		 {
	    	   $("#"+LstNam).next().addClass('active');
	    	  // $("#"+LstNam).attr('disabled',true)
	    	  // $("#CBSI_FETCHLSTNAME").val('Selected')
    		 }
	    	 else
	    	 {
	    	   $("#"+LstNam).next().removeClass('active');
		       $("#"+LstNam).attr('disabled',false)
	    	 }
	    	 if( $("#"+FathName).val() != "")
    		 {
	    	 $("#"+FathName).next().addClass('active');
	    	// $("#"+FathName).attr('disabled',true)
	    	// $("#CBSI_FETCHFATHNAME").val('Selected')
    		 }
	    	 else
	    	 {
	    		$("#"+FathName).next().removeClass('active');
		    	$("#"+FathName).attr('disabled',false) 
	    	 }
	    	 if( $("#"+DOB).val() != "")
    		 {
	    	 $("#"+DOB).next().addClass('active');
	    	// $("#"+DOB).attr('disabled',true)
	    	// $("#CBSI_FETCHDOBNAME").val('Selected')
    		 }
	    	 else
	    	 {
	    		 $("#"+DOB).next().removeClass('active');
		    	 $("#"+DOB).attr('disabled',false); 
	    	 }
	    	 
	    	 $('[name='+GenderId+'][value="'+Gender+'"]').prop('checked', true);
	    	 
         $(".KarzaPopup").click();
})

$(document).on("click", ".GstKarzaSmt", function() {

      var GST=$(this).attr("data-aria").split("|")[0];
      var GSTNO=$($("input[name='GSTACTION']:checked").closest('tbody tr').find('td')[0]).text()

	 $("#"+GST).val(GSTNO);

	    	 if( $("#"+GST).val() != "")
    		 {
	    	 $("#"+GST).next().addClass('active');
	    	 $("#"+GST).attr('disabled',true)
    		 }
         $(".KarzaPopup").click();
		 SavePersInfo();
		 
		 $("#CBSI_GSTVERIFY").val('');
		 $(".CBSI_GSTNUM").text('Verify')
		 $(".CBSI_GSTNUM").addClass("btn-yelInplain");
		 $(".CBSI_GSTNUM").removeClass("btn-GrnInplain");
		 $(".CBSI_GSTNUM").removeClass("btn-RedInplain");
})

$(document).on("click", ".DELETEUPLDDTL" , function() {
		 if(confirm('Are you sure to remove the attachment') == true)
		 {
			 var FLD = $(this).attr("data-hide");
			 var FLDSHOW = $(this).attr("data-show");
			 $(this).closest("."+FLD).hide();
			 $($(this).closest(".row").find("div")[0]).find("#"+FLD).val('');
			 $($(this).closest(".row").find("div")[0]).find("span").text('');
			 $($(this).closest(".row").find("#"+FLDSHOW)).show();
			 $($(this).closest(".row").find("#"+FLDSHOW)).append('<span class="name1">Upload</span>');
			 $($(this).closest(".row").find("#"+FLDSHOW)).find('input[type=file]').removeAttr("disabled");
		 }
})