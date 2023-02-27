
function Ifscdetls(IDVAL,BNKNAME,BRANCH,CITY)
{
var val=GetIfsc($(IDVAL).val());
var row=$($('.Memo').find(event.target).closest('.DYNROW')[0]).attr('data-row');
if($(val).find("BANK").text() == "")
{
$(IDVAL).val('');
$('#'+BNKNAME+row).val('');
$('#'+BRANCH+row).val('');
$('#'+CITY+row).val('');
$('#'+CITY+row).next().removeClass('active');
$('#'+BNKNAME+row).next().removeClass('active');
$('#'+BRANCH+row).next().removeClass('active');
$('#'+CITY+row).attr('disabled',true)
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
}


function getPFData()
{
	 var PrcsId=$("#PrcsID").val()
	 var xml=UI_getdata(PrcsId,"","","","","LSW_SDISBMEMODETL")
	 var n = document.getElementsByClassName('DBMMDBfields');
  for (i = 0; i < n.length; i++) 
    {
      name = document.getElementsByClassName('DBMMDBfields').item(i).id
     
      var val = $(xml).find(name).text();

      if($("#"+ name).length > 0)
      {
    	  $("#"+ name).val(val); 
    	  if($("#"+ name).attr('type')!="radio")
    		  {
    		  $("#"+ name).next().addClass('active');
    		  }
      } 
    }	
}


function CheckPayMode(html,id,FavType)
{	
var PayMode=$("#"+id). val();
	
          if(PayMode=="RTGS"||PayMode=="NEFT")
           {
			 $(html).find(".OCHQE").attr('disabled',true)
			 $(html).find(".OCHQE").val('');
			 $(html).find(".OCHQE").material_select("destroy");	
 		     $(html).find(".OCHQE").material_select();
			 $(html).find(".OCHQE").removeClass('DBFDMndtry');
			 $(html).find(".OCHQE").next().find(".MndtryAstr").html("");
             $(html).find(".RTGS").show();
             $(html).find(".RTGMND").addClass('DBFDMndtry')
		     $(html).find(".RTGMND").next().find(".MndtryAstr").html("*");
		   	 $(html).find(".CUSACC ").addClass('DBFDMndtry')
			 $(html).find(".CUSACC ").next().find(".MndtryAstr").html("*");
		   if($("#"+FavType).val()=="Others")
		     {
		      $(html).find(".OTHACC ").addClass('DBFDMndtry')
		      $(html).find(".OTHACC ").next().find(".MndtryAstr").html("*");
			  $(html).find(".CUSACC ").removeClass('DBFDMndtry')
			  $(html).find(".CUSACC ").next().find(".MndtryAstr").html("");
		     }
			 else
			 {
			  $(html).find(".OTHACC ").removeClass('DBFDMndtry')
		      $(html).find(".OTHACC ").next().find(".MndtryAstr").html(""); 
			 }
           }
	else if(PayMode=="Cheque")
		   {
			$(html).find(".OCHQE").attr('disabled',false)
			$(html).find(".OCHQE").addClass('DBFDMndtry')
			$(html).find(".OCHQE").next().find(".MndtryAstr").html("*");
			$(html).find(".OCHQE").material_select("destroy");	
			$(html).find(".OCHQE").material_select();
            $(html).find(".RTGS").show();
            $(html).find(".RTGMND").removeClass('DBFDMndtry')
			$(html).find(".RTGMND").next().find(".MndtryAstr").html("");
			$(html).find(".OTHACC ").removeClass('DBFDMndtry')
			$(html).find(".OTHACC ").next().find(".MndtryAstr").html("");
			$(html).find(".CUSACC ").removeClass('DBFDMndtry')
			$(html).find(".CUSACC ").next().find(".MndtryAstr").html("");
		   }
           else 
          {
			$(html).find(".OCHQE").attr('disabled',true)
			$(html).find(".OCHQE").val('');
			$(html).find(".OCHQE").material_select("destroy");	
 		    $(html).find(".OCHQE").material_select();
			$(html).find(".OCHQE").removeClass('DBFDMndtry');
			$(html).find(".OCHQE").next().find(".MndtryAstr").html("");
            $(html).find(".RTGS").show();
            $(html).find(".RTGMND").removeClass('DBFDMndtry')
			$(html).find(".RTGMND").next().find(".MndtryAstr").html("");
			$(html).find(".OTHACC ").removeClass('DBFDMndtry')
			$(html).find(".OTHACC ").next().find(".MndtryAstr").html("");
			$(html).find(".CUSACC ").removeClass('DBFDMndtry')
			$(html).find(".CUSACC ").next().find(".MndtryAstr").html(""); 
          }
}



function PushtoLMS()
{
	    var r="";
	
		var DisbAmt = $("#DBMM_DISBAMT").val().replace(/,/g, "");
     	if(DisbAmt=="")
		{
		DisbAmt=0;
		alert('Enter Valid Disbursement Amount');
		r="Enter Valid Disbursement Amount"
		return r;
		}
	var amt=0;
	for(var i =0;i<$('.Memo').find('.DYNROW').length;i++)
		{
		amt = parseFloat(amt) + parseFloat($($('.Memo').find("input[name='DBFD_PAYAMT']")[i]).val().replace(/,/g, ""));
		}
	if(DisbAmt!=amt)
		{
		alert('Payee Amount  should be equal to Disbursement amount');
        r="Payee Amount  should be equal to Disbursement amount"
		return r;
		}
	//return;
  var xml=UI_getdata($("#PrcsID").val(),"","","",$("#DBMM_TRANCHID").val(),"LSW_SCOMPLETEFLOW")	
  
  
  if (xml != "")
  {
  if($(xml).find('CODE').text()=="200")
	  { 
		 UI_getdata($("#PrcsID").val(),"","","",$("#DBMM_TRANCHID").val(),"LSW_SSMSMAILLOGDISBINS")
	   alert("Disbursed Successfully, Account ID - " + $(xml).find('MSG').text());
	   
	  if($("#DBMM_ENACHURMNO").val()!="")
	   {
	   $.ajax({
	              url: "/TPLSW/ENACHLMSSUBMIT",
	              type: 'POST',
	              data: {PRCSID:$("#PrcsID").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
				if(stm == "")
	    		{
					alert('E-NACH Failed')
					//return false;
				}
				else if(stm.split("|")[0]=="SUCCESS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="FAILURE")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="ALREADY EXISTS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="No Data")
				{
					alert(stm.split("|")[3])
				}
					},
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                 alert("E-NACH Failed.");
						 	//return false;
		                   }
	               });	
	   }
	   
	  }
	else if($(xml).find('CODE').text()=="800")
	  { 
		 UI_getdata($("#PrcsID").val(),"","","",$("#DBMM_TRANCHID").val(),"LSW_SSMSMAILLOGDISBINS")
	   alert("The file has been already Disbursed Successfully");
	   
	  if($("#DBMM_ENACHURMNO").val()!="")
	   {
	   $.ajax({
	              url: "/TPLSW/ENACHLMSSUBMIT",
	              type: 'POST',
	              data: {PRCSID:$("#PrcsID").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
				if(stm == "")
	    		{
					alert('E-NACH Failed')
					//return false;
				}
				else if(stm.split("|")[0]=="SUCCESS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="FAILURE")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="ALREADY EXISTS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="No Data")
				{
					alert(stm.split("|")[3])
				}
					},
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                 alert("E-NACH Failed.");
						 	//return false;
		                   }
	               });	
	   }
	   
	  }
	 /* else if($(xml).find('CODE').text()=="800")
	  { 
         alert("The file has been already disbursed.");
		 UI_getdata($("#PrcsID").val(),"","","",$("#DBMM_TRANCHID").val(),"LSW_SSMSMAILLOGDISBINS");
		 
		 if($("#DBMM_ENACHURMNO").val()!="")
	   {
	   $.ajax({
	              url: "/TPLSW/ENACHLMSSUBMIT",
	              type: 'POST',
	              data: {PRCSID:$("#PrcsID").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
				if(stm == "")
	    		{
					alert('E-NACH Failed')
					//return false;
				}
				else if(stm.split("|")[0]=="SUCCESS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="FAILURE")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="ALREADY EXISTS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="No Data")
				{
					alert(stm.split("|")[3])
				}
					},
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                 alert("E-NACH Failed.");
						 	//return false;
		                   }
	               });	
	   }
	  }*/
  else
	  {
	  alert("Failed - " + $(xml).find('MSG').text());
	  r=$(xml).find('MSG').text();
	  }
  }
  else
  {
	var xml=UI_getdata($("#PrcsID").val(),"","","",$("#DBMM_TRANCHID").val(),"LSW_SCOMPLETEFLOW")	
	   
if(xml != "")
  {
  if($(xml).find('CODE').text()=="200")
	  { 
		 UI_getdata($("#PrcsID").val(),"","","",$("#DBMM_TRANCHID").val(),"LSW_SSMSMAILLOGDISBINS")
	   alert("Disbursed Successfully, Account ID - " + $(xml).find('MSG').text());
	   
	    if($("#DBMM_ENACHURMNO").val()!="")
	   {
	   $.ajax({
	              url: "/TPLSW/ENACHLMSSUBMIT",
	              type: 'POST',
	              data: {PRCSID:$("#PrcsID").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
				if(stm == "")
	    		{
					alert('E-NACH Failed')
					//return false;
				}
				else if(stm.split("|")[0]=="SUCCESS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="FAILURE")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="ALREADY EXISTS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="No Data")
				{
					alert(stm.split("|")[3])
				}
					},
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                 alert("E-NACH Failed.");
						 	//return false;
		                   }
	               });	
	   }
	  }
  else if($(xml).find('CODE').text()=="800")
	  { 
		 UI_getdata($("#PrcsID").val(),"","","",$("#DBMM_TRANCHID").val(),"LSW_SSMSMAILLOGDISBINS")
	   alert("The file has been already Disbursed Successfully");
	   
	  if($("#DBMM_ENACHURMNO").val()!="")
	   {
	   $.ajax({
	              url: "/TPLSW/ENACHLMSSUBMIT",
	              type: 'POST',
	              data: {PRCSID:$("#PrcsID").val(),Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
				if(stm == "")
	    		{
					alert('E-NACH Failed')
					//return false;
				}
				else if(stm.split("|")[0]=="SUCCESS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="FAILURE")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="ALREADY EXISTS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="No Data")
				{
					alert(stm.split("|")[3])
				}
					},
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                 alert("E-NACH Failed.");
						 	//return false;
		                   }
	               });	
	   }
	   
	  }
  else
	  {
	     alert("Failed - " + $(xml).find('MSG').text());
	      r=$(xml).find('MSG').text();
	  }
  }
  else
  {
	   r="No Response"; 
  }
}
  
  UI_getdata($("#PrcsID").val(),$("#DBMM_TRANCHID").val(),xml,r,"","LSW_SDISB_LMS_LOG_WRITTER")
	  return r;
}

function GentrateDisbMemo(event)
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	var Tranche=$("#DBMM_TRANCHID").val();
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETCUSSCHEME")
       var Scheme=$(xml).find('LODE_SCHEME').text()
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT087")+"&__format=pdf&@PARAM1="+PrcsId+"&@PARAM2="+Scheme+"&@PARAM3="+Tranche+"&@PARAM4="+$("#DMY7").val().split("|")[8]+"&__filename=DM_"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();			
   $("#DBMM_DMRPTF").val('Yes')		

 
 if(event=="CAM")  
   {

       var PrcsId=$("#PrcsID").val()
       var CAMSTATUS=UI_getdata(PrcsId,"","","","","LSW_SHNDLRPTONDM")
       var STATUS=$(CAMSTATUS).find('RESULT').text()
	   if(STATUS=="Y")  
      {
       
	   //Approve Note
	   var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	
	var xml=UI_getdata(PrcsId,"","","","","LSW_SGETCUSSCHEME")
       var Scheme=$(xml).find('LODE_SCHEME').text()
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT085")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Scheme+"&Param3="+$("#DMY7").val().split("|")[0]+"&Param4="+$("#DMY7").val().split("|")[8]+"&__filename=ApproveNote-"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
			
		

      //

      var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	var Scheme=$(xml).find('LODE_SCHEME').text()

    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT039")+"&__format=pdf&@PARAM1="+PrcsId+"&@PARAM2="+Scheme+"&@PARAM3="+$("#DMY7").val().split("|")[0]+"&@PARAM4="+$("#DMY7").val().split("|")[8]+"&__filename=CAM_"+$("#DMY7").val().split("|")[7]+"_"+$(".FormPageMultiTab li.active").text()+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();	  
      }	
   }
}

function EMIDEDUCT()
{

  var  PEMTDUCT=$("input[name='DBMM_PEMID']:checked"). val();
	if(PEMTDUCT=="No")
		{
		   $('.PEMIDED').val('')
		   $('.PEMIDED').attr('disabled',true)
		
		}
	else
		{
		   $('.PEMIDED').attr('disabled',false)
        }


}


function CHECKPAYMENTAMT(Mode,AMT)
{
	
	if($("#"+AMT).val()!="")	
	{
    var PaymentAmt=$("#"+AMT).val().replace(/,/g,'');
    var Mode1=$("#"+Mode).val()
	if(PaymentAmt<200000 &Mode1=='RTGS')
		{
		alert('Payee Amount can not be less then 2 lakhs for RTGS')
		$("#"+Mode).val('');
		//$("#"+Mode).empty();
        //$("#"+Mode).append('<option value="" selected>--Select--</option><option value="RTGS">RTGS</option><option value="Cheque">Cheque</option><option value="NEFT">NEFT</option>') 
        $("#"+Mode).material_select("destroy");	
 		$("#"+Mode).material_select();
		return false;
		}
	}
	else
		{
		alert('Payee Amount can not be less then 2 lakhs for RTGS')
		$("#"+Mode).val('');
		//$("#"+Mode).empty();
        //$("#"+Mode).append('<option value="" selected>--Select--</option><option value="RTGS">RTGS</option><option value="Cheque">Cheque</option><option value="NEFT">NEFT</option>') 
        $("#"+Mode).material_select("destroy");	
 		$("#"+Mode).material_select();
		return false;
        }
}



function DIBAMT(PAYMENT,DISB)
{

   /* var PAYAMT=$("#"+DISB).val().replace(/,/g,'');
    var DISBAMT=$("#DBMM_DISBAMT").val().replace(/,/g,'');
	if(parseInt(DISBAMT)<parseInt(PAYAMT))
		{
		alert('Payee Amount  should not be grater than Disbursement amount')
	    $("#"+DISB).val('')
	     $("#"+DISB).next().removeClass('active')
		}*/
	    

}

function HndlPEMI(val){
	if(val == "Yes")
		{
		var xml=UI_getdata($("#PrcsID").val(),$("#DBMM_ACTUDISBAMT").val().replace(/,/g, ""),$("#DMY3").val(),$("#DBMM_TRANCHID").val(),"","LSW_SGETDISBMEMOTRNCHAMT");
		if($("#DMY5").val().split("|")[2]!="CreditOPS")
		{
		$("#DBMM_PEMIAMT").val(CURCommaSep($(xml).find("PEMIAmount").text()));
		$("#DBMM_PEMIAMT").next().addClass("active");
		}
		$("#DBMM_TOTDEDUC").val(CURCommaSep($(xml).find("TotalDeduction").text()));
		$("#DBMM_TOTDEDUC").next().addClass("active");
		$("#DBMM_DISBAMT").val(CURCommaSep($(xml).find("DisbursementAmount").text()));
		$("#DBMM_DISBAMT").next().addClass("active");
		
	   var DISBAMT=$("#DBMM_ACTUDISBAMT").val().replace(/,/g,'');
	   if(DISBAMT=="")
		   {
		   DISBAMT=0;
		   }
       var PEMI=$("#DBMM_PEMIAMT").val().replace(/,/g,'');  
       if(PEMI=="")
	   {
    	   PEMI=0;
	   }
	   var DEDUCTION=$("#DBMM_TOTDEDUC").val().replace(/,/g,'');  
	   if(DEDUCTION=="")
	   {
		   DEDUCTION=0;
	   }
	    var OTHRDEDUCTION = $("#DBMM_OTHRDUC").val().replace(/,/g,'');  
	   if(OTHRDEDUCTION=="")
	   {
		   OTHRDEDUCTION=0;
	   }
	   
	   var TotalDET=parseInt(PEMI)+parseInt(DEDUCTION)+parseInt(OTHRDEDUCTION)
	   $("#DBMM_TOTDEDUC").val(CURCommaSep(parseFloat(TotalDET).toFixed(0)));
	   var TotalDisb=parseInt(DISBAMT)-(parseInt(PEMI)+parseInt(DEDUCTION)+parseInt(OTHRDEDUCTION))
		$("#DBMM_DISBAMT").val(CURCommaSep(TotalDisb));
		$("#DBMM_DISBAMT").next().addClass("active");
		
	//	GetRemainAmtChange()
		}
	else{
		var xml=UI_getdata($("#PrcsID").val(),$("#DBMM_ACTUDISBAMT").val().replace(/,/g, ""),$("#DMY3").val(),$("#DBMM_TRANCHID").val(),"","LSW_SGETDISBMEMOTRNCHAMT");
		$("#DBMM_PEMIAMT").val('0');
		$("#DBMM_PEMIAMT").next().addClass("active");
		//$("#DBMM_TOTDEDUC").val('');
		//$("#DBMM_TOTDEDUC").next().removeClass("active");
		var TotDeduc=$(xml).find("TotalDeduction").text()
		$("#DBMM_TOTDEDUC").val(CURCommaSep(parseFloat(TotDeduc).toFixed(0)));
		$("#DBMM_TOTDEDUC").next().addClass("active");
		
		var DEDUCTION=$("#DBMM_TOTDEDUC").val().replace(/,/g,'');  
		
		var DISBAMT=$("#DBMM_ACTUDISBAMT").val().replace(/,/g,'');
	   if(DISBAMT=="")
		   {
		   DISBAMT=0;
		   }
		   if(DEDUCTION=="")
		   {
			   DEDUCTION=0;
		   }
		   var OTHRDEDUCTION = $("#DBMM_OTHRDUC").val().replace(/,/g,'');  
		   if(OTHRDEDUCTION=="")
		   {
			   OTHRDEDUCTION=0;
		   }
		var TotalDET=parseInt(DEDUCTION)+parseInt(OTHRDEDUCTION)
		$("#DBMM_TOTDEDUC").val(CURCommaSep(parseFloat(TotalDET).toFixed(0)));
	   var TotalDisb=parseInt(DISBAMT)-(parseInt(DEDUCTION)+parseInt(OTHRDEDUCTION))
		$("#DBMM_DISBAMT").val(CURCommaSep(TotalDisb));
		$("#DBMM_DISBAMT").next().addClass("active");
		
	    //$("#DBMM_DISBAMT").val(CURCommaSep($(xml).find("DisbursementAmount").text()));
		//$("#DBMM_DISBAMT").next().addClass("active");
	    //$("#DBMM_DISBAMT").val('');
	    //$("#DBMM_DISBAMT").next().removeClass("active");
		//GetRemainAmtChange()
	}
}

/*function GetCustomerName(HTML,Evnt)
{
	if(Evnt=="Change")
		{
		$(HTML).find("select[name=DBFD_FAVOURTYPE]").material_select('destroy');
		}
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES1")
	var CusName=$(xml).find('RESULT').html();	
	$(HTML).find("select[name=DBFD_FAVOURTYPE]").append(CusName)
	if(Evnt=="Change")
		{
		$(HTML).find("select[name=DBFD_FAVOURTYPE]").material_select();
		}
}
*/

function GetCustomerName()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,$("#DMY7").val().split("|")[8],"","","","LSW_SGETCUSTOMERNAMES1")
	var CusName=$(xml).find('RESULT').html();
	//$("#RPBD_PDCPROVIDE").material_select('destroy');
	$("#DBFD_FAVOURTYPE").append(CusName)
	var CheqName=$(xml).find('RESULT1').html();
	$("#DBFD_CHEQNAM").append(CheqName)
}

/*
function DataToFavrFld(Evnt,id){
	
	if(id=="Load")
	{
		var FavType=$(Evnt).find('select[name=DBFD_FAVOURTYPE]').val()
		
		if(FavType=="Others")
		{
			$(Evnt).find('input[name=DBFD_FAVOURNAME]').removeClass("DSVLBL");
			$(Evnt).find('input[name=DBFD_FAVOURNAME]').attr('disabled',false)
		}
		else
		{
			$(Evnt).find('input[name=DBFD_FAVOURNAME]').addClass("DSVLBL");
			$(Evnt).find('input[name=DBFD_FAVOURNAME]').attr('disabled',true)
		}
	}
	else
	{
	 	var Chngval=$(Evnt).closest('.DYNROW').find('select[name=DBFD_FAVOURTYPE]').val();
	 	var ChngRow=$(Evnt).closest('.DYNROW').attr('data-row')
		for(var i = 0;i<$(Evnt).closest('.Memo').find('.DYNROW').length;i++){
			
			var lopval = $($(Evnt).closest('.Memo').find('.DYNROW')[i]).find('select[name=DBFD_FAVOURTYPE]').val();
			var lopRow = $($(Evnt).closest('.Memo').find('.DYNROW')[i]).attr('data-row');
			if(ChngRow!=lopRow)
				{
				if(Chngval==lopval && $(Evnt).val() != "Others")
					{
					$(Evnt).closest('.DYNROW').find('select[name=DBFD_FAVOURTYPE]').val('');
					$(Evnt).closest('.DYNROW').find('select[name=DBFD_FAVOURTYPE]').parent().find('input').val('');
					alert("Selected Favouring Already Exist.");
					return
					}
				}
		}
	 	if(event.type=="click"){
	 		$(Evnt).closest('.col-md-4').next().find('input').val('');
	 		$(Evnt).closest('.col-md-4').next().find('input').removeClass("DSVLBL");
	 	}
	 	if(event.target.textContent != "Others"){
	 		$(Evnt).closest('.col-md-4').next().find('input').val(event.target.textContent);
	 		$(Evnt).closest('.col-md-4').next().find('input').next().addClass("active");
	 		$(Evnt).closest('.col-md-4').next().find('input').attr('disabled',true);
	 		$(Evnt).closest('.col-md-4').next().find('input').addClass("DSVLBL")
	 	}
	 	else{
	 		$(Evnt).closest('.col-md-4').next().find('input').attr('disabled',false);
	 		$(Evnt).closest('.col-md-4').next().find('input').removeClass("DSVLBL");
	 		$(Evnt).closest('.col-md-4').next().find('input').next().removeClass("active");
	
	 	//	$(Evnt).closest('.col-md-4').next().find('input').addClass("DSVLBL");
	 	}
	}
	
}
*/

function DataToFavrFld(Evnt,id){
	
	if(id=="Load")
	{
		var FavType=$(Evnt).find('select[name=DBFD_FAVOURTYPE]').val()
		
		if(FavType=="Others")
		{
			$(Evnt).find('input[name=DBFD_FAVOURNAME]').removeClass("DSVLBL");
			$(Evnt).find('input[name=DBFD_FAVOURNAME]').attr('disabled',false)
		}
		else
		{
			$(Evnt).find('input[name=DBFD_FAVOURNAME]').addClass("DSVLBL");
			$(Evnt).find('input[name=DBFD_FAVOURNAME]').attr('disabled',true)
		}
	}
	else
	{
	 	var Chngval=$(Evnt).closest('.DYNROW').find('select[name=DBFD_FAVOURTYPE]').val();
	 	var ChngRow=$(Evnt).closest('.DYNROW').attr('data-row')
		for(var i = 0;i<$(Evnt).closest('.Memo').find('.DYNROW').length;i++){
			
			var lopval = $($(Evnt).closest('.Memo').find('.DYNROW')[i]).find('select[name=DBFD_FAVOURTYPE]').val();
			var lopRow = $($(Evnt).closest('.Memo').find('.DYNROW')[i]).attr('data-row');
			if($("#DMY7").val().split("|")[8] != "HE02")
			{
			if(ChngRow!=lopRow)
				{
					
				if(Chngval==lopval && $(Evnt).val() != "Others")
					{
					$(Evnt).closest('.DYNROW').find('select[name=DBFD_FAVOURTYPE]').val('');
					$(Evnt).closest('.DYNROW').find('select[name=DBFD_FAVOURTYPE]').parent().find('input').val('');
					alert("Selected Favouring Already Exist.");
					return
					}
				}
			}
		}
	 	if(event.type=="click"){
	 		$(Evnt).closest('.col-md-4').next().find('input').val('');
	 		$(Evnt).closest('.col-md-4').next().find('input').removeClass("DSVLBL");
	 	}
	 	if(event.target.textContent != "Others"){
	 		$(Evnt).closest('.col-md-4').next().find('input').val(event.target.textContent);
	 		$(Evnt).closest('.col-md-4').next().find('input').next().addClass("active");
	 		$(Evnt).closest('.col-md-4').next().find('input').attr('disabled',true);
	 		$(Evnt).closest('.col-md-4').next().find('input').addClass("DSVLBL")
	 	}
	 	else{
	 		$(Evnt).closest('.col-md-4').next().find('input').attr('disabled',false);
	 		$(Evnt).closest('.col-md-4').next().find('input').removeClass("DSVLBL");
	 		$(Evnt).closest('.col-md-4').next().find('input').next().removeClass("active");
	
	 	//	$(Evnt).closest('.col-md-4').next().find('input').addClass("DSVLBL");
	 	}
	}
	
}

function TalleyPayeeNDisbAmt(id){
	var DisbAmt = $("#DBMM_DISBAMT").val().replace(/,/g, "");
	if(DisbAmt=="")
		{
		DisbAmt=0;
		}
	var amt=0;
	for(var i =0;i<$('.Memo').find('.DYNROW').length;i++)
		{
		amt = parseFloat(amt) + parseFloat($($('.Memo').find("input[name='DBFD_PAYAMT']")[i]).val().replace(/,/g, ""));
		}
	if(DisbAmt<amt)
		{
		alert('Payee Amount  should not be greater than Disbursement amount');
		$(id).val(0);
		}
}

function GridControlDetailREPAYGRD(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

    popTableModPageGrid1 = $('#' + TableID).DataTable({
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
        "aoColumnDefs": [{
                "sClass": "dpass",
                "aTargets": jQuery.parseJSON(hideClm)
            },
            {
                targets: 2,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="OPENINGBALANCE' + rowno + '"  name="OPENINGBALANCE' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=OPENINGBALANCE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=OPENINGBALANCE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 3,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="INTEREST' + rowno + '"  name="INTEREST' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=INTEREST' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=INTEREST' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 4,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="PRINCIPAL' + rowno + '"  name="PRINCIPAL' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=PRINCIPAL' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=PRINCIPAL' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 5,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="EMI' + rowno + '"  name="EMI' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=EMI' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=EMI' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            },
            {
                targets: 6,
                "render": function(data, type, row, meta) {
                    var rowno = meta.row;
                    var HTML = '<span><input type="text" disabled style = "width:100px" id="CLOSINGBALANCE' + rowno + '"  name="CLOSINGBALANCE' + rowno + '" maxlength="10" class="form-control DSVLBL form-control  IsNumberFields IsCURCommaFields">';
                    HTML = HTML + '</span>';
                    var htmldata = $(HTML);
                    if ($(htmldata).find('[name=CLOSINGBALANCE' + rowno + ']').hasClass("IsCURCommaFields")) {
                        data = CURCommaSep(data);
                    }
                    $(htmldata).find('[name=CLOSINGBALANCE' + rowno + ']').attr("value", data);
                    return htmldata[0].outerHTML;
                }
            }
            

        ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}
/*
function ChkLoanAmt(){
	var SanAmt = $("#DMY3").val().split("|")[3];
	var ActlDisbAmt=$("#DBMM_ACTUDISBAMT").val().replace(/,/g, "");
	if(parseFloat(SanAmt)<parseFloat(ActlDisbAmt))
		{
		$("#DBMM_ACTUDISBAMT").val('0');
		alert("Actual Disbursal Amount should not be greater than Sanctioned Amount -"+$("#DMY3").val().split("|")[3]);
		}
	else{
		HndlPEMI($('input[name=DBMM_PEMID]:checked').val());
	}
}*/

function ChkLoanAmt(){
	
	// Changed Function Content for p2 Delivery 45 Start
	
	//var SanAmt = $("#DMY3").val().split("|")[3];
	var SanAmt = $("#DBMM_DREMAINGAMT").text().replace(/,/g, "");
	
	
	
	var ActlDisbAmt=$("#DBMM_ACTUDISBAMT").val().replace(/,/g, "");
	if(parseFloat(ActlDisbAmt)> parseFloat( SanAmt ))
		{
		$("#DBMM_ACTUDISBAMT").val('0');
		alert("Actual Disbursal Amount should not be greater than Remaining Amount - "+ CURCommaSep(SanAmt));
		}
	else{
		HndlPEMI($('input[name=DBMM_PEMID]:checked').val());
	}
	
	
	// Changed Function Content for p2 Delivery 45 Start
	
}

function CalcMnthFrRepy(){
	var IntrYr=0;
	if($("#DMY7").val().split('|')[8] == "HE02" && $("#DMY7").val().split('|')[0] == "GECL 3.0")
	{
		IntrYr = 24
	}
	if($("#DMY7").val().split('|')[8] == "HE02" && $("#DMY7").val().split('|')[0] == "GECL Additional 10%")
	{
		IntrYr = 24
	}
	if($("#DMY7").val().split('|')[8] == "HE02" && $("#DMY7").val().split('|')[0] == "GECL 2.0")
	{
		IntrYr = 12
	}
	if($("#DMY7").val().split('|')[8] == "HE02" && $("#DMY7").val().split('|')[0] == "Existing Loans")
	{
		IntrYr = 12
	}
	var yr = $('#DMY3').val().split('|')[4]
	var Mnth = parseInt(yr)*12;
	return Mnth+'|'+$("#PrcsID").val()+'|'+IntrYr;
}


function GetBnkName(HTML,Evnt,val,Mode)
{   

	if(Evnt=="Change")
		{
		$(HTML).find("select[name=DBFD_ACCTNUMB]").empty();
		$(HTML).find("select[name=DBFD_ACCTNUMB]").material_select('destroy');
		}
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKACCOUNTDETAILS")
	var CusName=$(xml).find('RESULT').html();	
	$(HTML).find("select[name=DBFD_ACCTNUMB]").append(CusName)
	if(Evnt=="Change")
		{
		$(HTML).find("select[name=DBFD_ACCTNUMB]").material_select();
        }
		
	   if(val=="Others")
       {
		   $(HTML).find(".OTHERACCT").show();
		   $(HTML).find(".OTHACC").addClass('DBFDMndtry')
		   $(HTML).find("select[name=DBFD_ACCTNUMB]").val("");
		   $(HTML).find(".OTHACC").next().find(".MndtryAstr").html("*");
		   $(HTML).find(".CUSACC").removeClass('DBFDMndtry')
		   $(HTML).find(".CUSACC").next().find(".MndtryAstr").html("");
           $(HTML).find(".CUSACCT").hide();
       }
	   else
	   {
		   $(HTML).find(".OTHERACCT").hide();
		   $(HTML).find(".CUSACCT").show();
		   $(HTML).find(".OTHACC").removeClass('DBFDMndtry')
		   $(HTML).find(".CUSACC").addClass('DBFDMndtry')
		   //$(HTML).find(".CUSACC").val('');
		   $(HTML).find("input[name='DBFD_ACCTNUM']").val('')
		   $(HTML).find("input[name='DBFD_ACCTNUM']").next().removeClass('active');
		   $(HTML).find(".CUSACC ").next().find(".MndtryAstr").html("*");
		   $(HTML).find(".OTHACC ").next().find(".MndtryAstr").html("");
	   }
	if($("#"+Mode).val()=="Cheque")
	{
		 $(HTML).find(".OTHACC").removeClass('DBFDMndtry')
		 $(HTML).find(".CUSACC").removeClass('DBFDMndtry')
		 $(HTML).find(".CUSACC ").next().find(".MndtryAstr").html("");
		 $(HTML).find(".OTHACC ").next().find(".MndtryAstr").html("");
	}
}


function GETREMAINGAMT()
{
	
	var ActlDisbAmt=Number($("#DBMM_ACTUDISBAMT").val().replace(/,/g, ""))
	var TotalDisbAmt=Number($("#DMY3").val().split("|")[3])
	
	var RemaimAmt=TotalDisbAmt-ActlDisbAmt
	if(RemaimAmt==NaN)
	{
    	RemaimAmt="0"
	}
	$("#DBMM_DREMAINGAMT").text(CURCommaSep(RemaimAmt));
	
}

/*
function GetRemainAmtChange()
{

	var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKTOTALDISBAMT");
	$("#DBMM_DTOTALDISBAMT").val($(op).find("TOTALDISBAMT").text())
	
	var TotalDisbAmt=Number($("#DBMM_DTOTALDISBAMT").val())
	var CurrentDisAmt=Number($("#DBMM_ACTUDISBAMT").val().replace(/,/g, ""))
	var TotalDisbAmt1=TotalDisbAmt+CurrentDisAmt
	
	
		$("#DBMM_DDISBURAMT").val(TotalDisbAmt1)
	
	var ActlDisbAmt=Number($("#DMY3").val().split("|")[3])
	var TotalDisbAmt=Number($("#DBMM_DDISBURAMT").val())
	
	/*if(parseFloat(ActlDisbAmt)<parseFloat(TotalDisbAmt1))
	{
		alert('Actual Disbursement Amount Should not be greater than Sanction Amount')
		
		$("#DBMM_ACTUDISBAMT").val('')
		return false
		
	}//
	
	var RemaimAmt=ActlDisbAmt-TotalDisbAmt
	if(RemaimAmt==NaN)
	{
    	RemaimAmt="0"
	}
	$("#DBMM_DDISBURAMT").text(CURCommaSep(TotalDisbAmt1))
	$("#DBMM_DREMAINGAMT").text(CURCommaSep(RemaimAmt));
	
}*/

function GetRemainAmtChange()
{

	var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKTOTALDISBAMT");
	$("#DBMM_DTOTALDISBAMT").val($(op).find("TOTALDISBAMT").text())
	
	
		
	// Added for P2 Delivery 45 START
	
	$("#DBMM_CANCELAMT").text(CURCommaSep($(op).find("CANCELAMT").text()))
	
	// Added for P2 Delivery 45 END
	
	
	
	var TotalDisbAmt=Number($("#DBMM_DTOTALDISBAMT").val())
	var CurrentDisAmt=Number($("#DBMM_ACTUDISBAMT").val().replace(/,/g, ""))
	var TotalDisbAmt1=TotalDisbAmt+CurrentDisAmt
	
	
		$("#DBMM_DDISBURAMT").val(TotalDisbAmt1)
	
	var ActlDisbAmt=Number($("#DMY3").val().split("|")[3])
	var TotalDisbAmt=Number($("#DBMM_DDISBURAMT").val())
	
	/*if(parseFloat(ActlDisbAmt)<parseFloat(TotalDisbAmt1))
	{
		alert('Actual Disbursement Amount Should not be greater than Sanction Amount')
		
		$("#DBMM_ACTUDISBAMT").val('')
		return false
		
	}*/
	
	var RemaimAmt=(ActlDisbAmt-TotalDisbAmt) - Number($("#DBMM_CANCELAMT").text().replace(/,/g, "")) // Minus Added for p2 Delivery 45 
	if(RemaimAmt==NaN)
	{
    	RemaimAmt="0"
	}
	$("#DBMM_DDISBURAMT").text(CURCommaSep(TotalDisbAmt1))
	$("#DBMM_DREMAINGAMT").text(CURCommaSep(RemaimAmt));
	
}


function GetBnkDetl(AcctNo,Row)
{
	var xml=UI_getdata($("#PrcsID").val(),$("#"+AcctNo).val(),"","","","LSW_SBANKDTLDM")
	
	 var n = document.getElementsByClassName('RTGMND');
	  for(i = 0; i < n.length; i++) 
	    {
	      name = document.getElementsByClassName('RTGMND').item(i).id
	      name=name.replace(Row,'');
	      var val = $(xml).find(name).text();

	      if($("#"+ name+Row).length > 0)
	      {
	    	  $("#"+ name+Row).val(val); 
	    	  if($("#"+ name+Row).attr('type')!="radio")
	    		  {
	    		  $("#"+ name+Row).next().addClass('active');
	    		  }
	      } 
	    }	
}


function EnachReTrigger()
{
	var Prcsid=$("#PrcsID").val();
	
	$.ajax({
	              url: "/TPLSW/ENACHLMSSUBMIT",
	              type: 'POST',
	              data: {PRCSID:Prcsid,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
				   if(stm == "")
	    		{
					alert('E-NACH Failed')
					//return false;
				}
				else if(stm.split("|")[0]=="SUCCESS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="FAILURE")
				{
					alert(stm.split("|")[3])
					//return false;
				}
				else if(stm.split("|")[0]=="ALREADY EXISTS")
				{
					alert(stm.split("|")[3])
				}
				else if(stm.split("|")[0]=="No Data")
				{
					alert(stm.split("|")[3])
					//return false;	
				}
					},
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                 alert("E-NACH Failed.");
						 	return false;
		                   }
	               });
}

function GetChequeName(Type,Cheque)
{
	var xml=UI_getdata("",$("#"+Type).val(),"","","","LSW_SGETCHEQUENAME")
	var ChequeName=$(xml).find('RESULT').html();
	$("#"+Cheque).empty()
	$("#"+Cheque).append(ChequeName)
	$("#"+Cheque).material_select();	
}

//Other Deduction Patch Start
function LoadOverDueAMTAPI() {
	var TotUnPaidAmt=0;
	$.ajax({
		url: "/TPLSW/OVERDUE",
		type: 'POST',
		data: {
			PRCSID:$("#DMY7").val().split('|')[7],Prvnt: $(window.parent.parent.document).find("#Prvnt").val()
		},
		async: false,
		success: function (stm) {
			if (stm == "") {
				$("#DBMM_OTHRDUC").val(0);
				alert('OVERDUE API Failed')
				return false;
			} 
			else if (stm.split("|")[0] == "SUCCESS") {
				var obj= JSON.parse(stm.split("|")[3]);
				if(obj.Root.MSG.Result == "Success"){
					$("#DBMM_OTHRDUCHIDDEN").val(stm.split("|")[3]);
					
					/*for(var OVERDUETAG=0;OVERDUETAG<obj.Root.Overdue.length;OVERDUETAG++)
					{
						TotUnPaidAmt =TotUnPaidAmt+parseFloat(obj.Root.Overdue[OVERDUETAG].unpaid)
					}
					
					for(var OVERDUETAG=0;OVERDUETAG<$(obj.Root.Overdue).length;OVERDUETAG++)
					{
						TotUnPaidAmt =TotUnPaidAmt+parseFloat($(obj.Root.Overdue)[OVERDUETAG].OverdueAmount)
					}*/
					
					var TotUnPaidAmt =$(obj.Root.Overdue)[0].OverdueAmount; 
					$("#DBMM_OTHRDUC").val(CURCommaSep(TotUnPaidAmt)); 
				}
				else{
					$("#DBMM_OTHRDUC").val(0);
					alert('OVERDUE API Failed')
					return false;
				}
			}
			else if (stm.split("|")[0] != "SUCCESS") {
				$("#DBMM_OTHRDUC").val(0);
				alert(obj.Root.MSG.Result)
				return false;
			} 
		},
		error: function (stm) {
			$("#DBMM_OTHRDUC").val(0);
			alert("OVERDUE API Failed.");
			return false;
		}
	});
}

function OpenDeduc()
{
	if($("#DBMM_OTHRDUCHIDDEN").val()=="")
	{
		alert('No data available to view')
		return false;
	}
	else
	{
		$("#OverDue").val($("#DBMM_OTHRDUCHIDDEN").val());
	   // $("#BTNODEDUCTGRD").click();
	   FncallDocChkLst(this,'ODeductTable',{spname:'LSW_SSHOWOTHRDUCOP',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#OverDue').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','ODEDUCTGRD');
	    $("#ODEDUC").click();
	}
}


function GridControlDetailODEDUCTGRD(popTableModPageGrid1, TableID, dtData, dtcolumn, hideClm) {

    popTableModPageGrid1 = $('#' + TableID).DataTable({
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
        "aoColumnDefs": [{
                "sClass": "dpass",
                "aTargets": jQuery.parseJSON(hideClm)
            },
			
			  ],

        "fnDrawCallback": function(oSettings) {

        }

    });

}
//End


