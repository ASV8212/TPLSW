function GETDROPDOWNVAL(event)
{
	
	if (event == "Load")
		{

	var LoanType = UI_getdata("LONTYPE","","","","","LSW_SGETPRODVAL");

	$("#LODE_LONTYPE").html("")
	$("#LODE_LONTYPE").append($(LoanType).find("RESULT").html());
	var SubPrd=$("#LODE_SUBLONTYP").val()
	
	   /* if(SubPrd=="")
		{
	       $("#LODE_SUBLONTYP").parent().next().find(".MndtryAstr").html("");
	       $("#LODE_SUBLONTYP").removeClass('LODEMndtry');
		} */
	  }
	else if (event == "Page")
		{
		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LODE_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

		$("#LODE_SUBLONTYP").html("")
		$("#LODE_SUBLONTYP").append($(SubLoanType).find("RESULT").html());
		$('#LODE_SUBLONTYP').material_select();
		
		if($(SubLoanType).find("RESULT").html() == '<option value="">Select</option>')
			{
			$("#LODE_SUBLONTYP").parent().next().find(".MndtryAstr").html("");
			$("#LODE_SUBLONTYP").removeClass('LODEMndtry');
			//$(".SUBLONTYP").find('.select-dropdown').attr('disabled',true);
			$(".FRESUBLON").hide();
			}
		else
			{
			$("#LODE_SUBLONTYP").parent().next().find(".MndtryAstr").html("*");
			$("#LODE_SUBLONTYP").addClass('LODEMndtry');
			$(".SUBLONTYP").find('.select-dropdown').attr('disabled',false);
			$(".FRESUBLON").show();
			}
		}
}


function CheckTenure()
{
	var Tenure=$("#LODE_REQTENUR").val();
	
   if(Tenure!="")
   {	   
	if(Tenure<Number(1) || Tenure>Number(15))
		{
		 alert('Loan Tenure Should not be Greater than 15 and Less than 1')
		 $("#LODE_REQTENUR").val('');
		 return
		}
	else
		{
		var PrcsId=$("#LODE_PRCSID").val();
		var xml=UI_getdata(PrcsId,"","","","","LSW_SFETCHAPPLAGE")
		var Age=$(xml).find('AGE').text();
		
		var Result=parseInt(Tenure)+parseInt(Age)
		
		if(Result>'65')
			{
			  alert('Loan Maturity Should Not exceed 65')
			  //return false;
			}
		}
}
}

function CheckAmount()
{
	
	var LonType=$("#LODE_LONTYPE").val();
	var Scheme=$("#LODE_SCHEME").val();
	var LonAmt=$("#LODE_REQLONAMT").val().replace(/,/g, "");
if(LonAmt!="")
{
	var xml=UI_getdata(LonType,Scheme,LonAmt,"",$("#PrcsID").val(),"LSW_SCHECKLOANAMT")
	var Result=$(xml).find('RESULT').text()
	
	if(Result!="SUCCESS")
		{
		 alert(Result);
		 $("#LODE_REQLONAMT").val('');
		}
}
}

function SrcByDisble()
{
	var UserName=$(window.parent.parent.document).find("#LogUsr").val()
	var op=UI_getdata(UserName,"","","","","LSW_SLOANDTLSRC");
    
	if($(op).find('RESULT').text()=='BSM')
	{
	  $(".SOURC").attr("disabled",true)
	  $(".SOURC").addClass('disabled');
	  $("#LODE_SOURCBY").val('');
	  $('#LODE_SOURCBY').material_select();
	}
else{
	  $(".SOURC").attr("disabled",false)
	  $(".disabled").addClass('SOURC');
	  $(".disabled").removeClass('disabled');
	  $("#LODE_SOURCBY").val('');
	  $('#LODE_SOURCBY').material_select();
	}
	
	if($(op).find('RESULT').text()!='BSM')
	{
	  $(".SRCBY").attr("disabled",true)
	  $(".SRCBY").addClass('disabled');
	  $("#LODE_SOURCBY").val('');
	  $('#LODE_SOURCBY').material_select();
	}
else{
	  $(".SRCBY").attr("disabled",false)
	  $(".disabled").addClass('SRCBY');
	  $(".disabled").removeClass('disabled');
	  $("#LODE_SOURCBY").val('');
	  $('#LODE_SOURCBY').material_select();
	}
}

function CheckLoanTypeRM(Prifx1)
{
	if($("#LODE_PRIMARYLOANID").val()!="")
	{
		 $(".Mor").attr("disabled",false)
		 $(".Mor").attr("disabled",false)
	}
	else
		{
		 $(".Mor").attr("disabled",true)
		 $(".Mor").attr("disabled",true)
		
		}
	
	var LoanType=$("#LODE_LONTYPE").val();
	
	if(LoanType=="Registered Mortgage"||LoanType=="Re-Punch")
		{
		 $(".Mor").attr("disabled",false)
		 $(".Mor").attr("disabled",false)
 
		}
	else
		{
			 $(".Mor").attr("disabled",true)
		     $(".Mor").attr("disabled",true)
			
		//  $("."+Prifx1+"DBfields").attr('disabled',false);
		}
}

function getLoanDetails()
{
	var PrcsId=$("#LODE_PRCSID").val()
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETPROPDETAILS")
	
	$("#LODE_SOURCBY").val($(xml).find('LODE_SOURCBY').text());
	$("#LODE_CONECTNAME").val($(xml).find('LODE_CONECTNAME').text());
	$("#LODE_LONTYPE").val($(xml).find('LODE_LONTYPE').text());
	$("#LODE_SUBLONTYP").val($(xml).find('LODE_SUBLONTYP').text());
	$("#LODE_PRIMARYLOANID").val($(xml).find('LODE_PRIMARYLOANID').text());
	$("#LODE_CONECTID").val($(xml).find('LODE_CONECTID').text());
	$("#LODE_PRODUCT").val($(xml).find('LODE_PRODUCT').text());
	
	 var ConnectName= $(xml).find('LODE_CONECTNAME').text()
	var ConectID=$(xml).find('LODE_CONECTID').text()
	 var optn="<option  value='"+ConnectName+"'>" + ConectID + "</option>"
     $("#LODE_CONECTNAME").append(optn)
	 $("#LODE_CONECTNAME option:contains("+ConectID+")").attr("selected","selected")
	 
	 
	//$("#LODE_SOURCBY").attr('disabled',true);
	//$("#LODE_CONECTNAME").attr('disabled',true);
	//$("#LODE_LONTYPE").attr('disabled',true);
	//$("#LODE_SUBLONTYP").attr('disabled',true);
}

function CheckLoanType()
{
	var LoanType=$("#LODE_LONTYPE").val()
	
		if(LoanType == "Fresh Loans" || LoanType == "Purchase of property" || LoanType == "Grampanchayt property")
		{
              $(".FRESUBLON").hide();
               $(".SUBLONTYP").hide();
	//	$("#LODE_SUBLONPURP").removeClass('LODEMndtry');
		//$("#LODE_SUBLONPURP").parent().next().find(".MndtryAstr").html("");
		$(".PRIMID").hide();
		}
	   else if((LoanType == "Registered Mortgage")||(LoanType == "Re-Punch"))
		{
	   	    $(".FRESUBLON").hide();
		//	$("#LODE_SUBLONPURP").attr('disabled',true);
		//	$("#LODE_SUBLONPURP").removeClass('LODEMndtry');
		//	$("#LODE_SUBLONPURP").parent().next().find(".MndtryAstr").html("");
			$(".SUBLONTYP").hide();
			$(".PRIMID").show();
			//$("#LODE_PRIMARYLOANID").attr('disabled',true);
	    }
		else if(LoanType == "Existing Loans")
		{
		$(".SUBLONTYP").show();
		$(".FRESUBLON").show();
	//	$("#LODE_SUBLONPURP").attr('disabled',false);
	//	$("#LODE_SUBLONPURP").addClass('LODEMndtry');
	//	$("#LODE_SUBLONPURP").parent().next().find(".MndtryAstr").html("*");
		$(".PRIMID").show();
	//	$("#LODE_PRIMARYLOANID").attr('disabled',true);
		}
		
       else if((LoanType != "Existing Loans") && (LoanType != "BT"))
		{
    	$(".FRESUBLON").show();
	//	$("#LODE_SUBLONPURP").attr('disabled',true);
	//	$("#LODE_SUBLONPURP").removeClass('LODEMndtry');
	//	$("#LODE_SUBLONPURP").parent().next().find(".MndtryAstr").html("");
		$(".SUBLONTYP").hide();
		$(".PRIMID").show();
		
		}
	   else
		{
		$(".SUBLONTYP").show();
		$(".FRESUBLON").show();
	//	$("#LODE_SUBLONPURP").attr('disabled',false);
	//	$("#LODE_SUBLONPURP").addClass('LODEMndtry');
	//	$("#LODE_SUBLONPURP").parent().next().find(".MndtryAstr").html("*");
		$(".PRIMID").hide();
		}
}

function CheckSrc()
{
	var SrcBy=$("#LODE_SOURCBY").val()
	 if(SrcBy == "Direct")
    {
      $(".SOUDIR").hide();
	//$("#LODE_SOURCBY").removeClass('LODEMndtry');
	  $("#LODE_CONECTNAME").removeClass('LODEMndtry');
	}
	else
	 {
	    $(".SOUDIR").show();
		$("#LODE_CONECTNAME").addClass('LODEMndtry');
	 }
}

function putSchemeId(Val,ID)
{
	var Scheme=$("#"+Val).val()
	$("#"+ID).val(Scheme)
	//$("#LODE_SCHEME").val($("#LODE_SCHEME").text())
}


function GetSubloanPurpose(PURPOSE,SUBPURPOSE)
{
	var PURPOSE= $('#'+PURPOSE).val();
	var SubLonPurpose = UI_getdata("SUBLONPURPOS",PURPOSE,$("#DMY7").val().split('|')[8],"","","LSW_SGETPRODVAL");
    $("#"+SUBPURPOSE).html("")
	$("#"+SUBPURPOSE).append($(SubLonPurpose).find("RESULT").html());
	$("#"+SUBPURPOSE).material_select();	
	 // $('#'+Cluster).attr('disabled',true);	

	var LoanType=$("#LODE_LONTYPE").val()

if(PURPOSE=="Balance Transfer")
	{	
	 $(".SUBLON").show();
	 $("#LODE_SUBLONPURP").addClass("LODEMndtry");
    }
else
	{
	$(".SUBLON").hide();
	$("#LODE_SUBLONPURP").removeClass("LODEMndtry");
	}	
}


function loadSubloanPurpose()
{
var PURPOSE= $("#LODE_LONPURP").val();	
var LoanType=$("#LODE_LONTYPE").val()
if($("#DMY7").val().split("|")[8]=="ML01")
{
if(PURPOSE=="Balance Transfer")
{
 $(".SUBLON").show();
 $("#LODE_SUBLONPURP").addClass('LODEMndtry');
}
else
{
	$(".SUBLON").hide();
 $("#LODE_SUBLONPURP").removeClass('LODEMndtry');
}
}
else{
if(PURPOSE=="Business Use")
{
 $(".SUBLON").hide();
 $("#LODE_SUBLONPURP").removeClass('LODEMndtry');
}
else
{
$(".SUBLON").show();
$("#LODE_SUBLONPURP").attr('disabled',false);
$("#LODE_SUBLONPURP").addClass('LODEMndtry');
}
}
}

function RequestRate()
{
   var ReqRate=$("#LODE_REGINTSRAT").val();
	
	if(ReqRate!="")
	{
	
     if(ReqRate<Number(1) || ReqRate>Number(25))
			{
			 alert('ROI Should be Greater than 0 and Less than 25')
			 $("#LODE_REGINTSRAT").val('');
			 return
			}	
}
}

function CheckSource()
{
	var SourceBy=$("#LODE_SOURCBY").val()

	var prsid=$("#LODE_PRCSID").val();
	
	$("#LODE_CONECTNAME").val('');
	$("#LODE_CONECTNAME").find('option').remove()
	$("#LODE_CONECTNAME").material_select("destroy");
	$('#LODE_CONECTNAME').material_select(); 
	
    var FRWDRESULT=UI_getdata(prsid,SourceBy,"","","","LSW_SGETSRCDATA")
	 $("#LODE_CONECTNAME").append($(FRWDRESULT).find("FRWDRESULT").html());
	 $('#LODE_CONECTNAME').material_select(); 
}


function CheckSourceOnload()
{
	var ConnectName= $("#LODE_CONECTNAME").val()
	var ConectID=$("#LODE_CONECTID").val()
	var SourceBy=$("#LODE_SOURCBY").val()
    var prsid=$("#LODE_PRCSID").val();
	 $("#LODE_CONECTNAME").empty();
    var FRWDRESULT=UI_getdata(prsid,SourceBy,"","","","LSW_SGETSRCDATA")
	 $("#LODE_CONECTNAME").append($(FRWDRESULT).find("FRWDRESULT").html());
   //  $("#LODE_CONECTNAME").material_select("destroy");
   // $('#LODE_CONECTNAME').material_select(); 
	// $("#LODE_CONECTNAME").val(ConnectName)
   // var optn="<option  value='"+ConnectName+"'>" + ConectID + "</option>"
   // $("#LODE_CONECTNAME").append(optn)
	 //$("#LODE_CONECTNAME option:contains("+ConectID+")").attr("selected","selected")
	 $("#LODE_CONECTNAME option[value='"+ConnectName+"']").attr("selected","selected")
    $('#LODE_CONECTNAME').material_select();
}



function CheckDirect()
{
	 var SourceBy=$("#LODE_SOURCBY").val()
     if(SourceBy=="Direct")
		{
        $("#LODE_CONECTNAME").val('');
		$("#LODE_CONECTID").val('');
		$('#LODE_CONECTNAME').material_select();
        $(".SOUDIR").hide();
        $("#LODE_CONECTNAME").removeClass('LODEMndtry');
        $("#LODE_CONECTNAME").parent().next().find(".MndtryAstr").html("");
		}
     else
      {
         $(".SOUDIR").show();
         $("#LODE_CONECTNAME").addClass('LODEMndtry');
         $("#LODE_CONECTNAME").parent().next().find(".MndtryAstr").html("*");
      }
	 
}



function getReqROI(Input1,Input2)
{
	if(($("#DMY7").val().split("|")[8] != "ML01") || ($("#DMY7").val().split("|")[8] == "ML01" && Input1 =="LODE_PROPUSAGE"))
	{
	   var Input1Val=$("#"+Input1).val();
	
	if(Input2!="")
	{
	   var Input2Val=$("#"+Input2).val();
	}
	
	var xml=UI_getdata($("#DMY7").val().split("|")[8],Input1Val,Input2Val,"","","LSW_SGetREQROT")
	
	$("#LODE_REGINTSRAT").val($(xml).find('ROI').text());
	
      if($("#LODE_REGINTSRAT").val()!="")	
        {
          $("#LODE_REGINTSRAT").next().addClass("active");
        }
	}
}

function RequestTenure()
{
   var LODE_REQTENUR=$("#LODE_REQTENUR").val();

	var PRODUCT=$("#LODE_PRODUCT").val()
	
    if(PRODUCT == "HE02")
    {
    	 if(LODE_REQTENUR!="")
  	   {	   
  		if(LODE_REQTENUR<Number(1) || LODE_REQTENUR>Number(4))
  			{
  			 alert('Requested Tenure Should be Greater than 0 and Less than 4')
  			  $("#LODE_REQTENUR").val('');
			 $("#LODE_REQTENUR").next().removeClass('active')
  			 return
  			}
     }
   
     }
	 else if(PRODUCT == "ML01")
	 {
		if(LODE_REQTENUR!="")
		{
			var xml=UI_getdata($("#LODE_PROPUSAGE").val(),$("#LODE_PROPTYPE").val(),$("#DMY7").val().split("|")[8],LODE_REQTENUR,"","LSW_SVALDTTENR")
			
	
			if($(xml).find('RESULT').text()!="SUCCESS")
			{
				alert($(xml).find('RESULT').text())
				$("#LODE_REQTENUR").val('');
				$("#LODE_REQTENUR").next().removeClass('active')
				return
			}
			/**if(LODE_REQTENUR<Number(1) || LODE_REQTENUR>Number(7))
			{
				alert('Requested Tenure Should be Greater than 0 and Less than 7')
				$("#LODE_REQTENUR").val('');
				$("#LODE_REQTENUR").next().removeClass('active')
				return
			}**/
		}
	 }
   
   else
	   {
   
if(LODE_REQTENUR!="")
{	
     if(LODE_REQTENUR<Number(1) || LODE_REQTENUR>Number(15))
			{
			 alert('Requested Tenure Should be Greater than 0 and Less than 15')
			 $("#LODE_REQTENUR").val('');
			 $("#LODE_REQTENUR").next().removeClass('active')
			 return
			}	
}

	   }

}


function SubloandropdownOnload()
{   
	
	var SubloanTypeVal=$('#LODE_SUBLONTYP').val();
	var SubLoanType = UI_getdata("LONSUBTYPE",$("#LODE_LONTYPE").val(),"","","","LSW_SGETPRODVAL");

	$("#LODE_SUBLONTYP").html("")
	$("#LODE_SUBLONTYP").append($(SubLoanType).find("RESULT").html());
	$('#LODE_SUBLONTYP').material_select();	
	$('#LODE_SUBLONTYP').val(SubloanTypeVal);
	$('#LODE_SUBLONTYP').material_select();

}

function CheckLeadId()
{
	
	if($("#LODE_LEADID").val() == "")
		{
		   $(".LEAD").hide()
		   $("#LODE_LEADID").removeClass('LODEMndtry');	
		}
	else 
		{
		  $(".LEAD").hide()
		  $("#LODE_LEADID").removeClass('LODEMndtry');	
		}
}



function PRIMARYID()
{
if($("#LODE_LONTYPE").val()=="Registered Mortgage"||$("#LODE_LONTYPE").val()=="Re-Punch"||$("#LODE_LONTYPE").val()=="Existing Loans")	
{
    $('.PRIMID').show();
	//$("#LODE_PRIMARYLOANID").attr('disabled',false)
	$("#LODE_PRIMARYLOANID").addClass('LODEMndtry')
//	$("#LODE_PRIMARYLOANID").val('')
	
}
else
{
	$('.PRIMID').hide();
//	$("#LODE_PRIMARYLOANID").attr('disabled',true)
	$("#LODE_PRIMARYLOANID").removeClass('LODEMndtry')
	//$("#LODE_PRIMARYLOANID").val('')
	
}
	

}




function CHKPRODUCTTYPE()
{
	var PRODUCT=$("#LODE_PRODUCT").val()
	
       if(PRODUCT == "HE02")
		{
    	   $('.INTESYR').show()
		    $("#LODE_INTERESTYR").addClass('LODEMndtry')
		}
       else
    	   {
           $('.INTESYR').hide()
    	   }
	  
}


function CheckIntestYr()
{
	var Tenure=$("#LODE_INTERESTYR").val();
	 var LODE_REQTENUR=$("#LODE_REQTENUR").val();

   if(Tenure!="")
   {	   
	if(Tenure>=Number(LODE_REQTENUR))
		{
		 alert('Interest year should lesser than requested tenure')
		  $("#LODE_INTERESTYR").val('');
		  $("#LODE_INTERESTYR").next().removeClass('active')
		}
		
	else if(Tenure<Number(1))
		{
		 alert('Interest Year Should not be Zero')
		 $("#LODE_INTERESTYR").val('');
		  $("#LODE_INTERESTYR").next().removeClass('active')
		}
	
   
   }
   
   
}


function NEWPRODUCT()
{
	if($("#LODE_LONTYPE").val()=="GECL 3.0")
	{
	$("#LODE_REQTENUR").val('6') 
	$("#LODE_INTERESTYR").val('2')
	}
	else if($("#LODE_LONTYPE").val()=="GECL RST")
	{
		$("#LODE_REQTENUR").val('5') 
		$("#LODE_INTERESTYR").val('2')
	}
	else
	{
	  $("#LODE_REQTENUR").val('4') 
	  $("#LODE_INTERESTYR").val('1')
	}
    $("#LODE_SCHEME").val('S00007')
	$("#LODE_SCHEMEID").val('Banking Surrogate')
	$("#LODE_LONPURP").val('Business Use')
//	$("#LODE_REQLONAMT").val('0')
   
   $("#LODE_REQTENUR").attr('disabled',true)
	$("#LODE_INTERESTYR").attr('disabled',true)
	$("#LODE_SOURCBY").attr('disabled',true)
	$("#LODE_SUBLONTYP").attr('disabled',true)
	$("#LODE_LONPURP").attr('disabled',true)

	$("#LODE_PRIMARYLOANID").removeClass('LODEMndtry')
	$('.PRIMID').hide();
	$('.NEWPROD').hide();
	$(".SUBLON").hide();
	$(".FRESUBLON").hide();
	
	 getReqROI();
	 $("#LODE_REGINTSRAT").attr('disabled',true)
	 
    $("#LODE_SUBLONPURP").removeClass('LODEMndtry');
	
	/*if($("#LODE_REGINTSRAT").val()=="")
	{
	$("#LODE_REGINTSRAT").val('12.50')
	}*/
}

function GetPropType()
{
	var LonPurpose = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],$("#LODE_PROPUSAGE").val(),"","","LSW_SGETPRODVAL");

    $("#LODE_PROPTYPE").html("");
	$("#LODE_PROPTYPE").append($(LonPurpose).find("RESULT").html());
	$("#LODE_PROPTYPE").material_select();
}

