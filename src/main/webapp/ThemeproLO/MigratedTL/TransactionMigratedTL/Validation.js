

function InitNewUser(){

		var Code="C012";
		var NAME="WFINIT";
		var OldPrcsID= "";
		var SPNAME="";
		
		
	 $.ajax({
	       
	        url: "/TPLSW/WFINITV1",
	        //dataType: "json",
	        data: {CODE : Code,NAME : NAME,OldPrcsID : OldPrcsID,SPNAME : SPNAME,Prvnt : $("#Prvnt").val()},
	        async: true,	      
	        type: "POST",
	        success: function(res) {
	        		            	
	        if	(res.split("~")[0] == "Workflow Initiated")
	        	{
	        	$(location).attr('href',window.location.origin + "/TPLSW/TransactionDradown?PrcsID="+res.split("~")[1]+"&ActvID="+res.split("~")[2]+"&PrMs9=FormPageTab1&PrMs10=FormMainTab1&PrMs3=NEW");         	
	        	}
	        else
	        	{
	        	alert("Flow Initiation Failed");
	        	}
	            //console.log(res)
	        },
	        error: function(res) {
	        	
	        	alert("Flow Initiation Failed");
	            }
	    });
	}
	
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
$('#'+BNKNAME).attr('disabled',true)
$('#'+BRANCH).attr('disabled',true)
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
}


function onchng(Evnt)
{
	var amt = $("#TLTR_DRAWDOWNAMT").val().replace(/,/g,'');
	var accntid = $("#TLTR_ACCNTID").val();
	if(accntid == "")
	{
		alert("Kindly Choose the LAN No to Process Further");
		$("#TLTR_DRAWDOWNAMT").val("");
	}
	
	for(var j = 0;j<obj.MIGTRANCH.length;j++)
	{
		if(obj.MIGTRANCH[j].AccountID == accntid)
		{
			if(parseFloat(obj.MIGTRANCH[j].AvailAmt)<parseFloat(amt))
			{
				alert("Available Amount is "+obj.MIGTRANCH[j].AvailAmt+", Reduce the Transaction Amount to Process Further");
				$("#TLTR_DRAWDOWNAMT").val("");
			}
		}
	}
}