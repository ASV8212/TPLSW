function residentaddr(){
  
  if($('#CADI_SAMRESIDADDR').is(':checked')==true)
  {
  $('#CADI_SAMRESIDADDR').val('Yes');

  document.getElementById('CADI_PREMADDRLINI').value=document.getElementById('CADI_ADDRLINI').value;
  document.getElementById('CADI_PERMADDRLINII').value=document.getElementById('CADI_ADDRLINII').value;
  document.getElementById('CADI_PERMPINCODE').value=document.getElementById('CADI_PINCODE').value;
  document.getElementById('CADI_PERMCITY').value=document.getElementById('CADI_CITY').value;
  document.getElementById('CADI_PERMSTATE').value=document.getElementById('CADI_STATE').value;
  document.getElementById('CADI_PERMLNDMARK').value=document.getElementById('CADI_LNDMARK').value;
  document.getElementById('CADI_PERMLNDLINENO').value=document.getElementById('CADI_LNDLINENO').value;
  document.getElementById('CADI_PSTDC').value=document.getElementById('CADI_STDC').value;
  
  document.getElementById('CADI_PERMYEAROFRESID').value=document.getElementById('CADI_YEAROFRESID').value;
  
  var ResType=document.getElementById('CADI_RESIDTYPE').value;
  var Month=document.getElementById('CADI_MONTHS').value;
  
  $("#CADI_PERMRESIDTYPE").val(ResType);
  $("#CADI_PERMMONTHS").val(Month)
  $('#CADI_PERMRESIDTYPE').material_select();
  $('#CADI_PERMMONTHS').material_select();
  $('.PRADDR').attr('disabled',true)
  $('.RSADDR').attr('disabled',true)
  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
  $('.RSADDR').find('.select-dropdown').attr('disabled',true)
 
   $('.ADDR').addClass('active');
  }
  else
  {
	$('#CADI_SAMRESIDADDR').val('No');   

	$('.PRADDR').find('.select-dropdown').attr('disabled',false)
	$('.RSADDR').find('.select-dropdown').attr('disabled',false)
	$('.PRADDR').attr('disabled',false)
	$('.RSADDR').attr('disabled',false)
	 $('.ALLDIS').attr('disabled',true);
	$('.PRADDR').val('');	
	$('#CADI_PERMRESIDTYPE').material_select("destroy");
	$('#CADI_PERMMONTHS').material_select("destroy");	
	$('#CADI_PERMRESIDTYPE').material_select();
	$('#CADI_PERMMONTHS').material_select();
	$('.PINL').removeClass('active');
	$('.ADDR').removeClass('active');
  }
  
 if( $("#CBSI_RESCOMPETED").val()=="Completed")
 {
	 $('.RESSTAT').attr('disabled',true) 
 }
  
}


function Loadresidentaddr(){
  
  if($('#CADI_SAMRESIDADDR').is(':checked')==true)
  {
  $('#CADI_SAMRESIDADDR').val('Yes');

  document.getElementById('CADI_PREMADDRLINI').value=document.getElementById('CADI_ADDRLINI').value;
  document.getElementById('CADI_PERMADDRLINII').value=document.getElementById('CADI_ADDRLINII').value;
  document.getElementById('CADI_PERMPINCODE').value=document.getElementById('CADI_PINCODE').value;
  document.getElementById('CADI_PERMCITY').value=document.getElementById('CADI_CITY').value;
  document.getElementById('CADI_PERMSTATE').value=document.getElementById('CADI_STATE').value;
  document.getElementById('CADI_PERMLNDMARK').value=document.getElementById('CADI_LNDMARK').value;
  document.getElementById('CADI_PERMLNDLINENO').value=document.getElementById('CADI_LNDLINENO').value;
  document.getElementById('CADI_PSTDC').value=document.getElementById('CADI_STDC').value;
  
  document.getElementById('CADI_PERMYEAROFRESID').value=document.getElementById('CADI_YEAROFRESID').value;
  
  var ResType=document.getElementById('CADI_RESIDTYPE').value;
  var Month=document.getElementById('CADI_MONTHS').value;
  
  $("#CADI_PERMRESIDTYPE").val(ResType);
  $("#CADI_PERMMONTHS").val(Month)
  $('#CADI_PERMRESIDTYPE').material_select();
  $('#CADI_PERMMONTHS').material_select();
  $('.PRADDR').attr('disabled',true)
  $('.RSADDR').attr('disabled',true)
  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
  $('.RSADDR').find('.select-dropdown').attr('disabled',true)

   $('.ADDR').addClass('active');
  }
  
   if( $("#CBSI_RESCOMPETED").val()=="Completed")
 {
	 $('.RESSTAT').attr('disabled',true) 
 }
}


function CheckAddrMndtry()
{
	var AddrI=$("#CADI_ADDRLINI").val()
	var PIN=$("#CADI_PINCODE").val()
	var LndMrk=$("#CADI_LNDMARK").val()
	var ResType=$("#CADI_RESIDTYPE").val();
	var ResYear=$("#CADI_YEAROFRESID").val();
	
	if(AddrI =="" || PIN == "" || LndMrk == "" || ResType == "" || ResYear == "")
		{
		 alert('Fill the Mandatory Fields In Residence Address');
		 $("#CADI_SAMRESIDADDR"). prop("checked", false);
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
}

function CheckAppltype()
{
	
	var ApplCusType=$("#CBSI_CUSTYPE").val()
	var Prifx = $("#headingOne1 a").attr("data-aria").split("|")[1];
	if(ApplCusType=="Non-Individual")
		{
		$("#CBSI_CUSFISNAM").next().text('Organisation Name *');
		$("#CBSI_CUSFISNAM").removeClass('IsAlphaFields');
		
		 $(".NINDM").addClass('CBSIMndtry');
		$(".INDU").hide();
		$(".NINDU").show();
		$(".AddKYC").hide();
		$(".OKYCD").hide();
		$(".CONT").show();
		
		//$(".GSTF").show();
		$(".INDU").find('.CBSIDBfields').removeClass('CBSIMndtry');
		$(".INDU").find('.CADIDBfields').removeClass('CADIMndtry');
		$(".INDU").find('.CEMIDBfields').removeClass('CEMIMndtry');
		$(".INDU").find('.CDOGDBfields').removeClass('CDOGMndtry');
		$(".DocImg").removeClass('DOCMndtry');

		 var element = document.getElementById("RadINDU");
		  element.classList.remove("CBSIMndtry");
		$("#LODE_SUBLONTYP").parent().next().find(".MndtryAstr").html("");
		$("#CADI_ORGRESIDTYPE").next().text('Address Type');
	//	$("#CADI_ORGRESIDTYPE").remove("CADIMndtry");
		  $("#CBSI_TITLE").empty();
		  $("#CBSI_TITLE").append('<option id="M/S">M/S</option>') 
		  $("#CBSI_TITLE").val('M/S');
		//$("#CBSI_TITLE").attr('disabled',true)
		
		 var Constitution=$("#CBSI_CONSTITUTION").val()
		 if(Constitution=="Public Ltd"||Constitution=="Private Ltd")
			 {
             $("#CDOG_CIN").addClass('CDOGMndtry');
             $("#CDOG_CIN").next().find(".MndtryAstr").html("*");
			 }

		/*var Constitution=$("#CBSI_CONSTITUTION").val()
		 if(Constitution=="HUF")
			 {
			 $("#CBSI_PROFILE").append('<option value="Karta">Karta</option>') 
			 $("#CBSI_PROFILE").val('Karta')
			 $("#CBSI_PROFILE").attr('disabled',true)
			 $("#CBSI_PROFILE").addClass('CBSIMndtry');
			 $("#CBSI_PROFILE").parent().next().find(".MndtryAstr").html("*");
			 }
		 else if(Constitution=="Proprietorship")
			 {
			 $("#CBSI_PROFILE").append('<option value="Proprietor">Proprietor</option>') 
			 $("#CBSI_PROFILE").val('Proprietor')
			 $("#CBSI_PROFILE").attr('disabled',true)
			 $("#CBSI_PROFILE").addClass('CBSIMndtry');
			 $("#CBSI_PROFILE").parent().next().find(".MndtryAstr").html("*");
			 }
		 else
			 {
			 $(".PROFILE").hide();
			 $("#CBSI_PROFILE").removeClass('CBSIMndtry');
			 $("#CBSI_PROFILE").parent().next().find(".MndtryAstr").html("");
			 }*/
		 $("#CBSI_NPROFILE").empty();
		 $("#CBSI_NPROFILE").append('<option value="SENP">SENP</option>') 
		 $('#CBSI_NPROFILE').material_select();
		  $("#CBSI_PROFILE").val('SENP');
		 $(".PROFILE").show();
		}

		else
		{
		 $(".NINDM").removeClass('CBSIMndtry');
		 $(".INDU").show();
		 $(".NINDU").hide();
		 $(".AddKYC").show();
		 $(".OKYCD").show();
		 $(".CONT").hide();
		 
		 //$(".GSTF").hide();
		 $(".NINDU").find('.CBSIDBfields').removeClass('CBSIMndtry');
		 $(".NINDU").find('.CADIDBfields').removeClass('CADIMndtry');
		 $(".NINDU").find('.CEMIDBfields').removeClass('CEMIMndtry');
		 $(".NINDU").find('.CDOGDBfields').removeClass('CDOGMndtry');
		 $("#CADI_ORGRESIDTYPE").next().text('Residence Type *');
		 $(".DocImg").addClass('DOCMndtry');
		// $("#CADI_ORGRESIDTYPE").addClass('CADIMndtry');
		}
}

function CheckProfile(Event)
{
	var Profile=$("#CBSI_PROFILE").val();
	var ApplCusType=$("#CBSI_CUSTYPE").val()
	// Credit Change Start
	/* var Qualification=$("#CBSI_QUALIFICATION").val();
	if(Profile=="SEP")
	{
	     $("#CBSI_QUALIFICATION").empty();
		 $("#CBSI_QUALIFICATION").
append('<option value="">--Select--</option><option value="Matriculation" disabled >Matriculation</option><option value="UG" disabled >UG</option><option value="PG" disabled >PG</option><option value="Graduate" disabled >Graduate</option><option value="MBBS">MBBS</option><option value="MD">MD</option><option value="MS">MS</option><option value="MDS">MDS</option><option value="BDS">BDS</option><option value="CA">CA</option>') 
		 $('#CBSI_QUALIFICATION').material_select();
		  $('#CBSI_QUALIFICATION').val(Qualification);
	
	}
	else
	{
		 $("#CBSI_QUALIFICATION").empty();
		 $("#CBSI_QUALIFICATION").
append('<option value="">--Select--</option><option value="Matriculation">Matriculation</option><option value="UG">UG</option><option value="PG">PG</option><option value="Graduate">Graduate</option>') 
		 $('#CBSI_QUALIFICATION').material_select();
		  $('#CBSI_QUALIFICATION').val(Qualification);
	} */
	// Credit Change End
	if(ApplCusType=="Individual")
		{
	     if(Profile=="Salaried")
		   {
		    $("#CEMI_DATOFESTABLIS").next().text('Joining date in present organisation *');
		    $("#CEMI_NOOFYERBUSINESS").next().text('No of years in present organisation');
			
		    $(".SAL").show();
			//$(".GSTF").hide();
		    $(".SALM").addClass('CEMIMndtry');
		    $(".SEPM").removeClass('CEMIMndtry');
		    $(".SEP").hide();
			$('input:radio[name=CEMI_ORGANIADDR]')[0].checked = false;
	    	$('input:radio[name=CEMI_ORGANIADDR]')[1].checked = false;
	    	$('input:radio[name=CEMI_ORGANIADDR]')[2].checked = false;
		    $(".PRECOMM").show();
			   var element = document.getElementById("ORGSEP");
			       element.classList.add("CEMIMndtry");
		  }
	/*else if(Profile=="Retired" || Profile=="Housewife")
	   {
		 alert('Not Eligible');
		 $(".RDHW").attr("disabled",true)
		 $("span:contains('Retired')").parent().addClass('disabled');
		 $("span:contains('Housewife')").parent().addClass('disabled');
		 $("#CBSI_PROFILE").val('');
		 $('#CBSI_PROFILE').material_select();
	   } */
	  else if(Profile=="Housewife")
	   {
		  $(".EMP").hide();
	   } 
	else if(Profile=="SEP" || Profile=="SENP")
		{
		  $(".SAL").hide();
		  $(".SEP").show();
		  $("#CEMI_DATOFESTABLIS").next().text('Date of Establishment *');
		  $("#CEMI_NOOFYERBUSINESS").next().text('No. of Years in Business');
		  $(".SALM").removeClass('CEMIMndtry');
		  $(".SEPM").addClass('CEMIMndtry');
		  $(".EMP").show();
		  $(".ORG").hide();
		  //$(".GSTF").show();
		  /*$(".RDHW").attr("disabled",true)
		  $('.disabled').addClass('RDH');
		  $(".RDH").removeClass('disabled');*/
		 var element = document.getElementById("ORGSEP");
		  element.classList.add("CEMIMndtry");
		}
	
	}
	RmoveEmpFlds();
	if(Event=="Change")
	{
	CheckChangeProfile();
	}
}
function CheckMarStatus()
{
	var MaritStatus=$("#CBSI_MARITSTUS").val()
	if(MaritStatus=="Married")
		{
		//  $("#CBSI_SPOUSNAME").addClass('CBSIMndtry');
		  //$("#CBSI_SPOUSNAME").next().find(".MndtryAstr").html("*");
		  $("#CBSI_SPOUSNAME").attr("disabled",false)
//		  $("#CBSI_SPOUSNAME").val('')
		}
	else
		{
		//$("#CBSI_SPOUSNAME").next().find(".MndtryAstr").html("");
		//$("#CBSI_SPOUSNAME").removeClass('CBSIMndtry');
		$("#CBSI_SPOUSNAME").attr("disabled",true)
		$("#CBSI_SPOUSNAME").val('')
		}
}

function CheckGender()
{
	var Gender=$("input[name='CBSI_GENTER']:checked"). val();
	
	if(Gender=="Transgender")
		{
		if (confirm("Confirm?") == true) {
			$('input[name="CBSI_GENTER"]').prop('checked', true);
		} else {
			$('input[name="CBSI_GENTER"]').prop('checked', false);
		}	
		}
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
function EmpNaturBusness(html,row)
{
		//var CATEGORY=$("#CEMI_INDUSCATRGORY"+row).val().replace(/,/g,'');
		//var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
		//var row=$(row).val();
		var CATEGORY=$("#CEMI_INDUSCATRGORY"+row).val();
		var Naturebusiness=$("#CEMI_NATRBUSINESS"+row).val();
		//var Cluster=$("#CEMI_CLUSTER"+row).val();
		//var CATEGORY=$(CATEGORY).val();
		var xml=UI_getdata(CATEGORY,"","","","","LSW_SGETNATUROFBUSSINESS")
		var NATURE=$(xml).find('NATURE').html();
		$("#CEMI_NATRBUSINESS"+row).append(NATURE)
		if(Naturebusiness!="")
		{
		$("#CEMI_NATRBUSINESS"+row+" option:contains("+Naturebusiness+")").attr("selected","selected")
		}
		$("#CEMI_NATRBUSINESS"+row).material_select("destroy");	
		$("#CEMI_NATRBUSINESS"+row).material_select();
} 
					
function OrgNaturBusness()
{
		//var CATEGORY=$("#CEMI_INDUSCATRGORY"+row).val().replace(/,/g,'');
		//var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
		//var row=$(row).val();
		var ORGCATEGORY=$("#CDOG_INDUSCATRGORY").val();
		var OrgNaturebusiness=$("#CDOG_NATRBUSINESS").val();
		//var Cluster=$("#CEMI_CLUSTER"+row).val();
		//var CATEGORY=$(CATEGORY).val();
		var xml=UI_getdata(ORGCATEGORY,"","","","","LSW_SGETNATUROFBUSSINESS")
		var ORGNATURE=$(xml).find('NATURE').html();
		$("#CDOG_NATRBUSINESS").append(ORGNATURE)
		if(OrgNaturebusiness!="")
		{
		$("#CDOG_NATRBUSINESS"+" option:contains("+OrgNaturebusiness+")").attr("selected","selected")
		}
		$("#CDOG_NATRBUSINESS").material_select("destroy");	
		$("#CDOG_NATRBUSINESS").material_select();
} 					
					
					
					
					
function CheckLoanType(Prifx1,Prifx2,Prifx3,Prifx4)
{
	var LoanType=$("#CBSI_LONTYPE").val()
	
	if(LoanType=="Registered Mortgage")
		{
		  $("."+Prifx1+"DBfields").attr('disabled',true);
		  $("."+Prifx2+"DBfields").attr('disabled',true);
		  $("."+Prifx3+"DBfields").attr('disabled',true);
		  $("."+Prifx4+"DBfields").attr('disabled',true);
		}
}


//Popup hide
function ExstAppNo() 
{
  $("#BTNAcctRecv").click();	
	$('.DashPrp1').show();
//$("#CUSSELECTIONModal").hide();
//$( "div" ).remove( ".modal-backdrop" )
//$( "div" ).remove( ".fade" )


//var element = document.getElementByClass("modal-backdrop fade show");
//element.classList.remove("modal-backdrop fade show");
}


function ExstCusDetl()
{
  $("#BTNAcctRecv").click();	
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


function CheckKycVerify()
{
	var KYCID=$("#"+id).val()
	
	if(KYCID != "Verified")
		{
		  alert('Verify your '+Msg);
		  return false;
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
    var CusID=$('#CBSI_CUSID').val()
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
  //   var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
  //   var Filename  = names.replace(',','')
          var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
  
       if($("#CBSI_CUSTYPE").val()=='Individual')
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
	   
		var xml=UI_getdata(FileType,FileSize,Filename,ADDRTYPE,$("#CBSI_CUSTYPE").val()+'|'+$("#PrcsID").val(),"LSW_SGETKYCDOCUMNTTYPE")
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
var ApplCusType=$("#CBSI_CUSTYPE").val()
if(ApplCusType=="Non-Individual")
{
	 $(".INDMiss").attr("disabled",true)
	 $(".INDMiss").addClass('disabled');
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
	var PrcsId=$("#CBSI_PRCSID").val()
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
	var Title=$("#CBSI_TITLE").val()
	
	   if(Title=="Mr")
	   {
		
	    $('input:radio[name=CBSI_GENTER]')[0].checked = true;
		$("#CBSI_NPROFILE").val('');
		$('#CBSI_NPROFILE').material_select("destroy");	
		$('#CBSI_NPROFILE').material_select();
	   }
	    else if(Title=="Mrs" || Title=="Miss")
		{
	     $('input:radio[name=CBSI_GENTER]')[1].checked = true;
		}
		else if(Title=="NA" ||  Title=="NA")
		{
		 $('input:radio[name=CBSI_GENTER]')[2].checked = true;
		}
	    else
	    {
	    	$('input:radio[name=CBSI_GENTER]')[0].checked = false;
	    	$('input:radio[name=CBSI_GENTER]')[1].checked = false;
			$('input:radio[name=CBSI_GENTER]')[2].checked = false;
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
		 $("#CoAppConsti").addClass('COAPMndtry');
		 $("#CoAppcin").addClass('COAPMndtry');
		 $("#CoAppcin").parent().next().find(".MndtryAstr").html("*");
		 $("#CoAppConsti").parent().next().find(".MndtryAstr").html("*");
	     $('#CoAppConsti').material_select("destroy");	
		 $('#CoAppConsti').material_select();
		 $(".CIN").hide();
		}
	 else
		 {
		 $('#Constitution').find('.select-dropdown').val('')
		 $("#CoAppConsti").val('')
		 $("#CoAppcin").removeClass('COAPMndtry');
		 $("#CoAppcin").parent().next().find(".MndtryAstr").html("");
		 $("#CoAppConsti").removeClass('COAPMndtry');
		 $("#CoAppConsti").parent().next().find(".MndtryAstr").html("");
	     $('#CoAppConsti').material_select("destroy");	
		 $('#CoAppConsti').material_select();
		 $("#CoAppcin").val('')
		 $(".Constitution").hide();
		 $(".CIN").hide();
		 }
}

function CheckDupMobNo(FieldI,FieldII,Type)
{
	var FieldIVal=$("#"+FieldI).val()
	var FieldIIVal=$("#"+FieldII).val()
	
	if(FieldIVal != "")
	{
		if(FieldIVal==FieldIIVal)
		  {
		    alert(Type+" Already Exists.");
		    $("#"+FieldI).val('')
		  }
	}
		  
}


function AppTitle()
{
	var Gender=$("input[name='CBSI_GENTER']:checked"). val();
	
	var Title=$("#CBSI_TITLE"). val();
	
	if(Gender=="Male")
		{
		$("#CBSI_TITLE").val('');
		 $('#CBSI_TITLE').material_select("destroy");	
		 $('#CBSI_TITLE').material_select();
		 $("#CBSI_NPROFILE").val('');
		 $('#CBSI_NPROFILE').material_select("destroy");	
		 $('#CBSI_NPROFILE').material_select();
		}
	else if(Gender=="Female")
      { 
		if(Title=="Mr")
			{
			$("#CBSI_TITLE").val('');
		    $('#CBSI_TITLE').material_select("destroy");	
			 $('#CBSI_TITLE').material_select();
	
            }
	    
	  }
} 

function CheckIncomeCons()
{
	var LONTYPE=$("#CBSI_LONTYPE").val()
	if(LONTYPE=="Fresh Loans")
	{
		 $(".INCOCOS").removeClass('CBSIMndtry');	
		 $(".INCOCOS").next().find(".MndtryAstr").html("");
	}
	else
	{
		 $(".INCOCOS").addClass('CBSIMndtry');
		 $(".INCOCOS").next().find(".MndtryAstr").html("*");
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
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="MULTIPLY'+rowno+'" name="KARZAACTION"><label class="custom-control custom-control-label" for="MULTIPLY'+rowno+'"></label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=RXLD_MULTIPLIER'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
					
		         } 
				 },
		 /*{ targets: 8, "render": function ( data, type, row, meta ) {                            
	 			
			   var rowno = meta.row;       			 
			 
	 		  var HTML ='<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" multiple id="ADDRTYPE'+rowno+'" name="RXLD_ADDRTYPE">';
	 			HTML = HTML + '<option>--Select--</option>';
	 			HTML = HTML + '<option value="ID PROOF">ID PROOF</option></span>';
				HTML = HTML + '<option value="SIGN PROOF">SIGN PROOF</option></span>';
				HTML = HTML + '<option value="DOB PROOF">DOB PROOF</option></span>';
				HTML = HTML + '<option value="ADDRESS PROOF 1">ADDRESS PROOF 1</option></span>';
				HTML = HTML + '<option value="ADDRESS PROOF 2">ADDRESS PROOF 2</option></span>';
			          			
	 			var htmldata = $(HTML);
	 			
	 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

	          return htmldata[0].outerHTML; 
					
		         } 
				 }*/
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
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes" id="GSTY'+rowno+'" name="GSTACTION"><label class="custom-control custom-control-label" for="GSTY'+rowno+'"></label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=GSTY'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

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

$(document).on("blur", ".JOINDATE", function() {
	
	var DateVal=$(this).val()	
	var DateId=$(this).attr('id')
    var html=$('.BankDetail1').find(".DYNROW")
    var row = $('.BankDetail1').find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	   var JoinId=$($(html).find("[name=CEMI_DATOFESTABLIS]")[i]).attr('id');
	   if(JoinId!=DateId)
		   {
		   var JoinVal=$($(html).find("[name=CEMI_DATOFESTABLIS]")[i]).val()
		    if(JoinVal == DateVal)
		    	{
		    	alert("Date of present organisation is already entered");
		    	$(this).val('');
		    	return false;
		    	}
		   }
	 }
});
/*
function CheckNegativeList(HTML,id)
{
	var NegativeList = UI_getdata("Negative List","","","","","LSW_SGETCAUTIONLIST");
	$(HTML).find("[name='CEMI_NEGATLIST']").html("")
	$(HTML).find("[name='CEMI_NEGATLIST']").empty();
	$(HTML).find("[name='CEMI_NEGATLIST']").append($(NegativeList).find("RESULT").html());
	$(HTML).find("[name='CEMI_NEGATLIST']").material_select(); 	
	
	var CautionList = UI_getdata("Caution List","","","","","LSW_SGETCAUTIONLIST");
	$(HTML).find("[name='CEMI_CAUTLIST']").html("")
	$(HTML).find("[name='CEMI_CAUTLIST']").empty();
	$(HTML).find("[name='CEMI_CAUTLIST']").append($(CautionList).find("RESULT").html());
	$(HTML).find("[name='CEMI_CAUTLIST']").material_select(); 	
}
*/

function CheckNegativeList()
{
	var NegativeList = UI_getdata("","","","","","LSW_SGETCAUTIONLIST");
	
	$("#CEMI_NEGATLIST").html("")
	$("#CEMI_NEGATLIST").append($(NegativeList).find("Negative").html());	

	$("#CEMI_CAUTLIST").html("")
	$("#CEMI_CAUTLIST").append($(NegativeList).find("Caution").html()); 	
	
	$("#CEMI_PAR").html("")
	$("#CEMI_PAR").append($(NegativeList).find("PAR").html()); 
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
           
	   { targets: 13, "render": function ( data, type, row, meta ) {                            
			
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
			
			if($("#CBSI_CUSTYPE").val()=="Non-Individual")
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
	 			HTML = HTML + '<option value="Office Address">Office Address</option></span>';
			          			
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

function CHKSAMEKYC(Id,Type)
{
       var IDProof= $('#'+Id).val();
		var xml=UI_getdata($("#PrcsID").val(),Type,IDProof,$("#CBSI_CUSID").val(),"","LSW_SCheckOTHERKYCDOCU")
        var Result=$(xml).find('Result').text()
        if(Result=="YES")
        	{
             alert ("Same KYC already exists")
             $('#'+Id).val('')
             $('#'+Id).removeClass('active');
            }
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
		  	$($('.BankDetail1').find(".DYNROW")[i]).find(".EMPI").removeClass("CEMIMndtry")
			$($('.BankDetail1').find(".DYNROW")[i]).find(".SALM").removeClass("CEMIMndtry")
			$($('.BankDetail1').find(".DYNROW")[i]).find(".OEMPM").removeClass("CEMIMndtry")
		  }
	  else
		 {
			 $($('.BankDetail1').find(".DYNROW")[i]).find(".DLTICON").hide();
			 $($('.BankDetail1').find(".DYNROW")[i]).find(".OEMPM").addClass("CEMIMndtry")
			// $($('.BankDetail1').find(".DYNROW")[i]).find(".EMPI").addClass("CEMIMndtry")
		 }
		 
		  $($('.BankDetail1').find(".DYNROW")[i]).find("input[name='CEMI_CUSID']" ).val($("#CBSI_CUSID").val())
	 } 
}


function CheckFieldDisb()
{
   var FstName=$("#CBSI_FETCHDOBNAME").val();
   var LstName=$("#CBSI_FETCHLSTNAME").val();
   var FathName=$("#CBSI_FETCHFATHNAME").val();
   var DOB=$("#CBSI_FETCHDOBNAME").val();
   
   if(FstName=="Selected")
	   {
	   $("#CBSI_CUSFISNAM").attr('disabled',true);
	   }
   if(LstName=="Selected")
	   {
	   $("#CBSI_CUSLSTNAM").attr('disabled',true);
	   }
   if(FathName=="Selected")
     {
      $("#CBSI_FATHRNAM").attr('disabled',true);
     }
   if(DOB=="Selected")
     {
      $("#CBSI_DOB").attr('disabled',true);
     }
}

function GetOfficaddr()
{	 
//var row = $('.BankDetail1').find(".DYNROW").length;
var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
var Resi=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='CEMI_ORGANIADDR']:checked").val();

if(Resi=="Resi-cum-office")
 {
	 if($('#CEMI_ADDRLINEI'+row).val() != "")
	 {
	if (confirm("The entered address will be cleared are you sure to continue") == true) {
 //$('#CADI_SAMRESIDADDR').val('Yes');
 document.getElementById('CEMI_ADDRLINEI'+row).value=document.getElementById('CADI_ADDRLINI').value;
 document.getElementById('CEMI_ADDRLINEII'+row).value=document.getElementById('CADI_ADDRLINII').value;
 document.getElementById('CEMI_PINCODE'+row).value=document.getElementById('CADI_PINCODE').value;
 document.getElementById('CEMI_CITY'+row).value=document.getElementById('CADI_CITY').value;
 document.getElementById('CEMI_STATE'+row).value=document.getElementById('CADI_STATE').value;
 document.getElementById('CEMI_LNDMARK'+row).value=document.getElementById('CADI_LNDMARK').value;
 document.getElementById('CEMI_LNDLINENO'+row).value=document.getElementById('CADI_LNDLINENO').value;
 document.getElementById('CEMI_STDC'+row).value=document.getElementById('CADI_STDC').value;
  $("#CEMI_CITY"+row).next().addClass('active')
  $("#CEMI_STATE"+row).next().addClass('active')
 $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
  //$('.OFFADDR').attr('disabled',true)
  $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').addClass('active');
	} 
  }
  else
  {
	  document.getElementById('CEMI_ADDRLINEI'+row).value=document.getElementById('CADI_ADDRLINI').value;
	  document.getElementById('CEMI_ADDRLINEII'+row).value=document.getElementById('CADI_ADDRLINII').value;
	  document.getElementById('CEMI_PINCODE'+row).value=document.getElementById('CADI_PINCODE').value;
	  document.getElementById('CEMI_CITY'+row).value=document.getElementById('CADI_CITY').value;
	  document.getElementById('CEMI_STATE'+row).value=document.getElementById('CADI_STATE').value;
	  document.getElementById('CEMI_LNDMARK'+row).value=document.getElementById('CADI_LNDMARK').value;
	  document.getElementById('CEMI_LNDLINENO'+row).value=document.getElementById('CADI_LNDLINENO').value;
	  document.getElementById('CEMI_STDC'+row).value=document.getElementById('CADI_STDC').value;
       $("#CEMI_CITY"+row).next().addClass('active')
       $("#CEMI_STATE"+row).next().addClass('active')
	  $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
	   //$('.OFFADDR').attr('disabled',true)
	   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').addClass('active');
  }
 }
 else
   {
	 if($('#CEMI_ADDRLINEI'+row).val() != "")
		 {
		 if (confirm("The entered address will be cleared are you sure to continue") == true) {
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',false)
			//$('.OFFADDR').attr('disabled',false)
			$("#CEMI_CITY"+row).next().removeClass('active')
			$("#CEMI_CITY"+row).val('');
			$("#CEMI_STATE"+row).val('');
            $("#CEMI_STATE"+row).next().removeClass('active')
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').val('');	
			//$('.PINL').removeClass('active');
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').removeClass('active');
		   }
		 }
	 else
		 {
		     $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',false)
			//$('.OFFADDR').attr('disabled',false)
			$("#CEMI_CITY"+row).next().removeClass('active')
			$("#CEMI_CITY"+row).val('');
			$("#CEMI_STATE"+row).val('');
            $("#CEMI_STATE"+row).next().removeClass('active')
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').val('');	
			//$('.PINL').removeClass('active');
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').removeClass('active');
		 }
   }
}

function GridControlDetailDEDUPEAGREEGRD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
					
              if($("#DMY7").val().split('|')[8]=="ML01")
	             {
					 if(row[0]=="MICRO LAP")
			 				{
					 var rowno = meta.row;		 
				 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes"  id="EXY'+rowno+'" name="AGREEACTION"><label class="custom-control custom-control-label" for="EXY'+rowno+'"></label>';			 
				 		HTML = HTML + '</span>';			  
				 		
				 		var htmldata = $(HTML);
							
							$(htmldata).find('[name=RXLD_AGREEACTION'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

							//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
							//alert(htmldata[0].outerHTML);
							
				        return htmldata[0].outerHTML;  
							}
					   else
                           {
	                           var rowno = meta.row;		 
				 		       var HTML ='<span> </span>';			  
				 		      var htmldata = $(HTML);
							    //$(htmldata).find('[name=RXLD_AGREEACTION'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

							//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
							//alert(htmldata[0].outerHTML);
							
				              return htmldata[0].outerHTML; 
                            }
	               }					
				else 
					{ 
					if(row[0] == "Loan Against Property")
			 				{
					 var rowno = meta.row;		 
				 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" value="Yes"  id="EXY'+rowno+'" name="AGREEACTION"><label class="custom-control custom-control-label" for="EXY'+rowno+'"></label>';			 
				 		HTML = HTML + '</span>';			  
				 		
				 		var htmldata = $(HTML);
							
							$(htmldata).find('[name=RXLD_AGREEACTION'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

							//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
							//alert(htmldata[0].outerHTML);
							
				        return htmldata[0].outerHTML;  
							}
                         else
                           {
	                           var rowno = meta.row;		 
				 		       var HTML ='<span> </span>';			  
				 		      var htmldata = $(HTML);
							    //$(htmldata).find('[name=RXLD_AGREEACTION'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

							//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
							//alert(htmldata[0].outerHTML);
							
				              return htmldata[0].outerHTML; 
                            }  	
					}							
				         } 
						 }
					 ],

         "fnDrawCallback": function (oSettings) {

        }
        });
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

function  ExperYrsCompareAge(XID,YID)
{
	  var Age=$("#"+XID).val()
		 var ExpYears=$("#"+YID).val()
	if(Age!='')
	{
	if(ExpYears!='')	
	{
		if(parseInt(ExpYears)>parseInt(Age))
		 {
		 alert ('Total Experience should not be greater than  Applicant age')
		 $("#"+YID).val('');
		 $("#"+YID).next().removeClass('active');
	     }
	}
	}

}

function CheckPan()
{
	var PANVerify=$("#CBSI_PANVERIFY").val();
	if($("#KARZASTATUS").val()=='Active')
	{
	if(PANVerify=="Verified")
		{
		  if($("#CBSI_CUSFISNAM").val()!="")
		  {
			//  $("#CBSI_CUSFISNAM").attr('disabled',true)
		  }
		  if($("#CBSI_CUSLSTNAM").val()!="")
		  {
			 // $("#CBSI_CUSLSTNAM").attr('disabled',true)
		  }
		//  $("#CEMI_INCCONSID1").val('Yes')
		 // $("#CEMI_INCCONSID1").prop("checked", true);
		//  $("#CEMI_INCCONSID1").attr('disabled',false);
		  //$("#CEMI_INCCONSID1").addClass("CEMIMndtry");
		}
	else
		{
		 // $("#CEMI_INCCONSID1").val('No')
		 // $("#CEMI_INCCONSID1"). prop("checked", false);
		 // $("#CEMI_INCCONSID1").attr('disabled',true);
		//  $("#CEMI_INCCONSID1").removeClass("CEMIMndtry");
		}
	}
		else
	{
	/*	if($("#CBSI_PAN").val()=="")
		{
		$("#CEMI_INCCONSID1").attr('disabled',true);
		$("#CEMI_INCCONSID1").removeClass("CEMIMndtry");
		}
		else
		{
		  $("#CEMI_INCCONSID1").attr('disabled',false);
		  $("#CEMI_INCCONSID1").addClass("CEMIMndtry");
		}*/
	}
}

function InactivePanCheck()
{
	if($("#KARZASTATUS").val()=='Inactive')
	{
		if($("#CBSI_PAN").val()=="")
		{
		 $("#CDOG_INCCONSID").attr('disabled',true);
		 $("#CDOG_INCCONSID").removeClass("CDOGMndtry");
		 //$("#CEMI_INCCONSID1").attr('disabled',true);
		// $("#CEMI_INCCONSID1").removeClass("CEMIMndtry");
		}
		else
		{
		 $("#CDOG_INCCONSID").attr('disabled',false);
		 $("#CDOG_INCCONSID").addClass("CDOGMndtry");
		 //$("#CEMI_INCCONSID1").attr('disabled',false);
		 //$("#CEMI_INCCONSID1").addClass("CEMIMndtry");
		}
	}
}
function NotIndiPan()
{
	var PANVerify=$("#CBSI_PANVERIFY").val();
	if($("#KARZASTATUS").val()=='Active')
	{
	if(PANVerify=="Verified")
	{
		$("#CDOG_INCCONSID").val('Yes');
		$("#CDOG_INCCONSID").prop("checked", true);
		$("#CDOG_INCCONSID").attr('disabled',false);
		$("#CDOG_INCCONSID").addClass("CDOGMndtry");
		$("#CBSI_PANATTACHMENT").addClass('DOCMndtry');
	}
	else
	{
		$("#CDOG_INCCONSID").val('No');
		$("#CDOG_INCCONSID").prop("checked", false);
		$("#CDOG_INCCONSID").attr('disabled',true);
		$("#CDOG_INCCONSID").removeClass("CDOGMndtry");
		$("#CBSI_PANATTACHMENT").removeClass('DOCMndtry');
	 }
	 }
	else
	{
		if($("#CBSI_PAN").val()=="")
		{
		 $("#CDOG_INCCONSID").attr('disabled',true);
		 $("#CDOG_INCCONSID").removeClass("CDOGMndtry");
		}
		else
		{
		 $("#CDOG_INCCONSID").attr('disabled',false);
		 $("#CDOG_INCCONSID").addClass("CDOGMndtry");
		}
	}
}


function CheckUploadMndtry()
{
	if($("#CBSI_VOTERIDVEIRFY").val() == "Verified")
		{
		 $("#CBSI_VOTERATTACHMENT").addClass('DOCMndtry');
		}
	else 
		{
		 $("#CBSI_VOTERATTACHMENT").removeClass('DOCMndtry');
		}
	if($("#CBSI_DRIVLICNSVERIFY").val() == "Verified")
	{
	 $("#CBSI_DRIVINGLICATTACHMENT").addClass('DOCMndtry');
	}
else 
	{
	 $("#CBSI_DRIVINGLICATTACHMENT").removeClass('DOCMndtry');
	}
	if($("#CBSI_PASSPORTVERIFY").val() == "Verified")
	{
	 $("#CBSI_PASSPORTATTACHMENT").addClass('DOCMndtry');
	}
 else 
	{
	 $("#CBSI_PASSPORTATTACHMENT").removeClass('DOCMndtry');
	}
}



function AddZoom()
{
if($("#CBSI_CUSPHOTO").val()!="")
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
	var PANVerify=$("#CBSI_PANVERIFY").val();
	var GST=$("#CBSI_GSTNUM").val();
	if($("#CBSI_CUSTYPE").val() == "Individual")
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




function ChkDOBTOJOINDATE()
{
if($("#CBSI_DOB").val()!="")
	{
    var DOB=$("#CBSI_DOB").val();
    
    var DOB1 = DOB.split("/");
    var dd1 = DOB1[0];
    var mm1 = DOB1[1];
    var yy1 = DOB1[2];

    var DOOFBIRTH=yy1+mm1+dd1



    var html=$('.BankDetail1').find(".DYNROW")
    var row = $('.BankDetail1').find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
    var JoinVal=$($(html).find("[name=CEMI_DATOFESTABLIS]")[i]).val()
    var JOINVAL1 = JoinVal.split("/");
    var dd2 = JOINVAL1[0];
    var mm2 = JOINVAL1[1];
    var yy2 = JOINVAL1[2];
    var JOINDATE=yy2+mm2+dd2

		    if(parseInt(JOINDATE) < parseInt(DOOFBIRTH))
		    	{
		    	var Alert1=$($(html).find("[name=CEMI_DATOFESTABLIS]")[0]).next().text()
		    	Alert1=Alert1.replace('*',' ')
		    	alert(Alert1+' should not greater than Date of Birth');
		    	$("#CBSI_DOB").val('');
		    	$("#CBSI_DOB").next().removeClass('active')
		    	return 
                }
}
}
}

function CheckChangeProfile()
{
	 var html=$('.BankDetail1').find(".DYNROW")
	 var row = $('.BankDetail1').find(".DYNROW").length;
	 
	 for (i=0;i<row;i++)
	 {
		    var Profile=$("#CBSI_PROFILE").val();
			var ApplCusType=$("#CBSI_CUSTYPE").val()
			
			if(ApplCusType=="Individual")
				{
			     if(Profile=="Salaried")
				   {
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_DATOFESTABLIS]").val('');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_NOOFYERBUSINESS]").val('');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_DATOFESTABLIS]").next().removeClass('active');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_NOOFYERBUSINESS]").next().removeClass('active');
					   $($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_ORGANIADDR]')[0].checked = false;
	    	$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_ORGANIADDR]')[1].checked = false;
	    	$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_ORGANIADDR]')[2].checked = false;

			$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_PREFCOMMUADDR]')[0].checked = false;
	    	$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_PREFCOMMUADDR]')[1].checked = false;
	    	$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_PREFCOMMUADDR]')[2].checked = false;
		  	         $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_DATOFESTABLIS]").next().text('Joining date in present organisation *'); 
		  	         $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_NOOFYERBUSINESS]").next().text('No of years in present organisation');
				   }
			     else if(Profile=="SEP" || Profile=="SENP")
					{
						$($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_DATOFESTABLIS]").val('');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_NOOFYERBUSINESS]").val('');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_DATOFESTABLIS]").next().removeClass('active');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_NOOFYERBUSINESS]").next().removeClass('active');
					   $($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_ORGANIADDR]')[0].checked = false;
	    	$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_ORGANIADDR]')[1].checked = false;
	    	$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_ORGANIADDR]')[2].checked = false;
			$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_PREFCOMMUADDR]')[0].checked = false;
	    	$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_PREFCOMMUADDR]')[1].checked = false;
	    	$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_PREFCOMMUADDR]')[2].checked = false;
			    	 $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_DATOFESTABLIS]").next().text('Date of Establishment *'); 
		  	         $($('.BankDetail1').find(".DYNROW")[i]).find("[name=CEMI_NOOFYERBUSINESS]").next().text('No. of Years in Business');
					}
				}
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
				//var PageData="CusData";
       		if (data != "")
{	
       		HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this);disbRmk();" class="" width="35" height="25">';
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
       			//var PageData="CusData";
       			
       		var	HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this);disbRmk()" class="" width="35" height="25">';
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

function showRejRmk()
{
	if($("#DMY5").val().split("|")[2]=="Cancelled" || $("#DMY5").val().split("|")[2]=="Rejected")
		{
		 $(".RejRmk").show()
		 var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETRELRMK")
		 $("#REJRMK").val($(xml).find('REMARK').text())
		}
	else
		{
		 $(".RejRmk").hide()
		}
}

function disbRmk()
{
	$("#POPUPRemarks").attr('disabled',true);
	$("#RemarksCONFIRM").hide();
}

 function Checkborrower()
 {
	
	 var borrower=$("#CBSI_BORROWER").val()
	 var ApplCusType=$("#CBSI_CUSTYPE").val()
	//if(ApplCusType=="Non-Individual")
	//{
		if(borrower=="Yes")
		{
			$(".APPSHOW").show();
			$("#CBSI_ECUAMNO").addClass('CBSIMndtry');
		} 
		else 
		{
			$("#CBSI_ECUAMNO").val('');
			$("#CBSI_ECUAMNO").removeClass('CBSIMndtry');
			$(".APPSHOW").hide();
		}
		 // }
	  /* else
	  {
		if(borrower=="Yes")
		{
			$(".APPEMP").show();
			$(".URNFld").addClass("CEMIMndtry");
		}
			 else
		 {
			$(".URNFld").val('');
			$(".URNFld").removeClass("CEMIMndtry");
			$(".APPEMP").hide();
		 }
	  } */
 }
 
  function Cochk(){
	//var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	//var row = $('.BankDetail1').find(".DYNROW").length;
//var Resi=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='CEMI_ECUAMNO']:checked").val();
	var borrower=$("#CBSI_BORROWER").val()
    if(borrower=="Yes")
	{
	if($("#CEMI_ECUAMNO").prop('checked') == true){
	//	if($($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='CEMI_ECUAMNO']:checked") == true){
		$("#CEMI_EUAMNO").val('');
		$("#CEMI_EUAMNO").removeClass("CEMIMndtry");
		$("#CEMI_EUAMNO").next().find(".MndtryAstr").html("");
		$("#CEMI_EUAMNO").attr("disabled",true);
		//$("#CEMI_UDYAMVERI"+row).hide();
		//$("input[name=CEMI_UDYAMVERI]"+row).hide();
		$(".veri").hide();		
	}
	else {

		$("#CEMI_EUAMNO").addClass("CEMIMndtry");
		$("#CEMI_EUAMNO").next().find(".MndtryAstr").html("*");
		$("#CEMI_EUAMNO").attr("disabled",false);
		//$("#CEMI_UDYAMVERI"+row).show();
		//$("input[name=CEMI_UDYAMVERI]"+row).show();
		$(".veri").show();
	}
	}
	else
	{
		$("#CEMI_EUAMNO").val('');
		$("#CEMI_EUAMNO").removeClass("CEMIMndtry");
		$("#CEMI_EUAMNO").next().find(".MndtryAstr").html("");
		$("#CEMI_EUAMNO").attr("disabled",true);
		$(".veri").hide();	
	}
	if ($("#CEMI_UDYAMVERI").val()=='Verified')
	{
	$("#CEMI_ECUAMNO").attr("disabled",true)
	}
	else
	{
	$("#CEMI_ECUAMNO").attr("disabled",false)
	}
	
	
	
}
function ChkLoad(html)
{
	var borrower=$("#CBSI_BORROWER").val()
if(borrower=="Yes")
		{
	if($(html).find("input[name=CEMI_ECUAMNO]").prop('checked') == true)
	{	
		$(html).find("input[name=CEMI_EUAMNO]").val('');
		$(html).find("input[name=CEMI_EUAMNO]").removeClass("CEMIMndtry");	
		$(html).find("input[name=CEMI_EUAMNO]").next().find(".MndtryAstr").html("");
	}
	else
	{
		$(html).find("input[name=CEMI_EUAMNO]").addClass("CEMIMndtry");	
		$(html).find("input[name=CEMI_EUAMNO]").next().find(".MndtryAstr").html("*");
	}
		}
		else
		{
			$(html).find("input[name=CEMI_EUAMNO]").val('');
			$(html).find("input[name=CEMI_EUAMNO]").removeClass("CEMIMndtry");	
			$(html).find("input[name=CEMI_EUAMNO]").next().find(".MndtryAstr").html("*");
		}
}
 /* function Checkborrower()
 {
	
	 var borrower=$("#CBSI_BORROWER").val()
      if(borrower=="Yes")
	  {
		 //$(".NINDU").show();
		 $(".EUDHA").addClass('CEMIMndtry');
         //$("#CEMI_EUAMNO").addClass('CEMIMndtry');
         $(".EUDHA").next().find(".MndtryAstr").html("*");
		
		 $(".CUDHA").removeClass('CEMIMndtry');
		 $(".CUDHA").next().find(".MndtryAstr").html("");
		 
		 
		 $(".UDHA").addClass('CDOGMndtry');
        // $("#CDOG_UAMNO").addClass('CDOGMndtry');
         $(".UDHA").next().find(".MndtryAstr").html("*");
		 
		 
		 $(".CDHA").removeClass('CDOGMndtry');
		 $(".CDHA").next().find(".MndtryAstr").html("");
	  }
	  else
	  {
		 //$(".NINDU").hide();
		 $(".EUDHA").removeClass('CEMIMndtry');
       //  $("#CEMI_EUAMNO").removeClass('CEMIMndtry');
         $(".EUDHA").next().find(".MndtryAstr").html("");
		 
		// $(".CUDHA").addClass('CEMIMndtry');
		 $(".CUDHA").next().find(".MndtryAstr").html("*");
		 
		 $(".UDHA").removeClass('CDOGMndtry');
        // $("#CDOG_UAMNO").removeClass('CDOGMndtry');
         $(".UDHA").next().find(".MndtryAstr").html("");
		 
		 //$(".CDHA").addClass('CDOGMndtry');
		 $(".CDHA").next().find(".MndtryAstr").html(""); 
		 
		 //$("#CDOG_CUAMNO").addClass('CDOGMndtry');
		 //$("#CDOG_CUAMNO").next().find(".MndtryAstr").html("*");
		 
	  }
	  //Chkbox();
		  
 } */
 function CheckGstNumber()
 {
	$("#CBSI_GSTNUM").attr('disabled',false);
	var GST=$("input[name='CBSI_GST']:checked"). val();
if(($("#DMY5").val().split("|")[2])=="Send to Credit")
{
if(GST=="Yes") 
{
$(".GYES").attr('disabled',false);
$(".GNO").attr('disabled',true);
}
else
{
if(GST=="Yes") 
{
$(".GYES").attr('disabled',true);
$(".GNO").attr('disabled',false);
}	
}	
}
	if(GST=="Yes")
	{
	  $("#CBSI_GSTAPPLILE").addClass('CBSIMndtry');
	  $("#CBSI_GSTAPPLILE").parent().next().find(".MndtryAstr").html("*");
	  $(".GSTAPP").show(); 
	  
  /*     $("#CBSI_EXEMPTED").addClass('CBSIMndtry');
	  $("#CBSI_GSTNUM").addClass('CBSIMndtry');
      $("#CBSI_EXEMPTED").parent().next().find(".MndtryAstr").html("*");
	  $("#CBSI_GSTNUM").next().find(".MndtryAstr").html("*");
	  $(".EXEM").show();
	  $(".GSTF").show();  */
	}
	else
	{
   /*    $("#CBSI_EXEMPTED").val('');
      $("#CBSI_EXEMPTED").removeClass('CBSIMndtry');
	  $("#CBSI_GSTNUM").val('');
	  $("#CBSI_GSTNUM").removeClass('CBSIMndtry');
      $("#CBSI_EXEMPTED").parent().next().find(".MndtryAstr").html("");
	  $("#CBSI_GSTNUM").next().find(".MndtryAstr").html("");
      $(".EXEM").hide();
	  $(".GSTF").hide(); */
	  $("#CBSI_GSTAPPLILE").val('');
	  $("#CBSI_GSTAPPLILE").removeClass('CBSIMndtry');
	  $("#CBSI_GSTAPPLILE").parent().next().find(".MndtryAstr").html("");
	  $('#CBSI_GSTAPPLILE').material_select("destroy");	
	  $("#CBSI_GSTAPPLILE").material_select();
	  $(".GSTAPP").hide();
	  $(".BankDetail2").html('');
	  
	  	$("#CBSI_EXEMPTED").val('');
		$("#CBSI_EXEMPTED").removeClass('CBSIMndtry');
		$("#CBSI_GSTNUM").val('');
		$("#CBSI_GSTNUM").removeClass('CBSIMndtry');
		$("#CBSI_EXEMPTED").parent().next().find(".MndtryAstr").html("");
		$('#CBSI_EXEMPTED').material_select("destroy");	
		$("#CBSI_EXEMPTED").material_select();
		$("#CBSI_GSTNUM").next().find(".MndtryAstr").html("");
		$(".EXEM").hide();
		$(".GSTF").hide();
		$(".CHKBOX").hide();
	  
	}

	Checkgstapp();
 }
 function Checkgstapp()
 {
	 var Gstapp=$("#CBSI_GSTAPPLILE").val()
	 var GST=$("input[name='CBSI_GST']:checked"). val();
	 if(Gstapp=="Single" && GST=="Yes")
	 {
		$("#CBSI_EXEMPTED").addClass('CBSIMndtry');
		$("#CBSI_GSTNUM").addClass('CBSIMndtry');
		$("#CBSI_EXEMPTED").parent().next().find(".MndtryAstr").html("*");
		$("#CBSI_GSTNUM").next().find(".MndtryAstr").html("*");
		$(".GSTCLER").val('')
		$(".CHKCLER").prop("checked", false);
		$(".EXEM").show();
		$(".GSTF").show(); 
		$(".CHKBOX").hide();
		$(".BankDetail2").html('');	 
	 }
	 else if(Gstapp=="Multiple" && GST=="Yes")
	 {
		 $("#CBSI_EXEMPTED").addClass('CBSIMndtry');
		 $("#CBSI_EXEMPTED").parent().next().find(".MndtryAstr").html("*");
		 $(".EXEM").show();
		 $(".CHKBOX").show();			 
		 $("#CBSI_GSTNUM").val('');
		 $("#CBSI_GSTNUM").removeClass('CBSIMndtry');
		 $("#CBSI_GSTNUM").next().find(".MndtryAstr").html("");
		 $(".GSTF").hide();
	 }
/* 	 else
	 {
		$("#CBSI_EXEMPTED").val('');
		$("#CBSI_EXEMPTED").removeClass('CBSIMndtry');
		$("#CBSI_GSTNUM").val('');
		$("#CBSI_GSTNUM").removeClass('CBSIMndtry');
		$("#CBSI_EXEMPTED").parent().next().find(".MndtryAstr").html("");
		$("#CBSI_GSTNUM").next().find(".MndtryAstr").html("");
		$(".EXEM").hide();
		$(".GSTF").hide();
		$(".CHKBOX").hide();
	 } */
	 
 }
 
 
 function GetSector()
 {
   
	var xml=UI_getdata("TypeSec","","","","","LSW_SGETFINANCIALVAL");
	
    $("#CDOG_SECTOR").html("");
	$("#CDOG_SECTOR").append($(xml).find("RESULT").html());
	$("#CDOG_SECTOR").material_select(); 
}


function Chkqualify(Input1,Input2,Type,Event)
{
	if(Event=="Load")
	{
		if($("#CBSI_QUALIFICATION").val()=="Others")
		{
		  $(".OTHER").show();
		  $("#CBSI_OTHERS").addClass("CBSIMndtry");	
		  $("#CBSI_OTHERS").next().find(".MndtryAstr").html("*");
		}
		else
		{
		  $(".OTHER").hide();
		  $("#CBSI_OTHERS").removeClass("CBSIMndtry");
		  $("#CBSI_OTHERS").next().find(".MndtryAstr").html("");
		}
		
	}
	else
	{
	if(Type=="Category")
	{
		if($("#"+Input1).val()=="Others")
		{
		  $(".OTHER").show();
		  $("#"+Input2).addClass("CBSIMndtry");	
		  $("#"+Input2).next().find(".MndtryAstr").html("*");
		}
		else
		{
		  $(".OTHER").hide();
		  $("#"+Input2).val('');
		  $("#"+Input2).next().removeClass('active');
		  $("#"+Input2).removeClass("CBSIMndtry");
          $("#"+Input2).next().find(".MndtryAstr").html("");		  
		}
	}
}
}

function Chkbox(){
	var borrower=$("#CBSI_BORROWER").val()
    if(borrower=="Yes")
	{
	if($("#CDOG_CUAMNO").prop('checked') == true){
		
		$("#CDOG_UAMNO").removeClass("CDOGMndtry");
		$("#CDOG_UAMNO").next().find(".MndtryAstr").html("");
	}
	else {

		$("#CDOG_UAMNO").addClass("CDOGMndtry");
		$("#CDOG_UAMNO").next().find(".MndtryAstr").html("*");
	}
	}
	else
	{
		$("#CDOG_UAMNO").removeClass("CDOGMndtry");
		$("#CDOG_UAMNO").next().find(".MndtryAstr").html("");
	}
	
	
}
function Chkresi()
{
	var resi=$("#CADI_YEAROFRESID").val()
	var month=$("#CADI_MONTHS").val()
		
	var perresi=$("#CADI_PERMYEAROFRESID").val()
	var permonth=$("#CADI_PERMMONTHS").val()
	
	var orgresi=$("#CADI_ORGYEAROFRESID").val()
	var orgmonth=$("#CADI_ORGMONTHS").val()
	
	if(resi=="0" && month=="0")
	{
		alert("In year of residence is 0 then at least enter month should be greater than 0 ");
		
		$("#CADI_MONTHS").val(''); 
		$("#CADI_MONTHS").material_select(); 
	}
	if(perresi=="0" && permonth=="0")
	{
		alert("In year of residence is 0 then at least enter month should be greater than 0 ");
		$("#CADI_PERMMONTHS").val(''); 
		$("#CADI_PERMMONTHS").material_select(); 
	}
	if(orgresi=="0" && orgmonth=="0")
	{
		alert("In year of residence is 0 then at least enter month should be greater than 0 ");
		$("#CADI_ORGMONTHS").val(''); 
		$("#CADI_ORGMONTHS").material_select(); 
	}
}
function Chkdirect()
{
	var dir=$("input[name='CBSI_PANTYPE']:checked"). val();
	
	if($("#CBSI_PANVERIFY").val()=="")
	{
	if(dir=="Direct")
	{
		$("#CBSI_PAN").addClass("CBSIMndtry");	
		$("#CBSI_PAN").next().find(".MndtryAstr").html("*");
		$(".TYP").show();
		$(".UPLD").hide();
		$(".KYCPROOF").show();
	}
	else if(dir=="OCR")
	{
		$("#CBSI_PAN").removeClass("CBSIMndtry");	
		$("#CBSI_PAN").next().find(".MndtryAstr").html("");
		$(".TYP").hide();
		//$("#CBSI_PAN").val("");
		$("#CBSI_PAN").removeClass('active');
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
	/* var KYCDOCPROOF = UI_getdata("PAN","","","","","LSW_SKYCPROOFTYPELIST");
	$("#CBSI_KYCPROOFTYP").html("")
	$("#CBSI_KYCPROOFTYP").append($(KYCDOCPROOF).find("RESULT").html());
	$("#CBSI_KYCPROOFTYP").material_select(); */
	if((($("#CBSI_VOTERIDPROOF").val()).includes ("ID PROOF"))||(($("#CBSI_AADHARPROOF").val()).includes ("ID PROOF"))||(($("#CBSI_DLPROOF").val()).includes ("ID PROOF"))||(($("#CBSI_PASSPORTPROOF").val()).includes ("ID PROOF"))||(($("#CBSI_UTILITYPROOF").val()).includes ("ID PROOF")))
	{
	   $("#CBSI_KYCPROOFTYP option[value='ID PROOF']").attr('disabled',true);
	   $("#CBSI_KYCPROOFTYP").material_select();
	}
	 if((($("#CBSI_VOTERIDPROOF").val()).includes ("DOB PROOF"))||(($("#CBSI_AADHARPROOF").val()).includes ("DOB PROOF"))||(($("#CBSI_DLPROOF").val()).includes ("DOB PROOF"))||(($("#CBSI_PASSPORTPROOF").val()).includes ("DOB PROOF"))||(($("#CBSI_UTILITYPROOF").val()).includes ("DOB PROOF")))
	{
	   $("#CBSI_KYCPROOFTYP option[value='DOB PROOF']").attr('disabled',true);
	   $("#CBSI_KYCPROOFTYP").material_select();
	}
	if((($("#CBSI_VOTERIDPROOF").val()).includes ("ADDRESS PROOF 2"))||(($("#CBSI_AADHARPROOF").val()).includes ("ADDRESS PROOF 2"))||(($("#CBSI_DLPROOF").val()).includes ("ADDRESS PROOF 2"))||(($("#CBSI_PASSPORTPROOF").val()).includes ("ADDRESS PROOF 2"))||(($("#CBSI_UTILITYPROOF").val()).includes ("ADDRESS PROOF 2")))
	{
	   $("#CBSI_KYCPROOFTYP option[value='ADDRESS PROOF 2']").attr('disabled',true);
	   $("#CBSI_KYCPROOFTYP").material_select();
	}
	if((($("#CBSI_VOTERIDPROOF").val()).includes ("ADDRESS PROOF 1"))||(($("#CBSI_AADHARPROOF").val()).includes ("ADDRESS PROOF 1"))||(($("#CBSI_DLPROOF").val()).includes ("ADDRESS PROOF 1"))||(($("#CBSI_PASSPORTPROOF").val()).includes ("ADDRESS PROOF 1"))||(($("#CBSI_UTILITYPROOF").val()).includes ("ADDRESS PROOF 1")))
	{
	   $("#CBSI_KYCPROOFTYP option[value='ADDRESS PROOF 1']").attr('disabled',true);
	   $("#CBSI_KYCPROOFTYP").material_select();
	}
	if((($("#CBSI_VOTERIDPROOF").val()).includes ("SIGN PROOF"))||(($("#CBSI_AADHARPROOF").val()).includes ("SIGN PROOF"))||(($("#CBSI_DLPROOF").val()).includes ("SIGN PROOF"))||(($("#CBSI_PASSPORTPROOF").val()).includes ("SIGN PROOF"))||(($("#CBSI_UTILITYPROOF").val()).includes ("SIGN PROOF")))
	{
	   $("#CBSI_KYCPROOFTYP option[value='SIGN PROOF']").attr('disabled',true);
	   $("#CBSI_KYCPROOFTYP").material_select();
	}
}
function ChkApProf()
{
	var Mar=$("#CBSI_MARITSTUS").val();
	
	var Gen=$("input[name='CBSI_GENTER']:checked"). val();
	if((Mar=='Single') || Gen=='Male' )
	{
		
		 $(".PROFILEVAL").find('.HSWF').attr('disabled',true)
	     $("span:contains('Housewife')").parent().addClass('HSWF');
		 $(".HSWF").addClass('disabled');
		 $("#CBSI_NPROFILE").val('')		 
		 $("#CBSI_NPROFILE").material_select();
	
	}
	else{
		
		 $(".PROFILEVAL").find('.HSWF').attr('disabled',false)
	     $("span:contains('Housewife')").parent().addClass('HSWF');
		 $(".HSWF").removeClass('disabled');
		 $("#CBSI_NPROFILE").val('')		 
		 $("#CBSI_NPROFILE").material_select();
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
	if(KYCName == "PAN"|| "Aadhar")
	{
		if($("#CBSI_CUSTYPE").val()=='Individual')
		   {
			  var ADDRTYPE1 = "ADDRESSPROOF"
		   }
		   else
		   {
			var ADDRTYPE1 = "Others"   
		   }
		   
		   var xmlDocSize=UI_getdata($("#CBSI_CUSTYPE").val(),ADDRTYPE1,"","","","LSW_SGETDOCSIZELST")
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

function DELEMPDETAILS()
{
	
	if($("#CBSI_PROFILE").val() != "Salaried" && $("#CBSI_PROFILE").val()!="SEP" && $("#CBSI_PROFILE").val()!= "SENP")
	{
       var EMPDETAILS=UI_getdata($("#PrcsID").val(),$("#CBSI_CUSID").val(),"","","","LSW_SCLEAREMPDETAILS")	
   	   
   	 $('.PROCHGS').val('')
   	 $('.PROCHGAC').removeClass('active')
   	 
   	   
	   
   	
  	$('input:radio[name=CEMI_PREFCOMMUADDR]')[0].checked = false;
	$('input:radio[name=CEMI_PREFCOMMUADDR]')[1].checked = false;
	$('input:radio[name=CEMI_PREFCOMMUADDR]')[2].checked = false;
   	
   	$('input:radio[name=CEMI_ORGANIADDR]')[0].checked = false;
	$('input:radio[name=CEMI_ORGANIADDR]')[1].checked = false;
	$('input:radio[name=CEMI_ORGANIADDR]')[2].checked = false;
   	
   	
    }
}

function Udyamcheckorg()
{
		if ($("#CBSI_UDYAMVERI").val()=='Verified')
		{
		$("#CBSI_ECUAMNO").attr("disabled",true)
		$("#CBSI_ECUAMNO").removeClass("CBSIMndtry");
		$(".VerifyUdyam").show();
		}
		else
		{
		$("#CBSI_ECUAMNO").attr("disabled",false)
		$("#CBSI_ECUAMNO").addClass("CBSIMndtry");
		$(".VerifyUdyam").hide();
		}



		if($("#CBSI_ECUAMNO").prop('checked') == true)
		{
		$("#CBSI_EUAMNO").val('');
		$("#CBSI_EUAMNO").removeClass("CEMIMndtry");
		$("#CBSI_EUAMNO").next().find(".MndtryAstr").html("*");
		$("#CBSI_EUAMNO").attr("disabled",true);
		$(".veri").hide();
		}
		else
		{
		$("#CBSI_EUAMNO").addClass("CEMIMndtry");
		$("#CBSI_EUAMNO").next().find(".MndtryAstr").html("*");
		$("#CBSI_EUAMNO").attr("disabled",false);
		$(".veri").show();
		}
}

function Checkgst(id)
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
	
}
else
{
	$("input[name='CGST_GSTCHK']").prop('checked',false)	
	$("#"+PGst).prop('checked', true);
}
	
}

function OtherKYC() 
{
if(($("#CBSI_VOTERIDTYPE").val()!="") && ($("#CBSI_VOTERIDTYPE").val()!=undefined))
{
	$(".voter").show();
	if($("#CBSI_VOTERIDTYPE").val()=="Direct")
	{
		if($("#CBSI_VOTERIDVEIRFY").val()=="Verified")
		{
		$(".voterupload").show();
		}
		else
		{
		$(".voterupload").hide();
		}
	}
	if($("#CBSI_VOTERIDTYPE").val()=="OCR")
	{
		if($("#CBSI_VOTERUPLOADVERIFY").val()=="Upload Verified")
		{
		$(".VoterFld").show();
		}
		else
		{
		$(".VoterFld").hide();
		}
	}
}

if(($("#CBSI_AADHARTYPE").val()!="") && ($("#CBSI_AADHARTYPE").val()!=undefined))
{
	$(".AADHAR").show();
	if($("#CBSI_AADHARTYPE").val()=="OCR")
	{
		if($("#CBSI_AADHARUPLOADVERIFY").val()=="Upload Verified")
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
	if($("#CBSI_AADHARTYPE").val()=="XML Verification")
	{
		if($("#CBSI_AADHARUPLOADVERIFY").val()=="Upload Verified")
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
	if($("#CBSI_AADHARTYPE").val()=="ZIP File Verification")
	{
		if($("#CBSI_AADHARUPLOADVERIFY").val()=="Upload Verified")
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

if(($("#CBSI_DRIVNGTYPE").val()!="") && ($("#CBSI_DRIVNGTYPE").val()!=undefined))
{
	$(".dl").show();
	if($("#CBSI_DRIVNGTYPE").val()=="Direct")
	{
		if($("#CBSI_DRIVLICNSVERIFY").val()=="Verified")
		{
		$(".DUPLD").show();
		}
		else
		{
		$(".DUPLD").hide();
		}
	}
	if($("#CBSI_DRIVNGTYPE").val()=="OCR")
	{
		if($("#CBSI_DLUPLOADVERIFY").val()=="Upload Verified")
		{
		$(".DVER").show();
		}
		else
		{
		$(".DVER").hide();
		}
	}
}

if(($("#CBSI_PASPRTTYPE").val()!="") && ($("#CBSI_PASPRTTYPE").val()!=undefined))
{
	$(".passport").show();
	if($("#CBSI_PASPRTTYPE").val()=="Direct")
	{
		if($("#CBSI_PASSPORTVERIFY").val()=="Verified")
		{
		$(".passportupload").show();
		}
		else
		{
		$(".passportupload").hide();
		}
	}
	if($("#CBSI_PASPRTTYPE").val()=="OCR")
	{
		if(($("#CBSI_PASSUPLOADVERIFY").val()=="Upload Verified")&&($("#CBSI_PASSUPLOADIIVERIFY").val()=="Upload Verified"))
		{
		$(".PVER").show();
		}
		else
		{
		$(".PVER").hide();
		}
	}
}

if(($("#CBSI_UBVERIFYTYPE").val()!="") && ($("#CBSI_UBVERIFYTYPE").val()!=undefined))
{
$(".Utility").show();
}
}


function GETPROOFTYP()
{

var k=	$("#CBSI_KYCPROOFTYP").val().length	
var PROOFTYPE=""
 for(i=0;i<k;i++)
	 {
	 var PROOFTYPE1=$("#CBSI_KYCPROOFTYP").val()[i]
		
	 if(PROOFTYPE1!=undefined)
		 {
	      var PROOFTYPE= PROOFTYPE+','+PROOFTYPE1
		}
	 }
       var PROOFTYPE =PROOFTYPE.replace(',','')
       $("#CBSI_HIDPROFTYP").val(PROOFTYPE)	
}