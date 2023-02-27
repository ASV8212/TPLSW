$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
//	var tbl = $("#heading1 a").attr("data-aria").split("|")[0];	
//	var prfx = $("#heading1 a").attr("data-aria").split("|")[1];
//	var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
	
	
//	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	$("#FIED_PRCSID").val($("#PrcsID").val())
    $("#FIED_UNIQEID").val($("#PrMs6").val())
    $("#FIED_ALTNUNIQEID").val($("#PrMs5").val())
    
    var Cusid=$("#FIED_UNIQEID").val()
		var xml=UI_getdata(Cusid,"","","","","LSW_SCustomerEmployment")
		var Profile=$(xml).find('Profile').text()
		if(Profile == 'Salaried')
		{
			$(".SALARY").show();
			$(".SELFEMP").hide();
	     }
		else
			{
			$(".SALARY").hide();
			$(".SELFEMP").show();
			var element = document.getElementById("OffOwner");
			  element.classList.add("FIEDMndtry");
			 $(".SENPMND").addClass("FIEDMndtry");
			  
			}

	var tbl = "LSW_TFEMPLOYINFO"	
	var prfx = "FIED"
	var DATA = "FIED_ALTNUNIQEID"
   

	
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	 $("#FEUP_UNIQEID").attr("value",$("#PrMs6").val())
	 $("#FEUP_ALTNUNIQEID").attr("value",$("#PrMs5").val())
     LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"BankDetail1","FEUPDBfields","LSW_SFIEMPATTACHMENT");
	 
	 
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
   
	$("#FIED_PRCSID").val($("#PrcsID").val())
    $("#FIED_UNIQEID").val($("#PrMs6").val())	
	$("#FIED_ALTNUNIQEID").val($("#PrMs5").val())
    
	RecommReason();
	NatureOfBuss();
	
	var xml=UI_getdata($("#PrcsID").val(),$("#PrMs5").val(),"","","","LSW_SFIDATEOFINSINT")
      var DTINITION=$(xml).find('DTINITION').text()
	   $("#FIED_DATEINIT").val(DTINITION)
	   
	   var x = $("#APPINFOTXT").val()
	var op = UI_getdata($("#PrcsID").val(),$("#FIED_ALTNUNIQEID").val(),$("#FIED_UNIQEID").val(),$('#DMY7').val().split('|')[7],$(x).find('APFI_APPLSTATUS').text(),"LSW_SGETVENDRHDR")
	$("#FormPage1").next().empty();
	op = op.replace('<Resultset><a><RESULT>','');
	op = op.replace('</RESULT></a></Resultset>','');
	$("#FormPage1").next().append(op);
	$("#AudTrl").hide();
	
	var ITEMSEENPREMI=$("#FIED_ITEMSEENPREMI").val()
	 var ITEMSEENPREMIVal=ITEMSEENPREMI.split(",");
	 var row = $(ITEMSEENPREMIVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(ITEMSEENPREMIVal[i] != "")
		 {
	   //$("#FIED_ITEMSEENPREM option:contains("+ITEMSEENPREMIVal[i]+")").attr("selected","selected")
	   $("#FIED_ITEMSEENPREM option[value='"+ITEMSEENPREMIVal[i]+"']").attr("selected","selected")
		 }
	 }
	
	var REASONSI=$("#FIED_REASONSI").val()
	 var REASONSIVal=REASONSI.split(",");
	 var row = $(REASONSIVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(REASONSIVal[i] !="")
		 {
	   //$("#FIED_REASONS option:contains("+REASONSIVal[i]+")").attr("selected","selected")
	   $("#FIED_REASONS option[value='"+REASONSIVal[i]+"']").attr("selected","selected")
		 }
	 }
	 
	 
	 $(document).on("click", ".DELETEDOCUMNETS" , function() {
    	
        if(confirm('Delete Photos') == true)
    	 		{
                 $(this).closest('.DYNROW').remove()	
                }
    	 }) 
	 
	 
$('.FormSave').on('click', function() {
		
		var xml=UI_getdata($("#PrcsID").val(),$("#PrMs6").val(),$("#PrMs5").val(),"FI","","LSW_SCHKPROPERTY");
		
		if($(xml).find("RESULT").text()!="Yes")
		{
			alert($(xml).find("RESULT").text());
			var RedirectURL=""
              var   PAGENAME="MyApplication"
	          RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME;
               $(location).attr('href',encodeURI(RedirectURL));
			   return false;
		}

		
		if($(this).text() == "Submit")
		{
			
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
		
		}
		
		  var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
			  var FIED_UPLOAD = TxtGridsubmitdata_V2("BankDetail1","FEUP_","FIED_","FEUPDBfields");
		    AssignGridXmltoField("FIED_UPLOAD", FIED_UPLOAD)
			
			
		var CHKresult=FormDataToDB(tbl,prfx,$("#FIED_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);		
	   
		if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		  
		if($(this).text() == "Submit")
		{
			 var xml1=UI_getdata($("#FIED_PRCSID").val(),$("#FIED_ALTNUNIQEID").val(),"","","","LSW_SCHKVENDORCOMP")
             var VENCOMSTA=$(xml1).find('RESULT').text()
			 if(VENCOMSTA=="YES")
			 {
				 alert($(xml1).find('alert').text())
                RedirectURL=""
              var   PAGENAME="MyApplication"
	          RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME;
               $(location).attr('href',encodeURI(RedirectURL));
			 }
			else
			{
			var xml=UI_getdata($("#FIED_PRCSID").val(),$("#FIED_ALTNUNIQEID").val(),"FIOFFICEVENDOR",$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
			WFComplete ($("#ActvID").val(),"","");
			 // NXTTAB(this);
			}
		}
	});
	
	$("#ReAssignpop").on('click', function() {
		  $("#Reassign").click();
		
	   })

	
	
	
});

