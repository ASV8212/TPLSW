
function NatureOfBuss()
{
	var NatBusi=$("#FIED_NATUREOFBUSIN").val()
	if(NatBusi=="Service Provider")
		{
		$("#FIED_SERVICEPROV").addClass('FIEDMndtry');
		$("#FIED_SERVICEPROV").parent().next().find(".MndtryAstr").html("*");
       }
	else
		{
		$("#FIED_SERVICEPROV").removeClass('FIEDMndtry');
		$("#FIED_SERVICEPROV").parent().next().find(".MndtryAstr").html("");
         }

}


function RecommReason()
{
	var Recomm=$("input[name='FIED_RECOMMENDED']:checked"). val();
	
	if(Recomm=="No")
		{
		$("#FIED_REASONS").addClass('FIEDMndtry');
		 $("#FIED_REASONS").parent().next().find(".MndtryAstr").html("*");
		}
	else 
		{
		$("#FIED_REASONS").removeClass('FIEDMndtry');
		 $("#FIED_REASONS").parent().next().find(".MndtryAstr").html("");
		}
}   


function getReasons()
{
	var k=	$("#FIED_REASONS").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#FIED_REASONS").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#FIED_REASONSI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}

function getItem()
{
	var k=	$("#FIED_ITEMSEENPREM").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#FIED_ITEMSEENPREM").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#FIED_ITEMSEENPREMI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}






function DateInspect(XID,YID)
{	
if(XID.value!='')	
{	
var validdt=DateValid(XID);

if(validdt!="")
{
var InspDate=XID.value;

var InitiDate=$('#'+YID).val()

      date = new Date();
    var y = date.getFullYear();
    var res = InspDate.split("/");
    var dd = res[0];
    var mm = res[1];
    var yy = res[2];

var InspecDate=yy+mm+dd

    var Inti = InitiDate.split("/");
     var dd1 = Inti[0];
     var mm1 = Inti[1];
     var yy1 = Inti[2];

 var InitiateDate=yy1+mm1+dd1
    if(parseInt(InspecDate)<parseInt(InitiateDate))
    	{
    	 window.alert('Date of Visit should be greater than date initiation');
    	 XID.value="";
    	 XID.nextElementSibling.classList.remove('active');
    	}
}
}
}



