
function  GridEnableControl(popTableModPageGrid1)
{
	popTableModPageGrid1.MakeCellsEditable({
           // "onUpdate": myCallbackFunction,
            "inputCss":'my-input-class',
            "columns": [1,2],
            /*"allowNulls": {
                "columns": [1],
                "errorClass": 'error'
            },*/
            "confirmationButton": { 
                "confirmCss": 'my-confirm-class',
                "cancelCss": 'my-cancel-class'
            },
    		"inputTypes": [
                
                {
                    /*"column":1, 
                    "type": "list",
                    "options":[
                        { "value": "PAN", "display": "PAN" },
                        { "value": "Voter ID", "display": "Voter ID" },
                        { "value": "Driving License", "display": "Driving License" },
                        { "value": "Aadhar", "display": "Aadhar" },
                        { "value": "Passport", "display": "Passport" },
                        { "value": "Electricity Bill", "display": "Electricity Bill" },
                        { "value": "Utility Bill", "display": "Utility Bill" }
                    ]*/
                	 "column":1, 
                     "type": "radio",
                     "options":[
                         { "value": "Yes", "display": "NAGATIVEYES","name":"NAGATIVESTATUS" },
                         { "value": "No", "display": "NAGATIVENO","name":"NAGATIVESTATUS" },
                    
                     ]
                },
                {
                    "column":2, 
                    "type": "text",
                    "options":{ }
                },
                /*{
                    "column": 6,
                    "type": "datepicker", // requires jQuery UI: http://http://jqueryui.com/download/
                    "options": {
                        "icon": "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" // Optional
                    }
                }*/
    			
            ]
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
/*
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
}   

if($(html).find('[name='+name+']').attr('type')=="checkbox") 
{
	$(html).find('[name='+name+'][value="'+val+'"]').prop('checked', true);
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
}

function Pindetls(idval,state,city,Distric)
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
$('#'+Distric).attr('disabled',true)
$('#'+Distric).val($(val).find("Districtname").text());
$('#'+Distric).next().addClass('active');
}
else
{
$('#'+Distric).attr('disabled',true)
$('#'+Distric).val('');
$('#'+Distric).next().removeClass('active');
$(idval).val('');
}
if($(val).find("Taluk").text()!="")
{
$('#'+city).attr('disabled',true)
$('#'+city).val($(val).find("Taluk").text());
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

function ADDROWNO()
{
	var k= $('.MUSTTOHAVE').find('.DYNROW').length
	
	if($("#LERP_MAXTEXTROW").val()=="")
      {
		$("#LERP_MAXTEXTROW").val(k)
      }
       
	$("#LEMU_TXTROW"+k).val($("#LERP_MAXTEXTROW").val())
        
    var j=$("#LERP_MAXTEXTROW").val()  
  	var j=Number(j)+1
	$("#LERP_MAXTEXTROW").val(j) 
	
}


function ADDROWNONICE()
{
		var k= $('.NICETOHAVE').find('.DYNROW').length
  		for(i=0;i<k;i++)
  			{
  			//('.BankDetail1').find('.DYNROW')[i]
  		    var	j=i+1
             $("#LRND_TXTROW"+j).val(j)
  			}	
}


