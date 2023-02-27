var ProdctName="";
var SchemeName="";
var VieworInavtivePGFlg = "";
if(($("#DMY5").val().split("|")[1]=="Yes")||$("#PrMs1").val()=="View")
		{
		  VieworInavtivePGFlg = "View";
		}
$(document).ready(function () {
	
	
	//GETDROPDOWNVAL("Load");
 
	//SrcByDisble();
	getRepay();
	getfrequency();
	
	$("#LODE_LOANID").val($(".FormPageMultiTab li.active").attr("id"));

	var PrdType = UI_getdata("PRODUCT","","","","","LSW_SGETPRODVAL");

	//$("#LODE_PRODUCT").html("")
	$("#LODE_PRODUCT").append($(PrdType).find("RESULT").html());
	//$("#LODE_PRODUCT").material_select();
	
	var LonPurpose = UI_getdata("LONPURPOS","",$("#DMY7").val().split('|')[8],"","","LSW_SGETPRODVAL");

	//$("#LODE_PRODUCT").html("")
	$("#LODE_LONPURP").append($(LonPurpose).find("RESULT").html());
	//$("#LODE_LONPURP").material_select();
	
	var LoadSchemeOptn = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHEMEPRDWS");
	$("#LODE_SCHEME").append($(LoadSchemeOptn).find("RESULT").html());
	
	if($("#VERTICAL").val()=="MSME Alliance")
	{		
		$(".ALIANCE").show();
		$("#LODE_ANCHORNAME").addClass('LODEMndtry');
		var LonPurpose = UI_getdata("ANCHORNAME","","","","","LSW_SGETPRODVAL");
		$("#LODE_ANCHORNAME").append($(LonPurpose).find("RESULT").html());
	}
	else
	{
		$("#LODE_ANCHORNAME").removeClass('LODEMndtry');
		$("#LODE_ANCHORNAME").material_select();
		
		$(".ALIANCE").hide();
	}
	
	
	
	
	if($("#DMY7").val().split('|')[8]=="ML01")
	{
      $(".ML").show()
	  $(".MLMndtry").addClass('LODEMndtry')
	var LonPurpose = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],"","","","LSW_SGETPRODVAL");

	//$("#LODE_PROPTYPE").append($(LonPurpose).find("RESULT").html());
	//$("#LODE_PROPTYPE").material_select();
	}
	
	var stm=$("#DMY14").val()	
	var obj= JSON.parse(stm)
	$("#LODE_SOURCBY").append('<option value="" selected>--Select--</option>') 
    $("#LODE_SOURCBY").append(obj.SRCBY);
	//$("#LODE_SOURCBY").material_select();
	
	$("#LODE_PRCSID").attr("value",$("#PrcsID").val());

	getloantype();
	
	if($(".FormPageMultiTab li.active").prev().length==0)
	{
		$("#LODE_SOURCBY").attr('disabled',true);
		$(".DLTICON").hide();
	}
	else
	{
	  $("#LODE_SOURCBY").attr('disabled',false);
	  $("#LODE_SOURCBY").material_select();
	}
	
	//LoadMultiData("",$("#PrcsID").val(),$("#LODE_LOANID").val(),"LoanDetail","LODEDBfields","LSW_SGETLONDETAILS");
	
	var DATA=$("#LODE_LOANID").val()+'|LODE_LOANID'
	
	FormDataFromDB("LSW_TLOANDETAILS","LODE_","LODEDBfields", DATA);

	CheckLoanTypeRM('LODE');
   //CheckSEC();
	CheckSourceOnload();
        CheckLoanType('Load');
	//getLoanDetails();
		CHKCHANGE();

	CheckSrc();
	CheckLeadId();
	//loadSubloanPurpose();
	SubloandropdownOnload();
	
	//ChkSchemeLoad()
	CheckDemandLoad();
	CHKPRODUCTTYPE();
	//CheckCredit();
	if($("#DMY5").val().split('|')[2]!="PreLogin" && $("#DMY5").val().split('|')[2]!="PreLoginSB")
	{
	   //$(".LODEDBfields").attr('disabled',true);
	   $("#LODE_SCHEME").attr('disabled',false);
	   $("#LODE_SCHEME").material_select();
	   $(".FormPageMultiTabAdd").hide();
	}
	
	         GetSecUnsec('Load');
			 GetNaturProduct1();
			 getSchemeDetails1('Load');
			 //CheckLIMITDTLS();
			 CheckLIMITDTLSOnload();
			 if($('input:radio[name=LODE_SECURED]:checked').val() == "" || $('input:radio[name=LODE_SECURED]:checked').val() == undefined)
			 {
			 GetSecUnsec('Load');
			 }
			/* if(i>0)
			 {
			   $(HTML).find('select[name="LODE_SOURCBY"]').attr('disabled',false);
			 }*/
			 
			 var front=$("input[name='LODE_COLLECTIONTYPE']:checked").val();
              if (front=="Upfront")
	             {
				  $("#LODE_PRODUCT").attr('disabled',true);  
                  $("#LODE_LONTYPE").attr('disabled',true); 
                  $("#LODE_LONTYPE").material_select();		
                  $("#LODE_PRODUCT").material_select();					  
                  $(".MODE").show()
                  $('.BnkMndtry').addClass('LODEMndtry')				  
				 }
				else
				{
			      $("#LODE_PRODUCT").attr('disabled',false);  
                  $("#LODE_LONTYPE").attr('disabled',false); 
                  $("#LODE_LONTYPE").material_select();		
                  $("#LODE_PRODUCT").material_select();					  
                  $(".MODE").hide()
                  $('.BnkMndtry').removeClass('LODEMndtry');
				} 
				
				if($("#LODE_REPAYMENT").val()=="Step Up" || $("#LODE_REPAYMENT").val()=="Step Down")
				{
					 $(".STEPFLD").show(); 
	                 $("#LODE_STEPUPDWNPRD").addClass("LODEMndtry");
	                 $("#LODE_SETPUPDWNAMT").addClass("LODEMndtry");
				}
				else
				{
					 $(".STEPFLD").hide(); 
	                 $("#LODE_STEPUPDWNPRD").removeClass("LODEMndtry");
	                 $("#LODE_SETPUPDWNAMT").removeClass("LODEMndtry");
				}
	
	if($("input[name='LODE_COLLECTIONTYPE']:checked"). val() == "Upfront" 
	&& $("input[name='LODE_Mode']:checked"). val() == "Online")
	{	
      if($("#LODE_ONREFNUMBER").val()!="")
	  {
         $(".PAYONLINE").show();
		 $(".OnlineBtn").hide();
		 $(".CONP").attr("disabled",true);
	  }
      else
	  {
        $(".PAYONLINE").hide();
		$(".OnlineBtn").show();
		$(".CONP").attr("disabled",false);
	  }		  
	}
	
	var Prod=$("#LODE_PRODUCT").val()
	if( Prod=="T202" || Prod=="T203" || Prod=="T205")
		{
			$('.UNSERDISB').attr('disabled',true)
			$('.SERDISB').attr('disabled',false);
		}
	
	/*
	var DATA=["LoanDetail|"];
	 for (j=0;j<DATA.length;j++)
		 {
		   var LoanDetail=DATA[j].split("|")[0];
	       var row = $("." + LoanDetail).find(".DYNROW").length;
	       for (i=0;i<row;i++)
	       {
			   
	         var HTML = $("." + LoanDetail).find(".DYNROW")[i];
			 SchemeName =$(HTML).find("[name=LODE_SCHEME]").val();
			// getLoanDetails1(HTML);
			 
			 var ProdctName=$(HTML).find('select[name="LODE_PRODUCT"]').val();
			 GetNaturProduct1($(HTML).find('select[name="LODE_LONTYPE"]'),$(HTML).find('select[name="LODE_PRODUCT"]').attr('id'),$(HTML).find('select[name="LODE_LONTYPE"]').attr('id'),ProdctName);
			 getSchemeDetails1(HTML,SchemeName,'Load');
			 CheckLIMITDTLSOnload(HTML,SchemeName);
			 GetSecUnsec('Load',HTML);
			 if(i>0)
			 {
			   $(HTML).find('select[name="LODE_SOURCBY"]').attr('disabled',false);
			 }
			 
			 var front=$(HTML).find("input[name='LODE_COLLECTIONTYPE']:checked").val();
              if (front=="Upfront")
	             {
				  $(HTML).find('select[name="LODE_PRODUCT"]').attr('disabled',true);  
                  $(HTML).find('select[name="LODE_LONTYPE"]').attr('disabled',true); 	
                  $(HTML).find(".MODE").show()
                  $(HTML).find('.BnkMndtry').addClass('LODEMndtry')				  
				 }
				else
				{
			      $(HTML).find('select[name="LODE_PRODUCT"]').attr('disabled',false);  
                  $(HTML).find('select[name="LODE_LONTYPE"]').attr('disabled',false); 
				  $(HTML).find(".MODE").hide()
                  $(HTML).find('.BnkMndtry').removeClass('LODEMndtry')
				} 
				
				if($(HTML).find('select[name="LODE_REPAYMENT"]').val()=="Step Up" || $(HTML).find('select[name="LODE_REPAYMENT"]').val()=="Step Down")
				{
					 $(HTML).find(".STEPFLD").show(); 
	                 $(HTML).find('select[name="LODE_STEPUPDWNPRD"]').addClass("LODEMndtry");
	                 $(HTML).find('select[name="LODE_SETPUPDWNAMT"]').addClass("LODEMndtry");
				}
				else
				{
					 $(HTML).find(".STEPFLD").hide(); 
	                 $(HTML).find('select[name="LODE_STEPUPDWNPRD"]').removeClass("LODEMndtry");
	                 $(HTML).find('select[name="LODE_SETPUPDWNAMT"]').removeClass("LODEMndtry");
				}
	          }
	        }*/
			
	//RmoveLon();
	HandlePropDtl();
//	GetNaturProduct();
	if($("#DMY7").val().split("|")[8] =="HE02")
	{
		NEWPRODUCT();
	}
	
	$(document).on("click", ".DELETELONDETL" , function() {

 	var PrcsId=$(this).attr("data-tab").split("|")[0];
 	var Type=$(this).attr("data-tab").split("|")[2];
 	PrcsId=$("#"+PrcsId).val();
	 var html=$(this).closest('.DYNROW')
     var UNIQID=$(html).find("[name=LODE_LOANID]").val() 

 	 if(confirm('Delete Loan Details') == true)
 		{
 		  var xml=UI_getdata(PrcsId,UNIQID,Type,"","","LSW_SCLEARCUSDATA");

 	 	   $(this).closest('.DYNROW').remove()	
 	 		/*var k= $('.BankDetail1').find('.DYNROW').length
 	 		for(i=0;i<k;i++)
 	 			{
 	 			//('.BankDetail1').find('.DYNROW')[i]
 	 		    var	j=i+1
 	            $($('.BankDetail1').find('.DYNROW')[i]).find('#PROPTXTHDR').text('Employment '+j)
 	 			}*/
 		}
 })
	

	
	if($("#LODE_PROPTYPE").val()!="" && $("#DMY7").val().split('|')[8]=="ML01")
	{
		var PropType=$("#LODE_PROPTYPE").val();
	    var PrType = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],$("#LODE_PROPUSAGE").val(),"","","LSW_SGETPRODVAL");
       //  $("#LODE_PROPTYPE").html("");
	//	 $("#LODE_PROPTYPE").append($(PrType).find("RESULT").html());

	   //   $("#LODE_PROPTYPE option[value='"+PropType+"']").attr("selected","selected")
		//  $("#LODE_PROPTYPE").material_select(); 
	 
	}
	
	if($("#DMY5").val().split('|')[2]!="PreLogin" && $("#DMY5").val().split('|')[2]!="PreLoginSB" && $("#DMY5").val().split('|')[2]!="SendToCredit")
	{
	   //$(".SECUR").attr('disabled',true);
	    $("#LODE_REPAYMENT").attr('disabled',true);
	   $("#LODE_FREQUENCY").attr('disabled',true);
	   $("#LODE_REPAYMENT").material_select();
	   $("#LODE_FREQUENCY").material_select(); 
	   
	}
	if($("#DMY5").val().split('|')[2]!="PreLogin" && $("#DMY5").val().split('|')[2]!="PreLoginSB" && $("#DMY5").val().split('|')[2]!="SendToCredit")
	{
	   $(".SECUR").attr('disabled',true);
	}
	/*
	if($("#DMY5").val().split("|")[2] =="SendToCredit")
	{
		$("#LODE_SCHEME").attr('disabled',true);
		
		if($("#DMY7").val().split('|')[8]=="ML01")
		{
			$("#LODE_PROPUSAGE").attr('disabled',true);
			$("#LODE_PROPTYPE").attr('disabled',true);
		}
	}
	*/
	//$('.FormSave').on('click', function() { 
		$(document).on("click", ".FormSave", function(){	
		//var FormXML =	submitdata("CBSIDBfields");
		//	var html=$(this).closest('.DYNROW')
		// Mandatory Check Start
		if($(this).text() == "Save & Next")
			{
			  var prfx = $(this).attr("data-aria").split("|")[1];
			//  var MndtryChk = ChkMandatoryFlds_V1(prfx+"Mndtry",html);

			var MndtryChk = ChkMandatoryFlds("LODEMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
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
			
			
			if($("#LODE_LOANID").val().indexOf('Loan') != -1)
			{
				var LonIDUpd=UI_getdata($("#PrcsID").val(),$("#APFI_APPLNO").text()+'_'+$(".FormPageMultiTab li.active").attr("id").replace('Loan',''),"","","","LSW_SUPDLOANID")
			    // var CUSID = UI_getdata("LONID","","Yes","","","Sam_sGetLONApplSeqID");
		    $("#LODE_LOANID").val($("#APFI_APPLNO").text()+'_'+$(".FormPageMultiTab li.active").attr("id").replace('Loan',''));
		      //$("#LODE_LOANID").val('LON'+$(CUSID).find("Val1").text());
		    }
			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			/*var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);
			if (CHKresult == "Fail")
				{
				alert("Submission Failed");
				return false;			
				}
			else
			{
				alert("Loan details Saved Successfully")
			}*/
			
			var CHKresult=FormDataToDB(tbl,prfx,$("#LODE_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA)
			
			

			if (CHKresult == "Fail")
			{
			  alert("Submission Failed");
			  return false;		
			}			  

			//Tab Header Change Start
			
			$(".FormPageMultiTab li.active").attr("id",$("#LODE_LOANID").val());
			$(".FormPageMultiTab li.active").attr("title",$("#LODE_LOANID").val());
			$(".FormPageMultiTab li.active a div").text($("#LODE_PRODUCTNAME").val());
			
			// Tab Header Change End
			
			/*
			var PFNO1 = $(".FormPageMultiTab li.active a div").text();
	var PRCSID1 = $("#PrcsID").val();
	var RECEIPTNO=""


   $.ajax({
		    url: "/TPLSW/LMSPF",
		    type: 'POST',
		    data: {PRCSID:PRCSID1,PFNO:PFNO1,RECEIPTNO:RECEIPTNO,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
		    async:true,
		   // dataType: 'json',
		   // contentType:'application/json',
		    
		    success: function(stm){        
		   // var obj = JSON.parse(JSON.stringify(stm))
		    	if (stm == "")
		    		{
		    		
		    		alert("Customer Creation/Updation failed. Contant IT!!!");
		    		return;
		    		
		    		
		    		}
		    	
		    	else if (stm.split("|")[0] == "Fail")
	    			{
	    			
	    			alert("Customer Creation/Updation failed. " + stm.split("|")[1]);
		    		return;
	    			
	    			}
			}
   })
			*/

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

