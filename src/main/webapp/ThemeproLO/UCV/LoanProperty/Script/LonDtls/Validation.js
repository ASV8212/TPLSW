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
		var SubLoanType = UI_getdata("LONSUBTYPE",$("#LODE_LONTYPE ").val(),"","","","LSW_SGETPRODVAL");

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

$('.CollectedPage').on('click', function() {
	
  if(($("[name=LODE_Mode]:checked").val() == "Online"))
	{
   //location.reload();
   $(".FormPageMultiTab").find("li.active").click();
 //window.location.reload()
	}
});

/*function CheckAmount()
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
}*/


function CheckAmount()
{
	var lon=$("#LODE_PRODUCT").val();
	var Amt=$("#LODE_REQLONAMT").val();
/* 	if($("#VERTICAL").val()=='UCV')
	{
		var roi=22;
		$("#LODE_REGINTSRAT").val(roi)
		$("#LODE_REGINTSRAT").next().addClass('active');	
	} */
/* if(Amt!="" && $("#VERTICAL").val()=='UCV')
{
	var xml=UI_getdata(lon,Amt.replace(/,/g, ""),"","",$("#PrcsID").val(),"LSW_SCHECKLOANAMT")
	var Result=$(xml).find('RESULT').text()
	if(Result!="SUCCESS")
		{
		   alert(Result);
		  $("#LODE_REQLONAMT").val('');
		}
} */

if(Amt!="")// && $("#VERTICAL").val()=='UCV Eco')
{
	var xml=UI_getdata(lon,Amt.replace(/,/g, ""),"Lnamt",$("#VERTICAL").val(),$("#LODE_SCHEME").val(),"LSW_SLNCHKUCVECO")
	var Result=$(xml).find('Result').text()
	if(Result!="Success")
		{
		   alert(Result);
		  $("#LODE_REQLONAMT").val('');	  
		  $("#LODE_REQLONAMT").next().removeClass('active');
		  return;
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
 function Chkproduct()
{
	var prcsid=$("#LODE_PRCSID").val()
	var LODE_PRODUCT=$("#LODE_PRODUCT").val()
	var result=UI_getdata($("#PrcsID").val(),LODE_PRODUCT,"","","","LSW_SCHCKPRODUCT");
	var chkpro=$(result).find("RESULT").text();
	 
	if(chkpro=='Y')
	{
		alert("This product is already exists");
		
		$("#LODE_PRODUCT").val('');
		$("#LODE_PRODUCT").material_select();
		
		return false;
	}
	
	if(LODE_PRODUCT=="T315" || LODE_PRODUCT=="T310" || LODE_PRODUCT=="T307" || LODE_PRODUCT=="T316")
	{
	$("#LODE_DEMANDamt").attr('disabled',false);
	}
	else
	{
	$("#LODE_DEMANDamt").attr('disabled',true);
	}
}   
function getLoanDetails1(HTML)
{
	var row = $(HTML).attr("data-row");
	
	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETPROPDETAILS")
	
	$("#LODE_SOURCBY"+row).val($(xml).find('LODE_SOURCBY').text());
	$("#LODE_CONECTNAME"+row).val($(xml).find('LODE_CONECTNAME').text());
	$("#LODE_LONTYPE"+row).val($(xml).find('LODE_LONTYPE').text());
	$("#LODE_SUBLONTYP"+row).val($(xml).find('LODE_SUBLONTYP').text());
	$("#LODE_PRIMARYLOANID"+row).val($(xml).find('LODE_PRIMARYLOANID').text());
	$("#LODE_CONECTID"+row).val($(xml).find('LODE_CONECTID').text());
	//$("#LODE_PRODUCT"+row).val($(xml).find('LODE_PRODUCT').text());
	ProdctName = $(xml).find('LODE_PRODUCT').text();
	
	 var ConnectName= $(xml).find('LODE_CONECTNAME').text()
	var ConectID=$(xml).find('LODE_CONECTID').text()
	 var optn="<option  value='"+ConnectName+"'>" + ConectID + "</option>"
     $("#LODE_CONECTNAME"+row).append(optn)
	 $("#LODE_CONECTNAME"+row+" option:contains("+ConectID+")").attr("selected","selected")
	
	//$("#LODE_SOURCBY").attr('disabled',true);
	//$("#LODE_CONECTNAME").attr('disabled',true);
	//$("#LODE_LONTYPE").attr('disabled',true);
	//$("#LODE_SUBLONTYP").attr('disabled',true);
}
function getSchemeDetails1(Type){
	if(Type=="Load")
	{
	var LODE_LONTYPE = $("#LODE_LONTYPE").val();
	var LODE_PRODUCT = $("#LODE_PRODUCT").val()
	var Scheme=$("#LODE_SCHEME").val()
	var xml_SCHEME=UI_getdata($("#PrcsID").val(),LODE_LONTYPE,LODE_PRODUCT,"","","LSW_SGETSCHEMEPRDWS");
	
    $("#LODE_SCHEME").html("")
	$("#LODE_SCHEME").append($(xml_SCHEME).find("RESULT").html());
	$("#LODE_SCHEME").val(Scheme);
	$("#LODE_SCHEME").material_select();
	}
	else
	{
		var LODE_LONTYPE = $("#LODE_LONTYPE").val();
	    var LODE_PRODUCT = $("#LODE_PRODUCT").val();
		
		var xml_SCHEME=UI_getdata($("#PrcsID").val(),LODE_LONTYPE,LODE_PRODUCT,"","","LSW_SGETSCHEMEPRDWS");
	   $("#LODE_SCHEME").html("")
	   $("#LODE_SCHEME").append($(xml_SCHEME).find("RESULT").html()); 
	   $("#LODE_SCHEME").material_select();
	}
}

function CheckLoanType(Event)
{
	if(Event=="Load")
	{
		var LoanType=$("#DMY7").val().split('|')[0]
	}
	else
	{
	   var LoanType=$("#LODE_LONTYPE").val()
	}
	
		if(LoanType == "Fresh Loans" || LoanType == "Micro LAP" || LoanType == "Purchase of property" || LoanType == "Grampanchayt property")
		{
              $(".FRESUBLON").hide();
               $(".SUBLONTYP").hide();
	//	$("#LODE_SUBLONPURP").removeClass('LODEMndtry');
	//	$("#LODE_SUBLONPURP").parent().next().find(".MndtryAstr").html("");
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
		//$("#LODE_SUBLONPURP").attr('disabled',false);
		//$("#LODE_SUBLONPURP").addClass('LODEMndtry');
		//$("#LODE_SUBLONPURP").parent().next().find(".MndtryAstr").html("*");
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
	//var xml=UI_getdata(PURPOSE,"","","","","LSW_SGETSUBLOANPUR")
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
if(PURPOSE=="Balance Transfer")
{
 $(".SUBLON").show();
 $("#LODE_SUBLONPURP").addClass('LODEMndtry');
}
else
{
$(".SUBLON").hide();
$("#LODE_SUBLONPURP").attr('disabled',false);
$("#LODE_SUBLONPURP").removeClass('LODEMndtry');
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
	
    var FRWDRESULT=UI_getdata(prsid,SourceBy,"",$("#LogUsr").val(),"","LSW_SGETSRCDATA")
	 $("#LODE_CONECTNAME").append($(FRWDRESULT).find("FRWDRESULT").html());
	 $('#LODE_CONECTNAME').material_select(); 
}

//function getproductdetail()
//{
	 

	//var ltype=$("#LODE_LONTYPE").val();
   //var prodetl=UI_getdata("Product",ltype,"","","","LSW_SGETPRODVAL")
	 //$("#LODE_PRODUCT").append($(prodetl).find("RESULT").html());
	 //$("#LODE_PRODUCT").material_select();
 
//}


function GetNaturProduct(LoanType,Product)  
{	
	//var row=$($('.LoanDetail').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	var LoanType=$(LoanType).val();
	var xml=UI_getdata("Product",LoanType,$("#VERTICAL").val(),"","","LSW_SGETPRODVAL");
	
    $("#"+Product).html("")
	$("#"+Product).append($(xml).find("RESULT").html());
	$("#"+Product).material_select();	
	
	//$("#LODE_PRODUCT").html("");
	//$("#LODE_PRODUCT").append($(xml).find("RESULT").html());
	//$("#LODE_PRODUCT").material_select();	
	
}

function GetNaturProduct1()  
{	
  var ProdctName=$("#LODE_PRODUCT").val();
	var LoanType=$("#LODE_LONTYPE").val();
	var xml=UI_getdata("Product",LoanType,$("#VERTICAL").val(),"","","LSW_SGETPRODVAL");
	
    $("#LODE_PRODUCT").html("")
	$("#LODE_PRODUCT").append($(xml).find("RESULT").html());
	$("#LODE_PRODUCT").val(ProdctName);
	$("#LODE_PRODUCT").material_select();	
	//$("#LODE_PRODUCT").html("");
	//$("#LODE_PRODUCT").append($(xml).find("RESULT").html());
	//$("#LODE_PRODUCT").material_select();	
	
}

function getloantype()
{ 
  var lntype=UI_getdata("LonType", $("#VERTICAL").val(),"","","","LSW_SGETPRODVAL")
	 $("#LODE_LONTYPE").append($(lntype).find("RESULT").html()); 
	 $("#LODE_LONTYPE").material_select();
}

///////////


function Ifscdetls(IDVAL,BNKNAME,BRANCH)
{
var val=GetIfsc($(IDVAL).val());

if($(val).find("BANK").text() == "")
{
$(IDVAL).val('');
$('#'+BNKNAME).val('');
$('#'+BRANCH).val('');
$('#'+BNKNAME).next().removeClass('active');
$('#'+BRANCH).next().removeClass('active');
}
if($(val).find("BANK").text() != "")
{
$('#'+BNKNAME).val($(val).find("BANK").text());	
$('#'+BNKNAME).next().addClass('active');
$('#'+BNKNAME).attr('disabled',true)
}
if($(val).find("BRANCH").text() != "")
{
$('#'+BRANCH).val($(val).find("BRANCH").text());
$('#'+BRANCH).next().addClass('active');
$('#'+BRANCH).attr('disabled',true)
}
/*
if($(val).find("CITY").text() != "")
{
$('#'+CITY).val($(val).find("CITY").text());
$('#'+CITY).next().addClass('active');
$('#'+CITY).attr('disabled',true)
}

if($(val).find("STATE").text() != "")
{
$('#'+STATE).val($(val).find("STATE").text());
$('#'+STATE).next().addClass('active');
$('#'+STATE).attr('disabled',true)
}*/
}

function GetSecUnsec(Event)
 {
	 if(Event=="Load")
	 {
		var Prod=$("#LODE_PRODUCT").val() 

		if(Prod=="T311"|| Prod=="T303" || Prod=="T302" || Prod=="T301" || Prod=="T304" ||Prod=="T208" || Prod=="T312" || Prod=="T313" || Prod=="T317")	
	     {
			$('.SECUR').attr('disabled',false);
		 }
		 else
		 {
			$('.SECUR').attr('disabled',true); 
		 }
	 }
	  if(Prod=="T303")
		 {
		 $('.UNSECUR').attr('disabled',true);
		
		 }
	 else
	 {

	var PRO =$("#LODE_PRODUCT").val();
	
  if(PRO=="T311"|| PRO=="T303" || PRO=="T302" || PRO=="T301" || PRO=="T304"||PRO=="T208" || PRO=="T312" || PRO=="T313" || Prod=="T317")	
	{
	 $('.SECUR').attr('disabled',false)
	}
	else
	{
	 $('.SECUR').attr('disabled',true)
	 $('input[name="LODE_SECURED"]').prop('checked', false)
	 //$($($('.LoanDetail').find(event.target).closest('.DYNROW')[0]).find('.SECUR')[1]).find('input[name="LODE_SECURED"]').prop('checked', false)
	 //$($($('.LoanDetail').find(event.target).closest('.DYNROW')[0]).find('.SECUR')[0]).find('input[name="LODE_SECURED"]').prop('checked', false)	
	}
	

 if(PRO=="T303" || Prod=="T208" )
		 {
		 $('.UNSECUR').attr('disabled',true);
		 
		 } 
	
   }
 }
/////
function UnsecDisableSecu() 
{
	//var Sec =$("#LODE_SECURED"+row).val();
	var secu=$("input[name='LODE_SECURED']:checked"). val();
	if(secu=="Unsecured") 
	  {
      //$($('.LoanDetail').find(event.target).closest('.DYNROW')[0]).find('.SECUR').attr('disabled',true)
      //$($($('.LoanDetail').find(event.target).closest('.DYNROW')[0]).find('.SECUR')[1]).find("input[name='LODE_SECURED']:checked"). val(); 
      }  
} 
		 
	 


	  



/////////
function CheckSourceOnload()
{
	var ConnectName= $("#LODE_CONECTNAME").val()
	var ConectID=$("#LODE_CONECTID").val()
	var SourceBy=$("#LODE_SOURCBY").val()
    var prsid=$("#PrcsID").val();
	 $("#LODE_CONECTNAME").empty();
    var FRWDRESULT=UI_getdata(prsid,SourceBy,"",$("#LogUsr").val(),"","LSW_SGETSRCDATA")
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
		if($("#DMY5").val().split('|')[2]=="PreLogin")
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
	if(($("#DMY7").val().split("|")[8] == "ML01" && Input1 =="LODE_PROPUSAGE"))
	{
		RequestTenure();
	}
		}
}

/*
function getReqROI()
{
    var PRODID=$("#DMY7").val().split("|")[8] 
	var SCHEME=$("#LODE_SCHEME").val()
	var xml=UI_getdata(PRODID,SCHEME,"","","","LSW_SGetREQROT")
	
	$("#LODE_REGINTSRAT").val($(xml).find('ROI').text());	
        $("#LODE_REGINTSRAT").next().addClass("active");
}*/

/*
function RequestTenure()
{
   var LODE_REQTENUR=$("#LODE_REQTENUR").val();
	
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

*/


function RequestTenure(Tenure)
{
   var LODE_REQTENUR=$("#"+Tenure).val();

if(LODE_REQTENUR!="")
{	
  if(LODE_REQTENUR<Number(1) || LODE_REQTENUR>Number(48))
	{
	alert('Requested Tenure Should be Greater than 0 and Less than 48')
	$("#"+Tenure).val('');
	$("#"+Tenure).next().removeClass('active')
	return
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
/*
function ChkLIPScheme()
{
  var Scheme=$("#LODE_SCHEME").val();
  
    if(Scheme=="S00005")
	  {
	      if (confirm("For LIP, For each property processing fee of Rs. 4,100 will be charged \n Once saved and navigated, Scheme can not be changed") == true) 
	        {
			   $('input[name="CBSI_GENTER"]').prop('checked', true);
		    }
	     else 
		    {
	    	 $("#LODE_SCHEME").val('');
	    	 $("#LODE_SCHEME").material_select();	
		    }	
	  }
}*/

function ChkSchemeLoad()
{
	var Scheme=$("#LODE_SCHEME").val();
	if(Scheme != "")
	 {
	  if(Scheme=="S00005")
		{
		 $("#LODE_SCHEME").attr('disabled',true);
		}
	  else
		{
		  $("#LODE_SCHEME").find('.NLIP').attr('disabled',true)
		}
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
	else if($("#LODE_LONTYPE").val()=="GECL Additional 10%")
	{
		$("#LODE_REQTENUR").val('5') 
		$("#LODE_INTERESTYR").val('2')
	}
	else if($("#LODE_LONTYPE").val()=="GECL 2.0")
	{
		$("#LODE_REQTENUR").val('5') 
		$("#LODE_INTERESTYR").val('1')
	}
	else
	{
	$("#LODE_REQTENUR").val('4') 
	$("#LODE_INTERESTYR").val('1')
	}
	
    $("#LODE_SCHEME").val('S00007')
	$("#LODE_SCHEMEID").val('Banking Surrogate')
	//$("#LODE_LONPURP").val('Business Use')
	//$("#LODE_REQLONAMT").val('0')
   
   $("#LODE_REQTENUR").attr('disabled',true)
	$("#LODE_INTERESTYR").attr('disabled',true)
	$("#LODE_SOURCBY").attr('disabled',true)
	$("#LODE_SUBLONTYP").attr('disabled',true)
	//$("#LODE_LONPURP").attr('disabled',true)

	$("#LODE_PRIMARYLOANID").removeClass('LODEMndtry')
	$('.PRIMID').hide();
	$('.NEWPROD').hide();
	$(".SUBLON").hide();
	$(".FRESUBLON").hide();
	
	// $("#LODE_REGINTSRAT").val('12.50')
	
	   getReqROI();
	 $("#LODE_REGINTSRAT").attr('disabled',true)
	 
    $("#LODE_SUBLONPURP").removeClass('LODEMndtry');
}

function getRepay()
{
	var vertical=$("#VERTICAL").val();
	var Lntype=$("#LODE_LONTYPE").val();
	var fretype=UI_getdata("Repay",Lntype,vertical,"","","LSW_SGETPRODVAL")
	 $("#LODE_REPAYMENT").append($(fretype).find("RESULT").html());
	 //$("#LODE_LONTYPE").material_select();
	 
}

function getfrequency()
{
   var fretype=UI_getdata("Frequency", "","","","","LSW_SGETPRODVAL")
	 $("#LODE_FREQUENCY").append($(fretype).find("RESULT").html());
	 //$("#LODE_LONTYPE").material_select();
}

function SAVEDATA()
{
	
$('.Save').click()	
}

function GetPropType()
{
	var LonPurpose = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],$("#LODE_PROPUSAGE").val(),"","","LSW_SGETPRODVAL");

    $("#LODE_PROPTYPE").html("");
	$("#LODE_PROPTYPE").append($(LonPurpose).find("RESULT").html());
	$("#LODE_PROPTYPE").material_select();
}

function HandlePropDtl()
{
var ver=$("#VERTICAL").val();
if(ver!="UCV Eco")
{
	if($("input[name=LODE_SECURED]:checked").val() == "Secured")
	{
		$("#FormPageTab2").show();
		$('#LODE_INCCON').removeAttr("disabled");
	}
	else
	{
		$("#FormPageTab2").hide()
		$('#LODE_INCCON').prop('checked', false);
		CheckIncome();
		$('#LODE_INCCON').attr("disabled","disabled");
	}
	}
}



function CheckLIMITDTLS()
{
	var Data= $("#LODE_LONTYPE").val();

		var vertical=$("#VERTICAL").val();
		var Lntype=$("#LODE_LONTYPE").val();
		var fretype=UI_getdata("Repay",Lntype,vertical,"","","LSW_SGETPRODVAL")
		$("#LODE_REPAYMENT").html("");
		$("#LODE_REPAYMENT").append($(fretype).find("RESULT").html());
		$('#LODE_REPAYMENT').material_select();	
	
	if(Data=="Term Loan" || Data=="Over Draft" || Data=="DLOD")
		{
			$("#LODE_USANCEPRD").val('');		
			$("#LODE_USANCEPRD").removeClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("");
			$(".USAN").hide()
		}
/* 		else if(Data=="Over Draft" )
		{
			$("#LODE_USANCEPRD").val('');		
			$("#LODE_USANCEPRD").removeClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("");
			$(".USAN").hide()
		}
		else if(Data=="DLOD")
		{	
			$("#LODE_USANCEPRD").val('');		
			$("#LODE_USANCEPRD").removeClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("");
			$(".USAN").hide()
		} */
		else if(Data=="WCDL" || Data=="Bill Discounting")
		{
			$(".USAN").show()
			$("#LODE_USANCEPRD").addClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("*");
		}
	/* 	else if(Data=="Bill Discounting")
		{		
			$(".USAN").show()
			$("#LODE_USANCEPRD").addClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("*");
		} */
		else
		{
			$("#LODE_USANCEPRD").val('');		
			$("#LODE_USANCEPRD").removeClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("");
			$(".USAN").hide()
		}
	if(Data=="DLOD")
		{
		$(".LMTREDUCE").show()
		//$(".LMTAMT").show()
		}
	else
		{
		$(".LMTREDUCE").hide()
		//$(".LMTAMT").hide()
		}
		
		if(Data!="Term Loan")
		{
			$("#LODE_Moratoritm").val('');		
			$("#LODE_Moratoritm").removeClass('LODEMndtry');
			$("#LODE_Moratoritm").parent().next().find(".MndtryAstr").html("");
			$(".MOR").hide()
			
		}
		else
		{
			$(".MOR").show()
			$("#LODE_Moratoritm").addClass('LODEMndtry');
			$("#LODE_Moratoritm").parent().next().find(".MndtryAstr").html("*");
				$("#LODE_Moratoritm").val('0');		
				$("#LODE_Moratoritm").next().addClass('active');
				$(".MORT").attr("disabled",true)
		}
	/* if(Data=="WCDL")
		{
		$("#LODE_REPAYMENT").val('Bullet');
		$("#LODE_REPAYMENT").attr('disabled',true);
		$("#LODE_REPAYMENT").material_select();
		$(".FREQ").hide()
		$(".USAN").show()
		}
	else
	{
		$("#LODE_REPAYMENT").val("");
		$("#LODE_REPAYMENT").attr('disabled',false);
		$("#LODE_REPAYMENT").material_select();
		$(".FREQ").show()	
		$(".USAN").hide()
		
	} */
 
	CheckREDUCE()	
}

function CheckLIMITDTLSOnload()
{
	var Data=$("#LODE_LONTYPE").val();
if($("#LODE_REPAYMENT").val()=='')
		{
	
		if($("#LODE_REPAYMENT").val()=='')
		{
		var vertical=$("#VERTICAL").val();
		var Lntype=$("#LODE_LONTYPE").val();
		var fretype=UI_getdata("Repay",Lntype,vertical,"","","LSW_SGETPRODVAL")
		$("#LODE_REPAYMENT").html("");
		$("#LODE_REPAYMENT").append($(fretype).find("RESULT").html());
		$('#LODE_REPAYMENT').material_select();	
		}
		}

	if(Data=="Term Loan" || Data=="Over Draft" || Data=="DLOD")
		{
			$("#LODE_USANCEPRD").val('');		
			$("#LODE_USANCEPRD").removeClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("");
			$(".USAN").hide()
		}
/* 		else if(Data=="Over Draft" )
		{
			$("#LODE_USANCEPRD").val('');		
			$("#LODE_USANCEPRD").removeClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("");
			$(".USAN").hide()
		}
		else if(Data=="DLOD")
		{	
			$("#LODE_USANCEPRD").val('');		
			$("#LODE_USANCEPRD").removeClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("");
			$(".USAN").hide()
		} */
		else if(Data=="WCDL" || Data=="Bill Discounting")
		{
			$(".USAN").show()
			$("#LODE_USANCEPRD").addClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("*");
		}
/* 		else if(Data=="Bill Discounting")
		{		
			$(".USAN").show()
			$("#LODE_USANCEPRD").addClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("*");
		} */
		else
		{
			$("#LODE_USANCEPRD").val('');		
			$("#LODE_USANCEPRD").removeClass('LODEMndtry');
			$("#LODE_USANCEPRD").parent().next().find(".MndtryAstr").html("");
			$(".USAN").hide()
		}
	if(Data=="DLOD")
		{
		$(".LMTREDUCE").show()
		//$(".LMTAMT").show()
		}
	else
		{
		$(".LMTREDUCE").hide()
		//$(".LMTAMT").hide()
		}
		if(Data!="Term Loan" && $("#LODE_Moratoritm").val()=='')
		{
			$("#LODE_Moratoritm").val('');		
			$("#LODE_Moratoritm").removeClass('LODEMndtry');
			$("#LODE_Moratoritm").parent().next().find(".MndtryAstr").html("");
			$(".MOR").hide()
			
		}
		else
		{
			$(".MOR").show()
			$("#LODE_Moratoritm").addClass('LODEMndtry');
			$("#LODE_Moratoritm").parent().next().find(".MndtryAstr").html("*");
				$("#LODE_Moratoritm").val('0');		
				$("#LODE_Moratoritm").next().addClass('active');
				$(".MORT").attr("disabled",true)
		}
		/* 
	if(Data=="DLOD")
		{
		  $(".LMTREDUCE").show()
		  $(".LMTAMT").show()
		}
	else
		{
		   $(".LMTREDUCE").hide()
		   $(".LMTAMT").hide()
		}
	if(Data=="WCDL")
		{
		$("#LODE_REPAYMENT").val('Bullet');
		$("#LODE_REPAYMENT").attr('disabled',true);
		$("#LODE_REPAYMENT").material_select();
		$(".FREQ").hide()
		$(".USAN").show()
		}
	else
	{
		$("#LODE_REPAYMENT").attr('disabled',false);
		$(".FREQ").show()	
		$(".USAN").hide()
		
	}		 */
		
		
	CheckREDUCE()	
}
function ChkROI()
{
	var Roi=$("#LODE_REQTENUR").val();
	var Mon=$("#LODE_Moratoritm").val();
	//var Result=Roi*12;
	if(parseInt(Mon)>=parseInt(Roi))
	{
		alert("Moratorium is more than tenure years in months");
		$("#LODE_Moratoritm").val("");
	}
}



function AddMultiLon()
{
	var DATA=["LoanDetail|"];
	 for (j=0;j<DATA.length;j++)
		 {
		   var LoanDetail=DATA[j].split("|")[0];
	       var row = $("." + LoanDetail).find(".DYNROW").length;
		   for(i=0;i<row;i++)
		   {
          if(i>0)	
          {
			   $("#"+("LODE_SOURCBY"+[i+1])).val( $("#LODE_SOURCBY1").val());
	       //$("#"+("LODE_SOURCBY"+[i+1])).attr('disabled',false);
	       $("#"+("LODE_SOURCBY"+[i+1])).material_select();
		   
		  // $("#"+("LODE_LONTYPE"+[i+1])).attr('disabled',false);
	      // $("#"+("LODE_LONTYPE"+[i+1])).material_select();
         }
	      }
        }
}

function ChkLonCnt()
{
	var DATA=["LoanDetail|"];
	 for (j=0;j<DATA.length;j++)
		 {
		   var LoanDetail=DATA[j].split("|")[0];
	       var row = $("." + LoanDetail).find(".DYNROW").length;
		   if(row>=2)
		   {
			   alert('Two Loan Details only added');
			   return false;
		   }
		   else
		   {
			   AddPageMultiData('',$('#LODE_PRCSID').val(),'','LoanDetail','LODEDBfields');
			   AddMultiLon();
		   }
		 }
}

function CheckREDUCE()
{
	
	var Data=$("input[name='LODE_DLODTYPE']:checked"). val();
	 var Lon=$("#LODE_LONTYPE").val();
	if(Data=="Percentage")
		{
		$(".LMTPER").show()
		$(".LMTAMT").hide()
		$(".AMTRED").val('')
		}
	else if(Data=="Amount")
		{
		$(".LMTPER").hide()
		$(".LMTAMT").show()
		$(".LMTRED").val('')
		}
/* 	else if(Lon=="DLOD")
		{
		$(".LMTAMT").show()
		} */
		else{
		$(".LMTPER").hide()
		$(".LMTAMT").hide()
		}
		
}


function CheckLONAMT()
{
  var  LONAMT=$("#LODE_REQLONAMT").val().replace(/,/g, "");
   var  REDAMT=$("#LODE_DLODAMOUNT").val().replace(/,/g, "");
   
   if(LONAMT=="")
	{
	LONAMT=0	
	}
	if(REDAMT=="")
	{
	REDAMT=0	
	}
	
   if(parseFloat(LONAMT)<parseFloat(REDAMT))
   {
	alert('Reduce Amount Should not greater then Loan Amount')  
   $("#LODE_DLODAMOUNT").val('')	
   }
		
}

function chkupfrnt(LonType,Product)
{
   var front=$("input[name='LODE_COLLECTIONTYPE']:checked").val();
   if (front=="Upfront")
	{
   if (confirm("Product Type will be freeze on the Upfront is selected?") == true) {
	     $("#"+LonType).attr('disabled',true);
	     $("#"+LonType).material_select();
		 
		 $("#"+Product).attr('disabled',true);
	     $("#"+Product).material_select();
	
		$(".MODE").show()
		
        $('.BnkMndtry').addClass('LODEMndtry')
	}
	else
	{
		 $("#"+LonType).attr('disabled',false);
	     $("#"+LonType).material_select();
		 
		 $("#"+Product).attr('disabled',false);
	     $("#"+Product).material_select();
		 
		$(".MODE").hide()
		$(".CHANGE").hide()
		 $(".CHANGEFLD").val('');
        $('.BnkMndtry').removeClass('LODEMndtry');
		$('input[name="LODE_COLLECTIONTYPE"]').prop('checked', false);
		$('input[name="LODE_Mode"]').prop('checked', false)
	}
   }
   else
   {
	     $("#"+LonType).attr('disabled',false);
	     $("#"+LonType).material_select();
		 
		 $("#"+Product).attr('disabled',false);
	     $("#"+Product).material_select();
	 $('input[name="LODE_Mode"]').prop('checked', false)
	 $(".MODE").hide()
	 $(".CHANGE").hide()
	 $(".CHANGEFLD").val('');
	 $(".CHANGEFLDL").removeClass('active');
     $('.BnkMndtry').removeClass('LODEMndtry');
	  $(".OnlineBtn").hide();
   }
} 
 function CHKCHANGE()
 {
	 
	//$("#COBI_GSTNUM").attr('disabled',false);
	
	var chk=$("input[name='LODE_Mode']:checked"). val();
	
	if(chk=="Cheque"||chk=="DD")
	{
         $("#LODE_NUMB").addClass('LODEMndtry');
		 $("#LODE_BANK").addClass('LODEMndtry');
		 $("#LODE_BRANCH").addClass('LODEMndtry');
		 $("#LODE_NUMB").next().find(".MndtryAstr").html("*");
		 $("#LODE_BANK").next().find(".MndtryAstr").html("*");
         $("#LODE_BRANCH").next().find(".MndtryAstr").html("*");
		 $(".CHANGE").show();
	     $(".OnlineBtn").hide();
		
	}
	else  if(chk=="Online")
	{
		 /* $("#LODE_NUMB").val('');
		 $("#LODE_BANK").val('');
		 $("#LODE_BRANCH").val(''); */
         $("#LODE_NUMB").removeClass('LODEMndtry');
		 $("#LODE_BANK").removeClass('LODEMndtry');
		 $("#LODE_BRANCH").removeClass('LODEMndtry');
		 $("#LODE_NUMB").next().find(".MndtryAstr").html("");
		 $("#LODE_BANK").next().find(".MndtryAstr").html("");
         $("#LODE_BRANCH").next().find(".MndtryAstr").html("");
		// $("#COBI_GSTNUM").attr('disabled',true);
		 $(".CHANGE").hide(); 
		 $(".OnlineBtn").show();
		
	}
	else 
	{
		 /* $("#LODE_NUMB").val('');
		 $("#LODE_BANK").val('');
		 $("#LODE_BRANCH").val(''); */
         $("#LODE_NUMB").removeClass('LODEMndtry');
		 $("#LODE_BANK").removeClass('LODEMndtry');
		 $("#LODE_BRANCH").removeClass('LODEMndtry');
		 $("#LODE_NUMB").next().find(".MndtryAstr").html("");
		 $("#LODE_BANK").next().find(".MndtryAstr").html("");
         $("#LODE_BRANCH").next().find(".MndtryAstr").html("");
		// $("#COBI_GSTNUM").attr('disabled',true);
		 $(".CHANGE").hide(); 
		 $(".OnlineBtn").hide();
		 $(".PAYONLINE").hide();
	}
	
 }

function RmoveLon()
{
	 var html=$('.LoanDetail').find(".DYNROW")
	 var row = $('.LoanDetail').find(".DYNROW").length;
	 
	 for (i=0;i<row;i++)
	 {
	 if(i>0)
		{
		  $($('.LoanDetail').find(".DYNROW")[i]).find(".DLTICON").show(); 
		}
	  else
	   {
		 $($('.LoanDetail').find(".DYNROW")[i]).find(".DLTICON").hide();
	   }
   } 
}

function GetScheme(Scheme,LonId,SchemeID)
{
	var SchemeVal =$("#"+Scheme).val()
	
	var result=UI_getdata($("#PrcsID").val(),$("#"+LonId).val(),"","","","LSW_SCHECKSCHEME");
	var chk=$(result).find("RESULT").text();
	 
	if(chk=='Y')
	{

	if (confirm("If you select scheme, your saved scheme will be delete in CAM?") == true) 
	{
		
		//var Datavalue = $(this).val();
		$("#"+SchemeID).val($($("#"+Scheme).find('option[value="' + SchemeVal + '"]')[0]).text());
		$("#Save").click();
		UI_getdata($("#PrcsID").val(),$("#"+LonId).val(),"","","","LSW_SGETSCHEME")
	}
	else
	{
		$("#"+Scheme).val('');
		$("#"+Scheme).material_select();
	}
  }
  else
  {
	$("#"+SchemeID).val($($("#"+Scheme).find('option[value="' + SchemeVal + '"]')[0]).text());
  }
}

function CheckStepFld(Step,period,Amt)
{
  if($("#"+Step).val()=="Step Up" || $("#"+Step).val()=="Step Down")
  {
	 $(".STEPFLD").show(); 
	 $("#"+Amt).addClass("LODEMndtry");
	 $("#"+period).addClass("LODEMndtry");
  }
  else
  {
	 $(".STEPFLD").hide();
	 $("#"+Amt).val('');
	 $("#"+Amt).next().removeClass('active');
	 $("#"+period).next().removeClass('active');
	 $("#"+period).val('');
	 $("#"+Amt).removeClass("LODEMndtry");
	 $("#"+period).removeClass("LODEMndtry");
  }
		var Tyofrepy=$("#LODE_REPAYMENT").val();
		var Lntype=$("#LODE_LONTYPE").val();
		var fretype=UI_getdata("Frequency",Tyofrepy,Lntype,"","","LSW_SGETPRODVAL")
		$("#LODE_FREQUENCY").html("");
		$("#LODE_FREQUENCY").append($(fretype).find("RESULT").html());
		$('#LODE_FREQUENCY').material_select();	
}	
function CheckIncome(){
	if($('#LODE_INCCON').is(':checked')==true)
	{
		$(".NOOFAC").show(); 
		$(".ACCO").addClass('LODEMndtry');
		$(".ACCO").next().find(".MndtryAstr").html("*");
	}
	else
	{
		$(".ACCO").val('');
		$(".ACCO").removeClass('LODEMndtry');
		$(".ACCO").next().find(".MndtryAstr").html("*");
		$("#LODE_NOOFACCT").val('');
		$("#LODE_NOOFACCT").next().removeClass("active");
		$(".NOOFAC").hide();
		var	value=$("#PrcsID").val();
		var fretype=UI_getdata(value,"","","","","LSW_SLONPROPDTLS")
	}
}
/* function CheckSche()
{
	var check=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSCHEMEUCV");
	$("#LODE_SCHEME").append($(check).find ('SCHEME').html());
	$("#LODE_SCHEME").material_select();
	
} */

function Getsche()
{
	var Pro = UI_getdata("PROFILE","","","","","LSW_SGETPRODVAL");
	
	$("#LODE_SCHEME").html("")
	$("#LODE_SCHEME").append($(Pro).find("RESULT").html());
	$("#LODE_SCHEME").material_select();	
}


function InitMultiLoan()
{
	$("#Save").click()
	var result=UI_getdata($("#PrcsID").val(),$("#LODE_NOOFACCT").val(),$("#APFI_APPLNO").text(),"","","LSW_SMULTILOANINTI");
	var chk=$(result).find("RESULT").text();
	if(chk=='Y')
	{
      alert($(result).find("MSG").text());
	}
	//location.reload(true);
}
function ChkCrdt()
{
	var chkcrd=$("#LODE_CRDTSHELD").val()
    if(chkcrd=="Yes")
	  {
		 $(".CRDT").show();
		// $(".CRDT").addClass('CEMIMndtry');
         $("#LODE_CRDTAMT").addClass('LODEMndtry');
         $("#LODE_CRDTAMT").next().find(".MndtryAstr").html("*");
		 		 $("#LODE_HOSPICRDTAMT").addClass('LODEMndtry');
         $("#LODE_HOSPICRDTAMT").next().find(".MndtryAstr").html("*");
	  }
	  else
	  {
		 //$("#LODE_CRDTAMT").material_select();
		 $("#LODE_CRDTAMT").val('');
		 $("#LODE_CRDTAMT").removeClass('LODEMndtry');
         $("#LODE_CRDTAMT").next().find(".MndtryAstr").html("");
		 		 $("#LODE_HOSPICRDTAMT").val('');
		 $("#LODE_HOSPICRDTAMT").removeClass('LODEMndtry');
         $("#LODE_HOSPICRDTAMT").next().find(".MndtryAstr").html("");
		 $(".CRDT").hide();
	  }
}

function ChkNoAcc()
{
	
	var chkacc=$("#LODE_NOOFACCT").val();
	if(chkacc>=6)
	{
		$("#LODE_NOOFACCT").val('');
		alert("Kindly enter the below 5");
	}
}
function CheckExp()
{
	var Exp=$("#LODE_Exist").val().replace(/,/g,'');
	if(Exp!="")
   {	   
	if(Exp>Number(1000000000))
		{
		 $("#LODE_Exist").val('');
		 alert('Existing Exposure Should not be Greater than 100 Crores')
		 return
		}
	}
}	
$(document).on("blur", ".Chkinsnum", function() {
var FirstLetter=$("#LODE_NUMB").val().substring(0, 1);
if(parseInt(FirstLetter)==0)
{
	alert ("Enter the Valid Number,Cannot be Start with Zero");
	$(this).val('');
	$(this).next().removeClass('active')
}
});

function CheckDemand()
{
	
	var lon=$("#LODE_PRODUCT").val();
		//var LnAmt=$("#DMY3").val().split("|")[0]
		if($("#VERTICAL").val()=='UCV')
		{
			/* if($("#LODE_REGINTSRAT").val()=="")
			{
				var roi=22;
				$("#LODE_REGINTSRAT").val(roi)
				$("#LODE_REGINTSRAT").next().addClass('active');		
			} */
			var amt= $("#LODE_REQLONAMT").val() .replace(/,/g,'');
			var xml=UI_getdata(lon,"","PFMAX",$("#VERTICAL").val(),$("#LODE_SCHEME").val(),"LSW_SLNCHKUCVECO")
			var Pfmaxi=$(xml).find('PFMAX').text()
				var den= (parseFloat(Pfmaxi)*amt)/100;
				if(isNaN(den))
				{
					den = 0;
				}
				$("#LODE_DEMANDamt").val(CURINRCommaSep(parseFloat(den).toFixed(2)));
				$("#LODE_DEMANDamt").next().addClass('active');
		}
	if($("#VERTICAL").val()=='UCV Eco')
	{
	var amt= $("#LODE_REQLONAMT").val() .replace(/,/g,'');
	var xml=UI_getdata(lon,"","PFMAX",$("#VERTICAL").val(),$("#LODE_SCHEME").val(),"LSW_SLNCHKUCVECO")
	var Pfmaxi=$(xml).find('PFMAX').text()
	var den= (parseFloat(Pfmaxi)*amt)/100;
	var num=(18/100)*den;
	var total=den+num;
	if(isNaN(den))
	{
		den = 0;
	}
	if(isNaN(total))
	{
		total = 0;
	}
	$("#LODE_AMT").val(CURINRCommaSep(parseFloat(total).toFixed(2)));
    $("#LODE_AMT").next().addClass('active');
    $("#LODE_DEMANDamt").val(CURINRCommaSep(parseFloat(den).toFixed(2)));
    $("#LODE_DEMANDamt").next().addClass('active');
	}
	AmountGst();
}
function AmountGst()
{
	var dem=$("#LODE_DEMANDamt").val() .replace(/,/g,'');
	var num=(18/100)*dem;
	var total=parseFloat(dem)+parseFloat(num);
	if(isNaN(total))
	{
		total = 0;
	}
	$("#LODE_AMT").val(CURINRCommaSep(parseFloat(total).toFixed(2)));
    $("#LODE_AMT").next().addClass('active');
}
function CheckDemandLoad()
{
	
	var lon=$("#LODE_PRODUCT").val();
	
	//var LnAmt=$("#DMY3").val().split("|")[0]
	if($("#VERTICAL").val()=='UCV')
	{
		/* if($("#LODE_REGINTSRAT").val()=="")
		{
			var roi=22;
			$("#LODE_REGINTSRAT").val(roi)
			$("#LODE_REGINTSRAT").next().addClass('active');
			
		} */
			if(VieworInavtivePGFlg!="View"&& $("#LODE_REQLONAMT").val() == "")
			{	
			var amt= $("#LODE_REQLONAMT").val() .replace(/,/g,'');
			var xml=UI_getdata(lon,"","PFMAX",$("#VERTICAL").val(),$("#LODE_SCHEME").val(),"LSW_SLNCHKUCVECO")
			var Pfmaxi=$(xml).find('PFMAX').text()
			var den= (parseFloat(Pfmaxi)*amt)/100;
			if(isNaN(den))
			{
				den = 0;
			}
			$("#LODE_DEMANDamt").val(CURINRCommaSep(parseFloat(den).toFixed(2))); 
			$("#LODE_DEMANDamt").next().addClass('active');
			}
	}
	if($("#VERTICAL").val()=='UCV Eco')
	{
		if(VieworInavtivePGFlg!="View"&& $("#LODE_REQLONAMT").val() == "")
			{	
				var amt= $("#LODE_REQLONAMT").val() .replace(/,/g,'');
				var xml=UI_getdata(lon,"","PFMAX",$("#VERTICAL").val(),$("#LODE_SCHEME").val(),"LSW_SLNCHKUCVECO")
				var Pfmaxi=$(xml).find('PFMAX').text()
				var den= (parseFloat(Pfmaxi)*amt)/100;
				var num=(18/100)*den;
				var total=den+num;
				if(isNaN(den))
				{
					den = 0;
				}
				if(isNaN(total))
				{
					total = 0;
				}
				$("#LODE_AMT").val(CURINRCommaSep(parseFloat(total).toFixed(2)));
				$("#LODE_AMT").next().addClass('active');
				$("#LODE_DEMANDamt").val(CURINRCommaSep(parseFloat(den).toFixed(2)));
				$("#LODE_DEMANDamt").next().addClass('active');
	
				AmountGstLoad();
			}
	}
}
function AmountGstLoad()
{
	var dem=$("#LODE_DEMANDamt").val() .replace(/,/g,'');
	var num=(18/100)*dem;
	var total=parseFloat(dem)+parseFloat(num);
	if(isNaN(total))
	{
		total = 0;
	}
	$("#LODE_AMT").val(CURINRCommaSep(parseFloat(total).toFixed(2)));
    $("#LODE_AMT").next().addClass('active');
}


function Chkmortum()
{
	var Data= $("#LODE_LONTYPE").val();
	var chkrep=$("#LODE_REPAYMENT").val();
	if($("#VERTICAL").val()=='UCV')
	{
		if(Data=="Term Loan")
		{
			if(chkrep=='Step Down' || chkrep=='Step Up')
			{						
				$("#LODE_Moratoritm").val('');
				$("#LODE_Moratoritm").removeClass('LODEMndtry');
				$("#LODE_Moratoritm").next().find(".MndtryAstr").html("");
				$(".MOR").hide();
			}
			else
			{
				$(".MOR").show();			
				$("#LODE_Moratoritm").addClass('LODEMndtry');
				$("#LODE_Moratoritm").next().find(".MndtryAstr").html("*");
				$("#LODE_Moratoritm").val('0');	
				$("#LODE_Moratoritm").next().addClass('active');				
				$(".MORT").attr("disabled",true)
			}
		}
	}
}
function CheckAmt()
{
	
	var Pro=$("#LODE_PRODUCT").val();
	var LnAmt=$("#LODE_REQLONAMT").val();	
	
	
if(LnAmt!="" && $("#VERTICAL").val()=='UCV Eco')
{
	var xml=UI_getdata(Pro,LnAmt.replace(/,/g, ""),"Lnamt","",$("#LODE_SCHEME").val(),"LSW_SLNCHKUCVECO")
	var Result=$(xml).find('Result').text()
	if(Result!="Success")
		{
		   alert(Result);
		  $("#LODE_REQLONAMT").val('');	  
		  $("#LODE_REQLONAMT").next().removeClass('active');
		  return;
		}
}
}
function CheckTenor()
{
	var Prod=$("#LODE_PRODUCT").val();
	var Tenr=$("#LODE_REQTENUR").val();	
	
if(Tenr!="")// && $("#VERTICAL").val()=='UCV Eco')
{
	var xml=UI_getdata(Prod,Tenr,"Tenor",$("#VERTICAL").val(),$("#LODE_SCHEME").val(),"LSW_SLNCHKUCVECO")
	var Result=$(xml).find('Result').text()
	if(Result!="Success")
		{				
				alert(Result);
				$("#LODE_REQTENUR").val('');	  
				$("#LODE_REQTENUR").next().removeClass('active');	
					return;
			
		}
}
}

function CheckRoi()
{
	var Pro=$("#LODE_PRODUCT").val();
	var Intrst=$("#LODE_REGINTSRAT").val();	

	
if(Intrst!="")// && $("#VERTICAL").val()=='UCV Eco')
{
	var xml=UI_getdata(Pro,Intrst,"Roi",$("#VERTICAL").val(),$("#LODE_SCHEME").val(),"LSW_SLNCHKUCVECO")
	var Result=$(xml).find('Result').text()
	if(Result!="Success")
		{
		   alert(Result);
		  $("#LODE_REGINTSRAT").val('');		  
		  $("#LODE_REGINTSRAT").next().removeClass('active');
		}
}
}


function ChkCam(id)
{
	var result=UI_getdata($("#PrcsID").val(),"","","","","LSW_SUCVCHECKCAM");
	var chk=$(result).find("CHECKINS").html()
	var msg=$(result).find("MSG").html()
	if(chk=="YA")
	{
	if(id=="LODE_REQLONAMT")
	{
		if($("#LODE_REQLONAMT").val()!="" )
		{
			if (confirm(msg) == true)
			{
				UI_getdata($("#PrcsID").val(),$("#LODE_SCHEME").val(),"","","","LSW_SUCVCHECKCAM");
			}
			else
			{
				$("#LODE_REQLONAMT").val('');
				return false;
			}
		}
	}
	if(id=="LODE_REQTENUR")
	{
		if($("#LODE_REQTENUR").val()!="" )
		{
			if (confirm("CAM details saved will be delete in CAM ") == true)
			{
				UI_getdata($("#PrcsID").val(),$("#LODE_SCHEME").val(),"","","","LSW_SUCVCHECKCAM");
			}
			else
			{
				$("#LODE_REQTENUR").val('');
				return false;
			}
		}
	}
	if(id=="LODE_REGINTSRAT")
	{
		if($("#LODE_REGINTSRAT").val()!="")
		{
			if (confirm("CAM details saved will be delete in CAM ") == true)
			{
				UI_getdata($("#PrcsID").val(),$("#LODE_SCHEME").val(),"","","","LSW_SUCVCHECKCAM");
			}
			else
			{
				$("#LODE_REGINTSRAT").val('');
				return false;
			}
		}
	}
		
	}
}

function Chkstepdwnprd()
{
   var tenure=$("#LODE_REQTENUR").val().replace(/,/g,'');  
   var Amt=$("#LODE_STEPUPDWNPRD").val().replace(/,/g,'');
   
   if(parseInt(tenure)<parseInt(Amt))
	   {
		 alert('Stepup or Step Down period should be less than Requested Tenure')
		 $("#LODE_STEPUPDWNPRD").val('')
		}


} 



function Chkstepdwnamt()
{
   var loan =$("#LODE_REQLONAMT").val().replace(/,/g,'');  
   var down=$("#LODE_SETPUPDWNAMT").val().replace(/,/g,'');
   
   if(parseInt(loan)<parseInt(down))
	   {
		 alert('Stepup or Step Down Amount should be less than Requested Loan Amount')
		 $("#LODE_SETPUPDWNAMT").val('')
		}


}     

function getanchor()
{ 
	var Data= $("#LODE_LONTYPE").val();
	if($("#VERTICAL").val()=='UCV')
	{
	 if(Data=="Bill Discounting")
		{
			
		$(".ALIANCE").show();
		$("#LODE_ANCHORNAME").addClass('LODEMndtry');
		var LonPurpose = UI_getdata("ANCHORNAME","","","","","LSW_SGETPRODVAL");
		$("#LODE_ANCHORNAME").append($(LonPurpose).find("RESULT").html());
	 $("#LODE_ANCHORNAME").material_select();
		}
		else
		{
		$("#LODE_ANCHORNAME").removeClass('LODEMndtry');
		$("#LODE_ANCHORNAME").material_select();
		
		$(".ALIANCE").hide();
		}
	}
}