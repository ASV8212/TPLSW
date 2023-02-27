$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	//$("#ACSP_LOANID").val($(".FormPageMultiTab li.active").attr("id"));
    $("#ACSP_PRCSID").attr("value", $("#PrcsID").val());
    $("#ACHP_PRCSID").attr("value", $("#PrcsID").val());
    //FormDataFromDB("LSW_TLYFINSRNCHDR", "ALIH_", "ALIHDBfields", "");
    //LoadMultiData("",$("#PrcsID").val(),"","ApproveNote2","ALIHDBfields","LSW_SGETAPPLNWSCRSSELL");
    var XML=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETLOANDTL")
	$("#ACSP_LOANID").append($(XML).find("RESULT").html())
	$("#ACHP_LOANID").append($(XML).find("RESULT").html())
	
	
	
    GetPropertyAddr();
    GETINSURERNAME();
    $("#ACSP_SUMASSURD").val(CURCommaSep($("#DMY3").val().split("|")[3]))
	$("#ACSP_LONTENRINYR").val(CURCommaSep($("#DMY3").val().split("|")[4]))
	
	$("#ACHP_SUMINSRD").val(CURCommaSep($("#DMY3").val().split("|")[3]))
	$("#ACHP_LONTNR").val(CURCommaSep($("#DMY3").val().split("|")[4]))
	
	$("#ACSP_MSUMINSRD").val(CURCommaSep($("#DMY3").val().split("|")[3]))
	
	 
    
    
    
    LoadMultiData("",$("#PrcsID").val(),$(".FormPageMultiTab li.active").attr("id"),"ApproveNote2","ACHPDBfields","LSW_SGETHEALTHPEC"); 
    
	$("#headingOne1").find('.AFormaccordion').click();
	
	//$("#BTNPropertyInsurance").click();
	
    var DATA=["ApproveNote2|"];

    for (j=0;j<DATA.length;j++){
    	var ValuationID=DATA[j].split("|")[0];
    	var row = $("." + ValuationID).find(".DYNROW").length;
    	for (i=0;i<row;i++){
    		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
    		if($(HTML).find("[name='ACHP_SUMINSRD']").val() == "")
    		{   

    			$(HTML).find("[name='ACHP_SUMINSRD']").val(CURCommaSep($("#DMY3").val().split("|")[3]))
    			$(HTML).find("[name='ACHP_LONTNR']").val($("#DMY3").val().split("|")[4])
    			//$(HTML).find("[name='ACHP_SUMINSRD']").attr('disabled',true);
    			
    		}
			var Applicable= $(HTML).find("[name='ACHP_APPCONSIDER']").val()
                 if(Applicable=="Yes")
                	 {
                	   ShowInsurLink(HTML,'HealthPac',"Load")
                     } 
			CheckGender(HTML,'',"Load")
    	}
      }
    CheckApplicable('','Load');
	
    
    	$(document).on("click", ".DELETECROSSPRO" , function() {


	 	 if(confirm('Delete Employment Details') == true)
	 		{


	 	 	   $(this).closest('.DYNROW').remove()	
	 	 		var k= $('.BankDetail1').find('.DYNROW').length
	 	 		for(i=0;i<k;i++)
	 	 			{
	 	 			//('.BankDetail1').find('.DYNROW')[i]
	 	 		    var	j=i+1
	 	            $($('.BankDetail1').find('.DYNROW')[i]).find('#PROPTXTHDR').text('Property '+j)
	 	 			}
	 		}
	 })
	 
  
  $(document).on("change", ".COMSUMINSUR", function() {
	 	    
	  var SUMINSURE=$(this).val()
	  
	   SUMINSURE=SUMINSURE.replace(/,/g, "")
	  if(parseInt(SUMINSURE)<100000 ||parseInt(SUMINSURE)>12500000)
		  {
		  alert('Minimum Sum Insured Amount -100000.00 Maximum Sum Insured  Amount - 12500000.00')
		  $(this).val('')
		  }

	 	});
    
	$(document).on("change", ".ClrPremium", function() {
		
		var Count=$(this).attr('CNT')
		if(parseInt(Count)>=0)
		{
		if(Count=="0")
		{
			Count
		}
		else
		{
			Count=Count-1
		}
		var Html=$(".ApproveNote2").find(".DYNROW")[Count]
		var Premium=$(this).attr('data')
		var Data=$(Html).find("#"+Premium).val().replace(/,/g, "")
		
		/*if(Data.indexOf(',') != -1)
		{
			 Data=$(Html).find("#"+Premium).val().replace(/,/g, "")
		}*/
		
		if(Data!="")
		{
			$(Html).find("#"+Premium).val('');
		}
		}
		
	});
    
    
		  $(document).on("change", ".Tenure", function() {
		  //$('.IsIFSCFields').change(function () {
		 	    
		  var TermYears=$(this).val()
		  
		  var LoanTenure=$("#DMY3").val().split("|")[4]
		  if(parseInt(TermYears)>parseInt(LoanTenure))
			  {
			  alert('Policy Tenure Should not be greater then Loan Tenure')
			  $(this).val('')
			  }

		 	});
    
 RECOMMENDHIDE();
    /**Grid Trigger Start **/
    //$("#BTNHEALTHCOMBOGRD").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/

    $(document).on("click", ".FormSave", function() {

        var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];
        var PAGE = $(this).attr("data-aria").split("|")[3];

        
        if(PAGE=="PROINSUR")
        	{
        if ($(this).text() == "Save & Generate") {
			
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields / Document(s)s");
                return false;
            }
			if($('input:radio[name=ACSP_GENDR]')[0].checked == false && $('input:radio[name=ACSP_GENDR]')[1].checked == false && $('input:radio[name=ACSP_GENDR]')[2].checked == false)
			{
				alert('Fill the Gender');
				return false;
			}
            }
        	}
        
        if(PAGE=="COAPPINSUR")
    	{
			if($(this).attr('data-form')=="Property Insurance"  && $(this).text() == "Save")
		     {
		         
			    var MndtryChk = ChkMandatoryFlds_V1("AMPIMndtry",html);

		      if(MndtryChk == "Mandatory")
			    {
			     alert("Fill the Mandatory Fields / Document(s)");
			      return false;
			     }
		    }

        if(($(this).attr('data-form')=="Health & Pac Insurance" && $(this).text() == "Save" || $(this).text() == "Generate Health Premium" || $(this).text() == "Generate Pac Premium"))
		{
		
		var MndtryChk = ChkMandatoryFlds_V1("ACHPMndtry",html);

		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		if($(html).find("[name='ACHP_APPCONSIDER']").val() == "Yes")
		{
			if($(html).find('input:radio[name=ACHP_NOMINEGENDR]')[0].checked == false && $(html).find('input:radio[name=ACHP_NOMINEGENDR]')[1].checked == false && $(html).find('input:radio[name=ACHP_NOMINEGENDR]')[2].checked == false)
			{
				alert('Fill the Gender');
				return false;
			}
		}
		if($(html).find("[name='ACHP_APPCONSIDER']").val() == "Yes")
		{
			var RCnt=$(this).closest('.DYNROW').attr('data-row')
			/* var MndtryChk =CheckDocMndtryCombo('Table7'+RCnt,'Mndtry','')
			 if(MndtryChk != "")
			{
			   alert(MndtryChk);
			   return;
			} */
		}
		}
    	}
        
        if($(this).attr('data-form')=="Health & Pac Insurance")	
	     {
			  var ACHP_COMBOGRD = TxtGridsubmitdata_V3("Table7","AMPI_","ACHP_");
				 	var ACHP_FAIMILYGRD = TxtGridsubmitdata_V3("Table8","HPFA_","ACHP_");
			    var BALANCEDATA=["ApproveNote2|"];
				 for (j=0;j<BALANCEDATA.length;j++)
					 {
					   var BNKDATA=BALANCEDATA[j].split("|")[0];
				       var row = $("." + BNKDATA).find(".DYNROW").length;
				       for (i=0;i<row;i++)
				       {
				         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
				         $(BnkHtml).find('[name = ACHP_COMBOGRD]').val(ACHP_COMBOGRD)
						  $(BnkHtml).find('[name = ACHP_FAIMILYGRD]').val(ACHP_FAIMILYGRD)
				        // SchemeBasedCAM(HTML,"CACL_INCCONSID"+(parseInt([i])+1));
				       }
				     }
					 
					 var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
                   
				   if(CHKresult == "Fail")
		              {
		                alert("Submission Failed");
		                return false;	
			      	  }	
					  $(".loader1").show();
          if($(html).find("[name='ACHP_APPCONSIDER']").val() == "Yes")
		    {
			   var Health="";
			    var Pac="";
        	var op=UI_getdata("Health Insurance","",$(this).closest('.DYNROW').find("input[name='ACHP_CUSID']").val(),$("#PrcsID").val(),"","LSW_SVALDTINSBFRCALC")
            
            if($(op).find('HARDSTOP').text()=="Y")
            	{
            	  alert($(op).find('MSG').text());
            	  //return false;
				  Health="Failed"
                }
           // else
            //	{
            	 if($(op).find('MSG').text() != "ALLOW" && $(op).find('HARDSTOP').text()!="Y")
       		      {
       		        alert($(op).find('MSG').text())
       		      }
            	 
            	 var xml=UI_getdata("Personal Accidental Cover (PAC)","",$(this).closest('.DYNROW').find("input[name='ACHP_CUSID']").val(),$("#PrcsID").val(),"","LSW_SVALDTINSBFRCALC")
                 
                 if($(xml).find('HARDSTOP').text()=="Y")
                 	{
                 	  alert($(xml).find('MSG').text());
                 	  //return false;
					  Pac="Failed"
                 	}
                // else
               	  //{
               	  
               	  if($(xml).find('MSG').text() != "ALLOW" && $(op).find('HARDSTOP').text()!="Y")
             		   {
             		      alert($(xml).find('MSG').text())
             		   }
   			var TablID = "Table7"+$(this).closest('.DYNROW').attr("data-row")
   			var tbllen = $("#"+TablID).find('.tbodytr').length
   			var subtyp="",Tenr="0",SumInsr="0",PARAM5=""
   			for(var i = 0;i<tbllen;i++){
   				subtyp+=$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()+'|'
   				Tenr+=$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[1]).find('select').val()+'|'
   				if(subtyp=="Health Insurance|"){
   				Tenr+=$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[2]).find('select').val()+'|' //.replace(/,/g, "")
   				}
   				else{
   					Tenr+=$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[2]).find('input').val()+'|' //.replace(/,/g, "")
   				}
   				
   			}
   			if($(this).text()!="Save")
			{
				var Hit=$(this).attr('data-hit')
			var xml=UI_getdata("Health and Pac","","","","","LSW_SCHKINTGSTATUS")
			 
                         if($(xml).find('STATUS').text()=="Active" && Health !="Failed" && Pac != "Failed")
		    	            {
								$(".loader2").show();
								
   var param1=$("#PrcsID").val()
   var param2=$(this).closest('.DYNROW').find("[name=ACHP_CUSID]").val();
   var param3="|New|"+$(this).attr('data-hit');
   var param4="";
   var param5="";
   var param6="";
   var param7="9";
   var spname1="LSW_SGETTOKENGENDATA";
   var spname2="LSW_SMSINSGETPREMIMDATA";
		var OP = "Success"
		
		 var HPFlg=$(this).closest('.DYNROW').find("[name=ACHP_HPFLAG]").attr('id');
			$.ajax({	
			  url: "/TPLSW/MSInsrncePrmeium",
			  data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,param6: param6,param7: param7,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
           async: true,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
					 // alert(xml2);
			    	//  var obj = JSON.parse(xml2)
			    	  if(xml2.split('|')[1]!="")
			    	  {
						  $(".loader2").fadeOut("slow")
			    	  	for(var i = 0;i<tbllen;i++){
   				if($($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()=="Health Insurance" && Hit=="Health")
				{
   					$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val(CURCommaSep(xml2.split('|')[1]))
					$("#"+HPFlg).val('Y')
                      alert("Online \n\r Health Insurance Premium Amount Rs."+CURCommaSep(xml2.split('|')[1]))					
   				}
   				else if($($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()=="Personal Accidental Cover (PAC)" && Hit=="Pac")
				{
				     $($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val(CURCommaSep(xml2.split('|')[2]))
					 $("#"+HPFlg).val('Y')
					    alert("Online \n\r Personal Accidental Cover (PAC) Premium Amount Rs."+CURCommaSep(xml2.split('|')[2]))	
   				}
   			}
			       var ACHP_COMBOGRD = TxtGridsubmitdata_V3("Table7","AMPI_","ACHP_");
				 	var ACHP_FAIMILYGRD = TxtGridsubmitdata_V3("Table8","HPFA_","ACHP_");
			    var BALANCEDATA=["ApproveNote2|"];
				 for (j=0;j<BALANCEDATA.length;j++)
					 {
					   var BNKDATA=BALANCEDATA[j].split("|")[0];
				       var row = $("." + BNKDATA).find(".DYNROW").length;
				       for (i=0;i<row;i++)
				       {
				         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
				         $(BnkHtml).find('[name = ACHP_COMBOGRD]').val(ACHP_COMBOGRD)
						  $(BnkHtml).find('[name = ACHP_FAIMILYGRD]').val(ACHP_FAIMILYGRD)
				        // SchemeBasedCAM(HTML,"CACL_INCCONSID"+(parseInt([i])+1));
				       }
				     }
					 
					 var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
                   
				   if(CHKresult == "Fail")
		              {
		                alert("Submission Failed");
		                return false;	
			      	  }
			    	  }
			    	  else
			    	  {
						  $(".loader2").fadeOut("slow")
			    	  	
			    	  	 alert("Online \n\r Premium Amount Generation Failed")
			    	  		 return false;
			    	  }
			      },
			      error: function (xml2)
			      {
			    	  alert("Online \n\r Premium Amount Generation Failed")
					  return false;
			    		
			      }
			  });
		 
		     
		                       // var RTNINSVAL=GetHelthPac(this,TablID,tbllen)
							}
                        else 
						 {
   			/*var op = UI_getdata($(this).attr('data-form'),$("#PrcsID").val(),$("#ACHP_CUSID1").val(),subtyp,Tenr,"LSW_SOFFLNINSCALC")
   			
   			$(this).closest('.CardNS').find("[name=ACHP_INSAMOUNT]").val(CURCommaSep($(op).find("TOT").text()));
   			$(this).closest('.CardNS').find("[name=ACHP_INSAMOUNT]").next().addClass('active');
   			for(var i = 0;i<tbllen;i++){
   				if($($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()=="Health Insurance"  && Hit=="Health"){
					
					if(Health=="Failed")
					{
						$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val('0')
					}
					else
					{
   					$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val(CURCommaSep($(op).find("HEALTH").text()))
					alert("Offline \n\r Health Insurance Premium Amount Rs."+CURCommaSep($(op).find("HEALTH").text()))
					}
   				}
   				else if($($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()=="Personal Accidental Cover (PAC)" && Hit=="Pac"){
					if(Pac=="Failed")
					{
						$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val('0')
					}
					else
					{
   					   $($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val(CURCommaSep($(op).find("PAC").text()))
					   alert("Offline \n\r Personal Accidental Cover (PAC) Premium Amount Rs."+CURCommaSep($(op).find("PAC").text()))	
					}
   				}
   			}*/
			
			var ACHP_COMBOGRD = TxtGridsubmitdata_V3("Table7","AMPI_","ACHP_");
				 	var ACHP_FAIMILYGRD = TxtGridsubmitdata_V3("Table8","HPFA_","ACHP_");
			    var BALANCEDATA=["ApproveNote2|"];
				 for (j=0;j<BALANCEDATA.length;j++)
					 {
					   var BNKDATA=BALANCEDATA[j].split("|")[0];
				       var row = $("." + BNKDATA).find(".DYNROW").length;
				       for (i=0;i<row;i++)
				       {
				         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
				         $(BnkHtml).find('[name = ACHP_COMBOGRD]').val(ACHP_COMBOGRD)
						  $(BnkHtml).find('[name = ACHP_FAIMILYGRD]').val(ACHP_FAIMILYGRD)
				        // SchemeBasedCAM(HTML,"CACL_INCCONSID"+(parseInt([i])+1));
				       }
				     }
					 
					 var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
                   
				   if(CHKresult == "Fail")
		              {
		                alert("Submission Failed");
		                return false;	
			      	  }
		            } 
			}
		  } 
         // } 
         }
        	
        	/*  var xml=UI_getdata($(this).closest('.DYNROW').find("input[name='ALIH_INSPTNR']:checked").val(),"",$(this).closest('.DYNROW').find("input[name='ACHP_CUSID']").val(),$("#PrcsID").val(),"","LSW_SVALDTINSBFRCALC")
              
              if($(xml).find('HARDSTOP').text()=="Y")
              	{
              	  alert($(xml).find('MSG').text());
              	  return false;
              	}
              else
            	  {
            	  
            	  if($(xml).find('MSG').text() != "ALLOW")
          		   {
          		      alert($(xml).find('MSG').text())
          		   }
			var TablID = "Table7"+$(this).closest('.DYNROW').attr("data-row")
			var tbllen = $("#"+TablID).find('.tbodytr').length
			var subtyp="",Tenr="0",SumInsr="0",PARAM5=""
			for(var i = 0;i<tbllen;i++){
				subtyp+=$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()+'|'
				Tenr+=$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[1]).find('select').val()+'|'
				if(subtyp=="Health Insurance|"){
				Tenr+=$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[2]).find('select').val().replace(/,/g, "")+'|'
				}
				else{
					Tenr+=$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[2]).find('input').val().replace(/,/g, "")+'|'
				}
				
			}
			var op = UI_getdata($($(this).closest('.CardNS').prev().find('a')).text(),$("#PrcsID").val(),$("#ACHP_CUSID1").val(),subtyp,Tenr,"LSW_SOFFLNINSCALC")
			
			$(this).closest('.CardNS').find("[name=ACHP_INSAMOUNT]").val(CURCommaSep($(op).find("TOT").text()));
			$(this).closest('.CardNS').find("[name=ACHP_INSAMOUNT]").next().addClass('active');
			for(var i = 0;i<tbllen;i++){
				if($($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()=="Health Insurance"){
					$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val(CURCommaSep($(op).find("HEALTH").text()))
				}
				else if($($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[0]).text()=="Personal Accidental Cover (PAC)"){
					$($($("#"+TablID).find('.tbodytr')[i]).find('.tbodytrtd')[3]).find('input').val(CURCommaSep($(op).find("PAC").text()))
				}
			}
           }
		}
        
        
		}*/
        
		if($(this).attr('data-form')=="Property Insurance" && $(this).text()=="Save")
		{
			 //var CHKresult=FormDataToDB(tbl, prfx, '');
			  $(html).find('[name = AMPI_LOANID]').val($("#ACSP_LOANID").val());
			 var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
                   
                            if(CHKresult == "Fail")
   		                     {
   		                      alert("Submission Failed");
   		                        return false;			
   		                     }
			
			if(($("#ACSP_MPREMINCLDGST").val()!="0") && ($("#ACSP_MPREMINCLDGST").val() !=""))
			{
			
            var xml=UI_getdata("Property Insurance","",$("#ACSP_INSURERNAME").val(),$("#PrcsID").val(),"","LSW_SVALDTINSBFRCALC")
            
            if($(xml).find('HARDSTOP').text()=="Y")
            	{
            	  alert($(xml).find('MSG').text());
            	  return false;
            	}
            else
          	  {
            	if($(xml).find('MSG').text() != "ALLOW")
        		{
        		  alert($(xml).find('MSG').text())
        		}
        	var xml=UI_getdata("Property","","","","","LSW_SCHKINTGSTATUS")
			 
                         if($(xml).find('STATUS').text()=="Active")
		    	            {
								
								$(".loader2").show();	
   var RTNVAL="";	
   var param1=$("#PrcsID").val()
   var param2=$(this).closest('.DYNROW').find("[name=AMPI_INSURERNAME]").val();
   var param3=$(this).closest('.DYNROW').find("[name=AMPI_LOCATN]").val()+"|New|"+$(this).attr('data-hit');
   var param4="";
   var param5="";
   var param6="";
   var param7="9";
   var spname1="LSW_SGETTOKENGENDATA";
   var spname2="LSW_SMSINSGETPREMIMDATA";
		var OP = "Success"
	var PrimFld=$(this).closest('.DYNROW').find("[name=AMPI_PRMINCLDGST]").attr('id')
	 var PropFlg=$(this).closest('.DYNROW').find("[name=AMPI_PROFLAG]").attr('id');
			$.ajax({
			  url: "/TPLSW/MSInsrncePrmeium",
			  data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,param6: param6,param7: param7,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
           async: true,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
					  //alert(xml2);
			    	//  var obj = JSON.parse(xml2)
			    	  if(xml2.split('|')[0]!="")
			    	  {
						 $(".loader2").fadeOut("slow")	
			    	  	$("#"+PrimFld).val(CURCommaSep(Math.floor(xml2.split('|')[0])));
			  		    $("#"+PrimFld).next().addClass('active');
						$("#"+PropFlg).val('Y');
			    	    alert("Online \n\r Property Premium Amount is Rs."+ CURCommaSep(Math.floor(xml2.split('|')[0])));
						
						var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
                   
                            if(CHKresult == "Fail")
   		                     {
   		                      alert("Submission Failed");
   		                        return false;			
   		                     }
			    	  }
			    	  else
			    	  {
						 $(".loader2").fadeOut("slow")	
			    	  	//alert("Premium Amount Gentration Failed");
			    	  	 alert("Online \n\r Premium Amount Generation Failed")
						 return false;
			    	  		
			    	  }
			      },
			      error: function (xml2)
			      {
			    	  alert("Premium Amount Generation Failed")
			    		  return false;
			      }
			  });
								
								//var RTNINSVAL=GetPropertyPriem(this)
								 
							}
                         else 
						 {
			/*var op = UI_getdata($(this).attr('data-form'),$("#PrcsID").val(),$("#ACHP_CUSID1").val(),$(this).closest('.DYNROW').find("[name=AMPI_APPRUSAGE]").val(),$(this).closest('.DYNROW').find("[name=AMPI_PLCYTNR]").val()+'|'+$(this).closest('.DYNROW').find("[name=AMPI_SUMINSRD]").val().replace(/,/g, ""),"LSW_SOFFLNINSCALC")
			var Applicable=$(this).closest('.DYNROW').find("[name='AMPI_PROAPPLICABLE']").is(':checked')
             if(Applicable==true)
            	 {
			     $(this).closest('.DYNROW').find("[name=AMPI_PRMINCLDGST]").val(CURCommaSep($(op).find("PROPINS").text()));
				  alert("Offline \n\r Property Premium Amount is Rs."+ CURCommaSep($(op).find("PROPINS").text()));
				 }*/
				 
				       //var CHKresult=FormDataToDB(tbl, prfx, '');
					   var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
                   
                            if(CHKresult == "Fail")
   		                     {
   		                      alert("Submission Failed");
   		                        return false;			
   		                     }
				 
						 }
			//$("#ACSP_MPREMINCLDGST").val(CURCommaSep($(op).find("MANDTRY").text()));
          	  }
			}
			else
			{
				alert('To genterate property insurance premium, Chola group hospital premium should be genterated.')
				return false;
			}
			
		}
		else if($(this).attr('data-form')=="Property Insurance" && $(this).text()=="Save & Generate")
		{
			/*var CHKresult=FormDataToDB(tbl, prfx, '');
                            if(CHKresult == "Fail")
   		                     {
   		                      alert("Submission Failed");
   		                        return false;			
   		                     }
			var xml=UI_getdata("Hospital cash","",$("#ACSP_INSURERNAME").val(),$("#PrcsID").val(),"","LSW_SVALDTINSBFRCALC")
            
            if($(xml).find('HARDSTOP').text()=="Y")
            	{
            	  alert($(xml).find('MSG').text());
				  $("#ACSP_MPREMINCLDGST").val('0');
				  $("#ACSP_MPOLCYTNR").val('0')
				  $(this).closest('.card123').find("[name=AMPI_PRMINCLDGST]").val('0')
            	  return false;
            	}
            else
          	  {
            	if($(xml).find('MSG').text() != "ALLOW")
        		{
        		  alert($(xml).find('MSG').text())
        		}
        	
			    // $("#ACSP_MPOLCYTNR").val('3')
			      /* if($("#ACSP_MPREMINCLDGST").val()=="" || $("#ACSP_MPREMINCLDGST").val()=="0")
				    {
			           var op = UI_getdata($(this).attr('data-form'),$("#PrcsID").val(),$("#ACHP_CUSID1").val(),"Mandatory coverage details","","LSW_SOFFLNINSCALC")
			               //$(this).closest('.DYNROW').find("[name=AMPI_PRMINCLDGST]").val(CURCommaSep($(op).find("PROPINS").text()));
			             $("#ACSP_MPREMINCLDGST").val(CURCommaSep($(op).find("MANDTRY").text()));
			        }*
					
          	  }*/
			  var CHKresult=FormDataToDB(tbl, prfx, '');
                            if(CHKresult == "Fail")
   		                     {
   		                      alert("Submission Failed");
   		                        return false;			
   		                     }
		}  

   /*     if($(this).closest('.collapse').attr('id')=="collapseOne1")
        	{
        	var PROPDTL = TxtGridsubmitdata_V2("BankDetail1","AMPI_","ACSP_","AMPIDBfields");
			AssignGridXmltoField("ACSP_PROPDTL", PROPDTL)
        	}*/
          /*  if(PAGE=="COAPPINSUR")
        	{
        /*	var COMBOGRD = TxtGridsubmitdata_V1("Table7","AMPI_","ACHP_");
    		AssignGridXmltoField("ACHP_COMBOGRD", COMBOGRD);*/
        	   
        	/*   var COMBOGRD = TxtGridsubmitdata_V3("Table7","AMPI_","ACHP_");
				AssignGridXmltoField("ACHP_COMBOGRD", COMBOGRD);    //
				
				var ACHP_COMBOGRD = TxtGridsubmitdata_V3("Table7","AMPI_","ACHP_");
				 	var ACHP_FAIMILYGRD = TxtGridsubmitdata_V3("Table8","HPFA_","ACHP_");
			    var BALANCEDATA=["ApproveNote2|"];
				 for (j=0;j<BALANCEDATA.length;j++)
					 {
					   var BNKDATA=BALANCEDATA[j].split("|")[0];
				       var row = $("." + BNKDATA).find(".DYNROW").length;
				       for (i=0;i<row;i++)
				       {
				         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
				         $(BnkHtml).find('[name = ACHP_COMBOGRD]').val(ACHP_COMBOGRD)
						  $(BnkHtml).find('[name = ACHP_FAIMILYGRD]').val(ACHP_FAIMILYGRD)
				        // SchemeBasedCAM(HTML,"CACL_INCCONSID"+(parseInt([i])+1));
				       }
				     }		
        	}*/
		
        
          /* if(PAGE=="PROINSUR")
       	{ 
	
			
           var CHKresult=FormDataToDB(tbl, prfx, '');
           if(CHKresult == "Fail")
   		{
   		  alert("Submission Failed");
   		   return false;			
   		}
       	}
           
           if(PAGE=="COAPPINSUR")
       	{
        var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
        if (CHKresult == "Fail")
		{
		alert("Submission Failed");
		return false;			
		}
	   //else
	   // {
		//   alert("Form Saved Successfully")
         //}
       
       	} */
        // Tab Header Change End


         if ($(this).text() == "Save & Next") {
		 $("#Save").click();
            NXTTAB(this);
        }
    });
	
	$(document).on("click", ".MCFormSave", function() {
		var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];
        var PAGE = $(this).attr("data-aria").split("|")[3];
         var CHKresult=FormDataToDB(tbl, prfx, '');
           if(CHKresult == "Fail")
   		{
   		  alert("Submission Failed");
   		   return false;			
   		}
	});
	
	$(document).on("click", ".PIFormSave", function() {
		var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];
        var PAGE = $(this).attr("data-aria").split("|")[3];
		
			
		
        var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
        if (CHKresult == "Fail")
		{
		alert("Submission Failed");
		return false;			
		}
		
		
	});
	
	
	
    $("#BTNHEALTHDATA").on('click', function() {
    	GetCustomerName2();
    	FormDataFromDB("LSW_TCRSSELGLTHPAC", "ACHP_", "ACHPDBfields", "");
    	$("#BTNHEALTHCOMBOGRD").click();
    });
  //  $("#BTNPropertyInsurance").on('click', function() {
    	GetCustomerName1();
		
	
        FormDataFromDB("LSW_TCRSSELPROPTY", "ACSP_", "ACSPDBfields", "");
		
		if($("#DMY5").val().split("|")[2]!="Waiver" || $("#PrMs1").val()=="View")
		{
			var Input="View"
		}
		else
		{
			var Input=""
		}
		
        LoadMultiData("",$("#PrcsID").val(),Input+'|'+$(".FormPageMultiTab li.active").attr("id"),"BankDetail1","AMPIDBfields","LSW_SADPROPINSRNC");
		CheckGender1('Load')
        
		var DATA=["BankDetail1|"];

        for (j=0;j<DATA.length;j++){
        	var ValuationID=DATA[j].split("|")[0];
        	var row = $("." + ValuationID).find(".DYNROW").length;
        	for (i=0;i<row;i++){
        		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
        		{   
                 var Applicable= $(HTML).find("[name='AMPI_PROAPPLICABLE']").val()
                 if(Applicable=="true")
                	 {
                	   ShowInsurLink(HTML,'PolicyProperty',"Load")
                     }   
        		}
        	}
          } 
		
        CheckMDCDetl('','Load');
   // });
   
   if($("#DMY7").val().split('|')[0]=="Registered Mortgage")
	 {
		$(".ACHPDBfields").attr('disabled',true) ;
		$(".ACSPDBfields").attr('disabled',true);
		$(".AMPIDBfields").attr('disabled',true);
		$(".HPFADBfields").attr('disabled',true);
		$(".select-dropdown").attr('disabled',true);
	 }
});