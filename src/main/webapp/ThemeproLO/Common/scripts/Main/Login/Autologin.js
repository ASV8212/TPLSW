var tmp="";

var g_windowReference = null;
$(document).ready(function () {
var username=getUrlParam("username");
var paswrd="themepass";


$("#TXTusername").val(username);
$("#TXTpwd").val(paswrd);

	 var IOP1='http://'+window.location.hostname+':'+window.location.port;
	 
	 var MainPGURL=LoadFrmXML("PG002");
	 
	 
SessionLogin();
if (document.getElementById("SubmitSuccess").value=="Valid")
			{			
 document.getElementById("TXTpwd").value="";

 //openWindow(IOP1+MainPGURL);
 
 //window.location.href=IOP1+MainPGURL;
 document.getElementById("SubmitSuccess").value="";
	window.location=IOP1+MainPGURL;		
	}
	else{
		
		window.close();
	}
});
 /*(function() 
{
    var bgCounter = 0,
        backgrounds = [
           "ThemeproLO/Common/Images/image1.jpg ",
           "ThemeproLO/Common/Images/image2.jpg",
           "ThemeproLO/Common/Images/image3.jpg"
        ];
    function changeBackground()
    {
        bgCounter = (bgCounter+1) % backgrounds.length;
        $('body').css('background','#000 url('+backgrounds[bgCounter]+') no-repeat');
        
        setTimeout(changeBackground, 4000);

    }
    changeBackground();
   
})();*/

/*
var images = [
              "ThemeproLO/Common/Images/image1.jpg ",
              "ThemeproLO/Common/Images/image2.jpg",
              "ThemeproLO/Common/Images/image3.jpg"
           ];
var i = 0;

setInterval(function(){
    $('body').css('background-image', function() {
        if (i >= images.length) {
            i=0;
        }
        return 'url(' + images[i++] + ')'; 
    });
}, 5000);
*/

$(function () {
	
	
    
    $('.list-inline li > a').click(function () {
        var activeForm = $(this).attr('id');
        //console.log(activeForm);
       
        if(activeForm == "LoginA")
        	{
        	$("#LoginForm").addClass('magictime swap');
        	$("#login").show();
        	$("#forgot").hide();
        	 $("#ForgotForm").removeClass('magictime swap');
        	}
        else if (activeForm == "ForgotA")
        	{
        	 $("#ForgotForm").addClass('magictime swap');
        	$("#forgot").show();
        	$("#login").hide();
        	$("#LoginForm").removeClass('magictime swap');
        	}
        
        //set timer to 1 seconds, after that, unload the magic animation
    /*  setTimeout(function () {
            $(activeForm).removeClass('magictime swap');
        }, 1000);*/
    });
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