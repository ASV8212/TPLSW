$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
 
	$("#GREI_PRCSID").attr("value",$("#PrcsID").val());
	$("#GGST_PRCSID").attr("value",$("#PrcsID").val());
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#GRBI_CUSID").val($(".FormPageMultiTab li.active").attr("id"))
		}
	
	if($("#GRBI_CUSID").val()!="")
	{
		 $(".GRBI_CUSID").text($("#GRBI_CUSID").val());
	}
	
	
	//$(".GRBI_CUSID").text($("#GRBI_CUSID").val());
	
	
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
	
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	
		var xml=UI_getdata("","","","","","LSW_SGETNATUR")
	
	$("#GUOA_INDUSCATRGORY").html("")
	$("#GUOA_INDUSCATRGORY").append($(xml).find("Industry").html());
	$("#GUOA_INDUSCATRGORY").material_select();
	$("#GREI_INDUSCATRGORY").html("")
	$("#GREI_INDUSCATRGORY").append($(xml).find("Industry").html());
	
	
	Sector();
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	if($("#GRBI_PANVERIFY").val()=='Verified')
	{
		$(".GRBI_PAN").addClass('VIEWDISABLE');
	}
	if($("#GRBI_VOTERIDVEIRFY").val()=='Verified')
	{
		$(".GRBI_VOTERID").addClass('VIEWDISABLE');
	}
	if($("#GRBI_DRIVLICNSVERIFY").val()=='Verified')
	{
		$(".GRBI_DRIVLICNS").addClass('VIEWDISABLE');
	}
	if($("#GRBI_PASSPORTVERIFY").val()=='Verified')
	{
		$(".GRBI_PASSPORT").addClass('VIEWDISABLE');
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
	if  (CIDATA != "")
	{
		CIDATA = $("#"+CIDATA).val()+"|" + CIDATA;
	}
	
	$(".ImgScore").text('Image Score : '+$("#GRBI_IMGSCORE").val());
	FormDataFromDB(CItbl, CIprfx + "_", CIprfx+"DBfields", CIDATA);
	LoadMultiData("",$("#PrcsID").val(),$("#GRBI_CUSID").val(),"BankDetail2","GGSTDBfields","LSW_SGUARGSTGRDDATA");
	if($("#GRBI_AADHARTYPE").val()=="ZIP File Verification")
     {
      $(".AUPLDXMLII").hide();
      }
	      if  (OrgDATA != "")
	{
		OrgDATA = $("#"+OrgDATA).val()+"|" + OrgDATA;
	}
	  FormDataFromDB(Orgtbl, Orgprfx + "_", Orgprfx+"DBfields", OrgDATA);
	// End
	if(($("#GRBI_CUSTYPE").val() == "Non-Individual") && (($("#GRBI_CONSTITUTION").val()=="Private Ltd ")||($("#GRBI_CONSTITUTION").val()=="Public Ltd ")))
    {
      $("#GRAI_ORGLNDLINENO").addClass('GRAIMndtry');
	  $("#GRAI_ORGSTDC").addClass('GRAIMndtry');
	  //$("#GRAI_MOBNOI").removeClass('GRAIMndtry');
    }
    else
    {
     $("#GRAI_ORGLNDLINENO").removeClass('GRAIMndtry');
	 $("#GRAI_ORGSTDC").removeClass('GRAIMndtry');
	 //$("#GRAI_MOBNOI").addClass('GRAIMndtry');
    }

	if($("#GRBI_CUSTYPE").val()== "Individual"||$("#PrMs7").val().split("|")[0]=="Individual")
			{
				if($("#VERTICAL").val()=="MSME")
					{
						$(".CKMSME").hide();
						$(".CKMSME").find("select").material_select("destroy");
						$("#GRBI_GBORROWER").removeClass("GRBIMndtry");
				}
	           
			  
			}
	
	if($("#DMY7").val().split("|")[8]=="HE02")
	{
		$(".BTNDedupe").hide();
	}
	Chkdirect();
	GCheckNumber();
	GuCheckborrower();
	//Chkudha();
	OtherKYC();
	if($("#GRBI_HIDPROFTYP").val()!='')
	{	
		var HIDPROFTYP=$("#GRBI_HIDPROFTYP").val()
		var PROOFTYPE=HIDPROFTYP.split(",");
		var row = $(PROOFTYPE).length;
		for (i=0;i<row;i++)
		{
		if(PROOFTYPE[i] !="")
		{
			$("#GRBI_KYCPROOFTYP option[value='"+PROOFTYPE[i]+"']").attr("selected","selected")
		}
		}
	}
	var xml=UI_getdata("Karza",$("#VERTICAL").val(),"","","","LSW_SCHKINTGSTATUS")
	var data=$(xml).find('STATUS').text()
	
	$("#KARZASTATUS").val(data)
	
	if(data=="Inactive")
	{
		$(".INTDSBV").attr("disabled",true);
	}
	else
	{
		$(".INTDSBV").attr("disabled",false);
	}
	
	$("#GREI_CUSID").attr("value",$("#"+CusID).val());
	//CheckLoanType('GRBI','GRAI','GREI','GUOA');
	
	
	if($("#DMY7").val().split("|")[0]=="Existing Loans" && $("#GRBI_FILESTATUS").val()=="C")
		{
		$("#GRBI_PROFILE").attr('disabled',true)
        }
		
			if($("#DMY7").val().split("|")[0]=="Re-Punch" && $("#GRBI_FILESTATUS").val()=="C")
		{
		$("#GRBI_PROFILE").attr('disabled',true)
        }
	
	
	ApplicantTitleDisabl();
	//residentaddr();
	if ($("#"+CusID1).length>0)
	{
	   $("."+CusID1).text($("#"+CusID1).val());
	}
	
	$("#headingOne1 a").attr("data-load","Yes");

// New Applicant Details Start
	
	if($("#PrMs7").val().split("|")[0] != "")
		{
		$("#GRBI_CUSTYPE").val($("#PrMs7").val().split("|")[0]);
		$("#GRBI_CONSTITUTION").val($("#PrMs7").val().split("|")[1]);
		$("#GRBI_CIN").val($("#PrMs7").val().split("|")[2]);
		}	
		

	FindConstDD();
	CheckDudupe('GRBI_DEDUPEVERIFY');
	CheckAppltype();
	CheckMarStatus();
	CheckRelatOther();
	CheckUploadMndtry();
	CheckNegativeList();
	ApplicantTitleDisabl();
	CheckProfile();
	CheckPanORNot();
	checkPAN();
	CheckFieldDisb();
	Chkqualify('','','','Load');
	RelationShipDropdown();
	AddZoom();
	CheckGSTorNot();
	LoadVwImage('GRBI_')
		if($("#GRBI_PANUPLOADVERIFY").val()=="Upload Verified")
	{
		 $(".TYP").show()
	}
  if($("#GRBI_MSKAADHARATTACHMENT").val()!="")
	{
	   $(".AadharMskImg").show();
	   $(".AadharViewImg").hide();
	   $("#GRBI_AADHAR").attr("disabled",true);
    }
	  
	  if($("#GRBI_MSKAADHARATTACHMENTII").val()!="")
	  {
	   $(".AadharMskImgII").show();
	   $(".AadharViewImgII").hide();
	   $("#GRBI_AADHAR").attr("disabled",true);
      }
  if($("#GRBI_UBVERIFYTYPE").val()=="Mobile Authentication with OTP")
	{
		$(".UtilityLable").text("Service Number");
	}
	
	if($("#GRBI_CUSTYPE").val()=='Non-Individual')
		 {	  
			  $("#GRBI_CUSFISNAM").removeClass('IsUpprCse');
			  $("#GRBI_CUSFISNAM").removeClass('IsAlphaFields');
			  $("#GRBI_CUSFISNAM").addClass('NONumber');
			if($("#GRBI_CONSTITUTION").val()=="Partnership firms")
			{
				
				$(".PARTTYPE").show();
				$("#GRBI_PARTNERSHPTY").addClass('GRBIMndtry');
				$("#GRBI_PARTNERSHPTY").parent().next().find(".MndtryAstr").html("*");
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
	//$('.FormSave').on('click', function() {
	
	$(document).on("click", ".CusTypeDetl" , function() {
		$('input[name="CoAppType"]').prop('checked', false);	
		$(".Constitution").hide();
		$(".CIN").hide();
		$("#CoAppConsti").val('');
		$('#CoAppConsti').material_select("destroy");	
		$('#CoAppConsti').material_select();
    });
	
	if($("#GRBI_FETCHFSTNAME").val() != "")
	  {
	  $("#GRBI_CUSFISNAM").attr('disabled',true);
	  }
   if($("#GRBI_FETCHLSTNAME").val() != "")
      {
	    $("#GRBI_CUSLSTNAM").attr('disabled',true);
      }

	   if($("#GRBI_CUSID").val() == "")
	  {
	   $('.ACCRDISB').addClass('TABDSVLBL');
	  }      
   
   // Contact Details Data Start

   $(document).on("click", ".CONLOAD", function()
  {
  	/*if($("#GRBI_GSTNUM").val() != "")
  	{
  		VerifyGST('GRBI_GSTNUM','GRBI_GSTVERIFY','GRBI_CUSTYPE','GRAI_ADDRLINI','GRAI_ADDRLINII')//$(".CBSI_GSTNUM").click();
  	}*/
	if($("#"+CICusID1).length>0)
	  {
		$("#"+CICusID).val($("#"+CICusID1).val())
	  }
	Loadresidentaddr();
	
	var ADxml=UI_getdata($("#PrcsID").val(),$("#GRBI_CUSID").val(),"","","","LSW_SGETDCADDRDATA")
	
            if($(ADxml).find("ADP1").text()!="")
			  {
				  $(".ADDRVI").show();
			      $("#GRAI_ADDRPROOF1").val($(ADxml).find("ADP1").text())
				  $("#GRAI_NIADDRPROOF1").val($(ADxml).find("ADP1").text())
				  //$("#GRAI_ADDRPROOF1").next().append("<span>"+$(ADxml).find("ADPNAME1").text()+"</span>")
			  }
			  else
			  {
				  $(".ADDRVI").hide();
			  }
			  
			  if($(ADxml).find("ADP2").text()!="")
			  {
				  $(".ADDRVII").show();
			    $("#GRAI_ADDRPROOF2").val($(ADxml).find("ADP2").text())
				//$("#GRAI_ADDRPROOF2").next().append("<span>"+$(ADxml).find("ADPNAME2").text()+"</span>")
			  }
			  else
			  {
				 $(".ADDRVII").hide(); 
			  }	
	
  })

  // Contact Details Data End
  
  
   $(document).on("click", ".ORGDETAL", function(){
	   //if($("#"+$(this).attr("data-aria").split("|")[2]).val() == "")
	   //{
		$("#"+$(this).attr("data-aria").split("|")[2]).val($("#"+$(this).attr("data-aria").split("|")[3]).val())
	   //}
	   //Chkudha();
   })
   
   $(document).on("click", ".DedupeSmt", function(){
	  	
	  if($(this).text()=="Confirm")
	    {
			//var contactcusid = $($("input[name='MOBNO']:checked").closest(".tbodytr").find(".tbodytrtd")[7]).text();
			
			var personalinfocusid = $($("input[name='ACTION']:checked").closest(".tbodytr").find(".tbodytrtd")[19]).text();
			
			//var addrinfocusid = $($("input[name='ADDRACTION']:checked").closest(".tbodytr").find(".tbodytrtd")[12]).text();
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
			/*if((contactcusid == personalinfocusid) && (contactcusid  == addrinfocusid))
			{
				
			}
			else
			{
				alert("Different Customer ID Has Been Choosen, Pick Same Customer ID to Process Further");
				return;
			}*/
			
		      var FstNam='GRBI_CUSFISNAM'
		      var LstNam='GRBI_CUSLSTNAM'
		      var Gender='GRBI_GENTER'
		      var DOB='GRBI_DOB'
		      var MartStatus='GRBI_MARITSTUS'
		      var Fathname='GRBI_FATHRNAM'  
              var SpouseName='COBI_SPOUSNAME'
			  
			 if($("#GRBI_CUSTYPE").val() == "Non-Individual")
		      {
		    	 var Addr1='GRAI_ORGADDRLINI';
				 var Addr2='GRAI_ORGADDRLINII';
				 var pin='GRAI_ORGPINCODE';
				 var city='GRAI_ORGCITY';
				 var state='GRAI_ORGSTATE';
			  }
			  else
			  {
			      var Addr1='GRAI_ADDRLINI';
			      var Addr2='GRAI_ADDRLINII';
			      var pin='GRAI_PINCODE';
			      var city='GRAI_CITY';
			      var state='GRAI_STATE';
			  }
			  
		  if($("input[name='ACTION']:checked").val()=="Yes")
		   {
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
         
		    	if($("#GRBI_CUSTYPE").val()=="Non-Individual")
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
				   $("#"+Fathname).val(FatherName);	
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

         if($("#GRBI_CONSTITUTION").val()=="Proprietorship" || $("#GRBI_CONSTITUTION").val()=="Society" || $("#GRBI_CONSTITUTION").val()=="Trustee")
			 {
				 $("#"+FstNam).attr('disabled',false);
			 }
			 else
			 {
			   $("#"+FstNam).attr('disabled',true);
  			   $("#"+LstNam).attr('disabled',true);
			 }

		    	 $("#"+Fathname).attr('disabled',false)
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
	            
	              $("#GRBI_AGE").val(age);
	    		 }
           if($("#GRBI_AGE").val() != "")
             {
           	$("#GRBI_AGE").next().addClass("active")
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
		    	 
            if($("#"+Fathname).val() != "")
           	{
           	  $("#"+Fathname).next().addClass('active');
				  $("#GRBI_FETCHFATHNAME").val('');
		    	  $("#"+Fathname).attr('disabled',false)
           	}
		    	if( $("#"+FstNam).val() != "")
	    		 {
		    	 $("#"+FstNam).next().addClass('active');
				 $("#GRBI_FETCHFSTNAME").val('');
		    	 //$("#"+FstNam).attr('disabled',true)
	    		 }
		    	 if( $("#"+LstNam).val() != "")
	    		 {
		    	  $("#"+LstNam).next().addClass('active');
				  $("#GRBI_FETCHLSTNAME").val('');
		    	  //$("#"+LstNam).attr('disabled',true)
	    		 }
	  if($("#"+MartStatus).val() == "Married")
 		 {
	    	 $("#"+SpouseName).attr('disabled',false)
			 $("#"+SpouseName).addClass('GRBIMndtry');
			 $("#"+SpouseName).next().find(".MndtryAstr").html("*");
 		 }
	    else
	     {
			$("#"+SpouseName).val('');
	    	$("#"+SpouseName).attr('disabled',true)
			$("#"+SpouseName).removeClass('GRBIMndtry');
			$("#"+SpouseName).next().find(".MndtryAstr").html("");
	     }
		    	 if( $("#"+DOB).val() != "")
	    		 {
				   $("#GRBI_FETCHDOBNAME").val('')
		    	   $("#"+DOB).next().addClass('active');
		    	   $("#"+DOB).attr('disabled',false)
	    		 }
		   }

		      var Mob='GRAI_MOBNOI';
		     
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
		      var Addr1='GRAI_ADDRLINI';
			  var Addr2='GRAI_ADDRLINII';
			  var pin='GRAI_PINCODE';
			  var city='GRAI_CITY';
			  var state='GRAI_STATE';
			  
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
		      var Addr1='GRAI_PREMADDRLINI';
			  var Addr2='GRAI_PERMADDRLINII';
			  var pin='GRAI_PERMPINCODE';
			  var city='GRAI_PERMCITY';
			  var state='GRAI_PERMSTATE';
			  
			  
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
	     if($("#GRBI_CUSTYPE").val() == "Non-Individual")
	        {
	    	 
	    	 
	    	      var Addr1='GRAI_ORGADDRLINI';
				  var Addr2='GRAI_ORGADDRLINII';
				  var pin='GRAI_ORGPINCODE';
		     var city='GRAI_ORGCITY';
			 var state='GRAI_ORGSTATE';

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
		    	  var Addr1='GREI_ADDRLINEI1';
				  var Addr2='GREI_ADDRLINEII1';
				  var pin='GREI_PINCODE1';
				  var city='GREI_CITY1';
				  var state='GREI_STATE1';
				  
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
	      var FstNam='GRBI_CUSFISNAM'
	      var LstNam='GRBI_CUSLSTNAM'
	      var Gender='GRBI_GENTER'
	      var DOB='GRBI_DOB'
	      var MartStatus='GRBI_MARITSTUS'
	      var Fathname='GRBI_FATHRNAM'  
	      var Mob='GRAI_MOBNOI';
		  
		  if($("#GRBI_CUSTYPE").val() == "Non-Individual")
		      {
		    	 var Addr1='GRAI_ORGADDRLINI';
				 var Addr2='GRAI_ORGADDRLINII';
				 var pin='GRAI_ORGPINCODE';
				 var city='GRAI_ORGCITY';
				 var state='GRAI_ORGSTATE';
			  }
			  else
			  {
			      var Addr1='GRAI_ADDRLINI';
			      var Addr2='GRAI_ADDRLINII';
			      var pin='GRAI_PINCODE';
			      var city='GRAI_CITY';
			      var state='GRAI_STATE';
			  }

			   if($(this).attr("data-form")=="Contact Details")
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
				      var Addr1='GRAI_ADDRLINI';
					  var Addr2='GRAI_ADDRLINII';
					  var pin='GRAI_PINCODE';
					  var city='GRAI_CITY';
					  var state='GRAI_STATE';
					  
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
				      var Addr1='GRAI_PREMADDRLINI';
					  var Addr2='GRAI_PERMADDRLINII';
					  var pin='GRAI_PERMPINCODE';
					  var city='GRAI_PERMCITY';
					  var state='GRAI_PERMSTATE';
					  
					  
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
			     if($("#GRBI_CUSTYPE").val() == "Non-Individual")
			        {
			    	      var Addr1='GRAI_ORGADDRLINI';
						  var Addr2='GRAI_ORGADDRLINII';
						  var pin='GRAI_ORGPINCODE';
						  var city='GRAI_ORGCITY';
						  var state='GRAI_ORGSTATE';

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
			     }
			   }
			  }
			 else if($(this).attr("data-form")=="Employment Details")
				{
			     if($($("input[name='ADDRACTION']:checked").closest('tbody tr').find('td')[5]).find('input').val()=="Office Address")
				   {
			    	  var Addr1='GREI_ADDRLINEI1';
					  var Addr2='GREI_ADDRLINEII1';
					  var pin='GREI_PINCODE1';
					  var city='GREI_CITY1';
					  var state='GREI_STATE1';
					  
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
		 
		          
			if($("#GRBI_CUSTYPE").val()=="Non-Individual")
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
				    	 
				    	 $("#"+Fathname).val(FatherName);
				    	
				    	 $("#"+MartStatus).val(MarStatus);
				    	 $("#"+MartStatus).material_select();
				    	 $("#"+DOB).val(DOBVal);
						 
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
				    	
			if($("#GRBI_CONSTITUTION").val()=="Proprietorship" || $("#GRBI_CONSTITUTION").val()=="Society" || $("#GRBI_CONSTITUTION").val()=="Trustee")
			 {
				 $("#"+FstNam).attr('disabled',false);
			 }
			 else
			 {
			   $("#"+FstNam).attr('disabled',true);
  			   $("#"+LstNam).attr('disabled',true);
			 }
						
				    	 $("#"+Fathname).attr('disabled',false)
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
			            
			              $("#GRBI_AGE").val(age);
			    		 }
		            if($("#GRBI_AGE").val() != "")
		              {
		            	$("#GRBI_AGE").next().addClass("active")
		              }
				    	 
		               if($("#"+Fathnam).val() != "")
		            	{
		            	  $("#"+Fathnam).next().addClass('active');
						  $("#GRBI_FETCHFATHNAME").val('');
				    	  $("#"+Fathnam).attr('disabled',false)
		            	}
				    	if( $("#"+FstNam).val() != "")
			    		 {
				    	 $("#"+FstNam).next().addClass('active');
						 $("#GRBI_FETCHFSTNAME").val('');
				    	 $("#"+FstNam).attr('disabled',false)
			    		 }
				    	 if( $("#"+LstNam).val() != "")
			    		 {
				    	  $("#"+LstNam).next().addClass('active');
						  $("#GRBI_FETCHLSTNAME").val('');
				    	  $("#"+LstNam).attr('disabled',false)
			    		 }
				    	 /*if( $("#"+Gender).val() != "")
			    		 {
				    	 $("#"+Gender).next().addClass('active');
				    	 $("#"+Gender).attr('disabled',true)
			    		 }*/
				    	 if( $("#"+DOB).val() != "")
			    		 {
						   $("#GRBI_FETCHDOBNAME").val('')
				    	   $("#"+DOB).next().addClass('active');
				    	   $("#"+DOB).attr('disabled',false)
			    		 }
				   }
				  
				 }
               }
			if( personalinfocusid != "")
			{
	         UI_getdata($("#PrcsID").val(),$("#GRBI_CUSID").val(),personalinfocusid,"","","LSW_SPUSHPOSIDEXTOCUSID_1");
			 $("#GRBI_CUSID").val(personalinfocusid);
			 $("#GRAI_CUSID").val(personalinfocusid);
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
			PosdxGenCusID('GRBI_CUSID','GRBI_CUSTYPE','GRBI_DEDUPEVERIFY','Guarantor','','GRBI_CUSFISNAM');
		}
		else
		{
			alert('Y matches found but the customer id was not selected, Kindly chosen any of the Y matched customer to proceed further');
			return;
		}
	});
		
		$(document).on("click", ".AddKYC", function(){
		
		if($("#GRBI_CUSID").val()=="")
		{
		$("#Save1").click();
		}
	});
	
	CheckPani();
   // Only for Proprietorship Start
 
 var Consitition=$("#GRBI_CONSTITUTION").val()
 
 if(Consitition=='Proprietorship' || Consitition=='Trustee' || Consitition=='Society')
 {
	 $("#GRBI_CUSFISNAM").attr('disabled',false);
 }
 //Only for Proprietorship End

  
	$(document).on("click", ".FormSave", function(){
		
		var CustomerID=$("#GRBI_CUSID").val()
	$("#DMY6").val(CustomerID);
	//var FormXML =	submitdata("CBSIDBfields");
		var html=$(this).closest('.DYNROW')
		// Mndtry Check
		
		if($(this).text() == "Save & Next")
		{
			var FormMndryChk = $(this).attr("data-for")
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = "";
		var DocMndtryChk="";
		if(prfx!="GREI" )
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
		  MndtryChk = ChkMandatoryFlds("GRBIMndtry");
		  if(MndtryChk == "Mandatory")
			  {
			  alert("Fill the  Personal Info");
				return false;
            }
		 }
		   if($("#GRBI_PROFILE").val() == ""&&$("#GRBI_CUSTYPE").val() == "Individual")	
		    {
			   alert("Select Profile and then Submit");
			   return false;
		    }
		}
		var FormName=$(this).attr("data-form")
		// Customer Seq ID Gen Start	
		//if($("#GRBI_CUSFISNAM").val() != "" && $("#GRBI_TITLE").val() != ""  && ( $("#GRBI_PAN").val() != "" || $("#GRBI_PANNAVAIL").val() == "Yes" ))
		//{
		if($("#GRBI_CUSID").val() == "")
		{
		var CUSID = UI_getdata("CUS","","Yes","","","Sam_sGetCusSeqID");
		
		$("#GRBI_CUSID").val($(CUSID).find("Val1").text());
		$(".GRBI_CUSID").text($(CUSID).find("Val1").text());
	    }
		if($(html).find("[name=GREI_EMPID]").val() == "")
		{
		var CUSID = UI_getdata("EMPID","","Yes","","","Sam_sGetLONApplSeqID");
		$(html).find("[name=GREI_EMPID]").val('EG'+$(CUSID).find("Val1").text());
	//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
	    }
		
           $('.BankDetail2').find("[name=GGST_CUSID]").val($("#GRBI_CUSID").val())
		var GSTGRDDATA = TxtGridsubmitdata_V2("BankDetail2","GGST_","GRBI_","GGSTDBfields");
		AssignGridXmltoField("GRBI_GSTMULTI", GSTGRDDATA)
			
		 if($("#GRBI_CUSID").val() != "")
	   	  {
	   	   $('.ACCRDISB').removeClass('TABDSVLBL');
	   	  }   
		  
		  
		  
		// Customer Seq ID Gen End 
		
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
		$(".FormPageMultiTab li.active").attr("id",$("#GRBI_CUSID").val());
		$(".FormPageMultiTab li.active").attr("title",$("#GRBI_CUSID").val());
		$(".FormPageMultiTab li.active a div").text($("#GRBI_CUSFISNAM").val() + " " +$("#GRBI_CUSLSTNAM").val());
		
		// Tab Header Change End
		/*}
		else
		{
			if($("#GRBI_CUSTYPE").val() == "Individual")
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
		
        var FormName=$(this).attr("data-form")
		if($(this).text() == "Save & Next")
		{
		if(FormName=="PersonalInfo")
		 {
/* 	      if($("#GRBI_GSTNUM").val()!="")
	         {
				  if($("#KARZASTATUS").val()=="Active")
				{
           if($("#GRBI_GSTVERIFY").val() != "Verified")
             {
	            alert("Verify your GST Number")
	            return false
             }
				}
	        }  */
			
			if($("#GRBI_PANNAVAIL").val() == "Yes" && $("#GRBI_FORM60A").val() =="" )
				 {
					  alert("Please Upload Form 60");
	        		  return false;
				 }
			if($("#GRBI_CUSPHOTO").val() == "" && $("#GRBI_CUSTYPE").val() == "Individual")
		        {
		             alert("Upload the photo")
		             return false
	            }
				
				
				if($("#GRBI_PAN").val()!="")
			     {
		         if($("#GRBI_PANVERIFY").val() != "Verified")
		          {
			       alert("Verify your PAN Number")
			       return false
		          }
			     }

				 
			
				
			/*if($("#GRBI_AADHAR").val()=="XXXXXXXX")
			{
				alert("Aadhar is Mandatory");
				return false;
			}
			else if($("#GRBI_AADHAR").val() != "XXXXXXXX" && $("#GRBI_AADHAR").val() !="" && $("#GRBI_AADHARATTACHMENT").val()=="")
			{
				alert("Upload Aadhar's ID is Mandatory");
				return false;
			}*/
		  }
		  
			  if(FormName=="ContactDetails")
				{
			if(($("#GRBI_CUSTYPE").val() != "Non-Individual") && ($("#GRBI_CONSTITUTION").val()!="Private Ltd "))
			{
			if ($("#GRBI_CONSTITUTION").val()!="Public Ltd ")
			{
			   if($("#GRAI_MOBNOI").val()!="")
			     {
		         if($("#GRAI_MOBIVERIFY").val() != "Verified")
		          {
			       alert("Verify your Mobile Number")
			       return false
		          }
			     }				 
				/* if($("#GRAI_EMAILID").val()!="")
			     {
		         if($("#GRAI_EMAILVERIFY").val() != "Verified")
		          {
			       alert("Verify your Email ID")
			       return false
		          }
			     }*/ 
			}
			}
				}
		if(FormName=="ContactDetails")
		  {
			var PRCSID = $("#PrcsID").val();
            var xml=UI_getdata($("#PrcsID").val(),$("#GRBI_CUSID").val(),'GUAR',"","","LSW_SUPDDEDUPESTS")
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
		var xml=UI_getdata(ExistAppNo,Prcsid,ActivityID,UserID,"","LSW_SGETExistGurDet")
		$("#GRBI_CUSTYPE").val(CusType);
		$("#GRBI_CONSTITUTION").val(Constitution);
	 	if(($("#GRBI_CUSTYPE").val() == "Non-Individual") && ($("#GRBI_CONSTITUTION").val()=="Partnership firms"))
		{
			
			$(".PARTTYPE").show();
			$("#GRBI_PARTNERSHPTY").addClass('GRBIMndtry');
			$("#GRBI_PARTNERSHPTY").parent().next().find(".MndtryAstr").html("*");
		}
		else
		{
			$("#GRBI_PARTNERSHPTY").removeClass('GRBIMndtry');
			$("#GRBI_PARTNERSHPTY").parent().next().find(".MndtryAstr").html("");	
			$(".PARTTYPE").hide(); 
		} 
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
		
		$("#GRBI_CUSTYPE").val(CusType)
		$("#GRBI_CONSTITUTION").val($("#Constitution1").val());
		$("#GRBI_CONSTITUTION").next().addClass('active');
		$("#LoadPopCls").click();
		FindConstDD();
	CheckDudupe('GRBI_DEDUPEVERIFY');
	CheckAppltype();
	CheckMarStatus();
	CheckRelatOther();
	CheckUploadMndtry();
	ApplicantTitleDisabl();
	CheckProfile();
	CheckPanORNot();
	checkPAN();
	CheckFieldDisb();
	RelationShipDropdown();
	AddZoom();
	CheckGSTorNot();
	LoadVwImage('GRBI_')
		 CheckPani();
   // Only for Proprietorship Start
 
 var Consitition=$("#GRBI_CONSTITUTION").val()
 	
	if(($("#GRBI_CUSTYPE").val() == "Non-Individual") && ($("#GRBI_CONSTITUTION").val()=="Partnership firms"))
    {
		
		$(".PARTTYPE").show();
		$("#GRBI_PARTNERSHPTY").addClass('GRBIMndtry');
		$("#GRBI_PARTNERSHPTY").parent().next().find(".MndtryAstr").html("*");
	}
	else
	{
		$("#GRBI_PARTNERSHPTY").removeClass('GRBIMndtry');
		$("#GRBI_PARTNERSHPTY").parent().next().find(".MndtryAstr").html("");	
		$(".PARTTYPE").hide(); 
	}
 if(Consitition=='Proprietorship' || Consitition=='Trustee' || Consitition=='Society')
 {
	 $("#GRBI_CUSFISNAM").attr('disabled',false);
 }
 //Only for Proprietorship End
	});
	
	
	LoadMultiData("",$("#PrcsID").val(),$("#GREI_CUSID").val(),"BankDetail1","GREIDBfields","LSW_SGETGUREMPDTL");
	
	$("#BTNEMPMULTIDATA").on('click', function() {

		$("input[name='GREI_CUSID']" ).val($("#GRBI_CUSID").val());
		/*
		if($("#COBI_FICOMPETED").val()=="Completed")
		 {
		 $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
		 $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFTYPE').attr('disabled',true)
	     }
		else
		{
		 $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFADDR').attr('disabled',false)
		 $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFTYPE').attr('disabled',false)
		}*/
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
		
		
		
		$(HTML).find("input[name='GREI_CUSID']" ).val($("#GRBI_CUSID").val())
		//CheckNegativeList (HTML,"");
		 }
		}     
		   RmoveEmpFlds();
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
            
			
		if($("#GRBI_CUSTYPE").val()=='Non-Individual')
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
    		 $("#"+ADDRI).val(Address);
    		 $("#"+ADDRII).val(Address);
    		 $("#"+ADDRI).next().addClass("active");
    		 $("#"+ADDRII).next().addClass("active")
    		 }
	    	 
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
	            
	              $("#GRBI_AGE").val(age);
	    		 }

            if($("#GRBI_AGE").val() != "")
              {
            	$("#GRBI_AGE").next().addClass("active")
              }

	    	 if( $("#"+FstNam).val() != "")
  		 {
	    	 $("#"+FstNam).next().addClass('active');
	    	 $("#"+FstNam).attr('disabled',true)
	    	 $("#GRBI_FETCHFSTNAME").val("Selected")
  		 }
		 else
		 {
			 $("#"+FstNam).next().removeClass('active');
	    	 $("#"+FstNam).attr('disabled',false)
		 }
	    	 if( $("#"+LstNam).val() != "")
  		 {
	    	 $("#"+LstNam).next().addClass('active');
	    	 $("#"+LstNam).attr('disabled',true)
	    	  $("#GRBI_FETCHLSTNAME").val("Selected")
  		 }
		 else
		 {
			 $("#"+LstNam).next().removeClass('active');
	    	 $("#"+LstNam).attr('disabled',false)
		 }
	    	 if( $("#"+FathName).val() != "")
  		 {
	    	 $("#"+FathName).next().addClass('active');
	    	 $("#"+FathName).attr('disabled',true)
	    	  $("#GRBI_FETCHFATHNAME").val("Selected")
  		 }
		 else
		 {
			 $("#"+FathName).next().removeClass('active');
	    	 $("#"+FathName).attr('disabled',false)
		 }
	    	 if( $("#"+DOB).val() != "")
  		 {
	    	 $("#"+DOB).next().addClass('active');
	    	 $("#"+DOB).attr('disabled',true)
	    	 $("#COBI_FETCHDOBNAME").val("Selected")
  		 }
		 else
		 {
			 $("#"+DOB).next().removeClass('active');
	    	 $("#"+DOB).attr('disabled',false)
		 }
	    	 
	    	 $('[name='+GenderId+'][value="'+Gender+'"]').prop('checked', true);
	    	 
       $(".KarzaPopup").click();

});

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
		 
		 $("#GRBI_GSTVERIFY").val('');
		 $(".GRBI_GSTNUM").text('Verify')
		 $(".GRBI_GSTNUM").addClass("btn-yelInplain");
		 $(".GRBI_GSTNUM").removeClass("btn-GrnInplain");
		 $(".GRBI_GSTNUM").removeClass("btn-RedInplain");
})

});
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