
$(document).ready(function () {

	 var IOP=window.location.origin+'/jw';
	 
	 var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= Rdpage;	
			return;
			}
		
    var Username = GetCurrentUser();
    var MenuName = getUrlParam("MenuName");
    
    var IOP=window.location.origin+'/jw';
    
    document.getElementById('LoggedInUser').value = Username;

    $.ajax({

        url: "/ThemePro_LSW/UI_formdata_GetQueueDashBoardHTML",
        data: { Username: Username, MenuName: MenuName },
        async: false,
       // dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
          
                //alert(data);
                $("#QUEUEDASHBOARD").append(data);
                //iframeurl();              
          
        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });


   

});


//function OnchangeRedirectPageQ() {

	//var IOP=window.location.origin+'/jw';
  //  var activityID = document.getElementById('ActivityID').value;
   // var AppID = document.getElementById('_mode').value;
    

    
   // var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";

 
   // window.open(RedirectURL, '_self');
//}

$(document).on('click', '#ReviewPage', function () {
	
	var IOP=window.location.origin+'/jw';

	
	
	var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	
	    var AppID = $(this).closest('tr').find('td:eq('+$($('th:contains("mode")')[0]).index()+')').text();

    //var RedirectURL = "http://192.168.168.147:8085/jw/web/userview/Repco50L/UPTO50L//Inbox?j_username=admin&j_password=admin&_mode=assignment&activityId=" + activityID;

    var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";

    /*
    $.ajax({
    url: RedirectURL,
    type: "GET",
    async: false,
    dataType: "html"
    }).done(function (data) {

    var $dom = $(document.createElement("html"));
    $dom[0].innerHTML = data;

    var $fieldset = $dom.find("body");

    //    document.getElementById("mainPage").innerHTML = $fieldset[0].innerHTML;

    //  document.getElementById("StartU50L").target = "_blank";

    }).fail(function (jqXHR, textStatus, errorThrown) {
    $("#mainPage").html("Error!! File is not loaded");
    });
    */

    //  window.top.location.href = RedirectURL;
   window.open(RedirectURL, '_self');
});



$(document).on('click', '#HistoryPage', function () {
	
	var IOP=window.location.origin;
	var Username = getUrlParam("username");
    var MenuName = getUrlParam("MenuName");
    
	var id= $(this).closest('tr').find('td:eq('+$($('th:contains("ID")')[0]).index()+')').text();
	var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	
    var AppID = $(this).closest('tr').find('td:eq('+$($('th:contains("mode")')[0]).index()+')').text();
	
 //   var RedirectURL = IOP+"/web/userview/Repco50L/UPTO50L//Inbox?j_username=admin&j_password=admin&_mode=assignment&activityId=" + activityID;
	 //"http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect=http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formSuccess.jsp";
	   var RedirectURL = IOP+"ThemeproLO/Common/Pages/Userview/HistoryQueuePage.jsp?activityID="+activityID+"&AppID="+AppID+"&id="+id+"&Username="+Username+"&MenuName="+MenuName+"";

    /*
    $.ajax({
    url: RedirectURL,
    type: "GET",
    async: false,
    dataType: "html"
    }).done(function (data) {

    var $dom = $(document.createElement("html"));
    $dom[0].innerHTML = data;

    var $fieldset = $dom.find("body");

    //    document.getElementById("mainPage").innerHTML = $fieldset[0].innerHTML;

    //  document.getElementById("StartU50L").target = "_blank";

    }).fail(function (jqXHR, textStatus, errorThrown) {
    $("#mainPage").html("Error!! File is not loaded");
    });
    */

    //  window.top.location.href = RedirectURL;
   window.open(RedirectURL, '_self');
});
$(document).on('click', '#ForwardPage', function () {
	
	var IOP=window.location.origin;

	var id= $(this).closest('tr').find('td:eq('+$($('th:contains("ID")')[0]).index()+')').text();
	var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();

	
 //   var RedirectURL = IOP+"/web/userview/Repco50L/UPTO50L//Inbox?j_username=admin&j_password=admin&_mode=assignment&activityId=" + activityID;
	 //"http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect=http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formSuccess.jsp";
	   var RedirectURL = IOP+"ThemeproLO/Common/Pages/Userview/QueueForwardJobs.jsp?activityID="+activityID+"&id="+id+"";

    /*
    $.ajax({
    url: RedirectURL,
    type: "GET",
    async: false,
    dataType: "html"
    }).done(function (data) {

    var $dom = $(document.createElement("html"));
    $dom[0].innerHTML = data;

    var $fieldset = $dom.find("body");

    //    document.getElementById("mainPage").innerHTML = $fieldset[0].innerHTML;

    //  document.getElementById("StartU50L").target = "_blank";

    }).fail(function (jqXHR, textStatus, errorThrown) {
    $("#mainPage").html("Error!! File is not loaded");
    });
    */

    //  window.top.location.href = RedirectURL;
	   window.open(RedirectURL, '_blank','toolbar=no,resizable=yes,location=0');
});