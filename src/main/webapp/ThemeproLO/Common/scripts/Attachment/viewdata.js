$(document).ready(function (){


});


/*function checkselect(id)
{
$('input:checkbox').attr('checked','checked').attr('checked', false);
$(id).attr('checked', true);
}*/
 
function BindAttchViewTable(val)
{
	
//$('#tabledata tbody').empty();

var a= val;
//var b= $("#mainurldata").val();

var spldata= a.split('|');
var len=spldata.length;

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

		var  data2= $(spldata)[i].split('~')[1];
		
		var  data3= $(spldata)[i].split('~')[2];
		
		var  data4= $(spldata)[i].split('~')[3];
		
		var  data5= $(spldata)[i].split('~')[4];

		var spldata1='<tr><td><input style="width:120px"; id="type" disabled class="inputTXT typeval" value="'+data1+'" name="type"/></td><td><textarea disabled style="width:120px;height:50px"  class="inputTXT" id="comments" name="comments"  maxlength="100" >'+data2+'</textarea></td><input id="URLdata" type="hidden" disabled class="inputTXT" value="'+data3+'" name="URLdata"/><input id="flsize" type="hidden" disabled class="inputTXT" value="'+data4+'" name="flsize"/><input id="versnno" type="hidden" disabled class="inputTXT" value="'+data5+'" name="versnno"/>';
		spldata1+= '<td><input type="checkbox" name="select_al" id="select_al"  class="checkAll" /></td></tr>';

			var data="";
 
			data = $("#data").val();
 
			$('input[name=mainurldata]').val(data);
			
			 emptyrwdelte('tabledata');			
			$('#tabledata tbody').append(spldata1); 
			$("#data").val("");


}
}

}



function viewrowdelete() 
{
    
	var IOP=window.location.origin;
		if( $("input:checked" ).length == 0)
	{
	//alertify.alert("Please Choose a File to Delete");
	window.alert("Please Choose a File to Delete");
	}
	else
	{
	alertify.confirm("Are you Sure want to Delete?", function (e) {
	if (e) 
	{
	

	for(i=0;i<$("input:checked" ).length;i++ )
	{
	var URL = $("#tabledata").find($('input:checkbox[name=select_al]:checked')[i]).closest('tr');
	var hidnval=$("#deltgriddata").val();
//alert(hidnval)
//added by Manimala
var prodata = getUrlParam("Prfx");
//end
	var ChkSelect = $("#tabledata").find($('input:checkbox[name=select_al]:checked')[i]);
	var delturl= $(ChkSelect).closest('tr').find("#URLdata").val();
	var deltname= $(ChkSelect).closest('tr').find("#type").val();

	
	hidnval += deltname+ "~" +delturl+ "|";	
	
	            	$("#deltgriddata").val(hidnval);
					var packageid = GetPackageID();
					var colmntype=$(ChkSelect).closest('tr').find("#type").val();
					var descr=$(ChkSelect).closest('tr').find("#comments").val();
					
					var MndtryFlds=DrpDwnMdtryFields(packageid,$("#mainfrmname").val(),"","","",'SAM_SGetAttchMndtryfields');
					for(j=0; j<MndtryFlds.split(",").length;j++)
					{
					if(MndtryFlds.split(",")[j]== $(ChkSelect).closest('tr').find("#type").val())
					{
					
					if(MndtryFlds.split(",")[j].indexOf("Photo-Identity")==0)
					{
					var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"></td>'
					addControl += '<td><select class= "inputTXT"  disabled style="width:130px"; id="type" name="type" ><option value="'+colmntype+'">'+colmntype+'</option></select></td>';
					addControl += '<td><textarea  value="" style="width:130px;height:50px" placeholder="Enter the Name" class="inputTXT" id="comments" name="comments"  maxlength="100" ></textarea></td>'
					addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
					 emptyrwdelte('fileupload');		
					$('#fileupload').append(addControl); 
					
					j=1000;
					}
					else{
						var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"></td>'
					addControl += '<td><select class= "inputTXT"  disabled style="width:130px"; id="type" name="type" ><option value="'+colmntype+'">'+colmntype+'</option></select></td>';
					addControl += '<td><textarea value="" style="width:130px;height:50px" placeholder="Enter Valid Description" class="inputTXT" id="comments" name="comments"  maxlength="100" >'+descr+'</textarea></td>'
					addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
					 emptyrwdelte('fileupload');	
					$('#fileupload').append(addControl);
						j=1000;
					}
					}
					}
	            	
	                //OP="Yes";
	 //$(ChkSelect).closest('tr').remove();
	}
	$("#tabledata").find($('input:checkbox[name=select_al]:checked')).closest('tr').remove();	
	  emptygridchk("tabledata");	
	   // $(this).dialog("close");
	

	}
	else
	{
		return;
	}
	});
	}
	
	//jQuery('input:checkbox:checked').parents("tr").remove();
	 
    
}

/*
function viewrowdelete1() {
    
	var IOP=window.location.origin;
	
	
	if( $("input:checked" ).length == 0||$("input:checked" ).length > 4)
	{
	alertify.alert("Please Choose a File to Delete");
	}
	else
	{
	var URL = $("#tabledata").find($('input:checkbox[name=select_al]:checked')).closest('tr');
	var hidnval=$("#deltgriddata").val();

	var ChkSelect = $("#tabledata").find($('input:checkbox[name=select_al]:checked'));
	var delturl= $(ChkSelect).closest('tr').find("#URLdata").val();
	var deltname= $(ChkSelect).closest('tr').find("#type").val();

	
	hidnval += deltname+ "~" +delturl+ "|";	
	
	 $('<div></div>').appendTo('body')
	    .html('<div><h6>Are you sure?</h6></div>')
	    .dialog({
	        modal: true,
	        title: 'Do you want to delete this Attachment',
	        zIndex: 10000,
	        autoOpen: true,
	        width: '30%',
	        resizable: false,
	        background:'#e6f2ff',
	        buttons: {
	            Yes: function () { 	            	
	            	$("#deltgriddata").val(hidnval);
					var packageid = GetPackageID();
					var colmntype=$(ChkSelect).closest('tr').find("#type").val();
					var descr=$(ChkSelect).closest('tr').find("#comments").val();
					
					var MndtryFlds=DrpDwnMdtryFields(packageid,$("#mainfrmname").val(),"","","",'SAM_SGetAttchMndtryfields');
					for(j=0; j<MndtryFlds.split(",").length;j++)
					{
					if(MndtryFlds.split(",")[j]== $(ChkSelect).closest('tr').find("#type").val())
					{
					
					if(MndtryFlds.split(",")[j].indexOf("Photo-Identity")==0)
					{
					var addControl ='<tr class="closecol"><td ></td>'
					addControl += '<td><select class= "inputTXT"  disabled style="width:150px"; id="type" name="type" ><option value="'+colmntype+'">'+colmntype+'</option></select></td>';
					addControl += '<td><textarea  value="" style="width:150px;height:50px" placeholder="Enter the Name" class="inputTXT" id="comments" name="comments"  maxlength="100" ></textarea></td>'
					addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
					$('#fileupload').append(addControl); 
					
					j=1000;
					}
					else{
						var addControl ='<tr class="closecol"><td ></td>'
					addControl += '<td><select class= "inputTXT"  disabled style="width:150px"; id="type" name="type" ><option value="'+colmntype+'">'+colmntype+'</option></select></td>';
					addControl += '<td><textarea value="" style="width:150px;height:50px" placeholder="Enter Valid Description" class="inputTXT" id="comments" name="comments"  maxlength="100" >'+descr+'</textarea></td>'
					addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
					$('#fileupload').append(addControl);
						j=1000;
					}
					}
					}
	            	$(ChkSelect).closest('tr').remove();	

	                $(this).dialog("close");
	                //OP="Yes";
	           	
	            },
	            No: function () {
	                $(this).dialog("close");
	               // OP="No";
	            }
	        },
		
	        close: function (event, ui) {
	            $(this).remove();
	        }
	    });
 
	}
	
	
	
	//jQuery('input:checkbox:checked').parents("tr").remove();
	 
    
}*/

function viewfile() {
	

	var URL1="";

	
	if( $("input:checked" ).length == 0||$("input:checked" ).length > 4)
	{
	//alertify.alert("Please Choose a File to View");
	window.alert("Please Choose Less than 4 files to view");
	$("input:checked" ).prop( "checked", false );
    }


	for(i=0; i<$("input:checked" ).length;i++)
	{
	var IOP=LoadFrmXML("RS009");
	var ChkSelect = $("#tabledata").find($('input:checkbox[name=select_al]:checked'))[i];
	var url= $(ChkSelect).closest('tr').find("#URLdata").val();
	var type=$(ChkSelect).closest('tr').find("#type").val();
    RedirectURL = IOP+url;
	WintabsCtrl(RedirectURL,'Attach View('+type+')','','yes');

	}	
$("input:checked" ).prop( "checked", false );

}



function viewfldtls() {
	
	var IOP=window.location.origin;
	
	var URL1="";
	if($("input:checked" ).length<=1)
	{
	
	if( $("input:checked" ).length == 0||$("input:checked" ).length > 4)
	{
	//alertify.alert("Please Choose a File to View");
		window.alert("Please Choose a File to View");
	$("input:checked" ).prop( "checked", false );
    }
	
	else{

	var ChkSelect = $("#tabledata").find($('input:checkbox[name=select_al]:checked'));
	var url= $(ChkSelect).closest('tr').find("#URLdata").val();
		var versnno= $(ChkSelect).closest('tr').find("#versnno").val();
	var flsize= $(ChkSelect).closest('tr').find("#flsize").val();
	
	var processid=$("#mainprocid").val();	
		
	var redirect= IOP+"/ThemePro_LSW/DocumentDetails?processid="+processid+ "&url=" + url + "&versnno=" + versnno+ "&flsize=" +flsize;

	//url= url.split("\WebContent")[1];

	//url= IOP+"/ThemeproLO"+url;
	//url = url.replace(/\\/g,"/");
	//URL1=url;
JPopup.create("AttachPopupShow", "","","");
//JPopup.show("ProfilePopup", IOP+MainPGURL, "");

JPopup.show("AttachPopupShow",redirect,"","","","","Get");

//document.getElementById("AttachPopupShow").src=url;
	}	
}
else
	{
		//alertify.alert("Please Choose a Single file")
		window.alert("Please Choose a Single file")
	}
}






function saveattchmt()
{
 
	var prodata = getUrlParam("Prfx");
	
	var hidnval="";
	var Attchurl="";
	var Attchname="";
	var Attchdescrptns="";
	var Attchflsize="";
	var Attchvrsnno="";
	var packageid = GetPackageID();
	var mndtryflds  = DrpDwnMdtryFields(packageid,$("#mainfrmname").val(),"","","",'SAM_SGetAttchMndtryfields');
	
	
	for(p=0;p<$("#fileupload").find('tbody').find('tr').length;p++)
	{
	var tabselval = $($("#fileupload").find('tbody').find('tr')[p]).find('#type option:selected').val();
	
	for(q=0;q<mndtryflds.split(",").length;q++)
	{
	var mndtryaryval=mndtryflds.split(",")[q];
	
	if(tabselval==mndtryaryval)
	{
		//alertify.alert("please upload the Mandatory document");
		window.alert("please upload the Mandatory document");
	return;
	}
	}
	}
	
	
	
	var tablen = $("#tabledata").find('tbody').find('tr').length;
	
	for(i=0;i<tablen;i++)
		{
	
	Attchurl= $($("#tabledata").find('tbody').find('tr')[i]).find('#URLdata').val();
	Attchdescrptns=$($("#tabledata").find('tbody').find('tr')[i]).find('#comments').val();
	Attchname= $($("#tabledata").find('tbody').find('tr')[i]).find('#type').val();
	Attchflsize=$($("#tabledata").find('tbody').find('tr')[i]).find('#flsize').val();
	Attchvrsnno=$($("#tabledata").find('tbody').find('tr')[i]).find('#versnno').val();
	
	
	hidnval += Attchname+ "~"+Attchdescrptns+"~"+Attchurl+"~"+Attchflsize+"~"+Attchvrsnno+"|";
	
		}
		
		
	//added by Manimala
	AttchDmsIns(hidnval,'save',prodata);
	AttchDmsIns($("#deltgriddata").val(),'delete',prodata);
	//end
		
		var DelData = $("#deltgriddata").val() + $(window.parent.document).find("#"+prodata+"delAttch").val();
	
	
	
	//hidnval.split("|")[1].split("~")[2].split("/Attachments")[1];
	/*//DelData.split("/Attachments")[1].split("|")[0];
	var maindelval='';
	
	for(j=0;j<DelData.split("|").length;j++)
	{
	if(DelData!="")
	{
	if(DelData.split("/Attachments")[1].split("|")[j]!=undefined)
	{
	var delflval= DelData.split("/Attachments")[1].split("|")[j];
	
	for(k=0;k<hidnval.split("|").length;k++)
	{
	if(hidnval.split("|")[k]!="")
	{
	var inshdval= hidnval.split("|")[k].split("~")[2].split("/Attachments")[1];
	if(delflval==inshdval)
	{
	//maindelval +=delflval+"|";
	maindelval +=DelData.split("|")[j]+"|";
	}
	//else
	//{
	//maindelval;
	//}
	}
	}
	}
	}
	}*/
	

	//$(window.parent.document).find("#"+prodata+"Attch").val(hidnval);
	//$(window.parent.document).find("#"+prodata+"delAttch").val(DelData);
	$(window.parent.document).find("#SubmitSuccess").val("AttchY");
		
	if($(window.parent.document).find(".ImgIdnt").length!=0)
	{
	PhotoIdnty(hidnval);
	}
	
	
	$("form",parent.document).prepend("<img id=\"GridCnBTN\" type=\"hidden\" style=\"display:none;\" src=\"ThemeproLO/Common/Images/cross.png\">");

	    	  window.parent.document.getElementById("GridCnBTN").click();
}


function filesize(e)

{

	var ext = $(e).val().split('.').pop().toLowerCase();
/*	if($.inArray(ext, ['pdf','jpg','jpeg','png','bmp']) == -1) {
		//alertify.alert('Invalid file Format!! Only Support Pdf & Jpeg Format');
		window.alert('Invalid file Format!! Only Support Pdf & Jpeg Format');
	    $(e).val("");
	}*/
	
	var maxvalue=4096;
	var filevalue= parseFloat(e.files[0].size/1024).toFixed(2);
	if(filevalue>=maxvalue)
		{
		//alertify.alert("Upload file limit 4-MB");
			window.alert("Upload file limit 4-MB");
		 $(e).val("");
		}



}



function DrpDwnMdtryFields(packageid,formname,param3,param4,param5,spname)

{
var mndtryfields='';

var op = UI_getdata(packageid,formname,"","","",spname);


for(var i=0;i<$(op).find("list").length;i++)
{
 mndtryfields += $($(op).find("list")[i]).text()+',';
}

return mndtryfields;


}



function DrpdwnChngeChk(e)

{

var selectval = $(e).val();

var selectrow=$(e).closest('tr').index();

for(i=0;i<$("#tabledata").find('tbody tr').length;i++)
{

var as =$($("#tabledata").find('tbody tr').find('#type')[i]).val();

if(as!=undefined)
{	
if(as.indexOf("Photo-Identity")==0)
{
$(e).closest('tr').find("textarea").attr('placeholder','Enter the Name')

if($($("#tabledata").find('tbody tr').find('#type')[i]).val()==selectval)
{
	//alertify.alert("File has been already uploaded");
	window.alert("File has been already uploaded");
$(e).val("");
$(e).closest('tr').find("textarea").attr('placeholder','Enter Valid Description');
return;
}

}
}
}

for(j=0;j<$("#fileupload").find('tbody tr').length;j++)
{

var as =$($("#fileupload").find('tbody tr').find('#type')[j]).val();

if(j==selectrow)
{
j++;
}


if(as.indexOf("Photo-Identity")==0)
{
$(e).closest('tr').find("textarea").attr('placeholder','Enter the Name');
if($($("#fileupload").find('tbody tr').find('#type')[j]).val()==selectval)
{
	//alertify.alert("File has been already uploaded");
	window.alert("File has been already uploaded");
$(e).val("");
$(e).closest('tr').find("textarea").attr('placeholder','Enter Valid Description');
j= j+1000;
}

}

else
{
$(e).closest('tr').find("textarea").attr('placeholder','Enter Valid Description');

}
}




}

function getAttachChk(evnt)
{


	if(evnt != undefined)
		{
var op= UI_getdata(evnt.value,$("#mainfrmname").val(),'','','','Sam_SgetAttchDescrDetls')

if($(op).find('Descr').text()=='null' || $(op).find('Descr').text()=='')
{
$(evnt).closest('tr').find('#comments').attr("disabled", true);	
}
else{
$(evnt).closest('tr').find('#comments').val($(op).find('Descr').text())
$(evnt).closest('tr').find('#comments').attr("disabled", "disabled");	
	
}

}


	/*var Maincont = $(window.parent.document).contents().find('td :contains("Proof of DOB/Age")').closest('td').next().find('select').val();
	var val = $('#fileupload').contents().find('td :contains("Proof of DOB/Age")').closest('td').next().find('textarea').val(Maincont);
	
	
	 var IframeCount = $(window.parent.document).find('article').find('iframe').length;
	    for (var i = 0; i < IframeCount; i++) 
		{

                var $input = $(window.parent.document).find('article').find('iframe')[i];
				   var IFrameID = $input.id;
                $('#' + IFrameID).contents().find('td :contains("Proof of Address")').closest('td').next().find('select').val();
				
				
				
		}*/
		
		var id="";
		var Value = "";
		var tabselval = "";
		var tdvalue="";
	var rowcount = $("#fileupload").find('tbody').find('tr').length;
	var rowcountdata = $("#tabledata").find('tbody').find('tr').length;
		
	
			if(evnt == undefined)
		{	
		if (rowcountdata == 0) 
		{
	for(p=0;p<rowcount;p++)
	{
		
	tabselval=$($("#fileupload").find('tbody').find('tr')[p]).find('#type option:selected').val();
		Value = $(window.parent.document).contents().find('td :contains("'+tabselval+'")').closest('td').next().find('select').val();
		tdvalue=$(window.parent.document).contents().find('td :contains("'+tabselval+'")').text();
		if (tdvalue==tabselval)
		{
			$($("#fileupload").find('tbody').find('tr')[p]).find('#comments').val(Value);
			$($("#fileupload").find('tbody').find('tr')[p]).find('#comments').attr("disabled", "disabled");
				
		}
		else{
		  var IframeCount = $(window.parent.document).find('article').find('iframe').length;
		if (IframeCount > 0) {
            for (i = 0; i < IframeCount; i++) {

                var $input = $(window.parent.document).find('article').find('iframe')[i];
                var IFrameID = $input.id;

				
            Value=  $(window.parent.document).find('#' + IFrameID).contents().find('td :contains("'+tabselval+'")').closest('td').next().find('select').val();
		tdvalue=$(window.parent.document).find('#' + IFrameID).contents().find('td :contains("'+tabselval+'")').text();			
			if (tdvalue==tabselval)
		{
			$($("#fileupload").find('tbody').find('tr')[p]).find('#comments').val(Value);
			$($("#fileupload").find('tbody').find('tr')[p]).find('#comments').attr("disabled", "disabled");
			i=1000;
		}
            }
		}
	}
	}
		}
		else
		{
			
			for(p=0;p<rowcountdata;p++)
	{
		
	tabselval=$($("#tabledata").find('tbody').find('tr')[p]).find('#type').val();
		Value = $(window.parent.document).contents().find('td :contains("'+tabselval+'")').closest('td').next().find('select').val();
		tdvalue=$(window.parent.document).contents().find('td :contains("'+tabselval+'")').text();
		if (tdvalue==tabselval)
		{
			$($("#tabledata").find('tbody').find('tr')[p]).find('#comments').val(Value);
			$($("#tabledata").find('tbody').find('tr')[p]).find('#comments').attr("disabled", "disabled");
				
		}
		else{
		  var IframeCount = $(window.parent.document).find('article').find('iframe').length;
		if (IframeCount > 0) {
            for (i = 0; i < IframeCount; i++) {

                var $input = $(window.parent.document).find('article').find('iframe')[i];
                var IFrameID = $input.id;

				
            Value=  $(window.parent.document).find('#' + IFrameID).contents().find('td :contains("'+tabselval+'")').closest('td').next().find('select').val();
		tdvalue=$(window.parent.document).find('#' + IFrameID).contents().find('td :contains("'+tabselval+'")').text();			
			if (tdvalue==tabselval)
		{
			$($("#tabledata").find('tbody').find('tr')[p]).find('#comments').val(Value);
			$($("#tabledata").find('tbody').find('tr')[p]).find('#comments').attr("disabled", "disabled");
			i=1000;
		}
            }
		}
	}
	}
			
		}
		}
		else{
			
			tabselval=$(evnt).val();
			Value = $(window.parent.document).contents().find('td :contains("'+tabselval+'")').closest('td').next().find('select').val();
		tdvalue=$(window.parent.document).contents().find('td :contains("'+tabselval+'")').text();
		if (tdvalue==tabselval)
		{
			$(evnt).closest('tr').find('#comments').val(Value);
			$(evnt).closest('tr').find('#comments').attr("disabled", "disabled");
				
		}
		else{
		  var IframeCount = $(window.parent.document).find('article').find('iframe').length;
		if (IframeCount > 0) {
            for (i = 0; i < IframeCount; i++) {

                var $input = $(window.parent.document).find('article').find('iframe')[i];
                var IFrameID = $input.id;

				
            Value=  $(window.parent.document).find('#' + IFrameID).contents().find('td :contains("'+tabselval+'")').closest('td').next().find('select').val();
		tdvalue=$(window.parent.document).find('#' + IFrameID).contents().find('td :contains("'+tabselval+'")').text();			
			if (tdvalue==tabselval)
		{
			$(evnt).closest('tr').find('#comments').val(Value);
			$(evnt).closest('tr').find('#comments').attr("disabled", "disabled");
			i=1000;
		}
            }
		}
	}
		}
}




function downloadfile()
{

if( $("input:checked" ).length == 0||$("input:checked" ).length > 4)
	{
	//alertify.alert("Please Choose a File to download");
	window.alert("Please Choose a File to download");
	$("input:checked" ).prop( "checked", false );
    }
	
else{
	
for(i=0;i<$("input:checked" ).length;i++ )
	{
	var IOP=LoadFrmXML("RS009");
	var deltname= $(ChkSelect).closest('tr').find("#type").val();
	var ChkSelect = $("#tabledata").find($('input:checkbox[name=select_al]:checked')[i]);
	var flname= $(ChkSelect).closest('tr').find("#type").val();
	var url= $(ChkSelect).closest('tr').find("#URLdata").val();
	 var link=document.createElement('a');
	document.body.appendChild(link);
	link.download=flname;
	link.href=IOP+url;
	link.click();
}
}

}