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
}
}


function CheckMobNo()
{
	


	var MobNum=$("#LRDT_FIRREFMOBILE").val()
	var MobNum1=$("#LRDT_SECREFMOBILE").val()
	var Prcsid=$("#PrcsID").val()
	
	
	var xml=UI_getdata(MobNum,Prcsid,"","","","LSW_SREFECHKDUPMOBNO")
	
	var xml1=UI_getdata(MobNum1,Prcsid,"","","","LSW_SREFECHKDUPMOBNO")
	
	if($("#LRDT_FIRREFMOBILE").val()!="")
		{
	if($(xml).find('RESULT').text()!="OK")
		{
		 alert($(xml).find('RESULT').text())
		 $("#LRDT_FIRREFMOBILE").val('')
		}
		}
	
	if($("#LRDT_SECREFMOBILE").val()!="")
		{
	    if($(xml1).find('RESULT').text()!="OK")
	    {
	     alert($(xml1).find('RESULT').text())
	     $("#LRDT_SECREFMOBILE").val('')
	    }
		}
	
}

function CheckRefNo()
{
	var MobNum=$("#LRDT_FIRREFMOBILE").val()
	var MobNum1=$("#LRDT_SECREFMOBILE").val()
	
	if($("#LRDT_FIRREFMOBILE").val()!="")
		{
	if($("#LRDT_SECREFMOBILE").val()!="")
	{		
	if(MobNum==MobNum1)
		{
		   alert('Mobile Number already exists')
		   $("#LRDT_SECREFMOBILE").val('')
		}
		}
		}
}

/*
function checkRadio()
{	
var Relation=$("input[name='LRDT_FIRREFREL']:checked"). val();

var FirRefRel=$("input[name='LRDT_FIRREFREL']:checked"). val();
var SecRefRel=$("input[name='LRDT_SECREFREL']:checked"). val();

if(FirRefRel==SecRefRel)
{
  alert('Relationship '+FirRefRel+' already exists')
  $('input[name="LRDT_FIRREFREL"]').prop('checked', false);
  $('input[name="LRDT_SECREFREL"]').prop('checked', false);
}
}*/

/*
function checkRadio(id)
{	
	var CurRelation=$(id).attr('name')
	
var Relation=$("input[name='LRDT_FIRREFREL']:checked"). val();

var FirRefRel=$("input[name='LRDT_FIRREFREL']:checked"). val();
var SecRefRel=$("input[name='LRDT_SECREFREL']:checked"). val();

if(FirRefRel==SecRefRel)
{
  alert('Relationship '+FirRefRel+' already exists')
  $('input[name='+CurRelation+']').prop('checked', false);
  //$('input[name="LRDT_SECREFREL"]').prop('checked', false);
}
}

*/
function CheckLoanType(Prifx1)
{
	var LoanType=$("#APFI_LONTYPE").text()
	
	if(LoanType=="Registered Mortgage")
		{
		  $("."+Prifx1+"DBfields").attr('disabled',true);
		}
	else
		{
		  $("."+Prifx1+"DBfields").attr('disabled',false);
		}
}



function GetRelationship()
{
	 
 $("#LRDT_FIRREFREL").val('');
	$("#LRDT_FIRREFREL").find('option').remove()
	$("#LRDT_FIRREFREL").material_select("destroy");
	$("#LRDT_FIRREFREL").material_select(); 
   var RelType=UI_getdata("RELTYPE",$("#VERTICAL").val(),"","","","LSW_SGETPRODVAL")
	 $("#LRDT_FIRREFREL").append($(RelType).find("RESULT").html());
	 $("#LRDT_FIRREFREL").material_select();
 
}