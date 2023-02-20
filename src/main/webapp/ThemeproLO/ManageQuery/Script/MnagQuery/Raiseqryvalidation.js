var QueryTypFlg="";
function RAISEQUERY(id)
{
	
	
	var html=$(id).closest('.RAISE')
	      
				
	var  MndtryChk = ChkMandatoryFlds_V1("MNGOMndtry",html);	
	          if(MndtryChk == "Mandatory")
				{
				 alert("Fill the Mandatory Fields");
				 return false;
				}	
				
				
	   var TouserName=	$('.RAISE').find($("#MNGQ_TOUSRIDI").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
	
	/* if(TouserName=="")
	    {
  	      alert ('Enter the Query To')
  	      return false
        }
		
		
	   if($("#DMY5").val().split("|")[2]!="OPSQD")
		{
	  var Remarks=$('.RAISE').find("#MNGQ_DESC").val()
	  
	  if(Remarks=="")
	    {
  	      alert ('Enter the Remarks')
  	      return false
        }
		}*/
		var TOUSERID =$('.RAISE').find("#MNGQ_TOUSRIDI").val()
	  $('.RAISE').find("#MNGQ_TOUSRID").val(TOUSERID.split("-")[0]);
	  $('.RAISE').find("#MNGQ_CATGRY").val(TOUSERID.split("-")[1]);
		
		if($("#MNGQ_CATGRY").val()=="User"){
	  $('.RAISE').find("#MNGQ_TOUSRNAME").val(TouserName.split("-")[0]);
	  $('.RAISE').find("#MNGQ_TOUSRROLE").val(TouserName.split("-")[1]);
		}
		else if($("#MNGQ_CATGRY").val()=="Role"){
			$('.RAISE').find("#MNGQ_TOUSRNAME").val(TouserName);
			$('.RAISE').find("#MNGQ_TOUSRROLE").val(TouserName);
		}
	  
	   var Attach=$('.RAISE').find("#MNGQ_ATTCHURLI").val();
	   $('.RAISE').find("#MNGQ_ATTCHURL").val(Attach);
	  
	  $('.RAISE').find("#MNGQ_FRMUSRID").val($('#LogUsr').val());
	  $('.RAISE').find("#MNGQ_PRCSID").val($("#PrcsID").val());
	  
	//  var MNGQ_QURYNAME=$('.RAISE').find($("#MNGQ_SECTNID").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
	//  $('.RAISE').find("#MNGQ_QURYNAME").val(MNGQ_QURYNAME);
	  
	  var MNGQ_APPLNNAME=$('.RAISE').find($("#MNGQ_APPLNO").find('active').prevObject["0"].selectedOptions).find('option').prevObject[0].text
	  $('.RAISE').find("#MNGQ_APPLNNAME").val(MNGQ_APPLNNAME);
	  
	  if(($("#DMY5").val().split("|")[2]=="OPS"||$("#DMY5").val().split("|")[2]=="OPSQD") && $('.FormPageSubTab li.active a div').text()=="Disbursement Checklist" && QueryTypFlg=="DisbChkLst")
		{
			
			var xml=UI_getdata($("#PrcsID").val(),TOUSERID,$('#LogUsr').val(),"",$("#DMY5").val().split("|")[2],"LSW_SPUSHDATATOQRYTBL3");
	        var RESULT=$(xml).find('RESULT').text();
	  
	if(RESULT=="SUCCESS")
	 {
      $(".close").click();
	 // location.reload(true);
	    if($("#PrMs5").val()!="")
 	    {
    	  location.reload(true);
        }
	  
     }
	else
	  {
		alert(RESULT)
	}
		}
	  else
	  {
	  var FormXML =submitdata("MNGODBfields");
	var xml=UI_getdata(FormXML,"","","","","LSW_SPUSHDATATOQRYTBL1");
	var RESULT=$(xml).find('RESULT').text();
	  
	if(RESULT=="SUCCESS")
	 {
      $(".close").click();
	 // location.reload(true);
	    if($("#PrMs5").val()!="")
 	    {
    	  location.reload(true);
        }
	  
     }
	else
	  {
		alert(RESULT)
	}
	  }
}




function QUERYAPPLICNTS()
{
	if($('.RAISE').find("#MNGQ_TYP").val()=="Applicant")
	{
		$('.RAISE').find(".QRYDETAILS").show()
        var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETQURYAPPLICANTS")
		$('.RAISE').find("#MNGQ_APPLNO").val('')
	    $('.RAISE').find("#MNGQ_APPLNO").empty();
		$('.RAISE').find("#MNGQ_APPLNO").append($(xml).find("RESULT").html());
		$('.RAISE').find("#MNGQ_APPLNO").material_select(); 
		$('.RAISE').find("#MNGQ_APPLNO").addClass('MNGOMndtry');
		
	}
	 else
    {
		 $('.RAISE').find(".QRYDETAILS").hide()
		 var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETQURYAPPLICANTS")
		 $('.RAISE').find("#MNGQ_APPLNO").append($(xml).find("APPLINO").html());
		 $('.RAISE').find("#MNGQ_APPLNO").material_select(); 
		 $('.RAISE').find("#MNGQ_APPLNO").removeClass('MNGOMndtry');
		
     }
	
}




function DocFldUpldHndlrRAISEQRY(id,docu,KYCName)
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
     var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
	 

		var xml=UI_getdata(FileType,FileSize,"","","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert("File Size not matched")
		return
    }
	
	  names=names.slice(0,-1)+'.'+FileType	
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
				$('.DDV').show();
				$('.rounded1').show();
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








