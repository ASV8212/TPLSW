function residentaddr()
{
  if($( '#GRAI_SAMRESIDADDR').is(':checked')==true)
  {
  $('#GRAI_SAMRESIDADDR').val('Yes');

  document.getElementById('GRAI_PREMADDRLINI').value=document.getElementById('GRAI_ADDRLINI').value;
  document.getElementById('GRAI_PERMADDRLINII').value=document.getElementById('GRAI_ADDRLINII').value;
  document.getElementById('GRAI_PERMPINCODE').value=document.getElementById('GRAI_PINCODE').value;
  document.getElementById('GRAI_PERMCITY').value=document.getElementById('GRAI_CITY').value;
  document.getElementById('GRAI_PERMSTATE').value=document.getElementById('GRAI_STATE').value;
  document.getElementById('GRAI_PERMLNDMARK').value=document.getElementById('GRAI_LNDMARK').value;
  document.getElementById('GRAI_PERMLNDLINENO').value=document.getElementById('GRAI_LNDLINENO').value;
  document.getElementById('GRAI_PERMYEAROFRESID').value=document.getElementById('GRAI_YEAROFRESID').value;  
  var ResType=document.getElementById('GRAI_RESIDTYPE').value;
  var Month=document.getElementById('GRAI_MONTHS').value;
  $("#GRAI_PERMRESIDTYPE").val(ResType);
  $("#GRAI_PERMMONTHS").val(Month)
  $('#GRAI_PERMRESIDTYPE').material_select();
  $('#GRAI_PERMMONTHS').material_select();
  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
  $('.RSADDR').find('.select-dropdown').attr('disabled',true)
  $('.PRADDR').attr('disabled',true)
  $('.RSADDR').attr('disabled',true)
  $('.ADDR').addClass('active');
  }
  else
  {
	$('#GRAI_SAMRESIDADDR').val('No');   
	$('.PRADDR').attr('disabled',false)
	$('.RSADDR').attr('disabled',false)
	$('.PRADDR').find('.select-dropdown').attr('disabled',false)
	$('.RSADDR').find('.select-dropdown').attr('disabled',false)
	$('.PRADDR').val('');
	$('#GRAI_PERMRESIDTYPE').material_select("destroy");
	$('#GRAI_PERMMONTHS').material_select("destroy");	
	$('#GRAI_PERMRESIDTYPE').material_select();
	$('#GRAI_PERMMONTHS').material_select();
	$('.PINL').removeClass('active');
	$('.ADDR').removeClass('active');
  }
}

function CheckAddrMndtry()
{
	var AddrI=$("#GRAI_ADDRLINI").val()
	var PIN=$("#GRAI_PINCODE").val()
	var LndMrk=$("#GRAI_LNDMARK").val()
	var ResType=$("#GRAI_RESIDTYPE").val();
	var ResYear=$("#GRAI_YEAROFRESID").val();
	
	if(AddrI =="" || PIN == "" || LndMrk == "" || ResType == "" || ResYear == "")
		{
		 alert('Fill the Mandatory Fields In Residence Address');
		 $("#GRAI_SAMRESIDADDR"). prop("checked", false);
		 return false;
		}
	else
		{
		residentaddr();
		}
} 

function Pindetls(idval,state,city,STDCode)
{
var val=GetPin($(idval).val());

if($(val).find("statename").text()!="")
{
$('#'+state).attr('disabled',true)
$('#'+state).val($(val).find("statename").text());
$('#'+state).next().addClass('active');
}
else
{
$('#'+state).attr('disabled',true)
$('#'+state).val('');
$('#'+state).next().removeClass('active');
$(idval).val('');
}
if($(val).find("Districtname").text()!="")
{
$('#'+city).attr('disabled',true)
$('#'+city).val($(val).find("Districtname").text());
$('#'+city).next().addClass('active');
}
else
{
$('#'+city).attr('disabled',true)
$('#'+city).val('');
$('#'+city).next().removeClass('active');
$(idval).val('');
}
if($(val).find("Telephone").text()!="")
{
$('#'+STDCode).attr('disabled',true)
$('#'+STDCode).val($(val).find("Telephone").text());
$('#'+STDCode).next().addClass('active');
}
else
{
$('#'+STDCode).attr('disabled',false)
$('#'+STDCode).val('');
$('#'+STDCode).next().removeClass('active');
//$(idval).val('');
}
}

/*function PutGuartype()
{
	$("#GRBI_CUSTYPE").val($("#APFI_CUSTYPE").text());
	
	CheckAppltype();
}*/

function CheckAppltype()
{
	var ApplCusType=$("#GRBI_CUSTYPE").val()
	
	if(ApplCusType=="Non-Individual")
		{
		$("#GRBI_CUSFISNAM").next().text('Organisation Name *');
		$(".INDU").hide();
		$(".NINDU").show();
		$(".AddKYC").hide();
		$(".OKYCD").hide();
		//$(".GSTF").show();
		$(".INDU").find('.GRBIDBfields').removeClass('GRBIMndtry');
		$(".INDU").find('.GRAIDBfields').removeClass('GRAIMndtry');
		$(".INDU").find('.GREIDBfields').removeClass('GREIMndtry');
		$(".INDU").find('.GUOADBfields').removeClass('GUOAMndtry');
		$("#GRAI_ORGRESIDTYPE").next().text('Address Type');
		$(".DocImg").removeClass('DOCMndtry');
		
		 $("#GRBI_TITLE").empty();
		 $("#GRBI_TITLE").append('<option id="M/S">M/S</option>') 
		 $("#GRBI_TITLE").val('M/S');
		
	//	$("#GRAI_ORGRESIDTYPE").removeClass('GRAIMndtry');
		var element = document.getElementById("RadINDU");
		  element.classList.remove("GRBIMndtry");
		var Constitution=$("#GRBI_CONSTITUTION").val()
		/* if(Constitution=="HUF")
			 {
			 $("#GRBI_PROFILE").append('<option id="Karta">Karta</option>') 
			 $("#GRBI_PROFILE").val('Karta')
			 $("#GRBI_PROFILE").attr('disabled',true)
			 $("#GRBI_PROFILE").addClass('GRBIMndtry');
			 $("#GRBI_PROFILE").parent().next().find(".MndtryAstr").html("*");
			 }
		 else if(Constitution=="Proprietorship")
			 {
			 $("#GRBI_PROFILE").append('<option id="Proprietor">Proprietor</option>') 
			 $("#GRBI_PROFILE").val('Proprietor')
			 $("#GRBI_PROFILE").attr('disabled',true)
			 $("#GRBI_PROFILE").addClass('GRBIMndtry');
			 $("#GRBI_PROFILE").parent().next().find(".MndtryAstr").html("*");
			 }
		 else
			 {
			 $(".PROFILE").hide();
			 $("#GRBI_PROFILE").removeClass('GRBIMndtry');
			 $("#GRBI_PROFILE").next().find(".MndtryAstr").html("");
			 }*/
		 $("#GRBI_NPROFILE").empty();
		 $("#GRBI_NPROFILE").append('<option value="SENP">SENP</option>') 
		 $('#GRBI_NPROFILE').material_select();
		 $('#GRBI_PROFILE').val('SENP');
		 $(".PROFILE").show();
		}
	else
		{
		 $(".INDU").show();
		 $(".NINDU").hide();
		 $(".AddKYC").show();
		$(".OKYCD").show();
		//$(".GSTF").hide();
		 $(".NINDU").find('.GRBIDBfields').removeClass('GRBIMndtry');
		 $(".NINDU").find('.GRAIDBfields').removeClass('GRAIMndtry');
		 $(".NINDU").find('.GREIDBfields').removeClass('GREIMndtry');
		 $(".NINDU").find('.GUOADBfields').removeClass('GUOAMndtry');
		 $("#GRAI_ORGRESIDTYPE").next().text('Residence Type*');
		 //$(".DocImg").addClass('DOCMndtry');
		// $("#GRAI_ORGRESIDTYPE").addClass('GRAIMndtry');
		}
}

function CheckProfile()
{
	var Profile=$("#GRBI_PROFILE").val();
	
var ApplCusType=$("#GRBI_CUSTYPE").val()
	
	// Credit Change Start
	var Qualification=$("#GRBI_QUALIFICATION").val();
	if(Profile=="SEP")
	{
	     $("#GRBI_QUALIFICATION").empty();
		 $("#GRBI_QUALIFICATION").
append('<option value="">--Select--</option><option value="Matriculation" disabled >Matriculation</option><option value="UG" disabled >UG</option><option value="PG" disabled >PG</option><option value="Graduate" disabled >Graduate</option><option value="MBBS">MBBS</option><option value="MD">MD</option><option value="MS">MS</option><option value="MDS">MDS</option><option value="BDS">BDS</option><option value="CA">CA</option>') 
		 $('#GRBI_QUALIFICATION').material_select();
		  $('#GRBI_QUALIFICATION').val(Qualification);
	
	}
	else
	{
		 $("#GRBI_QUALIFICATION").empty();
		 $("#GRBI_QUALIFICATION").
append('<option value="">--Select--</option><option value="Matriculation">Matriculation</option><option value="UG">UG</option><option value="PG">PG</option><option value="Graduate">Graduate</option>') 
		 $('#GRBI_QUALIFICATION').material_select();
		  $('#GRBI_QUALIFICATION').val(Qualification);
	}
	// Credit Change End
	
	if(ApplCusType=="Individual")
		{
	if(Profile=="Salaried")
		{
		 $("#GREI_DATOFESTABLIS").next().text('Joining date in present organisation *');
		 $("#GREI_NOOFYERBUSINESS").next().text('No of years in present organisation');
		 $(".SAL").show();
		 $(".SALM").addClass('GRMIMndtry');
		 $(".SEPM").removeClass('GRMIMndtry');
		 $(".SEP").hide();
		 $(".EMP").hide();
		 $(".ORG").hide();
		// $(".GSTF").hide();
		 $(".PRECOMM").show();
			 var element = document.getElementById("ORGSEP");
			  element.classList.add("GRMIMndtry");
		}
	else if(Profile=="Retired" || Profile=="Housewife" )
	{
	  $(".EMP").hide()
	  $("#GREI_ORGANINAME").attr('disabled',true);
	  $("#GREI_ADDRLINEI").attr('disabled',true);
	  $("#GREI_ORGANINAME").removeClass('COEIMndtry');
	  $("#GREI_ADDRLINEI").removeClass('COEIMndtry');
	  $("#GREI_ORGANINAME").next().find(".MndtryAstr").html("");
	  $("#GREI_ADDRLINEI").next().find(".MndtryAstr").html("");
	}
	else if(Profile=="SEP" || Profile=="SENP" )
		{
		  $(".SAL").hide();
		  $(".SEP").show();
		 // $(".GSTF").show();
		  $("#GREI_DATOFESTABLIS").next().text('Date of Establishment *');
		  $("#GREI_NOOFYERBUSINESS").next().text('No. of Years in Business');
		  $(".SALM").removeClass('GREIMndtry');
		  $(".SEPM").addClass('GREIMndtry');
		  $(".EMP").hide();
		  $(".ORG").hide();
		  $("#GREI_ORGANINAME").attr('disabled',false);
		  $("#GREI_ADDRLINEI").attr('disabled',false);
		  $("#GREI_ORGANINAME").addClass('COEIMndtry');
		  $("#GREI_ADDRLINEI").addClass('COEIMndtry');
		  $("#GREI_ORGANINAME").next().find(".MndtryAstr").html("*");
		  $("#GREI_ADDRLINEI").next().find(".MndtryAstr").html("*");
		 var element = document.getElementById("ORGSEP");
		  element.classList.add("GRMIMndtry");
		}
                else
		{
		  $(".EMP").hide();
		  $(".ORG").hide();
		}
	}
	else
	 {
	   $(".EMP").hide();
	   $(".ORG").hide();
	 }
}

function CheckMarStatus()
{
	var MaritStatus=$("#GRBI_MARITSTUS").val()
	if(MaritStatus=="Married")
		{
		  $("#GRBI_SPOUSNAME").addClass('GRBIMndtry');
		  $("#GRBI_SPOUSNAME").next().find(".MndtryAstr").html("*");
		  $("#GRBI_SPOUSNAME").attr("disabled",false)
		  $("#GRBI_SPOUSNAME").val('')
		}
	else
		{
		$("#GRBI_SPOUSNAME").next().find(".MndtryAstr").html("");
		$("#GRBI_SPOUSNAME").removeClass('GRBIMndtry');
		$("#GRBI_SPOUSNAME").attr("disabled",true)
		$("#GRBI_SPOUSNAME").val('')
		}
}

function CheckGender()
{
	var Gender=$("input[name='GRBI_GENTER']:checked"). val();
	
	if(Gender=="Transgender")
		{
		if (confirm("Confirm?") == true) {
			$('input[name="GRBI_GENTER"]').prop('checked', true);
		} else {
			$('input[name="GRBI_GENTER"]').prop('checked', false);
		}
		}
}
function GetNaturBusness(Category,Nature)
{
	var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	var Category=$(Category).val();
	var xml=UI_getdata(Category,"","","","","LSW_SGETNATUROFBUSSINESS")
	
	$("#"+Nature+row).html("")
	$("#"+Nature+row).append($(xml).find("NATURE").html());
	$("#"+Nature+row).material_select();	
}

function GetNaturBusness_V1(Category,Nature)
{
	var Category=$(Category).val();
	var xml=UI_getdata(Category,"","","","","LSW_SGETNATUROFBUSSINESS")
	
	$("#"+Nature).html("")
	$("#"+Nature).append($(xml).find("NATURE").html());
	$("#"+Nature).material_select();	
}

function CheckLoanType(Prifx1,Prifx2,Prifx3,Prifx4)
{
	var PrcsId=$("#GRBI_PRCSID").val();
    var xml=UI_getdata(PrcsId,"","","","","LSW_SCHKLONTYPE")
    if($(xml).find('LONTYPE').text()=="Registered Mortgage")
		{
		  $("."+Prifx1+"DBfields").attr('disabled',true);
		  $("."+Prifx2+"DBfields").attr('disabled',true);
		  $("."+Prifx3+"DBfields").attr('disabled',true);
		  $("."+Prifx4+"DBfields").attr('disabled',true);
		}

}

//Popup hide
function ExstCusDetl()
{
  $("#BTNEXTGUR").click();	
}

function CheckExsCust()
{
	var ExistingCus=$("#ExistingCus").val();

	if(ExistingCus=="Yes") 
	{
		$(".EXCUS").show();
	} 
	else 
	{
		$(".EXCUS").hide();
	}	
	
}


function DocFldUpldHndlr(id,docu,KYCName,UploadView)
{

var Val=$(id).val()


if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'KYC';
    var CusID=$('#GRBI_CUSID').val()
    var DocName=KYCName
    var names="";
    var descrptns="";
	//var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
 var fd = new FormData();
   var vrsnno= "";
	var prodata = "";
var CountAttch=1;
	
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
			 {
				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
			 }
	         descrptns += 'FieldDocument'+',';
	     }
	 }
	 
	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
    // var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
   //  var Filename  = names.replace(',','')
    var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
		  
		  
		var xml=UI_getdata(FileType,FileSize,Filename,'ADDRESSPROOF',"","LSW_SGETKYCDOCUMNTTYPE")
		var FileAccept=$(xml).find('RESULT').text()
		
		
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		return
    }
	
	
	
names=names+'.'+FileType	
var y=  names;
var specialChars = "<>&#^|~`"
var check = function(string){
    for(i = 0; i < specialChars.length;i++){
        if(string.indexOf(specialChars[i]) > -1){
            return true
        }
    }
    return false;
}

if(check(y) == false){
    // Code that needs to execute when none of the above is in the string
}else{
    alert('Special characters not allowed in the upload file');
	$(id).closest('td').find('input[type="file"]').val('')
	return;
}
	 
 ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	    	url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&CusID="+CusID+"&DocName="+DocName,
	        data: fd,
			async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
			if(data=="Fail")
	        		{
						 ajaxindicatorstop();
	        		alert(LoadFrmXML("V0119"));
					return
	        		}
			else{
				//AttchDmsIns(data,'upload',prodata);
				//$(id).val('View');
				$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
				$(id).closest('td').find('input[type="file"]').attr('disabled',true)
				$(id).closest('td').find('input[type="file"]').val('');
				$(id).closest('td').find('input[type="file"]').hide();
			//	$(id).closest('td').replace('','');
			//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
				
				//
				
				$(id).closest('.md-form').find('span').remove()
				 $(id).val('')
		
			    $(id).val(data.split('~')[2])
				var UPLOAD=docu+'UPLOAD'
				$('#'+UPLOAD).hide();
				$('.'+docu).show();
				$('.'+UploadView).show();
				$(id).closest('.md-form').append('<span class="name">'+names+'</span>');
				
					ajaxindicatorstop();
					alert(LoadFrmXML("V0118"));
					return
					
				}	
					 ajaxindicatorstop(); 
	        },
	        failure:function(data)
	        {
	     		  ajaxindicatorstop();
					alert(LoadFrmXML("V0119"));
					return
	        	
	        }
	    });
		
		  ajaxindicatorstop();
		  }
		  else{
		  
		  alert('select the file to upload');
		  }
}


function checkPAN()
{
  if($('#GRBI_PANNAVAIL').is(':checked')==true)
	   {
		$("#GRBI_CUSFISNAM").attr('disabled',false);
		$("#GRBI_CUSLSTNAM").attr('disabled',false);
		$('#GRBI_PANNAVAIL').val('Yes');
		$(".FORM").show();
		$("#GRBI_PAN").removeClass('GRBIMndtry');
		$("#GRBI_PAN").attr('disabled',true);
		$("#GRBI_PAN").val('');
		$("#GRBI_PAN").next().removeClass('active');
		$("#GRBI_PAN").next().find(".MndtryAstr").html("");
		$("#GRBI_PANVERIFY").val('');
		$("[data-Validatearia=GRBI_PANVERIFY]").text('Verify');
        $("[data-Validatearia=GRBI_PANVERIFY]").removeClass("btn-GrnInplain");	
        $("[data-Validatearia=GRBI_PANVERIFY]").addClass("btn-yelInplain");
        $("[data-Validatearia=GRBI_PANVERIFY]").removeClass("btn-RedInplain"); 
		var xml=UI_getdata($("#GRBI_PRCSID").val(),$("#GRBI_PAN").val(),$("#GRBI_CUSID").val(),$("#GRBI_CONSTITUTION").val(),"","LSW_SCHKDUPDATA");
	   }
	else
		{
		$('#GRBI_PANNAVAIL').val('No');
		$(".FORM").hide();
		$("#GRBI_PAN").addClass('GRBIMndtry');
		//$("#GRBI_PAN").val('');
		$("#GRBI_PAN").attr('disabled',false);
		$("#GRBI_PAN").next().find(".MndtryAstr").html("*");
		}
}


function CheckRelatOther()
{
	var Relation=$("#GRBI_RELATIONSHIP").val();
    if(Relation=="Other")
	{
	   $(".Relationother").show(); 
	   $("#GRBI_OTHERRELATION").addClass('COBIMndtry'); 
	   
	}
   else
	 {
	   
	   $(".Relationother").hide(); 
	   $("#GRBI_OTHERRELATION").removeClass('COBIMndtry'); 
	   
	 }
}

function GetClusterBusness(Category,Nature,Cluster)
{
	var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	var Category= $('#'+Category+row).val();
	var Nature=$(Nature).val();
	var xml=UI_getdata(Category,Nature,"","","","LSW_SGETCLUSTERBUSSINESS")

  var SubIndustry=$(xml).find('SubIndustry').text()
      $('#'+Cluster+row).val(SubIndustry);
	  $('#'+Cluster+row).next().addClass('active');
	 // $('#'+Cluster).attr('disabled',true);

}

function GetClusterBusness_V1(Category,Nature,Cluster)
{
	var Category= $('#'+Category).val();
	var Nature=$(Nature).val();
	var xml=UI_getdata(Category,Nature,"","","","LSW_SGETCLUSTERBUSSINESS")

  var SubIndustry=$(xml).find('SubIndustry').text()
      $('#'+Cluster).val(SubIndustry);
	  $('#'+Cluster).next().addClass('active');
	 // $('#'+Cluster).attr('disabled',true);
}

function ApplicantTitleDisabl()
{
var ApplCusType=$("#GRBI_CUSTYPE").val()

if(ApplCusType=="Non-Individual")
{
	 $(".INDMiss").attr("disabled",true)
	 $(".INDMiss").addClass('disabled');
	 $(".INDMS").attr("disabled",false)
	  $(".INDMS").addClass('MODE');
	  $(".MODE").removeClass('disabled');
}
else
{
	  $(".INDMiss").attr("disabled",false)
	  $(".INDMiss").addClass('MODE');
	  $(".MODE").removeClass('disabled');
	  $(".INDMS").attr("disabled",true)
	  $(".INDMS").addClass('disabled');
}

}

function CheckPFC()
{
	var PrcsId=$("#GRBI_PRCSID").val()
	var xml=UI_getdata(PrcsId,"","","","","LSW_SCHECKPFCOLLECTION")
	var Collection=$(xml).find('RESULT').text()
	if(Collection != 'SUCCESS')
	{
	  alert(Collection);
	  return false;
     }
}

function CheckGenter()
{
	var Title=$("#GRBI_TITLE").val()
	
	   if(Title=="Mr")
	   {
	    $('input:radio[name=GRBI_GENTER]')[0].checked = true;
	   }
	    else if(Title=="Mrs" || Title=="Miss")
		{
	     $('input:radio[name=GRBI_GENTER]')[1].checked = true;
		}
	    else
	    {
	    	$('input:radio[name=GRBI_GENTER]')[0].checked = false;
	    	$('input:radio[name=GRBI_GENTER]')[1].checked = false;
	    }
}

function CheckCusType()
{
	var CusType=$("input[name='CoAppType']:checked"). val();

	 if(CusType=="Non-Individual")
		{
		 
		 $("#CoAppcin").val('')
		 $(".Constitution").show();
		 $("#CoAppConsti").val('')
		 $("#CoAppcin").addClass('COAPMndtry');
		 $("#CoAppcin").parent().next().find(".MndtryAstr").html("*");
		 $("#CoAppConsti").addClass('COAPMndtry');
		 $("#CoAppConsti").parent().next().find(".MndtryAstr").html("*");
	     $('#CoAppConsti').material_select("destroy");	
		 $('#CoAppConsti').material_select();
		 $(".CIN").hide();
		}
	 else
		 {
		 $('#Constitution').find('.select-dropdown').val('')
		 $("#CoAppConsti").val('')
	     $('#CoAppConsti').material_select("destroy");	
		 $('#CoAppConsti').material_select();
		 $("#CoAppcin").removeClass('COAPMndtry');
		 $("#CoAppcin").parent().next().find(".MndtryAstr").html("");
		 $("#CoAppConsti").removeClass('COAPMndtry');
		 $("#CoAppConsti").parent().next().find(".MndtryAstr").html("*");
		 $("#CoAppcin").val('')
		 $(".Constitution").hide();
		 $(".CIN").hide();
		 }
}

function CheckDupMobNo(FieldI,FieldII,Type)
{
	var Mobile1=$("#"+FieldI).val()
	var Mobile2=$("#"+FieldII).val()
	
	if(Mobile1 != "")
	{
		if(Mobile1==Mobile2)
		{
		  alert(Type+" Already Exists.");
		  $("#"+FieldI).val('')
		}
	}
	
}

function AppTitle()
{
	var Gender=$("input[name='GRBI_GENTER']:checked"). val();
	
	var Title=$("#GRBI_TITLE"). val();
	
	if(Gender=="Male")
		{
		$("#GRBI_TITLE").val('');
		 $('#GRBI_TITLE').material_select("destroy");	
		 $('#GRBI_TITLE').material_select();
	
		}
	else if(Gender=="Female")
      { 
		if(Title=="Mr")
			{
			$("#GRBI_TITLE").val('');
		    $('#GRBI_TITLE').material_select("destroy");	
			$('#GRBI_TITLE').material_select();
	
            }
	    
	  }
} 


function GridControlDetailKARZAGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        "aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
  
		 
		 { targets: 6, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="MULTIPLY'+rowno+'" name="ACTION"><label class="custom-control custom-control-label" for="MULTIPLY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=RXLD_MULTIPLIER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
					
		         } 
				 }				 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}


function GridControlDetailPANKARZAGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        "aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
  
		 
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
	 			
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="MULTIPLY'+rowno+'" name="GSTACTION"><label class="custom-control custom-control-label" for="MULTIPLY'+rowno+'"></label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=RXLD_MULTIPLIER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
					
		         } 
				 }				 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}

function CheckPanORNot()
{
	var PANV=$("#GRBI_PANVERIFY").val()
	
	if(PANV=="Verified")
		{
		 $(".DPAN").hide()
		}
	else
		{
		 $(".DPAN").show()
		}
}

function GridControlDetailINTERDEDUPE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        "aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
		 { targets: 6, "render": function ( data, type, row, meta ) {                            
     	 		 
       			var rowno = meta.row;	
       			
       			var Addvalue = "";
       			var	HTML ="";
       		if (data != "")
{	
       		HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this)" class="" width="35" height="25">';
       			HTML =  HTML + '<input type="hidden" id="KYCD_REMARKS'+rowno+'"  name="KYCD_REMARKS'+rowno+'" disabled class="form-control DSVLBL form-control">';
       		
       						HTML = HTML + '</span>';		 


		
       						var htmldata = $(HTML);
       						$(htmldata).find('[name=KYCD_REMARKS'+rowno+']').attr("value",data);

       	    	   		return htmldata[0].outerHTML;
}	
else{ return ""}
       	    	   			
                } 
       		 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}

function GridControlDetailDEDUPECIFGRD(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
           
	   { targets: 1, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="MOBY'+rowno+'" name="MOBNO"><label class="custom-control custom-control-label" for="MOBY'+rowno+'"></label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=RXLD_MULTIPLIER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
					
		         } 
				 }	
	   	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}


function GridControlDetailDEDUPEAIFGRD(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 5, "render": function ( data, type, row, meta ) {                            
			
		   var rowno = meta.row;       			 
			 
	 		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="RXLD_ADDRTYPE'+rowno+'" name="RXLD_ADDRTYPE'+rowno+'">';
	 			HTML = HTML + '<option value="">--Select--</option>';
	 			HTML = HTML + '<option value="Residence Address">Residence Address</option>';
	 			HTML = HTML + '<option value="Permanent Address">Permanent Address</option>';
	 			HTML = HTML + '<option value="Office Address">Office Address</option></span>';
			          			
	 			var htmldata = $(HTML);
	 			
	 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

	          return htmldata[0].outerHTML; 		
					
		         } 
				 },   
	   { targets: 6, "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="ADDRY'+rowno+'" name="ADDRACTION"><label class="custom-control custom-control-label" for="ADDRY'+rowno+'"></label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=RXLD_MULTIPLIER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
					
		         } 
				 }	
	   	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}

function CheckFieldDisb()
{
   var FstName=$("#GRBI_FETCHDOBNAME").val();
   var LstName=$("#GRBI_FETCHLSTNAME").val();
   var FathName=$("#GRBI_FETCHFATHNAME").val();
   var DOB=$("#GRBI_FETCHDOBNAME").val();
   
   if(FstName=="Selected")
	   {
	   $("#GRBI_CUSFISNAM").attr('disabled',true);
	   }
   if(LstName=="Selected")
	   {
	   $("#GRBI_CUSLSTNAM").attr('disabled',true);
	   }
   if(FathName=="Selected")
     {
      $("#GRBI_FATHRNAM").attr('disabled',true);
     }
   if(DOB=="Selected")
     {
      $("#GRBI_DOB").attr('disabled',true);
     }
}

function CheckDudupe(Verify)
{
  if($("#"+Verify).val() != "")
	 {
	if($("#"+Verify).val() == 'Dedupe Initiated')
		{
	    $("[data-Validatedata="+Verify+"]").text('Dedupe Initiated');
	    $("[data-Validatedata="+Verify+"]").addClass("btn-GrnInplain");	
	    $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    $("[data-Validatedata="+Verify+"]").removeClass("btn-RedInplain"); 
	   }
   else
	  {
	  $("[data-Validatedata="+Verify+"]").text('Dedupe Failed');
	  $("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	  $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	  $("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	  }
	}
}





function RelationShipDropdown()
{
	var PrcsId=$("#GRBI_PRCSID").val();
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SChkRelApplicIndi")
	var ApplCusType=$("#GRBI_CUSTYPE").val()
	var CoAppRelation=$('#GRBI_RELATIONSHIP').val();
	
	if($(xml).find('CBSI_CUSTYPE').text()=="Individual")
		{
            if(ApplCusType=="Non-Individual")
			{
            	$("#GRBI_RELATIONSHIP").empty();
        		$("#GRBI_RELATIONSHIP").append('<option value="" selected>--Select--</option><option value="Partner">Partner</option><option value="Director">Director</option><option value="Shareholder">Shareholder</option><option value="Other">Other</option>') 
        		$('#GRBI_RELATIONSHIP').material_select("destroy");	
        		$('#GRBI_RELATIONSHIP').material_select();
        		$('#GRBI_RELATIONSHIP').val(CoAppRelation);
        		$('#GRBI_RELATIONSHIP').material_select();
             }
           else
           {
        	$("#GRBI_RELATIONSHIP").empty();
       		$("#GRBI_RELATIONSHIP").append('<option value="" selected>--Select--</option><option value="Spouse">Spouse</option><option value="Brother">Brother</option><option value="Mother">Mother</option><option value="Father">Father</option><option value="Sister">Sister</option><option value="Brother In-Law">Brother In-Law</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Aunty">Aunty</option><option value="Daughter">Daughter</option><option value="Son">Son</option><option value="Other">Other</option>') 
       		$('#GRBI_RELATIONSHIP').material_select("destroy");	
       		$('#GRBI_RELATIONSHIP').material_select();
       		$('#GRBI_RELATIONSHIP').val(CoAppRelation);
    		$('#GRBI_RELATIONSHIP').material_select();
           }
        }
	else
		{
		
		if(ApplCusType=="Non-Individual")
		{
        	$("#GRBI_RELATIONSHIP").empty();
    		$("#GRBI_RELATIONSHIP").append('<option value="" selected>--Select--</option><option value="Other">Other</option>') 
    		$('#GRBI_RELATIONSHIP').material_select("destroy");	
    		$('#GRBI_RELATIONSHIP').material_select();
    		$('#GRBI_RELATIONSHIP').val(CoAppRelation);
    		$('#GRBI_RELATIONSHIP').material_select();
         }
		else
			{
			$("#GRBI_RELATIONSHIP").empty();
    		$("#GRBI_RELATIONSHIP").append('<option value="" selected>--Select--</option><option value="Partner">Partner</option><option value="Director">Director</option><option value="Shareholder">Shareholder</option><option value="Other">Other</option>') 
    		$('#GRBI_RELATIONSHIP').material_select("destroy");	
    		$('#GRBI_RELATIONSHIP').material_select();
    		$('#GRBI_RELATIONSHIP').val(CoAppRelation);
    		$('#GRBI_RELATIONSHIP').material_select();
			}
		}
}


function CHKSAMEKYC(Id,Type)
{
       var IDProof= $('#'+Id).val();
		var xml=UI_getdata($("#PrcsID").val(),Type,IDProof,$("#GRBI_CUSID").val(),"","LSW_SCheckOTHERKYCDOCU")
        var Result=$(xml).find('Result').text()
        if(Result=="YES")
        	{
             alert ("Same KYC already exists")
             $('#'+Id).val('')
             $('#'+Id).removeClass('active');
            }
}

function CheckUploadMndtry()
{

	if($("#GRBI_PANVERIFY").val() == "Verified")
		{
		 $("#GRBI_PANATTACHMENT").addClass('DOCMndtry');
		}
	else 
		{
		 $("#GRBI_PANATTACHMENT").removeClass('DOCMndtry');
		}
	if($("#GRBI_VOTERIDVEIRFY").val() == "Verified")
		{
		 $("#GRBI_VOTERIDATTACHMENT").addClass('DOCMndtry');
		}
	else 
		{
		 $("#GRBI_VOTERIDATTACHMENT").removeClass('DOCMndtry');
		}
	if($("#GRBI_DRIVLICNSVERIFY").val() == "Verified")
	{
	 $("#GRBI_DRIVELICATTACHMENT").addClass('DOCMndtry');
	}
else 
	{
	 $("#GRBI_DRIVELICATTACHMENT").removeClass('DOCMndtry');
	}
	if($("#GRBI_PASSPORTVERIFY").val() == "Verified")
	{
	 $("#GRBI_PASSPORTATTACHMENT").addClass('DOCMndtry');
	}
 else 
	{
	 $("#GRBI_PASSPORTATTACHMENT").removeClass('DOCMndtry');
	}
}

function AddZoom()
{
if($("#GRBI_CUSPHOTO").val()!="")
	{
    $('.tablezoom').addClass('zoom')
	}
else
	{
      $('.tablezoom').removeClass('zoom')
    }

}

function VerifyGST(Id,Verify,CusType,EMPADDRI,EMPADDRII)
{
	if($("#"+Verify).val()=="Verified")
	{
	  IdVal=$("#"+Id).val()
	var ProcessId=getUrlParam("PrcsID");
	var Type;
   		var OPXML = UI_getdata(ProcessId,"gstdetailed",IdVal,"","","LSW_SAPIKYCDETLS");
		OPXML=OPXML.replace('<Resultset><a><Data>','')
		var JSONval=OPXML.replace('<Resultset><a><Data>','').replace('</Data></a></Resultset>','')
		
	$.ajax({
        url: "/TPLSW/TotalKyc",
        type: 'POST',
        data: {JSONval,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:false,
       // dataType: 'json',
       // contentType:'application/json',
        
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
        	 var obj = JSON.parse(stm)
		
		if(obj["status-code"]=='101' || obj["statusCode"]=='101')
          {   	  
 	  //  $("[data-Validatearia="+Verify+"]").text('Verified');
 	   // $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain");	
 	    //$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 	   // $("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
 	   // $("#"+Verify).val('Verified')

 	    var GSTAddr=obj["result"].pradr.adr
 	   
         if($("#"+CusType).val()=="Individual")
 		   {
 		  if(GSTAddr != "")
	    	 {
	    var length=GSTAddr.split(',').length	    
	    var Event=GSTAddr.split(',').length%2
	    if(Event=="1")
	    	{
	    	  $("#"+EMPADDRI).val((GSTAddr.split(',')[0])+','+(GSTAddr.split(',')[1])+','+(GSTAddr.split(',')[2])+','+(GSTAddr.split(',')[3]))
	    	  $("#"+EMPADDRI).next().addClass("active")
	    	  $("#"+EMPADDRII).val((GSTAddr.split(',')[4])+','+(GSTAddr.split(',')[5])+','+(GSTAddr.split(',')[6]));
	 	      $("#"+EMPADDRII).next().addClass("active")
	    	}
	    else
	    	{
	    	  $("#"+EMPADDRI).val((GSTAddr.split(',')[0])+','+(GSTAddr.split(',')[1])+','+(GSTAddr.split(',')[2]))
	    	  $("#"+EMPADDRI).next().addClass("active")
	    	  $("#"+EMPADDRII).val((GSTAddr.split(',')[3])+','+(GSTAddr.split(',')[4])+','+(GSTAddr.split(',')[5]));
	 	      $("#"+EMPADDRII).next().addClass("active")
	    	}
	      }
 		 }
       }
		}
	});
   }
}

function CheckGSTorNot()
{
	var PANVerify=$("#GRBI_PANVERIFY").val();
	var GST=$("#GRBI_GSTNUM").val();
	if($("#GRBI_CUSTYPE").val() =="Individual")
	{
	 if(PANVerify != "" && GST !="")
		{
		  $(".GSTF").show()
		}
	 else
		{
		   $(".GSTF").hide()
		   $(".GST").val('')
		   $(".PROFILEVAL").find('.GSTSAL').attr('disabled',false)
	       $("span:contains('Salaried')").parent().addClass('GSTSAL');
		   $(".GSTSAL").removeClass('disabled');
		}
	}
	else
	{
		$(".GSTF").show()
	}
}


function GridControlDetailINTERDEDUPE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        "aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
		     { targets: 6, "render": function ( data, type, row, meta ) {                            
     	 		 
       			var rowno = meta.row;	
       			
       			var Addvalue = "";
       			
       			
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this); disbRmk()" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="KYCD_REMARKS'+rowno+'"  name="KYCD_REMARKS'+rowno+'" disabled class="form-control DSVLBL form-control">';
       		
       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
       						$(htmldata).find('[name=KYCD_REMARKS'+rowno+']').attr("value",data);

       	    	   			
       	    	   			return htmldata[0].outerHTML;
                } 
       		 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}


function GridControlDetailRBIDEDUPE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        "aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
		      { targets: 2, "render": function ( data, type, row, meta ) {                            
     	 		 
       			var rowno = meta.row;	
       			
       			var Addvalue = "";
       			
       			
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this); disbRmk()" class="" width="35" height="25">';
       		var	HTML =  HTML + '<input type="hidden" id="DESCRIPTION'+rowno+'"  name="DESCRIPTION'+rowno+'" disabled class="form-control DSVLBL form-control">';
       		
       						HTML = HTML + '</span>';		 
       		  
       						var htmldata = $(HTML);
       						$(htmldata).find('[name=DESCRIPTION'+rowno+']').attr("value",data);

       	    	   			
       	    	   			return htmldata[0].outerHTML;
                } 
       		 }
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}


function GridControlDetailDEDUPEAGREEGRD(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
  
	    { targets: 8, "render": function ( data, type, row, meta ) {                            
						
					 var rowno = meta.row;		 
				 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="EXY'+rowno+'" name="AGREEACTION"><label class="custom-control custom-control-label" for="EXY'+rowno+'"></label>';			 
				 		HTML = HTML + '</span>';			  
				 		
				 		var htmldata = $(HTML);
							
							$(htmldata).find('[name=RXLD_AGREEACTION'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

							//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
							//alert(htmldata[0].outerHTML);
							
				        return htmldata[0].outerHTML;   		
				         } 
						 }
					 ],

         "fnDrawCallback": function (oSettings) {

        }
        });
}

function disbRmk()
{
	$("#POPUPRemarks").attr('disabled',true);
	$("#RemarksCONFIRM").hide();
}

/*
function AddUAMDocMnd()
{
	var UAM= $("#GRBI_UAMNO").val();
	var UAMDOC=$("#GRBI_UPDUAMNO").val();
	if(UAM!="")
	{
		$("#GRBI_UPDUAMNO").addClass("DOCMndtry");
	}
	else
	{
		$("#GRBI_UPDUAMNO").removeClass("DOCMndtry");
	}
}*/
