var tmp="";

var g_windowReference = null;

$(document).ready(function () {

	 //$("#LoginForm").addClass('magictime swap');
	
//		if (window.location.protocol !== 'https:') {
//   window.location = 'https://' + window.location.hostname + ":8443" + window.location.pathname + window.location.hash;
//	return;
//}
	
	
	 var IOP1=window.location.origin;
	 
	 var MainPGURL=LoadFrmXML("PG002");
	 
		/*SessionLoginChk();
		if (document.getElementById("SubmitSuccess").value=="Valid")
			{			
			//window.location= IOP1+MainPGURL+"?username="+$("#TXTusername").val();;
		window.open(IOP1+MainPGURL, '_blank','toolbar=no,location=0');	
		//window.open(IOP1+MainPGURL,"_blank",'toolbar=no;location=0,height=800px,width=1350px,resizable:yes;scrollbars=yes,status=yes'); 
			return;
			}*/
	
				
	var IOP=window.location.origin+'';
	
	
	var op= UI_Logingetdata('','','','','','Sam_sGetNewsfeeds');
		
	op= op.replace(/<Resultset><a><HTML>/g, "");	
	op= op.replace('</HTML></a></Resultset>',''); 
	$('.logocontnt').append(op);
	
	
	
	$("input").keypress(function(event) {
	    if (event.which == 13) {
	        event.preventDefault();
			this.blur();
	      //  if($(".jMsgbox-ok").val() == undefined)
			//{
	       $("#CheckSignInBtn").trigger("click");
		   
			//}
			
			//$("body").focus();
			
	    }
	});
	
	$("#Refreshbtn").click(function(){
randomnum();
});
	
	 $('#CheckSignInBtn').click(function () {		 
	
	// var a = window.confirm("Would you like to login");
	 this.blur();
	 var STCHK = GetCurrentUser();
	 var STCHKFName = GetCurrentUserFName();
	 
		if (STCHK != "roleAnonymous")
			{			
		 document.getElementById("TXTpwd").value="";
			alert("Session Already Exists!!! User : "+STCHKFName);
			return;
			}
	 var value= ValidCaptcha()
	if(value==false)
	{
		document.getElementById("txt3").value = '';
	alert('Enter the Correct Value');
	return
	}
	 
	 
	 
	  var LgnAttmptChk =UI_Logingetdata('Login',$("#TXTusername").val(),'Check','','',"Sam_SLoginAttempt"); 
	 if($(LgnAttmptChk).find('Result').text()!="")
	 {
	// window.alert($(LgnAttmptChk).find('Result').text())
	 //$('fieldset').prepend("<p><label><font color=\"red\">"+$(LgnAttmpt).find('Result').text()+"</font></label></p>");
	 $("#ErrorTXT").text($(LgnAttmptChk).find('Result').text());
	 return;
	 }
		//if(tmp != "")
		//{tmp.close();}
	//if(v==true)
	//{
	//alert('hi');
	SessionLogin();
	if (document.getElementById("SubmitSuccess").value=="Valid")
			{			
			//window.location= IOP1+MainPGURL+"?username="+$("#TXTusername").val();	
document.getElementById("txt3").value = '';	
 document.getElementById("TXTpwd").value="";
 
 UI_Logingetdata('Login',$("#TXTusername").val(),'Success','','',"Sam_SLoginAttempt");

 
  			 var loginChk = GetLoginAllowChk();
	 
	 if(loginChk=="No")
	 {		
	   var Cf= confirm("Active Session Already exists, Do You Want to Force Login?")
				if (Cf==true) 
				{
				postToServer();
				//var loginChk = GetLoginAllowChk();
				}
				else
				{
				var endtime="";
				//var res= UI_Logingetdata(Username,sessionVar,"","","","SAM_sMultiSessionUpdt")
				AppliLogout();
				document.getElementById("TXTpwd").value="";
				 return;
				}
			    
		
	 }
 
 
 $("#ErrorTXT").text("");
 /*var LoginURL = UI_Logingetdata($("#TXTusername").val(),$("#TXTCode").val(),'','','',"SAm_SFrontOffConfig");
 
 
  if($(LoginURL).find('Alert').text() != "")
 {
	 //alert($(LoginURL).find('Alert').text())
	 $("#ErrorTXT").text($(LoginURL).find('Alert').text());	
	 AppliLogout();
	 return
 }
 else{
 $("#ErrorTXT").text("");
 MainPGURL= $(LoginURL).find('Result').text();
 }
 
 */
 // openWindow(IOP1+MainPGURL);
 $.ajax({
	      //url: "Upto50L/CS_FetchFormFieldData",
	      url: window.location.origin+"/ThemePro_SCF/LGS",	   
	        data: { },
	      async: false,
	     // dataType: "json",
	      type: 'GET',
	      success: function (xml){
              //fetchdropdown('',param4,param5,xml);
		 openWindow(IOP1+MainPGURL);
		   },
	  });
 

 //tmp = window.open(IOP1+MainPGURL, '_blank','toolbar=no,location=0,resizable=1');	
 
 //alert(tmp.document.getElementById("SubmitSuccess").value);
 
 //window.child
 
  //window.postMessage('CrntSessionWLCM', IOP1+MainPGURL);
 document.getElementById("SubmitSuccess").value="";


 //window.top.close();
//window.open(IOP1+MainPGURL,"_s",'toolbar=no;location=0,height=800px,width=1350px'); 	
	//	return;
			
		//	}
			
	}
else
{
	
	var LgnAttmpt =UI_Logingetdata('Login',$("#TXTusername").val(),'Invalid','','',"Sam_SLoginAttempt");
//window.alert($(LgnAttmpt).find('Result').text());

//$('fieldset').prepend("<p><label><font color=\"red\">"+$(LgnAttmpt).find('Result').text()+"</font></label></p>");

$("#ErrorTXT").text($(LgnAttmpt).find('Result').text());


	 document.getElementById("TXTpwd").value="";
}	
randomnum();
	 });
	 
	 //OTP Login Start
	 $('#CheckSignInBtnOTP').click(function () {		 
	
	/**Validate OTP Start**/
	
	/**Validate OTP End**/
	
	// var a = window.confirm("Would you like to login");
	 this.blur();
	 var STCHK = GetCurrentUser();
	 var STCHKFName = GetCurrentUserFName();
	 
		if (STCHK != "roleAnonymous")
			{			
		 document.getElementById("TXTpwd").value="";
			alert("Session Already Exists!!! User : "+STCHKFName);
			return;
			}
	 var value= ValidCaptcha()
	if(value==false)
	{
		document.getElementById("txt3").value = '';
	alert('Enter the Correct Value');
	return
	}
	 
	 
	 
	  var LgnAttmptChk =UI_Logingetdata('Login',$("#TXTusername").val(),'Check','','',"Sam_SLoginAttempt"); 
	 if($(LgnAttmptChk).find('Result').text()!="")
	 {
	// window.alert($(LgnAttmptChk).find('Result').text())
	 //$('fieldset').prepend("<p><label><font color=\"red\">"+$(LgnAttmpt).find('Result').text()+"</font></label></p>");
	 $("#ErrorTXT").text($(LgnAttmptChk).find('Result').text());
	 return;
	 }
		//if(tmp != "")
		//{tmp.close();}
	//if(v==true)
	//{
	//alert('hi');
	SessionLogin();
	if (document.getElementById("SubmitSuccess").value=="Valid")
			{			
			//window.location= IOP1+MainPGURL+"?username="+$("#TXTusername").val();	
document.getElementById("txt3").value = '';	
 document.getElementById("TXTpwd").value="";
 
 UI_Logingetdata('Login',$("#TXTusername").val(),'Success','','',"Sam_SLoginAttempt");

 
  			 var loginChk = GetLoginAllowChk();
	 
	 if(loginChk=="No")
	 {		
	   var Cf= confirm("Active Session Already exists, Do You Want to Force Login?")
				if (Cf==true) 
				{
				postToServer();
				//var loginChk = GetLoginAllowChk();
				}
				else
				{
				var endtime="";
				//var res= UI_Logingetdata(Username,sessionVar,"","","","SAM_sMultiSessionUpdt")
				AppliLogout();
				document.getElementById("TXTpwd").value="";
				 return;
				}
			    
		
	 }
 
 
 $("#ErrorTXT").text("");
 /*var LoginURL = UI_Logingetdata($("#TXTusername").val(),$("#TXTCode").val(),'','','',"SAm_SFrontOffConfig");
 
 
  if($(LoginURL).find('Alert').text() != "")
 {
	 //alert($(LoginURL).find('Alert').text())
	 $("#ErrorTXT").text($(LoginURL).find('Alert').text());	
	 AppliLogout();
	 return
 }
 else{
 $("#ErrorTXT").text("");
 MainPGURL= $(LoginURL).find('Result').text();
 }
 
 */
 // openWindow(IOP1+MainPGURL);
 $.ajax({
	      //url: "Upto50L/CS_FetchFormFieldData",
	      url: window.location.origin+"/ThemePro_SCF/LGS",	   
	        data: { },
	      async: false,
	     // dataType: "json",
	      type: 'GET',
	      success: function (xml){
              //fetchdropdown('',param4,param5,xml);
		 openWindow(IOP1+MainPGURL);
		   },
	  });
 

 //tmp = window.open(IOP1+MainPGURL, '_blank','toolbar=no,location=0,resizable=1');	
 
 //alert(tmp.document.getElementById("SubmitSuccess").value);
 
 //window.child
 
  //window.postMessage('CrntSessionWLCM', IOP1+MainPGURL);
 document.getElementById("SubmitSuccess").value="";


 //window.top.close();
//window.open(IOP1+MainPGURL,"_s",'toolbar=no;location=0,height=800px,width=1350px'); 	
	//	return;
			
		//	}
			
	}
else
{
	
	var LgnAttmpt =UI_Logingetdata('Login',$("#TXTusername").val(),'Invalid','','',"Sam_SLoginAttempt");
//window.alert($(LgnAttmpt).find('Result').text());

//$('fieldset').prepend("<p><label><font color=\"red\">"+$(LgnAttmpt).find('Result').text()+"</font></label></p>");

$("#ErrorTXT").text($(LgnAttmpt).find('Result').text());


	 document.getElementById("TXTpwd").value="";
}	
randomnum();
	 });
	 //OTP Login End


$(window).bind('beforeunload', function(){
  return 'Are you sure you want to leave?';
});
	 
window.onunload = function() {
   // tmp.close();
}

randomnum(); 	 
	 
});



function openWindow(windowUrl)
 {
  if ( (g_windowReference == null) || (g_windowReference.closed == true) )
  {
   var windowId = 'ChildWindow_' + new Date().getTime();
   var windowFeatures = "_blank','toolbar=no,location=0,resizable=1"
	
g_windowReference = window.open(windowUrl, windowId, windowFeatures);

  g_windowReference.document.title = 'A new title';
   g_windowReference.focus();
  }
 }
 function closeWindow()
 {
  if ( (g_windowReference != null) && (g_windowReference.closed == false) )
  {
   g_windowReference.close();
   g_windowReference = null;
  }
 }
 function updateParent(valueSent)
 {
  // Do something with valueSent...

 alert(valueSent);
 }
 
 function ValidCaptcha(){
var total=parseInt($('#txt1').val())+parseInt($('#txt2').val());
var total1=$('#txt3').val();
if(total!=total1)
{
//alert("Wrong Calculation Entered");
randomnum();
return false;
}

randomnum();
		
        
    }
	
	function randomnum()
{
var number1 = 1;
var number2 = 9;
var randomnum = (parseInt(number2) - parseInt(number1)) + 1;
var rand1 = Math.floor(Math.random()*randomnum)+parseInt(number1);
var rand2 = Math.floor(Math.random()*randomnum)+parseInt(number1);
document.getElementById("txt1").value = rand1;
document.getElementById("txt2").value = rand2;
//$(".rand1").html(rand1);
//$(".rand2").html(rand2);
document.getElementById("txt3").value = '';		
}

 window.onunload = function ()
 {
  closeWindow();
 }
 window.onfocus = function ()
 {
  if ( (g_windowReference != null) && (g_windowReference.closed == false) )
  {
   g_windowReference.focus();
  }
 }
 
 
 function GetLoginAllowChk()
{
	var userid= $("#TXTusername").val();
		var date = new Date();
		currentDate = date.getDate();    
		month       = date.getMonth() + 1; 
		year        = date.getFullYear();	
		hour = date.getHours();
		min  = date.getMinutes();
		sec  = date.getSeconds();
		var curdate = "" + year + "-" + month + "-" + currentDate+ " " +hour+ ":" +min+ ":" +sec
	
	var op= UI_Logingetdata(userid,"","","","","sam_sGetLoginAllowChk");
	
	op = $(op).find('Result').text();
	
	if(op=='Not Allow')
	{
			document.getElementById("TXTpwd").value="";
			//alert("You are already Logged in!!!");
			return "No";
	}
	
	
	
}


 
 
 function GetPassword()
 {
 var STCHK = GetCurrentUser();
 var STCHKFName = GetCurrentUserFName();
	 
		if (STCHK != "roleAnonymous")
			{			
		 document.getElementById("TXTpwd").value="";
			alert("Session Already Exists!!! User : "+STCHKFName);
			return;
			}
	 
	var usrname= $("#TXTusername").val();


if(usrname !='')
{	

 var OPXML = UI_Logingetdata(usrname,"","","","","SAM_SGetLoginPwd");
 var To=$(OPXML).find("Result").text()

 if(To=='No')
 {
	 alert('Enter Correct Username');
 }
 
 if($(OPXML).find("Error").text()!='')
 {
 window.alert($(OPXML).find("Error").text())
 return;
 }
 
 else
 {
	  var UserId=$(OPXML).find("UserId").text()
	  var Code=$(OPXML).find("Code").text()
	  var RefId=$(OPXML).find("RefId").text()
	  var Email=$(OPXML).find("Email").text()
	  if(Email=="")
	  {
		alert('Kindly Contact IT Team No Mail Id Available')  
	  }
	 else
	 {
		 
	var Res=RcvyEmail(UserId,Email,Code)
	if(Res!='Proceed')
	{
	sessionStorage.Userid = UserId;
	sessionStorage.Reqid = RefId;
	
	var PwdURL = '/ThemePro_SCF/RecvPswrd';
	var IOP1='http://'+window.location.hostname+':'+LoadFrmXML("PT001");
	openWindow(IOP1+PwdURL);

	document.getElementById("SubmitSuccess").value="";
	}
}
 }
 
}
else{
	
 alert('Enter the Username');	
}
	 

 }
 
 function GetMoblOTP(){
       
       //var param1="C19000065";
	   var param1=$("#TXTCodeOTP").val();
       //var param2="C19000065_U1";
	   var param2=$("#TXTusernameOTP").val();
       var param3="";
       var param4="";
       var param5="";
       var spname1="SAM_SgetRecepientDataToSMSFrOTP";
       var spname2="LSW_supdateSMSstatus";
       
       
              
              //valid();
              $.ajax({
                     type : "POST",
                     url : "/TPLSW/sendSMS",
                     data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,spname1: spname1,spname2: spname2 },
                     
                     success : function(data){
                           alert("OTP Send Successfully");
                           //$("#Degree1").val($("#Degree1 option:first").val());
                           //$("#tablefetch option:first").attr('selected','selected');
                            //alert("Success");
                     },
                     error : function(e){
                           //alert("Fail");
                     }
              });
}
