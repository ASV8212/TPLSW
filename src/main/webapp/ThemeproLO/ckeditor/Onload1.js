$(document).ready(function(){
	 $('.cke_button__save').removeClass('cke_button_disabled');
	$("#Save").click(function () {
		var Editor=$('.cke_wysiwyg_frame').contents().find("body").length;
		//for(var i=0;i<=Editor;i++){
		//	Save(i);
		//}
		//alert(Editor);
		//var param1=CKEDITOR.instances.BCDT_HdnBasicDetl.getData();
		var param1=CKEDITOR.instances.BCDT_HdnCusDetl.getData();
		//var BCDT_HdnLonDetl=CKEDITOR.instances.BCDT_HdnLonDetl.getData();
		//var BCDT_HdnHODetl=CKEDITOR.instances.BCDT_HdnHODetl.getData();
		//var BCDT_HdnAddrDetl=CKEDITOR.instances.BCDT_HdnAddrDetl.getData();
		//var BCDT_HdnSalDetl=CKEDITOR.instances.BCDT_HdnSalDetl.getData();
		//var BCDT_HdnGrpDetl=CKEDITOR.instances.BCDT_HdnGrpDetl.getData();
		//var BCDT_HdnRcmDetl=CKEDITOR.instances.BCDT_HdnRcmDetl.getData();
		//var BCDT_HdnBrDetl=CKEDITOR.instances.BCDT_HdnBrDetl.getData();
		//var BCDT_HdnExLonDetl=CKEDITOR.instances.BCDT_HdnExLonDetl.getData();
		var Prcsid= "46950_MCRFN_MicroFn";//getUrlParam("processId");//
		spname='Sam_sInsRichTxtEdt';
		var FldName ='BCDT_HdnCusDetl';
		var OP="";
		$.ajax({

	          url: "/ckeditor22/UI_GetMainTxtData",
	          data: { param1: param1
	        	 // , param2: BCDT_HdnCusDetl
	        	 // , param3: BCDT_HdnLonDetl
	        	 // , param4: BCDT_HdnHODetl
	        	 // , param5: BCDT_HdnAddrDetl
	        	  //, param6: BCDT_HdnSalDetl
	        	 // , param7: BCDT_HdnGrpDetl
	        	//  , param8: BCDT_HdnRcmDetl
	        	//  , param9: BCDT_HdnBrDetl
	        	//  , param10: BCDT_HdnExLonDetl
	        	//  , param11: ''
	        	//  , param12: ''
	        	//  , param13: ''
	        	//  , param14: ''
	        	//  , param15: ''
	        	  , param16: Prcsid
	        	  , param17: 'LSW_tRMBasicDetails'
	        	  ,param18:FldName
	        	  ,spname: spname },
	          async: false,
	          //dataType: "json",
			    dataType: "text",
	          type: 'POST',
	          complete: function OnSuccess_submit(xml1) {
	       	   
	       	 alert("Data saved");
	     	OP=xml1.responseText;
					//ajaxindicatorstop();
	       },
			
	       error: function (xml1)
	       {
				
				OP="Fail";
				
				alert(OP);
				
	       }
	                             
	          
		   }); 
		//alert($('.cke_wysiwyg_frame').contents().find("body").html());
	
	});
	$("#View").click(function () {
		var Editor=$('.cke_wysiwyg_frame').contents().find("body").length;
		for(var i=0;i<=Editor;i++){
			View(i);
		}
});
});
/** Cmnd on 19102017
function Save(Editor){
	//$('.cke_wysiwyg_frame').contents().find("body")[2].innerHTML
	var domain1= "//192.168.168.33//LSW_Attach";//LoadFrmXML("RS001");
	var usrpwd1= "administrator:encore123";//LoadFrmXML("RS002");
	var Prcsid="46800_MCRFN_MicroFn";
	var ActvID="99348_46800_MCRFN_MicroFn_LoanInitiation";
	var FormID="ApplicationForm";
	var EditorArray = ["BCDT_HdnGrpDetl","BCDT_HdnBasicDetl","BCDT_HdnCusDetl","BCDT_HdnRcmDetl","BCDT_HdnLonDetl","BCDT_HdnBrDetl","BCDT_HdnHODetl","BCDT_HdnExLonDetl","BCDT_HdnAddrDetl","BCDT_HdnSalDetl"];
	var EditorID=EditorArray[Editor];
	//var EditorID="EditorID"+Editor;
	var Content=$('.cke_wysiwyg_frame').contents().find("body")[Editor].innerHTML;
	$.ajax({

        url: "/ckeditor22/Editor",
        data: {Prcsid:Prcsid,ActvID:ActvID,FormID:FormID,EditorID:EditorID,domain1:domain1,usrpwd1:usrpwd1,Content:Content},
        async: false,
        type: 'POST',
        success: function OnSuccess_submit(data) {
        	//FilePath="IN2449_IN2449RG_"+FilePath+"_IA003850_"+$(data).find("Uniquecode").text();
	alert("Fine");
        },
        error: function OnError_submit(xmlRequest) {
        	
		//alertify.alert(LoadFrmXML("V0173"));
        }

    });
}

**/

function View(Editor){
	var domain1="//192.168.168.33//LSW_Attach";//LoadFrmXML("RS001");
	var usrpwd1= "administrator:encore123";//LoadFrmXML("RS002");
	var Prcsid= "Prcsid";//getUrlParam("processId");//
	var ActvID= "ActvID";//getUrlParam("activityId");//
	var FormID="FormID";//$('.cke_wysiwyg_frame').parents().find('form').attr('id');
	var EditorArray = ["BCDT_HdnGrpDetl","BCDT_HdnBasicDetl","BCDT_HdnCusDetl","BCDT_HdnRcmDetl","BCDT_HdnLonDetl","BCDT_HdnBrDetl","BCDT_HdnHODetl","BCDT_HdnExLonDetl","BCDT_HdnAddrDetl","BCDT_HdnSalDetl"];
	var EditorID=EditorArray[Editor];
	//var EditorID="EditorID"+Editor;
	var Content=CKEDITOR.instances.editor.getData();//$('.cke_wysiwyg_frame').contents().find("body")[Editor].innerHTML;
	 var op = UI_fetchdata(Prcsid, ActvID, FormID, EditorID,  Content,"lsw_sRichTxtEditContRpt");
}
function Save(Editor){
	//$('.cke_wysiwyg_frame').contents().find("body")[2].innerHTML
	var domain1="//192.168.168.33//LSW_Attach";//LoadFrmXML("RS001");
	var usrpwd1= "administrator:encore123";//LoadFrmXML("RS002");
	var Prcsid= "Prcsid";//getUrlParam("processId");//
	var ActvID= "ActvID";//getUrlParam("activityId");//
	var FormID="FormID";//$('.cke_wysiwyg_frame').parents().find('form').attr('id');
	var EditorArray = ["BCDT_HdnGrpDetl","BCDT_HdnBasicDetl","BCDT_HdnCusDetl","BCDT_HdnRcmDetl","BCDT_HdnLonDetl","BCDT_HdnBrDetl","BCDT_HdnHODetl","BCDT_HdnExLonDetl","BCDT_HdnAddrDetl","BCDT_HdnSalDetl"];
	var EditorID=EditorArray[Editor];
	//var EditorID="EditorID"+Editor;
	var Content=CKEDITOR.instances.editor.getData();//$('.cke_wysiwyg_frame').contents().find("body")[Editor].innerHTML;
	 var op = UI_getdata(Prcsid, ActvID, FormID, Content, EditorID, "lsw_sInsRichTxtEditCont");

                      /**  if ($(op).find('Result').text() == "Success") {
                           // window.alert(LoadFrmXML("V0170"));
                           alert("Data saved");
                        }**/
	
	/**$.ajax({

        url: "/ThemePro_LSW/Editor",
        data: {Prcsid:Prcsid,ActvID:ActvID,FormID:FormID,EditorID:EditorID,domain1:domain1,usrpwd1:usrpwd1,Content:Content},
        async: false,
        type: 'POST',
        success: function OnSuccess_submit(data) {
        	//FilePath="IN2449_IN2449RG_"+FilePath+"_IA003850_"+$(data).find("Uniquecode").text();
	alert("Fine");
        },
        error: function OnError_submit(xmlRequest) {
        	
		//alertify.alert(LoadFrmXML("V0173"));
        }

    });**/
}
function LoadFrmXML()
{
			
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.open("GET","http://192.168.168.33:100/LSW_Attach/Attachments/Documents/46870_MCRFN_MicroFn/ApplicationForm/BCDT_HdnAddrDetl/99351_46870_MCRFN_MicroFn_LoanInitiation.txt",false);
		  xmlhttp.send();
		  xmlDoc=xmlhttp.responseXML; 
		  var message = xmlDoc.getElementsByTagName(XMLNode)[0].childNodes[0].nodeValue;
		  return message;
}



function UI_getdata(param1,param2,param3,param4,param5,spname)
  
  {
	   
	   var OP="";
	  
	   $.ajax({

          url: "/ckeditor22/UI_GetTxtData",
          data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5,spname: spname },
          async: false,
          //dataType: "json",
		    dataType: "text",
          type: 'POST',
          complete: function OnSuccess_submit(xml1) {
       	   
       	 alert("Data saved");
     	OP=xml1.responseText;
				//ajaxindicatorstop();
       },
		
       error: function (xml1)
       {
			//alertify.alert(LoadFrmXML("V0126"));
			//	window.alert(LoadFrmXML("V0126"));
			OP="Fail";
			
			alert(OP);
			//ajaxindicatorstop();
       }
                             
          
	   });     
	  // ajaxindicatorstop();
	   return OP;
	   
	   }



function UI_fetchdata(param1,param2,param3,param4,param5,spname)

{
	   
	   var OP="";
	  
	   $.ajax({

        url: "/ckeditor22/UI_FetchTxtData",
        data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5,spname: spname },
        async: false,
        //dataType: "json",
		    dataType: "text",
        type: 'POST',
        complete: function OnSuccess_submit(xml1) {
     	   
     	 
   	OP=xml1.responseText;
   	alert(OP);
				//ajaxindicatorstop();
     },
		
     error: function (xml1)
     {
			//alertify.alert(LoadFrmXML("V0126"));
			//	window.alert(LoadFrmXML("V0126"));
			OP="Fail";
			
			alert(OP);
			//ajaxindicatorstop();
     }
                           
        
	   });     
	  // ajaxindicatorstop();
	   return OP;
	   
	   }
