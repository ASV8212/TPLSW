$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

    $("#ALIH_PRCSID").attr("value", $("#PrcsID").val());
    //FormDataFromDB("LSW_TLYFINSRNCHDR", "ALIH_", "ALIHDBfields", "");
    
	 if($("#DMY7").val().split('|')[0]=="Registered Mortgage")
	 {
		$(".ALIHDBfields").attr('disabled',true) ;
		$(".RadioMndtry").attr('disabled',true);
	 }
     
    GetCustomerName()
    
    
    LoadMultiData("",$("#PrcsID").val(),"","ApproveNote2","ALIHDBfields","LSW_SGETAPPLNWSCRSSELL");
    
	if($("#DMY7").val().split('|')[0]=="Registered Mortgage")
	 {
		$(".ALIHDBfields").attr('disabled',true) ;
		$(".RadioMndtry").attr('disabled',true);
		$(".select-dropdown").attr('disabled',true);
	 }
	
    var DATA=["ApproveNote2|"];

    for (j=0;j<DATA.length;j++){
    	var ValuationID=DATA[j].split("|")[0];
    	var row = $("." + ValuationID).find(".DYNROW").length;
    	for (i=0;i<row;i++){
    		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
    		if($(HTML).find("[name='ALIH_SUMASRD']").val() == "")
    		{   

    			$(HTML).find("[name='ALIH_SUMASRD']").val(CURCommaSep($("#DMY3").val().split("|")[3]))
    			$(HTML).find("[name='ALIH_LONTNR']").val($("#DMY3").val().split("|")[4])
    			$(HTML).find("[name='ALIH_SUMASRD']").attr('disabled',true);
	
    		}
			

			CheckGender(HTML,'',"Load")
			
			   var tble="Table2"+[i+1]
                CheckDocVal(tble,"RadioMndtry",HTML)
				ShowInsurLink(HTML,'',"Load")
    	}
      }
    
   var DATA=["ApproveNote2|"];
    for (j=0;j<DATA.length;j++){
    	var ValuationID=DATA[j].split("|")[0];
    	var row = $("." + ValuationID).find(".DYNROW").length;
    	for (i=0;i<row;i++){
    		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
    		
    		
    		/*if($(HTML).find("input[name='ALIH_INSPTNR']:checked").val() != "ICICI Bank")
    			{
    		      if($(HTML).find("input[name='ALIH_INSPTNR']:checked").val() != "undefined")
    		        {
    			      $(HTML).find('[name=ALIH_INSPTNR][value="HDFC Bank"]').prop('checked', true);
    			      $(HTML).find('[name=ALIH_INSPTNRHIDDEN]').val($("[name=ALIH_INSPTNR]:checked").val());
    		        }
    			}
				*/
				if($("#PrMs1").val()=="View")
				{
					if($(HTML).find("input[name='ALIH_INSPTNR']:checked").val()=="HDFC Bank")
					{
						if($(HTML).find('[name=ALIH_MNMFORM]').val()=="Madical")
						{
						$(HTML).find(".HDFCMRPT").show() 
						$(HTML).find(".HDFCNMRPT").hide()
						$(HTML).find(".ICICIRPT").hide()
						}
						else if($(HTML).find('[name=ALIH_MNMFORM]').val()=="Non-Madical")
						{
						$(HTML).find(".HDFCNMRPT").show()
						$(HTML).find(".HDFCMRPT").hide()
						$(HTML).find(".ICICIRPT").hide()
						}
					}
					else if($(HTML).find("input[name='ALIH_INSPTNR']:checked").val()=="ICICI Bank")
					{
						if( $(HTML).find("[name='ALIH_INSAMOUNT']").val() !="")
						{
						   $(HTML).find(".ICICIRPT").show() 
						}
						else
						{
					       $(HTML).find(".ICICIRPT").hide() 
						}
						$(HTML).find(".HDFCNMRPT").hide()
						$(HTML).find(".HDFCMRPT").hide()
					}
				}
				
					if($(HTML).find("input[name='ALIH_INSPTNR']:checked").val()=="HDFC Bank")
					{
				      if($(HTML).find('[name = ALIH_MNMFORM]').val()=="Madical")
						{
							$(HTML).find(".HDFC").hide()
                            $(HTML).find(".ICICI").hide() 							
							
						}
					 else if($(HTML).find('[name = ALIH_MNMFORM]').val()=="Non-Madical")
					    {
						     $(HTML).find(".HDFC").show()
                             $(HTML).find(".ICICI").hide() 							 
					    }
					}	
					
			if($(HTML).find('input:radio[name=ALIH_INSPTNR]')[0].checked == false && $(HTML).find('input:radio[name=ALIH_INSPTNR]')[1].checked == false)
              {
               // $(HTML).find('input:radio[name=ALIH_INSPTNR]')[1].checked = true;
             //   $(HTML).find('input:radio[name=ALIH_INSPTNR][value=ICICI Bank]').click();
			//	$(HTML).find('[name=ALIH_INSPTNRHIDDEN]').val($("[name=ALIH_INSPTNR]:checked").val());
				
				$(HTML).find('[name=ALIH_INSPTNR][value="ICICI Bank"]').prop('checked', true);
    			$(HTML).find('[name=ALIH_INSPTNRHIDDEN]').val($("[name=ALIH_INSPTNR]:checked").val());
              }
    	}
    }
    
    
    CheckApplicable('','Load')
	
	RECOMMENDHIDE()
	
	


    /**Grid Trigger Start **/
    //$("#BTNLYFINSRNC").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
	
	
	
	$(document).on("click", ".LIFormSave", function() {
		 var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];
		
		var ALIH_INSDTL = TxtGridsubmitdata_V6("Table2","APQA_","ALIH_",html);
		 
	    var BALANCEDATA=["ApproveNote2|"];
		 for (j=0;j<BALANCEDATA.length;j++)
			 {
			   var BNKDATA=BALANCEDATA[j].split("|")[0];
		       var row = $("." + BNKDATA).find(".DYNROW").length;
		       for (i=0;i<row;i++)
		       {
		         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
		         $(BnkHtml).find('[name = ALIH_INSDTL]').val(ALIH_INSDTL)
		        // SchemeBasedCAM(HTML,"CACL_INCCONSID"+(parseInt([i])+1));
		       }
		     }	

		 
	//	FormDataToDB(tbl, prfx, '');
		
		

		 var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
	        if (CHKresult == "Fail")
			{
			    alert("Submission Failed");
			    return false;			
			}
		   else
		    {
			  alert("Form Saved Successfully")
	        }
	})

    $(document).on("click", ".FormSave", function() {

        var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];



		if($(this).text() == "Save & Generate")
		{
		
		if($(html).find("[name='ALIH_APPCONSIDER']").val() == "Yes")
			{
				
			if($(html).find('input:radio[name=ALIH_INSPTNR]')[0].checked == false && $(html).find('input:radio[name=ALIH_INSPTNR]')[1].checked == false)
			{
				alert('Fill the Insurance Partner');
				return false;
			}
		
		var MndtryChk = ChkMandatoryFlds_V1("ALIHMndtry",html);

		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		
	//	var RowCount=$(this).attr("data-row").split("|")[0]

		    var row=html.attr("data-row")
	        var tble="Table2"+row

			MndtryChk=CheckDocMndtry(tble,"RadioMndtry","Questions")
		
		if(MndtryChk != "")
		{
		alert(MndtryChk);
		
		return;
		}
		
			}
		
		if($(html).find("[name='ALIH_APPCONSIDER']").val() == "Yes")
			{
					
			  if($(html).find('input:radio[name=ALIH_GENDR]')[0].checked == false && $(html).find('input:radio[name=ALIH_GENDR]')[1].checked == false && $(html).find('input:radio[name=ALIH_GENDR]')[2].checked == false)
			    {
				   alert('Fill the Gender');
				    return false;
			    }
			}

		}
        
	/*	var ALIH_INSDTL1 = TxtGridsubmitdata_V3("Table2","APQA_","ALIH_");
		AssignGridXmltoField("ALIH_INSDTL1", ALIH_INSDTL1);*/
	
		var ALIH_INSDTL = TxtGridsubmitdata_V6("Table2","APQA_","ALIH_",html);
		 
	    var BALANCEDATA=["ApproveNote2|"];
		 for (j=0;j<BALANCEDATA.length;j++)
			 {
			   var BNKDATA=BALANCEDATA[j].split("|")[0];
		       var row = $("." + BNKDATA).find(".DYNROW").length;
		       for (i=0;i<row;i++)
		       {
		         var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
		         $(BnkHtml).find('[name = ALIH_INSDTL]').val(ALIH_INSDTL)
		        // SchemeBasedCAM(HTML,"CACL_INCCONSID"+(parseInt([i])+1));
		       }
		     }	

		 
	//	FormDataToDB(tbl, prfx, '');
		
		

		 var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
	        if (CHKresult == "Fail")
			{
			alert("Submission Failed");
			return false;			
			}
		   else
		    {
			   alert("Form Saved Successfully")
	         }
       if($(html).find("[name='ALIH_APPCONSIDER']").val() == "Yes")
		{
		var op=UI_getdata($(this).closest('.DYNROW').find("input[name='ALIH_INSPTNR']:checked").val(),"Life Insurance",$(this).closest('.DYNROW').find("input[name='ALIH_CUSID']").val(),$("#PrcsID").val(),"","LSW_SVALDTINSBFRCALC")
	        
            if($(op).find('HARDSTOP').text()=="Y")
            	{
            	  alert($(op).find('MSG').text());
            	  return false;
            	}
            else
            	{
            	
            	if($(op).find('MSG').text() != "ALLOW")
            		{
            		  alert($(op).find('MSG').text())
					  $(html).find('[name = ALIH_MNMFORM]').val('Madical')
            		}
					else
					{
						$(html).find('[name = ALIH_MNMFORM]').val('Non-Madical')
					}
			 if($(this).closest('.DYNROW').find("input[name='ALIH_INSPTNR']:checked").val()=="HDFC Bank")
		    	   {
					   var xml=UI_getdata("HDFC","","","","","LSW_SCHKINTGSTATUS")
					   MndtryChk=CheckHelthDetlMndtry(tble,"RadioMndtry",$(xml).find('STATUS').text())
					   if(MndtryChk != "")
		                {
							$(html).find('[name = ALIH_MNMFORM]').val('Madical')
			            if (confirm(MndtryChk) == true)
			            {
							if($(xml).find('STATUS').text()=="Active")
		    	            {
								var RTNINSVAL=CallHDFCFn(this)
							}
                         else 
						 {
							var RTNINSVAL=PREMCALC(this) 
						 } 
			            }
			            else
		                {
				          return false;
			            }
		              }
                    else
					{
						if($(op).find('MSG').text()=="ALLOW")
						{
						$(html).find('[name = ALIH_MNMFORM]').val('Non-Madical')
						}
						if($(xml).find('STATUS').text()=="Active")
		    	            {
								var RTNINSVAL=CallHDFCFn(this)
							}
                         else 
						 {
							var RTNINSVAL=PREMCALC(this) 
						 }
					}						
				   }
				else if($(this).closest('.DYNROW').find("input[name='ALIH_INSPTNR']:checked").val()=="ICICI Bank")
				   {
					   var xml=UI_getdata("ICICI","","","","","LSW_SCHKINTGSTATUS")
					   MndtryChk=CheckHelthDetlMndtry(tble,"RadioMndtry",$(xml).find('STATUS').text())
					   if(MndtryChk != "")
		                {
							
			            if (confirm(MndtryChk) == true)
			            {
							if($(xml).find('STATUS').text()=="Active")
		    	            {
								var RTNINSVAL=CallICICIFn(this)
							}
                         else 
						 {
							var RTNINSVAL=PREMCALC(this) 
						 } 
			            }
			            else
		                {
				          return false;
			            }
		              }
                  else
				    {
					  if($(xml).find('STATUS').text()=="Active")
		    	            {
								var RTNINSVAL=CallICICIFn(this)
							}
                         else 
						 {
							var RTNINSVAL=PREMCALC(this) 
						 } 
                    }	
				   }

		    if(RTNINSVAL != "" && RTNINSVAL != undefined)
			{
			  alert(RTNINSVAL);
			  return;
			} 
			var CHKresult = FormDataToDB_V1(tbl,prfx,$(html).find("[name="+DATA+"]").val()+"|"+$(html).find("[name="+DATA+"]").val()+"|" + DATA,html);	   
	        if (CHKresult == "Fail")
			{
			alert("Submission Failed");
			return false;			
			}
		   else
		    {
			   alert("Form Saved Successfully")
			   
			   if($(this).closest('.DYNROW').find("input[name='ALIH_INSPTNR']:checked").val()=="HDFC Bank")
			   {
				   if(MndtryChk != "" || $(html).find('[name = ALIH_MNMFORM]').val()=="Madical")
				   {
					   GentrateHDFCMedical(html,"Load")
					   GentrateHDFCCovid(html,"Load")
				   }
				   else
				   {
				     GentrateHDFCNonMedical(html,"Load")
                     GentrateHDFCCovid(html,"Load")					 
				   }
			   }
			   else if($(this).closest('.DYNROW').find("input[name='ALIH_INSPTNR']:checked").val()=="ICICI Bank")
			   {
				  GentrateICICIMedical(html,"Load")
			   }
			   
	         }
            }
		}
        // Tab Header Change End


       // if ($(this).text() == "Save & Generate") {
          //  NXTTAB(this);
       // }
    });


});