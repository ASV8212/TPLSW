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
     var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
	 

		var xml=UI_getdata(FileType,FileSize,"","","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert("File Size not matched")
		return
    }	 

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
     alert('Error in File Name');
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
 				$(id).closest('.md-form').append('<span class="name">'+names.slice(0,-1)+'</span>');

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
			var HTML =	'<span><input type="text"  id="DULD_NAME'+rowno+'" disabled  name="DULD_NAME'+rowno+'" maxlength=""   class="DSVLBL    form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
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
 
