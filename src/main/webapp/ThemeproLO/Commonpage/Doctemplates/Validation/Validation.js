function DocFldUpldHndlr(id,docu)
 {

 var Val=$(id).val()


 if($(id).closest('td').find('input[type="file"]').val()!="")
 {
     var domain= LoadFrmXML("RS001");
     var usrpwd= LoadFrmXML("RS002");
    var PrcsID='89543_HomeEqutity_process'
   //  var PrcsID='1_Doc_crs'
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


 
 function GridControlDetailDocumentTEMPLATES (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
       				
           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DeleteGridrow" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
        					HTML = HTML + '<input type="text" value="'+data+'" id="ACTION'+rowno+'" hidden="hidden" name="ACTION'+rowno+'" class="form-control"/>';
						
						HTML = HTML + '</span>';  
        				var htmldata = $(HTML);				
        				return htmldata[0].outerHTML;
       					
       				  
       			 }
           	  },
			   { targets: 1, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="OKYD_DOCNAME'+rowno+'"   name="OKYD_DOCNAME'+rowno+'" maxlength="10"   class="  form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=OKYD_DOCNAME'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=OKYD_DOCNAME'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
			 { targets: 2, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="OKYD_DOCNAMEID'+rowno+'"   name="OKYD_DOCNAMEID'+rowno+'" maxlength="10"   class="  form-control NoSpecialChar  form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=OKYD_DOCNAMEID'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=OKYD_DOCNAMEID'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
           
   		 { targets: 3, "render": function ( data, type, row, meta ) {  
   			var rowno = meta.row;	 
      		var HTML =	'<span><input type="text" id="OKYD_UPLOADDT'+rowno+'"  name="OKYD_UPLOADDT'+rowno+'"  maxlength="10" class="form-control  form-control ISDatefield  IsNumberFields  ">';
      		HTML = HTML + '<img src="ThemeproLO/Common/Images/calendar.png" class="GridFieldIcon Griddatepicker"/></span>'; 
      			 
      		var htmldata = $(HTML);
   			

			if ($(htmldata).find('[name=OKYD_UPLOADDT'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
   			$(htmldata).find('[name=OKYD_UPLOADDT'+rowno+']').attr("value",data);

   			
   			return htmldata[0].outerHTML;
       			 }
       		 },
       		 
       		 
       		{ targets: 4, "render": function ( data, type, row, meta ) {                            
   	 		 
    			var rowno = meta.row;	
    			
    			var Addvalue = $("#KYCD_DOCATTACHMENT").val();
    			
    			if (data == "")
    				{
    				data = Addvalue;
    				}
    			if(data=="")
    				{
    				var HTML="";
    				
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="OKYD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					  
    	    		HTML = HTML + '<input style="display:none" id="OKYD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(OKYD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="OKYD_UPLOAD'+rowno+'" hidden="hidden" name="OKYD_UPLOAD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    				}
    			else{
    				var HTML="";
    				
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="OKYD_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					
    	    		HTML = HTML + '<input style="display:none" id="OKYD_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(OKYD_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35"  height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="OKYD_UPLOAD'+rowno+'" hidden="hidden" name="OKYD_UPLOAD'+rowno+'" class="form-control"/>';
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
	 
	 
	$("#KYCD_DOCNAME").val('');
	$("#KYCD_DOCID").val('');
	$("#KYCD_DOCID").next().removeClass('active');
	$("#KYCD_DATE").val('');
	$("#KYCD_DATE").next().removeClass('active');
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
     var PrcsID='89543_HomeEqutity_process'
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
      var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
 	 

 		var xml=UI_getdata(FileType,FileSize,"","","","LSW_SGETKYCDOCUMNTTYPE")
 		
 		var FileAccept=$(xml).find('RESULT').text()
 	if(FileAccept == 'NO')
 	{
 		alert("Upload Only Image and PDF")
 		$("#HIDDENIPLDST").val('Fail');
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
     alert('Special characters not allowed in the upload file');
 	$(id).closest('td').find('input[type="file"]').val('')
 	$("#HIDDENIPLDST").val('Fail');
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


 