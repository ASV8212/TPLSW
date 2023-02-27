$(document).ready(function (e){
	
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
					 

	var processid= getUrlParam("processid");
	var url= getUrlParam("url");
	var versnno= getUrlParam("versnno");
	var filesize=getUrlParam("flsize");
	var spname="LSW_sDocDetails";
	var op = UI_getdata(processid,versnno,"","","",spname);
	
	
	if($(op).find("FormName").text()!="")
	{
	$("#docname").text($(op).find("DocName").text());
	$("#formname").text($(op).find("FormName").text());
	
	var replaced = $(op).find("DocURL").text().replace(/\\/g, '/');
	

	var flname = replaced.split('/')[replaced.split('/').length-1].split('.')[0];

	$("#filename").text(flname);
	
	
	$("#createdby").text($(op).find("CreatedBy").text());
	$("#createddate").text($(op).find("CreatedDt").text());
	$("#format").text($(op).find("DocFormat").text());
	$("#filesize").text($(op).find("DocSize").text()+' kb');
	$("#docno").text($(op).find("DocVersionNo").text());
	


	if($("#format").text()=="pdf")
	{
	var IOP=window.location.origin+'ThemeproLO/Common/Images/pdf.png';
	$("#imgshow").append('<img id="theImg" src='+IOP+' />')	
	}
	else
	{
	var IOP='http://'+window.location.hostname+LoadFrmXML("RS006")+$(op).find("DocURL").text();
	$("#imgshow").append('<img id="theImg" src='+IOP.replace(/ /g, '%20')+' />');
	}
	}
	else
	{
	$("#formname").text(url.split("/")[4]);
	$("#docname").text(url.split("/")[5]);
	$("#docno").text(url.split("/")[6]);
	$("#filename").text(url.split("/")[7]);
	//$("#format").text(url.split("/")[7].split(".")[1]);
	$("#createdby").text(GetCurrentUserFName());
	$("#createddate").text(get2date());
	$("#filesize").text(filesize+' kb');
	
	if($("#format").text()=="pdf")
	{
	var IOP=window.location.origin+'ThemeproLO/Common/Images/pdf.png';
	$("#imgshow").append('<img id="theImg" src='+IOP+' />')	
	}
	else
	{
	var IOP='http://'+window.location.hostname+LoadFrmXML("RS006")+url;
	$("#imgshow").append('<img id="theImg" src='+IOP.replace(/ /g, '%20')+' />');
	}
	
	
	}
	

	
	
 });
                   
       