$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
	
	
	$("#COEI_PRCSID").attr("value",$("#PrcsID").val());
	$("#COGS_PRCSID").attr("value",$("#PrcsID").val());
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#COBI_CUSID").val($(".FormPageMultiTab li.active").attr("id"))
		}
	if ($("#COBI_CUSID").val() != "")
		{
	$(".COBI_CUSID").text($("#COBI_CUSID").val());
		}
	
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
	
	
	var Orgtbl = $("#headingFour4 a").attr("data-aria").split("|")[0];	
	var Orgprfx = $("#headingFour4 a").attr("data-aria").split("|")[1];
	var OrgDATA = $("#headingFour4 a").attr("data-aria").split("|")[2];
	var OrgCusID =$("#headingFour4 a").attr("data-aria").split("|")[2];
	var OrgCusID1 =$("#headingFour4 a").attr("data-aria").split("|")[3];
    //End
	
	
	
	
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
		var xml=UI_getdata("","","","","","LSW_SGETNATUR")
	
	$("#COOA_INDUSCATRGORY").html("")
	$("#COOA_INDUSCATRGORY").append($(xml).find("Industry").html());
	$("#COOA_INDUSCATRGORY").material_select();
	$("#COEI_INDUSCATRGORY").html("")
	$("#COEI_INDUSCATRGORY").append($(xml).find("Industry").html());
	
	GetSec();
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	// Added Since Loading Issues Date - 28/05/2020 Start
	
	if($("#"+CICusID1).length>0)
	  {
		$("#"+CICusID).val($("#"+CICusID1).val())
	  }
	if($("#"+OrgCusID1).length>0)
	  {
		$("#"+OrgCusID).val($("#"+OrgCusID1).val())
	  }
	if  (CIDATA != "")
	{
		CIDATA = $("#"+CIDATA).val()+"|" + CIDATA;
	}
	
	$(".ImgScore").text('Image Score : '+$("#COBI_IMGSCORE").val());
	FormDataFromDB(CItbl, CIprfx + "_", CIprfx+"DBfields", CIDATA);
	
	LoadMultiData("",$("#PrcsID").val(),$("#COBI_CUSID").val(),"BankDetail2","COGSDBfields","LSW_SCOSUSGSTGRDDATA");
	if($("#COBI_AADHARTYPE").val()=="ZIP File Verification")
     {
      $(".AUPLDXMLII").hide();
      }
	FormDataFromDB(Orgtbl, Orgprfx + "_", Orgprfx+"DBfields", OrgDATA);
	// End
	//if(($("#COBI_CUSTYPE").val() == "Non-Individual") && ($("#COBI_CONSTITUTION").val()=="Private Ltd"))
	if(($("#COBI_CUSTYPE").val() == "Non-Individual") && (($("#COBI_CONSTITUTION").val()=="Private Ltd")||($("#COBI_CONSTITUTION").val()=="Public Ltd ")))
    {
      $("#COAI_ORGLNDLINENO").addClass('COAIMndtry');
	  $("#COAI_ORGSTDC").addClass('COAIMndtry');
	  //$("#COAI_MOBNOI").removeClass('COAIMndtry');
    }
    else
    {
     $("#COAI_ORGLNDLINENO").removeClass('COAIMndtry');
	 $("#COAI_ORGSTDC").removeClass('COAIMndtry');
	 //$("#COAI_MOBNOI").addClass('COAIMndtry');
    }
	
	if($("#DMY7").val().split("|")[8]=="HE02")
	{
		$(".BTNDedupe").hide();
	}
	Chkdirect();
	CheckNumber();
	CoCheckborrower();
	Chkudyam();
	OtherKYC();
	var xml=UI_getdata("Karza",$("#VERTICAL").val(),"","","","LSW_SCHKINTGSTATUS")
	var data=$(xml).find('STATUS').text()
	
	$("#KARZASTATUS").val(data)
	
	if(data=="Inactive")
	{
		$(".INTDSBV").attr("disabled",true);
		$("#COOA_INCCONSID").attr('disabled',false);
		$("#COEI_INCCONSID1").attr('disabled',false);
	}
	else
	{
		$(".INTDSBV").attr("disabled",false);
	}
	
       if($("#DMY7").val().split("|")[0]=="Existing Loans" && $("#COBI_FILESTATUS").val()=="C")
		{
		$("#COBI_PROFILE").attr('disabled',true) 
        }
		
		 if($("#DMY7").val().split("|")[0]=="Re-Punch" && $("#COBI_FILESTATUS").val()=="C")
		{
		$("#COBI_PROFILE").attr('disabled',true) 
        }
		
		
		 if($("#DMY5").val().split("|")[2]!= "PreLogin"||$("#DMY7").val().split("|")[0]=="Existing Loans"||$("#DMY7").val().split("|")[0]=="Re-Punch")
		{
          $(".SWAPTXT").hide()
		}
		
		
		 if($("#COBI_CUSTYPE").val()== "Individual"||$("#PrMs7").val().split("|")[0]=="Individual")
			{
				CheckMsme();
	          $(".SWAPTXT").hide()
			 
			  
			}
			
		
	
	$("#COEI_CUSID").attr("value",$("#"+CusID).val());
	


	//CheckLoanType('COBI','COAI','COEI','COOA');
	//CheckRelation();
	FindConstDD();
	CheckDudupe('COBI_DEDUPEVERIFY');
	CheckRelatOther();
	CHKApplIndiv();
	ApplicantTitleDisabl();
	CheckNegativeList();
	//residentaddr();
	CheckUploadMndtry();
	Chkqualify('','','','Load');
	//getSameaApplAddr();
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
	$("#headingOne1 a").attr("data-load","Yes");
	
	//New Applicant Details Start
	
	if($("#PrMs7").val().split("|")[0] != "")
		{
		$("#COBI_CUSTYPE").val($("#PrMs7").val().split("|")[0]);
		$("#COBI_CONSTITUTION").val($("#PrMs7").val().split("|")[1]);
		$("#COBI_CIN").val($("#PrMs7").val().split("|")[2]);	
		}
	CheckAppltype();
	CheckMarStatus();
	ApplicantTitleDisabl();
	CHKAPPResidType();
	
	CheckPanORNot();
	CheckFieldDisb();
	RelationShipDropdown();
	checkPAN();
    NotIndiPan();
          //CheckCIN();
	AddZoom();
	//CheckGSTorNot();
	CheckProfile("Load");
	LoadVwImage('COBI_');
	
   if($("#COBI_MSKAADHARATTACHMENT").val()!="")
	{
	  $(".AadharMskImg").show();
	  $(".AadharViewImg").hide();
	  $("#COBI_AADHAR").attr("disabled",true);
    }
	if($("#COBI_MSKAADHARATTACHMENTII").val()!="")
	  {
	   $(".AadharMskImgII").show();
	   $(".AadharViewImgII").hide();
	   $("#COBI_AADHAR").attr("disabled",true);
      }
	
	if($("#COBI_UBVERIFYTYPE").val()=="Mobile Authentication with OTP")
	{
		$(".UtilityLable").text("Service Number");
	}
	
	if($("#COBI_CUSTYPE").val()=='Non-Individual')
		 {	  
			  $("#COBI_CUSFISNAM").removeClass('IsUpprCse');
			  $("#COBI_CUSFISNAM").removeClass('IsAlphaFields');
			  $("#COBI_CUSFISNAM").addClass('NONumber');
			  
			if($("#COBI_CONSTITUTION").val()=="Partnership firms")
			{
				
				$(".PARTTYPE").show();
				$("#COBI_PARTNERSHPTY").addClass('CBSIMndtry');
				$("#COBI_PARTNERSHPTY").parent().next().find(".MndtryAstr").html("*");
			}
			else
			{
			
				$(".PARTTYPE").hide(); 
			}
		 }
		 
	
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
	
	
		var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#COBI_CUSID").val(),"","","","LSW_SGETFISTATUS")
			
			 if($(xmlSTATUS).find('RESIDENCESTA').text()=="Completed")
				 {
				   $("#COBI_RESCOMPETED").val($(xmlSTATUS).find('RESIDENCESTA').text())
				  $('.RESSTAT').attr('disabled',true)
		         }
			 
		      if($(xmlSTATUS).find('OFFICESTAT').text()=="Completed")
		    	 {
		    	 // $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
		    		$("#COBI_FICOMPETED").val($(xmlSTATUS).find('OFFICESTAT').text())
		    		$('.ORGADD').attr('disabled',true)
		          }
			 	

	
	$(document).on("click", ".CusTypeDetl" , function() {
		$('input[name="CoAppType"]').prop('checked', false);	
		$(".Constitution").hide();
		$(".CIN").hide();
		$("#CoAppConsti").val('');
		$('#CoAppConsti').material_select("destroy");	
		$('#CoAppConsti').material_select();
    });
	
	
	// Contact Details Data Start
	
	$(document).on("click", ".CONLOAD", function()
	 {
		/*if($("#COBI_GSTNUM").val() != "")
		{
		  VerifyGST('COBI_GSTNUM','COBI_GSTVERIFY','COBI_CUSTYPE','COAI_ADDRLINI','COAI_ADDRLINII')//$(".CBSI_GSTNUM").click();
		}*/
		if($("#"+CICusID1).length>0)
	  {
		$("#"+CICusID).val($("#"+CICusID1).val())
	  }
		Loadresidentaddr()
		
		ONLOADCOAPPResidence();
		if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Co-Applicant Residence Address")
		{
		     LoadSameCoAppresiaddr()
		}
		else if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Applicant Permanent Address")
		{
		    LoadgetSameaApplAddr()
		}
	   getSameAs('Load');
	   
	   var ADxml=UI_getdata($("#PrcsID").val(),$("#COBI_CUSID").val(),"","","","LSW_SGETDCADDRDATA")
			  
			  if($(ADxml).find("ADP1").text()!="")
			  {
				  $(".ADDRVI").show();
			      $("#COAI_ADDRPROOF1").val($(ADxml).find("ADP1").text())
				  $("#COAI_NIADDRPROOF1").val($(ADxml).find("ADP1").text())
				  //$("#COAI_ADDRPROOF1").next().append("<span>"+$(ADxml).find("ADPNAME1").text()+"</span>")
			  }
			  else
			  {
				  $(".ADDRVI").hide();
			  }
			  
			  if($(ADxml).find("ADP2").text()!="")
			  {
				  $(".ADDRVII").show();
			    $("#COAI_ADDRPROOF2").val($(ADxml).find("ADP2").text())
				//$("#COAI_ADDRPROOF2").next().append("<span>"+$(ADxml).find("ADPNAME2").text()+"</span>")
			  }
			  else
			  {
				 $(".ADDRVII").hide(); 
			  }	
	})
	// Contact Details Data End
	
	
	$(document).on("click", ".ORGD", function()
    {
		Chkudyam();
	})
	
	// Employment Details Data Start
		
	$(document).on("click", ".EMPDLOAD", function()
    {
	  /*if($("#COBI_GSTNUM").val() != "")
	  {
		VerifyGST('COBI_GSTNUM','COBI_GSTVERIFY','COBI_CUSTYPE','COEI_ADDRLINEI1','COEI_ADDRLINEII1')//$(".CBSI_GSTNUM").click();
	  }
	  
	  if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Office Address")
	   {
   	  var Addr1='COEI_ADDRLINEI1';
		  var Addr2='COEI_ADDRLINEII1';
		  var pin='COEI_PINCODE1';
		  var city='COEI_CITY1';
		  var state='COEI_STATE1';
		  
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
	   }*/
    })
    
    // Employment Details Data End
	
	$(document).on("click", ".DELETECOAPPEMP" , function() {

	 	var PrcsId=$(this).attr("data-tab").split("|")[0];
	 	var Type=$(this).attr("data-tab").split("|")[2];
	 	PrcsId=$("#"+PrcsId).val();
		 var html=$(this).closest('.DYNROW')
	     var UNIQID=$(html).find("[name=COEI_EMPID]").val() 

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
	 
	 
	 	 	
$(document).on("click", ".SWAPAPPLICANT" , function() {
	 	 		
	 	 		 var  AppMndtryChk = ChkMandatoryFlds("COBIMndtry");
	 	 		 var  CoMndtryChk = ChkMandatoryFlds("COAIMndtry");
	 	 		 var DocMndtry=ChkMandatoryFlds_Doc("DOCMndtry");
	 	 		 if($("#COBI_CUSTYPE").val()=="Individual")
	 	 			 {
	 	 			 var html= $('.BankDetail1').find('.DYNROW')[0]
	 	 		     var  INDCoMndtryChk = ChkMandatoryFlds_V1("COEIMndtry",html); 
	 	 			 }
	 	 		  if($("#COBI_CUSTYPE").val()=="Non-Individual")
	 			     {
	 	 			var  NONCoMndtryChk = ChkMandatoryFlds("COOAMndtry");
	 			     }
	 	 		  
	 	 		  
           if($("#COBI_CUSID").val() == "")
	 		 {
             alert('Cannot Swap Customer ID Not Generated')
	 		 }
            else if($("input[name='COBI_PANNAVAIL']:checked"). val()=="Yes")
	 		 {
               alert('Cannot Swap PAN Not Available Customer')
             }
             else  if($("#COBI_PROFILE").val() == "Retired"||$("#COBI_PROFILE").val()=="Housewife")
	 		 {
             	  var Profile=$("#COBI_PROFILE").val()
                alert('Cannot Swap Customer '+Profile)
	 		 }
			
             else  if(AppMndtryChk == "Mandatory")
			  {
				 alert("Fill the Personal Info Mandatory Fields");
				 return false;
			  }
              else if(CoMndtryChk == "Mandatory")
			   {
				 alert("Fill the Contact Details Mandatory Fields");
				 return false;
			   }
             else if(DocMndtry != "")
				 {
				    alert('Upload '+ DocMndtry);
				    return false;
			     }
             else if(INDCoMndtryChk == "Mandatory")
			 {
			    alert('Fill the Employment Mandatory Fields');
			    return false;
		     }
             else if(NONCoMndtryChk =="Mandatory")
			 {
            	 alert('Fill the Organisation Mandatory Fields');
			    return false;
			 }
              else
	 		  {  
                $("#save1").click();
                $("#save2").click();
                
                if($("#COBI_CUSTYPE").val()=="Individual")
	 			 {
               $($('.BankDetail1').find('.DYNROW')[0]).find('#save3').click()
	 			 }
	 		  if($("#COBI_CUSTYPE").val()=="Non-Individual")
			   {
	 		 	 $("#Save4").click();
			    }
                if(confirm('Are you sure to swap Coapplicant to Applicant') == true)
	 		   {
               var SWAPPAPP=UI_getdata($("#COBI_PRCSID").val(),$("#COBI_CUSID").val(),"","","","LSW_GETSWAPPAPPLI");
			   if($(SWAPPAPP).find('Alert').text()!="")
				 {
				   alert($(SWAPPAPP).find('Alert').text())
		         }

               location.reload(true);
	 		   }
	 		  }
	 })
	 

	 
	 
	 
	 
	 
	      if($("#COBI_FETCHFSTNAME").val() != "")
        	  {
        	  $("#COBI_CUSFISNAM").attr('disabled',true);
        	  }
	      if($("#COBI_FETCHLSTNAME").val() != "")
	          {
	    	    $("#COBI_CUSLSTNAM").attr('disabled',true);
	          }
			  
			  
		 if($("#COBI_CUSID").val() == "")
    	  {
    	   $('.ACCRDISB').addClass('TABDSVLBL');
    	  }      
	        
	       $(document).on("click", ".DedupeSmt", function(){
		  		
    	    if($(this).text()=="Confirm")
    	    	{
					//var contactcusid = $($("input[name='MOBNO']:checked").closest(".tbodytr").find(".tbodytrtd")[7]).text();
					var personalinfocusid = $($("input[name='ACTION']:checked").closest(".tbodytr").find(".tbodytrtd")[19]).text();
					//var addrinfocusid = $($("input[name='ADDRACTION']:checked").closest(".tbodytr").find(".tbodytrtd")[12]).text();
					if(personalinfocusid == "NA" )
					{
						alert("Invalid Customer ID Has Been Picked For Processing, Pick a Valid Customer ID to Process Further");
						return;
					}
					if( personalinfocusid == "")
					{
						alert("Invalid Customer ID Has Been Picked For Processing, Pick a Valid Customer ID to Process Further");
						return;
					}
					/*if((contactcusid == personalinfocusid) && (contactcusid  == addrinfocusid))
					{
						
					}
					else
					{
						alert("Different Customer ID Has Been Choosen, Pick Same Customer ID to Process Further");
						return;
					}
					*/
					
    	    	 if($("input[name='ACTION']:checked").val()=="Yes")
  			   {
				   var FstNam='COBI_CUSFISNAM'
    	      var LstNam='COBI_CUSLSTNAM'
    	      var Gender='COBI_GENTER'
    	      var DOB='COBI_DOB'
    	      var MartStatus='COBI_MARITSTUS'
    	      var Fathnam ='COBI_FATHRNAM';
			  var SpouseName='COBI_SPOUSNAME';
			  
			  
			   if($("#COBI_CUSTYPE").val() == "Non-Individual")
		      {
		    	 var Addr1='COAI_ORGADDRLINI';
				 var Addr2='COAI_ORGADDRLINII';
				 var pin='COAI_ORGPINCODE';
				 var city='COAI_ORGCITY';
				 var state='COAI_ORGSTATE';
			  }
			  else
			  {
			    var Addr1='COAI_ADDRLINI';
			    var Addr2='COAI_ADDRLINII';
			    var pin='COAI_PINCODE';
			    var city='COAI_CITY';
			    var state='COAI_STATE';
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
  	          
			   if($("#COBI_CUSTYPE").val()=="Non-Individual")
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
  			    	
					if(DOBVal !="")
					{
						 $("#"+DOB).val(DOBVal);
					}
  			    	
		 if($("#COBI_CONSTITUTION").val()=="Proprietorship" || $("#COBI_CONSTITUTION").val()=="Society" || $("#COBI_CONSTITUTION").val()=="Trustee")
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
  		            
  		              $("#COBI_AGE").val(age);
  		    		 }
  	            if($("#COBI_AGE").val() != "")
  	              {
  	            	$("#COBI_AGE").next().addClass("active")
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
  					  $("#COBI_FETCHFATHNAME").val('');
  			    	  $("#"+Fathnam).attr('disabled',false)
  	            	}
  			    	if( $("#"+FstNam).val() != "")
  		    		 {
  			    	 $("#"+FstNam).next().addClass('active');
  					 $("#COBI_FETCHFSTNAME").val('');
  			    	// $("#"+FstNam).attr('disabled',true)
  		    		 }
  			    	 if( $("#"+LstNam).val() != "")
  		    		 {
  			    	  $("#"+LstNam).next().addClass('active');
  					  $("#COBI_FETCHLSTNAME").val('');
  			    	 // $("#"+LstNam).attr('disabled',true)
  		    		 }
  	  if($("#"+MartStatus).val() == "Married")
 		 {
	    	 $("#"+SpouseName).attr('disabled',false)
			 $("#"+SpouseName).addClass('COBIMndtry');
			 $("#"+SpouseName).next().find(".MndtryAstr").html("*");
 		 }
	    else
	     {
			$("#"+SpouseName).val('');
	    	$("#"+SpouseName).attr('disabled',true)
			$("#"+SpouseName).removeClass('COBIMndtry');
			$("#"+SpouseName).next().find(".MndtryAstr").html("");
	     }
  			    	 if( $("#"+DOB).val() != "")
  		    		 {
  					   $("#COBI_FETCHDOBNAME").val('')
  			    	   $("#"+DOB).next().addClass('active');
  			    	   $("#"+DOB).attr('disabled',false)
  		    		 }
  			   }
    	    	 if($("input[name='MOBNO']:checked").val()=="Yes")
				   {
					   var Mob='COAI_MOBNOI';
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
			      var Addr1='COAI_ADDRLINI';
				  var Addr2='COAI_ADDRLINII';
				  var pin='COAI_PINCODE';
				  var city='COAI_CITY';
				  var state='COAI_STATE';
				  
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
			      var Addr1='COAI_PREMADDRLINI';
				  var Addr2='COAI_PERMADDRLINII';
				  var pin='COAI_PERMPINCODE';
				  var city='COAI_PERMCITY';
				  var state='COAI_PERMSTATE';
				  
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
		     if($("#COBI_CUSTYPE").val() == "Non-Individual")
		        {
		    	 
		    	 
		    	      var Addr1='COAI_ORGADDRLINI';
					  var Addr2='COAI_ORGADDRLINII';
					  var pin='COAI_ORGPINCODE';
					  var city='COAI_ORGCITY';
					  var state='COAI_ORGSTATE';

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
		     else
		    	 {
		    	  var Addr1='COEI_ADDRLINEI1';
				  var Addr2='COEI_ADDRLINEII1';
				  var pin='COEI_PINCODE1';
				  var city='COEI_CITY1';
				  var state='COEI_STATE1';
				  
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
		       }
    	     }
	      else
	        {
	    	  var FstNam='COBI_CUSFISNAM'
    	      var LstNam='COBI_CUSLSTNAM'
    	      var Gender='COBI_GENTER'
    	      var DOB='COBI_DOB'
    	      var MartStatus='COBI_MARITSTUS'
    	      var Fathnam ='COBI_FATHRNAM';
		     if($(this).attr("data-form")=="Contact Details" || $(this).attr("data-form")=="Organisation Details")
		      {
				   if($("input[name='MOBNO']:checked").val()=="Yes")
				   {
					   var Mob='COAI_MOBNOI';
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
			      var Addr1='COAI_ADDRLINI';
				  var Addr2='COAI_ADDRLINII';
				  var pin='COAI_PINCODE';
				  var city='COAI_CITY';
				  var state='COAI_STATE';
				  
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
			      var Addr1='COAI_PREMADDRLINI';
				  var Addr2='COAI_PERMADDRLINII';
				  var pin='COAI_PERMPINCODE';
				  var city='COAI_PERMCITY';
				  var state='COAI_PERMSTATE';
				  
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
		     if($("#COBI_CUSTYPE").val() == "Non-Individual")
		        {
		    	      var Addr1='COAI_ORGADDRLINI';
					  var Addr2='COAI_ORGADDRLINII';
					  var pin='COAI_ORGPINCODE';
					  var city='COAI_ORGCITY';
					  var state='COAI_ORGSTATE';

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
		    	  var Addr1='COEI_ADDRLINEI1';
				  var Addr2='COEI_ADDRLINEII1';
				  var pin='COEI_PINCODE1';
				  var city='COEI_CITY1';
				  var state='COEI_STATE1';
				  
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
	          
			    	if($("#COBI_CUSTYPE").val()=="Non-Individual")
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
			    	 $("#"+Gender).val(Gend);
			    	 $("#"+Fathnam).val(FatherName);
			    	 $('[name='+Gender+'][value="'+Gend+'"]').prop('checked', true);
			    	 $("#"+MartStatus).val(MarStatus);
			    	 $("#"+MartStatus).material_select();
			    	 $("#"+DOB).val(DOBVal);
					 
		 if($("#COBI_CONSTITUTION").val()=="Proprietorship" || $("#COBI_CONSTITUTION").val()=="Society" || $("#COBI_CONSTITUTION").val()=="Trustee")
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
		            
		              $("#COBI_AGE").val(age);
		    		 }
	            if($("#COBI_AGE").val() != "")
	              {
	            	$("#COBI_AGE").next().addClass("active")
	              }
			    	 
	               if($("#"+Fathnam).val() != "")
	            	{
	            	  $("#"+Fathnam).next().addClass('active');
					  $("#COBI_FETCHFATHNAME").val('');
			    	  $("#"+Fathnam).attr('disabled',false)
	            	}
			    	if( $("#"+FstNam).val() != "")
		    		 {
			    	 $("#"+FstNam).next().addClass('active');
					 $("#COBI_FETCHFSTNAME").val('');
			    	 //$("#"+FstNam).attr('disabled',false)
		    		 }
			    	 if( $("#"+LstNam).val() != "")
		    		 {
			    	  $("#"+LstNam).next().addClass('active');
					  $("#COBI_FETCHLSTNAME").val('');
			    	 // $("#"+LstNam).attr('disabled',false)
		    		 }
			    	 /*if( $("#"+Gender).val() != "")
		    		 {
			    	 $("#"+Gender).next().addClass('active');
			    	 $("#"+Gender).attr('disabled',true)
		    		 }*/
			    	 if( $("#"+DOB).val() != "")
		    		 {
					   $("#COBI_FETCHDOBNAME").val('')
			    	   $("#"+DOB).next().addClass('active');
			    	   $("#"+DOB).attr('disabled',false)
		    		 }
			   }
			  
			 }
	      }
		  if(personalinfocusid != "")
			{
	         UI_getdata($("#PrcsID").val(),$("#COBI_CUSID").val(),personalinfocusid,"","","LSW_SPUSHPOSIDEXTOCUSID_1");
			 $("#COBI_CUSID").val(personalinfocusid);
			 $("#COAI_CUSID").val(personalinfocusid);
			 $("#Save1").click();
			 $("#Save2").click();
			 window.location.reload();
			}
	      //var FathName=$(this).attr("data-aria").split("|")[2];
	      //var DOB=$(this).attr("data-aria").split("|")[3];
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
			PosdxGenCusID('COBI_CUSID','COBI_CUSTYPE','COBI_DEDUPEVERIFY','Co-Applicant','','COBI_CUSFISNAM');
		}
		else
		{
			alert('Y matches found but the customer id was not selected, Kindly chosen any of the Y matched customer to proceed further');
			return;
		}
	});
	
	
	

	
	$(document).on("click", ".AddKYC", function(){
		
		if($("#COBI_CUSID").val()=="")
		{
		$("#Save1").click();
		}
	});

	//$('.FormSave').on('click', function() {
	$(document).on("click", ".FormSave", function(){
		var html=$(this).closest('.DYNROW')	
	//var FormXML =	submitdata("CBSIDBfields");
	
			var CustomerID=$("#COBI_CUSID").val()
	$("#DMY6").val(CustomerID);
	// Mndtry check 
		
		if($(this).text() == "Save & Next")
		{
		var FormMndryChk = $(this).attr("data-for")
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = "";
		var DocMndtryChk="";
		if(prfx!="COEI" )
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
			  MndtryChk = ChkMandatoryFlds("COBIMndtry");
			  if(MndtryChk == "Mandatory")
				  {
				  alert("Fill the  Personal Info");
					return false;
	              }
			   if(MndtryChk == "")
				  {
			  MndtryChk = ChkMandatoryFlds("COAIMndtry");
				  }
			   if(MndtryChk == "Mandatory")
			       {
					  alert("Fill the  Contact Details");
						return false;
	                }
	          }
		
		if($("#COBI_PROFILE").val() == ""&&$("#COBI_CUSTYPE").val() == "Individual")	
		{
			alert("Select Profile and then Submit");
			return false;
			
		}
		
        var FormName=$(this).attr("data-form")
		 if(FormName=="ContactDetails")
				{
			/* if(($("#COBI_CUSTYPE").val() != "Non-Individual") && ($("#COBI_CONSTITUTION").val()!="Private Ltd"))
			{
			if($("#COBI_CONSTITUTION").val()!="Public Ltd ")
			{
			   if($("#COAI_MOBNOI").val()!="")
			     {
		         if($("#COAI_MOBIVERIFY").val() != "Verified")
		          {
			       alert("Verify your Mobile Number")
			       return false
		          }
			     }  
				 /*if($("#COAI_EMAILID").val()!="")
			     {
		         if($("#COAI_EMAILVERIFY").val() != "Verified")
		          {
			       alert("Verify your Email ID")
			       return false
		          }
			     } */
				/*}
				} */
				}
		   if(FormName=="PersonalInfo")
		     {
			   
			   if($("#COBI_GSTNUM").val()!="")
               {
				   /**if($("#KARZASTATUS").val()=="Active")
				{
                if($("#COBI_GSTVERIFY").val() != "Verified")
                {
                  alert("Verify your GST Number")
                  return false
                }
				}***/
                } 
			   
		     /* if($("#COBI_PANNAVAIL").val() == "Yes" && $("#COBI_CUSTYPE").val() == "Individual" )
		         {
					 if($("#KARZASTATUS").val()=="Active")
				{
	        	if($("#COBI_VOTERIDVEIRFY").val() != "Verified" && $("#COBI_DRIVLICNSVERIFY").val() != "Verified" && $("#COBI_PASSPORTVERIFY").val() != "Verified")
	        		{
	        		  alert("Verify at least one KYC Details");
	        		  return false;
	        		}
				}
	             }*/
				 
				 if($("#COBI_PANNAVAIL").val() == "Yes" && $("#COBI_FORM60A").val() =="" )
				 {
					  alert("Please Upload Form 60");
	        		  return false;
				 }
				 
				 if($("#COBI_CUSPHOTO").val() == "" && $("#COBI_CUSTYPE").val() == "Individual")
		        {
		             alert("Upload the photo")
		             return false
	            }
			
			
			     if($("#COBI_PAN").val()!="")
			     {
		         if($("#COBI_PANVERIFY").val() != "Verified")
		          {
			       alert("Verify your PAN Number")
			       return false
		          }
			     } 
			
				
				if($("#COBI_AADHAR").val()=="XXXXXXXX")
			{
				alert("Aadhar is Mandatory");
				return false;
			}
			else if($("#COBI_AADHAR").val() != "XXXXXXXX" && $("#COBI_AADHAR").val() !="" && $("#COBI_AADHARATTACHMENT").val()=="")
			{
				alert("Upload Aadhar's ID is Mandatory");
				return false;
			}
				
		      }
			 
			  
			  
			  
		}
		
		
		
		
		// Customer Seq ID Gen Start

		//if($("#COBI_CUSFISNAM").val() != "" && $("#COBI_TITLE").val() != ""  && ($("#COBI_PANNAVAIL").val() == "Yes" || $("#COBI_PAN").val() != ""))
		//{
			
		if($("#COBI_CUSID").val() == "")
		{
		var CUSID = UI_getdata("CUS","","Yes","","","Sam_sGetCusSeqID");
		
		$("#COBI_CUSID").val($(CUSID).find("Val1").text());
		$(".COBI_CUSID").text($(CUSID).find("Val1").text());
	    }
		if($(html).find("[name=COEI_EMPID]").val() == "")
		{
		var CUSID = UI_getdata("EMPID",$("#PrcsID").val(),"Yes",$("#COBI_CUSID").val(),"","Sam_sGetLONApplSeqID");
		$(html).find("[name=COEI_EMPID]").val('EC'+$(CUSID).find("Val1").text());
	//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
	    }
		       $('.BankDetail2').find("[name=COGS_CUSID]").val($("#COBI_CUSID").val())
		var GSTGRDDATA = TxtGridsubmitdata_V2("BankDetail2","COGS_","COBI_","COGSDBfields");
		AssignGridXmltoField("COBI_GSTMULTI", GSTGRDDATA)
		// Customer Seq ID Gen End 
		
	if($("#COBI_CUSID").val() != "")
   	  {
   	   $('.ACCRDISB').removeClass('TABDSVLBL');
   	  }      
	      
		
		
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
		
		$(".FormPageMultiTab li.active").attr("id",$("#COBI_CUSID").val());
		$(".FormPageMultiTab li.active").attr("title",$("#COBI_CUSID").val());
		$(".FormPageMultiTab li.active a div").text($("#COBI_CUSFISNAM").val() + " " +$("#COBI_CUSLSTNAM").val());
		
		// Tab Header Change End
		
		/*}
		else
		{
			
			
			if($("#COBI_CUSTYPE").val() == "Individual")
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
			
			if(FormName=="OrganisationDetails" || FormName=="EmployementDetails"||$("#COBI_PROFILE").val() == "Retired"||$("#COBI_PROFILE").val()=="Housewife")
				{
				var PRCSID = $("#PrcsID").val();
	            var xml=UI_getdata($("#PrcsID").val(),$("#COBI_CUSID").val(),'COAPPL',"","","LSW_SUPDDEDUPESTS")
			
				}
			  NXTTAB(this);
		}
	});
	
	$("#CusAdd").on('click', function() {
		
		var licount = $(".FormPageMultiTab li").length;
		var value = $(".FormPageMultiTab").attr('title');
		var Formactive = $(".FormPageTab").find("li.active").attr("id");		  
		var MainActive = $(".FormMainTabs").find("li.active").attr("id");
		
		
		var CusType=$('input[name=CoAppType]:checked').val();
		
		var MndtryChk = ChkMandatoryFlds("COAPMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		
		var Constitution=$("#CoAppConsti").val();
		var CIN = $("#CoAppcin").val();
		var ExistAppNo=$("#ExsCusID").val();
		var Prcsid=$("#PrcsID").val();
		var ActivityID=$("#ActvID").val();
		var UserID=$("#LogUsr").val();
		
		
		//checkCINNum();
		
		
		
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
	
	$("#LoadCusAdd").on('click', function() {
		
		var licount = $(".FormPageMultiTab li").length;
		var value = $(".FormPageMultiTab").attr('title');
		var Formactive = $(".FormPageTab").find("li.active").attr("id");		  
		var MainActive = $(".FormMainTabs").find("li.active").attr("id");
		
		
		var CusType=$('input[name=CoAppType1]:checked').val();
		
		var MndtryChk = ChkMandatoryFlds("LDCOMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		
		$("#COBI_CUSTYPE").val(CusType)
		$("#COBI_CONSTITUTION").val($("#Constitution1").val());
		$("#COBI_CONSTITUTION").next().addClass('active');
		$("#LoadPopCls").click();
		
		
		CheckLoanType('COBI','COAI','COEI','COOA');
	//CheckRelation();
	FindConstDD();
	CheckDudupe('COBI_DEDUPEVERIFY');
	CheckRelatOther();
	CHKApplIndiv();
	ApplicantTitleDisabl();
	CheckNegativeList();
	//residentaddr();
	CheckUploadMndtry();
	
	CheckAppltype();
	CheckMarStatus();
	ApplicantTitleDisabl();
	CHKAPPResidType();
	
	CheckPanORNot();
	CheckFieldDisb();
	RelationShipDropdown();
	checkPAN();
    NotIndiPan();
          //CheckCIN();
	AddZoom();
	CheckGSTorNot();
	CheckProfile("Load");
	LoadVwImage('COBI_');
		
		// Only for Proprietorship Start
 
 var Consitition=$("#COBI_CONSTITUTION").val()
 
 if(Consitition=='Proprietorship' || Consitition=='Trustee' || Consitition=='Society')
 {
	 $("#COBI_CUSFISNAM").attr('disabled',false);
 }
 //Only for Proprietorship End
	      if($("#COBI_FETCHFSTNAME").val() != "")
        	  {
        	  $("#COBI_CUSFISNAM").attr('disabled',true);
        	  }
	      if($("#COBI_FETCHLSTNAME").val() != "")
	          {
	    	    $("#COBI_CUSLSTNAM").attr('disabled',true);
	          }
			  
			  
		 if($("#COBI_CUSID").val() == "")
    	  {
    	   $('.ACCRDISB').addClass('TABDSVLBL');
    	  } 
  
		  
	});
	
	LoadMultiData("",$("#PrcsID").val(),$("#COEI_CUSID").val(),"BankDetail1","COEIDBfields","LSW_SGETCOAPPLNTEMPDTL");
	
	 CheckPani();	
	
	$("#BTNEMPMULTIDATA").on('click', function() {
		//LoadMultiData("",$("#PrcsID").val(),$("#COEI_CUSID").val(),"BankDetail1","COEIDBfields","LSW_SGETCOAPPLNTEMPDTL");
		$("input[name='COEI_CUSID']" ).val($("#COBI_CUSID").val());
		
		if($("#COBI_FICOMPETED").val()=="Completed")
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
		
		$(HTML).find("input[name='COEI_CUSID']" ).val($("#COBI_CUSID").val())
		//CheckNegativeList (HTML,"");
		 }
		}     
		   RmoveEmpFlds();
             	
	});
	
	
	$(".OrgDetlShip").on('click', function() {
		
		var Constitution=$("#COBI_CONSTITUTION").val()
		
		if(Constitution=="Private Ltd." || Constitution=="Public Ltd.")
			{		
			  $(".NCIN").show();
			}
		else
			{
			   $(".NCIN").hide();
		    }			   
	  });
         $(document).on("click", ".KarzaSmt", function() {

	      var FstNam=$(this).attr("data-aria").split("|")[0];
	      var LstNam=$(this).attr("data-aria").split("|")[1];
	      var FathName=$(this).attr("data-aria").split("|")[2];
	      var DOB=$(this).attr("data-aria").split("|")[3];
	      var ADDRI=$(this).attr("data-aria").split("|")[4];
	      var ADDRII=$(this).attr("data-aria").split("|")[5];
	      var GenderId=$(this).attr("data-aria").split("|")[6];
	      
	      var name=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[1]).text()
	      
	      var DOBVal=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[2]).text()
	      var Gender=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[3]).text()
	      var FatherName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[4]).text()
	      var Address=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[5]).text()

	      var Data=name.replace(" ","|");
	      var FirstName=Data.split("|")[0];
		  var LastName=Data.split("|")[1];
              
	  if($("#COBI_CUSTYPE").val()=='Non-Individual')
		 {	  
			 var   FirstName=FirstName+' '+LastName
			   var  LastName=''
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
		    	 
		    	 if($("#"+DOB).val()!="")
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
		            
		               $("#COBI_AGE").val(age);
		    		 }

	            if($("#COBI_AGE").val() != "")
	              {
	            	$("#COBI_AGE").next().addClass("active")
	              } 
		    	 if( $("#"+FstNam).val() != "")
	    		 {
		    	 $("#"+FstNam).next().addClass('active');
		    	 $("#"+FstNam).attr('disabled',true)
		    	 $("#COBI_FETCHFSTNAME").val("Selected")
	    		 }
				 else
				 {
				  $("#"+FstNam).attr('disabled',false)
				  $("#"+FstNam).next().removeClass('active');
				 }
		    	 if( $("#"+LstNam).val() != "")
	    		 {
		    	 $("#"+LstNam).next().addClass('active');
		    	 $("#"+LstNam).attr('disabled',true)
		    	  $("#COBI_FETCHLSTNAME").val("Selected")
	    		 }
				 else
				 {
				  $("#"+LstNam).attr('disabled',false)
				  $("#"+LstNam).next().removeClass('active');
				 }
		    	 if( $("#"+FathName).val() != "")
	    		 {
		    	 $("#"+FathName).next().addClass('active');
		    	 $("#"+FathName).attr('disabled',true)
		    	  $("#COBI_FETCHFATHNAME").val("Selected")
	    		 }
				 else
				 {
				  $("#"+FathName).attr('disabled',false)
				  $("#"+FathName).next().removeClass('active');
				 }
		    	 if( $("#"+DOB).val() != "")
	    		 {
		    	 $("#"+DOB).next().addClass('active');
		    	 $("#"+DOB).attr('disabled',true)
		    	  $("#COBI_FETCHDOBNAME").val("Selected")
	    		 }
				 else
				 {
				  $("#"+DOB).attr('disabled',false)
				  $("#"+DOB).next().removeClass('active');
				 }
		    	 
		    	 $('[name='+GenderId+'][value="'+Gender+'"]').prop('checked', true);
		    	 
	         $(".KarzaPopup").click();
	});	
	
	
/*	$(document).on("click", ".KarzaSmt", function() {

	      var FstNam=$(this).attr("data-aria").split("|")[0];
	      var LstNam=$(this).attr("data-aria").split("|")[1];
	      var FathName=$(this).attr("data-aria").split("|")[2];
	      var DOB=$(this).attr("data-aria").split("|")[3];
	      var ADDRI=$(this).attr("data-aria").split("|")[4];
	      var ADDRII=$(this).attr("data-aria").split("|")[5];
	      
	      var name=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[1]).text()
	      
	      var DOBVal=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[2]).text()
	      var FatherName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[3]).text()
	      var Address=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[4]).text()

	      var Data=name.replace(" ","|");
	      var FirstName=Data.split("|")[0];
		  var LastName=Data.split("|")[1];

		    	 $("#"+FstNam).val(FirstName);
		    	 $("#"+LstNam).val(LastName);
		    	 $("#"+FathName).val(FatherName);
		    	 $("#"+DOB).val(DOBVal);
		    	 
		    	 if(Address != "")
	    		 {
	    		 $("#"+ADDRI).val(Address);
	    		 $("#"+ADDRII).val(Address);
	    		 $("#"+ADDRI).next().addClass("active");
	    		 $("#"+ADDRII).next().addClass("active")
	    		 }
		    	 
		    	 if($("#"+DOB).val()!="")
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
		            
		               $("#COBI_AGE").val(age);
		    		 }

	            if($("#COBI_AGE").val() != "")
	              {
	            	$("#COBI_AGE").next().addClass("active")
	              } 
		    	 if( $("#"+FstNam).val() != "")
	    		 {
		    	 $("#"+FstNam).next().addClass('active');
		    	 $("#"+FstNam).attr('disabled',true)
		    	 $("#COBI_FETCHFSTNAME").val("Selected")
	    		 }
		    	 if( $("#"+LstNam).val() != "")
	    		 {
		    	 $("#"+LstNam).next().addClass('active');
		    	 $("#"+LstNam).attr('disabled',true)
		    	  $("#COBI_FETCHLSTNAME").val("Selected")
	    		 }
		    	 if( $("#"+FathName).val() != "")
	    		 {
		    	 $("#"+FathName).next().addClass('active');
		    	 $("#"+FathName).attr('disabled',true)
		    	  $("#COBI_FETCHFATHNAME").val("Selected")
	    		 }
		    	 if( $("#"+DOB).val() != "")
	    		 {
		    	 $("#"+DOB).next().addClass('active');
		    	 $("#"+DOB).attr('disabled',true)
		    	  $("#COBI_FETCHDOBNAME").val("Selected")
	    		 }
	         $(".KarzaPopup").click();
	});*/
	
	$(document).on("click", ".GstKarzaSmt", function() {

      var GST=$(this).attr("data-aria").split("|")[0];
      var GSTNO=$($("input[name='GSTACTION']:checked").closest('tbody tr').find('td')[0]).text()

      //var Data=name.replace(" ","|");
    //  var GSTNO=Data.split("|")[0];
	       $("#"+GST).val(GSTNO);
	    	 if( $("#"+GST).val() != "")
    		 {
	    	 $("#"+GST).next().addClass('active');
	    	 $("#"+GST).attr('disabled',true)
    		 }
         $(".KarzaPopup").click();
		 SavePersInfo();
		 
		 $("#COBI_GSTVERIFY").val('');
		 $(".COBI_GSTNUM").text('Verify')
		 $(".COBI_GSTNUM").addClass("btn-yelInplain");
		 $(".COBI_GSTNUM").removeClass("btn-GrnInplain");
		 $(".COBI_GSTNUM").removeClass("btn-RedInplain");
});

// Only for Proprietorship Start
 
 var Consitition=$("#COBI_CONSTITUTION").val()
 
 if(Consitition=='Proprietorship' || Consitition=='Trustee' || Consitition=='Society')
 {
	 $("#COBI_CUSFISNAM").attr('disabled',false);
 }
 //Only for Proprietorship End
 
  
	 
 	
		
});

