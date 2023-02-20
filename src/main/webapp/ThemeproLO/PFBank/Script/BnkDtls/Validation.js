function CheckPrimAcct(html,id)
{
	var PrimAcct=$(html).find("input[name='BKDT_PRIMARYACCT']:checked"). val();
	var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	if(PrimAcct=="Yes")
		{
		$(".MODE").attr("disabled",true)
		$(".MODE").addClass('disabled');
		$("#BKDT_ACCTTYPE"+row).val('');
		$("#BKDT_ACCTTYPE"+row).material_select("destroy");	
		$("#BKDT_ACCTTYPE"+row).material_select();
		}
	else
		{
		$(".MODE").attr("disabled",false)
		$(".disabled").addClass('MODE');
		$(".disabled").removeClass('disabled');
		$("#BKDT_ACCTTYPE"+row).val('');
		$("#BKDT_ACCTTYPE"+row).material_select("destroy");	
		$("#BKDT_ACCTTYPE"+row).material_select();
		}
}

function Ifscdetls(IDVAL,BNKNAME,BRANCH,CITY,STATE)
{
var val=GetIfsc($(IDVAL).val());
var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
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

if($(val).find("CITY").text() != "")
{
$('#'+CITY+row).val($(val).find("CITY").text());
$('#'+CITY+row).next().addClass('active');
$('#'+CITY+row).attr('disabled',true)
}

if($(val).find("STATE").text() != "")
{
$('#'+STATE+row).val($(val).find("STATE").text());
$('#'+STATE+row).next().addClass('active');
$('#'+STATE+row).attr('disabled',true)
}
}

function CheckLoanType(Prifx1)
{
	var LoanType=$("#APFI_LONTYPE").text()
	
	if(LoanType=="Registered Mortgage")
		{
		  $("."+Prifx1+"DBfields").attr('disabled',true);
		}
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
	//var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
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
		alert($(xml).find("alert").text());
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
    alert('Special characters not allowed in the upload file');
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

function ChequeAvailable(html,id)
{
	
var Cheque=$(html).find("input[name='BKDT_CHEQAVAILABLE']:checked"). val();
	
	if(Cheque=="Yes")
		{
		$(html).find(".ChqAvail").show()
		}
	else
		{
		$(html).find(".ChqAvail").hide()
		}
	
	
	/*var Cheque=$(html).find("input[id="+id+"]:checked").val();
	
	if(Cheque=="Yes")
		{
		$(html).find(".ChqAvail").show()
		}
	else
		{
		$(html).find(".ChqAvail").hide()
		}*/
}


function GetBnkOCRDetls(DOCULRFLD,Type)
{
var docurldata = $("#" + DOCULRFLD).val();
var PRCSID1 = $("#PrcsID").val();
var Prvnt = $("#Prvnt").val();

if (docurldata == "")
	{
	alert("Upload the Cheque to Get the Details");
	return false;
	}

var IOP=LoadFrmXML("RS006");
var doc1 = IOP+docurldata.replace(/\\/g, "/");

$.ajax({
    url: "/TPLSW/TotalKycOCR",
    type: 'POST',
    data: {DOCURL:doc1,PRCSID:PRCSID1,Type:Type,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
    async:true,
   // dataType: 'json',
   // contentType:'application/json',
    
    success: function(stm){        
   // var obj = JSON.parse(JSON.stringify(stm))
    	 var obj = JSON.parse(stm)
    //alert(obj);

     if(obj["status-code"]=='101' || obj["statusCode"]=='101')
     {

    	 $("#BKDT_ACCTHOLDRNAME").val(obj["result"].acc_no);    	 
    	 $("#BKDT_BNKNAME").val(obj["result"].bank);
    	 $("#BKDT_IFSC").val(obj["result"].ifsc);
    	 $("#BKDT_BNKBRCH").val(obj["result"]["bank_details"].branch);
    	
		var ChkFlds = ["BKDT_ACCTHOLDRNAME","BKDT_BNKNAME","BKDT_IFSC","BKDT_BNKBRCH"];
		
		for (i=0;i<ChkFlds.length;i++)
		{
		if ($("#"+ ChkFlds[i]).val() != "")
		    {
			  $("#"+ ChkFlds[i]).attr("disabled",true);
			  $("#"+ ChkFlds[i]).next().addClass("active");
		    }
		else
		    {
			  $("#"+ ChkFlds[i]).attr("disabled",false);
			  $("#"+ ChkFlds[i]).next().removeClass("active");
		    }	
		}

    	// $(".OCRDSBL").attr("disabled",true);
    	//$(".OCRDSBL").next().addClass("active");  	 
 } 
 else if  (obj["status-code"]=='102' || obj["statusCode"]=='102')
 {
 
	 alert("Invalid Cheque");
	 
	 $(".OCRDSBL").val("");
	 $(".OCRDSBL").attr("disabled",false);
	 $(".OCRDSBL").next().removeClass("active");
	 
	 
 }
 else if (obj["status-code"]=='105' || obj["statusCode"]=='105')
	 {
 alert("Error Occured. Contant IT!!!");
	 
	 $(".OCRDSBL").val("");
	 $(".OCRDSBL").attr("disabled",false);
	 $(".OCRDSBL").next().removeClass("active");
	 }
},
error: function(stm) {
	 //window.alert(LoadFrmXML("V0125"))
	alert("Error Occured. Contant IT!!!");	 
	 $(".OCRDSBL").val("");
	 $(".OCRDSBL").attr("disabled",false);
	 $(".OCRDSBL").next().removeClass("active");
	   }
});
}

$(document).on("click", ".PrimAcct", function() {
	//$("input[name='COBI_GENTER']:checked"). val();
	var AcctIIdVal=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='BKDT_PRIMARYACCT']:checked").val();	
	//var AcctIIdVal=$(html).find("input[name="+$(this).attr('name')+"]:checked"). val()
	var AcctIId=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='BKDT_PRIMARYACCT']:checked").attr('id');
	var html=$('.BankDetail1').find(".DYNROW");
    var row = $('.BankDetail1').find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	   var AcctIIId=$($(html).find("input[name='BKDT_PRIMARYACCT']:checked")[i]).attr('id');
	   if(AcctIId!=AcctIIId)
		   {
		   var AcctIIIdVal=$($(html).find("input[name='BKDT_PRIMARYACCT']:checked")[i]).val()
		    if(AcctIIIdVal == AcctIIdVal && AcctIIdVal=="Yes")
		    	{
		    	alert("Primary Account is already selected");
		    	//$(this).val('');
		    	return false;
		    	}
		   }
	 }
});

/*
$(document).on("click", ".PrimAcct", function() {
	//$("input[name='COBI_GENTER']:checked"). val();
	var AcctIIdVal=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='BKDT_PRIMARYACCT']:checked").val();	
	//var AcctIIdVal=$(html).find("input[name="+$(this).attr('name')+"]:checked"). val()
	var AcctIId=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('id');
	var html=$('.BankDetail1').find(".DYNROW");
    var row = $('.BankDetail1').find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	   var AcctIIId=$($(html).find("input[name='BKDT_PRIMARYACCT']:checked")[i]).attr('id');
	   if(AcctIId!=AcctIIId)
		   {
		   var AcctIIIdVal=$($(html).find("input[name='BKDT_PRIMARYACCT']:checked")[i]).val()
		    if(AcctIIIdVal == AcctIIdVal && AcctIIIdVal=='Yes')
		    	{
		    	alert("Primary Account is already selected");
		    	//$(this).val('');
		    	return false;
		    	}
		   }
	 }
});*/


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


function GentrateApplicform()
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()

	var flname = IOP+LoadFrmXML("RT089")+"&__format=pdf&Param1="+PrcsId+"&__filename=Applicationform_"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function GentrateEndUse()
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()

	var flname = IOP+LoadFrmXML("RT090")+"&__format=pdf&@PARAM1="+PrcsId+"&__filename=EndUse_"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}
