$(document).ready(function () {
	
	
	//$($('.AFormaccordion')[0]).click();
//	var tbl = $("#heading1 a").attr("data-aria").split("|")[0];	
//	var prfx = $("#heading1 a").attr("data-aria").split("|")[1];
//	var DATA = $("#heading1 a").attr("data-aria").split("|")[2];
	
	
//	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	$("#LERP_PRCSID").val($("#PrcsID").val())
    $("#LERP_PROPERTYNO").val($("#PrMs5").val())

   $("#LRND_PROPERTYNO").val($("#PrMs5").val())
   $("#LEMU_PROPERTYNO").val($("#PrMs5").val())
   
     $("#LRND_PRCSID").attr("value",$("#PrcsID").val())

      $("#LRND_PROPERTYNO").attr("value",$("#PrMs5").val())

      $("#LEMU_PRCSID").attr("value",$("#PrcsID").val())

     $("#LEMU_PROPERTYNO").attr("value",$("#PrMs5").val())
	 
	  $("#LRND_UNIQID").attr("value",$("#PrMs6").val())
      $("#LEMU_UNIQID").attr("value",$("#PrMs6").val())
     

	var tbl = "LSW_TLEGALDETAILS"	
	var prfx = "LERP"
	var DATA = "LERP_PROPERTYNO"

	
	if  (DATA != "")
	{
		DATA = $("#"+DATA).val()+"|" + DATA;
	}
	
	//$('input:radio[name=LERP_AGRICULAT]')[0].checked = true;
	
	FormDataFromDB(tbl, prfx + "_", prfx+"DBfields", DATA);
	
	var State=UI_getdata($("#PrcsID").val(),$("#PrMs6").val(),"","","","LSW_SGETSTATEDETAILS");
	$("#LERP_UCVPROPDOC").val($(State).find("UCVPROPDOC").text());
	
	LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"MUSTTOHAVE","LEMUDBfields","LSW_SLEGRPTMUST");
	
	LoadMultiData("",$("#PrcsID").val(),$("#PrMs5").val(),"NICETOHAVE","LRNDDBfields","LSW_SLEGALRPTNICE");
		
		
	
	if($('input:radio[name=LERP_AGRICULAT]')[0].checked == false && $('input:radio[name=LERP_AGRICULAT]')[1].checked == false)
{
  $('input:radio[name=LERP_AGRICULAT]')[0].checked = true;

}	
		
		var xml=UI_getdata($("#PrcsID").val(),$("#PrMs5").val(),"","","","LSW_SGETLEGALSTATUS")
      var STATUS=$(xml).find('STATUS').text() 
		    if(STATUS=="Completed"||STATUS=="Verified")
	    {
        $('.LERPDBfields').attr('disabled',true)
        $('.LEMUDBfields').attr('disabled',true)
        $('.LRNDDBfields').attr('disabled',true)
        $('.btn').hide() 
		$('.BTNHIDE').hide()
	    }
		
	if($("#DMY7").val().split("|")[3]=="STP") 
     {
      $('.LERPDBfields').attr('disabled',true)
        $('.LEMUDBfields').attr('disabled',true)
        $('.LRNDDBfields').attr('disabled',true)
        $('.btn').hide() 
		$('.BTNHIDE').hide()
     }  	
	
	var k= $('.MUSTTOHAVE').find('.DYNROW').length
  		for(i=0;i<k;i++)
  			{
  		    var	j=i+1
             if($("#LEMU_OTCPDD"+j).val()=="OTCPDD" && $("#LEMU_APPROVE"+j).val()=="APPROVE")
            {
            	 $("#LEMU_TEXTVAL"+j).attr('disabled',true)
            }
  			}	

			
 $(document).on("click", ".DeleteMUST" , function() {

	           var TXTROW=  $(this).closest('.DYNROW').find("[name=LEMU_TXTROW]").val()
			 
			 
			 var xmlSTATUS=UI_getdata($("#PrcsID").val(),$("#LERP_PROPERTYNO").val(),TXTROW,"","","LSW_SCHKMUSTDETAILS")
			 
			   if($(xmlSTATUS).find('ODCSTATUS').text()=="OTCPDD"&&$(xmlSTATUS).find('COLLECTSTATUS').text()=="COLLECT")
		      {
				 alert('Cannot delete,Since OTC/PDD has been Initiated')  
	          }
			   else
		     {
			  if(confirm('Delete MUST TO HAVE') == true)
		 		{
					$("#save").click();
					var xml=UI_getdata("UPDATE","MUST",$("#PrcsID").val(),$("#LERP_PROPERTYNO").val(),TXTROW,"LSW_SDELMNTHDT")
					location.reload(true);
		     /*$(this).closest('.DYNROW').remove()	
			var k= $('.MUSTTOHAVE').find('.DYNROW').length
			for(i=0;i<k;i++)
				{
				//('.BankDetail1').find('.DYNROW')[i]
			    var	j=i+1
	         $($('.MUSTTOHAVE').find('.DYNROW')[i]).find('#PROPTXTHDR').text(j)
				}*/
				}
			 }
          })
		  
		  
		  
	   
			
          $(document).on("click", ".DeleteNICE" , function() {

	          var TXTROW=  $(this).closest('.DYNROW').find("[name=LRND_TXTROW]").val()
			  if(confirm('Delete NICE TO HAVE') == true)
		 		{
					$("#save").click();
					var xml=UI_getdata("UPDATE","NICE",$("#PrcsID").val(),$("#LERP_PROPERTYNO").val(),TXTROW,"LSW_SDELMNTHDT")
					location.reload(true);
		     /*$(this).closest('.DYNROW').remove()	
			var k= $('.NICETOHAVE').find('.DYNROW').length
			for(i=0;i<k;i++)
				{
				//('.BankDetail1').find('.DYNROW')[i]
			    var	j=i+1
	         $($('.NICETOHAVE').find('.DYNROW')[i]).find('#PROPTXTHDR').text(j)
				}*/
				}
          })			

$('.FormSave').on('click', function() {
		

	var LERP_MUSTTO = TxtGridsubmitdata_V2("MUSTTOHAVE","LEMU_","LERP_","LEMUDBfields"); 
	AssignGridXmltoField("LERP_MUSTTO", LERP_MUSTTO)
	
	var LERP_NICETO = TxtGridsubmitdata_V2("NICETOHAVE","LRND_","LERP_","LRNDDBfields"); 
	AssignGridXmltoField("LERP_NICETO", LERP_NICETO)
	
		if($(this).text() == "Submit")
		{
		var prfx = $(this).attr("data-aria").split("|")[1];
		var MndtryChk = ChkMandatoryFlds(prfx+"Mndtry");
		
		if(MndtryChk == "Mandatory")
			{
			alert("Fill the Mandatory Fields / Document(s)");
			return false;
			}
			
			
			 var DocMndtry=ChkMandatoryFlds_Doc("DOCMndtry")
				  
				  if(DocMndtry != "")
					  {
					    alert('Upload the documents');
					    return false;
					  }
					  
					  
					 var html = $('.MUSTTOHAVE')
		
		  var  MndtryChk1 = ChkMandatoryFlds_V1("MUSTMndtry",html);
          
          if (MndtryChk1 == "Mandatory") 
          {
              alert("Fill the Mandatory Fields in MUST TO HAVE");
              return false;
          }
          
         
					  
					  
					  
		}
		  var tbl = $(this).attr("data-aria").split("|")[0];
			var prfx = $(this).attr("data-aria").split("|")[1];
			var DATA = $(this).attr("data-aria").split("|")[2];
			
		var CHKresult=FormDataToDB(tbl,prfx,$("#LERP_PRCSID").val()+"|"+$("#"+DATA).val()+"|" + DATA);// Customer Seq ID Gen Start		
	   
		if(CHKresult == "Fail")
		{
		  alert("Submission Failed");
		   return false;			
		}
		
	   if($(this).text() == "Submit")
		{
			var xml1=UI_getdata($("#LERP_PRCSID").val(),$("#LERP_PROPERTYNO").val(),"","","","LSW_SCHKVENDORCOMP")
             var VENCOMSTA=$(xml1).find('RESULT').text()
			 if(VENCOMSTA=="YES")
			 {
				 alert($(xml1).find('alert').text())
				 var ACCORD=''
		          ACCORD=$("#PrMs3").val()
		        RedirectURL=""
	 
	           var   PAGENAME="UCVViewRpts"
	          RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=FormPageTab1"+"&PrMs10="+$("#PrMs10").val()+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
               $(location).attr('href',encodeURI(RedirectURL));
			 }
			else
			{
			var xml=UI_getdata($("#LERP_PRCSID").val(),$("#LERP_PROPERTYNO").val(),"LEGAL",$("#LogUsr").val(),"","LSW_SSTATUSUPDATE")
			
			var xml=UI_getdata($("#LERP_PRCSID").val(),$("#LERP_PROPERTYNO").val(),"","","","LSW_SCHKMUSTINSERTDATA")
          //  RedirectURL = window.location.origin+"/TPLSW/MyApplication"
		//	$(location).attr('href',encodeURI(RedirectURL));
		// window.history.back();
		  var ACCORD=''
		  ACCORD=$("#PrMs3").val()
		  RedirectURL=""
	  //   RedirectURL = document.referrer+"&PrMs3="+ACCORD;
	 //    $(location).attr('href',encodeURI(RedirectURL));
	      var   PAGENAME="UCVViewRpts"
	      RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=FormPageTab1"+"&PrMs10="+$("#PrMs10").val()+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
          $(location).attr('href',encodeURI(RedirectURL));
			}
		}
	});
	
	
$(document).on('click', '.GoBack', function () {
	
	
	// window.history.back();
	      var ACCORD=''
		  ACCORD=$("#PrMs3").val()
		  RedirectURL=""
    var   PAGENAME="UCVViewRpts"
	      RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=FormPageTab1"+"&PrMs10="+$("#PrMs10").val()+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
         $(location).attr('href',encodeURI(RedirectURL));
})

	
});

