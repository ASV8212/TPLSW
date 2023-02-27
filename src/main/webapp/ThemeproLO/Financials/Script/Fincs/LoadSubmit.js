var OthrIncmDropDwn="";
//Credit Changes Strt
var ViewRInavtivePGFlg = "";
var EmpowermentFlg = "Inactive";
if(($("#DMY5").val().split("|")[1]=="Yes")||$("#PrMs1").val()=="View")
		{
		  ViewRInavtivePGFlg = "View";
		}
		
		
//Credit Changes END
$(document).ready(function () {
		var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKVIABILITYTAB");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=='Y')	
	{
		$("#FormPageTab9").remove()
	}


	$("#RCCM_UNIQUID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	$("#RCCM_SCHEME").attr("value",$(".FormPageMultiTab li.active").text());
	$("#EGCD_UNIQUID").attr("value",$(".FormPageMultiTab li.active").attr("id"));
	
	var xml1=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETINDUSCATRGORY");
	//$("#HiddenINDUSCATRGORY").val($(xml1).find("INDUSCATRGORY").text());
	$("#HiddenINDUSCATRGORY").val(xml1);
	
	var Industry=UI_getdata("","","","","","LSW_SGETINDUSDD")
	$("#EGCD_INDUSTRY").html("");
	$("#EGCD_INDUSTRY").append($(Industry).find('INDUSTRY').html());
	$("#SCHEME").html("");
	var LoadSchemeOptn = UI_getdata($("#PrcsID").val(),$("#DMY7").val().split('|')[0],$("#DMY7").val().split('|')[8],"","","LSW_SGETSCHEMEPRDWS");
	$("#SCHEME").append($(LoadSchemeOptn).find("RESULT").html());
	
	
	var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID =$("#headingOne1 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#headingOne1 a").attr("data-aria").split("|")[3];
	OthrIncmDropDwn = UI_getdata($(".FormPageMultiTab li.active").attr("id"),"","","","","LSW_SGETOTHRINCMDRPDOWN")
	OthrIncmDropDwn = $(OthrIncmDropDwn).find('RESULT').html()
	


	/*
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
	}*/

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
	}
//	LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val(),"CAMChecklist","CACLDBfields","LSW_SGETSCHEMECUSID");


	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
    
    LoadMultiData("",$("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id")+'|'+ViewRInavtivePGFlg+'|'+$("#RCCM_LOANUNIQID").val(),"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
	
	$("#BTNRCUGRD").click();
	

	
	var xml=UI_getdata($("#PrcsID").val(),$("#RCCM_UNIQUID").val(),"","","","LSW_SCHECKLNTY")
	var CusName=$(xml).find('RESULT').html();
	
	if(CusName=="Bill Discounting" || CusName=="DLOD" || CusName=="Over Draft" || CusName=="WCDL")
	{	
		 $(".REPAY").hide();
	}
	
   /*var BREHIT=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_TPUTBRDDATAMANUAL")
	
	if($(BREHIT).find("LOANID").text()!="")
	{
	$("#RCCM_LOANUNIQID").val($(BREHIT).find("LOANID").text())
	}*/
	
		//Eligiblity Final data field enable start

	 EnableFnlElgFld();
	
	 //Eligiblity Final data field enable end 
	//$("#BTNRTRCAMGRD").click();
	
	
	//$(".loadfincscreen").find("div").not($(".loadfincscreen").find("."+$(".FormPageMultiTab .active a").text().replace(/\s/g, ''))).remove();
	//$(".loader").hide();
	
	var DATA=["CAMChecklist|"];
	 for (j=0;j<DATA.length;j++)
		 {
		   var CAM=DATA[j].split("|")[0];
	       var row = $("." + CAM).find(".DYNROW").length;
	       for (i=0;i<row;i++)
	       {
	         var HTML = $("." + CAM).find(".DYNROW")[i];
	         SchemeBasedCAM(HTML,"CACL_INCCONSID"+(parseInt([i])+1));
	       }
	}
	 getApplName();
	//SchemeBasedCAM();
	//getLOWLTV();
	//getAddValue();
	//CheckRadio();
	
		var xml=UI_getdata($("#PrcsID").val(),$("#RCCM_UNIQUID").val(),"","","","LSW_SGETCREDITANALYSDATA")
	
	if($(xml).find('CREDITSCORE').text() != "")
	{
		$("#CreditAnalyticsST").show();
			$("#CRSCORE").text($(xml).find('CREDITSCORE').text())
    $("#CRD").text($(xml).find('CREDITDECISION').text())
	$("#CRR1").text($(xml).find('CREDITRESONI').text())
	$("#CRR2").text($(xml).find('CREDITRESONII').text())
	$("#CRR3").text($(xml).find('CREDITRESONIII').text())
	$("#CLSCORE").text($(xml).find('CLUSTERSCORE').text())
	$("#CLD").text($(xml).find('CLUSTERDECISION').text())
	$("#CLR1").text($(xml).find('CLUSTERRESONI').text())
	$("#CLR2").text($(xml).find('CLUSTERRESONII').text())
	$("#CLR3").text($(xml).find('CLUSTERRESONIII').text()) 
	}
	else
	{
		$("#CreditAnalyticsST").hide();
	}

	
	if($(".FormPageMultiTab li.active").attr("id")=="S00003")
		{
		  $(".LOWLTV").text('')
		  $(".LOWLTV").text('ITRs - Min Latest 1 Yr')
		}
   else if($(".FormPageMultiTab li.active").attr("id")=="S00006")
		{
		  $(".LOWLTV").text('')
		  $(".LOWLTV").text('ITRs - Min Latest 3 Yr')
		}
	else if($(".FormPageMultiTab li.active").attr("id")=="S00009")
		{
		  $(".LOWLTV").text('')
		  $(".LOWLTV").text('ITRs - Min Latest 2 Yr')
		}
	else
		{
		  $(".LOWLTV").text('')
		  $(".LOWLTV").text('ITRs - Min Latest 2 Yr')
		}
	
	 $(document).on("change", ".LeasePeriod", function() {
		  //$('.IsIFSCFields').change(function () {
		 	    
		 /* var LeasePeriod=$(this).val()
         var TenurePeriod=$(".TERYears").val()
		  
		  if(parseInt(TenurePeriod)>parseInt(LeasePeriod))
			  {
			  
			  alert ('Selected Tenure more than the lease period')
			  $(this).val('')
			  }*/
		 	});
		$(document).on("change", ".LoanAmt", function() {
			var fld = document.getElementsByClassName('LoanAmt');
			
			var LoanCMPRFLDCls=$('.LoanCMPRFLD');
			var CMpr1="";
			var CMpr2="";
			for(var i=0;i<LoanCMPRFLDCls.length;i++){
				if(i==0){
				CMpr1=LoanCMPRFLDCls[i].value.replace(/,/g,'');
				}
				else{
					CMpr2=LoanCMPRFLDCls[i].value.replace(/,/g,'');
				}
			}
			LoanAmtChk(fld[0],CMpr1,CMpr2)
		});
	  $(document).on("change", ".TERYears", function() {
		  //$('.IsIFSCFields').change(function () {
			  var TermYears=$(this).val()
		 	    if($('.FormPageMultiTab .active').attr("id")=="S00004"){
		  //Credit Changes Strt **********$($($("#TableRR").find('.tbodytr')[i]).find('.tbodytrtd')[7]) Index Change********
		var  years1 =1  
		var j= $($($("#TableRR").find('.tbodytr')[0]).find('.tbodytrtd')[7]).find('input').length
		    
		for(var i=0;i<j;i++)
			{
            var Years= $($($("#TableRR").find('.tbodytr')[i]).find('.tbodytrtd')[7]).find('input').val()
			////Credit Changes End
		    	if(parseInt(Years)>parseInt(years1))
		    		{
		    		
		    		years1=Years
		    		
		    		}
			}
		  
		  if(parseInt(TermYears)>parseInt(years1))
			  {
			  
			  //alert ('Selected Tenure more than the lease period')
			  $(".TERMINYR").show();
			  return
			  //$(this).val('')
			  }	 
		  else{
			  $(".TERMINYR").hide();
			  return
		  }
				}
				else{
			 var MxTnr = parseInt($("#DMY3").val().split('|')[7]);
			  if(parseInt(TermYears)>parseInt(MxTnr)){
				  alert("TERM (In Years) breach max tenure limit");
				  $('.TERYears').val('');
				  return
			  }
				}
			  
		 	});
 
  $(document).on("click", ".DELETESCHEME" , function() {
         	 GETDELETESCHEME()
			 $("#DeletePopup").click(); 
          	 })  

		//Credit Chenges Start

$(document).on("click", ".MarginMGST", function(){
		
		var Row=$(this).closest(".DYNROW").attr("data-row")
		//$(".UGSTDBfields").val('');
		$(this).closest(".DYNROW").find("[name=UGST_PRCSID]").val($("#RCCM_PRCSID").val());
		$(this).closest(".DYNROW").find("[name=UGST_ACTIVITYID]").val($("#RCCM_ACTIVITYID").val());
		$(this).closest(".DYNROW").find("[name=UGST_DTCREATED]").val($("#RCCM_DTCREATED").val());
		$(this).closest(".DYNROW").find("[name=UGST_CREATEDBY]").val($("#RCCM_CREATEDBY").val());
		$(this).closest(".DYNROW").find("[name=UGST_DTMODIFIED]").val($("#RCCM_DTMODIFIED").val());
		$(this).closest(".DYNROW").find("[name=UGST_MODIFIEDBY]").val($("#RCCM_MODIFIEDBY").val());
		$(this).closest(".DYNROW").find("[name=UGST_CUSID]").val($(this).closest(".DYNROW").find("[name=EGCD_CUSID]").val());
		
		$(this).closest(".DYNROW").find("[name=UGST_CUSNAMEM]").val($(this).closest(".DYNROW").find("[name=EGCD_CUSNAME]").val());
		$(this).closest(".DYNROW").find("[name=UGST_SCHEMEID]").val($(".FormPageMultiTab li.active").attr("id"));
    		//$("#EGCD_CUSNAMEM"+Row).val($("#EGCD_CUSNAME"+Row).val())
			//$("#SCHEMEID"+Row).val($(".FormPageMultiTab li.active").attr("id"))
		$("#Hiddenrow").val($(this).closest(".DYNROW").attr("data-row"));
 		
	}) 
$(document).on("click", "#MarginSmt", function(){
	var htmlzz=$(this).closest('.DYNROW')
	var tblzz = $(this).attr("data-aria").split("|")[0];
	var prfxzz = $(this).attr("data-aria").split("|")[1];
	var DATAzz = $(this).attr("data-aria").split("|")[2];
	var MGSTTableXML= TxtGridsubmitdata_V4("MGSTTable","MGST_","ICEG_",htmlzz);
	$(this).closest('.DYNROW').find("[name = UGST_UPDTGSTXML]").val(MGSTTableXML);
	var CHKresultzz=FormDataToDB_V1(tblzz,prfxzz,$(htmlzz).find("[name="+DATAzz+"]").val()+"|"+$(htmlzz).find("[name="+DATAzz+"]").val()+"|" + DATAzz,htmlzz);
			if(CHKresultzz == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
			var MnthGst=0;
			var CurrntMnthGst;
			for(var m = 0;m<$($(this).closest('.DYNROW').find("[name=MGSTTable]").find('.tbody')).find(".tbodytr").length;m++){
				CurrntMnthGst=0;
				CurrntMnthGst = $($($($(this).closest('.DYNROW').find("[name=MGSTTable]").find('.tbody')).find(".tbodytr")[m]).find(".tbodytrtd")[1]).find('input').val().replace(/,/g,'');
				if(CurrntMnthGst == ""){
					 CurrntMnthGst = 0;
				 }
				 if(CurrntMnthGst == NaN){
					 CurrntMnthGst = 0;
				 }
				 MnthGst = MnthGst+parseFloat(CurrntMnthGst);
			}
			$(this).closest('.DYNROW').find("[name=EGCD_TOTGSTMT2]").val(CURCommaSep(parseFloat(MnthGst).toFixed(2)));
			$(this).closest('.DYNROW').find("[name=EGCD_TOTGSTMT2]").next().addClass("active");
			CompMT3ApprisdIncm(this);
	 /* var html=$(this).closest('.DYNROW')						
					var RowCnt=$(this).closest(".DYNROW").attr("data-row")	
                 var MarginGSTDT = TxtGridsubmitdata_V4("MGSTTable","MGST_","ICEG_",html);
				 
				 if($("#ICEG_MARGINGST").val()=="")
				 {
				 $("#ICEG_MARGINGST").val(MarginGSTDT)
				 }
				 else
				 {
					 MarginGSTDT=$("#ICEG_MARGINGST").val()+MarginGSTDT
					 
					 MarginGSTDT=MarginGSTDT.replaceAll('<Data>','').replaceAll('</Data>','')
					 $("#ICEG_MARGINGST").val('')
					 $("#ICEG_MARGINGST").val('<Data>'+MarginGSTDT+'</Data>')
				 }
				 
				/*var BALANCEDATA=["LIP|"];
				 for (j=0;j<BALANCEDATA.length;j++)
					 {
					   var BNKDATA=BALANCEDATA[j].split("|")[0];
				       var row = $("." + BNKDATA).find(".DYNROW").length;
				       for (i=0;i<row;i++)
				       {
				         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
				         $(BnkHtml).find('[name = ICEG_MARGINGST]').val(UPDBALANCE)
				       }
				     } */
					 $(".MarginClose").click();
});
//Credit Chenges End
	
			 
		 $(document).on("click", ".DELDONE" , function() {
			 
			 var SchemeDELID=""
	         var Delealert="Delete Selected Scheme"	 
              var SCHEMELENGTH= $("#SCHEMEDEL").val().length
              Activetaplength=$(".FormPageMultiTab li").length - 1
				var xmlScheme=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHEMID")
                var LONDETSCHEME =$(xmlScheme).find('LODE_SCHEME').text()
               
              if(SCHEMELENGTH==Activetaplength)
             		{
                       alert("One Scheme Mandatory")
             		}
             	else
             		{
                     for(i=0;i<SCHEMELENGTH;i++)
					 {
					 var UNIQID=$("#SCHEMEDEL").val()[i]
                     if(LONDETSCHEME==UNIQID)
						 {
                          Delealert ='Selected Scheme will be deleted, Unselected will be Considered as default Scheme in the application'
						 }
					 
                     }
                
             		if(confirm(Delealert) == true)
         		      {
                    	 for(i=0;i<SCHEMELENGTH;i++)
						 {
						 var UNIQID=$("#SCHEMEDEL").val()[i]
						 SchemeDELID=SchemeDELID+','+UNIQID
					//	 var xml=UI_getdata($("#PrcsID").val(),"",UNIQID,"","","LSW_SCLEARSCHEMEDATA");
                         }
                    	 
                    	 var DelSquence=SchemeDELID
                    	 var xml=UI_getdata($("#PrcsID").val(),"",DelSquence,"","","LSW_SCLEARSCHEMEDATA");
                       }
                    }
              $(".close").click(); 
           //   location.reload(true);
              
              
              if($(".FormPageMultiTab li.active").prev().attr('id')==undefined&&$(".FormPageMultiTab li.active").next().attr('id')==undefined)
	 			{
              location.reload(true);
	 			}
		 		 else  if($(".FormPageMultiTab li.active").prev().attr('id')==undefined&&$(".FormPageMultiTab li.active").next().attr('id')=="")
	 		    {
		 	     location.reload(true);
	 		    }
	    	   else  if($(".FormPageMultiTab li.active").next().attr('id')!="")
		 	   {
		 		$(".FormPageMultiTab li.active").next().click()
		 	    }

	 		else
	 			{
	 			$(".FormPageMultiTab li.active").prev().click()
           	}
              
			 }) 		 
			 	 
			 
			 
			 

	$(document).on("click", ".FormSave1" , function() {
	//$('.FormSave').on('click', function() {
		
		 $("#"+$(".FormSave").attr('id')).click();
		 MndtryChk = CheckDocMndtry("Table3","ClosureMndtry","Existing Loan");
		  
		  if(MndtryChk != "")
			{
			   alert(MndtryChk);
			   return;
			}
			/*if($(".FormPageMultiTab li.active").attr("id")=="S00004"){
				var tbllen = $("#TableRR").find('.tbodytr').length;
				/*if(tbllen==0){
					alert("Kindly enter atleast one details in Rent Recievables Grid")
					return;
				}*/
				/*var val="";
				for(var i =0;i<tbllen;i++){
					for(var j=1;j<2;j++)
					{
						if(j!=3 && j != 5)
						{
						val = $($($("#TableRR").find('.tbodytr')[i]).find('.tbodytrtd')[j]).find('input').val()
						if(val == "")
						{
							alert("Kindly fill all the details in Rent Recievables Grid")
							return
						}
						}
						else{
							val = $($($("#TableRR").find('.tbodytr')[i]).find('.tbodytrtd')[j]).find('input:checked').val()
							if(val == "" || val== undefined)
							{
								alert("Kindly fill all the details in Rent Recievables Grid")
								return
							}
						}
						
					}
					
				}
			}*/
			
			//Credit Policy Change Strt********
			if($(this).attr("data-form") == "EXLON" && $('.FormPageMultiTab li.active').attr("id")=="S00002")
			{
				var MndtryChkRTR = ChkMandatoryFlds("RXLMMndtry");
			
				if(MndtryChkRTR == "Mandatory")
				{
				alert("Fill the Mandatory Fields / Document(s)");
				return false;
				}
			}
			//Credit Policy Change End********
		
			if($(this).text() == "Save & Next")
			{
				
				/*if(tbllen==0){
					alert("Kindly enter atleast one details in Rent Recievables Grid")
					return;
				}
				var val="";
				for(var i =0;i<tbllen;i++){
					for(var j=1;j<7;j++)
					{
						if(j!=3 && j != 5)
						{
						val = $($($("#TableRR").find('.tbodytr')[i]).find('.tbodytrtd')[j]).find('input').val()
						if(val == "")
						{
							alert("Kindly fill all the details in Rent Recievables Grid")
							return
						}
						}
						else{
							val = $($($("#TableRR").find('.tbodytr')[i]).find('.tbodytrtd')[j]).find('input:checked').val()
							if(val == "" || val== undefined)
							{
								alert("Kindly fill all the details in Rent Recievables Grid")
								return
							}
						}
						
					}
					
				}*/
			//var prfx = $(this).attr("data-aria").split("|")[1];
			//var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
			
			/*if(MndtryChk == "Mandatory")
				{
				  alert("Fill the Mandatory Fields");
				  return false;
				}
			MndtryChk=CheckDocMndtry("Table2","CAMMndtry","CAM Checklist")
			
			if(MndtryChk != "")
			{
			alert(MndtryChk);
			return;
			}*/
			}
			
		   var LoanAmt=$('.LoanAmt').val().replace(/,/g,'');
		   
		  if((LoanAmt==""||LoanAmt=="0")&&($(this).text()!="Save"))
			{
		       alert('Enter the Loan Sanction Amount')
		       return false
	     	}
			
				var LoanAmt=$('.LoanAmt').val().replace(/,/g,'');
				var EligbleAmt=$('.LoanAmt').val().replace(/,/g,'');
			if($('.FormPageMultiTab li.active').attr("id")=="S00001")
			{
			    var EligbleAmt=$("#FOIR_LOANPROP").val().replace(/,/g,'');
				
			}
			
			
			if($('.FormPageMultiTab li.active').attr("id")=="S00002")
			{
				var EligbleAmt=$("#FOGS_LOANPROPOSED").val().replace(/,/g,'');
			}
			
			
			if($('.FormPageMultiTab li.active').attr("id")=="S00004")
			{
				 var EligbleAmt=$("#CLTV_LOANELIGIBILITY").val().replace(/,/g,'');
			
			}
			
			
			if($('.FormPageMultiTab li.active').attr("id")=="S00005")
			{
				var EligbleAmt=$("#FLOW_LOANEGBLAKH").val().replace(/,/g,'');
				
			}
			
			if($('.FormPageMultiTab li.active').attr("id")=="S00006")
			{
			 var EligbleAmt=$("#ASST_LOANELIGIBIL").val().replace(/,/g,'');
				
			}
			
			
				if($('.FormPageMultiTab li.active').attr("id")=="S00007")
			{
				var EligbleAmt=$("#ASST_LOANELIGIBIL").val().replace(/,/g,'');
				
			}
			
			
			if($('.FormPageMultiTab li.active').attr("id")=="S00008")
			{
		        var EligbleAmt=$("#CITR_FINALLOAN").val().replace(/,/g,'');
		   }
			
			if($('.FormPageMultiTab li.active').attr("id")=="S00009")
			{
		         var EligbleAmt=$("#CITR_FINALLOAN").val().replace(/,/g,'');
				
			}
			
			
			if($('.FormPageMultiTab li.active').attr("id")=="S00010")
			{
			  var EligbleAmt=$("#CGST_LOANELIGIBIL").val().replace(/,/g,'');
				
			}
			
				if($('.FormPageMultiTab li.active').attr("id")=="S00011")
			{
				 var EligbleAmt=$("#CGST_LOANELIGIBIL").val().replace(/,/g,'');
			}
			
			
			if($('.FormPageMultiTab li.active').attr("id")=="S00012")
			{
			  var EligbleAmt=$("#CBBA_LNELIGI").val().replace(/,/g,'');
			}
			
			if($('.FormPageMultiTab li.active').attr("id")=="S00013")
			{
			  var EligbleAmt=$("#CBBA_LNELIGI").val().replace(/,/g,'');
			}
		
			if($('.FormPageMultiTab li.active').attr("id")=="S00003")
			{
			  var EligbleAmt=$("#SABB_LOANELIGH").val().replace(/,/g,'');
			}
		
		   if($('.FormPageMultiTab li.active').attr("id")=="S00014")
			{
			  var EligbleAmt=$("#ABBL_LOANEG").val().replace(/,/g,'');
			}

           if($('.FormPageMultiTab li.active').attr("id")=="S00015")
			{
			  var EligbleAmt=$("#FLOW_LOANEGBLAKH").val().replace(/,/g,'');
			}

           if($('.FormPageMultiTab li.active').attr("id")=="S00016")
			{
			  var EligbleAmt=$("#ASST_LOANELIGIBIL").val().replace(/,/g,'');
			}

             if($('.FormPageMultiTab li.active').attr("id")=="S00017")
			{
			  var EligbleAmt=$("#OUBL_MAXLOAELY").val().replace(/,/g,'');
			}
			
			  if($('.FormPageMultiTab li.active').attr("id")=="S00018")
			{
			  var EligbleAmt=$("#CRTR_ELIGIBLELNAMT").val().replace(/,/g,'');
			}
			
			
			 if($('.FormPageMultiTab li.active').attr("id")=="S00021")
			{
			  var EligbleAmt=$("#STML_LOANELIGIB").val().replace(/,/g,'');
			}
			
			 if($('.FormPageMultiTab li.active').attr("id")=="S00022")
			{
			  var EligbleAmt=$("#MPMI_VALUEI8").val().replace(/,/g,'');
			}
			
			 if($('.FormPageMultiTab li.active').attr("id")=="S00023")
			{
			  var EligbleAmt=$("#MPII_VALUEI7").val().replace(/,/g,'');
			}
			
		    if($('.FormPageMultiTab li.active').attr("id")=="S00024")
			{
			  var EligbleAmt=$("#TOMI_VALUEI6").val().replace(/,/g,'');
			}
			
			
			   if($('.FormPageMultiTab li.active').attr("id")=="S00025")
			{
			  var EligbleAmt=$("#TOII_VALUEI6").val().replace(/,/g,'');
			}
			
			  if($('.FormPageMultiTab li.active').attr("id")=="S00026")
			{
			  var EligbleAmt=$("#TIII_VALUEI6").val().replace(/,/g,'');
			}
			
			  if($('.FormPageMultiTab li.active').attr("id")=="S00027")
			{
			  var EligbleAmt=$("#EGCI_VALUEI7").val().replace(/,/g,'');
			}
			
			  if($('.FormPageMultiTab li.active').attr("id")=="S00028")
			{
			  var EligbleAmt=$("#ECII_VALUEI7").val().replace(/,/g,'');
			}
			if($('.FormPageMultiTab li.active').attr("id")=="S00032")
			{
			  var EligbleAmt=$("#CRSU_FINALLOANELIG").val().replace(/,/g,'');
			}
			if($('.FormPageMultiTab li.active').attr("id")=="S00031")
			{
			  var EligbleAmt=$("#NBNK_LOANEGBLAKH").val().replace(/,/g,'');
			}
			if(EligbleAmt=="")
			{
				alert ('Fill the Loan Eligibility Amount')
		    	return
			}
			
			if(parseFloat(LoanAmt)>parseFloat(EligbleAmt))
		    		{
		    		alert ('Loan Amount Sanction should not be greater than Loan Eligibility')
		    		return
		    		}
			
					
			$("#"+$(".FormSave").attr('id')).click();		
			
	if($(this).text() == "CAM Generate")
		{
			
		  if($("#DMY7").val().split("|")[8] != "HE02")
			 {	
			var ReqLnAmt = $("#DMY3").val().split('|')[0];
			if(ReqLnAmt=="")
				{
				ReqLnAmt=0;
				}
			var ElgAmt = $('.LoanAmt').val();
			if(ElgAmt == ""){
				ElgAmt=0;
			}
			if(parseFloat(ReqLnAmt)<parseFloat(ElgAmt)){
				alert($('.LoanAmt').closest('.form-row').find('.GryShd').find('input').val()+" is more than Requested Loan Amount");
				return;
			}
			var CHCKLTV = $('.CHCKLTV').val();
			if(CHCKLTV == ""){
				CHCKLTV=0;
			}
			var op = UI_getdata($('.FormPageMultiTab li.active').attr("id"),$("#PrcsID").val(),"","","","LSW_SGETMAXLTVFRSCHM")
			if(parseFloat(CHCKLTV)>parseFloat($(op).find("LTV").text())){
				alert($('.CHCKLTV').closest('.form-row').find('.GryShd').find('input').val()+" should be less than "+$(op).find("LTV").text()+"%");
				return;
				
			}
			if($("#CAM").val() =="")
			        {
			        	$("#Save1").click();
			        	$("#CAM").val('Yes')
			        }
					if(($("#ISELGBLTYCHECKED").val() =="0")&&($('.FormPageMultiTab li.active').attr("id")=="S00006" || $('.FormPageMultiTab li.active').attr("id")=="S00001" || $('.FormPageMultiTab li.active').attr("id")=="S00005"
					|| $('.FormPageMultiTab li.active').attr("id")=="S00008" || $('.FormPageMultiTab li.active').attr("id")=="S00004" || $('.FormPageMultiTab li.active').attr("id")=="S00009"))
					{
						alert("Click Eligibility Before Save.")
						return
					}
			 }
					var CAMDATA=""
			/*if($(".FormPageMultiTab li.active").attr("id")=="S00002" || $(".FormPageMultiTab li.active").attr("id")=="S00004"){*/
				var fld = document.getElementsByClassName('LoanAmt');
			
			var LoanCMPRFLDCls=$('.LoanCMPRFLD');
			var CMpr1="";
			var CMpr2="";
			for(var i=0;i<LoanCMPRFLDCls.length;i++){
				if(i==0){
				CMpr1=LoanCMPRFLDCls[i].value.replace(/,/g,'');
				}
				else{
					CMpr2=LoanCMPRFLDCls[i].value.replace(/,/g,'');
				}
			}
			 CAMDATA=LoanAmtChk(fld[0],CMpr1,CMpr2)
			/*}*/
			
			
		if(CAMDATA == "")
				{	
		var xml=UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"","","","LSW_SCHKCAMGENERATESTATUS")
	
	      var RESULT=$(xml).find('RESULT').text()

		if(RESULT != "YES")
		{
	    var Alert2=''
		var nameArr = RESULT.split(',')
         k=nameArr.length
		 for(i=0;i<k;i++)
		 {
			var Alert1= nameArr[i]
			var Alert2 = Alert2 +'\r\n'+Alert1
		 }
		   alert('Complete the below Vendors to Generate the CAM \r\n'+Alert2)
		   return false;
		}	
			
		var HARDSTP = UI_getdata($("#PrcsID").val(),"CAM","","","","LSW_SOVERALLSTAGVALDT ");
			if($(HARDSTP).find("RESULT").text() != "")
			{
				 alert('Complete the below Mandatory actionables \r\n'+$(HARDSTP).find("RESULT").text())
				return;
			}
		}
		 var LoanAmt=$(".LoanAmt").val()	
			if((LoanAmt==""||LoanAmt=="0")&&($(this).text()!="Save"))
			{
		       alert('Enter the Loan Sanction Amount')
		       return false
	     	}
			else
			{
		           $("#ICEG_CAMBUTTON").val('YES')
			 }
		}

			var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];

           // var ELIGBLESCHEME = TxtGridsubmitdata_V2("ELIGHSCHEME","FCEB_","ICEG_","FCEBDBfields"); 
			//   AssignGridXmltoField("ICEG_FINCSCHEM", ELIGBLESCHEME)			
				
			var CHKresult=FormDataToDB(tbl,prfx,$("#RCCM_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);
			if(CHKresult == "Fail")
	   		{
	   		  alert("Submission Failed");
	   		   return false;			
	   		}
			else
			{
			  if($(this).text() == "CAM Generate")
	          {
		 if($("#DMY15").val()=='Active')
           {
			var SCHEMEID = $("#RCCM_UNIQUID").val();
			 var PRCSID1 = $("#PrcsID").val();
			 var RECEIPTNO=""

			 $.ajax({
			   url: "/TPLSW/ANALYTICS",
			   type: 'POST',
			   data: {PRCSID:PRCSID1,PFNO:SCHEMEID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
			   async:true,
			  // dataType: 'json',
			  // contentType:'application/json',
			  
			   success: function(stm){        
			  // var obj = JSON.parse(JSON.stringify(stm))
			    if (stm == "")
			    {
			      alert("Analytics Failed");
			      return false;    
			    }
				else  if(stm.split("|")[0] == "No Data" )
				{
					alert(stm.split("|")[3]);
					return false;
				}
			    else  if(stm.split("|")[0] == "SUCCESS")
			    {
			      alert('Credit Scoring done');
		        var xml=UI_getdata($("#PrcsID").val(),$("#RCCM_UNIQUID").val(),"","","","LSW_SGETCREDITANALYSDATA")
	
	           if($(xml).find('CREDITSCORE').text() != "")
	              {
		            $("#CreditAnalyticsST").show();
	              }
	           else
	              {
		             $("#CreditAnalyticsST").hide();
	              }
	$("#CRSCORE").text($(xml).find('CREDITSCORE').text())
    $("#CRD").text($(xml).find('CREDITDECISION').text())
	$("#CRR1").text($(xml).find('CREDITRESONI').text())
	$("#CRR2").text($(xml).find('CREDITRESONII').text())
	$("#CRR3").text($(xml).find('CREDITRESONIII').text())
	$("#CLSCORE").text($(xml).find('CLUSTERSCORE').text())
	$("#CLD").text($(xml).find('CLUSTERDECISION').text())
	$("#CLR1").text($(xml).find('CLUSTERRESONI').text())
	$("#CLR2").text($(xml).find('CLUSTERRESONII').text())
	$("#CLR3").text($(xml).find('CLUSTERRESONIII').text())
	
	         GentrateCAM()	
			    }
			    else
			    {
			    	alert("Analytics Failed");
				    return false;   	
			    }  
			 },
			 error: function(stm) {
			    alert("Analytics Failed");
			    return false; 
			  }
			 }); 		
	 }
	 else
	 {
			   GentrateCAM()
	 }			   
		       
			  }
			}
			if($(this).text() == "Save & Next")
	 {
	  /* if(FormName=="EXLON"){
			if($("#headingThree3").find('a').attr("data-load")=="Yes"){
				$(".ELIGHSCHEME").empty();
				$("#BTNELIGBLEDATA").click();
				$(".LIP").empty();
			   }
			}	  */
	 if($(this).attr("data-form")=="CAM")
	 {
               if($("#DMY7").val().split("|")[8] != "HE02")
			   {
				   if(EmpowermentFlg == "Active"){
			var PFNO1 = "4";
			 var PRCSID1 = $("#PrcsID").val()+"|CAM";
			 //var PRCSID1 = $("#PrcsID").val();
			 var RECEIPTNO=""

			 $.ajax({
			   url: "/TPLSW/OPADeviations",
			   type: 'POST',
			   data: {PRCSID:PRCSID1,OPANO:PFNO1,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
			   async:false,
			  // dataType: 'json',
			  // contentType:'application/json',
			  
			   success: function(stm){        
			  // var obj = JSON.parse(JSON.stringify(stm))
			    if (stm == "")
			    {
			      alert("OPA Integration Failed");
			      return false;    
			    }
			    else  if(stm == "Success")
			    {
			      var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SREFRESHEMPOW");
			      NXTTAB(this);
			    }
			    else
			    {
			    	alert("OPA Integration Failed");
				    return false;   	
			    }  
			 },
			 error: function(stm) {
			    alert("OPA Integration Failed");
			    return false; 
			  }
			 });
			   }
			   else
			   {
				   $.ajax({
					   url: "/TPLSW/internalBRE",
					   type: 'POST',
					   data: {prcsid:$("#PrcsID").val(),procName:"LSW_SBUSINESSRULESENGINE",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
					   async:false,
					   success: function(stm){  
					   
					   if (stm == "")
					   {
						   alert("Empowerment Failed");
							return false;
					   }
					   else  if(stm == "Success~Success")
						{
						  var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SREFRESHEMPOW");
						  NXTTAB(this);
						}
						else
						{
							alert("Empowerment Failed");
							return false;   	
						}  
						},
						 error: function(stm) {
							alert("Empowerment Failed");
							return false; 
						  }
					 });  
			   }
	      }
	     }
	// NXTTAB(this);
	    }
			if(FormName=="EXLON"){
			if($("#headingThree3").find('a').attr("data-load")=="Yes"){
				$(".ELIGHSCHEME").empty();
				$(".LIP").empty();
				$("#BTNELIGBLEDATA").click();
			}
			}
			if($("#VERTICAL").val()=="MSME")
			 {
			  var RES=UI_getdata($("#PrcsID").val(),"","","","","LSW_SPPFCOMPUT")
			  var ROI =$(RES).find('UPDROI').text()			 
			  var Tenu=$(RES).find('TENURE').text()
			  var Sanamt=$(RES).find('SANLNAMT').text()
			  
			  var RESEMI=UI_getdata(ROI,Tenu,Sanamt,"","","LSW_SGETEMI_DATA") 
			  var EMI=$(RES).find('UPDEMI').text()
			  var UPDEMI=UI_getdata($("#PrcsID").val(),EMI,"","","","LSW_SPPFCOMPUT")
			  }
	if($(this).text() == "Save & Next")
	 {
       NXTTAB(this);	
	 } 
		

		});
	
$("#SchemeAdd").on('click', function() {
		
		var licount = $(".FormPageMultiTab li").length;
		var value = $(".FormPageMultiTab").attr('title');
		var Formactive = $(".FormPageTab").find("li.active").attr("id");		  
		var MainActive = $(".FormMainTabs").find("li.active").attr("id");
		
		
		value=$('#SCHEME').val();
		CusType=$('#SCHEME').val();
		
		var DataID = $('#SCHEME').val();
		
		var DataValue = $('#SCHEME').find('option[value="' + DataID + '"]').text(); 
		
			
		licount="";
		
		var MndtryChk = ChkMandatoryFlds("COAPMndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		
		var Constitution="";
		var CIN = "";
		//var ExistAppNo=$("#ExsCusID").val();
		var Prcsid=$("#PrcsID").val();
		var ActivityID=$("#ActvID").val();
		var UserID=$("#LogUsr").val();
		//var xml=UI_getdata(ExistAppNo,Prcsid,ActivityID,UserID,"","LSW_SGETCUSTOMERDETAILS")
		
		 RedirectURL = window.location.origin+"/TPLSW/"+$(".FormPageTab").find("li.active").attr("value")+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+Formactive+"&PrMs10="+MainActive+"&PrMs8="+value+"|"+licount+"|"+"Add|"+DataID+"|"+DataValue+"&PrMs7="+CusType+"|"+Constitution+"|"+CIN;
		 $(location).attr('href',encodeURI(RedirectURL));
		
		
	});
$(document).on("change", ".ReCheckElg", function() {
	$("#ISELGBLTYCHECKED").val('0');
});
//Delete Income 


$(document).on("click", ".DELETINCOME", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	
	var html=$(this).closest(".DYNROW");
	var rowCount = $(this).closest(".DYNROW").attr('data-row')
	
	 var TableID = "";

	 TableID =$(this).closest("table").attr("id")
	 
	 
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
 

 $($("#"+TableID).find('tbody tr')[0]).find('input').focusout()
 
$("#ISELGBLTYCHECKED").val('0');
} 

if($("#"+TableID).find("tbody tr td").text()=="No data available in table")
{

$("#EGCD_FINOTHYRTOT"+rowCount).val(parseFloat(0))
RecompApprInc1(html);
}

})
$(document).on("click", ".DELETEASSET", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	
	var html=$(this).closest(".DYNROW");
	var rowCount = $(this).closest(".DYNROW").attr('data-row')
	
	 var TableID = "";

	 TableID =$(this).closest("table").attr("id")
	 
	 
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
 

 $($("#"+TableID).find('tbody tr td')[2]).find('input').focusout()
 
}

if($("#"+TableID).find("tbody tr td").text()=="No data available in table")
{

  $("#EGCD_IAPTOTASSTCR"+rowCount).val(parseFloat(0))
  RecompApprInc1(html);
}
 
})

//Add Another Income Start


//Delete Firm One 


$(document).on("click", ".DELETFIRMONE", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	
	var rowCount = $(this).closest(".DYNROW").attr('data-row')
	
	 var TableID = "";

	 TableID =$(this).closest("table").attr("id")
	 
	 
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
 

 $($("#"+TableID).find('tbody tr')[1]).find('input').focusout()
 
//$("#ISELGBLTYCHECKED").val('0');
} 
/*
if($("#"+TableID).find("tbody tr td").text()=="No data available in table")
{

$("#EGCD_FINOTHYRTOT"+rowCount).val(parseFloat(0))

}*/

})

//Delete Firm Two


$(document).on("click", ".DELETFIRMTWO", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	
	var rowCount = $(this).closest(".DYNROW").attr('data-row')
	
	 var TableID = "";

	 TableID =$(this).closest("table").attr("id")
	 
	 
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
 

 $($("#"+TableID).find('tbody tr td')[1]).find('input').focusout()
 
//$("#ISELGBLTYCHECKED").val('0');
} 
/*
if($("#"+TableID).find("tbody tr td").text()=="No data available in table")
{

$("#EGCD_FINOTHYRTOT"+rowCount).val(parseFloat(0))

}*/

})


//Add Another Income Start

$(document).on("click", ".AddOthrIncome", function() {
	
	var TableID = $(this).attr("data-table");

var HTML="";

	
		var html1 = $($(this).closest(".DYNROW"));

		var table = $("#"+TableID).DataTable();
		 
		var rowNode = table
		    .row.add( [ '', '', '','','', '', '','','', '', '', '', '', '',''] )
		    .draw()
		    .node();
		
		
		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
		
		// For Data Population in Grid Columns Start
		
		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
		$($(HTML).find('td')[6]).text($(html1).find("[name=EGCD_CUSID]").val());			
		$($(HTML).find('td')[7]).text($(html1).find("[name=EGCD_UNIQUID]").val());
		
		// For Data Population in Grid Columns End
		
		// Field Initialisation Start
        
		$(HTML).addClass("tbodytr");
		$(HTML).find("td").addClass("tbodytrtd");
		
		// Dropdown
		                   
		$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
		
		$('#'+TableID+' .Gridmdb-select').material_select();               

		// Calendar

		var $input = $(document).find('.Griddatepicker').pickadate({
		    //editable: 'true',
			format: 'dd/mm/yyyy',
			selectYears: 150,
			selectMonths: true
			
		})
		.on("change", function() {
		  
			
			   $(this).prev().val($(this).val());
			   $(this).prev().focus();
		   
		});

		//Field Initialisation End


});


// Add Another Income End




//Add Another Property Start

$(document).on("click", "#AddPropertyTable", function() {
	
	var TableID = $(this).attr("data-table");

    var HTML="";

	
		var html1 = $($(this).closest(".DYNROW"));

		var table = $("#"+TableID).DataTable();
		 
		var rowNode = table
		    .row.add( ['', '', '','','', '', '', '', '','','', '', '','','','','','',''] )
		    .draw()
		    .node();

		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
		
		// For Data Population in Grid Columns Start
		   value = $("#"+TableID).find("tbody tr").length;
		   
	        HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);		
	        
	    $($(HTML).find('td')[0]).text(value);	    
		$($(HTML).find('td')[12]).text($("#ICEG_UNIQUID").val());			
		
		// For Data Population in Grid Columns End
		
		// Field Initialisation Start
        
		$(HTML).addClass("tbodytr");
		$(HTML).find("td").addClass("tbodytrtd");
		
		// Dropdown
		                   
		$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
		
		$('#'+TableID+' .Gridmdb-select').material_select();               

		// Calendar

		var $input = $(document).find('.Griddatepicker').pickadate({
		    //editable: 'true',
			format: 'dd/mm/yyyy',
			selectYears: 150,
			selectMonths: true
			
		})
		.on("change", function() {
		  
			
			   $(this).prev().val($(this).val());
			   $(this).prev().focus();
		   
		});

		//Field Initialisation End
});

//For MicroLAP Start

    $(document).on("click", ".AddPrOthrIncome", function() {
	
	var TableID = $(this).attr("data-table");

        var HTML="";

		var html1 = $($(this).closest(".DYNROW"));

		var table = $("#"+TableID).DataTable();
		 
		var rowNode = table
		    .row.add( [ '', '', '','','', '', '','','', '', ''] )
		    .draw()
		    .node();
		
		
		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
		
		// For Data Population in Grid Columns Start
		
		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
		$($(HTML).find('td')[2]).text($(html1).find("[name=EGCD_CUSID]").val());			
		$($(HTML).find('td')[3]).text($(html1).find("[name=EGCD_UNIQUID]").val());
		
		// For Data Population in Grid Columns End
		
		// Field Initialisation Start
        
		$(HTML).addClass("tbodytr");
		$(HTML).find("td").addClass("tbodytrtd");
		
		// Dropdown
		                   
		$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
		
		$('#'+TableID+' .Gridmdb-select').material_select();               

		// Calendar

		var $input = $(document).find('.Griddatepicker').pickadate({
		    //editable: 'true',
			format: 'dd/mm/yyyy',
			selectYears: 150,
			selectMonths: true
			
		})
		.on("change", function() {
		  
			
			   $(this).prev().val($(this).val());
			   $(this).prev().focus();
		   
		});
});


    $(document).on("click", ".AddPrOneOthrIncome", function() {
	
	var TableID = $(this).attr("data-table");

        var HTML="";

		var html1 = $($(this).closest(".DYNROW"));

		var table = $("#"+TableID).DataTable();
		 
		var rowNode = table
		    .row.add( [ '', '', '','','', '', '','','', '', ''] )
		    .draw()
		    .node();
		
		
		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
		
		// For Data Population in Grid Columns Start
		
		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
		$($(HTML).find('td')[2]).text($(html1).find("[name=EGCD_CUSID]").val());			
		$($(HTML).find('td')[3]).text($(html1).find("[name=EGCD_UNIQUID]").val());
		
		// For Data Population in Grid Columns End
		
		// Field Initialisation Start
        
		$(HTML).addClass("tbodytr");
		$(HTML).find("td").addClass("tbodytrtd");
		
		// Dropdown
		                   
		$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
		
		$('#'+TableID+' .Gridmdb-select').material_select();               

		// Calendar

		var $input = $(document).find('.Griddatepicker').pickadate({
		    //editable: 'true',
			format: 'dd/mm/yyyy',
			selectYears: 150,
			selectMonths: true
			
		})
		.on("change", function() {
		  
			
			   $(this).prev().val($(this).val());
			   $(this).prev().focus();
		   
		});
});


$(document).on("click", ".AddPrOthrIncomez", function() {
	
	var TableID = $(this).attr("data-table");

        var HTML="";

		var html1 = $($(this).closest(".DYNROW"));

		var table = $("#"+TableID).DataTable();
		 
		var rowNode = table
		    .row.add( [ '', '', '','','', '', '','','', '', ''] )
		    .draw()
		    .node();
		
		
		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
		
		// For Data Population in Grid Columns Start
		
		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
		$($(HTML).find('td')[2]).text($(html1).find("[name=EGCD_CUSID]").val());			
		$($(HTML).find('td')[3]).text($(html1).find("[name=EGCD_UNIQUID]").val());
		
		// For Data Population in Grid Columns End
		
		// Field Initialisation Start
        
		$(HTML).addClass("tbodytr");
		$(HTML).find("td").addClass("tbodytrtd");
		
		// Dropdown
		                   
		$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
		
		$('#'+TableID+' .Gridmdb-select').material_select();               

		// Calendar

		var $input = $(document).find('.Griddatepicker').pickadate({
		    //editable: 'true',
			format: 'dd/mm/yyyy',
			selectYears: 150,
			selectMonths: true
			
		})
		.on("change", function() {
		  
			
			   $(this).prev().val($(this).val());
			   $(this).prev().focus();
		   
		});
});

$(document).on("click", ".AddAssetTable", function() {
	
	var TableID = $(this).attr("data-table");

        var HTML="";

		var html1 = $($(this).closest(".DYNROW"));

		var table = $("#"+TableID).DataTable();
		 
		var rowNode = table
		    .row.add( [ '', '', '','','', '', '','','', '', '',''] )
		    .draw()
		    .node();
		
		
		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
		
		// For Data Population in Grid Columns Start
		
		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
		$($(HTML).find('td')[3]).text($(html1).find("[name=EGCD_UNIQUID]").val());			
		$($(HTML).find('td')[4]).text($(html1).find("[name=EGCD_CUSID]").val());
		
		// For Data Population in Grid Columns End
		
		// Field Initialisation Start
        
		$(HTML).addClass("tbodytr");
		$(HTML).find("td").addClass("tbodytrtd");
		
		// Dropdown
		                   
		$('#'+TableID+' .Gridmdb-select').material_select("destroy");    
		
		$('#'+TableID+' .Gridmdb-select').material_select();               

		// Calendar

		var $input = $(document).find('.Griddatepicker').pickadate({
		    //editable: 'true',
			format: 'dd/mm/yyyy',
			selectYears: 150,
			selectMonths: true
			
		})
		.on("change", function() {
		  
			
			   $(this).prev().val($(this).val());
			   $(this).prev().focus();
		   
		});
});



// For MicroLAP End



// Add Another Property End


//Credit Changer Start


$(document).on("change", ".ExpAmt", function(){
	var ExLonAmt=$("#DMY3").val().split("|")[3]
	var CurLonAmt=$(this).val().replace(/,/g,'')
	if($("#DMY5").val().split("|")[2]=="Waiver")
      {
		  
	    if(parseFloat(ExLonAmt)<parseFloat(CurLonAmt))
	      {
		    alert('Loan Amount can not be greater than Sanctioned Amount Rs.'+ExLonAmt)
		    $(this).val($("#DMY3").val().split("|")[3])
	      }
	    else
		  {
			if($("#DMY7").val().split("|")[14]=='PY')
			{				
		   if(confirm('Sanctioned Loan Amount is Rs. '+ExLonAmt+', are you sure to change to Rs.'+CurLonAmt+' and re-generate premium amount') == true)
         	     {
					 var xml=UI_getdata($("#PrcsID").val(),CurLonAmt,"","","","LSW_SCHKSUMAMT")
			     }
			   else
			     {
			         $(this).val($("#DMY3").val().split("|")[3])	
			     }
			}
			else
			{
				 if(confirm('Sanctioned Loan Amount is Rs. '+ExLonAmt+', are you sure to change to Rs.'+CurLonAmt) == true)
         	     {
					 var xml=UI_getdata($("#PrcsID").val(),CurLonAmt,"","","","LSW_SCHKSUMAMT")
			     }
			   else
			     {
			         $(this).val($("#DMY3").val().split("|")[3])	
			     }
			}
		  }
	  }
});


//Credit Chages End


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
	
})


$("#BTNELIGBLEDATA").on('click', function() {
	
	
	/*	if($("#ICEG_UNIQUID").val()=="")
		{
		  $("#ICEG_UNIQUID").val(Scheme)
		}*/
	
		if($("#DMY7").val().split('|')[0]=="Existing Loans" || $("#DMY7").val().split('|')[0]=="Registered Mortgage"
		|| $("#DMY7").val().split('|')[0] =="GECL 3.0" || $("#DMY7").val().split('|')[0] =="GECL Additional 10%" || $("#DMY7").val().split('|')[0] =="GECL 2.0")
		{
			if($("#DMY7").val().split("|")[8] != "HE02")
             {
		        $(".RMEL").show();
		        $(".LTV").show();
	         }
			 else
			 {
				 $(".RMEL").show();
		         $(".LTV").hide();
			 }
		}
		else if($("#DMY7").val().split('|')[0]=="Purchase of property")
		{
			$(".RMEL").show();
		    $(".LTV").hide();
		}
		else
		{
			$(".RMEL").hide();
			$(".LTV").hide();
		}

	
	var tbl = $("#headingThree3 a").attr("data-aria").split("|")[0];	
	var prfx = $("#headingThree3 a").attr("data-aria").split("|")[1];
	var DATA = $("#headingThree3 a").attr("data-aria").split("|")[2];
	var CusID =$("#headingThree3 a").attr("data-aria").split("|")[2];
	var CusID1 =$("#headingThree3 a").attr("data-aria").split("|")[3];
	
	  if($("#"+CusID).val() == "")
		{
		  $("#"+CusID).val($("#"+CusID1).val())
		}
	  if  (DATA != "")
		{
			DATA = $("#"+DATA).val()+"|" + DATA;
		}

	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	SchemeBasealid();
	 getExpouserAmt();
	 
  	 
	
	var Scheme=$("#RCCM_UNIQUID").val();
	
	if(Scheme=="S00006" || Scheme=="S00008")
	{
		$(".SalNotes").show();
	}
	else
	{
	   $(".SalNotes").hide();	
	}
	
	
	
	if(Scheme=="S00002")
		{
		   $(".RTR").show()
		   $(".BRLR").show()
		   $("#BTNRTRELIGGRD").click();
		   $("#BTNRTRNORMSGRD").click();
		   LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME");
		}
	else if(Scheme=="S00004")
		{
		  $(".RTR").hide();
		  $(".RR").show();
		  $(".BRLR").show();
		  $("#BTNRRELIGGRD").click();
		  LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
		  
		  //Pharse 3 Credit Start		
	  
		LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val(),"LIP","EGCDDBfields","LSW_SGETELIGBLCUSDETL");	
		 $(".GSL").show()
		 $(".SENP").hide()
		 $(".SAL").hide()
		$(".RIIncome").show();
		$(".NRIIncome").hide();
		
		//Pharse 3 Credit End
		  
		  HndlRRValdtn();
		  $("#ELIGCHK").show();
		}
	else if(Scheme=="S00007"  || Scheme=="S00003")
		{
		  $(".RTR").hide()
		  $(".GSL").hide()
		  $(".BRLR").show()
		  LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
		}
	else
		{
			/*if($("#RCCM_UNIQUID").val()=="S00001"){
		$("#EGCD_PROFILE").attr("value","SENP");
	}
	if($("#RCCM_UNIQUID").val()=="S00005"){
		$("#EGCD_PROFILE").attr("value",$("#RCCM_UNIQUID").val());
	}
	if($("#RCCM_UNIQUID").val()=="S00006"){
		$("#EGCD_PROFILE").attr("value",$("#RCCM_UNIQUID").val());
	}*/
		LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val(),"LIP","EGCDDBfields","LSW_SGETELIGBLCUSDETL");	
		 
		LoadMultiData("",$("#PrcsID").val(),$("#RCCM_UNIQUID").val()+'|'+ViewRInavtivePGFlg,"ELIGHSCHEME","FCEBDBfields","LSW_SGETELIGHSCHEME"); 
		 
		$("#BTNFINCELIGBGRD").click();

		
		 
		 $(".RTR").hide()
		 $(".GSL").show()
		 $(".BRLR").show()
		
		 var DATA=["LIP|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ELIGBLITY=DATA[j].split("|")[0];
	     var row = $("." + ELIGBLITY).find(".DYNROW").length;
	        for (i=0;i<row;i++)
	        {
	           var HTML =	 $("." + ELIGBLITY).find(".DYNROW")[i];
			   var Profile = $(HTML).find("[name='EGCD_PROFILE']").val();
			   var ProfileI = $(HTML).find("[name='EGCD_PROFILEI']").val();
			   var CUSID = $(HTML).find("[name='EGCD_CUSID']").val();
			   $(HTML).find(".SEPCALC").hide();
			   if(ProfileI=="Salaried" )
			   {
			    $(HTML).find(".SAL").show();
			    $(HTML).find(".NSAL").hide();
			    $(HTML).find(".SENP").hide();
				$(HTML).find(".SBS").show();
			   }
			   else if(Profile=="S00006" && ProfileI=="Salaried")
			   {
				$(HTML).find(".SAL").hide();
			    $(HTML).find(".NSAL").hide();
			    $(HTML).find(".SENP").hide();
				$(HTML).find(".SBS").hide();
				
			   }
			   else if(Profile=="S00005" && ProfileI=="Salaried")
			   {
				$(HTML).find(".SAL").hide();
			    $(HTML).find(".NSAL").hide();
			    $(HTML).find(".SENP").hide();
				$(HTML).find(".SBS").hide();
			   }
			   else if(Profile=="S00008")
			   {
				$(HTML).find(".SAL").hide();
                $(HTML).find(".NSAL").show();
                $(HTML).find(".SENP").show();
			    $(HTML).find(".SBS").show();
				$(HTML).find(".PAT").show();
			   }
			   else if(Profile=="S00009")
			   {
				   $(HTML).find(".SENP").hide();
				   $(HTML).find(".IAP").show();
				   $(".IAP1").show();
				   
			   }
		   else
			  {
			   $(HTML).find(".SAL").hide();
               $(HTML).find(".NSAL").show();
               $(HTML).find(".SENP").show();
			   $(HTML).find(".SBS").show();
			   
			   if($(".FormPageMultiTab li.active").attr("id")=="S00001" && Profile == "SEP"){
				   $(HTML).find(".SEPCALC").show();
			   }
			  }
		//Credit Change Strt********			  
	        
			getIndustry(HTML,i)
			
			if($(".FormPageMultiTab li.active").attr("id")=="S00006" && ViewRInavtivePGFlg != "View"){
				var op = UI_getdata($("#PrcsID").val(),CUSID,"","","","LSW_SGETELIGCRSUM")
				if($(op).find("ELIGCRSUM").text() != "")
				{
					$(HTML).find("[name='EGCD_ELIGHCRSUMMT1']").val(CURCommaSep(parseFloat($(op).find("ELIGCRSUM").text()).toFixed(2)));
				}
				else{
					$(HTML).find("[name='EGCD_ELIGHCRSUMMT1']").val('0');
				}
				$(HTML).find("[name='EGCD_ELIGHCRSUMMT1']").next().addClass('active')	
				//CompMT1ApprisdIncm($(HTML).find("[name='EGCD_ELIGHCRSUMMT1']"));
			}
			//Credit Change End********
			}
	      }
		 
		//For Eligibility Grid Total Calc Start
			
		 EligibilitySPTotCalc();
		 
		//For Eligibility Grid Total Calc End
		 
		}
	

	 
	 if($(".FormPageMultiTab li.active").attr("id")=="S00004"){
	$($("#TableRR").find("th")[5]).text('CONSIDERED RENTAL INCOME %')
	$($("#TableRR").find("th")[7]).text('ITR / CHEQUE')
	}
	 
	 if($(".FormPageMultiTab li.active").attr("id")=="S00001" || $(".FormPageMultiTab li.active").attr("id")=="S00008" || $(".FormPageMultiTab li.active").attr("id")=="S00005" || $(".FormPageMultiTab li.active").attr("id")=="S00006"){
		$("#ELIGCHK").show();
		if($(".FormPageMultiTab li.active").attr("id")=="S00006"){
			for(var i=0;i<$('input[name=EGCD_FINYRTOT]').closest('.DYNROW').find('table[name=INCMTable]').length;i++)
			{
				/*var val = $($($($('input[name=EGCD_FINYRTOT]').closest('.DYNROW').find('table[name=INCMTable]')[i]).find('.tbodytr')[0]).find('.tbodytrtd')[0]).find('input').val()
				var pattern = /Gross/;
				var exists = pattern.test(val);
				if(exists) {
					$($('input[name=EGCD_FINYRTOT]').closest('.DYNROW')[i]).find('input[name=EGCD_FINYRTOT]').closest('.form-row').hide()
				}
				else{
					$($('input[name=EGCD_FINYRTOT]').closest('.DYNROW')[i]).find('input[name=EGCD_FINYRTOT]').closest('.form-row').show()
				}*/
				$($('input[name=EGCD_FINYRTOT]').closest('.DYNROW')[i]).find('input[name=EGCD_FINYRTOT]').closest('.form-row').hide()
			}
		}
	}
	else{
		if($(".FormPageMultiTab li.active").attr("id")=="S00004")
		{
			 $("#ELIGCHK").show();
		}
		else if($(".FormPageMultiTab li.active").attr("id")=="S00009")
		{
			 $("#ELIGCHK").show();
		}
		else
		{
		$("#ELIGCHK").hide();
		}
	}
	
	/*if($(".FormPageMultiTab li.active").attr("id")=="S00006"){
		for(var i=0;$('input[name=EGCD_MULTIPLIER]').parent().prev().length;i++){
			$($('input[name=EGCD_MULTIPLIER]').parent().prev()[i]).find('label').text('Multiplier')
		}
	}*/
	RecompRecal();
});

/*
//EXST LOAN CLSR ON CHNAGE STRT
$(document).on("change", ".RTRCONSIDR", function(){
	if($("input[name='"+$(this).attr('name')+"']:checked").val()=="No")
		{
		$(this).closest('.tbodytrtd').next().next().find('input[type=text]').show()
		$(this).closest('.tbodytrtd').next().find('span').show()
		}
	else{
		$(this).closest('.tbodytrtd').next().next().find('input[type=text]').hide()
		$(this).closest('.tbodytrtd').next().find('span').hide()
	}
	 });
//EXST LOAN CLSR ON CHNAGE END*/

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

	

