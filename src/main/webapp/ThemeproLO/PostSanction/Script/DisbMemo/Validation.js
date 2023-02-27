
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
	 
	//var DisbAmt=$($('.DISB').find(event.target).closest('.DYNROW')[0]).find("input[name='DISB_DISBAMT']").val();	
	//var LoanID=$($('.DISB').find(event.target).closest('.DYNROW')[0]).find("input[name='DISB_LOANID']").val();	
	
	var amt=0;
	for(var i =0;i<$('.DISB').find('.DYNROW').length;i++)
	{
	  amt = parseFloat(amt) + parseFloat($($('.DISB').find("input[name='DISB_DISBAMT']")[i]).val().replace(/,/g, ""));
	}
	
	var Favamt=0;
	for(var i =0;i<$('.Memo').find('.DYNROW').length;i++)
	{
		Favamt = parseFloat(Favamt) + parseFloat($($('.Memo').find("input[name='DBFD_PAYAMT']")[i]).val().replace(/,/g, ""));
	}
	
	if(amt!=Favamt)
	{
		alert('Payee Amount  should be equal to Disbursement amount');
        r="Payee Amount  should be equal to Disbursement amount"
		return r;
	}
	
		/*var DisbAmt = $("#DBMM_DISBAMT").val().replace(/,/g, "");
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
		}*/
	//return;
	
	 if($("#DBMM_TRANCHID").val()=="Tranche 1")
	 {
       var xml=UI_getdata($("#PrcsID").val(),$("#DBMM_TRANCHID").val(),"","","","LSW_SCALLDISBURSEMENT")
	 }	 
     else
     {
		var Param3="";
	  for(var k =0;k<$('.DISB').find('.DYNROW').length;k++)
	    {
	       Param3=$($('.DISB').find("input[name='DISB_LOANID']")[k]).val()
	    }
    
	   var Param4=$("#DMY7").val().split('|')[7]
	   var xml=UI_getdata($("#PrcsID").val(),$("#DBMM_TRANCHID").val(),Param3,Param4,"","LSW_SCALLDISBURSEMENT_TRANCHE")
	 }



  if (xml != "")
  {
  if($(xml).find('CODE').text()=="200" )
	  { 
			UI_getdata($("#PrcsID").val(),"","","","Disbursement","LSW_SSMSEMAILLINKSND");
 
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
	 else if($(xml).find('CODE').text()=="1000") 	 
	  {
		alert($(xml).find('MSG').text());	 
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
	if($("#DBMM_TRANCHID").val()=="Tranche 1")
	{
     var xml=UI_getdata($("#PrcsID").val(),$("#DBMM_TRANCHID").val(),"","","","LSW_SCALLDISBURSEMENT")
	}	 
  else
    {
       var Param3="";
	  for(var k =0;k<$('.DISB').find('.DYNROW').length;k++)
	    {
	       Param3=$($('.DISB').find("input[name='DISB_LOANID']")[k]).val()
	    }
	 var Param4=$("#DMY7").val().split('|')[7]
	 var xml=UI_getdata($("#PrcsID").val(),$("#DBMM_TRANCHID").val(),Param3,Param4,"","LSW_SCALLDISBURSEMENT_TRANCHE")
	}
	
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
  else if($(xml).find('CODE').text()=="1000") 	 
	  {
		alert($(xml).find('MSG').text());	 
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
function GentrateDisbMemo()
{
		var IOP=window.location.origin;
	var PrcsId=$("#DMY7").val().split("|")[7]
	var UniqId=$(".FormPageMultiTab li.active").attr('id');
	var Year=$("#RACD_FINYEAR").val()
	var Consolid=$("input:radio[name=RACD_TYP]:checked").val()

    ajaxindicatorstart("Downloading.. Please wait");
	
	//  if($("#VERTICAL").val()=="UCV")
	  //{
		var flname = IOP+LoadFrmXML("RT0120")+"&__format=pdf&param1="+PrcsId+"&param2="+UniqId+"&param3="+Year+"&param4="+Consolid+"&__filename=Disbursement_Memo"+$(".FormPageMultiTab li.active").text()+".pdf";
	//  }
/*  else if ($("#VERTICAL").val()=="UCV Eco")
	  {
		var flname = IOP+LoadFrmXML("RT0112")+"&__format=pdf&param1="+PrcsId+"&param2="+UniqId+"&param3="+Year+"&param4="+Consolid+"&__filename=Applicform_"+$(".FormPageMultiTab li.active").text()+".pdf";
	  } */

	  ajaxindicatorstop();
	  
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
			
	/* var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()

	var flname = IOP+LoadFrmXML("RT089")+"&__format=pdf&Param1="+PrcsId+"&Param2="+$("#DMY7").val().split("|")[8]+"&__filename=Applicationform_"+$("#DMY7").val().split("|")[7]+".pdf";
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop(); */
}
/* function GentrateDisbMemo(event)
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
} */

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



function DIBAMT(PAYMENT,DISB,ROW)
{
    var DIS=$("#"+PAYMENT+ROW).val().replace(/,/g,'');
	var AMT=$("#"+DISB+ROW).val().replace(/,/g,'');
    
	if(parseInt(DIS)<parseInt(AMT))
		{
		alert('Payee Amount  should not be grater than Disbursement amount')
	    $("#"+DISB+ROW).val('')
	     $("#"+DISB+ROW).next().removeClass('active')
		}
	    

}

function HndlPEMI(HTML,i){
	
	 var val=$(HTML).find('input:radio[name=DISB_PEMID]:checked').val();
	
	if(val == "Yes")
		{
		var xml=UI_getdata($("#PrcsID").val(),$(HTML).find("input[name=DISB_ACTUDISBAMT]").val().replace(/,/g, ""),$("#DMY3").val(),$(HTML).find("input[name=DISB_TRANCHID]").val(),$(HTML).find("input[name=DISB_LOANID]").val(),"LSW_SGETDISBMEMOTRNCHAMT");
		if($("#DMY5").val().split("|")[2]!="CreditOPS")
		{
			$(HTML).find("input[name=DISB_PEMIAMT]").val(CURCommaSep($(xml).find("PEMIAmount").text()));
			$(HTML).find("input[name=DISB_PEMIAMT]").next().addClass("active");
			
	     //$("#DBMM_PEMIAMT").val(CURCommaSep($(xml).find("PEMIAmount").text()));
		//$("#DBMM_PEMIAMT").next().addClass("active");
		}
		
		
		
		$(HTML).find("input[name=DISB_OTHRDUC]").val(CURCommaSep($(xml).find("TotalDeduction").text()));
		$(HTML).find("input[name=DISB_OTHRDUC]").next().addClass("active");
		
		$(HTML).find("input[name=DISB_TOTDEDUC]").val(CURCommaSep($(xml).find("TotalDeduction").text()));
		$(HTML).find("input[name=DISB_TOTDEDUC]").next().addClass("active");
		
		$(HTML).find("input[name=DISB_DISBAMT]").val(CURCommaSep($(xml).find("DisbursementAmount").text()));
		$(HTML).find("input[name=DISB_DISBAMT]").next().addClass("active");
		
		/*$("#DBMM_TOTDEDUC").val(CURCommaSep($(xml).find("TotalDeduction").text()));
		$("#DBMM_TOTDEDUC").next().addClass("active");
		$("#DBMM_DISBAMT").val(CURCommaSep($(xml).find("DisbursementAmount").text()));
		$("#DBMM_DISBAMT").next().addClass("active");*/
		
	   var DISBAMT=$(HTML).find("input[name=DISB_ACTUDISBAMT]").val().replace(/,/g, "");
	   if(DISBAMT=="")
		   {
		   DISBAMT=0;
		   }
       var PEMI=$(HTML).find("input[name=DISB_PEMIAMT]").val().replace(/,/g,'');  
       if(PEMI=="")
	   {
    	   PEMI=0;
	   }
	   var DEDUCTION=$(HTML).find("input[name=DISB_TOTDEDUC]").val().replace(/,/g,'');  
	   if(DEDUCTION=="")
	   {
		   DEDUCTION=0;
	   }
	    var OTHRDEDUCTION = $(HTML).find("input[name=DISB_OTHRDUC]").val().replace(/,/g,'');  
	   if(OTHRDEDUCTION=="")
	   {
		   OTHRDEDUCTION=0;
	   }
	   
	   var TotalDET=parseInt(PEMI)+parseInt(DEDUCTION)+parseInt(OTHRDEDUCTION)
	   $(HTML).find("input[name=DISB_TOTDEDUC]").val(CURCommaSep(parseFloat(TotalDET).toFixed(0)));
	   var TotalDisb=parseInt(DISBAMT)-(parseInt(PEMI)+parseInt(DEDUCTION)+parseInt(OTHRDEDUCTION))
		$(HTML).find("input[name=DISB_DISBAMT]").val(CURCommaSep(TotalDisb));
		$(HTML).find("input[name=DISB_DISBAMT]").next().addClass("active");
		
	//	GetRemainAmtChange()
		}
	else
	{
		var xml=UI_getdata($("#PrcsID").val(),$(HTML).find("input[name=DISB_ACTUDISBAMT]").val().replace(/,/g, ""),$("#DMY3").val(),$(HTML).find("input[name=DISB_TRANCHID]").val(),$(HTML).find("input[name=DISB_LOANID]").val(),"LSW_SGETDISBMEMOTRNCHAMT");
		
		//var xml=UI_getdata($("#PrcsID").val(),$("#DBMM_ACTUDISBAMT").val().replace(/,/g, ""),$("#DMY3").val(),$("#DBMM_TRANCHID").val(),"","LSW_SGETDISBMEMOTRNCHAMT");
		$(HTML).find("input[name=DISB_PEMIAMT]").val('0');
		$(HTML).find("input[name=DISB_PEMIAMT]").next().addClass("active");
		//$("#DBMM_TOTDEDUC").val('');
		//$("#DBMM_TOTDEDUC").next().removeClass("active");
		var TotDeduc=$(xml).find("TotalDeduction").text()
		
		$(HTML).find("input[name=DISB_OTHRDUC]").val(CURCommaSep(parseFloat(TotDeduc).toFixed(0)));
		$(HTML).find("input[name=DISB_OTHRDUC]").next().addClass("active");
		
		$(HTML).find("input[name=DISB_TOTDEDUC]").val(CURCommaSep(parseFloat(TotDeduc).toFixed(0)));
		$(HTML).find("input[name=DISB_TOTDEDUC]").next().addClass("active");
		
		var DEDUCTION=$(HTML).find("input[name=DISB_TOTDEDUC]").val().replace(/,/g,'');  
		
		var DISBAMT=$(HTML).find("input[name=DISB_ACTUDISBAMT]").val().replace(/,/g, "")
	   if(DISBAMT=="")
		   {
		   DISBAMT=0;
		   }
		   if(DEDUCTION=="")
		   {
			   DEDUCTION=0;
		   }
		   var OTHRDEDUCTION = $(HTML).find("input[name=DISB_OTHRDUC]").val().replace(/,/g,'');   
		   if(OTHRDEDUCTION=="")
		   {
			   OTHRDEDUCTION=0;
		   }
		var TotalDET=parseInt(DEDUCTION)
		$(HTML).find("input[name=DISB_TOTDEDUC]").val(CURCommaSep(parseFloat(TotalDET).toFixed(0)));
	   var TotalDisb=parseInt(DISBAMT)-(parseInt(OTHRDEDUCTION))
		$(HTML).find("input[name=DISB_DISBAMT]").val(CURCommaSep(TotalDisb));
		$(HTML).find("input[name=DISB_DISBAMT]").next().addClass("active");
		
	    //$("#DBMM_DISBAMT").val(CURCommaSep($(xml).find("DisbursementAmount").text()));
		//$("#DBMM_DISBAMT").next().addClass("active");
	    //$("#DBMM_DISBAMT").val('');
	    //$("#DBMM_DISBAMT").next().removeClass("active");
		//GetRemainAmtChange()
	}
	
	var DATA1=["Memo|"];
	var MemoData1=DATA1[0].split("|")[0];
	var FavHTML=$("." + MemoData1).find(".DYNROW")[i]
 //   $(FavHTML).find("input[name=DBFD_PAYAMT]").val($(HTML).find("input[name=DISB_DISBAMT]").val())
	
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
		/*for(var i = 0;i<$(Evnt).closest('.Memo').find('.DYNROW').length;i++){
			
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
		}*/
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

function ChkLoanAmt(HTML,i){
	
	// Changed Function Content for p2 Delivery 45 Start
	//var ACLDISAMT=$("#DISB_ACTUDISBAMT").val();
	var ACLDISAMT=$(HTML).find("input[name=DISB_ACTUDISBAMT]").val().replace(/,/g, "");
	
	
	var xml=UI_getdata($("#PrcsID").val(),$(HTML).find("input[name=DISB_LOANID]").val(),"","","","LSW_SGETELIGIBTYLNAMT");
	var SANLNAMT=$(xml).find("LOANAMT").text()
	
		if(parseFloat(ACLDISAMT)> parseFloat( SANLNAMT ))
	{
		$(HTML).find("input[name=DISB_ACTUDISBAMT]").val('0');
		alert("Actual Disbursal Amount should not be greater than Remaining Amount - "+ CURCommaSep(SANLNAMT));
	}
	//var SanAmt = $("#DMY3").val().split("|")[3];
	/*var SanAmt = $("#DBMM_DREMAINGAMT").text().replace(/,/g, "");
	
	var ActlDisbAmt=$("#DBMM_ACTUDISBAMT").val().replace(/,/g, "");
	
	if(parseFloat(ActlDisbAmt)> parseFloat( SanAmt ))
	{
		$("#DBMM_ACTUDISBAMT").val('0');
		alert("Actual Disbursal Amount should not be greater than Remaining Amount - "+ CURCommaSep(SanAmt));
	}
	else
	{
		
	}
	*/
	HndlPEMI(HTML,[i-1]);
	// Changed Function Content for p2 Delivery 45 Start	
}

function CalcMnthFrRepy(LonID){
	var IntrYr=0;
	var yr = $('#DMY3').val().split('|')[4]
	var Mnth = parseInt(yr);
	return Mnth+'|'+$("#PrcsID").val()+'|'+IntrYr+'|'+$("#"+LonID).val();
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

function CheckFavLon()
{
	 if($(".FormPageMultiTab li.active a div").text() != "Tranche 1")
	  {
		  var LonID = $("#TRANCHELON").val(); 
		  var DATA=["Memo|"];
	    for (j=0;j<DATA.length;j++)
		 {
		   var MemoData=DATA[j].split("|")[0];
	       var row = $("." + MemoData).find(".DYNROW").length;
	       for (i=0;i<row;i++)
	       {
	         var HTML = $("." + MemoData).find(".DYNROW")[i];
			 $(HTML).find('select[name=DBFD_LOANTYPE]').val(LonID);
			 $(HTML).find('select[name=DBFD_LOANTYPE]').attr("disabled",true); 
			 $(HTML).find('select[name=DBFD_LOANTYPE]').material_select();
		   }
		 }
	  }
}

/*function DIBAMT(DisAmt,PayeeAmt,Id)
{
	if($(".FormPageMultiTab .active a").text() != "Tranche 1")
	  {
		   var DATA=["Memo|"];
	    for (j=0;j<DATA.length;j++)
		 {
		   var MemoData=DATA[j].split("|")[0];
	       var row = $("." + MemoData).find(".DYNROW").length;
		   var Amount=0;
	       for (i=0;i<row;i++)
	       {
			    var HTML = $("." + MemoData).find(".DYNROW")[i];
				  var Amount1 = $(HTML).find('input[name='+PayeeAmt+']').val().replace(/,/g,'')
			       Amount = parseFloat(Amount)+parseFloat(Amount1)
		   }
		   
		   if(Amount > $("#"+DisAmt+"1").val().replace(/,/g,''))
		   {
			   alert("Payee Amount Should not be grater than Disbursement Amount");
			   $(Id).val('');
			   $(Id).next().removeClass('active');
			   return false;
		   }
		   
		 }
	  }
}
*/
function Chkfav(Evnt)
{
	var arry=[];
	for(var j=0;j<$(".DISB").find(".DYNROW").length;j++)
	{
		arry.push($($(".DISB").find(".DYNROW")[j]).find("input[name=DISB_LOANID]").val())
		
	}
	var SelectedCusID = Evnt.value;
	var LoanID="";
	
	for(var k=0;k<arry.length;k++)
	{
		LoanID = arry[k];
		for(var i=0;i<$(".Memo").find(".DYNROW").length;i++)
		{
			if(SelectedCusID == $($(".Memo").find(".DYNROW")[i]).find("select[name=DBFD_FAVOURTYPE]").val() && LoanID == $(Evnt).closest(".DYNROW").find("select[name=DBFD_LOANTYPE]").val())
			{
				if($($(".Memo").find(".DYNROW")[i]).find("select[name=DBFD_FAVOURTYPE]").attr("id") != Evnt.id && $($(".Memo").find(".DYNROW")[i]).find("select[name=DBFD_LOANTYPE]").val() == LoanID)
				{
					alert("Already Favouring Exists For The Same Customer")
					Evnt.value="";
					$(Evnt).material_select("destroy");
					$(Evnt).material_select();
					return;
				}
			}
		}
	}
	
}


function CHKPAYAMT(){
	var DisbAmt =0;
	
	for(var i =0;i<$('.DISB').find('.DYNROW').length;i++)
		{
		DisbAmt = parseFloat(DisbAmt) + parseFloat($($('.Memo').find("input[name='DISB_DISBAMT']")[i]).val().replace(/,/g, ""));
		}
		
		
		
	var amt=0;
	for(var i =0;i<$('.Memo').find('.DYNROW').length;i++)
		{
		amt = parseFloat(amt) + parseFloat($($('.Memo').find("input[name='DBFD_PAYAMT']")[i]).val().replace(/,/g, ""));
		}
		
	if(DisbAmt<amt)
		{
		alert('Payee Amount  should not be greater than Disbursement amount');
		return 
		}
}

function GridControlDetailKARZAGRDIFSC (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 
		 
		 /*{ targets: 8, "render": function ( data, type, row, meta ) {                            
	 			
			   var rowno = meta.row;       			 
			 
	 		  var HTML ='<span><select class="Gridmdb-select md-form colorful-select dropdown-primary" multiple id="ADDRTYPE'+rowno+'" name="RXLD_ADDRTYPE">';
	 			HTML = HTML + '<option>--Select--</option>';
	 			HTML = HTML + '<option value="ID PROOF">ID PROOF</option></span>';
				HTML = HTML + '<option value="SIGN PROOF">SIGN PROOF</option></span>';
				HTML = HTML + '<option value="DOB PROOF">DOB PROOF</option></span>';
				HTML = HTML + '<option value="ADDRESS PROOF 1">ADDRESS PROOF 1</option></span>';
				HTML = HTML + '<option value="ADDRESS PROOF 2">ADDRESS PROOF 2</option></span>';
			          			
	 			var htmldata = $(HTML);
	 			
	 			$(htmldata).find("option[value='"+data+ "']").attr("selected","selected");

	          return htmldata[0].outerHTML; 
					
		         } 
				 }*/
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}