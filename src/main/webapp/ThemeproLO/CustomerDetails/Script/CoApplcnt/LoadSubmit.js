$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
	
	
	$("#COEI_PRCSID").attr("value",$("#PrcsID").val());
	
	if ($(".FormPageMultiTab li.active").attr("id").indexOf($(".FormPageMultiTab").attr("title")) < 0)
		{
	$("#COBI_CUSID").val($(".FormPageMultiTab li.active").attr("id"))
		}
	if ($("#COBI_CUSID").val() != "")
		{
	$(".COBI_CUSID").text($("#COBI_CUSID").val());
		}
	
	if($("#DMY7").val().split("|")[8]=="HE02")
	{
		$(".BTNDedupe").hide();
	}
	
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
		
		
		 if($("#DMY5").val().split("|")[2]!= "PreLogin" && $("#DMY5").val().split("|")[2]!="SendToCredit")
		{
          $(".SWAPTXT").hide()
		}
		
		 if($("#DMY7").val().split("|")[0]=="Existing Loans"||$("#DMY7").val().split("|")[0]=="Re-Punch")
		{
          $(".SWAPTXT").hide()
		}
		
		
		
		
		 if($("#COBI_CUSTYPE").val()== "Individual"||$("#PrMs7").val().split("|")[0]=="Individual")
			{
	          $(".SWAPTXT").hide()
			}
			
		
	
	$("#COEI_CUSID").attr("value",$("#"+CusID).val());
	
	
    FindConstDD();
	//CheckLoanType('COBI','COAI','COEI','COOA');
	//CheckRelation();
	CheckDudupe('COBI_DEDUPEVERIFY');
	CheckRelatOther();
	CHKApplIndiv();
	ApplicantTitleDisabl();
	residentaddr();
	CheckUploadMndtry();
	getSameaApplAddr();
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
	//AddUAMDocMnd();
	CheckPanORNot();
	CheckFieldDisb();
	RelationShipDropdown();
	checkPAN();
    NotIndiPan();
          //CheckCIN();
	AddZoom();
	CheckGSTorNot();
	CheckProfile();
	LoadVwImage('COBI_');
	//getSameAs();
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
			 	
	if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Co-Applicant Residence Address")
		{
		     LoadSameCoAppresiaddr()
		}
		else if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Applicant Permanent Address")
		{
		    LoadgetSameaApplAddr()
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
		 
		CHKLOADSAMEASAPPLICANT();
		if($("#COBI_GSTNUM").val() != "")
		{
		  VerifyGST('COBI_GSTNUM','COBI_GSTVERIFY','COBI_CUSTYPE','COAI_ADDRLINI','COAI_ADDRLINII')//$(".CBSI_GSTNUM").click();
		}
		
		if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Co-Applicant Residence Address")
		{
		     LoadSameCoAppresiaddr()
		}
		else if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Applicant Permanent Address")
		{
		    LoadgetSameaApplAddr()
		}
		
		var ADxml=UI_getdata($("#PrcsID").val(),$("#COBI_CUSID").val(),"","","","LSW_SGETDCADDRDATA")
			  
			  if($(ADxml).find("ADP1").text()!="")
			  {
				  $(".ADDRVI").show();
			      $("#COAI_ADDRPROOF1").val($(ADxml).find("ADP1").text())
				  $("#COAI_NIADDRPROOF1").val($(ADxml).find("ADP1").text())
			  }
			  else
			  {
				  $(".ADDRVI").hide();
			  }
			  
			  if($(ADxml).find("ADP2").text()!="")
			  {
				  $(".ADDRVII").show();
			    $("#COAI_ADDRPROOF2").val($(ADxml).find("ADP2").text())
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
	  if($("#COBI_GSTNUM").val() != "")
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
	   }
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
				 alert("View Contact screen once before swapping to Ensure all the mandatory details are entered");
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
            	 alert('View Organisation screen once before swapping to Ensure all the mandatory details are entered');
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
                if(confirm('Are you Sure Swap the  Co Applicant to Applicant ?') == true)
	 		   {
               var SWAPPAPP=UI_getdata($("#COBI_PRCSID").val(),$("#COBI_CUSID").val(),"","","","LSW_GETSWAPPAPPLI");
			   
			    if($(SWAPPAPP).find('RESULT').text()=="COMPLETED")
				{	
               location.reload(true);
				}
				else
				{              var Collection=$(SWAPPAPP).find('Alert').text()
				                var Alert2=''
								var nameArr = Collection.split(',')
						         k=nameArr.length
								 for(i=0;i<k;i++)
								 {
									var Alert1= nameArr[i]
									var Alert2 = Alert2 +'\r\n'+Alert1
								 }
						  
						  alert(Alert2);
						   return false;	
				}
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
    	    	 if($("input[name='ACTION']:checked").val()=="Yes")
  			   {
				   var FstNam='COBI_CUSFISNAM'
    	      var LstNam='COBI_CUSLSTNAM'
    	      var Gender='COBI_GENTER'
    	      var DOB='COBI_DOB'
    	      var MartStatus='COBI_MARITSTUS'
    	      var Fathnam ='COBI_FATHRNAM';
			  var SpouseName='COBI_SPOUSNAME';
			  
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
  			    	
					if(DOBVal !="")
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
  			    	 $("#"+FstNam).attr('disabled',false)
  		    		 }
  			    	 if( $("#"+LstNam).val() != "")
  		    		 {
  			    	  $("#"+LstNam).next().addClass('active');
  					  $("#COBI_FETCHLSTNAME").val('');
  			    	  $("#"+LstNam).attr('disabled',false)
  		    		 }
  			    	  if( $("#"+MartStatus).val() == "Married")
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
			    	 $("#"+FstNam).attr('disabled',false)
		    		 }
			    	 if( $("#"+LstNam).val() != "")
		    		 {
			    	  $("#"+LstNam).next().addClass('active');
					  $("#COBI_FETCHLSTNAME").val('');
			    	  $("#"+LstNam).attr('disabled',false)
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
	      //var FathName=$(this).attr("data-aria").split("|")[2];
	      //var DOB=$(this).attr("data-aria").split("|")[3];
	         $(".DedupeClose").click();
	})

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
		if($(this).closest('.DYNROW').parent().parent().attr("id")=="collapseThree3"){
			 MndtryChk = ChkMandatoryFlds_V1(prfx+"Mndtry",html);
		}	
		else{
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
		
		 if($("#COBI_CUSPHOTO").val() == "" && $("#COBI_CUSTYPE").val() == "Individual")
		         {
		             alert("Upload the photo")
		             return false
	             }
		
		
		
        var FormName=$(this).attr("data-form")
		
		   if(FormName=="PersonalInfo")
		     {
			   
			   if($("#COBI_GSTNUM").val()!="")
               {
				if($("#KARZASTATUS").val()=="Active")
				{
                if($("#COBI_GSTVERIFY").val() != "Verified")
                {
                  alert("Verify your GST Number")
                  return false
                }
				}
                } 
			   
		      if($("#COBI_PANNAVAIL").val() == "Yes" && $("#COBI_CUSTYPE").val() == "Individual" )
		         {
					 if($("#KARZASTATUS").val()=="Active")
				{
	        	if($("#COBI_VOTERIDVEIRFY").val() != "Verified" && $("#COBI_DRIVLICNSVERIFY").val() != "Verified" && $("#COBI_PASSPORTVERIFY").val() != "Verified")
	        		{
	        		  alert("Verify at least one KYC Details");
	        		  return false;
	        		}
				}
	             }
				 
				 if($("#COBI_PANNAVAIL").val() == "Yes" && $("#COBI_FORM60A").val() =="" )
				 {
					  alert("Please Upload Form 60");
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
		var CUSID = UI_getdata("EMPID","","Yes","","","Sam_sGetLONApplSeqID");
		$(html).find("[name=COEI_EMPID]").val('EC'+$(CUSID).find("Val1").text());
	//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
	    }
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
		
		
		var FormName=$(this).attr("data-form")
			var UPDATEFIADDR=UI_getdata($("#PrcsID").val(),$("#COBI_CUSID").val(),FormName,"","","LSW_SGETFIADDRSSUPDATE")
			
			
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
			var FormName=$(this).attr("data-form")
			
			if(FormName=="OrganisationDetails" || FormName=="EmployementDetails"||$("#COBI_PROFILE").val() == "Retired"||$("#COBI_PROFILE").val()=="Housewife")
				{
				var PRCSID = $("#PrcsID").val();
				var CUSID=$("#CBSI_CUSID").val();
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
			alert("Fill the Mandatory Fields");
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
	$("#BTNEMPMULTIDATA").on('click', function() {
		
		CheckNegativeList();
		
		LoadMultiData("",$("#PrcsID").val(),$("#COEI_CUSID").val(),"BankDetail1","COEIDBfields","LSW_SGETCOAPPLNTEMPDTL");
		$("input[name='COEI_CUSID']" ).val($("#COBI_CUSID").val());
		
		/*if($("#COBI_FICOMPETED").val()=="Completed")
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
		$(HTML).find("input[name='COEI_CUSID']" ).val($("#COBI_CUSID").val())
		//CheckNegativeList (HTML,"");
		CheckRESICUMOFFICE(HTML);
		CheckFIOFFICECOMP(HTML);
		 }
		}     
		   RmoveEmpFlds();
              CheckPan();		
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
});
		
});

