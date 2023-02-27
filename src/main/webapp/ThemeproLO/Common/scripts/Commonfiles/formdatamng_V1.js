if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
//var Prvnt=//;
var timer1="-1";



function SessionStChk()
{
	 var CHK="";
	 var IOP=window.location.origin+"/jw"
	var callback = {
		    success : function(response){
		        //response.username
		        if(response.username != "roleAnonymous"){
		            console.log("Username is " + response.username);
					 //document.getElementById("TXTUsername").value=response.username;
		          //  alert("Username is " + response.username);
		           // CHK="Valid";
			
				    
		        }else{
					
					
		            console.log("User is anonymous");
		          //  document.getElementById("SubmitSuccess").value="InValid";
		          //alertify.alert(LoadFrmXML("V0061"));
					window.alert(LoadFrmXML("V0061"));
					window.close();
		         }
				 
		    }
		};
		AssignmentManager.getCurrentUsername(IOP, callback);	
		
}






     function get2dateTime() {
            var today ="";
			// var Token=$(window.parent.parent.document).find("#Prvnt").val();
            $.ajax({
                url: "/TPLSW/UI_fetchformdata_get2dateTime",
            data: { Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
            async: false,
           // dataType: "json",
            type: 'POST',
            success: function (xml1) {
               
                today= xml1;

            },

            error: function (xml1) {

              

            }

            });
             
            return today;

         

        }
	
	function disableInactiveForms(data)
	{
		  var Count = $(data).find('FormData').length;

            var Formnames = "";
            var FormID = "";
            var $input = "";

            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(data, "text/xml");
            var obj_elementcol = oXml.documentElement;

            //ResultBTNTable = "<table border=\"0\">";
            //ResultBTNTable += "<tr>";
            for (i = 0; i < Count; i++) {

                Formnames = obj_elementcol.getElementsByTagName('FormData')[i].textContent;
                FormID = Formnames.split('-')[1].replace(/ /g, '');
				
                //document.getElementById(FormID).style.display = "";
				
				
				if(Formnames.split('-')[0].indexOf('IA') != -1)
				{
					var x = document.getElementsByName(Formnames.split('-')[1]);
					$(x).attr("name", Formnames.split('-')[0])
					$('#SubmitSuccess').val('IA');
				}
            }
		
		
	}
	
	
	
	function ActiveForms() {
        	var ProcessID = getUrlParam("processId");
            var activityId = getUrlParam("activityId");
			 //var Token=$(window.parent.parent.document).find("#Prvnt").val();
            $.ajax({
                // url: "Upto50L/UI_formdatains",
                url: "/TPLSW/UI_fetchActivityform",
                data: { ProcessDefID: ProcessID, ActivityDefID: activityId,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
                async: false,
              //  dataType: "json",
                type: 'POST',
                success: disableInactiveForms,

                error: OnError_submitActFrms

            });

        }
	
	
	
	
function Get2DateBusn(){

var output=UI_getdata('','','','','','SAM_sGet2DateBusn');
var BusnDate= $(output).find("Result").text();

return BusnDate;
}

	
function FormRights()
{
	
	
		if(window.frameElement === null)
	{
		  $('body').empty();
		$("<div><img src=\"ThemeproLO/Common/Images/AD.png\"></div>").appendTo('body');
		return;
	}
		
		var formid=$('form').attr('id');
	if(formid != "AllForms")
	{
//Form Rights Check Start

	var html = "";

	var op= UI_getdata(GetCurrentUser(),formid,'','','','SAM_SGetFormRights');
		
	html = $(op).find("a").html();
	   
	   if(html != 'Yes')
	   {
		   $('body').empty();
		  // $('body').append(html);
		   $(html).appendTo('body');
		   return 'No'
	   }
	   else{
		   
		   return 'Yes'
	   }
	} 
//Form Rights Check End
	
	
}

function GetCurrentUser()
{
	 var CHK="";
	 var CUsername="";
	 var params="";
	// var IOP=window.location.origin+"/jw"

	  var url = LoadFrmXML("PG006");
	 
	 $.ajax({
	        url:         url,
		    async: false,
	        dataType:    'jsonp',
			data:        params,
	        processData: false,
	        success:     function(data) {
                    CUsername = data.username;
                }
	    });
	 
		return CUsername;
}


function GetCurrentUserFName()
{
	 var CHK="";
	 var CUsername="";
	 var params="";
	 var op ="";
	// var IOP=window.location.origin+"/jw"

	  var url = LoadFrmXML("PG006");
	 
	 $.ajax({
	        url:         url,
		    async: false,
	        dataType:    'jsonp',
			data:        params,
	        processData: false,
	        success:     function(data) {
                    CUsername = data.username;
					op = UI_Logingetdata(CUsername,"","","","","sam_sGetUserName");
                }
	    });
	 
		return $(op).find("FirstName").text();
}


function SessionLoginChk()
{
	 var CHK="";
	 var IOP=window.location.origin+"/jw"
	var callback = {
		    success : function(response){
		        //response.username
		        if(response.username != "roleAnonymous"){
		            console.log("Username is " + response.username);
					document.getElementById("SubmitSuccess").value="Valid";
		          //  alert("Username is " + response.username);
		           // CHK="Valid";
		        }else{
		            console.log("User is anonymous");
		            document.getElementById("SubmitSuccess").value="InValid";
					//window.close();
		           // alertify.alert(LoadFrmXML("V0061"));
		         }
		    }
		};
		AssignmentManager.getCurrentUsername(IOP, callback);	
		
}

function SessionLogin()
{
	
	var IOP=window.location.origin+LoadFrmXML("PG011");
	var IOP1=window.location.origin;
	//var MainPGURL=LoadFrmXML("PG001");
	var SChk="";
	
	 $.ajax({
	        url:         IOP,
		    async: false,
	        dataType:    'jsonp',
			data:        '',
	        processData: false,
	        success:     function(data) {
                    SChk = "Success"
                }
	    });
//	window.alert(SChk);
	
	
	//AssignmentManager.logout(IOP);
	
	 var CHK="";
	 var IOP=window.location.origin+"/jw"
	var MainPGURL=window.location.origin+LoadFrmXML("PG004");
	 
	var username=$("#TXTusername").val();
	var pwd=$("#TXTpwd").val();
	
	$.ajax({
            type: "POST",
            url: MainPGURL,
			async:false,
           // data: {
             //   username: username,
               // password: pwd
            //},
			 beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + Base64.encode(username + ":" + pwd));
            },
			dataType: "json",
            success: function(res) {
                //console.log("username (" + res.username + ") is " + ((res.isAdmin !== undefined && res.isAdmin === "true")?"admin":"not an admin"));
            document.getElementById("SubmitSuccess").value="Valid";
			 
			},            
			error:function(response){
				document.getElementById("SubmitSuccess").value="";
			//alertify.alert("Incorrect username or password");
			//alertify.alert(LoadFrmXML("V0125"));
			window.alert(LoadFrmXML("V0125"));
	}
        });
	
	/*
var callback = {

    success : function(response){

        //response.username && response.isAdmin

        if(response.username != "roleAnonymous"){
            
				document.getElementById("SubmitSuccess").value="Valid";
				
			
        }else{

            alert("Fail to login user!");
  
        }

    },
	error:function(response){
		alert("Incorrect username or password");
	}

};

AssignmentManager.login(IOP, username, pwd, callback);*/
//AssignmentManager.loginWithHash(IOP, username, pwdHash, callback);
		
}




function SessionOTPLogin()
{
	
	var IOP=window.location.origin+LoadFrmXML("PG011");
	var IOP1=window.location.origin;
	//var MainPGURL=LoadFrmXML("PG001");
	var SChk="";
	
	 $.ajax({
	        url:         IOP,
		    async: false,
	        dataType:    'jsonp',
			data:        '',
	        processData: false,
	        success:     function(data) {
                    SChk = "Success"
                }
	    });
	
	 var CHK="";
	 var IOP=window.location.origin+"/jw"
	var MainPGURL=window.location.origin+LoadFrmXML("PG004");
	 
	var username=$("#TXTusername").val();
	var pwd=$("#TXTpwd").val();
	
	$.ajax({
            type: "POST",
            url: MainPGURL,
			async:false,
           data: {
                username: username,
                hash: pwd
            },
			// beforeSend: function (xhr) {
            //    xhr.setRequestHeader ("Authorization", "Basic " + Base64.encode(username + ":" + pwd));
            //},
			dataType: "json",
            success: function(res) {
                //console.log("username (" + res.username + ") is " + ((res.isAdmin !== undefined && res.isAdmin === "true")?"admin":"not an admin"));
            document.getElementById("SubmitSuccess").value="Valid";
			 
			},            
			error:function(response){
				document.getElementById("SubmitSuccess").value="";
			//alertify.alert("Incorrect username or password");
			//alertify.alert(LoadFrmXML("V0125"));
			window.alert(LoadFrmXML("V0125"));
	}
        });
	
		
}

function AppliLogout() 
{
	var IOP=window.location.origin+"/jw"
	var IOP1=window.location.origin;
	var MainPGURL=LoadFrmXML("PG001");
	AssignmentManager.logout(IOP);	

	$.ajax({
	      //url: "Upto50L/CS_FetchFormFieldData",
	      url: window.location.origin+"/TPLSW/Logout",	   
	        data: { },
	      async: false,
	     // dataType: "json",
	      type: 'GET',
	      success: function (xml){
              //fetchdropdown('',param4,param5,xml);
			//window.close();
			window.location.href = window.location.origin+"/TPLSW/";
		   },
	  });
	
	
	
	
}


function AppliLogoutLogin() 
{
	var IOP=window.location.origin+"/jw"
	var IOP1=window.location.origin;
	var MainPGURL=LoadFrmXML("PG001");
	AssignmentManager.logout(IOP);	

	$.ajax({
	      //url: "Upto50L/CS_FetchFormFieldData",
	      url: window.location.origin+"/TPLSW/Logout",	   
	        data: { },
	      async: false,
	     // dataType: "json",
	      type: 'GET',
	      success: function (xml){
              //fetchdropdown('',param4,param5,xml);
			//window.close();
			//window.location.href = window.location.origin+"/TPLSW/";
		   },
	  });
	
	
	
	
}

/*function AppliClose() 
{
	var IOP=window.location.origin+"/jw"
	var IOP1=window.location.origin;
	var MainPGURL=LoadFrmXML("PG001");
	
	//AssignmentManager.logout(IOP);	
	window.close();
	
}*/

function Profile()
{
	
	
	var IOP=window.location.origin;
	var MainPGURL=LoadFrmXML("PG003");
		
		
	 var RedirectURL = IOP+"/TPLSW/Profile"
 $(location).attr('href',RedirectURL);	
		
	//JPopup.create("ProfilePopup", "Profile Setup");
	//JPopup.show("ProfilePopup", IOP+MainPGURL, "");
	//JPopup.show("ProfilePopup",MainPGURL,"","","","","Get");
	
	
}
/*
function submitdata(FieldsClassName) {
    var x = document.getElementsByClassName(FieldsClassName);
    var y = document.getElementsByTagName("select");
    var name = "";
    var fieldid = "";
    var value = "";
    var type = "";
    var a = parseInt(x.length) + parseInt(y.length);

    //var formid = document.getElementsByTagName("form").item('0').name;

    var formxml = "<Form><Details>";
    for (i = 0; i < x.length; i++) {
		
		if($(document.getElementsByClassName(FieldsClassName).item(i)).is("select")==true || $(document.getElementsByClassName(FieldsClassName).item(i)).is("input")==true){
		
        name = document.getElementsByClassName(FieldsClassName).item(i).name;
        fieldid = document.getElementsByClassName(FieldsClassName).item(i).id;
      //  value = document.getElementsByClassName(FieldsClassName).item(i).value;
       
        if($('#' + fieldid).attr('type')=="radio") 
        {
        	value=$('input[id='+fieldid+']:checked').val();
        	if(value==undefined)
        	{
		        value = "";
		    }
        }
        else if($('#' + fieldid).attr('type')=="checkbox") 
        {
        	value=$('input[id='+fieldid+']').prop("checked");
        	if(value==undefined)
        	{
		        value = "";
		    }
        }
        else if ($('#' + fieldid).hasClass("IsCURCommaFields")) {
            value = document.getElementsByClassName(FieldsClassName).item(i).value.replace(/,/g, "");

        }
        else {
		if ($('#' + fieldid).hasClass("ImgIdnt")) {
		if(document.getElementsByClassName(FieldsClassName).item(i).src.indexOf("/Attachments/")!=-1)
		{
		value = document.getElementsByClassName(FieldsClassName).item(i).src;
		value = "/Attachments/" + value.split("/Attachments/")[1];
		}
		else{
		value = "";
		}
		}
		else
		{
           // value = document.getElementsByClassName(FieldsClassName).item(i).value.replace(/\&/g, "and");
		
			if (typeof($($("."+FieldsClassName)[i]).val()) == "object")
				{
				
				var GetObjval="";
				
				if ($($("."+FieldsClassName)[i]).val() != null)
					
				{
				for(y=0;y<=$($("."+FieldsClassName)[i]).val().length-1;y++)
					{
					
					if (y == $($("."+FieldsClassName)[i]).val().length-1)
						{
					GetObjval = GetObjval + $($("."+FieldsClassName)[i]).val()[y];
						}
					else
						{
						GetObjval = GetObjval + $($("."+FieldsClassName)[i]).val()[y] + '`';
						}
					
					}
				}
				value = GetObjval;
				}
			else
				{
				value = $($("."+FieldsClassName)[i]).val();	
				}
			
			
		
		}
        }

        //type = document.getElementsByTagName("input").item(i).type;
        //if(fieldid !="" && type!="submit")
        //{
        //if(fieldid !="" && type!="radio")
        //{
			if(value != "")
			{
        var formxml = formxml + "<" + name + ">" + value + "</" + name + ">";
			}
        //}
        //}
		
		
	}
    }
    /*for(j=0;j<y.length;j++)
    {
    name = document.getElementsByTagName("select").item(j).name;
    fieldid = document.getElementsByTagName("select").item(j).id;
    value = document.getElementsByTagName("select").item(j).value;
    type = document.getElementsByTagName("input").item(j).type;
    if(fieldid !="" && type!="submit")
    {
    if(fieldid !="" && type!="radio")
    {

    var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
    }
    }
    }*
    var formxml = formxml + "</Details></Form>";
    return formxml;

} */

function submitdata(FieldsClassName) {
    var x = document.getElementsByClassName(FieldsClassName);
    var y = document.getElementsByTagName("select");
    var name = "";
    var fieldid = "";
    var value = "";
    var type = "";
    var a = parseInt(x.length) + parseInt(y.length);

    //var formid = document.getElementsByTagName("form").item('0').name;

    var formxml = "<Form><Details>";
    for (i = 0; i < x.length; i++) {
		
		if($(document.getElementsByClassName(FieldsClassName).item(i)).is("select")==true || $(document.getElementsByClassName(FieldsClassName).item(i)).is("input")==true || $(document.getElementsByClassName(FieldsClassName).item(i)).is("textarea")==true){
		
        name = document.getElementsByClassName(FieldsClassName).item(i).name;
        fieldid = document.getElementsByClassName(FieldsClassName).item(i).id;
      //  value = document.getElementsByClassName(FieldsClassName).item(i).value;
       
        if($('#' + fieldid).attr('type')=="radio") 
        {
        	value=$('input[id='+fieldid+']:checked').val();
        	if(value==undefined)
        	{
		        value = "";
		    }
        }
        else if($('#' + fieldid).attr('type')=="checkbox") 
        {
        	value=$('input[id='+fieldid+']').prop("checked");
        	if(value==undefined)
        	{
		        value = "";
		    }
        }
        else if ($('#' + fieldid).hasClass("IsCURCommaFields")) {
            value = document.getElementsByClassName(FieldsClassName).item(i).value.replace(/,/g, "");

        }
        else {
		if ($('#' + fieldid).hasClass("ImgIdnt")) {
		if(document.getElementsByClassName(FieldsClassName).item(i).src.indexOf("/Attachments/")!=-1)
		{
		value = document.getElementsByClassName(FieldsClassName).item(i).src;
		value = "/Attachments/" + value.split("/Attachments/")[1];
		}
		else{
		value = "";
		}
		}
		else
		{
            value = document.getElementsByClassName(FieldsClassName).item(i).value//.replace(/\&/g, "and");
			}
        }

        //type = document.getElementsByTagName("input").item(i).type;
        //if(fieldid !="" && type!="submit")
        //{
        //if(fieldid !="" && type!="radio")
        //{
			if(value != "")
			{
        var formxml = formxml + "<" + name + ">" + value + "</" + name + ">";
			}
        //}
        //}
		
		
	}
    }
    /*for(j=0;j<y.length;j++)
    {
    name = document.getElementsByTagName("select").item(j).name;
    fieldid = document.getElementsByTagName("select").item(j).id;
    value = document.getElementsByTagName("select").item(j).value;
    type = document.getElementsByTagName("input").item(j).type;
    if(fieldid !="" && type!="submit")
    {
    if(fieldid !="" && type!="radio")
    {

    var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
    }
    }
    }*/
    var formxml = formxml + "</Details></Form>";
    return formxml;

}
  
  
  function FielddatafrmDB(param1,param2,param3,param4,param5,spname)
  {
	  $.ajax({
	      //url: "Upto50L/CS_FetchFormFieldData",
	      url: "/TPLSW/CS_FetchFormFieldData",	   
	        data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5,spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
	      async: false,
	     // dataType: "json",
	      type: 'POST',
	      success: function (xml){

              fetchdropdown('',param4,param5,xml);

		   },

	      error: OnError1

	  });
 
  }
  
  
  function fetchdropdown(index,code,id,xval)
{
//alert('hi');

//xval = xval.documentElement.innerHTML;

//var str_xml = '<Select>'+xval+'</Select>';
	  var str_xml = xval;
//var str_xml=xval;
var parser_xml = new DOMParser();
var oXml = parser_xml.parseFromString(str_xml, "text/xml");
var obj_elementcol = oXml.documentElement;


var refno = '';
var type = '';
var dropstr = "";
var select=document.getElementById(id);
var ind;
var selectedvalue=document.getElementById(id).value;
Remove(id);
	 var option = document.createElement('option');
        option.text = option.value = '--Select--';
		option.index=0;
        select.add(option, i);
		if(selectedvalue=="")
		{
	ind = 0;
		}
	for (i = 0; i < obj_elementcol.getElementsByTagName(code).length; i++){
	//var item = xml.childNodes(0).childNodes(i).text;
	var item = obj_elementcol.getElementsByTagName(code)[i].textContent;
	// var optn = document.createElement("option");        
        // document.getElementById(id).options.add(optn);
        // optn.text = '--Select--';
        // optn.value = '--Select--';
if(item==selectedvalue){
ind = i+1;
 
 }

  var exists = false;
	for (x = 0 ; x <= select.options.length - 1 ; x++ ){
		if (select.options[x].value == item) {
		select.options[x].selected = true;
		exists = true;
		break;
		}
	}
	if(!exists) {
	
	var option = document.createElement('option');
		option.setAttribute("value",item);
		var textnode = document.createTextNode(item);
        option.appendChild(textnode);
		document.getElementById(id).appendChild(option);
/* var option = document.createElement('option');
        option.text = option.value = item;
		option.index=i+1;
        select.add(option, i);*/
		}
    
   	}
  select.selectedIndex=ind;
}

 function Remove(id)
  {
    var DropDownList=document.getElementById(id);
  
    for(i=DropDownList.length-1; i>=0; i--) 
    {
       //if(DropDownList.options[i].selected)
       // {
           DropDownList.remove(i);         
       // }
    }
  }
  
  function migrateformdata(Fromfields,Tofields,Fromtable,Totable,ProcessID)
  {

      $.ajax({
          //url: "Upto50L/CS_Migrformdata",
          url: "/TPLSW/CS_Migrformdata",
          data: { Fromfields: Fromfields, Tofields: Tofields, Fromtable: Fromtable, Totable: Totable, ProcessID: ProcessID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
          async: false,
         // dataType: "json",
          type: 'POST',
          success: function (xml) {
          //formdataonload_populate();
          },
          error: OnError2

      });
  }
  	function OnError2(xmlRequest) {
           // alertify.alert(LoadFrmXML("V0067"));
			window.alert(LoadFrmXML("V0067"));
			
        }

        function OnError1(xmlRequest) {
            //alertify.alert(LoadFrmXML("V0068"));
			 window.alert(LoadFrmXML("V0068"));

        }


        function FormSubmitButtons() {
 
       var View = $("#SubmitSuccess").val();
	   
        	var ProcessID = getUrlParam("processId");
            var ActivityID = getUrlParam("activityId");
        	
        	if(View!="Hist")
        	{
            $.ajax({
                // url: "Upto50L/UI_formdatains",
                url: "/TPLSW/UI_fetchformButtonData",
                data: { ProcessDefID: ProcessID, ActivityDefID: ActivityID ,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
                async: false,
               // dataType: "json",
                type: 'POST',
                success: OnSuccess_submitBtn,

                error: OnError_submitBtn

            });
        	}
        }

function OnSuccess_submitBtn(data) 
{
	var Count = $(data).find('BTNData').length;
	var ResultBTNTable = "";
	var BTNnames = "";
	var BTNID = "";
	var $input = "";
				
	var parser_xml = new DOMParser();
	var oXml = parser_xml.parseFromString(data, "text/xml");
	var obj_elementcol = oXml.documentElement;
	
	for (i = 0; i < Count; i++) 
	{
		BTNnames = obj_elementcol.getElementsByTagName('BTNData')[i].textContent;
		//BTNID = BTNnames.replace(/ /g, '');
		$('#'+BTNnames).show();
	}
	//alertify.alert(ResultBTNTable)
}
        /*function OnSuccess_submitBtn(data) {

           // alertify.alert(data);
          //var val = $(data).find('BTNData').text();  
         // alertify.alert(val);
            var Count = $(data).find('BTNData').length;
            var ResultBTNTable = "";
            var BTNnames = "";
            var BTNID = "";
            var $input = "";    
                      
           var parser_xml = new DOMParser();
var oXml = parser_xml.parseFromString(data, "text/xml");
var obj_elementcol = oXml.documentElement;

ResultBTNTable = "<table border=\"0\">";
ResultBTNTable += "<tr>";
for (i = 0; i < Count; i++) {

     BTNnames = obj_elementcol.getElementsByTagName('BTNData')[i].textContent;
     BTNID = BTNnames.replace(/ /g, '');


    ResultBTNTable += "<td>" + "<input type=\"button\" id=\""+ BTNID + "\" value=\"" +BTNnames+ "\" class=\"ForassignmentComplete buttonPRS\"/></td>";
      

}
ResultBTNTable += "</tr>";
ResultBTNTable += "</table>";

$input = $(ResultBTNTable);

$input.appendTo($("#SubmitBTNs"));

//alertify.alert(ResultBTNTable)

        }*/

        function OnError_submitBtn() {

           // alertify.alert(LoadFrmXML("V0069"));
			window.alert(LoadFrmXML("V0069"));

        }

        function FormDataToDB(tablenameins,Prifix,ExtrData) {

            var CHKresult = "";

            var tablenameins1 = "";
            var xml = submitdata(Prifix+"DBfields");
            //var xml = submitdata("DBfields");
            var activityid = $("#POIS_ActivityID").val();
            var activityname = ExtrData;

            $.ajax({

                url: "/TPLSW/UI_formdatains",
                data: { xml: xml, tablenameins: tablenameins, tablenameins1: tablenameins1, activityid: activityid, activityname: activityname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
                async: false,
                //dataType: "json",
                type: 'POST',
                success: function OnSuccess_submit(data) {
                    if (data == 'Success') {
                        //alert("Data Inserted");
                        //document.getElementById("SubmitSuccess").value = "Yes";
                      //  CHKresult = "Yes";
                       
                    	//alert("Form Saved Successfully");
                    	toastr.success('Form Saved Successfully');
                    }
                    else {
                       // alert("Insertion Failed");
                       // document.getElementById("SubmitSuccess").value = "No";
                    	CHKresult = "Fail";
						toastr.error('Form Submission Failed');
                    	//alert("Form Submission Failed");
                    }
                },
                error: function OnError_submit(xmlRequest) {
                   // alert("Submission Failed");
                    //document.getElementById("SubmitSuccess").value = "No";
                   // CHKresult = "No";
				   CHKresult = "Fail";
				   toastr.error('Form Submission Failed');
                	//alert("Form Submission Failed");
                }
            });

            return CHKresult;

        }
        
 
        
     function UI_getdata(param1,param2,param3,param4,param5,spname)
       
       {
    	   
    	   var OP="";
		    var Token=$(window.parent.parent.document).find("#Prvnt").val();
    	  
    	   $.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5,spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
               async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   	OP=xml1.responseText;
					//ajaxindicatorstop();
            },
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });     
		  // ajaxindicatorstop();
    	   return OP;
    	   
    	   }
		   
   function UI_GetData_Disb(param1,param2,param3,param4,param5,spname)
     {  
    	   var OP="";
		    var Token=$(window.parent.parent.document).find("#Prvnt").val();
    	  
    	   $.ajax({

               url: "/TPLSW/UI_GetData_Disb",
               data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5,spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
               async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   	OP=xml1.responseText;
					//ajaxindicatorstop();
            },
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });     
		  // ajaxindicatorstop();
    	   return OP;
    	}
      
     
     function UI_getdataLrg(param1,param2,param3,param4,param5,spname)
     
     {
  	   
  	   var OP="";
		    var Token=$(window.parent.parent.document).find("#Prvnt").val();
  	  
  	   $.ajax({

             url: "/TPLSW/UI_GetDataLrg",
             data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5,spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
             async: true,
             //dataType: "json",
			    dataType: "text",
             type: 'POST',
             complete: function OnSuccess_submit(xml1) {
          	   	OP=xml1.responseText;
					//ajaxindicatorstop();
          },
			
          error: function (xml1)
          {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
          }
                                
             
  	   });     
		  // ajaxindicatorstop();
  	   return OP;
  	   
  	   }
     
	    function UI_Logingetdata(param1,param2,param3,param4,param5,spname)
       
       {
    	   
    	   var OP="";
		     var Token=$(window.parent.parent.document).find("#Prvnt").val();
    	  
    	   $.ajax({

               url: "/TPLSW/UI_LoginGetData",
               data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5,spname: spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
               async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
            	   	OP=xml1.responseText;
					//ajaxindicatorstop();
            },
			
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });     
		  // ajaxindicatorstop();
    	   return OP;
    	   
    	   }
       
	   function UI_IntrData(param1,param2,param3,param4,param5,spname,DBSrc)
       
       {
    	   
    	   var OP="";
    	  
    	   $.ajax({

               url: "/TPLSW/UI_GetData",
               data: { param1: param1, param2: param2, param3: param3, param4: param4, param5: param5,spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: true,
               //dataType: "json",
               type: 'POST',
               success: function OnSuccess_submit(xml1) {
            	   	
					if(	$(xml1).find("a").text() != "")
					{
					OP=xml1;
					}
					else
					{
					OP="Success"	
					}
					//ajaxindicatorstop();
            },
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }
                                  
               
    	   });     
		  // ajaxindicatorstop();
    	   return OP;
    	   
    	   }
	   
        /*function OnSuccess_submit(data) {
            if (data == 'Success') {
                alert("Data Inserted");
                document.getElementById("SubmitSuccess").value = "Yes";
                return "Yes";
            }
            else {
                alert("Insertion Failed");
                document.getElementById("SubmitSuccess").value = "No";
                return "No";
            }
        }

        function OnError_submit(xmlRequest) {
            alert("Submission Failed");
            document.getElementById("SubmitSuccess").value = "No";
            return "No";

        }*/
        
        function SCFFormDataFromDB(TableName, FieldPrx, FieldClass, GridTableID,PrscID) {

            var loggedinuser = GetCurrentUserFName();
			 var ProcessID="";
			  var ActualProcessID = getUrlParam("processId");
			 if(PrscID=="")
			 {
				ProcessID = ActualProcessID;
			 }
			 else
			 {
				ProcessID =PrscID;
			 }
            var activityId = getUrlParam("activityId");
            var View = getUrlParam("View");

			
            //var securityname123 = "#currentUser.firstName#";
            //alertify.alert(securityname123);
                       
            var ProcessActvID = ProcessID +"|"+activityId;
            var TableName = TableName + "|" + View;
            
            $.ajax({
                //url: "Upto50L/UI_fetchformdata",
                url: "/TPLSW/UI_fetchformdata",
                data: { id: ProcessActvID, TableName: TableName,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
                async: false,
               // dataType: "json",
                type: 'POST',
                success: function (xml1) {

                    var n = document.getElementsByClassName(FieldClass);
                    for (i = 0; i < n.length; i++) {
                        name = document.getElementsByClassName(FieldClass).item(i).name;
                        var val = $(xml1).find(name).text();
                        if (val != "") {
                            document.getElementById(name).value = val;
	                 
				if($("#"+ name).is( "select" ))
				{
				var optn="<option  value='"+val+"'>" + val + "</option>"
				if($("#"+name+" option:contains("+val+")").length==0)
				{
				$("#"+ name).append(optn)
				$("#"+name+" option:contains("+val+")").attr("selected","selected")
				}
				
				}
				
				//IsCURCommaFields
				var x = $("#" + name).hasClass("IsCURCommaFields");
                     if (x == true) {
						if(val=="")
						{
							val= "0";
						}
                        $("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(2)));
                    }
                    else {
						//For Attached Photo identity Start
					var y = $("#" + name).hasClass("ImgIdnt");
                    if (y == true) {
					
					 var IOP=window.location.origin+LoadFrmXML("RS006");
					
					val = IOP+val;
					
					
					 document.getElementById(name).src = val;
                    }
						//For Attached Photo identity End
					else
					{				
                        document.getElementById(name).value = val;
						//checkbox
						if($("#"+ name).attr('type') == 'checkbox')
						{
							if($("#"+ name).val()=="Y")
							{
								$("#"+name).prop('checked', true);
							}
							else
							{
								$("#"+name).prop('checked', false);
							}
						}
						//radio
                        if(document.getElementById(name).type == "hidden") {
                        	var count = 0;
                        	count = $("#"+name).closest('td').find('input[type="radio"]').length;
                        	if(count != 0){
                        		$("#"+name).closest('td').find('input[type="hidden"]').val(val);
                        		var hide = $("#"+name).closest('td').find('input[type="hidden"]')
                        		if(hide.val() == ""){
                        			
                        		}
                        		else{
                        			var val2 = $("#"+name).closest('td').find('input[type="radio"]');
                        			for(var j = 0;j<val2.length;j++)
                        				{
                        				if(val2[j].title == val){
                        					 $('#'+val2[j].id).prop('checked', true);
                        					 break;
                        				}
                        			}

                        		}
                        		
                        	}
                        	}
						}
                    }
                            
                        }
                    }


					
                    document.getElementById(FieldPrx + 'PrcsID').value = ActualProcessID;
					
					
					
					document.getElementById(FieldPrx + 'ActivityID').value=activityId;
                    document.getElementById(FieldPrx + 'DtModified').value = get2dateTime();

                    if (document.getElementById(FieldPrx + 'DtCreated').value == "" || document.getElementById(FieldPrx + 'DtCreated').value == "null") {
                        document.getElementById(FieldPrx + 'DtCreated').value = get2dateTime();
                    }

                    if (document.getElementById(FieldPrx + 'CreatedBy').value == "" || document.getElementById(FieldPrx + 'CreatedBy').value == "null") {
                        document.getElementById(FieldPrx + 'CreatedBy').value = loggedinuser;
                    }
                    document.getElementById(FieldPrx + 'ModifiedBy').value = loggedinuser;

                    //Onloadgrid(GridFields, GridTableID);
		
                },

                error: OnError_ONLOAD

            });

			//Edited -- Dhanraj
			//SetGridViewmodeVal();
			
			
			
			//For Attached Photo identity Start
		/*		if($(document).find( "input[id*='PrcsID']" ).length!=0)
				{
		 var prodata= $(document).find( "input[id*='PrcsID']" ).attr('id').split("_")[0];

		PhotoIdnty(prodata+"_");
			}*/
			
			//For Attached Photo identity End

        }

        function OnError_ONLOAD() {

           // alertify.alert(LoadFrmXML("V0070"));
			  window.alert(LoadFrmXML("V0070"));
        }


        function FormDataFromDB(TableName, FieldPrx, FieldClass, DATA) {

            var loggedinuser = $("#LogUsr").val();
			
           /* var ProcessID = getUrlParam("processId");
            var activityId = getUrlParam("activityId");
            var View = getUrlParam("View");*/
			
			
			var activityId = $("#ActvID").val();
			var ProcessID =$("#PrcsID").val();
			 var View =$(window.parent.document).find("#NxAction").val();

            //var securityname123 = "#currentUser.firstName#";
            //alertify.alert(securityname123);
                       
            var ProcessActvID = ProcessID +"|"+activityId + "|" + DATA;
            var TableName = TableName + "|" + View;
            
            $.ajax({
                //url: "Upto50L/UI_fetchformdata",
                url: "/TPLSW/UI_fetchformdata",
                data: { id: ProcessActvID, TableName: TableName ,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
                async: false,
               // dataType: "json",
                type: 'POST',
                success: function (xml1) {

                    var n = document.getElementsByClassName(FieldClass);
                    for (i = 0; i < n.length; i++) {
                        name = document.getElementsByClassName(FieldClass).item(i).name;
                        var val = $(xml1).find(name).text();
                        if (val != "") {
                        	
                        	if ($("#"+name).length > 0)
                        		{
                        		
                         document.getElementById(name).value = val;
                         
                         // added by bala Upload Image Show Start
                         if($("[data-Validate="+name+"]").length > 0)
                         {
                        	 FileSplit=val.split('\\');
                        	var FileName=FileSplit[FileSplit.length - 1]
                        	 $("#"+name+"UPLOAD").hide()
                        	 $("#"+name+"UPLOAD").closest('.md-form').append('<span class="name">'+FileName+'</span>');
                         	if(val != "")
                         	{
                         		$("."+name).show();
                         	}
                         	else
                         	{
                         		$("."+name).hide();
                         		$("#"+name+"UPLOAD").show()
                         	}
                         }
                         // End
						  if($("[data-FetchValidate="+name+"]").length > 0)
                    	 {
                        	 $("." + $("[data-FetchValidate="+name+"]").attr("data-FetchValidateArea")).show();
                        	 $("." + $("[data-FetchValidate="+name+"]").attr("data-FetchValidateArea")+'1').hide();
                        	 $(".OtherKYCInfo").show();
                    	 }
                         if($("[data-Validatearia="+name+"]").length > 0)
                        	 {
                        	 
                        	 if (val == "Verified" || val == "Upload Verified")
                        		 {
                            $("[data-Validatearia="+name+"]").text(val);
                        	$("[data-Validatearia="+name+"]").addClass("btn-GrnInplain");
                        	$("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        	$(".OtherKYCInfo").show();
                        		 }
                        	 else if (val == "Failed")
                    		 {
                    		 $("[data-Validatearia="+name+"]").text(val);
                    	     $("[data-Validatearia="+name+"]").addClass("btn-RedInplain");
                    	     $("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                    	     $(".OtherKYCInfo").show();
                    		 }
                        	 
                        	 }
                         
                        		}
                            if($("#"+name).val()  != "")
  	                	  {
                              $('[for='+name+']').addClass('active');
  	                	  }
                            
	                        //checkbox 11-01-2018
                            
   if($('[name='+name+']').attr('type')=="radio") 
     {
	   $('[name='+name+'][value="'+val+'"]').prop('checked', true);
     }   
   
   if($('[name='+name+']').attr('type')=="checkbox") 
   {
	   $('[name='+name+'][value="'+val+'"]').prop('checked', true);
   } 
                          
				/*if($("#"+ name).attr('type') == 'checkbox')
						{
						
					
					$("#"+ name).prop("checked",val);
					
					
						}*/
						
				if($("#"+ name).is( "select" ))
				{
				var optn="<option  value='"+val+"'>" + val + "</option>"
				if($("#"+name+" option[value='" + val + "']").length==0)
				{
				$("#"+ name).append(optn)
				//$("#"+name+" option:contains("+val+")").attr("selected","selected")
				$("#"+name+" option[value='"+val+"']").attr("selected","selected")
				}
				else
					{
					//$("#"+name+" option:contains("+val+")").attr("selected","selected")
					$("#"+name+" option[value='"+val+"']").attr("selected","selected")
					}
				
			//	if($("#"+ name).prev('ul').length == 0)
					//{
				$("#"+ name).material_select();
					//}
				}
	
				//IsCURCommaFields
				var x = $("#" + name).hasClass("IsCURCommaFields");
                     if (x == true) {
						if(val=="")
						{
							val= "0";
						}
                        
						
											
			if (val.replace(/,/g,"").indexOf('.')>0)
			{

			if (val.replace(/,/g,"").split('.')[1] > 0)
			{
$("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(2)));
			}	
else{
$("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}	
			
			
			}
else{			
						
                 $("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}
						
						
						
						
						
						
						
						
                    }
                    else {
						//For Attached Photo identity Start
					var y = $("#" + name).hasClass("ImgIdnt");
                    if (y == true) {
					
					 var IOP=LoadFrmXML("RS006");
					
					val = IOP+val;
					
					
					 document.getElementById(name).src = val;
                    }
						//For Attached Photo identity End
					else
					{				
						if ($("#"+name).length > 0)
                		{
                 document.getElementById(name).value = val;
                		}
						}
                    }
                         
                  if (name != "")
               	  {
                 if($("#"+ name).length > 0)
                 {
               	  
               	  if ($("#"+ name).is("select")==true)
           		  {        		  
           		  
           		  if ($("#"+ name).val() == "")
           		  {        		  
           		  $("#"+ name).prev().prev().addClass("DataInValid")
           		   $("#"+ name).prev().prev().removeClass("DataNormal");
           		  Rtn = "Mandatory";
           		  }
           	  else
           		  {
           		  $("#"+ name).prev().prev().addClass("DataNormal");
           		  $("#"+ name).prev().prev().removeClass("DataInValid");
           		  var a;
           		  }    		  
           		  }
           	  else
           		  {
           		  if ($("#"+ name).val() == "")
           		  {        		  
           		    $("#"+ name).addClass("DataInValid")
           		    $("#"+ name).removeClass("DataNormal");
           		    Rtn = "Mandatory";
           		  }
           	  else
           		  {
           		    $("#"+ name).addClass("DataNormal");
           		    $("#"+ name).removeClass("DataInValid");
           		    var a;
           		  }

           		  }
               	  
                 }
               	  }
                        }
                        else
                        	{
                        	if($("#"+ name).is( "select" ))
                        		{
                        		//if($("#"+ name).prev('ul').length == 0)
            					//{
            				$("#"+ name).material_select();
            					//}
                        		}
                        	}
                    }


                    document.getElementById(FieldPrx + 'PRCSID').value = ProcessID;
					document.getElementById(FieldPrx + 'ACTIVITYID').value=activityId;
                    document.getElementById(FieldPrx + 'DTMODIFIED').value = get2dateTime();

                    if (document.getElementById(FieldPrx + 'DTCREATED').value == "" || document.getElementById(FieldPrx + 'DTCREATED').value == "null") {
                        document.getElementById(FieldPrx + 'DTCREATED').value = get2dateTime();
                    }

                    if (document.getElementById(FieldPrx + 'CREATEDBY').value == "" || document.getElementById(FieldPrx + 'CREATEDBY').value == "null") {
                        document.getElementById(FieldPrx + 'CREATEDBY').value = loggedinuser;
                    }
                    document.getElementById(FieldPrx + 'MODIFIEDBY').value = loggedinuser;

                    //Onloadgrid(GridFields, GridTableID);
		
                },

                error: OnError_ONLOAD

            });

				
			//SetGridViewmodeVal();
			
			//For Attached Photo identity Start
		/*		if($(document).find( "input[id*='PrcsID']" ).length!=0)
				{
		 var prodata= $(document).find( "input[id*='PrcsID']" ).attr('id').split("_")[0];

		PhotoIdnty(prodata+"_");
			}*/
			
			//For Attached Photo identity End
           
        }
		
        function get2date() {
            var today ="";
            $.ajax({
                url: "/TPLSW/UI_fetchformdata_get2date",
            data: {Prvnt:$(window.parent.parent.document).find("#Prvnt").val()   },
            async: false,
           // dataType: "json",
            type: 'POST',
            success: function (xml1) {
               
                today= xml1;

            },

            error: function (xml1) {

              

            }

            });
             
            return today;

          /*  var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            return today = dd + '-' + mm + '-' + yyyy;*/

        }


		
		function ChangePrcsActvXmlVal(GridXML,PRFX)
	{
	
	  var loggedinuser = GetCurrentUser();
            var ProcessID = getUrlParam("processId");
            var activityId = getUrlParam("activityId");
			var todydt = get2date();
			
	 doc = $.parseXML(GridXML);	
	
	
	for(i=0;i<=$(doc).find('row').length;i++)
	{
		
		$($(doc).find('row')[i]).find(PRFX+'PrcsID').text(ProcessID);
		$($(doc).find('row')[i]).find(PRFX+'ActivityID').text(activityId);
		$($(doc).find('row')[i]).find(PRFX+'ModifiedBy').text(loggedinuser);
		$($(doc).find('row')[i]).find(PRFX+'DtModified').text(todydt);
								
		
	}
	
	return (new XMLSerializer()).serializeToString(doc);;
	
}




        function ActivityForms() {
        	var ProcessID = getUrlParam("processId");
            var activityId = getUrlParam("activityId");
            $.ajax({
                // url: "Upto50L/UI_formdatains",
                url: "/TPLSW/UI_fetchActivityform",
                data: { ProcessDefID: ProcessID, ActivityDefID: activityId,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
                async: false,
              //  dataType: "json",
                type: 'POST',
                success: OnSuccess_submitActFrms,

                error: OnError_submitActFrms

            });

        }


        function OnSuccess_submitActFrms(data) {

            // alertify.alert(data);
            //var val = $(data).find('BTNData').text();  
            // alertify.alert(val);
            var Count = $(data).find('FormData').length;

            var Formnames = "";
            var FormID = "";
            var $input = "";

            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(data, "text/xml");
            var obj_elementcol = oXml.documentElement;

            //ResultBTNTable = "<table border=\"0\">";
            //ResultBTNTable += "<tr>";
            for (i = 0; i < Count; i++) {

                Formnames = obj_elementcol.getElementsByTagName('FormData')[i].textContent;
                FormID = Formnames.split('-')[1].replace(/ /g, '');
				
                document.getElementById(FormID).style.display = "";

				if(Formnames.split('-')[0].indexOf('IA') != -1)
				{
				//$("#"+$($("article")[i]).attr('id')).find('iframe').contents().find('body').append('<div id="over" style="position: absolute;top:0;left:0;width: 100%;height:100%;z-index:2;opacity:0.4;filter: alpha(opacity = 50)"></div>');
				$($(".wrapper ul").find('#'+Formnames.split('-')[1])).attr("name", Formnames.split('-')[0])
				}
            }
           // ResultBTNTable += "</tr>";
            //ResultBTNTable += "</table>";

           // $input = $(ResultBTNTable);

           // $input.appendTo($("#SubmitBTNs"));

            //alertify.alert(ResultBTNTable)

        }

        function OnError_submitActFrms(data) {

            alertify.alert(LoadFrmXML("V0071") + data);

        }


        function BranchApprovalLimitCheck() {


            var loggedinuser = GetCurrentUser();
            var Level = "";
            var PrID = "";
            var BrID = "";
            var LoanAmount = "";
            var activityid = getUrlParam("activityId");
            var activityname = GetActivityName();

            if (activityname == "BranchManager") {
                Level = "Branch";               
            }
            else {
                Level = "HO";
            }
            BrID = $('#iframe3').contents().find('#LPRN_BrID').val();
            PrID = $('#iframe3').contents().find('#LPRN_PrID').val();
            LoanAmount = $('#iframe3').contents().find('#iframe5').contents().find('#LPRN_Amt').val();
            
            //var securityname123 = "#currentUser.firstName#";
            //alertify.alert(securityname123);

            //var param1 = "ProcessID=" + ProcessID + "&TableName=" + TableName;

            $.ajax({
                //url: "Upto50L/UI_fetchformdata",
                url: "/TPLSW/UI_ApprovalLimitChk",
                data: { loggedinuser: loggedinuser, PrID: PrID, BrID: BrID, LoanAmount: LoanAmount, Level: Level,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
                async: false,
                //dataType: "json",
                type: 'POST',
                success: function (xml1) {

                    var val = $(xml1).find("LimitCheck").text();

                    document.getElementById("ApprovalLimitCheck").value = val;

                },

                error: OnError_ONApprovalCheck

            });


        }

        function OnError_ONApprovalCheck() {

            document.getElementById("ApprovalLimitCheck").value = "Fail";
            //alert("Approval Limit Check Failed");

        }

        function ChkMandatoryFields(FieldsClassName) {
            var x = document.getElementsByClassName(FieldsClassName);
            var y = document.getElementsByTagName("select");
            var name = "";
            var fieldid = "";
            var value = "";
            var type = "";
            var a = parseInt(x.length) + parseInt(y.length);

            //var formid = document.getElementsByTagName("form").item('0').name;
			var formid = document.getElementsByTagName("form")[0].name;

         //   var formxml = "<Form><Details>";
            for (i = 0; i < x.length; i++) {
                name = document.getElementsByClassName(FieldsClassName).item(i).name;
                fieldid = document.getElementsByClassName(FieldsClassName).item(i).id;
                value = document.getElementsByClassName(FieldsClassName).item(i).value;

                if (value == "" || value == "--Select--")
                {      

				var Textfld= $("#"+fieldid).closest('td').prev().find('font').justtext();
				
						if($(document).find("#SubmitSuccess").val()!=undefined)
					{
					//alertify.alert("Fill the mandatory field '"+Textfld+"'|"+fieldid);
					alertify.alert("Fill the mandatory field '"+Textfld+"'|"+fieldid);
					//window.alert("Fill the mandatory field");
                    document.getElementById('SubmitSuccess').value = "Mandatory";
					 return 'No';
					}
					else
					{
					//alertify.alert("Fill the mandatory field '"+Textfld+"'|"+fieldid);
					alertify.alert("Fill the mandatory field '"+Textfld+"'|"+fieldid);
					//window.alert("Fill the mandatory field");
                    document.getElementById(fieldid).focus();
                    return 'No';
					}
                    document.getElementById(fieldid).focus();
                    return ;

                }
                else if($('input[type="checkbox"]').hasClass(FieldClass))
              	{
              	var allChecked = true;
              	$("input[type=checkbox]."+FieldClass+"").each(function(index, element){
              	  if(!element.checked){
              	    allChecked = false;
              	   // return false;
              	  } 
              	});
              	if (allChecked == false)
                  {
                  Rtn = "Mandatory";
                  }
              	} 
                else
                {
				if($(document).find("#SubmitSuccess").val()!=undefined)
					{
                    document.getElementById('SubmitSuccess').value = "";
                }
				
				}

                             
            }
          
         if($(document).find("#SubmitSuccess").val()==undefined)
					{
					 return 'Yes';
				
					}
            //return formxml;

        }


        function ForAttachment(GetProcessID, FieldName)
        {

            var ProcessID = document.getElementById(GetProcessID).value;

            var URL = "";

            window.open(URL, "Lookup", "toolbar=0,location=0,menubar=0,scrollbars=no,resizable=no,titlebar=0,width=400,height=350",true);


        }

      /*  function submitdata() {
            var x = document.getElementsByTagName("input");
            var y = document.getElementsByTagName("select");
            var name = "";
            var fieldid = "";
            var value = "";
            var type = "";
            var a = parseInt(x.length) + parseInt(y.length);

            var formid = document.getElementsByTagName("form").item('0').name

            var formxml = "<Form><Details>";
            for (i = 0; i < x.length; i++) {
                name = document.getElementsByTagName("input").item(i).name;
                fieldid = document.getElementsByTagName("input").item(i).id;
                value = document.getElementsByTagName("input").item(i).value;

                type = document.getElementsByTagName("input").item(i).type;
                if (fieldid != "" && type != "submit") {
                    if (fieldid != "" && type != "radio") {

                        var formxml = formxml + "<" + name + ">" + value + "</" + name + ">";
                    }
                }
            }
            for (j = 0; j < y.length; j++) {
                name = document.getElementsByTagName("select").item(j).name;
                fieldid = document.getElementsByTagName("select").item(j).id;
                value = document.getElementsByTagName("select").item(j).value;
                type = document.getElementsByTagName("input").item(j).type;
                if (fieldid != "" && type != "submit") {
                    if (fieldid != "" && type != "radio") {

                        var formxml = formxml + "<" + name + ">" + value + "</" + name + ">";
                    }
                }
            }
            var formxml = formxml + "</Details></Form>";
            return formxml;

        }*/
        
        function GridMndtry(FieldsClassName) {
            var x = $(document).find('.modal-body').find("."+(FieldsClassName.split("_")[0]));
            var y = $(document).find('.modal-body').find('select');
			var divid=FieldsClassName.split("_")[1]+"GridPop";
            var name = "";
            var fieldid = "";
            var value = "";
            var type = "";
			var Textfld="";
            var a = parseInt(x.length) + parseInt(y.length);

           // var formid = document.getElementsByTagName("form").item('0').name;
		
         //   var formxml = "<Form><Details>";
            for (i = 0; i < x.length; i++) {
               // name = divid.getElementsByClassName(FieldsClassName.split("_")[0]).item(i).name;
               // fieldid = divid.getElementsByClassName(FieldsClassName.split("_")[0]).item(i).id;
				
              //  value = divid.getElementsByClassName(FieldsClassName.split("_")[0]).item(i).value;
			  
			name =   $($(document).find('.modal-body').find("."+(FieldsClassName.split("_")[0]))[i]).attr('name');
		    fieldid =  $($(document).find('.modal-body').find("."+(FieldsClassName.split("_")[0]))[i]).attr('id');
			value = $($(document).find('.modal-body').find("."+(FieldsClassName.split("_")[0]))[i]).val();
			
		if(name!="")	
			{
				if(name!=undefined)	
			{
 Textfld= $("#"+fieldid).closest('td').prev().find('font').justtext();
			
if(Textfld == "")
{
	
	Textfld = $("#"+fieldid).closest('td').find('font').justtext();
	
}	
			if (value == "" || value == "--Select--" || value == null)
                {
				 $("#"+fieldid).addClass('InValid')
                   //alertify.alert("Fill the mandatory fields")
				   		//alertify.alert(LoadFrmXML("V0150")+" '"+Textfld+"'|"+fieldid);
						//window.alert(LoadFrmXML("V0150")+" '"+Textfld+"'|"+fieldid);
						alert(LoadFrmXML("V0150"));
                  //  document.getElementById(fieldid).focus();
                    return 'No';

                }
                else if(value == 0 && $("#"+fieldid).hasClass('GridCurrMndtry'))
                {
				
					alert(LoadFrmXML("V0150"));
                  //  document.getElementById(fieldid).focus();
                    return 'No';
                    //document.getElementById('SubmitSuccess').value = "";
                    
                }
			else
			{
			$("#"+fieldid).addClass('Valid')
				}
               }              
            }
			}
            return 'Yes';
         
            //return formxml;

        } 
        


  function GridTblMndtry(TableID) {
	

var formname = "";
var gridname= $('#'+TableID+'_wrapper').prev().prev().find('span').justtext().replace(/[*]/g, "").trim();	
	
if(gridname=="")
{
gridname="Enter Single row in grid"
	
}
	
	  if($('#'+TableID).hasClass('gridtblmndtry')==true)
{	
if($("#"+TableID).find('tbody tr').length==0 || $("#"+TableID).find('tbody tr').find('.dataTables_empty').text()=="No data available in table")
{
	document.getElementById('SubmitSuccess').value = "GridMandatory";
	//var formname = $('#'+TableID).parents().find('form').attr('id');	
	//alertify.alert('Add a Single Row in the Grid "'+gridname+'" in "'+formname+'" Form');
	window.alert(LoadFrmXML("V0165"));
	return 'GridMandatory';
	
}
else
{	
	document.getElementById('SubmitSuccess').value ="";
	//return 'Yes';
}
 
}


/*
if($('#'+TableID+'_wrapper').siblings('.form-section-title').find('option:selected').val()=='')
{
	document.getElementById('SubmitSuccess').value = "GridMandatory";
	window.alert(LoadFrmXML("V0168")+' "'+gridname+'" in "'+formname+'" Tab');
	return 'GridMandatory';
	
}


if($('#'+TableID+'_wrapper').siblings('.form-section-title').find('option:selected').val()=='NO')
{
if($("#"+TableID).find('tbody tr').length!=0)
{
	if($("#"+TableID).find('tbody tr').find('.dataTables_empty').text()!="No data available in table")
	{
	document.getElementById('SubmitSuccess').value = "GridMandatory";
	//var formname = $('#'+TableID).parents().find('form').attr('id');	
	
	//alertify.alert('Add a Single Row in the Grid "'+gridname+'" in "'+formname+'" Form');
	window.alert(LoadFrmXML("V0166")+' "'+gridname+'" in "'+formname+'" Tab');
	return 'GridMandatory';
	}
}

else
{	
	document.getElementById('SubmitSuccess').value ="";
	//return 'Yes';
}

}*/


}    


  function EditorMandatory(ClsName) {
	

var formname = window.frameElement.getAttribute("Name");
var Len=document.getElementsByClassName(ClsName).length;
var Result="";
for(i=0;i<Len;i++)
{

if($($(document).find('.'+ClsName)[i]).val()!="")
{

var id =$($(document).find('.'+ClsName)[i]).attr('id')

if($("#cke_"+id).find('.cke_button__save').hasClass('cke_button_disabled')==false)
{
	document.getElementById('SubmitSuccess').value = "EditorMandatory";
	Result +=$($(document).find('.'+ClsName)[i]).attr('name')+',';
	//var formname = $('#'+TableID).parents().find('form').attr('id');	
	//alertify.alert('Add a Single Row in the Grid "'+gridname+'" in "'+formname+'" Form');
	//window.alert(LoadFrmXML("V0165")+' "'+$($(document).find('.'+ClsName)[i]).attr('name')+'');
}


}


}

return Result.slice(0,-1);


} 





function GridRowChkval(tableid)
{
	
	if($($('#'+tableid+'_wrapper').parent('div').find('.form-section-title')[0]).find('select').val()!="" || $($('#'+tableid+'_wrapper').parent('div').find('.form-section-title')[0]).find('select').val()!=undefined)
	{
		if($("#"+tableid).find('tbody tr').length!=0)
{
	if($("#"+tableid).find('tbody tr').find('.dataTables_empty').text()!="No data available in table")
	{
		$($('#'+tableid+'_wrapper').parent('div').find('.form-section-title')[0]).find('select').val('Yes');
	}
}
else
{
	$($('#'+tableid+'_wrapper').parent('div').find('.form-section-title')[0]).find('select').val('');
	
}
		
	}
}







   /*function ChkMandatory(FieldsClassName) {
            var x = document.getElementsByClassName(FieldsClassName);
            var y = document.getElementsByTagName("select");
            var name = "";
            var fieldid = "";
            var value = "";
            var type = "";
            var a = parseInt(x.length) + parseInt(y.length);

           // var formid = document.getElementsByTagName("form").item('0').name;

         //   var formxml = "<Form><Details>";
            for (i = 0; i < x.length; i++) {
                name = document.getElementsByClassName(FieldsClassName).item(i).name;
                fieldid = document.getElementsByClassName(FieldsClassName).item(i).id;
                value = document.getElementsByClassName(FieldsClassName).item(i).value;

                if (value == "" || value == "--Select--")
                {
                    alert("Fill the mandatory fields")
                    document.getElementById(fieldid).focus();
                    return 'No';

                }
                else
                {
                    //document.getElementById('SubmitSuccess').value = "";
                    
                }

                             
            }
            return 'Yes';
         
            //return formxml;

        } */
        
		function loadScript(src)
    	{
    	  var s,
    	      r,
    	      t;
    	  r = false;
    	  s = document.createElement('script');
    	  s.type = 'text/javascript';
    	  s.src = src;
    	  s.onload = s.onreadystatechange = function() {
    	    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
    	    if ( !r && (!this.readyState || this.readyState == 'complete') )
    	    {
    	      r = true;
    	      callback();
    	    }
    	  };
    	  t = document.getElementsByTagName('script')[24];
    	  t.parentNode.insertBefore(s, t);
    	}
        
		


function attch_Rdt(prfx)
{

		
			var IOP=window.location.origin;
			/**
			var Prfx = prfx;
			var processId = getUrlParam("processId");			

			 var formname = $(document).find('form').attr('name');
			**/
	
	var Prfx = prfx;
	var processId = getUrlParam("processId");
	var ActivityId = getUrlParam("activityId");
	var username=getUrlParam("username");
	var tabid=$(window.top.jQuery("#assignmentExternalForm").context).find('.active').attr('id')
	 var formid = $(document.body).find('form').attr('id');
			 /***
			  * For Modification Start
			  */

			//for tab start
			 var View="";
			 
			 if($(window.parent.document).find("form").find("#SubmitSuccess").val()=="")
			 {
			 View=$(document).find("form").find("#SubmitSuccess").val()
			 }
			 else
			 {
			 View=$(window.parent.document).find("form").find("#SubmitSuccess").val()
			 }
			
			//for tab end
			 alertify.confirm("Choose Anyone following option?|attachview|Modify|View", function (e) {
				if (e) 
				{ 	 RedirectURL = IOP+"/TPLSW/ViewAttach?Prfx="+Prfx+ "&processId=" + processId+ "&username=" + username+ "&ActivityId=" + ActivityId+ "&formid=" + formid+ "&tabid=" + tabid+ "&View=" + View;
				var type="";
					WintabsCtrl(RedirectURL,'View Attachment','','yes');
					
			     }
			  
				else
				{
					RedirectURL = IOP+"/TPLSW/Attachment?Prfx="+Prfx+ "&processId=" + processId;

					//WintabsCtrl(RedirectURL,'Attachment('+formname+')','','no');
					//window.open(RedirectURL, '_blank','toolbar=no,resizable=yes,location=0');
			JPopup.create("GridPopupShow", "","","");
			//JPopup.show("GridPopupShow",RedirectURL,"","","683","544","Post");
			JPopup.show("GridPopupShow",RedirectURL,"","","","390","Post");
				
					 
				}
			    });
				
			 /***
			  * For Modification end
			  */
		/***	RedirectURL = IOP+"/TPLSW/Common/Pages/Attachment/Attachment.jsp?Prfx="+Prfx+ "&processId=" + processId;

			//WintabsCtrl(RedirectURL,'Attachment('+formname+')','','no');
			//window.open(RedirectURL, '_blank','toolbar=no,resizable=yes,location=0');
	JPopup.create("GridPopupShow", "","","");
	//JPopup.show("GridPopupShow",RedirectURL,"","","683","544","Post");
	JPopup.show("GridPopupShow",RedirectURL,"","","","390","Post");
			
		**/	
		}




function UsrAcceptPrcs(activityID)
{
	
	var IOP=window.location.origin+"/jw"
	
	var AccptURL = IOP+"/web/json/workflow/assignment/accept/"+activityID;
	
	var OP="";
	
	OP=UI_getdata(activityID,"","","","","SAM_sChkActvAcct");
	if(OP != 'Accepted')
	{
	ajaxindicatorstart("Loading.. Please Wait")
	
	$.ajax({
                 type: 'POST',
                 url: AccptURL,
                // data: params,
                 dataType : "text",
				 async:false,
                 xhrFields: {
                     withCredentials: true
                 },
                 success: function(data) {
                     OP="Accepted";
                 },
                 error: function(data) {
                     try {
                         // do nothing for now
                        // if (callback.error) {
                          //   callback.error.call(thisWindow, data);
						  	//alertify.alert(LoadFrmXML("V0127"));
								window.alert(LoadFrmXML("V0127"));
						  //alertify.alert('Error: File not Accepted');
                        // }
                     }
                     catch (e) {}
                 }
               });
	ajaxindicatorstop();
	}
	return OP;
	
}

function WintabsCtrl(RedirectURL,Text,Wchk,ScrollYN)
{
	
	
if(Wchk != '')
{
	Wchk = ' ('+ Wchk +')'
	
}
var win = window.top.jQuery("#assignmentExternalForm").context
	
	var LiCount = $(win).find('section.wrapper').find('ul.tabs li').length;
	
	LiCount = parseInt(LiCount)-1;
	
 LiCount = parseInt($($(win).find('section.wrapper').find('ul.tabs li')[LiCount]).attr('id').split('b')[1]) + 1;
		
$(win).find('section.wrapper').find('ul.tabs').append('<li name="'+RedirectURL.split('=')[1]+'~'+$('ul.sidebar-menu').find('li.header').text()+'" class="'+RedirectURL.split('=')[1]+'" id="Tab'+LiCount+'"><a href="#tab'+LiCount+'">'+Text+Wchk+'<span class="closetab" onclick="wintabclose(this)">X</span></a></li>')

$(win).find('section.block').append('<article name="Tab'+LiCount+'" id="tab'+LiCount+'"><p><iframe id="PageIframe'+LiCount+'" width="100%" style="overflow-x: hidden;overflow-y: hidden" src="" frameborder="0"></iframe> </p></article>');
 
 
 $(win).find('section.wrapper').find('article').find('#PageIframe'+LiCount).attr('src',RedirectURL);
  $(win).find('section.wrapper').find('article').find('#PageIframe'+LiCount).attr('scrolling',ScrollYN);
 
 
var defaultfrmheight = $(win).find('section.wrapper').find('article').find('#PageIframe').height();

$(win).find('section.wrapper').find('article').find('#PageIframe'+LiCount).height(defaultfrmheight+'px');

			//$(window.parent.document).find('#Tab'+LiCount).find('a').text('Review');

  $(win).find('ul.tabs li').removeClass('active');
        $(win).find('#Tab'+LiCount).addClass('active')
        $(win).find('.block article').hide();
        var activeTab = $(win).find('#Tab'+LiCount).find('a').attr('href');
            //  $(activeTab).show();
  $(win).find('#Tab'+LiCount).trigger('click');
	
	
}	

function wintabclose(Evnt)
{
		
	//var trgID = $(Evnt).closest('li').siblings().attr('id');
	var trgID =  $(Evnt).closest('li').prev().attr('id');
		var Liid = $(Evnt).closest('li').attr('id');//$(Evnt).closest('li');
	var artid = $('section').find('#tab'+$(Evnt).closest('li').attr('id').split('b')[1]).attr('id');
	
	$('#'+Liid).remove();
	$('#'+artid).remove();
	
	if($(Evnt).closest('li').attr('class').split(' ')[1]== "active")
		//if($(Evnt).closest('li').attr('class')== "active")
	{
	$('#'+trgID).trigger('click');
	}
	

	//$('section').find('#tab'+$(Evnt).closest('li').attr('id').split('b')[1]);
	
}          


function GetActivityName()
{
 var processId = $("#PrcsID").val();
 var activityid = $("#ActvID").val();
 var spname ='SAM_sGetActivityName';
 var op = UI_getdata(processId,activityid,"","","",spname);
 var actvityname = $(op).find("ActivityName").text();
 return actvityname;
}

function GetPackageID()
{
var processId = getUrlParam("processId");
var spname ='SAM_sGetPackageid';
var op = UI_getdata(processId,"","","","",spname);
var packageid = $(op).find("PackageId").text();
return packageid;
}


function ChkAttchMndtry(Prfx)
{
var formname= $(document.body).find('form').attr('id');
	var prcsid="";
if($('#'+Prfx+'_OldPrcsID').length!=0)
{
			var op= UI_getdata($('#'+Prfx+'_PrcsID').val(),$('#'+Prfx+'_OldPrcsID').val(),"","","","LSW_sChkCusDetlsAttchMod");

	if($(op).find('Result').text() == "OLD-YES")
	{
	prcsid = $('#'+Prfx+'_OldPrcsID').val();
	
	}
	else
	{
		prcsid = $('#'+Prfx+'_PrcsID').val();		
	}
}
else{
prcsid = $('#'+Prfx+'_PrcsID').val();	
}


//var prcsid= document.getElementById(Prfx+'_PrcsID').value
//var formname=formname;
var formprfx= Prfx;

var spname ='SAM_sGetChkAttchMndtry'

var AttchMndtry= UI_getdata(formname,prcsid,"","","",spname);

var AttchMndtryVal = $(AttchMndtry).find("Result").text();


if(AttchMndtryVal=='AttchY')
{
return AttchMndtryVal;
}
else
{
document.getElementById('SubmitSuccess').value="AttchMandatory";
return AttchMndtryVal;

}
}


function PhotoIdnty(prodata)
{

var a='';
var ImgClsCnt='';

if(parent.document != null)
{
a= prodata;
ImgClsCnt=$(parent.document).find(".ImgIdnt").length;
$(parent.document).find(".ImgIdnt").attr('src', '');
$(parent.document).find(".TxtIdnt").val('');
//var b= $("#mainurldata").val();
}
else{

a= prodata;
ImgClsCnt=$(document).find(".ImgIdnt").length;
$(document).find(".ImgIdnt").attr('src', '');
$(document).find(".TxtIdnt").val('');

}

if(a != undefined && ImgClsCnt !=0)
{

var spldata= a.split('|');
var len=spldata.length;


var ArryCnt=[];

//var mainhidn = $("#mainurldata").val();

//	var spldata2="";

for(var i=0; i<=len; i++)
{
	if($(spldata)[i]==""||$(spldata)[i]==undefined)
	{
		var b;
	}
	else
	{	
		var data1= $(spldata)[i].split('~')[0];
		
		if(data1.indexOf("Photo-Identity")==0)
		{
		
		
		ArryCnt += [i]+",";
		
		
		}

		
}
}

if(ArryCnt.length != 0)
{

for(var j=0;j<ArryCnt.split(",").length;j++)
		{
		
		if(ArryCnt.split(",")[j]=="")
		{
			var b;
		
		}
		else{
		var ArryVarVal=ArryCnt.split(",")[j]
		
		var ArrayVal= a.split('|')[ArryVarVal];
		
			var data2=  ArrayVal.split('~')[1];
		var data3=  ArrayVal.split('~')[2];
			var IOP=window.location.origin+LoadFrmXML("RS006");
		
		if(parent.document != null)
		{
			if(j+1 <=ImgClsCnt)
			{
		$(parent.document).find(".ImgIdnt")[j].src=IOP+data3.replace(/ /g, '%20');
		$(parent.document).find(".ImgIdnt")[j].val=data3
		$($(parent.document).find(".TxtIdnt")[j]).val(data2);
			}
		}
		else
		{
			if(j+1 <=ImgClsCnt)
			{
			
		$(document).find(".ImgIdnt")[j].src=IOP+data3.replace(/ /g, '%20');
			$(document).find(".ImgIdnt")[j].val=data3
		$($(document).find(".TxtIdnt")[j]).val(data2);
			}
		
		}
		}
		
		}
}

}
}

function GridMandtryAstrk(tbl)
	{
		
		var tableid = $(tbl).parents('div').find('table').attr('id');
		
		if(tbl.value=='YES')
		{
			
			 $("#"+tableid).addClass('gridtblmndtry');
			 
			$(tbl).closest('span').append('<font class="asterik" color="red">*</font>')

			 
			 
		}
		else{
			 $("#"+tableid).removeClass('gridtblmndtry');
			  $(tbl).closest('span').find('font').remove();

		}
	}

function PageIdval()
{
var hdnAppId ='';
var AppId = $(window.parent.document).find('#BCDT_CusID').val();
var CoAppId='';
var GurAppId = '';



if($(window.parent.document).find("#iframe2").contents().find('#Table2 tbody tr').find('.dataTables_empty').text()!="No data available in table")
{
var CoApplen = $(window.parent.document).find("#iframe2").contents().find('#Table2 tbody tr').length;


for(i=0;i<CoApplen;i++)
{

CoAppId +=  $($(window.parent.document).find("#iframe2").contents().find('#Table2 tbody tr')[i]).find('td')[1].innerHTML;

CoAppId +=',';

}
}

if($(window.parent.document).find("#iframe3").contents().find('#Table2 tbody tr').find('.dataTables_empty').text()!="No data available in table")
{
var GurApplen = $(window.parent.document).find("#iframe3").contents().find('#Table2 tbody tr').length;


for(i=0;i<GurApplen;i++)
{

GurAppId +=  $($(window.parent.document).find("#iframe3").contents().find('#Table2 tbody tr')[i]).find('td')[1].innerHTML;

GurAppId +=',';

}
}
hdnAppId +=AppId+ ',' + CoAppId+ GurAppId;

return hdnAppId;
}





function integer_to_roman(num) {
if (typeof num !== 'number') 
return false; 

var digits = String(+num).split(""),
key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
"","I","II","III","IV","V","VI","VII","VIII","IX"],
roman_num = "",
i = 3;
while (i--)
roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
return Array(+digits.join("") + 1).join("M") + roman_num;
}


function romantointeger( num ) {
	var vals = { 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 };
	 num = num.toUpperCase().replace( /[^IVXLCDM]/g, '' ).replace( /VV/g, 'X' ).replace( /LL/g, 'C' ).replace( /DD/g, 'M' );
	 var bits = [], i = 0, j = 0, k, l, n = num.length, last = 9999, rep = 0, sum = 0, valid = 1;
	 for( ; i < n; i++ ) {
	  if( !( bits[j] = vals[ num.charAt(i) ] ) ) {
	   valid = 0; break;
	  }
	  if(j > 0) {
	   k = bits[j]; l = bits[j - 1];
	   if( k===l * 5 || k===l * 10 ) {
	    bits[--j] = k - l;
	   }
	  }
	  j++;
	 }
	 if( valid ) {
	  for( i = 0; i < j; i++ ) {
	   k = bits[i];
	   sum += k;
	   if( (last < k) ||
	    (rep > 1 && last == k) ||
	    (last == k && k != 1 && k != 10 && k != 100 && k != 1000) ||
	    last == k * 4 || last == k * 9 || last * 4 == k * 9 || last * 5 == k * 9 ) {
	    valid = 0; break;
	   }
	   rep = (last == k) ? rep + 1 : 0;
	   last = k;
	  }
	 }
	 return valid ? sum : 'Enter a proper Roman number please.';
}


function FetchROIFrmMas(PrcsIDF,LonAmtF,TermF,SchmF,IncmsrcF)
{
	
		var PrcsID=$("#"+PrcsIDF).val();
	var LonAmt=$("#"+LonAmtF).val().replace(/,/g, "");
	var Term=$("#"+TermF).val();
	var Schm="";
	var Incmsrc="";
	if(SchmF!="")
	{
	Schm=$("#"+SchmF).val();
	}
	if(IncmsrcF!="")
	{
	Incmsrc=$("#"+IncmsrcF).val();
	}
	
	var xml = UI_getdata(PrcsID,LonAmt,Term,Schm,Incmsrc,"LSW_sGetROI");
	
	return $(xml).find("ROI").text();
	
}

function emi(param1,param2,param3,paramout)
{
	
	var TotLon =$("#"+param1).val().replace(/,/g, "");
	var ROI=$("#"+param2).val();
	var Terms=$("#"+param3).val();
	var monthlyInterestRatio = (ROI/100)/12;
	
	var top = Math.pow((1+monthlyInterestRatio),Terms);
	var bottom = top -1;
	var sp = top / bottom;
	var emival = ((TotLon * monthlyInterestRatio) * sp);

if (isNaN(emival)||(emival==Infinity)) {
	emival = '0';
	}

var fnlemi = parseFloat(emival).toFixed(0);


$("#"+paramout).val(CURCommaSep(fnlemi));

}

function GridValChk(tableid,gridclmns)
{
	
	
	var trcount= $("#"+tableid).find('tbody tr').length;
	var chkval="";
	var Gridname=$($('#'+tableid+'_wrapper').parent('div').find('.form-section-title')[0]).text();
	
	
if($('#'+tableid).find('tbody tr').find('.dataTables_empty').text()!="No data available in table")
{	
	for(i=0;i<gridclmns.split("|").length;i++)
	{
		
	if(gridclmns.split("|")[i]!="")
	{
	var columnindex = $("#"+tableid).find('thead').find('tr:nth-child(2)').find('th:contains("'+gridclmns.split("|")[i]+'")').index();

	for(j=0;j<trcount;j++)
	{	
	chkval= $($("#"+tableid).find('tbody').find('tr').find("td:eq("+columnindex+")")[j]).text();
	if(chkval=="")
	{
		$("#SubmitSuccess").val("CV");
		//alertify.alert('Enter/Review the "'+Gridname+'" Grid before Submission');
		window.alert('Enter/Review the "'+Gridname+'" Grid before Submission');
		return "No";
	}
	 	 
	}

	}
	}
}
}

/*
document.onmousedown=disableclick;
status="Right Click Disabled";
function disableclick(event)
{
  if(event.button==2)
   {
	   
     alertify.error(status);
      return false;
   }
}*/
 /*
*/

/*function attch_cmnts(prfx)
{

	var IOP=window.location.origin;
	
	var Prfx = prfx;
	var processId = getUrlParam("processId");
	var ActivityId = getUrlParam("activityId");
	var username=getUrlParam("username");
	var tabid=$(window.top.jQuery("#assignmentExternalForm").context).find('.active').attr('id')
	 var formid = $(document.body).find('form').attr('id');
		  
		  
 alertify.confirm("Choose Anyone following option?|comments|New Tab|PopUp", function (e) {
	if (e) 
	{ 	
            	 RedirectURL = IOP+"/TPLSW/Common/Pages/Comments/Comments.jsp?Prfx="+Prfx+ "&processId=" + processId+ "&username=" + username+ "&ActivityId=" + ActivityId+ "&formid=" + formid;
				JPopup.create("GridPopupShow", "","","");
			  JPopup.show("GridPopupShow",RedirectURL,"","","","390","Post");
     }
  
	else
	{
	
	
		  RedirectURL = IOP+"/TPLSW/Common/Pages/Comments/Comments.jsp?Prfx="+Prfx+ "&processId=" + processId+ "&username=" + username+ "&ActivityId=" + ActivityId+ "&formid=" + formid+ "&tabid=" + tabid;
			var type="TimeLine"
	WintabsCtrl(RedirectURL,'Comments View('+type+')','','yes');
	}
    });
		  
	 
//$.alert('Hi');
	//window.open(RedirectURL, '_blank','toolbar=no,resizable=yes,location=0');
	
 
}
*/


	
function attch_cmnts(prfx)
{

	var IOP=window.location.origin;
	
	var Prfx = prfx;
	var processId = getUrlParam("processId");
	var ActivityId = getUrlParam("activityId");
	var username=getUrlParam("username");
	var tabid=$(window.top.jQuery("#assignmentExternalForm").context).find('.active').attr('id')
	 var formid = $(document.body).find('form').attr('id');
	 
	 
	//for tab start
	 var View="";
	 
	 if($(window.parent.document).find("form").find("#SubmitSuccess").val()=="")
	 {
	 View=$(document).find("form").find("#SubmitSuccess").val()
	 }
	 else
	 {
	 View=$(window.parent.document).find("form").find("#SubmitSuccess").val()
	 }
	
	//for tab end
	
		  
 alertify.confirm("Choose Anyone following option?|comments|New Tab|PopUp", function (e) {
	if (e) 
	{ 	
            	 RedirectURL = IOP+"/TPLSW/Comments?Prfx="+Prfx+ "&processId=" + processId+ "&username=" + username+ "&ActivityId=" + ActivityId+ "&formid=" + formid;
				JPopup.create("GridPopupShow", "","","");
			  JPopup.show("GridPopupShow",RedirectURL,"","","","500","Get");
     }
  
	else
	{
	
	
		  RedirectURL = IOP+"/TPLSW/Comments?Prfx="+Prfx+ "&processId=" + processId+ "&username=" + username+ "&ActivityId=" + ActivityId+ "&formid=" + formid+ "&tabid=" + tabid+ "&View=" + View;
			var type="TimeLine"
	WintabsCtrl(RedirectURL,'Comments View('+type+')','','yes');
	}
    });
		  
	 
//$.alert('Hi');
	//window.open(RedirectURL, '_blank','toolbar=no,resizable=yes,location=0');
	
 
}

function emptygridchk(tableid)
{
if($('#'+tableid+' tbody tr').length==0)
{
var emptyrow='<tr align="center" class="odd"><td class="dataTables_empty">No data available</td></tr>'
$('#'+tableid+' tbody').append(emptyrow)
}
}

function emptyrwdelte(tableid)
{
 var x = $('#'+tableid+' tbody tr').hasClass('odd');
if(x==true)
{
$('#'+tableid+' tbody').find('.odd').closest('tr').remove();
}

}




function DeleteAttchDirData(Prfx)
{
	
	// var delattchdata=$("#"+Prfx+"delAttch").val();
	 var username=GetCurrentUserFName();
	 var formid=$(document.body).find('form').attr('id');	
	var PrcsId = getUrlParam("processId");
	var activityid = getUrlParam("activityId");
	
	
	var spname='Sam_sDCCMFnlMnpl';
	
	var op= UI_getdata(PrcsId,formid,"","","",spname);
	
var domain1= LoadFrmXML("RS001");
var usrpwd1= LoadFrmXML("RS002");

var domain2= LoadFrmXML("RS004");
var usrpwd2= LoadFrmXML("RS005");
	
	var delattchdata=$(op).find("Result").text();
	var Insattchdata=$("#"+Prfx+"delAttch").val();
		if(delattchdata != '')
		{
		
	 $.ajax({
	        url:"/TPLSW/deletefile?Insattchdata="+Insattchdata+"&delattchdata="+delattchdata+"&domain1="+domain1+"&usrpwd1="+usrpwd1+"&domain2="+domain2+"&usrpwd2="+usrpwd2+"&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val() ,
	        //data: fd,
	        contentType: false,
	        processData: false,
			async:false,
	        type: 'POST',
	        success: function(data){
				
	         // alert(data);
	        
			},
	        failure:function(data)
	        {
					//alertify.alert(LoadFrmXML("V0115"));
						window.alert(LoadFrmXML("V0115"));
	        	
	        	
	        }
	    });
		}


		
}



function DCCMInstnc(flgval)
{
var formid=$(document.body).find('form').attr('id');	
var PrcsId = getUrlParam("processId");
var activityid = getUrlParam("activityId");

var xml = UI_getdata(PrcsId,activityid,formid,flgval,"","Sam_sDCCMInstnc");

}




function AttchDmsIns(Data,FlagVal,prodata){

if (prodata!=''){
var formid=$(window.parent.document).find('form').attr('id');
var PrcsId = $(window.parent.document).find('form').find("#"+prodata+"PrcsID").val();
var activityid = $(window.parent.document).find('form').find("#"+prodata+"ActivityID").val();
var CreatedBy=$(window.parent.document).find('form').find("#"+prodata+"CreatedBy").val();
var ModifiedBy=$(window.parent.document).find('form').find("#"+prodata+"ModifiedBy").val()
//alert(Data+','+FlagVal+','+formid+','+PrcsId+','+activityid+','+CreatedBy+','+ModifiedBy)
var xml = UI_getdata(Data,FlagVal,formid+','+PrcsId+','+activityid,CreatedBy,"","sam_sAttchDms");

}
else if (prodata==''){

var formid=$(window.document).find('form').attr('id')
var prodata =$(window.document).find('form').find("[id*='PrcsID']").attr('id').split('_')[0]
var PrcsId = $(window.document).find('form').find("#"+prodata+"_PrcsID").val();
var activityid = $(window.document).find('form').find("#"+prodata+"_ActivityID").val();
var CreatedBy=$(window.document).find('form').find("#"+prodata+"_CreatedBy").val();
var ModifiedBy=$(window.document).find('form').find("#"+prodata+"_ModifiedBy").val()
//alert(Data+','+FlagVal+','+formid+','+PrcsId+','+activityid+','+CreatedBy+','+ModifiedBy)
var xml = UI_getdata(Data,FlagVal,formid+','+PrcsId+','+activityid,CreatedBy,"","sam_sAttchDms");

}

}

function AttachDMSFetch(prodata){
var formid=$(window.parent.document).find('form').attr('id');
var PrcsId = getUrlParam("processId");
var OldPrcsID = getUrlParam("OLDprocessId");
var activityid = $(window.parent.document).find('form').find("#"+prodata+"ActivityID").val();
var xml = UI_getdata(formid,PrcsId,activityid,OldPrcsID,"","Sam_sOnloadDms");
//alert($(xml).text());
BindAttchViewTable($(xml).text());
}



function Ratio(param1,param2,paramout)
{
var value1=parseFloat(document.getElementById(param1).value.replace(/,/g, ""));
var value2=parseFloat(document.getElementById(param2).value.replace(/,/g, ""));
 

    
 var result =(parseFloat(value1) / parseFloat(value2))*100;




 if (isNaN(result)||(result==Infinity)) {
 result = '0';
    }
 
 var outval = parseFloat(result).toFixed(2);
 //$('#'+param3).val(CURCommaSep(value3));
 $('#'+paramout).val(outval);
   


}

function ChkBlankFrames()
{
	
	 var IframeCount = $('article').find('iframe').length;
		
var BlankFrames = "";
		
	 if (IframeCount > 0) {
            for (i = 0; i < IframeCount; i++) {
				
				var $input = $('article').find('iframe')[i];
				var IFrameName = $($('article').find('iframe')[i]).attr('name');
                var IFrameID = $input.id;
				var ArticleName = $($('article')[i]).attr('name');
				
					if(IFrameID !=""){
				
				if($('form').attr('id')=="AllForms")
{
	if($('#'+ArticleName).attr('name')!="IA")
	{
			if($('#'+ArticleName).attr('style')=="display:none"|| $('#'+ArticleName).attr('style')=="display: none;")
	{
		var blk='';
	}
	else{
	
		if($('#' + IFrameID).contents().find('body').text() == "")
				{
    
	BlankFrames = BlankFrames + IFrameName + ', ';
	
				}
	
	}
	
	
	}
}
else{
	
	if($('#'+ArticleName).attr('name')!="IA")
	{
	
		if($('#' + IFrameID).contents().find('body').text() == "")
				{
				
				if(IFrameID!="iframe0")
				{
				
				
    
	BlankFrames = BlankFrames + IFrameName + ', ';
	}
				}
	
	
	
	}
}		
}
			}
}


if(BlankFrames!="")
{
swal({
                        title: LoadFrmXML("V0154"),
                        text: BlankFrames,
                        type: "warning",
                        showCancelButton: true,
                        showConfirmButton: false,
                        cancelButtonColor: "#1569C7",
                        cancelButtonText: "OK",
                        closeOnConfirm: false
                    });
}
return BlankFrames;
}

function GetCustomPageHdrStrip(Content1,Content2,ID)
{
	
	var op= UI_getdata(Content1,Content2,ID,'','','SAM_sGETCstmPgHdrStrip');
		
	op= op.replace(/<Resultset><a><HTML>/g, "");	
	op= op.replace('</HTML></a></Resultset>',''); 
	$('#PoplCustomHdrStrip').append(op);
	
}

function GetFormURL(FormId)
{
	var PrcsID=getUrlParam("processId");
	
	var op= UI_getdata(PrcsID,FormId,'','','','SAM_sGETFormURL');
	
	//op= op.replace(/<Resultset><a>/g, "");	
	//op= op.replace('</a></Resultset>',''); 
	
	var Formurl = $(op).find("FormURL").text();
	
	var Formname = $(op).find("FormName").text();
	
	var outputresult = Formurl+','+ Formname;
	//op= op.find('Result').text();
	
	return outputresult;
	
}

function SPLGridPopup()
{
	document.getElementById("popupSPL").style.display="";
  $("#popupSPL").dialog();
  $("#popupSPL").dialog("option", "width", 805);
  $("#popupSPL").dialog("option", "closeOnEscape", true);
  $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(this) });
	document.getElementById("SPLFetchGridBtn").style.display="";
	   $("#popupSPL").attr("tabindex",0).focus();
	    $("#popupSPL").attr("tabindex","");
	
}


function popupcnfrmalertfyclose(id)
{
	// $(this).closest('section').remove();
var idval=$(id).attr('id')
jQuery("#alertify-cover").remove();
jQuery("#alertify").before("<div id=\"alertify-cover\" class=\"alertify-cover\"></div>");
$('.'+idval).closest('section').remove();
}
	
function HelpOptn()
{
	var URLHELP=LoadFrmXML("PG012");
	
	
	WintabsCtrl(URLHELP,'Help','','yes');
	
}	


function GetPin(idval)
{
if(idval!="")
{

	var PinDetls= UI_getdata(idval,'','','','','SAM_sGETPinDetl');
		
if($(PinDetls).find("statename").text()=="")
{
	alert("Enter Valid Pin Code")
}

	
	return PinDetls;
}
}
function GetIfsc(idval)
{
	
	if(idval!="")
	{
	 if(idval.length <11 || idval.length >11 )
	 {
						
  	 window.alert(LoadFrmXML("V0157"));
     return false;
	 }
	 else
	 {
	var IfscDetls= UI_getdata(idval,'','','','','SAM_sGETIfscDetl');

if($(IfscDetls).find("BANK").text()=="")
{
	alert("Please contact IT team. This Ifsc code is not present in database")
}	

	return IfscDetls;
	 }
	}
}

function MobileChk(idval)
{
	var formid= $(document).find('form').attr('id')
	if(formid=='CustomerCreation')
	{
	if($(idval).val()!=''||$($(idval).val()).length!=10)
	{
	var MblDtls=UI_getdata($(idval).val(),$("#CUCR_CusID").val(),'','','','LSW_sKYCMblChk');
	if($(MblDtls).find("Result").text()!='No')
	{	
	alert("Mobile Number Already Exists for the Customer  "+$(MblDtls).find("Result").text())
	}
	}
	}
	else
	{
		
	if($(idval).val()!=''||$($(idval).val()).length!=10)
	{
	var MblDtls=UI_getdata($(idval).val(),'','','','','LSW_sKYCMblChk');
	if($(MblDtls).find("Result").text()!='No')
	{	
	alert("Mobile Number Already Exists for the Customer  "+$(MblDtls).find("Result").text())
	}
	}	
	}
}

function SndEmailConfig(PrcsID)
{


 var OPXML = UI_getdata(PrcsID,"","Vendor","Group","","SAM_sGetVendorMailDetl");
				
		var To=$(OPXML).find("Email").text().slice(0,-1);
		var Title=$(OPXML).find("Subject").text()
		var MsgContent=$(OPXML).find("Content").text()
	
		var fromMail = $(OPXML).find("SendMail").text()
		var fromPwd =$(OPXML).find("Password").text()
		var Prophost =  $(OPXML).find("HostName").text()+'|'+$(OPXML).find("PortNo").text()
		 var rt='Proceed';

		 
	if(To!='')
		{	 
		 
		$.ajax({
	        url:"/TPLSW/SendMail",
	        type: 'POST',
	        async:false,
	        data: {To:To,Title:Title,MsgContent:MsgContent,fromMail:fromMail,fromPwd:fromPwd,Prophost:Prophost,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	        success: function(stm){	
			
			if(stm=='Success')
			{
	        	//alert(stm);
				rt=stm;
				
			}
			else
			{
			alert(stm);
			return;
			}
	        	
	        },
	        });
}
return rt

}

//Added for Text Editor Disabled

function DSVLBLEXTEDITER()
{
	var textareas=document.getElementsByClassName('TEXTEDITDSBL');
	
	for(var i=0;i<textareas.length;i++)
	{
		textareas[i].disabled=true;
	}
}

function CibilRpt(id,prfx,Screid,ApplNo,Prdcde,PrdctNme,SbPrdctNme,LnAmt)
{



ChkMandatoryFields("Mndtry");
 if (document.getElementById('SubmitSuccess').value == "Mandatory")
 {
	 
	// alert("Fill the Mandatory Fields")
	 return
 }

if(id!="")
{
if(Screid!="")	
{

	
	
	swal({
                title: "", 
                text: "Click on 'OK' to generate cibil else Click on 'Cancel'" ,
                type: "warning", 
                showCancelButton: true, 
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok!",
                animation: "slide-from-top", 
                closeOnConfirm: false
            },
			
			
	
	function () {
			
var op= UI_getdata(id,ApplNo,$(document).find('form').find("#"+prfx+"_PrcsID").val(),Prdcde,"Chk","Sam_sCibilDataIns")

if($(op).find("Result").text()=='Yes')	
{		
			

   var root= LoadFrmXML("RS001");
   var Usrpwd= LoadFrmXML("RS002");
   var PrcsID=getUrlParam("processId");
   var FormName="LoanApplication";
   var AttchName="CIBIL REPORT";
   var AttchDescrptn="CIBILRPT_"+id;
   var CntntURL="";
   var op= UI_getdata("CBLVRNO","","","","","Sam_sGetCOMSeqID")

   var Version=$(op).find("VR").text()
   var spname="LSW_SGetCibilData";
	var prodata = prfx+"_";
	var param1=id;
	var param2='';
	var param3='';
	var param4='';
	var param5='';

	
	$.ajax({
		// url: "Upto50L/UI_fetchformdata",
		url : "/TPLSW/JerseyClientPost",
		data : {
			param1 : param1,
			param2 : param2,
			param3 : param3,
			param4 : param4,
			param5 : param5,
			root : root,
			Usrpwd : Usrpwd,
			PrcsID : PrcsID,
			FormName : FormName,
			AttchName : AttchName,
			Version : Version,
			AttchDescrptn : AttchDescrptn,
			spname : spname,
			CntntURL : CntntURL,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()
		},
		async : false,
		// dataType: "json",
		type : 'POST',
        success: function (xml1) {

           // var val = $(xml1).find("LimitCheck").text();
var op= UI_getdata(id,ApplNo,$(document).find('form').find("#"+prfx+"_PrcsID").val(),Prdcde,xml1,"Sam_sCibilDataLogIns")
  
if(xml1.split('|')[1]=="PDF" && xml1.split('|')[0]!="")
{
xml1=xml1.replace(/\//g, '\\');
var formid=FormName;
var PrcsId = $(document).find('form').find("#"+prfx+"_PrcsID").val();
var activityid = $(document).find('form').find("#"+prfx+"_ActivityID").val();
var CreatedBy=$(document).find('form').find("#"+prfx+"_CreatedBy").val();
var ModifiedBy=$(document).find('form').find("#"+prfx+"_ModifiedBy").val()
//alert(Data+','+FlagVal+','+formid+','+PrcsId+','+activityid+','+CreatedBy+','+ModifiedBy)
var xml = UI_getdata(xml1.split('|')[0]+'|',"upload",formid+','+PrcsId+','+activityid,CreatedBy,"","sam_sAttchDms");
$('#'+Screid).val(xml1.split('|')[2])

var op= UI_getdata(id,ApplNo,$(document).find('form').find("#"+prfx+"_PrcsID").val(),Prdcde,"Ins","Sam_sCibilDataIns")
 swal("CIBIL GENERATION", "Success!", "success");
}
		else
{
//alert(xml1.split('|')[0])
$('#'+Screid).val('')
  swal("CIBIL GENERATION", "FAILED"+xml1.split('|')[0]+"!", "error");

}		

//$("#LNAP_ApplName").val($(xml1).find("APDT_FullName").text());
            
        },

        error: function (xml1)
{


}


    });
}
	else{
	alert($(op).find("Result").text());
}
	
				
});

var CUSVAL= UI_getdata(id,"","","","","Sam_sGetCusVal")

$(CUSVAL).find("Name").text()

                var divctnt ='<div class="TxtCntnt"><table style="text-align:left;">'
				divctnt +='<tr><td>Customer Name</td><td>:  '+$(CUSVAL).find("Name").text()+'</td></tr>'
				divctnt +='<tr><td>Customer ID</td><td>:   '+id+'</td></tr>'
				divctnt +='<tr><td>Age</td><td>:   '+$(CUSVAL).find("Age").text()+'</td></tr>'
				divctnt +='<tr><td>PAN ID</td><td>:   '+$(CUSVAL).find("Id").text()+'</td></tr>'
				divctnt +='<tr><td>Loan Amount</td><td>:   '+LnAmt+'</td></tr>'
				divctnt +='<tr><td>Product Name</td><td>:   '+PrdctNme+'</td></tr>'
				divctnt +='<tr><td>Sub Product</td><td>: '+SbPrdctNme+'</td></tr>'
				divctnt +='</tbody></table></div>'
				$('.showSweetAlert').find('fieldset').prev().append(divctnt)

}
	}
	else
	{
	
	alert("Please select the Applicant");
	}
}





function WrkFlwTrmntChk()
{

var ActvtyTrmChk =UI_getdata(getUrlParam("processId"),getUrlParam("activityId"),'','','',"LSW_sWFActvTermChck");

var Result=$(ActvtyTrmChk).find('Result').text();


return Result;

}




function pancardvalidation(idval,valchk,frstnme,mdlnme,cusid)
{

    var value= $(idval).val()
	var pancardList = [];
	pancardList.push(value);
	var reqobj ={};
	var xmlhttp = new XMLHttpRequest();
	//reqobj.pancardList=[];
	reqobj.pancardList=pancardList;
	
	var CustId =$(cusid).val()

	
	
	if(value!="")
{
	 var PanChkVal= UI_getdata($(idval).val(),'','','','',"Sam_sPanLogChk");
	 
	if($(PanChkVal).find("Result").text()=="Y")
	{
	
	$.ajax({
        type: "POST",
        dataType: 'json',
        url: "/NSDLWebApp/rest/nsdl/getpanverification",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(reqobj),
        success: function (msg) {              
            // var responseobj = JSON.parse(msg);
        	
        	if(msg.interrorMsg=='')
        		{
        	if (msg.panCardList[0].status=='E')
        	{
            alert("Entered PAN is valid and existing and belongs to - "+msg.outputstring.split('^')[6]+' '+msg.panCardList[0].firstName+' '+msg.outputstring.split('^')[5]+' '+msg.panCardList[0].lastName);    
			$(valchk).val('Valid');
			
			//$(tlt).val(msg.outputstring.split('^')[6]);
			$(frstnme).val(msg.outputstring.split('^')[6]);
			$(mdlnme).val(msg.panCardList[0].firstName+' '+msg.outputstring.split('^')[5]+' '+msg.panCardList[0].lastName);
			//$(lstnme).val(msg.outputstring.split('^')[4]);
			
			 UI_getdata(value+'|'+$(valchk).val(),$(cusid).val(),msg.panCardList[0].firstName,msg.outputstring.split('^')[5],msg.panCardList[0].lastName+'|'+msg.outputstring.split('^')[6],"Sam_sPanLogIns");
			}
			
			else{
			
			alert('Entered Pan Number is Invalid')
			$(idval).val('');
			// $(tlt).val('');
			$(frstnme).val(msg.outputstring.split('^')[6]);
			$(mdlnme).val(msg.panCardList[0].firstName+' '+msg.outputstring.split('^')[5]+' '+msg.panCardList[0].lastName);
			//$(lstnme).val('');
			$(valchk).val('Invalid');
			
			  UI_getdata(value+'|'+$(valchk).val(),$(cusid).val(),msg.panCardList[0].firstName,msg.outputstring.split('^')[5],msg.panCardList[0].lastName+'|'+msg.outputstring.split('^')[6],"Sam_sPanLogIns");

			}
        	}
			else
			{
			alert('Entered Pan Number is Invalid')
			 $(idval).val('');
			// $(tlt).val('');
			$(frstnme).val('');
			//$(mdlnme).val('');
			//$(lstnme).val('');
			$(valchk).val('Invalid');
			
			  UI_getdata(value+'|'+$(valchk).val(),$(cusid).val(),msg.panCardList[0].firstName,msg.outputstring.split('^')[5],msg.panCardList[0].lastName+'|'+msg.outputstring.split('^')[6],"Sam_sPanLogIns");

			}
        },
        error: function (e) {

            alert(e);
        }
    });
}
else
{
 alert($(PanChkVal).find("Result").text());
 $(valchk).val($(PanChkVal).find("Chk").text());
}

}
else
{
	alert('Enter the PAN Number');
}

}

//Recovery Email Start

function RcvyEmail(UserId,To,Content)
{


 var OPXML = UI_getdata(UserId,Content,"","","","SAM_sGetRecvyMailDetl");
				
		var To=To;
		var Title=$(OPXML).find("Title").text();
		var MsgContent= $(OPXML).find("Content").text();
	
		var fromMail = $(OPXML).find("SendMail").text()
		var fromPwd =$(OPXML).find("Password").text()
		var Prophost =  $(OPXML).find("HostName").text()+'|'+$(OPXML).find("PortNo").text()
		 var rt='Proceed';

		 
	if(To!='')
		{	 
		 
		$.ajax({
	        url:"/TPLSW/UpSendMail",
	        type: 'POST',
	        async:false,
	        data: {To:To,Title:Title,MsgContent:MsgContent,fromMail:fromMail,fromPwd:fromPwd,Prophost:Prophost,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	        success: function(stm){	
			
			if(stm=='Success')
			{
	        	//alert(stm);
				rt=stm;
				
			}
			else
			{
			alert(stm);
			return;
			}
	        	
	        },
	        });
}
return rt

}
//Recovery Email End






//field Document Upload Start
function FldUpldHndlr(id)
{

var Val=$(id).val()

if(Val=="Upload")
{
if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain1= LoadFrmXML("RS001");
    var usrpwd1= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("processId");
    var FormName= $(id).closest('form').attr('id');
    var names="";
    var descrptns="";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
 var fd = new FormData();
   var vrsnno= "";
	var prodata = "";
var CountAttch=1;
	
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
			 {
				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
			 }
	         descrptns += 'FieldDocument'+',';
	     }
	 }

 ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	        url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain1="+domain1+"&usrpwd1="+usrpwd1+"&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val(),
	        data: fd,
			async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
			if(data=="Fail")
	        		{
						 ajaxindicatorstop();
	        		alertify.alert(LoadFrmXML("V0119"));
					return
	        		}
			else{
				AttchDmsIns(data,'upload',prodata);
				$(id).val('View');
				$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
				$(id).closest('td').find('input[type="file"]').attr('disabled',true)
				$(id).closest('td').find('input[type="file"]').val('');
				
					ajaxindicatorstop();
					alertify.alert(LoadFrmXML("V0118"));
					return
					
				}	
					 ajaxindicatorstop(); 
	        },
	        failure:function(data)
	        {
	     		  ajaxindicatorstop();
					alertify.alert(LoadFrmXML("V0119"));
					return
	        	
	        }
	    });
		
		  ajaxindicatorstop();
		  }
		  else{
		  
		  alert('select the file to upload');
		  }
}
		 
if(Val=="View")
{
	var IOP=LoadFrmXML("RS006");
	var url= $(id).closest('td').find('input[type="hidden"]').val();
	var type="DOC";
    RedirectURL = IOP+url.replace(/\\/g,"/");
	WintabsCtrl(RedirectURL,'Attach View('+type+')','','yes');
}	
	  
}		  


function FldDocDlte(id)
{

if($(id).closest('td').find('input[type="hidden"]').val()!="")
{
var strconfirm = confirm("Are you sure you want to delete?");
if (strconfirm == true) 
{
	
var Prfx=$(id).closest('td').find('input[type="hidden"]').attr('id').split('_')[0];

var op= UI_getdata(getUrlParam("processId"),Prfx,$(id).closest('form').attr('id'),$(id).closest('td').find('input[type="hidden"]').attr('id'),$('#'+Prfx+'_ModifiedBy').val()+'|'+$(id).closest('td').find('input[type="hidden"]').val(),"Sam_sDltFldAttch")

$(id).closest('td').find('input[type="hidden"]').val('');
$(id).closest('td').find('input[type="button"]').val('Upload');
$(id).closest('td').find('input[type="file"]').val('');
$(id).closest('td').find('input[type="file"]').attr('disabled',false)
}

}


}

//Only for Repco	
//Start
function RepcoPageIdval()
{
var hdnAppId ='';
var AppId = $(window.parent.document).find('#BCDT_CusID').val();
var CoAppId='';
var GurAppId = '';



if($(window.parent.document).find("#iframe1").contents().find('#Table2 tbody tr').find('.dataTables_empty').text()!="No data available in table")
{
var CoApplen = $(window.parent.document).find("#iframe1").contents().find('#Table2 tbody tr').length;


for(i=0;i<CoApplen;i++)
{

CoAppId +=  $($(window.parent.document).find("#iframe1").contents().find('#Table2 tbody tr')[i]).find('td')[1].innerHTML;

CoAppId +=',';

}
}


hdnAppId +=AppId+ ',' + CoAppId;

return hdnAppId;
}


function RepcoGridPageIdval()
{
var hdnAppId ='';
var AppId = $(window.parent.document).find('#BCDT_CusID').val();
var CoAppId='';
var GurAppId = '';



if($(window.parent.document).find("#iframe1").contents().find('#Table2 tbody tr').find('.dataTables_empty').text()!="No data available in table")
{
var CoApplen = $(window.parent.document).find("#iframe1").contents().find('#Table2 tbody tr').length;


for(i=0;i<CoApplen;i++)
{

CoAppId +=  $($(window.parent.document).find("#iframe1").contents().find('#Table2 tbody tr')[i]).find('td')[1].innerHTML;

CoAppId +=',';

}
}

if($(window.parent.document).find("#iframe2").contents().find('#Table2 tbody tr').find('.dataTables_empty').text()!="No data available in table")
{
var GurApplen = $(window.parent.document).find("#iframe2").contents().find('#Table2 tbody tr').length;


for(i=0;i<GurApplen;i++)
{

GurAppId +=  $($(window.parent.document).find("#iframe2").contents().find('#Table2 tbody tr')[i]).find('td')[1].innerHTML;

GurAppId +=',';

}
}
hdnAppId +=AppId+ ',' + CoAppId+ GurAppId;

return hdnAppId;
}

//Repco End


/*
function FldUpldVal(id)
{
if($(id).val()=="")
{
//$(id).closest('td').find('input[type="hidden"]').val('');
$(id).closest('td').find('input[type="button"]').val('View');
}
else
{
AttchDmsIns($(id).closest('td').find('input[type="hidden"]').val(),'delete',"");
$(id).closest('td').find('input[type="hidden"]').val('');
$(id).closest('td').find('input[type="button"]').val('Upload');
}


}*/
//Field document upload end






function InstFldUpldHndlr(id)
{

var Val=$(id).val()


if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain1= LoadFrmXML("RS001");
    var usrpwd1= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("processId");
    var FormName= $(id).closest('form').attr('id');
    var names="";
    var descrptns="";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
 var fd = new FormData();
   var vrsnno= "";
	var prodata = "";
var CountAttch=1;
	
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
			 {
				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
			 }
	         descrptns += 'FieldDocument'+',';
	     }
	 }

 ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	        url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain1="+domain1+"&usrpwd1="+usrpwd1+"&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val(),
	        data: fd,
			async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
			if(data=="Fail")
	        		{
						 ajaxindicatorstop();
	        		alert(LoadFrmXML("V0119"));
					return
	        		}
			else{
				//AttchDmsIns(data,'upload',prodata);
				//$(id).val('View');
				$(id).closest('tr').find('input[type="hidden"]').val(data.split('~')[2])
				$(id).closest('td').find('input[type="file"]').attr('disabled',true)
				$(id).closest('td').find('input[type="file"]').val('');
				$(id).closest('td').find('input[type="file"]').hide();

				$(id).closest('td').append('&nbsp;<span>'+names.slice(0,-1)+'</span>&nbsp; <img id="Attach" onclick="viewfile(this)" name="0" style="width: 21px;height: 19px;padding-bottom: 2px;" class="Table2" src="/TPLSW/ThemeproLO/Common/Images/search1.png">')
				
					ajaxindicatorstop();
					alertify.alert(LoadFrmXML("V0118"));
					return
					
				}	
					 ajaxindicatorstop(); 
	        },
	        failure:function(data)
	        {
	     		  ajaxindicatorstop();
					alertify.alert(LoadFrmXML("V0119"));
					return
	        	
	        }
	    });
		
		  ajaxindicatorstop();
		  }
		  else{
		  
		  alert('select the file to upload');
		  }

		 

	  
}



function ExclFldUpldHndlr(id)
{

var Val=$(id).val()


if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain1= LoadFrmXML("RS004");
    var usrpwd1= LoadFrmXML("RS005");
    var PrcsID=getUrlParam("processId");
    var FormName= "LSW_SInstrmntExcelUpload";
    var names="";
    var descrptns="";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
 var fd = new FormData();
   var vrsnno= "";
	var prodata = "";
var CountAttch=1;
	
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
			 {
				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
			 }
	         descrptns += 'FieldDocument'+',';
			 
			 
	     }
	 }

	PrcsID=PrcsID+'~'+$("#INRG_PrgmID").val();
	 
	 
 ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	        url:"/TPLSW/ExcelNoDelUploadHandler?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain1="+domain1+"&usrpwd1="+usrpwd1,
	        data: fd,
			async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
			if(data=="Fail")
	        		{
						 ajaxindicatorstop();
	        		alert(LoadFrmXML("V0119"));
					return
	        		}
			else{
				FncallModPageGridLrgData(this,'Table2',{spname:'SCF_SgetInstrRegGridDataOnUpload',Param:$('#INRG_PrcsID').val(),brid:'',MnuId:''},{0:$('#'),1:$('#')},'||1,4,6,8,9,10,14,16,17,18,19,21,22,23,24,25,26,28');

				if ($($("#Table2").find('thead').find('tr:nth-child(2)').find('th').find('.DataTables_sort_wrapper')[1]).text() == "INRD_CounterPartyID")
				{
					var IsFail = $($("#Table2").find('tbody').find('tr').find("td:eq(25)")[0]).text()
					if(IsFail!='')
					{
						ajaxindicatorstop();
						$(id).closest('td').find('input[type="file"]').val('');
						alertify.alert(IsFail);
					}
					else
					{
						$(id).closest('td').find('input[type="hidden"]').val(data.split('|')[0])
						$(id).closest('td').find('input[type="file"]').attr('disabled',true)
						$(id).closest('td').find('input[type="file"]').val('');
						$(id).closest('td').find('input[type="file"]').hide();
						$(id).closest('td').append('&nbsp;<span>'+names.slice(0,-1)+'</span>&nbsp; <img id="Attach" onclick="Fledwnld(this)" name="0" style="width: 21px;height: 19px;padding-bottom: 2px;" class="Table2" src="/TPLSW/ThemeproLO/Common/Images/Generate.png"> &nbsp;<img src="ThemeproLO/Common/Images/delete-16.png" id="MnlDel" style="padding-bottom: 2px;" onclick="Attchdelete(this)" alt="Smiley face">')
						ajaxindicatorstop();
						alertify.alert(LoadFrmXML("V0118"));
					}
				}
				
				
				ajaxindicatorstop();
					//alertify.alert(LoadFrmXML("V0118"));
				return
					
				}	
					 ajaxindicatorstop(); 
	        },
	        failure:function(data)
	        {
	     		  ajaxindicatorstop();
					alertify.alert(LoadFrmXML("V0119"));
					return
	        	
	        }
	    });
		
		  ajaxindicatorstop();
		  }
		  else{
		  
		  alert('select the file to upload');
		  }

		 

	  
}






	 
function AttchGridsubmitdata(TableID,GrdPrfx,MnPrfx) {
   
var name="";
var fieldid="";
var value="";
var reg = new RegExp('^[0-9]+$');
var formxml="<Data>";

for(j=0;j<$("#"+TableID).find('tbody').find('tr').length;j++)
{
formxml= formxml + "<row>";

var rowwise = $("#"+TableID).find('tbody').find('tr')[j];

for(i=1;i<=4;i++)
 {
    name =  $(rowwise).find('td:eq('+i+')').find('.inputTXT').attr('id');
  
   
   if(reg.test($(rowwise).find('td:eq('+i+')').find('.inputTXT').val())==true)
  {
  value = $(rowwise).find('td:eq('+i+')').find('.inputTXT').val().replace(/,/g, "");
	}
	else
	{
		value = $(rowwise).find('td:eq('+i+')').find('.inputTXT').val();
	}
   if(value != "" )
if(   value != undefined)
{
   {
    value = value.replace(/\&/g, "and");
var formxml=formxml+"<"+GrdPrfx+name+">"+ value  +"</"+GrdPrfx+name+">";
   }
   }
}


formxml= formxml +"<"+GrdPrfx+"PrcsID>"+$("#"+MnPrfx+"PrcsID").val()+"</"+GrdPrfx+"PrcsID>"+"<"+GrdPrfx+"ActivityID>"+$("#"+MnPrfx+"ActivityID").val()+"</"+GrdPrfx+"ActivityID>"
+"<"+GrdPrfx+"DtModified>"+$("#"+MnPrfx+"DtModified").val()+"</"+GrdPrfx+"DtModified>"+"<"+GrdPrfx+"DtCreated>"+$("#"+MnPrfx+"DtCreated").val()+"</"+GrdPrfx+"DtCreated>"
+"<"+GrdPrfx+"ModifiedBy>"+$("#"+MnPrfx+"ModifiedBy").val()+"</"+GrdPrfx+"ModifiedBy>"+"<"+GrdPrfx+"CreatedBy>"+$("#"+MnPrfx+"CreatedBy").val()+"</"+GrdPrfx+"CreatedBy>"+"</row>";

if(name=='DocURL' && value=='')
{
	formxml="<Data><row></row>"
}
}
var formxml = formxml + "</Data>";
//alert(formxml);
return formxml;

}	

 
function TxtGridsubmitdata(TableID,GrdPrfx,MnPrfx) {
   
var name="";
var fieldid="";
var value="";
var reg = new RegExp('^[0-9]+$');



var formxml="<Data>";




for(j=1;j<$("#"+TableID).find('tbody').find('tr').length;j++)
{
formxml= formxml + "<row>";

var rowwise = $("#"+TableID).find('tbody').find('tr')[j];

for(i=0;i<$($("#gview_"+TableID).find('table')[0]).find('thead').find('th').length;i++)
 {
    name = $($($("#gview_"+TableID).find('table')[0]).find('thead').find('th')[i]).attr('id').replace(TableID+'_','');
   
   if($(rowwise).find('td:eq('+i+')').find('input').val()==undefined)
   {
   if($(rowwise).find('td:eq('+i+')').find('select').length!=0)
   {
   value=$(rowwise).find('td:eq('+i+')').find('select').val();
   }
   else if($(rowwise).find('td:eq('+i+')').find('textarea').length!=0)
   {
    value= $(rowwise).find('td:eq('+i+')').find('textarea').val()
	}
	else
	{
	 value= $(rowwise).find('td:eq('+i+')').text();
	}
   }
   else
   {
  value= $(rowwise).find('td:eq('+i+')').find('input').val();
   }
   
   if(reg.test(value)==true)
  {
//if($(rowwise).find('td:eq('+i+')').text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
	//{
  value = value.replace(/,/g, "");
	}
	else
	{
		value = value
	}
  // value = $(rowwise).find('td:eq('+i+')').text().replace(/[^\d\.\-\ ]/g, '');
  
    //value =  value.replace(/\s/g, "");
   if(value != "" )
if(   value != undefined)
{
   {
    value = value.replace(/\&/g, "and");
var formxml=formxml+"<"+GrdPrfx+name+">"+ value  +"</"+GrdPrfx+name+">";
   }
   }
}


formxml= formxml +"<"+GrdPrfx+"PrcsID>"+$("#"+MnPrfx+"PrcsID").val()+"</"+GrdPrfx+"PrcsID>"+"<"+GrdPrfx+"ActivityID>"+$("#"+MnPrfx+"ActivityID").val()+"</"+GrdPrfx+"ActivityID>"
+"<"+GrdPrfx+"DtModified>"+$("#"+MnPrfx+"DtModified").val()+"</"+GrdPrfx+"DtModified>"+"<"+GrdPrfx+"DtCreated>"+$("#"+MnPrfx+"DtCreated").val()+"</"+GrdPrfx+"DtCreated>"
+"<"+GrdPrfx+"ModifiedBy>"+$("#"+MnPrfx+"ModifiedBy").val()+"</"+GrdPrfx+"ModifiedBy>"+"<"+GrdPrfx+"CreatedBy>"+$("#"+MnPrfx+"CreatedBy").val()+"</"+GrdPrfx+"CreatedBy>"+"</row>";
}
var formxml = formxml + "</Data>";
//alert(formxml);
return formxml;

} 




function GetCustmTableData(TableId,TableName)
{
var op= UI_getdata(TableName,getUrlParam("processId"),"","","","LSW_SGetCusTabVal")

var Len=$(op).find("Row").length

for(j=0;j<=Len;j++)
{
j=j+1
for(i=1;i<$($("#gview_"+TableId).find('table')[0]).find('thead').find('th').length;i++)
 {

 var rowwise = $("#"+TableId).find('tbody').find('tr')[j];
 var id="";
 if($(rowwise).find('td:eq('+i+')').find('input').length!=0)
 {
   id= $(rowwise).find('td:eq('+i+')').find('input').attr('id')
  }
  if(  $(rowwise).find('td:eq('+i+')').find('textarea').length!=0)
  {
   id= $(rowwise).find('td:eq('+i+')').find('textarea').attr('id')
  }

   if( $(rowwise).find('td:eq('+i+')').find('select').length!=0)
  {
   id= $(rowwise).find('td:eq('+i+')').find('select').attr('id')
  }

  if(id!=undefined)
  var Node=id.replace(j, "");

$("#"+id).val($($(op).find("Row")[j-1]).find(Node).text())

   }
j=j-1;
}

}
	
	
function PINCINDIN(Val,Cusid,Name,CusType,ChkVal)

{
	
	if($(Name).val()=="")
	{
		alert ("Kindly enter the name for Fraud Check");
		return;
	}
	if($(Cusid).val()=="")
	{
		alert ("Kindly save the file before Fraud Check");
		return;
	}
	if($(Val).val()=="")
	{
		alert ("Kindly Enter the valid data");
		return;
	}
	
	
	var spname='LSW_SGetPANCINDINURL';
	var param1=$(Val).val();
	var param3=$(Cusid).val();
	var param2=$(Name).val();
	var param4=CusType
	var param5="";
	
	if(param4=="")
	{
	if($("#BCDT_ConstitnCd").val()=="C005" || $("#BCDT_ConstitnCd").val()=="C010")
	{
		param4='P'
	}	
	else
	{
		param4='C'
	}
	}
	
	
		$.ajax({
		        url:"/TPLSW/PANCINDIN",
		        type: 'GET',
		        async:false,
		        data: {param1:param1,param2:param2,param3:param3,param4:param4,param5:param5,spname:spname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
		        success: function(stm){	
				
				//alert(stm);
				if(stm.split('|')[1]=='A100')
				{
				$(ChkVal).val('Verified and Valid');
				alert("Verified Consumer Comes under Fraud CheckList")
				}
				else
				{
				alert(stm.split('|')[0]);
				$(ChkVal).val('Verified and Not Valid');	
				}
				
		        	
		        },
		        });
				
	
}

function ActvtyIdVal(Prcsid)
{
var op= UI_getdata(Prcsid,"","","","","LSW_SGetActvtyIdVal")

return $(op).find('ActivityID').text();
}


function WfUpdVal(Prcsid,ActvtyId)
{

var op= UI_getdata(Prcsid,ActvtyId,"","","","SCF_SWfNxtActvtyVrbUpdte")

}





function InitWFPrcs(ClssNme)
{


 var op= UI_getdata($(window.parent.parent.document).find("#LogUsr").val(),$(window.parent.parent.document).find("#CpmCd").val(),"New",$("#MnuId").val(),"","SCF_SFEPWFINITCHK")
 
 if($(op).find('Result').text()!='Y')
 {
 alert("User Can't Initiate the process");
 $(".fa-home").click();
 return
 }
 
	 $.ajax({
                        url: $(window.parent.parent.document).find("#WFURL").val(),
                        data: {},
                        async: false,
                        type: 'POST',
                        success: function OnSuccess_submit(data) {
							
							
							var op= UI_getdata(data.processId,"","","","","LSW_SGetActvtyIdVal")
							
							$("#"+ClssNme+"_ActivityID").val($(op).find('ActivityID').text())
							$("#"+ClssNme+"_PrcsID").val(data.processId)
							//$("#"+ClssNme+"_ActivityID").val('106044_51449_FEPTrans_FEPT_Invoice')
							//$("#"+ClssNme+"_PrcsID").val('51449_FEPTrans_FEPT')
							
							},
                        error: function OnError_submit(xmlRequest) {
                            swal("Your Process Intiation failed", "", "warning");
                            document.getElementById("SubmitSuccess").value = "No";
                            CHKresult = "No";
                         
                        }

                    });
	
}

function CmpleteWFPrcs(ClssNme,Action,Usr,PrgmId)
{
	var ActvtyId=ActvtyIdVal($("#"+ClssNme+"_PrcsID").val())//$("#"+ClssNme+"_ActivityID").val();
	var PrcsId=	$("#"+ClssNme+"_PrcsID").val();
	
	
	var NxtPrcsval= UI_getdata(PrcsId,ActvtyId,Action,Usr,$(window.parent.parent.document).find("#CpmCd").val()+"|"+$("#MnuId").val()+"|"+$("#TxtCpmName").text()+"|"+$(window.parent.parent.document).find("#LogUsr").val(),"SCF_SWfNxtStpAvlbe")

if($(NxtPrcsval).find('NxtLvlVar').text()=="Apprv")
{
var CTOFFTYM= UI_IntrData(PrgmId,"","","","","SCF_SFEPFNCCUTOFTYM","INTR1")		
if($(CTOFFTYM).find('Result').text()=="No" && $(NxtPrcsval).find('FNCKR').text())
{
	alert($(CTOFFTYM).find('Msg').text());
	location.reload();
		return;
}
}

						
	var WFNxtActvy= UI_getdata(PrcsId,ActvtyId,Action,Usr,$(window.parent.parent.document).find("#CpmCd").val()+"|"+$("#MnuId").val()+"|"+$("#TxtCpmName").text()+"|"+$(window.parent.parent.document).find("#LogUsr").val(),"SCF_SWfNxtActvtyVrb")
	
	
	
	/*var RtnVal=$(WFNxtActvy).find('Pstng').html()
	if (RtnVal === undefined || RtnVal === null) {
     // do something 
	 RtnVal='';
	}*/
	return WFNxtActvy
}
function CmpleteWFlowPrcs(ClssNme,Action,Usr,RtnVal){
	var ActvtyId=ActvtyIdVal($("#"+ClssNme+"_PrcsID").val())//$("#"+ClssNme+"_ActivityID").val();
	var PrcsId=	$("#"+ClssNme+"_PrcsID").val();
	
	//var WFNxtActvy= UI_getdata(PrcsId,ActvtyId,Action,Usr,$(window.parent.parent.document).find("#CpmCd").val()+"|"+$("#MnuId").val()+"|"+$("#TxtCpmName").text()+"|"+$(window.parent.parent.document).find("#LogUsr").val(),"SCF_SWfNxtActvtyVrb")
	var WFNxtActvy=RtnVal;
	var URL='/jw/web/json/workflow/assignment/completeWithVariable/'+ActvtyId+'?'+$(WFNxtActvy).find('NxtLvlVar').text()+'&'+$(WFNxtActvy).find('NxtLvlUsr').text()
	$.ajax({
                        url: URL,
                        data: {},
                        async: false,
                        type: 'POST',
                        success: function OnSuccess_submit(data) {
							
							
							//alert('Submitted')
							
							RtnVal= RtnVal+'|Success'
							//$("#"+ClssNme+"_ActivityID").val(data.activityId)
							//$("#"+ClssNme+"_PrcsID").val(data.processId)
							//$("#"+ClssNme+"_ActivityID").val('106044_51449_FEPTrans_FEPT_Invoice')
							//$("#"+ClssNme+"_PrcsID").val('51449_FEPTrans_FEPT')
							
							},
                        error: function OnError_submit(xmlRequest) {
                            
							RtnVal= RtnVal+'|Failed'
                         
                        }

                    });
					return RtnVal;
}

function DrctCmpleteWFPrcs(PRCSID,ActvtyIdVa,Action,USR,PrgmId)
{
	var ActvtyId=ActvtyIdVal(PRCSID);
	var PrcsId=	PRCSID;
		
var NxtPrcsval= UI_getdata(PrcsId,ActvtyId,Action,USR,$(window.parent.parent.document).find("#CpmCd").val()+"|"+$("#MnuId").val()+"|"+$("#TxtCpmName").text()+"|"+$(window.parent.parent.document).find("#LogUsr").val(),"SCF_SWfNxtStpAvlbe")

if($(NxtPrcsval).find('NxtLvlVar').text()=="Apprv")
{
var CTOFFTYM= UI_IntrData(PrgmId,"","","","","SCF_SFEPFNCCUTOFTYM","INTR1")		
if($(CTOFFTYM).find('Result').text()=="No" && $(NxtPrcsval).find('FNCKR').text()=="Yes")
{
	alert($(CTOFFTYM).find('Msg').text());
	location.reload();
		return;
}
}

		
	//var WFNxtActvy= UI_getdata(PrcsId,ActvtyId,Action,$(window.parent.parent.document).find("#LogUsr").val(),"","SCF_SWfNxtActvtyVrb")
	var WFNxtActvy= UI_getdata(PrcsId,ActvtyId,Action,USR,$(window.parent.parent.document).find("#CpmCd").val()+"|"+$("#MnuId").val()+"|"+$("#TxtCpmName").text()+"|"+$(window.parent.parent.document).find("#LogUsr").val(),"SCF_SWfNxtActvtyVrb")
	
	return WFNxtActvy
}

function DrctCmpleteWFlowPrcs(PRCSID,ActvtyIdVa,Action,USR,RtnVal)
{

	var ActvtyId=ActvtyIdVal(PRCSID);
	var PrcsId=	PRCSID;
						
	//var WFNxtActvy= UI_getdata(PrcsId,ActvtyId,Action,$(window.parent.parent.document).find("#LogUsr").val(),"","SCF_SWfNxtActvtyVrb")
	var WFNxtActvy= RtnVal;
		
var URL='/jw/web/json/workflow/assignment/completeWithVariable/'+ActvtyId+'?'+$(WFNxtActvy).find('NxtLvlVar').text()+'&'+$(WFNxtActvy).find('NxtLvlUsr').text()

///jw/web/json/workflow/assignment/complete/879_223_crm_process1_approve_proposal ?var_status=Sent
//http://14.192.17.61:3030/jw/web/json/workflow/assignment/complete/151381_78208_FEPTrans_process_Initiation?var_Link=DirectC,var_Usr=C19000065_U1
	 $.ajax({
                        url: URL,
                        data: {},
                        async: false,
                        type: 'POST',
                        success: function OnSuccess_submit(data) {
							
							
							//alert('Submitted')
							
							RtnVal= RtnVal+'|Success'
							//$("#"+ClssNme+"_ActivityID").val(data.activityId)
							//$("#"+ClssNme+"_PrcsID").val(data.processId)
							//$("#"+ClssNme+"_ActivityID").val('106044_51449_FEPTrans_FEPT_Invoice')
							//$("#"+ClssNme+"_PrcsID").val('51449_FEPTrans_FEPT')
							
							},
                        error: function OnError_submit(xmlRequest) {
                            
							RtnVal= RtnVal+'|Failed'
                         
                        }

                    });
	return RtnVal
}



function DrctFINCCmpleteWFPrcs(PRCSID,ActvtyIdVa,Action,USR,PrgmID)
{

						var ActvtyId=ActvtyIdVal(PRCSID);
						var PrcsId=	PRCSID;
						
var NxtPrcsval= UI_getdata(PrcsId,ActvtyId,Action,USR,$(window.parent.parent.document).find("#CpmCd").val()+"|"+$("#MnuId").val()+"|"+$("#TxtCpmName").text()+"|"+$(window.parent.parent.document).find("#LogUsr").val(),"SCF_SWfNxtStpAvlbe")

if($(NxtPrcsval).find('NxtLvlVar').text()=="Apprv")
{
var CTOFFTYM= UI_IntrData(PrgmID,"","","","","SCF_SFEPFNCCUTOFTYM","INTR1")		
if($(CTOFFTYM).find('Result').text()=="No" )
{
	alert($(CTOFFTYM).find('Msg').text());
	location.reload();
		return;
}
}
						
						
		//var WFNxtActvy= UI_getdata(PrcsId,ActvtyId,Action,$(window.parent.parent.document).find("#LogUsr").val(),"","SCF_SWfNxtActvtyVrb")
		var WFNxtActvy= UI_getdata(PrcsId,ActvtyId,Action,USR,$(window.parent.parent.document).find("#CpmCd").val()+"|"+$("#MnuId").val()+"|"+$("#TxtCpmName").text()+"|"+$(window.parent.parent.document).find("#LogUsr").val(),"SCF_SFINCWfNxtActvtyVrb")
		return WFNxtActvy
}

function DrctFINCCmpleteWFlowPrcs(PRCSID,ActvtyIdVa,Action,USR,RtnVal)
{

						var ActvtyId=ActvtyIdVal(PRCSID);
						var PrcsId=	PRCSID;
						
						
						
		//var WFNxtActvy= UI_getdata(PrcsId,ActvtyId,Action,$(window.parent.parent.document).find("#LogUsr").val(),"","SCF_SWfNxtActvtyVrb")
		//var WFNxtActvy= UI_getdata(PrcsId,ActvtyId,Action,USR,$(window.parent.parent.document).find("#CpmCd").val()+"|"+$("#MnuId").val()+"|"+$("#TxtCpmName").text()+"|"+$(window.parent.parent.document).find("#LogUsr").val(),"SCF_SFINCWfNxtActvtyVrb")
		var WFNxtActvy= RtnVal;
		
var URL='/jw/web/json/workflow/assignment/completeWithVariable/'+ActvtyId+'?'+$(WFNxtActvy).find('NxtLvlVar').text()+'&'+$(WFNxtActvy).find('NxtLvlUsr').text()

 $.ajax({
                        url: URL,
                        data: {},
                        async: false,
                        type: 'POST',
                        success: function OnSuccess_submit(data) {
							
							//alert('Submitted')
							
							RtnVal= RtnVal+'|Success'
							//$("#"+ClssNme+"_ActivityID").val(data.activityId)
							//$("#"+ClssNme+"_PrcsID").val(data.processId)
							//$("#"+ClssNme+"_ActivityID").val('106044_51449_FEPTrans_FEPT_Invoice')
							//$("#"+ClssNme+"_PrcsID").val('51449_FEPTrans_FEPT')
							
							},
                        error: function OnError_submit(xmlRequest) {
                            
							RtnVal= RtnVal+'|Failed'
                         
                        }

                    });
	return RtnVal
}


function ChckrInitWFPrcs()
{

var Rtnval="";
 var op= UI_getdata($(window.parent.parent.document).find("#LogUsr").val(),$(window.parent.parent.document).find("#CpmCd").val(),"New",$("#MnuId").val(),"","SCF_SFEPWFINITCHK")
 
 if($(op).find('Result').text()!='Y')
 {
 alert("User Can't Initiate the process");
 $(".fa-home").click();
 return
 }
 
	 $.ajax({
                        url:$(op).find('URL').text(),
                        data: {},
                        async: false,
                        type: 'POST',
                        success: function OnSuccess_submit(data) {
							
							
							var op= UI_getdata(data.processId,"","","","","LSW_SGetActvtyIdVal")
							
							$("#ActivityID").val($(op).find('ActivityID').text())
							$("#PrcsID").val(data.processId)
							//$("#"+ClssNme+"_ActivityID").val('106044_51449_FEPTrans_FEPT_Invoice')
							//$("#"+ClssNme+"_PrcsID").val('51449_FEPTrans_FEPT')
								Rtnval= "Success"
							},
                        error: function OnError_submit(xmlRequest) {
                            swal("Your Process Intiation failed", "", "warning");
                            document.getElementById("SubmitSuccess").value = "No";
                            CHKresult = "No";
                         
                        }

                    });
				
	return Rtnval
}



function getBaseInfo(FieldClass,Prifix)
{
	  var xml=$("#APPINFOTXT").val();
	  var n = document.getElementsByClassName(FieldClass);
      for (i = 0; i < n.length; i++) {
          name = document.getElementsByClassName(FieldClass).item(i).id
         // name= name.substring(5);
          //name= Prifix+name
          var val = $(xml).find(name).text();
 
          if($("#"+ name).length > 0)
          {
        	  
        	  $("#"+ name).text(val);  
        	  
          } 
      }
     
}

function ChkMandatoryFlds(FieldClass)
{
	  //var xml=$("#APPINFOTXT").val();
	  var n = document.getElementsByClassName(FieldClass);
	  var Rtn= "";
      for (i = 0; i < n.length; i++) {
    	  var atLeastOneChecked=false;
    	  
    	  if ($($("."+ FieldClass)[i]).hasClass("select-radio"))
    		  {
    		  
    		  $($("."+ FieldClass)[i]).find('input[type=radio]').each(function() {
    		         if ($(this).prop("checked") == true) {
    		             atLeastOneChecked = true;  		             
    		             
    		         }
    		         
    		     });
    		  
    		  if (atLeastOneChecked == false)
    			  {
    			  Rtn = "Mandatory";
    			  }
    		  
    		  }
			 else if($($("."+ FieldClass)[i]).is('input[type="checkbox"]'))
    	 // else if($($('input[type="checkbox"]')[i]).hasClass(FieldClass))
        	{
        	var allChecked = true;
        	$("input[type=checkbox]."+FieldClass+"").each(function(index, element){
        	  if(!element.checked){
        	    allChecked = false;
        	   // return false;
        	  } 
        	});
        	if (allChecked == false)
            {
            Rtn = "Mandatory";
            }
        	} 
    	  else
    		  {

          name = document.getElementsByClassName(FieldClass).item(i).id
         // name= name.substring(5);
          //name= Prifix+name
        //  var val = $(xml).find(name).text();
 
          if (name != "")
        	  {
          if($("#"+ name).length > 0)
          {
        	  
        	  if ($("#"+ name).is("select")==true)
    		  {        		  
    		  
    		  if ($("#"+ name).val() == "")
    		  {        		  
    		  $("#"+ name).prev().prev().addClass("DataInValid")
    		   $("#"+ name).prev().prev().removeClass("DataNormal");
    		  Rtn = "Mandatory";
    		  }
    	  else
    		  {
    		  $("#"+ name).prev().prev().addClass("DataNormal");
    		  $("#"+ name).prev().prev().removeClass("DataInValid");
    		  var a;
    		  }    		  
    		  }
    	  else
    		  {
    		  if ($("#"+ name).val() == "")
    		  {        		  
    		    $("#"+ name).addClass("DataInValid")
    		    $("#"+ name).removeClass("DataNormal");
    		    Rtn = "Mandatory";
    		  }
    	  else
    		  {
    		    $("#"+ name).addClass("DataNormal");
    		    $("#"+ name).removeClass("DataInValid");
    		    var a;
    		  }

    		  }
        	  
          }
        	  }
    		  }
      }
      return Rtn;
}

/*function ChkMandatoryFlds_Doc(FieldClass)
{
	  //var xml=$("#APPINFOTXT").val();
	  var n = document.getElementsByClassName(FieldClass);
	  var Rtn= "";
      for (i = 0; i < n.length; i++) {
    	  var atLeastOneChecked=false;
    	  
          name = document.getElementsByClassName(FieldClass).item(i).id
         // name= name.substring(5);
          //name= Prifix+name
        //  var val = $(xml).find(name).text();
 
          if (name != "")
        	  {
          if($("#"+ name).length > 0)
          {
        	  
        	  if ($("#"+ name).val() == "")
        		  {        		  
        		  $("#"+ name).addClass("DataInValid")
        		   $("#"+ name).removeClass("DataNormal");
        		  Rtn = "DocMandatory";
        		  }
        	  else
        		  {
        		  $("#"+ name).addClass("DataNormal");
        		  $("#"+ name).removeClass("DataInValid");
        		  var a;
        		  }
        	  
          }
        }
     }
      return Rtn;
}*/

function ChkMandatoryFlds_Doc(FieldClass)
{
	  //var xml=$("#APPINFOTXT").val();
	  var DocName= "";
	  var n = document.getElementsByClassName(FieldClass);
	  //var DocName= "";
      for (i = 0; i < n.length; i++) {
    	  var atLeastOneChecked=false;
    	  
          name = document.getElementsByClassName(FieldClass).item(i).id
         // name= name.substring(5);
          //name= Prifix+name
        //  var val = $(xml).find(name).text();
 
          if (name != "")
        	  {
          if($("#"+ name).length > 0)
          {
        	  
        	  if ($("#"+ name).val() == "")
        		  {        		  
        		  $("#"+ name).addClass("DataInValid")
        		  $("#"+ name).removeClass("DataNormal");
        		 
        		  var DocName=DocName+$("#"+ name).attr("data-val")+','

        		  // return DocName
        		  }
        	  else
        		  {
        		  $("#"+ name).addClass("DataNormal");
        		  $("#"+ name).removeClass("DataInValid");
        		  var a;
        		  }
          }
        }
     }
      return DocName.replace(/,\s*$/, "");
}

function CheckValidKyc(Id,Type,Verify,FstNam,LstNam,FatNam,DOB,CUSID)
{	
	if($("#"+Verify).val() != "Verified")
		{
	        IdVal=$("#"+Id).val()
	     if(IdVal=="")
	     {
		  
		  if(Type=="email")
			  {
			  alert("Kindly enter Valid Email ID")
				return;
			  }
		  else
			  {
			  alert("Kindly enter the Valid Number")
				return;
			  }
	      }   
	      if(Type=="dl" )
		  {
	    	 var DOB=$("#"+DOB).val()
			    if(DOB=="")
			    {
			   alert("Kindly enter the DOB")
				return;
				}
		  }
	      else if(Type=="passport")
		  {
	    	var DOB=$("#"+DOB).val()
		    if(DOB=="")
		    {
		     alert("Kindly enter the DOB")
			  return;
		    }
	    	
	    	Id=$("#"+Id).val()
	    	var Result=Id.includes("/");
	    	if(Result==true)
	    		{
		    var Data= Id.split('/');
		    var FileNo = Data[0];
		    var Passport = Data[1];
		    IdVal=Passport;
	    		}
	    	else
	    		{
	    		alert("Please enter the format as File No/Passport No")
	    		  return
	    		}
        }
	var ProcessId=getUrlParam("PrcsID");
	var Type;
   		var OPXML = UI_getdata(ProcessId,Type,IdVal,DOB,FileNo,"LSW_SAPIKYCDETLS");
		OPXML=OPXML.replace('<Resultset><a><Data>','')
		var JSONval=OPXML.replace('<Resultset><a><Data>','').replace('</Data></a></Resultset>','')
		  //var JSONval=OPXML.replace(/\//g,'');
		
   		//var xml=$.parseXML(OPXML);
		//var reqxml=$(xml).find('reqxml').html();
		//var apitype=$(xml).find('apitype').text();
		//var processId=$(xml).find('processId').text();
		
	$.ajax({
        url: "/TPLSW/TotalKyc",
        type: 'POST',
        data: {JSONval,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:false,
       // dataType: 'json',
       // contentType:'application/json',
        
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
        	 var obj = JSON.parse(stm)
        //alert(obj);

         if(Type=="email")
    		 {
    		 	if(obj["status-code"]=='101' || obj["statusCode"]=='101' || obj["status"]=='101')
    		 	{
    	           if(obj["result"].data["result"]==true)
    		         {
    			    $("[data-Validatearia="+Verify+"]").text('Verified');
    			    $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain");	
    				$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
    				$("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
    			    $("#"+Verify).val('Verified')
    		        }
    		 	}
    	  else
    		  {
    		    $("[data-Validatearia="+Verify+"]").text('Failed');
    		    $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
    			$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
    			$("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
    		    $("#"+Verify).val('Failed')	
    		    alert("Invalid Email Id");
    		  }
    	 }
         else if(obj["status-code"]=='101' || obj["statusCode"]=='101')
         {  
		$("[data-Validatearia="+Verify+"]").text('Verified');
	    $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain");	
		$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
		$("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
	    $("#"+Verify).val('Verified')
	    $("."+Type+'1').show();
	    $("."+Type+'upload').show();
	    $("."+Type).addClass('DOCMndtry');
	    if(Type=="pan")
	    	{
	    	 var str=obj["result"].name
	    	 var Data=str.replace(" ","|");
	    	 var FirstName=Data.split("|")[0];
	    	 var LastName=Data.split("|")[1];
			 
			 FirstName=FirstName.replace('&','and');
			 LastName=LastName.replace('&','and');
			 
	    	 $("#"+FstNam).val(FirstName);
	    	 $("#"+LstNam).val(LastName);
	    	 //$("#"+FatNam).val(FatherName);
	    	 
	    	/* if( $("#"+FatNam).val() != "")
    		 {
	    	 $("#"+FatNam).next().addClass('active');
	    	 $("#"+FatNam).attr('disabled',true)
    		 }*/
	    	 if( $("#"+FstNam).val() != "")
    		 {
	    	 $("#"+FstNam).next().addClass('active');
	    	 $("#"+FstNam).attr('disabled',true)
    		 }
	    	 if( $("#"+LstNam).val() != "")
    		 {
	    	 $("#"+LstNam).next().addClass('active');
	    	 $("#"+LstNam).attr('disabled',true)
    		 }
	    	}
	    
	        var Name="";
	    	var FatherName="";
	    	var Address="";
	    	var DOB="";
	    	var GENDER="";
	    	var AGE="";
	    	var CusId=$("#"+CUSID).val();
	    	var ProcessId=getUrlParam("PrcsID");
	    
	    if(Type=="pan")
	    	{
	    	   Name=(obj["result"].name).replace("&","and");
	    	}
	    else if(Type=="voter")
	    	{
	    	   Name=(obj["result"].name).replace("-"," ");
			   Name=Name.replace("&","and");
	    	   DOB=obj["result"].dob;
	    	   GENDER=obj["result"].gender;
	    	   AGE=obj["result"].age;
	    	   FatherName=(obj["result"].rln_name).replace("-"," ");
			   FatherName=FatherName.replace("&","and");
	    	}
	    else if(Type=="dl")
	    	{
	    	  Name=(obj["result"].name).replace("&","and");
	    	 // FatherName=obj["result"].father/husband
	    	  DOB=obj["result"].dob
	    	  Address=(obj["result"].address).replace('&','and');
	    	}
	    else if(Type=="passport")
	    	{
	    	  Name=obj["result"].name.nameFromPassport
	    	  FatherName=obj["result"].name.surnameFromPassport
	    	}
	    var xml=UI_getdata(ProcessId,Name+'|'+FatherName+'|'+Address+'|'+DOB+'|'+GENDER,Type,CusId,"","LSW_TINSKARZADETL");
	        //$("#BTNKARZAGRD").click();
			FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:CusId,MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD')
            $(".KrazaPopup").click();
	 } 
	 else
	 {
	    $("[data-Validatearia="+Verify+"]").text('Failed');
	    $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
		$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
		$("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
	    $("#"+Verify).val('Failed')
	    $("."+Type+'1').hide();
	    if(Type=="voter")
    	{
	       alert("Incorrect Voter ID");
    	}
	    else if(Type=="dl")
	    {
	       alert("Incorrect DL Number");
	    } 
	    else if(Type=="passport")
	    {
	       alert("Incorrect Passport or File Number");
	    }    
	    else if(Type=="pan")
    	{
    	 var str=obj["result"].name
    	 var Data=str.split(" ");
    	 var FirstName=Data[2];
    	 var LastName=Data[3];
    	 var FatherName=Data[0];
    	 $("#"+FstNam).val('');
    	 $("#"+LstNam).val('');
    	 $("#"+FatNam).val('');
    	 $("#"+FstNam).next().removeClass('active');
    	 $("#"+LstNam).next().removeClass('active');
    	 $("#"+FatNam).next().removeClass('active');
    	 $("#"+FstNam).attr('disabled',false)
    	 $("#"+FstNam).attr('disabled',false)
    	 $("#"+FstNam).attr('disabled',false)
    	 alert("Invalid ID Number");
    	}
	 } 
    },
    error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	alert("Error Occured. Contant IT!!!");
    	   }
});
}
else
  {	
	 //$("#BTNKARZAGRD").click();
	 FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$('#'+CUSID).val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD')
     $(".KrazaPopup").click();
  }
}

function GSTAnalysisFn(Gst,FrmDate,ToDate)
{   
      var OP="";
	  //|| $("#"+CusName).val()==""  --CusName,
	  if($("#"+Gst).val()==""  || $("#"+FrmDate).val()==""  || $("#"+ToDate).val()=="" )
	  {
		  alert("Kindly enter Mandatory Fields");
		  return false;
	  }
	  $("#Save1").click();
	  
	  var Token=$(window.parent.parent.document).find("#Prvnt").val();
	  var PRCSID=$("#PrcsID").val();
      var Param1="";
	  
    	   $.ajax({

               url: "/TPLSW/GSTAnalysisCall",
               data: { SPNAME:"LSW_SGSTANALYSISCREATE", Param1: Param1, Param2: "Service",PRCSID: PRCSID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
               async: false,
               //dataType: "json",
			    dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
				   
            	   	OP=xml1.responseText;
					
					OP=JSON.parse(OP);
					
					if(OP.url==undefined)
					{
						alert(OP.message);
						return false;
					}
					else
					{
				if($("#SALE_MODE").val() == "Manual")
				{
					var OPxml=UI_getdata($("#PrcsID").val(),xml1.responseText,"","EMAIL","","LSW_SSENDGSTANALYSISLNK");
					
					if($(OPxml).find("Result").text()=="Success")
					{
					   alert("Link send successfully");	
					}
					else
					{
						
					}
				}
				else if($("#SALE_MODE").val() == "Upload")
				{
					alert("Transaction Initiated Successfully. Upload the documents against the respective month");
					$("#SALE_TRANSFLG").val("Initiated");
					$("#Complete").show();
					$("#gstbtn").hide();
					$("#Save1").click();
					$("#BTNSALESGRD").click();
				}
					}
					//ajaxindicatorstop();
            },
            error: function (xml1)
            {
				//alertify.alert(LoadFrmXML("V0126"));
					window.alert(LoadFrmXML("V0126"));
				OP="Fail";
				//ajaxindicatorstop();
            }   
    	   });     
		  // ajaxindicatorstop();
    	   return OP;	   
 }

function CheckKYCDetl(Event,Id,Verify,Type,HTML)
{
	var Fld1=$(Event).attr("data-field").split("|")[0];	
    var Fld2=$(Event).attr("data-field").split("|")[1];
	var Fld3=$(Event).attr("data-field").split("|")[2];
	var Fld4=$(Event).attr("data-field").split("|")[3];
	var Fld5=$(Event).attr("data-field").split("|")[4];
	var Fld6=$(Event).attr("data-field").split("|")[5];
	var Fld7=$(Event).attr("data-field").split("|")[6];
	var Fld8=$(Event).attr("data-field").split("|")[7];
	var Fld9=$(Event).attr("data-field").split("|")[8];
	var Fld10=$(Event).attr("data-field").split("|")[9];
	var Fld11=$(Event).attr("data-field").split("|")[10];
	var Fld12=$(Event).attr("data-field").split("|")[11];
	
    if($("#"+Verify).val()!="Verified")
	{	
    var IdVal=$("#"+Id).val()
	if(IdVal=="")
	{
	   alert("Kindly enter the Valid Number")
	   return;
	} 

   if(Type=="IFSC")
	 {
		 if($(HTML).find("[name=DBFD_FAVOURTYPE]").val()=='Others')
		 {
			var AcctNo=$(HTML).find("[name=DBFD_ACCTNUM]").val()
		 }
		 else
		 {
				
			var AcctNo=$(HTML).find("[name=DBFD_ACCTNUMB]").val()			  
		 }
	  	
	   if(AcctNo=="")
	   {
		alert("Kindly enter the Valid Account Number")
	    return;  
	   }
	    IdVal=IdVal+'/'+AcctNo
      }
	if(Type=="PASSPORT")
      {
		  if($("#"+Fld1).val()=="")
		  {
			 alert("Kindly enter the DOB") 
			 return;
		  }
		 IdVal=$("#"+Id).val()+'-'+$("#"+Fld1).val()
		 IdVal=IdVal.replaceAll(' ','')
	  }
	  if(Type=="DRIVING LICENSE")
      {
		 IdVal=$("#"+Id).val()+'-'+$("#"+Fld1).val()
		 //IdVal=IdVal.replaceAll(' ','') 
	  }
	  
	  if(Type=="ELECTRICITY BILL")
	  {
		  if($("#"+Fld1).val() == "Electricity Bill")
		  {
		    IdVal=$("#"+Id).val()+'/'+$("#"+Fld2).val() 
		  }
		  else if($("#"+Fld1).val()=="Landline Authentication (BSNL/MTNL only)")
		  {
			 Type="TELEPHONE"; 
			 IdVal=$("#"+Id).val()+'/'+$("#"+Fld5).val() 
		  }
		  else if($("#"+Fld1).val()=="Mobile Authentication with OTP")
		  {
			 Type="MOBILE OTP"; 
			 IdVal=$("#"+Id).val()
		  }
	  }
	  if(Type=="MOBILE STATUS")
	  {
		IdVal=$("#"+Fld2).val()+'/'+$("#"+Id).val()  
	  }
	  if(Type=="IFSC")
	   {
		  $("#Save").click();
		  var CusID=$(HTML).find("select[name="+Fld3+"]").val()
	   }
	   else
	   {
		 $("#Save1").click()
	     var CusID=$("#"+Fld4).val();
	   }
	$.ajax({
        url: "/TPLSW/KarzaKyc",
        type: 'POST',
        data: {Karzavalue:IdVal,CoAPlt:CusID,Type:Type,SPNAME:"LSW_SKARZAAPICREATE",APIType:Type,PRCSID:$("#PrcsID").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:false,
        //dataType: 'json',
       //contentType:'application/json',
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
	        var Status=stm.split("!@#")[0]
			if(Status=="Success")
			{
				var DOB="";
				var Address="";
				var FatherName="";
				
	                stm=stm.split("!@#")[1]
        	    var obj = JSON.parse(stm)
              //alert(obj);
		        if(obj["status-code"] =='101' || obj["statusCode"] =='101')
                  {
					 if(Type=="UDYAM")
			          {
				        var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
				        var vrsnno=$(op).find("VR").text()
					  }
		 if(Type=="UDYAM")
			          {
				        var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
				        var vrsnno=$(op).find("VR").text()
						
		$("[data-Validatearia="+Fld1+"]").text('Verified');
 	    $("[data-Validatearia="+Fld1+"]").removeClass("btn-yelInplain");	
 		$("[data-Validatearia="+Fld1+"]").removeClass("btn-RedInplain");
 		$("[data-Validatearia="+Fld1+"]").addClass("btn-GrnInplain"); 
		$("input[name="+Fld1+"]").val('Verified')
						
					  }
	         else
			 {
		       $("[data-Validatearia="+Verify+"]").text('Verified');
 	           $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");	
 		       $("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain");
 		       $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain"); 
		       $("input[name="+Verify+"]").val('Verified')
			 }
						
 	                    //$("#"+Verify).val('Verified')
					
				if(Type=="UDYAM")
			          {
				var settings = {
    "url": window.location.origin+"/TPLSW/getPDFTag?DocName=UdyamCertificate&CusID="+$("#"+Fld4).val()+"&attachname=UdyamCertificate.pdf&attachdescrptn=UdyamCertificate&prcsid="+$("#PrcsID").val()+"&formName="+Type+"&version="+vrsnno+"&fileName=UdyamCertificate.pdf&filesize=25&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val(),
    "method": "POST",
    "timeout": 0,
    "headers": {
    "Content-Type": "application/json"
    },
    "data": JSON.stringify(obj),
    };
	
var OrgName=obj["result"].profile.name.replace("&", "AND");
//var Enterprise=obj["result"].profile.enterpriseType
var DateIncorp=obj["result"].profile.dateOfIncorporation
	
var Sector= obj["result"].profile.majorActivity	

	/* var Enterprise= obj["result"].profile.enterpriseType
Enterprise=Enterprise.replace('&','and')
if(Enterprise.includes("MEDIUM")==true)
{
$("#"+Fld8).val('Medium');
$("#"+Fld8+"option:contains(Medium)").attr("selected","selected");
$("#"+Fld8).material_select();
}
else if(Enterprise.includes("MICRO")==true)
{
$("#"+Fld8).val('Micro');
$("#"+Fld8+"option:contains(Micro)").attr("selected","selected");
$("#"+Fld8).material_select();
}
else if(Enterprise.includes("SMALL")==true)
{
$("#"+Fld8).val('Small');
$("#"+Fld8+"option:contains(Small)").attr("selected","selected");
$("#"+Fld8).material_select();
} */
	
	DateIncorp = new Date(DateIncorp);
var year = DateIncorp.getFullYear();
var month = (1 + DateIncorp.getMonth()).toString();
month = month.length > 1 ? month : '0' + month;
var day = DateIncorp.getDate().toString();
day = day.length > 1 ? day : '0' + day;
DateIncorp= day + '/' + month + '/' + year

if($("#"+Fld3).val()=="Non-Individual")
{
$("#"+Fld7).val(OrgName);
$("#"+Fld7).next().addClass('active');
$("#"+Fld8).val(Sector);
$("#"+Fld8).material_select();	
$("#"+Fld9).val(DateIncorp);
$("#"+Fld9).next().addClass('active');
}
else
{
$("#"+Fld10).val(OrgName);
$("#"+Fld10).next().addClass('active');
$("#"+Fld11).val(DateIncorp);
$("#"+Fld11).next().addClass('active');
}
	//$("#"+Fld9).val(DateIncorp);
	
$.ajax(settings).done(function (response) {
	$("."+Fld2).show();
	$(".UAMNupload1").hide();
	$(".UdyamView1").show();
	$("input[name="+Fld2+"]").val(response);
	
	//$("#"+UAMUpd).val(response.split('~')[2]);
	$("#Save1").click();	
  //console.log(response);
});
					  }
	
	else
	{
		if(Type!="MOBILE OTP")
         {
	 $("[data-Validatearia="+Verify+"]").text('Verified');
     $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain");	
     $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
     $("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
     $("#"+Verify).val('Verified');	
		 }
	}					 
			
			  if(Type=="PAN")
        	  {
				if($("#"+Fld3).val()=="Individual")
	              {
        	    var str=obj["result"].name.replace("&", "AND");
					str=str.replace(/["']/g, "");
        	    var Data=str.replace(" ","|");
        	    var FirstName=Data.split("|")[0]
        	    var LastName=Data.split("|")[1]
        	    	$("#"+Fld1).val(FirstName);
					$("#"+Fld1).next().addClass('active');
        	    	$("#"+Fld2).val(LastName);
					$("#"+Fld2).next().addClass('active');
					
					if($("#"+Fld8).val()=="")
					{
					  $("."+Fld5).show();
					  $("."+Fld6).show();
					}
					//$("#"+Fld1).attr("disabled",true);
					//$("#"+Fld2).attr("disabled",true);
					$(".DPAN").hide();
					  
	           $("#Save1").click()
	          var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+Address+'|'+DOB,Type,CusID,"","LSW_TINSKARZADETL");
				  }
				  else if($("#"+Fld3).val()=="Non-Individual")
				  {
					var str=obj["result"].name.replace("&", "AND");
					    str=str.replace(/["']/g, "");
						$("#"+Fld1).val(str);
						//$("#"+Fld2).attr("disabled",true);
						$("#"+Fld1).val(str);
					    $("#"+Fld1).next().addClass('active');
						//$("#"+Fld1).attr("disabled",true);
				if($("#"+Fld8).val()=="")
					{
					  $("."+Fld5).show();
					  $("."+Fld6).show();
					}
					$(".DPAN").hide();
					
						  
	  $("#Save1").click()
	  var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+Address+'|'+DOB,Type,CusID,"","LSW_TINSKARZADETL");
				  }
			  }
			  if(Type=="IFSC")
	           {
		         var AccNo=$(HTML).find("input[name="+Fld1+"]").val()
				 
				 var obj = JSON.parse(stm)
				 var Alert1=obj["result"].data.source[0].data.bankResponse
				 if(Alert1=="SUCCESSFUL TRANSACTION")
				 {
					var AlertD=obj["result"].data.source[0].data.bankResponse+'\nAccount Number : '+obj["result"].data.source[0].data.accountNumber+'\nIFSC : '+obj["result"].data.source[0].data.ifsc+'\nAccount Name : '+obj["result"].data.source[0].data.accountName
					var Accno=obj["result"].data.source[0].data.accountNumber
					var Ifsc=obj["result"].data.source[0].data.ifsc
					var Accname=obj["result"].data.source[0].data.accountName
				 }
				 else
				 {
					var AlertD=obj["result"].data.source[0].data.bankResponse
				  
				 }
				 alert(AlertD)
				 if(AlertD=="INVALID BENEFICIARY ACCOUNT / IFSC")
				 {
				$(HTML).find("[data-Validatearia="+Fld1+"]").text('Failed');
 	            $(HTML).find("[data-Validatearia="+Fld1+"]").removeClass("btn-GrnInplain");	
 		        $(HTML).find("[data-Validatearia="+Fld1+"]").removeClass("btn-yelInplain");
 		        $(HTML).find("[data-Validatearia="+Fld1+"]").addClass("btn-RedInplain"); 
 	            $("#"+Verify).val('Failed')
				 }
				 var Tranche= $(".FormPageMultiTab li.active a div").text();
				var xml=UI_getdata($("#PrcsID").val(),Accno+'|'+Ifsc+'|'+Accname,Type,CusID,Tranche,"LSW_TINSKARZADETLIFSC");
				
				
	           }
			  else if(Type=="UDYAM")
			          {
			if($("#"+Fld3).val()=="Non-Individual")
				  {	  
			         var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
				     var vrsnno=$(op).find("VR").text()			  
				     var settings = {
                       "url": window.location.origin+"/TPLSW/getPDFTag?DocName=UdyamCertificate&CusID="+$("#"+Fld4).val()+"&attachname=UdyamCertificate.pdf&attachdescrptn=UdyamCertificate&prcsid="+$("#PrcsID").val()+"&formName="+Type+"&version="+vrsnno+"&fileName=UdyamCertificate.pdf&filesize=25&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val(),
                       "method": "POST",
                       "timeout": 0,
                       "headers": {
                        "Content-Type": "application/json"
                         },
                       "data": JSON.stringify(obj),
                       };

                       $.ajax(settings).done(function (response) {
	                   $("."+Fld2).show();
	                   $(".UAMNupload1").hide();
	                   $(".UdyamView1").show();
	                   $("#"+Fld2).val(response);
	//$("#"+UAMUpd).val(response.split('~')[2]);
	                   $("#Save1").click();	
  //console.log(response);
                      });
				  }
					  }
			  else if(Type=="PASSPORT")
			  {
				  var str=obj.result.name.nameFromPassport.replace("&", "AND");
					str=str.replace(/["']/g, "");
			  }
			  else if(Type=="VOTER ID")
			  {
				 var str=obj.result.name.replace("&", "AND").replace("-","");
					str=str.replace(/["']/g, "");
					
				  FatherName=obj.result.rln_name.replace("&", "AND").replace("-","");
				  FatherName=FatherName.replace(/["']/g, "");
				  DOB=obj.result.dob
				  
				  if($("#"+Fld8).val()=="")
					{
					  $("."+Fld5).show();
					  $("."+Fld6).show();
					}
			  }
			  else if(Type=="DRIVING LICENSE")
			  {
				      Address=obj.result.address[0].completeAddress
				      Address=Address.replace(/["']/g, "");
				  var str=obj.result.name.replace("&", "AND").replace("-","");
				      str=str.replace(/["']/g, "");
					  
					  DOB=obj.result.dob
					  
				if($("#"+Fld8).val()=="")
					{
					  $("."+Fld5).show();
					  $("."+Fld6).show();
					}
			  }
            else if(Type=="ELECTRICITY BILL")
			  {
				  Address=obj["result"].address
				     Address=Address.replace(/["']/g, "");
				  var str=obj["result"].consumer_name.replace("&", "AND").replace("-","");
				      str=str.replace(/["']/g, "");
			  }
			 else if(Type=="TELEPHONE")
			  {
				  Address=obj["result"].address
				     Address=Address.replace(/["']/g, "");
				  var str=obj["result"].name.replace("&", "AND").replace("-","");
				      str=str.replace(/["']/g, "");
			  }
			  else if(Type=="MOBILE OTP")
			  {
				   alert("OTP Sent Successfully");

                   $("#EBMobPopup").click();
                   $('#EBRequestId').val(obj.request_id)
                   //$('#HdnFieldId').val(Verify)
                   //$("#"+CONBTN).show();
                   //$("#"+CONBTNI).hide();
			  }
			  else if(Type=="VEHICLE")
			  {
			  
				  var Engno=obj["result"].engineNumber;
				  if(Engno!=null)
				  {
				  Engno=Engno.replace(/&/g,"AND");
				  $("#LPDT_VENGNO").val(Engno);
				   $("#LPDT_VENGNO").next().addClass('active');
				  }
				  
				  var Chassno=obj["result"].chassisNumber;
				  if(Chassno!=null)
				  {
				  Chassno=Chassno.replace(/&/g,"AND");
				  $("#LPDT_VCHASISNO").val(Chassno);
				   $("#LPDT_VCHASISNO").next().addClass('active');
				  }
				  
				  var Ownrname=obj["result"].ownerName;
				  if(Ownrname!=null)
				  {
				  Ownrname=Ownrname.replace(/&/g,"AND");
				  $("#LPDT_VNAMEOFOWN").val(Ownrname);
				   $("#LPDT_VNAMEOFOWN").next().addClass('active');
				  }
				  
				  var Makermodl=obj["result"].makerModel;
				  if(Makermodl!=null)
				  {
				  Makermodl=Makermodl.replace(/&/g,"AND");
				  $("#LPDT_VMAKERMODEL").val(Makermodl);
				   $("#LPDT_VMAKERMODEL").next().addClass('active');
				  }
				  
				  var Regisdate=obj["result"].registrationDate;
				  if(Regisdate!=null)
				  {
				  Regisdate=Regisdate.replace(/&/g,"AND");
				  $("#LPDT_VREGDATE").val(Regisdate);
				   $("#LPDT_VREGDATE").next().addClass('active');
				  }
				  
				  var Finance=obj["result"].financier;
				  if(Finance!=null)
				  {
				  Finance=Finance.replace(/&/g,"AND");
				  $("#LPDT_VFINANCIER").val(Finance);
				   $("#LPDT_VFINANCIER").next().addClass('active');
				  }
				  
				  var Vehiclecls=obj["result"].vehicleClassDescription;
				  if(Vehiclecls!=null)
				  {
				  Vehiclecls=Vehiclecls.replace(/&/g,"and");
				  $("#LPDT_VVEHICLECLASS").val(Vehiclecls);
				   $("#LPDT_VVEHICLECLASS").next().addClass('active');
				  }
				  
				   var Ownerserilno=obj["result"].ownerSerialNumber;
				  if(Ownerserilno!=null)
				  {
				  Ownerserilno=Ownerserilno.replace(/&/g,"and");
				  $("#LPDT_VOWNERSERNO").val(Ownerserilno);
				   $("#LPDT_VOWNERSERNO").next().addClass('active');
				  }
				  
				  /* $("#LPDT_VENGNO").val(obj["result"].engineNumber);
				  $("#LPDT_VENGNO").next().addClass('active');
				  
				  $("#LPDT_VCHASISNO").val(obj["result"].chassisNumber);
				  $("#LPDT_VCHASISNO").next().addClass('active');
				  
				  $("#LPDT_VNAMEOFOWN").val(obj["result"].ownerName);
				  $("#LPDT_VNAMEOFOWN").next().addClass('active');
				  
				  $("#LPDT_VMAKERMODEL").val(obj["result"].makerModel);
				  $("#LPDT_VMAKERMODEL").next().addClass('active');
				  
				  $("#LPDT_VREGDATE").val(obj["result"].registrationDate);
				  $("#LPDT_VREGDATE").next().addClass('active');
				  
				  $("#LPDT_VFINANCIER").val(obj["result"].financier);
				  $("#LPDT_VFINANCIER").next().addClass('active');
				  
				  $("#LPDT_VVEHICLECLASS").val(obj["result"].vehicleClassDescription);
				  $("#LPDT_VVEHICLECLASS").next().addClass('active');
				  
				  $("#LPDT_VOWNERSERNO").val(obj["result"].ownerSerialNumber);
				  $("#LPDT_VOWNERSERNO").next().addClass('active'); */
				  
				  var FinName=obj["result"].financier;
				  if(FinName!=null)
				  {
				  
				  FinName=FinName.replace(/&/g,"and");
				  $("#LPDT_VFINANCNAME").val(FinName);
				   $("#LPDT_VFINANCNAME").next().addClass('active');
				  }
				  
				  
				  var ComName=obj["result"].insuranceCompany
				  if(ComName!=null)
				  {
				  ComName=ComName.replace(/&/g,"and");
				  $("#LPDT_VNAMEOFCOM").val(ComName);
				   $("#LPDT_VNAMEOFCOM").next().addClass('active');
				  }
				 
				  var FCDate=obj["result"].insuranceUpto
				  
				    if(FCDate!=null)
					{	
				      FCDate=FCDate.replace(/-/g,"/"); //replaceAll("-","/")
				      $("#LPDT_VFCVALIDITY").val(FCDate);
					  $("#LPDT_VFCVALIDITY").next().addClass('active');
					}
				  $("#LPDT_VPOLICYNO").val(obj["result"].insurancePolicyNumber);
				  $("#LPDT_VPOLICYNO").next().addClass('active');
				  
				  var ManuDate=obj["result"].manufacturedMonthYear
				  
				    if(ManuDate!=null)
					{
					 ManuDate ="01-"+ManuDate;
					 ManuDate=ManuDate.replace(/-/g,"/"); //replaceAll("-","/")
				     $("#LPDT_VMANUDATE").val(ManuDate); 
					 $("#LPDT_VMANUDATE").next().addClass('active');
					}
			  }
			var URL=stm.split("!@#")[2]  
			
			if(Type=="MOBILE STATUS")  
			{
				if(URL!="" && URL!=undefined)
				{
				  $("."+Fld5+"UPLOAD").hide();
				  $("."+Fld5).show();
			      $("#"+Fld5).val(URL);	
				}
				
			   $("#EBMOBPOPCLOSE").click();	
			}
			
			if(Type!="MOBILE STATUS" && Type!="MOBILE OTP" && Type!="VEHICLE")  
			{
			  var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+Address+'|'+DOB,Type,CusID,"","LSW_TINSKARZADETL");
			}
			$("#Save1").click();
			$("#Save").click();
			
		 }
		else
		 {
			if(Fld5=="MULTIEMP") 
			{
			
				$(HTML).find("[data-Validatearia="+Fld1+"]").text('Failed');
 	            $(HTML).find("[data-Validatearia="+Fld1+"]").removeClass("btn-GrnInplain");	
 		        $(HTML).find("[data-Validatearia="+Fld1+"]").removeClass("btn-yelInplain");
 		        $(HTML).find("[data-Validatearia="+Fld1+"]").addClass("btn-RedInplain"); 
 	            $("#"+Verify).val('Failed')
			}
			 else
			 { 
			$("[data-Validatearia="+Verify+"]").text('Failed');
 	        $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		    $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		    $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	        $("#"+Verify).val('Failed')
			$("#Save1").click();
			 }
		 }
	}
	else
	{
		alert(stm.split("!@#")[1]);
		return false;
	}
		},
    error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	alert("Error Occured. Contant IT!!!");
    	   }
	})
  }
  else
  {	
 if(Type=="IFSC")
	 {
		 FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALISTIFSC',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$(HTML).find("[name=DBFD_FAVOURTYPE]").val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||4','KARZAGRDIFSC')
     $(".KrazaPopupIFSC").click(); 
	 }
	 if(Type!="VEHICLE")
	 {
	 FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$("#"+Fld4).val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD')
     $(".KrazaPopup").click();
	 }
	
  }
}

function CheckKYCUPLOADDOC(Event,Id,Verify,Type,HTML)
{
	
	var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
     if (url != "")
	if ($("#"+Id).val().split("\\")[0] == "")
	{
	alert("No Attachments Available to View");
	return;
	}
	//window.location.origin+
	
	RedirectURL ="/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + $("#"+Id).val().split("\\")[0];
	
	Id=RedirectURL

	var Fld1=$(Event).attr("data-field").split("|")[0];	
    var Fld2=$(Event).attr("data-field").split("|")[1];
	var Fld3=$(Event).attr("data-field").split("|")[2];
	var Fld4=$(Event).attr("data-field").split("|")[3];
	var Fld5=$(Event).attr("data-field").split("|")[4];
	var Fld6=$(Event).attr("data-field").split("|")[5];
	var Fld7=$(Event).attr("data-field").split("|")[6];
	var Fld8=$(Event).attr("data-field").split("|")[7];
	var Fld9=$(Event).attr("data-field").split("|")[8];
	//var Constitution=$(Event).attr("data-field").split("|")[8];
	$("#AADHARHITFROM").val($(Event).attr("data-field").split("|")[8]);
	var Constitution=$("#"+Fld7).val();
	
    if($("#"+Verify).val()!="Upload Verified")
	{	

    var IdVal=Id
	if(IdVal=="")
	{
	   alert("Kindly enter the Valid Number")
	   return;
	}   

	if(Type=="PASSPORT")
      {
		  if($("#"+Fld1).val()=="")
		  {
			 alert("Kindly enter the DOB") 
			 return;
		  }
		  
		 IdVal=$("#"+Id).val()+'-'+$("#"+Fld1).val()
		 IdVal=IdVal.replaceAll(' ','')
	  }
	  if(Type=="DRIVING LICENSE")
      {
		 IdVal=$("#"+Id).val()+'-'+$("#"+Fld1).val()
		 //IdVal=IdVal.replaceAll(' ','') 
	  }
	  
	  if(Type=="ELECTRICITY BILL")
	  {
		  if($("#"+Fld1).val() == "Electricity Bill")
		  {
		    IdVal=$("#"+Id).val()+'/'+$("#"+Fld2).val() 
		  }
		  else if($("#"+Fld1).val()=="Landline Authentication (BSNL/MTNL only)")
		  {
			 Type="TELEPHONE"; 
			 IdVal=$("#"+Id).val()+'/'+$("#"+Fld5).val() 
		  }
	  }
	  
	  var flag=""
	  
	  if(Fld5=="DL")
	  {
	    flag="dl"
	  }
	  
	  if(Fld5=="Aadhar")
	  {
		  if($("#"+Fld7).val()=="XML Verification")
		  {
			 Type="AADHAAR XML VERIFY" 
		  }
		  else if($("#"+Fld7).val()=="ZIP File Verification")
		  {
			 Type="AADHAAR ZIP VERIFY" 
			 
			 IdVal=IdVal+'~'+$("#"+Fld1).val()+'~'+$("#"+Fld2).val()
		  }
	  }
	  
	$("#Save1").click()
	 var CusID=$("#"+Fld4).val();
	$.ajax({
        url: "/TPLSW/KarzaKyc",
        type: 'POST',
        data: {Karzavalue:IdVal,CoAPlt:CusID,Type:flag,SPNAME:"LSW_SKARZAAPICREATE",APIType:Type,PRCSID:$("#PrcsID").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:false,
        //dataType: 'json',
       //contentType:'application/json',
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
	        var Status=stm.split("!@#")[0]
			if(Status=="Success")
			{
				var DOB="";
				var Address="";
				var FatherName="";
				var Gender="";
				var str="";
				
				
	                stm=stm.split("!@#")[1]
        	    var obj = JSON.parse(stm)
              //alert(obj);
		        if(obj["status-code"] =='101' || obj["statusCode"] =='101')
                  {
					  
			            $("[data-Validatearia="+Verify+"]").text('Upload Verified');
        	            $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain");	
                        $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
        	            $("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
        	            $("#"+Verify).val('Upload Verified');						 
			
			  if(Fld5=="PAN")
        	  {
				  var FileType=obj.result[0].type;
				   FileType=FileType.includes("Pan");
				   
	    	    if(FileType!=true)
	    		  {
					alert('Kindly upload the Pan');
					$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
					return false;
				  }
				 
				if($("#"+Fld3).val()=="Individual")
	              {
					
if (obj["result"][0].details.panNo.value != "") {
        ObjVal = obj["result"][0].details.panNo.value.toUpperCase();
        var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var code = /([P p])/;
         var code_chk = ObjVal.substring(3,4);
       
	   if (ObjVal.search(panPat) == -1) {
             alert("Invalid Pan No eg.AAAPA1111A");
            // Obj.focus();
            // Obj.value="";
			$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
             return false;
         }
		 if (code.test(code_chk) == false) {
             alert("Invalid Pan No eg.AAAPA1111A");
            // Obj.value="";
			$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
             return false;
         }	
    }					
					  
					FatherName=obj["result"][0].details.father.value

        	     str=obj["result"][0].details.name.value.replace("&", "AND");
					str=str.replace(/["']/g, "");
        	    var Data=str.replace(" ","|");
				
        	       var FirstName=Data.split("|")[0]
        	       var LastName=Data.split("|")[1]
				
        	    	$("#"+Fld1).val(FirstName);
					$("#"+Fld1).next().addClass('active');
        	    	$("#"+Fld2).val(LastName);
					$("#"+Fld2).next().addClass('active');
					$("#"+Fld8).val(FatherName);
					$("#"+Fld8).next().addClass('active');
					
					$(".TYP").show();
					$(".PANVTyp").attr("disabled",true);
					
					

					$("#"+Fld6).val(obj["result"][0].details.panNo.value);
					$("#"+Fld6).next().addClass('active');
  
	                $("#Save1").click();
					var DOB=obj["result"][0].details.date.value
					if(str==undefined)
				    { 
				        str="";
				    }
					if(FatherName==undefined)
				    { 
				        FatherName="";
				    }
					if(DOB==undefined)
				    { 
				        DOB="";
				    }
					
	               var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+Address+'|'+DOB,"PAN Upload",CusID,"","LSW_TINSKARZADETL");
				  }
				  else if($("#"+Fld3).val()=="Non-Individual")
				  {
					
					

if(Constitution=="Society" || Constitution=="Trustee")
	{
		Constitution=""
	}
	if(Constitution!="")
	{
	if(Constitution=='HUF')
		{
		    var code = /([H h])/;
			alert1='Invalid Pan No eg.AAAHA1111A'
        }
	else if(Constitution=='Partnership firms')
		{
		    var code = /([F f])/;
			alert1='Invalid Pan No eg.AAAFA1111A'	
        }
	else if(Constitution=='LLP')
	    {
	       var code = /([E e F f])/;
		   alert1='Invalid Pan No eg.AAAEA1111A/AAAFA1111A' 
        }
	else if(Constitution=='Proprietorship')
		{
		  var code = /([C c P p])/;
		  alert1='Invalid Pan No eg.AAACA1111A/AAAPA1111A'
		}
	else
		{
		  var code = /([C c])/;
		  alert1='Invalid Pan No eg.AAACA1111A'
        }
	}

     if (obj["result"][0].details.panNo.value != "") {
         ObjVal = obj["result"][0].details.panNo.value.toUpperCase();
         var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
       //  var code = /([C c])/;
         var code_chk = ObjVal.substring(3,4);
		 if(Constitution=="")
		 { 
          if (ObjVal.search(panPat) == -1) {
             alert('Invalid PAN Format');
           //  Obj.focus();
            // Obj.value="";
			$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
             return false;
			 
          }
		 }
		 else
		 {
			 if (ObjVal.search(panPat) == -1) {
             alert(alert1);
             //Obj.focus();
            // Obj.value="";
			$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
             return false;
         }
         if (code.test(code_chk) == false) {
             alert(alert1);
            // Obj.value="";
			$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
             return false;
         }
		 }
		  str=obj["result"][0].details.name.value.replace("&", "AND");
					    str=str.replace(/["']/g, "");
						$("#"+Fld1).val(str);
					    $("#"+Fld1).next().addClass('active');
		 
     }					
					$("#"+Fld6).val(obj["result"][0].details.panNo.value);
					$("#"+Fld6).next().addClass('active');
					
					FatherName=obj["result"][0].details.father.value
					
					$(".TYP").show();
					$(".PANVTyp").attr("disabled",true);
					
					$("#"+Fld6).val(obj["result"][0].details.panNo.value);
					if($("#"+Fld6).val()!="")
				     {
					  $("#"+Fld6).next().addClass('active');
					 }
  
	                $("#Save1").click()
					var DOB=obj["result"][0].details.date.value
					if(str==undefined)
				    { 
				        str="";
				    }
					if(FatherName==undefined)
				    { 
				        FatherName="";
				    }
					if(DOB==undefined)
				    { 
				        DOB="";
				    }
	        var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+Address+'|'+DOB,"PAN Upload",CusID,"","LSW_TINSKARZADETL");
				  }
			  }
			  else if(Type=="AADHAAR XML VERIFY" || Type=="AADHAAR ZIP VERIFY")
			  {
				  
				 var StDt = new Date(obj.result.dataFromAadhaar.generatedDateTime);
                 var end  = new Date();
                 var diff = new Date(end - StDt);
                 var days = diff/1000/60/60/24;
				     days = days.toFixed()
				 if(days>3)
				 {
					alert("Kindly upload the latest xml file");
					
					$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	
					$("#Save1").click();
					
					return false;
				 }
				  
			     $(".AVER").show();
				 $("#"+Fld6).val(obj.result.dataFromAadhaar.maskedAadhaarNumber);
				 
				 if($("#"+Fld6).val()!="")
				 {
					$("#"+Fld6).next().addClass('active'); 
				 }
				 
				  Address=obj.result.dataFromAadhaar.address
				 
				  DOB=obj.result.dataFromAadhaar.dob
				  DOB=DOB.replaceAll("-","/");
				  
				  Gender=obj.result.dataFromAadhaar.gender
				  Gender=Gender.replaceAll("-","/");
				  
				  str=obj.result.dataFromAadhaar.name
				  str=str.replaceAll("&","and");

			var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+Address+'|'+DOB,"Aadhar XML Upload",CusID,Gender,"LSW_TINSKARZADETL"); 
			  }
			  else if(Fld5=="PASSPORT")
			  {
				  
				  var FileType=obj.result[0].type;
				   FileType=FileType.includes("Passport");
				   var FileTypePass=obj.result[0].type;
	    	    if(FileType!=true)
	    		  {
					alert('Kindly upload the Passport');
					$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
					return false;
				  }
				  
				 $(".PVER").show();
				 if(obj.result[0].type=="Passport Front")
				 {
				 var str=obj["result"][0].details.givenName.value
				 var DOB=obj["result"][0].details.dob.value
				 var gender=obj["result"][0].details.gender.value
				 $("#"+Fld6).val(obj["result"][0].details.passportNum.value);
				 
				 if($("#"+Fld6).val()!="")
				 {
					$("#"+Fld6).next().addClass('active'); 
				 }
				 }
				 if(obj.result[0].type=="Passport Back")
				 {
				 var FatherName=obj["result"][0].details.father.value
				 var Address=obj["result"][0].details.address.value
				 var Fileno=obj["result"][0].details.fileNum.value;
				 var Passportnum=$("#"+Fld6).val()
				 $("#"+Fld6).val(Fileno+"-"+Passportnum)
				 Address=obj["result"][0].details.address.value
				 }
				  if(Address==undefined)
				    { 
				        Address="";
				    }
					  if(str==undefined)
				    { 
				        str="";
				    }
					  if(FatherName==undefined)
				    { 
				        FatherName="";
				    }
					 if(DOB==undefined)
				    { 
				        DOB="";
				    }
					 if(gender==undefined)
				    { 
				        gender="";
				    }
				 //FatherName=obj["result"][0].details.father.value
			var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+Address+'|'+DOB,FileTypePass,CusID,gender,"LSW_TINSKARZADETL");
			  }
			  else if(Fld5=="VoterID")
			  {
				
				 var FileType=obj.result[0].type;
				   FileType=FileType.includes("Voter");
				   var FileTypeVoter=obj.result[0].type;
	    	  if(FileType!=true)
	    		{
					alert('Kindly upload the Voter');
					$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
					return false;
				} 
             if(obj.result[0].type=="Voterid Back")
				{
					
					Address=obj.result[0].details.address.value
					Address=Address.replaceAll('&','and');
					Address=Address+" - "+obj.result[0].details.pin.value
					
					DOB=obj.result[0].details.dob.value
					DOB=DOB.replaceAll(':','');
					
					Gender=obj.result[0].details.gender.value
				}
             else
				{					
				  
				  str=obj.result[0].details.name.value.replace("&", "AND").replace("-","");
					str=str.replace(/["']/g, "");
					
				  FatherName=obj.result[0].details.relation.value.replace("&", "AND").replace("-","");
				  FatherName=FatherName.replace(/["']/g, "");
				  
				  $("#"+Fld6).val(obj.result[0].details.voterid.value);
				  $("#"+Fld6).next().addClass('active');
				  
				   $(".VoterFld").show(); 
				}
				if(Address==undefined)
				    { 
				        Address="";
				    }
					  if(str==undefined)
				    { 
				        str="";
				    }
					  if(FatherName==undefined)
				    { 
				        FatherName="";
				    }
					 if(DOB==undefined)
				    { 
				        DOB="";
				    }
					 if(gender==undefined)
				    { 
				        gender="";
				    }
				    
				var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+Address+'|'+DOB,FileTypeVoter,CusID,Gender,"LSW_TINSKARZADETL");
				  
			  }
			 else if(Fld5=="Aadhar")
			  {
				  var multiresp = "";
				  for(var zx= 0;zx<obj.result.length;zx++)
				  {
					  
					  if(obj.result.length == 3)
					  {
						  multiresp = "Yes"
						  if(obj.result[zx].type == "Aadhaar Front Top")
						  {
							  if(obj.result.length ==zx)
							  {
							  break;
							  }
							  else{
								  zx++;
							  }
						  }
					  }
					  else if(obj.result.length == 2)
                      {
                                          
                          multiresp = "Yes"
                          if(obj.result[zx].type == "Aadhaar Front Top")
                          {
                              if(obj.result.length ==zx)
                              {
                              break;
                              }
                              else{
                                  zx++;
                              }
                          }
                      }
					  
					var FileType=obj.result[zx].type;
					FileType=FileType.includes("Aadhaar");
					
					if(FileType!=true)
	    		  {
					alert('Kindly upload the Aadhaar');
					$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
					return false;
				  }
				  var FileType1=obj.result[zx].type;
				  
				  if(FileType1=="Aadhaar Front Bottom"&& $("#AADHARHITFROM").val() == "Front")
				  {
				  var CusName=obj["result"][zx].details.name.value
				  var AadharNo=obj["result"][zx].details.aadhaar.value
				  var gender=obj["result"][zx].details.gender.value
				  var DOB=obj["result"][zx].details.dob.value
					   $("#"+Fld8).val(obj["result"][zx].details.imageUrl.value)
					   $(".AadharMskImg").show();
					   $(".AadharViewImg").hide();
					  
					   if(obj["result"][1]==undefined)
					{
					  var DOB=obj["result"][0].details.dob.value
					  
					   $("#"+Fld8).val(convertKarzaURLtoDMS(CusID,obj["result"][0].details.imageUrl.value))
					   $(".AadharMskImg").show();
					   $(".AadharViewImg").hide();
					   break;
					}
					 
				  else
					{
					  var DOB=obj["result"][1].details.dob.value
					  $("#"+Fld8).val(convertKarzaURLtoDMS(CusID,obj["result"][1].details.imageUrl.value))
					  $(".AadharMskImg").show();
					  $(".AadharViewImg").hide();
					}
				  /***if(obj["result"][1]==undefined)
					{
					  var DOB=obj["result"][0].details.dob.value
					   $("#"+Fld8).val(obj["result"][0].details.imageUrl.value)
					   $(".AadharMskImg").show();
					   $(".AadharViewImg").hide();
					}
				  else
					{
					  var DOB=obj["result"][1].details.dob.value
					  $("#"+Fld8).val(obj["result"][1].details.imageUrl.value)
					  $(".AadharMskImg").show();
					  $(".AadharViewImg").hide();
					}***/
				   }
				   if(FileType1=="Aadhaar Front Top")
				  {
				  var CusName=obj["result"][zx].details.name.value
				  var AadharNo=obj["result"][zx].details.aadhaar.value
				  var gender=obj["result"][zx].details.gender.value
				  var DOB=obj["result"][zx].details.dob.value
				  var address=obj["result"][zx].details.address.value
				  $("#"+Fld8).val(obj["result"][zx].details.imageUrl.value)
					   $(".AadharMskImg").show();
					   $(".AadharViewImg").hide();
					   
					   if(obj["result"][1]==undefined)
					{
					  var DOB=obj["result"][0].details.dob.value
					  var address=obj["result"][0].details.address.value
					   $("#"+Fld8).val(convertKarzaURLtoDMS(CusID,obj["result"][0].details.imageUrl.value))
					   $(".AadharMskImg").show();
					   $(".AadharViewImg").hide();
					   break;
					}
					
				  else
					{
					  var DOB=obj["result"][1].details.dob.value
					  var address=obj["result"][0].details.address.value
					  $("#"+Fld8).val(convertKarzaURLtoDMS(CusID,obj["result"][1].details.imageUrl.value))
					  $(".AadharMskImg").show();
					  $(".AadharViewImg").hide();
					}
				  /***if(obj["result"][1]==undefined)
					{
					  var DOB=obj["result"][0].details.dob.value
					  var address=obj["result"][0].details.address.value
					   $("#"+Fld8).val(obj["result"][0].details.imageUrl.value)
					   $(".AadharMskImg").show();
					   $(".AadharViewImg").hide();
					}
				  else
					{
					  var DOB=obj["result"][1].details.dob.value
					  var address=obj["result"][0].details.address.value
					  $("#"+Fld8).val(obj["result"][1].details.imageUrl.value)
					  $(".AadharMskImg").show();
					  $(".AadharViewImg").hide();
					}***/
				   }
				if(FileType1=="Aadhaar Back" && $("#AADHARHITFROM").val() == "Back" )
				  {
				  var AadharNo=obj["result"][zx].details.aadhaar.value
				  var address=obj["result"][zx].details.address.value
					   $("#"+Fld8).val(obj["result"][zx].details.imageUrl.value)
					   $(".AadharMskImgII").show();
					   $(".AadharViewImgII").hide();
					  
					   if(obj["result"][1]==undefined)
					{
					  var address=obj["result"][0].details.address.value
					   $("#"+Fld8).val(convertKarzaURLtoDMS(CusID,obj["result"][0].details.imageUrl.value))
					   $(".AadharMskImgII").show();
					   $(".AadharViewImgII").hide();
					    break;
					}
					
				  else
					{
					  var address=obj["result"][1].details.address.value
					  $("#"+Fld8).val(convertKarzaURLtoDMS(CusID,obj["result"][1].details.imageUrl.value))
					  $(".AadharMskImgII").show();
					  $(".AadharViewImgII").hide();
					}
				 /*** if(obj["result"][1]==undefined)
					{
					  var address=obj["result"][0].details.address.value
					   $("#"+Fld8).val(obj["result"][0].details.imageUrl.value)
					   $(".AadharMskImgII").show();
					   $(".AadharViewImgII").hide();
					}
				  else
					{
					  var address=obj["result"][1].details.address.value
					  $("#"+Fld8).val(obj["result"][1].details.imageUrl.value)
					  $(".AadharMskImgII").show();
					  $(".AadharViewImgII").hide();
					}***/
				   }
				  }
				   $("#"+Fld6).val(AadharNo);
				  $("#"+Fld6).next().addClass('active');
                  $("#"+Fld6).attr("disabled",true);
				  
				  $(".AVER").show();
				  
				  if(address==undefined)
				    { 
				        address="";
				    }
					  if(CusName==undefined)
				    { 
				        CusName="";
				    }
					  if(FatherName==undefined)
				    { 
				        FatherName="";
				    }
					 if(DOB==undefined)
				    { 
				        DOB="";
				    }
					 if(gender==undefined)
				    { 
				        gender="";
				    }
				  
				  var xml=UI_getdata($("#PrcsID").val(),CusName+'|'+FatherName+'|'+address+'|'+DOB,FileType1,CusID,gender,"LSW_TINSKARZADETL");

				  
			  }
			   
			  else if(Fld5=="DL")
			  {
				var FileType=obj.result[0].type;
				   FileType=FileType.includes("DL");
				   var FileTypeDL=obj.result[0].type;
				   
	    	    if(FileType!=true)
	    		  {
					alert('Kindly upload the DL');
					$("[data-Validatearia="+Verify+"]").text('Upload Failed');
 	                $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                $("#"+Verify).val('Upload Failed')
		         	$("#Save1").click();
					return false;
				  }
				  
				   $(".DVER").show();
				   
				   $("#"+Fld6).val(obj.result[0].details.dlNo.value);
				   
				    if($("#"+Fld6).val()!="")
				     {
					   $("#"+Fld6).next().addClass('active'); 
				     }
				     //Address=obj.result.address[0].completeAddress
				     // Address=Address.replace(/["']/g, "");  
				   str=obj.result[0].details.name.value.replace("&", "AND").replace("-","");
				      str=str.replace(/["']/g, "");
					  
					  DOB=obj.result[0].details.dob.value
					  if(address==undefined)
				    { 
				        address="";
				    }
					  if(str==undefined)
				    { 
				        str="";
				    }
					  if(FatherName==undefined)
				    { 
				        FatherName="";
				    }
					 if(DOB==undefined)
				    { 
				        DOB="";
				    }
					 if(gender==undefined)
				    { 
				        gender="";
				    }
					  var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+address+'|'+DOB,FileTypeDL,CusID,gender,"LSW_TINSKARZADETL");
			  }
            else if(Type=="ELECTRICITY BILL")
			  {
				  Address=obj["result"].address
				     Address=Address.replace(/["']/g, "");
				   str=obj["result"].consumer_name.replace("&", "AND").replace("-","");
				      str=str.replace(/["']/g, "");
			  }
			 else if(Type=="TELEPHONE")
			  {
				  Address=obj["result"].address
				     Address=Address.replace(/["']/g, "");
				   str=obj["result"].name.replace("&", "AND").replace("-","");
				      str=str.replace(/["']/g, "");
			  }
			  if(Type=="FACE LIVENESS")
			  {
				var Score=obj["result"].livenessScore.toFixed(2);
				$("#"+Fld5).val(Score);
				$(".ImgScore").text('Image Score : '+Score);
			  }
			//var xml=UI_getdata($("#PrcsID").val(),str+'|'+FatherName+'|'+Address+'|'+DOB,Type,CusID,"","LSW_TINSKARZADETL");
			$("#Save1").click();
		 }
		 else if(obj["status-code"] =='103' || obj["statusCode"] =='103')
         {
			  if(Type=="FACE LIVENESS")
			  {
                 alert(obj["statusMessage"]);
				 return false;
			  }				  
		 }
		else if(obj["status-code"] =='102' || obj["statusCode"] =='102')
         {
		    alert("Kindly upload the valid document");
			
		    $("[data-Validatearia="+Verify+"]").text('Failed');
 	        $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		    $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		    $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	        $("#"+Verify).val('Failed')
         }		 
		else
		 {
			if(Fld5=="MULTIEMP") 
			{
			
				$(HTML).find("[data-Validatearia=CEMI_UDYAMVERI]").text('Failed');
				$(HTML).find("[data-Validatearia=CEMI_UDYAMVERI]").text('Failed');
 	            $(HTML).find("[data-Validatearia=CEMI_UDYAMVERI]").removeClass("btn-GrnInplain");	
 		        $(HTML).find("[data-Validatearia=CEMI_UDYAMVERI]").removeClass("btn-yelInplain");
 		        $(HTML).find("[data-Validatearia=CEMI_UDYAMVERI]").addClass("btn-RedInplain"); 
 	            $("#"+Verify).val('Failed')
			}
			 else
			 { 
			$("[data-Validatearia="+Verify+"]").text('Failed');
 	        $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		    $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		    $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	        $("#"+Verify).val('Failed')
			$("#Save1").click();
			 }
		 }
	}
	else
	{
		alert(stm.split("!@#")[1]);
		return false;
	}
		},
    error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	alert("Error Occured. Contant IT!!!");
    	   }
	})
  }
  else
  {	
	 FncallDocChkLst(this,'Table2',{spname:'LSW_SKARZALIST',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#PrcsID').val(),brid:$("#"+Fld4).val(),MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||7','KARZAGRD')
     $(".KrazaPopup").click();
  }
}

function AutomPaym(LonID,Amt,GSTAmt,Page,AmtType)
{
	if($("#"+Amt).val()=="" || $("#"+GSTAmt).val()=="")
	{
		alert("Kindly enter the Payment Amount");
		return false;
	}
	$("#Save").click();
	
	var LoanID=$("#"+LonID).val();
	 
	$.ajax({
        url: "/TPLSW/Atom",
        type: 'POST',
        data: {Param1:LoanID,Param2:"Service|"+Page+"|"+AmtType,SPNAME:"LSW_SATOMAPICREATE",PRCSID:$("#PrcsID").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:false,
        //dataType: 'json',
       //contentType:'application/json',
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
	   	
        var w = "600";
        var h = "500";
	    
		var left = (screen.width/2)-(w/2);
	    var top = (screen.height/2)-(h/2);
	    var URL = stm;

	  $(".loader").show();	  
	  //childWindow =  window.open(URL, "PAYMENT GATEWAY", 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, //width='+w+', height='+h+', top='+top+', left='+left);
	var xml=UI_getdata($("#PrcsID").val(),URL,'','EMAIL','ATOM',"LSW_SSENDATOMLNK");
	alert("Link send successfully");
		},
    error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	alert("Error Occured. Contant IT!!!");
    	   }
	})
}

function CheckValidPanKyc(Id,Verify,FstNam,LstNam,CusType,CUSID,Addr1,Addr2,INCM1,INCM2,PROFILE,EMPADDRI,EMPADDRII,CONSTI,NaturBusi)
{
	if($("#"+Verify).val()!="Verified")
	{
	  IdVal=$("#"+Id).val()
	  if(IdVal=="")
	{
	alert("Kindly enter the Valid Number")
	return;
	}   
	  var Type=""
	  if($("#"+CusType).val()=="Individual")
	    {
		  Type="pan"
	    }
	  else if($("#"+CusType).val()=="Non-Individual")
	    {
		  Type="pan"
	    }
     else
        {
          Type=CusType
        }
	  
	var ProcessId=getUrlParam("PrcsID");
	var Type;
   		var OPXML = UI_getdata(ProcessId,Type,IdVal,"","","LSW_SAPIKYCDETLS");
		OPXML=OPXML.replace('<Resultset><a><Data>','')
		var JSONval=OPXML.replace('<Resultset><a><Data>','').replace('</Data></a></Resultset>','')
		
	$.ajax({
        url: "/TPLSW/TotalKyc",
        type: 'POST',
        data: {JSONval,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:false,
       // dataType: 'json',
       // contentType:'application/json',
        
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
        	 var obj = JSON.parse(stm)
        //alert(obj);
		      if($("#"+CusType).val()=="Individual")
		      {
        		 if(obj["status-code"] =='101' || obj["statusCode"] =='101')
                 {
            	  
        		$("[data-Validatearia="+Verify+"]").text('Verified');
        	    $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain");	
        		$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
        		$("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
        	    $("#"+Verify).val('Verified');
        	    $("#"+INCM1+'1').val('Yes');
        	    $("#"+INCM1+'1'). prop("checked", true);
        	  // $('#'+INCM1).is(':checked')==true
        	    $('#'+INCM1+'1').attr("disabled",false);
        	    $("."+Type).addClass('DOCMndtry');
        	    $("."+Type).show();
        	    if(Type=="pan")
        	    	{
        	    	 var str=obj["result"].name.replace("&", "AND");
					     str=str.replace(/["']/g, "");
        	    	 var Data=str.replace(" ","|");
        	    	 var FirstName=Data.split("|")[0]
        	    	 var LastName=Data.split("|")[1]
        	    	 $("#"+FstNam).val(FirstName);
        	    	 $("#"+LstNam).val(LastName);
					 $(".DPAN").hide();
        	    	 //$("#"+FatNam).val(FatherName);
        	    	 $("#Save1").click();
        	    	/* if( $("#"+FatNam).val() != "")
            		 {
        	    	 $("#"+FatNam).next().addClass('active');
        	    	 $("#"+FatNam).attr('disabled',true)
            		 }*/
					 
        	    	 if( $("#"+FstNam).val() != "")
            		 {
        	    	 $("#"+FstNam).next().addClass('active');
        	    	 $("#"+FstNam).attr('disabled',true)
            		 }
					 else
					 {
					   $("#"+FstNam).next().removeClass('active');
        	    	   $("#"+FstNam).attr('disabled',false)	 
					 }
        	    	 if( $("#"+LstNam).val() != "")
            		 {
        	    	 $("#"+LstNam).next().addClass('active');
        	    	 $("#"+LstNam).attr('disabled',true)
            		 }
					 else
					 {
					  $("#"+LstNam).next().removeClass('active');
        	    	  $("#"+LstNam).attr('disabled',false)
					 }
        	    	}
        	    
        	        var Name="";
        	    	var FatherName="";
        	    	var Address="";
        	    	var DOB="";
        	    	var CusId=$("#"+CUSID).val();
        	    	var ProcessId=getUrlParam("PrcsID");
        	    
        	    if(Type=="pan")
        	    	{
        	    	   Name=obj["result"].name;
        	    	}
        	    var xml=UI_getdata(ProcessId,Name+'|'+FatherName+'|'+Address+'|'+DOB,Type,CusId,"","LSW_TINSKARZADETL");

        	   	var OPXML = UI_getdata(ProcessId,'search',IdVal,"","","LSW_SAPIKYCDETLS");
        			OPXML=OPXML.replace('<Resultset><a><Data>','')
        		var JSONval=OPXML.replace('<Resultset><a><Data>','').replace('</Data></a></Resultset>','')
        	   
        	   $.ajax({
        	        url: "/TPLSW/TotalKyc",
        	        type: 'POST',
        	        data: {JSONval,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        	        async:false,
        	       // dataType: 'json',
        	       // contentType:'application/json',
        	        
        	        success: function(stm){        
        	       // var obj = JSON.parse(JSON.stringify(stm))
        	        	 var obj = JSON.parse(stm)
        	        //alert(obj);
        	   
        			 if(obj["status-code"]=='101' || obj["statusCode"]=='101')
        	            {  
        				  
        	 	        var Name="";
        	 	    	var FatherName="";
        	 	    	var Address="";
        	 	    	var DOB="";
        	 	    	var CusId=$("#"+CUSID).val();
        	 	    	var ProcessId=getUrlParam("PrcsID");
        	               
        	            var length=obj["result"].length
        	            $(".GST").val('');
        	            $(".GSTF").show();
        	            var PROFILEID=$($(".PROFILEVAL")[1]).attr('name')
  	 			          $("#"+PROFILEID).material_select();
        	            $(".PROFILEVAL").find('.GSTSAL').attr('disabled',true);
        	            $("span:contains('Salaried')").parent().addClass('GSTSAL');
         	 			$(".GSTSAL").addClass('disabled');
        	           // $("#"+PROFILE).val()
        	            
        	            var xml = "<Data>"
        	        	for(i=0;i<length;i++)
        	        	   {                   
        	        	      xml = xml +"<Row><GST>" +obj["result"][i].gstinId + "</GST></Row>"
        	        	   }
        	        	 	    	  // GST=obj["result"].gstinId;
        	        	       xml = xml  + "</Data>"
        	        	 var xml=UI_getdata(ProcessId,xml,CusId,"","","LSW_TINSGSTDETL");
        	        	    
        	        	       $("#BTNPANKARZAGRD").click();
        	        	       $(".GSTKrazaPopup").click();
        	             //$(".GSTKarzaGrd").click();
        	 	     }
        		else if(obj["statusCode"]=='103')
         	 	     {
        			   $(".GST").val('');
     	 	     	   $(".GSTF").hide();
     	 			    var PROFILEID=$($(".PROFILEVAL")[1]).attr('name')
     	 			       $("#"+PROFILEID).val('');
     	 			       $("#"+PROFILEID).material_select("destroy");	
     	 			       $("#"+PROFILEID).material_select();
     	 			  $(".PROFILEVAL").find('.GSTSAL').attr('disabled',false)
    	 	     	   $("span:contains('Salaried')").parent().addClass('GSTSAL');
    	 			   $(".GSTSAL").removeClass('disabled');
         	 	     }
        		 else if(obj["status"]=='504')
                    {
                	  /*$("[data-Validatearia="+Verify+"]").text('Failed');
                 	  $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
                 	  $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
                 	  $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
                 	  $("#"+Verify).val('Failed')
                      $("#"+INCM1+'1').val('No');
                	  $("#"+INCM1+'1'). prop("checked", false);
                       //$('#'+INCM1).is(':checked')==false
                        $("#"+INCM1).attr('disabled',true)
                 	    $("."+Type).hide();*/
                        alert(obj["error"]);
                        return false;
                    }
        		 else if(obj["status"]=='402')
             	   {
        			 /*$("[data-Validatearia="+Verify+"]").text('Failed');
                	 $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
                	 $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
                	 $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
                	 $("#"+Verify).val('Failed')
                     $("#"+INCM1+'1').val('No');
               	     $("#"+INCM1+'1'). prop("checked", false);
                     $('#'+INCM1).is(':checked')==false
                     $("#"+INCM1+'1').attr('disabled',true)
                	 $("."+Type).hide();*/
                       alert(obj["error"]);
                       return false;
             	   }
              else
        	 	  {
        	 	   /* $("[data-Validatearia="+Verify+"]").text('Failed');
        	 	    $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
        	 		$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
        	 		$("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
        	 	    $("#"+Verify).val('Failed')
        	 	    Type='pan';
        	 	    $("."+Type).hide();
        	 	    alert("Invalid PAN ID Number");
        	 	    if(Type=="pan")
        	     	{
        	     	 var str=obj["result"].name
        	     	 var Data=str.split(" ");
        	     	 var FirstName=Data[2];
        	     	 var LastName=Data[3];
        	     	 var FatherName=Data[0];
        	     	 $("#"+FstNam).val('');
        	     	 $("#"+LstNam).val('');
        	     	 $("#"+FatNam).val('');
        	     	 $("#"+FstNam).next().removeClass('active');
        	     	 $("#"+LstNam).next().removeClass('active');
        	     	 $("#"+FatNam).next().removeClass('active');
        	     	 $("#"+FstNam).attr('disabled',false)
        	     	 $("#"+FstNam).attr('disabled',false)
        	     	 $("#"+FstNam).attr('disabled',false)
        	     	}*/
        	    }
        	      	 
        	    },
        	    error: function(stm) {
        	    	 //window.alert(LoadFrmXML("V0125"))
        	    	alert("Error Occured. Contant IT!!!");
        	    	   }
        	    });  
                      //$(".KrazaPopup").click();
        	 }
        	 else if(obj["status"]=='504')
              {
        		$("[data-Validatearia="+Verify+"]").text('Failed');
         	    $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
         		$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
         		$("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
         	    $("#"+Verify).val('Failed')
         	    $("#"+INCM1+'1').val('No');
         	    $("#"+INCM1+'1'). prop("checked", false);
               //$('#'+INCM1).is(':checked')==false
                $("#"+INCM1+'1').attr('disabled',true)
         	    $("."+Type).hide();
                alert(obj["error"]);
                return false;
              }
			  else if(obj["status"]=='402')
             	   {
        			  $("[data-Validatearia="+Verify+"]").text('Failed');
                	  $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
                	  $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
                	  $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
                	  $("#"+Verify).val('Failed')
                      $("#"+INCM1+'1').val('No');
               	      $("#"+INCM1+'1'). prop("checked", false);
                      //$('#'+INCM1).is(':checked')==false
                       $("#"+INCM1+'1').attr('disabled',true)
                	    $("."+Type).hide();
                       alert(obj["error"]);
                       return false;
             	   }
				   else
 	                 {
 	                    $("[data-Validatearia="+Verify+"]").text('Failed');
 	                    $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		                $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		                $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	                    $("#"+Verify).val('Failed')
 	                    $("#"+INCM2).val('No');
 	                    $("#"+INCM2). prop("checked", false);
                                //$('#'+INCM2).is(':checked')==false
                       $('#'+INCM2).attr("disabled",true)
 	                     Type='pan';
 	                      $("."+Type).hide();
 	                        alert("Invalid ID Number");
 	                    if(Type=="pan")
     	                  {
     	                    var str=obj["result"].name
     	                    var Data=str.split(" ");
     	                    var FirstName=Data[2];
     	                    var LastName=Data[3];
     	                    var FatherName=Data[0];
     	                    $("#"+FstNam).val('');
     	                    $("#"+LstNam).val('');
     	                    $("#"+FatNam).val('');
     	                    $("#"+FstNam).next().removeClass('active');
     	                    $("#"+LstNam).next().removeClass('active');
     	                    $("#"+FatNam).next().removeClass('active');
     	                    $("#"+FstNam).attr('disabled',false)
     	                    $("#"+FstNam).attr('disabled',false)
     	                    $("#"+FstNam).attr('disabled',false)
     	}
 	 }
		  }
	  else if($("#"+CusType).val()=="Non-Individual")
	    {
		  if(obj["status-code"] =='101' || obj["statusCode"] =='101')
          {  
 		   $("[data-Validatearia="+Verify+"]").text('Verified');
 	       $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain");	
 		   $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		   $("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
 	       $("#"+Verify).val('Verified')	    
           $("#"+INCM2).val('Yes');
             // $('#'+INCM2).is(':checked')==true
 	       $("#"+INCM2). prop("checked", true);
           $('#'+INCM2).attr("disabled",false)
        	   if(Type=="pan")
                {
           	     var str=obj["result"].name.replace("&", "AND");
					     str=str.replace(/["']/g, "");
           	     $("#"+FstNam).val(str);
           	     $("#"+FstNam).next().addClass('active');
           	     $("#"+FstNam).attr('disabled',true)
           	     $("."+Type).addClass('DOCMndtry');
         	     $("."+Type).show();
				 $(".DPAN").hide();
           	     $("#Save1").click();
           	     
         	    if(Type=="pan")
    	    	{
    	    	   Name=obj["result"].name;
    	    	}
         	   var CusId=$("#"+CUSID).val();
         	   var ProcessId=getUrlParam("PrcsID");
    	       var xml=UI_getdata(ProcessId,Name,Type,CusId,"","LSW_TINSKARZADETL");

        	   	var OPXML = UI_getdata(ProcessId,'search',IdVal,"","","LSW_SAPIKYCDETLS");
        			OPXML=OPXML.replace('<Resultset><a><Data>','')
        		var JSONval=OPXML.replace('<Resultset><a><Data>','').replace('</Data></a></Resultset>','')
        	   
        	   $.ajax({
        	        url: "/TPLSW/TotalKyc",
        	        type: 'POST',
        	        data: {JSONval,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        	        async:false,
        	       // dataType: 'json',
        	       // contentType:'application/json',
        	        
        	        success: function(stm){        
        	       // var obj = JSON.parse(JSON.stringify(stm))
        	        	 var obj = JSON.parse(stm)
        	        //alert(obj);
        	   
        			  if(obj["status-code"]=='101' || obj["statusCode"]=='101')
        	          {  
        	 		
        	 	        var Name="";
        	 	    	var FatherName="";
        	 	    	var Address="";
        	 	    	var DOB="";
        	 	    	var CusId=$("#"+CUSID).val();
        	 	    	var ProcessId=getUrlParam("PrcsID");
        	 	    	$(".GSTF").show();   
        	                var GST=obj["result"].gstinId
        	                if(GST != "")
        	                	{
        	                	 var length=obj["result"].length
        	                	 var xml = "<Data>"
        	        	               for(i=0;i<length;i++)
        	        	                   {                   
        	        	                    xml = xml +"<Row><GST>" +obj["result"][i].gstinId + "</GST></Row>"
        	        	                   }
        	        	 	    	  // GST=obj["result"].gstinId;
        	        	                xml = xml  + "</Data>"
        	        	 	    var xml=UI_getdata(ProcessId,xml,CusId,"","","LSW_TINSGSTDETL");
        	        	             $("#BTNPANKARZAGRD").click();
        	        	             $(".GSTKrazaPopup").click();
        	                	}
        	                else
        	                	{
        	                	  alert('GST is not available');
        	                	  return false;
        	                	}
        	             //$(".GSTKarzaGrd").click();
        	 	     }
        		 else if(obj["statusCode"]=='103')
     	 	         {
        			    $(".GSTF").hide();
     	                alert('GST is not available');
     	                 return false;
     	             }
        		 else if(obj["status"]=='504')
                    {
                	 // $("[data-Validatearia="+Verify+"]").text('Failed');
                 	 // $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
                 	  //$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
                 	  //$("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
                 	 // $("#"+Verify).val('Failed')
                    //  $("#"+INCM1).val('No');
                	//  $("#"+INCM1). prop("checked", false);
                       //$('#'+INCM1).is(':checked')==false
                       // $("#"+INCM1).attr('disabled',true)
                 	   // $("."+Type).hide();
                        alert(obj["error"]);
                        return false;
                    }
        		 else if(obj["status"]=='402')
             	 {
        			  //$("[data-Validatearia="+Verify+"]").text('Failed');
                	  //$("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
                	  //$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
                	 // $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
                	 // $("#"+Verify).val('Failed')
                      //$("#"+INCM1).val('No');
               	      //$("#"+INCM1). prop("checked", false);
                      //$('#'+INCM1).is(':checked')==false
                      // $("#"+INCM1).attr('disabled',true)
                	   // $("."+Type).hide();
                       alert(obj["error"]);
                       return false;
             	 }
        	 	/* else
        	 	 {
        	 	    $("[data-Validatearia="+Verify+"]").text('Failed');
        	 	    $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
        	 		$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
        	 		$("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
        	 	    $("#"+Verify).val('Failed')
        	 	    Type='pan';
        	 	    $("."+Type).hide();
        	 	    alert("Invalid PAN ID Number");
        	 	    if(Type=="pan")
        	     	{
        	     	 var str=obj["result"].name
        	     	 var Data=str.split(" ");
        	     	 var FirstName=Data[2];
        	     	 var LastName=Data[3];
        	     	 var FatherName=Data[0];
        	     	 $("#"+FstNam).val('');
        	     	 $("#"+LstNam).val('');
        	     	 $("#"+FatNam).val('');
        	     	 $("#"+FstNam).next().removeClass('active');
        	     	 $("#"+LstNam).next().removeClass('active');
        	     	 $("#"+FatNam).next().removeClass('active');
        	     	 $("#"+FstNam).attr('disabled',false)
        	     	 $("#"+FstNam).attr('disabled',false)
        	     	 $("#"+FstNam).attr('disabled',false)
        	     	}
        	    }*/
        	      	 
        	    },
        	    error: function(stm) {
        	    	 //window.alert(LoadFrmXML("V0125"))
        	    	alert("Error Occured. Contant IT!!!");
        	    	   }
        	    });   
           }
 	   }
	 else if(obj["status"]=='504')
      {
      	  $("[data-Validatearia="+Verify+"]").text('Failed');
       	  $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
       	  $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
       	  $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
       	  $("#"+Verify).val('Failed')
            $("#"+INCM1).val('No');
      	  $("#"+INCM1). prop("checked", false);
             //$('#'+INCM1).is(':checked')==false
              $("#"+INCM1).attr('disabled',true)
       	    $("."+Type).hide();
              alert(obj["error"]);
              return false;
       }
	  else if(obj["status"]=='402')
   	  {
		  $("[data-Validatearia="+Verify+"]").text('Failed');
      	  $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
      	  $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
      	  $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
      	  $("#"+Verify).val('Failed')
            $("#"+INCM1).val('No');
     	      $("#"+INCM1). prop("checked", false);
            //$('#'+INCM1).is(':checked')==false
             $("#"+INCM1).attr('disabled',true)
      	    $("."+Type).hide();
             alert(obj["error"]);
             return false;
   	  }
 	 else
 	 {
 	    $("[data-Validatearia="+Verify+"]").text('Failed');
 	    $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
 		$("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 		$("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
 	    $("#"+Verify).val('Failed')
 	    $("#"+INCM2).val('No');
 	    $("#"+INCM2). prop("checked", false);
        //$('#'+INCM2).is(':checked')==false
        $('#'+INCM2).attr("disabled",true)
 	    Type='pan';
 	    $("."+Type).hide();
 	    alert("Invalid ID Number");
 	    if(Type=="pan")
     	{
     	 var str=obj["result"].name
     	 var Data=str.split(" ");
     	 var FirstName=Data[2];
     	 var LastName=Data[3];
     	 var FatherName=Data[0];
     	 $("#"+FstNam).val('');
     	 $("#"+LstNam).val('');
     	 $("#"+FatNam).val('');
     	 $("#"+FstNam).next().removeClass('active');
     	 $("#"+LstNam).next().removeClass('active');
     	 $("#"+FatNam).next().removeClass('active');
     	 $("#"+FstNam).attr('disabled',false)
     	 $("#"+FstNam).attr('disabled',false)
     	 $("#"+FstNam).attr('disabled',false)
     	}
 	 }
   }
   else
      {		  
	 if(obj["status-code"]=='101' || obj["statusCode"]=='101')
          {   	  
 	    $("[data-Validatearia="+Verify+"]").text('Verified');
 	    $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain");	
 	    $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
 	    $("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
 	    $("#"+Verify).val('Verified')
 	    /*$("#"+FstNam).attr('disabled',true)
 	     if($("#"+FstNam).val() != "")
 	       {
 	    	 $("#"+FstNam).val(obj["result"].tradeNam);
 	    	 $("#"+FstNam).next().addClass("active");
 	    	 $("#"+FstNam).attr('disabled',true)
 	       }*/
		   	if($("#"+CONSTI).val()=="Proprietorship" || $("#"+CONSTI).val()=="Society" || $("#"+CONSTI).val()=="Trustee")
 	    	{
				var TradName=obj["result"].tradeNam.replace("&", "AND");
 	    	 $("#"+FstNam).val(TradName);
 	    	 $("#"+FstNam).next().addClass('active');
 	    	}
 	    var GSTAddr=obj["result"].pradr.adr.replace("&", "AND");
		   GSTAddr=GSTAddr.replace(/["']/g, "");
		var NTR=obj["result"].pradr.ntr.replace("&", "AND");
		
 	   $("#"+NaturBusi).val(NTR);
 	   if($("#"+LstNam).val()=="Non-Individual")
 		   {
 		   
 		  if(GSTAddr != "" && GSTAddr != undefined)
	    	 {
 			  //$(".CONDLOAD").click();
	    var length=GSTAddr.split(',').length	    
	    var Event=GSTAddr.split(',').length%2
	    if(Event=="1")
	    	{
				var NonIndAddr1=(GSTAddr.split(',')[0])+','+(GSTAddr.split(',')[1])+','+(GSTAddr.split(',')[2])+','+(GSTAddr.split(',')[3])
	    	  $("#"+Addr1).val(NonIndAddr1.replace(/,undefined/g,' '))
	    	  $("#"+Addr1).next().addClass("active")
			   var NonIndAddr2=(GSTAddr.split(',')[4])+','+(GSTAddr.split(',')[5])+','+(GSTAddr.split(',')[6])
	    	  $("#"+Addr2).val(NonIndAddr2.replace(/,undefined/g,' '));
	 	      $("#"+Addr2).next().addClass("active")
	    	}
	    else
	    	{
				var NonIndAddr1=(GSTAddr.split(',')[0])+','+(GSTAddr.split(',')[1])+','+(GSTAddr.split(',')[2])
	    	  $("#"+Addr1).val(NonIndAddr1.replace(/,undefined/g,' '))
	    	  $("#"+Addr1).next().addClass("active")
			   var NonIndAddr2=(GSTAddr.split(',')[3])+','+(GSTAddr.split(',')[4])+','+(GSTAddr.split(',')[5])
	    	  $("#"+Addr2).val(NonIndAddr2.replace(/,undefined/g,' '));
	 	      $("#"+Addr2).next().addClass("active")
	    	}
	      }
		  else
		  {
			  
		  }
 	    }
 	   else if($("#"+LstNam).val()=="Individual")
 		   {
 		  if(GSTAddr != "" && GSTAddr != undefined)
	    	 {
 			 
	    var length=GSTAddr.split(',').length	    
	    var Event=GSTAddr.split(',').length%2
	    if(Event=="1")
	    	{
				var IndAddr1=(GSTAddr.split(',')[0])+','+(GSTAddr.split(',')[1])+','+(GSTAddr.split(',')[2])+','+(GSTAddr.split(',')[3])
	    	  $("#"+EMPADDRI+"1").val(IndAddr1.replace(/,undefined/g,' '))
	    	  $("#"+EMPADDRI+"1").next().addClass("active")
			   var IndAddr2=(GSTAddr.split(',')[4])+','+(GSTAddr.split(',')[5])+','+(GSTAddr.split(',')[6])
	    	  $("#"+EMPADDRII+"1").val(IndAddr2.replace(/,undefined/g,' '));
	 	      $("#"+EMPADDRII+"1").next().addClass("active")
	    	}
	    else
	    	{
				var IndAddr1=(GSTAddr.split(',')[0])+','+(GSTAddr.split(',')[1])+','+(GSTAddr.split(',')[2])
	    	  $("#"+EMPADDRI+"1").val(IndAddr1.replace(/,undefined/g,' '))
	    	  $("#"+EMPADDRI+"1").next().addClass("active")
			   var IndAddr2=(GSTAddr.split(',')[3])+','+(GSTAddr.split(',')[4])+','+(GSTAddr.split(',')[5])
	    	  $("#"+EMPADDRII+"1").val(IndAddr2.replace(/,undefined/g,' '));
	 	      $("#"+EMPADDRII+"1").next().addClass("active")
	    	}
	      }
		  else
		  {
			  
		  }
 		 }
       }
	 else if(obj["status"]=='504')
        {
 	     $("[data-Validatearia="+Verify+"]").text('Failed');
  	     $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
  	     $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
  	     $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
  	     $("#"+Verify).val('Failed')         
         alert(obj["error"]);
         return false;
       }
	   else if(obj["status"]=='402')
        {
 	     $("[data-Validatearia="+Verify+"]").text('Failed');
  	     $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
  	     $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
  	     $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
  	     $("#"+Verify).val('Failed')         
         alert(obj["error"]);
         return false;
       }
	 else
	   {
	     $("[data-Validatearia="+Verify+"]").text('Failed');
	     $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");	
	     $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");
	     $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain"); 
	     $("#"+Verify).val('Failed')
	     $("#"+FstNam).val('')
	     $("#"+FstNam).next().removeClass("active")
	     $("#"+Addr1).val('')
	     $("#"+Addr2).val('')
	     $("#"+Addr2).next().removeClass("active")
	     $("#"+Addr1).next().removeClass("active")
	     alert("Invalid ID Number");
	   }		  
      }   	 
    },
    error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	alert("Error Occured. Contant IT!!!");
    	   }
});
	}
	else
	  {
		/*if(CusType=="gstdetailed")
			{
			alert("GST Number Already Verified.")
			   return false;
			}
		else
			{
			 alert("PAN Number Already Verified.")
			   return false;
			}*/
		if($("#"+CusType).val()=="Non-Individual")
			{
			  $("#BTNPANKARZAGRD").click();
              $(".GSTKrazaPopup").click();
			}
		else if($("#"+CusType).val()=="Individual")
			{
				if($("#"+PROFILE).val() == "SEP" || $("#"+PROFILE).val() == "SENP")
				{
				 $("#BTNPANKARZAGRD").click();
                 $(".GSTKrazaPopup").click();
				}
				else
				{
			       $("#BTNKARZAGRD").click();
	               $(".KrazaPopup").click();
				}  
			}
	  }
}

function CheckMobValidKyc(Id,Type,Cusid,Verify,Category,Y)
{
	if(Category=="SMS")
	{
		$(".TILE").text('Mobile OTP Verification');
	}
	else if(Category=="SMSII")
	{
		$(".TILE").text('Mobile 2 OTP Verification');
	}
	else
	{	
		$(".TILE").text('Email OTP Verification');
	}
	
	if($("#"+Verify).val() !="Verified")
	{
     if(Type=="OTP")
     {
             IdVal=$("#"+Id).val()

            if(IdVal=="")
            {
              alert("Kindly enter the Valid Mail ID")
              return;
            }  
			$("#Save2").click();
       /*  var param1="";

    //var param2="C19000065_U1";

         var param2="";

    var param3=IdVal;

    var param4="";

    var param5="";

    var spname1="SAM_SgetRecepientDataToSMSFrOTP";

    var spname2="LSW_supdateSMSstatus";

           //valid();

           $.ajax({

                  type : "POST",

                  url : "/TPLSW/sendSMS",

                  data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,spname1: spname1,spname2: spname2 },
                  success : function(data){
					  
					  
					  
                    if (data.split('|')[0] == "Success")
                          {                       
                        alert("OTP Sent Successfully");

                           $("#MobPopup").click();

                           $('#RequestId').val(IdVal)

                           $('#HdnFieldId').val(Verify)

                           $("#"+CONBTN).show();

                           $("#"+CONBTNI).hide();

                          }
                    else
                          {

if(data.split('|')[1]=='N')
{
                        alert(data.split('|')[2]);

                           $("#MobPopup").click();

                           $('#RequestId').val(IdVal)

                           $('#HdnFieldId').val(Verify)

                           $("#"+CONBTN).show();

                           $("#"+CONBTNI).hide();

}
else
{


                          $('#RequestId').val("");

                           $('#HdnFieldId').val("");

                          alert("OTP Failed");
}
                          }

                        //$("#Degree1").val($("#Degree1 option:first").val());

                        //$("#tablefetch option:first").attr('selected','selected');

                         //alert("Success");

                  },

                  error : function(e){

                        //alert("Fail");

                  }

           });*/
		   
		   
		 var SendOTP=UI_getdata(Y,$("#PrcsID").val(),$("#"+Cusid).val(),Category,"OTP","LSW_SSMSEMAILVERIFY"); 
		 
		 if($(SendOTP).find("Result").text()=="Success")
		 {
		     alert("OTP Sent Successfully");
			 if(Category=="SMS")
				{
				$("#MOBOTP").show();
				$("#EMAILOTP").hide();
				$("#MOBOTPII").hide();
				}
             else if(Category=="SMSII")
				{
				$("#MOBOTP").hide();
				$("#EMAILOTP").hide();
				$("#MOBOTPII").show();
				}
				else
				{
				$("#MOBOTP").hide();
				$("#EMAILOTP").show();
				$("#MOBOTPII").hide();
				}

               $("#MobPopup").click();
			   $('#HdnFieldId').val(Verify);
			   $('#FldVal').val(IdVal);
               $('#RequestId').val($("#"+Cusid).val())
              // $('#HdnFieldId').val(Verify)
		 }
     }
    else if(Type=="status")
     {
             var Verify = $('#HdnFieldId').val();
			 
             var LgnAttmpt =UI_getdata($("#PrcsID").val(),$('#RequestId').val(),$('#MobOTP').val(),$('#FldVal').val(),Category,"LSW_SValdtOTP1");          

             if($(LgnAttmpt).find('Result').text()=="OTP Verified")
                  {
					  
			var ver=UI_getdata("",$("#PrcsID").val(),$('#RequestId').val(),Category,"OTP Verification","LSW_SSMSEMAILVERIFY"); 		  
		 
         $("[data-Validatearia="+Verify+"]").text('Verified');
           
		   
             $("[data-Validatearia="+Verify+"]").addClass("btn-GrnInplain"); 

               $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");

               $("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain");

             $("#"+Verify).val('Verified');
               //$("[data-Validatearia="+Verify+"]").val('Verified')
             $("#MOBPOPCLOSE").click();
         $("#RequestId").val('');
         $('#MobOTP').val('');
         //$("#"+Id).val('')
                  }
            else
         {
                   alert($(LgnAttmpt).find('Result').text());
				   
         $("[data-Validatearia="+Verify+"]").text('Failed');

          $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain"); 

            $("[data-Validatearia="+Verify+"]").removeClass("btn-yelInplain");

            $("[data-Validatearia="+Verify+"]").addClass("btn-RedInplain");

          $("#"+Verify).val('Failed')
            $("[data-Validatearia="+Verify+"]").val('Failed')
          $("."+Type).hide();

       $('#MobOTP').val('');

       $('#RequestId').val('');

          $("#MOBPOPCLOSE").click();
         }
	  }
         }
	else
		{
		if(Category=="SMS")
	     {	
		alert("Mobile Number Already Verified.")
		 return false;
		 }
		 else if(Category=="SMSII")
	     {	
		alert("Mobile Number 2 Already Verified.")
		 return false;
		 }
		 else 
		 {	
		   alert("Email ID Already Verified.")
		   return false;
		 }
		}
}

function WFComplete (ACTVID,WDATA,SNAME)
{
	if (SNAME == "")
		{
		SNAME = "LSW_SWFCompleteCALL";
		}
	
	 $.ajax({
         
         url: "/TPLSW/WFCOMPLETE",
         //dataType: "json",
         data: {ACTVID : ACTVID,WDATA: WDATA,SNAME: SNAME,Prvnt : $("#Prvnt").val()},
         async: true,	      
         type: "POST",
         success: function(res) {
         		            	
         if	(res.split("~")[1] == "Workflow Submitted")
         	{
         	alert("File Submitted Successful");
         	 
         if($("#DMY5").val().split("|")[2]=="PreLogin" )	
		 {
			 UI_getdata($("#PrcsID").val(),"","","","Data Entry submission","LSW_SSMSEMAILLINKSND");
		 }
		 /* if(($("#DMY5").val().split("|")[2]=="RCMDI")||($("#DMY5").val().split("|")[2]=="RCMDII"))
		//if(($("#DMY5").val().split("|")[2]=="RCMDII"))
		 {
			 if(parseInt($("#HIDNLVL").val().replace('L',''))<=parseInt($("#DMY6").val().replace('L','')))
			 {
			 UI_getdata($("#PrcsID").val(),"","","","In-principle approval - 1","LSW_SSMSEMAILLINKSND");
			 UI_getdata($("#PrcsID").val(),"","","","In-principle approval - 2","LSW_SSMSEMAILLINKSND");
			 }
		 }
		 if($("#DMY5").val().split("|")[2]=="ReCredit")	
		 {
			 UI_getdata($("#PrcsID").val(),"","","","Final Approval","LSW_SSMSEMAILLINKSND");
		 } */
		 UI_getdata($("#PrcsID").val(),"","","","","LSW_SSMSEMAIL_SEND");
        	$(location).attr('href',window.location.origin + "/TPLSW/MyApplication")   
         	}
         else
         	{
				// Added for Jira HE-5201 Start
				if($("#DMY5").val().split("|")[2]=="RCMDII" || $("#DMY5").val().split("|")[2]=="RCMDI")
				{
					var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKWFRECMLEL");
				}
				// Added for Jira HE-5201 End
				
         	alert("Loan Submission Failed");
         	}
             //console.log(res)
         },
         error: function(res) {
			 // Added for Jira HE-5201 Start
         	if($("#DMY5").val().split("|")[2]=="RCMDII" || $("#DMY5").val().split("|")[2]=="RCMDI")
				{
					var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKWFRECMLEL");
				}
			// Added for Jira HE-5201 End
         	alert("Loan Submission Failed");
	            }
     });
	
}


function WFComplete_V1 (ACTVID,WDATA,SNAME,REDIRECTPG)
{
	
	if (SNAME == "")
		{
		SNAME = "LSW_SWFCompleteCALL";
		}
	
	 $.ajax({
         
         url: "/TPLSW/WFCOMPLETE",
         //dataType: "json",
         data: {ACTVID : ACTVID,WDATA: WDATA,SNAME: SNAME,Prvnt : $("#Prvnt").val()},
         async: true,	      
         type: "POST",
         success: function(res) {
         		            	
         if	(res.split("~")[1] == "Workflow Submitted")
         	{
         	alert("File Submitted Successful");
         	 $(location).attr('href',window.location.origin + "/TPLSW/"+REDIRECTPG)         	
         	}
         else
         	{
         	alert("Loan Submission Failed");
         	}
             //console.log(res)
         },
         error: function(res) {
         	
         	alert("Loan Submission Failed");
	            }
       
     });
	
}

function WFVndActvInit(ACTVID,WDATA,SNAME)
{
	
	if (SNAME == "")
		{
		SNAME = "LSW_SWFACTVINITCALL";
		}
	var result = "";
	 $.ajax({
         
         url: "/TPLSW/WFVNDACTVINIT",
         //dataType: "json",
         data: {ACTVID : ACTVID,WDATA: WDATA,SNAME: SNAME,Prvnt : $("#Prvnt").val()},
         async: false,	      
         type: "POST",
         success: function(res) {
         		            	
         if	(res.split("~")[0] == "completed")
         	{
        	 result = "Success";
         	//alert("File Submitted Successful");
         	// $(location).attr('href',window.location.origin + "/TPLSW/Home")         	
         	}
         else
         	{
        	 result = "Fail";
         	}
             //console.log(res)
         },
         error: function(res) {
         	
        	 result = "Fail";
	            }
       
     });
	
	 return result;
}

function NXTTAB(event)
{
 
	//if ($(event).attr("data-card")) + 1)
		
	var cardchk = "";
	
		for (i=parseInt($(event).attr("data-card")) + 1;i<$(".admin-panel .Formaccordion .card").length;i++)
	{

if (($($(".admin-panel .Formaccordion .card")[i]).length > 0 && $($(".admin-panel .Formaccordion .card")[i]).is(":visible")) == true)
 {
 

cardchk="Y";
 $($($(".admin-panel .Formaccordion .card")[i]).find("a.AFormaccordion")).click()
 i=1000;
 }


	}
	
	
 /*if (($($(".admin-panel .Formaccordion .card")[parseInt($(event).attr("data-card")) + 1]).length > 0 && $($(".admin-panel .Formaccordion .card")[parseInt($(event).attr("data-card")) + 1]).is(":visible")) == true)
 {
 $($($(".admin-panel .Formaccordion .card")[parseInt($(event).attr("data-card")) + 1]).find("a.AFormaccordion")).click()
 }
else if ($($(".admin-panel .Formaccordion .card")[parseInt($(event).attr("data-card")) + 2]).length > 0 &&
		  $($(".admin-panel .Formaccordion .card")[parseInt($(event).attr("data-card")) + 2]).is(":visible") == true)
		 {
		 $($($(".admin-panel .Formaccordion .card")[parseInt($(event).attr("data-card")) + 2]).find("a.AFormaccordion")).click()
		 }*/
		 if($($(".admin-panel .Formaccordion .card")[0]).hasClass("CAM")==true && $("#PrMs9").val() == "FormPageTab5" && $("#PrMs10").val() == "FormMainTab6")
		 {
			 cardchk="N";
		 }

if (cardchk	== "Y")
{

}		 
else if ($(event).closest(".DYNROW").next().length > 0  )
	{	
	 var scrollPos =  $(event).closest(".DYNROW").next().offset().top;
	 $(window).scrollTop(scrollPos - 80);
	
	}
else
{
	 
	//var a=0;

if ($(".FormPageSubTab li.active").next().length > 0)
{
	
	$(".FormPageSubTab li.active").next().click();
	
}
	
else if ($(".FormPageMultiTab li.active").next().length > 0)
	  { 	
	if ($(".FormPageMultiTab li.active").next().hasClass('FormPageMultiTabAdd') == false)
		{
	
		$(".FormPageMultiTab li.active").next().click();
		
		}
	else if ($(".FormPageTab li.active").next().length > 0)
	  { 
		
		if($(".FormPageTab li.active").next().attr("data-required")=='Y')
			{
			 var xml=UI_getdata($(".FormPageTab li.active").attr('id'),$("#PrcsID").val(),"C",$(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"LSW_SPAGEFILEMILESTONCOMPL");		

			 $(".FormPageTab li.active").next().click();
			}
		else
			{
			  var xml=UI_getdata($(".FormPageTab li.active").attr('id'),$("#PrcsID").val(),"C",$(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"LSW_SPAGEFILEMILESTONCOMPL");
			  var xml=UI_getdata($(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"C","","","LSW_TFILEMILESTONCOMPL")  
	          $(".FormMainTabs li.active").next().click();
			}
	  }
	 else
	  {
			var xml=UI_getdata($(".FormPageTab li.active").attr('id'),$("#PrcsID").val(),"C",$(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"LSW_SPAGEFILEMILESTONCOMPL");
			var xml=UI_getdata($(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"C","","","LSW_TFILEMILESTONCOMPL")  
	         $(".FormMainTabs li.active").next().click();
	  }
	  }	
else if ($(".FormPageTab li.active").next().length > 0)
  { 
	if($("#VERTICAL").val() == "UCV Eco" && $("#PrMs10").val() == "FormMainTab4"  && $(".FormPageTab li.active").next().is(":visible") == false)
	{
		$(".FormMainTabs li.active").next().click();
	}
	else{
	if($(".FormPageTab li.active").next().attr("data-required")=='Y')
		{
		  var xml=UI_getdata($(".FormPageTab li.active").attr('id'),$("#PrcsID").val(),"C",$(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"LSW_SPAGEFILEMILESTONCOMPL");
	      $(".FormPageTab li.active").next().click();	
		}
	else
		{
		   var xml=UI_getdata($(".FormPageTab li.active").attr('id'),$("#PrcsID").val(),"C",$(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"LSW_SPAGEFILEMILESTONCOMPL"); 
		   var xml=UI_getdata($(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"C","","","LSW_TFILEMILESTONCOMPL")  
	       $(".FormMainTabs li.active").next().click();
		}
	}
  }
 else
  {
	   var xml=UI_getdata($(".FormPageTab li.active").attr('id'),$("#PrcsID").val(),"C",$(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"LSW_SPAGEFILEMILESTONCOMPL"); 
	   var xml=UI_getdata($(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"C","","","LSW_TFILEMILESTONCOMPL")  
       $(".FormMainTabs li.active").next().click();
  }
 }

//$("." + TABID).click();
}


function NXTTABA(event,Type)
{
	//if ($(event).attr("data-card")) + 1)

	if (Type != "TAB")
		{
	
if (($($(".admin-panel .card")[parseInt($(event).attr("data-card")) + 1]).length > 0 && $($(".admin-panel .card")[parseInt($(event).attr("data-card")) + 1]).is(":visible")) == true)
 {
 $($($(".admin-panel .card")[parseInt($(event).attr("data-card")) + 1]).find("a.AFormaccordion")).click()
 }
else if ($($(".admin-panel .card")[parseInt($(event).attr("data-card")) + 2]).length > 0 &&
		  $($(".admin-panel .card")[parseInt($(event).attr("data-card")) + 2]).is(":visible") == true)
		 {
		 $($($(".admin-panel .card")[parseInt($(event).attr("data-card")) + 2]).find("a.AFormaccordion")).click()
		 }
		}
else
 {
 
	//var a=0;
	
if ($(".FormPageMultiTab li.active").next().length > 0)
	  { 	
	if ($(".FormPageMultiTab li.active").next().hasClass('FormPageMultiTabAdd') == false)
		{
		 $(".FormPageMultiTab li.active").next().click();
		}
	else if ($(".FormPageTab li.active").next().length > 0)
	  { 
	 $(".FormPageTab li.active").next().click();
	  }
	 else
	  {
	  $(".FormMainTabs li.active").next().click();
	  }
		
	  }	
else if ($(".FormPageTab li.active").next().length > 0)
  { 
 $(".FormPageTab li.active").next().click();
  }
 else
  {
	var xml=UI_getdata($(".FormMainTabs li.active").attr('id'),$("#PrcsID").val(),"C","","","LSW_TFILEMILESTONCOMPL")  
  $(".FormMainTabs li.active").next().click();
  }
 }

//$("." + TABID).click();
}


function GridDocFldUpldHndlr(id,docu)
{

var Val=$(id).val()


if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'Verification_Upload';
    var names="";
    var descrptns="";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
 var fd = new FormData();
   var vrsnno= "";
	var prodata = "";
var CountAttch=1;
	
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
			 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
			 {
				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
			 }
	         descrptns += 'FieldDocument'+',';
	     }
	 }
	 

 	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
   //  var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
	    var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename

		var xml=UI_getdata(FileType,FileSize,"","","","LSW_SGETKYCDOCUMNTTYPE")
		
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'NO')
	{
		alert("Upload Only Image and PDF")
		return
    }	 
 names=names+'.'+FileType	
var y=  names;
var specialChars = "<>&#^|~`"
var check = function(string){
    for(i = 0; i < specialChars.length;i++){
        if(string.indexOf(specialChars[i]) > -1){
            return true
        }
    }
    return false;
}

if(check(y) == false){
    // Code that needs to execute when none of the above is in the string
}else{
    alert('File name contains special character please remove and upload');
	$(id).closest('td').find('input[type="file"]').val('')
	return;
}
	 
 ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	        url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val(),
	        data: fd,
			async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
			if(data=="Fail")
	        		{
						 ajaxindicatorstop();
	        		alert(LoadFrmXML("V0119"));
					return
	        		}
			else{
				$(id).val(data.split('~')[2])
				
				//AttchDmsIns(data,'upload',prodata);
				//$(id).val('View');
				/*$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
				$(id).closest('td').find('input[type="file"]').attr('disabled',true)
				$(id).closest('td').find('input[type="file"]').val('');
				$(id).closest('td').find('input[type="file"]').hide();
			//	$(id).closest('td').replace('','');
			//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
				
				//
				
				$(id).closest('.md-form').find('span').remove()
				 $(id).val('')
		
			    $(id).val(data.split('~')[2])
				var UPLOAD=docu+'UPLOAD'
				$('#'+UPLOAD).hide();
				var VIEW=docu+'VIEW'
				$('#'+VIEW).show();
				$(id).closest('.md-form').append('<span class="name">'+names.slice(0,-1)+'</span>');
				
				*/
			
					ajaxindicatorstop();
					alert(LoadFrmXML("V0118"));
					return
					
				}	
					 ajaxindicatorstop(); 
	        },
	        failure:function(data)
	        {
	     		  ajaxindicatorstop();
					alert(LoadFrmXML("V0119"));
					return
	        	
	        }
	    });
		
		  ajaxindicatorstop();
		  }
		  else{
		  
		  alert('select the file to upload');
		  }

		 

	  
}

function ScrnFileDownload(RedirectURL)
{
	var filename = RedirectURL.substring(RedirectURL.lastIndexOf('/')+1);
	var Extn = RedirectURL.substring(RedirectURL.lastIndexOf('.')+1);
	
	//window.open(RedirectURL,'_blank','toolbar=yes');

		if (Extn == "msg")
		{

		var link = document.createElement("a");
	document.body.appendChild(link);
   // link.download = 'Report';
    link.href = RedirectURL;
    link.click();

		}
		else
		{
			var link = document.createElement("a");
	//document.body.appendChild(link);
   link.download = filename;
    link.href = RedirectURL;
    link.click();	
			
		}
	
}


function GrdDocDwnld(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
    
    
		    if (url != "")
		    	{
		    	
	//if(AcctNo!=""){
	//RedirectURL = url.replace("XXDMSIDXX",$("#"+id).val().split("\\")[0]);
	
	if ($("#"+id).val().split("\\")[0] == "")
		
		{
			alert("No Attachments Available to View");
			return;
		}
	
	RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + $("#"+id).val().split("\\")[0];
	
	$("#DocView").attr("src", RedirectURL);
	
	/*var link = document.createElement("a");
    link.download = 'Report';
    link.href = RedirectURL;
    link.click();*/
	//ScrnFileDownload(RedirectURL);
	//window.open(RedirectURL);
	//WintabsCtrl(RedirectURL,'Term Sheet',AppNo,'yes');
	//ajaxindicatorstop();
		    	}
		    else
	    	{
	    	alert("No Attachments Available to View");
	    //	ajaxindicatorstop();
	    	}
}

function GrdDocDwnldDB(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
    
    
		    if (url != "")
		    	{
		    	
	//if(AcctNo!=""){
	//RedirectURL = url.replace("XXDMSIDXX",$("#"+id).val().split("\\")[0]);
	
	if ($("#"+id).val().split("\\")[0] == "")
		
		{
			alert("No Attachments Available to View");
			return;
		}
	
	RedirectURL =window.location.origin+"/TPLSW/DMSVIEWDB?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + $("#"+id).val().split("\\")[0];
	
	$("#DocView").attr("src", RedirectURL);
	
	/*var link = document.createElement("a");
    link.download = 'Report';
    link.href = RedirectURL;
    link.click();*/
	//ScrnFileDownload(RedirectURL);
	//window.open(RedirectURL);
	//WintabsCtrl(RedirectURL,'Term Sheet',AppNo,'yes');
	//ajaxindicatorstop();
		    	}
		    else
	    	{
	    	alert("No Attachments Available to View");
	    //	ajaxindicatorstop();
	    	}
}

function ReuploadFile(id)
{
var strconfirm = confirm("Are you sure you want to Re-Upload the file");
if (strconfirm == true) 
{	
	$(id).closest('td').find('span').remove()
    $(id).closest('td').find('input[type="hidden"]').val('')
	$(id).closest('td').find('input[type="file"]').attr('disabled',false)
	$(id).closest('td').find('input[type="file"]').val('');
	$(id).closest('td').find('input[type="file"]').show();
	$(id).closest('td').find('img').remove();
	//$(id).closest('td').find('.View').remove();
	
    $(id).closest('td').find('input[type="file"]').trigger('click')
	
	ReUpldVerifyButton(id);
    }
  
	else
	{
		return;
	}
}

function ReUpldVerifyButton(id)
{
	var Data=$(id).attr('data-field');
	if(Data!=undefined){
	$("[data-Validatearia="+Data+"]").text('Upload Verify');
 	$("[data-Validatearia="+Data+"]").removeClass("btn-GrnInplain");	
 	$("[data-Validatearia="+Data+"]").addClass("btn-yelInplain");
 	$("[data-Validatearia="+Data+"]").removeClass("btn-RedInplain");  
 	$("#"+Data).val('');
	}
}

//Dup PAN Check fn Start
function DupPanval(Prcsid,PAN,Constitution,CUSID)
{
	var PrcsId=$("#"+Prcsid).val()
	var PANVAL=$("#"+PAN).val()
	var cusidVAL=$("#"+CUSID).val()
	var Constitution=$("#"+Constitution).val()
	//if(PANVAL != "")
	//{
	  //if(Constitution != "Partnership Firm")
	   //{
		var xml=UI_getdata(PrcsId,PANVAL,cusidVAL,Constitution,"","LSW_SCHKDUPDATA");
		
		var Output=$(xml).find('RESULT').text()
		
		if(Output != "OK")
			{
			  alert(Output);
			  $("#"+PAN).val('')
			  return false;
			}
	  //}
	//}
}
// End

//Dup MOBILE Check fn Start
function DupMOBval(Prcsid,MOB,CUSID)
{
	var PrcsId=$("#"+Prcsid).val()
	var MOBVAL=$("#"+MOB).val()
	var CusID=$("#"+CUSID).val();
	
	if(MOBVAL != "")
	{
		var xml=UI_getdata(PrcsId,MOBVAL,CusID,"","","LSW_SCHKDUPMOBNO");
		
		var Output=$(xml).find('RESULT').text()
		
		if(Output != "OK")
			{
			  alert(Output);
			  $("#"+MOB).val('')
			  return false;
			}
	}
}
// End

$(document).on("click", ".ViewAttch" , function() {
	//ajaxindicatorstart("Generating, Please wait...");
	
	
	
	var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
    
    
		    if ($(this).next().val().split("\\")[0] != "")
		    	{
		    	
	//if(AcctNo!=""){
	//RedirectURL = url.replace("XXDMSIDXX",$(this).next().val().split("\\")[0]);
	
	
	     var FileStatus= $(this).next().val().split("\\")[0] 
			
			 FileStatus=FileStatus.includes("karza");
			
			if(FileStatus==true)
			{
			   RedirectURL=$(this).next().val().split("\\")[0]
			}
			else
			{
			    RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID="+$("#PrcsID").val() + "&DMSID=" + $(this).next().val().split("\\")[0];
			}
	
	//RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + $(this).next().val().split("\\")[0];
	
	$("#DocView").attr("src", RedirectURL);
	
	/*var link = document.createElement("a");
    link.download = 'Report';
    link.href = RedirectURL;
    link.click();*/
	//ScrnFileDownload(RedirectURL);
	//window.open(RedirectURL);
	//WintabsCtrl(RedirectURL,'Term Sheet',AppNo,'yes');
	//ajaxindicatorstop();
		    	}
		    else
	    	{
	    	alert("No Attachments Available to View");
	    //	ajaxindicatorstop();
	    	}
	
	
	/*var IOP=LoadFrmXML("RS006");

		var RedirectURL="";
	    var url= $(this).next().val();
	    
	    if (url != "")
	    	{    
		//if(AcctNo!=""){
		RedirectURL = IOP+url.replace(/\\/g, "/");
		
		//ScrnFileDownload(RedirectURL);
		window.open(RedirectURL);
		//WintabsCtrl(RedirectURL,'Term Sheet',AppNo,'yes');
		
	    	}
	    else
	    	{
	    	alert("No Attachments Available to View");
	    //	ajaxindicatorstop();
	    	}*/
});


function MULTIDOWNLOADER1(CUSID)
 {
	 
	 var CusID = $("#"+CUSID).val();
	//ajaxindicatorstart("Generating, Please wait...");
	
	var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
    
    
			    RedirectURL =window.location.origin+"/TPLSW/DocMultiDownload?PrcsID="+$("#PrcsID").val() + "&CusID=" + CusID;
			

	$.ajax({
        url:RedirectURL,
async:false,
        contentType: false,
        processData: false,
        type: 'GET',
        success: function(data, textStatus, request){

	//$("#DocView").attr("src", RedirectURL);
		    	
	var objbuilder = '';
var a = getResponseHeaders(request);
if(request.responseHeaders["failure-msg"] != "" && typeof request.responseHeaders["failure-msg"] !== 'undefined')
{
	alert(request.responseHeaders["failure-msg"] +" Contact IT!");
 }
 else if(request.responseHeaders["missing-file"] != "" && typeof request.responseHeaders["missing-file"] !== 'undefined')
{
	alert("Missing Document in the DMS : "+request.responseHeaders["missing-file"]);
 }
 $("#DocView").attr("src", RedirectURL);
 },
        failure:function(data)
        {
     ajaxindicatorstop();
alert(LoadFrmXML("V0119"));
return
        
        }
    });
 }
function getResponseHeaders(jqXHR){ 
  jqXHR.responseHeaders = {};
  var headers = jqXHR.getAllResponseHeaders();
  headers = headers.split("\n");
  headers.forEach(function (header) {
    header = header.split(": ");
    var key = header.shift();
    if (key.length == 0) return
    // chrome60+ force lowercase, other browsers can be different
    key = key.toLowerCase(); 
    jqXHR.responseHeaders[key] = header.join(": ");
  });
}

 /**function MULTIDOWNLOADER1(CUSID)
 {
	 
	 var CusID = $("#"+CUSID).val();
	 var RedirectURL=window.location.origin+"/TPLSW/DocMultiDownload?PrcsID="+$("#PrcsID").val() + "&CusID=" + CusID;
	 var req = new XMLHttpRequest();
	req.open('GET', RedirectURL, false);
	req.send(null);
	var headers = req.getAllResponseHeaders().toLowerCase();
	alert(headers);
	 
 }**/

$(document).on("click", ".DELETETAP" , function() {

	var PrcsId=$(this).attr("data-tab").split("|")[0];
	var CusID=$(this).attr("data-tab").split("|")[1];
	var Type=$(this).attr("data-tab").split("|")[2];
	PrcsId=$("#"+PrcsId).val();
	CusID=$("#"+CusID).val();
	
	// Added for Jira- Start
	
	if(Type=="CO-APPLICANT" || Type=="GUARANTOR")
	{
		var opxml=UI_getdata(PrcsId,CusID,"","","","LSW_SCHKCOAPP")
		if($(opxml).find('MSG').text()!="Yes")
			 {
				alert($(opxml).find('MSG').text());
				return;
			 }
	}
	
	// Added for Jira- End
	
	/* Added for PF Screen Start */
	
	 if($(".FormMainTabs").find('li.active').attr('id')=="FormMainTab3" && $(".FormPageTab").find('li.active').attr('id')=="FormPageTab1")
		 {
			 
			
//PAYTM PROCESSING CHECK START		
		 var xml=UI_getdata($("#PrcsID").val(),$("#PFDT_PFNO").val(),"","","","LSW_SONLNEPAYMNTCHK")
			if($(xml).find('RESULT').text()=="No")
			 {
				alert($(xml).find('MSG').text());
				return;
			 }
			if($(xml).find('RESULT').text()=="Success")
			 {
				
				alert($(xml).find('MSG').text());
			
			location.reload();
			
				return;
			 }			 
//PAYTM PROCESSING CHECK END 
			 
			 
		 }
	
	/* Added for PF Screen End */
	if($("#VERTICAL").val() == "UCV"){
	 if($(".FormMainTabs").find('li.active').attr('id')=="FormMainTab2" && $(".FormPageTab").find('li.active').attr('id')=="FormPageTab2")
		 {
			 var xmlscrtag=UI_getdata($("#PrcsID").val(),$("#LPDT_PROPERTYNO").val(),"","","","LSW_SCHKPROPERTYTAGGED")
			 if($(xmlscrtag).find('PROPTAGFLG').text()=="Y")
			 {
				alert("Unable to delete Primary Security, As this was tagged under other Security, Contact IT!");
				return;
			 }
		 }
	}
	
	
	 if(confirm('Delete '+ Type) == true)
		{
		  var xml=UI_getdata(PrcsId,CusID,Type,"","","LSW_SCLEARCUSDATA");
		  var active = $(".FormPageTab").find("li.active").attr("id");
		  var value = $(".FormPageTab").find("li.active").attr("value");
		  var MainActive = $(".FormMainTabs").find("li.active").attr("id");
		  
		   //Added at 20/06/2020 for Business purpose start
		 		   var BusinessId="";
		 if($(".FormMainTabs").find('li.active').attr('id')=="FormMainTab7" && $(".FormPageTab").find('li.active').attr('id')=="FormPageTab9")
		 {
			 if($(".FormPageMultiTab").find("li.active").prev().length>0)
			 {
				 BusinessId=$(".FormPageMultiTab").find("li.active").prev().attr('id');
			 }
			 else
			 {
				 BusinessId='FIRM1'
			 }
		 }
		   RedirectURL = window.location.origin+"/TPLSW/"+value+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+active+"&PrMs10="+MainActive+"&PrMs1="+$("#PrMs1").val()+"&PrMs3="+BusinessId;
		 // RedirectURL = window.location.origin+"/TPLSW/"+value+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9="+active+"&PrMs10="+MainActive;
		   $(location).attr('href',encodeURI(RedirectURL));
		   
		   //Added at 20/06/2020 for Business purpose end
		}
})


$(document).on("change", ".DataToFld" , function() {

	var Count=$(this).closest('.DYNROW').attr('data-row')
	if(Count>0)
		{
		var Datavalue = $(this).val();
		var ToFld = $(this).attr("data-change");
		$("#"+ToFld+Count).val($($(this).find('option[value="' + Datavalue + '"]')[0]).text());
		}
	else
		{
		 var Datavalue = $(this).val();
		 var ToFld = $(this).attr("data-change");
	     $("#"+ToFld).val($($(this).find('option[value="' + Datavalue + '"]')[0]).text());
		}
})

function DataToProfFld(id)
{
	 var Datavalue = $(id).val();
	 var ToFld = $(id).attr("data-change");
	 
	 if(Datavalue=="Student")
	   {
		 $("#"+ToFld).val('Housewife');
	   }
	 else
	   {
		 $("#"+ToFld).val($(id).find('option[value="' + Datavalue + '"]').text());
	   }
}

	$(document).on("click", ".DelGridrow", function() {
		
var r = confirm("Are you sure!! to delete the record");
if (r == true) {
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
} 
	
		})



	$(document).on("click", ".DeleteMulti", function() {
		var r = confirm("Are you sure!! to delete the record");
      if (r == true) {
                $(this).closest('.DYNROW').remove()	
            }
		})

function TxtGridsubmitdata_V1(TableID,GrdPrfx,MnPrfx) {	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');

	var fieldname="";

	var formxml="<Data>";

	for(j=0;j<$("#"+TableID).find('.tbody').find('.tbodytr').length;j++)
	{
	formxml= formxml + "<row>";

	var rowwise = $("#"+TableID).find('.tbody').find('.tbodytr')[j];
	
	if($(rowwise).find('.tbodytrtd').text()=="No data available in table"){
		formxml+='</row></Data>'
			return formxml;
	}

	for(i=0;i<$($("#Grid"+TableID)).find('thead').find('th').length;i++)
	 {
	    name = $($($("#Grid"+TableID)).find('thead').find('th')[i]).text();
	   
	    fieldname = name + j;
	    
	    
	    if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').length > 0)
	    	
	    	{
	        if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="radio")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']:checked').val();
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="checkbox")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').prop("checked");
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').hasClass("IsCURCommaFields")) {
	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val().replace(/,/g, "");
	        }
	        else {

	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val();
	 
	        }
	    	}
	    else
	    	{
	    	 value= $($(rowwise).find('.tbodytrtd')[i]).text();
	    	}
	    	
	   if(reg.test(value)==true)
	  {
	//if($($(rowwise).find('.tbodytrtd')[i]).text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
		//{
	  value = value.replace(/,/g, "");
		}
		else
		{
			value = value
		}
	  // value = $($(rowwise).find('.tbodytrtd')[i]).text().replace(/[^\d\.\-\ ]/g, '');
	  
	    //value =  value.replace(/\s/g, "");
	   if(value != "" )
	if(   value != undefined)
	{
	   {
	    value = value.toString().replace(/\&/g, "and");
	var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
	   }
	   }
	}
	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;
	}

/*
jQuery(function($) { 
 $('.btn-primary').click(function() {
 
 alert('1')
  $('.btn-primary').addClass('disabled');
  $('.btn-primary').addClass('spinner-border');
  $('.btn-primary').addClass('spinner-border-sm');
  $('.btn-primary').addClass('mr-2');
  
 // .html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...')
});
 });*/
//For Multi Row Page submission START


function submitdata_V1(FieldsClassName,html) {
 var x = $(html).find("." + FieldsClassName).length;//document.getElementsByClassName(FieldsClassName);
// var y = document.getElementsByTagName("select");
 var name = "";
 var fieldid = "";
 var value = "";
 var type = "";
 //var a = parseInt(x) + parseInt(y.length);
 //var formid = document.getElementsByTagName("form").item('0').name;
 var formxml = "<Form><Details>";
 for (i = 0; i < x; i++) {

if($($(html).find("." + FieldsClassName)[i]).is("select")==true || $($(html).find("." + FieldsClassName)[i]).is("input")==true || $($(html).find("." + FieldsClassName)[i]).is("textarea")==true){

     name = $($(html).find("." + FieldsClassName)[i]).attr("name");
     fieldid = $($(html).find("." + FieldsClassName)[i]).attr("id");
   //  value = document.getElementsByClassName(FieldsClassName).item(i).value;
   
     if($(html).find('#' + fieldid).attr('type')=="radio")
     {
      value=$(html).find('input[id='+fieldid+']:checked').val();
      if(value==undefined)
      {
       value = "";
      }
     }
     else if($(html).find('#' + fieldid).attr('type')=="checkbox")
     {
      value=$(html).find('input[id='+fieldid+']').prop("checked");
      if(value==undefined)
      {
       value = "";
   }
     }
     else if ($(html).find('#' + fieldid).hasClass("IsCURCommaFields")) {
         value = $($(html).find("." + FieldsClassName)[i]).val().replace(/,/g, "");
     }
     else {
if ($(html).find('#' + fieldid).hasClass("ImgIdnt")) {
if(document.getElementsByClassName(FieldsClassName).item(i).src.indexOf("/Attachments/")!=-1)
{
value = document.getElementsByClassName(FieldsClassName).item(i).src;
value = "/Attachments/" + value.split("/Attachments/")[1];
}
else{
value = "";
}
}
else
{
         value = $($(html).find("." + FieldsClassName)[i]).val()//.replace(/,/g, "");
}
     }
     //type = document.getElementsByTagName("input").item(i).type;
     //if(fieldid !="" && type!="submit")
     //{
     //if(fieldid !="" && type!="radio")
     //{
if(value != "")
{
     var formxml = formxml + "<" + name + ">" + value + "</" + name + ">";
}
     //}
     //}


}
 }
 /*for(j=0;j<y.length;j++)
 {
 name = document.getElementsByTagName("select").item(j).name;
 fieldid = document.getElementsByTagName("select").item(j).id;
 value = document.getElementsByTagName("select").item(j).value;
 type = document.getElementsByTagName("input").item(j).type;
 if(fieldid !="" && type!="submit")
 {
 if(fieldid !="" && type!="radio")
 {
 var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
 }
 }
 }*/
 var formxml = formxml + "</Details></Form>";
 return formxml;
}
function FormDataToDB_V1(tablenameins,Prifix,ExtrData,html) {
 var CHKresult = "";
 var tablenameins1 = "";
 var xml = submitdata_V1(Prifix+"DBfields",html);
 //var xml = submitdata("DBfields");
 var activityid = $("#POIS_ActivityID").val();
 var activityname = ExtrData;
 $.ajax({
     url: "/TPLSW/UI_formdatains",
     data: { xml: xml, tablenameins: tablenameins, tablenameins1: tablenameins1, activityid: activityid, activityname: activityname,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()  },
     async: false,
     //dataType: "json",
     type: 'POST',
     success: function OnSuccess_submit(data) {
         if (data == 'Success') {
             //alert("Data Inserted");
             //document.getElementById("SubmitSuccess").value = "Yes";
             //CHKresult = "Success";
			 toastr.success("Form Saved Successfully");
           
          //alert("Form Saved Successfully");
          
         }
         else {
        	 //CHKresult = "Fail";
            // alert("Insertion Failed");
            // document.getElementById("SubmitSuccess").value = "No";
            // CHKresult = "No";
          //alert("Form Submission Failed");
		   toastr.error("Form Submission Failed")
         }
     },
     error: function OnError_submit(xmlRequest) {
        // alert("Submission Failed");
         //document.getElementById("SubmitSuccess").value = "No";
        // CHKresult = "No";
      //alert("Form Submission Failed");
    	 //CHKresult = "Fail";
		 toastr.error("Form Submission Failed")
     }
 });
 return CHKresult;
}
//For Multi Row Page submission END

//Mandatory Multi Row Page Start
function ChkMandatoryFlds_V1(FieldClass,html)
{
//var xml=$("#APPINFOTXT").val();
var n = $(html).find("." + FieldClass).length;
var Rtn= "";
   for (i = 0; i < n; i++) {
    var atLeastOneChecked=false;
   
    if ($($(html).find("."+ FieldClass)[i]).hasClass("select-radio"))
     {
    
     $($(html).find("."+ FieldClass)[i]).find('input[type=radio]').each(function() {
            if ($(this).prop("checked") == true) {
                atLeastOneChecked = true;                
               
            }
           
        });
    
     if (atLeastOneChecked == false)
      {
      Rtn = "Mandatory";
      }
    
     }
    //else if($($(html).find('input[type="checkbox"]')).hasClass(FieldClass))
		else if($($(html).find("."+ FieldClass)[i]).is('input[type="checkbox"]'))
    	{
    	var allChecked = true;
    	$(html).find("input[type=checkbox]."+FieldClass+"").each(function(index, element){
    	  if(!element.checked){
    	    allChecked = false;
    	   // return false;
    	  } 
    	});
    	if (allChecked == false)
        {
        Rtn = "Mandatory";
        }
    	}
    else
     {
   
   
       name = $($(html).find("." + FieldClass)[i]).attr("id");
      // name= name.substring(5);
       //name= Prifix+name
     //  var val = $(xml).find(name).text();

       if (name != "")
        {
       if($(html).find("#"+ name).length > 0)
       {
    	   
    	   
    	   if ($("#"+ name).is("select")==true)
 		  {        		  
 		  
      	        if ($(html).find("#"+ name).val() == "")
    	         {           
    	         $(html).find("#"+ name).prev().prev().addClass("DataInValid")
    	          $(html).find("#"+ name).prev().prev().removeClass("DataNormal");
    	         Rtn = "Mandatory";
    	         }
    	        else
    	         {
    	         $(html).find("#"+ name).prev().prev().addClass("DataNormal");
    	         $(html).find("#"+ name).prev().prev().removeClass("DataInValid");
    	         var a;
    	         }
 		  
 		  
 		  
 		  }
 	  else
 		  {
 		  
 		  
 	        if ($(html).find("#"+ name).val() == "")
 	         {           
 	         $(html).find("#"+ name).addClass("DataInValid")
 	          $(html).find("#"+ name).removeClass("DataNormal");
 	         Rtn = "Mandatory";
 	         }
 	        else
 	         {
 	         $(html).find("#"+ name).addClass("DataNormal");
 	         $(html).find("#"+ name).removeClass("DataInValid");
 	         var a;
 	         }
 		  
 		  }
       
       }
        }
     }
   }
   return Rtn;
}
//Mandatory Multi Row Page End



function AddPageMultiData (UniqFldID,PrcsVal,UniqNo,DV,FieldClass)
{
      var html = $($("#"+DV).html());
      var document = $(html);
      
      //$(html).find("[name="+PRCSID+"]").val(PrcsVal);
      
      var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
      var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
      var row = $("."+ DV).find('.DYNROW').length;
      var j = parseInt(row) + 1;
      
      if(UniqNo != "")
    	  {
    	  $(html).find("#"+UniqFldID).val(UniqNo + j);
    	  }

      if ($(html).find('.FormaccordionSUB').length > 0)
	   {
	   
    	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
    	  
	  // var AccordionID = $(html).find('.Formaccordion').attr("id") + j
	   
	  // $(html).find('.Formaccordion').attr("id",AccordionID);
	   
	   var HeadingID = $(html).find('.FormaccordionSUB .card-header').attr("id") + j;
	   
	   $(html).find('.FormaccordionSUB .card-header').attr("id",HeadingID);
	   
	   $(html).find(".NXTBTNF").attr("data-card",j-1);
	   
	//   $(html).find('.Formaccordion .card-header a').attr("data-parent","#"+AccordionID);
	   
	   var CollapseID =  $(html).find('.FormaccordionSUB .collapse').attr("id") + j;
	   
	 //  $(html).find('.Formaccordion .collapse').attr("data-parent","#"+AccordionID);
	   
	   $(html).find('.FormaccordionSUB .collapse').attr("id",CollapseID);
	   
	   $(html).find('.FormaccordionSUB .collapse').attr("aria-labelledby",HeadingID);	   
	   
	   
	   $(html).find('.FormaccordionSUB .card-header a').attr("href","#"+CollapseID);
	   
	   $(html).find('.FormaccordionSUB .card-header a').attr("aria-controls",CollapseID);
	   
	   }
      
      
      
      $(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
      $(html).find("[data-row]").attr("data-row",j);
      $(html).attr("data-row",j);
      var n = $(html).find("." + FieldClass).length;
        for (i = 0; i < n; i++) {
         name = $($(html).find("." + FieldClass)[i]).attr("name");
         
         
         if ($(html).find('[name='+name+']').is( "a"))
   	      {
   	  	
   	  	
   	  	if ($(html).find('[name='+name+']').attr('data-toggle') == "modal")
   	  		{		
   	  		$(html).find('[name='+name+']').attr("id",($(html).find('[name='+name+']').attr("id") + j));
   	  		$(html).find('[name='+name+']').attr("data-target",("#" + name + j));	
   	  		
   	  		}
   	  	
   	  	$(html).find('[name='+name+']').attr('data-table', $(html).find('[name='+name+']').attr('data-table') + j);
   	  	$(html).find('[name='+name+']').attr('href', "#" + $(html).find('[name='+name+']').attr('data-table') + j);
   	  }
   	  else if ($(html).find('[name='+name+']').attr("data-info") == "ModalWindow")
   	  {
   	  	$(html).find('[name='+name+']').attr("id",name.replace("Modal","") + j);
   	  }
        
         
   	  else if($(html).find('[name='+name+']').attr('type')=="button")
   	{

   	   if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
   	     {
   	 
   		var datavalue = $(html).find('[name='+name+']').attr('data-value');
   		 
   		var TableID = datavalue.split("|")[0] + j;
   		var SPNAME = datavalue.split("|")[1];
   		
   		var Param1 = '$("#'+ datavalue.split("|")[2] +'").val()';	

   		var params2 = datavalue.split("|")[3];
   		
   		var Param2 = "";
   		for (y=0;y<params2.split("~").length;y++)
   			{
   			
   			Param2 = Param2 + '$("#'+  params2.split("~")[y] + j +'").val()' + "+'|'+";
   			
   			}
   		
   		Param2 = Param2.slice(0,Param2.lastIndexOf("+'|'+"))
   		
   		var Param3 = '$("#'+ datavalue.split("|")[4] + j +'").val()';	
   		
   		var HdnClms = datavalue.split("|")[5];
   		var Fnctype = datavalue.split("|")[6];
   			   
   		var BtnClick =  "FncallDocChkLst(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
   	          			  
   		$(html).find('[name='+name+']').attr("onclick",BtnClick);
   	    
   		$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);
   		
   	     }
   	            		  
   	            	  
   	}
   	else if ($(html).find('[name='+name+']').is( "table"))
   	{
   		
   		$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);

   	}
         
         
         if($(html).find('[name='+name+']').attr('type')=="button")
         {

            if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
              {
            	$(html).find('[name='+name+']').addClass("AddMultiGridTrg");
              }
            
              }

         if ($(html).find("[for="+name+"]").length > 0)
         {
         $(html).find("[for="+name+"]").attr("for",name + j)
         }
         
         if($(html).find("#"+name).is("select"))
         {
        	  $(html).find("#"+ name).addClass("mdb-select");
         }
         
         if($($(html).find("." + FieldClass)[i]).attr("type") == "radio")
         {
        	 var radioID = $($(html).find("." + FieldClass)[i]).attr("id")
        	 
        	 $($(html).find("." + FieldClass)[i]).attr("id",radioID + j);
        	 $(html).find("[for="+radioID+"]").attr("for",radioID + j);
         }
         
              
         $(html).find("#"+name).attr("id",name + j);
         
      
         
         
        }
        
      
        
      $("."+DV).append(html);
      
      
      $("."+DV).last().find('.mdb-select').material_select('destroy');
      $("."+DV).last().find('.mdb-select').material_select();
   // Calendar
      var $input = $(document).find('.datepicker').pickadate({
          //editable: 'true',
      format: 'dd/mm/yyyy',
      selectYears: 200,
      selectMonths: true
      })
      .on("change", function() {
        $(this).prev().prev().val($(this).val());
        $(this).prev().prev().focus();
      });

      $("."+DV).last().find(".AddMultiGridTrg").click();
      
      
      
      
      // $($("."+DV).find('.DYNROW').last().find("." + FieldClass)[0]).focus();
      
     // var scrollPos =  $($("."+DV).find('.DYNROW').last().find("." + FieldClass)[0]).focus();
		 //$(window).scrollTop(parseInt(scrollPos));
		    
}

function LoadMultiData (TblName,PrcsVal,UniqNo,DV,FieldClass,SP)
{
	//$("#"+PRCSID).val(PrcsVal)
	
      var TechPropDetls = UI_getdata(TblName,PrcsVal,UniqNo,"","",SP);
	 if(TechPropDetls!="<Resultset><a><XMLLRGResult><asetLRGDAta>NoData</asetLRGDAta></XMLLRGResult></a></Resultset>")
      {
      var xmlDoc = $.parseXML(TechPropDetls);
	  if(xmlDoc == null)
	  {
		  return;
	  }
      var rowno = $(xmlDoc.documentElement).find('a asetLRGDAta').length;
      for(j=1;j<=rowno;j++)
            {
            //var html = $("#"+DV).html();
            var html = $($("#"+DV).html());
            var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
            var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
            var document = $(html);
            $(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
            $(html).find("[data-row]").attr("data-row",j);
            $(html).attr("data-row",j);
            $(html).find('.mdb-select').material_select('destroy');
            $(html).find('.mdb-select').material_select();
            $(html).find(".NXTBTNF").attr("data-card",j-1);
            
            
            if ($(html).find('.FormaccordionSUB').length > 0)
      	   {
      	   
          	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
          	  
      	  // var AccordionID = $(html).find('.Formaccordion').attr("id") + j
      	   
      	  // $(html).find('.Formaccordion').attr("id",AccordionID);
      	   
      	   var HeadingID = $(html).find('.FormaccordionSUB .card-header').attr("id") + j;
      	   
      	   $(html).find('.FormaccordionSUB .card-header').attr("id",HeadingID);
      	   
      	//   $(html).find('.Formaccordion .card-header a').attr("data-parent","#"+AccordionID);
      	   
      	   var CollapseID =  $(html).find('.FormaccordionSUB .collapse').attr("id") + j;
      	   
      	 //  $(html).find('.Formaccordion .collapse').attr("data-parent","#"+AccordionID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("id",CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("aria-labelledby",HeadingID);	   
      	   
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("href","#"+CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("aria-controls",CollapseID);
      	   
      	   }
            
            
            
      //    return;
            var n = $(html).find("." + FieldClass).length;
              for (i = 0; i < n; i++) {
            	 
            	  name = $($(html).find("." + FieldClass)[i]).attr("name");
 
            	  if ($(html).find('[name='+name+']').is( "a"))
            	  {
            	  	
            	  	
            	  	if ($(html).find('[name='+name+']').attr('data-toggle') == "modal")
            	  		{		
            	  		$(html).find('[name='+name+']').attr("id",($(html).find('[name='+name+']').attr("id") + j));
            	  		$(html).find('[name='+name+']').attr("data-target",("#" + name + j));	
            	  		
            	  		}
            	  	
            	  	$(html).find('[name='+name+']').attr('data-table', $(html).find('[name='+name+']').attr('data-table') + j);
            	  	$(html).find('[name='+name+']').attr('href', "#" + $(html).find('[name='+name+']').attr('data-table') + j);

            	  }
            	  else if ($(html).find('[name='+name+']').attr("data-info") == "ModalWindow")
            	  {

            	  	$(html).find('[name='+name+']').attr("id",name.replace("Modal","") + j);

            	  }
            	  
            	  else if($(html).find('[name='+name+']').attr('type')=="button")
{

   if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
     {
 
	var datavalue = $(html).find('[name='+name+']').attr('data-value');
	 
	var TableID = datavalue.split("|")[0] + j;
	var SPNAME = datavalue.split("|")[1];
	
	var Param1 = '$("#'+ datavalue.split("|")[2] +'").val()';	

	var params2 = datavalue.split("|")[3];
	
	var Param2 = "";
	for (y=0;y<params2.split("~").length;y++)
		{
		
		Param2 = Param2 + '$("#'+  params2.split("~")[y] + j +'").val()' + "+'|'+";
		
		}
	
	Param2 = Param2.slice(0,Param2.lastIndexOf("+'|'+"))
	
	var Param3 = '$("#'+ datavalue.split("|")[4] + j +'").val()';	
	
	var HdnClms = datavalue.split("|")[5];
	var Fnctype = datavalue.split("|")[6];
		   
	var BtnClick =  "FncallDocChkLst(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
          			  
	$(html).find('[name='+name+']').attr("onclick",BtnClick);
    
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);
	
     }
            		  
            	  
}
else if ($(html).find('[name='+name+']').is( "table"))
{
	
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);

}

else
 {
            	              
              var val = $($(xmlDoc.documentElement).find('a asetLRGDAta')[j-1]).find(name).text();
              if (val != "") {
                  if ($(html).find("#"+name).length > 0)
                        {
                        $(html).find("#"+name).val(val);
               // added by bala Upload Image Show Start
               if($(html).find("[data-Validate="+name+"]").length > 0)
               {
                   FileSplit=val.split('\\');
                  var FileName=FileSplit[FileSplit.length - 1]
                  $(html).find("#"+name+"UPLOAD").hide()
                   $(html).find("#"+name+"UPLOAD").closest('.md-form').append(FileName);
                  if(val != "")
                  {
                        $(html).find("."+name).show();
                  }
                  else
                  {
                        $(html).find("."+name).hide();
                        $(html).find("#"+name+"UPLOAD").show()
                  }
               }
               // End
               if($(html).find("[data-Validatearia="+name+"]").length > 0)
                   {
                   if (val == "Verified")
                         {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-GrnInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                         }
                   else if (val == "Failed")
                   {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-RedInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                   }
                   }
                        }
                  if($(html).find("#"+name).val()  != "")
                    {
                    $(html).find('[for='+name+']').addClass('active');
                    }
                  //checkbox 11-01-2018
if($(html).find('[name='+name+']').attr('type')=="radio")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
      //$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+j);
}  
if($(html).find('[name='+name+']').attr('type')=="checkbox")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
}

  if ($(html).find('[name='+name+']').is( "span"))
  {
	  
	  /*$(html).find('[name='+name+']').hasClass("DataFld")
	  {
		  
		  $(html).find('[name='+name+']').text(val);
		  
	  }*/
	  if($(html).find('[name='+name+']').hasClass("Datahtml"))
	  {
		  $(html).find('[name='+name+']').html(val);
	  }
	  else if($(html).find('[name='+name+']').hasClass("DataFld"))
	  {
		  
		  $(html).find('[name='+name+']').text(val);
		  
	  }
	  else{
		  $(html).find('[name='+name+']').text(val);
	  }
  
  }



            /*if($("#"+ name).attr('type') == 'checkbox')
                        {
                  $("#"+ name).prop("checked",val);
                        }*/
            if($(html).find("#"+ name).is( "select" ))
            {
            var optn="<option  value='"+val+"'>" + val + "</option>"
            if($(html).find("#"+name+" option[value='" + val + "']").length==0)
            {
                  $(html).find("#"+ name).append(optn)
            $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
            }
            else
                  {
                  $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
                  }
      //    if($("#"+ name).prev('ul').length == 0)
                  //{
            
            $(html).find("#"+ name).addClass("mdb-select");
            
                  //}
            }
            //IsCURCommaFields
            var x = $(html).find("#" + name).hasClass("IsCURCommaFields");
           if (x == true) {
                        if(val=="")
                        {
                              val= "0";
                        }
						
						
			if (val.replace(/,/g,"").indexOf('.')>0)
			{

			if (val.replace(/,/g,"").split('.')[1] > 0)
			{
$(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(2)));
			}	
else{
$(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}	
			
			
			}
else{			
						
                        $(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}
          }
          else {
                        //For Attached Photo identity Start
                  var y = $(html).find("#" + name).hasClass("ImgIdnt");
          if (y == true) {
                  var IOP=LoadFrmXML("RS006");
                  val = IOP+val;
                  document.getElementById(name).src = val;
          }
                        //For Attached Photo identity End
                  else
                  {                      
                        if ($(html).find("#"+name).length > 0)
                  {
                              $(html).find("#"+name).val(val);
                  }
                        }
          }
              }
              else
                  {
                  if($(html).find("#"+ name).is( "select" ))
                        {
                	  
                	    $(html).find("#"+ name).addClass("mdb-select");
                	  
                        //if($("#"+ name).prev('ul').length == 0)
                              //{
                	 //   $(html).find("#"+ name).material_select('destroy');
                        
                              //}
                        }
                  }
              
              if($($(html).find("." + FieldClass)[i]).attr("type") == "radio")
              {
             	 var radioID = $($(html).find("." + FieldClass)[i]).attr("id")
             	 
             	 $($(html).find("." + FieldClass)[i]).attr("id",radioID + j);
             	 $(html).find("[for="+radioID+"]").attr("for",radioID + j);
             	 
             	//$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+j);
              }
              
              $(html).find("#"+name).attr("id",name + j);
              if ($(html).find("[for="+name+"]").length > 0)
                    {
                    $(html).find("[for="+name+"]").attr("for",name + j)
                    }
              
              
              
             // $(html).find("#"+name).attr("id",name + j);
             // $(html).find("#"+name).attr("id",name + j);
          }
            }    
              
              $("."+DV).append(html);
              
              
              $("."+DV).last().find('.mdb-select').material_select('destroy');
              $("."+DV).last().find('.mdb-select').material_select();
              
           // Calendar
              var $input = $(document).find('.datepicker').pickadate({
                  //editable: 'true',
              format: 'dd/mm/yyyy',
              selectYears: 200,
              selectMonths: true
              })
              .on("change", function() {
                $(this).prev().prev().val($(this).val());
                $(this).prev().prev().focus();
              });
              
             // $("."+DV).last().find(".MultiGridTrg").click();
			  $("."+DV).find(".DYNROW").last().find(".MultiGridTrg").click();
            }
	   }
      //$("#COBI_CUSID").val($(CUSID).find("Val1").text());
	  
	    // FOR ONLOAD 1 STRIP OPEN FOR EXPANDABLE STRIPS START
	    if ($(html).find('.FormaccordionSUB').length > 0)
      	   {
      	   
          	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
			  $($("."+DV).find('.FormaccordionSUB').find('a')[0]).click();
			  $($($("."+DV).find('.FormaccordionSUB')[0]).find('div')[1]).addClass("show");
		   }
	  // FOR ONLOAD 1 STRIP OPEN FOR EXPANDABLE STRIPS END
}
/***QUERY MODULE STRT***/

function LoadMultiDataQuery (TblName,PrcsVal,UniqNo,DV,FieldClass,SP,HidnID)
{
	//$("#"+PRCSID).val(PrcsVal)
	//$($("#DMY7").val().split('|')[8]).find("S02").html()
      //var TechPropDetls = UI_getdata(TblName,PrcsVal,UniqNo,"","",SP);
	  var xml = $("#DMY6").val();
	  var indx = parseInt(HidnID.replace('S',''))-1;
	var TechPropDetls=xml.split('|')[indx];
	 if(TechPropDetls!="<Resultset><a><XMLLRGResult><asetLRGDAta>NoData</asetLRGDAta></XMLLRGResult></a></Resultset>")
      {
      var xmlDoc = $.parseXML(TechPropDetls);
	  if(xmlDoc == null)
	  {
		  return;
	  }
      var rowno = $(xmlDoc.documentElement).find('a asetLRGDAta').length;
      for(j=1;j<=rowno;j++)
            {
            //var html = $("#"+DV).html();
            var html = $($("#"+DV).html());
            var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
            var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
            var document = $(html);
            $(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
            $(html).find("[data-row]").attr("data-row",j);
            $(html).attr("data-row",j);
            $(html).find('.mdb-select').material_select('destroy');
            $(html).find('.mdb-select').material_select();
            $(html).find(".NXTBTNF").attr("data-card",j-1);
            
            
            if ($(html).find('.FormaccordionSUB').length > 0)
      	   {
      	   
          	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
          	  
      	  // var AccordionID = $(html).find('.Formaccordion').attr("id") + j
      	   
      	  // $(html).find('.Formaccordion').attr("id",AccordionID);
      	   
      	   var HeadingID = $(html).find('.FormaccordionSUB .card-header').attr("id") + j;
      	   
      	   $(html).find('.FormaccordionSUB .card-header').attr("id",HeadingID);
      	   
      	//   $(html).find('.Formaccordion .card-header a').attr("data-parent","#"+AccordionID);
      	   
      	   var CollapseID =  $(html).find('.FormaccordionSUB .collapse').attr("id") + j;
      	   
      	 //  $(html).find('.Formaccordion .collapse').attr("data-parent","#"+AccordionID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("id",CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("aria-labelledby",HeadingID);	   
      	   
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("href","#"+CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("aria-controls",CollapseID);
      	   
      	   }
            
            
            
      //    return;
            var n = $(html).find("." + FieldClass).length;
              for (i = 0; i < n; i++) {
            	 
            	  name = $($(html).find("." + FieldClass)[i]).attr("name");
 
            	  if ($(html).find('[name='+name+']').is( "a"))
            	  {
            	  	
            	  	
            	  	if ($(html).find('[name='+name+']').attr('data-toggle') == "modal")
            	  		{		
            	  		$(html).find('[name='+name+']').attr("id",($(html).find('[name='+name+']').attr("id") + j));
            	  		$(html).find('[name='+name+']').attr("data-target",("#" + name + j));	
            	  		
            	  		}
            	  	
            	  	$(html).find('[name='+name+']').attr('data-table', $(html).find('[name='+name+']').attr('data-table') + j);
            	  	$(html).find('[name='+name+']').attr('href', "#" + $(html).find('[name='+name+']').attr('data-table') + j);

            	  }
            	  else if ($(html).find('[name='+name+']').attr("data-info") == "ModalWindow")
            	  {

            	  	$(html).find('[name='+name+']').attr("id",name.replace("Modal","") + j);

            	  }
            	  
            	  else if($(html).find('[name='+name+']').attr('type')=="button")
{

   if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
     {
 
	var datavalue = $(html).find('[name='+name+']').attr('data-value');
	 
	var TableID = datavalue.split("|")[0] + j;
	var SPNAME = datavalue.split("|")[1];
	
	var Param1 = '$("#'+ datavalue.split("|")[2] +'").val()';	

	var params2 = datavalue.split("|")[3];
	
	var Param2 = "";
	for (y=0;y<params2.split("~").length;y++)
		{
		
		Param2 = Param2 + '$("#'+  params2.split("~")[y] + j +'").val()' + "+'|'+";
		
		}
	
	Param2 = Param2.slice(0,Param2.lastIndexOf("+'|'+"))
	
	var Param3 = '$("#'+ datavalue.split("|")[4] + j +'").val()';	
	
	var HdnClms = datavalue.split("|")[5];
	var Fnctype = datavalue.split("|")[6];
		   
	var BtnClick =  "FncallDocChkLst(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
          			  
	$(html).find('[name='+name+']').attr("onclick",BtnClick);
    
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);
	
     }
	 else if($(html).find('[name='+name+']').attr('data-resolve')=="RESOLUTION"){
		 $(html).find('[name='+name+']').text($(html).find('[name='+name+']').text()+'('+$($(xmlDoc.documentElement).find('a asetLRGDAta')[j-1]).find("MNGQ_NOOFQRY").text()+')')
	 }
            		  
            	  
}
else if ($(html).find('[name='+name+']').is( "table"))
{
	
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);

}

else
 {
            	              
              var val = $($(xmlDoc.documentElement).find('a asetLRGDAta')[j-1]).find(name).text();
              if (val != "") {
                  if ($(html).find("#"+name).length > 0)
                        {
                        $(html).find("#"+name).val(val);
               // added by bala Upload Image Show Start
               if($(html).find("[data-Validate="+name+"]").length > 0)
               {
                   FileSplit=val.split('\\');
                  var FileName=FileSplit[FileSplit.length - 1]
                  $(html).find("#"+name+"UPLOAD").hide()
                   $(html).find("#"+name+"UPLOAD").closest('.md-form').append(FileName);
                  if(val != "")
                  {
                        $(html).find("."+name).show();
                  }
                  else
                  {
                        $(html).find("."+name).hide();
                        $(html).find("#"+name+"UPLOAD").show()
                  }
               }
               // End
               if($(html).find("[data-Validatearia="+name+"]").length > 0)
                   {
                   if (val == "Verified")
                         {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-GrnInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                         }
                   else if (val == "Failed")
                   {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-RedInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                   }
                   }
                        }
                  if($(html).find("#"+name).val()  != "")
                    {
                    $(html).find('[for='+name+']').addClass('active');
                    }
                  //checkbox 11-01-2018
if($(html).find('[name='+name+']').attr('type')=="radio")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
      //$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+j);
}  
if($(html).find('[name='+name+']').attr('type')=="checkbox")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
}

  if ($(html).find('[name='+name+']').is( "span"))
  {
	  
	  $(html).find('[name='+name+']').hasClass("DataFld")
	  {
		  
		  $(html).find('[name='+name+']').text(val);
		  
	  }
  
  }



            /*if($("#"+ name).attr('type') == 'checkbox')
                        {
                  $("#"+ name).prop("checked",val);
                        }*/
            if($(html).find("#"+ name).is( "select" ))
            {
            var optn="<option  value='"+val+"'>" + val + "</option>"
            if($(html).find("#"+name+" option[value='" + val + "']").length==0)
            {
                  $(html).find("#"+ name).append(optn)
            $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
            }
            else
                  {
                  $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
                  }
      //    if($("#"+ name).prev('ul').length == 0)
                  //{
            
            $(html).find("#"+ name).addClass("mdb-select");
            
                  //}
            }
            //IsCURCommaFields
            var x = $(html).find("#" + name).hasClass("IsCURCommaFields");
           if (x == true) {
                        if(val=="")
                        {
                              val= "0";
                        }
                        $(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
          }
          else {
                        //For Attached Photo identity Start
                  var y = $(html).find("#" + name).hasClass("ImgIdnt");
          if (y == true) {
                  var IOP=LoadFrmXML("RS006");
                  val = IOP+val;
                  document.getElementById(name).src = val;
          }
                        //For Attached Photo identity End
                  else
                  {                      
                        if ($(html).find("#"+name).length > 0)
                  {
                              $(html).find("#"+name).val(val);
                  }
                        }
          }
              }
              else
                  {
                  if($(html).find("#"+ name).is( "select" ))
                        {
                	  
                	    $(html).find("#"+ name).addClass("mdb-select");
                	  
                        //if($("#"+ name).prev('ul').length == 0)
                              //{
                	 //   $(html).find("#"+ name).material_select('destroy');
                        
                              //}
                        }
                  }
              
              if($($(html).find("." + FieldClass)[i]).attr("type") == "radio")
              {
             	 var radioID = $($(html).find("." + FieldClass)[i]).attr("id")
             	 
             	 $($(html).find("." + FieldClass)[i]).attr("id",radioID + j);
             	 $(html).find("[for="+radioID+"]").attr("for",radioID + j);
             	 
             	//$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+j);
              }
              
              $(html).find("#"+name).attr("id",name + j);
              if ($(html).find("[for="+name+"]").length > 0)
                    {
                    $(html).find("[for="+name+"]").attr("for",name + j)
                    }
              
              
              
             // $(html).find("#"+name).attr("id",name + j);
             // $(html).find("#"+name).attr("id",name + j);
          }
            }    
              
              $("."+DV).append(html);
              
              
              $("."+DV).last().find('.mdb-select').material_select('destroy');
              $("."+DV).last().find('.mdb-select').material_select();
              
           // Calendar
              var $input = $(document).find('.datepicker').pickadate({
                  //editable: 'true',
              format: 'dd/mm/yyyy',
              selectYears: 200,
              selectMonths: true
              })
              .on("change", function() {
                $(this).prev().prev().val($(this).val());
                $(this).prev().prev().focus();
              });
              
              $("."+DV).last().find(".MultiGridTrg").click();
            }
	   }
      //$("#COBI_CUSID").val($(CUSID).find("Val1").text());
}

function LoadMultiDataQuery_V1 (TblName,PrcsVal,UniqNo,DV,FieldClass,SP)
{
	//$("#"+PRCSID).val(PrcsVal)
	var GetDateFldzz=""
      var TechPropDetls = UI_getdata(TblName,PrcsVal,UniqNo,"","",SP);
	 if(TechPropDetls!="<Resultset><a><XMLLRGResult><asetLRGDAta>NoData</asetLRGDAta></XMLLRGResult></a></Resultset>")
      {
      var xmlDoc = $.parseXML(TechPropDetls);
	  if(xmlDoc == null)
	  {
		  return;
	  }
      var rowno = $(xmlDoc.documentElement).find('a asetLRGDAta').length;
      for(j=1;j<=rowno;j++)
            {
            //var html = $("#"+DV).html();
            var html = $($("#"+DV).html());
            var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
            var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
            var document = $(html);
            $(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
            $(html).find("[data-row]").attr("data-row",j);
            $(html).attr("data-row",j);
            $(html).find('.mdb-select').material_select('destroy');
            $(html).find('.mdb-select').material_select();
            $(html).find(".NXTBTNF").attr("data-card",j-1);
            
            
            if ($(html).find('.FormaccordionSUB').length > 0)
      	   {
      	   
          	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
          	  
      	  // var AccordionID = $(html).find('.Formaccordion').attr("id") + j
      	   
      	  // $(html).find('.Formaccordion').attr("id",AccordionID);
      	   
      	   var HeadingID = $(html).find('.FormaccordionSUB .card-header').attr("id") + j;
      	   
      	   $(html).find('.FormaccordionSUB .card-header').attr("id",HeadingID);
      	   
      	//   $(html).find('.Formaccordion .card-header a').attr("data-parent","#"+AccordionID);
      	   
      	   var CollapseID =  $(html).find('.FormaccordionSUB .collapse').attr("id") + j;
      	   
      	 //  $(html).find('.Formaccordion .collapse').attr("data-parent","#"+AccordionID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("id",CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("aria-labelledby",HeadingID);	   
      	   
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("href","#"+CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("aria-controls",CollapseID);
      	   
      	   }
            
            
            
      //    return;
            var n = $(html).find("." + FieldClass).length;
              for (i = 0; i < n; i++) {
            	 
            	  name = $($(html).find("." + FieldClass)[i]).attr("name");
 
            	  if ($(html).find('[name='+name+']').is( "a"))
            	  {
            	  	
            	  	
            	  	if ($(html).find('[name='+name+']').attr('data-toggle') == "modal")
            	  		{		
            	  		$(html).find('[name='+name+']').attr("id",($(html).find('[name='+name+']').attr("id") + j));
            	  		$(html).find('[name='+name+']').attr("data-target",("#" + name + j));	
            	  		
            	  		}
            	  	
            	  	$(html).find('[name='+name+']').attr('data-table', $(html).find('[name='+name+']').attr('data-table') + j);
            	  	$(html).find('[name='+name+']').attr('href', "#" + $(html).find('[name='+name+']').attr('data-table') + j);

            	  }
            	  else if ($(html).find('[name='+name+']').attr("data-info") == "ModalWindow")
            	  {

            	  	$(html).find('[name='+name+']').attr("id",name.replace("Modal","") + j);

            	  }
            	  
            	  else if($(html).find('[name='+name+']').attr('type')=="button")
{

   if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
     {
 
	var datavalue = $(html).find('[name='+name+']').attr('data-value');
	 
	var TableID = datavalue.split("|")[0] + j;
	var SPNAME = datavalue.split("|")[1];
	
	var Param1 = '$("#'+ datavalue.split("|")[2] +'").val()';	

	var params2 = datavalue.split("|")[3];
	
	var Param2 = "";
	for (y=0;y<params2.split("~").length;y++)
		{
		
		Param2 = Param2 + '$("#'+  params2.split("~")[y] + j +'").val()' + "+'|'+";
		
		}
	
	Param2 = Param2.slice(0,Param2.lastIndexOf("+'|'+"))
	
	var Param3 = '$("#'+ datavalue.split("|")[4] + j +'").val()';	
	
	var HdnClms = datavalue.split("|")[5];
	var Fnctype = datavalue.split("|")[6];
		   
	var BtnClick =  "FncallDocChkLst(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
          			  
	$(html).find('[name='+name+']').attr("onclick",BtnClick);
    
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);
	
     }
            		  
            	  
}
else if ($(html).find('[name='+name+']').is( "table"))
{
	
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);

}

else
 {
            	              
              var val = $($(xmlDoc.documentElement).find('a asetLRGDAta')[j-1]).find(name).text();
              if (val != "") {
                  if ($(html).find("#"+name).length > 0)
                        {
                        $(html).find("#"+name).val(val);
               // added by bala Upload Image Show Start
               if($(html).find("[data-Validate="+name+"]").length > 0)
               {
                   FileSplit=val.split('\\');
                  var FileName=FileSplit[FileSplit.length - 1]
                  $(html).find("#"+name+"UPLOAD").hide()
                   $(html).find("#"+name+"UPLOAD").closest('.md-form').append(FileName);
                  if(val != "")
                  {
                        $(html).find("."+name).show();
                  }
                  else
                  {
                        $(html).find("."+name).hide();
                        $(html).find("#"+name+"UPLOAD").show()
                  }
               }
               // End
               if($(html).find("[data-Validatearia="+name+"]").length > 0)
                   {
                   if (val == "Verified")
                         {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-GrnInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                         }
                   else if (val == "Failed")
                   {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-RedInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                   }
                   }
                        }
                  if($(html).find("#"+name).val()  != "")
                    {
                    $(html).find('[for='+name+']').addClass('active');
                    }
                  //checkbox 11-01-2018
if($(html).find('[name='+name+']').attr('type')=="radio")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
      //$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+j);
}  
if($(html).find('[name='+name+']').attr('type')=="checkbox")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
}

  if ($(html).find('[name='+name+']').is( "span"))
  {
	  
	  $(html).find('[name='+name+']').hasClass("DataFld")
	  {
		  
		  $(html).find('[name='+name+']').text(val);
		  
	  }
  
  }



            /*if($("#"+ name).attr('type') == 'checkbox')
                        {
                  $("#"+ name).prop("checked",val);
                        }*/
            if($(html).find("#"+ name).is( "select" ))
            {
            var optn="<option  value='"+val+"'>" + val + "</option>"
            if($(html).find("#"+name+" option[value='" + val + "']").length==0)
            {
                  $(html).find("#"+ name).append(optn)
            $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
            }
            else
                  {
                  $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
                  }
      //    if($("#"+ name).prev('ul').length == 0)
                  //{
            
            $(html).find("#"+ name).addClass("mdb-select");
            
                  //}
            }
            //IsCURCommaFields
            var x = $(html).find("#" + name).hasClass("IsCURCommaFields");
           if (x == true) {
                        if(val=="")
                        {
                              val= "0";
                        }
						
						
			if (val.replace(/,/g,"").indexOf('.')>0)
			{

			if (val.replace(/,/g,"").split('.')[1] > 0)
			{
$(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(2)));
			}	
else{
$(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}	
			
			
			}
else{			
						
                        $(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}
          }
		  if($(html).find("#" + name).hasClass("DataGRP")){
			  //Hide same date
			  if(GetDateFldzz != val)
			  {
				  GetDateFldzz=val
			  }
			  else{
				$(html).find("#" + name).closest('.form-row').hide()  
			  }
		  }
          else {
                        //For Attached Photo identity Start
                  var y = $(html).find("#" + name).hasClass("ImgIdnt");
          if (y == true) {
                  var IOP=LoadFrmXML("RS006");
                  val = IOP+val;
                  document.getElementById(name).src = val;
          }
                        //For Attached Photo identity End
                  else
                  {                      
                        if ($(html).find("#"+name).length > 0)
                  {
                              $(html).find("#"+name).val(val);
                  }
                        }
          }
              }
              else
                  {
                  if($(html).find("#"+ name).is( "select" ))
                        {
                	  
                	    $(html).find("#"+ name).addClass("mdb-select");
                	  
                        //if($("#"+ name).prev('ul').length == 0)
                              //{
                	 //   $(html).find("#"+ name).material_select('destroy');
                        
                              //}
                        }
                  }
              
              if($($(html).find("." + FieldClass)[i]).attr("type") == "radio")
              {
             	 var radioID = $($(html).find("." + FieldClass)[i]).attr("id")
             	 
             	 $($(html).find("." + FieldClass)[i]).attr("id",radioID + j);
             	 $(html).find("[for="+radioID+"]").attr("for",radioID + j);
             	 
             	//$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+j);
              }
              
              $(html).find("#"+name).attr("id",name + j);
              if ($(html).find("[for="+name+"]").length > 0)
                    {
                    $(html).find("[for="+name+"]").attr("for",name + j)
                    }
              
              
              
             // $(html).find("#"+name).attr("id",name + j);
             // $(html).find("#"+name).attr("id",name + j);
          }
            }    
              
              $("."+DV).append(html);
              
              
              $("."+DV).last().find('.mdb-select').material_select('destroy');
              $("."+DV).last().find('.mdb-select').material_select();
              
           // Calendar
              var $input = $(document).find('.datepicker').pickadate({
                  //editable: 'true',
              format: 'dd/mm/yyyy',
              selectYears: 200,
              selectMonths: true
              })
              .on("change", function() {
                $(this).prev().prev().val($(this).val());
                $(this).prev().prev().focus();
              });
              
              $("."+DV).last().find(".MultiGridTrg").click();
            }
	   }
      //$("#COBI_CUSID").val($(CUSID).find("Val1").text());
	  
	  // FOR ONLOAD 1 STRIP OPEN FOR EXPANDABLE STRIPS START
	    if ($(html).find('.FormaccordionSUB').length > 0)
      	   {
      	   
          	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
			  $($("."+DV).find('.FormaccordionSUB').find('a')[0]).click();
			  $($($("."+DV).find('.FormaccordionSUB')[0]).find('div')[1]).addClass("show");
		   }
	  // FOR ONLOAD 1 STRIP OPEN FOR EXPANDABLE STRIPS END
}
/***QUERY MODULE END***/

function TxtGridsubmitdata_V2(TableID,GrdPrfx,MnPrfx,FieldsClassName) {
	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');
	var formxml="<Data>";

	for(j=0;j<$("."+TableID).find('.DYNROW').length;j++)
	{
	formxml= formxml + "<row>";

	var html = $("."+TableID).find('.DYNROW')[j];

	//$(html).find("." + FieldsClassName).length
	
	var x = $(html).find("." + FieldsClassName).length;//document.getElementsByClassName(FieldsClassName);
	// var y = document.getElementsByTagName("select");
	 var name = "";
	 var fieldid = "";
	 var value = "";
	 var type = "";
	
	 for (i = 0; i < x; i++) {
		 
		 if($($(html).find("." + FieldsClassName)[i]).is("select")==true || $($(html).find("." + FieldsClassName)[i]).is("input")==true || $($(html).find("." + FieldsClassName)[i]).is("textarea")==true){

		     name = $($(html).find("." + FieldsClassName)[i]).attr("name");
		     fieldid = $($(html).find("." + FieldsClassName)[i]).attr("id");
		   //  value = document.getElementsByClassName(FieldsClassName).item(i).value;
		   
		     if($(html).find('#' + fieldid).attr('type')=="radio")
		     {
		      //name=name.split('RVAL')[0];
		      value=$(html).find('input[id='+fieldid+']:checked').val();
		      if(value==undefined)
		      {
		       value = "";
		   }
		     }
		     else if($(html).find('#' + fieldid).attr('type')=="checkbox")
		     {
		      value=$(html).find('input[id='+fieldid+']').prop("checked");
		      if(value==undefined)
		      {
		       value = "";
		   }
		     }
		     else if ($(html).find('#' + fieldid).hasClass("IsCURCommaFields")) {
		         value = $($(html).find("." + FieldsClassName)[i]).val().replace(/,/g, "");
		     }
		     else {
		if ($(html).find('#' + fieldid).hasClass("ImgIdnt")) {
		if(document.getElementsByClassName(FieldsClassName).item(i).src.indexOf("/Attachments/")!=-1)
		{
		value = document.getElementsByClassName(FieldsClassName).item(i).src;
		value = "/Attachments/" + value.split("/Attachments/")[1];
		}
		else{
		value = "";
		}
		}
		else
		{
		         value = $($(html).find("." + FieldsClassName)[i]).val().replace(/,/g, "");
		}
		     }
		     //type = document.getElementsByTagName("input").item(i).type;
		     //if(fieldid !="" && type!="submit")
		     //{
		     //if(fieldid !="" && type!="radio")
		     //{
		     
		    // value = value.toString().replace(/\&/g, "and");
		 	//var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
		     
		if(value != "")
		{
			var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
		}
		     //}
		     //}


		}
	    
	
	}


	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;

	}


// Multi Row Page Data Save End

//Multi Row Grid Page Data Save Start 

function TxtGridsubmitdata_V3(TableID,GrdPrfx,MnPrfx) {	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');
     
	var ORGLTBLname = TableID;
	
	var formxml="<Data>";
	
	var TblLngth = $("[name="+ORGLTBLname+"]").length -1;
	
	
	for (r=0;r<TblLngth;r++)
	{
	
		TableID = $($("[name="+ORGLTBLname+"]")[r]).attr("id");
		
	var fieldname="";

	

	for(j=0;j<$("#"+TableID).find('.tbody').find('.tbodytr').length;j++)
	{
	formxml= formxml + "<row>";

	var rowwise = $("#"+TableID).find('.tbody').find('.tbodytr')[j];
	
	if($(rowwise).find('.tbodytrtd').text()=="No data available in table"){
		formxml+='</row>'
			//return formxml;
	}
	else{
	for(i=0;i<$($("#Grid"+ORGLTBLname)).find('thead').find('th').length;i++)
	 {
	    name = $($($("#Grid"+ORGLTBLname)).find('thead').find('th')[i]).text();
	   
	    fieldname = name + j;
	    
	    
	    if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').length > 0)
	    	
	    	{
	        if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="radio")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']:checked').val();
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="checkbox")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').prop("checked");
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').hasClass("IsCURCommaFields")) {
	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val().replace(/,/g, "");
	        }
	        else {

	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val();
	 
	        }
	    	}
	    else
	    	{
	    	 value= $($(rowwise).find('.tbodytrtd')[i]).text();
	    	}
	    	
	   if(reg.test(value)==true)
	  {
	//if($($(rowwise).find('.tbodytrtd')[i]).text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
		//{
	  value = value.replace(/,/g, "");
		}
		else
		{
			value = value
		}
	  // value = $($(rowwise).find('.tbodytrtd')[i]).text().replace(/[^\d\.\-\ ]/g, '');
	  
	    //value =  value.replace(/\s/g, "");
	   if(value != "" )
	if(   value != undefined)
	{
	   {
	    value = value.toString().replace(/\&/g, "and");
	var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
	   }
	   }
	}
	 
	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	 }
	}
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;
	}

// Multi Row Grid Page Data Save End

//Pop up Grid STRT
function TxtGridsubmitdata_V4(TableID,GrdPrfx,MnPrfx,HTML) {	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');

	var fieldname="";

	var formxml="<Data>";

	for(j=0;j<$(HTML).find('table[name="'+TableID+'"]').find('.tbody').find('.tbodytr').length;j++)
	{
	formxml= formxml + "<row>";

	var rowwise = $(HTML).find('table[name="'+TableID+'"]').find('.tbody').find('.tbodytr')[j];
	
	if($(rowwise).find('.tbodytrtd').text()=="No data available in table"){
		formxml+='</row></Data>'
			return formxml;
	}
	for(i=0;i<$($("#Grid"+TableID)).find('thead').find('th').length;i++)
	 {
	    name = $($($("#Grid"+TableID)).find('thead').find('th')[i]).text();
	   
	    fieldname = name + j;
	    
	    
	    if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').length > 0)
	    	
	    	{
	        if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="radio")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']:checked').val();
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="checkbox")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').prop("checked");
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').hasClass("IsCURCommaFields")) {
	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val().replace(/,/g, "");
	        }
	        else {

	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val();
	 
	        }
	    	}
	    else
	    	{
	    	 value= $($(rowwise).find('.tbodytrtd')[i]).text();
	    	}
	    	
	   if(reg.test(value)==true)
	  {
	//if($($(rowwise).find('.tbodytrtd')[i]).text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
		//{
	  value = value.replace(/,/g, "");
		}
		else
		{
			value = value
		}
	  // value = $($(rowwise).find('.tbodytrtd')[i]).text().replace(/[^\d\.\-\ ]/g, '');
	  
	    //value =  value.replace(/\s/g, "");
	   if(value != "" )
	if(   value != undefined)
	{
	   {
	    value = value.toString().replace(/\&/g, "and");
	var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
	   }
	   }
	}
	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;
	}

//Pop up Grid END


//V5 STRT

function TxtGridsubmitdata_V5(TableID,GrdPrfx,MnPrfx) {	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');
     
	var ORGLTBLname = TableID;
	
	var formxml="<Data>";
	
	var TblLngth = $("[name="+ORGLTBLname+"]").length -1;
	
	
	for (r=0;r<TblLngth;r++)
	{
	
		TableID = $($("[name="+ORGLTBLname+"]")[r]).attr("id");
		
	var fieldname="";

	

	for(j=0;j<$("#"+TableID).find('.tbody').find('.tbodytr').length;j++)
	{
	formxml= formxml + "<row>";

	var rowwise = $("#"+TableID).find('.tbody').find('.tbodytr')[j];
	
	if($(rowwise).find('.tbodytrtd').text()=="No data available in table"){
		formxml+='</row>'
			//return formxml;
	}
	else{
	for(i=0;i<$($("#Grid"+ORGLTBLname)).find('thead').find('th').length;i++)
	 {
	    name = $($($("#Grid"+ORGLTBLname)).find('thead').find('th')[i]).text();
	   
	    fieldname = name +TableID+ j;
	    
	    
	    if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').length > 0)
	    	
	    	{
	        if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="radio")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']:checked').val();
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="checkbox")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').prop("checked");
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').hasClass("IsCURCommaFields")) {
	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val().replace(/,/g, "");
	        }
	        else {

	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val();
	 
	        }
	    	}
	    else
	    	{
	    	 value= $($(rowwise).find('.tbodytrtd')[i]).text();
	    	}
	    	
	   if(reg.test(value)==true)
	  {
	//if($($(rowwise).find('.tbodytrtd')[i]).text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
		//{
	  value = value.replace(/,/g, "");
		}
		else
		{
			value = value
		}
	  // value = $($(rowwise).find('.tbodytrtd')[i]).text().replace(/[^\d\.\-\ ]/g, '');
	  
	    //value =  value.replace(/\s/g, "");
	   if(value != "" )
	if(   value != undefined)
	{
	   {
	    value = value.toString().replace(/\&/g, "and");
	var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
	   }
	   }
	}

	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	}
	}
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;
	}

//V5 END


//V6 STRT

function TxtGridsubmitdata_V6(TableID,GrdPrfx,MnPrfx,HTML) {	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');

	var fieldname="";


	var formxml="<Data>";

	for(j=0;j<$(HTML).find('table[name="'+TableID+'"]').find('.tbody').find('.tbodytr').length;j++)
	{
	formxml= formxml + "<row>";

	var rowwise = $(HTML).find('table[name="'+TableID+'"]').find('.tbody').find('.tbodytr')[j];
	
	if($(rowwise).find('.tbodytrtd').text()=="No data available in table"){
		formxml+='</row></Data>'
			return formxml;
	}

	for(i=0;i<$($("#Grid"+TableID)).find('thead').find('th').length;i++)
	 {
	    name = $($($("#Grid"+TableID)).find('thead').find('th')[i]).text();
	   
	    fieldname = name+j;
	    
	    
	    if ($($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).length > 0)
	    	
	    	{
	        if($($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).attr('type')=="radio")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname+':checked').val();
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if($($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).attr('type')=="checkbox")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).prop("checked");
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if ($($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).hasClass("IsCURCommaFields")) {
	            value = $($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).val().replace(/,/g, "");
	        }
	        else {

	            value = $($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).val();
	 
	        }
	    	}
	    else
	    	{
	    	 value= $($(rowwise).find('.tbodytrtd')[i]).text();
	    	}
	    	
	   if(reg.test(value)==true)
	  {
	//if($($(rowwise).find('.tbodytrtd')[i]).text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
		//{
	  value = value.replace(/,/g, "");
		}
		else
		{
			value = value
		}
	  // value = $($(rowwise).find('.tbodytrtd')[i]).text().replace(/[^\d\.\-\ ]/g, '');
	  
	    //value =  value.replace(/\s/g, "");
	   if(value != "" )
	if(   value != undefined)
	{
	   {
	    value = value.toString().replace(/\&/g, "and");
	var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
	   }
	   }
	}
	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;
	}

//V6 END

//Other Income Multi Row Grid Page Data Save Start 

function TxtGridsubmitdata_V9(TableID,GrdPrfx,MnPrfx) {	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');
     
	var ORGLTBLname = TableID;
	
	var formxml="<Data>";
	
	var TblLngth = $("[name="+ORGLTBLname+"]").length -1;
	
	
	for (r=0;r<TblLngth;r++)
	{
	
		TableID = $($("[name="+ORGLTBLname+"]")[r]).attr("id");
		
	var fieldname="";

	

	for(j=0;j<$("#"+TableID).find('.tbody').find('.tbodytr').length;j++)
	{
	formxml= formxml + "<row>";

	var rowwise = $("#"+TableID).find('.tbody').find('.tbodytr')[j];
	
	if($(rowwise).find('.tbodytrtd').text()=="No data available in table"){
		formxml+='</row>'
			//return formxml;
	}
	else{
	for(i=0;i<$($("#Grid"+ORGLTBLname)).find('thead').find('th').length;i++)
	 {
	    name = $($($("#Grid"+ORGLTBLname)).find('thead').find('th')[i]).text();
	   
	    fieldname = name + j;
		
		if(($($(rowwise).find('.tbodytrtd')[0]).find('.datasave').not('div')[0].nodeName == "SELECT" || $($(rowwise).find('.tbodytrtd')[0]).find('.datasave').not('div')[0].nodeName == "INPUT") && (parseInt($($(rowwise).find('.tbodytrtd')[0]).find('.datasave').not('div').attr("id").replace(name,'')) != j)){
			var deltrows = 0;
			deltrows = parseInt($($(rowwise).find('.tbodytrtd')[0]).find('.datasave').not('div').attr("id").replace($($($("#Grid"+ORGLTBLname)).find('thead').find('th')[0]).text(),'')) - j;
			fieldname = name + (parseInt(j)+deltrows).toString();
		}
	    
	    if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').length > 0)
	    	
	    	{
	        if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="radio")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']:checked').val();
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="checkbox")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').prop("checked");
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').hasClass("IsCURCommaFields")) {
	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val().replace(/,/g, "");
	        }
	        else {

	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val();
	 
	        }
	    	}
	    else
	    	{
				value= $($(rowwise).find('.tbodytrtd')[i]).text();
				/**if(($($(rowwise).find('.tbodytrtd')[0]).find('.datasave').not('div')[0].nodeName == "SELECT" || $($(rowwise).find('.tbodytrtd')[0]).find('.datasave').not('div')[0].nodeName == "INPUT") && (parseInt($($(rowwise).find('.tbodytrtd')[0]).find('.datasave').not('div').attr("id").replace(name,'')) != j)){
					if(parseInt($($(rowwise).find('.tbodytrtd')[0]).find('.datasave').not('div').attr("id").replace(name,'')) != j){
						
					}
					IN THIS ELSE WON'T COME, BCZ IDEALLY IF COLUMN+ROW = NAME+J THEN 
					$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').length LINE WILL SATISFY, SO ELSE PART WON'T COME
					
				}
				else{
					value= $($(rowwise).find('.tbodytrtd')[i]).text();
				}**/
	    	}
	    	
	   if(reg.test(value)==true)
	  {
	//if($($(rowwise).find('.tbodytrtd')[i]).text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
		//{
	  value = value.replace(/,/g, "");
		}
		else
		{
			value = value
		}
	  // value = $($(rowwise).find('.tbodytrtd')[i]).text().replace(/[^\d\.\-\ ]/g, '');
	  
	    //value =  value.replace(/\s/g, "");
	   if(value != "" )
	if(   value != undefined)
	{
	   {
	    value = value.toString().replace(/\&/g, "and");
	var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
	   }
	   }
	}
	 
	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	 }
	}
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;
	}

// Other Income Multi Row Grid Page Data Save End

//MULTI GRID IN LOAD MULTI STRT
function TxtGridsubmitdata_V10(TableID,GrdPrfx,MnPrfx,HTML) {	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');

	var fieldname="";
	var loadmultirow = $(HTML).attr("data-row")

	var formxml="<Data>";

	for(j=0;j<$(HTML).find('table[name="'+TableID+'"]').find('.tbody').find('.tbodytr').length;j++)
	{
	formxml= formxml + "<row>";

	var rowwise = $(HTML).find('table[name="'+TableID+'"]').find('.tbody').find('.tbodytr')[j];
	
	if($(rowwise).find('.tbodytrtd').text()=="No data available in table"){
		formxml+='</row></Data>'
			return formxml;
	}

	for(i=0;i<$($("#Grid"+TableID)).find('thead').find('th').length;i++)
	 {
	    name = $($($("#Grid"+TableID)).find('thead').find('th')[i]).text();
	   
	    fieldname = name+loadmultirow+TableID+loadmultirow+j;
	    
	    
	    if ($($(rowwise).find('.tbodytrtd')[i]).find("[id="+fieldname+"]").length > 0)
	    	
	    	{
	        if($($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).attr('type')=="radio")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname+':checked').val();
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if($($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).attr('type')=="checkbox")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('.'+fieldname).prop("checked");
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if ($($(rowwise).find('.tbodytrtd')[i]).find("[id="+fieldname+"]").hasClass("IsCURCommaFields")) {
	            value = $($(rowwise).find('.tbodytrtd')[i]).find("[id="+fieldname+"]").val().replace(/,/g, "");
	        }
	        else {

	            value = $($(rowwise).find('.tbodytrtd')[i]).find("[id="+fieldname+"]").val();
	 
	        }
	    	}
	    else
	    	{
	    	 value= $($(rowwise).find('.tbodytrtd')[i]).text();
	    	}
	    	
	   if(reg.test(value)==true)
	  {
	//if($($(rowwise).find('.tbodytrtd')[i]).text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
		//{
	  value = value.replace(/,/g, "");
		}
		else
		{
			value = value
		}
	  // value = $($(rowwise).find('.tbodytrtd')[i]).text().replace(/[^\d\.\-\ ]/g, '');
	  
	    //value =  value.replace(/\s/g, "");
	   if(value != "" )
	if(   value != undefined)
	{
	   {
	    value = value.toString().replace(/\&/g, "and");
	var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
	   }
	   }
	}
	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;
	}
//MULTI GRID IN LOAD MULTI END	

function CollectionINTR(TypeFieldID,AmtFieldID)
{
var Amount = $("#" + AmtFieldID).val().replace(/,/g, "");
var Type = $("#" + TypeFieldID).val();
var PRCSID = $("#PrcsID").val();
var Prvnt = $("#Prvnt").val();


//PAYTM PROCESSING CHECK START		
		 var xml=UI_getdata($("#PrcsID").val(),$("#PFDT_PFNO").val(),"","","","LSW_SONLNEPAYMNTCHK")
			if($(xml).find('RESULT').text()=="No")
			 {
				alert($(xml).find('MSG').text());
				return;
			 }
			if($(xml).find('RESULT').text()=="Success")
			 {
				 	
				 
				alert($(xml).find('MSG').text());
				
				location.reload();
				
				return;
			 }			 
//PAYTM PROCESSING CHECK END



var CollectionType=$("input[name='PFDT_COLECTIONTYP']:checked"). val();

if (CollectionType == undefined)
{
alert("Enter the Collection Type");
return false;
}

if (CollectionType == "Deferred")
{
alert("Enter the Collection Type Collected");
return false;
}

if (Amount == "")
	{
	alert("Enter the Amount");
	return false;
	}

if (Type == "Paytm")
{
	
	
var w = "600";
var h = "500";
	var left = (screen.width/2)-(w/2);
	  var top = (screen.height/2)-(h/2);
	  var URL =window.location.origin+"/TPLSW/PAYTM?UniqueID="+Amount+"&Type="+Type+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt;

	  $(".loader").show();	  
	  childWindow =  window.open(URL, "PAYMENT GATEWAY", 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, //width='+w+', height='+h+', top='+top+', left='+left);
	  //window.open(https://google.com/convert-tab-to-private-browsing-mode/, "PAYMENT GATEWAY", 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	  //chrome.windows.create({"url": window.location.origin+"/TPLSW/PAYTM?UniqueID="+Amount+"&Type="+Type+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt, "incognito": true});
     //chrome.windows.create({url:window.location.origin+"/TPLSW/PAYTM?UniqueID="+Amount+"&Type="+Type+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt,incognito: true});
	//chrome.windows.create({"url": URL, "incognito": true});
	//window.open(window.location.origin+"/TPLSW/PAYTMRes?PrMs1=REFID00004320200115215708", "", "width=200,height=100");
}
else
	{
	
	alert("Select Paytm Online Mode");
	
	}
}

function CollectionINTRPF(TypeFieldID,AmtFieldID)
{
var Amount = $("#" + AmtFieldID).val().replace(/,/g, "");
var Type = $("#" + TypeFieldID).val();
var PRCSID = $("#PrcsID").val();
var Prvnt = $("#Prvnt").val();



//PAYTM PROCESSING CHECK START		
		 var xml=UI_getdata($("#PrcsID").val(),$("#PFDT_PFNO").val(),"","","","LSW_SONLNEPAYMNTCHK")
			if($(xml).find('RESULT').text()=="No")
			 {
				alert($(xml).find('MSG').text());
				return;
			 }
			if($(xml).find('RESULT').text()=="Success")
			 {
				
				  
				alert($(xml).find('MSG').text());
				
				location.reload();
				
				return;
			 }			 
//PAYTM PROCESSING CHECK END



var CollectionType=$("input[name='PFDT_COLECTIONTYP']:checked"). val();

if (CollectionType == undefined)
{
alert("Enter the Collection Type");
return false;
}

if (CollectionType == "Deferred")
{
alert("Enter the Collection Type Collected");
return false;
}

if (Amount == "")
	{
	alert("Enter the Amount");
	return false;
	}

if (Type == "Paytm")
{
	
	$("#Save1").click();
	
	

    var Payxml=UI_getdata($("#PrcsID").val(),$("#PFDT_PFNO").val(),"","","","LSW_SCHKPAYSTS")
    
     if($(Payxml).find("Result").text()=="Yes")
     {
      CheckPayStatus();
     }
	 else
	 {

     var w = "600";
     var h = "500";
	 var left = (screen.width/2)-(w/2);
	 var top = (screen.height/2)-(h/2);
	  
	  Type=Type+",PF," + $("#PFDT_PFNO").val();
	  
	  var URL =window.location.origin+"/TPLSW/PAYTM?UniqueID="+Amount+"&Type="+Type+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt;
	 
	  $(".loader").show();	  
	  
	 // chrome.window.create({"url": URL, "incognito": true});
	  
	 childWindow =  window.open(URL, "PAYMENT GATEWAY", 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left +',incognito: true');
 
	 }
	// window.open("www.google.com", "PAYMENT GATEWAY", 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);

	 // childWindow =  window.open(URL, window.location.origin+"/TPLSW/PAYTM?UniqueID="+Amount+"&Type="+Type+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt);
	   //chrome.windows.create({"url": url, "incognito": true});
	//window.open(window.location.origin+"/TPLSW/PAYTMRes?PrMs1=REFID00004320200115215708", "", "width=200,height=100");
}
else
{
	   alert("Select Paytm Online Mode");
}
}

var intervalID, childWindow;

function checkWindow() {
    if (childWindow && childWindow.closed) {
        window.clearInterval(intervalID);
        $(".loader").fadeOut("slow");
        //alert('closed');
        childWindow=null;
        intervalID = window.setInterval(checkWindow, 500);
    }
    
    //intervalID = window.setInterval(checkWindow, 500);
}
var intervalID = window.setInterval(checkWindow, 500);


$(document).on('keypress', '.datalink', function () 
		{
	var FiledId=$(this).attr("data-link").split("|")[0]
	var VerifyId=$(this).attr("data-link").split("|")[1]
	var Attachemnt=$(this).attr("data-link").split("|")[2]
	var Attachupload=$(this).attr("data-link").split("|")[3]
	var Attachview=$(this).attr("data-link").split("|")[4]
	var Attachfield=$(this).attr("data-link").split("|")[5]
	var UploadLabel=$(this).attr("data-link").split("|")[6]
	var FiledIdVal=$("#"+FiledId).val();
	var VerifyIdVal=$("#"+VerifyId).val();
	
	if(Attachemnt=="pan")
	{
		var Dedupe=$(this).attr("data-link").split("|")[7]
		
		if($("#"+Dedupe).val()!="")
		{
			$("#"+Dedupe).val('');
		   	$("."+Dedupe).text('Dedupe Check');
			$("."+Dedupe).addClass("btn-yelInplain");
		    $("."+Dedupe).removeClass("btn-GrnInplain");
		    $("."+Dedupe).removeClass("btn-RedInplain");
		} 
	}
	if(Attachemnt=="VEHICLE")
	{
		if($("#"+VerifyId).val()!="")
		  {
		    $("#"+VerifyId).val('');
		    $("."+VerifyId).text('Verify');
			$("."+VerifyId).addClass("btn-yelInplain");
		    $("."+VerifyId).removeClass("btn-GrnInplain");
		    $("."+VerifyId).removeClass("btn-RedInplain");
		  }
	}
	if(Attachemnt=="Udyam")
	{
		if(Attachupload=="Multi")
		{
			//var HTML=$(this).closest('.DYNROW')
			//var Row=$(this).closest('.DYNROW').attr('data-row')
		if($("#"+VerifyId).val()!="")
		  {
		    $("#"+VerifyId).val('');
			$("#"+UploadLabel).val('');

		    $("."+Attachfield).text('Verify');
			$("."+Attachfield).addClass("btn-yelInplain");
		    $("."+Attachfield).removeClass("btn-GrnInplain");
		    $("."+Attachfield).removeClass("btn-RedInplain");
		  }
		}
		else
		{
		 if($("#"+VerifyId).val()!="")
		  {
		    $("#"+VerifyId).val('');
			$("#"+Attachupload).val('');
		    $("."+VerifyId).text('Verify');
			$("."+VerifyId).addClass("btn-yelInplain");
		    $("."+VerifyId).removeClass("btn-GrnInplain");
		    $("."+VerifyId).removeClass("btn-RedInplain");
		  }
		}
	}
 else if(Attachemnt!="Udyam")
	{
	if(VerifyIdVal!="")
		{
		  $("#"+VerifyId).val('');
		  $("."+FiledId).text('Verify')
		  $("."+FiledId).addClass("btn-yelInplain");
		  $("."+FiledId).removeClass("btn-GrnInplain");
		  $("."+FiledId).removeClass("btn-RedInplain");
		  
		 
		  $("."+Attachupload).show();
		  $("."+Attachupload).find('.file-field').show()
		  $("."+Attachview).hide();
		  $("."+Attachemnt).next().show();
		  if($("."+Attachupload).find('.file-field').text().replace(/[\r\n]+/g," ").replace(/\s/g,"")=="")
		  {
		  	$("."+Attachemnt).find('.name').text(UploadLabel)
		  }
		  else
		  {
		  	$("."+Attachemnt).find('.name').text('')
		  }
		  $("#"+Attachfield).val('')
		  $("#"+Attachfield).removeClass('DOCMndtry');
		  $("input[name=datafile]").attr('disabled',false);
		  $("input[name=datafile]").attr('display','block');
		  $("."+Attachemnt).hide();
		}
	}
		})

function DocFldUpldHndlr_V1(id,HdnID,docu,KYCName,FrmName,UniqID,HTML)
{
	var Val=$(id).val();

	if(Val!="")
	{
	    var domain= LoadFrmXML("RS001");
	    var usrpwd= LoadFrmXML("RS002");
	    var PrcsID=getUrlParam("PrcsID");
	    var FormName= FrmName;
	  // var CusID=$('#CBSI_CUSID').val()
	    var CusID=UniqID
	    var DocName=KYCName
	    var names="";
	    var descrptns="";
		var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
		var flsize = "";
	 var fd = new FormData();
	   var vrsnno= "";
		var prodata = "";
	var CountAttch=1;
		
		 for(var c=0;c<CountAttch;c++)
		 {
	      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
		     for(var i = 0;i<file_data.length;i++){
				var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
		         fd.append("file_"+c, file_data[i]);
		         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
				 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
				 vrsnno += $(op).find("VR").text()+',';
				 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
				 {
					 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
				 }
		         descrptns += 'FieldDocument'+',';
		     }
		 }
	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
  //   var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
 //    var Filename  = names.replace(',','')
       var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
 
		var xml=UI_getdata(FileType,FileSize,Filename,"","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }
	
  names=names+'.'+FileType	 
		 
		 
	var y=  names;
/*	var specialChars = "<>&#^|~`"
	var check = function(string){
	    for(i = 0; i < specialChars.length;i++){
	        if(string.indexOf(specialChars[i]) > -1){
	            return true
	        }
	    }
	    return false;
	}

	if(check(y) == false){
	    // Code that needs to execute when none of the above is in the string
	}else{
	    alert('File name contains special character please remove and upload');
		$(id).closest('td').find('input[type="file"]').val('')
		return;
	}*/
	 ajaxindicatorstart("Uploading.. Please wait");
		    $.ajax({
		    	url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&CusID="+CusID+"&DocName="+DocName,
		        data: fd,
				async:false,
		        contentType: false,
		        processData: false,
		        type: 'POST',
		        success: function(data){
				
				if(data=="Fail")
		        		{
							 ajaxindicatorstop();
		        		alert(LoadFrmXML("V0119"));
						return
		        		}
				else{
					//AttchDmsIns(data,'upload',prodata);
					//$(id).val('View');
					$("#"+HdnID).val(data.split('~')[2])
					$(id).closest('td').find('input[type="file"]').attr('disabled',true)
					$(id).closest('td').find('input[type="file"]').val('');
					$(id).closest('td').find('input[type="file"]').hide();
				//	$(id).closest('td').replace('','');
				//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
					
					//
					
					$(id).closest('.md-form').find('span').remove()
					 $(id).val('')
			
				   // $(id).val(data.split('~')[2])
					var UPLOAD=docu+'UPLOAD'
					$(HTML).find('#'+UPLOAD).hide();
					$(HTML).find('.'+docu).show();
					$(id).closest('.md-form').append('<span class="name">'+names+'</span>');
					
						ajaxindicatorstop();
						alert(LoadFrmXML("V0118"));
						return
						
					}	
						 ajaxindicatorstop(); 
		        },
		        failure:function(data)
		        {
		     		  ajaxindicatorstop();
						alert(LoadFrmXML("V0119"));
						return
		        	
		        }
		    });
			
			  ajaxindicatorstop();
			  }
			  else{
			  
			  alert('select the file to upload');
			  }

}


//Photo View Document Upload start

function PhSignFldUpldHndlr(id,ReUpload,KYCName,Prifx,FromName,CusId)
{
var Val=$(id).val()
if($(id).closest('td').find('input[type="file"]').val()!="")
{
  var Val=$(id).val()
if($(id).closest('td').find('input[type="file"]').val()!="")
{
	var domain= LoadFrmXML("RS001");
  var usrpwd= LoadFrmXML("RS002");
  var PrcsID=getUrlParam("PrcsID");
  var FormName= FromName;
  var CusID=$('#'+CusId).val()
  var DocName=KYCName
  var names="";
  var descrptns="";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	var flsize = "";
var fd = new FormData();
 var vrsnno= "";
	var prodata = "";
var CountAttch=1;
for(var c=0;c<CountAttch;c++)
{
    file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
   for(var i = 0;i<file_data.length;i++){
var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
       fd.append("file_"+c, file_data[i]);
       names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
vrsnno += $(op).find("VR").text()+',';
if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
{
$($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
}
       descrptns += 'FieldDocument'+',';
   }
}

var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];

//for UPLOAD  SIGNUPLOAD IMAGE

    var Filename  = names.replace(',','')
	var xml=UI_getdata(FileType,FileSize,Filename,"","","LSW_SGETSIGNUPLOADIMGE")
	var FileAccept=$(xml).find('RESULT').text()
if(FileAccept == 'NO')
{
	alert($(xml).find('alert').text())
	$(id).closest('td').find('input[type="file"]').val('')
	return
}

var y=  names;
/*var specialChars = "<>&#^|~`"
var check = function(string){
  for(i = 0; i < specialChars.length;i++){
      if(string.indexOf(specialChars[i]) > -1){
          return true
      }
  }
  return false;
}
if(check(y) == false){
  // Code that needs to execute when none of the above is in the string
}else{
  alert('File name contains special character please remove and upload');
$(id).closest('td').find('input[type="file"]').val('')
return;
}*/
var UploadId= $(id).attr('id');
//var UpldImg;
var UpldImg=$(id).closest('td').find('input[type="hidden"]').attr('id').replace(Prifx,'')

ajaxindicatorstart("Uploading.. Please wait");
  $.ajax({
  	url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&CusID="+CusID+"&DocName="+DocName,
      data: fd,
		async:false,
      contentType: false,
      processData: false,
      type: 'POST',
      success: function(data){

if(data=="Fail")
      	 {
ajaxindicatorstop();
      	 alert(LoadFrmXML("V0119"));
return
      	 }
else{
//AttchDmsIns(data,'upload',prodata);
//$(id).val('View');
$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
$(id).closest('td').find('input[type="file"]').attr('disabled',false)
$(id).closest('td').find('input[type="file"]').val('');
$(id).closest('td').find('input[type="file"]').hide();
var ImgURL=data.split('~')[2]

var url= $("#DMY1").val()
//RedirectURL = url.replace("XXDMSIDXX",ImgURL.split("\\")[0]);
var RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + ImgURL.split("\\")[0];
$('.tablezoom').addClass('zoom')
//var IOP=LoadFrmXML("RS006");
//var urlimage=url.replace("XXDMSIDXX",ImgURL.split("\\")[0]);

//URL=LoadFrmXML("RS006")+urlimage.replace(/\\/g, "/");
//URL="/LSW_Attachments"+ImgURL.replace(/\\/g, "/")

$("#"+UpldImg).attr('src',RedirectURL);
     // $("#"+UpldImg).attr('src',URL);
//$(id).closest('td').replace('','');
//$(id).closest('td').append('<img id="Attach" onclick="Fledwnld(this)" name="0" style="width: 21px;height: 19px;padding-bottom: 2px;" class="Dwnd" src="/ThemePro_LSW/ThemeproLO/Common/Images/Generate.png"> <img src="ThemeproLO/Common/Images/delete-16.png" id="MnlDel" class="View" style="padding-bottom: 2px;" onclick="Attchdelete(this)" alt="Smiley face"><span class="name">'+names.slice(0,-1)+'</span> ')
//$(id).closest('td').append('<img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile('+ReUpload+');" alt="Cinque Terre" width="20" height="20">')
//ViewAppDtl()
ajaxindicatorstop();
alert(LoadFrmXML("V0118"));
return
}	
ajaxindicatorstop(); 
      },
      failure:function(data)
      {
   	   ajaxindicatorstop();
alert(LoadFrmXML("V0119"));
return
      	
      }
  });

ajaxindicatorstop();
}
else{

alert('select the file to upload');
}
}	  
}

function LoadVwImage(PRFX)
{
var i;
var Len=$(document).find('.DocImg').length;

for(i=0;i<Len;i++)
{
var a=$($('.DocImg')[i]).val();
if(a!="")
{
var Id=$($('.DocImg')[i]).attr('id').replace(PRFX,'');

var url= $("#DMY1").val()
//RedirectURL = url.replace("XXDMSIDXX",a.split("\\")[0]);

//var IOP=LoadFrmXML("RS006");
//var urlimage=url.replace("XXDMSIDXX",a.split("\\")[0]);
var urlimage =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + a.split("\\")[0];
	
	//$("#DocView").attr("src", RedirectURL);
if(a!='')
{
$("#"+Id).attr('src',urlimage);
//$(PRFX+Id).closest('td').append('<img src="ThemeproLO/Common/Images/UploadImg.png" class="rounded" title="UPLOAD" onclick="ReuploadFile('+PRFX+Id+');" alt="Cinque Terre" width="20" height="20">')
}	
}	
}
}
//Document Upload ENd

function GetOCRDetls(DOCULRFLD,Type)
{
var docurldata = $("#" + DOCULRFLD).val();
var PRCSID1 = $("#PrcsID").val();
var Prvnt = $("#Prvnt").val();
var DocName = "";

if (docurldata == "")
	{
	alert("Upload the Cheque to Get the Details");
	return false;
	}

var doc1 = $("#DMY1").val().replace("XXDMSIDXX",$("#"+DOCULRFLD).val().split("\\")[0]);

DocName = $("#"+DOCULRFLD).val().split("\\")[1];

$.ajax({
    url: "/TPLSW/TotalKycOCR",
    type: 'POST',
    data: {DOCURL:doc1,PRCSID:PRCSID1,Type:Type,DOCNAME:DocName,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
    async:true,
   // dataType: 'json',
   // contentType:'application/json',
    
    success: function(stm){        
   // var obj = JSON.parse(JSON.stringify(stm))
    	 var obj = JSON.parse(stm)
    //alert(obj);

     if(obj["status-code"]=='101' || obj["statusCode"]=='101')
     {
	  
    	 
    	 //$("#PFDT_INSTRUMNTNO").val(obj["result"].acc_no);    	 
    	 $("#PFDT_BNKNAME").val(obj["result"].bank);
    	 $("#PFDT_IFSC").val(obj["result"].ifsc);
    	 $("#PFDT_BNKBRCH").val(obj["result"]["bank_details"].branch);
    	 
    	 $("#PFDT_CITY").val(obj["result"]["bank_details"].city);
    	 $("#PFDT_STATE").val(obj["result"]["bank_details"].state);
    	 $("#PFDT_ACCOUNTNO").val(obj["result"].acc_no);
    	
    	 var ChkFlds = ["PFDT_BNKNAME","PFDT_IFSC","PFDT_BNKBRCH","PFDT_CITY","PFDT_STATE","PFDT_ACCOUNTNO"];
		
		for (i=0;i<ChkFlds.length;i++)
		{
			
			if ( $("#"+ ChkFlds[i]).val() != "")
		{
			 $("#"+ ChkFlds[i]).attr("disabled",true);
			 $("#"+ ChkFlds[i]).next().addClass("active");
		}
		else
		{
			$("#"+ ChkFlds[i]).attr("disabled",false);
			 $("#"+ ChkFlds[i]).next().removeClass("active");
		}
			
		}
		
		
    	// $(".OCRDSBL").attr("disabled",true);
    	 //$(".OCRDSBL").next().addClass("active");
    	
    	 
 } 
 else if  (obj["status-code"]=='102' || obj["statusCode"]=='102')
 {
 
	 alert("Invalid Cheque");
	 
	 $(".OCRDSBL").val("");
	 $(".OCRDSBL").attr("disabled",false);
	 $(".OCRDSBL").next().removeClass("active");
	 
	 
 }
 else if (obj["status-code"]=='105' || obj["statusCode"]=='105')
	 {
 alert("Error Occured. Contant IT!!!");
	 
	 $(".OCRDSBL").val("");
	 $(".OCRDSBL").attr("disabled",false);
	 $(".OCRDSBL").next().removeClass("active");
	 }
},
error: function(stm) {
	 //window.alert(LoadFrmXML("V0125"))
	alert("Error Occured. Contant IT!!!");
	 
	 $(".OCRDSBL").val("");
	 $(".OCRDSBL").attr("disabled",false);
	 $(".OCRDSBL").next().removeClass("active");
	   }
});


}


function GetFullOCRDetls(DOCULRFLD,Type,BNKNAME,evnt)
{

var html = $(evnt).closest('.DYNROW');	
	
var docurldata = $(html).find("[name=" + DOCULRFLD+"]").val();
var PRCSID1 = $("#PrcsID").val();
var Prvnt = $("#Prvnt").val();
var DocName = "";

if (docurldata == "")
	{
	alert("Upload the Cheque to Get the Details");
	return false;
	}

var doc1 = $("#DMY1").val().replace("XXDMSIDXX",$(html).find("[name=" + DOCULRFLD+"]").val().split("\\")[0]);

DocName =$(html).find("[name=" + DOCULRFLD+"]").val().split("\\")[1];

$.ajax({
    url: "/TPLSW/TotalKycOCR",
    type: 'POST',
    data: {DOCURL:doc1,PRCSID:PRCSID1,Type:Type,DOCNAME:DocName,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
    async:true,
   // dataType: 'json',
   // contentType:'application/json',
    
    success: function(stm){        
   // var obj = JSON.parse(JSON.stringify(stm))
    	if (stm == "")
    		{
    		alert("Error Occured. Contant IT!!!");
    		return;
    		}
    		
    	
    	 var obj = JSON.parse(stm)
    //alert(obj);

     if(obj["status-code"]=='101' || obj["statusCode"]=='101')
     { 
    	
    	 //$("#PFDT_INSTRUMNTNO").val(obj["result"].acc_no);    	 
    	
    	 $(html).find("[name=" + BNKNAME.split(',')[0]+"]").val(obj["result"].bank);
    	 $(html).find("[name=" + BNKNAME.split(',')[1]+"]").val(obj["result"].ifsc);
    	 $(html).find("[name=" + BNKNAME.split(',')[2]+"]").val(obj["result"]["bank_details"].branch);
    	    	
    	 $(html).find("[name=" + BNKNAME.split(',')[3]+"]").val(obj["result"]["bank_details"].city);
    	 $(html).find("[name=" + BNKNAME.split(',')[4]+"]").val(obj["result"]["bank_details"].state);
    	 $(html).find("[name=" + BNKNAME.split(',')[5]+"]").val(obj["result"].acc_no);
		//var ChkFlds = "["+BNKNAME+"]";
		
		for (i=0;i<BNKNAME.split(',').length;i++)
		{
			
			if (  $(html).find("[name=" + BNKNAME.split(',')[i]+"]").val() != "")
		{
				 $(html).find("[name=" + BNKNAME.split(',')[i]+"]").attr("disabled",true);
				 $(html).find("[name=" + BNKNAME.split(',')[i]+"]").next().addClass("active");
		}
		else
		{
			 $(html).find("[name=" + BNKNAME.split(',')[i]+"]").attr("disabled",false);
			 $(html).find("[name=" + BNKNAME.split(',')[i]+"]").next().removeClass("active");
		}
			
		}
		
		
    	// $(".OCRDSBL").attr("disabled",true);
    	 //$(".OCRDSBL").next().addClass("active");
  	 
 } 
 else if  (obj["status-code"]=='402' || obj["statusCode"]=='402')
 {
	 alert("Insufficient Credit"); 
	 $(html).find(".OCRDSBL").val("");
	 $(html).find(".OCRDSBL").attr("disabled",false);
	 $(html).find(".OCRDSBL").next().removeClass("active"); 
 }
 else if  (obj["status-code"]=='102' || obj["statusCode"]=='102')
 {
	 alert("Invalid Cheque");
	 
	 $(html).find(".OCRDSBL").val("");
	 $(html).find(".OCRDSBL").attr("disabled",false);
	 $(html).find(".OCRDSBL").next().removeClass("active");

 }
 else if (obj["status-code"]=='105' || obj["statusCode"]=='105')
	 {
 alert("Error Occured. Contant IT!!!");
	 
 $(html).find(".OCRDSBL").val("");
 $(html).find(".OCRDSBL").attr("disabled",false);
 $(html).find(".OCRDSBL").next().removeClass("active");
	 }
    	
    	
},
error: function(stm) {
	 //window.alert(LoadFrmXML("V0125"))
	alert("Error Occured. Contant IT!!!");
	 
	 $(html).find(".OCRDSBL").val("");
	 $(html).find(".OCRDSBL").attr("disabled",false);
	 $(html).find(".OCRDSBL").next().removeClass("active");
	   }
});
}

function WFActvInit(ACTVID,WDATA,SNAME)
{
	
	if (SNAME == "")
		{
		SNAME = "LSW_SWFACTVINITCALL";
		}
	var result = "";
	 $.ajax({
         
         url: "/TPLSW/WFACTVINIT",
         //dataType: "json",
         data: {ACTVID : ACTVID,WDATA: WDATA,SNAME: SNAME,Prvnt : $("#Prvnt").val()},
         async: false,	      
         type: "POST",
         success: function(res) {
         		            	
         if	(res.split("~")[0] == "completed")
         	{
        	 result = "Success";
         	//alert("File Submitted Successful");
         	// $(location).attr('href',window.location.origin + "/TPLSW/Home")         	
         	}
         else
         	{
        	 result = "Fail";
         	}
             //console.log(res)
         },
         error: function(res) {
         	
        	 result = "Fail";
	            }
       
     });
	 return result;
}



function KYCDELETEFRTADBCK(Verify,FldId,Type,Attachment,AttachmentII,CUSID,ULABEL,AttcVerify,AttcVerifyII,KycDel,Prooftype,Verifytype,AadharMask1,AadharMask2)
{	

if(confirm('Are you sure you want to delete?') == true)
	{
	 $("#"+Attachment+"UPLOAD").css("display", "block")
	 $("."+Attachment).attr('disabled',false);
	 $("#"+AttachmentII+"UPLOAD").css("display", "block")
	 $("."+AttachmentII).attr('disabled',false);
	 $("."+Type).find('table').next().text('');
	 $("."+Type+"view").hide()
	 $("."+Type+"upload").hide()
	 $("."+Type).hide()
	 $("#"+FldId).val('');
	 $("#"+Verify).val('');
	 $("#"+Attachment).val('');
	 $("#"+AttachmentII).val('');
	 $("#"+Prooftype).val('');
	 $("#"+Verifytype).val('');
	 
	 $("#"+AttcVerify).val('');
	 $("#"+AttcVerifyII).val('');
	 
	 $("#"+AadharMask1).val('');
	 $("#"+AadharMask2).val('');
	 
	 
	 $("#"+Attachment).removeClass('DOCMndtry');
	 $("#"+AttachmentII).removeClass('DOCMndtry');
	 
	 $("[data-Validatearia="+Verify+"]").text('Verify');
     $("[data-Validatearia="+Verify+"]").addClass("btn-yelInplain");	
     $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");
     $("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
     var xml=UI_getdata($("#PrcsID").val(),Type,$("#"+CUSID).val(),"","","LSW_SDELKYCDETL")
	 var kycdocdel=UI_getdata($("#PrcsID").val(), $("#"+CUSID).val(),"KycDocDel",KycDel,"","LSW_SCLEARCUSDATA")
	 
    }
	 $("#Save1").click();
	 window.location.reload();
}

function KYCDELETE(Verify,FldId,Type,Attachment,CUSID,ULABEL,AttcVerify,KycDel)
{	

if(confirm('Are you sure you want to delete?') == true)
	{
	 $("#"+Attachment+"UPLOAD").css("display", "block")
	 $("."+Attachment).attr('disabled',false);
	 $("."+Type).find('table').next().text('');
	 $("."+Type+"view").hide()
	 $("."+Type+"upload").hide()
	 $("."+Type).hide()
	 $("#"+FldId).val('');
	 $("#"+Verify).val('');
	 $("#"+Attachment).val('');
	 $("#"+AttachmentII).val('');
	 
	 $("#"+AttcVerify).val('');
	 
	 
	 
	 $("#"+Attachment).removeClass('DOCMndtry');
	 
	 $("[data-Validatearia="+Verify+"]").text('Verify');
     $("[data-Validatearia="+Verify+"]").addClass("btn-yelInplain");	
     $("[data-Validatearia="+Verify+"]").removeClass("btn-GrnInplain");
     $("[data-Validatearia="+Verify+"]").removeClass("btn-RedInplain"); 
     var xml=UI_getdata($("#PrcsID").val(),Type,$("#"+CUSID).val(),"","","LSW_SDELKYCDETL")
	 var kycdocdel=UI_getdata($("#PrcsID").val(), $("#"+CUSID).val(),"KycDocDel",KycDel,"","LSW_SCLEARCUSDATA")
	 
    }
}

function PosdxGenCusID(CUSID,CusType,Verify,Type,ExLon,CusName)
	{
		var CustName=$("#"+CusName).val();
		var CusType=$("#"+CusType).val();
		var CusID = $("#"+CUSID).val();
		var PRCSID = $("#PrcsID").val();
		$(".loader2").show();
		$.ajax({
	    url:"/TPLSW/GenPosidexID",
	    type:'POST',
	    data:{Param1:"",Param2:CusType,Param3:"initcustomerid",Param4:CusID,SPNAME:"LSW_SPOSIDEXAPICREATE",PRCSID:PRCSID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	    async:true,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	    success: function(stm){
			if(stm.split("~")[0] == "Success")
			{
				alert("Customer ID Created Successfully")
				$(".loader2").show();
				window.location.reload();
			}
			else if(stm.split("~")[0] == "Error")
			{
				alert(stm.split("~")[1]);
				$(".loader2").show();
				return;
			}
			else{
				alert("Customer ID Creation Failed");
				$(".loader2").show();
			}
			},
	error: function(stm) {
		 //window.alert(LoadFrmXML("V0125"))
		alert("Error Occured. Contant IT!!!");
		$(".loader2").show();
		   }
	});
	}
function PosdxChk(CUSID,CusType,Verify,Type,ExLon,CusName)
{	
	
	$(".DedupeSmt").show();
	$(".DedupeGenCusID").show();
var CustName=$("#"+CusName).val();
var CusType=$("#"+CusType).val();

if(CustName != "")
	{	
$("#Save1").click();
var CusID = $("#"+CUSID).val();
var PRCSID = $("#PrcsID").val();

var xmlchkman=UI_getdata(PRCSID,CusID,"","","","LSW_SCHKPOSIDEXMANDATORYASTHOSEIDIOTSNEEDSTHIS")
if($(xmlchkman).find("RESULT_FLG").text() != "Y")
{
	alert($(xmlchkman).find("RESULT_MSG").text());
	return;
}

    if($('#DMY6').val()=="")
    {
	   $('#DMY6').val(CusID)
    }
	alert("Dedupe Initiated, System will show dedupe results after 30 seconds")
	$(".loader2").show();
	$.ajax({
	    url:"/TPLSW/DedupePosidex",
	    type:'POST',
	    data:{Param1:"",Param2:CusType,Param3:"Insert",Param4:CusID,SPNAME:"LSW_SPOSIDEXAPICREATE",PRCSID:PRCSID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	    async:true,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	    success: function(stm){        
	   // var obj = JSON.parse(JSON.stringify(stm))
	    	if(stm == "")
	    	   {
	    		 alert("Error Occured. Contant IT!!!");
	    		 $("[data-Validatedata="+Verify+"]").text('Dedupe Failed');
	    		 $("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	    		 $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		 $("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	    		 $("#"+Verify).val('Dedupe Failed')
				 $(".loader2").fadeOut("slow");
	    		 return;
	    		}
	    	else if (stm.split("~")[1] == "No Data")
    			{
    			  alert("Error Occured. Contant IT!!!");
    			  $("[data-Validatedata="+Verify+"]").text('Dedupe Failed');
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		  $("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	    		  $("#"+Verify).val('Dedupe Failed')
				  $(".loader2").fadeOut("slow");
	    		  return;
    			}
	    	else if (stm.split("~")[1] == "No Matches Found")
	    		{
	    		alert(stm.split("~")[1]);
				$(".DedupePopup").click();
				
				if(Type=="Applicant")
				{
				  
				  if($("#"+ExLon).val()=='C')
					  {
					    $("#HIDDENCOL").val('||0,8,9,10,11,12')
		    		    $("#BTNDEDUPEIVGRD").click();	
					  }
				  else
					  {
					    $("#HIDDENCOL").val('||0,9,10,11,12')
		    		    $("#BTNDEDUPEIVGRD").click();	
					  }	
				}
				else
				{
				  $("#HIDDENCOL").val('||0,8,9,10,11,12')
	    		  $("#BTNDEDUPEIVGRD").click();	
				}
				
				$("#BTNDEDUPEIGRD").click();
	    		$("#BTNDEDUPEIIGRD").click();
	    		$("#BTNDEDUPEIIIGRD").click();
				$("#BTNLSWINTER").click()
                $("#BTNRBIDEDUPE").click()
				$("[data-Validatedata="+Verify+"]").text('Dedupe Initiated');
	    		$("[data-Validatedata="+Verify+"]").addClass("btn-GrnInplain");	
	    		$("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		$("[data-Validatedata="+Verify+"]").removeClass("btn-RedInplain"); 
	    		$("#"+Verify).val('Dedupe Initiated')
				var xml=UI_getdata(PRCSID,CusID,Type,"","","LSW_SUPDDEDUPE")
				$(".loader2").fadeOut("slow");
				if(stm.split("~")[2] == "Y")
					{
						alert(stm.split("~")[1]+", Click View Dedupe to Check the Match Details");
						window.location.reload();
						return;
					}
	    		}
	    	else if (stm.split("~")[1] == "Success")
	    		{
				var chkval = $("#"+CUSID).val().match("C") ? true : false;
				if(chkval != true)
				{
				$(".DedupeSmt").hide();
				$(".DedupeGenCusID").hide();
				}
	    		//alert("Data Found");
	    		$(".DedupePopup").click();
				
				if(Type=="Applicant")
				{
				  
				  if($("#"+ExLon).val()=='C')
					  {
					    $("#HIDDENCOL").val('||0,8,9,10,11,12')
		    		    $("#BTNDEDUPEIVGRD").click();	
					  }
				  else
					  {
					    $("#HIDDENCOL").val('||0,9,10,11,12')
		    		    $("#BTNDEDUPEIVGRD").click();	
					  }	
				}
				else
				{
				  $("#HIDDENCOL").val('||0,8,9,10,11,12')
	    		  $("#BTNDEDUPEIVGRD").click();	
				}
				
				$("#BTNDEDUPEIGRD").click();
	    		$("#BTNDEDUPEIIGRD").click();
	    		$("#BTNDEDUPEIIIGRD").click();
				$("#BTNLSWINTER").click()
                $("#BTNRBIDEDUPE").click()
	    		
	    		
	    		$("[data-Validatedata="+Verify+"]").text('Dedupe Initiated');
	    		$("[data-Validatedata="+Verify+"]").addClass("btn-GrnInplain");	
	    		$("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		$("[data-Validatedata="+Verify+"]").removeClass("btn-RedInplain"); 
	    		$("#"+Verify).val('Dedupe Initiated')
				var xml=UI_getdata(PRCSID,CusID,Type,"","","LSW_SUPDDEDUPE")
				$(".loader2").fadeOut("slow");
				if(stm.split("~")[2] == "Y")
					{
						alert("Customer ID Created Successfully");
						window.location.reload();
						return;
					}
	    		}
	    	else
	    		{
	    		$("[data-Validatedata="+Verify+"]").text('Dedupe Failed');
	    		$("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	    		$("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		$("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	    		$("#"+Verify).val('Dedupe Failed')	
				alert(stm.split("~")[1]);
				$(".loader2").fadeOut("slow");
	    		}
	},
	error: function(stm) {
		 //window.alert(LoadFrmXML("V0125"))
		alert("Error Occured. Contant IT!!!");
		$(".loader2").fadeOut("slow");
		   }
	});
		}
	else
	{
		alert($("#"+CusName).next().text().replace('*','')+" is Mandatory");
		$(".loader2").fadeOut("slow");
		return false;
	}
}

function viewposidex(CUSID,CusType,Verify,Type,ExLon,CusName)
{
	//alert("Data Found");
	$(".DedupePopup").click();
	var CusID = $("#"+CUSID).val();
	if($('#DMY6').val()=="")
    {
	   $('#DMY6').val(CusID)
    }
	if(Type=="Applicant")
	{
	  
	  if($("#"+ExLon).val()=='C')
		  {
			$("#HIDDENCOL").val('||0,8,9,10,11,12')
			$("#BTNDEDUPEIVGRD").click();	
		  }
	  else
		  {
			$("#HIDDENCOL").val('||0,9,10,11,12')
			$("#BTNDEDUPEIVGRD").click();	
		  }	
	}
	else
	{
	  $("#HIDDENCOL").val('||0,8,9,10,11,12')
	  $("#BTNDEDUPEIVGRD").click();	
	}
	
	$("#BTNDEDUPEIGRD").click();
	$("#BTNDEDUPEIIGRD").click();
	$("#BTNDEDUPEIIIGRD").click();
	$("#BTNLSWINTER").click();
	$("#BTNRBIDEDUPE").click();
	var chkval = $("#"+CUSID).val().match("C") ? true : false;
	if(chkval != true)
	{
	$(".DedupeSmt").hide();
	$(".DedupeGenCusID").hide();
	}
}


function DedupeChk(CUSID,GRDBTN,Verify,id)
{	
var CusID = $("#"+CUSID).val();
var PRCSID = $("#PrcsID").val();

  if($("#DMY7").val().split("|")[8]=="HE02")
	{
	  var Dedupexml=UI_getdata(PRCSID,CusID,"","","","LSW_SCHKGECLDEDUPE")
	}
	
	//$("#Save1").click();
	$.ajax({
	    url: "/TPLSW/POSIDEX",
	    type: 'POST',
	    data: {PRCSID:PRCSID,CUSID:CusID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	    async:true,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	    success: function(stm){        
	   // var obj = JSON.parse(JSON.stringify(stm))
	    	if (stm == "")
	    		{
	    		alert("Error Occured. Contant IT!!!");
	    		return;
	    		}
	    	else if (stm.split("|")[1] == "No Data")
    			{
    			alert("Error Occured. Contant IT!!!");
	    		return;
    			}
	    	else if (stm.split("|")[1] == "No Matches Found")
	    		{
	    		alert(stm.split("|")[1]);
	    		 $("#"+GRDBTN).click();  
	    	     $(id).text('Dedupe Initiated');
	    	     $(id).addClass("btn-GrnInplain");	
	    	     $(id).removeClass("btn-yelInplain");
	    	     $(id).removeClass("btn-RedInplain"); 
			     $("#"+Verify).val('Initiated')	
	    		}
	    	else if (stm.split("|")[1] == "Success")
	    		{
	    		
	    		 $("#"+GRDBTN).click();  
	    	     $(id).text('Dedupe Initiated');
	    	     $(id).addClass("btn-GrnInplain");	
	    	     $(id).removeClass("btn-yelInplain");
	    	     $(id).removeClass("btn-RedInplain"); 
			     $("#"+Verify).val('Initiated')
	    		}
	    	else
	    		{
	    		 $(id).text('Dedupe Failed');
	    		 $(id).removeClass("btn-GrnInplain");	
	    		 $(id).removeClass("btn-yelInplain");
	    		 $(id).addClass("btn-RedInplain"); 
	    		 $("#"+Verify).val('Failed')	
	    		}
	},
	error: function(stm) {
		 //window.alert(LoadFrmXML("V0125"))
		alert("Error Occured. Contant IT!!!");
		   }
	});
}


function REMARKPOPUP(Evnt){
	//var ClosID = $(Evnt).next()
	//var val = ClosID.val();
	var ClosID = $(Evnt).next()
	var val =$("#"+ClosID.attr('id')).val()
	
	$("#REMARKSPopup").click();
	$("#REMARKSModal").find("#RemarksCONFIRM").attr("data-to",$(ClosID).attr("id"))
	if(val != ""){
		$("#POPUPRemarks").val(val);
		$("#POPUPRemarks").next().addClass('active');
	}
	else{
		$("#POPUPRemarks").val("");
	}
}

function CLOSEREMARKCONFIRM(Evnt){
	var todata = $(Evnt).attr("data-to");
	var totabel = $(Evnt).attr('data-tabel')
	
	if(totabel != undefined)
	{
		$("#"+totabel).find("#"+todata).val($("#POPUPRemarks").val())
		$("#REMARKSPOPCLOSE").click();
		return;
	}
	$("#"+todata).val($("#POPUPRemarks").val());
	$("#REMARKSPOPCLOSE").click();
}


function PAGEREMARKPOPUP(Evnt,Prcsid,UniqId,AltUniqId){
	//var ClosID = $(Evnt).next()
	//var val = ClosID.val();
	var xml=UI_getdata(Prcsid.value,UniqId.value,AltUniqId.value,"","","LSW_SGETVENDRMK")	
	$(xml).find('REMARKS').text();
	var ClosID = $("#"+Evnt).val($(xml).find('REMARKS').text())
	//var val =$("#"+ClosID.attr('id')).val()
	$("#PageREMARKSPopup").click();
    $("#PagePOPUPRemarks").val($(xml).find('REMARKS').text())
}

function RemarksClose()
{
	$("#PAGEREMARKSPOPCLOSE").click();
}

function REMARKPOPUPDSBLFTR(Evnt){
	var ClosID = $(Evnt).next()
	//var val =ClosID.val()
	var val =$("#"+ClosID.attr('id')).val().replace(/\\n/g,"\n")
	
	$("#REMARKSPopup").click();
	$("#REMARKSModal").find("#RemarksCONFIRM").attr("data-to",$(ClosID).attr("id"))
	$("#RemarksCONFIRM").hide();
	if(val != ""){
		$("#POPUPRemarks").val(val);
		$("#POPUPRemarks").attr("disabled","disabled")
		$("#POPUPRemarks").next().addClass('active');
		
	}
	else{
		$("#POPUPRemarks").val("");
		$("#POPUPRemarks").attr("disabled","disabled")
		$("#POPUPRemarks").next().addClass('active');
	}
}

function DSVLBLALL(Evnt)
{
	  $(".form-control").attr('disabled',true);
		$(".custom-control-input").attr('disabled',true);
		$(".GridDocUpd").hide();
		$(".Gridmdb-select").attr('disabled',true);
		$(".tbodytrtd").attr('disabled',true);
		 $(".BTNVerify").attr('disabled',true)
		 $(".AddKYC").hide();
		
		
	   $(".FormSave").hide();
       $(".DelGridrow").hide();
	   $(".DelGridrowDOCUPLD").hide();
	   
	   $('.select-dropdown').attr('disabled',true)
	   $('.BTNDedupe').attr('disabled',true)
	   
		  $(".DELBTN").hide();
	      $(".DELBTNTXT").hide();
		  $(".ADDBTN").hide();
		  $(".ReUpld").hide();
		  $(".KYCDEL").hide();
		  
		  $(".btn-sm").attr('disabled',true)
		  $(".fa-plus").hide()
		  $("input[name=datafile]").attr('disabled',true);
		  $(".BTNHIDE").hide()
		  $(".RPTBTN").hide()
		  $('.datepicker').attr('disabled',true)
		  if(Evnt !="WA"){
		  $(".FormPageMultiTabAdd").hide()
		  }
		  $('.RPTVIEW').show()
		  $('.datepicker').hide()
		  $("#Reject").hide()
		  $('.Griddatepicker').hide()
		  $('.dropdown-content').attr('disabled',true)
		  
		   	
// Credit Chenages for Sanction Amt Field enabled in Waiver Stage START
	if($("#DMY5").val().split("|")[2]=="Waiver")
      {
       if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab5")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab6")&&($("#PrMs1").val()!="View"))
	     {
	  	   if($("#DMY7").val().split("|")[12]=="Y")
		     {
              //$("#FCEB_VALUE4").attr('disabled',false)
			  $(".ExpAmt").removeAttr('disabled')
		      //$("[name=FCEB_HIDDENID]").prev().removeAttr("disabled"); 
		     }			
	     }
       }
//End
	  
}


function DSVLBLALLWS()
{
	  $(".form-control").attr('disabled',true);
		$(".custom-control-input").attr('disabled',true);
		$(".GridDocUpd").hide();
		$(".Gridmdb-select").attr('disabled',true);
		$(".tbodytrtd").attr('disabled',true);
		 $(".BTNVerify").attr('disabled',true)
		 $(".AddKYC").hide();
		
	//   $(".FormSave").hide();
        $(".DelGridrow").hide();
		 $(".DelGridrowDOCUPLD").hide();
	    $('.select-dropdown').attr('disabled',true)
	    $('.BTNDedupe').attr('disabled',true)
	   
		  $(".DELBTN").hide();
	      $(".DELBTNTXT").hide();
		  $(".ADDBTN").hide();
		  $(".ReUpld").hide();
		  $(".KYCDEL").hide();
		  
		  $(".btn-sm").attr('disabled',true)
		  $(".fa-plus").hide()
		  $("input[name=datafile]").attr('disabled',true);
		  $(".BTNHIDE").hide()
		//  $(".RPTBTN").hide()
		  $(".FormPageMultiTabAdd").hide()
		  $('.datepicker').attr('disabled',true)
		  $('.datepicker').hide()
		  $('.Griddatepicker').hide()
		  
		  $('.dropdown-content').attr('disabled',true)
	  
}


function ENABLEALL()
{
	    $('.ENAALL').find(".form-control").attr('disabled',false);
		$('.ENAALL').find(".custom-control-input").attr('disabled',false);
		$('.ENAALL').find(".GridDocUpd").show();
		$('.ENAALL').find(".Gridmdb-select").show('disabled',false);
		$('.ENAALL').find(".tbodytrtd").attr('disabled',false);
		$('.ENAALL').find(".BTNVerify").attr('disabled',false)
		$('.ENAALL').find(".AddKYC").hide();
		
	    $('.ENAALL').find(".FormSave").show()
        $('.ENAALL').find(".DelGridrow").show()
		$('.ENAALL').find(".DelGridrowDOCUPLD").show()
	    $('.ENAALL').find('.select-dropdown').attr('disabled',false)
	    $('.ENAALL').find('.BTNDedupe').attr('disabled',false)
	   
		  $('.ENAALL').find(".DELBTN").show()
	      $('.ENAALL').find(".DELBTNTXT").show()
		  $('.ENAALL').find(".ADDBTN").show()
		  $('.ENAALL').find(".ReUpld").show()
		  $('.ENAALL').find(".KYCDEL").show()
		  
		  $('.ENAALL').find(".btn-sm").attr('disabled',false)
		  $('.ENAALL').find(".fa-plus").show()
		  $('.ENAALL').find("input[name=datafile]").attr('disabled',false);
		  $('.ENAALL').find(".BTNHIDE").show()
		  $('.ENAALL').find(".RPTBTN").show()
		  $('.ENAALL').find(".FormPageMultiTabAdd").show()
		  $('.datepicker').attr('disabled',true)
		  $('.datepicker').hide()
	  
}


function RECOMMENDHIDE()
{
	
 var SanctionType=$("#DMY5").val().split("|")[0]
 var ActivityName=$("#DMY5").val().split("|")[2]	
 
 if((SanctionType=="Yes")&&(ActivityName=="Waiver"))
	{
	 $("#FormPageTab2").remove()
	// $("#FormPageTab5").show()
     $("#FormPageTab6").show()
     $("#FormPageTab7").show()
     $("#FormPageTab8").show()
    } 
else if((SanctionType=="Yes")&&(ActivityName=="ReCredit"))
	{
	 $("#FormPageTab2").remove()
//	$("#FormPageTab5").hide()
	$("#FormPageTab6").remove()
	$("#FormPageTab7").remove()
	$("#FormPageTab8").remove()	
	}
    else if(SanctionType=="Yes")
    {
     $("#FormPageTab2").show()
	/// $("#FormPageTab5").show()
     $("#FormPageTab6").show()
     $("#FormPageTab7").show()
     $("#FormPageTab8").show()
	}
    else
	{
    $("#FormPageTab2").remove()
//	$("#FormPageTab5").hide()
	$("#FormPageTab6").remove()
	$("#FormPageTab7").remove()
	$("#FormPageTab8").remove()
	$("#FormPageTab11").remove();
    }
	
	 if((SanctionType=="No")&&(ActivityName=="SendToCredit"))
	{
	$("#FormPageTab5").remove()	
	$("#FormPageTab11").remove();
    }	
}


//Added for Application Query

$(document).on("click","#ApplQry",function() {
	
	
	var a = window.location.href;
	a=btoa(a);
	$(location).attr('href',window.location.origin + "/TPLSW/MnagQuery?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs4=IQQR&PrMs5=IQ&PrMs8=IQ_IQQR&PrMs9=FormPageTab1&PrMs3="+a+"&PrMs10=MANGQRY&PrMs1="+$("#PrMs1").val());         	
				 
			});
			

///added for Raise Query  			
			
$(document).on("click","#RaiseQry",function() {
	QueryTypFlg='';
	var xml=UI_getdata($("#PrcsID").val(),$('#LogUsr').val(),"","","","LSW_SGETQUERYTO");
		$('.RAISE').find("#MNGQ_TOUSRIDI").empty();
		$('.RAISE').find("#MNGQ_TOUSRIDI").append($(xml).find("RESULT").html());
		$('.RAISE').find("#MNGQ_TOUSRIDI").material_select(); 
		
		
        
		$('.RAISE').find(".QRYDETAILS").hide()
        
        $('.RAISE').find("#MNGQ_SECTNID").val('');
		$('.RAISE').find("#MNGQ_SECTNID").material_select(); 
        
		$('.RAISE').find("#MNGQ_TYP").val('');
		$('.RAISE').find("#MNGQ_TYP").material_select(); 
        
		$('.RAISE').find("#MNGQ_APPLNO").val('');
		$('.RAISE').find("#MNGQ_APPLNO").material_select(); 
		$('.RAISE').find("#MNGQ_DESC").val('');
		$('.RAISE').find("#MNGQ_QURYNAME").val('');
		
		
		
        $('.RAISE').find("#MNGQ_SECTNID").addClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_TYP").addClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_QURYNAME").addClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_DESC").addClass('MNGOMndtry');
		$('.RAISE').find("#MNGQ_APPLNO").removeClass('MNGOMndtry');
			
			
			
		 $('.RASHW').show();
		 $(".OPSQRY").show();
		 
  $('.RAISE').find("#MNGQ_ATTCHURLIUPLOAD").show();
  $('.RAISE').find('.rounded1').hide();
  $('.RAISE').find("#MNGQ_ATTCHURLI").val('');
  $('.RAISE').find("input[name=datafile]").attr('disabled',false);
  $('.RAISE').find("input[name=datafile]").attr('display','block');
  
  $('.RAISE').find('.FIDU').find('.name').text('Click Here to Upload')
  
  
		 $("#RAISEQUERY").click();
				 
			});
	

/* Special Grid Start*/

function TxtGridsubmitdata_SV1(TableID,GrdPrfx,MnPrfx) {	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');

	var fieldname="";

	var formxml="<Data>";

	for(j=0;j<$("#"+TableID).find('.tbody').find('.tbodytr').length;j++)
	{
	formxml= formxml + "<row>";

	var rowwise = $("#"+TableID).find('.tbody').find('.tbodytr')[j];
	
	if($(rowwise).find('.tbodytrtd').text()=="No data available in table"){
		formxml+='</row></Data>'
			return formxml;
	}

	for(i=0;i<$($("#Grid"+TableID)).find('thead').find('th').length;i++)
	 {
	    name = $($($("#Grid"+TableID)).find('thead').find('th')[i]).text();
	   
	    fieldname = name;
	    
	    
	    if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').length > 0)
	    	
	    	{
	        if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="radio")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']:checked').val();
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').attr('type')=="checkbox")
	        {
	         value=$($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').prop("checked");
	         if(value==undefined)
	         {
	          value = "";
	      }
	        }
	        else if ($($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').hasClass("IsCURCommaFields")) {
	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val().replace(/,/g, "");
	        }
	        else {

	            value = $($(rowwise).find('.tbodytrtd')[i]).find('[name = '+fieldname+']').val();
	 
	        }
	    	}
	    else
	    	{
	    	 value= $($(rowwise).find('.tbodytrtd')[i]).text();
	    	}
	    	
	   if(reg.test(value)==true)
	  {
	//if($($(rowwise).find('.tbodytrtd')[i]).text().match(/^((\d{0,3}(,\d{3})+)|\d+)(\.\d{2})?$/))
		//{
	  value = value.replace(/,/g, "");
		}
		else
		{
			value = value
		}
	  // value = $($(rowwise).find('.tbodytrtd')[i]).text().replace(/[^\d\.\-\ ]/g, '');
	  
	    //value =  value.replace(/\s/g, "");
	   if(value != "" )
	if(   value != undefined)
	{
	   {
	    value = value.toString().replace(/\&/g, "and");
	var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
	   }
	   }
	}
	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;
	}

/* Special Grid End */

function VerfyMail(Event,MailID,CusID){
	
	if($(Event).text() != "Verified")
	{
	 $.ajax({
		 url: "/TPLSW/EmailVerfy",
		 data: { URL: window.location.origin, PRCSID: $("#PrcsID").val(), CUSID: CusID, MAILID: MailID, PARAM5: "",Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	       async: true,
	       //dataType: "json",
		    dataType: "text",
	       type: 'POST',
	       success: function OnSuccess_submit(xml1) {
			   
			   if(xml1=="Success")
			   {
	    	   alert("Mail Successfully Sent");
			   return;
			   }
			   else
			   {
			   alert("Mail Sending Failed");
			   return;
			   }
	    	   
	       },
	       error: function (xml1)
	       {
	   			alert("Mail Sending Failed");
	   			return;
	       }	 		
	 });
	}
}


function SavePersInfo()
{
	$("#Save1").click();
}

function SaveContDetl()
{
	$("#Save2").click();
}

function ChkCusConti(CusType,Consti,OrgName)
{
	var CusTypeVal=$("#"+CusType).val();
	var ConstiVal=$("#"+Consti).val();
	
	if(CusTypeVal=="Non-Individual")
		{
		  if(ConstiVal=="Proprietorship" || ConstiVal=="Society" || ConstiVal=="Trustee")
			  {
			    $("#"+OrgName).attr("disabled",false);
			  }
		}
}



//Session front-end start

	var elem = timer1, timeout, startTimer = function timer() {
 clearTimeout(timeout);   
   timer1++;
    timeout = setTimeout(timer, 1000)
	
	if (timer1 == "1200")
	{		
	
if(window.location.pathname !='/TPLSW/')
{	
			
var x=confirm("Your session has been timed out!! \nClick cancel to continue the session.\nClick ok to logout.");
if (x)
{
alert("Session logged out...");
AppliLogout();
}
else
{
	var a="";
}

}			
							
	}
}

function resetTimer() {

    clearTimeout(timeout);
    timer1 = "0";
	
	if(timer1 !="")
{
startTimer();
}
}

	$(document).ready(function () {	
	 clearTimeout(timeout);  
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keypress", resetTimer);
if(timer1 !="")
{
startTimer();
}
	});
//Session front-end end


// For P2 Deliverable PAYTM SEND LINK 15062020 Start

function PSendLink(TypeFieldID,AmtFieldID,CType,Verify)
{
	
var Amount = $("#" + AmtFieldID).val().replace(/,/g, "");
var Type = $("#" + TypeFieldID).val();
var PRCSID = $("#PrcsID").val();
var Prvnt = $("#Prvnt").val();


//PAYTM PROCESSING CHECK START		
		 var xml=UI_getdata($("#PrcsID").val(),$("#PFDT_PFNO").val(),"","","","LSW_SONLNEPAYMNTCHK")
			if($(xml).find('RESULT').text()=="No")
			 {
				alert($(xml).find('MSG').text());
				return;
			 }
			if($(xml).find('RESULT').text()=="Success")
			 {
				 
				  
				alert($(xml).find('MSG').text());
				
				location.reload();
				
				return;
			 }			 
//PAYTM PROCESSING CHECK END	


var CollectionType=$("input[name='PFDT_COLECTIONTYP']:checked"). val();

if (CollectionType == undefined)
{
alert("Enter the Collection Type");
return false;
}

if (CollectionType == "Deferred")
{
alert("Enter the Collection Type Collected");
return false;
}

if (Amount == "")
	{
	alert("Enter the Amount");
	return false;
	}

if (Type == "Paytm")
{
	
	$("#Save1").click();
	
	if(CType=="SMS")
	{
	Type=Type+",PF," + $("#PFDT_PFNO").val();

	var URL ="/TPLSW/PAYTMONL?UniqueID="+Amount+"&Type="+Type+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt+"&PFID="+$("#PFDT_PFNO").val();
	
	var op= UI_getdata(	encodeURI(URL),$("#PrcsID").val(),$("#" + AmtFieldID).val(),"SMS","","LSW_SSENDPAYMNTLINK");
	
	if ($(op).find('Result').text() == "Success")
		{
		alert("SMS Link Sent");
		$("#"+Verify).val('Verified');
		$(".SMSLINK").text('Re-Send Link :')
		}
	}
	else if(CType=="EMAIL")
	{
		Type=Type+",PF," + $("#PFDT_PFNO").val();

	var URL ="/TPLSW/PAYTMONL?UniqueID="+Amount+"&Type="+Type+"&PRCSID="+PRCSID+"&Prvnt="+Prvnt+"&PFID="+$("#PFDT_PFNO").val();
	
	var op= UI_getdata($("#PrcsID").val(),$("#" + AmtFieldID).val(),encodeURI(URL),"EMAIL","","LSW_SSENDPAYMNTLINK");
	
	if ($(op).find('Result').text() == "Success")
		{
		alert("EMAIL Link Sent");
		$("#"+Verify).val('Verified');
		$(".EMAILLINK").text('Re-Send Link :')
		}
	}
	$("#Save1").click();
}
else
	{
	
	alert("Select Paytm Online Mode");
	
	}
}
// For P2 Deliverable PAYTM SEND LINK 15062020 End 

function FindConstDD()
{
	var stm=$("#DMY14").val()	
	var obj= JSON.parse(stm)
	
	//$("#CoAppConsti").html("")
	$("#CoAppConsti").append(obj.Constitution);
	$("#Constitution1").append(obj.Constitution);
}

//CKYC Patch
function UniqueNoPOPUP(Evnt){
	//var ClosID = $(Evnt).next()
	//var val = ClosID.val();
	var ClosID = $(Evnt).next()
	var val =$("#"+ClosID.attr('id')).val()
	
	var DocName=$(Evnt).next().next()
	var DDVal =$("#"+DocName.attr('id')).val()
	
	$("#UniqNoPopup").click();
	$("#UniqNoModal").find("#UniqNoClose").attr("data-to",$(ClosID).attr("id"))
	
	
	if($(Evnt).closest('td').next().find('input[type=text]').val() == "Yes")
	{
		$("#UniqNumber").attr("disabled","disabled");
	}
	else{
		$("#UniqNumber").removeAttr("disabled", "disabled");
	}
	var op = UI_getdata(DDVal.replace(/ /g,""),$("#PrcsID").val(),$('.admin-panel .col-lg-12 .active').attr('id'),'','',"LSW_GETKYCSPEFYURL")
		
	$("#UniqNumber").attr("maxlength",$(op).find('SIZE').text())
		if(DDVal=="Aadhar")
		{
		  $("#UniqNumber").addClass('IsNumberFields IsAadharFields')	
		  $("#UniqNumber").removeClass('IsPanFields')
		}
		else if(DDVal=="PAN")
		{
		  $("#UniqNumber").addClass('IsPanFields')
          $("#UniqNumber").removeClass('IsNumberFields IsAadharFields')		  
		}
		else
		{
			$("#UniqNumber").removeClass('IsNumberFields IsAadharFields')
			$("#UniqNumber").removeClass('IsPanFields')
		}
	if(val != ""){
		  
		$("#UniqNumber").val(val);
		$("#UniqNumber").next().addClass('active');
	}
	else
	{
		$("#UniqNumber").val("");
		if(DDVal=="Aadhar")
		{
			$("#UniqNumber").val("XXXXXXXX");
		}
		
	}
	  if($("#DMY5").val().split("|")[2] != "SendToCredit" && $("#DMY5").val().split("|")[2] != "PreLoginSB" && $("#DMY5").val().split("|")[2] != "PreLogin" && $("#DMY5").val().split("|")[2] != "BranchOPS"  )
	{
		$("#UniqNumber").attr('disabled',true);
		$(".Rmrkh").hide();
		
	}  
	
	if($("#PrMs1").val()=="View")
	{
		$("#POPUPRemarks").attr('disabled',true);
		$(".Rmrkh").hide();
	}
}

function UniqNoConf(Evnt){
	var todata = $(Evnt).attr("data-to");
	var totabel = $(Evnt).attr('data-tabel')
	
	if(totabel != undefined)
	{
		$("#"+totabel).find("#"+todata).val($("#UniqNumber").val())
		$("#UniqNoModalCLOSE").click();
		return;
	}
	$("#"+todata).val($("#UniqNumber").val());
	$("#UniqNoModalCLOSE").click();
}





function AddPageMultiData_v1 (UniqFldID,PrcsVal,UniqNo,DV,FieldClass,CrRow)
{
	
	var MainPage=DV.split("|")[0];
	var DV=DV.split("|")[1];
      var html = $($("#"+DV).html());
      var document = $(html);
      
      //$(html).find("[name="+PRCSID+"]").val(PrcsVal);
      
      var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
      var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
      var row =$($("."+MainPage).find(".DYNROW")[CrRow-1]).find("."+ DV).find('.DYNROWOne').length;
      var j = parseInt(row) + 1;
      
      if(UniqNo != "")
    	  {
    	  $(html).find("#"+UniqFldID).val(UniqNo);
    	  }

      if ($(html).find('.FormaccordionSUB').length > 0)
	   {
	   
    	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
    	  
	  // var AccordionID = $(html).find('.Formaccordion').attr("id") + j
	   
	  // $(html).find('.Formaccordion').attr("id",AccordionID);
	   
	   var HeadingID = $(html).find('.FormaccordionSUB .card-header').attr("id") + j;
	   
	   $(html).find('.FormaccordionSUB .card-header').attr("id",HeadingID);
	   
	   $(html).find(".NXTBTNF").attr("data-card",j-1);
	   
	//   $(html).find('.Formaccordion .card-header a').attr("data-parent","#"+AccordionID);
	   
	   var CollapseID =  $(html).find('.FormaccordionSUB .collapse').attr("id") + j;
	   
	 //  $(html).find('.Formaccordion .collapse').attr("data-parent","#"+AccordionID);
	   
	   $(html).find('.FormaccordionSUB .collapse').attr("id",CollapseID);
	   
	   $(html).find('.FormaccordionSUB .collapse').attr("aria-labelledby",HeadingID);	   
	   
	   
	   $(html).find('.FormaccordionSUB .card-header a').attr("href","#"+CollapseID);
	   
	   $(html).find('.FormaccordionSUB .card-header a').attr("aria-controls",CollapseID);
	   
	   }
      
      
      
      $(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
      $(html).find("[data-row]").attr("data-row",j);
      $(html).attr("data-row",j);
      var n = $(html).find("." + FieldClass).length;
        for (i = 0; i < n; i++) {
         name = $($(html).find("." + FieldClass)[i]).attr("name");
         
         
         if ($(html).find('[name='+name+']').is( "a"))
   	      {
   	  	
   	  	
   	  	if ($(html).find('[name='+name+']').attr('data-toggle') == "modal")
   	  		{		
   	  		$(html).find('[name='+name+']').attr("id",($(html).find('[name='+name+']').attr("id") + j));
   	  		$(html).find('[name='+name+']').attr("data-target",("#" + name + j));	
   	  		
   	  		}
   	  	
   	  	$(html).find('[name='+name+']').attr('data-table', $(html).find('[name='+name+']').attr('data-table') + j);
   	  	$(html).find('[name='+name+']').attr('href', "#" + $(html).find('[name='+name+']').attr('data-table') + j);
   	  }
   	  else if ($(html).find('[name='+name+']').attr("data-info") == "ModalWindow")
   	  {
   	  	$(html).find('[name='+name+']').attr("id",name.replace("Modal","") + j);
   	  }
        
         
   	  else if($(html).find('[name='+name+']').attr('type')=="button")
   	{

   	   if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
   	     {
   	 
   		var datavalue = $(html).find('[name='+name+']').attr('data-value');
   		 
   		var TableID = datavalue.split("|")[0] + j;
   		var SPNAME = datavalue.split("|")[1];
   		
   		var Param1 = '$("#'+ datavalue.split("|")[2] +'").val()';	

   		var params2 = datavalue.split("|")[3];
   		
   		var Param2 = "";
   		for (y=0;y<params2.split("~").length;y++)
   			{
   			
   			Param2 = Param2 + '$("#'+  params2.split("~")[y] + j +'").val()' + "+'|'+";
   			
   			}
   		
   		Param2 = Param2.slice(0,Param2.lastIndexOf("+'|'+"))
   		
   		var Param3 = '$("#'+ datavalue.split("|")[4] + j +'").val()';	
   		
   		var HdnClms = datavalue.split("|")[5];
   		var Fnctype = datavalue.split("|")[6];
   			   
   		var BtnClick =  "FncallDocChkLst(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
   	          			  
   		$(html).find('[name='+name+']').attr("onclick",BtnClick);
   	    
   		$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);
   		
   	     }
   	            		  
   	            	  
   	}
   	else if ($(html).find('[name='+name+']').is( "table"))
   	{
   		
   		$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);

   	}
         
         
         if($(html).find('[name='+name+']').attr('type')=="button")
         {

            if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
              {
            	$(html).find('[name='+name+']').addClass("AddMultiGridTrg");
              }
            
              }

         if ($(html).find("[for="+name+"]").length > 0)
         {
         $(html).find("[for="+name+"]").attr("for",name + j)
         }
         
         if($(html).find("#"+name).is("select"))
         {
        	  $(html).find("#"+ name).addClass("mdb-select");
         }
         
         if($($(html).find("." + FieldClass)[i]).attr("type") == "radio")
         {
        	 var radioID = $($(html).find("." + FieldClass)[i]).attr("id")
        	 
        	 $($(html).find("." + FieldClass)[i]).attr("id",radioID + j);
        	 $(html).find("[for="+radioID+"]").attr("for",radioID + j);
         }
         
              
         $(html).find("#"+name).attr("id",name + j);
         
      
         
         
        }
        
      
        
      //$("."+DV).append(html);
      
      $($("."+MainPage).find(".DYNROW")[CrRow-1]).find('.'+DV).append(html);
	  
	 $($("."+MainPage).find(".DYNROW")[CrRow-1]).find('.'+DV).last().find('.mdb-select').material_select('destroy');
      $($("."+MainPage).find(".DYNROW")[CrRow-1]).find('.'+DV).last().find('.mdb-select').material_select();
	  
     // $("."+DV).last().find('.mdb-select').material_select('destroy');
     // $("."+DV).last().find('.mdb-select').material_select();
   // Calendar
      var $input = $(document).find('.datepicker').pickadate({
          //editable: 'true',
      format: 'dd/mm/yyyy',
      selectYears: 200,
      selectMonths: true
      })
      .on("change", function() {
        $(this).prev().prev().val($(this).val());
        $(this).prev().prev().focus();
      });
	  
	   $($("."+MainPage).find(".DYNROW")[CrRow-1]).find('.'+DV).last().find(".AddMultiGridTrg").click();

      //$("."+DV).last().find(".AddMultiGridTrg").click();
      
      
      
      
      // $($("."+DV).find('.DYNROW').last().find("." + FieldClass)[0]).focus();
      
     // var scrollPos =  $($("."+DV).find('.DYNROW').last().find("." + FieldClass)[0]).focus();
		 //$(window).scrollTop(parseInt(scrollPos));
		    
}





function TxtGridsubmitdata_Attach(TableID,GrdPrfx,MnPrfx,FieldsClassName,Mhtml) {
	   
	var name="";
	var fieldid="";
	var value="";
	var reg = new RegExp('^[0-9]+$');
	var formxml="<Data>";

	for(j=0;j<$(Mhtml).find('.'+TableID).find('.DYNROWOne').length;j++)
	{
	formxml= formxml + "<row>";

	var html = $(Mhtml).find('.'+TableID).find('.DYNROWOne')[j] //$(html).find('.DYNROWOne')[j];

	//$(html).find("." + FieldsClassName).length
	
	var x = $(html).find("." + FieldsClassName).length;//document.getElementsByClassName(FieldsClassName);
	// var y = document.getElementsByTagName("select");
	 var name = "";
	 var fieldid = "";
	 var value = "";
	 var type = "";
	
	 for (i = 0; i < x; i++) {
		 
		 if($($(html).find("." + FieldsClassName)[i]).is("select")==true || $($(html).find("." + FieldsClassName)[i]).is("input")==true || $($(html).find("." + FieldsClassName)[i]).is("textarea")==true){

		     name = $($(html).find("." + FieldsClassName)[i]).attr("name");
		     fieldid = $($(html).find("." + FieldsClassName)[i]).attr("id");
		   //  value = document.getElementsByClassName(FieldsClassName).item(i).value;
		   
		     if($(html).find('#' + fieldid).attr('type')=="radio")
		     {
		      //name=name.split('RVAL')[0];
		      value=$(html).find('input[id='+fieldid+']:checked').val();
		      if(value==undefined)
		      {
		       value = "";
		   }
		     }
		     else if($(html).find('#' + fieldid).attr('type')=="checkbox")
		     {
		      value=$(html).find('input[id='+fieldid+']').prop("checked");
		      if(value==undefined)
		      {
		       value = "";
		   }
		     }
		     else if ($(html).find('#' + fieldid).hasClass("IsCURCommaFields")) {
		         value = $($(html).find("." + FieldsClassName)[i]).val().replace(/,/g, "");
		     }
		     else {
		if ($(html).find('#' + fieldid).hasClass("ImgIdnt")) {
		if(document.getElementsByClassName(FieldsClassName).item(i).src.indexOf("/Attachments/")!=-1)
		{
		value = document.getElementsByClassName(FieldsClassName).item(i).src;
		value = "/Attachments/" + value.split("/Attachments/")[1];
		}
		else{
		value = "";
		}
		}
		else
		{
		         value = $($(html).find("." + FieldsClassName)[i]).val().replace(/,/g, "");
		}
		     }
		     //type = document.getElementsByTagName("input").item(i).type;
		     //if(fieldid !="" && type!="submit")
		     //{
		     //if(fieldid !="" && type!="radio")
		     //{
		     
		    // value = value.toString().replace(/\&/g, "and");
		 	//var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
		     
		if(value != "")
		{
			var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
		}
		     //}
		     //}


		}
	    
	
	}


	formxml= formxml +"<"+GrdPrfx+"PRCSID>"+$("#"+MnPrfx+"PRCSID").val()+"</"+GrdPrfx+"PRCSID>"+"<"+GrdPrfx+"ACTIVITYID>"+$("#"+MnPrfx+"ACTIVITYID").val()+"</"+GrdPrfx+"ACTIVITYID>"
	+"<"+GrdPrfx+"DTMODIFIED>"+$("#"+MnPrfx+"DTMODIFIED").val()+"</"+GrdPrfx+"DTMODIFIED>"+"<"+GrdPrfx+"DTCREATED>"+$("#"+MnPrfx+"DTCREATED").val()+"</"+GrdPrfx+"DTCREATED>"
	+"<"+GrdPrfx+"MODIFIEDBY>"+$("#"+MnPrfx+"MODIFIEDBY").val()+"</"+GrdPrfx+"MODIFIEDBY>"+"<"+GrdPrfx+"CREATEDBY>"+$("#"+MnPrfx+"CREATEDBY").val()+"</"+GrdPrfx+"CREATEDBY>"+"</row>";
	}
	var formxml = formxml + "</Data>";
	//alert(formxml);
	return formxml;

	}


// Multi Row Attach Page Data Save End




function DocFldUpldHndlr_MULTI(id,HdnID,docu,KYCName,FrmName,UniqID,HTML)
{
	var Val=$(id).val();

	if(Val!="")
	{
	    var domain= LoadFrmXML("RS001");
	    var usrpwd= LoadFrmXML("RS002");
	    var PrcsID=getUrlParam("PrcsID");
	    var FormName= FrmName;
	  // var CusID=$('#CBSI_CUSID').val()
	    var CusID=UniqID
	    var DocName=KYCName
	    var names="";
	    var descrptns="";
		var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
		var flsize = "";
	 var fd = new FormData();
	   var vrsnno= "";
		var prodata = "";
	var CountAttch=1;
		
		 for(var c=0;c<CountAttch;c++)
		 {
	      file_data = $(id).closest('td').find('input[type="file"]')[0].files; // for multiple files
		     for(var i = 0;i<file_data.length;i++){
				var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
		         fd.append("file_"+c, file_data[i]);
		         names += $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
				 flsize += parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
				 vrsnno += $(op).find("VR").text()+',';
				 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
				 {
					 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
				 }
		         descrptns += 'FieldDocument'+',';
		     }
		 }
	 var FileSize=parseFloat($(id).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
  //   var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
 //    var Filename  = names.replace(',','')
       var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
 
		var xml=UI_getdata(FileType,FileSize,Filename,"","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }
	
  names=names+'.'+FileType	 
		 
		 
	var y=  names;
/*	var specialChars = "<>&#^|~`"
	var check = function(string){
	    for(i = 0; i < specialChars.length;i++){
	        if(string.indexOf(specialChars[i]) > -1){
	            return true
	        }
	    }
	    return false;
	}

	if(check(y) == false){
	    // Code that needs to execute when none of the above is in the string
	}else{
	    alert('File name contains special character please remove and upload');
		$(id).closest('td').find('input[type="file"]').val('')
		return;
	}*/
	 ajaxindicatorstart("Uploading.. Please wait");
		    $.ajax({
		    	url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&CusID="+CusID+"&DocName="+DocName,
		        data: fd,
				async:false,
		        contentType: false,
		        processData: false,
		        type: 'POST',
		        success: function(data){
				
				if(data=="Fail")
		        		{
							 ajaxindicatorstop();
		        		alert(LoadFrmXML("V0119"));
						return
		        		}
				else{
					//AttchDmsIns(data,'upload',prodata);
					//$(id).val('View');
					//$("#"+HdnID).val(data.split('~')[2])
					$(id).closest('td').find("#"+HdnID).val(data.split('~')[2]);
					$(id).closest('td').find('input[type="file"]').attr('disabled',true)
					$(id).closest('td').find('input[type="file"]').val('');
					$(id).closest('td').find('input[type="file"]').hide();
				//	$(id).closest('td').replace('','');
				//	$(id).closest('td').append('<span class="name">'+names.slice(0,-1)+'</span> ')
					
					//
					
					$(id).closest('.md-form').find('span').remove()
					 $(id).val('')
			
				   // $(id).val(data.split('~')[2])
					var UPLOAD=docu+'UPLOAD'
					$(HTML).find('#'+UPLOAD).hide();
					$(HTML).find('.'+docu).show();
					$(id).closest('.md-form').append('<span class="name">'+names+'</span>');
					
						ajaxindicatorstop();
						alert(LoadFrmXML("V0118"));
						return
						
					}	
						 ajaxindicatorstop(); 
		        },
		        failure:function(data)
		        {
		     		  ajaxindicatorstop();
						alert(LoadFrmXML("V0119"));
						return
		        	
		        }
		    });
			
			  ajaxindicatorstop();
			  }
			  else{
			  
			  alert('select the file to upload');
			  }

}






/****LOAD MULTI INSIDE LOAD MULTI STRT*****/
function LoadMultiData_V2 (TblName,PrcsVal,UniqNo,DV,FieldClass,SP)
{
	//$("#"+PRCSID).val(PrcsVal)
	
      var TechPropDetls = UI_getdata(TblName,PrcsVal,UniqNo,"","",SP);
	 if(TechPropDetls!="<Resultset><a><XMLLRGResult><asetLRGDAta>NoData</asetLRGDAta></XMLLRGResult></a></Resultset>")
      {
      var xmlDoc = $.parseXML(TechPropDetls);
	  if(xmlDoc == null)
	  {
		  return;
	  }
      var rowno = $(xmlDoc.documentElement).find('a asetLRGDAta').length;
      for(j=1;j<=rowno;j++)
            {
            //var html = $("#"+DV).html();
            var html = $($("#"+DV).html());
            var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
            var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
            var document = $(html);
            $(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
            $(html).find("[data-row]").attr("data-row",j);
            $(html).attr("data-row",j);
            $(html).find('.mdb-select').material_select('destroy');
            $(html).find('.mdb-select').material_select();
            $(html).find(".NXTBTNF").attr("data-card",j-1);
            
            
            if ($(html).find('.FormaccordionSUB').length > 0)
      	   {
      	   
          	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
          	  
      	  // var AccordionID = $(html).find('.Formaccordion').attr("id") + j
      	   
      	  // $(html).find('.Formaccordion').attr("id",AccordionID);
      	   
      	   var HeadingID = $(html).find('.FormaccordionSUB .card-header').attr("id") + j;
      	   
      	   $(html).find('.FormaccordionSUB .card-header').attr("id",HeadingID);
      	   
      	//   $(html).find('.Formaccordion .card-header a').attr("data-parent","#"+AccordionID);
      	   
      	   var CollapseID =  $(html).find('.FormaccordionSUB .collapse').attr("id") + j;
      	   
      	 //  $(html).find('.Formaccordion .collapse').attr("data-parent","#"+AccordionID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("id",CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("aria-labelledby",HeadingID);	   
      	   
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("href","#"+CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("aria-controls",CollapseID);
      	   
      	   }
            
            
            
      //    return;
            var n = $(html).find("." + FieldClass).length;
              for (i = 0; i < n; i++) {
            	 
            	  name = $($(html).find("." + FieldClass)[i]).attr("name");
 
            	  if ($(html).find('[name='+name+']').is( "a"))
            	  {
            	  	
            	  	
            	  	if ($(html).find('[name='+name+']').attr('data-toggle') == "modal")
            	  		{		
            	  		$(html).find('[name='+name+']').attr("id",($(html).find('[name='+name+']').attr("id") + j));
            	  		$(html).find('[name='+name+']').attr("data-target",("#" + name + j));	
            	  		
            	  		}
            	  	
            	  	$(html).find('[name='+name+']').attr('data-table', $(html).find('[name='+name+']').attr('data-table') + j);
            	  	$(html).find('[name='+name+']').attr('href', "#" + $(html).find('[name='+name+']').attr('data-table') + j);

            	  }
            	  else if ($(html).find('[name='+name+']').attr("data-info") == "ModalWindow")
            	  {

            	  	$(html).find('[name='+name+']').attr("id",name.replace("Modal","") + j);

            	  }
            	  
            	  else if($(html).find('[name='+name+']').attr('type')=="button")
{

   if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
     {
 
	var datavalue = $(html).find('[name='+name+']').attr('data-value');
	 
	var TableID = datavalue.split("|")[0] + j;
	var SPNAME = datavalue.split("|")[1];
	
	var Param1 = '$("#'+ datavalue.split("|")[2] +'").val()';	

	var params2 = datavalue.split("|")[3];
	
	var Param2 = "";
	for (y=0;y<params2.split("~").length;y++)
		{
		
		Param2 = Param2 + '$("#'+  params2.split("~")[y] + j +'").val()' + "+'|'+";
		
		}
	
	Param2 = Param2.slice(0,Param2.lastIndexOf("+'|'+"))
	
	var Param3 = '$("#'+ datavalue.split("|")[4] + j +'").val()';	
	
	var HdnClms = datavalue.split("|")[5];
	var Fnctype = datavalue.split("|")[6];
	var attr =$(html).find('[name='+name+']').attr("data-custom-html-handle");
	var BtnClick = "";
	if (typeof attr !== 'undefined' && attr !== false) {
		$(html).find('[name='+name+']').attr("data-html",$(html).closest(".dynrow").attr("data-row"));
		mainrowno=$(html).closest(".dynrow").attr("data-row");
		BtnClick =  "FncallDocChkLst_Custom_BankDtl(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+",Html:"+mainrowno+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
	}
	else{
		BtnClick =  "FncallDocChkLst(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
	}
          			  
	$(html).find('[name='+name+']').attr("onclick",BtnClick);
    
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);
	
     }
            		  
            	  
}
else if ($(html).find('[name='+name+']').is( "table"))
{
	
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);

}

else
 {
            	              
              var val = $($(xmlDoc.documentElement).find('a asetLRGDAta')[j-1]).find(name).text();
              if (val != "") {
                  if ($(html).find("#"+name).length > 0)
                        {
                        $(html).find("#"+name).val(val);
               // added by bala Upload Image Show Start
               if($(html).find("[data-Validate="+name+"]").length > 0)
               {
                   FileSplit=val.split('\\');
                  var FileName=FileSplit[FileSplit.length - 1]
                  $(html).find("#"+name+"UPLOAD").hide()
                   $(html).find("#"+name+"UPLOAD").closest('.md-form').append(FileName);
                  if(val != "")
                  {
                        $(html).find("."+name).show();
                  }
                  else
                  {
                        $(html).find("."+name).hide();
                        $(html).find("#"+name+"UPLOAD").show()
                  }
               }
               // End
               if($(html).find("[data-Validatearia="+name+"]").length > 0)
                   {
                   if (val == "Verified")
                         {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-GrnInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                         }
                   else if (val == "Failed")
                   {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-RedInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                   }
                   }
                        }
                  if($(html).find("#"+name).val()  != "")
                    {
                    $(html).find('[for='+name+']').addClass('active');
                    }
                  //checkbox 11-01-2018
if($(html).find('[name='+name+']').attr('type')=="radio")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
      //$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+j);
}  
if($(html).find('[name='+name+']').attr('type')=="checkbox")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
}

  if ($(html).find('[name='+name+']').is( "span"))
  {
	  
	  /*$(html).find('[name='+name+']').hasClass("DataFld")
	  {
		  
		  $(html).find('[name='+name+']').text(val);
		  
	  }*/
	  if($(html).find('[name='+name+']').hasClass("Datahtml"))
	  {
		  $(html).find('[name='+name+']').html(val);
	  }
	  else if($(html).find('[name='+name+']').hasClass("DataFld"))
	  {
		  
		  $(html).find('[name='+name+']').text(val);
		  
	  }
	  else{
		  $(html).find('[name='+name+']').text(val);
	  }
  
  }



            /*if($("#"+ name).attr('type') == 'checkbox')
                        {
                  $("#"+ name).prop("checked",val);
                        }*/
            if($(html).find("#"+ name).is( "select" ))
            {
            var optn="<option  value='"+val+"'>" + val + "</option>"
            if($(html).find("#"+name+" option[value='" + val + "']").length==0)
            {
                  $(html).find("#"+ name).append(optn)
            $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
            }
            else
                  {
                  $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
                  }
      //    if($("#"+ name).prev('ul').length == 0)
                  //{
            
            $(html).find("#"+ name).addClass("mdb-select");
            
                  //}
            }
            //IsCURCommaFields
            var x = $(html).find("#" + name).hasClass("IsCURCommaFields");
           if (x == true) {
                        if(val=="")
                        {
                              val= "0";
                        }
						
						
			if (val.replace(/,/g,"").indexOf('.')>0)
			{

			if (val.replace(/,/g,"").split('.')[1] > 0)
			{
$(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(2)));
			}	
else{
$(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}	
			
			
			}
else{			
						
                        $(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}
          }
          else {
                        //For Attached Photo identity Start
                  var y = $(html).find("#" + name).hasClass("ImgIdnt");
          if (y == true) {
                  var IOP=LoadFrmXML("RS006");
                  val = IOP+val;
                  document.getElementById(name).src = val;
          }
                        //For Attached Photo identity End
                  else
                  {                      
                        if ($(html).find("#"+name).length > 0)
                  {
                              $(html).find("#"+name).val(val);
                  }
                        }
          }
              }
              else
                  {
                  if($(html).find("#"+ name).is( "select" ))
                        {
                	  
                	    $(html).find("#"+ name).addClass("mdb-select");
                	  
                        //if($("#"+ name).prev('ul').length == 0)
                              //{
                	 //   $(html).find("#"+ name).material_select('destroy');
                        
                              //}
                        }
                  }
              
              if($($(html).find("." + FieldClass)[i]).attr("type") == "radio")
              {
             	 var radioID = $($(html).find("." + FieldClass)[i]).attr("id")
             	 
             	 $($(html).find("." + FieldClass)[i]).attr("id",radioID + j);
             	 $(html).find("[for="+radioID+"]").attr("for",radioID + j);
             	 
             	//$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+j);
              }
              
              $(html).find("#"+name).attr("id",name + j);
              if ($(html).find("[for="+name+"]").length > 0)
                    {
                    $(html).find("[for="+name+"]").attr("for",name + j)
                    }
              
              
              
             // $(html).find("#"+name).attr("id",name + j);
             // $(html).find("#"+name).attr("id",name + j);
          }
            }    
              
			  if($(html).find('.MULTILOADMULTI').length > 0)
			  {
				  var MULTILOADMULTIlen =$(html).find('.MULTILOADMULTI').length;
				  var multiloaddv="",multiloadTblName="",multiloadPrcsVal="",multiloadUniqNo="",multiloadFieldClass="",multiloadSP="",multiloadhtml= "";
				  for(var multiload = 0;multiload<MULTILOADMULTIlen;multiload++)
				  {
					  multiloaddv = "",multiloadTblName="",multiloadPrcsVal="",multiloadUniqNo="",multiloadFieldClass="",multiloadSP="",multiloadhtml= "";
					  multiloaddv = $($(html).find('.MULTILOADMULTI')[multiload]).attr("id");
					  multiloadPrcsVal = $("#PrcsID").val();
					  multiloadUniqNo =$(html).find("[name='"+$($(html).find('.MULTILOADMULTI')[multiload]).attr("data-multi-UniqNo")+"']").val();
					  multiloadFieldClass =$($(html).find('.MULTILOADMULTI')[multiload]).attr("data-multi-FieldClass");
					  multiloadSP =$($(html).find('.MULTILOADMULTI')[multiload]).attr("data-multi-SP");
					  
					  multiloadhtml = LoadMultiData_Supporting (multiloadTblName,multiloadPrcsVal,multiloadUniqNo,multiloaddv,multiloadFieldClass,multiloadSP,html)
					 // $(html).find("."+$($(html).find('.MULTILOADMULTI')[multiload]).attr("id")).append(multiloadhtml);
				  }
			  }
              $("."+DV).append(html);
              
              
              $("."+DV).last().find('.mdb-select').material_select('destroy');
              $("."+DV).last().find('.mdb-select').material_select();
              
           // Calendar
              var $input = $(document).find('.datepicker').pickadate({
                  //editable: 'true',
              format: 'dd/mm/yyyy',
              selectYears: 200,
              selectMonths: true
              })
              .on("change", function() {
                $(this).prev().prev().val($(this).val());
                $(this).prev().prev().focus();
              });
              
             // $("."+DV).last().find(".MultiGridTrg").click();
			  $("."+DV).find(".DYNROW").last().find(".MultiGridTrg").click();
			  
			  
            }
	   }
      //$("#COBI_CUSID").val($(CUSID).find("Val1").text());
	  
	    // FOR ONLOAD 1 STRIP OPEN FOR EXPANDABLE STRIPS START
	    if ($(html).find('.FormaccordionSUB').length > 0)
      	   {
      	   
          	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
			  $($("."+DV).find('.FormaccordionSUB').find('a')[0]).click();
			  $($($("."+DV).find('.FormaccordionSUB')[0]).find('div')[1]).addClass("show");
		   }
	  // FOR ONLOAD 1 STRIP OPEN FOR EXPANDABLE STRIPS END
	  
}








function LoadMultiData_Supporting (TblName,PrcsVal,UniqNo,DV,FieldClass,SP,mainhtml)
{
	//$("#"+PRCSID).val(PrcsVal)
	
      var TechPropDetls = UI_getdata(TblName,PrcsVal,UniqNo,"","",SP);
	 if(TechPropDetls!="<Resultset><a><XMLLRGResult><asetLRGDAta>NoData</asetLRGDAta></XMLLRGResult></a></Resultset>")
      {
      var xmlDoc = $.parseXML(TechPropDetls);
	  if(xmlDoc == null)
	  {
		  return;
	  }
      var rowno = $(xmlDoc.documentElement).find('a asetLRGDAta').length;
	  var finalhtml = "";
      for(multiloadj=1;multiloadj<=rowno;multiloadj++)
            {
            //var html = $("#"+DV).html();
            var html = $($("#"+DV).html());
            var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
            var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
            var document = $(html);
            $(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + multiloadj);
            $(html).find("[data-row]").attr("data-row",multiloadj);
            $(html).attr("data-row",multiloadj);
            $(html).find('.mdb-select').material_select('destroy');
            $(html).find('.mdb-select').material_select();
            $(html).find(".NXTBTNF").attr("data-card",multiloadj-1);
            
            
            if ($(html).find('.FormaccordionSUB').length > 0)
      	   {
      	   
          	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
          	  
      	  // var AccordionID = $(html).find('.Formaccordion').attr("id") + multiloadj
      	   
      	  // $(html).find('.Formaccordion').attr("id",AccordionID);
      	   
      	   var HeadingID = $(html).find('.FormaccordionSUB .card-header').attr("id") + multiloadj;
      	   
      	   $(html).find('.FormaccordionSUB .card-header').attr("id",HeadingID);
      	   
      	//   $(html).find('.Formaccordion .card-header a').attr("data-parent","#"+AccordionID);
      	   
      	   var CollapseID =  $(html).find('.FormaccordionSUB .collapse').attr("id") + multiloadj;
      	   
      	 //  $(html).find('.Formaccordion .collapse').attr("data-parent","#"+AccordionID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("id",CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .collapse').attr("aria-labelledby",HeadingID);	   
      	   
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("href","#"+CollapseID);
      	   
      	   $(html).find('.FormaccordionSUB .card-header a').attr("aria-controls",CollapseID);
      	   
      	   }
            
            
            
      //    return;
            var n = $(html).find("." + FieldClass).length;
              for (i = 0; i < n; i++) {
            	 
            	  name = $($(html).find("." + FieldClass)[i]).attr("name");
 
            	  if ($(html).find('[name='+name+']').is( "a"))
            	  {
            	  	
            	  	
            	  	if ($(html).find('[name='+name+']').attr('data-toggle') == "modal")
            	  		{		
            	  		$(html).find('[name='+name+']').attr("id",($(html).find('[name='+name+']').attr("id") + multiloadj));
            	  		$(html).find('[name='+name+']').attr("data-target",("#" + name + multiloadj));	
            	  		
            	  		}
            	  	
            	  	$(html).find('[name='+name+']').attr('data-table', $(html).find('[name='+name+']').attr('data-table') + multiloadj);
            	  	$(html).find('[name='+name+']').attr('href', "#" + $(html).find('[name='+name+']').attr('data-table') + multiloadj);

            	  }
            	  else if ($(html).find('[name='+name+']').attr("data-info") == "ModalWindow")
            	  {

            	  	$(html).find('[name='+name+']').attr("id",name.replace("Modal","") + multiloadj);

            	  }
            	  
            	  else if($(html).find('[name='+name+']').attr('type')=="button")
{

   if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
     {
 
	var datavalue = $(html).find('[name='+name+']').attr('data-value');
	 
	var TableID = datavalue.split("|")[0] + multiloadj;
	var SPNAME = datavalue.split("|")[1];
	
	var Param1 = '$("#'+ datavalue.split("|")[2] +'").val()';	

	var params2 = datavalue.split("|")[3];
	
	var Param2 = "";
	for (y=0;y<params2.split("~").length;y++)
		{
		
		Param2 = Param2 + '$("#'+  params2.split("~")[y] + multiloadj +'").val()' + "+'|'+";
		
		}
	
	Param2 = Param2.slice(0,Param2.lastIndexOf("+'|'+"))
	
	var Param3 = '$("#'+ datavalue.split("|")[4] + multiloadj +'").val()';	
	
	var HdnClms = datavalue.split("|")[5];
	var Fnctype = datavalue.split("|")[6];
		   
	var BtnClick =  "FncallDocChkLst(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
          			  
	$(html).find('[name='+name+']').attr("onclick",BtnClick);
    
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + multiloadj);
	
     }
            		  
            	  
}
else if ($(html).find('[name='+name+']').is( "table"))
{
	
	$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + multiloadj);

}

else
 {
            	              
              var val = $($(xmlDoc.documentElement).find('a asetLRGDAta')[multiloadj-1]).find(name).text();
              if (val != "") {
                  if ($(html).find("#"+name).length > 0)
                        {
                        $(html).find("#"+name).val(val);
               // added by bala Upload Image Show Start
               if($(html).find("[data-Validate="+name+"]").length > 0)
               {
                   FileSplit=val.split('\\');
                  var FileName=FileSplit[FileSplit.length - 1]
                  $(html).find("#"+name+"UPLOAD").hide()
                   $(html).find("#"+name+"UPLOAD").closest('.md-form').append(FileName);
                  if(val != "")
                  {
                        $(html).find("."+name).show();
                  }
                  else
                  {
                        $(html).find("."+name).hide();
                        $(html).find("#"+name+"UPLOAD").show()
                  }
               }
               // End
               if($(html).find("[data-Validatearia="+name+"]").length > 0)
                   {
                   if (val == "Verified")
                         {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-GrnInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                         }
                   else if (val == "Failed")
                   {
                        $(html).find("[data-Validatearia="+name+"]").text(val);
                        $(html).find("[data-Validatearia="+name+"]").addClass("btn-RedInplain");
                        $(html).find("." + $("[data-Validatearia="+name+"]").attr("data-validate")).show();
                        $(html).find(".OtherKYCInfo").show();
                   }
                   }
                        }
                  if($(html).find("#"+name).val()  != "")
                    {
                    $(html).find('[for='+name+']').addClass('active');
                    }
                  //checkbox 11-01-2018
if($(html).find('[name='+name+']').attr('type')=="radio")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
      //$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+multiloadj);
}  
if($(html).find('[name='+name+']').attr('type')=="checkbox")
{
      $(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
}

  if ($(html).find('[name='+name+']').is( "span"))
  {
	  
	  /*$(html).find('[name='+name+']').hasClass("DataFld")
	  {
		  
		  $(html).find('[name='+name+']').text(val);
		  
	  }*/
	  if($(html).find('[name='+name+']').hasClass("Datahtml"))
	  {
		  $(html).find('[name='+name+']').html(val);
	  }
	  else if($(html).find('[name='+name+']').hasClass("DataFld"))
	  {
		  
		  $(html).find('[name='+name+']').text(val);
		  
	  }
	  else{
		  $(html).find('[name='+name+']').text(val);
	  }
  
  }



            /*if($("#"+ name).attr('type') == 'checkbox')
                        {
                  $("#"+ name).prop("checked",val);
                        }*/
            if($(html).find("#"+ name).is( "select" ))
            {
            var optn="<option  value='"+val+"'>" + val + "</option>"
            if($(html).find("#"+name+" option[value='" + val + "']").length==0)
            {
                  $(html).find("#"+ name).append(optn)
            $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
            }
            else
                  {
                  $(html).find("#"+name+" option:contains("+val+")").attr("selected","selected")
                  }
      //    if($("#"+ name).prev('ul').length == 0)
                  //{
            
            $(html).find("#"+ name).addClass("mdb-select");
            
                  //}
            }
            //IsCURCommaFields
            var x = $(html).find("#" + name).hasClass("IsCURCommaFields");
           if (x == true) {
                        if(val=="")
                        {
                              val= "0";
                        }
						
						
			if (val.replace(/,/g,"").indexOf('.')>0)
			{

			if (val.replace(/,/g,"").split('.')[1] > 0)
			{
$(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(2)));
			}	
else{
$(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}	
			
			
			}
else{			
						
                        $(html).find("#" + name).val(CURCommaSep(parseFloat(val.replace(/,/g,"")).toFixed(0)));
}
          }
          else {
                        //For Attached Photo identity Start
                  var y = $(html).find("#" + name).hasClass("ImgIdnt");
          if (y == true) {
                  var IOP=LoadFrmXML("RS006");
                  val = IOP+val;
                  document.getElementById(name).src = val;
          }
                        //For Attached Photo identity End
                  else
                  {                      
                        if ($(html).find("#"+name).length > 0)
                  {
                              $(html).find("#"+name).val(val);
                  }
                        }
          }
              }
              else
                  {
                  if($(html).find("#"+ name).is( "select" ))
                        {
                	  
                	    $(html).find("#"+ name).addClass("mdb-select");
                	  
                        //if($("#"+ name).prev('ul').length == 0)
                              //{
                	 //   $(html).find("#"+ name).material_select('destroy');
                        
                              //}
                        }
                  }
              
              if($($(html).find("." + FieldClass)[i]).attr("type") == "radio")
              {
             	 var radioID = $($(html).find("." + FieldClass)[i]).attr("id")
             	 
             	 $($(html).find("." + FieldClass)[i]).attr("id",radioID + multiloadj);
             	 $(html).find("[for="+radioID+"]").attr("for",radioID + multiloadj);
             	 
             	//$(html).find('[name='+name+']').attr('name', $(html).find('[name='+name+']').attr('name') + 'RVAL'+multiloadj);
              }
              
              $(html).find("#"+name).attr("id",name + multiloadj);
              if ($(html).find("[for="+name+"]").length > 0)
                    {
                    $(html).find("[for="+name+"]").attr("for",name + multiloadj)
                    }
              
              
              
             // $(html).find("#"+name).attr("id",name + multiloadj);
             // $(html).find("#"+name).attr("id",name + multiloadj);
          }
            }    
              $(mainhtml).find("."+DV).append(html)
              //$("."+DV).append(html);
              //finalhtml=finalhtml+$(html)[0].outerHTML
             //$(finalhtml).find(".DVZZZ").append(html)
            /**  $("."+DV).last().find('.mdb-select').material_select('destroy');
              $("."+DV).last().find('.mdb-select').material_select();
              
           // Calendar
              var $input = $(document).find('.datepicker').pickadate({
                  //editable: 'true',
              format: 'dd/mm/yyyy',
              selectYears: 200,
              selectMonths: true
              })
              .on("change", function() {
                $(this).prev().prev().val($(this).val());
                $(this).prev().prev().focus();
              });
              
             // $("."+DV).last().find(".MultiGridTrg").click();
			  $("."+DV).find(".DYNROW").last().find(".MultiGridTrg").click();**/
            }
			//return finalhtml;
	   }
      //$("#COBI_CUSID").val($(CUSID).find("Val1").text());
	  
	    // FOR ONLOAD 1 STRIP OPEN FOR EXPANDABLE STRIPS START
	    if ($(html).find('.FormaccordionSUB').length > 0)
      	   {
      	   
          	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
			  $($("."+DV).find('.FormaccordionSUB').find('a')[0]).click();
			  $($($("."+DV).find('.FormaccordionSUB')[0]).find('div')[1]).addClass("show");
		   }
	  // FOR ONLOAD 1 STRIP OPEN FOR EXPANDABLE STRIPS END
}

/****LOAD MULTI INSIDE LOAD MULTI END*****/


function DirImgDown(id)
{
	if ($("#"+id).val() == "")
		{
			alert("No Attachments Available to View");
			return;
		}
	else{
	RedirectURL =$("#"+id).val()
	
	$("#DocView").attr("src", RedirectURL);
	}
}



function ViewDedupe()
{
$(".DedupePopup").click();
$("#BTNDEDUPEIGRD").click();
$("#BTNDEDUPEIIGRD").click();
$("#BTNDEDUPEIIIGRD").click();
$("#BTNLSWINTER").click()
$("#BTNRBIDEDUPE").click()
}

function GridESIGNValidate(Evnt){
	var op = UI_getdata($('#PrcsID').val(),"","","","","LSW_SCHKCRSCHRGS");
		var Collection=$(op).find('RESULT').text()
			if(Collection != 'SUCCESS')
						{
				var Alert2=''
								var nameArr = Collection.split(',')
						         k=nameArr.length
								 for(i=0;i<k;i++)
								 {
									var Alert1= nameArr[i]
									var Alert2 = Alert2 +'\r\n'+Alert1
								 }
						  
						  alert(Alert2);
						   return false;
						   
				}
				else
				{
	var xml=UI_getdata($('#PrcsID').val(),'','','','','LSW_SCHECKESIGN');
	var Checkverify= $(xml).find("RESULT").text();
	
	if(Checkverify=='X')
	{
		alert($(xml).find("ALERT").text());
		return
		
	}
	else
	{
		
	
	
	var dmsid = $($(Evnt).closest(".tbodytrtd").prev().find("input[type=text]")).val().split("\\")[0];
	var storeinithitfld = $(Evnt).closest(".tbodytrtd").find("input[type=text]");
	var storeinithitfld_1 =  $($(Evnt).closest(".tbodytrtd").next().find("input[type=text]"));
	$.ajax({
		url: "/TPLSW/esignLegality",
		data: {spname:"LSW_SESIGNAPICREATE",docurl:dmsid,hittype:"Create",prcsid:$("#PrcsID").val(),Prvnt:$("#Prvnt").val()},
		async:true,
		type: 'POST',
		success: function(xml1)
		{
			if(xml1.split("~")[0] == "Error")
			{
				$("#"+$(storeinithitfld).attr("id")).val("Error");
				alert(xml1.split("-")[1]);
				$("#Save").click();
				window.location.reload();
				return;
			}
			else if(xml1.split("~")[0] == "Success")
			{
				$("#"+$(storeinithitfld).attr("id")).val(xml1.split("~")[1]);
				$("#"+$(storeinithitfld_1).attr("id")).val("");
				$("#Save").click();
				window.location.reload();
				return;
			}
			else
			{
				alert("Error Occurred, Contact ID");
				return;
			}
		},
		error: function (xml1)
	   {
			alert("Error Occurred, Contact ID");
			return;
	   }
	});
	}
	}
}

function GridESIGNRetrieve(Evnt){
	var dmsid = $($(Evnt).closest(".tbodytrtd").prev().find("input[type=text]")).val();
	var storeinithitfld = $(Evnt).closest(".tbodytrtd").find("input[type=text]");
	$.ajax({
		url: "/TPLSW/esignLegality-GetStatus",
		data: {spname:"LSW_SESIGNAPICREATE",docid:dmsid,hittype:"Get",prcsid:$("#PrcsID").val(),Prvnt:$("#Prvnt").val()},
		async:true,
		type: 'POST',
		success: function(xml1)
		{
			if(xml1.split("~")[0] == "Error")
			{
				alert(xml1.split("~")[1]);
				return;
			}
			else if(xml1.split("~")[0] == "Success")
			{
				$("#"+$(storeinithitfld).attr("id")).val(xml1.split("~")[1]);
				$("#Save").click();
				window.location.reload();
				return;
			}
			else
			{
				alert("Error Occurred, Contact ID");
				return;
			}
		},
		error: function (xml1)
	   {
			alert("Error Occurred, Contact ID");
			return;
	   }
	});
}

function GridGSTValidate(Evnt){

	$("#Save1").click();
	var mnth = $($(Evnt).closest(".tbodytr").find(".tbodytrtd")[0]).find("input[type=text]").val();
	var storeinithitfld = $(Evnt).closest(".tbodytrtd").find("input[type=text]");
	$.ajax({
		url: "/TPLSW/GSTAnalysisCallUploadProcess",
		data: {SPNAME:"LSW_SGSTANALYSISCREATE",Param1:"",Param2:"Upload",Param3:mnth,PRCSID:$("#PrcsID").val(),Prvnt:$("#Prvnt").val()},
		async:true,
		type: 'POST',
		success: function(xml1)
		{
			if(xml1.split("~")[0] == "Error")
			{
				alert(xml1.split("~")[1]);
				return;
			}
			else if(xml1.split("~")[0] == "Success")
			{
				$("#"+$(storeinithitfld).attr("id")).val(xml1.split("~")[1]);
				$("#Save1").click();
				window.location.reload();
				return;
			}
			else
			{
				alert("Error Occurred, Contact ID");
				return;
			}
		},
		error: function (xml1)
	   {
			alert("Error Occurred, Contact ID");
			return;
	   }
	});
}

function DSVLBLALLOUTSAVE(Evnt)
{
	  $(".form-control").attr('disabled',true);
		$(".custom-control-input").attr('disabled',true);
		$(".GridDocUpd").hide();
		$(".Gridmdb-select").attr('disabled',true);
		$(".tbodytrtd").attr('disabled',true);
		 $(".BTNVerify").attr('disabled',true)
		 $(".AddKYC").hide();
		
		
	  // $(".FormSave").hide();
       $(".DelGridrow").hide();
	    $(".DelGridrowDOCUPLD").hide();
	   $('.select-dropdown').attr('disabled',true)
	   $('.BTNDedupe').attr('disabled',true)
	   
		  $(".DELBTN").hide();
	      $(".DELBTNTXT").hide();
		  $(".ADDBTN").hide();
		  $(".ReUpld").hide();
		  $(".KYCDEL").hide();
		  
		  $(".btn-sm").attr('disabled',true)
		  $(".fa-plus").hide()
		  $("input[name=datafile]").attr('disabled',true);
		//  $(".BTNHIDE").hide()
		  $(".RPTBTN").hide()
		  $('.datepicker').attr('disabled',true)
		  if(Evnt !="WA"){
		  $(".FormPageMultiTabAdd").hide()
		  }
		  $('.RPTVIEW').show()
		  $('.datepicker').hide()
		  $("#Reject").hide()
		  $('.Griddatepicker').hide()
		  $('.dropdown-content').attr('disabled',true)
		  
		   	
// Credit Chenages for Sanction Amt Field enabled in Waiver Stage START
	if($("#DMY5").val().split("|")[2]=="Waiver")
      {
       if(($(".FormMainTab1 li.active").attr("id")=="FormPageTab5")&&($(".FormMainTabs li.active").attr("id")=="FormMainTab6")&&($("#PrMs1").val()!="View"))
	     {
	  	   if($("#DMY7").val().split("|")[12]=="Y")
		     {
              //$("#FCEB_VALUE4").attr('disabled',false)
			  $(".ExpAmt").removeAttr('disabled')
		      //$("[name=FCEB_HIDDENID]").prev().removeAttr("disabled"); 
		     }			
	     }
       }
//End

$(".DISENAB").removeAttr('disabled') 
$('.SENDBCK').attr('disabled',false)
		  $(".SENDBCK").removeAttr('disabled') 
	  
}

function ACHImageProcess(){
	$.ajax({
		url: "/TPLSW/imagePrcsACH",
		data: {PrcsID:$("#PrcsID").val()},
		async:true,
		type: 'POST',
		success: function(xml1)
		{
			if(xml1.split("~")[0] == "Success")
			{
				var obj = JSON.parse(xml1.split("~")[1]);
				if(obj.code == "SR")
				{
					
				}
				else
				{
					alert(obj.message);
				}
			}
			else if(xml1.split("~")[0] == "NoRecord")
			{
				
			}
			else
			{
				alert(xml1.split("~")[1]);
			}
		},
		error: function (xml1)
	   {
			alert("Error Occurred, Contact ID");
	   }
	});
}

function LeadSQRStatusPush(StatusEvnt)
{
	if(StatusEvnt == "")
	{
		alert("Lead SQR - Status Not Received, Contact IT");
		return;
	}
	$.ajax({
		url: "/TPLSW/leadSQR-Status",
		data: {PrcsID:$("#PrcsID").val(),StatusEvnt:StatusEvnt,Prvnt:$("#Prvnt").val()},
		async:true,
		type: 'POST',
		success: function(xml1)
		{
			
			if(xml1.split("~")[0] == "Success")
			{

			}
			else if(isJsonString(xml1.split("~")[1]))
			{
				var obj = JSON.parse(xml1.split("~")[1]);
				alert("Lead SQR - Status : "+obj.Status+", ExceptionType : "+obj.ExceptionType+", ExceptionMessage : "+obj.ExceptionMessage);
			}
			else
			{
				alert("Lead SQR - "+xml1.split("~")[1]);
			}
		},
		error: function (xml1)
	   {
			alert("Lead SQR - Error Occurred, Contact ID");
	   }
	});
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function GeoTagging(prcsid,cusid,hittype){
	var OP="";
	$.ajax({
		url: "/TPLSW/GetTagging",
		data: {prcsid:$("#PrcsID").val(),cusid:cusid,hitType:hittype,Prvnt:$("#Prvnt").val()},
		async:false,
		type: 'POST',
		success: function(xml1)
		{
			if(xml1.split("~")[0] == "Success")
			{
				OP= xml1.split("~")[1]
			}
			else
			{
				alert("Geo Tagging - "+xml1.split("~")[1]);
				return;
			}
		},
		error: function (xml1)
	   {
			alert("Geo Tagging - Error Occurred, Contact ID");
	   }
	   });
	   
	   if(OP != "")
		   return OP;
	   else
		   return false;
}

function GetCoordinateDistance(Lat,Long,DistanceFld,Typ){
	var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETBRPOSITION");
	var BranchLat = "";
	var BranchLong = "";
	if(Typ == "BRANCH TO HTML")
	{
		if(($(op).find("LAT").text() =="") || ($(op).find("LONG").text() ==""))
		{
			alert("Branch Geo Location Not Configured, Contact IT")
			return;
		}
		else 
		{
			BranchLat = $(op).find("Lat").text();
			BranchLong = $(op).find("Long").text();
		}
	}
	else
	{
		BranchLat = Lat.split("~")[1]
		Lat = Lat.split("~")[0]
		BranchLong = Long.split("~")[1]
		Long = Long.split("~")[0]
	}
	$.ajax({
		url: "/TPLSW/GetCoordinateDistance",
		//data: {BranchLat:$(op).find("Lat").text(),BranchLong:$(op).find("Long").text(),Lat:$("#"+Lat).val(),Long:$("#"+Long).val(),Prvnt:$("#Prvnt").val()},
		data: {BranchLat:BranchLat,BranchLong:BranchLong,Lat:$("#"+Lat).val(),Long:$("#"+Long).val(),Prvnt:$("#Prvnt").val()},
		
		async:false,
		type: 'POST',
		success: function(xml1)
		{
			if($.isNumeric( xml1 ))
			{
				$("#"+DistanceFld).val(parseFloat(xml1).toFixed(2));
				$("#"+DistanceFld).next().next().addClass("active");
			}
			else
			{
				alert("Geo Coordinate Distance - "+xml1);
				return;
			}
		},
		error: function (xml1)
	   {
			alert("Geo Coordinate Distance - Error Occurred, Contact ID");
	   }
	   });
}


function perodickyc(){
	$.ajax({
		url: "/TPLSW/preodicKyc-Push",
		data: {prcsid:$("#PrcsID").val(),Prvnt:$("#Prvnt").val()},
		async:false,
		type: 'POST',
		success: function(xml1)
		{
			if(xml1.split("~")[0] == "Success")
			{
				
			}
			else
			{
				alert("Perodic KYC - "+xml1.split("~")[1]);
				return;
			}
		},
		error: function (xml1)
	   {
			alert("Perodic KYC - Error Occurred, Contact ID");
	   }
	   });
}

function CKYCImage(){
	$.ajax({
		url: "/TPLSW/CKYC-ImgPush",
		data: {prcsid:$("#PrcsID").val(),Prvnt:$("#Prvnt").val()},
		async:false,
		type: 'POST',
		success: function(xml1)
		{
			if(xml1.split("~")[0] == "Success")
			{
				
			}
			else
			{
				alert("CKYC IMAGE - "+xml1.split("~")[1]);
				return;
			}
		},
		error: function (xml1)
	   {
			alert("CKYC IMAGE - Error Occurred, Contact ID");
	   }
	   });
}


function convertKarzaURLtoDMS(CusId,URL){
	var resp = "";
	$.ajax({
		url: "/TPLSW/getAadharDoc",
		data: {DocName:"Aadhar",CusID:CusId,attachname:"AadharDoc.jpeg",attachdescrptn:"AadharDoc",prcsid:$("#PrcsID").val(),formName:"AadharDoc1",version:"",fileName:"AadharDoc.jpeg",filesize:"25",URL:URL,Prvnt:$("#Prvnt").val()},
		async:false,
		type: 'POST',
		success: function(xml1)
		{
			resp = xml1
		},
		error: function (xml1)
	   {
			alert("Converting of Karza URL to DMS Failed, Contact IT.");
	   }
	   });
	   return resp;
}