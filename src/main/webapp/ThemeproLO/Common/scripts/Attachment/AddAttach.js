$(document).ready(function () {
	
	
	 var IOP=window.location.origin+'/jw';
	 
	 var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
		
			window.location= Rdpage;	
			return;
			}
			
/*					 var Resultval=FormRights();
	  if(Resultval!='Yes')
	 {
	 return;
	 }
	*/

 

	var Username = GetCurrentUser();
	var OPXML = UI_getdata(Username,"","","","","Sam_sGetUsrBrchDesig");
	if($(OPXML).find("id").text() !="")
	{
	$("#BrchID").val($(OPXML).find("id").text());
	}
	

	$(document).on("click", "#upload", function() {
		
		
		
	 var fd = new FormData();
	 var c="0";
	 var names = "";
	 var descrptns = "";
	 var types = ""; 
	 var flsize="";
	 var vrsnno="";
	 var domain1= LoadFrmXML("RS007");
	 var usrpwd1= LoadFrmXML("RS008");
	 
	// var domain2= LoadFrmXML("RS004");
	// var usrpwd2= LoadFrmXML("RS005");
	 
	 
	 var PrcsID=$("#PropPrcsID").val();
	 var FormName=$("#FormId").val();
	 
	 var Mndtry=ChkMandatoryFields("Mndtry");
	 if(Mndtry=="No")
	 {
	 return;
	 }
	 
	 for(var i=0;i<=$('select[name=type]').length;i++)
	 {
	 if($('#fileupload tbody tr').length!=0&&$('#fileupload tbody tr').hasClass('odd')==false)
	 {
	 if($($('select[name=type]')[i]).val()==""||$($('select[name=type]')[i]).val()=="--Select--")
	 {
	 //alertify.alert("Please delete the empty row");
	 	//alertify.alert(LoadFrmXML("V0116"));
		window.alert(LoadFrmXML("V0116"));
	 return;
	 }
	 if($($('input[type="file"]')[i]).val()=="")
	 {
		// alertify.alert("Please choose the file to upload");
		 	//alertify.alert(LoadFrmXML("V0117"));
			window.alert(LoadFrmXML("V0117"));
	 return;
	 }
	 }
	 else
	 {
	 //alertify.alert(LoadFrmXML("V0151"));
	 window.alert(LoadFrmXML("V0151"));
	 return;
	 }
	}
	 
	 
	 
	 	 
	 $('input[type="file"]').each(function(){
	        file_data = $('input[type="file"]')[c].files; // for multiple files

	     for(var i = 0;i<file_data.length;i++){
			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	         fd.append("file_"+c, file_data[i]);
	         names += $($('input[type="file"]')[c]).closest('tr').find("#type option:selected").text()+',';
			 flsize += parseFloat($('input[type="file"]')[c].files[0].size/1024).toFixed(2)+',';
			 vrsnno += $(op).find("VR").text()+',';
			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
			 {
				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
			 }
	         descrptns += $($('input[type="file"]')[c]).closest('tr').find("#comments").val()+',';
	     }
	    c++;

	 });
	 
	 /*   var file_data = $('input[type="file"]'); // for multiple files
	    for(var i = 0;i<file_data.length;i++){
	       // names +=   $('input[type="file"]')[i].files[0].name+',';
	    	fd.append("file_"+i, file_data[i].files);
	        names += $($('input[type="file"]')[i]).closest('tr').find("#type option:selected").text()+',';
	    }
	   
	    */
	
	     ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	        url:"ThemeproLO/UploadServlet?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain1="+domain1+"&usrpwd1="+usrpwd1,
	        data: fd,
			async:false,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
			
	        	
	        	if(data=="Fail")
	        		{
						ajaxindicatorstop();
	        		window.error(LoadFrmXML("V0119"));
	        		}
	        	
	        	else
	        		{
						
	        	$("#hdnfieldval").val(data.replace(/\\/g,"/"));
	        	BindAttchViewTable($("#hdnfieldval").val());
				
				//added by Manimala
				AttchAddtnlDmsIns(data,'upload');
				//end
	        	//alertify.alert("Upload Successful");
					//alertify.alert(LoadFrmXML("V0118"));
					ajaxindicatorstop();
					window.success(LoadFrmXML("V0118"));
	        		}
	        },
	        failure:function(data)
	        {
	        	//alertify.alert("Upload Failed");
					//alertify.alert(LoadFrmXML("V0119"));
					ajaxindicatorstop();
					window.error(LoadFrmXML("V0119"));
	        	
	        }
	    });
		
		ajaxindicatorstop();
			$("#fileupload").find('tbody tr').remove();
			emptygridchk("fileupload");	

		
	});
	getAttachChk();
emptygridchk("fileupload");	
emptygridchk("tabledata");	
	
	
});

  
function AttachDMSFetch(PrcsID,formid){
	//DCInstnc("LdSbmt");

	$("#tabledata").find('tbody tr').remove();

var formid=$("#FormId").val();
var PrcsId = $("#PropPrcsID").val();
//var activityid = $(window.parent.document).find('form').find("#"+prodata+"ActivityID").val();
var xml = UI_getdata(formid,PrcsId,"","","","Sam_sAattchOnloadDms");
//alert($(xml).text());
BindAttchViewOnload($(xml).text());
var addtnlcount= rwchk();
AddtnlTr(addtnlcount)
//AddtnlTr()
}


function AddtnlTr(count)

{




if(count==0)
{	
	var tablen = $('#fileupload').find('tbody').find('tr').length;
	var addtnlcount=0// rwchk();
	
			 
		//var c =parseFloat(($('#fileupload').find('tbody').find('tr').last().find('select').find('option').val().slice(-1)));
		
    	for (i=0;i<tablen;i++)
		{
		//if()	
    	 //var DRPDNVAL = '';
		 if(addtnlcount==0)
		{
			//if(("#tabledata").find('tbody tr').length)
			
		
			//$('#fileupload').find('tbody').empty();
			
			
			tablen = tablen + 1;
			var romanval =integer_to_roman(tablen);
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="type" name="type">'
						DRPDNVAL+='<option value="Additional-'+romanval+'">Additional-'+romanval+'</option></select>'
		
			var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
			addControl += '<td>'+DRPDNVAL+'</td>';
			addControl += '<td><textarea  value="" style="width:130px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="comments" name="comments"maxlength="100" ></textarea></td>'
			addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
      
			emptyrwdelte('fileupload');
			//$('#fileupload').find('tbody').find('tr').empty;
			//$('#fileupload').append(addControl); 
			
			if ( $('#fileupload').find('.closecol').length < 3)
	{
	  $('#fileupload').append(addControl); 
	}
	else{
		window.error(LoadFrmXML("V0172"));
	}
			
			return;
		}
			
	else{
	
		if($('#fileupload').find('tbody').find('tr').find('.dataTables_empty').text()!="")
		{
			tablen =0;
		}
		if(addtnlcount=="empty")
		{
		addtnlcount =0;
		}
		
		if(addtnlcount=="data")
		{
		addtnlcount =0;
		}
		
		
		addtnlcount = addtnlcount+tablen + 1;
		var romanval =integer_to_roman(addtnlcount);
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="type" name="type">'
						DRPDNVAL+='<option value="Additional-'+romanval+'">Additional-'+romanval+'</option></select>'
		
    	  var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
    	 addControl += '<td>'+DRPDNVAL+'</td>';
          addControl += '<td><textarea  value="" style="width:130px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="comments" name="comments"maxlength="100" ></textarea></td>'
        addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
      
		emptyrwdelte('fileupload');
		//$('#fileupload').find('tbody').find('tr').empty;
	//	$('#fileupload').append(addControl); 
		
		if ( $('#fileupload').find('.closecol').length < 3)
	{
	  $('#fileupload').append(addControl); 
	}
	else{
		window.error(LoadFrmXML("V0172"));
	}
		
		return;
		
	}
	
	
		
		}
}
	else if(count=="data")
		{
		$('#fileupload').find('tbody').empty();
			
			
			tablen = 1;
			var romanval =integer_to_roman(tablen);
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="type" name="type">'
						DRPDNVAL+='<option value="Additional-'+romanval+'">Additional-'+romanval+'</option></select>'
		
			var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
			addControl += '<td>'+DRPDNVAL+'</td>';
			addControl += '<td><textarea  value="" style="width:130px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="comments" name="comments"maxlength="100" ></textarea></td>'
			addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
      
			emptyrwdelte('fileupload');
			//$('#fileupload').find('tbody').find('tr').empty;
			//$('#fileupload').append(addControl); 
			
			if ( $('#fileupload').find('.closecol').length < 3)
	{
	  $('#fileupload').append(addControl); 
	}
	else{
		window.error(LoadFrmXML("V0172"));
	}
			
			return;
		
		
		
		}
else if(count=="empty")
{
$('#fileupload').find('tbody').empty();
var tablen = 0 + 1;
			var romanval =integer_to_roman(tablen);
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="type" name="type">'
						DRPDNVAL+='<option value="Additional-'+romanval+'">Additional-'+romanval+'</option></select>'
		
			var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"></td>'
			addControl += '<td>'+DRPDNVAL+'</td>';
			addControl += '<td><textarea  value="" style="width:130px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="comments" name="comments"maxlength="100" ></textarea></td>'
			addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
      
			//emptyrwdelte('fileupload');
			//$('#fileupload').find('tbody').find('tr').empty;
			//$('#fileupload').append(addControl); 
			
			if ( $('#fileupload').find('.closecol').length < 3)
	{
	  $('#fileupload').append(addControl); 
	}
	else{
		window.error(LoadFrmXML("V0172"));
	}
			
			
			return;


}



else
{
	$('#fileupload').find('tbody').empty();
	var Addtnlcount = count;
	
	Addtnlcount = Addtnlcount + 1;
		var romanval =integer_to_roman(Addtnlcount);
	
	var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="type" name="type">'
						DRPDNVAL+='<option value="Additional-'+romanval+'">Additional-'+romanval+'</option></select>'
		
    	  var addControl ='<tr class=""><td style="height:30px; width:40px;"></td>'
    	 addControl += '<td>'+DRPDNVAL+'</td>';
          addControl += '<td><textarea  value="" style="width:130px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="comments" name="comments"maxlength="100" ></textarea></td>'
        addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
      
		emptyrwdelte('fileupload');
		//$('#fileupload').append(addControl); 
		
		if ( $('#fileupload').find('.closecol').length < 3)
	{
	  $('#fileupload').append(addControl); 
	}
	else{
		window.error(LoadFrmXML("V0172"));
	}
		
		return;
}


}


function rowdelete(row) {
    
  
alertify.confirm("Are you Sure want to Delete?", function (e) {
	if (e) 
	{ 	
            	$(row).closest('tr').remove();
				emptygridchk("fileupload");	
				Rechktbdy();
				
                //$(this).dialog("close");
                //OP="Yes";
     }
  
	else
	{
		return;
	}
    });

}


function Rechktbdy()
{
	
	var tablen = $('#fileupload').find('tbody').find('tr').length;
	$('#fileupload').find('tbody').empty();
		 
		//var c =parseFloat(($('#fileupload').find('tbody').find('tr').last().find('select').find('option').val().slice(-1)));
		
    	for (i=1;i<=tablen;i++)
		{
		//if()	
    	 //var DRPDNVAL = '';
	 var addControl=''
	 if(tablen==1)
	 {
				var addtnlen=rwchk();
		
		if(addtnlen=="empty")
		{
		addtnlen =0;
		}
		
		if(addtnlen=="data")
		{
		addtnlen =0;
		}
				i=i+addtnlen;
		 var romanval =integer_to_roman(i);
		 
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="type" name="type">'
						DRPDNVAL+='<option value="Additional-'+romanval+'">Additional-'+romanval+'</option></select>'
		
    	 addControl ='<tr class=""><td style="height:30px; width:40px;"></td>'
    	addControl += '<td>'+DRPDNVAL+'</td>';
          addControl += '<td><textarea  value="" style="width:130px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="comments" name="comments"maxlength="100" ></textarea></td>'
        addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';

		 
	 }
		 else
		 {
		 var addtnlen=rwchk();
		
		if(addtnlen=="empty")
		{
		addtnlen =0;
		}
		
		if(addtnlen=="data")
		{
		addtnlen =0;
		}
		var cntadd = i;
				cntadd=cntadd+addtnlen;
		var romanval =integer_to_roman(cntadd);
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="type" name="type">'
						DRPDNVAL+='<option value="Additional-'+romanval+'">Additional-'+romanval+'</option></select>'
		
    	   addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
    	 addControl += '<td>'+DRPDNVAL+'</td>';
          addControl += '<td><textarea  value="" style="width:130px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="comments" name="comments"maxlength="100" ></textarea></td>'
        addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';

		 }
		 emptyrwdelte('fileupload');
		$('#fileupload tbody').append(addControl); 
		
		}
}


function DCInstnc(flgval)
{
var formid=$("#FormId").val();
var PrcsId = $("#PropPrcsID").val();
//var activityid = getUrlParam("activityId");

var xml = UI_getdata(PrcsId,'',formid,flgval,"","Sam_sAddtnlDCInstnc");

}


function rwchk()
{
	var count=0;
	var Addcount=0;
	var chkint = [];
	
	if($('#tabledata').find('tbody').text()=="")
		{
			count ="empty";
		}
		else if($('#tabledata').find('tbody').find('tr').find('.dataTables_empty').text()!="")
		{
			count ="empty";
		}
	
else{
	
for(j=0;j<$("#tabledata").find('tbody tr').length;j++)
{

count="data";

var as =$($("#tabledata").find('tbody tr').find('#type')[j]).val();
	if(as.indexOf("Additional")==0)
{
	 
		var romenval = romantointeger(as.split('-')[1]);
		chkint.push(romenval);
}
}
}

if(chkint!=0)
{
var maxValueInArray = Math.max.apply(Math, chkint);
return maxValueInArray;
}
else
{
return count;
}

}
