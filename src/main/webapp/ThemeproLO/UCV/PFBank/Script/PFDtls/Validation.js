function CheckMode()
{
	$(".CHK").hide();
	$(".OnlineMode").hide();
	var Mode=$("input[name='PFDT_MODE']:checked"). val();
	
	if(Mode=="Online")
		{
		  $(".CHK").hide();
		  $(".OnlineMode").show();
		  $(".CHKHOLDER").hide();
		  $("#PFDT_ONLINEMOD").addClass('PFDTMndtry');
		  //$("#PFDT_ONLINEMOD").parent().next().find(".MndtryAstr").html("*");
		  
		  $('.Mndtry').removeClass('PFDTMndtry')
		 // $('.Mndtry').next().find(".MndtryAstr").html("");
		 var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETCUSCONTDETL")
		  $('.SMS').text($(xml).find('MOB').text());
		  $('.EMAIL').text($(xml).find('EMAIL').text());
		}
	else if(Mode=="Cheque" || Mode=="DD")
		{
		  $(".CHK").show();
		  $(".CDD").next().removeClass('active');
		  $(".OnlineMode").hide();
		  $('.Mndtry').addClass('PFDTMndtry')
		//  $('.Mndtry').find(".MndtryAstr").html("*");
		  $("#PFDT_ONLINEMOD").removeClass('PFDTMndtry');
		//  $("#PFDT_ONLINEMOD").parent().next().find(".MndtryAstr").html("");
		  
		 if(Mode=="Cheque")
			  {
			   $(".CHKHOLDER").show();
			  }
		  else if(Mode=="DD")
		      {
			  $(".CHKHOLDER").hide();
			  }
		}
	else
		{
		  $('.Mndtry').removeClass('PFDTMndtry')
		 // $('.Mndtry').next().find(".MndtryAstr").html("");
		  $("#PFDT_ONLINEMOD").removeClass('PFDTMndtry');
		//  $("#PFDT_ONLINEMOD").parent().next().find(".MndtryAstr").html("");
		}
}


function Ifscdetls(IDVAL,BNKNAME,BRANCH,CITY,STATE)
{
var val=GetIfsc($(IDVAL).val());

if($(val).find("BANK").text() == "")
{
$(IDVAL).val('');
$('#'+BNKNAME).val('');
$('#'+BRANCH).val('');
$('#'+BNKNAME).next().removeClass('active');
$('#'+BRANCH).next().removeClass('active');
}
if($(val).find("BANK").text() != "")
{
$('#'+BNKNAME).val($(val).find("BANK").text());	
$('#'+BNKNAME).next().addClass('active');
$('#'+BNKNAME).attr('disabled',true)
}
if($(val).find("BRANCH").text() != "")
{
$('#'+BRANCH).val($(val).find("BRANCH").text());
$('#'+BRANCH).next().addClass('active');
$('#'+BRANCH).attr('disabled',true)
}
if($(val).find("CITY").text() != "")
{
$('#'+CITY).val($(val).find("CITY").text());
$('#'+CITY).next().addClass('active');
$('#'+CITY).attr('disabled',true)
}

if($(val).find("STATE").text() != "")
{
$('#'+STATE).val($(val).find("STATE").text());
$('#'+STATE).next().addClass('active');
$('#'+STATE).attr('disabled',true)
}
}


function CheckCollectorNot()
{
	var Collect=$("#PFDT_PFCOLLECT").val()
	
	if(Collect=="Collected")
		{
		  ClickCollectedBtn()
		}
	else
		{
		$('#CheckModal').hide();
		$('#OnlineModal').hide();
		$('.PF').show();
		$(".CHK").hide();
		$(".OnlineMode").hide();
		}
}


function ClrMndtry()
{
	var Collect=$("input[name='PFDT_COLECTIONTYP']:checked"). val(); 
	if(Collect=="Deferred")
		{
		  $(".CHKCHAGE").removeClass('PFDTMndtry')
		   $("#PFDT_ONLINEMOD").removeClass('PFDTMndtry');
		}
}

function ClickCollectedBtn()
{
	var Mode=$("input[name='PFDT_MODE']:checked").val();
	
	if(Mode=="Online")
		{
		 var PrcsId=$("#PFDT_PRCSID").val()
		 var PFNO=$("#PFDT_PFNO").val();
		// $("#PFDT_PFCOLLECT").val('Collected')
		 var xml=UI_getdata(PrcsId,Mode,PFNO,"","","LSW_SGETONLINEMODEDETLS")
		 var n = document.getElementsByClassName('ONLINE');
      for (i = 0; i < n.length; i++) 
        {
          name = document.getElementsByClassName('ONLINE').item(i).id
         
          var val = $(xml).find(name).text();
 
          if($("#"+ name).length > 0)
          {
        	  $("#"+ name).val(val); 
        	  $("#"+ name).next().addClass('active');
          } 
        }
		$('.PF').hide();
		$('#CheckModal').hide();
		$('#OnlineModal').show();
		}
	else if(Mode=="Cheque" || Mode=="DD")
		{
		  var PrcsId=$("#PFDT_PRCSID").val()
		 // $("#PFDT_PFCOLLECT").val('Collected')
		   var PFNO=$("#PFDT_PFNO").val();
		  var xml=UI_getdata(PrcsId,Mode,PFNO,"","","LSW_SGETCHECKMODEDETLS")
		  var n = document.getElementsByClassName('CHECK');
          for (i = 0; i < n.length; i++) 
          {
            name = document.getElementsByClassName('CHECK').item(i).id
           var val = $(xml).find(name).text();

             if($("#"+ name).length > 0)
             {
       	      $("#"+ name).val(val); 
       	      $("#"+ name).next().addClass('active');
             } 
		   }
          $('.PF').hide();
  		  $('#OnlineModal').hide();
  		  $('#CheckModal').show();
		}
	
	else
		{
		$('.PF').show();
		$('#OnlineModal').hide();
		$('#CheckModal').hide();
		}
}

function CIBILValidate(evnt)
{    


   var CIBIL=LoadFrmXML("V0179");
	
	if(CIBIL=="CIBIL Yes")
	  { 
	var PrcsId=$("#PFDT_PRCSID").val();
	var xml=UI_getdata(PrcsId,"","","","","LSW_SDEMANDCAL")

	  if($(xml).find('Result').text() != "Success")
		 {
		    alert($(xml).find('Result').text())
		    return;
		 }
	 
if ($(evnt).text() == "CIBIL Initiated")
{

alert("CIBIL already Initiated, Check for CIBIL Data in View Reports");

return;

}	



   var PrcsId=$("#PFDT_PRCSID").val();
   var CusRefID=UI_getdata(PrcsId,"","","","","LSW_SGETAPPLREFID")
	
	var json = $.xml2json(CusRefID.replace(/&/g,"and"));
	
	var fnlresult="";
	
	
	for (i=0;i<$(CusRefID).find('a').length;i++)
	{
		
		
	
	var appno=$($(CusRefID).find('a')[i]).find('APPLNO').text();
	var cusid=$($(CusRefID).find('a')[i]).find('CUSID').text();
	$.ajax({
        url: "/TPLSW/CIBILIntegration",
        type: 'POST',
        data: {appno:appno,cusid:cusid,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:false,
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
	   
	   if (stm != "")
	   {
	   
        	 var obj = JSON.parse(stm).Status
        
        	 if(obj=="Success")
        		 {
        		 //alert('CIBIL Report Generated');
				 
				 fnlresult="Success";
			
		    //$("#"+Verify).val('Verified')
        		 }
				 else
				 {
					  alert('CIBIL failed for Applicant - ' + cusid + ' - ' +JSON.parse(stm).Status);
				 }
	   }
        else
				 {
					  alert('CIBIL failed for Applicant - ' + cusid);
				 }	 
    },
    error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	alert('CIBIL failed for Applicant - ' + cusid + ' Check Whether Customer KYC, Address, Loan details are entered Correctly');
    	   }
});

	}
	
	if (fnlresult == "Success")
	{
			 
        		 $("#CIBIL").text('CIBIL Initiated');
        		 $("#CIBIL").addClass("btn-GrnInplain");	
        		 $("#CIBIL").removeClass("btn-yelInplain");
        		 $("#CIBIL").removeClass("btn-RedInplain"); 
	}
	else
        		 {
        	 $("#CIBIL").text('CIBIL Initiation Failed');
        		 $("#CIBIL").removeClass("btn-GrnInplain");	
				  $("#CIBIL").removeClass("btn-yelInplain");
        		 $("#CIBIL").addClass("btn-RedInplain");
        		 }
  }
	  else
	  {
		  alert('CIBIL Integration not available')
		  return;
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


$('.CollectedPage').on('click', function() {
	
		if (($("[name=PFDT_MODE]:checked").val() == "Online"))
	{
   //location.reload();
   $(".FormPageMultiTab").find("li.active").click();

	}
});

$('.Collected').on('click', function() {
	
	// Added by Denslyn to check receipt exists before collections call START
	var recptdata=UI_getdata($("#PrcsID").val(),$("#PFDT_PFREFNAME").val(),"","","","LSW_SCHKRECEIPTNO")

	  if($(recptdata).find('RESULT').text() == "SUCCESS")
		 {
		    alert("Receipt Already Generated - " + $(recptdata).find('RECEIPT').text());
			$("#PFDT_RECIPTNUM").val($(recptdata).find('RECEIPT').text());
			$("#RRECPTNO").val($(recptdata).find('RECEIPT').text());
			$("#RRECPTNO").next().addClass("active");	
			$("#InitColcRe").hide();
			$(".RMK").hide();
			
	if (($("[name=PFDT_MODE]:checked").val() == "Cheque") || ($("[name=PFDT_MODE]:checked").val() == "DD"))
	{
   ClickCollectedBtn();

	}
			
			
		    return;
		 }
	// Added by Denslyn to check receipt exists before collections call END
	
	  $(".loader").show();
	// Collections Start
	
if ($("[name=PFDT_MODE]:checked").val() == "Online")
	{
  // $("#Save1").click();
}

	if ($("[name=PFDT_COLECTIONTYP]:checked").val() == "Collectible")
	{
	var PFNO1 = $(".FormPageMultiTab li.active a div").text();
	var PRCSID1 = $("#PrcsID").val();
	var RECEIPTNO=""


   $.ajax({
		    url: "/TPLSW/LMSPF",
		    type: 'POST',
		    data: {PRCSID:PRCSID1,PFNO:PFNO1,RECEIPTNO:RECEIPTNO,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
		    async:true,
		   // dataType: 'json',
		   // contentType:'application/json',
		    
		    success: function(stm){        
		   // var obj = JSON.parse(JSON.stringify(stm))
		    	if (stm == "")
		    		{
		    		
		    		alert("Customer Creation/Updation failed. Contant IT!!!");
		    		return;
		    		
		    		
		    		}
		    	
		    	else if (stm.split("|")[0] == "Fail")
	    			{
	    			
	    			alert("Customer Creation/Updation failed. " + stm.split("|")[1]);
		    		return;
	    			
	    			}
		    	
		    	else if (stm.split("|")[0] == "Success")
	    			{
	    			

	$.ajax({
	   url: "/TPLSW/COLLECTIONS",
	   type: 'POST',
	   data: {PRCSID:PRCSID1,PFNO:PFNO1,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	   async:true,
	  // dataType: 'json',
	  // contentType:'application/json',
	   
	   success: function(stm){        
	  // var obj = JSON.parse(JSON.stringify(stm))
	    if (stm == "")
	    {
	    	
	    alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3] );
		$("#PFDT_RECIPTNUM").val("");	    	
  	//$("#PFDT_PFCOLLECT").val('Collected');	
  	//$("#PFDT_TRANSSTATUS").val('FAILED');
	
	if ($("[name=PFDT_MODE]:checked").val() == "Online")
	{
   ClickCollectedBtn();
}
	
	
	
		    return;			    
	    
	    }
	    
	    else if (stm.split("|")[2] == "")
	    {
	    
	     alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3] );
		$("#PFDT_RECIPTNUM").val("");	    	
  	//$("#PFDT_PFCOLLECT").val('Collected');	
  	//$("#PFDT_TRANSSTATUS").val('FAILED');
	
	if ($("[name=PFDT_MODE]:checked").val() == "Online")
	{
   ClickCollectedBtn();
}
	
		    return;	
	    
	    }
	    else
	    {
	    
	   //var CUSID = UI_getdata(PRCSID1,PFNO1,stm.split("|")[2],"","","LSW_SPFINTRSTATUS");	
	    	
	    	$("#PFDT_RECIPTNUM").val(stm.split("|")[2]);	    	
	    	$("#PFDT_PFCOLLECT").val('Collected');	
	    	$("#PFDT_TRANSSTATUS").val('IN PROGRESS');
	    	
	    	
	    	//alert('PF Collected')
	    	
	    	$("#Save3").click();
	    	
	    	ClickCollectedBtn();
	    	
	    	
	   
	
	    			
	    			
	    		
	   
	  // var xml=UI_getdata($("#PrcsID").val(),"","","","","CUSTOMER_PUSH")
	   
	   $(".RMK").hide();
	    $("#InitColcRe").hide();
	    alert ("Receipt Generated");
	    
	    }
	    
	},
	error: function(stm) {

		$("#PFDT_RECIPTNUM").val("");

	if ($("[name=PFDT_MODE]:checked").val() != "Online")
	{		
  	$("#PFDT_PFCOLLECT").val('Collected');	
  	$("#PFDT_TRANSSTATUS").val('FAILED');
  	}
  	
  	//alert('PF Collected')
  	
  	$("#Save3").click();
  	
  	ClickCollectedBtn();
		
		 alert("Error Occured. Contant IT!!! \n" + stm.split("|")[3] );
		
		    return;	

	  }
	});

	
		}
		
		},
		error: function(stm) {
			 //window.alert(LoadFrmXML("V0125"))
				
		
			alert("Customer Creation/Updation failed. Contant IT!!!");
			   }
		});
	   
	   
	
	
	// Collections End	
	}
	
	$(".loader").fadeOut("slow");
	
	/*var Mode=$("input[name='PFDT_MODE']:checked"). val();
	
	    if(Mode=="online")
		{
		$("#Collected").click();
		}
	    else if(Mode=="Cheque")
		{
	    $("#ChkCollected").click();
		}*/
})

$('.PartiCollected').on('click', function() {
	
	$("#PFDT_PFCOLLECT").val('Partially Collected')
	alert('PF Partially Collected');
	$("#Save1").click();
})

$("#Def").on('click', function() {
	//var op = UI_getdata($("#PrcsID").val(),$("#PFDT_DEMANDAMT").val().replace(/,/g,''),$("#PFDT_PFREFNAME").val(),"","","LSW_SGETDEFRNTCALC")
	
	
	//PAYTM PROCESSING CHECK START		
		 var xml=UI_getdata($("#PrcsID").val(),$("#PFDT_PFNO").val(),"","","","LSW_SONLNEPAYMNTCHK")
			if($(xml).find('RESULT').text()=="No")
			 {
				alert($(xml).find('MSG').text());
				return false;
			 }
			if($(xml).find('RESULT').text()=="Success")
			 {
								
				alert($(xml).find('MSG').text());
				
				location.reload();
				
				return false;
			 }			 
//PAYTM PROCESSING CHECK END
	
	
	
	if($("#PFDT_DEMANDAMT").val() != "0")
	{
	$("#PFDT_AMOUNT").addClass("DSVLBL")
	 $("#PFDT_AMOUNT").next().addClass('active');
	//$("#PFDT_AMOUNT").val(CURCommaSep($(op).find("RESULT").text()))
	$("#PFDT_AMOUNT").val(CURCommaSep($("#PFDT_DEMANDAMT").val()));
	$("#MobIPopup").click();
	GetCustomerName();
	}
	else
	{
		alert('Still demand amount is zero, So Deferment can not done');
		
	}
	
})
$("#coll").on('click', function() {
	$("#PFDT_AMOUNT").removeClass("DSVLBL")
	$("#PFDT_AMOUNT").val('');
});



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
				$('.DDV').show();
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

	function CheckInstrumntDate()
	{
		 var t1 = get2date();
	     var datefield_id = 'PFDT_INSTRUMNTDT'
	     var t2 = document.getElementById(datefield_id).value;

	     var one_day = 1000 * 60 * 60 * 24;  //Here we need to split the inputed dates to convert them into standard format for further execution
	     var x = t1.split("-");
	     var y = t2.split("/");   //date format(Fullyear,month,date) 

	     var date1 = new Date(x[2], (x[1] - 1), x[0]);


	     var date2 = new Date(y[2], (y[1] - 1), y[0])
	     var month1 = x[1] - 1;
	     var month2 = y[1] - 1;

	     //Calculate difference between the two dates, and convert to days

	     Diff = Math.ceil((date2.getTime() - date1.getTime()) / (one_day));

			if(t2!="")
			{
	     if (Diff < -90) {
			
				$('#'+datefield_id).focus();
			 	document.getElementById(datefield_id).value = "";
		       alert("Instrument Date should not be lesser than 3 months")
			  
	         return 
	        }
			}


	}
	
	
	
	
 function GridControlCIBILRPTDATA (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
    	  
		   { "width": "20%", "targets": 0 },
		    { "width": "15%", "targets": 1 },
		  
		    { targets: 2,"width": "15%", "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_CIBILSCOREI'+rowno+'" value="'+data+'" style="" name="FIEG_CIBILSCOREI'+rowno+'" maxlength="40" class="form-control Btxt10 DSVLBL form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
				
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 3,"width": "10%", "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_CIBILSCOREII'+rowno+'" value="'+data+'" style="" name="FIEG_CIBILSCOREII'+rowno+'" maxlength="40" class="form-control Btxt10 DSVLBL form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

					return htmldata[0].outerHTML;   		
					
		         } 
				 },
		{ "width": "15%", "targets": 4 },				 
 		 { targets: 5,"width": "25%", "render": function ( data, type, row, meta ) {                            

 			var rowno = meta.row;       			 
 			
var viewrpt ="";		
		
if (data != "NA")
{	
	viewrpt = '<span class="HyperControls">'
    viewrpt = viewrpt + '<a type="button" onclick="GridCibilScrRpt(this)" style="padding-left: 0rem;" class="Btxt4" href="#">View Report</a>'        
    viewrpt = viewrpt + '</span>'
}
var BTN = "";
	
			if (data == "NOT GENERATED")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect btn-yelInplain btn-sm">Initiate CIBIL</button></span>' 
			 }
			else  if (data == "GENERATED")
			 {
				BTN = '<span><button type="button"  id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect btn-GrnInplain btn-sm">CIBIL Initiated</button></span>' 
			 } 
			else  if (data == "FAILED")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" style="margin:1rem" id="GridCIBIL'+rowno+'" class=" waves-effect btn-RedInplain btn-sm">Failed</button></span>' 
			 } 
			 else  if (data == "REGENERATE")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" style="margin:1rem" id="GridCIBIL'+rowno+'" class=" waves-effect btn-RedInplain btn-sm">Re-Initiate CIBIL</button></span>' 
			 } 
			 
						 
 		var HTML =  '<div>' +  viewrpt + BTN + '</div>';
		
		
		
		var htmldata = $(HTML);
 			
 return htmldata[0].outerHTML;
          } 
 		 }
     	
     	   ],

          "fnDrawCallback": function (oSettings) {

         }

         });
	 
 }

function GridCibilScrRpt(evnt)
{
	
	var IOP=LoadFrmXML("RS006");
	var Path=window.location.origin
	IOP=Path+IOP
	
	var URL = $($(evnt).closest('.tbodytr').find('.tbodytrtd')[7]).text();
		
		if (URL =="")
		{
			alert("No Report is available to view");
			return false;
		}
		
	var DocUrl=IOP+URL;
			
	window.open(DocUrl);

}

function GridCIBILValidate(evnt)
{
	var CIBIL=LoadFrmXML("V0179");
	
	if(CIBIL=="CIBIL Yes")
	  {
	var appno=$($(evnt).closest('.tbodytr').find('.tbodytrtd')[8]).text();;
	var cusid=$($(evnt).closest('.tbodytr').find('.tbodytrtd')[9]).text();;
	$.ajax({
        url: "/TPLSW/CIBILIntegration",
        type: 'POST',
        data: {appno:appno,cusid:cusid,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:true,
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
               if(stm != "")
                 {
        	 var obj = JSON.parse(stm).Status
        
        	 if(obj=="Success")
        		 {
        		 //alert('CIBIL Report Generated');
				 
			//	 fnlresult="Success";
			
			$("#CBLViewRpt").click();
			
			
			
			
		    //$("#"+Verify).val('Verified')
        		 }
				 else
				 {
					  alert(JSON.parse(stm).Status);
				 }
                  }
               else
                   {
                     alert('CIBIL Failed');
                   }
        	 
    },
    error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	 alert("Fail");
    	   }
});
	
	  }
	  else
	  {
		   alert('CIBIL Integration not available')
		  return;
	  }
	
}


function ViewCblRPT(CIBIL)
{
	if ($("#CIBIL").text() == "Initiate CIBIL")
	{
		alert("Initiate CIBIL to View Reports");
	}
	else
	{
		$("#CBLViewRpt").click();
		$("#CCCibilRptModal").click();
	}	
}

function ChKModeDataClear()
{
		 $(".CHKCHAGE").val('')
		 $(".CHKCHAGE").next().removeClass('active');
	
		 
}


function ClearUpload()
{
	 var Mode=$("input[name='PFDT_MODE']:checked"). val(); 
	 if(Mode=="Cheque")
	  {
	  $(".UPLOAD").text('Upload Cheque')
	  $("#PFDT_COLLATTACHMENT").val('');
	  $(".DDU").show()
	  $(".DDV").hide()
	  $(".DDV").next().next().closest('span').text('')
	  $("input[name=datafile]").attr('disabled',false);
	  $("input[name=datafile]").attr('display','block');
	  }
  else if(Mode=="DD")
      {
	    $(".UPLOAD").text('Upload DD')
	    $("#PFDT_COLLATTACHMENT").val('');
	    $(".DDV").hide()
	    $(".DDU").show()
	    $(".DDV").next().next().closest('span').text('')
	    $("input[name=datafile]").attr('disabled',false);
	  }
  else
	  {
	    $("#PFDT_COLLATTACHMENT").val('');
	    $(".DDU").show()
	    $(".DDV").hide()
	    $(".DDV").next().next().closest('span').text('')
	    $("input[name=datafile]").attr('disabled',false);
	  }
}

function ChkPayAmt()
{
var PayAmt=$("#PFDT_AMOUNT").val()
    if(PayAmt == "0")
	{
	 alert('Amount is  should not entered zero allow to make payment')
	 $("#PFDT_AMOUNT").val('')
	 return false;
	}
	//$("#Save1").click();
}

function CheckDmndAmt(DMAmt,GSTAmt)
{
	var DemandAmt=$("#"+DMAmt).val().replace(/,/g,'');
	var GSTAmount=$("#"+GSTAmt).val().replace(/,/g,'');
	
	var PFTimes=$("#DMY12").val().split("|")[0]
	
        if(GSTAmount == "0")
	      {
	          alert('Amount is  should not entered zero allow to make payment')
	           $("#"+GSTAmt).val('')
	           return false;
	      }
	   else if( parseInt(DemandAmt*PFTimes)<parseInt(GSTAmount))
		  {
		     alert('Amount cannot be greater than '+PFTimes+' times of Demand Amount.');
		     $("#"+GSTAmt).val('');
		       return false;
		  }
}
/*
function CheckDmndAmt(DMAmt,GSTAmt)
{
	var DemandAmt=$("#"+DMAmt).val().replace(/,/g,'');
	var GSTAmount=$("#"+GSTAmt).val().replace(/,/g,'');
	
	if(DemandAmt<GSTAmount)
		{
		 alert(' Amount field should not be greater than Demand amount');
		 $("#"+GSTAmt).val('');
		 return false;
		}
}*/

function GetCustomerName()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,$("#LogUsr").val(),"","","","LSW_SGETSALSMNGRUSR")
	var CusName=$(xml).find('RESULT').html();	
	$("#DeferredTo").find('option').not($("#DeferredTo").find('option:first')).remove()
	$("#DeferredTo").append(CusName)
	$("#DeferredTo").material_select('destroy');
	$("#DeferredTo").material_select();
	
	$("#PFDT_DEFRTO").find('option').not($("#PFDT_DEFRTO").find('option:first')).remove()
	$("#PFDT_DEFRTO").append(CusName)
	$("#PFDT_DEFRTO").material_select('destroy');
	$("#PFDT_DEFRTO").material_select();
}

function InitDiffrmnt(){
	var xml=UI_getdata($("#PrcsID").val(),$("#DeferredTo").val(),$(".FormPageMultiTab li.active a div").text(),$("#PFDT_AMOUNT").val().replace(/,/g,''),"PF","LSW_SUPDTDEFRMNTDTL")
	$("#PFDT_DEFRSTATUS").val("PENDING");
	$("#PFDT_DEFRCMNT").val($("#comment").val());
	$("#PFDT_DEFRTO option:contains("+$("#DeferredTo").val()+")").attr("selected","selected")
	$("#PFDT_DEFRTO").material_select('destroy');
	$("#PFDT_DEFRTO").material_select();
	$("#PFDT_DEFRSTATUS").next().addClass('active');
	$("#PFDT_DEFRCMNT").next().addClass('active');
	$("#PFDT_DEFRTO").next().addClass('active');
	$("#MOBIPOPCLOSE").click()
	$(".Defrmnt").show();
        $(".DEFER").hide();
	$(".RedioMNDRY").removeClass('PFDTMndtry')
		 $('.COLLDISB').attr('disabled',true);
		 $(".CHK").hide();
		  $(".OnlineMode").hide();  
	
}

function GetDmdAmt()
{
var DemandAmount=$("#PFDT_DEMANDAMT").val();

if((DemandAmount == "0"  || DemandAmount=="") && $(".FormPageMultiTab li.active").attr("id")=="PF1")
    {
     alert('Fill the Property Details')
	 $("#FormMainTab2").click();
     return false;
    }
}

/*$('.Collected').on('click', function() {
	
	  $(".loader").show();
	// Collections Start
	
if ($("[name=PFDT_MODE]:checked").val() == "Online")
	{
 $("#Save1").click();
}

	if ($("[name=PFDT_COLECTIONTYP]:checked").val() == "Collectible")
	{
	var PFNO1 = $(".FormPageMultiTab li.active a div").text();
	var PRCSID1 = $("#PrcsID").val();
	var RECEIPTNO=""


	$.ajax({
	   url: "/TPLSW/COLLECTIONS",
	   type: 'POST',
	   data: {PRCSID:PRCSID1,PFNO:PFNO1,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	   async:true,
	  // dataType: 'json',
	  // contentType:'application/json',
	   
	   success: function(stm){        
	  // var obj = JSON.parse(JSON.stringify(stm))
	    if (stm == "")
	    {
	    	
	    alert("Error Occured. Contant IT!!!");
	    return;			    
	    
	    }
	    
	    else if (stm.split("|")[2] == "")
	    {
	    
	    alert("Error Occured. Contant IT!!!");
	    return;
	    
	    }
	    else
	    {
	    
	   //var CUSID = UI_getdata(PRCSID1,PFNO1,stm.split("|")[2],"","","LSW_SPFINTRSTATUS");	
	    	
	    	$("#PFDT_RECIPTNUM").val(stm.split("|")[2]);	    	
	    	$("#PFDT_PFCOLLECT").val('Collected');	
	    	$("#PFDT_TRANSSTATUS").val('In Progress');
	    	
	    	
	    	//alert('PF Collected')
	    	
	    	$("#Save1").click();
	    	
	    	ClickCollectedBtn();
	    	
	    	
	   
	  /* $.ajax({
		    url: "/TPLSW/LMSPF",
		    type: 'POST',
		    data: {PRCSID:PRCSID1,PFNO:PFNO1,RECEIPTNO:RECEIPTNO,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
		    async:true,
		   // dataType: 'json',
		   // contentType:'application/json',
		    
		    success: function(stm){        
		   // var obj = JSON.parse(JSON.stringify(stm))
		    	if (stm == "")
		    		{
		    		
		    		alert("Error Occured. Contant IT!!!");
		    		return;
		    		
		    		
		    		}
		    	
		    	else if (stm.split("|")[1] == "No Data")
	    			{
	    			
	    			alert("Error Occured. Contant IT!!!");
		    		return;
	    			
	    			}
		    	
		    	else if (stm.split("|")[1] == "Success")
		    		{
		    		//alert("Data Found");
	                     
		    		}
		
		},
		error: function(stm) {
			 //window.alert(LoadFrmXML("V0125"))
						
			alert("Demand Error Occured. Contant IT!!!");
			   }
		});
	
	   
	   
	    alert ("Receipt Generated");
	    
	    }
	    
	},
	error: function(stm) {

		$("#PFDT_RECIPTNUM").val("");	    	
	$("#PFDT_PFCOLLECT").val('Collected');	
	$("#PFDT_TRANSSTATUS").val('Realized');
	
	
	//alert('PF Collected')
	
	$("#Save1").click();
	
	ClickCollectedBtn();
		
		alert("Collections Error Occured. Contant IT!!!");

	  }
	});

	
	// Collections End	
	}
	
	$(".loader").fadeOut("slow");
	
	/*var Mode=$("input[name='PFDT_MODE']:checked"). val();
	
	    if(Mode=="online")
		{
		$("#Collected").click();
		}
	    else if(Mode=="Cheque")
		{
	    $("#ChkCollected").click();
		}
})
*/


function CHKCOLLECTIONTYPE()
{

	var PFDT_COLECTIONTYP=$("input[name='PFDT_COLECTIONTYP']:checked"). val();
	
	if(PFDT_COLECTIONTYP=="Deferred")
		{
        $(".Defrmnt").show();
 		$(".DEFER").hide();
		$(".RedioMNDRY").removeClass('PFDTMndtry')
			 $('.COLLDISB').attr('disabled',true);
			 $(".CHK").hide();
			  $(".OnlineMode").hide();  
        }
	else
		{
		$(".Defrmnt").hide();
        }
	
}

function CHKCOLLECTIONChange()
{

	var PFDT_COLECTIONTYP=$("input[name='PFDT_COLECTIONTYP']:checked"). val();
	
	if(PFDT_COLECTIONTYP=="Collectible")
    {
		$(".Defrmnt").hide();
		$("#PFDT_DEFRSTATUS").val('');
		$("#PFDT_DEFRCMNT").val('');
		$("#PFDT_DEFRSTATUS").next().removeClass('active')
		$("#PFDT_DEFRCMNT").next().removeClass('active')
		$(".DEFER").show();
	        $(".RedioMNDRY").addClass('PFDTMndtry')
                $("#comment").val('');
		
		
   }
	else
		{
         $(".RedioMNDRY").removeClass('PFDTMndtry')
		}
	
}


function OnlineTrans()
{
	var Mode=$("input[name='PFDT_MODE']:checked"). val();
   if(Mode=="Online")
	   {
            $(".TRANSONLINE").show();
	   }
   else
	   {
	   
	   $(".TRANSONLINE").hide();
	   
	   }
}

function GetCustName()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES")
	var CusName=$(xml).find('RESULT').html();	
	$("#PFDT_CHEHOLDERNAME").append(CusName)
    //$('#LPDT_PROPOWNER').materialSelect();
    //$('#LPDT_PERSONS').materialSelect();
}


// Added for P2 DElivery on ONline Payment 16042020 Start
function REinitCol()
{

	if ($("[name=PFDT_COLECTIONTYP]").val() == "Collectible" && $("#PFDT_RECIPTNUM").val() == "") 
	{				
	$(".Collected").click();
	}
	else
		{
		alert("Collections Already Done");
		}
	

}
// Added for P2 DElivery on ONline Payment 16042020 End

function ChequeView(id)
{
//ajaxindicatorstart("Generating, Please wait...");
var IOP=LoadFrmXML("RS006");
	//var processId= $(this).closest('tr').children('td:eq(4)').text();
	var RedirectURL="";
	//var AppNo=AppNo
    var url= $("#DMY1").val()
    
    
		    if (url != "")
		    	{
		    	
	//if(AcctNo!=""){
	//RedirectURL = url.replace("XXDMSIDXX",$("#"+id).val().split("\\")[0]);
	
	if ($("#"+id).val().split("\\")[0] == "")
		
		{
			alert("Cheque is not Available to View");
			return;
		}
	
	RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + $("#"+id).val().split("\\")[0];
	
	$("#DocView").attr("src", RedirectURL);
	
	/*var link = document.createElement("a");
    link.download = 'Report';
    link.href = RedirectURL;
    link.click();*/
	//ScrnFileDownload(RedirectURL);
	//window.open(RedirectURL);
	//WintabsCtrl(RedirectURL,'Term Sheet',AppNo,'yes');
	//ajaxindicatorstop();
		    	}
		    else
	    	{
	    	alert("Cheque is not Available to View");
	    //	ajaxindicatorstop();
	    	}
}


function CheckPayStatus()
{
    var PRCSID=$("#PrcsID").val();
	var PFID=$("#PFDT_PFNO").val();
	$.ajax({
        url: "/TPLSW/PAYMENTSTATUS",
        type: 'POST',
        data: {PRCSID:PRCSID,PFID:PFID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:false,
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
	   
	   if(stm != "")
	   {
        	 var obj = JSON.parse(stm).body.resultInfo.resultStatus
        
        	 if(obj=="TXN_SUCCESS")
        		 {
        	var PrcsId=$("#PFDT_PRCSID").val()
		 var PFNO=$("#PFDT_PFNO").val();
		// $("#PFDT_PFCOLLECT").val('Collected')
		 var xml=UI_getdata(PrcsId,"Online",PFNO,"","","LSW_SGETONLINEMODEDETLS")
		 var n = document.getElementsByClassName('ONLINE');
      for (i = 0; i < n.length; i++) 
        {
          name = document.getElementsByClassName('ONLINE').item(i).id
         
          var val = $(xml).find(name).text();
 
          if($("#"+ name).length > 0)
          {
        	  $("#"+ name).val(val); 
        	  $("#"+ name).next().addClass('active');
          } 
        }
		$('.PF').hide();
		$('#CheckModal').hide();
		$('#OnlineModal').show();
        		 }	
        		 else
        		 {
					 alert(JSON.parse(stm).body.resultInfo.resultMsg);
        		   $("#OnlineModal").hide();
				   $('.PF').show();
        		 }
	   }
        else
	    {
			$("#OnlineModal").hide();	
            $('.PF').show();			
	    }	 
    },
    error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	alert('Please Contact IT');
    	   }
});
}