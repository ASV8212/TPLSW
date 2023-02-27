function getPDApprove()
{
      if($("#APDD_PDDONEBY").val() == "")
       {
	    var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETPDDONE");
	    $("#APDD_PDDONEBY").empty();
	    $("#APDD_PDDONEBY").append($(xml).find("RESULT").html());
        $("#APDD_PDDONEBY").material_select(); 
      }
}


function getPDNames()
{

	var k=	$("#APDD_PDDONEBY").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#APDD_PDDONEBY").val()[i]
     var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       var CUSText1=CUSText1.replace(',','')
       $("#APDD_PDDONEBYID").val(CUSTOMERNAMES)
       $("#APDD_PDDONEBYNAME").val(CUSText1)
	
}