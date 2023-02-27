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
  document.getElementById('GRAI_PSTDC').value=document.getElementById('GRAI_STDC').value; 
  
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
	$('.ALLDIS').attr('disabled',true);
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

function Loadresidentaddr()
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
  document.getElementById('GRAI_PSTDC').value=document.getElementById('GRAI_STDC').value; 
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
		$("#GRBI_CUSFISNAM").removeClass('IsAlphaFields');
		
		$(".NINDM").addClass('GRBIMndtry');
		
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
		 
		 $("#GRBI_TITLE").empty();
		 $("#GRBI_TITLE").append('<option id="M/S">M/S</option>')
         $('#GRBI_TITLE').material_select();		 
		 $("#GRBI_TITLE").val('M/S');
		 
		 $(".PROFILE").show();
		}
	else
		{
			
		 $(".NINDM").removeClass('GRBIMndtry');
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
	/* var Qualification=$("#GRBI_QUALIFICATION").val();
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
	} */
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
		 $(".EMP").show();
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
	  $("#GREI_ORGANINAME").removeClass('GREIMndtry');
	  $("#GREI_ADDRLINEI").removeClass('GREIMndtry');
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
		  $(".EMP").show();
		  $(".ORG").hide();
		  $("#GREI_ORGANINAME").attr('disabled',false);
		  $("#GREI_ADDRLINEI").attr('disabled',false);
		  $("#GREI_ORGANINAME").addClass('GREIMndtry');
		  $("#GREI_ADDRLINEI").addClass('GREIMndtry');
		  $("#GREI_ORGANINAME").next().find(".MndtryAstr").html("*");
		  $("#GREI_ADDRLINEI").next().find(".MndtryAstr").html("*");
		 var element = document.getElementById("ORGSEP");
		  element.classList.add("GRMIMndtry");
		}/* 
                else
		{
		  $(".EMP").hide();
		  $(".ORG").hide();
		} */
	}
	/* else
	 {
	   $(".EMP").hide();
	   $(".ORG").hide();
	 } */
	 
if(ApplCusType=="Non-Individual")
	{
	
	$(".ORG").show();
	
	}

}
function CheckMarStatus()
{
	var MaritStatus=$("#GRBI_MARITSTUS").val()
	if(MaritStatus=="Married")
		{
		 // $("#GRBI_SPOUSNAME").addClass('GRBIMndtry');
		 // $("#GRBI_SPOUSNAME").next().find(".MndtryAstr").html("*");
		  $("#GRBI_SPOUSNAME").attr("disabled",false)
		//  $("#GRBI_SPOUSNAME").val('')
		}
	else
		{
		//$("#GRBI_SPOUSNAME").next().find(".MndtryAstr").html("");
		//$("#GRBI_SPOUSNAME").removeClass('GRBIMndtry');
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
function GetNaturBusness(Category,Nature,Cluster)
{
	var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	var Category=$(Category).val();
	var xml=UI_getdata(Category,"","","","","LSW_SGETNATUROFBUSSINESS")
	
	$("#"+Nature+row).html("")
	$("#"+Nature+row).append($(xml).find("NATURE").html());
	$("#"+Nature+row).material_select();
	$("#"+Cluster+row).val('');	
}

function GetNaturBusness_V1(Category,Nature,Cluster)
{
	var Category=$(Category).val();
	var xml=UI_getdata(Category,"","","","","LSW_SGETNATUROFBUSSINESS")
	
	$("#"+Nature).html("")
	$("#"+Nature).append($(xml).find("NATURE").html());
	$("#"+Nature).material_select();
	$("#"+Cluster).val('')	
}

function EmpNaturBusness(html,row)
{
		//var CATEGORY=$("#CEMI_INDUSCATRGORY"+row).val().replace(/,/g,'');
		//var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
		//var row=$(row).val();
		var CATEGORY=$("#GREI_INDUSCATRGORY"+row).val();
		var Naturebusiness=$("#GREI_NATRBUSINESS"+row).val();
		//var Cluster=$("#CEMI_CLUSTER"+row).val();
		//var CATEGORY=$(CATEGORY).val();
		var xml=UI_getdata(CATEGORY,"","","","","LSW_SGETNATUROFBUSSINESS")
		var NATURE=$(xml).find('NATURE').html();
		$("#GREI_NATRBUSINESS"+row).append(NATURE)
		if(Naturebusiness!="")
		{
		$("#GREI_NATRBUSINESS"+row+" option:contains("+Naturebusiness+")").attr("selected","selected")
		}
		$("#GREI_NATRBUSINESS"+row).material_select("destroy");	
		$("#GREI_NATRBUSINESS"+row).material_select();
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
   //  var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
   //  var Filename  = names.replace(',','')
         var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
   
	  if($("#GRBI_CUSTYPE").val()=='Individual')
	   {
		   if(DocName=="Aadhar")
		   {
			   var ADDRTYPE =DocName
		   }
		   else
		   {
		     var ADDRTYPE = "ADDRESSPROOF"
		   }
	   }
	   else
	   {
		 var ADDRTYPE = "Others"     
	   }
		var xml=UI_getdata(FileType,FileSize,Filename,ADDRTYPE,$("#GRBI_CUSTYPE").val()+'|'+$("#PrcsID").val(),"LSW_SGETKYCDOCUMNTTYPE")
		var FileAccept=$(xml).find('RESULT').text()
		
		
		
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }
	
names=names+'.'+FileType	
var y=  names;
/*var specialChars = "<>&#^|~`"
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
    alert('File name contains special character please remove and upload');
	$(id).closest('td').find('input[type="file"]').val('')
	return;
}*/
	 
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


/*
function checkPAN()
{
  if($('#GRBI_PANNAVAIL').is(':checked')==true)
	   {
		$("#GRBI_CUSFISNAM").attr('disabled',false);
		$("#GRBI_CUSLSTNAM").attr('disabled',false);
		$('#GRBI_PANNAVAIL').val('Yes');
		$(".FORM").show();
		$("#GRBI_PAN").removeClass('GRBIMndtry');
		$(".PANTYP").removeClass('GRBIMndtry');
		$("#GRBI_PAN").attr('disabled',true);
		$(".PANVTyp").attr('disabled',true);
		$("#GRBI_PAN").val('');
		$("#GRBI_PAN").next().removeClass('active');
		$("#GRBI_PAN").next().find(".MndtryAstr").html("");
		$("#GRBI_PANVERIFY").val('');
		$(".CHEK").attr('disabled',true);
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
		$(".PANTYP").addClass('GRBIMndtry');
		//$("#GRBI_PAN").val('');
		$("#GRBI_PAN").attr('disabled',false);
		$(".PANVTyp").attr('disabled',false);
		$(".CHEK").attr('disabled',false);
		$("#GRBI_PAN").next().find(".MndtryAstr").html("*");
		}
}
 */


function CheckRelatOther()
{
	var Relation=$("#GRBI_RELATIONSHIP").val();
    if(Relation=="Other")
	{
	   $(".Relationother").show(); 
	   $("#GRBI_OTHERRELATION").addClass('GRBIMndtry'); 
	   
	}
   else
	 {
	   
	   $(".Relationother").hide(); 
	   $("#GRBI_OTHERRELATION").removeClass('GRBIMndtry'); 
	   
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
		else if (Title=="NA" || Title=="NA")
		{
		 $('input:radio[name=GRBI_GENTER]')[2].checked = true;
		}
	    else
	    {
	    	$('input:radio[name=GRBI_GENTER]')[0].checked = false;
	    	$('input:radio[name=GRBI_GENTER]')[1].checked = false;
			$('input:radio[name=GRBI_GENTER]')[2].checked = false;
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

function CheckCusType1()
{
	var CusType=$("input[name='CoAppType1']:checked"). val();

	 if(CusType=="Non-Individual")
		{
		 $(".Constitution").show();
		 $("#Constitution1").val('')
		 $("#Constitution1").addClass('LDCOMndtry');
		 $("#Constitution1").parent().next().find(".MndtryAstr").html("*");
	     $('#Constitution1').material_select("destroy");	
		 $('#Constitution1').material_select();
		}
	 else
		 {
		 $('#Constitution1').find('.select-dropdown').val('')
		 $("#Constitution1").val('')
	     $('#Constitution1').material_select("destroy");	
		 $('#Constitution1').material_select();
		 $("#Constitution1").removeClass('LDCOMndtry');
		 $("#Constitution1").parent().next().find(".MndtryAstr").html("");
		 $(".Constitution").hide();
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
	 		if((($("#DMY10").val().split('|')[1].split('(')[1].replace(")","")=="AMRCU")||($("#DMY10").val().split('|')[1].split('(')[1].replace(")","")=="CMRCU")||($("#DMY10").val().split('|')[1].split('(')[1].replace(")","")=="HRCU")||($("#DMY10").val().split('|')[1].split('(')[1].replace(")","")=="IRCU")||($("#DMY10").val().split('|')[1].split('(')[1].replace(")","")=="RCU")||($("#DMY10").val().split('|')[1].split('(')[1].replace(")","")=="RMRCU")||($("#DMY10").val().split('|')[1].split('(')[1].replace(")","")=="SERCU")||($("#DMY10").val().split('|')[1].split('(')[1].replace(")","")=="SMRCU")) && ($(".FormMainTabs li.active").attr("id")!="FormMainTab9"))	
			{				
			 var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" disabled class="custom-control-input CBSIDBfields" value="Yes" id="MULTIPLY'+rowno+'" name="ACTION"><label class="custom-control custom-control-label" for="MULTIPLY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=RXLD_MULTIPLIER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
			}
				else
				{
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

function GridControlDetailDEDUPEBIFGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="MULTIPLY'+rowno+'" name="ACTION"><label class="custom-control custom-control-label" for="MULTIPLY'+rowno+'"></label>';			 
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
			if($("#GRBI_CUSTYPE").val()=="Non-Individual")
	         {
		      var rowno = meta.row;       			 
			 
	 		  var HTML ='<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="RXLD_ADDRTYPE'+rowno+'" name="RXLD_ADDRTYPE'+rowno+'">';
	 			HTML = HTML + '<option value="">--Select--</option>';
	 			HTML = HTML + '<option value="Office Address">Office Address</option></span>';
			          			
	 			var htmldata = $(HTML);
	 			
	 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

	          return htmldata[0].outerHTML; 		
			 }
			 else
			 {
				var rowno = meta.row;       			 
			 
	 		    var HTML ='<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="RXLD_ADDRTYPE'+rowno+'" name="RXLD_ADDRTYPE'+rowno+'">';
	 			HTML = HTML + '<option value="">--Select--</option>';
	 			HTML = HTML + '<option value="Residence Address">Residence Address</option>';
	 			HTML = HTML + '<option value="Permanent Address">Permanent Address</option>';     			
	 			var htmldata = $(HTML);
	 			
	 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

	          return htmldata[0].outerHTML;  
			 }
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
        		$("#GRBI_RELATIONSHIP").append('<option value="" selected>--Select--</option><option value="Partner">Partner</option><option value="Director">Director</option><option value="Shareholder">Shareholder</option><option value="Proprietor">Proprietor</option><option value="Other">Other</option>') 
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
    		$("#GRBI_RELATIONSHIP").append('<option value="" selected>--Select--</option><option value="Partner">Partner</option><option value="Director">Director</option><option value="Shareholder">Shareholder</option><option value="Proprietor">Proprietor</option><option value="Other">Other</option>') 
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
		//$(".GSTF").show()
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


function CheckPani()
{
	var PANVerify=$("#GRBI_PANVERIFY").val();
	if($("#KARZASTATUS").val()=="Active")
	{
	if(PANVerify=="Verified")
		{
		 if($("#GRBI_CUSFISNAM").val()!="")
		  {
			  //$("#GRBI_CUSFISNAM").attr('disabled',true)
		  }
		  if($("#GRBI_CUSLSTNAM").val()!="")
		  {
			 // $("#GRBI_CUSLSTNAM").attr('disabled',true)
		  }
		}
	}
}
/* function GCheckDirectt()
 {
	
	 var borrower=$("#GRBI_GBORROWER").val()
      if(borrower=="Yes")
	  {
		 //$(".NINDU").show();
         $("#GREI_GEUAMNO").addClass('GREIMndtry');
         $("#GREI_GEUAMNO").next().find(".MndtryAstr").html("*");
		 
         $("#GUOA_GUAMNO").addClass('GUOAMndtry');
         $("#GUOA_GUAMNO").next().find(".MndtryAstr").html("*");
	  }
	  else 
	  {
		 //$(".NINDU").hide();
         $("#GREI_GEUAMNO").removeClass('GREIMndtry');
         $("#GREI_GEUAMNO").next().find(".MndtryAstr").html("");
		 
         $("#GUOA_GUAMNO").removeClass('GUOAMndtry');
         $("#GUOA_GUAMNO").next().find(".MndtryAstr").html("");
		 
	  }
		  
 } */
 function GuCheckborrower()
 {
	
	 var borrower=$("#GRBI_GBORROWER").val()
      if(borrower=="Yes")
	  {
		 $(".GUNON").show();
/* 		 $(".GUEUDHA").addClass('GREIMndtry');
         //$("#CEMI_EUAMNO").addClass('GREIMndtry');
         $(".GUEUDHA").next().find(".MndtryAstr").html("*");
		 
		 $(".CEUDHA").removeClass('GREIMndtry');
		 $(".CEUDHA").next().find(".MndtryAstr").html("");
		 
		 $(".GUUDHA").addClass('GUOAMndtry');
        // $("#CDOG_UAMNO").addClass('GUOAMndtry');
         $(".GUUDHA").next().find(".MndtryAstr").html("*");
		 
		 $(".CUDHA").removeClass('GUOAMndtry');
		 $(".CUDHA").next().find(".MndtryAstr").html(""); */
	  }
	  else
	  {
		 $(".GUNON").hide();
/* 		  $(".GUEUDHA").removeClass('GREIMndtry');
       //  $("#CEMI_EUAMNO").removeClass('GREIMndtry');
         $(".GUEUDHA").next().find(".MndtryAstr").html("");
		 
		 $(".CEUDHA").addClass('GREIMndtry');
		 $(".CEUDHA").next().find(".MndtryAstr").html("*");
		 
		  $(".GUUDHA").removeClass('GUOAMndtry');
        // $("#CDOG_UAMNO").removeClass('GUOAMndtry');
         $(".GUUDHA").next().find(".MndtryAstr").html("");
		 
		 //$(".CUDHA").addClass('GUOAMndtry');
		 $(".CUDHA").next().find(".MndtryAstr").html("");
		 
		 //$("#GUOA_GCUAMNO").addClass('GUOAMndtry');
		 //$("#GUOA_GCUAMNO").next().find(".MndtryAstr").html("*"); */
	  }
		  
 }
 
function GCheckNumber()
 {
	$("#GRBI_GSTNUM").attr('disabled',false);
	var GST=$("input[name='GRBI_GGST']:checked"). val();
	if(GST=="Yes")
	{
		$("#GRBI_GSTAPPLILE").addClass('GRBIMndtry');
		$("#GRBI_GSTAPPLILE").parent().next().find(".MndtryAstr").html("*");
		$(".GSTAPP").show(); 
	  /* 
		 $(".EXEM").show();
		 $(".GSTF").show();
		 $("#GRBI_GEXEMPTED").addClass('GRBIMndtry');
		 $("#GRBI_GSTNUM").addClass('GRBIMndtry');        
		 $("#GRBI_GEXEMPTED").parent().next().find(".MndtryAstr").html("*");
		 $("#GRBI_GSTNUM").next().find(".MndtryAstr").html("*"); */
         
	}
	else
	{
		$("#GRBI_GSTAPPLILE").val('');
		$("#GRBI_GSTAPPLILE").removeClass('GRBIMndtry');
		$("#GRBI_GSTAPPLILE").parent().next().find(".MndtryAstr").html("");
		$('#GRBI_GSTAPPLILE').material_select("destroy");	
		$("#GRBI_GSTAPPLILE").material_select();
		$(".GSTAPP").hide();
		$(".BankDetail2").html('');
	  
	  	$("#GRBI_GEXEMPTED").val('');
		$("#GRBI_GEXEMPTED").removeClass('GRBIMndtry');
		$("#GRBI_GSTNUM").val('');
		$("#GRBI_GSTNUM").removeClass('GRBIMndtry');
		$("#GRBI_GEXEMPTED").parent().next().find(".MndtryAstr").html("");
		$('#GRBI_GEXEMPTED').material_select("destroy");	
		$("#GRBI_GEXEMPTED").material_select();
		$("#GRBI_GSTNUM").next().find(".MndtryAstr").html("");
		$(".EXEM").hide();
		$(".GSTF").hide();
		$(".CHKBOX").hide();
	/* 	 $("#GRBI_GSTNUM").val('');
		 $("#GRBI_GEXEMPTED").val('');
		 $("#GRBI_GSTNUM").removeClass('GRBIMndtry');
         $("#GRBI_GEXEMPTED").removeClass('GRBIMndtry');
         $("#GRBI_GEXEMPTED").parent().next().find(".MndtryAstr").html("");
		 $("#GRBI_GSTNUM").next().find(".MndtryAstr").html("");
		  $(".EXEM").hide();
		  $(".GSTF").hide(); */
	}
	Checkgstapp();
 }
 
  function Checkgstapp()
 {
	 var Gstapp=$("#GRBI_GSTAPPLILE").val()
	 var GST=$("input[name='GRBI_GGST']:checked"). val();
	 if(Gstapp=="Single" && GST=="Yes")
	 {
		$("#GRBI_GEXEMPTED").addClass('GRBIMndtry');
		$("#GRBI_GSTNUM").addClass('GRBIMndtry');
		$("#GRBI_GEXEMPTED").parent().next().find(".MndtryAstr").html("*");
		$("#GRBI_GSTNUM").next().find(".MndtryAstr").html("*");
		$(".GSTCLER").val('')
		$(".CHKCLER").prop("checked", false);
		$(".EXEM").show();
		$(".GSTF").show(); 
		$(".CHKBOX").hide();
		$(".BankDetail2").html(''); 
	 }
	 else if(Gstapp=="Multiple" && GST=="Yes")
	 {
		 $("#GRBI_GEXEMPTED").addClass('GRBIMndtry');
		 $("#GRBI_GEXEMPTED").parent().next().find(".MndtryAstr").html("*");
		 $(".EXEM").show();
		 $(".CHKBOX").show();			 
		 $("#GRBI_GSTNUM").val('');
		 $("#GRBI_GSTNUM").removeClass('GRBIMndtry');
		 $("#GRBI_GSTNUM").next().find(".MndtryAstr").html("");
		 $(".GSTF").hide();
	 }
	/*  else
	 {
		$("#GRBI_GEXEMPTED").val('');
		$("#GRBI_GEXEMPTED").removeClass('GRBIMndtry');
		$("#GRBI_GSTNUM").val('');
		$("#GRBI_GSTNUM").removeClass('GRBIMndtry');
		$("#GRBI_GEXEMPTED").parent().next().find(".MndtryAstr").html("");
		$("#GRBI_GSTNUM").next().find(".MndtryAstr").html("");
		$(".EXEM").hide();
		$(".GSTF").hide();
		$(".CHKBOX").hide();
	 } */
	 
 }
 
 function RmoveEmpFlds()
{
	 var html=$('.BankDetail1').find(".DYNROW")
	 var row = $('.BankDetail1').find(".DYNROW").length;
	 
	 for (i=0;i<row;i++)
	 {
		 if(i>0)
		  {
		  	$($('.BankDetail1').find(".DYNROW")[i]).find(".OEMPONE").hide(); 
			$($('.BankDetail1').find(".DYNROW")[i]).find(".DLTICON").show(); 
		  	$($('.BankDetail1').find(".DYNROW")[i]).find(".EMPI").removeClass("GREIMndtry")
			$($('.BankDetail1').find(".DYNROW")[i]).find(".SALM").removeClass("GREIMndtry")
			$($('.BankDetail1').find(".DYNROW")[i]).find(".OEMPM").removeClass("GREIMndtry")
		  }
		 else
		 {
			 $($('.BankDetail1').find(".DYNROW")[i]).find(".DLTICON").hide();
			 $($('.BankDetail1').find(".DYNROW")[i]).find(".OEMPM").addClass("GREIMndtry")
			//$($('.BankDetail1').find(".DYNROW")[i]).find(".EMPI").addClass("GREIMndtry")
		 }
		 
		  $($('.BankDetail1').find(".DYNROW")[i]).find("input[name='GREI_CUSID']" ).val($("#GRBI_CUSID").val())
	 } 
}function GetOfficaddr()
{	 
//var row = $('.BankDetail1').find(".DYNROW").length;
var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
var Resi=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='GREI_ORGANIADDR']:checked").val();

if(Resi=="Resi-cum-office")
 {
	 if($('#GREI_ADDRLINEI'+row).val() != "")
	 {
	if (confirm("The entered address will be cleared are you sure to continue") == true) {
 //$('#CADI_SAMRESIDADDR').val('Yes');
 document.getElementById('GREI_ADDRLINEI'+row).value=document.getElementById('GRAI_ADDRLINI').value;
 document.getElementById('GREI_ADDRLINEII'+row).value=document.getElementById('GRAI_ADDRLINII').value;
 document.getElementById('GREI_PINCODE'+row).value=document.getElementById('GRAI_PINCODE').value;
 document.getElementById('GREI_CITY'+row).value=document.getElementById('GRAI_CITY').value;
 document.getElementById('GREI_STATE'+row).value=document.getElementById('GRAI_STATE').value;
 document.getElementById('GREI_LNDMARK'+row).value=document.getElementById('GRAI_LNDMARK').value;
 document.getElementById('GREI_LNDLINENO'+row).value=document.getElementById('GRAI_LNDLINENO').value;
 document.getElementById('GREI_STDC'+row).value=document.getElementById('GRAI_STDC').value;
 $("#GREI_CITY"+row).next().addClass('active')
 $("#GREI_STATE"+row).next().addClass('active')
 $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.RSADDR').attr('disabled',true)
  //$('.OFFADDR').attr('disabled',true)
  $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').addClass('active');
	} 
  }
  else
  {
	  document.getElementById('GREI_ADDRLINEI'+row).value=document.getElementById('GRAI_ADDRLINI').value;
	  document.getElementById('GREI_ADDRLINEII'+row).value=document.getElementById('GRAI_ADDRLINII').value;
	  document.getElementById('GREI_PINCODE'+row).value=document.getElementById('GRAI_PINCODE').value;
	  document.getElementById('GREI_CITY'+row).value=document.getElementById('GRAI_CITY').value;
	  document.getElementById('GREI_STATE'+row).value=document.getElementById('GRAI_STATE').value;
	  document.getElementById('GREI_LNDMARK'+row).value=document.getElementById('GRAI_LNDMARK').value;
	  document.getElementById('GREI_LNDLINENO'+row).value=document.getElementById('GRAI_LNDLINENO').value;
	  document.getElementById('GREI_STDC'+row).value=document.getElementById('GRAI_STDC').value;
$("#GREI_CITY"+row).next().addClass('active')
 $("#GREI_STATE"+row).next().addClass('active')
	  $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.RSADDR').attr('disabled',true)
	   //$('.OFFADDR').attr('disabled',true)
	   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').addClass('active');
  }
 }
 else
   {
	 if($('#GREI_ADDRLINEI'+row).val() != "")
		 {
		 if (confirm("The entered address will be cleared are you sure to continue") == true) {
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.RSADDR').attr('disabled',false)
			//$('.OFFADDR').attr('disabled',false)
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.RSADDR').val('');	
			//$('.PINL').removeClass('active');
			$("#GREI_CITY"+row).next().removeClass('active')
			$("#GREI_CITY"+row).val('');
			 $("#GREI_STATE"+row).val('');
            $("#GREI_STATE"+row).next().removeClass('active')
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').removeClass('active');
		   }
		 }
	 else
		 {
		     $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.RSADDR').attr('disabled',false)
			//$('.OFFADDR').attr('disabled',false)
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.RSADDR').val('');	
			//$('.PINL').removeClass('active');
			$("#GREI_CITY"+row).next().removeClass('active')
            $("#GREI_STATE"+row).next().removeClass('active')
			$("#GREI_CITY"+row).val('');
			 $("#GREI_STATE"+row).val('');
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').removeClass('active');
		 }
   }
}function DELEMPDETAILS()
{
	
	if($("#GRBI_PROFILE").val() != "Salaried" && $("#GRBI_PROFILE").val()!="SEP" && $("#GRBI_PROFILE").val()!= "SENP")
	{
       var EMPDETAILS=UI_getdata($("#PrcsID").val(),$("#GRBI_CUSID").val(),"","","","LSW_SCLEAREMPDETAILS")	
   	   
   	 $('.PROCHGS').val('')
   	 $('.PROCHGAC').removeClass('active')
   	 
   	   
   	
  	$('input:radio[name=GREI_PREFCOMMUADDR]')[0].checked = false;
	$('input:radio[name=GREI_PREFCOMMUADDR]')[1].checked = false;
	$('input:radio[name=GREI_PREFCOMMUADDR]')[2].checked = false;
   	
   	$('input:radio[name=GREI_ORGANIADDR]')[0].checked = false;
	$('input:radio[name=GREI_ORGANIADDR]')[1].checked = false;
	$('input:radio[name=GREI_ORGANIADDR]')[2].checked = false;
   	
   	
    }
}

function CheckNegativeList()
{
	var NegativeList = UI_getdata("","","","","","LSW_SGETCAUTIONLIST");
	
	$("#GREI_NEGATLIST").html("")
	$("#GREI_NEGATLIST").append($(NegativeList).find("Negative").html());	
	
	$("#GREI_CAUTLIST").html("")
	$("#GREI_CAUTLIST").append($(NegativeList).find("Caution").html()); 	
	
    $("#GREI_PAR").html("")
	$("#GREI_PAR").append($(NegativeList).find("PAR").html());
}

function Chkqualify(Input1,Input2,Type,Event)
{
	if(Event=="Load")
	{
		if($("#GRBI_QUALIFICATION").val()=="Others")
		{
		  $(".OTHERS").show();
		  $("#GRBI_GOTHER").addClass("GRBIMndtry");	
		  $("#GRBI_GOTHER").next().find(".MndtryAstr").html("*");
		}
		else
		{
		  
		  $("#GRBI_GOTHER").removeClass("GRBIMndtry");
		  $("#GRBI_GOTHER").next().find(".MndtryAstr").html("");
		  $(".OTHERS").hide();
		}
		
	}
	else
	{
	if(Type=="Category")
	{
		if($("#"+Input1).val()=="Others")
		{
		  $(".OTHERS").show();
		  $("#"+Input2).addClass("GRBIMndtry");	
		  $("#"+Input2).next().find(".MndtryAstr").html("*");
		}
		else
		{
		  $(".OTHERS").hide();
		  $("#"+Input2).val('');
		  $("#"+Input2).next().removeClass('active');
		  $("#"+Input2).removeClass("GRBIMndtry");
          $("#"+Input2).next().find(".MndtryAstr").html("");		  
		}
	}
}
}
function Chkudha(){
	var borrower=$("#GRBI_GBORROWER").val()
	if ($("#GRBI_UDYAMVERI").val()=='Verified')
		{
		$("#GRBI_GCUAMNO").attr("disabled",true)
		}
		else
		{
		$("#GRBI_GCUAMNO").attr("disabled",false)
		}
    /* if(borrower=="Yes")
	{ */
	if($("#GRBI_GCUAMNO").prop('checked') == true){
		$("#GRBI_GUAMNO").val('');
		$("#GRBI_GUAMNO").removeClass("GRBIMndtry");
		$("#GRBI_GUAMNO").next().find(".MndtryAstr").html("");
		$("#GRBI_GUAMNO").attr("disabled",true);
		$(".veri").hide();
	}
	else {

		$("#GRBI_GUAMNO").addClass("GRBIMndtry");
		$("#GRBI_GUAMNO").next().find(".MndtryAstr").html("*");
		$("#GRBI_GUAMNO").attr("disabled",false);
		$(".veri").show();
	}
	}
	
 function Sector()
 {
   
	var xml=UI_getdata("TypeSec","","","","","LSW_SGETFINANCIALVAL");
	
    $("#GUOA_SECTOR").html("");
	$("#GUOA_SECTOR").append($(xml).find("RESULT").html());
	$("#GUOA_SECTOR").material_select(); 
}
function ChkGrProf()
{
	var Mar=$("#GRBI_MARITSTUS").val();	
	var Gen=$("input[name='GRBI_GENTER']:checked"). val();
	if((Mar=='Single') ||  Gen=='Male')
	{
		
		 $(".PROFILEVAL").find('.HSWF').attr('disabled',true)
	     $("span:contains('Housewife')").parent().addClass('HSWF');
		 $(".HSWF").addClass('disabled');
		 $("#GRBI_NPROFILE").val('')		 
		 $("#GRBI_NPROFILE").material_select();
	
	}
	else{
		
		 $(".PROFILEVAL").find('.HSWF').attr('disabled',false)
	     $("span:contains('Housewife')").parent().addClass('HSWF');
		 $(".HSWF").removeClass('disabled');
		 $("#GRBI_NPROFILE").val('')		 
		 $("#GRBI_NPROFILE").material_select();
	}
}
function Chkdirect()
{
	var dir=$("input[name='GRBI_PANTYPE']:checked"). val();
	if($("#GRBI_PANVERIFY").val()=="")
	{
	if(dir=="Direct")
	{
		
		$("#GRBI_PAN").addClass("GRBIMndtry");	
		$("#GRBI_PAN").next().find(".MndtryAstr").html("*");
		$(".TYP").show();
		$(".UPLD").hide();
		$(".KYCPROOF").show();
	}
	else if(dir=="OCR")
	{
		
		$("#GRBI_PAN").removeClass("GRBIMndtry");	
		$("#GRBI_PAN").next().find(".MndtryAstr").html("");
		$(".TYP").hide();
		//$("#CBSI_PAN").val("");
		$("#GRBI_PAN").removeClass('active');
		$(".UPLD").show();
		$(".KYCPROOF").show();
	}
	}
	else
	{
		$(".TYP").show();
		$(".UPLD").show();
		$(".KYCPROOF").hide();
	}
	if((($("#GRBI_VOTERIDPROOF").val()).includes ("ID PROOF"))||(($("#GRBI_AADHARPROOF").val()).includes ("ID PROOF"))||(($("#GRBI_DLPROOF").val()).includes ("ID PROOF"))||(($("#GRBI_PASSPORTPROOF").val()).includes ("ID PROOF"))||(($("#GRBI_UTILITYPROOF").val()).includes ("ID PROOF")))
	{
	   $("#GRBI_KYCPROOFTYP option[value='ID PROOF']").attr('disabled',true);
	   $("#GRBI_KYCPROOFTYP").material_select();
	}
	 if((($("#GRBI_VOTERIDPROOF").val()).includes ("DOB PROOF"))||(($("#GRBI_AADHARPROOF").val()).includes ("DOB PROOF"))||(($("#GRBI_DLPROOF").val()).includes ("DOB PROOF"))||(($("#GRBI_PASSPORTPROOF").val()).includes ("DOB PROOF"))||(($("#GRBI_UTILITYPROOF").val()).includes ("DOB PROOF")))
	{
	   $("#GRBI_KYCPROOFTYP option[value='DOB PROOF']").attr('disabled',true);
	   $("#GRBI_KYCPROOFTYP").material_select();
	}
	if((($("#GRBI_VOTERIDPROOF").val()).includes ("ADDRESS PROOF 2"))||(($("#GRBI_AADHARPROOF").val()).includes ("ADDRESS PROOF 2"))||(($("#GRBI_DLPROOF").val()).includes ("ADDRESS PROOF 2"))||(($("#GRBI_PASSPORTPROOF").val()).includes ("ADDRESS PROOF 2"))||(($("#GRBI_UTILITYPROOF").val()).includes ("ADDRESS PROOF 2")))
	{
	   $("#GRBI_KYCPROOFTYP option[value='ADDRESS PROOF 2']").attr('disabled',true);
	   $("#GRBI_KYCPROOFTYP").material_select();
	}
	if((($("#GRBI_VOTERIDPROOF").val()).includes ("ADDRESS PROOF 1"))||(($("#GRBI_AADHARPROOF").val()).includes ("ADDRESS PROOF 1"))||(($("#GRBI_DLPROOF").val()).includes ("ADDRESS PROOF 1"))||(($("#GRBI_PASSPORTPROOF").val()).includes ("ADDRESS PROOF 1"))||(($("#GRBI_UTILITYPROOF").val()).includes ("ADDRESS PROOF 1")))
	{
	   $("#GRBI_KYCPROOFTYP option[value='ADDRESS PROOF 1']").attr('disabled',true);
	   $("#GRBI_KYCPROOFTYP").material_select();
	}
	if((($("#GRBI_VOTERIDPROOF").val()).includes ("SIGN PROOF"))||(($("#GRBI_AADHARPROOF").val()).includes ("SIGN PROOF"))||(($("#GRBI_DLPROOF").val()).includes ("SIGN PROOF"))||(($("#GRBI_PASSPORTPROOF").val()).includes ("SIGN PROOF"))||(($("#GRBI_UTILITYPROOF").val()).includes ("SIGN PROOF")))
	{
	   $("#GRBI_KYCPROOFTYP option[value='SIGN PROOF']").attr('disabled',true);
	   $("#GRBI_KYCPROOFTYP").material_select();
	}
	if($("#GRBI_CUSTYPE").val() == "Non-Individual")
	{
		$("#GRBI_KYCPROOFTYP option[value='SIGN PROOF']").attr('disabled',true);
		$("#GRBI_KYCPROOFTYP option[value='DOB PROOF']").attr('disabled',true);
	}
	

}

function GetOfficaddr()
{	 
//var row = $('.BankDetail1').find(".DYNROW").length;
var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
var Resi=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='GREI_ORGANIADDR']:checked").val();

if(Resi=="Resi-cum-office")
 {
	 if($('#GREI_ADDRLINEI'+row).val() != "")
	 {
	if (confirm("The entered address will be cleared are you sure to continue") == true) {
 //$('#CADI_SAMRESIDADDR').val('Yes');
 document.getElementById('GREI_ADDRLINEI'+row).value=document.getElementById('GRAI_ADDRLINI').value;
 document.getElementById('GREI_ADDRLINEII'+row).value=document.getElementById('GRAI_ADDRLINII').value;
 document.getElementById('GREI_PINCODE'+row).value=document.getElementById('GRAI_PINCODE').value;
 document.getElementById('GREI_CITY'+row).value=document.getElementById('GRAI_CITY').value;
 document.getElementById('GREI_STATE'+row).value=document.getElementById('GRAI_STATE').value;
 document.getElementById('GREI_LNDMARK'+row).value=document.getElementById('GRAI_LNDMARK').value;
 document.getElementById('GREI_LNDLINENO'+row).value=document.getElementById('GRAI_LNDLINENO').value;
 document.getElementById('GREI_STDC'+row).value=document.getElementById('GRAI_STDC').value;
  $("#GREI_CITY"+row).next().addClass('active')
  $("#GREI_STATE"+row).next().addClass('active')
 $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
  //$('.OFFADDR').attr('disabled',true)
  $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').addClass('active');
	} 
  }
  else
  {
	  document.getElementById('GREI_ADDRLINEI'+row).value=document.getElementById('GRAI_ADDRLINI').value;
	  document.getElementById('GREI_ADDRLINEII'+row).value=document.getElementById('GRAI_ADDRLINII').value;
	  document.getElementById('GREI_PINCODE'+row).value=document.getElementById('GRAI_PINCODE').value;
	  document.getElementById('GREI_CITY'+row).value=document.getElementById('GRAI_CITY').value;
	  document.getElementById('GREI_STATE'+row).value=document.getElementById('GRAI_STATE').value;
	  document.getElementById('GREI_LNDMARK'+row).value=document.getElementById('GRAI_LNDMARK').value;
	  document.getElementById('GREI_LNDLINENO'+row).value=document.getElementById('GRAI_LNDLINENO').value;
	  document.getElementById('GREI_STDC'+row).value=document.getElementById('GRAI_STDC').value;
       $("#GREI_CITY"+row).next().addClass('active')
       $("#GREI_STATE"+row).next().addClass('active')
	  $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
	   //$('.OFFADDR').attr('disabled',true)
	   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').addClass('active');
  }
 }
 else
   {
	 if($('#GREI_ADDRLINEI'+row).val() != "")
		 {
		 if (confirm("The entered address will be cleared are you sure to continue") == true) {
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',false)
			//$('.OFFADDR').attr('disabled',false)
			$("#GREI_CITY"+row).next().removeClass('active')
			$("#GREI_CITY"+row).val('');
			$("#GREI_STATE"+row).val('');
            $("#GREI_STATE"+row).next().removeClass('active')
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').val('');	
			//$('.PINL').removeClass('active');
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').removeClass('active');
		   }
		 }
	 else
		 {
		     $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',false)
			//$('.OFFADDR').attr('disabled',false)
			$("#GREI_CITY"+row).next().removeClass('active')
			$("#GREI_CITY"+row).val('');
			$("#GREI_STATE"+row).val('');
            $("#GREI_STATE"+row).next().removeClass('active')
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').val('');	
			//$('.PINL').removeClass('active');
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').removeClass('active');
		 }
   }
}

function checkPAN(Event)
{
  if($('#GRBI_PANNAVAIL').is(':checked')==true)
	   {
		$("#GRBI_CUSFISNAM").attr('disabled',false);
		$("#GRBI_CUSLSTNAM").attr('disabled',false);
		$('#GRBI_PANNAVAIL').val('Yes');
		$(".FORM").show();
		$("#GRBI_PAN").val('');
		$("#GRBI_PAN").next().removeClass('active');
		$(".PANTYP").removeClass('GRBIMndtry');
		$("#GRBI_PAN").removeClass('GRBIMndtry');
		$("#GRBI_PAN").attr('disabled',true);
		$(".PANVTyp").attr('disabled',true);
		$("#GRBI_PAN").next().find(".MndtryAstr").html("");
		$("#GRBI_PANVERIFY").val('');		
		$(".CHEK").attr('disabled',true);
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
		$(".PANTYP").addClass('GRBIMndtry');
		$("#GRBI_PAN").attr('disabled',false);
		$(".PANVTyp").attr('disabled',false);		
		$(".CHEK").attr('disabled',false);
		$("#GRBI_PAN").next().find(".MndtryAstr").html("*");
		}
}
function Chkresi()
{
	var resi=$("#GRAI_YEAROFRESID").val()
	var month=$("#GRAI_MONTHS").val()
		
	var perresi=$("#GRAI_PERMYEAROFRESID").val()
	var permonth=$("#GRAI_PERMMONTHS").val()
	
	var orgresi=$("#GRAI_ORGYEAROFRESID").val()
	var orgmonth=$("#GRAI_ORGMONTHS").val()
	
	if(resi=="0" && month=="0")
	{
		alert("In year of residence is 0 then at least enter month should be greater than 0 ");
		
		$("#GRAI_MONTHS").val(''); 
		$("#GRAI_MONTHS").material_select(); 
	}
	if(perresi=="0" && permonth=="0")
	{
		alert("In year of residence is 0 then at least enter month should be greater than 0 ");
		$("#GRAI_PERMMONTHS").val(''); 
		$("#GRAI_PERMMONTHS").material_select(); 
	}
	if(orgresi=="0" && orgmonth=="0")
	{
		alert("In year of residence is 0 then at least enter month should be greater than 0 ");
		$("#GRAI_ORGMONTHS").val(''); 
		$("#GRAI_ORGMONTHS").material_select(); 
	}
}





function ChkLanMark(html,row)
{
	             var lanmark=$("#"+[row]).val()
				 
				 
				 if(isNumeric(lanmark))
				 {
					 alert("LandMark Should be AlphaNumeric");
					 $("#"+[row]).val('');
				 }

}
function Filesizepop(KYCName,Evnt)
{
	if(KYCName == "PAN"|| "Aadhar"|| "GRBI_FORM60A")
	{
		if($("#GRBI_CUSTYPE").val()=='Individual')
		   {
			  var ADDRTYPE1 = "ADDRESSPROOF"
		   }
		   else
		   {
			var ADDRTYPE1 = "Others"   
		   }
		   
		   var xmlDocSize=UI_getdata($("#GRBI_CUSTYPE").val(),ADDRTYPE1,"","","","LSW_SGETDOCSIZELST")
		   if($(xmlDocSize).find("RESULT").text() != "")
		   {
			   alert($(xmlDocSize).find("RESULT").text());
			   $(Evnt).next().click();
		   }
		   else{
			   alert("Invalid Format");
			   return;
		   }
	}
}

function Checkcin(Prcsid,CIN,CUSID)
{
	var PrcsId=$("#"+Prcsid).val()
	var CINVAL=$("#"+CIN).val()
	var cusidVAL=$("#"+CUSID).val()
var xml=UI_getdata(PrcsId,CINVAL,cusidVAL,"","","LSW_SCHECKCINDATA");
		
		var Output=$(xml).find('RESULT').text()
		
		if(Output != "OK")
			{
			  alert(Output);
			  $("#"+CIN).val('')
			  return false;
			}
}
function Checkudym(Prcsid,UDYM,CUSID)
{
	var PrcsId=$("#"+Prcsid).val()
	var UDYMVAL=$("#"+UDYM).val()
	var cusidVAL=$("#"+CUSID).val()
	var xml=UI_getdata(PrcsId,UDYMVAL,cusidVAL,"","","LSW_SCHECKUDAYAMDATA");
		
	var Output=$(xml).find('RESULT').text()
		
		if(Output != "OK")
			{
			  alert(Output);
			  $("#"+UDYM).val('')
			  return false;
			}
}
function CheckGst(Prcsid,GST,CUSID)
{
	var PrcsId=$("#"+Prcsid).val()
	var GSTVAL=$("#"+GST).val()
	var cusidVAL=$("#"+CUSID).val()
	var xml=UI_getdata(PrcsId,GSTVAL,cusidVAL,"","","LSW_SCHECKGSTDATA");
		
	var Output=$(xml).find('RESULT').text()
		
		if(Output != "OK")
			{
			  alert(Output);
			  $("#"+GST).val('')
			  return false;
			}
}
function Chkgst(id)
{
                   var inputvalues = $(id).val(); 
                   var GstNumber= inputvalues.toUpperCase()				 
                 var gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');    
                 if (gstinformat.test(GstNumber)) {
                 //  $(".gst").val(GstNumber);					 
                   return true;    
                 }
             else
             {    
                 alert('Please Enter Valid GSTIN Number - Eg.27AACCH5453M1Z9');    
                 $(id).val('');    
                 $(id).focus();    
			 }
}
function ChkGstPrimary (Gstnum,PGst){
	

		if($("#"+Gstnum).val()=='')
{
	alert ("Kindly fill GST Number")
	$("#"+PGst).prop('checked', false)
	return false;
}
else
{
	$("input[name='GGST_GSTCHK']").prop('checked',false)	
	$("#"+PGst).prop('checked', true);
}
}

function OtherKYC() 
{
if(($("#GRBI_VOTERIDTYPE").val()!="") && ($("#GRBI_VOTERIDTYPE").val()!=undefined))
{
	$(".voter").show();
	if($("#GRBI_VOTERIDTYPE").val()=="Direct")
	{
		if($("#GRBI_VOTERIDVEIRFY").val()=="Verified")
		{
		$(".voterupload").show();
		}
		else
		{
		$(".voterupload").hide();
		}
	}
	if($("#GRBI_VOTERIDTYPE").val()=="OCR")
	{
		if($("#GRBI_VOTERUPLOADVERIFY").val()=="Upload Verified")
		{
		$(".VoterFld").show();
		}
		else
		{
		$(".VoterFld").hide();
		}
	}
}

if(($("#GRBI_AADHARTYPE").val()!="") && ($("#GRBI_AADHARTYPE").val()!=undefined))
{
	$(".AADHAR").show();
	if($("#GRBI_AADHARTYPE").val()=="OCR")
	{
		if($("#GRBI_AADHARUPLOADVERIFY").val()=="Upload Verified")
		{
		//$(".AUPLDXML").show();
		//$(".AUPLDXMLII").show();
		$(".AVER").show();
		}
		else
		{
		//$(".AUPLDXML").hide();
		//$(".AUPLDXMLII").hide();
		$(".AVER").hide();
		}
	}
	if($("#GRBI_AADHARTYPE").val()=="XML Verification")
	{
		if($("#GRBI_AADHARUPLOADVERIFY").val()=="Upload Verified")
		{
		//$(".AUPLDXML").show();
		$(".AUPLDXMLII").hide();
		$(".AVER").show();
		}
		else
		{
		//$(".AUPLDXML").hide();
		$(".AUPLDXMLII").hide();
		$(".AVER").hide();
		}
	}
	if($("#GRBI_AADHARTYPE").val()=="ZIP File Verification")
	{
		if($("#GRBI_AADHARUPLOADVERIFY").val()=="Upload Verified")
		{
		//$(".AUPLDXML").show();
		$(".AUPLDXMLII").hide();
		$(".AVER").show();
		}
		else
		{
		//$(".AUPLDXML").hide();
		$(".AUPLDXMLII").hide();
		$(".AVER").hide();
		}
	}
}

if(($("#GRBI_DRIVNGTYPE").val()!="") && ($("#GRBI_DRIVNGTYPE").val()!=undefined))
{
	$(".dl").show();
	if($("#GRBI_DRIVNGTYPE").val()=="Direct")
	{
		if($("#GRBI_DRIVLICNSVERIFY").val()=="Verified")
		{
		$(".DUPLD").show();
		}
		else
		{
		$(".DUPLD").hide();
		}
	}
	if($("#GRBI_DRIVNGTYPE").val()=="OCR")
	{
		if($("#GRBI_DLUPLOADVERIFY").val()=="Upload Verified")
		{
		$(".DVER").show();
		}
		else
		{
		$(".DVER").hide();
		}
	}
}

if(($("#GRBI_PASPRTTYPE").val()!="") && ($("#GRBI_PASPRTTYPE").val()!=undefined))
{
	$(".passport").show();
	if($("#GRBI_PASPRTTYPE").val()=="Direct")
	{
		if($("#GRBI_PASSPORTVERIFY").val()=="Verified")
		{
		$(".passportupload").show();
		}
		else
		{
		$(".passportupload").hide();
		}
	}
	if($("#GRBI_PASPRTTYPE").val()=="OCR")
	{
		if(($("#GRBI_PASSUPLOADVERIFY").val()=="Upload Verified")&&($("#GRBI_PASSUPLOADIIVERIFY").val()=="Upload Verified"))
		{
		$(".PVER").show();
		}
		else
		{
		$(".PVER").hide();
		}
	}
}

if(($("#GRBI_UBVERIFYTYPE").val()!="") && ($("#GRBI_PASPRTTYPE").val()!=undefined))
{
$(".Utility").show();
}
}

function GETPROOFTYP()
{

var k=	$("#GRBI_KYCPROOFTYP").val().length	
var PROOFTYPE=""
 for(i=0;i<k;i++)
	 {
	 var PROOFTYPE1=$("#GRBI_KYCPROOFTYP").val()[i]
		
	 if(PROOFTYPE1!=undefined)
		 {
	      var PROOFTYPE= PROOFTYPE+','+PROOFTYPE1
		}
	 }
       var PROOFTYPE =PROOFTYPE.replace(',','')
       $("#GRBI_HIDPROFTYP").val(PROOFTYPE)	
}