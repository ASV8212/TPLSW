$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));

   /* $("#BKDT_PRCSID").attr("value", $("#PrcsID").val());
    $("#BKDT_CUSID").attr("value", $(".FormPageMultiTab li.active").attr("id"));

    var tbl = $("#headingOne1 a").attr("data-aria").split("|")[0];
    var prfx = $("#headingOne1 a").attr("data-aria").split("|")[1];
    var DATA = $("#headingOne1 a").attr("data-aria").split("|")[2];

    
    var DATA = ["BankDetail1|"];
    for (j = 0; j < DATA.length; j++) {
        var ValuationID = DATA[j].split("|")[0];
        var row = $("." + ValuationID).find(".DYNROW").length;
        for (i = 0; i < row; i++) {
            var HTML = $("." + ValuationID).find(".DYNROW")[i];
            ChequeAvailable(HTML, "");
        }
    }
    /**Grid Trigger Start **/
    //$("#BTNBUSNSDTL").click();
   // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
	
	var Role=$("#DMY5").val().split("|")[1]
	
	if(Role=="Yes")
		{
		  $(".GenApprNote").show()
		}
	else
		{
		 $(".GenApprNote").hide()
		}
	
 FormDataFromDB("LSW_TAPPLNAPPROV", "AAPR_", "AAPRDBfields", "");
	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SChkBusinessDetails")
    var BUSINESSDETAILS=$(xml).find('BUSINESSDETAILS').text()
    
   
    
    if(BUSINESSDETAILS=="YES")
    	{
    	$('.BUSINESS').show()
    	//$("#DMY3").val("50000000|20")
        var ReqAmt=$("#DMY3").val().split("|")[0]
    	if(ReqAmt>5000000)
    		{
             $('.RELMND').addClass('ABFDMndtry');
    		}
         }
    else
    	{
    	$('.BUSINESS').hide()
    	$('.RELMND').removeClass('ABFDMndtry');
        }
	
RECOMMENDHIDE()
	
	
	var Activityname=$("#DMY5").val().split("|")[2]
  if(Activityname=='SendToCredit')
	  {
	  $('.BTNSTA').show()
      }
  else
	  {
	  $('.BTNSTA').hide()
      }
	
	
    $(document).on("click", ".AddLPDS", function() {
    	
    	var TableID = $(this).attr("data-table");

    var HTML="";

    	
    		var html1 = $($(this).closest(".DYNROW"));

    		var table = $("#"+TableID).DataTable();
    		 
    		var rowNode = table
    		    .row.add( [ '', '', '','','', '', '','','', '', '', '', '', ''] )
    		    .draw()
    		    .node();
    		
    		
    		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
    		
    		// For Data Population in Grid Columns Start
    		
    		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
    		$($(HTML).find('td')[6]).text($(html1).find("[name=ABFD_FIRMCONT]").val());			
    		//$($(HTML).find('td')[7]).text($(html1).find("[name=EGCD_UNIQUID]").val());
    		
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
    
 $(document).on("click", "#AssetGrid", function() {
    	
	        var TableID = "";
		
	        TableID = "Table6"


		        var rowCnt = $("#"+TableID).find("tbody tr").length;
		        var ColumnCnt = $($("#"+TableID).find('thead tr')).find('th').length;

		        var HTML="";
		        var table = $("#"+TableID).DataTable();
    		    var rowNode = table
    		    .row.add( [ '', '','', '','','', '', '','',''] )
    		    .draw()
    		    .node();

    		var NewrowCnt = $("#"+TableID).find("tbody tr").length;
    		
    		// For Data Population in Grid Columns Start
    		
    		HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
    		//$($(HTML).find('td')[5]).text($(html1).find("[name=ABFD_FIRMCONT]").val());			
    		//$($(HTML).find('td')[7]).text($(html1).find("[name=EGCD_UNIQUID]").val());
    		
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
 
 
 $(document).on("click", ".DeleteFirm" , function() {

       if(confirm('Delete Firm') == true)
	 		{
	   $(this).closest('.DYNROW').remove()	
		var k= $('.ApproveNote3').find('.DYNROW').length
		for(i=0;i<k;i++)
			{
			//('.BankDetail1').find('.DYNROW')[i]
		    var	j=i+1
          $($('.ApproveNote3').find('.DYNROW')[i]).find('#PROPTXTHDR').text('Firm '+j)
			}
			}

})

$(document).on("click", ".DELETEFIRMDETAILS" , function() {

	 if(confirm('Delete FIRM Details') == true)
		{
	   $(this).closest('.DYNROW').remove()	
		var k= $('.ApproveNote2').find('.DYNROW').length
		for(i=0;i<k;i++)
			{
			//('.BankDetail1').find('.DYNROW')[i]
		    var	j=i+1
          $($('.ApproveNote2').find('.DYNROW')[i]).find('#PROPTXTHDR').text('FIRM '+j)
			}
		}
})

 $(document).on("click", ".DeleteSanct" , function() {

     if(confirm('Delete Sanction Details') == true)
		{
	   $(this).closest('.DYNROW').remove()	
		var k= $('.ApproveDetail12').find('.DYNROW').length
		for(i=0;i<k;i++)
			{
			//('.BankDetail1').find('.DYNROW')[i]
		    var	j=i+1
          $($('.ApproveDetail12').find('.DYNROW')[i]).find('#PROPTXTHDR').text(''+j)
			}
		}

})


    $(document).on("click", "#Reject", function() {
			$("#REJECTREMARKSPopup").click();
			
		});
    
    $(document).on("click", ".FormSave", function() {
       
    	if($(this).closest('.collapse').attr('id')=="collapseTwo2")
       
    		{
    		var html =$('.ApproveNote2')
    		 if ($(this).text() == "Save & Next") {
              var MndtryChk = ChkMandatoryFlds_V1("ABFDMndtry", html);
               if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields");
                return false;
            }
            
            }
    		
    		}

       
	  if ($(this).text() == "Generate Approval Note") 
          {
			  
		/*	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSHCMFORAPPR")

		    if($(xml).find('RESULT').text()!="Y")
		    	{
		          alert($(xml).find('RESULT').text())
				  return false;
		    	*/
			var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSCHEMECOUNT")
			
			var RESULT=$(xml).find('RESULT').text()
	
				if(RESULT != "")
				{
			    var Alert2=''
				var nameArr = RESULT.split(',')
                 k=nameArr.length
				 for(i=0;i<k;i++)
				 {
					var Alert1= nameArr[i]
					var Alert2 = Alert2 +'\r\n'+Alert1
				 }
				   alert('Complete the below Mandatory actionables \r\n'+Alert2)
				   return false;
				}
				
		
				
		     var PFNO1 = "4";
			 var PRCSID1 = $("#PrcsID").val();
			 var RECEIPTNO=""

			 $.ajax({
			   url: "/TPLSW/OPADeviations",
			   type: 'POST',
			   data: {PRCSID:PRCSID1,OPANO:PFNO1,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
			   async:true,
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
					$("#BTNEMPOWERMNTI").click();
			    	$(".ApprNote").click();
			    	
			    	 $(document).on("click", ".SaveAppr", function() {
						 if($("#APEM_PRCSID").val() == "")
						   {
						     $("#APEM_PRCSID").val($("#PrcsID").val())
						   }
			    		 if($(this).text() == "Confirm")
					    	{
			    			     var EMPRMNT = TxtGridsubmitdata_V1("EmpovTable4","APED_","APEM_");
			 				          AssignGridXmltoField("APEM_EMPRMNT", EMPRMNT) 
			    			        var CHKresult=FormDataToDB("LSW_TAPPREMPR","APEM","");
			 				         
			 				        if(CHKresult == "Fail")
			 						{
			 						  alert("Submission Failed");
			 						   return false;			
			 						}
			 				        else
			 				         {
			 				          GentrateApprNote();
									  $(".Apprclose").click();
			 				        }
			 				   
					    	}
					     else if($(this).text() == "Cancel")
					    	{
								var EMPRMNT = TxtGridsubmitdata_V1("EmpovTable4","APED_","APEM_");
			 				          AssignGridXmltoField("APEM_EMPRMNT", EMPRMNT)
								 var CHKresult=FormDataToDB("LSW_TAPPREMPR","APEM","");
			 				         if(CHKresult == "Fail")
				 						{
				 						  alert("Submission Failed");
				 						   return false;			
				 						}
			 				         else
			 				        	 {
			 				        	  $(".Apprclose").click();
			 				        	 }
					    		 
					    	}
					 })
                 // var Button = "ToRCMD";
					// To be Placed At Last Start
		           // WFComplete ($("#ActvID").val(),"var_status="+Button+"&var_rcmdu=CM","");
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
			 
             $("#AAPR_APROVBTN").val('Yes')
          }

       if($(this).text() == "Send for Approval")
		{    
	       
           if($("#AAPR_APROVBTN").val() != "Yes")
				{
					alert("Generate Approve Note");
					return false;
				}

		   var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_CHECKINCBNK")
			
			var FINCBNKDETAILS=$(xml).find('BANKDETAILS').text()
			
		    if(FINCBNKDETAILS=="NO")
		    	{
		          alert("Enter Banking Details for the respective Applicant \n whose income to be Considered is selected as Yes")
				  return false;
		    	}

			var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSCHEMECOUNT")
			
			var RESULT=$(xml).find('RESULT').text()
	
				if(RESULT != "")
				{
			    var Alert2=''
				var nameArr = RESULT.split(',')
                 k=nameArr.length
				 for(i=0;i<k;i++)
				 {
					var Alert1= nameArr[i]
					var Alert2 = Alert2 +'\r\n'+Alert1
				 }
				   alert('Complete the below Mandatory actionables \r\n'+Alert2)
				   return false;
				}
				
				
				
				var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKIFELGNOTCALC"); //force eligibility recompute
				
				if($(op).find("RESULT").text()!="ALLOW")
				{
					alert($(op).find("RESULT").text());
					return;
				}
		}
		
        /*$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())*/
        //var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];


        if ($(this).closest('.collapse').attr('id') == "") {
            var CHKresult = FormDataToDB_V1(tbl, prfx, $(html).find("[name=" + DATA + "]").val() + "|" + $(html).find("[name=" + DATA + "]").val() + "|" + DATA, html);
            if (CHKresult == "Fail") {
                alert("Submission Failed");
                return false;
            } else {
                alert("Form Details Saved Successfully")
            }
        } 
        /*else if($(this).closest('.collapse').attr('id') == "collapseOne1" || $(this).closest('.collapse').attr('id') == "collapseThree3" || $(this).closest('.collapse').attr('id') =="collapseFive5"){*/
        else{
        	
        	
        	if ($(this).text() == "Save & Next" && $(this).closest('.collapse').attr('id')=="collapseSix6") 
            {
                var MndtryChk="";
        		var DATA=["ApproveNote6|"];
             	 for (j=0;j<DATA.length;j++)
             		 {
             		   var ValuationID=DATA[j].split("|")[0];
             	       var row = $("." + ValuationID).find(".DYNROW").length;
             	    for (i=0;i<row;i++)
          	           {
          	          //var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
             	    	if(MndtryChk=="")
             	    		{
             	    		   MndtryChk = CheckDocMndtry("LoansTable"+[i+1],"EndUse","End Use");	
             	    		}
          	            }
                      }
             	if(MndtryChk != "")
        			{
        			alert(MndtryChk);
        			return;
        			}
            }
        	
        	
        	
        	if($(this).closest('.collapse').attr('id')=="collapseTwo2")
			   {
		    	 var FIRMPAGE = TxtGridsubmitdata_V2("ApproveNote2","ABFD_","ABND_","ABFDDBfields");
				    AssignGridXmltoField("ABND_FIRMPAGE", FIRMPAGE)
				 var LPDSTable = TxtGridsubmitdata_V3("LPDSTable","LPDS_","ABND_");
				AssignGridXmltoField("ABND_LPDSGRD", LPDSTable);  

					/*var ABND_LPDSGRD = TxtGridsubmitdata_V6("LPDSTable","LPDS_","ABND_",html);
		 
	                var BALANCEDATA=["ApproveNote2|"];
		               for (j=0;j<BALANCEDATA.length;j++)
			              {
			              var BNKDATA=BALANCEDATA[j].split("|")[0];
		                  var row = $("." + BNKDATA).find(".DYNROW").length;
		                      for (i=0;i<row;i++)
		                          {
		                           var BnkHtml = $("." + BNKDATA).find(".DYNROW")[i];
		                            $(BnkHtml).find('[name = ABND_LPDSGRD]').val(ABND_LPDSGRD)
		                          }
		                  }	*/	
			   }
        	if($(this).closest('.collapse').attr('id')=="collapseSix6")
			   {
		    	 var LOANSPAGE = TxtGridsubmitdata_V2("ApproveNote6","ALCD_","ALNM_","ALCDDBfields");
				    AssignGridXmltoField("ALNM_CUSDATA", LOANSPAGE)
				 var LOANTable = TxtGridsubmitdata_V3("LoansTable","LCDT_","ALNM_");
					AssignGridXmltoField("ALNM_CUSDATAGED", LOANTable);  
			   }
        	if($(this).closest('.collapse').attr('id')=="collapseThree3")
			   {
		    	 var OTHRINCM = TxtGridsubmitdata_V2("ApproveNote3","APIF_","APOI_","APIFDBfields");
				     AssignGridXmltoField("APOI_OTHRINCM", OTHRINCM)
				 var RENTDATA = TxtGridsubmitdata_V1("Table3","APRD_","APOI_");
				     AssignGridXmltoField("APOI_RENTDATA", RENTDATA)
			   }
        	if($(this).closest('.collapse').attr('id')=="collapseFour4")
			   {
		    	 var GFINCSUMMRY = TxtGridsubmitdata_V3("FINANCTable","APFD_","APFS_");
				     AssignGridXmltoField("APFS_GFINCSUMMRY", GFINCSUMMRY)
			   }
        	if($(this).closest('.collapse').attr('id')=="collapseEleven11")
			   {
		    	var EMPRMNT = TxtGridsubmitdata_V1("Table4","APED_","APEM_");
				AssignGridXmltoField("APEM_EMPRMNT", EMPRMNT)
			   }
        	if($(this).closest('.collapse').attr('id')=="collapseSeven7")
			   {
		    	var PROPGRD = TxtGridsubmitdata_V1("Table7","APPR_","APRT_");
				AssignGridXmltoField("APRT_PROPGRD", PROPGRD)
				
				var APPLN = TxtGridsubmitdata_V1("Table8","APPA_","APRT_");
				AssignGridXmltoField("APRT_APPLN", APPLN)
				
				var RESN = TxtGridsubmitdata_V2("MUSTTOHAVE","APRG_","APRT_","APRGDBfields");
				AssignGridXmltoField("APRT_RESN", RESN)
			   }
        	if($(this).closest('.collapse').attr('id')=="collapseTwelve12")
        		{
        		var SANCGRD = TxtGridsubmitdata_V2("ApproveDetail12","APSG_","APSD_","APSGDBfields");
				AssignGridXmltoField("APSD_SANCGRD", SANCGRD)
        		}
        	if($(this).closest('.collapse').attr('id')=="collapseTen10")
    		{
        		var ASSETS = TxtGridsubmitdata_V1("Table6","APAG_","APAS_");
				AssignGridXmltoField("APAS_ASSETGRD", ASSETS)
    		}
        	if($(this).closest('.collapse').attr('id')=="collapseNine9")
    		{
        		 var OTHRINCM = TxtGridsubmitdata_V2("ApproveNote9","AEUP_","AEUM_","AEUPDBfields");
			     AssignGridXmltoField("AEUM_ENDUSEOTHGRD", OTHRINCM)
        		var ENDUSE = TxtGridsubmitdata_V3("EUTable","AEUG_","AEUM_");
				AssignGridXmltoField("AEUM_ENDUSEBTGRD", ENDUSE)

    		}
        	var CHKresult=FormDataToDB(tbl, prfx, '');
        	if(CHKresult == "Fail")
				{
				  alert("Submission Failed");
				   return false;			
				}
        }
       
        
        /*else {
            FormDataToDB(tbl, prfx, $("#CBSI_CUSID").val() + "|" + $("#" + DATA).val() + "|" + DATA);
        }*/

        // Tab Header Change End
        
        

        if ($(this).text() == "Save & Next"||$(this).text() == "Next") 
        {
            NXTTAB(this);
        }
		
		
		 if ($(this).text() == "Send for Approval")
			{
		    var MILESTONE=UI_getdata('APPROVAL',$("#PrcsID").val(),"","","","LSW_SGETMILESTONEUPDATE")	 	
			 var op = UI_getdata($("#PrcsID").val()+'|'+$("#ActvID").val(),"DEVIATIONS",$("#LogUsr").val(),"","","LSW_SONSUBMTWFDTLINS");
			 var pattern = /var_/;
			 var exists = pattern.test($(op).find("WFVAR").text());
				 if(exists) 
				  {
			         WFComplete ($("#ActvID").val(),$(op).find("WFVAR").text(),"");
				  }
				else
				  {
				   alert($(op).find("WFVAR").text());
		          }
			 }  
		
    });
    

    $("#BTNBUSINESSDATA").on('click', function() {
    	
    	GETFIRMDROPDOWNVAL()
    	
    	LoadMultiData("",$("#PrcsID").val(),"","ApproveNote2","ABFDDBfields","LSW_SGETBUSINESSDETL");
		FormDataFromDB("LSW_TAPRBUSNESSDETL", "ABND_", "ABNDDBfields", "");
		$(".MultiGridTrg").click();
    	 //var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SAPPRNOTBUSDETL")	
    	  
    	  var DATA=["ApproveNote2|"];

    	    for (j=0;j<DATA.length;j++){
    	    	var ValuationID=DATA[j].split("|")[0];
    	    	var row = $("." + ValuationID).find(".DYNROW").length;
    	    	for (i=0;i<row;i++){
    	    		var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
    	    		CheckConsti("","","Load",HTML)
    	    		GetInduestry("","","PARTNERFARM","Load",HTML,"")
    	    	}
    	      }
    });
    
	$("#BTNLOANSDATA").on('click', function() {
    	FormDataFromDB("LSW_TAPPRLOANSMAIN", "ALNM_", "ALNMDBfields", "");
    	LoadMultiData("",$("#PrcsID").val(),"","ApproveNote6","ALCDDBfields","LSW_SAPPRLONSPAGEDATA");
    	
    	var DATA=["ApproveNote6|"];
      	 for (j=0;j<DATA.length;j++)
      		 {
      		 var ValuationID=DATA[j].split("|")[0];
      	 var row = $("." + ValuationID).find(".DYNROW").length;
      	 for (i=0;i<row;i++)
   	     {
   	//var HTML =$("." + ValuationID).find(".DYNROW")[i];
   	//LoansEMITotCalc([i+1])
     var EMI = 0;
	
	for (k=0;k<$("#LoansTable"+[i+1]).find('.tbody').find("[data-item=EMI]").length;k++)
		{	
		   EMI = parseFloat(EMI) + parseFloat($($("#LoansTable"+[i+1]).find('.tbody').find("[data-item=EMI]")[k]).val().replace(/,/g,''));  	
		}
	$("#ALCD_TOTEMI"+[i+1]).val(CURINRCommaSep(EMI));
	
	// EMI Calc End
	// Loan Amount Start
	var LoanAmt = 0;
	
	for (k=0;k<$("#LoansTable"+[i+1]).find('.tbody').find("[data-item=LoanAmt]").length;k++)
		{
		LoanAmt = parseFloat(LoanAmt) + parseFloat($($("#LoansTable"+[i+1]).find('.tbody').find("[data-item=LoanAmt]")[k]).val().replace(/,/g,'')); 		
		}
	
	    $("#ALCD_TOTLONAMT"+[i+1]).val(CURINRCommaSep(LoanAmt));
   	 }
    }
    	//$("#BTNLPDSGRD").click();
    });
    
   
    
    $("#BTNLOADMULTIDATA").on('click', function() {
    	FormDataFromDB("LSW_TOTHRINCM", "APOI_", "APOIDBfields", "");
    	$("#BTNRENTDATA").click();
    	LoadMultiData("",$("#PrcsID").val(),"","ApproveNote3","APIFDBfields","LSW_SGETFIRMDTL");
    	
    });
    $("#BTNLOADBNKMULTIDATA").on('click', function() {
    	var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETACCNTNOBKREPAY");
    	var CusName=$(op).find('RESULT').html();
    	$("#APBD_ACCNTNO").append(CusName)
    	var CHKresult=FormDataFromDB("LSW_TAPPBANKINGDTL", "APBD_", "APBDDBfields", "");
    	if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
    });
    
    
    $("#BTNFINANCLDATA").on('click', function() {
    	//GETSCHEME();
    	
    	LoadMultiData("",$("#PrcsID").val(),"","FINCSUM","EGCDDBfields","LSW_STRGFINANCSUMGED");
 
    	FormDataFromDB("LSW_TFINCLSUMMRY", "APFS_", "APFSDBfields", "");
    	
    	
        if($("#Table5").find('.tbody .tbodytr .tbodytrtd').text()=="No data available in table"){
        	$('#BTNFINCLMSTDTL').click();
        }
    });

    $("#BTNEMPWRDATA").on('click', function() {
    	FormDataFromDB("LSW_TAPPREMPR", "APEM_", "APEMDBfields", "");
    	$('#BTNEMPOWERMNT').click();
    });
    $("#BTNASSTDATA").on('click', function() {
    	FormDataFromDB("LSW_TAPPRASSET", "APAS_", "APASDBfields", "");
    	$('#BTNASST').click();
    });
    $("#BTNREPTDATA").on('click', function() {
    	FormDataFromDB("LSW_APPRREPORT", "APRT_", "APRTDBfields", "");
    	$('#BTNREPT').click();
    	$('#BTNREPT1').click();
    	LoadMultiData("",$("#PrcsID").val(),"","MUSTTOHAVE","APRGDBfields","LSW_SGETAPPRRESN");

    });
    $("#BTNSANCCONDDATA").on('click', function() {
    	FormDataFromDB("LSW_TSAPPRSANC", "APSD_", "APSDDBfields", "");
    	LoadMultiData("",$("#PrcsID").val(),"","ApproveDetail12","APSGDBfields","LSW_SGETSANCDTL");

    });
    $("#BTNMITIGDATA").on('click', function() {
    	FormDataFromDB("LSW_TAPPRSTRMITIG", "APSM_", "APSMDBfields", "");
    	//LoadMultiData("",$("#PrcsID").val(),"","ApproveDetail12","APSGDBfields","LSW_SGETSANCDTL");
    });
    
    $("#BTNREFERDATA").on('click', function() {
    	FormDataFromDB("LSW_TAPPRREFRRNCE", "APRC_", "APRCDBfields", "");
    	//LoadMultiData("",$("#PrcsID").val(),"","ApproveDetail12","APSGDBfields","LSW_SGETSANCDTL");
    });
    $("#BTNEUDATA").on('click', function() {
    	FormDataFromDB("LSW_APPRENDUSE", "AEUM_", "AEUMDBfields", "");
    	LoadMultiData("",$("#PrcsID").val(),"","ApproveNote9","AEUPDBfields","LSW_SENDUSEPAGEDATA");
    	
    	var DATA=["ApproveNote9|"];
   	   for (j=0;j<DATA.length;j++)
   		 {
   		  var ValuationID=DATA[j].split("|")[0];
   	      var row = $("." + ValuationID).find(".DYNROW").length;
   	      
   	      var TotPOS=0
   	       for (i=0;i<row;i++)
	              {
	        //var HTML = $("." + ValuationID).find(".DYNROW")[i];
   	    	       var POS = 0;
   	          	for (k=0;k<$("#EUTable"+[i+1]).find('.tbody').find("[data-item=POS]").length;k++)
   	 		      { 	 		
   	 	           	POS = parseFloat(POS) + parseFloat($($("#EUTable"+[i+1]).find('.tbody').find("[data-item=POS]")[k]).val().replace(/,/g,''));  
   	 		      }
   	 	             $("#AEUP_TOTPOI"+[i+1]).val(CURINRCommaSep(POS));
   	 	             var POI=$("#AEUP_TOTPOI"+[i+1]).val().replace(/,/g,'')
   	 	         TotPOS=parseFloat(TotPOS)+parseFloat(POI)
	              }
   	           $("#AEUM_CLOSERTOTPOI").val(CURINRCommaSep(TotPOS))
			   var SanAmt=$("#DMY3").val().split("|")[3]
   	           var BalTopUp=parseFloat(SanAmt)-parseFloat(TotPOS)
   	           $("#AEUM_BALTOPUP").val(CURINRCommaSep(BalTopUp))
            }
    	
    	//$("#BTNIEUGRD").click();
    });
    
	$('#PropertyGrid').on('click', function() {
		
		var TableID = "Table3";
	
	var HTML="";

		
			var table = $("#"+TableID).DataTable();
			 
			var rowNode = table
			    .row.add( [ '', '', '','','', '','', '','','', ''] )
			    .draw()
			    .node();
			
			
			var NewrowCnt = $("#"+TableID).find("tbody tr").length;
			
			// For Data Population in Grid Columns Start
			
			HTML = $($("#"+TableID).find('tbody tr')[parseInt(NewrowCnt)-1]);					
			/*$($(HTML).find('td')[0]).text(value);			
			$($(HTML).find('td')[8]).text($("#UPDC_CUSID").val());*/
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
    
});