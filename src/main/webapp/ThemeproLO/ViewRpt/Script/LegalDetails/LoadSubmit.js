$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
//	var tbl = $("#heading1 a").attr("data-aria").split("|")[0];	
//	var prfx = $("#heading1 a").attr("data-aria").split("|")[1];
//	var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
	
	
//	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	$("#LEVD_PRCSID").val($("#PrcsID").val())
    $("#LEVD_PROPERTYNO").val($("#PrMs6").val())
    $("#LEVD_ALTNPROPERTYNO").val($("#PrMs5").val())
	$("#LMUD_PROPERTYNO").val($("#PrMs5").val())
    $("#LNID_PROPERTYNO").val($("#PrMs5").val())
    
    $("#OWNA_PRCSID").attr("value",$("#PrcsID").val())

     $("#OWNA_PROPERTYNO").attr("value",$("#PrMs5").val())


    
        $("#LMUD_PRCSID").attr("value",$("#PrcsID").val())

      $("#LMUD_PROPERTYNO").attr("value",$("#PrMs5").val())

      $("#LNID_PRCSID").attr("value",$("#PrcsID").val())

     $("#LNID_PROPERTYNO").attr("value",$("#PrMs5").val())
    
    var tbl = "LSW_TFILEGALVENDETAILS"	
	var prfx = "LEVD"
	var DATA = "LEVD_ALTNPROPERTYNO"
   
	
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"OWNERNAME","OWNADBfields","LSW_SLEGALOWNERNAME");
	
	LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"MUSTTOHAVE","LMUDDBfields","LSW_SLEGALMUSTDETAILS");
	
	LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"NICETOHAVE","LNIDDBfields","LSW_SLEGALNICEDETAILS");
	
	OnloadSameADDR();
	
	
	
	
	if($('input:radio[name=LEVD_DOCAGIPROP]')[0].checked == false && $('input:radio[name=LEVD_DOCAGIPROP]')[1].checked == false)
{
  $('input:radio[name=LEVD_DOCAGIPROP]')[0].checked = true;

}

	if($('input:radio[name=LEVD_SITEAGIPROP]')[0].checked == false && $('input:radio[name=LEVD_SITEAGIPROP]')[1].checked == false)
{
  $('input:radio[name=LEVD_SITEAGIPROP]')[0].checked = true;

}
	
	var x = $("#APPINFOTXT").val()
	var op = UI_getdata($("#PrcsID").val(),$("#LEVD_ALTNPROPERTYNO").val(),$("#LEVD_PROPERTYNO").val(),$('#DMY7').val().split('|')[7],$(x).find('APFI_APPLSTATUS').text(),"LSW_SGETVENDRHDR")
	$("#FormPage1").next().empty();
	op = op.replace('<Resultset><a><RESULT>','');
	op = op.replace('</RESULT></a></Resultset>','');
	$("#FormPage1").next().append(op);
	
	$("#AudTrl").hide();
	
	 $(document).on("click", ".DeleteMUST" , function() {

	         
			  if(confirm('Delete MUST TO HAVE') == true)
		 		{
		     $(this).closest('.DYNROW').remove()	
			var k= $('.MUSTTOHAVE').find('.DYNROW').length
			for(i=0;i<k;i++)
				{
				//('.BankDetail1').find('.DYNROW')[i]
			    var	j=i+1
	         $($('.MUSTTOHAVE').find('.DYNROW')[i]).find('#PROPTXTHDR').text(j)
				}
				}
          })
	   
			
          $(document).on("click", ".DeleteNICE" , function() {

	         
			  if(confirm('Delete NICE TO HAVE') == true)
		 		{
		     $(this).closest('.DYNROW').remove()	
			var k= $('.NICETOHAVE').find('.DYNROW').length
			for(i=0;i<k;i++)
				{
				//('.BankDetail1').find('.DYNROW')[i]
			    var	j=i+1
	         $($('.NICETOHAVE').find('.DYNROW')[i]).find('#PROPTXTHDR').text(j)
				}
				}
          })
		  
	
$('.FormSave').on('click', function() {
		
	var LEVD_MUSTTO = TxtGridsubmitdata_V2("MUSTTOHAVE","LMUD_","LEVD_","LMUDDBfields"); 
	AssignGridXmltoField("LEVD_MUSTTO", LEVD_MUSTTO)
	
	var LEVD_NICETO = TxtGridsubmitdata_V2("NICETOHAVE","LNID_","LEVD_","LNIDDBfields"); 
	AssignGridXmltoField("LEVD_NICETO", LEVD_NICETO)
	
	var LEVD_OWNERNAME = TxtGridsubmitdata_V2("OWNERNAME","OWNA_","LEVD_","OWNADBfields"); 
	AssignGridXmltoField("LEVD_OWNERNAME", LEVD_OWNERNAME) 
	
		if($(this).text() == "Submit")
		{
			
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields");
			return false;
			}
		
		}
		
		    var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
		var CHKresult=FormDataToDB(tbl,prfx,$("#LEVD_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);// Customer Seq ID Gen Start		
	   
		if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		  
		if($(this).text() == "Submit")
         {
			 var xml1=UI_getdata($("#LEVD_PRCSID").val(),$("#LEVD_ALTNPROPERTYNO").val(),"","","","LSW_SCHKVENDORCOMP")
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
			var xml=UI_getdata($("#LEVD_PRCSID").val(),$("#LEVD_ALTNPROPERTYNO").val(),"LEGALVENDOR",$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
			 // NXTTAB(this);
				WFComplete ($("#ActvID").val(),"",""); 
			}
		}
	});
	

	
	
	
});

