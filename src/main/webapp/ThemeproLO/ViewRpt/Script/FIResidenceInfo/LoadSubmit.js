$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
//	var tbl = $("#heading1 a").attr("data-aria").split("|")[0];	
//	var prfx = $("#heading1 a").attr("data-aria").split("|")[1];
//	var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
	
	
//	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	$("#FIAD_PRCSID").val($("#PrcsID").val())
    $("#FIAD_UNIQEID").val($("#PrMs6").val())
    $("#FIAD_ALTNUNIQEID").val($("#PrMs5").val())
	var tbl = "LSW_TFIAPPLDETAILS"	
	var prfx = "FIAD"
	var DATA = "FIAD_ALTNUNIQEID"

		
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	$("#FIUP_UNIQEID").attr("value",$("#PrMs6").val())
	$("#FIUP_ALTNUNIQEID").attr("value",$("#PrMs5").val())
     LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"BankDetail1","FIUPDBfields","LSW_SFIATTACHMENT");
	
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
    
	RecommReason();
	NOTenants();
	OtherLocat();
	CheckFincCAR();
	CheckFincTWOWheeler();
	
	var xml=UI_getdata($("#PrcsID").val(),$("#PrMs5").val(),"","","","LSW_SFIDATEOFINSINT")
      var DTINITION=$(xml).find('DTINITION').text()
	   $("#FIAD_DATEINIT").val(DTINITION)
	   
	   var x = $("#APPINFOTXT").val()
	var op = UI_getdata($("#PrcsID").val(),$("#FIAD_ALTNUNIQEID").val(),$("#FIAD_UNIQEID").val(),$('#DMY7').val().split('|')[7],$(x).find('APFI_APPLSTATUS').text(),"LSW_SGETVENDRHDR")
	$("#FormPage1").next().empty();
	op = op.replace('<Resultset><a><RESULT>','');
	op = op.replace('</RESULT></a></Resultset>','');
	$("#FormPage1").next().append(op);
	$("#AudTrl").hide();
	   
	   var EXTERCOMMMI=$("#FIAD_EXTERCOMMMI").val()
	 var EXTERCOMMMIVal=EXTERCOMMMI.split(",");
	 var row = $(EXTERCOMMMIVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(EXTERCOMMMIVal[i] !="")
		 {
	   $("#FIAD_EXTERCOMMM option:contains("+EXTERCOMMMIVal[i]+")").attr("selected","selected")
		 }
	 }
	 
	 var INTERERRESIDI=$("#FIAD_INTERERRESIDI").val()
	 var INTERERRESIDIVal=INTERERRESIDI.split(",");
	 var row = $(INTERERRESIDIVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(INTERERRESIDIVal[i] != "")
		 {
	   $("#FIAD_INTERERRESID option:contains("+INTERERRESIDIVal[i]+")").attr("selected","selected")
		 }
	 }
	 
	 var ASSTSEENRESIDI=$("#FIAD_ASSTSEENRESIDI").val()
	 var ASSTSEENRESIDIVal=ASSTSEENRESIDI.split(",");
	 var row = $(ASSTSEENRESIDIVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(ASSTSEENRESIDIVal[i] !="")
		 {
	   $("#FIAD_ASSTSEENRESID option:contains("+ASSTSEENRESIDIVal[i]+")").attr("selected","selected")
		 }
	 }
	  
	 var REASONSI=$("#FIAD_REASONSI").val()
	 var REASONSIVal=REASONSI.split(",");
	 var row = $(REASONSIVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(REASONSIVal[i] !="")
		 {
	   $("#FIAD_REASONS option:contains("+REASONSIVal[i]+")").attr("selected","selected")
		 }
	 }
	 
	 
	 $(document).on("click", ".DELETEDOCUMNETS" , function() {
    	
        if(confirm('Delete Photos') == true)
    	 		{
                 $(this).closest('.DYNROW').remove()	
                }
    	 }) 
	 
	   
$('.FormSave').on('click', function() {
		
		if($(this).text() == "Submit")
		{
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
			
			
			
		/*	  var html = $('.BankDetail1')
			  var  MndtryChk1 = ChkMandatoryFlds_V1("PHUPLOAD",html);
           
           if (MndtryChk1 == "Mandatory") 
           {
               alert("Upload the Photos");
               return false;
           }*/
			
			
		}
		  var tbl = $(this).attr("data-aria").split("|")[0];
		  var prfx = $(this).attr("data-aria").split("|")[1];
		  var DATA = $(this).attr("data-aria").split("|")[2];
		
          var FIAD_UPLOAD = TxtGridsubmitdata_V2("BankDetail1","FIUP_","FIAD_","FIUPDBfields");
		    AssignGridXmltoField("FIAD_UPLOAD", FIAD_UPLOAD)

		
		var CHKresult=FormDataToDB(tbl,prfx,$("#FIAD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);// Customer Seq ID Gen Start		
	   
		if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		
		
		if($(this).text() == "Submit")
		{

		 var xml1=UI_getdata($("#FIAD_PRCSID").val(),$("#FIAD_ALTNUNIQEID").val(),"","","","LSW_SCHKVENDORCOMP")
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
			var xml=UI_getdata($("#FIAD_PRCSID").val(),$("#FIAD_ALTNUNIQEID").val(),"FIRESIDENCEVENDOR",$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
			WFComplete ($("#ActvID").val(),"",""); 
			}
          
		}
	});
	$("#ReAssignpop").on('click', function() {
		  $("#Reassign").click();
		
	   })
});

