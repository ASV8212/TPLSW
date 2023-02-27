
var CountClickFn = 0;
//var Prvnt=

$(document).ready(function () {
		
		//alert($(document).height());
		
		if(window.opener === null)
	{
		  $('body').empty();
		$("<div><img src=\"ThemeproLO/Common/Images/AD.png\"></div>").appendTo('body');
		return;
	}
		
			$(document).on('click', '.sidebar-toggle', function () {
	     
		 //$(document).find('body').removeClass('sidebar-mini');
	
		});
		
		//$('.sidebar-toggle').trigger("click");
		
		
		if($(document).height() <= 679)
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
	var FirstName =GetCurrentUserFName();
    var MenuName = getUrlParam("MenuName");
	
	// Parent Check Start
	//$( "#myDiv" ).length
	
	
	// Parent Check End
	
	//Password Check Start	
	
var PswrdChk = UI_getdata(Username,"","","","","Sam_sGetUsrPswrdChk");

if($(PswrdChk).find("Result").text() =="NA")
{
var IOP=window.location.origin
//var MainPGURL='/TPLSW/LSW_FLegalVerify'
var Prfx='Load'
	
	RedirectURL = IOP+"/TPLSW/CustomProfile?Prfx="+Prfx+"&Userid="+Username;
	// RedirectURL = IOP+"/TPLSW/Comments?Prfx="+Prfx+ "&processId=" + MenuName
	 //RedirectURL = IOP+"/TPLSW/CustomProfile?Prfx="+Prfx+ "&processId=" + MenuName;

					//WintabsCtrl(RedirectURL,'Attachment('+formname+')','','no');
					//window.open(RedirectURL, '_blank','toolbar=no,resizable=yes,location=0');
			JPopup.create("GridPopupShow", "","","");
			//JPopup.show("GridPopupShow",RedirectURL,"","","683","544","Post");
			//JPopup.show("GridPopupShow",RedirectURL,"","","","390","Get");
			JPopup.show("GridPopupShow",RedirectURL,"","","","410","Post");
			

 $('.wrapper').css('opacity', '0.5');
 $('.wrapper').css("pointer-events","none");
$('#GridPopupShow').prev('div').find('a').hide()

}
//Password Check End
		//	$('#Tab1').find('a').text(MenuName);
//
	//Get Welcome MSG Start	
			
$("#Wel1").text("Welcome "+FirstName);

var OPXML = UI_getdata(Username,"","","","","Sam_sGetUsrBrchDesig");

if($(OPXML).find("groupId").text() !="")
{
$("#Wel2").text($(OPXML).find("groupId").text() +", "+ $(OPXML).find("Name").text() );
}



var Lgndt = UI_getdata(Username,"","","","","SAM_sLstLgnDt");

if($(Lgndt).find("Lgndt").text() !="")
{
var Lgnspn='<span style="font-size:12px">'+$(Lgndt).find("Lgndt").text()+'</span>'
}
var Lgnspn=Lgnspn+'<span id="BusnDT" style="font-size:12px;margin: 17%;">'+$(Lgndt).find("BusDt").text()+'</span>'
$(Lgnspn).insertBefore( ".navbar-custom-menu" );

//Get Welcome MSG End
	
	
	// Session Details start
var Username = GetCurrentUser();
var op= UI_getdata("SESSION","","","","","Sam_sGetCOMSeqID");
op = op.replace(/<Resultset><a><VR>/g, "");	
op = op.replace('</VR></a></Resultset>',"");
var session="N";
var starttime="";

//var res= UI_getdata(Username,op,session,starttime,"","SAM_sInsMultiSession")

//res = $(res).find('Result').text();
//if(res=='Success')
//	{
		localStorage['myKey'] = op;
//	}
// Session Details End

	
	
	
  /*  $.ajax({

        url: "/TPLSW/UI_formdata_GetSubPageHTML",
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


            alert(LoadFrmXML("V0075"));

        }
    });*/
	
	/*$.ajax({

        url: "/TPLSW/UI_formdata_GetMainPageHTML",
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


            alert(LoadFrmXML("V0075"));

        }
    });*/
	
			
	$(document).on('click', '.SideMenuRLD', function () {

var Name = $(this).attr('name');	
		
			var Username = GetCurrentUser();
			 var MenuName = Name.split('~')[1];			 
		 
		 $.ajax({

        url: "/TPLSW/UI_formdata_GetSubPageHTML",
	  // url: "/TPLSW/UI_formdata_GetMainPageHTML",	   
        data: { Username: Username, MenuName: MenuName,Prvnt:$(window.parent.document).find("#Prvnt").val() },
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

				 $("#MenuPageSideBar").empty();
				      $("#MenuPageDashBoard").empty();
                $("#MenuPageSideBar").append(HTML);
                $("#MenuPageDashBoard").append(HTML1);
			   
			 //  if($("#MenuPageSideBar").find('.sidebar-menu').next('li').text()!="")
				//{
				//$("#MenuPageSideBar").find('.sidebar-menu').append($("#MenuPageSideBar").find('.sidebar-menu').nextAll('li'))
			//	}
			//	$("#MenuPageSideBar").empty();
			 //  $("#MenuPageSideBar").append(data);
	//$("#MenuPagePopup").empty();
	//$("#MenuPagePopup").append(data);
			//$("#MenuPagePopup").dialog();
	//$("#SidePopup").dialog();
	//$("#save4").trigger("click");
			//$("#MenuPagePopup").dialog("option", "height", 300);
  
			//$("#MenuPagePopup").dialog("option", "closeOnEscape", true);
            //$("#MenuPagePopup").dialog("option", "position", { my: "right bottom", at: "left top", of: $(this).attr('id') });
			
			
               // iframeurl();
                //alert(data);
            }
        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
		 
	 });
	 
	});
	
	HomeRLD(); 
$("#Tab0").trigger("click");
	
 window.onunload = function() {
	 
	  var sessionVar = localStorage['myKey'];
	var endtime="";
	var res= UI_getdata(Username,sessionVar,"","","","SAM_sMultiSessionUpdt")
   AppliLogout();
   
   	$.ajax({
	      //url: "Upto50L/CS_FetchFormFieldData",
	      url: window.location.origin+"/TPLSW/Logout",	   
	        data: { },
	      async: false,
	     // dataType: "json",
	      type: 'GET',
	      success: function (xml){
              //fetchdropdown('',param4,param5,xml);
			window.close();
		   },
	  });

}
	 
	 			
 
});

	/*	function handleMessage(event) {
        // check where the message is coming from - may be overkill in your case
	var DNS001 = window.location.hostname;
    var Port1 = LoadFrmXML("PT001");
    var Port2 = LoadFrmXML("PT001");
	URL = 'http://' + DNS001 + ':' + Port1 ;
      //  if (event.origin === URL) {

            if (event.data === 'CrntSessionWLCM') {
                // do your thing
              alert('bye');
            }
			
        //}
    }*/


function HomeRLD()
{
	
		var Username = GetCurrentUser();
			 var MenuName = "";			 
		 
		$.ajax({

        url: "/TPLSW/UI_formdata_GetMainPageHTML",
        data: { Username: Username, MenuName: MenuName,Prvnt:$(window.parent.document).find("#Prvnt").val() },
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

				 $("#MenuPageSideBar").empty();
				      $("#MenuPageDashBoard").empty();
                $("#MenuPageSideBar").append(HTML);
                $("#MenuPageDashBoard").append(HTML1);
				
			//	if($("#MenuPageSideBar").find('.sidebar-menu').next('li').text()!="")
			//	{
			//	$("#MenuPageSideBar").find('.sidebar-menu').append($("#MenuPageSideBar").find('.sidebar-menu').nextAll('li'))
			//	}
               // iframeurl();
                //alert(HTML);
            }
        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });
	 
	 }

function iframeurl() {
  
	var url=window.location.origin+'/TPLSW/QueueDashBoard.jsp';
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

        url: "/TPLSW/UI_formdata_GetMenuURL",
        data: { URL: URL,Prvnt:$(window.parent.document).find("#Prvnt").val() },
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

var TabName = $(evnt).find('a').text();
if(TabName == "")
	TabName = $(evnt).text();


	WintabsCtrl(URL,TabName,'','no');
						
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
	
	CountfnChk($(evnt).attr('id'));
	
}

function CustomPageLoad(evnt,URL) {

//$('#Tab1').find('a').text($(evnt).find('a').find('span').text());

    $.ajax({

        url: "/TPLSW/UI_formdata_GetMenuURL",
        data: { URL: URL,Prvnt:$(window.parent.document).find("#Prvnt").val() },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
        	
        	data = data.replace(/ /g,"");
			
			
            if (data == 'empty') {
            	var a;
            }
            else {
                URL = data +"?RefID="+URL;
                if (URL != "") {

				var TabName = $(evnt).find('a').text();
if(TabName == "")
	TabName = $(evnt).text();

				
                    if (URL.toLowerCase().indexOf('frameset') != -1) {
							URL=URL.replace(/and__/g,"&__");
							var user = GetCurrentUser();
							URL=URL+'&UID='+user
                       // var user = GetCurrentUser();
                       // var openurl = URL;
                       // window.open(openurl, '_blank');
					   WintabsCtrl(URL,TabName,'','yes');
                    }
                    else {
                       //var user = GetCurrentUser();
						WintabsCtrl(URL,TabName,'','yes');

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
   
CountfnChk($(evnt).attr('id'));
    
}


function NonFnSideMenuTrg(evnt) {

//$('#Tab1').find('a').text($(evnt).find('a').find('span').text());

     // $('#'+$(evnt).attr('name').split('~')[0]).trigger('click');
	 $('ul.sidebar-menu li').removeClass('active');
	$('ul.sidebar-menu li ul').css('display','none');
	
	var menuID="";
	
for(i=1;i<=$(evnt).attr('name').split('~')[0].length;i++)
{
		//$('ul.sidebar-menu li ul').css('display','none');
	menuID = $(evnt).attr('name').split('~')[0].substr(0,i);
	
	$('#'+menuID).addClass('active');
	$($('#'+menuID).find('ul')[0]).css('display','block')
	
}
var Username = GetCurrentUser();
 var MenuID = $(evnt).attr('name').split('~')[0];
	 
	 OP=UI_getdata(Username,MenuID,"","","","SAM_SGetSubLevelPage");
	// window.alert(OP);
	
	if(OP.replace('<Resultset><a><HTML>','').replace('</HTML></a></Resultset>','')=='</br>')
{
	var PgeUrl=UI_getdata(Username,MenuID,"","","","SAM_SGetMnPgTyp");
	
	if($(PgeUrl).find('MenuFunction').text()=='Custom Page')
	{
	CustomPageLoad(evnt,MenuID)
	}
}
	
else{
	       $("#MenuPageDashBoard").empty();
           $("#MenuPageDashBoard").append(OP.replace('<Resultset><a>','').replace('</a></Resultset>',''));
	 
    }
	LoadTimelineNode();
}



function NonFnMainMenuTrg(evnt,id) {

//$('#Tab1').find('a').text($(evnt).find('a').find('span').text());
	
	//CountClickFn = parseInt(CountClickFn) + 1;

	
	var Username = GetCurrentUser();
			 var MenuID = id;			
if(CountClickFn == 0)
{	

//if(parseInt(CountClickFn) % 2 == 0)
//{
	
	 
	 
	 if($.isNumeric(id)==true)
	 {	 
		 
	 if($(evnt).hasClass('active'))
	 {
		 
	HomeRLD();	 
	LoadTimelineNode();
		 return;
	 }
	 }
	 else
	 {
		 
		 CountClickFn = 1;
		 
	 }
	 
	var OP=UI_getdata(Username,MenuID,"","","","SAM_SGetSubLevelPage");
	// window.alert(OP);

	       $("#MenuPageDashBoard").empty();
           $("#MenuPageDashBoard").append(OP.replace('<Resultset><a><HTML>','').replace('</HTML></a></Resultset>',''));
}
else{
	CountClickFn = 0;
	
}   
}




function pageQueueLoad(evnt,URL,MenuName) {
	
	//$('#Tab1').find('a').text($(evnt).find('a').text());
	var MenuID="";
	 if($(evnt).hasClass('active'))
	 {	
	var abcv;
	 }
	 else
	 {
	
		 
		 
	var aURL="";
$.ajax({

        url: "/TPLSW/UI_formdata_GetMenuURL",
        data: { URL: URL ,Prvnt:$(window.parent.document).find("#Prvnt").val()},
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
									
			
            if (data == 'empty') {
            	var a;
            }
            else {
                aURL = data;

var TabName = $($(evnt).find('a')[0]).text();
if(TabName == "")
	TabName = $(evnt).text();

				
  //  var user = GetCurrentUser();
    if (aURL != "") {
      // document.getElementById('PageIframe').src = aURL + "?MenuID=" + URL;
       // document.getElementById('PageIframe').scrolling = 'no';
	   
	aURL =  aURL + "?MenuID=" + URL;
	
	MenuID = URL;
	
	   if($('ul.tabs').find('.'+MenuID).text() == "")
	   {
		   WintabsCtrl(aURL,TabName,'','no');
	   }
	   else
	   {
		   $('#'+$($('ul.tabs').find('.'+MenuID)[0]).attr('id')).trigger('click');
	   }
	   
	   
	
    }
	}
	        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });
	
		 
		 if($(evnt).attr('href')== "#")
		 {
	$("#MenuPageSideBar").find('.'+URL).addClass('active');
	$($("#MenuPageSideBar").find('.'+URL).find('ul')[0]).css('display','block')
		 }
		 
	 }
	 CountfnChk($(evnt).attr('id'));
}



function pageQueueLoadTrg(evnt,URL) {
	
	//$('#Tab1').find('a').text($(evnt).find('a').text());
	var MenuID="";
	// if($(evnt).hasClass('active'))
	// {	
	//var abcv;
	// }
	// else
	// {
	
		 
		 
	var aURL="";
$.ajax({

        url: "/TPLSW/UI_formdata_GetMenuURL",
        data: { URL: URL ,Prvnt:$(window.parent.document).find("#Prvnt").val()},
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
									
			
            if (data == 'empty') {
            	var a;
            }
            else {
                aURL = data;

var TabName = $($("#MenuPageSideBar").find("."+evnt).find('a')[0]).text();
if(TabName == "")
	TabName = $("#MenuPageSideBar").find("."+evnt).text();

				
  //  var user = GetCurrentUser();
    if (aURL != "") {
      // document.getElementById('PageIframe').src = aURL + "?MenuID=" + URL;
       // document.getElementById('PageIframe').scrolling = 'no';
	   
	aURL =  aURL + "?MenuID=" + URL;
	
	MenuID = URL;
	
	   if($('ul.tabs').find('.'+MenuID).text() == "")
	   {
		   WintabsCtrl(aURL,TabName,'','no');
	   }
	   else
	   {
		   $('#'+$($('ul.tabs').find('.'+MenuID)[0]).attr('id')).trigger('click');
	   }
	   
	   
	
    }
	}
	        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });
	
		 
		// if($(evnt).attr('href')== "#")
		// {
	//$("#MenuPageSideBar").find('.'+URL).addClass('active');
	//$($("#MenuPageSideBar").find('.'+URL).find('ul')[0]).css('display','block')
	//	 }
		 
	// }
	// CountfnChk($(evnt).attr('id'));
}



function QTrgClck(evnt,QID,QName,MenuID)
{
	
	var activetabID = "";
	var TabID = "";
	
	activetabID = $('ul.tabs').find('.'+MenuID+'.active').attr('id');
	if($('ul.tabs').find('.'+MenuID+'.active').text() == "")
	{
		TabID = $($('ul.tabs').find('.'+MenuID)[0]).attr('id');
	}
	else
	{
		TabID = activetabID;
	}
	
	if($('ul.tabs').find('.'+MenuID+'.active').text() == "")
	{
	$('#'+TabID).trigger('click');
	}
	
	if(TabID == undefined)
	{
		
		pageQueueLoadTrg(MenuID,MenuID);
				
		//$("#tab"+$('ul.tabs').find('.'+MenuID+'.active').attr('id').substr('3','4')).find('iframe').contents().find('.'+QName).trigger('click');
		
		$(evnt).addClass('active');

	}
	else{
		$("#tab"+TabID.substr('3','4')).find('iframe').contents().find('.'+QName).trigger('click');
	}
	
	
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
 $(document).on('click', '#save4', function () {

	//$('#MenuPagePopup').find('ul').find('li').removeClass('active');
	 var p = $('#MenuPagePopup').find('li');  
	 var plen = $('#MenuPagePopup').find('li').length;
	 
	 for(i=0;i<plen;i++)
	 {
			 if($($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).hasClass('fa-angle-left')|| $($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).hasClass('pull-right')== true)
			 {			 
				$($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).parents('li').removeClass('active');
				$($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).parents('li').find('ul').css("display","none");
				
				
			 }

	 }
	 
	 
	 for(i=0;i<plen;i++)
	 {
		 //if(addtree.indexOf('onclick')){alert("1");}else{alert("2");}
		 //$('#MenuPagePopup').find('ul').closest('li').hasClass('active'); 
		 //$('#MenuPagePopup').find('ul').closest('li:nth-child(4)').hasClass('treeview active');
			 //var addtree = $(p[i]).prop('outerHTML');
			 
			 if($($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).hasClass('fa-angle-left')|| $($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).hasClass('pull-right')== true)
			 //if(addtree.indexOf('onclick'))
			 {
				//addtree.addClass("active");				 
				$($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).parents('li').addClass('active');
				$($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).parents('li').find('ul').css("display","block");
			 } 
	 }
	  
	 
		 //if($(this).hasClass("active"))
		 //{
			 //var s=   $('li');
			 //if($(p[i]).prop('outerHTML').indexOf('onclick'))
			 //{
			// }
			//$('.treeview').addClass('active');
		// }
		 
	 
	 
	 
 });
 
 
 function CountfnChk(id)
 {
	 if(id!=undefined)
	 {
	 if($.isNumeric(id)==false)
	 {	 
		CountClickFn = 1;
	 }
	 }	 
	 
 }
 
 
 $(document).on('click', '#Delete4', function () {
 
 
  //$('ul.tabs li').removeClass('active');
 //$('#MenuPagePopup').find('ul').find('li').removeClass('active');
	 var p = $('#MenuPagePopup').find('li');
	   
	 var plen = $('#MenuPagePopup').find('li').length;
	 
	 for(i=0;i<plen;i++)
	 {
			 if($($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).hasClass('fa-angle-left')|| $($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).hasClass('pull-right')== true)
			 {			 
				$($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).parents('li').removeClass('active');
				$($('#MenuPagePopup').find('ul').find('li').find('a').find('i')[i]).parents('li').find('ul').css("display","none");
			 }

	 }
 });
 
$(document).on('click', '#lookup', function () {

	var IOP=window.location.origin+'/jw';

	var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	
    var mode = $(this).closest('tr').find('td:eq('+$($('th:contains("mode")')[0]).index()+')').text();
	
	var State = $(this).closest('tr').find('td:eq('+$($('th:contains("State")')[0]).index()+')').text();
	
	if(State=="Started")
	{
	State ='1000001';
	}
	else if(State=="Not Started")
	{
	State ='1000003';
	}
	
	
	

	
 
 var ApplicantId=$(this).closest('tr').find('td:eq('+$($('th:contains("Name")')[0]).index()+')').text();
 
 
 

 	if(mode=="Prospect")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/2/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}
	
 if(mode=="Facility")
	{
	 
		 var RedirectURL = IOP+"/web/client/app/" + mode + "/6/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}
	
	if(mode=="Disbursement")
	{
	 
	// var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}
	
	if(mode=="CustomerOnBoarding")
	{
	  var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}
	if(mode=="Programme")
	{
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}
	if(mode=="BuyerSellerRelationship")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}
	if(mode=="EligibleforFinance")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}
	if(mode=="FinanceCreation")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}
	if(mode=="InstrumentFinanceRegistration")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}
	if(mode=="InstrumentRegistration")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}	
	if(mode=="InvoiceCreation")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}	
	if(mode=="BulkRepayment")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";   
	}	

if(mode=="ChargeCollection")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";  
	}	
	if(mode=="ChargeDemand")
	{
	 
	 var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=1";   
	}	

	if(State=="1000001")
		{
	
		//var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=3";
		WintabsCtrl(RedirectURL,'Review',ApplicantId,'no');

		}
		
		else if(State=="1000003")	
		{
		
		var strconfirm="";
			var Acptasgn=UI_getdata(activityID,GetCurrentUser(),"","","","SAM_sChkAcptasgn");
			if(Acptasgn == 'Multiple')
			{		
			strconfirm = confirm(LoadFrmXML("V0173"));
//	return
			}
			else
				{
			strconfirm = true;
			}
  // var strconfirm = confirm(LoadFrmXML("V0173"));
    if (strconfirm == true) {
		
		var st = UsrAcceptPrcs(activityID);
		
		if(st == "Accepted")
		{
		// var RedirectURL = IOP+"/web/client/app/" + mode + "/1/assignment/" + activityID + "?null&appId=" + mode + "&appVersion=3";
		 WintabsCtrl(RedirectURL,'Accept',ApplicantId,'no');
		
		}
		
		}
		}
		
		
		
		

  
});


$(document).on('click', '#programmeView', function () {
	
		var IOP=window.location.origin;
	var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	var ProcessID= $(this).closest('tr').find('td:eq('+$($('th:contains("ProcessID")')[0]).index()+')').text();
	var ApplicantId=$(this).closest('tr').find('td:eq('+$($('th:contains("Name")')[0]).index()+')').text();
	 
	var RedirectURL = IOP+"/TPLSW/Programme?processId="+ProcessID+"&activityId="+activityID+"&mode=View";  
	WintabsCtrl(RedirectURL,'View',ApplicantId,'no');
});


function HomeCltrg()
{
	$("#Tab1").trigger("click");	
HomeRLD();
}





function LoadTimelineNode()
{
	var sel;
	var style=110;
	var TimeL;
	var NoofNodes=$('.sidebar-menu .active').length;
	if(NoofNodes!=0)
	{
		TimeL='<li><a href="#0" class="older-event" id="0" name="Home" TNode" style="left:10px;">Home</a></li>'
	}
	else
	{
		TimeL='<li><a href="#0" class="selected" id="0" name="Home" TNode" style="left:10px;">Home</a></li>'
	
	}
	for(var i =0;i<NoofNodes;i++)
	{
		var x=$('.sidebar-menu .active')[i];
		var id=$(x).attr('id');
		var y=$(x).find('span')[0];
		var z=$(y).text();
		var mname=z.replace(" ","");
		if(z!='')
		{
			
			TimeL=TimeL+'<li><a href="#0" class="older-event TNode" id="'+id+'" name="'+id+'~'+mname+'" style="left: '+style+'px;">'+z+'</a></li>'
			sel=id;
			style=style+100;
			
		}
	}

		
	var FinalTimeLine=TimeL;

	
	
	
	
	$("#nodesList").empty();
    $("#nodesList").append(FinalTimeLine.replace('<Resultset><a>','').replace('</a></Resultset>',''));
	
	$('#nodesList #'+sel).removeClass('older-event');
	$('#nodesList #'+sel).addClass('selected');
	
	var eventsMinDistance = 100;
	var timeline = $('.cd-horizontal-timeline'),
				timelineComponents = {};
			//cache timeline components 
			timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
			timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
			timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
			timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
			timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
			timelineComponents['eventsContent'] = timeline.children('.events-content');

			//assign a left postion to the single events along the timeline
			setDatePosition(timelineComponents, eventsMinDistance);
			//assign a width to the timeline
			var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
			//the timeline has been initialize - show it
			timeline.addClass('loaded');
		
}
