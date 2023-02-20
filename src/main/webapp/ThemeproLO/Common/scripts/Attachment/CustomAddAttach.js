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
		$(".DateFields").cdatepicker({
        showOn: "button",
        buttonImage: "ThemeproLO/Common/Images/calendar.png",
        buttonImageOnly: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        yearRange: "c-100:c+100"
    });

 

	var Username = GetCurrentUser();
	var OPXML = UI_getdata(Username,"","","","","Sam_sGetUsrBrchDesig");
	if($(OPXML).find("id").text() !="")
	{
	$("#BrchID").val($(OPXML).find("id").text());
	}
	

	
	
	
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

var tablen = $('#fileupload').find('tbody').find('tr').length;

	var addtnlcount= rwchk();
if(count==0 && tablen!=0)
{				 
		//var c =parseFloat(($('#fileupload').find('tbody').find('tr').last().find('select').find('option').val().slice(-1)));
		
    	for (i=0;i<tablen;i++)
		{

		//if()	
    	 //var DRPDNVAL = '';
		 if(addtnlcount==0)
		{
		
		
			//if(("#tabledata").find('tbody tr').length)
			
		
			//$('#fileupload').find('tbody').empty();
			
			
			tablen = parseInt(tablen) + 1;
			var romanval =integer_to_roman(tablen);
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="DocType" name="DocType">'
						DRPDNVAL+='<option value="Document-'+romanval+'">Document-'+romanval+'</option></select>'
		
			var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
			addControl += '<td>'+DRPDNVAL+'</td>';
			addControl += '<td><textarea  value="" style="width:180px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="Descr" name="Descr"maxlength="100" ></textarea></td>'
			addControl += '<td><input placeholder="DD-MM-YYYY" id="ExpDate" name="ExpDate" onkeyup="this.setAttribute("value", this.value);DateSepValid(this)"  class="ISDatefield DateFields inputTXT" style="width:120px";" /></td>'
			addControl += '<td><input type="file" name="datafile" onchange="InstFldUpldHndlr(this)" /><input type="hidden" class="inputTXT" id="DocURL" name="DocURL" value="" ></td></tr> ';
      
			emptyrwdelte('fileupload');
			//$('#fileupload').find('tbody').find('tr').empty;
			//$('#fileupload').append(addControl); 
			
  $('#fileupload').append(addControl); 

			
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
		
		
		addtnlcount = parseInt(addtnlcount)+parseInt(tablen) + 1;
		var romanval =integer_to_roman(addtnlcount);
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="DocType" name="DocType">'
						DRPDNVAL+='<option value="Document-'+romanval+'">Document-'+romanval+'</option></select>'
		
    	  var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
    	 addControl += '<td>'+DRPDNVAL+'</td>';
          addControl += '<td><textarea  value="" style="width:180px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="Descr" name="Descr" maxlength="100" ></textarea></td>'
       addControl += '<td><input placeholder="DD-MM-YYYY" id="ExpDate" name="ExpDate" onkeyup="this.setAttribute("value", this.value);DateSepValid(this)"  class="ISDatefield DateFields inputTXT" style="width:120px";" /></td>'
	   addControl += '<td><input type="file" name="datafile" onchange="InstFldUpldHndlr(this)" /><input type="hidden" class="inputTXT" id="DocURL" name="DocURL" value="" ></td></tr> ';
      
		emptyrwdelte('fileupload');
		//$('#fileupload').find('tbody').find('tr').empty;
	//	$('#fileupload').append(addControl); 
		
  $('#fileupload').append(addControl); 

		
		return;
		
	}
	
	
		
		}
		
		
		
		
		
		
}
	else if(count=="data")
		{
		$('#fileupload').find('tbody').empty();
			
			
			tablen = 1;
			var romanval =integer_to_roman(tablen);
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="DocType" name="DocType">'
						DRPDNVAL+='<option value="Document-'+romanval+'">Document-'+romanval+'</option></select>'
		
			var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
			addControl += '<td>'+DRPDNVAL+'</td>';
			addControl += '<td><textarea  value="" style="width:180px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="Descr" name="Descr" maxlength="100" ></textarea></td>'
			addControl += '<td><input placeholder="DD-MM-YYYY" id="ExpDate" name="ExpDate" onkeyup="this.setAttribute("value", this.value);DateSepValid(this)"  class="ISDatefield DateFields inputTXT" style="width:120px";" /></td>'
			addControl += '<td><input type="file" name="datafile" onchange="InstFldUpldHndlr(this)" /><input type="hidden" class="inputTXT" id="DocURL" name="DocURL" value="" ></td></tr> ';
      
			emptyrwdelte('fileupload');
			//$('#fileupload').find('tbody').find('tr').empty;
			//$('#fileupload').append(addControl); 
			
  $('#fileupload').append(addControl); 

			
			return;
		
		
		
		}
else if(count=="empty")
{
$('#fileupload').find('tbody').empty();
var tablen = 0 + 1;
			var romanval =integer_to_roman(tablen);
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="DocType" name="DocType">'
						DRPDNVAL+='<option value="Document-'+romanval+'">Document-'+romanval+'</option></select>'
		
			var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"></td>'
			addControl += '<td>'+DRPDNVAL+'</td>';
			addControl += '<td><textarea  value="" style="width:180px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="Descr" name="Descr"maxlength="100" ></textarea></td>'
			addControl += '<td><input placeholder="DD-MM-YYYY" id="ExpDate" name="ExpDate" onkeyup="this.setAttribute("value", this.value);DateSepValid(this)"  class="ISDatefield DateFields inputTXT" style="width:120px";" /></td>'
			addControl += '<td><input type="file" name="datafile" onchange="InstFldUpldHndlr(this)" /><input type="hidden" class="inputTXT" id="DocURL" name="DocURL" value="" ></td></tr> ';
      
			//emptyrwdelte('fileupload');
			//$('#fileupload').find('tbody').find('tr').empty;
			//$('#fileupload').append(addControl); 
			
  $('#fileupload').append(addControl); 

			
			
			return;


}



else
{
	$('#fileupload').find('tbody').empty();
	var Addtnlcount = count;
	
	Addtnlcount = parseInt(Addtnlcount) + 1;
		var romanval =integer_to_roman(Addtnlcount);
	
	var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="DocType" name="DocType">'
						DRPDNVAL+='<option value="Document-'+romanval+'">Document-'+romanval+'</option></select>'
		
    	  var addControl ='<tr class=""><td style="height:30px; width:40px;"></td>'
    	 addControl += '<td>'+DRPDNVAL+'</td>';
          addControl += '<td><textarea  value="" style="width:180px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="Descr" name="Descr"maxlength="100" ></textarea></td>'
        addControl += '<td><input placeholder="DD-MM-YYYY" id="ExpDate" name="ExpDate" onkeyup="this.setAttribute("value", this.value);DateSepValid(this)"  class="ISDatefield DateFields inputTXT" style="width:120px";" /></td>'
		addControl += '<td><input type="file" name="datafile" onchange="InstFldUpldHndlr(this)" /><input type="hidden" class="inputTXT" id="DocURL" name="DocURL" value="" ></td></tr> ';
      
		emptyrwdelte('fileupload');
		//$('#fileupload').append(addControl); 
		

	  $('#fileupload').append(addControl); 

		
		return;
}


}


function rowdelete(row) {
    
  
alertify.confirm("Are you Sure want to Delete?", function (e) {
	if (e) 
	{ 	
					
            	$(row).closest('tr').remove();
				//emptygridchk("fileupload");	
				
				
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
		 
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="DocType" name="DocType">'
						DRPDNVAL+='<option value="Document-'+romanval+'">Document-'+romanval+'</option></select>'
		
    	 addControl ='<tr class=""><td style="height:30px; width:40px;"></td>'
    	addControl += '<td>'+DRPDNVAL+'</td>';
          addControl += '<td><textarea  value="" style="width:180px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="Descr" name="Descr"maxlength="100" ></textarea></td>'
       addControl += '<td><input placeholder="DD-MM-YYYY" id="ExpDate" name="ExpDate" onkeyup="this.setAttribute("value", this.value);DateSepValid(this)"  class="ISDatefield DateFields inputTXT" style="width:120px";" /></td>'
	   addControl += '<td><input type="file" name="datafile" onchange="InstFldUpldHndlr(this)" /><input type="hidden" class="inputTXT" id="DocURL" name="DocURL" value="" ></td></tr> ';

		 
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
		 
			var DRPDNVAL = '<select class="inputTXT" style="width:130px";onchange="DrpdwnChngeChk(this);getAttachChk(this);" id="DocType" name="DocType">'
						DRPDNVAL+='<option value="Document-'+romanval+'">Document-'+romanval+'</option></select>'
		
    	   addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
    	 addControl += '<td>'+DRPDNVAL+'</td>';
          addControl += '<td><textarea  value="" style="width:180px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="Descr" name="Descr"maxlength="100" ></textarea></td>'
      addControl += '<td><input placeholder="DD-MM-YYYY" id="ExpDate" name="ExpDate" onkeyup="this.setAttribute("value", this.value);DateSepValid(this)"  class="ISDatefield DateFields inputTXT" style="width:120px";" /></td>'
	  addControl += '<td><input type="file" name="datafile" onchange="InstFldUpldHndlr(this)" /><input type="hidden" id="DocURL" class="inputTXT" name="DocURL" value="" ></td></tr> ';

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
	if(as.indexOf("Document")==0)
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


function viewfile(id) {
	

	var IOP=LoadFrmXML("RS006");
	var url= $(id).closest('tr').find("#DocURL").val();
	var type=$(id).closest('tr').find("#DocType").val();
    RedirectURL = IOP+url;
	WintabsCtrl(RedirectURL,'Attach View('+type+')','','yes');

	
}

