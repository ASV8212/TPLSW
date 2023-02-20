function GridControlDetailLINS  (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
  
		 
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
		    var rowno = TableID+meta.row;	 
			   var rowno1 = meta.row;		 
		 		var HTML =	'<span><input type="radio" class="custom-control-input Docmndry RadioMndtry CBSIDBfields APQA_OPTN'+rowno1+'" value="Yes"  id="APQA_OPTNY'+rowno+'" name="APQA_OPTN'+rowno+'"><label class="custom-control custom-control-label" for="APQA_OPTNY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '<input type="radio" class="custom-control-input  Docmndry RadioMndtry CBSIDBfields APQA_OPTN'+rowno1+'" value="No"  id="APQA_OPTNN'+rowno+'" name="APQA_OPTN'+rowno+'"><label class="custom-control custom-control-label" for="APQA_OPTNN'+rowno+'">No</label></span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=APQA_OPTN'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
		        return htmldata[0].outerHTML;   		
					
		         } 
				 }
    	
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}


function INSURTENURE(Years,Evnt)
{
	
	 var Tenure =$("#"+Years).val();
	 if(parseInt(Tenure)>30||parseInt(Tenure)=="0")
		 {
		  alert("Enter the Loan Tenure 0 to 30")
		  $("#"+Years).val('')
		  $("#"+Years).next().removeClass('active')
		 }
	 $(Evnt).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").val('');
	$(Evnt).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").next().removeClass('active');
}


function getCusNames()
{

var k=	$("#ALIH_PARTIES").val().length	
var CUSTOMERNAMES=""
 for(i=0;i<k;i++)
	 {
	 var CusID=$("#ALIH_PARTIES").val()[i]
	 var xml=UI_getdata(CusID,"","","","","LSW_SGETCUSNAMES")
	 var CUSNAME=$(xml).find('PERSONSNAME').text()
	 if(CUSNAME!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSNAME
		 }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       $("#ALIH_PARTIESNAME").val(CUSTOMERNAMES)
	

}

function GetCustomerName()
{
	var PrcsID=$("#PrcsID").val();
	var xml=UI_getdata(PrcsID,"","","","","LSW_SGETCUSTOMERNAMES")
	var CusName=$(xml).find('RESULT').html();	
//	$("#ALIH_PARTIES").append(CusName)
	
	$("[name='ALIH_PARTIES']").append(CusName)
	$("[name='ALIH_INSNOMNAME']").append(CusName)
	
}

function INSURDETAILS(INSURENCE,HIDDENFIELD,Event)
{
	if(Event=="Change")
	{
		var INSURENCENAME=INSURENCE
	}
	else
	{
	var INSURENCENAME=$(INSURENCE).attr("value")
	}
    $("#"+HIDDENFIELD).val(INSURENCENAME)
    $('.MultiGridTrg').trigger('click')
    
    $(INSURENCE).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").val('');
	$(INSURENCE).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").next().removeClass('active');

}



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
				   if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find("."+FldClas).attr("type")=="radio"){
					  var atLeastOneChecked=false;
					  
					  $($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=radio]').each(function() {
		    		         if ($(this).prop("checked") == true) {
		    		             atLeastOneChecked = true;  		              
		    		         }
		    		         
		    		     }); 
					  if(atLeastOneChecked == false)
					  {
					  RTNVAL = "No Data Available in " + $($($("#"+TableID+" thead").find('tr')[0]).find('th')[j]).text()
			    		+ " for " + $($($("#"+TableID).find('.tbodytr')[i]).find('td')[1]).text() + "-"+HDR;
			    		return RTNVAL;
					  }
				  }
				  }
			 }
	 
		  }
	 return RTNVAL;
}





function CheckDocVal(TableID,FldClas,HTML)
{
	  var Doclength=$("#"+TableID).find(".tbodytr").length
	  
	  for(k=0;k<Doclength;k++)
		  {
		  var tdcount=$($("#"+TableID).find(".tbodytr")[k]).find('.tbodytrtd').length
		   
		  for(l=0;l<tdcount;l++)
			 {
			  if($($($("#"+TableID).find(".tbodytr")[k]).find('.tbodytrtd')[l]).find("."+FldClas).length>0)
				  {
				    if($($($("#"+TableID).find(".tbodytr")[l]).find('.tbodytrtd')[l]).find("."+FldClas).attr("type")=="radio")
				      {
					   if ($("input[name='"+$($($("#"+TableID).find(".tbodytr")[k]).find('.tbodytrtd')[l]).find("."+FldClas).attr("name")+"']:checked").val() == 'Yes') 
		    		         {  
                               $(HTML).find("input[name=ICICIGRDVAL]").val('Yes')								 
		    		         }
				     }
				  }
			 }
		  }
}


function CheckApplicable(id,Event)
{
	  
				if(Event=="Load")
				{
					var DATA=["ApproveNote2|"];
	  for (k=0;k<DATA.length;k++){
	    	var ValuationID=DATA[k].split("|")[0];
	    	var row = $("." + ValuationID).find(".DYNROW").length;
	    	for (l=0;l<row;l++){
	    		var HTML =	 $("." + ValuationID).find(".DYNROW")[l];
					if($(HTML).find("[name='ALIH_APPCONSIDER']").val() == "No")
	    		    {
						$(HTML).find('.Applicable').hide()
	    			     $(HTML).find('.APPSTA').val('')
					     $(HTML).find('.PMAMT').val('')
					     $(HTML).find('.PMAMT').next().removeClass('active');
	    			     $(HTML).find('.APPSTA').removeClass('ALIHMndtry')
	    			//$(HTML).find('.Applradio').removeClass('ALIHMndtry')
	    		        $(HTML).find('.Docmndry').removeClass('RadioMndtry')
	    		        $(HTML).find('.APPSTA').next().removeClass('active')
	    		        $(HTML).find('input[type=radio]').prop('checked', false);
	    			    $(HTML).find('.APPDROPDOWN').material_select("destroy");	
	    			    $(HTML).find('.APPDROPDOWN').material_select();
					}
					else
					{
						$(HTML).find('.Applicable').show()
	    			    $(HTML).find('.APPSTA').addClass('ALIHMndtry')
	    			    //$(HTML).find('.Applradio').addClass('ALIHMndtry')
	    		        $(HTML).find('.Docmndry').addClass('RadioMndtry')
	                  if($(HTML).find('input:radio[name=ALIH_INSPTNR]')[0].checked == false && $(HTML).find('input:radio[name=ALIH_INSPTNR]')[1].checked == false)
                         { 
					          $(HTML).find("[name='ALIH_INSPTNRHIDDEN']").val('ICICI Bank')
                              $(HTML).find('input:radio[name=ALIH_INSPTNR]')[1].checked = true;
							  INSURDETAILS($(HTML).find("input[name='ALIH_INSPTNR']:checked").val(),$(HTML).find("[name='ALIH_INSPTNRHIDDEN']").val(),'Change')
                              //$(HTML).find('input:radio[name=ALIH_INSPTNR][value=ICICI Bank]').click();
                         }
					}
		      	   }
	              }
				}
				else
				{
					
					var HTML=$(id).closest('.DYNROW')
	    		if($(HTML).find("[name='ALIH_APPCONSIDER']").val() == "No")
	    		{
                    if (confirm("you have not opted for life insurance click ok to Proceed!!") == true) 
					{
                         $(HTML).find('.Applicable').hide()
	    			     $(HTML).find('.APPSTA').val('')
					     $(HTML).find('.PMAMT').val('')
					     $(HTML).find('.PMAMT').next().removeClass('active');
	    			     $(HTML).find('.APPSTA').removeClass('ALIHMndtry')
	    			//$(HTML).find('.Applradio').removeClass('ALIHMndtry')
	    		        $(HTML).find('.Docmndry').removeClass('RadioMndtry')
	    		        $(HTML).find('.APPSTA').next().removeClass('active')
	    		        $(HTML).find('input[type=radio]').prop('checked', false);
	    			    $(HTML).find('.APPDROPDOWN').material_select("destroy");	
	    			    $(HTML).find('.APPDROPDOWN').material_select();
						$(HTML).find("#LISave").click();
					}
                  else
                     {
						 //$(HTML).find("[name='ALIH_APPCONSIDER']").val('Yes')
						// $(HTML).find("[name='ALIH_APPCONSIDER']").find("option[value='Yes']").attr("selected","selected");
	                   // $(HTML).find('.Applicable').show()
						
						//var optn="<option  value='Yes'>Yes</option>"
                        //$(HTML).find("[name='ALIH_APPCONSIDER']").append(optn)
						$(HTML).find("[name='ALIH_APPCONSIDER']").val('Yes')
	                    $(HTML).find("[name='ALIH_APPCONSIDER'] option:contains('Yes')").attr("selected","selected")
						$(HTML).find("[name='ALIH_APPCONSIDER']").material_select();
	    			$(HTML).find('.APPSTA').addClass('ALIHMndtry')
	    			//$(HTML).find('.Applradio').addClass('ALIHMndtry')
	    		    $(HTML).find('.Docmndry').addClass('RadioMndtry')
	                  if($(HTML).find('input:radio[name=ALIH_INSPTNR]')[0].checked == false && $(HTML).find('input:radio[name=ALIH_INSPTNR]')[1].checked == false)
                         { 
					          $(HTML).find("[name='ALIH_INSPTNRHIDDEN']").val('ICICI Bank')
                              $(HTML).find('input:radio[name=ALIH_INSPTNR]')[1].checked = true;
							  INSURDETAILS($(HTML).find("input[name='ALIH_INSPTNR']:checked").val(),$(HTML).find("[name='ALIH_INSPTNRHIDDEN']").val(),'Change')
                              //$(HTML).find('input:radio[name=ALIH_INSPTNR][value=ICICI Bank]').click();
                         }
                     }	

	    			
                }
	    		else
	         	{
	    			$(HTML).find('.Applicable').show()
	    			$(HTML).find('.APPSTA').addClass('ALIHMndtry')
	    			//$(HTML).find('.Applradio').addClass('ALIHMndtry')
	    		    $(HTML).find('.Docmndry').addClass('RadioMndtry')
	                  if($(HTML).find('input:radio[name=ALIH_INSPTNR]')[0].checked == false && $(HTML).find('input:radio[name=ALIH_INSPTNR]')[1].checked == false)
                         { 
					          $(HTML).find("[name='ALIH_INSPTNRHIDDEN']").val('ICICI Bank')
                              $(HTML).find('input:radio[name=ALIH_INSPTNR]')[1].checked = true;
							  INSURDETAILS($(HTML).find("input[name='ALIH_INSPTNR']:checked").val(),$(HTML).find("[name='ALIH_INSPTNRHIDDEN']").val(),'Change')
                              //$(HTML).find('input:radio[name=ALIH_INSPTNR][value=ICICI Bank]').click();
                         }
                }
			  }
}

function PREMCALC(Evnt){
	var RTNVAL="";
	if($(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val()=="")
		{
		RTNVAL="Premium Tenure is Mandatory"
		return RTNVAL;
		}
	else if(parseFloat($(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val())>parseFloat($(Evnt).closest('.DYNROW').find("[name=ALIH_LONTNR]").val()))
		{
		RTNVAL="Policy Term is Greater than Loan Term"
		$(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val('');
		$(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").next().removeClass('active');
		return RTNVAL;
		}
	var op = UI_getdata($(".FormPageMultiTab .active a div").text(),$("#PrcsID").val(),$(Evnt).closest('.DYNROW').find("[name=ALIH_CUSID]").val(),$(Evnt).closest('.DYNROW').find("[name=ALIH_INSPTNR]:checked").val(),$(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val(),"LSW_SOFFLNINSCALC")
	var parser = new DOMParser();
	var xmlDoc= parser.parseFromString(op,"text/xml");;
	
	if(xmlDoc.getElementsByTagName('ERRRSLT').length > 0)
		{
		RTNVAL="Offline \n\r Premium Amount Generation Failed"
			  return RTNVAL;
		}
	else if(xmlDoc.getElementsByTagName('PREMAMTGST').length > 0){
		$(Evnt).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").val(CURCommaSep(parseFloat($(op).find('PREMAMTGST').text()).toFixed(0)));
		$(Evnt).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").next().addClass('active');
		alert("Offline \n\r Your Premium Amount is Rs."+ CURCommaSep(parseFloat($(op).find('PREMAMTGST').text()).toFixed(0)));
	}
	return RTNVAL;
}



function CallHDFCFn(Evnt)
{
   var RTNVAL="";
     if($(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val()=="")
		{
		//alert("Premium Tenure is Mandatory");
		//return;
		RTNVAL="Premium Tenure is Mandatory"
			    		  return RTNVAL;
		}
	else if(parseFloat($(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val())>parseFloat($(Evnt).closest('.DYNROW').find("[name=ALIH_LONTNR]").val()))
		{
		//alert("Policy Term is Greater than Loan Term");
		$(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val('');
		$(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").next().removeClass('active');
		 RTNVAL="Policy Term is Greater than Loan Term"
			    		  return RTNVAL;
		}
   else
   {		
   var param1=$("#PrcsID").val()
	   //var param1=$("#TXTCodeOTP").val();
   var param2=$(Evnt).closest('.DYNROW').find("[name=ALIH_CUSID]").val();
	   //var param2=$("#TXTusernameOTP").val();
   var param3=$(Evnt).closest('.DYNROW').find("[name=ALIH_INSPTNR]").val();
   var param4="";
   var param5="";
   var spname1="LSW_SGETPREMIUMINPUTDTLS";
   var spname2="LSW_supdateSMSstatus";
		var OP = "Success"
			$.ajax({
			  url: "/TPLSW/InsrncePrmeium",
			  data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
           async: false,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
			    	  var obj = JSON.parse(xml2)
			    	  if(obj["errors"]==null)
			    	  {
			    	  	$(Evnt).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").val(CURCommaSep(parseFloat(obj["gcppPremiumResult"].totalPremium).toFixed(0)));
			  		    $(Evnt).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").next().addClass('active');
			    	     alert("Online \n\r Your Premium Amount is Rs."+ CURCommaSep(parseFloat(obj["gcppPremiumResult"].totalPremium).toFixed(0)));
			    	  }
			    	  else
			    	  {
			    	  	//alert("Premium Amount Gentration Failed");
			    	  	 RTNVAL="Online \n\r Premium Amount Generation Failed"
			    	  		return RTNVAL;
			    	  }
			      },
			      error: function (xml2)
			      {
			    	  RTNVAL="Premium Amount Generation Failed"
			    		  return RTNVAL;
			      }
			  });
   }
		 return RTNVAL;
}


function ShowInsurLink(HTML,Cusid,Evnt)
{	
    if(Evnt=="Load")
    {
	 var Bank=$(HTML).find("input[name='ALIH_INSPTNR']:checked").val()
	 var Cusid=$(HTML).find("[name=ALIH_CUSID]").val();
	
	// var xml=UI_getdata($("#PrcsID").val(),Cusid,"","","","LSW_SGETINSURL");
	
	  //var URL=$(xml).find('URL').text()
	  

		if(Bank=="HDFC Bank")
		{
			if($(HTML).find('[name = ALIH_MNMFORM]').val()=="Non-Madical")
			{
           $(HTML).find(".HDFC").show();
		   $(HTML).find(".ICICI").hide();
		   $(HTML).find(".HDFC").css('display','block')
		   $(HTML).find(".ICICI").css('display','none')
			}
			else
			{
		   $(HTML).find(".HDFC").hide();
		   $(HTML).find(".ICICI").hide();
		   $(HTML).find(".HDFC").css('display','none')
		   $(HTML).find(".ICICI").css('display','none')
			}
		}
        else if(Bank=="ICICI Bank")
	    {
			if($(HTML).find("[name = ICICIGRDVAL]").val() != "Yes")
			{
            $(HTML).find(".HDFC").hide();
		    $(HTML).find(".ICICI").show();
			$(HTML).find(".HDFC").css('display','none')
		    $(HTML).find(".ICICI").css('display','block')
			}
			else
			{
			$(HTML).find(".HDFC").hide();
		    $(HTML).find(".ICICI").hide();
			$(HTML).find(".HDFC").css('display','none')
		    $(HTML).find(".ICICI").css('display','none')
			}
        }	
	}
	else
	{
	  var HTMLVal=$(HTML).closest(".DYNROW");
	  var Data=$(HTMLVal).find(HTML).attr("name");
      var Bank=$(HTMLVal).find("input[name='"+Data+"']:checked").val()
      var CusidVal=$("#"+Cusid)	  
		//var xml=UI_getdata($("#PrcsID").val(),CusidVal,"","","","LSW_SGETINSURL");
	
	 // var URL=$(xml).find('URL').text()
	  
		if(Bank=="HDFC Bank")
		{
           $(".HDFC").show();
		   $(".ICICI").hide();
		}
        else if(Bank=="ICICI Bank")
	    {
            $(".HDFC").hide();
		    $(".ICICI").hide();
        }	
	}
}

function generatePDF(Cusid,Bank,html)
{
	var Bank=$(html).find("input[name='ALIH_INSPTNR']:checked").val()
	var CusidVal=$("#"+Cusid).val();
	 var xml=UI_getdata($("#PrcsID").val(),CusidVal,Bank,"","","LSW_SGETINSURL");
	  var URL=$(xml).find('URL').text()
	  
	  if(URL !="")
	  {
		   if(Bank=="HDFC Bank")
		  {
	        window.open(URL)
		  }
		  else if(Bank=="ICICI Bank")
		  {
			  var IOP=LoadFrmXML("RS006");
	          var Path=window.location.origin
	              IOP=Path+IOP
			  var URL=$(xml).find('URL').text()
				  window.open(IOP+URL)
		  }
	  }
	  else
	  {
		  if(Bank=="HDFC Bank")
		  {
		  MAILCHK1234(Cusid)
		  }
		  else if(Bank=="ICICI Bank")
		  {
		  ICICICHK1234(Cusid)
		  }
	  }
}

function MAILCHK1234(Cusid)
 {
	  var param1=$("#PrcsID").val()
	   //var param1=$("#TXTCodeOTP").val();
      var param2=$("#"+Cusid).val();
	   //var param2=$("#TXTusernameOTP").val();
      var param3="";
      var param4="";
      var param5="";
      var spname1="LSW_SGETPREMIUMINPUTDTLS";
      var spname2="LSW_supdateSMSstatus";
   
		var OP = "Success"
			$.ajax({
			  url: "/TPLSW/InsrncePrmeiumReGen",
			  data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
              async: false,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
					  if(xml2=="")
					  {
						  
					  }
					  else if(xml2.split("|")[0] != "Success")
					  {
					  	 //var obj = JSON.parse(xml2.split("|")[0])
					  	 alert(xml2.split("|")[0])
					  }
					  else
					  {
					  	 var xml=UI_getdata($("#PrcsID").val(),CusidVal,"","","","LSW_SGETINSURL");
	                     var URL=$(xml).find('URL').text()
                           window.open(URL)
					  }
			     // alert("Mail Send Successfully");
			      },
			      error: function (xml2)
			      {
			     // alert("Mail Send Failed");
			return;
			      }
			  }); 
 }



function ICICICHK1234(Cusid)
 {
	
	  var param1=$("#PrcsID").val()
      var param2=$("#"+Cusid).val();
      var param3="";
      var param4="";
      var param5="3";
      var spname1="LSW_SGETICICIPREMIUMINPUTDTLS";
      var spname2="LSW_SGETICICIPREMIUMINPUTDTLS";
   
	 
		
		var OP = "Success"
			$.ajax({
			  url: "/TPLSW/InsrncePrmeiumICICI",
			  data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
              async: false,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
			     // alert("Mail Send Successfully");
				 if(xml2=="")
					  {
						  
					  }
					  else if(xml2.split("|")[0] != "Success")
					  {
					  	 //var obj = JSON.parse(xml2.split("|")[0])
					  	 alert(xml2.split("|")[0])
					  }
					  else
					  {
					  	 var xml=UI_getdata($("#PrcsID").val(),$("#"+Cusid).val(),"ICICI Bank","","","LSW_SGETINSURL");
	                     var IOP=LoadFrmXML("RS006");
	                     var Path=window.location.origin
	                         IOP=Path+IOP
						 var URL=$(xml).find('URL').text()
						 window.open(IOP+URL)
					  }
			      },
			      error: function (xml2)
			      {
			     // alert("Mail Send Failed");
			return;
			      }
			  });

	 
 }


function CheckHelthDetlMndtry(TableID,FldClas,HDR)
{
	if(HDR=="Active")
	{
		HDR="Online";
	}
	else if(HDR=="Inactive")
	{
		HDR="Offline";
	}
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
          if(j==2){
        	  if($($($("#"+TableID).find(".tbodytr")[i]).find('.tbodytrtd')[j]).find('input[type=radio]:checked').val()=="Yes")
			      {
			         RTNVAL = " This is Medical case and the policy generation should be "+HDR+", Do you want to proceed?";
				    	return RTNVAL;
		           }
                 }
				}
			 }
		  }
		 }
	 return RTNVAL;
}

function GentrateHDFCNonMedical(HTML,Event)
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	if(Event=="Load")
	{
    var Cusid=$(HTML).find("[name=ALIH_CUSID]").val();
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT096")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=HDFCNonMedicalForm-"+$("#DMY7").val().split("|")[7]+".pdf";
	}
	else
	{
		var Cusid=$("#"+HTML).val();
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT096")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=HDFCNonMedicalForm-"+$("#DMY7").val().split("|")[7]+".pdf";
	}
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function GentrateHDFCCovid(HTML,Event)
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	if(Event=="Load")
	{
    var Cusid=$(HTML).find("[name=ALIH_CUSID]").val();
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT0101")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=HDFCCOVID-19Form-"+$("#DMY7").val().split("|")[7]+".pdf";
	}
	else
	{
		var Cusid=$("#"+HTML).val();
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT0101")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=HDFCCOVID-19Form-"+$("#DMY7").val().split("|")[7]+".pdf";
	}
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function GentrateHDFCMedical(HTML,Event)
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	if(Event=="Load")
	{
	var Cusid=$(HTML).find("[name=ALIH_CUSID]").val();
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT097")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=HDFCMedicalForm-"+$("#DMY7").val().split("|")[7]+".pdf";
	}
	else
	{
		var Cusid=$("#"+HTML).val();
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT097")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=HDFCMedicalForm-"+$("#DMY7").val().split("|")[7]+".pdf";
	}
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}


function GentrateICICIMedical(HTML,Event)
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	if(Event=="Load")
	{
	var Cusid=$(HTML).find("[name=ALIH_CUSID]").val();
    ajaxindicatorstart("Downloading.. Please wait");
	var flname = IOP+LoadFrmXML("RT098")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=ICICIMedicalForm-"+$("#DMY7").val().split("|")[7]+".pdf";
	}
	else
	{
	var Cusid=$("#"+HTML).val();
    ajaxindicatorstart("Downloading.. Please wait");
	var flname = IOP+LoadFrmXML("RT098")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=ICICIMedicalForm-"+$("#DMY7").val().split("|")[7]+".pdf";	
	}
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}


function CheckGender(Gender,Relation,Event)
{
	if(Event=="Load")
    {
	 var Gend=$(Gender).find("input[name='ALIH_GENDR']:checked").val()
	  var Relationship=$(Gender).find("[name='ALIH_RELVID']").val()
	  var name=$(Gender).find("[name='ALIH_RELVID']").attr('id')
	   if(Gend=="Male")
	{
	     $(Gender).find("[name='ALIH_RELVID']").empty();
		 $(Gender).find("[name='ALIH_RELVID']").append('<option value="" >--Select--</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		 $(Gender).find("[name='ALIH_RELVID']").material_select();
	}
	else if(Gend=="Female")
	{
		$(Gender).find("[name='ALIH_RELVID']").empty();
		$(Gender).find("[name='ALIH_RELVID']").append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Other">Other</option>') 
		$(Gender).find("[name='ALIH_RELVID']").material_select();
	}
	else
	{
		$(Gender).find("[name='ALIH_RELVID']").empty();
		$(Gender).find("[name='ALIH_RELVID']").append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		$(Gender).find("[name='ALIH_RELVID']").material_select();
	}
	
	//var optn="<option  value='"+Relationship+"'>" + Relationship + "</option>"
	   // $("#"+ name).append(optn)
		$("#"+name+" option[value='" + Relationship + "']").attr("selected","selected")
	
	}
	else
	{
	  var HTMLVal=$(Gender).closest(".DYNROW");
	  var Data=$(HTMLVal).find(Gender).attr("name");
      var Gender=$(HTMLVal).find("input[name='"+Data+"']:checked").val()

	if(Gender=="Male")
	{
	     $("#"+Relation).empty();
		 $("#"+Relation).append('<option value="" >--Select--</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		 $("#"+Relation).material_select();
	}
	else if(Gender=="Female")
	{
		$("#"+Relation).empty();
		$("#"+Relation).append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Other">Other</option>') 
		$("#"+Relation).material_select();
	}
	else
	{
		$("#"+Relation).empty();
		$("#"+Relation).append('<option value="" >--Select--</option><option value="Mother">Mother</option><option value="Spouse">Spouse</option><option value="Sister">Sister</option><option value="Sister In-Law">Sister In-Law</option><option value="Neice">Neice</option><option value="Aunty">Aunty</option><option value="Father">Father</option><option value="Brother">Brother</option><option value="Brother In-Law">Brother In-Law</option><option value="Nephew">Nephew</option><option value="Uncle">Uncle</option><option value="Other">Other</option>') 
		$("#"+Relation).material_select();
	}
	}
	
}

function CallICICIFn(Evnt)
{
	
	var RTNVAL="";
     if($(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val()=="")
		{
		//alert("Premium Tenure is Mandatory");
		//return;
		RTNVAL="Premium Tenure is Mandatory"
			    		  return RTNVAL;
		}
	else if(parseFloat($(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val())>parseFloat($(Evnt).closest('.DYNROW').find("[name=ALIH_LONTNR]").val()))
		{
		//alert("Policy Term is Greater than Loan Term");
		$(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").val('');
		$(Evnt).closest('.DYNROW').find("[name=ALIH_INSTNR]").next().removeClass('active');
		 RTNVAL="Policy Term is Greater than Loan Term"
			    		  return RTNVAL;
		}
   else
   {		
   var param1=$("#PrcsID").val()
	   //var param1=$("#TXTCodeOTP").val();
   var param2=$(Evnt).closest('.DYNROW').find("[name=ALIH_CUSID]").val();
	   //var param2=$("#TXTusernameOTP").val();
   //var param3=$(Evnt).closest('.DYNROW').find("[name=ALIH_INSPTNR]").val();
      var param3="";
      var param4="InsrncePrmeiumICICI";
      var param5="1";
      var spname1="LSW_SGETICICIPREMIUMINPUTDTLS";
      var spname2="LSW_SGETICICIPREMIUMINPUTDTLS";
   
	 
		
		var OP = "Success"
			$.ajax({
			  url: "/TPLSW/InsrncePrmeiumICICI",
			  data: { param1: param1,param2: param2,param3: param3,param4: param4,param5: param5,spname1: spname1,spname2: spname2,Prvnt:$(window.parent.parent.document).find("#Prvnt").val() },
              async: false,
			      dataType: "text",
			      type: 'POST',
			      success: function OnSuccess_submit(xml2) {
			     	 //var obj = JSON.parse(xml2)
					 var obj = xml2
					 if(obj=="")
					 {
						  RTNVAL="Online \n\r Premium Amount Gentration Failed"
					  return RTNVAL;
					 }
			    	  else if(obj.split('|')[0]=='Success')
			    	  {
			    	  	$(Evnt).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").val(CURCommaSep(parseFloat(obj.split('|')[1]).toFixed(0)));
			  		    $(Evnt).closest('.DYNROW').find("[name=ALIH_INSAMOUNT]").next().addClass('active');
			    	     alert("Online \n\r Your Premium Amount is Rs."+ CURCommaSep(parseFloat(obj.split('|')[1]).toFixed(0)));
			    	  }
			    	  else
			    	  {
			    	  	//alert("Premium Amount Gentration Failed");
			    	  	 RTNVAL="Online \n\r Premium Amount Generation Failed"
			    	  		return RTNVAL;
			    	  }
			      },
			      error: function (xml2)
			      {
					  RTNVAL="Online \n\r Premium Amount Gentration Failed"
					  return RTNVAL;
				
			      }
			  });
   }
}


function ChkNomiName(CusID,Name)
{
	var CustomerId=$("#"+CusID).val();
	var NomiName=$("#"+Name).val();
	
	var xml=UI_getdata($("#PrcsID").val(),CustomerId,NomiName,"","","LSW_SCHKNOMINAME")
	
	if($(xml).find('RESULT').text() != "NO")
	{
		alert($(xml).find('RESULT').text());
		$("#"+Name).val('');
		return false;
	}
	
}