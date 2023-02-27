function LoadManualAvailable(html,id)
{
var Cheque=$(html).find("input[name='FCBD_RPTGENR']:checked"). val();
	
	if(Cheque=="Manual")
		{
		$(html).find(".ManualRpt").show()
		$(html).find(".DetailRpt").show()
        $(html).find(".AutoRpt").hide()
        $(html).find(".DetRpt").attr('disabled',false)
        $(html).find('.BnkMndtry').addClass('FCBDMndtry')
		}
	else if(Cheque=="Auto")
		{
		$(html).find(".ManualRpt").hide()
		$(html).find(".DetailRpt").hide()
		$(html).find(".AutoRpt").show()
		$(html).find('.BnkMndtry').removeClass('FCBDMndtry')
       var UploadValue=$(html).find("input[name='FCBD_UPLOADFILE']"). val();
		if(UploadValue!="")
		{
			$(html).find(".DetailRpt").show()
			$(html).find(".DetRpt").attr('disabled',true)
         }
       }
	else
		{
		$(html).find(".ManualRpt").hide()
		$(html).find(".AutoRpt").hide()
		$(html).find(".DetailRpt").hide()
		}
}
function ManualAvailable(html,id)
{
var Cheque=$(html).find("input[name='FCBD_RPTGENR']:checked"). val();
	
	if(Cheque=="Manual")
		{
		$(html).find(".ManualRpt").show()
		$(html).find(".DetailRpt").show()
        $(html).find(".AutoRpt").hide()
        
        $(html).find(".DetRpt").val('')
 
        $(html).find('.BnkMndtry').addClass('FCBDMndtry')
        $(html).find(".DetRpt").attr('disabled',false)
        $(html).find('.BNKL').removeClass('active')
		}
	else if(Cheque=="Auto")
		{
		$(html).find('.BnkMndtry').removeClass('FCBDMndtry')
		$(html).find(".ManualRpt").hide()
		$(html).find(".DetailRpt").hide()
		$(html).find(".AutoRpt").show()
		$(html).find(".DetRpt").val('')
	//	$(html).find('span').remove()
        $(html).find('input[type="file"]').attr('disabled',false)
		$(html).find('input[type="file"]').val('');
		$(html).find('input[type="file"]').show();
		$(html).find(".file-field").show()
		$(html).find(".FCBD_UPLOADFILE").hide()
		$(html).find(".file-field").find('input[type="file"]').css('display', 'block');
		//$(html).find('AutoRpt').find('span').find('.FileName').text('');

  //      $(html).find('input[type="file"]').val('');
	//	$(html).find('input[type="file"]').attr('disabled',false);
	//	$(html).find("input[name='FCBD_UPLOADFILE']"). val('');
        

  /*     var UploadValue=$(html).find("input[name='FCBD_UPLOADFILE']"). val();
		if(UploadValue!="")
		{
			$(html).find(".DetailRpt").show()
	        $(html).find(".DetRpt").attr('disabled',true)
         }*/
       }
	else
		{
		$(html).find(".ManualRpt").hide()
		$(html).find(".AutoRpt").hide()
		$(html).find(".DetailRpt").hide()
		}

}
function UploadFile()
{
	var DATA=["BankDetail1|"];
	 for (j=0;j<DATA.length;j++)
		 {
		 var ValuationID=DATA[j].split("|")[0];
	 var row = $("." + ValuationID).find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	LoadManualAvailable(HTML,"");
	 }
	}
}

function DateValidate(XID,YID)
{
if(YID.value!='')	
{
if(XID.value!='')	
{	
	var STDATE=$("#"+XID).val()
	var ENDDATE=$("#"+YID).val()

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


$(document).ready(function () {	

$(document).on("blur", ".AvgBal", function() {
	
	//$(this).val();
	
	var AmtLngth = $(this).closest('.tbodytr').find('[data-item=Amount]').length;
	
	var Amount = 0;
	
	var val="";
	
	for (i=0;i<AmtLngth;i++)
		{
		
		val = $($(this).closest('.tbodytr').find('[data-item=Amount]')[i]).val().replace(/,/g,'');
		
		if (val == "")
			{
			val = 0;
			}
		
		Amount = parseFloat(Amount) + parseFloat(val);
		
		}
	
	var Percentage =  $($(this).closest('.tbodytr').find('[data-item=Percentage]')[0]).val().replace(/,/g,'');
	
	if (Percentage == "")
	{
		Percentage = 0;
	}
		
	var Average = ((parseFloat(parseFloat(Amount)/100) * parseFloat(Percentage))/ parseInt(AmtLngth)).toFixed(2);
	
	
	$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(Average));
		 	
	var AverageLngth = $(this).closest('.tbody').find('[data-item=Average]').length;
	
	Amount = 0;
	val=0;
	
	for (j=0;j<AverageLngth;j++)
	{
	
	val = $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
	
	if (val == "")
		{
		val = 0;
		}
	
	Amount = parseFloat(Amount) + parseFloat(val);
	
	}
	
	var TotalAverageFld = $(this).attr("data-total");
	
	$(this).closest(".DYNROW").find('[name='+TotalAverageFld+']').val(CURINRCommaSep(Amount));
	
	//alert($(this).val());
	
	
	return false;
});

$(document).on("blur", ".FLOW", function() {
	
	var FLOWLen =$(this).closest('.tbody').find('tr').length;
	var FLOWAmount = 0;
	var val="";
	var GetDataItem = $(this).attr("data-scr");
	for (i=0;i<FLOWLen;i++)
		{
		val = $($(this).closest('.tbody').find('tr')[i]).find('[data-scr="'+GetDataItem+'"]').val().replace(/,/g,'');
		if (val == "")
		{
		val = 0;
		}
		FLOWAmount = parseFloat(FLOWAmount) + parseFloat(val);
		}
	
	var toval = $(this).attr('data-to');
	$('input[name="'+toval+'"]').val(CURINRCommaSep(FLOWAmount));
	
});
$(document).on("blur", ".FinYrIncm", function() {
	
	//$(this).val();
	
	
	var AmtLngth = $(this).closest('.tbodytr').find('[data-item=Amount]').length;
	
	var Amount = 0;
	
	var val="";
	
	for (i=0;i<AmtLngth;i++)
		{
		
		val = $($(this).closest('.tbodytr').find('[data-item=Amount]')[i]).val().replace(/,/g,'');
		
		if (val == "")
			{
			val = 0;
			}
		
		Amount = parseFloat(Amount) + parseFloat(val);
		
		}
	
	/*var Percentage =  $($(this).closest('.tbodytr').find('[data-item=Percentage]')[0]).val().replace(/,/g,'');
	
	if (Percentage == "")
	{
		Percentage = 0;
	}*/
		
	/*var Average = ((parseFloat(parseFloat(Amount)/100) * parseFloat(Percentage))/ parseInt(AmtLngth)).toFixed(2);*/
	
	var DailyBalnc=$($(this).closest('.tbodytr').find('[data-item=DailyBalanc]')[0]).val().replace(/,/g,'');
	  
	  if(DailyBalnc=="")
	  {
		  DailyBalnc=0;
	  }
	
	var SubData=$($(this).closest('.tbodytr').find('[data-item=SubtData]')[0]).val().replace(/,/g,'');
	  
	  if(SubData=="")
	  {
		  SubData=0;
	  }
	   var Average=0;
	  var Days=$($(this).closest('.tbodytr').find('[data-item=Days]')[0]).val()
	 
	  if($("#DMY7").val().split("|")[13]=="S00007" && parseFloat($("#DMY3").val().split("|")[3])>"10000000" && $("#DMY7").val().split("|")[8]=="HE01")
	  {
		  
			   Average=(parseFloat(DailyBalnc)-parseFloat(SubData))/parseFloat(Days)
			  Average=Math.round(Average * 100) / 100 
			  //Average.toFixed(2)
	  }
	  else
	  {
	  
	Amount=parseFloat(Amount)-parseFloat(SubData)
	
	var Average = parseFloat(Amount)/3
	Average=Math.round(Average * 100) / 100  //Average.toFixed(2)
	  }
	
	$($(this).closest('.tbodytr').find('[data-item=Average]')[0]).val(CURINRCommaSep(Average));
	   	
	var AverageLngth = $(this).closest('.tbody').find('[data-item=Average]').length;
	
	Amount = 0;
	val=0;
	
	for (j=0;j<AverageLngth;j++)
	{
	
	val = $($(this).closest('.tbody').find('[data-item=Average]')[j]).val().replace(/,/g,'');
	
	if (val == "")
		{
		val = 0;
		}
	
	Amount = parseFloat(Amount) + parseFloat(val);
	
	}
	Amount=Amount.toFixed(2);
	Amount=Amount/12
	var TotalAverageFld = $(this).attr("data-total");
	
	$(this).closest(".DYNROW").find('[name='+TotalAverageFld+']').val(CURINRCommaSep(Amount.toFixed(0)));
	
	return false;
});

});
/*
function getCusName() 
{
	//$("input[name='COBI_GENTER']:checked"). val();
	//var AcctIIdVal=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='FCBD_ACCTHOLDNAME']").val();	
	//var AcctIIdVal=$(html).find("input[name="+$(this).attr('name')+"]:checked"). val()
	//var AcctIId=$($('.BankDetail1').find(event.target).closest('.DYNROW')[0]).find("input[name='FCBD_ACCTHOLDNAME']").attr('id');
	var html=$('.BankDetail1').find(".DYNROW");
	var HOLDNameId=$($(html).find("input[name='FCBD_ACCTHOLDNAME']")[0]).attr('id')
	
    var row = $('.BankDetail1').find(".DYNROW").length;
	 for (i=0;i<row;i++)
	 {
	   var HOLDNameIId=$($(html).find("input[name='FCBD_ACCTHOLDNAME']")[i]).attr('id');
	   
	   if(HOLDNameId!=HOLDNameIId)
		   {
		       var AcctId=$($(html).find("input[name='FCBD_ACCTNUM']")[i]).attr('id')
		       var BrName=$($(html).find("input[name='FCBD_BNKNAMBR']")[i]).attr('id')
		       var HOLDNameIVal=$($(html).find("input[name='FCBD_ACCTHOLDNAME']")[0]).val()
		       $("#"+HOLDNameIId).val(HOLDNameIVal)
		       $("#"+HOLDNameIId).next().addClass('active')
		       $("#"+AcctId).attr('disabled',false);
		       $("#"+BrName).attr('disabled',false);
		   }
	 }
}*/

function CheckDocMndtry(TableID,FldClas,HDR)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  var RTNVAL="";
	  
	  for(i=0;i<Doclength;i++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd').length
		   
		  for(j=0;j<tdcount;j++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).length>0)
				  {
          if(j==5){
	           if(parseInt($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j-1]).find('input[type=text]').val())!=0 
	           && $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j-1]).find('input[type=text]').val()!=""
	           && $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j-1]).find('input[type=text]').val()!=0.00)
			   {
		          if($($($("#" + TableID).find(".tbodytr")[i]).find('.tbodytrtd')[5]).find('input[type=hidden]').val()=="")
		             {
			          RTNVAL = "Remarks is mandatory when Exclusion is entered";
				    		return RTNVAL;
		             }
	              }
                 }
				}
			 }
		  }
	 return RTNVAL;
}

function GetAccountField(Acct1,Acct2)
{

	if($("#"+Acct1).val() != "")
		{
		  $("#"+Acct2).val('ACCOUNT NUMBER - '+$("#"+Acct1).val())
		}
}

function BNKREMARKPOPUP(Evnt,ID){
	var ClosID = $(Evnt).next()
	ID=$(ID).attr('id')
	//var val =$("#"+$(ClosID).attr('id')).val()
	var val=$("#"+ID).find("#"+$(ClosID).attr("id")).val()
	
	//var val=ClosID.val()
	
	$("#REMARKSPopup").click();
	$("#REMARKSModal").find("#RemarksCONFIRM").attr("data-to",$(ClosID).attr("id"))
	$("#REMARKSModal").find("#RemarksCONFIRM").attr("data-tabel",ID)
	if(val != ""){
		$("#POPUPRemarks").val(val);
		$("#POPUPRemarks").next().addClass('active');
	}
	else{
		$("#POPUPRemarks").val("");
	}
}

function CalcInOutCkhPerc(InwBonc,OutwBonc,TotInwBonc,TotOutwBonc,InwPerc,OutwPerc,Transaction)
{
	var InwBonc1=$("#"+InwBonc).val();
	var OutwBonc1=$("#"+OutwBonc).val();
	
	var TotInwBonc1=$("#"+TotInwBonc).val();
	var TotOutwBonc1=$("#"+TotOutwBonc).val(); 
	
	var InwPerc1= parseInt(InwBonc1)/parseInt(TotInwBonc1)
	var OutwPerc1= parseInt(OutwBonc1)/parseInt(TotOutwBonc1)
	
	if (isNaN(OutwPerc1)) 
	{
		OutwPerc1 = 0
	}
	if (isNaN(InwPerc1)) 
	{
		InwPerc1 = 0
	}
	if($.isNumeric(InwPerc1)==false)
	{
		
		if(Transaction == "Inward Transaction")
		{
		$("#"+InwPerc).val("");
		$("#"+InwPerc).next().removeClass('active');
		
		alert("Enter Valid data in "+Transaction);
		return;
		
		}
		
	}
	else
	{
		
		if (isNaN(InwPerc1)) 
	{
		InwPerc1 = 0
	}
	InwPerc1=InwPerc1.toFixed(2)
	$("#"+InwPerc).val(InwPerc1);
	$("#"+InwPerc).next().addClass('active');
	}
	
	if($.isNumeric(OutwPerc1)==false)
	{
	if(Transaction == "Outward Transaction")
		{
		$("#"+OutwPerc).val("");
		$("#"+OutwPerc).next().removeClass('active');
		
		alert("Enter Valid data in "+Transaction);
		return;
		}
	
	}
	else
	{
	if (isNaN(OutwPerc1)) 
	{
		OutwPerc1 = 0
	}
	OutwPerc1=OutwPerc1.toFixed(2)
	
	$("#"+OutwPerc).val(OutwPerc1);
	
	$("#"+OutwPerc).next().addClass('active');
	}
}


function STMLPageCalc()
{
	var TotCrSum=$("#STML_TOTCRDSUM").val().replace(/,/g,'');
	
	var TotNonCrSum=$("#STML_TOTNONBCRDSUM").val().replace(/,/g,'');
	
	if(TotCrSum=="")
	{
		TotCrSum="0";
	}
	
	if(TotNonCrSum=="")
	{
		TotNonCrSum="0";
	}
	
	//var RevCrdSum=parseFloat(TotCrSum)-parseFloat(TotNonCrSum)
	
	var PercRevCrdSum=parseFloat(TotNonCrSum)/parseFloat(TotCrSum)
	
	//$("#STML_REVCRDSUM").val(CURINRCommaSep(RevCrdSum.toFixed(0)));
	$("#STML_PERCNBCRDSUM").val(CURINRCommaSep(PercRevCrdSum.toFixed(0)));
}


function BANKSUMAVG()
{
var xmlSTATUS=UI_getdata($("#PrcsID").val(),"SUMAVG",$("#STML_NUMBNKACCT").val(),"","","LSW_SABBCALCULATION")
if($(xmlSTATUS).find('RESULT').text()!="SUCCESS")
{
alert($(xmlSTATUS).find('RESULT').text())
return
}
var SUMAVG=$(xmlSTATUS).find('SUMAVG').text()
var MONTHAVG=$(xmlSTATUS).find('MONTHAVG').text()
if(isNaN(SUMAVG))
{
SUMAVG=0;
}
if(isNaN(MONTHAVG))
{
MONTHAVG=0;
}
    $("#STML_SUMAVG").val(CURINRCommaSep(parseFloat(SUMAVG).toFixed(2)));
$("#STML_MONTHABB").val(CURINRCommaSep(parseFloat(MONTHAVG).toFixed(2)));
$('#STML_SUMAVG').next().addClass('active');
$('#STML_MONTHABB').next().addClass('active');
   UPINFLOWSUMAVG();
}


function UPINFLOWSUMAVG()
{
var xmlSTATUS=UI_getdata($("#PrcsID").val(),"SUMAVGINFLOW",$("#STML_NUMBNKACCT").val(),"","","LSW_SABBCALCULATION")

if($(xmlSTATUS).find('RESULT').text()!="SUCCESS")
{
alert($(xmlSTATUS).find('RESULT').text())
return
}
var SUMAVGINFLOW=$(xmlSTATUS).find('SUMAVG').text()
if(isNaN(SUMAVGINFLOW))
{
SUMAVGINFLOW=0;
}

    $("#STML_TOTCRDSUM").val(CURINRCommaSep(parseFloat(SUMAVGINFLOW).toFixed(0)));
	$('#STML_TOTCRDSUM').next().addClass('active');
		
		
var xml=UI_getdata($("#PrcsID").val(),"SUMAVGEXCLUSION",$("#STML_NUMBNKACCT").val(),"","","LSW_SABBCALCULATION")

if($(xml).find('RESULT').text()!="SUCCESS")
{
alert($(xml).find('RESULT').text())
return
}
var SUMAVGEXCLUSION=$(xml).find('SUMAVG').text()
if(isNaN(SUMAVGEXCLUSION))
{
SUMAVGEXCLUSION=0;
}
	$("#STML_TOTNONBCRDSUM").val(CURINRCommaSep(parseFloat(SUMAVGEXCLUSION).toFixed(0)))
	$('#STML_TOTNONBCRDSUM').next().addClass('active');
  
  //REVISED CREDIT
  
  	var c=$("#STML_TOTCRDSUM").val().replace(/,/g,'');
	var d=$("#STML_TOTNONBCRDSUM").val().replace(/,/g,'');
	
	if(c=="")
	{
	c=0	
	}
	if(d=="")
	{
	d=0	
	}
	var TOTAL=parseFloat(c)-parseFloat(d)
	var DIVTOTAL=parseFloat(d)/parseFloat(c)*100
	if(isNaN(c))
	{
		c=0;
	}
	if(isNaN(d))
	{
		d=0;
	}
    $("#STML_REVCRDSUM").val(CURINRCommaSep(parseFloat(TOTAL).toFixed(0)));
	$("#STML_PERCNBCRDSUM").val(CURINRCommaSep(parseFloat(DIVTOTAL).toFixed(2)));
	$('#STML_PERCNBCRDSUM').next().addClass('active');
	$('#STML_REVCRDSUM').next().addClass('active');
	
}

function Creditsum()
{
  	var e=$("#STML_REVCRDSUM").val().replace(/,/g,'');
	var g=$("#STML_LST12MONSALE").val().replace(/,/g,'');
	
	if(e=="")
	{
	e=0	
	}
	if(g=="")
	{
	g=0	
	}
	var divsum=parseFloat(e)/parseFloat(g)
	if(isNaN(e))
	{
		e=0;
	}
	if(isNaN(g))
	{
		g=0;
	}
	$("#STML_PERCCRDSUM").val(CURINRCommaSep(parseFloat(divsum).toFixed(2)));
	$('#STML_PERCCRDSUM').next().addClass('active');
	
	//
	
	var b1=$("#STML_MONTHABB").val().replace(/,/g,'');
	var f=$("#STML_PERCNBCRDSUM").val().replace(/,/g,'');
	if(b1=="")
	{
	b1=0	
	}
	if(f=="")
	{
	f=0	
	}
	var mulsum=parseFloat(b1)*1-parseFloat(f)
	if(isNaN(b1))
	{
		b1=0;
	}
	if(isNaN(f))
	{
		f=0;
	}
	$("#STML_ADJUABB").val(CURINRCommaSep(parseFloat(mulsum).toFixed(0)));
	$('#STML_ADJUABB').next().addClass('active');
	
}

function Finalabb()
{
	
	var i=$("#STML_ADJUABB").val().replace(/,/g,'');
	var j=$("#STML_EMIOFLONMON").val().replace(/,/g,'');
	var k=$("#STML_EMIOFLON").val().replace(/,/g,'');
	if(i=="")
	{
	i=0	
	}
	if(j=="")
	{
	j=0	
	}	if(k=="")
	{
	k=0	
	}
	var Totalijk=parseFloat(i)-parseFloat(j)+parseFloat(k)
		if(isNaN(i))
	{
		i=0;
	}
	if(isNaN(j))
	{
		j=0;
	}
	if(isNaN(k))
	{
		k=0;
	}
	$("#STML_FINLABB").val(CURINRCommaSep(parseFloat(Totalijk).toFixed(0)));
	$('#STML_FINLABB').next().addClass('active');
	
	
	//EMI PER LAKH
	
/* 	var check=UI_getdata($("#PrcsID").val(),$("#STML_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	var ROI=($(check).find ('INTERESTRATE').text());
	var Tenur=($(check).find ('TENTURE').text());
	
	var LonAt=100000;
	//LnAt= $("#DMY3").val().split('|')[3];
	if(LonAt=='')
	{
		LonAt=0;
	}
	if(isNaN(LonAt))
	{
		LonAt=0;
	}
	if(ROI=='')
	{
		ROI=0;
	}
	if(isNaN(ROI))
	{
		ROI=0;
	}
	if(Tenur=='')
	{
		Tenur=0;
	}
	if(isNaN(Tenur))
	{
		Tenur=0;
	}
	var amt=0;
	amt=parseFloat(LonAt *((ROI/100)/12) * (Math.pow(1+((ROI/100)/12),Tenur)/((Math.pow(1+((ROI/100)/12),Tenur))-1)));
	$("#STML_PERLAKHEMI").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));

	$("#STML_PERLAKHEMI").next().addClass('active');  */
	
	
	var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	 var check=UI_getdata($("#PrcsID").val(),$("#STML_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	var ROI=($(check).find ('INTERESTRATE').text());
	var Tenur=($(check).find ('TENTURE').text());
	
/* 	ROI=$("#CITR_PROPOSEINR").val();
	Tenur=$("#CITR_PROTENOR").val(); */
	 var result=UI_getdata(ROI,Tenur,LnAmt,$("#PrcsID").val()+'|'+$("#STML_SCHEMEID").val(),"","LSW_SGETEMI_DATA");
	 var EMI=$(result).find("EMI").text();
	 	if(EMI=='')
	{
		EMI=0;
	}
	if(isNaN(EMI))
		{
			EMI=0;
		}
	$("#STML_PERLAKHEMI").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#STML_PERLAKHEMI").next().addClass('active'); 
	
	//MAXIMUM EMI POSSIBLE
	
	
	var i1=$("#STML_ADJUABB").val().replace(/,/g,'');
	var l1=$("#STML_FINLABB").val().replace(/,/g,'');
	if(i1=="")
	{
	i1=0	
	}
	if(l1=="")
	{
	l1=0	
	}
	if($("#STML_NUMBNKACCT").val()=="Single")
	{
		var chktotal=parseFloat(l1)*1;
	}
	else if($("#STML_NUMBNKACCT").val()=="Multiple")
	{
		var l2=1.33*parseFloat(i1);
		var l3=0.8*parseFloat(l1);
		var chktotal=Math.min((l2),(l3));
	}
	if(isNaN(i1))
	{
		i1=0;
	}
	if(isNaN(l1))
	{
		l1=0;
	}
	$("#STML_MAXEMIPOS").val(CURINRCommaSep(parseFloat(chktotal).toFixed(0)));
	$("#STML_MAXEMIPOS").next().addClass('active'); 
	
	//LOAN ELIGIBILITY	 "If n > l then l /m* 100000 else n /m * 100000"

	
	var LOANN=$("#STML_MAXEMIPOS").val().replace(/,/g,'');
	var LOANL=$("#STML_ADJUABB").val().replace(/,/g,'');
	var LOANM=$("#STML_PERLAKHEMI").val().replace(/,/g,'');
	if(LOANN=="")
	{
	LOANN=0	
	}
	if(LOANL=="")
	{
	LOANL=0	
	}
	if(LOANM=="")
	{
	LOANM=0	
	}
	if(LOANN>LOANL)
	{
		var LOANTOTAL=parseFloat(LOANL)/parseFloat(LOANM)*100000;
	}
	else
	{
		var LOANTOTAL=parseFloat(LOANN)/parseFloat(LOANM)*100000;
	}
	if(isNaN(LOANN))
	{
		LOANN=0;
	}
	if(isNaN(LOANL))
	{
		LOANL=0;
	}
	if(isNaN(LOANM))
	{
		LOANM=0;
	}
	$("#STML_LOANELIGIB").val(CURINRCommaSep(parseFloat(LOANTOTAL).toFixed(0)));
	$("#STML_LOANELIGIB").next().addClass('active'); 
	
	//PROPOSED LOAN
	
	var PROPOSEO=$("#STML_LOANELIGIB").val().replace(/,/g,'');
	var PROPOSELOAN=UI_getdata($("#PrcsID").val(),$("#STML_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	var LOANAMT=($(PROPOSELOAN).find ('LOANAMOUNT').text());
	
	var TOTALPROPOSE=Math.min((PROPOSEO),(LOANAMT))
	
	$("#STML_PROPLOAN").val(CURINRCommaSep(parseFloat(TOTALPROPOSE).toFixed(0)));
	$("#STML_PROPLOAN").next().addClass('active'); 
}

// q-(r*50%)-(s*50%)
 
function lapos()
{
	var LAPQ=$("#STML_OUTSEXLON").val().replace(/,/g,'');
	var LAPR=$("#STML_CCODLIMIT").val().replace(/,/g,'');
	var LAPS=$("#STML_LAPOS").val().replace(/,/g,'');
	if(LAPQ=="")
	{
	LAPQ=0	
	}
	if(LAPR=="")
	{
	LAPR=0	
	}
	if(LAPS=="")
	{
	LAPS=0	
	}
	var LAPT=parseFloat(LAPR)*50/100;
	var LAPT1=parseFloat(LAPS)*50/100;
	var LAPT2=parseFloat(LAPT)-parseFloat(LAPT1)
	var LAPTOTAL=parseFloat(LAPQ)-parseFloat(LAPT2)
	if(isNaN(LAPQ))
	{
		LAPQ=0;
	}
	if(isNaN(LAPR))
	{
		LAPR=0;
	}
	if(isNaN(LAPS))
	{
		LAPS=0;
	}
	$("#STML_OUTSCONS").val(CURINRCommaSep(parseFloat(LAPTOTAL).toFixed(0)));
	$("#STML_OUTSCONS").next().addClass('active'); 
	
	//TOTAL LOAN EXPOSURE 
	
	var OUTP=$("#STML_PROPLOAN").val().replace(/,/g,'');
	var OUTT=$("#STML_OUTSCONS").val().replace(/,/g,'');
	if(OUTP=="")
	{
	OUTP=0	
	}
	if(OUTT=="")
	{
	OUTT=0	
	}
	var OUTTOTAL=parseFloat(OUTP)+parseFloat(OUTT)
	if(isNaN(OUTP))
	{
		OUTP=0;
	}
	if(isNaN(OUTT))
	{
		OUTT=0;
	}
	$("#STML_TOTLONEXP").val(CURINRCommaSep(parseFloat(OUTTOTAL).toFixed(0)));
	$("#STML_TOTLONEXP").next().addClass('active'); 
	
	//TOTAL LOAN EXPOSURE SALES
	
	
	var SALU=$("#STML_TOTLONEXP").val().replace(/,/g,'');
	var SALG=$("#STML_LST12MONSALE").val().replace(/,/g,'');
	if(SALU=="")
	{
	SALU=0	
	}
	if(SALG=="")
	{
	SALG=0	
	}
	var SALTOTAL=parseFloat(SALU)/parseFloat(SALG)
	if(isNaN(SALU))
	{
		SALU=0;
	}
	if(isNaN(SALG))
	{
		SALG=0;
	}
	$("#STML_PERCTOTLONEXP").val(CURINRCommaSep(parseFloat(SALTOTAL).toFixed(2)));
	$("#STML_PERCTOTLONEXP").next().addClass('active'); 
	
	//TURN OVER VALIDATION
	
	
	var TURNV=$("#STML_PERCTOTLONEXP").val().replace(/,/g,'');
	if(TURNV<50/100)
	{
		$("#STML_TURNOVALID").val("true");
	}
	else
	{	
		$("#STML_TURNOVALID").val("Deviation in Turnover Validation");
	}
	$("#STML_TURNOVALID").next().addClass('active'); 
	
	
}

function salsincl()
{

	var SALESI=$("#STML_SALESMATCOST").val().replace(/,/g,'');
	var SALESL=$("#STML_FINLABB").val().replace(/,/g,'');
	if(SALESI=="")
	{
	SALESI=0	
	}
	if(SALESL=="")
	{
	SALESL=0	
	}
	var SALESCAL=3*parseFloat(SALESL);
	var SALESTOTAL=Math.min((SALESI),(SALESCAL));
	if(isNaN(SALESI))
	{
		SALESI=0;
	}
	if(isNaN(SALESL))
	{
		SALESL=0;
	}
	$("#STML_SALESCONS").val(CURINRCommaSep(parseFloat(SALESTOTAL).toFixed(0)));
	$("#STML_SALESCONS").next().addClass('active'); 
	
	
}
function outstand(){
	var OUTSTAND3=$("#STML_PRIMOUTSEXLOAN").val().replace(/,/g,'');
	var OUTSTAND4=$("#STML_FINLABB").val().replace(/,/g,'');
	var OUTSTAND5=$("#STML_PRIMLAPOS").val().replace(/,/g,'');
	if(OUTSTAND3=="")
	{
	OUTSTAND3=0	
	}
	if(OUTSTAND4=="")
	{
	OUTSTAND4=0	
	}
	if(OUTSTAND5=="")
	{
	OUTSTAND5=0	
	}
	var TOTAL4=parseFloat(OUTSTAND4)*50/100;
	var TOTAL5=parseFloat(OUTSTAND5)*50/100;
	var MIN45=parseFloat(TOTAL4)-parseFloat(TOTAL5);
	var TOTALOUT=parseFloat(OUTSTAND3)-parseFloat(MIN45);
	if(isNaN(OUTSTAND3))
	{
		OUTSTAND3=0;
	}
	if(isNaN(OUTSTAND4))
	{
		OUTSTAND4=0;
	}
	if(isNaN(OUTSTAND5))
	{
		OUTSTAND5=0;
	}
	$("#STML_PRIMOUTSCONS").val(CURINRCommaSep(parseFloat(TOTALOUT).toFixed(0)));
	$("#STML_PRIMOUTSCONS").next().addClass('active'); 
	
	//TOTAL LOAN EXPOSURE p+vi

	var EXPOP=$("#STML_PROPLOAN").val().replace(/,/g,'');
	var OUTSTAND6=$("#STML_PRIMOUTSCONS").val().replace(/,/g,'');
	if(EXPOP=="")
	{
	EXPOP=0	
	}
	if(OUTSTAND6=="")
	{
	OUTSTAND6=0	
	}
	var TOTALEXPO=parseFloat(EXPOP)+parseFloat(OUTSTAND6)
	if(isNaN(EXPOP))
	{
		EXPOP=0;
	}
	if(isNaN(OUTSTAND6))
	{
		OUTSTAND6=0;
	}
	$("#STML_PRIMTOTLONEXP").val(CURINRCommaSep(parseFloat(TOTALEXPO).toFixed(0)));
	$("#STML_PRIMTOTLONEXP").next().addClass('active'); 
	
	//TOTAL EXPOSURE SALES%
	
	var EXPO7=$("#STML_PRIMTOTLONEXP").val().replace(/,/g,'');
	var EXPO2=$("#STML_SALESCONS").val().replace(/,/g,'');
	if(EXPO7=="")
	{
	EXPO7=0	
	}
	if(EXPO2=="")
	{
	EXPO2=0	
	}	
	var TOLEXPO=parseFloat(EXPO7)/parseFloat(EXPO2)
	if(isNaN(EXPO7))
	{
		EXPO7=0;
	}
	if(isNaN(EXPO2))
	{
		EXPO2=0;
	}	
	$("#STML_PRIMTOTALLOAN").val(CURINRCommaSep(parseFloat(TOLEXPO).toFixed(2)));
	$("#STML_PRIMTOTALLOAN").next().addClass('active'); 
	
	//TURNOVER Validation
	
	var TURNVALID=$("#STML_PRIMTOTALLOAN").val().replace(/,/g,'');
	if(TURNVALID<50/100)
	{
		$("#STML_PRIMTURNOVALID").val("true");
	}
	else
	{	
		$("#STML_PRIMTURNOVALID").val("Deviation in Turnover Validation");
	}
	$("#STML_PRIMTURNOVALID").next().addClass('active'); 
	
	
	
	
}
function valueofwrk()
{
	var VALUE10=$("#STML_VALOFWORK").val().replace(/,/g,'');
	var VALUEG=$("#STML_LST12MONSALE").val().replace(/,/g,'');
	if(VALUE10=="")
	{
	VALUE10=0	
	}
	if(VALUEG=="")
	{
	VALUEG=0	
	}	
	var TOTALVAL=parseFloat(VALUE10)/parseFloat(VALUEG)
	if(isNaN(VALUE10))
	{
		VALUE10=0;
	}
	if(isNaN(VALUEG))
	{
		VALUEG=0;
	}	
	$("#STML_WORKORDER").val(CURINRCommaSep(parseFloat(TOTALVAL).toFixed(2)));
	$("#STML_WORKORDER").next().addClass('active'); 
	
	//WORK ORDER
	
	var WORKORD=$("#STML_WORKORDER").val().replace(/,/g,'');
	if(WORKORD<10/100)
	{
		$("#STML_WORKORDERVALID").val("true");
	}
	else
	{	
		$("#STML_WORKORDERVALID").val("Deviation in Turnover Validation");
	}
	$("#STML_WORKORDERVALID").next().addClass('active'); 
	
}
//iii-(iv*50%)-(v*50%)



