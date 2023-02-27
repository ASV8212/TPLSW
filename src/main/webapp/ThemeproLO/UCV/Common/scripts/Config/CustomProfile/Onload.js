$(document).ready(function () {

 var IOP='http://'+window.location.hostname+':'+LoadFrmXML("PT001")+'/'+LoadFrmXML("PG001");

	/*	SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= IOP;	
			return;
			}
			*/
   // readonly();
   
   
$('#UserId').val(getUrlParam("Userid"))


var UsrVal = UI_getdata(getUrlParam("Userid"),"","","","","Sam_sGetUsrProflVal");

$('#Desgination').val($(UsrVal).find("Desgn").text())
$('#Email').val($(UsrVal).find("Email").text())
$('#MobNo').val($(UsrVal).find("Mobno").text())
$('#Name').val($(UsrVal).find("Name").text())




    $('#Save').click(function () { 
	
	
	if($("#NewPswrd").val()!="")
	{
        if($("#NewPswrd").val() != $("#CnfrmPswrd").val())
		{
		alert("Password doesn't match")
		$("#NewPswrd").val('')
		$("#CnfrmPswrd").val('')
		$("#CrntPswrd").val('')
		return
        }
			
	///Start
	var p= $("#NewPswrd").val()
    var anUpperCase = /[A-Z]/;
    var aLowerCase = /[a-z]/; 
    var aNumber = /[0-9]/;
    var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
   
    if(p.length < 8){
       alert("Password Should contain 8 characters!!");
	   $("#NewPswrd").val('')
		$("#CnfrmPswrd").val('')
		$("#CrntPswrd").val('')
		
	   return
    }

    var numUpper = 0;
    var numLower = 0;
    var numNums = 0;
    var numSpecials = 0;
    for(var i=0; i<p.length; i++){
        if(anUpperCase.test(p[i]))
            numUpper++;
        else if(aLowerCase.test(p[i]))
            numLower++;
        else if(aNumber.test(p[i]))
            numNums++;
        else if(aSpecial.test(p[i]))
            numSpecials++;
    }

    if(numUpper < 1 || numLower < 1 || numNums < 1 || numSpecials < 1)
	{
        alert("Valid Password format atleast \n 1 special character,\n 1 Upper-case,\n 1 Lower-case, \n 1 Number.");
		$("#NewPswrd").val('')
		$("#CnfrmPswrd").val('')
		$("#CrntPswrd").val('')
		return
    }
 	
	//End		
			
	}	
	
	 ChkMandatoryFields("Mndtry");
			
	
	var param1=$("#CrntPswrd").val()
	var param2=$("#NewPswrd").val()
	var param3='';
	var param4='';	
	var spname='Sam_sInsUsrPrflData';
			
	var xml= submitdata('DBfields')
	if (document.getElementById('SubmitSuccess').value != "Mandatory") {
	//var UsrVal = UI_getdata(FORMXML,$("#CrntPswrd").val(),$("#NewPswrd").val(),"","","Sam_sInsUsrPrflData");
	
	

	

    $.ajax({
            	
                url: "/ThemePro_SCF/UI_formdatains_UserProfile",
            data: {xml:xml,param1:param1,param2:param2,param3:param3,param4:param4,spname:spname},
                async:false,
           type:"Post",
                success : function OnSuccess_submit(Result) {
                	
                	//alert(Result);
                    if (Result == 'Success') {
                       
                        	//alert($(UsrVal).find('Result').text())
	//if($(UsrVal).find('Result').text()=='Success')
	//{
	alert('Kindly re-login with new password')
	AppliLogout();
	 open(location, '_parent').close()
	//}
                    
                    }
                    else {
                        // DateChangeBack("ISDatefield");
						alert(Result)
                       // alertify.alert(LoadFrmXML("V0074"));          
                    }
                },
                error: function OnError_submit(xmlRequest) {
                    //DateChangeBack("ISDatefield");
                    alertify.alert(LoadFrmXML("V0075"));

                }
            });  

}            
    
    });
    
	
	
    });  
	
	
	function GetPasswordPolicy()
{
	var xml='<Form><Details><UserId>cpa1</UserId><Name>cpa1</Name><Desgination>CPA</Desgination><Email>dfgdfg@encoretheme.com</Email><MobNo>9715915955</MobNo><NewPswrd>Nivash@123</NewPswrd><CnfrmPswrd>Nivash@123</CnfrmPswrd><CrntPswrd>themepass</CrntPswrd></Details></Form>';
	var param1='themepass';
	var param2='theme@123';
	var param3='';
	var param4='';	
	var spname='Sam_sInsUsrPrflData';
	
	$.ajax({

	    url: "/LSW/UI_formdatains_UserProfile",
	    data: {xml:xml,param1:param1,param2:param2,param3:param3,param4:param4,spname:spname},
	    async: false,
	   // dataType: "json",
	    type: 'POST',
	    success: function OnSuccess_submit(data) {
			
			
			window.alert(data);
		
	    },
	    error: function OnError_submit(xmlRequest) {
		window.alert(data);
	    }

	});	
}
