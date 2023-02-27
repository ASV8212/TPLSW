$(document).ready(function () {
	
	var op=UI_getdata($('#LogUsr').val(),"","","","","LSW_SGETUSERDETAILS")
    	   
   $("#USERID").val($(op).find('ID').text())
   $("#NAME").val($(op).find('NAME').text())
	$("#MobileNO").val($(op).find('MobileNO').text())
	$("#EMAIL").val($(op).find('EMAIL').text())
     
	 
	 if($(op).find('PASSWORDCHANGE').text() =="N")
		{
		alert("As per the password policy, password should be change");	
		}


	$('.FormSave').on('click', function() {
		

			var MndtryChk = ChkMandatoryFlds("ROCRMndtry");
			
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
			
	   
		if($("#CurPassword").val() !="" || $("#NewPassword").val() != "" || $("#ConfPassword").val() != "")
		{
           if($("#CurPassword").val() =="" || $("#NewPassword").val() == "" || $("#ConfPassword").val() == "")
		   {
			   if($("#CurPassword").val() =="")
			   {
			    $("#CurPassword").addClass("DataInValid")
				$("#CurPassword").removeClass("DataNormal")
			   }
			   if($("#NewPassword").val() =="")
			   {
			    $("#NewPassword").addClass("DataInValid")
				 $("#NewPassword").removeClass("DataNormal")
			   }
			   if($("#ConfPassword").val() =="")
			   {
			    $("#ConfPassword").addClass("DataInValid")
				 $("#ConfPassword").removeClass("DataNormal")
			   }
			     alert("Fill the Mandatory Fields");
			       return false;
		   }
		}	
			
			
    	var xml1="";
		var OP="";
		 var Token=$(window.parent.parent.document).find("#Prvnt").val();
    	  var param1Val=$("#USERID").val();
		   var param2Val=$("#NAME").val();
		    var param3Val=$("#EMAIL").val()+'|'+$("#MobileNO").val()+'|'+$("#NewPassword").val();
			 var param4Val=Base64.encode($("#CurPassword").val());
			  var param5Val=Base64.encode($("#NewPassword").val());
			   var param6Val=Base64.encode($("#ConfPassword").val());
    	   $.ajax({

               url: "/TPLSW/PrfLGS",
               data: { param1: param1Val, param2: param2Val, param3: param3Val, param4: param4Val, param5: param5Val, param6: param6Val,param7 : "",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
               async: true,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   var	OP=xml1.responseText;
					
					if(OP.split('|')[0]=="200")
					{
						alert(OP.split('|')[1])
						//$(location).attr('href',window.location.origin + "/TPLSW"); 
						AppliLogout();
						
					}
					else if(OP.split('|')[0]=="101")
					{
						alert(OP.split('|')[1])
						return false;
						
					}
					else if(OP.split('|')[0]=="100")
					{
						alert(OP.split('|')[1])
						return false;
					}
					//ajaxindicatorstop();
            },
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });     
		  // ajaxindicatorstop();
    	   return OP;

		
		});
	
	
});
