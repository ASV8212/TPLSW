
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
	
	$("#UPhide").click();
    
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