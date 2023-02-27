
$(document).ready(function () {
		
		//alert($(document).height());
		
		if($(document).height() <= 676)
		{			
			document.getElementById('PageIframe').style.height="610px"
			
		}
		else{
			
			document.getElementById('PageIframe').style.height="584px"
			
		}
		
	 var IOP1=window.location.origin+'/jw';
	 
	  var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= Rdpage;	
			return;
			}
	var IOP=window.location.origin+'';
	
	var Username = GetCurrentUser();
    var MenuName = getUrlParam("MenuName");
	
				//Get Welcome MSG Start
			
//
			$('#Tab1').find('a').text(MenuName);
//
			
			
$("#Wel1").text("Welcome "+Username);

var OPXML = UI_getdata(Username,"","","","","Sam_sGetUsrBrchDesig");

if($(OPXML).find("groupId").text() !="")
{
$("#Wel2").text($(OPXML).find("groupId").text() +", "+ $(OPXML).find("Name").text() );
}

//Get Welcome MSG End
	
	
    $.ajax({

        url: "/ThemePro_LSW/UI_formdata_GetSubPageHTML",
        data: { Username: Username, MenuName: MenuName },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
            if (data == 'Success') {



            }
            else {
                $("#Subpage").append(data);
                iframeurl();
                //alert(data);
            }
        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });


});


function iframeurl() {
  
	var url=window.location.origin+'/ThemePro_LSW/QueueDashBoard';
    //var url = IOP+'/Main/QueueDashBoard';
   // var url = 'http://192.168.1.103:1011/Main/QueueDashBoard';
    //var username = GetCurrentUser();
    var MenuName = getUrlParam("MenuName");
    var param = '?MenuName=' + MenuName;

    url = url + param;
    document.getElementById('PageIframe').src = url;
	document.getElementById('PageIframe').scrolling = 'yes';
	$('#Tab1').trigger('click');
}

function HomeClick(URL) {
if(URL!="")
{
	var IOP=window.location.origin+'';
   // var username = GetCurrentUser();
   // var MenuName = getUrlParam("MenuName");
    
    URL=IOP+URL;
   // var param = '?MenuName=' + MenuName;
    URL = URL;
	
    window.open(URL, '_self');

}
}


function pageLoad(evnt,URL) {

//var IOP=window.location.origin;

//$('#Tab1').find('a').text($(evnt).find('a').text());

    $.ajax({

        url: "/ThemePro_LSW/UI_formdata_GetMenuURL",
        data: { URL: URL },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
            if (data == 'empty') {
            	var a;
            }
            else {
                URL = data;


                if (URL != "") {
						

//document.getElementById('PageIframe').src =  URL; 
//document.getElementById('PageIframe').scrolling = 'no';		

	WintabsCtrl(URL,$(evnt).find('a').text(),'','no');
						
//
    /* $.ajax({

        url: URL,
       // data: { URL: URL },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
           
               //alert(data.activityId);

document.getElementById('PageIframe').src =  "/jw/web/client/app//1/assignment/" + data.activityId + "?null&appId=&appVersion=1"; 
document.getElementById('PageIframe').scrolling = 'no';			
		},  
        error: function OnError_submit(xmlRequest) {


            alert(LoadFrmXML("V0075"));

        }
    });*/
	
//			
		//			var IOP=window.location.origin;
	//var MainPGURL=LoadFrmXML("PG003");
		
	//JPopup.create("ProfilePopup", "Profile Setup");
	//JPopup.show("ProfilePopup", IOP+MainPGURL, "");
	//JPopup.show("ProfilePopup",URL,"","","","","Get");
					
                   // document.getElementById('PageIframe').src = URL;
                 //   document.getElementById('PageIframe').scrolling = 'no';
                }

            }
		},
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });

   // /if (URL != "") {
    //    document.getElementById('PageIframe').src = URL;
    //    document.getElementById('PageIframe').scrolling = 'no';
    //}
}

function CustomPageLoad(evnt,URL) {

//$('#Tab1').find('a').text($(evnt).find('a').find('span').text());

    $.ajax({

        url: "/ThemePro_LSW/UI_formdata_GetMenuURL",
        data: { URL: URL },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
        	
        	data = data.replace(/ /g,"");
            if (data == 'empty') {
            	var a;
            }
            else {
                URL = data;
                if (URL != "") {

                    if (URL.toLowerCase().indexOf('frameset') != -1) {

                       // var user = GetCurrentUser();
                       // var openurl = URL;
                       // window.open(openurl, '_blank');
					   WintabsCtrl(URL,$(evnt).find('a').text(),'','yes');
                    }
                    else {
                       //var user = GetCurrentUser();
						WintabsCtrl(URL,$(evnt).find('a').text(),'','yes');

					   //document.getElementById('PageIframe').src = URL;
                        //document.getElementById('PageIframe').scrolling = 'yes';
                    }
                }

            }
        },
        error: function OnError_submit(xmlRequest) 
        {
            window.alert(LoadFrmXML("V0075"));
            
        }
    });
   

    
}


function pageQueueLoad(evnt,URL,MenuName) {
	
	//$('#Tab1').find('a').text($(evnt).find('a').text());
	
	var aURL="";
$.ajax({

        url: "/ThemePro_LSW/UI_formdata_GetMenuURL",
        data: { URL: URL },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
            if (data == 'empty') {
            	var a;
            }
            else {
                aURL = data;
  //  var user = GetCurrentUser();
    if (aURL != "") {
      // document.getElementById('PageIframe').src = aURL + "?MenuID=" + URL;
       // document.getElementById('PageIframe').scrolling = 'no';
	WintabsCtrl(aURL + "?MenuID=" + URL,$(evnt).find('a').text(),'','no');
    }
	}
	        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });
	
}


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

