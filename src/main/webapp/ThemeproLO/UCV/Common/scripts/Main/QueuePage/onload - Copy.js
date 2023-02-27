
$(document).ready(function () {

	
	 var IOP=window.location.origin+'/jw';
	 
	 var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= Rdpage;	
			return;
			}
			
		/*			 var Resultval=FormRights();
	  if(Resultval!='Yes')
	 {
	 return;
	 }*/
    var Username = GetCurrentUser();
    var MenuID = getUrlParam("MenuID");
    
	//document.getElementById('LoggedInUser').value = Username;
	
 //   var IOP=window.location.origin+'/jw';
    
	
    $.ajax({

        url: "/ThemePro_LSW/UI_formdata_GetQueuePageHTML",
        data: { Username: Username, MenuName: MenuID },
        async: false,
       // dataType: "json",
        type: 'POST',
        success: function OnSuccess_submit(data) {
            if (data == 'Success') {



            }
            else {

                //alertify.alert(data);
                $("#QueuePage").append(data);
                //iframeurl();
               
            }
        },
        error: function OnError_submit(xmlRequest) {


            window.alert(LoadFrmXML("V0075"));

        }
    });

/*
    $('#ActivityID').on("change", function () {
        OnchangeRedirectPage();

    });
*/
   
   /*QmainMenuID = $(window.parent.document).find('ul.tabs li.active').attr('name').split('~')[0];
if($(window.parent.document).find("#MenuPageSideBar").find("."+QmainMenuID).find('ul li.active').attr('class') != undefined)
{
QSubMenuClass = $(window.parent.document).find("#MenuPageSideBar").find("."+QmainMenuID).find('ul li.active').attr('class').split(' ')[0];
$("#"+$('ul.tabs').find('.'+QSubMenuClass).attr('id')).click();
}*/
   
   
});


function tabclick()
{

var len =$('ul.tabs li').length;
var QmainMenuID="";
var QSubMenuTXT="";
var QSubMenuClass="";
//var i=len;
//ajaxindicatorstart1();
for(i=len; i>0; i--)
{
//var tabid= $('ul.tabs li')[i].id;

$("#"+$($('ul.tabs li')[i-1]).attr('id')).click();

if ($($('#Table1').find('tbody').find('tr').find('td')[4]).text()!="")
{
var count = $('#Table1_info').text().split(" ")[5];
$("#"+$($('ul.tabs li')[i-1]).find('span').attr('id')).text(count);


//QSubMenuTXT = $(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').text() + ' (' + count +')';
//$(window.parent.document).find('.'+QmainMenuID).find('.'+QSubMenuClass).find('a').text(QSubMenuTXT)
}
}

//ajaxindicatorstop1();
}







$(document).on('click', '.ReviewPage', function () {
if($("input:checked" ).length == 0)
	{
	window.alert(LoadFrmXML("V0153"));
	$("input:checked" ).prop( "checked", false );
    }
	else if($("input:checked" ).length > 4)
	{
	window.alert(LoadFrmXML("V0110"));
	$("input:checked" ).prop( "checked", false );
	}
	
	else
	{
	
	for(i=0; i<$("input:checked" ).length;i++)
	{
	var IOP=window.location.origin+'/jw';

	var activityID= $("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	
    var AppID = $("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("mode")')[0]).index()+')').text();
    //var RedirectURL = "http://192.168.168.147:8085/jw/web/userview/Repco50L/UPTO50L//Inbox?j_username=admin&j_password=admin&_mode=assignment&activityId=" + activityID;
 	var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ApplicantID")')[0]).index()+')').text();

	if(AppID=="Prospect")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ProspectID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/2/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=2";  
	}
	
 if(AppID=="Facility")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/6/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=6";  
	}
	
 if(AppID=="CustCr")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	
	if(AppID=="Disbursement")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}

	if(AppID=="CustomerOnBoarding")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="Programme")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="BuyerSellerRelationship")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="EligibleforFinance")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="FinanceCreation")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="InstrumentFinanceRegistration")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="InstrumentRegistration")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}	
	if(AppID=="InvoiceCreation")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}	
	if(AppID=="BulkRepayment")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}	
	if(AppID=="CSCFLMT")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}	
	
	if(AppID=="ChargeCollection")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	
	if(AppID=="ChargeDemand")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="JourVoch")
	{
	 
	var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}

		
		WintabsCtrl(RedirectURL,'Review',ApplicantId,'no');
		
		   
		
		
		
		}
	   $($('input:checkbox[name=selectchk]:checked')).prop("checked",false);
	
	 $("#Queuesrefresh").trigger("click");
 //window.open(RedirectURL, '_self');

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
  }
});



$(document).on('click', '.AcceptPage', function () {
	
	var strconfirm="";
	
	if($("input:checked" ).length == 0)
	{
	window.alert(LoadFrmXML("V0153"));
	$("input:checked" ).prop( "checked", false );
    }
	else if($("input:checked" ).length > 4)
	{
	window.alert(LoadFrmXML("V0110"));
	$("input:checked" ).prop( "checked", false );
	}
	
	else{
	
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
	 
    if (strconfirm == true) {
	
	
	for(i=0; i<$("input:checked" ).length;i++)
	{
	var IOP=window.location.origin+'/jw';

	var activityID= $("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	
    var AppID = $("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("mode")')[0]).index()+')').text();
    //var RedirectURL = "http://192.168.168.147:8085/jw/web/userview/Repco50L/UPTO50L//Inbox?j_username=admin&j_password=admin&_mode=assignment&activityId=" + activityID;
	var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ApplicantID")')[0]).index()+')').text();

		if(ApplicantId=="UPTO50Lakhs")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 
	}
	
	var st = UsrAcceptPrcs(activityID);
	
	

	
	
	
	if(st == "Accepted")
	{
		
		
			if(AppID=="Prospect")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ProspectID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/2/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=2";  
	}
	
 if(AppID=="Facility")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/6/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=6";  
	}
	if(AppID=="CustCr")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	
	if(AppID=="Disbursement")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}

	
	
	if(AppID=="CustomerOnBoarding")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="Programme")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="BuyerSellerRelationship")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="EligibleforFinance")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	
	
	if(AppID=="FinanceCreation")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="InstrumentFinanceRegistration")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="InstrumentRegistration")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="InvoiceCreation")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	if(AppID=="BulkRepayment")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}	
			
	if(AppID=="CSCFLMT")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}	
	
	if(AppID=="ChargeCollection")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	
	if(AppID=="ChargeDemand")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}
	
	if(AppID=="JourVoch")
	{
	 
	var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";  
	}

	
		// var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=3";
					 // window.open(RedirectURL, '_self');
				  WintabsCtrl(RedirectURL,'Accept',ApplicantId,'no');
		 
				 
				  
	}
	}
	
	}
	   $($('input:checkbox[name=selectchk]:checked')).prop("checked",false);
	  
	 $("#Queuesrefresh").trigger("click");
	/*var AccptURL = IOP+"/web/json/workflow/assignment/accept/"+activityID;
	
	$.ajax({
                 type: 'POST',
                 url: AccptURL,
                // data: params,
                 dataType : "text",
                 xhrFields: {
                     withCredentials: true
                 },
                 success: function(data) {
                     var RedirectURL = IOP+"/web/client/app/" + AppID + "/1/assignment/" + activityID + "?null&appId=" + AppID + "&appVersion=1";
					  window.open(RedirectURL, '_self');
                 },
                 error: function(data) {
                     try {
                         // do nothing for now
                        // if (callback.error) {
                          //   callback.error.call(thisWindow, data);
						  alert('error');
                        // }
                     }
                     catch (e) {}
                 }
               });
	*/
   

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
  }
});







$(document).on('click', '.HistoryPage', function () {
	
	
if($("input:checked" ).length == 0)
	{
	window.alert(LoadFrmXML("V0153"));
	$("input:checked" ).prop( "checked", false );
    }
	else if($("input:checked" ).length > 4)
	{
	window.alert(LoadFrmXML("V0110"));
	$("input:checked" ).prop( "checked", false );
	}

else
	{
	
	for(i=0; i<$("input:checked" ).length;i++)
	{
	var IOP=window.location.origin;
	var Username = getUrlParam("username");
    var MenuID = getUrlParam("MenuID");
    
    
    var id= $("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ProcessID")')[0]).index()+')').text();
	var activityID= $("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
    var AppID = $("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("mode")')[0]).index()+')').text();
	
	var BranchId= $("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("BranchID")')[0]).index()+')').text();
	var BranchName=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("BranchName")')[0]).index()+')').text();
	var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ApplicantID")')[0]).index()+')').text();
	var ApplicantName=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ApplicantName")')[0]).index()+')').text();

	
		if(ApplicantId=="UPTO50Lakhs")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 
	
	var BranchName=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("Branch")')[1]).index()+')').text();
	var ApplicantName=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("FullName")')[0]).index()+')').text();

	 
	}
 //   var RedirectURL = IOP+"/web/userview/Repco50L/UPTO50L//Inbox?j_username=admin&j_password=admin&_mode=assignment&activityId=" + activityID;
	 //"http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect=http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formSuccess.jsp";
	   var RedirectURL = IOP+"/ThemePro_LSW/HistoryQueuePage?activityID="+activityID+"&AppID="+AppID+"&id="+id+"&MenuID="+MenuID+"&BranchId="+BranchId+"&BranchName="+BranchName+"&ApplicantId="+ApplicantId+"&ApplicantName="+ApplicantName;

	   
	     WintabsCtrl(RedirectURL,'History',ApplicantId,'no');
	   }
	   $($('input:checkbox[name=selectchk]:checked')).prop("checked",false);
	  
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
  // window.open(RedirectURL, '_self');
   }
});


$(document).on('click', '.ForwardPage', function () {


if($("input:checked" ).length == 0)
	{
	window.alert(LoadFrmXML("V0153"));
	$("input:checked" ).prop( "checked", false );
    }
	else if($("input:checked" ).length > 4)
	{
	window.alert(LoadFrmXML("V0110"));
	$("input:checked" ).prop( "checked", false );
	}
	
	else
	{
	
	for(i=0; i<$("input:checked" ).length;i++)
	{
	var IOP=window.location.origin;

	var id= $("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ProcessID")')[0]).index()+')').text();
	var activityID=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("ApplicantID")')[0]).index()+')').text();

		if(ApplicantId=="UPTO50Lakhs")
	{
	 
	 var ApplicantId=$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td:eq('+$($('th:contains("CustomerID")')[0]).index()+')').text();
	 
	}
 //   var RedirectURL = IOP+"/web/userview/Repco50L/UPTO50L//Inbox?j_username=admin&j_password=admin&_mode=assignment&activityId=" + activityID;
	 //"http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect=http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formSuccess.jsp";
	   var RedirectURL = IOP+"/ThemePro_LSW/QueueForwardJobs?activityID="+activityID+"&id="+id+"";

	   
	   WintabsCtrl(RedirectURL,'Forward',ApplicantId,'no');
	   }
	   $($('input:checkbox[name=selectchk]:checked')).prop("checked",false);
	   
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
	 //  window.open(RedirectURL, '_blank','toolbar=no,resizable=yes,location=0');
	   }
});


$(function () {

    $("#Queuesrefresh").on("click", function () {

        var x = $("ul li.active").index();
        var id = $("ul li.active").attr('id');
        $("#" + id).trigger("click");

    });

})