function DocFldUpldHndlr(id,docu)
 {

 var Val=$(id).val()


 if($(id).closest('td').find('input[type="file"]').val()!="")
 {
     var domain= LoadFrmXML("RS001");
     var usrpwd= LoadFrmXML("RS002");
    var PrcsID=$('#PrcsID').val()
     var FormName= 'DOCU_Upload';
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
	 
        //   var Filename  = names.replace(',','')
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
 				//AttchDmsIns(data,'upload',prodata);
 				//$(id).val('View');
 				$(id).closest('td').find('input[type="hidden"]').val(data.split('~')[2])
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
 				$('.'+docu).show();
 				$(".DDV").show();
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


 
 function GridControlDetailDOCUPLOAD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
 {
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

         'aaData': dtData,
         "aoColumns": dtcolumn,  
         
         "bAutoWidth": false,

         "autoWidth": false,

         'bPaginate': false,

        "aaSorting": [],

        // "pageLength": 5,

         "bDeferRender": true,

         'bInfo': true,

         'bFilter': true,

         "bDestroy": true,

         "bJQueryUI": true,

        //"scrollY": true,

        // "scrollX": "200px",

         "sPaginationType": "full_numbers",

         
         
"aoColumnDefs": [ 
       		   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
           	  {
       			 targets: 0, "render": function ( data, type, row, meta ) {
       				var rowno = meta.row; 
       				
           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DeleteGridrow BTNHIDE" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
        					HTML = HTML + '<input type="text" value="'+data+'" id="ACTION'+rowno+'" hidden="hidden" name="ACTION'+rowno+'" class="form-control"/>';
						
						HTML = HTML + '</span>';  
        				var htmldata = $(HTML);				
        				return htmldata[0].outerHTML;
       					
       				  
       			 }
           	  },
			   { targets: 1, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="DULD_TYPE'+rowno+'" disabled  name="DULD_TYPE'+rowno+'" maxlength="10"   class=" DSVLBL   form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=DULD_TYPE'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=DULD_TYPE'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
			 { targets: 2, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
		/* 	var HTML =	'<span><input type="text"  id="DULD_NAME'+rowno+'" disabled  name="DULD_NAME'+rowno+'" maxlength=""   class="DSVLBL    form-control   form-control ">';			 
			HTML = HTML + '</span>'; */ 
			
			var HTML =	'<span class=""><input type="text" style="display:none" value="'+data+'" id="DULD_NAME'+rowno+'"  name="DULD_NAME" maxlength="10" class="form-control ">';			
			HTML = HTML + '<div class="HyperControls">'
			HTML = HTML + '<a type="button" class="Btxt4" data-toggle="modal"  onclick="Grddocview('+rowno+');" data-target="" href="#">'+data+'</a>'
			HTML = HTML + ' </div></span>'
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=DULD_NAME'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=DULD_NAME'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
       		{ targets: 3, "render": function ( data, type, row, meta ) {                            
   	 		 
    			var rowno = meta.row;	
    			
    			var Addvalue = $("#KYCD_DOCATTACHMENT").val();
    			
    			if (data == "")
    				{
    				data = Addvalue;
    				}
    			if(data=="")
    				{
    				var HTML="";
    				
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="DULD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					  
    	    		HTML = HTML + '<input style="display:none" id="DULD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(DULD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="DULD_UPLOAD'+rowno+'" hidden="hidden" name="DULD_UPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    				}
    			else{
    				var HTML="";
    				
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="DULD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					
    	    		HTML = HTML + '<input style="display:none" id="DULD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(DULD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35"  height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="DULD_UPLOAD'+rowno+'" hidden="hidden" name="DULD_UPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    			}
    			 
    		  
    		    	 
    			 return HTML;
             } 
    		 },
			 { targets: 4,"width": "25%", "render": function ( data, type, row, meta ) {                            
 			var rowno = meta.row;       			 
			/*var viewrpt = '<span class="HyperControls">'
			viewrpt = viewrpt + '<a type="button" onclick="GridCibilScrRpt(this)" style="padding-left: 0rem;" class="Btxt4" href="#">View Report</a>'        
			viewrpt = viewrpt + '</span>'*/
			var BTN = "";
			if(row[2]=="Leegality Document")
	{
			if (data == "")
			 {
				BTN = '<span><button type="button" onclick="GridESIGNValidate(this);" id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect BTNHIDE btn-yelInplain btn-sm">Initiate Esign</button></span>' 
			 }
			/*else  if (data == "GENERATED")
			 {
				 BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" style="margin:1rem" id="GridCIBIL'+rowno+'" class=" waves-effect BTNHIDE btn-GrnInplain btn-sm">Re-Initiate CIBIL</button></span>' 
				//BTN = '<span><button type="button"  id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect btn-GrnInplain btn-sm">CIBIL Initiated</button></span>' 
			 } */
			else  if (data == "Error")
			 {
				BTN = '<span><button type="button" onclick="GridESIGNValidate(this);" style="margin:1rem" id="GridCIBIL'+rowno+'" class=" waves-effect btn-RedInplain BTNHIDE btn-sm">Failed</button></span>' 
			 } 
			 else{
				 BTN = '<span><button type="button" onclick="GridESIGNValidate(this);" id="GridCIBIL'+rowno+'" style="margin:1rem"  class=" waves-effect BTNHIDE btn-GrnInplain btn-sm">Re-Initiate Esign</button></span>' 
			 }
	}
			var  textHTML = '<input type="text" value="'+data+'" id="DULD_INITESIGN'+rowno+'" hidden="hidden" name="DULD_INITESIGN'+rowno+'" class="form-control"/>';
 		var HTML =  '<div>' +textHTML+ BTN + '</div>';
		var htmldata = $(HTML);
 return htmldata[0].outerHTML;
          } 
 		 }
		 ,
			 { targets: 5,"width": "25%", "render": function ( data, type, row, meta ) {  
var rowno = meta.row;    			 
				var BTN = "";
				var HTML_1="";
				var  textHTML = "";
				var result = row[5].includes("\\") ? "Yes" : "No";
				/***if(row[4] != "Error" && row[4] != "")
				{
					BTN = '<span><button type="button" onclick="GridESIGNRetrieve(this);" id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect BTNHIDE btn-yelInplain btn-sm">Retrieve Signed Document</button></span>' 
					textHTML = '<input type="text" value="'+data+'" id="DULD_RETERIVEREPORT'+rowno+'" hidden="hidden" name="DULD_RETERIVEREPORT'+rowno+'" class="form-control"/>';
				}
				else ***/
					if(row[2]=="Leegality Document")
			{
				if(result == "No")
				{
					BTN = '<span><button type="button" onclick="GridESIGNRetrieve(this);" id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect BTNHIDE btn-yelInplain btn-sm">Retrieve Signed Document</button></span>' 
					textHTML = '<input type="text" value="'+data+'" id="DULD_RETERIVEREPORT'+rowno+'" hidden="hidden" name="DULD_RETERIVEREPORT'+rowno+'" class="form-control"/>';
					
					HTML_1 = textHTML+BTN;
				}
				else if(result == "Yes")
				{
					
    			/**if(data=="")
    				{
    				
    				
						HTML_1 =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="DULD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					  
    	    		HTML_1 = HTML_1 + '<input style="display:none" id="DULD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(DULD_RETERIVEREPORT'+rowno+',id)" type="file" />';
    	    			HTML_1 = HTML_1 + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML_1 = HTML_1 + '<input type="text" value="'+data+'" id="DULD_RETERIVEREPORT'+rowno+'" hidden="hidden" name="DULD_RETERIVEREPORT'+rowno+'" class="form-control"/>';
    	    						HTML_1 = HTML_1 + '</span>';	
    				}
    			else{**/
    				
						HTML_1 =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="DULD_1RETERIVEREPORT'+rowno+'"  width="20" height="20"/>';	
					
    	    		HTML_1 = HTML_1 + '<input style="display:none" id="DULD_1RETERIVEREPORT'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(DULD_RETERIVEREPORT'+rowno+',id)" type="file" />';
    	    			HTML_1 = HTML_1 + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35"  height="25">';
    	    				HTML_1 = HTML_1 + '<input type="text" value="'+data+'" id="DULD_RETERIVEREPORT'+rowno+'" hidden="hidden" name="DULD_RETERIVEREPORT'+rowno+'" class="form-control"/>';
    	    						HTML_1 = HTML_1 + '</span>';	
    			//}
				}
			}
				var HTML =  '<div>' +HTML_1+ '</div>';
		var htmldata = $(HTML);
 return htmldata[0].outerHTML;
			 }
			 },
			 { targets: 6, "render": function ( data, type, row, meta ) {                            
   	 		 
    			var rowno = meta.row;	
    			if(data=="")
				{
    		
    				var HTML="";
    					
                        HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="DULD_1GRIDUPLOAD'+rowno+'"  width="20" height="20"/>';	
						HTML = HTML + '<input style="display:none" id="DULD_1GRIDUPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(DULD_GRIDUPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="DULD_GRIDUPLOAD'+rowno+'" hidden="hidden" name="DULD_GRIDUPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';
    			} 
				else
				{
				var HTML="";
    					
                        HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="DULD_1GRIDUPLOAD'+rowno+'"  width="20" height="20"/>';	
						HTML = HTML + '<input style="display:none" id="DULD_1GRIDUPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(DULD_GRIDUPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="DULD_GRIDUPLOAD'+rowno+'" hidden="hidden" name="DULD_GRIDUPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';
				}
    			 return HTML;
				 
             } 
    		 }

           	
           	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }

 function ChecklistDropdownvalue()
 {
	 

	$("#KYCD_DOCTYPE").val('');
	$("#KYCD_DOCNAME").val('');
	$("#KYCD_DOCTYPE").next().removeClass('active');
	$("#KYCD_DOCNAME").next().removeClass('active');
    $("#KYCD_DOCATTACHMENT").val('');
    $(".DDV").hide()
    $(".DDU").show()
    $(".name").text('Click Here to Upload')
    $("input[name=datafile]").attr('disabled',false);
 }
 
  function HndlUpldAfrLod(id,docu)
  {
	 $("#HIDDENIPLDST").val('');
	 $($(id).closest('.tbodytr').find('.tbodytrtd')[12]).find('input').val('')
	 GridDocFldUpldHndlr(id,docu);
	 if($("#HIDDENIPLDST").val()=='Success')
	 {
		//var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS");
	    //$(id).closest('td').next().find('input[type=text]').val($(op).find("DT").text());
	    $("#"+docu).next().show();
		$('.FormSave').click();
	    //$($(id).closest('.tbodytr').find('.tbodytrtd')[6]).find('input:radio:first').prop("checked", true).trigger("click");
		//$(id).closest('.tbodytr').find('input:radio:first').prop("checked", true).trigger("click");
		//$($(id).closest('.tbodytr').find('input:checkbox')[1]).removeAttr("disabled");
		//$($($(id).closest('.tbodytr').find('.tbodytrtd'))[11]).find('button').show();
	 }
	 else
	 {
		 $("#"+docu).next().hide();
	 }
 }


 function GridDocFldUpldHndlr(id,docu)
 {

 var Val=$(id).val()


 if($(id).closest('td').find('input[type="file"]').val()!="")
 {
     var domain= LoadFrmXML("RS001");
     var usrpwd= LoadFrmXML("RS002");
     var PrcsID=$('#PrcsID').val()
     var FormName= 'DOCU_Upload';
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
     alert('Special characters not allowed in the upload file');
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
 	        		$("#HIDDENIPLDST").val('Fail');
 					return
 	        		}
 			else{
 				$(id).val(data.split('~')[2])
 				

 					ajaxindicatorstop();
 					alert(LoadFrmXML("V0118"));
 					$("#HIDDENIPLDST").val('Success');
 					return
 					
 				}	
 					 ajaxindicatorstop(); 
 	        },
 	        failure:function(data)
 	        {
 	     		  ajaxindicatorstop();
 					alert(LoadFrmXML("V0119"));
 					$("#HIDDENIPLDST").val('Fail');
 					return
 	        	
 	        }
 	    });
 		
 		  ajaxindicatorstop();
 		  }
 		  else{
 		  
 		  alert('select the file to upload');
 		  }

 		 

 	  
 }
 

function LoadEsignDoc()
{
	var vrsnno= "";
	var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID");
	vrsnno = $(op).find("VR").text();
	var ip = "<proposalno>"+$("#DMY7").val().split("|")[7]+"</proposalno><filename>"+$("#DMY7").val().split("|")[7]+"</filename>"
	
	 $.ajax({
		 url:"/TPLSW/Mergepdf?inputdata="+ip+"&prcsid="+$('#PrcsID').val()+"&version="+vrsnno+"&Prvnt="+$("#Prvnt").val(),
 			async:false,
 	        contentType: false,
 	        processData: false,
 	        type: 'POST',
 	        success: function(data){
				if(data.split("!@#")[0] == "Exception")
				{
					alert(data.split("!@#")[1]);
					return
				}
			},
 	        failure:function(data)
 	        {
				alert(data);
 					return
 	        }
 	    });
}
function Grddocview(name)
{
	
	
	var Name=$("#DULD_NAME"+name).val();
	if(Name!="Leegality Document")
	{
	var IOP=window.location.origin;
	var PrcsId=$("#DMY7").val().split("|")[7]	
	var xml=UI_getdata($('#PrcsID').val(),"","","","","LSW_SCHECKSCEME")
	var UniqId=$(xml).find('RESULT').html();
	var Protype=$(xml).find('PROTYPE').html();
	var URLLink=UI_getdata(Name,Protype,PrcsId,"","","LSW_SGETURL")
	var Final=$(URLLink).find('URL').text();
	Final=Final.replace(/xxx/g,"&");
	
	//var UniqId=$(".FormPageMultiTab li.active").attr('id');.replace(/amp;/g,'')
	//flname=flname.replace(/¶m1/g,'&param1')
	var flname = IOP+Final
	
	ajaxindicatorstart("Downloading.. Please wait");
	
	var link=document.createElement('a');
	document.body.appendChild(link);
	link.download=flname;
	link.href=flname;
	link.click();
	ajaxindicatorstop();  
	//LoadFrmXML("RT0106")
	}
  
}

/* function HndlUpldAfrLodDoc(id,docu){
	 if($(id).closest('.tbodytrtd').prev().find('select').val()==""){
		 alert("NAME OF DOCUMENT is Mandatory")
		return;
	 }
	 $("#HIDDENIPLDST").val('');
	 $($(id).closest('.tbodytr').find('.tbodytrtd')[12]).find('input').val('')
	 HndlUpldAfrLod(id,docu);
	 if($("#HIDDENIPLDST").val()=='Success')
		 {
		 	var op = UI_getdata("","","","","","LSW_SGETTYMONSTUS");
	    	$(id).closest('td').next().find('input[type=text]').val($(op).find("DT").text());
	    	$("#"+docu).next().show();
	    	//$($(id).closest('.tbodytr').find('.tbodytrtd')[6]).find('input:radio:first').prop("checked", true).trigger("click");
			$(id).closest('.tbodytr').find('input:radio:first').prop("checked", true).trigger("click");
			$($(id).closest('.tbodytr').find('input:checkbox')[1]).removeAttr("disabled");
			$($($(id).closest('.tbodytr').find('.tbodytrtd'))[11]).find('button').show();
			$('.FormSave').click();
		
		 }
	 else{
		 $("#"+docu).next().hide();
	 }
 } */
 
  function Chkverify()
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
		GridESIGNValidate(this);
	}
	
	
 }