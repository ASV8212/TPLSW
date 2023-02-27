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
   var sectype=UI_getdata("SECTYPE", "","","","","LSW_SGETPRODVAL")
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
	$(".IMPLEMENT").hide()
	$(".IMPLEMND").removeClass('LPDTMndtry');
	$(".IMPLEMND").parent().next().find(".MndtryAstr").html("");
 
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
		 
		 $(".GEMVAL").val('');
		$(".deposit").hide();
		 $(".DEMVAL").val(''); 
		 $(".DEMVAL").find("select").material_select();
		 $(".ADDACTDEP").removeClass('active');
		$(".guarentee").hide();
		$(".GUEMVAL").val('');
		 $(".ADDACTGUA").removeClass('active');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".Hypothecation").hide();
		$(".SEMVAL").val('');
		$(".SEMVAL").find("select").material_select();
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		$(".HYPVAL").find("select").material_select();
		 $(".ADDACTSEC").removeClass('active');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
		     $(".vehicle").parent().next().find(".MndtryAstr").html("*");
		  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
		  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');		  
		  $(".ADDFIELDS").hide()
          $(".ADDFIELDSMND").removeClass('LPDTMndtry');
		   $(".VECH").show();
		   $(".VECHID").hide()
	$(".IMPLEMENT").hide()
	$(".IMPLEMND").removeClass('LPDTMndtry');
	$(".IMPLEMND").parent().next().find(".MndtryAstr").html("");
		   
		  
		  
		  
		  
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
		else if(securitytype=="Machinery")
			{  	 
		
		  $(".MachineMANT").addClass('LPDTMndtry');
		   $(".ADDACTVEC").removeClass('active');
		 
		   $("#LPDT_MACHINERYDOC").addClass("LPDTMndtry");
           $(".machinery").show(); 
		   $(".vehile").removeClass('LPDTMndtry'); 
		  $(".vehicle").hide();
		 $(".VEMVAL").val('');
		 $(".VEMVAL").find("select").material_select();
		 $(".gold").hide();
		 $(".ADDACTGOL").removeClass('active');
		 $(".GEMVAL").val('');
		$(".deposit").hide();
		 $(".DEMVAL").val('');
		  $(".DEMVAL").find("select").material_select();
		 $(".ADDACTDEP").removeClass('active');
		$(".guarentee").hide();
		$(".GUEMVAL").val('');
		 $(".ADDACTGUA").removeClass('active');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".Hypothecation").hide();
		$(".SEMVAL").val('');
		$(".SEMVAL").find("select").material_select();
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		$(".HYPVAL").find("select").material_select();
		 $(".ADDACTSEC").removeClass('active');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
              $(".vehicle").parent().next().find(".MndtryAstr").html("");
			   $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
			   		  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
					  
		 $(".ADDFIELDS").hide()
          $(".ADDFIELDSMND").removeClass('LPDTMndtry');
		  $(".IMPLEMENT").hide()
	$(".IMPLEMND").removeClass('LPDTMndtry');
	$(".IMPLEMND").parent().next().find(".MndtryAstr").html("");
		  
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
		 $(".DEMVAL").find("select").material_select();
		 $(".ADDACTDEP").removeClass('active');
		$(".guarentee").hide();
		$(".GUEMVAL").val('');
		 $(".ADDACTGUA").removeClass('active');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".Hypothecation").hide();
		$(".ADDFIELDS").hide();
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		$(".HYPVAL").find("select").material_select();
		 $(".ADDACTSEC").removeClass('active');
		$(".ADDFIELDSMND").removeClass('LPDTMndtry');
		$(".SEMVAL").val('');
		$(".SEMVAL").find("select").material_select();
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
				  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
			     $(".vehicle").parent().next().find(".MndtryAstr").html("");   
	  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
	  $(".IMPLEMENT").hide()
	$(".IMPLEMND").removeClass('LPDTMndtry');
	$(".IMPLEMND").parent().next().find(".MndtryAstr").html("");
	  
	  
	  
	  
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
			
			// $(".DEPOSITM").addClass('LPDTMndtry');
			$(".ADDACTVEC").removeClass('active');
			 
			   $(".deposit").show();
			    $(".vehile").removeClass('LPDTMndtry');
			    $(".vehicle").hide();
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
		$(".Cashcollateral").hide();
		$(".SEMVAL").val('');
		$(".SEMVAL").find("select").material_select();
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		$(".HYPVAL").find("select").material_select();
		
		
		 $(".ADDACTSEC").removeClass('active');
		$(".ADDFIELDS").hide();
		$(".ADDFIELDSMND").removeClass('LPDTMndtry');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
			    		  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
		      $(".vehicle").parent().next().find(".MndtryAstr").html("");
		$(".IMPLEMENT").hide()
	$(".IMPLEMND").removeClass('LPDTMndtry');
	$(".IMPLEMND").parent().next().find(".MndtryAstr").html("");	  
		 Chkdepo();	  
			  
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
		$(".Cashcollateral").hide();
		 $(".DEMVAL").val('');
		 $(".DEMVAL").find("select").material_select();
	   $(".ADDACTDEP").removeClass('active');
		$(".securities").hide();
		$(".SEMVAL").val('');
		$(".SEMVAL").find("select").material_select();
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		$(".HYPVAL").find("select").material_select();
		 $(".ADDACTSEC").removeClass('active');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
		        $(".vehicle").parent().next().find(".MndtryAstr").html("");
	  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
	  
	   $(".ADDFIELDS").hide()
          $(".ADDFIELDSMND").removeClass('LPDTMndtry');
		  
		 $(".IMPLEMENT").hide()
	$(".IMPLEMND").removeClass('LPDTMndtry');
	$(".IMPLEMND").parent().next().find(".MndtryAstr").html(""); 
		  
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
	
	        $(".SECURITYMANT").removeClass('LPDTMndtry');
			$(".ADDACTVEC").removeClass('active');
			$(".securities").show();
			$(".vehile").removeClass('LPDTMndtry');
			// $("#LPDT_STYPESEC").addClass('LPDTMndtry');
		    $(".vehicle").hide();
		    $(".VEMVAL").val('');
		    $(".VEMVAL").find("select").material_select();
		    $(".machinery").hide();
			$(".Hypothecation").hide();
			$(".Cashcollateral").hide();
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
			$(".DEMVAL").find("select").material_select();
		    $(".ADDACTDEP").removeClass('active');
		    $(".guarentee").hide();
		    $(".GUEMVAL").val('');
			$(".CASVAL").val('');
			$(".HYPVAL").val('');
			$(".HYPVAL").find("select").material_select();
		    $(".ADDACTGUA").removeClass('active');
		    $('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
			 //  $("#LPDT_STYPESEC").addClass('LPDTMndtry'); 
		 	$(".vehicle").parent().next().find(".MndtryAstr").html("");	  
		    $(".ADDFIELDS").hide()
            $(".ADDFIELDSMND").removeClass('LPDTMndtry');
			$(".IMPLEMENT").hide()
	$(".IMPLEMND").removeClass('LPDTMndtry');
	$(".IMPLEMND").parent().next().find(".MndtryAstr").html("");
	 TYPOFSEC();
	 CHKCHRGTYP();
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
			$(".vehile").removeClass('LPDTMndtry');
			// $("#LPDT_STYPESEC").addClass('LPDTMndtry');
		    $(".vehicle").hide();
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
			$(".DEMVAL").find("select").material_select();
		    $(".ADDACTDEP").removeClass('active');
		    $(".guarentee").hide();
		    $(".GUEMVAL").val('');
			$(".SEMVAL").val('');
			$(".SEMVAL").find("select").material_select();
			$(".HYPVAL").val('');
			$(".HYPVAL").find("select").material_select();
		    $(".ADDACTGUA").removeClass('active');
		    $('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
			 //  $("#LPDT_STYPESEC").addClass('LPDTMndtry'); 
		 	$(".vehicle").parent().next().find(".MndtryAstr").html("");	  
		    $(".ADDFIELDS").hide()
            $(".ADDFIELDSMND").removeClass('LPDTMndtry');
			$(".IMPLEMENT").hide()
	$(".IMPLEMND").removeClass('LPDTMndtry');
	$(".IMPLEMND").parent().next().find(".MndtryAstr").html("");
		}
		else if(securitytype=="Hypothecation - Stocks/Current Assets")
		{
			$(".SECURITYMANT").removeClass('LPDTMndtry');
			$(".ADDACTVEC").removeClass('active');
			$(".securities").hide();
			$(".Cashcollateral").hide();
			$(".Hypothecation").show();
			
			$(".CASVAL").val('');
			
			$(".vehile").removeClass('LPDTMndtry');
			// $("#LPDT_STYPESEC").addClass('LPDTMndtry');
		    $(".vehicle").hide();
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
			$(".DEMVAL").find("select").material_select();
		    $(".ADDACTDEP").removeClass('active');
		    $(".guarentee").hide();
		    $(".GUEMVAL").val('');
			$(".SEMVAL").val('');
			$(".SEMVAL").find("select").material_select();
		    $(".ADDACTGUA").removeClass('active');
		    $('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
			 //  $("#LPDT_STYPESEC").addClass('LPDTMndtry'); 
		 	$(".vehicle").parent().next().find(".MndtryAstr").html("");	  
		    $(".ADDFIELDS").hide()
            $(".ADDFIELDSMND").removeClass('LPDTMndtry');
			$(".IMPLEMENT").hide()
	$(".IMPLEMND").removeClass('LPDTMndtry');
	$(".IMPLEMND").parent().next().find(".MndtryAstr").html("");
	CHKCHRGTYP();
		}
		else if(securitytype=="Bills")
		{ 
			$(".CHKBX").hide();
		}
		else if(securitytype=="Goods/Produce")
		{ 
			$(".CHKBX").hide();
		}
		else if(securitytype=="Implement")
		{
			$(".IMPLEMENT").show()
			$(".IMPLEMND").addClass('LPDTMndtry');
			$(".IMPLEMND").parent().next().find(".MndtryAstr").html("*");
			$(".IMPLEMND").next().find(".MndtryAstr").html("*");
			
					
  
		$(".vehicle").hide();		
		 $(".vehile").removeClass('LPDTMndtry');    
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
		 $(".DEMVAL").val(''); 
		 $(".DEMVAL").find("select").material_select();
		 $(".ADDACTDEP").removeClass('active');
		$(".guarentee").hide();
		$(".GUEMVAL").val('');
		 $(".ADDACTGUA").removeClass('active');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".Hypothecation").hide();
		$(".SEMVAL").val('');
		$(".SEMVAL").find("select").material_select();
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		$(".HYPVAL").find("select").material_select();
		 $(".ADDACTSEC").removeClass('active');
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
		     $(".vehicle").parent().next().find(".MndtryAstr").html("*");
		  $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
		  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');		  
		  $(".ADDFIELDS").hide()
          $(".ADDFIELDSMND").removeClass('LPDTMndtry');
		   $(".VECH").hide();
		   $(".VECHID").hide()
		   //$(".IMPLEMND").next().addClass('active');
			
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
		 $(".DEMVAL").find("select").material_select();
		 $(".ADDACTDEP").removeClass('active');
		$(".Cashcollateral").hide();
		$(".Hypothecation").hide();
		$(".guarentee").hide();
		 $(".ADDACTGUA").removeClass('active');
		
		$(".CASVAL").val('');
		$(".HYPVAL").val('');
		$(".HYPVAL").find("select").material_select();
		
		$(".GUEMVAL").val('');
		$('input[name="LPDT_TYPEOFGUAR"]').prop('checked', false);
		$(".securities").hide();
		$(".SEMVAL").val('');
		$(".SEMVAL").find("select").material_select();
		 $(".ADDACTSEC").removeClass('active');
		 
		$('input[name="LPDT_STYPEOFSEC"]').prop('checked', false);
		 $("#LPDT_STYPESEC").removeClass('LPDTMndtry');
		  $("#LPDT_TYPEOFGU").removeClass('LPDTMndtry');
		$(".vehile").removeClass('LPDTMndtry');
         $(".vehicle").parent().next().find(".MndtryAstr").html("");
		 MORTGETYP();
		 CHKCHRGTYP();
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
		  $('#LPDT_PERSONS').val('');
		   $('#LPDT_PERSONS').material_select();
          return false;
  
           }
	 }
	 else if(id=="Joint")
	 {
		var ownerarray = $("#LPDT_PROPOWNER").val()
		if(!ownerarray.includes($("#LPDT_PERSONS").val()))
		{
			alert('Property Owner name should be same as Person name');
			 $('#LPDT_PERSONS').val('');
		   $('#LPDT_PERSONS').material_select();
			return false;
		}
		 
	 }
}

function AddPageMultiData (TblName,PrcsID,UniqNo,DV,FieldClass)
{
	
	var html = $($("#"+DV).html());
	var document = $(html);
	
	var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
	var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
	
	var row = $("."+ DV).find('.DYNROW').length;
	
	var j = parseInt(row) + 1;
	
	$(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
	$(html).find("[data-row]").attr("data-row",j);
	$(html).attr("data-row",j);
	
	 var n = $(html).find("." + FieldClass).length;
	 
	  for (i = 0; i < n; i++) {
         name = $($(html).find("." + FieldClass)[i]).attr("name");
	$(html).find("#"+name).attr("id",name + j);
	  }
	
	
	$("."+DV).append(html);

}
function Chkdep(){
	var dep=$("#LPDT_DVALOFDEPO").val().replace(/,/g,'');	
	var mat=$("#LPDT_DVALOFMATUTY").val().replace(/,/g,'');
	if(parseInt(dep)>parseInt(mat))
	{
		alert("Kindly should enter greater than value of deposit");
		$("#LPDT_DVALOFMATUTY").val('')
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

/*function Valofsec()
	{
		if($("#LPDT_DVALOFDEPO").val() = '0')
		{
		alert('Value of deposit should not be 0')
		return false;
		}
	}*/

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

function Chkdepo()
{
var Depo=$("#LPDT_DDEPOSIT").val();
	//var Depo=$("input[name='LPDT_DDEPOSIT']:checked"). val();
	if(Depo=="Fixed Deposit")
	{
		$(".FIXDEP").show()
		if($("#LPDT_DIFSC").val()=="")
		{
		$("#LPDT_DBRANCH").next().removeClass('active');
			
		}
		$(".SECUDEP").hide()
	}
	else if(Depo=="Security Deposit"){
		$(".SECUDEP").show()
		$(".FIXDEP").hide()
	}
	else
	{
		$(".FIXDEP").hide()
		$(".SECUDEP").hide()
	}
}

function GETIFSC()
{
var val=GetIfsc($("#LPDT_DIFSC").val());
if($(val).find("BRANCH").text() != "")
{
$("#LPDT_DBRANCH").val($(val).find("BRANCH").text());	
$("#LPDT_DBRANCH").next().addClass('active');
$("#LPDT_DBRANCH").attr('disabled',true)
}

}
function GETSECIFSC()
{
var val=GetIfsc($("#LPDT_DSECIFSC").val());
if($(val).find("BRANCH").text() != "")
{
$("#LPDT_DSECBRANCH").val($(val).find("BRANCH").text());	
$("#LPDT_DSECBRANCH").next().addClass('active');
$("#LPDT_DSECBRANCH").attr('disabled',true)
}

}

function CHKCHRGTYP()
{
var CHRTY=$("#LPDT_CHRGTYPE").val();
var SCHRTY=$("#LPDT_SCHRGTYP").val();
var HCHRTY=$("#LPDT_HCHRGTYP").val();



	if(CHRTY=="others")
	{
		$(".OTHR").show()
	}
	else if(CHRTY!="others")
	{
		$(".OTHR").hide()
	}
	else
	{
		$(".OTHR").hide()
	}
	
	if(SCHRTY=="others")
	{
		$(".SOTHR").show()
	}
	else if(SCHRTY!="others")
	{
		$(".SOTHR").hide()
	}
	else
	{
		$(".SOTHR").hide()
	}	
	
	if(HCHRTY=="others")
	{
		$(".HOTHR").show()
	}
	else if(HCHRTY!="others")
	{
		$(".HOTHR").hide()
	}
	else
	{
		$(".HOTHR").hide()
	}	
}

function TYPOFSEC()
{

var SECTYP=$("#LPDT_STYPEOFSEC").val();
if(SECTYP=="Bank Guarantee" || SECTYP=="SBLC (Standby Letter of Credit)")
{
	$(".BNKGRA").show()
	$(".LIC").hide()
}
else if(SECTYP=="LIC Policies" || SECTYP=="Bonds" || SECTYP=="NCD (Non convertible Debentures)" || SECTYP=="Shares" || SECTYP=="Mutual Funds")
{
$(".LIC").show()
$(".BNKGRA").hide()
}
else
{
$(".BNKGRA").hide()
$(".LIC").hide()
}

}
function MORTGETYP()
{
var MORTYP=$("#LPDT_MORTTYPE").val();
if(MORTYP=="Joint")
{
$(".BNKGRA").show()

}
else if(MORTYP=="Single")
{
$(".BNKGRA").hide()
}
else
{
$(".BNKGRA").hide()
}
}


function GETMANUFAC()
{
		
	 var Implmnt = UI_getdata("IMPLEMENT",$("#VERTICAL").val(),"","","","LSW_SGETPRODVAL");
         $("#LPDT_IMPLEMENT").html("");
		 $("#LPDT_IMPLEMENT").append($(Implmnt).find("RESULT").html());
	
	
		var GETMANU = UI_getdata("TFManufacturer",$("#VERTICAL").val(),"","","","LSW_SGETPRODVAL");
		$("#LPDT_IMPLMANUF").html("")
		$("#LPDT_IMPLMANUF").append($(GETMANU).find("RESULT").html());	

		
	
}
function GETMODEL()
{

		var GETMOD = UI_getdata("TFModel",$("#VERTICAL").val(),$("#LPDT_IMPLMANUF").val(),"","","LSW_SGETPRODVAL");
		$("#LPDT_IMPLMODEL").html("")
		$("#LPDT_IMPLMODEL").append($(GETMOD).find("RESULT").html());
		$("#LPDT_IMPLMODEL").material_select();
		$("#LPDT_IMPLVARIANT").val("");
		$("#LPDT_IMPLASTDESC").val("");
		$("#LPDT_IMPLASTCOST").val("");
		$("#LPDT_IMPLVARIANT").next().removeClass('active');
		$("#LPDT_IMPLASTDESC").next().removeClass('active');
		$("#LPDT_IMPLASTCOST").next().removeClass('active');
		
	
}
function GETVARIANT()
{
	var GETVAR = UI_getdata("TFVariant",$("#VERTICAL").val(),$("#LPDT_IMPLMANUF").val(),$("#LPDT_IMPLMODEL").val(),"","LSW_SGETPRODVAL");
//AssAmt=CURINRCommaSep(parseFloat(AssAmt).toFixed(0)); 
	var Fnlvar=$(GETVAR).find("RESULT").text()
	$("#LPDT_IMPLVARIANT").val(Fnlvar);	
	$("#LPDT_IMPLVARIANT").next().addClass('active');
	$("#LPDT_IMPLVARIANT").attr("disabled",true);
	
	var GETASSDES = UI_getdata("TFAsstdesc",$("#VERTICAL").val(),$("#LPDT_IMPLMANUF").val(),$("#LPDT_IMPLMODEL").val(),"","LSW_SGETPRODVAL");
	var Fnlass=$(GETASSDES).find("RESULT").text()
	$("#LPDT_IMPLASTDESC").val(Fnlass);	
	$("#LPDT_IMPLASTDESC").next().addClass('active');
	$("#LPDT_IMPLASTDESC").attr("disabled",true);
	
	var GETASSCST = UI_getdata("TFAsstcost",$("#VERTICAL").val(),$("#LPDT_IMPLMANUF").val(),$("#LPDT_IMPLMODEL").val(),"","LSW_SGETPRODVAL");
	if($(GETASSCST).find("RESULT").text()=="")
	{
		GETASSCST=0;
	}
	else
	{
		GETASSCST=$(GETASSCST).find("RESULT").text()
	}
	$("#LPDT_IMPLASTCOST").val(GETASSCST);	
	$("#LPDT_IMPLASTCOST").next().addClass('active');
	$("#LPDT_IMPLASTCOST").attr("disabled",true);
}







