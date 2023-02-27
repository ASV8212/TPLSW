
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
			
					 var Resultval=FormRights();
	  if(Resultval!='Yes')
	 {
	 return;
	 }
	 
	var IOP=window.location.origin+'';
	
	var Username = GetCurrentUser();
	document.getElementById("LoggedInUser").value = Username;
    var MenuName = getUrlParam("MenuName");
	
	GetCustomPageHdrStrip("File Status","(Select Workflow to view file status)",getUrlParam("RefID"));


	$($(document).find('ul li')[0]).trigger('click')
	
	$($(document).find('ul li')[0]).addClass('active');
	
		//GetfilestatusflddataNew();
	 $(document).on('click','.messages-menu', function () {

        $('ul li').removeClass('active');
        $(this).addClass('active')
              

    });
	
$(document).on('click', '#LAPLsoGen', function () {
		ajaxindicatorstart("Generating, Please wait...");
var IOP=window.location.origin;
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	var ProposalNo= $(this).closest('tr').find('td:eq('+$($('th:contains("Application Number")')[0]).index()+')').text();
	var Username=document.getElementById("LoggedInUser").value
	//var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	//var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	
	//URL = URL.replace(/<Resultset><a><Result>/g, "");	
	//URL = URL.replace('</Result></a></Resultset>','');
	
	 //$("#SubmitSuccess").val("Hist");
	 // RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	 	alertify.confirm("Choose Anyone following option?|PoplCustomHdrStrip|With Insurance|Without Insurance", function (e) {
				if (e) 
				{  
	 
					RedirectURL = IOP+LoadFrmXML("RT004")+"&__format=pdf&CusId="+ProposalNo+"&Category=WION";
				WintabsCtrl(RedirectURL,'LSO',ProposalNo,'yes');				
			    }
			  
				else
				{
				
					RedirectURL = IOP+LoadFrmXML("RT004")+"&__format=pdf&CusId="+ProposalNo+"&Category=WIIN";
				WintabsCtrl(RedirectURL,'LSO',ProposalNo,'yes');
				}
	//var link = document.createElement("a");
   // link.download = ProposalNo;
   // link.href = RedirectURL;
    //link.click();
	});

	//WintabsCtrl(RedirectURL,'LSO',ProposalNo,'yes');
	ajaxindicatorstop();
});



$(document).on('click', '#HLLsoGen', function () {
		ajaxindicatorstart("Generating, Please wait...");
var IOP=window.location.origin;
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	var ProposalNo= $(this).closest('tr').find('td:eq('+$($('th:contains("Application Number")')[0]).index()+')').text();
	var Username=document.getElementById("LoggedInUser").value
	//var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	//var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	
	//URL = URL.replace(/<Resultset><a><Result>/g, "");	
	//URL = URL.replace('</Result></a></Resultset>','');
	
	 //$("#SubmitSuccess").val("Hist");
	 // RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	 
	//RedirectURL = IOP+LoadFrmXML("RT005")+"&__format=pdf&CusId="+ProposalNo;
	//var link = document.createElement("a");
   // link.download = ProposalNo;
   // link.href = RedirectURL;
    //link.click();

	//WintabsCtrl(RedirectURL,'LSO',ProposalNo,'yes');
	alertify.confirm("Choose Anyone following option?|PoplCustomHdrStrip|With Insurance|Without Insurance", function (e) {
				if (e) 
				{  
	 
				RedirectURL = IOP+LoadFrmXML("RT005")+"&__format=pdf&CusId="+ProposalNo+"&Category=WION&ProjName=" + Username;
				WintabsCtrl(RedirectURL,'LSO',ProposalNo,'yes');				
			    }
			  
				else
				{
				
				RedirectURL = IOP+LoadFrmXML("RT005")+"&__format=pdf&CusId="+ProposalNo+"&Category=WIIN&ProjName=" + Username;
				WintabsCtrl(RedirectURL,'LSO',ProposalNo,'yes');
				}
				
	 });
	ajaxindicatorstop();
});
	
	
	
//Inprincple rpt start	
	
	$(document).on('click', '#INPLAPLsoGen', function () {
		ajaxindicatorstart("Generating, Please wait...");
var IOP=window.location.origin;
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	var ProposalNo= $(this).closest('tr').find('td:eq('+$($('th:contains("Application Number")')[0]).index()+')').text();
	var Username=document.getElementById("LoggedInUser").value
	//var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	//var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	
	//URL = URL.replace(/<Resultset><a><Result>/g, "");	
	//URL = URL.replace('</Result></a></Resultset>','');
	
	 //$("#SubmitSuccess").val("Hist");
	 // RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	 	alertify.confirm("Choose Anyone following option?|PoplCustomHdrStrip|With Insurance|Without Insurance", function (e) {
				if (e) 
				{  
	 
					RedirectURL = IOP+LoadFrmXML("RT016")+"&__format=pdf&CusId="+ProposalNo+"&Category=WION";
				WintabsCtrl(RedirectURL,'In Principle LSO',ProposalNo,'yes');				
			    }
			  
				else
				{
				
					RedirectURL = IOP+LoadFrmXML("RT016")+"&__format=pdf&CusId="+ProposalNo+"&Category=WIIN";
				WintabsCtrl(RedirectURL,'In Principle LSO',ProposalNo,'yes');
				}
	//var link = document.createElement("a");
   // link.download = ProposalNo;
   // link.href = RedirectURL;
    //link.click();
	});

	//WintabsCtrl(RedirectURL,'LSO',ProposalNo,'yes');
	ajaxindicatorstop();
});



$(document).on('click', '#INPHLLsoGen', function () {
		ajaxindicatorstart("Generating, Please wait...");
var IOP=window.location.origin;
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	var ProposalNo= $(this).closest('tr').find('td:eq('+$($('th:contains("Application Number")')[0]).index()+')').text();
	var Username=document.getElementById("LoggedInUser").value
	//var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	//var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	
	//URL = URL.replace(/<Resultset><a><Result>/g, "");	
	//URL = URL.replace('</Result></a></Resultset>','');
	
	 //$("#SubmitSuccess").val("Hist");
	 // RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	 
	//RedirectURL = IOP+LoadFrmXML("RT005")+"&__format=pdf&CusId="+ProposalNo;
	//var link = document.createElement("a");
   // link.download = ProposalNo;
   // link.href = RedirectURL;
    //link.click();

	//WintabsCtrl(RedirectURL,'LSO',ProposalNo,'yes');
	alertify.confirm("Choose Anyone following option?|PoplCustomHdrStrip|With Insurance|Without Insurance", function (e) {
				if (e) 
				{  
	 
				RedirectURL = IOP+LoadFrmXML("RT015")+"&__format=pdf&CusId="+ProposalNo+"&Category=WION&ProjName=" + Username;
				WintabsCtrl(RedirectURL,'In Principle LSO',ProposalNo,'yes');				
			    }
			  
				else
				{
				
				RedirectURL = IOP+LoadFrmXML("RT015")+"&__format=pdf&CusId="+ProposalNo+"&Category=WIIN&ProjName=" + Username;
				WintabsCtrl(RedirectURL,'In Principle LSO',ProposalNo,'yes');
				}
				
	 });
	ajaxindicatorstop();
});
	

	
//Inprincple rpt end	
	
	
	
  	$(document).on('click', '#PSR', function () {
		ajaxindicatorstart("Generating, Please wait...");
var IOP=window.location.origin;
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var ProposalNo= $(this).closest('tr').find('td:eq('+$($('th:contains("Prospect Id")')[0]).index()+')').text();
	//var Username=document.getElementById("RECM_ModifiedBy").value
	
	//var Username=GetCurrentUser();
	
	//var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	//var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	
	//URL = URL.replace(/<Resultset><a><Result>/g, "");	
	//URL = URL.replace('</Result></a></Resultset>','');
	
	 //$("#SubmitSuccess").val("Hist");
	 // RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	 
	//RedirectURL = IOP+LoadFrmXML("RT002")+"&__format=pdf&__pageoverflow=1&__overwrite=false&CusId="+ProposalNo;
		RedirectURL = IOP+LoadFrmXML("RT035")+"&__format=pdf&__pageoverflow=1&__overwrite=false&param1="+ProposalNo;
		//RedirectURL = IOP+LoadFrmXML("RT035")+"&__format=docx&__pageoverflow=1&__overwrite=false&param1="+ProposalNo;
	//var link = document.createElement("a");
   // link.download = ProposalNo;
   // link.href = RedirectURL;
    //link.click();

	var link = document.createElement("a");
    link.download = ProposalNo;
    link.href = RedirectURL;
    link.click();


	//WintabsCtrl(RedirectURL,'PSR',AppNo,'yes');
	ajaxindicatorstop();
	
	
	
	//WintabsCtrl(RedirectURL,'PSR',ProposalNo,'yes');
	//ajaxindicatorstop();
});
		
		
		
		
  	$(document).on('click', '#Term', function () {
		ajaxindicatorstart("Generating, Please wait...");
	var IOP=window.location.origin;
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var ProposalNo= $(this).closest('tr').find('td:eq('+$($('th:contains("Prospect Id")')[0]).index()+')').text();
	//var Username=document.getElementById("RECM_ModifiedBy").value
	
	//var Username=GetCurrentUser();
	
	//var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	//var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	
	//URL = URL.replace(/<Resultset><a><Result>/g, "");	
	//URL = URL.replace('</Result></a></Resultset>','');
	
	 //$("#SubmitSuccess").val("Hist");
	 // RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	 
	//RedirectURL = IOP+LoadFrmXML("RT002")+"&__format=pdf&__pageoverflow=1&__overwrite=false&CusId="+ProposalNo;
		//RedirectURL = IOP+LoadFrmXML("RT035")+"&__format=pdf&__pageoverflow=1&__overwrite=false&param1="+ProposalNo;
		
	RedirectURL = IOP+LoadFrmXML("RT036")+"&__format=pdf&__pageoverflow=1&__overwrite=false&param1="+ProposalNo;
	//RedirectURL = IOP+LoadFrmXML("RT036")+"&__format=docx&__pageoverflow=1&__overwrite=false&param1="+ProposalNo;
	var link = document.createElement("a");
    link.download = ProposalNo;
    link.href = RedirectURL;
    link.click();
	//var link = document.createElement("a");
   // link.download = ProposalNo;
   // link.href = RedirectURL;
    //link.click();

	ajaxindicatorstop();
});
		
	$(document).on('click', '#Discussion', function () {
		ajaxindicatorstart("Generating, Please wait...");
	var IOP=window.location.origin;
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var ProposalNo= $(this).closest('tr').find('td:eq('+$($('th:contains("Process Id")')[0]).index()+')').text();
	//var Username=document.getElementById("RECM_ModifiedBy").value
	
	//var Username=GetCurrentUser();
	
	//var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	//var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	
	//URL = URL.replace(/<Resultset><a><Result>/g, "");	
	//URL = URL.replace('</Result></a></Resultset>','');
	
	 //$("#SubmitSuccess").val("Hist");
	 // RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	 
	//RedirectURL = IOP+LoadFrmXML("RT002")+"&__format=pdf&__pageoverflow=1&__overwrite=false&CusId="+ProposalNo;
		//RedirectURL = IOP+LoadFrmXML("RT035")+"&__format=pdf&__pageoverflow=1&__overwrite=false&param1="+ProposalNo;
		
	RedirectURL = IOP+LoadFrmXML("RT038")+"&__format=pdf&__pageoverflow=1&__overwrite=false&param1="+ProposalNo;
	var link = document.createElement("a");
    link.download = ProposalNo;
    link.href = RedirectURL;
    link.click();
	//var link = document.createElement("a");
   // link.download = ProposalNo;
   // link.href = RedirectURL;
    //link.click();

	ajaxindicatorstop();
});	
		
		
		
		
		
		
		
		
		
				   	$(document).on('click', '#SYSPDF', function () {
		ajaxindicatorstart("Generating, Please wait...");
var IOP=window.location.origin;
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	var ProposalNo= $(this).closest('tr').find('td:eq('+$($('th:contains("Application Number")')[0]).index()+')').text();
	//var Username=document.getElementById("RECM_ModifiedBy").value
	
	//var Username=GetCurrentUser();
	
	//var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
	//var URL= UI_getdata(processId,'','','','','Sam_sGetHistViewUrl');
	
	//URL = URL.replace(/<Resultset><a><Result>/g, "");	
	//URL = URL.replace('</Result></a></Resultset>','');
	
	 //$("#SubmitSuccess").val("Hist");
	 // RedirectURL = IOP+URL.split("|")[0]+"?activityId="+activityID+"&processId="+processId+"&View=Hist";
	 
	//RedirectURL = IOP+LoadFrmXML("RT003")+"&__format=pdf&__pageoverflow=1&__overwrite=false&CusId="+ProposalNo;
		RedirectURL = IOP+LoadFrmXML("RT003")+"&__format=pdf&CusId="+ProposalNo;
	//var link = document.createElement("a");
   // link.download = ProposalNo;
   // link.href = RedirectURL;
    //link.click();

	WintabsCtrl(RedirectURL,'System Cam',ProposalNo,'yes');
	ajaxindicatorstop();
});
/*	$(document).on('click', '.Ctabs ul li', function () {	 
 tabclick();
  
      });	*/
});

/*
function tabclick()
{


count ='0';
var count = $('#Table2_info').text().split(" ")[5];

$(".filestatbadge").remove();

var spanval= '<span class="filestatbadge">'+count+'</span>' 


$(".Ctabs").append(spanval);


//var len =$('ul.tabs li').length;

//var i=len;
//ajaxindicatorstart1();
/*
for(i=len; i>0; i--)
{
//var tabid= $('ul.tabs li')[i].id;

$("#"+$($('ul.tabs li')[i-1]).attr('id')).click();

if ($($('#Table2').find('tbody').find('tr').find('td')[4]).text()!="")
{
var count = $('#Table2_info').text().split(" ")[5];
$("#"+$($('ul.tabs li')[i-1]).find('span').attr('id')).text(count);

//
}
}*/
//ajaxindicatorstop1();
//}*/

function Getfilestatusflddata()
{
	
	$('#filestatusdata').empty();
	var wfid = $('#wkfwid').val();
	var op= UI_getdata(wfid,$('#TXTmenuID').val(),$("#LoggedInUser").val(),'','','SAM_sGetfilestatusdata');
		
	op= op.replace(/<Resultset><a><HTML>/g, "");	
	op= op.replace('</HTML></a></Resultset>',' '); 
	$('#filestatusdata').append(op);
	
	 
	
}
 // $('.Ctabs ul li').on('click', function () {

	  
 



$(document).on('click', '.HistoryPage', function () {
	
	


	
	
	var IOP=window.location.origin;
	var Username = getUrlParam("username");
    var MenuID = '9gb';
    
    
    var id= $(this).closest('tr').find('td:eq('+$($('th:contains("ProcessID")')[0]).index()+')').text();
	var activityID= $(this).closest('tr').find('td:eq('+$($('th:contains("ActivityID")')[0]).index()+')').text();
    var AppID = $(this).closest('tr').find('td:eq('+$($('th:contains("mode")')[0]).index()+')').text();
	
	var BranchId= $(this).closest('tr').find('td:eq('+$($('th:contains("BranchID")')[0]).index()+')').text();
	var BranchName=$(this).closest('tr').find('td:eq('+$($('th:contains("BranchName")')[0]).index()+')').text();
	var ProspectId=$(this).closest('tr').find('td:eq('+$($('th:contains("Prospect Id")')[0]).index()+')').text();
	var ApplicantName=$(this).closest('tr').find('td:eq('+$($('th:contains("ApplicantName")')[0]).index()+')').text();

	
		if(AppID=="Prospect")
	{
	 
	 var ProspectId=$(this).closest('tr').find('td:eq('+$($('th:contains("ProspectId")')[0]).index()+')').text();
	 
	
	var BranchName=$(this).closest('tr').find('td:eq('+$($('th:contains("Branch")')[1]).index()+')').text();
	var ApplicantName=$(this).closest('tr').find('td:eq('+$($('th:contains("FullName")')[0]).index()+')').text();

	 
	}
 //   var RedirectURL = IOP+"/web/userview/Repco50L/UPTO50L//Inbox?j_username=admin&j_password=admin&_mode=assignment&activityId=" + activityID;
	 //"http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formComplete.jsp?activityId=" + activityId + "&redirect=http://103.230.85.234:8585/jw/TestApplication/JSPIMP/CommonAssignment/formSuccess.jsp";
	   var RedirectURL = IOP+"/ThemePro_LSW/HistoryQueuePage?activityID="+activityID+"&AppID="+AppID+"&id="+id+"&MenuID="+MenuID+"&BranchId="+BranchId+"&BranchName="+BranchName+"&ApplicantId="+ProspectId+"&ApplicantName="+ApplicantName;

	   
	     WintabsCtrl(RedirectURL,'History',ProspectId,'no');
	  
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
   
});