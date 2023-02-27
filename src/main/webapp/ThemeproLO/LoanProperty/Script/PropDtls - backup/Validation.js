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