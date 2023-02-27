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

	 
});



function preview()
{

 var clr1=document.getElementById("colortemplate").value;
 //alert(clr1);
// location.reload();
// $('link[rel=stylesheet][href="ThemeproLO/Common/CSS/dist/css/skins/_all-skins.min.css"]').remove();
 
 $('#PageIframe', window.parent.document).closest("html").find('link').closest("link:last").remove();
// window.parent.location.href.remove();
 
 
 var cssLink = $("<link rel='stylesheet' type='text/css' href='ThemeproLO/Common/CSS/dist/css/skins/templates/all-skins_"+clr1+".css'>");
 $('#PageIframe', window.parent.document).closest("html").find('head').append(cssLink);
       
}
function ColorSelect()

{

var color = document.getElementById('colortemplate').value;

$.ajax({
      //url: "Upto50L/CS_FetchFormFieldData",
      url: "ThemeproLO/UI_ColorTemplate",
      data: {color:color},
      async: false,
     // dataType: "json",
      type: 'POST',
      success: function (xml){
	  
	  if(xml=="")
	  {
			
    	 // alertify.alert("Template Changed");
		  	//alertify.alert(LoadFrmXML("V0120"));
			window.alert(LoadFrmXML("V0120"));
         }

   
},

});
}