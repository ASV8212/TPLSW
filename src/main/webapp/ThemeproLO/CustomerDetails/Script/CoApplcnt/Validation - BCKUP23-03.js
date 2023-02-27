function residentaddr()
{
   var PrcsId=$("#COBI_PRCSID").val();
   var xml=UI_getdata(PrcsId,"","","","","LSW_SGETAPPLADDRDETLS");
	
 if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Applicant Permanent Address")
  {
	    var AddrI=$(xml).find('COAI_PREMADDRLINI').text();
		var PIN=$(xml).find('COAI_PERMPINCODE').text();
		var LndMrk=$(xml).find('COAI_PERMLNDMARK').text();
		var ResType=$(xml).find('COAI_PERMRESIDTYPE').text();
	  
	if(AddrI =="" || PIN == "" || LndMrk == "" || ResType == "")
		{
		 alert('Fill the mandatory fields  in Applicant Permanent Address');
		 //$("#COAI_SAMRESIDADDR"). prop("checked", false);
		 $('input[name="COAI_SAMRESIDADDR"]').prop('checked', false);
		 return false;
		}
	else
		{
		 //$('#COAI_SAMRESIDADDR').val('Yes');
		  document.getElementById('COAI_PREMADDRLINI').value=$(xml).find('COAI_PREMADDRLINI').text();
		  document.getElementById('COAI_PERMADDRLINII').value=$(xml).find('COAI_PERMADDRLINII').text();
		  document.getElementById('COAI_PERMPINCODE').value=$(xml).find('COAI_PERMPINCODE').text();
		  document.getElementById('COAI_PERMCITY').value=$(xml).find('COAI_PERMCITY').text();
		  document.getElementById('COAI_PERMSTATE').value=$(xml).find('COAI_PERMSTATE').text();
		  document.getElementById('COAI_PERMLNDMARK').value=$(xml).find('COAI_PERMLNDMARK').text();
		  document.getElementById('COAI_PERMLNDLINENO').value = $(xml).find('COAI_PERMLNDLINENO').text();
		  document.getElementById('COAI_PERMYEAROFRESID').value =$(xml).find('COAI_PERMYEAROFRESID').text();
		  document.getElementById('COAI_PSTDC').value =$(xml).find('COAI_PSTDC').text();
		    var ResType=$(xml).find('COAI_PERMRESIDTYPE').text();
		    var Month=$(xml).find('COAI_PERMMONTHS').text();

		  $("#COAI_PERMRESIDTYPE").val(ResType);
		  $("#COAI_PERMMONTHS").val(Month)
		  $('#COAI_PERMRESIDTYPE').material_select();
		  $('#COAI_PERMMONTHS').material_select();
		  $('.PRADDR').attr('disabled',true)
		  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
		  $('.ADDR').addClass('active');
		  
		    //added for radio disapled
		  if($( '#COAI_SAMAPPLADDR').is(':checked')==false)
		  {
		    $('.APADDR').attr('disabled',false)
			$('.APADDR').attr('disabled',false)
			$('.APADDR').find('.select-dropdown').attr('disabled',false)
			$('.APADDR').find('.select-dropdown').attr('disabled',false)
		  }
		}
  }
  else
  {
	//$('#CADI_SAMRESIDADDR').val('No');   
	$('.PRADDR').find('.select-dropdown').attr('disabled',false)
	$('.PRADDR').attr('disabled',false)
	 $('.ALLDIS').attr('disabled',true);
	$('.PRADDR').val('');
	$('#COAI_PERMRESIDTYPE').material_select("destroy");
	$('#COAI_PERMMONTHS').material_select("destroy");
	$('#COAI_PERMRESIDTYPE').material_select();
	$('#COAI_PERMMONTHS').material_select();
	$('.PINL').removeClass('active');
	$('.ADDR').removeClass('active');
	
		
		//added radio to disabled
    if($( '#COAI_SAMAPPLADDR').is(':checked')==false)
	  {
    $('.APADDR').attr('disabled',false)
	$('.APADDR').attr('disabled',false)
	$('.APADDR').find('.select-dropdown').attr('disabled',false)
	$('.APADDR').find('.select-dropdown').attr('disabled',false)
    
	  }
  }
  
   if( $("#COBI_RESCOMPETED").val()=="Completed")
 {
	 $('.RESSTAT').attr('disabled',true) 
 }
}


function Loadresidentaddr()
{
   var PrcsId=$("#COBI_PRCSID").val();
   var xml=UI_getdata(PrcsId,"","","","","LSW_SGETAPPLADDRDETLS");
	
 if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Applicant Permanent Address")
  {
	    var AddrI=$(xml).find('COAI_PREMADDRLINI').text();
		var PIN=$(xml).find('COAI_PERMPINCODE').text();
		var LndMrk=$(xml).find('COAI_PERMLNDMARK').text();
		var ResType=$(xml).find('COAI_PERMRESIDTYPE').text();
	  

		 //$('#COAI_SAMRESIDADDR').val('Yes');
		  document.getElementById('COAI_PREMADDRLINI').value=$(xml).find('COAI_PREMADDRLINI').text();
		  document.getElementById('COAI_PERMADDRLINII').value=$(xml).find('COAI_PERMADDRLINII').text();
		  document.getElementById('COAI_PERMPINCODE').value=$(xml).find('COAI_PERMPINCODE').text();
		  document.getElementById('COAI_PERMCITY').value=$(xml).find('COAI_PERMCITY').text();
		  document.getElementById('COAI_PERMSTATE').value=$(xml).find('COAI_PERMSTATE').text();
		  document.getElementById('COAI_PERMLNDMARK').value=$(xml).find('COAI_PERMLNDMARK').text();
		  document.getElementById('COAI_PERMLNDLINENO').value = $(xml).find('COAI_PERMLNDLINENO').text();
		  document.getElementById('COAI_PERMYEAROFRESID').value =$(xml).find('COAI_PERMYEAROFRESID').text();
		  document.getElementById('COAI_PSTDC').value =$(xml).find('COAI_PSTDC').text();
		    var ResType=$(xml).find('COAI_PERMRESIDTYPE').text();
		    var Month=$(xml).find('COAI_PERMMONTHS').text();

		  $("#COAI_PERMRESIDTYPE").val(ResType);
		  $("#COAI_PERMMONTHS").val(Month)
		  $('#COAI_PERMRESIDTYPE').material_select();
		  $('#COAI_PERMMONTHS').material_select();
		  $('.PRADDR').attr('disabled',true)
		  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
		  $('.ADDR').addClass('active');
		
  }
}

function CheckAddrMndtry()
{
	var AddrI=$("#COAI_ADDRLINI").val()
	var PIN=$("#COAI_PINCODE").val()
	var LndMrk=$("#COAI_LNDMARK").val()
	var ResType=$("#COAI_RESIDTYPE").val();
	var ResYear=$("#COAI_YEAROFRESID").val();
	
	if(AddrI =="" || PIN == "" || LndMrk == "" || ResType == "" || ResYear == "")
		{
		 alert('Fill the Mandatory Fields In Residence Address');
		 $("#COAI_SAMRESIDADDR"). prop("checked", false);
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

function CheckAppltype()
{
	var ApplCusType=$("#COBI_CUSTYPE").val()
	
	if(ApplCusType=="Non-Individual")
		{
		$("#COBI_CUSFISNAM").next().text('Organisation Name *');
		$("#COBI_CUSFISNAM").removeClass('IsAlphaFields');
		
		 $(".NINDM").addClass('COBIMndtry');
		$(".INDU").hide();
		$(".NINDU").show();
		$(".AddKYC").hide();
		$(".OKYCD").hide();
		//$(".GSTF").show();
		$(".INDU").find('.COBIDBfields').removeClass('COBIMndtry');
		$(".INDU").find('.COAIDBfields').removeClass('COAIMndtry');
		$(".INDU").find('.COEIDBfields').removeClass('COEIMndtry');
		$(".INDU").find('.COOADBfields').removeClass('COOAMndtry');
		 $("#COAI_ORGYEAROFRESID").removeClass('COAIMndtry');
		 $("#COAI_ORGRESIDTYPE").next().text('Address Type');
		 $(".DocImg").removeClass('DOCMndtry');
	//	 $("#COAI_ORGRESIDTYPE").removeClass('COAIMndtry');
		 var element = document.getElementById("RadINDU");
		  element.classList.remove("COBIMndtry");
		  
		
		var Constitution=$("#COBI_CONSTITUTION").val()
          if(Constitution=="Public Ltd"||Constitution=="Private Ltd")
			 {
             $("#COOA_CIN").addClass('COOAMndtry');
             $("#COOA_CIN").next().find(".MndtryAstr").html("*");
			 }


		 /*if(Constitution=="HUF")
			 {
			 $("#COBI_PROFILE").append('<option id="Karta">Karta</option>') 
			 $("#COBI_PROFILE").val('Karta')
			 $("#COBI_PROFILE").attr('disabled',true)
			 $("#COBI_PROFILE").addClass('COBIMndtry');
			 $("#COBI_PROFILE").parent().next().find(".MndtryAstr").html("*");
			 }
		 else if(Constitution=="Proprietorship")
			 {
			 $("#COBI_PROFILE").append('<option id="Proprietor">Proprietor</option>') 
			 $("#COBI_PROFILE").val('Proprietor')
			 $("#COBI_PROFILE").attr('disabled',true)
			 $("#COBI_PROFILE").addClass('COBIMndtry');
			 $("#COBI_PROFILE").parent().next().find(".MndtryAstr").html("*");
			 }
		 else
			 {
			 $(".PROFILE").hide();
			 $("#COBI_PROFILE").next().find(".MndtryAstr").html("");
			 $("#COBI_PROFILE").removeClass('COBIMndtry');
			 $("#COBI_PROFILE").parent().next().find(".MndtryAstr").html("");
			 }*/
		 $("#COBI_NPROFILE").empty();
		 $("#COBI_NPROFILE").append('<option value="SENP">SENP</option>') 
		 $('#COBI_NPROFILE').material_select();
		 $("#COBI_PROFILE").val('SENP');
		 
		 $("#COBI_TITLE").empty();
		  $("#COBI_TITLE").append('<option id="M/S">M/S</option>') 
		  $('#COBI_TITLE').material_select();
		  $("#COBI_TITLE").val('M/S');
		 
		 $(".PROFILE").show();
		}
	else
		{
			
		 $(".NINDM").removeClass('COBIMndtry');
		 $(".INDU").show();
		 $(".NINDU").hide();
		 $(".AddKYC").show();
		 $(".OKYCD").show();
		 //$(".GSTF").hide();
		 $(".NINDU").find('.COBIDBfields').removeClass('COBIMndtry');
		 $(".NINDU").find('.COAIDBfields').removeClass('COAIMndtry');
		 $(".NINDU").find('.COEIDBfields').removeClass('COEIMndtry');
		 $(".NINDU").find('.COOADBfields').removeClass('COOAMndtry');
		 $("#COAI_ORGRESIDTYPE").next().text('Residence Type*');
		// $(".DocImg").addClass('DOCMndtry');
		// $("#COAI_ORGRESIDTYPE").addClass('COAIMndtry');
		// $("#COAI_ORGYEAROFRESID").addClass('COAIMndtry');
		}
}


function CheckProfile(Event)
{
	var Profile=$("#COBI_PROFILE").val();
	var ApplCusType=$("#COBI_CUSTYPE").val()
	
	// Credit Change Start
	/* var Qualification=$("#COBI_QUALIFICATION").val();
	if(Profile=="SEP")
	{
	     $("#COBI_QUALIFICATION").empty();
		 $("#COBI_QUALIFICATION").
append('<option value="">--Select--</option><option value="Matriculation" disabled >Matriculation</option><option value="UG" disabled >UG</option><option value="PG" disabled >PG</option><option value="Graduate" disabled >Graduate</option><option value="MBBS">MBBS</option><option value="MD">MD</option><option value="MS">MS</option><option value="MDS">MDS</option><option value="BDS">BDS</option><option value="CA">CA</option>') 
		 $('#COBI_QUALIFICATION').material_select();
		  $('#COBI_QUALIFICATION').val(Qualification);
	
	}
	else
	{
		 $("#COBI_QUALIFICATION").empty();
		 $("#COBI_QUALIFICATION").
append('<option value="">--Select--</option><option value="Matriculation">Matriculation</option><option value="UG">UG</option><option value="PG">PG</option><option value="Graduate">Graduate</option>') 
		 $('#COBI_QUALIFICATION').material_select();
		  $('#COBI_QUALIFICATION').val(Qualification);
	} */
	// Credit Change End
	
	if(ApplCusType=="Individual")
		{
	if(Profile=="Salaried")
		{
		 $("#COEI_DATOFESTABLIS").next().text('Joining date in present organisation *');
		 $("#COEI_NOOFYERBUSINESS").next().text('No of years in present organisation');
		 $("#COEI_ORGANINAME").attr('disabled',false);
		 $("#COEI_ADDRLINEI").attr('disabled',false);
		 $("#COEI_ORGANINAME").addClass('COEIMndtry');
	     $("#COEI_ADDRLINEI").addClass('COEIMndtry');
	     $("#COEI_ORGANINAME").next().find(".MndtryAstr").html("*");
	     $("#COEI_ADDRLINEI").next().find(".MndtryAstr").html("*");
		 $(".SAL").show();
		 $(".SALM").addClass('COEIMndtry');
		 $(".SEPM").removeClass('COEIMndtry');
		 $(".SEP").hide();
		  $('input:radio[name=COEI_ORGANIADDR]')[0].checked = false;
	    	$('input:radio[name=COEI_ORGANIADDR]')[1].checked = false;
	    	$('input:radio[name=COEI_ORGANIADDR]')[2].checked = false;
		 $(".EMP").show();
		// $(".GSTF").hide();
		 $(".PRECOMM").show();
			 var element = document.getElementById("ORGSEP");
			  element.classList.add("COEIMndtry");
		}
	else if(Profile=="Retired" || Profile=="Housewife" )
		{
		  $(".EMP").hide()
		  //$("#COEI_ORGANINAME").attr('disabled',true);
		  //$("#COEI_ADDRLINEI").attr('disabled',true);
		  $("#COEI_ORGANINAME").removeClass('COEIMndtry');
		  $("#COEI_ADDRLINEI").removeClass('COEIMndtry');
		  $("#COEI_ORGANINAME").next().find(".MndtryAstr").html("");
		  $("#COEI_ADDRLINEI").next().find(".MndtryAstr").html("");
		}
	else if(Profile=="SEP" || Profile=="SENP" )
	{
	  $(".SAL").hide();
	  $(".SEP").show();
	 // $(".GSTF").show();
	  $("#COEI_DATOFESTABLIS").next().text('Date of Establishment *');
	  $("#COEI_NOOFYERBUSINESS").next().text('No. of Years in Business');
	  $(".SALM").removeClass('COEIMndtry');
	  $(".SEPM").addClass('COEIMndtry');
	  $(".EMP").show();
	  $(".ORG").hide();
	  $("#COEI_ORGANINAME").attr('disabled',false);
	  $("#COEI_ADDRLINEI").attr('disabled',false);
	  $("#COEI_ORGANINAME").addClass('COEIMndtry');
	  $("#COEI_ADDRLINEI").addClass('COEIMndtry');
	  $("#COEI_ORGANINAME").next().find(".MndtryAstr").html("*");
	  $("#COEI_ADDRLINEI").next().find(".MndtryAstr").html("*");
	 var element = document.getElementById("ORGSEP");
	  element.classList.add("COEIMndtry");
	}
	}
if(ApplCusType=="Non-Individual")
	{
	
	$(".ORG").show();
	
	}
	RmoveEmpFlds();
	
	if(Event=="Change")
	{
		CheckChangeProfile()
	}
}

function CheckMarStatus()
{
	var MaritStatus=$("#COBI_MARITSTUS").val()
	if(MaritStatus=="Married")
		{
		  $("#COBI_SPOUSNAME").addClass('COBIMndtry');
		  $("#COBI_SPOUSNAME").next().find(".MndtryAstr").html("*");
		  $("#COBI_SPOUSNAME").attr("disabled",false) 
		//$('#COBI_NPROFILE').material_select();
	
		}
	else
		{
		$("#COBI_SPOUSNAME").next().find(".MndtryAstr").html("");
		$("#COBI_SPOUSNAME").removeClass('COBIMndtry');
		$("#COBI_SPOUSNAME").attr("disabled",true)
		$("#COBI_SPOUSNAME").val('')
		//$('#COBI_NPROFILE').material_select();
		  
		}
}

function CheckGender()
{
	var Gender=$("input[name='COBI_GENTER']:checked"). val();
	
	if(Gender=="Transgender")
		{
		if (confirm("Confirm?") == true) {
			$('input[name="COBI_GENTER"]').prop('checked', true);
		} else {
			$('input[name="COBI_GENTER"]').prop('checked', false);
		}
		}
}
/*
function CheckRelation()
{
	var PrcsId=$("#COBI_PRCSID").val();
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SCHKRELATIONSHIP")
	
	if($(xml).find('RESULT').text()=="Y")
		{
		 $(".MODE").attr("disabled",true)
		 $(".MODE").addClass('disabled');
		}
	else
		{
		  $(".MODE").attr("disabled",false)
		  $(".disabled").addClass('MODE');
		  $(".disabled").removeClass('disabled');
		}
} */
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


function CheckLoanType(Prifx1,Prifx2,Prifx3,Prifx4)
{
	var PrcsId=$("#COBI_PRCSID").val();
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
  $("#BTNEXTCOAPPL").click();	
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
    var CusID=$('#COBI_CUSID').val()
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
  //   var Filename  = names.replace(',','')
          var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
       
	   if($("#COBI_CUSTYPE").val()=='Individual')
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
		var xml=UI_getdata(FileType,FileSize,Filename,ADDRTYPE,$("#COBI_CUSTYPE").val()+'|'+$("#PrcsID").val(),"LSW_SGETKYCDOCUMNTTYPE")
		var FileAccept=$(xml).find('RESULT').text()
		
	/*	
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    } */
names=names+'.'+FileType
var y=  names;
/*  var specialChars = "<>&#^|~`"
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
}
	 
	*/ 
	 

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



function getSameaApplAddr()
{	
	var PrcsId=$("#COBI_PRCSID").val();
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETAPPLADDRDETLS");
	
	if($( '#COAI_SAMAPPLADDR').is(':checked')==true)
	  {
	  
	  $('#COAI_SAMAPPLADDR').val('Yes');

	  var APPAdr1 =$(xml).find('COAI_ADDRLINI').text();
	  var APPAdr2 =$(xml).find('COAI_ADDRLINII').text();
	  var APPPincode =$(xml).find('COAI_PINCODE').text();
	  var APPCITY  =$(xml).find('COAI_CITY').text();
	  var APPSTATE =$(xml).find('COAI_STATE').text();
	  var APPLNDMARK =$(xml).find('COAI_LNDMARK').text();
	  var APPLNDLINE =$(xml).find('COAI_LNDLINENO').text();
	  var APPYRPRE =$(xml).find('COAI_YEAROFRESID').text();
	  var ResType=$(xml).find('COAI_RESIDTYPE').text();
	  var Month=$(xml).find('COAI_MONTHS').text();
	  
	  
	  if(APPAdr1 =="" || APPPincode == "" || APPCITY == "" || APPLNDMARK == ""|| ResType == "")
		{
		 $('#COAI_SAMAPPLADDR').val('No');   
		 alert('Fill the mandatory fields  in Applicant Residence Address');
		 $("#COAI_SAMAPPLADDR"). prop("checked", false);
		 return false;
		
		}
	  
	  document.getElementById('COAI_ADDRLINI').value=$(xml).find('COAI_ADDRLINI').text();
	  document.getElementById('COAI_ADDRLINII').value=$(xml).find('COAI_ADDRLINII').text();
	  document.getElementById('COAI_PINCODE').value=$(xml).find('COAI_PINCODE').text();
	  document.getElementById('COAI_CITY').value=$(xml).find('COAI_CITY').text();
	  document.getElementById('COAI_STATE').value=$(xml).find('COAI_STATE').text();
	  document.getElementById('COAI_LNDMARK').value=$(xml).find('COAI_LNDMARK').text();
	  document.getElementById('COAI_LNDLINENO').value=$(xml).find('COAI_LNDLINENO').text();
	  document.getElementById('COAI_YEAROFRESID').value=$(xml).find('COAI_YEAROFRESID').text();
	  document.getElementById('COAI_STDC').value=$(xml).find('COAI_STDC').text();
      $("#COAI_RESIDTYPE").val(ResType);
	  $("#COAI_MONTHS").val(Month)
	  $('#COAI_RESIDTYPE').material_select();
	  $('#COAI_MONTHS').material_select();
	  $('.APADDR').attr('disabled',true)
	  $('.APADDR').attr('disabled',true)
	  $('.APADDR').find('.select-dropdown').attr('disabled',true)
	  $('.APADDR').find('.select-dropdown').attr('disabled',true)
	  $('.APDR').addClass('active');
	  }
	  else
	  {
		$('#COAI_SAMAPPLADDR').val('No');   
		$('.APADDR').val('');
        $('.APADDR').attr('disabled',false)
		$('.APADDR').attr('disabled',false)
		$('.ALLDIS').attr('disabled',true);
		$('.APADDR').find('.select-dropdown').attr('disabled',false)
		$('.APADDR').find('.select-dropdown').attr('disabled',false)
		$('#COAI_RESIDTYPE').material_select("destroy");
		$('#COAI_MONTHS').material_select("destroy");
		$('#COAI_RESIDTYPE').material_select();
		$('#COAI_MONTHS').material_select();
        $('.APDR').removeClass('active');
		
		
		        //added for radio disabled
           $('.PRADDR').attr('disabled',false)
		  $('.PRADDR').find('.select-dropdown').attr('disabled',false)
		  $('.ADDR').removeClass('active');
          $('.PRADDR').val('');
          
        $('#COAI_PERMRESIDTYPE').material_select("destroy");
      	$('#COAI_PERMMONTHS').material_select("destroy");
      	$('#COAI_PERMRESIDTYPE').material_select();
      	$('#COAI_PERMMONTHS').material_select();
        
      	$('input:radio[name=COAI_SAMRESIDADDR]')[1].checked = false;
	  }
}

function LoadgetSameaApplAddr()
{	
	var PrcsId=$("#COBI_PRCSID").val();
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETAPPLADDRDETLS");
	
	if($( '#COAI_SAMAPPLADDR').is(':checked')==true)
	  {
	  
	  $('#COAI_SAMAPPLADDR').val('Yes');

	  var APPAdr1 =$(xml).find('COAI_ADDRLINI').text();
	  var APPAdr2 =$(xml).find('COAI_ADDRLINII').text();
	  var APPPincode =$(xml).find('COAI_PINCODE').text();
	  var APPCITY  =$(xml).find('COAI_CITY').text();
	  var APPSTATE =$(xml).find('COAI_STATE').text();
	  var APPLNDMARK =$(xml).find('COAI_LNDMARK').text();
	  var APPLNDLINE =$(xml).find('COAI_LNDLINENO').text();
	  var APPYRPRE =$(xml).find('COAI_YEAROFRESID').text();
	  var ResType=$(xml).find('COAI_RESIDTYPE').text();
	  var Month=$(xml).find('COAI_MONTHS').text();
	  
	  document.getElementById('COAI_ADDRLINI').value=$(xml).find('COAI_ADDRLINI').text();
	  document.getElementById('COAI_ADDRLINII').value=$(xml).find('COAI_ADDRLINII').text();
	  document.getElementById('COAI_PINCODE').value=$(xml).find('COAI_PINCODE').text();
	  document.getElementById('COAI_CITY').value=$(xml).find('COAI_CITY').text();
	  document.getElementById('COAI_STATE').value=$(xml).find('COAI_STATE').text();
	  document.getElementById('COAI_LNDMARK').value=$(xml).find('COAI_LNDMARK').text();
	  document.getElementById('COAI_LNDLINENO').value=$(xml).find('COAI_LNDLINENO').text();
	  document.getElementById('COAI_YEAROFRESID').value=$(xml).find('COAI_YEAROFRESID').text();
	  document.getElementById('COAI_STDC').value=$(xml).find('COAI_STDC').text();
      $("#COAI_RESIDTYPE").val(ResType);
	  $("#COAI_MONTHS").val(Month)
	  $('#COAI_RESIDTYPE').material_select();
	  $('#COAI_MONTHS').material_select();
	  $('.APADDR').attr('disabled',true)
	  $('.APADDR').attr('disabled',true)
	  $('.APADDR').find('.select-dropdown').attr('disabled',true)
	  $('.APADDR').find('.select-dropdown').attr('disabled',true)
	  $('.APDR').addClass('active');
	  }
}


function checkPAN(Event)
{
  if($('#COBI_PANNAVAIL').is(':checked')==true)
	   {
		$("#COBI_CUSFISNAM").attr('disabled',false);
		$("#COBI_CUSLSTNAM").attr('disabled',false);
		$('#COBI_PANNAVAIL').val('Yes');
		$(".FORM").show();
		$("#COBI_PAN").val('');
		$("#COBI_PAN").next().removeClass('active');		
		$("#COBI_PAN").removeClass('COBIMndtry');		
		$(".PANTYPE").removeClass('COBIMndtry');
		$("#COBI_PAN").attr('disabled',true);
		$(".PANVTyp").attr('disabled',true);
		$("#COBI_PAN").next().find(".MndtryAstr").html("");
		$("#COBI_PANVERIFY").val('');
		$(".CHK").attr('disabled',true);
		$("[data-Validatearia=COBI_PANVERIFY]").text('Verify');
        $("[data-Validatearia=COBI_PANVERIFY]").removeClass("btn-GrnInplain");	
        $("[data-Validatearia=COBI_PANVERIFY]").addClass("btn-yelInplain");
        $("[data-Validatearia=COBI_PANVERIFY]").removeClass("btn-RedInplain"); 
		var xml=UI_getdata($("#COBI_PRCSID").val(),$("#COBI_PAN").val(),$("#COBI_CUSID").val(),$("#COBI_CONSTITUTION").val(),"","LSW_SCHKDUPDATA");
	   }
	else
		{
		$('#COBI_PANNAVAIL').val('No');
		$(".FORM").hide();		
		$(".PANTYPE").addClass('COBIMndtry');
		$("#COBI_PAN").addClass('COBIMndtry');
		$("#COBI_PAN").attr('disabled',false);
		$(".CHK").attr('disabled',false);
		$(".PANVTyp").attr('disabled',false);
		$("#COBI_PAN").next().find(".MndtryAstr").html("*");
		}
}

function CHKApplIndiv()
{
	var PrcsId=$("#COBI_PRCSID").val();
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SChkRelApplicIndi")
	
	if($(xml).find('CBSI_CUSTYPE').text()=="Individual")
		{
		 $(".NonBlood").attr("disabled",true)
		 $(".NonBlood").addClass('disabled');
		}
	else
		{
		  $(".NonBlood").attr("disabled",false)
		  $(".NonBlood").addClass('MODE');
		  $(".MODE").removeClass('disabled');

		}
}

function CheckRelatOther()
{
	var Relation=$("#COBI_RELASAPPL").val();
    if(Relation=="Other")
	{
	   $(".Relationother").show(); 
	   $("#COBI_OTHERRELATION").addClass('COBIMndtry'); 
	   
	}
   else
	 {
	   
	   $(".Relationother").hide(); 
	   $("#COBI_OTHERRELATION").removeClass('COBIMndtry'); 
	   
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
var ApplCusType=$("#COBI_CUSTYPE").val()

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
	var PrcsId=$("#COBI_PRCSID").val()
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
	var Title=$("#COBI_TITLE").val()
	
	   if(Title=="Mr")
	   {
	    $('input:radio[name=COBI_GENTER]')[0].checked = true;
	   }
	    else if(Title=="Mrs" || Title=="Miss")
		{
	     $('input:radio[name=COBI_GENTER]')[1].checked = true;
		}
		else if(Title=="NA" || Title=="NA")
		{
		 $('input:radio[name=COBI_GENTER]')[2].checked = true;
		}
	    else
	    {
	    	$('input:radio[name=COBI_GENTER]')[0].checked = false;
	    	$('input:radio[name=COBI_GENTER]')[1].checked = false;
			$('input:radio[name=COBI_GENTER]')[2].checked = false;
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
		 $("#CoAppConsti").parent().next().find(".MndtryAstr").html("*");
		 $("#CoAppcin").addClass('COAPMndtry');
		 $("#CoAppcin").parent().next().find(".MndtryAstr").html("*");
		 
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
		 $("#CoAppConsti").parent().next().find(".MndtryAstr").html("");
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
	var Gender=$("input[name='COBI_GENTER']:checked"). val();
	
	var Title=$("#COBI_TITLE"). val();
	
	if(Gender=="Male")
		{
		$("#COBI_TITLE").val('');
		 $('#COBI_TITLE').material_select("destroy");	
		 $('#COBI_TITLE').material_select();
	
		}
	else if(Gender=="Female")
      { 
		if(Title=="Mr")
			{
			$("#COBI_TITLE").val('');
		    $('#COBI_TITLE').material_select("destroy");	
			 $('#COBI_TITLE').material_select();
	
            }
	    
	  }
} 


function CHKAPPResidType()
{
	var PrcsId=$("#COBI_PRCSID").val();
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SChkRelApplicIndi")
	
	if($(xml).find('CBSI_CUSTYPE').text()=="Non-Individual")
		{
		 $("#COAI_SAMAPPLADDR").attr('disabled',true)
		 $(".PremAddr").prop("disabled", true);
		 //$("#COAI_SAMRESIDADDR").attr('disabled',true)
		 //$("#COAI_SAMCOAPPRESIDADDR").attr('disabled',true)
		 // jQuery("#COAI_SAMRESIDADDR input:radio[id^=PermAddr]:first").attr('disabled', true);
		 //return false;
		}
}

function CHKSameCoAppresiaddr()
{
	var AddrI=$("#COAI_ADDRLINI").val()
    var PIN=$("#COAI_PINCODE").val()
	var LndMrk=$("#COAI_LNDMARK").val()
	var ResType=$("#COAI_RESIDTYPE").val();
	var ResYear=$("#COAI_YEAROFRESID").val();
		
	if(AddrI =="" || PIN == "" || LndMrk == "" || ResType == "" || ResYear == "")
	  {
		alert('Fill the Mandatory Fields In Co-Applicant Residence Address');
		$('input:radio[name=COAI_SAMRESIDADDR]')[1].checked = false;
		//$('input:radio[name=COAI_SAMRESIDADDR]')[0].checked = true;
		 return false;
	   }
	else
	   {
		 SameCoAppresiaddr();
	   }
}



function ONLOADCOAPPResidence()
{
	if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Co-Applicant Residence Address")
	  {
	 // $('#COAI_SAMCOAPPRESIDADDR').val('Yes');
	  document.getElementById('COAI_PREMADDRLINI').value=document.getElementById('COAI_ADDRLINI').value;
	  document.getElementById('COAI_PERMADDRLINII').value=document.getElementById('COAI_ADDRLINII').value; 
	  document.getElementById('COAI_PERMPINCODE').value=document.getElementById('COAI_PINCODE').value;
	  document.getElementById('COAI_PERMCITY').value=document.getElementById('COAI_CITY').value;
	  document.getElementById('COAI_PERMSTATE').value=document.getElementById('COAI_STATE').value; 
	  document.getElementById('COAI_PERMLNDMARK').value=document.getElementById('COAI_LNDMARK').value; 
	  document.getElementById('COAI_PERMLNDLINENO').value =document.getElementById('COAI_LNDLINENO').value; 
	  document.getElementById('COAI_PERMYEAROFRESID').value =document.getElementById('COAI_YEAROFRESID').value;
	  document.getElementById('COAI_PSTDC').value =document.getElementById('COAI_STDC').value;
	  var ResType=document.getElementById('COAI_RESIDTYPE').value;
	  var Month=document.getElementById('COAI_MONTHS').value;
       $("#COAI_PERMRESIDTYPE").val(ResType);
	  $("#COAI_PERMMONTHS").val(Month)
	  $('#COAI_PERMRESIDTYPE').material_select();
	  $('#COAI_PERMMONTHS').material_select();
	  $('.PRADDR').attr('disabled',true)
	  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
	  $('.ADDR').addClass('active');
	 
	  
	  //added to disabled
		 
	  $('.APADDR').attr('disabled',true)
	  $('.APADDR').attr('disabled',true)
	  $('.APADDR').find('.select-dropdown').attr('disabled',true)
	  $('.APADDR').find('.select-dropdown').attr('disabled',true)
	  $('.APDR').addClass('active');
	  
	  }	
}



function SameCoAppresiaddr()
{	  
	if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Co-Applicant Residence Address")
	  {
	 // $('#COAI_SAMCOAPPRESIDADDR').val('Yes');
	  document.getElementById('COAI_PREMADDRLINI').value=document.getElementById('COAI_ADDRLINI').value;
	  document.getElementById('COAI_PERMADDRLINII').value=document.getElementById('COAI_ADDRLINII').value; 
	  document.getElementById('COAI_PERMPINCODE').value=document.getElementById('COAI_PINCODE').value;
	  document.getElementById('COAI_PERMCITY').value=document.getElementById('COAI_CITY').value;
	  document.getElementById('COAI_PERMSTATE').value=document.getElementById('COAI_STATE').value; 
	  document.getElementById('COAI_PERMLNDMARK').value=document.getElementById('COAI_LNDMARK').value; 
	  document.getElementById('COAI_PERMLNDLINENO').value =document.getElementById('COAI_LNDLINENO').value; 
	  document.getElementById('COAI_PERMYEAROFRESID').value =document.getElementById('COAI_YEAROFRESID').value;
	  document.getElementById('COAI_PSTDC').value =document.getElementById('COAI_STDC').value;
	  var ResType=document.getElementById('COAI_RESIDTYPE').value;
	  var Month=document.getElementById('COAI_MONTHS').value;
      $("#COAI_PERMRESIDTYPE").val(ResType);
	  $("#COAI_PERMMONTHS").val(Month)
	  $('#COAI_PERMRESIDTYPE').material_select();
	  $('#COAI_PERMMONTHS').material_select();
	  $('.PRADDR').attr('disabled',true)
	  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
	  $('.ADDR').addClass('active');
	  
	  
	  
	    //added to radio disabled
		 
	  $('.APADDR').attr('disabled',true)
	  $('.APADDR').attr('disabled',true)
	  $('.APADDR').find('.select-dropdown').attr('disabled',true)
	  $('.APADDR').find('.select-dropdown').attr('disabled',true)
	  $('.APDR').addClass('active');
	  
	  
	  }
	  else
	  {
		//$('#COAI_SAMCOAPPRESIDADDR').val('No');   
		$('.PRADDR').find('.select-dropdown').attr('disabled',false)
		$('.PRADDR').attr('disabled',false)
		$('.ALLDIS').attr('disabled',true);
		$('.PRADDR').val('');
		$('#COAI_PERMRESIDTYPE').material_select("destroy");
		$('#COAI_PERMMONTHS').material_select("destroy");
		$('#COAI_PERMRESIDTYPE').material_select();
		$('#COAI_PERMMONTHS').material_select();
		$('.PINL').removeClass('active');
		$('.ADDR').removeClass('active');
		
		
			//added to radio disabled
		
		  if($( '#COAI_SAMAPPLADDR').is(':checked')==false)
		  {
		    $('.APADDR').attr('disabled',false)
			$('.APADDR').attr('disabled',false)
			$('.APADDR').find('.select-dropdown').attr('disabled',false)
			$('.APADDR').find('.select-dropdown').attr('disabled',false)
		  }
	  }
	  
	 if( $("#COBI_RESCOMPETED").val()=="Completed")
 {
	 $('.RESSTAT').attr('disabled',true) 
 }  
	  
}

function LoadSameCoAppresiaddr()
{	  
	if($("input[name='COAI_SAMRESIDADDR']:checked"). val()=="Co-Applicant Residence Address")
	  {
	 // $('#COAI_SAMCOAPPRESIDADDR').val('Yes');
	  document.getElementById('COAI_PREMADDRLINI').value=document.getElementById('COAI_ADDRLINI').value;
	  document.getElementById('COAI_PERMADDRLINII').value=document.getElementById('COAI_ADDRLINII').value; 
	  document.getElementById('COAI_PERMPINCODE').value=document.getElementById('COAI_PINCODE').value;
	  document.getElementById('COAI_PERMCITY').value=document.getElementById('COAI_CITY').value;
	  document.getElementById('COAI_PERMSTATE').value=document.getElementById('COAI_STATE').value; 
	  document.getElementById('COAI_PERMLNDMARK').value=document.getElementById('COAI_LNDMARK').value; 
	  document.getElementById('COAI_PERMLNDLINENO').value =document.getElementById('COAI_LNDLINENO').value; 
	  document.getElementById('COAI_PERMYEAROFRESID').value =document.getElementById('COAI_YEAROFRESID').value;
	  document.getElementById('COAI_PSTDC').value =document.getElementById('COAI_STDC').value;
	  var ResType=document.getElementById('COAI_RESIDTYPE').value;
	  var Month=document.getElementById('COAI_MONTHS').value;
      $("#COAI_PERMRESIDTYPE").val(ResType);
	  $("#COAI_PERMMONTHS").val(Month)
	  $('#COAI_PERMRESIDTYPE').material_select();
	  $('#COAI_PERMMONTHS').material_select();
	  $('.PRADDR').attr('disabled',true)
	  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
	  $('.ADDR').addClass('active');
	  }
	  
	  
 if( $("#COBI_RESCOMPETED").val()=="Completed")
 {
	 $('.RESSTAT').attr('disabled',true) 
 }
}


/*	
function ChkBoxdisbAppAddr()
{
	if($( '#COAI_SAMRESIDADDR').is(':checked')==true)
		{
		
		 $("#COAI_SAMCOAPPRESIDADDR").attr('disabled',true)
		 }
	else
		{
		 $("#COAI_SAMCOAPPRESIDADDR").attr('disabled',false)
		}
}

function ChkBoxdisbCoAppAddr()
{
	if($( '#COAI_SAMCOAPPRESIDADDR').is(':checked')==true)
		{
		
		 $("#COAI_SAMRESIDADDR").attr('disabled',true)
		 }
	else
		{
		 $("#COAI_SAMRESIDADDR").attr('disabled',false)
		}
}
*/

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
	var PANV=$("#COBI_PANVERIFY").val()
	
	if(PANV=="Verified")
		{
		 $(".DPAN").hide()
		}
	else
		{
		 $(".DPAN").show()
		}
}


$(document).on("blur", ".JOINDATE", function() {
	
	var DateVal=$(this).val()	
	var DateId=$(this).attr('id')
    var html=$('.BankDetail1').find(".DYNROW")
    var row = $('.BankDetail1').find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	   var JoinId=$($(html).find("[name=COEI_DATOFESTABLIS]")[i]).attr('id');
	   if(JoinId!=DateId)
		   {
		   var JoinVal=$($(html).find("[name=COEI_DATOFESTABLIS]")[i]).val()
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
	$(HTML).find("[name='COEI_NEGATLIST']").html("")
	$(HTML).find("[name='COEI_NEGATLIST']").empty();
	$(HTML).find("[name='COEI_NEGATLIST']").append($(NegativeList).find("RESULT").html());
	$(HTML).find("[name='COEI_NEGATLIST']").material_select(); 	
	
	var CautionList = UI_getdata("Caution List","","","","","LSW_SGETCAUTIONLIST");
	$(HTML).find("[name='COEI_CAUTLIST']").html("")
	$(HTML).find("[name='COEI_CAUTLIST']").empty();
	$(HTML).find("[name='COEI_CAUTLIST']").append($(CautionList).find("RESULT").html());
	$(HTML).find("[name='COEI_CAUTLIST']").material_select(); 	
}
*/


function CheckNegativeList()
{
	var NegativeList = UI_getdata("","","","","","LSW_SGETCAUTIONLIST");
	
	$("#COEI_NEGATLIST").html("")
	$("#COEI_NEGATLIST").append($(NegativeList).find("Negative").html());	
	
	$("#COEI_CAUTLIST").html("")
	$("#COEI_CAUTLIST").append($(NegativeList).find("Caution").html()); 	
	
    $("#COEI_PAR").html("")
	$("#COEI_PAR").append($(NegativeList).find("PAR").html());
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
			if($("#COBI_CUSTYPE").val()=="Non-Individual")
	         {
		   var rowno = meta.row;       			 
			 
	 		var HTML =    '<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" id="RXLD_ADDRTYPE'+rowno+'" name="RXLD_ADDRTYPE'+rowno+'">';
	 			HTML = HTML + '<option value="">--Select--</option>';
	 			HTML = HTML + '<option value="Office Address">Office Address</option></span>';
			          			
	 			var htmldata = $(HTML);
	 			
	 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

	          return htmldata[0].outerHTML; 
			 }
          else
            {
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
		var xml=UI_getdata($("#PrcsID").val(),Type,IDProof,$("#COBI_CUSID").val(),"","LSW_SCheckOTHERKYCDOCU")
        var Result=$(xml).find('Result').text()
        if(Result=="YES")
        	{
             alert ("Same KYC already exists")
             $('#'+Id).val('')
             $('#'+Id).removeClass('active');
            }
}

function CheckFieldDisb()
{
   var FstName=$("#COBI_FETCHDOBNAME").val();
   var LstName=$("#COBI_FETCHLSTNAME").val();
   var FathName=$("#COBI_FETCHFATHNAME").val();
   var DOB=$("#COBI_FETCHDOBNAME").val();
   
   if(FstName=="Selected")
	   {
	   $("#COBI_CUSFISNAM").attr('disabled',true);
	   }
   if(LstName=="Selected")
	   {
	   $("#COBI_CUSLSTNAM").attr('disabled',true);
	   }
   if(FathName=="Selected")
     {
      $("#COBI_FATHRNAM").attr('disabled',true);
     }
   if(DOB=="Selected")
     {
      $("#COBI_DOB").attr('disabled',true);
     }
}


function RelationShipDropdown()
{
	var PrcsId=$("#COBI_PRCSID").val();
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SChkRelApplicIndi")
	var ApplCusType=$("#COBI_CUSTYPE").val()
	var CoAppRelation=$('#COBI_RELASAPPL').val();
	
	if($(xml).find('CBSI_CUSTYPE').text()=="Individual")
		{
            if(ApplCusType=="Non-Individual")
			{
            	$("#COBI_RELASAPPL").empty();
        		$("#COBI_RELASAPPL").append('<option value="" selected>--Select--</option><option value="Partner">Partner</option><option value="Director">Director</option><option value="Shareholder">Shareholder</option><option value="Proprietor">Proprietor</option><option value="Other">Other</option>') 
        		$('#COBI_RELASAPPL').material_select("destroy");	
        		$('#COBI_RELASAPPL').material_select();
        		$('#COBI_RELASAPPL').val(CoAppRelation);
        		$('#COBI_RELASAPPL').material_select();
             }
           else
           {
        	$("#COBI_RELASAPPL").empty();
       		$("#COBI_RELASAPPL").append('<option value="" selected>--Select--</option><option value="Spouse">Spouse</option><option value="Brother">Brother</option><option value="Mother">Mother</option><option value="Father">Father</option><option value="Sister">Sister</option><option value="Brother In-Law">Brother In-Law</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Aunty">Aunty</option><option value="Daughter">Daughter</option><option value="Son">Son</option><option value="Other">Other</option>') 
       		$('#COBI_RELASAPPL').material_select("destroy");	
       		$('#COBI_RELASAPPL').material_select();
       		$('#COBI_RELASAPPL').val(CoAppRelation);
    		$('#COBI_RELASAPPL').material_select();
           }
        }
	else
		{
		
		if(ApplCusType=="Non-Individual")
		{
        	$("#COBI_RELASAPPL").empty();
    		$("#COBI_RELASAPPL").append('<option value="" selected>--Select--</option><option value="Partner">Partner</option><option value="Director">Director</option><option value="Shareholder">Shareholder</option><option value="Proprietor">Proprietor</option><option value="Other">Other</option>') 
    		$('#COBI_RELASAPPL').material_select("destroy");	
    		$('#COBI_RELASAPPL').material_select();
    		$('#COBI_RELASAPPL').val(CoAppRelation);
    		$('#COBI_RELASAPPL').material_select();
         }
		else
			{
			$("#COBI_RELASAPPL").empty();
    		$("#COBI_RELASAPPL").append('<option value="" selected>--Select--</option><option value="Partner">Partner</option><option value="Director">Director</option><option value="Shareholder">Shareholder</option><option value="Proprietor">Proprietor</option><option value="Other">Other</option>') 
    		$('#COBI_RELASAPPL').material_select("destroy");	
    		$('#COBI_RELASAPPL').material_select();
    		$('#COBI_RELASAPPL').val(CoAppRelation);
    		$('#COBI_RELASAPPL').material_select();
			}
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
		  	$($('.BankDetail1').find(".DYNROW")[i]).find(".EMPI").removeClass("COEIMndtry")
			$($('.BankDetail1').find(".DYNROW")[i]).find(".SALM").removeClass("COEIMndtry")
			$($('.BankDetail1').find(".DYNROW")[i]).find(".OEMPM").removeClass("COEIMndtry")
		  }
		 else
		 {
			 $($('.BankDetail1').find(".DYNROW")[i]).find(".DLTICON").hide();
			 $($('.BankDetail1').find(".DYNROW")[i]).find(".OEMPM").addClass("COEIMndtry")
			//$($('.BankDetail1').find(".DYNROW")[i]).find(".EMPI").addClass("COEIMndtry")
		 }
		 
		  $($('.BankDetail1').find(".DYNROW")[i]).find("input[name='COEI_CUSID']" ).val($("#COBI_CUSID").val())
	 } 
}

function GetOfficaddr()
{	 
//var row = $('.BankDetail1').find(".DYNROW").length;
var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
var Resi=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='COEI_ORGANIADDR']:checked").val();

if(Resi=="Resi-cum-office")
 {
	 if($('#COEI_ADDRLINEI'+row).val() != "")
	 {
	if (confirm("The entered address will be cleared are you sure to continue") == true) {
 //$('#CADI_SAMRESIDADDR').val('Yes');
 document.getElementById('COEI_ADDRLINEI'+row).value=document.getElementById('COAI_ADDRLINI').value;
 document.getElementById('COEI_ADDRLINEII'+row).value=document.getElementById('COAI_ADDRLINII').value;
 document.getElementById('COEI_PINCODE'+row).value=document.getElementById('COAI_PINCODE').value;
 document.getElementById('COEI_CITY'+row).value=document.getElementById('COAI_CITY').value;
 document.getElementById('COEI_STATE'+row).value=document.getElementById('COAI_STATE').value;
 document.getElementById('COEI_LNDMARK'+row).value=document.getElementById('COAI_LNDMARK').value;
 document.getElementById('COEI_LNDLINENO'+row).value=document.getElementById('COAI_LNDLINENO').value;
 document.getElementById('COEI_STDC'+row).value=document.getElementById('COAI_STDC').value;
 $("#COEI_CITY"+row).next().addClass('active')
 $("#COEI_STATE"+row).next().addClass('active')
 $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
  //$('.OFFADDR').attr('disabled',true)
  $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').addClass('active');
	} 
  }
  else
  {
	  document.getElementById('COEI_ADDRLINEI'+row).value=document.getElementById('COAI_ADDRLINI').value;
	  document.getElementById('COEI_ADDRLINEII'+row).value=document.getElementById('COAI_ADDRLINII').value;
	  document.getElementById('COEI_PINCODE'+row).value=document.getElementById('COAI_PINCODE').value;
	  document.getElementById('COEI_CITY'+row).value=document.getElementById('COAI_CITY').value;
	  document.getElementById('COEI_STATE'+row).value=document.getElementById('COAI_STATE').value;
	  document.getElementById('COEI_LNDMARK'+row).value=document.getElementById('COAI_LNDMARK').value;
	  document.getElementById('COEI_LNDLINENO'+row).value=document.getElementById('COAI_LNDLINENO').value;
	  document.getElementById('COEI_STDC'+row).value=document.getElementById('COAI_STDC').value;
$("#COEI_CITY"+row).next().addClass('active')
 $("#COEI_STATE"+row).next().addClass('active')
	  $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',true)
	   //$('.OFFADDR').attr('disabled',true)
	   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').addClass('active');
  }
 }
 else
   {
	 if($('#COEI_ADDRLINEI'+row).val() != "")
		 {
		 if (confirm("The entered address will be cleared are you sure to continue") == true) {
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',false)
			//$('.OFFADDR').attr('disabled',false)
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').val('');	
			//$('.PINL').removeClass('active');
			$("#COEI_CITY"+row).next().removeClass('active')
			$("#COEI_CITY"+row).val('');
			 $("#COEI_STATE"+row).val('');
            $("#COEI_STATE"+row).next().removeClass('active')
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').removeClass('active');
		   }
		 }
	 else
		 {
		     $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').attr('disabled',false)
			//$('.OFFADDR').attr('disabled',false)
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OFFADDR').val('');	
			//$('.PINL').removeClass('active');
			$("#COEI_CITY"+row).next().removeClass('active')
            $("#COEI_STATE"+row).next().removeClass('active')
			$("#COEI_CITY"+row).val('');
			 $("#COEI_STATE"+row).val('');
			   $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find('.OADDR').removeClass('active');
		 }
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


function CheckPani()
{
	var PANVerify=$("#COBI_PANVERIFY").val();
	if($("#KARZASTATUS").val()=="Active")
	{
	if(PANVerify=="Verified")
		{
		 if($("#COBI_CUSFISNAM").val()!="")
		  {
			  $("#COBI_CUSFISNAM").attr('disabled',true)
		  }
		  if($("#COBI_CUSLSTNAM").val()!="")
		  {
			  $("#COBI_CUSLSTNAM").attr('disabled',true)
		  }
	     //$("#COEI_INCCONSID1").attr('disabled',false);
		
		}
	else
		{
		  
		//  $("#COEI_INCCONSID1").attr('disabled',true);
		
		}
	}
	else
	{
		/*if($("#COBI_PAN").val()=="")
		{
		  $("#COEI_INCCONSID1").attr('disabled',true);
		}
		else
		{
		 $("#COEI_INCCONSID1").attr('disabled',false);
		}*/
	}
}

function NotIndiPan()
{
	var PANVerify=$("#COBI_PANVERIFY").val();
	if($("#KARZASTATUS").val()=="Active")
	{
	if(PANVerify=="Verified")
	{
		//$("#COOA_INCCONSID").val('Yes');
		//$("#COOA_INCCONSID").prop("checked", true);
		$("#COOA_INCCONSID").attr('disabled',false);
		//$("#COOA_INCCONSID").addClass("CDOGMndtry");
		$("#COBI_PANATTACHMENT").addClass("DOCMndtry")
	}
	else
	{
		//$("#COOA_INCCONSID").val('No');
		//$("#COOA_INCCONSID").prop("checked", false);
		$("#COOA_INCCONSID").attr('disabled',true);
		//$("#COOA_INCCONSID").removeClass("CDOGMndtry");
		$("#COBI_PANATTACHMENT").removeClass("DOCMndtry")
	 }
	}
	else
	{
		if($("#COBI_PAN").val()=="")
		{
		  $("#COOA_INCCONSID").attr('disabled',true);
		}
		else
		{
		  $("#COOA_INCCONSID").attr('disabled',false);
		}
		
	}
}


function CheckCIN()
{
	var Constitution=$("#COBI_CONSTITUTION").val();
	
	if(Constitution=="Private Ltd." || Constitution=="Public Ltd.")
	  {
	  $(".CIN").val('')
	  $(".CIN").show();
	  $("#COOA_CIN").addClass('COOAMndtry');
	  }
	  else
	  {
	  $("#COOA_CIN").removeClass('COOAMndtry');
	  $(".CIN").val('')
	  $(".CIN").hide();
	  }
}

function CheckUploadMndtry()
{
	if($("#COBI_VOTERIDVEIRFY").val() == "Verified")
		{
		 $("#COBI_VOTERATTACHMENT").addClass('DOCMndtry');
		}
	else 
		{
		 $("#COBI_VOTERATTACHMENT").removeClass('DOCMndtry');
		}
	if($("#COBI_DRIVLICNSVERIFY").val() == "Verified")
	{
	 $("#COBI_DRIVLICATTACHMENT").addClass('DOCMndtry');
	}
else 
	{
	 $("#COBI_DRIVLICATTACHMENT").removeClass('DOCMndtry');
	}
	if($("#COBI_PASSPORTVERIFY").val() == "Verified")
	{
	 $("#COBI_PASSPORTATTACHMENT").addClass('DOCMndtry');
	}
 else 
	{
	 $("#COBI_PASSPORTATTACHMENT").removeClass('DOCMndtry');
	}
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

function AddZoom()
{
if($("#COBI_CUSPHOTO").val()!="")
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
	var PANVerify=$("#COBI_PANVERIFY").val();
	var GST=$("#COBI_GSTNUM").val();
	if($("#COBI_CUSTYPE").val() =="Individual")
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
if($("#COBI_DOB").val()!="")
	{
    var DOB=$("#COBI_DOB").val();
    
    var DOB1 = DOB.split("/");
    var dd1 = DOB1[0];
    var mm1 = DOB1[1];
    var yy1 = DOB1[2];

    var DOOFBIRTH=yy1+mm1+dd1



    var html=$('.BankDetail1').find(".DYNROW")
    var row = $('.BankDetail1').find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
    var JoinVal=$($(html).find("[name=COEI_DATOFESTABLIS]")[i]).val()
    var JOINVAL1 = JoinVal.split("/");
    var dd2 = JOINVAL1[0];
    var mm2 = JOINVAL1[1];
    var yy2 = JOINVAL1[2];
    var JOINDATE=yy2+mm2+dd2

		    if(parseInt(JOINDATE) < parseInt(DOOFBIRTH))
		    	{
		    	var Alert1=$($(html).find("[name=COEI_DATOFESTABLIS]")[0]).next().text()
		    	Alert1=Alert1.replace('*',' ')
		    	alert(Alert1+' should not greater than Date of Birth');
		    	$("#COBI_DOB").val('');
		    	$("#COBI_DOB").next().removeClass('active')
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
		    var Profile=$("#COBI_PROFILE").val();
			var ApplCusType=$("#COBI_CUSTYPE").val()
			
			if(ApplCusType=="Individual")
				{
			     if(Profile=="Salaried")
				   {
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_DATOFESTABLIS]").val('');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_NOOFYERBUSINESS]").val('');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_DATOFESTABLIS]").next().removeClass('active');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_NOOFYERBUSINESS]").next().removeClass('active');
				
					  // $($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_ORGANIADDR]')[0].checked = false;
	    	//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_ORGANIADDR]')[1].checked = false;
	    	//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_ORGANIADDR]')[2].checked = false;

			//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_PREFCOMMUADDR]')[0].checked = false;
	    	//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_PREFCOMMUADDR]')[1].checked = false;
	    	//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_PREFCOMMUADDR]')[2].checked = false;
		  	         $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_DATOFESTABLIS]").next().text('Joining date in present organisation *'); 
		  	         $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_NOOFYERBUSINESS]").next().text('No of years in present organisation');
				   }
			     else if(Profile=="SEP" || Profile=="SENP")
					{
						$($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_DATOFESTABLIS]").val('');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_NOOFYERBUSINESS]").val('');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_DATOFESTABLIS]").next().removeClass('active');
					   $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_NOOFYERBUSINESS]").next().removeClass('active');
					  // $($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=CEMI_ORGANIADDR]')[0].checked = false;
	    	//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_ORGANIADDR]')[1].checked = false;
	    	//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_ORGANIADDR]')[2].checked = false;
			//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_PREFCOMMUADDR]')[0].checked = false;
	    	//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_PREFCOMMUADDR]')[1].checked = false;
	    	//$($('.BankDetail1').find(".DYNROW")[i]).find('input:radio[name=COEI_PREFCOMMUADDR]')[2].checked = false;
			    	 $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_DATOFESTABLIS]").next().text('Date of Establishment *'); 
		  	         $($('.BankDetail1').find(".DYNROW")[i]).find("[name=COEI_NOOFYERBUSINESS]").next().text('No. of Years in Business');
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
       		if (data != "")
{	
       		HTML =  '<span id=""><img src="ThemeproLO/Common/FEP/images/Remarks.png" title="VIEW" onclick="REMARKPOPUP(this);disbRmk()" class="" width="35" height="25">';
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

function InactivePanCheck()
{
	if($("#KARZASTATUS").val()=='Inactive')
	{
		if($("#COBI_PAN").val()=="")
		{
		 $("#COOA_INCCONSID").attr('disabled',true);
		 $("#COOA_INCCONSID").removeClass("CDOGMndtry");
		 //$("#COEI_INCCONSID1").attr('disabled',true);
		// $("#COEI_INCCONSID1").removeClass("CEMIMndtry");
		}
		else
		{
		 $("#COOA_INCCONSID").attr('disabled',false);
		 $("#COOA_INCCONSID").addClass("CDOGMndtry");
		// $("#COEI_INCCONSID1").attr('disabled',false);
		// $("#COEI_INCCONSID1").addClass("CEMIMndtry");
		}
	}
}

function disbRmk()
{
	$("#POPUPRemarks").attr('disabled',true);
	$("#RemarksCONFIRM").hide();
}





function DELEMPDETAILS()
{
	
	if($("#COBI_PROFILE").val() != "Salaried" && $("#COBI_PROFILE").val()!="SEP" && $("#COBI_PROFILE").val()!= "SENP")
	{
       var EMPDETAILS=UI_getdata($("#PrcsID").val(),$("#COBI_CUSID").val(),"","","","LSW_SCLEAREMPDETAILS")	
   	   
   	 $('.PROCHGS').val('')
   	 $('.PROCHGAC').removeClass('active')
   	 
   	   
   	
  	$('input:radio[name=COEI_PREFCOMMUADDR]')[0].checked = false;
	$('input:radio[name=COEI_PREFCOMMUADDR]')[1].checked = false;
	$('input:radio[name=COEI_PREFCOMMUADDR]')[2].checked = false;
   	
   	$('input:radio[name=COEI_ORGANIADDR]')[0].checked = false;
	$('input:radio[name=COEI_ORGANIADDR]')[1].checked = false;
	$('input:radio[name=COEI_ORGANIADDR]')[2].checked = false;
   	
   	
    }
}

function getSameAs(Event)
{
	if(Event=="Load")
	  {
	if($('#COAI_SAMEAS').is(':checked')==true)
	  {
		  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
		  $('.PRADDR').attr('disabled',true)
		  $($('input:radio[name=COAI_SAMRESIDADDR]')[0]).attr('disabled',false)
		  $($('input:radio[name=COAI_SAMRESIDADDR]')[1]).attr('disabled',false)
	  }
	else
	  {
		$('.PRADDR').find('.select-dropdown').attr('disabled',false)
		$('.PRADDR').attr('disabled',false)
		$('.ALLDIS').attr('disabled',true);
		$('input:radio[name=COAI_SAMRESIDADDR]')[0].checked = false;
	    $('input:radio[name=COAI_SAMRESIDADDR]')[1].checked = false;
		$($('input:radio[name=COAI_SAMRESIDADDR]')[0]).attr('disabled',true)
		$($('input:radio[name=COAI_SAMRESIDADDR]')[1]).attr('disabled',true)
	  }
	  CHKAPPResidType();
	  }
	  else
	  {
		if($('#COAI_SAMEAS').is(':checked')==true)
	    {
		  $('.PRADDR').find('.select-dropdown').attr('disabled',true)
		  $('.PRADDR').attr('disabled',true)
		  $('.PRADDR').val('');
		  $('.PRADDR').next().removeClass('active');
		   $('#COAI_PERMRESIDTYPE').material_select("destroy");
	       $('#COAI_PERMMONTHS').material_select("destroy");
	       $('#COAI_PERMRESIDTYPE').material_select();
	       $('#COAI_PERMMONTHS').material_select();
		  $($('input:radio[name=COAI_SAMRESIDADDR]')[0]).attr('disabled',false)
		  $($('input:radio[name=COAI_SAMRESIDADDR]')[1]).attr('disabled',false)
	    }
	else
	   {
		 $('.PRADDR').find('.select-dropdown').attr('disabled',false)
		 $('.PRADDR').attr('disabled',false)
		 $('.ALLDIS').attr('disabled',true);
		 $('.APADDR').find('.select-dropdown').attr('disabled',false)
		 $('.APADDR').attr('disabled',false)
		 $('input:radio[name=COAI_SAMRESIDADDR]')[0].checked = false;
	     $('input:radio[name=COAI_SAMRESIDADDR]')[1].checked = false;
		 $($('input:radio[name=COAI_SAMRESIDADDR]')[0]).attr('disabled',true)
		 $($('input:radio[name=COAI_SAMRESIDADDR]')[1]).attr('disabled',true)
		 $('.PRADDR').val('');
		 $('.PRADDR').next().removeClass('active');
		 $('#COAI_PERMRESIDTYPE').material_select("destroy");
	     $('#COAI_PERMMONTHS').material_select("destroy");
	     $('#COAI_PERMRESIDTYPE').material_select();
	     $('#COAI_PERMMONTHS').material_select();
	   }
	   CHKAPPResidType();
	  }
}

 /* function CheckDirectt()
 {
	
	 var borrower=$("#COBI_BORROWER").val()
      if(borrower=="Yes")
	  {
		 //$(".NINDU").show();
		 
         $("#COEI_EUAMNO").addClass('COEIMndtry');
         $("#COEI_EUAMNO").next().find(".MndtryAstr").html("*");
		 
         $("#COOA_UAMNO").addClass('COOAMndtry');
         $("#COOA_UAMNO").next().find(".MndtryAstr").html("*");
	  }
	  else
	  {
		 //$(".NINDU").hide();
		 
         $("#COEI_EUAMNO").removeClass('COEIMndtry');
         $("#COEI_EUAMNO").next().find(".MndtryAstr").html("");
		 
         $("#COOA_UAMNO").removeClass('COOAMndtry');
         $("#COOA_UAMNO").next().find(".MndtryAstr").html("");
	  }
		  
 } */
 
 function CoCheckborrower()
 {
	 var borrower=$("#COBI_BORROWER").val()
      if(borrower=="Yes")
	  {
		$(".COAP").show();
		$("#COOA_UAMNO").addClass('COOAMndtry');
		
        /*$(".COEUDHA").addClass('COEIMndtry'); 
         $(".COEUDHA").next().find(".MndtryAstr").html("*");
		 
		 $(".CEUDHA").removeClass('COEIMndtry'); 
         $(".CEUDHA").next().find(".MndtryAstr").html("");
		 
		 // $("#CDOG_UAMNO").addClass('COOAMndtry');
		 $(".COUDHA").addClass('COOAMndtry');
         $(".COUDHA").next().find(".MndtryAstr").html("*");
		 
		 $(".CUDHA").removeClass('COOAMndtry');
         $(".CUDHA").next().find(".MndtryAstr").html(""); */ 
	  }
	  else
	  {
		$("#COOA_UAMNO").val('');
 		 $("#COOA_UAMNO").removeClass('COOAMndtry');
		 $(".COAP").hide();
		/*  $(".COEUDHA").removeClass('COEIMndtry');
         $(".COEUDHA").next().find(".MndtryAstr").html("");
		 
		 $(".CEUDHA").addClass('COEIMndtry'); 
         $(".CEUDHA").next().find(".MndtryAstr").html("*");
		 // $("#CDOG_UAMNO").removeClass('COOAMndtry');
		 
		 $(".COUDHA").removeClass('COOAMndtry');
         $(".COUDHA").next().find(".MndtryAstr").html("");
		 
		 //$(".CUDHA").addClass('COOAMndtry');
         $(".CUDHA").next().find(".MndtryAstr").html(""); 
		 //$("#COOA_CUAMNO").addClass('COOAMndtry');
		 //$("#COOA_CUAMNO").next().find(".MndtryAstr").html("*"); */
	  }
		  
 }
 
 function CheckMsme()
 {
	 if($("#VERTICAL").val()=="MSME")
		{
			$(".CKMSME").hide();
			 $(".CKMSME").find("select").material_select("destroy");
			$("#COBI_BORROWER").removeClass("COBIMndtry");			 
		}
 }
 function CheckNumber()
 {
	 
	$("#COBI_GSTNUM").attr('disabled',false);
	
	var GST=$("input[name='COBI_GST']:checked"). val();
	
	if(GST=="Yes")
	{
         $("#COBI_EXEMPTED").addClass('COBIMndtry');
		 $("#COBI_GSTNUM").addClass('COBIMndtry');
		 $("#COBI_GSTNUM").next().find(".MndtryAstr").html("*");
         $("#COBI_EXEMPTED").parent().next().find(".MndtryAstr").html("*");
		 $(".EXEM").show();
		 $(".GSTF").show();
	}
	else
	{
		 $("#COBI_EXEMPTED").val('');
		 $("#COBI_GSTNUM").val('');
         $("#COBI_EXEMPTED").removeClass('COBIMndtry');
		 $("#COBI_GSTNUM").removeClass('COBIMndtry');
		 $("#COBI_GSTNUM").next().find(".MndtryAstr").html("*");
         $("#COBI_EXEMPTED").parent().next().find(".MndtryAstr").html("");
		// $("#COBI_GSTNUM").attr('disabled',true);
		 $(".EXEM").hide(); 
		 $(".GSTF").hide();
	}
	
 }
function Chkqualify(Input1,Input2,Type,Event)
{
	if(Event=="Load")
	{
		if($("#COBI_QUALIFICATION").val()=="Others")
		{
		  $(".OTHERS").show();
		  $("#COBI_OTHER").addClass("COBIMndtry");	
		  $("#COBI_OTHER").next().find(".MndtryAstr").html("*");
		}
		else
		{
		  $(".OTHERS").hide();
		  $("#COBI_OTHER").removeClass("COBIMndtry");
		  $("#COBI_OTHER").next().find(".MndtryAstr").html("");
		}
		
	}
	else
	{
	if(Type=="Category")
	{
		if($("#"+Input1).val()=="Others")
		{
		  $(".OTHERS").show();
		  $("#"+Input2).addClass("COBIMndtry");	
		  $("#"+Input2).next().find(".MndtryAstr").html("*");
		}
		else
		{
		  $(".OTHERS").hide();
		  $("#"+Input2).val('');
		  $("#"+Input2).next().removeClass('active');
		  $("#"+Input2).removeClass("COBIMndtry");
          $("#"+Input2).next().find(".MndtryAstr").html("");		  
		}
	}
}
}

function Chkudyam(){
	var borrower=$("#COBI_BORROWER").val()
    if(borrower=="Yes")
	{
	if($("#COOA_CUAMNO").prop('checked') == true){
		$("#COOA_UAMNO").val('');
		$("#COOA_UAMNO").removeClass("COOAMndtry");
		$("#COOA_UAMNO").next().find(".MndtryAstr").html("");
		$("#COOA_UAMNO").attr("disabled",true);
		$(".veri").hide();
	}
	else {

		$("#COOA_UAMNO").addClass("COOAMndtry");
		$("#COOA_UAMNO").next().find(".MndtryAstr").html("*");
		$("#COOA_UAMNO").attr("disabled",false);
		$(".veri").show();
	}
	if ($("#COOA_UDYAMVERI").val()=='Verified')
		{
		$("#COOA_CUAMNO").attr("disabled",true)
		}
		else
		{
		$("#COOA_CUAMNO").attr("disabled",false)
		}
	}
	
}
 function GetSec()
 {
	var xml=UI_getdata("TypeSec","","","","","LSW_SGETFINANCIALVAL");
	
    $("#COOA_SECTOR").html("");
	$("#COOA_SECTOR").append($(xml).find("RESULT").html());
	$("#COOA_SECTOR").material_select(); 
}
function ChkProf()
{
	var Mar=$("#COBI_MARITSTUS").val();
	
	var Gen=$("input[name='COBI_GENTER']:checked"). val();
	if((Mar=='Single') || Gen=='Male')
	{
		  
		 $(".PROFILEVAL").find('.HSWF').attr('disabled',true)
	     $("span:contains('Housewife')").parent().addClass('HSWF');
		 $(".HSWF").addClass('disabled');
		 $("#COBI_NPROFILE").val('')		 
		 $("#COBI_NPROFILE").material_select(); 

	
	}
	else{
		 
		 $(".PROFILEVAL").find('.HSWF').attr('disabled',false)
	     $("span:contains('Housewife')").parent().addClass('HSWF');
		 $(".HSWF").removeClass('disabled');
		 $("#COBI_NPROFILE").val('')
	     $("#COBI_NPROFILE").material_select(); 
	

	}
}
function Chkresi()
{
	var resi=$("#COAI_YEAROFRESID").val()
	var month=$("#COAI_MONTHS").val()
		
	var perresi=$("#COAI_PERMYEAROFRESID").val()
	var permonth=$("#COAI_PERMMONTHS").val()
	
	var orgresi=$("#COAI_ORGYEAROFRESID").val()
	var orgmonth=$("#COAI_ORGMONTHS").val()
	
	if(resi=="0" && month=="0")
	{
		alert("In year of residence is 0 then at least enter month should be greater than 0 ");
		
		$("#COAI_MONTHS").val(''); 
		$("#COAI_MONTHS").material_select(); 
	}
	if(perresi=="0" && permonth=="0")
	{
		alert("In year of residence is 0 then at least enter month should be greater than 0 ");
		$("#COAI_PERMMONTHS").val(''); 
		$("#COAI_PERMMONTHS").material_select(); 
	}
	if(orgresi=="0" && orgmonth=="0")
	{
		alert("In year of residence is 0 then at least enter month should be greater than 0 ");
		$("#COAI_ORGMONTHS").val(''); 
		$("#COAI_ORGMONTHS").material_select(); 
	}
}


function Chkdirect()
{
	var dir=$("input[name='COBI_PANTYPE']:checked"). val();
if($("#COBI_PANVERIFY").val()=="")
	{	
	if(dir=="Direct")
	{
		
		$("#COBI_PAN").addClass("COBIMndtry");	
		$("#COBI_PAN").next().find(".MndtryAstr").html("*");
		$(".TYP").show();
		$(".UPLD").hide();
	}
	else if(dir=="OCR")
	{
		
		$("#COBI_PAN").removeClass("COBIMndtry");	
		$("#COBI_PAN").next().find(".MndtryAstr").html("");
		$(".TYP").hide();
		//$("#CBSI_PAN").val("");
		$("#COBI_PAN").removeClass('active');
		$(".UPLD").show();
	}
}
	else
	{
		$(".TYP").show();
		$(".UPLD").show();
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
	if(KYCName == "PAN"|| "Aadhar"|| "COBI_FORM60A")
	{
		if($("#COBI_CUSTYPE").val()=='Individual')
		   {
			  var ADDRTYPE1 = "ADDRESSPROOF"
		   }
		   else
		   {
			var ADDRTYPE1 = "Others"   
		   }
		   
		   var xmlDocSize=UI_getdata($("#COBI_CUSTYPE").val(),ADDRTYPE1,"","","","LSW_SGETDOCSIZELST")
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