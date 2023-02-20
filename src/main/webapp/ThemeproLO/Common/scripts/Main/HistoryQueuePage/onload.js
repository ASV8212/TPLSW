$(document).ready(function () {

	 var IOP=window.location.origin+'/jw';
	 
	  var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= Rdpage;	
			return;
			}
			
					 var Resultval=FormRights();
	  if(Resultval!='Yes')
	 {
	 return;
	 }
	
    var id = getUrlParam("id");
	    var AppID = getUrlParam("AppID");
	    var activityID = getUrlParam("activityID");
			
			

	    
	    var Username = GetCurrentUser();
	    var MenuID = getUrlParam("MenuID");
	    
	    var IOP=window.location.origin+'/jw';
	    document.getElementById('LAPP_ID').value = id;
	    document.getElementById('Username').value = Username;
	    document.getElementById('MenuName').value = MenuID;
	    
		 $.ajax({

		        url: "/ThemePro_LSW/UI_formdata_GetHistoryQueuePageHTML",
		        data: { Username: Username, MenuName: MenuID },
		        async: false,
		       // dataType: "json",
		        type: 'POST',
		        success: function OnSuccess_submit(data) {
		          
		                //alert(data);
		                $("#HistoryPage").append(data);
		                //iframeurl();              
		          
		        },
		        error: function OnError_submit(xmlRequest) {


		            window.alert(LoadFrmXML("V0075"));

		        }
		    });
  $("#assignmentComplete").trigger("click");
  var prcsId=$("#Table1").find('tbody').find('td:eq('+$($('th:contains("ProcessID")')[0]).index()+')').text();
  //var spname="Sam_GetHistoryPageFieldData";
  var spname="Sam_sGetHistPageFldsWtData"
  
  var OP = UI_getdata("","",prcsId,"","",spname)
  
  	OP = OP.replace(/<Resultset><a><HTML>/g, "");	
	OP = OP.replace('</HTML></a></Resultset>',' '); 

	$('.xdTable').append(OP);
  
   
  
	/*$("#BranchId").val(':   '+$(OP).find('BranchID').text());
		$("#BranchName").val(':   '+$(OP).find('BranchName').text());
		$("#ApplicantId").val(':   '+$(OP).find('ApplicantID').text());
		$("#ApplicantName").val(':   '+$(OP).find('ApplicantName').text());
		
		if( $(OP).find('ProposalNo').text()!="")
		{
		$("#ProposalNo").closest('tr').show();
		$("#ProposalNo").val(':   '+$(OP).find('ProposalNo').text());
		
		}*/
  
});




$(document).on('click', '#lookup', function () {
	
	var IOP=window.location.origin;

	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	
	var processId= $(this).closest('tr').find('td:eq('+$($('th:contains("processid")')[0]).index()+')').text();
	var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	
	var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	URL = URL.replace(/<Resultset><a><Result>/g, "");	
	URL = URL.replace('</Result></a></Resultset>','');
//	 var activityId = $(this).closest('tr').children('td:eq(3)').text();
	 
	
 //   var RedirectURL = IOP+"/web/userview/Repco50L/UPTO50L//Inbox?j_username=admin&j_password=admin&_mode=assignment&activityId=" + activityID;
	 //"http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect=http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formSuccess.jsp";
	  // var RedirectURL = IOP+"ThemeproLO/Upto50L/Pages/U50L_AllForms.jsp?activityId="+activityID+"&processId="+processId+"&View=Hist";
	  $("#SubmitSuccess").val("Hist");
	//  RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	
RedirectURL = IOP+LoadFrmXML("PG010")+"?activityId="+activityID+"&processId="+processId +"&View=Hist";

	WintabsCtrl(RedirectURL,'History View',$('input[name="'+URL.split("|")[1]+'"]').val(),'yes');
	/*  if(activityID.indexOf('HomeLoan')>-1)
	  {
		  
		  $("#SubmitSuccess").val("Hist");
		  RedirectURL = IOP+URL+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
		  
		    WintabsCtrl(RedirectURL,'History View',$("#ApplicantId").val(),'yes');
		  
	  }
	   else if(activityID.indexOf('CustomerCreation')>-1)
	  {
		  $("#SubmitSuccess").val("Hist");
		 // RedirectURL = IOP+"ThemeproLO/Customer_Creation/Pages/LCC_CustomerCreation.jsp?activityId="+activityID+"&processId="+processId+"&View=Hist";
		  RedirectURL = IOP+"ThemeproLO/Customer_Creation/Pages/AllForms/AllForms.jsp?activityId="+activityID+"&processId="+processId+"&View=Hist";
		    WintabsCtrl(RedirectURL,'History View',$("#ApplicantId").val(),'yes');
		  
	  }
	  
	  
	   else if(activityID.indexOf('UPTO50L')>-1)
	  {
		  
		  $("#SubmitSuccess").val("Hist");
		  RedirectURL = IOP+"ThemeproLO/Upto50L/Pages/AllForms/AllForms.jsp?activityId="+activityID+"&processId="+processId+"&View=Hist";
		  
		    WintabsCtrl(RedirectURL,'History View',$("#ApplicantId").val(),'yes');
		  
	  }
	  
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
	  // window.open(RedirectURL, '_blank','toolbar=no,resizable=yes,location=0');
});


