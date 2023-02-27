$(document).ready(function () {
	
	loaded();	
	function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text('Page expires in : '+minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var threeMinutes = 60 * 1,
        display = $('#time');
    startTimer(threeMinutes, display);
});

	var userid=sessionStorage.getItem("Userid");
	var reqid=sessionStorage.getItem("Reqid");
	
	 $('#Recvorypwd').click(function () {		
if($('#Code').val()=='')
{
	alert("Enter the code");
	
}
else
{
	
	var res= PwdChange();
	if(res=='Success')
	{
	RecvorySessionLogin();
	Profile();
	}
	
	else
	{
		alert("Enter the Correct code");
		
	}
}
	 
	 
	 });
 window.onunload = function() {
 var OP=UI_getdata(userid,reqid,$('#Code').val(),"","Unload","SAM_SRecovPwdChng");
    AppliLogout();
	
}
	 
			
});
  
  
 
  
  function OnError1(xmlRequest) {
	     alertify.alert(LoadFrmXML("V0076"));
	}
	
	
	function RecvorySessionLogin()
{
	
	var IOP='http://'+window.location.hostname+':'+LoadFrmXML("PT001")+LoadFrmXML("PG011");
	var IOP1='http://'+window.location.hostname+':'+LoadFrmXML("PT001");
	//var MainPGURL=LoadFrmXML("PG001");
	var SChk="";
	
	 $.ajax({
	        url:         IOP,
		    async: false,
	        dataType:    'jsonp',
			data:        '',
	        processData: false,
	        success:     function(data) {
                    SChk = "Success"
                }
	    });
//	window.alert(SChk);
	
	
	//AssignmentManager.logout(IOP);
	
	 var CHK="";
	 var IOP='http://'+window.location.hostname+':'+LoadFrmXML("PT001")+'/jw';
	var MainPGURL='http://'+window.location.hostname+':'+LoadFrmXML("PT001")+LoadFrmXML("PG004");
	 
	var username=sessionStorage.getItem("Userid");
	var pwd='Theme@1234';
	
	$.ajax({
            type: "POST",
            url: MainPGURL,
			async:false,
            data: {
                username: username,
                password: pwd
            },
			dataType: "json",
            success: function(res) {
                //console.log("username (" + res.username + ") is " + ((res.isAdmin !== undefined && res.isAdmin === "true")?"admin":"not an admin"));
            document.getElementById("SubmitSuccess").value="Valid";
			 
			},            
			error:function(response){
			//alertify.alert("Incorrect username or password");
			//alertify.alert(LoadFrmXML("V0125"));
			window.alert(LoadFrmXML("V0125"));
	}
        });
	
	/*
var callback = {

    success : function(response){

        //response.username && response.isAdmin

        if(response.username != "roleAnonymous"){
            
				document.getElementById("SubmitSuccess").value="Valid";
				
			
        }else{

            alert("Fail to login user!");
  
        }

    },
	error:function(response){
		alert("Incorrect username or password");
	}

};

AssignmentManager.login(IOP, username, pwd, callback);*/
//AssignmentManager.loginWithHash(IOP, username, pwdHash, callback);
		
}


function PwdChange()
{
	
	var userid=sessionStorage.getItem("Userid");
	var reqid=sessionStorage.getItem("Reqid");
	var OP=UI_getdata(userid,reqid,$('#Code').val(),"","Submit","SAM_SRecovPwdChng");
	
	return $(OP).find('Result').text();
	
}

function loaded()
{
    
    window.setTimeout(CloseMe, 60000);
}
function CloseMe() 
{

	var userid=sessionStorage.getItem("Userid");
	var reqid=sessionStorage.getItem("Reqid");
	var OP=UI_getdata(userid,reqid,$('#Code').val(),"","Unload","SAM_SRecovPwdChng");
    window.close();
	
}

/* window.close = function() {
    AppliLogout();
	
}*/