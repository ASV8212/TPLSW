function Pindetls(idval,state,city)
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
$(idval).val('');
$('#'+state).next().removeClass('active');
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
$(idval).val('');
$('#'+city).next().removeClass('active');
}
}


function GetCustomerName()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES")
	var CusName=$(xml).find('RESULT').html();	
	$("#LPDT_PROPOWNER").append(CusName)
	$("#LPDT_PERSONS").append(CusName)
	
	if($("#DMY7").val().split('|')[8]=="ML01")
	{
		$("#LPDT_PROPUSAGE option[value='"+$(xml).find('PROPUSAGE').text()+"']").attr("selected","selected")
		$("#LPDT_PROPUSAGE").material_select(); 

  var LonPurpose = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],$("#LPDT_PROPUSAGE").val(),"","","LSW_SGETPRODVAL");

	$("#LPDT_PROPTYPE").append($(LonPurpose).find("RESULT").html());
	$("#LPDT_PROPTYPE").material_select();		
		
		  $("#LPDT_PROPTYPE option[value='"+$(xml).find('PROPTYPE').text()+"']").attr("selected","selected")
		  $("#LPDT_PROPTYPE").material_select(); 
	}
	else
	{
	  
    var LonPurpose = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],"","","","LSW_SGETPRODVAL");

	$("#LPDT_PROPTYPE").append($(LonPurpose).find("RESULT").html());
	$("#LPDT_PROPTYPE").material_select();	
	
	}
	//$('#LPDT_PROPOWNER').materialSelect();
    //$('#LPDT_PERSONS').materialSelect();
}


function CheckChkbocVal()
{
	var checkval=$('#LPDT_SAMADDR').prop('checked');
	
	if(checkval==true)
		{
		  //$('#LPDT_PERSONS').attr('selected','selected');
		  //$(".ADDAC").val('');
		  $(".ADDDET").show();
		  $(".ADDAC").attr('disabled',true);
		  //$(".ADDAL").removeClass('active');
		  //$('input[name="LPDT_ADDRTYPE"]').prop('checked', false);
		 // $('#LPDT_PERSONS').material_select();
		}
		else
		{
			  $(".ADDDET").hide();
			  $(".ADDAC").attr('disabled',false);
		}
	
}

function getPersonsAddrs()
{
	var checkval=$('#LPDT_SAMADDR').prop('checked');
	
	
	if(checkval==true)
		{
		var PersonID=$("#LPDT_PERSONS").val();
		
		if(PersonID == "")
	      {
			alert('Select Person Name')
			return false
	      }
		else
			{
	      var AddrType=$("input[name='LPDT_ADDRTYPE']:checked"). val();
	      var FieldClass="COLAD"
	     
	      var xml=UI_getdata(PersonID,AddrType,$("#PrcsID").val(),"","","LSW_SGETPRPTYADDRES")
	
	      var n = document.getElementsByClassName(FieldClass);
          for (i = 0; i < n.length; i++) {
             name = document.getElementsByClassName(FieldClass).item(i).id
             var val = $(xml).find(name).text();
             $("#"+name).val('')
                if (val != "") {
        	      name = document.getElementsByClassName(FieldClass).item(i).id
        	      document.getElementById(name).value = val;
        	      $("#"+name).attr('disabled',true);
        	      $(".ADDAL").addClass('active');
                }
				else
  	    	    {
  	    	      $("#"+name).attr('disabled',false);
  	    	    }
              }
			}
		}
	    else
		{
	    	$(".COLAD").val('');
	    	$(".ADDAL").removeClass('active');
		}
}



function CheckPropOwner()
{
	var PropOwner=$("input[name='LPDT_PROPOWNSHIP']:checked"). val();
	if(PropOwner=="Sole")
		{
		   $("#LPDT_PROPOWNER").removeAttr('multiple')
		   $('#LPDT_PROPOWNER').val('');
		   $('#LPDT_PROPOWNER').material_select();
		   getCusNames()
         }
	else
		{
			$('#LPDT_PROPOWNER').val('');
		 $('#LPDT_PROPOWNER').material_select("destroy");
		 $("#LPDT_PROPOWNER").attr("multiple", 'multiple');
		 $('#LPDT_PROPOWNER').material_select();
		 $("#LPDT_CUSTNAME").val('')
		}
}

function CheckPropOwner1()
{
	var PropOwner=$("input[name='LPDT_PROPOWNSHIP']:checked"). val();
	if(PropOwner=="Sole")
		{
		   $("#LPDT_PROPOWNER").removeAttr('multiple')
		   
		   $('#LPDT_PROPOWNER').material_select();
		   getCusNames()
         }
	else
		{
		 
		 $('#LPDT_PROPOWNER').material_select("destroy");
		 $("#LPDT_PROPOWNER").attr("multiple", 'multiple');
		 $('#LPDT_PROPOWNER').material_select();
		 //$("#LPDT_CUSTNAME").val('')
		}
}

function ChkPerson()
{
	var checkval=$('#LPDT_SAMADDR').prop('checked');	
	if(checkval==true)
		{
		 $("#LPDT_PERSONS").addClass('LPDTMndtry');
		 $("#LPDT_PERSONS").parent().next().find(".MndtryAstr").html("*");
          $(".ADDDET").show();
		  $(".ADDAC").attr("disabled",true);
		  $(".ADDAC").val('');
          var element = document.getElementById("ADDRADIO");
		  element.classList.add("LPDTMndtry");
		}
	else
		{
		 $("#LPDT_PERSONS").removeClass('LPDTMndtry');
		 $("#LPDT_PERSONS").parent().next().find(".MndtryAstr").html("");
		 $("#LPDT_PERSONS").val('');
		 $("#LPDT_PERSONS").material_select();
		  $(".ADDDET").hide();
		  $(".ADDAC").val('');
		  $(".ADDAC").next().removeClass('active');
		  $(".ADDAC").attr("disabled",false);
		  var element = document.getElementById("ADDRADIO");
		  element.classList.remove("LPDTMndtry");
		    $('input:radio[name=LPDT_ADDRTYPE]')[0].checked = false;
	    	$('input:radio[name=LPDT_ADDRTYPE]')[1].checked = false;
	    	$('input:radio[name=LPDT_ADDRTYPE]')[2].checked = false;
			$("#LPDT_YEAATCITY").val('');
			$("#LPDT_YEAATCITY").next().removeClass('active');
		}
}


function getaddresstype()
{
	var PersonID=$("#LPDT_PERSONS").val();
    var xml=UI_getdata(PersonID,"","","","","LSW_SGETCUSTYPE")
    var CUSTYPE=$(xml).find('CUSTYPE').text()
    var CUSPROFILETYPE=$(xml).find('PROFILE').text()
    if(CUSTYPE=="Non-Individual")
    	{
    	$(".RETIADD").show();
         $(".PROADD").hide();
       	 $(".PERCHG").val('');
         $(".PERCHG").next().removeClass('active');
         $('input[name="LPDT_ADDRTYPE"]').prop('checked', false);
    	}
    else
    	{
    	$(".RETIADD").show();
         $(".PROADD").show();
    	 $(".PERCHG").val('');
    	 $(".PERCHG").next().removeClass('active');
    	 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false);
     	if(CUSPROFILETYPE=="NO")
		{
     		$(".RETIADD").hide();
     		$(".PERCHG").val('');
         	$(".PERCHG").next().removeClass('active');
     		  
		
		}
    	 
    	 
    	}
    
}

function getaddresstypeonload()
{
	
	var PersonID=$("#LPDT_PERSONS").val();
    var xml=UI_getdata(PersonID,"","","","","LSW_SGETCUSTYPE")
    var CUSTYPE=$(xml).find('CUSTYPE').text()
     var CUSPROFILETYPE=$(xml).find('PROFILE').text()
    if(CUSTYPE=="Non-Individual")
    	{
        $(".PROADD").hide();
        }
    else
    	{
    	 $(".PROADD").show();
    	   if(CUSPROFILETYPE=="NO")
    		{
         		$(".RETIADD").hide();
            }
    	 
         }
    
}

function getCusNames()
{
	
	var PropOwner=$("input[name='LPDT_PROPOWNSHIP']:checked"). val();
	if(PropOwner=="Sole")
		{
		 var CusID=$("#LPDT_PROPOWNER").val()
		 
		 var xml=UI_getdata(CusID,"","","","","LSW_SGETCUSNAMES")
	    var CUSNAME=$(xml).find('PERSONSNAME').text()
		 $("#LPDT_CUSTNAME").val(CUSNAME)
		
		}
	else if(PropOwner=="Joint")
	{
	
		
var k=	$("#LPDT_PROPOWNER").val().length	
var CUSTOMERNAMES=""
 for(i=0;i<k;i++)
	 {
	 var CusID=$("#LPDT_PROPOWNER").val()[i]
	 var xml=UI_getdata(CusID,"","","","","LSW_SGETCUSNAMES")
	 var CUSNAME=$(xml).find('PERSONSNAME').text()
	 if(CUSNAME!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSNAME
		 }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       $("#LPDT_CUSTNAME").val(CUSTOMERNAMES)
	}

}

function GetOwnerCusId()
{
	if($("input[name='LPDT_PROPOWNSHIP']:checked"). val()=="Joint")
	{
	var k=	$("#LPDT_PROPOWNER").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#LPDT_PROPOWNER").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1	      
         }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')     
       $("#LPDT_OWNERCUSID").val(CUSTOMERNAMES)     
	}
	else
	{
		$("#LPDT_OWNERCUSID").val($("#LPDT_PROPOWNER").val());
	}
}

function GetPropType()
{
	var LonPurpose = UI_getdata("PROPTYPE",$("#DMY7").val().split('|')[8],$("#LPDT_PROPUSAGE").val(),"","","LSW_SGETPRODVAL");

    $("#LPDT_PROPTYPE").html("");
	$("#LPDT_PROPTYPE").append($(LonPurpose).find("RESULT").html());
	$("#LPDT_PROPTYPE").material_select();
}

function Getsectype()
{
	 
 $("#LPDT_SECURITYTYPE").val('');
	$("#LPDT_SECURITYTYPE").find('option').remove()
	$("#LPDT_SECURITYTYPE").material_select("destroy");
	$("#LPDT_SECURITYTYPE").material_select(); 
   var sectype=UI_getdata("SECURITYTYPE",$("#VERTICAL").val(),"","","","LSW_SGETPRODVAL")
	 $("#LPDT_SECURITYTYPE").append($(sectype).find("RESULT").html());
	 $("#LPDT_SECURITYTYPE").material_select();
 
}


function CheckSecurityType()
 {
	  
	
var securitytype=$("#LPDT_SECURITYTYPE").val()

$(".PROPDISB").show()
$(".PROPDISBM").addClass('LPDTMndtry');
$(".PROENABLE").hide()
$(".ADDFIELDS").show()
$(".ADDFIELDSMND").addClass('LPDTMndtry');

 $(".DEPOSITM").removeClass('LPDTMndtry');
  $(".MachineMANT").removeClass('LPDTMndtry');
  $(".GoldMANT").removeClass('LPDTMndtry');
   $(".GURANTYMANT").removeClass('LPDTMndtry');
    $(".SECURITYMANT").removeClass('LPDTMndtry');

	
 
 if(securitytype=="Vehicles")
 { 
         $(".vehicle").show();
		 $(".vehile").addClass('LPDTMndtry');    
		 $(".machinery").hide(); 
		   $(".ADDACTMAC").removeClass('active');
		DOCDELETE1("MachineryDoc","LPDT_MACHINERYDOC","Upload Machinery Document");
	     $("#LPDT_MACHINERYDOC").removeClass("LPDTMndtry");
		// $("#LPDT_MACHINERYDOC").val('');
		 $(".MEMVAL").val('');
		 $(".gold").hide();
		 $(".ADDACTGOL").removeClass('active');
		 
		 $("#LPDT_RC").addClass('LPDTMndtry');
		 $("#LPDT_FC").addClass('LPDTMndtry');
		 $(".GEMVAL").val('');
		$(".deposit").hide();
		 $(".DEMVAL").val(''); 
		 $(".ADDACTDEP").removeClass('active');
		$(".guarentee").hide();
		$(".GUEMVAL").val('');
		 $(".ADDACTGUA").removeClass('active');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".Hypothecation").hide();
		$("#LPDT_HLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_HSECAMT").removeClass("LPDTMndtry");
		$(".Cashcollateral").hide();
		$("#LPDT_CLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_CSECAMT").removeClass("LPDTMndtry");
		$(".SEMVAL").val('');
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		 $(".ADDACTSEC").removeClass('active');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
		     $(".vehicle").parent().next().find(".MndtryAstr").html("*");
		  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
		  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
		  
		  $(".ADDFIELDS").hide()
          $(".ADDFIELDSMND").removeClass('LPDTMndtry');
		  	   $(".VECH").show();
		   $(".VECHID").hide()
		  
		  
		  
		  
/* 		   $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false); */
		 
	
	
 }
 	else if(securitytype=="Bills")
		{ 
			$(".CHKBX").hide();
		}
		else if(securitytype=="Goods/Produce")
		{ 
			$(".CHKBX").hide();
		}
		else if(securitytype=="Machinery")
			{  	 
		
		 $(".MachineMANT").addClass('LPDTMndtry');
		   $(".ADDACTVEC").removeClass('active');
		 
		   $("#LPDT_MACHINERYDOC").addClass("LPDTMndtry");
           $(".machinery").show(); 
		   $(".vehile").removeClass('LPDTMndtry'); 
		  $(".vehicle").hide();
		  $("#LPDT_RC").removeClass("LPDTMndtry");
		  $("#LPDT_FC").removeClass("LPDTMndtry");
		 $(".VEMVAL").val('');
		 $(".VEMVAL").find("select").material_select();
		 $(".gold").hide();
		 $(".ADDACTGOL").removeClass('active');
		 $(".GEMVAL").val('');
		$(".deposit").hide();
		 $(".DEMVAL").val('');
		 $(".ADDACTDEP").removeClass('active');
		$(".guarentee").hide();
		$(".GUEMVAL").val('');
		 $(".ADDACTGUA").removeClass('active');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".Hypothecation").hide();
		$("#LPDT_HLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_HSECAMT").removeClass("LPDTMndtry");
		$(".Cashcollateral").hide();
		$("#LPDT_CLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_CSECAMT").removeClass("LPDTMndtry");
		$(".SEMVAL").val('');
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		 $(".ADDACTSEC").removeClass('active');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
              $(".vehicle").parent().next().find(".MndtryAstr").html("");
			   $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
			   		  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
					  
		 $(".ADDFIELDS").hide()
          $(".ADDFIELDSMND").removeClass('LPDTMndtry');
		  
		  
/* 		   $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false);
		  */
		 
		  
		  
           }
		else if(securitytype=="Gold")
		{
			
			$(".GoldMANT").addClass('LPDTMndtry');
			$(".ADDACTVEC").removeClass('active');
			 
			   $(".gold").show();
			    $(".vehile").removeClass('LPDTMndtry');
				
			    $(".vehicle").hide();
				$("#LPDT_RC").removeClass("LPDTMndtry");
		  $("#LPDT_FC").removeClass("LPDTMndtry");
				 $(".VEMVAL").val('');
		 $(".VEMVAL").find("select").material_select();
		 $(".machinery").hide();
		   $(".ADDACTMAC").removeClass('active');
		 DOCDELETE1("MachineryDoc","LPDT_MACHINERYDOC","Upload Machinery Document");
	     $("#LPDT_MACHINERYDOC").removeClass("LPDTMndtry");
		 // $("#LPDT_MACHINERYDOC").val('');
		 $(".MEMVAL").val('');
		$(".deposit").hide();
		 $(".DEMVAL").val('');
		 $(".ADDACTDEP").removeClass('active');
		$(".guarentee").hide();
		$(".GUEMVAL").val('');
		 $(".ADDACTGUA").removeClass('active');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".Hypothecation").hide();
		$("#LPDT_HLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_HSECAMT").removeClass("LPDTMndtry");
		$(".Cashcollateral").hide();
		$("#LPDT_CLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_CSECAMT").removeClass("LPDTMndtry");
		$(".ADDFIELDS").hide();
		 $(".ADDACTSEC").removeClass('active');
		$(".ADDFIELDSMND").removeClass('LPDTMndtry');
		$(".SEMVAL").val('');
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
				  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
			     $(".vehicle").parent().next().find(".MndtryAstr").html("");   
	  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
	  
	  
	  
	  
/* 	    $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false); */
		 
		 
		}
		else if(securitytype=="Deposits - FD Lien / SD")
		{
			
			 //$(".DEPOSITM").addClass('LPDTMndtry');
			$(".ADDACTVEC").removeClass('active');
			 
			   $(".deposit").show();
			    $(".vehile").removeClass('LPDTMndtry');
			    $(".vehicle").hide();
				$("#LPDT_RC").removeClass("LPDTMndtry");
		  $("#LPDT_FC").removeClass("LPDTMndtry");
				 $(".VEMVAL").val('');
		 $(".VEMVAL").find("select").material_select();
		 $(".machinery").hide();
		   $(".ADDACTMAC").removeClass('active');
		 DOCDELETE1("MachineryDoc","LPDT_MACHINERYDOC","Upload Machinery Document");
	     $("#LPDT_MACHINERYDOC").removeClass("LPDTMndtry");
		//  $("#LPDT_MACHINERYDOC").val('');
		 $(".MEMVAL").val('');
		 $(".gold").hide();
		 $(".ADDACTGOL").removeClass('active');
		 $(".GEMVAL").val('');
		  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
		$(".guarentee").hide();
		$(".GUEMVAL").val('');
		 $(".ADDACTGUA").removeClass('active');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".Hypothecation").hide();
		$("#LPDT_HLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_HSECAMT").removeClass("LPDTMndtry");
		$(".Cashcollateral").hide();
		$("#LPDT_CLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_CSECAMT").removeClass("LPDTMndtry");
		$(".SEMVAL").val('');
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		 $(".ADDACTSEC").removeClass('active');
		$(".ADDFIELDS").hide();
		$(".ADDFIELDSMND").removeClass('LPDTMndtry');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
			    		  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
		      $(".vehicle").parent().next().find(".MndtryAstr").html("");
			  
			  
			  
/* 			  $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false); */
		 
	 
		}
		 
		else if(securitytype=="Guarantees")
		{ 
	
	 $(".GURANTYMANT").addClass('LPDTMndtry');
	 
	 
	 
	$(".ADDACTVEC").removeClass('active');
			   $(".guarentee").show();
			    $(".vehile").removeClass('LPDTMndtry');
			    $("#LPDT_TYPEOFGU").addClass('LPDTMndtry');
			    $(".vehicle").hide();
				$("#LPDT_RC").removeClass("LPDTMndtry");
		  $("#LPDT_FC").removeClass("LPDTMndtry");
				 $(".VEMVAL").val('');
		 $(".VEMVAL").find("select").material_select();
		 $(".machinery").hide();
		   $(".ADDACTMAC").removeClass('active');
		DOCDELETE1("MachineryDoc","LPDT_MACHINERYDOC","Upload Machinery Document");
	     $("#LPDT_MACHINERYDOC").removeClass("LPDTMndtry");
		 // $("#LPDT_MACHINERYDOC").val('');
		 $(".MEMVAL").val('');
		 $(".gold").hide();
		   $(".ADDACTGOL").removeClass('active');
		 $(".GEMVAL").val('');
		$(".deposit").hide();
			$(".Hypothecation").hide();
			$("#LPDT_HLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_HSECAMT").removeClass("LPDTMndtry");
			$(".Cashcollateral").hide();
			$("#LPDT_CLOANAMT").removeClass("LPDTMndtry");
			$("#LPDT_CSECAMT").removeClass("LPDTMndtry");
		 $(".DEMVAL").val('');
	   $(".ADDACTDEP").removeClass('active');
		$(".securities").hide();
		$(".SEMVAL").val('');
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		 $(".ADDACTSEC").removeClass('active');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
		        $(".vehicle").parent().next().find(".MndtryAstr").html("");
	  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
	  
	   $(".ADDFIELDS").hide()
          $(".ADDFIELDSMND").removeClass('LPDTMndtry');
		  
		  
		  
		   // $(".EMVALADD").val('');
		 // $(".ACTVALADD").removeClass('active');
		 // $(".EMVALADD").find("select").material_select();
		 // $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 // $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 // $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 // $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 // $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 // $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 // $("#LPDT_SAMADDR").prop('checked', false);
		 
		 
		}
		else if(securitytype=="Securities")
		{ 
	
	$(".SECURITYMANT").addClass('LPDTMndtry');
	
	
			$(".ADDACTVEC").removeClass('active');
			$(".securities").show();
			$(".vehile").removeClass('LPDTMndtry');
			// $("#LPDT_STYPESEC").addClass('LPDTMndtry');
		    $(".vehicle").hide();
			$("#LPDT_RC").removeClass("LPDTMndtry");
		  $("#LPDT_FC").removeClass("LPDTMndtry");
		    $(".VEMVAL").val('');
		    $(".VEMVAL").find("select").material_select();
		    $(".machinery").hide();
			$(".Hypothecation").hide();
			$("#LPDT_HLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_HSECAMT").removeClass("LPDTMndtry");
			$(".Cashcollateral").hide();
			$("#LPDT_CLOANAMT").removeClass("LPDTMndtry");
			$("#LPDT_CSECAMT").removeClass("LPDTMndtry");
		    $(".ADDACTMAC").removeClass('active');
		    DOCDELETE1("MachineryDoc","LPDT_MACHINERYDOC","Upload Machinery Document");
	        $("#LPDT_MACHINERYDOC").removeClass("LPDTMndtry");
		    //$("#LPDT_MACHINERYDOC").val('');
		    $(".MEMVAL").val('');
		    $(".gold").hide();
		    $(".ADDACTGOL").removeClass('active');
		    $(".GEMVAL").val('');
		    $(".deposit").hide();
		    $(".DEMVAL").val('');
		    $(".ADDACTDEP").removeClass('active');
		    $(".guarentee").hide();
		    $(".GUEMVAL").val('');
			$(".CASVAL").val('');
			$(".HYPVAL").val('');
		    $(".ADDACTGUA").removeClass('active');
		    $('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
			 //  $("#LPDT_STYPESEC").addClass('LPDTMndtry'); 
		 	$(".vehicle").parent().next().find(".MndtryAstr").html("");	  
		    $(".ADDFIELDS").hide()
            $(".ADDFIELDSMND").removeClass('LPDTMndtry');
	 
	 
	 
/* 	  $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false); */
		 
		 
		}
		else if(securitytype=="Cash collateral")
		{
			$(".SECURITYMANT").removeClass('LPDTMndtry');
			$(".ADDACTVEC").removeClass('active');
			$(".securities").hide();
			$(".Cashcollateral").show();
			$(".Hypothecation").hide();
			$("#LPDT_HLOANAMT").removeClass("LPDTMndtry");
		$("#LPDT_HSECAMT").removeClass("LPDTMndtry");
			$(".vehile").removeClass('LPDTMndtry');
			// $("#LPDT_STYPESEC").addClass('LPDTMndtry');
		    $(".vehicle").hide();
			$("#LPDT_RC").removeClass("LPDTMndtry");
		  $("#LPDT_FC").removeClass("LPDTMndtry");
		    $(".VEMVAL").val('');
		    $(".VEMVAL").find("select").material_select();
		    $(".machinery").hide();
		    $(".ADDACTMAC").removeClass('active');
		    DOCDELETE1("MachineryDoc","LPDT_MACHINERYDOC","Upload Machinery Document");
	        $("#LPDT_MACHINERYDOC").removeClass("LPDTMndtry");
		    //$("#LPDT_MACHINERYDOC").val('');
		    $(".MEMVAL").val('');
		    $(".gold").hide();
		    $(".ADDACTGOL").removeClass('active');
		    $(".GEMVAL").val('');
		    $(".deposit").hide();
		    $(".DEMVAL").val('');
		    $(".ADDACTDEP").removeClass('active');
		    $(".guarentee").hide();
		    $(".GUEMVAL").val('');
			$(".SEMVAL").val('');
			$(".HYPVAL").val('');
		    $(".ADDACTGUA").removeClass('active');
		    $('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
			 //  $("#LPDT_STYPESEC").addClass('LPDTMndtry'); 
		 	$(".vehicle").parent().next().find(".MndtryAstr").html("");	  
		    $(".ADDFIELDS").hide()
            $(".ADDFIELDSMND").removeClass('LPDTMndtry');
		}
		else if(securitytype=="Hypothecation - Stocks/Current Assets")
		{
			$(".SECURITYMANT").removeClass('LPDTMndtry');
			$(".ADDACTVEC").removeClass('active');
			$(".securities").hide();
			$(".Cashcollateral").hide();
			$("#LPDT_CLOANAMT").removeClass("LPDTMndtry");
			$("#LPDT_CSECAMT").removeClass("LPDTMndtry");
			$(".Hypothecation").show();
			
			$(".CASVAL").val('');
			
			$(".vehile").removeClass('LPDTMndtry');
			// $("#LPDT_STYPESEC").addClass('LPDTMndtry');
		    $(".vehicle").hide();
			$("#LPDT_RC").removeClass("LPDTMndtry");
		  $("#LPDT_FC").removeClass("LPDTMndtry");
		    $(".VEMVAL").val('');
		    $(".VEMVAL").find("select").material_select();
		    $(".machinery").hide();
		    $(".ADDACTMAC").removeClass('active');
		    DOCDELETE1("MachineryDoc","LPDT_MACHINERYDOC","Upload Machinery Document");
	        $("#LPDT_MACHINERYDOC").removeClass("LPDTMndtry");
		    //$("#LPDT_MACHINERYDOC").val('');
		    $(".MEMVAL").val('');
		    $(".gold").hide();
		    $(".ADDACTGOL").removeClass('active');
		    $(".GEMVAL").val('');
		    $(".deposit").hide();
		    $(".DEMVAL").val('');
		    $(".ADDACTDEP").removeClass('active');
		    $(".guarentee").hide();
		    $(".GUEMVAL").val('');
			$(".SEMVAL").val('');
		    $(".ADDACTGUA").removeClass('active');
		    $('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
			 //  $("#LPDT_STYPESEC").addClass('LPDTMndtry'); 
		 	$(".vehicle").parent().next().find(".MndtryAstr").html("");	  
		    $(".ADDFIELDS").hide()
            $(".ADDFIELDSMND").removeClass('LPDTMndtry');
		}
		/* else if(securitytype=="Property")
		{
			    $(".PROENABLE").show()
			   $(".PROPDISB").hide()
			    $(".PROPDISBM").removeClass('LPDTMndtry');
			   $(".property").show();
			    $(".vehile").removeClass('LPDTMndtry');
			    $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
			    $(".vehicle").hide();
				 $(".VEMVAL").val('');
		 $(".VEMVAL").find("select").material_select();
		 $(".machinery").hide();
		  $("#LPDT_MACHINERYDOC").val('');
		 $(".MEMVAL").val('');
		 $(".gold").hide();
		 $(".GEMVAL").val('');
		$(".deposit").hide();
		 $(".DEMVAL").val('');
			$(".guarentee").hide();
		$(".GUEMVAL").val('');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".SEMVAL").val('');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
		        $(".vehicle").parent().next().find(".MndtryAstr").html("");
	  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
		} */
		 
 else
 {
	 $(".ADDACTVEC").removeClass('active');
	 $('#LPDT_SECURITYTYPE').material_select();
		 $(".vehicle").hide();
		 $("#LPDT_RC").removeClass("LPDTMndtry");
		  $("#LPDT_FC").removeClass("LPDTMndtry");
		    $(".VEMVAL").val('');
		 $(".VEMVAL").find("select").material_select();
		 $(".machinery").hide();
		   $(".ADDACTMAC").removeClass('active');
		 
		 DOCDELETE1("MachineryDoc","LPDT_MACHINERYDOC","Upload Machinery Document");
	     $("#LPDT_MACHINERYDOC").removeClass("LPDTMndtry");
		  //$("#LPDT_MACHINERYDOC").val('');
		 $(".MEMVAL").val('');
		 $(".gold").hide();
		   $(".ADDACTGOL").removeClass('active');
		 $(".GEMVAL").val('');
		$(".deposit").hide();
		 $(".DEMVAL").val('');
		 $(".ADDACTDEP").removeClass('active');
		
		$(".guarentee").hide();
		 $(".ADDACTGUA").removeClass('active');
		
		$(".GUEMVAL").val('');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".SEMVAL").val('');
		 $(".ADDACTSEC").removeClass('active');
		 $(".CASVAL").val('');
		$(".HYPVAL").val('');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
		 $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
		  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
		$(".vehile").removeClass('LPDTMndtry');
         $(".vehicle").parent().next().find(".MndtryAstr").html("");
		 
		 
		 $("#LPDT_RC").removeClass('LPDTMndtry');
		 $("#LPDT_FC").removeClass('LPDTMndtry');
         //$("#CBSI_UAMNO").parent().next().find(".MndtryAstr").html("");
		 
		 
/* 		  $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false); */
		 
		 
 }
 
 }
function CheckChange()
{
var securitytype=$("#LPDT_SECURITYTYPE").val()

	if(securitytype=="Vehicles")
	{ 
		 $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false);
	}
	else if(securitytype=="Machinery")
	{  
		 $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false);
	}
	else if(securitytype=="Gold")
	{
		 $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false);
	}
	else if(securitytype=="Deposits - FD Lien / SD")
	{
		 $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false);
	}
	else if(securitytype=="Guarantees")
	{ 
		 $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false);
	}
	else if(securitytype=="Securities")
	{
		 $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();	
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false);

	}
	else
	{	 
		 $(".EMVALADD").val('');
		 $(".ACTVALADD").removeClass('active');
		 $(".EMVALADD").find("select").material_select();		 	
		 $('input[name="LPDT_SECCATEGORY"]').prop('checked', false); 
		 $('input[name="LPDT_PROPTITLE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPOWNSHIP"]').prop('checked', false); 
		 $('input[name="LPDT_GRAMMET"]').prop('checked', false); 
		 $('input[name="LPDT_ADDRTYPE"]').prop('checked', false); 
		 $('input[name="LPDT_PROPERTYDOCUPLOAD"]').prop('checked', false); 
		 $("#LPDT_PROPDOCCOLL").prop('checked', false);
		 $("#LPDT_SAMADDR").prop('checked', false);
		 $(".PropertyDoc").hide();
		 DOCDELETE("PropertyDoc","LPDT_PROPERTYDOC","Upload Property Document");
	
	}
 
}
 
 
 
 
function DOCDELETE(Type,Attachment,ULABEL)
{	

 
	 $("#"+Attachment+"UPLOAD").css("display", "block")
	 $("."+Attachment).attr('disabled',false);
	 $("#"+Attachment).val('');
	// $("#"+Attachment).removeClass('DOCMndtry');
	 $("."+Type+"view").hide()
	  $("."+Type).find('table').next().text(''); 
	 $("."+Type).hide();
	 $("."+Type).find('table').next().append("<span class='name'>"+ULABEL+'</span>');
	 
	 
	
	 
  
}
function DOCDELETE1(Type,Attachment,ULABEL)
{	


		 $("#"+Attachment+"UPLOAD").css("display", "block")
	 $("."+Attachment).attr('disabled',false);
	 $("#"+Attachment).val('');
	// $("#"+Attachment).removeClass('DOCMndtry');
	$(".name").closest(".PARENTCLASS").find(".name").text(ULABEL);
	  //$("."+Type).find('table').next().text(ULABEL); 
	 $("."+Type).hide();
	  $("."+Type+"view").hide()
	// $("."+Type).find('table').next().append("<span class='name2'>"+ULABEL+'</span>');
	 
	
	 
  
}

function DocView(){
	
	if($("#LPDT_PROPDOCCOLL").prop('checked') == true){
		
	$(".PropertyDoc").show();
	$("#LPDT_PROPERTYDOC").addClass("LPDTMndtry");
	//$(".PropertyDoc").find('table').find('span').text("Upload Property Document");
	}
	else {
		$("#LPDT_PROPERTYDOC").removeClass("LPDTMndtry");
		$(".PropertyDoc").hide();
		DOCDELETE("PropertyDoc","LPDT_PROPERTYDOC","Upload Property Document");
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
    var FormName= 'Property';
    var CusID=$('#LPDT_PROPERTYNO').val()
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
		  var ADDRTYPE = "ADDRESSPROOF"
	   }
	   else
	   {
		var ADDRTYPE = "Others"   
		   
	   }
		/*var xml=UI_getdata(FileType,FileSize,Filename,ADDRTYPE,$("#COBI_CUSTYPE").val()+'|'+$("#PrcsID").val(),"LSW_SGETKYCDOCUMNTTYPE")
		var FileAccept=$(xml).find('RESULT').text()
		
		
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


function Getcusid()
{

	var id=$("input[name='LPDT_PROPOWNSHIP']:checked"). val();
	
     if(id=="Sole")
	 {
		   var proname = $("#LPDT_PERSONS").val();
           var pername = $("#LPDT_PROPOWNER").val();
           if ((proname) !== (pername))
		   {
          alert('Property Owner name should be same as Person name');
          return false;
  
           }
	 }
	 else if(id=="Joint")
	 {
		var ownerarray = $("#LPDT_PROPOWNER").val()
		if(!ownerarray.includes($("#LPDT_PERSONS").val()))
		{
			alert('Property Owner name should be same as Person name');
			return false;
		}
		 
	 }
 
	 
		
	

}
function GetCategory()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");

	var Pro = UI_getdata("Category",$(State).find("STATE").text(),"","","","LSW_SGETPRODVAL");
	
	$("#LPDT_VEHILECLASS").html("")
	$("#LPDT_VEHILECLASS").append($(Pro).find("RESULT").html());	
}


function GetBodyTy()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");

	var Pro1 = UI_getdata("BodyType",$(State).find("STATE").text(),$("#LPDT_VEHILECLASS").val(),"","","LSW_SGETPRODVAL");
	
	$("#LPDT_VBODYTYPE").html('');
	$("#LPDT_VBODYTYPE").append($(Pro1).find("RESULT").html());	
	$("#LPDT_VBODYTYPE").material_select();
	
	GetAssetAmt()
}


function GetManufacture()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");

	var Pro2 = UI_getdata("Manufacturer",$(State).find("STATE").text(),$("#LPDT_VEHILECLASS").val(),$("#LPDT_VBODYTYPE").val(),"","LSW_SGETPRODVAL");
	
	$("#LPDT_VMANUFACT").html("")
	$("#LPDT_VMANUFACT").append($(Pro2).find("RESULT").html());	
	$("#LPDT_VMANUFACT").material_select();
	
	GetAssetAmt()
}

function GetModel()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");

	var Pro3 = UI_getdata("Model",$(State).find("STATE").text(),$("#LPDT_VEHILECLASS").val(),$("#LPDT_VBODYTYPE").val(),$("#LPDT_VMANUFACT").val(),"LSW_SGETPRODVAL");
	
	$("#LPDT_VMODEL").html("")
	$("#LPDT_VMODEL").append($(Pro3).find("RESULT").html());	
	$("#LPDT_VMODEL").material_select();
	
	GetAssetAmt();
}

function GetGrade()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");

	var Pro4 = UI_getdata("Grade",$(State).find("STATE").text(),$("#LPDT_VEHILECLASS").val(),$("#LPDT_VBODYTYPE").val(),$("#LPDT_VMANUFACT").val()+'|'+$("#LPDT_VMODEL").val()+'|',"LSW_SGETPRODVAL");
	
	$("#LPDT_VMKMODEL").html("")
	$("#LPDT_VMKMODEL").append($(Pro4).find("RESULT").html());	
	$("#LPDT_VMKMODEL").material_select();
	
	GetAssetAmt();
}


function GetAssetAmt()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");
    var Year=$("#LPDT_VMANUDATE").val();
	var Model=$("#LPDT_VMODEL").val();
	var AssAmt = UI_getdata("AssetAmount",$(State).find("STATE").text(),$("#LPDT_VEHILECLASS").val(),$("#LPDT_VBODYTYPE").val(),$("#LPDT_VMANUFACT").val()+'|'+$("#LPDT_VMKMODEL").val()+'|'+Model+'|'+Year,"LSW_SGETPRODVAL");
	
	if($(AssAmt).find("RESULT").text()=="")
	{
		AssAmt=0;
	}
	else
	{
		AssAmt=$(AssAmt).find("RESULT").text()
	}
	
	AssAmt=CURINRCommaSep(parseFloat(AssAmt).toFixed(0)); 
	
	$("#LPDT_VASSETCOST").val(AssAmt);	
	$("#LPDT_VASSETCOST").next().addClass('active');
	$("#LPDT_VASSETCOST").attr("disabled",true);
}

function ChkAsset()
{
	var asst=$("#LPDT_VASSETCOST").val().replace(/,/g,'');
	var prlnamt=$("#LPDT_VPROVECLAMT").val().replace(/,/g,'');
	if(parseInt(asst)<parseInt(prlnamt))
	{
		alert("Kindly should enter less than value of asset cost");
		$("#LPDT_VPROVECLAMT").val('')
	}
}



function CompareDateFields(startDate, endDate) {

    var startDate1=$("#"+startDate).val().split("/")
     startDate1 =(startDate1[2])+(startDate1[1])+(startDate1[0])
	var endDate1=$("#"+endDate).val().split("/")
     endDate1 =(endDate1[2])+(endDate1[1])+(endDate1[0])
    
    if(parseInt(endDate1)<parseInt(startDate1))
 {

       alert("End date is greater than Start  Date");
       $("#"+endDate).val('')
	   $('#'+endDate).next().removeClass('active');
        
    }


}

function POLICYISSUEDT() {

    var CURDATE1=$("#DMY7").val().split('|')[1].split("/")
     CURDATE1 =(parseInt(CURDATE1[2])-parseInt(5))+(CURDATE1[1])+(CURDATE1[0])
	var PCDATE1=$("#LPDT_VPOLICYISSUEDT").val().split("/")
     PCDATE1 =(PCDATE1[2])+(PCDATE1[1])+(PCDATE1[0])
    
    if(parseInt(PCDATE1)<parseInt(CURDATE1))
 {

       alert("Policy issued date Invalid");
       $("#LPDT_VPOLICYISSUEDT").val('')
	   $("#LPDT_VPOLICYISSUEDT").next().removeClass('active');
        
    }


}


function Checkmndry()
{
	var securitytype=$("#LPDT_SECURITYTYPE").val()
	if(securitytype=="Cash collateral")
	{
		if($("#LPDT_CLOANAMT").val()=="")
		{
			$("#LPDT_CSECAMT").addClass("LPDTMndtry");
			 $("#LPDT_CSECAMT").next().find(".MndtryAstr").html("*");
			
		}
		else
		{
			$("#LPDT_CSECAMT").removeClass("LPDTMndtry");
			 $("#LPDT_CSECAMT").next().find(".MndtryAstr").html("");
		}
	}
	
	if(securitytype=="Hypothecation - Stocks/Current Assets")
	{
		if($("#LPDT_HLOANAMT").val()=="")
		{
			$("#LPDT_HSECAMT").addClass("LPDTMndtry");
			$("#LPDT_HSECAMT").next().find(".MndtryAstr").html("*");
			
		}
		else
		{
			$("#LPDT_HSECAMT").removeClass("LPDTMndtry");
			$("#LPDT_HSECAMT").next().find(".MndtryAstr").html("");
		}
	}
	
	if(securitytype=="Deposits - FD Lien / SD")
	{
		if($("#LPDT_DLOANAMT").val()=="")
		{
			$("#LPDT_DSECAMT").addClass("LPDTMndtry");
			$("#LPDT_DSECAMT").next().find(".MndtryAstr").html("*");
			
		}
		else
		{
			$("#LPDT_DSECAMT").removeClass("LPDTMndtry");
			$("#LPDT_DSECAMT").next().find(".MndtryAstr").html("");
		}
	}	
}

function Chkmnd()
{
	var securitytype=$("#LPDT_SECURITYTYPE").val()
	if(securitytype=="Cash collateral")
	{
		if($("#LPDT_CLOANAMT").val()=="")
		{
			$("#LPDT_CSECAMT").addClass("LPDTMndtry");
			$("#LPDT_CSECAMT").next().find(".MndtryAstr").html("*");
			
		}
		else
		{
			$("#LPDT_CSECAMT").removeClass("LPDTMndtry");
			$("#LPDT_CSECAMT").next().find(".MndtryAstr").html("");
		}
	}
	if(securitytype=="Hypothecation - Stocks/Current Assets")
	{
		if($("#LPDT_HLOANAMT").val()=="")
		{
			$("#LPDT_HSECAMT").addClass("LPDTMndtry");
			$("#LPDT_HSECAMT").next().find(".MndtryAstr").html("*");
			
		}
		else
		{
			$("#LPDT_HSECAMT").removeClass("LPDTMndtry");
			$("#LPDT_HSECAMT").next().find(".MndtryAstr").html("");
		}
	}
	if(securitytype=="Deposits - FD Lien / SD")
	{
		if($("#LPDT_DLOANAMT").val()=="")
		{
			$("#LPDT_DSECAMT").addClass("LPDTMndtry");
			$("#LPDT_DSECAMT").next().find(".MndtryAstr").html("*");
			
		}
		else
		{
			$("#LPDT_DSECAMT").removeClass("LPDTMndtry");
			$("#LPDT_DSECAMT").next().find(".MndtryAstr").html("");
		}
	}		
}



function Chkscvveh()
{
	var Security=$("#LPDT_SECURITYTYPE").val()
	var Vehiclass=$("#LPDT_VEHILECLASS").val()
	if(Security=="Vehicles")
	{
		if(Vehiclass=="SCV")
		{
			$(".chkscv").removeClass('LPDTMndtry');
			$(".chkscv").next().find(".MndtryAstr").html("");			
		}
		else
		{
			$(".chkscv").addClass('LPDTMndtry');
			$(".chkscv").next().find(".MndtryAstr").html("*");	
		}
		if(Vehiclass=="SCV" || Vehiclass=="LCV")
		{
			$(".TAX").show()
		}
		else
		{
			$("#LPDT_VLIFETIMETAX").val(''); 
			$("#LPDT_VLIFETIMETAX").material_select(); 
			$(".TAX").hide()
		}
		
	}
}

function Chktaxload()
{
	
	var Security=$("#LPDT_SECURITYTYPE").val()
	var Vehiclass=$("#LPDT_VEHILECLASS").val()
	if(Security=="Vehicles")
	{
		if(Vehiclass=="SCV" || Vehiclass=="LCV")
		{
			$(".TAX").show()
		}
		else
		{
			$("#LPDT_VLIFETIMETAX").val(''); 
			$("#LPDT_VLIFETIMETAX").material_select();
			$(".TAX").hide()
		}
	}
}

function ChkLTV()
{
if(parseInt($("#LPDT_LTV").val())>100)
{
alert("LTV Should not be Greater Than 100%");
$("#LPDT_LTV").val("");
return;
}
}


function ConsiderFrCAM(Evnt,Data){
	if(Data == "Change")
	{
		var val = $(Evnt).val();
		if(val == "No")
		{
			$(Evnt).closest(".col-md-6 ").next().show();
			var op = UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab").find(".active").attr("id"),"","","","LSW_SCHECKNYCAMEX");
			var pattern = /option/;
			var exists = pattern.test(op);
			if(exists) {
				$(Evnt).closest(".col-md-6 ").next().find("select").material_select("destroy")
				$(Evnt).closest(".col-md-6 ").next().find("select").val("");
			   $(Evnt).closest(".col-md-6 ").next().find("select option").remove()
			   $(Evnt).closest(".col-md-6 ").next().find("select").append($(op).find("RESULT").html());
				$(Evnt).closest(".col-md-6 ").next().find("select").material_select();
					}
					else{
						$(Evnt).closest(".col-md-6 ").next().find("select").material_select("destroy")
				$(Evnt).closest(".col-md-6 ").next().find("select").val("");
				$(Evnt).closest(".col-md-6 ").next().find("select").material_select();
				$(Evnt).closest(".col-md-6 ").next().hide();
				pattern = /Tagged/;
				pattern.test(op);
				if(exists) {
					$(Evnt).prop('checked', false);
				}
				else{
					$("#CONSFRCAMYES").prop('checked', true);
				}
						alert($(op).find("RESULT").text());
					}
		}
		else{
			$(Evnt).closest(".col-md-6 ").next().hide();
			$(Evnt).closest(".col-md-6 ").next().find("select").material_select("destroy")
				$(Evnt).closest(".col-md-6 ").next().find("select").val("");
				$(Evnt).closest(".col-md-6 ").next().find("select").material_select();
		}
	}
}

function ConsiderFrCAMLoad(){
	if($('[name=LPDT_CONSFRCAM]:checked').val() == "No"){
		var exval = $('[name=LPDT_CONSFRCAM]').closest(".col-md-6 ").next().find("select").val();
		$('[name=LPDT_CONSFRCAM]').closest(".col-md-6").next().show();
		var op = UI_getdata($("#PrcsID").val(),$(".FormPageMultiTab").find(".active").attr("id"),"","","","LSW_SCHECKNYCAMEX");
		var pattern = /option/;
			var exists = pattern.test(op);
			if(exists) {
				$('[name=LPDT_CONSFRCAM]').closest(".col-md-6 ").next().find("select").material_select("destroy")
				
			   $('[name=LPDT_CONSFRCAM]').closest(".col-md-6 ").next().find("select option").remove()
			   $('[name=LPDT_CONSFRCAM]').closest(".col-md-6 ").next().find("select").append($(op).find("RESULT").html());
			   $('[name=LPDT_CONSFRCAM]').closest(".col-md-6 ").next().find("select").val(exval);
				$('[name=LPDT_CONSFRCAM]').closest(".col-md-6 ").next().find("select").material_select();
			}
	}
}

function AssestDedupe(){
	var json = {};
	for(var i=0;i<$(".ASSETDEDUPE").length;i++){
		var key = $($(".ASSETDEDUPE")[i]).attr("id");
		var val = $($(".ASSETDEDUPE")[i]).val();
		json [key]=val;
	}
	$("#ASSETDEDUPEPopup").click();
	FncallDocChkLst(this,'ASSESTDEDUPETable',{spname:'LSW_SGETASSETDEDUPE',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:JSON.stringify(json),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7,8','ASSESTDEDUPE');
}

function GridControlDetailASSESTDEDUPE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': false,

       "aaSorting": [],

       // "pageLength": 5,
	   "bSort" : false,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)}
		

    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        }); 
}