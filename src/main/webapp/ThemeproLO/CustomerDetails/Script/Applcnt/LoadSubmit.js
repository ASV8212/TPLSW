$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
	$("#CEMI_PRCSID").attr("value",$("#PrcsID").val());
	var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID =$("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#headingOne1 a").attr("data-aria").split("|")[3];
	

	if(DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	if($("#DMY7").val().split("|")[8]=="HE02")
	{
		$(".BTNDedupe").hide();
	}
	
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	var xml=UI_getdata("Karza","","","","","LSW_SCHKINTGSTATUS")
	var data=$(xml).find('STATUS').text()
	
	$("#KARZASTATUS").val(data)
	
	FindConstDD();
	
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
	
		
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#CBSI_CUSID").val(),"","","","LSW_SGETFISTATUS")
	
	if($(xmlSTATUS).find('RESULT').text()=="N")
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
	
	
	
	var User=UI_getdata($("#LogUsr").val(),"","","","","LSW_SGETUSERRPTID")
	
	if($("#CBSI_RPTID").val()=="")
	{
		$("#CBSI_RPTID").val($(User).find('RPTID').text())
	}
	if($("#CBSI_CURUSROLE").val()=="")
	{
		$("#CBSI_CURUSROLE").val($(User).find('ROLE').text())
	}
	
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
	
	
	$("#headingOne1 a").attr("data-load","Yes");
	
	
	
	CheckDudupe('CBSI_DEDUPEVERIFY');
	//LoadVwImg();
	//CheckExsCust();
	CheckAppltype();
	CheckMarStatus();
	CheckUploadMndtry();
	ApplicantTitleDisabl();
	//AddUAMDocMnd();
	CheckIncomeCons();
	CheckFieldDisb();
        NotIndiPan()
       // CheckLoanType('CBSI','CADI','CEMI','CDOG');
		AddZoom();
		CheckGSTorNot();
		CheckProfile();
		showRejRmk();
	LoadVwImage('CBSI_');
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
	if($("#CBSI_GSTNUM").val() != "")
	{
		VerifyGST('CBSI_GSTNUM','CBSI_GSTVERIFY','CBSI_CUSTYPE','CADI_ADDRLINI','CADI_ADDRLINII')//$(".CBSI_GSTNUM").click();
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
			  
			  
			  Loadresidentaddr();
			  
			  
			  var ADxml=UI_getdata($("#PrcsID").val(),$("#CBSI_CUSID").val(),"","","","LSW_SGETDCADDRDATA")
			  
			  if($(ADxml).find("ADP1").text()!="")
			  {
				  $(".ADDRVI").show();
			      $("#CADI_ADDRPROOF1").val($(ADxml).find("ADP1").text())
				  $("#CADI_NIADDRPROOF1").val($(ADxml).find("ADP1").text())
			  }
			  else
			  {
				  $(".ADDRVI").hide();
			  }
			  
			  if($(ADxml).find("ADP2").text()!="")
			  {
				  $(".ADDRVII").show();
			     $("#CADI_ADDRPROOF2").val($(ADxml).find("ADP2").text())
			  }
			  else
			  {
				 $(".ADDRVII").hide(); 
			  }
			  
})

// Contact Details Data End

// Employment Details Data Start

$(document).on("click", ".EMPDLOAD", function()
{
	if($("#CBSI_GSTNUM").val() != "")
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
	   }
	
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
  }
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

   var FirstName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[0]).text()
   var LastName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[1]).text()
   var Gend=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[2]).text()
   var MarStatus=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[3]).text()
   var DOBVal=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[4]).text()
   var FatherName=$($("input[name='ACTION']:checked").closest('tbody tr').find('td')[5]).text()
   
	    	 //$("#"+FstNam).val(FirstName);
	    	// $("#"+LstNam).val(LastName);
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
	    	 
	    	
	    	 $("#"+Fathnam).attr('disabled',false)
	    	 $("#"+FstNam).attr('disabled',false)
	    	 $("#"+LstNam).attr('disabled',false)
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
	    	 $("#"+FstNam).attr('disabled',false)
 		   }
	     if( $("#"+LstNam).val() != "")
 		   { 
	    	 $("#"+LstNam).next().addClass('active');
			 $("#CBSI_FETCHLSTNAME").val('');
	    	 $("#"+LstNam).attr('disabled',false)
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
	          
			    	 //$("#"+FstNam).val(FirstName);
			    	// $("#"+LstNam).val(LastName);
			    	 $("#"+Gender).val(Gend);
			    	 $("#"+Fathnam).val(FatherName);
			    	 $('[name='+Gender+'][value="'+Gend+'"]').prop('checked', true);
			    	 $("#"+MartStatus).val(MarStatus);
			    	 $("#"+MartStatus).material_select();
			    	 $("#"+DOB).val(DOBVal);
			    	
			    	 $("#"+Fathnam).attr('disabled',false)
			    	 $("#"+FstNam).attr('disabled',false)
			    	 $("#"+LstNam).attr('disabled',false)
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
			    	 $("#"+FstNam).attr('disabled',false)
		    		 }
			    	 if( $("#"+LstNam).val() != "")
		    		 {
			    	  $("#"+LstNam).next().addClass('active');
					  $("#CBSI_FETCHLSTNAME").val('');
			    	  $("#"+LstNam).attr('disabled',false)
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
	         $(".DedupeClose").click();		
	})
	
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
			if($(this).closest('.DYNROW').parent().parent().attr("id")=="collapseThree3"){
				 MndtryChk = ChkMandatoryFlds_V1(prfx+"Mndtry",html);
			}	
			else
			{
				 MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
				 
				 
				 //DocMndtryChk=ChkMandatoryFlds_Doc("DOCMndtry")
			}

			if(MndtryChk == "Mandatory")
				{
				 alert("Fill the Mandatory Fields");
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
			
			if($("#CBSI_AADHAR").val()=="XXXXXXXX")
			{
				alert("Aadhar is Mandatory");
				return false;
			}
			else if($("#CBSI_AADHAR").val() != "XXXXXXXX" && $("#CBSI_AADHAR").val() !="" && $("#CBSI_AADHARATTACHMENT").val()=="")
			{
				alert("Upload Aadhar's ID is Mandatory");
				return false;
			}
			var FormName=$(this).attr("data-form")
			if(FormName=="ContactDetails")
				{
			  /* if($("#CADI_MOBNOI").val()!="")
			     {
		         if($("#CADI_MOBIVERIFY").val() != "Verified")
		          {
			       alert("Verify your Mobile Number")
			       return false
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
		      if($("#CBSI_GSTNUM").val()!="")
		         {
					 if($("#KARZASTATUS").val()=="Active")
				{
	               if($("#CBSI_GSTVERIFY").val() != "Verified")
	                {
		              alert("Verify your GST Number")
		              return false
	                }
				}
		        } 
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
			var APPLNO = UI_getdata("FileNo","","Yes","","","Sam_sGetLONApplSeqID");
			$("#CBSI_APPLCNTNO").val($(APPLNO).find("Val1").text());
			$("#APFI_APPLNO").text($(APPLNO).find("Val1").text());
		    }
			if($(html).find("[name=CEMI_EMPID]").val() == "")
			{
			var CUSID = UI_getdata("EMPID","","Yes","","","Sam_sGetLONApplSeqID");
			$(html).find("[name=CEMI_EMPID]").val('EA'+$(CUSID).find("Val1").text());
		//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
		    }
			
			
					
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
			
			var FormName=$(this).attr("data-form")
			var UPDATEFIADDR=UI_getdata($("#PrcsID").val(),$("#CBSI_CUSID").val(),FormName,"","","LSW_SGETFIADDRSSUPDATE")
			
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
		alert("Fill the Mandatory Fields");
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
	
	
$("#BTNEMPMULTIDATA").on('click', function() {
    CheckNegativeList();
	LoadMultiData("",$("#PrcsID").val(),$("#CEMI_CUSID").val(),"BankDetail1","CEMIDBfields","LSW_SGETAPPLNTEMPDTL");
	$("input[name='CEMI_CUSID']" ).val($("#CBSI_CUSID").val());
	
	/*if($("#CBSI_FICOMPETED").val()=="Completed")
	 {
	 $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
	 $($('.BankDetail1').find('.DYNROW')[0]).find('.OFFTYPE').attr('disabled',true)
     }*/
	
	var DATA=["BankDetail1|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var EMPDetails=DATA[j].split("|")[0];
	 var row = $("."+EMPDetails).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("."+EMPDetails).find(".DYNROW")[i];
	
	$(HTML).find("input[name='CEMI_CUSID']" ).val($("#CBSI_CUSID").val())
	//CheckNegativeList (HTML,"");
	CheckRESICUMOFFICE(HTML);
	CheckFIOFFICECOMP(HTML);
	 }
	}
	 RmoveEmpFlds();
         CheckPan()
	$(".DedupeSmt").click();
});

});

$(document).on("click", ".KarzaSmt", function() {

      var FstNam=$(this).attr("data-aria").split("|")[0];
      var LstNam=$(this).attr("data-aria").split("|")[1];
      var FathName=$(this).attr("data-aria").split("|")[2];
      var DOB=$(this).attr("data-aria").split("|")[3];
      var ADDRI=$(this).attr("data-aria").split("|")[4];
      var ADDRII=$(this).attr("data-aria").split("|")[5];
      var GenderId=$(this).attr("data-aria").split("|")[6];
      
      var name=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[1]).text()
      var DOBVal=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[2]).text()
      var Gender=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[3]).text()
      var FatherName=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[4]).text()
      var Address=$($("input[name='KARZAACTION']:checked").closest('tbody tr').find('td')[5]).text()

      var Data=name.replace(" ","|");
      var FirstName=Data.split("|")[0];
	  var LastName=Data.split("|")[1];
           
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
	    	 $("#"+FstNam).attr('disabled',true)
	    	 $("#CBSI_FETCHFSTNAME").val('Selected')
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
	    	   $("#CBSI_FETCHLSTNAME").val('Selected')
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
	    	 $("#CBSI_FETCHFATHNAME").val('Selected')
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
	    	 $("#CBSI_FETCHDOBNAME").val('Selected')
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
})

