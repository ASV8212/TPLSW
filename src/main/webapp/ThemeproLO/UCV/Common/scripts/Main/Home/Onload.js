function CustomPageLoad(URL,Menuname) {

	 var IOP=window.location.origin+'/jw';
	 
	 var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= Rdpage;	
			return;
			}
		
    var user = GetCurrentUser();
    //var Path = 'http://103.230.85.234:1011/';
    $.ajax({

        url: "/ThemePro_LSW/UI_formdata_GetMenuURL",
        data: { URL: URL },
        async: false,
       // dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
            if (data == 'empty') {
            	var a;
            }
            else {
                URL = data;
                if (URL != "") {

                   // URL = URL + "?username=" + user;

                    URL = URL + "?MenuName=" + Menuname;
                    window.location.assign(URL);
                }

            }
        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });

/*
    URL = URL + "?username=" + user;

    URL = URL + "&MenuName=" + Menuname;
    window.location.assign(URL);

   // document.getElementById('PageIframe').scrolling = 'yes';
   */
}

$(document).ready(function () {

	var IOP=window.location.origin;
	
		
	
	var LoginPGURL=LoadFrmXML("PG001");
	 	 
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= IOP+LoginPGURL;	
			return;
			}
			
			 var Username = GetCurrentUser();
	 //var Username = "admin";
				var MenuName = getUrlParam("MenuName");
			
			//Get Welcome MSG Start
			

$("#Wel1").text("Welcome "+Username);

var OPXML = UI_getdata(Username,"","","","","Sam_sGetUsrBrchDesig");

if($(OPXML).find("groupId").text() !="")
{
$("#Wel2").text($(OPXML).find("groupId").text() +", "+ $(OPXML).find("Name").text() );
}

//Get Welcome MSG End
			
			

   
    $.ajax({

        url: "/ThemePro_LSW/UI_formdata_GetMainPageHTML",
        data: { Username: Username, MenuName: MenuName },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
            if (data == 'Success') {                              	 

            }
            else {

                var str_array = data.split('|');

                var HTML = str_array[0];
                var HTML1 = str_array[1];

                $("#MenuPageSideBar").append(HTML);
                $("#MenuPageDashBoard").append(HTML1);
               // iframeurl();
                //alert(data);
            }
        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });

    

});



$(function () {
    $('ul.tabs li:first').addClass('active');

    $('ul.tabs li:first').trigger('click');

    $('ul.tabs li').on('click', function () {

        $('ul.tabs li').removeClass('active');
        $(this).addClass('active')

        $('#PathLabel').innerHTML = "";

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).show();
        return false;


    });

    $('ul.tabs li ul li ul li').on('click', function () {

        $('ul.tabs li ul li ul li').removeClass('active');
        $('ul.tabs li ul li').removeClass('active');

        var FirstParentNode = this.parentNode.parentNode;
        var SecondParentNode = this.parentNode.parentNode.parentNode.parentNode;

        $(this).addClass('active');
        $(FirstParentNode).addClass('active');
        $(SecondParentNode).addClass('active');


        var Active1 = $('.active')[0];
        var Active2 = $('.active')[1];
        var Active3 = $('.active')[2];

        var ActivePath1 = $(Active1).find('a')[0].innerHTML;
        var ActivePath2 = $(Active2).find('a')[0].innerHTML;
        var ActivePath3 = $(Active3).find('a')[0].innerHTML;

        ActivePath1 = ActivePath1.replace('<span>', '');
        ActivePath1 = ActivePath1.replace('</span>', '');

        ActivePath2 = ActivePath2.replace('<span>', '');
        ActivePath2 = ActivePath2.replace('</span>', '');

        ActivePath3 = ActivePath3.replace('<span>', '');
        ActivePath3 = ActivePath3.replace('</span>', '');

        document.getElementById('PathLabel').innerHTML = ActivePath1 + "->" + ActivePath2 + "->" + ActivePath3;

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).show();
        return false;


    });

})

