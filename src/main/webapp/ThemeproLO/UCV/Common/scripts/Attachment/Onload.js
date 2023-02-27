$(document).ready(function (e){
	
	

	
	var prodata = getUrlParam("Prfx");
	
	//$("#mainprocid").val(getUrlParam("processId"));
	$("#mainprocid").val($(window.parent.document).find("#"+prodata+"PrcsID").val());
	$("#mainfrmname").val($(window.parent.document).find("form").attr('id'));
	$("#hdnfieldid").val(prodata+"Attch");	
	$("#mainhdnfieldval").val($(window.parent.document).find("#"+prodata+"Attch").val());
	
	//added by Manimala.......
	
	AttachDMSFetch(prodata);
	//end
	
	
	
	//if($("#mainhdnfieldval").val()!="")
	//{
		//BindAttchViewTable($("#mainhdnfieldval").val());
		
	//}
	if($(window.parent.parent.document).find('.active').attr('name') == "IA")
	{
		
		$("#Save").hide();
		$("#Delete").hide();
		$("#upload").hide();
		$("#fileupload").find("input,button,select").attr("disabled", "disabled");
		$("#fileupload").find("img").hide();
		//var a="";
	}
	else if($(window.parent.document).find("form").find("#SubmitSuccess").val()=="Hist")
	{
		
		$("#Save").hide();
		$("#Delete").hide();
		$("#upload").hide();
		$("#fileupload").find("input,button,select").attr("disabled", "disabled");
		$("#fileupload").find("img").hide();
		//var a="";
	}
	
	else
	{
	
		var packageid = GetPackageID();
	
	FielddatafrmDB(packageid,$("#mainfrmname").val(),"","list","type",'SAM_SGetAttchPagedropVal');
	FielddatafrmDB(packageid,$("#mainfrmname").val(),"","list","typeHdn",'SAM_SGetAttchPagedropVal');
	
	

	  var mndtryflds = DrpDwnMdtryFields(packageid,$("#mainfrmname").val(),"","","",'SAM_SGetAttchMndtryfields');
	if(mndtryflds!="")
	{	
	var flg="";
	$('#fileupload').find('tbody tr').remove();
	 
	 
	 
	 
	for(j=0; j<mndtryflds.split(",").length;j++)
	{
		
		flg="";
	 
	 if($("#tabledata").find('tbody tr').find('#type').length!=0){
	 
		for(var k=0;k<$("#tabledata").find('tbody tr').find('#type').length;k++)
		{
		if(mndtryflds.split(",")[j]==$($("#tabledata").find('tbody tr').find('#type')[k]).val())
		{
		
		flg="Y";
		k=k+1000;
		}
		}
	if(flg=="")
		{
		if(mndtryflds.split(",")[j]!="")
		{
		var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"></td>'
    	 addControl += '<td><select class= "inputTXT" onchange="getAttachChk(this)"  disabled style="width:130px"; id="type" name="type" ><option value="'+mndtryflds.split(",")[j]+'">'+mndtryflds.split(",")[j]+'</option></select></td>';
          addControl += '<td ><textarea  value="" style="width:130px;height:50px"   placeholder="Enter Valid Description"  class="inputTXT" id="comments" name="comments"  maxlength="100" ></textarea></td>'
        addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
         emptyrwdelte('fileupload');
		$('#fileupload').append(addControl); 
		}
		}		
		}
		
		else
		{
	if(mndtryflds.split(",")[j]!="")
		{
		
		if(mndtryflds.split(",")[j].indexOf("Photo-Identity")==0)
		{
		var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"></td>'
    	 addControl += '<td><select class= "inputTXT" onchange="getAttachChk(this)"  disabled style="width:130px"; id="type" name="type" ><option value="'+mndtryflds.split(",")[j]+'">'+mndtryflds.split(",")[j]+'</option></select></td>';
          addControl += '<td><textarea  value="" style="width:130px;height:50px"  placeholder="Enter the Name"   class="inputTXT" id="comments" name="comments"  maxlength="100" ></textarea></td>'
        addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
         emptyrwdelte('fileupload');
		$('#fileupload').append(addControl); 
		}
		
		else
		{
		var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"></td>'
    	 addControl += '<td><select class= "inputTXT" onchange="getAttachChk(this)"  disabled style="width:130px"; id="type" name="type" ><option value="'+mndtryflds.split(",")[j]+'">'+mndtryflds.split(",")[j]+'</option></select></td>';
          addControl += '<td><textarea  value="" style="width:130px;height:50px"  placeholder="Enter Valid Description"   class="inputTXT" id="comments" name="comments"  maxlength="100" ></textarea></td>'
        addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
         emptyrwdelte('fileupload');
		$('#fileupload').append(addControl); 
		
		}
		}
		}
		
	}
}
	
			if($('#fileupload').find('tbody tr').html()==undefined)
				{
					var selectDRP = document.getElementById("typeHdn").outerHTML;
 
					selectDRP = (selectDRP.replace('display:none;','').replace('display: none;','')).replace(/typeHdn/g,'type');
    	
					var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
					addControl += '<td>'+selectDRP+'</td>';
					addControl += '<td><textarea  value="" style="width:130px;height:50px"  placeholder="Enter Valid Description"   class="inputTXT" id="comments" name="comments"  maxlength="100" ></textarea></td>'
					addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
					 emptyrwdelte('fileupload');
					$('#fileupload').append(addControl); 
				}

	
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
	 
	 
	 var PrcsID=$("#mainprocid").val();
	 var FormName=$("#mainfrmname").val();
	 
	var CountAttch = 0;
	 
	 	if ($('select[name=type]').length <= 3)
			{
				CountAttch = $('select[name=type]').length;
			}
			else
			{
				CountAttch = 3;
			}
	 
	 
	// for(var i=0;i<=$('select[name=type]').length;i++)
		 for(var i=0;i<CountAttch;i++) // For 3 files upload
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
	 
	 CountAttch = 0;
	 
	 	 
	
	  
		if ($('input[type="file"]').length <= 3)
			{
				CountAttch = $('input[type="file"]').length;
			}
			else
			{
				CountAttch = 3;
			}
			
// $('input[type="file"]').each(function(){
	 for(var c=0;c<CountAttch;c++)
	 {
      file_data = $('input[type="file"]')[c].files; // for multiple files


			
	     for(var i = 0;i<file_data.length;i++){
			 //for(var i = 0;i<3;i++){ // For 3 files upload
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
	    //c++;

	 }//);
	 
	 CountAttch = 0;
	 
	 if ($('input[type="file"]').length <= 3)
			{
				CountAttch = $('input[type="file"]').length;
			}
			else
			{
				CountAttch = 3;
			}
	 
	 
	 for (i=0;i<CountAttch;i++)
	 {
		 
		 $($('#fileupload').find('.closecol')[0]).remove()
		 
	 }
	 
	 	 
	 /*   var file_data = $('input[type="file"]'); // for multiple files
	    for(var i = 0;i<file_data.length;i++){
	       // names +=   $('input[type="file"]')[i].files[0].name+',';
	    	fd.append("file_"+i, file_data[i].files);
	        names += $($('input[type="file"]')[i]).closest('tr').find("#type option:selected").text()+',';
	    }
	   
	    */
	    
	    ajaxindicatorstart("Uploading.. Please wait");
	    $.ajax({
	        url:"/ThemePro_LSW/FileUploadHandler?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain1="+domain1+"&usrpwd1="+usrpwd1,
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
	        		}
			else{
	        	$("#hdnfieldval").val(data.replace(/\\/g,"/"));
	        	BindAttchViewTable($("#hdnfieldval").val());
				
				//added by Manimala
				AttchDmsIns(data,'upload',prodata);
				//end
	        	//alertify.alert("Upload Successful");
					//alertify.alert(LoadFrmXML("V0118"));
					 ajaxindicatorstop();
					alertify.alert(LoadFrmXML("V0118"));
				}	
					 ajaxindicatorstop(); 
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
		//	$("#fileupload").find('tbody tr').remove();
			emptygridchk("fileupload");	

		
	});
	getAttachChk();
emptygridchk("fileupload");	
emptygridchk("tabledata");	
	
	
	// For rest of Mandatory Fields after upload -- Start

	
	// For rest of Mandatory Fields after upload -- End
	
	
	
});

$(function(){
    $('#addupload').click(function(){
    	
    	var selectDRP = document.getElementById("typeHdn").outerHTML;
    	
    	selectDRP = (selectDRP.replace('display:none;','').replace('display: none;','')).replace(/typeHdn/g,'type');
    	
    	  var addControl ='<tr class="closecol"><td style="height:30px; width:40px;"><img src="ThemeproLO/Common/Images/delete-16.png" onclick="rowdelete(this)" alt="Smiley face"></td>'
    	 addControl += '<td>'+selectDRP+'</td>';
          addControl += '<td><textarea  value="" style="width:130px;height:50px" placeholder="Enter Valid Description"  class="inputTXT" id="comments" name="comments"  maxlength="100" ></textarea></td>'
        addControl += '<td><input type="file" name="datafile" onchange="filesize(this)" /></td></tr> ';
     
	  emptyrwdelte('fileupload');
	 


	if ( $('#fileupload').find('.closecol').length < 3)
	{
	  $('#fileupload').append(addControl); 
	}
	else{
		window.error(LoadFrmXML("V0172"));
	}

	  });
});

function rowdelete(row) {
    
  
alertify.confirm("Are you Sure want to Delete?", function (e) {
	if (e) 
	{ 	
            	$(row).closest('tr').remove();
				emptygridchk("fileupload");	
                //$(this).dialog("close");
                //OP="Yes";
     }
  
	else
	{
		return;
	}
    });

}
    
    
    function closepage(){
	
  alertify.confirm("Are you Sure to close?", function (e) {
	if (e) 
	{ 	
//added by Manimala

var prodata = getUrlParam("Prfx");
AttchDmsIns('','Close',prodata); 

        //end                       	 
            	$("form",parent.document).prepend("<img id=\"GridCnBTN\" type=\"hidden\" style=\"display:none;\" src=\"ThemeproLO/Common/Images/cross.png\">");

	    	  window.parent.document.getElementById("GridCnBTN").click();     
 }
	else
	{
		return;
	}
    });
    
    }
    
 
        $(function () {
            
            $('.list-inline li > a').click(function () {
                var activeForm = $(this).attr('href') + ' > form';
                //console.log(activeForm);                
                $(activeForm).find("table :not(:first)").remove();             
                $(activeForm).addClass('magictime swap');
                //set timer to 1 seconds, after that, unload the magic animation
                setTimeout(function () {
                    $(activeForm).removeClass('magictime swap');
                }, 1000);                              
            });
        });
                   
       