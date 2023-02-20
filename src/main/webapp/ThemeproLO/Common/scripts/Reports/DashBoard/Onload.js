
var CountClickFn = 0;

$(document).ready(function () {
		
		//alert($(document).height());
		
	 var IOP1=window.location.origin+'/jw';
	 
	  var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
		window.location= Rdpage;	
			return;
			}
	var IOP=window.location.origin+'';
	
	
	
	

	//ajaxindicatorstart("Generating, Please wait...");
var IOP=window.location.origin;
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	//var Username=document.getElementById("RECM_ModifiedBy").value
	
	//var Username=GetCurrentUser();
	
	//var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	//var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	
	//URL = URL.replace(/<Resultset><a><Result>/g, "");	
	//URL = URL.replace('</Result></a></Resultset>','');
	
	 //$("#SubmitSuccess").val("Hist");
	 // RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	 
	//RedirectURL = IOP+'/Birt/frameset?__report=report/CHFL/SanctionList.rptdesign&__format=pdf&__pageoverflow=1&__overwrite=false';
	//RedirectURL = IOP+'/Birt/frameset?__report=report/CHFL/SanctionBarChrt.rptdesign&__format=pdf&__pageoverflow=1&__overwrite=false';
	
	
	//document.getElementById("iframeDshB").src = IOP+'/Birt/frameset?__report=report/CHFL/DashboardI.rptdesign&__format=html&__navigationbar=false'
	
	//var link = document.createElement("a");
   // link.download = ProposalNo;
   // link.href = RedirectURL;
    //link.click();

	//WintabsCtrl(RedirectURL,'System Cam',ProposalNo,'yes');
//	ajaxindicatorstop(); 			
 
});



