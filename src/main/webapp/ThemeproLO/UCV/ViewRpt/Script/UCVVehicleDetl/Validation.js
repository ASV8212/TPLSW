function GridControlDetailUptProInfo (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
   
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
 			
		var rowno = meta.row;	 
		var HTML =	'<span><input type="text" id="PLAG_LNDASPERDOC'+rowno+'"  name="PLAG_LNDASPERDOC'+rowno+'" maxlength="10" data-item="Docu" class="form-control NoSpecialChar  LandMin LandMultp TOTVAL form-control IsNumberFields">';			 
		HTML = HTML + '</span>'; 
			 
		var htmldata = $(HTML);
			

		if ($(htmldata).find('[name=PLAG_LNDASPERDOC'+rowno+']').hasClass("IsCURCommaFields"))
			{
			data = CURCommaSep(data);
			}
			
		
			$(htmldata).find('[name=PLAG_LNDASPERDOC'+rowno+']').attr("value",data);

			
			return htmldata[0].outerHTML;      		
			
         } 
		 },
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="PLAG_LNDACTUAL'+rowno+'"  name="PLAG_LNDACTUAL'+rowno+'" maxlength="10" data-item="Actual" class="form-control  LandMin LandMultp TOTVAL NoSpecialChar form-control IsNumberFields">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=PLAG_LNDACTUAL'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=PLAG_LNDACTUAL'+rowno+']').attr("value",data);

					
					return htmldata[0].outerHTML;      		
					
		         } 
				 },
				 { targets: 3, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="PLAG_LNAAREACONSD'+rowno+'"  name="PLAG_LNAAREACONSD'+rowno+'" maxlength="10" data-item="Area" disabled class="form-control  LandMultp TOTVAL NoSpecialChar DSVLBL form-control IsNumberFields">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							

						if ($(htmldata).find('[name=PLAG_LNAAREACONSD'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							
						
							$(htmldata).find('[name=PLAG_LNAAREACONSD'+rowno+']').attr("value",data);

							
							return htmldata[0].outerHTML;      		
							
				         } 
						 },
		 { targets: 4, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="PLAG_LNDRATSQFT'+rowno+'"  name="PLAG_LNDRATSQFT'+rowno+'" maxlength="30" data-item="Rate" class="form-control form-control NoSpecialChar LandMultp TOTVAL IsCURCommaFields IsNumberFields">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=PLAG_LNDRATSQFT'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=PLAG_LNDRATSQFT'+rowno+']').attr("value",data);

					
					return htmldata[0].outerHTML;      		
					
		         } 
				 },
				 { targets: 5, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="PLAG_LNDTOTVAL'+rowno+'"  name="PLAG_LNDTOTVAL'+rowno+'" maxlength="30" disabled data-item="Result" class="form-control NoSpecialChar TOTVAL IsCURCommaFields DSVLBL form-control IsNumberFields">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							

						if ($(htmldata).find('[name=PLAG_LNDTOTVAL'+rowno+']').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							
						
							$(htmldata).find('[name=PLAG_LNDTOTVAL'+rowno+']').attr("value",data);

							
							return htmldata[0].outerHTML;      		
							
				         } 
						 }
     	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
 }

function GridControlDetailUptProInfoII (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
			
		var rowno = meta.row;	 
		var HTML =	'<span><input type="text" id="PBDG_BUILDASPERDOC'+rowno+'"  name="PBDG_BUILDASPERDOC" maxlength="10" data-total1="THVD_CONSASPERDOC" data-total="THVD_CONSTOTVAL|THVD_TOTEXTIMVAL|PLAG_LNDTOTVAL" data-item="Docu" class="form-control FloorMin FloorTot FloorTot4 IsNumberFields  NoSpecialChar form-control">';			 
		HTML = HTML + '</span>'; 
			 
		var htmldata = $(HTML);
			
		if ($(htmldata).find('[name=PBDG_BUILDASPERDOC]').hasClass("IsCURCommaFields"))
			{
			data = CURCommaSep(data);
			}
			
			$(htmldata).find('[name=PBDG_BUILDASPERDOC]').attr("value",data);

			return htmldata[0].outerHTML;      		
        } 
		 },
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="PBDG_BUILDACTUAL'+rowno+'"  name="PBDG_BUILDACTUAL" maxlength="10" data-item="Actual" data-total1="THVD_CONSASPERACTUAL" data-total="THVD_CONSTOTVAL|THVD_TOTEXTIMVAL|PLAG_LNDTOTVAL" class="form-control  FloorMin FloorTot1 FloorTot4 IsNumberFields NoSpecialChar form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=PBDG_BUILDACTUAL]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=PBDG_BUILDACTUAL]').attr("value",data);
					return htmldata[0].outerHTML;      		
		         } 
				 },
				 { targets: 3, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="PBDG_BUILDAREACONSD'+rowno+'" disabled name="PBDG_BUILDAREACONSD" maxlength="10" data-item="Area" data-total1="THVD_CONSAREACONS" data-total="THVD_CONSTOTVAL|THVD_TOTEXTIMVAL|PLAG_LNDTOTVAL" class="form-control IsNumberFields FloorTot2 FloorTot4 DSVLBL NoSpecialChar form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=PBDG_BUILDAREACONSD]').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=PBDG_BUILDAREACONSD]').attr("value",data);
							return htmldata[0].outerHTML;      		
				         } 
						 },
		 { targets: 4, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="PBDG_BUILDRATSQFT'+rowno+'"  name="PBDG_BUILDRATSQFT" maxlength="30" data-item="Rate" data-total1="THVD_CONSASPERRATE" data-total="THVD_CONSTOTVAL|THVD_TOTEXTIMVAL|PLAG_LNDTOTVAL" class="form-control form-control  FloorTot3 FloorTot4 NoSpecialChar FloorMultp IsCURCommaFields IsNumberFields">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);

				if ($(htmldata).find('[name=PBDG_BUILDRATSQFT]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=PBDG_BUILDRATSQFT]').attr("value",data);

					return htmldata[0].outerHTML;      		
					
		         } 
				 },
				 { targets: 5, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="PBDG_BUILDTOTVAL'+rowno+'" disabled name="PBDG_BUILDTOTVAL" maxlength="30" data-item="Result" data-total="THVD_CONSTOTVAL|THVD_TOTEXTIMVAL|PLAG_LNDTOTVAL" class="form-control FloorTot4 DSVLBL NoSpecialChar IsNumberFields IsCURCommaFields form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							
						if ($(htmldata).find('[name=PBDG_BUILDTOTVAL]').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							$(htmldata).find('[name=PBDG_BUILDTOTVAL]').attr("value",data);
							return htmldata[0].outerHTML;      		
				         } 
						 },
						 {
			       			 targets: 7, "render": function ( data, type, row, meta ) {
			       				var rowno = meta.row; 
			                       if(row[0]=="Basement"||row[0]=="Stilt area"||row[0]=="Ground Floor")
       					          {
			           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png" style="display:none" class="DELETEFLOOR BTNHIDE" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
			        				HTML = HTML + '</span>';  
			        				var htmldata = $(HTML);				
			        				return htmldata[0].outerHTML;
								  }
								  else
								  {
									 var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETEFLOOR BTNHIDE" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
			        				HTML = HTML + '</span>';  
			        				var htmldata = $(HTML);				
			        				return htmldata[0].outerHTML; 
									  
								  } 

			       				  
			       			 }
			           	  }
    	   ],

         "fnDrawCallback": function (oSettings) {
        }
        });
}

function DocFldUpldHndlr(id,docu,KYCName)
{
var Val=$(id).val()
if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'KYC';
    var CusID='';//$('#CBSI_CUSID').val()
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
    // var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
   //  var Filename  = names.replace(',','')
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

function GetPropAddress()
{
	var RefId=$("#TPIF_PROPERTYNO").val();
	var Prcsid=$("#TPIF_PRCSID").val();
	
	var xml=UI_getdata(Prcsid,RefId,"","","","LSW_SGETVALUERPROPADDR")

	 $("#TPIF_ADDRPRPTY").val($(xml).find('PROPADDR').text())
}



function Pindetls(idval,state,city)
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


function AddPageMultiData (TblName,PrcsID,UniqNo,DV,FieldClass)
{
	
	var html = $($("#"+DV).html());
	var document = $(html);
	
	var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
	var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
	
	var row = $("."+ DV).find('.DYNROW').length;
	
	var j = parseInt(row) + 1;
	
	$(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
	$(html).find("[data-row]").attr("data-row",j);
	$(html).attr("data-row",j);
	
	 var n = $(html).find("." + FieldClass).length;
	 
	  for (i = 0; i < n; i++) {
         name = $($(html).find("." + FieldClass)[i]).attr("name");
	$(html).find("#"+name).attr("id",name + j);
	  }
	
	
	$("."+DV).append(html);

}
/*
function LoadMultiData (TblName,PrcsID,UniqNo,DV,FieldClass,SP)
{
	
	var TechPropDetls = UI_getdata(TblName,PrcsID,UniqNo,"","",SP);
	
	var xmlDoc = $.parseXML(TechPropDetls);
	
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
		
	//	return;
		 var n = $(html).find("." + FieldClass).length;
		 
		  for (i = 0; i < n; i++) {
              name = $($(html).find("." + FieldClass)[i]).attr("name");
              var val = $($(xmlDoc.documentElement).find('a asetLRGDAta')[j-1]).find(name).text();
              if (val != "") {
              	
              	if ($(html).find("#"+name).length > 0)
              		{
              		
              		$(html).find("#"+name).val(val);
               
               // added by bala Upload Image Show Start
               
               if($(html).find("[data-Validate="+name+"]").length > 0)
               {
              	 FileSplit=val.split('\\');
              	var FileName=FileSplit[FileSplit.length - 3]
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
}   

if($(html).find('[name='+name+']').attr('type')=="checkbox") 
{
	$(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
} 
                
		/*if($("#"+ name).attr('type') == 'checkbox')
				{
				
			
			$("#"+ name).prop("checked",val);
			
			
				}*
				
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
		
	//	if($("#"+ name).prev('ul').length == 0)
			//{
		$(html).find("#"+ name).material_select();
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
              		//if($("#"+ name).prev('ul').length == 0)
  					//{
              		$(html).find("#"+ name).material_select();
  					//}
              		}
              	}
              $(html).find("#"+name).attr("id",name + j);
             // $(html).find("#"+name).attr("id",name + j);
          }
		  $("."+DV).append(html);
		}
	//$("#COBI_CUSID").val($(CUSID).find("Val1").text());
}*/

function GetPropAddress()
{
	var RefId=$("#TPIF_ALTNPROPERTYNO").val();
	var Prcsid=$("#TPIF_PRCSID").val();
	
	var xml=UI_getdata(Prcsid,RefId,"","","","LSW_SGETVALUERPROPADDR")

	 $("#TPIF_ADDRPRPTY").val($(xml).find('PROPADDR').text())
}

function GetPropIIAddress()
{
	var RefId=$("#TPIF_ALTNPROPERTYNO").val();
	var Prcsid=$("#TPIF_PRCSID").val();
	
	var xml=UI_getdata(Prcsid,RefId,"","","","LSW_SGETVALUERIIIPROPADDR")

	 $("#TPIF_ADDRPRPTY").val($(xml).find('PROPADDR').text())
}

function residentaddr()
{
  if($( '#TPIF_SAMEASADDE').is(':checked')==true)
  {
  $('#TPIF_SAMEASADDE').val('Yes');

  document.getElementById('TPIF_DOCPLOTNO').value=document.getElementById('TPIF_PLOTNO').value;
  document.getElementById('TPIF_DOCDOORNO').value=document.getElementById('TPIF_DOORNO').value;
  document.getElementById('TPIF_DOCBUILDNAME').value=document.getElementById('TPIF_BUIDNAME').value;
  document.getElementById('TPIF_DOCSTREETNAME').value=document.getElementById('TPIF_STREETNAME').value;
  
  document.getElementById('TPIF_DOCLOCALITY').value=document.getElementById('TPIF_LOCALITY').value;
  document.getElementById('TPIF_DOCSERVEYNO').value=document.getElementById('TPIF_SERVEYNO').value;
  document.getElementById('TPIF_DOCPINCODE').value=document.getElementById('TPIF_PINCODE').value;
  document.getElementById('TPIF_DOCCITY').value=document.getElementById('TPIF_CITY').value;
  document.getElementById('TPIF_DOCSTATE').value=document.getElementById('TPIF_STATE').value;
  $('.SMADDR').attr('disabled',true)
  $('.ADDR').addClass('active');
  }
  else
  {
	$('#TPIF_SAMEASADDE').val('No');   
	$('.SMDOC').val('');
	$('.SMADDR').attr('disabled',false)
	$('.ADDR').removeClass('active');
  }
}

function DateInspect(XID,YID)
{	
if(XID.value!='')	
{	
var validdt=DateValid(XID);

if(validdt!="")
{
var InspDate=XID.value;

var InitiDate=$('#'+YID).val()

      date = new Date();
    var y = date.getFullYear();
    var res = InspDate.split("/");
    var dd = res[0];
    var mm = res[1];
    var yy = res[2];

var InspecDate=yy+mm+dd

    var Inti = InitiDate.split("/");
     var dd1 = Inti[0];
     var mm1 = Inti[1];
     var yy1 = Inti[2];
     
     
 var InitiateDate=yy1+mm1+dd1
    if(parseInt(InspecDate)<parseInt(InitiateDate))
    	{
    	 window.alert('date inspection should be greater than date initiation');
    	 XID.value="";
    	 XID.nextElementSibling.classList.remove('active');
    	}
}
}
}

function DisburseAmtChk(Disburamt)
{	 
  var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SAPPLILONAMT")
  var LODE_REQLONAMT=$(xml).find('LODE_REQLONAMT').text()
  var LODE_REQLONAMT = Math.floor(LODE_REQLONAMT)
  var DisburAmt=$('#'+Disburamt).val()
  var DisburAmt= DisburAmt.replace(/,/g,'');
   DisburAmt1=Number(DisburAmt)
   if(parseInt(DisburAmt1)>parseInt(LODE_REQLONAMT))
	  {
	    alert('Disbursement recommended amount should not be greater than requested loan amount')
	    $('#'+Disburamt).val('')
	  }
}

//MULTIPLIER Land START
$(document).on("blur", ".LandMin", function() {

		
var Docsqft =$($(this).closest('.tbodytr').find('[data-item=Docu]')[0]).val()
	
var Actsqft=$($(this).closest('.tbodytr').find('[data-item=Actual]')[0]).val()

var value=Math.min(Docsqft, Actsqft);

$($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val(value)


//var EMI = $($(this).closest('.tbodytr').find('[data-item=Amount]')[0]).val().replace(/,/g,"");

//var Value =	parseFloat(MULTIPLIER) * parseFloat(EMI);
	
//$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value));
	
});

$(document).on("blur", ".LandMultp", function() {

	var Area = $($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val()  
			if(Area=="")
	{
		Area=0
	}
	var Rate=$($(this).closest('.tbodytr').find('[data-item=Rate]')[0]).val().replace(/,/g,"");

       if(Rate=="")
	   {
		   Rate='0';
	   }

	var Value =	parseFloat(Area) * parseFloat(Rate);
	$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value))


	//var EMI = $($(this).closest('.tbodytr').find('[data-item=Amount]')[0]).val().replace(/,/g,"");

	//var Value =	parseFloat(MULTIPLIER) * parseFloat(EMI);
		
	//$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value));
		
	});
// MULTIPLIER Land END


//MULTIPLIER Floor START
$(document).on("blur", ".FloorMin", function() {

		
var Docsqft =$($(this).closest('.tbodytr').find('[data-item=Docu]')[0]).val()
	
var Actsqft=$($(this).closest('.tbodytr').find('[data-item=Actual]')[0]).val()

var value=Math.min(Docsqft, Actsqft);

$($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val(value)


//var EMI = $($(this).closest('.tbodytr').find('[data-item=Amount]')[0]).val().replace(/,/g,"");

//var Value =	parseFloat(MULTIPLIER) * parseFloat(EMI);
	
//$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value));
	
});

$(document).on("blur", ".FloorMultp", function() {

	var Area = $($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val().replace(/,/g,"");  
	
	if(Area=="")
	{
		Area=0
	}
	var Rate=$($(this).closest('.tbodytr').find('[data-item=Rate]')[0]).val().replace(/,/g,""); 
	
	if(Rate=="")
	{
		Rate=0
	}
	var Value =	parseFloat(Area) * parseFloat(Rate);
	$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value))


	//var EMI = $($(this).closest('.tbodytr').find('[data-item=Amount]')[0]).val().replace(/,/g,"");

	//var Value =	parseFloat(MULTIPLIER) * parseFloat(EMI);
		
	//$($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val(CURINRCommaSep(Value));
		
	});
// MULTIPLIER Floor END


$(document).on("blur", ".FloorTot", function() {

var AverageLngth = $(this).closest('.tbody').find('[data-item=Docu]').length;

Amount = 0;
val=0;

for (j=0;j<AverageLngth;j++)
{

val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Docu]')[0]).val().replace(/,/g,'');

if (val == "")
	{
	val = 0;
	}

Amount = parseFloat(Amount) + parseFloat(val);

}
Amount=Amount.toFixed(2);
var TotalAverageFld = $(this).attr("data-total1");

$("#"+TotalAverageFld).val(CURINRCommaSep(Amount));

});

$(document).on("blur", ".FloorTot1", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=Actual]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

	//val = $($(this).closest('.tbodytr').find('[data-item=Actual]')[0]).val().replace(/,/g,'');
    val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Actual]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	var TotalAverageFld = $(this).attr("data-total1");

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount));
	
	$($(this).closest('.tbodytrtd')).next().find('input').focusout()

	});

$(document).on("blur", ".FloorTot2", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=Area]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

	//val = $($(this).closest('.tbodytr').find('[data-item=Area]')[0]).val().replace(/,/g,'');
    val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Area]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	var TotalAverageFld = $(this).attr("data-total1");


	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount));

	});

$(document).on("blur", ".FloorTot3", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=Rate]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

	//val = $($(this).closest('.tbodytr').find('[data-item=Rate]')[0]).val().replace(/,/g,'');
  val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Rate]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	var TotalAverageFld = $(this).attr("data-total1");

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount));
	
	$($(this).closest('.tbodytrtd')).next().find('input').focusout()
CalcPropIns();
	});

$(document).on("blur", ".FloorTot4", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=Result]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{
    val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Result]')[0]).val().replace(/,/g,'');
	//val = $($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val().replace(/,/g,'')

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	var TotalAverageFld = $(this).attr("data-total").split("|")[0];

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount).replace(/,/g,''));
	
	var Estim=$(this).attr("data-total").split("|")[1];
	var LndTot=$(this).attr("data-total").split("|")[2];
	
		//added amenties
	
	var Amutiesval=$("#THVD_AMENTIESVAL").val().replace(/,/g,'')

		if (Amutiesval=="")
		{
		Amutiesval=0;
       }
	
	
	var LndVal=$("#"+LndTot+'0').val().replace(/,/g,'')
       if(LndVal=="")
        {
	       LndVal=0
        }

    //  $("#"+Estim).val(CURINRCommaSep(parseFloat($("#"+TotalAverageFld).val())+parseFloat(LndVal)))
        $("#"+Estim).val(CURINRCommaSep(parseFloat($("#"+TotalAverageFld).val())+parseFloat(LndVal)+parseFloat(Amutiesval)))
	});
	
	
	
	

function ADDREMARKROWNO()
{
		var k= $('.NICETOHAVE').find('.DYNROW').length
  		for(i=0;i<k;i++)
  			{
  			//('.BankDetail1').find('.DYNROW')[i]
  		    var	j=i+1
             $("#TVRL_TXTROW"+j).val(j)
  			}	
}





$(document).on("blur", ".TOTVAL", function() {


	Amount = 0;
	val=0;
	
	if($("#Table3").find("tbody tr td").text()!="No data available in table")
	{

    var AverageLngth=$("#Table3").find('tbody tr').length
    
    
	for (j=0;j<AverageLngth;j++)
	{

//	val = $($(this).closest('.tbodytr').find('[data-item=Result]')[0]).val().replace(/,/g,'')
		
		val =$($($("#Table3").find('tbody tr')[j]).find('[data-item=Result]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);
	
	}
	
	
		
		
	var TotalAverageFld ='THVD_CONSTOTVAL';

	$("#"+TotalAverageFld).val(CURINRCommaSep(Amount).replace(/,/g,''));
	
	var Estim='THVD_TOTEXTIMVAL';
	var LndTot='PLAG_LNDTOTVAL';
	
	//	added for Ameties
	var Amutiesval=$("#THVD_AMENTIESVAL").val().replace(/,/g,'')
	
	if (Amutiesval=="")
		{
		Amutiesval=0;
       }
	
	
	
	var LndVal=$("#"+LndTot+'0').val().replace(/,/g,'')
	if(LndVal=="")
	{
		LndVal=0
	}
	
	$("#"+Estim).val(CURINRCommaSep(parseFloat($("#"+TotalAverageFld).val())+parseFloat(LndVal)+parseFloat(Amutiesval)))
	
	});
	
	
function getCivic()
{
	var k=	$("#TPIF_PROXIMITY").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#TPIF_PROXIMITY").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#TPIF_PROXIMITYI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}

function Amenities()
{
	var k=	$("#THSD_AMENITIESPRO").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#THSD_AMENITIESPRO").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#THSD_AMENITIESPROI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}




	
function CheckDEV(DEV,ANY)
{
	var DEVIATION= $('#'+DEV).val()
    if(DEVIATION=='Yes')
    	{
    		  $('#'+ANY).attr('disabled',false)
    		  $('#'+ANY).parent().parent().find(".MndtryAstr").html("*");
    		  $('#'+ANY).addClass('TPIFMndtry');
    		
    	}
    else
    	{
    	  $('#'+ANY).attr('disabled',true)
		  $('#'+ANY).parent().parent().find(".MndtryAstr").html(" ");
    	  $('#'+ANY).removeClass('TPIFMndtry');
		   $('#'+ANY).val('');
		    $('#'+ANY).next().removeClass('active');
    	
    	}

}






function GridControlDetailValuarAMENITIES (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 { targets: 0, "render": function ( data, type, row, meta ) {                            
			
		var rowno = meta.row;	 
		var HTML =	'<span><input type="text" id="TEVL_AMENTIESNAME'+rowno+'"  name="TEVL_AMENTIESNAME" maxlength="100" data-item="Docu" data-total="" class=" NoSpecialChar AMENAME form-control">';			 
		HTML = HTML + '</span>'; 
			 
		var htmldata = $(HTML);
			

		if ($(htmldata).find('[name=TEVL_AMENTIESNAME]').hasClass("IsCURCommaFields"))
			{
			data = CURCommaSep(data);
			}
			
		
			$(htmldata).find('[name=TEVL_AMENTIESNAME]').attr("value",data);

			
			return htmldata[0].outerHTML;      		
			
        } 
		 },
		 { targets: 1, "render": function ( data, type, row, meta ) {                            
	 			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="TEVL_AMENTIESVALUE'+rowno+'"  name="TEVL_AMENTIESVALUE" maxlength="25"   data-item="AMEVAL" class="form-control IsCURCommaFields NoSpecialChar AMENAME IsNumberFields Amenitval form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=TEVL_AMENTIESVALUE]').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=TEVL_AMENTIESVALUE]').attr("value",data);

					
					return htmldata[0].outerHTML;      		
					
		         } 
				 },
				 { targets: 2, "render": function ( data, type, row, meta ) {                            
			 			
						var rowno = meta.row;	 
						var HTML =	'<span><input type="text" id="TEVL_REFID'+rowno+'"  name="TEVL_REFID" maxlength="25" data-total="" data-item="Actual" class="form-control    form-control">';			 
						HTML = HTML + '</span>'; 
							 
						var htmldata = $(HTML);
							

						if ($(htmldata).find('[name=TEVL_REFID]').hasClass("IsCURCommaFields"))
							{
							data = CURCommaSep(data);
							}
							
						
							$(htmldata).find('[name=TEVL_REFID]').attr("value",data);

							
							return htmldata[0].outerHTML;      		
							
				         } 
						 },
						 
			           	  {
			       			 targets: 3, "render": function ( data, type, row, meta ) {
			       				var rowno = meta.row; 
			    
			           				var HTML =	'<span><img src="ThemeproLO/Common/Images/Delete_Img.png"  class="DELETEAMTIES BTNHIDE" title="Delete" attr-Upd="ACTION'+rowno+'"  width="20" height="20"/>';			 
			        				HTML = HTML + '</span>';  
			        				var htmldata = $(HTML);				
			        				return htmldata[0].outerHTML;
			       				

			       				  
			       			 }
			           	  }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
	 
}




//Added for Amenties values


$(document).on("blur", ".Amenitval", function() {

	var AverageLngth = $(this).closest('.tbody').find('[data-item=AMEVAL]').length;

	Amount = 0;
	val=0;

	for (j=0;j<AverageLngth;j++)
	{

   val =$($($("#Table4").find('tbody tr')[j]).find('[data-item=AMEVAL]')[0]).val().replace(/,/g,'');

	if (val == "")
		{
		val = 0;
		}

	Amount = parseFloat(Amount) + parseFloat(val);

	}
	Amount=Amount.toFixed(2);

	$("#THVD_AMENTIESVAL").val(CURINRCommaSep(Amount));

	var Constructval=$("#THVD_CONSTOTVAL").val().replace(/,/g,'')
	var Land=$("#PLAG_LNDTOTVAL0").val().replace(/,/g,'')
	var Amutiesval=$("#THVD_AMENTIESVAL").val().replace(/,/g,'')
	
	if (Constructval == "")
		{
		Constructval = 0;
		}

	if (Land == "")
	{
		Land = 0;
	}
	if (Amutiesval == "")
	{
		Amutiesval = 0;
	}
	
	var totalConstruct = parseFloat(Constructval) + parseFloat(Land)+parseFloat(Amutiesval)
	$("#THVD_TOTEXTIMVAL").val(CURINRCommaSep(totalConstruct))
	
	
	});

function CheckMndtryTotAmenities(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  if(RTNVAL=="")
		  {
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).length>0)
				  {
			if(j==0){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[0]).find('input[type=text]').val()=="")
		             {
			          RTNVAL = "Fill the Amenities";
				    		return RTNVAL;
		             }
			       }
          if(j==0){
	           if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[0]).find('input[type=text]').val() !=""){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[1]).find('input[type=text]').val()=="" ||
				  $($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[1]).find('input[type=text]').val()==0)
		             {
			          RTNVAL = "Fill the Amenities Value in Valuation";
				    		return RTNVAL;
		             }
	              }
                 }
				 else if(j==1)
				 {
					if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[1]).find('input[type=text]').val() !=""){
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[0]).find('input[type=text]').val()=="")
		             {
			          RTNVAL = "Fill the Amenities Name in Valuation";
				    		return RTNVAL;
		             }
	              } 
				 }
				}
			 }
		  }
		 }
	 return RTNVAL;
}


function CalcPropIns()
{
	
	var sqrftval=$("#THVD_CONSAREACONS").val().replace(/,/g,'')
	
	var PropIns=sqrftval*$("#DMY12").val().split("|")[2]
	
	$("#THVD_PROPINS").val(CURINRCommaSep(PropIns))
	$("#THVD_PROPINS").next().addClass('active')
	
}

function CheckPropIns()
{
	var PropIns=$("#THVD_PROPINS").val().replace(/,/g,'')
	var sqrftval=$("#THVD_CONSAREACONS").val().replace(/,/g,'')
	var CalcPropIns=sqrftval*$("#DMY12").val().split("|")[2]
	
	if(parseInt(PropIns)<parseInt(CalcPropIns))
	{
		alert('Property Insurance value should not be lesser than total area consider value,total area consider * 1200')
		$("#THVD_PROPINS").val(CURINRCommaSep(CalcPropIns))
		return false;
	}
	
}

function ChkMultiTenant(Evnt)
{
	var val = Evnt.value
	if(parseFloat(val)>100){
		Evnt.value='';
		alert("Multi Tenant can't be greater than 100");
		return
	}
}



function GetCategory()
{
	var State=UI_getdata($("#PrcsID").val(),$("#PrMs6").val(),"","","","LSW_SGETSTATEDETAILS");
    $("#UCVD_PROPTYPE").val($(State).find("PROTYPE").text());
	$("#UCVD_MACHINERYDOC").val($(State).find("ATTACHMENT").text());
	$("#UCVD_VEHICRCDOC").val($(State).find("RCDOC").text());
	$("#UCVD_VEHICFCDOC").val($(State).find("FCDOC").text());
	var Pro = UI_getdata("Category",$(State).find("STATE").text(),"","","","LSW_SGETPRODVAL");
	
	$("#UCVD_VEHICLASS").html("")
	$("#UCVD_VEHICLASS").append($(Pro).find("RESULT").html());
	if ($("#UCVD_PROPTYPE").val()=='Vehicles')
	{
	$(".vehicles").show();
	$(".Machinery").hide();
	$(".vehiclmndry").addClass('UCVDMndtry')
	$(".machinmndry").removeClass('UCVDMndtry')
	}
	else if ($("#UCVD_PROPTYPE").val()=='Machinery')
	{
	$(".vehicles").hide();
	$(".Machinery").show();
	$(".vehiclmndry").removeClass('UCVDMndtry')
	$(".machinmndry").addClass('UCVDMndtry')
	}
	
	
	
}


function GetBodyTy()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");

	var Pro1 = UI_getdata("BodyType",$(State).find("STATE").text(),$("#UCVD_VEHICLASS").val(),"","","LSW_SGETPRODVAL");
	
	$("#UCVD_BODYTYPE").html('');
	$("#UCVD_BODYTYPE").append($(Pro1).find("RESULT").html());	
	$("#UCVD_BODYTYPE").material_select();
	
	//GetAssetAmt()
}


function GetManufacture()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");

	var Pro2 = UI_getdata("Manufacturer",$(State).find("STATE").text(),$("#UCVD_VEHICLASS").val(),$("#UCVD_BODYTYPE").val(),"","LSW_SGETPRODVAL");
	
	$("#UCVD_MANUFATURE").html("")
	$("#UCVD_MANUFATURE").append($(Pro2).find("RESULT").html());	
	$("#UCVD_MANUFATURE").material_select();
	
	//GetAssetAmt()
}

function GetModel()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");

	var Pro3 = UI_getdata("Model",$(State).find("STATE").text(),$("#UCVD_VEHICLASS").val(),$("#UCVD_BODYTYPE").val(),$("#UCVD_MANUFATURE").val(),"LSW_SGETPRODVAL");
	
	$("#UCVD_MODEL").html("")
	$("#UCVD_MODEL").append($(Pro3).find("RESULT").html());	
	$("#UCVD_MODEL").material_select();
	
	//GetAssetAmt();
}

function GetGrade()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");

	var Pro4 = UI_getdata("Grade",$(State).find("STATE").text(),$("#UCVD_VEHICLASS").val(),$("#UCVD_BODYTYPE").val(),$("#UCVD_MANUFATURE").val()+'|'+$("#UCVD_MODEL").val()+'|',"LSW_SGETPRODVAL");
	
	$("#UCVD_ASSET").html("")
	$("#UCVD_ASSET").append($(Pro4).find("RESULT").html());	
	$("#UCVD_ASSET").material_select();
	
	//GetAssetAmt();
}


function GetAssetAmt()
{
	var State=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETSTATEDETAILS");
    var Year=$("#UCVD_MANUFDT").val();
	var Model=$("#UCVD_MODEL").val();
	var AssAmt = UI_getdata("AssetAmount",$(State).find("STATE").text(),$("#UCVD_VEHICLASS").val(),$("#UCVD_BODYTYPE").val(),$("#UCVD_MANUFATURE").val()+'|'+$("#UCVD_ASSET").val()+'|'+Model+'|'+Year,"LSW_SGETPRODVAL");
	
	if($(AssAmt).find("RESULT").text()=="")
	{
		AssAmt=0;
	}
	else
	{
		AssAmt=$(AssAmt).find("RESULT").text()
	}
	
	AssAmt=CURINRCommaSep(parseFloat(AssAmt).toFixed(0)); 
	
	$("#UCVD_ASSETCOST").val(AssAmt);	
	$("#UCVD_ASSETCOST").next().addClass('active');
	$("#UCVD_ASSETCOST").attr("disabled",true);
}

	$(document).on('click', '.GoBack', function () {
    var ACCORD=''
		  ACCORD=$("#PrMs3").val()
		  RedirectURL=""
		  if(($("#VERTICAL").val()=='MSME Alliance')||($("#VERTICAL").val()=='MSME'))
		  {
		 var   PAGENAME="ViewRpts" 
		  }
		  else{
    var   PAGENAME="UCVViewRpts"
	}
	      RedirectURL = window.location.origin+"/TPLSW/"+PAGENAME+"?PrcsID="+$("#PrcsID").val()+"&ActvID="+$("#ActvID").val()+"&PrMs9=FormPageTab1"+"&PrMs10="+$("#PrMs10").val()+"&PrMs3="+ACCORD+"&PrMs1="+$("#PrMs1").val();
         $(location).attr('href',encodeURI(RedirectURL));
	})
	
	
	
function Datecheck(XID,YID,textalert)
{
if(YID.value!='')	
{
if(XID.value!='')	
{	
	var DATEOFREG=$("#"+XID).val()
	var FCVALID=$("#"+YID).val()

	      date = new Date();
	    var y = date.getFullYear();
	    var DATEOFREG1 = DATEOFREG.split("/");
	    var dd = DATEOFREG1[0];
	    var mm = DATEOFREG1[1];
	    var yy = DATEOFREG1[2];

	var DATEOFREG2=yy+mm+dd

	    var FCVALID1 = FCVALID.split("/");
	     var dd1 = FCVALID1[0];
	     var mm1 = FCVALID1[1];
	     var yy1 = FCVALID1[2];
     var FCVALID2=yy1+mm1+dd1
     
	    if(DATEOFREG2>FCVALID2)
	    	{
	    	 window.alert(textalert);
	    	 $("#"+YID).val('')
	    	}
}
}
}


function Datecheckinsp(XID,YID,textalert)
{

if(YID.value!='')	
{	

     var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKAPPLICATIONDATE")
      var DTINSPECT=$(xml).find('CBSI_APPLCNTDATE').text()



	var DATEOFREG=DTINSPECT
	var FCVALID=$("#"+YID).val()

	      date = new Date();
	    var y = date.getFullYear();
	    var DATEOFREG1 = DATEOFREG.split("/");
	    var dd = DATEOFREG1[0];
	    var mm = DATEOFREG1[1];
	    var yy = DATEOFREG1[2];

	var DATEOFREG2=yy+mm+dd

	    var FCVALID1 = FCVALID.split("/");
	     var dd1 = FCVALID1[0];
	     var mm1 = FCVALID1[1];
	     var yy1 = FCVALID1[2];
     var FCVALID2=yy1+mm1+dd1
     
	    if(DATEOFREG2>FCVALID2)
	    	{
	    	 window.alert('Date of ispection should be greater that Date of initiation');
	    	 $("#"+YID).val('')
	    	}
}
}
