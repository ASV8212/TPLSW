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
	
	if($("#UNA").val()=="UnAccess")
			{
			alert("Illegal Access!! Session logged out")
			AppliLogoutLogin();
			}
	
	$("#Refreshbtn").click(function(){
randomnum();
});
	
	 $('.CheckSignInBtn').click(function () {		 
	
	// var a = window.confirm("Would you like to login");
	 this.blur();
	/* var STCHK = GetCurrentUser();
	 var STCHKFName = GetCurrentUserFName();
	 
		if (STCHK != "roleAnonymous")
			{			
		 document.getElementById("TXTpwd").value="";
		/*	alert("Session Already Exists!!! User : "+STCHKFName + ", existing session will be logged out");
			
			
		//	AssignmentManager.logout(window.location.origin+"/jw");	


			
		//	return;
			}*/
	 var value= ValidCaptcha()
	if(value==false)
	{
		document.getElementById("txt3").value = '';
	alert('Enter the Correct Value');
	return
	}
	 
	 
	/* 
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
 var LoginURL = UI_Logingetdata($("#TXTusername").val(),$("#TXTCode").val(),'','','',"SAm_SFrontOffConfig");
 
 
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
 
  var IPval = $("#TXTIP").val();
 
 if (IPval == "")
	 {
	 IPval = "NIP";
	 }

 // openWindow(IOP1+MainPGURL);
	 $.ajax({
	      //url: "Upto50L/CS_FetchFormFieldData",
	      url: window.location.origin+"/TPLSW/LGS?parma="+Base64.encode($("#TXTusername").val())+"&CPM="+$("#TXTCode").val()+"&parmb="+Base64.encode($("#TXTpwd").val())+"&parmc="+Base64.encode(IPval),
	        data: { },
	      async: false,
	     // dataType: "json",
	      type: 'GET',
	      success: function (xml){
             //fetchdropdown('',param4,param5,xml);
		// openWindow(IOP1+MainPGURL);
	    	 
	    	  if(xml.split("|")[0] == "LOGIN SUCCESSFUL")
	    		  {
	    		  
	    		  if (xml.split("|")[1] != "")
	    			  {	    		  
		window.location.href=IOP1+"/TPLSW/" + xml.split("|")[1];
	    			  }
	    		  else
	    			  {
	    			  alert("Login Failed for the User!!! Contact IT");
	    			  }
	    		  }
	    	  else
	    		  {
	    		  alert(xml.split("|")[0]);
	    		  }
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
			
	/*}
else
{
	
	var LgnAttmpt =UI_Logingetdata('Login',$("#TXTusername").val(),'Invalid','','',"Sam_SLoginAttempt");
//window.alert($(LgnAttmpt).find('Result').text());

//$('fieldset').prepend("<p><label><font color=\"red\">"+$(LgnAttmpt).find('Result').text()+"</font></label></p>");

$("#ErrorTXT").text($(LgnAttmpt).find('Result').text());


	 document.getElementById("TXTpwd").value="";
}	*/
randomnum();
	 });
	 
	 //OTP Login Start
	 $('.CheckSignInBtnOTP').click(function () {	


	/**Validate OTP Start**/
	var LgnAttmpt =UI_Logingetdata($('#TXTCodeOTP').val(),$("#TXTusernameOTP").val(),$('#TXTOTP').val(),'','',"SCF_sValdtOTP");
	if($(LgnAttmpt).find('Result').text()!="OTP Verified")
	{
		alert($(LgnAttmpt).find('Result').text());
		return;
	}
	/**Validate OTP End**/	 
	$("#TXTusername").val($("#TXTusernameOTP").val())
	$("#TXTpwd").val($(LgnAttmpt).find('PSWD').text())
	
	
	 this.blur();
	 var STCHK = GetCurrentUser();
	 var STCHKFName = GetCurrentUserFName();
	 

	  var LgnAttmptChk =UI_Logingetdata('Login',$("#TXTusernameOTP").val(),'Check','','',"Sam_SLoginAttempt"); 
	 if($(LgnAttmptChk).find('Result').text()!="")
	 {
	 $("#ErrorTXTOTP").text($(LgnAttmptChk).find('Result').text());
	 return;
	 }

	SessionOTPLogin();
	if (document.getElementById("SubmitSuccess").value=="Valid")
			{			
document.getElementById("txt3").value = '';	
 document.getElementById("TXTpwd").value="";
 
 UI_Logingetdata('Login',$("#TXTusernameOTP").val(),'Success','','',"Sam_SLoginAttempt");

 
  		/*	 var loginChk = GetLoginAllowChk();
	 
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
			    
		
	 }*/
 
 
 $("#ErrorTXTOTP").text("");
 var LoginURL = UI_Logingetdata($("#TXTusernameOTP").val(),$("#TXTCodeOTP").val(),'','','',"SAm_SFrontOffConfig");
 
 
  if($(LoginURL).find('Alert').text() != "")
 {
	 //alert($(LoginURL).find('Alert').text())
	 $("#ErrorTXTOTP").text($(LoginURL).find('Alert').text());	
	 AppliLogout();
	 return
 }
 else{
 $("#ErrorTXTOTP").text("");
 MainPGURL= $(LoginURL).find('Result').text();
 }

 $.ajax({

	      url: window.location.origin+"/TPLSW/LGS?User="+$("#TXTusernameOTP").val()+"&CPM="+$("#TXTCodeOTP").val(),	   
	        data: { },
	      async: false,
	     // dataType: "json",
	      type: 'GET',
	      success: function (xml){

		window.location.href=IOP1+MainPGURL;
		   },
	  });
 
 document.getElementById("SubmitSuccess").value="";
			
	}
else
{
var LgnAttmpt =UI_Logingetdata('Login',$("#TXTusernameOTP").val(),'Invalid','','',"Sam_SLoginAttempt");

$("#ErrorTXTOTP").text($(LgnAttmpt).find('Result').text());

}	
	 });
	//OTP Login End

	
	
$(window).bind('beforeunload', function(){
  //return 'Are you sure you want to leave?';
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
	
	var PwdURL = '/TPLSW/RecvPswrd';
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
 
 
function RstPswd()
{
  
var UsrNme=$("#TXTusernameFW").val();
var CmpnyCde=$("#TXTCodeFW").val();
var OTPVAL=$("#TXTOTPFW").val();
var NewPswd=$("#TXTNewPasswordFW").val();
var CnfPswd=$("#TXTCPasswordFW").val();

if(OTPVAL=="")
{
alert("Kindly enter valid OTP!!");
return;
}

if(NewPswd!=CnfPswd)
{
alert("Password Doesn't Match!!");
return;
}



if(NewPswd!="")
{
        if(NewPswd != CnfPswd)
		{
		alert("Password doesn't match")
		$("#TXTNewPasswordFW").val('')
		$("#TXTCPasswordFW").val('')
		//$("#TXTOTPFW").val('')
		return
        }
			
	///Start
	var p= NewPswd
    var anUpperCase = /[A-Z]/;
    var aLowerCase = /[a-z]/; 
    var aNumber = /[0-9]/;
    var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
   
    if(p.length < 8){
       alert("Password Should contain 8 characters!!");
	   $("#TXTNewPasswordFW").val('')
		$("#TXTCPasswordFW").val('')
		//$("#CrntPswrd").val('')
		
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
		  $("#TXTNewPasswordFW").val('')
		$("#TXTCPasswordFW").val('')
		return
    }
	
}	
else
{
	alert("Valid Password format atleast \n 1 special character,\n 1 Upper-case,\n 1 Lower-case, \n 1 Number.");
	  $("#TXTNewPasswordFW").val('')
		$("#TXTCPasswordFW").val('')
		return
}



$.ajax({
          //url: "Upto50L/CS_Migrformdata",
          url: "/TPLSW/UI_PasswordUpdate",
          data: { Username: UsrNme,Reqid :"",Code :OTPVAL,NewPassword:NewPswd},
          async: false,
         // dataType: "json",
          type: 'POST',
          success: function (res) {
         
		
		if(res.split('|')[0]=="Failure")
		{
		alert(res.split('|')[1]) 	
		location.reload(); 
		}
		else
		{
			alert(res.split('|')[1]) 
			location.reload(); 
		}
         },
         

      });
	 
 }
 
 function OTPUsrNmeVrfy()
 {
 
 
 var param1=$("#TXTusernameFUN").val();
 var param2=$("#TXTOTPFUN").val();
  
var OPXML = UI_Logingetdata(param1,"",param2,"","","SAM_SGetFrgtUNme");
//$("#ErrorTXTFUNME").text($(OPXML).find("Result").text())

var OPXML1 = UI_Logingetdata($(OPXML).find("email").text(),"Forget UserName",$(OPXML).find("Result").text(),"","","SCF_sGetData2SndMail");
if($(OPXML).find("email").text() != "")
{
	//var To=$(OPXML1).find("to").text().slice(0,-1);
	var To=$(OPXML1).find("to").text();
	var Title=$(OPXML1).find("Subject").text();
	//var MsgContent=$(OPXML).find("Content").text().replace('&____Param','&Param');
	//var MsgContent=$(OPXML1).find("content").text()
	var MsgContent=$(OPXML1).find("url").text();
	var ccEmail = $(OPXML1).find("cc").text();
	var fromMail = $(OPXML1).find("fromId").text();
	var fromPwd =$(OPXML1).find("password").text();
	var Prophost =  $(OPXML1).find("host").text()+"|"+$(OPXML1).find("port").text();
	var FleNme =$(OPXML1).find("Subject").text();
	var RptUrl =$(OPXML1).find("url").text();
	var username = $(OPXML1).find("UserName").text();
	RptUrl=RptUrl.replace('&____param','&param')
	var rt="";
	
	$.ajax({
		type : "POST",
		url : "/TPLSW/MailSendWthAttchRPTBdy",
		data: {To:To,Title:Title,MsgContent:MsgContent,fromMail:fromMail,fromPwd:fromPwd,Prophost:Prophost,ccEmail:ccEmail,FleNme:FleNme,RptUrl:RptUrl,username:username},
		
		success : function(data){
			if(data=='Success')
				{
					rt=data;
					alert("Mail Send");
				}
				else
				{
				alert(data);
				return;
				}
			
			//$("#Degree1").val($("#Degree1 option:first").val());
			//$("#tablefetch option:first").attr('selected','selected');
			//alert("Success");
		},
		error : function(e){
			//alert("Fail");
		}
	});
}
 }
 
 /**function DisbAdvc(PRCSID)
{
	
	 var OPXML = UI_getdata(PRCSID,"","Vendor","User","","LSW_TGetDisbAdveRptMail");
	 
	 
	 if($(OPXML).find('Flag').text()=='Yes')
	 {	
			var To=$(OPXML).find("Email").text().slice(0,-1);
			var Title=$(OPXML).find("Subject").text();
			var MsgContent=$(OPXML).find("Content").text().replace('&____Param','&Param');
			var ccEmail = $(OPXML).find("ccEmail").text();
			var fromMail = $(OPXML).find("SendMail").text();
			var fromPwd =$(OPXML).find("Password").text();
			var Prophost =  $(OPXML).find("HostName").text()+'|'+$(OPXML).find("PortNo").text();
			var FleNme =$(OPXML).find("FleNme").text();
			var RptUrl =$(OPXML).find("RptUrl").text();
			RptUrl=RptUrl.replace('&____param','&param')
			 var rt='Proceed';

			// parser.parseFromString(MsgContent, "text/html")
			// let MsgContent = new DOMParser().parseFromString(MsgContent1, 'text/html');
		if(To!='')
			{	 
			$.ajax({
		        url:"/ThemePro_LSW/MailSendWthAttchRPTBdy",
		        type: 'POST',
		        async:false,
		        data: {To:To,Title:Title,MsgContent:MsgContent,fromMail:fromMail,fromPwd:fromPwd,Prophost:Prophost,ccEmail:ccEmail,FleNme:FleNme,RptUrl:RptUrl},
		        success: function(stm){	
				if(stm=='Success')
				{
					rt=stm;
				}
				else
				{
				alert(stm);
				return;
				}
		        	
		        },
		        });
	}
	return rt;
	 }	
	
	
}**/
 
 
 
 
 
 function RstOTPPswd()
 {
 

 var param2=$("#TXTCodeFW").val();
 var param1=$("#TXTusernameFW").val();
 var param3="";
 var param4="";
 var param5="";
 var spname1="Lsw_sMobForgetPassword";
 var spname2="LSW_supdateSMSstatus";

if(param1=="")
{
alert("Kindly enter Companycode!!");
return;
}

if(param2=="")
{
alert("Kindly enter Userid!!");
return;
}

   
	   
	   
   $.ajax({
    type : "POST",
    url : "/TPLSW/sendSMS",
    data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,spname1: spname1,spname2: spname2 },
	success : function(data){
    alert("OTP Send Successfully");
    },
    error : function(e){
    }
    });

}


function RstOTPUsrNme()
{
 
 var param1=$("#TXTusernameFUN").val();
 var param2="";
 var param3="";
 var param4="";
 var param5="";
 var spname1="Lsw_sMobWthUsrNme";
 var spname2="LSW_supdateSMSstatus";

if(param1=="")
{
alert("Kindly enter MobileNo!!");
return;
}

	   
   $.ajax({
    type : "POST",
    url : "/TPLSW/sendSMS",
    data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,spname1: spname1,spname2: spname2 },
	success : function(data){
    alert("OTP Send Successfully");
    },
    error : function(e){
    }
    });

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



