
function Pindetls(idval,state,city,STDCode)
{
var val=GetPin($(idval).val());

if($(val).find("statename").text()!="")
{
$('#'+state).attr('disabled',true)
$('#'+state).val($(val).find("statename").text());
$('#'+state).next().addClass('active');
}
else
{
$('#'+state).attr('disabled',true)
$('#'+state).val('');
$('#'+state).next().removeClass('active');
$(idval).val('');
}
if($(val).find("Telephone").text()!="")
{
$('#'+STDCode).attr('disabled',true)
$('#'+STDCode).val($(val).find("Telephone").text());
$('#'+STDCode).next().addClass('active');
}
else
{
$('#'+STDCode).attr('disabled',true)
$('#'+STDCode).val('');
$('#'+STDCode).next().removeClass('active');
$(idval).val('');
}
if($(val).find("Districtname").text()!="")
{
$('#'+city).attr('disabled',true)
$('#'+city).val($(val).find("Districtname").text());
$('#'+city).next().addClass('active');
}
else
{
$('#'+city).attr('disabled',true)
$('#'+city).val('');
$('#'+city).next().removeClass('active');
$(idval).val('');
}
}


function GridControlVENDOREMPMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="id'+rowno+'"   name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar RMK form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=id'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=id'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
	   { targets: 2, "render": function ( data, type, row, meta ) {                            
			

		   var rowno = meta.row;	 
			var HTML =	'<span><input type="checkbox"  class="custom-control-input " title="'+row[0]+'" value="'+data+'" name="VEND_CHECK'+rowno+'" id="VEND_CHECK'+rowno+'">';			 
   		HTML = HTML + '<label class="custom-control-label GridLabel" for="VEND_CHECK'+rowno+'"></label></span>';	
          var htmldata = $(HTML);
  			
  			$(htmldata).find('[name=VEND_CHECK'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
  			
	        return htmldata[0].outerHTML;
   		
   		
   			 return HTML;
	
		     		
			
         } 
		 },
		   { targets: 3, "render": function ( data, type, row, meta ) {                            
				

				var rowno = meta.row;	 
				var HTML =	'<span><input type="text"  id="id'+rowno+'"   name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar RMK form-control ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=id'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=id'+rowno+']').attr("value",data);

					
					return htmldata[0].outerHTML;      
					
		         } 
				 }
	        	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}






function Ifscdetls(IDVAL,BNKNAME,BRANCH)
{
var val=GetIfsc($(IDVAL).val());
var row=$($('.VENDORBANK').find(event.target).closest('.DYNROW')[0]).attr('data-row');
if($(val).find("BANK").text() == "")
{
$(IDVAL).val('');
$('#'+BNKNAME+row).val('');
$('#'+BRANCH+row).val('');
$('#'+BNKNAME+row).next().removeClass('active');
$('#'+BRANCH+row).next().removeClass('active');
$('#'+BNKNAME+row).attr('disabled',true)
$('#'+BRANCH+row).attr('disabled',true)
}

if($(val).find("BANK").text() != "")
{
$('#'+BNKNAME+row).val($(val).find("BANK").text());	
$('#'+BNKNAME+row).next().addClass('active');
$('#'+BNKNAME+row).attr('disabled',true)
}

if($(val).find("BRANCH").text() != "")
{
$('#'+BRANCH+row).val($(val).find("BRANCH").text());
$('#'+BRANCH+row).next().addClass('active');
$('#'+BRANCH+row).attr('disabled',true)
}


}




function CHKSTATUS()

{
	
	var Status=$("#VECR_STATUS").val()
	if(Status=="Active")
		{
		 $("#VECR_INACTIVEDATE").attr("disabled",true)
		 $("#VECR_INACTIVEDATE").val('')
		 $("#VECR_INACTIVEDATE").removeClass('VECRMndtry');
		 $("#VECR_INACTIVEDATE").next().removeClass('active');
		 $("#VECR_INACTIVEDATE").next().find(".MndtryAstr").html("");
		 $('.Inactdt').hide()
		 
		  $("#VECR_STATUSREAS").attr("disabled",true)
		 $("#VECR_STATUSREAS").val('')
		 $("#VECR_STATUSREAS").removeClass('VECRMndtry');
		 $("#VECR_STATUSREAS").next().removeClass('active');
		 $("#VECR_STATUSREAS").next().find(".MndtryAstr").html("");
		 
		 
         $("#VECR_ACTIVEDATE").addClass('VECRMndtry');
		 $("#VECR_ACTIVEDATE").next().find(".MndtryAstr").html("*");
		 $("#VECR_ACTIVEDATE").attr("disabled",false)
		  $('.actdt').hide()
		  
      if($("#VECR_ACTIVEDATE").val()=='')
	  {		  
		var Today=ToDay();
        $("#VECR_ACTIVEDATE").val(Today)
	  }
   
   $("#VECR_ACTIVEDATE").attr("disabled",true)
   $("#VECR_ACTIVEDATE").next().addClass('active');
		    
		}
	else
		{
		
          $("#VECR_ACTIVEDATE").attr("disabled",true)
		  $("#VECR_ACTIVEDATE").removeClass('VECRMndtry');
		  $("#VECR_ACTIVEDATE").next().find(".MndtryAstr").html("");
		//  $("#VECR_ACTIVEDATE").next().removeClass('active');
		//  $("#VECR_ACTIVEDATE").val('')
		  $('.actdt').hide()
		  
		  
          $("#VECR_INACTIVEDATE").addClass('VECRMndtry');
		  $("#VECR_INACTIVEDATE").next().find(".MndtryAstr").html("*");
           $("#VECR_INACTIVEDATE").attr("disabled",false)
		   
		   $("#VECR_STATUSREAS").addClass('VECRMndtry');
		  $("#VECR_STATUSREAS").next().find(".MndtryAstr").html("*");
           $("#VECR_STATUSREAS").attr("disabled",false)
		   
		   
		  $('.Inactdt').show();
		  
		   
		  
		  
		}



}





function RCUSTATUS()

{
	
	var Status=$("#VECR_RCUSTATUS").val()
	if(Status=="Negative")
		{
		 $("#VECR_RCUREMARKS").addClass('VECRMndtry');
		 $("#VECR_RCUREMARKS").next().find(".MndtryAstr").html("*");
		    
		}
	else
		{
         $("#VECR_RCUREMARKS").removeClass('VECRMndtry');
		 $("#VECR_RCUREMARKS").next().find(".MndtryAstr").html("");

		}



}



function GetUserMap()
{
  var Name=$("#VECR_VENDORCODE").val();


 $("#VEUR_ROLEID").val(Name);
 $("#VEUR_ROLENAME").val(Name);
 $("#VEUR_UNIQID").val($("#VECR_UNIQID").val())
 $("#VEUR_ROLENAME").next().addClass('active');
  $("#BTNUSRBRGRD").click();
  oTable2 = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable2.search($(this).val()).draw() ;
		})	
  $("#UserModalPop").click();
	 // }
  //$("#UserModalClose").click();
}




function GridControlBRANCHUSERMAPMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	    { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
		
		   { targets: 0, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="id'+rowno+'"   name="id'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar ROLEID form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=id'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=id'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
	   
		 { targets: 3, "render": function ( data, type, row, meta ) {                            
                  	 		
                			var rowno = meta.row;	
                       var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DeleteBrMapRow  BTNHIDE"  title="Delete" attr-Upd="UCBM_ACTION'+rowno+'"  width="20" height="20"/>';
                         '</span>';		 
                         return HTML;
							 
							 
                         } 
                		 }
		  ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}



function GridControlBRANCHUSERMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 3, "render": function ( data, type, row, meta ) {                            
		   var rowno = meta.row;	 
			var HTML =	'<span><input type="checkbox" class="custom-control-input DSVLBL" title="'+row[0]+'" value="'+data+'" name="KYCD_OSV'+rowno+'" id="KYCD_OSV'+rowno+'">';			 
  		HTML = HTML + '<label class="custom-control-label GridLabel" for="KYCD_OSV'+rowno+'"></label></span>';	
    		//var HTML =	'<span><input type="text" id="KYCD_OSV'+rowno+'"  name="KYCD_OSV'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
    			 
    		var htmldata = $(HTML);
 			
 			$(htmldata).find('[name=KYCD_OSV'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
 			
	 return htmldata[0].outerHTML;
  		
  		
  			 return HTML;		
			
         } 
		 }
	        	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}


function VENPanValid(Obj) {    
    if (Obj.value != "") {
        ObjVal = Obj.value.toUpperCase();
        var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var code = /([P p])/;
         var code_chk = ObjVal.substring(3,4);
       
	   if (ObjVal.search(panPat) == -1) {
             alert("Invalid Pan No eg.AAAPA1111A");
             Obj.focus();
             Obj.value="";
             return false;
         }

    }
    
}


$(document).on("click", ".DeleteBrMapRow" , function() {
	var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	
	 var Id=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('.tbodytr').index()).remove().draw();
 //var Id=$($(this).closest('.tbodytr').find('.tbodytrtd')[0]).find('input[type=text]').val()
 
	var xml=UI_getdata($("#PrcsID").val(),Id,"VENDOR","","","LSW_SDELMAPUSERDATA")
} 
	
})


function GridControlVDRBRMAP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 3, "render": function ( data, type, row, meta ) {                            
		   var rowno = meta.row;	 
			var HTML =	'<span><input type="checkbox" class="custom-control-input DSVLBL" title="'+row[2]+'" value="'+data+'" name="VCBM_BRANCH'+rowno+'" id="VCBM_BRANCH'+rowno+'">';			 
  		HTML = HTML + '<label class="custom-control-label GridLabel" for="VCBM_BRANCH'+rowno+'"></label></span>';	
    		//var HTML =	'<span><input type="text" id="KYCD_OSV'+rowno+'"  name="KYCD_OSV'+rowno+'" disabled maxlength="100" class="form-control DSVLBL form-control IsNumberFields  "></span>';			 
    			 
    		var htmldata = $(HTML);
 			
 			$(htmldata).find('[name=VCBM_BRANCH'+rowno+'][value="true"]').attr('checked', 'checked');       			       			
 			
	 return htmldata[0].outerHTML;
  		
  		
  			 return HTML;		
			
         } 
		 }
	        	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}



function GridControlVDRBRMAPMAIN (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
{
	 
	 popTableModPageGrid1 = $('#'+TableID).DataTable({ 

        'aaData': dtData,
        "aoColumns": dtcolumn,  
        
        "bAutoWidth": false,

        "autoWidth": false,

        'bPaginate': true,

       "aaSorting": [],

        "pageLength": 5,

        "bDeferRender": true,

        'bInfo': true,

        'bFilter': true,

        "bDestroy": true,
		 "destroy": true,

        "bJQueryUI": true,

       //"scrollY": true,

       // "scrollX": "200px",

        "sPaginationType": "full_numbers",

        
        
"aoColumnDefs": [ 
	   { "sClass": "dpass", "aTargets": jQuery.parseJSON(hideClm)},
	   { targets: 0, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="Brid'+rowno+'"   name="Brid'+rowno+'" maxlength="10"  disabled class=" DSVLBL form-control NoSpecialChar ROLEID form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=Brid'+rowno+']').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=Brid'+rowno+']').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
	   { targets: 2, "render": function ( data, type, row, meta ) {                            
		   		
			       var rowno = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields UpdPrimaryVdrBrMap" value="Yes" id="PRIMARYY'+rowno+'" name="VCBM_PRIMARY"><label class="custom-control custom-control-label" for="PRIMARYY'+rowno+'"></label>';			 
		 		HTML = HTML + '</span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=VCBM_PRIMARY][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML; 
         } 
		 },
		 { targets: 3, "render": function ( data, type, row, meta ) {                            	
                			var rowno = meta.row;	
                       var HTML =	'<span id=""> <img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DeleteVdrBrMapRow BTNHIDE"  title="Delete" attr-Upd="UCBM_ACTION'+rowno+'"  width="20" height="20"/>';
                         '</span>';		 
                         return HTML;
                         } 
                		 }
	        	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	  return popTableModPageGrid1;
}
function GetVndUserMap()
{
  var Name=$("#VECR_VENDORCODE").val();

  $("#VCBM_ROLEID").val(Name);
  $("#VCBM_ROLENAME").val(Name);
  
  
	  $("#VCBM_UNIQID").val($("#VECR_UNIQID").val())
 
  $("#BTNVDRBRGRD").click();
  oTableBr = $('#TableBr').DataTable();
		$('#SearchTableBr').keyup(function(){
		      oTableBr.search($(this).val()).draw() ;
		})	
  $("#VendorBrModalPop").click();
	//  }
  //$("#UserModalClose").click();
}


$(document).on("click", ".UpdPrimaryVdrBrMap" , function() {

 var Id=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()	
	 var Val=$(this).val();
	 var xml=UI_getdata($("#PrcsID").val(),Id,"Branch",Val,"","LSW_SUPDVDRBRMAPDATA")
	
})

$(document).on("click", ".DeleteVdrBrMapRow" , function() {
	var r = confirm("Are you sure!! to delete the record");
if (r == true) {
	 var Id=$($(this).closest('tbody tr').find('td')[0]).find('input[type=text]').val()	
 oTable = $('#'+ $(this).closest("table").attr("id")).DataTable();
 oTable.row($(this).closest('tbody tr').index()).remove().draw();

	var xml=UI_getdata($("#PrcsID").val(),Id,"Branch","","","LSW_SDELVDRBRMAPDATA")
} 
	
})






//Upload  start


function DocFldUpldHndlr(id,docu)
 {

 var Val=$(id).val()


 if($(id).closest('td').find('input[type="file"]').val()!="")
 {
     var domain= LoadFrmXML("RS001");
     var usrpwd= LoadFrmXML("RS002");
    var PrcsID=$('#PrcsID').val()
     var FormName= 'VENDOR';
	 var DocName=$('#VECR_CHANNELTYP').val()
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

$("#DOCVERSION").val($(op).find("VR").text())

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
     alert('Error in File Name');
 	$(id).closest('td').find('input[type="file"]').val('')
 	return;
 }
 	 
  ajaxindicatorstart("Uploading.. Please wait");
 	    $.ajax({
 	        url:"/TPLSW/DMS?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&DocName="+DocName,
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


 
 function GridControlDetailVENDDOCUPLOAD (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
       				
           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
        					HTML = HTML + '<input type="text" value="'+data+'" id="ACTION'+rowno+'" hidden="hidden" name="ACTION'+rowno+'" class="form-control"/>';
						
						HTML = HTML + '</span>';  
        				var htmldata = $(HTML);				
        				return htmldata[0].outerHTML;
       					
       				  
       			 }
           	  },
			   { targets: 1, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="VEDO_TYPE'+rowno+'"   name="VEDO_TYPE" maxlength="10"   class=" DSVLBL form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=VEDO_TYPE]').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=VEDO_TYPE]').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 },
			 { targets: 2, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="VEDO_NAME'+rowno+'"   name="VEDO_NAME" maxlength=""   class="DSVLBL  form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=VEDO_NAME]').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=VEDO_NAME]').attr("value",data);

				
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
    				
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="VEDO_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					  
    	    		HTML = HTML + '<input style="display:none" id="VEDO_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(VEDO_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="VEDO_UPLOAD'+rowno+'" hidden="hidden" name="VEDO_UPLOAD" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    				}
    			else{
    				var HTML="";
    				
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="VEDO_1UPLOAD'+rowno+'"  width="20" height="20"/>';	
					
    	    		HTML = HTML + '<input style="display:none" id="VEDO_1UPLOAD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(VEDO_UPLOAD'+rowno+',id)" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35"  height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="VEDO_UPLOAD'+rowno+'" hidden="hidden" name="VEDO_UPLOAD" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    			}
    			 
    		  
    		    	 
    			 return HTML;
             } 
    		 }
			 ,
			 { targets: 5, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="VEDO_DOCID'+rowno+'"   name="VEDO_DOCID" maxlength=""   class="DSVLBL  form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=VEDO_DOCID]').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=VEDO_DOCID]').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 } ,
			 { targets: 6, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="VEDO_UNIQID'+rowno+'"   name="VEDO_UNIQID" maxlength=""   class="DSVLBL  form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=VEDO_UNIQID]').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=VEDO_UNIQID]').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
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

 function ADDTIONALDROPDOWN()
 {
	var Channel=UI_getdata($("#VECR_CHANNELTYP").val(),"","","","","LSW_SGETCHANNEL")
	 $("#VECR_ADDTIONALROLE").empty();
	 $("#VECR_ADDTIONALROLE").append($(Channel).find("RESULT").html());	
	 $('#VECR_ADDTIONALROLE').material_select(); 
     
	 var rowCnt = $("#Table4").find("tbody tr").length
	 var value="";
     for (i=0;i<rowCnt;i++)
	{
	
	value = $("#VEAD_ROLE"+i).val();
 
	$("#VECR_ADDTIONALROLE").find("[value="+value+"]").attr("disabled",true);
	 $('#VECR_ADDTIONALROLE').material_select(); 
	}



 }
 
 
  function VENDORGROUPMAP()
 {
	var Channel=UI_getdata("","","","","","LSW_SGETVALUATIONGROUP")
	 $("#VECR_VALUATIONGROUP").empty();
	 $("#VECR_VALUATIONGROUP").append($(Channel).find("RESULT").html());	
	 $('#VECR_VALUATIONGROUP').material_select(); 
     
	 var rowCnt = $("#Table51").find("tbody tr").length
	 var value="";
     for (i=0;i<rowCnt;i++)
	{
	
	value = $("#VETE_ROLE"+i).val();
 
	$("#VECR_VALUATIONGROUP").find("[value="+value+"]").attr("disabled",true);
	 $('#VECR_VALUATIONGROUP').material_select(); 
	}



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
 
 
 function ADDTIONROLE()
{
	
	var k=	$("#VECR_ADDTIONALROLE").val().length	
    var Name1="";
 for(i=0;i<k;i++)
	 {
	 var Name=$("#VECR_ADDTIONALROLE").val()[i]
		
	 if(Name!=undefined)
		 {
	       Name1= Name1+','+Name
	      
         }
	 }
        Name1 =Name1;
     var Name1=Name1.replace(',','')
	 
    $("#VECR_ADDTIONALROLEHDN").val(Name1)
}


 /*function VENDORTYPE()
{
	
	var Channel=UI_getdata($("#VECR_CHANNELTYP").val(),"","","","","LSW_SGETCHANNEL")
	 $("#VECR_ADDTIONALROLE").empty();
	 $("#VECR_ADDTIONALROLE").append($(Channel).find("RESULT").html());	
	 $('#VECR_ADDTIONALROLE').material_select();
	
	 var CATAGORY=$("#VECR_ADDTIONALROLEHDN").val()
	 var CATAGORYVal=CATAGORY.split(",");
	 var row = $(CATAGORYVal).length;
	 for (i=0;i<row;i++)
	 {
		 if(CATAGORYVal[i] !="")
		 {
	   $("#VECR_ADDTIONALROLE option:contains("+CATAGORYVal[i]+")").attr("selected","selected")
	   $('#VECR_ADDTIONALROLE').material_select();
		 }
	 }
	 
}	*/
	

 function GridControlDetailVENDADDROLE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
       				
           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
        					HTML = HTML + '<input type="text" value="'+data+'" id="ACTION'+rowno+'" hidden="hidden" name="ACTION'+rowno+'" class="form-control"/>';
						
						HTML = HTML + '</span>';  
        				var htmldata = $(HTML);				
        				return htmldata[0].outerHTML;
       					
       				  
       			 }
           	  },
			   { targets: 1, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="VEAD_ROLE'+rowno+'"  disabled name="VEAD_ROLE" maxlength="10"   class=" DSVLBL form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=VEAD_ROLE]').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=VEAD_ROLE]').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 }
			 ,
			   { targets: 3, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="VEAD_UNIQID'+rowno+'"  disabled name="VEAD_UNIQID" maxlength="10"   class=" DSVLBL form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=VEAD_UNIQID]').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=VEAD_UNIQID]').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 }

           	
           	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }
 
 function ToDay()
 {
	 
	 var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            return today = dd + '/' + mm + '/' + yyyy;
	 
 }
 
 
 
 function GrdDocDwnld1(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
    
 
	if ($("#"+id).val().split("\\")[0] == "")
		
		{
			alert("No Attachments Available to View");
			return;
		}
	
	RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + $("#"+id).val().split("\\")[0];
	
	$("#DocView").attr("src", RedirectURL);
	
	
}


function ACCNOValida(ACCNO)
{	
   var str = $("#"+ACCNO).val();
	 if(str != "")
		 {
		   var ACCCOUNT = str.length;
		   if(parseInt(ACCCOUNT)<6)
			 {
			  alert("Enter Valid Account No")
			  $("#"+ACCNO).val('')
			  $("#"+ACCNO).next().removeClass('active')
			 }
		 } 
}



function BLOCKLISTSTATUS()
{
	
	var Status=$("#VECR_STATUS").val()
	if(Status=="Active")
		{
		  $("#VECR_BLOCKLIST").attr("disabled",true)
		 $("#VECR_BLOCKLIST").val('')
		 $("#VECR_BLOCKLIST").removeClass('VECRMndtry');
		 $("#VECR_BLOCKLIST").next().removeClass('active');
		$("#VECR_BLOCKLIST").parent().next().find(".MndtryAstr").html("");
		
		$("#VECR_BLOCKLIST").material_select();
        }
	else
		{
		  $("#VECR_BLOCKLIST").attr("disabled",false)
		 $("#VECR_BLOCKLIST").addClass('VECRMndtry');
		$("#VECR_BLOCKLIST").parent().next().find(".MndtryAstr").html("*");
		 $("#VECR_BLOCKLIST").material_select();
        }
}



function REASONCHANGE()
{
	
	var Status=$("#VECR_REASONCHANGE").val()
	if(Status=="Others")
		{
			
		 $("#VECR_OTHERS").attr("disabled",false)
		 $("#VECR_OTHERS").addClass('VECRMndtry');
	//	 $("#VECR_OTHERS").next().addClass('active');
		 $("#VECR_OTHERS").next().find(".MndtryAstr").html("*");
		 
		
        }
	else
		{
		 $("#VECR_OTHERS").attr("disabled",true)
		 $("#VECR_OTHERS").val('')
		 $("#VECR_OTHERS").removeClass('VECRMndtry');
		 $("#VECR_OTHERS").next().removeClass('active');
		 $("#VECR_OTHERS").next().find(".MndtryAstr").html("");
        }



}


function CHKBLOCKLIST()
{
	var VECR_BLOCKLIST=$("#VECR_BLOCKLIST").val()
	if(VECR_BLOCKLIST=="Yes")
		{
		  $("#VECR_REASONCHANGE").attr("disabled",true)
		 $("#VECR_REASONCHANGE").val('Others')
		$("#VECR_REASONCHANGE").material_select();
        }
	else
		{
		  $("#VECR_REASONCHANGE").attr("disabled",false)
		  $("#VECR_REASONCHANGE").material_select();
        }
	
	
}





 function GridControlDetailVENDADDTECHGROUP (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
       				
           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DelGridrow " title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
        					HTML = HTML + '<input type="text" value="'+data+'" id="ACTION'+rowno+'" hidden="hidden" name="ACTION'+rowno+'" class="form-control"/>';
						
						HTML = HTML + '</span>';  
        				var htmldata = $(HTML);				
        				return htmldata[0].outerHTML;
       					
       				  
       			 }
           	  },
			   { targets: 1, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="VETE_ROLE'+rowno+'"  disabled name="VETE_ROLE" maxlength="10"   class=" DSVLBL form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=VETE_ROLE]').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=VETE_ROLE]').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 }
			 ,
			   { targets: 3, "render": function ( data, type, row, meta ) {                            
			

			var rowno = meta.row;	 
			var HTML =	'<span><input type="text"  id="VETE_UNIQID'+rowno+'"  disabled name="VETE_UNIQID" maxlength="10"   class=" DSVLBL form-control   form-control ">';			 
			HTML = HTML + '</span>'; 
				 
			var htmldata = $(HTML);
				

			if ($(htmldata).find('[name=VETE_UNIQID]').hasClass("IsCURCommaFields"))
				{
				data = CURCommaSep(data);
				}
				
			
				$(htmldata).find('[name=VETE_UNIQID]').attr("value",data);

				
				return htmldata[0].outerHTML;      
				
	         } 
			 }

           	
           	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }
 
 


