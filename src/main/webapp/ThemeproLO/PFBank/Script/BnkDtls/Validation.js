function CheckPrimAcct(html,id,Event)
{
	var PrimAcct=$(html).find("input[name='BKDT_PRIMARYACCT']:checked"). val();
	if(Event=="Load")
	{
		var row=id
		if(PrimAcct=="Yes")
		{
		$(html).find(".MODE").attr("disabled",true)
		$(html).find(".MODE").addClass('disabled');
		//$("#BKDT_ACCTTYPE"+row).val('');
		//$("#BKDT_ACCTTYPE"+row).material_select("destroy");	
		//$("#BKDT_ACCTTYPE"+row).material_select();
		}
	else
		{
		$(html).find(".MODE").attr("disabled",false)
		//$(html).find(".disabled").addClass('MODE');
		$(html).find(".disabled").removeClass('disabled');
		//$("#BKDT_ACCTTYPE"+row).val('');
		//$("#BKDT_ACCTTYPE"+row).material_select("destroy");	
		
		}
	}
	else
	{
	var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	
	if(PrimAcct=="Yes")
		{
		$(html).find(".MODE").attr("disabled",true)
		$(html).find(".MODE").addClass('disabled');
		$("#BKDT_ACCTTYPE"+row).val('');
		$("#BKDT_ACCTTYPE"+row).material_select("destroy");	
		$("#BKDT_ACCTTYPE"+row).material_select();
		}
	else
		{
		$(html).find(".MODE").attr("disabled",false)
		$(html).find(".disabled").addClass('MODE');
		$(html).find(".disabled").removeClass('disabled');
		$("#BKDT_ACCTTYPE"+row).val('');
		$("#BKDT_ACCTTYPE"+row).material_select("destroy");	
		$("#BKDT_ACCTTYPE"+row).material_select();
		}
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
				$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find(".MODE").attr("disabled",false)
		        $($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find(".disabled").removeClass('disabled');
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

	var flname = IOP+LoadFrmXML("RT089")+"&__format=pdf&Param1="+PrcsId+"&Param2="+$("#DMY7").val().split("|")[8]+"&__filename=Applicationform_"+$("#DMY7").val().split("|")[7]+".pdf";
	
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

	var flname = IOP+LoadFrmXML("RT090")+"&__format=pdf&@PARAM1="+PrcsId+"&@PARAM2="+$("#DMY7").val().split("|")[8]+"&__filename=EndUse_"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}
function ODCC(html,acctype)
//function ODCC(html)
{
//var acctype=$(html).find("input[name='BKDT_ACCTTYPE']"). val();
//var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
var acctype=$(acctype).val();
//var acctype=($(html).find("input[select='BKDT_ACCTTYPE']").val())
if((acctype=="Over Draft Account")||(acctype=="Cash Credit"))
{
$(html).find(".ODCC").show()
//$('.ODCC').show();
$(html).find("input[name='BKDT_SANCTIONLIM']").addClass('BKDTMndtry')
$(html).find("input[name='BKDT_DRAWPWR']").addClass('BKDTMndtry')
}
else
{
$(html).find('.ODCC').hide();
$(html).find("input[name='BKDT_SANCTIONLIM']").removeClass('BKDTMndtry')
$(html).find("input[name='BKDT_DRAWPWR']").removeClass('BKDTMndtry')
}
}


function ODCCLOAD(html)
//function ODCC(html)
{
//var acctype=$(html).find("input[name='BKDT_ACCTTYPE']"). val();
//var row=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).attr('data-row');
//var acctype=$(acctype).val();
var acctype=$(html).find("select[name='BKDT_ACCTTYPE']").val()
if((acctype=="Over Draft Account")||(acctype=="Cash Credit"))
{
$(html).find(".ODCC").show();
//$('.ODCC').show();
$(html).find("input[name='BKDT_SANCTIONLIM']").addClass('BKDTMndtry')
$(html).find("input[name='BKDT_DRAWPWR']").addClass('BKDTMndtry')
}
else
{
$(html).find('.ODCC').hide();
$(html).find("input[name='BKDT_SANCTIONLIM']").removeClass('BKDTMndtry')
$(html).find("input[name='BKDT_DRAWPWR']").removeClass('BKDTMndtry')
}
/* 
var Stdate=$(html).find("select[name='BKDT_STDATE']").val()
var Endate=$(html).find("select[name='BKDT_ENDDATE']").val()
if(Stdate!='') */


}

function Chkbutton(html,id)
{
	$(html).find("input[name=BKDT_INITIATEBSA]").val('Initiated');
	$(html).find(".Auto").show()
	$(html).find(".Rpt").show()
	$(html).find("#InitiateBSA").hide();
	$(html).find("#Save").click();
	
}

function NetBankingInteg(Type,BnkID,StDate,EndDate,html,Process)
{
	var OP=""
	//var Netbankstat = $(html);
	if($("#"+StDate).val()=="" || $("#"+EndDate).val()=="")
	{
		alert('Start Date and End Date is Mandatory');
		return false;
	}
	//$("#Save").click();
	/* $(html).find("#BKDT_TRANSACTIONSTATUS").val(Type);
	$(html).find(".Auto").hide(); */
	$("#"+Process).val(Type)
	if(Type=="Statement")
	{
	  $("#"+Process).closest(".DYNROW").find("#save").click();
	  $($(html).find(".Auto").find(".col-md-4")[1]).hide();
	  $($(html).find(".Auto").find(".col-md-4")[2]).hide();
      //$(html).find(".Auto").find(".col-md-4")[1]).hide();
	  //$(html).find(".Auto").find(".col-md-4")[2]).hide();
	}
	else if(Type=="NetBanking")
	{
      $("#"+Process).closest(".DYNROW").find("#save").click();
	  $($(html).find(".Auto").find(".col-md-4")[0]).hide();
	  $($(html).find(".Auto").find(".col-md-4")[2]).hide();
      //$(html).find(".Auto").find(".col-md-4")[0]).hide();
	  //$(html).find(".Auto").find(".col-md-4")[2]).hide();
	}
	//$(html).find("#Save").click(); 
	 var RES= UI_getdata($("#PrcsID").val(),$("#BKDT_CUSID").val(),"","","","LSW_SCHKSTDATENDATINBNK")
	if ($(RES).find("Result").text()=="N")
	{
		alert('Kindly save');
		return false;
	} 
    var w = "600";
    var h = "500";
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	
if(Type=="NetBanking")	
{
	var URL=window.location.origin+"/TPLSW/BankingPage?Type="+Type+"&PRCSID="+$("#PrcsID").val()+"&CUSID="+$("#BKDT_CUSID").val()+"&BNKID="+$("#"+BnkID).val()+"&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val();
	//OP=URL.responseText;					
				//	OP=JSON.parse(OP);
					
	var opsendnotification = UI_getdata($("#PrcsID").val(),URL,"","","","LSW_SSENDNOTIFICATION");
	if($(opsendnotification).find("Result").text()=="Success")
	{
		alert("Link send successfully");	
	}
	else{
		alert($(opsendnotification).find("Result").text());
	}
	
	/***var OPxml=UI_getdata($("#PrcsID").val(),URL,"","EMAIL","","LSW_SSENDNETBANKLNK");
		if($(OPxml).find("Result").text()=="Success")
				{
					UI_getdata($("#PrcsID").val(),URL,"","","Video KYC Bank Statement","LSW_SSMSEMAILLINKSND");
				   alert("Link send successfully");	
				}
				else
				{
					
				}	***/
									
}
else
{
  var URL=window.location.origin+"/TPLSW/BankingPage?Type="+Type+"&PRCSID="+$("#PrcsID").val()+"&CUSID="+$("#BKDT_CUSID").val()+"&BNKID="+$("#"+BnkID).val()+"&Prvnt="+$(window.parent.parent.document).find("#Prvnt").val();	

	$(".loader").show();	  
	childWindow = window.open(URL, Type, 'toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, copyhistory=no, //width='+w+', height='+h+', top='+top+', left='+left);
}
}
$('.CollectedPage').on('click', function() {
   //location.reload();
   $(".FormPageMultiTab").find("li.active").click();

 //window.location.reload()
});


function DateValidate(XID,YID)
{
if(YID.value!='')	
{
if(XID.value!='')	
{	
	var STDATE=$("#"+XID).val()
	var ENDDATE=$("#"+YID).val()


	const stdate = $("#"+XID).val();
	const [day, month, year] = stdate.split("/");
	const stnewDate = `${month}/${day}/${year}`
	
	const endate = $("#"+YID).val();
	const [eday, emonth, eyear] = endate.split("/");
	const ennewDate = `${emonth}/${eday}/${eyear}`
	
	var enresult = new Date(ennewDate);
    var enfinresult=enresult.setMinutes(enresult.getMinutes() - enresult.getTimezoneOffset());
	
	var stresult = new Date(stnewDate);
    var stfinresult=stresult.setMinutes(stresult.getMinutes() - stresult.getTimezoneOffset());
	
	var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var dat=(enfinresult - stfinresult) / millisecondsPerDay;
	d1 = new Date(stnewDate);
	d2 = new Date(ennewDate);
	var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
	if(months>12 || dat>365)
	{
		alert("Start date and End date should not greater than 12 months")
		$("#"+YID).val('')
		return false;
	}
	
	      date = new Date();
	    var y = date.getFullYear();
	    var STDATE1 = STDATE.split("/");
	    var dd = STDATE1[0];
	    var mm = STDATE1[1];
	    var yy = STDATE1[2];

	var STDATE2=yy+mm+dd

	    var ENDDATE1 = ENDDATE.split("/");
	     var dd1 = ENDDATE1[0];
	     var mm1 = ENDDATE1[1];
	     var yy1 = ENDDATE1[2];
     var ENDDATE2=yy1+mm1+dd1
     
	    if(STDATE2>ENDDATE2)
	    	{
	    	 window.alert('End Date should not be less than Start Date');
	    	 $("#"+YID).val('')
	    	}
}
}
}

function Monthdiff(XID,YID)
{
	//d1 = new Date($("#"+XID).val());
	//d2 = new Date($("#"+YID).val());
	var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function GridControlDetailBANKGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm,htmlrow)
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
			
			 var rowno = htmlrow+TableID+meta.row;	 
				var HTML =	'<span><input type="text" disabled id="BKDG_MONTH'+rowno+'" style="width:200px"  name="BKDG_MONTH'+rowno+'"  class="form-control DSVLBL BKDGDBfields form-control">';			 
				HTML = HTML + '</span>'; 
					 
					var htmldata = $(HTML);
					
				if ($(htmldata).find('[name=BKDG_MONTH'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					$(htmldata).find('[name=BKDG_MONTH'+rowno+']').attr("value",data);
					return htmldata[0].outerHTML;   		
		           } 
				 },
		{ targets: 2, "render": function ( data, type, row, meta ) {                            
   	 		 
    			var rowno = htmlrow+TableID+meta.row;	 
    			if (data == "")
    				{
    		
    				var HTML="";
    				
				
						HTML =	'<span id=""><img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="BKDG_1UPLD'+rowno+'"  width="20" height="20"/>';	
				
    	    		HTML = HTML + '<input style="display:none" id="BKDG_1UPLD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(BKDG_UPLD'+rowno+',id,'+htmlrow+')" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" style="display:none" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="BKDG_UPLD'+rowno+'" hidden="hidden" name="BKDG_UPLD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    				    	 
    			 return HTML;
				 }
				 else
				 {
				 var HTML='<span id="">';
    				
				if(row[6] == "")
				{
						HTML =	HTML+'<img src="ThemeproLO/Common/Images/UploadImg.png" class="GridDocUpd" title="UPLOAD" attr-Upd="BKDG_1UPLD'+rowno+'"  width="20" height="20"/>';	
				}
				else{
					HTML =	HTML+'<img src="ThemeproLO/Common/Images/UploadImg.png" style="display:none" class="GridDocUpd" title="UPLOAD" attr-Upd="BKDG_1UPLD'+rowno+'"  width="20" height="20"/>';	
				}
    	    		HTML = HTML + '<input style="display:none" id="BKDG_1UPLD'+rowno+'" class="GridDocFil" onchange="HndlUpldAfrLod(BKDG_UPLD'+rowno+',id,'+htmlrow+')" type="file" />';
    	    			HTML = HTML + '<img src="ThemeproLO/Common/Images/Eyeview.png" title="VIEW" class="ViewAttch" width="35" height="25">';
    	    				HTML = HTML + '<input type="text" value="'+data+'" id="BKDG_UPLD'+rowno+'" hidden="hidden" name="BKDG_UPLD'+rowno+'" class="form-control"/>';
    	    						HTML = HTML + '</span>';	
    				    	 
    			 return HTML;
				 }
             } 
    		 },
		{ targets: 3, "render": function ( data, type, row, meta ) {                            
       			
       				
       				var rowno = htmlrow+TableID+meta.row;	 
    				var HTML =	'<span>';
					if(row[6] == "")
					{
						HTML = HTML+'<button type="button" id="BKDG_INTEGBTN'+rowno+'" onclick="ManualStatementUpload(this)" data-quey-sec="S01" data-aria="" data-form="PersonalInfo" class="btn btn-Syeloutline waves-effect waves-light">Sent for Analysis</button>';			 
					}
					else
					{
						HTML = HTML+'<button type="button" id="BKDG_INTEGBTN'+rowno+'" disabled onclick="ManualStatementUpload(this)" data-quey-sec="S01" data-aria="" data-form="PersonalInfo" class="btn btn-Syeloutline waves-effect waves-light">Sent for Analysis</button>';			 
					}
    				HTML = HTML + '</span>'; 	 
    				var htmldata = $(HTML);								
    				return htmldata[0].outerHTML; 
		}},
			{ targets: 6, "render": function ( data, type, row, meta ) {                            
       			
       				
       				var rowno = htmlrow+TableID+meta.row;	  
    				var HTML =	'<span>';			 
					HTML = HTML + '<input style="display:none" id="BKDG_UPLOADREP'+rowno+'" name="BKDG_UPLOADREP'+rowno+'"  type="text" />';
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
 function HndlUpldAfrLod(id,docu,HTML)
 {

 var Val=$(id).val()

var finalhtml = "";
for(var zxy=0;zxy<$(".BankDetail1").find(".DYNROW").length;zxy++)
{
	if(parseInt($($(".BankDetail1").find(".DYNROW")[zxy]).attr("data-row")) == parseInt(HTML))
	{
		finalhtml=$(".BankDetail1").find(".DYNROW")[zxy]
	}
}
 if($($(finalhtml).find(id)).closest('td').find('input[type="file"]').val()!="")
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
       file_data = $($(finalhtml).find(id)).closest('td').find('input[type="file"]')[0].files; // for multiple files
 	     for(var i = 0;i<file_data.length;i++){
 			var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
 	         fd.append("file_"+c, file_data[i]);
 	         names += $($(finalhtml).find(id)).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[0]+',';
 			 flsize += parseFloat($($(finalhtml).find(id)).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2)+',';
 			 vrsnno += $(op).find("VR").text()+',';
 			 if($($('input[type="file"]')[c]).closest('tr').find("#comments").val()=="")
 			 {
 				 $($('input[type="file"]')[c]).closest('tr').find("#comments").val("No Description");
 			 }
 	         descrptns += 'FieldDocument'+',';
 	     }
 	 }
 	 

  	 var FileSize=parseFloat($($(finalhtml).find(id)).closest('td').find('input[type="file"]')[0].files[0].size/1024).toFixed(2);
      var FileType= $($(finalhtml).find(id)).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
 	 

 	 

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
 	$($(finalhtml).find(id)).closest('td').find('input[type="file"]').val('')
 	
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
 				$($(finalhtml).find(id)).val(data.split('~')[2])
 				

 					ajaxindicatorstop();
 					alert(LoadFrmXML("V0118"));
 					$("#HIDDENIPLDST").val('Success');
					$($(finalhtml).find(id)).closest('td').find(".GridDocUpd").hide();
					$($(finalhtml).find(id)).closest('td').find('.ViewAttch').show()
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
 
 function BANKGRD(html)
{
var MODE=$(html).find("select[name='BKDT_MODE']").val()
if(MODE=="Manual")
{
$(html).find(".MODEMANUAL").show();
$(".MANU").addClass('BKDTMndtry');
}
else
{
$(html).find('.MODEMANUAL').hide();
$(".MANU").removeClass('BKDTMndtry');
}

$(html).find("#save").click();
$(html).find("[name=BTNBANKGRD]").click()
}

function ManualStatementInit(BankID,CusID,ProcessMode,Evnt){
	var ManualStmt = $(Evnt);
	if(confirm("Are you sure to Process the Bank Statement Analysis Through - Manual Statement"))
	{
		$("#"+ProcessMode).val("Manual Statement");
		$("#"+ProcessMode).closest(".DYNROW").find("#save").click();
		$($(ManualStmt).closest(".Auto").find(".col-md-4")[0]).hide();
		$($(ManualStmt).closest(".Auto").find(".col-md-4")[1]).hide();		
		$.ajax({
			url: "/TPLSW/manualStatement-Initiation",
			data: {PrcsID:$("#PrcsID").val(),CusID:$("#"+CusID).val(),BankID:$("#"+BankID).val(),Prvnt:$("#Prvnt").val()},
			async:true,
			type: 'POST',
			success: function(xml1)
			{
				if(xml1.split("~")[0] == "Success")
				{
					$(ManualStmt).hide();
					$(ManualStmt).closest(".DYNROW").find("[name=BKDT_BSAMSINITRESP]").val(xml1);
					alert("Transaction Initiated Successfully, Kindly Upload the file to Process further");
					$(ManualStmt).closest(".DYNROW").find("[name=BKDT_MODE]").material_select("destroy");
					$(ManualStmt).closest(".DYNROW").find("[name=BKDT_MODE]").val("Manual");
					$(ManualStmt).closest(".DYNROW").find("[name=BKDT_MODE]").material_select();
					BANKGRD($(ManualStmt).closest(".DYNROW"));
					$(ManualStmt).closest(".DYNROW").find("#save").click();
					$(ManualStmt).closest(".DYNROW").find("#CompleteTrans").show();
				}
				else
				{
					alert("Banking Manual Statement - "+xml1.split("~")[1]);
				}
			},
			error: function (xml1)
		   {
				alert("Banking Manual Statement - Error Occurred, Contact ID");
		   }
		});
	}
}

function ManualStatementUpload(Evnt){
	var ManualSt = $(Evnt)
	var CusID = $(ManualSt).closest(".DYNROW").find("[name=BKDT_CUSID]").val()
	var BankID = $(ManualSt).closest(".DYNROW").find("[name=BKDT_BNKNO]").val()
	if($(ManualSt).closest(".DYNROW").find("[name=BKDT_INSID]").val() == ""){
		alert("Banking Manual Statement - Institution ID is Mandatory");
		return;
	}
	$(ManualSt).closest(".DYNROW").find("#save").click();
	$.ajax({
			url: "/TPLSW/manualStatement-Upload",
			data: {PrcsID:$("#PrcsID").val(),CusID:CusID,BankID:BankID,DMSID:$(ManualSt).closest(".tbodytrtd").prev().find("input[type=text]").val().split("\\")[0],InsID:$(ManualSt).closest(".DYNROW").find("[name=BKDT_INSID]").val(),Prvnt:$("#Prvnt").val()},
			async:true,
			type: 'POST',
			success: function(xml1)
			{
				$(ManualSt).closest(".tbodytrtd").next().next().next().find('input').val(xml1.split("~")[0])
				if(xml1.split("~")[0] == "Success")
				{
					$(ManualSt).attr("disabled","disabled");
					$(ManualSt).closest(".tbodytrtd").prev().find(".GridDocUpd").hide();
					alert("Banking Manual Statement - File Pushed to Perfios");
				}
				else
				{
					alert("Banking Manual Statement - "+xml1.split("~")[1]);
				}
				$(ManualSt).closest(".DYNROW").find("#save").click();
			},
			error: function (xml1)
		   {
				alert("Banking Manual Statement - Error Occurred, Contact ID");
		   }
		});	
}

function ManualStatementCompTrans(Evnt){
	var ManualSt = $(Evnt)
	var CusID = $(ManualSt).closest(".DYNROW").find("[name=BKDT_CUSID]").val()
	var BankID = $(ManualSt).closest(".DYNROW").find("[name=BKDT_BNKNO]").val()
	
	$.ajax({
			url: "/TPLSW/manualStatement-ReportGen",
			data: {PrcsID:$("#PrcsID").val(),CusID:CusID,BankID:BankID,Prvnt:$("#Prvnt").val()},
			async:true,
			type: 'POST',
			success: function(xml1)
			{
				if(xml1.split("~")[0] == "Success")
				{
					$(ManualSt).hide();
					$(ManualSt).closest(".DYNROW").find("[name=BKDT_TRANSCOMP]").val(xml1.split("~")[0]);
					alert("Banking Manual Statement - Transaction Completed");
					$(ManualSt).closest(".DYNROW").find("#save").click();
				}
				else{
					alert("Banking Manual Statement - "+xml1.split("~")[1]);
				}
			},
			error: function (xml1)
		   {
				alert("Banking Manual Statement - Error Occurred, Contact ID");
		   }
		});	
}

function LoadCheckOnIntegration(html){

	if($(html).find("[name=BKDT_PROCESSMODE]").val() == "Manual Statement"){
		$($(html).find(".Auto").find(".col-md-4")[0]).hide();
		$($(html).find(".Auto").find(".col-md-4")[1]).hide();
		
		if($(html).find("[name=BKDT_BSAMSINITRESP]").val() != "")
		{
			$($(html).find(".Auto").find(".col-md-4")[2]).hide();
		}
		
		if($(html).find("[name=BKDT_TRANSCOMP]").val() != "")
		{
			$(html).find("#CompleteTrans").hide();
		}
	}
	
}


function LoadInstOptn(html)
{
	var exid = $(html).find("[name=BKDT_INSID]").val();
	var op= UI_getdata("","","","","","LSW_SGETINISTITUTIONLIST")
	
	$(html).find("[name=BKDT_INSID]").material_select("destroy");
	$(html).find("[name=BKDT_INSID]").html("");
	$(html).find("[name=BKDT_INSID]").append($(op).find("RESULT").html());
	if(exid != "")
	{
		$(html).find("[name=BKDT_INSID]").val(exid);
	}
	$(html).find("[name=BKDT_INSID]").material_select();
}

function LoadBSAStatus(html){
	var op = UI_getdata($("#PrcsID").val(),$(html).find("[name=BKDT_CUSID]").val(),$(html).find("[name=BKDT_BNKNO]").val(),"","","LSW_SBSACALLBACKSTATUS");
	$(html).find(".CallbackStatusHolder").html($(op).find("RESULT").text()+'<span style="font-weight:700">'+$(op).find("FLG").text()+" ( "+$(op).find("APITYPE").text()+" ) "+'</span>');
	//$($(html).find(".CallbackStatusHolder")).find("span").text($(op).find("FLG").text());
}

function handleonadd(HTML){
	if($(HTML).find("select[name=BKDT_MODE]").val()=="Manual")
	{
			$(HTML).find(".MODEMANUAL").show()
            $(".MANU").addClass('BKDTMndtry');			
	}
	else
	{
			$(HTML).find(".MODEMANUAL").hide()
			$(".MANU").removeClass('BKDTMndtry');
	}
	
	if($(HTML).find("input[name=BKDT_INITIATEBSA]").val()=="Initiated")
	{
			$(HTML).find(".Auto").show()
			$(HTML).find(".Rpt").show()
			$(HTML).find("#InitiateBSA").hide();
			
	}
	else
	{
			$(HTML).find(".Auto").hide()
			$(HTML).find(".Rpt").hide()
			$(HTML).find("#InitiateBSA").show();
	}
	//ODCC(HTML,acctype);
	LoadCheckOnIntegration(HTML);
	LoadInstOptn(HTML);
}

function AddPageMultiData_Onscreen (UniqFldID,PrcsVal,UniqNo,DV,FieldClass)
{
      var html = $($("#"+DV).html());
      var document = $(html);
      
      //$(html).find("[name="+PRCSID+"]").val(PrcsVal);
      
      var HeaderTXTID = $("#"+DV).attr("data-val").split("|")[0];
      var HeaderTXT = $("#"+DV).attr("data-val").split("|")[1];
      var row = $("."+ DV).find('.DYNROW').length;
      var j = parseInt(row) + 1;
      
      if(UniqNo != "")
    	  {
    	  $(html).find("#"+UniqFldID).val(UniqNo + j);
    	  }

      if ($(html).find('.FormaccordionSUB').length > 0)
	   {
	   
    	  $("."+DV).find('.FormaccordionSUB .active').find('a').click();
    	  
	  // var AccordionID = $(html).find('.Formaccordion').attr("id") + j
	   
	  // $(html).find('.Formaccordion').attr("id",AccordionID);
	   
	   var HeadingID = $(html).find('.FormaccordionSUB .card-header').attr("id") + j;
	   
	   $(html).find('.FormaccordionSUB .card-header').attr("id",HeadingID);
	   
	   $(html).find(".NXTBTNF").attr("data-card",j-1);
	   
	//   $(html).find('.Formaccordion .card-header a').attr("data-parent","#"+AccordionID);
	   
	   var CollapseID =  $(html).find('.FormaccordionSUB .collapse').attr("id") + j;
	   
	 //  $(html).find('.Formaccordion .collapse').attr("data-parent","#"+AccordionID);
	   
	   $(html).find('.FormaccordionSUB .collapse').attr("id",CollapseID);
	   
	   $(html).find('.FormaccordionSUB .collapse').attr("aria-labelledby",HeadingID);	   
	   
	   
	   $(html).find('.FormaccordionSUB .card-header a').attr("href","#"+CollapseID);
	   
	   $(html).find('.FormaccordionSUB .card-header a').attr("aria-controls",CollapseID);
	   
	   }
      
      
      
      $(html).find("#"+HeaderTXTID).text(HeaderTXT + " " + j);
      $(html).find("[data-row]").attr("data-row",j);
      $(html).attr("data-row",j);
      var n = $(html).find("." + FieldClass).length;
        for (i = 0; i < n; i++) {
         name = $($(html).find("." + FieldClass)[i]).attr("name");
         
         
         if ($(html).find('[name='+name+']').is( "a"))
   	      {
   	  	
   	  	
   	  	if ($(html).find('[name='+name+']').attr('data-toggle') == "modal")
   	  		{		
   	  		$(html).find('[name='+name+']').attr("id",($(html).find('[name='+name+']').attr("id") + j));
   	  		$(html).find('[name='+name+']').attr("data-target",("#" + name + j));	
   	  		
   	  		}
   	  	
   	  	$(html).find('[name='+name+']').attr('data-table', $(html).find('[name='+name+']').attr('data-table') + j);
   	  	$(html).find('[name='+name+']').attr('href', "#" + $(html).find('[name='+name+']').attr('data-table') + j);
   	  }
   	  else if ($(html).find('[name='+name+']').attr("data-info") == "ModalWindow")
   	  {
   	  	$(html).find('[name='+name+']').attr("id",name.replace("Modal","") + j);
   	  }
        
         
   	  else if($(html).find('[name='+name+']').attr('type')=="button")
   	{

   	   if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
   	     {
   	 
   		var datavalue = $(html).find('[name='+name+']').attr('data-value');
   		 
   		var TableID = datavalue.split("|")[0] + j;
   		var SPNAME = datavalue.split("|")[1];
   		
   		var Param1 = '$("#'+ datavalue.split("|")[2] +'").val()';	

   		var params2 = datavalue.split("|")[3];
   		
   		var Param2 = "";
   		for (y=0;y<params2.split("~").length;y++)
   			{
   			
   			Param2 = Param2 + '$("#'+  params2.split("~")[y] + j +'").val()' + "+'|'+";
   			
   			}
   		
   		Param2 = Param2.slice(0,Param2.lastIndexOf("+'|'+"))
   		
   		var Param3 = '$("#'+ datavalue.split("|")[4] + j +'").val()';	
   		var mainrowno = "";
   		var HdnClms = datavalue.split("|")[5];
   		var Fnctype = datavalue.split("|")[6];
		var attr =$(html).find('[name='+name+']').attr("data-custom-html-handle");
		var BtnClick = "";
	if (typeof attr !== 'undefined' && attr !== false) {
		$(html).find('[name='+name+']').attr("data-html",$(html).closest(".dynrow").attr("data-row"));
		mainrowno=$(html).closest(".dynrow").attr("data-row");
		BtnClick =  "FncallDocChkLst_Custom_BankDtl(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+",Html:"+mainrowno+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
	}
	else{
		BtnClick =  "FncallDocChkLst(this,'"+TableID+"',{spname:'"+SPNAME+"',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:"+Param1+",brid:"+Param2+",MnuId:"+Param3+"},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||"+HdnClms+"','"+Fnctype+"')"
	}		  
   		$(html).find('[name='+name+']').attr("onclick",BtnClick);
   	    
   		$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);
   		
   	     }
   	            		  
   	            	  
   	}
   	else if ($(html).find('[name='+name+']').is( "table"))
   	{
   		
   		$(html).find('[name='+name+']').attr('id', $(html).find('[name='+name+']').attr('id') + j);

   	}
         
         
         if($(html).find('[name='+name+']').attr('type')=="button")
         {

            if($(html).find('[name='+name+']').attr('data-button')=="GridButton")
              {
            	$(html).find('[name='+name+']').addClass("AddMultiGridTrg");
              }
            
              }

         if ($(html).find("[for="+name+"]").length > 0)
         {
         $(html).find("[for="+name+"]").attr("for",name + j)
         }
         
         if($(html).find("#"+name).is("select"))
         {
        	  $(html).find("#"+ name).addClass("mdb-select");
         }
         
         if($($(html).find("." + FieldClass)[i]).attr("type") == "radio")
         {
        	 var radioID = $($(html).find("." + FieldClass)[i]).attr("id")
        	 
        	 $($(html).find("." + FieldClass)[i]).attr("id",radioID + j);
        	 $(html).find("[for="+radioID+"]").attr("for",radioID + j);
         }
         
              
         $(html).find("#"+name).attr("id",name + j);
         
      
         
         
        }
        
      handleonadd(html);
        
      $("."+DV).append(html);
      
      
      $("."+DV).last().find('.mdb-select').material_select('destroy');
      $("."+DV).last().find('.mdb-select').material_select();
   // Calendar
      var $input = $(document).find('.datepicker').pickadate({
          //editable: 'true',
      format: 'dd/mm/yyyy',
      selectYears: 200,
      selectMonths: true
      })
      .on("change", function() {
        $(this).prev().prev().val($(this).val());
        $(this).prev().prev().focus();
      });

      $("."+DV).last().find(".AddMultiGridTrg").click();
      
      
      
      
      // $($("."+DV).find('.DYNROW').last().find("." + FieldClass)[0]).focus();
      
     // var scrollPos =  $($("."+DV).find('.DYNROW').last().find("." + FieldClass)[0]).focus();
		 //$(window).scrollTop(parseInt(scrollPos));
		    
}


function FncallDocChkLst_Custom_BankDtl(cntrl, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
    sessionStorage.setItem('SessionMICRCODE', '0');
    //    $("#popup").dialog("open");
  //ajaxindicatorstart("Loading.. Please wait");
   var spname = par.spname
var Param = par.Param
var brid = par.brid
var MnuId=par.MnuId
var htmlrow=par.Html
var DBSrc = par.DBSrc; 
            $.ajax({
               url: "/TPLSW/UI_GetData",
               data: { param1: Param, param2: brid, param3: MnuId, param4: "", param5: "",spname: spname,DBSrc:DBSrc,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
               async: false,
               //dataType: "json",
                      dataType: "text",
               type: 'POST',
               complete: function OnSuccess_submit(xml1) {
                     var      op=xml1.responseText;
                  if (op != "")
                  {                      
var result = op.replace('<Resultset><a>','').replace('</a></Resultset>','').replace('<XMLLRGResult>','<Resultset>').replace('</XMLLRGResult>','</Resultset>').replace(/asetLRGDAta/g,'a')
              result = result.replace(/>null</g,"><");
            var json = $.xml2json(result.replace(/&/g,"and"));
            //alertify.alert(json);
                              if(json == "")
                  {
                              alert(LoadFrmXML("V0072"));
                                $('#'+fnname).empty();
                                    $("#"+fnname+"_info").text('Showing 0 to 0 of 0 entries');
                                    $("#"+fnname+"_paginate").remove();
                                    $("#"+fnname+"_wrapper").find(".dataTables_scroll").find(".dataTables_scrollHead").remove();
                              return
                  }
            //return;
            if (JSON.stringify(json.a) === '{}') {
                  alert(LoadFrmXML("V0072"));
            }
            else {
               // $("#popupSPL").dialog();
               // $("#popupSPL").dialog("option", "width", 805);
              //  $("#popupSPL").dialog("option", "closeOnEscape", true);
               // $("#popupSPL").dialog("option", "position", { my: "right bottom", at: "left top", of: $(cntrl) });
               //handlejsonSPLPopup(JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " ")),control1, hdncolumn, enablecontrol);
                 // handlejsonDocChkLst(JSON.parse(((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "").replace(/XXPXX/g, "%")),fnname,control1, hdncolumn, enablecontrol,par);
				 handlejsonDocChkLst_Custom_BankDtl(JSON.parse(((((((((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/``~/g, "</")).replace(/`~/g, ">")).replace(/`/g, "<")).replace(/___/g, "-")).replace(/__/g, " ")).replace(/AAXX/g, "")).replace(/XXPXX/g, "%")).replace('xxdiv_',' / ')),fnname,control1, hdncolumn, enablecontrol,par);
                  }
      ajaxindicatorstop();
                  }           //ajaxindicatorstop();
                  else
                  {
                  //alert(LoadFrmXML("V0072"));
                  ajaxindicatorstop();
                  }
                  },
            error: function (xml1)
            {
                        //alertify.alert(LoadFrmXML("V0126"));
                              alert(LoadFrmXML("V0126"));
                        OP="Fail";
                        //ajaxindicatorstop();
            }
         });
       // 
}



function handlejsonDocChkLst_Custom_BankDtl(result,TableID, curcontl, hdncolumn, enablecontrol,par) {
    var dtData = [];
        var count = 0;
        //to re-init datatable
       // myData = JSON.parse(result.d);
        myData1 = $(result);
        var entry;
        var name;
		var htmlrow=par.Html
        entry = myData1[0];
        for (name in entry) {
            if (entry.hasOwnProperty(name)) {
                dtData2[count] = name;
                count++;
                //dtData1.push(name);
            }
        }
      $.each(myData1, function (event) {
          switch (count) {
            case 1:
                dtData.push([this[dtData2[0]]]);
                break;
            case 2:
                dtData.push([this[dtData2[0]], this[dtData2[1]]]);
                break;
            case 3:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]]]);
                break;
            case 4:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]]]);
                break;
            case 5:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]]]);
                break;
            case 6:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]]]);
                break;
            case 7:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]]]);
                break;
            case 8:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]]]);
                break;
            case 9:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]]]);
                break;
            case 10:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]]]);
                break;
            case 11:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]]]);
                break;
            case 12:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]]]);
                break;
            case 13:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]]]);
                break;
            case 14:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]]]);
                break;
            case 15:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]]]);
                break;
            case 16:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]]]);
                break;
            case 17:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]]]);
                break;
            case 18:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]]]);
                break;
            case 19:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]]]);
                break;
            case 20:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]]]);
                break;
            case 21:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]]]);
                break;
            case 22:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]]]);
                break;
            case 23:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]]]);
                break;
            case 24:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]]]);
                break;
            case 25:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]]]);
                break;
            case 26:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]]]);
                break;
            case 27:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]]]);
                break;
            case 28:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]]]);
                break;
            case 29:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]]]);
                break;
            case 30:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]]]);
                break;
            case 31:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]]]);
                break;
            case 32:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]]]);
                break;
            case 33:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]]]);
                break;
            case 34:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]]]);
                break;
            case 35:
                dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]]]);
                break;
                case 36:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]]]);
                break;
                case 37:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]]]);
                break;
                case 38:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]]]);
                break;
                case 39:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]]]);
                break;
                case 40:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]]]);
                break;
                case 41:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]]]);
                break;
                case 42:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]]]);
                break;
                case 43:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]]]);
                break;
                case 44:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]]]);
                break;
                case 45:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]]]);
                break;
                case 46:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]]]);
                break;
                case 47:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]]]);
               break;
                case 48:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]]]);
                break;
                case 49:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]],this[dtData2[47]],this[dtData2[48]]]);
                break;
                case 50:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]],this[dtData2[47]],this[dtData2[48]],this[dtData2[49]]]);
                break;
                case 51:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]], this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]]]);
                break;
                case 52:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]]]);
                break;
                case 53:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]]]);
                break;
                case 54:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]]]);
                break;
                case 55:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]]]);
                break;
                case 56:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]]]);
                break;
                case 57:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]]]);
                break;
                case 58:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]]]);
                break;
                case 59:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]]]);
                break;
                case 60:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]]]);
                break;
                case 61:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]]]);
                break;
                case 62:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]]]);
                break;
                case 63:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]]]);
                break;
                case 64:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]]]);
                break;
                case 65:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]]]);
                break;
                case 66:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]]]);
                break;          
                case 67:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]]]);
                break;    
                case 68:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]]]);
                break;    
                case 69:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]]]);
                break;    
                case 70:
                      dtData.push([this[dtData2[0]], this[dtData2[1]], this[dtData2[2]], this[dtData2[3]], this[dtData2[4]], this[dtData2[5]], this[dtData2[6]], this[dtData2[7]], this[dtData2[8]], this[dtData2[9]], this[dtData2[10]], this[dtData2[11]], this[dtData2[12]], this[dtData2[13]], this[dtData2[14]], this[dtData2[15]], this[dtData2[16]], this[dtData2[17]], this[dtData2[18]], this[dtData2[19]], this[dtData2[20]], this[dtData2[21]], this[dtData2[22]], this[dtData2[23]], this[dtData2[24]], this[dtData2[25]], this[dtData2[26]], this[dtData2[27]], this[dtData2[28]], this[dtData2[29]], this[dtData2[30]], this[dtData2[31]], this[dtData2[32]], this[dtData2[33]], this[dtData2[34]], this[dtData2[35]], this[dtData2[36]], this[dtData2[37]], this[dtData2[38]], this[dtData2[39]], this[dtData2[40]], this[dtData2[41]], this[dtData2[42]], this[dtData2[43]], this[dtData2[44]], this[dtData2[45]],this[dtData2[46]], this[dtData2[47]],this[dtData2[48]],this[dtData2[49]],this[dtData2[50]],this[dtData2[51]],this[dtData2[52]],this[dtData2[53]],this[dtData2[54]],this[dtData2[55]],this[dtData2[56]],this[dtData2[57]],this[dtData2[58]],this[dtData2[59]],this[dtData2[60]],this[dtData2[61]],this[dtData2[62]],this[dtData2[63]],this[dtData2[64]],this[dtData2[65]],this[dtData2[66]],this[dtData2[67]],this[dtData2[68]],this[dtData2[69]]]);
                break;
        }
        });
        if (!(typeof popTableModPageGrid1 === "undefined")) {
            /* destroy table*/
            //Delete the datable object first
           // popTableModPageGrid1.fnDestroy();
                /*if(popTableModPageGrid1[0].id == "Table1")
                {
            //popTableModPageGrid1.fnDestroy();
                }*/
            popTableModPageGrid1 = null;
            // $('#'+TableID).dataTable( {"bDestroy": true      } );
            //Remove all the DOM elements
            $('#'+TableID).empty();
            /* destry table*/
            //        oSettings = popTable.fnSettings();
            //        popTable.fnClearTable(this);
            //        for (var i = 0; i < dtData.length; i++) {
            //            popTable.oApi._fnAddData(oSettings, dtData[i]);
            //        }
            //        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
            //        popTable.fnDraw();
        }
        //dynamically add column name
        var dtcolumn = [];
        for (var i = 0; i < count; i++) {
            var obj = {};
            obj["sTitle"] = dtData2[i];
    //added by manimala... <<start>> for date sorting
       if (dtData2[i].indexOf('Date') !== -1)  {obj["sType"] =  "date"; }
           //added by manimala... <<end>>
            dtcolumn.push(obj);
        }
        if(myData1.length == 0)
        {
        dtData = [];
        }
        else if(Object.values(myData1[0])[0] == "")
          {
          dtData = [];
          }
                var cc = parseInt(count)-6;
          var hideClm = [];
          var hideClm1='[';
          if(hdncolumn != undefined)
          {
          if(hdncolumn !="||")
          {          
          if ((hdncolumn.split('|')[2]!='')||(hdncolumn.split('|')[2]!=undefined))
                {
                      var hideClm1='['+hdncolumn.split('|')[2]+',';
                }
          hdncolumn=hdncolumn.split('|')[0];
          }
          }
          for(c=parseInt(cc);c<count;c++)
          {
                if(c==parseInt(count)-1)
                hideClm1=hideClm1+c.toString();
          else
                hideClm1=hideClm1+c.toString()+',';
          }
          hideClm1=hideClm1+']';
          hideClm = hideClm1;
          if (typeof popTableModPageGrid1 === "undefined" || popTableModPageGrid1 === null) {
        	  
        	  
        	if (enablecontrol == "BANKGRID")
           {
        	   GridControlDetailBANKGRID (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm,htmlrow);
           }
		   //Control Grid End
         // Grid Table Properties Set Start
         $('#'+TableID).find("tbody").addClass("tbody");
         $('#'+TableID).find("tbody").find("tr").addClass("tbodytr");
         $('#'+TableID).find("tbody").find("tr").find("td").addClass("tbodytrtd");
              $('#'+TableID+'_wrapper').find('label').each(function () {
                  $(this).parent().append($(this).children());
                  });
                  $('#'+TableID+'_wrapper .dataTables_filter').find('input').each(function () {
                       // $('#'+TableID+'_wrapper input').attr("placeholder", "Search");
                        $('#'+TableID+'_wrapper input').removeClass('form-control-sm');
                  });
                  $('#'+TableID+'_wrapper .dataTables_length').addClass('d-flex flex-row');
                  $('#'+TableID+'_wrapper .dataTables_filter').addClass('md-form');
                  $('#'+TableID+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
                  $('#'+TableID+'_wrapper .dataTables_filter').find('label').remove();
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").css("width","100%")
                  $("#"+TableID+"_wrapper .dataTables_scrollHeadInner table").css("width","100%")
                  $("#"+TableID).css("width","100%")
                 $("#"+TableID+"_wrapper .dataTables_scrollHeadInner").addClass(par.TableHeader);
                     // Middle row Customisation
                     $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').css("overflow-x","visible");
                         $($("#"+TableID+"_wrapper").find('.row')[1]).find('div').removeClass("col-sm-12");
                    $("#"+TableID+"_wrapper #"+TableID+" thead").addClass(par.TableHeader);
                  $($("#" + TableID + "_wrapper").find(".row")[2]).remove();
                          $($("#"+TableID+"_wrapper").find('.row')[1]).removeClass("row");
                  $($("#" + TableID + "_wrapper").find('.row')[0]).find("div").remove();
                   $($("#" + TableID + "_wrapper").find('.row')[0]).removeClass("row");
// Field Initialisation Start
// Dropdown
$('#'+TableID+'_wrapper .Gridmdb-select').material_select();              
// Calendar
var $input = $(document).find('.Griddatepicker').pickadate({
    //editable: 'true',
format: 'dd/mm/yyyy',
selectYears: 150,
selectMonths: true
})
.on("change", function() {
  $(this).prev().val($(this).val());
  $(this).prev().focus();
});
//Field Initialisation End
// Grid Table Properties Set End
          }
    }