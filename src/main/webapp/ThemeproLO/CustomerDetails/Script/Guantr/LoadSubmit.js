$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
	
	$("#GREI_PRCSID").attr("value",$("#PrcsID").val());
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#GRBI_CUSID").val($(".FormPageMultiTab li.active").attr("id"))
		}
	
	if($("#GRBI_CUSID").val()!="")
	{
		 $(".GRBI_CUSID").text($("#GRBI_CUSID").val());
	}
	
	if($("#DMY7").val().split("|")[8]=="HE02")
	{
		$(".BTNDedupe").hide();
	}
	
	//$(".GRBI_CUSID").text($("#GRBI_CUSID").val());
	
	
	var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID =$("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#headingOne1 a").attr("data-aria").split("|")[3];
	
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
		var xml=UI_getdata("Karza","","","","","LSW_SCHKINTGSTATUS")
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
	CheckLoanType('GRBI','GRAI','GREI','GUOA');
	
	
	if($("#DMY7").val().split("|")[0]=="Existing Loans" && $("#GRBI_FILESTATUS").val()=="C")
		{
		$("#GRBI_PROFILE").attr('disabled',true)
        }
		
			if($("#DMY7").val().split("|")[0]=="Re-Punch" && $("#GRBI_FILESTATUS").val()=="C")
		{
		$("#GRBI_PROFILE").attr('disabled',true)
        }
	
	FindConstDD();
	ApplicantTitleDisabl();
	residentaddr();
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
	//AddUAMDocMnd();
	CheckGSTorNot();
	LoadVwImage('GRBI_')
	
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
	
	if($("#GRBI_CUSFISNAM").val() != "")
	  {
	  $("#GRBI_CUSFISNAM").attr('disabled',true);
	  }
   if($("#GRBI_CUSLSTNAM").val() != "")
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
  	if($("#GRBI_GSTNUM").val() != "")
  	{
  		VerifyGST('GRBI_GSTNUM','GRBI_GSTVERIFY','GRBI_CUSTYPE','GRAI_ADDRLINI','GRAI_ADDRLINII')//$(".CBSI_GSTNUM").click();
  	}
	
	var ADxml=UI_getdata($("#PrcsID").val(),$("#GRBI_CUSID").val(),"","","","LSW_SGETDCADDRDATA")
	
            if($(ADxml).find("ADP1").text()!="")
			  {
				  $(".ADDRVI").show();
			      $("#GRAI_ADDRPROOF1").val($(ADxml).find("ADP1").text())
				  $("#GRAI_NIADDRPROOF1").val($(ADxml).find("ADP1").text())
			  }
			  else
			  {
				  $(".ADDRVI").hide();
			  }
			  
			  if($(ADxml).find("ADP2").text()!="")
			  {
				  $(".ADDRVII").show();
			    $("#GRAI_ADDRPROOF2").val($(ADxml).find("ADP2").text())
			  }
			  else
			  {
				 $(".ADDRVII").hide(); 
			  }	

  })

  // Contact Details Data End
   
   $(document).on("click", ".DedupeSmt", function(){
	  	
	  if($(this).text()=="Confirm")
	    {
		  
		      var FstNam='GRBI_CUSFISNAM'
		      var LstNam='GRBI_CUSLSTNAM'
		      var Gender='GRBI_GENTER'
		      var DOB='GRBI_DOB'
		      var MartStatus='GRBI_MARITSTUS'
		      var Fathname='GRBI_FATHRNAM'  
              var SpouseName='COBI_SPOUSNAME'
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
		    	 if( $("#"+MartStatus).val() == "Married")
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
		          
				    	 //$("#"+FstNam).val(FirstName);
				    	// $("#"+LstNam).val(LastName);
						if(Gend != "")
						{
						  $("#"+Gender).val(Gend);
						  $('[name='+Gender+'][value="'+Gend+'"]').prop('checked', true);
						}
				    	 
				    	 $("#"+Fathnam).val(FatherName);
				    	
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
		      //var FathName=$(this).attr("data-aria").split("|")[2];
		      //var DOB=$(this).attr("data-aria").split("|")[3];
		         $(".DedupeClose").click();
		})
  
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
			
			
			 if($("#GRBI_CUSPHOTO").val() == "" && $("#GRBI_CUSTYPE").val() == "Individual")
		         {
		             alert("Upload the photo")
		             return false
	             }
			
         if($("#GRBI_AADHAR").val()=="XXXXXXXX")
			{
				alert("Aadhar is Mandatory");
				return false;
			}
			else if($("#GRBI_AADHAR").val() != "XXXXXXXX" && $("#GRBI_AADHAR").val() !="" && $("#GRBI_AADHARATTACHMENT").val()=="")
			{
				alert("Upload Aadhar's ID is Mandatory");
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
		
		if(FormName=="PersonalInfo")
		 {
	      if($("#GRBI_GSTNUM").val()!="")
	         {
				 if($("#KARZASTATUS").val()=="Active")
				{
           if($("#GRBI_GSTVERIFY").val() != "Verified")
             {
	            alert("Verify your GST Number")
	            return false
             }
				}
	        } 
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
		  }
		
		if($(this).text() == "Save & Next")
		{
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
			alert("Fill the Mandatory Fields");
			return false;
			}
		var Constitution=$("#CoAppConsti").val();
		var CIN = $("#CoAppcin").val();
		var ExistAppNo=$("#ExsCusID").val();
		var Prcsid=$("#PrcsID").val();
		var ActivityID=$("#ActvID").val();
		var UserID=$("#LogUsr").val();
		var xml=UI_getdata(ExistAppNo,Prcsid,ActivityID,UserID,"","LSW_SGETExistGurDet")
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
		LoadMultiData("",$("#PrcsID").val(),$("#GREI_CUSID").val(),"BankDetail1","GREIDBfields","LSW_SGETGUREMPDTL");
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
})

});