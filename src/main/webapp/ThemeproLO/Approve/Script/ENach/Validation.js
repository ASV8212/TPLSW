function AccntOnChng(){
	var op = UI_getdata($("#PrcsID").val(),$("#AEND_ACCNTNO").val(),"","","","LSW_SGETACCNTNO1");
	$("#AEND_BANKNAME").val($($(op).find("BNKNAME")[0]).text());
	$('#AEND_BANKNAME').next().addClass('active');
	$("#AEND_ACCNTHLDRNAME").val($(op).find("HOLDERNAME").text())
	$("#AEND_ACCNTHLDRNAME").next().addClass('active')
}

function GentrateENACH()
{
	if($("#AEND_ACCNTNO").val()=="")
		{
         alert('select the customer name')
		return false;
		}
		
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	var AcctNo=$("#AEND_ACCNTNO").val()
    var LonID=$("#AEND_LOANID").val();
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT086")+"&__format=pdf&Param1="+PrcsId+"&Param2="+AcctNo+"&Param3="+LonID;
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function LoadENACHStatus(){
	var op=UI_getdata($("#PrcsID").val(),$("#AEND_LOANID").val(),'','','','LSW_SCHKENACHHITTIME');
	var RES= $(op).find("RESULT").text()
	var MSG= $(op).find("MSG").text()
	if(RES=="S" || RES=="N")
	{
	
	$(".CallbackStatus").text('E-NACH STATUS : '+$(op).find("MSG").text());
	/* $(".CallbackStatus").$(op).find("FLAG").text()+'<span style="font-weight:700">'+$(op).find("MSG").text()+'</span>'; */
	}
	else 
	{
	
	$(".CallbackStatus").text('E-NACH STATUS : '+RES);
	/* $(".CallbackStatus").$(op).find("FLAG").text()+'<span style="font-weight:700">'+$(op).find('INPROGRESS').text()+'</span>'; */
	
	}

	//$($(html).find(".CallbackStatusHolder")).find("span").text($(op).find("FLG").text());
}
function ENACHStatus(){
	var op=UI_getdata($("#PrcsID").val(),$("#AEND_LOANID").val(),'','','','LSW_SCHKENACHHITTIME');
	var RES= $(op).find("RESULT").text()
	var MSG= $(op).find("MSG").text()
	if(RES=="S" || RES=="N")
	{
	var RES= $(op).find("MSG").text()
	$(".CallbackStatus").text('ENACH STATUS : '+$(op).find("MSG").text());
	/* $(".CallbackStatus").$(op).find("FLAG").text()+'<span style="font-weight:700">'+$(op).find("MSG").text()+'</span>'; */
	}
	else 
	{
	var RES=$(RESULT).find("MSG").text()
	$(".CallbackStatus").text('ENACH STATUS : '+RES);
	/* $(".CallbackStatus").$(op).find("FLAG").text()+'<span style="font-weight:700">'+$(op).find('INPROGRESS').text()+'</span>'; */
	
	}
	alert(RES);
	return;
	//$($(html).find(".CallbackStatusHolder")).find("span").text($(op).find("FLG").text());
}

function ChkENACH(Verify,uniqid,urmno,Status)
{
	if($("#AEND_CHNLTYP").val()=="")
    {
		alert("Channel Type is Mandatory to Initiate E-NACH");
		return;
	}
	if($("#AEND_ENACHURMNO").val()=="")
    {
    	
	
	 var output=UI_getdata($("#PrcsID").val(),$("#AEND_LOANID").val(),'','','','LSW_SCHKENACHHITTIME');
	var RES= $(output).find("RESULT").text()
	var MSG= $(output).find("MSG").text()
	
	if(RES=="N")
	{
	 alert(MSG)
	 return;
	} 
	else
	{
	if(confirm("Do you want to initiate the enach process?") == true) 
	{
	var PRCSID = $("#PrcsID").val();
	 $("#Save1").click();
	 
	 
	 
	$.ajax({
	    url: "/TPLSW/EmandateAPI",
	    type: 'POST',
	    data: {SPNAME:"LSW_SEMANDATEAPICREATE",Param1:$("#AEND_LOANID").val(),Param2:"Create",Param3:$("#AEND_ACCNTNO").val(),Param4:"",PRCSID:PRCSID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	    async:true,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	    success: function(stm){        
	   // var obj = JSON.parse(JSON.stringify(stm))
	   //var OP=stm.split('|')[3]
	    	if (stm == "")
	    		{
	    		   alert("E-NACH Failed");
	    		   $("[data-Validatedata="+Verify+"]").text('E-NACH Failed');
	    		   $("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	    		   $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		   $("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	    		   $("#"+Verify).val('Failed')
	    		     return;
	    		}
				else if(stm.split('~')[0]=="Success")
	    		{
					alert("E-NACH Initiated");
					//var xml=UI_getdata($("#PrcsID").val(),stm,"","","","LSW_SENACHLINK");
				  $("[data-Validatedata="+Verify+"]").text('E-NACH Initiated');
	    		  $("[data-Validatedata="+Verify+"]").addClass("btn-GrnInplain");	
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-RedInplain"); 
	    		  $("#"+Verify).val('Success')
				  $("#"+uniqid).val(stm.split('~')[1])
				   $("#Save1").click();
				   var output=UI_getdata($("#PrcsID").val(),$("#AEND_LOANID").val(),"Y",'','','LSW_SCHKENACHHITTIME');
					var RES= $(output).find("Result").text()
				//  $("#"+Status).val(OP.split('*')[1])
				//  $("#"+Verify).val(OP.split('*')[0])
				}
				else
				{
				  alert("E-NACH Failed");
				  alert(stm.split('~')[0]);
				  $("[data-Validatedata="+Verify+"]").text('E-NACH Failed');
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		  $("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	    		  $("#"+Verify).val('Failed')
				   $("#Save1").click();
				 // $("#"+uniqid).val(OP.split('*')[2])
				 // $("#"+Status).val(OP.split('*')[1])
				  //$("#"+Verify).val(OP.split('*')[0])
				}
		},
	error: function(stm) {
		 //window.alert(LoadFrmXML("V0125"))
		alert("E-NACH Failed");
		return false;
		   }
	});
	 }
	 }
	}			  
	else
	{
		alert('Bank Account for Repayment is Mandatory')
		return false;
	}

	window.location.reload();
}

function ChkENACHStatus()
{

var xmlop=UI_getdata($("#PrcsID").val(),$("#AEND_LOANID").val(),"","","","LSW_SCHECKLOANTY")
 var output=UI_getdata($("#PrcsID").val(),$("#AEND_LOANID").val(),'','','','LSW_SCHKENACHHITTIME');
	var MSG= $(output).find("STAUSMSG").text()
	if(MSG=="R")
	{
	if($(xmlop).find('ENACHUID').text()!="")
	  {
	         if($("#AEND_ENACHURMNO").val() == "")
				{
	                  var PRCSID = $("#PrcsID").val();
	            $.ajax({
	    url: "/TPLSW/EmandateAPI",
	    type: 'POST',
	    data: {SPNAME:"LSW_SEMANDATEAPICREATE",Param1:$(xmlop).find('ENACHUID').text(),Param2:"Get",Param3:$("#AEND_LOANID").val(),Param4:"",PRCSID:PRCSID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	    async:true,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	    success: function(stm){  
			  if(stm == "")
	    		{
					//alert('E-NACH Failed')
					//return false;
				}
             else if(stm.split("~")[0]=="Failed")
	    		{
                 // alert(stm.split("~")[1])
				  //return false;
				}
				else if (stm.split("~")[0]=="Success")
	    		{
					if(stm.split("~")[1]!="")
					{
				      $("#AEND_ENACHURMNO").val(stm.split("~")[1])
					  $("#AEND_ENACHURMNO").next().addClass('active');
					  
                    //alert(stm.split("|")[3]+'. UMR No -'+stm.split("|")[2])
					}
					else
					{
					  //alert(stm.split("|")[3])	
					}
				}				   
			   },
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                // alert("E-NACH Failed.");
						 //	return false;
		                   }
	               });
			   }
	  }
	  }
	ENACHStatus();
		window.location.reload();
}
function addMonths() {
    	 var Date1=$("#DMY7").val().split('|')[1]
		 
         //var Date2=Date1.replaceAll('/','-')
         var Date2=Date1.replace(/[/]/g,'-')

		 var date3 = new Date(Date2.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
var newDate = new Date(date3.setMonth(parseInt(date3.getMonth())+parseInt($("#DMY3").val().split('|')[4])));
var year = newDate.getFullYear();
  var month = (1 + newDate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = newDate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  $("#AEND_ENDDATE").val(day + '/' + month + '/' + year)
}
function DocFldUpldHndlr(id,docu,KYCName)
{
var Val=$(id).val()

if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'Collection';
  // var CusID=$('#CBSI_CUSID').val()
    var CusID='PF'
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
	 
        var Filename  = names.replace(',','')
		var xml=UI_getdata(FileType,FileSize,Filename,"","","LSW_SGETDOCUMNTSIZE")
		var FileAccept=$(xml).find('RESULT').text()
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    }
names=names.slice(0,-1)+'.'+FileType
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
    alert('Special characters not allowed in the upload file');
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


